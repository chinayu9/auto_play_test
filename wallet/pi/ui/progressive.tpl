(function (_cfg, it, it1) {
				var _$temp = void 0,
				    node = void 0;it = it || { "orientation": 2, "arr": [], "min": 10, "addCount": 5, "checkPixel": 0.5, "scrollEnd": false };_$temp = node;{
								var _$parent = _$temp;var _node = { "attrs": {}, "tagName": "div", "sid": 0 };_node.children = [];_node.attrSize = 2;_node.attrHash = 3457349418;{
												var attrvalue = "";attrvalue += "position: absolute; width:100%;height:100%;overflow-x: ";if (it.orientation === 2) {
																attrvalue += "hidden ";
												} else {
																attrvalue += "auto ";
												}attrvalue += "; overflow-y: ";if (it.orientation === 2) {
																attrvalue += "hidden ";
												} else {
																attrvalue += "auto ";
												}attrvalue += ";";_node.attrs["style"] = attrvalue;
								}_node.attrHash = _hash.nextHash(_node.attrHash, _calTextHash(_node.attrs["style"]));_node.attrs["on-scroll"] = "scroll";var arr = it.arr.slice(it.showStart, it.showEnd);{
												var _$i = 0;
												for (var _iterator = arr, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator]();;) {
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
																var i = _$i++;_$temp = _node;{
																				var _$parent2 = _$temp;var _node2 = { "attrs": {}, "tagName": "widget", "sid": 1 };_node2.hasChild = false;_node2.child = null;_node2.attrHash = 782767477;{
																								var _attrvalue = "";_attrvalue = v.widget || it.widget;_node2.attrs["w-tag"] = _attrvalue;
																				}_node2.attrHash = _hash.nextHash(_node2.attrHash, _calTextHash(_node2.attrs["w-tag"]));_node2.tagName = _node2.attrs["w-tag"];_$temp = _node2;{
																								var _$parent3 = _$temp;_addJson(v, _$parent3);
																				}_chFunc(_node2);_$parent2.children.push(_node2);
																}
												}
								}_chFunc(_node);return _node;
				}
});