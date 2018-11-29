_$define("pi/ui/html", function (require, exports, module){
"use strict";
/*
 * 可以使用html语法来设置文字
 */

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

Object.defineProperty(exports, "__esModule", { value: true });
// ============================== 导入
var widget_1 = require("../widget/widget");
// ============================== 导出
/**
 * @description 导出组件Widget类
 * @example
 */

var InnerHTML = function (_widget_1$Widget) {
    _inherits(InnerHTML, _widget_1$Widget);

    function InnerHTML() {
        _classCallCheck(this, InnerHTML);

        return _possibleConstructorReturn(this, (InnerHTML.__proto__ || Object.getPrototypeOf(InnerHTML)).apply(this, arguments));
    }

    _createClass(InnerHTML, [{
        key: "firstPaint",
        value: function firstPaint() {
            this.tree.link.innerHTML = this.props;
        }
    }, {
        key: "afterUpdate",
        value: function afterUpdate() {
            this.tree.link.innerHTML = this.props;
        }
    }]);

    return InnerHTML;
}(widget_1.Widget);

exports.InnerHTML = InnerHTML;
// ============================== 本地
// ============================== 立即执行
})