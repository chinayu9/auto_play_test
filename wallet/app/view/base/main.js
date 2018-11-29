_$define("app/view/base/main", function (require, exports, module){
"use strict";
/**
 * @file 入口文件，用于登录，唤起hall界面
 * @author henk<speoth@163.com>
 */

Object.defineProperty(exports, "__esModule", { value: true });
var exitApp_1 = require("../../../pi/browser/exitApp");
var root_1 = require("../../../pi/ui/root");
var forelet_1 = require("../../../pi/widget/forelet");
var util_1 = require("../../../pi/widget/util");
var pull_1 = require("../../net/pull");
var push_1 = require("../../net/push");
var memstore_1 = require("../../store/memstore");
// import{getTransaction as Account, Transation, getTokenTransaction as Token, TokenTransations} from "../../../index/rpc_call.s";
// import { Client } from "../../../pi/net/mqtt_c";
// import { create } from "../../../pi/net/rpc";
// import { Struct } from "../../../pi/struct/struct_mgr";
// let client;
// let rpc;
// ============================== 导出
exports.forelet = new forelet_1.Forelet();
exports.WIDGET_NAME = module.id.replace(/\//g, '-');
exports.run = function (cb) {
    util_1.addWidget(document.body, 'pi-ui-root');
    // 设置开发环境
    // eth代币精度初始化
    // 数据检查
    checkUpdate();
    // 初始化数据
    memstore_1.initStore();
    // 主动推送初始化
    push_1.initPush();
    pull_1.openConnect();
    // dataCenter.init();
    root_1.popNew('app-view-base-app');
    console.timeEnd('home enter');
    popNewPage();
    // setTimeout(() => {
    //     const api = new EthApi();
    //     const data = '0xe209a49a0000000000000000000000000000000000000000000000000000000000000001';
    //     const toAddr = '0x0e7f42cdf739c06dd3c1c32fab5e50ec9620102a';
    //     api.estimateGas({ to:toAddr, data: data });
    // },5000);
    // 后台切前台
    backToFront();
    // 解决进入时闪一下问题
    setTimeout(function () {
        if (cb) cb();
    }, 20);
};
// const rpcFunc = (req:Struct, respClass:Function, callback:Function, timeout: number) => {
//     rpc(req, (r:Struct) =>{
//         if(!respClass || r instanceof respClass){
//             return callback(r);
//         }else{
//             console.log("RPCError:-------------------------------------------", r);
//             //console.log("RPCError:" + "返回类型" + r.constructor.name + "与" + respClass.name + "类型不匹配！")
//         }
//     }, timeout);
// }
// export const test = () => {
//     var options = {
//         timeout: 3,
//         keepAliveInterval: 60,
//         cleanSession: false,
//         useSSL: false,
//         mqttVersion:3,
//         onSuccess: () => {
//             rpc = create(client, (<any>self).__mgr);
//             let q = new Account();
//             q.name = "0x267be1c1d684f78cb4f6a176c4911b741e4ffdc0";
//             rpcFunc(q, Transation, (r: Transation) => {
//                 console.log("------------r", r);
//             },2000);
//             let q1 = new Token();
//             q1.contractAddress = "0x0d8775f648430679a709e98d2b0cb6250d2887ef";
//             q1.userAddress = "0x9c808cd59d94a07053658b00ea12d8e9cbbe8304";
//             rpcFunc(q1, TokenTransations, (r: TokenTransations) => {
//                 console.log("------------r", r);
//             },2000);
//         },
//         onFailure: () =>{
//             console.log("connect fail");
//         }
//     };
//     client = new Client("127.0.0.1", 1234, "clientId-wcd14PDgoZ", null, options);
// }
/**
 * 界面入口
 */
var popNewPage = function popNewPage() {
    if (ifNeedUnlockScreen()) {
        root_1.popNew('app-components1-lockScreenPage-lockScreenPage', {
            openApp: true
        });
    }
};
var checkUpdate = function checkUpdate() {
    // todo
};
/**
 * 后台切换到前台
 * onBackPressed
 */
var backToFront = function backToFront() {
    window.handle_app_lifecycle_listener = function (iType) {
        if (iType === 'onAppResumed' && ifNeedUnlockScreen()) {
            root_1.popNew('app-components1-lockScreenPage-lockScreenPage', {
                openApp: true
            });
        } else if (iType === 'onBackPressed') {
            if (root_1.backList.length === 1) {
                var exitApp = new exitApp_1.ExitApp();
                exitApp.init();
                exitApp.ToHome({});
            } else {
                root_1.backCall();
            }
            // (<any>window).onpopstate();
            // widget.ok && widget.ok();
        }
    };
};
// ============================== 立即执行
/**
 * 是否需要解锁屏幕
 */
var ifNeedUnlockScreen = function ifNeedUnlockScreen() {
    var unlockScreen = document.getElementById('keyboard');
    if (unlockScreen) return false;
    var ls = memstore_1.getStore('setting/lockScreen', {});
    var lockScreenPsw = ls.psw;
    var openLockScreen = ls.open !== false;
    return lockScreenPsw && openLockScreen;
};
})