_$define("app/components/radioList/radioList", function (require, exports, module){
"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

Object.defineProperty(exports, "__esModule", { value: true });
var event_1 = require("../../../pi/widget/event");
var widget_1 = require("../../../pi/widget/widget");

var RadioList = function (_widget_1$Widget) {
    _inherits(RadioList, _widget_1$Widget);

    function RadioList() {
        _classCallCheck(this, RadioList);

        return _possibleConstructorReturn(this, (RadioList.__proto__ || Object.getPrototypeOf(RadioList)).call(this));
    }

    _createClass(RadioList, [{
        key: "setProps",
        value: function setProps(props, oldProps) {
            _get(RadioList.prototype.__proto__ || Object.getPrototypeOf(RadioList.prototype), "setProps", this).call(this, props, oldProps);
            this.state = {
                selected: this.props.selected ? this.props.selected : 0
            };
        }
    }, {
        key: "backPrePage",
        value: function backPrePage() {
            this.ok && this.ok();
        }
    }, {
        key: "changeSelect",
        value: function changeSelect(e, ind) {
            this.state.selected = ind;
            this.paint();
            setTimeout(function () {
                event_1.notify(e.node, 'ev-radioList-change', { value: ind });
            }, 100);
        }
    }]);

    return RadioList;
}(widget_1.Widget);

exports.RadioList = RadioList;
})