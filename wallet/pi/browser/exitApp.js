_$define("pi/browser/exitApp", function (require, exports, module){
"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * 最终返回
 */
var native_1 = require("./native");

var ExitApp = function (_native_1$NativeObjec) {
    _inherits(ExitApp, _native_1$NativeObjec);

    function ExitApp() {
        _classCallCheck(this, ExitApp);

        return _possibleConstructorReturn(this, (ExitApp.__proto__ || Object.getPrototypeOf(ExitApp)).apply(this, arguments));
    }

    _createClass(ExitApp, [{
        key: "exitApplication",
        value: function exitApplication(param) {
            this.call('confirmExit', param);
        }
    }, {
        key: "ToHome",
        value: function ToHome(param) {
            this.call('backToHome', param);
        }
    }]);

    return ExitApp;
}(native_1.NativeObject);

exports.ExitApp = ExitApp;
native_1.registerSign(ExitApp, {
    confirmExit: [],
    backToHome: []
});
// let exit = new ExitApp();
//         exit.init();
//         exit.exitApplication({
//             success: (result) => {
//             }
//             , fail: (result) => {
//             }
//         })
})