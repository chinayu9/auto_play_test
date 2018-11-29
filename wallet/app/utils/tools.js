_$define("app/utils/tools", function (require, exports, module){
"use strict";

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

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
 * common tools
 */
var argonHash_1 = require("../../pi/browser/argonHash");
var root_1 = require("../../pi/ui/root");
var lang_1 = require("../../pi/util/lang");
var config_1 = require("../config");
var cipher_1 = require("../core/crypto/cipher");
var native_1 = require("../logic/native");
var interface_1 = require("../store/interface");
var memstore_1 = require("../store/memstore");
var constants_1 = require("./constants");
var unitTools_1 = require("./unitTools");
/**
 * 获取指定id的钱包
 */
exports.getWalletByWalletId = function (wallets, walletId) {
    if (!(wallets && wallets.length > 0)) return null;
    for (var i = 0; i < wallets.length; i++) {
        if (wallets[i].walletId === walletId) return wallets[i];
    }
    return null;
};
/**
 * 获取指定id钱包的index
 */
exports.getWalletIndexByWalletId = function (wallets, walletId) {
    if (!(wallets && wallets.length > 0)) {
        return -1;
    }
    for (var i = 0; i < wallets.length; i++) {
        if (wallets[i].walletId === walletId) return i;
    }
    return -1;
};
/**
 * 获取当前钱包对应货币正在使用的地址信息
 * @param currencyName 货币类型
 */
exports.getCurrentAddrInfo = function (currencyName) {
    var wallet = memstore_1.getStore('wallet');
    for (var _iterator = wallet.currencyRecords, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator]();;) {
        var _ref;

        if (_isArray) {
            if (_i >= _iterator.length) break;
            _ref = _iterator[_i++];
        } else {
            _i = _iterator.next();
            if (_i.done) break;
            _ref = _i.value;
        }

        var record = _ref;

        if (record.currencyName === currencyName) {
            for (var _iterator2 = record.addrs, _isArray2 = Array.isArray(_iterator2), _i2 = 0, _iterator2 = _isArray2 ? _iterator2 : _iterator2[Symbol.iterator]();;) {
                var _ref2;

                if (_isArray2) {
                    if (_i2 >= _iterator2.length) break;
                    _ref2 = _iterator2[_i2++];
                } else {
                    _i2 = _iterator2.next();
                    if (_i2.done) break;
                    _ref2 = _i2.value;
                }

                var addrInfo = _ref2;

                if (addrInfo.addr === record.currentAddr) {
                    return addrInfo;
                }
            }
        }
    }
    return;
};
/**
 * 获取钱包下的所有地址
 * @param wallet wallet obj
 */
exports.getAddrsAll = function (wallet) {
    var currencyRecords = wallet.currencyRecords;
    var retAddrs = [];
    currencyRecords.forEach(function (item) {
        retAddrs.push.apply(retAddrs, _toConsumableArray(item.addrs));
    });
    // 去除数组中重复的地址
    return [].concat(_toConsumableArray(new Set(retAddrs)));
};
/**
 * 获取钱包下指定货币类型的所有地址
 * @param wallet wallet obj
 */
exports.getAddrsByCurrencyName = function (wallet, currencyName) {
    var currencyRecords = wallet.currencyRecords;
    var retAddrs = [];
    var len = currencyRecords.length;
    for (var i = 0; i < len; i++) {
        if (currencyRecords[i].currencyName === currencyName) {
            retAddrs.push.apply(retAddrs, _toConsumableArray(currencyRecords[i].addrs));
            break;
        }
    }
    return retAddrs;
};
/**
 * 获取钱包下指定货币类型的所有地址信息
 * @param wallet wallet obj
 */
exports.getAddrsInfoByCurrencyName = function (currencyName) {
    var wallet = memstore_1.getStore('wallet');
    for (var _iterator3 = wallet.currencyRecords, _isArray3 = Array.isArray(_iterator3), _i3 = 0, _iterator3 = _isArray3 ? _iterator3 : _iterator3[Symbol.iterator]();;) {
        var _ref3;

        if (_isArray3) {
            if (_i3 >= _iterator3.length) break;
            _ref3 = _iterator3[_i3++];
        } else {
            _i3 = _iterator3.next();
            if (_i3.done) break;
            _ref3 = _i3.value;
        }

        var record = _ref3;

        if (record.currencyName === currencyName) {
            return record.addrs;
        }
    }
};
/**
 * 通过地址获取地址余额
 */
exports.getAddrInfoByAddr = function (addr, currencyName) {
    var wallet = memstore_1.getStore('wallet');
    for (var _iterator4 = wallet.currencyRecords, _isArray4 = Array.isArray(_iterator4), _i4 = 0, _iterator4 = _isArray4 ? _iterator4 : _iterator4[Symbol.iterator]();;) {
        var _ref4;

        if (_isArray4) {
            if (_i4 >= _iterator4.length) break;
            _ref4 = _iterator4[_i4++];
        } else {
            _i4 = _iterator4.next();
            if (_i4.done) break;
            _ref4 = _i4.value;
        }

        var record = _ref4;

        if (record.currencyName === currencyName) {
            for (var _iterator5 = record.addrs, _isArray5 = Array.isArray(_iterator5), _i5 = 0, _iterator5 = _isArray5 ? _iterator5 : _iterator5[Symbol.iterator]();;) {
                var _ref5;

                if (_isArray5) {
                    if (_i5 >= _iterator5.length) break;
                    _ref5 = _iterator5[_i5++];
                } else {
                    _i5 = _iterator5.next();
                    if (_i5.done) break;
                    _ref5 = _i5.value;
                }

                var addrInfo = _ref5;

                if (addrInfo.addr === addr) {
                    return addrInfo;
                }
            }
        }
    }
};
// 随机生成RGB颜色
exports.randomRgbColor = function () {
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    return "rgb(" + r + "," + g + "," + b + ")"; // 返回rgb(r,g,b)格式颜色
};
/**
 * 解析显示的账号信息
 * @param str 需要解析的字符串
 */
exports.parseAccount = function (str) {
    if (str.length <= 29) return str;
    return str.slice(0, 6) + "..." + str.slice(str.length - 6, str.length);
};
exports.getDefaultAddr = function (addr) {
    var addrStr = addr.toString();
    return addrStr.slice(0, 3) + "..." + addrStr.slice(-3);
};
/**
 * 转化显示时间
 * @param t date
 */
exports.parseDate = function (t) {
    // tslint:disable-next-line:max-line-length
    return t.getUTCFullYear() + "-" + addPerZero(t.getUTCMonth() + 1, 2) + "-" + addPerZero(t.getUTCDate(), 2) + " " + addPerZero(t.getHours(), 2) + ":" + addPerZero(t.getMinutes(), 2);
};
/**
 * 转化显示时间格式为‘04-30 14:32:00’
 */
exports.transDate = function (t) {
    // tslint:disable-next-line:max-line-length
    return addPerZero(t.getUTCMonth() + 1, 2) + "-" + addPerZero(t.getUTCDate(), 2) + " " + addPerZero(t.getHours(), 2) + ":" + addPerZero(t.getMinutes(), 2) + ":" + addPerZero(t.getSeconds(), 2);
};
/**
 * 数字前边加0
 */
var addPerZero = function addPerZero(num, len) {
    var numStr = num.toString();
    var perLen = len - numStr.length;
    if (perLen <= 0) return numStr;
    var list = [];
    list.length = perLen;
    return list.fill('0').join('') + numStr;
};
// 数组乱序
exports.shuffle = function (arr) {
    var length = arr.length;
    var shuffled = Array(length);
    for (var index = 0, rand; index < length; index++) {
        rand = ~~(Math.random() * (index + 1));
        if (rand !== index) {
            shuffled[index] = shuffled[rand];
        }
        shuffled[rand] = arr[index];
    }
    return shuffled;
};
/**
 * 获取字符串有效长度
 * @param str 字符串
 *
 * 中文字符算2个字符
 */
exports.getStrLen = function (str) {
    if (str === null) return 0;
    if (typeof str !== 'string') {
        str += '';
    }
    return str.replace(/[^\x00-\xff]/g, '01').length;
};
/**
 * 截取字符串
 * @param str 字符串
 * @param start 开始位置
 * @param len 截取长度
 */
exports.sliceStr = function (str, start, len) {
    if (str === null) return '';
    if (typeof str !== 'string') str += '';
    var r = '';
    for (var i = start; i < str.length; i++) {
        len--;
        if (str.charCodeAt(i) > 127 || str.charCodeAt(i) === 94) {
            len--;
        }
        if (len < 0) break;
        r += str[i];
    }
    return r;
};
// 函数防抖
exports.debounce = function (fn) {
    var wait = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1000;

    var timer = null;
    return function () {
        for (var _len = arguments.length, rest = Array(_len), _key = 0; _key < _len; _key++) {
            rest[_key] = arguments[_key];
        }

        if (timer) {
            clearTimeout(timer);
            timer = null;
        }
        timer = setTimeout(function () {
            fn.apply(undefined, rest);
        }, wait);
    };
};
/**
 * 解析url中指定key的值
 * @param url url地址
 * @param key 键
 */
exports.urlParams = function (url, key) {
    var ret = url.match(new RegExp("(\\?|&)" + key + "=(.*?)(&|$)"));
    return ret && decodeURIComponent(ret[2]);
};
/**
 * 金额格式化
 * @param banlance 金额
 */
exports.formatBalance = function (banlance) {
    banlance = Number(banlance);
    if (!banlance) return 0;
    return Number(banlance.toFixed(6));
};
/**
 * 余额格式化
 */
exports.formatBalanceValue = function (value) {
    if (value === 0) return '0.00';
    return value.toFixed(2);
};
/**
 * 字符串转u8Arr
 *
 * @param str 输入字符串
 */
exports.str2arr = function (str) {
    var len = str.length;
    var arr = [];
    var arr32 = void 0;
    var i = void 0;
    var offset = 0;
    if (len >= 32) {
        for (i = 0; i < 8; i++) {
            arr[i] = (str.charCodeAt(i * 4) & 0xff) << 24 | (str.charCodeAt(i * 4 + 1) & 0xff) << 16 | (str.charCodeAt(i * 4 + 2) & 0xff) << 8 | str.charCodeAt(i * 4 + 3) & 0xff;
        }
    }
    arr32 = new Uint32Array(new ArrayBuffer(32));
    for (i = 0; i < 8; i++) {
        arr32[i] = arr[offset++];
    }
    return new Uint8Array(arr32.buffer, 0, 32);
};
// ArrayBuffer转16进度字符串示例
exports.ab2hex = function (buffer) {
    var hexArr = Array.prototype.map.call(new Uint8Array(buffer), function (bit) {
        return ('00' + bit.toString(16)).slice(-2);
    });
    return hexArr.join('');
};
/**
 * u16Arr转字符串
 *
 * @param buf 输入buff
 */
exports.ab2str = function (buf) {
    return String.fromCharCode.apply(null, new Uint16Array(buf));
};
/**
 * 字符串转u16Arr
 *
 * @param str 输入字符串
 */
exports.str2ab = function (str) {
    var buf = new ArrayBuffer(str.length * 2); // 2 bytes for each char
    var bufView = new Uint16Array(buf);
    for (var i = 0, strLen = str.length; i < strLen; i++) {
        bufView[i] = str.charCodeAt(i);
    }
    return buf;
};
/**
 * 字节数组转十六进制字符串
 * @param arr 传入数组
 */
exports.bytes2Str = function (arr) {
    var str = '';
    for (var i = 0; i < arr.length; i++) {
        var tmp = arr[i].toString(16);
        if (tmp.length === 1) {
            tmp = "0" + tmp;
        }
        str += tmp;
    }
    return str;
};
/**
 * 十六进制字符串转字节数组
 * @param str 传入字符串
 */
exports.str2Bytes = function (str) {
    var pos = 0;
    var len = str.length;
    if (len % 2 !== 0) return null;
    len /= 2;
    var hexA = [];
    for (var i = 0; i < len; i++) {
        var s = str.substr(pos, 2);
        var v = parseInt(s, 16);
        hexA.push(v);
        pos += 2;
    }
    return hexA;
};
/**
 * 十六进制字符串转u8数组
 *
 * @param str 输入字符串
 */
exports.hexstrToU8Array = function (str) {
    if (str.length % 2 > 0) str = "0" + str;
    var r = new Uint8Array(str.length / 2);
    for (var i = 0; i < str.length; i += 2) {
        var high = parseInt(str.charAt(i), 16);
        var low = parseInt(str.charAt(i + 1), 16);
        r[i / 2] = high * 16 + low;
    }
    return r;
};
/**
 * 十六进制字符串转u8数组
 *
 * @param str 输入字符串
 */
exports.hexstrToU16Array = function (str) {
    // if (str.length % 2 > 0) str = `0${str}`;
    var r = new Uint8Array(str.length);
    for (var i = 0; i < str.length; i++) {
        r[i] = parseInt(str.charAt(i), 16);
    }
    return r;
};
/**
 * u8数组转十六进制字符串
 *
 * @param u8Array 输入数组
 */
exports.u8ArrayToHexstr = function (u8Array) {
    var str = '';
    for (var i = 0; i < u8Array.length; i++) {
        str += Math.floor(u8Array[i] / 16).toString(16);
        str += (u8Array[i] % 16).toString(16);
        // str += u8Array[i].toString(16);
    }
    if (str[0] === '0') str = str.slice(1);
    return str;
};
/**
 * 简化加密助记词
 *
 * @param cipherMnemonic 加密助记词
 */
exports.simplifyCipherMnemonic = function (cipherMnemonic) {
    var r = JSON.parse(cipherMnemonic);
    var newJson = { iv: r.iv, ct: r.ct, salt: r.salt };
    return JSON.stringify(newJson);
};
/**
 * 还原加密助记词
 *
 * @param cipherMnemonic 加密助记词
 */
exports.reductionCipherMnemonic = function (cipherMnemonic) {
    var r = JSON.parse(cipherMnemonic);
    var newJson = {
        iv: r.iv, ct: r.ct, salt: r.salt, v: 1, iter: 10000, ks: 128, ts: 64,
        mode: 'ccm', adata: '', cipher: 'aes', keySize: 128, tagSize: 64
    };
    return JSON.stringify(newJson);
};
/**
 * 获取指定货币下余额总数
 * @param currencyName 货币名称
 */
exports.fetchBalanceOfCurrency = function (currencyName) {
    var wallet = memstore_1.getStore('wallet');
    if (!wallet) return 0;
    var balance = 0;
    var currencyRecord = null;
    for (var _iterator6 = wallet.currencyRecords, _isArray6 = Array.isArray(_iterator6), _i6 = 0, _iterator6 = _isArray6 ? _iterator6 : _iterator6[Symbol.iterator]();;) {
        var _ref6;

        if (_isArray6) {
            if (_i6 >= _iterator6.length) break;
            _ref6 = _iterator6[_i6++];
        } else {
            _i6 = _iterator6.next();
            if (_i6.done) break;
            _ref6 = _i6.value;
        }

        var item = _ref6;

        if (item.currencyName === currencyName) {
            currencyRecord = item;
        }
    }
    for (var _iterator7 = currencyRecord.addrs, _isArray7 = Array.isArray(_iterator7), _i7 = 0, _iterator7 = _isArray7 ? _iterator7 : _iterator7[Symbol.iterator]();;) {
        var _ref7;

        if (_isArray7) {
            if (_i7 >= _iterator7.length) break;
            _ref7 = _iterator7[_i7++];
        } else {
            _i7 = _iterator7.next();
            if (_i7.done) break;
            _ref7 = _i7.value;
        }

        var addrInfo = _ref7;

        balance += addrInfo.balance;
    }
    return balance;
};
/**
 * 获取异或值
 * @param first 前段
 * @param second 后段
 */
exports.getXOR = function (first, second) {
    if (first.length !== second.length) return '';
    var arr = [];
    for (var i = 0; i < first.length; i++) {
        var m = parseInt(first.substr(i, 1), 16);
        var k = parseInt(second.substr(i, 1), 16);
        arr.push((m ^ k).toString(16));
    }
    return arr.join('');
};
// 复制到剪切板
exports.copyToClipboard = function (copyText) {
    var input = document.createElement('input');
    input.setAttribute('readonly', 'readonly');
    input.setAttribute('value', copyText);
    input.setAttribute('style', 'position:absolute;top:-9999px;');
    document.body.appendChild(input);
    if (navigator.userAgent.match(/(iPhone|iPod|iPad);?/i)) {
        input.setSelectionRange(0, 9999);
    } else {
        input.select();
    }
    if (document.execCommand('copy')) {
        document.execCommand('copy');
    }
    document.body.removeChild(input);
};
/**
 * 获取memery hash
 */
exports.calcHashValuePromise = function (pwd, salt) {
    return __awaiter(undefined, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        var hash, argonHash;
        return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
                switch (_context.prev = _context.next) {
                    case 0:
                        hash = void 0;
                        argonHash = new argonHash_1.ArgonHash();

                        argonHash.init();
                        _context.next = 5;
                        return argonHash.calcHashValuePromise({ pwd: pwd, salt: salt });

                    case 5:
                        hash = _context.sent;

                        memstore_1.setStore('user/secretHash', hash);
                        return _context.abrupt("return", hash);

                    case 8:
                    case "end":
                        return _context.stop();
                }
            }
        }, _callee, this);
    }));
};
/**
 * 基础打开弹窗界面封装
 */
exports.openBasePage = function (foreletName) {
    var foreletParams = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    // tslint:disable-next-line:typedef
    return new Promise(function (resolve, reject) {
        root_1.popNew(foreletName, foreletParams, function (ok) {
            // this.windowSet.delete(foreletName);
            resolve(ok);
        }, function (cancel) {
            // this.windowSet.delete(foreletName);
            reject(cancel);
        });
    });
};
exports.popPswBox = function () {
    var content = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
    return __awaiter(undefined, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
        var BoxInputTitle, psw;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
            while (1) {
                switch (_context2.prev = _context2.next) {
                    case 0:
                        _context2.prev = 0;

                        // tslint:disable-next-line:no-unnecessary-local-variable
                        BoxInputTitle = config_1.Config[lang_1.getLang()].userInfo.PswBoxInputTitle;
                        // tslint:disable-next-line:no-unnecessary-local-variable

                        _context2.next = 4;
                        return openMessageboxPsw(BoxInputTitle, content);

                    case 4:
                        psw = _context2.sent;
                        return _context2.abrupt("return", psw);

                    case 8:
                        _context2.prev = 8;
                        _context2.t0 = _context2["catch"](0);
                        return _context2.abrupt("return");

                    case 11:
                    case "end":
                        return _context2.stop();
                }
            }
        }, _callee2, this, [[0, 8]]);
    }));
};
// 弹出提示框
exports.popNewMessage = function (content) {
    return root_1.popNew('app-components1-message-message', { content: content });
};
// 弹出loading
exports.popNewLoading = function (text) {
    return root_1.popNew('app-components1-loading-loading', { text: text });
};
/**
 * 打开密码输入框
 */
var openMessageboxPsw = function openMessageboxPsw(BoxInputTitle, content) {
    // tslint:disable-next-line:typedef
    return new Promise(function (resolve, reject) {
        root_1.popNew('app-components1-modalBoxInput-modalBoxInput', { itype: 'password', title: BoxInputTitle, content: content }, function (r) {
            resolve(r);
        }, function (cancel) {
            reject(cancel);
        });
    });
};
// 计算字符串长度包含中文 中文长度加2 英文加1
exports.getByteLen = function (val) {
    var len = 0;
    for (var i = 0; i < val.length; i++) {
        var a = val.charAt(i);
        if (a.match(/[^\x00-\xff]/ig) !== null) {
            len += 2;
        } else {
            len += 1;
        }
    }
    return len;
};
// 计算支持的币币兑换的币种
exports.currencyExchangeAvailable = function () {
    var shapeshiftCoins = memstore_1.getStore('third/shapeShiftCoins', []);
    var currencyArr = [];
    for (var i in config_1.MainChainCoin) {
        currencyArr.push(i);
    }
    for (var _i8 in config_1.ERC20Tokens) {
        currencyArr.push(_i8);
    }
    return shapeshiftCoins.filter(function (item) {
        return item.status === 'available' && currencyArr.indexOf(item.symbol) >= 0;
    });
};
// 根据货币名获取当前正在使用的地址
exports.getCurrentAddrByCurrencyName = function (currencyName) {
    var wallet = memstore_1.getStore('wallet');
    for (var _iterator8 = wallet.currencyRecords, _isArray8 = Array.isArray(_iterator8), _i9 = 0, _iterator8 = _isArray8 ? _iterator8 : _iterator8[Symbol.iterator]();;) {
        var _ref8;

        if (_isArray8) {
            if (_i9 >= _iterator8.length) break;
            _ref8 = _iterator8[_i9++];
        } else {
            _i9 = _iterator8.next();
            if (_i9.done) break;
            _ref8 = _i9.value;
        }

        var record = _ref8;

        if (record.currencyName === currencyName) {
            return record.currentAddr;
        }
    }
    return;
};
// 时间戳格式化 毫秒为单位
exports.timestampFormat = function (timestamp) {
    var date = new Date(timestamp);
    var year = date.getFullYear();
    var month = date.getMonth() + 1 >= 10 ? date.getMonth() + 1 : "0" + (date.getMonth() + 1);
    var day = date.getDate() >= 10 ? date.getDate() : "0" + date.getDate();
    var hour = date.getHours() >= 10 ? date.getHours() : "0" + date.getHours();
    var minutes = date.getMinutes() >= 10 ? date.getMinutes() : "0" + date.getMinutes();
    var seconds = date.getSeconds() >= 10 ? date.getSeconds() : "0" + date.getSeconds();
    return year + "-" + month + "-" + day + " " + hour + ":" + minutes + ":" + seconds;
};
// unicode数组转字符串
exports.unicodeArray2Str = function (arr) {
    var str = '';
    if (!arr || arr === 'null') {
        return str;
    }
    if (typeof arr === 'string') {
        // 如果本身是字符串直接返回
        return arr;
    }
    for (var i = 0; i < arr.length; i++) {
        str += String.fromCharCode(arr[i]);
    }
    return str;
};
/**
 * 计算日期间隔
 */
exports.GetDateDiff = function (startDate, endDate) {
    var Y = startDate.getFullYear() + "-";
    var M = (startDate.getMonth() + 1 < 10 ? "0" + (startDate.getMonth() + 1) : startDate.getMonth() + 1) + "-";
    var D = "" + startDate.getDate();
    startDate = new Date("" + Y + M + D);
    var startTime = startDate.getTime();
    Y = endDate.getFullYear() + "-";
    M = (endDate.getMonth() + 1 < 10 ? "0" + (endDate.getMonth() + 1) : endDate.getMonth() + 1) + "-";
    D = "" + endDate.getDate();
    endDate = new Date("" + Y + M + D);
    var endTime = endDate.getTime();
    return Math.floor(Math.abs(startTime - endTime) / (1000 * 60 * 60 * 24));
};
// 时间戳格式化 毫秒为单位
exports.timestampFormatToDate = function (timestamp) {
    var date = new Date(timestamp);
    var year = date.getFullYear();
    var month = date.getMonth() + 1 >= 10 ? date.getMonth() + 1 : "0" + (date.getMonth() + 1);
    var day = date.getDate() >= 10 ? date.getDate() : "0" + date.getDate();
    return year + "-" + month + "-" + day;
};
/**
 * 密码加密
 * @param plainText 需要加密的文本
 */
exports.encrypt = function (plainText, salt) {
    var cipher = new cipher_1.Cipher();
    return cipher.encrypt(salt, plainText);
};
/**
 * 密码解密
 * @param cipherText 需要解密的文本
 */
exports.decrypt = function (cipherText, salt) {
    var cipher = new cipher_1.Cipher();
    return cipher.decrypt(salt, cipherText);
};
// hash256;
exports.sha256 = function (data) {
    var cipher = new cipher_1.Cipher();
    return cipher.sha256(data);
};
// 锁屏密码验证
exports.lockScreenVerify = function (psw) {
    var hash256 = exports.sha256(psw + memstore_1.getStore('user/salt'));
    var localHash256 = memstore_1.getStore('setting/lockScreen').psw;
    return hash256 === localHash256;
};
// 锁屏密码hash算法
exports.lockScreenHash = function (psw) {
    return exports.sha256(psw + memstore_1.getStore('user/salt'));
};
// ==========================================================new version tools
// 获取gasPrice
exports.fetchGasPrice = function (minerFeeLevel) {
    return memstore_1.getStore('third/gasPrice')[minerFeeLevel];
};
// 获取btc miner fee
exports.fetchBtcMinerFee = function (minerFeeLevel) {
    return memstore_1.getStore('third/btcMinerFee')[minerFeeLevel];
};
/**
 * 获取总资产
 */
exports.fetchLocalTotalAssets = function () {
    var wallet = memstore_1.getStore('wallet');
    if (!wallet) return 0;
    var totalAssets = 0;
    wallet.currencyRecords.forEach(function (item) {
        if (wallet.showCurrencys.indexOf(item.currencyName) >= 0) {
            var balance = exports.fetchBalanceOfCurrency(item.currencyName);
            totalAssets += exports.fetchBalanceValueOfCoin(item.currencyName, balance);
        }
    });
    return totalAssets;
};
/**
 * 获取云端总资产
 */
exports.fetchCloudTotalAssets = function () {
    var cloudBalances = memstore_1.getCloudBalances();
    var totalAssets = 0;
    for (var _iterator9 = cloudBalances, _isArray9 = Array.isArray(_iterator9), _i10 = 0, _iterator9 = _isArray9 ? _iterator9 : _iterator9[Symbol.iterator]();;) {
        var _ref9;

        if (_isArray9) {
            if (_i10 >= _iterator9.length) break;
            _ref9 = _iterator9[_i10++];
        } else {
            _i10 = _iterator9.next();
            if (_i10.done) break;
            _ref9 = _i10.value;
        }

        var _ref10 = _ref9,
            _ref11 = _slicedToArray(_ref10, 2),
            k = _ref11[0],
            v = _ref11[1];

        totalAssets += exports.fetchBalanceValueOfCoin(interface_1.CloudCurrencyType[k], v);
    }
    return totalAssets;
};
/**
 * 获取某个币种对应的货币价值
 */
exports.fetchBalanceValueOfCoin = function (currencyName, balance) {
    var balanceValue = 0;
    var USD2CNYRate = memstore_1.getStore('third/rate', 0);
    var currency2USDTMap = memstore_1.getStore('third/currency2USDTMap');
    var currency2USDT = currency2USDTMap.get(currencyName) || { open: 0, close: 0 };
    var currencyUnit = memstore_1.getStore('setting/currencyUnit', 'CNY');
    if (currencyUnit === 'CNY') {
        balanceValue = balance * currency2USDT.close * USD2CNYRate;
    } else if (currencyUnit === 'USD') {
        balanceValue = balance * currency2USDT.close;
    }
    return balanceValue;
};
/**
 * 获取本地钱包资产列表
 */
exports.fetchWalletAssetList = function () {
    var wallet = memstore_1.getStore('wallet');
    var showCurrencys = wallet && wallet.showCurrencys || constants_1.defalutShowCurrencys;
    var assetList = [];
    for (var k in config_1.MainChainCoin) {
        var item = {};
        if (config_1.MainChainCoin.hasOwnProperty(k) && showCurrencys.indexOf(k) >= 0) {
            item.currencyName = k;
            item.description = config_1.MainChainCoin[k].description;
            var balance = exports.fetchBalanceOfCurrency(k);
            item.balance = exports.formatBalance(balance);
            item.balanceValue = exports.formatBalanceValue(exports.fetchBalanceValueOfCoin(k, balance));
            item.gain = exports.fetchCoinGain(k);
            item.rate = exports.formatBalanceValue(exports.fetchBalanceValueOfCoin(k, 1));
            assetList.push(item);
        }
    }
    for (var _k in config_1.ERC20Tokens) {
        var _item = {};
        if (config_1.ERC20Tokens.hasOwnProperty(_k) && showCurrencys.indexOf(_k) >= 0) {
            _item.currencyName = _k;
            _item.description = config_1.ERC20Tokens[_k].description;
            var _balance = exports.fetchBalanceOfCurrency(_k);
            _item.balance = exports.formatBalance(_balance);
            _item.balanceValue = exports.formatBalanceValue(exports.fetchBalanceValueOfCoin(_k, _balance));
            _item.rate = exports.formatBalanceValue(exports.fetchBalanceValueOfCoin(_k, 1));
            _item.gain = exports.fetchCoinGain(_k);
            assetList.push(_item);
        }
    }
    return assetList;
};
/**
 * 获取云端钱包资产列表
 */
exports.fetchCloudWalletAssetList = function () {
    var assetList = [];
    var cloudBalances = memstore_1.getCloudBalances();
    // const ktBalance = cloudBalances.get(CloudCurrencyType.KT) || 0;
    // const ktItem = {
    //     currencyName: 'KT',
    //     description: 'KuPlay Token',
    //     balance: formatBalance(ktBalance),
    //     balanceValue: formatBalanceValue(fetchBalanceValueOfCoin('KT', ktBalance)),
    //     gain: formatBalanceValue(0)
    // };
    // assetList.push(ktItem);
    // const cnytItem = {
    //     currencyName: 'CNYT',
    //     description: 'CNYT',
    //     balance: 0,
    //     balanceValue: '0.00',
    //     gain: formatBalanceValue(0)
    // };
    // assetList.push(cnytItem);
    for (var k in interface_1.CloudCurrencyType) {
        var item = {};
        if (config_1.MainChainCoin.hasOwnProperty(k)) {
            item.currencyName = k;
            item.description = config_1.MainChainCoin[k].description;
            var balance = cloudBalances.get(interface_1.CloudCurrencyType[k]) || 0;
            item.balance = exports.formatBalance(balance);
            item.balanceValue = exports.formatBalanceValue(exports.fetchBalanceValueOfCoin(k, balance));
            item.gain = exports.fetchCoinGain(k);
            item.rate = exports.formatBalanceValue(exports.fetchBalanceValueOfCoin(k, 1));
            assetList.push(item);
        }
    }
    return assetList;
};
/**
 * 没有创建钱包时
 */
exports.hasWallet = function () {
    var wallet = memstore_1.getStore('wallet');
    if (!wallet) {
        root_1.popNew('app-components1-modalBox-modalBox', {
            title: { zh_Hans: '提示', zh_Hant: '提示', en: '' },
            content: { zh_Hans: '你还没有登录，去登录使用更多功能吧', zh_Hant: '你還沒有登錄，去登錄使用更多功能吧', en: '' },
            sureText: { zh_Hans: '去登录', zh_Hant: '去登錄', en: '' },
            cancelText: { zh_Hans: '暂时不', zh_Hant: '暫時不', en: '' }
        }, function () {
            root_1.popNew('app-view-wallet-create-home');
            // popNew('app-view-base-localImg');
        });
        return false;
    }
    return true;
};
// 解析交易状态
exports.parseStatusShow = function (tx) {
    if (!tx) {
        return {
            text: config_1.Config[lang_1.getLang()].transfer.packing,
            icon: 'pending.png'
        };
    }
    var status = tx.status;
    if (status === interface_1.TxStatus.Pending) {
        return {
            text: config_1.Config[lang_1.getLang()].transfer.packing,
            icon: 'pending.png'
        };
    } else if (status === interface_1.TxStatus.Confirmed) {
        return {
            text: config_1.Config[lang_1.getLang()].transfer.confirmed + " " + tx.confirmedBlockNumber + "/" + tx.needConfirmedBlockNumber,
            icon: 'pending.png'
        };
    } else if (status === interface_1.TxStatus.Failed) {
        return {
            text: config_1.Config[lang_1.getLang()].transfer.transferFailed,
            icon: 'fail.png'
        };
    } else {
        return {
            text: config_1.Config[lang_1.getLang()].transfer.completed,
            icon: 'icon_right2.png'
        };
    }
};
// 解析转账类型
exports.parseTxTypeShow = function (txType) {
    if (txType === interface_1.TxType.Receipt) {
        return config_1.Config[lang_1.getLang()].transfer.receipt; // 收款
    }
    return config_1.Config[lang_1.getLang()].transfer.transfer; // 转账
};
// 解析是否可以重发
exports.canResend = function (tx) {
    if (tx.status !== interface_1.TxStatus.Pending) return false;
    if (tx.minerFeeLevel === interface_1.MinerFeeLevel.Fastest) return false;
    var startTime = tx.time;
    var now = new Date().getTime();
    if (now - startTime < constants_1.resendInterval) return false;
    return true;
};
/**
 * 获取钱包资产列表是否添加
 */
exports.fetchWalletAssetListAdded = function () {
    var wallet = memstore_1.getStore('wallet');
    var showCurrencys = wallet.showCurrencys || constants_1.defalutShowCurrencys;
    var assetList = [];
    for (var k in config_1.MainChainCoin) {
        var item = {};
        if (config_1.MainChainCoin.hasOwnProperty(k) && k !== 'KT') {
            item.currencyName = k;
            item.description = config_1.MainChainCoin[k].description;
            if (showCurrencys.indexOf(k) >= 0) {
                item.added = true;
            } else {
                item.added = false;
            }
            if (constants_1.notSwtichShowCurrencys.indexOf(k) >= 0) {
                item.canSwtiched = false;
            } else {
                item.canSwtiched = true;
            }
            assetList.push(item);
        }
    }
    for (var _k2 in config_1.ERC20Tokens) {
        var _item2 = {};
        if (config_1.ERC20Tokens.hasOwnProperty(_k2)) {
            _item2.currencyName = _k2;
            _item2.description = config_1.ERC20Tokens[_k2].description;
            if (showCurrencys.indexOf(_k2) >= 0) {
                _item2.added = true;
            } else {
                _item2.added = false;
            }
            if (constants_1.notSwtichShowCurrencys.indexOf(_k2) >= 0) {
                _item2.canSwtiched = false;
            } else {
                _item2.canSwtiched = true;
            }
            assetList.push(_item2);
        }
    }
    return assetList;
};
// 获取货币的涨跌情况
exports.fetchCoinGain = function (currencyName) {
    var currency2USDT = memstore_1.getStore('third/currency2USDTMap').get(currencyName);
    if (!currency2USDT) return exports.formatBalanceValue(0);
    return exports.formatBalanceValue((currency2USDT.close - currency2USDT.open) / currency2USDT.open * 100);
};
/**
 * 转化rtype
 */
exports.parseRtype = function (rType) {
    if (rType === 0) return config_1.Config[lang_1.getLang()].luckeyMoney.ordinary; // 普通
    if (rType === 1) return config_1.Config[lang_1.getLang()].luckeyMoney.random; // 随机
    if (rType === 99) return config_1.Config[lang_1.getLang()].luckeyMoney.invite; // 邀请
    return '';
};
/**
 * 获取某id理财产品持有量，不算已经赎回的
 */
exports.fetchHoldedProductAmount = function (id) {
    var purchaseRecord = memstore_1.getStore('activity/financialManagement/purchaseHistories');
    var holdAmout = 0;
    for (var i = 0; i < purchaseRecord.length; i++) {
        var one = purchaseRecord[i];
        if (one.id === id && one.state === 1) {
            holdAmout += one.amount;
        }
    }
    return holdAmout;
};
/**
 * 计算剩余百分比
 */
exports.calPercent = function (surplus, total) {
    if (surplus === 0) {
        return {
            left: 0,
            use: 100
        };
    }
    if (surplus === total) {
        return {
            left: 100,
            use: 0
        };
    }
    if (surplus <= total / 100) {
        return {
            left: 1,
            use: 99
        };
    }
    var r = Number((surplus / total).toString().slice(0, 4));
    return {
        left: r * 100,
        use: 100 - r * 100
    };
};
/**
 * base64 to blob
 */
exports.base64ToBlob = function (base64) {
    var arr = base64.split(',');
    var mime = arr[0].match(/:(.*?);/)[1];
    var bstr = atob(arr[1]);
    var n = bstr.length;
    var u8arr = new Uint8Array(n);
    while (n--) {
        u8arr[n] = bstr.charCodeAt(n);
    }
    return new Blob([u8arr], { type: mime });
};
/**
 * 图片base64转file格式
 */
exports.base64ToFile = function (base64) {
    var blob = exports.base64ToBlob(base64);
    var newFile = new File([blob], 'avatar.jpeg', { type: blob.type });
    console.log(newFile);
    return newFile;
};
/**
 * 获取区块确认数
 */
exports.getConfirmBlockNumber = function (currencyName, amount) {
    if (config_1.ERC20Tokens[currencyName]) {
        return constants_1.currencyConfirmBlockNumber.ERC20;
    }
    var confirmBlockNumbers = constants_1.currencyConfirmBlockNumber[currencyName];
    for (var i = 0; i < confirmBlockNumbers.length; i++) {
        if (amount < confirmBlockNumbers[i].value) {
            return confirmBlockNumbers[i].number;
        }
    }
};
/**
 * 获取设备唯一id
 */
exports.fetchDeviceId = function () {
    return __awaiter(undefined, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
            while (1) {
                switch (_context3.prev = _context3.next) {
                    case 0:
                        if (!(navigator.userAgent.indexOf('YINENG') < 0)) {
                            _context3.next = 4;
                            break;
                        }

                        return _context3.abrupt("return", new Promise(function (resolve, reject) {
                            var hash256 = exports.sha256(memstore_1.getStore('user/id'));
                            resolve(hash256);
                        }));

                    case 4:
                        return _context3.abrupt("return", new Promise(function (resolve, reject) {
                            native_1.getDeviceId(function (deviceId) {
                                var hash256 = exports.sha256(deviceId + memstore_1.getStore('user/id'));
                                resolve(hash256);
                            }, function (err) {
                                reject(err);
                            });
                        }));

                    case 5:
                    case "end":
                        return _context3.stop();
                }
            }
        }, _callee3, this);
    }));
};
/**
 * 根据当前语言设置获取静态文字，对于组件模块
 */
exports.getLanguage = function (w) {
    var lan = memstore_1.getStore('setting/language', 'zh_Hans');
    // if (lan) {
    //     return w.config.value[lan.languageList[lan.selected]];
    // }
    return w.config.value[lan];
};
/**
 * 根据当前语言设置获取静态文字，对于单独的ts文件
 */
exports.getStaticLanguage = function () {
    var lan = memstore_1.getStore('setting/language', 'zh_Hans');
    // if (lan) {
    //     return Config[lan.languageList[lan.selected]];
    // }
    return config_1.Config[lan];
};
/**
 * 助记词片段分享加密
 * 为了便于识别用户使用的是同一组密钥，会在分享出去的密钥的第2/4/6/8/10/12加上一个相同的随机数
 */
exports.mnemonicFragmentEncrypt = function (fragments) {
    var len = 6;
    var randomArr = [];
    for (var i = 0; i < len; i++) {
        var random = Math.floor(Math.random() * 10);
        randomArr.push(random);
    }
    var retFragments = [];
    for (var _i11 = 0; _i11 < fragments.length; _i11++) {
        var fragmentArr = fragments[_i11].split('');
        var j = 1;
        // tslint:disable-next-line:binary-expression-operand-order
        while (2 * j <= 12) {
            // tslint:disable-next-line:binary-expression-operand-order
            fragmentArr.splice(2 * j - 1, 0, randomArr[j - 1]);
            j++;
        }
        retFragments.push(fragmentArr.join(''));
    }
    return retFragments;
};
/**
 * 助记词片段分享解密
 * 为了便于识别用户使用的是同一组密钥，会在分享出去的密钥的第2/4/6/8/10/12加上一个相同的随机数
 */
exports.mnemonicFragmentDecrypt = function (fragment) {
    var fragmentArr = fragment.split('');
    var randomArr = [];
    var j = 6;
    while (j > 0) {
        // tslint:disable-next-line:binary-expression-operand-order
        var delRandom = fragmentArr.splice(2 * j - 1, 1);
        j--;
        randomArr.push(delRandom);
    }
    return {
        fragment: fragmentArr.join(''),
        randomStr: randomArr.reverse().join('')
    };
};
/**
 * 判断是否是有效的货币地址
 */
exports.isValidAddress = function (addr, currencyName) {
    if (currencyName === 'BTC') {
        // todo
    } else {
        return isETHValidAddress(addr);
    }
};
/**
 * 判断是否是有效的ETH地址
 */
var isETHValidAddress = function isETHValidAddress(addr) {
    if (!addr || !addr.startsWith('0x') || addr.length !== 42) return false;
    if (isNaN(Number(addr))) return false;
    return true;
};
// 获取本地版本号
exports.getLocalVersion = function () {
    var updateMod = pi_modules.update.exports;
    var versionArr = updateMod.getLocalVersion();
    var versionStr = versionArr.join('.');
    return versionStr.slice(0, versionStr.length - 7);
};
// 获取远端版本号
exports.getRemoteVersion = function () {
    var updateMod = pi_modules.update.exports;
    var versionArr = updateMod.getRemoteVersion();
    var versionStr = versionArr.join('.');
    return versionStr.slice(0, versionStr.length - 7);
};
// 更新矿工费
exports.fetchMinerFeeList = function (currencyName) {
    var cn = currencyName === 'ETH' || config_1.ERC20Tokens[currencyName] ? 'ETH' : 'BTC';
    var toa = constants_1.timeOfArrival[cn];
    var minerFeeList = [];
    for (var i = 0; i < toa.length; i++) {
        var minerFee = 0;
        if (cn === 'ETH') {
            var gasLimit = memstore_1.getStore('third/gasLimitMap').get(currencyName) || constants_1.defaultGasLimit;
            minerFee = unitTools_1.wei2Eth(gasLimit * exports.fetchGasPrice(toa[i].level));
        } else {
            minerFee = unitTools_1.sat2Btc(exports.fetchBtcMinerFee(toa[i].level));
        }
        var obj = Object.assign({}, toa[i], { minerFee: minerFee });
        minerFeeList.push(obj);
    }
    return minerFeeList;
};
/**
 * 获取货币单位符号 $ ￥
 */
exports.getCurrencyUnitSymbol = function () {
    var currencyUnit = memstore_1.getStore('setting/currencyUnit', 'CNY');
    if (currencyUnit === 'CNY') {
        return '￥';
    } else if (currencyUnit === 'USD') {
        return '$';
    }
};
/**
 * 检查是否是创建账户,通知弹窗备份
 */
exports.checkCreateAccount = function () {
    var flags = memstore_1.getStore('flags');
    // 第一次创建检查是否有登录后弹框提示备份
    if (flags.created) {
        flags.promptBackup = true;
        flags.created = false;
        memstore_1.setStore('flags', flags);
    }
};
/**
 * 判断地址是否合法
 * @param ctype 货币名称
 * @param str 地址
 */
exports.judgeAddressAvailable = function (ctype, addr) {
    if (ctype === 'BTC') {
        return (/^[0-9a-zA-Z]{26,34}$/.test(addr)
        );
    } else {
        return (/(^0x)[0-9a-fA-f]{40}$/.test(addr)
        );
    }
};
/**
 * 解析交易的额外信息
 */
exports.parseTransferExtraInfo = function (input) {
    return input === '0x' ? '无' : input;
};
/**
 * 更新本地交易记录
 */
exports.updateLocalTx = function (tx) {
    var wallet = memstore_1.getStore('wallet');
    if (!wallet) return;
    var currencyName = tx.currencyName;
    var addr = tx.addr;
    wallet.currencyRecords.forEach(function (record) {
        if (record.currencyName === currencyName) {
            record.addrs.forEach(function (addrInfo) {
                if (addrInfo.addr.toLowerCase() === addr.toLowerCase()) {
                    var index = -1;
                    var txHistory = addrInfo.txHistory;
                    for (var i = 0; i < txHistory.length; i++) {
                        if (txHistory[i].hash === tx.hash) {
                            index = i;
                            break;
                        }
                    }
                    if (index >= 0) {
                        txHistory.splice(index, 1, tx);
                    } else {
                        txHistory.push(tx);
                    }
                }
            });
        }
    });
    memstore_1.setStore('wallet/currencyRecords', wallet.currencyRecords);
};
/**
 * 删除本地交易记录
 */
exports.deletLocalTx = function (tx) {
    var wallet = memstore_1.getStore('wallet');
    var currencyName = tx.currencyName;
    var addr = tx.addr;
    wallet.currencyRecords.forEach(function (record) {
        if (record.currencyName === currencyName) {
            record.addrs.forEach(function (addrInfo) {
                if (addrInfo.addr === addr) {
                    var index = -1;
                    var txHistory = addrInfo.txHistory;
                    for (var i = 0; i < txHistory.length; i++) {
                        if (txHistory[i].hash === tx.hash) {
                            index = i;
                            break;
                        }
                    }
                    if (index >= 0) {
                        txHistory.splice(index, 1);
                    }
                }
            });
        }
    });
    memstore_1.setStore('wallet/currencyRecords', wallet.currencyRecords);
};
/**
 * 获取某个地址的nonce
 * 只取ETH地址下的nonce
 */
exports.getEthNonce = function (addr) {
    var wallet = memstore_1.getStore('wallet');
    for (var _iterator10 = wallet.currencyRecords, _isArray10 = Array.isArray(_iterator10), _i12 = 0, _iterator10 = _isArray10 ? _iterator10 : _iterator10[Symbol.iterator]();;) {
        var _ref12;

        if (_isArray10) {
            if (_i12 >= _iterator10.length) break;
            _ref12 = _iterator10[_i12++];
        } else {
            _i12 = _iterator10.next();
            if (_i12.done) break;
            _ref12 = _i12.value;
        }

        var record = _ref12;

        if (record.currencyName === 'ETH') {
            for (var _iterator11 = record.addrs, _isArray11 = Array.isArray(_iterator11), _i13 = 0, _iterator11 = _isArray11 ? _iterator11 : _iterator11[Symbol.iterator]();;) {
                var _ref13;

                if (_isArray11) {
                    if (_i13 >= _iterator11.length) break;
                    _ref13 = _iterator11[_i13++];
                } else {
                    _i13 = _iterator11.next();
                    if (_i13.done) break;
                    _ref13 = _i13.value;
                }

                var addrInfo = _ref13;

                if (addrInfo.addr === addr) {
                    return addrInfo.nonce;
                }
            }
        }
    }
};
/**
 * 设置某个地址的nonce
 * 只设置ETH地址下的nonce
 */
exports.setEthNonce = function (newNonce, addr) {
    var wallet = memstore_1.getStore('wallet');
    for (var _iterator12 = wallet.currencyRecords, _isArray12 = Array.isArray(_iterator12), _i14 = 0, _iterator12 = _isArray12 ? _iterator12 : _iterator12[Symbol.iterator]();;) {
        var _ref14;

        if (_isArray12) {
            if (_i14 >= _iterator12.length) break;
            _ref14 = _iterator12[_i14++];
        } else {
            _i14 = _iterator12.next();
            if (_i14.done) break;
            _ref14 = _i14.value;
        }

        var record = _ref14;

        if (record.currencyName === 'ETH') {
            for (var _iterator13 = record.addrs, _isArray13 = Array.isArray(_iterator13), _i15 = 0, _iterator13 = _isArray13 ? _iterator13 : _iterator13[Symbol.iterator]();;) {
                var _ref15;

                if (_isArray13) {
                    if (_i15 >= _iterator13.length) break;
                    _ref15 = _iterator13[_i15++];
                } else {
                    _i15 = _iterator13.next();
                    if (_i15.done) break;
                    _ref15 = _i15.value;
                }

                var addrInfo = _ref15;

                if (addrInfo.addr === addr) {
                    addrInfo.nonce = newNonce;
                    memstore_1.setStore('wallet', wallet);
                    return;
                }
            }
        }
    }
};
/**
 * 异或编码
 */
exports.xorEncode = function (str, key) {
    var ord = [];
    var res = '';
    for (var i = 1; i <= 255; i++) {
        ord[String.fromCharCode(i)] = i;
    }
    for (var _i16 = 0; _i16 < str.length; _i16++) {
        var code = ord[str.substr(_i16, 1)] ^ ord[key.substr(_i16 % key.length, 1)];
        if (code < 16) {
            res += "0" + code.toString(16);
        } else {
            res += code.toString(16);
        }
    }
    return res;
};
/**
 * 异或解码 直接解析字符串
 */
exports.xorDecode = function (str, key) {
    var ord = [];
    var res = '';
    for (var i = 1; i <= 255; i++) {
        ord[String.fromCharCode(i)] = i;
    }
    for (var _i17 = 0; _i17 < str.length; _i17++) {
        res += String.fromCharCode(ord[str.substr(_i17, 1)] ^ ord[key.substr(_i17 % key.length, 1)]);
    }
    return res;
};
/**
 * 异或解码 解析16进制
 */
exports.xorDecode1 = function (str, key) {
    var u8arr = exports.hexstrToU8Array(str);
    var ord = [];
    var res = '';
    for (var i = 1; i <= 255; i++) {
        ord[String.fromCharCode(i)] = i;
    }
    for (var _i18 = 0; _i18 < u8arr.length; _i18++) {
        res += String.fromCharCode(u8arr[_i18] ^ ord[key.substr(_i18 % key.length, 1)]);
    }
    return res;
};
/**
 * 获取当前正在使用的ETH地址
 */
exports.getCurrentEthAddr = function () {
    return exports.getCurrentAddrInfo('ETH').addr;
};
})