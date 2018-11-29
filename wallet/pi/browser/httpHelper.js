_$define("pi/browser/httpHelper", function (require, exports, module){
"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

Object.defineProperty(exports, "__esModule", { value: true });
var native_1 = require("./native");

var HttpHelper = function (_native_1$NativeObjec) {
    _inherits(HttpHelper, _native_1$NativeObjec);

    function HttpHelper() {
        _classCallCheck(this, HttpHelper);

        return _possibleConstructorReturn(this, (HttpHelper.__proto__ || Object.getPrototypeOf(HttpHelper)).apply(this, arguments));
    }

    _createClass(HttpHelper, [{
        key: "getConnection",
        value: function getConnection(param) {
            this.call("openGetConnection", param);
        }
    }, {
        key: "postConnection",
        value: function postConnection(param) {
            this.call("postGetConnection", param);
        }
    }]);

    return HttpHelper;
}(native_1.NativeObject);

exports.HttpHelper = HttpHelper;
native_1.registerSign(HttpHelper, {
    openGetConnection: [{
        name: "url",
        type: native_1.ParamType.String
    }],
    postGetConnection: [{
        name: "url",
        type: native_1.ParamType.String
    }, {
        name: "json",
        type: native_1.ParamType.String
    }]
});
})