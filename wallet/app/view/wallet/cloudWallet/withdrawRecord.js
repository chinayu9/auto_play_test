_$define("app/view/wallet/cloudWallet/withdrawRecord", function (require, exports, module){
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
var forelet_1 = require("../../../../pi/widget/forelet");
var widget_1 = require("../../../../pi/widget/widget");
var pull_1 = require("../../../net/pull");
var interface_1 = require("../../../store/interface");
var memstore_1 = require("../../../store/memstore");
var tools_1 = require("../../../utils/tools");
var walletTools_1 = require("../../../utils/walletTools");
var lang_1 = require("../../../../pi/util/lang");
exports.forelet = new forelet_1.Forelet();
exports.WIDGET_NAME = module.id.replace(/\//g, '-');

var WithdrawRecord = function (_widget_1$Widget) {
    _inherits(WithdrawRecord, _widget_1$Widget);

    function WithdrawRecord() {
        _classCallCheck(this, WithdrawRecord);

        return _possibleConstructorReturn(this, (WithdrawRecord.__proto__ || Object.getPrototypeOf(WithdrawRecord)).apply(this, arguments));
    }

    _createClass(WithdrawRecord, [{
        key: "setProps",
        value: function setProps(props, oldProps) {
            _get(WithdrawRecord.prototype.__proto__ || Object.getPrototypeOf(WithdrawRecord.prototype), "setProps", this).call(this, props, oldProps);
            this.init();
            if (this.props.isActive) {
                pull_1.getWithdrawLogs(this.props.currencyName);
            }
        }
    }, {
        key: "init",
        value: function init() {
            this.language = this.config.value[lang_1.getLang()];
            var withdrawLogs = memstore_1.getStore('cloud/cloudWallets').get(interface_1.CloudCurrencyType[this.props.currencyName]).withdrawLogs;
            this.state = {
                recordList: [],
                nextStart: withdrawLogs.start,
                canLoadMore: withdrawLogs.canLoadMore,
                isRefreshing: false
            };
            this.state.recordList = this.parseRecordList(withdrawLogs.list);
        }
    }, {
        key: "updateRecordList",
        value: function updateRecordList() {
            if (!this.state) return;
            var withdrawLogs = memstore_1.getStore('cloud/cloudWallets').get(interface_1.CloudCurrencyType[this.props.currencyName]).withdrawLogs;
            var list = withdrawLogs.list;
            this.state.nextStart = withdrawLogs.start;
            this.state.canLoadMore = withdrawLogs.canLoadMore;
            this.state.recordList = this.parseRecordList(list);
            this.state.isRefreshing = false;
            this.paint();
        }
        // tslint:disable-next-line:typedef

    }, {
        key: "parseRecordList",
        value: function parseRecordList(list) {
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
    }, {
        key: "updateTransaction",
        value: function updateTransaction() {
            var list = this.state.recordList;
            list.forEach(function (item) {
                var txDetail = walletTools_1.fetchLocalTxByHash1(item.hash);
                var obj = tools_1.parseStatusShow(txDetail);
                item.statusShow = obj.text;
            });
            this.paint();
        }
    }, {
        key: "loadMore",
        value: function loadMore() {
            pull_1.getWithdrawLogs(this.props.currencyName, this.state.nextStart);
        }
    }, {
        key: "getMoreList",
        value: function getMoreList() {
            var h1 = document.getElementById('withdraw-scroller-container').offsetHeight;
            var h2 = document.getElementById('withdraw-content-container').offsetHeight;
            var scrollTop = document.getElementById('withdraw-scroller-container').scrollTop;
            if (this.state.canLoadMore && !this.state.isRefreshing && h2 - h1 - scrollTop < 20) {
                this.state.isRefreshing = true;
                this.paint();
                console.log('加载中，请稍后~~~');
                this.loadMore();
            }
        }
    }]);

    return WithdrawRecord;
}(widget_1.Widget);

exports.WithdrawRecord = WithdrawRecord;
// ====================================
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