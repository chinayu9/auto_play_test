(function (_cfg, it, it1) {
	var _$temp = void 0,
	    node = void 0;_$temp = node;{
		var _$parent = _$temp;var _node = { "attrs": {}, "tagName": "div", "sid": 0 };_node.children = [];_node.attrSize = 2;_node.attrHash = 3097205650;_node.attrs["w-class"] = "modal-mask";_node.attrs["class"] = "new-page";_$temp = _node;{
			var _$parent2 = _$temp;var _node2 = { "attrs": {}, "tagName": "div", "sid": 1 };_node2.children = [];_node2.attrSize = 1;_node2.attrHash = 4252679546;_node2.attrs["w-class"] = "body";_$temp = _node2;{
				var _$parent3 = _$temp;var _node3 = { "attrs": {}, "tagName": "div", "sid": 2 };_node3.children = [];_node3.attrSize = 1;_node3.attrHash = 1019047777;_node3.attrs["w-class"] = "title";if (typeof it.title === 'string') {
					_$temp = _node3;{
						var _$parent4 = _$temp;_addText(it.title, _$parent4);
					}
				} else {
					_$temp = _node3;{
						var _$parent5 = _$temp;var _node4 = { "attrs": {}, "tagName": "pi-ui-lang", "sid": 3 };_node4.hasChild = false;_node4.child = null;_node4.attrHash = 0;_$temp = _node4;{
							var _$parent6 = _$temp;_addJson(it.title, _$parent6);
						}_chFunc(_node4);_$parent5.children.push(_node4);
					}
				}_chFunc(_node3);_$parent3.children.push(_node3);
			}_$temp = _node2;{
				var _$parent7 = _$temp;var _node5 = { "attrs": {}, "tagName": "div", "sid": 4 };_node5.children = [];_node5.attrSize = 2;_node5.attrHash = 2189897373;_node5.attrs["w-class"] = "box";_node5.attrs["on-tap"] = "deleteAccountClick";if (it1.deleteAccount) {
					_$temp = _node5;{
						var _$parent8 = _$temp;var _node6 = { "attrs": {}, "tagName": "img", "sid": 5 };_node6.children = [];_node6.childHash = 0;_node6.attrSize = 2;_node6.attrHash = 548997156;_node6.attrs["src"] = "../../res/image/icon_right2.png";_node6.attrs["w-class"] = "choosed";_$parent8.children.push(_node6);
					}
				} else {
					_$temp = _node5;{
						var _$parent9 = _$temp;var _node7 = { "attrs": {}, "tagName": "div", "sid": 6 };_node7.children = [];_node7.childHash = 2378945440;_node7.attrSize = 1;_node7.attrHash = 197278587;_node7.attrs["w-class"] = "choose-box";_$temp = _node7;{
							var _$parent10 = _$temp;var _node8 = { "attrs": {}, "tagName": "div", "sid": 7 };_node8.children = [];_node8.childHash = 2946814719;_node8.attrSize = 1;_node8.attrHash = 1278218974;_node8.attrs["w-class"] = "choose-inner";_$parent10.children.push(_node8);
						}_$parent9.children.push(_node7);
					}
				}_$temp = _node5;{
					var _$parent11 = _$temp;var _node9 = { "attrs": {}, "tagName": "div", "sid": 8 };_node9.children = [];_node9.attrSize = 2;_node9.attrHash = 503636906;_node9.attrs["w-class"] = "content";{
						var attrvalue = "";attrvalue += it.style ? it.style : '';attrvalue += "";_node9.attrs["style"] = attrvalue;
					}_node9.attrHash = _hash.nextHash(_node9.attrHash, _calTextHash(_node9.attrs["style"]));if (typeof it.content === 'string') {
						_$temp = _node9;{
							var _$parent12 = _$temp;_addText(it.content, _$parent12);
						}
					} else {
						_$temp = _node9;{
							var _$parent13 = _$temp;var _node10 = { "attrs": {}, "tagName": "pi-ui-lang", "sid": 9 };_node10.hasChild = false;_node10.child = null;_node10.attrHash = 0;_$temp = _node10;{
								var _$parent14 = _$temp;_addJson(it.content, _$parent14);
							}_chFunc(_node10);_$parent13.children.push(_node10);
						}
					}_chFunc(_node9);_$parent11.children.push(_node9);
				}_chFunc(_node5);_$parent7.children.push(_node5);
			}_$temp = _node2;{
				var _$parent15 = _$temp;var _node11 = { "attrs": {}, "tagName": "div", "sid": 10 };_node11.children = [];_node11.attrSize = 1;_node11.attrHash = 2566746008;_node11.attrs["w-class"] = "btns";_$temp = _node11;{
					var _$parent16 = _$temp;var _node12 = { "attrs": {}, "tagName": "div", "sid": 11 };_node12.children = [];_node12.attrSize = 2;_node12.attrHash = 3340574570;_node12.attrs["w-class"] = "btn-cancel";_node12.attrs["on-tap"] = "cancelBtnClick";if (it.cancelText) {
						if (typeof it.cancelText === 'string') {
							_$temp = _node12;{
								var _$parent17 = _$temp;_addText(it.cancelText, _$parent17);
							}
						} else {
							_$temp = _node12;{
								var _$parent18 = _$temp;var _node13 = { "attrs": {}, "tagName": "pi-ui-lang", "sid": 12 };_node13.hasChild = false;_node13.child = null;_node13.attrHash = 0;_$temp = _node13;{
									var _$parent19 = _$temp;_addJson(it.cancelText, _$parent19);
								}_chFunc(_node13);_$parent18.children.push(_node13);
							}
						}
					} else {
						_$temp = _node12;{
							var _$parent20 = _$temp;var _node14 = { "attrs": {}, "tagName": "pi-ui-lang", "sid": 13 };_node14.hasChild = false;_node14.child = null;_node14.childHash = 395573977;_node14.attrHash = 0;_$temp = _node14;{
								var _$parent21 = _$temp;var _node15 = {}; //jpair pre

								{
									var jvalue = "";
									jvalue = "取消";
									//jpair suf

									_node15["zh_Hans"] = jvalue;
								}
								//jpair pre

								{
									var _jvalue = "";
									_jvalue = "取消";
									//jpair suf

									_node15["zh_Hant"] = _jvalue;
								}
								//jpair pre

								{
									var _jvalue2 = "";
									_jvalue2 = "";
									//jpair suf

									_node15["en"] = _jvalue2;
								}
								_addJson(_node15, _$parent21);
							}_$parent20.children.push(_node14);
						}
					}_chFunc(_node12);_$parent16.children.push(_node12);
				}_$temp = _node11;{
					var _$parent22 = _$temp;var _node16 = { "attrs": {}, "tagName": "div", "sid": 14 };_node16.children = [];_node16.attrSize = 2;_node16.attrHash = 4264153071;_node16.attrs["w-class"] = "btn-ok";_node16.attrs["on-tap"] = "okBtnClick";if (it.sureText) {
						if (typeof it.sureText === 'string') {
							_$temp = _node16;{
								var _$parent23 = _$temp;_addText(it.sureText, _$parent23);
							}
						} else {
							_$temp = _node16;{
								var _$parent24 = _$temp;var _node17 = { "attrs": {}, "tagName": "pi-ui-lang", "sid": 15 };_node17.hasChild = false;_node17.child = null;_node17.attrHash = 0;_$temp = _node17;{
									var _$parent25 = _$temp;_addJson(it.sureText, _$parent25);
								}_chFunc(_node17);_$parent24.children.push(_node17);
							}
						}
					} else {
						_$temp = _node16;{
							var _$parent26 = _$temp;var _node18 = { "attrs": {}, "tagName": "pi-ui-lang", "sid": 16 };_node18.hasChild = false;_node18.child = null;_node18.childHash = 723117211;_node18.attrHash = 0;_$temp = _node18;{
								var _$parent27 = _$temp;var _node19 = {}; //jpair pre

								{
									var _jvalue3 = "";
									_jvalue3 = "确定";
									//jpair suf

									_node19["zh_Hans"] = _jvalue3;
								}
								//jpair pre

								{
									var _jvalue4 = "";
									_jvalue4 = "確定";
									//jpair suf

									_node19["zh_Hant"] = _jvalue4;
								}
								//jpair pre

								{
									var _jvalue5 = "";
									_jvalue5 = "";
									//jpair suf

									_node19["en"] = _jvalue5;
								}
								_addJson(_node19, _$parent27);
							}_$parent26.children.push(_node18);
						}
					}_chFunc(_node16);_$parent22.children.push(_node16);
				}_chFunc(_node11);_$parent15.children.push(_node11);
			}_chFunc(_node2);_$parent2.children.push(_node2);
		}_chFunc(_node);return _node;
	}
});