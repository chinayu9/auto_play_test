(function (_cfg, it, it1) {
	var _$temp = void 0,
	    node = void 0;_$temp = node;{
		var _$parent = _$temp;var _node = { "attrs": {}, "tagName": "div", "sid": 0 };_node.children = [];_node.attrSize = 2;_node.attrHash = 1579271828;_node.attrs["class"] = "new-page";{
			var attrvalue = "";attrvalue += "mine ";attrvalue += it1.close ? 'mineHide' : '';attrvalue += "";_node.attrs["w-class"] = attrvalue;
		}_node.attrHash = _hash.nextHash(_node.attrHash, _calTextHash(_node.attrs["w-class"]));_$temp = _node;{
			var _$parent2 = _$temp;var _node2 = { "attrs": {}, "tagName": "div", "sid": 1 };_node2.children = [];_node2.attrSize = 1;_node2.attrHash = 3605533161;{
				var _attrvalue = "";_attrvalue += "left ";_attrvalue += it1.close ? 'leftHide' : '';_attrvalue += "";_node2.attrs["w-class"] = _attrvalue;
			}_node2.attrHash = _hash.nextHash(_node2.attrHash, _calTextHash(_node2.attrs["w-class"]));_$temp = _node2;{
				var _$parent3 = _$temp;var _node3 = { "attrs": {}, "tagName": "div", "sid": 2 };_node3.children = [];_node3.attrSize = 1;_node3.attrHash = 2188685783;_node3.attrs["w-class"] = "topBack";_$temp = _node3;{
					var _$parent4 = _$temp;var _node4 = { "attrs": {}, "tagName": "widget", "sid": 3 };_node4.hasChild = false;_node4.child = null;_node4.attrSize = 2;_node4.attrHash = 55114396;_node4.attrs["w-tag"] = "app-components1-img-img";_node4.tagName = _node4.attrs["w-tag"];_node4.attrs["w-class"] = "userHead";_node4.attrs["on-tap"] = "login";_$temp = _node4;{
						var _$parent5 = _$temp;var _node5 = {}; //jpair pre

						_node5["imgURL"] = it1.avatar;
						//jpair suf
						//jpair pre

						{
							var jvalue = "";
							jvalue = "120px;";
							//jpair suf

							_node5["width"] = jvalue;
						}
						_addJson(_node5, _$parent5);
					}_chFunc(_node4);_$parent4.children.push(_node4);
				}_$temp = _node3;{
					var _$parent6 = _$temp;var _node6 = { "attrs": {}, "tagName": "img", "sid": 4 };_node6.children = [];_node6.childHash = 0;_node6.attrSize = 2;_node6.attrHash = 3480930167;_node6.attrs["src"] = "../../../res/image1/topbar_backimg.png";_node6.attrs["w-class"] = "backImg";_$parent6.children.push(_node6);
				}if (it1.hasWallet) {
					_$temp = _node3;{
						var _$parent7 = _$temp;var _node7 = { "attrs": {}, "tagName": "div", "sid": 5 };_node7.children = [];_node7.childHash = 2372202844;_node7.attrSize = 1;_node7.attrHash = 3109599029;_node7.attrs["w-class"] = "addFriend";_$temp = _node7;{
							var _$parent8 = _$temp;var _node8 = { "attrs": {}, "tagName": "img", "sid": 6 };_node8.children = [];_node8.childHash = 0;_node8.attrSize = 3;_node8.attrHash = 2699503542;_node8.attrs["src"] = "../../../res/image/01.png";_node8.attrs["w-class"] = "scanImg";_node8.attrs["on-tap"] = "scanQrcode";_$parent8.children.push(_node8);
						}_$temp = _node7;{
							var _$parent9 = _$temp;var _node9 = { "attrs": {}, "tagName": "img", "sid": 7 };_node9.children = [];_node9.childHash = 0;_node9.attrSize = 3;_node9.attrHash = 188109943;_node9.attrs["src"] = "../../../res/image/19.png";_node9.attrs["w-class"] = "scanImg";_node9.attrs["on-tap"] = "showMyQrcode";_$parent9.children.push(_node9);
						}_$parent7.children.push(_node7);
					}_$temp = _node3;{
						var _$parent10 = _$temp;var _node10 = { "attrs": {}, "tagName": "div", "sid": 8 };_node10.children = [];_node10.attrSize = 1;_node10.attrHash = 4232090967;_node10.attrs["w-class"] = "userName";_$temp = _node10;{
							var _$parent11 = _$temp;_addText(it1.userName, _$parent11);
						}if (it1.offline) {
							_$temp = _node10;{
								var _$parent12 = _$temp;var _node11 = { "attrs": {}, "tagName": "widget", "sid": 9 };_node11.hasChild = false;_node11.child = null;_node11.childHash = 907704923;_node11.attrSize = 1;_node11.attrHash = 1927727582;_node11.attrs["w-tag"] = "pi-ui-lang";_node11.tagName = _node11.attrs["w-tag"];_node11.attrs["w-class"] = "offline";_$temp = _node11;{
									var _$parent13 = _$temp;var _node12 = {}; //jpair pre

									{
										var _jvalue = "";
										_jvalue = "离线";
										//jpair suf

										_node12["zh_Hans"] = _jvalue;
									}
									//jpair pre

									{
										var _jvalue2 = "";
										_jvalue2 = "離線";
										//jpair suf

										_node12["zh_Hant"] = _jvalue2;
									}
									//jpair pre

									{
										var _jvalue3 = "";
										_jvalue3 = "Offline";
										//jpair suf

										_node12["en"] = _jvalue3;
									}
									_addJson(_node12, _$parent13);
								}_$parent12.children.push(_node11);
							}
						}_chFunc(_node10);_$parent10.children.push(_node10);
					}_$temp = _node3;{
						var _$parent14 = _$temp;var _node13 = { "attrs": {}, "tagName": "div", "sid": 10 };_node13.children = [];_node13.attrSize = 2;_node13.attrHash = 3708489470;_node13.attrs["w-class"] = "address";_node13.attrs["on-tap"] = "copyAddr";_$temp = _node13;{
							var _$parent15 = _$temp;var _node14 = { "attrs": {}, "tagName": "span", "sid": 11 };_node14.children = [];_node14.attrSize = 1;_node14.attrHash = 1633402939;_node14.attrs["w-class"] = "addrNum";_$temp = _node14;{
								var _$parent16 = _$temp;_addText(it1.address, _$parent16);
							}_chFunc(_node14);_$parent15.children.push(_node14);
						}_$temp = _node13;{
							var _$parent17 = _$temp;var _node15 = { "attrs": {}, "tagName": "img", "sid": 12 };_node15.children = [];_node15.childHash = 0;_node15.attrSize = 3;_node15.attrHash = 4156068199;_node15.attrs["src"] = "../../../res/image/copy_write.png";_node15.attrs["width"] = "40px";_node15.attrs["w-class"] = "copy";_$parent17.children.push(_node15);
						}_chFunc(_node13);_$parent14.children.push(_node13);
					}
				} else {
					_$temp = _node3;{
						var _$parent18 = _$temp;var _node16 = { "attrs": {}, "tagName": "div", "sid": 13 };_node16.children = [];_node16.childHash = 3089136988;_node16.attrSize = 1;_node16.attrHash = 4232090967;_node16.attrs["w-class"] = "userName";_$temp = _node16;{
							var _$parent19 = _$temp;var _node17 = { "attrs": {}, "tagName": "pi-ui-lang", "sid": 14 };_node17.hasChild = false;_node17.child = null;_node17.childHash = 3847475710;_node17.attrHash = 0;_$temp = _node17;{
								var _$parent20 = _$temp;var _node18 = {}; //jpair pre

								{
									var _jvalue4 = "";
									_jvalue4 = "点击头像登录";
									//jpair suf

									_node18["zh_Hans"] = _jvalue4;
								}
								//jpair pre

								{
									var _jvalue5 = "";
									_jvalue5 = "點擊頭像登錄";
									//jpair suf

									_node18["zh_Hant"] = _jvalue5;
								}
								//jpair pre

								{
									var _jvalue6 = "";
									_jvalue6 = "";
									//jpair suf

									_node18["en"] = _jvalue6;
								}
								_addJson(_node18, _$parent20);
							}_$parent19.children.push(_node17);
						}_$parent18.children.push(_node16);
					}
				}_chFunc(_node3);_$parent3.children.push(_node3);
			}_$temp = _node2;{
				var _$parent21 = _$temp;var _node19 = { "attrs": {}, "tagName": "div", "sid": 15 };_node19.children = [];_node19.attrSize = 1;_node19.attrHash = 1387585091;_node19.attrs["w-class"] = "leftContent";itemName = [{ "zh_Hans": "账户", "zh_Hant": "賬戶", "en": "" }, { "zh_Hans": "帮助", "zh_Hant": "幫助", "en": "" }, { "zh_Hans": "设置", "zh_Hant": "設置", "en": "" }, { "zh_Hans": "联系我们", "zh_Hant": "聯繫我們", "en": "" }, { "zh_Hans": "关于" + it1.walletName, "zh_Hant": "關於" + it1.walletName, "en": "" }, { "zh_Hans": "GitHub Repository", "zh_Hant": "GitHub Repository", "en": "" }];{
					var _$i = 0;
					for (var _iterator = it1.list, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator]();;) {
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
						var ind = _$i++;_$temp = _node19;{
							var _$parent22 = _$temp;var _node20 = { "attrs": {}, "tagName": "div", "sid": 16 };_node20.children = [];_node20.attrSize = 2;_node20.attrHash = 3537545609;_node20.attrs["w-class"] = "item";{
								var _attrvalue2 = "";_attrvalue2 += "itemClick(";_attrvalue2 += ind;_attrvalue2 += ")";_node20.attrs["on-tap"] = _attrvalue2;
							}_node20.attrHash = _hash.nextHash(_node20.attrHash, _calTextHash(_node20.attrs["on-tap"]));_$temp = _node20;{
								var _$parent23 = _$temp;var _node21 = { "attrs": {}, "tagName": "img", "sid": 17 };_node21.children = [];_node21.attrSize = 2;_node21.attrHash = 1062230525;{
									var _attrvalue3 = "";_attrvalue3 = val.img;_node21.attrs["src"] = _attrvalue3;
								}_node21.attrHash = _hash.nextHash(_node21.attrHash, _calTextHash(_node21.attrs["src"]));_node21.attrs["w-class"] = "itemImg";_chFunc(_node21);_$parent23.children.push(_node21);
							}_$temp = _node20;{
								var _$parent24 = _$temp;var _node22 = { "attrs": {}, "tagName": "span", "sid": 18 };_node22.children = [];_node22.attrSize = 1;_node22.attrHash = 136397174;_node22.attrs["w-class"] = "itemName";_$temp = _node22;{
									var _$parent25 = _$temp;var _node23 = { "attrs": {}, "tagName": "pi-ui-lang", "sid": 19 };_node23.hasChild = false;_node23.child = null;_node23.attrHash = 0;_$temp = _node23;{
										var _$parent26 = _$temp;_addJson(itemName[ind], _$parent26);
									}_chFunc(_node23);_$parent25.children.push(_node23);
								}_chFunc(_node22);_$parent24.children.push(_node22);
							}if (ind == 0 && !it1.hasBackupMnemonic && it1.hasWallet) {
								_$temp = _node20;{
									var _$parent27 = _$temp;var _node24 = { "attrs": {}, "tagName": "div", "sid": 20 };_node24.children = [];_node24.childHash = 3886981264;_node24.attrSize = 2;_node24.attrHash = 2038303220;_node24.attrs["w-class"] = "backup";_node24.attrs["on-tap"] = "backUp";_$temp = _node24;{
										var _$parent28 = _$temp;var _node25 = { "attrs": {}, "tagName": "pi-ui-lang", "sid": 21 };_node25.hasChild = false;_node25.child = null;_node25.childHash = 3258035880;_node25.attrHash = 0;_$temp = _node25;{
											var _$parent29 = _$temp;var _node26 = {}; //jpair pre

											{
												var _jvalue7 = "";
												_jvalue7 = "备份";
												//jpair suf

												_node26["zh_Hans"] = _jvalue7;
											}
											//jpair pre

											{
												var _jvalue8 = "";
												_jvalue8 = "備份";
												//jpair suf

												_node26["zh_Hant"] = _jvalue8;
											}
											//jpair pre

											{
												var _jvalue9 = "";
												_jvalue9 = "";
												//jpair suf

												_node26["en"] = _jvalue9;
											}
											_addJson(_node26, _$parent29);
										}_$parent28.children.push(_node25);
									}_$parent27.children.push(_node24);
								}
							}_chFunc(_node20);_$parent22.children.push(_node20);
						}if (ind == 2) {
							_$temp = _node19;{
								var _$parent30 = _$temp;var _node27 = { "attrs": {}, "tagName": "div", "sid": 22 };_node27.children = [];_node27.childHash = 2946814719;_node27.attrSize = 1;_node27.attrHash = 374818280;_node27.attrs["w-class"] = "line";_$parent30.children.push(_node27);
							}
						}
					}
				}_chFunc(_node19);_$parent21.children.push(_node19);
			}_chFunc(_node2);_$parent2.children.push(_node2);
		}_$temp = _node;{
			var _$parent31 = _$temp;var _node28 = { "attrs": {}, "tagName": "div", "sid": 23 };_node28.children = [];_node28.childHash = 2946814719;_node28.attrSize = 2;_node28.attrHash = 1646668145;_node28.attrs["w-class"] = "right";_node28.attrs["on-tap"] = "closePage";_$parent31.children.push(_node28);
		}_chFunc(_node);return _node;
	}
});