(function (_cfg, it, it1) {
	var _$temp = void 0,
	    node = void 0;_$temp = node;{
		var _$parent = _$temp;var _node = { "attrs": {}, "tagName": "div", "sid": 0 };_node.children = [];_node.attrSize = 2;_node.attrHash = 2139844790;_node.attrs["class"] = "new-page";_node.attrs["ev-back-click"] = "backPrePage";topBarTitle = { "zh_Hans": "账户", "zh_Hant": "賬戶", "en": "" };_$temp = _node;{
			var _$parent2 = _$temp;var _node2 = { "attrs": {}, "tagName": "app-components1-topBar-topBar", "sid": 1 };_node2.hasChild = false;_node2.child = null;_node2.attrHash = 0;_$temp = _node2;{
				var _$parent3 = _$temp;var _node3 = {}; //jpair pre

				_node3["title"] = topBarTitle;
				//jpair suf
				_addJson(_node3, _$parent3);
			}_chFunc(_node2);_$parent2.children.push(_node2);
		}_$temp = _node;{
			var _$parent4 = _$temp;var _node4 = { "attrs": {}, "tagName": "div", "sid": 2 };_node4.children = [];_node4.attrSize = 1;_node4.attrHash = 4252679546;_node4.attrs["w-class"] = "body";_$temp = _node4;{
				var _$parent5 = _$temp;var _node5 = { "attrs": {}, "tagName": "div", "sid": 3 };_node5.children = [];_node5.attrSize = 2;_node5.attrHash = 2921542448;_node5.attrs["w-class"] = "head-container";_node5.attrs["class"] = "pi-input";if (!it1.chooseImage) {
					_$temp = _node5;{
						var _$parent6 = _$temp;var _node6 = { "attrs": {}, "tagName": "widget", "sid": 4 };_node6.hasChild = false;_node6.child = null;_node6.attrSize = 1;_node6.attrHash = 2040333420;_node6.attrs["w-tag"] = "app-components1-img-img";_node6.tagName = _node6.attrs["w-tag"];_node6.attrs["on-tap"] = "uploadAvatar";_$temp = _node6;{
							var _$parent7 = _$temp;var _node7 = {}; //jpair pre

							_node7["imgURL"] = it1.avatar;
							//jpair suf
							//jpair pre

							{
								var jvalue = "";
								jvalue = "120px;";
								//jpair suf

								_node7["width"] = jvalue;
							}
							_addJson(_node7, _$parent7);
						}_chFunc(_node6);_$parent6.children.push(_node6);
					}
				} else {
					_$temp = _node5;{
						var _$parent8 = _$temp;var _node8 = { "attrs": {}, "tagName": "widget", "sid": 5 };_node8.hasChild = false;_node8.child = null;_node8.attrSize = 2;_node8.attrHash = 2677830137;_node8.attrs["w-tag"] = "pi-ui-html";_node8.tagName = _node8.attrs["w-tag"];_node8.attrs["on-tap"] = "uploadAvatar";_node8.attrs["w-class"] = "ui-html";_$temp = _node8;{
							var _$parent9 = _$temp;_addJson(it1.avatarHtml, _$parent9);
						}_chFunc(_node8);_$parent8.children.push(_node8);
					}
				}_$temp = _node5;{
					var _$parent10 = _$temp;var _node9 = { "attrs": {}, "tagName": "div", "sid": 6 };_node9.children = [];_node9.attrSize = 3;_node9.attrHash = 2285289093;_node9.attrs["style"] = "flex: 1 0 0;";_node9.attrs["ev-input-blur"] = "walletNameInputBlur";_node9.attrs["ev-input-change"] = "userNameChange";defaultName = { "zh_Hans": "昵称未设置", "zh_Hant": "暱稱未設置", "en": "" };_$temp = _node9;{
						var _$parent11 = _$temp;var _node10 = { "attrs": {}, "tagName": "widget", "sid": 7 };_node10.hasChild = false;_node10.child = null;_node10.attrSize = 1;_node10.attrHash = 1065782752;_node10.attrs["w-tag"] = "app-components1-input-input";_node10.tagName = _node10.attrs["w-tag"];_node10.attrs["id"] = "nameInput";_$temp = _node10;{
							var _$parent12 = _$temp;var _node11 = {}; //jpair pre

							_node11["input"] = it1.nickName;
							//jpair suf
							//jpair pre

							_node11["maxLength"] = 10;
							//jpair suf
							//jpair pre

							_node11["placeHolder"] = defaultName;
							//jpair suf
							//jpair pre

							_node11["disabled"] = !it1.canEditName;
							//jpair suf
							//jpair pre

							_node11["notUnderLine"] = !it1.canEditName;
							//jpair suf
							_addJson(_node11, _$parent12);
						}_chFunc(_node10);_$parent11.children.push(_node10);
					}_chFunc(_node9);_$parent10.children.push(_node9);
				}_$temp = _node5;{
					var _$parent13 = _$temp;var _node12 = { "attrs": {}, "tagName": "img", "sid": 8 };_node12.children = [];_node12.attrSize = 4;_node12.attrHash = 32915552;_node12.attrs["src"] = "app/res/image/16.png";{
						var attrvalue = "";attrvalue += "display: ";attrvalue += it1.canEditName ? 'block' : 'none';attrvalue += "";_node12.attrs["style"] = attrvalue;
					}_node12.attrHash = _hash.nextHash(_node12.attrHash, _calTextHash(_node12.attrs["style"]));_node12.attrs["w-class"] = "edit";_node12.attrs["on-tap"] = "changeInput";_chFunc(_node12);_$parent13.children.push(_node12);
				}_$temp = _node5;{
					var _$parent14 = _$temp;var _node13 = { "attrs": {}, "tagName": "img", "sid": 9 };_node13.children = [];_node13.attrSize = 4;_node13.attrHash = 2298059251;_node13.attrs["src"] = "app/res/image/edit_gray.png";{
						var _attrvalue = "";_attrvalue += "display: ";_attrvalue += !it1.canEditName ? 'block' : 'none';_attrvalue += "";_node13.attrs["style"] = _attrvalue;
					}_node13.attrHash = _hash.nextHash(_node13.attrHash, _calTextHash(_node13.attrs["style"]));_node13.attrs["w-class"] = "edit";_node13.attrs["on-tap"] = "changeInput";_chFunc(_node13);_$parent14.children.push(_node13);
				}_chFunc(_node5);_$parent5.children.push(_node5);
			}_$temp = _node4;{
				var _$parent15 = _$temp;var _node14 = { "attrs": {}, "tagName": "div", "sid": 10 };_node14.children = [];_node14.attrSize = 1;_node14.attrHash = 2405874756;_node14.attrs["w-class"] = "other";_$temp = _node14;{
					var _$parent16 = _$temp;var _node15 = { "attrs": {}, "tagName": "div", "sid": 11 };_node15.children = [];_node15.attrSize = 1;_node15.attrHash = 4121046989;_node15.attrs["on-tap"] = "changePhone";itemTitle = [{ "zh_Hans": "手机号", "zh_Hant": "手機號", "en": "" }, { "zh_Hans": "修改密码", "zh_Hant": "修改密碼", "en": "" }, { "zh_Hans": "备份助记词", "zh_Hant": "備份助記詞", "en": "" }, { "zh_Hans": "未备份", "zh_Hant": "未備份", "en": "" }, { "zh_Hans": "导出私钥", "zh_Hant": "導出私鑰", "en": "" }];phone = { "zh_Hans": it1.phone, "zh_Hant": it1.phone, "en": "" };bindPhone = { "zh_Hans": "未设置", "zh_Hant": "未設置", "en": "" };if (it1.phone.indexOf('*') > 0) {
						_$temp = _node15;{
							var _$parent17 = _$temp;var _node16 = { "attrs": {}, "tagName": "div", "sid": 12 };_node16.children = [];_node16.attrSize = 2;_node16.attrHash = 2273338806;_node16.attrs["w-class"] = "other-item";_node16.attrs["ev-switch-click"] = "onSwitchChange";_$temp = _node16;{
								var _$parent18 = _$temp;var _node17 = { "attrs": {}, "tagName": "span", "sid": 13 };_node17.children = [];_node17.attrSize = 1;_node17.attrHash = 2409504440;_node17.attrs["w-class"] = "item-title";_$temp = _node17;{
									var _$parent19 = _$temp;var _node18 = { "attrs": {}, "tagName": "pi-ui-lang", "sid": 14 };_node18.hasChild = false;_node18.child = null;_node18.attrHash = 0;_$temp = _node18;{
										var _$parent20 = _$temp;_addJson(itemTitle[0], _$parent20);
									}_chFunc(_node18);_$parent19.children.push(_node18);
								}_chFunc(_node17);_$parent18.children.push(_node17);
							}_$temp = _node16;{
								var _$parent21 = _$temp;var _node19 = { "attrs": {}, "tagName": "span", "sid": 15 };_node19.children = [];_node19.attrSize = 1;_node19.attrHash = 854203028;_node19.attrs["w-class"] = "tag";_$temp = _node19;{
									var _$parent22 = _$temp;var _node20 = { "attrs": {}, "tagName": "pi-ui-lang", "sid": 16 };_node20.hasChild = false;_node20.child = null;_node20.attrHash = 0;_$temp = _node20;{
										var _$parent23 = _$temp;_addJson(phone, _$parent23);
									}_chFunc(_node20);_$parent22.children.push(_node20);
								}_chFunc(_node19);_$parent21.children.push(_node19);
							}_chFunc(_node16);_$parent17.children.push(_node16);
						}
					} else {
						_$temp = _node15;{
							var _$parent24 = _$temp;var _node21 = { "attrs": {}, "tagName": "app-components-basicItem-basicItem", "sid": 17 };_node21.hasChild = false;_node21.child = null;_node21.attrHash = 0;_$temp = _node21;{
								var _$parent25 = _$temp;var _node22 = {}; //jpair pre

								_node22["name"] = itemTitle[0];
								//jpair suf
								//jpair pre

								_node22["describe"] = bindPhone;
								//jpair suf
								_addJson(_node22, _$parent25);
							}_chFunc(_node21);_$parent24.children.push(_node21);
						}
					}_chFunc(_node15);_$parent16.children.push(_node15);
				}_$temp = _node14;{
					var _$parent26 = _$temp;var _node23 = { "attrs": {}, "tagName": "div", "sid": 18 };_node23.children = [];_node23.attrSize = 1;_node23.attrHash = 2364954210;_node23.attrs["on-tap"] = "changePsw";_$temp = _node23;{
						var _$parent27 = _$temp;var _node24 = { "attrs": {}, "tagName": "app-components-basicItem-basicItem", "sid": 19 };_node24.hasChild = false;_node24.child = null;_node24.attrHash = 0;_$temp = _node24;{
							var _$parent28 = _$temp;var _node25 = {}; //jpair pre

							_node25["name"] = itemTitle[1];
							//jpair suf
							//jpair pre

							{
								var _jvalue = "";
								_jvalue = "margin:0;border:none;";
								//jpair suf

								_node25["style"] = _jvalue;
							}
							_addJson(_node25, _$parent28);
						}_chFunc(_node24);_$parent27.children.push(_node24);
					}_chFunc(_node23);_$parent26.children.push(_node23);
				}_chFunc(_node14);_$parent15.children.push(_node14);
			}_$temp = _node4;{
				var _$parent29 = _$temp;var _node26 = { "attrs": {}, "tagName": "div", "sid": 20 };_node26.children = [];_node26.attrSize = 1;_node26.attrHash = 2405874756;_node26.attrs["w-class"] = "other";_$temp = _node26;{
					var _$parent30 = _$temp;var _node27 = { "attrs": {}, "tagName": "div", "sid": 21 };_node27.children = [];_node27.attrSize = 2;_node27.attrHash = 1176180247;_node27.attrs["w-class"] = "other-item";_node27.attrs["on-tap"] = "backupWalletClick";_$temp = _node27;{
						var _$parent31 = _$temp;var _node28 = { "attrs": {}, "tagName": "div", "sid": 22 };_node28.children = [];_node28.attrSize = 1;_node28.attrHash = 2409504440;_node28.attrs["w-class"] = "item-title";_$temp = _node28;{
							var _$parent32 = _$temp;var _node29 = { "attrs": {}, "tagName": "pi-ui-lang", "sid": 23 };_node29.hasChild = false;_node29.child = null;_node29.attrHash = 0;_$temp = _node29;{
								var _$parent33 = _$temp;_addJson(itemTitle[2], _$parent33);
							}_chFunc(_node29);_$parent32.children.push(_node29);
						}_chFunc(_node28);_$parent31.children.push(_node28);
					}if (!it1.backup) {
						_$temp = _node27;{
							var _$parent34 = _$temp;var _node30 = { "attrs": {}, "tagName": "div", "sid": 24 };_node30.children = [];_node30.attrSize = 1;_node30.attrHash = 854203028;_node30.attrs["w-class"] = "tag";_$temp = _node30;{
								var _$parent35 = _$temp;var _node31 = { "attrs": {}, "tagName": "pi-ui-lang", "sid": 25 };_node31.hasChild = false;_node31.child = null;_node31.attrHash = 0;_$temp = _node31;{
									var _$parent36 = _$temp;_addJson(itemTitle[3], _$parent36);
								}_chFunc(_node31);_$parent35.children.push(_node31);
							}_chFunc(_node30);_$parent34.children.push(_node30);
						}
					}_$temp = _node27;{
						var _$parent37 = _$temp;var _node32 = { "attrs": {}, "tagName": "img", "sid": 26 };_node32.children = [];_node32.childHash = 0;_node32.attrSize = 3;_node32.attrHash = 3735978228;_node32.attrs["src"] = "app/res/image/right_arrow2_gray.png";_node32.attrs["height"] = "40px";_node32.attrs["w-class"] = "rightArrow";_$parent37.children.push(_node32);
					}_chFunc(_node27);_$parent30.children.push(_node27);
				}_$temp = _node26;{
					var _$parent38 = _$temp;var _node33 = { "attrs": {}, "tagName": "div", "sid": 27 };_node33.children = [];_node33.attrSize = 3;_node33.attrHash = 3880860044;_node33.attrs["w-class"] = "other-item";_node33.attrs["on-tap"] = "exportPrivateKeyClick";_node33.attrs["style"] = "border-bottom: none;";_$temp = _node33;{
						var _$parent39 = _$temp;var _node34 = { "attrs": {}, "tagName": "div", "sid": 28 };_node34.children = [];_node34.attrSize = 1;_node34.attrHash = 2409504440;_node34.attrs["w-class"] = "item-title";_$temp = _node34;{
							var _$parent40 = _$temp;var _node35 = { "attrs": {}, "tagName": "pi-ui-lang", "sid": 29 };_node35.hasChild = false;_node35.child = null;_node35.attrHash = 0;_$temp = _node35;{
								var _$parent41 = _$temp;_addJson(itemTitle[4], _$parent41);
							}_chFunc(_node35);_$parent40.children.push(_node35);
						}_chFunc(_node34);_$parent39.children.push(_node34);
					}_$temp = _node33;{
						var _$parent42 = _$temp;var _node36 = { "attrs": {}, "tagName": "img", "sid": 30 };_node36.children = [];_node36.childHash = 0;_node36.attrSize = 3;_node36.attrHash = 3735978228;_node36.attrs["src"] = "app/res/image/right_arrow2_gray.png";_node36.attrs["height"] = "40px";_node36.attrs["w-class"] = "rightArrow";_$parent42.children.push(_node36);
					}_chFunc(_node33);_$parent38.children.push(_node33);
				}_chFunc(_node26);_$parent29.children.push(_node26);
			}_chFunc(_node4);_$parent4.children.push(_node4);
		}_chFunc(_node);return _node;
	}
});