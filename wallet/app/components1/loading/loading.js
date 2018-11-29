_$define("app/components1/loading/loading", function (require, exports, module){
"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

Object.defineProperty(exports, "__esModule", { value: true });
var widget_1 = require("../../../pi/widget/widget");

var Loading = function (_widget_1$Widget) {
    _inherits(Loading, _widget_1$Widget);

    function Loading() {
        _classCallCheck(this, Loading);

        return _possibleConstructorReturn(this, (Loading.__proto__ || Object.getPrototypeOf(Loading)).call(this));
    }

    _createClass(Loading, [{
        key: "create",
        value: function create() {
            _get(Loading.prototype.__proto__ || Object.getPrototypeOf(Loading.prototype), "create", this).call(this);
            this.config = { value: { group: 'top' } };
        }
    }, {
        key: "setProps",
        value: function setProps(props, oldProps) {
            _get(Loading.prototype.__proto__ || Object.getPrototypeOf(Loading.prototype), "setProps", this).call(this, props, oldProps);
            this.state = {
                circular: "<svg viewBox='25 25 50 50' class='pi-circular'>\n            <circle cx='50' cy='50' r='20' fill='none' class=\"pi-path\">\n            </circle>\n            </svg>",
                startTime: new Date().getTime()
            };
        }
    }, {
        key: "close",
        value: function close() {
            var _this2 = this;

            var INTERVAL = 500;
            var endTime = new Date().getTime();
            var interval = endTime - this.state.startTime;
            if (interval >= INTERVAL) {
                this.ok && this.ok();
            } else {
                setTimeout(function () {
                    _this2.ok && _this2.ok();
                }, INTERVAL - interval);
            }
        }
    }]);

    return Loading;
}(widget_1.Widget);

exports.Loading = Loading;
})