_$define("pi/components/slider/slider", function (require, exports, module){
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
var root_1 = require("../../ui/root");
var event_1 = require("../../widget/event");
var dom_1 = require("../../widget/scroller/dom");
var widget_1 = require("../../widget/widget");

var Message = function (_widget_1$Widget) {
    _inherits(Message, _widget_1$Widget);

    function Message() {
        _classCallCheck(this, Message);

        var _this = _possibleConstructorReturn(this, (Message.__proto__ || Object.getPrototypeOf(Message)).call(this));

        _this.dragging = false;
        _this.isClick = false;
        _this.startX = 0;
        _this.currentX = 0;
        _this.sliderSize = 1;
        return _this;
    }

    _createClass(Message, [{
        key: "setProps",
        value: function setProps(props, oldProps) {
            _get(Message.prototype.__proto__ || Object.getPrototypeOf(Message.prototype), "setProps", this).call(this, props, oldProps);
            this.state = {};
            this.init();
        }
        /**
         * 处理按钮按下
         */

    }, {
        key: "doButtonDown",
        value: function doButtonDown(event) {
            event.preventDefault();
            this.onDragStart(event);
            dom_1.addEvent(window, 'mousemove', this, true);
            dom_1.addEvent(window, 'touchmove', this, true);
            dom_1.addEvent(window, 'mouseup', this, true);
            dom_1.addEvent(window, 'touchend', this, true);
            dom_1.addEvent(window, 'contextmenu', this, true);
        }
    }, {
        key: "handleEvent",
        value: function handleEvent(e) {
            switch (e.type) {
                case 'mousemove':
                case 'touchmove':
                    this.onDragging(e);
                    break;
                case 'mouseup':
                case 'touchend':
                case 'contextmenu':
                    this.onDragEnd(e);
                    break;
                default:
            }
        }
        /**
         * 数量改变
         */

    }, {
        key: "selectCountChange",
        value: function selectCountChange(e) {
            this.showValue(e.value);
        }
    }, {
        key: "init",
        value: function init() {
            this.props.value = this.props.value || 0;
            this.props.max = this.props.max || 100;
            this.props.min = this.props.min || 0;
            this.props.step = this.props.step || 1;
            this.props.precision = this.props.precision || 0;
            this.props.showValue = this.props.showValue || false;
            this.state.showValue = this.props.value / (this.props.max - this.props.min) * 100;
        }
    }, {
        key: "onDragStart",
        value: function onDragStart(event) {
            this.dragging = true;
            this.isClick = true;
            if (event.type === 'touchstart') {
                event.clientY = event.touches[0].clientY;
                event.clientX = event.touches[0].clientX;
            }
            this.startX = event.clientX;
            this.sliderSize = event.currentTarget.parentNode.parentNode.offsetWidth / 100 * root_1.getScale();
            this.startPosition = this.state.showValue;
            this.newPosition = this.startPosition;
        }
    }, {
        key: "onDragging",
        value: function onDragging(event) {
            // todo 处理滑动事件
            if (this.dragging) {
                this.isClick = false;
                var diff = 0;
                if (event.type === 'touchmove') {
                    event.clientY = event.touches[0].clientY;
                    event.clientX = event.touches[0].clientX;
                }
                this.currentX = event.clientX;
                diff = (this.currentX - this.startX) / this.sliderSize;
                this.newPosition = this.startPosition + diff;
                this.setPosition(this.newPosition);
            }
        }
    }, {
        key: "onDragEnd",
        value: function onDragEnd(event) {
            var _this2 = this;

            if (this.dragging) {
                /*
                 * 防止在 mouseup 后立即触发 click，导致滑块有几率产生一小段位移
                 * 不使用 preventDefault 是因为 mouseup 和 click 没有注册在同一个 DOM 上
                 */
                setTimeout(function () {
                    _this2.dragging = false;
                    if (!_this2.isClick) {
                        _this2.setPosition(_this2.newPosition);
                    }
                }, 0);
                dom_1.removeEvent(window, 'mousemove', this, true);
                dom_1.removeEvent(window, 'touchmove', this, true);
                dom_1.removeEvent(window, 'mouseup', this, true);
                dom_1.removeEvent(window, 'touchend', this, true);
                dom_1.removeEvent(window, 'contextmenu', this, true);
            }
        }
    }, {
        key: "setPosition",
        value: function setPosition(newPosition) {
            if (newPosition === null) return;
            if (newPosition < 0) {
                newPosition = 0;
            } else if (newPosition > 100) {
                newPosition = 100;
            }
            var lengthPerStep = 100 / ((this.props.max - this.props.min) / this.props.step);
            var steps = Math.round(newPosition / lengthPerStep * Math.pow(10, this.props.precision));
            var value = steps * lengthPerStep * (this.props.max - this.props.min) * 0.01 + this.props.min;
            value = value / Math.pow(10, this.props.precision);
            this.showValue(value);
        }
    }, {
        key: "showValue",
        value: function showValue(value) {
            this.state.showValue = value / (this.props.max - this.props.min) * 100;
            this.props.value = value;
            this.paint();
            event_1.notify(this.parentNode, 'ev-slider-change', { value: this.props.value });
        }
    }]);

    return Message;
}(widget_1.Widget);

exports.Message = Message;
})