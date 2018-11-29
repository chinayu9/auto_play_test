(function (_cfg, it, it1) {
	var _$temp = void 0,
	    node = void 0;_$temp = node;{
		var _$parent = _$temp;var _node = { "attrs": {}, "tagName": "div", "sid": 0 };_node.children = [];_node.attrSize = 2;_node.attrHash = 138104688;_node.attrs["class"] = "new-page";_node.attrs["w-class"] = "new-page";_$temp = _node;{
			var _$parent2 = _$temp;var _node2 = { "attrs": {}, "tagName": "div", "sid": 1 };_node2.children = [];_node2.attrSize = 1;_node2.attrHash = 3010684512;_node2.attrs["w-class"] = "botBox";_$temp = _node2;{
				var _$parent3 = _$temp;var _node3 = { "attrs": {}, "tagName": "div", "sid": 2 };_node3.children = [];_node3.attrSize = 1;_node3.attrHash = 2437642848;_node3.attrs["w-class"] = "ConfirmPay";_$temp = _node3;{
					var _$parent4 = _$temp;var _node4 = { "attrs": {}, "tagName": "span", "sid": 3 };_node4.children = [];_node4.childHash = 1497464096;_node4.attrSize = 1;_node4.attrHash = 443517254;_node4.attrs["w-class"] = "confirmText";_$temp = _node4;{
						var _$parent5 = _$temp;var _node5 = { "attrs": {}, "tagName": "pi-ui-lang", "sid": 4 };_node5.hasChild = false;_node5.child = null;_node5.childHash = 1230137578;_node5.attrHash = 0;_$temp = _node5;{
							var _$parent6 = _$temp;var _node6 = {}; //jpair pre

							{
								var jvalue = "";
								jvalue = "确认付款";
								//jpair suf

								_node6["zh_Hans"] = jvalue;
							}
							//jpair pre

							{
								var _jvalue = "";
								_jvalue = "確認付款";
								//jpair suf

								_node6["zh_Hant"] = _jvalue;
							}
							//jpair pre

							{
								var _jvalue2 = "";
								_jvalue2 = "";
								//jpair suf

								_node6["en"] = _jvalue2;
							}
							_addJson(_node6, _$parent6);
						}_$parent5.children.push(_node5);
					}_$parent4.children.push(_node4);
				}_$temp = _node3;{
					var _$parent7 = _$temp;var _node7 = { "attrs": {}, "tagName": "span", "sid": 5 };_node7.children = [];_node7.attrHash = 0;_$temp = _node7;{
						var _$parent8 = _$temp;_addText(it1.spend, _$parent8);
					}_$temp = _node7;{
						var _$parent9 = _$temp;var _node8 = _installText("&nbsp;", 1553561131);;
						_$parent9.children.push(_node8);
					}_$temp = _node7;{
						var _$parent10 = _$temp;_addText(it.product.coinType, _$parent10);
					}_chFunc(_node7);_$parent7.children.push(_node7);
				}_$temp = _node3;{
					var _$parent11 = _$temp;var _node9 = { "attrs": {}, "tagName": "img", "sid": 6 };_node9.children = [];_node9.childHash = 0;_node9.attrSize = 3;_node9.attrHash = 1320499539;_node9.attrs["src"] = "../../../res/image/close_blue.png";_node9.attrs["w-class"] = "closeBtn";_node9.attrs["on-tap"] = "close";_$parent11.children.push(_node9);
				}_chFunc(_node3);_$parent3.children.push(_node3);
			}_$temp = _node2;{
				var _$parent12 = _$temp;var _node10 = { "attrs": {}, "tagName": "div", "sid": 7 };_node10.children = [];_node10.attrSize = 1;_node10.attrHash = 3224068953;_node10.attrs["w-class"] = "details";_$temp = _node10;{
					var _$parent13 = _$temp;var _node11 = { "attrs": {}, "tagName": "p", "sid": 8 };_node11.children = [];_node11.attrHash = 0;_$temp = _node11;{
						var _$parent14 = _$temp;var _node12 = { "attrs": {}, "tagName": "pi-ui-lang", "sid": 9 };_node12.hasChild = false;_node12.child = null;_node12.childHash = 3576529175;_node12.attrHash = 0;_$temp = _node12;{
							var _$parent15 = _$temp;var _node13 = {}; //jpair pre

							{
								var _jvalue3 = "";
								_jvalue3 = "购买单价：";
								//jpair suf

								_node13["zh_Hans"] = _jvalue3;
							}
							//jpair pre

							{
								var _jvalue4 = "";
								_jvalue4 = "購買單價：";
								//jpair suf

								_node13["zh_Hant"] = _jvalue4;
							}
							//jpair pre

							{
								var _jvalue5 = "";
								_jvalue5 = "";
								//jpair suf

								_node13["en"] = _jvalue5;
							}
							_addJson(_node13, _$parent15);
						}_$parent14.children.push(_node12);
					}_$temp = _node11;{
						var _$parent16 = _$temp;_addText(it.product.unitPrice, _$parent16);
					}_$temp = _node11;{
						var _$parent17 = _$temp;_addText(it.product.coinType, _$parent17);
					}_chFunc(_node11);_$parent13.children.push(_node11);
				}_$temp = _node10;{
					var _$parent18 = _$temp;var _node14 = { "attrs": {}, "tagName": "p", "sid": 10 };_node14.children = [];_node14.attrHash = 0;_$temp = _node14;{
						var _$parent19 = _$temp;var _node15 = { "attrs": {}, "tagName": "pi-ui-lang", "sid": 11 };_node15.hasChild = false;_node15.child = null;_node15.childHash = 3255489090;_node15.attrHash = 0;_$temp = _node15;{
							var _$parent20 = _$temp;var _node16 = {}; //jpair pre

							{
								var _jvalue6 = "";
								_jvalue6 = "产品名称：";
								//jpair suf

								_node16["zh_Hans"] = _jvalue6;
							}
							//jpair pre

							{
								var _jvalue7 = "";
								_jvalue7 = "產品名稱：";
								//jpair suf

								_node16["zh_Hant"] = _jvalue7;
							}
							//jpair pre

							{
								var _jvalue8 = "";
								_jvalue8 = "";
								//jpair suf

								_node16["en"] = _jvalue8;
							}
							_addJson(_node16, _$parent20);
						}_$parent19.children.push(_node15);
					}_$temp = _node14;{
						var _$parent21 = _$temp;_addText(it.product.productName, _$parent21);
					}_chFunc(_node14);_$parent18.children.push(_node14);
				}_$temp = _node10;{
					var _$parent22 = _$temp;var _node17 = { "attrs": {}, "tagName": "p", "sid": 12 };_node17.children = [];_node17.attrHash = 0;_$temp = _node17;{
						var _$parent23 = _$temp;var _node18 = { "attrs": {}, "tagName": "pi-ui-lang", "sid": 13 };_node18.hasChild = false;_node18.child = null;_node18.childHash = 3218465208;_node18.attrHash = 0;_$temp = _node18;{
							var _$parent24 = _$temp;var _node19 = {}; //jpair pre

							{
								var _jvalue9 = "";
								_jvalue9 = "购买份数：";
								//jpair suf

								_node19["zh_Hans"] = _jvalue9;
							}
							//jpair pre

							{
								var _jvalue10 = "";
								_jvalue10 = "購買份數：";
								//jpair suf

								_node19["zh_Hant"] = _jvalue10;
							}
							//jpair pre

							{
								var _jvalue11 = "";
								_jvalue11 = "";
								//jpair suf

								_node19["en"] = _jvalue11;
							}
							_addJson(_node19, _$parent24);
						}_$parent23.children.push(_node18);
					}_$temp = _node17;{
						var _$parent25 = _$temp;_addText(it.amount, _$parent25);
					}_$temp = _node17;{
						var _$parent26 = _$temp;var _node20 = { "attrs": {}, "tagName": "pi-ui-lang", "sid": 14 };_node20.hasChild = false;_node20.child = null;_node20.childHash = 3332005577;_node20.attrHash = 0;_$temp = _node20;{
							var _$parent27 = _$temp;var _node21 = {}; //jpair pre

							{
								var _jvalue12 = "";
								_jvalue12 = "份";
								//jpair suf

								_node21["zh_Hans"] = _jvalue12;
							}
							//jpair pre

							{
								var _jvalue13 = "";
								_jvalue13 = "份";
								//jpair suf

								_node21["zh_Hant"] = _jvalue13;
							}
							//jpair pre

							{
								var _jvalue14 = "";
								_jvalue14 = "";
								//jpair suf

								_node21["en"] = _jvalue14;
							}
							_addJson(_node21, _$parent27);
						}_$parent26.children.push(_node20);
					}_chFunc(_node17);_$parent22.children.push(_node17);
				}_$temp = _node10;{
					var _$parent28 = _$temp;var _node22 = { "attrs": {}, "tagName": "p", "sid": 15 };_node22.children = [];_node22.attrHash = 0;_$temp = _node22;{
						var _$parent29 = _$temp;var _node23 = { "attrs": {}, "tagName": "pi-ui-lang", "sid": 16 };_node23.hasChild = false;_node23.child = null;_node23.childHash = 3196697799;_node23.attrHash = 0;_$temp = _node23;{
							var _$parent30 = _$temp;var _node24 = {}; //jpair pre

							{
								var _jvalue15 = "";
								_jvalue15 = "年化收益：";
								//jpair suf

								_node24["zh_Hans"] = _jvalue15;
							}
							//jpair pre

							{
								var _jvalue16 = "";
								_jvalue16 = "年化收益：";
								//jpair suf

								_node24["zh_Hant"] = _jvalue16;
							}
							//jpair pre

							{
								var _jvalue17 = "";
								_jvalue17 = "";
								//jpair suf

								_node24["en"] = _jvalue17;
							}
							_addJson(_node24, _$parent30);
						}_$parent29.children.push(_node23);
					}_$temp = _node22;{
						var _$parent31 = _$temp;_addText(it.product.profit, _$parent31);
					}_chFunc(_node22);_$parent28.children.push(_node22);
				}_$temp = _node10;{
					var _$parent32 = _$temp;var _node25 = { "attrs": {}, "tagName": "p", "sid": 17 };_node25.children = [];_node25.attrHash = 0;_$temp = _node25;{
						var _$parent33 = _$temp;var _node26 = { "attrs": {}, "tagName": "pi-ui-lang", "sid": 18 };_node26.hasChild = false;_node26.child = null;_node26.childHash = 3681029550;_node26.attrHash = 0;_$temp = _node26;{
							var _$parent34 = _$temp;var _node27 = {}; //jpair pre

							{
								var _jvalue18 = "";
								_jvalue18 = "锁定期：";
								//jpair suf

								_node27["zh_Hans"] = _jvalue18;
							}
							//jpair pre

							{
								var _jvalue19 = "";
								_jvalue19 = "鎖定期：";
								//jpair suf

								_node27["zh_Hant"] = _jvalue19;
							}
							//jpair pre

							{
								var _jvalue20 = "";
								_jvalue20 = "";
								//jpair suf

								_node27["en"] = _jvalue20;
							}
							_addJson(_node27, _$parent34);
						}_$parent33.children.push(_node26);
					}_$temp = _node25;{
						var _$parent35 = _$temp;_addText(it.product.lockday, _$parent35);
					}_chFunc(_node25);_$parent32.children.push(_node25);
				}_chFunc(_node10);_$parent12.children.push(_node10);
			}_$temp = _node2;{
				var _$parent36 = _$temp;var _node28 = { "attrs": {}, "tagName": "div", "sid": 19 };_node28.children = [];_node28.childHash = 546826285;_node28.attrSize = 1;_node28.attrHash = 854203028;_node28.attrs["w-class"] = "tag";_$temp = _node28;{
					var _$parent37 = _$temp;var _node29 = { "attrs": {}, "tagName": "pi-ui-lang", "sid": 20 };_node29.hasChild = false;_node29.child = null;_node29.childHash = 1856230485;_node29.attrHash = 0;_$temp = _node29;{
						var _$parent38 = _$temp;var _node30 = {}; //jpair pre

						{
							var _jvalue21 = "";
							_jvalue21 = "如果云账户余额不够，将自动从本地钱包中扣款";
							//jpair suf

							_node30["zh_Hans"] = _jvalue21;
						}
						//jpair pre

						{
							var _jvalue22 = "";
							_jvalue22 = "如果雲賬戶餘額不夠，將自動從本地錢包中扣款";
							//jpair suf

							_node30["zh_Hant"] = _jvalue22;
						}
						//jpair pre

						{
							var _jvalue23 = "";
							_jvalue23 = "";
							//jpair suf

							_node30["en"] = _jvalue23;
						}
						_addJson(_node30, _$parent38);
					}_$parent37.children.push(_node29);
				}_$parent36.children.push(_node28);
			}btnName = { "zh_Hans": "确认", "zh_Hant": "確認", "en": "" };_$temp = _node2;{
				var _$parent39 = _$temp;var _node31 = { "attrs": {}, "tagName": "div", "sid": 21 };_node31.children = [];_node31.attrSize = 2;_node31.attrHash = 2509012085;_node31.attrs["ev-btn-tap"] = "purchaseClicked";_node31.attrs["w-class"] = "btn";_$temp = _node31;{
					var _$parent40 = _$temp;var _node32 = { "attrs": {}, "tagName": "app-components1-btn-btn", "sid": 22 };_node32.hasChild = false;_node32.child = null;_node32.attrHash = 0;_$temp = _node32;{
						var _$parent41 = _$temp;var _node33 = {}; //jpair pre

						_node33["name"] = btnName;
						//jpair suf
						//jpair pre

						{
							var _jvalue24 = "";
							_jvalue24 = "big";
							//jpair suf

							_node33["types"] = _jvalue24;
						}
						//jpair pre

						{
							var _jvalue25 = "";
							_jvalue25 = "white";
							//jpair suf

							_node33["color"] = _jvalue25;
						}
						_addJson(_node33, _$parent41);
					}_chFunc(_node32);_$parent40.children.push(_node32);
				}_chFunc(_node31);_$parent39.children.push(_node31);
			}_chFunc(_node2);_$parent2.children.push(_node2);
		}_chFunc(_node);return _node;
	}
});