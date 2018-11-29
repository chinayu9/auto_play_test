(function (_cfg, it, it1) {
  var _$temp = void 0,
      node = void 0;_$temp = node;{
    var _$parent = _$temp;var _node = { "attrs": {}, "tagName": "div", "sid": 0 };_node.children = [];_node.attrSize = 1;_node.attrHash = 2786971788;_node.attrs["w-class"] = "top-box";_$temp = _node;{
      var _$parent2 = _$temp;var _node2 = { "attrs": {}, "tagName": "div", "sid": 1 };_node2.children = [];_node2.attrSize = 2;_node2.attrHash = 4103100898;_node2.attrs["w-class"] = "top-tip-title";{
        var attrvalue = "";attrvalue += it.titleStyle;attrvalue += "";_node2.attrs["style"] = attrvalue;
      }_node2.attrHash = _hash.nextHash(_node2.attrHash, _calTextHash(_node2.attrs["style"]));_$temp = _node2;{
        var _$parent3 = _$temp;var _node3 = { "attrs": {}, "tagName": "pi-ui-lang", "sid": 2 };_node3.hasChild = false;_node3.child = null;_node3.attrHash = 0;_$temp = _node3;{
          var _$parent4 = _$temp;_addJson(it.title, _$parent4);
        }_chFunc(_node3);_$parent3.children.push(_node3);
      }_chFunc(_node2);_$parent2.children.push(_node2);
    }_$temp = _node;{
      var _$parent5 = _$temp;var _node4 = { "attrs": {}, "tagName": "div", "sid": 3 };_node4.children = [];_node4.attrSize = 2;_node4.attrHash = 1068794801;_node4.attrs["w-class"] = "top-tip-content";{
        var _attrvalue = "";_attrvalue += it.contentStyle;_attrvalue += "";_node4.attrs["style"] = _attrvalue;
      }_node4.attrHash = _hash.nextHash(_node4.attrHash, _calTextHash(_node4.attrs["style"]));_$temp = _node4;{
        var _$parent6 = _$temp;var _node5 = { "attrs": {}, "tagName": "pi-ui-lang", "sid": 4 };_node5.hasChild = false;_node5.child = null;_node5.attrHash = 0;_$temp = _node5;{
          var _$parent7 = _$temp;_addJson(it.content, _$parent7);
        }_chFunc(_node5);_$parent6.children.push(_node5);
      }_chFunc(_node4);_$parent5.children.push(_node4);
    }_chFunc(_node);return _node;
  }
});