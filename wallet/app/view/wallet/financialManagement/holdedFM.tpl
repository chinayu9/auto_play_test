(function (_cfg, it, it1) {
	var _$temp = void 0,
	    node = void 0;_$temp = node;{
		var _$parent = _$temp;var _node = { "attrs": {}, "tagName": "div", "sid": 0 };_node.children = [];_node.attrSize = 2;_node.attrHash = 138104688;_node.attrs["class"] = "new-page";_node.attrs["w-class"] = "new-page";if (it1.purchaseRecord.length === 0) {
			_$temp = _node;{
				var _$parent2 = _$temp;var _node2 = { "attrs": {}, "tagName": "div", "sid": 1 };_node2.children = [];_node2.childHash = 1572586133;_node2.attrSize = 1;_node2.attrHash = 1587261762;_node2.attrs["w-class"] = "no-recode";_$temp = _node2;{
					var _$parent3 = _$temp;var _node3 = { "attrs": {}, "tagName": "img", "sid": 2 };_node3.children = [];_node3.childHash = 0;_node3.attrSize = 2;_node3.attrHash = 832237403;_node3.attrs["src"] = "../../../res/image/dividend_history_none.png";_node3.attrs["w-class"] = "no-recode-icon";_$parent3.children.push(_node3);
				}_$temp = _node2;{
					var _$parent4 = _$temp;var _node4 = { "attrs": {}, "tagName": "div", "sid": 3 };_node4.children = [];_node4.childHash = 3900235691;_node4.attrSize = 1;_node4.attrHash = 308010609;_node4.attrs["w-class"] = "no-recode-text";_$temp = _node4;{
						var _$parent5 = _$temp;var _node5 = { "attrs": {}, "tagName": "pi-ui-lang", "sid": 4 };_node5.hasChild = false;_node5.child = null;_node5.childHash = 2335828003;_node5.attrHash = 0;_$temp = _node5;{
							var _$parent6 = _$temp;var _node6 = {}; //jpair pre

							{
								var jvalue = "";
								jvalue = "还没有购买过理财";
								//jpair suf

								_node6["zh_Hans"] = jvalue;
							}
							//jpair pre

							{
								var _jvalue = "";
								_jvalue = "還沒有買過理財";
								//jpair suf

								_node6["zh_Hant"] = _jvalue;
							}
							//jpair pre

							{
								var _jvalue2 = "";
								_jvalue2 = "";
								//jpair suf

								_node6["en"] = _jvalue2;
							}
							_addJson(_node6, _$parent6);
						}_$parent5.children.push(_node5);
					}_$parent4.children.push(_node4);
				}_$parent2.children.push(_node2);
			}
		} else {
			_$temp = _node;{
				var _$parent7 = _$temp;var _node7 = { "attrs": {}, "tagName": "div", "sid": 5 };_node7.children = [];_node7.attrSize = 1;_node7.attrHash = 486435355;_node7.attrs["w-class"] = "list";{
					var _$i = 0;
					for (var _iterator = it1.purchaseRecord, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator]();;) {
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
						var i = _$i++;_$temp = _node7;{
							var _$parent8 = _$temp;var _node8 = { "attrs": {}, "tagName": "app-view-wallet-components-holdedProductItem", "sid": 6 };_node8.hasChild = false;_node8.child = null;_node8.attrHash = 0;_$temp = _node8;{
								var _$parent9 = _$temp;var _node9 = {}; //jpair pre

								_node9["product"] = v;
								//jpair suf
								//jpair pre

								_node9["index"] = i;
								//jpair suf
								_addJson(_node9, _$parent9);
							}_chFunc(_node8);_$parent8.children.push(_node8);
						}
					}
				}_chFunc(_node7);_$parent7.children.push(_node7);
			}
		}_chFunc(_node);return _node;
	}
});