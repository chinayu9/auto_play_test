(function (_cfg, it, it1) {
	var _$temp = void 0,
	    node = void 0;_$temp = node;{
		var _$parent = _$temp;var _node = { "attrs": {}, "tagName": "div", "sid": 0 };_node.children = [];_node.attrSize = 3;_node.attrHash = 3526062878;_node.attrs["class"] = "new-page";_node.attrs["w-class"] = "new-page";_node.attrs["on-tap"] = "maskClick";_$temp = _node;{
			var _$parent2 = _$temp;var _node2 = { "attrs": {}, "tagName": "div", "sid": 1 };_node2.children = [];_node2.attrSize = 1;_node2.attrHash = 4252679546;_node2.attrs["w-class"] = "body";_$temp = _node2;{
				var _$parent3 = _$temp;var _node3 = { "attrs": {}, "tagName": "div", "sid": 2 };_node3.children = [];_node3.attrSize = 1;_node3.attrHash = 294970681;_node3.attrs["w-class"] = "addr-list";{
					var _$i = 0;
					for (var _iterator = it1.addrsInfo, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator]();;) {
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
						var i = _$i++;_$temp = _node3;{
							var _$parent4 = _$temp;var _node4 = { "attrs": {}, "tagName": "div", "sid": 3 };_node4.children = [];_node4.attrSize = 2;_node4.attrHash = 1924428518;_node4.attrs["w-class"] = "item";{
								var attrvalue = "";attrvalue += "addrItemClick(e,";attrvalue += i;attrvalue += ")";_node4.attrs["on-tap"] = attrvalue;
							}_node4.attrHash = _hash.nextHash(_node4.attrHash, _calTextHash(_node4.attrs["on-tap"]));_$temp = _node4;{
								var _$parent5 = _$temp;var _node5 = { "attrs": {}, "tagName": "div", "sid": 4 };_node5.children = [];_node5.attrSize = 1;_node5.attrHash = 3146205922;_node5.attrs["w-class"] = "addr";_$temp = _node5;{
									var _$parent6 = _$temp;_addText(v.addrShow, _$parent6);
								}_chFunc(_node5);_$parent5.children.push(_node5);
							}_$temp = _node4;{
								var _$parent7 = _$temp;var _node6 = { "attrs": {}, "tagName": "div", "sid": 5 };_node6.children = [];_node6.attrSize = 1;_node6.attrHash = 1349797565;_node6.attrs["w-class"] = "balance";_$temp = _node6;{
									var _$parent8 = _$temp;_addText(v.balance % 1 === 0 ? v.balance.toFixed(2) : v.balance, _$parent8);
								}_chFunc(_node6);_$parent7.children.push(_node6);
							}if (v.isChoosed) {
								_$temp = _node4;{
									var _$parent9 = _$temp;var _node7 = { "attrs": {}, "tagName": "img", "sid": 6 };_node7.children = [];_node7.childHash = 0;_node7.attrSize = 2;_node7.attrHash = 3912700757;_node7.attrs["src"] = "../../../res/image/right.png";_node7.attrs["w-class"] = "choosed";_$parent9.children.push(_node7);
								}
							}_chFunc(_node4);_$parent4.children.push(_node4);
						}
					}
				}_chFunc(_node3);_$parent3.children.push(_node3);
			}_$temp = _node2;{
				var _$parent10 = _$temp;var _node8 = { "attrs": {}, "tagName": "div", "sid": 7 };_node8.children = [];_node8.childHash = 1129156913;_node8.attrSize = 2;_node8.attrHash = 3410850256;_node8.attrs["w-class"] = "add-addr";_node8.attrs["on-tap"] = "addAddrClick";_$temp = _node8;{
					var _$parent11 = _$temp;var _node9 = { "attrs": {}, "tagName": "pi-ui-lang", "sid": 8 };_node9.hasChild = false;_node9.child = null;_node9.childHash = 460435048;_node9.attrHash = 0;_$temp = _node9;{
						var _$parent12 = _$temp;var _node10 = {}; //jpair pre

						{
							var jvalue = "";
							jvalue = "添加地址";
							//jpair suf

							_node10["zh_Hans"] = jvalue;
						}
						//jpair pre

						{
							var _jvalue = "";
							_jvalue = "添加地址";
							//jpair suf

							_node10["zh_Hant"] = _jvalue;
						}
						//jpair pre

						{
							var _jvalue2 = "";
							_jvalue2 = "";
							//jpair suf

							_node10["en"] = _jvalue2;
						}
						_addJson(_node10, _$parent12);
					}_$parent11.children.push(_node9);
				}_$temp = _node8;{
					var _$parent13 = _$temp;var _node11 = { "attrs": {}, "tagName": "img", "sid": 9 };_node11.children = [];_node11.childHash = 0;_node11.attrSize = 2;_node11.attrHash = 1540151181;_node11.attrs["src"] = "../../../res/image/add.png";_node11.attrs["w-class"] = "add-icon";_$parent13.children.push(_node11);
				}_$parent10.children.push(_node8);
			}_chFunc(_node2);_$parent2.children.push(_node2);
		}_chFunc(_node);return _node;
	}
});