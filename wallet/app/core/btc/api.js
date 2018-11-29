_$define("app/core/btc/api", function (require, exports, module){
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
/**
 * Api v2
 */
var config_1 = require("../../config");
var config_2 = require("../config");
/* tslint:disable:no-var-keyword */
if (config_2.config.dev_mode === config_1.DevMode.Prod) {
    var BTC_API_BASE_URL = config_2.config[config_1.DevMode.Prod].BtcApiBaseUrl;
    var BTC_MARKET_PRICE_ORACLE_URL = config_2.config[config_1.DevMode.Prod].BtcMarketPriceOracleUrl;
} else {
    BTC_API_BASE_URL = config_2.config[config_1.DevMode.Ropsten].BtcApiBaseUrl;
    BTC_MARKET_PRICE_ORACLE_URL = config_2.config[config_1.DevMode.Ropsten].BtcMarketPriceOracleUrl;
}
var sendRequest = function sendRequest(endpoint) {
    var opt = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : { method: 'GET' };
    return __awaiter(undefined, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        var response;
        return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
                switch (_context.prev = _context.next) {
                    case 0:
                        opt.method = opt.method || 'GET';
                        _context.prev = 1;
                        response = void 0;

                        if (!(opt.method === 'GET')) {
                            _context.next = 9;
                            break;
                        }

                        _context.next = 6;
                        return fetch(endpoint);

                    case 6:
                        response = _context.sent;
                        _context.next = 13;
                        break;

                    case 9:
                        if (!(opt.method === 'POST')) {
                            _context.next = 13;
                            break;
                        }

                        _context.next = 12;
                        return fetch(endpoint, {
                            method: opt.method,
                            body: JSON.stringify({ rawtx: opt.body }),
                            headers: {
                                'Content-Type': 'application/json'
                            }
                        });

                    case 12:
                        response = _context.sent;

                    case 13:
                        _context.next = 15;
                        return response.json();

                    case 15:
                        return _context.abrupt("return", _context.sent);

                    case 18:
                        _context.prev = 18;
                        _context.t0 = _context["catch"](1);

                        Promise.reject(_context.t0);

                    case 21:
                    case "end":
                        return _context.stop();
                }
            }
        }, _callee, this, [[1, 18]]);
    }));
};
exports.BtcApi = {
    getAddrUnspent: function getAddrUnspent(addr) {
        return __awaiter(undefined, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
            var endpoint;
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                    switch (_context2.prev = _context2.next) {
                        case 0:
                            endpoint = BTC_API_BASE_URL + "/addr/" + addr + "/utxo";
                            return _context2.abrupt("return", sendRequest(endpoint));

                        case 2:
                        case "end":
                            return _context2.stop();
                    }
                }
            }, _callee2, this);
        }));
    },
    getBalance: function getBalance(addr) {
        var option = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'balance';
        return __awaiter(undefined, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
            var endpoint;
            return regeneratorRuntime.wrap(function _callee3$(_context3) {
                while (1) {
                    switch (_context3.prev = _context3.next) {
                        case 0:
                            endpoint = BTC_API_BASE_URL + "/addr/" + addr + "/" + option;
                            return _context3.abrupt("return", sendRequest(endpoint));

                        case 2:
                        case "end":
                            return _context3.stop();
                    }
                }
            }, _callee3, this);
        }));
    },
    getAddrInfo: function getAddrInfo(addr) {
        return __awaiter(undefined, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
            var endpoint;
            return regeneratorRuntime.wrap(function _callee4$(_context4) {
                while (1) {
                    switch (_context4.prev = _context4.next) {
                        case 0:
                            endpoint = BTC_API_BASE_URL + "/addr/" + addr;
                            return _context4.abrupt("return", sendRequest(endpoint));

                        case 2:
                        case "end":
                            return _context4.stop();
                    }
                }
            }, _callee4, this);
        }));
    },
    getAddrTxHistory: function getAddrTxHistory(addr) {
        return __awaiter(undefined, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
            var endpoint;
            return regeneratorRuntime.wrap(function _callee5$(_context5) {
                while (1) {
                    switch (_context5.prev = _context5.next) {
                        case 0:
                            endpoint = BTC_API_BASE_URL + "/txs/?address=" + addr;
                            return _context5.abrupt("return", sendRequest(endpoint));

                        case 2:
                        case "end":
                            return _context5.stop();
                    }
                }
            }, _callee5, this);
        }));
    },
    sendRawTransaction: function sendRawTransaction(rawTx) {
        return __awaiter(undefined, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
            var endpoint;
            return regeneratorRuntime.wrap(function _callee6$(_context6) {
                while (1) {
                    switch (_context6.prev = _context6.next) {
                        case 0:
                            endpoint = BTC_API_BASE_URL + "/tx/send";
                            return _context6.abrupt("return", sendRequest(endpoint, { method: 'POST', body: rawTx }));

                        case 2:
                        case "end":
                            return _context6.stop();
                    }
                }
            }, _callee6, this);
        }));
    },
    getTxInfo: function getTxInfo(txHash) {
        return __awaiter(undefined, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee7() {
            var endpoint;
            return regeneratorRuntime.wrap(function _callee7$(_context7) {
                while (1) {
                    switch (_context7.prev = _context7.next) {
                        case 0:
                            endpoint = BTC_API_BASE_URL + "/tx/" + txHash;
                            return _context7.abrupt("return", sendRequest(endpoint));

                        case 2:
                        case "end":
                            return _context7.stop();
                    }
                }
            }, _callee7, this);
        }));
    },
    estimateFee: function estimateFee() {
        var nbBlocks = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 2;
        return __awaiter(undefined, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee8() {
            var endpoint;
            return regeneratorRuntime.wrap(function _callee8$(_context8) {
                while (1) {
                    switch (_context8.prev = _context8.next) {
                        case 0:
                            endpoint = BTC_API_BASE_URL + "/utils/estimatefee?nbBlocks=" + nbBlocks;
                            return _context8.abrupt("return", sendRequest(endpoint));

                        case 2:
                        case "end":
                            return _context8.stop();
                    }
                }
            }, _callee8, this);
        }));
    },
    estimateMinerFee: function estimateMinerFee() {
        return __awaiter(undefined, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee9() {
            var response, json;
            return regeneratorRuntime.wrap(function _callee9$(_context9) {
                while (1) {
                    switch (_context9.prev = _context9.next) {
                        case 0:
                            _context9.next = 2;
                            return fetch('https://api.blockcypher.com/v1/btc/main');

                        case 2:
                            response = _context9.sent;
                            _context9.next = 5;
                            return response.json();

                        case 5:
                            json = _context9.sent;
                            return _context9.abrupt("return", {
                                high: json.high_fee_per_kb,
                                medium: json.medium_fee_per_kb,
                                low: json.low_fee_per_kb
                            });

                        case 7:
                        case "end":
                            return _context9.stop();
                    }
                }
            }, _callee9, this);
        }));
    },
    getExchangeRate: function getExchangeRate() {
        return __awaiter(undefined, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee10() {
            var data;
            return regeneratorRuntime.wrap(function _callee10$(_context10) {
                while (1) {
                    switch (_context10.prev = _context10.next) {
                        case 0:
                            _context10.next = 2;
                            return sendRequest(BTC_MARKET_PRICE_ORACLE_URL);

                        case 2:
                            data = _context10.sent;
                            return _context10.abrupt("return", {
                                CNY: data.data.quotes.CNY.price,
                                USD: data.data.quotes.USD.price
                            });

                        case 4:
                        case "end":
                            return _context10.stop();
                    }
                }
            }, _callee10, this);
        }));
    }
};
})