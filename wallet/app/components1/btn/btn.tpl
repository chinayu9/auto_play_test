(function (_cfg, it, it1) {
  var _$temp = void 0,
      node = void 0;_$temp = node;{
    var _$parent = _$temp;var _node = { "attrs": {}, "tagName": "div", "sid": 0 };_node.children = [];_node.attrSize = 3;_node.attrHash = 3111596878;{
      var attrvalue = "";attrvalue += "btn btn-";attrvalue += it.types;attrvalue += " ";attrvalue += it.cannotClick ? 'btn-cannotClick' : 'btn-' + it.color;attrvalue += "";_node.attrs["w-class"] = attrvalue;
    }_node.attrHash = _hash.nextHash(_node.attrHash, _calTextHash(_node.attrs["w-class"]));_node.attrs["on-tap"] = "doTap";{
      var _attrvalue = "";_attrvalue += it.style ? it.style : '';_attrvalue += " animation:";_attrvalue += it1.isAbleBtn ? 'btnClick 0.2s' : '';_attrvalue += "";_node.attrs["style"] = _attrvalue;
    }_node.attrHash = _hash.nextHash(_node.attrHash, _calTextHash(_node.attrs["style"]));if (it1.isString) {
      _$temp = _node;{
        var _$parent2 = _$temp;_addText(it.name, _$parent2);
      }
    } else {
      _$temp = _node;{
        var _$parent3 = _$temp;var _node2 = { "attrs": {}, "tagName": "pi-ui-lang", "sid": 1 };_node2.hasChild = false;_node2.child = null;_node2.attrHash = 0;_$temp = _node2;{
          var _$parent4 = _$temp;_addJson(it.name, _$parent4);
        }_chFunc(_node2);_$parent3.children.push(_node2);
      }
    }_chFunc(_node);return _node;
  }
});