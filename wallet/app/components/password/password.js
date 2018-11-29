_$define("app/components/password/password", function (require, exports, module){
"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

Object.defineProperty(exports, "__esModule", { value: true });
var event_1 = require("../../../pi/widget/event");
var widget_1 = require("../../../pi/widget/widget");

var ImgRankItem = function (_widget_1$Widget) {
    _inherits(ImgRankItem, _widget_1$Widget);

    function ImgRankItem() {
        _classCallCheck(this, ImgRankItem);

        return _possibleConstructorReturn(this, (ImgRankItem.__proto__ || Object.getPrototypeOf(ImgRankItem)).call(this));
    }

    _createClass(ImgRankItem, [{
        key: "setProps",
        value: function setProps(props, oldProps) {
            _get(ImgRankItem.prototype.__proto__ || Object.getPrototypeOf(ImgRankItem.prototype), "setProps", this).call(this, props, oldProps);
            this.state = {
                password: '',
                secret: 0,
                showTips: false,
                isSuccess: false,
                showIcon: false
            };
        }
    }, {
        key: "backPrePage",
        value: function backPrePage() {
            this.ok && this.ok();
        }
        /**
         * 密码输入状态变化
         */

    }, {
        key: "pswChange",
        value: function pswChange(event) {
            var psw = event.value;
            this.state.password = psw;
            this.state.showIcon = true;
            var secret = 0;
            var limit = this.props.limit ? this.props.limit : 1;
            var length = this.props.length ? this.props.length : 8;
            if (psw.length < length && psw.length > 0) {
                secret = 1;
                this.state.showTips = true;
                this.state.isSuccess = false;
            } else {
                secret = this.strongJudge(psw);
            }
            if (limit === 1 && psw.length >= length) {
                // 符合最小长度限制
                this.state.showTips = this.props.hideTips ? false : true;
                this.state.isSuccess = true;
                event_1.notify(event.node, 'ev-psw-change', { password: psw, success: true });
            } else if (limit === 2 && secret > 1) {
                // 符合最小长度和包含两种数据类型以上限制
                this.state.showTips = this.props.hideTips ? false : true;
                this.state.isSuccess = true;
                event_1.notify(event.node, 'ev-psw-change', { password: psw, success: true });
            } else {
                // 不符合规则限制
                event_1.notify(event.node, 'ev-psw-change', { password: psw, success: false });
            }
            this.state.secret = secret > 3 ? 3 : secret; // 只有三种强度水平显示
            this.paint();
        }
    }, {
        key: "pswBlur",
        value: function pswBlur() {
            if (!this.state.password) {
                this.state.showTips = false;
                this.state.showIcon = false;
            }
            this.paint();
        }
        /**
         * 选中输入框后图标切换
         */

    }, {
        key: "iconChange",
        value: function iconChange() {
            if (this.state.password !== '') {
                this.state.showIcon = true;
            } else {
                this.state.showIcon = false;
            }
            this.paint();
        }
        /**
         * 情况输入框
         */

    }, {
        key: "clear",
        value: function clear(event) {
            this.state.password = '';
            this.state.secret = 0;
            this.state.showIcon = false;
            event_1.notify(event.node, 'ev-psw-clear', {});
            this.paint(true);
        }
        /**
         * 判断密码强度
         * @param psw 密码
         */

    }, {
        key: "strongJudge",
        value: function strongJudge(psw) {
            var reg1 = /[0-9]+/;
            var reg2 = /[a-z]+/;
            var reg3 = /[A-Z]+/;
            var reg4 = /[!"#$%&'()*+,\-./:;<=>?@\[\]^_`{\|}~]+/; // 特殊字符集
            var num = 0;
            if (reg1.test(psw)) {
                num++;
            }
            if (reg2.test(psw)) {
                num++;
            }
            if (reg3.test(psw)) {
                num++;
            }
            if (reg4.test(psw)) {
                num++;
            }
            return num;
        }
    }]);

    return ImgRankItem;
}(widget_1.Widget);

exports.ImgRankItem = ImgRankItem;
})