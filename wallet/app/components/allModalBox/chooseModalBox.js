_$define("app/components/allModalBox/chooseModalBox", function (require, exports, module){
"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * 矿工费选择框
 */
var widget_1 = require("../../../pi/widget/widget");
var interface_1 = require("../../store/interface");

var ChooseModalBox = function (_widget_1$Widget) {
    _inherits(ChooseModalBox, _widget_1$Widget);

    function ChooseModalBox() {
        _classCallCheck(this, ChooseModalBox);

        return _possibleConstructorReturn(this, (ChooseModalBox.__proto__ || Object.getPrototypeOf(ChooseModalBox)).apply(this, arguments));
    }

    _createClass(ChooseModalBox, [{
        key: "setProps",
        value: function setProps(props, oldProps) {
            _get(ChooseModalBox.prototype.__proto__ || Object.getPrototypeOf(ChooseModalBox.prototype), "setProps", this).call(this, props, oldProps);
            this.state = {
                minerFeeList: this.props.minerFeeList,
                level: this.props.curLevel ? this.props.curLevel : interface_1.MinerFeeLevel.Standard
            };
        }
    }, {
        key: "chooseMinerLevel",
        value: function chooseMinerLevel(e, index) {
            var chooseLevel = this.state.minerFeeList[index].level;
            if (this.props.minLevel && chooseLevel < this.props.minLevel) return;
            // this.state.level = chooseLevel;
            // this.paint();
            this.ok && this.ok(index);
        }
    }, {
        key: "doClose",
        value: function doClose() {
            this.cancel && this.cancel();
        }
    }]);

    return ChooseModalBox;
}(widget_1.Widget);

exports.ChooseModalBox = ChooseModalBox;
})