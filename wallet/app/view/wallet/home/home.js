_$define("app/view/wallet/home/home", function (require, exports, module){
"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * wallet home
 */
// ==============================导入
var lang_1 = require("../../../../pi/util/lang");
var forelet_1 = require("../../../../pi/widget/forelet");
var widget_1 = require("../../../../pi/widget/widget");
var pull_1 = require("../../../net/pull");
var memstore_1 = require("../../../store/memstore");
// tslint:disable-next-line:max-line-length
var tools_1 = require("../../../utils/tools");
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
            this.pageInit();
            this.dataInit();
        }
    }, {
        key: "pageInit",
        value: function pageInit() {
            this.language = this.config.value[lang_1.getLang()];
            this.state = {
                tabs: [{
                    tab: { zh_Hans: '云账户', zh_Hant: '雲賬戶', en: '' },
                    components: 'app-view-wallet-home-cloudHome'
                }, {
                    tab: { zh_Hans: '本地钱包', zh_Hant: '本地錢包', en: '' },
                    components: 'app-view-wallet-home-walletHome'
                }],
                activeNum: 1,
                refreshing: false,
                avatar: '',
                totalAsset: '',
                currencyUnitSymbol: ''
            };
            this.paint();
        }
    }, {
        key: "dataInit",
        value: function dataInit() {
            var userInfo = pull_1.getUserInfo();
            this.state.avatar = userInfo && userInfo.avatar;
            this.state.totalAsset = tools_1.formatBalanceValue(tools_1.fetchLocalTotalAssets() + tools_1.fetchCloudTotalAssets());
            this.state.currencyUnitSymbol = tools_1.getCurrencyUnitSymbol();
            this.paint();
        }
    }, {
        key: "tabsChangeClick",
        value: function tabsChangeClick(event, value) {
            this.state.activeNum = value;
            this.paint();
        }
    }, {
        key: "userInfoChange",
        value: function userInfoChange() {
            var userInfo = pull_1.getUserInfo();
            this.state.avatar = userInfo.avatar || '';
            this.paint();
        }
    }, {
        key: "updateTotalAsset",
        value: function updateTotalAsset() {
            this.state.totalAsset = tools_1.formatBalanceValue(tools_1.fetchLocalTotalAssets() + tools_1.fetchCloudTotalAssets());
            this.paint();
        }
    }, {
        key: "currencyUnitChange",
        value: function currencyUnitChange() {
            this.state.totalAsset = tools_1.formatBalanceValue(tools_1.fetchLocalTotalAssets() + tools_1.fetchCloudTotalAssets());
            this.state.currencyUnitSymbol = tools_1.getCurrencyUnitSymbol();
            this.paint();
        }
    }, {
        key: "refreshClick",
        value: function refreshClick() {
            var _this2 = this;

            if (this.state.refreshing) {
                return;
            }
            this.state.refreshing = true;
            this.paint();
            setTimeout(function () {
                _this2.state.refreshing = false;
                _this2.paint();
            }, 1000);
            pull_1.getServerCloudBalance();
            var wallet = memstore_1.getStore('wallet');
            if (!wallet) return;
            var list = [];
            wallet.currencyRecords.forEach(function (v) {
                if (wallet.showCurrencys.indexOf(v.currencyName) >= 0) {
                    v.addrs.forEach(function (addrInfo) {
                        list.push({ addr: addrInfo.addr, currencyName: v.currencyName });
                    });
                }
            });
            var dataCenter = pi_modules.commonjs.exports.relativeGet('app/logic/dataCenter').exports.dataCenter;
            list.forEach(function (v) {
                dataCenter.updateBalance(v.addr, v.currencyName);
            });
        }
    }]);

    return Home;
}(widget_1.Widget);

exports.Home = Home;
// ==========================本地
memstore_1.register('user', function () {
    var w = exports.forelet.getWidget(exports.WIDGET_NAME);
    if (w) {
        w.dataInit();
    }
});
memstore_1.register('user/info', function () {
    var w = exports.forelet.getWidget(exports.WIDGET_NAME);
    if (w) {
        w.userInfoChange();
    }
});
// 云端余额变化
memstore_1.register('cloud/cloudWallet', function () {
    var w = exports.forelet.getWidget(exports.WIDGET_NAME);
    if (w) {
        w.updateTotalAsset();
    }
});
memstore_1.register('setting/language', function () {
    var w = exports.forelet.getWidget(exports.WIDGET_NAME);
    if (w) {
        w.pageInit();
    }
});
// 货币涨跌幅度变化
memstore_1.register('third/currency2USDTMap', function () {
    var w = exports.forelet.getWidget(exports.WIDGET_NAME);
    if (w) {
        w.updateTotalAsset();
    }
});
// 货币单位变化
memstore_1.register('setting/currencyUnit', function () {
    var w = exports.forelet.getWidget(exports.WIDGET_NAME);
    if (w) {
        w.currencyUnitChange();
    }
});
})