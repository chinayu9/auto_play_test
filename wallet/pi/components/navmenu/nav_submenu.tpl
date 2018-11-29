(function (_cfg, it, it1) {
				var _$temp = void 0,
				    node = void 0;if (it.mod == "horizontal") {
								_$temp = node;{
												var _$parent = _$temp;var _node = { "attrs": {}, "tagName": "li", "sid": 0 };_node.children = [];_node.attrSize = 3;_node.attrHash = 3558042518;{
																var attrvalue = "";attrvalue += "nav-submenu ";attrvalue += it.isActivated ? 'is-active' : '';attrvalue += "";_node.attrs["class"] = attrvalue;
												}_node.attrHash = _hash.nextHash(_node.attrHash, _calTextHash(_node.attrs["class"]));_node.attrs["on-mouseover"] = "subMouseover";_node.attrs["on-mouseout"] = "subMouseout";_$temp = _node;{
																var _$parent2 = _$temp;var _node2 = { "attrs": {}, "tagName": "div", "sid": 1 };_node2.children = [];_node2.attrSize = 2;_node2.attrHash = 1086775298;{
																				var _attrvalue = "";_attrvalue += "nav-submenu__title ";_attrvalue += it.isdisabled ? 'is-disabled' : '';_attrvalue += "";_node2.attrs["class"] = _attrvalue;
																}_node2.attrHash = _hash.nextHash(_node2.attrHash, _calTextHash(_node2.attrs["class"]));{
																				var _attrvalue2 = "";_attrvalue2 += it.isopen ? 'color:black' : '';_attrvalue2 += ";";_node2.attrs["style"] = _attrvalue2;
																}_node2.attrHash = _hash.nextHash(_node2.attrHash, _calTextHash(_node2.attrs["style"]));_$temp = _node2;{
																				var _$parent3 = _$temp;_addText(it.subtitle, _$parent3);
																}_$temp = _node2;{
																				var _$parent4 = _$temp;var _node3 = { "attrs": {}, "tagName": "span", "sid": 2 };_node3.children = [];_node3.attrSize = 1;_node3.attrHash = 310407674;{
																								var _attrvalue3 = "";_attrvalue3 += "float: right;margin-left: 10px; ";_attrvalue3 += it.isopen ? 'transform:rotate(-90deg)' : 'transform:rotate(90deg)';_attrvalue3 += "";_node3.attrs["style"] = _attrvalue3;
																				}_node3.attrHash = _hash.nextHash(_node3.attrHash, _calTextHash(_node3.attrs["style"]));_$temp = _node3;{
																								var _$parent5 = _$temp;var _node4 = _installText(">", 2238180098);;
																								_$parent5.children.push(_node4);
																				}_chFunc(_node3);_$parent4.children.push(_node3);
																}_chFunc(_node2);_$parent2.children.push(_node2);
												}_$temp = _node;{
																var _$parent6 = _$temp;var _node5 = { "attrs": {}, "tagName": "div", "sid": 3 };_node5.children = [];_node5.attrSize = 2;_node5.attrHash = 3187609508;_node5.attrs["class"] = "nav-menu--horizontal";{
																				var _attrvalue4 = "";_attrvalue4 += "position:absolute; background-color:white; margin-top: 2px; top:";_attrvalue4 += it1.top + 'px';_attrvalue4 += "; left:";_attrvalue4 += it1.left + 'px';_attrvalue4 += "; display: ";_attrvalue4 += it.isopen ? 'block' : 'none';_attrvalue4 += ";";_node5.attrs["style"] = _attrvalue4;
																}_node5.attrHash = _hash.nextHash(_node5.attrHash, _calTextHash(_node5.attrs["style"]));_$temp = _node5;{
																				var _$parent7 = _$temp;var _node6 = { "attrs": {}, "tagName": "ul", "sid": 4 };_node6.children = [];_node6.attrSize = 1;_node6.attrHash = 75781944;_node6.attrs["class"] = "nav-menu nav-menu--popup nav-menu--popup-bottom-start";{
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
																												var index = _$i++;value.mod = it.mod;_$temp = _node6;{
																																var _$parent8 = _$temp;var _node7 = { "attrs": {}, "tagName": "navmenu_item$", "sid": 5 };_node7.hasChild = false;_node7.child = null;_node7.attrHash = 0;_$temp = _node7;{
																																				var _$parent9 = _$temp;_addJson(value, _$parent9);
																																}_chFunc(_node7);_$parent8.children.push(_node7);
																												}
																								}
																				}_chFunc(_node6);_$parent7.children.push(_node6);
																}_chFunc(_node5);_$parent6.children.push(_node5);
												}_chFunc(_node);return _node;
								}
				} else {
								_$temp = node;{
												var _$parent10 = _$temp;var _node8 = { "attrs": {}, "tagName": "li", "sid": 6 };_node8.children = [];_node8.attrHash = 0;_$temp = _node8;{
																var _$parent11 = _$temp;var _node9 = { "attrs": {}, "tagName": "div", "sid": 7 };_node9.children = [];_node9.attrSize = 3;_node9.attrHash = 4166232571;{
																				var _attrvalue5 = "";_attrvalue5 += "nav-submenu__title nav-menu-item ";_attrvalue5 += it.isdisabled ? 'is-disabled' : '';_attrvalue5 += "";_node9.attrs["class"] = _attrvalue5;
																}_node9.attrHash = _hash.nextHash(_node9.attrHash, _calTextHash(_node9.attrs["class"]));{
																				var _attrvalue6 = "";_attrvalue6 += "padding-left: ";_attrvalue6 += it.index.split("-").length * 20 + 'px';_attrvalue6 += "";_node9.attrs["style"] = _attrvalue6;
																}_node9.attrHash = _hash.nextHash(_node9.attrHash, _calTextHash(_node9.attrs["style"]));_node9.attrs["on-tap"] = "subClick";_$temp = _node9;{
																				var _$parent12 = _$temp;_addText(it.subtitle, _$parent12);
																}_$temp = _node9;{
																				var _$parent13 = _$temp;var _node10 = { "attrs": {}, "tagName": "span", "sid": 8 };_node10.children = [];_node10.attrSize = 1;_node10.attrHash = 2626211276;{
																								var _attrvalue7 = "";_attrvalue7 += "float: right;right: 20px; ";_attrvalue7 += it.isopen ? 'transform:rotate(-90deg)' : 'transform:rotate(90deg)';_attrvalue7 += "";_node10.attrs["style"] = _attrvalue7;
																				}_node10.attrHash = _hash.nextHash(_node10.attrHash, _calTextHash(_node10.attrs["style"]));_$temp = _node10;{
																								var _$parent14 = _$temp;var _node11 = _installText(">", 2238180098);;
																								_$parent14.children.push(_node11);
																				}_chFunc(_node10);_$parent13.children.push(_node10);
																}_chFunc(_node9);_$parent11.children.push(_node9);
												}_$temp = _node8;{
																var _$parent15 = _$temp;var _node12 = { "attrs": {}, "tagName": "ul", "sid": 9 };_node12.children = [];_node12.attrSize = 1;_node12.attrHash = 4044521962;{
																				var _attrvalue8 = "";_attrvalue8 += "nav-submenu ";_attrvalue8 += it.isopen ? 'is-open' : '';_attrvalue8 += "";_node12.attrs["class"] = _attrvalue8;
																}_node12.attrHash = _hash.nextHash(_node12.attrHash, _calTextHash(_node12.attrs["class"]));{
																				var _$i2 = 0;
																				for (var _iterator2 = it.arr, _isArray2 = Array.isArray(_iterator2), _i2 = 0, _iterator2 = _isArray2 ? _iterator2 : _iterator2[Symbol.iterator]();;) {
																								var _ref2;

																								if (_isArray2) {
																												if (_i2 >= _iterator2.length) break;
																												_ref2 = _iterator2[_i2++];
																								} else {
																												_i2 = _iterator2.next();
																												if (_i2.done) break;
																												_ref2 = _i2.value;
																								}

																								var _value = _ref2;
																								var _index = _$i2++;if (_value.submenu) {
																												_$temp = _node12;{
																																var _$parent16 = _$temp;var _node13 = { "attrs": {}, "tagName": "nav_submenu$", "sid": 10 };_node13.hasChild = false;_node13.child = null;_node13.attrHash = 0;_$temp = _node13;{
																																				var _$parent17 = _$temp;_addJson(_value, _$parent17);
																																}_chFunc(_node13);_$parent16.children.push(_node13);
																												}
																								} else {
																												_$temp = _node12;{
																																var _$parent18 = _$temp;var _node14 = { "attrs": {}, "tagName": "navmenu_item$", "sid": 11 };_node14.hasChild = false;_node14.child = null;_node14.attrHash = 0;_$temp = _node14;{
																																				var _$parent19 = _$temp;_addJson(_value, _$parent19);
																																}_chFunc(_node14);_$parent18.children.push(_node14);
																												}
																								}
																				}
																}_chFunc(_node12);_$parent15.children.push(_node12);
												}_chFunc(_node8);return _node8;
								}
				}
});