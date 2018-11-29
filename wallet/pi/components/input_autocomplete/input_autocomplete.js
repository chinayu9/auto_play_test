_$define("pi/components/input_autocomplete/input_autocomplete", function (require, exports, module){
"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * 带输入提示输入框的逻辑处理
 */
var widget_1 = require("../../widget/widget");
var event_1 = require("../../widget/event");

var InputAutocomplete = function (_widget_1$Widget) {
    _inherits(InputAutocomplete, _widget_1$Widget);

    function InputAutocomplete() {
        _classCallCheck(this, InputAutocomplete);

        return _possibleConstructorReturn(this, (InputAutocomplete.__proto__ || Object.getPrototypeOf(InputAutocomplete)).call(this));
    }

    _createClass(InputAutocomplete, [{
        key: "setProps",
        value: function setProps(props, oldProps) {
            _get(InputAutocomplete.prototype.__proto__ || Object.getPrototypeOf(InputAutocomplete.prototype), "setProps", this).call(this, props, oldProps);
            this.state = {
                currentValue: "",
                showTips: false,
                showTipList: props.tipList
            };
        }
    }, {
        key: "autoCompleteItemClickListener",
        value: function autoCompleteItemClickListener(event, text) {
            this.state.currentValue = text;
            this.state.showTips = false;
            event_1.notify(event.node, "ev-input-select", { value: this.state.currentValue });
            this.paint(true);
        }
    }, {
        key: "focus",
        value: function focus() {
            var _this2 = this;

            this.state.showTips = true;
            this.state.showTipList = this.props.tipList.filter(function (v) {
                return v.value.indexOf(_this2.state.currentValue) !== -1;
            });
            this.paint();
        }
    }, {
        key: "blur",
        value: function blur(event) {
            this.state.showTips = false;
            this.paint();
        }
    }, {
        key: "change",
        value: function change(event) {
            var currentValue = event.value;
            this.state.currentValue = currentValue.trim();
            if (this.state.currentValue.length === 0) {
                this.state.showTipList = this.props.tipList;
                this.paint();
                return;
            }
            this.state.showTipList = this.props.tipList.filter(function (v) {
                return v.value.indexOf(currentValue) !== -1;
            });
            this.paint();
        }
    }]);

    return InputAutocomplete;
}(widget_1.Widget);

exports.InputAutocomplete = InputAutocomplete;
})