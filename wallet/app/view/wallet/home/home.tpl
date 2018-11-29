(function (_cfg, it, it1) {
	var _$temp = void 0,
	    node = void 0;_$temp = node;{
		var _$parent = _$temp;var _node = { "attrs": {}, "tagName": "div", "sid": 0 };_node.children = [];_node.attrSize = 2;_node.attrHash = 138104688;_node.attrs["class"] = "new-page";_node.attrs["w-class"] = "new-page";_$temp = _node;{
			var _$parent2 = _$temp;var _node2 = { "attrs": {}, "tagName": "div", "sid": 1 };_node2.children = [];_node2.attrSize = 2;_node2.attrHash = 3821971173;_node2.attrs["w-class"] = "title-container";_node2.attrs["ev-refresh-click"] = "refreshClick";_$temp = _node2;{
				var _$parent3 = _$temp;var _node3 = { "attrs": {}, "tagName": "app-components1-topBar-topBar1", "sid": 2 };_node3.hasChild = false;_node3.child = null;_node3.attrHash = 0;_$temp = _node3;{
					var _$parent4 = _$temp;var _node4 = {}; //jpair pre

					_node4["avatar"] = it1.avatar;
					//jpair suf
					//jpair pre

					_node4["text"] = it1.currencyUnitSymbol + it1.totalAsset;
					//jpair suf
					_addJson(_node4, _$parent4);
				}_chFunc(_node3);_$parent3.children.push(_node3);
			}_$temp = _node2;{
				var _$parent5 = _$temp;var _node5 = { "attrs": {}, "tagName": "div", "sid": 3 };_node5.children = [];_node5.attrSize = 1;_node5.attrHash = 4105260532;_node5.attrs["w-class"] = "nav-wrap";_$temp = _node5;{
					var _$parent6 = _$temp;var _node6 = { "attrs": {}, "tagName": "div", "sid": 4 };_node6.children = [];_node6.attrSize = 1;_node6.attrHash = 1940417547;_node6.attrs["w-class"] = "nav";{
						var _$i = 0;
						for (var _iterator = it1.tabs, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator]();;) {
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
							var i = _$i++;var isActive = i === it1.activeNum;_$temp = _node6;{
								var _$parent7 = _$temp;var _node7 = { "attrs": {}, "tagName": "div", "sid": 5 };_node7.children = [];_node7.attrSize = 2;_node7.attrHash = 1235456931;{
									var attrvalue = "";attrvalue += "nav-item ";attrvalue += isActive ? 'is-active' : '';attrvalue += "";_node7.attrs["w-class"] = attrvalue;
								}_node7.attrHash = _hash.nextHash(_node7.attrHash, _calTextHash(_node7.attrs["w-class"]));{
									var _attrvalue = "";_attrvalue += "tabsChangeClick(e,";_attrvalue += i;_attrvalue += ")";_node7.attrs["on-tap"] = _attrvalue;
								}_node7.attrHash = _hash.nextHash(_node7.attrHash, _calTextHash(_node7.attrs["on-tap"]));_$temp = _node7;{
									var _$parent8 = _$temp;var _node8 = { "attrs": {}, "tagName": "pi-ui-lang", "sid": 6 };_node8.hasChild = false;_node8.child = null;_node8.attrHash = 0;_$temp = _node8;{
										var _$parent9 = _$temp;_addJson(v.tab, _$parent9);
									}_chFunc(_node8);_$parent8.children.push(_node8);
								}_chFunc(_node7);_$parent7.children.push(_node7);
							}
						}
					}_chFunc(_node6);_$parent6.children.push(_node6);
				}_chFunc(_node5);_$parent5.children.push(_node5);
			}_chFunc(_node2);_$parent2.children.push(_node2);
		}{
			var _$i2 = 0;
			for (var _iterator2 = it1.tabs, _isArray2 = Array.isArray(_iterator2), _i2 = 0, _iterator2 = _isArray2 ? _iterator2 : _iterator2[Symbol.iterator]();;) {
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
				var _i3 = _$i2++;var _isActive = _i3 === it1.activeNum;_$temp = _node;{
					var _$parent10 = _$temp;var _node9 = { "attrs": {}, "tagName": "widget", "sid": 7 };_node9.hasChild = false;_node9.child = null;_node9.attrSize = 1;_node9.attrHash = 262263398;{
						var _attrvalue2 = "";_attrvalue2 = _v.components;_node9.attrs["w-tag"] = _attrvalue2;
					}_node9.attrHash = _hash.nextHash(_node9.attrHash, _calTextHash(_node9.attrs["w-tag"]));_node9.tagName = _node9.attrs["w-tag"];{
						var _attrvalue3 = "";_attrvalue3 += "visibility: ";_attrvalue3 += _isActive ? 'visible' : 'hidden';_attrvalue3 += "; z-index:";_attrvalue3 += _isActive ? 0 : -1;_attrvalue3 += ";  width:100%;";_attrvalue3 += _isActive ? 'flex:1 0 0;overflow-x: hidden;overflow-y: auto;scroll-behavior: smooth;-webkit-overflow-scrolling: touch;' : 'height: 0;';_attrvalue3 += "";_node9.attrs["style"] = _attrvalue3;
					}_node9.attrHash = _hash.nextHash(_node9.attrHash, _calTextHash(_node9.attrs["style"]));_$temp = _node9;{
						var _$parent11 = _$temp;var _node10 = {}; //jpair pre

						_node10["isActive"] = _isActive;
						//jpair suf
						_addJson(_node10, _$parent11);
					}_chFunc(_node9);_$parent10.children.push(_node9);
				}
			}
		}_chFunc(_node);return _node;
	}
});