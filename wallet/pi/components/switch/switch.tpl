(function (_cfg, it, it1) {
  var _$temp = void 0,
      node = void 0;_$temp = node;{
    var _$parent = _$temp;var _node = { "attrs": {}, "tagName": "div", "sid": 0 };_node.children = [];_node.attrSize = 1;_node.attrHash = 2219513595;_node.attrs["on-tap"] = "doClick";var myColor = it.type ? it.activeColor || '#409eff' : it.inactiveColor || '#dcdfe6';_$temp = _node;{
      var _$parent2 = _$temp;var _node2 = { "attrs": {}, "tagName": "span", "sid": 1 };_node2.children = [];_node2.attrSize = 3;_node2.attrHash = 686611595;_node2.attrs["w-class"] = "switch_bg";{
        var attrvalue = "";attrvalue += it.type ? 'switch_icon_select' : 'switch_icon';attrvalue += "";_node2.attrs["class"] = attrvalue;
      }_node2.attrHash = _hash.nextHash(_node2.attrHash, _calTextHash(_node2.attrs["class"]));{
        var _attrvalue = "";_attrvalue += 'background-color: ' + myColor + ';border-color:' + myColor;_attrvalue += "";_node2.attrs["style"] = _attrvalue;
      }_node2.attrHash = _hash.nextHash(_node2.attrHash, _calTextHash(_node2.attrs["style"]));_chFunc(_node2);_$parent2.children.push(_node2);
    }_chFunc(_node);return _node;
  }
});