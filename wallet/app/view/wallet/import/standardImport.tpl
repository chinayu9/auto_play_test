(function (_cfg, it, it1) {
	var _$temp = void 0,
	    node = void 0;_$temp = node;{
		var _$parent = _$temp;var _node = { "attrs": {}, "tagName": "div", "sid": 0 };_node.children = [];_node.attrSize = 2;_node.attrHash = 138104688;_node.attrs["class"] = "new-page";_node.attrs["w-class"] = "new-page";tipsCardTitle = { "zh_Hans": "按序输入助记词", "zh_Hant": "按序輸入助記詞", "en": "" };tipsCardContent = { "zh_Hans": "请输入您创建账号时备份的12个英文单词", "zh_Hant": "請輸入您創建賬號時備份的12個英文單詞", "en": "" };_$temp = _node;{
			var _$parent2 = _$temp;var _node2 = { "attrs": {}, "tagName": "app-view-wallet-components-tipsCard", "sid": 1 };_node2.hasChild = false;_node2.child = null;_node2.attrHash = 0;_$temp = _node2;{
				var _$parent3 = _$temp;var _node3 = {}; //jpair pre

				_node3["title"] = tipsCardTitle;
				//jpair suf
				//jpair pre

				_node3["content"] = tipsCardContent;
				//jpair suf
				_addJson(_node3, _$parent3);
			}_chFunc(_node2);_$parent2.children.push(_node2);
		}_$temp = _node;{
			var _$parent4 = _$temp;var _node4 = { "attrs": {}, "tagName": "div", "sid": 2 };_node4.children = [];_node4.attrSize = 1;_node4.attrHash = 4064917415;_node4.attrs["w-class"] = "bottom-box";_$temp = _node4;{
				var _$parent5 = _$temp;var _node5 = { "attrs": {}, "tagName": "div", "sid": 3 };_node5.children = [];_node5.attrSize = 2;_node5.attrHash = 1604252107;_node5.attrs["w-class"] = "textarea-father";_node5.attrs["ev-input-change"] = "inputChange";inputPlace = { "zh_Hans": "输入助记词，空格键分隔", "zh_Hant": "輸入助記詞，空格鍵分隔", "en": "" };_$temp = _node5;{
					var _$parent6 = _$temp;var _node6 = { "attrs": {}, "tagName": "app-components-textarea-textarea", "sid": 4 };_node6.hasChild = false;_node6.child = null;_node6.attrHash = 0;_$temp = _node6;{
						var _$parent7 = _$temp;var _node7 = {}; //jpair pre

						_node7["placeHolder"] = inputPlace;
						//jpair suf
						_addJson(_node7, _$parent7);
					}_chFunc(_node6);_$parent6.children.push(_node6);
				}_chFunc(_node5);_$parent5.children.push(_node5);
			}_$temp = _node4;{
				var _$parent8 = _$temp;var _node8 = { "attrs": {}, "tagName": "div", "sid": 5 };_node8.children = [];_node8.attrSize = 2;_node8.attrHash = 1573521945;_node8.attrs["ev-btn-tap"] = "nextClick";_node8.attrs["w-class"] = "btn";btnName = { "zh_Hans": "下一步", "zh_Hant": "下一步", "en": "" };_$temp = _node8;{
					var _$parent9 = _$temp;var _node9 = { "attrs": {}, "tagName": "app-components1-btn-btn", "sid": 6 };_node9.hasChild = false;_node9.child = null;_node9.attrHash = 0;_$temp = _node9;{
						var _$parent10 = _$temp;var _node10 = {}; //jpair pre

						_node10["name"] = btnName;
						//jpair suf
						//jpair pre

						{
							var jvalue = "";
							jvalue = "big";
							//jpair suf

							_node10["types"] = jvalue;
						}
						//jpair pre

						{
							var _jvalue = "";
							_jvalue = "blue";
							//jpair suf

							_node10["color"] = _jvalue;
						}
						_addJson(_node10, _$parent10);
					}_chFunc(_node9);_$parent9.children.push(_node9);
				}_chFunc(_node8);_$parent8.children.push(_node8);
			}_chFunc(_node4);_$parent4.children.push(_node4);
		}_chFunc(_node);return _node;
	}
});