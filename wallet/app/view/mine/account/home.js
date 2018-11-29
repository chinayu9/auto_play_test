_$define("app/view/mine/account/home", function (require, exports, module){
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
 * account home
 */
var root_1 = require("../../../../pi/ui/root");
var lang_1 = require("../../../../pi/util/lang");
var forelet_1 = require("../../../../pi/widget/forelet");
var resize_1 = require("../../../../pi/widget/resize/resize");
var widget_1 = require("../../../../pi/widget/widget");
var native_1 = require("../../../logic/native");
var pull_1 = require("../../../net/pull");
var memstore_1 = require("../../../store/memstore");
var account_1 = require("../../../utils/account");
var tools_1 = require("../../../utils/tools");
var walletTools_1 = require("../../../utils/walletTools");
exports.forelet = new forelet_1.Forelet();
exports.WIDGET_NAME = module.id.replace(/\//g, '-');

var AccountHome = function (_widget_1$Widget) {
    _inherits(AccountHome, _widget_1$Widget);

    function AccountHome() {
        _classCallCheck(this, AccountHome);

        return _possibleConstructorReturn(this, (AccountHome.__proto__ || Object.getPrototypeOf(AccountHome)).apply(this, arguments));
    }

    _createClass(AccountHome, [{
        key: "create",
        value: function create() {
            _get(AccountHome.prototype.__proto__ || Object.getPrototypeOf(AccountHome.prototype), "create", this).call(this);
            this.language = this.config.value[lang_1.getLang()];
            this.init();
        }
    }, {
        key: "init",
        value: function init() {
            var userInfo = pull_1.getUserInfo();
            var wallet = memstore_1.getStore('wallet');
            var backup = wallet.isBackup;
            this.state = {
                avatar: '',
                nickName: '',
                phone: '',
                backup: backup,
                canEditName: false,
                editName: '',
                chooseImage: false,
                avatarHtml: ''
            };
            if (userInfo.phoneNumber) {
                var str = String(userInfo.phoneNumber).substr(3, 6);
                this.state.phone = userInfo.phoneNumber.replace(str, '******');
            }
            this.state.nickName = userInfo.nickName ? userInfo.nickName : this.language.defaultName;
            this.state.editName = this.state.nickName;
            this.state.avatar = userInfo.avatar ? userInfo.avatar : 'app/res/image/default_avater_big.png';
            this.paint();
        }
        /**
         * 返回上一页
         */

    }, {
        key: "backPrePage",
        value: function backPrePage() {
            this.ok && this.ok();
        }
        /**
         * 修改名字输入框取消聚焦
         */

    }, {
        key: "walletNameInputBlur",
        value: function walletNameInputBlur(e) {
            var v = e.value;
            this.state.canEditName = false;
            if (!account_1.walletNameAvailable(v)) {
                tools_1.popNewMessage(this.language.tips[0]);
                return;
            }
            if (v !== this.state.nickName) {
                this.state.nickName = v;
                var userInfo = memstore_1.getStore('user/info');
                userInfo.nickName = v;
                memstore_1.setStore('user/info', userInfo);
            }
            this.paint();
        }
        /**
         * 修改名字输入框值变化
         */

    }, {
        key: "userNameChange",
        value: function userNameChange(e) {
            this.state.editName = e.value;
        }
        // 备份助记词

    }, {
        key: "backupWalletClick",
        value: function backupWalletClick() {
            return __awaiter(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
                var psw, ret;
                return regeneratorRuntime.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                _context.next = 2;
                                return tools_1.popPswBox();

                            case 2:
                                psw = _context.sent;

                                if (psw) {
                                    _context.next = 5;
                                    break;
                                }

                                return _context.abrupt("return");

                            case 5:
                                _context.next = 7;
                                return walletTools_1.backupMnemonic(psw);

                            case 7:
                                ret = _context.sent;

                                if (ret) {
                                    root_1.popNew('app-view-wallet-backup-index', Object.assign({}, ret));
                                }

                            case 9:
                            case "end":
                                return _context.stop();
                        }
                    }
                }, _callee, this);
            }));
        }
        // 导出私钥

    }, {
        key: "exportPrivateKeyClick",
        value: function exportPrivateKeyClick() {
            return __awaiter(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
                var psw, close, mnemonic;
                return regeneratorRuntime.wrap(function _callee2$(_context2) {
                    while (1) {
                        switch (_context2.prev = _context2.next) {
                            case 0:
                                _context2.next = 2;
                                return tools_1.popPswBox();

                            case 2:
                                psw = _context2.sent;

                                if (psw) {
                                    _context2.next = 5;
                                    break;
                                }

                                return _context2.abrupt("return");

                            case 5:
                                close = root_1.popNew('app-components1-loading-loading', { text: this.language.loading });
                                _context2.prev = 6;
                                _context2.next = 9;
                                return walletTools_1.getMnemonic(psw);

                            case 9:
                                mnemonic = _context2.sent;

                                if (mnemonic) {
                                    root_1.popNew('app-view-mine-account-exportPrivateKey', { mnemonic: mnemonic });
                                } else {
                                    tools_1.popNewMessage(this.language.tips[1]);
                                }
                                _context2.next = 17;
                                break;

                            case 13:
                                _context2.prev = 13;
                                _context2.t0 = _context2["catch"](6);

                                console.log(_context2.t0);
                                tools_1.popNewMessage(this.language.tips[1]);

                            case 17:
                                close.callback(close.widget);

                            case 18:
                            case "end":
                                return _context2.stop();
                        }
                    }
                }, _callee2, this, [[6, 13]]);
            }));
        }
    }, {
        key: "uploadAvatar",
        value: function uploadAvatar() {
            var _this2 = this;

            native_1.selectImage(function (width, height, base64) {
                resize_1.resize({ url: base64, width: 140, ratio: 0.3, type: 'jpeg' }, function (res) {
                    console.log('resize---------', res);
                    _this2.state.chooseImage = true;
                    // tslint:disable-next-line:max-line-length
                    _this2.state.avatarHtml = "<div style=\"background-image: url(" + res.base64 + ");width: 120px;height: 120px;background-size: cover;background-position: center;background-repeat: no-repeat;border-radius:50%\"></div>";
                    _this2.state.avatar = res.base64;
                    _this2.paint();
                    pull_1.uploadFile(_this2.state.avatar);
                });
            });
        }
        /**
         * 绑定手机号
         */

    }, {
        key: "changePhone",
        value: function changePhone() {
            root_1.popNew('app-view-mine-setting-phone');
        }
        /**
         * 修改密码
         */

    }, {
        key: "changePsw",
        value: function changePsw() {
            root_1.popNew('app-view-mine-setting-changePsw');
        }
        /**
         * 点击可输入用户名
         */

    }, {
        key: "changeInput",
        value: function changeInput() {
            if (this.state.canEditName) {
                var v = this.state.editName;
                if (!account_1.walletNameAvailable(v)) {
                    tools_1.popNewMessage(this.language.tips[0]);
                    return;
                } else {
                    if (v !== this.state.nickName) {
                        this.state.nickName = v;
                        var userInfo = memstore_1.getStore('user/info');
                        userInfo.nickName = v;
                        memstore_1.setStore('user/info', userInfo);
                        tools_1.popNewMessage(this.language.tips[2]);
                        this.state.canEditName = false;
                    } else {
                        this.state.canEditName = false;
                    }
                }
            } else {
                this.state.canEditName = true;
                setTimeout(function () {
                    var input = document.getElementById('nameInput').getElementsByTagName('input')[0];
                    input.setSelectionRange(-1, -1);
                    input.focus();
                }, 0);
            }
            this.paint(true);
        }
    }]);

    return AccountHome;
}(widget_1.Widget);

exports.AccountHome = AccountHome;
memstore_1.register('user/info', function () {
    var w = exports.forelet.getWidget(exports.WIDGET_NAME);
    if (w) {
        w.init();
    }
});
memstore_1.register('wallet', function () {
    var w = exports.forelet.getWidget(exports.WIDGET_NAME);
    if (w) {
        w.init();
    }
});
memstore_1.register('setting/language', function (r) {
    var w = exports.forelet.getWidget(exports.WIDGET_NAME);
    if (w) {
        w.language = w.config.value[r];
        w.paint();
    }
});
})