_$define("app/core/genmnemonic", function (require, exports, module){
"use strict";
/**
 * Generate the same mnemonics
 */

Object.defineProperty(exports, "__esModule", { value: true });
var bip39_1 = require("./thirdparty/bip39");
var sample_ecdsa_1 = require("./thirdparty/sample-ecdsa");
var web3_min_1 = require("./thirdparty/web3.min");
var wordlist_1 = require("./thirdparty/wordlist");
exports.generate = function (language, strength) {
    if (strength < 128 && strength % 32 !== 0) {
        throw new Error('Strength should be greater or equal to 128 and divided by 32');
    }
    var mn = new bip39_1.Mnemonic(language);
    return mn.generate(strength);
};
/**
 * 获取系统随机值
 */
exports.generateRandomValues = function (strength) {
    if (strength < 128 && strength % 32 !== 0) {
        throw new Error('Strength should be greater or equal to 128 and divided by 32');
    }
    strength = strength || 128;
    var r = strength % 32;
    if (r > 0) {
        throw new Error("Strength should be divisible by 32, but it is not (" + r + ").");
    }
    var hasStrongCrypto = 'crypto' in window && window.crypto !== null;
    if (!hasStrongCrypto) {
        throw new Error('Mnemonic should be generated with strong randomness, but crypto.getRandomValues is unavailable');
    }
    var buffer = new Uint8Array(strength / 8);
    return crypto.getRandomValues(buffer);
};
/**
 * 随机值转助记词
 * @param language 语言
 * @param randomValues 随机数
 */
exports.toMnemonic = function (language, randomValues) {
    var mn = new bip39_1.Mnemonic(language);
    return mn.toMnemonic(randomValues);
};
/**
 * 助记词转种子
 * @param language 语言
 * @param mnemonic 助记词
 */
exports.toSeed = function (language, mnemonic) {
    var mn = new bip39_1.Mnemonic(language);
    return mn.toSeed(mnemonic);
};
/**
 * 通过固定hash生成助记词
 */
exports.generateByHash = function (hash) {
    if (hash.length % 32 !== 0) {
        throw new Error('Strength should be greater or equal to 128 and divided by 32');
    }
    return str2arr(hash);
};
/**
 * sha3加密
 *
 * @param str 数据
 */
exports.sha3 = function (str, isHex) {
    var web3 = new web3_min_1.Web3();
    if (isHex) {
        return web3.sha3(str, { encoding: 'hex' }).slice(2);
    } else {
        return web3.sha3(str).slice(2);
    }
};
/**
 * 通过助记词，获得随机数
 */
exports.getRandomValuesByMnemonic = function (language, mnemonic) {
    mnemonic = splitWords(mnemonic);
    if (mnemonic.length === 0 || mnemonic.length % 3 > 0) {
        throw new Error('mnemonic invalid');
    }
    var idx = [];
    var wordlist = wordlist_1.WORDLISTS[language];
    for (var i = 0; i < mnemonic.length; i++) {
        var word = mnemonic[i];
        var wordIndex = wordlist.indexOf(word);
        if (wordIndex === -1) {
            throw new Error('mnemonic invalid');
        }
        var binaryIndex = zfill(wordIndex.toString(2), 11);
        idx.push(binaryIndex);
    }
    var b = idx.join('');
    var d = b.substring(0, b.length / 33 * 32);
    var nd = binaryStringToWordArray(d);
    return new Uint8Array(wordArrayToByteArray(nd));
};
/**
 * 签名
 */
exports.sign = function (random, privateKey) {
    console.log(sample_ecdsa_1.KJUR, sample_ecdsa_1.KJUR.jws.JWS.jwsalg2sigalg);
    var sig = new sample_ecdsa_1.KJUR.crypto.Signature({ alg: sample_ecdsa_1.KJUR.jws.JWS.jwsalg2sigalg.ES256 });
    sig.init({ d: privateKey, curve: 'secp256k1' });
    sig.updateString(random);
    return sig.sign();
    // const secKey = sjcl.bn.fromBits(sjcl.codec.hex.toBits(privateKey));
    // // FIXME: magicl number 6
    // const ec = new sjcl.ecc.ecdsa.generateKeys(sjcl.ecc.curves.k256, 6, secKey);
    // const randomHash = sjcl.codec.hex.fromBits(sjcl.hash.sha256.hash(random));
    // const sign = ec.sec.sign(randomHash);
    // // console.log(sjcl.ecc.curves.k256);
    // //  new sjcl.ecc.curve(sjcl.bn.prime.p256k, random, 0, 7, privateKey);
    // return sjcl.codec.hex.fromBits(sign);
    // // return u8ArrayToHexstr(new Uint8Array(new Uint32Array(sign).buffer));
};
/**
 * 字符串转u8Arr
 *
 * @param str 输入字符串
 */
var str2arr = function str2arr(str) {
    var buf = new ArrayBuffer(str.length / 2); // 2 bytes for each char
    var bufView = new Uint8Array(buf);
    for (var i = 0; i < str.length / 2; i++) {
        bufView[i] = (str.charCodeAt(i * 2) & 0xff) << 8 | str.charCodeAt(i * 2 + 1) & 0xff;
    }
    return new Uint8Array(buf);
};
var splitWords = function splitWords(mnemonic) {
    return mnemonic.split(/\s/g).filter(function (x) {
        return x.length;
    });
};
var zfill = function zfill(source, length) {
    source = source.toString();
    while (source.length < length) {
        source = "0" + source;
    }
    return source;
};
var binaryStringToWordArray = function binaryStringToWordArray(binary) {
    var aLen = binary.length / 32;
    var a = [];
    for (var i = 0; i < aLen; i++) {
        var valueStr = binary.substring(0, 32);
        var value = parseInt(valueStr, 2);
        a.push(value);
        binary = binary.slice(32);
    }
    return a;
};
var wordArrayToByteArray = function wordArrayToByteArray(data) {
    var a = [];
    for (var i = 0; i < data.length; i++) {
        a.push(data[i] >> 8 * 3);
        a.push(data[i] >> 8 * 2 & 255);
        a.push(data[i] >> 8 * 1 & 255);
        a.push(data[i] & 255);
    }
    return a;
};
/**
 * yuqiang
 * 判断助记词是否合法
 *
 */
exports.isValidMnemonic = function (language, mnemonic) {
    mnemonic = splitWords(mnemonic);
    if (mnemonic.length === 0 || mnemonic.length % 3 > 0) {
        return false;
    }
    var wordlist = wordlist_1.WORDLISTS[language];
    for (var i = 0; i < mnemonic.length; i++) {
        var word = mnemonic[i];
        var wordIndex = wordlist.indexOf(word);
        if (wordIndex === -1) {
            return false;
        }
    }
    return true;
};
})