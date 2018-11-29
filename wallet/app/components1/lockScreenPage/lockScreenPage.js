_$define("app/components1/lockScreenPage/lockScreenPage", function (require, exports, module){
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
 * pasword screen
 */
var exitApp_1 = require("../../../pi/browser/exitApp");
var root_1 = require("../../../pi/ui/root");
var lang_1 = require("../../../pi/util/lang");
var forelet_1 = require("../../../pi/widget/forelet");
var widget_1 = require("../../../pi/widget/widget");
var memstore_1 = require("../../store/memstore");
var tools_1 = require("../../utils/tools");
exports.forelet = new forelet_1.Forelet();
exports.WIDGET_NAME = module.id.replace(/\//g, '-');

var LockScreenPage = function (_widget_1$Widget) {
    _inherits(LockScreenPage, _widget_1$Widget);

    function LockScreenPage() {
        _classCallCheck(this, LockScreenPage);

        return _possibleConstructorReturn(this, (LockScreenPage.__proto__ || Object.getPrototypeOf(LockScreenPage)).call(this));
    }

    _createClass(LockScreenPage, [{
        key: "setProps",
        value: function setProps(oldProps, props) {
            _get(LockScreenPage.prototype.__proto__ || Object.getPrototypeOf(LockScreenPage.prototype), "setProps", this).call(this, oldProps, props);
            this.init();
        }
    }, {
        key: "init",
        value: function init() {
            this.language = this.config.value[lang_1.getLang()];
            this.state = {
                errorTips: this.language.errorTips,
                lockScreenPsw: '',
                openLockScreen: false,
                loading: false
            };
            if (this.props.setting) {
                // true表示设置锁屏密码
                this.setLockPsw();
            } else if (this.props.openApp) {
                // true表示打开app解锁屏幕
                this.unLockScreen(0);
            }
        }
        /**
         * 关闭页面
         */

    }, {
        key: "close",
        value: function close(fg) {
            this.ok && this.ok(fg);
        }
        /**
         * 设置锁屏密码
         */

    }, {
        key: "setLockPsw",
        value: function setLockPsw() {
            var _this2 = this;

            root_1.popNew('app-components1-keyboard-keyboard', { title: this.language.keyboardTitle[0] }, function (r) {
                _this2.state.lockScreenPsw = r;
                _this2.reSetLockPsw();
            }, function () {
                _this2.close(false);
            });
        }
        /**
         * 重复锁屏密码
         */

    }, {
        key: "reSetLockPsw",
        value: function reSetLockPsw() {
            var _this3 = this;

            root_1.popNew('app-components1-keyboard-keyboard', { title: this.language.keyboardTitle[1] }, function (r) {
                if (_this3.state.lockScreenPsw !== r) {
                    root_1.popNew('app-components1-message-message', { content: _this3.language.tips[0] });
                    _this3.reSetLockPsw();
                } else {
                    var hash256 = tools_1.lockScreenHash(r);
                    var ls = memstore_1.getStore('setting/lockScreen');
                    ls.psw = hash256;
                    ls.open = true;
                    memstore_1.setStore('setting/lockScreen', ls);
                    root_1.popNew('app-components1-message-message', { content: _this3.language.tips[1] });
                }
                _this3.close(true);
            }, function () {
                _this3.close(false);
            });
        }
        /**
         * 进入APP解锁屏幕
         */

    }, {
        key: "unLockScreen",
        value: function unLockScreen(ind) {
            var _this4 = this;

            var ls = memstore_1.getStore('setting/lockScreen');
            if (ls.locked || ind > 2) {
                ls.locked = true;
                memstore_1.setStore('setting/lockScreen', ls);
                this.verifyPsw();
            } else {
                var title = this.state.errorTips[ind === 0 ? 3 : ind];
                root_1.popNew('app-components1-keyboard-keyboard', { title: title, closePage: 1 }, function (r) {
                    if (tools_1.lockScreenVerify(r)) {
                        // 原密码输入成功后重新设置密码
                        _this4.close(true);
                    } else {
                        _this4.unLockScreen(++ind);
                    }
                });
            }
        }
        /**
         * 进入APP三次解锁屏幕失败后验证身份
         */

    }, {
        key: "verifyPsw",
        value: function verifyPsw() {
            var _this5 = this;

            // tslint:disable-next-line:max-line-length
            root_1.popNew('app-components1-modalBoxInput-modalBoxInput', this.language.modalBoxInput2, function (r) {
                return __awaiter(_this5, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
                    var close, VerifyIdentidy, fg, ls;
                    return regeneratorRuntime.wrap(function _callee$(_context) {
                        while (1) {
                            switch (_context.prev = _context.next) {
                                case 0:
                                    close = root_1.popNew('app-components1-loading-loading', { text: this.language.loading });

                                    if (!this.state.loading) {
                                        _context.next = 8;
                                        break;
                                    }

                                    VerifyIdentidy = pi_modules.commonjs.exports.relativeGet('app/utils/walletTools').exports.VerifyIdentidy;
                                    _context.next = 5;
                                    return VerifyIdentidy(r);

                                case 5:
                                    fg = _context.sent;

                                    close.callback(close.widget);
                                    if (fg) {
                                        // 三次密码错误但成功验证身份后重新设置密码
                                        ls = memstore_1.getStore('setting/lockScreen');

                                        ls = {
                                            psw: '',
                                            open: false,
                                            locked: false
                                        };
                                        memstore_1.setStore('setting/lockScreen', ls);
                                        this.setLockPsw();
                                    } else {
                                        // 进入APP验证身份失败后再次进入验证身份步骤
                                        root_1.popNew('app-components1-message-message', { content: this.language.tips[2] });
                                        this.verifyPsw();
                                    }

                                case 8:
                                case "end":
                                    return _context.stop();
                            }
                        }
                    }, _callee, this);
                }));
            }, function (fg) {
                if (fg) {
                    // 退出app
                    var exitApp = new exitApp_1.ExitApp();
                    exitApp.init();
                    exitApp.exitApplication({});
                }
            });
        }
        /**
         * 判断资源加载完成
         */

    }, {
        key: "judgeLoading",
        value: function judgeLoading() {
            var loaded = memstore_1.getStore('flags/level_2_page_loaded');
            if (loaded) {
                this.state.loading = true;
                this.paint();
            }
        }
    }]);

    return LockScreenPage;
}(widget_1.Widget);

exports.LockScreenPage = LockScreenPage;
memstore_1.register('flags/level_2_page_loaded', function (loaded) {
    var w = exports.forelet.getWidget(exports.WIDGET_NAME);
    if (w) {
        w.judgeLoading();
    }
});
})