(function (_cfg, it, it1) {
				var _$temp = void 0,
				    node = void 0;_$temp = node;{
								var _$parent = _$temp;var _node = { "attrs": {}, "tagName": "div", "sid": 0 };_node.children = [];_node.attrSize = 1;_node.attrHash = 1357694229;{
												var attrvalue = "";attrvalue += "base base-";attrvalue += it.type;attrvalue += "";_node.attrs["w-class"] = attrvalue;
								}_node.attrHash = _hash.nextHash(_node.attrHash, _calTextHash(_node.attrs["w-class"]));{
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

																var v = _ref;
																var i = _$i++;var isLast = i >= it.list.length - 1;_$temp = _node;{
																				var _$parent2 = _$temp;var _node2 = { "attrs": {}, "tagName": "div", "sid": 1 };_node2.children = [];_node2.attrSize = 1;_node2.attrHash = 1603879122;{
																								var _attrvalue = "";_attrvalue += isLast ? 'each-last' : 'each-normal';_attrvalue += " is-";_attrvalue += v.status;_attrvalue += " each-";_attrvalue += it.type;_attrvalue += "";_node2.attrs["w-class"] = _attrvalue;
																				}_node2.attrHash = _hash.nextHash(_node2.attrHash, _calTextHash(_node2.attrs["w-class"]));_$temp = _node2;{
																								var _$parent3 = _$temp;var _node3 = { "attrs": {}, "tagName": "div", "sid": 2 };_node3.children = [];_node3.attrSize = 1;_node3.attrHash = 3605200885;_node3.attrs["w-class"] = "head";if (!isLast) {
																												_$temp = _node3;{
																																var _$parent4 = _$temp;var _node4 = { "attrs": {}, "tagName": "div", "sid": 3 };_node4.children = [];_node4.attrSize = 1;_node4.attrHash = 3405578722;{
																																				var _attrvalue2 = "";_attrvalue2 += "line-";_attrvalue2 += it.type;_attrvalue2 += "";_node4.attrs["w-class"] = _attrvalue2;
																																}_node4.attrHash = _hash.nextHash(_node4.attrHash, _calTextHash(_node4.attrs["w-class"]));_$temp = _node4;{
																																				var _$parent5 = _$temp;var _node5 = { "attrs": {}, "tagName": "i", "sid": 4 };_node5.children = [];_node5.childHash = 2946814719;_node5.attrSize = 1;_node5.attrHash = 2821760928;_node5.attrs["w-class"] = "line-inner";_$parent5.children.push(_node5);
																																}_chFunc(_node4);_$parent4.children.push(_node4);
																												}
																								}_$temp = _node3;{
																												var _$parent6 = _$temp;var _node6 = { "attrs": {}, "tagName": "div", "sid": 5 };_node6.children = [];_node6.attrSize = 1;_node6.attrHash = 3126711008;_node6.attrs["w-class"] = "icon";_$temp = _node6;{
																																var _$parent7 = _$temp;var _node7 = { "attrs": {}, "tagName": "span", "sid": 6 };_node7.children = [];_node7.attrSize = 1;_node7.attrHash = 762798687;_node7.attrs["w-class"] = "icon-inner";_$temp = _node7;{
																																				var _$parent8 = _$temp;_addText(v.status == "success" ? "√" : i + 1, _$parent8);
																																}_chFunc(_node7);_$parent7.children.push(_node7);
																												}_chFunc(_node6);_$parent6.children.push(_node6);
																								}_chFunc(_node3);_$parent3.children.push(_node3);
																				}_$temp = _node2;{
																								var _$parent9 = _$temp;var _node8 = { "attrs": {}, "tagName": "div", "sid": 7 };_node8.children = [];_node8.attrSize = 1;_node8.attrHash = 1924956219;{
																												var _attrvalue3 = "";_attrvalue3 += "main-";_attrvalue3 += it.type;_attrvalue3 += "";_node8.attrs["w-class"] = _attrvalue3;
																								}_node8.attrHash = _hash.nextHash(_node8.attrHash, _calTextHash(_node8.attrs["w-class"]));_$temp = _node8;{
																												var _$parent10 = _$temp;var _node9 = { "attrs": {}, "tagName": "div", "sid": 8 };_node9.children = [];_node9.attrSize = 1;_node9.attrHash = 1019047777;_node9.attrs["w-class"] = "title";_$temp = _node9;{
																																var _$parent11 = _$temp;_addText(v.title, _$parent11);
																												}_chFunc(_node9);_$parent10.children.push(_node9);
																								}_$temp = _node8;{
																												var _$parent12 = _$temp;var _node10 = { "attrs": {}, "tagName": "div", "sid": 9 };_node10.children = [];_node10.attrSize = 1;_node10.attrHash = 4031233572;_node10.attrs["w-class"] = "description";_$temp = _node10;{
																																var _$parent13 = _$temp;_addText(v.description, _$parent13);
																												}_chFunc(_node10);_$parent12.children.push(_node10);
																								}_chFunc(_node8);_$parent9.children.push(_node8);
																				}_chFunc(_node2);_$parent2.children.push(_node2);
																}
												}
								}_chFunc(_node);return _node;
				}
});