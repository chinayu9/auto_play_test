_$define("app/net/push", function (require, exports, module){
"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var con_mgr_1 = require("../../pi/net/ui/con_mgr");
var root_1 = require("../../pi/ui/root");
var constants_1 = require("../utils/constants");
var tools_1 = require("../utils/tools");
var pull_1 = require("./pull");
/**
 * 后端主动推消息给后端
 */
// ===================================================== 导入
// ===================================================== 导出
// ===================================================== 本地
// ===================================================== 立即执行
// 主动推送
exports.initPush = function () {
    // 监听指令事件
    con_mgr_1.setMsgHandler('cmd', function (res) {
        console.log('强制下线==========================', res);
        con_mgr_1.setBottomLayerReloginMsg('', '', '');
        var cmd = res.cmd;
        if (cmd === constants_1.CMD.FORCELOGOUT) {
            pull_1.logoutAccount();
        } else if (cmd === constants_1.CMD.FORCELOGOUTDEL) {
            pull_1.logoutAccountDel();
        }
        root_1.popNew('app-components1-modalBox-modalBox', {
            sureText: { zh_Hans: '重新登录', zh_Hant: '重新登錄', en: '' },
            cancelText: { zh_Hans: '退出', zh_Hant: '退出', en: '' },
            title: { zh_Hans: '下线通知', zh_Hant: '下線通知', en: '' },
            content: { zh_Hans: '您的账户已被下线，如非本人操作，则助记词可能已泄露。', zh_Hant: '您的賬戶已被下線，如非本人操作，則助記詞可能已洩露。', en: '' }
        }, function () {
            setTimeout(function () {
                for (var i = root_1.backList.length; i > 1; i--) {
                    root_1.backCall();
                }
                root_1.popNew('app-view-wallet-create-home');
            }, 100);
        }, function () {
            setTimeout(function () {
                for (var i = root_1.backList.length; i > 1; i--) {
                    root_1.backCall();
                }
            }, 100);
        });
    });
    // 监听充值成功事件
    con_mgr_1.setMsgHandler('event_pay_ok', function (res) {
        tools_1.popNewMessage(tools_1.getStaticLanguage().transfer.rechargeTips);
        var value = res.value.toJSNumber ? res.value.toJSNumber() : res.value;
        pull_1.getServerCloudBalance().then(function (res) {
            console.log('服务器推送成功 云端余额更新==========================', res);
        });
        console.log('服务器推送成功==========================', res);
    });
};
})