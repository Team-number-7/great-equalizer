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
const storage_1 = __importDefault(__webpack_require__(912));
function addClick() {
    const transaction = {
        date: new Date(document_1.document.getElementById('date').value),
        name: document_1.document.getElementById('name').value,
        value: parseInt(document_1.document.getElementById('value').value, 10),
    };
    (0, addTransaction_1.default)(transaction);
    storage_1.default.storeTransaction(transaction);
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

/***/ 968:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const addTransaction_1 = __importDefault(__webpack_require__(669));
const storage_1 = __importDefault(__webpack_require__(912));
function loadData() {
    const transactions = storage_1.default.readTransactions();
    for (let i = 0; i <= transactions.length; i += 1) {
        (0, addTransaction_1.default)(transactions[i]);
    }
}
exports["default"] = loadData;


/***/ }),

/***/ 136:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const addButtonEventListener_1 = __importDefault(__webpack_require__(354));
const featureToggle_1 = __importDefault(__webpack_require__(972));
const loadData_1 = __importDefault(__webpack_require__(968));
function onload() {
    const features = {
        isUserName: true,
    };
    (0, featureToggle_1.default)(features);
    (0, addButtonEventListener_1.default)();
    (0, loadData_1.default)();
}
exports["default"] = onload;


/***/ }),

/***/ 912:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const window_1 = __webpack_require__(918);
class Storage {
    static storeTransaction(transaction) {
        const counterString = window_1.window.localStorage.getItem('counter');
        const counter = counterString ? parseInt(counterString, 10) + 1 : 0;
        window_1.window.localStorage.setItem(`${counter}`, JSON.stringify(transaction));
        window_1.window.localStorage.setItem('counter', `${counter}`);
    }
    static readTransactions() {
        const counter = parseInt(window_1.window.localStorage.getItem('counter'), 10);
        const transactions = [];
        for (let i = 0; i <= counter; i += 1) {
            const transaction = JSON.parse(window_1.window.localStorage.getItem(`${i}`));
            transaction.date = new Date(transaction.date);
            transactions.push(transaction);
        }
        return transactions;
    }
}
exports["default"] = Storage;


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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SSxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQzlDLFlBQVksQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7U0FDaEM7UUFDRCxPQUFPLFlBQVksQ0FBQztJQUN0QixDQUFDO0NBQ0Y7QUFFRCxxQkFBZSxPQUFPLENBQUM7Ozs7Ozs7VUN2QnZCO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7VUVOQTtVQUNBO1VBQ0E7VUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2dyZWF0LWVxdWFsaXplci8uL3NyYy9ub3JtYWxpemUuY3NzP2ZjNTUiLCJ3ZWJwYWNrOi8vZ3JlYXQtZXF1YWxpemVyLy4vc3JjL3N0eWxlLmNzcz9lMzIwIiwid2VicGFjazovL2dyZWF0LWVxdWFsaXplci8uL3NyYy9hZGRCdXR0b25FdmVudExpc3RlbmVyLnRzIiwid2VicGFjazovL2dyZWF0LWVxdWFsaXplci8uL3NyYy9hZGRDbGljay50cyIsIndlYnBhY2s6Ly9ncmVhdC1lcXVhbGl6ZXIvLi9zcmMvYWRkVHJhbnNhY3Rpb24udHMiLCJ3ZWJwYWNrOi8vZ3JlYXQtZXF1YWxpemVyLy4vc3JjL2ZlYXR1cmVUb2dnbGUudHMiLCJ3ZWJwYWNrOi8vZ3JlYXQtZXF1YWxpemVyLy4vc3JjL2dsb2JhbHMvZG9jdW1lbnQudHMiLCJ3ZWJwYWNrOi8vZ3JlYXQtZXF1YWxpemVyLy4vc3JjL2dsb2JhbHMvd2luZG93LnRzIiwid2VicGFjazovL2dyZWF0LWVxdWFsaXplci8uL3NyYy9pbmRleC50cyIsIndlYnBhY2s6Ly9ncmVhdC1lcXVhbGl6ZXIvLi9zcmMvbG9hZERhdGEudHMiLCJ3ZWJwYWNrOi8vZ3JlYXQtZXF1YWxpemVyLy4vc3JjL29ubG9hZC50cyIsIndlYnBhY2s6Ly9ncmVhdC1lcXVhbGl6ZXIvLi9zcmMvc3RvcmFnZS50cyIsIndlYnBhY2s6Ly9ncmVhdC1lcXVhbGl6ZXIvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vZ3JlYXQtZXF1YWxpemVyL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vZ3JlYXQtZXF1YWxpemVyL3dlYnBhY2svYmVmb3JlLXN0YXJ0dXAiLCJ3ZWJwYWNrOi8vZ3JlYXQtZXF1YWxpemVyL3dlYnBhY2svc3RhcnR1cCIsIndlYnBhY2s6Ly9ncmVhdC1lcXVhbGl6ZXIvd2VicGFjay9hZnRlci1zdGFydHVwIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsImltcG9ydCBhZGRDbGljayBmcm9tICcuL2FkZENsaWNrJztcbmltcG9ydCB7IGRvY3VtZW50IH0gZnJvbSAnLi9nbG9iYWxzL2RvY3VtZW50JztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYWRkQnV0dG9uRXZlbnRMaXN0ZW5lcigpOiB2b2lkIHtcbiAgY29uc3QgYWRkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2FkZCcpO1xuICBhZGQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBhZGRDbGljayk7XG59XG4iLCJpbXBvcnQgeyBkb2N1bWVudCB9IGZyb20gJy4vZ2xvYmFscy9kb2N1bWVudCc7XG5pbXBvcnQgYWRkVHJhbnNhY3Rpb24gZnJvbSAnLi9hZGRUcmFuc2FjdGlvbic7XG5pbXBvcnQgeyBUcmFuc2FjdGlvbiB9IGZyb20gJy4vdHlwZXMvVHJhbnNhY3Rpb24nO1xuaW1wb3J0IFN0b3JhZ2UgZnJvbSAnLi9zdG9yYWdlJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYWRkQ2xpY2soKSB7XG4gIGNvbnN0IHRyYW5zYWN0aW9uOiBUcmFuc2FjdGlvbiA9IHtcbiAgICBkYXRlOiBuZXcgRGF0ZSgoPEhUTUxJbnB1dEVsZW1lbnQ+ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2RhdGUnKSkudmFsdWUpLFxuICAgIG5hbWU6ICg8SFRNTElucHV0RWxlbWVudD5kb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbmFtZScpKS52YWx1ZSxcbiAgICB2YWx1ZTogcGFyc2VJbnQoKDxIVE1MSW5wdXRFbGVtZW50PmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd2YWx1ZScpKS52YWx1ZSwgMTApLFxuICB9O1xuICBhZGRUcmFuc2FjdGlvbih0cmFuc2FjdGlvbik7XG4gIFN0b3JhZ2Uuc3RvcmVUcmFuc2FjdGlvbih0cmFuc2FjdGlvbik7XG59XG4iLCJpbXBvcnQgeyBkb2N1bWVudCB9IGZyb20gJy4vZ2xvYmFscy9kb2N1bWVudCc7XG5pbXBvcnQgeyBUcmFuc2FjdGlvbiB9IGZyb20gJy4vdHlwZXMvVHJhbnNhY3Rpb24nO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBhZGRUcmFuc2FjdGlvbih0cmFuc2FjdGlvbjogVHJhbnNhY3Rpb24pOiB2b2lkIHtcbiAgY29uc3QgdHJhbnNhY3Rpb25IVE1MID0gYDxkaXYgY2xhc3M9XCJkYXRlc19fZGF0ZVwiIGRhdGEtY3k9XCJkYXRlXCI+JHt0cmFuc2FjdGlvbi5kYXRlLnRvRGF0ZVN0cmluZygpfTwvZGl2Pjx1bCBjbGFzcz1cImRhdGVzX19kZXRhaWxzXCI+PGxpIGNsYXNzPVwiZGF0ZXNfX3RyYW5zYWN0aW9uXCI+PHNwYW4gY2xhc3M9XCJkYXRlc19fdHJhbnNhY3Rpb24tdGV4dFwiIGRhdGEtY3k9XCJuYW1lXCI+JHt0cmFuc2FjdGlvbi5uYW1lfTwvc3Bhbj48c3BhbiBjbGFzcz1cImRhdGVzX190cmFuc2FjdGlvbi1udW1iZXJcIiBkYXRhLWN5PVwidmFsdWVcIj4ke3RyYW5zYWN0aW9uLnZhbHVlfTwvc3Bhbj48L2xpPjwvdWw+YDtcbiAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0cmFuc2FjdGlvbicpO1xuICBlbGVtZW50Lmluc2VydEFkamFjZW50SFRNTCgnYWZ0ZXJiZWdpbicsIHRyYW5zYWN0aW9uSFRNTCk7XG59XG4iLCJpbXBvcnQgeyBkb2N1bWVudCB9IGZyb20gJy4vZ2xvYmFscy9kb2N1bWVudCc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgRmVhdHVyZXMge1xuICBpc1VzZXJOYW1lOiBib29sZWFuO1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBmZWF0dXJlVG9nZ2xlKGZlYXR1cmVzOiBGZWF0dXJlcyk6IHZvaWQge1xuICBpZiAoIWZlYXR1cmVzLmlzVXNlck5hbWUpIHtcbiAgICBjb25zdCBsb2dvID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2hlYWRlcl9fbG9nbycpO1xuICAgIGxvZ28/LnNldEF0dHJpYnV0ZSgnc3R5bGUnLCAndmlzaWJpbGl0eTogaGlkZGVuOycpO1xuICB9XG59XG4iLCJjb25zdCBkb2N1bWVudENvcHkgPSBkb2N1bWVudDtcbmV4cG9ydCBkZWZhdWx0IGRvY3VtZW50Q29weTtcbmV4cG9ydCB7IGRvY3VtZW50Q29weSBhcyBkb2N1bWVudCB9O1xuIiwiY29uc3Qgd2luZG93Q29weSA9IHdpbmRvdztcbmV4cG9ydCBkZWZhdWx0IHdpbmRvd0NvcHk7XG5leHBvcnQgeyB3aW5kb3dDb3B5IGFzIHdpbmRvdyB9O1xuIiwiaW1wb3J0ICcuL25vcm1hbGl6ZS5jc3MnO1xuaW1wb3J0ICcuL3N0eWxlLmNzcyc7XG5pbXBvcnQgb25sb2FkIGZyb20gJy4vb25sb2FkJztcblxud2luZG93Lm9ubG9hZCA9IG9ubG9hZDtcbiIsImltcG9ydCBhZGRUcmFuc2FjdGlvbiBmcm9tICcuL2FkZFRyYW5zYWN0aW9uJztcbmltcG9ydCBTdG9yYWdlIGZyb20gJy4vc3RvcmFnZSc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGxvYWREYXRhKCkge1xuICBjb25zdCB0cmFuc2FjdGlvbnMgPSBTdG9yYWdlLnJlYWRUcmFuc2FjdGlvbnMoKTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPD0gdHJhbnNhY3Rpb25zLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgYWRkVHJhbnNhY3Rpb24odHJhbnNhY3Rpb25zW2ldKTtcbiAgfVxufVxuIiwiaW1wb3J0IGFkZEJ1dHRvbkV2ZW50TGlzdGVuZXIgZnJvbSAnLi9hZGRCdXR0b25FdmVudExpc3RlbmVyJztcbmltcG9ydCBmZWF0dXJlVG9nZ2xlLCB7IEZlYXR1cmVzIH0gZnJvbSAnLi9mZWF0dXJlVG9nZ2xlJztcbmltcG9ydCBsb2FkRGF0YSBmcm9tICcuL2xvYWREYXRhJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gb25sb2FkKCk6IHZvaWQge1xuICBjb25zdCBmZWF0dXJlczogRmVhdHVyZXMgPSB7XG4gICAgaXNVc2VyTmFtZTogdHJ1ZSxcbiAgfTtcbiAgZmVhdHVyZVRvZ2dsZShmZWF0dXJlcyk7XG4gIGFkZEJ1dHRvbkV2ZW50TGlzdGVuZXIoKTtcbiAgbG9hZERhdGEoKTtcbn1cbiIsImltcG9ydCB7IFRyYW5zYWN0aW9uIH0gZnJvbSAnLi90eXBlcy9UcmFuc2FjdGlvbic7XG5pbXBvcnQgeyB3aW5kb3cgfSBmcm9tICcuL2dsb2JhbHMvd2luZG93JztcblxuY2xhc3MgU3RvcmFnZSB7XG4gIHN0YXRpYyBzdG9yZVRyYW5zYWN0aW9uKHRyYW5zYWN0aW9uOiBUcmFuc2FjdGlvbikge1xuICAgIGNvbnN0IGNvdW50ZXJTdHJpbmc6IHN0cmluZyA9IHdpbmRvdy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnY291bnRlcicpO1xuICAgIGNvbnN0IGNvdW50ZXI6IG51bWJlciA9IGNvdW50ZXJTdHJpbmcgPyBwYXJzZUludChjb3VudGVyU3RyaW5nLCAxMCkgKyAxIDogMDtcbiAgICB3aW5kb3cubG9jYWxTdG9yYWdlLnNldEl0ZW0oYCR7Y291bnRlcn1gLCBKU09OLnN0cmluZ2lmeSh0cmFuc2FjdGlvbikpO1xuICAgIHdpbmRvdy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnY291bnRlcicsIGAke2NvdW50ZXJ9YCk7XG4gIH1cblxuICBzdGF0aWMgcmVhZFRyYW5zYWN0aW9ucygpOiBBcnJheTxUcmFuc2FjdGlvbj4ge1xuICAgIGNvbnN0IGNvdW50ZXI6IG51bWJlciA9IHBhcnNlSW50KHdpbmRvdy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnY291bnRlcicpLCAxMCk7XG4gICAgY29uc3QgdHJhbnNhY3Rpb25zOiBBcnJheTxUcmFuc2FjdGlvbj4gPSBbXTtcbiAgICBmb3IgKGxldCBpOiBudW1iZXIgPSAwOyBpIDw9IGNvdW50ZXI7IGkgKz0gMSkge1xuICAgICAgY29uc3QgdHJhbnNhY3Rpb24gPSBKU09OLnBhcnNlKHdpbmRvdy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbShgJHtpfWApKTtcbiAgICAgIHRyYW5zYWN0aW9uLmRhdGUgPSBuZXcgRGF0ZSh0cmFuc2FjdGlvbi5kYXRlKTtcbiAgICAgIHRyYW5zYWN0aW9ucy5wdXNoKHRyYW5zYWN0aW9uKTtcbiAgICB9XG4gICAgcmV0dXJuIHRyYW5zYWN0aW9ucztcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBTdG9yYWdlO1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIiIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgaXMgcmVmZXJlbmNlZCBieSBvdGhlciBtb2R1bGVzIHNvIGl0IGNhbid0IGJlIGlubGluZWRcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXyg2MDcpO1xuIiwiIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9