/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ contact)
/* harmony export */ });
function contact() {

    const headline = document.createElement('h1');
    headline.textContent = 'Contact Us';

    // Phone Number
    const phone  = document.createElement('h3');
    phone.textContent = 'Phone:  123-456-7890';

    // Hours of Operation
    const restHours = document.createElement('h3');
    restHours.textContent = 'Mon - Sat:  10:00am - 11:00pm';

    return [headline, phone, restHours];
}

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ menu)
/* harmony export */ });
function menu() {

    // Menu Title
    const headline = document.createElement('h1');
    headline.textContent = "Menu";

    // Drink section
    const drinkMenu = document.createElement('div');
    drinkMenu.classList.add('menu');
    
    // Drink Menu Title 
    const drinks = document.createElement('h2');
    drinks.textContent = 'Drinks';
    drinkMenu.appendChild(drinks);

    // add menu items
    const water = document.createElement('h3');
    water.textContent = 'Water: Tap, Sparkling, Spring - $1.99';
    const soda = document.createElement('h3');
    soda.textContent = 'Soda: Sprite, Coke, Crush, Fruitopia - $2.99';
    const wine = document.createElement('h3');
    wine.textContent = 'Wine: White, Red - $12.99';

    drinkMenu.append(water, soda, wine);

    // Sides section
    const sideMenu = document.createElement('div');
    sideMenu.classList.add('menu');

    // Side Dishes Title
    const sides = document.createElement('h2');
    sides.textContent = 'Sides';
    sideMenu.appendChild(sides);

    // add menu items
    const fries = document.createElement('h3');
    fries.textContent = 'Fries - $4.99';
    const salad = document.createElement('h3');
    salad.textContent = 'Salad: Ceasar, Garden - $5.99';

    sideMenu.append(fries, salad);


    // Main Dishes Section
    const entreeMenu = document.createElement('div');
    entreeMenu.classList.add('menu');

    // Main Dishes
    const entrees = document.createElement('h2');
    entrees.textContent = 'Entrees';
    entreeMenu.appendChild(entrees);

    // add menu items
    const pizza = document.createElement('h3');
    pizza.textContent = 'Mama\'s Pizza - $24.99';
    const pasta = document.createElement('h3');
    pasta.textContent = 'Seafood Pasta - $26.99';
    const sandwich = document.createElement('h3');
    sandwich.textContent = 'Uncle Tony\'s Sandwich - $15.99';

    entreeMenu.append(pizza, pasta, sandwich);

    return [headline, drinkMenu, sideMenu, entreeMenu];
}



/***/ }),

/***/ "./src/TGF-img.jpeg":
/*!**************************!*\
  !*** ./src/TGF-img.jpeg ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "bf064c719d430f5e5e9e.jpeg";

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
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _TGF_img_jpeg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TGF-img.jpeg */ "./src/TGF-img.jpeg");
/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./contact */ "./src/contact.js");
/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu */ "./src/menu.js");




function navBar() {
    // wrapper
    const header = document.createElement('ul');

    // tabs
    const home = document.createElement('li');
    home.textContent = 'Home';
    home.classList.add('tab','home');

    const menu = document.createElement('li');
    menu.textContent = 'Menu';
    menu.classList.add('tab', 'menu');

    const contact = document.createElement('li');
    contact.textContent = 'Contact';
    contact.classList.add('tab', 'contact');

    header.append(home, menu, contact);

    return header;
}


function home() {

    
    // headline for home page
    const headline = document.createElement('h1');
    headline.textContent = "La Forchetta d'Oro";

    // image for homepage
    const headPhoto = new Image();
    headPhoto.src = _TGF_img_jpeg__WEBPACK_IMPORTED_MODULE_0__;

    // Intro text 
    const intro = document.createElement('p');
    intro.textContent = 'Indulge in Italian excellence at La Forchetta d\'Oro, where every dish is a masterpiece, and flavor takes center stage.';


    return [headline, headPhoto, intro];
}

const content = document.getElementById('content');

// Initial render
content.append(navBar(),...home());

// Home tab
document.querySelector('.home').addEventListener('click', () => {
    console.log('Home was clicked');
    content.innerHTML = "";
    content.append(navBar(), ...home()); 
})

// Menu tab
document.querySelector('.menu').addEventListener('click', () => {
    console.log('Menu was clicked');
    content.innerHTML = "";
    content.append(navBar(), ...(0,_menu__WEBPACK_IMPORTED_MODULE_2__["default"])());
})

// Contact Tab
document.querySelector('.contact').addEventListener('click', () => {
    console.log('Contact was clicked');
    content.innerHTML = "";
    content.append(navBar(), ...(0,_contact__WEBPACK_IMPORTED_MODULE_1__["default"])()); 
})
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFlOztBQUVmO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQ2RlOztBQUVmO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7QUFHQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDL0RBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSxHQUFHO1dBQ0g7V0FDQTtXQUNBLENBQUM7Ozs7O1dDUEQ7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7Ozs7Ozs7Ozs7OztBQ2xCdUM7QUFDUDtBQUNOOztBQUUxQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOzs7QUFHQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esb0JBQW9CLDBDQUFTOztBQUU3QjtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdDQUFnQyxpREFBSTtBQUNwQyxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0NBQWdDLG9EQUFPO0FBQ3ZDLENBQUMsQyIsInNvdXJjZXMiOlsid2VicGFjazovL3Jlc3R1YXJhbnQtcGFnZS8uL3NyYy9jb250YWN0LmpzIiwid2VicGFjazovL3Jlc3R1YXJhbnQtcGFnZS8uL3NyYy9tZW51LmpzIiwid2VicGFjazovL3Jlc3R1YXJhbnQtcGFnZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9yZXN0dWFyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3Jlc3R1YXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3Jlc3R1YXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3Jlc3R1YXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3Jlc3R1YXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9yZXN0dWFyYW50LXBhZ2UvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY29udGFjdCgpIHtcblxuICAgIGNvbnN0IGhlYWRsaW5lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcbiAgICBoZWFkbGluZS50ZXh0Q29udGVudCA9ICdDb250YWN0IFVzJztcblxuICAgIC8vIFBob25lIE51bWJlclxuICAgIGNvbnN0IHBob25lICA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XG4gICAgcGhvbmUudGV4dENvbnRlbnQgPSAnUGhvbmU6ICAxMjMtNDU2LTc4OTAnO1xuXG4gICAgLy8gSG91cnMgb2YgT3BlcmF0aW9uXG4gICAgY29uc3QgcmVzdEhvdXJzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcbiAgICByZXN0SG91cnMudGV4dENvbnRlbnQgPSAnTW9uIC0gU2F0OiAgMTA6MDBhbSAtIDExOjAwcG0nO1xuXG4gICAgcmV0dXJuIFtoZWFkbGluZSwgcGhvbmUsIHJlc3RIb3Vyc107XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbWVudSgpIHtcblxuICAgIC8vIE1lbnUgVGl0bGVcbiAgICBjb25zdCBoZWFkbGluZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XG4gICAgaGVhZGxpbmUudGV4dENvbnRlbnQgPSBcIk1lbnVcIjtcblxuICAgIC8vIERyaW5rIHNlY3Rpb25cbiAgICBjb25zdCBkcmlua01lbnUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBkcmlua01lbnUuY2xhc3NMaXN0LmFkZCgnbWVudScpO1xuICAgIFxuICAgIC8vIERyaW5rIE1lbnUgVGl0bGUgXG4gICAgY29uc3QgZHJpbmtzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcbiAgICBkcmlua3MudGV4dENvbnRlbnQgPSAnRHJpbmtzJztcbiAgICBkcmlua01lbnUuYXBwZW5kQ2hpbGQoZHJpbmtzKTtcblxuICAgIC8vIGFkZCBtZW51IGl0ZW1zXG4gICAgY29uc3Qgd2F0ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xuICAgIHdhdGVyLnRleHRDb250ZW50ID0gJ1dhdGVyOiBUYXAsIFNwYXJrbGluZywgU3ByaW5nIC0gJDEuOTknO1xuICAgIGNvbnN0IHNvZGEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xuICAgIHNvZGEudGV4dENvbnRlbnQgPSAnU29kYTogU3ByaXRlLCBDb2tlLCBDcnVzaCwgRnJ1aXRvcGlhIC0gJDIuOTknO1xuICAgIGNvbnN0IHdpbmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xuICAgIHdpbmUudGV4dENvbnRlbnQgPSAnV2luZTogV2hpdGUsIFJlZCAtICQxMi45OSc7XG5cbiAgICBkcmlua01lbnUuYXBwZW5kKHdhdGVyLCBzb2RhLCB3aW5lKTtcblxuICAgIC8vIFNpZGVzIHNlY3Rpb25cbiAgICBjb25zdCBzaWRlTWVudSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHNpZGVNZW51LmNsYXNzTGlzdC5hZGQoJ21lbnUnKTtcblxuICAgIC8vIFNpZGUgRGlzaGVzIFRpdGxlXG4gICAgY29uc3Qgc2lkZXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuICAgIHNpZGVzLnRleHRDb250ZW50ID0gJ1NpZGVzJztcbiAgICBzaWRlTWVudS5hcHBlbmRDaGlsZChzaWRlcyk7XG5cbiAgICAvLyBhZGQgbWVudSBpdGVtc1xuICAgIGNvbnN0IGZyaWVzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcbiAgICBmcmllcy50ZXh0Q29udGVudCA9ICdGcmllcyAtICQ0Ljk5JztcbiAgICBjb25zdCBzYWxhZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XG4gICAgc2FsYWQudGV4dENvbnRlbnQgPSAnU2FsYWQ6IENlYXNhciwgR2FyZGVuIC0gJDUuOTknO1xuXG4gICAgc2lkZU1lbnUuYXBwZW5kKGZyaWVzLCBzYWxhZCk7XG5cblxuICAgIC8vIE1haW4gRGlzaGVzIFNlY3Rpb25cbiAgICBjb25zdCBlbnRyZWVNZW51ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZW50cmVlTWVudS5jbGFzc0xpc3QuYWRkKCdtZW51Jyk7XG5cbiAgICAvLyBNYWluIERpc2hlc1xuICAgIGNvbnN0IGVudHJlZXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuICAgIGVudHJlZXMudGV4dENvbnRlbnQgPSAnRW50cmVlcyc7XG4gICAgZW50cmVlTWVudS5hcHBlbmRDaGlsZChlbnRyZWVzKTtcblxuICAgIC8vIGFkZCBtZW51IGl0ZW1zXG4gICAgY29uc3QgcGl6emEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xuICAgIHBpenphLnRleHRDb250ZW50ID0gJ01hbWFcXCdzIFBpenphIC0gJDI0Ljk5JztcbiAgICBjb25zdCBwYXN0YSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XG4gICAgcGFzdGEudGV4dENvbnRlbnQgPSAnU2VhZm9vZCBQYXN0YSAtICQyNi45OSc7XG4gICAgY29uc3Qgc2FuZHdpY2ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xuICAgIHNhbmR3aWNoLnRleHRDb250ZW50ID0gJ1VuY2xlIFRvbnlcXCdzIFNhbmR3aWNoIC0gJDE1Ljk5JztcblxuICAgIGVudHJlZU1lbnUuYXBwZW5kKHBpenphLCBwYXN0YSwgc2FuZHdpY2gpO1xuXG4gICAgcmV0dXJuIFtoZWFkbGluZSwgZHJpbmtNZW51LCBzaWRlTWVudSwgZW50cmVlTWVudV07XG59XG5cbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmM7XG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkge1xuXHRcdFx0dmFyIGkgPSBzY3JpcHRzLmxlbmd0aCAtIDE7XG5cdFx0XHR3aGlsZSAoaSA+IC0xICYmICFzY3JpcHRVcmwpIHNjcmlwdFVybCA9IHNjcmlwdHNbaS0tXS5zcmM7XG5cdFx0fVxuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJpbXBvcnQgcmVzdFBob3RvIGZyb20gJy4vVEdGLWltZy5qcGVnJztcbmltcG9ydCBjb250YWN0IGZyb20gJy4vY29udGFjdCc7XG5pbXBvcnQgbWVudSBmcm9tICcuL21lbnUnO1xuXG5mdW5jdGlvbiBuYXZCYXIoKSB7XG4gICAgLy8gd3JhcHBlclxuICAgIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJyk7XG5cbiAgICAvLyB0YWJzXG4gICAgY29uc3QgaG9tZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gICAgaG9tZS50ZXh0Q29udGVudCA9ICdIb21lJztcbiAgICBob21lLmNsYXNzTGlzdC5hZGQoJ3RhYicsJ2hvbWUnKTtcblxuICAgIGNvbnN0IG1lbnUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgIG1lbnUudGV4dENvbnRlbnQgPSAnTWVudSc7XG4gICAgbWVudS5jbGFzc0xpc3QuYWRkKCd0YWInLCAnbWVudScpO1xuXG4gICAgY29uc3QgY29udGFjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gICAgY29udGFjdC50ZXh0Q29udGVudCA9ICdDb250YWN0JztcbiAgICBjb250YWN0LmNsYXNzTGlzdC5hZGQoJ3RhYicsICdjb250YWN0Jyk7XG5cbiAgICBoZWFkZXIuYXBwZW5kKGhvbWUsIG1lbnUsIGNvbnRhY3QpO1xuXG4gICAgcmV0dXJuIGhlYWRlcjtcbn1cblxuXG5mdW5jdGlvbiBob21lKCkge1xuXG4gICAgXG4gICAgLy8gaGVhZGxpbmUgZm9yIGhvbWUgcGFnZVxuICAgIGNvbnN0IGhlYWRsaW5lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcbiAgICBoZWFkbGluZS50ZXh0Q29udGVudCA9IFwiTGEgRm9yY2hldHRhIGQnT3JvXCI7XG5cbiAgICAvLyBpbWFnZSBmb3IgaG9tZXBhZ2VcbiAgICBjb25zdCBoZWFkUGhvdG8gPSBuZXcgSW1hZ2UoKTtcbiAgICBoZWFkUGhvdG8uc3JjID0gcmVzdFBob3RvO1xuXG4gICAgLy8gSW50cm8gdGV4dCBcbiAgICBjb25zdCBpbnRybyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBpbnRyby50ZXh0Q29udGVudCA9ICdJbmR1bGdlIGluIEl0YWxpYW4gZXhjZWxsZW5jZSBhdCBMYSBGb3JjaGV0dGEgZFxcJ09ybywgd2hlcmUgZXZlcnkgZGlzaCBpcyBhIG1hc3RlcnBpZWNlLCBhbmQgZmxhdm9yIHRha2VzIGNlbnRlciBzdGFnZS4nO1xuXG5cbiAgICByZXR1cm4gW2hlYWRsaW5lLCBoZWFkUGhvdG8sIGludHJvXTtcbn1cblxuY29uc3QgY29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250ZW50Jyk7XG5cbi8vIEluaXRpYWwgcmVuZGVyXG5jb250ZW50LmFwcGVuZChuYXZCYXIoKSwuLi5ob21lKCkpO1xuXG4vLyBIb21lIHRhYlxuZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhvbWUnKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBjb25zb2xlLmxvZygnSG9tZSB3YXMgY2xpY2tlZCcpO1xuICAgIGNvbnRlbnQuaW5uZXJIVE1MID0gXCJcIjtcbiAgICBjb250ZW50LmFwcGVuZChuYXZCYXIoKSwgLi4uaG9tZSgpKTsgXG59KVxuXG4vLyBNZW51IHRhYlxuZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1lbnUnKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBjb25zb2xlLmxvZygnTWVudSB3YXMgY2xpY2tlZCcpO1xuICAgIGNvbnRlbnQuaW5uZXJIVE1MID0gXCJcIjtcbiAgICBjb250ZW50LmFwcGVuZChuYXZCYXIoKSwgLi4ubWVudSgpKTtcbn0pXG5cbi8vIENvbnRhY3QgVGFiXG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGFjdCcpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIGNvbnNvbGUubG9nKCdDb250YWN0IHdhcyBjbGlja2VkJyk7XG4gICAgY29udGVudC5pbm5lckhUTUwgPSBcIlwiO1xuICAgIGNvbnRlbnQuYXBwZW5kKG5hdkJhcigpLCAuLi5jb250YWN0KCkpOyBcbn0pIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9