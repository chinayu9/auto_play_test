_$define("pi/components/collapse/collapse", function (require, exports, module){
"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Collapse 折叠面板的逻辑处理
 */
var widget_1 = require("../../widget/widget");
var event_1 = require("../../widget/event");
var painter_1 = require("../../widget/painter");

var Collapse = function (_widget_1$Widget) {
    _inherits(Collapse, _widget_1$Widget);

    function Collapse() {
        _classCallCheck(this, Collapse);

        return _possibleConstructorReturn(this, (Collapse.__proto__ || Object.getPrototypeOf(Collapse)).call(this));
    }

    _createClass(Collapse, [{
        key: "setProps",
        value: function setProps(props, oldProps) {
            _get(Collapse.prototype.__proto__ || Object.getPrototypeOf(Collapse.prototype), "setProps", this).call(this, props, oldProps);
            if (props.accordion) {
                this.state = {
                    currentExpIndex: -1,
                    lastExpIndex: -1,
                    isExpanded: this.isExpanded.bind(this)
                };
            } else {
                var currentExpArr = [];
                for (var i = 0; i < props.htmlStrList.length; i++) {
                    currentExpArr[i] = false;
                }
                this.state = {
                    currentExpArr: currentExpArr,
                    isExpanded: this.isExpanded.bind(this)
                };
            }
        }
    }, {
        key: "clickItemListener",
        value: function clickItemListener(event, index) {
            if (this.props.accordion) {
                this.state.lastExpIndex = this.state.currentExpIndex;
                if (this.state.currentExpIndex === index) {
                    this.state.currentExpIndex = -1;
                } else {
                    this.state.currentExpIndex = index;
                }
            } else {
                this.state.currentExpArr[index] = !this.state.currentExpArr[index];
            }
            this.setHiddenContentHeight(index, this.isExpanded(index));
            var activeIndexs = void 0;
            if (this.props.accordion) {
                activeIndexs = this.state.currentExpIndex;
            } else {
                activeIndexs = [];
                for (var i = 0; i < this.state.currentExpArr.length; i++) {
                    if (this.state.currentExpArr[i]) {
                        activeIndexs.push(i);
                    }
                }
            }
            event_1.notify(event.node, "ev-collapse-change", { activeIndexs: activeIndexs });
            this.paint();
        }
        //判断当前item是否展开

    }, {
        key: "isExpanded",
        value: function isExpanded(index) {
            if (this.props.accordion) {
                return this.state.currentExpIndex == index;
            }
            return this.state.currentExpArr[index];
        }
    }, {
        key: "setHiddenContentHeight",
        value: function setHiddenContentHeight(index, isExpanded) {
            var currentItemPanel = this.tree.children[index].children[1];
            var currentItemPanelNode = painter_1.getRealNode(currentItemPanel);
            if (this.props.accordion && this.state.lastExpIndex !== -1) {
                var lastItemPanel = this.tree.children[this.state.lastExpIndex].children[1];
                var lastItemPanelNode = painter_1.getRealNode(lastItemPanel);
                lastItemPanelNode.style.height = "0px";
            }
            if (!isExpanded) {
                currentItemPanelNode.style.height = "0px";
                return;
            }
            var scrollHeight = currentItemPanelNode.scrollHeight;
            currentItemPanelNode.style.height = scrollHeight + "px";
        }
    }]);

    return Collapse;
}(widget_1.Widget);

exports.Collapse = Collapse;
})