(function (_cfg, it, it1) {
  var _$temp = void 0,
      node = void 0;_$temp = node;{
    var _$parent = _$temp;var _node = { "attrs": {}, "tagName": "div", "sid": 0 };_node.children = [];_node.attrSize = 2;_node.attrHash = 2983613905;_node.attrs["w-class"] = "pi-input-box";_node.attrs["class"] = "pi-input";_$temp = _node;{
      var _$parent2 = _$temp;var _node2 = { "attrs": {}, "tagName": "input", "sid": 1 };_node2.children = [];_node2.attrSize = 11;_node2.attrHash = 3594315369;{
        var attrvalue = "";attrvalue += "pi-input__inner ";attrvalue += it.disabled ? 'pi-input__inner-disabled' : '';attrvalue += "";_node2.attrs["w-class"] = attrvalue;
      }_node2.attrHash = _hash.nextHash(_node2.attrHash, _calTextHash(_node2.attrs["w-class"]));_node2.attrs["class"] = "pi-input";{
        var _attrvalue = "";_attrvalue += it.style;_attrvalue += "";_node2.attrs["style"] = _attrvalue;
      }_node2.attrHash = _hash.nextHash(_node2.attrHash, _calTextHash(_node2.attrs["style"]));{
        var _attrvalue2 = "";_attrvalue2 += it.itype ? it.itype : 'text';_attrvalue2 += "";_node2.attrs["type"] = _attrvalue2;
      }_node2.attrHash = _hash.nextHash(_node2.attrHash, _calTextHash(_node2.attrs["type"]));_node2.attrs["autocomplete"] = "off";{
        var _attrvalue3 = "";_attrvalue3 += it.placeHolder ? it.placeHolder : '';_attrvalue3 += "";_node2.attrs["placeholder"] = _attrvalue3;
      }_node2.attrHash = _hash.nextHash(_node2.attrHash, _calTextHash(_node2.attrs["placeholder"]));{
        var _attrvalue4 = "";_attrvalue4 += it1.currentValue;_attrvalue4 += "";_node2.attrs["value"] = _attrvalue4;
      }_node2.attrHash = _hash.nextHash(_node2.attrHash, _calTextHash(_node2.attrs["value"]));{
        var _attrvalue5 = "";_attrvalue5 = it.disabled ? true : false;_node2.attrs["disabled"] = _attrvalue5;
      }_node2.attrHash = _hash.nextHash(_node2.attrHash, _calTextHash(_node2.attrs["disabled"]));_node2.attrs["on-input"] = "change";_node2.attrs["on-blur"] = "blur";_node2.attrs["on-focus"] = "focus";_chFunc(_node2);_$parent2.children.push(_node2);
    }_chFunc(_node);return _node;
  }
});