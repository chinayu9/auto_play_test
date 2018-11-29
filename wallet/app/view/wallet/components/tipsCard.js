_$define("app/view/wallet/components/tipsCard", function (require, exports, module){
"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * 创建 导入页面顶部提示卡片
 */
var widget_1 = require("../../../../pi/widget/widget");

var TipsCard = function (_widget_1$Widget) {
  _inherits(TipsCard, _widget_1$Widget);

  function TipsCard() {
    _classCallCheck(this, TipsCard);

    return _possibleConstructorReturn(this, (TipsCard.__proto__ || Object.getPrototypeOf(TipsCard)).apply(this, arguments));
  }

  return TipsCard;
}(widget_1.Widget);

exports.TipsCard = TipsCard;
})