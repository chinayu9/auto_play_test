(function (_cfg, it, it1) {
	var _$temp = void 0,
	    node = void 0;_$temp = node;{
		var _$parent = _$temp;var _node = { "attrs": {}, "tagName": "div", "sid": 0 };_node.children = [];_node.attrSize = 1;_node.attrHash = 1045235690;_node.attrs["w-class"] = "item";if (parseInt(it.rank) <= 3) {
			_$temp = _node;{
				var _$parent2 = _$temp;var _node2 = { "attrs": {}, "tagName": "img", "sid": 1 };_node2.children = [];_node2.attrSize = 4;_node2.attrHash = 3711511173;{
					var attrvalue = "";attrvalue += "app/res/image/goldmedal";attrvalue += it.rank;attrvalue += ".png";_node2.attrs["src"] = attrvalue;
				}_node2.attrHash = _hash.nextHash(_node2.attrHash, _calTextHash(_node2.attrs["src"]));_node2.attrs["width"] = "40px";_node2.attrs["height"] = "60px";_node2.attrs["w-class"] = "goldmedalRankImg";_chFunc(_node2);_$parent2.children.push(_node2);
			}
		} else {
			_$temp = _node;{
				var _$parent3 = _$temp;var _node3 = { "attrs": {}, "tagName": "span", "sid": 2 };_node3.children = [];_node3.attrSize = 1;_node3.attrHash = 3802403657;_node3.attrs["w-class"] = "itemRank";_$temp = _node3;{
					var _$parent4 = _$temp;_addText(it.rank, _$parent4);
				}_chFunc(_node3);_$parent3.children.push(_node3);
			}
		}_$temp = _node;{
			var _$parent5 = _$temp;var _node4 = { "attrs": {}, "tagName": "widget", "sid": 3 };_node4.hasChild = false;_node4.child = null;_node4.attrSize = 1;_node4.attrHash = 3771838591;_node4.attrs["w-tag"] = "app-components1-img-img";_node4.tagName = _node4.attrs["w-tag"];_node4.attrs["w-class"] = "itemImg";_$temp = _node4;{
				var _$parent6 = _$temp;var _node5 = {}; //jpair pre

				_node5["imgURL"] = it.img;
				//jpair suf
				//jpair pre

				{
					var jvalue = "";
					jvalue = "80px;";
					//jpair suf

					_node5["width"] = jvalue;
				}
				_addJson(_node5, _$parent6);
			}_chFunc(_node4);_$parent5.children.push(_node4);
		}_$temp = _node;{
			var _$parent7 = _$temp;var _node6 = { "attrs": {}, "tagName": "div", "sid": 4 };_node6.children = [];_node6.attrSize = 1;_node6.attrHash = 2863761446;_node6.attrs["style"] = "display: inline-block;flex: 1 0 0;";_$temp = _node6;{
				var _$parent8 = _$temp;var _node7 = { "attrs": {}, "tagName": "div", "sid": 5 };_node7.children = [];_node7.attrSize = 1;_node7.attrHash = 136397174;_node7.attrs["w-class"] = "itemName";_$temp = _node7;{
					var _$parent9 = _$temp;_addText(it.name, _$parent9);
				}_chFunc(_node7);_$parent8.children.push(_node7);
			}_$temp = _node6;{
				var _$parent10 = _$temp;var _node8 = { "attrs": {}, "tagName": "div", "sid": 6 };_node8.children = [];_node8.attrSize = 1;_node8.attrHash = 936179753;_node8.attrs["w-class"] = "itemDescribe";_$temp = _node8;{
					var _$parent11 = _$temp;var _node9 = { "attrs": {}, "tagName": "pi-ui-lang", "sid": 7 };_node9.hasChild = false;_node9.child = null;_node9.attrHash = 0;_$temp = _node9;{
						var _$parent12 = _$temp;_addJson(it.describe, _$parent12);
					}_chFunc(_node9);_$parent11.children.push(_node9);
				}_$temp = _node8;{
					var _$parent13 = _$temp;var _node10 = { "attrs": {}, "tagName": "span", "sid": 8 };_node10.children = [];_node10.attrHash = 0;_$temp = _node10;{
						var _$parent14 = _$temp;_addText(it.descNumber, _$parent14);
					}_chFunc(_node10);_$parent13.children.push(_node10);
				}_chFunc(_node8);_$parent10.children.push(_node8);
			}_chFunc(_node6);_$parent7.children.push(_node6);
		}_chFunc(_node);return _node;
	}
});