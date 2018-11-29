_$define("app/components/allModalBox/modalBox1", function (require, exports, module){
"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * 带关闭按钮的提示模态框
 */
var widget_1 = require("../../../pi/widget/widget");

var ModalBox1 = function (_widget_1$Widget) {
    _inherits(ModalBox1, _widget_1$Widget);

    function ModalBox1() {
        _classCallCheck(this, ModalBox1);

        return _possibleConstructorReturn(this, (ModalBox1.__proto__ || Object.getPrototypeOf(ModalBox1)).apply(this, arguments));
    }

    _createClass(ModalBox1, [{
        key: "cancelClick",
        value: function cancelClick() {
            this.ok && this.ok();
        }
    }]);

    return ModalBox1;
}(widget_1.Widget);

exports.ModalBox1 = ModalBox1;
})