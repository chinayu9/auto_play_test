_$define("app/components/qrcode/qrcode", function (require, exports, module){
"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * 二维码组件
 */
var painter_1 = require("../../../pi/widget/painter");
var widget_1 = require("../../../pi/widget/widget");
var qrcode_src_1 = require("./qrcode_src");

var Qrcode = function (_widget_1$Widget) {
    _inherits(Qrcode, _widget_1$Widget);

    function Qrcode() {
        _classCallCheck(this, Qrcode);

        return _possibleConstructorReturn(this, (Qrcode.__proto__ || Object.getPrototypeOf(Qrcode)).call(this));
    }

    _createClass(Qrcode, [{
        key: "firstPaint",
        value: function firstPaint() {
            var wrapper = painter_1.getRealNode(this.tree);
            console.log(this.tree, wrapper);
            var qrcode = new qrcode_src_1.QrcodeSrc(wrapper.children[0], {
                width: this.props.size,
                height: this.props.size
            });
            qrcode.makeCode(this.props.value);
        }
    }]);

    return Qrcode;
}(widget_1.Widget);

exports.Qrcode = Qrcode;
})