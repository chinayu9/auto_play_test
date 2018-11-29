(function (_cfg, it, it1) {
	var _$temp = void 0,
	    node = void 0;_$temp = node;{
		var _$parent = _$temp;var _node = { "attrs": {}, "tagName": "div", "sid": 0 };_node.children = [];_node.attrHash = 0;if (it.chooseAll) {
			_$temp = _node;{
				var _$parent2 = _$temp;var _node2 = { "attrs": {}, "tagName": "div", "sid": 1 };_node2.children = [];_node2.attrSize = 1;_node2.attrHash = 4231113844;_node2.attrs["on-tap"] = "doAllClick";_$temp = _node2;{
					var _$parent3 = _$temp;var _node3 = { "attrs": {}, "tagName": "components-checkbox-checkbox", "sid": 2 };_node3.hasChild = false;_node3.child = null;_node3.attrHash = 0;_$temp = _node3;{
						var _$parent4 = _$temp;var _node4 = {}; //jpair pre

						_node4["type"] = it1.chooseAllType;
						//jpair suf
						//jpair pre

						_node4["text"] = it.chooseAll;
						//jpair suf
						_addJson(_node4, _$parent4);
					}_chFunc(_node3);_$parent3.children.push(_node3);
				}_chFunc(_node2);_$parent2.children.push(_node2);
			}
		}_$temp = _node;{
			var _$parent5 = _$temp;var _node5 = { "attrs": {}, "tagName": "div", "sid": 3 };_node5.children = [];_node5.attrSize = 1;_node5.attrHash = 426673461;_node5.attrs["ev-checkbox-click"] = "doEachClick";{
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
					var i = _$i++;_$temp = _node5;{
						var _$parent6 = _$temp;var _node6 = { "attrs": {}, "tagName": "components-checkbox-checkbox", "sid": 4 };_node6.hasChild = false;_node6.child = null;_node6.attrHash = 0;_$temp = _node6;{
							var _$parent7 = _$temp;var _node7 = {}; //jpair pre

							_node7["type"] = v.type;
							//jpair suf
							//jpair pre

							_node7["text"] = v.text;
							//jpair suf
							//jpair pre

							_node7["index"] = i;
							//jpair suf
							//jpair pre

							_node7["reset"] = v.reset;
							//jpair suf
							_addJson(_node7, _$parent7);
						}_chFunc(_node6);_$parent6.children.push(_node6);
					}
				}
			}_chFunc(_node5);_$parent5.children.push(_node5);
		}_chFunc(_node);return _node;
	}
});