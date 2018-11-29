(function (_cfg, it, it1) {
	var _$temp = void 0,
	    node = void 0;_$temp = node;{
		var _$parent = _$temp;var _node = { "attrs": {}, "tagName": "div", "sid": 0 };_node.children = [];_node.attrSize = 5;_node.attrHash = 1553204046;_node.attrs["class"] = "new-page";_node.attrs["w-class"] = "new-page";_node.attrs["ev-back-click"] = "backPrePage";_node.attrs["ev-next-click"] = "chooseAddrClick";_node.attrs["ev-refresh-click"] = "refreshClick";_$temp = _node;{
			var _$parent2 = _$temp;var _node2 = { "attrs": {}, "tagName": "div", "sid": 1 };_node2.children = [];_node2.attrSize = 1;_node2.attrHash = 3673846548;_node2.attrs["w-class"] = "top-head";topBarTitle = { "zh_Hans": it.currencyName, "zh_Hant": it.currencyName, "en": "" };_$temp = _node2;{
				var _$parent3 = _$temp;var _node3 = { "attrs": {}, "tagName": "app-components1-topBar-topBar", "sid": 2 };_node3.hasChild = false;_node3.child = null;_node3.attrHash = 0;_$temp = _node3;{
					var _$parent4 = _$temp;var _node4 = {}; //jpair pre

					_node4["title"] = topBarTitle;
					//jpair suf
					//jpair pre

					{
						var jvalue = "";
						jvalue = "transparent";
						//jpair suf

						_node4["background"] = jvalue;
					}
					//jpair pre

					{
						var _jvalue = "";
						_jvalue = "../../res/image/location.png";
						//jpair suf

						_node4["nextImg"] = _jvalue;
					}
					//jpair pre

					{
						var _jvalue2 = "";
						_jvalue2 = "../../res/image1/refresh_white.png";
						//jpair suf

						_node4["refreshImg"] = _jvalue2;
					}
					//jpair pre

					_node4["text"] = it1.address;
					//jpair suf
					_addJson(_node4, _$parent4);
				}_chFunc(_node3);_$parent3.children.push(_node3);
			}_$temp = _node2;{
				var _$parent5 = _$temp;var _node5 = { "attrs": {}, "tagName": "div", "sid": 3 };_node5.children = [];_node5.attrSize = 1;_node5.attrHash = 3605200885;_node5.attrs["w-class"] = "head";_$temp = _node5;{
					var _$parent6 = _$temp;var _node6 = { "attrs": {}, "tagName": "img", "sid": 4 };_node6.children = [];_node6.attrSize = 2;_node6.attrHash = 1742546961;{
						var attrvalue = "";attrvalue += "../../../res/image/currency/";attrvalue += it.currencyName;attrvalue += ".png";_node6.attrs["src"] = attrvalue;
					}_node6.attrHash = _hash.nextHash(_node6.attrHash, _calTextHash(_node6.attrs["src"]));_node6.attrs["w-class"] = "currency-icon";_chFunc(_node6);_$parent6.children.push(_node6);
				}_$temp = _node5;{
					var _$parent7 = _$temp;var _node7 = { "attrs": {}, "tagName": "div", "sid": 5 };_node7.children = [];_node7.attrSize = 1;_node7.attrHash = 3118159832;_node7.attrs["w-class"] = "asset-container";_$temp = _node7;{
						var _$parent8 = _$temp;var _node8 = { "attrs": {}, "tagName": "div", "sid": 6 };_node8.children = [];_node8.attrSize = 1;_node8.attrHash = 1349797565;_node8.attrs["w-class"] = "balance";_$temp = _node8;{
							var _$parent9 = _$temp;_addText(it1.balance % 1 === 0 ? it1.balance.toFixed(2) : it1.balance, _$parent9);
						}_chFunc(_node8);_$parent8.children.push(_node8);
					}_$temp = _node7;{
						var _$parent10 = _$temp;var _node9 = { "attrs": {}, "tagName": "div", "sid": 7 };_node9.children = [];_node9.attrSize = 1;_node9.attrHash = 1532757002;_node9.attrs["w-class"] = "balance-value";_$temp = _node9;{
							var _$parent11 = _$temp;_addText(it1.currencyUnitSymbol, _$parent11);
						}_$temp = _node9;{
							var _$parent12 = _$temp;_addText(it1.balanceValue, _$parent12);
						}_chFunc(_node9);_$parent10.children.push(_node9);
					}_chFunc(_node7);_$parent7.children.push(_node7);
				}if (it1.canConvert) {
					_$temp = _node5;{
						var _$parent13 = _$temp;var _node10 = { "attrs": {}, "tagName": "div", "sid": 8 };_node10.children = [];_node10.childHash = 3337888917;_node10.attrSize = 2;_node10.attrHash = 3356756753;_node10.attrs["w-class"] = "btn-exchange";_node10.attrs["on-tap"] = "convertCurrencyClick";_$temp = _node10;{
							var _$parent14 = _$temp;var _node11 = { "attrs": {}, "tagName": "pi-ui-lang", "sid": 9 };_node11.hasChild = false;_node11.child = null;_node11.childHash = 1530936313;_node11.attrHash = 0;_$temp = _node11;{
								var _$parent15 = _$temp;var _node12 = {}; //jpair pre

								{
									var _jvalue3 = "";
									_jvalue3 = "换币";
									//jpair suf

									_node12["zh_Hans"] = _jvalue3;
								}
								//jpair pre

								{
									var _jvalue4 = "";
									_jvalue4 = "換幣";
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
								_addJson(_node12, _$parent15);
							}_$parent14.children.push(_node11);
						}_$parent13.children.push(_node10);
					}
				}_chFunc(_node5);_$parent5.children.push(_node5);
			}_$temp = _node2;{
				var _$parent16 = _$temp;var _node13 = { "attrs": {}, "tagName": "div", "sid": 10 };_node13.children = [];_node13.attrSize = 1;_node13.attrHash = 1940417547;_node13.attrs["w-class"] = "nav";tabs = [{ "zh_Hans": "全部", "zh_Hant": "全部", "en": "" }, { "zh_Hans": "转账", "zh_Hant": "轉賬", "en": "" }, { "zh_Hans": "收款", "zh_Hant": "收款", "en": "" }];{
					var _$i = 0;
					for (var _iterator = it1.tabs, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator]();;) {
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
						var i = _$i++;var isActive = i === it1.activeNum;_$temp = _node13;{
							var _$parent17 = _$temp;var _node14 = { "attrs": {}, "tagName": "div", "sid": 11 };_node14.children = [];_node14.attrSize = 2;_node14.attrHash = 962646855;{
								var _attrvalue = "";_attrvalue += "nav-item ";_attrvalue += isActive ? 'is-active' : '';_attrvalue += "";_node14.attrs["w-class"] = _attrvalue;
							}_node14.attrHash = _hash.nextHash(_node14.attrHash, _calTextHash(_node14.attrs["w-class"]));{
								var _attrvalue2 = "";_attrvalue2 += "tabsChangeClick(";_attrvalue2 += i;_attrvalue2 += ")";_node14.attrs["on-tap"] = _attrvalue2;
							}_node14.attrHash = _hash.nextHash(_node14.attrHash, _calTextHash(_node14.attrs["on-tap"]));_$temp = _node14;{
								var _$parent18 = _$temp;var _node15 = { "attrs": {}, "tagName": "pi-ui-lang", "sid": 12 };_node15.hasChild = false;_node15.child = null;_node15.attrHash = 0;_$temp = _node15;{
									var _$parent19 = _$temp;_addJson(tabs[i], _$parent19);
								}_chFunc(_node15);_$parent18.children.push(_node15);
							}_chFunc(_node14);_$parent17.children.push(_node14);
						}
					}
				}_chFunc(_node13);_$parent16.children.push(_node13);
			}_chFunc(_node2);_$parent2.children.push(_node2);
		}_$temp = _node;{
			var _$parent20 = _$temp;var _node16 = { "attrs": {}, "tagName": "div", "sid": 13 };_node16.children = [];_node16.attrSize = 1;_node16.attrHash = 915048845;_node16.attrs["w-class"] = "show-container";_$temp = _node16;{
				var _$parent21 = _$temp;var _node17 = { "attrs": {}, "tagName": "div", "sid": 14 };_node17.children = [];_node17.attrSize = 1;_node17.attrHash = 2438851802;_node17.attrs["w-class"] = "quotes";_$temp = _node17;{
					var _$parent22 = _$temp;var _node18 = { "attrs": {}, "tagName": "pi-ui-lang", "sid": 15 };_node18.hasChild = false;_node18.child = null;_node18.childHash = 2620983896;_node18.attrHash = 0;_$temp = _node18;{
						var _$parent23 = _$temp;var _node19 = {}; //jpair pre

						{
							var _jvalue6 = "";
							_jvalue6 = "行情";
							//jpair suf

							_node19["zh_Hans"] = _jvalue6;
						}
						//jpair pre

						{
							var _jvalue7 = "";
							_jvalue7 = "行情";
							//jpair suf

							_node19["zh_Hant"] = _jvalue7;
						}
						//jpair pre

						{
							var _jvalue8 = "";
							_jvalue8 = "";
							//jpair suf

							_node19["en"] = _jvalue8;
						}
						_addJson(_node19, _$parent23);
					}_$parent22.children.push(_node18);
				}_$temp = _node17;{
					var _$parent24 = _$temp;var _node20 = _installText("&nbsp;", 1553561131);;
					_$parent24.children.push(_node20);
				}_$temp = _node17;{
					var _$parent25 = _$temp;_addText(it1.currencyUnitSymbol, _$parent25);
				}_$temp = _node17;{
					var _$parent26 = _$temp;_addText(it1.rate, _$parent26);
				}_$temp = _node17;{
					var _$parent27 = _$temp;var _node21 = _installText("/", 883865250);;
					_$parent27.children.push(_node21);
				}_$temp = _node17;{
					var _$parent28 = _$temp;_addText(it.currencyName, _$parent28);
				}_chFunc(_node17);_$parent21.children.push(_node17);
			}if (it1.redUp) {
				_$temp = _node16;{
					var _$parent29 = _$temp;var _node22 = { "attrs": {}, "tagName": "div", "sid": 16 };_node22.children = [];_node22.attrSize = 1;_node22.attrHash = 2255571891;{
						var _attrvalue3 = "";_attrvalue3 += it.gain >= 0 ? 'up' : 'down';_attrvalue3 += "";_node22.attrs["w-class"] = _attrvalue3;
					}_node22.attrHash = _hash.nextHash(_node22.attrHash, _calTextHash(_node22.attrs["w-class"]));_$temp = _node22;{
						var _$parent30 = _$temp;var _node23 = { "attrs": {}, "tagName": "pi-ui-lang", "sid": 17 };_node23.hasChild = false;_node23.child = null;_node23.childHash = 1558011476;_node23.attrHash = 0;_$temp = _node23;{
							var _$parent31 = _$temp;var _node24 = {}; //jpair pre

							{
								var _jvalue9 = "";
								_jvalue9 = "今日";
								//jpair suf

								_node24["zh_Hans"] = _jvalue9;
							}
							//jpair pre

							{
								var _jvalue10 = "";
								_jvalue10 = "今日";
								//jpair suf

								_node24["zh_Hant"] = _jvalue10;
							}
							//jpair pre

							{
								var _jvalue11 = "";
								_jvalue11 = "";
								//jpair suf

								_node24["en"] = _jvalue11;
							}
							_addJson(_node24, _$parent31);
						}_$parent30.children.push(_node23);
					}_$temp = _node22;{
						var _$parent32 = _$temp;var _node25 = _installText("&nbsp;", 1553561131);;
						_$parent32.children.push(_node25);
					}_$temp = _node22;{
						var _$parent33 = _$temp;_addText(it.gain >= 0 ? '+' : '', _$parent33);
					}_$temp = _node22;{
						var _$parent34 = _$temp;_addText(it.gain, _$parent34);
					}_$temp = _node22;{
						var _$parent35 = _$temp;var _node26 = _installText("%", 4257547020);;
						_$parent35.children.push(_node26);
					}_chFunc(_node22);_$parent29.children.push(_node22);
				}
			} else {
				_$temp = _node16;{
					var _$parent36 = _$temp;var _node27 = { "attrs": {}, "tagName": "div", "sid": 18 };_node27.children = [];_node27.attrSize = 1;_node27.attrHash = 2255571891;{
						var _attrvalue4 = "";_attrvalue4 += it.gain >= 0 ? 'down' : 'up';_attrvalue4 += "";_node27.attrs["w-class"] = _attrvalue4;
					}_node27.attrHash = _hash.nextHash(_node27.attrHash, _calTextHash(_node27.attrs["w-class"]));_$temp = _node27;{
						var _$parent37 = _$temp;var _node28 = { "attrs": {}, "tagName": "pi-ui-lang", "sid": 19 };_node28.hasChild = false;_node28.child = null;_node28.childHash = 1558011476;_node28.attrHash = 0;_$temp = _node28;{
							var _$parent38 = _$temp;var _node29 = {}; //jpair pre

							{
								var _jvalue12 = "";
								_jvalue12 = "今日";
								//jpair suf

								_node29["zh_Hans"] = _jvalue12;
							}
							//jpair pre

							{
								var _jvalue13 = "";
								_jvalue13 = "今日";
								//jpair suf

								_node29["zh_Hant"] = _jvalue13;
							}
							//jpair pre

							{
								var _jvalue14 = "";
								_jvalue14 = "";
								//jpair suf

								_node29["en"] = _jvalue14;
							}
							_addJson(_node29, _$parent38);
						}_$parent37.children.push(_node28);
					}_$temp = _node27;{
						var _$parent39 = _$temp;var _node30 = _installText("&nbsp;", 1553561131);;
						_$parent39.children.push(_node30);
					}_$temp = _node27;{
						var _$parent40 = _$temp;_addText(it.gain >= 0 ? '+' : '', _$parent40);
					}_$temp = _node27;{
						var _$parent41 = _$temp;_addText(it.gain, _$parent41);
					}_$temp = _node27;{
						var _$parent42 = _$temp;var _node31 = _installText("%", 4257547020);;
						_$parent42.children.push(_node31);
					}_chFunc(_node27);_$parent36.children.push(_node27);
				}
			}_chFunc(_node16);_$parent20.children.push(_node16);
		}_$temp = _node;{
			var _$parent43 = _$temp;var _node32 = { "attrs": {}, "tagName": "div", "sid": 20 };_node32.children = [];_node32.attrSize = 1;_node32.attrHash = 4252679546;_node32.attrs["w-class"] = "body";_$temp = _node32;{
				var _$parent44 = _$temp;var _node33 = { "attrs": {}, "tagName": "div", "sid": 21 };_node33.children = [];_node33.attrSize = 1;_node33.attrHash = 1331109157;_node33.attrs["w-class"] = "tx-list-container";if (it1.txList.length === 0) {
					_$temp = _node33;{
						var _$parent45 = _$temp;var _node34 = { "attrs": {}, "tagName": "div", "sid": 22 };_node34.children = [];_node34.childHash = 3110336958;_node34.attrSize = 1;_node34.attrHash = 1587261762;_node34.attrs["w-class"] = "no-recode";_$temp = _node34;{
							var _$parent46 = _$temp;var _node35 = { "attrs": {}, "tagName": "img", "sid": 23 };_node35.children = [];_node35.childHash = 0;_node35.attrSize = 2;_node35.attrHash = 832237403;_node35.attrs["src"] = "../../../res/image/dividend_history_none.png";_node35.attrs["w-class"] = "no-recode-icon";_$parent46.children.push(_node35);
						}_$temp = _node34;{
							var _$parent47 = _$temp;var _node36 = { "attrs": {}, "tagName": "div", "sid": 24 };_node36.children = [];_node36.childHash = 3525846262;_node36.attrSize = 1;_node36.attrHash = 308010609;_node36.attrs["w-class"] = "no-recode-text";_$temp = _node36;{
								var _$parent48 = _$temp;var _node37 = { "attrs": {}, "tagName": "pi-ui-lang", "sid": 25 };_node37.hasChild = false;_node37.child = null;_node37.childHash = 2043208451;_node37.attrHash = 0;_$temp = _node37;{
									var _$parent49 = _$temp;var _node38 = {}; //jpair pre

									{
										var _jvalue15 = "";
										_jvalue15 = "还没有记录哦";
										//jpair suf

										_node38["zh_Hans"] = _jvalue15;
									}
									//jpair pre

									{
										var _jvalue16 = "";
										_jvalue16 = "還沒有記錄哦";
										//jpair suf

										_node38["zh_Hant"] = _jvalue16;
									}
									//jpair pre

									{
										var _jvalue17 = "";
										_jvalue17 = "";
										//jpair suf

										_node38["en"] = _jvalue17;
									}
									_addJson(_node38, _$parent49);
								}_$parent48.children.push(_node37);
							}_$parent47.children.push(_node36);
						}_$parent45.children.push(_node34);
					}
				}_$temp = _node33;{
					var _$parent50 = _$temp;var _node39 = { "attrs": {}, "tagName": "div", "sid": 26 };_node39.children = [];_node39.attrSize = 1;_node39.attrHash = 660002203;_node39.attrs["w-class"] = "tx-list";{
						var _$i2 = 0;
						for (var _iterator2 = it1.tabs[it1.activeNum].list, _isArray2 = Array.isArray(_iterator2), _i2 = 0, _iterator2 = _isArray2 ? _iterator2 : _iterator2[Symbol.iterator]();;) {
							var _ref2;

							if (_isArray2) {
								if (_i2 >= _iterator2.length) break;
								_ref2 = _iterator2[_i2++];
							} else {
								_i2 = _iterator2.next();
								if (_i2.done) break;
								_ref2 = _i2.value;
							}

							var _v = _ref2;
							var _i3 = _$i2++;_$temp = _node39;{
								var _$parent51 = _$temp;var _node40 = { "attrs": {}, "tagName": "div", "sid": 27 };_node40.children = [];_node40.attrSize = 1;_node40.attrHash = 1363181170;{
									var _attrvalue5 = "";_attrvalue5 += "txListItemClick(e,";_attrvalue5 += _i3;_attrvalue5 += ")";_node40.attrs["on-tap"] = _attrvalue5;
								}_node40.attrHash = _hash.nextHash(_node40.attrHash, _calTextHash(_node40.attrs["on-tap"]));_$temp = _node40;{
									var _$parent52 = _$temp;var _node41 = { "attrs": {}, "tagName": "app-components-fourParaImgItem-fourParaImgItem", "sid": 28 };_node41.hasChild = false;_node41.child = null;_node41.attrHash = 0;_$temp = _node41;{
										var _$parent53 = _$temp;var _node42 = {}; //jpair pre

										_node42["name"] = _v.txTypeShow;
										//jpair suf
										//jpair pre

										_node42["data"] = _v.pay % 1 === 0 ? _v.pay.toFixed(2) : _v.pay;
										//jpair suf
										//jpair pre

										_node42["time"] = _v.TimeShow;
										//jpair suf
										//jpair pre

										_node42["describe"] = _v.statusShow;
										//jpair suf
										//jpair pre

										{
											var _jvalue18 = "";
											_jvalue18 += "../../res/image/";_jvalue18 += _v.txType === 2 ? "receive_icon.png" : "transfer_icon.png";_jvalue18 += "";
											//jpair suf

											_node42["img"] = _jvalue18;
										}
										_addJson(_node42, _$parent53);
									}_chFunc(_node41);_$parent52.children.push(_node41);
								}_chFunc(_node40);_$parent51.children.push(_node40);
							}
						}
					}_chFunc(_node39);_$parent50.children.push(_node39);
				}_chFunc(_node33);_$parent44.children.push(_node33);
			}_chFunc(_node32);_$parent43.children.push(_node32);
		}_$temp = _node;{
			var _$parent54 = _$temp;var _node43 = { "attrs": {}, "tagName": "div", "sid": 29 };_node43.children = [];_node43.childHash = 1440295368;_node43.attrSize = 1;_node43.attrHash = 2324204331;_node43.attrs["w-class"] = "operating";_$temp = _node43;{
				var _$parent55 = _$temp;var _node44 = { "attrs": {}, "tagName": "div", "sid": 30 };_node44.children = [];_node44.childHash = 1613685682;_node44.attrSize = 2;_node44.attrHash = 281941336;_node44.attrs["w-class"] = "operating-item";_node44.attrs["on-tap"] = "doTransferClick";_$temp = _node44;{
					var _$parent56 = _$temp;var _node45 = { "attrs": {}, "tagName": "img", "sid": 31 };_node45.children = [];_node45.childHash = 0;_node45.attrSize = 2;_node45.attrHash = 3210676121;_node45.attrs["src"] = "../../../res/image/transfer.png";_node45.attrs["w-class"] = "icon";_$parent56.children.push(_node45);
				}_$temp = _node44;{
					var _$parent57 = _$temp;var _node46 = { "attrs": {}, "tagName": "span", "sid": 32 };_node46.children = [];_node46.childHash = 4146332279;_node46.attrHash = 0;_$temp = _node46;{
						var _$parent58 = _$temp;var _node47 = { "attrs": {}, "tagName": "pi-ui-lang", "sid": 33 };_node47.hasChild = false;_node47.child = null;_node47.childHash = 678094604;_node47.attrHash = 0;_$temp = _node47;{
							var _$parent59 = _$temp;var _node48 = {}; //jpair pre

							{
								var _jvalue19 = "";
								_jvalue19 = "转账";
								//jpair suf

								_node48["zh_Hans"] = _jvalue19;
							}
							//jpair pre

							{
								var _jvalue20 = "";
								_jvalue20 = "轉賬";
								//jpair suf

								_node48["zh_Hant"] = _jvalue20;
							}
							//jpair pre

							{
								var _jvalue21 = "";
								_jvalue21 = "";
								//jpair suf

								_node48["en"] = _jvalue21;
							}
							_addJson(_node48, _$parent59);
						}_$parent58.children.push(_node47);
					}_$parent57.children.push(_node46);
				}_$parent55.children.push(_node44);
			}_$temp = _node43;{
				var _$parent60 = _$temp;var _node49 = { "attrs": {}, "tagName": "div", "sid": 34 };_node49.children = [];_node49.childHash = 2946814719;_node49.attrSize = 1;_node49.attrHash = 374818280;_node49.attrs["w-class"] = "line";_$parent60.children.push(_node49);
			}_$temp = _node43;{
				var _$parent61 = _$temp;var _node50 = { "attrs": {}, "tagName": "div", "sid": 35 };_node50.children = [];_node50.childHash = 1035065283;_node50.attrSize = 3;_node50.attrHash = 4196267032;_node50.attrs["w-class"] = "operating-item";_node50.attrs["on-tap"] = "doReceiptClick";_node50.attrs["style"] = "background: #318DE6;";_$temp = _node50;{
					var _$parent62 = _$temp;var _node51 = { "attrs": {}, "tagName": "img", "sid": 36 };_node51.children = [];_node51.childHash = 0;_node51.attrSize = 2;_node51.attrHash = 1309473459;_node51.attrs["src"] = "../../../res/image/19.png";_node51.attrs["w-class"] = "icon";_$parent62.children.push(_node51);
				}_$temp = _node50;{
					var _$parent63 = _$temp;var _node52 = { "attrs": {}, "tagName": "span", "sid": 37 };_node52.children = [];_node52.childHash = 1303582479;_node52.attrHash = 0;_$temp = _node52;{
						var _$parent64 = _$temp;var _node53 = { "attrs": {}, "tagName": "pi-ui-lang", "sid": 38 };_node53.hasChild = false;_node53.child = null;_node53.childHash = 1121459245;_node53.attrHash = 0;_$temp = _node53;{
							var _$parent65 = _$temp;var _node54 = {}; //jpair pre

							{
								var _jvalue22 = "";
								_jvalue22 = "收款";
								//jpair suf

								_node54["zh_Hans"] = _jvalue22;
							}
							//jpair pre

							{
								var _jvalue23 = "";
								_jvalue23 = "收款";
								//jpair suf

								_node54["zh_Hant"] = _jvalue23;
							}
							//jpair pre

							{
								var _jvalue24 = "";
								_jvalue24 = "";
								//jpair suf

								_node54["en"] = _jvalue24;
							}
							_addJson(_node54, _$parent65);
						}_$parent64.children.push(_node53);
					}_$parent63.children.push(_node52);
				}_$parent61.children.push(_node50);
			}_$parent54.children.push(_node43);
		}_chFunc(_node);return _node;
	}
});