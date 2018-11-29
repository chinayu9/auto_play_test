_$define("pi/browser/shareToPlatforms", function (require, exports, module){
"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * 分享
 */
var native_1 = require("./native");

var ShareToPlatforms = function (_native_1$NativeObjec) {
    _inherits(ShareToPlatforms, _native_1$NativeObjec);

    function ShareToPlatforms() {
        _classCallCheck(this, ShareToPlatforms);

        return _possibleConstructorReturn(this, (ShareToPlatforms.__proto__ || Object.getPrototypeOf(ShareToPlatforms)).apply(this, arguments));
    }

    _createClass(ShareToPlatforms, [{
        key: "shareCode",

        /**
         * 分享
         */
        value: function shareCode(param) {
            this.call('shareContent', param);
        }
        /**
         * 分享链接
         */

    }, {
        key: "shareLink",
        value: function shareLink(param) {
            this.call('shareLink', param);
        }
        /**
         * 生成截图
         */

    }, {
        key: "makeScreenShot",
        value: function makeScreenShot(param) {
            this.call('getScreenShot', param);
        }
        /**
         * 分享截图
         */

    }, {
        key: "shareScreenShot",
        value: function shareScreenShot(param) {
            this.call('shareScreen', param);
        }
    }]);

    return ShareToPlatforms;
}(native_1.NativeObject);

ShareToPlatforms.TYPE_IMG = 1; // 二维码图片
ShareToPlatforms.TYPE_TEXT = 2; // 文本
ShareToPlatforms.TYPE_LINK = 3; // 链接
ShareToPlatforms.TYPE_SCREEN = 4; // 截图
ShareToPlatforms.PLATFORM_DEFAULT = -1; // 默认
ShareToPlatforms.PLATFORM_WEBCHAT = 1; // 微信
ShareToPlatforms.PLATFORM_MOMENTS = 2; // 朋友圈
ShareToPlatforms.PLATFORM_QZONE = 3; // qq空间
ShareToPlatforms.PLATFORM_QQ = 4; // qq
exports.ShareToPlatforms = ShareToPlatforms;
native_1.registerSign(ShareToPlatforms, {
    shareContent: [{
        name: 'content',
        type: native_1.ParamType.String
    }, {
        name: 'type',
        type: native_1.ParamType.Number
    }, {
        name: 'platform',
        type: native_1.ParamType.Number
    }], shareLink: [{
        name: 'webName',
        type: native_1.ParamType.String
    }, {
        name: 'url',
        type: native_1.ParamType.String
    }, {
        name: 'title',
        type: native_1.ParamType.String
    }, {
        name: 'content',
        type: native_1.ParamType.String
    }, {
        name: 'comment',
        type: native_1.ParamType.String
    }, {
        name: 'platform',
        type: native_1.ParamType.Number
    }],
    getScreenShot: [],
    shareScreen: [{
        name: 'platform',
        type: native_1.ParamType.Number
    }]
});
})