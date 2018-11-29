_$define("pi/net/ui/con_mgr", function (require, exports, module){
"use strict";
/**
 * 单连接管理器，提供登录，断点续连，慢请求提示等功能
 */

Object.defineProperty(exports, "__esModule", { value: true });
// ============================== 导入
var mod_1 = require("../../lang/mod");
var time_1 = require("../../lang/time");
var connect_1 = require("../../net/websocket/connect");
var event_1 = require("../../util/event");
// ============================== 导出
/**
 * @description 枚举连接状态
 */
var ConState;
(function (ConState) {
    ConState[ConState["init"] = 0] = "init";
    ConState[ConState["opening"] = 1] = "opening";
    ConState[ConState["opened"] = 2] = "opened";
    ConState[ConState["closed"] = 3] = "closed";
})(ConState = exports.ConState || (exports.ConState = {}));
/**
 * @description 枚举登录状态
 */
var LoginState;
(function (LoginState) {
    LoginState[LoginState["init"] = 0] = "init";
    LoginState[LoginState["logining"] = 1] = "logining";
    LoginState[LoginState["logined"] = 2] = "logined";
    LoginState[LoginState["relogining"] = 3] = "relogining";
    LoginState[LoginState["logouting"] = 4] = "logouting";
    LoginState[LoginState["logouted"] = 5] = "logouted";
    LoginState[LoginState["logerror"] = 6] = "logerror";
})(LoginState = exports.LoginState || (exports.LoginState = {}));
/**
 * 获取通讯地址
 */
exports.getUrl = function () {
    return conUrl;
};
/**
 * 设置通讯地址
 */
exports.setUrl = function (url) {
    conUrl = url;
};
/**
 * 打开连接
 */
var lastRequest = null;
exports.open = function (callback, errorCallback, closeCallback, reOpenCallback, timeout) {
    timeout = timeout || defaultTimeout;
    var lastError = void 0;
    // 接收后台推送服务器时间，并设置成服务器时间
    connect_1.Connect.setNotify(function (msg) {
        if (msg.type === 'closed') {
            exports.setConState(ConState.closed);
            if (closeCallback) closeCallback();
            console.log('--------连接断开-------');
            // alert(`服务器主动断掉了链接，最后的信息为：${JSON.stringify(lastRequest)}`)
        } else if (msg.msg) {
            if (msg.msg.type === 'echo_time') {
                localTime = con.activeTime;
                serverTime = msg.msg.param.stime;
                pingpong = localTime - msg.msg.param.ctime;
            } else {
                handlerMap.notify(msg.msg.type, [msg.msg.param]);
            }
        }
    });
    ping(reOpenCallback);
    timeout += time_1.now();
    var cfg = { encode: false, isText: mod_1.commonjs.flags.os.name === 'Android' && mod_1.commonjs.flags.os.version < '4.4.0' };
    var func = function func(result) {
        if (result.error) {
            if (time_1.now() > timeout) {
                exports.setConState(ConState.closed);
                return errorCallback && errorCallback([lastError ? lastError : result]);
                // return callTime(errorCallback, [lastError ? lastError : result], "open");
            }
            lastError = result;
            setTimeout(function () {
                connect_1.Connect.open(conUrl, cfg, func, 10000);
            }, 3000);
        } else {
            con = result;
            exports.setConState(ConState.opened);
            con.send({ type: 'app@time', param: { ctime: time_1.now() } });
            // callTime(callback, [result], "open");
            callback([result]);
        }
    };
    exports.setConState(ConState.opening);
    connect_1.Connect.open(conUrl, cfg, func, 10000);
};
/**
 * 通讯请求
 */
exports.request = function (msg, cb, timeout) {
    // if (conState === ConState.opened && loginState === LoginState.logined) {
    if (conState === ConState.opened) {
        var ref = setTimeout(function () {
            ref = 0;
            slowReq++;
            show();
        }, waitTimeout);
        lastRequest = msg;
        con.request(msg, function (r) {
            console.log(msg.type, JSON.stringify(msg.param), '----------------------', r);
            if (r.error) {
                if (conState === ConState.closed) {
                    reopen();
                }
            }
            if (ref) {
                clearTimeout(ref);
            } else {
                slowReq--;
                show();
            }
            // callTime(cb, [r], "request");
            cb(r);
        }, timeout || defaultTimeout);
    } else {
        waitArray.push({ msg: msg, cb: cb });
    }
};
/**
 * 发送请求
 */
exports.send = function (msg) {
    con.send(msg);
};
/**
 * 登录
 */
exports.login = function (userx, uType, password, cb, reOpenCallback, timeout) {
    if (con === null) {
        if (conState !== ConState.init) {
            throw new Error("login, invalid state: " + conState);
        }
        return exports.open(function () {
            exports.login(userx, uType, password, cb, reOpenCallback, timeout);
        }, function (result) {
            // callTime(cb, [result], "login");
            cb([result]);
        }, null, reOpenCallback, timeout);
    }
    con.request({ type: 'login', param: { userType: uType, password: password, user: userx } }, function (result) {
        if (result.error) {
            setLoginState(LoginState.logerror);
            result.result = result.error;
            // callTime(cb, [result], "logerror");
            cb([result]);
        } else {
            setLoginState(LoginState.logined);
            requestWaits();
            user = userx;
            userType = uType;
            tempPassword = result.password;
            result.result = 1;
            // callTime(cb, [result], "login");
            cb([result]);
        }
    }, timeout || defaultTimeout);
    setLoginState(LoginState.logining);
};
/**
 * 管理端登录
 */
exports.adminLogin = function (username, password, cb, reOpenCallback, timeout) {
    if (con === null) {
        if (conState !== ConState.init) {
            throw new Error("login, invalid state: " + conState);
        }
        return exports.open(function () {
            exports.adminLogin(username, password, cb, reOpenCallback, timeout);
        }, function (result) {
            // callTime(cb, [result], "login");
            cb([result]);
        }, null, reOpenCallback, timeout);
    }
    con.request({ type: 'admin_login', param: { username: username, password: password } }, function (result) {
        if (result.error) {
            setLoginState(LoginState.logerror);
            result.result = result.error;
            // callTime(cb, [result], "logerror");
            cb([result]);
        } else {
            setLoginState(LoginState.logined);
            requestWaits();
            username = username;
            tempPassword = result.password;
            result.result = 1;
            // callTime(cb, [result], "login");
            cb([result]);
        }
    }, timeout || defaultTimeout);
    setLoginState(LoginState.logining);
};
/**
 * 代理商登录
 */
exports.agentLogin = function (agentId, cb, reOpenCallback, timeout) {
    if (con === null) {
        if (conState !== ConState.init) {
            throw new Error("login, invalid state: " + conState);
        }
        return exports.open(function () {
            exports.agentLogin(agentId, cb, reOpenCallback, timeout);
        }, function (result) {
            // callTime(cb, [result], "login");
            cb([result]);
        }, null, reOpenCallback, timeout);
    }
    con.request({ type: 'agent_login', param: { agent_id: agentId } }, function (result) {
        if (result.error) {
            setLoginState(LoginState.logerror);
            result.result = result.error;
            // callTime(cb, [result], "logerror");
            cb([result]);
        } else {
            setLoginState(LoginState.logined);
            requestWaits();
            tempPassword = result.password;
            result.result = 1;
            // callTime(cb, [result], "login");
            cb([result]);
        }
    }, timeout || defaultTimeout);
    setLoginState(LoginState.logining);
};
/**
 * 登出
 */
exports.logout = function () {
    setLoginState(LoginState.logouting);
    exports.request({ type: 'logout' }, function (result) {
        setLoginState(LoginState.logouted);
    }, defaultTimeout);
};
/**
 * 重登录成功或失败的回调
 */
exports.setReloginCallback = function (cb) {
    reloginCallback = cb;
};
/**
 * 消息处理器
 */
exports.setMsgHandler = function (iType, cb) {
    handlerMap.add(iType, function (r) {
        // callTime(cb, [r], "recv");
        cb(r);
        return event_1.HandlerResult.OK;
    });
};
/**
 * 获取服务器时间
 */
exports.getSeverTime = function () {
    return time_1.now() - localTime + serverTime;
};
/**
 * 获取ping的来回时间
 */
exports.getPingPongTime = function () {
    return pingpong;
};
/**
 * 获取连接状态
 */
exports.getConState = function () {
    return conState;
};
/**
 * 获取登录状态
 */
exports.getLoginState = function () {
    return loginState;
};
exports.stateChangeRegister = function (cb) {
    stateChangeArr.push(cb);
    return stateChangeArr.length - 1;
};
exports.stateChangeUnregister = function (index) {
    stateChangeArr[index] = null;
};
/**
 * 关闭连接
 */
exports.closeCon = function () {
    if (con) {
        con.close();
        exports.setConState(ConState.closed);
        con = null;
    }
};
// ============================== 本地
// 默认的超时时间
var defaultTimeout = 10 * 1000;
/**
 * 重登录回调
 */
var reloginCallback = null;
/**
 * 消息处理列表
 */
var handlerMap = new event_1.HandlerMap();
/**
 * con表示连接
 */
var con = null;
/**
 * 连接状态
 */
var conState = ConState.init;
/**
 * 登录状态
 */
var loginState = LoginState.init;
/**
 * 登录用户信息
 */
var user = '0';
/**
 * 登录用户类型，为多平台相同用户名做准备
 */
var userType = 0;
/**
 * 登录成功后，生成临时密码，在重登录需要配合使用
 */
var tempPassword = '';
// 连接中断时，需要等待连接并登录成功后的请求
var waitArray = [];
/**
 * 慢请求总数量
 */
var slowReq = 0;
// 通讯地址
var conUrl = '';
// 通讯等待时间
var waitTimeout = 20 * 1000;
// 超时关闭链接
var closeTimeout = 20 * 10 * 1000;
// 心跳时间
var pingTime = 10 * 1000;
// 心跳定时器
var pingTimer = 0;
// 用户长时间未发起通信，关闭链接
var noneReqTimeout = 10 * 60 * 1000;
var noneReqTimeoutID = null;
// 服务器时间
var serverTime = 0;
// 本地时间
var localTime = 0;
// 通讯时间，ping的来回时间
var pingpong = 0;
// 状态改变的CB
var stateChangeArr = [];
// 设置连接状态
exports.setConState = function (s) {
    if (conState === s) {
        return;
    }
    conState = s;
    show();
};
// 设置登录状态
var setLoginState = function setLoginState(s) {
    if (loginState === s) {
        return;
    }
    loginState = s;
    show();
};
// 设置底层重登录信息
exports.setBottomLayerReloginMsg = function (user_, userType_, tempPassword_) {
    user = user_;
    userType = userType_;
    tempPassword = tempPassword_;
};
/**
 * 重新打开连接
 */
var reopen = function reopen(reOpenCallback) {
    console.log('reopen start-=------');
    exports.open(function () {
        console.log('reopen callback loginState', loginState);
        relogin();
        // if (loginState === LoginState.logined || loginState === LoginState.relogining) {
        //     relogin();
        // }
        if (reOpenCallback) reOpenCallback();
    }, null, reOpenCallback);
};
/**
 * 重登录
 */
var relogin = function relogin() {
    // console.log('user',user);
    // console.log('userType',userType);
    // console.log('password',tempPassword);
    if (!user) return;
    exports.request({ type: 'relogin', param: { user: user, userType: userType, password: tempPassword } }, function (result) {
        if (result.error) {
            setLoginState(LoginState.logerror);
            reloginCallback && reloginCallback({ type: 'logerror', result: result });
        } else {
            console.log('relogin success----', result);
            setLoginState(LoginState.logined);
            requestWaits();
            reloginCallback && reloginCallback({ type: 'relogin', result: result });
        }
    }, defaultTimeout);
    setLoginState(LoginState.relogining);
};
/**
 * 将所有等待申请列表全部请求
 */
var requestWaits = function requestWaits() {
    // waitArray.map(elem => request(elem.msg, elem.cb, defaultTimeout));
};
/**
 * 定时器：每隔10s调用一次，发送本地时间
 */
var ping = function ping(reOpenCallback) {
    var func = function func() {
        // console.log('ping',new Date().getTime());
        if (conState === ConState.closed) {
            reopen(reOpenCallback);
        } else if (conState === ConState.opened) {
            if (time_1.now() > con.activeTime + closeTimeout) {
                con.close();
                exports.setConState(ConState.closed);
                reopen(reOpenCallback);
            } else {
                con.send({ type: 'app@time', param: { ctime: time_1.now() } });
            }
        }
        pingTimer = setTimeout(func, pingTime);
    };
    if (!pingTimer) {
        pingTimer = setTimeout(func, pingTime);
    }
};
/**
 * 两分钟内用户未向后端发起请求则关闭链接
 */
var closeWsIfNoneReq = function closeWsIfNoneReq() {
    if (noneReqTimeoutID) {
        clearTimeout(noneReqTimeoutID);
    }
    noneReqTimeoutID = setTimeout(function () {
        con.close();
    }, noneReqTimeout);
};
/**
 * 绘制
 */
var show = function show() {
    stateChangeArr.forEach(function (cb) {
        cb && cb({ ping: pingpong, slowReq: slowReq, con: conState, login: loginState });
    });
};
})