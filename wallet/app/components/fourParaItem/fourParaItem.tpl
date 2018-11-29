(function (_cfg, it, it1) {
	var _$temp = void 0,
	    node = void 0;_$temp = node;{
		var _$parent = _$temp;var _node = { "attrs": {}, "tagName": "div", "sid": 0 };_node.children = [];_node.attrSize = 1;_node.attrHash = 1045235690;_node.attrs["w-class"] = "item";_$temp = _node;{
			var _$parent2 = _$temp;var _node2 = { "attrs": {}, "tagName": "div", "sid": 1 };_node2.children = [];_node2.attrSize = 1;_node2.attrHash = 136397174;_node2.attrs["w-class"] = "itemName";_$temp = _node2;{
				var _$parent3 = _$temp;var _node3 = { "attrs": {}, "tagName": "span", "sid": 2 };_node3.children = [];_node3.attrSize = 1;_node3.attrHash = 1043954522;_node3.attrs["w-class"] = "itemleft";_$temp = _node3;{
					var _$parent4 = _$temp;var _node4 = { "attrs": {}, "tagName": "pi-ui-lang", "sid": 3 };_node4.hasChild = false;_node4.child = null;_node4.attrHash = 0;_$temp = _node4;{
						var _$parent5 = _$temp;_addJson(it.name, _$parent5);
					}_chFunc(_node4);_$parent4.children.push(_node4);
				}if (it.showPin) {
					_$temp = _node3;{
						var _$parent6 = _$temp;var _node5 = { "attrs": {}, "tagName": "span", "sid": 4 };_node5.children = [];_node5.childHash = 3118695505;_node5.attrSize = 1;_node5.attrHash = 2405874756;_node5.attrs["w-class"] = "other";_$temp = _node5;{
							var _$parent7 = _$temp;var _node6 = { "attrs": {}, "tagName": "pi-ui-lang", "sid": 5 };_node6.hasChild = false;_node6.child = null;_node6.childHash = 2381536771;_node6.attrHash = 0;_$temp = _node6;{
								var _$parent8 = _$temp;var _node7 = {}; //jpair pre

								{
									var jvalue = "";
									jvalue = "拼";
									//jpair suf

									_node7["zh_Hans"] = jvalue;
								}
								//jpair pre

								{
									var _jvalue = "";
									_jvalue = "拼";
									//jpair suf

									_node7["zh_Hant"] = _jvalue;
								}
								//jpair pre

								{
									var _jvalue2 = "";
									_jvalue2 = "";
									//jpair suf

									_node7["en"] = _jvalue2;
								}
								_addJson(_node7, _$parent8);
							}_$parent7.children.push(_node6);
						}_$parent6.children.push(_node5);
					}
				}_chFunc(_node3);_$parent3.children.push(_node3);
			}_$temp = _node2;{
				var _$parent9 = _$temp;var _node8 = { "attrs": {}, "tagName": "span", "sid": 6 };_node8.children = [];_node8.attrHash = 0;_$temp = _node8;{
					var _$parent10 = _$temp;_addText(it.data, _$parent10);
				}_chFunc(_node8);_$parent9.children.push(_node8);
			}_chFunc(_node2);_$parent2.children.push(_node2);
		}_$temp = _node;{
			var _$parent11 = _$temp;var _node9 = { "attrs": {}, "tagName": "div", "sid": 7 };_node9.children = [];_node9.attrSize = 1;_node9.attrHash = 2937775176;_node9.attrs["w-class"] = "itemTime";_$temp = _node9;{
				var _$parent12 = _$temp;var _node10 = { "attrs": {}, "tagName": "span", "sid": 8 };_node10.children = [];_node10.attrSize = 1;_node10.attrHash = 1043954522;_node10.attrs["w-class"] = "itemleft";_$temp = _node10;{
					var _$parent13 = _$temp;_addText(it.time, _$parent13);
				}_chFunc(_node10);_$parent12.children.push(_node10);
			}if (it.describe && it.describe != "") {
				_$temp = _node9;{
					var _$parent14 = _$temp;var _node11 = { "attrs": {}, "tagName": "span", "sid": 9 };_node11.children = [];_node11.attrHash = 0;_$temp = _node11;{
						var _$parent15 = _$temp;var _node12 = { "attrs": {}, "tagName": "pi-ui-lang", "sid": 10 };_node12.hasChild = false;_node12.child = null;_node12.attrHash = 0;_$temp = _node12;{
							var _$parent16 = _$temp;_addJson(it.describe, _$parent16);
						}_chFunc(_node12);_$parent15.children.push(_node12);
					}_chFunc(_node11);_$parent14.children.push(_node11);
				}
			}_chFunc(_node9);_$parent11.children.push(_node9);
		}_chFunc(_node);return _node;
	}
});