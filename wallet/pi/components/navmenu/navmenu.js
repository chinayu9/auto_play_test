_$define("pi/components/navmenu/navmenu", function (require, exports, module){
"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * 导航菜单栏
 * mod 设置导航栏的类型，vertical和horizontal，默认是vertical垂直导航栏
 * width 导航栏宽度设置，最小为240px
 * arr 数组，没有子模块，直接传递包含title的json数据，有子模块传递包含submenu，subtitle及arr的json数据
 * 可以多层嵌套导航栏
 */
var widget_1 = require("../../widget/widget");

var navmenu = function (_widget_1$Widget) {
    _inherits(navmenu, _widget_1$Widget);

    function navmenu() {
        _classCallCheck(this, navmenu);

        var _this = _possibleConstructorReturn(this, (navmenu.__proto__ || Object.getPrototypeOf(navmenu)).call(this));

        _this.props = {
            mod: "vertical",
            width: 240,
            arr: [{ index: "1", title: "选项1", isActivated: true }, { index: "2", title: "选项2" }, {
                index: "3",
                submenu: true,
                subtitle: "选项3",
                title: "选项3",
                arr: [{ index: "3-1", title: "选项3-1" }, { index: "3-2", title: "选项3-2", isdisabled: true }, {
                    index: "3-3",
                    submenu: true,
                    subtitle: "选项3-3",
                    arr: [{ index: "3-3-1", title: "选项3-3-1" }, { index: "3-3-2", title: "选项3-3-2" }]
                }]
            }]
        };
        return _this;
    }
    // vertical模式下清除active标记


    _createClass(navmenu, [{
        key: "clearActive",
        value: function clearActive(data, index) {
            for (var i in data) {
                if (index != data[i].index) {
                    data[i].isActivated = false;
                }
                if (data[i].submenu) {
                    this.clearActive(data[i].arr, index);
                }
            }
        }
        // horizontal模式下清除active标记

    }, {
        key: "clearActive1",
        value: function clearActive1(data, index) {
            for (var i in data) {
                var reg = new RegExp("^" + data[i].index);
                if (index != data[i].index && !reg.test(index)) {
                    data[i].isActivated = false;
                } else {
                    data[i].isActivated = true;
                }
                if (data[i].submenu) {
                    this.clearActive1(data[i].arr, index);
                }
            }
        }
        // vertical模式下事件监听

    }, {
        key: "doClick",
        value: function doClick(event) {
            this.clearActive(this.props.arr, "" + event.index);
            console.log(this.props);
            this.paint();
        }
        // horizontal模式下事件监听

    }, {
        key: "doClick1",
        value: function doClick1(event) {
            this.clearActive1(this.props.arr, "" + event.index);
            this.paint();
        }
    }]);

    return navmenu;
}(widget_1.Widget);

exports.navmenu = navmenu;
})