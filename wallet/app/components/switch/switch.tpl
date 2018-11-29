(function (_cfg, it, it1) {
  var _$temp = void 0,
      node = void 0;_$temp = node;{
    var _$parent = _$temp;var _node = { "attrs": {}, "tagName": "div", "sid": 0 };_node.children = [];_node.attrSize = 2;_node.attrHash = 2520441572;_node.attrs["on-tap"] = "doClick";_node.attrs["style"] = "display: inline-block;";var myColor = it1.types ? it.activeColor || 'linear-gradient(to right,#318DE6,#38CFE7)' : it.inactiveColor || '#dcdfe6';_$temp = _node;{
      var _$parent2 = _$temp;var _node2 = { "attrs": {}, "tagName": "span", "sid": 1 };_node2.children = [];_node2.attrSize = 3;_node2.attrHash = 3241489052;_node2.attrs["w-class"] = "switch_bg";{
        var attrvalue = "";attrvalue += it1.types ? 'switch_icon_select' : 'switch_icon';attrvalue += "";_node2.attrs["class"] = attrvalue;
      }_node2.attrHash = _hash.nextHash(_node2.attrHash, _calTextHash(_node2.attrs["class"]));{
        var _attrvalue = "";_attrvalue += "background: ";_attrvalue += myColor;_attrvalue += "";_node2.attrs["style"] = _attrvalue;
      }_node2.attrHash = _hash.nextHash(_node2.attrHash, _calTextHash(_node2.attrs["style"]));_chFunc(_node2);_$parent2.children.push(_node2);
    }_chFunc(_node);return _node;
  }
});