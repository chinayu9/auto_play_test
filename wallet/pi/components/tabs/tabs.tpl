(function (_cfg, it, it1) {
				var _$temp = void 0,
				    node = void 0;var isCard = it.type === "card";var isBorderCard = it.type === "border_card";var isShowRight = it.position === 'right';var isShowLeft = it.position === 'left';_$temp = node;{
								var _$parent = _$temp;var _node = { "attrs": {}, "tagName": "div", "sid": 0 };_node.children = [];_node.attrSize = 2;_node.attrHash = 3181927072;_node.attrs["w-class"] = "base";{
												var attrvalue = "";attrvalue += isShowRight || isShowLeft ? 'height: ' + 40 * (it.list.length + 1) + 'px;' : '';attrvalue += "";_node.attrs["style"] = attrvalue;
								}_node.attrHash = _hash.nextHash(_node.attrHash, _calTextHash(_node.attrs["style"]));_$temp = _node;{
												var _$parent2 = _$temp;var _node2 = { "attrs": {}, "tagName": "div", "sid": 1 };_node2.children = [];_node2.attrSize = 2;_node2.attrHash = 3178345110;{
																var _attrvalue = "";_attrvalue += "nav-wrap-";_attrvalue += it.position;_attrvalue += " ";_attrvalue += isBorderCard ? 'nav-wrap-border_card-' + it.position : '';_attrvalue += "";_node2.attrs["w-class"] = _attrvalue;
												}_node2.attrHash = _hash.nextHash(_node2.attrHash, _calTextHash(_node2.attrs["w-class"]));{
																var _attrvalue2 = "";_attrvalue2 += "tabs-nav-wrap-";_attrvalue2 += it.position;_attrvalue2 += "";_node2.attrs["class"] = _attrvalue2;
												}_node2.attrHash = _hash.nextHash(_node2.attrHash, _calTextHash(_node2.attrs["class"]));_$temp = _node2;{
																var _$parent3 = _$temp;var _node3 = { "attrs": {}, "tagName": "div", "sid": 2 };_node3.children = [];_node3.attrSize = 1;_node3.attrHash = 4249958198;_node3.attrs["w-class"] = "nav-scroll";_$temp = _node3;{
																				var _$parent4 = _$temp;var _node4 = { "attrs": {}, "tagName": "div", "sid": 3 };_node4.children = [];_node4.attrSize = 2;_node4.attrHash = 2339148219;{
																								var _attrvalue3 = "";_attrvalue3 += "nav ";_attrvalue3 += isCard ? 'nav-card-' + it.position : '';_attrvalue3 += "";_node4.attrs["w-class"] = _attrvalue3;
																				}_node4.attrHash = _hash.nextHash(_node4.attrHash, _calTextHash(_node4.attrs["w-class"]));_node4.attrs["style"] = "left: 55px;";{
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
																												var i = _$i++;var isActive = i === it.activeNum;var isFirst = i === 0;_$temp = _node4;{
																																var _$parent5 = _$temp;var _node5 = { "attrs": {}, "tagName": "div", "sid": 4 };_node5.children = [];_node5.attrSize = 4;_node5.attrHash = 1129377084;{
																																				var _attrvalue4 = "";_attrvalue4 += "nav-item-";_attrvalue4 += it.position;_attrvalue4 += " ";_attrvalue4 += isFirst ? 'first-item-' + it.position : '';_attrvalue4 += " ";_attrvalue4 += isActive ? 'is-active-' + it.type + (isBorderCard && isFirst ? '-first' : '') + '-' + it.position : '';_attrvalue4 += " ";_attrvalue4 += isCard ? 'is-card-' + it.position : '';_attrvalue4 += "";_node5.attrs["w-class"] = _attrvalue4;
																																}_node5.attrHash = _hash.nextHash(_node5.attrHash, _calTextHash(_node5.attrs["w-class"]));_node5.attrs["class"] = "tabs-item";_node5.attrs["style"] = "font-size: 28px;height: 60px;line-height: 60px;";{
																																				var _attrvalue5 = "";_attrvalue5 += "doClick(e,";_attrvalue5 += i;_attrvalue5 += ")";_node5.attrs["on-tap"] = _attrvalue5;
																																}_node5.attrHash = _hash.nextHash(_node5.attrHash, _calTextHash(_node5.attrs["on-tap"]));_$temp = _node5;{
																																				var _$parent6 = _$temp;var _node6 = { "attrs": {}, "tagName": "span", "sid": 5 };_node6.children = [];_node6.attrSize = 1;_node6.attrHash = 2255571891;{
																																								var _attrvalue6 = "";_attrvalue6 += isActive ? 'nav-span-' + it.type + '-' + it.position : '';_attrvalue6 += "";_node6.attrs["w-class"] = _attrvalue6;
																																				}_node6.attrHash = _hash.nextHash(_node6.attrHash, _calTextHash(_node6.attrs["w-class"]));_$temp = _node6;{
																																								var _$parent7 = _$temp;_addText(v, _$parent7);
																																				}_chFunc(_node6);_$parent6.children.push(_node6);
																																}_chFunc(_node5);_$parent5.children.push(_node5);
																												}
																								}
																				}_chFunc(_node4);_$parent4.children.push(_node4);
																}_chFunc(_node3);_$parent3.children.push(_node3);
												}_chFunc(_node2);_$parent2.children.push(_node2);
								}_chFunc(_node);return _node;
				}
});