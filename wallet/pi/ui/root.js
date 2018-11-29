_$define("pi/ui/root", function (require, exports, module){
"use strict";
/*
 * 根组件
 * 负责监控页面大小变化，约束根元素在标准比例附近变化
 * 负责提供组，组的定义在div元素的属性上
 * 负责将指定的组件放入到对应的组上，并计算该组件的进场动画的时间，进程动画完毕后，还负责根据是否透明的配置，将该组下的组件及组设置成隐藏，组件销毁时，要把被隐藏的组件显示出来。动画期间禁止操作
 */

Object.defineProperty(exports, "__esModule", { value: true });
// ============================== 导入
var mod_1 = require("../lang/mod");
var time_1 = require("../lang/time");
var event_1 = require("../util/event");
var html_1 = require("../util/html");
var log_1 = require("../util/log");
var task_mgr_1 = require("../util/task_mgr");
var util_1 = require("../util/util");
var forelet_1 = require("../widget/forelet");
var frame_mgr_1 = require("../widget/frame_mgr");
var painter_1 = require("../widget/painter");
var virtual_node_1 = require("../widget/virtual_node");
var widget_1 = require("../widget/widget");
// ============================== 导出
exports.logLevel = mod_1.commonjs.debug ? log_1.LogLevel.info : log_1.LogLevel.none;
/**
 * @description 导出给组件用的forelet
 * @example
 */
exports.forelet = new forelet_1.Forelet();
/**
 * @description 导出的监听器列表
 * @example
 */
exports.listenerList = event_1.createHandlerList();
/**
 * @description 根元素的显示兼容配置,
 * 9×16(360×640 405×720 450×800 540×960), 3×5(360×600 420×700 480×800 540×900), 5×8(350×560 400×640 500×800)
 * @example
 */
exports.cfg = {
    width: 750, height: 1334, wscale: 0, hscale: 0.25, full: false
};
/**
 * @description 获得根元素
 * @example
 */
exports.getRoot = function () {
    return root;
};
/**
 * @description 获得根元素的缩放比例
 * @example
 */
exports.getScale = function () {
    return rootScale;
};
/**
 * @description 获得根元素的宽度
 * @example
 */
exports.getWidth = function () {
    return rootWidth;
};
/**
 * @description 获得根元素的高度
 * @example
 */
exports.getHeight = function () {
    return rootHeight;
};
/**
 * @description 指定范围(左上角x1y1, 右下角x2y2)外，禁止鼠标和触控事件，直到超时时间
 * @example
 */
exports.forbidEvent = function (timeout, rect) {
    forbidEventTime = timeout ? time_1.now() + timeout : 0;
    if (rect) {
        allowEventRect[0] = rect[0];
        allowEventRect[1] = rect[1];
        allowEventRect[2] = rect[2];
        allowEventRect[3] = rect[3];
    } else {
        allowEventRect[0] = allowEventRect[1] = allowEventRect[2] = allowEventRect[3] = 0;
    }
};
/**
 * @description 获得是否禁止返回
 * @example
 */
exports.isForbidBack = function () {
    return forbidBack;
};
/**
 * @description 设置是否禁止返回
 * @example
 */
exports.setForbidBack = function (b) {
    forbidBack = b;
};
/**
 * @description 获得是否禁止默认滚动
 * @example
 */
exports.isPreventScroll = function () {
    return preventScroll;
};
/**
 * @description 设置是否禁止默认滚动
 * @example
 */
exports.setPreventScroll = function (b) {
    preventScroll = b;
};
/**
 * @description 弹出界面，返回关闭对象
 * @param back 为返回按钮的处理，Callback表示处理函数-必须调用w.cancel方法， cancel表示调用cancel函数，force表示强制不返回，next表示调用cancel函数继续调用返回，默认处理为cancel
 * @example
 */
exports.pop = function (w, ok, cancel, process, back) {
    var b = { widget: w, callback: null };
    var close = { widget: w, callback: backClose };
    if (back === undefined || back === 'cancel') {
        b.callback = function () {
            close.callback(close.widget);
            cancel && cancel('back');
        };
    } else if (back === 'next') {
        b.callback = function () {
            close.callback(close.widget);
            cancel && cancel('back');
            exports.backCall();
        };
    } else if (back !== 'force') {
        b.callback = back;
    }
    exports.backList.push(b);
    // 设置回调
    w.ok = w.$ok = function (arg) {
        close.callback(close.widget);
        ok && ok(arg);
    };
    w.cancel = w.$cancel = function (arg) {
        close.callback(close.widget);
        cancel && cancel(arg);
    };
    w.process = w.$process = process;
    exports.add(w);
    return close;
};
/**
 * @description 弹出新界面，返回关闭对象
 * @param back 为返回按钮的处理，Callback表示处理函数-必须调用w.cancel方法， cancel表示调用cancel函数，force表示强制不返回，next表示调用cancel函数继续调用返回，默认处理为cancel
 * @example
 */
exports.popNew = function (name, props, ok, cancel, process, back) {
    var w = exports.create(name, props);
    var close = exports.pop(w, ok, cancel, process, back);
    var c = close.callback;
    close.callback = function (w) {
        // popNew创建的，关闭需要销毁
        backClose(w);
        exports.destory(w);
    };
    return close;
};
/**
 * @description 将2个close关联起来，1个界面被关闭时，关闭另外1个界面，一般要求界面1先打开
 * @example
 */
exports.linkClose = function (close1, close2) {
    var c1 = close1.callback;
    var c2 = close2.callback;
    close1.callback = function (w) {
        c2(close2.widget);
        c1(w);
    };
    close2.callback = function (w) {
        c2(w);
        c1(close1.widget);
    };
};
/**
 * @description 用任务队列的方式弹出界面2，并与界面1关联起来，如果界面1已经关闭，则自动销毁界面2
 * @example
 */
exports.popLink = function (close1, name, props, ok, cancel, process, back) {
    frame_mgr_1.getGlobal().setAfter(function () {
        task_mgr_1.set(function () {
            if (!close1.widget.parentNode) {
                return;
            }
            var w = exports.create(name, props);
            if (!close1.widget.parentNode) {
                exports.destory(w);
                return;
            }
            var close2 = exports.pop(w, ok, cancel, process, back);
            close2.callback = function (w) {
                backClose(w);
                exports.destory(w);
            };
            exports.linkClose(close1, close2);
        }, undefined, 1000, 1);
    });
};
/**
 * @description 创建指定名称的组件
 * @example
 */
exports.create = function (name, props) {
    var w = widget_1.factory(name);
    if (!w) {
        return;
    }
    if (props !== undefined) {
        w.setProps(props);
    }
    w.paint();
    return w;
};
/**
 * @description 创建指定名称的组件，根据组件上的配置，将组件加入到指定的组上，会延迟到帧调用时添加
 * @example
 */
exports.open = function (name, props) {
    var w = widget_1.factory(name);
    if (!w) {
        return;
    }
    if (props !== undefined) {
        w.setProps(props);
    }
    w.paint();
    exports.add(w);
    return w;
};
/**
 * @description 将指定的组件，根据组件上的配置，将组件加入到指定的组上，会延迟到帧调用时添加
 * @example
 */
exports.add = function (w, props) {
    var cfg = w.getConfig();
    var name = cfg && cfg.group;
    var group = groupMap.get(name || 'main');
    if (!group) {
        return;
    }
    if (w.parentNode) {
        return;
    }
    group.arr.push(w);
    if (props !== undefined) {
        w.setProps(props);
        w.paint();
    }
    // tslint:disable-next-line:no-object-literal-type-assertion
    var node = {
        attrs: {}, attrSize: 0, attrHash: 0, link: w, widget: rootWidget, childHash: 0xffffffff, child: null
    };
    w.parentNode = node;
    // TODO 计算进场动画时间和是否透明
    painter_1.paintCmd3(group.el, 'appendChild', [painter_1.getRealNode(w.tree)]);
    painter_1.paintAttach(w);
    if (group.arr.length === 1) {
        painter_1.paintCmd3(root, 'appendChild', [group.el]);
    }
    exports.listenerList({ type: 'add', widget: w, group: group });
};
/**
 * @description 将指定的组件移除，会延迟到帧调用时移除
 * @example
 */
exports.remove = function (w) {
    if (!w.parentNode) {
        return;
    }
    w.parentNode = null;
    painter_1.paintCmd3(painter_1.getRealNode(w.tree), 'remove', []);
    painter_1.paintDetach(w);
    var cfg = w.getConfig();
    var name = cfg && cfg.group;
    var group = groupMap.get(name || 'main');
    if (!group) {
        return;
    }
    var i = group.arr.indexOf(w);
    if (i < 0) {
        return;
    }
    group.arr.splice(i, 1);
    // TODO 计算离场动画时间和是否透明
    if (group.arr.length === 0) {
        painter_1.paintCmd3(group.el, 'remove', []);
    }
    exports.listenerList({ type: 'remove', widget: w, group: group });
};
/**
 * @description 显示或隐藏组
 * @example
 */
exports.show = function (groupName, b) {
    var group = groupMap.get(groupName || 'main');
    if (!group) {
        return;
    }
    painter_1.paintCmd3(group.el.style, 'visibility', b ? 'visible' : 'hidden');
};
/**
 * @description 将指定的组件移除并销毁
 * @example
 */
exports.destory = function (w) {
    exports.remove(w);
    painter_1.delWidget(w);
};
/**
 * @description 日志显示，仅处理在手机上，commonjs.debug打开，log级别为info,warn的日志
 * @example
 */
exports.log = function (level, msg, args1, args2, args3, args4, args5, args6, args7, args8, args9) {
    if (level < exports.logLevel || !logContainer) {
        return;
    }
    var s = void 0;
    if (args9 !== undefined) {
        // tslint:disable:max-line-length prefer-template
        s = util_1.toString(msg) + ', ' + util_1.toString(args1) + ', ' + util_1.toString(args2) + ', ' + util_1.toString(args3) + ', ' + util_1.toString(args4) + ', ' + util_1.toString(args5) + ', ' + util_1.toString(args6) + ', ' + util_1.toString(args7) + ', ' + util_1.toString(args8) + ', ' + util_1.toString(args9) + '\n';
    } else if (args8 !== undefined) {
        s = util_1.toString(msg) + ', ' + util_1.toString(args1) + ', ' + util_1.toString(args2) + ', ' + util_1.toString(args3) + ', ' + util_1.toString(args4) + ', ' + util_1.toString(args5) + ', ' + util_1.toString(args6) + ', ' + util_1.toString(args7) + ', ' + util_1.toString(args8) + '\n';
    } else if (args7 !== undefined) {
        s = util_1.toString(msg) + ', ' + util_1.toString(args1) + ', ' + util_1.toString(args2) + ', ' + util_1.toString(args3) + ', ' + util_1.toString(args4) + ', ' + util_1.toString(args5) + ', ' + util_1.toString(args6) + ', ' + util_1.toString(args7) + '\n';
    } else if (args6 !== undefined) {
        s = util_1.toString(msg) + ', ' + util_1.toString(args1) + ', ' + util_1.toString(args2) + ', ' + util_1.toString(args3) + ', ' + util_1.toString(args4) + ', ' + util_1.toString(args5) + ', ' + util_1.toString(args6) + '\n';
    } else if (args5 !== undefined) {
        s = util_1.toString(msg) + ', ' + util_1.toString(args1) + ', ' + util_1.toString(args2) + ', ' + util_1.toString(args3) + ', ' + util_1.toString(args4) + ', ' + util_1.toString(args5) + '\n';
    } else if (args4 !== undefined) {
        s = util_1.toString(msg) + ', ' + util_1.toString(args1) + ', ' + util_1.toString(args2) + ', ' + util_1.toString(args3) + ', ' + util_1.toString(args4) + '\n';
    } else if (args3 !== undefined) {
        s = util_1.toString(msg) + ', ' + util_1.toString(args1) + ', ' + util_1.toString(args2) + ', ' + util_1.toString(args3) + '\n';
    } else if (args2 !== undefined) {
        s = util_1.toString(msg) + ', ' + util_1.toString(args1) + ', ' + util_1.toString(args2) + '\n';
    } else if (args1 !== undefined) {
        s = util_1.toString(msg) + ', ' + util_1.toString(args1) + '\n';
    } else {
        s = util_1.toString(msg) + '\n';
    }
    logClearTime = time_1.now() + LogClearTimeout;
    var t = document.createTextNode(s);
    logs.unshift(t);
    painter_1.paintCmd3(logContainer, 'appendChild', [t]);
    if (logs.length === 1) {
        painter_1.paintCmd3(root, 'appendChild', [logContainer]);
        setTimeout(clearLog, LogClearInterval);
    }
};
/**
 * @description 获取指定属性的父元素，如果遇到root根节点则返回undefined
 * @example
 */
exports.getParentByAttr = function (el, key, value) {
    while (el !== null && el !== root && el !== document.body) {
        var v = el.getAttribute(key);
        if (v !== null) {
            if (!value || v === value) {
                return el;
            }
        }
        el = el.parentNode;
    }
};
/**
 * @description 返回最后一个弹出界面
 * @example
 */
exports.lastBack = function () {
    var h = exports.backList[exports.backList.length - 1];
    return h ? h.widget : null;
};
/**
 * @description 返回调用，返回弹出界面的数量
 * @example
 */
exports.backCall = function () {
    var h = exports.backList[exports.backList.length - 1];
    h.callback && h.callback(h.widget);
    return exports.backList.length;
};
/**
 * @description 尽量关闭所有的返回对象，返回最后留下的弹出界面的数量
 * @example
 */
exports.closeBack = function () {
    var len = exports.backList.length;
    var i = exports.backCall();
    while (i && i < len) {
        len = i;
        i = exports.backCall();
    }
    return i;
};
// 日志清除掉超时时间，20秒，也就是说20秒内，如果有日志写入，则不清除日志
var LogClearTimeout = 20000;
// 日志清除的间隔时间，2秒
var LogClearInterval = 2000;
// 日志最多100条
var LogLimit = 100;
// 根元素
var root = null;
// 根组件
var rootWidget = null;
// 组对象表
var groupMap = new Map();
// 返回记录
exports.backList = [];
// 禁止返回
var forbidBack = false;
// 禁止默认滚动
var preventScroll = false;
// 日志
var logs = [];
// 日志的清理时间
var logClearTime = 0;
// 日志的dom容器
var logContainer = null;
// 根元素的缩放比例
var rootScale = 1;
// 根元素的xy坐标
var rootX = 0;
var rootY = 0;
// 根元素的宽度和高度
var rootWidth = 0;
var rootHeight = 0;
// 旧的高度
var oldHeight = 0;
// 禁止触控时间
var forbidEventTime = 0;
// 允许的矩形区域外，禁止触控
var allowEventRect = [0, 0, 0, 0];
/**
 * @description 返回关闭
 * @example
 */
var backClose = function backClose(w) {
    exports.remove(w);
    w.ok = w.$ok = null;
    w.cancel = w.$cancel = null;
    w.process = w.$process = null;
    exports.backList.pop();
};
/**
 * @description 检查坐标是否在允许区域内
 * @example
 */
var checkAllowRect = function checkAllowRect(x, y, rect) {
    return x > rect[0] && x < rect[2] && y > rect[1] && y < rect[3];
};
/**
 * @description 负责监控页面大小变化，约束根元素在标准比例附近变化
 * @example
 */
var browserAdaptive = function browserAdaptive() {
    if (!root) {
        return;
    }
    var clientWidth = document.documentElement.clientWidth;
    var clientHeight = document.documentElement.clientHeight;
    var ae = document.activeElement;
    // 表示因为是输入，手机上弹出输入面板后的页面变小
    if ((ae.tagName === 'INPUT' || ae.tagName === 'TEXTAREA') && oldHeight > clientHeight) {
        var rect = ae.getBoundingClientRect();
        if (rect.bottom > clientHeight) {
            rootY -= (rect.bottom - clientHeight) / rootScale; // ?TODO 好像不应该/rootScale
            painter_1.paintCmd3(root.style, 'top', rootY + 'px');
            oldHeight = clientHeight;
        }
        return;
    }
    if (exports.cfg.full) {
        rootWidth = clientWidth;
        rootHeight = clientHeight;
        return painter_1.paintCmd3(root.style, 'cssText', 'position:absolute;overflow:hidden;width:100%;height:100%;');
    }
    oldHeight = clientHeight;
    rootWidth = exports.cfg.width;
    rootHeight = exports.cfg.height;
    var scaleW = clientWidth / rootWidth;
    var scaleH = clientHeight / rootHeight;
    if (exports.cfg.wscale >= exports.cfg.hscale) {
        // 宽度比例变动
        if (scaleW > scaleH * (exports.cfg.wscale + 1)) {
            // 大于规定的比例
            rootWidth = rootWidth * (exports.cfg.wscale + 1) | 0;
        } else {
            rootWidth = clientWidth / scaleH | 0;
        }
        rootScale = scaleW = scaleH;
    } else {
        // 高度比例变动
        if (scaleH > scaleW * (exports.cfg.hscale + 1)) {
            rootHeight = rootHeight * (exports.cfg.hscale + 1) | 0;
        } else {
            rootHeight = clientHeight / scaleW | 0;
        }
        rootScale = scaleH = scaleW;
    }
    rootX = (clientWidth - rootWidth) / 2;
    rootY = (clientHeight - rootHeight) / 2;
    painter_1.paintCmd3(root.style, 'cssText', 'position: absolute;overflow: hidden;left: ' + rootX + 'px;top: ' + rootY + 'px;width:' + rootWidth + 'px;height: ' + rootHeight + 'px;-webkit-transform:scale(' + scaleW + ',' + scaleH + ');-moz-transform:scale(' + scaleW + ',' + scaleH + ');-ms-transform:scale(' + scaleW + ',' + scaleH + ');transform:scale(' + scaleW + ',' + scaleH + ');');
    exports.listenerList({ type: 'resize', root: root, scale: rootScale, x: rootX, y: rootY, width: rootWidth, height: rootHeight });
};
/**
 * @description 日志清除
 * @example
 */
var clearLog = function clearLog() {
    // 清除超过100条的日志
    var i = logs.length - 1;
    if (i >= LogLimit) {
        for (; i >= LogLimit; i--) {
            painter_1.paintCmd3(logs[i], 'remove', []);
        }
        logs.length = i + 1;
    } else {
        var t = time_1.now();
        if (t > logClearTime) {
            painter_1.paintCmd3(logs[i--], 'remove', []);
            logs.pop();
        }
    }
    if (i >= 0) {
        setTimeout(clearLog, LogClearInterval);
    } else {
        painter_1.paintCmd3(logContainer, 'remove', []);
    }
};
// ============================== 立即执行
// 在手机上才需要注册日志函数
mod_1.commonjs.flags.mobile && log_1.setBroadcast(exports.log);
// 监听添加widget
exports.forelet.listener = function (cmd, widget) {
    if (cmd !== 'firstPaint') {
        return;
    }
    rootWidget = widget;
    root = painter_1.getRealNode(widget.tree);
    var forbid = function forbid(e) {
        if (forbidEventTime > 0) {
            if (time_1.now() < forbidEventTime && !checkAllowRect(e.clientX, e.clientY, allowEventRect)) {
                e.stopPropagation();
            } else {
                forbidEventTime = 0;
            }
        }
    };
    var forbidTouch = function forbidTouch(e) {
        if (forbidEventTime > 0) {
            if (time_1.now() < forbidEventTime && !checkAllowRect(e.touches[0].pageX, e.touches[0].pageY, allowEventRect)) {
                e.stopPropagation();
            } else {
                forbidEventTime = 0;
            }
        }
    };
    var stop = function stop(e) {
        e.stopPropagation();
    };
    var disabled = function disabled(e) {
        e.stopPropagation();
        e.preventDefault();
    };
    var allowDefault = function allowDefault(e) {
        e.stopPropagation();
        el = e.target;
        while (el !== null && el !== root && el !== document.body) {
            // 如果元素为输入框或允许默认事件，则返回
            if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA' || el.getAttribute('allowDefault')) {
                return;
            }
            el = el.parentNode;
        }
        e.preventDefault();
    };
    var startX = void 0;
    var startY = void 0;
    var el = void 0;
    var orientation = void 0;
    var onTouchStart = function onTouchStart(e) {
        startX = e.touches[0].screenX;
        startY = e.touches[0].screenY;
        var r = doTouchStart(e, orientation);
        orientation = r.orientation;
        el = r.el;
    };
    var onTouchMove = function onTouchMove(e) {
        if (orientation === 0) {
            e.preventDefault();
            return;
        }
        var r = doTouchMove(e, el, orientation, startX, startY);
        startX = r.startX;
        startY = r.startY;
    };
    root.addEventListener('mousemove', forbid, true);
    root.addEventListener('mousedown', forbid, true);
    root.addEventListener('mouseup', forbid, true);
    root.addEventListener('touchmove', forbidTouch, true);
    root.addEventListener('touchstart', forbidTouch, true);
    root.addEventListener('touchend', forbidTouch, true);
    root.addEventListener('mousemove', allowDefault, false);
    root.addEventListener('mousedown', stop, false);
    root.addEventListener('mouseup', allowDefault, false);
    root.addEventListener('touchmove', onTouchMove, false);
    root.addEventListener('touchstart', onTouchStart, false);
    root.addEventListener('touchend', stop, false);
    var arr = widget.tree.children;
    for (var _iterator = arr, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator]();;) {
        var _ref;

        if (_isArray) {
            if (_i >= _iterator.length) break;
            _ref = _iterator[_i++];
        } else {
            _i = _iterator.next();
            if (_i.done) break;
            _ref = _i.value;
        }

        var n = _ref;

        var e = painter_1.getRealNode(n);
        painter_1.paintCmd3(e, 'remove', []);
        var name = virtual_node_1.getAttribute(n.attrs, 'group');
        if (!name) {
            continue;
        }
        groupMap.set(name, { name: name, el: e, arr: [] });
        if (name === 'log') {
            logContainer = e;
        }
    }
    browserAdaptive();
};
// 监听onresize
window.onresize = browserAdaptive;
// 取顶层窗口
try {
    var win = top.window;
    // 注册系统返回事件
    win.onpopstate = function () {
        win.history.pushState({}, null);
        if (forbidBack) {
            return;
        }
        if (exports.backList.length) {
            exports.backCall();
        } else {
            exports.listenerList({ type: 'back' });
        }
    };
    win.history.pushState({}, null);
    // tslint:disable-next-line:no-empty
} catch (e) {}
/**
 * 处理点击开始
 * @param e 事件
 */
var doTouchStart = function doTouchStart(e, orientation) {
    e.stopPropagation();
    orientation = 0;
    var el = e.target;
    while (el !== null && el !== root && el !== document.body) {
        // 如果元素为输入框或允许默认事件，则返回
        if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA' || el.getAttribute('allowDefault')) {
            return { orientation: orientation, el: el };
        }
        if (!preventScroll) {
            // 如果完全使用better-scroll，则可以去掉
            var st = html_1.getStyle(el);
            if (st.overflowX === 'auto') {
                orientation |= 1;
            }
            if (st.overflowY === 'auto') {
                orientation |= 2;
            }
            // 如果元素为可滚动，则返回
            if (orientation !== 0) {
                return { orientation: orientation, el: el };
            }
        }
        el = el.parentNode;
    }
    // 禁止默认操作，防止微信及浏览器的返回或拉下
    e.preventDefault();
    return { orientation: orientation, el: el };
};
/**
 * 处理移动
 *
 * @param e 事件
 * @param el 元素
 * @param orientation 方向
 * @param startX 起始x位置
 * @param startY 起始y位置
 */
var doTouchMove = function doTouchMove(e, el, orientation, startX, startY) {
    var endX = e.touches[0].screenX;
    var endY = e.touches[0].screenY;
    if ((orientation & 2) !== 0) {
        if (endY - startY >= 0) {
            if (el.scrollTop <= 0) {
                e.preventDefault();
            }
        } else {
            if (el.scrollHeight - el.clientHeight <= el.scrollTop) {
                e.preventDefault();
            }
        }
    }
    if ((orientation & 1) !== 0) {
        if (endX - startX >= 0) {
            if (el.scrollLeft <= 0) {
                e.preventDefault();
            }
        } else {
            if (el.scrollWidth - el.clientWidth <= el.scrollLeft) {
                e.preventDefault();
            }
        }
    }
    return { startX: startX, startY: startY };
};
})