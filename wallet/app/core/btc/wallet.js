_$define("app/core/btc/wallet", function (require, exports, module){
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
 * BTC HD wallet implementaion
 */
var bip39_1 = require("../thirdparty/bip39");
var bitcore_lib_1 = require("../thirdparty/bitcore-lib");
var api_1 = require("./api");

var UTXO = function UTXO() {
    _classCallCheck(this, UTXO);
};

exports.UTXO = UTXO;

var Output = function Output() {
    _classCallCheck(this, Output);
};

exports.Output = Output;

var BTCWallet = function () {
    function BTCWallet() {
        _classCallCheck(this, BTCWallet);

        this.usedAdresses = {};
        this.utxos = [];
        this.isLocked = false;
        this.isInitialized = false;
        // todo
    }
    /* tslint:disable:jsdoc-format */
    /* tslint:disable: no-redundant-jsdoc*/
    /**
    * Generate an HD wallet from scratch
    *
    * @static
    * @param {number} strength Default to 128, must be a divided by 32
    * @param {NETWORK} network Network idenitifer
    * @param {LANGUAGE} lang Mnenomic language
    * @param {string} [passphrase] Salt used to provide extra credentials to generate seed, default to null
    * @returns {BTCWallet}
    * @memberof BTCWallet
    */


    _createClass(BTCWallet, [{
        key: "getTotalBlance",
        value: function getTotalBlance() {
            return this.totalBalance;
        }
    }, {
        key: "setTotalBlance",
        value: function setTotalBlance(totalBalance) {
            this.totalBalance = totalBalance;
        }
    }, {
        key: "lock",
        value: function lock() {
            if (this.isLocked === false) {
                this.isLocked = true;
            }
        }
    }, {
        key: "unlock",
        value: function unlock() {
            if (this.isLocked === true) {
                this.isLocked = false;
            }
        }
    }, {
        key: "exportMnemonics",
        value: function exportMnemonics() {
            if (this.isLocked === true) {
                throw new Error('You need to unlock wallet first!');
            }
            return this.mnemonics;
        }
        /**
         * Export WIF format private key for specified index
         *
         * @param {number} index
         * @returns {string}
         * @memberof BTCWallet
         */

    }, {
        key: "exportWIFOf",
        value: function exportWIFOf(index) {
            return this.privateKeyOf(index).toWIF();
        }
    }, {
        key: "toJSON",
        value: function toJSON() {
            if (!this.isLocked) {
                throw new Error('You must lock the wallet first and then export the JSON format representation');
            }
            return JSON.stringify({
                rootxpriv: this.rootXpriv,
                rootseed: this.rootSeed,
                mnemonics: this.mnemonics,
                network: this.network,
                language: this.language
            });
        }
        /**
         * Derive address according to `index`
         *
         * @param {number} index Index number
         * @returns {string} Derived address
         * @memberof BTCWallet
         */

    }, {
        key: "derive",
        value: function derive(index) {
            return this.privateKeyOf(index).toAddress().toString();
        }
        /**
         * build raw btc transaction from all available utxos, using index 0 address as the default change address.
         *
         * Our spend policies are:
         *
         * 1. utxo must at least `MIN_CONFIRMATIONS`
         * 2. spend the most matured coins
         *
         * TODO: design a smarter stratagy (http://bitcoinfees.com/)
         *
         * @param {Output} output Specify `toAddr`, `amount` and `chgaddr`
         * @param {PRIORITY} priority How long the user wish to waiting for
         * @returns {Promise<string>} Transaction hash of this transaction
         * @memberof BTCWallet
         */

    }, {
        key: "buildRawTransaction",
        value: function buildRawTransaction(output, minerFee) {
            return __awaiter(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
                var collected, accumlated, i, keySet, _i, rawTx, serialized;

                return regeneratorRuntime.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                if (this.isInitialized) {
                                    _context.next = 2;
                                    break;
                                }

                                throw new Error('Wallet uninitialized!');

                            case 2:
                                if (!(output.amount >= this.totalBalance)) {
                                    _context.next = 4;
                                    break;
                                }

                                throw new Error('Insufficient totalBalance!');

                            case 4:
                                // const fee = await BtcApi.estimateFee(priorityMap[priority]);
                                // sort by transaction confirmations
                                this.utxos.sort(function (a, b) {
                                    return a.confirmations - b.confirmations;
                                });
                                collected = [];
                                accumlated = 0;
                                i = 0;

                            case 8:
                                if (!(i < this.utxos.length)) {
                                    _context.next = 16;
                                    break;
                                }

                                accumlated += this.utxos[i].amount;
                                collected.push(this.utxos[i]);

                                if (!(accumlated > output.amount)) {
                                    _context.next = 13;
                                    break;
                                }

                                return _context.abrupt("break", 16);

                            case 13:
                                i++;
                                _context.next = 8;
                                break;

                            case 16:
                                keySet = [];

                                for (_i = 0; _i < collected.length; _i++) {
                                    keySet.push(this.privateKeyOf(this.usedAdresses[collected[_i].address]));
                                }
                                console.log('keyset', keySet);
                                console.log('collected: ', collected);
                                console.log('accumlated: ', accumlated);
                                console.log('keyset length: ', keySet.length);
                                output.amount = bitcore_lib_1.bitcore.Unit.fromBTC(output.amount).toSatoshis();
                                rawTx = new bitcore_lib_1.bitcore.Transaction().feePerKb(minerFee).from(collected).to(output.toAddr, output.amount).change(output.chgAddr === undefined ? this.derive(0) : output.chgAddr).enableRBF().sign(keySet);

                                console.log('rawTx:', rawTx);
                                console.log('txFee:', rawTx.getFee());
                                serialized = rawTx.serialize(true);

                                console.log('serialized:', serialized);
                                return _context.abrupt("return", [serialized, rawTx.getFee(), rawTx.hash]);

                            case 29:
                            case "end":
                                return _context.stop();
                        }
                    }
                }, _callee, this);
            }));
        }
    }, {
        key: "coinSelector",
        value: function coinSelector(address, amount) {
            return __awaiter(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
                var utxos, i, picked, sum, _i2, _i3, accumlated, result, _i4;

                return regeneratorRuntime.wrap(function _callee2$(_context2) {
                    while (1) {
                        switch (_context2.prev = _context2.next) {
                            case 0:
                                _context2.next = 2;
                                return api_1.BtcApi.getAddrUnspent(address);

                            case 2:
                                utxos = _context2.sent;
                                i = 0;

                            case 4:
                                if (!(i < utxos.length)) {
                                    _context2.next = 10;
                                    break;
                                }

                                if (!(utxos[i].satoshis === amount)) {
                                    _context2.next = 7;
                                    break;
                                }

                                return _context2.abrupt("return", utxos[i]);

                            case 7:
                                i++;
                                _context2.next = 4;
                                break;

                            case 10:
                                picked = utxos.filter(function (u) {
                                    return u.satoshis < amount;
                                });
                                sum = 0;

                                for (_i2 = 0; _i2 < picked.length; _i2++) {
                                    sum += picked[_i2].satoshis;
                                }

                                if (!(sum === amount)) {
                                    _context2.next = 15;
                                    break;
                                }

                                return _context2.abrupt("return", picked);

                            case 15:
                                if (!(sum < amount)) {
                                    _context2.next = 23;
                                    break;
                                }

                                _i3 = 0;

                            case 17:
                                if (!(_i3 < utxos.length)) {
                                    _context2.next = 23;
                                    break;
                                }

                                if (!(utxos[_i3].satoshis > amount)) {
                                    _context2.next = 20;
                                    break;
                                }

                                return _context2.abrupt("return", utxos[_i3]);

                            case 20:
                                _i3++;
                                _context2.next = 17;
                                break;

                            case 23:
                                utxos.sort(function (x, y) {
                                    return x.satoshis < y.satoshis;
                                });
                                accumlated = 0;
                                result = [];
                                _i4 = 0;

                            case 27:
                                if (!(_i4 < utxos.length)) {
                                    _context2.next = 35;
                                    break;
                                }

                                accumlated += utxos[_i4].satoshis;
                                result.push(utxos[_i4]);

                                if (!(accumlated > amount)) {
                                    _context2.next = 32;
                                    break;
                                }

                                return _context2.abrupt("return", result);

                            case 32:
                                _i4++;
                                _context2.next = 27;
                                break;

                            case 35:
                                return _context2.abrupt("return", []);

                            case 36:
                            case "end":
                                return _context2.stop();
                        }
                    }
                }, _callee2, this);
            }));
        }
    }, {
        key: "buildRawTransactionFromSingleAddress",
        value: function buildRawTransactionFromSingleAddress(address, output, minerFee) {
            return __awaiter(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
                var utxos, rawTx;
                return regeneratorRuntime.wrap(function _callee3$(_context3) {
                    while (1) {
                        switch (_context3.prev = _context3.next) {
                            case 0:
                                _context3.next = 2;
                                return this.coinSelector(address, output.amount * 1e8 + minerFee);

                            case 2:
                                utxos = _context3.sent;

                                output.amount = bitcore_lib_1.bitcore.Unit.fromBTC(output.amount).toSatoshis();
                                rawTx = new bitcore_lib_1.bitcore.Transaction().feePerKb(minerFee).from(utxos).to(output.toAddr, output.amount).change(output.chgAddr === undefined ? this.derive(0) : output.chgAddr).enableRBF().sign([this.privateKeyOf(this.usedAdresses[address.trim()])]);

                                console.log('usedAddress', this.usedAdresses);
                                console.log('addres', address);
                                return _context3.abrupt("return", {
                                    rawTx: rawTx.serialize(true),
                                    fee: rawTx.getFee(),
                                    hash: rawTx.hash
                                });

                            case 8:
                            case "end":
                                return _context3.stop();
                        }
                    }
                }, _callee3, this);
            }));
        }
        // TODO: we should distinguish `confirmed`, `unconfirmed` and `spendable`

    }, {
        key: "calcBalance",
        value: function calcBalance(address) {
            return __awaiter(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
                var sum, i, _i5;

                return regeneratorRuntime.wrap(function _callee4$(_context4) {
                    while (1) {
                        switch (_context4.prev = _context4.next) {
                            case 0:
                                sum = 0;
                                // TODO: use array.reduce ?

                                if (address === undefined) {
                                    for (i = 0; i < this.utxos.length; i++) {
                                        sum += this.utxos[i].amount;
                                    }
                                } else {
                                    for (_i5 = 0; _i5 < this.utxos.length; _i5++) {
                                        if (this.utxos[_i5].address === address) {
                                            sum += this.utxos[_i5].amount;
                                        }
                                    }
                                }
                                return _context4.abrupt("return", sum);

                            case 3:
                            case "end":
                                return _context4.stop();
                        }
                    }
                }, _callee4, this);
            }));
        }
    }, {
        key: "resendTx",
        value: function resendTx(originTxid, minerFee) {
            return __awaiter(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
                var txInfo, vin, vout, utxos, fromAddr, i, id, _vout, address, satoshis, addr, script, scriptPubkey, utxo, tx, _i6, value, _address, keySet, _i7;

                return regeneratorRuntime.wrap(function _callee5$(_context5) {
                    while (1) {
                        switch (_context5.prev = _context5.next) {
                            case 0:
                                txInfo = void 0;
                                _context5.prev = 1;
                                _context5.next = 4;
                                return api_1.BtcApi.getTxInfo(originTxid);

                            case 4:
                                txInfo = _context5.sent;
                                _context5.next = 10;
                                break;

                            case 7:
                                _context5.prev = 7;
                                _context5.t0 = _context5["catch"](1);
                                throw new Error('Re-send an unknown transaction');

                            case 10:
                                if (!(txInfo.confirmations > 0 && txInfo.blockheight !== -1)) {
                                    _context5.next = 12;
                                    break;
                                }

                                throw new Error('Transaction has been succeed');

                            case 12:
                                vin = txInfo.vin;
                                vout = txInfo.vout;
                                utxos = [];
                                fromAddr = '';

                                for (i = 0; i < vin.length; i++) {
                                    id = vin[i].txid;
                                    _vout = vin[i].vout;
                                    address = vin[i].addr;

                                    fromAddr = address;
                                    satoshis = vin[i].valueSat;
                                    addr = bitcore_lib_1.bitcore.Address.fromString(address);
                                    script = bitcore_lib_1.bitcore.Script.buildPublicKeyHashOut(addr);
                                    scriptPubkey = script.toHex();
                                    utxo = new bitcore_lib_1.bitcore.Transaction.UnspentOutput({
                                        txid: id,
                                        vout: _vout,
                                        address: address,
                                        scriptPubKey: scriptPubkey,
                                        satoshis: satoshis
                                    });

                                    utxos.push(utxo);
                                }
                                tx = new bitcore_lib_1.bitcore.Transaction();

                                for (_i6 = 0; _i6 < vout.length; _i6++) {
                                    if (vout[_i6].scriptPubKey.addresses[0] !== fromAddr) {
                                        value = bitcore_lib_1.bitcore.Unit.fromBTC(vout[_i6].value).toSatoshis();
                                        _address = vout[_i6].scriptPubKey.addresses[0];

                                        tx.to(_address, value);
                                    }
                                }
                                keySet = [];

                                for (_i7 = 0; _i7 < utxos.length; _i7++) {
                                    keySet.push(this.privateKeyOf(this.usedAdresses[utxos[_i7].address]));
                                }
                                tx.from(utxos).change(this.derive(0)).enableRBF().feePerKb(minerFee).sign(keySet);
                                return _context5.abrupt("return", {
                                    rawTx: tx.serialize(),
                                    originTxid: originTxid,
                                    newTxid: tx.hash,
                                    fee: tx.getFee()
                                });

                            case 23:
                            case "end":
                                return _context5.stop();
                        }
                    }
                }, _callee5, this, [[1, 7]]);
            }));
        }
    }, {
        key: "init",
        value: function init() {
            return __awaiter(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
                return regeneratorRuntime.wrap(function _callee6$(_context6) {
                    while (1) {
                        switch (_context6.prev = _context6.next) {
                            case 0:
                                if (this.isInitialized) {
                                    _context6.next = 15;
                                    break;
                                }

                                _context6.prev = 1;
                                _context6.next = 4;
                                return this.scanUsedAddress();

                            case 4:
                                _context6.next = 6;
                                return this.getUnspentOutputs();

                            case 6:
                                _context6.next = 8;
                                return this.calcBalance();

                            case 8:
                                this.totalBalance = _context6.sent;

                                this.isInitialized = true;
                                _context6.next = 15;
                                break;

                            case 12:
                                _context6.prev = 12;
                                _context6.t0 = _context6["catch"](1);
                                throw new Error('Failed to initialize wallet!');

                            case 15:
                                console.log('Wallet initialize successfully!');

                            case 16:
                            case "end":
                                return _context6.stop();
                        }
                    }
                }, _callee6, this, [[1, 12]]);
            }));
        }
    }, {
        key: "getUnspentOutputs",
        value: function getUnspentOutputs() {
            return __awaiter(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee7() {
                var _this = this;

                var _loop, i;

                return regeneratorRuntime.wrap(function _callee7$(_context8) {
                    while (1) {
                        switch (_context8.prev = _context8.next) {
                            case 0:
                                this.utxos = [];
                                _loop = /*#__PURE__*/regeneratorRuntime.mark(function _loop(i) {
                                    var address, addrUtxo;
                                    return regeneratorRuntime.wrap(function _loop$(_context7) {
                                        while (1) {
                                            switch (_context7.prev = _context7.next) {
                                                case 0:
                                                    address = _this.derive(i);
                                                    _context7.next = 3;
                                                    return api_1.BtcApi.getAddrUnspent(address);

                                                case 3:
                                                    addrUtxo = _context7.sent;

                                                    addrUtxo.forEach(function (utxo) {
                                                        _this.utxos.push({
                                                            txid: utxo.txid,
                                                            vout: utxo.vout,
                                                            address: address,
                                                            scriptPubKey: utxo.scriptPubKey,
                                                            amount: utxo.amount,
                                                            confirmations: utxo.confirmations
                                                        });
                                                    });

                                                case 5:
                                                case "end":
                                                    return _context7.stop();
                                            }
                                        }
                                    }, _loop, _this);
                                });
                                i = 0;

                            case 3:
                                if (!(i < Object.keys(this.usedAdresses).length)) {
                                    _context8.next = 8;
                                    break;
                                }

                                return _context8.delegateYield(_loop(i), "t0", 5);

                            case 5:
                                i++;
                                _context8.next = 3;
                                break;

                            case 8:
                                return _context8.abrupt("return", this.utxos);

                            case 9:
                            case "end":
                                return _context8.stop();
                        }
                    }
                }, _callee7, this);
            }));
        }
        // TODO: consider make this as a server side api

    }, {
        key: "scanUsedAddress",
        value: function scanUsedAddress() {
            return __awaiter(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee8() {
                var count, i, addr, res;
                return regeneratorRuntime.wrap(function _callee8$(_context9) {
                    while (1) {
                        switch (_context9.prev = _context9.next) {
                            case 0:
                                count = 0;
                                i = 0;

                                this.usedAdresses = {};
                                i = 0;

                            case 4:
                                addr = this.derive(i);
                                _context9.next = 7;
                                return api_1.BtcApi.getAddrTxHistory(addr);

                            case 7:
                                res = _context9.sent;

                                if (!res || res.txs.length === 0) {
                                    count = count + 1;
                                } else {
                                    this.usedAdresses[addr] = i;
                                    count = 0;
                                }

                                if (!(count > BTCWallet.GAP_LIMIT)) {
                                    _context9.next = 11;
                                    break;
                                }

                                return _context9.abrupt("break", 14);

                            case 11:
                                i++;
                                _context9.next = 4;
                                break;

                            case 14:
                                return _context9.abrupt("return", i - BTCWallet.GAP_LIMIT);

                            case 15:
                            case "end":
                                return _context9.stop();
                        }
                    }
                }, _callee8, this);
            }));
        }
    }, {
        key: "privateKeyOf",
        value: function privateKeyOf(index) {
            if (this.isLocked === true) {
                throw new Error('You need to unlock wallet first!');
            }
            var path = void 0;
            var parent = new bitcore_lib_1.bitcore.HDPrivateKey(this.rootXpriv);
            if (parent.network.name === 'testnet') {
                path = BTCWallet.BIP44_BTC_TESTNET_BASE_PATH + index;
            } else if (parent.network.name === 'livenet') {
                path = BTCWallet.BIP44_BTC_MAINNET_BASE_PATH + index;
            } else {
                throw new Error('Unexpected network name!');
            }
            return parent.derive(path).privateKey;
        }
    }], [{
        key: "generate",
        value: function generate(strength, network, lang, passphrase) {
            var mn = new bip39_1.Mnemonic(lang);
            passphrase = passphrase || '';
            strength = strength || 128;
            var mnemonics = mn.generate(strength);
            if (!mn.check(mnemonics)) {
                throw new Error('Invalid Mnemonic words!');
            }
            var seed = mn.toSeed(mnemonics, passphrase);
            var hdpriv = bitcore_lib_1.bitcore.HDPrivateKey.fromSeed(seed, network);
            var btcwallet = new BTCWallet();
            btcwallet.rootXpriv = hdpriv.toString();
            // TODO: encrypt
            btcwallet.mnemonics = mnemonics;
            return btcwallet;
        }
        /**
         * Build HD wallet from mnemonic words
         *
         * @static
         * @param {string} mnemonic Mnemonic words
         * @param {("mainnet" | "testnet")} network Which network to use
         * @param {("english" | "chinese_simplified" | "chinese_traditional")} lang Language
         * @param {string} [passphrase] Passphrase used as salt, don't recommand to use
         * @returns {BTCWallet}
         * @memberof BTCWallet
         */

    }, {
        key: "fromMnemonic",
        value: function fromMnemonic(mnemonic, network, lang, passphrase) {
            var mn = new bip39_1.Mnemonic(lang);
            passphrase = passphrase || '';
            if (!mn.check(mnemonic)) {
                throw new Error('Invalid Mnemonic words!');
            }
            var seed = mn.toSeed(mnemonic, passphrase);
            var hdpriv = bitcore_lib_1.bitcore.HDPrivateKey.fromSeed(seed, network);
            var btcwallt = new BTCWallet();
            btcwallt.rootXpriv = hdpriv.toString();
            btcwallt.mnemonics = mnemonic;
            btcwallt.rootSeed = seed;
            btcwallt.network = network;
            btcwallt.language = lang;
            btcwallt.lock();
            return btcwallt;
        }
    }, {
        key: "fromSeed",
        value: function fromSeed(seed, network, lang) {
            // TODO: check seed ?
            var hdpriv = bitcore_lib_1.bitcore.HDPrivateKey.fromSeed(seed, network);
            var btcwallt = new BTCWallet();
            btcwallt.rootXpriv = hdpriv.toString();
            btcwallt.rootSeed = seed;
            btcwallt.network = network;
            btcwallt.language = lang;
            btcwallt.lock();
            return btcwallt;
        }
        /**
         * Restore wallet from previously exported json string
         *
         * @static
         * @param {string} json
         * @param {string} passphrase
         * @returns {BTCWallet}
         * @memberof BTCWallet
         */

    }, {
        key: "fromJSON",
        value: function fromJSON(json, passphrase) {
            var obj = JSON.parse(json);
            var rootseed = obj.rootseed;
            var network = obj.network;
            var language = obj.language;
            return BTCWallet.fromSeed(rootseed, network, language);
        }
    }]);

    return BTCWallet;
}();
// m/bip_number/coin_type/account/internal_or_external/index, we don't use change address


BTCWallet.BIP44_BTC_TESTNET_BASE_PATH = 'm/44\'/1\'/0\'/0/';
BTCWallet.BIP44_BTC_MAINNET_BASE_PATH = 'm/44\'/0\'/0\'/0/';
// most look ahead addresses
BTCWallet.GAP_LIMIT = 3;
// minimum confirmations
BTCWallet.MIN_CONFIRMATIONS = 6;
BTCWallet.SAFELOW_FEE = 2;
BTCWallet.HIGHEST_FEE = 10;
exports.BTCWallet = BTCWallet;
})