(function (_cfg, it, it1) {
				var _$temp = void 0,
				    node = void 0;_$temp = node;{
								var _$parent = _$temp;var _node = { "attrs": {}, "tagName": "div", "sid": 0 };_node.children = [];_node.attrSize = 3;_node.attrHash = 1644616334;_node.attrs["class"] = "new-page";_node.attrs["w-class"] = "body";_node.attrs["id"] = "keyboard";_$temp = _node;{
												var _$parent2 = _$temp;var _node2 = { "attrs": {}, "tagName": "div", "sid": 1 };_node2.children = [];_node2.childHash = 2946814719;_node2.attrSize = 1;_node2.attrHash = 2619352664;_node2.attrs["w-class"] = "top";_$parent2.children.push(_node2);
								}_$temp = _node;{
												var _$parent3 = _$temp;var _node3 = { "attrs": {}, "tagName": "div", "sid": 2 };_node3.children = [];_node3.attrSize = 1;_node3.attrHash = 832204064;_node3.attrs["w-class"] = "bottom";_$temp = _node3;{
																var _$parent4 = _$temp;var _node4 = { "attrs": {}, "tagName": "div", "sid": 3 };_node4.children = [];_node4.attrSize = 1;_node4.attrHash = 1019047777;_node4.attrs["w-class"] = "title";_$temp = _node4;{
																				var _$parent5 = _$temp;var _node5 = { "attrs": {}, "tagName": "div", "sid": 4 };_node5.children = [];_node5.attrSize = 1;_node5.attrHash = 2183033217;_node5.attrs["style"] = "text-align: center;width: 100%";_$temp = _node5;{
																								var _$parent6 = _$temp;_addText(it.title, _$parent6);
																				}_chFunc(_node5);_$parent5.children.push(_node5);
																}if (it1.closePage) {
																				_$temp = _node4;{
																								var _$parent7 = _$temp;var _node6 = { "attrs": {}, "tagName": "img", "sid": 5 };_node6.children = [];_node6.childHash = 0;_node6.attrSize = 3;_node6.attrHash = 1934757365;_node6.attrs["src"] = "../../res/image/30_gray.png";_node6.attrs["w-class"] = "close";_node6.attrs["on-tap"] = "close";_$parent7.children.push(_node6);
																				}
																}_chFunc(_node4);_$parent4.children.push(_node4);
												}_$temp = _node3;{
																var _$parent8 = _$temp;var _node7 = { "attrs": {}, "tagName": "div", "sid": 6 };_node7.children = [];_node7.attrSize = 1;_node7.attrHash = 291134231;_node7.attrs["w-class"] = "dots";{
																				var _$i = 0;
																				for (var _iterator = it1.defArr, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator]();;) {
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
																												var _$parent9 = _$temp;var _node8 = { "attrs": {}, "tagName": "div", "sid": 7 };_node8.children = [];_node8.attrSize = 1;_node8.attrHash = 3148671402;{
																																var attrvalue = "";attrvalue += "oneDot ";attrvalue += it1.pswArr[ind] >= 0 ? 'dotActive' : '';attrvalue += "";_node8.attrs["w-class"] = attrvalue;
																												}_node8.attrHash = _hash.nextHash(_node8.attrHash, _calTextHash(_node8.attrs["w-class"]));_chFunc(_node8);_$parent9.children.push(_node8);
																								}
																				}
																}_chFunc(_node7);_$parent8.children.push(_node7);
												}_$temp = _node3;{
																var _$parent10 = _$temp;var _node9 = { "attrs": {}, "tagName": "div", "sid": 8 };_node9.children = [];_node9.attrSize = 1;_node9.attrHash = 2106451213;_node9.attrs["w-class"] = "numbers";{
																				var _$i2 = 0;
																				for (var _iterator2 = it1.numbers, _isArray2 = Array.isArray(_iterator2), _i2 = 0, _iterator2 = _isArray2 ? _iterator2 : _iterator2[Symbol.iterator]();;) {
																								var _ref2;

																								if (_isArray2) {
																												if (_i2 >= _iterator2.length) break;
																												_ref2 = _iterator2[_i2++];
																								} else {
																												_i2 = _iterator2.next();
																												if (_i2.done) break;
																												_ref2 = _i2.value;
																								}

																								var _val = _ref2;
																								var _ind = _$i2++;_$temp = _node9;{
																												var _$parent11 = _$temp;var _node10 = { "attrs": {}, "tagName": "div", "sid": 9 };_node10.children = [];_node10.attrSize = 2;_node10.attrHash = 640507250;{
																																var _attrvalue = "";_attrvalue += "oneNum ";_attrvalue += (_ind + 1) % 3 == 0 ? '' : 'oneNumMore';_attrvalue += "";_node10.attrs["w-class"] = _attrvalue;
																												}_node10.attrHash = _hash.nextHash(_node10.attrHash, _calTextHash(_node10.attrs["w-class"]));{
																																var _attrvalue2 = "";_attrvalue2 += "boardItemClick(";_attrvalue2 += _ind;_attrvalue2 += ")";_node10.attrs["on-down"] = _attrvalue2;
																												}_node10.attrHash = _hash.nextHash(_node10.attrHash, _calTextHash(_node10.attrs["on-down"]));if (_val == 'x') {
																																_$temp = _node10;{
																																				var _$parent12 = _$temp;var _node11 = { "attrs": {}, "tagName": "img", "sid": 10 };_node11.children = [];_node11.childHash = 0;_node11.attrSize = 1;_node11.attrHash = 3032448198;_node11.attrs["src"] = "../../res/image1/delete_lock.png";_$parent12.children.push(_node11);
																																}
																												} else {
																																_$temp = _node10;{
																																				var _$parent13 = _$temp;_addText(_val, _$parent13);
																																}
																												}_chFunc(_node10);_$parent11.children.push(_node10);
																								}
																				}
																}_chFunc(_node9);_$parent10.children.push(_node9);
												}_chFunc(_node3);_$parent3.children.push(_node3);
								}_chFunc(_node);return _node;
				}
});