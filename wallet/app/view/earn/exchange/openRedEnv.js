_$define("app/view/earn/exchange/openRedEnv", function (require, exports, module){
"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * open red-envelope
 */
var root_1 = require("../../../../pi/ui/root");
var widget_1 = require("../../../../pi/widget/widget");
var forelet_1 = require("../../../../pi/widget/forelet");
var interface_1 = require("../../../store/interface");
var lang_1 = require("../../../../pi/util/lang");
exports.forelet = new forelet_1.Forelet();
exports.WIDGET_NAME = module.id.replace(/\//g, '-');

var OpenRedEnvelope = function (_widget_1$Widget) {
    _inherits(OpenRedEnvelope, _widget_1$Widget);

    function OpenRedEnvelope() {
        _classCallCheck(this, OpenRedEnvelope);

        return _possibleConstructorReturn(this, (OpenRedEnvelope.__proto__ || Object.getPrototypeOf(OpenRedEnvelope)).apply(this, arguments));
    }

    _createClass(OpenRedEnvelope, [{
        key: "setProps",
        value: function setProps(props, oldProps) {
            _get(OpenRedEnvelope.prototype.__proto__ || Object.getPrototypeOf(OpenRedEnvelope.prototype), "setProps", this).call(this, props, oldProps);
            this.language = this.config.value[lang_1.getLang()];
            this.state = {
                tag: '',
                openClick: false
            };
            if (props.rtype === interface_1.LuckyMoneyType.Normal) {
                this.state.tag = this.language.tips[0];
            } else if (props.rtype === interface_1.LuckyMoneyType.Random) {
                this.state.tag = this.language.tips[1];
            } else if (props.rtype === interface_1.LuckyMoneyType.Invite) {
                this.state.tag = this.language.tips[2];
            }
        }
        /**
         * 开红包
         */

    }, {
        key: "openRedEnv",
        value: function openRedEnv() {
            var _this2 = this;

            this.state.openClick = true;
            this.paint();
            setTimeout(function () {
                root_1.popNew('app-view-earn-exchange-exchangeDetail', _this2.props);
                root_1.popNew('app-components1-message-message', { content: _this2.language.successMess });
                _this2.backPrePage();
            }, 800);
        }
    }, {
        key: "backPrePage",
        value: function backPrePage() {
            this.ok && this.ok();
        }
    }]);

    return OpenRedEnvelope;
}(widget_1.Widget);

exports.OpenRedEnvelope = OpenRedEnvelope;
})