_$define("app/view/earn/mining/rankList", function (require, exports, module){
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
var root_1 = require("../../../../pi/ui/root");
var lang_1 = require("../../../../pi/util/lang");
var forelet_1 = require("../../../../pi/widget/forelet");
var widget_1 = require("../../../../pi/widget/widget");
var pull_1 = require("../../../net/pull");
var memstore_1 = require("../../../store/memstore");
exports.forelet = new forelet_1.Forelet();
exports.WIDGET_NAME = module.id.replace(/\//g, '-');

var Home = function (_widget_1$Widget) {
    _inherits(Home, _widget_1$Widget);

    function Home() {
        _classCallCheck(this, Home);

        return _possibleConstructorReturn(this, (Home.__proto__ || Object.getPrototypeOf(Home)).apply(this, arguments));
    }

    _createClass(Home, [{
        key: "create",
        value: function create() {
            _get(Home.prototype.__proto__ || Object.getPrototypeOf(Home.prototype), "create", this).call(this);
            this.language = this.config.value[lang_1.getLang()];
            this.state = {
                tabs: [{
                    tab: '0',
                    data: [],
                    totalNum: 0,
                    myRank: 1,
                    fg: 0
                }, {
                    tab: '1',
                    data: [],
                    totalNum: 0,
                    myRank: 1,
                    fg: 1
                }],
                activeNum: 0
            };
            this.initData();
            this.initEvent();
        }
        /**
         *
         * 获取更新数据
         */

    }, {
        key: "initData",
        value: function initData() {
            var data1 = memstore_1.getStore('activity/mining/miningRank'); // 挖矿排名
            if (data1) {
                this.state.tabs[0].data = data1.rank;
                this.state.tabs[0].myRank = data1.myRank;
            }
            var data2 = memstore_1.getStore('activity/mining/mineRank'); // 矿山排名
            if (data2) {
                this.state.tabs[1].data = data2.rank;
                this.state.tabs[1].myRank = data2.myRank;
            }
            var mining = memstore_1.getStore('activity/mining/total');
            if (mining) {
                this.state.tabs[1].totalNum = mining.totalNum;
                this.state.tabs[0].totalNum = mining.holdNum;
            }
            this.paint();
        }
        /**
         * 导航栏切换
         */

    }, {
        key: "tabsChangeClick",
        value: function tabsChangeClick(value) {
            this.state.activeNum = value;
            this.paint();
        }
    }, {
        key: "goHistory",
        value: function goHistory() {
            root_1.popNew('app-view-earn-mining-miningHistory');
        }
    }, {
        key: "backPrePage",
        value: function backPrePage() {
            this.ok && this.ok();
        }
        /**
         * 刷新页面
         */

    }, {
        key: "refreshPage",
        value: function refreshPage() {
            this.initEvent();
        }
        /**
         * 更新事件
         */

    }, {
        key: "initEvent",
        value: function initEvent() {
            pull_1.getMineRank(100);
            pull_1.getMiningRank(100);
        }
    }]);

    return Home;
}(widget_1.Widget);

exports.Home = Home;
memstore_1.register('activity/mining/miningRank', function () {
    var w = exports.forelet.getWidget(exports.WIDGET_NAME);
    if (w) {
        w.initData();
    }
});
memstore_1.register('activity/mining/mineRank', function () {
    var w = exports.forelet.getWidget(exports.WIDGET_NAME);
    if (w) {
        w.initData();
    }
});
memstore_1.register('activity/mining/total', function () {
    var w = exports.forelet.getWidget(exports.WIDGET_NAME);
    if (w) {
        w.initData();
    }
});
})