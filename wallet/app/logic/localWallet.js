_$define("app/logic/localWallet", function (require, exports, module){
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
 * 本地钱包相关操作
 */
var root_1 = require("../../pi/ui/root");
var base64_1 = require("../../pi/util/base64");
var canvas_1 = require("../../pi/util/canvas");
var config_1 = require("../config");
var genmnemonic_1 = require("../core/genmnemonic");
var globalWallet_1 = require("../core/globalWallet");
var memstore_1 = require("../store/memstore");
var ahash_1 = require("../utils/ahash");
var constants_1 = require("../utils/constants");
var secretsBase_1 = require("../utils/secretsBase");
// tslint:disable-next-line:max-line-length
var tools_1 = require("../utils/tools");
var walletTools_1 = require("../utils/walletTools");
var dataCenter_1 = require("./dataCenter");
/**
 * 创建钱包的方式
 */
var CreateWalletType;
(function (CreateWalletType) {
    CreateWalletType[CreateWalletType["Random"] = 1] = "Random";
    CreateWalletType[CreateWalletType["Image"] = 2] = "Image";
    CreateWalletType[CreateWalletType["StrandarImport"] = 3] = "StrandarImport";
    CreateWalletType[CreateWalletType["ImageImport"] = 4] = "ImageImport";
    CreateWalletType[CreateWalletType["FragmentImport"] = 5] = "FragmentImport"; // 片段导入
})(CreateWalletType = exports.CreateWalletType || (exports.CreateWalletType = {}));
/**
 * 创建钱包
 * @param itype 创建钱包方式 1 随机 2 图片 3 标准导入 4 照片导入 5 片段导入
 * @param option 相关参数
 */
exports.createWallet = function (itype, option) {
    return __awaiter(undefined, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        var secrectHash, close, _close, _close2, _close3, _close4;

        return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
                switch (_context.prev = _context.next) {
                    case 0:
                        secrectHash = void 0;

                        if (!(itype === CreateWalletType.Random)) {
                            _context.next = 9;
                            break;
                        }

                        close = root_1.popNew('app-components1-loading-loading', {
                            text: { zh_Hans: '创建中...', zh_Hant: '創建中...', en: '' }
                        });
                        _context.next = 5;
                        return exports.createWalletRandom(option);

                    case 5:
                        secrectHash = _context.sent;

                        close.callback(close.widget);
                        _context.next = 39;
                        break;

                    case 9:
                        if (!(itype === CreateWalletType.Image)) {
                            _context.next = 17;
                            break;
                        }

                        _close = root_1.popNew('app-components1-loading-loading', {
                            text: { zh_Hans: '创建中...', zh_Hant: '創建中...', en: '' }
                        });
                        _context.next = 13;
                        return exports.createWalletByImage(option);

                    case 13:
                        secrectHash = _context.sent;

                        _close.callback(_close.widget);
                        _context.next = 39;
                        break;

                    case 17:
                        if (!(itype === CreateWalletType.StrandarImport)) {
                            _context.next = 25;
                            break;
                        }

                        _close2 = root_1.popNew('app-components1-loading-loading', {
                            text: { zh_Hans: '导入中...', zh_Hant: '導入中...', en: '' }
                        });
                        _context.next = 21;
                        return exports.importWalletByMnemonic(option);

                    case 21:
                        secrectHash = _context.sent;

                        _close2.callback(_close2.widget);
                        _context.next = 39;
                        break;

                    case 25:
                        if (!(itype === CreateWalletType.ImageImport)) {
                            _context.next = 33;
                            break;
                        }

                        _close3 = root_1.popNew('app-components1-loading-loading', {
                            text: { zh_Hans: '导入中...', zh_Hant: '導入中...', en: '' }
                        });
                        _context.next = 29;
                        return exports.createWalletByImage(option);

                    case 29:
                        secrectHash = _context.sent;

                        _close3.callback(_close3.widget);
                        _context.next = 39;
                        break;

                    case 33:
                        if (!(itype === CreateWalletType.FragmentImport)) {
                            _context.next = 39;
                            break;
                        }

                        _close4 = root_1.popNew('app-components1-loading-loading', {
                            text: { zh_Hans: '导入中...', zh_Hant: '導入中...', en: '' }
                        });
                        _context.next = 37;
                        return exports.importWalletByFragment(option);

                    case 37:
                        secrectHash = _context.sent;

                        _close4.callback(_close4.widget);

                    case 39:
                        // 刷新本地钱包
                        dataCenter_1.dataCenter.refreshAllTx();
                        dataCenter_1.dataCenter.initErc20GasLimit();
                        return _context.abrupt("return", secrectHash);

                    case 42:
                    case "end":
                        return _context.stop();
                }
            }
        }, _callee, this);
    }));
};
/**
 * 随机创建钱包
 */
exports.createWalletRandom = function (option) {
    return __awaiter(undefined, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
        var secrectHash, gwlt, wallet, user;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
            while (1) {
                switch (_context2.prev = _context2.next) {
                    case 0:
                        _context2.next = 2;
                        return tools_1.calcHashValuePromise(option.psw, memstore_1.getStore('user/salt'));

                    case 2:
                        secrectHash = _context2.sent;
                        gwlt = globalWallet_1.GlobalWallet.generate(secrectHash);
                        // 创建钱包基础数据

                        wallet = {
                            vault: gwlt.vault,
                            isBackup: gwlt.isBackup,
                            showCurrencys: constants_1.defalutShowCurrencys,
                            currencyRecords: gwlt.currencyRecords
                        };
                        user = memstore_1.getStore('user');

                        user.id = gwlt.glwtId;
                        user.publicKey = gwlt.publicKey;
                        user.secretHash = secrectHash;
                        user.info = Object.assign({}, user.info, { nickName: option.nickName });
                        memstore_1.setStore('wallet', wallet, false);
                        memstore_1.setStore('user', user);
                        return _context2.abrupt("return", secrectHash);

                    case 13:
                    case "end":
                        return _context2.stop();
                }
            }
        }, _callee2, this);
    }));
};
/**
 * 图片创建钱包
 * @param option 参数
 */
exports.createWalletByImage = function (option) {
    return __awaiter(undefined, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
        var secrectHash, ahash, vault, gwlt, wallet, user;
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
            while (1) {
                switch (_context3.prev = _context3.next) {
                    case 0:
                        _context3.next = 2;
                        return tools_1.calcHashValuePromise(option.psw, memstore_1.getStore('user/salt'));

                    case 2:
                        secrectHash = _context3.sent;
                        _context3.next = 5;
                        return getImageAhash(option.imageBase64);

                    case 5:
                        ahash = _context3.sent;
                        _context3.next = 8;
                        return imgToHash(ahash, option.imagePsw);

                    case 8:
                        vault = _context3.sent;
                        gwlt = globalWallet_1.GlobalWallet.generate(secrectHash, vault);
                        // 创建钱包基础数据

                        wallet = {
                            vault: gwlt.vault,
                            isBackup: gwlt.isBackup,
                            showCurrencys: constants_1.defalutShowCurrencys,
                            currencyRecords: gwlt.currencyRecords
                        };
                        user = memstore_1.getStore('user');

                        user.id = gwlt.glwtId;
                        user.publicKey = gwlt.publicKey;
                        user.secretHash = secrectHash;
                        user.info = Object.assign({}, user.info, { nickName: option.nickName });
                        memstore_1.setStore('wallet', wallet, false);
                        memstore_1.setStore('user', user);
                        return _context3.abrupt("return", secrectHash);

                    case 19:
                    case "end":
                        return _context3.stop();
                }
            }
        }, _callee3, this);
    }));
};
/**
 * 获取图片ahash
 * @param imageBase64 base64
 */
var getImageAhash = function getImageAhash(imageBase64) {
    return new Promise(function (resolve, reject) {
        var img = new Image();
        img.onload = function () {
            var ab = canvas_1.drawImg(img);
            var r = ahash_1.ahash(new Uint8Array(ab), img.width, img.height, 4);
            resolve(r);
        };
        img.onerror = function (e) {
            reject(e);
        };
        img.src = imageBase64;
    });
};
/**
 *
 * @param imagePsw 图片密码
 * @param ahash ahash
 */
var imgToHash = function imgToHash(ahash, imagePsw) {
    return __awaiter(undefined, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
        var sha3Hash, hash, sha3Hash1, len, sha3Hash2;
        return regeneratorRuntime.wrap(function _callee4$(_context4) {
            while (1) {
                switch (_context4.prev = _context4.next) {
                    case 0:
                        sha3Hash = genmnemonic_1.sha3(ahash + imagePsw, false);
                        _context4.next = 3;
                        return tools_1.calcHashValuePromise(sha3Hash);

                    case 3:
                        hash = _context4.sent;
                        sha3Hash1 = genmnemonic_1.sha3(hash, true);
                        len = sha3Hash1.length;
                        // 生成助记词的随机数仅需要128位即可，这里对256位随机数进行折半取异或的处理

                        sha3Hash2 = tools_1.getXOR(sha3Hash1.slice(0, len / 2), sha3Hash1.slice(len / 2));
                        // console.log(choosedImg, inputWords, sha3Hash, hash, sha3Hash1, sha3Hash2);

                        return _context4.abrupt("return", genmnemonic_1.generateByHash(sha3Hash2));

                    case 8:
                    case "end":
                        return _context4.stop();
                }
            }
        }, _callee4, this);
    }));
};
/**
 * 通过助记词导入钱包
 */
exports.importWalletByMnemonic = function (option) {
    return __awaiter(undefined, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
        var secrectHash, gwlt, wallet, user;
        return regeneratorRuntime.wrap(function _callee5$(_context5) {
            while (1) {
                switch (_context5.prev = _context5.next) {
                    case 0:
                        _context5.next = 2;
                        return tools_1.calcHashValuePromise(option.psw, memstore_1.getStore('user/salt'));

                    case 2:
                        secrectHash = _context5.sent;
                        gwlt = globalWallet_1.GlobalWallet.fromMnemonic(secrectHash, option.mnemonic);
                        // 创建钱包基础数据

                        wallet = {
                            vault: gwlt.vault,
                            isBackup: gwlt.isBackup,
                            showCurrencys: constants_1.defalutShowCurrencys,
                            currencyRecords: gwlt.currencyRecords
                        };
                        user = memstore_1.getStore('user');

                        user.id = gwlt.glwtId;
                        user.publicKey = gwlt.publicKey;
                        user.secretHash = secrectHash;
                        user.info = Object.assign({}, user.info, { nickName: option.nickName });
                        memstore_1.setStore('wallet', wallet, false);
                        memstore_1.setStore('user', user);
                        return _context5.abrupt("return", secrectHash);

                    case 13:
                    case "end":
                        return _context5.stop();
                }
            }
        }, _callee5, this);
    }));
};
/**
 * 冗余助记词导入
 */
exports.importWalletByFragment = function (option) {
    return __awaiter(undefined, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
        var shares, comb, mnemonic, secretHash;
        return regeneratorRuntime.wrap(function _callee6$(_context6) {
            while (1) {
                switch (_context6.prev = _context6.next) {
                    case 0:
                        shares = [option.fragment1, option.fragment2].map(function (v) {
                            return tools_1.u8ArrayToHexstr(new Uint8Array(base64_1.base64ToArrayBuffer(v)));
                        });
                        comb = secretsBase_1.restoreSecret(shares);
                        mnemonic = genmnemonic_1.toMnemonic(constants_1.lang, tools_1.hexstrToU8Array(comb));

                        option.mnemonic = mnemonic;
                        // tslint:disable-next-line:no-unnecessary-local-variable
                        _context6.next = 6;
                        return exports.importWalletByMnemonic(option);

                    case 6:
                        secretHash = _context6.sent;
                        return _context6.abrupt("return", secretHash);

                    case 8:
                    case "end":
                        return _context6.stop();
                }
            }
        }, _callee6, this);
    }));
};
/**
 * 创建新地址
 */
exports.createNewAddr = function (passwd, currencyName) {
    return __awaiter(undefined, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee7() {
        var close, wallet, mnemonic, record, address, addrInfo;
        return regeneratorRuntime.wrap(function _callee7$(_context7) {
            while (1) {
                switch (_context7.prev = _context7.next) {
                    case 0:
                        close = tools_1.popNewLoading({ zh_Hans: '添加中...', zh_Hant: '添加中...', en: '' });
                        wallet = memstore_1.getStore('wallet');
                        _context7.next = 4;
                        return walletTools_1.getMnemonic(passwd);

                    case 4:
                        mnemonic = _context7.sent;

                        close.callback(close.widget);
                        if (mnemonic) {
                            record = wallet.currencyRecords.filter(function (v) {
                                return v.currencyName === currencyName;
                            })[0];
                            address = globalWallet_1.GlobalWallet.getWltAddrByMnemonic(mnemonic, currencyName, record.addrs.length);
                            addrInfo = {
                                addr: address,
                                balance: 0,
                                txHistory: [],
                                nonce: 0
                            };

                            record.addrs.push(addrInfo);
                            record.currentAddr = address;
                            dataCenter_1.dataCenter.updateAddrInfo(address, currencyName);
                            if (config_1.ERC20Tokens[currencyName]) {
                                dataCenter_1.dataCenter.fetchErc20GasLimit(currencyName);
                            }
                            memstore_1.setStore('wallet/currencyRecords', wallet.currencyRecords);
                            tools_1.popNewMessage({ zh_Hans: '添加成功', zh_Hant: '添加成功', en: '' });
                        } else {
                            tools_1.popNewMessage({ zh_Hans: '密码错误', zh_Hant: '密碼錯誤', en: '' });
                        }

                    case 7:
                    case "end":
                        return _context7.stop();
                }
            }
        }, _callee7, this);
    }));
};
// 删除助记词
exports.deleteMnemonic = function () {
    var wallet = memstore_1.getStore('wallet');
    wallet.isBackup = true;
    memstore_1.setStore('wallet', wallet);
};
})