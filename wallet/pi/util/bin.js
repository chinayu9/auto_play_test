_$define("pi/util/bin", function (require, exports, module){
"use strict";
/*
 * 二进制数据模块

小端-非网络字节序，和quic一致

用于通讯的类型需要压缩表示，充分利用第一个字节
0=null
1=true
2=false
3=浮点数0.0，4=浮点数1.0，5=16位浮点数，6=32位浮点数，7=64位浮点数，8=128位浮点数;
9~29= -1~19
30=8位正整数，31=16位正整数，32=32位正整数，33=48位正整数，34=64位正整数
35=8位负整数，36=16位负整数，37=32位负整数，38=48位负整数，39=64位负整数

40-104=0-64长度的二进制数据，
105=8位长度的二进制数据，106=16位长度的二进制数据，107=32位长度的二进制数据，108=48位长度的二进制数据，109=64位长度的二进制数据

110-174=0-64长度的UTF8字符串，
175=8位长度的UTF8字符串，176=16位长度的UTF8字符串，177=32位长度的UTF8字符串，178=48位长度的UTF8字符串，179=64位长度的UTF8字符串

180-244=0-64长度的容器，包括对象、数组和map、枚举
245=8位长度的容器，246=16位长度的容器，247=32位长度的容器，248=48位长度的容器，249=64位长度的容器
之后的一个4字节的整数表示类型。
类型：
    0 表示忽略
    1 通用对象
    2 通用数组
    3 通用map
    
如果是通用对象、数组、map，后面会有一个动态长度的整数，表示元素的数量。

容器，由于有总大小的描述，从而可以只对感兴趣的部分作反序列化

 */

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

Object.defineProperty(exports, "__esModule", { value: true });
var util_1 = require("./util");
/**
 * @description 写容器
 * @example
 */
exports.writeContainer = function (o, bb, writeNext) {
    if (Array.isArray(o)) {
        exports.writeArray(o, bb, writeNext);
    } else if (o instanceof Map) {
        exports.writeMap(o, bb, writeNext);
    } else {
        writeNext(bb, o);
    }
};
/**
 * @description 写数组
 * @example
 */
exports.writeArray = function (o, bb, writeNext) {
    for (var i = 0; i < o.length; i++) {
        bb.write(o[i], writeNext);
    }
};
/**
 * @description 写Map
 * @example
 */
exports.writeMap = function (o, bb, writeNext) {
    o.forEach(function (v, k) {
        bb.write(k, writeNext);
        bb.write(v, writeNext);
    });
};
/**
 * @description 读取二进制可序列化对象
 * @example
 */
exports.readContainer = function (bb, len, type, readNext) {
    switch (type) {
        case 1:
        // return readJson(bb, len);
        case 2:
            return exports.readArray(bb, readNext);
        case 3:
            return exports.readMap(bb, readNext);
        default:
            return readNext(bb, type, len);
    }
};
/**
 * @description 读取二进制可序列化对象
 * @example
 */
exports.readJson = function (bb, readNext) {
    var obj = {};
    var count = bb.readPInt();
    while (count-- > 0) {
        // tslint:disable:prefer-template
        obj['"' + bb.read(readNext) + '"'] = bb.read(readNext);
    }
    return obj;
};
/**
 * @description 读取二进制通用数组
 * @example
 */
exports.readArray = function (bb, readNext) {
    var arr = [];
    var count = bb.readPInt();
    while (count-- > 0) {
        arr.push(bb.read(readNext));
    }
    return arr;
};
/**
 * @description 读取二进制通用map
 * @example
 */
exports.readMap = function (bb, readNext) {
    var map = new Map();
    var count = bb.readPInt();
    while (count-- > 0) {
        map.set(bb.read(readNext), bb.read(readNext));
    }
    return map;
};
/**
 * @description 二进制数据缓存
 * @example
 */

var BinBuffer = function () {
    function BinBuffer(data, head, tail) {
        _classCallCheck(this, BinBuffer);

        if (!data || Number.isInteger(data)) {
            this.u8 = new Uint8Array(new ArrayBuffer(data || 32));
            this.view = new DataView(this.u8.buffer);
            this.head = 0;
            this.tail = 0;
        } else {
            this.u8 = data;
            this.view = new DataView(this.u8.buffer, this.u8.byteOffset, this.u8.byteLength);
            this.head = head || 0;
            this.tail = tail || this.u8.length;
        }
    }
    /**
     * @description 设置容量
     * @example
     */


    _createClass(BinBuffer, [{
        key: "setCapity",
        value: function setCapity(len) {
            if (this.tail > len) {
                return;
            }
            var u8 = new Uint8Array(len);
            u8.set(this.u8);
            this.u8 = u8;
            this.view = new DataView(u8.buffer);
        }
        /**
         * @description 扩大容量
         * @example
         */

    }, {
        key: "extendCapity",
        value: function extendCapity(len) {
            len = len + this.view.byteLength + 1;
            len *= factor;
            this.setCapity(len);
        }
        /**
         * @description 获得当前写入的数据
         * @example
         */

    }, {
        key: "getBuffer",
        value: function getBuffer() {
            return new Uint8Array(this.u8.buffer, this.u8.byteOffset + this.head, this.tail - this.head);
        }
        /**
         * @description 清空
         * @example
         */

    }, {
        key: "clear",
        value: function clear() {
            this.head = this.tail = 0;
        }
        /**
         * @description 写入任意类型
         * @example
         */

    }, {
        key: "write",
        value: function write(v, writeNext) {
            if (v === undefined || v === null) {
                return this.writeNil();
            }
            var t = typeof v === "undefined" ? "undefined" : _typeof(v);
            if (t === 'number') {
                return Number.isInteger(v) ? this.writeInt(v) : this.writeF64(v);
            }
            if (t === 'string') {
                return this.writeUtf8(v);
            }
            if (t === 'boolean') {
                return this.writeBool(v);
            }
            if (v instanceof ArrayBuffer) {
                return this.writeBin(new Uint8Array(v));
            }
            if (ArrayBuffer.isView(v) && v.BYTES_PER_ELEMENT > 0) {
                return this.writeBin(new Uint8Array(v.buffer, v.byteOffset, v.byteLength));
            }
            return this.writeCt(v, writeNext);
        }
        /**
         * @description 写入U8
         * @example
         */

    }, {
        key: "writeU8",
        value: function writeU8(v) {
            if (this.tail + 1 > this.view.byteLength) {
                this.extendCapity(1);
            }
            this.view.setUint8(this.tail++, v);
            return this;
        }
        /**
         * @description 写入U16
         * @example
         */

    }, {
        key: "writeU16",
        value: function writeU16(v) {
            if (this.tail + 2 > this.view.byteLength) {
                this.extendCapity(2);
            }
            this.view.setUint16(this.tail++, v);
            this.tail += 2;
            return this;
        }
        /**
         * @description 写入U32
         * @example
         */

    }, {
        key: "writeU32",
        value: function writeU32(v) {
            if (this.tail + 4 > this.view.byteLength) {
                this.extendCapity(4);
            }
            this.view.setUint32(this.tail, v);
            this.tail += 4;
            return this;
        }
        /**
         * @description 写入一个基本类型
         * @example
         */

    }, {
        key: "writeBase",
        value: function writeBase(v) {
            if (v === undefined || v === null) {
                return this.writeNil();
            }
            var t = typeof v === "undefined" ? "undefined" : _typeof(v);
            if (t === 'number') {
                return Number.isInteger(v) ? this.writeInt(v) : this.writeF64(v);
            }
            if (t === 'string') {
                return this.writeUtf8(v);
            }
            if (t === 'boolean') {
                return this.writeBool(v);
            }
            if (v instanceof ArrayBuffer) {
                return this.writeBin(new Uint8Array(v));
            }
            if (ArrayBuffer.isView(v) && v.BYTES_PER_ELEMENT > 0) {
                return this.writeBin(new Uint8Array(v.buffer, v.byteOffset, v.byteLength));
            }
        }
        /**
         * @description 写入一个空
         * @example
         */

    }, {
        key: "writeNil",
        value: function writeNil() {
            if (this.tail >= this.view.byteLength) {
                this.extendCapity(1);
            }
            this.view.setUint8(this.tail++, 0);
            return this;
        }
        /**
         * @description 写入一个布尔值
         * @example
         */

    }, {
        key: "writeBool",
        value: function writeBool(b) {
            if (this.tail >= this.view.byteLength) {
                this.extendCapity(1);
            }
            this.view.setUint8(this.tail++, b === true ? 1 : 2);
            return this;
        }
        /**
         * @description 写入一个整数
         * @example
         */

    }, {
        key: "writeInt",
        value: function writeInt(v) {
            if (v >= -1 && v < 20) {
                if (this.tail >= this.view.byteLength) {
                    this.extendCapity(1);
                }
                this.view.setUint8(this.tail++, v + 10);
                return this;
            }
            var i = 0;
            if (v < 0) {
                v = -v;
                i = 5;
            }
            if (v <= 0xFF) {
                if (this.tail + 2 > this.view.byteLength) {
                    this.extendCapity(2);
                }
                this.view.setUint8(this.tail++, i + 30);
                this.view.setUint8(this.tail++, v);
            } else if (v <= 0xFFFF) {
                if (this.tail + 3 > this.view.byteLength) {
                    this.extendCapity(3);
                }
                this.view.setUint8(this.tail++, i + 31);
                this.view.setUint16(this.tail, v, true);
                this.tail += 2;
            } else if (v <= 0xFFFFFFFF) {
                if (this.tail + 5 > this.view.byteLength) {
                    this.extendCapity(5);
                }
                this.view.setUint8(this.tail++, i + 32);
                this.view.setUint32(this.tail, v, true);
                this.tail += 4;
            } else if (v <= 0xFFFFFFFFFFFF) {
                if (this.tail + 7 > this.view.byteLength) {
                    this.extendCapity(7);
                }
                this.view.setUint8(this.tail++, i + 33);
                this.view.setUint16(this.tail, v & 0xffff, true);
                this.view.setUint32(this.tail + 2, Math.floor(v / 0x10000), true);
                this.tail += 6;
            } else {
                if (this.tail + 9 > this.view.byteLength) {
                    this.extendCapity(9);
                }
                // js里不会出现这种情况，最大安全整数只有 55位 9007199254740991
                this.view.setInt8(this.tail++, i + 34);
                this.view.setUint32(this.tail, v & 0xffffffff, true);
                this.view.setUint32(this.tail + 4, Math.floor(v / 0x100000000), true);
                this.tail += 8;
            }
            return this;
        }
        /**
         * @description 写入F32
         * @example
         */

    }, {
        key: "writeF32",
        value: function writeF32(v) {
            if (v === 0.0) {
                if (this.tail >= this.view.byteLength) {
                    this.extendCapity(1);
                }
                this.view.setUint8(this.tail++, 3);
                return this;
            }
            if (v === 1.0) {
                if (this.tail >= this.view.byteLength) {
                    this.extendCapity(1);
                }
                this.view.setUint8(this.tail++, 4);
                return this;
            }
            if (this.tail + 5 > this.view.byteLength) {
                this.extendCapity(5);
            }
            this.view.setInt8(this.tail++, 6);
            this.view.setFloat32(this.tail, v, true);
            this.tail += 4;
            return this;
        }
        /**
         * @description 写入F64
         * @example
         */

    }, {
        key: "writeF64",
        value: function writeF64(v) {
            if (v === 0.0) {
                if (this.tail >= this.view.byteLength) {
                    this.extendCapity(1);
                }
                this.view.setUint8(this.tail++, 3);
                return this;
            }
            if (v === 1.0) {
                if (this.tail >= this.view.byteLength) {
                    this.extendCapity(1);
                }
                this.view.setUint8(this.tail++, 4);
                return this;
            }
            if (this.tail + 9 > this.view.byteLength) {
                this.extendCapity(9);
            }
            this.view.setInt8(this.tail++, 7);
            this.view.setFloat64(this.tail, v, true);
            this.tail += 8;
            return this;
        }
        /**
         * @description 写入二进制数据
         * @example
         */

    }, {
        key: "writeBin",
        value: function writeBin(arr, offset, length) {
            return this.writeData(arr, 40, offset, length);
        }
        /**
         * @description 写入字符串，用utf8格式
         * @example
         */

    }, {
        key: "writeUtf8",
        value: function writeUtf8(s) {
            var arr = util_1.utf8Encode(s);
            return this.writeData(arr, 110);
        }
        /**
         * @description 写入数据
         * @example
         */

    }, {
        key: "writeData",
        value: function writeData(arr, type, offset, length) {
            if (!arr) {
                if (this.tail >= this.view.byteLength) {
                    this.extendCapity(1);
                }
                this.view.setUint8(this.tail++, type);
                return this;
            }
            length = length || arr.byteLength;
            if (length <= 64) {
                // 长度小于等于64， 本字节直接表达
                if (this.tail + length >= this.view.byteLength) {
                    this.extendCapity(length + 1);
                }
                this.view.setUint8(this.tail++, type + length);
            } else if (length <= 0xff) {
                // 长度小于256， 用下一个1字节记录
                if (this.tail + length + 2 > this.view.byteLength) {
                    this.extendCapity(length + 2);
                }
                this.view.setUint8(this.tail++, type + 65);
                this.view.setUint8(this.tail++, length);
            } else if (length <= 0xffff) {
                if (this.tail + length + 3 > this.view.byteLength) {
                    this.extendCapity(length + 3);
                }
                this.view.setUint8(this.tail++, type + 66);
                this.view.setUint16(this.tail, length, true);
                this.tail += 2;
            } else if (length <= 0xffffffff) {
                if (this.tail + length + 5 > this.view.byteLength) {
                    this.extendCapity(length + 5);
                }
                this.view.setUint8(this.tail++, type + 67);
                this.view.setUint32(this.tail, length, true);
                this.tail += 4;
            } else if (length <= 0xffffffffffff) {
                if (this.tail + length + 7 > this.view.byteLength) {
                    this.extendCapity(length + 7);
                }
                this.view.setUint8(this.tail++, type + 68);
                this.view.setUint16(this.tail, length & 0xffff, true);
                this.view.setUint32(this.tail + 2, Math.floor(length / 0x10000), true);
                this.tail += 6;
            } else {
                if (this.tail + length + 9 > this.view.byteLength) {
                    this.extendCapity(length + 9);
                }
                this.view.setUint8(this.tail++, type + 69);
                this.view.setUint32(this.tail, length & 0xffffffff, true);
                this.view.setUint32(this.tail + 4, Math.floor(length / 0x100000000), true);
                this.tail += 8;
            }
            this.u8.set(arr, this.tail);
            this.tail += length;
            return this;
        }
        /**
         * @description 写入一个正整数，不允许大于0x20000000，使用动态长度。这个地方需要使用网络序，大端在前
         * 1字节： 0xxxxxxx
         * 2字节： 10xxxxxx xxxxxxxx
         * 4字节： 110xxxxx xxxxxxxx xxxxxxxx xxxxxxxx
         * @example
         */

    }, {
        key: "writePInt",
        value: function writePInt(v) {
            if (v < 0x80) {
                if (this.tail >= this.view.byteLength) {
                    this.extendCapity(1);
                }
                this.view.setUint8(this.tail++, v);
                return this;
            }
            if (v < 0x4000) {
                if (this.tail + 2 > this.view.byteLength) {
                    this.extendCapity(2);
                }
                this.view.setUint16(this.tail, v + 0x8000);
                this.tail += 2;
                return this;
            }
            if (v < 0x20000000) {
                if (this.tail + 4 > this.view.byteLength) {
                    this.extendCapity(4);
                }
                this.view.setUint32(this.tail, v + 0xC0000000);
                this.tail += 4;
                return this;
            }
            throw new Error('invalid pint:' + v);
        }
        /**
         * @description 写入一个容器类型（对象、数组或map、枚举）
         * @example
         */
        // tslint:disable-next-line:cyclomatic-complexity

    }, {
        key: "writeCt",
        value: function writeCt(o, writeNext, estimatedSize) {
            var t = this.tail;
            // 根据预估大小，预留出足够的空间来写入容器的总大小
            estimatedSize = estimatedSize || 0xffff;
            var limitSize = void 0;
            if (estimatedSize <= 64) {
                if (t + 5 > this.view.byteLength) {
                    this.extendCapity(5);
                }
                this.tail++;
                limitSize = 64;
            } else if (estimatedSize <= 0xff) {
                if (t + 6 > this.view.byteLength) {
                    this.extendCapity(6);
                }
                this.tail += 2;
                limitSize = 0xff;
            } else if (estimatedSize <= 0xffff) {
                if (t + 8 > this.view.byteLength) {
                    this.extendCapity(8);
                }
                this.tail += 3;
                limitSize = 0xffff;
            } else if (estimatedSize <= 0xffffffff) {
                if (t + 10 > this.view.byteLength) {
                    this.extendCapity(10);
                }
                this.tail += 5;
                limitSize = 0xffffffff;
            } else if (estimatedSize <= 0xffffffffffff) {
                if (t + 12 > this.view.byteLength) {
                    this.extendCapity(12);
                }
                this.tail += 7;
                limitSize = 0xffffffffffff;
            } else {
                if (t + 14 > this.view.byteLength) {
                    this.extendCapity(14);
                }
                this.tail += 9;
                limitSize = 0xffffffffffffffff;
            }
            var tt = this.tail;
            exports.writeContainer(o, this, writeNext);
            var len = this.tail - tt;
            // 判断实际写入的大小超出预期的大小，需要移动数据
            if (limitSize < len) {
                var offset = void 0;
                if (len <= 0xff) {
                    offset = 2;
                    limitSize = 0xff;
                } else if (len <= 0xffff) {
                    offset = 3;
                    limitSize = 0xffff;
                } else if (len <= 0xffffffff) {
                    offset = 5;
                    limitSize = 0xffffffff;
                } else if (len <= 0xffffffffffff) {
                    offset = 7;
                    limitSize = 0xffffffffffff;
                } else {
                    offset = 9;
                    limitSize = 0xffffffffffffffff;
                }
                this.u8.set(new Uint8Array(this.u8.buffer, this.u8.byteOffset + tt, len), t + offset);
            }
            // 根据实际的限制大小，写入实际长度
            switch (limitSize) {
                case 64:
                    this.view.setUint8(t, len + 180);
                    break;
                case 0xff:
                    this.view.setUint8(t, 245);
                    this.view.setUint8(t + 1, len);
                    break;
                case 0xffff:
                    this.view.setUint8(t, 246);
                    this.view.setUint16(t + 1, len, true);
                    break;
                case 0xffffffff:
                    this.view.setUint8(t, 247);
                    this.view.setUint32(t + 1, len, true);
                    break;
                case 0xffffffffffff:
                    this.view.setUint8(t, 248);
                    this.view.setUint16(t + 1, len & 0xffff, true);
                    this.view.setUint32(t + 3, Math.floor(len / 0x10000), true);
                    break;
                default:
                    this.view.setUint8(t, 249);
                    this.view.setUint32(t + 1, len & 0xffffffff, true);
                    this.view.setUint32(t + 5, Math.floor(len / 0x100000000), true);
            }
            return this;
        }
        /**
         * @description 读出当前的类型（第一个字节，可能包含值或长度）
         * @example
         */

    }, {
        key: "getType",
        value: function getType() {
            if (this.head >= this.tail) {
                throw new Error('read overflow: ' + this.head);
            }
            return this.view.getUint8(this.head);
        }
        /**
         * @description 读u8
         * @example
         */

    }, {
        key: "readU8",
        value: function readU8() {
            return this.view.getUint8(this.head++);
        }
        /**
         * @description 读u16
         * @example
         */

    }, {
        key: "readU16",
        value: function readU16() {
            this.head += 2;
            return this.view.getUint16(this.head - 2);
        }
        /**
         * @description 读u16
         * @example
         */

    }, {
        key: "readU32",
        value: function readU32() {
            this.head += 4;
            return this.view.getUint32(this.head - 4);
        }
        /**
         * @description 读入一个类型的值
         * @example
         */

    }, {
        key: "read",
        value: function read(readNext) {
            if (this.head >= this.tail) {
                throw new Error('read overflow: ' + this.head);
            }
            var t = this.view.getUint8(this.head++);
            // 由于文件不能太长以及一个switch不能有过多的值，故这里分段处理
            var r = this.read1(t);
            if (r !== undefined) return r;
            r = this.read2(t, readNext);
            if (r !== undefined) return r;
            r = this.read3(t, readNext);
            return r;
        }
        /**
         * @description 读出一个正整数，不允许大于0x20000000，使用动态长度
         * @example
         */

    }, {
        key: "readPInt",
        value: function readPInt() {
            var v = this.view.getUint8(this.head);
            if (v < 0x80) {
                this.head++;
                return v;
            }
            if (v < 0xC0) {
                this.head += 2;
                return this.view.getUint16(this.head - 2) - 0x8000;
            }
            if (v < 0xE0) {
                this.head += 4;
                return this.view.getUint32(this.head - 4) - 0xC0000000;
            }
            throw new Error('invalid pint:' + v);
        }
        /**
         * 读入一个类型的值（第一段）
         * @param t 类型
         */

    }, {
        key: "read1",
        value: function read1(t) {
            var r = void 0;
            switch (t) {
                case 0:
                    r = null;
                    break;
                case 1:
                    r = true;
                    break;
                case 2:
                    r = false;
                    break;
                case 3:
                    r = 0.0;
                    break;
                case 4:
                    r = 1.0;
                    break;
                case 5:
                    r = new Error('unused type :' + t);
                    break;
                case 6:
                    this.head += 4;
                    r = this.view.getFloat32(this.head - 4, true);
                    break;
                case 7:
                    this.head += 8;
                    r = this.view.getFloat64(this.head - 8, true);
                    break;
                case 9:
                    throw new Error('unused type :' + t);
                case 30:
                    r = this.view.getUint8(this.head++);
                    break;
                case 31:
                    this.head += 2;
                    r = this.view.getUint16(this.head - 2, true);
                    break;
                case 32:
                    this.head += 4;
                    r = this.view.getUint32(this.head - 4, true);
                    break;
                case 33:
                    this.head += 6;
                    r = this.view.getUint16(this.head - 6, true) + this.view.getUint32(this.head - 4, true) * 0x10000;
                    break;
                case 34:
                    this.head += 8;
                    r = this.view.getUint32(this.head - 8, true) + this.view.getUint32(this.head - 4, true) * 0x100000000;
                    break;
                case 35:
                    r = -this.view.getUint8(this.head++);
                    break;
                case 36:
                    this.head += 2;
                    r = -this.view.getUint16(this.head - 2, true);
                    break;
                case 37:
                    this.head += 4;
                    r = -this.view.getUint32(this.head - 4, true);
                    break;
                case 38:
                    this.head += 6;
                    r = -this.view.getUint16(this.head - 6, true) - this.view.getUint32(this.head - 4, true) * 0x10000;
                    break;
                default:
            }
            return r;
        }
        /**
         * 读入一个类型的值（第二段）
         * @param t 类型
         * @param len 长度
         * @param readNext 读取下一条数据
         */

    }, {
        key: "read2",
        value: function read2(t, readNext) {
            var r = void 0;
            var len = void 0;
            switch (t) {
                case 39:
                    this.head += 8;
                    r = -this.view.getUint32(this.head - 8, true) - this.view.getUint32(this.head - 4, true) * 0x100000000;
                    break;
                case 105:
                    len = this.view.getUint8(this.head);
                    this.head += len + 1;
                    r = this.u8.slice(this.head - len, this.head);
                    break;
                case 106:
                    len = this.view.getUint16(this.head, true);
                    this.head += len + 2;
                    r = this.u8.slice(this.head - len, this.head);
                    break;
                case 107:
                    len = this.view.getUint32(this.head, true);
                    this.head += len + 4;
                    r = this.u8.slice(this.head - len, this.head);
                    break;
                case 108:
                    len = this.view.getUint16(this.head, true) + this.view.getUint32(this.head + 2, true) * 0x10000;
                    this.head += len + 6;
                    r = this.u8.slice(this.head - len, this.head);
                    break;
                case 109:
                    len = this.view.getUint32(this.head, true) + this.view.getUint32(this.head + 4, true) * 0x100000000;
                    this.head += len + 8;
                    r = this.u8.slice(this.head - len, this.head);
                    break;
                case 175:
                    len = this.view.getUint8(this.head);
                    this.head += len + 1;
                    r = util_1.utf8Decode(new Uint8Array(this.view.buffer, this.view.byteOffset + this.head - len, len));
                    break;
                case 176:
                    len = this.view.getUint16(this.head, true);
                    this.head += len + 2;
                    r = util_1.utf8Decode(new Uint8Array(this.view.buffer, this.view.byteOffset + this.head - len, len));
                    break;
                case 177:
                    len = this.view.getUint32(this.head, true);
                    this.head += len + 4;
                    r = util_1.utf8Decode(new Uint8Array(this.view.buffer, this.view.byteOffset + this.head - len, len));
                    break;
                case 178:
                    len = this.view.getUint16(this.head, true) + this.view.getUint32(this.head + 2, true) * 0x10000;
                    this.head += len + 6;
                    r = util_1.utf8Decode(new Uint8Array(this.view.buffer, this.view.byteOffset + this.head - len, len));
                    break;
                case 179:
                    len = this.view.getUint32(this.head, true) + this.view.getUint32(this.head + 4, true) * 0x100000000;
                    this.head += len + 8;
                    r = util_1.utf8Decode(new Uint8Array(this.view.buffer, this.view.byteOffset + this.head - len, len));
                    break;
                case 245:
                    len = this.view.getUint8(this.head);
                    this.head += 6;
                    r = exports.readContainer(this, len, this.view.getUint32(this.head - 4, true), readNext);
                    break;
                case 246:
                    len = this.view.getUint16(this.head, true);
                    this.head += 7;
                    r = exports.readContainer(this, len, this.view.getUint32(this.head - 4, true), readNext);
                    break;
                case 247:
                    len = this.view.getUint32(this.head, true);
                    this.head += 9;
                    r = exports.readContainer(this, len, this.view.getUint32(this.head - 4, true), readNext);
                    break;
                case 248:
                    len = this.view.getUint16(this.head, true) + this.view.getUint32(this.head + 2, true) * 0x10000;
                    this.head += 11;
                    r = exports.readContainer(this, len, this.view.getUint32(this.head - 4, true), readNext);
                    break;
                case 249:
                    len = this.view.getUint32(this.head, true) + this.view.getUint32(this.head + 4, true) * 0x100000000;
                    this.head += 13;
                    r = exports.readContainer(this, len, this.view.getUint32(this.head - 4, true), readNext);
                    break;
                default:
            }
            return r;
        }
        /**
         * 读入一个类型的值（第三段）
         * @param t 类型
         * @param len 长度
         * @param readNext 读取下一条数据
         */

    }, {
        key: "read3",
        value: function read3(t, readNext) {
            var len = void 0;
            if (t < 30) {
                return t - 10;
            }
            if (t < 105) {
                // 读取二进制数据
                len = t - 40;
                this.head += len;
                return this.u8.slice(this.head - len, this.head);
            }
            if (t < 175) {
                // 读取utf8编码的字符串
                len = t - 110;
                this.head += len;
                return util_1.utf8Decode(new Uint8Array(this.view.buffer, this.view.byteOffset + this.head - len, len));
            }
            if (t < 245) {
                // 读取容器类型
                return readNext(this, t - 180);
            }
            throw new Error('invalid type :' + t);
        }
    }]);

    return BinBuffer;
}();

exports.BinBuffer = BinBuffer;
// ============================== 本地
// 增长因子
var factor = 1.6;
})