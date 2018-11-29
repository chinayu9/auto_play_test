(function (_cfg, it, it1) {
	var _$temp = void 0,
	    node = void 0;_$temp = node;{
		var _$parent = _$temp;var _node = { "attrs": {}, "tagName": "div", "sid": 0 };_node.children = [];_node.attrSize = 4;_node.attrHash = 1551104450;_node.attrs["class"] = "new-page";_node.attrs["w-class"] = "new-page";_node.attrs["ev-back-click"] = "backPrePage";_node.attrs["ev-next-click"] = "shareScreen";_$temp = _node;{
			var _$parent2 = _$temp;var _node2 = { "attrs": {}, "tagName": "div", "sid": 1 };_node2.children = [];_node2.attrSize = 1;_node2.attrHash = 3673846548;_node2.attrs["w-class"] = "top-head";if (it1.tx.txType === 1) {
				topBarTitle = { "zh_Hans": "转账", "zh_Hant": "轉賬", "en": "" };
			} else {
				topBarTitle = { "zh_Hans": "收款", "zh_Hant": "收款", "en": "" };
			}_$temp = _node2;{
				var _$parent3 = _$temp;var _node3 = { "attrs": {}, "tagName": "widget", "sid": 2 };_node3.hasChild = false;_node3.child = null;_node3.attrHash = 1483449382;_node3.attrs["w-tag"] = "app-components1-topBar-topBar";_node3.tagName = _node3.attrs["w-tag"];_$temp = _node3;{
					var _$parent4 = _$temp;var _node4 = {}; //jpair pre

					_node4["title"] = topBarTitle;
					//jpair suf
					//jpair pre

					{
						var jvalue = "";
						jvalue = "linear-gradient(to right,#38CFE7,#318DE6);position: fixed;";
						//jpair suf

						_node4["background"] = jvalue;
					}
					//jpair pre

					{
						var _jvalue = "";
						_jvalue = "../../res/image/share_white.png";
						//jpair suf

						_node4["nextImg"] = _jvalue;
					}
					_addJson(_node4, _$parent4);
				}_chFunc(_node3);_$parent3.children.push(_node3);
			}_chFunc(_node2);_$parent2.children.push(_node2);
		}_$temp = _node;{
			var _$parent5 = _$temp;var _node5 = { "attrs": {}, "tagName": "div", "sid": 3 };_node5.children = [];_node5.attrSize = 1;_node5.attrHash = 4252679546;_node5.attrs["w-class"] = "body";_$temp = _node5;{
				var _$parent6 = _$temp;var _node6 = { "attrs": {}, "tagName": "div", "sid": 4 };_node6.children = [];_node6.attrSize = 1;_node6.attrHash = 4140979430;_node6.attrs["w-class"] = "status-container";_$temp = _node6;{
					var _$parent7 = _$temp;var _node7 = { "attrs": {}, "tagName": "img", "sid": 5 };_node7.children = [];_node7.attrSize = 2;_node7.attrHash = 4279687797;{
						var attrvalue = "";attrvalue += "../../../res/image/";attrvalue += it1.statusIcon;attrvalue += "";_node7.attrs["src"] = attrvalue;
					}_node7.attrHash = _hash.nextHash(_node7.attrHash, _calTextHash(_node7.attrs["src"]));_node7.attrs["w-class"] = "status-icon";_chFunc(_node7);_$parent7.children.push(_node7);
				}_$temp = _node6;{
					var _$parent8 = _$temp;var _node8 = { "attrs": {}, "tagName": "div", "sid": 6 };_node8.children = [];_node8.attrSize = 1;_node8.attrHash = 1323770159;_node8.attrs["w-class"] = "status";_$temp = _node8;{
						var _$parent9 = _$temp;_addText(it1.statusShow, _$parent9);
					}_chFunc(_node8);_$parent8.children.push(_node8);
				}if (it1.canResend && it1.tx.txType === 1) {
					_$temp = _node6;{
						var _$parent10 = _$temp;var _node9 = { "attrs": {}, "tagName": "div", "sid": 7 };_node9.children = [];_node9.childHash = 1483286292;_node9.attrSize = 2;_node9.attrHash = 2274187005;_node9.attrs["w-class"] = "resend-btn";_node9.attrs["on-tap"] = "resendClick";_$temp = _node9;{
							var _$parent11 = _$temp;var _node10 = { "attrs": {}, "tagName": "pi-ui-lang", "sid": 8 };_node10.hasChild = false;_node10.child = null;_node10.childHash = 1444964649;_node10.attrHash = 0;_$temp = _node10;{
								var _$parent12 = _$temp;var _node11 = {}; //jpair pre

								{
									var _jvalue2 = "";
									_jvalue2 = "重新发送";
									//jpair suf

									_node11["zh_Hans"] = _jvalue2;
								}
								//jpair pre

								{
									var _jvalue3 = "";
									_jvalue3 = "重新發送";
									//jpair suf

									_node11["zh_Hant"] = _jvalue3;
								}
								//jpair pre

								{
									var _jvalue4 = "";
									_jvalue4 = "";
									//jpair suf

									_node11["en"] = _jvalue4;
								}
								_addJson(_node11, _$parent12);
							}_$parent11.children.push(_node10);
						}_$parent10.children.push(_node9);
					}
				}_chFunc(_node6);_$parent6.children.push(_node6);
			}_$temp = _node5;{
				var _$parent13 = _$temp;var _node12 = { "attrs": {}, "tagName": "div", "sid": 9 };_node12.children = [];_node12.attrSize = 1;_node12.attrHash = 3411736184;_node12.attrs["w-class"] = "detail-top";tags = [{ "zh_Hans": "收币地址", "zh_Hant": "收幣地址", "en": "" }, { "zh_Hans": "矿工费", "zh_Hant": "礦工費", "en": "" }, { "zh_Hans": "备注", "zh_Hant": "備註", "en": "" }, { "zh_Hans": "交易时间", "zh_Hant": "交易時間", "en": "" }, { "zh_Hans": "交易号", "zh_Hant": "交易號", "en": "" }, { "zh_Hans": "发币地址", "zh_Hant": "發幣地址", "en": "" }];_$temp = _node12;{
					var _$parent14 = _$temp;var _node13 = { "attrs": {}, "tagName": "div", "sid": 10 };_node13.children = [];_node13.attrSize = 1;_node13.attrHash = 1141695757;_node13.attrs["w-class"] = "amount";_$temp = _node13;{
						var _$parent15 = _$temp;_addText(it1.tx.txType === 1 ? '-' : '+', _$parent15);
					}_$temp = _node13;{
						var _$parent16 = _$temp;_addText(it1.tx.pay, _$parent16);
					}_$temp = _node13;{
						var _$parent17 = _$temp;var _node14 = _installText("&nbsp;", 1553561131);;
						_$parent17.children.push(_node14);
					}_$temp = _node13;{
						var _$parent18 = _$temp;_addText(it1.tx.currencyName, _$parent18);
					}_chFunc(_node13);_$parent14.children.push(_node13);
				}_$temp = _node12;{
					var _$parent19 = _$temp;var _node15 = { "attrs": {}, "tagName": "div", "sid": 11 };_node15.children = [];_node15.attrSize = 2;_node15.attrHash = 2816243461;_node15.attrs["w-class"] = "item";_node15.attrs["on-tap"] = "copyToAddr";_$temp = _node15;{
						var _$parent20 = _$temp;var _node16 = { "attrs": {}, "tagName": "div", "sid": 12 };_node16.children = [];_node16.attrSize = 1;_node16.attrHash = 854203028;_node16.attrs["w-class"] = "tag";_$temp = _node16;{
							var _$parent21 = _$temp;var _node17 = { "attrs": {}, "tagName": "pi-ui-lang", "sid": 13 };_node17.hasChild = false;_node17.child = null;_node17.attrHash = 0;_$temp = _node17;{
								var _$parent22 = _$temp;_addJson(tags[0], _$parent22);
							}_chFunc(_node17);_$parent21.children.push(_node17);
						}_chFunc(_node16);_$parent20.children.push(_node16);
					}_$temp = _node15;{
						var _$parent23 = _$temp;var _node18 = { "attrs": {}, "tagName": "div", "sid": 14 };_node18.children = [];_node18.attrSize = 1;_node18.attrHash = 487306359;_node18.attrs["w-class"] = "content";_$temp = _node18;{
							var _$parent24 = _$temp;var _node19 = { "attrs": {}, "tagName": "span", "sid": 15 };_node19.children = [];_node19.attrHash = 0;_$temp = _node19;{
								var _$parent25 = _$temp;_addText(it1.tx.toAddr, _$parent25);
							}_chFunc(_node19);_$parent24.children.push(_node19);
						}_$temp = _node18;{
							var _$parent26 = _$temp;var _node20 = { "attrs": {}, "tagName": "img", "sid": 16 };_node20.children = [];_node20.childHash = 0;_node20.attrSize = 3;_node20.attrHash = 24242157;_node20.attrs["src"] = "app/res/image/copy_gray.png";_node20.attrs["width"] = "30px";_node20.attrs["w-class"] = "copy";_$parent26.children.push(_node20);
						}_chFunc(_node18);_$parent23.children.push(_node18);
					}_chFunc(_node15);_$parent19.children.push(_node15);
				}_$temp = _node12;{
					var _$parent27 = _$temp;var _node21 = { "attrs": {}, "tagName": "div", "sid": 17 };_node21.children = [];_node21.attrSize = 1;_node21.attrHash = 1045235690;_node21.attrs["w-class"] = "item";_$temp = _node21;{
						var _$parent28 = _$temp;var _node22 = { "attrs": {}, "tagName": "div", "sid": 18 };_node22.children = [];_node22.attrSize = 1;_node22.attrHash = 854203028;_node22.attrs["w-class"] = "tag";_$temp = _node22;{
							var _$parent29 = _$temp;var _node23 = { "attrs": {}, "tagName": "pi-ui-lang", "sid": 19 };_node23.hasChild = false;_node23.child = null;_node23.attrHash = 0;_$temp = _node23;{
								var _$parent30 = _$temp;_addJson(tags[1], _$parent30);
							}_chFunc(_node23);_$parent29.children.push(_node23);
						}_chFunc(_node22);_$parent28.children.push(_node22);
					}_$temp = _node21;{
						var _$parent31 = _$temp;var _node24 = { "attrs": {}, "tagName": "div", "sid": 20 };_node24.children = [];_node24.attrSize = 1;_node24.attrHash = 487306359;_node24.attrs["w-class"] = "content";_$temp = _node24;{
							var _$parent32 = _$temp;var _node25 = { "attrs": {}, "tagName": "span", "sid": 21 };_node25.children = [];_node25.attrHash = 0;_$temp = _node25;{
								var _$parent33 = _$temp;_addText(it1.tx.fee, _$parent33);
							}_$temp = _node25;{
								var _$parent34 = _$temp;var _node26 = _installText("&nbsp;", 1553561131);;
								_$parent34.children.push(_node26);
							}_$temp = _node25;{
								var _$parent35 = _$temp;_addText(it1.minerFeeUnit, _$parent35);
							}_chFunc(_node25);_$parent32.children.push(_node25);
						}_chFunc(_node24);_$parent31.children.push(_node24);
					}_chFunc(_node21);_$parent27.children.push(_node21);
				}_$temp = _node12;{
					var _$parent36 = _$temp;var _node27 = { "attrs": {}, "tagName": "div", "sid": 22 };_node27.children = [];_node27.attrSize = 1;_node27.attrHash = 1045235690;_node27.attrs["w-class"] = "item";_$temp = _node27;{
						var _$parent37 = _$temp;var _node28 = { "attrs": {}, "tagName": "div", "sid": 23 };_node28.children = [];_node28.attrSize = 1;_node28.attrHash = 854203028;_node28.attrs["w-class"] = "tag";_$temp = _node28;{
							var _$parent38 = _$temp;var _node29 = { "attrs": {}, "tagName": "pi-ui-lang", "sid": 24 };_node29.hasChild = false;_node29.child = null;_node29.attrHash = 0;_$temp = _node29;{
								var _$parent39 = _$temp;_addJson(tags[2], _$parent39);
							}_chFunc(_node29);_$parent38.children.push(_node29);
						}_chFunc(_node28);_$parent37.children.push(_node28);
					}_$temp = _node27;{
						var _$parent40 = _$temp;var _node30 = { "attrs": {}, "tagName": "div", "sid": 25 };_node30.children = [];_node30.attrSize = 1;_node30.attrHash = 487306359;_node30.attrs["w-class"] = "content";_$temp = _node30;{
							var _$parent41 = _$temp;var _node31 = { "attrs": {}, "tagName": "span", "sid": 26 };_node31.children = [];_node31.attrHash = 0;_$temp = _node31;{
								var _$parent42 = _$temp;_addText(it1.tx.info ? it1.tx.info : "无", _$parent42);
							}_chFunc(_node31);_$parent41.children.push(_node31);
						}_chFunc(_node30);_$parent40.children.push(_node30);
					}_chFunc(_node27);_$parent36.children.push(_node27);
				}_chFunc(_node12);_$parent13.children.push(_node12);
			}_$temp = _node5;{
				var _$parent43 = _$temp;var _node32 = { "attrs": {}, "tagName": "div", "sid": 27 };_node32.children = [];_node32.attrSize = 1;_node32.attrHash = 1494653708;_node32.attrs["w-class"] = "detail-bottom";_$temp = _node32;{
					var _$parent44 = _$temp;var _node33 = { "attrs": {}, "tagName": "div", "sid": 28 };_node33.children = [];_node33.attrSize = 2;_node33.attrHash = 3524279711;_node33.attrs["w-class"] = "item";_node33.attrs["style"] = "margin:0;";_$temp = _node33;{
						var _$parent45 = _$temp;var _node34 = { "attrs": {}, "tagName": "div", "sid": 29 };_node34.children = [];_node34.attrSize = 1;_node34.attrHash = 854203028;_node34.attrs["w-class"] = "tag";_$temp = _node34;{
							var _$parent46 = _$temp;var _node35 = { "attrs": {}, "tagName": "pi-ui-lang", "sid": 30 };_node35.hasChild = false;_node35.child = null;_node35.attrHash = 0;_$temp = _node35;{
								var _$parent47 = _$temp;_addJson(tags[3], _$parent47);
							}_chFunc(_node35);_$parent46.children.push(_node35);
						}_chFunc(_node34);_$parent45.children.push(_node34);
					}_$temp = _node33;{
						var _$parent48 = _$temp;var _node36 = { "attrs": {}, "tagName": "div", "sid": 31 };_node36.children = [];_node36.attrSize = 1;_node36.attrHash = 487306359;_node36.attrs["w-class"] = "content";_$temp = _node36;{
							var _$parent49 = _$temp;var _node37 = { "attrs": {}, "tagName": "span", "sid": 32 };_node37.children = [];_node37.attrHash = 0;_$temp = _node37;{
								var _$parent50 = _$temp;_addText(it1.timeShow, _$parent50);
							}_chFunc(_node37);_$parent49.children.push(_node37);
						}_chFunc(_node36);_$parent48.children.push(_node36);
					}_chFunc(_node33);_$parent44.children.push(_node33);
				}_$temp = _node32;{
					var _$parent51 = _$temp;var _node38 = { "attrs": {}, "tagName": "div", "sid": 33 };_node38.children = [];_node38.attrSize = 2;_node38.attrHash = 2081134398;_node38.attrs["w-class"] = "item";_node38.attrs["on-tap"] = "copyHash";_$temp = _node38;{
						var _$parent52 = _$temp;var _node39 = { "attrs": {}, "tagName": "div", "sid": 34 };_node39.children = [];_node39.attrSize = 1;_node39.attrHash = 854203028;_node39.attrs["w-class"] = "tag";_$temp = _node39;{
							var _$parent53 = _$temp;var _node40 = { "attrs": {}, "tagName": "pi-ui-lang", "sid": 35 };_node40.hasChild = false;_node40.child = null;_node40.attrHash = 0;_$temp = _node40;{
								var _$parent54 = _$temp;_addJson(tags[4], _$parent54);
							}_chFunc(_node40);_$parent53.children.push(_node40);
						}_chFunc(_node39);_$parent52.children.push(_node39);
					}_$temp = _node38;{
						var _$parent55 = _$temp;var _node41 = { "attrs": {}, "tagName": "div", "sid": 36 };_node41.children = [];_node41.attrSize = 1;_node41.attrHash = 487306359;_node41.attrs["w-class"] = "content";_$temp = _node41;{
							var _$parent56 = _$temp;var _node42 = { "attrs": {}, "tagName": "span", "sid": 37 };_node42.children = [];_node42.attrHash = 0;_$temp = _node42;{
								var _$parent57 = _$temp;_addText(it1.hashShow, _$parent57);
							}_chFunc(_node42);_$parent56.children.push(_node42);
						}_$temp = _node41;{
							var _$parent58 = _$temp;var _node43 = { "attrs": {}, "tagName": "img", "sid": 38 };_node43.children = [];_node43.childHash = 0;_node43.attrSize = 3;_node43.attrHash = 24242157;_node43.attrs["src"] = "app/res/image/copy_gray.png";_node43.attrs["width"] = "30px";_node43.attrs["w-class"] = "copy";_$parent58.children.push(_node43);
						}_chFunc(_node41);_$parent55.children.push(_node41);
					}_chFunc(_node38);_$parent51.children.push(_node38);
				}_$temp = _node32;{
					var _$parent59 = _$temp;var _node44 = { "attrs": {}, "tagName": "div", "sid": 39 };_node44.children = [];_node44.attrSize = 2;_node44.attrHash = 438753227;_node44.attrs["w-class"] = "item";_node44.attrs["on-tap"] = "copyFromAddr";_$temp = _node44;{
						var _$parent60 = _$temp;var _node45 = { "attrs": {}, "tagName": "div", "sid": 40 };_node45.children = [];_node45.attrSize = 1;_node45.attrHash = 854203028;_node45.attrs["w-class"] = "tag";_$temp = _node45;{
							var _$parent61 = _$temp;var _node46 = { "attrs": {}, "tagName": "pi-ui-lang", "sid": 41 };_node46.hasChild = false;_node46.child = null;_node46.attrHash = 0;_$temp = _node46;{
								var _$parent62 = _$temp;_addJson(tags[5], _$parent62);
							}_chFunc(_node46);_$parent61.children.push(_node46);
						}_chFunc(_node45);_$parent60.children.push(_node45);
					}_$temp = _node44;{
						var _$parent63 = _$temp;var _node47 = { "attrs": {}, "tagName": "div", "sid": 42 };_node47.children = [];_node47.attrSize = 1;_node47.attrHash = 487306359;_node47.attrs["w-class"] = "content";_$temp = _node47;{
							var _$parent64 = _$temp;var _node48 = { "attrs": {}, "tagName": "span", "sid": 43 };_node48.children = [];_node48.attrHash = 0;_$temp = _node48;{
								var _$parent65 = _$temp;_addText(it1.tx.fromAddr, _$parent65);
							}_chFunc(_node48);_$parent64.children.push(_node48);
						}_$temp = _node47;{
							var _$parent66 = _$temp;var _node49 = { "attrs": {}, "tagName": "img", "sid": 44 };_node49.children = [];_node49.childHash = 0;_node49.attrSize = 3;_node49.attrHash = 24242157;_node49.attrs["src"] = "app/res/image/copy_gray.png";_node49.attrs["width"] = "30px";_node49.attrs["w-class"] = "copy";_$parent66.children.push(_node49);
						}_chFunc(_node47);_$parent63.children.push(_node47);
					}_chFunc(_node44);_$parent59.children.push(_node44);
				}_$temp = _node32;{
					var _$parent67 = _$temp;var _node50 = { "attrs": {}, "tagName": "div", "sid": 45 };_node50.children = [];_node50.attrSize = 2;_node50.attrHash = 424538803;_node50.attrs["w-class"] = "qrcode-container";_node50.attrs["on-tap"] = "openNewWeb";_$temp = _node50;{
						var _$parent68 = _$temp;var _node51 = { "attrs": {}, "tagName": "app-components-qrcode-qrcode", "sid": 46 };_node51.hasChild = false;_node51.child = null;_node51.attrHash = 0;_$temp = _node51;{
							var _$parent69 = _$temp;var _node52 = {}; //jpair pre

							_node52["value"] = it1.qrcode;
							//jpair suf
							//jpair pre

							_node52["size"] = 200;
							//jpair suf
							_addJson(_node52, _$parent69);
						}_chFunc(_node51);_$parent68.children.push(_node51);
					}_$temp = _node50;{
						var _$parent70 = _$temp;var _node53 = { "attrs": {}, "tagName": "div", "sid": 47 };_node53.children = [];_node53.attrSize = 1;_node53.attrHash = 676603936;_node53.attrs["w-class"] = "copy-ethersacn";_$temp = _node53;{
							var _$parent71 = _$temp;_addText(it1.webText, _$parent71);
						}_chFunc(_node53);_$parent70.children.push(_node53);
					}_chFunc(_node50);_$parent67.children.push(_node50);
				}_chFunc(_node32);_$parent43.children.push(_node32);
			}_chFunc(_node5);_$parent5.children.push(_node5);
		}_chFunc(_node);return _node;
	}
});