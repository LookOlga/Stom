/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/custom.js":
/*!**************************!*\
  !*** ./src/js/custom.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

window.addEventListener('load', onResize);
window.addEventListener('resize', onResize);

function onResize() {
  window.isMobile = window.innerWidth < 1025;
  document.documentElement.classList.add(window.isMobile ? 'mobile' : 'desktop');
  document.documentElement.classList.remove(!window.isMobile ? 'mobile' : 'desktop');
}

/***/ }),

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _slider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./slider */ "./src/js/slider.js");
/* harmony import */ var _slider__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_slider__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _custom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./custom */ "./src/js/custom.js");
/* harmony import */ var _custom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_custom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _modules_menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/menu */ "./src/js/modules/menu.js");
/* harmony import */ var _modules_subnav__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/subnav */ "./src/js/modules/subnav.js");
/* harmony import */ var _modules_search__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/search */ "./src/js/modules/search.js");





window.addEventListener('load', () => {
  setTimeout(() => {
    document.body.classList.add('isLoaded');
  }, 100);

  if (window.isMobile) {
    Object(_modules_menu__WEBPACK_IMPORTED_MODULE_2__["default"])('.burger', 'menu-active');
  }

  Object(_modules_subnav__WEBPACK_IMPORTED_MODULE_3__["default"])('.subnav', '._item.has-subnav ._arrow');
  Object(_modules_search__WEBPACK_IMPORTED_MODULE_4__["default"])('.open-search ._btn', '._close', 'search-active');
});

/***/ }),

/***/ "./src/js/modules/menu.js":
/*!********************************!*\
  !*** ./src/js/modules/menu.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const menu = (burgerSelector, classActive) => {
  const burger = document.querySelector(burgerSelector);
  burger.addEventListener('click', () => {
    document.body.classList.toggle(classActive);
  });
};

/* harmony default export */ __webpack_exports__["default"] = (menu);

/***/ }),

/***/ "./src/js/modules/search.js":
/*!**********************************!*\
  !*** ./src/js/modules/search.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const search = (btnOpenSelector, btnCloseSelector, classActive) => {
  const btnOpen = document.querySelector(btnOpenSelector);
  const btnClose = document.querySelector(btnCloseSelector);
  const body = document.body;
  btnOpen.addEventListener('click', () => {
    body.classList.add(classActive);
  });
  btnClose.addEventListener('click', () => {
    body.classList.remove(classActive);
  });
};

/* harmony default export */ __webpack_exports__["default"] = (search);

/***/ }),

/***/ "./src/js/modules/subnav.js":
/*!**********************************!*\
  !*** ./src/js/modules/subnav.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const subnav = (subnavSelector, arrowBtnsSelector) => {
  const subnav = document.querySelectorAll(subnavSelector);
  const arrowBtns = document.querySelectorAll(arrowBtnsSelector);
  const body = document.body;
  arrowBtns.forEach((item, i) => {
    item.addEventListener('click', e => {
      e.preventDefault();
      const target = e.target;
      const subnavMenu = subnav[i];
      const subnavHeight = window.getComputedStyle(subnavMenu).height;

      if (subnavHeight === '0px') {
        subnavMenu.style.height = `${subnavMenu.scrollHeight}px`;
      } else {
        subnavMenu.style.height = `${subnavMenu.scrollHeight}px`;
        subnavMenu.style.height = '0';
      }

      target.classList.toggle('rotateArrow');
    });
  });
};

/* harmony default export */ __webpack_exports__["default"] = (subnav);

/***/ }),

/***/ "./src/js/slider.js":
/*!**************************!*\
  !*** ./src/js/slider.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

$(function () {
  const owl = $(".owl-carousel");
  owl.owlCarousel({
    margin: 0,
    loop: true,
    nav: true,
    autoplay: true,
    touchDrag: true,
    autoplayTimeout: 5000,
    smartSpeed: 3000,
    slideTransition: 'linear',
    responsive: {
      320: {
        items: 1,
        nav: false
      },
      560: {
        items: 2,
        nav: false
      },
      992: {
        items: 3
      },
      1200: {
        items: 4
      }
    }
  });
});

/***/ })

/******/ });
//# sourceMappingURL=script.js.map