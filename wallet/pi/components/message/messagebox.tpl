(function (_cfg, it, it1) {
	var _$temp = void 0,
	    node = void 0;_$temp = node;{
		var _$parent = _$temp;var _node = { "attrs": {}, "tagName": "div", "sid": 0 };_node.children = [];_node.attrSize = 1;_node.attrHash = 3338124703;_node.attrs["w-class"] = "base";_$temp = _node;{
			var _$parent2 = _$temp;var _node2 = { "attrs": {}, "tagName": "div", "sid": 1 };_node2.children = [];_node2.childHash = 2946814719;_node2.attrSize = 1;_node2.attrHash = 145131995;_node2.attrs["w-class"] = "bg";_$parent2.children.push(_node2);
		}_$temp = _node;{
			var _$parent3 = _$temp;var _node3 = { "attrs": {}, "tagName": "div", "sid": 2 };_node3.children = [];_node3.attrSize = 1;_node3.attrHash = 1913054642;_node3.attrs["w-class"] = "main";_$temp = _node3;{
				var _$parent4 = _$temp;var _node4 = { "attrs": {}, "tagName": "div", "sid": 3 };_node4.children = [];_node4.attrSize = 1;_node4.attrHash = 2559935368;_node4.attrs["w-class"] = "header";_$temp = _node4;{
					var _$parent5 = _$temp;var _node5 = { "attrs": {}, "tagName": "div", "sid": 4 };_node5.children = [];_node5.attrSize = 1;_node5.attrHash = 1019047777;_node5.attrs["w-class"] = "title";_$temp = _node5;{
						var _$parent6 = _$temp;var _node6 = { "attrs": {}, "tagName": "span", "sid": 5 };_node6.children = [];_node6.attrHash = 0;_$temp = _node6;{
							var _$parent7 = _$temp;_addText(it.title, _$parent7);
						}_chFunc(_node6);_$parent6.children.push(_node6);
					}_chFunc(_node5);_$parent5.children.push(_node5);
				}_chFunc(_node4);_$parent4.children.push(_node4);
			}_$temp = _node3;{
				var _$parent8 = _$temp;var _node7 = { "attrs": {}, "tagName": "div", "sid": 6 };_node7.children = [];_node7.attrSize = 1;_node7.attrHash = 487306359;_node7.attrs["w-class"] = "content";_$temp = _node7;{
					var _$parent9 = _$temp;var _node8 = { "attrs": {}, "tagName": "div", "sid": 7 };_node8.children = [];_node8.attrSize = 1;_node8.attrHash = 2697260623;_node8.attrs["w-class"] = "message";_$temp = _node8;{
						var _$parent10 = _$temp;var _node9 = { "attrs": {}, "tagName": "p", "sid": 8 };_node9.children = [];_node9.attrHash = 0;_$temp = _node9;{
							var _$parent11 = _$temp;_addText(it.content, _$parent11);
						}_chFunc(_node9);_$parent10.children.push(_node9);
					}_chFunc(_node8);_$parent9.children.push(_node8);
				}if (it.type === "prompt") {
					_$temp = _node7;{
						var _$parent12 = _$temp;var _node10 = { "attrs": {}, "tagName": "div", "sid": 9 };_node10.children = [];_node10.attrSize = 1;_node10.attrHash = 3045120699;_node10.attrs["ev-input-change"] = "inputChange";_$temp = _node10;{
							var _$parent13 = _$temp;var _node11 = { "attrs": {}, "tagName": "input-input$$", "sid": 10 };_node11.hasChild = false;_node11.child = null;_node11.attrHash = 0;_$temp = _node11;{
								var _$parent14 = _$temp;var _node12 = {}; //jpair pre

								_node12["type"] = it.inputType;
								//jpair suf
								_addJson(_node12, _$parent14);
							}_chFunc(_node11);_$parent13.children.push(_node11);
						}_chFunc(_node10);_$parent12.children.push(_node10);
					}
				}_chFunc(_node7);_$parent8.children.push(_node7);
			}_$temp = _node3;{
				var _$parent15 = _$temp;var _node13 = { "attrs": {}, "tagName": "div", "sid": 11 };_node13.children = [];_node13.attrSize = 1;_node13.attrHash = 2566746008;_node13.attrs["w-class"] = "btns";if (it.type === "confirm" || it.type === "prompt") {
					_$temp = _node13;{
						var _$parent16 = _$temp;var _node14 = { "attrs": {}, "tagName": "button", "sid": 12 };_node14.children = [];_node14.childHash = 2573229304;_node14.attrSize = 4;_node14.attrHash = 1244894819;_node14.attrs["type"] = "button";_node14.attrs["w-class"] = "button button_small";_node14.attrs["on-tap"] = "doClickCancel";_node14.attrs["style"] = "margin-right: 10px;";_$temp = _node14;{
							var _$parent17 = _$temp;var _node15 = { "attrs": {}, "tagName": "span", "sid": 13 };_node15.children = [];_node15.childHash = 2195018664;_node15.attrHash = 0;_$temp = _node15;{
								var _$parent18 = _$temp;var _node16 = _installText("取消", 359863121);;
								_$parent18.children.push(_node16);
							}_$parent17.children.push(_node15);
						}_$parent16.children.push(_node14);
					}
				}_$temp = _node13;{
					var _$parent19 = _$temp;var _node17 = { "attrs": {}, "tagName": "button", "sid": 14 };_node17.children = [];_node17.childHash = 1228218462;_node17.attrSize = 3;_node17.attrHash = 2731318130;_node17.attrs["type"] = "button";_node17.attrs["w-class"] = "button button_small button_sure";_node17.attrs["on-tap"] = "doClickSure";_$temp = _node17;{
						var _$parent20 = _$temp;var _node18 = { "attrs": {}, "tagName": "span", "sid": 15 };_node18.children = [];_node18.childHash = 2383734690;_node18.attrHash = 0;_$temp = _node18;{
							var _$parent21 = _$temp;var _node19 = _installText("确定", 2644238972);;
							_$parent21.children.push(_node19);
						}_$parent20.children.push(_node18);
					}_$parent19.children.push(_node17);
				}_chFunc(_node13);_$parent15.children.push(_node13);
			}_chFunc(_node3);_$parent3.children.push(_node3);
		}_chFunc(_node);return _node;
	}
});