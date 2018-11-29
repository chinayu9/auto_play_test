_$define("app/view/wallet/financialManagement/home", function (require, exports, module){
"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * wallet home
 */
// ==============================导入
var lang_1 = require("../../../../pi/util/lang");
var forelet_1 = require("../../../../pi/widget/forelet");
var widget_1 = require("../../../../pi/widget/widget");
var pull_1 = require("../../../net/pull");
var memstore_1 = require("../../../store/memstore");
var tools_1 = require("../../../utils/tools");
exports.forelet = new forelet_1.Forelet();
exports.WIDGET_NAME = module.id.replace(/\//g, '-');

var Home = function (_widget_1$Widget) {
    _inherits(Home, _widget_1$Widget);

    function Home() {
        _classCallCheck(this, Home);

        return _possibleConstructorReturn(this, (Home.__proto__ || Object.getPrototypeOf(Home)).apply(this, arguments));
    }

    _createClass(Home, [{
        key: "backPrePage",
        value: function backPrePage() {
            this.ok && this.ok();
        }
    }, {
        key: "create",
        value: function create() {
            _get(Home.prototype.__proto__ || Object.getPrototypeOf(Home.prototype), "create", this).call(this);
            this.init();
        }
    }, {
        key: "setProps",
        value: function setProps(props, oldProps) {
            _get(Home.prototype.__proto__ || Object.getPrototypeOf(Home.prototype), "setProps", this).call(this, props, oldProps);
            this.state.activeNum = props.activeNum;
            pull_1.getProductList();
            if (memstore_1.getStore('user/id')) {
                pull_1.getPurchaseRecord();
            }
        }
    }, {
        key: "init",
        value: function init() {
            this.language = this.config.value[lang_1.getLang()];
            this.state = {
                tabs: [{
                    tab: this.language.tabs[0],
                    components: 'app-view-wallet-financialManagement-recommendFM'
                }, {
                    tab: this.language.tabs[1],
                    components: 'app-view-wallet-financialManagement-holdedFM'
                }],
                activeNum: 0,
                avatar: '',
                totalAsset: tools_1.formatBalanceValue(tools_1.fetchLocalTotalAssets() + tools_1.fetchCloudTotalAssets()),
                refreshing: false
            };
        }
    }, {
        key: "tabsChangeClick",
        value: function tabsChangeClick(event, value) {
            this.state.activeNum = value;
            this.paint();
        }
    }, {
        key: "refreshClick",
        value: function refreshClick() {
            var _this2 = this;

            this.state.refreshing = true;
            this.paint();
            if (this.state.activeNum === 0) {
                pull_1.getProductList().then(function () {
                    _this2.state.refreshing = false;
                    console.log('getProductList refresh');
                    _this2.paint();
                });
            } else {
                pull_1.getPurchaseRecord().then(function () {
                    _this2.state.refreshing = false;
                    console.log('getPurchaseRecord refresh');
                    _this2.paint();
                });
            }
        }
    }]);

    return Home;
}(widget_1.Widget);

exports.Home = Home;
// ==========================本地
})