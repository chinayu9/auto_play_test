_$define("pi/browser/sendMessage", function (require, exports, module){
"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * 聊天
 */
var native_1 = require("./native");

var SendChatMessage = function (_native_1$NativeObjec) {
    _inherits(SendChatMessage, _native_1$NativeObjec);

    function SendChatMessage() {
        _classCallCheck(this, SendChatMessage);

        return _possibleConstructorReturn(this, (SendChatMessage.__proto__ || Object.getPrototypeOf(SendChatMessage)).apply(this, arguments));
    }

    _createClass(SendChatMessage, [{
        key: "prepareChat",

        /**
         * 跳转到Telegram聊天
         */
        value: function prepareChat(param) {
            this.call('jumpToTelegram', param);
        }
        /**
         * 设置代理
         * @param param 设置的回调
         */

    }, {
        key: "setProxy",
        value: function setProxy(param) {
            this.call('setAndroidProxy', param);
        }
    }]);

    return SendChatMessage;
}(native_1.NativeObject);

exports.SendChatMessage = SendChatMessage;
native_1.registerSign(SendChatMessage, {
    jumpToTelegram: [],
    setAndroidProxy: [{
        name: 'proxyIp',
        type: native_1.ParamType.String
    }, {
        name: 'proxyPort',
        type: native_1.ParamType.Number
    }, {
        name: 'userName',
        type: native_1.ParamType.String
    }, {
        name: 'password',
        type: native_1.ParamType.String
    }]
});
})