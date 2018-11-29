_$define("app/view/earn/exchange/exchangeHistory", function (require, exports, module){
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
 * ExchangeHistory
 */
var root_1 = require("../../../../pi/ui/root");
var forelet_1 = require("../../../../pi/widget/forelet");
var widget_1 = require("../../../../pi/widget/widget");
var pull_1 = require("../../../net/pull");
var interface_1 = require("../../../store/interface");
var memstore_1 = require("../../../store/memstore");
var constants_1 = require("../../../utils/constants");
var tools_1 = require("../../../utils/tools");
var lang_1 = require("../../../../pi/util/lang");
exports.forelet = new forelet_1.Forelet();
exports.WIDGET_NAME = module.id.replace(/\//g, '-');

var ExchangeHistory = function (_widget_1$Widget) {
    _inherits(ExchangeHistory, _widget_1$Widget);

    function ExchangeHistory() {
        _classCallCheck(this, ExchangeHistory);

        return _possibleConstructorReturn(this, (ExchangeHistory.__proto__ || Object.getPrototypeOf(ExchangeHistory)).apply(this, arguments));
    }

    _createClass(ExchangeHistory, [{
        key: "create",
        value: function create() {
            var _this2 = this;

            var _super = function _super(name) {
                return _get(ExchangeHistory.prototype.__proto__ || Object.getPrototypeOf(ExchangeHistory.prototype), name, _this2);
            };
            return __awaiter(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
                return regeneratorRuntime.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                _super("create").call(this);
                                this.language = this.config.value[lang_1.getLang()];
                                this.state = {
                                    recordList: [
                                        // { rid:111,rtype:'00',rtypeShow:'拼手气红包',ctypeShow:'ETH',timeShow:'04-30 14:32:00',amount:1 },       
                                        // { rid:111,rtype:'00',rtypeShow:'普通红包',ctypeShow:'KT',timeShow:'04-30 14:32:00',amount:1 },
                                        // { rid:111,rtype:'00',rtypeShow:'拼手气红包',ctypeShow:'ETH',timeShow:'04-30 14:32:00',amount:1 }                
                                    ],
                                    recordListShow: [],
                                    convertNumber: 0,
                                    convertNumberShow: 0,
                                    start: undefined,
                                    topRefresh: false,
                                    refresh: true,
                                    hasMore: false,
                                    showMoreTips: false,
                                    inviteObj: null,
                                    userList: [],
                                    scrollHeight: 0
                                };
                                this.initData();

                            case 4:
                            case "end":
                                return _context.stop();
                        }
                    }
                }, _callee, this);
            }));
        }
        /**
         * 更新数据
         */

    }, {
        key: "initData",
        value: function initData() {
            this.getInviteRedEnvelope();
            var cHisRec = memstore_1.getStore('activity/luckyMoney/exchange');
            if (cHisRec) {
                var hList = cHisRec.list;
                if (hList && hList.length > this.state.recordList.length) {
                    console.log('load more from local');
                } else {
                    console.log('load more from server');
                    pull_1.queryConvertLog(this.state.start);
                }
            } else {
                console.log('load more from server');
                pull_1.queryConvertLog(this.state.start);
            }
            this.loadMore();
        }
        /**
         * 返回上一页
         */

    }, {
        key: "backPrePage",
        value: function backPrePage() {
            this.ok && this.ok();
        }
        /**
         * 更新红包领取详情
         */

    }, {
        key: "initRedEnv",
        value: function initRedEnv() {
            return __awaiter(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
                var i, data;
                return regeneratorRuntime.wrap(function _callee2$(_context2) {
                    while (1) {
                        switch (_context2.prev = _context2.next) {
                            case 0:
                                _context2.t0 = regeneratorRuntime.keys(this.state.recordList);

                            case 1:
                                if ((_context2.t1 = _context2.t0()).done) {
                                    _context2.next = 9;
                                    break;
                                }

                                i = _context2.t1.value;
                                _context2.next = 5;
                                return pull_1.getUserList([this.state.recordList[i].suid]);

                            case 5:
                                data = _context2.sent;

                                this.state.recordList[i].userName = data ? data.nickName : this.language.defaultName;
                                _context2.next = 1;
                                break;

                            case 9:
                                this.paint();

                            case 10:
                            case "end":
                                return _context2.stop();
                        }
                    }
                }, _callee2, this);
            }));
        }
        /**
         * 查看详情
         */

    }, {
        key: "goDetail",
        value: function goDetail(ind) {
            root_1.popNew('app-view-earn-exchange-exchangeDetail', this.state.recordListShow[ind]);
        }
        // 获取邀请红包记录

    }, {
        key: "getInviteRedEnvelope",
        value: function getInviteRedEnvelope() {
            return __awaiter(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
                var inviteRedBagRec, data;
                return regeneratorRuntime.wrap(function _callee3$(_context3) {
                    while (1) {
                        switch (_context3.prev = _context3.next) {
                            case 0:
                                inviteRedBagRec = memstore_1.getStore('activity/luckyMoney/invite');

                                if (!inviteRedBagRec) {
                                    _context3.next = 6;
                                    break;
                                }

                                console.log('inviteRedBagRec from local');
                                this.state.inviteObj = inviteRedBagRec;
                                this.innerPaint();
                                return _context3.abrupt("return");

                            case 6:
                                _context3.next = 8;
                                return pull_1.getData('convertRedEnvelope');

                            case 8:
                                data = _context3.sent;

                                if (data.value && data.value !== '$nil') {
                                    this.state.inviteObj = {
                                        suid: 0,
                                        rid: '-1',
                                        rtype: '99',
                                        rtypeShow: tools_1.parseRtype(99),
                                        ctype: interface_1.CloudCurrencyType.ETH,
                                        ctypeShow: 'ETH',
                                        amount: 0.15,
                                        time: data.value,
                                        timeShow: tools_1.timestampFormat(data.value),
                                        userName: this.language.inviteRedEnv
                                    };
                                    memstore_1.setStore('activity/luckyMoney/invite', this.state.inviteObj);
                                    this.innerPaint();
                                }

                            case 10:
                            case "end":
                                return _context3.stop();
                        }
                    }
                }, _callee3, this);
            }));
        }
        // 每次paint前对邀请红包做处理

    }, {
        key: "innerPaint",
        value: function innerPaint() {
            if (!this.state.inviteObj) {
                this.state.convertNumberShow = this.state.convertNumber;
                this.state.recordListShow = this.state.recordList;
                this.paint();
                return;
            }
            this.state.convertNumberShow = this.state.convertNumber + 1;
            var rList = this.state.recordList.slice(0);
            rList.push(this.state.inviteObj);
            rList.sort(function (i1, i2) {
                return i2.time - i1.time;
            });
            this.state.recordListShow = rList;
            this.paint();
        }
        /**
         * 实际加载数据
         */

    }, {
        key: "loadMore",
        value: function loadMore() {
            return __awaiter(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
                var cHisRec, hList, start;
                return regeneratorRuntime.wrap(function _callee4$(_context4) {
                    while (1) {
                        switch (_context4.prev = _context4.next) {
                            case 0:
                                cHisRec = memstore_1.getStore('activity/luckyMoney/exchange');

                                if (cHisRec) {
                                    _context4.next = 3;
                                    break;
                                }

                                return _context4.abrupt("return");

                            case 3:
                                hList = cHisRec.list;
                                start = this.state.recordList.length;

                                this.state.recordList = this.state.recordList.concat(hList.slice(start, start + constants_1.PAGELIMIT));
                                this.state.convertNumber = cHisRec.convertNumber;
                                this.state.start = cHisRec.start;
                                this.state.hasMore = this.state.convertNumber > this.state.recordList.length;
                                this.state.showMoreTips = this.state.convertNumber >= constants_1.PAGELIMIT;
                                _context4.next = 12;
                                return this.initRedEnv();

                            case 12:
                                this.innerPaint();

                            case 13:
                            case "end":
                                return _context4.stop();
                        }
                    }
                }, _callee4, this);
            }));
        }
        /**
         * 页面滑动，加载更多数据
         */

    }, {
        key: "getMoreList",
        value: function getMoreList() {
            var _this3 = this;

            var oh1 = document.getElementById('exchangeHistoryContent').offsetHeight;
            var oh2 = document.getElementById('exchangeHistoryRecords').offsetHeight;
            var scrollTop = document.getElementById('exchangeHistoryContent').scrollTop;
            this.state.scrollHeight = scrollTop;
            if (this.state.hasMore && this.state.refresh && oh2 - oh1 - scrollTop < 20) {
                this.state.refresh = false;
                console.log(this.language.loading);
                setTimeout(function () {
                    _this3.initData();
                    _this3.state.refresh = true;
                }, 500);
            }
            this.paint();
        }
        /**
         * 页面刷新
         */

    }, {
        key: "refreshPage",
        value: function refreshPage() {
            var _this4 = this;

            pull_1.queryConvertLog();
            this.state.topRefresh = true;
            this.paint();
            setTimeout(function () {
                _this4.state.topRefresh = false;
                _this4.paint();
            }, 1000);
        }
    }]);

    return ExchangeHistory;
}(widget_1.Widget);

exports.ExchangeHistory = ExchangeHistory;
// =====================================本地
memstore_1.register('activity/luckyMoney/exchange', function () {
    var w = exports.forelet.getWidget(exports.WIDGET_NAME);
    if (w) {
        w.loadMore();
    }
});
})