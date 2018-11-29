_$define("app/view/wallet/transaction/home", function (require, exports, module){
"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * transaction home
 */
var root_1 = require("../../../../pi/ui/root");
var forelet_1 = require("../../../../pi/widget/forelet");
var widget_1 = require("../../../../pi/widget/widget");
var dataCenter_1 = require("../../../logic/dataCenter");
var interface_1 = require("../../../store/interface");
var memstore_1 = require("../../../store/memstore");
// tslint:disable-next-line:max-line-length
var tools_1 = require("../../../utils/tools");
var walletTools_1 = require("../../../utils/walletTools");
exports.forelet = new forelet_1.Forelet();
exports.WIDGET_NAME = module.id.replace(/\//g, '-');

var TransactionHome = function (_widget_1$Widget) {
    _inherits(TransactionHome, _widget_1$Widget);

    function TransactionHome() {
        _classCallCheck(this, TransactionHome);

        return _possibleConstructorReturn(this, (TransactionHome.__proto__ || Object.getPrototypeOf(TransactionHome)).apply(this, arguments));
    }

    _createClass(TransactionHome, [{
        key: "backPrePage",
        value: function backPrePage() {
            this.ok && this.ok();
        }
    }, {
        key: "setProps",
        value: function setProps(props, oldProps) {
            _get(TransactionHome.prototype.__proto__ || Object.getPrototypeOf(TransactionHome.prototype), "setProps", this).call(this, props, oldProps);
            dataCenter_1.dataCenter.updateAddrInfo(tools_1.getCurrentAddrInfo(this.props.currencyName).addr, this.props.currencyName);
            this.init();
        }
    }, {
        key: "init",
        value: function init() {
            var currencyName = this.props.currencyName;
            var balance = tools_1.formatBalance(tools_1.getCurrentAddrInfo(this.props.currencyName).balance);
            var balanceValue = tools_1.fetchBalanceValueOfCoin(currencyName, balance);
            var txList = this.parseTxList();
            var canConvert = this.canConvert();
            var color = memstore_1.getStore('setting/changeColor', 'redUp');
            var addr = tools_1.parseAccount(tools_1.getCurrentAddrByCurrencyName(currencyName));
            this.state = {
                balance: balance,
                balanceValue: tools_1.formatBalanceValue(balanceValue),
                rate: tools_1.formatBalanceValue(tools_1.fetchBalanceValueOfCoin(currencyName, 1)),
                txList: txList,
                canConvert: canConvert,
                redUp: color === 'redUp',
                currencyUnitSymbol: tools_1.getCurrencyUnitSymbol(),
                tabs: [{
                    tab: '全部',
                    list: txList
                }, {
                    tab: '转账',
                    list: this.transferList(txList)
                }, {
                    tab: '收款',
                    list: this.receiptList(txList)
                }],
                activeNum: 0,
                address: addr
            };
        }
        // 解析txList

    }, {
        key: "parseTxList",
        value: function parseTxList() {
            var currencyName = this.props.currencyName;
            var curAddr = tools_1.getCurrentAddrByCurrencyName(currencyName);
            var txList = walletTools_1.fetchTransactionList(curAddr, currencyName);
            txList.forEach(function (item) {
                item.TimeShow = tools_1.timestampFormat(item.time).slice(5);
                item.statusShow = tools_1.parseStatusShow(item).text;
                item.txTypeShow = tools_1.parseTxTypeShow(item.txType);
            });
            return txList;
        }
        /**
         * 转账记录
         */

    }, {
        key: "transferList",
        value: function transferList(txList) {
            return txList.filter(function (item) {
                return item.txType !== interface_1.TxType.Receipt;
            });
        }
        /**
         * 收款记录
         */

    }, {
        key: "receiptList",
        value: function receiptList(txList) {
            return txList.filter(function (item) {
                return item.txType === interface_1.TxType.Receipt;
            });
        }
        /**
         * tab切换
         */

    }, {
        key: "tabsChangeClick",
        value: function tabsChangeClick(value) {
            this.state.activeNum = value;
            this.paint();
        }
    }, {
        key: "canConvert",
        value: function canConvert() {
            var convertCurrencys = tools_1.currencyExchangeAvailable();
            for (var i = 0; i < convertCurrencys.length; i++) {
                if (convertCurrencys[i].symbol === this.props.currencyName) {
                    return true;
                }
            }
            return false;
        }
    }, {
        key: "txListItemClick",
        value: function txListItemClick(e, index) {
            root_1.popNew('app-view-wallet-transaction-transactionDetails', { hash: this.state.txList[index].hash });
        }
        // 转账

    }, {
        key: "doTransferClick",
        value: function doTransferClick() {
            root_1.popNew('app-view-wallet-transaction-transfer', { currencyName: this.props.currencyName });
        }
        // 收款

    }, {
        key: "doReceiptClick",
        value: function doReceiptClick() {
            root_1.popNew('app-view-wallet-transaction-receipt', { currencyName: this.props.currencyName });
        }
    }, {
        key: "chooseAddrClick",
        value: function chooseAddrClick() {
            root_1.popNew('app-view-wallet-transaction-chooseAddr', { currencyName: this.props.currencyName });
        }
    }, {
        key: "updateRate",
        value: function updateRate() {
            this.state.rate = tools_1.formatBalanceValue(tools_1.fetchBalanceValueOfCoin(this.props.currencyName, 1));
            this.paint();
        }
    }, {
        key: "convertCurrencyClick",
        value: function convertCurrencyClick() {
            root_1.popNew('app-view-wallet-coinConvert-coinConvert', { currencyName: this.props.currencyName });
        }
    }, {
        key: "currencyUnitChange",
        value: function currencyUnitChange() {
            this.state.rate = tools_1.formatBalanceValue(tools_1.fetchBalanceValueOfCoin(this.props.currencyName, 1));
            this.state.balanceValue = tools_1.formatBalanceValue(tools_1.fetchBalanceValueOfCoin(this.props.currencyName, this.state.balance));
            this.state.currencyUnitSymbol = tools_1.getCurrencyUnitSymbol();
            this.paint();
        }
    }, {
        key: "refreshClick",
        value: function refreshClick() {
            dataCenter_1.dataCenter.updateAddrInfo(tools_1.getCurrentAddrInfo(this.props.currencyName).addr, this.props.currencyName);
        }
    }]);

    return TransactionHome;
}(widget_1.Widget);

exports.TransactionHome = TransactionHome;
// ==========================本地
// 当前钱包变化
memstore_1.register('wallet/currencyRecords', function () {
    var w = exports.forelet.getWidget(exports.WIDGET_NAME);
    if (w) {
        w.init();
        w.paint();
    }
});
// 汇率变化
memstore_1.register('third/rate', function () {
    var w = exports.forelet.getWidget(exports.WIDGET_NAME);
    if (w) {
        w.updateRate();
    }
});
// 涨跌幅变化
memstore_1.register('third/currency2USDTMap', function () {
    var w = exports.forelet.getWidget(exports.WIDGET_NAME);
    if (w) {
        w.updateRate();
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