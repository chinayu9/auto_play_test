_$define("app/net/pull", function (require, exports, module){
"use strict";

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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
 * 主动向后端通讯
 */
var con_mgr_1 = require("../../pi/net/ui/con_mgr");
var root_1 = require("../../pi/ui/root");
var config_1 = require("../config");
var interface_1 = require("../store/interface");
var memstore_1 = require("../store/memstore");
// tslint:disable-next-line:max-line-length
var parse_1 = require("../store/parse");
var constants_1 = require("../utils/constants");
var toolMessages_1 = require("../utils/toolMessages");
// tslint:disable-next-line:max-line-length
var tools_1 = require("../utils/tools");
var unitTools_1 = require("../utils/unitTools");
var math_1 = require("../../pi/util/math");
/**
 * 注销账户并删除数据
 */
exports.logoutAccountDel = function () {
    var user = {
        id: '',
        isLogin: false,
        offline: true,
        token: '',
        conRandom: '',
        conUid: '',
        publicKey: '',
        salt: math_1.cryptoRandomInt().toString(),
        secretHash: '',
        info: {
            nickName: '',
            avatar: '',
            phoneNumber: '',
            isRealUser: false // 是否是真实用户
        }
    };
    var cloud = {
        cloudWallets: memstore_1.initCloudWallets() // 云端钱包相关数据, 余额  充值提现记录...
    };
    var activity = {
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
    };
    var lockScreen = memstore_1.getStore('setting/lockScreen');
    lockScreen = {
        psw: '',
        open: false
    };
    memstore_1.setStore('wallet', null, false);
    memstore_1.setStore('cloud', cloud, false);
    memstore_1.setStore('user', user);
    memstore_1.setStore('activity', activity);
    memstore_1.setStore('setting/lockScreen', lockScreen);
    con_mgr_1.setBottomLayerReloginMsg('', '', '');
    con_mgr_1.closeCon();
    setTimeout(function () {
        exports.openConnect();
    }, 100);
};
/**
 * 注销账户保留数据
 */
exports.logoutAccount = function () {
    memstore_1.setStore('flags', { saveAccount: true });
    exports.logoutAccountDel();
};
/**
 * 登录成功
 */
exports.loginSuccess = function (account) {
    // const secretHash = getStore('user/secretHash');
    var fileUser = account.user;
    var user = {
        isLogin: false,
        offline: true,
        conRandom: '',
        conUid: '',
        secretHash: '',
        id: fileUser.id,
        token: fileUser.token,
        publicKey: fileUser.publicKey,
        salt: fileUser.salt,
        info: Object.assign({}, fileUser.info)
    };
    var localWallet = account.wallet;
    var currencyRecords = [];
    for (var _iterator = localWallet.currencyRecords, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator]();;) {
        var _ref;

        if (_isArray) {
            if (_i >= _iterator.length) break;
            _ref = _iterator[_i++];
        } else {
            _i = _iterator.next();
            if (_i.done) break;
            _ref = _i.value;
        }

        var localRecord = _ref;

        var addrs = [];
        for (var _iterator3 = localRecord.addrs, _isArray3 = Array.isArray(_iterator3), _i3 = 0, _iterator3 = _isArray3 ? _iterator3 : _iterator3[Symbol.iterator]();;) {
            var _ref3;

            if (_isArray3) {
                if (_i3 >= _iterator3.length) break;
                _ref3 = _iterator3[_i3++];
            } else {
                _i3 = _iterator3.next();
                if (_i3.done) break;
                _ref3 = _i3.value;
            }

            var info = _ref3;

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
    var cloud = memstore_1.getStore('cloud');
    var localCloudWallets = new Map(account.cloud.cloudWallets);
    for (var _iterator2 = localCloudWallets, _isArray2 = Array.isArray(_iterator2), _i2 = 0, _iterator2 = _isArray2 ? _iterator2 : _iterator2[Symbol.iterator]();;) {
        var _ref2;

        if (_isArray2) {
            if (_i2 >= _iterator2.length) break;
            _ref2 = _iterator2[_i2++];
        } else {
            _i2 = _iterator2.next();
            if (_i2.done) break;
            _ref2 = _i2.value;
        }

        var _ref4 = _ref2,
            _ref5 = _slicedToArray(_ref4, 2),
            key = _ref5[0],
            value = _ref5[1];

        var cloudWallet = cloud.cloudWallets.get(key);
        cloudWallet.balance = localCloudWallets.get(key).balance;
    }
    memstore_1.setStore('wallet', wallet, false);
    memstore_1.setStore('cloud', cloud, false);
    memstore_1.setStore('user', user);
    memstore_1.setStore('flags', {});
    exports.openConnect();
};
/**
 * 获取用户基本信息
 */
exports.getUserInfo = function () {
    var userInfo = memstore_1.getStore('user/info');
    var nickName = userInfo.nickName;
    var phoneNumber = userInfo.phoneNumber;
    var isRealUser = userInfo.isRealUser;
    var avatar = userInfo.avatar;
    if (avatar && avatar.indexOf('data:image') < 0) {
        avatar = "" + config_1.uploadFileUrlPrefix + avatar;
    }
    return {
        nickName: nickName,
        avatar: avatar,
        phoneNumber: phoneNumber,
        isRealUser: isRealUser
    };
};
/**
 * 通用的异步通信
 */
exports.requestAsync = function (msg) {
    return new Promise(function (resolve, reject) {
        con_mgr_1.request(msg, function (resp) {
            if (resp.type) {
                console.log("\u9519\u8BEF\u4FE1\u606F\u4E3A" + resp.type);
                reject(resp);
            } else if (resp.result !== 1) {
                reject(resp);
            } else {
                resolve(resp);
            }
        });
    });
};
/**
 * 通用的异步通信 需要登录
 *
 * 需要登录权限的接口
 * emit_red_bag  发红包
 * to_cash       eth提现
 * btc_to_cash   btc提现
 * manage_money@buy    购买理财
 * manage_money@sell   出售理财
 */
exports.requestAsyncNeedLogin = function (msg) {
    return __awaiter(undefined, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        var isLogin, secretHash;
        return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
                switch (_context.prev = _context.next) {
                    case 0:
                        isLogin = memstore_1.getStore('user/isLogin');

                        if (isLogin) {
                            _context.next = 5;
                            break;
                        }

                        secretHash = memstore_1.getStore('user/secretHash');
                        _context.next = 5;
                        return exports.defaultLogin(secretHash, memstore_1.getStore('user/conRandom'));

                    case 5:
                        return _context.abrupt("return", exports.requestAsync(msg));

                    case 6:
                    case "end":
                        return _context.stop();
                }
            }
        }, _callee, this);
    }));
};
/**
 * 申请自动登录token
 */
exports.applyAutoLogin = function () {
    return __awaiter(undefined, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
        var id, deviceId, msg;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
            while (1) {
                switch (_context2.prev = _context2.next) {
                    case 0:
                        _context2.next = 2;
                        return tools_1.fetchDeviceId();

                    case 2:
                        id = _context2.sent;
                        deviceId = id.toString();
                        msg = {
                            type: 'wallet/user@set_auto_login',
                            param: {
                                device_id: deviceId
                            }
                        };

                        exports.requestAsync(msg).then(function (res) {
                            var decryptToken = tools_1.encrypt(res.token, deviceId);
                            memstore_1.setStore('user/token', decryptToken);
                        });

                    case 6:
                    case "end":
                        return _context2.stop();
                }
            }
        }, _callee2, this);
    }));
};
/**
 * 自动登录
 */
exports.autoLogin = function (conRandom) {
    return __awaiter(undefined, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
        var deviceId, token, msg;
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
            while (1) {
                switch (_context3.prev = _context3.next) {
                    case 0:
                        _context3.next = 2;
                        return tools_1.fetchDeviceId();

                    case 2:
                        deviceId = _context3.sent;

                        console.log('deviceId -------', deviceId);
                        token = tools_1.decrypt(memstore_1.getStore('user/token'), deviceId.toString());
                        msg = {
                            type: 'wallet/user@auto_login',
                            param: {
                                device_id: deviceId,
                                token: token,
                                random: conRandom
                            }
                        };

                        exports.requestAsync(msg).then(function (res) {
                            memstore_1.setStore('user/isLogin', true);
                            console.log('自动登录成功-----------', res);
                        }).catch(function (res) {
                            memstore_1.setStore('user/token', '');
                        });

                    case 7:
                    case "end":
                        return _context3.stop();
                }
            }
        }, _callee3, this);
    }));
};
/**
 * 创建钱包后默认登录
 * @param mnemonic 助记词
 */
exports.defaultLogin = function (hash, conRandom) {
    return __awaiter(undefined, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
        var getMnemonicByHash, mnemonic, GlobalWallet, wlt, sign, signStr, msgLogin;
        return regeneratorRuntime.wrap(function _callee4$(_context4) {
            while (1) {
                switch (_context4.prev = _context4.next) {
                    case 0:
                        getMnemonicByHash = pi_modules.commonjs.exports.relativeGet('app/utils/walletTools').exports.getMnemonicByHash;
                        mnemonic = getMnemonicByHash(hash);
                        GlobalWallet = pi_modules.commonjs.exports.relativeGet('app/core/globalWallet').exports.GlobalWallet;
                        wlt = GlobalWallet.createWltByMnemonic(mnemonic, 'ETH', 0);

                        console.log('================', wlt.exportPrivateKey());
                        sign = pi_modules.commonjs.exports.relativeGet('app/core/genmnemonic').exports.sign;
                        signStr = sign(conRandom, wlt.exportPrivateKey());
                        msgLogin = { type: 'login', param: { sign: signStr } };
                        return _context4.abrupt("return", exports.requestAsync(msgLogin).then(function () {
                            exports.applyAutoLogin();
                            memstore_1.setStore('user/isLogin', true);
                        }));

                    case 9:
                    case "end":
                        return _context4.stop();
                }
            }
        }, _callee4, this);
    }));
};
// const defaultConUser = '0x00000000000000000000000000000000000000000';
// stateChangeRegister((res) => {
//     const conState = res.con;
//     const login = res.login;
//     console.log('stateChangeRegister--------------',res);
// });
// 设置重登录回调
con_mgr_1.setReloginCallback(function (res) {
    var rtype = res.type;
    if (rtype === 'logerror') {
        //  重登录失败，登录流程重走一遍
        exports.openConnect();
    } else {
        memstore_1.setStore('user/isLogin', true);
    }
});
/**
 * 开启连接
 */
exports.openConnect = function () {
    return __awaiter(undefined, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
        return regeneratorRuntime.wrap(function _callee5$(_context5) {
            while (1) {
                switch (_context5.prev = _context5.next) {
                    case 0:
                        // const conState = getConState();
                        // if (conState === ConState.opened) {
                        //     getRandom();
                        // } else {
                        con_mgr_1.setUrl(config_1.wsUrl);
                        con_mgr_1.open(conSuccess, conError, conClose, conReOpen);
                        // }

                    case 2:
                    case "end":
                        return _context5.stop();
                }
            }
        }, _callee5, this);
    }));
};
/**
 * 连接成功回调
 */
var conSuccess = function conSuccess() {
    console.log('con success');
    memstore_1.setStore('user/offline', false);
    exports.getRandom();
};
/**
 * 连接出错回调
 */
var conError = function conError(err) {
    console.log('con error');
    memstore_1.setStore('user/offline', true);
    tools_1.checkCreateAccount();
};
/**
 * 连接关闭回调
 */
var conClose = function conClose() {
    console.log('con close');
    memstore_1.setStore('user/isLogin', false);
    memstore_1.setStore('user/offline', true);
};
/**
 * 重新连接回调
 */
var conReOpen = function conReOpen() {
    console.log('con reopen');
    memstore_1.setStore('user/offline', false);
    // console.log();
};
/**
 * 获取随机数
 * flag:0 普通用户注册，1注册即为真实用户
 */
exports.getRandom = function (cmd) {
    return __awaiter(undefined, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
        var wallet, client, param, msg, resp, conRandom, secretHash;
        return regeneratorRuntime.wrap(function _callee6$(_context6) {
            while (1) {
                switch (_context6.prev = _context6.next) {
                    case 0:
                        console.log('getRandom--------------');
                        wallet = memstore_1.getStore('wallet');

                        if (wallet) {
                            _context6.next = 4;
                            break;
                        }

                        return _context6.abrupt("return");

                    case 4:
                        client = 'android 20';
                        param = {
                            account: memstore_1.getStore('user/id').slice(2),
                            pk: "04" + memstore_1.getStore('user/publicKey'),
                            client: JSON.stringify(client),
                            flag: 1
                        };

                        if (cmd) {
                            param.cmd = cmd;
                        }
                        msg = {
                            type: 'get_random',
                            param: param
                        };
                        _context6.prev = 8;
                        _context6.next = 11;
                        return exports.requestAsync(msg);

                    case 11:
                        resp = _context6.sent;

                        // const serverTimestamp = resp.timestamp.value;
                        conRandom = resp.rand;

                        if (memstore_1.getStore('user/token')) {
                            exports.autoLogin(conRandom);
                        }
                        secretHash = memstore_1.getStore('user/secretHash');

                        if (secretHash) {
                            exports.defaultLogin(secretHash, conRandom);
                        }
                        con_mgr_1.setBottomLayerReloginMsg(resp.user, resp.userType, resp.password);
                        memstore_1.setStore('user/conUid', resp.uid);
                        memstore_1.setStore('user/conRandom', conRandom);
                        tools_1.checkCreateAccount();
                        _context6.next = 25;
                        break;

                    case 22:
                        _context6.prev = 22;
                        _context6.t0 = _context6["catch"](8);

                        if (_context6.t0.type === 1014) {
                            root_1.popNew('app-components1-modalBoxCheckBox-modalBoxCheckBox', {
                                title: '检测到在其它设备有登录',
                                content: '清除其它设备账户信息'
                            }, function (deleteAccount) {
                                if (deleteAccount) {
                                    exports.getRandom(constants_1.CMD.FORCELOGOUTDEL);
                                } else {
                                    exports.getRandom(constants_1.CMD.FORCELOGOUT);
                                }
                            }, function () {
                                exports.getRandom(constants_1.CMD.FORCELOGOUT);
                            });
                        }

                    case 25:
                    case "end":
                        return _context6.stop();
                }
            }
        }, _callee6, this, [[8, 22]]);
    }));
};
/**
 * 获取所有的货币余额
 */
exports.getServerCloudBalance = function () {
    var list = [];
    list.push(interface_1.CloudCurrencyType.KT);
    for (var k in interface_1.CloudCurrencyType) {
        if (config_1.MainChainCoin.hasOwnProperty(k)) {
            list.push(interface_1.CloudCurrencyType[k]);
        }
    }
    var msg = { type: 'wallet/account@get', param: { list: "[" + list + "]" } };
    return exports.requestAsync(msg).then(function (balanceInfo) {
        console.log('balanceInfo', balanceInfo);
        var cloudBalances = parse_1.parseCloudBalance(balanceInfo);
        var cloudWallets = memstore_1.getStore('cloud/cloudWallets');
        for (var _iterator4 = cloudBalances, _isArray4 = Array.isArray(_iterator4), _i4 = 0, _iterator4 = _isArray4 ? _iterator4 : _iterator4[Symbol.iterator]();;) {
            var _ref6;

            if (_isArray4) {
                if (_i4 >= _iterator4.length) break;
                _ref6 = _iterator4[_i4++];
            } else {
                _i4 = _iterator4.next();
                if (_i4.done) break;
                _ref6 = _i4.value;
            }

            var _ref7 = _ref6,
                _ref8 = _slicedToArray(_ref7, 2),
                key = _ref8[0],
                value = _ref8[1];

            var cloudWallet = cloudWallets.get(key);
            cloudWallet.balance = value;
        }
        memstore_1.setStore('cloud/cloudWallets', cloudWallets);
    }).catch(function (res) {
        console.log(res);
    });
};
/**
 * 获取指定类型的货币余额
 */
exports.getBalance = function (currencyType) {
    return __awaiter(undefined, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee7() {
        var msg;
        return regeneratorRuntime.wrap(function _callee7$(_context7) {
            while (1) {
                switch (_context7.prev = _context7.next) {
                    case 0:
                        msg = { type: 'wallet/account@get', param: { list: "[" + currencyType + "]" } };

                        exports.requestAsync(msg).then(function (r) {
                            // todo 这里更新余额
                        });

                    case 2:
                    case "end":
                        return _context7.stop();
                }
            }
        }, _callee7, this);
    }));
};
/**
 * 获取分红汇总信息
 */
exports.getDividend = function () {
    return __awaiter(undefined, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee8() {
        var msg, data, num, yearIncome;
        return regeneratorRuntime.wrap(function _callee8$(_context8) {
            while (1) {
                switch (_context8.prev = _context8.next) {
                    case 0:
                        msg = { type: 'wallet/cloud@get_bonus_total', param: {} };
                        _context8.next = 3;
                        return exports.getBonusHistory();

                    case 3:
                        data = _context8.sent;
                        num = data.value !== '' ? unitTools_1.wei2Eth(data.value[0][1]) : 0;
                        yearIncome = (num * 365 / 7).toFixed(4);

                        exports.requestAsync(msg).then(function (data) {
                            var dividend = {
                                totalDivid: unitTools_1.wei2Eth(data.value[0]),
                                totalDays: data.value[1],
                                thisDivid: unitTools_1.wei2Eth(data.value[2]),
                                yearIncome: yearIncome
                            };
                            memstore_1.setStore('dividTotal', dividend);
                        });

                    case 7:
                    case "end":
                        return _context8.stop();
                }
            }
        }, _callee8, this);
    }));
};
/**
 * 获取后台发起分红历史记录
 */
exports.getBonusHistory = function () {
    return __awaiter(undefined, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee9() {
        var msg;
        return regeneratorRuntime.wrap(function _callee9$(_context9) {
            while (1) {
                switch (_context9.prev = _context9.next) {
                    case 0:
                        msg = { type: 'wallet/cloud@get_bonus_history', param: {} };
                        return _context9.abrupt("return", exports.requestAsync(msg));

                    case 2:
                    case "end":
                        return _context9.stop();
                }
            }
        }, _callee9, this);
    }));
};
/**
 * 获取挖矿汇总信息
 */
exports.getMining = function () {
    return __awaiter(undefined, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee10() {
        var msg;
        return regeneratorRuntime.wrap(function _callee10$(_context10) {
            while (1) {
                switch (_context10.prev = _context10.next) {
                    case 0:
                        msg = { type: 'wallet/cloud@get_mine_total', param: {} };

                        exports.requestAsync(msg).then(function (data) {
                            var totalNum = unitTools_1.kpt2kt(data.mine_total);
                            var holdNum = unitTools_1.kpt2kt(data.mines);
                            var today = unitTools_1.kpt2kt(data.today);
                            var nowNum = Math.floor((totalNum - holdNum + today) * 0.25) - today; // 今日可挖数量为矿山剩余量的0.25减去今日已挖
                            if (nowNum <= 0) {
                                nowNum = 0; // 如果今日可挖小于等于0，表示现在不能挖
                            } else if (totalNum - holdNum >= 100) {
                                nowNum = nowNum < 100 && totalNum - holdNum >= 100 ? 100 : nowNum; // 如果今日可挖小于100，且矿山剩余量大于100，则今日可挖100
                            } else {
                                nowNum = totalNum - holdNum; // 如果矿山剩余量小于100，则本次挖完所有剩余量
                            }
                            var mining = {
                                totalNum: totalNum,
                                thisNum: nowNum,
                                holdNum: holdNum
                            };
                            console.log('-------------------', mining);
                            memstore_1.setStore('activity/mining/total', mining);
                        });

                    case 2:
                    case "end":
                        return _context10.stop();
                }
            }
        }, _callee10, this);
    }));
};
/**
 * 获取挖矿历史记录
 */
exports.getMiningHistory = function () {
    var start = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
    return __awaiter(undefined, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee11() {
        var msg;
        return regeneratorRuntime.wrap(function _callee11$(_context11) {
            while (1) {
                switch (_context11.prev = _context11.next) {
                    case 0:
                        msg = {
                            type: 'wallet/cloud@get_pool_detail',
                            param: {
                                start: start,
                                count: constants_1.PAGELIMIT
                            }
                        };

                        exports.requestAsync(msg).then(function (data) {
                            var miningHistory = parse_1.parseMiningHistory(data);
                            memstore_1.setStore('activity/mining/history', miningHistory);
                        });

                    case 2:
                    case "end":
                        return _context11.stop();
                }
            }
        }, _callee11, this);
    }));
};
// ==========================================红包start
/**
 * 获取邀请红包码
 */
exports.getInviteCode = function () {
    return __awaiter(undefined, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee12() {
        var msg;
        return regeneratorRuntime.wrap(function _callee12$(_context12) {
            while (1) {
                switch (_context12.prev = _context12.next) {
                    case 0:
                        msg = { type: 'wallet/cloud@get_invite_code', param: {} };
                        return _context12.abrupt("return", exports.requestAsync(msg));

                    case 2:
                    case "end":
                        return _context12.stop();
                }
            }
        }, _callee12, this);
    }));
};
/**
 * 兑换邀请红包
 */
exports.inputInviteCdKey = function (code) {
    return __awaiter(undefined, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee13() {
        var msg;
        return regeneratorRuntime.wrap(function _callee13$(_context13) {
            while (1) {
                switch (_context13.prev = _context13.next) {
                    case 0:
                        msg = { type: 'wallet/cloud@input_cd_key', param: { code: code } };
                        _context13.prev = 1;
                        _context13.next = 4;
                        return exports.requestAsync(msg);

                    case 4:
                        return _context13.abrupt("return", []);

                    case 7:
                        _context13.prev = 7;
                        _context13.t0 = _context13["catch"](1);

                        console.log('input_cd_key--------', _context13.t0);
                        toolMessages_1.showError(_context13.t0 && (_context13.t0.result || _context13.t0.type));
                        return _context13.abrupt("return");

                    case 12:
                    case "end":
                        return _context13.stop();
                }
            }
        }, _callee13, this, [[1, 7]]);
    }));
};
/**
 * 获取邀请红包领取明细
 */
exports.getInviteCodeDetail = function () {
    return __awaiter(undefined, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee14() {
        var msg, data;
        return regeneratorRuntime.wrap(function _callee14$(_context14) {
            while (1) {
                switch (_context14.prev = _context14.next) {
                    case 0:
                        msg = { type: 'wallet/cloud@get_invite_code_detail', param: {} };
                        _context14.next = 3;
                        return exports.requestAsync(msg);

                    case 3:
                        data = _context14.sent;
                        return _context14.abrupt("return", parse_1.parseMyInviteRedEnv(data.value));

                    case 5:
                    case "end":
                        return _context14.stop();
                }
            }
        }, _callee14, this);
    }));
};
/**
 * 发送红包
 * @param rtype 红包类型
 * @param ctype 货币类型
 * @param totalAmount 总金额
 * @param count 红包数量
 * @param lm 留言
 */
exports.sendRedEnvlope = function (rtype, ctype, totalAmount, redEnvelopeNumber, lm) {
    return __awaiter(undefined, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee15() {
        var msg, res;
        return regeneratorRuntime.wrap(function _callee15$(_context15) {
            while (1) {
                switch (_context15.prev = _context15.next) {
                    case 0:
                        msg = {
                            type: 'emit_red_bag',
                            param: {
                                type: Number(rtype),
                                priceType: ctype,
                                totalPrice: unitTools_1.largeUnit2SmallUnit(interface_1.CloudCurrencyType[ctype], totalAmount),
                                count: redEnvelopeNumber,
                                desc: lm
                            }
                        };
                        _context15.prev = 1;
                        _context15.next = 4;
                        return exports.requestAsyncNeedLogin(msg);

                    case 4:
                        res = _context15.sent;
                        return _context15.abrupt("return", res.value);

                    case 8:
                        _context15.prev = 8;
                        _context15.t0 = _context15["catch"](1);

                        toolMessages_1.showError(_context15.t0 && (_context15.t0.result || _context15.t0.type));
                        return _context15.abrupt("return");

                    case 12:
                    case "end":
                        return _context15.stop();
                }
            }
        }, _callee15, this, [[1, 8]]);
    }));
};
/**
 * 兑换红包
 */
exports.convertRedBag = function (cid) {
    return __awaiter(undefined, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee16() {
        var msg, res;
        return regeneratorRuntime.wrap(function _callee16$(_context16) {
            while (1) {
                switch (_context16.prev = _context16.next) {
                    case 0:
                        msg = { type: 'convert_red_bag', param: { cid: cid } };
                        _context16.prev = 1;
                        _context16.next = 4;
                        return exports.requestAsync(msg);

                    case 4:
                        res = _context16.sent;
                        return _context16.abrupt("return", res);

                    case 8:
                        _context16.prev = 8;
                        _context16.t0 = _context16["catch"](1);

                        toolMessages_1.showError(_context16.t0 && (_context16.t0.result || _context16.t0.type));
                        return _context16.abrupt("return");

                    case 12:
                    case "end":
                        return _context16.stop();
                }
            }
        }, _callee16, this, [[1, 8]]);
    }));
};
/**
 * 获取红包留言
 * @param cid 兑换码
 */
exports.queryRedBagDesc = function (cid) {
    return __awaiter(undefined, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee17() {
        var msg;
        return regeneratorRuntime.wrap(function _callee17$(_context17) {
            while (1) {
                switch (_context17.prev = _context17.next) {
                    case 0:
                        msg = {
                            type: 'query_red_bag_desc',
                            param: {
                                cid: cid
                            }
                        };
                        return _context17.abrupt("return", exports.requestAsync(msg));

                    case 2:
                    case "end":
                        return _context17.stop();
                }
            }
        }, _callee17, this);
    }));
};
/**
 * 查询发送红包记录
 */
exports.querySendRedEnvelopeRecord = function (start) {
    var msg = void 0;
    if (start) {
        msg = {
            type: 'query_emit_log',
            param: {
                start: start,
                count: constants_1.PAGELIMIT
            }
        };
    } else {
        msg = {
            type: 'query_emit_log',
            param: {
                count: constants_1.PAGELIMIT
            }
        };
    }
    try {
        exports.requestAsync(msg).then(function (detail) {
            return __awaiter(undefined, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee18() {
                var data;
                return regeneratorRuntime.wrap(function _callee18$(_context18) {
                    while (1) {
                        switch (_context18.prev = _context18.next) {
                            case 0:
                                data = parse_1.parseSendRedEnvLog(detail.value, start);

                                memstore_1.setStore('activity/luckyMoney/sends', data);

                            case 2:
                            case "end":
                                return _context18.stop();
                        }
                    }
                }, _callee18, this);
            }));
        });
    } catch (err) {
        toolMessages_1.showError(err && (err.result || err.type));
        return;
    }
};
/**
 * 查询红包兑换记录
 */
exports.queryConvertLog = function (start) {
    return __awaiter(undefined, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee19() {
        var msg;
        return regeneratorRuntime.wrap(function _callee19$(_context19) {
            while (1) {
                switch (_context19.prev = _context19.next) {
                    case 0:
                        msg = void 0;

                        if (start) {
                            msg = {
                                type: 'query_convert_log',
                                param: {
                                    start: start,
                                    count: constants_1.PAGELIMIT
                                }
                            };
                        } else {
                            msg = {
                                type: 'query_convert_log',
                                param: {
                                    count: constants_1.PAGELIMIT
                                }
                            };
                        }
                        _context19.prev = 2;

                        exports.requestAsync(msg).then(function (detail) {
                            var data = parse_1.parseConvertLog(detail, start);
                            memstore_1.setStore('activity/luckyMoney/exchange', data);
                        });
                        _context19.next = 10;
                        break;

                    case 6:
                        _context19.prev = 6;
                        _context19.t0 = _context19["catch"](2);

                        toolMessages_1.showError(_context19.t0 && (_context19.t0.result || _context19.t0.type));
                        return _context19.abrupt("return");

                    case 10:
                    case "end":
                        return _context19.stop();
                }
            }
        }, _callee19, this, [[2, 6]]);
    }));
};
/**
 * 查询某个红包兑换详情
 */
exports.queryDetailLog = function (uid, rid) {
    return __awaiter(undefined, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee20() {
        var msg, detail;
        return regeneratorRuntime.wrap(function _callee20$(_context20) {
            while (1) {
                switch (_context20.prev = _context20.next) {
                    case 0:
                        msg = {
                            type: 'query_detail_log',
                            param: {
                                uid: uid,
                                rid: rid
                            }
                        };

                        if (!(rid === '-1')) {
                            _context20.next = 3;
                            break;
                        }

                        return _context20.abrupt("return");

                    case 3:
                        _context20.prev = 3;
                        _context20.next = 6;
                        return exports.requestAsync(msg);

                    case 6:
                        detail = _context20.sent;
                        return _context20.abrupt("return", parse_1.parseExchangeDetail(detail.value));

                    case 10:
                        _context20.prev = 10;
                        _context20.t0 = _context20["catch"](3);

                        toolMessages_1.showError(_context20.t0 && (_context20.t0.result || _context20.t0.type));
                        return _context20.abrupt("return");

                    case 14:
                    case "end":
                        return _context20.stop();
                }
            }
        }, _callee20, this, [[3, 10]]);
    }));
};
// ==========================================红包end
/**
 * 挖矿
 */
exports.getAward = function () {
    return __awaiter(undefined, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee21() {
        var msg, detail;
        return regeneratorRuntime.wrap(function _callee21$(_context21) {
            while (1) {
                switch (_context21.prev = _context21.next) {
                    case 0:
                        msg = { type: 'wallet/cloud@get_award', param: {} };
                        _context21.prev = 1;
                        _context21.next = 4;
                        return exports.requestAsync(msg);

                    case 4:
                        detail = _context21.sent;
                        return _context21.abrupt("return", detail);

                    case 8:
                        _context21.prev = 8;
                        _context21.t0 = _context21["catch"](1);

                        toolMessages_1.showError(_context21.t0 && (_context21.t0.result || _context21.t0.type));
                        return _context21.abrupt("return");

                    case 12:
                    case "end":
                        return _context21.stop();
                }
            }
        }, _callee21, this, [[1, 8]]);
    }));
};
/**
 * 矿山增加记录
 */
exports.getMineDetail = function () {
    var start = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
    return __awaiter(undefined, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee22() {
        var msg;
        return regeneratorRuntime.wrap(function _callee22$(_context22) {
            while (1) {
                switch (_context22.prev = _context22.next) {
                    case 0:
                        msg = {
                            type: 'wallet/cloud@grant_detail',
                            param: {
                                start: start,
                                count: constants_1.PAGELIMIT
                            }
                        };

                        exports.requestAsync(msg).then(function (detail) {
                            var list = parse_1.parseMineDetail(detail);
                            memstore_1.setStore('activity/mining/addMine', list);
                        });

                    case 2:
                    case "end":
                        return _context22.stop();
                }
            }
        }, _callee22, this);
    }));
};
/**
 * 获取分红历史记录
 */
exports.getDividHistory = function () {
    var start = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
    return __awaiter(undefined, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee23() {
        var msg;
        return regeneratorRuntime.wrap(function _callee23$(_context23) {
            while (1) {
                switch (_context23.prev = _context23.next) {
                    case 0:
                        msg = {
                            type: 'wallet/cloud@get_bonus_info',
                            param: {
                                start: start,
                                count: constants_1.PAGELIMIT
                            }
                        };

                        exports.requestAsync(msg).then(function (data) {
                            var dividHistory = parse_1.parseDividHistory(data);
                            memstore_1.setStore('activity/dividend/history', dividHistory);
                        });

                    case 2:
                    case "end":
                        return _context23.stop();
                }
            }
        }, _callee23, this);
    }));
};
/**
 * 设置客户端数据
 */
exports.setData = function (param) {
    return __awaiter(undefined, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee24() {
        var msg;
        return regeneratorRuntime.wrap(function _callee24$(_context24) {
            while (1) {
                switch (_context24.prev = _context24.next) {
                    case 0:
                        msg = { type: 'wallet/data@set', param: param };
                        return _context24.abrupt("return", exports.requestAsync(msg));

                    case 2:
                    case "end":
                        return _context24.stop();
                }
            }
        }, _callee24, this);
    }));
};
/**
 * 获取客户端数据
 */
exports.getData = function (key) {
    return __awaiter(undefined, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee25() {
        var msg;
        return regeneratorRuntime.wrap(function _callee25$(_context25) {
            while (1) {
                switch (_context25.prev = _context25.next) {
                    case 0:
                        msg = { type: 'wallet/data@get', param: { key: key } };
                        return _context25.abrupt("return", exports.requestAsync(msg));

                    case 2:
                    case "end":
                        return _context25.stop();
                }
            }
        }, _callee25, this);
    }));
};
/**
 * 设置用户基础信息
 */
exports.setUserInfo = function () {
    return __awaiter(undefined, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee26() {
        var userInfo, msg;
        return regeneratorRuntime.wrap(function _callee26$(_context26) {
            while (1) {
                switch (_context26.prev = _context26.next) {
                    case 0:
                        userInfo = memstore_1.getStore('user/info');
                        msg = { type: 'wallet/user@set_info', param: { value: JSON.stringify(userInfo) } };
                        return _context26.abrupt("return", exports.requestAsync(msg));

                    case 3:
                    case "end":
                        return _context26.stop();
                }
            }
        }, _callee26, this);
    }));
};
/**
 * 获取当前用户信息
 */
exports.getUserInfoFromServer = function (uids) {
    return __awaiter(undefined, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee27() {
        var msg, res, userInfoStr, localUserInfo, serverUserInfo, isSame, key, userInfo;
        return regeneratorRuntime.wrap(function _callee27$(_context27) {
            while (1) {
                switch (_context27.prev = _context27.next) {
                    case 0:
                        msg = { type: 'wallet/user@get_infos', param: { list: "[" + uids.toString() + "]" } };
                        _context27.prev = 1;
                        _context27.next = 4;
                        return exports.requestAsync(msg);

                    case 4:
                        res = _context27.sent;
                        userInfoStr = tools_1.unicodeArray2Str(res.value[0]);

                        if (userInfoStr) {
                            localUserInfo = memstore_1.getStore('user/info');
                            serverUserInfo = JSON.parse(userInfoStr);

                            console.log(serverUserInfo);
                            isSame = true;

                            for (key in localUserInfo) {
                                if (localUserInfo[key] !== serverUserInfo[key]) {
                                    isSame = false;
                                }
                            }
                            if (!isSame) {
                                userInfo = Object.assign({}, serverUserInfo, { nickName: localUserInfo.nickName, avatar: localUserInfo.avatar, isRealUser: localUserInfo.isRealUser });

                                memstore_1.setStore('user/info', userInfo);
                            }
                        } else {
                            exports.setUserInfo();
                        }
                        _context27.next = 14;
                        break;

                    case 9:
                        _context27.prev = 9;
                        _context27.t0 = _context27["catch"](1);

                        console.log(_context27.t0);
                        toolMessages_1.showError(_context27.t0 && (_context27.t0.result || _context27.t0.type));
                        return _context27.abrupt("return");

                    case 14:
                    case "end":
                        return _context27.stop();
                }
            }
        }, _callee27, this, [[1, 9]]);
    }));
};
/**
 * 批量获取用户信息
 */
exports.getUserList = function (uids) {
    return __awaiter(undefined, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee28() {
        var msg, res;
        return regeneratorRuntime.wrap(function _callee28$(_context28) {
            while (1) {
                switch (_context28.prev = _context28.next) {
                    case 0:
                        msg = { type: 'wallet/user@get_infos', param: { list: "[" + uids.toString() + "]" } };
                        _context28.prev = 1;
                        _context28.next = 4;
                        return exports.requestAsync(msg);

                    case 4:
                        res = _context28.sent;

                        if (!res.value[0]) {
                            _context28.next = 7;
                            break;
                        }

                        return _context28.abrupt("return", JSON.parse(tools_1.unicodeArray2Str(res.value[0])));

                    case 7:
                        _context28.next = 13;
                        break;

                    case 9:
                        _context28.prev = 9;
                        _context28.t0 = _context28["catch"](1);

                        toolMessages_1.showError(_context28.t0 && (_context28.t0.result || _context28.t0.type));
                        return _context28.abrupt("return");

                    case 13:
                    case "end":
                        return _context28.stop();
                }
            }
        }, _callee28, this, [[1, 9]]);
    }));
};
/**
 * 处理聊天
 */
exports.doChat = function () {
    return __awaiter(undefined, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee29() {
        var msg;
        return regeneratorRuntime.wrap(function _callee29$(_context29) {
            while (1) {
                switch (_context29.prev = _context29.next) {
                    case 0:
                        msg = { type: 'wallet/cloud@chat', param: {} };

                        exports.requestAsync(msg).then(function (r) {
                            // 通信成功
                        });

                    case 2:
                    case "end":
                        return _context29.stop();
                }
            }
        }, _callee29, this);
    }));
};
/**
 * 获取指定货币流水
 * filter（0表示不过滤，1表示过滤）
 */
exports.getAccountDetail = function (coin, filter) {
    var start = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';
    return __awaiter(undefined, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee30() {
        var msg, res, nextStart, detail, canLoadMore, cloudWallets, cloudWallet, _cloudWallet$otherLog;

        return regeneratorRuntime.wrap(function _callee30$(_context30) {
            while (1) {
                switch (_context30.prev = _context30.next) {
                    case 0:
                        msg = void 0;

                        if (start) {
                            msg = {
                                type: 'wallet/account@get_detail',
                                param: {
                                    coin: interface_1.CloudCurrencyType[coin],
                                    start: start,
                                    filter: filter,
                                    count: constants_1.PAGELIMIT
                                }
                            };
                        } else {
                            msg = {
                                type: 'wallet/account@get_detail',
                                param: {
                                    coin: interface_1.CloudCurrencyType[coin],
                                    filter: filter,
                                    count: constants_1.PAGELIMIT
                                }
                            };
                        }
                        _context30.prev = 2;
                        _context30.next = 5;
                        return exports.requestAsync(msg);

                    case 5:
                        res = _context30.sent;
                        nextStart = res.start;
                        detail = parse_1.parseCloudAccountDetail(coin, res.value);
                        canLoadMore = detail.length >= constants_1.PAGELIMIT;

                        if (detail.length > 0) {
                            cloudWallets = memstore_1.getStore('cloud/cloudWallets');
                            cloudWallet = cloudWallets.get(interface_1.CloudCurrencyType[coin]);

                            if (filter === 1) {
                                if (start) {
                                    (_cloudWallet$otherLog = cloudWallet.otherLogs.list).push.apply(_cloudWallet$otherLog, _toConsumableArray(detail));
                                } else {
                                    cloudWallet.otherLogs.list = detail;
                                }
                                cloudWallet.otherLogs.start = nextStart;
                                cloudWallet.otherLogs.canLoadMore = canLoadMore;
                                memstore_1.setStore('cloud/cloudWallets', cloudWallets);
                            }
                        }
                        _context30.next = 16;
                        break;

                    case 12:
                        _context30.prev = 12;
                        _context30.t0 = _context30["catch"](2);

                        toolMessages_1.showError(_context30.t0 && (_context30.t0.result || _context30.t0.type));
                        return _context30.abrupt("return");

                    case 16:
                    case "end":
                        return _context30.stop();
                }
            }
        }, _callee30, this, [[2, 12]]);
    }));
};
/**
 * 获取矿山排名列表
 */
exports.getMineRank = function (num) {
    return __awaiter(undefined, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee31() {
        var msg;
        return regeneratorRuntime.wrap(function _callee31$(_context31) {
            while (1) {
                switch (_context31.prev = _context31.next) {
                    case 0:
                        msg = { type: 'wallet/cloud@mine_top', param: { num: num } };

                        exports.requestAsync(msg).then(function (data) {
                            var mineData = parse_1.parseMineRank(data);
                            memstore_1.setStore('activity/mining/mineRank', mineData);
                        });

                    case 2:
                    case "end":
                        return _context31.stop();
                }
            }
        }, _callee31, this);
    }));
};
/**
 * 获取挖矿排名列表
 */
exports.getMiningRank = function (num) {
    return __awaiter(undefined, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee32() {
        var msg;
        return regeneratorRuntime.wrap(function _callee32$(_context32) {
            while (1) {
                switch (_context32.prev = _context32.next) {
                    case 0:
                        msg = { type: 'wallet/cloud@get_mine_top', param: { num: num } };

                        exports.requestAsync(msg).then(function (data) {
                            var miningData = parse_1.parseMiningRank(data);
                            memstore_1.setStore('activity/mining/miningRank', miningData);
                        });

                    case 2:
                    case "end":
                        return _context32.stop();
                }
            }
        }, _callee32, this);
    }));
};
/**
 * 验证手机号是否被注册
 */
exports.verifyPhone = function (phone) {
    return __awaiter(undefined, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee33() {
        var msg;
        return regeneratorRuntime.wrap(function _callee33$(_context33) {
            while (1) {
                switch (_context33.prev = _context33.next) {
                    case 0:
                        msg = { type: 'wallet/user@check_phone', param: { phone: phone } };
                        _context33.prev = 1;
                        _context33.next = 4;
                        return exports.requestAsync(msg);

                    case 4:
                        return _context33.abrupt("return", _context33.sent);

                    case 7:
                        _context33.prev = 7;
                        _context33.t0 = _context33["catch"](1);

                        toolMessages_1.showError(_context33.t0 && (_context33.t0.result || _context33.t0.type));
                        return _context33.abrupt("return");

                    case 11:
                    case "end":
                        return _context33.stop();
                }
            }
        }, _callee33, this, [[1, 7]]);
    }));
};
/**
 * 发送验证码
 */
exports.sendCode = function (phone, num) {
    return __awaiter(undefined, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee34() {
        var v, msg;
        return regeneratorRuntime.wrap(function _callee34$(_context34) {
            while (1) {
                switch (_context34.prev = _context34.next) {
                    case 0:
                        _context34.next = 2;
                        return exports.verifyPhone(phone);

                    case 2:
                        v = _context34.sent;

                        if (v) {
                            _context34.next = 5;
                            break;
                        }

                        return _context34.abrupt("return");

                    case 5:
                        msg = { type: 'wallet/sms@send_sms_code', param: { phone: phone, num: num, name: '钱包' } };
                        _context34.prev = 6;
                        _context34.next = 9;
                        return exports.requestAsync(msg);

                    case 9:
                        return _context34.abrupt("return", _context34.sent);

                    case 12:
                        _context34.prev = 12;
                        _context34.t0 = _context34["catch"](6);

                        toolMessages_1.showError(_context34.t0 && (_context34.t0.result || _context34.t0.type));
                        return _context34.abrupt("return");

                    case 16:
                    case "end":
                        return _context34.stop();
                }
            }
        }, _callee34, this, [[6, 12]]);
    }));
};
/**
 * 注册手机
 */
exports.regPhone = function (phone, code) {
    return __awaiter(undefined, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee35() {
        var bphone, old_phone, msg;
        return regeneratorRuntime.wrap(function _callee35$(_context35) {
            while (1) {
                switch (_context35.prev = _context35.next) {
                    case 0:
                        bphone = exports.getUserInfo().phoneNumber;
                        // tslint:disable-next-line:variable-name

                        old_phone = bphone ? bphone : '';
                        msg = { type: 'wallet/user@reg_phone', param: { phone: phone, old_phone: old_phone, code: code } };
                        _context35.prev = 3;
                        _context35.next = 6;
                        return exports.requestAsync(msg);

                    case 6:
                        return _context35.abrupt("return", _context35.sent);

                    case 9:
                        _context35.prev = 9;
                        _context35.t0 = _context35["catch"](3);

                        toolMessages_1.showError(_context35.t0 && (_context35.t0.result || _context35.t0.type));
                        return _context35.abrupt("return");

                    case 13:
                    case "end":
                        return _context35.stop();
                }
            }
        }, _callee35, this, [[3, 9]]);
    }));
};
/**
 * 获取代理
 */
exports.getProxy = function () {
    return __awaiter(undefined, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee36() {
        var msg;
        return regeneratorRuntime.wrap(function _callee36$(_context36) {
            while (1) {
                switch (_context36.prev = _context36.next) {
                    case 0:
                        msg = { type: 'wallet/proxy@get_proxy', param: {} };
                        return _context36.abrupt("return", exports.requestAsync(msg));

                    case 2:
                    case "end":
                        return _context36.stop();
                }
            }
        }, _callee36, this);
    }));
};
/**
 * 矿山增加项目跳转详情
 */
exports.getMineItemJump = function (itemJump) {
    return __awaiter(undefined, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee37() {
        return regeneratorRuntime.wrap(function _callee37$(_context37) {
            while (1) {
                switch (_context37.prev = _context37.next) {
                    case 0:
                        memstore_1.setStore('activity/mining/itemJump', itemJump);

                    case 1:
                    case "end":
                        return _context37.stop();
                }
            }
        }, _callee37, this);
    }));
};
// ===============================充值提现
/**
 * 获取服务端eth钱包地址
 */
exports.getBankAddr = function () {
    return __awaiter(undefined, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee38() {
        var msg, res;
        return regeneratorRuntime.wrap(function _callee38$(_context38) {
            while (1) {
                switch (_context38.prev = _context38.next) {
                    case 0:
                        msg = {
                            type: 'wallet/bank@get_bank_addr',
                            param: {}
                        };
                        _context38.prev = 1;
                        _context38.next = 4;
                        return exports.requestAsync(msg);

                    case 4:
                        res = _context38.sent;
                        return _context38.abrupt("return", res.value);

                    case 8:
                        _context38.prev = 8;
                        _context38.t0 = _context38["catch"](1);

                        toolMessages_1.showError(_context38.t0 && (_context38.t0.result || _context38.t0.type));
                        return _context38.abrupt("return");

                    case 12:
                    case "end":
                        return _context38.stop();
                }
            }
        }, _callee38, this, [[1, 8]]);
    }));
};
/**
 * 获取服务端btc钱包地址
 */
exports.getBtcBankAddr = function () {
    return __awaiter(undefined, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee39() {
        var msg, res;
        return regeneratorRuntime.wrap(function _callee39$(_context39) {
            while (1) {
                switch (_context39.prev = _context39.next) {
                    case 0:
                        msg = {
                            type: 'wallet/bank@get_btc_bank_addr',
                            param: {}
                        };
                        _context39.prev = 1;
                        _context39.next = 4;
                        return exports.requestAsync(msg);

                    case 4:
                        res = _context39.sent;
                        return _context39.abrupt("return", res.value);

                    case 8:
                        _context39.prev = 8;
                        _context39.t0 = _context39["catch"](1);

                        toolMessages_1.showError(_context39.t0 && (_context39.t0.result || _context39.t0.type));
                        return _context39.abrupt("return");

                    case 12:
                    case "end":
                        return _context39.stop();
                }
            }
        }, _callee39, this, [[1, 8]]);
    }));
};
/**
 * 向服务器发起充值请求
 */
// tslint:disable-next-line:max-line-length
exports.rechargeToServer = function (fromAddr, toAddr, tx, nonce, gas, value) {
    var coin = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : 101;
    return __awaiter(undefined, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee40() {
        var msg, res;
        return regeneratorRuntime.wrap(function _callee40$(_context40) {
            while (1) {
                switch (_context40.prev = _context40.next) {
                    case 0:
                        msg = {
                            type: 'wallet/bank@pay',
                            param: {
                                from: fromAddr,
                                to: toAddr,
                                tx: tx,
                                nonce: nonce,
                                gas: gas,
                                value: value,
                                coin: coin
                            }
                        };
                        _context40.prev = 1;
                        _context40.next = 4;
                        return exports.requestAsync(msg);

                    case 4:
                        res = _context40.sent;

                        console.log('rechargeToServer', res);
                        return _context40.abrupt("return", true);

                    case 9:
                        _context40.prev = 9;
                        _context40.t0 = _context40["catch"](1);

                        toolMessages_1.showError(_context40.t0 && (_context40.t0.result || _context40.t0.type));
                        return _context40.abrupt("return", false);

                    case 13:
                    case "end":
                        return _context40.stop();
                }
            }
        }, _callee40, this, [[1, 9]]);
    }));
};
/**
 * 向服务器发起充值请求
 */
// tslint:disable-next-line:max-line-length
exports.btcRechargeToServer = function (toAddr, tx, value, fees, oldHash) {
    return __awaiter(undefined, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee41() {
        var old_tx, msg, res;
        return regeneratorRuntime.wrap(function _callee41$(_context41) {
            while (1) {
                switch (_context41.prev = _context41.next) {
                    case 0:
                        // tslint:disable-next-line:variable-name
                        old_tx = oldHash || 'none';
                        msg = {
                            type: 'wallet/bank@btc_pay',
                            param: {
                                to: toAddr,
                                tx: tx,
                                value: value,
                                fees: fees,
                                old_tx: old_tx
                            }
                        };
                        _context41.prev = 2;
                        _context41.next = 5;
                        return exports.requestAsync(msg);

                    case 5:
                        res = _context41.sent;

                        console.log('btcRechargeToServer', res);
                        return _context41.abrupt("return", true);

                    case 10:
                        _context41.prev = 10;
                        _context41.t0 = _context41["catch"](2);

                        toolMessages_1.showError(_context41.t0 && (_context41.t0.result || _context41.t0.type));
                        return _context41.abrupt("return", false);

                    case 14:
                    case "end":
                        return _context41.stop();
                }
            }
        }, _callee41, this, [[2, 10]]);
    }));
};
/**
 * 提现
 */
exports.withdrawFromServer = function (toAddr, value) {
    return __awaiter(undefined, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee42() {
        var msg, res;
        return regeneratorRuntime.wrap(function _callee42$(_context42) {
            while (1) {
                switch (_context42.prev = _context42.next) {
                    case 0:
                        msg = {
                            type: 'wallet/bank@to_cash',
                            param: {
                                to: toAddr,
                                value: value
                            }
                        };
                        _context42.prev = 1;
                        _context42.next = 4;
                        return exports.requestAsyncNeedLogin(msg);

                    case 4:
                        res = _context42.sent;

                        console.log('withdrawFromServer', res);
                        return _context42.abrupt("return", res.txid);

                    case 9:
                        _context42.prev = 9;
                        _context42.t0 = _context42["catch"](1);

                        toolMessages_1.showError(_context42.t0 && (_context42.t0.result || _context42.t0.type));
                        return _context42.abrupt("return");

                    case 13:
                    case "end":
                        return _context42.stop();
                }
            }
        }, _callee42, this, [[1, 9]]);
    }));
};
/**
 * btc提现
 */
exports.btcWithdrawFromServer = function (toAddr, value) {
    return __awaiter(undefined, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee43() {
        var msg, res;
        return regeneratorRuntime.wrap(function _callee43$(_context43) {
            while (1) {
                switch (_context43.prev = _context43.next) {
                    case 0:
                        msg = {
                            type: 'wallet/bank@btc_to_cash',
                            param: {
                                to: toAddr,
                                value: value
                            }
                        };
                        _context43.prev = 1;
                        _context43.next = 4;
                        return exports.requestAsyncNeedLogin(msg);

                    case 4:
                        res = _context43.sent;
                        return _context43.abrupt("return", res.txid);

                    case 8:
                        _context43.prev = 8;
                        _context43.t0 = _context43["catch"](1);

                        toolMessages_1.showError(_context43.t0 && (_context43.t0.result || _context43.t0.type));
                        return _context43.abrupt("return");

                    case 12:
                    case "end":
                        return _context43.stop();
                }
            }
        }, _callee43, this, [[1, 8]]);
    }));
};
/**
 * 充值历史记录
 */
exports.getRechargeLogs = function (coin, start) {
    return __awaiter(undefined, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee44() {
        var type, msg, res, nextStart, detail, canLoadMore, cloudWallets, cloudWallet, _cloudWallet$recharge;

        return regeneratorRuntime.wrap(function _callee44$(_context44) {
            while (1) {
                switch (_context44.prev = _context44.next) {
                    case 0:
                        // tslint:disable-next-line:no-reserved-keywords
                        type = void 0;

                        if (!(coin === 'BTC')) {
                            _context44.next = 5;
                            break;
                        }

                        type = 'wallet/bank@btc_pay_log';
                        _context44.next = 10;
                        break;

                    case 5:
                        if (!(coin === 'ETH')) {
                            _context44.next = 9;
                            break;
                        }

                        type = 'wallet/bank@pay_log';
                        _context44.next = 10;
                        break;

                    case 9:
                        return _context44.abrupt("return");

                    case 10:
                        msg = void 0;

                        if (start) {
                            msg = {
                                type: type,
                                param: {
                                    start: start,
                                    count: constants_1.PAGELIMIT
                                }
                            };
                        } else {
                            msg = {
                                type: type,
                                param: {
                                    count: constants_1.PAGELIMIT
                                }
                            };
                        }
                        _context44.prev = 12;
                        _context44.next = 15;
                        return exports.requestAsync(msg);

                    case 15:
                        res = _context44.sent;
                        nextStart = res.start.toJSNumber ? res.start.toJSNumber() : res.start;
                        detail = parse_1.parseRechargeWithdrawalLog(coin, res.value);
                        canLoadMore = detail.length >= constants_1.PAGELIMIT;

                        if (detail.length > 0) {
                            cloudWallets = memstore_1.getStore('cloud/cloudWallets');
                            cloudWallet = cloudWallets.get(interface_1.CloudCurrencyType[coin]);

                            if (start) {
                                (_cloudWallet$recharge = cloudWallet.rechargeLogs.list).push.apply(_cloudWallet$recharge, _toConsumableArray(detail));
                            } else {
                                cloudWallet.rechargeLogs.list = detail;
                            }
                            cloudWallet.rechargeLogs.start = nextStart;
                            cloudWallet.rechargeLogs.canLoadMore = canLoadMore;
                            memstore_1.setStore('cloud/cloudWallets', cloudWallets);
                        }
                        _context44.next = 26;
                        break;

                    case 22:
                        _context44.prev = 22;
                        _context44.t0 = _context44["catch"](12);

                        toolMessages_1.showError(_context44.t0 && (_context44.t0.result || _context44.t0.type));
                        return _context44.abrupt("return");

                    case 26:
                    case "end":
                        return _context44.stop();
                }
            }
        }, _callee44, this, [[12, 22]]);
    }));
};
/**
 * 提现历史记录
 */
exports.getWithdrawLogs = function (coin, start) {
    return __awaiter(undefined, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee45() {
        var type, msg, res, nextStart, detail, canLoadMore, cloudWallets, cloudWallet, _cloudWallet$withdraw;

        return regeneratorRuntime.wrap(function _callee45$(_context45) {
            while (1) {
                switch (_context45.prev = _context45.next) {
                    case 0:
                        // tslint:disable-next-line:no-reserved-keywords
                        type = void 0;

                        if (!(coin === 'BTC')) {
                            _context45.next = 5;
                            break;
                        }

                        type = 'wallet/bank@btc_to_cash_log';
                        _context45.next = 10;
                        break;

                    case 5:
                        if (!(coin === 'ETH')) {
                            _context45.next = 9;
                            break;
                        }

                        type = 'wallet/bank@to_cash_log';
                        _context45.next = 10;
                        break;

                    case 9:
                        return _context45.abrupt("return");

                    case 10:
                        msg = void 0;

                        if (start) {
                            msg = {
                                type: type,
                                param: {
                                    start: start,
                                    count: constants_1.PAGELIMIT
                                }
                            };
                        } else {
                            msg = {
                                type: type,
                                param: {
                                    count: constants_1.PAGELIMIT
                                }
                            };
                        }
                        _context45.prev = 12;
                        _context45.next = 15;
                        return exports.requestAsync(msg);

                    case 15:
                        res = _context45.sent;
                        nextStart = res.start.toJSNumber ? res.start.toJSNumber() : res.start;
                        detail = parse_1.parseRechargeWithdrawalLog(coin, res.value);
                        canLoadMore = detail.length >= constants_1.PAGELIMIT;

                        if (detail.length > 0) {
                            cloudWallets = memstore_1.getStore('cloud/cloudWallets');
                            cloudWallet = cloudWallets.get(interface_1.CloudCurrencyType[coin]);

                            if (start) {
                                (_cloudWallet$withdraw = cloudWallet.withdrawLogs.list).push.apply(_cloudWallet$withdraw, _toConsumableArray(detail));
                            } else {
                                cloudWallet.withdrawLogs.list = detail;
                            }
                            cloudWallet.withdrawLogs.start = nextStart;
                            cloudWallet.withdrawLogs.canLoadMore = canLoadMore;
                            memstore_1.setStore('cloud/cloudWallets', cloudWallets);
                        }
                        _context45.next = 26;
                        break;

                    case 22:
                        _context45.prev = 22;
                        _context45.t0 = _context45["catch"](12);

                        toolMessages_1.showError(_context45.t0 && (_context45.t0.result || _context45.t0.type));
                        return _context45.abrupt("return");

                    case 26:
                    case "end":
                        return _context45.stop();
                }
            }
        }, _callee45, this, [[12, 22]]);
    }));
};
/**
 * 获取理财列表
 */
exports.getProductList = function () {
    return __awaiter(undefined, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee46() {
        var msg, res, result;
        return regeneratorRuntime.wrap(function _callee46$(_context46) {
            while (1) {
                switch (_context46.prev = _context46.next) {
                    case 0:
                        msg = {
                            type: 'wallet/manage_money@get_product_list',
                            param: {}
                        };
                        _context46.prev = 1;
                        _context46.next = 4;
                        return exports.requestAsync(msg);

                    case 4:
                        res = _context46.sent;
                        result = parse_1.parseProductList(res);

                        memstore_1.setStore('activity/financialManagement/products', result);
                        return _context46.abrupt("return", result);

                    case 10:
                        _context46.prev = 10;
                        _context46.t0 = _context46["catch"](1);

                        toolMessages_1.showError(_context46.t0 && (_context46.t0.result || _context46.t0.type));
                        return _context46.abrupt("return", []);

                    case 14:
                    case "end":
                        return _context46.stop();
                }
            }
        }, _callee46, this, [[1, 10]]);
    }));
};
/**
 * 购买理财
 */
exports.buyProduct = function (pid, count) {
    return __awaiter(undefined, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee47() {
        var msg, res;
        return regeneratorRuntime.wrap(function _callee47$(_context47) {
            while (1) {
                switch (_context47.prev = _context47.next) {
                    case 0:
                        pid = Number(pid);
                        count = Number(count);
                        msg = {
                            type: 'wallet/manage_money@buy',
                            param: {
                                pid: pid,
                                count: count
                            }
                        };
                        _context47.prev = 3;
                        _context47.next = 6;
                        return exports.requestAsyncNeedLogin(msg);

                    case 6:
                        res = _context47.sent;

                        console.log('buyProduct', res);

                        if (!(res.result === 1)) {
                            _context47.next = 13;
                            break;
                        }

                        exports.getProductList();
                        return _context47.abrupt("return", true);

                    case 13:
                        return _context47.abrupt("return", false);

                    case 14:
                        _context47.next = 20;
                        break;

                    case 16:
                        _context47.prev = 16;
                        _context47.t0 = _context47["catch"](3);

                        toolMessages_1.showError(_context47.t0 && (_context47.t0.result || _context47.t0.type));
                        return _context47.abrupt("return", false);

                    case 20:
                    case "end":
                        return _context47.stop();
                }
            }
        }, _callee47, this, [[3, 16]]);
    }));
};
/**
 * 理财购买记录
 */
exports.getPurchaseRecord = function () {
    var start = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
    return __awaiter(undefined, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee48() {
        var msg, res, record;
        return regeneratorRuntime.wrap(function _callee48$(_context48) {
            while (1) {
                switch (_context48.prev = _context48.next) {
                    case 0:
                        msg = {
                            type: 'wallet/manage_money@get_pay_list',
                            param: {
                                start: start,
                                count: constants_1.PAGELIMIT
                            }
                        };
                        _context48.prev = 1;
                        _context48.next = 4;
                        return exports.requestAsync(msg);

                    case 4:
                        res = _context48.sent;

                        console.log('getPurchaseRecord', res);
                        record = parse_1.parsePurchaseRecord(res);

                        memstore_1.setStore('activity/financialManagement/purchaseHistories', record);
                        _context48.next = 13;
                        break;

                    case 10:
                        _context48.prev = 10;
                        _context48.t0 = _context48["catch"](1);

                        toolMessages_1.showError(_context48.t0 && (_context48.t0.result || _context48.t0.type));

                    case 13:
                    case "end":
                        return _context48.stop();
                }
            }
        }, _callee48, this, [[1, 10]]);
    }));
};
/**
 * 赎回理财产品
 */
exports.buyBack = function (timeStamp) {
    return __awaiter(undefined, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee49() {
        var msg, res;
        return regeneratorRuntime.wrap(function _callee49$(_context49) {
            while (1) {
                switch (_context49.prev = _context49.next) {
                    case 0:
                        msg = {
                            type: 'wallet/manage_money@sell',
                            param: {
                                time: timeStamp
                            }
                        };
                        _context49.prev = 1;
                        _context49.next = 4;
                        return exports.requestAsyncNeedLogin(msg);

                    case 4:
                        res = _context49.sent;

                        console.log('buyBack', res);
                        return _context49.abrupt("return", true);

                    case 9:
                        _context49.prev = 9;
                        _context49.t0 = _context49["catch"](1);

                        toolMessages_1.showError(_context49.t0 && (_context49.t0.result || _context49.t0.type));
                        return _context49.abrupt("return", false);

                    case 13:
                    case "end":
                        return _context49.stop();
                }
            }
        }, _callee49, this, [[1, 9]]);
    }));
};
/**
 * 获取gasPrice
 */
exports.fetchGasPrices = function () {
    return __awaiter(undefined, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee50() {
        var msg, _gasPrice, res, gasPrice;

        return regeneratorRuntime.wrap(function _callee50$(_context50) {
            while (1) {
                switch (_context50.prev = _context50.next) {
                    case 0:
                        msg = {
                            type: 'wallet/bank@get_gas',
                            param: {}
                        };
                        _context50.prev = 1;
                        _context50.next = 4;
                        return exports.requestAsync(msg);

                    case 4:
                        res = _context50.sent;
                        gasPrice = (_gasPrice = {}, _defineProperty(_gasPrice, interface_1.MinerFeeLevel.Standard, Number(res.standard)), _defineProperty(_gasPrice, interface_1.MinerFeeLevel.Fast, Number(res.fast)), _defineProperty(_gasPrice, interface_1.MinerFeeLevel.Fastest, Number(res.fastest)), _gasPrice);

                        memstore_1.setStore('third/gasPrice', gasPrice);
                        _context50.next = 12;
                        break;

                    case 9:
                        _context50.prev = 9;
                        _context50.t0 = _context50["catch"](1);

                        toolMessages_1.showError(_context50.t0 && (_context50.t0.result || _context50.t0.type));

                    case 12:
                    case "end":
                        return _context50.stop();
                }
            }
        }, _callee50, this, [[1, 9]]);
    }));
};
/**
 * 获取gasPrice
 */
exports.fetchBtcFees = function () {
    return __awaiter(undefined, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee51() {
        var msg, _btcMinerFee, res, obj, btcMinerFee;

        return regeneratorRuntime.wrap(function _callee51$(_context51) {
            while (1) {
                switch (_context51.prev = _context51.next) {
                    case 0:
                        msg = {
                            type: 'wallet/bank@get_fees',
                            param: {}
                        };
                        _context51.prev = 1;
                        _context51.next = 4;
                        return exports.requestAsync(msg);

                    case 4:
                        res = _context51.sent;
                        obj = JSON.parse(res.btc);
                        btcMinerFee = (_btcMinerFee = {}, _defineProperty(_btcMinerFee, interface_1.MinerFeeLevel.Standard, Number(obj.low_fee_per_kb)), _defineProperty(_btcMinerFee, interface_1.MinerFeeLevel.Fast, Number(obj.medium_fee_per_kb)), _defineProperty(_btcMinerFee, interface_1.MinerFeeLevel.Fastest, Number(obj.high_fee_per_kb)), _btcMinerFee);

                        memstore_1.setStore('third/btcMinerFee', btcMinerFee);
                        _context51.next = 13;
                        break;

                    case 10:
                        _context51.prev = 10;
                        _context51.t0 = _context51["catch"](1);

                        toolMessages_1.showError(_context51.t0 && (_context51.t0.result || _context51.t0.type));

                    case 13:
                    case "end":
                        return _context51.stop();
                }
            }
        }, _callee51, this, [[1, 10]]);
    }));
};
// 获取真实用户
exports.getRealUser = function () {
    return __awaiter(undefined, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee52() {
        var msg, res, conUser, userInfo, isRealUser;
        return regeneratorRuntime.wrap(function _callee52$(_context52) {
            while (1) {
                switch (_context52.prev = _context52.next) {
                    case 0:
                        msg = {
                            type: 'wallet/user@get_real_user',
                            param: {}
                        };
                        _context52.prev = 1;
                        _context52.next = 4;
                        return exports.requestAsync(msg);

                    case 4:
                        res = _context52.sent;
                        conUser = memstore_1.getStore('user/id');

                        if (conUser) {
                            _context52.next = 8;
                            break;
                        }

                        return _context52.abrupt("return");

                    case 8:
                        userInfo = memstore_1.getStore('user/info');
                        isRealUser = res.value !== 'false';

                        if (isRealUser !== userInfo.isRealUser) {
                            userInfo.isRealUser = isRealUser;
                            memstore_1.setStore('user/info', userInfo);
                        }
                        _context52.next = 17;
                        break;

                    case 13:
                        _context52.prev = 13;
                        _context52.t0 = _context52["catch"](1);

                        console.log('wallet/user@get_real_user--------', _context52.t0);
                        toolMessages_1.showError(_context52.t0 && (_context52.t0.result || _context52.t0.type));

                    case 17:
                    case "end":
                        return _context52.stop();
                }
            }
        }, _callee52, this, [[1, 13]]);
    }));
};
// 上传文件
exports.uploadFile = function (base64) {
    return __awaiter(undefined, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee53() {
        var file, formData;
        return regeneratorRuntime.wrap(function _callee53$(_context53) {
            while (1) {
                switch (_context53.prev = _context53.next) {
                    case 0:
                        file = tools_1.base64ToFile(base64);
                        formData = new FormData();

                        formData.append('upload', file);
                        fetch(config_1.uploadFileUrl + "?$forceServer=1", {
                            body: formData,
                            // cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
                            // credentials: 'same-origin', // include, same-origin, *omit
                            // headers: {
                            //     'user-agent': 'Mozilla/4.0 MDN Example'
                            // },
                            method: 'POST',
                            mode: 'cors' // no-cors, cors, *same-origin
                            // redirect: 'follow', // manual, *follow, error
                            // referrer: 'no-referrer' // *client, no-referrer
                        }).then(function (response) {
                            return response.json();
                        }).then(function (res) {
                            console.log('uploadFile success ', res);
                            tools_1.popNewMessage('图片上传成功');
                            if (res.result === 1) {
                                var sid = res.sid;
                                var userInfo = memstore_1.getStore('user/info');
                                userInfo.avatar = sid;
                                memstore_1.setStore('user/info', userInfo);
                            }
                        }).catch(function (err) {
                            console.log('uploadFile fail ', err);
                            tools_1.popNewMessage('图片上传失败');
                        });

                    case 4:
                    case "end":
                        return _context53.stop();
                }
            }
        }, _callee53, this);
    }));
};
})