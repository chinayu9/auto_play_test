(function (_cfg, it, it1) {
				var _$temp = void 0,
				    node = void 0;_$temp = node;{
								var _$parent = _$temp;var _node = { "attrs": {}, "tagName": "div", "sid": 0 };_node.children = [];_node.attrSize = 1;_node.attrHash = 1342790116;_node.attrs["w-class"] = "selectBox";_$temp = _node;{
												var _$parent2 = _$temp;var _node2 = { "attrs": {}, "tagName": "div", "sid": 1 };_node2.children = [];_node2.attrSize = 2;_node2.attrHash = 2606354590;_node2.attrs["w-class"] = "basicTop";_node2.attrs["on-tap"] = "showList";var item = it1.list[it1.selected];_$temp = _node2;{
																var _$parent3 = _$temp;var _node3 = { "attrs": {}, "tagName": "img", "sid": 2 };_node3.children = [];_node3.attrSize = 2;_node3.attrHash = 1005454929;{
																				var attrvalue = "";attrvalue = item.img;_node3.attrs["src"] = attrvalue;
																}_node3.attrHash = _hash.nextHash(_node3.attrHash, _calTextHash(_node3.attrs["src"]));_node3.attrs["style"] = "width: 50px;height: 50px;";_chFunc(_node3);_$parent3.children.push(_node3);
												}_$temp = _node2;{
																var _$parent4 = _$temp;var _node4 = { "attrs": {}, "tagName": "span", "sid": 3 };_node4.children = [];_node4.attrSize = 1;_node4.attrHash = 3939135354;_node4.attrs["w-class"] = "prepend";_$temp = _node4;{
																				var _$parent5 = _$temp;_addText(item.name, _$parent5);
																}_chFunc(_node4);_$parent4.children.push(_node4);
												}_$temp = _node2;{
																var _$parent6 = _$temp;var _node5 = { "attrs": {}, "tagName": "span", "sid": 4 };_node5.children = [];_node5.attrSize = 1;_node5.attrHash = 1060371481;_node5.attrs["w-class"] = "append";_$temp = _node5;{
																				var _$parent7 = _$temp;_addText(item.num, _$parent7);
																}_chFunc(_node5);_$parent6.children.push(_node5);
												}_$temp = _node2;{
																var _$parent8 = _$temp;var _node6 = { "attrs": {}, "tagName": "img", "sid": 5 };_node6.children = [];_node6.childHash = 0;_node6.attrSize = 2;_node6.attrHash = 2690647635;_node6.attrs["src"] = "../../res/image/15.png";_node6.attrs["style"] = "width: 40px;height: 40px;";_$parent8.children.push(_node6);
												}_chFunc(_node2);_$parent2.children.push(_node2);
								}if (it1.showList && !it.forceHide) {
												_$temp = _node;{
																var _$parent9 = _$temp;var _node7 = { "attrs": {}, "tagName": "div", "sid": 6 };_node7.children = [];_node7.attrSize = 1;_node7.attrHash = 4061725951;_node7.attrs["w-class"] = "new-code-bg";{
																				var _$i = 0;
																				for (var _iterator = it1.list, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator]();;) {
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
																								var ind = _$i++;_$temp = _node7;{
																												var _$parent10 = _$temp;var _node8 = { "attrs": {}, "tagName": "div", "sid": 7 };_node8.children = [];_node8.attrSize = 2;_node8.attrHash = 3155726807;_node8.attrs["w-class"] = "new-code";{
																																var _attrvalue = "";_attrvalue += "changeSelect(e,";_attrvalue += ind;_attrvalue += ")";_node8.attrs["on-tap"] = _attrvalue;
																												}_node8.attrHash = _hash.nextHash(_node8.attrHash, _calTextHash(_node8.attrs["on-tap"]));_$temp = _node8;{
																																var _$parent11 = _$temp;var _node9 = { "attrs": {}, "tagName": "img", "sid": 8 };_node9.children = [];_node9.attrSize = 2;_node9.attrHash = 1005454929;{
																																				var _attrvalue2 = "";_attrvalue2 = val.img;_node9.attrs["src"] = _attrvalue2;
																																}_node9.attrHash = _hash.nextHash(_node9.attrHash, _calTextHash(_node9.attrs["src"]));_node9.attrs["style"] = "width: 50px;height: 50px;";_chFunc(_node9);_$parent11.children.push(_node9);
																												}_$temp = _node8;{
																																var _$parent12 = _$temp;var _node10 = { "attrs": {}, "tagName": "span", "sid": 9 };_node10.children = [];_node10.attrSize = 1;_node10.attrHash = 3939135354;_node10.attrs["w-class"] = "prepend";_$temp = _node10;{
																																				var _$parent13 = _$temp;_addText(val.name, _$parent13);
																																}_chFunc(_node10);_$parent12.children.push(_node10);
																												}_$temp = _node8;{
																																var _$parent14 = _$temp;var _node11 = { "attrs": {}, "tagName": "span", "sid": 10 };_node11.children = [];_node11.attrSize = 2;_node11.attrHash = 1896609333;_node11.attrs["w-class"] = "append";{
																																				var _attrvalue3 = "";_attrvalue3 += "margin-right: ";_attrvalue3 += it1.selected == ind ? '40px' : '80px';_attrvalue3 += "";_node11.attrs["style"] = _attrvalue3;
																																}_node11.attrHash = _hash.nextHash(_node11.attrHash, _calTextHash(_node11.attrs["style"]));_$temp = _node11;{
																																				var _$parent15 = _$temp;_addText(val.num, _$parent15);
																																}_chFunc(_node11);_$parent14.children.push(_node11);
																												}if (it1.selected == ind) {
																																_$temp = _node8;{
																																				var _$parent16 = _$temp;var _node12 = { "attrs": {}, "tagName": "img", "sid": 11 };_node12.children = [];_node12.childHash = 0;_node12.attrSize = 2;_node12.attrHash = 1859648557;_node12.attrs["src"] = "../../res/image/16.png";_node12.attrs["style"] = "width: 40px;height: 40px;";_$parent16.children.push(_node12);
																																}
																												}_chFunc(_node8);_$parent10.children.push(_node8);
																								}
																				}
																}_chFunc(_node7);_$parent9.children.push(_node7);
												}
								}_chFunc(_node);return _node;
				}
});