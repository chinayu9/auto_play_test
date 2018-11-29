_$define("app/view/wallet/transaction/chooseAddr", function (require, exports, module){
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
 * choose addr
 */
var widget_1 = require("../../../../pi/widget/widget");
var localWallet_1 = require("../../../logic/localWallet");
var memstore_1 = require("../../../store/memstore");
var tools_1 = require("../../../utils/tools");
var lang_1 = require("../../../../pi/util/lang");

var ChooseAddr = function (_widget_1$Widget) {
    _inherits(ChooseAddr, _widget_1$Widget);

    function ChooseAddr() {
        _classCallCheck(this, ChooseAddr);

        return _possibleConstructorReturn(this, (ChooseAddr.__proto__ || Object.getPrototypeOf(ChooseAddr)).apply(this, arguments));
    }

    _createClass(ChooseAddr, [{
        key: "setProps",
        value: function setProps(props, oldProps) {
            _get(ChooseAddr.prototype.__proto__ || Object.getPrototypeOf(ChooseAddr.prototype), "setProps", this).call(this, props, oldProps);
            this.init();
        }
    }, {
        key: "init",
        value: function init() {
            this.language = this.config.value[lang_1.getLang()];
            this.state = {
                addrsInfo: this.parseAddrsInfo()
            };
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
        key: "maskClick",
        value: function maskClick() {
            this.ok && this.ok();
        }
    }, {
        key: "addrItemClick",
        value: function addrItemClick(e, index) {
            var _this2 = this;

            if (!this.state.addrsInfo[index].isChoosed) {
                var wallet = memstore_1.getStore('wallet');
                var record = wallet.currencyRecords.filter(function (v) {
                    return v.currencyName === _this2.props.currencyName;
                })[0];
                if (record) {
                    record.currentAddr = this.state.addrsInfo[index].addr;
                    memstore_1.setStore('wallet/currencyRecords', wallet.currencyRecords);
                }
            }
            this.ok && this.ok();
        }
    }, {
        key: "addAddrClick",
        value: function addAddrClick() {
            return __awaiter(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
                var psw;
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
                                this.ok && this.ok();
                                localWallet_1.createNewAddr(psw, this.props.currencyName);

                            case 7:
                            case "end":
                                return _context.stop();
                        }
                    }
                }, _callee, this);
            }));
        }
    }]);

    return ChooseAddr;
}(widget_1.Widget);

exports.ChooseAddr = ChooseAddr;
})