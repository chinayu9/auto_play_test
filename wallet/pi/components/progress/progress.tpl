(function (_cfg, it, it1) {
				var _$temp = void 0,
				    node = void 0;_$temp = node;{
								var _$parent = _$temp;var _node = { "attrs": {}, "tagName": "div", "sid": 0 };_node.children = [];_node.attrHash = 0;if (it.type === "outer") {
												_$temp = _node;{
																var _$parent2 = _$temp;var _node2 = { "attrs": {}, "tagName": "div", "sid": 1 };_node2.children = [];_node2.attrSize = 1;_node2.attrHash = 3637728968;_node2.attrs["w-class"] = "bar";_$temp = _node2;{
																				var _$parent3 = _$temp;var _node3 = { "attrs": {}, "tagName": "div", "sid": 2 };_node3.children = [];_node3.attrSize = 2;_node3.attrHash = 4202906213;_node3.attrs["w-class"] = "bar_outer";_node3.attrs["style"] = "height: 6px;";_$temp = _node3;{
																								var _$parent4 = _$temp;var _node4 = { "attrs": {}, "tagName": "div", "sid": 3 };_node4.children = [];_node4.attrSize = 2;_node4.attrHash = 348320373;_node4.attrs["w-class"] = "bar_inner";{
																												var attrvalue = "";attrvalue += "width: ";attrvalue += it.value * 100;attrvalue += "%;background-color: ";attrvalue += it.color || '#409eff';attrvalue += ";";_node4.attrs["style"] = attrvalue;
																								}_node4.attrHash = _hash.nextHash(_node4.attrHash, _calTextHash(_node4.attrs["style"]));_chFunc(_node4);_$parent4.children.push(_node4);
																				}_chFunc(_node3);_$parent3.children.push(_node3);
																}_chFunc(_node2);_$parent2.children.push(_node2);
												}_$temp = _node;{
																var _$parent5 = _$temp;var _node5 = { "attrs": {}, "tagName": "div", "sid": 4 };_node5.children = [];_node5.attrSize = 2;_node5.attrHash = 4089951730;_node5.attrs["w-class"] = "outer_text";_node5.attrs["style"] = "font-size: 14.4px;";_$temp = _node5;{
																				var _$parent6 = _$temp;_addText(it.value * 100, _$parent6);
																}_$temp = _node5;{
																				var _$parent7 = _$temp;var _node6 = _installText("%", 4257547020);;
																				_$parent7.children.push(_node6);
																}_chFunc(_node5);_$parent5.children.push(_node5);
												}
								} else if (it.type === "inner") {
												_$temp = _node;{
																var _$parent8 = _$temp;var _node7 = { "attrs": {}, "tagName": "div", "sid": 5 };_node7.children = [];_node7.attrSize = 2;_node7.attrHash = 3512633203;_node7.attrs["w-class"] = "bar";_node7.attrs["style"] = "padding-right:0px;";_$temp = _node7;{
																				var _$parent9 = _$temp;var _node8 = { "attrs": {}, "tagName": "div", "sid": 6 };_node8.children = [];_node8.attrSize = 2;_node8.attrHash = 809220276;_node8.attrs["w-class"] = "bar_outer";_node8.attrs["style"] = "height: 18px;";_$temp = _node8;{
																								var _$parent10 = _$temp;var _node9 = { "attrs": {}, "tagName": "div", "sid": 7 };_node9.children = [];_node9.attrSize = 2;_node9.attrHash = 348320373;_node9.attrs["w-class"] = "bar_inner";{
																												var _attrvalue = "";_attrvalue += "width: ";_attrvalue += it.value * 100;_attrvalue += "%;background-color: ";_attrvalue += it.color || '#409eff';_attrvalue += ";";_node9.attrs["style"] = _attrvalue;
																								}_node9.attrHash = _hash.nextHash(_node9.attrHash, _calTextHash(_node9.attrs["style"]));_$temp = _node9;{
																												var _$parent11 = _$temp;var _node10 = { "attrs": {}, "tagName": "div", "sid": 8 };_node10.children = [];_node10.attrSize = 2;_node10.attrHash = 202228188;_node10.attrs["w-class"] = "inner_text";_node10.attrs["style"] = "font-size: 14.4px;";_$temp = _node10;{
																																var _$parent12 = _$temp;_addText(it.value * 100, _$parent12);
																												}_$temp = _node10;{
																																var _$parent13 = _$temp;var _node11 = _installText("%", 4257547020);;
																																_$parent13.children.push(_node11);
																												}_chFunc(_node10);_$parent11.children.push(_node10);
																								}_chFunc(_node9);_$parent10.children.push(_node9);
																				}_chFunc(_node8);_$parent9.children.push(_node8);
																}_chFunc(_node7);_$parent8.children.push(_node7);
												}
								} else if (it.type === "circle") {
												_$temp = _node;{
																var _$parent14 = _$temp;var _node12 = { "attrs": {}, "tagName": "div", "sid": 9 };_node12.children = [];_node12.attrSize = 1;_node12.attrHash = 3629771415;_node12.attrs["style"] = "width: 126px;height: 126px;position: relative;";_$temp = _node12;{
																				var _$parent15 = _$temp;var _node13 = { "attrs": {}, "tagName": "widget", "sid": 10 };_node13.hasChild = false;_node13.child = null;_node13.attrHash = 2047049699;_node13.attrs["w-tag"] = "ui-html";_node13.tagName = _node13.attrs["w-tag"];_$temp = _node13;{
																								var _$parent16 = _$temp;_addJson(it1.circleProgress, _$parent16);
																				}_chFunc(_node13);_$parent15.children.push(_node13);
																}if (it.status === "exception") {
																				_$temp = _node12;{
																								var _$parent17 = _$temp;var _node14 = { "attrs": {}, "tagName": "div", "sid": 11 };_node14.children = [];_node14.attrSize = 2;_node14.attrHash = 2616431846;_node14.attrs["w-class"] = "circle_text";{
																												var _attrvalue2 = "";_attrvalue2 += "font-size: 16px;color: ";_attrvalue2 += it.color || '#409eff';_attrvalue2 += ";";_node14.attrs["style"] = _attrvalue2;
																								}_node14.attrHash = _hash.nextHash(_node14.attrHash, _calTextHash(_node14.attrs["style"]));_$temp = _node14;{
																												var _$parent18 = _$temp;var _node15 = _installText("×", 2269959231);;
																												_$parent18.children.push(_node15);
																								}_chFunc(_node14);_$parent17.children.push(_node14);
																				}
																} else if (it.status === "success") {
																				_$temp = _node12;{
																								var _$parent19 = _$temp;var _node16 = { "attrs": {}, "tagName": "div", "sid": 12 };_node16.children = [];_node16.attrSize = 2;_node16.attrHash = 2616431846;_node16.attrs["w-class"] = "circle_text";{
																												var _attrvalue3 = "";_attrvalue3 += "font-size: 16px;color: ";_attrvalue3 += it.color || '#409eff';_attrvalue3 += ";";_node16.attrs["style"] = _attrvalue3;
																								}_node16.attrHash = _hash.nextHash(_node16.attrHash, _calTextHash(_node16.attrs["style"]));_$temp = _node16;{
																												var _$parent20 = _$temp;var _node17 = _installText("√", 4250526368);;
																												_$parent20.children.push(_node17);
																								}_chFunc(_node16);_$parent19.children.push(_node16);
																				}
																} else {
																				_$temp = _node12;{
																								var _$parent21 = _$temp;var _node18 = { "attrs": {}, "tagName": "div", "sid": 13 };_node18.children = [];_node18.attrSize = 2;_node18.attrHash = 4107846860;_node18.attrs["w-class"] = "circle_text";_node18.attrs["style"] = "font-size: 16px;";_$temp = _node18;{
																												var _$parent22 = _$temp;_addText(it.value * 100, _$parent22);
																								}_$temp = _node18;{
																												var _$parent23 = _$temp;var _node19 = _installText("%", 4257547020);;
																												_$parent23.children.push(_node19);
																								}_chFunc(_node18);_$parent21.children.push(_node18);
																				}
																}_chFunc(_node12);_$parent14.children.push(_node12);
												}
								}_chFunc(_node);return _node;
				}
});