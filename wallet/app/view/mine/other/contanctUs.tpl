(function (_cfg, it, it1) {
	var _$temp = void 0,
	    node = void 0;_$temp = node;{
		var _$parent = _$temp;var _node = { "attrs": {}, "tagName": "div", "sid": 0 };_node.children = [];_node.attrSize = 2;_node.attrHash = 2139844790;_node.attrs["class"] = "new-page";_node.attrs["ev-back-click"] = "backPrePage";topBarTitle = { "zh_Hans": "联系我们", "zh_Hant": "聯繫我們", "en": "" };_$temp = _node;{
			var _$parent2 = _$temp;var _node2 = { "attrs": {}, "tagName": "app-components1-topBar-topBar", "sid": 1 };_node2.hasChild = false;_node2.child = null;_node2.attrHash = 0;_$temp = _node2;{
				var _$parent3 = _$temp;var _node3 = {}; //jpair pre

				_node3["title"] = topBarTitle;
				//jpair suf
				_addJson(_node3, _$parent3);
			}_chFunc(_node2);_$parent2.children.push(_node2);
		}_$temp = _node;{
			var _$parent4 = _$temp;var _node4 = { "attrs": {}, "tagName": "div", "sid": 2 };_node4.children = [];_node4.attrSize = 1;_node4.attrHash = 487306359;_node4.attrs["w-class"] = "content";_$temp = _node4;{
				var _$parent5 = _$temp;var _node5 = { "attrs": {}, "tagName": "div", "sid": 3 };_node5.children = [];_node5.attrSize = 1;_node5.attrHash = 3169715147;_node5.attrs["w-class"] = "aboutus-img";_$temp = _node5;{
					var _$parent6 = _$temp;var _node6 = { "attrs": {}, "tagName": "img", "sid": 4 };_node6.children = [];_node6.attrSize = 2;_node6.attrHash = 452952309;{
						var attrvalue = "";attrvalue += it1.walletLogo;attrvalue += "";_node6.attrs["src"] = attrvalue;
					}_node6.attrHash = _hash.nextHash(_node6.attrHash, _calTextHash(_node6.attrs["src"]));_node6.attrs["w-class"] = "logoimg";_chFunc(_node6);_$parent6.children.push(_node6);
				}_chFunc(_node5);_$parent5.children.push(_node5);
			}_$temp = _node4;{
				var _$parent7 = _$temp;var _node7 = { "attrs": {}, "tagName": "div", "sid": 5 };_node7.children = [];_node7.attrSize = 1;_node7.attrHash = 866865791;_node7.attrs["w-class"] = "version";_$temp = _node7;{
					var _$parent8 = _$temp;var _node8 = _installText("V", 232847882);;
					_$parent8.children.push(_node8);
				}_$temp = _node7;{
					var _$parent9 = _$temp;_addText(it1.version, _$parent9);
				}_chFunc(_node7);_$parent7.children.push(_node7);
			}_$temp = _node4;{
				var _$parent10 = _$temp;var _node9 = { "attrs": {}, "tagName": "div", "sid": 6 };_node9.children = [];_node9.attrSize = 1;_node9.attrHash = 2002705810;_node9.attrs["w-class"] = "shortmess";_$temp = _node9;{
					var _$parent11 = _$temp;var _node10 = { "attrs": {}, "tagName": "pi-ui-lang", "sid": 7 };_node10.hasChild = false;_node10.child = null;_node10.attrHash = 0;_$temp = _node10;{
						var _$parent12 = _$temp;var _node11 = {}; //jpair pre

						{
							var jvalue = "";
							jvalue += it1.walletName;jvalue += "是一款功能全面、简单易用的钱包应用。";
							//jpair suf

							_node11["zh_Hans"] = jvalue;
						}
						//jpair pre

						{
							var _jvalue = "";
							_jvalue += it1.walletName;_jvalue += "是一款功能全面、簡單易用的錢包應用。";
							//jpair suf

							_node11["zh_Hant"] = _jvalue;
						}
						//jpair pre

						{
							var _jvalue2 = "";
							_jvalue2 = "";
							//jpair suf

							_node11["en"] = _jvalue2;
						}
						_addJson(_node11, _$parent12);
					}_chFunc(_node10);_$parent11.children.push(_node10);
				}_chFunc(_node9);_$parent10.children.push(_node9);
			}itemName = [{ "zh_Hans": "官方网站", "zh_Hant": "官方網站", "en": "" }, { "zh_Hans": "微信小助手", "zh_Hant": "微信小助手", "en": "" }, { "zh_Hans": "微信公众号", "zh_Hant": "微信公眾號", "en": "" }];{
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
					var ind = _$i++;_$temp = _node4;{
						var _$parent13 = _$temp;var _node12 = { "attrs": {}, "tagName": "div", "sid": 8 };_node12.children = [];_node12.attrSize = 1;_node12.attrHash = 1810915363;{
							var _attrvalue = "";_attrvalue += "itemClick(e,";_attrvalue += ind;_attrvalue += ")";_node12.attrs["on-tap"] = _attrvalue;
						}_node12.attrHash = _hash.nextHash(_node12.attrHash, _calTextHash(_node12.attrs["on-tap"]));_$temp = _node12;{
							var _$parent14 = _$temp;var _node13 = { "attrs": {}, "tagName": "app-components-basicItem-basicItem", "sid": 9 };_node13.hasChild = false;_node13.child = null;_node13.attrHash = 0;_$temp = _node13;{
								var _$parent15 = _$temp;var _node14 = {}; //jpair pre

								_node14["name"] = itemName[ind];
								//jpair suf
								//jpair pre

								_node14["describe"] = val.desc;
								//jpair suf
								_addJson(_node14, _$parent15);
							}_chFunc(_node13);_$parent14.children.push(_node13);
						}_chFunc(_node12);_$parent13.children.push(_node12);
					}
				}
			}_chFunc(_node4);_$parent4.children.push(_node4);
		}_chFunc(_node);return _node;
	}
});