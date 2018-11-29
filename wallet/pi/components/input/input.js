_$define("pi/components/input/input", function (require, exports, module){
"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * 输入框的逻辑处理
 */
var widget_1 = require("../../widget/widget");
var event_1 = require("../../widget/event");
var painter_1 = require("../../widget/painter");
var calcTextareaHeight_1 = require("./calcTextareaHeight");

var Input = function (_widget_1$Widget) {
    _inherits(Input, _widget_1$Widget);

    function Input() {
        _classCallCheck(this, Input);

        return _possibleConstructorReturn(this, (Input.__proto__ || Object.getPrototypeOf(Input)).call(this));
    }

    _createClass(Input, [{
        key: "setProps",
        value: function setProps(props, oldProps) {
            _get(Input.prototype.__proto__ || Object.getPrototypeOf(Input.prototype), "setProps", this).call(this, props, oldProps);
            var styleStr = "";
            if (props && props.style) {
                for (var key in props.style) {
                    styleStr += key + ":" + props.style[key] + ";";
                }
            }
            var currentValue = "";
            if (props.input) {
                currentValue = props.input;
            }
            this.state = {
                currentValue: currentValue,
                hovering: false,
                focused: false,
                showClear: this.showClear.bind(this),
                styleStr: styleStr
            };
            if (oldProps) {
                this.changeInputValue();
            }
        }
    }, {
        key: "change",
        value: function change(event) {
            var currentValue = event.currentTarget.value;
            this.state.currentValue = currentValue;
            if (this.props.type === 'textarea' && this.props.autosize) {
                this.setTextareaHeight();
            }
            event_1.notify(event.node, "ev-input-change", { value: this.state.currentValue });
            this.changeInputValue();
            //this.paint();
        }
    }, {
        key: "blur",
        value: function blur(event) {
            this.state.focused = false;
            event_1.notify(event.node, "ev-input-blur", {});
            this.paint();
        }
    }, {
        key: "focus",
        value: function focus(event) {
            this.state.focused = true;
            event_1.notify(event.node, "ev-input-focus", {});
            this.paint();
        }
    }, {
        key: "mouseover",
        value: function mouseover() {
            this.state.hovering = true;
            this.paint();
        }
    }, {
        key: "mouseleave",
        value: function mouseleave() {
            this.state.hovering = false;
            this.paint();
        }
    }, {
        key: "showClear",
        value: function showClear() {
            if (!this.props) return;
            return this.props && this.props.clearable && !this.props.disabled && this.state.currentValue !== '' && (this.state.focused || this.state.hovering);
        }
        //清空文本框

    }, {
        key: "clearClickListener",
        value: function clearClickListener(event) {
            this.state.currentValue = "";
            event_1.notify(event.node, "ev-input-clear", {});
            this.paint(true);
        }
        //设置textarea的高

    }, {
        key: "setTextareaHeight",
        value: function setTextareaHeight() {
            var child = this.tree.children[0].children[0];
            var childNode = painter_1.getRealNode(child);
            var result = calcTextareaHeight_1.default(childNode);
            childNode.style.height = result.height;
            childNode.style.minHeight = result.minHeight;
        }
        //设置input value

    }, {
        key: "changeInputValue",
        value: function changeInputValue() {
            var child = this.tree.children[0].children[0];
            var childNode = painter_1.getRealNode(child);
            childNode.value = this.state.currentValue;
        }
    }]);

    return Input;
}(widget_1.Widget);

exports.Input = Input;
})