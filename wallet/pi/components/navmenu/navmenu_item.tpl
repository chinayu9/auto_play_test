(function (_cfg, it, it1) {
				var _$temp = void 0,
				    node = void 0;_$temp = node;{
								var _$parent = _$temp;var _node = { "attrs": {}, "tagName": "div", "sid": 0 };_node.children = [];_node.attrHash = 0;if (it.submenu) {
												_$temp = _node;{
																var _$parent2 = _$temp;var _node2 = { "attrs": {}, "tagName": "li", "sid": 1 };_node2.children = [];_node2.attrSize = 3;_node2.attrHash = 3329479828;_node2.attrs["class"] = "nav-submenu";_node2.attrs["on-mouseover"] = "itemMouseover";_node2.attrs["on-mouseout"] = "itemMouseout";_$temp = _node2;{
																				var _$parent3 = _$temp;var _node3 = { "attrs": {}, "tagName": "div", "sid": 2 };_node3.children = [];_node3.attrSize = 2;_node3.attrHash = 248529051;{
																								var attrvalue = "";attrvalue += "nav-menu-item ";attrvalue += it.isActivated ? 'is-active' : '';attrvalue += " ";attrvalue += it.isdisabled ? 'is-disabled' : '';attrvalue += "";_node3.attrs["class"] = attrvalue;
																				}_node3.attrHash = _hash.nextHash(_node3.attrHash, _calTextHash(_node3.attrs["class"]));{
																								var _attrvalue = "";_attrvalue += it1.isopen ? 'color:black' : '';_attrvalue += ";";_node3.attrs["style"] = _attrvalue;
																				}_node3.attrHash = _hash.nextHash(_node3.attrHash, _calTextHash(_node3.attrs["style"]));_$temp = _node3;{
																								var _$parent4 = _$temp;_addText(it.subtitle, _$parent4);
																				}_$temp = _node3;{
																								var _$parent5 = _$temp;var _node4 = { "attrs": {}, "tagName": "span", "sid": 3 };_node4.children = [];_node4.attrSize = 1;_node4.attrHash = 2626211276;{
																												var _attrvalue2 = "";_attrvalue2 += "float: right;right: 20px; ";_attrvalue2 += it1.isopen ? 'transform:rotate(180deg)' : '';_attrvalue2 += "";_node4.attrs["style"] = _attrvalue2;
																								}_node4.attrHash = _hash.nextHash(_node4.attrHash, _calTextHash(_node4.attrs["style"]));_$temp = _node4;{
																												var _$parent6 = _$temp;var _node5 = _installText(">", 2238180098);;
																												_$parent6.children.push(_node5);
																								}_chFunc(_node4);_$parent5.children.push(_node4);
																				}_chFunc(_node3);_$parent3.children.push(_node3);
																}_$temp = _node2;{
																				var _$parent7 = _$temp;var _node6 = { "attrs": {}, "tagName": "div", "sid": 4 };_node6.children = [];_node6.attrSize = 1;_node6.attrHash = 2239199073;{
																								var _attrvalue3 = "";_attrvalue3 += "position: absolute;margin-left: 4px; left:";_attrvalue3 += it1.left + 'px';_attrvalue3 += "; top:";_attrvalue3 += it1.top + 'px';_attrvalue3 += "; display:";_attrvalue3 += it1.isopen ? 'block' : 'none';_attrvalue3 += ";";_node6.attrs["style"] = _attrvalue3;
																				}_node6.attrHash = _hash.nextHash(_node6.attrHash, _calTextHash(_node6.attrs["style"]));_$temp = _node6;{
																								var _$parent8 = _$temp;var _node7 = { "attrs": {}, "tagName": "ul", "sid": 5 };_node7.children = [];_node7.attrSize = 1;_node7.attrHash = 75781944;_node7.attrs["class"] = "nav-menu nav-menu--popup nav-menu--popup-bottom-start";{
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
																																var index = _$i++;value.mod = it.mod;_$temp = _node7;{
																																				var _$parent9 = _$temp;var _node8 = { "attrs": {}, "tagName": "navmenu_item$", "sid": 6 };_node8.hasChild = false;_node8.child = null;_node8.attrHash = 0;_$temp = _node8;{
																																								var _$parent10 = _$temp;_addJson(value, _$parent10);
																																				}_chFunc(_node8);_$parent9.children.push(_node8);
																																}
																												}
																								}_chFunc(_node7);_$parent8.children.push(_node7);
																				}_chFunc(_node6);_$parent7.children.push(_node6);
																}_chFunc(_node2);_$parent2.children.push(_node2);
												}
								} else if (it.mod == "horizontal") {
												_$temp = _node;{
																var _$parent11 = _$temp;var _node9 = { "attrs": {}, "tagName": "li", "sid": 7 };_node9.children = [];_node9.attrSize = 2;_node9.attrHash = 2556772732;{
																				var _attrvalue4 = "";_attrvalue4 += "nav-menu-item ";_attrvalue4 += it.isActivated ? 'is-active' : '';_attrvalue4 += " ";_attrvalue4 += it.isdisabled ? 'is-disabled' : '';_attrvalue4 += "";_node9.attrs["class"] = _attrvalue4;
																}_node9.attrHash = _hash.nextHash(_node9.attrHash, _calTextHash(_node9.attrs["class"]));_node9.attrs["on-tap"] = "doClick";_$temp = _node9;{
																				var _$parent12 = _$temp;_addText(it.title, _$parent12);
																}_chFunc(_node9);_$parent11.children.push(_node9);
												}
								} else {
												_$temp = _node;{
																var _$parent13 = _$temp;var _node10 = { "attrs": {}, "tagName": "li", "sid": 8 };_node10.children = [];_node10.attrSize = 3;_node10.attrHash = 2093970286;{
																				var _attrvalue5 = "";_attrvalue5 += "nav-menu-item ";_attrvalue5 += it.isActivated ? 'is-active' : '';_attrvalue5 += " ";_attrvalue5 += it.isdisabled ? 'is-disabled' : '';_attrvalue5 += "";_node10.attrs["class"] = _attrvalue5;
																}_node10.attrHash = _hash.nextHash(_node10.attrHash, _calTextHash(_node10.attrs["class"]));{
																				var _attrvalue6 = "";_attrvalue6 += "padding-left: ";_attrvalue6 += it.index.split("-").length * 20 + 'px';_attrvalue6 += "";_node10.attrs["style"] = _attrvalue6;
																}_node10.attrHash = _hash.nextHash(_node10.attrHash, _calTextHash(_node10.attrs["style"]));_node10.attrs["on-tap"] = "doClick";_$temp = _node10;{
																				var _$parent14 = _$temp;_addText(it.title, _$parent14);
																}_chFunc(_node10);_$parent13.children.push(_node10);
												}
								}_chFunc(_node);return _node;
				}
});