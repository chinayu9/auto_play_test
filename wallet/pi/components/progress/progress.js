_$define("pi/components/progress/progress", function (require, exports, module){
"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * 进度条的逻辑处理
 */
var widget_1 = require("../../widget/widget");

var Checkbox = function (_widget_1$Widget) {
    _inherits(Checkbox, _widget_1$Widget);

    function Checkbox() {
        _classCallCheck(this, Checkbox);

        return _possibleConstructorReturn(this, (Checkbox.__proto__ || Object.getPrototypeOf(Checkbox)).call(this));
    }

    _createClass(Checkbox, [{
        key: "setProps",
        value: function setProps(props, oldProps) {
            _get(Checkbox.prototype.__proto__ || Object.getPrototypeOf(Checkbox.prototype), "setProps", this).call(this, props, oldProps);
            this.state = {};
            this.init();
        }
    }, {
        key: "init",
        value: function init() {
            if (this.props.status === "exception") {
                this.props.color = "#f56c6c";
            } else if (this.props.status === "success") {
                this.props.color = "#67c23a";
            }
            if (this.props.type !== "circle") return;
            this.state.circleProgress = "<svg viewBox=\"0 0 100 100\">\n        <path d=\"M 50 50 m 0 -47 a 47 47 0 1 1 0 94 a 47 47 0 1 1 0 -94\" stroke=\"#e5e9f2\" stroke-width=\"4.8\" fill=\"none\" class=\"el-progress-circle__track\"></path>\n        <path d=\"M 50 50 m 0 -47 a 47 47 0 1 1 0 94 a 47 47 0 1 1 0 -94\" stroke-linecap=\"round\" stroke=\"" + (this.props.color || '#409eff') + "\" stroke-width=\"4.8\"fill=\"none\" \n        class=\"el-progress-circle__path\" style=\"stroke-dasharray: 299.08px, 299.08px; stroke-dashoffset: " + (300 - this.props.value * 300) + "px; \n        transition: stroke-dashoffset 0.6s ease 0s, stroke 0.6s ease;\"></path>\n        </svg>";
        }
    }]);

    return Checkbox;
}(widget_1.Widget);

exports.Checkbox = Checkbox;
})