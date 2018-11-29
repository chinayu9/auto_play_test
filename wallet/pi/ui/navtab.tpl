(function (_cfg, it, it1) {
	var _$temp = void 0,
	    node = void 0;it = it || { cur: 0, btn: "btn$", arr: [{ tab: "selectnumber$", btn: { "text": "Abc1" }, cfg: {} }, { tab: "selectnumber$", btn: { "text": "Abc2" }, cfg: {} }], old: {}, type: 0 };_$temp = node;{
		var _$parent = _$temp;var _node = { "attrs": {}, "tagName": "div", "sid": 0 };_node.children = [];_node.attrSize = 1;_node.attrHash = 263893721;_node.attrs["style"] = "width:100%;height:100%";_$temp = _node;{
			var _$parent2 = _$temp;var _node2 = { "attrs": {}, "tagName": "div", "sid": 1 };_node2.children = [];_node2.attrSize = 1;_node2.attrHash = 904429599;_node2.attrs["w-class"] = "tabs";if (it.type === 0) {
				{
					var _$i = 0;
					for (var _iterator = it.arr, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator]();;) {
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
						var i = _$i++;if (i == it.cur) {
							_$temp = _node2;{
								var _$parent3 = _$temp;var _node3 = { "attrs": {}, "tagName": "widget", "sid": 2 };_node3.hasChild = false;_node3.child = null;_node3.attrSize = 1;_node3.attrHash = 1010165104;{
									var attrvalue = "";attrvalue = v.tab;_node3.attrs["w-tag"] = attrvalue;
								}_node3.attrHash = _hash.nextHash(_node3.attrHash, _calTextHash(_node3.attrs["w-tag"]));_node3.tagName = _node3.attrs["w-tag"];_node3.attrs["style"] = "visibility:visible;z-index:2;position:absolute;width:100%;height:100%;";_$temp = _node3;{
									var _$parent4 = _$temp;_addJson(v.cfg ? v.cfg : i, _$parent4);
								}_chFunc(_node3);_$parent3.children.push(_node3);
							}
						} else if (it.old[i]) {
							_$temp = _node2;{
								var _$parent5 = _$temp;var _node4 = { "attrs": {}, "tagName": "widget", "sid": 3 };_node4.hasChild = false;_node4.child = null;_node4.attrSize = 1;_node4.attrHash = 1836112609;{
									var _attrvalue = "";_attrvalue = v.tab;_node4.attrs["w-tag"] = _attrvalue;
								}_node4.attrHash = _hash.nextHash(_node4.attrHash, _calTextHash(_node4.attrs["w-tag"]));_node4.tagName = _node4.attrs["w-tag"];_node4.attrs["style"] = "visibility:hidden;z-index:1;position: absolute;width:100%;height:100%;";_$temp = _node4;{
									var _$parent6 = _$temp;_addJson(v.cfg ? v.cfg : i, _$parent6);
								}_chFunc(_node4);_$parent5.children.push(_node4);
							}
						}
					}
				}
			} else if (it.type === 1) {
				_$temp = _node2;{
					var _$parent7 = _$temp;var _node5 = { "attrs": {}, "tagName": "widget", "sid": 4 };_node5.hasChild = false;_node5.child = null;_node5.attrSize = 1;_node5.attrHash = 3518817415;{
						var _attrvalue2 = "";_attrvalue2 = it.arr[it.cur];_node5.attrs["w-tag"] = _attrvalue2;
					}_node5.attrHash = _hash.nextHash(_node5.attrHash, _calTextHash(_node5.attrs["w-tag"]));_node5.tagName = _node5.attrs["w-tag"];_node5.attrs["style"] = "position:absolute;width:100%;height:100%;";_$temp = _node5;{
						var _$parent8 = _$temp;_addJson(it.cur, _$parent8);
					}_chFunc(_node5);_$parent7.children.push(_node5);
				}
			} else {
				{
					var _$i2 = 0;
					for (var _iterator2 = it.arr, _isArray2 = Array.isArray(_iterator2), _i2 = 0, _iterator2 = _isArray2 ? _iterator2 : _iterator2[Symbol.iterator]();;) {
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
						var _i3 = _$i2++;_$temp = _node2;{
							var _$parent9 = _$temp;var _node6 = { "attrs": {}, "tagName": "widget", "sid": 5 };_node6.hasChild = false;_node6.child = null;_node6.attrSize = 1;_node6.attrHash = 3770069693;{
								var _attrvalue3 = "";_attrvalue3 = _v.tab;_node6.attrs["w-tag"] = _attrvalue3;
							}_node6.attrHash = _hash.nextHash(_node6.attrHash, _calTextHash(_node6.attrs["w-tag"]));_node6.tagName = _node6.attrs["w-tag"];{
								var _attrvalue4 = "";_attrvalue4 += "visibility: ";_attrvalue4 += _i3 == it.cur ? 'visible' : 'hidden';_attrvalue4 += "; z-index:";_attrvalue4 += _i3 == it.cur ? 2 : 1;_attrvalue4 += "; position:absolute; width:100%;height:100%;";_node6.attrs["style"] = _attrvalue4;
							}_node6.attrHash = _hash.nextHash(_node6.attrHash, _calTextHash(_node6.attrs["style"]));_$temp = _node6;{
								var _$parent10 = _$temp;_addJson(_v.cfg ? _v.cfg : _i3, _$parent10);
							}_chFunc(_node6);_$parent9.children.push(_node6);
						}
					}
				}
			}_chFunc(_node2);_$parent2.children.push(_node2);
		}_$temp = _node;{
			var _$parent11 = _$temp;var _node7 = { "attrs": {}, "tagName": "div", "sid": 6 };_node7.children = [];_node7.attrSize = 3;_node7.attrHash = 1339349161;_node7.attrs["btns"] = "";_node7.attrs["w-class"] = "btns";_node7.attrs["ev-btn"] = "change";{
				var _$i3 = 0;
				for (var _iterator3 = it.arr, _isArray3 = Array.isArray(_iterator3), _i4 = 0, _iterator3 = _isArray3 ? _iterator3 : _iterator3[Symbol.iterator]();;) {
					var _ref3;

					if (_isArray3) {
						if (_i4 >= _iterator3.length) break;
						_ref3 = _iterator3[_i4++];
					} else {
						_i4 = _iterator3.next();
						if (_i4.done) break;
						_ref3 = _i4.value;
					}

					var _v2 = _ref3;
					var _i5 = _$i3++;_$temp = _node7;{
						var _$parent12 = _$temp;var _node8 = { "attrs": {}, "tagName": "widget", "sid": 7 };_node8.hasChild = false;_node8.child = null;_node8.attrSize = 1;_node8.attrHash = 513035889;{
							var _attrvalue5 = "";_attrvalue5 = it.btn;_node8.attrs["w-tag"] = _attrvalue5;
						}_node8.attrHash = _hash.nextHash(_node8.attrHash, _calTextHash(_node8.attrs["w-tag"]));_node8.tagName = _node8.attrs["w-tag"];_node8.attrs["style"] = "display: inline-block;";_$temp = _node8;{
							var _$parent13 = _$temp;var _node9 = {}; //jpair pre

							_node9["cfg"] = _v2.btn;
							//jpair suf
							//jpair pre

							_$temp = _node9;{
								var _$parent14 = _$temp;_$temp = _node9;{
									var _$parent15 = _$temp;var _node10 = {}; //jpair pre

									_node10["cmd"] = _i5;
									//jpair suf
									_$parent15["e"] = _node10;
								}
								//jpair suf
							} //jpair pre

							_node9["select"] = _i5 == it.cur;
							//jpair suf
							_addJson(_node9, _$parent13);
						}_chFunc(_node8);_$parent12.children.push(_node8);
					}
				}
			}_chFunc(_node7);_$parent11.children.push(_node7);
		}_chFunc(_node);return _node;
	}
});