/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "(pages-dir-node)/./components/ThemeToggle.js":
/*!***********************************!*\
  !*** ./components/ThemeToggle.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ ThemeToggle)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nfunction ThemeToggle() {\n    const [theme, setTheme] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('light');\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)({\n        \"ThemeToggle.useEffect\": ()=>{\n            // On mount, check localStorage or system preference\n            const stored = localStorage.getItem('theme');\n            if (stored) {\n                setTheme(stored);\n                document.documentElement.classList.toggle('dark', stored === 'dark');\n            } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {\n                setTheme('dark');\n                document.documentElement.classList.add('dark');\n            }\n        }\n    }[\"ThemeToggle.useEffect\"], []);\n    const toggleTheme = ()=>{\n        const newTheme = theme === 'light' ? 'dark' : 'light';\n        setTheme(newTheme);\n        localStorage.setItem('theme', newTheme);\n        document.documentElement.classList.toggle('dark', newTheme === 'dark');\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n        onClick: toggleTheme,\n        className: \"ml-4 px-2 py-1 rounded border border-gray-400 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-100 transition\",\n        \"aria-label\": \"Toggle theme\",\n        children: theme === 'light' ? '🌙' : '☀️'\n    }, void 0, false, {\n        fileName: \"/Users/monalisakarim/cursor 1/webby/components/ThemeToggle.js\",\n        lineNumber: 26,\n        columnNumber: 5\n    }, this);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHBhZ2VzLWRpci1ub2RlKS8uL2NvbXBvbmVudHMvVGhlbWVUb2dnbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQTJDO0FBRTVCLFNBQVNFO0lBQ3RCLE1BQU0sQ0FBQ0MsT0FBT0MsU0FBUyxHQUFHSCwrQ0FBUUEsQ0FBQztJQUVuQ0QsZ0RBQVNBO2lDQUFDO1lBQ1Isb0RBQW9EO1lBQ3BELE1BQU1LLFNBQVNDLGFBQWFDLE9BQU8sQ0FBQztZQUNwQyxJQUFJRixRQUFRO2dCQUNWRCxTQUFTQztnQkFDVEcsU0FBU0MsZUFBZSxDQUFDQyxTQUFTLENBQUNDLE1BQU0sQ0FBQyxRQUFRTixXQUFXO1lBQy9ELE9BQU8sSUFBSU8sT0FBT0MsVUFBVSxDQUFDLGdDQUFnQ0MsT0FBTyxFQUFFO2dCQUNwRVYsU0FBUztnQkFDVEksU0FBU0MsZUFBZSxDQUFDQyxTQUFTLENBQUNLLEdBQUcsQ0FBQztZQUN6QztRQUNGO2dDQUFHLEVBQUU7SUFFTCxNQUFNQyxjQUFjO1FBQ2xCLE1BQU1DLFdBQVdkLFVBQVUsVUFBVSxTQUFTO1FBQzlDQyxTQUFTYTtRQUNUWCxhQUFhWSxPQUFPLENBQUMsU0FBU0Q7UUFDOUJULFNBQVNDLGVBQWUsQ0FBQ0MsU0FBUyxDQUFDQyxNQUFNLENBQUMsUUFBUU0sYUFBYTtJQUNqRTtJQUVBLHFCQUNFLDhEQUFDRTtRQUNDQyxTQUFTSjtRQUNUSyxXQUFVO1FBQ1ZDLGNBQVc7a0JBRVZuQixVQUFVLFVBQVUsT0FBTzs7Ozs7O0FBR2xDIiwic291cmNlcyI6WyIvVXNlcnMvbW9uYWxpc2FrYXJpbS9jdXJzb3IgMS93ZWJieS9jb21wb25lbnRzL1RoZW1lVG9nZ2xlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gVGhlbWVUb2dnbGUoKSB7XG4gIGNvbnN0IFt0aGVtZSwgc2V0VGhlbWVdID0gdXNlU3RhdGUoJ2xpZ2h0JylcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIC8vIE9uIG1vdW50LCBjaGVjayBsb2NhbFN0b3JhZ2Ugb3Igc3lzdGVtIHByZWZlcmVuY2VcbiAgICBjb25zdCBzdG9yZWQgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndGhlbWUnKVxuICAgIGlmIChzdG9yZWQpIHtcbiAgICAgIHNldFRoZW1lKHN0b3JlZClcbiAgICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGFzc0xpc3QudG9nZ2xlKCdkYXJrJywgc3RvcmVkID09PSAnZGFyaycpXG4gICAgfSBlbHNlIGlmICh3aW5kb3cubWF0Y2hNZWRpYSgnKHByZWZlcnMtY29sb3Itc2NoZW1lOiBkYXJrKScpLm1hdGNoZXMpIHtcbiAgICAgIHNldFRoZW1lKCdkYXJrJylcbiAgICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGFzc0xpc3QuYWRkKCdkYXJrJylcbiAgICB9XG4gIH0sIFtdKVxuXG4gIGNvbnN0IHRvZ2dsZVRoZW1lID0gKCkgPT4ge1xuICAgIGNvbnN0IG5ld1RoZW1lID0gdGhlbWUgPT09ICdsaWdodCcgPyAnZGFyaycgOiAnbGlnaHQnXG4gICAgc2V0VGhlbWUobmV3VGhlbWUpXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3RoZW1lJywgbmV3VGhlbWUpXG4gICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsYXNzTGlzdC50b2dnbGUoJ2RhcmsnLCBuZXdUaGVtZSA9PT0gJ2RhcmsnKVxuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8YnV0dG9uXG4gICAgICBvbkNsaWNrPXt0b2dnbGVUaGVtZX1cbiAgICAgIGNsYXNzTmFtZT1cIm1sLTQgcHgtMiBweS0xIHJvdW5kZWQgYm9yZGVyIGJvcmRlci1ncmF5LTQwMCBkYXJrOmJvcmRlci1ncmF5LTYwMCBiZy13aGl0ZSBkYXJrOmJnLWdyYXktODAwIHRleHQtZ3JheS04MDAgZGFyazp0ZXh0LWdyYXktMTAwIHRyYW5zaXRpb25cIlxuICAgICAgYXJpYS1sYWJlbD1cIlRvZ2dsZSB0aGVtZVwiXG4gICAgPlxuICAgICAge3RoZW1lID09PSAnbGlnaHQnID8gJ/CfjJknIDogJ+KYgO+4jyd9XG4gICAgPC9idXR0b24+XG4gIClcbn0gIl0sIm5hbWVzIjpbInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiVGhlbWVUb2dnbGUiLCJ0aGVtZSIsInNldFRoZW1lIiwic3RvcmVkIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsImRvY3VtZW50IiwiZG9jdW1lbnRFbGVtZW50IiwiY2xhc3NMaXN0IiwidG9nZ2xlIiwid2luZG93IiwibWF0Y2hNZWRpYSIsIm1hdGNoZXMiLCJhZGQiLCJ0b2dnbGVUaGVtZSIsIm5ld1RoZW1lIiwic2V0SXRlbSIsImJ1dHRvbiIsIm9uQ2xpY2siLCJjbGFzc05hbWUiLCJhcmlhLWxhYmVsIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(pages-dir-node)/./components/ThemeToggle.js\n");

/***/ }),

/***/ "(pages-dir-node)/./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/globals.css */ \"(pages-dir-node)/./styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_ThemeToggle__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/ThemeToggle */ \"(pages-dir-node)/./components/ThemeToggle.js\");\n/* harmony import */ var mapbox_gl_dist_mapbox_gl_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! mapbox-gl/dist/mapbox-gl.css */ \"(pages-dir-node)/./node_modules/mapbox-gl/dist/mapbox-gl.css\");\n/* harmony import */ var mapbox_gl_dist_mapbox_gl_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(mapbox_gl_dist_mapbox_gl_css__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\nfunction MyApp({ Component, pageProps }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n        ...pageProps\n    }, void 0, false, {\n        fileName: \"/Users/monalisakarim/cursor 1/webby/pages/_app.js\",\n        lineNumber: 6,\n        columnNumber: 10\n    }, this);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHBhZ2VzLWRpci1ub2RlKS8uL3BhZ2VzL19hcHAuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQThCO0FBQ3FCO0FBQ2Q7QUFFckMsU0FBU0MsTUFBTSxFQUFFQyxTQUFTLEVBQUVDLFNBQVMsRUFBRTtJQUNyQyxxQkFBTyw4REFBQ0Q7UUFBVyxHQUFHQyxTQUFTOzs7Ozs7QUFDakM7QUFFQSxpRUFBZUYsS0FBS0EsRUFBQSIsInNvdXJjZXMiOlsiL1VzZXJzL21vbmFsaXNha2FyaW0vY3Vyc29yIDEvd2ViYnkvcGFnZXMvX2FwcC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgJy4uL3N0eWxlcy9nbG9iYWxzLmNzcydcbmltcG9ydCBUaGVtZVRvZ2dsZSBmcm9tICcuLi9jb21wb25lbnRzL1RoZW1lVG9nZ2xlJ1xuaW1wb3J0ICdtYXBib3gtZ2wvZGlzdC9tYXBib3gtZ2wuY3NzJ1xuXG5mdW5jdGlvbiBNeUFwcCh7IENvbXBvbmVudCwgcGFnZVByb3BzIH0pIHtcbiAgcmV0dXJuIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cbn1cblxuZXhwb3J0IGRlZmF1bHQgTXlBcHAgIl0sIm5hbWVzIjpbIlRoZW1lVG9nZ2xlIiwiTXlBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(pages-dir-node)/./pages/_app.js\n");

/***/ }),

/***/ "(pages-dir-node)/./styles/globals.css":
/*!****************************!*\
  !*** ./styles/globals.css ***!
  \****************************/
/***/ (() => {



/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/mapbox-gl"], () => (__webpack_exec__("(pages-dir-node)/./pages/_app.js")));
module.exports = __webpack_exports__;

})();