(function (_cfg, it, it1) {
  var _$temp = void 0,
      node = void 0;_$temp = node;{
    var _$parent = _$temp;var _node = { "attrs": {}, "tagName": "div", "sid": 0 };_node.children = [];_node.attrSize = 1;_node.attrHash = 1045235690;_node.attrs["w-class"] = "item";_$temp = _node;{
      var _$parent2 = _$temp;var _node2 = { "attrs": {}, "tagName": "img", "sid": 1 };_node2.children = [];_node2.attrSize = 2;_node2.attrHash = 442453181;{
        var attrvalue = "";attrvalue += "../../res/image/currency/";attrvalue += it.img;attrvalue += "";_node2.attrs["src"] = attrvalue;
      }_node2.attrHash = _hash.nextHash(_node2.attrHash, _calTextHash(_node2.attrs["src"]));_node2.attrs["w-class"] = "icon";_chFunc(_node2);_$parent2.children.push(_node2);
    }_$temp = _node;{
      var _$parent3 = _$temp;var _node3 = { "attrs": {}, "tagName": "div", "sid": 2 };_node3.children = [];_node3.attrSize = 1;_node3.attrHash = 1548080441;_node3.attrs["w-class"] = "right-container";_$temp = _node3;{
        var _$parent4 = _$temp;var _node4 = { "attrs": {}, "tagName": "div", "sid": 3 };_node4.children = [];_node4.attrSize = 1;_node4.attrHash = 1162860987;_node4.attrs["w-class"] = "top-container";_$temp = _node4;{
          var _$parent5 = _$temp;var _node5 = { "attrs": {}, "tagName": "div", "sid": 4 };_node5.children = [];_node5.attrSize = 1;_node5.attrHash = 973517844;_node5.attrs["w-class"] = "currency-name";_$temp = _node5;{
            var _$parent6 = _$temp;_addText(it.title, _$parent6);
          }_chFunc(_node5);_$parent5.children.push(_node5);
        }_chFunc(_node4);_$parent4.children.push(_node4);
      }_$temp = _node3;{
        var _$parent7 = _$temp;var _node6 = { "attrs": {}, "tagName": "div", "sid": 5 };_node6.children = [];_node6.attrSize = 1;_node6.attrHash = 1923323011;_node6.attrs["w-class"] = "bottom-container";_$temp = _node6;{
          var _$parent8 = _$temp;var _node7 = { "attrs": {}, "tagName": "div", "sid": 6 };_node7.children = [];_node7.attrSize = 1;_node7.attrHash = 4031233572;_node7.attrs["w-class"] = "description";_$temp = _node7;{
            var _$parent9 = _$temp;_addText(it.desc, _$parent9);
          }_chFunc(_node7);_$parent8.children.push(_node7);
        }_chFunc(_node6);_$parent7.children.push(_node6);
      }_chFunc(_node3);_$parent3.children.push(_node3);
    }_chFunc(_node);return _node;
  }
});