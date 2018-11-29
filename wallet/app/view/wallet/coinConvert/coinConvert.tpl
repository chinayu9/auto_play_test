(function (_cfg, it, it1) {
	var _$temp = void 0,
	    node = void 0;_$temp = node;{
		var _$parent = _$temp;var _node = { "attrs": {}, "tagName": "div", "sid": 0 };_node.children = [];_node.attrSize = 4;_node.attrHash = 1401937976;_node.attrs["class"] = "new-page";_node.attrs["w-class"] = "new-page";_node.attrs["ev-back-click"] = "backPrePage";_node.attrs["ev-next-click"] = "goHistory";topBarTitle = { "zh_Hans": "币币兑换", "zh_Hant": "幣幣兌換", "en": "" };_$temp = _node;{
			var _$parent2 = _$temp;var _node2 = { "attrs": {}, "tagName": "app-components1-topBar-topBar", "sid": 1 };_node2.hasChild = false;_node2.child = null;_node2.attrHash = 0;_$temp = _node2;{
				var _$parent3 = _$temp;var _node3 = {}; //jpair pre

				_node3["title"] = topBarTitle;
				//jpair suf
				//jpair pre

				{
					var jvalue = "";
					jvalue = "../../res/image/detailBlueIcon.png";
					//jpair suf

					_node3["nextImg"] = jvalue;
				}
				_addJson(_node3, _$parent3);
			}_chFunc(_node2);_$parent2.children.push(_node2);
		}_$temp = _node;{
			var _$parent4 = _$temp;var _node4 = { "attrs": {}, "tagName": "div", "sid": 2 };_node4.children = [];_node4.attrSize = 1;_node4.attrHash = 487306359;_node4.attrs["w-class"] = "content";tips = [{ "zh_Hans": "可用", "zh_Hant": "可用", "en": "" }, { "zh_Hans": "实时汇率", "zh_Hant": "實時匯率", "en": "" }, { "zh_Hans": "最小发出数量：", "zh_Hant": "最小發出數量：", "en": "" }, { "zh_Hans": "最大发出数量：", "zh_Hant": "最大發出數量：", "en": "" }, { "zh_Hans": "手续费不足", "zh_Hant": "手續費不足", "en": "" }];_$temp = _node4;{
				var _$parent5 = _$temp;var _node5 = { "attrs": {}, "tagName": "div", "sid": 3 };_node5.children = [];_node5.attrSize = 1;_node5.attrHash = 1349797565;_node5.attrs["w-class"] = "balance";_$temp = _node5;{
					var _$parent6 = _$temp;var _node6 = { "attrs": {}, "tagName": "pi-ui-lang", "sid": 4 };_node6.hasChild = false;_node6.child = null;_node6.attrHash = 0;_$temp = _node6;{
						var _$parent7 = _$temp;_addJson(tips[0], _$parent7);
					}_chFunc(_node6);_$parent6.children.push(_node6);
				}_$temp = _node5;{
					var _$parent8 = _$temp;var _node7 = _installText("&nbsp;", 1553561131);;
					_$parent8.children.push(_node7);
				}_$temp = _node5;{
					var _$parent9 = _$temp;_addText(it1.outBalance, _$parent9);
				}_$temp = _node5;{
					var _$parent10 = _$temp;var _node8 = _installText("&nbsp;", 1553561131);;
					_$parent10.children.push(_node8);
				}_$temp = _node5;{
					var _$parent11 = _$temp;_addText(it1.outCurrency, _$parent11);
				}_chFunc(_node5);_$parent5.children.push(_node5);
			}_$temp = _node4;{
				var _$parent12 = _$temp;var _node9 = { "attrs": {}, "tagName": "div", "sid": 5 };_node9.children = [];_node9.attrSize = 1;_node9.attrHash = 2232562797;_node9.attrs["w-class"] = "coin";_$temp = _node9;{
					var _$parent13 = _$temp;var _node10 = { "attrs": {}, "tagName": "img", "sid": 6 };_node10.children = [];_node10.attrSize = 2;_node10.attrHash = 1149598595;{
						var attrvalue = "";attrvalue += "../../../res/image/currency/";attrvalue += it1.outCurrency;attrvalue += ".png";_node10.attrs["src"] = attrvalue;
					}_node10.attrHash = _hash.nextHash(_node10.attrHash, _calTextHash(_node10.attrs["src"]));_node10.attrs["w-class"] = "coinImg";_chFunc(_node10);_$parent13.children.push(_node10);
				}_$temp = _node9;{
					var _$parent14 = _$temp;var _node11 = { "attrs": {}, "tagName": "span", "sid": 7 };_node11.children = [];_node11.attrSize = 1;_node11.attrHash = 2785077749;_node11.attrs["w-class"] = "coinName";_$temp = _node11;{
						var _$parent15 = _$temp;_addText(it1.outCurrency, _$parent15);
					}_chFunc(_node11);_$parent14.children.push(_node11);
				}_chFunc(_node9);_$parent12.children.push(_node9);
			}inputPlace = [{ "zh_Hans": "发出数量", "zh_Hant": "發出數量", "en": "" }, { "zh_Hans": "收到数量", "zh_Hant": "收到數量", "en": "" }];_$temp = _node4;{
				var _$parent16 = _$temp;var _node12 = { "attrs": {}, "tagName": "div", "sid": 8 };_node12.children = [];_node12.attrSize = 2;_node12.attrHash = 2447067020;_node12.attrs["w-class"] = "outInput";_node12.attrs["ev-input-change"] = "outAmountChange";_$temp = _node12;{
					var _$parent17 = _$temp;var _node13 = { "attrs": {}, "tagName": "app-components1-input-input", "sid": 9 };_node13.hasChild = false;_node13.child = null;_node13.attrHash = 0;_$temp = _node13;{
						var _$parent18 = _$temp;var _node14 = {}; //jpair pre

						_node14["placeHolder"] = inputPlace[0];
						//jpair suf
						//jpair pre

						{
							var _jvalue = "";
							_jvalue = "padding:20px;";
							//jpair suf

							_node14["style"] = _jvalue;
						}
						//jpair pre

						_node14["input"] = it1.outAmount;
						//jpair suf
						//jpair pre

						{
							var _jvalue2 = "";
							_jvalue2 = "number";
							//jpair suf

							_node14["itype"] = _jvalue2;
						}
						_addJson(_node14, _$parent18);
					}_chFunc(_node13);_$parent17.children.push(_node13);
				}_chFunc(_node12);_$parent16.children.push(_node12);
			}_$temp = _node4;{
				var _$parent19 = _$temp;var _node15 = { "attrs": {}, "tagName": "div", "sid": 10 };_node15.children = [];_node15.attrSize = 2;_node15.attrHash = 1373112016;_node15.attrs["w-class"] = "coin";_node15.attrs["on-tap"] = "inCurrencySelectClick";_$temp = _node15;{
					var _$parent20 = _$temp;var _node16 = { "attrs": {}, "tagName": "img", "sid": 11 };_node16.children = [];_node16.attrSize = 2;_node16.attrHash = 1149598595;{
						var _attrvalue = "";_attrvalue += "../../../res/image/currency/";_attrvalue += it1.inCurrency;_attrvalue += ".png";_node16.attrs["src"] = _attrvalue;
					}_node16.attrHash = _hash.nextHash(_node16.attrHash, _calTextHash(_node16.attrs["src"]));_node16.attrs["w-class"] = "coinImg";_chFunc(_node16);_$parent20.children.push(_node16);
				}_$temp = _node15;{
					var _$parent21 = _$temp;var _node17 = { "attrs": {}, "tagName": "span", "sid": 12 };_node17.children = [];_node17.attrSize = 1;_node17.attrHash = 2785077749;_node17.attrs["w-class"] = "coinName";_$temp = _node17;{
						var _$parent22 = _$temp;_addText(it1.inCurrency, _$parent22);
					}_chFunc(_node17);_$parent21.children.push(_node17);
				}_$temp = _node15;{
					var _$parent23 = _$temp;var _node18 = { "attrs": {}, "tagName": "img", "sid": 13 };_node18.children = [];_node18.childHash = 0;_node18.attrSize = 2;_node18.attrHash = 1878845784;_node18.attrs["src"] = "../../../res/image/right_arrow_blue.png";_node18.attrs["style"] = "width: 40px;height: 40px;";_$parent23.children.push(_node18);
				}_chFunc(_node15);_$parent19.children.push(_node15);
			}_$temp = _node4;{
				var _$parent24 = _$temp;var _node19 = { "attrs": {}, "tagName": "div", "sid": 14 };_node19.children = [];_node19.attrSize = 2;_node19.attrHash = 2084590256;_node19.attrs["w-class"] = "inInput";_node19.attrs["ev-input-change"] = "inAmountChange";_$temp = _node19;{
					var _$parent25 = _$temp;var _node20 = { "attrs": {}, "tagName": "app-components1-input-input", "sid": 15 };_node20.hasChild = false;_node20.child = null;_node20.attrHash = 0;_$temp = _node20;{
						var _$parent26 = _$temp;var _node21 = {}; //jpair pre

						_node21["placeHolder"] = inputPlace[1];
						//jpair suf
						//jpair pre

						{
							var _jvalue3 = "";
							_jvalue3 = "padding:20px;";
							//jpair suf

							_node21["style"] = _jvalue3;
						}
						//jpair pre

						_node21["input"] = it1.receiveAmount;
						//jpair suf
						//jpair pre

						{
							var _jvalue4 = "";
							_jvalue4 = "number";
							//jpair suf

							_node21["itype"] = _jvalue4;
						}
						_addJson(_node21, _$parent26);
					}_chFunc(_node20);_$parent25.children.push(_node20);
				}_chFunc(_node19);_$parent24.children.push(_node19);
			}_$temp = _node4;{
				var _$parent27 = _$temp;var _node22 = { "attrs": {}, "tagName": "div", "sid": 16 };_node22.children = [];_node22.attrSize = 1;_node22.attrHash = 2680022635;_node22.attrs["w-class"] = "rate";_$temp = _node22;{
					var _$parent28 = _$temp;var _node23 = { "attrs": {}, "tagName": "span", "sid": 17 };_node23.children = [];_node23.attrSize = 1;_node23.attrHash = 2609826224;_node23.attrs["style"] = "flex: 1 0 0;";_$temp = _node23;{
						var _$parent29 = _$temp;var _node24 = { "attrs": {}, "tagName": "pi-ui-lang", "sid": 18 };_node24.hasChild = false;_node24.child = null;_node24.attrHash = 0;_$temp = _node24;{
							var _$parent30 = _$temp;_addJson(tips[1], _$parent30);
						}_chFunc(_node24);_$parent29.children.push(_node24);
					}_$temp = _node23;{
						var _$parent31 = _$temp;var _node25 = _installText("&nbsp;", 1553561131);;
						_$parent31.children.push(_node25);
					}_$temp = _node23;{
						var _$parent32 = _$temp;var _node26 = { "attrs": {}, "tagName": "span", "sid": 19 };_node26.children = [];_node26.attrSize = 1;_node26.attrHash = 1113816595;_node26.attrs["style"] = "color: #F5A264;";_$temp = _node26;{
							var _$parent33 = _$temp;var _node27 = _installText("1&nbsp;", 4251789008);;
							_$parent33.children.push(_node27);
						}_$temp = _node26;{
							var _$parent34 = _$temp;_addText(it1.outCurrency, _$parent34);
						}_$temp = _node26;{
							var _$parent35 = _$temp;var _node28 = _installText("=", 1789488551);;
							_$parent35.children.push(_node28);
						}_$temp = _node26;{
							var _$parent36 = _$temp;_addText(it1.rate, _$parent36);
						}_$temp = _node26;{
							var _$parent37 = _$temp;var _node29 = _installText("&nbsp;", 1553561131);;
							_$parent37.children.push(_node29);
						}_$temp = _node26;{
							var _$parent38 = _$temp;_addText(it1.inCurrency, _$parent38);
						}_chFunc(_node26);_$parent32.children.push(_node26);
					}_chFunc(_node23);_$parent28.children.push(_node23);
				}_$temp = _node22;{
					var _$parent39 = _$temp;var _node30 = { "attrs": {}, "tagName": "img", "sid": 20 };_node30.children = [];_node30.childHash = 0;_node30.attrSize = 3;_node30.attrHash = 3477621553;_node30.attrs["src"] = "../../../res/image/41_gray.png";_node30.attrs["w-class"] = "messImg";_node30.attrs["on-tap"] = "rateDetail";_$parent39.children.push(_node30);
				}_chFunc(_node22);_$parent27.children.push(_node22);
			}_$temp = _node4;{
				var _$parent40 = _$temp;var _node31 = { "attrs": {}, "tagName": "div", "sid": 21 };_node31.children = [];_node31.attrSize = 1;_node31.attrHash = 2609826224;_node31.attrs["style"] = "flex: 1 0 0;";_$temp = _node31;{
					var _$parent41 = _$temp;var _node32 = { "attrs": {}, "tagName": "div", "sid": 22 };_node32.children = [];_node32.attrSize = 1;_node32.attrHash = 334357955;_node32.attrs["w-class"] = "outMessage";_$temp = _node32;{
						var _$parent42 = _$temp;var _node33 = { "attrs": {}, "tagName": "pi-ui-lang", "sid": 23 };_node33.hasChild = false;_node33.child = null;_node33.attrHash = 0;_$temp = _node33;{
							var _$parent43 = _$temp;_addJson(tips[2], _$parent43);
						}_chFunc(_node33);_$parent42.children.push(_node33);
					}_$temp = _node32;{
						var _$parent44 = _$temp;var _node34 = { "attrs": {}, "tagName": "span", "sid": 24 };_node34.children = [];_node34.attrSize = 1;_node34.attrHash = 3753103992;_node34.attrs["style"] = "color: #888888;";_$temp = _node34;{
							var _$parent45 = _$temp;var _node35 = _installText("(", 3447679526);;
							_$parent45.children.push(_node35);
						}_$temp = _node34;{
							var _$parent46 = _$temp;_addText(it1.outCurrency, _$parent46);
						}_$temp = _node34;{
							var _$parent47 = _$temp;var _node36 = _installText(")&nbsp;", 225771518);;
							_$parent47.children.push(_node36);
						}_$temp = _node34;{
							var _$parent48 = _$temp;_addText(it1.minimum, _$parent48);
						}_chFunc(_node34);_$parent44.children.push(_node34);
					}_chFunc(_node32);_$parent41.children.push(_node32);
				}_$temp = _node31;{
					var _$parent49 = _$temp;var _node37 = { "attrs": {}, "tagName": "div", "sid": 25 };_node37.children = [];_node37.attrSize = 1;_node37.attrHash = 1153482357;_node37.attrs["w-class"] = "inMessage";_$temp = _node37;{
						var _$parent50 = _$temp;var _node38 = { "attrs": {}, "tagName": "pi-ui-lang", "sid": 26 };_node38.hasChild = false;_node38.child = null;_node38.attrHash = 0;_$temp = _node38;{
							var _$parent51 = _$temp;_addJson(tips[3], _$parent51);
						}_chFunc(_node38);_$parent50.children.push(_node38);
					}_$temp = _node37;{
						var _$parent52 = _$temp;var _node39 = { "attrs": {}, "tagName": "span", "sid": 27 };_node39.children = [];_node39.attrSize = 1;_node39.attrHash = 3753103992;_node39.attrs["style"] = "color: #888888;";_$temp = _node39;{
							var _$parent53 = _$temp;var _node40 = _installText("(", 3447679526);;
							_$parent53.children.push(_node40);
						}_$temp = _node39;{
							var _$parent54 = _$temp;_addText(it1.outCurrency, _$parent54);
						}_$temp = _node39;{
							var _$parent55 = _$temp;var _node41 = _installText(")&nbsp;", 225771518);;
							_$parent55.children.push(_node41);
						}_$temp = _node39;{
							var _$parent56 = _$temp;_addText(it1.maxLimit, _$parent56);
						}_chFunc(_node39);_$parent52.children.push(_node39);
					}_chFunc(_node37);_$parent49.children.push(_node37);
				}_chFunc(_node31);_$parent40.children.push(_node31);
			}if (it1.outAmount >= it1.outBalance) {
				_$temp = _node4;{
					var _$parent57 = _$temp;var _node42 = { "attrs": {}, "tagName": "div", "sid": 28 };_node42.children = [];_node42.attrSize = 1;_node42.attrHash = 3466439543;_node42.attrs["style"] = "text-align: center;color: #F5A264;";_$temp = _node42;{
						var _$parent58 = _$temp;var _node43 = { "attrs": {}, "tagName": "pi-ui-lang", "sid": 29 };_node43.hasChild = false;_node43.child = null;_node43.attrHash = 0;_$temp = _node43;{
							var _$parent59 = _$temp;_addJson(tips[4], _$parent59);
						}_chFunc(_node43);_$parent58.children.push(_node43);
					}_chFunc(_node42);_$parent57.children.push(_node42);
				}
			}_$temp = _node4;{
				var _$parent60 = _$temp;var _node44 = { "attrs": {}, "tagName": "div", "sid": 30 };_node44.children = [];_node44.attrSize = 2;_node44.attrHash = 4170545165;_node44.attrs["w-class"] = "sureBtn";_node44.attrs["ev-btn-tap"] = "sureClick";btnName = { "zh_Hans": "兑换", "zh_Hant": "兌換", "en": "" };_$temp = _node44;{
					var _$parent61 = _$temp;var _node45 = { "attrs": {}, "tagName": "app-components1-btn-btn", "sid": 31 };_node45.hasChild = false;_node45.child = null;_node45.attrHash = 0;_$temp = _node45;{
						var _$parent62 = _$temp;var _node46 = {}; //jpair pre

						_node46["name"] = btnName;
						//jpair suf
						//jpair pre

						{
							var _jvalue5 = "";
							_jvalue5 = "blue";
							//jpair suf

							_node46["color"] = _jvalue5;
						}
						_addJson(_node46, _$parent62);
					}_chFunc(_node45);_$parent61.children.push(_node45);
				}_chFunc(_node44);_$parent60.children.push(_node44);
			}_chFunc(_node4);_$parent4.children.push(_node4);
		}_chFunc(_node);return _node;
	}
});