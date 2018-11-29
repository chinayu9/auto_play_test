_$define("pi/components/checkbox/checkboxGroup", function (require, exports, module){
"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * 选择框的逻辑处理
 */
var widget_1 = require("../../widget/widget");
var event_1 = require("../../widget/event");

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
            this.checkChooseAllType();
        }
    }, {
        key: "doAllClick",
        value: function doAllClick(event) {
            if (!this.props.chooseAll) return;
            var newType = "true";
            if (this.state.chooseAllType === "true") newType = "false";
            this.props.list = this.props.list.map(function (v) {
                if (v.type === "disabled") return v;
                v.type = newType;
                return v;
            });
            event_1.notify(event.node, 'ev-checkbox-all-click', { oldType: this.state.chooseAllType, newType: newType });
            this.state.chooseAllType = newType;
            this.paint();
        }
    }, {
        key: "doEachClick",
        value: function doEachClick(event) {
            if (event.index === undefined) return;
            var oldChooseLen = this.props.list.filter(function (v) {
                return v.type === "true";
            }).length;
            this.props.list[event.index].type = event.newType;
            if (this.props.min !== undefined || this.props.max !== undefined) {
                var chooseLen = this.props.list.filter(function (v) {
                    return v.type === "true";
                }).length;
                if (this.props.min !== undefined && chooseLen < this.props.min && chooseLen < oldChooseLen || this.props.max !== undefined && chooseLen > this.props.max && chooseLen > oldChooseLen) {
                    this.props.list[event.index].type = event.oldType;
                    if (this.props.list[event.index].reset) {
                        this.props.list[event.index].reset++;
                    } else {
                        this.props.list[event.index].reset = 1;
                    }
                }
            }
            this.checkChooseAllType();
            this.paint();
        }
    }, {
        key: "checkChooseAllType",
        value: function checkChooseAllType() {
            if (!this.props.chooseAll) return;
            var ischooseNone = this.props.list.some(function (v) {
                return v.type === "false";
            });
            var isChoose = this.props.list.some(function (v) {
                return v.type === "true";
            });
            if (!isChoose) {
                this.state.chooseAllType = "false";
            } else if (ischooseNone) {
                this.state.chooseAllType = "indeterminate";
            } else {
                this.state.chooseAllType = "true";
            }
        }
    }]);

    return Checkbox;
}(widget_1.Widget);

exports.Checkbox = Checkbox;
})