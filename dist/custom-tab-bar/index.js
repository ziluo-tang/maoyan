(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["custom-tab-bar/index"],{

/***/ "./node_modules/babel-loader/lib/index.js!./src/custom-tab-bar/index.tsx":
/*!**********************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./src/custom-tab-bar/index.tsx ***!
  \**********************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _Users_tangxiaoxin_min_app_pape_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _tarojs_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @tarojs/components */ "./node_modules/@tarojs/plugin-platform-weapp/dist/components-react.js");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @tarojs/taro */ "./node_modules/@tarojs/taro/index.js");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_tarojs_taro__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/cjs/react.production.min.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _tabs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./tabs */ "./src/custom-tab-bar/tabs.ts");
/* harmony import */ var _index_module_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./index.module.scss */ "./src/custom-tab-bar/index.module.scss");
/* harmony import */ var _index_module_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_index_module_scss__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/cjs/react-jsx-runtime.production.min.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__);









var CusTomTabBar = function CusTomTabBar() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(0),
      _useState2 = Object(_Users_tangxiaoxin_min_app_pape_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(_useState, 2),
      currentTab = _useState2[0],
      setCurrent = _useState2[1];

  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    _tarojs_taro__WEBPACK_IMPORTED_MODULE_2___default.a.switchTab({
      url: _tabs__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"][currentTab].pagePath
    });
  }, [currentTab]);
  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_1__[/* CoverView */ "b"], {
    className: _index_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.tabWrapper,
    children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_1__[/* CoverView */ "b"], {
      className: _index_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.tabBarBorder
    }), _tabs__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"].map(function (tab, index) {
      var isSelected = index === currentTab;
      return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_1__[/* CoverView */ "b"], {
        onClick: function onClick() {
          return setCurrent(index);
        },
        className: _index_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.tabBarItem,
        children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_1__[/* CoverImage */ "a"], {
          src: isSelected ? tab.selectedImage : tab.image
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_1__[/* CoverView */ "b"], {
          style: {
            color: isSelected ? "#d4237a" : "#555555"
          },
          children: tab.text
        })]
      }, index);
    })]
  });
};

/* harmony default export */ __webpack_exports__["a"] = (CusTomTabBar);

/***/ }),

/***/ "./src/assets/image/cinema-selected.png":
/*!**********************************************!*\
  !*** ./src/assets/image/cinema-selected.png ***!
  \**********************************************/
/*! no static exports found */
/*! exports used: default */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/image/cinema-selected.png";

/***/ }),

/***/ "./src/assets/image/cinema.png":
/*!*************************************!*\
  !*** ./src/assets/image/cinema.png ***!
  \*************************************/
/*! no static exports found */
/*! exports used: default */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/image/cinema.png";

/***/ }),

/***/ "./src/assets/image/home-selected.png":
/*!********************************************!*\
  !*** ./src/assets/image/home-selected.png ***!
  \********************************************/
/*! no static exports found */
/*! exports used: default */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/image/home-selected.png";

/***/ }),

/***/ "./src/assets/image/home.png":
/*!***********************************!*\
  !*** ./src/assets/image/home.png ***!
  \***********************************/
/*! no static exports found */
/*! exports used: default */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/image/home.png";

/***/ }),

/***/ "./src/assets/image/mime-selected.png":
/*!********************************************!*\
  !*** ./src/assets/image/mime-selected.png ***!
  \********************************************/
/*! no static exports found */
/*! exports used: default */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/image/mime-selected.png";

/***/ }),

/***/ "./src/assets/image/mime.png":
/*!***********************************!*\
  !*** ./src/assets/image/mime.png ***!
  \***********************************/
/*! no static exports found */
/*! exports used: default */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/image/mime.png";

/***/ }),

/***/ "./src/custom-tab-bar/index.module.scss":
/*!**********************************************!*\
  !*** ./src/custom-tab-bar/index.module.scss ***!
  \**********************************************/
/*! no static exports found */
/*! exports used: default */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"tabWrapper":"index-module__tabWrapper___3ZO5D","tabBarBorder":"index-module__tabBarBorder___onv5D","tabBarItem":"index-module__tabBarItem___2_ZF0"};

/***/ }),

/***/ "./src/custom-tab-bar/index.tsx":
/*!**************************************!*\
  !*** ./src/custom-tab-bar/index.tsx ***!
  \**************************************/
/*! no exports provided */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tarojs/runtime */ "./node_modules/@tarojs/runtime/dist/runtime.esm.js");
/* harmony import */ var _node_modules_babel_loader_lib_index_js_index_tsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/babel-loader/lib!./index.tsx */ "./node_modules/babel-loader/lib/index.js!./src/custom-tab-bar/index.tsx");


var inst = Component(Object(_tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__["createComponentConfig"])(_node_modules_babel_loader_lib_index_js_index_tsx__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], 'custom-tab-bar/index'))



/***/ }),

/***/ "./src/custom-tab-bar/tabs.ts":
/*!************************************!*\
  !*** ./src/custom-tab-bar/tabs.ts ***!
  \************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _assets_image_home_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../assets/image/home.png */ "./src/assets/image/home.png");
/* harmony import */ var _assets_image_home_png__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_assets_image_home_png__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _assets_image_home_selected_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../assets/image/home-selected.png */ "./src/assets/image/home-selected.png");
/* harmony import */ var _assets_image_home_selected_png__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_assets_image_home_selected_png__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _assets_image_cinema_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../assets/image/cinema.png */ "./src/assets/image/cinema.png");
/* harmony import */ var _assets_image_cinema_png__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_assets_image_cinema_png__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _assets_image_cinema_selected_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../assets/image/cinema-selected.png */ "./src/assets/image/cinema-selected.png");
/* harmony import */ var _assets_image_cinema_selected_png__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_assets_image_cinema_selected_png__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _assets_image_mime_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../assets/image/mime.png */ "./src/assets/image/mime.png");
/* harmony import */ var _assets_image_mime_png__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_assets_image_mime_png__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _assets_image_mime_selected_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../assets/image/mime-selected.png */ "./src/assets/image/mime-selected.png");
/* harmony import */ var _assets_image_mime_selected_png__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_assets_image_mime_selected_png__WEBPACK_IMPORTED_MODULE_5__);






/* harmony default export */ __webpack_exports__["a"] = ([{
  text: "电影",
  image: _assets_image_home_png__WEBPACK_IMPORTED_MODULE_0___default.a,
  selectedImage: _assets_image_home_selected_png__WEBPACK_IMPORTED_MODULE_1___default.a,
  pagePath: '/pages/home/index'
}, {
  text: "影院",
  image: _assets_image_cinema_png__WEBPACK_IMPORTED_MODULE_2___default.a,
  selectedImage: _assets_image_cinema_selected_png__WEBPACK_IMPORTED_MODULE_3___default.a,
  pagePath: '/pages/cinema/index'
}, {
  text: "我的",
  image: _assets_image_mime_png__WEBPACK_IMPORTED_MODULE_4___default.a,
  selectedImage: _assets_image_mime_selected_png__WEBPACK_IMPORTED_MODULE_5___default.a,
  pagePath: '/pages/user/index'
}]);

/***/ })

},[["./src/custom-tab-bar/index.tsx","runtime","taro","vendors"]]]);
//# sourceMappingURL=index.js.map