_$define("app/view/wallet/import/standardImport", function (require, exports, module){
"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * standard import bu Mnemonic
 */
var root_1 = require("../../../../pi/ui/root");
var widget_1 = require("../../../../pi/widget/widget");
var home_1 = require("./home");
var constants_1 = require("../../../utils/constants");
var genmnemonic_1 = require("../../../core/genmnemonic");
var localWallet_1 = require("../../../logic/localWallet");
var lang_1 = require("../../../../pi/util/lang");

var StandardImport = function (_widget_1$Widget) {
    _inherits(StandardImport, _widget_1$Widget);

    function StandardImport() {
        _classCallCheck(this, StandardImport);

        return _possibleConstructorReturn(this, (StandardImport.__proto__ || Object.getPrototypeOf(StandardImport)).apply(this, arguments));
    }

    _createClass(StandardImport, [{
        key: "create",
        value: function create() {
            _get(StandardImport.prototype.__proto__ || Object.getPrototypeOf(StandardImport.prototype), "create", this).call(this);
            this.init();
        }
    }, {
        key: "init",
        value: function init() {
            this.language = this.config.value[lang_1.getLang()];
            this.state = {
                mnemonic: '',
                psw: '',
                pswConfirm: ''
            };
        }
    }, {
        key: "inputChange",
        value: function inputChange(r) {
            var mnemonic = r.value;
            this.state.mnemonic = mnemonic;
        }
    }, {
        key: "nextClick",
        value: function nextClick(e) {
            if (this.state.mnemonic.length <= 0) {
                root_1.popNew('app-components1-message-message', { content: this.language.tips });
                return;
            }
            if (!genmnemonic_1.isValidMnemonic(constants_1.lang, this.state.mnemonic)) {
                root_1.popNew('app-components1-message-message', { content: this.language.invalidMnemonicTips });
                return;
            }
            var w = home_1.forelet.getWidget(home_1.WIDGET_NAME);
            if (w) {
                w.ok && w.ok();
            }
            // tslint:disable-next-line:max-line-length
            root_1.popNew('app-view-wallet-create-createWallet', { itype: localWallet_1.CreateWalletType.StrandarImport, mnemonic: this.state.mnemonic });
        }
    }]);

    return StandardImport;
}(widget_1.Widget);

exports.StandardImport = StandardImport;
})