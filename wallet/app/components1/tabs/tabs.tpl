(function (_cfg, it, it1) {
	var _$temp = void 0,
	    node = void 0;_$temp = node;{
		var _$parent = _$temp;var _node = { "attrs": {}, "tagName": "div", "sid": 0 };_node.children = [];_node.attrSize = 1;_node.attrHash = 3338124703;_node.attrs["w-class"] = "base";_$temp = _node;{
			var _$parent2 = _$temp;var _node2 = { "attrs": {}, "tagName": "div", "sid": 1 };_node2.children = [];_node2.attrSize = 1;_node2.attrHash = 1940417547;_node2.attrs["w-class"] = "nav";{
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
					var i = _$i++;var isActive = i === it.activeNum;_$temp = _node2;{
						var _$parent3 = _$temp;var _node3 = { "attrs": {}, "tagName": "div", "sid": 2 };_node3.children = [];_node3.attrSize = 2;_node3.attrHash = 1865490331;{
							var attrvalue = "";attrvalue += "nav-item ";attrvalue += isActive ? 'is-active' : '';attrvalue += "";_node3.attrs["w-class"] = attrvalue;
						}_node3.attrHash = _hash.nextHash(_node3.attrHash, _calTextHash(_node3.attrs["w-class"]));{
							var _attrvalue = "";_attrvalue += "doClick(e,";_attrvalue += i;_attrvalue += ")";_node3.attrs["on-tap"] = _attrvalue;
						}_node3.attrHash = _hash.nextHash(_node3.attrHash, _calTextHash(_node3.attrs["on-tap"]));_$temp = _node3;{
							var _$parent4 = _$temp;_addText(v.tab, _$parent4);
						}_chFunc(_node3);_$parent3.children.push(_node3);
					}
				}
			}_chFunc(_node2);_$parent2.children.push(_node2);
		}_$temp = _node;{
			var _$parent5 = _$temp;var _node4 = { "attrs": {}, "tagName": "div", "sid": 3 };_node4.children = [];_node4.attrSize = 2;_node4.attrHash = 4085619355;_node4.attrs["w-class"] = "components";_node4.attrs["ev-import-success"] = "importSuccess";{
				var _$i2 = 0;
				for (var _iterator2 = it.list, _isArray2 = Array.isArray(_iterator2), _i2 = 0, _iterator2 = _isArray2 ? _iterator2 : _iterator2[Symbol.iterator]();;) {
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
					var _i3 = _$i2++;var _isActive = _i3 === it.activeNum;_$temp = _node4;{
						var _$parent6 = _$temp;var _node5 = { "attrs": {}, "tagName": "widget", "sid": 4 };_node5.hasChild = false;_node5.child = null;_node5.attrSize = 1;_node5.attrHash = 3770069693;{
							var _attrvalue2 = "";_attrvalue2 = _v.components;_node5.attrs["w-tag"] = _attrvalue2;
						}_node5.attrHash = _hash.nextHash(_node5.attrHash, _calTextHash(_node5.attrs["w-tag"]));_node5.tagName = _node5.attrs["w-tag"];{
							var _attrvalue3 = "";_attrvalue3 += "visibility: ";_attrvalue3 += _isActive ? 'visible' : 'hidden';_attrvalue3 += "; z-index:";_attrvalue3 += _isActive ? 0 : -1;_attrvalue3 += "; position:absolute; width:100%;height:100%;";_node5.attrs["style"] = _attrvalue3;
						}_node5.attrHash = _hash.nextHash(_node5.attrHash, _calTextHash(_node5.attrs["style"]));_$temp = _node5;{
							var _$parent7 = _$temp;var _node6 = {}; //jpair pre

							_node6["isActive"] = _isActive;
							//jpair suf
							_addJson(_node6, _$parent7);
						}_chFunc(_node5);_$parent6.children.push(_node5);
					}
				}
			}_chFunc(_node4);_$parent5.children.push(_node4);
		}_chFunc(_node);return _node;
	}
});