_$define("app/components/ringProgressBar/ringProgressBar", function (require, exports, module){
"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * 圆环进度条
 * {"width":82,"borderWidth":4,"activeColor":"#F7931A","activePercent":0.4,"centerText":"售罄",centerStyle:""}
 * width:环形直径
 * borderWidth:环宽度
 * activeColor：有效部分颜色
 * centerText：中间显示文字，可选
 * centerStyle:中间文字额外CSS
 */
// =====================================导入
var widget_1 = require("../../../pi/widget/widget");

var RingProgressBar = function (_widget_1$Widget) {
    _inherits(RingProgressBar, _widget_1$Widget);

    function RingProgressBar() {
        _classCallCheck(this, RingProgressBar);

        return _possibleConstructorReturn(this, (RingProgressBar.__proto__ || Object.getPrototypeOf(RingProgressBar)).apply(this, arguments));
    }

    _createClass(RingProgressBar, [{
        key: "setProps",
        value: function setProps(props, oldProps) {
            _get(RingProgressBar.prototype.__proto__ || Object.getPrototypeOf(RingProgressBar.prototype), "setProps", this).call(this, props, oldProps);
            console.log();
            //
        }
    }]);

    return RingProgressBar;
}(widget_1.Widget);

exports.RingProgressBar = RingProgressBar;
})