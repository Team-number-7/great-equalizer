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

/***/ 354:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const addClick_1 = __importDefault(__webpack_require__(935));
const document_1 = __webpack_require__(403);
function addButtonEventListener() {
    const add = document_1.document.querySelector('#add');
    add.addEventListener('click', addClick_1.default);
}
exports["default"] = addButtonEventListener;


/***/ }),

/***/ 935:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const document_1 = __webpack_require__(403);
const addTransaction_1 = __importDefault(__webpack_require__(669));
function addClick() {
    const transaction = {
        date: new Date(document_1.document.getElementById('date').value),
        name: document_1.document.getElementById('name').value,
        value: parseInt(document_1.document.getElementById('value').value, 10),
    };
    (0, addTransaction_1.default)(transaction);
}
exports["default"] = addClick;


/***/ }),

/***/ 669:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const document_1 = __webpack_require__(403);
const storage_1 = __importDefault(__webpack_require__(912));
function addTransaction(transaction) {
    const transactionHTML = `<div class="dates__date" data-cy="date">${transaction.date.toDateString()}</div><ul class="dates__details"><li class="dates__transaction"><span class="dates__transaction-text" data-cy="name">${transaction.name}</span><span class="dates__transaction-number" data-cy="value">${transaction.value}</span></li></ul>`;
    const element = document_1.document.querySelector('#transaction');
    element.insertAdjacentHTML('afterbegin', transactionHTML);
    (0, storage_1.default)(transaction);
}
exports["default"] = addTransaction;


/***/ }),

/***/ 972:
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

/***/ 918:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.window = void 0;
const windowCopy = window;
exports.window = windowCopy;
exports["default"] = windowCopy;


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
const addButtonEventListener_1 = __importDefault(__webpack_require__(354));
const featureToggle_1 = __importDefault(__webpack_require__(972));
function onload() {
    const features = {
        isUserName: true,
    };
    (0, featureToggle_1.default)(features);
    (0, addButtonEventListener_1.default)();
}
exports["default"] = onload;


/***/ }),

/***/ 912:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const window_1 = __webpack_require__(918);
function storeTransaction(transaction) {
    const counterString = window_1.window.localStorage.getItem('counter');
    const counter = counterString ? parseInt(counterString, 10) + 1 : 0;
    window_1.window.localStorage.setItem(`${counter}`, JSON.stringify(transaction));
    window_1.window.localStorage.setItem('counter', `${counter}`);
}
exports["default"] = storeTransaction;


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RSxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUM1RSxlQUFNLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxHQUFHLE9BQU8sRUFBRSxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQztJQUN2RSxlQUFNLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxTQUFTLEVBQUUsR0FBRyxPQUFPLEVBQUUsQ0FBQyxDQUFDO0FBQ3ZELENBQUM7QUFMRCxzQ0FLQzs7Ozs7OztVQ1JEO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7VUVOQTtVQUNBO1VBQ0E7VUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2dyZWF0LWVxdWFsaXplci8uL3NyYy9ub3JtYWxpemUuY3NzP2ZjNTUiLCJ3ZWJwYWNrOi8vZ3JlYXQtZXF1YWxpemVyLy4vc3JjL3N0eWxlLmNzcz9lMzIwIiwid2VicGFjazovL2dyZWF0LWVxdWFsaXplci8uL3NyYy9hZGRCdXR0b25FdmVudExpc3RlbmVyLnRzIiwid2VicGFjazovL2dyZWF0LWVxdWFsaXplci8uL3NyYy9hZGRDbGljay50cyIsIndlYnBhY2s6Ly9ncmVhdC1lcXVhbGl6ZXIvLi9zcmMvYWRkVHJhbnNhY3Rpb24udHMiLCJ3ZWJwYWNrOi8vZ3JlYXQtZXF1YWxpemVyLy4vc3JjL2ZlYXR1cmVUb2dnbGUudHMiLCJ3ZWJwYWNrOi8vZ3JlYXQtZXF1YWxpemVyLy4vc3JjL2dsb2JhbHMvZG9jdW1lbnQudHMiLCJ3ZWJwYWNrOi8vZ3JlYXQtZXF1YWxpemVyLy4vc3JjL2dsb2JhbHMvd2luZG93LnRzIiwid2VicGFjazovL2dyZWF0LWVxdWFsaXplci8uL3NyYy9pbmRleC50cyIsIndlYnBhY2s6Ly9ncmVhdC1lcXVhbGl6ZXIvLi9zcmMvb25sb2FkLnRzIiwid2VicGFjazovL2dyZWF0LWVxdWFsaXplci8uL3NyYy9zdG9yYWdlLnRzIiwid2VicGFjazovL2dyZWF0LWVxdWFsaXplci93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9ncmVhdC1lcXVhbGl6ZXIvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9ncmVhdC1lcXVhbGl6ZXIvd2VicGFjay9iZWZvcmUtc3RhcnR1cCIsIndlYnBhY2s6Ly9ncmVhdC1lcXVhbGl6ZXIvd2VicGFjay9zdGFydHVwIiwid2VicGFjazovL2dyZWF0LWVxdWFsaXplci93ZWJwYWNrL2FmdGVyLXN0YXJ0dXAiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiaW1wb3J0IGFkZENsaWNrIGZyb20gJy4vYWRkQ2xpY2snO1xuaW1wb3J0IHsgZG9jdW1lbnQgfSBmcm9tICcuL2dsb2JhbHMvZG9jdW1lbnQnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBhZGRCdXR0b25FdmVudExpc3RlbmVyKCk6IHZvaWQge1xuICBjb25zdCBhZGQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYWRkJyk7XG4gIGFkZC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGFkZENsaWNrKTtcbn1cbiIsImltcG9ydCB7IGRvY3VtZW50IH0gZnJvbSAnLi9nbG9iYWxzL2RvY3VtZW50JztcbmltcG9ydCBhZGRUcmFuc2FjdGlvbiBmcm9tICcuL2FkZFRyYW5zYWN0aW9uJztcbmltcG9ydCB7IFRyYW5zYWN0aW9uIH0gZnJvbSAnLi90eXBlcy9UcmFuc2FjdGlvbic7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGFkZENsaWNrKCkge1xuICBjb25zdCB0cmFuc2FjdGlvbjogVHJhbnNhY3Rpb24gPSB7XG4gICAgZGF0ZTogbmV3IERhdGUoKDxIVE1MSW5wdXRFbGVtZW50PmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkYXRlJykpLnZhbHVlKSxcbiAgICBuYW1lOiAoPEhUTUxJbnB1dEVsZW1lbnQ+ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25hbWUnKSkudmFsdWUsXG4gICAgdmFsdWU6IHBhcnNlSW50KCg8SFRNTElucHV0RWxlbWVudD5kb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndmFsdWUnKSkudmFsdWUsIDEwKSxcbiAgfTtcbiAgYWRkVHJhbnNhY3Rpb24odHJhbnNhY3Rpb24pO1xufVxuIiwiaW1wb3J0IHsgZG9jdW1lbnQgfSBmcm9tICcuL2dsb2JhbHMvZG9jdW1lbnQnO1xuaW1wb3J0IHN0b3JlVHJhbnNhY3Rpb24gZnJvbSAnLi9zdG9yYWdlJztcbmltcG9ydCB7IFRyYW5zYWN0aW9uIH0gZnJvbSAnLi90eXBlcy9UcmFuc2FjdGlvbic7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGFkZFRyYW5zYWN0aW9uKHRyYW5zYWN0aW9uOiBUcmFuc2FjdGlvbik6IHZvaWQge1xuICBjb25zdCB0cmFuc2FjdGlvbkhUTUwgPSBgPGRpdiBjbGFzcz1cImRhdGVzX19kYXRlXCIgZGF0YS1jeT1cImRhdGVcIj4ke3RyYW5zYWN0aW9uLmRhdGUudG9EYXRlU3RyaW5nKCl9PC9kaXY+PHVsIGNsYXNzPVwiZGF0ZXNfX2RldGFpbHNcIj48bGkgY2xhc3M9XCJkYXRlc19fdHJhbnNhY3Rpb25cIj48c3BhbiBjbGFzcz1cImRhdGVzX190cmFuc2FjdGlvbi10ZXh0XCIgZGF0YS1jeT1cIm5hbWVcIj4ke3RyYW5zYWN0aW9uLm5hbWV9PC9zcGFuPjxzcGFuIGNsYXNzPVwiZGF0ZXNfX3RyYW5zYWN0aW9uLW51bWJlclwiIGRhdGEtY3k9XCJ2YWx1ZVwiPiR7dHJhbnNhY3Rpb24udmFsdWV9PC9zcGFuPjwvbGk+PC91bD5gO1xuICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3RyYW5zYWN0aW9uJyk7XG4gIGVsZW1lbnQuaW5zZXJ0QWRqYWNlbnRIVE1MKCdhZnRlcmJlZ2luJywgdHJhbnNhY3Rpb25IVE1MKTtcbiAgc3RvcmVUcmFuc2FjdGlvbih0cmFuc2FjdGlvbik7XG59XG4iLCJpbXBvcnQgeyBkb2N1bWVudCB9IGZyb20gJy4vZ2xvYmFscy9kb2N1bWVudCc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgRmVhdHVyZXMge1xuICBpc1VzZXJOYW1lOiBib29sZWFuO1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBmZWF0dXJlVG9nZ2xlKGZlYXR1cmVzOiBGZWF0dXJlcyk6IHZvaWQge1xuICBpZiAoIWZlYXR1cmVzLmlzVXNlck5hbWUpIHtcbiAgICBjb25zdCBsb2dvID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2hlYWRlcl9fbG9nbycpO1xuICAgIGxvZ28/LnNldEF0dHJpYnV0ZSgnc3R5bGUnLCAndmlzaWJpbGl0eTogaGlkZGVuOycpO1xuICB9XG59XG4iLCJjb25zdCBkb2N1bWVudENvcHkgPSBkb2N1bWVudDtcbmV4cG9ydCBkZWZhdWx0IGRvY3VtZW50Q29weTtcbmV4cG9ydCB7IGRvY3VtZW50Q29weSBhcyBkb2N1bWVudCB9O1xuIiwiY29uc3Qgd2luZG93Q29weSA9IHdpbmRvdztcbmV4cG9ydCBkZWZhdWx0IHdpbmRvd0NvcHk7XG5leHBvcnQgeyB3aW5kb3dDb3B5IGFzIHdpbmRvdyB9O1xuIiwiaW1wb3J0ICcuL25vcm1hbGl6ZS5jc3MnO1xuaW1wb3J0ICcuL3N0eWxlLmNzcyc7XG5pbXBvcnQgb25sb2FkIGZyb20gJy4vb25sb2FkJztcblxud2luZG93Lm9ubG9hZCA9IG9ubG9hZDtcbiIsImltcG9ydCBhZGRCdXR0b25FdmVudExpc3RlbmVyIGZyb20gJy4vYWRkQnV0dG9uRXZlbnRMaXN0ZW5lcic7XG5pbXBvcnQgZmVhdHVyZVRvZ2dsZSwgeyBGZWF0dXJlcyB9IGZyb20gJy4vZmVhdHVyZVRvZ2dsZSc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIG9ubG9hZCgpOiB2b2lkIHtcbiAgY29uc3QgZmVhdHVyZXM6IEZlYXR1cmVzID0ge1xuICAgIGlzVXNlck5hbWU6IHRydWUsXG4gIH07XG4gIGZlYXR1cmVUb2dnbGUoZmVhdHVyZXMpO1xuICBhZGRCdXR0b25FdmVudExpc3RlbmVyKCk7XG59XG4iLCJpbXBvcnQgeyBUcmFuc2FjdGlvbiB9IGZyb20gJy4vdHlwZXMvVHJhbnNhY3Rpb24nO1xuaW1wb3J0IHsgd2luZG93IH0gZnJvbSAnLi9nbG9iYWxzL3dpbmRvdyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHN0b3JlVHJhbnNhY3Rpb24odHJhbnNhY3Rpb246IFRyYW5zYWN0aW9uKSB7XG4gIGNvbnN0IGNvdW50ZXJTdHJpbmc6IHN0cmluZyA9IHdpbmRvdy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnY291bnRlcicpO1xuICBjb25zdCBjb3VudGVyOiBudW1iZXIgPSBjb3VudGVyU3RyaW5nID8gcGFyc2VJbnQoY291bnRlclN0cmluZywgMTApICsgMSA6IDA7XG4gIHdpbmRvdy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbShgJHtjb3VudGVyfWAsIEpTT04uc3RyaW5naWZ5KHRyYW5zYWN0aW9uKSk7XG4gIHdpbmRvdy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnY291bnRlcicsIGAke2NvdW50ZXJ9YCk7XG59XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiIiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vLyBUaGlzIGVudHJ5IG1vZHVsZSBpcyByZWZlcmVuY2VkIGJ5IG90aGVyIG1vZHVsZXMgc28gaXQgY2FuJ3QgYmUgaW5saW5lZFxudmFyIF9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDYwNyk7XG4iLCIiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=