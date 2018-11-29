(function (_cfg, it, it1) {
	var _$temp = void 0,
	    node = void 0;_$temp = node;{
		var _$parent = _$temp;var _node = { "attrs": {}, "tagName": "div", "sid": 0 };_node.children = [];_node.attrSize = 3;_node.attrHash = 2825819624;_node.attrs["class"] = "pi-radio-group";_node.attrs["w-class"] = "pi-radio-group";_node.attrs["ev-radio-change"] = "radioChangeListener";{
			var _$i = 0;
			for (var _iterator = it.radioList, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator]();;) {
				var _ref;

				if (_isArray) {
					if (_i >= _iterator.length) break;
					_ref = _iterator[_i++];
				} else {
					_i = _iterator.next();
					if (_i.done) break;
					_ref = _i.value;
				}

				var radio = _ref;
				var index = _$i++;_$temp = _node;{
					var _$parent2 = _$temp;var _node2 = { "attrs": {}, "tagName": "radio$", "sid": 1 };_node2.hasChild = false;_node2.child = null;_node2.attrHash = 0;_$temp = _node2;{
						var _$parent3 = _$temp;var _node3 = {}; //jpair pre

						_node3["text"] = radio.text;
						//jpair suf
						//jpair pre

						_node3["labelIndex"] = index;
						//jpair suf
						//jpair pre

						_node3["checkedIndex"] = it.checkedIndex;
						//jpair suf
						//jpair pre

						_node3["disabled"] = radio.disabled;
						//jpair suf
						_addJson(_node3, _$parent3);
					}_chFunc(_node2);_$parent2.children.push(_node2);
				}
			}
		}_chFunc(_node);return _node;
	}
});