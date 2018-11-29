_$define("app/view/mine/setting/phone", function (require, exports, module){
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
 * 云端绑定手机
 */
// =================================================导入
var root_1 = require("../../../../pi/ui/root");
var lang_1 = require("../../../../pi/util/lang");
var forelet_1 = require("../../../../pi/widget/forelet");
var widget_1 = require("../../../../pi/widget/widget");
var pull_1 = require("../../../net/pull");
var memstore_1 = require("../../../store/memstore");
exports.forelet = new forelet_1.Forelet();
exports.WIDGET_NAME = module.id.replace(/\//g, '-');

var BindPhone = function (_widget_1$Widget) {
    _inherits(BindPhone, _widget_1$Widget);

    function BindPhone() {
        _classCallCheck(this, BindPhone);

        return _possibleConstructorReturn(this, (BindPhone.__proto__ || Object.getPrototypeOf(BindPhone)).call(this));
    }

    _createClass(BindPhone, [{
        key: "create",
        value: function create() {
            _get(BindPhone.prototype.__proto__ || Object.getPrototypeOf(BindPhone.prototype), "create", this).call(this);
            this.language = this.config.value[lang_1.getLang()];
            this.state = {
                phone: '',
                code: [],
                isSuccess: true
            };
        }
    }, {
        key: "backPrePage",
        value: function backPrePage() {
            this.ok && this.ok();
        }
        /**
         * 输入完成后确认
         */

    }, {
        key: "doSure",
        value: function doSure() {
            return __awaiter(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
                var data, userinfo;
                return regeneratorRuntime.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                if (this.state.phone) {
                                    _context.next = 5;
                                    break;
                                }

                                root_1.popNew('app-components1-message-message', { content: this.language.tips });
                                this.state.code = [];
                                this.setCode();
                                return _context.abrupt("return");

                            case 5:
                                _context.next = 7;
                                return pull_1.regPhone(this.state.phone, this.state.code.join(''));

                            case 7:
                                data = _context.sent;

                                if (data && data.result === 1) {
                                    userinfo = memstore_1.getStore('user/info');

                                    userinfo.phoneNumber = this.state.phone;
                                    memstore_1.setStore('user/info', userinfo);
                                    pull_1.getMineDetail();
                                    this.ok();
                                } else {
                                    this.state.code = [];
                                    this.setCode();
                                }
                                this.paint();

                            case 10:
                            case "end":
                                return _context.stop();
                        }
                    }
                }, _callee, this);
            }));
        }
        /**
         * 手机号改变
         */

    }, {
        key: "phoneChange",
        value: function phoneChange(e) {
            this.state.phone = e.value;
        }
        /**
         * 手动为验证码输入框赋值
         */

    }, {
        key: "setCode",
        value: function setCode() {
            for (var i in [1, 2, 3, 4]) {
                // tslint:disable-next-line:prefer-template
                document.getElementById('codeInput' + i).value = this.state.code[i];
            }
        }
        /**
         * 验证码改变
         */

    }, {
        key: "codeChange",
        value: function codeChange(e) {
            var _this2 = this;

            var v = Number(e.key) ? e.key : e.currentTarget.value.slice(-1);
            // const v = e.currentTarget.value.slice(-1);
            if (e.key === 'Backspace') {
                this.state.code.pop();
                var ind = this.state.code.length;
                if (ind >= 0) {
                    // tslint:disable-next-line:prefer-template
                    document.getElementById('codeInput' + ind).focus();
                }
                this.setCode();
            } else if (this.integerJudge(v)) {
                this.state.code.push(v);
                var _ind = this.state.code.length;
                // tslint:disable-next-line:prefer-template
                document.getElementById('codeInput' + (_ind - 1)).blur();
                if (_ind < 4) {
                    // tslint:disable-next-line:prefer-template
                    document.getElementById('codeInput' + _ind).focus();
                }
            }
            console.log(v, this.state.code.length);
            this.paint();
            setTimeout(function () {
                if (_this2.state.code.length === 4) {
                    _this2.doSure();
                }
            }, 100);
        }
        /**
         * 验证码输入框聚焦
         */

    }, {
        key: "codeFocus",
        value: function codeFocus() {
            var ind = this.state.code.length;
            // tslint:disable-next-line:prefer-template
            document.getElementById('codeInput' + ind).focus();
            this.paint();
        }
        /**
         * 判断是否是整数
         */

    }, {
        key: "integerJudge",
        value: function integerJudge(num) {
            var reg = /^[0-9]$/;
            return reg.test(num);
        }
    }]);

    return BindPhone;
}(widget_1.Widget);

exports.BindPhone = BindPhone;
})