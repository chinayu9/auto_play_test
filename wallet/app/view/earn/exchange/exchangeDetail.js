_$define("app/view/earn/exchange/exchangeDetail", function (require, exports, module){
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
var lang_1 = require("../../../../pi/util/lang");
var forelet_1 = require("../../../../pi/widget/forelet");
var widget_1 = require("../../../../pi/widget/widget");
var pull_1 = require("../../../net/pull");
var config_1 = require("../../../config");
exports.forelet = new forelet_1.Forelet();
exports.WIDGET_NAME = module.id.replace(/\//g, '-');

var ExchangeDetail = function (_widget_1$Widget) {
    _inherits(ExchangeDetail, _widget_1$Widget);

    function ExchangeDetail() {
        _classCallCheck(this, ExchangeDetail);

        return _possibleConstructorReturn(this, (ExchangeDetail.__proto__ || Object.getPrototypeOf(ExchangeDetail)).apply(this, arguments));
    }

    _createClass(ExchangeDetail, [{
        key: "setProps",
        value: function setProps(props, oldProps) {
            _get(ExchangeDetail.prototype.__proto__ || Object.getPrototypeOf(ExchangeDetail.prototype), "setProps", this).call(this, props, oldProps);
            this.language = this.config.value[lang_1.getLang()];
            this.state = {
                message: this.props.message ? this.props.message : this.language.defaultMess,
                redBagList: [
                    // { cuid:111,amount:1,timeShow:'04-30 14:32:00' },
                    // { cuid:111,amount:1,timeShow:'04-30 14:32:00' },
                    // { cuid:111,amount:1,timeShow:'04-30 14:32:00' }                    
                ],
                scroll: false,
                showPin: this.props.rtype === 1,
                userName: '',
                userHead: '../../../res/image/default_avater_big.png',
                curNum: 0,
                totalNum: 0,
                totalAmount: 0,
                greatUser: -1,
                greatAmount: 0
            };
            this.initData();
        }
    }, {
        key: "backPrePage",
        value: function backPrePage() {
            this.ok && this.ok();
        }
        /**
         * 页面滑动
         */

    }, {
        key: "pageScroll",
        value: function pageScroll() {
            if (document.getElementById('exchangeDetail').scrollTop > 0) {
                this.state.scroll = true;
            } else {
                this.state.scroll = false;
            }
            this.paint();
        }
    }, {
        key: "initData",
        value: function initData() {
            return __awaiter(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
                var value, user, redBagList, i, _user;

                return regeneratorRuntime.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                _context.next = 2;
                                return pull_1.queryDetailLog(this.props.suid, this.props.rid);

                            case 2:
                                value = _context.sent;

                                if (value) {
                                    _context.next = 5;
                                    break;
                                }

                                return _context.abrupt("return");

                            case 5:
                                this.state.redBagList = value[0];
                                this.state.message = value[1];
                                this.state.curNum = value[2];
                                this.state.totalNum = value[3];
                                this.state.totalAmount = value[4];
                                _context.next = 12;
                                return pull_1.getUserList([this.props.suid]);

                            case 12:
                                user = _context.sent;

                                if (user) {
                                    _context.next = 15;
                                    break;
                                }

                                return _context.abrupt("return");

                            case 15:
                                this.state.userName = user.nickName ? user.nickName : this.language.defaultUserName;
                                this.state.userHead = user.avatar ? "" + config_1.uploadFileUrlPrefix + user.avatar : '../../../res/image/default_avater_big.png';
                                redBagList = value[0];
                                i = 0;

                            case 19:
                                if (!(i < redBagList.length)) {
                                    _context.next = 29;
                                    break;
                                }

                                _context.next = 22;
                                return pull_1.getUserList([redBagList[i].cuid]);

                            case 22:
                                _user = _context.sent;

                                this.state.redBagList[i].userName = _user.nickName ? _user.nickName : this.language.defaultUserName;
                                // tslint:disable-next-line:max-line-length
                                this.state.redBagList[i].avatar = _user.avatar ? "" + config_1.uploadFileUrlPrefix + _user.avatar : '../../res/image/default_avater_big.png';
                                if (this.props.rtype === 1 && redBagList.length === this.state.totalNum && this.state.greatAmount < redBagList[i].amount) {
                                    this.state.greatAmount = redBagList.amount;
                                    this.state.greatUser = i;
                                }

                            case 26:
                                i++;
                                _context.next = 19;
                                break;

                            case 29:
                                this.paint();

                            case 30:
                            case "end":
                                return _context.stop();
                        }
                    }
                }, _callee, this);
            }));
        }
    }]);

    return ExchangeDetail;
}(widget_1.Widget);

exports.ExchangeDetail = ExchangeDetail;
})