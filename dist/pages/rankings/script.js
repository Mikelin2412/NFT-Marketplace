/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/pages/rankings/styles.less":
/*!****************************************!*\
  !*** ./src/pages/rankings/styles.less ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://nft-marketplace/./src/pages/rankings/styles.less?");

/***/ }),

/***/ "./src/pages/rankings/script.js":
/*!**************************************!*\
  !*** ./src/pages/rankings/script.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_less__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.less */ \"./src/pages/rankings/styles.less\");\n\n\nconst body = document.querySelector(\"body\");\nconst toggleTheme = document.querySelector(\"#toggle-theme\");\nconst hideBackground = document.querySelector(\".hidden-background\");\nconst burger = document.querySelector(\".burger-menu\");\nconst burgerMenu = document.querySelector(\".header__container__navigation\");\n\nconst changeTheme = () => {\n  toggleTheme.classList.toggle(\"inverted-color\");\n\n  body.classList.toggle(\"light-mode\");\n\n  const sideMenu = document.querySelector(\".header__container__navigation\");\n  sideMenu.classList.toggle(\"light-mode\");\n\n  const burgerMenu = document.querySelector(\".burger-menu\");\n  burgerMenu.classList.toggle(\"light-mode\");\n\n  // Header\n  const header = document.querySelector(\".header\");\n  header.classList.toggle(\"light-mode\");\n\n  const headerText = document.querySelectorAll(\n    \".header__container__navigation__list__button\"\n  );\n  headerText.forEach((card) => card.classList.toggle(\"light-mode\"));\n\n  const outlinedButtons = document.querySelectorAll(\".outlined-button\");\n  outlinedButtons.forEach((button) => button.classList.toggle(\"light-mode\"));\n\n  // Footer\n  const footer = document.querySelector(\".footer\");\n  footer.classList.toggle(\"light-mode\");\n\n  const footerMarketplaceInfo = document.querySelectorAll(\n    \".footer__info-container__marketplace-info-block > p\"\n  );\n  footerMarketplaceInfo.forEach((card) => card.classList.toggle(\"light-mode\"));\n\n  const footerExploreInfo = document.querySelectorAll(\n    \".footer__info-container__explore-block > p\"\n  );\n  footerExploreInfo.forEach((card) => card.classList.toggle(\"light-mode\"));\n\n  const footerSubscribeInfo = document.querySelectorAll(\n    \".footer__info-container__subscribe-block > p\"\n  );\n  footerSubscribeInfo.forEach((card) => card.classList.toggle(\"light-mode\"));\n\n  const footerCopyright = document.querySelector(\n    \".footer__copyright-container\"\n  );\n  footerCopyright.classList.toggle(\"light-mode\");\n\n  const footerCopyrightText = document.querySelector(\n    \".footer__copyright-container > span\"\n  );\n  footerCopyrightText.classList.toggle(\"light-mode\");\n\n  const rankCards = document.querySelectorAll(\".rankings-section__card\");\n  rankCards.forEach((card) => card.classList.toggle(\"light-mode\"));\n\n  const rankCardsNumber = document.querySelectorAll(\n    \".rankings-section__card__number\"\n  );\n  rankCardsNumber.forEach((number) => number.classList.toggle(\"light-mode\"));\n\n  const rankActiveTab = document.querySelectorAll(\".rank-active-tab\");\n  rankActiveTab.forEach((tab) => tab.classList.toggle(\"light-mode\"));\n}\n\nburger.addEventListener(\"click\", () => {\n  if (burger.classList.contains(\"active\")) {\n    burger.classList.remove(\"active\");\n    burgerMenu.classList.remove(\"active\");\n    hideBackground.classList.remove(\"active\");\n    body.style.overflow = \"auto\";\n  } else {\n    burger.classList.add(\"active\");\n    burgerMenu.classList.add(\"active\");\n    hideBackground.classList.add(\"active\");\n    body.style.overflow = \"hidden\";\n  }\n});\n\nhideBackground.addEventListener(\"click\", () => {\n  hideBackground.classList.remove(\"active\");\n  burger.classList.remove(\"active\");\n  burgerMenu.classList.remove(\"active\");\n  body.style.overflow = \"auto\";\n});\n\nconst burgerItems = document\n  .querySelectorAll(\".header__container__navigation__list > li\")\n  .forEach((elem) => {\n    elem.addEventListener(\"click\", () => {\n      burger.classList.remove(\"active\");\n      burgerMenu.classList.remove(\"active\");\n      hideBackground.classList.remove(\"active\");\n      body.style.overflow = \"auto\";\n    });\n  });\n\ndocument.addEventListener(\"DOMContentLoaded\", () => {\n  if (localStorage.getItem(\"theme\") === \"light\") {\n    changeTheme();\n  }\n});\n\ntoggleTheme.addEventListener(\"click\", () => {\n  localStorage.getItem(\"theme\") === \"light\"\n    ? localStorage.setItem(\"theme\", \"dark\")\n    : localStorage.setItem(\"theme\", \"light\");\n  changeTheme();\n});\n\n//# sourceURL=webpack://nft-marketplace/./src/pages/rankings/script.js?");

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
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/pages/rankings/script.js");
/******/ 	
/******/ })()
;