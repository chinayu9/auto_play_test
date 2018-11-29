(function (_cfg, it, it1) {
				var _$temp = void 0,
				    node = void 0;var con = ["连接初始化...", "连接中...", "已连接", "连接已断开"];var login = ["登录初始化...", "登录中...", "已登录", "重登中...", "登出中...", "已登出", "登录错误"];_$temp = node;{
								var _$parent = _$temp;var _node = { "attrs": {}, "tagName": "div", "sid": 0 };_node.children = [];_node.attrSize = 1;_node.attrHash = 1991980283;{
												var attrvalue = "";attrvalue += "display:";attrvalue += it.login != 2 || it.con != 2 ? 'block' : 'none';attrvalue += ";position:absolute;top:0;left:0;width: 100%;height: 100%;font-size: 20px;color: #fff;z-index:200;";_node.attrs["style"] = attrvalue;
								}_node.attrHash = _hash.nextHash(_node.attrHash, _calTextHash(_node.attrs["style"]));if (false) {
												if (it.con != 2) {
																_$temp = _node;{
																				var _$parent2 = _$temp;var _node2 = { "attrs": {}, "tagName": "span", "sid": 1 };_node2.children = [];_node2.attrHash = 0;_$temp = _node2;{
																								var _$parent3 = _$temp;_addText(con[it.con], _$parent3);
																				}_chFunc(_node2);_$parent2.children.push(_node2);
																}
												} else {
																_$temp = _node;{
																				var _$parent4 = _$temp;var _node3 = { "attrs": {}, "tagName": "span", "sid": 2 };_node3.children = [];_node3.attrHash = 0;_$temp = _node3;{
																								var _$parent5 = _$temp;_addText(login[it.login], _$parent5);
																				}_chFunc(_node3);_$parent4.children.push(_node3);
																}
												}
								}_$temp = _node;{
												var _$parent6 = _$temp;var _node4 = { "attrs": {}, "tagName": "div", "sid": 3 };_node4.children = [];_node4.childHash = 2946814719;_node4.attrSize = 1;_node4.attrHash = 4259106361;_node4.attrs["style"] = "position:absolute;top:0;left:0;width: 100%;height: 100%;background: #000;opacity: 0.3;";_$parent6.children.push(_node4);
								}_$temp = _node;{
												var _$parent7 = _$temp;var _node5 = { "attrs": {}, "tagName": "div", "sid": 4 };_node5.children = [];_node5.childHash = 1489217895;_node5.attrSize = 1;_node5.attrHash = 1518794529;_node5.attrs["style"] = "width:80px;height:40px;position:absolute;top:0;bottom:0;left:0;right:0;margin:auto;";_$temp = _node5;{
																var _$parent8 = _$temp;var _node6 = { "attrs": {}, "tagName": "div", "sid": 5 };_node6.children = [];_node6.childHash = 3809073328;_node6.attrSize = 1;_node6.attrHash = 1761107261;_node6.attrs["style"] = "width:80px;height:30px;text-align:center;";_$temp = _node6;{
																				var _$parent9 = _$temp;var _node7 = _installText("连接中", 1680043109);;
																				_$parent9.children.push(_node7);
																}_$parent8.children.push(_node6);
												}_$temp = _node5;{
																var _$parent10 = _$temp;var _node8 = { "attrs": {}, "tagName": "div", "sid": 6 };_node8.children = [];_node8.childHash = 2946814719;_node8.attrSize = 1;_node8.attrHash = 728915604;_node8.attrs["style"] = "width:40px;height:20px;background-image:url(./loading.gif);background-size:contain;background-repeat: no-repeat;margin:0 auto;";_$parent10.children.push(_node8);
												}_$parent7.children.push(_node5);
								}_chFunc(_node);return _node;
				}
});