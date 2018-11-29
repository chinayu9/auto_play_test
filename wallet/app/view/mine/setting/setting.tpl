(function (_cfg, it, it1) {
	var _$temp = void 0,
	    node = void 0;_$temp = node;{
		var _$parent = _$temp;var _node = { "attrs": {}, "tagName": "div", "sid": 0 };_node.children = [];_node.attrSize = 2;_node.attrHash = 2139844790;_node.attrs["class"] = "new-page";_node.attrs["ev-back-click"] = "backPrePage";topBarTitle = { "zh_Hans": "设置", "zh_Hant": "設置", "en": "" };_$temp = _node;{
			var _$parent2 = _$temp;var _node2 = { "attrs": {}, "tagName": "app-components1-topBar-topBar", "sid": 1 };_node2.hasChild = false;_node2.child = null;_node2.attrHash = 0;_$temp = _node2;{
				var _$parent3 = _$temp;var _node3 = {}; //jpair pre

				_node3["title"] = topBarTitle;
				//jpair suf
				_addJson(_node3, _$parent3);
			}_chFunc(_node2);_$parent2.children.push(_node2);
		}_$temp = _node;{
			var _$parent4 = _$temp;var _node4 = { "attrs": {}, "tagName": "div", "sid": 2 };_node4.children = [];_node4.attrSize = 1;_node4.attrHash = 487306359;_node4.attrs["w-class"] = "content";_$temp = _node4;{
				var _$parent5 = _$temp;var _node5 = { "attrs": {}, "tagName": "div", "sid": 3 };_node5.children = [];_node5.attrSize = 1;_node5.attrHash = 3430883658;_node5.attrs["style"] = "margin: 30px 0;";_$temp = _node5;{
					var _$parent6 = _$temp;var _node6 = { "attrs": {}, "tagName": "div", "sid": 4 };_node6.children = [];_node6.attrSize = 1;_node6.attrHash = 701657680;_node6.attrs["w-class"] = "mode";itemTitle = [{ "zh_Hans": "语言", "zh_Hant": "語言", "en": "" }, { "zh_Hans": "货币单位", "zh_Hant": "貨幣單位", "en": "" }, { "zh_Hans": "涨跌颜色", "zh_Hant": "漲跌顏色", "en": "" }, { "zh_Hans": "锁屏开关", "zh_Hant": "鎖屏開關", "en": "" }, { "zh_Hans": "退出账户", "zh_Hant": "退出賬戶", "en": "" }, { "zh_Hans": "退出并清除信息", "zh_Hant": "退出並清除信息", "en": "" }];{
						var _$i = 0;
						for (var _iterator = it1.itemList, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator]();;) {
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
							var ind = _$i++;_$temp = _node6;{
								var _$parent7 = _$temp;var _node7 = { "attrs": {}, "tagName": "div", "sid": 5 };_node7.children = [];_node7.attrSize = 1;_node7.attrHash = 2059734693;{
									var attrvalue = "";attrvalue += "itemClick(";attrvalue += ind;attrvalue += ")";_node7.attrs["on-tap"] = attrvalue;
								}_node7.attrHash = _hash.nextHash(_node7.attrHash, _calTextHash(_node7.attrs["on-tap"]));_$temp = _node7;{
									var _$parent8 = _$temp;var _node8 = { "attrs": {}, "tagName": "app-components-basicItem-basicItem", "sid": 6 };_node8.hasChild = false;_node8.child = null;_node8.attrHash = 0;_$temp = _node8;{
										var _$parent9 = _$temp;var _node9 = {}; //jpair pre

										_node9["name"] = itemTitle[ind];
										//jpair suf
										//jpair pre

										_node9["describe"] = val.list[val.selected];
										//jpair suf
										_addJson(_node9, _$parent9);
									}_chFunc(_node8);_$parent8.children.push(_node8);
								}_chFunc(_node7);_$parent7.children.push(_node7);
							}
						}
					}_$temp = _node6;{
						var _$parent10 = _$temp;var _node10 = { "attrs": {}, "tagName": "div", "sid": 7 };_node10.children = [];_node10.attrSize = 3;_node10.attrHash = 3129646592;_node10.attrs["w-class"] = "item";_node10.attrs["ev-switch-click"] = "onSwitchChange";_node10.attrs["style"] = "border-bottom: none;";_$temp = _node10;{
							var _$parent11 = _$temp;var _node11 = { "attrs": {}, "tagName": "span", "sid": 8 };_node11.children = [];_node11.attrSize = 1;_node11.attrHash = 136397174;_node11.attrs["w-class"] = "itemName";_$temp = _node11;{
								var _$parent12 = _$temp;var _node12 = { "attrs": {}, "tagName": "pi-ui-lang", "sid": 9 };_node12.hasChild = false;_node12.child = null;_node12.attrHash = 0;_$temp = _node12;{
									var _$parent13 = _$temp;_addJson(itemTitle[3], _$parent13);
								}_chFunc(_node12);_$parent12.children.push(_node12);
							}_chFunc(_node11);_$parent11.children.push(_node11);
						}_$temp = _node10;{
							var _$parent14 = _$temp;var _node13 = { "attrs": {}, "tagName": "span", "sid": 10 };_node13.children = [];_node13.attrSize = 1;_node13.attrHash = 3271035901;_node13.attrs["style"] = "margin-right: 20px";_$temp = _node13;{
								var _$parent15 = _$temp;var _node14 = { "attrs": {}, "tagName": "app-components-switch-switch", "sid": 11 };_node14.hasChild = false;_node14.child = null;_node14.attrHash = 0;_$temp = _node14;{
									var _$parent16 = _$temp;var _node15 = {}; //jpair pre

									_node15["types"] = it1.openLockScreen;
									//jpair suf
									_addJson(_node15, _$parent16);
								}_chFunc(_node14);_$parent15.children.push(_node14);
							}_chFunc(_node13);_$parent14.children.push(_node13);
						}_chFunc(_node10);_$parent10.children.push(_node10);
					}_chFunc(_node6);_$parent6.children.push(_node6);
				}if (it1.wallet) {
					_$temp = _node5;{
						var _$parent17 = _$temp;var _node16 = { "attrs": {}, "tagName": "div", "sid": 12 };_node16.children = [];_node16.attrSize = 1;_node16.attrHash = 701657680;_node16.attrs["w-class"] = "mode";_$temp = _node16;{
							var _$parent18 = _$temp;var _node17 = { "attrs": {}, "tagName": "div", "sid": 13 };_node17.children = [];_node17.attrSize = 2;_node17.attrHash = 580126812;_node17.attrs["w-class"] = "item";_node17.attrs["on-tap"] = "logOut";_$temp = _node17;{
								var _$parent19 = _$temp;var _node18 = { "attrs": {}, "tagName": "span", "sid": 14 };_node18.children = [];_node18.attrSize = 1;_node18.attrHash = 136397174;_node18.attrs["w-class"] = "itemName";_$temp = _node18;{
									var _$parent20 = _$temp;var _node19 = { "attrs": {}, "tagName": "pi-ui-lang", "sid": 15 };_node19.hasChild = false;_node19.child = null;_node19.attrHash = 0;_$temp = _node19;{
										var _$parent21 = _$temp;_addJson(itemTitle[4], _$parent21);
									}_chFunc(_node19);_$parent20.children.push(_node19);
								}_chFunc(_node18);_$parent19.children.push(_node18);
							}_chFunc(_node17);_$parent18.children.push(_node17);
						}_$temp = _node16;{
							var _$parent22 = _$temp;var _node20 = { "attrs": {}, "tagName": "div", "sid": 16 };_node20.children = [];_node20.attrSize = 3;_node20.attrHash = 3836108351;_node20.attrs["w-class"] = "item";_node20.attrs["on-tap"] = "logOutDel";_node20.attrs["style"] = "border-bottom: none;";_$temp = _node20;{
								var _$parent23 = _$temp;var _node21 = { "attrs": {}, "tagName": "span", "sid": 17 };_node21.children = [];_node21.attrSize = 2;_node21.attrHash = 1484981403;_node21.attrs["w-class"] = "itemName";_node21.attrs["style"] = "color: #F5A264;";_$temp = _node21;{
									var _$parent24 = _$temp;var _node22 = { "attrs": {}, "tagName": "pi-ui-lang", "sid": 18 };_node22.hasChild = false;_node22.child = null;_node22.attrHash = 0;_$temp = _node22;{
										var _$parent25 = _$temp;_addJson(itemTitle[5], _$parent25);
									}_chFunc(_node22);_$parent24.children.push(_node22);
								}_chFunc(_node21);_$parent23.children.push(_node21);
							}_chFunc(_node20);_$parent22.children.push(_node20);
						}_chFunc(_node16);_$parent17.children.push(_node16);
					}
				}_chFunc(_node5);_$parent5.children.push(_node5);
			}_$temp = _node4;{
				var _$parent26 = _$temp;var _node23 = { "attrs": {}, "tagName": "div", "sid": 19 };_node23.children = [];_node23.childHash = 2946814719;_node23.attrSize = 1;_node23.attrHash = 1100010770;_node23.attrs["style"] = "height: 128px;";_$parent26.children.push(_node23);
			}_chFunc(_node4);_$parent4.children.push(_node4);
		}_chFunc(_node);return _node;
	}
});