_$define("pi/util/lang", function (require, exports, module){
"use strict";
/**
 * 多语言模块
 */

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

Object.defineProperty(exports, "__esModule", { value: true });
// ============================== 导出
/**
 * @description 多语言字符串，必须由UI组件使用
 * @example
 */

var LangStr = function LangStr() {
  _classCallCheck(this, LangStr);
};

exports.LangStr = LangStr;
/**
 * @description 设置当前的显示语言
 * @example
 */
exports.setLang = function (str) {
  curLang = str;
  for (var _iterator = langListeners, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator]();;) {
    var _ref;

    if (_isArray) {
      if (_i >= _iterator.length) break;
      _ref = _iterator[_i++];
    } else {
      _i = _iterator.next();
      if (_i.done) break;
      _ref = _i.value;
    }

    var f = _ref;

    f(str);
  }
};
/**
 * @description 获得当前的显示语言
 * @example
 */
exports.getLang = function () {
  return curLang;
};
/**
 * @description 添加语言改变监听器
 * @example
 */
exports.addLangListener = function (cb) {
  langListeners.push(cb);
};
// ============================== 本地
// 当前语言 cn en fr
var curLang = 'en';
// 语言改变监听器
var langListeners = [];
})