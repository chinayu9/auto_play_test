(function (_cfg, it, it1) {
	var _$temp = void 0,
	    node = void 0;_$temp = node;{
		var _$parent = _$temp;var _node = { "attrs": {}, "tagName": "div", "sid": 0 };_node.children = [];_node.attrSize = 1;_node.attrHash = 3118159832;_node.attrs["w-class"] = "asset-container";_$temp = _node;{
			var _$parent2 = _$temp;var _node2 = { "attrs": {}, "tagName": "div", "sid": 1 };_node2.children = [];_node2.attrSize = 1;_node2.attrHash = 3181901047;_node2.attrs["w-class"] = "total-asset-container";_$temp = _node2;{
				var _$parent3 = _$temp;var _node3 = { "attrs": {}, "tagName": "div", "sid": 2 };_node3.children = [];_node3.attrSize = 1;_node3.attrHash = 2866552653;_node3.attrs["w-class"] = "total-asset";_$temp = _node3;{
					var _$parent4 = _$temp;var _node4 = { "attrs": {}, "tagName": "pi-ui-lang", "sid": 3 };_node4.hasChild = false;_node4.child = null;_node4.childHash = 1854742912;_node4.attrHash = 0;_$temp = _node4;{
						var _$parent5 = _$temp;var _node5 = {}; //jpair pre

						{
							var jvalue = "";
							jvalue = "本地资产：≈";
							//jpair suf

							_node5["zh_Hans"] = jvalue;
						}
						//jpair pre

						{
							var _jvalue = "";
							_jvalue = "本地資產：≈";
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
				}_$temp = _node3;{
					var _$parent6 = _$temp;_addText(it1.currencyUnitSymbol, _$parent6);
				}_$temp = _node3;{
					var _$parent7 = _$temp;_addText(it1.totalAsset, _$parent7);
				}_chFunc(_node3);_$parent3.children.push(_node3);
			}_$temp = _node2;{
				var _$parent8 = _$temp;var _node6 = { "attrs": {}, "tagName": "img", "sid": 4 };_node6.children = [];_node6.childHash = 0;_node6.attrSize = 3;_node6.attrHash = 3601108044;_node6.attrs["src"] = "../../../res/image1/add.png";_node6.attrs["w-class"] = "add-asset";_node6.attrs["on-tap"] = "addAssetClick";_$parent8.children.push(_node6);
			}_chFunc(_node2);_$parent2.children.push(_node2);
		}_$temp = _node;{
			var _$parent9 = _$temp;var _node7 = { "attrs": {}, "tagName": "div", "sid": 5 };_node7.children = [];_node7.attrSize = 2;_node7.attrHash = 2982197612;_node7.attrs["w-class"] = "asset-list";_node7.attrs["ev-item-click"] = "itemClick";_$temp = _node7;{
				var _$parent10 = _$temp;var _node8 = { "attrs": {}, "tagName": "app-components1-walletAssetList-walletAssetList", "sid": 6 };_node8.hasChild = false;_node8.child = null;_node8.attrHash = 0;_$temp = _node8;{
					var _$parent11 = _$temp;var _node9 = {}; //jpair pre

					_node9["assetList"] = it1.assetList;
					//jpair suf
					//jpair pre

					_node9["redUp"] = it1.redUp;
					//jpair suf
					//jpair pre

					_node9["currencyUnitSymbol"] = it1.currencyUnitSymbol;
					//jpair suf
					_addJson(_node9, _$parent11);
				}_chFunc(_node8);_$parent10.children.push(_node8);
			}_chFunc(_node7);_$parent9.children.push(_node7);
		}_chFunc(_node);return _node;
	}
});