_$define("app/net/pullWallet", function (require, exports, module){
"use strict";

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

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
 * 主动向钱包通讯
 */
// ===================================================== 导入
var root_1 = require("../../pi/ui/root");
var util_1 = require("../../pi/util/util");
var config_1 = require("../config");
var api_1 = require("../core/btc/api");
var api_2 = require("../core/eth/api");
var wallet_1 = require("../core/eth/wallet");
var globalWallet_1 = require("../core/globalWallet");
var shapeshift_1 = require("../exchange/shapeshift/shapeshift");
var dataCenter_1 = require("../logic/dataCenter");
var interface_1 = require("../store/interface");
var memstore_1 = require("../store/memstore");
var constants_1 = require("../utils/constants");
var toolMessages_1 = require("../utils/toolMessages");
// tslint:disable-next-line:max-line-length
var tools_1 = require("../utils/tools");
var unitTools_1 = require("../utils/unitTools");
var walletTools_1 = require("../utils/walletTools");
// tslint:disable-next-line:max-line-length
var pull_1 = require("./pull");
/**
 * 供其他的webview调用
 */
exports.rpcProviderSendAsync = function (payload, callback) {
    wallet_1.initWeb3();
    if (payload.method === 'eth_accounts') {
        var addr = tools_1.getCurrentEthAddr();
        addr = addr ? [addr] : [];
        callback(null, { jsonrpc: '2.0', result: addr, id: payload.id });
    } else if (payload.method === 'eth_sendTransaction') {
        // alert(`payload is ${JSON.stringify(payload)}`);
        var ethPayload = {
            fromAddr: payload.params[0].from,
            toAddr: payload.params[0].to,
            pay: payload.params[0].value,
            currencyName: 'ETH',
            data: payload.params[0].data
        };
        try {
            var promise = exports.transfer3(payload.passwd, ethPayload);
            promise.then(function (_ref) {
                var _ref2 = _slicedToArray(_ref, 2),
                    err = _ref2[0],
                    hash = _ref2[1];

                console.log("wallet rpcProviderSendAsync err is " + err + ", hash is " + hash);
                if (err) {
                    callback(err);
                } else {
                    callback(null, { jsonrpc: '2.0', result: hash, id: payload.id });
                }
            }).catch(function () {
                console.log("wallet rpcProviderSendAsync err is catch");
            });
        } catch (e) {
            console.log("transfer3 catch throw");
        }
    } else {
        if (wallet_1.web3 && wallet_1.web3.currentProvider && wallet_1.web3.currentProvider.sendAsync) {
            wallet_1.web3.currentProvider.sendAsync(payload, callback);
        }
    }
};
/**
 * 普通转账
 */
exports.transfer3 = function (psw, txPayload) {
    return __awaiter(undefined, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        var fromAddr, currencyName, minerFeeLevel, minerFeeList, fee, txRecord, addrIndex, hash, wlt, api, nonce, localNonce, gasLimit, newNonce, chainNonce, txObj, tx;
        return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
                switch (_context.prev = _context.next) {
                    case 0:
                        fromAddr = txPayload.fromAddr;
                        currencyName = txPayload.currencyName;
                        minerFeeLevel = interface_1.MinerFeeLevel.Standard;
                        minerFeeList = tools_1.fetchMinerFeeList(currencyName);
                        fee = minerFeeList[minerFeeLevel].minerFee;
                        txRecord = {
                            hash: '',
                            addr: fromAddr,
                            txType: interface_1.TxType.Transfer,
                            fromAddr: fromAddr,
                            toAddr: txPayload.toAddr,
                            pay: unitTools_1.wei2Eth(txPayload.pay),
                            time: 0,
                            status: interface_1.TxStatus.Pending,
                            confirmedBlockNumber: 0,
                            needConfirmedBlockNumber: 0,
                            info: '',
                            currencyName: currencyName,
                            fee: fee,
                            nonce: undefined,
                            minerFeeLevel: minerFeeLevel
                        };
                        _context.prev = 6;
                        addrIndex = walletTools_1.getWltAddrIndex(fromAddr, currencyName);
                        hash = void 0;

                        if (!(addrIndex >= 0)) {
                            _context.next = 31;
                            break;
                        }

                        _context.next = 12;
                        return globalWallet_1.GlobalWallet.createWlt(currencyName, psw, addrIndex);

                    case 12:
                        wlt = _context.sent;
                        api = new api_2.Api();
                        nonce = txRecord.nonce;
                        localNonce = tools_1.getEthNonce(fromAddr);
                        // 0xe209a49a0000000000000000000000000000000000000000000000000000000000000001
                        // toAddr  0x0e7f42cdf739c06dd3c1c32fab5e50ec9620102a
                        // tslint:disable-next-line:max-line-length

                        _context.next = 18;
                        return api.estimateGas({ to: txPayload.toAddr, from: txPayload.fromAddr, value: txPayload.pay, data: txPayload.data });

                    case 18:
                        gasLimit = _context.sent;

                        // TODO  直接使用预估出来的gasLimit交易有可能失败   零时解决
                        gasLimit = Math.floor(gasLimit * constants_1.erc20GasLimitRate);
                        newNonce = nonce;

                        if (util_1.isNumber(nonce)) {
                            _context.next = 26;
                            break;
                        }

                        _context.next = 24;
                        return api.getTransactionCount(fromAddr);

                    case 24:
                        chainNonce = _context.sent;

                        newNonce = localNonce && localNonce >= chainNonce ? localNonce : chainNonce;

                    case 26:
                        txObj = {
                            to: txPayload.toAddr,
                            nonce: newNonce,
                            gasPrice: tools_1.fetchGasPrice(minerFeeLevel),
                            gasLimit: gasLimit,
                            value: txPayload.pay,
                            data: txPayload.data
                        };
                        tx = wlt.signRawTransaction(txObj);
                        _context.next = 30;
                        return api.sendRawTransaction(tx);

                    case 30:
                        hash = _context.sent;

                    case 31:
                        if (!hash) {
                            _context.next = 38;
                            break;
                        }

                        txRecord.hash = hash;
                        tools_1.updateLocalTx(txRecord);
                        dataCenter_1.dataCenter.updateAddrInfo(txRecord.addr, txRecord.currencyName);
                        return _context.abrupt("return", [undefined, hash]);

                    case 38:
                        return _context.abrupt("return", ['send transaction failed']);

                    case 39:
                        _context.next = 44;
                        break;

                    case 41:
                        _context.prev = 41;
                        _context.t0 = _context["catch"](6);
                        return _context.abrupt("return", [_context.t0, undefined]);

                    case 44:
                    case "end":
                        return _context.stop();
                }
            }
        }, _callee, this, [[6, 41]]);
    }));
};
/**
 * 普通转账
 */
exports.transfer = function (psw, txPayload, success, fail) {
    return __awaiter(undefined, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
        var fromAddr, currencyName, needConfirmedBlockNumber, txRecord, ret, addrIndex, wlt, res, tx;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
            while (1) {
                switch (_context2.prev = _context2.next) {
                    case 0:
                        fromAddr = txPayload.fromAddr;
                        currencyName = txPayload.currencyName;
                        needConfirmedBlockNumber = tools_1.getConfirmBlockNumber(currencyName, txPayload.pay);
                        txRecord = {
                            hash: '',
                            addr: fromAddr,
                            txType: interface_1.TxType.Transfer,
                            fromAddr: fromAddr,
                            toAddr: txPayload.toAddr,
                            pay: txPayload.pay,
                            time: 0,
                            status: interface_1.TxStatus.Pending,
                            confirmedBlockNumber: 0,
                            needConfirmedBlockNumber: needConfirmedBlockNumber,
                            info: '',
                            currencyName: currencyName,
                            fee: txPayload.fee,
                            nonce: undefined,
                            minerFeeLevel: txPayload.minerFeeLevel
                        };
                        _context2.prev = 4;
                        ret = void 0;
                        addrIndex = walletTools_1.getWltAddrIndex(fromAddr, currencyName);

                        if (!(addrIndex >= 0)) {
                            _context2.next = 28;
                            break;
                        }

                        _context2.next = 10;
                        return globalWallet_1.GlobalWallet.createWlt(currencyName, psw, addrIndex);

                    case 10:
                        wlt = _context2.sent;

                        if (!(currencyName === 'ETH')) {
                            _context2.next = 17;
                            break;
                        }

                        _context2.next = 14;
                        return exports.doEthTransfer(wlt, txRecord);

                    case 14:
                        ret = _context2.sent;
                        _context2.next = 28;
                        break;

                    case 17:
                        if (!(currencyName === 'BTC')) {
                            _context2.next = 24;
                            break;
                        }

                        _context2.next = 20;
                        return exports.doBtcTransfer(wlt, txRecord);

                    case 20:
                        res = _context2.sent;

                        if (res) {
                            ret = {
                                hash: res.txid,
                                nonce: 0
                            };
                        }
                        _context2.next = 28;
                        break;

                    case 24:
                        if (!config_1.ERC20Tokens[currencyName]) {
                            _context2.next = 28;
                            break;
                        }

                        _context2.next = 27;
                        return exports.doERC20TokenTransfer(wlt, txRecord);

                    case 27:
                        ret = _context2.sent;

                    case 28:
                        if (!ret) {
                            _context2.next = 33;
                            break;
                        }

                        tx = Object.assign({}, txRecord, { hash: ret.hash, nonce: ret.nonce, time: new Date().getTime() });

                        success(tx);
                        _context2.next = 34;
                        break;

                    case 33:
                        throw new Error('send transaction failed');

                    case 34:
                        _context2.next = 39;
                        break;

                    case 36:
                        _context2.prev = 36;
                        _context2.t0 = _context2["catch"](4);

                        fail(_context2.t0);

                    case 39:
                    case "end":
                        return _context2.stop();
                }
            }
        }, _callee2, this, [[4, 36]]);
    }));
};
/**
 * 交易
 */
exports.transfer1 = function (psw, txRecord) {
    return __awaiter(undefined, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
        var fromAddr, currencyName, ret, loading, addrIndex, wlt, res, tx;
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
            while (1) {
                switch (_context3.prev = _context3.next) {
                    case 0:
                        fromAddr = txRecord.fromAddr;
                        currencyName = txRecord.currencyName;
                        ret = void 0;
                        loading = root_1.popNew('app-components1-loading-loading', { text: tools_1.getStaticLanguage().transfer.loading });
                        _context3.prev = 4;
                        addrIndex = walletTools_1.getWltAddrIndex(fromAddr, currencyName);

                        if (!(addrIndex >= 0)) {
                            _context3.next = 28;
                            break;
                        }

                        _context3.next = 9;
                        return globalWallet_1.GlobalWallet.createWlt(currencyName, psw, addrIndex);

                    case 9:
                        wlt = _context3.sent;

                        if (!(currencyName === 'ETH')) {
                            _context3.next = 17;
                            break;
                        }

                        _context3.next = 13;
                        return exports.doEthTransfer(wlt, txRecord);

                    case 13:
                        ret = _context3.sent;

                        console.log('--------------ret', ret);
                        _context3.next = 28;
                        break;

                    case 17:
                        if (!(currencyName === 'BTC')) {
                            _context3.next = 24;
                            break;
                        }

                        _context3.next = 20;
                        return exports.doBtcTransfer(wlt, txRecord);

                    case 20:
                        res = _context3.sent;

                        if (!res) {
                            tools_1.popNewMessage(tools_1.getStaticLanguage().transfer.transferFailed);
                        } else {
                            ret = {
                                hash: res.txid,
                                nonce: 0
                            };
                        }
                        _context3.next = 28;
                        break;

                    case 24:
                        if (!config_1.ERC20Tokens[currencyName]) {
                            _context3.next = 28;
                            break;
                        }

                        _context3.next = 27;
                        return exports.doERC20TokenTransfer(wlt, txRecord);

                    case 27:
                        ret = _context3.sent;

                    case 28:
                        _context3.next = 34;
                        break;

                    case 30:
                        _context3.prev = 30;
                        _context3.t0 = _context3["catch"](4);

                        console.log(_context3.t0.message);
                        toolMessages_1.doErrorShow(_context3.t0);

                    case 34:
                        _context3.prev = 34;

                        loading.callback(loading.widget);
                        return _context3.finish(34);

                    case 37:
                        if (ret) {
                            tx = Object.assign({}, txRecord, { hash: ret.hash, nonce: ret.nonce, time: new Date().getTime() });

                            console.log('transfer success', tx);
                            tools_1.updateLocalTx(tx);
                            dataCenter_1.dataCenter.updateAddrInfo(tx.addr, tx.currencyName);
                            root_1.popNew('app-components1-message-message', { content: tools_1.getStaticLanguage().transfer.transSuccess });
                            root_1.popNew('app-view-wallet-transaction-transactionDetails', { hash: tx.hash });
                        }
                        return _context3.abrupt("return", ret);

                    case 39:
                    case "end":
                        return _context3.stop();
                }
            }
        }, _callee3, this, [[4, 30, 34, 37]]);
    }));
};
// =====================================================ETH
/**
 * 预估ETH的gas limit
 */
exports.estimateGasETH = function (toAddr, data) {
    return __awaiter(undefined, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
        var api;
        return regeneratorRuntime.wrap(function _callee4$(_context4) {
            while (1) {
                switch (_context4.prev = _context4.next) {
                    case 0:
                        api = new api_2.Api();
                        return _context4.abrupt("return", api.estimateGas({ to: toAddr, data: data }));

                    case 2:
                    case "end":
                        return _context4.stop();
                }
            }
        }, _callee4, this);
    }));
};
/**
 * 处理ETH转账
 */
exports.doEthTransfer = function (wlt, txRecord) {
    return __awaiter(undefined, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
        var api, fromAddr, toAddr, minerFeeLevel, pay, info, nonce, localNonce, newNonce, chainNonce, gasLimit, txObj, tx, hash;
        return regeneratorRuntime.wrap(function _callee5$(_context5) {
            while (1) {
                switch (_context5.prev = _context5.next) {
                    case 0:
                        api = new api_2.Api();
                        fromAddr = txRecord.fromAddr;
                        toAddr = txRecord.toAddr;
                        minerFeeLevel = txRecord.minerFeeLevel || interface_1.MinerFeeLevel.Standard;
                        pay = txRecord.pay;
                        info = txRecord.info;
                        nonce = txRecord.nonce;
                        localNonce = tools_1.getEthNonce(fromAddr);
                        newNonce = nonce;

                        if (util_1.isNumber(nonce)) {
                            _context5.next = 14;
                            break;
                        }

                        _context5.next = 12;
                        return api.getTransactionCount(fromAddr);

                    case 12:
                        chainNonce = _context5.sent;

                        newNonce = localNonce && localNonce >= chainNonce ? localNonce : chainNonce;

                    case 14:
                        _context5.next = 16;
                        return exports.estimateGasETH(toAddr, info);

                    case 16:
                        gasLimit = _context5.sent;
                        txObj = {
                            to: toAddr,
                            nonce: newNonce,
                            gasPrice: tools_1.fetchGasPrice(minerFeeLevel),
                            gasLimit: gasLimit,
                            value: unitTools_1.eth2Wei(pay),
                            data: info
                        };
                        tx = wlt.signRawTransaction(txObj);
                        _context5.next = 21;
                        return api.sendRawTransaction(tx);

                    case 21:
                        hash = _context5.sent;

                        if (!util_1.isNumber(nonce) && hash) {
                            tools_1.setEthNonce(newNonce + 1, fromAddr);
                        }
                        return _context5.abrupt("return", {
                            hash: hash,
                            nonce: newNonce
                        });

                    case 24:
                    case "end":
                        return _context5.stop();
                }
            }
        }, _callee5, this);
    }));
};
/**
 * ETH交易签名
 */
exports.signRawTransactionETH = function (psw, fromAddr, toAddr, pay, minerFeeLevel, info, nonce) {
    return __awaiter(undefined, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
        var addrIndex, wlt, api, localNonce, chainNonce, gasLimit, txObj;
        return regeneratorRuntime.wrap(function _callee6$(_context6) {
            while (1) {
                switch (_context6.prev = _context6.next) {
                    case 0:
                        _context6.prev = 0;
                        addrIndex = walletTools_1.getWltAddrIndex(fromAddr, 'ETH');

                        if (!(addrIndex >= 0)) {
                            _context6.next = 19;
                            break;
                        }

                        _context6.next = 5;
                        return globalWallet_1.GlobalWallet.createWlt('ETH', psw, addrIndex);

                    case 5:
                        wlt = _context6.sent;
                        api = new api_2.Api();

                        if (nonce) {
                            _context6.next = 13;
                            break;
                        }

                        localNonce = tools_1.getEthNonce(fromAddr);
                        _context6.next = 11;
                        return api.getTransactionCount(fromAddr);

                    case 11:
                        chainNonce = _context6.sent;

                        nonce = localNonce && localNonce >= chainNonce ? localNonce : chainNonce;

                    case 13:
                        _context6.next = 15;
                        return exports.estimateGasETH(toAddr, info);

                    case 15:
                        gasLimit = _context6.sent;
                        txObj = {
                            to: toAddr,
                            nonce: nonce,
                            gasPrice: tools_1.fetchGasPrice(minerFeeLevel),
                            gasLimit: gasLimit,
                            value: unitTools_1.eth2Wei(pay),
                            data: info
                        };

                        console.log('txObj--------------', txObj);
                        return _context6.abrupt("return", wlt.signRawTransactionHash(txObj));

                    case 19:
                        _context6.next = 24;
                        break;

                    case 21:
                        _context6.prev = 21;
                        _context6.t0 = _context6["catch"](0);

                        toolMessages_1.doErrorShow(_context6.t0);

                    case 24:
                    case "end":
                        return _context6.stop();
                }
            }
        }, _callee6, this, [[0, 21]]);
    }));
};
/**
 * 发送ETH交易
 * @param signedTx 签名交易
 */
exports.sendRawTransactionETH = function (signedTx) {
    return __awaiter(undefined, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee7() {
        var api, hash;
        return regeneratorRuntime.wrap(function _callee7$(_context7) {
            while (1) {
                switch (_context7.prev = _context7.next) {
                    case 0:
                        api = new api_2.Api();
                        hash = '';
                        _context7.prev = 2;
                        _context7.next = 5;
                        return api.sendRawTransaction(signedTx);

                    case 5:
                        hash = _context7.sent;
                        _context7.next = 11;
                        break;

                    case 8:
                        _context7.prev = 8;
                        _context7.t0 = _context7["catch"](2);

                        toolMessages_1.doErrorShow(_context7.t0);

                    case 11:
                        return _context7.abrupt("return", hash);

                    case 12:
                    case "end":
                        return _context7.stop();
                }
            }
        }, _callee7, this, [[2, 8]]);
    }));
};
// ==============================================ERC20
// 预估ETH ERC20Token的gas limit
exports.estimateGasERC20 = function (currencyName, toAddr, fromAddr, amount) {
    var api = new api_2.Api();
    var transferCode = wallet_1.EthWallet.tokenOperations('transfer', currencyName, toAddr, unitTools_1.ethTokenMultiplyDecimals(amount, currencyName));
    return api.estimateGas({ to: config_1.ERC20Tokens[currencyName].contractAddr, from: fromAddr, value: '0x0', data: transferCode });
};
/**
 * 处理eth代币转账
 */
// tslint:disable-next-line:max-line-length
exports.doERC20TokenTransfer = function (wlt, txRecord) {
    return __awaiter(undefined, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee8() {
        var api, fromAddr, toAddr, minerFeeLevel, pay, nonce, currencyName, localNonce, newNonce, chainNonce, transferCode, gasLimit, txObj, tx, hash;
        return regeneratorRuntime.wrap(function _callee8$(_context8) {
            while (1) {
                switch (_context8.prev = _context8.next) {
                    case 0:
                        api = new api_2.Api();
                        fromAddr = txRecord.fromAddr;
                        toAddr = txRecord.toAddr;
                        minerFeeLevel = txRecord.minerFeeLevel;
                        pay = txRecord.pay;
                        nonce = txRecord.nonce;
                        currencyName = txRecord.currencyName;
                        localNonce = tools_1.getEthNonce(fromAddr);
                        newNonce = nonce;

                        if (util_1.isNumber(nonce)) {
                            _context8.next = 14;
                            break;
                        }

                        _context8.next = 12;
                        return api.getTransactionCount(fromAddr);

                    case 12:
                        chainNonce = _context8.sent;

                        newNonce = localNonce && localNonce >= chainNonce ? localNonce : chainNonce;

                    case 14:
                        transferCode = wallet_1.EthWallet.tokenOperations('transfer', currencyName, toAddr, unitTools_1.ethTokenMultiplyDecimals(pay, currencyName));
                        _context8.next = 17;
                        return exports.estimateGasERC20(currencyName, toAddr, fromAddr, '0x0');

                    case 17:
                        gasLimit = _context8.sent;

                        // TODO  零时解决
                        gasLimit = Math.floor(gasLimit * 4);
                        console.log('gasLimit-------------', gasLimit);
                        txObj = {
                            to: config_1.ERC20Tokens[currencyName].contractAddr,
                            nonce: newNonce,
                            gasPrice: tools_1.fetchGasPrice(minerFeeLevel),
                            gasLimit: gasLimit,
                            value: 0,
                            data: transferCode
                        };

                        console.log('txObj---------------', txObj);
                        tx = wlt.signRawTransaction(txObj);
                        _context8.next = 25;
                        return api.sendRawTransaction(tx);

                    case 25:
                        hash = _context8.sent;

                        if (!util_1.isNumber(nonce) && hash) {
                            tools_1.setEthNonce(newNonce + 1, fromAddr);
                        }
                        return _context8.abrupt("return", {
                            hash: hash,
                            nonce: newNonce
                        });

                    case 28:
                    case "end":
                        return _context8.stop();
                }
            }
        }, _callee8, this);
    }));
};
// ==================================================BTC
// 预估BTC矿工费
exports.estimateMinerFeeBTC = function () {
    var nbBlocks = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 12;
    return __awaiter(undefined, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee9() {
        return regeneratorRuntime.wrap(function _callee9$(_context9) {
            while (1) {
                switch (_context9.prev = _context9.next) {
                    case 0:
                        return _context9.abrupt("return", api_1.BtcApi.estimateFee(nbBlocks));

                    case 1:
                    case "end":
                        return _context9.stop();
                }
            }
        }, _callee9, this);
    }));
};
/**
 * 处理BTC转账
 */
exports.doBtcTransfer = function (wlt, txRecord) {
    return __awaiter(undefined, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee10() {
        var toAddr, pay, fromAddr, minerFeeLevel, output, retArr, rawHexString;
        return regeneratorRuntime.wrap(function _callee10$(_context10) {
            while (1) {
                switch (_context10.prev = _context10.next) {
                    case 0:
                        toAddr = txRecord.toAddr;
                        pay = txRecord.pay;
                        fromAddr = txRecord.fromAddr;
                        minerFeeLevel = txRecord.minerFeeLevel;
                        output = {
                            toAddr: toAddr,
                            amount: pay,
                            chgAddr: fromAddr
                        };

                        console.log('output----------------', output);
                        wlt.unlock();
                        _context10.next = 9;
                        return wlt.init();

                    case 9:
                        _context10.next = 11;
                        return wlt.buildRawTransactionFromSingleAddress(fromAddr, output, tools_1.fetchBtcMinerFee(minerFeeLevel));

                    case 11:
                        retArr = _context10.sent;

                        wlt.lock();
                        // const rawHexString: string = retArr[0];
                        // console.log('rawTx',rawHexString);
                        rawHexString = retArr.rawTx;

                        console.log('rawTx==========', rawHexString);
                        return _context10.abrupt("return", api_1.BtcApi.sendRawTransaction(rawHexString));

                    case 16:
                    case "end":
                        return _context10.stop();
                }
            }
        }, _callee10, this);
    }));
};
/**
 * btc重发
 */
exports.resendBtcTransfer = function (wlt, txRecord) {
    return __awaiter(undefined, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee11() {
        var minerFeeLevel, hash, retArr, rawHexString;
        return regeneratorRuntime.wrap(function _callee11$(_context11) {
            while (1) {
                switch (_context11.prev = _context11.next) {
                    case 0:
                        minerFeeLevel = txRecord.minerFeeLevel;
                        hash = txRecord.hash;

                        wlt.unlock();
                        _context11.next = 5;
                        return wlt.init();

                    case 5:
                        _context11.next = 7;
                        return wlt.resendTx(hash, tools_1.fetchBtcMinerFee(minerFeeLevel));

                    case 7:
                        retArr = _context11.sent;

                        wlt.lock();
                        rawHexString = retArr.rawTx;
                        // console.log(rawHexString);

                        return _context11.abrupt("return", api_1.BtcApi.sendRawTransaction(rawHexString));

                    case 11:
                    case "end":
                        return _context11.stop();
                }
            }
        }, _callee11, this);
    }));
};
/**
 * BTC交易签名
 */
exports.signRawTransactionBTC = function (psw, fromAddr, toAddr, pay, minerFeeLevel) {
    return __awaiter(undefined, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee12() {
        var addrIndex, wlt, output, retArr;
        return regeneratorRuntime.wrap(function _callee12$(_context12) {
            while (1) {
                switch (_context12.prev = _context12.next) {
                    case 0:
                        _context12.prev = 0;
                        addrIndex = walletTools_1.getWltAddrIndex(fromAddr, 'BTC');

                        if (!(addrIndex >= 0)) {
                            _context12.next = 16;
                            break;
                        }

                        _context12.next = 5;
                        return globalWallet_1.GlobalWallet.createWlt('BTC', psw, addrIndex);

                    case 5:
                        wlt = _context12.sent;
                        output = {
                            toAddr: toAddr,
                            amount: pay,
                            chgAddr: fromAddr
                        };

                        console.log('output----------------', output);
                        wlt.unlock();
                        _context12.next = 11;
                        return wlt.init();

                    case 11:
                        _context12.next = 13;
                        return wlt.buildRawTransactionFromSingleAddress(fromAddr, output, tools_1.fetchBtcMinerFee(minerFeeLevel));

                    case 13:
                        retArr = _context12.sent;

                        wlt.lock();
                        return _context12.abrupt("return", retArr);

                    case 16:
                        _context12.next = 21;
                        break;

                    case 18:
                        _context12.prev = 18;
                        _context12.t0 = _context12["catch"](0);

                        toolMessages_1.doErrorShow(_context12.t0);

                    case 21:
                    case "end":
                        return _context12.stop();
                }
            }
        }, _callee12, this, [[0, 18]]);
    }));
};
/**
 * BTC重发交易签名
 */
exports.resendSignRawTransactionBTC = function (hash, psw, fromAddr, minerFeeLevel) {
    return __awaiter(undefined, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee13() {
        var addrIndex, wlt, retArr;
        return regeneratorRuntime.wrap(function _callee13$(_context13) {
            while (1) {
                switch (_context13.prev = _context13.next) {
                    case 0:
                        _context13.prev = 0;
                        addrIndex = walletTools_1.getWltAddrIndex(fromAddr, 'BTC');

                        if (!(addrIndex >= 0)) {
                            _context13.next = 14;
                            break;
                        }

                        _context13.next = 5;
                        return globalWallet_1.GlobalWallet.createWlt('BTC', psw, addrIndex);

                    case 5:
                        wlt = _context13.sent;

                        wlt.unlock();
                        _context13.next = 9;
                        return wlt.init();

                    case 9:
                        _context13.next = 11;
                        return wlt.resendTx(hash, tools_1.fetchBtcMinerFee(minerFeeLevel));

                    case 11:
                        retArr = _context13.sent;

                        wlt.lock();
                        return _context13.abrupt("return", retArr);

                    case 14:
                        _context13.next = 19;
                        break;

                    case 16:
                        _context13.prev = 16;
                        _context13.t0 = _context13["catch"](0);

                        toolMessages_1.doErrorShow(_context13.t0);

                    case 19:
                    case "end":
                        return _context13.stop();
                }
            }
        }, _callee13, this, [[0, 16]]);
    }));
};
/**
 * 发送BTC交易
 * @param signedTx 签名交易
 */
exports.sendRawTransactionBTC = function (rawHexString) {
    return __awaiter(undefined, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee14() {
        var hash, ret;
        return regeneratorRuntime.wrap(function _callee14$(_context14) {
            while (1) {
                switch (_context14.prev = _context14.next) {
                    case 0:
                        hash = '';
                        _context14.prev = 1;
                        _context14.next = 4;
                        return api_1.BtcApi.sendRawTransaction(rawHexString);

                    case 4:
                        ret = _context14.sent;

                        hash = ret.txid;
                        _context14.next = 11;
                        break;

                    case 8:
                        _context14.prev = 8;
                        _context14.t0 = _context14["catch"](1);

                        toolMessages_1.doErrorShow(_context14.t0);

                    case 11:
                        return _context14.abrupt("return", hash);

                    case 12:
                    case "end":
                        return _context14.stop();
                }
            }
        }, _callee14, this, [[1, 8]]);
    }));
};
// ===================================================shapeShift相关start
/**
 * 获取shapeShift所支持的币种
 */
exports.getShapeShiftCoins = function () {
    shapeshift_1.shapeshift.coins(function (err, data) {
        if (err) {
            console.error(err);
            return;
        }
        var list = [];
        for (var k in data) {
            list.push(data[k]);
        }
        memstore_1.setStore('third/shapeShiftCoins', list);
    });
};
/**
 *
 * @param pair 交易对
 */
exports.getMarketInfo = function (pair) {
    shapeshift_1.shapeshift.marketInfo(pair, function (err, marketInfo) {
        if (err) {
            console.error(err);
            return;
        }
        memstore_1.setStore('third/shapeShiftMarketInfo', marketInfo);
    });
};
/**
 * 开始进行币币兑换
 * @param withdrawalAddress 入账币种的地址
 * @param returnAddress 失败后的退款地址
 * @param pair 交易对
 */
exports.beginShift = function (withdrawalAddress, returnAddress, pair, success, fail) {
    var options = {
        returnAddress: returnAddress,
        apiKey: constants_1.shapeshiftApiPublicKey
    };
    shapeshift_1.shapeshift.shift(withdrawalAddress, pair, options, function (err, returnData) {
        return __awaiter(undefined, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee15() {
            return regeneratorRuntime.wrap(function _callee15$(_context15) {
                while (1) {
                    switch (_context15.prev = _context15.next) {
                        case 0:
                            console.log('returnData', returnData);

                            if (!err) {
                                _context15.next = 4;
                                break;
                            }

                            fail && fail(err);
                            return _context15.abrupt("return");

                        case 4:
                            // ShapeShift owned BTC address that you send your BTC to
                            // const depositAddress = returnData.deposit;
                            // NOTE: `depositAmount`, `expiration`, and `quotedRate` are only returned if
                            // you set `options.amount`
                            // amount to send to ShapeShift (type string)
                            // const shiftAmount = returnData.depositAmount;
                            // Time before rate expires (type number, time from epoch in seconds)
                            // const expiration = new Date(returnData.expiration * 1000);
                            // rate of exchange, 1 BTC for ??? LTC (type string)
                            // const rate = returnData.quotedRate;
                            // you need to actually then send your BTC to ShapeShift
                            // you could use module `spend`: https://www.npmjs.com/package/spend
                            // CONVERT AMOUNT TO SATOSHIS IF YOU USED `spend`
                            // spend(SS_BTC_WIF, depositAddress, shiftAmountSatoshis, function (err, txId) { /.. ../ })
                            // later, you can then check the deposit status
                            success && success(returnData);

                        case 5:
                        case "end":
                            return _context15.stop();
                    }
                }
            }, _callee15, this);
        }));
    });
};
/**
 * 获取币币交易记录
 * @param addr 要获取交易记录的地址
 */
exports.getTransactionsByAddr = function (addr) {
    return __awaiter(undefined, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee16() {
        var addrLowerCase, transactions, getTxByHash, shapeShiftTxsMap, shapeShiftTxs, count, txs;
        return regeneratorRuntime.wrap(function _callee16$(_context16) {
            while (1) {
                switch (_context16.prev = _context16.next) {
                    case 0:
                        addrLowerCase = addr.toLowerCase();

                        transactions = function transactions(addr) {
                            return new Promise(function (resolve, reject) {
                                shapeshift_1.shapeshift.transactions(constants_1.shapeshiftApiPrivateKey, addr, function (err, transactions) {
                                    if (err || transactions.length === 0) {
                                        reject(err || new Error('null array'));
                                    }
                                    resolve(transactions);
                                });
                            });
                        };

                        getTxByHash = function getTxByHash(txs, hash) {
                            for (var i = 0; i < txs.length; i++) {
                                // tslint:disable-next-line:possible-timing-attack
                                if (txs[i].inputTXID === hash) {
                                    return i;
                                }
                            }
                            return -1;
                        };

                        shapeShiftTxsMap = memstore_1.getStore('third/shapeShiftTxsMap');
                        shapeShiftTxs = shapeShiftTxsMap.get(addrLowerCase) || { addr: addrLowerCase, list: [] };
                        count = constants_1.shapeshiftTransactionRequestNumber;

                    case 6:
                        if (!(count >= 0)) {
                            _context16.next = 26;
                            break;
                        }

                        txs = void 0;
                        _context16.prev = 8;
                        _context16.next = 11;
                        return transactions(addrLowerCase);

                    case 11:
                        txs = _context16.sent;
                        _context16.next = 16;
                        break;

                    case 14:
                        _context16.prev = 14;
                        _context16.t0 = _context16["catch"](8);

                    case 16:
                        if (!txs) {
                            _context16.next = 22;
                            break;
                        }

                        console.log('shapeshifttx', txs);
                        txs.forEach(function (tx) {
                            var index = getTxByHash(shapeShiftTxs.list || [], tx.inputTXID);
                            if (index >= 0) {
                                shapeShiftTxs.list[index] = tx;
                            } else {
                                shapeShiftTxs.list.push(tx);
                            }
                        });
                        shapeShiftTxsMap.set(addrLowerCase, shapeShiftTxs);
                        memstore_1.setStore('third/shapeShiftTxsMap', shapeShiftTxsMap);
                        return _context16.abrupt("return");

                    case 22:
                        count--;
                        console.log(count);
                        _context16.next = 6;
                        break;

                    case 26:
                        memstore_1.setStore('third/shapeShiftTxsMap', shapeShiftTxsMap);

                    case 27:
                    case "end":
                        return _context16.stop();
                }
            }
        }, _callee16, this, [[8, 14]]);
    }));
};
// ===================================================shapeShift相关end
// ===================================================== 本地
// ================================重发
/**
 * 普通转账重发
 */
exports.resendNormalTransfer = function (psw, txRecord) {
    return __awaiter(undefined, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee17() {
        var loading, fromAddr, currencyName, ret, addrIndex, wlt, res, t, tx, oldHash;
        return regeneratorRuntime.wrap(function _callee17$(_context17) {
            while (1) {
                switch (_context17.prev = _context17.next) {
                    case 0:
                        console.log('----------resendNormalTransfer--------------');
                        loading = root_1.popNew('app-components1-loading-loading', { text: tools_1.getStaticLanguage().transfer.againSend });
                        fromAddr = txRecord.fromAddr;
                        currencyName = txRecord.currencyName;
                        ret = void 0;
                        _context17.prev = 5;
                        addrIndex = walletTools_1.getWltAddrIndex(fromAddr, currencyName);

                        if (!(addrIndex >= 0)) {
                            _context17.next = 30;
                            break;
                        }

                        _context17.next = 10;
                        return globalWallet_1.GlobalWallet.createWlt(currencyName, psw, addrIndex);

                    case 10:
                        wlt = _context17.sent;

                        if (!(currencyName === 'ETH')) {
                            _context17.next = 18;
                            break;
                        }

                        _context17.next = 14;
                        return exports.doEthTransfer(wlt, txRecord);

                    case 14:
                        ret = _context17.sent;

                        console.log('--------------ret', ret);
                        _context17.next = 30;
                        break;

                    case 18:
                        if (!(currencyName === 'BTC')) {
                            _context17.next = 26;
                            break;
                        }

                        _context17.next = 21;
                        return exports.resendBtcTransfer(wlt, txRecord);

                    case 21:
                        res = _context17.sent;

                        console.log('btc res-----', res);
                        ret = {
                            hash: res.txid,
                            nonce: -1
                        };
                        _context17.next = 30;
                        break;

                    case 26:
                        if (!config_1.ERC20Tokens[currencyName]) {
                            _context17.next = 30;
                            break;
                        }

                        _context17.next = 29;
                        return exports.doERC20TokenTransfer(wlt, txRecord);

                    case 29:
                        ret = _context17.sent;

                    case 30:
                        _context17.next = 36;
                        break;

                    case 32:
                        _context17.prev = 32;
                        _context17.t0 = _context17["catch"](5);

                        console.log(_context17.t0.message);
                        toolMessages_1.doErrorShow(_context17.t0);

                    case 36:
                        _context17.prev = 36;

                        loading.callback(loading.widget);
                        return _context17.finish(36);

                    case 39:
                        if (ret) {
                            t = new Date();
                            tx = Object.assign({}, txRecord, { hash: ret.hash, time: t.getTime() });
                            oldHash = txRecord.hash;

                            tools_1.deletLocalTx(txRecord);
                            tools_1.updateLocalTx(tx);
                            dataCenter_1.dataCenter.clearTxTimer(oldHash); // 删除定时器
                            dataCenter_1.dataCenter.updateAddrInfo(tx.addr, tx.currencyName);
                            root_1.popNew('app-components1-message-message', { content: tools_1.getStaticLanguage().transfer.againSuccess });
                            root_1.popNew('app-view-wallet-transaction-transactionDetails', { hash: tx.hash });
                        }
                        return _context17.abrupt("return", ret);

                    case 41:
                    case "end":
                        return _context17.stop();
                }
            }
        }, _callee17, this, [[5, 32, 36, 39]]);
    }));
};
/**
 * 充值重发
 */
exports.resendRecharge = function (psw, txRecord) {
    return __awaiter(undefined, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee18() {
        var loading, tx, oldHash;
        return regeneratorRuntime.wrap(function _callee18$(_context18) {
            while (1) {
                switch (_context18.prev = _context18.next) {
                    case 0:
                        console.log('----------resendRecharge--------------');
                        loading = root_1.popNew('app-components1-loading-loading', { text: tools_1.getStaticLanguage().transfer.againSend });
                        tx = void 0;
                        _context18.prev = 3;

                        if (!(txRecord.currencyName === 'BTC')) {
                            _context18.next = 10;
                            break;
                        }

                        _context18.next = 7;
                        return exports.resendBtcRecharge(psw, txRecord);

                    case 7:
                        tx = _context18.sent;
                        _context18.next = 13;
                        break;

                    case 10:
                        _context18.next = 12;
                        return exports.ethRecharge(psw, txRecord);

                    case 12:
                        tx = _context18.sent;

                    case 13:
                        _context18.next = 19;
                        break;

                    case 15:
                        _context18.prev = 15;
                        _context18.t0 = _context18["catch"](3);

                        console.log(_context18.t0.message);
                        toolMessages_1.doErrorShow(_context18.t0);

                    case 19:
                        _context18.prev = 19;

                        loading.callback(loading.widget);
                        return _context18.finish(19);

                    case 22:
                        if (tx) {
                            oldHash = txRecord.hash;

                            tools_1.deletLocalTx(txRecord);
                            tools_1.updateLocalTx(tx);
                            dataCenter_1.dataCenter.clearTxTimer(oldHash); // 删除定时器
                            dataCenter_1.dataCenter.updateAddrInfo(tx.addr, tx.currencyName);
                            pull_1.getRechargeLogs(tx.currencyName);
                            root_1.popNew('app-components1-message-message', { content: tools_1.getStaticLanguage().transfer.againSuccess });
                            root_1.popNew('app-view-wallet-transaction-transactionDetails', { hash: tx.hash });
                        }
                        return _context18.abrupt("return", tx.hash);

                    case 24:
                    case "end":
                        return _context18.stop();
                }
            }
        }, _callee18, this, [[3, 15, 19, 22]]);
    }));
};
// ================================重发
exports.recharge = function (psw, txRecord) {
    return __awaiter(undefined, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee19() {
        var tx, close;
        return regeneratorRuntime.wrap(function _callee19$(_context19) {
            while (1) {
                switch (_context19.prev = _context19.next) {
                    case 0:
                        tx = void 0;
                        close = root_1.popNew('app-components1-loading-loading', { text: tools_1.getStaticLanguage().transfer.recharge });

                        if (!(txRecord.currencyName === 'BTC')) {
                            _context19.next = 8;
                            break;
                        }

                        _context19.next = 5;
                        return exports.btcRecharge(psw, txRecord);

                    case 5:
                        tx = _context19.sent;
                        _context19.next = 11;
                        break;

                    case 8:
                        _context19.next = 10;
                        return exports.ethRecharge(psw, txRecord);

                    case 10:
                        tx = _context19.sent;

                    case 11:
                        close.callback(close.widget);

                        if (!tx) {
                            _context19.next = 20;
                            break;
                        }

                        root_1.popNew('app-components1-message-message', { content: tools_1.getStaticLanguage().transfer.rechargeSuccess });
                        tools_1.updateLocalTx(tx);
                        console.log("recharge tx is ", tx);
                        dataCenter_1.dataCenter.updateAddrInfo(tx.addr, tx.currencyName);
                        pull_1.getRechargeLogs(tx.currencyName);
                        root_1.popNew('app-view-wallet-transaction-transactionDetails', { hash: tx.hash });
                        return _context19.abrupt("return", tx.hash);

                    case 20:
                    case "end":
                        return _context19.stop();
                }
            }
        }, _callee19, this);
    }));
};
/**
 * eth充值
 */
exports.ethRecharge = function (psw, txRecord) {
    return __awaiter(undefined, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee20() {
        var toAddr, fromAddr, minerFeeLevel, gasPrice, pay, info, gasLimit, minerFee, nonce, obj, signedTX, hash, canTransfer, h, t, record;
        return regeneratorRuntime.wrap(function _callee20$(_context20) {
            while (1) {
                switch (_context20.prev = _context20.next) {
                    case 0:
                        _context20.next = 2;
                        return pull_1.getBankAddr();

                    case 2:
                        toAddr = _context20.sent;

                        if (toAddr) {
                            _context20.next = 5;
                            break;
                        }

                        return _context20.abrupt("return");

                    case 5:
                        fromAddr = txRecord.fromAddr;
                        minerFeeLevel = txRecord.minerFeeLevel;
                        gasPrice = tools_1.fetchGasPrice(minerFeeLevel);
                        pay = txRecord.pay;
                        info = txRecord.info;
                        _context20.next = 12;
                        return exports.estimateGasETH(toAddr, info);

                    case 12:
                        gasLimit = _context20.sent;
                        minerFee = unitTools_1.wei2Eth(gasLimit * tools_1.fetchGasPrice(minerFeeLevel));
                        nonce = txRecord.nonce;
                        _context20.next = 17;
                        return exports.signRawTransactionETH(psw, fromAddr, toAddr, pay, minerFeeLevel, info, nonce);

                    case 17:
                        obj = _context20.sent;

                        if (obj) {
                            _context20.next = 20;
                            break;
                        }

                        return _context20.abrupt("return");

                    case 20:
                        signedTX = obj.signedTx;
                        hash = "0x" + obj.hash;

                        nonce = Number(obj.nonce);
                        _context20.next = 25;
                        return pull_1.rechargeToServer(fromAddr, toAddr, hash, nonce, gasPrice, unitTools_1.eth2Wei(pay));

                    case 25:
                        canTransfer = _context20.sent;

                        if (canTransfer) {
                            _context20.next = 28;
                            break;
                        }

                        return _context20.abrupt("return");

                    case 28:
                        _context20.next = 30;
                        return exports.sendRawTransactionETH(signedTX);

                    case 30:
                        h = _context20.sent;

                        if (h) {
                            _context20.next = 33;
                            break;
                        }

                        return _context20.abrupt("return");

                    case 33:
                        if (!txRecord.nonce) {
                            tools_1.setEthNonce(nonce + 1, fromAddr);
                        }
                        // 维护本地交易记录
                        t = new Date();
                        // tslint:disable-next-line:no-unnecessary-local-variable

                        record = Object.assign({}, txRecord, { nonce: nonce,
                            hash: hash,
                            toAddr: toAddr, time: t.getTime(), fee: minerFee, minerFeeLevel: minerFeeLevel });
                        return _context20.abrupt("return", record);

                    case 37:
                    case "end":
                        return _context20.stop();
                }
            }
        }, _callee20, this);
    }));
};
/**
 * btc充值
 */
exports.btcRecharge = function (psw, txRecord) {
    return __awaiter(undefined, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee21() {
        var toAddr, fromAddr, minerFeeLevel, pay, minerFee, obj, oldHash, signedTX, hash, canTransfer, h, t, record;
        return regeneratorRuntime.wrap(function _callee21$(_context21) {
            while (1) {
                switch (_context21.prev = _context21.next) {
                    case 0:
                        _context21.next = 2;
                        return pull_1.getBtcBankAddr();

                    case 2:
                        toAddr = _context21.sent;

                        if (toAddr) {
                            _context21.next = 5;
                            break;
                        }

                        return _context21.abrupt("return");

                    case 5:
                        fromAddr = txRecord.fromAddr;
                        minerFeeLevel = txRecord.minerFeeLevel;
                        pay = txRecord.pay;
                        minerFee = tools_1.fetchBtcMinerFee(minerFeeLevel);
                        _context21.next = 11;
                        return exports.signRawTransactionBTC(psw, fromAddr, toAddr, pay, minerFeeLevel);

                    case 11:
                        obj = _context21.sent;

                        if (obj) {
                            _context21.next = 14;
                            break;
                        }

                        return _context21.abrupt("return");

                    case 14:
                        oldHash = txRecord.hash;
                        signedTX = obj.rawTx;
                        hash = obj.hash;
                        _context21.next = 19;
                        return pull_1.btcRechargeToServer(toAddr, hash, unitTools_1.btc2Sat(pay).toString(), minerFee, oldHash);

                    case 19:
                        canTransfer = _context21.sent;

                        if (canTransfer) {
                            _context21.next = 22;
                            break;
                        }

                        return _context21.abrupt("return");

                    case 22:
                        _context21.next = 24;
                        return exports.sendRawTransactionBTC(signedTX);

                    case 24:
                        h = _context21.sent;

                        if (h) {
                            _context21.next = 27;
                            break;
                        }

                        return _context21.abrupt("return");

                    case 27:
                        // 维护本地交易记录
                        t = new Date();
                        // tslint:disable-next-line:no-unnecessary-local-variable

                        record = Object.assign({}, txRecord, { hash: hash,
                            toAddr: toAddr, time: t.getTime(), fee: minerFee, minerFeeLevel: minerFeeLevel });
                        return _context21.abrupt("return", record);

                    case 30:
                    case "end":
                        return _context21.stop();
                }
            }
        }, _callee21, this);
    }));
};
/**
 * btc重发充值
 */
exports.resendBtcRecharge = function (psw, txRecord) {
    return __awaiter(undefined, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee22() {
        var toAddr, fromAddr, minerFeeLevel, pay, minerFee, ret, oldHash, hash, signedTx, canTransfer, h, t, record;
        return regeneratorRuntime.wrap(function _callee22$(_context22) {
            while (1) {
                switch (_context22.prev = _context22.next) {
                    case 0:
                        _context22.next = 2;
                        return pull_1.getBtcBankAddr();

                    case 2:
                        toAddr = _context22.sent;

                        if (toAddr) {
                            _context22.next = 5;
                            break;
                        }

                        return _context22.abrupt("return");

                    case 5:
                        fromAddr = txRecord.fromAddr;
                        minerFeeLevel = txRecord.minerFeeLevel;
                        pay = txRecord.pay;
                        minerFee = tools_1.fetchBtcMinerFee(minerFeeLevel);
                        _context22.next = 11;
                        return exports.resendSignRawTransactionBTC(txRecord.hash, psw, fromAddr, minerFeeLevel);

                    case 11:
                        ret = _context22.sent;

                        if (ret) {
                            _context22.next = 14;
                            break;
                        }

                        return _context22.abrupt("return");

                    case 14:
                        oldHash = txRecord.hash;
                        hash = ret.newTxid;
                        signedTx = ret.rawTx;
                        _context22.next = 19;
                        return pull_1.btcRechargeToServer(toAddr, hash, unitTools_1.btc2Sat(pay).toString(), minerFee, oldHash);

                    case 19:
                        canTransfer = _context22.sent;

                        if (canTransfer) {
                            _context22.next = 22;
                            break;
                        }

                        return _context22.abrupt("return");

                    case 22:
                        _context22.next = 24;
                        return exports.sendRawTransactionBTC(signedTx);

                    case 24:
                        h = _context22.sent;

                        if (h) {
                            _context22.next = 27;
                            break;
                        }

                        return _context22.abrupt("return");

                    case 27:
                        // 维护本地交易记录
                        t = new Date();
                        // tslint:disable-next-line:no-unnecessary-local-variable

                        record = Object.assign({}, txRecord, { hash: hash, time: t.getTime(), fee: minerFee, minerFeeLevel: minerFeeLevel });
                        return _context22.abrupt("return", record);

                    case 30:
                    case "end":
                        return _context22.stop();
                }
            }
        }, _callee22, this);
    }));
};
/**
 *
 * 提现
 */
exports.withdraw = function (passwd, toAddr, currencyName, amount) {
    return __awaiter(undefined, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee23() {
        return regeneratorRuntime.wrap(function _callee23$(_context23) {
            while (1) {
                switch (_context23.prev = _context23.next) {
                    case 0:
                        if (!(currencyName === 'BTC')) {
                            _context23.next = 4;
                            break;
                        }

                        return _context23.abrupt("return", exports.btcWithdraw(passwd, toAddr, amount));

                    case 4:
                        return _context23.abrupt("return", exports.ethWithdraw(passwd, toAddr, amount));

                    case 5:
                    case "end":
                        return _context23.stop();
                }
            }
        }, _callee23, this);
    }));
};
// eth提现
exports.ethWithdraw = function (passwd, toAddr, amount) {
    return __awaiter(undefined, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee24() {
        var close, verify, hash, tx;
        return regeneratorRuntime.wrap(function _callee24$(_context24) {
            while (1) {
                switch (_context24.prev = _context24.next) {
                    case 0:
                        close = root_1.popNew('app-components1-loading-loading', { text: tools_1.getStaticLanguage().transfer.withdraw });
                        _context24.next = 3;
                        return walletTools_1.VerifyIdentidy(passwd);

                    case 3:
                        verify = _context24.sent;

                        if (verify) {
                            _context24.next = 8;
                            break;
                        }

                        close.callback(close.widget);
                        root_1.popNew('app-components1-message-message', { content: tools_1.getStaticLanguage().transfer.wrongPsw });
                        return _context24.abrupt("return");

                    case 8:
                        _context24.next = 10;
                        return pull_1.withdrawFromServer(toAddr, unitTools_1.eth2Wei(amount));

                    case 10:
                        hash = _context24.sent;

                        close.callback(close.widget);
                        if (hash) {
                            root_1.popNew('app-components1-message-message', { content: tools_1.getStaticLanguage().transfer.withdrawSuccess });
                            tx = {
                                hash: hash,
                                addr: toAddr,
                                txType: interface_1.TxType.Receipt,
                                fromAddr: '',
                                toAddr: toAddr,
                                pay: Number(amount),
                                time: new Date().getTime(),
                                status: interface_1.TxStatus.Pending,
                                confirmedBlockNumber: 0,
                                needConfirmedBlockNumber: 0,
                                info: '',
                                currencyName: 'ETH',
                                fee: 0,
                                nonce: undefined
                            };

                            dataCenter_1.dataCenter.timerUpdateTxWithdraw(tx);
                            pull_1.getWithdrawLogs('ETH');
                            tools_1.updateLocalTx(tx);
                        }
                        return _context24.abrupt("return", hash);

                    case 14:
                    case "end":
                        return _context24.stop();
                }
            }
        }, _callee24, this);
    }));
};
// btc提现
exports.btcWithdraw = function (passwd, toAddr, amount) {
    return __awaiter(undefined, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee25() {
        var close, verify, hash, tx;
        return regeneratorRuntime.wrap(function _callee25$(_context25) {
            while (1) {
                switch (_context25.prev = _context25.next) {
                    case 0:
                        close = root_1.popNew('app-components1-loading-loading', { text: tools_1.getStaticLanguage().transfer.withdraw });
                        _context25.next = 3;
                        return walletTools_1.VerifyIdentidy(passwd);

                    case 3:
                        verify = _context25.sent;

                        if (verify) {
                            _context25.next = 8;
                            break;
                        }

                        close.callback(close.widget);
                        root_1.popNew('app-components1-message-message', { content: tools_1.getStaticLanguage().transfer.wrongPsw });
                        return _context25.abrupt("return");

                    case 8:
                        _context25.next = 10;
                        return pull_1.btcWithdrawFromServer(toAddr, unitTools_1.btc2Sat(amount).toString());

                    case 10:
                        hash = _context25.sent;

                        close.callback(close.widget);
                        if (hash) {
                            root_1.popNew('app-components1-message-message', { content: tools_1.getStaticLanguage().transfer.withdrawSuccess });
                            tx = {
                                hash: hash,
                                addr: toAddr,
                                txType: interface_1.TxType.Receipt,
                                fromAddr: '',
                                toAddr: toAddr,
                                pay: Number(amount),
                                time: new Date().getTime(),
                                status: interface_1.TxStatus.Pending,
                                confirmedBlockNumber: 0,
                                needConfirmedBlockNumber: 0,
                                info: '',
                                currencyName: 'BTC',
                                fee: 0,
                                nonce: undefined
                            };

                            dataCenter_1.dataCenter.timerUpdateTxWithdraw(tx);
                            pull_1.getWithdrawLogs('BTC');
                            tools_1.updateLocalTx(tx);
                        }
                        return _context25.abrupt("return", hash);

                    case 14:
                    case "end":
                        return _context25.stop();
                }
            }
        }, _callee25, this);
    }));
};
})