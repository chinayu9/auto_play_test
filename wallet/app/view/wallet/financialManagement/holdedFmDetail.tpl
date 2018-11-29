(function (_cfg, it, it1) {
	var _$temp = void 0,
	    node = void 0;_$temp = node;{
		var _$parent = _$temp;var _node = { "attrs": {}, "tagName": "div", "sid": 0 };_node.children = [];_node.attrSize = 3;_node.attrHash = 3437572703;_node.attrs["class"] = "new-page";_node.attrs["w-class"] = "new-page";_node.attrs["ev-back-click"] = "backPrePage";_$temp = _node;{
			var _$parent2 = _$temp;var _node2 = { "attrs": {}, "tagName": "div", "sid": 1 };_node2.children = [];_node2.attrSize = 3;_node2.attrHash = 1165043580;_node2.attrs["w-class"] = "body";_node2.attrs["on-scroll"] = "pageScroll";_node2.attrs["id"] = "body";_$temp = _node2;{
				var _$parent3 = _$temp;var _node3 = { "attrs": {}, "tagName": "div", "sid": 2 };_node3.children = [];_node3.attrSize = 1;_node3.attrHash = 3470977847;{
					var attrvalue = "";attrvalue += "head1 ";attrvalue += 'head1-' + it1.stateBg;attrvalue += "";_node3.attrs["w-class"] = attrvalue;
				}_node3.attrHash = _hash.nextHash(_node3.attrHash, _calTextHash(_node3.attrs["w-class"]));tags = [{ "zh_Hans": "昨日收益", "zh_Hant": "昨日收益", "en": "" }, { "zh_Hans": "年化收益", "zh_Hant": "年化收益", "en": "" }, { "zh_Hans": "累计收益", "zh_Hant": "累計收益", "en": "" }, { "zh_Hans": "持续(天)", "zh_Hant": "持續(天)", "en": "" }];details = [{ "zh_Hans": "交易时间：", "zh_Hant": "交易時間：", "en": "" }, { "zh_Hans": "购买单价：", "zh_Hant": "購買單價：", "en": "" }, { "zh_Hans": "产品名称：", "zh_Hant": "產品名稱：", "en": "" }, { "zh_Hans": "购买份数：", "zh_Hant": "購買份數：", "en": "" }, { "zh_Hans": "年化收益：", "zh_Hant": "年化收益：", "en": "" }, { "zh_Hans": "锁定期：", "zh_Hant": "鎖定期：", "en": "" }];_$temp = _node3;{
					var _$parent4 = _$temp;var _node4 = { "attrs": {}, "tagName": "div", "sid": 3 };_node4.children = [];_node4.attrSize = 1;_node4.attrHash = 2691711801;_node4.attrs["w-class"] = "head1-tag";_$temp = _node4;{
						var _$parent5 = _$temp;var _node5 = { "attrs": {}, "tagName": "pi-ui-lang", "sid": 4 };_node5.hasChild = false;_node5.child = null;_node5.attrHash = 0;_$temp = _node5;{
							var _$parent6 = _$temp;_addJson(tags[0], _$parent6);
						}_chFunc(_node5);_$parent5.children.push(_node5);
					}_$temp = _node4;{
						var _$parent7 = _$temp;var _node6 = _installText("(", 3447679526);;
						_$parent7.children.push(_node6);
					}_$temp = _node4;{
						var _$parent8 = _$temp;_addText(it.product.coinType, _$parent8);
					}_$temp = _node4;{
						var _$parent9 = _$temp;var _node7 = _installText(")", 2008579719);;
						_$parent9.children.push(_node7);
					}_chFunc(_node4);_$parent4.children.push(_node4);
				}_$temp = _node3;{
					var _$parent10 = _$temp;var _node8 = { "attrs": {}, "tagName": "div", "sid": 5 };_node8.children = [];_node8.attrSize = 1;_node8.attrHash = 105160949;_node8.attrs["w-class"] = "ye-earn";_$temp = _node8;{
						var _$parent11 = _$temp;_addText(it.product.yesterdayIncoming, _$parent11);
					}_chFunc(_node8);_$parent10.children.push(_node8);
				}_$temp = _node3;{
					var _$parent12 = _$temp;var _node9 = { "attrs": {}, "tagName": "div", "sid": 6 };_node9.children = [];_node9.attrSize = 1;_node9.attrHash = 1323770159;_node9.attrs["w-class"] = "status";_$temp = _node9;{
						var _$parent13 = _$temp;_addText(it1.stateShow, _$parent13);
					}_chFunc(_node9);_$parent12.children.push(_node9);
				}_$temp = _node3;{
					var _$parent14 = _$temp;var _node10 = { "attrs": {}, "tagName": "div", "sid": 7 };_node10.children = [];_node10.attrSize = 1;_node10.attrHash = 253915434;_node10.attrs["w-class"] = "head2";_$temp = _node10;{
						var _$parent15 = _$temp;var _node11 = { "attrs": {}, "tagName": "div", "sid": 8 };_node11.children = [];_node11.attrSize = 1;_node11.attrHash = 3828752007;_node11.attrs["w-class"] = "col1";_$temp = _node11;{
							var _$parent16 = _$temp;var _node12 = { "attrs": {}, "tagName": "div", "sid": 9 };_node12.children = [];_node12.attrSize = 1;_node12.attrHash = 854203028;_node12.attrs["w-class"] = "tag";_$temp = _node12;{
								var _$parent17 = _$temp;var _node13 = { "attrs": {}, "tagName": "pi-ui-lang", "sid": 10 };_node13.hasChild = false;_node13.child = null;_node13.attrHash = 0;_$temp = _node13;{
									var _$parent18 = _$temp;_addJson(tags[1], _$parent18);
								}_chFunc(_node13);_$parent17.children.push(_node13);
							}_chFunc(_node12);_$parent16.children.push(_node12);
						}_$temp = _node11;{
							var _$parent19 = _$temp;var _node14 = { "attrs": {}, "tagName": "div", "sid": 11 };_node14.children = [];_node14.attrSize = 1;_node14.attrHash = 487306359;_node14.attrs["w-class"] = "content";_$temp = _node14;{
								var _$parent20 = _$temp;_addText(it.product.profit, _$parent20);
							}_$temp = _node14;{
								var _$parent21 = _$temp;var _node15 = _installText("%", 4257547020);;
								_$parent21.children.push(_node15);
							}_chFunc(_node14);_$parent19.children.push(_node14);
						}_chFunc(_node11);_$parent15.children.push(_node11);
					}_$temp = _node10;{
						var _$parent22 = _$temp;var _node16 = { "attrs": {}, "tagName": "div", "sid": 12 };_node16.children = [];_node16.childHash = 2946814719;_node16.attrSize = 1;_node16.attrHash = 374818280;_node16.attrs["w-class"] = "line";_$parent22.children.push(_node16);
					}_$temp = _node10;{
						var _$parent23 = _$temp;var _node17 = { "attrs": {}, "tagName": "div", "sid": 13 };_node17.children = [];_node17.attrSize = 1;_node17.attrHash = 833589976;_node17.attrs["w-class"] = "col2";_$temp = _node17;{
							var _$parent24 = _$temp;var _node18 = { "attrs": {}, "tagName": "div", "sid": 14 };_node18.children = [];_node18.attrSize = 1;_node18.attrHash = 854203028;_node18.attrs["w-class"] = "tag";_$temp = _node18;{
								var _$parent25 = _$temp;var _node19 = { "attrs": {}, "tagName": "pi-ui-lang", "sid": 15 };_node19.hasChild = false;_node19.child = null;_node19.attrHash = 0;_$temp = _node19;{
									var _$parent26 = _$temp;_addJson(tags[2], _$parent26);
								}_chFunc(_node19);_$parent25.children.push(_node19);
							}_$temp = _node18;{
								var _$parent27 = _$temp;var _node20 = _installText("(", 3447679526);;
								_$parent27.children.push(_node20);
							}_$temp = _node18;{
								var _$parent28 = _$temp;_addText(it.product.coinType, _$parent28);
							}_$temp = _node18;{
								var _$parent29 = _$temp;var _node21 = _installText(")", 2008579719);;
								_$parent29.children.push(_node21);
							}_chFunc(_node18);_$parent24.children.push(_node18);
						}_$temp = _node17;{
							var _$parent30 = _$temp;var _node22 = { "attrs": {}, "tagName": "div", "sid": 16 };_node22.children = [];_node22.attrSize = 1;_node22.attrHash = 487306359;_node22.attrs["w-class"] = "content";_$temp = _node22;{
								var _$parent31 = _$temp;_addText(it.product.totalIncoming, _$parent31);
							}_chFunc(_node22);_$parent30.children.push(_node22);
						}_chFunc(_node17);_$parent23.children.push(_node17);
					}_$temp = _node10;{
						var _$parent32 = _$temp;var _node23 = { "attrs": {}, "tagName": "div", "sid": 17 };_node23.children = [];_node23.childHash = 2946814719;_node23.attrSize = 1;_node23.attrHash = 374818280;_node23.attrs["w-class"] = "line";_$parent32.children.push(_node23);
					}_$temp = _node10;{
						var _$parent33 = _$temp;var _node24 = { "attrs": {}, "tagName": "div", "sid": 18 };_node24.children = [];_node24.attrSize = 1;_node24.attrHash = 3828752007;_node24.attrs["w-class"] = "col1";_$temp = _node24;{
							var _$parent34 = _$temp;var _node25 = { "attrs": {}, "tagName": "div", "sid": 19 };_node25.children = [];_node25.attrSize = 1;_node25.attrHash = 854203028;_node25.attrs["w-class"] = "tag";_$temp = _node25;{
								var _$parent35 = _$temp;var _node26 = { "attrs": {}, "tagName": "pi-ui-lang", "sid": 20 };_node26.hasChild = false;_node26.child = null;_node26.attrHash = 0;_$temp = _node26;{
									var _$parent36 = _$temp;_addJson(tags[3], _$parent36);
								}_chFunc(_node26);_$parent35.children.push(_node26);
							}_chFunc(_node25);_$parent34.children.push(_node25);
						}_$temp = _node24;{
							var _$parent37 = _$temp;var _node27 = { "attrs": {}, "tagName": "div", "sid": 21 };_node27.children = [];_node27.attrSize = 1;_node27.attrHash = 487306359;_node27.attrs["w-class"] = "content";_$temp = _node27;{
								var _$parent38 = _$temp;_addText(it.product.days, _$parent38);
							}_chFunc(_node27);_$parent37.children.push(_node27);
						}_chFunc(_node24);_$parent33.children.push(_node24);
					}_chFunc(_node10);_$parent14.children.push(_node10);
				}_chFunc(_node3);_$parent3.children.push(_node3);
			}_$temp = _node2;{
				var _$parent39 = _$temp;var _node28 = { "attrs": {}, "tagName": "div", "sid": 22 };_node28.children = [];_node28.attrSize = 1;_node28.attrHash = 4064917415;_node28.attrs["w-class"] = "bottom-box";_$temp = _node28;{
					var _$parent40 = _$temp;var _node29 = { "attrs": {}, "tagName": "div", "sid": 23 };_node29.children = [];_node29.attrSize = 1;_node29.attrHash = 2907488342;_node29.attrs["w-class"] = "row5";_$temp = _node29;{
						var _$parent41 = _$temp;_addText(it.product.productIntroduction, _$parent41);
					}_chFunc(_node29);_$parent40.children.push(_node29);
				}_$temp = _node28;{
					var _$parent42 = _$temp;var _node30 = { "attrs": {}, "tagName": "div", "sid": 24 };_node30.children = [];_node30.childHash = 2261057071;_node30.attrSize = 1;_node30.attrHash = 1019047777;_node30.attrs["w-class"] = "title";_$temp = _node30;{
						var _$parent43 = _$temp;var _node31 = { "attrs": {}, "tagName": "pi-ui-lang", "sid": 25 };_node31.hasChild = false;_node31.child = null;_node31.childHash = 2557923035;_node31.attrHash = 0;_$temp = _node31;{
							var _$parent44 = _$temp;var _node32 = {}; //jpair pre

							{
								var jvalue = "";
								jvalue = "其他信息";
								//jpair suf

								_node32["zh_Hans"] = jvalue;
							}
							//jpair pre

							{
								var _jvalue = "";
								_jvalue = "其他信息";
								//jpair suf

								_node32["zh_Hant"] = _jvalue;
							}
							//jpair pre

							{
								var _jvalue2 = "";
								_jvalue2 = "";
								//jpair suf

								_node32["en"] = _jvalue2;
							}
							_addJson(_node32, _$parent44);
						}_$parent43.children.push(_node31);
					}_$parent42.children.push(_node30);
				}_$temp = _node28;{
					var _$parent45 = _$temp;var _node33 = { "attrs": {}, "tagName": "div", "sid": 26 };_node33.children = [];_node33.attrSize = 1;_node33.attrHash = 1210607516;_node33.attrs["w-class"] = "detail-box";_$temp = _node33;{
						var _$parent46 = _$temp;var _node34 = { "attrs": {}, "tagName": "div", "sid": 27 };_node34.children = [];_node34.attrSize = 1;_node34.attrHash = 3820340678;_node34.attrs["w-class"] = "detail";_$temp = _node34;{
							var _$parent47 = _$temp;var _node35 = { "attrs": {}, "tagName": "pi-ui-lang", "sid": 28 };_node35.hasChild = false;_node35.child = null;_node35.attrHash = 0;_$temp = _node35;{
								var _$parent48 = _$temp;_addJson(details[0], _$parent48);
							}_chFunc(_node35);_$parent47.children.push(_node35);
						}_$temp = _node34;{
							var _$parent49 = _$temp;_addText(it.product.purchaseDate, _$parent49);
						}_chFunc(_node34);_$parent46.children.push(_node34);
					}_$temp = _node33;{
						var _$parent50 = _$temp;var _node36 = { "attrs": {}, "tagName": "div", "sid": 29 };_node36.children = [];_node36.attrSize = 1;_node36.attrHash = 3820340678;_node36.attrs["w-class"] = "detail";_$temp = _node36;{
							var _$parent51 = _$temp;var _node37 = { "attrs": {}, "tagName": "pi-ui-lang", "sid": 30 };_node37.hasChild = false;_node37.child = null;_node37.attrHash = 0;_$temp = _node37;{
								var _$parent52 = _$temp;_addJson(details[1], _$parent52);
							}_chFunc(_node37);_$parent51.children.push(_node37);
						}_$temp = _node36;{
							var _$parent53 = _$temp;_addText(it.product.unitPrice, _$parent53);
						}_$temp = _node36;{
							var _$parent54 = _$temp;_addText(it.product.coinType, _$parent54);
						}_chFunc(_node36);_$parent50.children.push(_node36);
					}_$temp = _node33;{
						var _$parent55 = _$temp;var _node38 = { "attrs": {}, "tagName": "div", "sid": 31 };_node38.children = [];_node38.attrSize = 1;_node38.attrHash = 3820340678;_node38.attrs["w-class"] = "detail";_$temp = _node38;{
							var _$parent56 = _$temp;var _node39 = { "attrs": {}, "tagName": "pi-ui-lang", "sid": 32 };_node39.hasChild = false;_node39.child = null;_node39.attrHash = 0;_$temp = _node39;{
								var _$parent57 = _$temp;_addJson(details[2], _$parent57);
							}_chFunc(_node39);_$parent56.children.push(_node39);
						}_$temp = _node38;{
							var _$parent58 = _$temp;_addText(it.product.productName, _$parent58);
						}_chFunc(_node38);_$parent55.children.push(_node38);
					}_$temp = _node33;{
						var _$parent59 = _$temp;var _node40 = { "attrs": {}, "tagName": "div", "sid": 33 };_node40.children = [];_node40.attrSize = 1;_node40.attrHash = 3820340678;_node40.attrs["w-class"] = "detail";_$temp = _node40;{
							var _$parent60 = _$temp;var _node41 = { "attrs": {}, "tagName": "pi-ui-lang", "sid": 34 };_node41.hasChild = false;_node41.child = null;_node41.attrHash = 0;_$temp = _node41;{
								var _$parent61 = _$temp;_addJson(details[3], _$parent61);
							}_chFunc(_node41);_$parent60.children.push(_node41);
						}_$temp = _node40;{
							var _$parent62 = _$temp;_addText(it.product.amount, _$parent62);
						}_$temp = _node40;{
							var _$parent63 = _$temp;var _node42 = { "attrs": {}, "tagName": "pi-ui-lang", "sid": 35 };_node42.hasChild = false;_node42.child = null;_node42.childHash = 3332005577;_node42.attrHash = 0;_$temp = _node42;{
								var _$parent64 = _$temp;var _node43 = {}; //jpair pre

								{
									var _jvalue3 = "";
									_jvalue3 = "份";
									//jpair suf

									_node43["zh_Hans"] = _jvalue3;
								}
								//jpair pre

								{
									var _jvalue4 = "";
									_jvalue4 = "份";
									//jpair suf

									_node43["zh_Hant"] = _jvalue4;
								}
								//jpair pre

								{
									var _jvalue5 = "";
									_jvalue5 = "";
									//jpair suf

									_node43["en"] = _jvalue5;
								}
								_addJson(_node43, _$parent64);
							}_$parent63.children.push(_node42);
						}_chFunc(_node40);_$parent59.children.push(_node40);
					}_$temp = _node33;{
						var _$parent65 = _$temp;var _node44 = { "attrs": {}, "tagName": "div", "sid": 36 };_node44.children = [];_node44.attrSize = 1;_node44.attrHash = 3820340678;_node44.attrs["w-class"] = "detail";_$temp = _node44;{
							var _$parent66 = _$temp;var _node45 = { "attrs": {}, "tagName": "pi-ui-lang", "sid": 37 };_node45.hasChild = false;_node45.child = null;_node45.attrHash = 0;_$temp = _node45;{
								var _$parent67 = _$temp;_addJson(details[4], _$parent67);
							}_chFunc(_node45);_$parent66.children.push(_node45);
						}_$temp = _node44;{
							var _$parent68 = _$temp;_addText(it.product.profit, _$parent68);
						}_$temp = _node44;{
							var _$parent69 = _$temp;var _node46 = _installText("%", 4257547020);;
							_$parent69.children.push(_node46);
						}_chFunc(_node44);_$parent65.children.push(_node44);
					}_$temp = _node33;{
						var _$parent70 = _$temp;var _node47 = { "attrs": {}, "tagName": "div", "sid": 38 };_node47.children = [];_node47.attrSize = 1;_node47.attrHash = 3820340678;_node47.attrs["w-class"] = "detail";_$temp = _node47;{
							var _$parent71 = _$temp;var _node48 = { "attrs": {}, "tagName": "pi-ui-lang", "sid": 39 };_node48.hasChild = false;_node48.child = null;_node48.attrHash = 0;_$temp = _node48;{
								var _$parent72 = _$temp;_addJson(details[5], _$parent72);
							}_chFunc(_node48);_$parent71.children.push(_node48);
						}_$temp = _node47;{
							var _$parent73 = _$temp;_addText(it.product.lockday, _$parent73);
						}_chFunc(_node47);_$parent70.children.push(_node47);
					}_chFunc(_node33);_$parent45.children.push(_node33);
				}_$temp = _node28;{
					var _$parent74 = _$temp;var _node49 = { "attrs": {}, "tagName": "div", "sid": 40 };_node49.children = [];_node49.childHash = 3107666077;_node49.attrSize = 2;_node49.attrHash = 1310889798;_node49.attrs["w-class"] = "read";_node49.attrs["on-tap"] = "readAgree";_$temp = _node49;{
						var _$parent75 = _$temp;var _node50 = { "attrs": {}, "tagName": "pi-ui-lang", "sid": 41 };_node50.hasChild = false;_node50.child = null;_node50.childHash = 745052016;_node50.attrHash = 0;_$temp = _node50;{
							var _$parent76 = _$temp;var _node51 = {}; //jpair pre

							{
								var _jvalue6 = "";
								_jvalue6 = "阅读声明";
								//jpair suf

								_node51["zh_Hans"] = _jvalue6;
							}
							//jpair pre

							{
								var _jvalue7 = "";
								_jvalue7 = "閱讀聲明";
								//jpair suf

								_node51["zh_Hant"] = _jvalue7;
							}
							//jpair pre

							{
								var _jvalue8 = "";
								_jvalue8 = "";
								//jpair suf

								_node51["en"] = _jvalue8;
							}
							_addJson(_node51, _$parent76);
						}_$parent75.children.push(_node50);
					}_$parent74.children.push(_node49);
				}_$temp = _node28;{
					var _$parent77 = _$temp;var _node52 = { "attrs": {}, "tagName": "div", "sid": 42 };_node52.children = [];_node52.attrSize = 2;_node52.attrHash = 3101311255;_node52.attrs["ev-btn-tap"] = "redemptionClick";_node52.attrs["w-class"] = "btn";btnName = { "zh_Hans": it1.btnText, "zh_Hant": it1.btnText, "en": "" };_$temp = _node52;{
						var _$parent78 = _$temp;var _node53 = { "attrs": {}, "tagName": "app-components1-btn-btn", "sid": 43 };_node53.hasChild = false;_node53.child = null;_node53.attrHash = 0;_$temp = _node53;{
							var _$parent79 = _$temp;var _node54 = {}; //jpair pre

							_node54["name"] = btnName;
							//jpair suf
							//jpair pre

							{
								var _jvalue9 = "";
								_jvalue9 = "big";
								//jpair suf

								_node54["types"] = _jvalue9;
							}
							//jpair pre

							_node54["color"] = it1.btnBgColor;
							//jpair suf
							_addJson(_node54, _$parent79);
						}_chFunc(_node53);_$parent78.children.push(_node53);
					}_chFunc(_node52);_$parent77.children.push(_node52);
				}_chFunc(_node28);_$parent39.children.push(_node28);
			}_chFunc(_node2);_$parent2.children.push(_node2);
		}topBarTitle = { "zh_Hans": it.product.productName, "zh_Hant": it.product.productName, "en": "" };_$temp = _node;{
			var _$parent80 = _$temp;var _node55 = { "attrs": {}, "tagName": "app-components1-topBar-topBar2", "sid": 44 };_node55.hasChild = false;_node55.child = null;_node55.attrHash = 0;_$temp = _node55;{
				var _$parent81 = _$temp;var _node56 = {}; //jpair pre

				_node56["scrollHeight"] = it1.scrollHeight;
				//jpair suf
				//jpair pre

				_node56["text"] = topBarTitle;
				//jpair suf
				_addJson(_node56, _$parent81);
			}_chFunc(_node55);_$parent80.children.push(_node55);
		}_chFunc(_node);return _node;
	}
});