(function (_cfg, it, it1) {
	var _$temp = void 0,
	    node = void 0;_$temp = node;{
		var _$parent = _$temp;var _node = { "attrs": {}, "tagName": "div", "sid": 0 };_node.children = [];_node.attrSize = 3;_node.attrHash = 2334361879;_node.attrs["class"] = "new-page";_node.attrs["ev-back-click"] = "backPrePage";_node.attrs["ev-next-click"] = "goHistory";topBarTitle = { "zh_Hans": "兑换", "zh_Hant": "兌換", "en": "" };_$temp = _node;{
			var _$parent2 = _$temp;var _node2 = { "attrs": {}, "tagName": "app-components1-topBar-topBar", "sid": 1 };_node2.hasChild = false;_node2.child = null;_node2.attrHash = 0;_$temp = _node2;{
				var _$parent3 = _$temp;var _node3 = {}; //jpair pre

				_node3["title"] = topBarTitle;
				//jpair suf
				//jpair pre

				{
					var jvalue = "";
					jvalue = "../../res/image/detailBlueIcon.png";
					//jpair suf

					_node3["nextImg"] = jvalue;
				}
				_addJson(_node3, _$parent3);
			}_chFunc(_node2);_$parent2.children.push(_node2);
		}_$temp = _node;{
			var _$parent4 = _$temp;var _node4 = { "attrs": {}, "tagName": "div", "sid": 2 };_node4.children = [];_node4.attrSize = 2;_node4.attrHash = 4241450305;_node4.attrs["w-class"] = "inputBox";_node4.attrs["ev-input-change"] = "inputChange";inputPlaceholder = { "zh_Hans": "输入兑换码，领取红包", "zh_Hant": "輸入兌換碼，領取紅包", "en": "" };_$temp = _node4;{
				var _$parent5 = _$temp;var _node5 = { "attrs": {}, "tagName": "app-components1-input-input", "sid": 3 };_node5.hasChild = false;_node5.child = null;_node5.attrHash = 0;_$temp = _node5;{
					var _$parent6 = _$temp;var _node6 = {}; //jpair pre

					_node6["placeHolder"] = inputPlaceholder;
					//jpair suf
					//jpair pre

					{
						var _jvalue = "";
						_jvalue = "border-radius:12px;";
						//jpair suf

						_node6["style"] = _jvalue;
					}
					//jpair pre

					_node6["input"] = it1.cid;
					//jpair suf
					//jpair pre

					_node6["notUnderLine"] = true;
					//jpair suf
					_addJson(_node6, _$parent6);
				}_chFunc(_node5);_$parent5.children.push(_node5);
			}_chFunc(_node4);_$parent4.children.push(_node4);
		}_$temp = _node;{
			var _$parent7 = _$temp;var _node7 = { "attrs": {}, "tagName": "div", "sid": 4 };_node7.children = [];_node7.attrSize = 2;_node7.attrHash = 231078933;_node7.attrs["w-class"] = "btn";_node7.attrs["ev-btn-tap"] = "convertClick";btnName = { "zh_Hans": "兑换", "zh_Hant": "兌換", "en": "" };_$temp = _node7;{
				var _$parent8 = _$temp;var _node8 = { "attrs": {}, "tagName": "app-components1-btn-btn", "sid": 5 };_node8.hasChild = false;_node8.child = null;_node8.attrHash = 0;_$temp = _node8;{
					var _$parent9 = _$temp;var _node9 = {}; //jpair pre

					_node9["name"] = btnName;
					//jpair suf
					//jpair pre

					{
						var _jvalue2 = "";
						_jvalue2 = "blue";
						//jpair suf

						_node9["color"] = _jvalue2;
					}
					_addJson(_node9, _$parent9);
				}_chFunc(_node8);_$parent8.children.push(_node8);
			}_chFunc(_node7);_$parent7.children.push(_node7);
		}_chFunc(_node);return _node;
	}
});