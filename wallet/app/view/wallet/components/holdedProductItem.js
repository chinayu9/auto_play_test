_$define("app/view/wallet/components/holdedProductItem", function (require, exports, module){
"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * HoldedProductItem
 */
var root_1 = require("../../../../pi/ui/root");
var widget_1 = require("../../../../pi/widget/widget");
var lang_1 = require("../../../../pi/util/lang");

var HoldedProductItem = function (_widget_1$Widget) {
    _inherits(HoldedProductItem, _widget_1$Widget);

    function HoldedProductItem() {
        _classCallCheck(this, HoldedProductItem);

        return _possibleConstructorReturn(this, (HoldedProductItem.__proto__ || Object.getPrototypeOf(HoldedProductItem)).apply(this, arguments));
    }

    _createClass(HoldedProductItem, [{
        key: "setProps",
        value: function setProps(props, oldProps) {
            _get(HoldedProductItem.prototype.__proto__ || Object.getPrototypeOf(HoldedProductItem.prototype), "setProps", this).call(this, props, oldProps);
            this.language = this.config.value[lang_1.getLang()];
            var stateShow = props.product.state === 1 ? this.language.tips[5] : this.language.tips[6];
            var stateBg = props.product.state === 1 ? '' : 'status-gray';
            this.state = {
                stateShow: stateShow,
                stateBg: stateBg
            };
        }
    }, {
        key: "productItemClick",
        value: function productItemClick() {
            root_1.popNew('app-view-wallet-financialManagement-holdedFmDetail', this.props);
        }
    }]);

    return HoldedProductItem;
}(widget_1.Widget);

exports.HoldedProductItem = HoldedProductItem;
})