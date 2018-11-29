_$define("pi/browser/webViewHelper", function (require, exports, module){
"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

Object.defineProperty(exports, "__esModule", { value: true });
var native_1 = require("./native");

var WebViewHelper = function (_native_1$NativeObjec) {
    _inherits(WebViewHelper, _native_1$NativeObjec);

    function WebViewHelper() {
        _classCallCheck(this, WebViewHelper);

        return _possibleConstructorReturn(this, (WebViewHelper.__proto__ || Object.getPrototypeOf(WebViewHelper)).apply(this, arguments));
    }

    _createClass(WebViewHelper, [{
        key: "open",
        value: function open(param) {
            this.call("openNewWebView", param);
        }
    }]);

    return WebViewHelper;
}(native_1.NativeObject);

exports.WebViewHelper = WebViewHelper;
/**
 * 注册方法名和参数-->新开一个WebView
 */
native_1.registerSign(WebViewHelper, {
    openNewWebView: [{
        name: "loadUrl",
        type: native_1.ParamType.String
    }, {
        name: "title",
        type: native_1.ParamType.String
    }]
});
})