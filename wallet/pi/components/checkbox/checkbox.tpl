(function (_cfg, it, it1) {
  var _$temp = void 0,
      node = void 0;_$temp = node;{
    var _$parent = _$temp;var _node = { "attrs": {}, "tagName": "div", "sid": 0 };_node.children = [];_node.attrSize = 1;_node.attrHash = 2219513595;_node.attrs["on-tap"] = "doClick";if (it.type) {
      _$temp = _node;{
        var _$parent2 = _$temp;var _node2 = { "attrs": {}, "tagName": "span", "sid": 1 };_node2.children = [];_node2.attrSize = 1;_node2.attrHash = 222797276;{
          var attrvalue = "";attrvalue += "icon_";attrvalue += it.type;attrvalue += "";_node2.attrs["w-class"] = attrvalue;
        }_node2.attrHash = _hash.nextHash(_node2.attrHash, _calTextHash(_node2.attrs["w-class"]));_$temp = _node2;{
          var _$parent3 = _$temp;var _node3 = { "attrs": {}, "tagName": "i", "sid": 2 };_node3.children = [];_node3.attrSize = 2;_node3.attrHash = 3504952609;{
            var _attrvalue = "";_attrvalue += "arrow_";_attrvalue += it.type;_attrvalue += "";_node3.attrs["w-class"] = _attrvalue;
          }_node3.attrHash = _hash.nextHash(_node3.attrHash, _calTextHash(_node3.attrs["w-class"]));{
            var _attrvalue2 = "";_attrvalue2 += "checkbox_";_attrvalue2 += it.type;_attrvalue2 += "";_node3.attrs["class"] = _attrvalue2;
          }_node3.attrHash = _hash.nextHash(_node3.attrHash, _calTextHash(_node3.attrs["class"]));_chFunc(_node3);_$parent3.children.push(_node3);
        }_chFunc(_node2);_$parent2.children.push(_node2);
      }_$temp = _node;{
        var _$parent4 = _$temp;var _node4 = { "attrs": {}, "tagName": "span", "sid": 3 };_node4.children = [];_node4.attrSize = 1;_node4.attrHash = 2509853654;{
          var _attrvalue3 = "";_attrvalue3 += "text_";_attrvalue3 += it.type;_attrvalue3 += "";_node4.attrs["w-class"] = _attrvalue3;
        }_node4.attrHash = _hash.nextHash(_node4.attrHash, _calTextHash(_node4.attrs["w-class"]));_$temp = _node4;{
          var _$parent5 = _$temp;_addText(it.text, _$parent5);
        }_chFunc(_node4);_$parent4.children.push(_node4);
      }
    }_chFunc(_node);return _node;
  }
});