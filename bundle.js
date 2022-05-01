/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 979:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ 307:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ 918:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const document_1 = __webpack_require__(403);
function featureToggle(features) {
    if (!features.isUserName) {
        const logo = document_1.document.getElementById('header__logo');
        logo === null || logo === void 0 ? void 0 : logo.setAttribute('style', 'visibility: hidden;');
    }
}
exports["default"] = featureToggle;


/***/ }),

/***/ 403:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.document = void 0;
const documentCopy = document;
exports.document = documentCopy;
exports["default"] = documentCopy;


/***/ }),

/***/ 607:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__webpack_require__(979);
__webpack_require__(307);
const onload_1 = __importDefault(__webpack_require__(136));
window.onload = onload_1.default;


/***/ }),

/***/ 136:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const featureToggle_1 = __importDefault(__webpack_require__(918));
function onload() {
    const features = {
        isUserName: true,
    };
    (0, featureToggle_1.default)(features);
}
exports["default"] = onload;


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__(607);
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7O0FDQUEsNENBQThDO0FBTTlDLFNBQXdCLGFBQWEsQ0FBQyxRQUFrQjtJQUN0RCxJQUFJLENBQUMsUUFBUSxDQUFDLFVBQVUsRUFBRTtRQUN4QixNQUFNLElBQUksR0FBRyxtQkFBUSxDQUFDLGNBQWMsQ0FBQyxjQUFjLENBQUMsQ0FBQztRQUNyRCxJQUFJLGFBQUosSUFBSSx1QkFBSixJQUFJLENBQUUsWUFBWSxDQUFDLE9BQU8sRUFBRSxxQkFBcUIsQ0FBQyxDQUFDO0tBQ3BEO0FBQ0gsQ0FBQztBQUxELG1DQUtDOzs7Ozs7Ozs7OztBQ1hELE1BQU0sWUFBWSxHQUFHLFFBQVEsQ0FBQztBQUVMLGdDQUFRO0FBRGpDLHFCQUFlLFlBQVksQ0FBQzs7Ozs7Ozs7Ozs7OztBQ0Q1Qix5QkFBeUI7QUFDekIseUJBQXFCO0FBQ3JCLDJEQUE4QjtBQUU5QixNQUFNLENBQUMsTUFBTSxHQUFHLGdCQUFNLENBQUM7Ozs7Ozs7Ozs7Ozs7QUNKdkIsa0VBQTBEO0FBRTFELFNBQXdCLE1BQU07SUFDNUIsTUFBTSxRQUFRLEdBQWE7UUFDekIsVUFBVSxFQUFFLElBQUk7S0FDakIsQ0FBQztJQUNGLDJCQUFhLEVBQUMsUUFBUSxDQUFDLENBQUM7QUFDMUIsQ0FBQztBQUxELDRCQUtDOzs7Ozs7O1VDUEQ7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztVRU5BO1VBQ0E7VUFDQTtVQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZ3JlYXQtZXF1YWxpemVyLy4vc3JjL25vcm1hbGl6ZS5jc3M/ZmM1NSIsIndlYnBhY2s6Ly9ncmVhdC1lcXVhbGl6ZXIvLi9zcmMvc3R5bGUuY3NzP2UzMjAiLCJ3ZWJwYWNrOi8vZ3JlYXQtZXF1YWxpemVyLy4vc3JjL2ZlYXR1cmVUb2dnbGUudHMiLCJ3ZWJwYWNrOi8vZ3JlYXQtZXF1YWxpemVyLy4vc3JjL2dsb2JhbHMvZG9jdW1lbnQudHMiLCJ3ZWJwYWNrOi8vZ3JlYXQtZXF1YWxpemVyLy4vc3JjL2luZGV4LnRzIiwid2VicGFjazovL2dyZWF0LWVxdWFsaXplci8uL3NyYy9vbmxvYWQudHMiLCJ3ZWJwYWNrOi8vZ3JlYXQtZXF1YWxpemVyL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2dyZWF0LWVxdWFsaXplci93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2dyZWF0LWVxdWFsaXplci93ZWJwYWNrL2JlZm9yZS1zdGFydHVwIiwid2VicGFjazovL2dyZWF0LWVxdWFsaXplci93ZWJwYWNrL3N0YXJ0dXAiLCJ3ZWJwYWNrOi8vZ3JlYXQtZXF1YWxpemVyL3dlYnBhY2svYWZ0ZXItc3RhcnR1cCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCJpbXBvcnQgeyBkb2N1bWVudCB9IGZyb20gJy4vZ2xvYmFscy9kb2N1bWVudCc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgRmVhdHVyZXMge1xuICBpc1VzZXJOYW1lOiBib29sZWFuO1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBmZWF0dXJlVG9nZ2xlKGZlYXR1cmVzOiBGZWF0dXJlcyk6IHZvaWQge1xuICBpZiAoIWZlYXR1cmVzLmlzVXNlck5hbWUpIHtcbiAgICBjb25zdCBsb2dvID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2hlYWRlcl9fbG9nbycpO1xuICAgIGxvZ28/LnNldEF0dHJpYnV0ZSgnc3R5bGUnLCAndmlzaWJpbGl0eTogaGlkZGVuOycpO1xuICB9XG59XG4iLCJjb25zdCBkb2N1bWVudENvcHkgPSBkb2N1bWVudDtcbmV4cG9ydCBkZWZhdWx0IGRvY3VtZW50Q29weTtcbmV4cG9ydCB7IGRvY3VtZW50Q29weSBhcyBkb2N1bWVudCB9O1xuIiwiaW1wb3J0ICcuL25vcm1hbGl6ZS5jc3MnO1xuaW1wb3J0ICcuL3N0eWxlLmNzcyc7XG5pbXBvcnQgb25sb2FkIGZyb20gJy4vb25sb2FkJztcblxud2luZG93Lm9ubG9hZCA9IG9ubG9hZDtcbiIsImltcG9ydCBmZWF0dXJlVG9nZ2xlLCB7IEZlYXR1cmVzIH0gZnJvbSAnLi9mZWF0dXJlVG9nZ2xlJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gb25sb2FkKCk6IHZvaWQge1xuICBjb25zdCBmZWF0dXJlczogRmVhdHVyZXMgPSB7XG4gICAgaXNVc2VyTmFtZTogdHJ1ZSxcbiAgfTtcbiAgZmVhdHVyZVRvZ2dsZShmZWF0dXJlcyk7XG59XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiIiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vLyBUaGlzIGVudHJ5IG1vZHVsZSBpcyByZWZlcmVuY2VkIGJ5IG90aGVyIG1vZHVsZXMgc28gaXQgY2FuJ3QgYmUgaW5saW5lZFxudmFyIF9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDYwNyk7XG4iLCIiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=