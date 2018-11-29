_$define("pi/ui/langImg", function (require, exports, module){
"use strict";
/**
 * 多语言组件
 */

Object.defineProperty(exports, "__esModule", { value: true });
// ============================== 导入
var lang_1 = require("../util/lang");
var forelet_1 = require("../widget/forelet");
// ============================== 导出
/**
 * @description 导出组件Widget类
 * @example
 */
exports.forelet = new forelet_1.Forelet();
// ============================== 本地
// ============================== 立即执行
lang_1.addLangListener(function (langType) {
  exports.forelet.paint(langType);
});
exports.forelet.paint(lang_1.getLang());
})