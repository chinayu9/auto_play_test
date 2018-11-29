_$define("app/view/wallet/financialManagement/productStatement", function (require, exports, module){
"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * 理财声明
 */
var root_1 = require("../../../../pi/ui/root");
var widget_1 = require("../../../../pi/widget/widget");
var tools_1 = require("../../../utils/tools");

var ProductStatement = function (_widget_1$Widget) {
    _inherits(ProductStatement, _widget_1$Widget);

    function ProductStatement() {
        _classCallCheck(this, ProductStatement);

        return _possibleConstructorReturn(this, (ProductStatement.__proto__ || Object.getPrototypeOf(ProductStatement)).apply(this, arguments));
    }

    _createClass(ProductStatement, [{
        key: "create",
        value: function create() {
            _get(ProductStatement.prototype.__proto__ || Object.getPrototypeOf(ProductStatement.prototype), "create", this).call(this);
            this.init();
        }
    }, {
        key: "init",
        value: function init() {
            this.state = {
                statement: tools_1.getStaticLanguage().notice,
                readed: false
            };
        }
    }, {
        key: "checkBoxClick",
        value: function checkBoxClick(e) {
            this.state.readed = e.newType === 'true' ? true : false;
            this.paint();
        }
    }, {
        key: "nextClick",
        value: function nextClick() {
            if (!this.state.readed) return;
            if (!this.props.fg) {
                root_1.popNew('app-view-wallet-financialManagement-purchase', { product: this.props.product, amount: this.props.amount });
            }
            this.ok && this.ok();
        }
    }, {
        key: "closePage",
        value: function closePage() {
            this.ok && this.ok();
        }
    }]);

    return ProductStatement;
}(widget_1.Widget);

exports.ProductStatement = ProductStatement;
})