(function (_cfg, it, it1) {
	var _$temp = void 0,
	    node = void 0;_$temp = node;{
		var _$parent = _$temp;var _node = { "attrs": {}, "tagName": "div", "sid": 0 };_node.children = [];_node.attrSize = 2;_node.attrHash = 3097205650;_node.attrs["w-class"] = "modal-mask";_node.attrs["class"] = "new-page";_$temp = _node;{
			var _$parent2 = _$temp;var _node2 = { "attrs": {}, "tagName": "div", "sid": 1 };_node2.children = [];_node2.attrSize = 1;_node2.attrHash = 4252679546;_node2.attrs["w-class"] = "body";_$temp = _node2;{
				var _$parent3 = _$temp;var _node3 = { "attrs": {}, "tagName": "div", "sid": 2 };_node3.children = [];_node3.attrSize = 1;_node3.attrHash = 1019047777;_node3.attrs["w-class"] = "title";_$temp = _node3;{
					var _$parent4 = _$temp;_addText(it.title, _$parent4);
				}_$temp = _node3;{
					var _$parent5 = _$temp;var _node4 = { "attrs": {}, "tagName": "span", "sid": 3 };_node4.children = [];_node4.childHash = 291293482;_node4.attrSize = 2;_node4.attrHash = 3480141923;_node4.attrs["w-class"] = "forgetPsw";_node4.attrs["on-tap"] = "foegetPsw";_$temp = _node4;{
						var _$parent6 = _$temp;var _node5 = { "attrs": {}, "tagName": "pi-ui-lang", "sid": 4 };_node5.hasChild = false;_node5.child = null;_node5.childHash = 1018039745;_node5.attrHash = 0;_$temp = _node5;{
							var _$parent7 = _$temp;var _node6 = {}; //jpair pre

							{
								var jvalue = "";
								jvalue = "忘记密码？";
								//jpair suf

								_node6["zh_Hans"] = jvalue;
							}
							//jpair pre

							{
								var _jvalue = "";
								_jvalue = "忘記密碼？";
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
							_addJson(_node6, _$parent7);
						}_$parent6.children.push(_node5);
					}_$parent5.children.push(_node4);
				}_chFunc(_node3);_$parent3.children.push(_node3);
			}_$temp = _node2;{
				var _$parent8 = _$temp;var _node7 = { "attrs": {}, "tagName": "div", "sid": 5 };_node7.children = [];_node7.attrSize = 1;_node7.attrHash = 487306359;_node7.attrs["w-class"] = "content";{
					var _$i = 0;
					for (var _iterator = it.content, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator]();;) {
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
						var ind = _$i++;_$temp = _node7;{
							var _$parent9 = _$temp;var _node8 = { "attrs": {}, "tagName": "p", "sid": 6 };_node8.children = [];_node8.attrHash = 0;_$temp = _node8;{
								var _$parent10 = _$temp;_addText(val, _$parent10);
							}_chFunc(_node8);_$parent9.children.push(_node8);
						}
					}
				}_chFunc(_node7);_$parent8.children.push(_node7);
			}_$temp = _node2;{
				var _$parent11 = _$temp;var _node9 = { "attrs": {}, "tagName": "div", "sid": 7 };_node9.children = [];_node9.attrSize = 2;_node9.attrHash = 3585701875;_node9.attrs["style"] = "height: 90px;";_node9.attrs["ev-input-change"] = "change";_$temp = _node9;{
					var _$parent12 = _$temp;var _node10 = { "attrs": {}, "tagName": "app-components1-input-input", "sid": 8 };_node10.hasChild = false;_node10.child = null;_node10.attrHash = 0;_$temp = _node10;{
						var _$parent13 = _$temp;var _node11 = {}; //jpair pre

						_node11["placeHolder"] = it.placeholder ? it.placeholder : "";
						//jpair suf
						//jpair pre

						_node11["itype"] = it.itype ? it.itype : "text";
						//jpair suf
						//jpair pre

						{
							var _jvalue3 = "";
							_jvalue3 = "padding:0;font-size:28px;";
							//jpair suf

							_node11["style"] = _jvalue3;
						}
						//jpair pre

						_node11["underLine"] = true;
						//jpair suf
						//jpair pre

						_node11["autofocus"] = true;
						//jpair suf
						_addJson(_node11, _$parent13);
					}_chFunc(_node10);_$parent12.children.push(_node10);
				}_chFunc(_node9);_$parent11.children.push(_node9);
			}_$temp = _node2;{
				var _$parent14 = _$temp;var _node12 = { "attrs": {}, "tagName": "div", "sid": 9 };_node12.children = [];_node12.attrSize = 1;_node12.attrHash = 2566746008;_node12.attrs["w-class"] = "btns";if (it.cancelText) {
					cancelText = { "zh_Hans": it.cancelText, "zh_Hant": it.cancelText, "en": "" };
				} else {
					cancelText = { "zh_Hans": "取消", "zh_Hant": "取消", "en": "" };
				}if (it.sureText) {
					sureText = { "zh_Hans": it.sureText, "zh_Hant": it.sureText, "en": "" };
				} else {
					sureText = { "zh_Hans": "确定", "zh_Hant": "確定", "en": "" };
				}_$temp = _node12;{
					var _$parent15 = _$temp;var _node13 = { "attrs": {}, "tagName": "div", "sid": 10 };_node13.children = [];_node13.attrSize = 2;_node13.attrHash = 3340574570;_node13.attrs["w-class"] = "btn-cancel";_node13.attrs["on-tap"] = "cancelBtnClick";_$temp = _node13;{
						var _$parent16 = _$temp;var _node14 = { "attrs": {}, "tagName": "pi-ui-lang", "sid": 11 };_node14.hasChild = false;_node14.child = null;_node14.attrHash = 0;_$temp = _node14;{
							var _$parent17 = _$temp;_addJson(cancelText, _$parent17);
						}_chFunc(_node14);_$parent16.children.push(_node14);
					}_chFunc(_node13);_$parent15.children.push(_node13);
				}_$temp = _node12;{
					var _$parent18 = _$temp;var _node15 = { "attrs": {}, "tagName": "div", "sid": 12 };_node15.children = [];_node15.attrSize = 2;_node15.attrHash = 4264153071;_node15.attrs["w-class"] = "btn-ok";_node15.attrs["on-tap"] = "okBtnClick";_$temp = _node15;{
						var _$parent19 = _$temp;var _node16 = { "attrs": {}, "tagName": "pi-ui-lang", "sid": 13 };_node16.hasChild = false;_node16.child = null;_node16.attrHash = 0;_$temp = _node16;{
							var _$parent20 = _$temp;_addJson(sureText, _$parent20);
						}_chFunc(_node16);_$parent19.children.push(_node16);
					}_chFunc(_node15);_$parent18.children.push(_node15);
				}_chFunc(_node12);_$parent14.children.push(_node12);
			}_chFunc(_node2);_$parent2.children.push(_node2);
		}_chFunc(_node);return _node;
	}
});