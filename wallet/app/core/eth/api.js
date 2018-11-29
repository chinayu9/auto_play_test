_$define("app/core/eth/api", function (require, exports, module){
"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

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
 * ETH api
 */
var config_1 = require("../../config");
var config_2 = require("../config");
var web3_min_1 = require("../thirdparty/web3.min");
var web3 = void 0;
/* tslint:disable:no-var-keyword */
if (config_2.config.dev_mode === config_1.DevMode.Ropsten) {
    var ETH_API_BASE_URL = config_2.config[config_1.DevMode.Ropsten].EthApiBaseUrl;
    var ETH_MARKET_PRICE_ORACLE_URL = config_2.config[config_1.DevMode.Ropsten].EthMarketPriceOracleUrl;
    var ETHSCAN_ROPSTEN_API_URL = config_2.config[config_1.DevMode.Ropsten].EthscanRopstenUrl;
    var ETHSCAN_ROPSTEN_TOKEN_TRANSFER_EVENT = config_2.config[config_1.DevMode.Ropsten].EthscanRopstenTokenTransferEvent;
} else if (config_2.config.dev_mode === config_1.DevMode.Rinkeby) {
    ETH_API_BASE_URL = config_2.config[config_1.DevMode.Rinkeby].EthApiBaseUrl;
    ETH_MARKET_PRICE_ORACLE_URL = config_2.config[config_1.DevMode.Rinkeby].EthMarketPriceOracleUrl;
    ETHSCAN_ROPSTEN_API_URL = config_2.config[config_1.DevMode.Rinkeby].EthscanRopstenUrl;
    ETHSCAN_ROPSTEN_TOKEN_TRANSFER_EVENT = config_2.config[config_1.DevMode.Rinkeby].EthscanRopstenTokenTransferEvent;
} else if (config_2.config.dev_mode === config_1.DevMode.Prod) {
    ETH_API_BASE_URL = config_2.config[config_1.DevMode.Prod].EthApiBaseUrl;
    ETH_MARKET_PRICE_ORACLE_URL = config_2.config[config_1.DevMode.Prod].EthMarketPriceOracleUrl;
    ETHSCAN_ROPSTEN_API_URL = config_2.config[config_1.DevMode.Prod].EthscanRopstenUrl;
    ETHSCAN_ROPSTEN_TOKEN_TRANSFER_EVENT = config_2.config[config_1.DevMode.Prod].EthscanRopstenTokenTransferEvent;
}
/* tslint:disable:prefer-template */
/* tslint:disable: no-redundant-jsdoc*/
/**
 * API docs: https://github.com/ethereum/wiki/wiki/JavaScript-API
 *
 * @export
 * @class Api
 */

var Api = function () {
    function Api() {
        _classCallCheck(this, Api);
    }

    _createClass(Api, [{
        key: "getBalance",
        value: function getBalance(address) {
            return new Promise(function (resovle, reject) {
                try {
                    var response = fetch(ETH_API_BASE_URL, {
                        method: 'POST',
                        body: JSON.stringify({
                            id: 1,
                            method: 'eth_getBalance',
                            params: [address, 'latest']
                        }),
                        headers: {
                            'Content-Type': 'application/json'
                        }
                    });
                    resovle(response.then(function (res) {
                        return res.json();
                    }));
                } catch (e) {
                    reject(e);
                }
            });
        }
    }, {
        key: "sendRawTransaction",
        value: function sendRawTransaction(serializedTx) {
            return new Promise(function (resolve, reject) {
                initWeb3();
                web3.eth.sendRawTransaction('0x' + serializedTx.toString('hex'), function (err, hash) {
                    if (!err) {
                        return resolve(hash);
                    } else {
                        return reject(err);
                    }
                });
            });
        }
    }, {
        key: "getTransactionCount",
        value: function getTransactionCount(address) {
            return new Promise(function (resolve, reject) {
                initWeb3();
                web3.eth.getTransactionCount(address, function (err, cnt) {
                    if (!err) {
                        return resolve(cnt);
                    } else {
                        return reject(err);
                    }
                });
            });
        }
    }, {
        key: "getTransaction",
        value: function getTransaction(hash) {
            return new Promise(function (resolve, reject) {
                initWeb3();
                web3.eth.getTransaction(hash, function (err, val) {
                    if (!err) {
                        return resolve(val);
                    } else {
                        return reject(err);
                    }
                });
            });
        }
    }, {
        key: "getBlockNumber",
        value: function getBlockNumber() {
            return new Promise(function (resolve, reject) {
                initWeb3();
                web3.eth.getBlockNumber(function (err, val) {
                    if (!err) {
                        return resolve(val);
                    } else {
                        return reject(err);
                    }
                });
            });
        }
    }, {
        key: "getBlock",
        value: function getBlock(blockHash) {
            return new Promise(function (resolve, reject) {
                initWeb3();
                web3.eth.getBlock(blockHash, function (err, val) {
                    if (!err) {
                        return resolve(val);
                    } else {
                        return reject(err);
                    }
                });
            });
        }
    }, {
        key: "getTransactionReceipt",
        value: function getTransactionReceipt(hash) {
            return new Promise(function (resolve, reject) {
                initWeb3();
                web3.eth.getTransactionReceipt(hash, function (err, val) {
                    if (!err) {
                        return resolve(val);
                    } else {
                        return reject(err);
                    }
                });
            });
        }
        /**
         * Estimate gas usage of a transaction obj
         *
         * @param {{to, data}} obj `to` and `data` shoul be a '0x' prefixed hex string
         * @returns {Promise<number>}
         * @memberof Api
         */
        // tslint:disable-next-line:no-reserved-keywords

    }, {
        key: "estimateGas",
        value: function estimateGas(obj) {
            return new Promise(function (resolve, reject) {
                initWeb3();
                if (obj.data) {
                    obj.data = web3.toHex(obj.data);
                }
                web3.eth.estimateGas(obj, function (err, res) {
                    if (!err) {
                        // console.log(obj,res);
                        return resolve(res);
                    } else {
                        // console.log(obj,err);
                        return reject(err);
                    }
                });
            });
        }
    }, {
        key: "getExchangeRate",
        value: function getExchangeRate() {
            return __awaiter(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
                var response, data;
                return regeneratorRuntime.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                _context.prev = 0;
                                _context.next = 3;
                                return fetch(ETH_MARKET_PRICE_ORACLE_URL);

                            case 3:
                                response = _context.sent;
                                _context.next = 6;
                                return response.json();

                            case 6:
                                data = _context.sent;
                                return _context.abrupt("return", {
                                    CNY: data.data.quotes.CNY.price,
                                    USD: data.data.quotes.USD.price
                                });

                            case 10:
                                _context.prev = 10;
                                _context.t0 = _context["catch"](0);
                                return _context.abrupt("return", Promise.reject(_context.t0));

                            case 13:
                            case "end":
                                return _context.stop();
                        }
                    }
                }, _callee, this, [[0, 10]]);
            }));
        }
        /**
         * Docs: https://etherscan.io/apis#accounts
         * Get maxmum last 10000 histroy transactions of `address`
         *
         * @param {string} address
         * @returns {Promise<{}>}
         * @memberof Api
         */

    }, {
        key: "getAllTransactionsOf",
        value: function getAllTransactionsOf(address) {
            return __awaiter(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
                var url, response;
                return regeneratorRuntime.wrap(function _callee2$(_context2) {
                    while (1) {
                        switch (_context2.prev = _context2.next) {
                            case 0:
                                _context2.prev = 0;
                                url = ETHSCAN_ROPSTEN_API_URL + address;
                                _context2.next = 4;
                                return fetch(url);

                            case 4:
                                response = _context2.sent;
                                _context2.next = 7;
                                return response.json();

                            case 7:
                                return _context2.abrupt("return", _context2.sent);

                            case 10:
                                _context2.prev = 10;
                                _context2.t0 = _context2["catch"](0);
                                return _context2.abrupt("return", Promise.reject(_context2.t0));

                            case 13:
                            case "end":
                                return _context2.stop();
                        }
                    }
                }, _callee2, this, [[0, 10]]);
            }));
        }
        /**
         * Invoke contract calls that don't modify blockchain state
         *
         * @param {string} contractAddress Address of the called contract
         * @param {string} callData Contract call parameters
         * @returns {Promise<any>} Json response
         * @memberof Api
         */

    }, {
        key: "ethCall",
        value: function ethCall(contractAddress, callData) {
            return __awaiter(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
                return regeneratorRuntime.wrap(function _callee3$(_context3) {
                    while (1) {
                        switch (_context3.prev = _context3.next) {
                            case 0:
                                return _context3.abrupt("return", new Promise(function (resolve, reject) {
                                    initWeb3();
                                    web3.eth.call({
                                        to: contractAddress,
                                        data: callData
                                    }, function (err, res) {
                                        if (!err) {
                                            return resolve(res);
                                        } else {
                                            return reject(err);
                                        }
                                    });
                                }));

                            case 1:
                            case "end":
                                return _context3.stop();
                        }
                    }
                }, _callee3, this);
            }));
        }
        /**
         * Get token transfer events of an address
         *
         * @param {string} contractAddress Token contract address
         * @param {string} address Which address to query
         * @returns {Promise<any>} Json response
         * @memberof Api
         */

    }, {
        key: "getTokenTransferEvents",
        value: function getTokenTransferEvents(contractAddress, address) {
            return __awaiter(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
                var path, response;
                return regeneratorRuntime.wrap(function _callee4$(_context4) {
                    while (1) {
                        switch (_context4.prev = _context4.next) {
                            case 0:
                                path = ETHSCAN_ROPSTEN_TOKEN_TRANSFER_EVENT + ("&contractAddress=" + contractAddress + "&address=" + address);
                                // console.log(path);

                                _context4.prev = 1;
                                _context4.next = 4;
                                return fetch(path);

                            case 4:
                                response = _context4.sent;
                                return _context4.abrupt("return", response.json());

                            case 8:
                                _context4.prev = 8;
                                _context4.t0 = _context4["catch"](1);
                                return _context4.abrupt("return", Promise.reject(_context4.t0));

                            case 11:
                            case "end":
                                return _context4.stop();
                        }
                    }
                }, _callee4, this, [[1, 8]]);
            }));
        }
    }]);

    return Api;
}();

exports.Api = Api;
var initWeb3 = function initWeb3() {
    if (!web3) {
        web3 = new web3_min_1.Web3(new web3_min_1.Web3.providers.HttpProvider(ETH_API_BASE_URL));
    }
};
})