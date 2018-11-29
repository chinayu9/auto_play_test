_$define("pi/browser/imagePicker", function (require, exports, module){
"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * 图片导入（本地、相机）
 */
var native_1 = require("./native");

var ImagePicker = function (_native_1$NativeObjec) {
    _inherits(ImagePicker, _native_1$NativeObjec);

    function ImagePicker() {
        _classCallCheck(this, ImagePicker);

        return _possibleConstructorReturn(this, (ImagePicker.__proto__ || Object.getPrototypeOf(ImagePicker)).apply(this, arguments));
    }

    _createClass(ImagePicker, [{
        key: "selectFromLocal",

        /**
         * 从本地选择图片
         * @param param 参数
         */
        value: function selectFromLocal(param) {
            this.call('chooseImage', param);
        }
        /**
         * 打开相机拍摄
         * @param param 参数
         */

    }, {
        key: "openCamera",
        value: function openCamera(param) {
            // todo
        }
    }]);

    return ImagePicker;
}(native_1.NativeObject);

exports.ImagePicker = ImagePicker;
native_1.registerSign(ImagePicker, {
    chooseImage: [{
        name: 'useCamera',
        type: native_1.ParamType.Number
    }, {
        name: 'single',
        type: native_1.ParamType.Number
    }, {
        name: 'max',
        type: native_1.ParamType.Number
    }]
});
// export class ImagePicker extends NativeObject {
//     /**
//      * 从本地选择图片
//      * 调用成功返回
//      * 手机上的路径
//      * @param param 参数
//      */
//     public selectFromLocal(param: any) {
//         this.call('chooseImage', param);
//     }
//     /**
//      * 传入路径(手机上的路径)->Ahash
//      * @param param 
//      */
//     public calculateAHash(param:any) {
//         this.call('calcAHash',param);
//     }
//     /**
//      * 传入路径(手机上的路径)->Base64
//      * @param param 
//      */
//     public calculateBase64(param:any) {
//         this.call('calcBase64',param);
//     }
// }
// registerSign(ImagePicker, {
//     chooseImage: [
//         {
//             name: 'useCamera',// 是否使用相机----(传1表示 “是”，其它任何值都表示 “否”)
//             type: ParamType.Number
//         },
//         {
//             name: 'single',// 是否只选择一张照片(单选)----(传1表示 “是”，其它任何值都表示 “否”)
//             type: ParamType.Number
//         },
//         {
//             name: 'max',// 可以选择多张的情况下最大可以选择的张数
//             type: ParamType.Number
//         }
//     ],
//     calcAHash: [
//         {
//             /*
//              * 文件在手机里面的路径、传入路径可计算AHash
//              * 这个值会在调用 chooseImage(int, int, int)的时候获得
//              * 传回这个路径之后用于在WebView展示出用户选择的图片
//              * 而不再是传Base64的字符串了~
//              */
//             name: 'path',
//             type: ParamType.String
//         }
//     ],
//     calcBase64: [{
//         /*
//          * 文件在手机里面的路径、传入路径可计算Base64
//          * 这个值会在调用 chooseImage(int, int, int)的时候获得
//          * 传回这个路径之后用于在WebView展示出用户选择的图片
//          */
//         name: 'path',
//         type: ParamType.String
//     }]
// });
})