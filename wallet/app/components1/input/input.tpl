(function (_cfg, it, it1) {
  var _$temp = void 0,
      node = void 0;ty = it.itype == 'password' ? 'password' : 'text';_$temp = node;{
    var _$parent = _$temp;var _node = { "attrs": {}, "tagName": "div", "sid": 0 };_node.children = [];_node.attrSize = 2;_node.attrHash = 3347846371;{
      var attrvalue = "";attrvalue += "pi-input-box ";attrvalue += it.notUnderLine ? '' : 'input-focused-' + it1.focused;attrvalue += "";_node.attrs["w-class"] = attrvalue;
    }_node.attrHash = _hash.nextHash(_node.attrHash, _calTextHash(_node.attrs["w-class"]));_node.attrs["class"] = "pi-input";_$temp = _node;{
      var _$parent2 = _$temp;var _node2 = { "attrs": {}, "tagName": "input", "sid": 1 };_node2.children = [];_node2.attrSize = 12;_node2.attrHash = 2615367682;_node2.attrs["w-class"] = "pi-input__inner";{
        var _attrvalue = "";_attrvalue += it.style ? it.style : '';_attrvalue += "";_node2.attrs["style"] = _attrvalue;
      }_node2.attrHash = _hash.nextHash(_node2.attrHash, _calTextHash(_node2.attrs["style"]));{
        var _attrvalue2 = "";_attrvalue2 += ty;_attrvalue2 += "";_node2.attrs["type"] = _attrvalue2;
      }_node2.attrHash = _hash.nextHash(_node2.attrHash, _calTextHash(_node2.attrs["type"]));_node2.attrs["autocomplete"] = "off";{
        var _attrvalue3 = "";_attrvalue3 += it && it.placeHolder ? it.placeHolder : '';_attrvalue3 += "";_node2.attrs["placeholder"] = _attrvalue3;
      }_node2.attrHash = _hash.nextHash(_node2.attrHash, _calTextHash(_node2.attrs["placeholder"]));{
        var _attrvalue4 = "";_attrvalue4 += it1 && it1.currentValue ? it1.currentValue : '';_attrvalue4 += "";_node2.attrs["value"] = _attrvalue4;
      }_node2.attrHash = _hash.nextHash(_node2.attrHash, _calTextHash(_node2.attrs["value"]));{
        var _attrvalue5 = "";_attrvalue5 += it && it.maxLength ? it.maxLength : '';_attrvalue5 += "";_node2.attrs["maxlength"] = _attrvalue5;
      }_node2.attrHash = _hash.nextHash(_node2.attrHash, _calTextHash(_node2.attrs["maxlength"]));_node2.attrs["on-input"] = "change";_node2.attrs["on-blur"] = "onBlur";_node2.attrs["on-focus"] = "onFocus";_node2.attrs["on-compositionstart"] = "compositionstart";_node2.attrs["on-compositionend"] = "compositionend";_chFunc(_node2);_$parent2.children.push(_node2);
    }if (it1.showClear) {
      _$temp = _node;{
        var _$parent3 = _$temp;var _node3 = { "attrs": {}, "tagName": "img", "sid": 2 };_node3.children = [];_node3.childHash = 0;_node3.attrSize = 3;_node3.attrHash = 638254694;_node3.attrs["w-class"] = "clearBtn";_node3.attrs["src"] = "../../res/image/fail.png";_node3.attrs["on-tap"] = "clearClickListener";_$parent3.children.push(_node3);
      }
    }_chFunc(_node);return _node;
  }
});