(function (_cfg, it, it1) {
  var _$temp = void 0,
      node = void 0;_$temp = node;{
    var _$parent = _$temp;var _node = { "attrs": {}, "tagName": "div", "sid": 0 };_node.children = [];_node.attrSize = 2;_node.attrHash = 138104688;_node.attrs["class"] = "new-page";_node.attrs["w-class"] = "new-page";_$temp = _node;{
      var _$parent2 = _$temp;var _node2 = { "attrs": {}, "tagName": "div", "sid": 1 };_node2.children = [];_node2.attrSize = 1;_node2.attrHash = 1913054642;_node2.attrs["w-class"] = "main";_$temp = _node2;{
        var _$parent3 = _$temp;var _node3 = { "attrs": {}, "tagName": "div", "sid": 2 };_node3.children = [];_node3.attrSize = 1;_node3.attrHash = 3605200885;_node3.attrs["w-class"] = "head";_$temp = _node3;{
          var _$parent4 = _$temp;var _node4 = { "attrs": {}, "tagName": "span", "sid": 3 };_node4.children = [];_node4.attrHash = 0;_$temp = _node4;{
            var _$parent5 = _$temp;_addText(it.title, _$parent5);
          }_chFunc(_node4);_$parent4.children.push(_node4);
        }_$temp = _node3;{
          var _$parent6 = _$temp;var _node5 = { "attrs": {}, "tagName": "img", "sid": 4 };_node5.children = [];_node5.childHash = 0;_node5.attrSize = 3;_node5.attrHash = 2388067686;_node5.attrs["src"] = "../../res/image/btn_pop_close.png";_node5.attrs["w-class"] = "cancel";_node5.attrs["on-tap"] = "cancelClick";_$parent6.children.push(_node5);
        }_chFunc(_node3);_$parent3.children.push(_node3);
      }_$temp = _node2;{
        var _$parent7 = _$temp;var _node6 = { "attrs": {}, "tagName": "div", "sid": 5 };_node6.children = [];_node6.attrSize = 1;_node6.attrHash = 487306359;_node6.attrs["w-class"] = "content";_$temp = _node6;{
          var _$parent8 = _$temp;_addText(it.content, _$parent8);
        }_chFunc(_node6);_$parent7.children.push(_node6);
      }_$temp = _node2;{
        var _$parent9 = _$temp;var _node7 = { "attrs": {}, "tagName": "div", "sid": 6 };_node7.children = [];_node7.attrSize = 1;_node7.attrHash = 819962544;_node7.attrs["w-class"] = "tips";_$temp = _node7;{
          var _$parent10 = _$temp;_addText(it.tips, _$parent10);
        }_chFunc(_node7);_$parent9.children.push(_node7);
      }_chFunc(_node2);_$parent2.children.push(_node2);
    }_chFunc(_node);return _node;
  }
});