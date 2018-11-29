_$define("app/net/pull3", function (require, exports, module){
"use strict";

var __awaiter = undefined && undefined.__awaiter || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
            try {
                step(generator.next(value));
            } catch (e) {
                reject(e);
            }
        }
        function rejected(value) {
            try {
                step(generator["throw"](value));
            } catch (e) {
                reject(e);
            }
        }
        function step(result) {
            result.done ? resolve(result.value) : new P(function (resolve) {
                resolve(result.value);
            }).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
var constants_1 = require("../utils/constants");
var tools_1 = require("../utils/tools");
var config_1 = require("../config");
// ==========================三方接口=======================================
/**
 * 获取第三方数据
 */
exports.getThirdFromServer = function (url) {
    return __awaiter(undefined, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        var key, xorEncodeUrl, date, timestamp, realUrl;
        return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
                switch (_context.prev = _context.next) {
                    case 0:
                        key = '123';
                        xorEncodeUrl = tools_1.xorEncode(url, key);
                        date = new Date();

                        if (date.getSeconds() >= 30) {
                            date.setMinutes(date.getMinutes() + 1);
                        } else {
                            date.setSeconds(0);
                        }
                        timestamp = parseInt((date.getTime() / 1000).toString());
                        realUrl = config_1.thirdUrlPre + "?key=" + key + "&url=" + xorEncodeUrl + "&timestamp=" + timestamp;
                        // console.log(realUrl);

                        return _context.abrupt("return", fetch(realUrl).then(function (res) {
                            return res.json();
                        }));

                    case 7:
                    case "end":
                        return _context.stop();
                }
            }
        }, _callee, this);
    }));
};
// http://api.k780.com/?app=finance.rate&scur=USD&tcur=CNY&appkey=10003&sign=b59bc3ef6191eb9f747dd4e83c99f2a4 测试
// http://api.k780.com/?app=finance.rate&scur=USD&tcur=CNY&appkey=37223&sign=7987216e841c32aa08d0ea0dcbf65eed
// https://api.huobipro.com/market/history/kline?symbol=btcusdt&period=1day&size=1&AccessKeyId=6fd70042-c5e4c618-d6e619ec-ecfa2
// 获取美元对人民币汇率
exports.fetchUSD2CNYRate = function () {
    var sign = '2ce17bfdcb19060cac834341e493c5e1';
    var appkey = '38071';
    var url = "http://api.k780.com/?app=finance.rate&scur=USD&tcur=CNY&appkey=" + appkey + "&sign=" + sign;
    return exports.getThirdFromServer(url).then(function (res) {
        var str = tools_1.xorDecode1(res.value, res.pk);
        return JSON.parse(str);
    });
};
/**
 * 获取货币对比USDT的比率
 */
exports.fetchCurrency2USDTRate = function (currencyName) {
    // https://www.okex.com/api/v1/kline.do?symbol=ltc_btc&type=1min&size=1
    // tslint:disable-next-line:no-reserved-keywords
    var symbol = currencyName.toLowerCase() + "_usdt";
    var url = "https://www.okex.com/api/v1/kline.do?symbol=" + symbol + "&type=1day&size=1";
    return exports.getThirdFromServer(url).then(function (res) {
        var str = tools_1.xorDecode1(res.value, res.pk);
        return JSON.parse(str);
    });
};
// ======================================================================
/**
 * 获取货币对比USDT的比率
 */
exports.shapeshiftMarketinfo = function () {
    var url = "https://shapeshift.io/marketinfo/btc_ltc";
    return fetch(url).then(function (res) {
        return res.json();
    }).then(function (json) {
        console.log('shapeshiftMarketinfo------', json);
    });
};
exports.shapeshiftShift = function () {
    var url = "https://cors.shapeshift.io/shift";
    var data = {
        withdrawal: '0x5041F19dC1659E33848cc0f77cbF7447de562917',
        pair: 'btc_eth',
        apiKey: constants_1.shapeshiftApiPublicKey
    };
    // return fetch(url, {
    //     body:data,
    //     headers: {
    //         'Content-Type': 'application/json',
    //         Authorization:'Bearer CZfRLxjor2E49vTfTZDjaeeR78nMMi1rKypV9GRBsmt2'
    //     },
    //     method: 'POST',
    //     mode:'cors'
    // }).then(res => res.json()).then(json => {
    //     console.log('shapeshiftShift------',json);
    // });
};
})