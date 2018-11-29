_$define("pi/bigint/util", function (require, exports, module){
"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * 大整数的工具类
 */
var bigInt = require("./biginteger");
// 将大整数转化为ArrayBuffer
exports.u64ToBuffer = function (n, littleEnd) {
    var i = 0;
    if (littleEnd) {
        var arr = new Uint32Array(2); // 小端序
        while (!n.isZero()) {
            var r = n.divmod(4294967296);
            arr[i] = r.remainder.value;
            n = r.quotient;
            i++;
        }
        return new Uint8Array(arr.buffer);
    } else {
        var buf = new ArrayBuffer(8);
        var view = new DataView(buf);
        while (!n.isZero()) {
            var _r = n.divmod(4294967296);
            view.setUint32(i * 4, _r.remainder.value);
            n = _r.quotient;
            i++;
        }
        return new Uint8Array(buf);
    }
};
// 将大整数转化为ArrayBuffer
exports.u128ToBuffer = function (n, littleEnd) {
    var i = 0;
    if (littleEnd) {
        var arr = new Uint32Array(4); // 小端序
        while (!n.isZero()) {
            var r = n.divmod(4294967296);
            arr[i] = r.remainder.value;
            n = r.quotient;
            i++;
        }
        return new Uint8Array(arr.buffer);
    } else {
        var buf = new ArrayBuffer(16);
        var view = new DataView(buf);
        while (!n.isZero()) {
            var _r2 = n.divmod(4294967296);
            view.setUint32(i * 4, _r2.remainder.value);
            n = _r2.quotient;
            i++;
        }
        return new Uint8Array(buf);
    }
};
exports.bufferToU64 = function (buf, littleEnd) {
    var i = 0;
    if (littleEnd) {
        var arr = new Uint32Array(buf.buffer); // 小端序
        return bigInt(arr[1]).multiply(0x100000000).add(bigInt(arr[0]));
    } else {
        var view = new DataView(buf.buffer);
        return bigInt(view.getUint32(0)).multiply(bigInt(0x100000000)).add(bigInt(view.getUint32(4)));
    }
};
exports.bufferToU128 = function (buf, littleEnd) {
    var i = 0;
    if (littleEnd) {
        var arr = new Uint32Array(buf.buffer); // 小端序
        // tslint:disable-next-line:max-line-length
        return bigInt(arr[3]).multiply(bigInt('0x1000000000000000000000000').add(bigInt(arr[2]).multiply(bigInt('0x10000000000000000')))).add(bigInt(arr[1]).multiply(bigInt('0x100000000'))).add(bigInt(arr[0]));
    } else {
        var view = new DataView(buf.buffer);
        // tslint:disable-next-line:max-line-length
        return bigInt(view.getUint32(0)).multiply(bigInt('0x1000000000000000000000000').add(bigInt(view.getUint32(4)).multiply(bigInt('0x10000000000000000')))).add(bigInt(view.getUint32(8)).multiply(bigInt('0x100000000'))).add(bigInt(view.getUint32(12)));
    }
};
exports.u64Unwrap = function (v) {
    if (typeof v.value === 'number' && v.value <= 9007199254740992) {
        return v.value;
    } else {
        return exports.u64ToBuffer(v, true);
    }
};
exports.u128Unwrap = function (v) {
    if (typeof v.value === 'number' && v.value <= 9007199254740992) {
        return v.value;
    } else {
        return exports.u128ToBuffer(v, true);
    }
};
exports.u64Merge = function (v) {
    if (typeof v === 'number') {
        return bigInt(v);
    } else {
        return exports.bufferToU64(v, true);
    }
};
exports.u128Merge = function (v) {
    if (typeof v === 'number') {
        return v.value;
    } else {
        return exports.bufferToU128(v, true);
    }
};
})