_$define("pi/components/selectcount/selectcount", function (require, exports, module){
"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * 消息框
 */
var widget_1 = require("../../widget/widget");
var event_1 = require("../../widget/event");

var SelectCount = function (_widget_1$Widget) {
    _inherits(SelectCount, _widget_1$Widget);

    function SelectCount() {
        _classCallCheck(this, SelectCount);

        var _this = _possibleConstructorReturn(this, (SelectCount.__proto__ || Object.getPrototypeOf(SelectCount)).call(this));

        _this.timerRef = 0;
        return _this;
    }

    _createClass(SelectCount, [{
        key: "setProps",
        value: function setProps(props, oldProps) {
            _get(SelectCount.prototype.__proto__ || Object.getPrototypeOf(SelectCount.prototype), "setProps", this).call(this, props, oldProps);
            this.state = {};
            this.init();
        }
    }, {
        key: "init",
        value: function init() {
            this.state.style = { padding: "0px 40px", textAlign: "center" };
            this.props.value = this.props.value || 0;
            this.props.min = this.props.min || 0;
            this.props.max = this.props.max || 100;
            this.props.interval = this.props.interval || 200;
        }
        /**
         * 点击左方
         */

    }, {
        key: "tapLeft",
        value: function tapLeft() {
            if (this.timerRef) {
                clearTimeout(this.timerRef);
                this.timerRef = 0;
            }
            changeCount(this, -1, false);
        }
        /**
         * 长按左方
         */

    }, {
        key: "langTapLeft",
        value: function langTapLeft() {
            changeCount(this, -1, true);
        }
        /**
         * 点击右方
         */

    }, {
        key: "tapRight",
        value: function tapRight() {
            if (this.timerRef) {
                clearTimeout(this.timerRef);
                this.timerRef = 0;
            }
            changeCount(this, 1, false);
        }
        /**
         * 长按右方
         */

    }, {
        key: "langTapRight",
        value: function langTapRight() {
            changeCount(this, 1, true);
        }
        /**
         * 输入数据改变
         */

    }, {
        key: "inputChange",
        value: function inputChange(e) {
            var value = Number.parseFloat(e.value);
            if (!!value) this.props.value = value;
        }
        /**
         * 输入光标消失
         */

    }, {
        key: "inputBlur",
        value: function inputBlur() {
            event_1.notify(this.parentNode, 'ev-selectcount', { value: this.props.value });
        }
        /**
         * 检查状态
         */

    }, {
        key: "checkStatus",
        value: function checkStatus() {
            this.state.hideLeft = false;
            this.state.hideRight = false;
            if (this.props.value <= this.props.min) {
                this.state.hideLeft = true;
            }
            if (this.props.value >= this.props.max) {
                this.state.hideRight = true;
            }
        }
        /**
         * 显示数据
         */

    }, {
        key: "showValue",
        value: function showValue() {
            event_1.notify(this.parentNode, 'ev-selectcount', { value: this.props.value });
            this.checkStatus();
            this.paint();
        }
    }]);

    return SelectCount;
}(widget_1.Widget);

exports.SelectCount = SelectCount;
/**
 * @description 更改选择数量
 * @param startTimeout--是否开启定时器
 * @example
 */
var changeCount = function changeCount(w, step, startTimeout) {
    var to = w.props.value + step;
    if (step > 0) {
        if (to >= w.props.max) {
            w.props.value = w.props.max;
            w.timerRef = 0;
        } else {
            w.props.value = to;
            if (startTimeout) {
                w.timerRef = setTimeout(function () {
                    changeCount(w, step, true);
                }, w.props.interval);
            }
        }
    } else if (step < 0) {
        if (to <= w.props.min) {
            w.props.value = w.props.min;
            w.timerRef = 0;
        } else {
            w.props.value = to;
            if (startTimeout) {
                w.timerRef = setTimeout(function () {
                    changeCount(w, step, true);
                }, w.props.interval);
            }
        }
    }
    w.showValue();
};
})