(function (_cfg, it, it1) {
				var _$temp = void 0,
				    node = void 0;_$temp = node;{
								var _$parent = _$temp;var _node = { "attrs": {}, "tagName": "div", "sid": 0 };_node.children = [];_node.attrSize = 1;_node.attrHash = 448228483;_node.attrs["w-class"] = "itemGroup";{
												var _$i = 0;
												for (var _iterator = it.list, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator]();;) {
																var _ref;

																if (_isArray) {
																				if (_i >= _iterator.length) break;
																				_ref = _iterator[_i++];
																} else {
																				_i = _iterator.next();
																				if (_i.done) break;
																				_ref = _i.value;
																}

																var val = _ref;
																var ind = _$i++;_$temp = _node;{
																				var _$parent2 = _$temp;var _node2 = { "attrs": {}, "tagName": "div", "sid": 1 };_node2.children = [];_node2.attrSize = 2;_node2.attrHash = 3467833438;_node2.attrs["w-class"] = "item";{
																								var attrvalue = "";attrvalue += "changeSelect(e,";attrvalue += ind;attrvalue += ")";_node2.attrs["on-tap"] = attrvalue;
																				}_node2.attrHash = _hash.nextHash(_node2.attrHash, _calTextHash(_node2.attrs["on-tap"]));_$temp = _node2;{
																								var _$parent3 = _$temp;var _node3 = { "attrs": {}, "tagName": "span", "sid": 2 };_node3.children = [];_node3.attrSize = 1;_node3.attrHash = 3711312999;_node3.attrs["style"] = "flex: 1";_$temp = _node3;{
																												var _$parent4 = _$temp;_addText(val, _$parent4);
																								}_chFunc(_node3);_$parent3.children.push(_node3);
																				}if (it1.selected == ind) {
																								_$temp = _node2;{
																												var _$parent5 = _$temp;var _node4 = { "attrs": {}, "tagName": "img", "sid": 3 };_node4.children = [];_node4.childHash = 0;_node4.attrSize = 2;_node4.attrHash = 1859648557;_node4.attrs["src"] = "../../res/image/16.png";_node4.attrs["style"] = "width: 40px;height: 40px;";_$parent5.children.push(_node4);
																								}
																				}_chFunc(_node2);_$parent2.children.push(_node2);
																}
												}
								}_chFunc(_node);return _node;
				}
});