(function (_cfg, it, it1) {
  var _$temp = void 0,
      node = void 0;_$temp = node;{
    var _$parent = _$temp;var _node = { "attrs": {}, "tagName": "div", "sid": 0 };_node.children = [];_node.attrSize = 2;_node.attrHash = 653908778;_node.attrs["class"] = "pi-loading-mask";_node.attrs["w-class"] = "pi-loading-mask";_$temp = _node;{
      var _$parent2 = _$temp;var _node2 = { "attrs": {}, "tagName": "div", "sid": 1 };_node2.children = [];_node2.attrSize = 1;_node2.attrHash = 721569670;_node2.attrs["w-class"] = "pi-loading-spinner";_$temp = _node2;{
        var _$parent3 = _$temp;var _node3 = { "attrs": {}, "tagName": "widget", "sid": 2 };_node3.hasChild = false;_node3.child = null;_node3.attrSize = 1;_node3.attrHash = 457273663;_node3.attrs["w-tag"] = "ui-html$$$";_node3.tagName = _node3.attrs["w-tag"];_node3.attrs["w-class"] = "pi-svg-box";_$temp = _node3;{
          var _$parent4 = _$temp;_addJson(it1.circular, _$parent4);
        }_chFunc(_node3);_$parent3.children.push(_node3);
      }_$temp = _node2;{
        var _$parent5 = _$temp;var _node4 = { "attrs": {}, "tagName": "p", "sid": 3 };_node4.children = [];_node4.attrSize = 1;_node4.attrHash = 2886807430;_node4.attrs["w-class"] = "pi-loading-text";_$temp = _node4;{
          var _$parent6 = _$temp;_addText(it && it.text || "加载中", _$parent6);
        }_chFunc(_node4);_$parent5.children.push(_node4);
      }_chFunc(_node2);_$parent2.children.push(_node2);
    }_chFunc(_node);return _node;
  }
});