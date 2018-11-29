(function (_cfg, it, it1) {
	var _$temp = void 0,
	    node = void 0;_$temp = node;{
		var _$parent = _$temp;var _node = { "attrs": {}, "tagName": "div", "sid": 0 };_node.children = [];_node.attrSize = 4;_node.attrHash = 3424737235;_node.attrs["class"] = "new-page";_node.attrs["w-class"] = "new-page";_node.attrs["ev-back-click"] = "backPrePage";_node.attrs["ev-refresh-click"] = "refreshPage";_$temp = _node;{
			var _$parent2 = _$temp;var _node2 = { "attrs": {}, "tagName": "div", "sid": 1 };_node2.children = [];_node2.attrSize = 1;_node2.attrHash = 3673846548;_node2.attrs["w-class"] = "top-head";topBarTitle = { "zh_Hans": it.currencyName, "zh_Hant": it.currencyName, "en": "" };_$temp = _node2;{
				var _$parent3 = _$temp;var _node3 = { "attrs": {}, "tagName": "app-components1-topBar-topBar", "sid": 2 };_node3.hasChild = false;_node3.child = null;_node3.attrHash = 0;_$temp = _node3;{
					var _$parent4 = _$temp;var _node4 = {}; //jpair pre

					_node4["title"] = topBarTitle;
					//jpair suf
					//jpair pre

					{
						var jvalue = "";
						jvalue = "linear-gradient(to right,#38CFE7,#318DE6)";
						//jpair suf

						_node4["background"] = jvalue;
					}
					//jpair pre

					{
						var _jvalue = "";
						_jvalue = "../../res/image1/refresh_white.png";
						//jpair suf

						_node4["refreshImg"] = _jvalue;
					}
					_addJson(_node4, _$parent4);
				}_chFunc(_node3);_$parent3.children.push(_node3);
			}_$temp = _node2;{
				var _$parent5 = _$temp;var _node5 = { "attrs": {}, "tagName": "div", "sid": 3 };_node5.children = [];_node5.attrSize = 1;_node5.attrHash = 253915434;_node5.attrs["w-class"] = "head2";_$temp = _node5;{
					var _$parent6 = _$temp;var _node6 = { "attrs": {}, "tagName": "div", "sid": 4 };_node6.children = [];_node6.attrSize = 1;_node6.attrHash = 3203423573;_node6.attrs["w-class"] = "head2-left";_$temp = _node6;{
						var _$parent7 = _$temp;var _node7 = { "attrs": {}, "tagName": "span", "sid": 5 };_node7.children = [];_node7.attrSize = 1;_node7.attrHash = 1349797565;_node7.attrs["w-class"] = "balance";_$temp = _node7;{
							var _$parent8 = _$temp;_addText(it1.balance % 1 === 0 ? it1.balance.toFixed(2) : it1.balance, _$parent8);
						}_chFunc(_node7);_$parent7.children.push(_node7);
					}_$temp = _node6;{
						var _$parent9 = _$temp;var _node8 = { "attrs": {}, "tagName": "span", "sid": 6 };_node8.children = [];_node8.attrSize = 1;_node8.attrHash = 1532757002;_node8.attrs["w-class"] = "balance-value";_$temp = _node8;{
							var _$parent10 = _$temp;_addText(it1.currencyUnitSymbol, _$parent10);
						}_$temp = _node8;{
							var _$parent11 = _$temp;_addText(it1.balanceValue, _$parent11);
						}_chFunc(_node8);_$parent9.children.push(_node8);
					}_chFunc(_node6);_$parent6.children.push(_node6);
				}_$temp = _node5;{
					var _$parent12 = _$temp;var _node9 = { "attrs": {}, "tagName": "div", "sid": 7 };_node9.children = [];_node9.childHash = 2351482465;_node9.attrSize = 1;_node9.attrHash = 3242123177;_node9.attrs["w-class"] = "head2-right";_$temp = _node9;{
						var _$parent13 = _$temp;var _node10 = { "attrs": {}, "tagName": "span", "sid": 8 };_node10.children = [];_node10.childHash = 4203235553;_node10.attrSize = 2;_node10.attrHash = 1878417502;_node10.attrs["w-class"] = "btn";_node10.attrs["on-tap"] = "rechargeClick";_$temp = _node10;{
							var _$parent14 = _$temp;var _node11 = { "attrs": {}, "tagName": "pi-ui-lang", "sid": 9 };_node11.hasChild = false;_node11.child = null;_node11.childHash = 1620279894;_node11.attrHash = 0;_$temp = _node11;{
								var _$parent15 = _$temp;var _node12 = {}; //jpair pre

								{
									var _jvalue2 = "";
									_jvalue2 = "充值";
									//jpair suf

									_node12["zh_Hans"] = _jvalue2;
								}
								//jpair pre

								{
									var _jvalue3 = "";
									_jvalue3 = "充值";
									//jpair suf

									_node12["zh_Hant"] = _jvalue3;
								}
								//jpair pre

								{
									var _jvalue4 = "";
									_jvalue4 = "";
									//jpair suf

									_node12["en"] = _jvalue4;
								}
								_addJson(_node12, _$parent15);
							}_$parent14.children.push(_node11);
						}_$parent13.children.push(_node10);
					}_$temp = _node9;{
						var _$parent16 = _$temp;var _node13 = { "attrs": {}, "tagName": "span", "sid": 10 };_node13.children = [];_node13.childHash = 1947506434;_node13.attrSize = 2;_node13.attrHash = 2981695675;_node13.attrs["w-class"] = "btn btn-withdraw";_node13.attrs["on-tap"] = "withdrawClick";_$temp = _node13;{
							var _$parent17 = _$temp;var _node14 = { "attrs": {}, "tagName": "pi-ui-lang", "sid": 11 };_node14.hasChild = false;_node14.child = null;_node14.childHash = 3582938198;_node14.attrHash = 0;_$temp = _node14;{
								var _$parent18 = _$temp;var _node15 = {}; //jpair pre

								{
									var _jvalue5 = "";
									_jvalue5 = "提币";
									//jpair suf

									_node15["zh_Hans"] = _jvalue5;
								}
								//jpair pre

								{
									var _jvalue6 = "";
									_jvalue6 = "提幣";
									//jpair suf

									_node15["zh_Hant"] = _jvalue6;
								}
								//jpair pre

								{
									var _jvalue7 = "";
									_jvalue7 = "";
									//jpair suf

									_node15["en"] = _jvalue7;
								}
								_addJson(_node15, _$parent18);
							}_$parent17.children.push(_node14);
						}_$parent16.children.push(_node13);
					}_$parent12.children.push(_node9);
				}_chFunc(_node5);_$parent5.children.push(_node5);
			}_$temp = _node2;{
				var _$parent19 = _$temp;var _node16 = { "attrs": {}, "tagName": "div", "sid": 12 };_node16.children = [];_node16.attrSize = 1;_node16.attrHash = 4105260532;_node16.attrs["w-class"] = "nav-wrap";_$temp = _node16;{
					var _$parent20 = _$temp;var _node17 = { "attrs": {}, "tagName": "div", "sid": 13 };_node17.children = [];_node17.attrSize = 1;_node17.attrHash = 1940417547;_node17.attrs["w-class"] = "nav";{
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
							var i = _$i++;var isActive = i === it1.activeNum;_$temp = _node17;{
								var _$parent21 = _$temp;var _node18 = { "attrs": {}, "tagName": "div", "sid": 14 };_node18.children = [];_node18.attrSize = 2;_node18.attrHash = 1235456931;{
									var attrvalue = "";attrvalue += "nav-item ";attrvalue += isActive ? 'is-active' : '';attrvalue += "";_node18.attrs["w-class"] = attrvalue;
								}_node18.attrHash = _hash.nextHash(_node18.attrHash, _calTextHash(_node18.attrs["w-class"]));{
									var _attrvalue = "";_attrvalue += "tabsChangeClick(e,";_attrvalue += i;_attrvalue += ")";_node18.attrs["on-tap"] = _attrvalue;
								}_node18.attrHash = _hash.nextHash(_node18.attrHash, _calTextHash(_node18.attrs["on-tap"]));_$temp = _node18;{
									var _$parent22 = _$temp;_addText(v.tab, _$parent22);
								}_chFunc(_node18);_$parent21.children.push(_node18);
							}
						}
					}_chFunc(_node17);_$parent20.children.push(_node17);
				}_chFunc(_node16);_$parent19.children.push(_node16);
			}_chFunc(_node2);_$parent2.children.push(_node2);
		}_$temp = _node;{
			var _$parent23 = _$temp;var _node19 = { "attrs": {}, "tagName": "div", "sid": 15 };_node19.children = [];_node19.attrSize = 1;_node19.attrHash = 915048845;_node19.attrs["w-class"] = "show-container";_$temp = _node19;{
				var _$parent24 = _$temp;var _node20 = { "attrs": {}, "tagName": "div", "sid": 16 };_node20.children = [];_node20.attrSize = 1;_node20.attrHash = 2438851802;_node20.attrs["w-class"] = "quotes";_$temp = _node20;{
					var _$parent25 = _$temp;var _node21 = { "attrs": {}, "tagName": "pi-ui-lang", "sid": 17 };_node21.hasChild = false;_node21.child = null;_node21.childHash = 2620983896;_node21.attrHash = 0;_$temp = _node21;{
						var _$parent26 = _$temp;var _node22 = {}; //jpair pre

						{
							var _jvalue8 = "";
							_jvalue8 = "行情";
							//jpair suf

							_node22["zh_Hans"] = _jvalue8;
						}
						//jpair pre

						{
							var _jvalue9 = "";
							_jvalue9 = "行情";
							//jpair suf

							_node22["zh_Hant"] = _jvalue9;
						}
						//jpair pre

						{
							var _jvalue10 = "";
							_jvalue10 = "";
							//jpair suf

							_node22["en"] = _jvalue10;
						}
						_addJson(_node22, _$parent26);
					}_$parent25.children.push(_node21);
				}_$temp = _node20;{
					var _$parent27 = _$temp;var _node23 = _installText("&nbsp;", 1553561131);;
					_$parent27.children.push(_node23);
				}_$temp = _node20;{
					var _$parent28 = _$temp;_addText(it1.currencyUnitSymbol, _$parent28);
				}_$temp = _node20;{
					var _$parent29 = _$temp;_addText(it1.rate, _$parent29);
				}_$temp = _node20;{
					var _$parent30 = _$temp;var _node24 = _installText("/", 883865250);;
					_$parent30.children.push(_node24);
				}_$temp = _node20;{
					var _$parent31 = _$temp;_addText(it.currencyName, _$parent31);
				}_chFunc(_node20);_$parent24.children.push(_node20);
			}if (it1.redUp) {
				_$temp = _node19;{
					var _$parent32 = _$temp;var _node25 = { "attrs": {}, "tagName": "div", "sid": 18 };_node25.children = [];_node25.attrSize = 1;_node25.attrHash = 2255571891;{
						var _attrvalue2 = "";_attrvalue2 += it1.gain >= 0 ? 'up' : 'down';_attrvalue2 += "";_node25.attrs["w-class"] = _attrvalue2;
					}_node25.attrHash = _hash.nextHash(_node25.attrHash, _calTextHash(_node25.attrs["w-class"]));_$temp = _node25;{
						var _$parent33 = _$temp;var _node26 = { "attrs": {}, "tagName": "pi-ui-lang", "sid": 19 };_node26.hasChild = false;_node26.child = null;_node26.childHash = 1558011476;_node26.attrHash = 0;_$temp = _node26;{
							var _$parent34 = _$temp;var _node27 = {}; //jpair pre

							{
								var _jvalue11 = "";
								_jvalue11 = "今日";
								//jpair suf

								_node27["zh_Hans"] = _jvalue11;
							}
							//jpair pre

							{
								var _jvalue12 = "";
								_jvalue12 = "今日";
								//jpair suf

								_node27["zh_Hant"] = _jvalue12;
							}
							//jpair pre

							{
								var _jvalue13 = "";
								_jvalue13 = "";
								//jpair suf

								_node27["en"] = _jvalue13;
							}
							_addJson(_node27, _$parent34);
						}_$parent33.children.push(_node26);
					}_$temp = _node25;{
						var _$parent35 = _$temp;var _node28 = _installText("&nbsp;", 1553561131);;
						_$parent35.children.push(_node28);
					}_$temp = _node25;{
						var _$parent36 = _$temp;_addText(it1.gain >= 0 ? '+' : '', _$parent36);
					}_$temp = _node25;{
						var _$parent37 = _$temp;_addText(it1.gain, _$parent37);
					}_$temp = _node25;{
						var _$parent38 = _$temp;var _node29 = _installText("%", 4257547020);;
						_$parent38.children.push(_node29);
					}_chFunc(_node25);_$parent32.children.push(_node25);
				}
			} else {
				_$temp = _node19;{
					var _$parent39 = _$temp;var _node30 = { "attrs": {}, "tagName": "div", "sid": 20 };_node30.children = [];_node30.attrSize = 1;_node30.attrHash = 2255571891;{
						var _attrvalue3 = "";_attrvalue3 += it1.gain >= 0 ? 'down' : 'up';_attrvalue3 += "";_node30.attrs["w-class"] = _attrvalue3;
					}_node30.attrHash = _hash.nextHash(_node30.attrHash, _calTextHash(_node30.attrs["w-class"]));_$temp = _node30;{
						var _$parent40 = _$temp;var _node31 = { "attrs": {}, "tagName": "pi-ui-lang", "sid": 21 };_node31.hasChild = false;_node31.child = null;_node31.childHash = 1558011476;_node31.attrHash = 0;_$temp = _node31;{
							var _$parent41 = _$temp;var _node32 = {}; //jpair pre

							{
								var _jvalue14 = "";
								_jvalue14 = "今日";
								//jpair suf

								_node32["zh_Hans"] = _jvalue14;
							}
							//jpair pre

							{
								var _jvalue15 = "";
								_jvalue15 = "今日";
								//jpair suf

								_node32["zh_Hant"] = _jvalue15;
							}
							//jpair pre

							{
								var _jvalue16 = "";
								_jvalue16 = "";
								//jpair suf

								_node32["en"] = _jvalue16;
							}
							_addJson(_node32, _$parent41);
						}_$parent40.children.push(_node31);
					}_$temp = _node30;{
						var _$parent42 = _$temp;var _node33 = _installText("&nbsp;", 1553561131);;
						_$parent42.children.push(_node33);
					}_$temp = _node30;{
						var _$parent43 = _$temp;_addText(it1.gain >= 0 ? '+' : '', _$parent43);
					}_$temp = _node30;{
						var _$parent44 = _$temp;_addText(it1.gain, _$parent44);
					}_$temp = _node30;{
						var _$parent45 = _$temp;var _node34 = _installText("%", 4257547020);;
						_$parent45.children.push(_node34);
					}_chFunc(_node30);_$parent39.children.push(_node30);
				}
			}_chFunc(_node19);_$parent23.children.push(_node19);
		}_$temp = _node;{
			var _$parent46 = _$temp;var _node35 = { "attrs": {}, "tagName": "div", "sid": 22 };_node35.children = [];_node35.attrSize = 1;_node35.attrHash = 4252679546;_node35.attrs["w-class"] = "body";{
				var _$i2 = 0;
				for (var _iterator2 = it1.tabs, _isArray2 = Array.isArray(_iterator2), _i2 = 0, _iterator2 = _isArray2 ? _iterator2 : _iterator2[Symbol.iterator]();;) {
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
					var _i3 = _$i2++;var _isActive = _i3 === it1.activeNum;_$temp = _node35;{
						var _$parent47 = _$temp;var _node36 = { "attrs": {}, "tagName": "widget", "sid": 23 };_node36.hasChild = false;_node36.child = null;_node36.attrSize = 1;_node36.attrHash = 543012080;{
							var _attrvalue4 = "";_attrvalue4 = _v.components;_node36.attrs["w-tag"] = _attrvalue4;
						}_node36.attrHash = _hash.nextHash(_node36.attrHash, _calTextHash(_node36.attrs["w-tag"]));_node36.tagName = _node36.attrs["w-tag"];{
							var _attrvalue5 = "";_attrvalue5 += "visibility: ";_attrvalue5 += _isActive ? 'visible' : 'hidden';_attrvalue5 += "; z-index:";_attrvalue5 += _isActive ? 0 : -1;_attrvalue5 += ";  width:100%;height: 100%;";_node36.attrs["style"] = _attrvalue5;
						}_node36.attrHash = _hash.nextHash(_node36.attrHash, _calTextHash(_node36.attrs["style"]));_$temp = _node36;{
							var _$parent48 = _$temp;var _node37 = {}; //jpair pre

							_node37["isActive"] = _isActive;
							//jpair suf
							//jpair pre

							_node37["currencyName"] = it.currencyName;
							//jpair suf
							_addJson(_node37, _$parent48);
						}_chFunc(_node36);_$parent47.children.push(_node36);
					}
				}
			}_chFunc(_node35);_$parent46.children.push(_node35);
		}_chFunc(_node);return _node;
	}
});