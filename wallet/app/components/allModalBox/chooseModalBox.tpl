(function (_cfg, it, it1) {
	var _$temp = void 0,
	    node = void 0;_$temp = node;{
		var _$parent = _$temp;var _node = { "attrs": {}, "tagName": "div", "sid": 0 };_node.children = [];_node.attrSize = 3;_node.attrHash = 1686796296;_node.attrs["class"] = "new-page";_node.attrs["w-class"] = "new-page";_node.attrs["on-tap"] = "doClose";_$temp = _node;{
			var _$parent2 = _$temp;var _node2 = { "attrs": {}, "tagName": "div", "sid": 1 };_node2.children = [];_node2.attrSize = 1;_node2.attrHash = 1913054642;_node2.attrs["w-class"] = "main";_$temp = _node2;{
				var _$parent3 = _$temp;var _node3 = { "attrs": {}, "tagName": "div", "sid": 2 };_node3.children = [];_node3.childHash = 3907026967;_node3.attrSize = 1;_node3.attrHash = 1019047777;_node3.attrs["w-class"] = "title";_$temp = _node3;{
					var _$parent4 = _$temp;var _node4 = { "attrs": {}, "tagName": "pi-ui-lang", "sid": 3 };_node4.hasChild = false;_node4.child = null;_node4.childHash = 2148321870;_node4.attrHash = 0;_$temp = _node4;{
						var _$parent5 = _$temp;var _node5 = {}; //jpair pre

						{
							var jvalue = "";
							jvalue = "矿工费";
							//jpair suf

							_node5["zh_Hans"] = jvalue;
						}
						//jpair pre

						{
							var _jvalue = "";
							_jvalue = "礦工費";
							//jpair suf

							_node5["zh_Hant"] = _jvalue;
						}
						//jpair pre

						{
							var _jvalue2 = "";
							_jvalue2 = "";
							//jpair suf

							_node5["en"] = _jvalue2;
						}
						_addJson(_node5, _$parent5);
					}_$parent4.children.push(_node4);
				}_$parent3.children.push(_node3);
			}_$temp = _node2;{
				var _$parent6 = _$temp;var _node6 = { "attrs": {}, "tagName": "div", "sid": 4 };_node6.children = [];_node6.attrSize = 1;_node6.attrHash = 222693721;_node6.attrs["w-class"] = "list-container";{
					var _$i = 0;
					for (var _iterator = it1.minerFeeList, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator]();;) {
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
						var i = _$i++;_$temp = _node6;{
							var _$parent7 = _$temp;var _node7 = { "attrs": {}, "tagName": "div", "sid": 5 };_node7.children = [];_node7.attrSize = 2;_node7.attrHash = 2940749050;_node7.attrs["w-class"] = "list-item";{
								var attrvalue = "";attrvalue += "chooseMinerLevel(e,";attrvalue += i;attrvalue += ")";_node7.attrs["on-tap"] = attrvalue;
							}_node7.attrHash = _hash.nextHash(_node7.attrHash, _calTextHash(_node7.attrs["on-tap"]));_$temp = _node7;{
								var _$parent8 = _$temp;var _node8 = { "attrs": {}, "tagName": "div", "sid": 6 };_node8.children = [];_node8.attrSize = 1;_node8.attrHash = 3363340039;_node8.attrs["w-class"] = "item-left";if (typeof v.time === 'string') {
									_$temp = _node8;{
										var _$parent9 = _$temp;_addText(v.time, _$parent9);
									}
								} else {
									_$temp = _node8;{
										var _$parent10 = _$temp;var _node9 = { "attrs": {}, "tagName": "pi-ui-lang", "sid": 7 };_node9.hasChild = false;_node9.child = null;_node9.attrHash = 0;_$temp = _node9;{
											var _$parent11 = _$temp;_addJson(v.time, _$parent11);
										}_chFunc(_node9);_$parent10.children.push(_node9);
									}
								}_$temp = _node8;{
									var _$parent12 = _$temp;var _node10 = _installText("：", 3359304705);;
									_$parent12.children.push(_node10);
								}_$temp = _node8;{
									var _$parent13 = _$temp;_addText(v.minerFee, _$parent13);
								}_$temp = _node8;{
									var _$parent14 = _$temp;var _node11 = _installText("&nbsp;", 1553561131);;
									_$parent14.children.push(_node11);
								}_$temp = _node8;{
									var _$parent15 = _$temp;_addText(it.currencyName, _$parent15);
								}_chFunc(_node8);_$parent8.children.push(_node8);
							}_$temp = _node7;{
								var _$parent16 = _$temp;var _node12 = { "attrs": {}, "tagName": "div", "sid": 8 };_node12.children = [];_node12.attrSize = 1;_node12.attrHash = 2897355810;_node12.attrs["w-class"] = "item-right";if (typeof v.text === 'string') {
									_$temp = _node12;{
										var _$parent17 = _$temp;_addText(v.text, _$parent17);
									}
								} else {
									_$temp = _node12;{
										var _$parent18 = _$temp;var _node13 = { "attrs": {}, "tagName": "pi-ui-lang", "sid": 9 };_node13.hasChild = false;_node13.child = null;_node13.attrHash = 0;_$temp = _node13;{
											var _$parent19 = _$temp;_addJson(v.text, _$parent19);
										}_chFunc(_node13);_$parent18.children.push(_node13);
									}
								}_chFunc(_node12);_$parent16.children.push(_node12);
							}if (v.level === it1.level) {
								_$temp = _node7;{
									var _$parent20 = _$temp;var _node14 = { "attrs": {}, "tagName": "img", "sid": 10 };_node14.children = [];_node14.childHash = 0;_node14.attrSize = 2;_node14.attrHash = 3433071047;_node14.attrs["src"] = "../../res/image/right.png";_node14.attrs["w-class"] = "choosed";_$parent20.children.push(_node14);
								}
							}_chFunc(_node7);_$parent7.children.push(_node7);
						}
					}
				}_chFunc(_node6);_$parent6.children.push(_node6);
			}_chFunc(_node2);_$parent2.children.push(_node2);
		}_chFunc(_node);return _node;
	}
});