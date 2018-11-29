(function (_cfg, it, it1) {
  var _$temp = void 0,
      node = void 0;_$temp = node;{
    var _$parent = _$temp;var _node = { "attrs": {}, "tagName": "div", "sid": 0 };_node.children = [];_node.attrSize = 4;_node.attrHash = 3227617681;{
      var attrvalue = "";attrvalue += "pi-input ";attrvalue += it.prepend || it.append ? 'pi-input-group' : '';attrvalue += "";_node.attrs["class"] = attrvalue;
    }_node.attrHash = _hash.nextHash(_node.attrHash, _calTextHash(_node.attrs["class"]));{
      var _attrvalue = "";_attrvalue += "pi-input ";_attrvalue += it.prepend || it.append ? 'pi-input-group' : '';_attrvalue += "";_node.attrs["w-class"] = _attrvalue;
    }_node.attrHash = _hash.nextHash(_node.attrHash, _calTextHash(_node.attrs["w-class"]));_node.attrs["on-mouseover"] = "mouseover";_node.attrs["on-mouseleave"] = "mouseleave";_$temp = _node;{
      var _$parent2 = _$temp;var _node2 = { "attrs": {}, "tagName": "div", "sid": 1 };_node2.children = [];_node2.attrSize = 1;_node2.attrHash = 964736543;_node2.attrs["w-class"] = "pi-input-box";_$temp = _node2;{
        var _$parent3 = _$temp;var _node3 = { "attrs": {}, "tagName": "textarea", "sid": 2 };_node3.children = [];_node3.attrSize = 11;_node3.attrHash = 2454407338;{
          var _attrvalue2 = "";_attrvalue2 += it && it.disabled ? 'pi-input-textarea__inner-disabled' : 'pi-input-textarea__inner';_attrvalue2 += "";_node3.attrs["class"] = _attrvalue2;
        }_node3.attrHash = _hash.nextHash(_node3.attrHash, _calTextHash(_node3.attrs["class"]));{
          var _attrvalue3 = "";_attrvalue3 += it && it.disabled ? 'pi-textarea__inner-disabled' : 'pi-textarea__inner';_attrvalue3 += " ";_node3.attrs["w-class"] = _attrvalue3;
        }_node3.attrHash = _hash.nextHash(_node3.attrHash, _calTextHash(_node3.attrs["w-class"]));{
          var _attrvalue4 = "";_attrvalue4 += it1.styleStr;_attrvalue4 += "";_node3.attrs["style"] = _attrvalue4;
        }_node3.attrHash = _hash.nextHash(_node3.attrHash, _calTextHash(_node3.attrs["style"]));{
          var _attrvalue5 = "";_attrvalue5 += it && it.placeHolder ? it.placeHolder : '';_attrvalue5 += "";_node3.attrs["placeholder"] = _attrvalue5;
        }_node3.attrHash = _hash.nextHash(_node3.attrHash, _calTextHash(_node3.attrs["placeholder"]));{
          var _attrvalue6 = "";_attrvalue6 += it1 && it1.currentValue ? it1.currentValue : '';_attrvalue6 += "";_node3.attrs["value"] = _attrvalue6;
        }_node3.attrHash = _hash.nextHash(_node3.attrHash, _calTextHash(_node3.attrs["value"]));{
          var _attrvalue7 = "";_attrvalue7 = it && it.disabled ? true : false;_node3.attrs["disabled"] = _attrvalue7;
        }_node3.attrHash = _hash.nextHash(_node3.attrHash, _calTextHash(_node3.attrs["disabled"]));{
          var _attrvalue8 = "";_attrvalue8 = it && it.autofocus ? true : false;_node3.attrs["autofocus"] = _attrvalue8;
        }_node3.attrHash = _hash.nextHash(_node3.attrHash, _calTextHash(_node3.attrs["autofocus"]));_node3.attrs["on-input"] = "change";_node3.attrs["on-blur"] = "blur";_node3.attrs["on-focus"] = "focus";if (it && it.autosize) {
          _node3.attrs["rows"] = "2";_node3.attrHash = _hash.nextHash(_node3.attrHash, _calTextHash("2"));
        } else {
          {
            var _attrvalue9 = "";_attrvalue9 += it && it.rows ? it.rows : '2';_attrvalue9 += "";_node3.attrs["rows"] = _attrvalue9;
          }_node3.attrHash = _hash.nextHash(_node3.attrHash, _calTextHash(_node3.attrs["rows"]));_node3.attrHash = _hash.nextHash(_node3.attrHash, _calTextHash(null));
        }_$temp = _node3;{
          var _$parent4 = _$temp;_addText(it1 && it1.currentValue ? it1.currentValue : '', _$parent4);
        }_chFunc(_node3);_$parent3.children.push(_node3);
      }_chFunc(_node2);_$parent2.children.push(_node2);
    }_chFunc(_node);return _node;
  }
});