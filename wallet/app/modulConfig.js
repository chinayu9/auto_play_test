_$define("app/modulConfig", function (require, exports, module){
"use strict";
/**
 *  app模块配置
 */

Object.defineProperty(exports, "__esModule", { value: true });
// ---------app模块功能配置----------------------------
var appModulConfig = {
    APP_CHAT: true,
    APP_WALLET: true,
    APP_EARN: true,
    APP_PLAY: true,
    FINANCIAL_SERVICES: true,
    GITHUB: true,
    WALLET_NAME: 'KuPay',
    WALLET_WEBSITE: 'www.kupay.io',
    LOGIN_IMG: 'app/res/image/login_bg.png',
    WALLET_LOGO: 'app/res/image/img_logo.png',
    WECHAT_HELPER: 'app/res/image/wechat_robot.jpg',
    WECHAT_ACCOUNT: 'app/res/image/wechat_pn.jpg' // 微信公众号二维码
};
exports.getModulConfig = function (modulName) {
    if (appModulConfig.hasOwnProperty(modulName)) {
        return appModulConfig[modulName];
    } else {
        return false;
    }
};
})