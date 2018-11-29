_$define("app/components/chooseCurrency/chooseCurrency", function (require, exports, module){
"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * choose currency
 */
var widget_1 = require("../../../pi/widget/widget");
var tools_1 = require("../../utils/tools");

var ChooseCurrency = function (_widget_1$Widget) {
    _inherits(ChooseCurrency, _widget_1$Widget);

    function ChooseCurrency() {
        _classCallCheck(this, ChooseCurrency);

        return _possibleConstructorReturn(this, (ChooseCurrency.__proto__ || Object.getPrototypeOf(ChooseCurrency)).apply(this, arguments));
    }

    _createClass(ChooseCurrency, [{
        key: "setProps",
        value: function setProps(props, oldProps) {
            _get(ChooseCurrency.prototype.__proto__ || Object.getPrototypeOf(ChooseCurrency.prototype), "setProps", this).call(this, props, oldProps);
            var currencyShowList = [];
            this.props.list.forEach(function (item) {
                // tslint:disable-next-line:max-line-length
                var balance = tools_1.getCurrentAddrInfo(item).balance;
                currencyShowList.push({
                    name: item,
                    balance: tools_1.formatBalance(balance),
                    // tslint:disable-next-line:prefer-template
                    img: '../../res/image/currency/' + item + '.png'
                });
            });
            this.state = {
                currencyShowList: currencyShowList,
                selected: this.props.selected
            };
        }
    }, {
        key: "changeSelect",
        value: function changeSelect(e, ind) {
            var _this2 = this;

            this.state.selected = ind;
            this.paint();
            setTimeout(function () {
                _this2.ok && _this2.ok(ind);
            }, 100);
        }
    }, {
        key: "close",
        value: function close() {
            this.cancel && this.cancel();
        }
    }]);

    return ChooseCurrency;
}(widget_1.Widget);

exports.ChooseCurrency = ChooseCurrency;
})