_$define("pi/components/tabs/tabs", function (require, exports, module){
"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * 确认提示框
 */
var event_1 = require("../../widget/event");
var widget_1 = require("../../widget/widget");

var Tabs = function (_widget_1$Widget) {
    _inherits(Tabs, _widget_1$Widget);

    function Tabs() {
        _classCallCheck(this, Tabs);

        return _possibleConstructorReturn(this, (Tabs.__proto__ || Object.getPrototypeOf(Tabs)).call(this));
    }

    _createClass(Tabs, [{
        key: "setProps",
        value: function setProps(props, oldProps) {
            _get(Tabs.prototype.__proto__ || Object.getPrototypeOf(Tabs.prototype), "setProps", this).call(this, props, oldProps);
            this.props.activeNum = this.props.activeNum || 0;
            this.props.type = this.props.type || 'normal';
            this.props.position = this.props.position || 'top';
            this.init();
        }
    }, {
        key: "doClick",
        value: function doClick(event, value) {
            this.props.activeNum = value;
            this.paint();
            event_1.notify(event.node, 'ev-tabs-change', { value: value });
        }
    }, {
        key: "init",
        value: function init() {
            //
        }
    }]);

    return Tabs;
}(widget_1.Widget);

exports.Tabs = Tabs;
})