(function (_cfg, it, it1) {
				var _$temp = void 0,
				    node = void 0;_$temp = node;{
								var _$parent = _$temp;var _node = { "attrs": {}, "tagName": "div", "sid": 0 };_node.children = [];_node.attrSize = 1;_node.attrHash = 3090186721;_node.attrs["w-class"] = "groupcard";_$temp = _node;{
												var _$parent2 = _$temp;var _node2 = { "attrs": {}, "tagName": "div", "sid": 1 };_node2.children = [];_node2.attrSize = 1;_node2.attrHash = 3392658171;_node2.attrs["w-class"] = "threedata";{
																var _$i = 0;
																for (var _iterator = it.name, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator]();;) {
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
																				var ind = _$i++;_$temp = _node2;{
																								var _$parent3 = _$temp;var _node3 = { "attrs": {}, "tagName": "div", "sid": 2 };_node3.children = [];_node3.attrSize = 1;_node3.attrHash = 1243630088;_node3.attrs["w-class"] = "data";_$temp = _node3;{
																												var _$parent4 = _$temp;var _node4 = { "attrs": {}, "tagName": "div", "sid": 3 };_node4.children = [];_node4.attrSize = 1;_node4.attrHash = 126758747;_node4.attrs["w-class"] = "data-title";_$temp = _node4;{
																																var _$parent5 = _$temp;var _node5 = { "attrs": {}, "tagName": "pi-ui-lang", "sid": 4 };_node5.hasChild = false;_node5.child = null;_node5.attrHash = 0;_$temp = _node5;{
																																				var _$parent6 = _$temp;_addJson(val, _$parent6);
																																}_chFunc(_node5);_$parent5.children.push(_node5);
																												}_chFunc(_node4);_$parent4.children.push(_node4);
																								}_$temp = _node3;{
																												var _$parent7 = _$temp;var _node6 = { "attrs": {}, "tagName": "div", "sid": 5 };_node6.children = [];_node6.attrSize = 2;_node6.attrHash = 1733593987;_node6.attrs["w-class"] = "data-num";{
																																var attrvalue = "";attrvalue += it.style;attrvalue += "";_node6.attrs["style"] = attrvalue;
																												}_node6.attrHash = _hash.nextHash(_node6.attrHash, _calTextHash(_node6.attrs["style"]));_$temp = _node6;{
																																var _$parent8 = _$temp;_addText(it.data[ind], _$parent8);
																												}_chFunc(_node6);_$parent7.children.push(_node6);
																								}_chFunc(_node3);_$parent3.children.push(_node3);
																				}if (it.name.length - 1 > ind) {
																								_$temp = _node2;{
																												var _$parent9 = _$temp;var _node7 = { "attrs": {}, "tagName": "span", "sid": 6 };_node7.children = [];_node7.childHash = 2946814719;_node7.attrSize = 1;_node7.attrHash = 374818280;_node7.attrs["w-class"] = "line";_$parent9.children.push(_node7);
																								}
																				}
																}
												}_chFunc(_node2);_$parent2.children.push(_node2);
								}_chFunc(_node);return _node;
				}
});