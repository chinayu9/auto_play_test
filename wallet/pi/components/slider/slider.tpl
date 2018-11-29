(function (_cfg, it, it1) {
	var _$temp = void 0,
	    node = void 0;_$temp = node;{
		var _$parent = _$temp;var _node = { "attrs": {}, "tagName": "div", "sid": 0 };_node.children = [];_node.attrSize = 1;_node.attrHash = 3338124703;_node.attrs["w-class"] = "base";_$temp = _node;{
			var _$parent2 = _$temp;var _node2 = { "attrs": {}, "tagName": "div", "sid": 1 };_node2.children = [];_node2.attrSize = 2;_node2.attrHash = 3564137876;_node2.attrs["w-class"] = "slider";{
				var attrvalue = "";attrvalue += "width: ";attrvalue += it.showValue ? 70 : 100;attrvalue += "%;";_node2.attrs["style"] = attrvalue;
			}_node2.attrHash = _hash.nextHash(_node2.attrHash, _calTextHash(_node2.attrs["style"]));_$temp = _node2;{
				var _$parent3 = _$temp;var _node3 = { "attrs": {}, "tagName": "div", "sid": 2 };_node3.children = [];_node3.attrSize = 2;_node3.attrHash = 3693473461;_node3.attrs["w-class"] = "slider_bar";{
					var _attrvalue = "";_attrvalue += "width: ";_attrvalue += it1.showValue;_attrvalue += "%; left: 0%;";_node3.attrs["style"] = _attrvalue;
				}_node3.attrHash = _hash.nextHash(_node3.attrHash, _calTextHash(_node3.attrs["style"]));_chFunc(_node3);_$parent3.children.push(_node3);
			}_$temp = _node2;{
				var _$parent4 = _$temp;var _node4 = { "attrs": {}, "tagName": "div", "sid": 3 };_node4.children = [];_node4.attrSize = 2;_node4.attrHash = 2295647815;_node4.attrs["w-class"] = "slider_block";{
					var _attrvalue2 = "";_attrvalue2 += "left: ";_attrvalue2 += it1.showValue;_attrvalue2 += "%;";_node4.attrs["style"] = _attrvalue2;
				}_node4.attrHash = _hash.nextHash(_node4.attrHash, _calTextHash(_node4.attrs["style"]));_$temp = _node4;{
					var _$parent5 = _$temp;var _node5 = { "attrs": {}, "tagName": "div", "sid": 4 };_node5.children = [];_node5.childHash = 2946814719;_node5.attrSize = 3;_node5.attrHash = 3852162305;_node5.attrs["w-class"] = "slider_block_button";_node5.attrs["on-mousedown"] = "doButtonDown";_node5.attrs["on-touchstart"] = "doButtonDown";_$parent5.children.push(_node5);
				}_chFunc(_node4);_$parent4.children.push(_node4);
			}_chFunc(_node2);_$parent2.children.push(_node2);
		}if (it.showValue) {
			_$temp = _node;{
				var _$parent6 = _$temp;var _node6 = { "attrs": {}, "tagName": "div", "sid": 5 };_node6.children = [];_node6.attrSize = 2;_node6.attrHash = 3798756182;_node6.attrs["style"] = "width: 20%;margin-left: 5%;";_node6.attrs["ev-selectcount"] = "selectCountChange";_$temp = _node6;{
					var _$parent7 = _$temp;var _node7 = { "attrs": {}, "tagName": "components-selectcount-selectcount", "sid": 6 };_node7.hasChild = false;_node7.child = null;_node7.attrHash = 0;_$temp = _node7;{
						var _$parent8 = _$temp;var _node8 = {}; //jpair pre

						_node8["value"] = it.value;
						//jpair suf
						//jpair pre

						_node8["min"] = it.min;
						//jpair suf
						//jpair pre

						_node8["max"] = it.max;
						//jpair suf
						_addJson(_node8, _$parent8);
					}_chFunc(_node7);_$parent7.children.push(_node7);
				}_chFunc(_node6);_$parent6.children.push(_node6);
			}
		}_chFunc(_node);return _node;
	}
});