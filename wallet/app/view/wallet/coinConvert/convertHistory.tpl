(function (_cfg, it, it1) {
	var _$temp = void 0,
	    node = void 0;_$temp = node;{
		var _$parent = _$temp;var _node = { "attrs": {}, "tagName": "div", "sid": 0 };_node.children = [];_node.attrSize = 3;_node.attrHash = 3437572703;_node.attrs["class"] = "new-page";_node.attrs["w-class"] = "new-page";_node.attrs["ev-back-click"] = "backPrePage";topBarTitle = { "zh_Hans": "币币兑换", "zh_Hant": "幣幣兌換", "en": "" };_$temp = _node;{
			var _$parent2 = _$temp;var _node2 = { "attrs": {}, "tagName": "app-components1-topBar-topBar", "sid": 1 };_node2.hasChild = false;_node2.child = null;_node2.attrHash = 0;_$temp = _node2;{
				var _$parent3 = _$temp;var _node3 = {}; //jpair pre

				_node3["title"] = topBarTitle;
				//jpair suf
				_addJson(_node3, _$parent3);
			}_chFunc(_node2);_$parent2.children.push(_node2);
		}_$temp = _node;{
			var _$parent4 = _$temp;var _node4 = { "attrs": {}, "tagName": "div", "sid": 2 };_node4.children = [];_node4.attrSize = 2;_node4.attrHash = 1086370194;_node4.attrs["w-class"] = "content";_node4.attrs["on-scroll"] = "";{
				var _$i = 0;
				for (var _iterator = it1.txsShow, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator]();;) {
					var _ref;

					if (_isArray) {
						if (_i >= _iterator.length) break;
						_ref = _iterator[_i++];
					} else {
						_i = _iterator.next();
						if (_i.done) break;
						_ref = _i.value;
					}

					var item = _ref;
					var ind = _$i++;_$temp = _node4;{
						var _$parent5 = _$temp;var _node5 = { "attrs": {}, "tagName": "div", "sid": 3 };_node5.children = [];_node5.attrSize = 1;_node5.attrHash = 1045235690;_node5.attrs["w-class"] = "item";_$temp = _node5;{
							var _$parent6 = _$temp;var _node6 = { "attrs": {}, "tagName": "div", "sid": 4 };_node6.children = [];_node6.attrSize = 1;_node6.attrHash = 3819625266;_node6.attrs["w-class"] = "itemRow status";_$temp = _node6;{
								var _$parent7 = _$temp;var _node7 = { "attrs": {}, "tagName": "span", "sid": 5 };_node7.children = [];_node7.attrSize = 2;_node7.attrHash = 3886674151;{
									var attrvalue = "";attrvalue += item.status_class;attrvalue += "";_node7.attrs["w-class"] = attrvalue;
								}_node7.attrHash = _hash.nextHash(_node7.attrHash, _calTextHash(_node7.attrs["w-class"]));_node7.attrs["style"] = "flex: 1 0 0;";_$temp = _node7;{
									var _$parent8 = _$temp;_addText(item.status_show, _$parent8);
								}_chFunc(_node7);_$parent7.children.push(_node7);
							}_$temp = _node6;{
								var _$parent9 = _$temp;var _node8 = { "attrs": {}, "tagName": "span", "sid": 6 };_node8.children = [];_node8.attrHash = 0;_$temp = _node8;{
									var _$parent10 = _$temp;_addText(item.inputCurrency, _$parent10);
								}_$temp = _node8;{
									var _$parent11 = _$temp;var _node9 = { "attrs": {}, "tagName": "img", "sid": 7 };_node9.children = [];_node9.childHash = 0;_node9.attrSize = 2;_node9.attrHash = 3187615728;_node9.attrs["src"] = "../../../res/image/rightArrow.png";_node9.attrs["w-class"] = "arrow";_$parent11.children.push(_node9);
								}_$temp = _node8;{
									var _$parent12 = _$temp;_addText(item.outputCurrency, _$parent12);
								}_chFunc(_node8);_$parent9.children.push(_node8);
							}_chFunc(_node6);_$parent6.children.push(_node6);
						}_$temp = _node5;{
							var _$parent13 = _$temp;var _node10 = { "attrs": {}, "tagName": "div", "sid": 8 };_node10.children = [];_node10.attrSize = 1;_node10.attrHash = 2016227843;_node10.attrs["w-class"] = "itemRow rate";_$temp = _node10;{
								var _$parent14 = _$temp;var _node11 = { "attrs": {}, "tagName": "span", "sid": 9 };_node11.children = [];_node11.attrSize = 1;_node11.attrHash = 2609826224;_node11.attrs["style"] = "flex: 1 0 0;";_$temp = _node11;{
									var _$parent15 = _$temp;var _node12 = { "attrs": {}, "tagName": "pi-ui-lang", "sid": 10 };_node12.hasChild = false;_node12.child = null;_node12.childHash = 4041542505;_node12.attrHash = 0;_$temp = _node12;{
										var _$parent16 = _$temp;var _node13 = {}; //jpair pre

										{
											var jvalue = "";
											jvalue = "汇率";
											//jpair suf

											_node13["zh_Hans"] = jvalue;
										}
										//jpair pre

										{
											var _jvalue = "";
											_jvalue = "匯率";
											//jpair suf

											_node13["zh_Hant"] = _jvalue;
										}
										//jpair pre

										{
											var _jvalue2 = "";
											_jvalue2 = "";
											//jpair suf

											_node13["en"] = _jvalue2;
										}
										_addJson(_node13, _$parent16);
									}_$parent15.children.push(_node12);
								}_$temp = _node11;{
									var _$parent17 = _$temp;var _node14 = _installText("&nbsp;", 1553561131);;
									_$parent17.children.push(_node14);
								}_$temp = _node11;{
									var _$parent18 = _$temp;_addText(item.shiftRate, _$parent18);
								}_chFunc(_node11);_$parent14.children.push(_node11);
							}_$temp = _node10;{
								var _$parent19 = _$temp;var _node15 = { "attrs": {}, "tagName": "span", "sid": 11 };_node15.children = [];_node15.attrHash = 0;_$temp = _node15;{
									var _$parent20 = _$temp;_addText(item.timestamp_show, _$parent20);
								}_chFunc(_node15);_$parent19.children.push(_node15);
							}_chFunc(_node10);_$parent13.children.push(_node10);
						}_$temp = _node5;{
							var _$parent21 = _$temp;var _node16 = { "attrs": {}, "tagName": "div", "sid": 12 };_node16.children = [];_node16.childHash = 2946814719;_node16.attrSize = 1;_node16.attrHash = 3144420239;_node16.attrs["w-class"] = "dividLine";_$parent21.children.push(_node16);
						}_$temp = _node5;{
							var _$parent22 = _$temp;var _node17 = { "attrs": {}, "tagName": "div", "sid": 13 };_node17.children = [];_node17.attrSize = 2;_node17.attrHash = 2715493020;_node17.attrs["w-class"] = "itemRow outmess";{
								var _attrvalue = "";_attrvalue += "inHashClick(e,";_attrvalue += ind;_attrvalue += ")";_node17.attrs["on-tap"] = _attrvalue;
							}_node17.attrHash = _hash.nextHash(_node17.attrHash, _calTextHash(_node17.attrs["on-tap"]));_$temp = _node17;{
								var _$parent23 = _$temp;var _node18 = { "attrs": {}, "tagName": "span", "sid": 14 };_node18.children = [];_node18.attrSize = 1;_node18.attrHash = 3947990645;_node18.attrs["style"] = "color: #3790E6;flex: 1 0 0;";_$temp = _node18;{
									var _$parent24 = _$temp;_addText(item.inputTXID_show, _$parent24);
								}_chFunc(_node18);_$parent23.children.push(_node18);
							}_$temp = _node17;{
								var _$parent25 = _$temp;var _node19 = { "attrs": {}, "tagName": "span", "sid": 15 };_node19.children = [];_node19.attrHash = 0;_$temp = _node19;{
									var _$parent26 = _$temp;var _node20 = _installText("-", 1066372933);;
									_$parent26.children.push(_node20);
								}_$temp = _node19;{
									var _$parent27 = _$temp;_addText(item.inputAmount, _$parent27);
								}_chFunc(_node19);_$parent25.children.push(_node19);
							}_chFunc(_node17);_$parent22.children.push(_node17);
						}if (item.status === 'complete') {
							_$temp = _node5;{
								var _$parent28 = _$temp;var _node21 = { "attrs": {}, "tagName": "div", "sid": 16 };_node21.children = [];_node21.attrSize = 2;_node21.attrHash = 3900121577;_node21.attrs["w-class"] = "itemRow outmess";{
									var _attrvalue2 = "";_attrvalue2 += "outHashClick(e,";_attrvalue2 += ind;_attrvalue2 += ")";_node21.attrs["on-tap"] = _attrvalue2;
								}_node21.attrHash = _hash.nextHash(_node21.attrHash, _calTextHash(_node21.attrs["on-tap"]));_$temp = _node21;{
									var _$parent29 = _$temp;var _node22 = { "attrs": {}, "tagName": "span", "sid": 17 };_node22.children = [];_node22.attrSize = 1;_node22.attrHash = 3947990645;_node22.attrs["style"] = "color: #3790E6;flex: 1 0 0;";_$temp = _node22;{
										var _$parent30 = _$temp;_addText(item.outputTXID_show, _$parent30);
									}_chFunc(_node22);_$parent29.children.push(_node22);
								}_$temp = _node21;{
									var _$parent31 = _$temp;var _node23 = { "attrs": {}, "tagName": "span", "sid": 18 };_node23.children = [];_node23.attrHash = 0;_$temp = _node23;{
										var _$parent32 = _$temp;var _node24 = _installText("+", 3807426999);;
										_$parent32.children.push(_node24);
									}_$temp = _node23;{
										var _$parent33 = _$temp;_addText(item.outputAmount, _$parent33);
									}_chFunc(_node23);_$parent31.children.push(_node23);
								}_chFunc(_node21);_$parent28.children.push(_node21);
							}
						}_chFunc(_node5);_$parent5.children.push(_node5);
					}
				}
			}if (it1.txsShow.length == 0) {
				_$temp = _node4;{
					var _$parent34 = _$temp;var _node25 = { "attrs": {}, "tagName": "div", "sid": 19 };_node25.children = [];_node25.childHash = 3525000272;_node25.attrSize = 1;_node25.attrHash = 3809030542;_node25.attrs["w-class"] = "historyNone";_$temp = _node25;{
						var _$parent35 = _$temp;var _node26 = { "attrs": {}, "tagName": "img", "sid": 20 };_node26.children = [];_node26.childHash = 0;_node26.attrSize = 2;_node26.attrHash = 1623007564;_node26.attrs["src"] = "../../../res/image/dividend_history_none.png";_node26.attrs["style"] = "width: 200px;height: 200px;margin-bottom: 20px;";_$parent35.children.push(_node26);
					}_$temp = _node25;{
						var _$parent36 = _$temp;var _node27 = { "attrs": {}, "tagName": "div", "sid": 21 };_node27.children = [];_node27.childHash = 3525846262;_node27.attrHash = 0;_$temp = _node27;{
							var _$parent37 = _$temp;var _node28 = { "attrs": {}, "tagName": "pi-ui-lang", "sid": 22 };_node28.hasChild = false;_node28.child = null;_node28.childHash = 2043208451;_node28.attrHash = 0;_$temp = _node28;{
								var _$parent38 = _$temp;var _node29 = {}; //jpair pre

								{
									var _jvalue3 = "";
									_jvalue3 = "还没有记录哦";
									//jpair suf

									_node29["zh_Hans"] = _jvalue3;
								}
								//jpair pre

								{
									var _jvalue4 = "";
									_jvalue4 = "還沒有記錄哦";
									//jpair suf

									_node29["zh_Hant"] = _jvalue4;
								}
								//jpair pre

								{
									var _jvalue5 = "";
									_jvalue5 = "";
									//jpair suf

									_node29["en"] = _jvalue5;
								}
								_addJson(_node29, _$parent38);
							}_$parent37.children.push(_node28);
						}_$parent36.children.push(_node27);
					}_$parent34.children.push(_node25);
				}
			}_chFunc(_node4);_$parent4.children.push(_node4);
		}_chFunc(_node);return _node;
	}
});