(function (_cfg, it, it1) {
	var _$temp = void 0,
	    node = void 0;_$temp = node;{
		var _$parent = _$temp;var _node = { "attrs": {}, "tagName": "div", "sid": 0 };_node.children = [];_node.attrSize = 3;_node.attrHash = 1749694704;_node.attrs["class"] = "new-page";_node.attrs["ev-back-click"] = "backPrePage";_node.attrs["ev-next-click"] = "shareImg";topBarTitle = [{ "zh_Hans": "微信小助手", "zh_Hant": "微信小助手", "en": "" }, { "zh_Hans": "微信公众号", "zh_Hant": "微信公眾號", "en": "" }];_$temp = _node;{
			var _$parent2 = _$temp;var _node2 = { "attrs": {}, "tagName": "app-components1-topBar-topBar", "sid": 1 };_node2.hasChild = false;_node2.child = null;_node2.attrHash = 0;_$temp = _node2;{
				var _$parent3 = _$temp;var _node3 = {}; //jpair pre

				_node3["title"] = topBarTitle[it.fg];
				//jpair suf
				//jpair pre

				{
					var jvalue = "";
					jvalue = "../../res/image/share_blue.png";
					//jpair suf

					_node3["nextImg"] = jvalue;
				}
				_addJson(_node3, _$parent3);
			}_chFunc(_node2);_$parent2.children.push(_node2);
		}_$temp = _node;{
			var _$parent4 = _$temp;var _node4 = { "attrs": {}, "tagName": "div", "sid": 2 };_node4.children = [];_node4.attrSize = 1;_node4.attrHash = 487306359;_node4.attrs["w-class"] = "content";_$temp = _node4;{
				var _$parent5 = _$temp;var _node5 = { "attrs": {}, "tagName": "div", "sid": 3 };_node5.children = [];_node5.attrSize = 1;_node5.attrHash = 3169715147;_node5.attrs["w-class"] = "aboutus-img";_$temp = _node5;{
					var _$parent6 = _$temp;var _node6 = { "attrs": {}, "tagName": "img", "sid": 4 };_node6.children = [];_node6.attrSize = 2;_node6.attrHash = 452952309;{
						var attrvalue = "";attrvalue += it.fg == 0 ? it1.wachatHelperQrcode : it1.wachatQrcode;attrvalue += "";_node6.attrs["src"] = attrvalue;
					}_node6.attrHash = _hash.nextHash(_node6.attrHash, _calTextHash(_node6.attrs["src"]));_node6.attrs["w-class"] = "logoimg";_chFunc(_node6);_$parent6.children.push(_node6);
				}_chFunc(_node5);_$parent5.children.push(_node5);
			}ids = [{ "zh_Hans": "ID：" + it1.walletName + "", "zh_Hant": "ID：" + it1.walletName + "", "en": "" }, { "zh_Hans": "ID：" + it1.walletName + "", "zh_Hant": "ID：" + it1.walletName + "", "en": "" }];shortMess = [{ "zh_Hans": "扫码添加小助手，进" + it1.walletName + "官方微信群", "zh_Hant": "掃碼添加小助手，進" + it1.walletName + "官方微信群", "en": "" }, { "zh_Hans": "扫码关注公众号，随时了解" + it1.walletName + "新动态", "zh_Hant": "掃碼關注公眾號，隨時了解" + it1.walletName + "新動態", "en": "" }];_$temp = _node4;{
				var _$parent7 = _$temp;var _node7 = { "attrs": {}, "tagName": "div", "sid": 5 };_node7.children = [];_node7.attrSize = 1;_node7.attrHash = 2002705810;_node7.attrs["w-class"] = "shortmess";_$temp = _node7;{
					var _$parent8 = _$temp;var _node8 = { "attrs": {}, "tagName": "pi-ui-lang", "sid": 6 };_node8.hasChild = false;_node8.child = null;_node8.attrHash = 0;_$temp = _node8;{
						var _$parent9 = _$temp;_addJson(shortMess[it.fg], _$parent9);
					}_chFunc(_node8);_$parent8.children.push(_node8);
				}_chFunc(_node7);_$parent7.children.push(_node7);
			}_chFunc(_node4);_$parent4.children.push(_node4);
		}_chFunc(_node);return _node;
	}
});