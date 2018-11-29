(function (_cfg, it, it1) {
	var _$temp = void 0,
	    node = void 0;_$temp = node;{
		var _$parent = _$temp;var _node = { "attrs": {}, "tagName": "div", "sid": 0 };_node.children = [];_node.attrSize = 3;_node.attrHash = 814419304;_node.attrs["class"] = "new-page";_node.attrs["w-class"] = "new-page";_node.attrs["on-tap"] = "closePage";_$temp = _node;{
			var _$parent2 = _$temp;var _node2 = { "attrs": {}, "tagName": "div", "sid": 1 };_node2.children = [];_node2.attrSize = 2;_node2.attrHash = 3147826738;_node2.attrs["w-class"] = "body";_node2.attrs["on-tap"] = "no";_$temp = _node2;{
				var _$parent3 = _$temp;var _node3 = { "attrs": {}, "tagName": "div", "sid": 2 };_node3.children = [];_node3.childHash = 2745889568;_node3.attrSize = 1;_node3.attrHash = 1019047777;_node3.attrs["w-class"] = "title";_$temp = _node3;{
					var _$parent4 = _$temp;var _node4 = { "attrs": {}, "tagName": "pi-ui-lang", "sid": 3 };_node4.hasChild = false;_node4.child = null;_node4.childHash = 2383732299;_node4.attrHash = 0;_$temp = _node4;{
						var _$parent5 = _$temp;var _node5 = {}; //jpair pre

						{
							var jvalue = "";
							jvalue = "理财声明";
							//jpair suf

							_node5["zh_Hans"] = jvalue;
						}
						//jpair pre

						{
							var _jvalue = "";
							_jvalue = "理財聲明";
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
				var _$parent6 = _$temp;var _node6 = { "attrs": {}, "tagName": "div", "sid": 4 };_node6.children = [];_node6.attrSize = 1;_node6.attrHash = 3769928495;_node6.attrs["w-class"] = "statement";_$temp = _node6;{
					var _$parent7 = _$temp;var _node7 = { "attrs": {}, "tagName": "div", "sid": 5 };_node7.children = [];_node7.attrHash = 0;_$temp = _node7;{
						var _$parent8 = _$temp;_addText(it1.statement, _$parent8);
					}_chFunc(_node7);_$parent7.children.push(_node7);
				}_chFunc(_node6);_$parent6.children.push(_node6);
			}_$temp = _node2;{
				var _$parent9 = _$temp;var _node8 = { "attrs": {}, "tagName": "div", "sid": 6 };_node8.children = [];_node8.attrSize = 2;_node8.attrHash = 2944361944;_node8.attrs["w-class"] = "agree-choose";_node8.attrs["ev-checkbox-click"] = "checkBoxClick";mess = { "zh_Hans": "我已经认真阅读并同意", "zh_Hant": "我已經認證閱讀並同意", "en": "" };_$temp = _node8;{
					var _$parent10 = _$temp;var _node9 = { "attrs": {}, "tagName": "app-components1-checkbox-checkbox", "sid": 7 };_node9.hasChild = false;_node9.child = null;_node9.attrHash = 0;_$temp = _node9;{
						var _$parent11 = _$temp;var _node10 = {}; //jpair pre

						{
							var _jvalue3 = "";
							_jvalue3 = "false";
							//jpair suf

							_node10["itype"] = _jvalue3;
						}
						//jpair pre

						_node10["text"] = mess;
						//jpair suf
						_addJson(_node10, _$parent11);
					}_chFunc(_node9);_$parent10.children.push(_node9);
				}_chFunc(_node8);_$parent9.children.push(_node8);
			}_$temp = _node2;{
				var _$parent12 = _$temp;var _node11 = { "attrs": {}, "tagName": "div", "sid": 8 };_node11.children = [];_node11.attrSize = 2;_node11.attrHash = 1573521945;_node11.attrs["ev-btn-tap"] = "nextClick";_node11.attrs["w-class"] = "btn";btnName = { "zh_Hans": "我已阅读", "zh_Hant": "我已閱讀", "en": "" };_$temp = _node11;{
					var _$parent13 = _$temp;var _node12 = { "attrs": {}, "tagName": "app-components1-btn-btn", "sid": 9 };_node12.hasChild = false;_node12.child = null;_node12.attrHash = 0;_$temp = _node12;{
						var _$parent14 = _$temp;var _node13 = {}; //jpair pre

						_node13["name"] = btnName;
						//jpair suf
						//jpair pre

						{
							var _jvalue4 = "";
							_jvalue4 = "big";
							//jpair suf

							_node13["types"] = _jvalue4;
						}
						//jpair pre

						{
							var _jvalue5 = "";
							_jvalue5 = "blue";
							//jpair suf

							_node13["color"] = _jvalue5;
						}
						//jpair pre

						_node13["cannotClick"] = !it1.readed;
						//jpair suf
						_addJson(_node13, _$parent14);
					}_chFunc(_node12);_$parent13.children.push(_node12);
				}_chFunc(_node11);_$parent12.children.push(_node11);
			}_chFunc(_node2);_$parent2.children.push(_node2);
		}_chFunc(_node);return _node;
	}
});