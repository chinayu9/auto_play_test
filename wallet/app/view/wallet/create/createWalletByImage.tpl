(function (_cfg, it, it1) {
	var _$temp = void 0,
	    node = void 0;_$temp = node;{
		var _$parent = _$temp;var _node = { "attrs": {}, "tagName": "div", "sid": 0 };_node.children = [];_node.attrSize = 3;_node.attrHash = 3437572703;_node.attrs["class"] = "new-page";_node.attrs["w-class"] = "new-page";_node.attrs["ev-back-click"] = "backPrePage";topBarTitle = { "zh_Hans": "创建账户", "zh_Hant": "創建賬戶", "en": "" };_$temp = _node;{
			var _$parent2 = _$temp;var _node2 = { "attrs": {}, "tagName": "app-components1-topBar-topBar", "sid": 1 };_node2.hasChild = false;_node2.child = null;_node2.attrHash = 0;_$temp = _node2;{
				var _$parent3 = _$temp;var _node3 = {}; //jpair pre

				_node3["title"] = topBarTitle;
				//jpair suf
				_addJson(_node3, _$parent3);
			}_chFunc(_node2);_$parent2.children.push(_node2);
		}_$temp = _node;{
			var _$parent4 = _$temp;var _node4 = { "attrs": {}, "tagName": "div", "sid": 2 };_node4.children = [];_node4.attrSize = 1;_node4.attrHash = 4252679546;_node4.attrs["w-class"] = "body";tipsCardTitle = { "zh_Hans": "选择颜色丰富的照片", "zh_Hant": "選擇顏色豐富的照片", "en": "" };tipsCardContent = { "zh_Hans": "照片和照片密码是您找回账号的唯一凭证，一旦丢失，" + it1.walletName + "将无法恢复您的账号和资产。照片和照片密码无法修改，请务必牢记并妥善保管。", "zh_Hant": "照片和照片密碼是您找回賬號的唯一憑證，一旦丟失，" + it1.walletName + "將無法恢復您的賬號和資產。照片和照片密碼無法修改，請務必牢記並妥善保管。", "en": "" };_$temp = _node4;{
				var _$parent5 = _$temp;var _node5 = { "attrs": {}, "tagName": "app-view-wallet-components-tipsCard", "sid": 3 };_node5.hasChild = false;_node5.child = null;_node5.attrHash = 0;_$temp = _node5;{
					var _$parent6 = _$temp;var _node6 = {}; //jpair pre

					_node6["title"] = tipsCardTitle;
					//jpair suf
					//jpair pre

					_node6["content"] = tipsCardContent;
					//jpair suf
					//jpair pre

					{
						var jvalue = "";
						jvalue = "color:#ef3838";
						//jpair suf

						_node6["contentStyle"] = jvalue;
					}
					_addJson(_node6, _$parent6);
				}_chFunc(_node5);_$parent5.children.push(_node5);
			}_$temp = _node4;{
				var _$parent7 = _$temp;var _node7 = { "attrs": {}, "tagName": "div", "sid": 4 };_node7.children = [];_node7.attrSize = 1;_node7.attrHash = 4064917415;_node7.attrs["w-class"] = "bottom-box";_$temp = _node7;{
					var _$parent8 = _$temp;var _node8 = { "attrs": {}, "tagName": "div", "sid": 5 };_node8.children = [];_node8.attrSize = 2;_node8.attrHash = 2862166069;_node8.attrs["w-class"] = "choose-image-container";_node8.attrs["on-tap"] = "selectImageClick";if (!it1.chooseImage) {
						_$temp = _node8;{
							var _$parent9 = _$temp;var _node9 = { "attrs": {}, "tagName": "div", "sid": 6 };_node9.children = [];_node9.childHash = 1040181001;_node9.attrSize = 1;_node9.attrHash = 440925614;_node9.attrs["w-class"] = "choose-image-text";_$temp = _node9;{
								var _$parent10 = _$temp;var _node10 = _installText("+", 3807426999);;
								_$parent10.children.push(_node10);
							}_$temp = _node9;{
								var _$parent11 = _$temp;var _node11 = { "attrs": {}, "tagName": "pi-ui-lang", "sid": 7 };_node11.hasChild = false;_node11.child = null;_node11.childHash = 3033602100;_node11.attrHash = 0;_$temp = _node11;{
									var _$parent12 = _$temp;var _node12 = {}; //jpair pre

									{
										var _jvalue = "";
										_jvalue = "选择照片";
										//jpair suf

										_node12["zh_Hans"] = _jvalue;
									}
									//jpair pre

									{
										var _jvalue2 = "";
										_jvalue2 = "選擇照片";
										//jpair suf

										_node12["zh_Hant"] = _jvalue2;
									}
									//jpair pre

									{
										var _jvalue3 = "";
										_jvalue3 = "";
										//jpair suf

										_node12["en"] = _jvalue3;
									}
									_addJson(_node12, _$parent12);
								}_$parent11.children.push(_node11);
							}_$parent9.children.push(_node9);
						}
					} else {
						_$temp = _node8;{
							var _$parent13 = _$temp;var _node13 = { "attrs": {}, "tagName": "widget", "sid": 8 };_node13.hasChild = false;_node13.child = null;_node13.attrSize = 1;_node13.attrHash = 3581192569;_node13.attrs["w-tag"] = "pi-ui-html";_node13.tagName = _node13.attrs["w-tag"];_node13.attrs["w-class"] = "ui-html";_$temp = _node13;{
								var _$parent14 = _$temp;_addJson(it1.imageHtml, _$parent14);
							}_chFunc(_node13);_$parent13.children.push(_node13);
						}_$temp = _node8;{
							var _$parent15 = _$temp;var _node14 = { "attrs": {}, "tagName": "div", "sid": 9 };_node14.children = [];_node14.attrSize = 2;_node14.attrHash = 993061509;_node14.attrs["w-class"] = "image-psw-container";_node14.attrs["on-tap"] = "imagePswClick";inputPlace = [{ "zh_Hans": "为照片设置密码", "zh_Hant": "為照片設置密碼", "en": "" }, { "zh_Hans": "重复照片密码", "zh_Hant": "重複照片密碼", "en": "" }];_$temp = _node14;{
								var _$parent16 = _$temp;var _node15 = { "attrs": {}, "tagName": "div", "sid": 10 };_node15.children = [];_node15.attrSize = 2;_node15.attrHash = 3770158290;_node15.attrs["w-class"] = "input-father";_node15.attrs["ev-input-change"] = "imagePswChange";_$temp = _node15;{
									var _$parent17 = _$temp;var _node16 = { "attrs": {}, "tagName": "app-components-input-suffixInput", "sid": 11 };_node16.hasChild = false;_node16.child = null;_node16.attrHash = 0;_$temp = _node16;{
										var _$parent18 = _$temp;var _node17 = {}; //jpair pre

										{
											var _jvalue4 = "";
											_jvalue4 = "password";
											//jpair suf

											_node17["itype"] = _jvalue4;
										}
										//jpair pre

										_node17["placeHolder"] = inputPlace[0];
										//jpair suf
										//jpair pre

										_node17["clearable"] = true;
										//jpair suf
										//jpair pre

										_node17["available"] = it1.imagePswAvailable;
										//jpair suf
										_addJson(_node17, _$parent18);
									}_chFunc(_node16);_$parent17.children.push(_node16);
								}_chFunc(_node15);_$parent16.children.push(_node15);
							}_$temp = _node14;{
								var _$parent19 = _$temp;var _node18 = { "attrs": {}, "tagName": "div", "sid": 12 };_node18.children = [];_node18.attrSize = 2;_node18.attrHash = 1107892557;_node18.attrs["w-class"] = "input-father1";_node18.attrs["ev-input-change"] = "imagePswConfirmChange";_$temp = _node18;{
									var _$parent20 = _$temp;var _node19 = { "attrs": {}, "tagName": "app-components-input-suffixInput", "sid": 13 };_node19.hasChild = false;_node19.child = null;_node19.attrHash = 0;_$temp = _node19;{
										var _$parent21 = _$temp;var _node20 = {}; //jpair pre

										{
											var _jvalue5 = "";
											_jvalue5 = "password";
											//jpair suf

											_node20["itype"] = _jvalue5;
										}
										//jpair pre

										_node20["placeHolder"] = inputPlace[1];
										//jpair suf
										//jpair pre

										_node20["clearable"] = true;
										//jpair suf
										//jpair pre

										_node20["available"] = it1.pswEqualed;
										//jpair suf
										_addJson(_node20, _$parent21);
									}_chFunc(_node19);_$parent20.children.push(_node19);
								}_chFunc(_node18);_$parent19.children.push(_node18);
							}_chFunc(_node14);_$parent15.children.push(_node14);
						}
					}_chFunc(_node8);_$parent8.children.push(_node8);
				}_$temp = _node7;{
					var _$parent22 = _$temp;var _node21 = { "attrs": {}, "tagName": "div", "sid": 14 };_node21.children = [];_node21.attrSize = 2;_node21.attrHash = 1573521945;_node21.attrs["ev-btn-tap"] = "nextClick";_node21.attrs["w-class"] = "btn";btnName = { "zh_Hans": "下一步", "zh_Hant": "下一步", "en": "" };_$temp = _node21;{
						var _$parent23 = _$temp;var _node22 = { "attrs": {}, "tagName": "app-components1-btn-btn", "sid": 15 };_node22.hasChild = false;_node22.child = null;_node22.attrHash = 0;_$temp = _node22;{
							var _$parent24 = _$temp;var _node23 = {}; //jpair pre

							_node23["name"] = btnName;
							//jpair suf
							//jpair pre

							{
								var _jvalue6 = "";
								_jvalue6 = "big";
								//jpair suf

								_node23["types"] = _jvalue6;
							}
							//jpair pre

							{
								var _jvalue7 = "";
								_jvalue7 = "blue";
								//jpair suf

								_node23["color"] = _jvalue7;
							}
							_addJson(_node23, _$parent24);
						}_chFunc(_node22);_$parent23.children.push(_node22);
					}_chFunc(_node21);_$parent22.children.push(_node21);
				}_chFunc(_node7);_$parent7.children.push(_node7);
			}_chFunc(_node4);_$parent4.children.push(_node4);
		}_chFunc(_node);return _node;
	}
});