_$define("app/view/wallet/coinConvert/convertHistory", function (require, exports, module){
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
var root_1 = require("../../../../pi/ui/root");
var forelet_1 = require("../../../../pi/widget/forelet");
var widget_1 = require("../../../../pi/widget/widget");
var pullWallet_1 = require("../../../net/pullWallet");
var memstore_1 = require("../../../store/memstore");
var tools_1 = require("../../../utils/tools");
var lang_1 = require("../../../../pi/util/lang");
exports.forelet = new forelet_1.Forelet();
exports.WIDGET_NAME = module.id.replace(/\//g, '-');

var ConvertHistory = function (_widget_1$Widget) {
    _inherits(ConvertHistory, _widget_1$Widget);

    function ConvertHistory() {
        _classCallCheck(this, ConvertHistory);

        return _possibleConstructorReturn(this, (ConvertHistory.__proto__ || Object.getPrototypeOf(ConvertHistory)).apply(this, arguments));
    }

    _createClass(ConvertHistory, [{
        key: "setProps",
        value: function setProps(props, oldProps) {
            _get(ConvertHistory.prototype.__proto__ || Object.getPrototypeOf(ConvertHistory.prototype), "setProps", this).call(this, props, oldProps);
            this.init();
        }
    }, {
        key: "backPrePage",
        value: function backPrePage() {
            this.ok && this.ok();
        }
    }, {
        key: "init",
        value: function init() {
            return __awaiter(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
                var close, addr;
                return regeneratorRuntime.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                this.language = this.config.value[lang_1.getLang()];
                                this.state = {
                                    txsShow: []
                                };
                                close = root_1.popNew('app-components1-loading-loading', { text: this.language.loading });
                                addr = tools_1.getCurrentAddrByCurrencyName(this.props.currencyName);
                                _context.next = 6;
                                return pullWallet_1.getTransactionsByAddr(addr);

                            case 6:
                                close.callback(close.widget);

                            case 7:
                            case "end":
                                return _context.stop();
                        }
                    }
                }, _callee, this);
            }));
        }
        /**
         * 兑换历史记录更新
         */

    }, {
        key: "shapeShiftTxsUpdate",
        value: function shapeShiftTxsUpdate(shapeShiftTxsMap) {
            var _this2 = this;

            var addr = tools_1.getCurrentAddrByCurrencyName(this.props.currencyName).toLowerCase();
            var shapeShiftTxs = shapeShiftTxsMap.get(addr);
            var txs = shapeShiftTxs && shapeShiftTxs.list || [];
            txs.sort(function (tx1, tx2) {
                return tx2.timestamp - tx1.timestamp;
            });
            var txsShow = [];
            txs.forEach(function (tx) {
                // tslint:disable-next-line:variable-name
                var status_show = '';
                // tslint:disable-next-line:variable-name
                var status_class = '';
                if (tx.status === 'complete') {
                    status_show = _this2.language.tips[1];
                    status_class = '';
                } else if (tx.status === 'failed') {
                    status_show = _this2.language.tips[2];
                    status_class = 'isActive'; // 做个标记，提醒
                } else {
                    status_show = _this2.language.tips[3];
                    status_class = 'isActive'; // 做个标记，提醒
                }
                txsShow.push(Object.assign({}, tx, { inputTXID_show: tools_1.parseAccount(tx.inputTXID), outputTXID_show: tx.status === 'complete' && tools_1.parseAccount(tx.outputTXID), timestamp_show: tools_1.timestampFormat(tx.timestamp * 1000), status_show: status_show,
                    status_class: status_class }));
            });
            this.state.txsShow = txsShow;
            this.paint();
        }
        /**
         * 查看输出地址交易详情
         */

    }, {
        key: "inHashClick",
        value: function inHashClick(e, index) {
            var tx = this.state.txsShow[index];
            var inHash = tx.inputTXID;
            // const transactions = find('transactions');
            // let record = null;
            // transactions.forEach(item => {
            //     if (item.hash === inHash) {
            //         record = {
            //             tx:tx
            //         };
            //     }
            // });
            // if (!record) {
            //     const curAddrInfo = getCurrentAddrInfo(tx.inputCurrency);
            //     curAddrInfo.record.forEach(item => {
            //         if (item.id === inHash) {
            //             record = {
            //                 ...item
            //             };
            //         }
            //     });
            // }
            root_1.popNew('app-view-wallet-transaction-transactionDetails', { hash: inHash });
        }
        /**
         * 查看输入地址交易详情
         */

    }, {
        key: "outHashClick",
        value: function outHashClick(e, index) {
            var tx = this.state.txsShow[index];
            if (tx.status !== 'complete') return;
            var outHash = tx.outputTXID;
            // const transactions = find('transactions');
            // let record = null;
            // transactions.forEach(item => {
            //     if (item.hash === outHash) {
            //         record = {
            //             tx:tx
            //         };
            //     }
            // });
            // if (!record) return;
            root_1.popNew('app-view-wallet-transaction-transactionDetails', { hash: outHash });
        }
    }]);

    return ConvertHistory;
}(widget_1.Widget);

exports.ConvertHistory = ConvertHistory;
// =================================本地
memstore_1.register('third/shapeShiftTxsMap', function (shapeShiftTxsMap) {
    var w = exports.forelet.getWidget(exports.WIDGET_NAME);
    if (w) {
        w.shapeShiftTxsUpdate(shapeShiftTxsMap);
    }
});
})