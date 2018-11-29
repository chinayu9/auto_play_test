(function (_cfg, it, it1) {
  var _$temp = void 0,
      node = void 0;_$temp = node;{
    var _$parent = _$temp;var _node = { "attrs": {}, "tagName": "div", "sid": 0 };_node.children = [];_node.attrSize = 2;_node.attrHash = 2165143446;_node.attrs["w-class"] = "pi-collapse";_node.attrs["class"] = "pi-collapse";for (var index in it.htmlStrList) {
      var CollapseItem = it.htmlStrList[index];_$temp = _node;{
        var _$parent2 = _$temp;var _node2 = { "attrs": {}, "tagName": "div", "sid": 1 };_node2.children = [];_node2.attrSize = 1;_node2.attrHash = 2699674499;{
          var attrvalue = "";attrvalue += "pi-collapse-item ";attrvalue += it1.isExpanded(index) ? 'pi-collapse-item-active' : '';attrvalue += "";_node2.attrs["class"] = attrvalue;
        }_node2.attrHash = _hash.nextHash(_node2.attrHash, _calTextHash(_node2.attrs["class"]));_$temp = _node2;{
          var _$parent3 = _$temp;var _node3 = { "attrs": {}, "tagName": "div", "sid": 2 };_node3.children = [];_node3.attrSize = 2;_node3.attrHash = 1455118195;_node3.attrs["w-class"] = "pi-collapse-head";{
            var _attrvalue = "";_attrvalue += "clickItemListener(e,";_attrvalue += index;_attrvalue += ")";_node3.attrs["on-tap"] = _attrvalue;
          }_node3.attrHash = _hash.nextHash(_node3.attrHash, _calTextHash(_node3.attrs["on-tap"]));_$temp = _node3;{
            var _$parent4 = _$temp;var _node4 = { "attrs": {}, "tagName": "div", "sid": 3 };_node4.children = [];_node4.attrSize = 2;_node4.attrHash = 3405621749;{
              var _attrvalue2 = "";_attrvalue2 += "pi-collapse-title ";_attrvalue2 += it1.isExpanded(index) ? 'pi-collapse-title-avtive' : '';_attrvalue2 += "";_node4.attrs["w-class"] = _attrvalue2;
            }_node4.attrHash = _hash.nextHash(_node4.attrHash, _calTextHash(_node4.attrs["w-class"]));_node4.attrs["class"] = "pi-collapse-title";_$temp = _node4;{
              var _$parent5 = _$temp;_addText(CollapseItem.title, _$parent5);
            }_chFunc(_node4);_$parent4.children.push(_node4);
          }_$temp = _node3;{
            var _$parent6 = _$temp;var _node5 = { "attrs": {}, "tagName": "i", "sid": 4 };_node5.children = [];_node5.attrSize = 2;_node5.attrHash = 2540713776;_node5.attrs["class"] = "pi-collapse-arrow";{
              var _attrvalue3 = "";_attrvalue3 += "pi-collapse-arrow ";_attrvalue3 += it1.isExpanded(index) ? 'pi-collapse-arrow-rotate' : '';_attrvalue3 += "";_node5.attrs["w-class"] = _attrvalue3;
            }_node5.attrHash = _hash.nextHash(_node5.attrHash, _calTextHash(_node5.attrs["w-class"]));_chFunc(_node5);_$parent6.children.push(_node5);
          }_chFunc(_node3);_$parent3.children.push(_node3);
        }_$temp = _node2;{
          var _$parent7 = _$temp;var _node6 = { "attrs": {}, "tagName": "div", "sid": 5 };_node6.children = [];_node6.attrSize = 3;_node6.attrHash = 4150672671;{
            var _attrvalue4 = "";_attrvalue4 += "pi-collapse-item-panel ";_attrvalue4 += it1.isExpanded(index) ? 'pi-collapse-item-panel-border' : '';_attrvalue4 += "";_node6.attrs["w-class"] = _attrvalue4;
          }_node6.attrHash = _hash.nextHash(_node6.attrHash, _calTextHash(_node6.attrs["w-class"]));_node6.attrs["class"] = "pi-collapse-item-panel";_node6.attrs["style"] = "";_$temp = _node6;{
            var _$parent8 = _$temp;var _node7 = { "attrs": {}, "tagName": "widget", "sid": 6 };_node7.hasChild = false;_node7.child = null;_node7.attrSize = 1;_node7.attrHash = 1181035845;_node7.attrs["w-tag"] = "ui-html$$$";_node7.tagName = _node7.attrs["w-tag"];_node7.attrs["w-class"] = "pi-collapse-item-content";_$temp = _node7;{
              var _$parent9 = _$temp;_addJson(CollapseItem.htmlStr, _$parent9);
            }_chFunc(_node7);_$parent8.children.push(_node7);
          }_chFunc(_node6);_$parent7.children.push(_node6);
        }_chFunc(_node2);_$parent2.children.push(_node2);
      }
    }_chFunc(_node);return _node;
  }
});