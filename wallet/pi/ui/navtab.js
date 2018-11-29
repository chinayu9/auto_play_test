_$define("pi/ui/navtab", function (require, exports, module){
"use strict";
/*
 * 导航选项卡
 * 用户可以单击选项，来切换卡片。支持3种模式，惰性加载0-隐藏显示切换，切换采用加载1-销毁模式，一次性加载2-隐藏显示切换。
 * props={cur:0, btn:"btn$", arr:[{tab:"input$", btn:{} }], old:{}, type:0 }
 */

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

Object.defineProperty(exports, "__esModule", { value: true });
var task_mgr_1 = require("../util/task_mgr");
var event_1 = require("../widget/event");
var widget_1 = require("../widget/widget");
// ============================== 导出
/**
 * @description 导出组件Widget类
 * @example
 */

var NavTab = function (_widget_1$Widget) {
    _inherits(NavTab, _widget_1$Widget);

    function NavTab() {
        _classCallCheck(this, NavTab);

        var _this = _possibleConstructorReturn(this, (NavTab.__proto__ || Object.getPrototypeOf(NavTab)).apply(this, arguments));

        _this.old = {};
        return _this;
    }
    /**
     * @description 设置属性，默认外部传入的props是完整的props，重载可改变行为
     * @example
     */


    _createClass(NavTab, [{
        key: "setProps",
        value: function setProps(props, oldProps) {
            if (!Number.isInteger(props.cur)) {
                props.cur = this.props ? this.props.cur : 0;
            }
            this.old[props.cur] = true;
            props.old = this.old;
            this.props = props;
        }
        /**
         * @description 选择按钮切换
         * @example
         */

    }, {
        key: "change",
        value: function change(e) {
            console.log('===');
            if (e.cmd === this.props.cur) {
                return;
            }
            var old = this.props.cur;
            this.props.cur = e.cmd;
            this.old[e.cmd] = true;
            this.paint();
            task_mgr_1.set(event_1.notify, [this.parentNode, 'ev-change', e], 90000, 1);
        }
    }]);

    return NavTab;
}(widget_1.Widget);

exports.NavTab = NavTab;
// ============================== 本地
// ============================== 立即执行
})