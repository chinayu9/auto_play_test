(function (_cfg, it, it1) {
  var _$temp = void 0,
      node = void 0;_$temp = node;{
    var _$parent = _$temp;var _node = { "attrs": {}, "tagName": "div", "sid": 0 };_node.children = [];_node.attrSize = 1;_node.attrHash = 2652311187;{
      var attrvalue = "";attrvalue += "card ";attrvalue += it.shadow ? 'card-shadow' : '';attrvalue += "";_node.attrs["w-class"] = attrvalue;
    }_node.attrHash = _hash.nextHash(_node.attrHash, _calTextHash(_node.attrs["w-class"]));_$temp = _node;{
      var _$parent2 = _$temp;var _node2 = { "attrs": {}, "tagName": "img", "sid": 1 };_node2.children = [];_node2.attrSize = 2;_node2.attrHash = 1964295314;{
        var _attrvalue = "";_attrvalue += it.img;_attrvalue += "";_node2.attrs["src"] = _attrvalue;
      }_node2.attrHash = _hash.nextHash(_node2.attrHash, _calTextHash(_node2.attrs["src"]));_node2.attrs["w-class"] = "card-img";_chFunc(_node2);_$parent2.children.push(_node2);
    }_$temp = _node;{
      var _$parent3 = _$temp;var _node3 = { "attrs": {}, "tagName": "div", "sid": 2 };_node3.children = [];_node3.attrSize = 1;_node3.attrHash = 1189131646;_node3.attrs["w-class"] = "card-content";_$temp = _node3;{
        var _$parent4 = _$temp;var _node4 = { "attrs": {}, "tagName": "div", "sid": 3 };_node4.children = [];_node4.attrSize = 1;_node4.attrHash = 3568076218;_node4.attrs["w-class"] = "desc";if (typeof it.desc === 'string') {
          _$temp = _node4;{
            var _$parent5 = _$temp;_addText(it.desc, _$parent5);
          }
        } else {
          _$temp = _node4;{
            var _$parent6 = _$temp;var _node5 = { "attrs": {}, "tagName": "pi-ui-lang", "sid": 4 };_node5.hasChild = false;_node5.child = null;_node5.attrHash = 0;_$temp = _node5;{
              var _$parent7 = _$temp;_addJson(it.desc, _$parent7);
            }_chFunc(_node5);_$parent6.children.push(_node5);
          }
        }_chFunc(_node4);_$parent4.children.push(_node4);
      }_$temp = _node3;{
        var _$parent8 = _$temp;var _node6 = { "attrs": {}, "tagName": "div", "sid": 5 };_node6.children = [];_node6.attrSize = 1;_node6.attrHash = 1019047777;_node6.attrs["w-class"] = "title";if (typeof it.title === 'string') {
          _$temp = _node6;{
            var _$parent9 = _$temp;_addText(it.title, _$parent9);
          }
        } else {
          _$temp = _node6;{
            var _$parent10 = _$temp;var _node7 = { "attrs": {}, "tagName": "pi-ui-lang", "sid": 6 };_node7.hasChild = false;_node7.child = null;_node7.attrHash = 0;_$temp = _node7;{
              var _$parent11 = _$temp;_addJson(it.title, _$parent11);
            }_chFunc(_node7);_$parent10.children.push(_node7);
          }
        }_chFunc(_node6);_$parent8.children.push(_node6);
      }_chFunc(_node3);_$parent3.children.push(_node3);
    }_chFunc(_node);return _node;
  }
});