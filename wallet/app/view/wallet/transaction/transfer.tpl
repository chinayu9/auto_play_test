(function (_cfg, it, it1) {
	var _$temp = void 0,
	    node = void 0;_$temp = node;{
		var _$parent = _$temp;var _node = { "attrs": {}, "tagName": "div", "sid": 0 };_node.children = [];_node.attrSize = 3;_node.attrHash = 3437572703;_node.attrs["class"] = "new-page";_node.attrs["w-class"] = "new-page";_node.attrs["ev-back-click"] = "backPrePage";_$temp = _node;{
			var _$parent2 = _$temp;var _node2 = { "attrs": {}, "tagName": "div", "sid": 1 };_node2.children = [];_node2.attrSize = 1;_node2.attrHash = 3673846548;_node2.attrs["w-class"] = "top-head";topBarTitle = { "zh_Hans": it.currencyName + "转账", "zh_Hant": it.currencyName + "轉賬", "en": "" };_$temp = _node2;{
				var _$parent3 = _$temp;var _node3 = { "attrs": {}, "tagName": "app-components1-topBar-topBar", "sid": 2 };_node3.hasChild = false;_node3.child = null;_node3.attrHash = 0;_$temp = _node3;{
					var _$parent4 = _$temp;var _node4 = {}; //jpair pre

					_node4["title"] = topBarTitle;
					//jpair suf
					_addJson(_node4, _$parent4);
				}_chFunc(_node3);_$parent3.children.push(_node3);
			}_chFunc(_node2);_$parent2.children.push(_node2);
		}_$temp = _node;{
			var _$parent5 = _$temp;var _node5 = { "attrs": {}, "tagName": "div", "sid": 3 };_node5.children = [];_node5.attrSize = 1;_node5.attrHash = 4252679546;_node5.attrs["w-class"] = "body";_$temp = _node5;{
				var _$parent6 = _$temp;var _node6 = { "attrs": {}, "tagName": "div", "sid": 4 };_node6.children = [];_node6.attrSize = 1;_node6.attrHash = 2812074640;_node6.attrs["w-class"] = "container";_$temp = _node6;{
					var _$parent7 = _$temp;var _node7 = { "attrs": {}, "tagName": "div", "sid": 5 };_node7.children = [];_node7.attrHash = 0;tags = [{ "zh_Hans": "转账", "zh_Hant": "轉賬", "en": "" }, { "zh_Hans": "余额：", "zh_Hant": "餘額：", "en": "" }, { "zh_Hans": "收款地址", "zh_Hant": "收款地址", "en": "" }, { "zh_Hans": "付款地址", "zh_Hant": "付款地址", "en": "" }, { "zh_Hans": "到账速度", "zh_Hant": "到賬速度", "en": "" }, { "zh_Hans": "矿工费", "zh_Hant": "礦工費", "en": "" }];inputPlace = [{ "zh_Hans": "输入金额", "zh_Hant": "輸入金額", "en": "" }, { "zh_Hans": "填入地址", "zh_Hant": "填入地址", "en": "" }];_$temp = _node7;{
						var _$parent8 = _$temp;var _node8 = { "attrs": {}, "tagName": "div", "sid": 6 };_node8.children = [];_node8.attrSize = 1;_node8.attrHash = 1045235690;_node8.attrs["w-class"] = "item";_$temp = _node8;{
							var _$parent9 = _$temp;var _node9 = { "attrs": {}, "tagName": "div", "sid": 7 };_node9.children = [];_node9.attrSize = 1;_node9.attrHash = 948163967;_node9.attrs["w-class"] = "inner-tip";_$temp = _node9;{
								var _$parent10 = _$temp;var _node10 = { "attrs": {}, "tagName": "span", "sid": 8 };_node10.children = [];_node10.attrHash = 0;_$temp = _node10;{
									var _$parent11 = _$temp;_addText(it.currencyName, _$parent11);
								}_$temp = _node10;{
									var _$parent12 = _$temp;var _node11 = { "attrs": {}, "tagName": "pi-ui-lang", "sid": 9 };_node11.hasChild = false;_node11.child = null;_node11.attrHash = 0;_$temp = _node11;{
										var _$parent13 = _$temp;_addJson(tags[0], _$parent13);
									}_chFunc(_node11);_$parent12.children.push(_node11);
								}_chFunc(_node10);_$parent10.children.push(_node10);
							}_$temp = _node9;{
								var _$parent14 = _$temp;var _node12 = { "attrs": {}, "tagName": "span", "sid": 10 };_node12.children = [];_node12.attrSize = 1;_node12.attrHash = 1349797565;_node12.attrs["w-class"] = "balance";_$temp = _node12;{
									var _$parent15 = _$temp;var _node13 = { "attrs": {}, "tagName": "pi-ui-lang", "sid": 11 };_node13.hasChild = false;_node13.child = null;_node13.attrHash = 0;_$temp = _node13;{
										var _$parent16 = _$temp;_addJson(tags[1], _$parent16);
									}_chFunc(_node13);_$parent15.children.push(_node13);
								}_$temp = _node12;{
									var _$parent17 = _$temp;var _node14 = _installText("&nbsp;", 1553561131);;
									_$parent17.children.push(_node14);
								}_$temp = _node12;{
									var _$parent18 = _$temp;_addText(it1.balance % 1 === 0 ? it1.balance.toFixed(2) : it1.balance, _$parent18);
								}_chFunc(_node12);_$parent14.children.push(_node12);
							}_chFunc(_node9);_$parent9.children.push(_node9);
						}_$temp = _node8;{
							var _$parent19 = _$temp;var _node15 = { "attrs": {}, "tagName": "div", "sid": 12 };_node15.children = [];_node15.attrSize = 2;_node15.attrHash = 3806745363;_node15.attrs["w-class"] = "input-father";_node15.attrs["ev-input-change"] = "amountChange";_$temp = _node15;{
								var _$parent20 = _$temp;var _node16 = { "attrs": {}, "tagName": "div", "sid": 13 };_node16.children = [];_node16.attrSize = 1;_node16.attrHash = 1532757002;_node16.attrs["w-class"] = "balance-value";_$temp = _node16;{
									var _$parent21 = _$temp;var _node17 = _installText("≈", 1669375947);;
									_$parent21.children.push(_node17);
								}_$temp = _node16;{
									var _$parent22 = _$temp;_addText(it1.currencyUnitSymbol + " " + it1.amountShow, _$parent22);
								}_chFunc(_node16);_$parent20.children.push(_node16);
							}inputPlace0 = { "zh_Hans": "输入金额", "zh_Hant": "輸入金額", "en": "" };_$temp = _node15;{
								var _$parent23 = _$temp;var _node18 = { "attrs": {}, "tagName": "widget", "sid": 14 };_node18.hasChild = false;_node18.child = null;_node18.attrHash = 2903508735;_node18.attrs["w-tag"] = "app-components1-input-input";_node18.tagName = _node18.attrs["w-tag"];_$temp = _node18;{
									var _$parent24 = _$temp;var _node19 = {}; //jpair pre

									{
										var jvalue = "";
										jvalue = "number";
										//jpair suf

										_node19["itype"] = jvalue;
									}
									//jpair pre

									_node19["placeHolder"] = inputPlace0;
									//jpair suf
									//jpair pre

									{
										var _jvalue = "";
										_jvalue = "padding:0;font-size:36px;background:transparent;";
										//jpair suf

										_node19["style"] = _jvalue;
									}
									//jpair pre

									_node19["input"] = it1.amount;
									//jpair suf
									//jpair pre

									_node19["disabled"] = it1.inputDisabled;
									//jpair suf
									_addJson(_node19, _$parent24);
								}_chFunc(_node18);_$parent23.children.push(_node18);
							}_chFunc(_node15);_$parent19.children.push(_node15);
						}_chFunc(_node8);_$parent8.children.push(_node8);
					}_$temp = _node7;{
						var _$parent25 = _$temp;var _node20 = { "attrs": {}, "tagName": "div", "sid": 15 };_node20.children = [];_node20.attrSize = 2;_node20.attrHash = 3052096241;_node20.attrs["w-class"] = "item";_node20.attrs["style"] = "padding: 10px 0 0 20px;";_$temp = _node20;{
							var _$parent26 = _$temp;var _node21 = { "attrs": {}, "tagName": "div", "sid": 16 };_node21.children = [];_node21.attrSize = 1;_node21.attrHash = 948163967;_node21.attrs["w-class"] = "inner-tip";_$temp = _node21;{
								var _$parent27 = _$temp;var _node22 = { "attrs": {}, "tagName": "pi-ui-lang", "sid": 17 };_node22.hasChild = false;_node22.child = null;_node22.attrHash = 0;_$temp = _node22;{
									var _$parent28 = _$temp;_addJson(tags[2], _$parent28);
								}_chFunc(_node22);_$parent27.children.push(_node22);
							}_$temp = _node21;{
								var _$parent29 = _$temp;var _node23 = { "attrs": {}, "tagName": "img", "sid": 18 };_node23.children = [];_node23.childHash = 0;_node23.attrSize = 3;_node23.attrHash = 2315906221;_node23.attrs["src"] = "../../../res/image/scan.png";_node23.attrs["w-class"] = "scanImg";_node23.attrs["on-tap"] = "doScanClick";_$parent29.children.push(_node23);
							}_chFunc(_node21);_$parent26.children.push(_node21);
						}_$temp = _node20;{
							var _$parent30 = _$temp;var _node24 = { "attrs": {}, "tagName": "div", "sid": 19 };_node24.children = [];_node24.attrSize = 2;_node24.attrHash = 785081609;_node24.attrs["w-class"] = "input-father1";_node24.attrs["ev-input-change"] = "toAddrChange";_$temp = _node24;{
								var _$parent31 = _$temp;var _node25 = { "attrs": {}, "tagName": "app-components1-input-input", "sid": 20 };_node25.hasChild = false;_node25.child = null;_node25.attrHash = 0;_$temp = _node25;{
									var _$parent32 = _$temp;var _node26 = {}; //jpair pre

									_node26["placeHolder"] = inputPlace[1];
									//jpair suf
									//jpair pre

									{
										var _jvalue2 = "";
										_jvalue2 = "padding:0;font-size:28px;";
										//jpair suf

										_node26["style"] = _jvalue2;
									}
									//jpair pre

									_node26["input"] = it1.toAddr;
									//jpair suf
									//jpair pre

									_node26["disabled"] = it1.inputDisabled;
									//jpair suf
									_addJson(_node26, _$parent32);
								}_chFunc(_node25);_$parent31.children.push(_node25);
							}_chFunc(_node24);_$parent30.children.push(_node24);
						}_chFunc(_node20);_$parent25.children.push(_node20);
					}_$temp = _node7;{
						var _$parent33 = _$temp;var _node27 = { "attrs": {}, "tagName": "div", "sid": 21 };_node27.children = [];_node27.attrSize = 1;_node27.attrHash = 1045235690;_node27.attrs["w-class"] = "item";_$temp = _node27;{
							var _$parent34 = _$temp;var _node28 = { "attrs": {}, "tagName": "div", "sid": 22 };_node28.children = [];_node28.attrSize = 1;_node28.attrHash = 948163967;_node28.attrs["w-class"] = "inner-tip";_$temp = _node28;{
								var _$parent35 = _$temp;var _node29 = { "attrs": {}, "tagName": "pi-ui-lang", "sid": 23 };_node29.hasChild = false;_node29.child = null;_node29.attrHash = 0;_$temp = _node29;{
									var _$parent36 = _$temp;_addJson(tags[3], _$parent36);
								}_chFunc(_node29);_$parent35.children.push(_node29);
							}_chFunc(_node28);_$parent34.children.push(_node28);
						}_$temp = _node27;{
							var _$parent37 = _$temp;var _node30 = { "attrs": {}, "tagName": "div", "sid": 24 };_node30.children = [];_node30.attrSize = 1;_node30.attrHash = 689952449;_node30.attrs["w-class"] = "from-addr";_$temp = _node30;{
								var _$parent38 = _$temp;_addText(it1.fromAddr, _$parent38);
							}_chFunc(_node30);_$parent37.children.push(_node30);
						}_chFunc(_node27);_$parent33.children.push(_node27);
					}_$temp = _node7;{
						var _$parent39 = _$temp;var _node31 = { "attrs": {}, "tagName": "div", "sid": 25 };_node31.children = [];_node31.attrSize = 2;_node31.attrHash = 3726391969;_node31.attrs["w-class"] = "item";_node31.attrs["style"] = "border-bottom: none";_$temp = _node31;{
							var _$parent40 = _$temp;var _node32 = { "attrs": {}, "tagName": "div", "sid": 26 };_node32.children = [];_node32.attrSize = 2;_node32.attrHash = 3062273074;_node32.attrs["w-class"] = "inner-tip";_node32.attrs["on-tap"] = "chooseMinerFee";_$temp = _node32;{
								var _$parent41 = _$temp;var _node33 = { "attrs": {}, "tagName": "span", "sid": 27 };_node33.children = [];_node33.attrSize = 1;_node33.attrHash = 3711312999;_node33.attrs["style"] = "flex: 1";_$temp = _node33;{
									var _$parent42 = _$temp;var _node34 = { "attrs": {}, "tagName": "pi-ui-lang", "sid": 28 };_node34.hasChild = false;_node34.child = null;_node34.attrHash = 0;_$temp = _node34;{
										var _$parent43 = _$temp;_addJson(tags[4], _$parent43);
									}_chFunc(_node34);_$parent42.children.push(_node34);
								}_chFunc(_node33);_$parent41.children.push(_node33);
							}_$temp = _node32;{
								var _$parent44 = _$temp;var _node35 = { "attrs": {}, "tagName": "span", "sid": 29 };_node35.children = [];_node35.attrSize = 1;_node35.attrHash = 2475578990;_node35.attrs["w-class"] = "speed";if (typeof it1.minerFeeList[it1.curLevel].text === 'string') {
									_$temp = _node35;{
										var _$parent45 = _$temp;_addText(it1.minerFeeList[it1.curLevel].text, _$parent45);
									}
								} else {
									_$temp = _node35;{
										var _$parent46 = _$temp;var _node36 = { "attrs": {}, "tagName": "pi-ui-lang", "sid": 30 };_node36.hasChild = false;_node36.child = null;_node36.attrHash = 0;_$temp = _node36;{
											var _$parent47 = _$temp;_addJson(it1.minerFeeList[it1.curLevel].text, _$parent47);
										}_chFunc(_node36);_$parent46.children.push(_node36);
									}
								}_chFunc(_node35);_$parent44.children.push(_node35);
							}_$temp = _node32;{
								var _$parent48 = _$temp;var _node37 = { "attrs": {}, "tagName": "img", "sid": 31 };_node37.children = [];_node37.childHash = 0;_node37.attrSize = 2;_node37.attrHash = 1223492196;_node37.attrs["src"] = "app/res/image/down_arrow_gray.png";_node37.attrs["width"] = "32px";_$parent48.children.push(_node37);
							}_chFunc(_node32);_$parent40.children.push(_node32);
						}_chFunc(_node31);_$parent39.children.push(_node31);
					}_$temp = _node7;{
						var _$parent49 = _$temp;var _node38 = { "attrs": {}, "tagName": "div", "sid": 32 };_node38.children = [];_node38.attrSize = 1;_node38.attrHash = 376601371;_node38.attrs["w-class"] = "choose-fee";_$temp = _node38;{
							var _$parent50 = _$temp;var _node39 = { "attrs": {}, "tagName": "span", "sid": 33 };_node39.children = [];_node39.attrSize = 1;_node39.attrHash = 2748166437;_node39.attrs["on-tap"] = "speedDescClick";_$temp = _node39;{
								var _$parent51 = _$temp;var _node40 = { "attrs": {}, "tagName": "pi-ui-lang", "sid": 34 };_node40.hasChild = false;_node40.child = null;_node40.attrHash = 0;_$temp = _node40;{
									var _$parent52 = _$temp;_addJson(tags[5], _$parent52);
								}_chFunc(_node40);_$parent51.children.push(_node40);
							}_$temp = _node39;{
								var _$parent53 = _$temp;var _node41 = _installText("&nbsp;", 1553561131);;
								_$parent53.children.push(_node41);
							}_$temp = _node39;{
								var _$parent54 = _$temp;_addText(it1.minerFee, _$parent54);
							}_chFunc(_node39);_$parent50.children.push(_node39);
						}_$temp = _node38;{
							var _$parent55 = _$temp;var _node42 = { "attrs": {}, "tagName": "img", "sid": 35 };_node42.children = [];_node42.childHash = 0;_node42.attrSize = 3;_node42.attrHash = 801378532;_node42.attrs["src"] = "../../../res/image/41_gray.png";_node42.attrs["on-tap"] = "speedDescClick";_node42.attrs["w-class"] = "descImg";_$parent55.children.push(_node42);
						}_chFunc(_node38);_$parent49.children.push(_node38);
					}_chFunc(_node7);_$parent7.children.push(_node7);
				}btnName = { "zh_Hans": "下一步", "zh_Hant": "下一步", "en": "" };_$temp = _node6;{
					var _$parent56 = _$temp;var _node43 = { "attrs": {}, "tagName": "div", "sid": 36 };_node43.children = [];_node43.attrSize = 2;_node43.attrHash = 1573521945;_node43.attrs["ev-btn-tap"] = "nextClick";_node43.attrs["w-class"] = "btn";_$temp = _node43;{
						var _$parent57 = _$temp;var _node44 = { "attrs": {}, "tagName": "app-components1-btn-btn", "sid": 37 };_node44.hasChild = false;_node44.child = null;_node44.attrHash = 0;_$temp = _node44;{
							var _$parent58 = _$temp;var _node45 = {}; //jpair pre

							_node45["name"] = btnName;
							//jpair suf
							//jpair pre

							{
								var _jvalue3 = "";
								_jvalue3 = "big";
								//jpair suf

								_node45["types"] = _jvalue3;
							}
							//jpair pre

							{
								var _jvalue4 = "";
								_jvalue4 = "blue";
								//jpair suf

								_node45["color"] = _jvalue4;
							}
							_addJson(_node45, _$parent58);
						}_chFunc(_node44);_$parent57.children.push(_node44);
					}_chFunc(_node43);_$parent56.children.push(_node43);
				}_chFunc(_node6);_$parent6.children.push(_node6);
			}_chFunc(_node5);_$parent5.children.push(_node5);
		}_chFunc(_node);return _node;
	}
});