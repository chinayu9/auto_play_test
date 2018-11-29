_$define("app/utils_pc/argon2", function (require, exports, module){
"use strict";
/**
 *
 */

Object.defineProperty(exports, "__esModule", { value: true });
var argon2_asm_min_1 = require("./argon2-asm.min");
/**
 *
 * @param password 口令
 * @param salt 盐
 * @param time 迭代次数{int}
 * @param memory 内存，单位为KB{int}
 * @param hashLen 计算结果的长度，单位：字节{int}
 * @param parallelism 并行数{int}
 * @param type Argon2d为0，Argon2i为1，Argon2id为2{int}
 * @return hash对应的16进制字符串
 */
exports.getArgonHash = function () {
    var password = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'password';
    var salt = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'somesalt';
    var time = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;
    var memory = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 1024;
    var hashLen = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 32;
    var parallelism = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 1;
    var iType = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : 0;

    // tslint:disable-next-line:prefer-array-literal
    var hash = argon2_asm_min_1.Module.allocate(new Array(hashLen), 'i8', argon2_asm_min_1.Module.ALLOC_NORMAL);
    var encodedLen = 512;
    // tslint:disable-next-line:prefer-array-literal
    var encoded = argon2_asm_min_1.Module.allocate(new Array(encodedLen), 'i8', argon2_asm_min_1.Module.ALLOC_NORMAL);
    var saltImpl = allocateArray(salt);
    var passwordImpl = allocateArray(password);
    var err = void 0;
    var res = void 0;
    try {
        var version = 0x13;
        res = argon2_asm_min_1.Module._argon2_hash(time, memory, parallelism, passwordImpl, password.length, saltImpl, salt.length, hash, hashLen, encoded, encodedLen, iType, version);
    } catch (e) {
        err = e;
    }
    var result = void 0;
    if (res === 0 && !err) {
        var hashArr = [];
        for (var i = hash; i < hash + hashLen; i++) {
            hashArr.push(argon2_asm_min_1.Module.HEAP8[i]);
        }
        result = hashArr.map(function (elem) {
            return ("0" + (elem & 0xFF).toString(16)).slice(-2);
        }).join('');
    } else {
        try {
            if (!err) {
                err = argon2_asm_min_1.Module.Pointer_stringify(argon2_asm_min_1.Module._argon2_error_message(res));
                throw new Error(err);
            }
        } catch (e) {
            throw new Error("getArgonHash asm error = " + e.message);
        }
    }
    try {
        argon2_asm_min_1.Module._free(passwordImpl);
        argon2_asm_min_1.Module._free(saltImpl);
        argon2_asm_min_1.Module._free(hash);
        argon2_asm_min_1.Module._free(encoded);
    } catch (e) {
        throw new Error("getArgonHash asm free error = " + e.message);
    }
    return result;
};
var allocateArray = function allocateArray(strOrArr) {
    var arr = strOrArr instanceof Uint8Array || strOrArr instanceof Array ? strOrArr : argon2_asm_min_1.Module.intArrayFromString(strOrArr);
    return argon2_asm_min_1.Module.allocate(arr, 'i8', argon2_asm_min_1.Module.ALLOC_NORMAL);
};
})