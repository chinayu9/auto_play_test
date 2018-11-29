(function (_cfg, it, it1) {
	var _$temp = void 0,
	    node = void 0;_$temp = node;{
		var _$parent = _$temp;var _node = { "attrs": {}, "tagName": "div", "sid": 0 };_node.children = [];_node.attrSize = 5;_node.attrHash = 2851242308;_node.attrs["class"] = "new-page";_node.attrs["w-class"] = "new-page";_node.attrs["ev-back-click"] = "backPrePage";_node.attrs["ev-next-click"] = "goDetail";_node.attrs["ev-refresh-click"] = "refreshPage";_$temp = _node;{
			var _$parent2 = _$temp;var _node2 = { "attrs": {}, "tagName": "div", "sid": 1 };_node2.children = [];_node2.childHash = 3417562939;_node2.attrSize = 1;_node2.attrHash = 3779102506;_node2.attrs["style"] = "text-align: center;position: absolute;width: 100%;top: 150px;z-index: 0;";_$temp = _node2;{
				var _$parent3 = _$temp;var _node3 = { "attrs": {}, "tagName": "img", "sid": 2 };_node3.children = [];_node3.childHash = 0;_node3.attrSize = 2;_node3.attrHash = 68926909;_node3.attrs["src"] = "../../../res/image/dividend_background.png";_node3.attrs["style"] = "width: 570px;";_$parent3.children.push(_node3);
			}_$parent2.children.push(_node2);
		}_$temp = _node;{
			var _$parent4 = _$temp;var _node4 = { "attrs": {}, "tagName": "div", "sid": 3 };_node4.children = [];_node4.attrSize = 3;_node4.attrHash = 1985805996;_node4.attrs["w-class"] = "content";_node4.attrs["on-scroll"] = "getMoreList";_node4.attrs["id"] = "historylist";_$temp = _node4;{
				var _$parent5 = _$temp;var _node5 = { "attrs": {}, "tagName": "div", "sid": 4 };_node5.children = [];_node5.attrSize = 1;_node5.attrHash = 3958668344;_node5.attrs["id"] = "history";_$temp = _node5;{
					var _$parent6 = _$temp;var _node6 = { "attrs": {}, "tagName": "div", "sid": 5 };_node6.children = [];_node6.attrSize = 1;_node6.attrHash = 3090186721;_node6.attrs["w-class"] = "groupcard";_$temp = _node6;{
						var _$parent7 = _$temp;var _node7 = { "attrs": {}, "tagName": "div", "sid": 6 };_node7.children = [];_node7.childHash = 2350745868;_node7.attrSize = 1;_node7.attrHash = 1875170223;_node7.attrs["w-class"] = "dividend-title";_$temp = _node7;{
							var _$parent8 = _$temp;var _node8 = { "attrs": {}, "tagName": "pi-ui-lang", "sid": 7 };_node8.hasChild = false;_node8.child = null;_node8.childHash = 2903427177;_node8.attrHash = 0;_$temp = _node8;{
								var _$parent9 = _$temp;var _node9 = {}; //jpair pre

								{
									var jvalue = "";
									jvalue = "累计分红(ETH)";
									//jpair suf

									_node9["zh_Hans"] = jvalue;
								}
								//jpair pre

								{
									var _jvalue = "";
									_jvalue = "累計分紅(ETH)";
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
								_addJson(_node9, _$parent9);
							}_$parent8.children.push(_node8);
						}_$parent7.children.push(_node7);
					}_$temp = _node6;{
						var _$parent10 = _$temp;var _node10 = { "attrs": {}, "tagName": "div", "sid": 8 };_node10.children = [];_node10.attrSize = 1;_node10.attrHash = 427216314;_node10.attrs["w-class"] = "dividend-money";_$temp = _node10;{
							var _$parent11 = _$temp;_addText(it1.totalDivid, _$parent11);
						}_chFunc(_node10);_$parent10.children.push(_node10);
					}_$temp = _node6;{
						var _$parent12 = _$temp;var _node11 = { "attrs": {}, "tagName": "div", "sid": 9 };_node11.children = [];_node11.childHash = 2946814719;_node11.attrSize = 1;_node11.attrHash = 3144420239;_node11.attrs["w-class"] = "dividLine";_$parent12.children.push(_node11);
					}_$temp = _node6;{
						var _$parent13 = _$temp;var _node12 = { "attrs": {}, "tagName": "div", "sid": 10 };_node12.children = [];_node12.attrSize = 1;_node12.attrHash = 2271325905;_node12.attrs["w-class"] = "dividend-sum";_$temp = _node12;{
							var _$parent14 = _$temp;var _node13 = { "attrs": {}, "tagName": "span", "sid": 11 };_node13.children = [];_node13.attrSize = 1;_node13.attrHash = 3608606104;_node13.attrs["style"] = "display: inline-block;vertical-align: middle;";_$temp = _node13;{
								var _$parent15 = _$temp;var _node14 = { "attrs": {}, "tagName": "pi-ui-lang", "sid": 12 };_node14.hasChild = false;_node14.child = null;_node14.childHash = 1601369458;_node14.attrHash = 0;_$temp = _node14;{
									var _$parent16 = _$temp;var _node15 = {}; //jpair pre

									{
										var _jvalue3 = "";
										_jvalue3 = "持有";
										//jpair suf

										_node15["zh_Hans"] = _jvalue3;
									}
									//jpair pre

									{
										var _jvalue4 = "";
										_jvalue4 = "持有";
										//jpair suf

										_node15["zh_Hant"] = _jvalue4;
									}
									//jpair pre

									{
										var _jvalue5 = "";
										_jvalue5 = "";
										//jpair suf

										_node15["en"] = _jvalue5;
									}
									_addJson(_node15, _$parent16);
								}_$parent15.children.push(_node14);
							}_$temp = _node13;{
								var _$parent17 = _$temp;var _node16 = _installText("&nbsp;", 1553561131);;
								_$parent17.children.push(_node16);
							}_$temp = _node13;{
								var _$parent18 = _$temp;_addText(it1.ktBalance, _$parent18);
							}_$temp = _node13;{
								var _$parent19 = _$temp;var _node17 = _installText("&nbsp;KT", 1397001297);;
								_$parent19.children.push(_node17);
							}_chFunc(_node13);_$parent14.children.push(_node13);
						}_chFunc(_node12);_$parent13.children.push(_node12);
					}_chFunc(_node6);_$parent6.children.push(_node6);
				}_$temp = _node5;{
					var _$parent20 = _$temp;var _node18 = { "attrs": {}, "tagName": "div", "sid": 13 };_node18.children = [];_node18.attrSize = 1;_node18.attrHash = 2511157203;_node18.attrs["style"] = "margin-top: 10px;transform: translateZ(-1px);";threeCard = [{ zh_Hans: "年化收益", zh_Hant: "年化收益", en: "" }, { zh_Hans: "本次分红", zh_Hant: "本次分紅", en: "" }, { zh_Hans: "已分红天数", zh_Hant: "已分紅天數", en: "" }];_$temp = _node18;{
						var _$parent21 = _$temp;var _node19 = { "attrs": {}, "tagName": "app-components-threeParaCard-threeParaCard", "sid": 14 };_node19.hasChild = false;_node19.child = null;_node19.attrHash = 0;_$temp = _node19;{
							var _$parent22 = _$temp;var _node20 = {}; //jpair pre

							_node20["name"] = threeCard;
							//jpair suf
							//jpair pre

							_$temp = _node20;{
								var _$parent23 = _$temp;_$temp = _node20;{
									var _$parent24 = _$temp;var _node21 = [];_node21[0] = it1.yearIncome;_node21[1] = it1.thisDivid;_node21[2] = it1.totalDays;_$parent24["data"] = _node21;
								}
								//jpair suf
							}_addJson(_node20, _$parent22);
						}_chFunc(_node19);_$parent21.children.push(_node19);
					}_chFunc(_node18);_$parent20.children.push(_node18);
				}_$temp = _node5;{
					var _$parent25 = _$temp;var _node22 = { "attrs": {}, "tagName": "div", "sid": 15 };_node22.children = [];_node22.attrSize = 2;_node22.attrHash = 558225676;_node22.attrs["id"] = "dividendBtn";_node22.attrs["style"] = "text-align: center;margin-top: 180px;height: 200px;";_$temp = _node22;{
						var _$parent26 = _$temp;var _node23 = { "attrs": {}, "tagName": "div", "sid": 16 };_node23.children = [];_node23.attrSize = 3;_node23.attrHash = 3827939633;_node23.attrs["w-class"] = "miningBtn";_node23.attrs["on-tap"] = "doMining";{
							var attrvalue = "";attrvalue += "color: #fff;animation:";attrvalue += it1.isAbleBtn ? 'dividendChange 0.2s' : '';attrvalue += "";_node23.attrs["style"] = attrvalue;
						}_node23.attrHash = _hash.nextHash(_node23.attrHash, _calTextHash(_node23.attrs["style"]));_$temp = _node23;{
							var _$parent27 = _$temp;var _node24 = { "attrs": {}, "tagName": "pi-ui-lang", "sid": 17 };_node24.hasChild = false;_node24.child = null;_node24.childHash = 1139088841;_node24.attrHash = 0;_$temp = _node24;{
								var _$parent28 = _$temp;var _node25 = {}; //jpair pre

								{
									var _jvalue6 = "";
									_jvalue6 = "领分红";
									//jpair suf

									_node25["zh_Hans"] = _jvalue6;
								}
								//jpair pre

								{
									var _jvalue7 = "";
									_jvalue7 = "領分紅";
									//jpair suf

									_node25["zh_Hant"] = _jvalue7;
								}
								//jpair pre

								{
									var _jvalue8 = "";
									_jvalue8 = "";
									//jpair suf

									_node25["en"] = _jvalue8;
								}
								_addJson(_node25, _$parent28);
							}_$parent27.children.push(_node24);
						}_chFunc(_node23);_$parent26.children.push(_node23);
					}_$temp = _node22;{
						var _$parent29 = _$temp;var _node26 = { "attrs": {}, "tagName": "div", "sid": 18 };_node26.children = [];_node26.attrSize = 2;_node26.attrHash = 4069970227;_node26.attrs["class"] = "dividendNum";{
							var _attrvalue = "";_attrvalue += "animation:";_attrvalue += it1.doMining ? 'dividendMove 1s' : '';_attrvalue += "";_node26.attrs["style"] = _attrvalue;
						}_node26.attrHash = _hash.nextHash(_node26.attrHash, _calTextHash(_node26.attrs["style"]));_$temp = _node26;{
							var _$parent30 = _$temp;var _node27 = { "attrs": {}, "tagName": "span", "sid": 19 };_node27.children = [];_node27.attrHash = 0;_$temp = _node27;{
								var _$parent31 = _$temp;var _node28 = _installText("+", 3807426999);;
								_$parent31.children.push(_node28);
							}_$temp = _node27;{
								var _$parent32 = _$temp;_addText(it1.thisDivid, _$parent32);
							}_chFunc(_node27);_$parent30.children.push(_node27);
						}_chFunc(_node26);_$parent29.children.push(_node26);
					}_chFunc(_node22);_$parent25.children.push(_node22);
				}_$temp = _node5;{
					var _$parent33 = _$temp;var _node29 = { "attrs": {}, "tagName": "div", "sid": 20 };_node29.children = [];_node29.attrSize = 1;_node29.attrHash = 840313844;_node29.attrs["w-class"] = "history";_$temp = _node29;{
						var _$parent34 = _$temp;var _node30 = { "attrs": {}, "tagName": "div", "sid": 21 };_node30.children = [];_node30.childHash = 3590125974;_node30.attrSize = 1;_node30.attrHash = 4046753769;_node30.attrs["w-class"] = "historyTitle";_$temp = _node30;{
							var _$parent35 = _$temp;var _node31 = { "attrs": {}, "tagName": "pi-ui-lang", "sid": 22 };_node31.hasChild = false;_node31.child = null;_node31.childHash = 4191141471;_node31.attrHash = 0;_$temp = _node31;{
								var _$parent36 = _$temp;var _node32 = {}; //jpair pre

								{
									var _jvalue9 = "";
									_jvalue9 = "分红记录";
									//jpair suf

									_node32["zh_Hans"] = _jvalue9;
								}
								//jpair pre

								{
									var _jvalue10 = "";
									_jvalue10 = "分紅記錄";
									//jpair suf

									_node32["zh_Hant"] = _jvalue10;
								}
								//jpair pre

								{
									var _jvalue11 = "";
									_jvalue11 = "";
									//jpair suf

									_node32["en"] = _jvalue11;
								}
								_addJson(_node32, _$parent36);
							}_$parent35.children.push(_node31);
						}_$parent34.children.push(_node30);
					}if (it1.data.length == 0) {
						_$temp = _node29;{
							var _$parent37 = _$temp;var _node33 = { "attrs": {}, "tagName": "div", "sid": 23 };_node33.children = [];_node33.childHash = 3808241759;_node33.attrSize = 1;_node33.attrHash = 3809030542;_node33.attrs["w-class"] = "historyNone";_$temp = _node33;{
								var _$parent38 = _$temp;var _node34 = { "attrs": {}, "tagName": "img", "sid": 24 };_node34.children = [];_node34.childHash = 0;_node34.attrSize = 2;_node34.attrHash = 1093656218;_node34.attrs["src"] = "../../../res/image/dividend_history_none.png";_node34.attrs["style"] = "width: 200px;height: 200px;";_$parent38.children.push(_node34);
							}_$temp = _node33;{
								var _$parent39 = _$temp;var _node35 = { "attrs": {}, "tagName": "div", "sid": 25 };_node35.children = [];_node35.childHash = 3525846262;_node35.attrHash = 0;_$temp = _node35;{
									var _$parent40 = _$temp;var _node36 = { "attrs": {}, "tagName": "pi-ui-lang", "sid": 26 };_node36.hasChild = false;_node36.child = null;_node36.childHash = 2043208451;_node36.attrHash = 0;_$temp = _node36;{
										var _$parent41 = _$temp;var _node37 = {}; //jpair pre

										{
											var _jvalue12 = "";
											_jvalue12 = "还没有记录哦";
											//jpair suf

											_node37["zh_Hans"] = _jvalue12;
										}
										//jpair pre

										{
											var _jvalue13 = "";
											_jvalue13 = "還沒有記錄哦";
											//jpair suf

											_node37["zh_Hant"] = _jvalue13;
										}
										//jpair pre

										{
											var _jvalue14 = "";
											_jvalue14 = "";
											//jpair suf

											_node37["en"] = _jvalue14;
										}
										_addJson(_node37, _$parent41);
									}_$parent40.children.push(_node36);
								}_$parent39.children.push(_node35);
							}_$parent37.children.push(_node33);
						}
					}_$temp = _node29;{
						var _$parent42 = _$temp;var _node38 = { "attrs": {}, "tagName": "div", "sid": 27 };_node38.children = [];_node38.attrSize = 1;_node38.attrHash = 1389042152;_node38.attrs["w-class"] = "historyContent";{
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
								var ind = _$i++;_$temp = _node38;{
									var _$parent43 = _$temp;var _node39 = { "attrs": {}, "tagName": "div", "sid": 28 };_node39.children = [];_node39.attrSize = 1;_node39.attrHash = 574965062;_node39.attrs["w-class"] = "historyItem";_$temp = _node39;{
										var _$parent44 = _$temp;var _node40 = { "attrs": {}, "tagName": "span", "sid": 29 };_node40.children = [];_node40.attrSize = 1;_node40.attrHash = 3223011840;_node40.attrs["style"] = "flex: 1;";_$temp = _node40;{
											var _$parent45 = _$temp;_addText(val.time, _$parent45);
										}_chFunc(_node40);_$parent44.children.push(_node40);
									}_$temp = _node39;{
										var _$parent46 = _$temp;var _node41 = { "attrs": {}, "tagName": "span", "sid": 30 };_node41.children = [];_node41.attrHash = 0;_$temp = _node41;{
											var _$parent47 = _$temp;_addText(val.num + " ETH", _$parent47);
										}_chFunc(_node41);_$parent46.children.push(_node41);
									}_chFunc(_node39);_$parent43.children.push(_node39);
								}
							}
						}if (it1.data.length > 0 && !it1.hasMore) {
							_$temp = _node38;{
								var _$parent48 = _$temp;var _node42 = { "attrs": {}, "tagName": "div", "sid": 31 };_node42.children = [];_node42.childHash = 783069360;_node42.attrSize = 1;_node42.attrHash = 3992589513;_node42.attrs["w-class"] = "endMess";_$temp = _node42;{
									var _$parent49 = _$temp;var _node43 = { "attrs": {}, "tagName": "pi-ui-lang", "sid": 32 };_node43.hasChild = false;_node43.child = null;_node43.childHash = 1461306196;_node43.attrHash = 0;_$temp = _node43;{
										var _$parent50 = _$temp;var _node44 = {}; //jpair pre

										{
											var _jvalue15 = "";
											_jvalue15 = "到此结束啦";
											//jpair suf

											_node44["zh_Hans"] = _jvalue15;
										}
										//jpair pre

										{
											var _jvalue16 = "";
											_jvalue16 = "到此結束啦";
											//jpair suf

											_node44["zh_Hant"] = _jvalue16;
										}
										//jpair pre

										{
											var _jvalue17 = "";
											_jvalue17 = "";
											//jpair suf

											_node44["en"] = _jvalue17;
										}
										_addJson(_node44, _$parent50);
									}_$parent49.children.push(_node43);
								}_$temp = _node42;{
									var _$parent51 = _$temp;var _node45 = _installText("^_^", 2624223669);;
									_$parent51.children.push(_node45);
								}_$parent48.children.push(_node42);
							}
						}_chFunc(_node38);_$parent42.children.push(_node38);
					}_chFunc(_node29);_$parent33.children.push(_node29);
				}_chFunc(_node5);_$parent5.children.push(_node5);
			}_chFunc(_node4);_$parent4.children.push(_node4);
		}topBarTitle = { "zh_Hans": "领分红", "zh_Hant": "領分紅", "en": "" };_$temp = _node;{
			var _$parent52 = _$temp;var _node46 = { "attrs": {}, "tagName": "app-components1-topBar-topBar2", "sid": 33 };_node46.hasChild = false;_node46.child = null;_node46.attrHash = 0;_$temp = _node46;{
				var _$parent53 = _$temp;var _node47 = {}; //jpair pre

				_node47["scrollHeight"] = it1.scrollHeight;
				//jpair suf
				//jpair pre

				_node47["text"] = topBarTitle;
				//jpair suf
				//jpair pre

				_node47["nextImg"] = it1.scrollHeight > 0 ? "../../res/image/41_gray.png" : "../../res/image/41_white.png";
				//jpair suf
				_addJson(_node47, _$parent53);
			}_chFunc(_node46);_$parent52.children.push(_node46);
		}_chFunc(_node);return _node;
	}
});