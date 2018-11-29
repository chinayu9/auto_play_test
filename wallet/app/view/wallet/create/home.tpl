(function (_cfg, it, it1) {
	var _$temp = void 0,
	    node = void 0;_$temp = node;{
		var _$parent = _$temp;var _node = { "attrs": {}, "tagName": "div", "sid": 0 };_node.children = [];_node.attrSize = 2;_node.attrHash = 138104688;_node.attrs["class"] = "new-page";_node.attrs["w-class"] = "new-page";_$temp = _node;{
			var _$parent2 = _$temp;var _node2 = { "attrs": {}, "tagName": "img", "sid": 1 };_node2.children = [];_node2.attrSize = 2;_node2.attrHash = 3592509541;{
				var attrvalue = "";attrvalue += it1.loginImg;attrvalue += "";_node2.attrs["src"] = attrvalue;
			}_node2.attrHash = _hash.nextHash(_node2.attrHash, _calTextHash(_node2.attrs["src"]));_node2.attrs["w-class"] = "logo";_chFunc(_node2);_$parent2.children.push(_node2);
		}_$temp = _node;{
			var _$parent3 = _$temp;var _node3 = { "attrs": {}, "tagName": "div", "sid": 2 };_node3.children = [];_node3.attrSize = 2;_node3.attrHash = 3430357144;_node3.attrs["ev-back-click"] = "backPrePage";_node3.attrs["w-class"] = "title-container";topBarTitle = { "zh_Hans": "登录", "zh_Hant": "登錄", "en": "" };_$temp = _node3;{
				var _$parent4 = _$temp;var _node4 = { "attrs": {}, "tagName": "app-components1-topBar-topBar", "sid": 3 };_node4.hasChild = false;_node4.child = null;_node4.attrHash = 0;_$temp = _node4;{
					var _$parent5 = _$temp;var _node5 = {}; //jpair pre

					_node5["title"] = topBarTitle;
					//jpair suf
					//jpair pre

					{
						var jvalue = "";
						jvalue = "rgba(0,0,0,0)";
						//jpair suf

						_node5["background"] = jvalue;
					}
					_addJson(_node5, _$parent5);
				}_chFunc(_node4);_$parent4.children.push(_node4);
			}_chFunc(_node3);_$parent3.children.push(_node3);
		}btnName = [{ "zh_Hans": "创建标准账户", "zh_Hant": "創建標準賬戶", "en": "" }, { "zh_Hans": "使用照片创建账户", "zh_Hant": "使用照片創建賬戶", "en": "" }, { "zh_Hans": "登录", "zh_Hant": "登錄", "en": "" }];if (!it1.login) {
			_$temp = _node;{
				var _$parent6 = _$temp;var _node6 = { "attrs": {}, "tagName": "div", "sid": 4 };_node6.children = [];_node6.attrSize = 1;_node6.attrHash = 11508063;_node6.attrs["w-class"] = "body1";_$temp = _node6;{
					var _$parent7 = _$temp;var _node7 = { "attrs": {}, "tagName": "div", "sid": 5 };_node7.children = [];_node7.attrSize = 1;_node7.attrHash = 3684105357;_node7.attrs["ev-btn-tap"] = "createStandardClick";_$temp = _node7;{
						var _$parent8 = _$temp;var _node8 = { "attrs": {}, "tagName": "app-components1-btn-btn", "sid": 6 };_node8.hasChild = false;_node8.child = null;_node8.attrHash = 0;_$temp = _node8;{
							var _$parent9 = _$temp;var _node9 = {}; //jpair pre

							_node9["name"] = btnName[0];
							//jpair suf
							//jpair pre

							{
								var _jvalue = "";
								_jvalue = "big";
								//jpair suf

								_node9["types"] = _jvalue;
							}
							//jpair pre

							{
								var _jvalue2 = "";
								_jvalue2 = "blue";
								//jpair suf

								_node9["color"] = _jvalue2;
							}
							_addJson(_node9, _$parent9);
						}_chFunc(_node8);_$parent8.children.push(_node8);
					}_chFunc(_node7);_$parent7.children.push(_node7);
				}_$temp = _node6;{
					var _$parent10 = _$temp;var _node10 = { "attrs": {}, "tagName": "div", "sid": 7 };_node10.children = [];_node10.attrSize = 1;_node10.attrHash = 645858533;_node10.attrs["ev-btn-tap"] = "createByImgClick";_$temp = _node10;{
						var _$parent11 = _$temp;var _node11 = { "attrs": {}, "tagName": "app-components1-btn-btn", "sid": 8 };_node11.hasChild = false;_node11.child = null;_node11.attrHash = 0;_$temp = _node11;{
							var _$parent12 = _$temp;var _node12 = {}; //jpair pre

							_node12["name"] = btnName[1];
							//jpair suf
							//jpair pre

							{
								var _jvalue3 = "";
								_jvalue3 = "big";
								//jpair suf

								_node12["types"] = _jvalue3;
							}
							//jpair pre

							{
								var _jvalue4 = "";
								_jvalue4 = "white";
								//jpair suf

								_node12["color"] = _jvalue4;
							}
							_addJson(_node12, _$parent12);
						}_chFunc(_node11);_$parent11.children.push(_node11);
					}_chFunc(_node10);_$parent10.children.push(_node10);
				}_$temp = _node6;{
					var _$parent13 = _$temp;var _node13 = { "attrs": {}, "tagName": "div", "sid": 9 };_node13.children = [];_node13.attrSize = 1;_node13.attrHash = 2328172594;_node13.attrs["w-class"] = "container1";_$temp = _node13;{
						var _$parent14 = _$temp;var _node14 = { "attrs": {}, "tagName": "div", "sid": 10 };_node14.children = [];_node14.attrSize = 3;_node14.attrHash = 819543997;_node14.attrs["w-class"] = "box";_node14.attrs["on-tap"] = "switch2LoginClick";{
							var _attrvalue = "";_attrvalue += it1.accountList.length > 0 ? '' : 'width:0px;overflow: hidden;';_attrvalue += " ";_node14.attrs["style"] = _attrvalue;
						}_node14.attrHash = _hash.nextHash(_node14.attrHash, _calTextHash(_node14.attrs["style"]));_$temp = _node14;{
							var _$parent15 = _$temp;var _node15 = { "attrs": {}, "tagName": "img", "sid": 11 };_node15.children = [];_node15.childHash = 0;_node15.attrSize = 2;_node15.attrHash = 910427286;_node15.attrs["src"] = "../../../res/image/avatar1.png";_node15.attrs["w-class"] = "img-logo";_$parent15.children.push(_node15);
						}_$temp = _node14;{
							var _$parent16 = _$temp;var _node16 = { "attrs": {}, "tagName": "div", "sid": 12 };_node16.children = [];_node16.childHash = 3847231835;_node16.attrSize = 1;_node16.attrHash = 854203028;_node16.attrs["w-class"] = "tag";_$temp = _node16;{
								var _$parent17 = _$temp;var _node17 = { "attrs": {}, "tagName": "pi-ui-lang", "sid": 13 };_node17.hasChild = false;_node17.child = null;_node17.childHash = 1058301024;_node17.attrHash = 0;_$temp = _node17;{
									var _$parent18 = _$temp;var _node18 = {}; //jpair pre

									{
										var _jvalue5 = "";
										_jvalue5 = "登录账户";
										//jpair suf

										_node18["zh_Hans"] = _jvalue5;
									}
									//jpair pre

									{
										var _jvalue6 = "";
										_jvalue6 = "登錄賬戶";
										//jpair suf

										_node18["zh_Hant"] = _jvalue6;
									}
									//jpair pre

									{
										var _jvalue7 = "";
										_jvalue7 = "";
										//jpair suf

										_node18["en"] = _jvalue7;
									}
									_addJson(_node18, _$parent18);
								}_$parent17.children.push(_node17);
							}_$parent16.children.push(_node16);
						}_chFunc(_node14);_$parent14.children.push(_node14);
					}_$temp = _node13;{
						var _$parent19 = _$temp;var _node19 = { "attrs": {}, "tagName": "div", "sid": 14 };_node19.children = [];_node19.childHash = 3888567258;_node19.attrSize = 2;_node19.attrHash = 3628473572;_node19.attrs["w-class"] = "box";_node19.attrs["on-tap"] = "walletImportClicke";_$temp = _node19;{
							var _$parent20 = _$temp;var _node20 = { "attrs": {}, "tagName": "img", "sid": 15 };_node20.children = [];_node20.childHash = 0;_node20.attrSize = 2;_node20.attrHash = 1753000990;_node20.attrs["src"] = "../../../res/image/right_arrow2_blue.png";_node20.attrs["w-class"] = "img-logo";_$parent20.children.push(_node20);
						}_$temp = _node19;{
							var _$parent21 = _$temp;var _node21 = { "attrs": {}, "tagName": "div", "sid": 16 };_node21.children = [];_node21.childHash = 3180464484;_node21.attrSize = 1;_node21.attrHash = 854203028;_node21.attrs["w-class"] = "tag";_$temp = _node21;{
								var _$parent22 = _$temp;var _node22 = { "attrs": {}, "tagName": "pi-ui-lang", "sid": 17 };_node22.hasChild = false;_node22.child = null;_node22.childHash = 1206446403;_node22.attrHash = 0;_$temp = _node22;{
									var _$parent23 = _$temp;var _node23 = {}; //jpair pre

									{
										var _jvalue8 = "";
										_jvalue8 = "已有账户";
										//jpair suf

										_node23["zh_Hans"] = _jvalue8;
									}
									//jpair pre

									{
										var _jvalue9 = "";
										_jvalue9 = "已有賬戶";
										//jpair suf

										_node23["zh_Hant"] = _jvalue9;
									}
									//jpair pre

									{
										var _jvalue10 = "";
										_jvalue10 = "";
										//jpair suf

										_node23["en"] = _jvalue10;
									}
									_addJson(_node23, _$parent23);
								}_$parent22.children.push(_node22);
							}_$parent21.children.push(_node21);
						}_$parent19.children.push(_node19);
					}_chFunc(_node13);_$parent13.children.push(_node13);
				}_chFunc(_node6);_$parent6.children.push(_node6);
			}
		} else {
			_$temp = _node;{
				var _$parent24 = _$temp;var _node24 = { "attrs": {}, "tagName": "div", "sid": 18 };_node24.children = [];_node24.attrSize = 1;_node24.attrHash = 2954003511;_node24.attrs["w-class"] = "body2";_$temp = _node24;{
					var _$parent25 = _$temp;var _node25 = { "attrs": {}, "tagName": "div", "sid": 19 };_node25.children = [];_node25.attrSize = 1;_node25.attrHash = 3830009169;_node25.attrs["w-class"] = "users";_$temp = _node25;{
						var _$parent26 = _$temp;var _node26 = { "attrs": {}, "tagName": "div", "sid": 20 };_node26.children = [];_node26.attrSize = 2;_node26.attrHash = 724870780;_node26.attrs["w-class"] = "user-item";_node26.attrs["on-tap"] = "popMoreUser";_$temp = _node26;{
							var _$parent27 = _$temp;var _node27 = { "attrs": {}, "tagName": "img", "sid": 21 };_node27.children = [];_node27.childHash = 0;_node27.attrSize = 2;_node27.attrHash = 1615159661;_node27.attrs["src"] = "../../../res/image1/default_avatar.png";_node27.attrs["w-class"] = "avatar";_$parent27.children.push(_node27);
						}_$temp = _node26;{
							var _$parent28 = _$temp;var _node28 = { "attrs": {}, "tagName": "div", "sid": 22 };_node28.children = [];_node28.attrSize = 1;_node28.attrHash = 1540292426;_node28.attrs["w-class"] = "name";_$temp = _node28;{
								var _$parent29 = _$temp;_addText(it1.accountList[it1.selectedAccountIndex].nickName, _$parent29);
							}_chFunc(_node28);_$parent28.children.push(_node28);
						}_$temp = _node26;{
							var _$parent30 = _$temp;var _node29 = { "attrs": {}, "tagName": "img", "sid": 23 };_node29.children = [];_node29.childHash = 0;_node29.attrSize = 2;_node29.attrHash = 2789755987;_node29.attrs["src"] = "../../../res/image/40.png";_node29.attrs["w-class"] = "more";_$parent30.children.push(_node29);
						}_chFunc(_node26);_$parent26.children.push(_node26);
					}_$temp = _node25;{
						var _$parent31 = _$temp;var _node30 = { "attrs": {}, "tagName": "div", "sid": 24 };_node30.children = [];_node30.attrSize = 2;_node30.attrHash = 2723255491;_node30.attrs["w-class"] = "pop-box";{
							var _attrvalue2 = "";_attrvalue2 += "height:";_attrvalue2 += it1.showMoreUser ? it1.popHeight : 0;_attrvalue2 += "px; ";_attrvalue2 += it1.forceCloseMoreUser ? 'display:none;' : '';_attrvalue2 += " ";_node30.attrs["style"] = _attrvalue2;
						}_node30.attrHash = _hash.nextHash(_node30.attrHash, _calTextHash(_node30.attrs["style"]));{
							var _$i = 0;
							for (var _iterator = it1.accountList, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator]();;) {
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
								var index = _$i++;_$temp = _node30;{
									var _$parent32 = _$temp;var _node31 = { "attrs": {}, "tagName": "div", "sid": 25 };_node31.children = [];_node31.attrSize = 2;_node31.attrHash = 1094829726;_node31.attrs["w-class"] = "user-item2";{
										var _attrvalue3 = "";_attrvalue3 += "chooseCurUser(e,";_attrvalue3 += index;_attrvalue3 += ")";_node31.attrs["on-tap"] = _attrvalue3;
									}_node31.attrHash = _hash.nextHash(_node31.attrHash, _calTextHash(_node31.attrs["on-tap"]));_$temp = _node31;{
										var _$parent33 = _$temp;var _node32 = { "attrs": {}, "tagName": "img", "sid": 26 };_node32.children = [];_node32.childHash = 0;_node32.attrSize = 2;_node32.attrHash = 1615159661;_node32.attrs["src"] = "../../../res/image1/default_avatar.png";_node32.attrs["w-class"] = "avatar";_$parent33.children.push(_node32);
									}_$temp = _node31;{
										var _$parent34 = _$temp;var _node33 = { "attrs": {}, "tagName": "div", "sid": 27 };_node33.children = [];_node33.attrSize = 1;_node33.attrHash = 1540292426;_node33.attrs["w-class"] = "name";_$temp = _node33;{
											var _$parent35 = _$temp;_addText(item.nickName, _$parent35);
										}_chFunc(_node33);_$parent34.children.push(_node33);
									}_$temp = _node31;{
										var _$parent36 = _$temp;var _node34 = { "attrs": {}, "tagName": "img", "sid": 28 };_node34.children = [];_node34.attrSize = 3;_node34.attrHash = 4127729086;_node34.attrs["src"] = "../../../res/image/30_gray.png";_node34.attrs["w-class"] = "del";{
											var _attrvalue4 = "";_attrvalue4 += "delUserAccount(e,";_attrvalue4 += index;_attrvalue4 += ")";_node34.attrs["on-tap"] = _attrvalue4;
										}_node34.attrHash = _hash.nextHash(_node34.attrHash, _calTextHash(_node34.attrs["on-tap"]));_chFunc(_node34);_$parent36.children.push(_node34);
									}_chFunc(_node31);_$parent32.children.push(_node31);
								}
							}
						}_chFunc(_node30);_$parent31.children.push(_node30);
					}_chFunc(_node25);_$parent25.children.push(_node25);
				}_$temp = _node24;{
					var _$parent37 = _$temp;var _node35 = { "attrs": {}, "tagName": "div", "sid": 29 };_node35.children = [];_node35.attrSize = 2;_node35.attrHash = 1779016273;_node35.attrs["w-class"] = "input-father";_node35.attrs["ev-input-change"] = "pswChange";inputHolder = { "zh_Hans": "输入密码", "zh_Hant": "輸入密碼", "en": "" };_$temp = _node35;{
						var _$parent38 = _$temp;var _node36 = { "attrs": {}, "tagName": "app-components1-input-input", "sid": 30 };_node36.hasChild = false;_node36.child = null;_node36.attrHash = 0;_$temp = _node36;{
							var _$parent39 = _$temp;var _node37 = {}; //jpair pre

							_node37["placeHolder"] = inputHolder;
							//jpair suf
							//jpair pre

							{
								var _jvalue11 = "";
								_jvalue11 = "password";
								//jpair suf

								_node37["itype"] = _jvalue11;
							}
							_addJson(_node37, _$parent39);
						}_chFunc(_node36);_$parent38.children.push(_node36);
					}_chFunc(_node35);_$parent37.children.push(_node35);
				}_$temp = _node24;{
					var _$parent40 = _$temp;var _node38 = { "attrs": {}, "tagName": "div", "sid": 31 };_node38.children = [];_node38.attrSize = 1;_node38.attrHash = 2282462389;_node38.attrs["ev-btn-tap"] = "loginClick";_$temp = _node38;{
						var _$parent41 = _$temp;var _node39 = { "attrs": {}, "tagName": "app-components1-btn-btn", "sid": 32 };_node39.hasChild = false;_node39.child = null;_node39.attrHash = 0;_$temp = _node39;{
							var _$parent42 = _$temp;var _node40 = {}; //jpair pre

							_node40["name"] = btnName[2];
							//jpair suf
							//jpair pre

							{
								var _jvalue12 = "";
								_jvalue12 = "big";
								//jpair suf

								_node40["types"] = _jvalue12;
							}
							//jpair pre

							{
								var _jvalue13 = "";
								_jvalue13 = "blue";
								//jpair suf

								_node40["color"] = _jvalue13;
							}
							_addJson(_node40, _$parent42);
						}_chFunc(_node39);_$parent41.children.push(_node39);
					}_chFunc(_node38);_$parent40.children.push(_node38);
				}_$temp = _node24;{
					var _$parent43 = _$temp;var _node41 = { "attrs": {}, "tagName": "div", "sid": 33 };_node41.children = [];_node41.childHash = 3410797048;_node41.attrSize = 1;_node41.attrHash = 3521403677;_node41.attrs["w-class"] = "container2";_$temp = _node41;{
						var _$parent44 = _$temp;var _node42 = { "attrs": {}, "tagName": "div", "sid": 34 };_node42.children = [];_node42.childHash = 409181409;_node42.attrSize = 2;_node42.attrHash = 3394104043;_node42.attrs["w-class"] = "box";_node42.attrs["on-tap"] = "switch2CreateClick";_$temp = _node42;{
							var _$parent45 = _$temp;var _node43 = { "attrs": {}, "tagName": "img", "sid": 35 };_node43.children = [];_node43.childHash = 0;_node43.attrSize = 2;_node43.attrHash = 910427286;_node43.attrs["src"] = "../../../res/image/avatar1.png";_node43.attrs["w-class"] = "img-logo";_$parent45.children.push(_node43);
						}_$temp = _node42;{
							var _$parent46 = _$temp;var _node44 = { "attrs": {}, "tagName": "div", "sid": 36 };_node44.children = [];_node44.childHash = 1057323019;_node44.attrSize = 1;_node44.attrHash = 854203028;_node44.attrs["w-class"] = "tag";_$temp = _node44;{
								var _$parent47 = _$temp;var _node45 = { "attrs": {}, "tagName": "pi-ui-lang", "sid": 37 };_node45.hasChild = false;_node45.child = null;_node45.childHash = 3940929621;_node45.attrHash = 0;_$temp = _node45;{
									var _$parent48 = _$temp;var _node46 = {}; //jpair pre

									{
										var _jvalue14 = "";
										_jvalue14 = "创建新账户";
										//jpair suf

										_node46["zh_Hans"] = _jvalue14;
									}
									//jpair pre

									{
										var _jvalue15 = "";
										_jvalue15 = "創建新賬戶";
										//jpair suf

										_node46["zh_Hant"] = _jvalue15;
									}
									//jpair pre

									{
										var _jvalue16 = "";
										_jvalue16 = "";
										//jpair suf

										_node46["en"] = _jvalue16;
									}
									_addJson(_node46, _$parent48);
								}_$parent47.children.push(_node45);
							}_$parent46.children.push(_node44);
						}_$parent44.children.push(_node42);
					}_$temp = _node41;{
						var _$parent49 = _$temp;var _node47 = { "attrs": {}, "tagName": "div", "sid": 38 };_node47.children = [];_node47.childHash = 3888567258;_node47.attrSize = 2;_node47.attrHash = 3628473572;_node47.attrs["w-class"] = "box";_node47.attrs["on-tap"] = "walletImportClicke";_$temp = _node47;{
							var _$parent50 = _$temp;var _node48 = { "attrs": {}, "tagName": "img", "sid": 39 };_node48.children = [];_node48.childHash = 0;_node48.attrSize = 2;_node48.attrHash = 1753000990;_node48.attrs["src"] = "../../../res/image/right_arrow2_blue.png";_node48.attrs["w-class"] = "img-logo";_$parent50.children.push(_node48);
						}_$temp = _node47;{
							var _$parent51 = _$temp;var _node49 = { "attrs": {}, "tagName": "div", "sid": 40 };_node49.children = [];_node49.childHash = 3180464484;_node49.attrSize = 1;_node49.attrHash = 854203028;_node49.attrs["w-class"] = "tag";_$temp = _node49;{
								var _$parent52 = _$temp;var _node50 = { "attrs": {}, "tagName": "pi-ui-lang", "sid": 41 };_node50.hasChild = false;_node50.child = null;_node50.childHash = 1206446403;_node50.attrHash = 0;_$temp = _node50;{
									var _$parent53 = _$temp;var _node51 = {}; //jpair pre

									{
										var _jvalue17 = "";
										_jvalue17 = "已有账户";
										//jpair suf

										_node51["zh_Hans"] = _jvalue17;
									}
									//jpair pre

									{
										var _jvalue18 = "";
										_jvalue18 = "已有賬戶";
										//jpair suf

										_node51["zh_Hant"] = _jvalue18;
									}
									//jpair pre

									{
										var _jvalue19 = "";
										_jvalue19 = "";
										//jpair suf

										_node51["en"] = _jvalue19;
									}
									_addJson(_node51, _$parent53);
								}_$parent52.children.push(_node50);
							}_$parent51.children.push(_node49);
						}_$parent49.children.push(_node47);
					}_$parent43.children.push(_node41);
				}_chFunc(_node24);_$parent24.children.push(_node24);
			}
		}_chFunc(_node);return _node;
	}
});