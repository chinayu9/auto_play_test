(function (_cfg, it, it1) {
	var _$temp = void 0,
	    node = void 0;_$temp = node;{
		var _$parent = _$temp;var _node = { "attrs": {}, "tagName": "div", "sid": 0 };_node.children = [];_node.attrSize = 2;_node.attrHash = 138104688;_node.attrs["class"] = "new-page";_node.attrs["w-class"] = "new-page";_$temp = _node;{
			var _$parent2 = _$temp;var _node2 = { "attrs": {}, "tagName": "div", "sid": 1 };_node2.children = [];_node2.attrSize = 1;_node2.attrHash = 2513780429;_node2.attrs["w-class"] = "product-list";{
				var _$i = 0;
				for (var _iterator = it1.productList, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator]();;) {
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
					var i = _$i++;_$temp = _node2;{
						var _$parent3 = _$temp;var _node3 = { "attrs": {}, "tagName": "div", "sid": 2 };_node3.children = [];_node3.attrSize = 1;_node3.attrHash = 1134196766;{
							var attrvalue = "";attrvalue += "fmListItemClick(e,";attrvalue += i;attrvalue += ")";_node3.attrs["on-tap"] = attrvalue;
						}_node3.attrHash = _hash.nextHash(_node3.attrHash, _calTextHash(_node3.attrs["on-tap"]));_$temp = _node3;{
							var _$parent4 = _$temp;var _node4 = { "attrs": {}, "tagName": "app-view-wallet-components-fmListItem", "sid": 3 };_node4.hasChild = false;_node4.child = null;_node4.attrHash = 0;_$temp = _node4;{
								var _$parent5 = _$temp;var _node5 = {}; //jpair pre

								_node5["product"] = v;
								//jpair suf
								_addJson(_node5, _$parent5);
							}_chFunc(_node4);_$parent4.children.push(_node4);
						}_chFunc(_node3);_$parent3.children.push(_node3);
					}
				}
			}_chFunc(_node2);_$parent2.children.push(_node2);
		}_chFunc(_node);return _node;
	}
});