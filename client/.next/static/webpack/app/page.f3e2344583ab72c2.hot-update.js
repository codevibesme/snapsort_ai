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

/***/ "(app-pages-browser)/./src/components/ui/sticky-scroll-reveal.tsx":
/*!****************************************************!*\
  !*** ./src/components/ui/sticky-scroll-reveal.tsx ***!
  \****************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   StickyScroll: function() { return /* binding */ StickyScroll; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! framer-motion */ \"(app-pages-browser)/./node_modules/framer-motion/dist/es/value/use-transform.mjs\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! framer-motion */ \"(app-pages-browser)/./node_modules/framer-motion/dist/es/render/dom/motion.mjs\");\n/* harmony import */ var _utils_cn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/utils/cn */ \"(app-pages-browser)/./src/utils/cn.ts\");\n/* __next_internal_client_entry_do_not_use__ StickyScroll auto */ \nvar _s = $RefreshSig$();\n\n\n\n\nconst StickyScroll = (param)=>{\n    let { content, contentClassName } = param;\n    var _containerRef_current, _containerRef_current1, _containerRef_current2;\n    _s();\n    const [activeCard, setActiveCard] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(0);\n    const ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    const containerRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    // Move useTransform hook here\n    const scrollY = (0,framer_motion__WEBPACK_IMPORTED_MODULE_3__.useTransform)(ref.current, [\n        0,\n        (_containerRef_current = containerRef.current) === null || _containerRef_current === void 0 ? void 0 : _containerRef_current.offsetHeight\n    ], [\n        0,\n        ((_containerRef_current1 = containerRef.current) === null || _containerRef_current1 === void 0 ? void 0 : _containerRef_current1.scrollHeight) - ((_containerRef_current2 = containerRef.current) === null || _containerRef_current2 === void 0 ? void 0 : _containerRef_current2.offsetHeight)\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (!ref.current || !containerRef.current) return;\n        const updateActiveCard = ()=>{\n            const scrollProgress = scrollY.get() / (containerRef.current.scrollHeight - containerRef.current.offsetHeight);\n            const closestBreakpointIndex = Math.min(Math.floor(scrollProgress * content.length), content.length - 1);\n            setActiveCard(closestBreakpointIndex);\n        };\n        const onChange = ()=>{\n            updateActiveCard();\n        };\n        scrollY.onChange(onChange);\n        return ()=>{\n            scrollY.onChange(onChange);\n        };\n    }, [\n        ref.current,\n        containerRef.current,\n        content.length,\n        scrollY\n    ]); // Add scrollY to the dependency array\n    const backgroundColors = [\n        \"var(--slate-900)\",\n        \"var(--black)\",\n        \"var(--neutral-900)\"\n    ];\n    const linearGradients = [\n        \"linear-gradient(to bottom right, var(--cyan-500), var(--emerald-500))\",\n        \"linear-gradient(to bottom right, var(--pink-500), var(--indigo-500))\",\n        \"linear-gradient(to bottom right, var(--orange-500), var(--yellow-500))\"\n    ];\n    var _content_activeCard_content;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_4__.motion.div, {\n        animate: {\n            backgroundColor: backgroundColors[activeCard % backgroundColors.length]\n        },\n        className: \"h-[30rem] overflow-y-hidden flex justify-center relative space-x-10 rounded-md p-10\",\n        ref: ref,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"div relative flex items-start px-4\",\n                ref: containerRef,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"max-w-2xl\",\n                    children: [\n                        content.map((item, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"my-20\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_4__.motion.h2, {\n                                        initial: {\n                                            opacity: 0\n                                        },\n                                        animate: {\n                                            opacity: activeCard === index ? 1 : 0.3\n                                        },\n                                        className: \"text-2xl font-bold text-slate-100\",\n                                        children: item.title\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\business_project\\\\snapsort_ai\\\\client\\\\src\\\\components\\\\ui\\\\sticky-scroll-reveal.tsx\",\n                                        lineNumber: 73,\n                                        columnNumber: 15\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_4__.motion.p, {\n                                        initial: {\n                                            opacity: 0\n                                        },\n                                        animate: {\n                                            opacity: activeCard === index ? 1 : 0.3\n                                        },\n                                        className: \"text-kg text-slate-300 max-w-sm mt-10\",\n                                        children: item.description\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\business_project\\\\snapsort_ai\\\\client\\\\src\\\\components\\\\ui\\\\sticky-scroll-reveal.tsx\",\n                                        lineNumber: 84,\n                                        columnNumber: 15\n                                    }, undefined)\n                                ]\n                            }, item.title + index, true, {\n                                fileName: \"C:\\\\business_project\\\\snapsort_ai\\\\client\\\\src\\\\components\\\\ui\\\\sticky-scroll-reveal.tsx\",\n                                lineNumber: 72,\n                                columnNumber: 13\n                            }, undefined)),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"h-40\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\business_project\\\\snapsort_ai\\\\client\\\\src\\\\components\\\\ui\\\\sticky-scroll-reveal.tsx\",\n                            lineNumber: 97,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\business_project\\\\snapsort_ai\\\\client\\\\src\\\\components\\\\ui\\\\sticky-scroll-reveal.tsx\",\n                    lineNumber: 70,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\business_project\\\\snapsort_ai\\\\client\\\\src\\\\components\\\\ui\\\\sticky-scroll-reveal.tsx\",\n                lineNumber: 69,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_4__.motion.div, {\n                animate: {\n                    background: linearGradients[activeCard % linearGradients.length]\n                },\n                className: (0,_utils_cn__WEBPACK_IMPORTED_MODULE_2__.cn)(\"hidden lg:block h-60 w-80 rounded-md bg-white sticky top-10 overflow-hidden\", contentClassName),\n                children: (_content_activeCard_content = content[activeCard].content) !== null && _content_activeCard_content !== void 0 ? _content_activeCard_content : null\n            }, void 0, false, {\n                fileName: \"C:\\\\business_project\\\\snapsort_ai\\\\client\\\\src\\\\components\\\\ui\\\\sticky-scroll-reveal.tsx\",\n                lineNumber: 100,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\business_project\\\\snapsort_ai\\\\client\\\\src\\\\components\\\\ui\\\\sticky-scroll-reveal.tsx\",\n        lineNumber: 62,\n        columnNumber: 5\n    }, undefined);\n};\n_s(StickyScroll, \"q1Ee06WOo5MP3RAjWIMokca6YTU=\", false, function() {\n    return [\n        framer_motion__WEBPACK_IMPORTED_MODULE_3__.useTransform\n    ];\n});\n_c = StickyScroll;\nvar _c;\n$RefreshReg$(_c, \"StickyScroll\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL3VpL3N0aWNreS1zY3JvbGwtcmV2ZWFsLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFFaUQ7QUFDSjtBQUNOO0FBQ1A7QUFFekIsTUFBTU0sZUFBZTtRQUFDLEVBQzNCQyxPQUFPLEVBQ1BDLGdCQUFnQixFQVFqQjtRQVFPQyx1QkFDQUEsd0JBQXFDQTs7SUFSM0MsTUFBTSxDQUFDQyxZQUFZQyxjQUFjLEdBQUdYLHFEQUFjLENBQUM7SUFDbkQsTUFBTWEsTUFBTVosNkNBQU1BLENBQU07SUFDeEIsTUFBTVEsZUFBZVIsNkNBQU1BLENBQU07SUFFakMsOEJBQThCO0lBQzlCLE1BQU1hLFVBQVVYLDJEQUFZQSxDQUMxQlUsSUFBSUUsT0FBTyxFQUNYO1FBQUM7U0FBR04sd0JBQUFBLGFBQWFNLE9BQU8sY0FBcEJOLDRDQUFBQSxzQkFBc0JPLFlBQVk7S0FBQyxFQUN2QztRQUFDO1FBQUdQLEVBQUFBLHlCQUFBQSxhQUFhTSxPQUFPLGNBQXBCTiw2Q0FBQUEsdUJBQXNCUSxZQUFZLE1BQUdSLHlCQUFBQSxhQUFhTSxPQUFPLGNBQXBCTiw2Q0FBQUEsdUJBQXNCTyxZQUFZO0tBQUM7SUFHOUVkLGdEQUFTQSxDQUFDO1FBQ1IsSUFBSSxDQUFDVyxJQUFJRSxPQUFPLElBQUksQ0FBQ04sYUFBYU0sT0FBTyxFQUFFO1FBRTNDLE1BQU1HLG1CQUFtQjtZQUN2QixNQUFNQyxpQkFBaUJMLFFBQVFNLEdBQUcsS0FBTVgsQ0FBQUEsYUFBYU0sT0FBTyxDQUFDRSxZQUFZLEdBQUdSLGFBQWFNLE9BQU8sQ0FBQ0MsWUFBWTtZQUM3RyxNQUFNSyx5QkFBeUJDLEtBQUtDLEdBQUcsQ0FBQ0QsS0FBS0UsS0FBSyxDQUFDTCxpQkFBaUJaLFFBQVFrQixNQUFNLEdBQUdsQixRQUFRa0IsTUFBTSxHQUFHO1lBQ3RHZCxjQUFjVTtRQUNoQjtRQUVBLE1BQU1LLFdBQVc7WUFDZlI7UUFDRjtRQUVBSixRQUFRWSxRQUFRLENBQUNBO1FBRWpCLE9BQU87WUFDTFosUUFBUVksUUFBUSxDQUFDQTtRQUNuQjtJQUNGLEdBQUc7UUFBQ2IsSUFBSUUsT0FBTztRQUFFTixhQUFhTSxPQUFPO1FBQUVSLFFBQVFrQixNQUFNO1FBQUVYO0tBQVEsR0FBRyxzQ0FBc0M7SUFFeEcsTUFBTWEsbUJBQW1CO1FBQ3ZCO1FBQ0E7UUFDQTtLQUNEO0lBQ0QsTUFBTUMsa0JBQWtCO1FBQ3RCO1FBQ0E7UUFDQTtLQUNEO1FBa0RNckI7SUFoRFAscUJBQ0UsOERBQUNILGlEQUFNQSxDQUFDeUIsR0FBRztRQUNUQyxTQUFTO1lBQ1BDLGlCQUFpQkosZ0JBQWdCLENBQUNqQixhQUFhaUIsaUJBQWlCRixNQUFNLENBQUM7UUFDekU7UUFDQU8sV0FBVTtRQUNWbkIsS0FBS0E7OzBCQUVMLDhEQUFDZ0I7Z0JBQUlHLFdBQVU7Z0JBQXFDbkIsS0FBS0o7MEJBQ3ZELDRFQUFDb0I7b0JBQUlHLFdBQVU7O3dCQUNaekIsUUFBUTBCLEdBQUcsQ0FBQyxDQUFDQyxNQUFNQyxzQkFDbEIsOERBQUNOO2dDQUE2QkcsV0FBVTs7a0RBQ3RDLDhEQUFDNUIsaURBQU1BLENBQUNnQyxFQUFFO3dDQUNSQyxTQUFTOzRDQUNQQyxTQUFTO3dDQUNYO3dDQUNBUixTQUFTOzRDQUNQUSxTQUFTNUIsZUFBZXlCLFFBQVEsSUFBSTt3Q0FDdEM7d0NBQ0FILFdBQVU7a0RBRVRFLEtBQUtLLEtBQUs7Ozs7OztrREFFYiw4REFBQ25DLGlEQUFNQSxDQUFDb0MsQ0FBQzt3Q0FDUEgsU0FBUzs0Q0FDUEMsU0FBUzt3Q0FDWDt3Q0FDQVIsU0FBUzs0Q0FDUFEsU0FBUzVCLGVBQWV5QixRQUFRLElBQUk7d0NBQ3RDO3dDQUNBSCxXQUFVO2tEQUVURSxLQUFLTyxXQUFXOzs7Ozs7OytCQXJCWFAsS0FBS0ssS0FBSyxHQUFHSjs7Ozs7c0NBeUJ6Qiw4REFBQ047NEJBQUlHLFdBQVU7Ozs7Ozs7Ozs7Ozs7Ozs7OzBCQUduQiw4REFBQzVCLGlEQUFNQSxDQUFDeUIsR0FBRztnQkFDVEMsU0FBUztvQkFDUFksWUFBWWQsZUFBZSxDQUFDbEIsYUFBYWtCLGdCQUFnQkgsTUFBTSxDQUFDO2dCQUNsRTtnQkFDQU8sV0FBVzNCLDZDQUFFQSxDQUNYLCtFQUNBRzswQkFHREQsQ0FBQUEsOEJBQUFBLE9BQU8sQ0FBQ0csV0FBVyxDQUFDSCxPQUFPLGNBQTNCQSx5Q0FBQUEsOEJBQStCOzs7Ozs7Ozs7Ozs7QUFJeEMsRUFBRTtHQXpHV0Q7O1FBZ0JLSCx1REFBWUE7OztLQWhCakJHIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL3VpL3N0aWNreS1zY3JvbGwtcmV2ZWFsLnRzeD8yZjU3Il0sInNvdXJjZXNDb250ZW50IjpbIid1c2UgY2xpZW50JztcclxuXHJcbmltcG9ydCBSZWFjdCwgeyB1c2VSZWYsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyB1c2VUcmFuc2Zvcm0gfSBmcm9tIFwiZnJhbWVyLW1vdGlvblwiO1xyXG5pbXBvcnQgeyBtb3Rpb24gfSBmcm9tIFwiZnJhbWVyLW1vdGlvblwiO1xyXG5pbXBvcnQgeyBjbiB9IGZyb20gXCJAL3V0aWxzL2NuXCI7XHJcblxyXG5leHBvcnQgY29uc3QgU3RpY2t5U2Nyb2xsID0gKHtcclxuICBjb250ZW50LFxyXG4gIGNvbnRlbnRDbGFzc05hbWUsXHJcbn06IHtcclxuICBjb250ZW50OiB7XHJcbiAgICB0aXRsZTogc3RyaW5nO1xyXG4gICAgZGVzY3JpcHRpb246IHN0cmluZztcclxuICAgIGNvbnRlbnQ/OiBSZWFjdC5SZWFjdE5vZGUgfCBhbnk7XHJcbiAgfVtdO1xyXG4gIGNvbnRlbnRDbGFzc05hbWU/OiBzdHJpbmc7XHJcbn0pID0+IHtcclxuICBjb25zdCBbYWN0aXZlQ2FyZCwgc2V0QWN0aXZlQ2FyZF0gPSBSZWFjdC51c2VTdGF0ZSgwKTtcclxuICBjb25zdCByZWYgPSB1c2VSZWY8YW55PihudWxsKTtcclxuICBjb25zdCBjb250YWluZXJSZWYgPSB1c2VSZWY8YW55PihudWxsKTtcclxuXHJcbiAgLy8gTW92ZSB1c2VUcmFuc2Zvcm0gaG9vayBoZXJlXHJcbiAgY29uc3Qgc2Nyb2xsWSA9IHVzZVRyYW5zZm9ybShcclxuICAgIHJlZi5jdXJyZW50LFxyXG4gICAgWzAsIGNvbnRhaW5lclJlZi5jdXJyZW50Py5vZmZzZXRIZWlnaHRdLFxyXG4gICAgWzAsIGNvbnRhaW5lclJlZi5jdXJyZW50Py5zY3JvbGxIZWlnaHQgLSBjb250YWluZXJSZWYuY3VycmVudD8ub2Zmc2V0SGVpZ2h0XVxyXG4gICk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZiAoIXJlZi5jdXJyZW50IHx8ICFjb250YWluZXJSZWYuY3VycmVudCkgcmV0dXJuO1xyXG5cclxuICAgIGNvbnN0IHVwZGF0ZUFjdGl2ZUNhcmQgPSAoKSA9PiB7XHJcbiAgICAgIGNvbnN0IHNjcm9sbFByb2dyZXNzID0gc2Nyb2xsWS5nZXQoKSAvIChjb250YWluZXJSZWYuY3VycmVudC5zY3JvbGxIZWlnaHQgLSBjb250YWluZXJSZWYuY3VycmVudC5vZmZzZXRIZWlnaHQpO1xyXG4gICAgICBjb25zdCBjbG9zZXN0QnJlYWtwb2ludEluZGV4ID0gTWF0aC5taW4oTWF0aC5mbG9vcihzY3JvbGxQcm9ncmVzcyAqIGNvbnRlbnQubGVuZ3RoKSwgY29udGVudC5sZW5ndGggLSAxKTtcclxuICAgICAgc2V0QWN0aXZlQ2FyZChjbG9zZXN0QnJlYWtwb2ludEluZGV4KTtcclxuICAgIH07XHJcblxyXG4gICAgY29uc3Qgb25DaGFuZ2UgPSAoKSA9PiB7XHJcbiAgICAgIHVwZGF0ZUFjdGl2ZUNhcmQoKTtcclxuICAgIH07XHJcblxyXG4gICAgc2Nyb2xsWS5vbkNoYW5nZShvbkNoYW5nZSk7XHJcblxyXG4gICAgcmV0dXJuICgpID0+IHtcclxuICAgICAgc2Nyb2xsWS5vbkNoYW5nZShvbkNoYW5nZSk7XHJcbiAgICB9O1xyXG4gIH0sIFtyZWYuY3VycmVudCwgY29udGFpbmVyUmVmLmN1cnJlbnQsIGNvbnRlbnQubGVuZ3RoLCBzY3JvbGxZXSk7IC8vIEFkZCBzY3JvbGxZIHRvIHRoZSBkZXBlbmRlbmN5IGFycmF5XHJcblxyXG4gIGNvbnN0IGJhY2tncm91bmRDb2xvcnMgPSBbXHJcbiAgICBcInZhcigtLXNsYXRlLTkwMClcIixcclxuICAgIFwidmFyKC0tYmxhY2spXCIsXHJcbiAgICBcInZhcigtLW5ldXRyYWwtOTAwKVwiLFxyXG4gIF07XHJcbiAgY29uc3QgbGluZWFyR3JhZGllbnRzID0gW1xyXG4gICAgXCJsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tIHJpZ2h0LCB2YXIoLS1jeWFuLTUwMCksIHZhcigtLWVtZXJhbGQtNTAwKSlcIixcclxuICAgIFwibGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSByaWdodCwgdmFyKC0tcGluay01MDApLCB2YXIoLS1pbmRpZ28tNTAwKSlcIixcclxuICAgIFwibGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSByaWdodCwgdmFyKC0tb3JhbmdlLTUwMCksIHZhcigtLXllbGxvdy01MDApKVwiLFxyXG4gIF07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8bW90aW9uLmRpdlxyXG4gICAgICBhbmltYXRlPXt7XHJcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiBiYWNrZ3JvdW5kQ29sb3JzW2FjdGl2ZUNhcmQgJSBiYWNrZ3JvdW5kQ29sb3JzLmxlbmd0aF0sXHJcbiAgICAgIH19XHJcbiAgICAgIGNsYXNzTmFtZT1cImgtWzMwcmVtXSBvdmVyZmxvdy15LWhpZGRlbiBmbGV4IGp1c3RpZnktY2VudGVyIHJlbGF0aXZlIHNwYWNlLXgtMTAgcm91bmRlZC1tZCBwLTEwXCJcclxuICAgICAgcmVmPXtyZWZ9XHJcbiAgICA+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGl2IHJlbGF0aXZlIGZsZXggaXRlbXMtc3RhcnQgcHgtNFwiIHJlZj17Y29udGFpbmVyUmVmfT5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1heC13LTJ4bFwiPlxyXG4gICAgICAgICAge2NvbnRlbnQubWFwKChpdGVtLCBpbmRleCkgPT4gKFxyXG4gICAgICAgICAgICA8ZGl2IGtleT17aXRlbS50aXRsZSArIGluZGV4fSBjbGFzc05hbWU9XCJteS0yMFwiPlxyXG4gICAgICAgICAgICAgIDxtb3Rpb24uaDJcclxuICAgICAgICAgICAgICAgIGluaXRpYWw9e3tcclxuICAgICAgICAgICAgICAgICAgb3BhY2l0eTogMCxcclxuICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICBhbmltYXRlPXt7XHJcbiAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IGFjdGl2ZUNhcmQgPT09IGluZGV4ID8gMSA6IDAuMyxcclxuICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0ZXh0LTJ4bCBmb250LWJvbGQgdGV4dC1zbGF0ZS0xMDBcIlxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIHtpdGVtLnRpdGxlfVxyXG4gICAgICAgICAgICAgIDwvbW90aW9uLmgyPlxyXG4gICAgICAgICAgICAgIDxtb3Rpb24ucFxyXG4gICAgICAgICAgICAgICAgaW5pdGlhbD17e1xyXG4gICAgICAgICAgICAgICAgICBvcGFjaXR5OiAwLFxyXG4gICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgIGFuaW1hdGU9e3tcclxuICAgICAgICAgICAgICAgICAgb3BhY2l0eTogYWN0aXZlQ2FyZCA9PT0gaW5kZXggPyAxIDogMC4zLFxyXG4gICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInRleHQta2cgdGV4dC1zbGF0ZS0zMDAgbWF4LXctc20gbXQtMTBcIlxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIHtpdGVtLmRlc2NyaXB0aW9ufVxyXG4gICAgICAgICAgICAgIDwvbW90aW9uLnA+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgKSl9XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImgtNDBcIiAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPG1vdGlvbi5kaXZcclxuICAgICAgICBhbmltYXRlPXt7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kOiBsaW5lYXJHcmFkaWVudHNbYWN0aXZlQ2FyZCAlIGxpbmVhckdyYWRpZW50cy5sZW5ndGhdLFxyXG4gICAgICAgIH19XHJcbiAgICAgICAgY2xhc3NOYW1lPXtjbihcclxuICAgICAgICAgIFwiaGlkZGVuIGxnOmJsb2NrIGgtNjAgdy04MCByb3VuZGVkLW1kIGJnLXdoaXRlIHN0aWNreSB0b3AtMTAgb3ZlcmZsb3ctaGlkZGVuXCIsXHJcbiAgICAgICAgICBjb250ZW50Q2xhc3NOYW1lXHJcbiAgICAgICAgKX1cclxuICAgICAgPlxyXG4gICAgICAgIHtjb250ZW50W2FjdGl2ZUNhcmRdLmNvbnRlbnQgPz8gbnVsbH1cclxuICAgICAgPC9tb3Rpb24uZGl2PlxyXG4gICAgPC9tb3Rpb24uZGl2PlxyXG4gICk7XHJcbn07XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVJlZiIsInVzZUVmZmVjdCIsInVzZVRyYW5zZm9ybSIsIm1vdGlvbiIsImNuIiwiU3RpY2t5U2Nyb2xsIiwiY29udGVudCIsImNvbnRlbnRDbGFzc05hbWUiLCJjb250YWluZXJSZWYiLCJhY3RpdmVDYXJkIiwic2V0QWN0aXZlQ2FyZCIsInVzZVN0YXRlIiwicmVmIiwic2Nyb2xsWSIsImN1cnJlbnQiLCJvZmZzZXRIZWlnaHQiLCJzY3JvbGxIZWlnaHQiLCJ1cGRhdGVBY3RpdmVDYXJkIiwic2Nyb2xsUHJvZ3Jlc3MiLCJnZXQiLCJjbG9zZXN0QnJlYWtwb2ludEluZGV4IiwiTWF0aCIsIm1pbiIsImZsb29yIiwibGVuZ3RoIiwib25DaGFuZ2UiLCJiYWNrZ3JvdW5kQ29sb3JzIiwibGluZWFyR3JhZGllbnRzIiwiZGl2IiwiYW5pbWF0ZSIsImJhY2tncm91bmRDb2xvciIsImNsYXNzTmFtZSIsIm1hcCIsIml0ZW0iLCJpbmRleCIsImgyIiwiaW5pdGlhbCIsIm9wYWNpdHkiLCJ0aXRsZSIsInAiLCJkZXNjcmlwdGlvbiIsImJhY2tncm91bmQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/ui/sticky-scroll-reveal.tsx\n"));

/***/ })

});