(function (_cfg, it, it1) {
	var _$temp = void 0,
	    node = void 0;_$temp = node;{
		var _$parent = _$temp;var _node = { "attrs": {}, "tagName": "div", "sid": 0 };_node.children = [];_node.attrSize = 4;_node.attrHash = 4102999532;_node.attrs["w-class"] = "pi-time-select";_node.attrs["ev-input-focus"] = "focus";_node.attrs["ev-input-blur"] = "blur";_node.attrs["ev-input-clear"] = "clear";_$temp = _node;{
			var _$parent2 = _$temp;var _node2 = { "attrs": {}, "tagName": "components-input-input", "sid": 1 };_node2.hasChild = false;_node2.child = null;_node2.attrHash = 0;_$temp = _node2;{
				var _$parent3 = _$temp;var _node3 = {}; //jpair pre

				_node3["input"] = it1 && it1.currentValue;
				//jpair suf
				//jpair pre

				_node3["clearable"] = true;
				//jpair suf
				_addJson(_node3, _$parent3);
			}_chFunc(_node2);_$parent2.children.push(_node2);
		}if (it1.showTimeList && it1.timeList.length > 0) {
			_$temp = _node;{
				var _$parent4 = _$temp;var _node4 = { "attrs": {}, "tagName": "div", "sid": 2 };_node4.children = [];_node4.attrSize = 1;_node4.attrHash = 1986788574;_node4.attrs["w-class"] = "pi-input-dropdown";_$temp = _node4;{
					var _$parent5 = _$temp;var _node5 = { "attrs": {}, "tagName": "div", "sid": 3 };_node5.children = [];_node5.attrSize = 1;_node5.attrHash = 3869584380;_node5.attrs["w-class"] = "pi-scrollbar";_$temp = _node5;{
						var _$parent6 = _$temp;var _node6 = { "attrs": {}, "tagName": "div", "sid": 4 };_node6.children = [];_node6.attrSize = 1;_node6.attrHash = 76163993;_node6.attrs["w-class"] = "pi-time-select-suggestion__wrap";_$temp = _node6;{
							var _$parent7 = _$temp;var _node7 = { "attrs": {}, "tagName": "ul", "sid": 5 };_node7.children = [];_node7.attrSize = 1;_node7.attrHash = 3691152446;_node7.attrs["w-class"] = "pi-time-select-suggestion__list";{
								var _$i = 0;
								for (var _iterator = it1.timeList, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator]();;) {
									var _ref;

									if (_isArray) {
										if (_i >= _iterator.length) break;
										_ref = _iterator[_i++];
									} else {
										_i = _iterator.next();
										if (_i.done) break;
										_ref = _i.value;
									}

									var item = _ref;
									var index = _$i++;_$temp = _node7;{
										var _$parent8 = _$temp;var _node8 = { "attrs": {}, "tagName": "li", "sid": 6 };_node8.children = [];_node8.attrSize = 3;_node8.attrHash = 4087623506;{
											var attrvalue = "";attrvalue += "pi-time-select-item ";attrvalue += index === it1.currentIndex ? 'pi-item-selected' : '';attrvalue += "";_node8.attrs["w-class"] = attrvalue;
										}_node8.attrHash = _hash.nextHash(_node8.attrHash, _calTextHash(_node8.attrs["w-class"]));_node8.attrs["class"] = "pi-time-select-item";{
											var _attrvalue = "";_attrvalue += "timeSelectItemClickListener(e,";_attrvalue += index;_attrvalue += ")";_node8.attrs["on-mousedown"] = _attrvalue;
										}_node8.attrHash = _hash.nextHash(_node8.attrHash, _calTextHash(_node8.attrs["on-mousedown"]));_$temp = _node8;{
											var _$parent9 = _$temp;_addText(item, _$parent9);
										}_chFunc(_node8);_$parent8.children.push(_node8);
									}
								}
							}_chFunc(_node7);_$parent7.children.push(_node7);
						}_chFunc(_node6);_$parent6.children.push(_node6);
					}_chFunc(_node5);_$parent5.children.push(_node5);
				}_$temp = _node4;{
					var _$parent10 = _$temp;var _node9 = { "attrs": {}, "tagName": "div", "sid": 7 };_node9.children = [];_node9.childHash = 2946814719;_node9.attrSize = 2;_node9.attrHash = 2251114414;_node9.attrs["w-class"] = "pi-popper__arrow";_node9.attrs["class"] = "pi-popper__arrow";_$parent10.children.push(_node9);
				}_chFunc(_node4);_$parent4.children.push(_node4);
			}
		}_chFunc(_node);return _node;
	}
});