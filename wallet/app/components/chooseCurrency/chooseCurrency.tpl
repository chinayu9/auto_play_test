(function (_cfg, it, it1) {
	var _$temp = void 0,
	    node = void 0;_$temp = node;{
		var _$parent = _$temp;var _node = { "attrs": {}, "tagName": "div", "sid": 0 };_node.children = [];_node.attrSize = 3;_node.attrHash = 3464494507;_node.attrs["w-class"] = "body";_node.attrs["class"] = "new-page";_node.attrs["ev-back-click"] = "backClick";_$temp = _node;{
			var _$parent2 = _$temp;var _node2 = { "attrs": {}, "tagName": "div", "sid": 1 };_node2.children = [];_node2.childHash = 2946814719;_node2.attrSize = 1;_node2.attrHash = 2619352664;_node2.attrs["w-class"] = "top";_$parent2.children.push(_node2);
		}_$temp = _node;{
			var _$parent3 = _$temp;var _node3 = { "attrs": {}, "tagName": "div", "sid": 2 };_node3.children = [];_node3.attrSize = 1;_node3.attrHash = 832204064;_node3.attrs["w-class"] = "bottom";_$temp = _node3;{
				var _$parent4 = _$temp;var _node4 = { "attrs": {}, "tagName": "div", "sid": 3 };_node4.children = [];_node4.childHash = 3216218803;_node4.attrSize = 1;_node4.attrHash = 1019047777;_node4.attrs["w-class"] = "title";_$temp = _node4;{
					var _$parent5 = _$temp;var _node5 = { "attrs": {}, "tagName": "div", "sid": 4 };_node5.children = [];_node5.childHash = 3727016429;_node5.attrSize = 1;_node5.attrHash = 3101826641;_node5.attrs["style"] = "margin-left: 50px;";_$temp = _node5;{
						var _$parent6 = _$temp;var _node6 = { "attrs": {}, "tagName": "pi-ui-lang", "sid": 5 };_node6.hasChild = false;_node6.child = null;_node6.childHash = 1749228799;_node6.attrHash = 0;_$temp = _node6;{
							var _$parent7 = _$temp;var _node7 = {}; //jpair pre

							{
								var jvalue = "";
								jvalue = "选择代币";
								//jpair suf

								_node7["zh_Hans"] = jvalue;
							}
							//jpair pre

							{
								var _jvalue = "";
								_jvalue = "選擇貨幣";
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
				}_$temp = _node4;{
					var _$parent8 = _$temp;var _node8 = { "attrs": {}, "tagName": "img", "sid": 6 };_node8.children = [];_node8.childHash = 0;_node8.attrSize = 3;_node8.attrHash = 1934757365;_node8.attrs["src"] = "../../res/image/30_gray.png";_node8.attrs["w-class"] = "close";_node8.attrs["on-tap"] = "close";_$parent8.children.push(_node8);
				}_$parent4.children.push(_node4);
			}_$temp = _node3;{
				var _$parent9 = _$temp;var _node9 = { "attrs": {}, "tagName": "div", "sid": 7 };_node9.children = [];_node9.attrSize = 1;_node9.attrHash = 1920460582;_node9.attrs["style"] = "overflow-x: hidden;overflow-y: auto;height: 100%;-webkit-overflow-scrolling: touch;";{
					var _$i = 0;
					for (var _iterator = it1.currencyShowList, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator]();;) {
						var _ref;

						if (_isArray) {
							if (_i >= _iterator.length) break;
							_ref = _iterator[_i++];
						} else {
							_i = _iterator.next();
							if (_i.done) break;
							_ref = _i.value;
						}

						var val = _ref;
						var ind = _$i++;_$temp = _node9;{
							var _$parent10 = _$temp;var _node10 = { "attrs": {}, "tagName": "div", "sid": 8 };_node10.children = [];_node10.attrSize = 2;_node10.attrHash = 3155726807;_node10.attrs["w-class"] = "new-code";{
								var attrvalue = "";attrvalue += "changeSelect(e,";attrvalue += ind;attrvalue += ")";_node10.attrs["on-tap"] = attrvalue;
							}_node10.attrHash = _hash.nextHash(_node10.attrHash, _calTextHash(_node10.attrs["on-tap"]));_$temp = _node10;{
								var _$parent11 = _$temp;var _node11 = { "attrs": {}, "tagName": "img", "sid": 9 };_node11.children = [];_node11.attrSize = 2;_node11.attrHash = 1005454929;{
									var _attrvalue = "";_attrvalue = val.img;_node11.attrs["src"] = _attrvalue;
								}_node11.attrHash = _hash.nextHash(_node11.attrHash, _calTextHash(_node11.attrs["src"]));_node11.attrs["style"] = "width: 50px;height: 50px;";_chFunc(_node11);_$parent11.children.push(_node11);
							}_$temp = _node10;{
								var _$parent12 = _$temp;var _node12 = { "attrs": {}, "tagName": "span", "sid": 10 };_node12.children = [];_node12.attrSize = 1;_node12.attrHash = 3939135354;_node12.attrs["w-class"] = "prepend";_$temp = _node12;{
									var _$parent13 = _$temp;_addText(val.name, _$parent13);
								}_chFunc(_node12);_$parent12.children.push(_node12);
							}_$temp = _node10;{
								var _$parent14 = _$temp;var _node13 = { "attrs": {}, "tagName": "span", "sid": 11 };_node13.children = [];_node13.attrSize = 2;_node13.attrHash = 1896609333;_node13.attrs["w-class"] = "append";{
									var _attrvalue2 = "";_attrvalue2 += "margin-right: ";_attrvalue2 += it1.selected == ind ? '20px' : '60px';_attrvalue2 += "";_node13.attrs["style"] = _attrvalue2;
								}_node13.attrHash = _hash.nextHash(_node13.attrHash, _calTextHash(_node13.attrs["style"]));_$temp = _node13;{
									var _$parent15 = _$temp;_addText(val.balance % 1 === 0 ? val.balance.toFixed(2) : val.balance, _$parent15);
								}_chFunc(_node13);_$parent14.children.push(_node13);
							}if (it1.selected == ind) {
								_$temp = _node10;{
									var _$parent16 = _$temp;var _node14 = { "attrs": {}, "tagName": "img", "sid": 12 };_node14.children = [];_node14.childHash = 0;_node14.attrSize = 2;_node14.attrHash = 1859648557;_node14.attrs["src"] = "../../res/image/16.png";_node14.attrs["style"] = "width: 40px;height: 40px;";_$parent16.children.push(_node14);
								}
							}_chFunc(_node10);_$parent10.children.push(_node10);
						}
					}
				}_chFunc(_node9);_$parent9.children.push(_node9);
			}_chFunc(_node3);_$parent3.children.push(_node3);
		}_chFunc(_node);return _node;
	}
});