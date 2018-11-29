_$define("app/components1/topBar/topBar2", function (require, exports, module){
"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

Object.defineProperty(exports, "__esModule", { value: true });
var event_1 = require("../../../pi/widget/event");
var widget_1 = require("../../../pi/widget/widget");
// ================================ 导出

var TopBar2 = function (_widget_1$Widget) {
    _inherits(TopBar2, _widget_1$Widget);

    function TopBar2() {
        _classCallCheck(this, TopBar2);

        return _possibleConstructorReturn(this, (TopBar2.__proto__ || Object.getPrototypeOf(TopBar2)).apply(this, arguments));
    }

    _createClass(TopBar2, [{
        key: "setProps",
        value: function setProps(oldProps, props) {
            _get(TopBar2.prototype.__proto__ || Object.getPrototypeOf(TopBar2.prototype), "setProps", this).call(this, oldProps, props);
            this.props.refresh = false;
        }
        /**
         * 刷新当前页
         */

    }, {
        key: "refreshPage",
        value: function refreshPage(event) {
            var _this2 = this;

            this.props.refresh = true;
            this.paint();
            event_1.notify(event.node, 'ev-refresh-click', {});
            setTimeout(function () {
                _this2.props.refresh = false;
                _this2.paint();
            }, 1000);
        }
        /**
         * 返回上一页
         */

    }, {
        key: "backPrePage",
        value: function backPrePage(event) {
            event_1.notify(event.node, 'ev-back-click', {});
        }
        /**
         * 跳转到下一页
         */

    }, {
        key: "goNext",
        value: function goNext(event) {
            event_1.notify(event.node, 'ev-next-click', {});
        }
    }]);

    return TopBar2;
}(widget_1.Widget);

exports.TopBar2 = TopBar2;
})