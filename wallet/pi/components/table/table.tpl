(function (_cfg, it, it1) {
				var _$temp = void 0,
				    node = void 0;_$temp = node;{
								var _$parent = _$temp;var _node = { "attrs": {}, "tagName": "div", "sid": 0 };_node.children = [];_node.attrHash = 0;if (it.title) {
												_$temp = _node;{
																var _$parent2 = _$temp;var _node2 = { "attrs": {}, "tagName": "div", "sid": 1 };_node2.children = [];_node2.attrSize = 1;_node2.attrHash = 2255765435;{
																				var attrvalue = "";attrvalue += "header ";attrvalue += it.showBoder ? 'header_boder' : '';attrvalue += "";_node2.attrs["w-class"] = attrvalue;
																}_node2.attrHash = _hash.nextHash(_node2.attrHash, _calTextHash(_node2.attrs["w-class"]));_$temp = _node2;{
																				var _$parent3 = _$temp;var _node3 = { "attrs": {}, "tagName": "table", "sid": 2 };_node3.children = [];_node3.attrSize = 1;_node3.attrHash = 3130861821;_node3.attrs["w-class"] = "table";_$temp = _node3;{
																								var _$parent4 = _$temp;var _node4 = { "attrs": {}, "tagName": "thead", "sid": 3 };_node4.children = [];_node4.attrSize = 1;_node4.attrHash = 1030010182;_node4.attrs["w-class"] = "has-gutter";_$temp = _node4;{
																												var _$parent5 = _$temp;var _node5 = { "attrs": {}, "tagName": "tr", "sid": 4 };_node5.children = [];_node5.attrSize = 1;_node5.attrHash = 3412332816;{
																																var _attrvalue = "";_attrvalue += "tr ";_attrvalue += it.showBoder ? 'tr_boder' : '';_attrvalue += "";_node5.attrs["w-class"] = _attrvalue;
																												}_node5.attrHash = _hash.nextHash(_node5.attrHash, _calTextHash(_node5.attrs["w-class"]));{
																																var _$i = 0;
																																for (var _iterator = it.title, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator]();;) {
																																				var _ref;

																																				if (_isArray) {
																																								if (_i >= _iterator.length) break;
																																								_ref = _iterator[_i++];
																																				} else {
																																								_i = _iterator.next();
																																								if (_i.done) break;
																																								_ref = _i.value;
																																				}

																																				var v = _ref;
																																				var i = _$i++;_$temp = _node5;{
																																								var _$parent6 = _$temp;var _node6 = { "attrs": {}, "tagName": "th", "sid": 5 };_node6.children = [];_node6.attrSize = 3;_node6.attrHash = 1552342857;_node6.attrs["colspan"] = "1";_node6.attrs["rowspan"] = "1";{
																																												var _attrvalue2 = "";_attrvalue2 += "is-leaf th ";_attrvalue2 += it.showBoder ? 'th_boder' : '';_attrvalue2 += "";_node6.attrs["w-class"] = _attrvalue2;
																																								}_node6.attrHash = _hash.nextHash(_node6.attrHash, _calTextHash(_node6.attrs["w-class"]));_$temp = _node6;{
																																												var _$parent7 = _$temp;var _node7 = { "attrs": {}, "tagName": "div", "sid": 6 };_node7.children = [];_node7.attrSize = 1;_node7.attrHash = 1085712240;_node7.attrs["w-class"] = "cell";_$temp = _node7;{
																																																var _$parent8 = _$temp;_addText(v, _$parent8);
																																												}_chFunc(_node7);_$parent7.children.push(_node7);
																																								}_chFunc(_node6);_$parent6.children.push(_node6);
																																				}
																																}
																												}_chFunc(_node5);_$parent5.children.push(_node5);
																								}_chFunc(_node4);_$parent4.children.push(_node4);
																				}_chFunc(_node3);_$parent3.children.push(_node3);
																}_chFunc(_node2);_$parent2.children.push(_node2);
												}
								}_$temp = _node;{
												var _$parent9 = _$temp;var _node8 = { "attrs": {}, "tagName": "div", "sid": 7 };_node8.children = [];_node8.attrSize = 2;_node8.attrHash = 3665592387;{
																var _attrvalue3 = "";_attrvalue3 += "body ";_attrvalue3 += it.showBoder ? 'body_boder' : '';_attrvalue3 += "";_node8.attrs["w-class"] = _attrvalue3;
												}_node8.attrHash = _hash.nextHash(_node8.attrHash, _calTextHash(_node8.attrs["w-class"]));{
																var _attrvalue4 = "";_attrvalue4 += it.maxHeight ? 'max-height: ' + it.maxHeight + 'px;overflow-y: auto;-webkit-overflow-scrolling: touch;' : '';_attrvalue4 += "";_node8.attrs["style"] = _attrvalue4;
												}_node8.attrHash = _hash.nextHash(_node8.attrHash, _calTextHash(_node8.attrs["style"]));_$temp = _node8;{
																var _$parent10 = _$temp;var _node9 = { "attrs": {}, "tagName": "table", "sid": 8 };_node9.children = [];_node9.attrSize = 1;_node9.attrHash = 3130861821;_node9.attrs["w-class"] = "table";_$temp = _node9;{
																				var _$parent11 = _$temp;var _node10 = { "attrs": {}, "tagName": "tbody", "sid": 9 };_node10.children = [];_node10.attrHash = 0;{
																								var _$i2 = 0;
																								for (var _iterator2 = it.datas, _isArray2 = Array.isArray(_iterator2), _i2 = 0, _iterator2 = _isArray2 ? _iterator2 : _iterator2[Symbol.iterator]();;) {
																												var _ref2;

																												if (_isArray2) {
																																if (_i2 >= _iterator2.length) break;
																																_ref2 = _iterator2[_i2++];
																												} else {
																																_i2 = _iterator2.next();
																																if (_i2.done) break;
																																_ref2 = _i2.value;
																												}

																												var _v = _ref2;
																												var _i3 = _$i2++;_$temp = _node10;{
																																var _$parent12 = _$temp;var _node11 = { "attrs": {}, "tagName": "tr", "sid": 10 };_node11.children = [];_node11.attrSize = 1;_node11.attrHash = 3327540845;{
																																				var _attrvalue5 = "";_attrvalue5 += "row ";_attrvalue5 += it.showBoder ? 'row_boder' : '';_attrvalue5 += "";_node11.attrs["w-class"] = _attrvalue5;
																																}_node11.attrHash = _hash.nextHash(_node11.attrHash, _calTextHash(_node11.attrs["w-class"]));{
																																				var _$i3 = 0;
																																				for (var _iterator3 = _v, _isArray3 = Array.isArray(_iterator3), _i4 = 0, _iterator3 = _isArray3 ? _iterator3 : _iterator3[Symbol.iterator]();;) {
																																								var _ref3;

																																								if (_isArray3) {
																																												if (_i4 >= _iterator3.length) break;
																																												_ref3 = _iterator3[_i4++];
																																								} else {
																																												_i4 = _iterator3.next();
																																												if (_i4.done) break;
																																												_ref3 = _i4.value;
																																								}

																																								var v1 = _ref3;
																																								var i1 = _$i3++;_$temp = _node11;{
																																												var _$parent13 = _$temp;var _node12 = { "attrs": {}, "tagName": "td", "sid": 11 };_node12.children = [];_node12.attrSize = 1;_node12.attrHash = 3984042862;{
																																																var _attrvalue6 = "";_attrvalue6 += "is-leaf td ";_attrvalue6 += it.showBoder ? 'td_boder' : '';_attrvalue6 += "";_node12.attrs["w-class"] = _attrvalue6;
																																												}_node12.attrHash = _hash.nextHash(_node12.attrHash, _calTextHash(_node12.attrs["w-class"]));_$temp = _node12;{
																																																var _$parent14 = _$temp;var _node13 = { "attrs": {}, "tagName": "div", "sid": 12 };_node13.children = [];_node13.attrSize = 1;_node13.attrHash = 1085712240;_node13.attrs["w-class"] = "cell";_$temp = _node13;{
																																																				var _$parent15 = _$temp;_addText(v1, _$parent15);
																																																}_chFunc(_node13);_$parent14.children.push(_node13);
																																												}_chFunc(_node12);_$parent13.children.push(_node12);
																																								}
																																				}
																																}_chFunc(_node11);_$parent12.children.push(_node11);
																												}
																								}
																				}_chFunc(_node10);_$parent11.children.push(_node10);
																}_chFunc(_node9);_$parent10.children.push(_node9);
												}_chFunc(_node8);_$parent9.children.push(_node8);
								}_chFunc(_node);return _node;
				}
});