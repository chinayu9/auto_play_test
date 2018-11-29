_$define("pi/ui/progressive", function (require, exports, module){
"use strict";
/*
 * 渐进显示数组
 * props={direction:2, arr:[], showStart:0, showEnd:0, initCount:10, addCount:5, checkPixel:100,scrollEnd:false }
 */

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

Object.defineProperty(exports, "__esModule", { value: true });
var widget_1 = require("../widget/widget");
// ============================== 导出
/**
 * @description 导出组件Widget类
 * @example
 */

var Progressive = function (_widget_1$Widget) {
    _inherits(Progressive, _widget_1$Widget);

    function Progressive() {
        _classCallCheck(this, Progressive);

        // 滚动位置的状态，0表示滚动位置为开头，1表示为中间，2表示为底部
        var _this = _possibleConstructorReturn(this, (Progressive.__proto__ || Object.getPrototypeOf(Progressive)).apply(this, arguments));

        _this.state = 0;
        return _this;
    }
    /**
     * @description 设置属性，默认外部传入的props是完整的props，重载可改变行为
     * @example
     */


    _createClass(Progressive, [{
        key: "setProps",
        value: function setProps(props, oldProps) {
            props.arr = props.arr || [];
            props.orientation = props.orientation || 2;
            props.initCount = props.initCount || 10;
            props.addCount = props.addCount || 5;
            props.checkPixel = props.checkPixel || 0.5;
            props.showStart = props.showStart || 0;
            props.showEnd = props.showEnd || Math.min(props.showStart + props.initCount, props.arr.length);
            this.props = props;
        }
        /**
         * @description 滚动监听
         * @example
         */

    }, {
        key: "scroll",
        value: function scroll(e) {
            var el = this.tree.link;
            var p = this.props;
            var start = void 0,
                clientSize = void 0,
                scrollSize = void 0,
                check = void 0;
            if (p.orientation === 2) {
                start = el.scrollTop;
                clientSize = el.clientHeight;
                scrollSize = el.scrollHeight;
            } else {
                start = el.scrollLeft;
                clientSize = el.clientWidth;
                scrollSize = el.scrollWidth;
            }
            if (start === 0) {
                this.state = 0;
            } else if (start + clientSize >= scrollSize) {
                this.state = 2;
            } else {
                this.state = 1;
            }
            check = Number.isInteger(p.checkPixel) ? p.checkPixel : p.checkPixel * clientSize | 0;
            if (start + clientSize + check >= scrollSize && p.showEnd < p.arr.length) {
                // 向尾部添加数据
                p.showEnd = Math.min(p.showEnd + p.addCount, p.arr.length);
                return this.paint();
            }
        }
    }]);

    return Progressive;
}(widget_1.Widget);

exports.Progressive = Progressive;
// ============================== 本地
// ============================== 立即执行
})