_$define("app/store/interface", function (require, exports, module){
"use strict";
/**
 * 内存中的数据结构
 */

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * 后端定义的任务id
 */
var TaskSid;
(function (TaskSid) {
  TaskSid[TaskSid["Recharge"] = 301] = "Recharge";
  TaskSid[TaskSid["Withdraw"] = 302] = "Withdraw";
  TaskSid[TaskSid["CreateWallet"] = 1001] = "CreateWallet";
  TaskSid[TaskSid["FirstChargeEth"] = 1002] = "FirstChargeEth";
  TaskSid[TaskSid["BindPhone"] = 1003] = "BindPhone";
  TaskSid[TaskSid["ChargeEth"] = 1004] = "ChargeEth";
  TaskSid[TaskSid["InviteFriends"] = 1005] = "InviteFriends";
  TaskSid[TaskSid["BuyFinancial"] = 1007] = "BuyFinancial";
  TaskSid[TaskSid["Transfer"] = 1008] = "Transfer";
  TaskSid[TaskSid["Dividend"] = 1009] = "Dividend";
  TaskSid[TaskSid["Mining"] = 1010] = "Mining";
  TaskSid[TaskSid["Chat"] = 1011] = "Chat";
  TaskSid[TaskSid["FinancialManagement"] = 330] = "FinancialManagement";
  TaskSid[TaskSid["LuckyMoney"] = 340] = "LuckyMoney";
  TaskSid[TaskSid["LuckyMoneyRetreat"] = 341] = "LuckyMoneyRetreat"; // 回退红包
})(TaskSid = exports.TaskSid || (exports.TaskSid = {}));
/**
 * 云端账户的货币类型
 */
var CloudCurrencyType;
(function (CloudCurrencyType) {
  CloudCurrencyType[CloudCurrencyType["CNYT"] = 99] = "CNYT";
  CloudCurrencyType[CloudCurrencyType["KT"] = 100] = "KT";
  CloudCurrencyType[CloudCurrencyType["ETH"] = 101] = "ETH";
  CloudCurrencyType[CloudCurrencyType["BTC"] = 102] = "BTC"; // BTC
})(CloudCurrencyType = exports.CloudCurrencyType || (exports.CloudCurrencyType = {}));
/**
 * 红包类型
 */
var LuckyMoneyType;
(function (LuckyMoneyType) {
  LuckyMoneyType["Normal"] = "00";
  LuckyMoneyType["Random"] = "01";
  LuckyMoneyType["Invite"] = "99"; // 邀请红包
})(LuckyMoneyType = exports.LuckyMoneyType || (exports.LuckyMoneyType = {}));
/**
 * 交易状态
 */
var TxStatus;
(function (TxStatus) {
  TxStatus[TxStatus["Pending"] = 0] = "Pending";
  TxStatus[TxStatus["Confirmed"] = 1] = "Confirmed";
  TxStatus[TxStatus["Failed"] = 2] = "Failed";
  TxStatus[TxStatus["Success"] = 3] = "Success"; // 成功  一定的区块确认后认为succss
})(TxStatus = exports.TxStatus || (exports.TxStatus = {}));
/**
 * 交易类型
 */
var TxType;
(function (TxType) {
  TxType[TxType["Transfer"] = 1] = "Transfer";
  TxType[TxType["Receipt"] = 2] = "Receipt";
  TxType[TxType["Recharge"] = 3] = "Recharge";
  TxType[TxType["Exchange"] = 4] = "Exchange"; // 币币兑换
})(TxType = exports.TxType || (exports.TxType = {}));
/**
 * 矿工费3档次
 */
var MinerFeeLevel;
(function (MinerFeeLevel) {
  MinerFeeLevel[MinerFeeLevel["Standard"] = 0] = "Standard";
  MinerFeeLevel[MinerFeeLevel["Fast"] = 1] = "Fast";
  MinerFeeLevel[MinerFeeLevel["Fastest"] = 2] = "Fastest"; // 最快
})(MinerFeeLevel = exports.MinerFeeLevel || (exports.MinerFeeLevel = {}));
})