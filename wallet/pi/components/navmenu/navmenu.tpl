(function (_cfg, it, it1) {
				var _$temp = void 0,
				    node = void 0;_$temp = node;{
								var _$parent = _$temp;var _node = { "attrs": {}, "tagName": "ul", "sid": 0 };_node.children = [];_node.attrSize = 3;_node.attrHash = 1540423300;{
												var attrvalue = "";attrvalue += "nav-menu nav-menu--";attrvalue += it.mod == 'horizontal' ? 'horizontal' : 'vertical';attrvalue += "";_node.attrs["class"] = attrvalue;
								}_node.attrHash = _hash.nextHash(_node.attrHash, _calTextHash(_node.attrs["class"]));{
												var _attrvalue = "";_attrvalue += it.mod == 'horizontal' ? 'doClick1' : 'doClick';_attrvalue += "";_node.attrs["ev-navmenu-click"] = _attrvalue;
								}_node.attrHash = _hash.nextHash(_node.attrHash, _calTextHash(_node.attrs["ev-navmenu-click"]));{
												var _attrvalue2 = "";_attrvalue2 += "min-width: 240px; width:";_attrvalue2 += it.mod == 'horizontal' ? 'auto' : '240px';_attrvalue2 += "; ";_node.attrs["style"] = _attrvalue2;
								}_node.attrHash = _hash.nextHash(_node.attrHash, _calTextHash(_node.attrs["style"]));{
												var _$i = 0;
												for (var _iterator = it.arr, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator]();;) {
																var _ref;

																if (_isArray) {
																				if (_i >= _iterator.length) break;
																				_ref = _iterator[_i++];
																} else {
																				_i = _iterator.next();
																				if (_i.done) break;
																				_ref = _i.value;
																}

																var value = _ref;
																var index = _$i++;if (value.submenu) {
																				value.mod = it.mod;_$temp = _node;{
																								var _$parent2 = _$temp;var _node2 = { "attrs": {}, "tagName": "nav_submenu$", "sid": 1 };_node2.hasChild = false;_node2.child = null;_node2.attrHash = 0;_$temp = _node2;{
																												var _$parent3 = _$temp;_addJson(value, _$parent3);
																								}_chFunc(_node2);_$parent2.children.push(_node2);
																				}
																} else {
																				_$temp = _node;{
																								var _$parent4 = _$temp;var _node3 = { "attrs": {}, "tagName": "navmenu_item$", "sid": 2 };_node3.hasChild = false;_node3.child = null;_node3.attrHash = 0;_$temp = _node3;{
																												var _$parent5 = _$temp;_addJson(value, _$parent5);
																								}_chFunc(_node3);_$parent4.children.push(_node3);
																				}
																}
												}
								}_chFunc(_node);return _node;
				}
});