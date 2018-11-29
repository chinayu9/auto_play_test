(function (_cfg, it, it1) {
				var _$temp = void 0,
				    node = void 0;_$temp = node;{
								var _$parent = _$temp;var _node = { "attrs": {}, "tagName": "div", "sid": 0 };_node.children = [];_node.attrSize = 2;_node.attrHash = 2165143446;_node.attrs["w-class"] = "pi-collapse";_node.attrs["class"] = "pi-collapse";{
												var _$i = 0;
												for (var _iterator = it.collapseList, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator]();;) {
																var _ref;

																if (_isArray) {
																				if (_i >= _iterator.length) break;
																				_ref = _iterator[_i++];
																} else {
																				_i = _iterator.next();
																				if (_i.done) break;
																				_ref = _i.value;
																}

																var CollapseItem = _ref;
																var index = _$i++;_$temp = _node;{
																				var _$parent2 = _$temp;var _node2 = { "attrs": {}, "tagName": "div", "sid": 1 };_node2.children = [];_node2.attrSize = 2;_node2.attrHash = 1104898287;{
																								var attrvalue = "";attrvalue += "pi-collapse-item ";attrvalue += it1.isExpanded(index) ? 'pi-collapse-item-active' : '';attrvalue += "";_node2.attrs["class"] = attrvalue;
																				}_node2.attrHash = _hash.nextHash(_node2.attrHash, _calTextHash(_node2.attrs["class"]));_node2.attrs["w-class"] = "pi-collapse-item";_$temp = _node2;{
																								var _$parent3 = _$temp;var _node3 = { "attrs": {}, "tagName": "div", "sid": 2 };_node3.children = [];_node3.attrSize = 3;_node3.attrHash = 2016907946;_node3.attrs["w-class"] = "pi-collapse-head";{
																												var _attrvalue = "";_attrvalue += "clickItemListener(e,";_attrvalue += index;_attrvalue += ")";_node3.attrs["on-tap"] = _attrvalue;
																								}_node3.attrHash = _hash.nextHash(_node3.attrHash, _calTextHash(_node3.attrs["on-tap"]));_node3.attrs["class"] = "pi-collapse-head";_$temp = _node3;{
																												var _$parent4 = _$temp;var _node4 = { "attrs": {}, "tagName": "div", "sid": 3 };_node4.children = [];_node4.attrSize = 1;_node4.attrHash = 1080844995;_node4.attrs["w-class"] = "ga-icon-container";_$temp = _node4;{
																																var _$parent5 = _$temp;var _node5 = { "attrs": {}, "tagName": "img", "sid": 4 };_node5.children = [];_node5.attrSize = 2;_node5.attrHash = 1013694684;{
																																				var _attrvalue2 = "";_attrvalue2 += CollapseItem.icon;_attrvalue2 += "";_node5.attrs["src"] = _attrvalue2;
																																}_node5.attrHash = _hash.nextHash(_node5.attrHash, _calTextHash(_node5.attrs["src"]));_node5.attrs["w-class"] = "ga-icon";_chFunc(_node5);_$parent5.children.push(_node5);
																												}_chFunc(_node4);_$parent4.children.push(_node4);
																								}_$temp = _node3;{
																												var _$parent6 = _$temp;var _node6 = { "attrs": {}, "tagName": "div", "sid": 5 };_node6.children = [];_node6.attrSize = 2;_node6.attrHash = 1190610236;_node6.attrs["w-class"] = "pi-collapse-title";_node6.attrs["class"] = "pi-collapse-title";_$temp = _node6;{
																																var _$parent7 = _$temp;_addText(CollapseItem.title, _$parent7);
																												}_chFunc(_node6);_$parent6.children.push(_node6);
																								}_$temp = _node3;{
																												var _$parent8 = _$temp;var _node7 = { "attrs": {}, "tagName": "img", "sid": 6 };_node7.children = [];_node7.attrSize = 2;_node7.attrHash = 757182430;_node7.attrs["src"] = "app/res/image/right_arrow2_gray.png";{
																																var _attrvalue3 = "";_attrvalue3 += "pi-collapse-arrow ";_attrvalue3 += it1.isExpanded(index) ? 'pi-collapse-arrow-rotate' : '';_attrvalue3 += "";_node7.attrs["w-class"] = _attrvalue3;
																												}_node7.attrHash = _hash.nextHash(_node7.attrHash, _calTextHash(_node7.attrs["w-class"]));_chFunc(_node7);_$parent8.children.push(_node7);
																								}_chFunc(_node3);_$parent3.children.push(_node3);
																				}_$temp = _node2;{
																								var _$parent9 = _$temp;var _node8 = { "attrs": {}, "tagName": "div", "sid": 7 };_node8.children = [];_node8.attrSize = 2;_node8.attrHash = 3977751271;{
																												var _attrvalue4 = "";_attrvalue4 += "pi-collapse-item-panel ";_attrvalue4 += it1.isExpanded(index) ? 'pi-collapse-item-panel-border' : '';_attrvalue4 += "";_node8.attrs["w-class"] = _attrvalue4;
																								}_node8.attrHash = _hash.nextHash(_node8.attrHash, _calTextHash(_node8.attrs["w-class"]));_node8.attrs["class"] = "pi-collapse-item-panel";{
																												var _$i2 = 0;
																												for (var _iterator2 = CollapseItem.textList, _isArray2 = Array.isArray(_iterator2), _i2 = 0, _iterator2 = _isArray2 ? _iterator2 : _iterator2[Symbol.iterator]();;) {
																																var _ref2;

																																if (_isArray2) {
																																				if (_i2 >= _iterator2.length) break;
																																				_ref2 = _iterator2[_i2++];
																																} else {
																																				_i2 = _iterator2.next();
																																				if (_i2.done) break;
																																				_ref2 = _i2.value;
																																}

																																var item = _ref2;
																																var index0 = _$i2++;_$temp = _node8;{
																																				var _$parent10 = _$temp;var _node9 = { "attrs": {}, "tagName": "div", "sid": 8 };_node9.children = [];_node9.attrSize = 3;_node9.attrHash = 3047885587;_node9.attrs["w-class"] = "pi-collapse-text-item";_node9.attrs["class"] = "pi-collapse-text-item";{
																																								var _attrvalue5 = "";_attrvalue5 += "itemClick(e,";_attrvalue5 += index;_attrvalue5 += ",";_attrvalue5 += index0;_attrvalue5 += ")";_node9.attrs["on-tap"] = _attrvalue5;
																																				}_node9.attrHash = _hash.nextHash(_node9.attrHash, _calTextHash(_node9.attrs["on-tap"]));_$temp = _node9;{
																																								var _$parent11 = _$temp;var _node10 = { "attrs": {}, "tagName": "div", "sid": 9 };_node10.children = [];_node10.attrSize = 2;_node10.attrHash = 2854004529;_node10.attrs["w-class"] = "pi-collapse-text";_node10.attrs["class"] = "pi-collapse-text";_$temp = _node10;{
																																												var _$parent12 = _$temp;_addText(item.addr, _$parent12);
																																								}_$temp = _node10;{
																																												var _$parent13 = _$temp;var _node11 = { "attrs": {}, "tagName": "p", "sid": 10 };_node11.children = [];_node11.attrSize = 1;_node11.attrHash = 14946502;_node11.attrs["style"] = "margin-top: 20px;";_$temp = _node11;{
																																																var _$parent14 = _$temp;_addText(item.balance, _$parent14);
																																												}_chFunc(_node11);_$parent13.children.push(_node11);
																																								}_chFunc(_node10);_$parent11.children.push(_node10);
																																				}_chFunc(_node9);_$parent10.children.push(_node9);
																																}
																												}
																								}_chFunc(_node8);_$parent9.children.push(_node8);
																				}_chFunc(_node2);_$parent2.children.push(_node2);
																}
												}
								}_chFunc(_node);return _node;
				}
});