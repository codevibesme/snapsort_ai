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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   StickyScroll: function() { return /* binding */ StickyScroll; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! framer-motion */ \"(app-pages-browser)/./node_modules/framer-motion/dist/es/value/use-transform.mjs\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! framer-motion */ \"(app-pages-browser)/./node_modules/framer-motion/dist/es/render/dom/motion.mjs\");\n/* harmony import */ var _utils_cn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/utils/cn */ \"(app-pages-browser)/./src/utils/cn.ts\");\n/* __next_internal_client_entry_do_not_use__ StickyScroll auto */ \nvar _s = $RefreshSig$();\n\n\n\n\nconst StickyScroll = (param)=>{\n    let { content, contentClassName } = param;\n    _s();\n    var _s1 = $RefreshSig$();\n    const [activeCard, setActiveCard] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(0);\n    const ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    const containerRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(_s1(()=>{\n        _s1();\n        if (!ref.current || !containerRef.current) return;\n        const scrollY = (0,framer_motion__WEBPACK_IMPORTED_MODULE_3__.useTransform)(ref.current, [\n            0,\n            containerRef.current.offsetHeight\n        ], [\n            0,\n            containerRef.current.scrollHeight - containerRef.current.offsetHeight\n        ]);\n        const updateActiveCard = ()=>{\n            const scrollProgress = scrollY.get() / (containerRef.current.scrollHeight - containerRef.current.offsetHeight);\n            const closestBreakpointIndex = Math.min(Math.floor(scrollProgress * content.length), content.length - 1);\n            setActiveCard(closestBreakpointIndex);\n        };\n        const onChange = ()=>{\n            updateActiveCard();\n        };\n        scrollY.onChange(onChange);\n        return ()=>{\n            scrollY.onChange(onChange);\n        };\n    }, \"niIoVA1L5NBdf6VtT2eYHMt9qfo=\", false, function() {\n        return [\n            framer_motion__WEBPACK_IMPORTED_MODULE_3__.useTransform\n        ];\n    }), [\n        ref.current,\n        containerRef.current,\n        content.length\n    ]);\n    const backgroundColors = [\n        \"var(--slate-900)\",\n        \"var(--black)\",\n        \"var(--neutral-900)\"\n    ];\n    const linearGradients = [\n        \"linear-gradient(to bottom right, var(--cyan-500), var(--emerald-500))\",\n        \"linear-gradient(to bottom right, var(--pink-500), var(--indigo-500))\",\n        \"linear-gradient(to bottom right, var(--orange-500), var(--yellow-500))\"\n    ];\n    var _content_activeCard_content;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_4__.motion.div, {\n        animate: {\n            backgroundColor: backgroundColors[activeCard % backgroundColors.length]\n        },\n        className: \"h-[30rem] overflow-y-hidden flex justify-center relative space-x-10 rounded-md p-10\",\n        ref: ref,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"div relative flex items-start px-4\",\n                ref: containerRef,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"max-w-2xl\",\n                    children: [\n                        content.map((item, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"my-20\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_4__.motion.h2, {\n                                        initial: {\n                                            opacity: 0\n                                        },\n                                        animate: {\n                                            opacity: activeCard === index ? 1 : 0.3\n                                        },\n                                        className: \"text-2xl font-bold text-slate-100\",\n                                        children: item.title\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\business_project\\\\snapsort_ai\\\\client\\\\src\\\\components\\\\ui\\\\sticky-scroll-reveal.tsx\",\n                                        lineNumber: 72,\n                                        columnNumber: 15\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_4__.motion.p, {\n                                        initial: {\n                                            opacity: 0\n                                        },\n                                        animate: {\n                                            opacity: activeCard === index ? 1 : 0.3\n                                        },\n                                        className: \"text-kg text-slate-300 max-w-sm mt-10\",\n                                        children: item.description\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\business_project\\\\snapsort_ai\\\\client\\\\src\\\\components\\\\ui\\\\sticky-scroll-reveal.tsx\",\n                                        lineNumber: 83,\n                                        columnNumber: 15\n                                    }, undefined)\n                                ]\n                            }, item.title + index, true, {\n                                fileName: \"C:\\\\business_project\\\\snapsort_ai\\\\client\\\\src\\\\components\\\\ui\\\\sticky-scroll-reveal.tsx\",\n                                lineNumber: 71,\n                                columnNumber: 13\n                            }, undefined)),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"h-40\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\business_project\\\\snapsort_ai\\\\client\\\\src\\\\components\\\\ui\\\\sticky-scroll-reveal.tsx\",\n                            lineNumber: 96,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\business_project\\\\snapsort_ai\\\\client\\\\src\\\\components\\\\ui\\\\sticky-scroll-reveal.tsx\",\n                    lineNumber: 69,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\business_project\\\\snapsort_ai\\\\client\\\\src\\\\components\\\\ui\\\\sticky-scroll-reveal.tsx\",\n                lineNumber: 68,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_4__.motion.div, {\n                animate: {\n                    background: linearGradients[activeCard % linearGradients.length]\n                },\n                className: (0,_utils_cn__WEBPACK_IMPORTED_MODULE_2__.cn)(\"hidden lg:block h-60 w-80 rounded-md bg-white sticky top-10 overflow-hidden\", contentClassName),\n                children: (_content_activeCard_content = content[activeCard].content) !== null && _content_activeCard_content !== void 0 ? _content_activeCard_content : null\n            }, void 0, false, {\n                fileName: \"C:\\\\business_project\\\\snapsort_ai\\\\client\\\\src\\\\components\\\\ui\\\\sticky-scroll-reveal.tsx\",\n                lineNumber: 99,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\business_project\\\\snapsort_ai\\\\client\\\\src\\\\components\\\\ui\\\\sticky-scroll-reveal.tsx\",\n        lineNumber: 61,\n        columnNumber: 5\n    }, undefined);\n};\n_s(StickyScroll, \"qONFJGh/29LIUGnJns7vKgzgK0k=\");\n_c = StickyScroll;\nvar _c;\n$RefreshReg$(_c, \"StickyScroll\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL3VpL3N0aWNreS1zY3JvbGwtcmV2ZWFsLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFFaUQ7QUFDSjtBQUNOO0FBQ1A7QUFFekIsTUFBTU0sZUFBZTtRQUFDLEVBQzNCQyxPQUFPLEVBQ1BDLGdCQUFnQixFQVFqQjs7O0lBQ0MsTUFBTSxDQUFDQyxZQUFZQyxjQUFjLEdBQUdWLHFEQUFjLENBQUM7SUFDbkQsTUFBTVksTUFBTVgsNkNBQU1BLENBQU07SUFDeEIsTUFBTVksZUFBZVosNkNBQU1BLENBQU07SUFFakNDLGdEQUFTQSxLQUFDOztRQUNSLElBQUksQ0FBQ1UsSUFBSUUsT0FBTyxJQUFJLENBQUNELGFBQWFDLE9BQU8sRUFBRTtRQUUzQyxNQUFNQyxVQUFVWiwyREFBWUEsQ0FDMUJTLElBQUlFLE9BQU8sRUFDWDtZQUFDO1lBQUdELGFBQWFDLE9BQU8sQ0FBQ0UsWUFBWTtTQUFDLEVBQ3RDO1lBQUM7WUFBR0gsYUFBYUMsT0FBTyxDQUFDRyxZQUFZLEdBQUdKLGFBQWFDLE9BQU8sQ0FBQ0UsWUFBWTtTQUFDO1FBRzVFLE1BQU1FLG1CQUFtQjtZQUN2QixNQUFNQyxpQkFBaUJKLFFBQVFLLEdBQUcsS0FBTVAsQ0FBQUEsYUFBYUMsT0FBTyxDQUFDRyxZQUFZLEdBQUdKLGFBQWFDLE9BQU8sQ0FBQ0UsWUFBWTtZQUM3RyxNQUFNSyx5QkFBeUJDLEtBQUtDLEdBQUcsQ0FBQ0QsS0FBS0UsS0FBSyxDQUFDTCxpQkFBaUJaLFFBQVFrQixNQUFNLEdBQUdsQixRQUFRa0IsTUFBTSxHQUFHO1lBQ3RHZixjQUFjVztRQUNoQjtRQUVBLE1BQU1LLFdBQVc7WUFDZlI7UUFDRjtRQUVBSCxRQUFRVyxRQUFRLENBQUNBO1FBRWpCLE9BQU87WUFDTFgsUUFBUVcsUUFBUSxDQUFDQTtRQUNuQjtJQUNGOztZQXJCa0J2Qix1REFBWUE7O1FBcUIzQjtRQUFDUyxJQUFJRSxPQUFPO1FBQUVELGFBQWFDLE9BQU87UUFBRVAsUUFBUWtCLE1BQU07S0FBQztJQUV0RCxNQUFNRSxtQkFBbUI7UUFDdkI7UUFDQTtRQUNBO0tBQ0Q7SUFDRCxNQUFNQyxrQkFBa0I7UUFDdEI7UUFDQTtRQUNBO0tBQ0Q7UUFrRE1yQjtJQWhEUCxxQkFDRSw4REFBQ0gsaURBQU1BLENBQUN5QixHQUFHO1FBQ1RDLFNBQVM7WUFDUEMsaUJBQWlCSixnQkFBZ0IsQ0FBQ2xCLGFBQWFrQixpQkFBaUJGLE1BQU0sQ0FBQztRQUN6RTtRQUNBTyxXQUFVO1FBQ1ZwQixLQUFLQTs7MEJBRUwsOERBQUNpQjtnQkFBSUcsV0FBVTtnQkFBcUNwQixLQUFLQzswQkFDdkQsNEVBQUNnQjtvQkFBSUcsV0FBVTs7d0JBQ1p6QixRQUFRMEIsR0FBRyxDQUFDLENBQUNDLE1BQU1DLHNCQUNsQiw4REFBQ047Z0NBQTZCRyxXQUFVOztrREFDdEMsOERBQUM1QixpREFBTUEsQ0FBQ2dDLEVBQUU7d0NBQ1JDLFNBQVM7NENBQ1BDLFNBQVM7d0NBQ1g7d0NBQ0FSLFNBQVM7NENBQ1BRLFNBQVM3QixlQUFlMEIsUUFBUSxJQUFJO3dDQUN0Qzt3Q0FDQUgsV0FBVTtrREFFVEUsS0FBS0ssS0FBSzs7Ozs7O2tEQUViLDhEQUFDbkMsaURBQU1BLENBQUNvQyxDQUFDO3dDQUNQSCxTQUFTOzRDQUNQQyxTQUFTO3dDQUNYO3dDQUNBUixTQUFTOzRDQUNQUSxTQUFTN0IsZUFBZTBCLFFBQVEsSUFBSTt3Q0FDdEM7d0NBQ0FILFdBQVU7a0RBRVRFLEtBQUtPLFdBQVc7Ozs7Ozs7K0JBckJYUCxLQUFLSyxLQUFLLEdBQUdKOzs7OztzQ0F5QnpCLDhEQUFDTjs0QkFBSUcsV0FBVTs7Ozs7Ozs7Ozs7Ozs7Ozs7MEJBR25CLDhEQUFDNUIsaURBQU1BLENBQUN5QixHQUFHO2dCQUNUQyxTQUFTO29CQUNQWSxZQUFZZCxlQUFlLENBQUNuQixhQUFhbUIsZ0JBQWdCSCxNQUFNLENBQUM7Z0JBQ2xFO2dCQUNBTyxXQUFXM0IsNkNBQUVBLENBQ1gsK0VBQ0FHOzBCQUdERCxDQUFBQSw4QkFBQUEsT0FBTyxDQUFDRSxXQUFXLENBQUNGLE9BQU8sY0FBM0JBLHlDQUFBQSw4QkFBK0I7Ozs7Ozs7Ozs7OztBQUl4QyxFQUFFO0dBeEdXRDtLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy91aS9zdGlja3ktc2Nyb2xsLXJldmVhbC50c3g/MmY1NyJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIGNsaWVudCc7XHJcblxyXG5pbXBvcnQgUmVhY3QsIHsgdXNlUmVmLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgdXNlVHJhbnNmb3JtIH0gZnJvbSBcImZyYW1lci1tb3Rpb25cIjtcclxuaW1wb3J0IHsgbW90aW9uIH0gZnJvbSBcImZyYW1lci1tb3Rpb25cIjtcclxuaW1wb3J0IHsgY24gfSBmcm9tIFwiQC91dGlscy9jblwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IFN0aWNreVNjcm9sbCA9ICh7XHJcbiAgY29udGVudCxcclxuICBjb250ZW50Q2xhc3NOYW1lLFxyXG59OiB7XHJcbiAgY29udGVudDoge1xyXG4gICAgdGl0bGU6IHN0cmluZztcclxuICAgIGRlc2NyaXB0aW9uOiBzdHJpbmc7XHJcbiAgICBjb250ZW50PzogUmVhY3QuUmVhY3ROb2RlIHwgYW55O1xyXG4gIH1bXTtcclxuICBjb250ZW50Q2xhc3NOYW1lPzogc3RyaW5nO1xyXG59KSA9PiB7XHJcbiAgY29uc3QgW2FjdGl2ZUNhcmQsIHNldEFjdGl2ZUNhcmRdID0gUmVhY3QudXNlU3RhdGUoMCk7XHJcbiAgY29uc3QgcmVmID0gdXNlUmVmPGFueT4obnVsbCk7XHJcbiAgY29uc3QgY29udGFpbmVyUmVmID0gdXNlUmVmPGFueT4obnVsbCk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZiAoIXJlZi5jdXJyZW50IHx8ICFjb250YWluZXJSZWYuY3VycmVudCkgcmV0dXJuO1xyXG5cclxuICAgIGNvbnN0IHNjcm9sbFkgPSB1c2VUcmFuc2Zvcm0oXHJcbiAgICAgIHJlZi5jdXJyZW50LFxyXG4gICAgICBbMCwgY29udGFpbmVyUmVmLmN1cnJlbnQub2Zmc2V0SGVpZ2h0XSxcclxuICAgICAgWzAsIGNvbnRhaW5lclJlZi5jdXJyZW50LnNjcm9sbEhlaWdodCAtIGNvbnRhaW5lclJlZi5jdXJyZW50Lm9mZnNldEhlaWdodF1cclxuICAgICk7XHJcblxyXG4gICAgY29uc3QgdXBkYXRlQWN0aXZlQ2FyZCA9ICgpID0+IHtcclxuICAgICAgY29uc3Qgc2Nyb2xsUHJvZ3Jlc3MgPSBzY3JvbGxZLmdldCgpIC8gKGNvbnRhaW5lclJlZi5jdXJyZW50LnNjcm9sbEhlaWdodCAtIGNvbnRhaW5lclJlZi5jdXJyZW50Lm9mZnNldEhlaWdodCk7XHJcbiAgICAgIGNvbnN0IGNsb3Nlc3RCcmVha3BvaW50SW5kZXggPSBNYXRoLm1pbihNYXRoLmZsb29yKHNjcm9sbFByb2dyZXNzICogY29udGVudC5sZW5ndGgpLCBjb250ZW50Lmxlbmd0aCAtIDEpO1xyXG4gICAgICBzZXRBY3RpdmVDYXJkKGNsb3Nlc3RCcmVha3BvaW50SW5kZXgpO1xyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBvbkNoYW5nZSA9ICgpID0+IHtcclxuICAgICAgdXBkYXRlQWN0aXZlQ2FyZCgpO1xyXG4gICAgfTtcclxuXHJcbiAgICBzY3JvbGxZLm9uQ2hhbmdlKG9uQ2hhbmdlKTtcclxuXHJcbiAgICByZXR1cm4gKCkgPT4ge1xyXG4gICAgICBzY3JvbGxZLm9uQ2hhbmdlKG9uQ2hhbmdlKTtcclxuICAgIH07XHJcbiAgfSwgW3JlZi5jdXJyZW50LCBjb250YWluZXJSZWYuY3VycmVudCwgY29udGVudC5sZW5ndGhdKTtcclxuXHJcbiAgY29uc3QgYmFja2dyb3VuZENvbG9ycyA9IFtcclxuICAgIFwidmFyKC0tc2xhdGUtOTAwKVwiLFxyXG4gICAgXCJ2YXIoLS1ibGFjaylcIixcclxuICAgIFwidmFyKC0tbmV1dHJhbC05MDApXCIsXHJcbiAgXTtcclxuICBjb25zdCBsaW5lYXJHcmFkaWVudHMgPSBbXHJcbiAgICBcImxpbmVhci1ncmFkaWVudCh0byBib3R0b20gcmlnaHQsIHZhcigtLWN5YW4tNTAwKSwgdmFyKC0tZW1lcmFsZC01MDApKVwiLFxyXG4gICAgXCJsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tIHJpZ2h0LCB2YXIoLS1waW5rLTUwMCksIHZhcigtLWluZGlnby01MDApKVwiLFxyXG4gICAgXCJsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tIHJpZ2h0LCB2YXIoLS1vcmFuZ2UtNTAwKSwgdmFyKC0teWVsbG93LTUwMCkpXCIsXHJcbiAgXTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxtb3Rpb24uZGl2XHJcbiAgICAgIGFuaW1hdGU9e3tcclxuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IGJhY2tncm91bmRDb2xvcnNbYWN0aXZlQ2FyZCAlIGJhY2tncm91bmRDb2xvcnMubGVuZ3RoXSxcclxuICAgICAgfX1cclxuICAgICAgY2xhc3NOYW1lPVwiaC1bMzByZW1dIG92ZXJmbG93LXktaGlkZGVuIGZsZXgganVzdGlmeS1jZW50ZXIgcmVsYXRpdmUgc3BhY2UteC0xMCByb3VuZGVkLW1kIHAtMTBcIlxyXG4gICAgICByZWY9e3JlZn1cclxuICAgID5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJkaXYgcmVsYXRpdmUgZmxleCBpdGVtcy1zdGFydCBweC00XCIgcmVmPXtjb250YWluZXJSZWZ9PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWF4LXctMnhsXCI+XHJcbiAgICAgICAgICB7Y29udGVudC5tYXAoKGl0ZW0sIGluZGV4KSA9PiAoXHJcbiAgICAgICAgICAgIDxkaXYga2V5PXtpdGVtLnRpdGxlICsgaW5kZXh9IGNsYXNzTmFtZT1cIm15LTIwXCI+XHJcbiAgICAgICAgICAgICAgPG1vdGlvbi5oMlxyXG4gICAgICAgICAgICAgICAgaW5pdGlhbD17e1xyXG4gICAgICAgICAgICAgICAgICBvcGFjaXR5OiAwLFxyXG4gICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgIGFuaW1hdGU9e3tcclxuICAgICAgICAgICAgICAgICAgb3BhY2l0eTogYWN0aXZlQ2FyZCA9PT0gaW5kZXggPyAxIDogMC4zLFxyXG4gICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInRleHQtMnhsIGZvbnQtYm9sZCB0ZXh0LXNsYXRlLTEwMFwiXHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAge2l0ZW0udGl0bGV9XHJcbiAgICAgICAgICAgICAgPC9tb3Rpb24uaDI+XHJcbiAgICAgICAgICAgICAgPG1vdGlvbi5wXHJcbiAgICAgICAgICAgICAgICBpbml0aWFsPXt7XHJcbiAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDAsXHJcbiAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgYW5pbWF0ZT17e1xyXG4gICAgICAgICAgICAgICAgICBvcGFjaXR5OiBhY3RpdmVDYXJkID09PSBpbmRleCA/IDEgOiAwLjMsXHJcbiAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidGV4dC1rZyB0ZXh0LXNsYXRlLTMwMCBtYXgtdy1zbSBtdC0xMFwiXHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAge2l0ZW0uZGVzY3JpcHRpb259XHJcbiAgICAgICAgICAgICAgPC9tb3Rpb24ucD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICApKX1cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaC00MFwiIC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8bW90aW9uLmRpdlxyXG4gICAgICAgIGFuaW1hdGU9e3tcclxuICAgICAgICAgIGJhY2tncm91bmQ6IGxpbmVhckdyYWRpZW50c1thY3RpdmVDYXJkICUgbGluZWFyR3JhZGllbnRzLmxlbmd0aF0sXHJcbiAgICAgICAgfX1cclxuICAgICAgICBjbGFzc05hbWU9e2NuKFxyXG4gICAgICAgICAgXCJoaWRkZW4gbGc6YmxvY2sgaC02MCB3LTgwIHJvdW5kZWQtbWQgYmctd2hpdGUgc3RpY2t5IHRvcC0xMCBvdmVyZmxvdy1oaWRkZW5cIixcclxuICAgICAgICAgIGNvbnRlbnRDbGFzc05hbWVcclxuICAgICAgICApfVxyXG4gICAgICA+XHJcbiAgICAgICAge2NvbnRlbnRbYWN0aXZlQ2FyZF0uY29udGVudCA/PyBudWxsfVxyXG4gICAgICA8L21vdGlvbi5kaXY+XHJcbiAgICA8L21vdGlvbi5kaXY+XHJcbiAgKTtcclxufTtcclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlUmVmIiwidXNlRWZmZWN0IiwidXNlVHJhbnNmb3JtIiwibW90aW9uIiwiY24iLCJTdGlja3lTY3JvbGwiLCJjb250ZW50IiwiY29udGVudENsYXNzTmFtZSIsImFjdGl2ZUNhcmQiLCJzZXRBY3RpdmVDYXJkIiwidXNlU3RhdGUiLCJyZWYiLCJjb250YWluZXJSZWYiLCJjdXJyZW50Iiwic2Nyb2xsWSIsIm9mZnNldEhlaWdodCIsInNjcm9sbEhlaWdodCIsInVwZGF0ZUFjdGl2ZUNhcmQiLCJzY3JvbGxQcm9ncmVzcyIsImdldCIsImNsb3Nlc3RCcmVha3BvaW50SW5kZXgiLCJNYXRoIiwibWluIiwiZmxvb3IiLCJsZW5ndGgiLCJvbkNoYW5nZSIsImJhY2tncm91bmRDb2xvcnMiLCJsaW5lYXJHcmFkaWVudHMiLCJkaXYiLCJhbmltYXRlIiwiYmFja2dyb3VuZENvbG9yIiwiY2xhc3NOYW1lIiwibWFwIiwiaXRlbSIsImluZGV4IiwiaDIiLCJpbml0aWFsIiwib3BhY2l0eSIsInRpdGxlIiwicCIsImRlc2NyaXB0aW9uIiwiYmFja2dyb3VuZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/ui/sticky-scroll-reveal.tsx\n"));

/***/ })

});