_$define("app/view/wallet/create/createWalletByImage", function (require, exports, module){
"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * create a wallet by image
 */
var root_1 = require("../../../../pi/ui/root");
var lang_1 = require("../../../../pi/util/lang");
var widget_1 = require("../../../../pi/widget/widget");
var localWallet_1 = require("../../../logic/localWallet");
var native_1 = require("../../../logic/native");
var modulConfig_1 = require("../../../modulConfig");
var account_1 = require("../../../utils/account");

var CreateWalletByImage = function (_widget_1$Widget) {
    _inherits(CreateWalletByImage, _widget_1$Widget);

    function CreateWalletByImage() {
        _classCallCheck(this, CreateWalletByImage);

        return _possibleConstructorReturn(this, (CreateWalletByImage.__proto__ || Object.getPrototypeOf(CreateWalletByImage)).apply(this, arguments));
    }

    _createClass(CreateWalletByImage, [{
        key: "create",
        value: function create() {
            _get(CreateWalletByImage.prototype.__proto__ || Object.getPrototypeOf(CreateWalletByImage.prototype), "create", this).call(this);
            this.init();
        }
    }, {
        key: "init",
        value: function init() {
            this.language = this.config.value[lang_1.getLang()];
            this.state = {
                chooseImage: false,
                imageBase64: '',
                imageHtml: '',
                imagePsw: '',
                imagePswAvailable: false,
                imgagePswConfirm: '',
                pswEqualed: false,
                walletName: modulConfig_1.getModulConfig('WALLET_NAME')
            };
        }
    }, {
        key: "backPrePage",
        value: function backPrePage() {
            this.ok && this.ok();
        }
    }, {
        key: "selectImageClick",
        value: function selectImageClick() {
            var _this2 = this;

            native_1.selectImage(function (width, height, base64) {
                _this2.state.chooseImage = true;
                // tslint:disable-next-line:max-line-length
                _this2.state.imageHtml = "<div style=\"background-image: url(" + base64 + ");width: 100%;height: 100%;position: absolute;top: 0;background-size: cover;background-position: center;background-repeat: no-repeat;\"></div>";
                _this2.state.imageBase64 = base64;
                console.log(base64);
                _this2.paint();
            });
        }
    }, {
        key: "imagePswClick",
        value: function imagePswClick() {
            // 防止事件冒泡  on-tap事件已经处理
        }
    }, {
        key: "imagePswChange",
        value: function imagePswChange(e) {
            this.state.imagePsw = e.value;
            this.state.imagePswAvailable = this.state.imagePsw.length > 0;
            this.state.pswEqualed = account_1.pswEqualed(this.state.imagePsw, this.state.imgagePswConfirm);
            this.paint();
        }
    }, {
        key: "imagePswConfirmChange",
        value: function imagePswConfirmChange(e) {
            this.state.imgagePswConfirm = e.value;
            this.state.pswEqualed = account_1.pswEqualed(this.state.imagePsw, this.state.imgagePswConfirm);
            this.paint();
        }
    }, {
        key: "nextClick",
        value: function nextClick() {
            if (!this.state.chooseImage) {
                root_1.popNew('app-components1-message-message', { content: this.language.tips[0] });
                return;
            }
            if (!this.state.pswEqualed) {
                root_1.popNew('app-components1-message-message', { content: this.language.tips[1] });
                return;
            }
            // tslint:disable-next-line:max-line-length
            root_1.popNew('app-view-wallet-create-createWallet', { itype: localWallet_1.CreateWalletType.Image, imageBase64: this.state.imageBase64, imagePsw: this.state.imagePsw });
            this.ok && this.ok();
        }
    }]);

    return CreateWalletByImage;
}(widget_1.Widget);

exports.CreateWalletByImage = CreateWalletByImage;
})