_$define("app/view/mine/setting/setting", function (require, exports, module){
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
 * setting
 */
// =============================================导入
var root_1 = require("../../../../pi/ui/root");
var lang_1 = require("../../../../pi/util/lang");
var forelet_1 = require("../../../../pi/widget/forelet");
var widget_1 = require("../../../../pi/widget/widget");
var memstore_1 = require("../../../store/memstore");
var tools_1 = require("../../../utils/tools");
var walletTools_1 = require("../../../utils/walletTools");
var pull_1 = require("../../../net/pull");
exports.forelet = new forelet_1.Forelet();
exports.WIDGET_NAME = module.id.replace(/\//g, '-');

var Setting = function (_widget_1$Widget) {
    _inherits(Setting, _widget_1$Widget);

    function Setting() {
        _classCallCheck(this, Setting);

        return _possibleConstructorReturn(this, (Setting.__proto__ || Object.getPrototypeOf(Setting)).call(this));
    }

    _createClass(Setting, [{
        key: "create",
        value: function create() {
            _get(Setting.prototype.__proto__ || Object.getPrototypeOf(Setting.prototype), "create", this).call(this);
            this.init();
        }
    }, {
        key: "init",
        value: function init() {
            this.language = this.config.value[lang_1.getLang()];
            var lan = memstore_1.getStore('setting/language', 'zh_Hans');
            var unit = memstore_1.getStore('setting/currencyUnit', 'CNY');
            var color = memstore_1.getStore('setting/changeColor', 'redUp');
            this.state = {
                lockScreenPsw: '',
                openLockScreen: false,
                lockScreenTitle: '',
                numberOfErrors: 0,
                itemList: [{ title: this.language.itemTitle[0], list: this.language.languageSet, selected: lan, flag: 0 }, { title: this.language.itemTitle[1], list: this.language.currencyUnit, selected: unit, flag: 1 }, { title: this.language.itemTitle[2], list: this.language.changeColor, selected: color, flag: 2 }],
                wallet: null
            };
            this.initData();
        }
    }, {
        key: "initData",
        value: function initData() {
            var wallet = memstore_1.getStore('wallet');
            if (wallet) {
                this.state.wallet = wallet;
            }
            var ls = memstore_1.getStore('setting/lockScreen');
            if (ls) {
                this.state.lockScreenPsw = ls.psw;
                this.state.openLockScreen = ls.psw && ls.open !== false;
            }
            this.paint();
        }
    }, {
        key: "backPrePage",
        value: function backPrePage() {
            this.ok && this.ok();
        }
        /**
         * 判断当前用户是否已经创建钱包
         */

    }, {
        key: "judgeWallet",
        value: function judgeWallet() {
            if (this.state.wallet) {
                return true;
            }
            root_1.popNew('app-components1-modalBox-modalBox', this.language.modalBox1, function () {
                root_1.popNew('app-view-wallet-create-home');
            });
            return false;
        }
        /**
         * 处理锁屏开关切换
         */

    }, {
        key: "onSwitchChange",
        value: function onSwitchChange() {
            var _this2 = this;

            if (this.state.openLockScreen) {
                // 如果锁屏开关打开则直接关闭
                var ls = memstore_1.getStore('setting/lockScreen');
                ls.open = !ls.open;
                this.state.openLockScreen = false;
                memstore_1.setStore('setting/lockScreen', ls);
            } else if (this.state.wallet) {
                root_1.popNew('app-components1-lockScreenPage-lockScreenPage', { setting: true }, function (r) {
                    if (!r) {
                        _this2.closeLockPsw();
                        _this2.state.openLockScreen = false;
                    } else {
                        _this2.state.openLockScreen = true;
                    }
                });
            } else {
                // tslint:disable-next-line:max-line-length
                root_1.popNew('app-components1-modalBox-modalBox', this.language.modalBox1, function () {
                    root_1.popNew('app-view-wallet-create-home');
                }, function () {
                    _this2.closeLockPsw();
                });
            }
            this.paint(true);
        }
        /**
         * 关闭锁屏开关
         */

    }, {
        key: "closeLockPsw",
        value: function closeLockPsw() {
            this.state.openLockScreen = false;
            this.state.lockScreenPsw = '';
            this.paint();
        }
        /**
         * 点击切换基础属性
         */

    }, {
        key: "itemClick",
        value: function itemClick(ind) {
            // if (!this.judgeWallet()) {
            //     return;
            // }
            var data = this.state.itemList[ind];
            root_1.popNew('app-view-mine-setting-itemList', data);
        }
        /**
         * 备份
         */

    }, {
        key: "backUp",
        value: function backUp() {
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
                                    this.ok && this.ok();
                                }

                            case 9:
                            case "end":
                                return _context.stop();
                        }
                    }
                }, _callee, this);
            }));
        }
        /**
         * 退出账户不删除信息
         */

    }, {
        key: "logOut",
        value: function logOut() {
            var _this3 = this;

            if (!this.judgeWallet()) {
                return;
            }
            var backup = this.state.wallet.isBackup;
            root_1.popNew('app-components1-modalBox-modalBox', backup ? this.language.modalBox2[1] : this.language.modalBox2[0], function () {
                if (!backup) {
                    _this3.backUp();
                }
                console.log('备份');
            }, function () {
                root_1.popNew('app-components1-modalBox-modalBox', { title: '', content: _this3.language.tips[2], style: 'color:#F7931A;' }, function () {
                    pull_1.logoutAccount();
                    _this3.backPrePage();
                });
            });
        }
        /**
         * 注销账户
         */

    }, {
        key: "logOutDel",
        value: function logOutDel() {
            var _this4 = this;

            if (!this.judgeWallet()) {
                return;
            }
            var backup = this.state.wallet.isBackup;
            root_1.popNew('app-components1-modalBox-modalBox', backup ? this.language.modalBox3[1] : this.language.modalBox3[0], function () {
                if (!backup) {
                    _this4.backUp();
                }
                console.log('备份');
            }, function () {
                root_1.popNew('app-components1-modalBox-modalBox', { title: '', content: _this4.language.tips[2], style: 'color:#F7931A;' }, function () {
                    pull_1.logoutAccountDel();
                    _this4.backPrePage();
                });
            });
        }
    }]);

    return Setting;
}(widget_1.Widget);

exports.Setting = Setting;
// ================================================本地，立即执行
memstore_1.register('setting/language', function (r) {
    var w = exports.forelet.getWidget(exports.WIDGET_NAME);
    if (w) {
        w.language = w.config.value[r];
        w.init();
    }
});
memstore_1.register('setting/currencyUnit', function () {
    var w = exports.forelet.getWidget(exports.WIDGET_NAME);
    if (w) {
        w.init();
    }
});
memstore_1.register('setting/changeColor', function () {
    var w = exports.forelet.getWidget(exports.WIDGET_NAME);
    if (w) {
        w.init();
    }
});
memstore_1.register('setting/lockScreen', function () {
    var w = exports.forelet.getWidget(exports.WIDGET_NAME);
    if (w) {
        w.initData();
    }
});
memstore_1.register('wallet', function () {
    var w = exports.forelet.getWidget(exports.WIDGET_NAME);
    if (w) {
        w.initData();
    }
});
memstore_1.register('user', function () {
    var w = exports.forelet.getWidget(exports.WIDGET_NAME);
    if (w) {
        w.init();
    }
});
})