(function (_cfg, it, it1) {
  var _$temp = void 0,
      node = void 0;_$temp = node;{
    var _$parent = _$temp;var _node = { "attrs": {}, "tagName": "div", "sid": 0 };_node.children = [];_node.attrSize = 2;_node.attrHash = 1735369384;_node.attrs["w-class"] = "main";{
      var attrvalue = "";if (!it1.isShow) {
        attrvalue += "message-fade-enter";
      }attrvalue += " message_open ";_node.attrs["class"] = attrvalue;
    }_node.attrHash = _hash.nextHash(_node.attrHash, _calTextHash(_node.attrs["class"]));_$temp = _node;{
      var _$parent2 = _$temp;var _node2 = { "attrs": {}, "tagName": "p", "sid": 1 };_node2.children = [];_node2.attrSize = 1;_node2.attrHash = 2710496119;_node2.attrs["w-class"] = "text";if (typeof it.content === 'string') {
        _$temp = _node2;{
          var _$parent3 = _$temp;_addText(it.content, _$parent3);
        }
      } else {
        _$temp = _node2;{
          var _$parent4 = _$temp;var _node3 = { "attrs": {}, "tagName": "pi-ui-lang", "sid": 2 };_node3.hasChild = false;_node3.child = null;_node3.attrHash = 0;_$temp = _node3;{
            var _$parent5 = _$temp;_addJson(it.content, _$parent5);
          }_chFunc(_node3);_$parent4.children.push(_node3);
        }
      }_chFunc(_node2);_$parent2.children.push(_node2);
    }_chFunc(_node);return _node;
  }
});