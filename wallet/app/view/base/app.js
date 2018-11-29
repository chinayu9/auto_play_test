_$define("app/view/base/app", function (require, exports, module){
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
 * 首页
 */
// ================================ 导入
var lang_1 = require("../../../pi/util/lang");
var forelet_1 = require("../../../pi/widget/forelet");
var widget_1 = require("../../../pi/widget/widget");
var modulConfig_1 = require("../../modulConfig");
var pull_1 = require("../../net/pull");
var memstore_1 = require("../../store/memstore");
exports.forelet = new forelet_1.Forelet();
exports.WIDGET_NAME = module.id.replace(/\//g, '-');

var App = function (_widget_1$Widget) {
    _inherits(App, _widget_1$Widget);

    function App() {
        _classCallCheck(this, App);

        var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).apply(this, arguments));

        _this.old = {};
        return _this;
    }

    _createClass(App, [{
        key: "create",
        value: function create() {
            _get(App.prototype.__proto__ || Object.getPrototypeOf(App.prototype), "create", this).call(this);
            this.init();
            this.setList();
        }
    }, {
        key: "init",
        value: function init() {
            var isActive = 'APP_WALLET';
            this.old[isActive] = true;
            this.language = this.config.value[lang_1.getLang()];
            var loading = localStorage.getItem('level_2_page_loaded') ? false : true;
            localStorage.removeItem('level_2_page_loaded');
            this.state = {
                type: 2,
                isActive: '',
                old: this.old,
                loading: loading,
                allTabBar: {
                    play: {
                        modulName: 'APP_PLAY',
                        text: { zh_Hans: '玩', zh_Hant: '玩', en: '' },
                        icon: 'play.png',
                        iconActive: 'play_active.png',
                        components: 'app-view-play-home-home'
                    },
                    chat: {
                        modulName: 'APP_CHAT',
                        text: { zh_Hans: '聊', zh_Hant: '聊', en: '' },
                        icon: 'chat.png',
                        iconActive: 'chat_active.png',
                        components: 'app-view-chat-home-home'
                    },
                    earn: {
                        modulName: 'APP_EARN',
                        text: { zh_Hans: '赚', zh_Hant: '賺', en: '' },
                        icon: 'earn.png',
                        iconActive: 'earn_active.png',
                        components: 'app-view-earn-home-home'
                    },
                    wallet: {
                        modulName: 'APP_WALLET',
                        text: { zh_Hans: '钱', zh_Hant: '錢', en: '' },
                        icon: 'wallet.png',
                        iconActive: 'wallet_active.png',
                        components: 'app-view-wallet-home-home'
                    }
                },
                tabBarList: []
            };
        }
    }, {
        key: "setList",
        value: function setList() {
            var resList = [];
            for (var item in this.state.allTabBar) {
                this.state.allTabBar[item];
                if (modulConfig_1.getModulConfig(this.state.allTabBar[item].modulName)) {
                    if (this.state.allTabBar[item].modulName === 'APP_WALLET') {
                        this.state.isActive = 'APP_WALLET';
                    }
                    resList.push(this.state.allTabBar[item]);
                }
            }
            if (resList.length === 0) {
                resList.push(this.state.allTabBar.wallet);
                this.state.isActive = this.state.allTabBar.wallet.modulName;
            }
            if (!this.state.isActive) {
                this.state.isActive = resList[0].modulName;
            }
            this.state.tabBarList = resList;
        }
    }, {
        key: "closeLoading",
        value: function closeLoading() {
            this.state.loading = false;
            this.paint();
        }
    }, {
        key: "tabBarChangeListener",
        value: function tabBarChangeListener(event, index) {
            return __awaiter(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
                var identfy;
                return regeneratorRuntime.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                identfy = this.state.tabBarList[index].modulName;

                                if (!(this.state.isActive === identfy)) {
                                    _context.next = 3;
                                    break;
                                }

                                return _context.abrupt("return");

                            case 3:
                                this.state.isActive = identfy;
                                this.old[identfy] = true;
                                this.paint();

                            case 6:
                            case "end":
                                return _context.stop();
                        }
                    }
                }, _callee, this);
            }));
        }
    }]);

    return App;
}(widget_1.Widget);

exports.App = App;
// ===================================================== 本地
// ===================================================== 立即执行
memstore_1.register('flags/level_2_page_loaded', function (loaded) {
    setTimeout(function () {
        var dataCenter = pi_modules.commonjs.exports.relativeGet('app/logic/dataCenter').exports.dataCenter;
        dataCenter.init();
    }, 2000);
    var w = exports.forelet.getWidget(exports.WIDGET_NAME);
    if (w) {
        w.closeLoading();
    } else {
        // 处理导航页过程中资源已经加载完毕
        localStorage.setItem('level_2_page_loaded', '1');
    }
});
// 用户信息变化
memstore_1.register('user/info', function (userInfo) {
    if (userInfo) {
        pull_1.setUserInfo();
    }
});
// 登录状态成功
memstore_1.register('user/isLogin', function (isLogin) {
    if (isLogin) {
        // 余额
        pull_1.getServerCloudBalance();
        // 获取真实用户
        pull_1.getRealUser();
        // 用户基础信息
        pull_1.getUserInfoFromServer(memstore_1.getStore('user/conUid'));
    }
});
// 获取随机数成功
memstore_1.register('user/conRandom', function () {
    // eth gasPrice
    pull_1.fetchGasPrices();
    // btc fees
    pull_1.fetchBtcFees();
});
// 语言配置
memstore_1.register('setting/language', function (r) {
    lang_1.setLang(r);
});
})