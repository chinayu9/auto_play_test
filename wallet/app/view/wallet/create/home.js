_$define("app/view/wallet/create/home", function (require, exports, module){
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
 * create a wallet
 */
var root_1 = require("../../../../pi/ui/root");
var lang_1 = require("../../../../pi/util/lang");
var forelet_1 = require("../../../../pi/widget/forelet");
var widget_1 = require("../../../../pi/widget/widget");
var modulConfig_1 = require("../../../modulConfig");
var memstore_1 = require("../../../store/memstore");
var tools_1 = require("../../../utils/tools");
var walletTools_1 = require("../../../utils/walletTools");
var pull_1 = require("../../../net/pull");
exports.forelet = new forelet_1.Forelet();
exports.WIDGET_NAME = module.id.replace(/\//g, '-');

var CreateEnter = function (_widget_1$Widget) {
    _inherits(CreateEnter, _widget_1$Widget);

    function CreateEnter() {
        _classCallCheck(this, CreateEnter);

        return _possibleConstructorReturn(this, (CreateEnter.__proto__ || Object.getPrototypeOf(CreateEnter)).apply(this, arguments));
    }

    _createClass(CreateEnter, [{
        key: "create",
        value: function create() {
            _get(CreateEnter.prototype.__proto__ || Object.getPrototypeOf(CreateEnter.prototype), "create", this).call(this);
            this.init();
        }
    }, {
        key: "init",
        value: function init() {
            this.language = this.config.value[lang_1.getLang()];
            var walletList = memstore_1.getAllAccount();
            var accountList = [];
            walletList.forEach(function (item) {
                var nickName = item.user.info.nickName;
                var id = item.user.id;
                accountList.push({ nickName: nickName, id: id });
            });
            this.state = {
                loginImg: modulConfig_1.getModulConfig('LOGIN_IMG'),
                login: false,
                accountList: accountList,
                selectedAccountIndex: 0,
                psw: '',
                showMoreUser: false,
                popHeight: this.calPopBoxHeight(accountList.length),
                forceCloseMoreUser: false
            };
        }
    }, {
        key: "calPopBoxHeight",
        value: function calPopBoxHeight(len) {
            var itemNum = 4;
            var oneHeight = 101;
            var totalHeight = itemNum * oneHeight;
            if (len <= itemNum) {
                totalHeight = len * oneHeight;
            }
            return totalHeight;
        }
    }, {
        key: "closePopBox",
        value: function closePopBox() {
            this.state.showMoreUser = false;
            this.paint();
        }
    }, {
        key: "delUserAccount",
        value: function delUserAccount(e, index) {
            var delAccount = this.state.accountList.splice(index, 1)[0];
            memstore_1.deleteAccount(delAccount.id);
            if (memstore_1.getAllAccount().length <= 0) {
                this.state.login = false;
            } else {
                this.state.popHeight = this.calPopBoxHeight(this.state.accountList.length);
                if (index === this.state.selectedAccountIndex) {
                    this.state.selectedAccountIndex = 0;
                }
            }
            this.paint();
        }
    }, {
        key: "chooseCurUser",
        value: function chooseCurUser(e, index) {
            this.state.selectedAccountIndex = index;
            this.closePopBox();
        }
    }, {
        key: "backPrePage",
        value: function backPrePage() {
            this.ok && this.ok();
        }
        // 图片创建

    }, {
        key: "createByImgClick",
        value: function createByImgClick() {
            root_1.popNew('app-view-wallet-create-createWalletByImage');
        }
        // 已有账户

    }, {
        key: "walletImportClicke",
        value: function walletImportClicke() {
            this.state.forceCloseMoreUser = true;
            this.paint();
            root_1.popNew('app-view-wallet-import-home');
        }
        // 普通创建

    }, {
        key: "createStandardClick",
        value: function createStandardClick() {
            root_1.popNew('app-view-wallet-create-createWallet');
        }
    }, {
        key: "switch2LoginClick",
        value: function switch2LoginClick() {
            this.state.login = true;
            this.paint();
        }
    }, {
        key: "switch2CreateClick",
        value: function switch2CreateClick() {
            this.state.login = false;
            this.paint();
        }
    }, {
        key: "pswChange",
        value: function pswChange(e) {
            this.state.psw = e.value;
        }
    }, {
        key: "loginClick",
        value: function loginClick() {
            return __awaiter(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
                var walletList, close, account, verify;
                return regeneratorRuntime.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                if (!(this.state.psw.length <= 0)) {
                                    _context.next = 3;
                                    break;
                                }

                                tools_1.popNewMessage({ zh_Hans: '密码不能为空', zh_Hant: '密碼不能為空', en: '' });
                                return _context.abrupt("return");

                            case 3:
                                walletList = memstore_1.getAllAccount();
                                close = tools_1.popNewLoading({ zh_Hans: '登录中', zh_Hant: '登錄中', en: '' });
                                account = walletList[this.state.selectedAccountIndex];

                                console.log(this.state.psw);
                                _context.next = 9;
                                return walletTools_1.VerifyIdentidy1(this.state.psw, account.wallet.vault, account.user.salt);

                            case 9:
                                verify = _context.sent;

                                close.callback(close.widget);

                                if (verify) {
                                    _context.next = 14;
                                    break;
                                }

                                tools_1.popNewMessage({ zh_Hans: '密码错误', zh_Hant: '密碼錯誤', en: '' });
                                return _context.abrupt("return");

                            case 14:
                                pull_1.loginSuccess(account);
                                this.ok && this.ok();

                            case 16:
                            case "end":
                                return _context.stop();
                        }
                    }
                }, _callee, this);
            }));
        }
    }, {
        key: "popMoreUser",
        value: function popMoreUser() {
            this.state.showMoreUser = !this.state.showMoreUser;
            this.paint();
        }
    }]);

    return CreateEnter;
}(widget_1.Widget);

exports.CreateEnter = CreateEnter;
})