_$define("app/view/wallet/backup/shareMnemonic", function (require, exports, module){
"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * share mnemonic
 */
var shareToPlatforms_1 = require("../../../../pi/browser/shareToPlatforms");
var root_1 = require("../../../../pi/ui/root");
var lang_1 = require("../../../../pi/util/lang");
var widget_1 = require("../../../../pi/widget/widget");
var localWallet_1 = require("../../../logic/localWallet");
var modulConfig_1 = require("../../../modulConfig");
var tools_1 = require("../../../utils/tools");

var ShareMnemonic = function (_widget_1$Widget) {
    _inherits(ShareMnemonic, _widget_1$Widget);

    function ShareMnemonic() {
        _classCallCheck(this, ShareMnemonic);

        return _possibleConstructorReturn(this, (ShareMnemonic.__proto__ || Object.getPrototypeOf(ShareMnemonic)).apply(this, arguments));
    }

    _createClass(ShareMnemonic, [{
        key: "backPrePage",
        value: function backPrePage() {
            this.ok && this.ok();
        }
    }, {
        key: "setProps",
        value: function setProps(props, oldProps) {
            _get(ShareMnemonic.prototype.__proto__ || Object.getPrototypeOf(ShareMnemonic.prototype), "setProps", this).call(this, props, oldProps);
            this.language = this.config.value[lang_1.getLang()];
            this.init();
        }
    }, {
        key: "init",
        value: function init() {
            var len = this.props.fragments.length;
            var encryptFragments = tools_1.mnemonicFragmentEncrypt(this.props.fragments);
            console.log(encryptFragments);
            var successList = [];
            for (var i = 0; i < len; i++) {
                successList[i] = false;
            }
            this.state = {
                encryptFragments: encryptFragments,
                successList: successList,
                walletName: modulConfig_1.getModulConfig('WALLET_NAME')
            };
        }
        // 分享

    }, {
        key: "shareItemClick",
        value: function shareItemClick(e, index) {
            var _this2 = this;

            var fragment = this.state.encryptFragments[index];
            root_1.popNew('app-components-share-share', { text: fragment, shareType: shareToPlatforms_1.ShareToPlatforms.TYPE_IMG }, function (success) {
                _this2.state.successList[index] = true;
                _this2.paint();
                _this2.allShared();
            });
        }
    }, {
        key: "allShared",
        value: function allShared() {
            var allShared = true;
            for (var i = 0; i < this.state.successList.length; i++) {
                if (!this.state.successList[i]) {
                    allShared = false;
                }
            }
            if (allShared) {
                localWallet_1.deleteMnemonic();
                tools_1.popNewMessage(this.language.tips);
                // this.ok && this.ok();
            }
        }
    }]);

    return ShareMnemonic;
}(widget_1.Widget);

exports.ShareMnemonic = ShareMnemonic;
})