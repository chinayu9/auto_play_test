_$define("pi/components/navmenu/nav_submenu", function (require, exports, module){
"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * 导航菜单栏
 * mod 设置导航栏的类型，vertical和horizontal，默认是vertical垂直导航栏
 * isopen 子模块是否展开，默认不展开
 * arr 数组，没有子模块，直接传递包含title的json数据，有子模块传递包含submenu，subtitle及arr的json数据
 * left和top 表示子模块要显示的绝对位置
 * 可以多层嵌套导航栏
 *
 *
 * 最外层事件监听清空参数
 */
var widget_1 = require("../../widget/widget");
var painter_1 = require("../../widget/painter");

var navmenu = function (_widget_1$Widget) {
    _inherits(navmenu, _widget_1$Widget);

    function navmenu() {
        _classCallCheck(this, navmenu);

        var _this = _possibleConstructorReturn(this, (navmenu.__proto__ || Object.getPrototypeOf(navmenu)).call(this));

        _this.props = {
            mod: "vertical",
            isopen: false,
            isActivated: false,
            arr: []
        };
        _this.state = {
            left: 0,
            top: 0
        };
        return _this;
    }

    _createClass(navmenu, [{
        key: "subClick",
        value: function subClick(event) {
            this.props.isopen = !this.props.isopen;
            this.paint();
        }
    }, {
        key: "subMouseover",
        value: function subMouseover(event) {
            this.state.left = painter_1.getRealNode(event.node).offsetLeft;
            this.state.top = painter_1.getRealNode(event.node).offsetTop + painter_1.getRealNode(event.node).offsetHeight;
            this.props.isopen = true;
            this.paint();
        }
    }, {
        key: "subMouseout",
        value: function subMouseout(event) {
            this.props.isopen = false;
            this.paint();
        }
    }]);

    return navmenu;
}(widget_1.Widget);

exports.navmenu = navmenu;
})