_$define("pi/components/time_select/time_select", function (require, exports, module){
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

var TimeSelect = function (_widget_1$Widget) {
    _inherits(TimeSelect, _widget_1$Widget);

    function TimeSelect() {
        _classCallCheck(this, TimeSelect);

        return _possibleConstructorReturn(this, (TimeSelect.__proto__ || Object.getPrototypeOf(TimeSelect)).call(this));
    }

    _createClass(TimeSelect, [{
        key: "setProps",
        value: function setProps(props, oldProps) {
            _get(TimeSelect.prototype.__proto__ || Object.getPrototypeOf(TimeSelect.prototype), "setProps", this).call(this, props, oldProps);
            var timeList = this.calcTimeList();
            this.state = {
                timeList: timeList,
                showTimeList: false,
                currentValue: "",
                currentIndex: -1
            };
        }
    }, {
        key: "focus",
        value: function focus() {
            this.state.showTimeList = true;
            this.paint();
        }
    }, {
        key: "blur",
        value: function blur(event) {
            this.state.showTimeList = false;
            this.paint();
        }
    }, {
        key: "timeSelectItemClickListener",
        value: function timeSelectItemClickListener(event, index) {
            this.state.currentIndex = index;
            this.state.currentValue = this.state.timeList[index];
            this.state.showTimeList = false;
            event_1.notify(event.node, "ev-input-select", { value: this.state.currentValue });
            this.paint(true);
        }
    }, {
        key: "clear",
        value: function clear() {
            this.state.currentIndex = -1;
            this.state.currentValue = "";
            this.paint();
        }
        //计算时间列表

    }, {
        key: "calcTimeList",
        value: function calcTimeList() {
            var start = this.props.start;
            var end = this.props.end;
            var step = this.props.step;
            var result = [];
            if (start && end && step) {
                var current = start;
                while (this.compareTime(current, end) <= 0) {
                    result.push(current);
                    current = this.nextTime(current, step);
                }
            }
            return result;
        }
    }, {
        key: "parseTime",
        value: function parseTime(time) {
            var values = (time || '').split(':');
            if (values.length >= 2) {
                var hours = parseInt(values[0], 10);
                var minutes = parseInt(values[1], 10);
                return {
                    hours: hours,
                    minutes: minutes
                };
            }
            /* istanbul ignore next */
            return null;
        }
    }, {
        key: "formatTime",
        value: function formatTime(time) {
            return (time.hours < 10 ? '0' + time.hours : time.hours) + ':' + (time.minutes < 10 ? '0' + time.minutes : time.minutes);
        }
    }, {
        key: "compareTime",
        value: function compareTime(time1, time2) {
            var value1 = this.parseTime(time1);
            var value2 = this.parseTime(time2);
            var minutes1 = value1.minutes + value1.hours * 60;
            var minutes2 = value2.minutes + value2.hours * 60;
            if (minutes1 === minutes2) {
                return 0;
            }
            return minutes1 > minutes2 ? 1 : -1;
        }
    }, {
        key: "nextTime",
        value: function nextTime(time, step) {
            var timeValue = this.parseTime(time);
            var stepValue = this.parseTime(step);
            var next = {
                hours: timeValue.hours,
                minutes: timeValue.minutes
            };
            next.minutes += stepValue.minutes;
            next.hours += stepValue.hours;
            next.hours += Math.floor(next.minutes / 60);
            next.minutes = next.minutes % 60;
            return this.formatTime(next);
        }
    }]);

    return TimeSelect;
}(widget_1.Widget);

exports.TimeSelect = TimeSelect;
})