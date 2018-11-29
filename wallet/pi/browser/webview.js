_$define("pi/browser/webview", function (require, exports, module){
"use strict";
// ========================= import 

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

Object.defineProperty(exports, "__esModule", { value: true });
var native_1 = require("./native");
// ========================= export

var WebViewManager = function (_native_1$NativeObjec) {
    _inherits(WebViewManager, _native_1$NativeObjec);

    function WebViewManager() {
        _classCallCheck(this, WebViewManager);

        return _possibleConstructorReturn(this, (WebViewManager.__proto__ || Object.getPrototypeOf(WebViewManager)).apply(this, arguments));
    }

    _createClass(WebViewManager, null, [{
        key: "open",

        /**
         * 创建新的WebView窗口并弹出来
         * 注：webViewName不能和已有的WebView重复，如果相同，抛异常
         * 注：主WebView的名字是"default"
         */
        value: function open(webViewName, url, title, injectContent) {
            webViewMgr.call("openWebView", { webViewName: webViewName, url: url, title: title, injectContent: injectContent });
        }
        /**
         * 释放指定名字的WebView
         * 注：不能使用这个释放主WebView
         */

    }, {
        key: "close",
        value: function close(webViewName) {
            webViewMgr.call("closeWebView", { webViewName: webViewName });
        }
        /**
         * 往指定名字的WebView发信息
         */

    }, {
        key: "postMessage",
        value: function postMessage(webViewName, message) {
            webViewMgr.call("postWebViewMessage", { webViewName: webViewName, message: message });
        }
        /**
         * 注册收到别的webView发过来的postmessage信息后的回调函数
         */

    }, {
        key: "addPostMessageListener",
        value: function addPostMessageListener(listener) {
            if (postMessageListeners.indexOf(listener) < 0) {
                postMessageListeners.push(listener);
            }
        }
        /**
         * 取消注册当收到别的WebView发过来的postmessage消息后的回调函数
         */

    }, {
        key: "removePostMessageListener",
        value: function removePostMessageListener(listener) {
            var position = postMessageListeners.indexOf(listener);
            if (position >= 0) {
                postMessageListeners.splice(position, 1);
            }
        }
        /**
         * 往指定名字的WebView调用指定模块的导出方法
         * data: 指定对方WebView执行的模块和导出方法
         * callback：返回结果的回调函数
         * 注：RPC都是一来一回的结构，没有注册一次可以调用多次的结构！
         */

    }, {
        key: "rpc",
        value: function rpc(webViewName, data, callback) {
            var funcs = [];
            data.params = data.params || [];
            data.params = data.params.map(function (v) {
                if (v === undefined) {
                    v = null;
                } else if (v instanceof Function) {
                    var id = funcs.length;
                    funcs.push(v);
                    v = RPC_CALLBACK_PARAM + id;
                }
                return v;
            });
            var sign = data;
            if (callback) {
                sign.resultCallbackID = funcs.length;
                funcs.push(callback);
            }
            if (funcs.length > 0) {
                sign.rpcID = ++rpcCurrentID;
                rpcMap.set(sign.rpcID, funcs);
            }
            WebViewManager.postMessage(webViewName, RPC_CALL_START + JSON.stringify(sign));
        }
    }]);

    return WebViewManager;
}(native_1.NativeObject);

exports.WebViewManager = WebViewManager;
// ========================= implmentation
native_1.registerSign(WebViewManager, {
    openWebView: [{
        name: "webViewName",
        type: native_1.ParamType.String
    }, {
        name: "url",
        type: native_1.ParamType.String
    }, {
        name: "title",
        type: native_1.ParamType.String
    }, {
        name: "injectContent",
        type: native_1.ParamType.String
    }],
    closeWebView: [{
        name: "webViewName",
        type: native_1.ParamType.String
    }],
    postWebViewMessage: [{
        name: "webViewName",
        type: native_1.ParamType.String
    }, {
        name: "message",
        type: native_1.ParamType.String
    }]
});
var webViewMgr = new WebViewManager();
webViewMgr.init();
/**
 * 特殊的消息开头，代表这是一个RPC调用
 */
var RPC_CALL_START = "$WEBVIEW_RPC_CALL: ";
/**
 * 特殊的消息开头，代表这是一个RPC回应
 */
var RPC_REPLY_START = "$WEBVIEW_RPC_REPLY: ";
/**
 * 特殊的消息格式，代表参数是一个函数
 */
var RPC_CALLBACK_PARAM = "$WEBVIEW_RPC_FUNCTION_PARAM: ";
/**
 * 监听postmessage的列表
 */
var postMessageListeners = [];
/**
 * rpc的当前可用的id 和 RPC映射表
 */
var rpcCurrentID = 0;
var rpcMap = new Map();
/**
 * 注册到window上的全局函数，用于接收别的webView发送过来的消息
 */
window["onWebViewPostMessage"] = function (fromWebView, message) {
    // 收到对方的rpc调用请求，处理
    if (message.startsWith(RPC_CALL_START)) {
        message = message.slice(RPC_CALL_START.length);
        var data = JSON.parse(message);
        return handleRpcCall(fromWebView, data);
    }
    // 收到对方的rpc回应，处理
    if (message.startsWith(RPC_REPLY_START)) {
        message = message.slice(RPC_REPLY_START.length);
        var _data = JSON.parse(message);
        return handleRpcReply(_data);
    }
    // 其他消息，看高层，谁关心谁处理
    for (var _iterator = postMessageListeners, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator]();;) {
        var _ref;

        if (_isArray) {
            if (_i >= _iterator.length) break;
            _ref = _iterator[_i++];
        } else {
            _i = _iterator.next();
            if (_i.done) break;
            _ref = _i.value;
        }

        var listener = _ref;

        listener(fromWebView, message);
    }
};
/**
 * 收到对方RPC之后的处理
 * @param fromWebViewName
 * @param message
 */
var handleRpcCall = function handleRpcCall(fromWebViewName, _ref2) {
    var moduleName = _ref2.moduleName,
        methodName = _ref2.methodName,
        params = _ref2.params,
        rpcID = _ref2.rpcID,
        resultCallbackID = _ref2.resultCallbackID;

    var func = void 0,
        result = void 0;
    var mod = window["pi_modules"][moduleName];
    if (!mod) {
        result = {
            error: "throw error, can't find module " + moduleName
        };
    } else {
        func = mod.exports[methodName];
        if (!func) {
            result = {
                error: "throw error, can't find module " + moduleName + ", function = " + methodName
            };
        }
    }
    if (func) {
        /**
         * 将参数的回调函数恢复回来
         */
        params = params.map(function (v) {
            if (typeof v === "string" && v.startsWith(RPC_CALLBACK_PARAM)) {
                var id = JSON.parse(v.slice(RPC_CALLBACK_PARAM.length));
                return function () {
                    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
                        args[_key] = arguments[_key];
                    }

                    var sign = {
                        args: args,
                        rpcID: rpcID,
                        callbackID: id
                    };
                    var message = RPC_REPLY_START + JSON.stringify(sign);
                    WebViewManager.postMessage(fromWebViewName, message);
                };
            }
            return v;
        });
        try {
            result = func.apply(undefined, _toConsumableArray(params));
        } catch (e) {
            func = undefined;
            result = {
                error: "call throw error"
            };
        }
    }
    // 异常情况时，func为undefined，这时必须让对方的rpc释放掉
    if (!func || resultCallbackID !== undefined) {
        var sign = {
            args: [result]
        };
        if (rpcID !== undefined) {
            sign.rpcID = rpcID;
        }
        if (resultCallbackID !== undefined) {
            sign.callbackID = resultCallbackID;
        }
        var message = RPC_REPLY_START + JSON.stringify(sign);
        WebViewManager.postMessage(fromWebViewName, message);
    }
};
/**
 * 收到对方RPC回应之后的处理
 */
var handleRpcReply = function handleRpcReply(_ref3) {
    var rpcID = _ref3.rpcID,
        callbackID = _ref3.callbackID,
        args = _ref3.args;

    var funcs = rpcMap.get(rpcID);
    var f = funcs && funcs[callbackID];
    if (f) {
        f.apply(undefined, _toConsumableArray(args));
    }
    rpcMap.delete(rpcID);
};
})