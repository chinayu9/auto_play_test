_$define("app/store/memstore", function (require, exports, module){
"use strict";

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @file store
 * @author donghr
 */
// ============================================ 导入
var localLanguage_1 = require("../../pi/browser/localLanguage");
var event_1 = require("../../pi/util/event");
var lang_1 = require("../../pi/util/lang");
var math_1 = require("../../pi/util/math");
var config_1 = require("../config");
var filestore_1 = require("./filestore");
// tslint:disable-next-line:max-line-length
var interface_1 = require("./interface");
// ============================================ 导出
/**
 * 初始化store
 */
exports.initStore = function () {
    registerFileStore(); // 注册监听
    initAccount(); // 账户初始化
    initSettings(); // 设置初始化
    initThird(); // 三方数据初始化
    initFile(); // indexDb数据初始化
};
/**
 * 判断是否是对象
 */
var isObject = function isObject(value) {
    var vtype = typeof value === "undefined" ? "undefined" : _typeof(value);
    return value !== null && (vtype === 'object' || vtype === 'function');
};
/**
 * 数据深拷贝
 */
exports.deepCopy = function (v) {
    if (!v || !isObject(v)) return v;
    if (v instanceof Map) {
        return new Map(JSON.parse(JSON.stringify(v)));
    }
    var newobj = v.constructor === Array ? [] : {};
    for (var i in v) {
        newobj[i] = isObject(v[i]) ? exports.deepCopy(v[i]) : v[i];
    }
    return newobj;
};
/**
 * 根据路径获取数据
 */
exports.getStore = function (path) {
    var defaultValue = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : undefined;

    var ret = store;
    for (var _iterator = path.split('/'), _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator]();;) {
        var _ref;

        if (_isArray) {
            if (_i >= _iterator.length) break;
            _ref = _iterator[_i++];
        } else {
            _i = _iterator.next();
            if (_i.done) break;
            _ref = _i.value;
        }

        var key = _ref;

        if (key in ret) {
            ret = ret[key];
        } else {
            // 路径中有和store内部不同的键，肯定是bug
            // tslint:disable-next-line:prefer-template
            throw new Error('getStore Failed, path = ' + path);
        }
    }
    return exports.deepCopy(ret) || defaultValue;
};
/**
 * 更新store并通知
 */
exports.setStore = function (path, data) {
    var notified = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;

    var keyArr = path.split('/');
    var notifyPath = [];
    for (var i = 0; i < keyArr.length; i++) {
        // tslint:disable-next-line:prefer-template
        var _path = i === 0 ? keyArr[i] : notifyPath[i - 1] + '/' + keyArr[i];
        notifyPath.push(_path);
    }
    // console.log(notifyPath);
    // 原有的最后一个键
    var lastKey = keyArr.pop();
    var parent = store;
    for (var _iterator2 = keyArr, _isArray2 = Array.isArray(_iterator2), _i2 = 0, _iterator2 = _isArray2 ? _iterator2 : _iterator2[Symbol.iterator]();;) {
        var _ref2;

        if (_isArray2) {
            if (_i2 >= _iterator2.length) break;
            _ref2 = _iterator2[_i2++];
        } else {
            _i2 = _iterator2.next();
            if (_i2.done) break;
            _ref2 = _i2.value;
        }

        var key = _ref2;

        if (key in parent) {
            parent = parent[key];
        } else {
            // 路径中有和store内部不同的键，肯定是bug
            // tslint:disable-next-line:prefer-template
            throw new Error('setStore Failed, path = ' + path);
        }
    }
    parent[lastKey] = exports.deepCopy(data);
    if (notified) {
        for (var _i3 = notifyPath.length - 1; _i3 >= 0; _i3--) {
            handlerMap.notify(notifyPath[_i3], [exports.getStore(notifyPath[_i3])]);
        }
    }
};
/**
 * 注册消息处理器
 */
exports.register = function (keyName, cb) {
    handlerMap.add(keyName, cb);
};
/**
 * 取消注册消息处理器
 */
exports.unregister = function (keyName, cb) {
    handlerMap.remove(keyName, cb);
};
/**
 * 获取云端余额
 */
exports.getCloudBalances = function () {
    var cloudWallets = store.cloud.cloudWallets;
    var cloudBalances = new Map();
    for (var _iterator3 = cloudWallets, _isArray3 = Array.isArray(_iterator3), _i4 = 0, _iterator3 = _isArray3 ? _iterator3 : _iterator3[Symbol.iterator]();;) {
        var _ref3;

        if (_isArray3) {
            if (_i4 >= _iterator3.length) break;
            _ref3 = _iterator3[_i4++];
        } else {
            _i4 = _iterator3.next();
            if (_i4.done) break;
            _ref3 = _i4.value;
        }

        var _ref4 = _ref3,
            _ref5 = _slicedToArray(_ref4, 2),
            key = _ref5[0],
            val = _ref5[1];

        cloudBalances.set(key, val.balance || 0);
    }
    return cloudBalances;
};
/**
 * 初始化cloudWallets
 */
exports.initCloudWallets = function () {
    var cloudWallets = new Map();
    for (var key in interface_1.CloudCurrencyType) {
        var isValueProperty = parseInt(key, 10) >= 0;
        if (isValueProperty) {
            var cloudWallet = {
                balance: 0,
                rechargeLogs: { list: [], start: 0, canLoadMore: false },
                withdrawLogs: { list: [], start: 0, canLoadMore: false },
                otherLogs: { list: [], start: 0, canLoadMore: false }
            };
            cloudWallets.set(interface_1.CloudCurrencyType[interface_1.CloudCurrencyType[key]], cloudWallet);
        }
    }
    return cloudWallets;
};
/**
 * 获取所有的账户列表
 */
exports.getAllAccount = function () {
    var localAcccounts = filestore_1.getLocalStorage('accounts', {
        currenctId: '',
        accounts: {}
    });
    var accounts = [];
    for (var key in localAcccounts.accounts) {
        accounts.push(localAcccounts.accounts[key]);
    }
    return accounts;
};
/**
 * 删除账户
 */
exports.deleteAccount = function (id) {
    var localAcccounts = filestore_1.getLocalStorage('accounts', {
        currenctId: '',
        accounts: {}
    });
    filestore_1.deleteFile(id);
    delete localAcccounts.accounts[id];
    filestore_1.setLocalStorage('accounts', localAcccounts);
};
// ===================================================本地
/**
 * indexDB数据初始化
 */
var initFile = function initFile() {
    // console.time('initFile');
    filestore_1.initFileStore().then(function () {
        if (!store.user.id) return;
        filestore_1.getFile(store.user.id, function (value, key) {
            // console.timeEnd('initFile');
            if (!value) return;
            initTxHistory(value);
            // console.log('store init success',store);
        }, function () {
            console.log('read error');
        });
    });
};
/**
 * 初始化历史记录
 * @param fileTxHistorys indexDb存储的历史记录
 */
var initTxHistory = function initTxHistory(fileTxHistorys) {
    var currencyRecords = store.wallet.currencyRecords;
    for (var _iterator4 = currencyRecords, _isArray4 = Array.isArray(_iterator4), _i5 = 0, _iterator4 = _isArray4 ? _iterator4 : _iterator4[Symbol.iterator]();;) {
        var _ref6;

        if (_isArray4) {
            if (_i5 >= _iterator4.length) break;
            _ref6 = _iterator4[_i5++];
        } else {
            _i5 = _iterator4.next();
            if (_i5.done) break;
            _ref6 = _i5.value;
        }

        var record = _ref6;

        for (var _iterator5 = record.addrs, _isArray5 = Array.isArray(_iterator5), _i6 = 0, _iterator5 = _isArray5 ? _iterator5 : _iterator5[Symbol.iterator]();;) {
            var _ref7;

            if (_isArray5) {
                if (_i6 >= _iterator5.length) break;
                _ref7 = _iterator5[_i6++];
            } else {
                _i6 = _iterator5.next();
                if (_i6.done) break;
                _ref7 = _i6.value;
            }

            var addrInfo = _ref7;

            addrInfo.txHistory = getTxHistory(fileTxHistorys, record.currencyName, addrInfo.addr);
        }
    }
};
/**
 * 获取历史记录
 */
var getTxHistory = function getTxHistory(fileTxHistorys, currencyName, addr) {
    for (var _iterator6 = fileTxHistorys, _isArray6 = Array.isArray(_iterator6), _i7 = 0, _iterator6 = _isArray6 ? _iterator6 : _iterator6[Symbol.iterator]();;) {
        var _ref8;

        if (_isArray6) {
            if (_i7 >= _iterator6.length) break;
            _ref8 = _iterator6[_i7++];
        } else {
            _i7 = _iterator6.next();
            if (_i7.done) break;
            _ref8 = _i7.value;
        }

        var fileTxHistory = _ref8;

        if (fileTxHistory.currencyName === currencyName && fileTxHistory.addr === addr) {
            return fileTxHistory.txHistory;
        }
    }
};
/**
 * 账户初始化
 */
var initAccount = function initAccount() {
    var localAcccounts = filestore_1.getLocalStorage('accounts', {
        currenctId: '',
        accounts: {}
    });
    var curAccount = localAcccounts.accounts[localAcccounts.currenctId];
    if (curAccount) {
        var fileUser = curAccount.user;
        // store.user init
        store.user.id = fileUser.id;
        store.user.token = fileUser.token;
        store.user.publicKey = fileUser.publicKey;
        store.user.salt = fileUser.salt;
        store.user.info = Object.assign({}, fileUser.info);
        // store.cloud init
        var localCloudWallets = new Map(curAccount.cloud.cloudWallets);
        for (var _iterator7 = localCloudWallets, _isArray7 = Array.isArray(_iterator7), _i8 = 0, _iterator7 = _isArray7 ? _iterator7 : _iterator7[Symbol.iterator]();;) {
            var _ref9;

            if (_isArray7) {
                if (_i8 >= _iterator7.length) break;
                _ref9 = _iterator7[_i8++];
            } else {
                _i8 = _iterator7.next();
                if (_i8.done) break;
                _ref9 = _i8.value;
            }

            var _ref11 = _ref9,
                _ref12 = _slicedToArray(_ref11, 2),
                key = _ref12[0],
                value = _ref12[1];

            var cloudWallet = store.cloud.cloudWallets.get(key);
            cloudWallet.balance = localCloudWallets.get(key).balance;
        }
        // store.wallet init
        var localWallet = curAccount.wallet;
        var currencyRecords = [];
        for (var _iterator8 = localWallet.currencyRecords, _isArray8 = Array.isArray(_iterator8), _i9 = 0, _iterator8 = _isArray8 ? _iterator8 : _iterator8[Symbol.iterator]();;) {
            var _ref10;

            if (_isArray8) {
                if (_i9 >= _iterator8.length) break;
                _ref10 = _iterator8[_i9++];
            } else {
                _i9 = _iterator8.next();
                if (_i9.done) break;
                _ref10 = _i9.value;
            }

            var localRecord = _ref10;

            var addrs = [];
            for (var _iterator9 = localRecord.addrs, _isArray9 = Array.isArray(_iterator9), _i10 = 0, _iterator9 = _isArray9 ? _iterator9 : _iterator9[Symbol.iterator]();;) {
                var _ref13;

                if (_isArray9) {
                    if (_i10 >= _iterator9.length) break;
                    _ref13 = _iterator9[_i10++];
                } else {
                    _i10 = _iterator9.next();
                    if (_i10.done) break;
                    _ref13 = _i10.value;
                }

                var info = _ref13;

                var addrInfo = {
                    addr: info.addr,
                    balance: info.balance,
                    txHistory: []
                };
                addrs.push(addrInfo);
            }
            var record = {
                currencyName: localRecord.currencyName,
                currentAddr: localRecord.currentAddr,
                addrs: addrs,
                updateAddr: localRecord.updateAddr
            };
            currencyRecords.push(record);
        }
        var wallet = {
            vault: localWallet.vault,
            isBackup: localWallet.isBackup,
            showCurrencys: localWallet.showCurrencys,
            currencyRecords: currencyRecords
        };
        store.wallet = wallet;
    } else {
        store.user.salt = math_1.cryptoRandomInt().toString();
    }
};
/**
 * 设置初始
 */
var initSettings = function initSettings() {
    var langNum = void 0;
    var appLanguage = new localLanguage_1.LocalLanguageMgr();
    appLanguage.init();
    appLanguage.getSysLan({
        success: function success(localLan) {
            // tslint:disable-next-line:radix
            langNum = parseInt(localLan);
            var localSet = filestore_1.getLocalStorage('setting');
            if (!localSet) {
                if (langNum === 2 || langNum === 3) {
                    lang_1.setLang(localLanguage_1.appLanguageList[langNum]);
                    store.setting.language = localLanguage_1.appLanguageList[langNum];
                } else {
                    lang_1.setLang(config_1.defaultSetting.DEFAULT_LANGUAGE);
                    store.setting.language = config_1.defaultSetting.DEFAULT_LANGUAGE;
                }
            }
        },
        fail: function fail(result) {
            console.log(result);
        }
    });
    var setting = filestore_1.getLocalStorage('setting', {
        language: config_1.defaultSetting.DEFAULT_LANGUAGE,
        changeColor: config_1.defaultSetting.DEFAULT_CHANGECOLOR,
        currencyUnit: config_1.defaultSetting.DEFAULT_CURRENCY,
        lockScreen: {
            open: false,
            psw: ''
        }
    });
    store.setting = Object.assign({}, setting);
    lang_1.setLang(setting.language);
};
/**
 * 三方数据初始
 */
var initThird = function initThird() {
    var third = filestore_1.getLocalStorage('third');
    if (!third) return;
    store.third.gasPrice = third.gasPrice;
    store.third.btcMinerFee = third.btcMinerFee;
    store.third.rate = third.rate;
    store.third.gasLimitMap = new Map(third.gasLimitMap);
    store.third.shapeShiftTxsMap = new Map(third.shapeShiftTxsMap);
    store.third.currency2USDTMap = new Map(third.currency2USDTMap);
};
/**
 * 注册文件数据库监听
 */
var registerFileStore = function registerFileStore() {
    registerAccountChange(); // 监听账户变化
    registerThirdChange(); // 监听3方数据变化
    registerSettingChange(); // 监听setting数据变化
};
/**
 * 账户相关变化监听
 */
var registerAccountChange = function registerAccountChange() {
    exports.register('user', function () {
        accountChange();
    });
    exports.register('wallet', function () {
        accountChange();
    });
    exports.register('cloud', function () {
        accountChange();
    });
};
/**
 * 3方数据变化监听
 */
var registerThirdChange = function registerThirdChange() {
    exports.register('third', function () {
        thirdChange();
    });
};
/**
 * setting数据变化监听
 */
var registerSettingChange = function registerSettingChange() {
    exports.register('setting', function () {
        settingChange();
    });
};
/**
 * 当前账户变化
 */
var accountChange = function accountChange() {
    var storeUser = exports.getStore('user');
    var localAccounts = filestore_1.getLocalStorage('accounts', {
        currenctId: '',
        accounts: {}
    });
    if (!storeUser.id) {
        var flags = exports.getStore('flags');
        var saveAccount = flags.saveAccount;
        if (saveAccount) {
            localAccounts.currenctId = '';
            filestore_1.setLocalStorage('accounts', localAccounts);
        } else {
            filestore_1.deleteFile(localAccounts.currenctId);
            delete localAccounts.accounts[localAccounts.currenctId];
            localAccounts.currenctId = '';
            filestore_1.setLocalStorage('accounts', localAccounts);
        }
        return;
    }
    var localUser = {
        id: storeUser.id,
        token: storeUser.token,
        publicKey: storeUser.publicKey,
        salt: storeUser.salt,
        info: storeUser.info
    };
    var storeCloudWallets = exports.getStore('cloud/cloudWallets');
    var localCloudWallets = new Map();
    for (var _iterator10 = storeCloudWallets, _isArray10 = Array.isArray(_iterator10), _i11 = 0, _iterator10 = _isArray10 ? _iterator10 : _iterator10[Symbol.iterator]();;) {
        var _ref14;

        if (_isArray10) {
            if (_i11 >= _iterator10.length) break;
            _ref14 = _iterator10[_i11++];
        } else {
            _i11 = _iterator10.next();
            if (_i11.done) break;
            _ref14 = _i11.value;
        }

        var _ref15 = _ref14,
            _ref16 = _slicedToArray(_ref15, 2),
            k = _ref16[0],
            v = _ref16[1];

        var cloudWallet = { balance: v.balance };
        localCloudWallets.set(k, cloudWallet);
    }
    var wallet = exports.getStore('wallet');
    var fileTxHistorys = [];
    var localWallet = null;
    if (wallet) {
        var localCurrencyRecords = wallet.currencyRecords.map(function (record) {
            var addrs = record.addrs.map(function (info) {
                var fileTxHistory = {
                    currencyName: record.currencyName,
                    addr: info.addr,
                    txHistory: info.txHistory
                };
                fileTxHistorys.push(fileTxHistory);
                return {
                    addr: info.addr,
                    balance: info.balance
                };
            });
            return Object.assign({}, record, { addrs: addrs });
        });
        localWallet = {
            vault: wallet.vault,
            isBackup: wallet.isBackup,
            showCurrencys: wallet.showCurrencys,
            currencyRecords: localCurrencyRecords
        };
    }
    var newAccount = {
        user: localUser,
        wallet: localWallet,
        cloud: { cloudWallets: localCloudWallets }
    };
    localAccounts.currenctId = storeUser.id;
    localAccounts.accounts[storeUser.id] = newAccount;
    filestore_1.setLocalStorage('accounts', localAccounts);
    filestore_1.writeFile(storeUser.id, fileTxHistorys);
};
/**
 * 第3方数据变化
 */
var thirdChange = function thirdChange() {
    var localThird = {
        gasPrice: exports.getStore('third/gasPrice'),
        btcMinerFee: exports.getStore('third/btcMinerFee'),
        gasLimitMap: exports.getStore('third/gasLimitMap'),
        rate: exports.getStore('third/rate'),
        currency2USDTMap: exports.getStore('third/currency2USDTMap')
    };
    filestore_1.setLocalStorage('third', localThird);
};
/**
 * setting数据变化
 */
var settingChange = function settingChange() {
    var localSetting = {
        language: exports.getStore('setting/language'),
        changeColor: exports.getStore('setting/changeColor'),
        currencyUnit: exports.getStore('setting/currencyUnit'),
        lockScreen: exports.getStore('setting/lockScreen')
    };
    filestore_1.setLocalStorage('setting', localSetting);
};
// ======================================================== 本地
// ============================================ 立即执行
/**
 * 消息处理列表
 */
var handlerMap = new event_1.HandlerMap();
// 全局内存数据库
var store = {
    user: {
        id: '',
        offline: true,
        isLogin: false,
        token: '',
        conRandom: '',
        conUid: '',
        publicKey: '',
        salt: '',
        secretHash: '',
        info: {
            nickName: '',
            avatar: '',
            phoneNumber: '',
            isRealUser: false // 是否是真实用户
        }
    },
    wallet: null,
    cloud: {
        cloudWallets: exports.initCloudWallets() // 云端钱包相关数据, 余额  充值提现记录...
    },
    activity: {
        luckyMoney: {
            sends: null,
            exchange: null,
            invite: null // 邀请红包记录
        },
        mining: {
            total: null,
            history: null,
            addMine: [],
            mineRank: null,
            miningRank: null,
            itemJump: null
        },
        dividend: {
            total: null,
            history: null // 分红历史记录
        },
        financialManagement: {
            products: null,
            purchaseHistories: null
        }
    },
    setting: {
        lockScreen: {
            psw: '',
            open: false,
            locked: false
        },
        language: '',
        changeColor: '',
        currencyUnit: '' // 显示哪个国家的货币
    },
    third: {
        gasPrice: null,
        btcMinerFee: null,
        gasLimitMap: new Map(),
        // shapeshift
        shapeShiftCoins: [],
        shapeShiftMarketInfo: null,
        shapeShiftTxsMap: new Map(),
        rate: 0,
        currency2USDTMap: new Map() // k线  --> 计算涨跌幅
    },
    flags: {}
};
// =======================================================
})