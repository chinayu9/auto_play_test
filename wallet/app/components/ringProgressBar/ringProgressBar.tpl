(function (_cfg, it, it1) {var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };


  var _$temp = void 0,
      node = void 0;_$temp = node;{
    var _$parent = _$temp;var _node = { "attrs": {}, "tagName": "div", "sid": 0 };_node.children = [];_node.attrSize = 2;_node.attrHash = 39820461;_node.attrs["w-class"] = "box";{
      var attrvalue = "";attrvalue += "width: ";attrvalue += it.width;attrvalue += "px;height: ";attrvalue += it.width;attrvalue += "px;backgroundColor: #dddddd;";_node.attrs["style"] = attrvalue;
    }_node.attrHash = _hash.nextHash(_node.attrHash, _calTextHash(_node.attrs["style"]));_$temp = _node;{
      var _$parent2 = _$temp;var _node2 = { "attrs": {}, "tagName": "div", "sid": 1 };_node2.children = [];_node2.attrSize = 2;_node2.attrHash = 2353769753;_node2.attrs["w-class"] = "clip";{
        var _attrvalue = "";_attrvalue += "width: ";_attrvalue += it.width;_attrvalue += "px;height: ";_attrvalue += it.width;_attrvalue += "px;border: ";_attrvalue += it.borderWidth;_attrvalue += "px solid #dddddd;clip:";_attrvalue += it.activePercent >= 0.5 ? 'auto' : 'rect(0, ' + it.width + 'px,' + it.width + 'px,' + it.width / 2 + 'px)';_attrvalue += ";transform: rotateY(180deg);";_node2.attrs["style"] = _attrvalue;
      }_node2.attrHash = _hash.nextHash(_node2.attrHash, _calTextHash(_node2.attrs["style"]));_$temp = _node2;{
        var _$parent3 = _$temp;var _node3 = { "attrs": {}, "tagName": "div", "sid": 2 };_node3.children = [];_node3.attrSize = 2;_node3.attrHash = 3004581251;_node3.attrs["w-class"] = "left";{
          var _attrvalue2 = "";_attrvalue2 += "width: ";_attrvalue2 += it.width;_attrvalue2 += "px;height: ";_attrvalue2 += it.width;_attrvalue2 += "px;border: ";_attrvalue2 += it.borderWidth;_attrvalue2 += "px solid ";_attrvalue2 += it.activeColor;_attrvalue2 += ";clip: rect(0, ";_attrvalue2 += it.width / 2;_attrvalue2 += "px, ";_attrvalue2 += it.width;_attrvalue2 += "px, 0);top:";_attrvalue2 += -it.borderWidth;_attrvalue2 += "px;left:";_attrvalue2 += -it.borderWidth;_attrvalue2 += "px;transform:rotate(";_attrvalue2 += Math.ceil(it.activePercent * 360);_attrvalue2 += "deg);";_node3.attrs["style"] = _attrvalue2;
        }_node3.attrHash = _hash.nextHash(_node3.attrHash, _calTextHash(_node3.attrs["style"]));_chFunc(_node3);_$parent3.children.push(_node3);
      }_$temp = _node2;{
        var _$parent4 = _$temp;var _node4 = { "attrs": {}, "tagName": "div", "sid": 3 };_node4.children = [];_node4.attrSize = 2;_node4.attrHash = 1402948400;_node4.attrs["w-class"] = "right";{
          var _attrvalue3 = "";_attrvalue3 += "width: ";_attrvalue3 += it.activePercent >= 0.5 ? it.width : 0;_attrvalue3 += "px;height: ";_attrvalue3 += it.width;_attrvalue3 += "px;border: ";_attrvalue3 += it.borderWidth;_attrvalue3 += "px solid ";_attrvalue3 += it.activeColor;_attrvalue3 += ";clip: rect(0, ";_attrvalue3 += it.width;_attrvalue3 += "px, ";_attrvalue3 += it.width;_attrvalue3 += "px, ";_attrvalue3 += it.width / 2;_attrvalue3 += "px);top:";_attrvalue3 += -it.borderWidth;_attrvalue3 += "px;left:";_attrvalue3 += -it.borderWidth;_attrvalue3 += "px;";_node4.attrs["style"] = _attrvalue3;
        }_node4.attrHash = _hash.nextHash(_node4.attrHash, _calTextHash(_node4.attrs["style"]));_chFunc(_node4);_$parent4.children.push(_node4);
      }_chFunc(_node2);_$parent2.children.push(_node2);
    }_$temp = _node;{
      var _$parent5 = _$temp;var _node5 = { "attrs": {}, "tagName": "div", "sid": 4 };_node5.children = [];_node5.attrSize = 2;_node5.attrHash = 1552495205;_node5.attrs["w-class"] = "text";{
        var _attrvalue4 = "";_attrvalue4 += it.centerStyle;_attrvalue4 += ";width: ";_attrvalue4 += it.width - it.borderWidth * 2;_attrvalue4 += "px;height:";_attrvalue4 += it.width - it.borderWidth * 2;_attrvalue4 += "px;color:";_attrvalue4 += it.activePercent > 0 ? it.activeColor : '#888888';_attrvalue4 += "";_node5.attrs["style"] = _attrvalue4;
      }_node5.attrHash = _hash.nextHash(_node5.attrHash, _calTextHash(_node5.attrs["style"]));if (it.centerText && it.centerText != "") {
        if (_typeof(it.centerText) === 'object') {
          _$temp = _node5;{
            var _$parent6 = _$temp;var _node6 = { "attrs": {}, "tagName": "pi-ui-lang", "sid": 5 };_node6.hasChild = false;_node6.child = null;_node6.attrHash = 0;_$temp = _node6;{
              var _$parent7 = _$temp;_addJson(it.centerText, _$parent7);
            }_chFunc(_node6);_$parent6.children.push(_node6);
          }
        } else {
          _$temp = _node5;{
            var _$parent8 = _$temp;_addText(it.centerText, _$parent8);
          }
        }
      } else {
        _$temp = _node5;{
          var _$parent9 = _$temp;_addText(it.activePercent * 100 + "%", _$parent9);
        }
      }_chFunc(_node5);_$parent5.children.push(_node5);
    }_chFunc(_node);return _node;
  }
});