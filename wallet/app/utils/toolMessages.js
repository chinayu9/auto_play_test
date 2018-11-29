_$define("app/utils/toolMessages", function (require, exports, module){
"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * 处理提示信息
 */
var root_1 = require("../../pi/ui/root");
var tools_1 = require("./tools");
/**
 * 显示错误信息
 */
// tslint:disable-next-line:cyclomatic-complexity
exports.showError = function (result, str) {
    if (result === 1) return;
    if (!str) {
        switch (result) {
            case 600:
                str = tools_1.getStaticLanguage().errorList[600];
                break;
            case 701:
                str = tools_1.getStaticLanguage().errorList[701];
                break;
            case 702:
                str = tools_1.getStaticLanguage().errorList[702];
                break;
            case 703:
                str = tools_1.getStaticLanguage().errorList[703];
                break;
            case 704:
                str = tools_1.getStaticLanguage().errorList[704];
                break;
            case 705:
                str = tools_1.getStaticLanguage().errorList[705];
                break;
            case 711:
                str = tools_1.getStaticLanguage().errorList[711];
                break;
            case 712:
                str = tools_1.getStaticLanguage().errorList[712];
                break;
            case 713:
                str = tools_1.getStaticLanguage().errorList[713];
                break;
            case 714:
                str = tools_1.getStaticLanguage().errorList[714];
                break;
            case 1001:
                str = tools_1.getStaticLanguage().errorList[1001];
                break;
            case 1002:
                str = tools_1.getStaticLanguage().errorList[1002];
                break;
            case 1003:
                str = tools_1.getStaticLanguage().errorList[1003];
                break;
            case 1004:
                str = tools_1.getStaticLanguage().errorList[1004];
                break;
            case 1005:
                str = tools_1.getStaticLanguage().errorList[1005];
                break;
            case 1006:
                str = tools_1.getStaticLanguage().errorList[1006];
                break;
            case 1007:
                str = tools_1.getStaticLanguage().errorList[1007];
                break;
            case 1008:
                str = tools_1.getStaticLanguage().errorList[1008];
                break;
            case 1009:
                str = tools_1.getStaticLanguage().errorList[1009];
                break;
            case 1010:
                str = tools_1.getStaticLanguage().errorList[1010];
                break;
            case 2001:
                str = tools_1.getStaticLanguage().errorList[2001];
                break;
            case 2010:
                str = tools_1.getStaticLanguage().errorList[2010];
                break;
            case 2020:
                str = tools_1.getStaticLanguage().errorList[2020];
                break;
            case 2021:
                str = tools_1.getStaticLanguage().errorList[2021];
                break;
            case 2022:
                str = tools_1.getStaticLanguage().errorList[2022];
                break;
            case 2023:
                str = tools_1.getStaticLanguage().errorList[2023];
                break;
            case 2024:
                str = tools_1.getStaticLanguage().errorList[2024];
                break;
            case 2025:
                str = tools_1.getStaticLanguage().errorList[2025];
                break;
            case 2030:
                str = tools_1.getStaticLanguage().errorList[2030];
                break;
            case 2031:
                str = tools_1.getStaticLanguage().errorList[2031];
                break;
            case 2032:
                str = tools_1.getStaticLanguage().errorList[2032];
                break;
            case 2033:
                str = tools_1.getStaticLanguage().errorList[2033];
                break;
            case -99:
                str = tools_1.getStaticLanguage().errorList['-99'];
                break;
            case -300:
                str = tools_1.getStaticLanguage().errorList['-300'];
                break;
            case -301:
                str = tools_1.getStaticLanguage().errorList['-301'];
                break;
            default:
                str = tools_1.getStaticLanguage().errorList.default;
        }
    }
    root_1.popNew('app-components1-message-message', { content: str });
};
/**
 * 显示错误信息
 * @param err 错误对象
 */
exports.doErrorShow = function (err) {
    console.log('error', err);
    if (!err) return;
    var showStr = '';
    switch (err.message) {
        case 'Invalid Mnemonic':
            showStr = tools_1.getStaticLanguage().transError[0];
            break;
        case 'insufficient funds for gas * price + value':
            showStr = tools_1.getStaticLanguage().transError[1];
            break;
        case 'insufficient funds':
            showStr = tools_1.getStaticLanguage().transError[1];
            break;
        case 'intrinsic gas too low':
            showStr = tools_1.getStaticLanguage().transError[2];
            break;
        case 'nonce too low':
            showStr = tools_1.getStaticLanguage().transError[4];
            break;
        case 'send transaction failed':
            showStr = tools_1.getStaticLanguage().transError[3];
            break;
        default:
            showStr = err.message || tools_1.getStaticLanguage().transError[3];
    }
    root_1.popNew('app-components1-message-message', { content: showStr });
};
})