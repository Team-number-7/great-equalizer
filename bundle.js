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
    const transactionHTML = `<div class="dates__date" data-cy="date">${transaction.date.toDateString()}</div><ul class="dates__details"><li class="dates__transaction"><span class="dates__transaction-text" data-cy="name">${transaction.name}</span><span class="dates__transaction-number" data-cy="value">${transaction.value}</span></li></ul>`;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7Ozs7O0FDQUEsNkRBQWtDO0FBQ2xDLDRDQUE4QztBQUU5QyxTQUF3QixzQkFBc0I7SUFDNUMsTUFBTSxHQUFHLEdBQUcsbUJBQVEsQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDM0MsR0FBRyxDQUFDLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxrQkFBUSxDQUFDLENBQUM7QUFDMUMsQ0FBQztBQUhELDRDQUdDOzs7Ozs7Ozs7Ozs7O0FDTkQsNENBQThDO0FBQzlDLG1FQUErRDtBQUUvRCxTQUF3QixRQUFRO0lBQzlCLE1BQU0sV0FBVyxHQUFnQjtRQUMvQixJQUFJLEVBQUUsSUFBSSxJQUFJLENBQW9CLG1CQUFRLENBQUMsY0FBYyxDQUFDLE1BQU0sQ0FBRSxDQUFDLEtBQUssQ0FBQztRQUN6RSxJQUFJLEVBQXFCLG1CQUFRLENBQUMsY0FBYyxDQUFDLE1BQU0sQ0FBRSxDQUFDLEtBQUs7UUFDL0QsS0FBSyxFQUFFLFFBQVEsQ0FBb0IsbUJBQVEsQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFFLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FBQztLQUNoRixDQUFDO0lBQ0YsNEJBQWMsRUFBQyxXQUFXLENBQUMsQ0FBQztBQUM5QixDQUFDO0FBUEQsOEJBT0M7Ozs7Ozs7Ozs7QUNWRCw0Q0FBOEM7QUFROUMsU0FBd0IsY0FBYyxDQUFDLFdBQXdCO0lBQzdELE1BQU0sZUFBZSxHQUFHLDJDQUEyQyxXQUFXLENBQUMsSUFBSSxDQUFDLFlBQVksRUFBRSx3SEFBd0gsV0FBVyxDQUFDLElBQUksa0VBQWtFLFdBQVcsQ0FBQyxLQUFLLG1CQUFtQixDQUFDO0lBQ2pWLE1BQU0sT0FBTyxHQUFHLG1CQUFRLENBQUMsYUFBYSxDQUFDLGNBQWMsQ0FBQyxDQUFDO0lBQ3ZELE9BQU8sQ0FBQyxrQkFBa0IsQ0FBQyxZQUFZLEVBQUUsZUFBZSxDQUFDLENBQUM7QUFDNUQsQ0FBQztBQUpELG9DQUlDOzs7Ozs7Ozs7O0FDWkQsNENBQThDO0FBTTlDLFNBQXdCLGFBQWEsQ0FBQyxRQUFrQjtJQUN0RCxJQUFJLENBQUMsUUFBUSxDQUFDLFVBQVUsRUFBRTtRQUN4QixNQUFNLElBQUksR0FBRyxtQkFBUSxDQUFDLGNBQWMsQ0FBQyxjQUFjLENBQUMsQ0FBQztRQUNyRCxJQUFJLGFBQUosSUFBSSx1QkFBSixJQUFJLENBQUUsWUFBWSxDQUFDLE9BQU8sRUFBRSxxQkFBcUIsQ0FBQyxDQUFDO0tBQ3BEO0FBQ0gsQ0FBQztBQUxELG1DQUtDOzs7Ozs7Ozs7OztBQ1hELE1BQU0sWUFBWSxHQUFHLFFBQVEsQ0FBQztBQUVMLGdDQUFRO0FBRGpDLHFCQUFlLFlBQVksQ0FBQzs7Ozs7Ozs7Ozs7OztBQ0Q1Qix5QkFBeUI7QUFDekIseUJBQXFCO0FBQ3JCLDJEQUE4QjtBQUU5QixNQUFNLENBQUMsTUFBTSxHQUFHLGdCQUFNLENBQUM7Ozs7Ozs7Ozs7Ozs7QUNKdkIsMkVBQThEO0FBQzlELGtFQUEwRDtBQUUxRCxTQUF3QixNQUFNO0lBQzVCLE1BQU0sUUFBUSxHQUFhO1FBQ3pCLFVBQVUsRUFBRSxJQUFJO0tBQ2pCLENBQUM7SUFDRiwyQkFBYSxFQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQ3hCLG9DQUFzQixHQUFFLENBQUM7QUFDM0IsQ0FBQztBQU5ELDRCQU1DOzs7Ozs7O1VDVEQ7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztVRU5BO1VBQ0E7VUFDQTtVQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZ3JlYXQtZXF1YWxpemVyLy4vc3JjL25vcm1hbGl6ZS5jc3M/ZmM1NSIsIndlYnBhY2s6Ly9ncmVhdC1lcXVhbGl6ZXIvLi9zcmMvc3R5bGUuY3NzP2UzMjAiLCJ3ZWJwYWNrOi8vZ3JlYXQtZXF1YWxpemVyLy4vc3JjL2FkZEJ1dHRvbkV2ZW50TGlzdGVuZXIudHMiLCJ3ZWJwYWNrOi8vZ3JlYXQtZXF1YWxpemVyLy4vc3JjL2FkZENsaWNrLnRzIiwid2VicGFjazovL2dyZWF0LWVxdWFsaXplci8uL3NyYy9hZGRUcmFuc2FjdGlvbi50cyIsIndlYnBhY2s6Ly9ncmVhdC1lcXVhbGl6ZXIvLi9zcmMvZmVhdHVyZVRvZ2dsZS50cyIsIndlYnBhY2s6Ly9ncmVhdC1lcXVhbGl6ZXIvLi9zcmMvZ2xvYmFscy9kb2N1bWVudC50cyIsIndlYnBhY2s6Ly9ncmVhdC1lcXVhbGl6ZXIvLi9zcmMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vZ3JlYXQtZXF1YWxpemVyLy4vc3JjL29ubG9hZC50cyIsIndlYnBhY2s6Ly9ncmVhdC1lcXVhbGl6ZXIvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vZ3JlYXQtZXF1YWxpemVyL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vZ3JlYXQtZXF1YWxpemVyL3dlYnBhY2svYmVmb3JlLXN0YXJ0dXAiLCJ3ZWJwYWNrOi8vZ3JlYXQtZXF1YWxpemVyL3dlYnBhY2svc3RhcnR1cCIsIndlYnBhY2s6Ly9ncmVhdC1lcXVhbGl6ZXIvd2VicGFjay9hZnRlci1zdGFydHVwIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsImltcG9ydCBhZGRDbGljayBmcm9tICcuL2FkZENsaWNrJztcbmltcG9ydCB7IGRvY3VtZW50IH0gZnJvbSAnLi9nbG9iYWxzL2RvY3VtZW50JztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYWRkQnV0dG9uRXZlbnRMaXN0ZW5lcigpOiB2b2lkIHtcbiAgY29uc3QgYWRkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2FkZCcpO1xuICBhZGQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBhZGRDbGljayk7XG59XG4iLCJpbXBvcnQgeyBkb2N1bWVudCB9IGZyb20gJy4vZ2xvYmFscy9kb2N1bWVudCc7XG5pbXBvcnQgYWRkVHJhbnNhY3Rpb24sIHsgVHJhbnNhY3Rpb24gfSBmcm9tICcuL2FkZFRyYW5zYWN0aW9uJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYWRkQ2xpY2soKSB7XG4gIGNvbnN0IHRyYW5zYWN0aW9uOiBUcmFuc2FjdGlvbiA9IHtcbiAgICBkYXRlOiBuZXcgRGF0ZSgoPEhUTUxJbnB1dEVsZW1lbnQ+ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2RhdGUnKSkudmFsdWUpLFxuICAgIG5hbWU6ICg8SFRNTElucHV0RWxlbWVudD5kb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbmFtZScpKS52YWx1ZSxcbiAgICB2YWx1ZTogcGFyc2VJbnQoKDxIVE1MSW5wdXRFbGVtZW50PmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd2YWx1ZScpKS52YWx1ZSwgMTApLFxuICB9O1xuICBhZGRUcmFuc2FjdGlvbih0cmFuc2FjdGlvbik7XG59XG4iLCJpbXBvcnQgeyBkb2N1bWVudCB9IGZyb20gJy4vZ2xvYmFscy9kb2N1bWVudCc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgVHJhbnNhY3Rpb24ge1xuICBkYXRlOiBEYXRlO1xuICBuYW1lOiBzdHJpbmc7XG4gIHZhbHVlOiBudW1iZXI7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGFkZFRyYW5zYWN0aW9uKHRyYW5zYWN0aW9uOiBUcmFuc2FjdGlvbik6IHZvaWQge1xuICBjb25zdCB0cmFuc2FjdGlvbkhUTUwgPSBgPGRpdiBjbGFzcz1cImRhdGVzX19kYXRlXCIgZGF0YS1jeT1cImRhdGVcIj4ke3RyYW5zYWN0aW9uLmRhdGUudG9EYXRlU3RyaW5nKCl9PC9kaXY+PHVsIGNsYXNzPVwiZGF0ZXNfX2RldGFpbHNcIj48bGkgY2xhc3M9XCJkYXRlc19fdHJhbnNhY3Rpb25cIj48c3BhbiBjbGFzcz1cImRhdGVzX190cmFuc2FjdGlvbi10ZXh0XCIgZGF0YS1jeT1cIm5hbWVcIj4ke3RyYW5zYWN0aW9uLm5hbWV9PC9zcGFuPjxzcGFuIGNsYXNzPVwiZGF0ZXNfX3RyYW5zYWN0aW9uLW51bWJlclwiIGRhdGEtY3k9XCJ2YWx1ZVwiPiR7dHJhbnNhY3Rpb24udmFsdWV9PC9zcGFuPjwvbGk+PC91bD5gO1xuICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3RyYW5zYWN0aW9uJyk7XG4gIGVsZW1lbnQuaW5zZXJ0QWRqYWNlbnRIVE1MKCdhZnRlcmJlZ2luJywgdHJhbnNhY3Rpb25IVE1MKTtcbn1cbiIsImltcG9ydCB7IGRvY3VtZW50IH0gZnJvbSAnLi9nbG9iYWxzL2RvY3VtZW50JztcblxuZXhwb3J0IGludGVyZmFjZSBGZWF0dXJlcyB7XG4gIGlzVXNlck5hbWU6IGJvb2xlYW47XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGZlYXR1cmVUb2dnbGUoZmVhdHVyZXM6IEZlYXR1cmVzKTogdm9pZCB7XG4gIGlmICghZmVhdHVyZXMuaXNVc2VyTmFtZSkge1xuICAgIGNvbnN0IGxvZ28gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaGVhZGVyX19sb2dvJyk7XG4gICAgbG9nbz8uc2V0QXR0cmlidXRlKCdzdHlsZScsICd2aXNpYmlsaXR5OiBoaWRkZW47Jyk7XG4gIH1cbn1cbiIsImNvbnN0IGRvY3VtZW50Q29weSA9IGRvY3VtZW50O1xuZXhwb3J0IGRlZmF1bHQgZG9jdW1lbnRDb3B5O1xuZXhwb3J0IHsgZG9jdW1lbnRDb3B5IGFzIGRvY3VtZW50IH07XG4iLCJpbXBvcnQgJy4vbm9ybWFsaXplLmNzcyc7XG5pbXBvcnQgJy4vc3R5bGUuY3NzJztcbmltcG9ydCBvbmxvYWQgZnJvbSAnLi9vbmxvYWQnO1xuXG53aW5kb3cub25sb2FkID0gb25sb2FkO1xuIiwiaW1wb3J0IGFkZEJ1dHRvbkV2ZW50TGlzdGVuZXIgZnJvbSAnLi9hZGRCdXR0b25FdmVudExpc3RlbmVyJztcbmltcG9ydCBmZWF0dXJlVG9nZ2xlLCB7IEZlYXR1cmVzIH0gZnJvbSAnLi9mZWF0dXJlVG9nZ2xlJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gb25sb2FkKCk6IHZvaWQge1xuICBjb25zdCBmZWF0dXJlczogRmVhdHVyZXMgPSB7XG4gICAgaXNVc2VyTmFtZTogdHJ1ZSxcbiAgfTtcbiAgZmVhdHVyZVRvZ2dsZShmZWF0dXJlcyk7XG4gIGFkZEJ1dHRvbkV2ZW50TGlzdGVuZXIoKTtcbn1cbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCIiLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8vIFRoaXMgZW50cnkgbW9kdWxlIGlzIHJlZmVyZW5jZWQgYnkgb3RoZXIgbW9kdWxlcyBzbyBpdCBjYW4ndCBiZSBpbmxpbmVkXG52YXIgX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18oNjA3KTtcbiIsIiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==