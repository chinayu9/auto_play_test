(function (_cfg, it, it1) {
	var _$temp = void 0,
	    node = void 0;_$temp = node;{
		var _$parent = _$temp;var _node = { "attrs": {}, "tagName": "div", "sid": 0 };_node.children = [];_node.attrSize = 4;_node.attrHash = 959190432;_node.attrs["class"] = "new-page";_node.attrs["ev-next-click"] = "share";_node.attrs["ev-back-click"] = "backPrePage";_node.attrs["w-class"] = "new-page";_$temp = _node;{
			var _$parent2 = _$temp;var _node2 = { "attrs": {}, "tagName": "img", "sid": 1 };_node2.children = [];_node2.childHash = 0;_node2.attrSize = 2;_node2.attrHash = 3138256544;_node2.attrs["src"] = "../../../res/image1/topbar_backimg.png";_node2.attrs["style"] = "position: absolute;top: 0;right: 0;";_$parent2.children.push(_node2);
		}topBarTitle = { "zh_Hans": "我的二维码", "zh_Hant": "我的二維碼", "en": "" };_$temp = _node;{
			var _$parent3 = _$temp;var _node3 = { "attrs": {}, "tagName": "app-components1-topBar-topBar", "sid": 2 };_node3.hasChild = false;_node3.child = null;_node3.attrHash = 0;_$temp = _node3;{
				var _$parent4 = _$temp;var _node4 = {}; //jpair pre

				_node4["title"] = topBarTitle;
				//jpair suf
				//jpair pre

				{
					var jvalue = "";
					jvalue = "../../res/image/share_white.png";
					//jpair suf

					_node4["nextImg"] = jvalue;
				}
				//jpair pre

				{
					var _jvalue = "";
					_jvalue = "transparent";
					//jpair suf

					_node4["background"] = _jvalue;
				}
				_addJson(_node4, _$parent4);
			}_chFunc(_node3);_$parent3.children.push(_node3);
		}_$temp = _node;{
			var _$parent5 = _$temp;var _node5 = { "attrs": {}, "tagName": "div", "sid": 3 };_node5.children = [];_node5.attrSize = 1;_node5.attrHash = 487306359;_node5.attrs["w-class"] = "content";_$temp = _node5;{
				var _$parent6 = _$temp;var _node6 = { "attrs": {}, "tagName": "div", "sid": 4 };_node6.children = [];_node6.attrSize = 1;_node6.attrHash = 1019047777;_node6.attrs["w-class"] = "title";_$temp = _node6;{
					var _$parent7 = _$temp;var _node7 = { "attrs": {}, "tagName": "img", "sid": 5 };_node7.children = [];_node7.attrSize = 2;_node7.attrHash = 1283080277;{
						var attrvalue = "";attrvalue = it1.userHead;_node7.attrs["src"] = attrvalue;
					}_node7.attrHash = _hash.nextHash(_node7.attrHash, _calTextHash(_node7.attrs["src"]));_node7.attrs["w-class"] = "userHead";_chFunc(_node7);_$parent7.children.push(_node7);
				}_$temp = _node6;{
					var _$parent8 = _$temp;var _node8 = { "attrs": {}, "tagName": "span", "sid": 6 };_node8.children = [];_node8.attrSize = 1;_node8.attrHash = 4232090967;_node8.attrs["w-class"] = "userName";_$temp = _node8;{
						var _$parent9 = _$temp;_addText(it1.userName, _$parent9);
					}_chFunc(_node8);_$parent8.children.push(_node8);
				}_chFunc(_node6);_$parent6.children.push(_node6);
			}_$temp = _node5;{
				var _$parent10 = _$temp;var _node9 = { "attrs": {}, "tagName": "div", "sid": 7 };_node9.children = [];_node9.attrSize = 2;_node9.attrHash = 3708489470;_node9.attrs["w-class"] = "address";_node9.attrs["on-tap"] = "copyAddr";_$temp = _node9;{
					var _$parent11 = _$temp;_addText(it1.address, _$parent11);
				}_$temp = _node9;{
					var _$parent12 = _$temp;var _node10 = { "attrs": {}, "tagName": "img", "sid": 8 };_node10.children = [];_node10.childHash = 0;_node10.attrSize = 3;_node10.attrHash = 1937035086;_node10.attrs["src"] = "../../../res/image/copy_gray.png";_node10.attrs["width"] = "30px";_node10.attrs["w-class"] = "copy";_$parent12.children.push(_node10);
				}_chFunc(_node9);_$parent10.children.push(_node9);
			}_$temp = _node5;{
				var _$parent13 = _$temp;var _node11 = { "attrs": {}, "tagName": "div", "sid": 9 };_node11.children = [];_node11.attrSize = 1;_node11.attrHash = 3583682907;_node11.attrs["style"] = "text-align: center;";_$temp = _node11;{
					var _$parent14 = _$temp;var _node12 = { "attrs": {}, "tagName": "app-components-qrcode-qrcode", "sid": 10 };_node12.hasChild = false;_node12.child = null;_node12.attrHash = 0;_$temp = _node12;{
						var _$parent15 = _$temp;var _node13 = {}; //jpair pre

						_node13["value"] = it1.address;
						//jpair suf
						//jpair pre

						{
							var _jvalue2 = "";
							_jvalue2 = "350";
							//jpair suf

							_node13["size"] = _jvalue2;
						}
						_addJson(_node13, _$parent15);
					}_chFunc(_node12);_$parent14.children.push(_node12);
				}_$temp = _node11;{
					var _$parent16 = _$temp;var _node14 = { "attrs": {}, "tagName": "div", "sid": 11 };_node14.children = [];_node14.attrSize = 1;_node14.attrHash = 3925273237;_node14.attrs["style"] = "font-size: 32px;color: #222222;margin-top: 50px;";_$temp = _node14;{
						var _$parent17 = _$temp;var _node15 = { "attrs": {}, "tagName": "pi-ui-lang", "sid": 12 };_node15.hasChild = false;_node15.child = null;_node15.attrHash = 0;_$temp = _node15;{
							var _$parent18 = _$temp;var _node16 = {}; //jpair pre

							{
								var _jvalue3 = "";
								_jvalue3 += "扫码添加";_jvalue3 += it1.walletName;_jvalue3 += "好友";
								//jpair suf

								_node16["zh_Hans"] = _jvalue3;
							}
							//jpair pre

							{
								var _jvalue4 = "";
								_jvalue4 += "掃碼添加";_jvalue4 += it1.walletName;_jvalue4 += "好友";
								//jpair suf

								_node16["zh_Hant"] = _jvalue4;
							}
							//jpair pre

							{
								var _jvalue5 = "";
								_jvalue5 = "";
								//jpair suf

								_node16["en"] = _jvalue5;
							}
							_addJson(_node16, _$parent18);
						}_chFunc(_node15);_$parent17.children.push(_node15);
					}_chFunc(_node14);_$parent16.children.push(_node14);
				}_chFunc(_node11);_$parent13.children.push(_node11);
			}_chFunc(_node5);_$parent5.children.push(_node5);
		}_chFunc(_node);return _node;
	}
});