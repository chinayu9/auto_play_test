(function (_cfg, it, it1) {
  var _$temp = void 0,
      node = void 0;_$temp = node;{
    var _$parent = _$temp;var _node = { "attrs": {}, "tagName": "div", "sid": 0 };_node.children = [];_node.attrSize = 2;_node.attrHash = 2403013761;_node.attrs["on-tap"] = "doClick";_node.attrs["w-class"] = "checkbox";if (it.itype) {
      _$temp = _node;{
        var _$parent2 = _$temp;var _node2 = { "attrs": {}, "tagName": "span", "sid": 1 };_node2.children = [];_node2.attrSize = 1;_node2.attrHash = 1574545346;{
          var attrvalue = "";attrvalue += "icon_";attrvalue += it.itype;attrvalue += " icon-box";_node2.attrs["w-class"] = attrvalue;
        }_node2.attrHash = _hash.nextHash(_node2.attrHash, _calTextHash(_node2.attrs["w-class"]));_$temp = _node2;{
          var _$parent3 = _$temp;var _node3 = { "attrs": {}, "tagName": "i", "sid": 2 };_node3.children = [];_node3.attrSize = 2;_node3.attrHash = 2580129558;{
            var _attrvalue = "";_attrvalue += "arrow_";_attrvalue += it.itype;_attrvalue += "";_node3.attrs["w-class"] = _attrvalue;
          }_node3.attrHash = _hash.nextHash(_node3.attrHash, _calTextHash(_node3.attrs["w-class"]));{
            var _attrvalue2 = "";_attrvalue2 += "checkbox1_";_attrvalue2 += it.itype;_attrvalue2 += "";_node3.attrs["class"] = _attrvalue2;
          }_node3.attrHash = _hash.nextHash(_node3.attrHash, _calTextHash(_node3.attrs["class"]));_chFunc(_node3);_$parent3.children.push(_node3);
        }_chFunc(_node2);_$parent2.children.push(_node2);
      }_$temp = _node;{
        var _$parent4 = _$temp;var _node4 = { "attrs": {}, "tagName": "widget", "sid": 3 };_node4.hasChild = false;_node4.child = null;_node4.attrSize = 1;_node4.attrHash = 692027523;_node4.attrs["w-tag"] = "pi-ui-lang";_node4.tagName = _node4.attrs["w-tag"];{
          var _attrvalue3 = "";_attrvalue3 += "text_";_attrvalue3 += it.itype;_attrvalue3 += "";_node4.attrs["w-class"] = _attrvalue3;
        }_node4.attrHash = _hash.nextHash(_node4.attrHash, _calTextHash(_node4.attrs["w-class"]));_$temp = _node4;{
          var _$parent5 = _$temp;_addJson(it.text, _$parent5);
        }_chFunc(_node4);_$parent4.children.push(_node4);
      }
    }_chFunc(_node);return _node;
  }
});