_$define("app/utils/ahash", function (require, exports, module){
"use strict";
/**
 * 图片生成助记词
 */

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * 计算图片的average hash
 * @param pixels 图片像素，RGB或者RGBA
 * @param w 宽度(int)
 * @param h 高度(int)
 * @param channels 像素的通道数(int)
 * @return 8长度，表示图像hash(Uint8Array)
 */
exports.ahash = function (pixels, w, h, channels) {
    if (w < 16 || h < 16) {
        throw new Error('w, h invalid');
    }
    if (channels !== 1 && channels !== 3 && channels !== 4) {
        throw new Error('channels invalid');
    }
    if (!(pixels instanceof Uint8Array)) {
        throw new Error("pixels invalid, pixels.length = " + pixels.length + ", w = " + w + ", h = " + h + ", channels = " + channels);
    }
    var g = gray(pixels, w, h, channels);
    var s = resizeGray(g, w, h, 8, 8);
    var mean = getMean(s);
    var u = compareWithMean(s, mean);
    return toHexString(u);
};
/**
 * 彩色图 变 灰度图
 * @param pixels 图片像素，RGB或者RGBA
 * @param w 宽度(int)
 * @param h 高度(int)
 * @param channels 像素的通道数(int)
 */
var gray = function gray(pixels, w, h, channels) {
    if (channels === 1) {
        return new Uint8Array(pixels.length).set(pixels, 0);
    }
    var curr = 0;
    var result = new Uint8Array(w * h);
    for (var j = 0; j < h; ++j) {
        for (var i = 0; i < w; ++i) {
            var id = (w * j + i) * channels;
            var r = pixels[id];
            var g = pixels[id + 1];
            var b = pixels[id + 2];
            result[curr++] = Math.round(r * 0.299 + g * 0.587 + b * 0.114);
        }
    }
    return result;
};
/**
 * 取块中像素的平均值
 * @param grayPixels 灰度图的像素
 *
 */
var getBlockMean = function getBlockMean(grayPixels, w, startW, startH, endW, endH) {
    var sum = 0;
    var num = 0;
    for (var j = startH; j < endH; ++j) {
        for (var i = startW; i < endW; ++i) {
            ++num;
            sum += grayPixels[j * w + i];
        }
    }
    return Math.round(sum / num);
};
/**
 * 缩放灰度图
 * @param pixels 灰度图的像素
 * @param w 宽度{int}
 * @param h 高度{int}
 * @param wBlock 要缩放的宽度{int}
 * @param hBlock 要缩放的高度{int}
 * @return resize之后的像素数据
 */
var resizeGray = function resizeGray(pixels, w, h, wBlock, hBlock) {
    var numW = Math.floor(w / wBlock);
    var numH = Math.floor(h / hBlock);
    var r = new Uint8Array(wBlock * hBlock);
    for (var j = 0; j < hBlock; ++j) {
        for (var i = 0; i < wBlock; ++i) {
            r[j * wBlock + i] = getBlockMean(pixels, w, i * numW, j * numH, (i + 1) * numW, (j + 1) * numH);
        }
    }
    return r;
};
/**
 * 求平均数
 * @param data 数据
 * @return 平均数{int}
 */
var getMean = function getMean(data) {
    var sum = 0;
    for (var i = 0; i < data.length; ++i) {
        sum += data[i];
    }
    return Math.round(sum / data.length);
};
/**
 * 根据mean，比较pixels的每个元素，小于mean为0，大于mean为1
 * @param data 数据
 * @param  mean 标记{int}
 * @return 长度是data.length，表示计算出来的Hash
 */
var compareWithMean = function compareWithMean(data, mean) {
    var r = new Uint8Array(data.length);
    for (var i = 0; i < data.length; ++i) {
        r[i] = data[i] < mean ? 0 : 1;
    }
    return r;
};
/**
 * 将Uint8Array变16进制字符串
 * @param data 数据
 * @return 16进制字符串
 */
var toHexString = function toHexString(data) {
    var result = '';
    var str = data.reduce(function (last, curr) {
        return last += curr === 1 ? '1' : '0';
    }, '');
    for (var i = 0; i < str.length / 4; ++i) {
        var s = str.substr(i * 4, 4);
        result += parseInt(s, 2).toString(16);
    }
    return result;
};
})