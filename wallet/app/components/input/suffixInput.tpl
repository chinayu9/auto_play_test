(function (_cfg, it, it1) {
  var _$temp = void 0,
      node = void 0;_$temp = node;{
    var _$parent = _$temp;var _node = { "attrs": {}, "tagName": "div", "sid": 0 };_node.children = [];_node.attrSize = 2;_node.attrHash = 993351889;{
      var attrvalue = "";attrvalue += "pi-input-box input-focused-";attrvalue += it1.focused;attrvalue += "";_node.attrs["w-class"] = attrvalue;
    }_node.attrHash = _hash.nextHash(_node.attrHash, _calTextHash(_node.attrs["w-class"]));_node.attrs["class"] = "pi-input";_$temp = _node;{
      var _$parent2 = _$temp;var _node2 = { "attrs": {}, "tagName": "input", "sid": 1 };_node2.children = [];_node2.attrSize = 10;_node2.attrHash = 4047304393;_node2.attrs["w-class"] = "pi-input__inner";_node2.attrs["class"] = "pi-input";{
        var _attrvalue = "";_attrvalue += it.style;_attrvalue += "";_node2.attrs["style"] = _attrvalue;
      }_node2.attrHash = _hash.nextHash(_node2.attrHash, _calTextHash(_node2.attrs["style"]));{
        var _attrvalue2 = "";_attrvalue2 += it.itype ? it.itype : 'text';_attrvalue2 += "";_node2.attrs["type"] = _attrvalue2;
      }_node2.attrHash = _hash.nextHash(_node2.attrHash, _calTextHash(_node2.attrs["type"]));_node2.attrs["autocomplete"] = "off";{
        var _attrvalue3 = "";_attrvalue3 += it.placeHolder;_attrvalue3 += "";_node2.attrs["placeholder"] = _attrvalue3;
      }_node2.attrHash = _hash.nextHash(_node2.attrHash, _calTextHash(_node2.attrs["placeholder"]));{
        var _attrvalue4 = "";_attrvalue4 += it1.currentValue;_attrvalue4 += "";_node2.attrs["value"] = _attrvalue4;
      }_node2.attrHash = _hash.nextHash(_node2.attrHash, _calTextHash(_node2.attrs["value"]));_node2.attrs["on-input"] = "change";_node2.attrs["on-blur"] = "blur";_node2.attrs["on-focus"] = "focus";_chFunc(_node2);_$parent2.children.push(_node2);
    }if (it1.showClear) {
      _$temp = _node;{
        var _$parent3 = _$temp;var _node3 = { "attrs": {}, "tagName": "img", "sid": 2 };_node3.children = [];_node3.attrSize = 3;_node3.attrHash = 836357084;_node3.attrs["w-class"] = "pi-input__suffix";{
          var _attrvalue5 = "";_attrvalue5 += "../../res/image/";_attrvalue5 += it.available ? 'icon_right2' : 'fail';_attrvalue5 += ".png";_node3.attrs["src"] = _attrvalue5;
        }_node3.attrHash = _hash.nextHash(_node3.attrHash, _calTextHash(_node3.attrs["src"]));_node3.attrs["on-tap"] = "clearClickListener";_chFunc(_node3);_$parent3.children.push(_node3);
      }
    }_chFunc(_node);return _node;
  }
});