_$define("pi/browser/native", function (require, exports, module){
"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

Object.defineProperty(exports, "__esModule", { value: true });
var base64_1 = require("../util/base64");
// 当前回调对应的索引
var callIDMax = 1;
/**
 * 回调函数对应的id map
 */
var callIDMap = new Map();
/**
 * 底层回调方法的约定
 */
var NativeCode;
(function (NativeCode) {
    NativeCode[NativeCode["Success"] = 0] = "Success";
    NativeCode[NativeCode["Fail"] = 1] = "Fail";
    NativeCode[NativeCode["Callback"] = 100] = "Callback";
})(NativeCode = exports.NativeCode || (exports.NativeCode = {}));
/**
 * 类型
 */
var ParamType;
(function (ParamType) {
    ParamType["Number"] = "number";
    ParamType["String"] = "string";
    ParamType["Bytes"] = "ArrayBuffer";
})(ParamType = exports.ParamType || (exports.ParamType = {}));
/**
 * 对象的初始化状态
 */
var NativeState;
(function (NativeState) {
    NativeState[NativeState["UnInit"] = 0] = "UnInit";
    NativeState[NativeState["Init"] = 1] = "Init";
    NativeState[NativeState["Close"] = 2] = "Close"; // 已经关闭
})(NativeState = exports.NativeState || (exports.NativeState = {}));
var signMap = new Map();
/**
 * 注册类的方法签名
 * @param constructor 类的构造函数
 * @param sign
 * {
 *    "getPerson": [{name: "paramName", type: ParamType.Number}...]
 * }
 */
exports.registerSign = function (constructor, sign) {
    var map = new Map();
    for (var methodName in sign) {
        map.set(methodName, sign[methodName]);
    }
    signMap.set(constructor, map);
};
exports.addCallback = function (callback) {
    var id = callIDMax++;
    callIDMap.set(id, {
        callback: callback
    });
    return id;
};
exports.removeCallback = function (id) {
    callIDMap.delete(id);
};
/**
 * 底层对象，供高层扩展
 */

var NativeObject = function () {
    function NativeObject() {
        _classCallCheck(this, NativeObject);

        this.id = 0; // 底层对象对应的id，如果为0代表尚未初始化成功
        this.state = NativeState.UnInit; // 当前状态
        this.waits = []; // 正在初始化时候，积累的函数；最后一个是方法名，其他是方法的参数
    }
    /**
     * 调用底层静态方法
     */


    _createClass(NativeObject, [{
        key: "init",

        /**
         * 初始化方法，创建对象
         * @param cb 监听器
         */
        value: function init(cb) {
            var _this = this;

            if (this.state !== NativeState.UnInit) {
                throw new Error('NativeObject already inited');
            }
            this.state = NativeState.Init;
            var func = function func(id) {
                _this.id = id;
                // 调用积累函数

                var _loop = function _loop() {
                    if (_isArray) {
                        if (_i >= _iterator.length) return "break";
                        _ref = _iterator[_i++];
                    } else {
                        _i = _iterator.next();
                        if (_i.done) return "break";
                        _ref = _i.value;
                    }

                    var w = _ref;

                    var name = w.pop();
                    w = w ? w[0] : undefined;
                    setTimeout(function () {
                        if (name === 'close') {
                            _this.close(w);
                        } else {
                            _this.call(name, w);
                        }
                    }, 0);
                };

                for (var _iterator = _this.waits, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator]();;) {
                    var _ref;

                    var _ret = _loop();

                    if (_ret === "break") break;
                }
                _this.waits.length = 0;
                cb && cb.success && cb.success();
            };
            var cbID = callIDMax++;
            callIDMap.set(cbID, {
                success: func
            });
            exports.callNative(this.constructor.name, 'init', 0, cbID);
        }
        /**
         * 删除底层对象
         */

    }, {
        key: "close",
        value: function close(cb) {
            if (this.state !== NativeState.Init) {
                alert("NativeObject.close isn't use, state = " + this.state);
                throw new Error('NativeObject isn\'t use');
            }
            if (this.id === 0) {
                this.waits.push([cb, 'close']);
                return;
            }
            this.state = NativeState.Close;
            var cbID = 0;
            if (cb.success) {
                cbID = callIDMax++;
                callIDMap.set(cbID, {
                    success: cb.success
                });
            }
            var id = this.id;
            this.id = 0;
            exports.callNative(this.constructor.name, 'close', id, cbID);
        }
        /**
         * 调用底层方法
         */

    }, {
        key: "call",
        value: function call(methodName, params) {
            if (this.state !== NativeState.Init) {
                throw new Error(methodName + " NativeObject isn't use");
            }
            if (this.id === 0) {
                this.waits.push([params, methodName]);
                return;
            }
            NativeObject.callStatic(this.constructor, methodName, params, this.id);
        }
    }], [{
        key: "callStatic",
        value: function callStatic(constructor, methodName, params) {
            var _exports;

            var id = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;

            var className = constructor.name;
            var cbID = 0;
            if (params.success || params.fail || params.process) {
                cbID = callIDMax++;
                callIDMap.set(cbID, {
                    success: params.success,
                    fail: params.fail
                });
            }
            var args = [];
            var methodSign = signMap.get(constructor);
            var signs = methodSign.get(methodName);
            for (var _iterator2 = signs, _isArray2 = Array.isArray(_iterator2), _i2 = 0, _iterator2 = _isArray2 ? _iterator2 : _iterator2[Symbol.iterator]();;) {
                var _ref2;

                if (_isArray2) {
                    if (_i2 >= _iterator2.length) break;
                    _ref2 = _iterator2[_i2++];
                } else {
                    _i2 = _iterator2.next();
                    if (_i2.done) break;
                    _ref2 = _i2.value;
                }

                var p = _ref2;

                if (!(p.name in params)) {
                    throw new Error(className + "." + methodName + ", value " + p.name + " isn't exist");
                }
                var value = params[p.name];
                switch (p.type) {
                    case ParamType.Number:
                        if (typeof value !== 'number') {
                            throw new Error(className + "." + methodName + ", type " + p.type + " of value " + p.name + " isn't match");
                        }
                        break;
                    case ParamType.String:
                        if (typeof value !== 'string') {
                            throw new Error(className + "." + methodName + ", type " + p.type + " of value " + p.name + " isn't match");
                        }
                        break;
                    case ParamType.Bytes:
                        if (!(value instanceof ArrayBuffer)) {
                            throw new Error(className + "." + methodName + ", type " + p.type + " of value " + p.name + " isn't match");
                        }
                        value = base64_1.arrayBufferToBase64(value);
                        break;
                    default:
                        throw new Error(className + "." + methodName + ", type " + p.type + " of value " + p.name + " isn't exist");
                }
                args.push(value);
            }
            (_exports = exports).callNative.apply(_exports, [className, methodName, id, cbID].concat(args));
        }
    }]);

    return NativeObject;
}();

exports.NativeObject = NativeObject;
/**
 * 调用底层函数
 *
 */
exports.callNative = function (className, methodName, nativeID, listenerID) {
    for (var _len = arguments.length, args = Array(_len > 4 ? _len - 4 : 0), _key = 4; _key < _len; _key++) {
        args[_key - 4] = arguments[_key];
    }

    var str = navigator.userAgent;
    if (str.indexOf('YINENG_ANDROID') >= 0) {
        // alert(`callNative(${className}, ${methodName}, ${nativeID}, ${listenerID}, ${JSON.stringify(args)})`)
        window.JSBridge.postMessage(className, methodName, nativeID, listenerID, JSON.stringify(args));
    } else if (str.indexOf('YINENG_IOS') >= 0) {
        // JS通知WKWebView
        window.webkit.messageHandlers.Native.postMessage([className, methodName, nativeID, listenerID].concat(args));
    }
};
/**
 * 底层的回调
 */
window.handle_Native_Message = function (cbID, code) {
    for (var _len2 = arguments.length, args = Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
        args[_key2 - 2] = arguments[_key2];
    }

    // alert(`handle_Native_Message(${cbID}, ${code}, ${args.join(",")})`);
    if (cbID === 0) return;
    var cb = callIDMap.get(cbID);
    if (!cb) {
        return;
    }
    switch (code) {
        case NativeCode.Success:
            cb.success && cb.success.apply(cb, args);
            callIDMap.delete(cbID); // 成功回调只调用一次
            break;
        case NativeCode.Fail:
            cb.fail && cb.fail.apply(cb, args);
            callIDMap.delete(cbID); // 失败回调只调用一次
            break;
        case NativeCode.Callback:
            // 通用型回调由应用逻辑负责移除
            cb.callback && cb.callback.apply(cb, args);
            break;
        default:
            alert("NativeObject Callback error, code = " + code + " don't match");
            throw new Error("NativeObject Callback error, code = " + code + " don't match");
    }
};
window.handle_Native_ThrowError = function (className, methodName, msg) {
    alert("handle_Native_ThrowError, " + className + "." + methodName + " failed: " + msg);
    throw new Error("handle_Native_ThrowError, " + className + "." + methodName + " failed: " + msg);
};
})