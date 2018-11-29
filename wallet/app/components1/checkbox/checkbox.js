_$define("app/components1/checkbox/checkbox", function (require, exports, module){
"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * 选择框的逻辑处理
 */
var event_1 = require("../../../pi/widget/event");
var widget_1 = require("../../../pi/widget/widget");

var Checkbox = function (_widget_1$Widget) {
    _inherits(Checkbox, _widget_1$Widget);

    function Checkbox() {
        _classCallCheck(this, Checkbox);

        return _possibleConstructorReturn(this, (Checkbox.__proto__ || Object.getPrototypeOf(Checkbox)).call(this));
    }

    _createClass(Checkbox, [{
        key: "doClick",
        value: function doClick(event) {
            var oldType = this.props.itype;
            if (oldType === 'disabled') return;
            var newType = '';
            switch (oldType) {
                case 'true':
                    newType = 'false';
                    break;
                case 'false':
                    newType = 'true';
                    break;
                case 'indeterminate':
                    newType = 'true';
                    break;
                default:
            }
            this.props.itype = newType;
            event_1.notify(event.node, 'ev-checkbox-click', { oldType: oldType, newType: newType, index: this.props.index });
            this.paint();
        }
    }]);

    return Checkbox;
}(widget_1.Widget);

exports.Checkbox = Checkbox;
})