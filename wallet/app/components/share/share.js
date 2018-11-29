_$define("app/components/share/share", function (require, exports, module){
"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * fund share Page
 */
var shareToPlatforms_1 = require("../../../pi/browser/shareToPlatforms");
var widget_1 = require("../../../pi/widget/widget");
var lang_1 = require("../../../pi/util/lang");

var BaseShare = function (_widget_1$Widget) {
    _inherits(BaseShare, _widget_1$Widget);

    function BaseShare() {
        _classCallCheck(this, BaseShare);

        return _possibleConstructorReturn(this, (BaseShare.__proto__ || Object.getPrototypeOf(BaseShare)).apply(this, arguments));
    }

    _createClass(BaseShare, [{
        key: "setProps",
        value: function setProps(props, oldProps) {
            _get(BaseShare.prototype.__proto__ || Object.getPrototypeOf(BaseShare.prototype), "setProps", this).call(this, props, oldProps);
            this.language = this.config.value[lang_1.getLang()];
            this.state = {};
            if (this.props.shareType !== shareToPlatforms_1.ShareToPlatforms.TYPE_TEXT) {
                this.state.isShowQQ = true;
                this.state.showCount = 4;
            } else {
                this.state.isShowQQ = false;
                this.state.showCount = 3;
            }
        }
    }, {
        key: "backPrePage",
        value: function backPrePage() {
            this.cancel && this.cancel(false);
        }
    }, {
        key: "shareToWechat",
        value: function shareToWechat() {
            this.baseShare(shareToPlatforms_1.ShareToPlatforms.PLATFORM_WEBCHAT);
        }
    }, {
        key: "shareToFriends",
        value: function shareToFriends() {
            this.baseShare(shareToPlatforms_1.ShareToPlatforms.PLATFORM_MOMENTS);
        }
    }, {
        key: "shareToQQ",
        value: function shareToQQ() {
            this.baseShare(shareToPlatforms_1.ShareToPlatforms.PLATFORM_QQ);
        }
    }, {
        key: "shareToQQSpace",
        value: function shareToQQSpace() {
            this.baseShare(shareToPlatforms_1.ShareToPlatforms.PLATFORM_QZONE);
        }
    }, {
        key: "baseShare",
        value: function baseShare(platform) {
            var _this2 = this;

            var stp = new shareToPlatforms_1.ShareToPlatforms();
            stp.init();
            if (this.props.shareType === shareToPlatforms_1.ShareToPlatforms.TYPE_LINK) {
                stp.shareLink({
                    success: function success(result) {
                        _this2.ok(true);
                    },
                    fail: function fail(result) {
                        _this2.cancel(false);
                    },
                    webName: this.props.webName || this.language.wallet,
                    url: this.props.url,
                    title: this.props.title,
                    content: this.props.content,
                    comment: this.props.comment || '',
                    platform: platform
                });
            } else if (this.props.shareType === shareToPlatforms_1.ShareToPlatforms.TYPE_SCREEN) {
                stp.shareScreenShot({
                    success: function success(result) {
                        _this2.ok(true);
                    },
                    fail: function fail(result) {
                        _this2.cancel(false);
                    },
                    platform: platform
                });
            } else {
                console.log('share text====', this.props.text);
                console.log('share type====', this.props.shareType);
                stp.shareCode({
                    success: function success(result) {
                        _this2.ok(true);
                    },
                    fail: function fail(result) {
                        _this2.cancel(false);
                    },
                    content: this.props.text,
                    type: this.props.shareType,
                    platform: platform
                });
            }
        }
    }]);

    return BaseShare;
}(widget_1.Widget);

exports.BaseShare = BaseShare;
})