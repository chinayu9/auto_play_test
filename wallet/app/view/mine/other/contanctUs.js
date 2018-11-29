_$define("app/view/mine/other/contanctUs", function (require, exports, module){
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
var root_1 = require("../../../../pi/ui/root");
var lang_1 = require("../../../../pi/util/lang");
var widget_1 = require("../../../../pi/widget/widget");
var native_1 = require("../../../logic/native");
var modulConfig_1 = require("../../../modulConfig");
var tools_1 = require("../../../utils/tools");
// ==================================================导出

var ContanctUs = function (_widget_1$Widget) {
    _inherits(ContanctUs, _widget_1$Widget);

    function ContanctUs() {
        _classCallCheck(this, ContanctUs);

        return _possibleConstructorReturn(this, (ContanctUs.__proto__ || Object.getPrototypeOf(ContanctUs)).apply(this, arguments));
    }

    _createClass(ContanctUs, [{
        key: "create",
        value: function create() {
            _get(ContanctUs.prototype.__proto__ || Object.getPrototypeOf(ContanctUs.prototype), "create", this).call(this);
            this.language = this.config.value[lang_1.getLang()];
            this.state = {
                version: tools_1.getLocalVersion(),
                data: [{ value: this.language.itemTitle[0], desc: modulConfig_1.getModulConfig('WALLET_WEBSITE') }, { value: this.language.itemTitle[1], desc: modulConfig_1.getModulConfig('WALLET_NAME') + this.language.itemTitle[2] }, { value: this.language.itemTitle[3], desc: modulConfig_1.getModulConfig('WALLET_NAME') }],
                walletLogo: modulConfig_1.getModulConfig('WALLET_LOGO'),
                walletName: modulConfig_1.getModulConfig('WALLET_NAME')
            };
        }
    }, {
        key: "backPrePage",
        value: function backPrePage() {
            this.ok && this.ok();
        }
    }, {
        key: "itemClick",
        value: function itemClick(e, ind) {
            switch (ind) {
                // 点击钱包官网
                case 0:
                    native_1.openNewActivity(this.state.data[0].desc, this.state.walletName);
                    break;
                // KuPay小助手
                case 1:
                    root_1.popNew('app-view-mine-other-wechatQrcode', { fg: 0 });
                    break;
                // KuPay公众号
                case 2:
                    root_1.popNew('app-view-mine-other-wechatQrcode', { fg: 1 });
                    break;
                default:
                // console.log(this.state.cfgData.tips);
            }
        }
    }]);

    return ContanctUs;
}(widget_1.Widget);

exports.ContanctUs = ContanctUs;
})