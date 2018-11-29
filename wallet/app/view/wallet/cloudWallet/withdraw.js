_$define("app/view/wallet/cloudWallet/withdraw", function (require, exports, module){
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
 * Withdraw
 */
var root_1 = require("../../../../pi/ui/root");
var lang_1 = require("../../../../pi/util/lang");
var widget_1 = require("../../../../pi/widget/widget");
var config_1 = require("../../../config");
var pullWallet_1 = require("../../../net/pullWallet");
var interface_1 = require("../../../store/interface");
var memstore_1 = require("../../../store/memstore");
var constants_1 = require("../../../utils/constants");
var tools_1 = require("../../../utils/tools");

var Withdraw = function (_widget_1$Widget) {
    _inherits(Withdraw, _widget_1$Widget);

    function Withdraw() {
        _classCallCheck(this, Withdraw);

        return _possibleConstructorReturn(this, (Withdraw.__proto__ || Object.getPrototypeOf(Withdraw)).apply(this, arguments));
    }

    _createClass(Withdraw, [{
        key: "setProps",
        value: function setProps(props, oldProps) {
            _get(Withdraw.prototype.__proto__ || Object.getPrototypeOf(Withdraw.prototype), "setProps", this).call(this, props, oldProps);
            this.init();
        }
    }, {
        key: "init",
        value: function init() {
            this.language = this.config.value[lang_1.getLang()];
            var currencyName = this.props.currencyName;
            var minerFee = config_1.withdrawMinerFee[currencyName];
            var balance = memstore_1.getCloudBalances().get(interface_1.CloudCurrencyType[currencyName]);
            this.state = {
                balance: balance,
                amount: 0,
                minerFee: minerFee,
                withdrawAddr: tools_1.getCurrentAddrInfo(currencyName).addr,
                withdrawAddrInfo: this.parseAddrsInfo()
            };
        }
    }, {
        key: "backPrePage",
        value: function backPrePage() {
            this.ok && this.ok();
        }
    }, {
        key: "minerFeeDescClick",
        value: function minerFeeDescClick() {
            root_1.popNew('app-components-allModalBox-modalBox1', this.language.modalBox);
        }
        // 提币金额变化

    }, {
        key: "amountChange",
        value: function amountChange(e) {
            this.state.amount = e.value;
            this.paint();
        }
    }, {
        key: "parseAddrsInfo",
        value: function parseAddrsInfo() {
            var addrsInfo = tools_1.getAddrsInfoByCurrencyName(this.props.currencyName);
            var curAddr = tools_1.getCurrentAddrInfo(this.props.currencyName).addr;
            addrsInfo.forEach(function (item) {
                item.addrShow = tools_1.parseAccount(item.addr);
                item.isChoosed = item.addr === curAddr;
            });
            return addrsInfo;
        }
    }, {
        key: "chooseWithdrawAddr",
        value: function chooseWithdrawAddr() {
            var _this2 = this;

            root_1.popNew('app-view-wallet-components-choosetWithdrawAddr', { addrsInfo: this.state.withdrawAddrInfo }, function (index) {
                var addrsInfo = _this2.state.withdrawAddrInfo;
                for (var i = 0; i < addrsInfo.length; i++) {
                    if (i === index) {
                        addrsInfo[i].isChoosed = true;
                        _this2.state.withdrawAddr = addrsInfo[i].addr;
                    } else {
                        addrsInfo[i].isChoosed = false;
                    }
                }
                _this2.paint();
            });
        }
    }, {
        key: "withdrawClick",
        value: function withdrawClick() {
            return __awaiter(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
                var currencyName, limit, realUser, passwd, success;
                return regeneratorRuntime.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                currencyName = this.props.currencyName;
                                limit = constants_1.withdrawLimit[currencyName];

                                if (!(Number(this.state.amount) < limit)) {
                                    _context.next = 5;
                                    break;
                                }

                                tools_1.popNewMessage(this.language.tips[0] + limit + currencyName);
                                return _context.abrupt("return");

                            case 5:
                                if (!(Number(this.state.amount) + this.state.minerFee > this.state.balance)) {
                                    _context.next = 8;
                                    break;
                                }

                                tools_1.popNewMessage(this.language.tips[1]);
                                return _context.abrupt("return");

                            case 8:
                                realUser = memstore_1.getStore('user/info/isRealUser');

                                if (realUser) {
                                    _context.next = 12;
                                    break;
                                }

                                tools_1.popNewMessage(this.language.tips[2]);
                                return _context.abrupt("return");

                            case 12:
                                _context.next = 14;
                                return tools_1.popPswBox();

                            case 14:
                                passwd = _context.sent;

                                if (passwd) {
                                    _context.next = 17;
                                    break;
                                }

                                return _context.abrupt("return");

                            case 17:
                                _context.next = 19;
                                return pullWallet_1.withdraw(passwd, this.state.withdrawAddr, this.props.currencyName, this.state.amount);

                            case 19:
                                success = _context.sent;

                                if (success) {
                                    this.ok && this.ok();
                                }

                            case 21:
                            case "end":
                                return _context.stop();
                        }
                    }
                }, _callee, this);
            }));
        }
    }]);

    return Withdraw;
}(widget_1.Widget);

exports.Withdraw = Withdraw;
})