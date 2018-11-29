_$define("pi/components/radio/radio", function (require, exports, module){
"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * 单选框的逻辑处理
 */
var widget_1 = require("../../widget/widget");
var event_1 = require("../../widget/event");

var Radio = function (_widget_1$Widget) {
    _inherits(Radio, _widget_1$Widget);

    function Radio() {
        _classCallCheck(this, Radio);

        return _possibleConstructorReturn(this, (Radio.__proto__ || Object.getPrototypeOf(Radio)).call(this));
    }

    _createClass(Radio, [{
        key: "clickListenter",
        value: function clickListenter(event) {
            if (this.props.disabled) return;
            if (this.props.labelIndex === this.props.checkedIndex) return;
            this.props.checkedIndex = this.props.labelIndex;
            event_1.notify(event.node, 'ev-radio-change', { checkedIndex: this.props.checkedIndex });
            this.paint();
        }
    }]);

    return Radio;
}(widget_1.Widget);

exports.Radio = Radio;
})