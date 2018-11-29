_$define("app/view/earn/exchange/exchange", function (require, exports, module){
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
 * Exchange
 */
// ============================== 导入
var root_1 = require("../../../../pi/ui/root");
var lang_1 = require("../../../../pi/util/lang");
var forelet_1 = require("../../../../pi/widget/forelet");
var widget_1 = require("../../../../pi/widget/widget");
var modulConfig_1 = require("../../../modulConfig");
// tslint:disable-next-line:max-line-length
var pull_1 = require("../../../net/pull");
var interface_1 = require("../../../store/interface");
var memstore_1 = require("../../../store/memstore");
var toolMessages_1 = require("../../../utils/toolMessages");
var unitTools_1 = require("../../../utils/unitTools");
exports.forelet = new forelet_1.Forelet();
exports.WIDGET_NAME = module.id.replace(/\//g, '-');

var Exchange = function (_widget_1$Widget) {
    _inherits(Exchange, _widget_1$Widget);

    function Exchange() {
        _classCallCheck(this, Exchange);

        return _possibleConstructorReturn(this, (Exchange.__proto__ || Object.getPrototypeOf(Exchange)).apply(this, arguments));
    }

    _createClass(Exchange, [{
        key: "create",
        value: function create() {
            _get(Exchange.prototype.__proto__ || Object.getPrototypeOf(Exchange.prototype), "create", this).call(this);
            this.language = this.config.value[lang_1.getLang()];
            this.state = {
                cid: '',
                walletName: modulConfig_1.getModulConfig('WALLET_NAME')
            };
        }
    }, {
        key: "backPrePage",
        value: function backPrePage() {
            this.ok && this.ok();
        }
        // 输入兑换码

    }, {
        key: "inputChange",
        value: function inputChange(e) {
            this.state.cid = e.value;
            this.paint();
        }
        // 点击兑换按钮

    }, {
        key: "convertClick",
        value: function convertClick() {
            return __awaiter(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
                var _this2 = this;

                var code, close, res, r, redEnvelope;
                return regeneratorRuntime.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                this.inputBlur();
                                code = this.state.cid.trim();

                                if (!(code.length <= 0)) {
                                    _context.next = 5;
                                    break;
                                }

                                root_1.popNew('app-components1-message-message', { itype: 'error', content: this.language.errorList[0], center: true });
                                return _context.abrupt("return");

                            case 5:
                                close = root_1.popNew('app-components1-loading-loading', { text: this.language.loading });
                                _context.next = 8;
                                return this.convertRedEnvelope(code);

                            case 8:
                                res = _context.sent;

                                close.callback(close.widget);

                                if (res.value) {
                                    _context.next = 12;
                                    break;
                                }

                                return _context.abrupt("return");

                            case 12:
                                memstore_1.setStore('activity/luckyMoney/exchange', undefined);
                                pull_1.getServerCloudBalance();
                                _context.next = 16;
                                return this.queryDesc(code);

                            case 16:
                                r = _context.sent;
                                redEnvelope = {
                                    message: r.value,
                                    ctypeShow: interface_1.CloudCurrencyType[res.value[0]],
                                    amount: unitTools_1.smallUnit2LargeUnit(interface_1.CloudCurrencyType[res.value[0]], res.value[1]),
                                    rtype: code.slice(0, 2),
                                    rid: res.rid,
                                    suid: res.src_id
                                };

                                root_1.popNew('app-view-earn-exchange-openRedEnv', redEnvelope);
                                setTimeout(function () {
                                    _this2.state.cid = '';
                                    _this2.paint(true);
                                }, 100);

                            case 20:
                            case "end":
                                return _context.stop();
                        }
                    }
                }, _callee, this);
            }));
        }
        /**
         * 查看历史记录
         */

    }, {
        key: "goHistory",
        value: function goHistory() {
            root_1.popNew('app-view-earn-exchange-exchangeHistory');
        }
        /**
         * 实际兑换
         */

    }, {
        key: "convertRedEnvelope",
        value: function convertRedEnvelope(code) {
            return __awaiter(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
                var perCode, validCode, value, data;
                return regeneratorRuntime.wrap(function _callee2$(_context2) {
                    while (1) {
                        switch (_context2.prev = _context2.next) {
                            case 0:
                                perCode = code.slice(0, 2);
                                validCode = code.slice(2);
                                value = [];

                                if (!(perCode === interface_1.LuckyMoneyType.Normal || perCode === interface_1.LuckyMoneyType.Random)) {
                                    _context2.next = 9;
                                    break;
                                }

                                _context2.next = 6;
                                return pull_1.convertRedBag(validCode);

                            case 6:
                                value = _context2.sent;
                                _context2.next = 27;
                                break;

                            case 9:
                                if (!(perCode === interface_1.LuckyMoneyType.Invite)) {
                                    _context2.next = 25;
                                    break;
                                }

                                _context2.next = 12;
                                return pull_1.getData('convertRedEnvelope');

                            case 12:
                                data = _context2.sent;

                                if (!data.value) {
                                    _context2.next = 16;
                                    break;
                                }

                                toolMessages_1.showError(-99);
                                return _context2.abrupt("return");

                            case 16:
                                _context2.next = 18;
                                return pull_1.inputInviteCdKey(validCode);

                            case 18:
                                value = _context2.sent;

                                if (value) {
                                    _context2.next = 21;
                                    break;
                                }

                                return _context2.abrupt("return");

                            case 21:
                                value = [interface_1.CloudCurrencyType.ETH, unitTools_1.eth2Wei(0.015).toString()];
                                pull_1.setData({ key: 'convertRedEnvelope', value: new Date().getTime() });
                                _context2.next = 27;
                                break;

                            case 25:
                                root_1.popNew('app-components1-message-message', { content: this.language.errorList[1] });
                                return _context2.abrupt("return", null);

                            case 27:
                                return _context2.abrupt("return", value);

                            case 28:
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
        key: "queryDesc",
        value: function queryDesc(code) {
            return __awaiter(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
                var perCode, validCode, res;
                return regeneratorRuntime.wrap(function _callee3$(_context3) {
                    while (1) {
                        switch (_context3.prev = _context3.next) {
                            case 0:
                                perCode = code.slice(0, 2);
                                validCode = code.slice(2);
                                res = { result: -1, value: '' };

                                if (!(perCode === interface_1.LuckyMoneyType.Invite)) {
                                    _context3.next = 8;
                                    break;
                                }

                                res.result = 1;
                                res.value = "" + this.state.walletName + this.language.defaultMess;
                                _context3.next = 11;
                                break;

                            case 8:
                                _context3.next = 10;
                                return pull_1.queryRedBagDesc(validCode);

                            case 10:
                                res = _context3.sent;

                            case 11:
                                return _context3.abrupt("return", res);

                            case 12:
                            case "end":
                                return _context3.stop();
                        }
                    }
                }, _callee3, this);
            }));
        }
        /**
         * 输入框取消聚焦
         */

    }, {
        key: "inputBlur",
        value: function inputBlur() {
            var inputs = document.getElementsByTagName('input');
            for (var i = 0; i < inputs.length; i++) {
                inputs[i].blur();
            }
        }
    }]);

    return Exchange;
}(widget_1.Widget);

exports.Exchange = Exchange;
})