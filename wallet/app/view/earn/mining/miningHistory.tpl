(function (_cfg, it, it1) {
	var _$temp = void 0,
	    node = void 0;_$temp = node;{
		var _$parent = _$temp;var _node = { "attrs": {}, "tagName": "div", "sid": 0 };_node.children = [];_node.attrSize = 4;_node.attrHash = 3424737235;_node.attrs["class"] = "new-page";_node.attrs["w-class"] = "new-page";_node.attrs["ev-back-click"] = "backPrePage";_node.attrs["ev-refresh-click"] = "refreshPage";topBarTitle = { "zh_Hans": "挖矿记录", "zh_Hant": "挖礦記錄", "en": "" };_$temp = _node;{
			var _$parent2 = _$temp;var _node2 = { "attrs": {}, "tagName": "app-components1-topBar-topBar", "sid": 1 };_node2.hasChild = false;_node2.child = null;_node2.attrHash = 0;_$temp = _node2;{
				var _$parent3 = _$temp;var _node3 = {}; //jpair pre

				_node3["title"] = topBarTitle;
				//jpair suf
				//jpair pre

				{
					var jvalue = "";
					jvalue = "../../res/image1/refresh_blue.png";
					//jpair suf

					_node3["refreshImg"] = jvalue;
				}
				_addJson(_node3, _$parent3);
			}_chFunc(_node2);_$parent2.children.push(_node2);
		}_$temp = _node;{
			var _$parent4 = _$temp;var _node4 = { "attrs": {}, "tagName": "div", "sid": 2 };_node4.children = [];_node4.attrSize = 3;_node4.attrHash = 1828517035;_node4.attrs["w-class"] = "historylist";_node4.attrs["id"] = "historylist";_node4.attrs["on-scroll"] = "getMoreList";_$temp = _node4;{
				var _$parent5 = _$temp;var _node5 = { "attrs": {}, "tagName": "div", "sid": 3 };_node5.children = [];_node5.attrSize = 2;_node5.attrHash = 2208651128;_node5.attrs["w-class"] = "history";_node5.attrs["id"] = "history";itemName = { "zh_Hans": "挖矿", "zh_Hant": "挖礦", "en": "" };{
					var _$i = 0;
					for (var _iterator = it1.data, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator]();;) {
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
						var ind = _$i++;_$temp = _node5;{
							var _$parent6 = _$temp;var _node6 = { "attrs": {}, "tagName": "div", "sid": 4 };_node6.children = [];_node6.attrSize = 1;_node6.attrHash = 1979317745;{
								var attrvalue = "";attrvalue += ind > 0 ? 'background: #ffffff;' : '';attrvalue += "";_node6.attrs["style"] = attrvalue;
							}_node6.attrHash = _hash.nextHash(_node6.attrHash, _calTextHash(_node6.attrs["style"]));_$temp = _node6;{
								var _$parent7 = _$temp;var _node7 = { "attrs": {}, "tagName": "app-components-fourParaItem-fourParaItem", "sid": 5 };_node7.hasChild = false;_node7.child = null;_node7.attrHash = 0;_$temp = _node7;{
									var _$parent8 = _$temp;var _node8 = {}; //jpair pre

									_node8["name"] = itemName;
									//jpair suf
									//jpair pre

									_node8["data"] = val.num + ' KT';
									//jpair suf
									//jpair pre

									_node8["time"] = val.time;
									//jpair suf
									_addJson(_node8, _$parent8);
								}_chFunc(_node7);_$parent7.children.push(_node7);
							}_chFunc(_node6);_$parent6.children.push(_node6);
						}
					}
				}if (it1.data.length > 0 && !it1.hasMore) {
					_$temp = _node5;{
						var _$parent9 = _$temp;var _node9 = { "attrs": {}, "tagName": "div", "sid": 6 };_node9.children = [];_node9.childHash = 783069360;_node9.attrSize = 1;_node9.attrHash = 3992589513;_node9.attrs["w-class"] = "endMess";_$temp = _node9;{
							var _$parent10 = _$temp;var _node10 = { "attrs": {}, "tagName": "pi-ui-lang", "sid": 7 };_node10.hasChild = false;_node10.child = null;_node10.childHash = 1461306196;_node10.attrHash = 0;_$temp = _node10;{
								var _$parent11 = _$temp;var _node11 = {}; //jpair pre

								{
									var _jvalue = "";
									_jvalue = "到此结束啦";
									//jpair suf

									_node11["zh_Hans"] = _jvalue;
								}
								//jpair pre

								{
									var _jvalue2 = "";
									_jvalue2 = "到此結束啦";
									//jpair suf

									_node11["zh_Hant"] = _jvalue2;
								}
								//jpair pre

								{
									var _jvalue3 = "";
									_jvalue3 = "";
									//jpair suf

									_node11["en"] = _jvalue3;
								}
								_addJson(_node11, _$parent11);
							}_$parent10.children.push(_node10);
						}_$temp = _node9;{
							var _$parent12 = _$temp;var _node12 = _installText("^_^", 2624223669);;
							_$parent12.children.push(_node12);
						}_$parent9.children.push(_node9);
					}
				}if (it1.data.length == 0) {
					_$temp = _node5;{
						var _$parent13 = _$temp;var _node13 = { "attrs": {}, "tagName": "div", "sid": 8 };_node13.children = [];_node13.childHash = 3525000272;_node13.attrSize = 1;_node13.attrHash = 3809030542;_node13.attrs["w-class"] = "historyNone";_$temp = _node13;{
							var _$parent14 = _$temp;var _node14 = { "attrs": {}, "tagName": "img", "sid": 9 };_node14.children = [];_node14.childHash = 0;_node14.attrSize = 2;_node14.attrHash = 1623007564;_node14.attrs["src"] = "../../../res/image/dividend_history_none.png";_node14.attrs["style"] = "width: 200px;height: 200px;margin-bottom: 20px;";_$parent14.children.push(_node14);
						}_$temp = _node13;{
							var _$parent15 = _$temp;var _node15 = { "attrs": {}, "tagName": "div", "sid": 10 };_node15.children = [];_node15.childHash = 3525846262;_node15.attrHash = 0;_$temp = _node15;{
								var _$parent16 = _$temp;var _node16 = { "attrs": {}, "tagName": "pi-ui-lang", "sid": 11 };_node16.hasChild = false;_node16.child = null;_node16.childHash = 2043208451;_node16.attrHash = 0;_$temp = _node16;{
									var _$parent17 = _$temp;var _node17 = {}; //jpair pre

									{
										var _jvalue4 = "";
										_jvalue4 = "还没有记录哦";
										//jpair suf

										_node17["zh_Hans"] = _jvalue4;
									}
									//jpair pre

									{
										var _jvalue5 = "";
										_jvalue5 = "還沒有記錄哦";
										//jpair suf

										_node17["zh_Hant"] = _jvalue5;
									}
									//jpair pre

									{
										var _jvalue6 = "";
										_jvalue6 = "";
										//jpair suf

										_node17["en"] = _jvalue6;
									}
									_addJson(_node17, _$parent17);
								}_$parent16.children.push(_node16);
							}_$parent15.children.push(_node15);
						}_$parent13.children.push(_node13);
					}
				}_chFunc(_node5);_$parent5.children.push(_node5);
			}_chFunc(_node4);_$parent4.children.push(_node4);
		}_chFunc(_node);return _node;
	}
});