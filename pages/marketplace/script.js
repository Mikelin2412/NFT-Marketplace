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

/***/ "./src/components/button/style.less":
/*!******************************************!*\
  !*** ./src/components/button/style.less ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://nft-marketplace/./src/components/button/style.less?");

/***/ }),

/***/ "./src/pages/marketplace/styles.less":
/*!*******************************************!*\
  !*** ./src/pages/marketplace/styles.less ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://nft-marketplace/./src/pages/marketplace/styles.less?");

/***/ }),

/***/ "./src/components/button/script.js":
/*!*****************************************!*\
  !*** ./src/components/button/script.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_less__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.less */ \"./src/components/button/style.less\");\n\n\n//# sourceURL=webpack://nft-marketplace/./src/components/button/script.js?");

/***/ }),

/***/ "./src/pages/marketplace/script.js":
/*!*****************************************!*\
  !*** ./src/pages/marketplace/script.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_less__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.less */ \"./src/pages/marketplace/styles.less\");\n/* harmony import */ var _components_button_script__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/button/script */ \"./src/components/button/script.js\");\n\n\n\ndocument\n  .querySelectorAll(\".marketplace-section-menu__category-block\")\n  .forEach((tab) => {\n    tab.addEventListener(\"click\", () => {\n      document\n        .querySelectorAll(\".marketplace-section-menu__category-block\")\n        .forEach((t) => {\n          t.classList.remove(\"active-tab\");\n        });\n\n      tab.classList.add(\"active-tab\");\n    });\n  });\n\nconst body = document.querySelector(\"body\");\nconst toggleTheme = document.querySelector(\"#toggle-theme\");\nconst hideBackground = document.querySelector(\".hidden-background\");\nconst burger = document.querySelector(\".burger-menu\");\nconst burgerMenu = document.querySelector(\".header__container__navigation\");\n\nconst changeTheme = () => {\n  toggleTheme.classList.toggle(\"inverted-color\");\n\n  body.classList.toggle(\"light-mode\");\n\n  const sideMenu = document.querySelector(\".header__container__navigation\");\n  sideMenu.classList.toggle(\"light-mode\");\n\n  const burgerMenu = document.querySelector(\".burger-menu\");\n  burgerMenu.classList.toggle(\"light-mode\");\n\n  // Header\n  const header = document.querySelector(\".header\");\n  header.classList.toggle(\"light-mode\");\n\n  const headerText = document.querySelectorAll(\n    \".header__container__navigation__list__button\"\n  );\n  headerText.forEach((card) => card.classList.toggle(\"light-mode\"));\n\n  const outlinedButtons = document.querySelectorAll(\".outlined-button\");\n  outlinedButtons.forEach((button) => button.classList.toggle(\"light-mode\"));\n\n  // Footer\n  const footer = document.querySelector(\".footer\");\n  footer.classList.toggle(\"light-mode\");\n\n  const footerMarketplaceInfo = document.querySelectorAll(\n    \".footer__info-container__marketplace-info-block > p\"\n  );\n  footerMarketplaceInfo.forEach((card) => card.classList.toggle(\"light-mode\"));\n\n  const footerExploreInfo = document.querySelectorAll(\n    \".footer__info-container__explore-block > p\"\n  );\n  footerExploreInfo.forEach((card) => card.classList.toggle(\"light-mode\"));\n\n  const footerSubscribeInfo = document.querySelectorAll(\n    \".footer__info-container__subscribe-block > p\"\n  );\n  footerSubscribeInfo.forEach((card) => card.classList.toggle(\"light-mode\"));\n\n  const footerCopyright = document.querySelector(\n    \".footer__copyright-container\"\n  );\n  footerCopyright.classList.toggle(\"light-mode\");\n\n  const footerCopyrightText = document.querySelector(\n    \".footer__copyright-container > span\"\n  );\n  footerCopyrightText.classList.toggle(\"light-mode\");\n\n  // Other\n  const nftCards = document.querySelectorAll(\".nft-card-block\");\n  nftCards.forEach((card) => card.classList.toggle(\"light-mode\"));\n\n  const nftCardsTitles = document.querySelectorAll(\n    \".nft-card-block__description-container__additional-info__highest-bid__title\"\n  );\n  nftCardsTitles.forEach((card) => card.classList.toggle(\"light-mode\"));\n\n  const nftCardsPriceTitles = document.querySelectorAll(\n    \".nft-card-block__description-container__additional-info__price__title\"\n  );\n  nftCardsPriceTitles.forEach((card) => card.classList.toggle(\"light-mode\"));\n\n  const marketplaceSection = document.querySelector(\".marketplace-section\");\n  marketplaceSection.classList.toggle(\"light-mode\");\n\n  const marketplaceSectionMenu = document.querySelector(\n    \".marketplace-section-menu\"\n  );\n  marketplaceSectionMenu.classList.toggle(\"light-mode\");\n\n  const marketplaceSectionTabText = document.querySelectorAll(\n    \".marketplace-section-menu__category-block > h5\"\n  );\n  marketplaceSectionTabText.forEach((card) =>\n    card.classList.toggle(\"light-mode\")\n  );\n\n  const marketplaceSectionTabNumber = document.querySelectorAll(\n    \".marketplace-section-menu__category-block__value\"\n  );\n  marketplaceSectionTabNumber.forEach((number) =>\n    number.classList.toggle(\"light-mode\")\n  );\n};\n\ndocument.addEventListener(\"DOMContentLoaded\", () => {\n  if (localStorage.getItem(\"theme\") === \"light\") {\n    changeTheme();\n  }\n});\n\ntoggleTheme.addEventListener(\"click\", () => {\n  localStorage.getItem(\"theme\") === \"light\"\n    ? localStorage.setItem(\"theme\", \"dark\")\n    : localStorage.setItem(\"theme\", \"light\");\n  changeTheme();\n});\n\nburger.addEventListener(\"click\", () => {\n  if (burger.classList.contains(\"active\")) {\n    burger.classList.remove(\"active\");\n    burgerMenu.classList.remove(\"active\");\n    hideBackground.classList.remove(\"active\");\n    body.style.overflow = \"auto\";\n  } else {\n    burger.classList.add(\"active\");\n    burgerMenu.classList.add(\"active\");\n    hideBackground.classList.add(\"active\");\n    body.style.overflow = \"hidden\";\n  }\n});\n\nhideBackground.addEventListener(\"click\", () => {\n  hideBackground.classList.remove(\"active\");\n  burger.classList.remove(\"active\");\n  burgerMenu.classList.remove(\"active\");\n  body.style.overflow = \"auto\";\n});\n\nconst burgerItems = document\n  .querySelectorAll(\".header__container__navigation__list > li\")\n  .forEach((elem) => {\n    elem.addEventListener(\"click\", () => {\n      burger.classList.remove(\"active\");\n      burgerMenu.classList.remove(\"active\");\n      hideBackground.classList.remove(\"active\");\n      body.style.overflow = \"auto\";\n    });\n  });\n\n\n//# sourceURL=webpack://nft-marketplace/./src/pages/marketplace/script.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/pages/marketplace/script.js");
/******/ 	
/******/ })()
;