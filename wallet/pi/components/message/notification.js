_$define("pi/components/message/notification", function (require, exports, module){
"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * 确认提示框
 */
var widget_1 = require("../../widget/widget");

var Notification = function (_widget_1$Widget) {
    _inherits(Notification, _widget_1$Widget);

    function Notification() {
        _classCallCheck(this, Notification);

        var _this = _possibleConstructorReturn(this, (Notification.__proto__ || Object.getPrototypeOf(Notification)).call(this));

        _this.timerRef = 0;
        return _this;
    }

    _createClass(Notification, [{
        key: "create",
        value: function create() {
            _get(Notification.prototype.__proto__ || Object.getPrototypeOf(Notification.prototype), "create", this).call(this);
            this.config = { value: { group: "download" } };
        }
    }, {
        key: "setProps",
        value: function setProps(props, oldProps) {
            _get(Notification.prototype.__proto__ || Object.getPrototypeOf(Notification.prototype), "setProps", this).call(this, props, oldProps);
            this.init();
        }
        /**
         * 点击确认
         */

    }, {
        key: "doClose",
        value: function doClose() {
            if (this.timerRef) {
                clearTimeout(this.timerRef);
                this.timerRef = 0;
            }
            this.ok && this.ok();
        }
    }, {
        key: "init",
        value: function init() {
            var _this2 = this;

            if (!this.props.manuallyClose) {
                this.timerRef = setTimeout(function () {
                    _this2.timerRef = 0;
                    _this2.doClose();
                }, 3000);
            }
        }
    }]);

    return Notification;
}(widget_1.Widget);

exports.Notification = Notification;
})