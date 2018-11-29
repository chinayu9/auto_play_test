(function (_cfg, it, it1) {
  var _$temp = void 0,
      node = void 0;_$temp = node;{
    var _$parent = _$temp;var _node = { "attrs": {}, "tagName": "div", "sid": 0 };_node.children = [];_node.attrSize = 1;_node.attrHash = 1250095831;_node.attrs["w-class"] = "modal-mask";_$temp = _node;{
      var _$parent2 = _$temp;var _node2 = { "attrs": {}, "tagName": "div", "sid": 1 };_node2.children = [];_node2.attrSize = 1;_node2.attrHash = 4252679546;_node2.attrs["w-class"] = "body";_$temp = _node2;{
        var _$parent3 = _$temp;var _node3 = { "attrs": {}, "tagName": "img", "sid": 2 };_node3.children = [];_node3.childHash = 0;_node3.attrSize = 2;_node3.attrHash = 1729429996;_node3.attrs["src"] = "../../../res/image/redEnvBack.png";_node3.attrs["style"] = "height: auto;width: 100%;position: fixed;";_$parent3.children.push(_node3);
      }_$temp = _node2;{
        var _$parent4 = _$temp;var _node4 = { "attrs": {}, "tagName": "img", "sid": 3 };_node4.children = [];_node4.childHash = 0;_node4.attrSize = 3;_node4.attrHash = 2754346098;_node4.attrs["w-class"] = "clear";_node4.attrs["src"] = "../../../res/image/30_gray.png";_node4.attrs["on-tap"] = "backPrePage";_$parent4.children.push(_node4);
      }_$temp = _node2;{
        var _$parent5 = _$temp;var _node5 = { "attrs": {}, "tagName": "div", "sid": 4 };_node5.children = [];_node5.attrSize = 1;_node5.attrHash = 1019047777;_node5.attrs["w-class"] = "title";_$temp = _node5;{
          var _$parent6 = _$temp;_addText(it.message, _$parent6);
        }_chFunc(_node5);_$parent5.children.push(_node5);
      }_$temp = _node2;{
        var _$parent7 = _$temp;var _node6 = { "attrs": {}, "tagName": "div", "sid": 5 };_node6.children = [];_node6.attrSize = 1;_node6.attrHash = 487306359;_node6.attrs["w-class"] = "content";_$temp = _node6;{
          var _$parent8 = _$temp;_addText(it1.tag, _$parent8);
        }_chFunc(_node6);_$parent7.children.push(_node6);
      }_$temp = _node2;{
        var _$parent9 = _$temp;var _node7 = { "attrs": {}, "tagName": "div", "sid": 6 };_node7.children = [];_node7.attrSize = 1;_node7.attrHash = 2590122910;_node7.attrs["style"] = "position: absolute;margin-top: 590px;text-align: center;width: 100%;";_$temp = _node7;{
          var _$parent10 = _$temp;var _node8 = { "attrs": {}, "tagName": "img", "sid": 7 };_node8.children = [];_node8.attrSize = 3;_node8.attrHash = 3783803573;{
            var attrvalue = "";attrvalue += "sendRedBtn ";attrvalue += it1.openClick ? 'sendRedBtnClick' : '';attrvalue += "";_node8.attrs["w-class"] = attrvalue;
          }_node8.attrHash = _hash.nextHash(_node8.attrHash, _calTextHash(_node8.attrs["w-class"]));_node8.attrs["src"] = "../../../res/image/openRedEnv.png";_node8.attrs["on-tap"] = "openRedEnv";_chFunc(_node8);_$parent10.children.push(_node8);
        }_chFunc(_node7);_$parent9.children.push(_node7);
      }_chFunc(_node2);_$parent2.children.push(_node2);
    }_chFunc(_node);return _node;
  }
});