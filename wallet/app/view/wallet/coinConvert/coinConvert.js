_$define("app/view/wallet/coinConvert/coinConvert", function (require, exports, module){
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
var lang_1 = require("../../../../pi/util/lang");
var forelet_1 = require("../../../../pi/widget/forelet");
var widget_1 = require("../../../../pi/widget/widget");
var config_1 = require("../../../config");
var pullWallet_1 = require("../../../net/pullWallet");
var interface_1 = require("../../../store/interface");
var memstore_1 = require("../../../store/memstore");
// tslint:disable-next-line:max-line-length
var tools_1 = require("../../../utils/tools");
var unitTools_1 = require("../../../utils/unitTools");
exports.forelet = new forelet_1.Forelet();
exports.WIDGET_NAME = module.id.replace(/\//g, '-');

var CoinConvert = function (_widget_1$Widget) {
    _inherits(CoinConvert, _widget_1$Widget);

    function CoinConvert() {
        _classCallCheck(this, CoinConvert);

        return _possibleConstructorReturn(this, (CoinConvert.__proto__ || Object.getPrototypeOf(CoinConvert)).apply(this, arguments));
    }

    _createClass(CoinConvert, [{
        key: "backPrePage",
        value: function backPrePage() {
            this.ok && this.ok();
        }
        /**
         * 查看手续费介绍
         */

    }, {
        key: "rateDetail",
        value: function rateDetail() {
            // tslint:disable-next-line:prefer-template
            var tips = this.language.tips[5] + this.state.inMinerFee + ' ' + this.state.inCurrency;
            // tslint:disable-next-line:max-line-length
            root_1.popNew('app-components-allModalBox-modalBox1', { title: this.language.title, content: this.language.content, tips: tips });
        }
        /**
         * 查看兑换历史
         */

    }, {
        key: "goHistory",
        value: function goHistory() {
            root_1.popNew('app-view-wallet-coinConvert-convertHistory', { currencyName: this.state.outCurrency });
        }
    }, {
        key: "setProps",
        value: function setProps(props, oldProps) {
            _get(CoinConvert.prototype.__proto__ || Object.getPrototypeOf(CoinConvert.prototype), "setProps", this).call(this, props, oldProps);
            this.language = this.config.value[lang_1.getLang()];
            var data = tools_1.currencyExchangeAvailable();
            var dataList = [];
            data.forEach(function (element) {
                dataList.push(element.symbol);
            });
            var canCurrencyExchange = dataList.indexOf(props.currencyName) >= 0;
            var outCurrency = canCurrencyExchange ? props.currencyName : 'ETH';
            var inCurrency = outCurrency === 'BTC' || config_1.ERC20Tokens[outCurrency] ? 'ETH' : 'BTC';
            // ZRX   BAT
            this.state = {
                outCurrency: outCurrency,
                inCurrency: inCurrency,
                pair: '',
                maxLimit: 0,
                minimum: 0,
                rate: 0,
                outMinerFee: 0,
                inMinerFee: 0,
                timer: 0,
                outBalance: 0,
                outAmount: 0,
                receiveAmount: 0,
                curOutAddr: '',
                curInAddr: ''
            };
            this.init();
            this.updateMinerFee();
        }
        // 更新矿工费

    }, {
        key: "updateMinerFee",
        value: function updateMinerFee() {
            return __awaiter(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
                var cn, obj, gasLimit, minerFee;
                return regeneratorRuntime.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                cn = this.props.currencyName === 'ETH' || config_1.ERC20Tokens[this.props.currencyName] ? 'ETH' : 'BTC';
                                _context.next = 3;
                                return estimateMinerFee(this.props.currencyName);

                            case 3:
                                obj = _context.sent;
                                gasLimit = obj.gasLimit;
                                // tslint:disable-next-line:max-line-length

                                minerFee = cn === 'ETH' ? unitTools_1.wei2Eth(gasLimit * tools_1.fetchGasPrice(interface_1.MinerFeeLevel.Standard)) : unitTools_1.sat2Btc(tools_1.fetchBtcMinerFee(interface_1.MinerFeeLevel.Standard));

                                this.state.outMinerFee = minerFee;
                                this.paint();

                            case 8:
                            case "end":
                                return _context.stop();
                        }
                    }
                }, _callee, this);
            }));
        }
    }, {
        key: "destroy",
        value: function destroy() {
            clearTimeout(this.state.timer);
            return _get(CoinConvert.prototype.__proto__ || Object.getPrototypeOf(CoinConvert.prototype), "destroy", this).call(this);
        }
    }, {
        key: "init",
        value: function init() {
            this.state.outAmount = 0;
            this.state.receiveAmount = 0;
            this.setPair();
            // 获取出币币种的余额和当前使用地址
            this.state.curOutAddr = tools_1.getCurrentAddrByCurrencyName(this.state.outCurrency);
            this.state.outBalance = tools_1.getCurrentAddrInfo(this.state.outCurrency).balance;
            // 获取入币币种的当前使用地址
            this.state.curInAddr = tools_1.getCurrentAddrByCurrencyName(this.state.inCurrency);
            this.marketInfoUpdated();
        }
        // 设置币币兑换的pair  如btc_eth

    }, {
        key: "setPair",
        value: function setPair() {
            this.state.pair = this.state.outCurrency.toLowerCase() + "_" + this.state.inCurrency.toLowerCase();
            // this.state.pair = `${this.state.outCurrency}_${this.state.inCurrency}`;
        }
        // 重置汇率相关显示

    }, {
        key: "resetMarketInfo",
        value: function resetMarketInfo(marketInfo) {
            this.state.maxLimit = marketInfo.maxLimit;
            this.state.minimum = marketInfo.minimum;
            this.state.rate = marketInfo.rate;
            this.state.inMinerFee = marketInfo.minerFee;
            this.paint();
        }
        // 定时获取兑率等信息 30s更新一次

    }, {
        key: "marketInfoUpdated",
        value: function marketInfoUpdated() {
            var _this2 = this;

            clearTimeout(this.state.timer);
            pullWallet_1.getMarketInfo(this.state.pair);
            this.state.timer = setTimeout(function () {
                _this2.marketInfoUpdated();
            }, 30 * 1000);
        }
        // 出币数量变化

    }, {
        key: "outAmountChange",
        value: function outAmountChange(e) {
            var outAmount = Number(e.value);
            this.state.outAmount = outAmount;
            this.state.receiveAmount = (outAmount * this.state.rate).toFixed(8);
            this.paint();
        }
        // 入币数量变化

    }, {
        key: "inAmountChange",
        value: function inAmountChange(e) {
            var receiveAmount = Number(e.value);
            this.state.receiveAmount = receiveAmount;
            this.state.outAmount = (receiveAmount / this.state.rate).toFixed(8);
            this.paint();
        }
        // // 选择出币币种 如果出币币种和入币币种一样时,入币币种顺延一种
        // public outCurrencySelectClick() {
        //     const data = currencyExchangeAvailable();
        //     const dataList = [];
        //     data.forEach(element => {
        //         dataList.push(element.symbol);
        //     });
        //     popNew('app-components-chooseCurrency-chooseCurrency',{ list:dataList,selected:dataList.indexOf(this.state.outCurrency) },
        //     (r) => {
        //         const currencyName = dataList[r];
        //         if (this.state.outCurrency === currencyName) return;
        //         if (this.state.inCurrency === currencyName) {
        //             const index = dataList.indexOf(currencyName);
        //             this.state.inCurrency = dataList[(index + 1) % dataList.length];
        //         }
        //         this.state.outCurrency = dataList[r];
        //         this.state.outAmount = 0;
        //         this.state.receiveAmount = 0;
        //         this.init();
        //         this.paint();
        //     });
        // }
        // 选择入币币种 如果入币币种和出币币种一样时,出币币种顺延一种

    }, {
        key: "inCurrencySelectClick",
        value: function inCurrencySelectClick() {
            var _this3 = this;

            var data = tools_1.currencyExchangeAvailable();
            var dataList = [];
            data.forEach(function (element) {
                if (element.symbol !== _this3.state.outCurrency) {
                    // 去掉出币币种
                    dataList.push(element.symbol);
                }
            });
            root_1.popNew('app-components-chooseCurrency-chooseCurrency', { list: dataList, selected: dataList.indexOf(this.state.inCurrency) }, function (r) {
                var currencyName = dataList[r];
                if (_this3.state.inCurrency === currencyName) return;
                if (_this3.state.outCurrency === currencyName) {
                    var index = dataList.indexOf(currencyName);
                    _this3.state.outCurrency = dataList[(index + 1) % dataList.length];
                }
                _this3.state.inCurrency = dataList[r];
                _this3.state.outAmount = 0;
                _this3.state.receiveAmount = 0;
                _this3.init();
                _this3.paint();
            });
        }
        // 出币币种和入币币种切换

    }, {
        key: "switchInOutClick",
        value: function switchInOutClick() {
            var outCurrency = this.state.outCurrency;
            this.state.outCurrency = this.state.inCurrency;
            this.state.inCurrency = outCurrency;
            this.state.outAmount = 0;
            this.state.receiveAmount = 0;
            this.init();
            this.paint();
        }
        /**
         * 点击兑换
         */

    }, {
        key: "sureClick",
        value: function sureClick() {
            return __awaiter(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
                var _this4 = this;

                var outAmount, outCurrency, content, passwd, close, withdrawalAddress, returnAddress, pair;
                return regeneratorRuntime.wrap(function _callee3$(_context3) {
                    while (1) {
                        switch (_context3.prev = _context3.next) {
                            case 0:
                                outAmount = this.state.outAmount;
                                outCurrency = this.state.outCurrency;

                                if (!(outAmount <= 0)) {
                                    _context3.next = 5;
                                    break;
                                }

                                tools_1.popNewMessage(this.language.messages[0]);
                                return _context3.abrupt("return");

                            case 5:
                                if (!(outAmount >= this.state.outBalance)) {
                                    _context3.next = 8;
                                    break;
                                }

                                tools_1.popNewMessage(this.language.messages[1]);
                                return _context3.abrupt("return");

                            case 8:
                                if (!(outAmount > this.state.maxLimit || outAmount < this.state.minimum)) {
                                    _context3.next = 11;
                                    break;
                                }

                                tools_1.popNewMessage(this.language.messages[2]);
                                return _context3.abrupt("return");

                            case 11:
                                // tslint:disable-next-line:max-line-length
                                content = [this.language.tips[6] + outAmount + outCurrency, this.language.tips[7] + this.state.receiveAmount + this.state.inCurrency];
                                _context3.next = 14;
                                return tools_1.popPswBox(content);

                            case 14:
                                passwd = _context3.sent;

                                if (passwd) {
                                    _context3.next = 17;
                                    break;
                                }

                                return _context3.abrupt("return");

                            case 17:
                                // await openBasePage('app-view-currencyExchange-exchangeConfirm',{
                                //     outCurrency,
                                //     outAmount,
                                //     inCurrency:this.state.inCurrency,
                                //     inAmount:outAmount * this.state.rate,
                                //     fee
                                // });
                                close = root_1.popNew('app-components1-loading-loading', { text: this.language.loading });
                                withdrawalAddress = this.state.curInAddr; // 入账币种的地址

                                returnAddress = this.state.curOutAddr; // 失败后的退款地址

                                pair = this.state.pair; // 交易对

                                pullWallet_1.beginShift(withdrawalAddress, returnAddress, pair, function (returnData) {
                                    return __awaiter(_this4, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
                                        var depositAddress, t, record, ret, hash;
                                        return regeneratorRuntime.wrap(function _callee2$(_context2) {
                                            while (1) {
                                                switch (_context2.prev = _context2.next) {
                                                    case 0:
                                                        if (!returnData.error) {
                                                            _context2.next = 6;
                                                            break;
                                                        }

                                                        root_1.popNew('app-components1-message-message', { content: this.language.messages[3] });
                                                        close.callback(close.widget);
                                                        this.init();
                                                        this.paint();
                                                        return _context2.abrupt("return");

                                                    case 6:
                                                        depositAddress = returnData.deposit;
                                                        t = new Date();
                                                        record = {
                                                            hash: '',
                                                            txType: interface_1.TxType.Exchange,
                                                            fromAddr: this.state.curOutAddr,
                                                            toAddr: depositAddress,
                                                            pay: outAmount,
                                                            time: t.getTime(),
                                                            info: '',
                                                            currencyName: outCurrency,
                                                            fee: this.state.outMinerFee,
                                                            nonce: undefined,
                                                            addr: this.state.curOutAddr,
                                                            status: interface_1.TxStatus.Pending,
                                                            confirmedBlockNumber: 0,
                                                            needConfirmedBlockNumber: 0,
                                                            minerFeeLevel: interface_1.MinerFeeLevel.Standard
                                                        };
                                                        _context2.next = 11;
                                                        return pullWallet_1.transfer(passwd, record);

                                                    case 11:
                                                        ret = _context2.sent;

                                                        close.callback(close.widget);

                                                        if (ret) {
                                                            _context2.next = 15;
                                                            break;
                                                        }

                                                        return _context2.abrupt("return");

                                                    case 15:
                                                        hash = ret.hash;

                                                        this.setTemRecord(hash, this.state.curOutAddr, outAmount, outCurrency, this.state.inCurrency, this.state.rate);
                                                        // popNew('app-view-wallet-coinConvert-convertHistory', { currencyName:outCurrency });
                                                        this.init();
                                                        this.paint();

                                                    case 19:
                                                    case "end":
                                                        return _context2.stop();
                                                }
                                            }
                                        }, _callee2, this);
                                    }));
                                }, function (err) {
                                    console.log(err);
                                    tools_1.popNewMessage(_this4.language.messages[3]);
                                    close.callback(close.widget);
                                    _this4.init();
                                    _this4.paint();
                                    return;
                                });

                            case 22:
                            case "end":
                                return _context3.stop();
                        }
                    }
                }, _callee3, this);
            }));
        }
        // 临时记录
        // tslint:disable-next-line:max-line-length

    }, {
        key: "setTemRecord",
        value: function setTemRecord(hash, fromAddr, pay, outCurrency, inCurrency, rate) {
            var t = new Date();
            // 币币兑换交易记录
            var tx = {
                hasConfirmations: 'false',
                inputAddress: fromAddr,
                inputAmount: pay,
                inputCurrency: outCurrency,
                inputTXID: hash,
                outputAddress: '',
                outputAmount: '',
                outputCurrency: inCurrency,
                outputTXID: '',
                shiftRate: rate,
                status: 'pending',
                timestamp: t.getTime() / 1000
            };
            console.log('tx', tx);
            var addrLowerCase = this.state.curOutAddr.toLowerCase();
            var shapeShiftTxsMap = memstore_1.getStore('third/shapeShiftTxsMap');
            var shapeShiftTxs = shapeShiftTxsMap.get(addrLowerCase) || { addr: addrLowerCase, list: [] };
            shapeShiftTxs.list.push(tx);
            shapeShiftTxsMap.set(addrLowerCase, shapeShiftTxs);
            memstore_1.setStore('third/shapeShiftTxsMap', shapeShiftTxsMap);
        }
    }]);

    return CoinConvert;
}(widget_1.Widget);

exports.CoinConvert = CoinConvert;
// =====================================本地
memstore_1.register('third/shapeShiftMarketInfo', function (marketInfo) {
    var w = exports.forelet.getWidget(exports.WIDGET_NAME);
    if (w) {
        w.resetMarketInfo(marketInfo);
    }
});
})