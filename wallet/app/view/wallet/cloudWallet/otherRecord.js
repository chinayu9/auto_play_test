_$define("app/view/wallet/cloudWallet/otherRecord", function (require, exports, module){
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
var lang_1 = require("../../../../pi/util/lang");
exports.forelet = new forelet_1.Forelet();
exports.WIDGET_NAME = module.id.replace(/\//g, '-');

var OtherRecord = function (_widget_1$Widget) {
    _inherits(OtherRecord, _widget_1$Widget);

    function OtherRecord() {
        _classCallCheck(this, OtherRecord);

        return _possibleConstructorReturn(this, (OtherRecord.__proto__ || Object.getPrototypeOf(OtherRecord)).apply(this, arguments));
    }

    _createClass(OtherRecord, [{
        key: "setProps",
        value: function setProps(props, oldProps) {
            _get(OtherRecord.prototype.__proto__ || Object.getPrototypeOf(OtherRecord.prototype), "setProps", this).call(this, props, oldProps);
            this.init();
        }
    }, {
        key: "init",
        value: function init() {
            this.language = this.config.value[lang_1.getLang()];
            if (this.props.isActive) {
                pull_1.getAccountDetail(this.props.currencyName, 1);
            }
            var accountDetail = memstore_1.getStore('cloud/cloudWallets').get(interface_1.CloudCurrencyType[this.props.currencyName]).otherLogs;
            this.state = {
                recordList: this.parseRecordList(accountDetail.list),
                nextStart: accountDetail.start,
                canLoadMore: accountDetail.canLoadMore,
                isRefreshing: false
            };
        }
    }, {
        key: "updateRecordList",
        value: function updateRecordList() {
            if (!this.state) return;
            var accountDetail = memstore_1.getStore('cloud/cloudWallets').get(interface_1.CloudCurrencyType[this.props.currencyName]).otherLogs;
            var list = accountDetail.list;
            this.state.nextStart = accountDetail.start;
            this.state.canLoadMore = accountDetail.canLoadMore;
            this.state.recordList = this.parseRecordList(list);
            this.state.isRefreshing = false;
            this.paint();
        }
        // tslint:disable-next-line:typedef

    }, {
        key: "parseRecordList",
        value: function parseRecordList(list) {
            list.forEach(function (item) {
                item.amountShow = item.amount >= 0 ? "+" + item.amount : "" + item.amount;
                item.timeShow = tools_1.timestampFormat(item.time).slice(5);
                item.iconShow = "" + item.behaviorIcon;
            });
            return list;
        }
    }, {
        key: "loadMore",
        value: function loadMore() {
            pull_1.getAccountDetail(this.props.currencyName, 1, this.state.nextStart);
        }
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
    }]);

    return OtherRecord;
}(widget_1.Widget);

exports.OtherRecord = OtherRecord;
memstore_1.register('cloud/cloudWallets', function () {
    var w = exports.forelet.getWidget(exports.WIDGET_NAME);
    if (w) {
        w.updateRecordList();
    }
});
})