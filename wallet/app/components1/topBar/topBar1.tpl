(function (_cfg, it, it1) {
	var _$temp = void 0,
	    node = void 0;var opca = it.scrollHeight / 200 || 0;_$temp = node;{
		var _$parent = _$temp;var _node = { "attrs": {}, "tagName": "div", "sid": 0 };_node.children = [];_node.attrHash = 0;_$temp = _node;{
			var _$parent2 = _$temp;var _node2 = { "attrs": {}, "tagName": "div", "sid": 1 };_node2.children = [];_node2.attrSize = 2;_node2.attrHash = 3134731916;{
				var attrvalue = "";attrvalue += opca > 0 ? 'background:rgba(255, 255, 255, ' + opca + ');border-bottom: 1px solid #cccccc;' : '';attrvalue += "";_node2.attrs["style"] = attrvalue;
			}_node2.attrHash = _hash.nextHash(_node2.attrHash, _calTextHash(_node2.attrs["style"]));_node2.attrs["w-class"] = "topBar";_$temp = _node2;{
				var _$parent3 = _$temp;var _node3 = { "attrs": {}, "tagName": "div", "sid": 2 };_node3.children = [];_node3.attrSize = 1;_node3.attrHash = 2786872106;_node3.attrs["on-tap"] = "showMine";_$temp = _node3;{
					var _$parent4 = _$temp;var _node4 = { "attrs": {}, "tagName": "widget", "sid": 3 };_node4.hasChild = false;_node4.child = null;_node4.attrSize = 1;_node4.attrHash = 505042009;_node4.attrs["w-tag"] = "app-components1-img-img";_node4.tagName = _node4.attrs["w-tag"];_node4.attrs["w-class"] = "userHead";_$temp = _node4;{
						var _$parent5 = _$temp;var _node5 = {}; //jpair pre

						_node5["imgURL"] = it.avatar ? it.avatar : 'app/res/image1/default_avatar.png';
						//jpair suf
						//jpair pre

						{
							var jvalue = "";
							jvalue = "48px;";
							//jpair suf

							_node5["width"] = jvalue;
						}
						_addJson(_node5, _$parent5);
					}_chFunc(_node4);_$parent4.children.push(_node4);
				}_chFunc(_node3);_$parent3.children.push(_node3);
			}if (it.text) {
				_$temp = _node2;{
					var _$parent6 = _$temp;var _node6 = { "attrs": {}, "tagName": "div", "sid": 4 };_node6.children = [];_node6.attrSize = 1;_node6.attrHash = 2866552653;_node6.attrs["w-class"] = "total-asset";_$temp = _node6;{
						var _$parent7 = _$temp;_addText(it.text, _$parent7);
					}_chFunc(_node6);_$parent6.children.push(_node6);
				}
			}if (it1) {
				_$temp = _node2;{
					var _$parent8 = _$temp;var _node7 = { "attrs": {}, "tagName": "widget", "sid": 5 };_node7.hasChild = false;_node7.child = null;_node7.childHash = 907704923;_node7.attrSize = 1;_node7.attrHash = 1927727582;_node7.attrs["w-tag"] = "pi-ui-lang";_node7.tagName = _node7.attrs["w-tag"];_node7.attrs["w-class"] = "offline";_$temp = _node7;{
						var _$parent9 = _$temp;var _node8 = {}; //jpair pre

						{
							var _jvalue = "";
							_jvalue = "离线";
							//jpair suf

							_node8["zh_Hans"] = _jvalue;
						}
						//jpair pre

						{
							var _jvalue2 = "";
							_jvalue2 = "離線";
							//jpair suf

							_node8["zh_Hant"] = _jvalue2;
						}
						//jpair pre

						{
							var _jvalue3 = "";
							_jvalue3 = "Offline";
							//jpair suf

							_node8["en"] = _jvalue3;
						}
						_addJson(_node8, _$parent9);
					}_$parent8.children.push(_node7);
				}
			}_chFunc(_node2);_$parent2.children.push(_node2);
		}_$temp = _node;{
			var _$parent10 = _$temp;var _node9 = { "attrs": {}, "tagName": "img", "sid": 6 };_node9.children = [];_node9.attrSize = 4;_node9.attrHash = 1974344371;{
				var _attrvalue = "";_attrvalue += "../../res/image1/";_attrvalue += opca > 0 ? 'refresh_blue.png' : 'refresh_white.png';_attrvalue += "";_node9.attrs["src"] = _attrvalue;
			}_node9.attrHash = _hash.nextHash(_node9.attrHash, _calTextHash(_node9.attrs["src"]));_node9.attrs["w-class"] = "refreshBtn";_node9.attrs["on-tap"] = "refreshPage";{
				var _attrvalue2 = "";_attrvalue2 += it.refresh ? 'refreshing' : '';_attrvalue2 += "";_node9.attrs["class"] = _attrvalue2;
			}_node9.attrHash = _hash.nextHash(_node9.attrHash, _calTextHash(_node9.attrs["class"]));_chFunc(_node9);_$parent10.children.push(_node9);
		}_chFunc(_node);return _node;
	}
});