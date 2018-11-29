(function (_cfg, it, it1) {
	var _$temp = void 0,
	    node = void 0;_$temp = node;{
		var _$parent = _$temp;var _node = { "attrs": {}, "tagName": "div", "sid": 0 };_node.children = [];_node.attrSize = 4;_node.attrHash = 267145571;_node.attrs["class"] = "new-page";_node.attrs["ev-back-click"] = "backPrePage";_node.attrs["w-class"] = "new-page";_node.attrs["ev-next-click"] = "goDetail";topBarTitle = { "zh_Hans": "导出私钥", "zh_Hant": "導出私鑰", "en": "" };_$temp = _node;{
			var _$parent2 = _$temp;var _node2 = { "attrs": {}, "tagName": "app-components1-topBar-topBar", "sid": 1 };_node2.hasChild = false;_node2.child = null;_node2.attrHash = 0;_$temp = _node2;{
				var _$parent3 = _$temp;var _node3 = {}; //jpair pre

				_node3["title"] = topBarTitle;
				//jpair suf
				//jpair pre

				{
					var jvalue = "";
					jvalue = "../../res/image/41_gray.png";
					//jpair suf

					_node3["nextImg"] = jvalue;
				}
				_addJson(_node3, _$parent3);
			}_chFunc(_node2);_$parent2.children.push(_node2);
		}_$temp = _node;{
			var _$parent4 = _$temp;var _node4 = { "attrs": {}, "tagName": "div", "sid": 2 };_node4.children = [];_node4.attrSize = 1;_node4.attrHash = 2812074640;_node4.attrs["w-class"] = "container";_$temp = _node4;{
				var _$parent5 = _$temp;var _node5 = { "attrs": {}, "tagName": "div", "sid": 3 };_node5.children = [];_node5.attrSize = 3;_node5.attrHash = 1281411936;_node5.attrs["w-class"] = "currency-container";_node5.attrs["ev-collapse-change"] = "collapseChange";_node5.attrs["ev-collapse-item-click"] = "collapseItemClick";_$temp = _node5;{
					var _$parent6 = _$temp;var _node6 = { "attrs": {}, "tagName": "app-components-collapse-collapse", "sid": 4 };_node6.hasChild = false;_node6.child = null;_node6.attrHash = 0;_$temp = _node6;{
						var _$parent7 = _$temp;var _node7 = {}; //jpair pre

						_node7["collapseList"] = it1.collapseList;
						//jpair suf
						//jpair pre

						_node7["accordion"] = true;
						//jpair suf
						_addJson(_node7, _$parent7);
					}_chFunc(_node6);_$parent6.children.push(_node6);
				}_chFunc(_node5);_$parent5.children.push(_node5);
			}_chFunc(_node4);_$parent4.children.push(_node4);
		}_chFunc(_node);return _node;
	}
});