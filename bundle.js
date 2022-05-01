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
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const document_1 = __webpack_require__(403);
function addTransaction(transaction) {
    const transactionHTML = `<div class="dates__date">${transaction.date.toDateString()}</div><ul class="dates__details"><li class="dates__transaction"><span class="dates__transaction-text">${transaction.name}</span><span class="dates__transaction-number">${transaction.value}</span></li></ul>`;
    const element = document_1.document.querySelector('#transaction');
    element.insertAdjacentHTML('afterbegin', transactionHTML);
}
exports["default"] = addTransaction;


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
const addButtonEventListener_1 = __importDefault(__webpack_require__(354));
const featureToggle_1 = __importDefault(__webpack_require__(918));
function onload() {
    const features = {
        isUserName: true,
    };
    (0, featureToggle_1.default)(features);
    (0, addButtonEventListener_1.default)();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7Ozs7O0FDQUEsNkRBQWtDO0FBQ2xDLDRDQUE4QztBQUU5QyxTQUF3QixzQkFBc0I7SUFDNUMsTUFBTSxHQUFHLEdBQUcsbUJBQVEsQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDM0MsR0FBRyxDQUFDLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxrQkFBUSxDQUFDLENBQUM7QUFDMUMsQ0FBQztBQUhELDRDQUdDOzs7Ozs7Ozs7Ozs7O0FDTkQsNENBQThDO0FBQzlDLG1FQUErRDtBQUUvRCxTQUF3QixRQUFRO0lBQzlCLE1BQU0sV0FBVyxHQUFnQjtRQUMvQixJQUFJLEVBQUUsSUFBSSxJQUFJLENBQW9CLG1CQUFRLENBQUMsY0FBYyxDQUFDLE1BQU0sQ0FBRSxDQUFDLEtBQUssQ0FBQztRQUN6RSxJQUFJLEVBQXFCLG1CQUFRLENBQUMsY0FBYyxDQUFDLE1BQU0sQ0FBRSxDQUFDLEtBQUs7UUFDL0QsS0FBSyxFQUFFLFFBQVEsQ0FBb0IsbUJBQVEsQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFFLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FBQztLQUNoRixDQUFDO0lBQ0YsNEJBQWMsRUFBQyxXQUFXLENBQUMsQ0FBQztBQUM5QixDQUFDO0FBUEQsOEJBT0M7Ozs7Ozs7Ozs7QUNWRCw0Q0FBOEM7QUFROUMsU0FBd0IsY0FBYyxDQUFDLFdBQXdCO0lBQzdELE1BQU0sZUFBZSxHQUFHLDRCQUE0QixXQUFXLENBQUMsSUFBSSxDQUFDLFlBQVksRUFBRSx5R0FBeUcsV0FBVyxDQUFDLElBQUksa0RBQWtELFdBQVcsQ0FBQyxLQUFLLG1CQUFtQixDQUFDO0lBQ25TLE1BQU0sT0FBTyxHQUFHLG1CQUFRLENBQUMsYUFBYSxDQUFDLGNBQWMsQ0FBQyxDQUFDO0lBQ3ZELE9BQU8sQ0FBQyxrQkFBa0IsQ0FBQyxZQUFZLEVBQUUsZUFBZSxDQUFDLENBQUM7QUFDNUQsQ0FBQztBQUpELG9DQUlDOzs7Ozs7Ozs7O0FDWkQsNENBQThDO0FBTTlDLFNBQXdCLGFBQWEsQ0FBQyxRQUFrQjtJQUN0RCxJQUFJLENBQUMsUUFBUSxDQUFDLFVBQVUsRUFBRTtRQUN4QixNQUFNLElBQUksR0FBRyxtQkFBUSxDQUFDLGNBQWMsQ0FBQyxjQUFjLENBQUMsQ0FBQztRQUNyRCxJQUFJLGFBQUosSUFBSSx1QkFBSixJQUFJLENBQUUsWUFBWSxDQUFDLE9BQU8sRUFBRSxxQkFBcUIsQ0FBQyxDQUFDO0tBQ3BEO0FBQ0gsQ0FBQztBQUxELG1DQUtDOzs7Ozs7Ozs7OztBQ1hELE1BQU0sWUFBWSxHQUFHLFFBQVEsQ0FBQztBQUVMLGdDQUFRO0FBRGpDLHFCQUFlLFlBQVksQ0FBQzs7Ozs7Ozs7Ozs7OztBQ0Q1Qix5QkFBeUI7QUFDekIseUJBQXFCO0FBQ3JCLDJEQUE4QjtBQUU5QixNQUFNLENBQUMsTUFBTSxHQUFHLGdCQUFNLENBQUM7Ozs7Ozs7Ozs7Ozs7QUNKdkIsMkVBQThEO0FBQzlELGtFQUEwRDtBQUUxRCxTQUF3QixNQUFNO0lBQzVCLE1BQU0sUUFBUSxHQUFhO1FBQ3pCLFVBQVUsRUFBRSxJQUFJO0tBQ2pCLENBQUM7SUFDRiwyQkFBYSxFQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQ3hCLG9DQUFzQixHQUFFLENBQUM7QUFDM0IsQ0FBQztBQU5ELDRCQU1DOzs7Ozs7O1VDVEQ7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztVRU5BO1VBQ0E7VUFDQTtVQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZ3JlYXQtZXF1YWxpemVyLy4vc3JjL25vcm1hbGl6ZS5jc3M/ZmM1NSIsIndlYnBhY2s6Ly9ncmVhdC1lcXVhbGl6ZXIvLi9zcmMvc3R5bGUuY3NzP2UzMjAiLCJ3ZWJwYWNrOi8vZ3JlYXQtZXF1YWxpemVyLy4vc3JjL2FkZEJ1dHRvbkV2ZW50TGlzdGVuZXIudHMiLCJ3ZWJwYWNrOi8vZ3JlYXQtZXF1YWxpemVyLy4vc3JjL2FkZENsaWNrLnRzIiwid2VicGFjazovL2dyZWF0LWVxdWFsaXplci8uL3NyYy9hZGRUcmFuc2FjdGlvbi50cyIsIndlYnBhY2s6Ly9ncmVhdC1lcXVhbGl6ZXIvLi9zcmMvZmVhdHVyZVRvZ2dsZS50cyIsIndlYnBhY2s6Ly9ncmVhdC1lcXVhbGl6ZXIvLi9zcmMvZ2xvYmFscy9kb2N1bWVudC50cyIsIndlYnBhY2s6Ly9ncmVhdC1lcXVhbGl6ZXIvLi9zcmMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vZ3JlYXQtZXF1YWxpemVyLy4vc3JjL29ubG9hZC50cyIsIndlYnBhY2s6Ly9ncmVhdC1lcXVhbGl6ZXIvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vZ3JlYXQtZXF1YWxpemVyL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vZ3JlYXQtZXF1YWxpemVyL3dlYnBhY2svYmVmb3JlLXN0YXJ0dXAiLCJ3ZWJwYWNrOi8vZ3JlYXQtZXF1YWxpemVyL3dlYnBhY2svc3RhcnR1cCIsIndlYnBhY2s6Ly9ncmVhdC1lcXVhbGl6ZXIvd2VicGFjay9hZnRlci1zdGFydHVwIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsImltcG9ydCBhZGRDbGljayBmcm9tICcuL2FkZENsaWNrJztcbmltcG9ydCB7IGRvY3VtZW50IH0gZnJvbSAnLi9nbG9iYWxzL2RvY3VtZW50JztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYWRkQnV0dG9uRXZlbnRMaXN0ZW5lcigpOiB2b2lkIHtcbiAgY29uc3QgYWRkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2FkZCcpO1xuICBhZGQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBhZGRDbGljayk7XG59XG4iLCJpbXBvcnQgeyBkb2N1bWVudCB9IGZyb20gJy4vZ2xvYmFscy9kb2N1bWVudCc7XG5pbXBvcnQgYWRkVHJhbnNhY3Rpb24sIHsgVHJhbnNhY3Rpb24gfSBmcm9tICcuL2FkZFRyYW5zYWN0aW9uJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYWRkQ2xpY2soKSB7XG4gIGNvbnN0IHRyYW5zYWN0aW9uOiBUcmFuc2FjdGlvbiA9IHtcbiAgICBkYXRlOiBuZXcgRGF0ZSgoPEhUTUxJbnB1dEVsZW1lbnQ+ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2RhdGUnKSkudmFsdWUpLFxuICAgIG5hbWU6ICg8SFRNTElucHV0RWxlbWVudD5kb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbmFtZScpKS52YWx1ZSxcbiAgICB2YWx1ZTogcGFyc2VJbnQoKDxIVE1MSW5wdXRFbGVtZW50PmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd2YWx1ZScpKS52YWx1ZSwgMTApLFxuICB9O1xuICBhZGRUcmFuc2FjdGlvbih0cmFuc2FjdGlvbik7XG59XG4iLCJpbXBvcnQgeyBkb2N1bWVudCB9IGZyb20gJy4vZ2xvYmFscy9kb2N1bWVudCc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgVHJhbnNhY3Rpb24ge1xuICBkYXRlOiBEYXRlO1xuICBuYW1lOiBzdHJpbmc7XG4gIHZhbHVlOiBudW1iZXI7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGFkZFRyYW5zYWN0aW9uKHRyYW5zYWN0aW9uOiBUcmFuc2FjdGlvbik6IHZvaWQge1xuICBjb25zdCB0cmFuc2FjdGlvbkhUTUwgPSBgPGRpdiBjbGFzcz1cImRhdGVzX19kYXRlXCI+JHt0cmFuc2FjdGlvbi5kYXRlLnRvRGF0ZVN0cmluZygpfTwvZGl2Pjx1bCBjbGFzcz1cImRhdGVzX19kZXRhaWxzXCI+PGxpIGNsYXNzPVwiZGF0ZXNfX3RyYW5zYWN0aW9uXCI+PHNwYW4gY2xhc3M9XCJkYXRlc19fdHJhbnNhY3Rpb24tdGV4dFwiPiR7dHJhbnNhY3Rpb24ubmFtZX08L3NwYW4+PHNwYW4gY2xhc3M9XCJkYXRlc19fdHJhbnNhY3Rpb24tbnVtYmVyXCI+JHt0cmFuc2FjdGlvbi52YWx1ZX08L3NwYW4+PC9saT48L3VsPmA7XG4gIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdHJhbnNhY3Rpb24nKTtcbiAgZWxlbWVudC5pbnNlcnRBZGphY2VudEhUTUwoJ2FmdGVyYmVnaW4nLCB0cmFuc2FjdGlvbkhUTUwpO1xufVxuIiwiaW1wb3J0IHsgZG9jdW1lbnQgfSBmcm9tICcuL2dsb2JhbHMvZG9jdW1lbnQnO1xuXG5leHBvcnQgaW50ZXJmYWNlIEZlYXR1cmVzIHtcbiAgaXNVc2VyTmFtZTogYm9vbGVhbjtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZmVhdHVyZVRvZ2dsZShmZWF0dXJlczogRmVhdHVyZXMpOiB2b2lkIHtcbiAgaWYgKCFmZWF0dXJlcy5pc1VzZXJOYW1lKSB7XG4gICAgY29uc3QgbG9nbyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdoZWFkZXJfX2xvZ28nKTtcbiAgICBsb2dvPy5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywgJ3Zpc2liaWxpdHk6IGhpZGRlbjsnKTtcbiAgfVxufVxuIiwiY29uc3QgZG9jdW1lbnRDb3B5ID0gZG9jdW1lbnQ7XG5leHBvcnQgZGVmYXVsdCBkb2N1bWVudENvcHk7XG5leHBvcnQgeyBkb2N1bWVudENvcHkgYXMgZG9jdW1lbnQgfTtcbiIsImltcG9ydCAnLi9ub3JtYWxpemUuY3NzJztcbmltcG9ydCAnLi9zdHlsZS5jc3MnO1xuaW1wb3J0IG9ubG9hZCBmcm9tICcuL29ubG9hZCc7XG5cbndpbmRvdy5vbmxvYWQgPSBvbmxvYWQ7XG4iLCJpbXBvcnQgYWRkQnV0dG9uRXZlbnRMaXN0ZW5lciBmcm9tICcuL2FkZEJ1dHRvbkV2ZW50TGlzdGVuZXInO1xuaW1wb3J0IGZlYXR1cmVUb2dnbGUsIHsgRmVhdHVyZXMgfSBmcm9tICcuL2ZlYXR1cmVUb2dnbGUnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBvbmxvYWQoKTogdm9pZCB7XG4gIGNvbnN0IGZlYXR1cmVzOiBGZWF0dXJlcyA9IHtcbiAgICBpc1VzZXJOYW1lOiB0cnVlLFxuICB9O1xuICBmZWF0dXJlVG9nZ2xlKGZlYXR1cmVzKTtcbiAgYWRkQnV0dG9uRXZlbnRMaXN0ZW5lcigpO1xufVxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIiIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgaXMgcmVmZXJlbmNlZCBieSBvdGhlciBtb2R1bGVzIHNvIGl0IGNhbid0IGJlIGlubGluZWRcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXyg2MDcpO1xuIiwiIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9