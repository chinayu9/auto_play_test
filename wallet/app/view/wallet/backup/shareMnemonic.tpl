(function (_cfg, it, it1) {
	var _$temp = void 0,
	    node = void 0;_$temp = node;{
		var _$parent = _$temp;var _node = { "attrs": {}, "tagName": "div", "sid": 0 };_node.children = [];_node.attrSize = 3;_node.attrHash = 3437572703;_node.attrs["class"] = "new-page";_node.attrs["w-class"] = "new-page";_node.attrs["ev-back-click"] = "backPrePage";topBarTitle = { "zh_Hans": "备份助记词", "zh_Hant": "備份助記詞", "en": "" };_$temp = _node;{
			var _$parent2 = _$temp;var _node2 = { "attrs": {}, "tagName": "app-components1-topBar-topBar", "sid": 1 };_node2.hasChild = false;_node2.child = null;_node2.attrHash = 0;_$temp = _node2;{
				var _$parent3 = _$temp;var _node3 = {}; //jpair pre

				_node3["title"] = topBarTitle;
				//jpair suf
				_addJson(_node3, _$parent3);
			}_chFunc(_node2);_$parent2.children.push(_node2);
		}_$temp = _node;{
			var _$parent4 = _$temp;var _node4 = { "attrs": {}, "tagName": "div", "sid": 2 };_node4.children = [];_node4.attrSize = 1;_node4.attrHash = 4252679546;_node4.attrs["w-class"] = "body";title = { "zh_Hans": "按序抄写助记词", "zh_Hant": "按序抄寫助記詞", "en": "" };content = { "zh_Hans": "助记词是您找回账号的唯一凭证，如果丢失，" + it1.walletName + "将无法恢复您的账户和资产。请务必妥善保管您的助记词", "zh_Hant": "助記詞是您找回賬號的唯一憑證，如果丟失，" + it1.walletName + "將無法恢復您的賬號和資產。請務必妥善保管您的助記詞。", "en": "" };_$temp = _node4;{
				var _$parent5 = _$temp;var _node5 = { "attrs": {}, "tagName": "app-view-wallet-components-tipsCard", "sid": 3 };_node5.hasChild = false;_node5.child = null;_node5.attrHash = 0;_$temp = _node5;{
					var _$parent6 = _$temp;var _node6 = {}; //jpair pre

					{
						var jvalue = "";
						jvalue = "color:#ef3838;";
						//jpair suf

						_node6["contentStyle"] = jvalue;
					}
					//jpair pre

					_node6["title"] = title;
					//jpair suf
					//jpair pre

					_node6["content"] = content;
					//jpair suf
					_addJson(_node6, _$parent6);
				}_chFunc(_node5);_$parent5.children.push(_node5);
			}_$temp = _node4;{
				var _$parent7 = _$temp;var _node7 = { "attrs": {}, "tagName": "div", "sid": 4 };_node7.children = [];_node7.attrSize = 1;_node7.attrHash = 4064917415;_node7.attrs["w-class"] = "bottom-box";{
					var _$i = 0;
					for (var _iterator = it1.successList, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator]();;) {
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
						var i = _$i++;_$temp = _node7;{
							var _$parent8 = _$temp;var _node8 = { "attrs": {}, "tagName": "div", "sid": 5 };_node8.children = [];_node8.attrSize = 2;_node8.attrHash = 1734586514;_node8.attrs["w-class"] = "item";{
								var attrvalue = "";attrvalue += "shareItemClick(e,";attrvalue += i;attrvalue += ")";_node8.attrs["on-tap"] = attrvalue;
							}_node8.attrHash = _hash.nextHash(_node8.attrHash, _calTextHash(_node8.attrs["on-tap"]));_$temp = _node8;{
								var _$parent9 = _$temp;var _node9 = { "attrs": {}, "tagName": "img", "sid": 6 };_node9.children = [];_node9.attrSize = 1;_node9.attrHash = 1555380917;{
									var _attrvalue = "";_attrvalue += "../../../res/image/number";_attrvalue += i + 1;_attrvalue += ".png";_node9.attrs["src"] = _attrvalue;
								}_node9.attrHash = _hash.nextHash(_node9.attrHash, _calTextHash(_node9.attrs["src"]));_chFunc(_node9);_$parent9.children.push(_node9);
							}_$temp = _node8;{
								var _$parent10 = _$temp;var _node10 = { "attrs": {}, "tagName": "div", "sid": 7 };_node10.children = [];_node10.attrSize = 1;_node10.attrHash = 830343746;_node10.attrs["w-class"] = "share-box";_$temp = _node10;{
									var _$parent11 = _$temp;var _node11 = { "attrs": {}, "tagName": "div", "sid": 8 };_node11.children = [];_node11.childHash = 983575180;_node11.attrSize = 1;_node11.attrHash = 2098153414;_node11.attrs["w-class"] = "share-title";_$temp = _node11;{
										var _$parent12 = _$temp;var _node12 = { "attrs": {}, "tagName": "pi-ui-lang", "sid": 9 };_node12.hasChild = false;_node12.child = null;_node12.childHash = 899465305;_node12.attrHash = 0;_$temp = _node12;{
											var _$parent13 = _$temp;var _node13 = {}; //jpair pre

											{
												var _jvalue = "";
												_jvalue = "分享给好友";
												//jpair suf

												_node13["zh_Hans"] = _jvalue;
											}
											//jpair pre

											{
												var _jvalue2 = "";
												_jvalue2 = "分享給好友";
												//jpair suf

												_node13["zh_Hant"] = _jvalue2;
											}
											//jpair pre

											{
												var _jvalue3 = "";
												_jvalue3 = "";
												//jpair suf

												_node13["en"] = _jvalue3;
											}
											_addJson(_node13, _$parent13);
										}_$parent12.children.push(_node12);
									}_$parent11.children.push(_node11);
								}_$temp = _node10;{
									var _$parent14 = _$temp;var _node14 = { "attrs": {}, "tagName": "div", "sid": 10 };_node14.children = [];_node14.attrSize = 1;_node14.attrHash = 2945576030;_node14.attrs["w-class"] = "share-fragment";_$temp = _node14;{
										var _$parent15 = _$temp;_addText(it1.encryptFragments[i], _$parent15);
									}_chFunc(_node14);_$parent14.children.push(_node14);
								}_chFunc(_node10);_$parent10.children.push(_node10);
							}_$temp = _node8;{
								var _$parent16 = _$temp;var _node15 = { "attrs": {}, "tagName": "div", "sid": 11 };_node15.children = [];_node15.attrSize = 1;_node15.attrHash = 197278587;_node15.attrs["w-class"] = "choose-box";if (v) {
									_$temp = _node15;{
										var _$parent17 = _$temp;var _node16 = { "attrs": {}, "tagName": "img", "sid": 12 };_node16.children = [];_node16.childHash = 0;_node16.attrSize = 2;_node16.attrHash = 2700988036;_node16.attrs["src"] = "../../../res/image/icon_right2.png";_node16.attrs["w-class"] = "choosed";_$parent17.children.push(_node16);
									}
								} else {
									_$temp = _node15;{
										var _$parent18 = _$temp;var _node17 = { "attrs": {}, "tagName": "div", "sid": 13 };_node17.children = [];_node17.childHash = 2946814719;_node17.attrSize = 1;_node17.attrHash = 1278218974;_node17.attrs["w-class"] = "choose-inner";_$parent18.children.push(_node17);
									}
								}_chFunc(_node15);_$parent16.children.push(_node15);
							}_chFunc(_node8);_$parent8.children.push(_node8);
						}
					}
				}_chFunc(_node7);_$parent7.children.push(_node7);
			}_chFunc(_node4);_$parent4.children.push(_node4);
		}_chFunc(_node);return _node;
	}
});