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
			var _$parent4 = _$temp;var _node4 = { "attrs": {}, "tagName": "div", "sid": 2 };_node4.children = [];_node4.attrSize = 1;_node4.attrHash = 4252679546;_node4.attrs["w-class"] = "body";title = { "zh_Hans": "按序抄写助记词", "zh_Hant": "按序抄寫助記詞", "en": "" };content = { "zh_Hans": "助记词是您找回账号的唯一凭证，如果丢失，" + it.walletName + "将无法恢复您的账户和资产。请务必妥善保管您的助记词", "zh_Hant": "助記詞是您找回賬號的唯一憑證，如果丟失，" + it.walletName + "將無法恢復您的賬號和資產。請務必妥善保管您的助記詞。", "en": "" };_$temp = _node4;{
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
				var _$parent7 = _$temp;var _node7 = { "attrs": {}, "tagName": "div", "sid": 4 };_node7.children = [];_node7.attrSize = 1;_node7.attrHash = 4064917415;_node7.attrs["w-class"] = "bottom-box";_$temp = _node7;{
					var _$parent8 = _$temp;var _node8 = { "attrs": {}, "tagName": "div", "sid": 5 };_node8.children = [];_node8.attrSize = 1;_node8.attrHash = 2337219393;_node8.attrs["w-class"] = "mnemonic-container";_$temp = _node8;{
						var _$parent9 = _$temp;_addText(it.mnemonic, _$parent9);
					}_chFunc(_node8);_$parent8.children.push(_node8);
				}_$temp = _node7;{
					var _$parent10 = _$temp;var _node9 = { "attrs": {}, "tagName": "div", "sid": 6 };_node9.children = [];_node9.attrSize = 1;_node9.attrHash = 4208970723;_node9.attrs["w-class"] = "btn-container";btnNames = [{ "zh_Hans": "我已妥善保管", "zh_Hant": "我已妥善保管", "en": "" }, { "zh_Hans": "请好友协助保管", "zh_Hant": "請好友協助保管", "en": "" }];_$temp = _node9;{
						var _$parent11 = _$temp;var _node10 = { "attrs": {}, "tagName": "div", "sid": 7 };_node10.children = [];_node10.attrSize = 2;_node10.attrHash = 618381517;_node10.attrs["ev-btn-tap"] = "standardBackupClick";_node10.attrs["w-class"] = "btn";_$temp = _node10;{
							var _$parent12 = _$temp;var _node11 = { "attrs": {}, "tagName": "app-components1-btn-btn", "sid": 8 };_node11.hasChild = false;_node11.child = null;_node11.attrHash = 0;_$temp = _node11;{
								var _$parent13 = _$temp;var _node12 = {}; //jpair pre

								_node12["name"] = btnNames[0];
								//jpair suf
								//jpair pre

								{
									var _jvalue = "";
									_jvalue = "big";
									//jpair suf

									_node12["types"] = _jvalue;
								}
								//jpair pre

								{
									var _jvalue2 = "";
									_jvalue2 = "blue";
									//jpair suf

									_node12["color"] = _jvalue2;
								}
								_addJson(_node12, _$parent13);
							}_chFunc(_node11);_$parent12.children.push(_node11);
						}_chFunc(_node10);_$parent11.children.push(_node10);
					}_$temp = _node9;{
						var _$parent14 = _$temp;var _node13 = { "attrs": {}, "tagName": "div", "sid": 9 };_node13.children = [];_node13.attrSize = 2;_node13.attrHash = 3034725613;_node13.attrs["ev-btn-tap"] = "fragmentsBackupClick";_node13.attrs["w-class"] = "btn";_$temp = _node13;{
							var _$parent15 = _$temp;var _node14 = { "attrs": {}, "tagName": "app-components1-btn-btn", "sid": 10 };_node14.hasChild = false;_node14.child = null;_node14.attrHash = 0;_$temp = _node14;{
								var _$parent16 = _$temp;var _node15 = {}; //jpair pre

								_node15["name"] = btnNames[1];
								//jpair suf
								//jpair pre

								{
									var _jvalue3 = "";
									_jvalue3 = "big";
									//jpair suf

									_node15["types"] = _jvalue3;
								}
								//jpair pre

								{
									var _jvalue4 = "";
									_jvalue4 = "white";
									//jpair suf

									_node15["color"] = _jvalue4;
								}
								_addJson(_node15, _$parent16);
							}_chFunc(_node14);_$parent15.children.push(_node14);
						}_chFunc(_node13);_$parent14.children.push(_node13);
					}_chFunc(_node9);_$parent10.children.push(_node9);
				}_chFunc(_node7);_$parent7.children.push(_node7);
			}_chFunc(_node4);_$parent4.children.push(_node4);
		}_chFunc(_node);return _node;
	}
});