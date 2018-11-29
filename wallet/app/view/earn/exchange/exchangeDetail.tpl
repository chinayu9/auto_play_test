(function (_cfg, it, it1) {
	var _$temp = void 0,
	    node = void 0;_$temp = node;{
		var _$parent = _$temp;var _node = { "attrs": {}, "tagName": "div", "sid": 0 };_node.children = [];_node.attrSize = 3;_node.attrHash = 3437572703;_node.attrs["class"] = "new-page";_node.attrs["w-class"] = "new-page";_node.attrs["ev-back-click"] = "backPrePage";topBarTitle = { "zh_Hans": "红包详情", "zh_Hant": "紅包詳情", "en": "" };if (!it1.scroll) {
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
			var _$parent6 = _$temp;var _node6 = { "attrs": {}, "tagName": "div", "sid": 3 };_node6.children = [];_node6.attrSize = 3;_node6.attrHash = 349344561;_node6.attrs["w-class"] = "content";_node6.attrs["on-scroll"] = "pageScroll";_node6.attrs["id"] = "exchangeDetail";_$temp = _node6;{
				var _$parent7 = _$temp;var _node7 = { "attrs": {}, "tagName": "img", "sid": 4 };_node7.children = [];_node7.childHash = 0;_node7.attrSize = 2;_node7.attrHash = 1033678261;_node7.attrs["src"] = "../../../res/image/redEnvDetail.png";_node7.attrs["w-class"] = "topBackimg";_$parent7.children.push(_node7);
			}_$temp = _node6;{
				var _$parent8 = _$temp;var _node8 = { "attrs": {}, "tagName": "div", "sid": 5 };_node8.children = [];_node8.attrSize = 1;_node8.attrHash = 2188685783;_node8.attrs["w-class"] = "topBack";_$temp = _node8;{
					var _$parent9 = _$temp;var _node9 = { "attrs": {}, "tagName": "img", "sid": 6 };_node9.children = [];_node9.attrSize = 2;_node9.attrHash = 2270614944;{
						var attrvalue = "";attrvalue += it1.userHead;attrvalue += "";_node9.attrs["src"] = attrvalue;
					}_node9.attrHash = _hash.nextHash(_node9.attrHash, _calTextHash(_node9.attrs["src"]));_node9.attrs["w-class"] = "userHead";_chFunc(_node9);_$parent9.children.push(_node9);
				}_$temp = _node8;{
					var _$parent10 = _$temp;var _node10 = { "attrs": {}, "tagName": "div", "sid": 7 };_node10.children = [];_node10.attrSize = 1;_node10.attrHash = 4232090967;_node10.attrs["w-class"] = "userName";_$temp = _node10;{
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
				}_$temp = _node8;{
					var _$parent17 = _$temp;var _node15 = { "attrs": {}, "tagName": "div", "sid": 11 };_node15.children = [];_node15.attrSize = 1;_node15.attrHash = 1899685224;_node15.attrs["w-class"] = "describe";_$temp = _node15;{
						var _$parent18 = _$temp;_addText(it.amount + " " + it.ctypeShow, _$parent18);
					}_chFunc(_node15);_$parent17.children.push(_node15);
				}_chFunc(_node8);_$parent8.children.push(_node8);
			}_$temp = _node6;{
				var _$parent19 = _$temp;var _node16 = { "attrs": {}, "tagName": "div", "sid": 12 };_node16.children = [];_node16.attrSize = 1;_node16.attrHash = 832204064;_node16.attrs["w-class"] = "bottom";if (it.rtype == 99) {
					_$temp = _node16;{
						var _$parent20 = _$temp;var _node17 = { "attrs": {}, "tagName": "div", "sid": 13 };_node17.children = [];_node17.childHash = 3914792770;_node17.attrSize = 1;_node17.attrHash = 819962544;_node17.attrs["w-class"] = "tips";_$temp = _node17;{
							var _$parent21 = _$temp;var _node18 = { "attrs": {}, "tagName": "pi-ui-lang", "sid": 14 };_node18.hasChild = false;_node18.child = null;_node18.childHash = 3454145192;_node18.attrHash = 0;_$temp = _node18;{
								var _$parent22 = _$temp;var _node19 = {}; //jpair pre

								{
									var _jvalue4 = "";
									_jvalue4 = "已存入云账户";
									//jpair suf

									_node19["zh_Hans"] = _jvalue4;
								}
								//jpair pre

								{
									var _jvalue5 = "";
									_jvalue5 = "已存入雲賬戶";
									//jpair suf

									_node19["zh_Hant"] = _jvalue5;
								}
								//jpair pre

								{
									var _jvalue6 = "";
									_jvalue6 = "";
									//jpair suf

									_node19["en"] = _jvalue6;
								}
								_addJson(_node19, _$parent22);
							}_$parent21.children.push(_node18);
						}_$parent20.children.push(_node17);
					}
				} else {
					_$temp = _node16;{
						var _$parent23 = _$temp;var _node20 = { "attrs": {}, "tagName": "div", "sid": 15 };_node20.children = [];_node20.attrSize = 1;_node20.attrHash = 819962544;_node20.attrs["w-class"] = "tips";_$temp = _node20;{
							var _$parent24 = _$temp;var _node21 = { "attrs": {}, "tagName": "pi-ui-lang", "sid": 16 };_node21.hasChild = false;_node21.child = null;_node21.childHash = 2916386113;_node21.attrHash = 0;_$temp = _node21;{
								var _$parent25 = _$temp;var _node22 = {}; //jpair pre

								{
									var _jvalue7 = "";
									_jvalue7 = "已领取";
									//jpair suf

									_node22["zh_Hans"] = _jvalue7;
								}
								//jpair pre

								{
									var _jvalue8 = "";
									_jvalue8 = "已領取";
									//jpair suf

									_node22["zh_Hant"] = _jvalue8;
								}
								//jpair pre

								{
									var _jvalue9 = "";
									_jvalue9 = "";
									//jpair suf

									_node22["en"] = _jvalue9;
								}
								_addJson(_node22, _$parent25);
							}_$parent24.children.push(_node21);
						}_$temp = _node20;{
							var _$parent26 = _$temp;_addText(it1.curNum + "/" + it1.totalNum, _$parent26);
						}_$temp = _node20;{
							var _$parent27 = _$temp;var _node23 = _installText("，", 3114458989);;
							_$parent27.children.push(_node23);
						}_$temp = _node20;{
							var _$parent28 = _$temp;var _node24 = { "attrs": {}, "tagName": "pi-ui-lang", "sid": 17 };_node24.hasChild = false;_node24.child = null;_node24.childHash = 4094894233;_node24.attrHash = 0;_$temp = _node24;{
								var _$parent29 = _$temp;var _node25 = {}; //jpair pre

								{
									var _jvalue10 = "";
									_jvalue10 = "共";
									//jpair suf

									_node25["zh_Hans"] = _jvalue10;
								}
								//jpair pre

								{
									var _jvalue11 = "";
									_jvalue11 = "共";
									//jpair suf

									_node25["zh_Hant"] = _jvalue11;
								}
								//jpair pre

								{
									var _jvalue12 = "";
									_jvalue12 = "";
									//jpair suf

									_node25["en"] = _jvalue12;
								}
								_addJson(_node25, _$parent29);
							}_$parent28.children.push(_node24);
						}_$temp = _node20;{
							var _$parent30 = _$temp;_addText(it1.totalAmount + it.ctypeShow, _$parent30);
						}_chFunc(_node20);_$parent23.children.push(_node20);
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
							var ind = _$i++;userName = { "zh_Hans": val.userName, "zh_Hant": val.userName, "en": "" };greatUser = { "zh_Hans": "手气最佳", "zh_Hant": "手氣最佳", "en": "" };_$temp = _node16;{
								var _$parent31 = _$temp;var _node26 = { "attrs": {}, "tagName": "app-components-fourParaImgItem-fourParaImgItem", "sid": 18 };_node26.hasChild = false;_node26.child = null;_node26.attrHash = 0;_$temp = _node26;{
									var _$parent32 = _$temp;var _node27 = {}; //jpair pre

									_node27["name"] = userName;
									//jpair suf
									//jpair pre

									_node27["data"] = val.amount + " " + it.ctypeShow;
									//jpair suf
									//jpair pre

									_node27["time"] = val.timeShow;
									//jpair suf
									//jpair pre

									_node27["img"] = val.avatar;
									//jpair suf
									//jpair pre

									_node27["describe"] = it1.greatUser == ind ? greatUser : "";
									//jpair suf
									_addJson(_node27, _$parent32);
								}_chFunc(_node26);_$parent31.children.push(_node26);
							}
						}
					}
				}_chFunc(_node16);_$parent19.children.push(_node16);
			}_chFunc(_node6);_$parent6.children.push(_node6);
		}_chFunc(_node);return _node;
	}
});