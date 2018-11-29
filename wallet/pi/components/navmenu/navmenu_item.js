_$define("pi/components/navmenu/navmenu_item", function (require, exports, module){
"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * index 唯一标识
 * title 名称
 * submenu 是否含有子模块
 * subtitle 模块组的名称
 * isActivated 是否选中，默认未选中
 * isdisable 是否不可选择，默认可选择
 * 可以多层嵌套导航栏
 */
var widget_1 = require("../../widget/widget");
var event_1 = require("../../widget/event");
var painter_1 = require("../../widget/painter");

var navmenu = function (_widget_1$Widget) {
    _inherits(navmenu, _widget_1$Widget);

    function navmenu() {
        _classCallCheck(this, navmenu);

        var _this = _possibleConstructorReturn(this, (navmenu.__proto__ || Object.getPrototypeOf(navmenu)).call(this));

        _this.props = {
            index: "1",
            title: "group1",
            submenu: false,
            subtitle: "",
            isActivated: false,
            isdisabled: false
        };
        _this.state = {
            left: 0,
            top: 0,
            isopen: false
        };
        return _this;
    }

    _createClass(navmenu, [{
        key: "doClick",
        value: function doClick(event) {
            if (this.props.isdisabled) {
                return;
            }
            this.props.isActivated = true;
            this.paint();
            event_1.notify(event.node, "ev-navmenu-click", { index: this.props.index });
        }
    }, {
        key: "itemMouseover",
        value: function itemMouseover(event) {
            this.state.left = painter_1.getRealNode(event.node).offsetWidth;
            this.state.top = painter_1.getRealNode(event.node).offsetTop;
            this.state.isopen = true;
            this.paint();
        }
    }, {
        key: "itemMouseout",
        value: function itemMouseout(event) {
            this.state.isopen = false;
            this.paint();
        }
    }]);

    return navmenu;
}(widget_1.Widget);

exports.navmenu = navmenu;
})