_$define("app/utils/unitTools", function (require, exports, module){
"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * 单位转换工具类
 */
var config_1 = require("../config");
var bignumber_1 = require("../res/js/bignumber");
/**
 * 根据货币类型小单位转大单位
 */
exports.smallUnit2LargeUnit = function (currencyName, amount) {
    if (currencyName === 'ETH') {
        return exports.wei2Eth(parseInt(amount.toString()));
    } else if (currencyName === 'KT') {
        return exports.kpt2kt(parseInt(amount.toString()));
    } else if (currencyName === 'BTC') {
        return exports.sat2Btc(parseInt(amount.toString()));
    } else {
        // erc20
        return exports.ethTokenDivideDecimals(parseInt(amount.toString()), currencyName);
    }
};
/**
 * 根据货币类型大单位转小单位
 */
exports.largeUnit2SmallUnit = function (currencyName, amount) {
    if (currencyName === 'ETH') {
        return Number(exports.eth2Wei(amount)).toString(10);
    } else if (currencyName === 'KT') {
        return exports.kt2kpt(Number(amount)).toString(10);
    } else if (currencyName === 'BTC') {
        return exports.btc2Sat(Number(amount)).toString(10);
    } else {
        // erc20
        return Number(exports.ethTokenMultiplyDecimals(Number(amount), currencyName)).toString(10);
    }
};
/**
 * eth 2 wei
 */
exports.eth2Wei = function (amount) {
    var decimals = new bignumber_1.BigNumber('1000000000000000000');
    var balance = decimals.times(amount);
    return "0x" + balance.toString(16);
};
/**
 * wei 2 eth
 */
exports.wei2Eth = function (amount) {
    var decimals = bignumber_1.BigNumber('1000000000000000000');
    var wei = new bignumber_1.BigNumber(amount);
    var balance = wei.div(decimals);
    return Number(balance.toString(10));
};
/**
 * sat转btc
 */
exports.sat2Btc = function (num) {
    num = Number(num);
    return num / Math.pow(10, 8);
};
/**
 * btc转sat
 */
exports.btc2Sat = function (num) {
    num = Number(num);
    return Math.floor(num * Math.pow(10, 8));
};
/**
 * kpt转kt
 */
exports.kpt2kt = function (num) {
    num = Number(num);
    return num / Math.pow(10, 9);
};
/**
 * kt转kpt
 */
exports.kt2kpt = function (num) {
    num = Number(num);
    return Math.floor(num * Math.pow(10, 9));
};
/**
 * eth 代币除以精度计算
 */
exports.ethTokenDivideDecimals = function (amount, tokenName) {
    var decimals = bignumber_1.BigNumber(Math.pow(10, config_1.ERC20Tokens[tokenName].decimals));
    var bigNum = new bignumber_1.BigNumber(amount);
    var balance = bigNum.div(decimals);
    return Number(balance.toString(10));
};
/**
 * eth 代币乘以精度计算
 */
exports.ethTokenMultiplyDecimals = function (amount, tokenName) {
    var decimals = bignumber_1.BigNumber(Math.pow(10, config_1.ERC20Tokens[tokenName].decimals));
    var balance = decimals.times(amount);
    return "0x" + balance.toString(16);
};
})