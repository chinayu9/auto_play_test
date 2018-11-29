_$define("app/store/filestore", function (require, exports, module){
"use strict";
/**
 * 处理localStorage和indexDb上的数据
 */
// ===================================================== 导入

Object.defineProperty(exports, "__esModule", { value: true });
var mod = pi_modules.store.exports;
var impl = mod.create('wallet', 'store');
var initSuccess = false;
/**
 * indexDb初始化
 */
exports.initFileStore = function () {
    return new Promise(function (resolve, reject) {
        mod.init(impl, function () {
            initSuccess = true;
            resolve();
        }, function () {
            reject();
        });
    });
};
/**
 * 往indexdb写数据
 */
exports.writeFile = function (key, data, okCB, errCB) {
    if (!initSuccess) return;
    mod.write(impl, key, data, okCB, errCB);
};
/**
 * 从indexdb读数据
 */
exports.getFile = function (key, okCB, errCB) {
    if (!initSuccess) return;
    mod.read(impl, key, okCB, errCB);
};
/**
 * 从indexDb删除数据
 */
exports.deleteFile = function (key, okCB, errCB) {
    if (!initSuccess) return;
    mod.delete(impl, key, okCB, errCB);
};
/**
 * 往localStorage写数据
 */
exports.setLocalStorage = function (key, data) {
    localStorage.setItem(key, JSON.stringify(data));
};
/**
 * 从localStorage读数据
 */
exports.getLocalStorage = function (key) {
    var defaultValue = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : undefined;

    return JSON.parse(localStorage.getItem(key)) || defaultValue;
};
})