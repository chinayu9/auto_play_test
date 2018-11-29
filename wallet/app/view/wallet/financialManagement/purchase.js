_$define("app/view/wallet/financialManagement/purchase", function (require, exports, module){
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
 * 确认购买
 */
// ===============================================导入
var lang_1 = require("../../../../pi/util/lang");
var widget_1 = require("../../../../pi/widget/widget");
var pullWallet_1 = require("../../../net/pullWallet");
var interface_1 = require("../../../store/interface");
var memstore_1 = require("../../../store/memstore");
var constants_1 = require("../../../utils/constants");
var tools_1 = require("../../../utils/tools");
var unitTools_1 = require("../../../utils/unitTools");
var walletTools_1 = require("../../../utils/walletTools");
var productDetail_1 = require("./productDetail");

var ProductDetail = function (_widget_1$Widget) {
    _inherits(ProductDetail, _widget_1$Widget);

    function ProductDetail() {
        _classCallCheck(this, ProductDetail);

        return _possibleConstructorReturn(this, (ProductDetail.__proto__ || Object.getPrototypeOf(ProductDetail)).call(this));
    }

    _createClass(ProductDetail, [{
        key: "setProps",
        value: function setProps(props, oldProps) {
            _get(ProductDetail.prototype.__proto__ || Object.getPrototypeOf(ProductDetail.prototype), "setProps", this).call(this, props, oldProps);
            console.log(props);
            this.init();
        }
    }, {
        key: "init",
        value: function init() {
            this.language = this.config.value[lang_1.getLang()];
            var spend = tools_1.formatBalance(this.props.product.unitPrice * this.props.amount);
            var cloudBalance = memstore_1.getCloudBalances().get(interface_1.CloudCurrencyType.ETH);
            var localBalance = tools_1.getCurrentAddrInfo('ETH').balance;
            this.state = {
                spend: spend,
                cloudBalance: cloudBalance,
                localBalance: localBalance
            };
        }
    }, {
        key: "close",
        value: function close() {
            this.ok && this.ok();
        }
    }, {
        key: "purchaseClicked",
        value: function purchaseClicked() {
            return __awaiter(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
                var psw, success, w, fromAddr, pay, tx, h, _w;

                return regeneratorRuntime.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                _context.next = 2;
                                return tools_1.popPswBox();

                            case 2:
                                psw = _context.sent;

                                if (psw) {
                                    _context.next = 5;
                                    break;
                                }

                                return _context.abrupt("return");

                            case 5:
                                if (!(this.state.cloudBalance >= this.state.spend)) {
                                    _context.next = 12;
                                    break;
                                }

                                _context.next = 8;
                                return walletTools_1.purchaseProduct(psw, this.props.product.id, this.props.amount);

                            case 8:
                                success = _context.sent;

                                if (success) {
                                    w = productDetail_1.forelet.getWidget(productDetail_1.WIDGET_NAME);

                                    w.ok && w.ok();
                                }
                                _context.next = 23;
                                break;

                            case 12:
                                if (!(this.state.cloudBalance + this.state.localBalance >= this.state.spend)) {
                                    _context.next = 22;
                                    break;
                                }

                                fromAddr = tools_1.getCurrentAddrByCurrencyName('ETH');
                                pay = this.state.spend - this.state.cloudBalance;
                                tx = {
                                    hash: '',
                                    txType: interface_1.TxType.Recharge,
                                    fromAddr: fromAddr,
                                    toAddr: '',
                                    pay: pay,
                                    time: new Date().getTime(),
                                    status: interface_1.TxStatus.Pending,
                                    confirmedBlockNumber: 0,
                                    needConfirmedBlockNumber: 0,
                                    info: '',
                                    currencyName: 'ETH',
                                    fee: unitTools_1.wei2Eth(constants_1.defaultGasLimit * tools_1.fetchGasPrice(interface_1.MinerFeeLevel.Standard)),
                                    nonce: 0,
                                    minerFeeLevel: interface_1.MinerFeeLevel.Standard,
                                    addr: fromAddr
                                };
                                _context.next = 18;
                                return pullWallet_1.recharge(psw, tx);

                            case 18:
                                h = _context.sent;

                                if (h) {
                                    _w = productDetail_1.forelet.getWidget(productDetail_1.WIDGET_NAME);

                                    _w.ok && _w.ok();
                                }
                                _context.next = 23;
                                break;

                            case 22:
                                tools_1.popNewMessage(this.language.tips);

                            case 23:
                                this.ok && this.ok();

                            case 24:
                            case "end":
                                return _context.stop();
                        }
                    }
                }, _callee, this);
            }));
        }
    }]);

    return ProductDetail;
}(widget_1.Widget);

exports.ProductDetail = ProductDetail;
})