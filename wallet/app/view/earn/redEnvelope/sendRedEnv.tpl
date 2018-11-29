(function (_cfg, it, it1) {
	var _$temp = void 0,
	    node = void 0;_$temp = node;{
		var _$parent = _$temp;var _node = { "attrs": {}, "tagName": "div", "sid": 0 };_node.children = [];_node.attrSize = 1;_node.attrHash = 1250095831;_node.attrs["w-class"] = "modal-mask";_$temp = _node;{
			var _$parent2 = _$temp;var _node2 = { "attrs": {}, "tagName": "div", "sid": 1 };_node2.children = [];_node2.attrSize = 1;_node2.attrHash = 4252679546;_node2.attrs["w-class"] = "body";_$temp = _node2;{
				var _$parent3 = _$temp;var _node3 = { "attrs": {}, "tagName": "img", "sid": 2 };_node3.children = [];_node3.childHash = 0;_node3.attrSize = 2;_node3.attrHash = 1729429996;_node3.attrs["src"] = "../../../res/image/redEnvBack.png";_node3.attrs["style"] = "height: auto;width: 100%;position: fixed;";_$parent3.children.push(_node3);
			}_$temp = _node2;{
				var _$parent4 = _$temp;var _node4 = { "attrs": {}, "tagName": "img", "sid": 3 };_node4.children = [];_node4.childHash = 0;_node4.attrSize = 3;_node4.attrHash = 816131671;_node4.attrs["w-class"] = "clear";_node4.attrs["src"] = "../../../res/image/whiteClose.png";_node4.attrs["on-tap"] = "backPrePage";_$parent4.children.push(_node4);
			}_$temp = _node2;{
				var _$parent5 = _$temp;var _node5 = { "attrs": {}, "tagName": "div", "sid": 4 };_node5.children = [];_node5.childHash = 2913765714;_node5.attrSize = 1;_node5.attrHash = 1019047777;_node5.attrs["w-class"] = "title";_$temp = _node5;{
					var _$parent6 = _$temp;var _node6 = { "attrs": {}, "tagName": "pi-ui-lang", "sid": 5 };_node6.hasChild = false;_node6.child = null;_node6.childHash = 824313610;_node6.attrHash = 0;_$temp = _node6;{
						var _$parent7 = _$temp;var _node7 = {}; //jpair pre

						{
							var jvalue = "";
							jvalue = "红包准备好了";
							//jpair suf

							_node7["zh_Hans"] = jvalue;
						}
						//jpair pre

						{
							var _jvalue = "";
							_jvalue = "紅包準備好了";
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
						_addJson(_node7, _$parent7);
					}_$parent6.children.push(_node6);
				}_$parent5.children.push(_node5);
			}_$temp = _node2;{
				var _$parent8 = _$temp;var _node8 = { "attrs": {}, "tagName": "div", "sid": 6 };_node8.children = [];_node8.attrSize = 1;_node8.attrHash = 487306359;_node8.attrs["w-class"] = "content";_$temp = _node8;{
					var _$parent9 = _$temp;_addText(it.message, _$parent9);
				}_chFunc(_node8);_$parent8.children.push(_node8);
			}_$temp = _node2;{
				var _$parent10 = _$temp;var _node9 = { "attrs": {}, "tagName": "div", "sid": 7 };_node9.children = [];_node9.childHash = 196257070;_node9.attrSize = 1;_node9.attrHash = 2590122910;_node9.attrs["style"] = "position: absolute;margin-top: 590px;text-align: center;width: 100%;";_$temp = _node9;{
					var _$parent11 = _$temp;var _node10 = { "attrs": {}, "tagName": "img", "sid": 8 };_node10.children = [];_node10.childHash = 0;_node10.attrSize = 3;_node10.attrHash = 961974423;_node10.attrs["w-class"] = "sendRedBtn";_node10.attrs["src"] = "../../../res/image/sendRedEnv.png";_node10.attrs["on-tap"] = "sendRedEnv";_$parent11.children.push(_node10);
				}_$parent10.children.push(_node9);
			}_chFunc(_node2);_$parent2.children.push(_node2);
		}_chFunc(_node);return _node;
	}
});