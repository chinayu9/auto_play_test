(function (_cfg, it, it1) {
	var _$temp = void 0,
	    node = void 0;_$temp = node;{
		var _$parent = _$temp;var _node = { "attrs": {}, "tagName": "div", "sid": 0 };_node.children = [];_node.attrSize = 2;_node.attrHash = 138104688;_node.attrs["class"] = "new-page";_node.attrs["w-class"] = "new-page";_$temp = _node;{
			var _$parent2 = _$temp;var _node2 = { "attrs": {}, "tagName": "div", "sid": 1 };_node2.children = [];_node2.attrSize = 1;_node2.attrHash = 1913054642;_node2.attrs["w-class"] = "main";if (it1.recordList.length <= 0) {
				_$temp = _node2;{
					var _$parent3 = _$temp;var _node3 = { "attrs": {}, "tagName": "div", "sid": 2 };_node3.children = [];_node3.childHash = 3110336958;_node3.attrSize = 1;_node3.attrHash = 1587261762;_node3.attrs["w-class"] = "no-recode";_$temp = _node3;{
						var _$parent4 = _$temp;var _node4 = { "attrs": {}, "tagName": "img", "sid": 3 };_node4.children = [];_node4.childHash = 0;_node4.attrSize = 2;_node4.attrHash = 832237403;_node4.attrs["src"] = "../../../res/image/dividend_history_none.png";_node4.attrs["w-class"] = "no-recode-icon";_$parent4.children.push(_node4);
					}_$temp = _node3;{
						var _$parent5 = _$temp;var _node5 = { "attrs": {}, "tagName": "div", "sid": 4 };_node5.children = [];_node5.childHash = 3525846262;_node5.attrSize = 1;_node5.attrHash = 308010609;_node5.attrs["w-class"] = "no-recode-text";_$temp = _node5;{
							var _$parent6 = _$temp;var _node6 = { "attrs": {}, "tagName": "pi-ui-lang", "sid": 5 };_node6.hasChild = false;_node6.child = null;_node6.childHash = 2043208451;_node6.attrHash = 0;_$temp = _node6;{
								var _$parent7 = _$temp;var _node7 = {}; //jpair pre

								{
									var jvalue = "";
									jvalue = "还没有记录哦";
									//jpair suf

									_node7["zh_Hans"] = jvalue;
								}
								//jpair pre

								{
									var _jvalue = "";
									_jvalue = "還沒有記錄哦";
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
					}_$parent3.children.push(_node3);
				}
			}_$temp = _node2;{
				var _$parent8 = _$temp;var _node8 = { "attrs": {}, "tagName": "div", "sid": 6 };_node8.children = [];_node8.attrSize = 1;_node8.attrHash = 1552947939;_node8.attrs["w-class"] = "record-list";{
					var _$i = 0;
					for (var _iterator = it1.recordList, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator]();;) {
						var _ref;

						if (_isArray) {
							if (_i >= _iterator.length) break;
							_ref = _iterator[_i++];
						} else {
							_i = _iterator.next();
							if (_i.done) break;
							_ref = _i.value;
						}

						var v = _ref;
						var i = _$i++;_$temp = _node8;{
							var _$parent9 = _$temp;var _node9 = { "attrs": {}, "tagName": "div", "sid": 7 };_node9.children = [];_node9.attrSize = 2;_node9.attrHash = 4222612729;{
								var attrvalue = "";attrvalue += "recordListItemClick(e,";attrvalue += i;attrvalue += ")";_node9.attrs["on-tap"] = attrvalue;
							}_node9.attrHash = _hash.nextHash(_node9.attrHash, _calTextHash(_node9.attrs["on-tap"]));_node9.attrs["w-class"] = "item-container";behavior = { "zh_Hans": v.behavior, "zh_Hant": v.behavior, "en": "" };_$temp = _node9;{
								var _$parent10 = _$temp;var _node10 = { "attrs": {}, "tagName": "app-components-fourParaImgItem-fourParaImgItem", "sid": 8 };_node10.hasChild = false;_node10.child = null;_node10.attrHash = 0;_$temp = _node10;{
									var _$parent11 = _$temp;var _node11 = {}; //jpair pre

									_node11["name"] = behavior;
									//jpair suf
									//jpair pre

									_node11["data"] = v.amountShow;
									//jpair suf
									//jpair pre

									_node11["time"] = v.timeShow;
									//jpair suf
									//jpair pre

									_node11["img"] = '../../res/image/' + v.iconShow;
									//jpair suf
									//jpair pre

									_node11["describe"] = v.statusShow ? v.statusShow : "";
									//jpair suf
									_addJson(_node11, _$parent11);
								}_chFunc(_node10);_$parent10.children.push(_node10);
							}_chFunc(_node9);_$parent9.children.push(_node9);
						}
					}
				}_chFunc(_node8);_$parent8.children.push(_node8);
			}_chFunc(_node2);_$parent2.children.push(_node2);
		}_chFunc(_node);return _node;
	}
});