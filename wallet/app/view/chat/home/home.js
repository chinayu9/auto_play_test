_$define("app/view/chat/home/home", function (require, exports, module){
"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

Object.defineProperty(exports, "__esModule", { value: true });
var root_1 = require("../../../../pi/ui/root");
var lang_1 = require("../../../../pi/util/lang");
var forelet_1 = require("../../../../pi/widget/forelet");
var widget_1 = require("../../../../pi/widget/widget");
var memstore_1 = require("../../../store/memstore");
var pull_1 = require("../../../net/pull");
exports.forelet = new forelet_1.Forelet();
exports.WIDGET_NAME = module.id.replace(/\//g, '-');

var PlayHome = function (_widget_1$Widget) {
    _inherits(PlayHome, _widget_1$Widget);

    function PlayHome() {
        _classCallCheck(this, PlayHome);

        var _this = _possibleConstructorReturn(this, (PlayHome.__proto__ || Object.getPrototypeOf(PlayHome)).apply(this, arguments));

        _this.props = {
            refresh: false,
            avatar: ''
        };
        return _this;
    }

    _createClass(PlayHome, [{
        key: "setProps",
        value: function setProps(props) {
            _get(PlayHome.prototype.__proto__ || Object.getPrototypeOf(PlayHome.prototype), "setProps", this).call(this, props);
            var userInfo = pull_1.getUserInfo();
            if (userInfo) {
                this.props.avatar = userInfo.avatar ? userInfo.avatar : '../../res/image1/default_avatar.png';
                this.props.refresh = false;
            }
        }
    }, {
        key: "showMine",
        value: function showMine() {
            root_1.popNew('app-view-mine-home-home');
        }
        /**
         * 刷新页面
         */

    }, {
        key: "refreshPage",
        value: function refreshPage() {
            var _this2 = this;

            this.props.refresh = true;
            this.paint();
            setTimeout(function () {
                _this2.props.refresh = false;
                _this2.paint();
            }, 1000);
        }
    }, {
        key: "login",
        value: function login() {
            var content = { zh_Hans: '敬请期待', zh_Hant: '敬請期待', en: '' };
            root_1.popNew('app-components-message-message', { content: content[lang_1.getLang()] });
        }
    }]);

    return PlayHome;
}(widget_1.Widget);

exports.PlayHome = PlayHome;
memstore_1.register('user/info', function () {
    var w = exports.forelet.getWidget(exports.WIDGET_NAME);
    if (w) {
        var userInfo = pull_1.getUserInfo();
        if (userInfo) {
            w.props.avatar = userInfo.avatar ? userInfo.avatar : '../../res/image1/default_avatar.png';
        }
        w.paint();
    }
});
})