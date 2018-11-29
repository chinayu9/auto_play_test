_$define("app/core/eth/wallet", function (require, exports, module){
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
 * ETH wallet implementation
 */
var config_1 = require("../../config");
var config_2 = require("../config");
var bip39_1 = require("../thirdparty/bip39");
var ethereumjs_wallet_hd_0_6_0_1 = require("../thirdparty/ethereumjs-wallet-hd-0.6.0");
var web3_min_1 = require("../thirdparty/web3.min");
var api_1 = require("./api");
var tokens_1 = require("./tokens");
var LANGUAGES = { english: 0, chinese_simplified: 1, chinese_traditional: 2 };
var DEFAULT_DERIVE_PATH = 'm/44\'/60\'/0\'/0/0';

var EthWallet = function () {
    function EthWallet() {
        _classCallCheck(this, EthWallet);

        this._txs = [];
        this._balance = 0;
        this._mnemonic = '';
        this.api = new api_1.Api();
    }

    _createClass(EthWallet, [{
        key: "exportKeystore",

        /**
         * This is a CPU intensive work, may take about 10 seconds!!!
         *
         * @param {string} passwd used to decrypt the keystore file
         * @returns {string}
         * @memberof EthWallet
         */
        value: function exportKeystore(passwd) {
            var decrypted = this._privKey;
            decrypted = ethereumjs_wallet_hd_0_6_0_1.ethereumjs.Buffer.Buffer(decrypted, 'hex'); // decrypted should be a Buffer
            var wlt = ethereumjs_wallet_hd_0_6_0_1.ethereumjs.Wallet.fromPrivateKey(decrypted);
            return wlt.toV3String(passwd);
        }
        /**
         * export private key of this wallet
         *
         * @returns {string}
         * @memberof EthWallet
         */

    }, {
        key: "exportPrivateKey",
        value: function exportPrivateKey() {
            return this._privKey;
        }
        /**
         * export the mnemonic words of this wallet
         *
         * @returns {string}
         * @memberof EthWallet
         */

    }, {
        key: "exportMnemonic",
        value: function exportMnemonic() {
            return this._mnemonic;
        }
        /**
         * sign a raw transaction
         *
         * @param {Transaction} txObj an instance of raw transaction
         * @returns signed and serilized transaction, could be send to Ethereum network via 'sendRawTransaction' RPC call
         * @memberof EthWallet
         */

    }, {
        key: "signRawTransaction",
        value: function signRawTransaction(txObj) {
            var tx = new ethereumjs_wallet_hd_0_6_0_1.ethereumjs.Tx();
            tx.to = txObj.to;
            tx.nonce = txObj.nonce;
            tx.gasPrice = txObj.gasPrice;
            tx.gasLimit = txObj.gasLimit;
            tx.value = txObj.value;
            tx.data = txObj.data;
            tx.sign(ethereumjs_wallet_hd_0_6_0_1.ethereumjs.Buffer.Buffer(this._privKey, 'hex'));
            return tx.serialize();
        }
    }, {
        key: "signRawTransactionHash",
        value: function signRawTransactionHash(txObj) {
            var tx = new ethereumjs_wallet_hd_0_6_0_1.ethereumjs.Tx();
            tx.to = txObj.to;
            tx.nonce = txObj.nonce;
            tx.gasPrice = txObj.gasPrice;
            tx.gasLimit = txObj.gasLimit;
            tx.value = txObj.value;
            tx.data = txObj.data;
            tx.sign(ethereumjs_wallet_hd_0_6_0_1.ethereumjs.Buffer.Buffer(this._privKey, 'hex'));
            return {
                nonce: txObj.nonce,
                hash: tx.hash().toString('hex'),
                signedTx: tx.serialize()
            };
        }
    }, {
        key: "toJSON",
        value: function toJSON() {
            var wlt = {
                nickname: this._nickName,
                address: this._address,
                balance: this._balance,
                txs: this._txs,
                mnemonic: this._mnemonic,
                privkey: this._privKey,
                masterseed: this._masterSeed
            };
            return JSON.stringify(wlt);
        }
        /**
         * Derive address according to `index`. Return EthWallet object
         *
         * @param {number} index Which address you want to use
         * @returns {EthWallet}
         * @memberof EthWallet
         */

    }, {
        key: "selectAddress",
        value: function selectAddress(index) {
            if (this._masterSeed.length === 0) {
                throw new Error('This is not a HD wallet');
            }
            var masterSeed = this._masterSeed;
            var rootNode = ethereumjs_wallet_hd_0_6_0_1.ethereumjs.WalletHD.fromMasterSeed(ethereumjs_wallet_hd_0_6_0_1.ethereumjs.Buffer.Buffer(masterSeed, 'hex'));
            var path = 'm/44\'/60\'/0\'/0/' + index.toString();
            var hdwlt = rootNode.derivePath(path);
            var wlt = hdwlt.getWallet();
            return wlt.getChecksumAddressString();
        }
        /**
         * Derive address according to `index`. Return EthWallet object
         *
         * @param {number} index Which address you want to use
         * @returns {EthWallet}
         * @memberof EthWallet
         */

    }, {
        key: "selectAddressWlt",
        value: function selectAddressWlt(index) {
            if (this._masterSeed.length === 0) {
                throw new Error('This is not a HD wallet');
            }
            var masterSeed = this._masterSeed;
            var rootNode = ethereumjs_wallet_hd_0_6_0_1.ethereumjs.WalletHD.fromMasterSeed(ethereumjs_wallet_hd_0_6_0_1.ethereumjs.Buffer.Buffer(masterSeed, 'hex'));
            var path = 'm/44\'/60\'/0\'/0/' + index.toString();
            var hdwlt = rootNode.derivePath(path);
            var wlt = hdwlt.getWallet();
            var gwlt = new EthWallet();
            gwlt._address = wlt.getChecksumAddressString();
            gwlt._privKey = wlt.getPrivateKey().toString('hex');
            gwlt._balance = 0;
            gwlt._masterSeed = this._masterSeed;
            return gwlt;
        }
    }, {
        key: "scanUsedAddress",
        value: function scanUsedAddress() {
            return __awaiter(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
                var count, i, addr, res;
                return regeneratorRuntime.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                count = 0;
                                i = 0;
                                i = 0;

                            case 3:
                                addr = this.selectAddress(i);
                                _context.next = 6;
                                return this.api.getAllTransactionsOf(addr);

                            case 6:
                                res = _context.sent;

                                if (!(res === undefined || res.hasOwnProperty('error'))) {
                                    _context.next = 9;
                                    break;
                                }

                                throw new Error('Response error!');

                            case 9:
                                if (res.result.length === 0) {
                                    count = count + 1;
                                } else {
                                    count = 0;
                                }

                                if (!(count > EthWallet.GAP_LIMIT)) {
                                    _context.next = 12;
                                    break;
                                }

                                return _context.abrupt("break", 15);

                            case 12:
                                i++;
                                _context.next = 3;
                                break;

                            case 15:
                                return _context.abrupt("return", i - EthWallet.GAP_LIMIT);

                            case 16:
                            case "end":
                                return _context.stop();
                        }
                    }
                }, _callee, this);
            }));
        }
    }, {
        key: "scanTokenUsedAddress",
        value: function scanTokenUsedAddress(contractAddress) {
            return __awaiter(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
                var count, i, addr, res;
                return regeneratorRuntime.wrap(function _callee2$(_context2) {
                    while (1) {
                        switch (_context2.prev = _context2.next) {
                            case 0:
                                count = 0;
                                i = 0;
                                i = 0;

                            case 3:
                                addr = this.selectAddress(i);
                                _context2.next = 6;
                                return this.api.getTokenTransferEvents(contractAddress, addr);

                            case 6:
                                res = _context2.sent;

                                if (!(res === undefined || res.hasOwnProperty('error'))) {
                                    _context2.next = 9;
                                    break;
                                }

                                throw new Error('Response error!');

                            case 9:
                                if (res.result.length === 0) {
                                    count = count + 1;
                                } else {
                                    count = 0;
                                }

                                if (!(count > EthWallet.GAP_LIMIT)) {
                                    _context2.next = 12;
                                    break;
                                }

                                return _context2.abrupt("break", 15);

                            case 12:
                                i++;
                                _context2.next = 3;
                                break;

                            case 15:
                                return _context2.abrupt("return", i - EthWallet.GAP_LIMIT);

                            case 16:
                            case "end":
                                return _context2.stop();
                        }
                    }
                }, _callee2, this);
            }));
        }
    }, {
        key: "nickName",
        get: function get() {
            return this._nickName;
        },
        set: function set(name) {
            this._nickName = name;
        }
    }, {
        key: "address",
        get: function get() {
            return this._address;
        }
    }, {
        key: "balance",
        get: function get() {
            return this._balance;
        },
        set: function set(value) {
            this._balance = value;
        }
        // TODO: how to define a tx history?

    }, {
        key: "txHistory",
        get: function get() {
            return this._txs;
        },
        set: function set(txs) {
            this._txs = txs;
        }
    }, {
        key: "masterSeed",
        get: function get() {
            return this._masterSeed;
        }
        /**
         * recover wallet from mnenomic words
         *
         * @static
         * @param {string} mnemonic words
         * @param {string} language what's the language of the mnenomic words
         * @returns {EthWallet}
         * @memberof EthWallet
         */

    }], [{
        key: "fromJSON",
        value: function fromJSON(jsonstring) {
            var wlt = JSON.parse(jsonstring);
            var gwlt = new EthWallet();
            gwlt._nickName = wlt.nickname;
            gwlt._address = wlt.address;
            gwlt._balance = wlt.balance;
            gwlt._mnemonic = wlt.mnemonic;
            gwlt._privKey = wlt.privkey;
            gwlt._txs = wlt.txs;
            gwlt._masterSeed = wlt.masterseed;
            return gwlt;
        }
    }, {
        key: "fromMnemonic",
        value: function fromMnemonic(mnemonic, language) {
            if (!(language in LANGUAGES)) {
                throw new Error('this language does not supported');
            }
            var mn = new bip39_1.Mnemonic(language);
            if (!mn.check(mnemonic)) {
                throw new Error('Invalid Mnemonic');
            }
            var seedBuffer = mn.toSeed(mnemonic);
            var rootNode = ethereumjs_wallet_hd_0_6_0_1.ethereumjs.WalletHD.fromMasterSeed(ethereumjs_wallet_hd_0_6_0_1.ethereumjs.Buffer.Buffer(seedBuffer, 'hex'));
            var hdwlt = rootNode.derivePath(DEFAULT_DERIVE_PATH);
            var wlt = hdwlt.getWallet();
            var gwlt = new EthWallet();
            gwlt._address = wlt.getChecksumAddressString();
            gwlt._privKey = wlt.getPrivateKey().toString('hex');
            gwlt._mnemonic = mnemonic;
            gwlt._masterSeed = seedBuffer;
            return gwlt;
        }
    }, {
        key: "fromSeed",
        value: function fromSeed(seed, language) {
            if (!(language in LANGUAGES)) {
                throw new Error('This language does not supported');
            }
            var rootNode = ethereumjs_wallet_hd_0_6_0_1.ethereumjs.WalletHD.fromMasterSeed(ethereumjs_wallet_hd_0_6_0_1.ethereumjs.Buffer.Buffer(seed, 'hex'));
            var hdwlt = rootNode.derivePath(DEFAULT_DERIVE_PATH);
            var wlt = hdwlt.getWallet();
            var gwlt = new EthWallet();
            gwlt._address = wlt.getChecksumAddressString();
            gwlt._privKey = wlt.getPrivateKey().toString('hex');
            gwlt._masterSeed = seed;
            return gwlt;
        }
        /**
         * recovery wallet from a keystore file
         *
         * @static
         * @param {string} v3string stringfy from keystore file
         * @param {string} passwd used to decrypt keystore file
         * @returns
         * @memberof EthWallet
         */

    }, {
        key: "fromKeyStore",
        value: function fromKeyStore(v3string, passwd) {
            var wlt = ethereumjs_wallet_hd_0_6_0_1.ethereumjs.Wallet.fromV3(v3string, passwd, true);
            var gwlt = new EthWallet();
            gwlt._address = wlt.getChecksumAddressString();
            gwlt._privKey = wlt.getPrivateKey().toString('hex');
            return gwlt;
        }
        /**
         * recover wallet from private key
         *
         * @static
         * @param {string} privKey
         * @returns {EthWallet}
         * @memberof EthWallet
         */

    }, {
        key: "fromPrivateKey",
        value: function fromPrivateKey(privKey) {
            var sk = ethereumjs_wallet_hd_0_6_0_1.ethereumjs.Buffer.Buffer(privKey, 'hex');
            var wlt = ethereumjs_wallet_hd_0_6_0_1.ethereumjs.Wallet.fromPrivateKey(sk);
            var gwlt = new EthWallet();
            gwlt._address = wlt.getChecksumAddressString();
            gwlt._privKey = privKey;
            return gwlt;
        }
        /**
         * generate new wallet
         *
         * @static
         * @param {string} language only support "english", "chinese_simplified" and "chinese_traditional"
         * @param {number} strength password strength must be the mutiply of 8 and at least 128
         * @returns {EthWallet}
         * @memberof EthWallet
         */

    }, {
        key: "generate",
        value: function generate(language, strength) {
            if (!(language in LANGUAGES)) {
                throw new Error('this language does not supported');
            }
            if (strength % 32 !== 0 || strength < 128) {
                throw new Error('strength must be the mutiply of 32 and at least 128!');
            }
            var mn = new bip39_1.Mnemonic(language);
            var mnemonic = mn.generate(strength);
            var seedBuffer = mn.toSeed(mnemonic);
            var rootNode = ethereumjs_wallet_hd_0_6_0_1.ethereumjs.WalletHD.fromMasterSeed(ethereumjs_wallet_hd_0_6_0_1.ethereumjs.Buffer.Buffer(seedBuffer, 'hex'));
            var hdwlt = rootNode.derivePath(DEFAULT_DERIVE_PATH);
            var wlt = hdwlt.getWallet();
            var gwlt = new EthWallet();
            gwlt._address = wlt.getChecksumAddressString();
            gwlt._privKey = wlt.getPrivateKey().toString('hex');
            gwlt._mnemonic = mnemonic;
            gwlt._balance = 0;
            gwlt._masterSeed = seedBuffer;
            return gwlt;
        }
    }, {
        key: "tokenOperations",
        value: function tokenOperations(method, tokenName, toAddr, amount) {
            var tokenAddress = config_1.ERC20Tokens[tokenName].contractAddr;
            if (tokenAddress === undefined) {
                throw new Error('This token doesn\'t supported');
            }
            exports.initWeb3();
            var contract = exports.web3.eth.contract(tokens_1.minABI).at(tokenAddress);
            switch (method) {
                case 'totalsupply':
                    return contract.totalSupply.getData();
                case 'decimals':
                    return contract.decimals.getData();
                case 'balanceof':
                    if (toAddr !== undefined) {
                        return contract.balanceOf.getData(toAddr);
                    } else {
                        throw new Error('Please specifiy the address you want to query balance');
                    }
                case 'transfer':
                    if (toAddr !== undefined && amount !== undefined) {
                        return contract.transfer.getData(toAddr, amount);
                    } else {
                        throw new Error('Need toAddr and amount');
                    }
                default:
                    throw new Error('Not supported method');
            }
        }
        /**
         * get publickey by mnemonic
         */

    }, {
        key: "getPublicKeyByMnemonic",
        value: function getPublicKeyByMnemonic(mnemonic, language) {
            if (!(language in LANGUAGES)) {
                throw new Error('this language does not supported');
            }
            var mn = new bip39_1.Mnemonic(language);
            if (!mn.check(mnemonic)) {
                throw new Error('Invalid Mnemonic');
            }
            var seedBuffer = mn.toSeed(mnemonic);
            var rootNode = ethereumjs_wallet_hd_0_6_0_1.ethereumjs.WalletHD.fromMasterSeed(ethereumjs_wallet_hd_0_6_0_1.ethereumjs.Buffer.Buffer(seedBuffer, 'hex'));
            var hdwlt = rootNode.derivePath(DEFAULT_DERIVE_PATH);
            var wlt = hdwlt.getWallet();
            return wlt.getPublicKey().toString('hex');
        }
    }]);

    return EthWallet;
}();

EthWallet.GAP_LIMIT = 3;
exports.EthWallet = EthWallet;
exports.initWeb3 = function () {
    if (!exports.web3) {
        if (config_2.config.dev_mode === config_1.DevMode.Ropsten) {
            var ETH_API_BASE_URL = config_2.config[config_1.DevMode.Ropsten].EthApiBaseUrl;
        } else if (config_2.config.dev_mode === config_1.DevMode.Rinkeby) {
            ETH_API_BASE_URL = config_2.config[config_1.DevMode.Rinkeby].EthApiBaseUrl;
        } else if (config_2.config.dev_mode === config_1.DevMode.Prod) {
            ETH_API_BASE_URL = config_2.config[config_1.DevMode.Prod].EthApiBaseUrl;
        }
        exports.web3 = new web3_min_1.Web3(new web3_min_1.Web3.providers.HttpProvider(ETH_API_BASE_URL));
    }
};
})