(function (_cfg, it, it1) {
	var _$temp = void 0,
	    node = void 0;_$temp = node;{
		var _$parent = _$temp;var _node = { "attrs": {}, "tagName": "div", "sid": 0 };_node.children = [];_node.attrSize = 2;_node.attrHash = 2139844790;_node.attrs["class"] = "new-page";_node.attrs["ev-back-click"] = "backPrePage";topBarTitle = { "zh_Hans": "手机号码", "zh_Hant": "手機號碼", "en": "" };_$temp = _node;{
			var _$parent2 = _$temp;var _node2 = { "attrs": {}, "tagName": "app-components1-topBar-topBar", "sid": 1 };_node2.hasChild = false;_node2.child = null;_node2.attrHash = 0;_$temp = _node2;{
				var _$parent3 = _$temp;var _node3 = {}; //jpair pre

				_node3["title"] = topBarTitle;
				//jpair suf
				_addJson(_node3, _$parent3);
			}_chFunc(_node2);_$parent2.children.push(_node2);
		}_$temp = _node;{
			var _$parent4 = _$temp;var _node4 = { "attrs": {}, "tagName": "div", "sid": 2 };_node4.children = [];_node4.childHash = 1408055209;_node4.attrSize = 2;_node4.attrHash = 1781424085;_node4.attrs["style"] = "margin: 30px 20px;";_node4.attrs["ev-getCode"] = "phoneChange";_$temp = _node4;{
				var _$parent5 = _$temp;var _node5 = { "attrs": {}, "tagName": "app-components-bindPhone-bindPhone", "sid": 3 };_node5.hasChild = false;_node5.child = null;_node5.childHash = 2946814719;_node5.attrHash = 0;_$parent5.children.push(_node5);
			}_$parent4.children.push(_node4);
		}_$temp = _node;{
			var _$parent6 = _$temp;var _node6 = { "attrs": {}, "tagName": "div", "sid": 4 };_node6.children = [];_node6.attrSize = 1;_node6.attrHash = 487306359;_node6.attrs["w-class"] = "content";if (!it1.isSuccess) {
				_$temp = _node6;{
					var _$parent7 = _$temp;var _node7 = { "attrs": {}, "tagName": "div", "sid": 5 };_node7.children = [];_node7.childHash = 4282920316;_node7.attrSize = 1;_node7.attrHash = 3454374597;_node7.attrs["w-class"] = "verify";_$temp = _node7;{
						var _$parent8 = _$temp;var _node8 = { "attrs": {}, "tagName": "pi-ui-lang", "sid": 6 };_node8.hasChild = false;_node8.child = null;_node8.childHash = 2485332992;_node8.attrHash = 0;_$temp = _node8;{
							var _$parent9 = _$temp;var _node9 = {}; //jpair pre

							{
								var jvalue = "";
								jvalue = "验证码有误";
								//jpair suf

								_node9["zh_Hans"] = jvalue;
							}
							//jpair pre

							{
								var _jvalue = "";
								_jvalue = "驗證碼有誤";
								//jpair suf

								_node9["zh_Hant"] = _jvalue;
							}
							//jpair pre

							{
								var _jvalue2 = "";
								_jvalue2 = "";
								//jpair suf

								_node9["en"] = _jvalue2;
							}
							_addJson(_node9, _$parent9);
						}_$parent8.children.push(_node8);
					}_$parent7.children.push(_node7);
				}
			}_$temp = _node6;{
				var _$parent10 = _$temp;var _node10 = { "attrs": {}, "tagName": "div", "sid": 7 };_node10.children = [];_node10.attrSize = 1;_node10.attrHash = 1452155655;_node10.attrs["style"] = "text-align: center;margin-top: 60px;";{
					var _$i = 0;
					var _arr = [1, 2, 3, 4];
					for (var _i = 0; _i < _arr.length; _i++) {
						var val = _arr[_i];var ind = _$i++;_$temp = _node10;{
							var _$parent11 = _$temp;var _node11 = { "attrs": {}, "tagName": "div", "sid": 8 };_node11.children = [];_node11.attrSize = 1;_node11.attrHash = 1629322377;_node11.attrs["w-class"] = "codeBottom";_$temp = _node11;{
								var _$parent12 = _$temp;var _node12 = { "attrs": {}, "tagName": "input", "sid": 9 };_node12.children = [];_node12.attrSize = 5;_node12.attrHash = 176535974;_node12.attrs["type"] = "number";_node12.attrs["w-class"] = "codeInput";{
									var attrvalue = "";attrvalue += "codeInput";attrvalue += ind;attrvalue += "";_node12.attrs["id"] = attrvalue;
								}_node12.attrHash = _hash.nextHash(_node12.attrHash, _calTextHash(_node12.attrs["id"]));_node12.attrs["on-keyup"] = "codeChange";_node12.attrs["on-focus"] = "codeFocus";_chFunc(_node12);_$parent12.children.push(_node12);
							}_chFunc(_node11);_$parent11.children.push(_node11);
						}
					}
				}_chFunc(_node10);_$parent10.children.push(_node10);
			}_chFunc(_node6);_$parent6.children.push(_node6);
		}_chFunc(_node);return _node;
	}
});