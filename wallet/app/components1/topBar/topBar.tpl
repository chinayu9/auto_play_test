(function (_cfg, it, it1) {
	var _$temp = void 0,
	    node = void 0;var flag = it.background && it.background != '' && it.background != '#fff';var flag1 = it.background && it.background != '';_$temp = node;{
		var _$parent = _$temp;var _node = { "attrs": {}, "tagName": "div", "sid": 0 };_node.children = [];_node.attrSize = 2;_node.attrHash = 1736232813;{
			var attrvalue = "";attrvalue += "outer ";attrvalue += flag1 ? '' : 'outer-bottom';attrvalue += "";_node.attrs["w-class"] = attrvalue;
		}_node.attrHash = _hash.nextHash(_node.attrHash, _calTextHash(_node.attrs["w-class"]));{
			var _attrvalue = "";_attrvalue += "background: ";_attrvalue += it.background;_attrvalue += "";_node.attrs["style"] = _attrvalue;
		}_node.attrHash = _hash.nextHash(_node.attrHash, _calTextHash(_node.attrs["style"]));_$temp = _node;{
			var _$parent2 = _$temp;var _node2 = { "attrs": {}, "tagName": "div", "sid": 1 };_node2.children = [];_node2.attrSize = 1;_node2.attrHash = 3880895855;_node2.attrs["w-class"] = "ga-top-banner";_$temp = _node2;{
				var _$parent3 = _$temp;var _node3 = { "attrs": {}, "tagName": "div", "sid": 2 };_node3.children = [];_node3.attrSize = 1;_node3.attrHash = 1631622133;_node3.attrs["w-class"] = "left-container";_$temp = _node3;{
					var _$parent4 = _$temp;var _node4 = { "attrs": {}, "tagName": "img", "sid": 3 };_node4.children = [];_node4.attrSize = 3;_node4.attrHash = 782177186;_node4.attrs["on-tap"] = "backPrePage";{
						var _attrvalue2 = "";_attrvalue2 += "../../res/image/";_attrvalue2 += flag ? 'left_arrow_white.png' : 'left_arrow_blue.png';_attrvalue2 += "";_node4.attrs["src"] = _attrvalue2;
					}_node4.attrHash = _hash.nextHash(_node4.attrHash, _calTextHash(_node4.attrs["src"]));_node4.attrs["w-class"] = "ga-back";_chFunc(_node4);_$parent4.children.push(_node4);
				}_$temp = _node3;{
					var _$parent5 = _$temp;var _node5 = { "attrs": {}, "tagName": "span", "sid": 4 };_node5.children = [];_node5.attrSize = 2;_node5.attrHash = 2855747751;_node5.attrs["on-tap"] = "backPrePage";{
						var _attrvalue3 = "";_attrvalue3 += "color: ";_attrvalue3 += flag ? '#fff' : '';_attrvalue3 += "";_node5.attrs["style"] = _attrvalue3;
					}_node5.attrHash = _hash.nextHash(_node5.attrHash, _calTextHash(_node5.attrs["style"]));_$temp = _node5;{
						var _$parent6 = _$temp;var _node6 = { "attrs": {}, "tagName": "pi-ui-lang", "sid": 5 };_node6.hasChild = false;_node6.child = null;_node6.attrHash = 0;_$temp = _node6;{
							var _$parent7 = _$temp;_addJson(it.title, _$parent7);
						}_chFunc(_node6);_$parent6.children.push(_node6);
					}_chFunc(_node5);_$parent5.children.push(_node5);
				}if (it1) {
					_$temp = _node3;{
						var _$parent8 = _$temp;var _node7 = { "attrs": {}, "tagName": "widget", "sid": 6 };_node7.hasChild = false;_node7.child = null;_node7.childHash = 907704923;_node7.attrSize = 1;_node7.attrHash = 1927727582;_node7.attrs["w-tag"] = "pi-ui-lang";_node7.tagName = _node7.attrs["w-tag"];_node7.attrs["w-class"] = "offline";_$temp = _node7;{
							var _$parent9 = _$temp;var _node8 = {}; //jpair pre

							{
								var jvalue = "";
								jvalue = "离线";
								//jpair suf

								_node8["zh_Hans"] = jvalue;
							}
							//jpair pre

							{
								var _jvalue = "";
								_jvalue = "離線";
								//jpair suf

								_node8["zh_Hant"] = _jvalue;
							}
							//jpair pre

							{
								var _jvalue2 = "";
								_jvalue2 = "Offline";
								//jpair suf

								_node8["en"] = _jvalue2;
							}
							_addJson(_node8, _$parent9);
						}_$parent8.children.push(_node7);
					}
				}_chFunc(_node3);_$parent3.children.push(_node3);
			}if (it.text) {
				_$temp = _node2;{
					var _$parent10 = _$temp;var _node9 = { "attrs": {}, "tagName": "span", "sid": 7 };_node9.children = [];_node9.attrSize = 2;_node9.attrHash = 3922830500;_node9.attrs["w-class"] = "text";_node9.attrs["on-tap"] = "goNext";_$temp = _node9;{
						var _$parent11 = _$temp;_addText(it.text, _$parent11);
					}_chFunc(_node9);_$parent10.children.push(_node9);
				}
			}if (it.nextImg) {
				_$temp = _node2;{
					var _$parent12 = _$temp;var _node10 = { "attrs": {}, "tagName": "img", "sid": 8 };_node10.children = [];_node10.attrSize = 3;_node10.attrHash = 1411823790;_node10.attrs["on-tap"] = "goNext";{
						var _attrvalue4 = "";_attrvalue4 += it.nextImg;_attrvalue4 += "";_node10.attrs["src"] = _attrvalue4;
					}_node10.attrHash = _hash.nextHash(_node10.attrHash, _calTextHash(_node10.attrs["src"]));_node10.attrs["w-class"] = "ga-next";_chFunc(_node10);_$parent12.children.push(_node10);
				}
			}if (it.refreshImg) {
				_$temp = _node2;{
					var _$parent13 = _$temp;var _node11 = { "attrs": {}, "tagName": "img", "sid": 9 };_node11.children = [];_node11.attrSize = 4;_node11.attrHash = 3055731905;_node11.attrs["on-tap"] = "refreshPage";{
						var _attrvalue5 = "";_attrvalue5 += it.refreshImg;_attrvalue5 += "";_node11.attrs["src"] = _attrvalue5;
					}_node11.attrHash = _hash.nextHash(_node11.attrHash, _calTextHash(_node11.attrs["src"]));_node11.attrs["w-class"] = "refreshBtn";{
						var _attrvalue6 = "";_attrvalue6 += it.refresh ? 'refreshing' : '';_attrvalue6 += "";_node11.attrs["class"] = _attrvalue6;
					}_node11.attrHash = _hash.nextHash(_node11.attrHash, _calTextHash(_node11.attrs["class"]));_chFunc(_node11);_$parent13.children.push(_node11);
				}
			}_chFunc(_node2);_$parent2.children.push(_node2);
		}_chFunc(_node);return _node;
	}
});