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
			var _$parent4 = _$temp;var _node4 = { "attrs": {}, "tagName": "div", "sid": 2 };_node4.children = [];_node4.attrSize = 1;_node4.attrHash = 4252679546;_node4.attrs["w-class"] = "body";_$temp = _node4;{
				var _$parent5 = _$temp;var _node5 = { "attrs": {}, "tagName": "div", "sid": 3 };_node5.children = [];_node5.childHash = 1660002430;_node5.attrSize = 1;_node5.attrHash = 1981747992;_node5.attrs["w-class"] = "bodyTitle";_$temp = _node5;{
					var _$parent6 = _$temp;var _node6 = { "attrs": {}, "tagName": "pi-ui-lang", "sid": 4 };_node6.hasChild = false;_node6.child = null;_node6.childHash = 3577032134;_node6.attrHash = 0;_$temp = _node6;{
						var _$parent7 = _$temp;var _node7 = {}; //jpair pre

						{
							var jvalue = "";
							jvalue = "按序选择输入助记词";
							//jpair suf

							_node7["zh_Hans"] = jvalue;
						}
						//jpair pre

						{
							var _jvalue = "";
							_jvalue = "按序選擇輸入助記詞";
							//jpair suf

							_node7["zh_Hant"] = _jvalue;
						}
						//jpair pre

						{
							var _jvalue2 = "";
							_jvalue2 = "";
							//jpair suf

							_node7["en"] = _jvalue2;
						}
						_addJson(_node7, _$parent7);
					}_$parent6.children.push(_node6);
				}_$parent5.children.push(_node5);
			}_$temp = _node4;{
				var _$parent8 = _$temp;var _node8 = { "attrs": {}, "tagName": "div", "sid": 5 };_node8.children = [];_node8.attrSize = 1;_node8.attrHash = 3807270382;_node8.attrs["w-class"] = "screen";{
					var _$i = 0;
					for (var _iterator = it1.nullMnemonic, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator]();;) {
						var _ref;

						if (_isArray) {
							if (_i >= _iterator.length) break;
							_ref = _iterator[_i++];
						} else {
							_i = _iterator.next();
							if (_i.done) break;
							_ref = _i.value;
						}

						var item = _ref;
						var index = _$i++;_$temp = _node8;{
							var _$parent9 = _$temp;var _node9 = { "attrs": {}, "tagName": "span", "sid": 6 };_node9.children = [];_node9.attrSize = 3;_node9.attrHash = 712996199;_node9.attrs["w-class"] = "screenItem";{
								var attrvalue = "";attrvalue += "confirmedMnemonicItemClick(e,";attrvalue += index;attrvalue += ")";_node9.attrs["on-tap"] = attrvalue;
							}_node9.attrHash = _hash.nextHash(_node9.attrHash, _calTextHash(_node9.attrs["on-tap"]));{
								var _attrvalue = "";_attrvalue += index === 1 || index === 4 || index === 7 || index === 10 ? 'margin:10px 10px 0;' : 'margin:10px 0 0;';_attrvalue += it1.confirmedMnemonic[index] ? 'opacity: 1;' : 'opacity: 0;';_attrvalue += "";_node9.attrs["style"] = _attrvalue;
							}_node9.attrHash = _hash.nextHash(_node9.attrHash, _calTextHash(_node9.attrs["style"]));_$temp = _node9;{
								var _$parent10 = _$temp;_addText(it1.confirmedMnemonic[index] && it1.confirmedMnemonic[index].word, _$parent10);
							}_chFunc(_node9);_$parent9.children.push(_node9);
						}
					}
				}_chFunc(_node8);_$parent8.children.push(_node8);
			}_$temp = _node4;{
				var _$parent11 = _$temp;var _node10 = { "attrs": {}, "tagName": "div", "sid": 7 };_node10.children = [];_node10.attrSize = 1;_node10.attrHash = 4064917415;_node10.attrs["w-class"] = "bottom-box";_$temp = _node10;{
					var _$parent12 = _$temp;var _node11 = { "attrs": {}, "tagName": "div", "sid": 8 };_node11.children = [];_node11.attrSize = 1;_node11.attrHash = 1253124464;_node11.attrs["w-class"] = "itemsBox";{
						var _$i2 = 0;
						for (var _iterator2 = it1.shuffledMnemonic, _isArray2 = Array.isArray(_iterator2), _i2 = 0, _iterator2 = _isArray2 ? _iterator2 : _iterator2[Symbol.iterator]();;) {
							var _ref2;

							if (_isArray2) {
								if (_i2 >= _iterator2.length) break;
								_ref2 = _iterator2[_i2++];
							} else {
								_i2 = _iterator2.next();
								if (_i2.done) break;
								_ref2 = _i2.value;
							}

							var _item = _ref2;
							var _index = _$i2++;_$temp = _node11;{
								var _$parent13 = _$temp;var _node12 = { "attrs": {}, "tagName": "div", "sid": 9 };_node12.children = [];_node12.attrSize = 3;_node12.attrHash = 612500247;{
									var _attrvalue2 = "";_attrvalue2 += "item ";_attrvalue2 += _item.isActive ? 'checked' : '';_attrvalue2 += "";_node12.attrs["w-class"] = _attrvalue2;
								}_node12.attrHash = _hash.nextHash(_node12.attrHash, _calTextHash(_node12.attrs["w-class"]));{
									var _attrvalue3 = "";_attrvalue3 += "shuffledMnemonicItemClick(e,";_attrvalue3 += _index;_attrvalue3 += ")";_node12.attrs["on-tap"] = _attrvalue3;
								}_node12.attrHash = _hash.nextHash(_node12.attrHash, _calTextHash(_node12.attrs["on-tap"]));{
									var _attrvalue4 = "";_attrvalue4 += _index === 1 || _index === 4 || _index === 7 || _index === 10 ? 'margin:10px 10px 0;' : 'margin:10px 0 0;';_attrvalue4 += "";_node12.attrs["style"] = _attrvalue4;
								}_node12.attrHash = _hash.nextHash(_node12.attrHash, _calTextHash(_node12.attrs["style"]));_$temp = _node12;{
									var _$parent14 = _$temp;_addText(_item.word, _$parent14);
								}_chFunc(_node12);_$parent13.children.push(_node12);
							}
						}
					}_chFunc(_node11);_$parent12.children.push(_node11);
				}_$temp = _node10;{
					var _$parent15 = _$temp;var _node13 = { "attrs": {}, "tagName": "div", "sid": 10 };_node13.children = [];_node13.attrSize = 1;_node13.attrHash = 2461161729;_node13.attrs["w-class"] = "btnBox";sure = { "zh_Hans": "确定", "zh_Hant": "確定", "en": "" };_$temp = _node13;{
						var _$parent16 = _$temp;var _node14 = { "attrs": {}, "tagName": "div", "sid": 11 };_node14.children = [];_node14.attrSize = 2;_node14.attrHash = 2450620553;_node14.attrs["ev-btn-tap"] = "nextStepClick";_node14.attrs["w-class"] = "btn";_$temp = _node14;{
							var _$parent17 = _$temp;var _node15 = { "attrs": {}, "tagName": "app-components1-btn-btn", "sid": 12 };_node15.hasChild = false;_node15.child = null;_node15.attrHash = 0;_$temp = _node15;{
								var _$parent18 = _$temp;var _node16 = {}; //jpair pre

								_node16["name"] = sure;
								//jpair suf
								//jpair pre

								{
									var _jvalue3 = "";
									_jvalue3 = "big";
									//jpair suf

									_node16["types"] = _jvalue3;
								}
								//jpair pre

								{
									var _jvalue4 = "";
									_jvalue4 = "blue";
									//jpair suf

									_node16["color"] = _jvalue4;
								}
								_addJson(_node16, _$parent18);
							}_chFunc(_node15);_$parent17.children.push(_node15);
						}_chFunc(_node14);_$parent16.children.push(_node14);
					}_chFunc(_node13);_$parent15.children.push(_node13);
				}_chFunc(_node10);_$parent11.children.push(_node10);
			}_chFunc(_node4);_$parent4.children.push(_node4);
		}_chFunc(_node);return _node;
	}
});