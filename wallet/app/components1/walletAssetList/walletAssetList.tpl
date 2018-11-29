(function (_cfg, it, it1) {
				var _$temp = void 0,
				    node = void 0;_$temp = node;{
								var _$parent = _$temp;var _node = { "attrs": {}, "tagName": "div", "sid": 0 };_node.children = [];_node.attrSize = 1;_node.attrHash = 222693721;_node.attrs["w-class"] = "list-container";{
												var _$i = 0;
												for (var _iterator = it.assetList, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator]();;) {
																var _ref;

																if (_isArray) {
																				if (_i >= _iterator.length) break;
																				_ref = _iterator[_i++];
																} else {
																				_i = _iterator.next();
																				if (_i.done) break;
																				_ref = _i.value;
																}

																var v = _ref;
																var i = _$i++;_$temp = _node;{
																				var _$parent2 = _$temp;var _node2 = { "attrs": {}, "tagName": "div", "sid": 1 };_node2.children = [];_node2.attrSize = 2;_node2.attrHash = 4137450365;_node2.attrs["w-class"] = "item";{
																								var attrvalue = "";attrvalue += "itemClick(e,";attrvalue += i;attrvalue += ")";_node2.attrs["on-tap"] = attrvalue;
																				}_node2.attrHash = _hash.nextHash(_node2.attrHash, _calTextHash(_node2.attrs["on-tap"]));_$temp = _node2;{
																								var _$parent3 = _$temp;var _node3 = { "attrs": {}, "tagName": "img", "sid": 2 };_node3.children = [];_node3.attrSize = 2;_node3.attrHash = 1484046671;{
																												var _attrvalue = "";_attrvalue += "../../res/image/currency/";_attrvalue += v.currencyName;_attrvalue += ".png";_node3.attrs["src"] = _attrvalue;
																								}_node3.attrHash = _hash.nextHash(_node3.attrHash, _calTextHash(_node3.attrs["src"]));_node3.attrs["w-class"] = "icon";_chFunc(_node3);_$parent3.children.push(_node3);
																				}_$temp = _node2;{
																								var _$parent4 = _$temp;var _node4 = { "attrs": {}, "tagName": "div", "sid": 3 };_node4.children = [];_node4.attrSize = 1;_node4.attrHash = 1548080441;_node4.attrs["w-class"] = "right-container";_$temp = _node4;{
																												var _$parent5 = _$temp;var _node5 = { "attrs": {}, "tagName": "div", "sid": 4 };_node5.children = [];_node5.attrSize = 1;_node5.attrHash = 1162860987;_node5.attrs["w-class"] = "top-container";_$temp = _node5;{
																																var _$parent6 = _$temp;var _node6 = { "attrs": {}, "tagName": "div", "sid": 5 };_node6.children = [];_node6.attrSize = 1;_node6.attrHash = 973517844;_node6.attrs["w-class"] = "currency-name";_$temp = _node6;{
																																				var _$parent7 = _$temp;_addText(v.currencyName, _$parent7);
																																}_chFunc(_node6);_$parent6.children.push(_node6);
																												}_$temp = _node5;{
																																var _$parent8 = _$temp;var _node7 = { "attrs": {}, "tagName": "div", "sid": 6 };_node7.children = [];_node7.attrSize = 1;_node7.attrHash = 1349797565;_node7.attrs["w-class"] = "balance";_$temp = _node7;{
																																				var _$parent9 = _$temp;_addText(v.balance % 1 === 0 ? v.balance.toFixed(2) : v.balance, _$parent9);
																																}_chFunc(_node7);_$parent8.children.push(_node7);
																												}_chFunc(_node5);_$parent5.children.push(_node5);
																								}_$temp = _node4;{
																												var _$parent10 = _$temp;var _node8 = { "attrs": {}, "tagName": "div", "sid": 7 };_node8.children = [];_node8.attrSize = 1;_node8.attrHash = 1923323011;_node8.attrs["w-class"] = "bottom-container";_$temp = _node8;{
																																var _$parent11 = _$temp;var _node9 = { "attrs": {}, "tagName": "div", "sid": 8 };_node9.children = [];_node9.attrSize = 1;_node9.attrHash = 4031233572;_node9.attrs["w-class"] = "description";_$temp = _node9;{
																																				var _$parent12 = _$temp;var _node10 = _installText("&nbsp;≈", 2860322560);;
																																				_$parent12.children.push(_node10);
																																}_$temp = _node9;{
																																				var _$parent13 = _$temp;_addText(it.currencyUnitSymbol, _$parent13);
																																}_$temp = _node9;{
																																				var _$parent14 = _$temp;_addText(v.rate, _$parent14);
																																}_$temp = _node9;{
																																				var _$parent15 = _$temp;var _node11 = _installText("/", 883865250);;
																																				_$parent15.children.push(_node11);
																																}_$temp = _node9;{
																																				var _$parent16 = _$temp;_addText(v.currencyName, _$parent16);
																																}_chFunc(_node9);_$parent11.children.push(_node9);
																												}_$temp = _node8;{
																																var _$parent17 = _$temp;var _node12 = { "attrs": {}, "tagName": "div", "sid": 9 };_node12.children = [];_node12.attrSize = 1;_node12.attrHash = 2888409400;_node12.attrs["w-class"] = "balance-container";_$temp = _node12;{
																																				var _$parent18 = _$temp;var _node13 = { "attrs": {}, "tagName": "div", "sid": 10 };_node13.children = [];_node13.attrSize = 1;_node13.attrHash = 1532757002;_node13.attrs["w-class"] = "balance-value";_$temp = _node13;{
																																								var _$parent19 = _$temp;_addText(it.currencyUnitSymbol, _$parent19);
																																				}_$temp = _node13;{
																																								var _$parent20 = _$temp;_addText(v.balanceValue, _$parent20);
																																				}_chFunc(_node13);_$parent18.children.push(_node13);
																																}if (it.redUp) {
																																				_$temp = _node12;{
																																								var _$parent21 = _$temp;var _node14 = { "attrs": {}, "tagName": "div", "sid": 11 };_node14.children = [];_node14.attrSize = 1;_node14.attrHash = 988550338;{
																																												var _attrvalue2 = "";_attrvalue2 += "gain ";_attrvalue2 += v.gain >= 0 ? 'gain-up' : 'gain-down';_attrvalue2 += "";_node14.attrs["w-class"] = _attrvalue2;
																																								}_node14.attrHash = _hash.nextHash(_node14.attrHash, _calTextHash(_node14.attrs["w-class"]));_$temp = _node14;{
																																												var _$parent22 = _$temp;_addText(v.gain >= 0 ? '+' : '', _$parent22);
																																								}_$temp = _node14;{
																																												var _$parent23 = _$temp;_addText(v.gain, _$parent23);
																																								}_$temp = _node14;{
																																												var _$parent24 = _$temp;var _node15 = _installText("%", 4257547020);;
																																												_$parent24.children.push(_node15);
																																								}_chFunc(_node14);_$parent21.children.push(_node14);
																																				}
																																} else {
																																				_$temp = _node12;{
																																								var _$parent25 = _$temp;var _node16 = { "attrs": {}, "tagName": "div", "sid": 12 };_node16.children = [];_node16.attrSize = 1;_node16.attrHash = 988550338;{
																																												var _attrvalue3 = "";_attrvalue3 += "gain ";_attrvalue3 += v.gain >= 0 ? 'gain-down' : 'gain-up';_attrvalue3 += "";_node16.attrs["w-class"] = _attrvalue3;
																																								}_node16.attrHash = _hash.nextHash(_node16.attrHash, _calTextHash(_node16.attrs["w-class"]));_$temp = _node16;{
																																												var _$parent26 = _$temp;_addText(v.gain >= 0 ? '+' : '', _$parent26);
																																								}_$temp = _node16;{
																																												var _$parent27 = _$temp;_addText(v.gain, _$parent27);
																																								}_$temp = _node16;{
																																												var _$parent28 = _$temp;var _node17 = _installText("%", 4257547020);;
																																												_$parent28.children.push(_node17);
																																								}_chFunc(_node16);_$parent25.children.push(_node16);
																																				}
																																}_chFunc(_node12);_$parent17.children.push(_node12);
																												}_chFunc(_node8);_$parent10.children.push(_node8);
																								}_chFunc(_node4);_$parent4.children.push(_node4);
																				}_chFunc(_node2);_$parent2.children.push(_node2);
																}
												}
								}_chFunc(_node);return _node;
				}
});