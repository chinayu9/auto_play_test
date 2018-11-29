_$define("app/view/wallet/transaction/transfer", function (require, exports, module){
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
 * 转账
 */
var root_1 = require("../../../../pi/ui/root");
var lang_1 = require("../../../../pi/util/lang");
var forelet_1 = require("../../../../pi/widget/forelet");
var widget_1 = require("../../../../pi/widget/widget");
var config_1 = require("../../../config");
var dataCenter_1 = require("../../../logic/dataCenter");
var native_1 = require("../../../logic/native");
var pull_1 = require("../../../net/pull");
var pullWallet_1 = require("../../../net/pullWallet");
var interface_1 = require("../../../store/interface");
var memstore_1 = require("../../../store/memstore");
var toolMessages_1 = require("../../../utils/toolMessages");
// tslint:disable-next-line:max-line-length
var tools_1 = require("../../../utils/tools");
exports.forelet = new forelet_1.Forelet();
exports.WIDGET_NAME = module.id.replace(/\//g, '-');

var Transfer = function (_widget_1$Widget) {
    _inherits(Transfer, _widget_1$Widget);

    function Transfer() {
        _classCallCheck(this, Transfer);

        return _possibleConstructorReturn(this, (Transfer.__proto__ || Object.getPrototypeOf(Transfer)).apply(this, arguments));
    }

    _createClass(Transfer, [{
        key: "setProps",
        value: function setProps(props, oldProps) {
            var _this2 = this;

            var _super = function _super(name) {
                return _get(Transfer.prototype.__proto__ || Object.getPrototypeOf(Transfer.prototype), name, _this2);
            };
            return __awaiter(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
                return regeneratorRuntime.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                _super("setProps").call(this, props, oldProps);
                                this.init();

                            case 2:
                            case "end":
                                return _context.stop();
                        }
                    }
                }, _callee, this);
            }));
        }
    }, {
        key: "init",
        value: function init() {
            return __awaiter(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
                var minerFeeList, tx, curLevel;
                return regeneratorRuntime.wrap(function _callee2$(_context2) {
                    while (1) {
                        switch (_context2.prev = _context2.next) {
                            case 0:
                                this.language = this.config.value[lang_1.getLang()];
                                if (this.props.currencyName === 'BTC') {
                                    pull_1.fetchBtcFees();
                                } else {
                                    pull_1.fetchGasPrices();
                                }
                                minerFeeList = tools_1.fetchMinerFeeList(this.props.currencyName);
                                tx = this.props.tx;
                                curLevel = tx ? tx.minerFeeLevel + 1 : interface_1.MinerFeeLevel.Standard;

                                this.state = {
                                    fromAddr: tools_1.getCurrentAddrByCurrencyName(this.props.currencyName),
                                    toAddr: tx ? tx.toAddr : '',
                                    amount: tx ? tx.pay : 0,
                                    balance: tools_1.formatBalance(tools_1.getCurrentAddrInfo(this.props.currencyName).balance),
                                    minerFee: minerFeeList[curLevel].minerFee,
                                    minerFeeList: minerFeeList,
                                    curLevel: curLevel,
                                    minLevel: curLevel,
                                    inputDisabled: tx ? true : false,
                                    amountShow: '0.00',
                                    currencyUnitSymbol: tools_1.getCurrencyUnitSymbol()
                                };

                            case 6:
                            case "end":
                                return _context2.stop();
                        }
                    }
                }, _callee2, this);
            }));
        }
    }, {
        key: "updateMinerFeeList",
        value: function updateMinerFeeList() {
            var minerFeeList = tools_1.fetchMinerFeeList(this.props.currencyName);
            this.state.minerFeeList = minerFeeList;
            this.state.minerFee = minerFeeList[this.state.curLevel].minerFee;
            this.paint();
        }
    }, {
        key: "backPrePage",
        value: function backPrePage() {
            this.ok && this.ok();
        }
    }, {
        key: "speedDescClick",
        value: function speedDescClick() {
            root_1.popNew('app-components-allModalBox-modalBox1', this.language.modalBox);
        }
        // 到账速度

    }, {
        key: "chooseMinerFee",
        value: function chooseMinerFee() {
            var _this3 = this;

            root_1.popNew('app-components-allModalBox-chooseModalBox', {
                currencyName: this.props.currencyName,
                minerFeeList: this.state.minerFeeList,
                curLevel: this.state.curLevel,
                minLevel: this.state.minLevel
            }, function (index) {
                _this3.state.curLevel = _this3.state.minerFeeList[index].level;
                _this3.state.minerFee = _this3.state.minerFeeList[index].minerFee;
                _this3.paint();
            });
        }
        // 收款地址变化

    }, {
        key: "toAddrChange",
        value: function toAddrChange(e) {
            this.state.toAddr = e.value;
            this.paint();
        }
        // 转账金额变化

    }, {
        key: "amountChange",
        value: function amountChange(e) {
            this.state.amount = e.value;
            var amountShow = tools_1.formatBalance(tools_1.fetchBalanceValueOfCoin(this.props.currencyName, e.value));
            this.state.amountShow = amountShow === 0 ? '0.00' : amountShow;
            this.paint();
        }
        // 转账

    }, {
        key: "nextClick",
        value: function nextClick() {
            return __awaiter(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
                var _this4 = this;

                var minerFeeLevel, currencyName, fromAddr, toAddr, pay, txPayload, passwd, ret, loading, tx;
                return regeneratorRuntime.wrap(function _callee3$(_context3) {
                    while (1) {
                        switch (_context3.prev = _context3.next) {
                            case 0:
                                if (this.state.toAddr) {
                                    _context3.next = 3;
                                    break;
                                }

                                root_1.popNew('app-components1-message-message', { content: this.language.tips[0] });
                                return _context3.abrupt("return");

                            case 3:
                                if (Number(this.state.amount)) {
                                    _context3.next = 6;
                                    break;
                                }

                                root_1.popNew('app-components1-message-message', { content: this.language.tips[1] });
                                return _context3.abrupt("return");

                            case 6:
                                if (!config_1.ERC20Tokens[this.props.currencyName]) {
                                    _context3.next = 12;
                                    break;
                                }

                                if (!(this.state.balance < Number(this.state.amount) || this.state.minerFee > tools_1.getCurrentAddrInfo('ETH').balance)) {
                                    _context3.next = 10;
                                    break;
                                }

                                root_1.popNew('app-components1-message-message', { content: this.language.tips[2] });
                                return _context3.abrupt("return");

                            case 10:
                                _context3.next = 15;
                                break;

                            case 12:
                                if (!(this.state.balance < Number(this.state.amount) + this.state.minerFee)) {
                                    _context3.next = 15;
                                    break;
                                }

                                root_1.popNew('app-components1-message-message', { content: this.language.tips[2] });
                                return _context3.abrupt("return");

                            case 15:
                                if (tools_1.judgeAddressAvailable(this.props.currencyName, this.state.toAddr)) {
                                    _context3.next = 18;
                                    break;
                                }

                                root_1.popNew('app-components1-message-message', { content: this.language.tips[3] });
                                return _context3.abrupt("return");

                            case 18:
                                minerFeeLevel = this.state.curLevel;
                                currencyName = this.props.currencyName;
                                fromAddr = this.state.fromAddr;
                                toAddr = this.state.toAddr;
                                pay = Number(this.state.amount);
                                txPayload = {
                                    fromAddr: fromAddr,
                                    toAddr: toAddr,
                                    pay: pay,
                                    currencyName: currencyName,
                                    fee: this.state.minerFee,
                                    minerFeeLevel: minerFeeLevel
                                };
                                _context3.next = 26;
                                return tools_1.popPswBox();

                            case 26:
                                passwd = _context3.sent;

                                if (passwd) {
                                    _context3.next = 29;
                                    break;
                                }

                                return _context3.abrupt("return");

                            case 29:
                                ret = void 0;

                                if (this.props.tx) {
                                    _context3.next = 38;
                                    break;
                                }

                                loading = root_1.popNew('app-components1-loading-loading', { text: tools_1.getStaticLanguage().transfer.loading });
                                _context3.next = 34;
                                return pullWallet_1.transfer(passwd, txPayload, function (tx) {
                                    tools_1.updateLocalTx(tx);
                                    dataCenter_1.dataCenter.updateAddrInfo(tx.addr, tx.currencyName);
                                    root_1.popNew('app-components1-message-message', { content: tools_1.getStaticLanguage().transfer.transSuccess });
                                    root_1.popNew('app-view-wallet-transaction-transactionDetails', { hash: tx.hash });
                                    _this4.ok && _this4.ok();
                                }, function (error) {
                                    toolMessages_1.doErrorShow(error);
                                });

                            case 34:
                                ret = _context3.sent;

                                loading.callback(loading.widget);
                                _context3.next = 44;
                                break;

                            case 38:
                                tx = Object.assign({}, this.props.tx);

                                tx.minerFeeLevel = minerFeeLevel;
                                _context3.next = 42;
                                return pullWallet_1.resendNormalTransfer(passwd, tx);

                            case 42:
                                ret = _context3.sent;

                                if (ret) {
                                    this.ok && this.ok();
                                }

                            case 44:
                            case "end":
                                return _context3.stop();
                        }
                    }
                }, _callee3, this);
            }));
        }
        /**
         * 扫描二维码
         */

    }, {
        key: "doScanClick",
        value: function doScanClick() {
            var _this5 = this;

            if (this.props.tx) return;
            native_1.doScanQrCode(function (res) {
                console.log(res);
                _this5.state.toAddr = res;
                _this5.paint();
            });
        }
    }]);

    return Transfer;
}(widget_1.Widget);

exports.Transfer = Transfer;
// gasPrice变化
memstore_1.register('third/gasPrice', function () {
    var w = exports.forelet.getWidget(exports.WIDGET_NAME);
    if (w) {
        w.updateMinerFeeList();
    }
});
// btcMinerFee变化
memstore_1.register('third/btcMinerFee', function () {
    var w = exports.forelet.getWidget(exports.WIDGET_NAME);
    if (w) {
        w.updateMinerFeeList();
    }
});
})