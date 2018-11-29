_$define("app/view/earn/mining/addMine", function (require, exports, module){
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
 * 做任务
 */
var root_1 = require("../../../../pi/ui/root");
var lang_1 = require("../../../../pi/util/lang");
var forelet_1 = require("../../../../pi/widget/forelet");
var widget_1 = require("../../../../pi/widget/widget");
var modulConfig_1 = require("../../../modulConfig");
var pull_1 = require("../../../net/pull");
var memstore_1 = require("../../../store/memstore");
var tools_1 = require("../../../utils/tools");
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
            this.language = this.config.value[lang_1.getLang()];
            this.state = {
                data: [{
                    isComplete: false,
                    itemImg: '../../res/image/addMine_create.png',
                    itemName: '',
                    itemShort: '',
                    itemDetail: '',
                    itemKT: '',
                    itemJump: 'walletCreate',
                    detailShow: false,
                    modulIsShow: true
                }, {
                    isComplete: false,
                    itemImg: '../../res/image/addMine_verify.png',
                    itemName: '',
                    itemShort: '',
                    itemDetail: '',
                    itemKT: '',
                    itemJump: 'bindPhone',
                    detailShow: false,
                    modulIsShow: true
                }, {
                    isComplete: false,
                    itemImg: '../../res/image/addMine_store.png',
                    itemName: '',
                    itemShort: '',
                    itemDetail: '',
                    itemKT: '',
                    itemJump: 'storeCoin',
                    detailShow: false,
                    modulIsShow: true
                }, {
                    isComplete: false,
                    itemImg: '../../res/image/addMine_share.png',
                    itemName: '',
                    itemShort: '',
                    itemDetail: '',
                    itemKT: '',
                    itemJump: 'shareFriend',
                    detailShow: false,
                    modulIsShow: true
                }, {
                    isComplete: false,
                    itemImg: '../../res/image/addMine_buy.png',
                    itemName: '',
                    itemShort: '',
                    itemDetail: '',
                    itemKT: '',
                    itemJump: 'buyFinancial',
                    detailShow: false,
                    modulIsShow: modulConfig_1.getModulConfig('FINANCIAL_SERVICES')
                }, {
                    isComplete: false,
                    itemImg: '../../res/image/addMine_chat.png',
                    itemName: '',
                    itemShort: '',
                    itemDetail: '',
                    itemKT: '',
                    itemJump: 'toChat',
                    detailShow: false,
                    modulIsShow: modulConfig_1.getModulConfig('APP_CHAT')
                }]
            };
            this.initData();
            pull_1.getMineDetail();
        }
    }, {
        key: "backPrePage",
        value: function backPrePage() {
            this.ok && this.ok();
        }
        /**
         * 挖矿项目跳转
         * @param ind 挖矿项目参数
         */

    }, {
        key: "goDetail",
        value: function goDetail(ind) {
            return __awaiter(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
                var itemJump, inviteCodeInfo;
                return regeneratorRuntime.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                if (this.state.data[ind].isComplete) {
                                    _context.next = 20;
                                    break;
                                }

                                itemJump = this.state.data[ind].itemJump;

                                pull_1.getMineItemJump(itemJump);
                                _context.t0 = itemJump;
                                _context.next = _context.t0 === 'walletCreate' ? 6 : _context.t0 === 'shareFriend' ? 8 : _context.t0 === 'bindPhone' ? 15 : _context.t0 === 'buyFinancial' ? 17 : 19;
                                break;

                            case 6:
                                // 创建钱包
                                root_1.popNew('app-view-wallet-create-home');
                                return _context.abrupt("break", 20);

                            case 8:
                                _context.next = 10;
                                return pull_1.getInviteCode();

                            case 10:
                                inviteCodeInfo = _context.sent;

                                if (!(inviteCodeInfo.result !== 1)) {
                                    _context.next = 13;
                                    break;
                                }

                                return _context.abrupt("return");

                            case 13:
                                root_1.popNew('app-view-earn-redEnvelope-sendRedEnv', {
                                    rid: inviteCodeInfo.cid,
                                    rtype: '99',
                                    message: this.language.defaultMess
                                });
                                return _context.abrupt("break", 20);

                            case 15:
                                // 绑定手机
                                root_1.popNew('app-view-mine-setting-phone');
                                return _context.abrupt("break", 20);

                            case 17:
                                // 购买理财
                                root_1.popNew('app-view-wallet-financialManagement-home');
                                return _context.abrupt("break", 20);

                            case 19:
                                tools_1.popNewMessage(this.language.tips);

                            case 20:
                            case "end":
                                return _context.stop();
                        }
                    }
                }, _callee, this);
            }));
        }
        /**
         * 展示或隐藏详细描述
         */

    }, {
        key: "show",
        value: function show(ind) {
            this.state.data[ind].detailShow = !this.state.data[ind].detailShow;
            this.paint();
        }
        /**
         * 获取更新数据
         */

    }, {
        key: "initData",
        value: function initData() {
            return __awaiter(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
                var detail, i;
                return regeneratorRuntime.wrap(function _callee2$(_context2) {
                    while (1) {
                        switch (_context2.prev = _context2.next) {
                            case 0:
                                detail = memstore_1.getStore('activity/mining/addMine');
                                // tslint:disable-next-line:max-line-length
                                // const detail = [{isComplete:true},{isComplete:false},{isComplete:false},{isComplete:false},{isComplete:false},{isComplete:false}];

                                if (detail) {
                                    for (i in detail) {
                                        this.state.data[i].isComplete = detail[i].isComplete;
                                        this.state.data[i].itemKT = detail[i].itemNum;
                                    }
                                }
                                this.paint();

                            case 3:
                            case "end":
                                return _context2.stop();
                        }
                    }
                }, _callee2, this);
            }));
        }
    }]);

    return Dividend;
}(widget_1.Widget);

exports.Dividend = Dividend;
memstore_1.register('activity/mining/addMine', function () {
    var w = exports.forelet.getWidget(exports.WIDGET_NAME);
    if (w) {
        w.initData();
    }
});
})