_$define("app/view/wallet/create/createWallet", function (require, exports, module){
"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var __awaiter = undefined && undefined.__awaiter || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
            try {
                step(generator.next(value));
            } catch (e) {
                reject(e);
            }
        }
        function rejected(value) {
            try {
                step(generator["throw"](value));
            } catch (e) {
                reject(e);
            }
        }
        function step(result) {
            result.done ? resolve(result.value) : new P(function (resolve) {
                resolve(result.value);
            }).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * create wallet
 */
var root_1 = require("../../../../pi/ui/root");
var lang_1 = require("../../../../pi/util/lang");
var resize_1 = require("../../../../pi/widget/resize/resize");
var widget_1 = require("../../../../pi/widget/widget");
var localWallet_1 = require("../../../logic/localWallet");
var native_1 = require("../../../logic/native");
var pull_1 = require("../../../net/pull");
var memstore_1 = require("../../../store/memstore");
var account_1 = require("../../../utils/account");
var tools_1 = require("../../../utils/tools");
var walletTools_1 = require("../../../utils/walletTools");
var home_1 = require("./home");

var CreateWallet = function (_widget_1$Widget) {
    _inherits(CreateWallet, _widget_1$Widget);

    function CreateWallet() {
        _classCallCheck(this, CreateWallet);

        return _possibleConstructorReturn(this, (CreateWallet.__proto__ || Object.getPrototypeOf(CreateWallet)).apply(this, arguments));
    }

    _createClass(CreateWallet, [{
        key: "create",
        value: function create() {
            _get(CreateWallet.prototype.__proto__ || Object.getPrototypeOf(CreateWallet.prototype), "create", this).call(this);
            this.init();
        }
    }, {
        key: "init",
        value: function init() {
            this.language = this.config.value[lang_1.getLang()];
            this.state = {
                itype: localWallet_1.CreateWalletType.Random,
                walletName: walletTools_1.playerName(),
                walletPsw: '',
                walletPswConfirm: '',
                pswEqualed: false,
                userProtocolReaded: false,
                walletPswAvailable: false,
                chooseImage: false,
                avatar: '',
                avatarHtml: ''
            };
        }
    }, {
        key: "setProps",
        value: function setProps(props, oldProps) {
            _get(CreateWallet.prototype.__proto__ || Object.getPrototypeOf(CreateWallet.prototype), "setProps", this).call(this, props, oldProps);
            this.state.itype = props.itype;
        }
    }, {
        key: "backPrePage",
        value: function backPrePage() {
            this.ok && this.ok();
        }
    }, {
        key: "walletNameChange",
        value: function walletNameChange(e) {
            this.state.walletName = e.value;
            this.paint();
        }
    }, {
        key: "checkBoxClick",
        value: function checkBoxClick(e) {
            this.state.userProtocolReaded = e.newType === 'true' ? true : false;
            this.paint();
        }
    }, {
        key: "pswConfirmChange",
        value: function pswConfirmChange(r) {
            this.state.walletPswConfirm = r.value;
            this.state.pswEqualed = account_1.pswEqualed(this.state.walletPsw, this.state.walletPswConfirm);
            this.paint();
        }
        // 密码格式正确通知

    }, {
        key: "pswChange",
        value: function pswChange(res) {
            this.state.walletPswAvailable = res.success;
            this.state.walletPsw = res.password;
            this.state.pswEqualed = account_1.pswEqualed(this.state.walletPsw, this.state.walletPswConfirm);
            this.paint();
        }
        // 清除密码

    }, {
        key: "pwsClear",
        value: function pwsClear() {
            this.state.walletPsw = '';
            this.paint();
        }
    }, {
        key: "selectImageClick",
        value: function selectImageClick() {
            var _this2 = this;

            native_1.selectImage(function (width, height, base64) {
                resize_1.resize({ url: base64, width: 140, ratio: 0.3, type: 'jpeg' }, function (res) {
                    console.log('resize---------', res);
                    _this2.state.chooseImage = true;
                    // tslint:disable-next-line:max-line-length
                    _this2.state.avatarHtml = "<div style=\"background-image: url(" + res.base64 + ");width: 100%;height: 100%;position: absolute;top: 0;background-size: cover;background-position: center;background-repeat: no-repeat;border-radius:50%\"></div>";
                    _this2.state.avatar = res.base64;
                    _this2.paint();
                });
            });
            // selectImage((path) => {
            //     console.log('img url path ',path);
            //     this.state.chooseImage = true;
            //     this.state.avatarHtml = `<img src='file:///${path}?timestamp=${new Date().getTime()}' style='width: 100%;height: 100%;position: absolute;top: 0;'/>`;
            //     // this.state.avatar = `${localUrlPre}${path}`;
            //     this.paint();
            // });
        }
    }, {
        key: "randomPlayName",
        value: function randomPlayName() {
            this.state.walletName = walletTools_1.playerName();
            document.getElementById('random').classList.add('random');
            setTimeout(function () {
                document.getElementById('random').classList.remove('random');
            }, 1000);
            this.paint();
        }
    }, {
        key: "createClick",
        value: function createClick() {
            return __awaiter(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
                var option, hash, mnemonic, fragments, w;
                return regeneratorRuntime.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                if (this.state.userProtocolReaded) {
                                    _context.next = 2;
                                    break;
                                }

                                return _context.abrupt("return");

                            case 2:
                                if (account_1.walletNameAvailable(this.state.walletName)) {
                                    _context.next = 5;
                                    break;
                                }

                                root_1.popNew('app-components1-message-message', { content: this.language.tips[0] });
                                return _context.abrupt("return");

                            case 5:
                                if (!(!this.state.walletPsw || !this.state.walletPswConfirm)) {
                                    _context.next = 8;
                                    break;
                                }

                                root_1.popNew('app-components1-message-message', { content: this.language.tips[1] });
                                return _context.abrupt("return");

                            case 8:
                                if (this.state.walletPswAvailable) {
                                    _context.next = 11;
                                    break;
                                }

                                root_1.popNew('app-components1-message-message', { content: this.language.tips[2] });
                                return _context.abrupt("return");

                            case 11:
                                if (this.state.pswEqualed) {
                                    _context.next = 14;
                                    break;
                                }

                                root_1.popNew('app-components1-message-message', { content: this.language.tips[3] });
                                return _context.abrupt("return");

                            case 14:
                                option = {
                                    psw: this.state.walletPsw,
                                    nickName: this.state.walletName
                                };

                                if (this.state.itype === localWallet_1.CreateWalletType.Image) {
                                    option.imageBase64 = this.props.imageBase64;
                                    option.imagePsw = this.props.imagePsw;
                                } else if (this.state.itype === localWallet_1.CreateWalletType.StrandarImport) {
                                    option.mnemonic = this.props.mnemonic;
                                } else if (this.state.itype === localWallet_1.CreateWalletType.ImageImport) {
                                    option.imageBase64 = this.props.imageBase64;
                                    option.imagePsw = this.props.imagePsw;
                                } else if (this.state.itype === localWallet_1.CreateWalletType.FragmentImport) {
                                    option.fragment1 = this.props.fragment1;
                                    option.fragment2 = this.props.fragment2;
                                }
                                _context.next = 18;
                                return localWallet_1.createWallet(this.state.itype, option);

                            case 18:
                                hash = _context.sent;

                                if (!hash) {
                                    tools_1.popNewMessage(this.language.tips[3]);
                                }
                                mnemonic = walletTools_1.getMnemonicByHash(hash);
                                fragments = walletTools_1.fetchMnemonicFragment(hash);

                                memstore_1.setStore('flags', { created: true, mnemonic: mnemonic, fragments: fragments });
                                if (memstore_1.getStore('user/offline')) {
                                    tools_1.checkCreateAccount();
                                } else {
                                    pull_1.openConnect();
                                }
                                if (this.state.avatar) {
                                    pull_1.uploadFile(this.state.avatar);
                                }
                                w = home_1.forelet.getWidget(home_1.WIDGET_NAME);

                                if (w) {
                                    w.ok && w.ok();
                                }
                                this.ok && this.ok();

                            case 28:
                            case "end":
                                return _context.stop();
                        }
                    }
                }, _callee, this);
            }));
        }
        /**
         * 查看隐私条约
         */

    }, {
        key: "agreementClick",
        value: function agreementClick() {
            root_1.popNew('app-view-mine-other-privacypolicy');
        }
    }]);

    return CreateWallet;
}(widget_1.Widget);

exports.CreateWallet = CreateWallet;
// 登录状态成功
memstore_1.register('flags', function (flags) {
    if (flags.promptBackup) {
        root_1.popNew('app-components1-modalBox-modalBox', tools_1.getStaticLanguage().createSuccess, function () {
            root_1.popNew('app-view-wallet-backup-index', { mnemonic: flags.mnemonic, fragments: flags.fragments });
        });
        flags.promptBackup = false;
        memstore_1.setStore('flags', flags, false);
    }
});
})