(function (_cfg, it, it1) {
	var _$temp = void 0,
	    node = void 0;_$temp = node;{
		var _$parent = _$temp;var _node = { "attrs": {}, "tagName": "div", "sid": 0 };_node.children = [];_node.attrSize = 1;_node.attrHash = 3338124703;_node.attrs["w-class"] = "base";_$temp = _node;{
			var _$parent2 = _$temp;var _node2 = { "attrs": {}, "tagName": "span", "sid": 1 };_node2.children = [];_node2.childHash = 3382387005;_node2.attrSize = 3;_node2.attrHash = 3227464383;_node2.attrs["w-class"] = "btn btn_left";_node2.attrs["on-tap"] = "tapLeft";_node2.attrs["on-longtap"] = "langTapLeft";_$temp = _node2;{
				var _$parent3 = _$temp;var _node3 = _installText("-", 1066372933);;
				_$parent3.children.push(_node3);
			}_$parent2.children.push(_node2);
		}_$temp = _node;{
			var _$parent4 = _$temp;var _node4 = { "attrs": {}, "tagName": "span", "sid": 2 };_node4.children = [];_node4.attrSize = 3;_node4.attrHash = 3451274526;_node4.attrs["w-class"] = "input";_node4.attrs["ev-input-change"] = "inputChange";_node4.attrs["ev-input-blur"] = "inputBlur";_$temp = _node4;{
				var _$parent5 = _$temp;var _node5 = { "attrs": {}, "tagName": "components-input-input", "sid": 3 };_node5.hasChild = false;_node5.child = null;_node5.attrHash = 0;_$temp = _node5;{
					var _$parent6 = _$temp;var _node6 = {}; //jpair pre

					_node6["input"] = it.value.toString();
					//jpair suf
					//jpair pre

					_node6["style"] = it1.style;
					//jpair suf
					_addJson(_node6, _$parent6);
				}_chFunc(_node5);_$parent5.children.push(_node5);
			}_chFunc(_node4);_$parent4.children.push(_node4);
		}_$temp = _node;{
			var _$parent7 = _$temp;var _node7 = { "attrs": {}, "tagName": "span", "sid": 4 };_node7.children = [];_node7.childHash = 3969934395;_node7.attrSize = 3;_node7.attrHash = 995576384;_node7.attrs["w-class"] = "btn btn_right";_node7.attrs["on-tap"] = "tapRight";_node7.attrs["on-longtap"] = "langTapRight";_$temp = _node7;{
				var _$parent8 = _$temp;var _node8 = _installText("+", 3807426999);;
				_$parent8.children.push(_node8);
			}_$parent7.children.push(_node7);
		}_chFunc(_node);return _node;
	}
});