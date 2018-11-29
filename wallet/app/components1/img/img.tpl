(function (_cfg, it, it1) {
  var _$temp = void 0,
      node = void 0;_$temp = node;{
    var _$parent = _$temp;var _node = { "attrs": {}, "tagName": "div", "sid": 0 };_node.children = [];_node.attrSize = 2;_node.attrHash = 2137281523;_node.attrs["w-class"] = 'imgShow';{
      var attrvalue = "";attrvalue += "background-image:url(";attrvalue += it.imgURL;attrvalue += ");width: ";attrvalue += it.width;attrvalue += ";height: ";attrvalue += it.height ? it.height : it.width;attrvalue += ";display: ";attrvalue += it.inline ? 'block' : 'inline-block';attrvalue += ";border-radius: ";attrvalue += it.notRound ? '0' : '50%';attrvalue += "";_node.attrs["style"] = attrvalue;
    }_node.attrHash = _hash.nextHash(_node.attrHash, _calTextHash(_node.attrs["style"]));_chFunc(_node);return _node;
  }
});