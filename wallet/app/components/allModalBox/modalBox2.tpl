(function (_cfg, it, it1) {
  var _$temp = void 0,
      node = void 0;_$temp = node;{
    var _$parent = _$temp;var _node = { "attrs": {}, "tagName": "div", "sid": 0 };_node.children = [];_node.attrSize = 1;_node.attrHash = 3338124703;_node.attrs["w-class"] = "base";_$temp = _node;{
      var _$parent2 = _$temp;var _node2 = { "attrs": {}, "tagName": "div", "sid": 1 };_node2.children = [];_node2.attrSize = 1;_node2.attrHash = 1913054642;_node2.attrs["w-class"] = "main";_$temp = _node2;{
        var _$parent3 = _$temp;var _node3 = { "attrs": {}, "tagName": "div", "sid": 2 };_node3.children = [];_node3.attrSize = 1;_node3.attrHash = 2559935368;_node3.attrs["w-class"] = "header";_$temp = _node3;{
          var _$parent4 = _$temp;var _node4 = { "attrs": {}, "tagName": "div", "sid": 3 };_node4.children = [];_node4.attrSize = 1;_node4.attrHash = 1019047777;_node4.attrs["w-class"] = "title";_$temp = _node4;{
            var _$parent5 = _$temp;var _node5 = { "attrs": {}, "tagName": "span", "sid": 4 };_node5.children = [];_node5.attrHash = 0;_$temp = _node5;{
              var _$parent6 = _$temp;_addText(it.title, _$parent6);
            }_chFunc(_node5);_$parent5.children.push(_node5);
          }_$temp = _node4;{
            var _$parent7 = _$temp;var _node6 = { "attrs": {}, "tagName": "div", "sid": 5 };_node6.children = [];_node6.childHash = 4141367856;_node6.attrSize = 2;_node6.attrHash = 3606893633;_node6.attrs["w-class"] = "quit-container";_node6.attrs["on-tap"] = "quitClick";_$temp = _node6;{
              var _$parent8 = _$temp;var _node7 = { "attrs": {}, "tagName": "img", "sid": 6 };_node7.children = [];_node7.childHash = 0;_node7.attrSize = 2;_node7.attrHash = 3401290591;_node7.attrs["w-class"] = "quit";_node7.attrs["src"] = "../../res/image/btn_pop_close.png";_$parent8.children.push(_node7);
            }_$parent7.children.push(_node6);
          }_chFunc(_node4);_$parent4.children.push(_node4);
        }_chFunc(_node3);_$parent3.children.push(_node3);
      }_$temp = _node2;{
        var _$parent9 = _$temp;var _node8 = { "attrs": {}, "tagName": "div", "sid": 7 };_node8.children = [];_node8.attrSize = 2;_node8.attrHash = 241430158;_node8.attrs["w-class"] = "content";if (it.contentStyle) {
          {
            var attrvalue = "";attrvalue += it.contentStyle;attrvalue += "";_node8.attrs["style"] = attrvalue;
          }_node8.attrHash = _hash.nextHash(_node8.attrHash, _calTextHash(_node8.attrs["style"]));_node8.attrHash = _hash.nextHash(_node8.attrHash, _calTextHash(null));
        }if (it.content) {
          _$temp = _node8;{
            var _$parent10 = _$temp;var _node9 = { "attrs": {}, "tagName": "div", "sid": 8 };_node9.children = [];_node9.attrSize = 1;_node9.attrHash = 2697260623;_node9.attrs["w-class"] = "message";_$temp = _node9;{
              var _$parent11 = _$temp;var _node10 = { "attrs": {}, "tagName": "p", "sid": 9 };_node10.children = [];_node10.attrHash = 0;_$temp = _node10;{
                var _$parent12 = _$temp;_addText(it.content, _$parent12);
              }_chFunc(_node10);_$parent11.children.push(_node10);
            }_chFunc(_node9);_$parent10.children.push(_node9);
          }
        }_chFunc(_node8);_$parent9.children.push(_node8);
      }_$temp = _node2;{
        var _$parent13 = _$temp;var _node11 = { "attrs": {}, "tagName": "div", "sid": 10 };_node11.children = [];_node11.attrSize = 1;_node11.attrHash = 2025654205;_node11.attrs["w-class"] = "extra";_$temp = _node11;{
          var _$parent14 = _$temp;_addText(it.extraInfo, _$parent14);
        }_chFunc(_node11);_$parent13.children.push(_node11);
      }_$temp = _node2;{
        var _$parent15 = _$temp;var _node12 = { "attrs": {}, "tagName": "div", "sid": 11 };_node12.children = [];_node12.attrSize = 2;_node12.attrHash = 2713346874;_node12.attrs["w-class"] = "copy-btn";_node12.attrs["on-tap"] = "copyBtnClick";_$temp = _node12;{
          var _$parent16 = _$temp;_addText(it.copyBtnText, _$parent16);
        }_chFunc(_node12);_$parent15.children.push(_node12);
      }_chFunc(_node2);_$parent2.children.push(_node2);
    }_chFunc(_node);return _node;
  }
});