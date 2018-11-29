_$define("app/view/wallet/localWallet/addAsset", function (require, exports, module){
"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * add asset
 */
var lang_1 = require("../../../../pi/util/lang");
var widget_1 = require("../../../../pi/widget/widget");
var dataCenter_1 = require("../../../logic/dataCenter");
var memstore_1 = require("../../../store/memstore");
var tools_1 = require("../../../utils/tools");

var AddAsset = function (_widget_1$Widget) {
    _inherits(AddAsset, _widget_1$Widget);

    function AddAsset() {
        _classCallCheck(this, AddAsset);

        return _possibleConstructorReturn(this, (AddAsset.__proto__ || Object.getPrototypeOf(AddAsset)).apply(this, arguments));
    }

    _createClass(AddAsset, [{
        key: "create",
        value: function create() {
            _get(AddAsset.prototype.__proto__ || Object.getPrototypeOf(AddAsset.prototype), "create", this).call(this);
            this.init();
        }
    }, {
        key: "init",
        value: function init() {
            this.language = this.config.value[lang_1.getLang()];
            var assetList = tools_1.fetchWalletAssetListAdded();
            this.state = {
                assetList: assetList,
                searchText: '',
                showAssetList: assetList
            };
            console.log(this.state);
        }
    }, {
        key: "backPrePage",
        value: function backPrePage() {
            this.ok && this.ok();
        }
        /**
         * 处理滑块改变
         */

    }, {
        key: "onSwitchChange",
        value: function onSwitchChange(e, index) {
            var added = e.newType;
            var currencys = this.state.showAssetList[index];
            currencys.added = added;
            this.paint();
            // 处理search数据
            var wallet = memstore_1.getStore('wallet');
            var showCurrencys = wallet.showCurrencys || [];
            var oldIndex = showCurrencys.indexOf(currencys.currencyName);
            if (added && oldIndex < 0) {
                showCurrencys.push(currencys.currencyName);
                var curAddr = tools_1.getCurrentAddrInfo(currencys.currencyName);
                dataCenter_1.dataCenter.updateAddrInfo(curAddr.addr, currencys.currencyName);
                dataCenter_1.dataCenter.fetchErc20GasLimit(currencys.currencyName);
            } else {
                showCurrencys.splice(oldIndex, 1);
            }
            wallet.showCurrencys = showCurrencys;
            memstore_1.setStore('wallet', wallet);
        }
    }, {
        key: "searchTextChange",
        value: function searchTextChange(e) {
            var _this2 = this;

            this.state.searchText = e.value;
            if (this.state.searchText) {
                // tslint:disable-next-line:max-line-length
                this.state.showAssetList = this.state.assetList.filter(function (v) {
                    return v.currencyName.toLowerCase().indexOf(_this2.state.searchText.toLowerCase()) >= 0;
                });
            } else {
                this.state.showAssetList = this.state.assetList;
            }
            this.paint();
        }
    }, {
        key: "searchTextClear",
        value: function searchTextClear() {
            this.state.showAssetList = this.state.assetList;
            this.paint();
        }
    }]);

    return AddAsset;
}(widget_1.Widget);

exports.AddAsset = AddAsset;
})