_$define("app/view/wallet/cloudWallet/totalRecord", function (require, exports, module){
"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * other record
 */
var root_1 = require("../../../../pi/ui/root");
var lang_1 = require("../../../../pi/util/lang");
var forelet_1 = require("../../../../pi/widget/forelet");
var widget_1 = require("../../../../pi/widget/widget");
var pull_1 = require("../../../net/pull");
var interface_1 = require("../../../store/interface");
var memstore_1 = require("../../../store/memstore");
var tools_1 = require("../../../utils/tools");
var walletTools_1 = require("../../../utils/walletTools");
exports.forelet = new forelet_1.Forelet();
exports.WIDGET_NAME = module.id.replace(/\//g, '-');

var TotalRecord = function (_widget_1$Widget) {
    _inherits(TotalRecord, _widget_1$Widget);

    function TotalRecord() {
        _classCallCheck(this, TotalRecord);

        return _possibleConstructorReturn(this, (TotalRecord.__proto__ || Object.getPrototypeOf(TotalRecord)).apply(this, arguments));
    }

    _createClass(TotalRecord, [{
        key: "setProps",
        value: function setProps(props, oldProps) {
            _get(TotalRecord.prototype.__proto__ || Object.getPrototypeOf(TotalRecord.prototype), "setProps", this).call(this, props, oldProps);
            this.init();
        }
    }, {
        key: "init",
        value: function init() {
            this.language = this.config.value[lang_1.getLang()];
            this.state = {
                recordList: [],
                otherList: [],
                rechargeList: [],
                withdrawList: [],
                otherNext: 0,
                rechargeNext: 0,
                withdrawNext: 0,
                canLoadMore: false,
                isRefreshing: false
            };
            if (this.props.isActive) {
                pull_1.getAccountDetail(this.props.currencyName, 1);
                pull_1.getWithdrawLogs(this.props.currencyName);
                pull_1.getRechargeLogs(this.props.currencyName);
            }
            this.updateRecordList();
        }
        /**
         * 更新交易列表
         */

    }, {
        key: "updateRecordList",
        value: function updateRecordList() {
            if (!this.state) return;
            var cloudWallets = memstore_1.getStore('cloud/cloudWallets');
            var data1 = cloudWallets.get(interface_1.CloudCurrencyType[this.props.currencyName]).rechargeLogs;
            this.state.rechargeNext = data1.start;
            this.state.rechargeList = this.parseRechargeList(data1.list);
            var data2 = cloudWallets.get(interface_1.CloudCurrencyType[this.props.currencyName]).otherLogs;
            this.state.otherNext = data2.start;
            this.state.otherList = this.parseOtherList(data2.list);
            var data3 = cloudWallets.get(interface_1.CloudCurrencyType[this.props.currencyName]).withdrawLogs;
            this.state.withdrawNext = data3.start;
            this.state.withdrawList = this.parseWithdrawList(data3.list);
            this.state.recordList = [].concat(this.state.rechargeList, this.state.otherList, this.state.withdrawList);
            this.state.recordList.sort(function (v1, v2) {
                return v2.time - v1.time;
            });
            this.state.canLoadMore = data1.canLoadMore | data2.canLoadMore | data3.canLoadMore;
            this.state.isRefreshing = false;
            this.paint();
        }
        /**
         * 解析其他记录
         */

    }, {
        key: "parseOtherList",
        value: function parseOtherList(list) {
            list.forEach(function (item) {
                item.amountShow = item.amount >= 0 ? "+" + item.amount : "" + item.amount;
                item.timeShow = tools_1.timestampFormat(item.time).slice(5);
                item.iconShow = "" + item.behaviorIcon;
            });
            return list;
        }
        /**
         * 解析提币记录
         */

    }, {
        key: "parseWithdrawList",
        value: function parseWithdrawList(list) {
            var _this2 = this;

            list.forEach(function (item) {
                var txDetail = walletTools_1.fetchLocalTxByHash1(item.hash);
                var obj = tools_1.parseStatusShow(txDetail);
                item.statusShow = obj.text;
                item.behavior = _this2.language.withdraw;
                item.amountShow = "-" + item.amount;
                item.timeShow = tools_1.timestampFormat(item.time).slice(5);
                item.iconShow = "cloud_withdraw_icon.png";
            });
            return list;
        }
        /**
         * 解析充值记录
         */

    }, {
        key: "parseRechargeList",
        value: function parseRechargeList(list) {
            var _this3 = this;

            list.forEach(function (item) {
                var txDetail = walletTools_1.fetchLocalTxByHash1(item.hash);
                var obj = tools_1.parseStatusShow(txDetail);
                item.statusShow = obj.text;
                item.behavior = _this3.language.recharge;
                item.amountShow = "+" + item.amount;
                item.timeShow = tools_1.timestampFormat(item.time).slice(5);
                item.iconShow = "cloud_charge_icon.png";
            });
            return list;
        }
        /**
         * 查看详情界面
         */

    }, {
        key: "recordListItemClick",
        value: function recordListItemClick(e, index) {
            if (this.state.recordList[index].hash) {
                root_1.popNew('app-view-wallet-transaction-transactionDetails', { hash: this.state.recordList[index].hash });
            }
        }
        /**
         * 请求更多数据
         */

    }, {
        key: "loadMore",
        value: function loadMore() {
            pull_1.getAccountDetail(this.props.currencyName, 0, this.state.otherNext);
            pull_1.getWithdrawLogs(this.props.currencyName, this.state.withdrawNext);
            pull_1.getRechargeLogs(this.props.currencyName, this.state.rechargeNext);
        }
        /**
         * 加载更多数据
         */

    }, {
        key: "getMoreList",
        value: function getMoreList() {
            var h1 = document.getElementById('recharge-scroller-container').offsetHeight;
            var h2 = document.getElementById('recharge-content-container').offsetHeight;
            var scrollTop = document.getElementById('recharge-scroller-container').scrollTop;
            if (this.state.canLoadMore && !this.state.isRefreshing && h2 - h1 - scrollTop < 20) {
                this.state.isRefreshing = true;
                this.paint();
                console.log('加载中，请稍后~~~');
                this.loadMore();
            }
        }
        /**
         * 更新交易状态
         */

    }, {
        key: "updateTransaction",
        value: function updateTransaction() {
            var list = this.state.rechargeList.concat(this.state.withdrawList);
            list.forEach(function (item) {
                var txDetail = walletTools_1.fetchLocalTxByHash1(item.hash);
                var obj = tools_1.parseStatusShow(txDetail);
                item.statusShow = obj.text;
            });
            this.paint();
        }
    }]);

    return TotalRecord;
}(widget_1.Widget);

exports.TotalRecord = TotalRecord;
// 云端记录变化
memstore_1.register('cloud/cloudWallets', function () {
    var w = exports.forelet.getWidget(exports.WIDGET_NAME);
    if (w) {
        w.updateRecordList();
    }
});
// 本地交易变化,更新状态
memstore_1.register('wallet/currencyRecords', function () {
    var w = exports.forelet.getWidget(exports.WIDGET_NAME);
    if (w) {
        w.updateTransaction();
    }
});
})