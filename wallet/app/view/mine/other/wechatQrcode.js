_$define("app/view/mine/other/wechatQrcode", function (require, exports, module){
"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * 联系我们
 */
// ===============================================导入
var shareToPlatforms_1 = require("../../../../pi/browser/shareToPlatforms");
var root_1 = require("../../../../pi/ui/root");
var lang_1 = require("../../../../pi/util/lang");
var widget_1 = require("../../../../pi/widget/widget");
var modulConfig_1 = require("../../../modulConfig");
// ==================================================导出

var WechatQrcode = function (_widget_1$Widget) {
    _inherits(WechatQrcode, _widget_1$Widget);

    function WechatQrcode() {
        _classCallCheck(this, WechatQrcode);

        return _possibleConstructorReturn(this, (WechatQrcode.__proto__ || Object.getPrototypeOf(WechatQrcode)).apply(this, arguments));
    }

    _createClass(WechatQrcode, [{
        key: "create",
        value: function create() {
            _get(WechatQrcode.prototype.__proto__ || Object.getPrototypeOf(WechatQrcode.prototype), "create", this).call(this);
            this.language = this.config.value[lang_1.getLang()];
            this.state = {
                walletName: modulConfig_1.getModulConfig('WALLET_NAME'),
                wachatHelperQrcode: modulConfig_1.getModulConfig('WECHAT_HELPER'),
                wachatQrcode: modulConfig_1.getModulConfig('WECHAT_ACCOUNT')
            };
        }
    }, {
        key: "backPrePage",
        value: function backPrePage() {
            this.ok && this.ok();
        }
    }, {
        key: "shareImg",
        value: function shareImg() {
            var _this2 = this;

            var stp = new shareToPlatforms_1.ShareToPlatforms();
            stp.init();
            stp.makeScreenShot({
                success: function success(result) {
                    root_1.popNew('app-components-share-share', { shareType: shareToPlatforms_1.ShareToPlatforms.TYPE_SCREEN });
                },
                fail: function fail(result) {
                    root_1.popNew('app-components-message-message', { content: _this2.language.shareScreen });
                }
            });
            console.log('截图截图截图');
        }
    }]);

    return WechatQrcode;
}(widget_1.Widget);

exports.WechatQrcode = WechatQrcode;
})