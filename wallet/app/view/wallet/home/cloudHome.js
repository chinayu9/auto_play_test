_$define("app/view/wallet/home/cloudHome", function (require, exports, module){
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
 * cloud home
 */
var root_1 = require("../../../../pi/ui/root");
var lang_1 = require("../../../../pi/util/lang");
var forelet_1 = require("../../../../pi/widget/forelet");
var widget_1 = require("../../../../pi/widget/widget");
var modulConfig_1 = require("../../../modulConfig");
var pull_1 = require("../../../net/pull");
var memstore_1 = require("../../../store/memstore");
var tools_1 = require("../../../utils/tools");
exports.forelet = new forelet_1.Forelet();
exports.WIDGET_NAME = module.id.replace(/\//g, '-');

var CloudHome = function (_widget_1$Widget) {
    _inherits(CloudHome, _widget_1$Widget);

    function CloudHome() {
        _classCallCheck(this, CloudHome);

        return _possibleConstructorReturn(this, (CloudHome.__proto__ || Object.getPrototypeOf(CloudHome)).apply(this, arguments));
    }

    _createClass(CloudHome, [{
        key: "setProps",
        value: function setProps(props, oldProps) {
            _get(CloudHome.prototype.__proto__ || Object.getPrototypeOf(CloudHome.prototype), "setProps", this).call(this, props, oldProps);
            this.props.financialModulIsShow = modulConfig_1.getModulConfig('FINANCIAL_SERVICES'); // 优选理财模块配置
            this.init();
            if (props.isActive) {
                pull_1.getProductList();
                pull_1.getServerCloudBalance();
            }
        }
    }, {
        key: "init",
        value: function init() {
            this.language = this.config.value[lang_1.getLang()];
            var color = memstore_1.getStore('setting/changeColor', 'redUp');
            this.state = {
                totalAsset: tools_1.formatBalanceValue(tools_1.fetchCloudTotalAssets()),
                assetList: tools_1.fetchCloudWalletAssetList(),
                productList: memstore_1.getStore('activity/financialManagement/products', []),
                redUp: color === 'redUp',
                currencyUnitSymbol: tools_1.getCurrencyUnitSymbol()
            };
            this.paint();
        }
        // 条目点击

    }, {
        key: "itemClick",
        value: function itemClick(e) {
            if (!tools_1.hasWallet()) return;
            var index = e.index;
            var v = this.state.assetList[index];
            root_1.popNew('app-view-wallet-cloudWallet-home', { currencyName: v.currencyName, gain: v.gain });
        }
    }, {
        key: "updateProductList",
        value: function updateProductList(productList) {
            this.state.productList = productList;
            this.paint();
        }
    }, {
        key: "updateBalance",
        value: function updateBalance() {
            this.state.totalAsset = tools_1.formatBalanceValue(tools_1.fetchCloudTotalAssets());
            this.state.assetList = tools_1.fetchCloudWalletAssetList();
            this.paint();
        }
    }, {
        key: "optimalClick",
        value: function optimalClick() {
            root_1.popNew('app-view-wallet-financialManagement-home');
        }
    }, {
        key: "fmItemClick",
        value: function fmItemClick(e, index) {
            var product = this.state.productList[index];
            root_1.popNew('app-view-wallet-financialManagement-productDetail', { product: product });
        }
    }, {
        key: "currencyUnitChange",
        value: function currencyUnitChange() {
            this.state.totalAsset = tools_1.formatBalanceValue(tools_1.fetchCloudTotalAssets());
            this.state.assetList = tools_1.fetchCloudWalletAssetList();
            this.state.currencyUnitSymbol = tools_1.getCurrencyUnitSymbol();
            this.paint();
        }
    }]);

    return CloudHome;
}(widget_1.Widget);

exports.CloudHome = CloudHome;
// =======================本地
memstore_1.register('user', function () {
    var w = exports.forelet.getWidget(exports.WIDGET_NAME);
    if (w) {
        w.init();
        w.paint();
    }
});
// 云端余额变化
memstore_1.register('cloud/cloudWallets', function () {
    var w = exports.forelet.getWidget(exports.WIDGET_NAME);
    if (w) {
        w.updateBalance();
    }
});
// 货币涨跌幅度变化
memstore_1.register('currency2USDTMap', function () {
    var w = exports.forelet.getWidget(exports.WIDGET_NAME);
    if (w) {
        w.updateBalance();
    }
});
// 理财产品变化
memstore_1.register('activity/financialManagement/products', function (productList) {
    return __awaiter(undefined, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        var w;
        return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
                switch (_context.prev = _context.next) {
                    case 0:
                        w = exports.forelet.getWidget(exports.WIDGET_NAME);

                        if (w) {
                            w.updateProductList(productList);
                        }

                    case 2:
                    case "end":
                        return _context.stop();
                }
            }
        }, _callee, this);
    }));
});
memstore_1.register('setting/language', function () {
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
// 货币单位变化
memstore_1.register('setting/currencyUnit', function () {
    var w = exports.forelet.getWidget(exports.WIDGET_NAME);
    if (w) {
        w.currencyUnitChange();
    }
});
})