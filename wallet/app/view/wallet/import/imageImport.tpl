(function (_cfg, it, it1) {
	var _$temp = void 0,
	    node = void 0;_$temp = node;{
		var _$parent = _$temp;var _node = { "attrs": {}, "tagName": "div", "sid": 0 };_node.children = [];_node.attrSize = 2;_node.attrHash = 138104688;_node.attrs["class"] = "new-page";_node.attrs["w-class"] = "new-page";tipsCardTitle = { "zh_Hans": "使用原始照片和照片密码", "zh_Hant": "使用原始照片和照片密碼", "en": "" };tipsCardContent = { "zh_Hans": "请使用创建账户时设置的照片和照片密码恢复账户。", "zh_Hant": "請使用創建賬戶時設置的照片和照片密碼恢復賬戶。", "en": "" };_$temp = _node;{
			var _$parent2 = _$temp;var _node2 = { "attrs": {}, "tagName": "app-view-wallet-components-tipsCard", "sid": 1 };_node2.hasChild = false;_node2.child = null;_node2.attrHash = 0;_$temp = _node2;{
				var _$parent3 = _$temp;var _node3 = {}; //jpair pre

				_node3["title"] = tipsCardTitle;
				//jpair suf
				//jpair pre

				_node3["content"] = tipsCardContent;
				//jpair suf
				_addJson(_node3, _$parent3);
			}_chFunc(_node2);_$parent2.children.push(_node2);
		}_$temp = _node;{
			var _$parent4 = _$temp;var _node4 = { "attrs": {}, "tagName": "div", "sid": 2 };_node4.children = [];_node4.attrSize = 1;_node4.attrHash = 4064917415;_node4.attrs["w-class"] = "bottom-box";_$temp = _node4;{
				var _$parent5 = _$temp;var _node5 = { "attrs": {}, "tagName": "div", "sid": 3 };_node5.children = [];_node5.attrSize = 2;_node5.attrHash = 2862166069;_node5.attrs["w-class"] = "choose-image-container";_node5.attrs["on-tap"] = "selectImageClick";if (!it1.chooseImage) {
					_$temp = _node5;{
						var _$parent6 = _$temp;var _node6 = { "attrs": {}, "tagName": "div", "sid": 4 };_node6.children = [];_node6.childHash = 1040181001;_node6.attrSize = 1;_node6.attrHash = 440925614;_node6.attrs["w-class"] = "choose-image-text";_$temp = _node6;{
							var _$parent7 = _$temp;var _node7 = _installText("+", 3807426999);;
							_$parent7.children.push(_node7);
						}_$temp = _node6;{
							var _$parent8 = _$temp;var _node8 = { "attrs": {}, "tagName": "pi-ui-lang", "sid": 5 };_node8.hasChild = false;_node8.child = null;_node8.childHash = 3033602100;_node8.attrHash = 0;_$temp = _node8;{
								var _$parent9 = _$temp;var _node9 = {}; //jpair pre

								{
									var jvalue = "";
									jvalue = "选择照片";
									//jpair suf

									_node9["zh_Hans"] = jvalue;
								}
								//jpair pre

								{
									var _jvalue = "";
									_jvalue = "選擇照片";
									//jpair suf

									_node9["zh_Hant"] = _jvalue;
								}
								//jpair pre

								{
									var _jvalue2 = "";
									_jvalue2 = "";
									//jpair suf

									_node9["en"] = _jvalue2;
								}
								_addJson(_node9, _$parent9);
							}_$parent8.children.push(_node8);
						}_$parent6.children.push(_node6);
					}
				} else {
					_$temp = _node5;{
						var _$parent10 = _$temp;var _node10 = { "attrs": {}, "tagName": "widget", "sid": 6 };_node10.hasChild = false;_node10.child = null;_node10.attrSize = 1;_node10.attrHash = 3581192569;_node10.attrs["w-tag"] = "pi-ui-html";_node10.tagName = _node10.attrs["w-tag"];_node10.attrs["w-class"] = "ui-html";_$temp = _node10;{
							var _$parent11 = _$temp;_addJson(it1.imageHtml, _$parent11);
						}_chFunc(_node10);_$parent10.children.push(_node10);
					}_$temp = _node5;{
						var _$parent12 = _$temp;var _node11 = { "attrs": {}, "tagName": "div", "sid": 7 };_node11.children = [];_node11.attrSize = 2;_node11.attrHash = 993061509;_node11.attrs["w-class"] = "image-psw-container";_node11.attrs["on-tap"] = "imagePswClick";_$temp = _node11;{
							var _$parent13 = _$temp;var _node12 = { "attrs": {}, "tagName": "div", "sid": 8 };_node12.children = [];_node12.attrSize = 2;_node12.attrHash = 3770158290;_node12.attrs["w-class"] = "input-father";_node12.attrs["ev-input-change"] = "imagePswChange";inputPlace = { "zh_Hans": "输入照片密码", "zh_Hant": "輸入照片密碼", "en": "" };_$temp = _node12;{
								var _$parent14 = _$temp;var _node13 = { "attrs": {}, "tagName": "app-components-input-suffixInput", "sid": 9 };_node13.hasChild = false;_node13.child = null;_node13.attrHash = 0;_$temp = _node13;{
									var _$parent15 = _$temp;var _node14 = {}; //jpair pre

									{
										var _jvalue3 = "";
										_jvalue3 = "password";
										//jpair suf

										_node14["itype"] = _jvalue3;
									}
									//jpair pre

									_node14["placeHolder"] = inputPlace;
									//jpair suf
									//jpair pre

									_node14["clearable"] = true;
									//jpair suf
									//jpair pre

									_node14["available"] = it1.imagePswAvailable;
									//jpair suf
									_addJson(_node14, _$parent15);
								}_chFunc(_node13);_$parent14.children.push(_node13);
							}_chFunc(_node12);_$parent13.children.push(_node12);
						}_chFunc(_node11);_$parent12.children.push(_node11);
					}
				}_chFunc(_node5);_$parent5.children.push(_node5);
			}_$temp = _node4;{
				var _$parent16 = _$temp;var _node15 = { "attrs": {}, "tagName": "div", "sid": 10 };_node15.children = [];_node15.attrSize = 2;_node15.attrHash = 1573521945;_node15.attrs["ev-btn-tap"] = "nextClick";_node15.attrs["w-class"] = "btn";btnName = { "zh_Hans": "下一步", "zh_Hant": "下一步", "en": "" };_$temp = _node15;{
					var _$parent17 = _$temp;var _node16 = { "attrs": {}, "tagName": "app-components1-btn-btn", "sid": 11 };_node16.hasChild = false;_node16.child = null;_node16.attrHash = 0;_$temp = _node16;{
						var _$parent18 = _$temp;var _node17 = {}; //jpair pre

						_node17["name"] = btnName;
						//jpair suf
						//jpair pre

						{
							var _jvalue4 = "";
							_jvalue4 = "big";
							//jpair suf

							_node17["types"] = _jvalue4;
						}
						//jpair pre

						{
							var _jvalue5 = "";
							_jvalue5 = "blue";
							//jpair suf

							_node17["color"] = _jvalue5;
						}
						_addJson(_node17, _$parent18);
					}_chFunc(_node16);_$parent17.children.push(_node16);
				}_chFunc(_node15);_$parent16.children.push(_node15);
			}_chFunc(_node4);_$parent4.children.push(_node4);
		}_chFunc(_node);return _node;
	}
});