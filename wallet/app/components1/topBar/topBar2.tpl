(function (_cfg, it, it1) {
	var _$temp = void 0,
	    node = void 0;var opca = it.scrollHeight / 200 || 0;_$temp = node;{
		var _$parent = _$temp;var _node = { "attrs": {}, "tagName": "div", "sid": 0 };_node.children = [];_node.attrSize = 2;_node.attrHash = 1238355666;_node.attrs["w-class"] = "ga-top-banner";{
			var attrvalue = "";attrvalue += opca > 0 ? 'background:rgba(255, 255, 255, ' + opca + ');border-bottom: 1px solid #cccccc;' : 'background:transparent;';attrvalue += "";_node.attrs["style"] = attrvalue;
		}_node.attrHash = _hash.nextHash(_node.attrHash, _calTextHash(_node.attrs["style"]));_$temp = _node;{
			var _$parent2 = _$temp;var _node2 = { "attrs": {}, "tagName": "div", "sid": 1 };_node2.children = [];_node2.attrSize = 1;_node2.attrHash = 1631622133;_node2.attrs["w-class"] = "left-container";_$temp = _node2;{
				var _$parent3 = _$temp;var _node3 = { "attrs": {}, "tagName": "img", "sid": 2 };_node3.children = [];_node3.attrSize = 3;_node3.attrHash = 782177186;_node3.attrs["on-tap"] = "backPrePage";{
					var _attrvalue = "";_attrvalue += "../../res/image/";_attrvalue += opca > 0 ? 'left_arrow_blue.png' : 'left_arrow_white.png';_attrvalue += "";_node3.attrs["src"] = _attrvalue;
				}_node3.attrHash = _hash.nextHash(_node3.attrHash, _calTextHash(_node3.attrs["src"]));_node3.attrs["w-class"] = "ga-back";_chFunc(_node3);_$parent3.children.push(_node3);
			}_$temp = _node2;{
				var _$parent4 = _$temp;var _node4 = { "attrs": {}, "tagName": "span", "sid": 3 };_node4.children = [];_node4.attrSize = 2;_node4.attrHash = 2855747751;_node4.attrs["on-tap"] = "backPrePage";{
					var _attrvalue2 = "";_attrvalue2 += "color: ";_attrvalue2 += opca > 0 ? '#222' : '#fff';_attrvalue2 += "";_node4.attrs["style"] = _attrvalue2;
				}_node4.attrHash = _hash.nextHash(_node4.attrHash, _calTextHash(_node4.attrs["style"]));if (typeof it.text == "string") {
					_$temp = _node4;{
						var _$parent5 = _$temp;_addText(it.text, _$parent5);
					}
				} else {
					_$temp = _node4;{
						var _$parent6 = _$temp;var _node5 = { "attrs": {}, "tagName": "pi-ui-lang", "sid": 4 };_node5.hasChild = false;_node5.child = null;_node5.attrHash = 0;_$temp = _node5;{
							var _$parent7 = _$temp;_addJson(it.text, _$parent7);
						}_chFunc(_node5);_$parent6.children.push(_node5);
					}
				}_chFunc(_node4);_$parent4.children.push(_node4);
			}if (it1) {
				_$temp = _node2;{
					var _$parent8 = _$temp;var _node6 = { "attrs": {}, "tagName": "widget", "sid": 5 };_node6.hasChild = false;_node6.child = null;_node6.childHash = 907704923;_node6.attrSize = 1;_node6.attrHash = 1927727582;_node6.attrs["w-tag"] = "pi-ui-lang";_node6.tagName = _node6.attrs["w-tag"];_node6.attrs["w-class"] = "offline";_$temp = _node6;{
						var _$parent9 = _$temp;var _node7 = {}; //jpair pre

						{
							var jvalue = "";
							jvalue = "离线";
							//jpair suf

							_node7["zh_Hans"] = jvalue;
						}
						//jpair pre

						{
							var _jvalue = "";
							_jvalue = "離線";
							//jpair suf

							_node7["zh_Hant"] = _jvalue;
						}
						//jpair pre

						{
							var _jvalue2 = "";
							_jvalue2 = "Offline";
							//jpair suf

							_node7["en"] = _jvalue2;
						}
						_addJson(_node7, _$parent9);
					}_$parent8.children.push(_node6);
				}
			}_chFunc(_node2);_$parent2.children.push(_node2);
		}if (it.nextImg) {
			_$temp = _node;{
				var _$parent10 = _$temp;var _node8 = { "attrs": {}, "tagName": "img", "sid": 6 };_node8.children = [];_node8.attrSize = 3;_node8.attrHash = 261073340;_node8.attrs["on-tap"] = "goNext";{
					var _attrvalue3 = "";_attrvalue3 = it.nextImg;_node8.attrs["src"] = _attrvalue3;
				}_node8.attrHash = _hash.nextHash(_node8.attrHash, _calTextHash(_node8.attrs["src"]));_node8.attrs["w-class"] = "ga-next";_chFunc(_node8);_$parent10.children.push(_node8);
			}
		}_$temp = _node;{
			var _$parent11 = _$temp;var _node9 = { "attrs": {}, "tagName": "img", "sid": 7 };_node9.children = [];_node9.attrSize = 4;_node9.attrHash = 738498029;_node9.attrs["on-tap"] = "refreshPage";{
				var _attrvalue4 = "";_attrvalue4 += "../../res/image1/";_attrvalue4 += opca > 0 ? 'refresh_blue.png' : 'refresh_white.png';_attrvalue4 += "";_node9.attrs["src"] = _attrvalue4;
			}_node9.attrHash = _hash.nextHash(_node9.attrHash, _calTextHash(_node9.attrs["src"]));_node9.attrs["w-class"] = "refreshBtn";{
				var _attrvalue5 = "";_attrvalue5 += it.refresh ? 'refreshing' : '';_attrvalue5 += "";_node9.attrs["class"] = _attrvalue5;
			}_node9.attrHash = _hash.nextHash(_node9.attrHash, _calTextHash(_node9.attrs["class"]));_chFunc(_node9);_$parent11.children.push(_node9);
		}_chFunc(_node);return _node;
	}
});