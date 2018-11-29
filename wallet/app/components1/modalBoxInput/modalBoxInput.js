_$define("app/components1/modalBoxInput/modalBoxInput", function (require, exports, module){
"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * 带输入框的模态框
 * {title:"提示",content:"温馨提示",sureText:"sure",cancelText:"cancel",placeholder:"",itype:"text"}
 * title：标题
 * content：内容数组，如果需要分行显示
 * sureText:确认按钮名称
 * cancelText：取消按钮名称
 * itype:输入数据类型，text，number，password
 * placeholder:输入框提示语
 * 外部监听 ev-sure，ev-forgetPsw 事件,event.value获取输入框中数据
 */
var root_1 = require("../../../pi/ui/root");
var widget_1 = require("../../../pi/widget/widget");
var lang_1 = require("../../../pi/util/lang");
var pull_1 = require("../../net/pull");

var ModalBoxInput = function (_widget_1$Widget) {
    _inherits(ModalBoxInput, _widget_1$Widget);

    function ModalBoxInput() {
        _classCallCheck(this, ModalBoxInput);

        return _possibleConstructorReturn(this, (ModalBoxInput.__proto__ || Object.getPrototypeOf(ModalBoxInput)).apply(this, arguments));
    }

    _createClass(ModalBoxInput, [{
        key: "create",
        value: function create() {
            _get(ModalBoxInput.prototype.__proto__ || Object.getPrototypeOf(ModalBoxInput.prototype), "create", this).call(this);
            this.language = this.config.value[lang_1.getLang()];
            this.state = {
                currentValue: ''
            };
        }
        /**
         * 点击取消按钮
         */

    }, {
        key: "cancelBtnClick",
        value: function cancelBtnClick() {
            this.cancel && this.cancel(true);
        }
        /**
         * 点击确认按钮
         */

    }, {
        key: "okBtnClick",
        value: function okBtnClick() {
            this.ok && this.ok(this.state.currentValue);
        }
        /**
         * 忘记密码
         */

    }, {
        key: "foegetPsw",
        value: function foegetPsw() {
            var _this2 = this;

            this.cancel && this.cancel(false);
            root_1.popNew('app-components1-modalBox-modalBox', this.language.modalBox, function () {
                pull_1.logoutAccountDel();
            }, function () {
                if (_this2.props.lockScreen) {
                    root_1.popNew('app-components1-modalBoxInput-modalBoxInput', _this2.props);
                }
            });
        }
        /**
         * 输入框变化
         */

    }, {
        key: "change",
        value: function change(e) {
            this.state.currentValue = e.value;
            this.paint();
        }
    }]);

    return ModalBoxInput;
}(widget_1.Widget);

exports.ModalBoxInput = ModalBoxInput;
})