(function (_cfg, it, it1) {
  var _$temp = void 0,
      node = void 0;_$temp = node;{
    var _$parent = _$temp;var _node = { "attrs": {}, "tagName": "lable", "sid": 0 };_node.children = [];_node.attrSize = 3;_node.attrHash = 2541659173;{
      var attrvalue = "";attrvalue += it.checkedIndex === it.labelIndex ? 'pi-radio-checked' : 'pi-radio';attrvalue += "";_node.attrs["w-class"] = attrvalue;
    }_node.attrHash = _hash.nextHash(_node.attrHash, _calTextHash(_node.attrs["w-class"]));{
      var _attrvalue = "";_attrvalue += it.checkedIndex === it.labelIndex ? 'pi-radio is-checked' : 'pi-radio';_attrvalue += " ";_attrvalue += it.disabled ? 'is-disabled' : '';_attrvalue += "";_node.attrs["class"] = _attrvalue;
    }_node.attrHash = _hash.nextHash(_node.attrHash, _calTextHash(_node.attrs["class"]));_node.attrs["on-tap"] = "clickListenter";_$temp = _node;{
      var _$parent2 = _$temp;var _node2 = { "attrs": {}, "tagName": "span", "sid": 1 };_node2.children = [];_node2.attrSize = 1;_node2.attrHash = 2670794274;_node2.attrs["w-class"] = "pi-radio__input";_$temp = _node2;{
        var _$parent3 = _$temp;var _node3 = { "attrs": {}, "tagName": "span", "sid": 2 };_node3.children = [];_node3.attrSize = 2;_node3.attrHash = 3238080718;{
          var _attrvalue2 = "";_attrvalue2 += it.checkedIndex === it.labelIndex ? 'pi-radio__inner-checked' : 'pi-radio__inner';_attrvalue2 += " ";_attrvalue2 += it.disabled ? 'is-disabled' : '';_attrvalue2 += "";_node3.attrs["w-class"] = _attrvalue2;
        }_node3.attrHash = _hash.nextHash(_node3.attrHash, _calTextHash(_node3.attrs["w-class"]));_node3.attrs["class"] = "pi-radio__inner";_chFunc(_node3);_$parent3.children.push(_node3);
      }_chFunc(_node2);_$parent2.children.push(_node2);
    }_$temp = _node;{
      var _$parent4 = _$temp;var _node4 = { "attrs": {}, "tagName": "span", "sid": 3 };_node4.children = [];_node4.attrSize = 1;_node4.attrHash = 2255571891;{
        var _attrvalue3 = "";_attrvalue3 += it.disabled ? 'pi-radio__label-disabled' : 'pi-radio__label';_attrvalue3 += "";_node4.attrs["w-class"] = _attrvalue3;
      }_node4.attrHash = _hash.nextHash(_node4.attrHash, _calTextHash(_node4.attrs["w-class"]));_$temp = _node4;{
        var _$parent5 = _$temp;_addText(it.text, _$parent5);
      }_chFunc(_node4);_$parent4.children.push(_node4);
    }_chFunc(_node);return _node;
  }
});