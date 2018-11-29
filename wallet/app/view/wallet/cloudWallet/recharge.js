_$define("app/view/wallet/cloudWallet/recharge", function (require, exports, module){
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
 * Recharge
 */
var root_1 = require("../../../../pi/ui/root");
var lang_1 = require("../../../../pi/util/lang");
var forelet_1 = require("../../../../pi/widget/forelet");
var widget_1 = require("../../../../pi/widget/widget");
var pull_1 = require("../../../net/pull");
var pullWallet_1 = require("../../../net/pullWallet");
var interface_1 = require("../../../store/interface");
var memstore_1 = require("../../../store/memstore");
// tslint:disable-next-line:max-line-length
var tools_1 = require("../../../utils/tools");
exports.forelet = new forelet_1.Forelet();
exports.WIDGET_NAME = module.id.replace(/\//g, '-');

var Recharge = function (_widget_1$Widget) {
    _inherits(Recharge, _widget_1$Widget);

    function Recharge() {
        _classCallCheck(this, Recharge);

        return _possibleConstructorReturn(this, (Recharge.__proto__ || Object.getPrototypeOf(Recharge)).apply(this, arguments));
    }

    _createClass(Recharge, [{
        key: "setProps",
        value: function setProps(props, oldProps) {
            _get(Recharge.prototype.__proto__ || Object.getPrototypeOf(Recharge.prototype), "setProps", this).call(this, props, oldProps);
            this.init();
        }
    }, {
        key: "init",
        value: function init() {
            return __awaiter(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
                var minerFeeList, tx, curLevel;
                return regeneratorRuntime.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                this.language = this.config.value[lang_1.getLang()];
                                if (this.props.currencyName === 'BTC') {
                                    pull_1.fetchBtcFees();
                                } else {
                                    pull_1.fetchGasPrices();
                                }
                                minerFeeList = tools_1.fetchMinerFeeList(this.props.currencyName);
                                tx = this.props.tx;

                                console.log(tx);
                                curLevel = tx ? tx.minerFeeLevel + 1 : interface_1.MinerFeeLevel.Standard;

                                this.state = {
                                    fromAddr: tools_1.getCurrentAddrByCurrencyName(this.props.currencyName),
                                    amount: tx ? tx.pay : 0,
                                    balance: tools_1.formatBalance(tools_1.getCurrentAddrInfo(this.props.currencyName).balance),
                                    minerFee: minerFeeList[curLevel].minerFee,
                                    minerFeeList: minerFeeList,
                                    curLevel: curLevel,
                                    minLevel: curLevel,
                                    inputDisabled: tx ? true : false
                                };

                            case 7:
                            case "end":
                                return _context.stop();
                        }
                    }
                }, _callee, this);
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
        // 提币金额变化

    }, {
        key: "amountChange",
        value: function amountChange(e) {
            this.state.amount = e.value;
            this.paint();
        }
        // 选择矿工费

    }, {
        key: "chooseMinerFee",
        value: function chooseMinerFee() {
            var _this2 = this;

            root_1.popNew('app-components-allModalBox-chooseModalBox', {
                currencyName: this.props.currencyName,
                minerFeeList: this.state.minerFeeList,
                curLevel: this.state.curLevel,
                minLevel: this.state.minLevel
            }, function (index) {
                _this2.state.curLevel = _this2.state.minerFeeList[index].level;
                _this2.state.minerFee = _this2.state.minerFeeList[index].minerFee;
                _this2.paint();
            });
        }
        // 转账

    }, {
        key: "nextClick",
        value: function nextClick() {
            return __awaiter(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
                var minerFeeLevel, currencyName, fromAddr, pay, passwd, t, oldTx, tx, ret;
                return regeneratorRuntime.wrap(function _callee2$(_context2) {
                    while (1) {
                        switch (_context2.prev = _context2.next) {
                            case 0:
                                if (this.state.amount) {
                                    _context2.next = 3;
                                    break;
                                }

                                tools_1.popNewMessage(this.language.tips[0]);
                                return _context2.abrupt("return");

                            case 3:
                                if (!(this.state.balance < Number(this.state.amount) + this.state.minerFee)) {
                                    _context2.next = 6;
                                    break;
                                }

                                tools_1.popNewMessage(this.language.tips[1]);
                                return _context2.abrupt("return");

                            case 6:
                                minerFeeLevel = this.state.curLevel;
                                currencyName = this.props.currencyName;
                                fromAddr = this.state.fromAddr;
                                pay = Number(this.state.amount);
                                _context2.next = 12;
                                return tools_1.popPswBox();

                            case 12:
                                passwd = _context2.sent;

                                if (passwd) {
                                    _context2.next = 15;
                                    break;
                                }

                                return _context2.abrupt("return");

                            case 15:
                                t = new Date();
                                oldTx = this.props.tx;
                                tx = {
                                    hash: '',
                                    txType: interface_1.TxType.Recharge,
                                    fromAddr: fromAddr,
                                    toAddr: '',
                                    pay: pay,
                                    time: t.getTime(),
                                    status: interface_1.TxStatus.Pending,
                                    confirmedBlockNumber: 0,
                                    needConfirmedBlockNumber: 0,
                                    info: '',
                                    currencyName: currencyName,
                                    fee: this.state.minerFee,
                                    nonce: oldTx && oldTx.nonce,
                                    minerFeeLevel: minerFeeLevel,
                                    addr: fromAddr
                                };
                                ret = void 0;

                                if (!this.props.tx) {
                                    _context2.next = 26;
                                    break;
                                }

                                tx.hash = this.props.tx.hash;
                                _context2.next = 23;
                                return pullWallet_1.resendRecharge(passwd, tx);

                            case 23:
                                ret = _context2.sent;
                                _context2.next = 29;
                                break;

                            case 26:
                                _context2.next = 28;
                                return pullWallet_1.recharge(passwd, tx);

                            case 28:
                                ret = _context2.sent;

                            case 29:
                                if (ret) {
                                    this.ok && this.ok();
                                }

                            case 30:
                            case "end":
                                return _context2.stop();
                        }
                    }
                }, _callee2, this);
            }));
        }
    }]);

    return Recharge;
}(widget_1.Widget);

exports.Recharge = Recharge;
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