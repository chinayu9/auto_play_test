_$define("app/view/play/home/home", function (require, exports, module){
"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

Object.defineProperty(exports, "__esModule", { value: true });
var root_1 = require("../../../../pi/ui/root");
var lang_1 = require("../../../../pi/util/lang");
var forelet_1 = require("../../../../pi/widget/forelet");
var util_1 = require("../../../../pi/widget/util");
var widget_1 = require("../../../../pi/widget/widget");
var native_1 = require("../../../logic/native");
var memstore_1 = require("../../../store/memstore");
var tools_1 = require("../../../utils/tools");
var webview_1 = require("../../../../pi/browser/webview");
var pull_1 = require("../../../net/pull");
exports.forelet = new forelet_1.Forelet();
exports.WIDGET_NAME = module.id.replace(/\//g, '-');

var PlayHome = function (_widget_1$Widget) {
    _inherits(PlayHome, _widget_1$Widget);

    function PlayHome() {
        _classCallCheck(this, PlayHome);

        var _this = _possibleConstructorReturn(this, (PlayHome.__proto__ || Object.getPrototypeOf(PlayHome)).call(this));

        _this.web3Promise = new Promise(function (resolve) {
            var path = 'app/core/thirdparty/web3_rpc.js.txt';
            util_1.loadDir([path], undefined, undefined, undefined, function (fileMap) {
                var arr = new Uint8Array(fileMap[path]);
                // for (let i = 0; i < arr.length; ++i) {
                //     content += String.fromCharCode(arr[i]);
                // }
                // content = decodeURIComponent(escape(atob(content)));
                var content = new TextDecoder().decode(arr);
                resolve(content);
            }, function () {}, function () {});
        });
        return _this;
    }

    _createClass(PlayHome, [{
        key: "setProps",
        value: function setProps(props) {
            _get(PlayHome.prototype.__proto__ || Object.getPrototypeOf(PlayHome.prototype), "setProps", this).call(this, props);
            this.language = this.config.value[lang_1.getLang()];
            var userInfo = pull_1.getUserInfo();
            if (userInfo) {
                this.props.avatar = userInfo.avatar ? userInfo.avatar : '../../res/image1/default_avatar.png';
                this.props.refresh = false;
            }
            this.props.gameList = [{
                title: 'Crypto Fishing',
                desc: { zh_Hans: '新一代区块链游戏', zh_Hant: '新一代區塊鏈遊戲', en: '' },
                img: 'app/res/image1/game2.jpg',
                url: 'http://47.244.59.13/web-rinkeby/index.html'
            }, {
                title: { zh_Hans: '迷失之城', zh_Hant: '迷失之城', en: '' },
                desc: { zh_Hans: '基于GAIA链的新一代区块链游戏', zh_Hant: '基於GAIA鏈的新一代區塊鏈遊戲', en: '' },
                img: 'app/res/image1/game3.jpg',
                url: ''
            }, {
                title: 'Decentraland',
                desc: { zh_Hans: 'Decentraland与Ethaemon合作', zh_Hant: 'Decentraland與Ethaemon合作', en: '' },
                img: 'app/res/image1/game4.jpg',
                url: ''
            }];
        }
    }, {
        key: "backPrePage",
        value: function backPrePage() {
            this.ok && this.ok();
        }
    }, {
        key: "enterGames1Click",
        value: function enterGames1Click() {
            native_1.openNewActivity('http://39.104.203.151/game/boot/index.html');
        }
    }, {
        key: "enterGames2Click",
        value: function enterGames2Click() {
            if (!tools_1.hasWallet()) return;
            var gameTitle = 'Crypto Fishing';
            var gameUrl = 'http://47.244.59.13/web-rinkeby/index.html';
            this.web3Promise.then(function (content) {
                webview_1.WebViewManager.open(gameTitle, gameUrl + "?" + Math.random(), gameTitle, content);
            });
        }
    }, {
        key: "getCode",
        value: function getCode(event) {
            console.log(event.phone);
        }
    }, {
        key: "modalBoxSure",
        value: function modalBoxSure(e) {
            console.log(e.value);
        }
    }, {
        key: "showMine",
        value: function showMine() {
            root_1.popNew('app-view-mine-home-home');
        }
        /**
         * 刷新页面
         */

    }, {
        key: "refreshPage",
        value: function refreshPage() {
            var _this2 = this;

            this.props.refresh = true;
            this.paint();
            setTimeout(function () {
                _this2.props.refresh = false;
                _this2.paint();
            }, 1000);
        }
    }, {
        key: "gameClick",
        value: function gameClick(num) {
            if (!tools_1.hasWallet()) return;
            if (!this.props.gameList[num].url) {
                tools_1.popNewMessage(this.language.tips);
            } else {
                var gameTitle = this.props.gameList[num].title;
                var gameUrl = this.props.gameList[num].url;
                this.web3Promise.then(function (content) {
                    webview_1.WebViewManager.open(gameTitle, gameUrl + "?" + Math.random(), gameTitle, content);
                });
            }
        }
    }]);

    return PlayHome;
}(widget_1.Widget);

exports.PlayHome = PlayHome;
memstore_1.register('user/info', function () {
    var w = exports.forelet.getWidget(exports.WIDGET_NAME);
    if (w) {
        var userInfo = pull_1.getUserInfo();
        if (userInfo) {
            w.props.avatar = userInfo.avatar ? userInfo.avatar : '../../res/image1/default_avatar.png';
        }
        w.paint();
    }
});
})