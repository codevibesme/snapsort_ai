"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./src/components/ui/text-generate-effect.tsx":
/*!****************************************************!*\
  !*** ./src/components/ui/text-generate-effect.tsx ***!
  \****************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   TextGenerateEffect: function() { return /* binding */ TextGenerateEffect; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! framer-motion */ \"(app-pages-browser)/./node_modules/framer-motion/dist/es/animation/hooks/use-animate.mjs\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! framer-motion */ \"(app-pages-browser)/./node_modules/framer-motion/dist/es/animation/utils/stagger.mjs\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! framer-motion */ \"(app-pages-browser)/./node_modules/framer-motion/dist/es/render/dom/motion.mjs\");\n/* harmony import */ var _utils_cn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/utils/cn */ \"(app-pages-browser)/./src/utils/cn.ts\");\n/* __next_internal_client_entry_do_not_use__ TextGenerateEffect auto */ \nvar _s = $RefreshSig$();\n\n\n\nconst TextGenerateEffect = (param)=>{\n    let { words, className } = param;\n    _s();\n    const [scope, animate] = (0,framer_motion__WEBPACK_IMPORTED_MODULE_3__.useAnimate)();\n    let wordsArray = words.split(\" \");\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        animate(\"span\", {\n            opacity: 1\n        }, {\n            duration: 1,\n            delay: (0,framer_motion__WEBPACK_IMPORTED_MODULE_4__.stagger)(0.3)\n        });\n    }, [\n        scope.current\n    ]);\n    const renderWords = ()=>{\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_5__.motion.div, {\n            ref: scope,\n            children: wordsArray.map((word, idx)=>{\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_5__.motion.span, {\n                    className: \" text-white opacity-0\",\n                    children: [\n                        word,\n                        \" \"\n                    ]\n                }, word + idx, true, {\n                    fileName: \"C:\\\\business_project\\\\snapsort_ai\\\\client\\\\src\\\\components\\\\ui\\\\text-generate-effect.tsx\",\n                    lineNumber: 33,\n                    columnNumber: 13\n                }, undefined);\n            })\n        }, void 0, false, {\n            fileName: \"C:\\\\business_project\\\\snapsort_ai\\\\client\\\\src\\\\components\\\\ui\\\\text-generate-effect.tsx\",\n            lineNumber: 30,\n            columnNumber: 7\n        }, undefined);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (0,_utils_cn__WEBPACK_IMPORTED_MODULE_2__.cn)(\"font-bold\", className),\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"mt-4\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \" dark:text-white text-black text-2xl leading-snug tracking-wide\",\n                children: renderWords()\n            }, void 0, false, {\n                fileName: \"C:\\\\business_project\\\\snapsort_ai\\\\client\\\\src\\\\components\\\\ui\\\\text-generate-effect.tsx\",\n                lineNumber: 48,\n                columnNumber: 9\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"C:\\\\business_project\\\\snapsort_ai\\\\client\\\\src\\\\components\\\\ui\\\\text-generate-effect.tsx\",\n            lineNumber: 47,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"C:\\\\business_project\\\\snapsort_ai\\\\client\\\\src\\\\components\\\\ui\\\\text-generate-effect.tsx\",\n        lineNumber: 46,\n        columnNumber: 5\n    }, undefined);\n};\n_s(TextGenerateEffect, \"crQrtxD822sFKyor5CO2nze/XGc=\", false, function() {\n    return [\n        framer_motion__WEBPACK_IMPORTED_MODULE_3__.useAnimate\n    ];\n});\n_c = TextGenerateEffect;\nvar _c;\n$RefreshReg$(_c, \"TextGenerateEffect\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL3VpL3RleHQtZ2VuZXJhdGUtZWZmZWN0LnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQ2tDO0FBQzBCO0FBQzVCO0FBRXpCLE1BQU1LLHFCQUFxQjtRQUFDLEVBQ2pDQyxLQUFLLEVBQ0xDLFNBQVMsRUFJVjs7SUFDQyxNQUFNLENBQUNDLE9BQU9DLFFBQVEsR0FBR04seURBQVVBO0lBQ25DLElBQUlPLGFBQWFKLE1BQU1LLEtBQUssQ0FBQztJQUM3QlgsZ0RBQVNBLENBQUM7UUFDUlMsUUFDRSxRQUNBO1lBQ0VHLFNBQVM7UUFDWCxHQUNBO1lBQ0VDLFVBQVU7WUFDVkMsT0FBT1osc0RBQU9BLENBQUM7UUFDakI7SUFFSixHQUFHO1FBQUNNLE1BQU1PLE9BQU87S0FBQztJQUVsQixNQUFNQyxjQUFjO1FBQ2xCLHFCQUNFLDhEQUFDZixpREFBTUEsQ0FBQ2dCLEdBQUc7WUFBQ0MsS0FBS1Y7c0JBQ2RFLFdBQVdTLEdBQUcsQ0FBQyxDQUFDQyxNQUFNQztnQkFDckIscUJBQ0UsOERBQUNwQixpREFBTUEsQ0FBQ3FCLElBQUk7b0JBRVZmLFdBQVU7O3dCQUVUYTt3QkFBTTs7bUJBSEZBLE9BQU9DOzs7OztZQU1sQjs7Ozs7O0lBR047SUFFQSxxQkFDRSw4REFBQ0o7UUFBSVYsV0FBV0gsNkNBQUVBLENBQUMsYUFBYUc7a0JBQzlCLDRFQUFDVTtZQUFJVixXQUFVO3NCQUNiLDRFQUFDVTtnQkFBSVYsV0FBVTswQkFDWlM7Ozs7Ozs7Ozs7Ozs7Ozs7QUFLWCxFQUFFO0dBaERXWDs7UUFPY0YscURBQVVBOzs7S0FQeEJFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL3VpL3RleHQtZ2VuZXJhdGUtZWZmZWN0LnRzeD9lYmE3Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xyXG5pbXBvcnQgeyB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgbW90aW9uLCBzdGFnZ2VyLCB1c2VBbmltYXRlIH0gZnJvbSBcImZyYW1lci1tb3Rpb25cIjtcclxuaW1wb3J0IHsgY24gfSBmcm9tIFwiQC91dGlscy9jblwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IFRleHRHZW5lcmF0ZUVmZmVjdCA9ICh7XHJcbiAgd29yZHMsXHJcbiAgY2xhc3NOYW1lLFxyXG59OiB7XHJcbiAgd29yZHM6IHN0cmluZztcclxuICBjbGFzc05hbWU/OiBzdHJpbmc7XHJcbn0pID0+IHtcclxuICBjb25zdCBbc2NvcGUsIGFuaW1hdGVdID0gdXNlQW5pbWF0ZSgpO1xyXG4gIGxldCB3b3Jkc0FycmF5ID0gd29yZHMuc3BsaXQoXCIgXCIpO1xyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBhbmltYXRlKFxyXG4gICAgICBcInNwYW5cIixcclxuICAgICAge1xyXG4gICAgICAgIG9wYWNpdHk6IDEsXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBkdXJhdGlvbjogMSxcclxuICAgICAgICBkZWxheTogc3RhZ2dlcigwLjMpLFxyXG4gICAgICB9XHJcbiAgICApO1xyXG4gIH0sIFtzY29wZS5jdXJyZW50XSk7XHJcblxyXG4gIGNvbnN0IHJlbmRlcldvcmRzID0gKCkgPT4ge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPG1vdGlvbi5kaXYgcmVmPXtzY29wZX0+XHJcbiAgICAgICAge3dvcmRzQXJyYXkubWFwKCh3b3JkLCBpZHgpID0+IHtcclxuICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxtb3Rpb24uc3BhblxyXG4gICAgICAgICAgICAgIGtleT17d29yZCArIGlkeH1cclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCIgdGV4dC13aGl0ZSBvcGFjaXR5LTBcIlxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAge3dvcmR9e1wiIFwifVxyXG4gICAgICAgICAgICA8L21vdGlvbi5zcGFuPlxyXG4gICAgICAgICAgKTtcclxuICAgICAgICB9KX1cclxuICAgICAgPC9tb3Rpb24uZGl2PlxyXG4gICAgKTtcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9e2NuKFwiZm9udC1ib2xkXCIsIGNsYXNzTmFtZSl9PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm10LTRcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIiBkYXJrOnRleHQtd2hpdGUgdGV4dC1ibGFjayB0ZXh0LTJ4bCBsZWFkaW5nLXNudWcgdHJhY2tpbmctd2lkZVwiPlxyXG4gICAgICAgICAge3JlbmRlcldvcmRzKCl9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuIl0sIm5hbWVzIjpbInVzZUVmZmVjdCIsIm1vdGlvbiIsInN0YWdnZXIiLCJ1c2VBbmltYXRlIiwiY24iLCJUZXh0R2VuZXJhdGVFZmZlY3QiLCJ3b3JkcyIsImNsYXNzTmFtZSIsInNjb3BlIiwiYW5pbWF0ZSIsIndvcmRzQXJyYXkiLCJzcGxpdCIsIm9wYWNpdHkiLCJkdXJhdGlvbiIsImRlbGF5IiwiY3VycmVudCIsInJlbmRlcldvcmRzIiwiZGl2IiwicmVmIiwibWFwIiwid29yZCIsImlkeCIsInNwYW4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/ui/text-generate-effect.tsx\n"));

/***/ })

});