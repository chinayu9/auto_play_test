_$define("app/core/eth/helper", function (require, exports, module){
"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Helper functions
 */
var web3_min_1 = require("../thirdparty/web3.min");
var web3 = void 0;
/*
 * All the helper functions are wrapped from web3.js
 * Docs: https://github.com/ethereum/wiki/wiki/JavaScript-API
 *
 */
exports.toWei = function (amt, unit) {
    initWeb3();
    return web3.toWei(amt, unit);
};
exports.fromWei = function (amt, unit) {
    initWeb3();
    return web3.fromWei(amt, unit);
};
exports.isAddress = function (hexString) {
    initWeb3();
    return web3.isAddress(hexString);
};
exports.toAscii = function (hexString) {
    initWeb3();
    return web3.toAscii(hexString);
};
exports.fromAscii = function (str, padding) {
    initWeb3();
    return web3.fromAscii(str, padding);
};
/**
 * iban转标准eth地址
 */
exports.ibanToAddress = function (addr) {
    var i = new web3.eth.iban(addr);
    return "0x" + i.address();
};
/**
 * eth转iban地址
 */
exports.addrToIban = function (addr) {
    initWeb3();
    return web3.eth.iban.fromEthereumAddress(addr);
};
/**
 * 地址是否是有效的iban地址
 */
exports.isValidIban = function (addr) {
    initWeb3();
    return web3.eth.iban.isValid(addr);
};
var initWeb3 = function initWeb3() {
    if (!web3) {
        web3 = new web3_min_1.Web3();
    }
};
})