_$define("pi/widget/resize/resize", function (require, exports, module){
"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.resize = function (option, cb) {
    var canvas = document.createElement('canvas');
    var context = canvas.getContext('2d');
    var img = new Image();
    img.crossOrigin = '';
    img.onload = function () {
        var scale = img.width < img.height ? option.width / img.width : option.width / img.height;
        scale = scale < 1 ? scale : 1;
        canvas.width = img.width * scale;
        canvas.height = img.height * scale;
        context.drawImage(img, 0, 0, img.width, img.height, 0, 0, canvas.width, canvas.height);
        var base64 = null;
        if (option.type == "jpeg") {
            base64 = canvas.toDataURL("image/" + option.type, option.ratio || 0.92);
        } else {
            base64 = canvas.toDataURL("image/" + option.type);
        }
        var mimeString = base64.split(',')[0].split(':')[1].split(';')[0]; // mime类型
        var byteString = atob(base64.split(',')[1]); //base64 解码
        var arrayBuffer = new ArrayBuffer(byteString.length); //创建缓冲数组
        var intArray = new Uint8Array(arrayBuffer); //创建视图
        for (var i = 0; i < byteString.length; i += 1) {
            intArray[i] = byteString.charCodeAt(i);
        }
        if (cb) cb({ base64: base64, ab: arrayBuffer });
    };
    img.src = option.url;
};
})