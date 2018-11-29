(function (_cfg, it, it1) {
	var _$temp = void 0,
	    node = void 0;_$temp = node;{
		var _$parent = _$temp;var _node = { "attrs": {}, "tagName": "div", "sid": 0 };_node.children = [];_node.attrSize = 3;_node.attrHash = 1828517035;_node.attrs["w-class"] = "historylist";_node.attrs["id"] = "historylist";_node.attrs["on-scroll"] = "getMoreList";_$temp = _node;{
			var _$parent2 = _$temp;var _node2 = { "attrs": {}, "tagName": "div", "sid": 1 };_node2.children = [];_node2.attrSize = 1;_node2.attrHash = 840313844;_node2.attrs["w-class"] = "history";_$temp = _node2;{
				var _$parent3 = _$temp;var _node3 = { "attrs": {}, "tagName": "div", "sid": 2 };_node3.children = [];_node3.attrSize = 1;_node3.attrHash = 1045235690;_node3.attrs["w-class"] = "item";_$temp = _node3;{
					var _$parent4 = _$temp;var _node4 = { "attrs": {}, "tagName": "span", "sid": 3 };_node4.children = [];_node4.attrSize = 1;_node4.attrHash = 3802403657;_node4.attrs["w-class"] = "itemRank";_$temp = _node4;{
						var _$parent5 = _$temp;_addText(it.myRank, _$parent5);
					}_chFunc(_node4);_$parent4.children.push(_node4);
				}_$temp = _node3;{
					var _$parent6 = _$temp;var _node5 = { "attrs": {}, "tagName": "img", "sid": 4 };_node5.children = [];_node5.attrSize = 2;_node5.attrHash = 1356816673;{
						var attrvalue = "";attrvalue += it1.userImg;attrvalue += "";_node5.attrs["src"] = attrvalue;
					}_node5.attrHash = _hash.nextHash(_node5.attrHash, _calTextHash(_node5.attrs["src"]));_node5.attrs["w-class"] = "itemImg";_chFunc(_node5);_$parent6.children.push(_node5);
				}_$temp = _node3;{
					var _$parent7 = _$temp;var _node6 = { "attrs": {}, "tagName": "div", "sid": 5 };_node6.children = [];_node6.attrSize = 1;_node6.attrHash = 2863761446;_node6.attrs["style"] = "display: inline-block;flex: 1 0 0;";_$temp = _node6;{
						var _$parent8 = _$temp;var _node7 = { "attrs": {}, "tagName": "div", "sid": 6 };_node7.children = [];_node7.childHash = 1974408038;_node7.attrSize = 1;_node7.attrHash = 136397174;_node7.attrs["w-class"] = "itemName";_$temp = _node7;{
							var _$parent9 = _$temp;var _node8 = { "attrs": {}, "tagName": "pi-ui-lang", "sid": 7 };_node8.hasChild = false;_node8.child = null;_node8.childHash = 2940384061;_node8.attrHash = 0;_$temp = _node8;{
								var _$parent10 = _$temp;var _node9 = {}; //jpair pre

								{
									var jvalue = "";
									jvalue = "我";
									//jpair suf

									_node9["zh_Hans"] = jvalue;
								}
								//jpair pre

								{
									var _jvalue = "";
									_jvalue = "我";
									//jpair suf

									_node9["zh_Hant"] = _jvalue;
								}
								//jpair pre

								{
									var _jvalue2 = "";
									_jvalue2 = "";
									//jpair suf

									_node9["en"] = _jvalue2;
								}
								_addJson(_node9, _$parent10);
							}_$parent9.children.push(_node8);
						}_$parent8.children.push(_node7);
					}if (it.fg == 1) {
						_$temp = _node6;{
							var _$parent11 = _$temp;var _node10 = { "attrs": {}, "tagName": "div", "sid": 8 };_node10.children = [];_node10.attrSize = 1;_node10.attrHash = 936179753;_node10.attrs["w-class"] = "itemDescribe";_$temp = _node10;{
								var _$parent12 = _$temp;var _node11 = { "attrs": {}, "tagName": "pi-ui-lang", "sid": 9 };_node11.hasChild = false;_node11.child = null;_node11.childHash = 732597748;_node11.attrHash = 0;_$temp = _node11;{
									var _$parent13 = _$temp;var _node12 = {}; //jpair pre

									{
										var _jvalue3 = "";
										_jvalue3 = "矿山总量";
										//jpair suf

										_node12["zh_Hans"] = _jvalue3;
									}
									//jpair pre

									{
										var _jvalue4 = "";
										_jvalue4 = "礦山總量";
										//jpair suf

										_node12["zh_Hant"] = _jvalue4;
									}
									//jpair pre

									{
										var _jvalue5 = "";
										_jvalue5 = "";
										//jpair suf

										_node12["en"] = _jvalue5;
									}
									_addJson(_node12, _$parent13);
								}_$parent12.children.push(_node11);
							}_$temp = _node10;{
								var _$parent14 = _$temp;_addText(it1.totalNum + " ", _$parent14);
							}_$temp = _node10;{
								var _$parent15 = _$temp;var _node13 = _installText("KT", 3071125820);;
								_$parent15.children.push(_node13);
							}_chFunc(_node10);_$parent11.children.push(_node10);
						}
					} else {
						_$temp = _node6;{
							var _$parent16 = _$temp;var _node14 = { "attrs": {}, "tagName": "div", "sid": 10 };_node14.children = [];_node14.attrSize = 1;_node14.attrHash = 936179753;_node14.attrs["w-class"] = "itemDescribe";_$temp = _node14;{
								var _$parent17 = _$temp;var _node15 = { "attrs": {}, "tagName": "pi-ui-lang", "sid": 11 };_node15.hasChild = false;_node15.child = null;_node15.childHash = 4705602;_node15.attrHash = 0;_$temp = _node15;{
									var _$parent18 = _$temp;var _node16 = {}; //jpair pre

									{
										var _jvalue6 = "";
										_jvalue6 = "挖矿";
										//jpair suf

										_node16["zh_Hans"] = _jvalue6;
									}
									//jpair pre

									{
										var _jvalue7 = "";
										_jvalue7 = "挖礦";
										//jpair suf

										_node16["zh_Hant"] = _jvalue7;
									}
									//jpair pre

									{
										var _jvalue8 = "";
										_jvalue8 = "";
										//jpair suf

										_node16["en"] = _jvalue8;
									}
									_addJson(_node16, _$parent18);
								}_$parent17.children.push(_node15);
							}_$temp = _node14;{
								var _$parent19 = _$temp;_addText(it1.totalNum + " ", _$parent19);
							}_$temp = _node14;{
								var _$parent20 = _$temp;var _node17 = _installText("KT", 3071125820);;
								_$parent20.children.push(_node17);
							}_chFunc(_node14);_$parent16.children.push(_node14);
						}
					}_chFunc(_node6);_$parent7.children.push(_node6);
				}_chFunc(_node3);_$parent3.children.push(_node3);
			}leftTitle = { "zh_Hans": "矿山总量", "zh_Hant": "礦山總量", "en": "" };rightTitle = { "zh_Hans": "挖矿", "zh_Hant": "挖礦", "en": "" };{
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
					var ind = _$i++;var desc = it.fg == 1 ? leftTitle : rightTitle;var rank = val.index;if (rank < 10) {
						rank = "00" + rank;
					} else if (rank < 100) {
						rank = "0" + rank;
					}_$temp = _node2;{
						var _$parent21 = _$temp;var _node18 = { "attrs": {}, "tagName": "app-components-imgRankItem-imgRankItem", "sid": 12 };_node18.hasChild = false;_node18.child = null;_node18.attrHash = 0;_$temp = _node18;{
							var _$parent22 = _$temp;var _node19 = {}; //jpair pre

							_node19["name"] = val.name;
							//jpair suf
							//jpair pre

							_node19["describe"] = desc;
							//jpair suf
							//jpair pre

							_node19["descNumber"] = val.num + " KT";
							//jpair suf
							//jpair pre

							_node19["img"] = val.avatar ? val.avatar : "app/res/image/default_avater_big.png";
							//jpair suf
							//jpair pre

							_node19["rank"] = rank;
							//jpair suf
							_addJson(_node19, _$parent22);
						}_chFunc(_node18);_$parent21.children.push(_node18);
					}
				}
			}if (it1.data.length > 0 && !it1.more) {
				_$temp = _node2;{
					var _$parent23 = _$temp;var _node20 = { "attrs": {}, "tagName": "div", "sid": 13 };_node20.children = [];_node20.childHash = 783069360;_node20.attrSize = 1;_node20.attrHash = 3992589513;_node20.attrs["w-class"] = "endMess";_$temp = _node20;{
						var _$parent24 = _$temp;var _node21 = { "attrs": {}, "tagName": "pi-ui-lang", "sid": 14 };_node21.hasChild = false;_node21.child = null;_node21.childHash = 1461306196;_node21.attrHash = 0;_$temp = _node21;{
							var _$parent25 = _$temp;var _node22 = {}; //jpair pre

							{
								var _jvalue9 = "";
								_jvalue9 = "到此结束啦";
								//jpair suf

								_node22["zh_Hans"] = _jvalue9;
							}
							//jpair pre

							{
								var _jvalue10 = "";
								_jvalue10 = "到此結束啦";
								//jpair suf

								_node22["zh_Hant"] = _jvalue10;
							}
							//jpair pre

							{
								var _jvalue11 = "";
								_jvalue11 = "";
								//jpair suf

								_node22["en"] = _jvalue11;
							}
							_addJson(_node22, _$parent25);
						}_$parent24.children.push(_node21);
					}_$temp = _node20;{
						var _$parent26 = _$temp;var _node23 = _installText("^_^", 2624223669);;
						_$parent26.children.push(_node23);
					}_$parent23.children.push(_node20);
				}
			}if (it1.data.length == 0) {
				_$temp = _node2;{
					var _$parent27 = _$temp;var _node24 = { "attrs": {}, "tagName": "div", "sid": 15 };_node24.children = [];_node24.childHash = 3808241759;_node24.attrSize = 1;_node24.attrHash = 3809030542;_node24.attrs["w-class"] = "historyNone";_$temp = _node24;{
						var _$parent28 = _$temp;var _node25 = { "attrs": {}, "tagName": "img", "sid": 16 };_node25.children = [];_node25.childHash = 0;_node25.attrSize = 2;_node25.attrHash = 1093656218;_node25.attrs["src"] = "../../../res/image/dividend_history_none.png";_node25.attrs["style"] = "width: 200px;height: 200px;";_$parent28.children.push(_node25);
					}_$temp = _node24;{
						var _$parent29 = _$temp;var _node26 = { "attrs": {}, "tagName": "div", "sid": 17 };_node26.children = [];_node26.childHash = 3525846262;_node26.attrHash = 0;_$temp = _node26;{
							var _$parent30 = _$temp;var _node27 = { "attrs": {}, "tagName": "pi-ui-lang", "sid": 18 };_node27.hasChild = false;_node27.child = null;_node27.childHash = 2043208451;_node27.attrHash = 0;_$temp = _node27;{
								var _$parent31 = _$temp;var _node28 = {}; //jpair pre

								{
									var _jvalue12 = "";
									_jvalue12 = "还没有记录哦";
									//jpair suf

									_node28["zh_Hans"] = _jvalue12;
								}
								//jpair pre

								{
									var _jvalue13 = "";
									_jvalue13 = "還沒有記錄哦";
									//jpair suf

									_node28["zh_Hant"] = _jvalue13;
								}
								//jpair pre

								{
									var _jvalue14 = "";
									_jvalue14 = "";
									//jpair suf

									_node28["en"] = _jvalue14;
								}
								_addJson(_node28, _$parent31);
							}_$parent30.children.push(_node27);
						}_$parent29.children.push(_node26);
					}_$parent27.children.push(_node24);
				}
			}_chFunc(_node2);_$parent2.children.push(_node2);
		}_chFunc(_node);return _node;
	}
});