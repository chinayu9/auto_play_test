(function (_cfg, it, it1) {
	var _$temp = void 0,
	    node = void 0;_$temp = node;{
		var _$parent = _$temp;var _node = { "attrs": {}, "tagName": "div", "sid": 0 };_node.children = [];_node.attrSize = 1;_node.attrHash = 1957612137;_node.attrs["w-class"] = "pi-loading-mask";_$temp = _node;{
			var _$parent2 = _$temp;var _node2 = { "attrs": {}, "tagName": "div", "sid": 1 };_node2.children = [];_node2.attrSize = 1;_node2.attrHash = 721569670;_node2.attrs["w-class"] = "pi-loading-spinner";_$temp = _node2;{
				var _$parent3 = _$temp;var _node3 = { "attrs": {}, "tagName": "div", "sid": 2 };_node3.children = [];_node3.childHash = 2946814719;_node3.attrSize = 1;_node3.attrHash = 1929833146;_node3.attrs["w-class"] = "loading-img";_$parent3.children.push(_node3);
			}_$temp = _node2;{
				var _$parent4 = _$temp;var _node4 = { "attrs": {}, "tagName": "p", "sid": 3 };_node4.children = [];_node4.attrSize = 1;_node4.attrHash = 2886807430;_node4.attrs["w-class"] = "pi-loading-text";if (it.text) {
					if (typeof it.text === 'string') {
						_$temp = _node4;{
							var _$parent5 = _$temp;_addText(it.text, _$parent5);
						}
					} else {
						_$temp = _node4;{
							var _$parent6 = _$temp;var _node5 = { "attrs": {}, "tagName": "pi-ui-lang", "sid": 4 };_node5.hasChild = false;_node5.child = null;_node5.attrHash = 0;_$temp = _node5;{
								var _$parent7 = _$temp;_addJson(it.text, _$parent7);
							}_chFunc(_node5);_$parent6.children.push(_node5);
						}
					}
				} else {
					_$temp = _node4;{
						var _$parent8 = _$temp;var _node6 = { "attrs": {}, "tagName": "pi-ui-lang", "sid": 5 };_node6.hasChild = false;_node6.child = null;_node6.childHash = 2946580784;_node6.attrHash = 0;_$temp = _node6;{
							var _$parent9 = _$temp;var _node7 = {}; //jpair pre

							{
								var jvalue = "";
								jvalue = "加载中";
								//jpair suf

								_node7["zh_Hans"] = jvalue;
							}
							//jpair pre

							{
								var _jvalue = "";
								_jvalue = "加載中";
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
							_addJson(_node7, _$parent9);
						}_$parent8.children.push(_node6);
					}
				}_chFunc(_node4);_$parent4.children.push(_node4);
			}_chFunc(_node2);_$parent2.children.push(_node2);
		}_chFunc(_node);return _node;
	}
});