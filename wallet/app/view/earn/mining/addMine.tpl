(function (_cfg, it, it1) {
	var _$temp = void 0,
	    node = void 0;_$temp = node;{
		var _$parent = _$temp;var _node = { "attrs": {}, "tagName": "div", "sid": 0 };_node.children = [];_node.attrSize = 3;_node.attrHash = 3437572703;_node.attrs["class"] = "new-page";_node.attrs["w-class"] = "new-page";_node.attrs["ev-back-click"] = "backPrePage";topBarTitle = { "zh_Hans": "排名", "zh_Hant": "排名", "en": "" };_$temp = _node;{
			var _$parent2 = _$temp;var _node2 = { "attrs": {}, "tagName": "app-components1-topBar-topBar", "sid": 1 };_node2.hasChild = false;_node2.child = null;_node2.attrHash = 0;_$temp = _node2;{
				var _$parent3 = _$temp;var _node3 = {}; //jpair pre

				_node3["title"] = topBarTitle;
				//jpair suf
				_addJson(_node3, _$parent3);
			}_chFunc(_node2);_$parent2.children.push(_node2);
		}_$temp = _node;{
			var _$parent4 = _$temp;var _node4 = { "attrs": {}, "tagName": "div", "sid": 2 };_node4.children = [];_node4.attrSize = 1;_node4.attrHash = 231055359;_node4.attrs["style"] = "overflow-y: auto;overflow-x: hidden;flex: 1 0 0;-webkit-overflow-scrolling: touch;scroll-behavior: smooth;";_$temp = _node4;{
				var _$parent5 = _$temp;var _node5 = { "attrs": {}, "tagName": "div", "sid": 3 };_node5.children = [];_node5.attrSize = 1;_node5.attrHash = 487306359;_node5.attrs["w-class"] = "content";btnName = { "zh_Hans": "做任务", "zh_Hant": "做任務", "en": "" };addMineList = [{ itemName: { "zh_Hans": "创建钱包", "zh_Hant": "創建錢包", "en": "" }, itemShort: { "zh_Hans": "矿储量+300KT", "zh_Hant": "礦儲量+300KT", "en": "" }, itemDetail: { "zh_Hans": "创建钱包送300KT", "zh_Hant": "創建錢包贈送300KT", "en": "" } }, { itemName: { "zh_Hans": "验证手机号", "zh_Hant": "驗證手機號", "en": "" }, itemShort: { "zh_Hans": "矿储量+2500KT", "zh_Hant": "礦儲量+2500KT", "en": "" }, itemDetail: { "zh_Hans": "手机号注册可提现，额外赠送2500KT", "zh_Hant": "手機號註冊可提現，額外贈送2500KT", "en": "" } }, { itemName: { "zh_Hans": "存币送KT", "zh_Hant": "存幣送KT", "en": "" }, itemShort: { "zh_Hans": "矿储量+1000KT", "zh_Hant": "礦儲量+1000KT", "en": "" }, itemDetail: { "zh_Hans": "存币到自己的钱包地址，首次存币送1000KT，2-4个送2000KT，4-8个送4000KT，8-16个送6000KT，16-32个送8000KT,32以上送10000KT封顶。", "zh_Hant": "存幣到自己的錢包地址，首次存幣送1000KT，2-4個送2000KT，4-8個送4000KT，8-16個送6000KT，16-32個送8000KT,32以上送10000KT封頂。", "en": "" } }, { itemName: { "zh_Hans": "与好友分享", "zh_Hant": "與好友分享", "en": "" }, itemShort: { "zh_Hans": "一起分享0.5ETH", "zh_Hant": "一起分享0.5ETH", "en": "" }, itemDetail: { "zh_Hans": "成功邀请一人送500KT和0.01ETH。成功的标准是对方达到1000KT。", "zh_Hant": "成功邀請一人送500KT和0.01ETH。成功的標準是對方達到1000KT。", "en": "" } }, { itemName: { "zh_Hans": "购买理财", "zh_Hant": "購買理財", "en": "" }, itemShort: { "zh_Hans": "首次购买额外+1500KT", "zh_Hant": "首次購買額外+1500KT", "en": "" }, itemDetail: { "zh_Hans": "每购买1ETH等价的理财产品每天送100KT，购买当日额外赠送500KT，首次购买额外赠送1500KT，总量封顶", "zh_Hant": "每購買1ETH等價的理財產品每天送100KT，購買當日額外贈送500KT，首次購買額外贈送1500KT，總量封頂", "en": "" } }, { itemName: { "zh_Hans": "聊天", "zh_Hant": "聊天", "en": "" }, itemShort: { "zh_Hans": "聊天+700KT", "zh_Hant": "聊天+700KT", "en": "" }, itemDetail: { "zh_Hans": "首次参与聊天赠送700KT", "zh_Hant": "首次參與聊天贈送700KT", "en": "" } }];{
					var _$i = 0;
					for (var _iterator = it1.data, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator]();;) {
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
						var ind = _$i++;if (val.modulIsShow) {
							_$temp = _node5;{
								var _$parent6 = _$temp;var _node6 = { "attrs": {}, "tagName": "div", "sid": 4 };_node6.children = [];_node6.attrSize = 2;_node6.attrHash = 767848974;{
									var attrvalue = "";attrvalue += "show(";attrvalue += ind;attrvalue += ")";_node6.attrs["on-tap"] = attrvalue;
								}_node6.attrHash = _hash.nextHash(_node6.attrHash, _calTextHash(_node6.attrs["on-tap"]));{
									var _attrvalue = "";_attrvalue += "goDetail(";_attrvalue += ind;_attrvalue += ")";_node6.attrs["ev-imgAndBtn-tap"] = _attrvalue;
								}_node6.attrHash = _hash.nextHash(_node6.attrHash, _calTextHash(_node6.attrs["ev-imgAndBtn-tap"]));_$temp = _node6;{
									var _$parent7 = _$temp;var _node7 = { "attrs": {}, "tagName": "app-components-imgAndBtnItem-imgAndBtnItem", "sid": 5 };_node7.hasChild = false;_node7.child = null;_node7.attrHash = 0;_$temp = _node7;{
										var _$parent8 = _$temp;var _node8 = {}; //jpair pre

										_node8["name"] = addMineList[ind].itemName;
										//jpair suf
										//jpair pre

										_node8["describe"] = addMineList[ind].itemShort;
										//jpair suf
										//jpair pre

										_node8["img"] = val.itemImg;
										//jpair suf
										//jpair pre

										_node8["btnName"] = btnName;
										//jpair suf
										//jpair pre

										_node8["isComplete"] = val.isComplete;
										//jpair suf
										_addJson(_node8, _$parent8);
									}_chFunc(_node7);_$parent7.children.push(_node7);
								}if (val.detailShow) {
									_$temp = _node6;{
										var _$parent9 = _$temp;var _node9 = { "attrs": {}, "tagName": "div", "sid": 6 };_node9.children = [];_node9.attrSize = 1;_node9.attrHash = 3095917008;_node9.attrs["w-class"] = "itemDetail";if (val.itemJump === 'shareFriend') {
											_$temp = _node9;{
												var _$parent10 = _$temp;var _node10 = { "attrs": {}, "tagName": "div", "sid": 7 };_node10.children = [];_node10.attrSize = 1;_node10.attrHash = 1160771876;_node10.attrs["w-class"] = "itemCompleteDetail";_$temp = _node10;{
													var _$parent11 = _$temp;var _node11 = { "attrs": {}, "tagName": "span", "sid": 8 };_node11.children = [];_node11.attrHash = 0;_$temp = _node11;{
														var _$parent12 = _$temp;var _node12 = { "attrs": {}, "tagName": "pi-ui-lang", "sid": 9 };_node12.hasChild = false;_node12.child = null;_node12.childHash = 331235037;_node12.attrHash = 0;_$temp = _node12;{
															var _$parent13 = _$temp;var _node13 = {}; //jpair pre

															{
																var jvalue = "";
																jvalue = "已成功：";
																//jpair suf

																_node13["zh_Hans"] = jvalue;
															}
															//jpair pre

															{
																var _jvalue = "";
																_jvalue = "已成功：";
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
															_addJson(_node13, _$parent13);
														}_$parent12.children.push(_node12);
													}_$temp = _node11;{
														var _$parent14 = _$temp;_addText(val.itemKT / 500, _$parent14);
													}_$temp = _node11;{
														var _$parent15 = _$temp;var _node14 = { "attrs": {}, "tagName": "pi-ui-lang", "sid": 10 };_node14.hasChild = false;_node14.child = null;_node14.childHash = 2534891457;_node14.attrHash = 0;_$temp = _node14;{
															var _$parent16 = _$temp;var _node15 = {}; //jpair pre

															{
																var _jvalue3 = "";
																_jvalue3 = "人";
																//jpair suf

																_node15["zh_Hans"] = _jvalue3;
															}
															//jpair pre

															{
																var _jvalue4 = "";
																_jvalue4 = "人";
																//jpair suf

																_node15["zh_Hant"] = _jvalue4;
															}
															//jpair pre

															{
																var _jvalue5 = "";
																_jvalue5 = "";
																//jpair suf

																_node15["en"] = _jvalue5;
															}
															_addJson(_node15, _$parent16);
														}_$parent15.children.push(_node14);
													}_chFunc(_node11);_$parent11.children.push(_node11);
												}_$temp = _node10;{
													var _$parent17 = _$temp;var _node16 = { "attrs": {}, "tagName": "span", "sid": 11 };_node16.children = [];_node16.attrHash = 0;_$temp = _node16;{
														var _$parent18 = _$temp;var _node17 = { "attrs": {}, "tagName": "pi-ui-lang", "sid": 12 };_node17.hasChild = false;_node17.child = null;_node17.childHash = 3042369646;_node17.attrHash = 0;_$temp = _node17;{
															var _$parent19 = _$temp;var _node18 = {}; //jpair pre

															{
																var _jvalue6 = "";
																_jvalue6 = "已获得：";
																//jpair suf

																_node18["zh_Hans"] = _jvalue6;
															}
															//jpair pre

															{
																var _jvalue7 = "";
																_jvalue7 = "已獲得：";
																//jpair suf

																_node18["zh_Hant"] = _jvalue7;
															}
															//jpair pre

															{
																var _jvalue8 = "";
																_jvalue8 = "";
																//jpair suf

																_node18["en"] = _jvalue8;
															}
															_addJson(_node18, _$parent19);
														}_$parent18.children.push(_node17);
													}_$temp = _node16;{
														var _$parent20 = _$temp;_addText(val.itemKT, _$parent20);
													}_$temp = _node16;{
														var _$parent21 = _$temp;var _node19 = _installText("KT&nbsp;/&nbsp;", 691503721);;
														_$parent21.children.push(_node19);
													}_$temp = _node16;{
														var _$parent22 = _$temp;_addText(val.itemKT / 500 * 0.01, _$parent22);
													}_$temp = _node16;{
														var _$parent23 = _$temp;var _node20 = _installText("ETH", 2066775836);;
														_$parent23.children.push(_node20);
													}_chFunc(_node16);_$parent17.children.push(_node16);
												}_chFunc(_node10);_$parent10.children.push(_node10);
											}
										}_$temp = _node9;{
											var _$parent24 = _$temp;var _node21 = { "attrs": {}, "tagName": "pi-ui-lang", "sid": 13 };_node21.hasChild = false;_node21.child = null;_node21.attrHash = 0;_$temp = _node21;{
												var _$parent25 = _$temp;_addJson(addMineList[ind].itemDetail, _$parent25);
											}_chFunc(_node21);_$parent24.children.push(_node21);
										}_chFunc(_node9);_$parent9.children.push(_node9);
									}
								}_chFunc(_node6);_$parent6.children.push(_node6);
							}
						}
					}
				}_chFunc(_node5);_$parent5.children.push(_node5);
			}_chFunc(_node4);_$parent4.children.push(_node4);
		}_chFunc(_node);return _node;
	}
});