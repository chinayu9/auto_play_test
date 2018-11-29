_$define("app/components/allModalBox/modalBox2", function (require, exports, module){
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
var root_1 = require("../../../pi/ui/root");
var widget_1 = require("../../../pi/widget/widget");
var tools_1 = require("../../utils/tools");

var ModalBox2 = function (_widget_1$Widget) {
    _inherits(ModalBox2, _widget_1$Widget);

    function ModalBox2() {
        _classCallCheck(this, ModalBox2);

        return _possibleConstructorReturn(this, (ModalBox2.__proto__ || Object.getPrototypeOf(ModalBox2)).call(this));
    }

    _createClass(ModalBox2, [{
        key: "create",
        value: function create() {
            _get(ModalBox2.prototype.__proto__ || Object.getPrototypeOf(ModalBox2.prototype), "create", this).call(this);
            this.config = { value: { group: 'top' } };
        }
    }, {
        key: "quitClick",
        value: function quitClick() {
            this.cancel && this.cancel();
        }
    }, {
        key: "copyBtnClick",
        value: function copyBtnClick(e) {
            tools_1.copyToClipboard(this.props.extraInfo);
            root_1.popNew('app-components1-message-message', { itype: 'success', content: '复制成功', center: true });
            this.ok && this.ok();
        }
    }]);

    return ModalBox2;
}(widget_1.Widget);

exports.ModalBox2 = ModalBox2;
})