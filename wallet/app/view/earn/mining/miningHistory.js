_$define("app/view/earn/mining/miningHistory", function (require, exports, module){
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
 * 分红领取记录，挖矿记录
 */
// ================================ 导入
var forelet_1 = require("../../../../pi/widget/forelet");
var widget_1 = require("../../../../pi/widget/widget");
var pull_1 = require("../../../net/pull");
var memstore_1 = require("../../../store/memstore");
var constants_1 = require("../../../utils/constants");
var lang_1 = require("../../../../pi/util/lang");
exports.forelet = new forelet_1.Forelet();
exports.WIDGET_NAME = module.id.replace(/\//g, '-');

var Dividend = function (_widget_1$Widget) {
    _inherits(Dividend, _widget_1$Widget);

    function Dividend() {
        _classCallCheck(this, Dividend);

        return _possibleConstructorReturn(this, (Dividend.__proto__ || Object.getPrototypeOf(Dividend)).call(this));
    }

    _createClass(Dividend, [{
        key: "create",
        value: function create() {
            _get(Dividend.prototype.__proto__ || Object.getPrototypeOf(Dividend.prototype), "create", this).call(this);
            this.init();
        }
    }, {
        key: "init",
        value: function init() {
            this.language = this.config.value[lang_1.getLang()];
            this.state = {
                data: [],
                hasMore: false,
                start: '',
                refresh: true
            };
            this.initData();
        }
        /**
         * 获取更新数据
         */

    }, {
        key: "initData",
        value: function initData() {
            return __awaiter(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
                var data, hList;
                return regeneratorRuntime.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                data = memstore_1.getStore('activity/mining/history');

                                if (data) {
                                    hList = data.list;

                                    if (hList && hList.length > this.state.data.length) {
                                        console.log('load more from local');
                                    } else {
                                        console.log('load more from server');
                                        pull_1.getMiningHistory(this.state.start);
                                    }
                                } else {
                                    console.log('load more from server');
                                    pull_1.getMiningHistory(this.state.start);
                                }
                                this.loadMore();
                                this.paint();

                            case 4:
                            case "end":
                                return _context.stop();
                        }
                    }
                }, _callee, this);
            }));
        }
    }, {
        key: "backPrePage",
        value: function backPrePage() {
            this.ok && this.ok();
        }
        /**
         *  实际加载数据
         */

    }, {
        key: "loadMore",
        value: function loadMore() {
            return __awaiter(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
                var data, hList, start;
                return regeneratorRuntime.wrap(function _callee2$(_context2) {
                    while (1) {
                        switch (_context2.prev = _context2.next) {
                            case 0:
                                data = memstore_1.getStore('activity/mining/history');

                                if (data) {
                                    _context2.next = 3;
                                    break;
                                }

                                return _context2.abrupt("return");

                            case 3:
                                hList = data.list;
                                start = this.state.data.length;

                                this.state.data = this.state.data.concat(hList.slice(start, start + constants_1.PAGELIMIT));
                                this.state.start = data.start;
                                this.state.hasMore = data.canLoadMore;
                                this.paint();

                            case 9:
                            case "end":
                                return _context2.stop();
                        }
                    }
                }, _callee2, this);
            }));
        }
        /**
         * 滚动加载更多列表数据
         */

    }, {
        key: "getMoreList",
        value: function getMoreList() {
            var _this2 = this;

            var h1 = document.getElementById('historylist').offsetHeight;
            var h2 = document.getElementById('history').offsetHeight;
            var scrollTop = document.getElementById('historylist').scrollTop;
            if (this.state.hasMore && this.state.refresh && h2 - h1 - scrollTop < 20) {
                this.state.refresh = false;
                console.log('加载中，请稍后~~~');
                setTimeout(function () {
                    _this2.loadMore();
                    _this2.state.refresh = true;
                }, 1000);
            }
        }
        /**
         * 刷新页面
         */

    }, {
        key: "refreshPage",
        value: function refreshPage() {
            this.init();
        }
    }]);

    return Dividend;
}(widget_1.Widget);

exports.Dividend = Dividend;
memstore_1.register('activity/mining/history', function () {
    var w = exports.forelet.getWidget(exports.WIDGET_NAME);
    if (w) {
        w.loadMore();
    }
});
})