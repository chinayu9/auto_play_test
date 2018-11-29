_$define("app/components/input/input", function (require, exports, module){
"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * 输入框的逻辑处理
 * {input:"",placehold:"",disabled:false,clearable:false,itype:"text",style:"",autofacus:false}
 * input?: 初始内容
 * placeHolder?: 提示文字
 * disabled?: 是否禁用
 * clearable?: 是否可清空
 * itype?: 输入框类型 text number password
 * style?: 样式
 * 外部可监听 ev-input-change，ev-input-blur，ev-input-focus，ev-input-clear事件
 */
var event_1 = require("../../../pi/widget/event");
var painter_1 = require("../../../pi/widget/painter");
var widget_1 = require("../../../pi/widget/widget");

var Input = function (_widget_1$Widget) {
    _inherits(Input, _widget_1$Widget);

    function Input() {
        _classCallCheck(this, Input);

        return _possibleConstructorReturn(this, (Input.__proto__ || Object.getPrototypeOf(Input)).call(this));
    }

    _createClass(Input, [{
        key: "create",
        value: function create() {
            this.state = {
                currentValue: '',
                focused: false,
                showClear: false
            };
        }
    }, {
        key: "setProps",
        value: function setProps(props, oldProps) {
            _get(Input.prototype.__proto__ || Object.getPrototypeOf(Input.prototype), "setProps", this).call(this, props, oldProps);
            if (props.input) {
                this.state.currentValue = props.input;
            }
        }
    }, {
        key: "change",
        value: function change(event) {
            var currentValue = event.currentTarget.value;
            this.state.currentValue = currentValue;
            event_1.notify(event.node, 'ev-input-change', { value: this.state.currentValue });
            this.changeInputValue();
            this.paint();
        }
    }, {
        key: "blur",
        value: function blur(event) {
            this.state.focused = false;
            event_1.notify(event.node, 'ev-input-blur', {});
            this.paint();
        }
    }, {
        key: "focus",
        value: function focus(event) {
            this.state.focused = true;
            event_1.notify(event.node, 'ev-input-focus', {});
            this.paint();
        }
        // 设置input value

    }, {
        key: "changeInputValue",
        value: function changeInputValue() {
            var child = this.tree.children[0];
            var childNode = painter_1.getRealNode(child);
            childNode.value = this.state.currentValue;
        }
    }]);

    return Input;
}(widget_1.Widget);

exports.Input = Input;
})