(function (_cfg, it, it1) {
	var _$temp = void 0,
	    node = void 0;var item = it1.list[it1.selected];_$temp = node;{
		var _$parent = _$temp;var _node = { "attrs": {}, "tagName": "div", "sid": 0 };_node.children = [];_node.attrSize = 4;_node.attrHash = 591769069;_node.attrs["class"] = "new-page";_node.attrs["style"] = "background: #f9f9f9;";_node.attrs["ev-back-click"] = "backPrePage";_node.attrs["ev-next-click"] = "goHistory";topBarTitle = { "zh_Hans": "发红包", "zh_Hant": "發紅包", "en": "" };_$temp = _node;{
			var _$parent2 = _$temp;var _node2 = { "attrs": {}, "tagName": "app-components1-topBar-topBar", "sid": 1 };_node2.hasChild = false;_node2.child = null;_node2.attrHash = 0;_$temp = _node2;{
				var _$parent3 = _$temp;var _node3 = {}; //jpair pre

				_node3["title"] = topBarTitle;
				//jpair suf
				//jpair pre

				{
					var jvalue = "";
					jvalue = "../../res/image/26_white.png";
					//jpair suf

					_node3["nextImg"] = jvalue;
				}
				//jpair pre

				{
					var _jvalue = "";
					_jvalue = "#F46262;";
					//jpair suf

					_node3["background"] = _jvalue;
				}
				_addJson(_node3, _$parent3);
			}_chFunc(_node2);_$parent2.children.push(_node2);
		}_$temp = _node;{
			var _$parent4 = _$temp;var _node4 = { "attrs": {}, "tagName": "form", "sid": 2 };_node4.children = [];_node4.attrSize = 3;_node4.attrHash = 1689435913;_node4.attrs["w-class"] = "content";_node4.attrs["ev-selectBox-change"] = "changeCoin";_node4.attrs["id"] = "content";_$temp = _node4;{
				var _$parent5 = _$temp;var _node5 = { "attrs": {}, "tagName": "app-components-selectBox-selectBox", "sid": 3 };_node5.hasChild = false;_node5.child = null;_node5.attrHash = 0;_$temp = _node5;{
					var _$parent6 = _$temp;var _node6 = {}; //jpair pre

					_node6["list"] = it1.list;
					//jpair suf
					//jpair pre

					_node6["selected"] = it1.selected;
					//jpair suf
					//jpair pre

					_node6["forceHide"] = it1.forceHide;
					//jpair suf
					_addJson(_node6, _$parent6);
				}_chFunc(_node5);_$parent5.children.push(_node5);
			}_$temp = _node4;{
				var _$parent7 = _$temp;var _node7 = { "attrs": {}, "tagName": "div", "sid": 4 };_node7.children = [];_node7.attrSize = 1;_node7.attrHash = 1233595193;_node7.attrs["style"] = "font-size: 28px;color: #888888;margin: 0 30px;";changePin = [{ "zh_Hans": "每个红包金额", "zh_Hant": "每個紅包金額", "en": "" }, { "zh_Hans": "随机", "zh_Hant": "隨機", "en": "" }, { "zh_Hans": "固定", "zh_Hant": "固定", "en": "" }, { "zh_Hans": "，改为", "zh_Hant": "，改為", "en": "" }];_$temp = _node7;{
					var _$parent8 = _$temp;var _node8 = { "attrs": {}, "tagName": "pi-ui-lang", "sid": 5 };_node8.hasChild = false;_node8.child = null;_node8.attrHash = 0;_$temp = _node8;{
						var _$parent9 = _$temp;_addJson(changePin[0], _$parent9);
					}_chFunc(_node8);_$parent8.children.push(_node8);
				}_$temp = _node7;{
					var _$parent10 = _$temp;var _node9 = { "attrs": {}, "tagName": "pi-ui-lang", "sid": 6 };_node9.hasChild = false;_node9.child = null;_node9.attrHash = 0;_$temp = _node9;{
						var _$parent11 = _$temp;_addJson(it1.showPin ? changePin[1] : changePin[2], _$parent11);
					}_chFunc(_node9);_$parent10.children.push(_node9);
				}_$temp = _node7;{
					var _$parent12 = _$temp;var _node10 = { "attrs": {}, "tagName": "pi-ui-lang", "sid": 7 };_node10.hasChild = false;_node10.child = null;_node10.attrHash = 0;_$temp = _node10;{
						var _$parent13 = _$temp;_addJson(changePin[3], _$parent13);
					}_chFunc(_node10);_$parent12.children.push(_node10);
				}_$temp = _node7;{
					var _$parent14 = _$temp;var _node11 = { "attrs": {}, "tagName": "span", "sid": 8 };_node11.children = [];_node11.attrSize = 2;_node11.attrHash = 1006569170;_node11.attrs["w-class"] = "changeType";_node11.attrs["on-tap"] = "changePin";redEnvType = [{ "zh_Hans": "普通红包", "zh_Hant": "普通紅包", "en": "" }, { "zh_Hans": "拼手气红包", "zh_Hant": "拼手氣紅包", "en": "" }];_$temp = _node11;{
						var _$parent15 = _$temp;var _node12 = { "attrs": {}, "tagName": "pi-ui-lang", "sid": 9 };_node12.hasChild = false;_node12.child = null;_node12.attrHash = 0;_$temp = _node12;{
							var _$parent16 = _$temp;_addJson(it1.showPin ? redEnvType[0] : redEnvType[1], _$parent16);
						}_chFunc(_node12);_$parent15.children.push(_node12);
					}_chFunc(_node11);_$parent14.children.push(_node11);
				}_chFunc(_node7);_$parent7.children.push(_node7);
			}_$temp = _node4;{
				var _$parent17 = _$temp;var _node13 = { "attrs": {}, "tagName": "div", "sid": 10 };_node13.children = [];_node13.attrSize = 1;_node13.attrHash = 3533776900;_node13.attrs["ev-input-change"] = "changeAmount";amountTitle = [{ "zh_Hans": "总金额", "zh_Hant": "總金額", "en": "" }, { "zh_Hans": "单个金额", "zh_Hant": "單個金額", "en": "" }, { "zh_Hans": "0", "zh_Hant": "0", "en": "" }, { "zh_Hans": item.name, "zh_Hant": item.name, "en": "" }];_$temp = _node13;{
					var _$parent18 = _$temp;var _node14 = { "attrs": {}, "tagName": "app-components-basicInput-basicInput", "sid": 11 };_node14.hasChild = false;_node14.child = null;_node14.attrHash = 0;_$temp = _node14;{
						var _$parent19 = _$temp;var _node15 = {}; //jpair pre

						_node15["prepend"] = it1.showPin ? amountTitle[0] : amountTitle[1];
						//jpair suf
						//jpair pre

						_node15["placeholder"] = amountTitle[2];
						//jpair suf
						//jpair pre

						_node15["itype"] = it1.selected === 0 ? "integer" : "number";
						//jpair suf
						//jpair pre

						_node15["maxLength"] = 8;
						//jpair suf
						//jpair pre

						_node15["append"] = amountTitle[3];
						//jpair suf
						//jpair pre

						_node15["isShowPin"] = it1.showPin;
						//jpair suf
						//jpair pre

						_node15["input"] = it1.oneAmount;
						//jpair suf
						//jpair pre

						_node15["notUnderLine"] = true;
						//jpair suf
						_addJson(_node15, _$parent19);
					}_chFunc(_node14);_$parent18.children.push(_node14);
				}_chFunc(_node13);_$parent17.children.push(_node13);
			}_$temp = _node4;{
				var _$parent20 = _$temp;var _node16 = { "attrs": {}, "tagName": "div", "sid": 12 };_node16.children = [];_node16.attrSize = 2;_node16.attrHash = 2820222986;_node16.attrs["style"] = "margin: 10px 0;";_node16.attrs["ev-input-change"] = "changeNumber";countTitle = [{ "zh_Hans": "红包个数", "zh_Hant": "紅包個數", "en": "" }, { "zh_Hans": "0", "zh_Hant": "0", "en": "" }, { "zh_Hans": "个", "zh_Hant": "個", "en": "" }];_$temp = _node16;{
					var _$parent21 = _$temp;var _node17 = { "attrs": {}, "tagName": "app-components-basicInput-basicInput", "sid": 13 };_node17.hasChild = false;_node17.child = null;_node17.attrHash = 0;_$temp = _node17;{
						var _$parent22 = _$temp;var _node18 = {}; //jpair pre

						_node18["prepend"] = countTitle[0];
						//jpair suf
						//jpair pre

						_node18["placeholder"] = countTitle[1];
						//jpair suf
						//jpair pre

						{
							var _jvalue2 = "";
							_jvalue2 = "integer";
							//jpair suf

							_node18["itype"] = _jvalue2;
						}
						//jpair pre

						_node18["maxLength"] = 3;
						//jpair suf
						//jpair pre

						_node18["append"] = countTitle[2];
						//jpair suf
						//jpair pre

						_node18["input"] = it1.totalNum;
						//jpair suf
						//jpair pre

						_node18["notUnderLine"] = true;
						//jpair suf
						_addJson(_node18, _$parent22);
					}_chFunc(_node17);_$parent21.children.push(_node17);
				}_chFunc(_node16);_$parent20.children.push(_node16);
			}_$temp = _node4;{
				var _$parent23 = _$temp;var _node19 = { "attrs": {}, "tagName": "div", "sid": 14 };_node19.children = [];_node19.attrSize = 2;_node19.attrHash = 2489224487;_node19.attrs["style"] = "margin: 10px 0;";_node19.attrs["ev-input-change"] = "changeMessage";messTitle = [{ "zh_Hans": "留言", "zh_Hant": "留言", "en": "" }, { "zh_Hans": "恭喜发财，万事如意", "zh_Hant": "恭喜發財 萬事如意", "en": "" }];_$temp = _node19;{
					var _$parent24 = _$temp;var _node20 = { "attrs": {}, "tagName": "app-components-basicInput-basicInput", "sid": 15 };_node20.hasChild = false;_node20.child = null;_node20.attrHash = 0;_$temp = _node20;{
						var _$parent25 = _$temp;var _node21 = {}; //jpair pre

						_node21["prepend"] = messTitle[0];
						//jpair suf
						//jpair pre

						_node21["placeholder"] = messTitle[1];
						//jpair suf
						//jpair pre

						_node21["input"] = it1.message;
						//jpair suf
						//jpair pre

						_node21["maxLength"] = 20;
						//jpair suf
						//jpair pre

						_node21["notUnderLine"] = true;
						//jpair suf
						_addJson(_node21, _$parent25);
					}_chFunc(_node20);_$parent24.children.push(_node20);
				}_chFunc(_node19);_$parent23.children.push(_node19);
			}_$temp = _node4;{
				var _$parent26 = _$temp;var _node22 = { "attrs": {}, "tagName": "div", "sid": 16 };_node22.children = [];_node22.attrSize = 1;_node22.attrHash = 2713131367;_node22.attrs["w-class"] = "totalNum";_$temp = _node22;{
					var _$parent27 = _$temp;_addText(it1.totalAmount + " " + item.name, _$parent27);
				}_chFunc(_node22);_$parent26.children.push(_node22);
			}_$temp = _node4;{
				var _$parent28 = _$temp;var _node23 = { "attrs": {}, "tagName": "div", "sid": 17 };_node23.children = [];_node23.attrSize = 2;_node23.attrHash = 596930179;_node23.attrs["style"] = "margin: 0 40px;";_node23.attrs["ev-btn-tap"] = "send";btnName = { "zh_Hans": "塞钱进红包", "zh_Hant": "塞錢進紅包", "en": "" };_$temp = _node23;{
					var _$parent29 = _$temp;var _node24 = { "attrs": {}, "tagName": "app-components1-btn-btn", "sid": 18 };_node24.hasChild = false;_node24.child = null;_node24.attrHash = 0;_$temp = _node24;{
						var _$parent30 = _$temp;var _node25 = {}; //jpair pre

						_node25["name"] = btnName;
						//jpair suf
						//jpair pre

						{
							var _jvalue3 = "";
							_jvalue3 = "big";
							//jpair suf

							_node25["types"] = _jvalue3;
						}
						//jpair pre

						{
							var _jvalue4 = "";
							_jvalue4 = "background:#F46262;";
							//jpair suf

							_node25["style"] = _jvalue4;
						}
						_addJson(_node25, _$parent30);
					}_chFunc(_node24);_$parent29.children.push(_node24);
				}_chFunc(_node23);_$parent28.children.push(_node23);
			}_$temp = _node4;{
				var _$parent31 = _$temp;var _node26 = { "attrs": {}, "tagName": "div", "sid": 19 };_node26.children = [];_node26.childHash = 862948278;_node26.attrSize = 1;_node26.attrHash = 3885815947;_node26.attrs["style"] = "font-size: 24px;color: #888888;text-align: center;margin-top: 40px;";_$temp = _node26;{
					var _$parent32 = _$temp;var _node27 = { "attrs": {}, "tagName": "pi-ui-lang", "sid": 20 };_node27.hasChild = false;_node27.child = null;_node27.childHash = 2796861488;_node27.attrHash = 0;_$temp = _node27;{
						var _$parent33 = _$temp;var _node28 = {}; //jpair pre

						{
							var _jvalue5 = "";
							_jvalue5 = "使用云账户里的余额发红包";
							//jpair suf

							_node28["zh_Hans"] = _jvalue5;
						}
						//jpair pre

						{
							var _jvalue6 = "";
							_jvalue6 = "使用雲賬戶裡的餘額發紅包";
							//jpair suf

							_node28["zh_Hant"] = _jvalue6;
						}
						//jpair pre

						{
							var _jvalue7 = "";
							_jvalue7 = "";
							//jpair suf

							_node28["en"] = _jvalue7;
						}
						_addJson(_node28, _$parent33);
					}_$parent32.children.push(_node27);
				}_$parent31.children.push(_node26);
			}_chFunc(_node4);_$parent4.children.push(_node4);
		}_chFunc(_node);return _node;
	}
});