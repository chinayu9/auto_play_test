(function (_cfg, it, it1) {
	var _$temp = void 0,
	    node = void 0;_$temp = node;{
		var _$parent = _$temp;var _node = { "attrs": {}, "tagName": "div", "sid": 0 };_node.children = [];_node.attrSize = 2;_node.attrHash = 3600710719;_node.attrs["w-class"] = "basicInput";{
			var attrvalue = "";attrvalue += it.style;attrvalue += "";_node.attrs["style"] = attrvalue;
		}_node.attrHash = _hash.nextHash(_node.attrHash, _calTextHash(_node.attrs["style"]));_$temp = _node;{
			var _$parent2 = _$temp;var _node2 = { "attrs": {}, "tagName": "span", "sid": 1 };_node2.children = [];_node2.attrSize = 1;_node2.attrHash = 3939135354;_node2.attrs["w-class"] = "prepend";if (it.isShowPin) {
				_$temp = _node2;{
					var _$parent3 = _$temp;var _node3 = { "attrs": {}, "tagName": "span", "sid": 2 };_node3.children = [];_node3.childHash = 3118695505;_node3.attrSize = 1;_node3.attrHash = 2405874756;_node3.attrs["w-class"] = "other";_$temp = _node3;{
						var _$parent4 = _$temp;var _node4 = { "attrs": {}, "tagName": "pi-ui-lang", "sid": 3 };_node4.hasChild = false;_node4.child = null;_node4.childHash = 2381536771;_node4.attrHash = 0;_$temp = _node4;{
							var _$parent5 = _$temp;var _node5 = {}; //jpair pre

							{
								var jvalue = "";
								jvalue = "拼";
								//jpair suf

								_node5["zh_Hans"] = jvalue;
							}
							//jpair pre

							{
								var _jvalue = "";
								_jvalue = "拼";
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
				}
			}_$temp = _node2;{
				var _$parent6 = _$temp;var _node6 = { "attrs": {}, "tagName": "pi-ui-lang", "sid": 4 };_node6.hasChild = false;_node6.child = null;_node6.attrHash = 0;_$temp = _node6;{
					var _$parent7 = _$temp;_addJson(it.prepend, _$parent7);
				}_chFunc(_node6);_$parent6.children.push(_node6);
			}_chFunc(_node2);_$parent2.children.push(_node2);
		}_$temp = _node;{
			var _$parent8 = _$temp;var _node7 = { "attrs": {}, "tagName": "span", "sid": 5 };_node7.children = [];_node7.attrSize = 1;_node7.attrHash = 1600496066;_node7.attrs["style"] = "flex: 1;height: 100%;";_$temp = _node7;{
				var _$parent9 = _$temp;var _node8 = { "attrs": {}, "tagName": "app-components1-input-input", "sid": 6 };_node8.hasChild = false;_node8.child = null;_node8.attrHash = 0;_$temp = _node8;{
					var _$parent10 = _$temp;var _node9 = {}; //jpair pre

					_node9["placeHolder"] = it.placeholder ? it.placeholder : "";
					//jpair suf
					//jpair pre

					{
						var _jvalue3 = "";
						_jvalue3 = "text-align: right;";
						//jpair suf

						_node9["style"] = _jvalue3;
					}
					//jpair pre

					_node9["itype"] = it.itype ? it.itype : "text";
					//jpair suf
					//jpair pre

					_node9["input"] = it.input ? it.input : '';
					//jpair suf
					//jpair pre

					_node9["notUnderLine"] = it.notUnderLine ? true : false;
					//jpair suf
					//jpair pre

					_node9["maxLength"] = it.maxLength ? it.maxLength : '';
					//jpair suf
					_addJson(_node9, _$parent10);
				}_chFunc(_node8);_$parent9.children.push(_node8);
			}_chFunc(_node7);_$parent8.children.push(_node7);
		}if (it.append && it.append != "") {
			_$temp = _node;{
				var _$parent11 = _$temp;var _node10 = { "attrs": {}, "tagName": "span", "sid": 7 };_node10.children = [];_node10.attrSize = 1;_node10.attrHash = 1060371481;_node10.attrs["w-class"] = "append";_$temp = _node10;{
					var _$parent12 = _$temp;var _node11 = { "attrs": {}, "tagName": "pi-ui-lang", "sid": 8 };_node11.hasChild = false;_node11.child = null;_node11.attrHash = 0;_$temp = _node11;{
						var _$parent13 = _$temp;_addJson(it.append, _$parent13);
					}_chFunc(_node11);_$parent12.children.push(_node11);
				}_chFunc(_node10);_$parent11.children.push(_node10);
			}
		}_chFunc(_node);return _node;
	}
});