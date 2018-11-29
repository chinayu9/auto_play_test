_$define("pi/browser/localLanguage", function (require, exports, module){
"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * 语言设置
 */
var native_1 = require("./native");
var appLanguageList;
(function (appLanguageList) {
    appLanguageList[appLanguageList["zh_Hans"] = 2] = "zh_Hans";
    appLanguageList[appLanguageList["zh_Hant"] = 3] = "zh_Hant";
})(appLanguageList = exports.appLanguageList || (exports.appLanguageList = {}));

var LocalLanguageMgr = function (_native_1$NativeObjec) {
    _inherits(LocalLanguageMgr, _native_1$NativeObjec);

    function LocalLanguageMgr() {
        _classCallCheck(this, LocalLanguageMgr);

        return _possibleConstructorReturn(this, (LocalLanguageMgr.__proto__ || Object.getPrototypeOf(LocalLanguageMgr)).apply(this, arguments));
    }

    _createClass(LocalLanguageMgr, [{
        key: "getAppLan",
        value: function getAppLan(param) {
            this.call('getAppLanguage', param);
        }
    }, {
        key: "setAppLan",
        value: function setAppLan(param) {
            this.call('setAppLanguage', param);
        }
    }, {
        key: "getSysLan",
        value: function getSysLan(param) {
            this.call('getSystemLanguage', param);
        }
    }]);

    return LocalLanguageMgr;
}(native_1.NativeObject);

exports.LocalLanguageMgr = LocalLanguageMgr;
native_1.registerSign(LocalLanguageMgr, {
    getAppLanguage: [],
    setAppLanguage: [{
        param: 'language',
        type: native_1.ParamType.Number
    }],
    getSystemLanguage: []
});
})