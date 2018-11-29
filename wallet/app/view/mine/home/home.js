_$define("app/view/mine/home/home", function (require, exports, module){
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
 * wallet home
 */
var root_1 = require("../../../../pi/ui/root");
var lang_1 = require("../../../../pi/util/lang");
var forelet_1 = require("../../../../pi/widget/forelet");
var widget_1 = require("../../../../pi/widget/widget");
var native_1 = require("../../../logic/native");
var modulConfig_1 = require("../../../modulConfig");
var memstore_1 = require("../../../store/memstore");
var tools_1 = require("../../../utils/tools");
var walletTools_1 = require("../../../utils/walletTools");
var pull_1 = require("../../../net/pull");
exports.forelet = new forelet_1.Forelet();
exports.WIDGET_NAME = module.id.replace(/\//g, '-');

var Home = function (_widget_1$Widget) {
    _inherits(Home, _widget_1$Widget);

    function Home() {
        _classCallCheck(this, Home);

        return _possibleConstructorReturn(this, (Home.__proto__ || Object.getPrototypeOf(Home)).apply(this, arguments));
    }

    _createClass(Home, [{
        key: "create",
        value: function create() {
            _get(Home.prototype.__proto__ || Object.getPrototypeOf(Home.prototype), "create", this).call(this);
            this.init();
        }
    }, {
        key: "init",
        value: function init() {
            this.language = this.config.value[lang_1.getLang()];
            var hasBackupMnemonic = false;
            var hasWallet = false;
            var address = '';
            this.state = {
                list: [{ img: '../../../res/image1/28.png', name: '', components: '' }, { img: '../../../res/image1/10.png', name: '', components: 'app-view-mine-other-help' }, { img: '../../../res/image1/21.png', name: '', components: 'app-view-mine-setting-setting' }, { img: '../../../res/image1/23.png', name: '', components: 'app-view-mine-other-contanctUs' }, { img: '../../../res/image1/24.png', name: '', components: 'app-view-mine-other-aboutus' }],
                address: address,
                userName: '',
                avatar: '',
                close: false,
                hasWallet: hasWallet,
                hasBackupMnemonic: hasBackupMnemonic,
                offline: false,
                walletName: modulConfig_1.getModulConfig('WALLET_NAME')
            };
            if (modulConfig_1.getModulConfig('GITHUB')) {
                this.state.list.push({ img: '../../../res/image1/43.png', name: '', components: '' });
            }
            this.initData();
        }
        /**
         * 更新数据
         */

    }, {
        key: "initData",
        value: function initData() {
            var userInfo = pull_1.getUserInfo();
            if (userInfo) {
                this.state.userName = userInfo.nickName ? userInfo.nickName : this.language.defaultUserName;
                this.state.avatar = userInfo.avatar ? userInfo.avatar : 'app/res/image/default_avater_big.png';
            }
            var wallet = memstore_1.getStore('wallet');
            if (wallet) {
                this.state.hasWallet = true;
                this.state.address = memstore_1.getStore('user/id');
                this.state.hasBackupMnemonic = wallet.isBackup;
            } else {
                this.state.hasWallet = false;
                this.state.address = '';
            }
            this.paint();
        }
    }, {
        key: "backPrePage",
        value: function backPrePage() {
            this.ok && this.ok();
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
                                    // this.backPrePage();
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
         * 点击跳转
         */

    }, {
        key: "itemClick",
        value: function itemClick(ind) {
            if (ind === 0) {
                if (this.state.hasWallet) {
                    root_1.popNew('app-view-mine-account-home');
                } else {
                    root_1.popNew('app-components1-modalBox-modalBox', this.language.modalBox, function () {
                        root_1.popNew('app-view-wallet-create-home');
                    });
                }
            } else if (ind === 5) {
                // window.open('https://github.com/KuPayIo/kupay_wallet');
                native_1.openNewActivity('https://github.com/KuPayIo/kupay_wallet', this.state.walletName);
            } else {
                root_1.popNew(this.state.list[ind].components);
            }
            // this.backPrePage();
        }
        /**
         * 复制地址
         */

    }, {
        key: "copyAddr",
        value: function copyAddr() {
            tools_1.copyToClipboard(this.state.address);
            root_1.popNew('app-components1-message-message', { content: this.language.tips });
        }
        /**
         * 关闭侧边栏
         */

    }, {
        key: "closePage",
        value: function closePage() {
            var _this2 = this;

            this.state.close = true;
            setTimeout(function () {
                _this2.backPrePage();
            }, 200);
            this.paint();
        }
        /**
         * 扫描二维码
         */

    }, {
        key: "scanQrcode",
        value: function scanQrcode() {
            native_1.doScanQrCode(function (res) {
                console.log(res);
            });
        }
        /**
         * 展示我的二维码
         */

    }, {
        key: "showMyQrcode",
        value: function showMyQrcode() {
            root_1.popNew('app-view-mine-other-addFriend');
            // this.backPrePage();
        }
        /**
         * 创建钱包
         */

    }, {
        key: "login",
        value: function login() {
            if (this.state.hasWallet) {
                root_1.popNew('app-view-mine-account-home');
            } else {
                root_1.popNew('app-view-wallet-create-home');
            }
            // this.backPrePage();
        }
    }]);

    return Home;
}(widget_1.Widget);

exports.Home = Home;
// ===================================================== 本地
// ===================================================== 立即执行
memstore_1.register('user', function () {
    var w = exports.forelet.getWidget(exports.WIDGET_NAME);
    if (w) {
        w.init();
        w.paint();
    }
});
memstore_1.register('wallet', function () {
    var w = exports.forelet.getWidget(exports.WIDGET_NAME);
    if (w) {
        w.initData();
    }
});
memstore_1.register('user/info', function () {
    var w = exports.forelet.getWidget(exports.WIDGET_NAME);
    if (w) {
        w.initData();
    }
});
memstore_1.register('setting/language', function (r) {
    var w = exports.forelet.getWidget(exports.WIDGET_NAME);
    if (w) {
        w.language = w.config.value[r];
        w.paint();
    }
});
memstore_1.register('user/offline', function (r) {
    var w = exports.forelet.getWidget(exports.WIDGET_NAME);
    if (w) {
        w.state.offline = r;
        w.paint();
    }
});
})