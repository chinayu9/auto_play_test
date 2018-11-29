_$define("app/logic/native", function (require, exports, module){
"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var imagePicker_1 = require("../../pi/browser/imagePicker");
var qrcode_1 = require("../../pi/browser/qrcode");
var systemInfoProvider_1 = require("../../pi/browser/systemInfoProvider");
var webview_1 = require("../../pi/browser/webview");
var root_1 = require("../../pi/ui/root");
/**
 * 一些底层操作
 */
exports.selectImage = function (ok, cancel) {
    console.log('选择图片');
    var image = new imagePicker_1.ImagePicker();
    image.init();
    image.selectFromLocal({
        success: function success(width, height, result) {
            ok && ok(width, height, result);
            close && close.callback(close.widget);
        },
        fail: function fail(result) {
            cancel && cancel(result);
            close && close.callback(close.widget);
        },
        useCamera: 1,
        single: 1,
        max: 1
    });
    var close = void 0;
    setTimeout(function () {
        close = root_1.popNew('app-components1-loading-loading', { text: { zh_Hans: '导入中...', zh_Hant: '導入中...', en: '' } });
    }, 100);
};
/**
 * 从相机选择图片
 * @param ok 成功回调
 * @param cancel 失败回调
 */
// export const selectImage = (ok?,cancel?) => {
//     console.log('选择图片');
//     const image = new ImagePicker();
//     image.init();
//     image.selectFromLocal({
//         success: (path) => {
//             console.log('selectFromLocal-----',path);
//             ok && ok(path);
//             close && close.callback(close.widget);
//         },
//         fail: (result) => {
//             console.log('selectFromLocal-----',result);
//             cancel && cancel(result);
//             close && close.callback(close.widget);
//         },
//         useCamera: 1,
//         single: 1,
//         max: 1
//     });
//     let close;
//     setTimeout(() => {
//         close = popNew('app-components1-loading-loading', { text: '导入中...' });
//     },100);
// };
/**
 * 二维码扫描
 */
exports.doScanQrCode = function (ok, cancel) {
    var qrcode = new qrcode_1.QRCode();
    qrcode.init();
    qrcode.scan({
        success: function success(res) {
            ok && ok(res);
            console.log('scan-------------', res);
        },
        fail: function fail(r) {
            cancel && cancel();
            console.log("scan fail:" + r);
        }
    });
    qrcode.close({
        success: function success(r) {
            console.log("close result:" + r);
        }
    });
};
/**
 * 打开新网页
 */
exports.openNewActivity = function (url) {
    var title = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';

    webview_1.WebViewManager.open(title, url + "?" + Math.random(), title, '');
};
/**
 * 获取设备信息
 */
exports.getDeviceId = function (okCB, errCB) {
    var systemInfo = new systemInfoProvider_1.DeviceIdProvider();
    systemInfo.init();
    systemInfo.getDriverId({
        success: function success(result) {
            console.log('获取设备的唯一id成功\t' + result);
            okCB && okCB(result);
        },
        fail: function fail(result) {
            console.log('获取设备的唯一id失败\t' + result);
            errCB && errCB(result);
        }
    });
};
})