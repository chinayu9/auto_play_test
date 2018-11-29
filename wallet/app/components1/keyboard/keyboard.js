_$define("app/components1/keyboard/keyboard", function (require, exports, module){
"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

Object.defineProperty(exports, "__esModule", { value: true });
var widget_1 = require("../../../pi/widget/widget");

var KeyBoard = function (_widget_1$Widget) {
    _inherits(KeyBoard, _widget_1$Widget);

    function KeyBoard() {
        _classCallCheck(this, KeyBoard);

        return _possibleConstructorReturn(this, (KeyBoard.__proto__ || Object.getPrototypeOf(KeyBoard)).call(this));
    }

    _createClass(KeyBoard, [{
        key: "setProps",
        value: function setProps(oldProps, props) {
            _get(KeyBoard.prototype.__proto__ || Object.getPrototypeOf(KeyBoard.prototype), "setProps", this).call(this, oldProps, props);
            this.init();
        }
    }, {
        key: "init",
        value: function init() {
            this.state = {
                defArr: [1, 2, 3, 4, 5, 6],
                numbers: [1, 2, 3, 4, 5, 6, 7, 8, 9, '', 0, 'x'],
                pswArr: [],
                closePage: this.props.closePage ? false : true
            };
        }
        /**
         * 键盘点击事件处理
         */

    }, {
        key: "boardItemClick",
        value: function boardItemClick(ind) {
            var _this2 = this;

            var val = this.state.numbers[ind];
            if (val !== '' && val !== 'x') {
                this.state.pswArr.push(val);
                this.paint();
            } else if (val === 'x') {
                this.clearClick();
            } else {
                return;
            }
            if (this.state.pswArr.length === 6) {
                setTimeout(function () {
                    _this2.ok && _this2.ok(_this2.state.pswArr.join(''));
                }, 100);
            }
        }
        /**
         * 清除输入数据
         */

    }, {
        key: "clearClick",
        value: function clearClick() {
            if (this.state.pswArr.length === 0) return;
            this.state.pswArr.pop();
            this.paint();
        }
    }, {
        key: "close",
        value: function close() {
            this.cancel && this.cancel();
        }
    }]);

    return KeyBoard;
}(widget_1.Widget);

exports.KeyBoard = KeyBoard;
})