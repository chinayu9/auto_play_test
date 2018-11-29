_$define("pi/browser/argonHash", function (require, exports, module){
"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var __awaiter = undefined && undefined.__awaiter || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
            try {
                step(generator.next(value));
            } catch (e) {
                reject(e);
            }
        }
        function rejected(value) {
            try {
                step(generator["throw"](value));
            } catch (e) {
                reject(e);
            }
        }
        function step(result) {
            result.done ? resolve(result.value) : new P(function (resolve) {
                resolve(result.value);
            }).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * memory hash
 */
var native_1 = require("./native");

var ArgonHash = function (_native_1$NativeObjec) {
    _inherits(ArgonHash, _native_1$NativeObjec);

    function ArgonHash() {
        _classCallCheck(this, ArgonHash);

        return _possibleConstructorReturn(this, (ArgonHash.__proto__ || Object.getPrototypeOf(ArgonHash)).apply(this, arguments));
    }

    _createClass(ArgonHash, [{
        key: "calcHashValue",

        /**
         * 从本地选择图片
         * @param param 参数
         */
        value: function calcHashValue(iParam, successF, failF) {
            var param = {
                success: successF,
                fail: failF,
                t: 1,
                m: 256 * 1024,
                p: 8,
                pwd: iParam.pwd || 'password',
                salt: iParam.salt || 'somesalt',
                type: 2,
                hashLen: 32
            };
            if (navigator.userAgent.indexOf('YINENG') < 0) {
                this.calcHashValueAtPc('getArgon2Hash', param);
            } else {
                this.call('getArgon2Hash', param);
            }
        }
    }, {
        key: "calcHashValuePromise",
        value: function calcHashValuePromise(iParam) {
            return __awaiter(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
                var _this2 = this;

                return regeneratorRuntime.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                return _context.abrupt("return", new Promise(function (resolve, reject) {
                                    _this2.calcHashValue(iParam, function (result) {
                                        return resolve(result);
                                    }, function (err) {
                                        alert("\u5931\u8D25" + err);
                                        return reject(err);
                                    });
                                }));

                            case 1:
                            case "end":
                                return _context.stop();
                        }
                    }
                }, _callee, this);
            }));
        }
    }, {
        key: "calcHashValueAtPc",
        value: function calcHashValueAtPc(iType, param) {
            if (iType === 'getArgon2Hash') {
                setTimeout(function () {
                    pi_modules.commonjs.exports.require(['app/utils_pc/argon2'], {}, function (mods, fm) {
                        // todo 这里考虑使用worker进行处理
                        var hash = mods[0].getArgonHash(param.pwd, param.salt, param.t, param.m, param.hashLen, param.p, 1);
                        param.success(hash);
                        console.log(mods, fm);
                    });
                }, 1000);
            }
        }
    }]);

    return ArgonHash;
}(native_1.NativeObject);

exports.ArgonHash = ArgonHash;
native_1.registerSign(ArgonHash, {
    getArgon2Hash: [{
        name: 't',
        type: native_1.ParamType.Number
    }, {
        name: 'm',
        type: native_1.ParamType.Number
    }, {
        name: 'p',
        type: native_1.ParamType.Number
    }, {
        name: 'pwd',
        type: native_1.ParamType.String
    }, {
        name: 'salt',
        type: native_1.ParamType.String
    }, {
        name: 'type',
        type: native_1.ParamType.Number
    }, {
        name: 'hashLen',
        type: native_1.ParamType.Number
    }]
});
/**
 * 这是测试
 */
var test = function test() {
    var hash = new ArgonHash();
    hash.init();
    hash.calcHashValue({ pwd: 'password', salt: 'somesalt' }, function (result) {
        alert("\u6210\u529F" + result);
    }, function (result) {
        alert("\u5931\u8D25" + result);
    });
};
})