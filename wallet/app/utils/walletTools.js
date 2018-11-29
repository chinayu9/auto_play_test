_$define("app/utils/walletTools", function (require, exports, module){
"use strict";

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

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
 * 和第3方库相关的一些工具函数
 */
var base64_1 = require("../../pi/util/base64");
var lang_1 = require("../../pi/util/lang");
var config_1 = require("../config");
var wallet_1 = require("../core/btc/wallet");
var cipher_1 = require("../core/crypto/cipher");
var helper_1 = require("../core/eth/helper");
var wallet_2 = require("../core/eth/wallet");
var genmnemonic_1 = require("../core/genmnemonic");
var pull_1 = require("../net/pull");
var memstore_1 = require("../store/memstore");
var constants_1 = require("./constants");
var nameWareHouse_1 = require("./nameWareHouse");
var secretsBase_1 = require("./secretsBase");
var tools_1 = require("./tools");
/**
 * 获取新的地址信息
 * @param currencyName 货币类型
 */
exports.getNewAddrInfo = function (currencyName, wallet) {
    var currencyRecord = wallet.currencyRecords.filter(function (v) {
        return v.currencyName === currencyName;
    })[0];
    if (!currencyRecord) return;
    var addrs = memstore_1.getStore('addrs') || [];
    var firstAddr = addrs.filter(function (v) {
        return v.addr === currencyRecord.addrs[0];
    })[0];
    var address = void 0;
    if (currencyName === 'ETH' || config_1.ERC20Tokens[currencyName]) {
        var wlt = wallet_2.EthWallet.fromJSON(firstAddr.wlt);
        var newWlt = wlt.selectAddressWlt(currencyRecord.addrs.length);
        address = newWlt.address;
    } else if (currencyName === 'BTC') {
        var _wlt = wallet_1.BTCWallet.fromJSON(firstAddr.wlt);
        _wlt.unlock();
        address = _wlt.derive(currencyRecord.addrs.length);
        _wlt.lock();
    }
    return address;
};
/**
 * 是否是有效地址
 * @param currencyName 货币类型
 * @param addr 地址
 */
exports.effectiveAddr = function (currencyName, addr) {
    var flag = false;
    if (currencyName === 'ETH') {
        // 0xa6e83b630bf8af41a9278427b6f2a35dbc5f20e3
        // alert(addr);
        var per = 'iban:';
        if (addr.indexOf(per) === 0) {
            var lastIndex = addr.indexOf('?');
            addr = lastIndex >= 0 ? addr.slice(per.length, lastIndex) : addr.slice(per.length);
            if (helper_1.isValidIban(addr)) {
                addr = helper_1.ibanToAddress(addr);
            }
        }
        flag = addr.indexOf('0x') === 0 && addr.length === 42;
    } else if (currencyName === 'BTC') {
        // alert(addr);
        var _per = 'bitcoin:';
        if (addr.indexOf(_per) === 0) {
            var _lastIndex = addr.indexOf('?');
            addr = _lastIndex >= 0 ? addr.slice(_per.length, _lastIndex) : addr.slice(_per.length);
        }
        // alert(addr.length);
        // mw8VtNKY81RjLz52BqxUkJx57pcsQe4eNB
        flag = addr.length === 34;
    }
    return [flag, addr];
};
/**
 * 验证当前账户身份
 */
exports.VerifyIdentidy = function (passwd) {
    return __awaiter(undefined, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        var wallet, hash, cipher, r;
        return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
                switch (_context.prev = _context.next) {
                    case 0:
                        wallet = memstore_1.getStore('wallet');
                        _context.next = 3;
                        return tools_1.calcHashValuePromise(passwd, memstore_1.getStore('user/salt'));

                    case 3:
                        hash = _context.sent;
                        _context.prev = 4;
                        cipher = new cipher_1.Cipher();
                        r = cipher.decrypt(hash, wallet.vault);
                        return _context.abrupt("return", true);

                    case 10:
                        _context.prev = 10;
                        _context.t0 = _context["catch"](4);

                        console.log(_context.t0);
                        return _context.abrupt("return", false);

                    case 14:
                    case "end":
                        return _context.stop();
                }
            }
        }, _callee, this, [[4, 10]]);
    }));
};
/**
 * 验证某个账户身份
 */
exports.VerifyIdentidy1 = function (passwd, vault, salt) {
    return __awaiter(undefined, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
        var hash, cipher, r;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
            while (1) {
                switch (_context2.prev = _context2.next) {
                    case 0:
                        _context2.next = 2;
                        return tools_1.calcHashValuePromise(passwd, salt);

                    case 2:
                        hash = _context2.sent;
                        _context2.prev = 3;
                        cipher = new cipher_1.Cipher();
                        r = cipher.decrypt(hash, vault);
                        return _context2.abrupt("return", true);

                    case 9:
                        _context2.prev = 9;
                        _context2.t0 = _context2["catch"](3);

                        console.log(_context2.t0);
                        return _context2.abrupt("return", false);

                    case 13:
                    case "end":
                        return _context2.stop();
                }
            }
        }, _callee2, this, [[3, 9]]);
    }));
};
/**
 * 获取助记词
 */
exports.getMnemonic = function (passwd) {
    return __awaiter(undefined, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
        var wallet, hash, cipher, r;
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
            while (1) {
                switch (_context3.prev = _context3.next) {
                    case 0:
                        wallet = memstore_1.getStore('wallet');
                        _context3.next = 3;
                        return tools_1.calcHashValuePromise(passwd, memstore_1.getStore('user/salt'));

                    case 3:
                        hash = _context3.sent;
                        _context3.prev = 4;
                        cipher = new cipher_1.Cipher();
                        r = cipher.decrypt(hash, wallet.vault);
                        return _context3.abrupt("return", genmnemonic_1.toMnemonic(constants_1.lang, tools_1.hexstrToU8Array(r)));

                    case 10:
                        _context3.prev = 10;
                        _context3.t0 = _context3["catch"](4);

                        console.log(_context3.t0);
                        return _context3.abrupt("return", '');

                    case 14:
                    case "end":
                        return _context3.stop();
                }
            }
        }, _callee3, this, [[4, 10]]);
    }));
};
/**
 * 获取助记词16进制字符串
 */
exports.getMnemonicHexstr = function (hash) {
    var wallet = memstore_1.getStore('wallet');
    try {
        var cipher = new cipher_1.Cipher();
        return cipher.decrypt(hash, wallet.vault);
    } catch (error) {
        console.log(error);
        return '';
    }
};
/**
 * 获取某个地址的交易记录
 */
exports.fetchTransactionList = function (addr, currencyName) {
    var wallet = memstore_1.getStore('wallet');
    if (!wallet) return [];
    var txList = [];
    wallet.currencyRecords.forEach(function (record) {
        if (record.currencyName === currencyName) {
            record.addrs.forEach(function (addrInfo) {
                if (addrInfo.addr === addr) {
                    txList.push.apply(txList, _toConsumableArray(addrInfo.txHistory));
                }
            });
        }
    });
    return txList.sort(function (a, b) {
        return b.time - a.time;
    });
};
/**
 * 根据交易hash获取指定地址上本地交易详情
 */
exports.fetchLocalTxByHash = function (addr, currencyName, hash) {
    var txList = exports.fetchTransactionList(addr, currencyName);
    for (var _iterator = txList, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator]();;) {
        var _ref;

        if (_isArray) {
            if (_i >= _iterator.length) break;
            _ref = _iterator[_i++];
        } else {
            _i = _iterator.next();
            if (_i.done) break;
            _ref = _i.value;
        }

        var tx = _ref;

        // tslint:disable-next-line:possible-timing-attack
        if (tx.hash === hash) {
            return tx;
        }
    }
};
/**
 * 根据交易hash获取所有地址上本地交易详情
 */
exports.fetchLocalTxByHash1 = function (hash) {
    var wallet = memstore_1.getStore('wallet');
    var txHistory = [];
    for (var _iterator2 = wallet.currencyRecords, _isArray2 = Array.isArray(_iterator2), _i2 = 0, _iterator2 = _isArray2 ? _iterator2 : _iterator2[Symbol.iterator]();;) {
        var _ref2;

        if (_isArray2) {
            if (_i2 >= _iterator2.length) break;
            _ref2 = _iterator2[_i2++];
        } else {
            _i2 = _iterator2.next();
            if (_i2.done) break;
            _ref2 = _i2.value;
        }

        var record = _ref2;

        for (var _iterator4 = record.addrs, _isArray4 = Array.isArray(_iterator4), _i4 = 0, _iterator4 = _isArray4 ? _iterator4 : _iterator4[Symbol.iterator]();;) {
            var _ref4;

            if (_isArray4) {
                if (_i4 >= _iterator4.length) break;
                _ref4 = _iterator4[_i4++];
            } else {
                _i4 = _iterator4.next();
                if (_i4.done) break;
                _ref4 = _i4.value;
            }

            var addrInfo = _ref4;

            txHistory = txHistory.concat(addrInfo.txHistory);
        }
    }
    for (var _iterator3 = txHistory, _isArray3 = Array.isArray(_iterator3), _i3 = 0, _iterator3 = _isArray3 ? _iterator3 : _iterator3[Symbol.iterator]();;) {
        var _ref3;

        if (_isArray3) {
            if (_i3 >= _iterator3.length) break;
            _ref3 = _iterator3[_i3++];
        } else {
            _i3 = _iterator3.next();
            if (_i3.done) break;
            _ref3 = _i3.value;
        }

        var tx = _ref3;

        // tslint:disable-next-line:possible-timing-attack
        if (tx.hash === hash) {
            return tx;
        }
    }
};
// 购买理财
exports.purchaseProduct = function (psw, productId, amount) {
    return __awaiter(undefined, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
        var close, pswCorrect, data;
        return regeneratorRuntime.wrap(function _callee4$(_context4) {
            while (1) {
                switch (_context4.prev = _context4.next) {
                    case 0:
                        close = tools_1.popNewLoading(config_1.Config[lang_1.getLang()].bugProduct.buying); // 购买中  

                        _context4.next = 3;
                        return exports.VerifyIdentidy(psw);

                    case 3:
                        pswCorrect = _context4.sent;

                        if (pswCorrect) {
                            _context4.next = 8;
                            break;
                        }

                        close.callback(close.widget);
                        tools_1.popNewMessage(config_1.Config[lang_1.getLang()].bugProduct.wrong); // 密码错误  
                        return _context4.abrupt("return");

                    case 8:
                        _context4.next = 10;
                        return pull_1.buyProduct(productId, amount);

                    case 10:
                        data = _context4.sent;

                        close.callback(close.widget);
                        if (data) {
                            tools_1.popNewMessage(config_1.Config[lang_1.getLang()].bugProduct.buySuccess); // 购买成功
                            pull_1.getServerCloudBalance();
                            console.log('data', data);
                            pull_1.getPurchaseRecord(); // 购买之后获取购买记录
                        }
                        return _context4.abrupt("return", data);

                    case 14:
                    case "end":
                        return _context4.stop();
                }
            }
        }, _callee4, this);
    }));
};
// 获取助记词片段
exports.fetchMnemonicFragment = function (hash) {
    var mnemonicHexstr = exports.getMnemonicHexstr(hash);
    if (!mnemonicHexstr) return;
    var shares = secretsBase_1.shareSecret(mnemonicHexstr, constants_1.MAX_SHARE_LEN, constants_1.MIN_SHARE_LEN).map(function (v) {
        return base64_1.arrayBufferToBase64(tools_1.hexstrToU8Array(v).buffer);
    });
    console.log('fetchMnemonicFragment-----------', shares);
    return shares;
};
// 备份助记词
exports.backupMnemonic = function (passwd) {
    return __awaiter(undefined, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
        var close, hash, mnemonic, fragments;
        return regeneratorRuntime.wrap(function _callee5$(_context5) {
            while (1) {
                switch (_context5.prev = _context5.next) {
                    case 0:
                        close = tools_1.popNewLoading(config_1.Config[lang_1.getLang()].userInfo.exporting);
                        _context5.next = 3;
                        return tools_1.calcHashValuePromise(passwd, memstore_1.getStore('user/salt'));

                    case 3:
                        hash = _context5.sent;

                        console.log('hash!!!!!!!!!!!!', hash);
                        close.callback(close.widget);
                        mnemonic = exports.getMnemonicByHash(hash);
                        fragments = exports.fetchMnemonicFragment(hash);

                        if (mnemonic) {
                            _context5.next = 11;
                            break;
                        }

                        tools_1.popNewMessage(config_1.Config[lang_1.getLang()].transError[0]);
                        return _context5.abrupt("return");

                    case 11:
                        return _context5.abrupt("return", {
                            mnemonic: mnemonic,
                            fragments: fragments
                        });

                    case 12:
                    case "end":
                        return _context5.stop();
                }
            }
        }, _callee5, this);
    }));
};
// 根据hash获取助记词
exports.getMnemonicByHash = function (hash) {
    var wallet = memstore_1.getStore('wallet');
    try {
        var cipher = new cipher_1.Cipher();
        var r = cipher.decrypt(hash, wallet.vault);
        return genmnemonic_1.toMnemonic(constants_1.lang, tools_1.hexstrToU8Array(r));
    } catch (error) {
        console.log(error);
        return '';
    }
};
/**
 * 获取随机名字
 */
exports.playerName = function () {
    var num1 = nameWareHouse_1.nameWare[0].length;
    var num2 = nameWareHouse_1.nameWare[1].length;
    var name = '';
    // tslint:disable-next-line:max-line-length
    name = tools_1.unicodeArray2Str(nameWareHouse_1.nameWare[0][Math.floor(Math.random() * num1)]) + tools_1.unicodeArray2Str(nameWareHouse_1.nameWare[1][Math.floor(Math.random() * num2)]);
    return name;
};
/**
 * 获取钱包地址的位置
 */
exports.getWltAddrIndex = function (addr, currencyName) {
    var wallet = memstore_1.getStore('wallet');
    var currencyRecord = wallet.currencyRecords.filter(function (v) {
        return v.currencyName === currencyName;
    })[0];
    var addrs = currencyRecord.addrs;
    for (var i = 0; i < addrs.length; i++) {
        if (addrs[i].addr.toLocaleLowerCase() === addr.toLocaleLowerCase()) {
            return i;
        }
    }
    return -1;
};
/**
 * 修改密码
 */
exports.passwordChange = function (oldPsw, newPsw) {
    return __awaiter(undefined, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
        var salt, oldHash, newHash, wallet, oldVault;
        return regeneratorRuntime.wrap(function _callee6$(_context6) {
            while (1) {
                switch (_context6.prev = _context6.next) {
                    case 0:
                        salt = memstore_1.getStore('user/salt');
                        _context6.next = 3;
                        return tools_1.calcHashValuePromise(oldPsw, salt);

                    case 3:
                        oldHash = _context6.sent;
                        _context6.next = 6;
                        return tools_1.calcHashValuePromise(newPsw, salt);

                    case 6:
                        newHash = _context6.sent;
                        wallet = memstore_1.getStore('wallet');
                        oldVault = tools_1.decrypt(wallet.vault, oldHash);

                        wallet.vault = tools_1.encrypt(oldVault, newHash);
                        memstore_1.setStore('wallet', wallet);

                    case 11:
                    case "end":
                        return _context6.stop();
                }
            }
        }, _callee6, this);
    }));
};
})