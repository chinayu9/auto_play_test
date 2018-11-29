(function (_cfg, it, it1) {
  var _$temp = void 0,
      node = void 0;_$temp = node;{
    var _$parent = _$temp;var _node = { "attrs": {}, "tagName": "div", "sid": 0 };_node.children = [];_node.attrSize = 2;_node.attrHash = 2551807503;{
      var attrvalue = "";attrvalue += "main main_";attrvalue += it.type;attrvalue += " ";attrvalue += it.center ? 'main_center' : '';attrvalue += "";_node.attrs["w-class"] = attrvalue;
    }_node.attrHash = _hash.nextHash(_node.attrHash, _calTextHash(_node.attrs["w-class"]));{
      var _attrvalue = "";if (!it1.isShow) {
        _attrvalue += " message-fade-enter";
      }_attrvalue += " message_open ";_node.attrs["class"] = _attrvalue;
    }_node.attrHash = _hash.nextHash(_node.attrHash, _calTextHash(_node.attrs["class"]));_$temp = _node;{
      var _$parent2 = _$temp;var _node2 = { "attrs": {}, "tagName": "p", "sid": 1 };_node2.children = [];_node2.attrSize = 1;_node2.attrHash = 370807749;{
        var _attrvalue2 = "";_attrvalue2 += "text text_";_attrvalue2 += it.type;_attrvalue2 += "";_node2.attrs["w-class"] = _attrvalue2;
      }_node2.attrHash = _hash.nextHash(_node2.attrHash, _calTextHash(_node2.attrs["w-class"]));_$temp = _node2;{
        var _$parent3 = _$temp;_addText(it.content, _$parent3);
      }_chFunc(_node2);_$parent2.children.push(_node2);
    }_chFunc(_node);return _node;
  }
});