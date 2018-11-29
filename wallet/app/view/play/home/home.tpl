(function (_cfg, it, it1) {
	var _$temp = void 0,
	    node = void 0;_$temp = node;{
		var _$parent = _$temp;var _node = { "attrs": {}, "tagName": "div", "sid": 0 };_node.children = [];_node.attrSize = 2;_node.attrHash = 138104688;_node.attrs["class"] = "new-page";_node.attrs["w-class"] = "new-page";_$temp = _node;{
			var _$parent2 = _$temp;var _node2 = { "attrs": {}, "tagName": "div", "sid": 1 };_node2.children = [];_node2.attrSize = 1;_node2.attrHash = 2188685783;_node2.attrs["w-class"] = "topBack";_$temp = _node2;{
				var _$parent3 = _$temp;var _node3 = { "attrs": {}, "tagName": "img", "sid": 2 };_node3.children = [];_node3.childHash = 0;_node3.attrSize = 2;_node3.attrHash = 3480930167;_node3.attrs["src"] = "../../../res/image1/topbar_backimg.png";_node3.attrs["w-class"] = "backImg";_$parent3.children.push(_node3);
			}_$temp = _node2;{
				var _$parent4 = _$temp;var _node4 = { "attrs": {}, "tagName": "app-components1-topBar-topBar1", "sid": 3 };_node4.hasChild = false;_node4.child = null;_node4.attrHash = 0;_$temp = _node4;{
					var _$parent5 = _$temp;var _node5 = {}; //jpair pre

					_node5["avatar"] = it.avatar;
					//jpair suf
					_addJson(_node5, _$parent5);
				}_chFunc(_node4);_$parent4.children.push(_node4);
			}_chFunc(_node2);_$parent2.children.push(_node2);
		}_$temp = _node;{
			var _$parent6 = _$temp;var _node6 = { "attrs": {}, "tagName": "div", "sid": 4 };_node6.children = [];_node6.attrSize = 1;_node6.attrHash = 4252679546;_node6.attrs["w-class"] = "body";_$temp = _node6;{
				var _$parent7 = _$temp;var _node7 = { "attrs": {}, "tagName": "widget", "sid": 5 };_node7.hasChild = false;_node7.child = null;_node7.attrSize = 1;_node7.attrHash = 2987932704;_node7.attrs["w-tag"] = "app-components1-card-card";_node7.tagName = _node7.attrs["w-tag"];_node7.attrs["on-tap"] = "gameClick(0)";_$temp = _node7;{
					var _$parent8 = _$temp;var _node8 = {}; //jpair pre

					_node8["title"] = it.gameList[0].title;
					//jpair suf
					//jpair pre

					_node8["img"] = it.gameList[0].img;
					//jpair suf
					//jpair pre

					_node8["desc"] = it.gameList[0].desc;
					//jpair suf
					_addJson(_node8, _$parent8);
				}_chFunc(_node7);_$parent7.children.push(_node7);
			}_$temp = _node6;{
				var _$parent9 = _$temp;var _node9 = { "attrs": {}, "tagName": "div", "sid": 6 };_node9.children = [];_node9.attrSize = 1;_node9.attrHash = 842016327;_node9.attrs["w-class"] = "hot-games";_$temp = _node9;{
					var _$parent10 = _$temp;var _node10 = { "attrs": {}, "tagName": "div", "sid": 7 };_node10.children = [];_node10.childHash = 2279393167;_node10.attrSize = 1;_node10.attrHash = 1144842323;_node10.attrs["w-class"] = "hot-game-title";_$temp = _node10;{
						var _$parent11 = _$temp;var _node11 = { "attrs": {}, "tagName": "pi-ui-lang", "sid": 8 };_node11.hasChild = false;_node11.child = null;_node11.childHash = 1132940885;_node11.attrHash = 0;_$temp = _node11;{
							var _$parent12 = _$temp;var _node12 = {}; //jpair pre

							{
								var jvalue = "";
								jvalue = "热门DApp";
								//jpair suf

								_node12["zh_Hans"] = jvalue;
							}
							//jpair pre

							{
								var _jvalue = "";
								_jvalue = "熱門DApp";
								//jpair suf

								_node12["zh_Hant"] = _jvalue;
							}
							//jpair pre

							{
								var _jvalue2 = "";
								_jvalue2 = "";
								//jpair suf

								_node12["en"] = _jvalue2;
							}
							_addJson(_node12, _$parent12);
						}_$parent11.children.push(_node11);
					}_$parent10.children.push(_node10);
				}{
					var _$i = 0;
					for (var _iterator = it.gameList, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator]();;) {
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
						var ind = _$i++;if (ind != 0) {
							_$temp = _node9;{
								var _$parent13 = _$temp;var _node13 = { "attrs": {}, "tagName": "widget", "sid": 9 };_node13.hasChild = false;_node13.child = null;_node13.attrSize = 1;_node13.attrHash = 3178001906;_node13.attrs["w-tag"] = "app-components1-card-card";_node13.tagName = _node13.attrs["w-tag"];{
									var attrvalue = "";attrvalue += "gameClick(";attrvalue += ind;attrvalue += ")";_node13.attrs["on-tap"] = attrvalue;
								}_node13.attrHash = _hash.nextHash(_node13.attrHash, _calTextHash(_node13.attrs["on-tap"]));_$temp = _node13;{
									var _$parent14 = _$temp;var _node14 = {}; //jpair pre

									_node14["title"] = item.title;
									//jpair suf
									//jpair pre

									_node14["img"] = item.img;
									//jpair suf
									//jpair pre

									_node14["desc"] = item.desc;
									//jpair suf
									_addJson(_node14, _$parent14);
								}_chFunc(_node13);_$parent13.children.push(_node13);
							}
						}
					}
				}_chFunc(_node9);_$parent9.children.push(_node9);
			}_chFunc(_node6);_$parent6.children.push(_node6);
		}_chFunc(_node);return _node;
	}
});