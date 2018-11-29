_$define("app/view/mine/other/aboutus", function (require, exports, module){
"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * about us
 */
// =======================================导入
var shareToPlatforms_1 = require("../../../../pi/browser/shareToPlatforms");
var root_1 = require("../../../../pi/ui/root");
var lang_1 = require("../../../../pi/util/lang");
var widget_1 = require("../../../../pi/widget/widget");
var modulConfig_1 = require("../../../modulConfig");
var tools_1 = require("../../../utils/tools");
var config_1 = require("../../../config");

var Aboutus = function (_widget_1$Widget) {
    _inherits(Aboutus, _widget_1$Widget);

    function Aboutus() {
        _classCallCheck(this, Aboutus);

        return _possibleConstructorReturn(this, (Aboutus.__proto__ || Object.getPrototypeOf(Aboutus)).apply(this, arguments));
    }

    _createClass(Aboutus, [{
        key: "create",
        value: function create() {
            _get(Aboutus.prototype.__proto__ || Object.getPrototypeOf(Aboutus.prototype), "create", this).call(this);
            this.language = this.config.value[lang_1.getLang()];
            this.state = {
                version: tools_1.getLocalVersion(),
                data: [{ value: this.language.itemTitle[0], components: 'app-view-mine-other-privacypolicy' }, { value: this.language.itemTitle[1], components: '' }, { value: this.language.itemTitle[2], components: '' }],
                walletLogo: modulConfig_1.getModulConfig('WALLET_LOGO'),
                walletName: modulConfig_1.getModulConfig('WALLET_NAME')
            };
        }
    }, {
        key: "itemClick",
        value: function itemClick(e, index) {
            if (index === 0 && this.state.data[index].components !== '') {
                root_1.popNew(this.state.data[index].components);
            } else if (index === 1) {
                // 版本更新
                var updateMod = pi_modules.update.exports;
                // 测试更新模块
                updateMod.checkUpdate(function (needUpdate) {
                    if (!needUpdate) {
                        tools_1.popNewMessage('已是最新版本');
                        return;
                    }
                    // 注：必须堵住原有的界面操作，不允许任何触发操作
                    updateMod.update(function (e) {
                        console.log('update progress: ', e);
                    });
                });
                // popNew('app-components-message-message', { content: this.state.cfgData.tips });
            } else {
                // TODO 分享下载
                root_1.popNew('app-components-share-share', {
                    shareType: shareToPlatforms_1.ShareToPlatforms.TYPE_LINK,
                    url: config_1.shareDownload,
                    title: this.state.walletName + "\u94B1\u5305",
                    content: "\u6211\u6B63\u5728\u4F7F\u7528" + this.state.walletName + "\uFF0C\u9080\u60A8\u4E00\u8D77\u6765\u4F7F\u7528\uFF01"
                });
                console.error(config_1.shareDownload);
            }
        }
    }, {
        key: "backPrePage",
        value: function backPrePage() {
            this.ok && this.ok();
        }
    }]);

    return Aboutus;
}(widget_1.Widget);

exports.Aboutus = Aboutus;
})