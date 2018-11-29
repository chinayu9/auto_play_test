_$define("app/components1/img/img", function (require, exports, module){
"use strict";
/**
 * 图片显示组件
 */

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

Object.defineProperty(exports, "__esModule", { value: true });
var widget_1 = require("../../../pi/widget/widget");

var WalletImg = function (_widget_1$Widget) {
    _inherits(WalletImg, _widget_1$Widget);

    function WalletImg() {
        _classCallCheck(this, WalletImg);

        return _possibleConstructorReturn(this, (WalletImg.__proto__ || Object.getPrototypeOf(WalletImg)).apply(this, arguments));
    }

    _createClass(WalletImg, [{
        key: "setProps",

        // tslint:disable-next-line:no-unnecessary-override
        value: function setProps(props) {
            _get(WalletImg.prototype.__proto__ || Object.getPrototypeOf(WalletImg.prototype), "setProps", this).call(this, props);
        }
    }]);

    return WalletImg;
}(widget_1.Widget);

exports.WalletImg = WalletImg;
})