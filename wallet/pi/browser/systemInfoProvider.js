_$define("pi/browser/systemInfoProvider", function (require, exports, module){
"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

Object.defineProperty(exports, "__esModule", { value: true });
var native_1 = require("./native");
/**
 * 获取设备系统的信息
 */

var SystemInfoProvider = function (_native_1$NativeObjec) {
  _inherits(SystemInfoProvider, _native_1$NativeObjec);

  function SystemInfoProvider() {
    _classCallCheck(this, SystemInfoProvider);

    return _possibleConstructorReturn(this, (SystemInfoProvider.__proto__ || Object.getPrototypeOf(SystemInfoProvider)).apply(this, arguments));
  }

  _createClass(SystemInfoProvider, [{
    key: "getDeviceInfo",

    /**
     * 调用底层获取设备的系统信息
     * @param param 我也不知道这个参数的干嘛的……反正要传
     */
    value: function getDeviceInfo(param) {
      this.call('getSystemInfo', param);
    }
  }]);

  return SystemInfoProvider;
}(native_1.NativeObject);

exports.SystemInfoProvider = SystemInfoProvider;
/**
 * 获取设备weiyi的信息
 */

var DeviceIdProvider = function (_native_1$NativeObjec2) {
  _inherits(DeviceIdProvider, _native_1$NativeObjec2);

  function DeviceIdProvider() {
    _classCallCheck(this, DeviceIdProvider);

    return _possibleConstructorReturn(this, (DeviceIdProvider.__proto__ || Object.getPrototypeOf(DeviceIdProvider)).apply(this, arguments));
  }

  _createClass(DeviceIdProvider, [{
    key: "getDriverId",

    /**
     * 调用底层获取设备的唯一id
     * @param param 我也不知道这个参数的干嘛的……反正要传
     */
    value: function getDriverId(param) {
      this.call('getUUId', param);
    }
  }]);

  return DeviceIdProvider;
}(native_1.NativeObject);

exports.DeviceIdProvider = DeviceIdProvider;
/**
 * 注册方法名和参数-->设备系统信息
 */
native_1.registerSign(SystemInfoProvider, {
  getSystemInfo: []
});
/**
 * 注册方法名和参数-->设备系统信息
 */
native_1.registerSign(DeviceIdProvider, {
  getUUId: []
});
})