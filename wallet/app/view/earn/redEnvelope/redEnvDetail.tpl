(function (_cfg, it, it1) {
	var _$temp = void 0,
	    node = void 0;_$temp = node;{
		var _$parent = _$temp;var _node = { "attrs": {}, "tagName": "div", "sid": 0 };_node.children = [];_node.attrSize = 3;_node.attrHash = 3286765528;_node.attrs["class"] = "new-page";_node.attrs["ev-back-click"] = "backPrePage";_node.attrs["w-class"] = "new-page";topBarTitle = { "zh_Hans": "红包详情", "zh_Hant": "紅包詳情", "en": "" };if (!it1.scroll) {
			_$temp = _node;{
				var _$parent2 = _$temp;var _node2 = { "attrs": {}, "tagName": "app-components1-topBar-topBar", "sid": 1 };_node2.hasChild = false;_node2.child = null;_node2.attrHash = 0;_$temp = _node2;{
					var _$parent3 = _$temp;var _node3 = {}; //jpair pre

					_node3["title"] = topBarTitle;
					//jpair suf
					//jpair pre

					{
						var jvalue = "";
						jvalue = "#DF5E5E";
						//jpair suf

						_node3["background"] = jvalue;
					}
					_addJson(_node3, _$parent3);
				}_chFunc(_node2);_$parent2.children.push(_node2);
			}
		} else {
			_$temp = _node;{
				var _$parent4 = _$temp;var _node4 = { "attrs": {}, "tagName": "app-components1-topBar-topBar", "sid": 2 };_node4.hasChild = false;_node4.child = null;_node4.attrHash = 0;_$temp = _node4;{
					var _$parent5 = _$temp;var _node5 = {}; //jpair pre

					_node5["title"] = topBarTitle;
					//jpair suf
					_addJson(_node5, _$parent5);
				}_chFunc(_node4);_$parent4.children.push(_node4);
			}
		}_$temp = _node;{
			var _$parent6 = _$temp;var _node6 = { "attrs": {}, "tagName": "div", "sid": 3 };_node6.children = [];_node6.attrSize = 3;_node6.attrHash = 1861377870;_node6.attrs["w-class"] = "content";_node6.attrs["on-scroll"] = "pageScroll";_node6.attrs["id"] = "redEnvDetail";_$temp = _node6;{
				var _$parent7 = _$temp;var _node7 = { "attrs": {}, "tagName": "img", "sid": 4 };_node7.children = [];_node7.childHash = 0;_node7.attrSize = 2;_node7.attrHash = 1033678261;_node7.attrs["src"] = "../../../res/image/redEnvDetail.png";_node7.attrs["w-class"] = "topBackimg";_$parent7.children.push(_node7);
			}_$temp = _node6;{
				var _$parent8 = _$temp;var _node8 = { "attrs": {}, "tagName": "div", "sid": 5 };_node8.children = [];_node8.attrSize = 1;_node8.attrHash = 2188685783;_node8.attrs["w-class"] = "topBack";_$temp = _node8;{
					var _$parent9 = _$temp;var _node9 = { "attrs": {}, "tagName": "img", "sid": 6 };_node9.children = [];_node9.attrSize = 2;_node9.attrHash = 2270614944;{
						var attrvalue = "";attrvalue += it1.userHead;attrvalue += "";_node9.attrs["src"] = attrvalue;
					}_node9.attrHash = _hash.nextHash(_node9.attrHash, _calTextHash(_node9.attrs["src"]));_node9.attrs["w-class"] = "userHead";_chFunc(_node9);_$parent9.children.push(_node9);
				}_$temp = _node8;{
					var _$parent10 = _$temp;var _node10 = { "attrs": {}, "tagName": "div", "sid": 7 };_node10.children = [];_node10.attrSize = 1;_node10.attrHash = 2409994842;_node10.attrs["style"] = "margin: 30px 0 10px;font-size: 30px;color: #222222;";_$temp = _node10;{
						var _$parent11 = _$temp;_addText(it1.userName, _$parent11);
					}if (it1.showPin) {
						_$temp = _node10;{
							var _$parent12 = _$temp;var _node11 = { "attrs": {}, "tagName": "span", "sid": 8 };_node11.children = [];_node11.childHash = 3118695505;_node11.attrSize = 1;_node11.attrHash = 2405874756;_node11.attrs["w-class"] = "other";_$temp = _node11;{
								var _$parent13 = _$temp;var _node12 = { "attrs": {}, "tagName": "pi-ui-lang", "sid": 9 };_node12.hasChild = false;_node12.child = null;_node12.childHash = 2381536771;_node12.attrHash = 0;_$temp = _node12;{
									var _$parent14 = _$temp;var _node13 = {}; //jpair pre

									{
										var _jvalue = "";
										_jvalue = "拼";
										//jpair suf

										_node13["zh_Hans"] = _jvalue;
									}
									//jpair pre

									{
										var _jvalue2 = "";
										_jvalue2 = "拼";
										//jpair suf

										_node13["zh_Hant"] = _jvalue2;
									}
									//jpair pre

									{
										var _jvalue3 = "";
										_jvalue3 = "";
										//jpair suf

										_node13["en"] = _jvalue3;
									}
									_addJson(_node13, _$parent14);
								}_$parent13.children.push(_node12);
							}_$parent12.children.push(_node11);
						}
					}_chFunc(_node10);_$parent10.children.push(_node10);
				}_$temp = _node8;{
					var _$parent15 = _$temp;var _node14 = { "attrs": {}, "tagName": "div", "sid": 10 };_node14.children = [];_node14.attrHash = 0;_$temp = _node14;{
						var _$parent16 = _$temp;_addText(it1.message, _$parent16);
					}_chFunc(_node14);_$parent15.children.push(_node14);
				}_chFunc(_node8);_$parent8.children.push(_node8);
			}_$temp = _node6;{
				var _$parent17 = _$temp;var _node15 = { "attrs": {}, "tagName": "div", "sid": 11 };_node15.children = [];_node15.attrSize = 1;_node15.attrHash = 832204064;_node15.attrs["w-class"] = "bottom";_$temp = _node15;{
					var _$parent18 = _$temp;var _node16 = { "attrs": {}, "tagName": "div", "sid": 12 };_node16.children = [];_node16.attrSize = 1;_node16.attrHash = 819962544;_node16.attrs["w-class"] = "tips";_$temp = _node16;{
						var _$parent19 = _$temp;var _node17 = { "attrs": {}, "tagName": "pi-ui-lang", "sid": 13 };_node17.hasChild = false;_node17.child = null;_node17.childHash = 2916386113;_node17.attrHash = 0;_$temp = _node17;{
							var _$parent20 = _$temp;var _node18 = {}; //jpair pre

							{
								var _jvalue4 = "";
								_jvalue4 = "已领取";
								//jpair suf

								_node18["zh_Hans"] = _jvalue4;
							}
							//jpair pre

							{
								var _jvalue5 = "";
								_jvalue5 = "已領取";
								//jpair suf

								_node18["zh_Hant"] = _jvalue5;
							}
							//jpair pre

							{
								var _jvalue6 = "";
								_jvalue6 = "";
								//jpair suf

								_node18["en"] = _jvalue6;
							}
							_addJson(_node18, _$parent20);
						}_$parent19.children.push(_node17);
					}_$temp = _node16;{
						var _$parent21 = _$temp;_addText(it.curNum + "/" + it.totalNum + "，", _$parent21);
					}_$temp = _node16;{
						var _$parent22 = _$temp;var _node19 = { "attrs": {}, "tagName": "pi-ui-lang", "sid": 14 };_node19.hasChild = false;_node19.child = null;_node19.childHash = 4094894233;_node19.attrHash = 0;_$temp = _node19;{
							var _$parent23 = _$temp;var _node20 = {}; //jpair pre

							{
								var _jvalue7 = "";
								_jvalue7 = "共";
								//jpair suf

								_node20["zh_Hans"] = _jvalue7;
							}
							//jpair pre

							{
								var _jvalue8 = "";
								_jvalue8 = "共";
								//jpair suf

								_node20["zh_Hant"] = _jvalue8;
							}
							//jpair pre

							{
								var _jvalue9 = "";
								_jvalue9 = "";
								//jpair suf

								_node20["en"] = _jvalue9;
							}
							_addJson(_node20, _$parent23);
						}_$parent22.children.push(_node19);
					}_$temp = _node16;{
						var _$parent24 = _$temp;_addText(it.amount + it.ctypeShow, _$parent24);
					}_chFunc(_node16);_$parent18.children.push(_node16);
				}{
					var _$i = 0;
					for (var _iterator = it1.redBagList, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator]();;) {
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
						var ind = _$i++;userName = { "zh_Hans": val.userName, "zh_Hant": val.userName, "en": "" };greatUser = { "zh_Hans": "手气最佳", "zh_Hant": "手氣最佳", "en": "" };_$temp = _node15;{
							var _$parent25 = _$temp;var _node21 = { "attrs": {}, "tagName": "app-components-fourParaImgItem-fourParaImgItem", "sid": 15 };_node21.hasChild = false;_node21.child = null;_node21.attrHash = 0;_$temp = _node21;{
								var _$parent26 = _$temp;var _node22 = {}; //jpair pre

								_node22["name"] = userName;
								//jpair suf
								//jpair pre

								_node22["data"] = val.amount + " " + it.ctypeShow;
								//jpair suf
								//jpair pre

								_node22["time"] = val.timeShow;
								//jpair suf
								//jpair pre

								_node22["img"] = val.avatar;
								//jpair suf
								//jpair pre

								_node22["describe"] = it1.greatUser == ind ? greatUser : "";
								//jpair suf
								_addJson(_node22, _$parent26);
							}_chFunc(_node21);_$parent25.children.push(_node21);
						}
					}
				}if (it.curNum < it.totalNum && !it.outDate) {
					_$temp = _node15;{
						var _$parent27 = _$temp;var _node23 = { "attrs": {}, "tagName": "div", "sid": 16 };_node23.children = [];_node23.childHash = 2297237421;_node23.attrSize = 1;_node23.attrHash = 3992589513;_node23.attrs["w-class"] = "endMess";_$temp = _node23;{
							var _$parent28 = _$temp;var _node24 = { "attrs": {}, "tagName": "div", "sid": 17 };_node24.children = [];_node24.childHash = 581295621;_node24.attrSize = 2;_node24.attrHash = 2799917979;_node24.attrs["w-class"] = "againSend";_node24.attrs["on-tap"] = "againSend";_$temp = _node24;{
								var _$parent29 = _$temp;var _node25 = { "attrs": {}, "tagName": "pi-ui-lang", "sid": 18 };_node25.hasChild = false;_node25.child = null;_node25.childHash = 471405789;_node25.attrHash = 0;_$temp = _node25;{
									var _$parent30 = _$temp;var _node26 = {}; //jpair pre

									{
										var _jvalue10 = "";
										_jvalue10 = "继续发送";
										//jpair suf

										_node26["zh_Hans"] = _jvalue10;
									}
									//jpair pre

									{
										var _jvalue11 = "";
										_jvalue11 = "繼續發送";
										//jpair suf

										_node26["zh_Hant"] = _jvalue11;
									}
									//jpair pre

									{
										var _jvalue12 = "";
										_jvalue12 = "";
										//jpair suf

										_node26["en"] = _jvalue12;
									}
									_addJson(_node26, _$parent30);
								}_$parent29.children.push(_node25);
							}_$parent28.children.push(_node24);
						}_$temp = _node23;{
							var _$parent31 = _$temp;var _node27 = { "attrs": {}, "tagName": "div", "sid": 19 };_node27.children = [];_node27.childHash = 1467727472;_node27.attrHash = 0;_$temp = _node27;{
								var _$parent32 = _$temp;var _node28 = { "attrs": {}, "tagName": "pi-ui-lang", "sid": 20 };_node28.hasChild = false;_node28.child = null;_node28.childHash = 628811520;_node28.attrHash = 0;_$temp = _node28;{
									var _$parent33 = _$temp;var _node29 = {}; //jpair pre

									{
										var _jvalue13 = "";
										_jvalue13 = "24小时未领取的红包将退回云账户";
										//jpair suf

										_node29["zh_Hans"] = _jvalue13;
									}
									//jpair pre

									{
										var _jvalue14 = "";
										_jvalue14 = "24小時未領取的紅包將退回雲賬戶";
										//jpair suf

										_node29["zh_Hant"] = _jvalue14;
									}
									//jpair pre

									{
										var _jvalue15 = "";
										_jvalue15 = "";
										//jpair suf

										_node29["en"] = _jvalue15;
									}
									_addJson(_node29, _$parent33);
								}_$parent32.children.push(_node28);
							}_$parent31.children.push(_node27);
						}_$parent27.children.push(_node23);
					}
				}_chFunc(_node15);_$parent17.children.push(_node15);
			}_chFunc(_node6);_$parent6.children.push(_node6);
		}_chFunc(_node);return _node;
	}
});