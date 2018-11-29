(function (_cfg, it, it1) {var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };


  var _$temp = void 0,
      node = void 0;_$temp = node;{
    var _$parent = _$temp;var _node = { "attrs": {}, "tagName": "div", "sid": 0 };_node.children = [];_node.attrSize = 2;_node.attrHash = 1195718865;_node.attrs["w-class"] = "item";{
      var attrvalue = "";attrvalue += it.style ? it.style : '';attrvalue += "";_node.attrs["style"] = attrvalue;
    }_node.attrHash = _hash.nextHash(_node.attrHash, _calTextHash(_node.attrs["style"]));_$temp = _node;{
      var _$parent2 = _$temp;var _node2 = { "attrs": {}, "tagName": "span", "sid": 1 };_node2.children = [];_node2.attrSize = 1;_node2.attrHash = 136397174;_node2.attrs["w-class"] = "itemName";_$temp = _node2;{
        var _$parent3 = _$temp;var _node3 = { "attrs": {}, "tagName": "pi-ui-lang", "sid": 2 };_node3.hasChild = false;_node3.child = null;_node3.attrHash = 0;_$temp = _node3;{
          var _$parent4 = _$temp;_addJson(it.name, _$parent4);
        }_chFunc(_node3);_$parent3.children.push(_node3);
      }_chFunc(_node2);_$parent2.children.push(_node2);
    }if (it.describe) {
      if (typeof it.describe === 'string') {
        _$temp = _node;{
          var _$parent5 = _$temp;var _node4 = { "attrs": {}, "tagName": "span", "sid": 3 };_node4.children = [];_node4.attrSize = 1;_node4.attrHash = 3942496064;_node4.attrs["w-class"] = "itemDesc";_$temp = _node4;{
            var _$parent6 = _$temp;_addText(it.describe, _$parent6);
          }_chFunc(_node4);_$parent5.children.push(_node4);
        }
      } else if (_typeof(it.describe) === 'object') {
        _$temp = _node;{
          var _$parent7 = _$temp;var _node5 = { "attrs": {}, "tagName": "span", "sid": 4 };_node5.children = [];_node5.attrSize = 1;_node5.attrHash = 3942496064;_node5.attrs["w-class"] = "itemDesc";_$temp = _node5;{
            var _$parent8 = _$temp;var _node6 = { "attrs": {}, "tagName": "pi-ui-lang", "sid": 5 };_node6.hasChild = false;_node6.child = null;_node6.attrHash = 0;_$temp = _node6;{
              var _$parent9 = _$temp;_addJson(it.describe, _$parent9);
            }_chFunc(_node6);_$parent8.children.push(_node6);
          }_chFunc(_node5);_$parent7.children.push(_node5);
        }
      }
    }_$temp = _node;{
      var _$parent10 = _$temp;var _node7 = { "attrs": {}, "tagName": "img", "sid": 6 };_node7.children = [];_node7.childHash = 0;_node7.attrSize = 2;_node7.attrHash = 1857632460;_node7.attrs["src"] = "app/res/image/right_arrow2_gray.png";_node7.attrs["w-class"] = "itemImg";_$parent10.children.push(_node7);
    }_chFunc(_node);return _node;
  }
});