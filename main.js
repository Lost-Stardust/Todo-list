/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./visual-assets/trash-bin.png */ "./src/visual-assets/trash-bin.png"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Cabin&display=swap);"]);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `html {
  height: 100%;
}
body {
  height: 100%;
  margin: 0;

  display: flex;
  flex-direction: column;
}
* {
  box-sizing: border-box;
  font-family: "Cabin", sans-serif;
}
header {
  width: 100%;
  height: 44px;
  background: #7b2cbf;

  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px 0 20px;
}
button {
  width: 20px;
  height: auto;
  padding: 0;
  background-color: transparent;
  border: none;
}
.part1,
.part2 {
  display: flex;
  gap: 15px;
}
.profile {
  width: 25px;
  height: 25px;
  border-radius: 50px;
  background: url("https://avatars.githubusercontent.com/u/98334884?v=4");
  background-size: contain;
}
header > h1 {
  color: white;
  margin: 0;
}

.sidebar {
  width: 250px;
  flex: 1;
  background-color: rgba(128, 128, 128, 0.103);

  display: flex;
  flex-direction: column;
  transition: 0.6s;

  height: 100%;
  position: fixed;
  z-index: 1;
  top: 20;
  left: 20;
  padding-top: 20px;
  overflow-x: hidden;
}
.sidebar.inactive {
  width: 0px;
}
.sidebar-btn {
  transition: 0.6s;
  fill: white;
}
.sidebar-btn.inactive {
  transform: rotate(90deg);
}
.sidebar > div {
  padding-left: 16px;
  padding-right: 16px;
}
.due {
  flex: 1;

  display: flex;
  flex-direction: column;
  padding-top: 30px;
}
.projects {
  flex: 8;
}
.sidebar > div > button {
  font-size: 14px;
  width: 220px;
  border-radius: 4px;
  padding: 7px;

  display: flex;
  gap: 8px;
  align-items: center;
}
.sidebar > div > button:hover {
  background-color: rgba(128, 128, 128, 0.116);
  cursor: pointer;
}
.today-icon,
.upcoming-icon {
  width: 17px;
}
.today-icon {
  filter: invert(36%) sepia(14%) saturate(4743%) hue-rotate(130deg)
    brightness(91%) contrast(101%);
}
.upcoming-icon {
  filter: invert(65%) sepia(63%) saturate(6667%) hue-rotate(202deg)
    brightness(100%) contrast(102%);
}
.projects > h4 {
  font-size: 15px;
  margin-top: 0;
  margin-bottom: 17px;
  padding: 7px;
  padding-left: 0;

  display: flex;
  justify-content: space-between;
  border-bottom: black solid 1px;
}
.add-project {
  justify-content: center;
}
.add-project > img {
  width: 17px;
}
.add-project:hover {
  cursor: pointer;
}
label {
  display: flex;
  flex-direction: column;
}
input {
  border-radius: 4px;
  border: solid rgba(128, 128, 128, 0.555) 1px;
  padding: 4px;
  transition: 0.3s;
}
input:focus {
  outline: none;
  border: solid black 1px;
}
.popup {
  position: fixed;
  top: 25%;
  left: 50%;
  transform: translate(-50%, -50%) scale(0);
  opacity: 0;
  transition: opacity 300ms ease-in-out;
  border-radius: 7px;
  height: 180px;
  z-index: 10;
  min-width: 25%;
  padding: 0 15px 0 15px;
  background: white;

  display: flex;
  flex-direction: column;
}
.overlay {
  position: fixed;
  opacity: 0;
  transition: 200ms ease-in-out;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  pointer-events: none;
}
.popup.active {
  transform: translate(-50%, -50%) scale(1);
  opacity: 1;
}
.overlay.active {
  opacity: 1;
  pointer-events: all;
}
.popup form {
  display: flex;
  flex-direction: column;
  gap: 5px;
}
.buttons {
  display: flex;
  gap: 10px;
  justify-content: flex-end;
  margin-top: 30px;
}
.buttons > button {
  width: 65px;
  padding: 7px;
  border-radius: 4px;
}
.buttons > .add {
  background-color: #7b2cbf;
  color: white;
}
.buttons > .cancel {
  background-color: rgba(128, 128, 128, 0.116);
}
button:hover {
  cursor: pointer;
}
.projects-container {
  display: flex;
  flex-direction: column;
  gap: 4px;
}
.project {
  padding: 7px;
  border-radius: 4px;
  font-size: 14px;
  width: 100%;
  display: flex;
  justify-content: space-between;
}
.project:hover {
  background-color: rgba(128, 128, 128, 0.116);
}
.todo-popup,
.edit-popup {
  position: fixed;
  top: 25%;
  left: 50%;
  transform: translate(-50%, -50%) scale(0);
  opacity: 0;
  transition: opacity 300ms ease-in-out;
  border-radius: 7px;
  height: 180px;
  z-index: 10;
  min-width: 30%;
  padding: 5px 15px 5px 15px;
  background: white;

  display: flex;
  flex-direction: column;

  border: solid black 1px;
}
.todo-popup.active,
.edit-popup.active {
  transform: translate(-50%, -50%) scale(1);
  opacity: 1;
}
.todo-popup form,
.edit-popup form {
  display: flex;
  flex-direction: column;

  height: 100%;
  width: 100%;
}
.todo-popup #todo-title,
.edit-popup #edit-title {
  font-size: 20px;
  border: none;
}
.todo-popup #desc,
.edit-popup #edit-desc {
  border: none;
}
.todo-popup .buttons,
.edit-popup .buttons {
  justify-content: space-between;
}
.leftBtns,
.rightBtns {
  display: flex;
  gap: 5px;
  justify-content: flex-end;
}
.leftBtns {
  justify-content: start;
}
.buttons div button {
  width: 65px;
  padding: 7px;
  border-radius: 4px;
}
.rightBtns .add {
  background-color: #7b2cbf;
  color: white;
}
.rightBtns button,
.leftBtns button {
  height: 30px;
  background-color: rgba(128, 128, 128, 0.116);
}
.rightBtns .edit-confirm {
  background-color: #7b2cbf;
  color: white;
}
.leftBtns .date {
  width: 70px;
}
#date,
#edit-date {
  background-color: rgba(128, 128, 128, 0.116);
  border: none;
  width: 108px;
}
.dropdowns,
.edit-dropdowns {
  display: flex;
  padding: 10px 0 10px 0;
}
.priority,
#projectSelect,
.edit-priority,
#edit-projectSelect {
  border: #7b2cbf 1px solid;
  border-radius: 4px;
  background: none;
}
.priority:focus,
#projectSelect:focus,
.edit-priority:focus,
#edit-projectSelect:focus {
  outline: none;
}
#projectSelect,
#edit-projectSelect {
  padding: 4px;
}
.content-wrapper {
  display: flex;
  height: 100vh;
}
.content {
  flex: 5;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  margin-left: 250px;
  transition: 0.6s;
}
.todo {
  border-bottom: solid rgba(189, 189, 189, 0.555) 1px;
  width: 60%;
  height: 60px;
  display: flex;
  flex-direction: row-reverse;
}
.title-box {
  flex: 1;
  display: flex;
  align-items: center;
  gap: 10px;
}
.other-info {
  flex: 1;
  display: flex;
  gap: 20px;
  align-items: center;
  justify-content: center;
}
.title-wrapper > p {
  margin: 0;
}
.desc {
  font-size: 12px;
}
.edit {
  width: 18px;
  height: 18px;
}
.edit:hover {
  cursor: pointer;
}
.trash {
  width: 18px;
  height: 18px;
}
.trash:hover {
  cursor: pointer;
}
.todo-date,
.todo-priority {
  font-size: 15px;
}
.content > div {
  display: none;
}
.Default.active {
  width: 100%;
  flex: 5;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
}
.content > div.active {
  width: 100%;
  flex: 5;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
  padding: 20px;
}
.remove {
  height: 14px;
  width: 14px;
  background: center / contain url(${___CSS_LOADER_URL_REPLACEMENT_0___});
}
.checkbox {
  accent-color: #7b2cbf;
}
`, "",{"version":3,"sources":["webpack://./src/styles.css"],"names":[],"mappings":"AACA;EACE,YAAY;AACd;AACA;EACE,YAAY;EACZ,SAAS;;EAET,aAAa;EACb,sBAAsB;AACxB;AACA;EACE,sBAAsB;EACtB,gCAAgC;AAClC;AACA;EACE,WAAW;EACX,YAAY;EACZ,mBAAmB;;EAEnB,aAAa;EACb,mBAAmB;EACnB,8BAA8B;EAC9B,sBAAsB;AACxB;AACA;EACE,WAAW;EACX,YAAY;EACZ,UAAU;EACV,6BAA6B;EAC7B,YAAY;AACd;AACA;;EAEE,aAAa;EACb,SAAS;AACX;AACA;EACE,WAAW;EACX,YAAY;EACZ,mBAAmB;EACnB,uEAAuE;EACvE,wBAAwB;AAC1B;AACA;EACE,YAAY;EACZ,SAAS;AACX;;AAEA;EACE,YAAY;EACZ,OAAO;EACP,4CAA4C;;EAE5C,aAAa;EACb,sBAAsB;EACtB,gBAAgB;;EAEhB,YAAY;EACZ,eAAe;EACf,UAAU;EACV,OAAO;EACP,QAAQ;EACR,iBAAiB;EACjB,kBAAkB;AACpB;AACA;EACE,UAAU;AACZ;AACA;EACE,gBAAgB;EAChB,WAAW;AACb;AACA;EACE,wBAAwB;AAC1B;AACA;EACE,kBAAkB;EAClB,mBAAmB;AACrB;AACA;EACE,OAAO;;EAEP,aAAa;EACb,sBAAsB;EACtB,iBAAiB;AACnB;AACA;EACE,OAAO;AACT;AACA;EACE,eAAe;EACf,YAAY;EACZ,kBAAkB;EAClB,YAAY;;EAEZ,aAAa;EACb,QAAQ;EACR,mBAAmB;AACrB;AACA;EACE,4CAA4C;EAC5C,eAAe;AACjB;AACA;;EAEE,WAAW;AACb;AACA;EACE;kCACgC;AAClC;AACA;EACE;mCACiC;AACnC;AACA;EACE,eAAe;EACf,aAAa;EACb,mBAAmB;EACnB,YAAY;EACZ,eAAe;;EAEf,aAAa;EACb,8BAA8B;EAC9B,8BAA8B;AAChC;AACA;EACE,uBAAuB;AACzB;AACA;EACE,WAAW;AACb;AACA;EACE,eAAe;AACjB;AACA;EACE,aAAa;EACb,sBAAsB;AACxB;AACA;EACE,kBAAkB;EAClB,4CAA4C;EAC5C,YAAY;EACZ,gBAAgB;AAClB;AACA;EACE,aAAa;EACb,uBAAuB;AACzB;AACA;EACE,eAAe;EACf,QAAQ;EACR,SAAS;EACT,yCAAyC;EACzC,UAAU;EACV,qCAAqC;EACrC,kBAAkB;EAClB,aAAa;EACb,WAAW;EACX,cAAc;EACd,sBAAsB;EACtB,iBAAiB;;EAEjB,aAAa;EACb,sBAAsB;AACxB;AACA;EACE,eAAe;EACf,UAAU;EACV,6BAA6B;EAC7B,MAAM;EACN,OAAO;EACP,QAAQ;EACR,SAAS;EACT,oCAAoC;EACpC,oBAAoB;AACtB;AACA;EACE,yCAAyC;EACzC,UAAU;AACZ;AACA;EACE,UAAU;EACV,mBAAmB;AACrB;AACA;EACE,aAAa;EACb,sBAAsB;EACtB,QAAQ;AACV;AACA;EACE,aAAa;EACb,SAAS;EACT,yBAAyB;EACzB,gBAAgB;AAClB;AACA;EACE,WAAW;EACX,YAAY;EACZ,kBAAkB;AACpB;AACA;EACE,yBAAyB;EACzB,YAAY;AACd;AACA;EACE,4CAA4C;AAC9C;AACA;EACE,eAAe;AACjB;AACA;EACE,aAAa;EACb,sBAAsB;EACtB,QAAQ;AACV;AACA;EACE,YAAY;EACZ,kBAAkB;EAClB,eAAe;EACf,WAAW;EACX,aAAa;EACb,8BAA8B;AAChC;AACA;EACE,4CAA4C;AAC9C;AACA;;EAEE,eAAe;EACf,QAAQ;EACR,SAAS;EACT,yCAAyC;EACzC,UAAU;EACV,qCAAqC;EACrC,kBAAkB;EAClB,aAAa;EACb,WAAW;EACX,cAAc;EACd,0BAA0B;EAC1B,iBAAiB;;EAEjB,aAAa;EACb,sBAAsB;;EAEtB,uBAAuB;AACzB;AACA;;EAEE,yCAAyC;EACzC,UAAU;AACZ;AACA;;EAEE,aAAa;EACb,sBAAsB;;EAEtB,YAAY;EACZ,WAAW;AACb;AACA;;EAEE,eAAe;EACf,YAAY;AACd;AACA;;EAEE,YAAY;AACd;AACA;;EAEE,8BAA8B;AAChC;AACA;;EAEE,aAAa;EACb,QAAQ;EACR,yBAAyB;AAC3B;AACA;EACE,sBAAsB;AACxB;AACA;EACE,WAAW;EACX,YAAY;EACZ,kBAAkB;AACpB;AACA;EACE,yBAAyB;EACzB,YAAY;AACd;AACA;;EAEE,YAAY;EACZ,4CAA4C;AAC9C;AACA;EACE,yBAAyB;EACzB,YAAY;AACd;AACA;EACE,WAAW;AACb;AACA;;EAEE,4CAA4C;EAC5C,YAAY;EACZ,YAAY;AACd;AACA;;EAEE,aAAa;EACb,sBAAsB;AACxB;AACA;;;;EAIE,yBAAyB;EACzB,kBAAkB;EAClB,gBAAgB;AAClB;AACA;;;;EAIE,aAAa;AACf;AACA;;EAEE,YAAY;AACd;AACA;EACE,aAAa;EACb,aAAa;AACf;AACA;EACE,OAAO;EACP,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,aAAa;EACb,kBAAkB;EAClB,gBAAgB;AAClB;AACA;EACE,mDAAmD;EACnD,UAAU;EACV,YAAY;EACZ,aAAa;EACb,2BAA2B;AAC7B;AACA;EACE,OAAO;EACP,aAAa;EACb,mBAAmB;EACnB,SAAS;AACX;AACA;EACE,OAAO;EACP,aAAa;EACb,SAAS;EACT,mBAAmB;EACnB,uBAAuB;AACzB;AACA;EACE,SAAS;AACX;AACA;EACE,eAAe;AACjB;AACA;EACE,WAAW;EACX,YAAY;AACd;AACA;EACE,eAAe;AACjB;AACA;EACE,WAAW;EACX,YAAY;AACd;AACA;EACE,eAAe;AACjB;AACA;;EAEE,eAAe;AACjB;AACA;EACE,aAAa;AACf;AACA;EACE,WAAW;EACX,OAAO;EACP,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,aAAa;AACf;AACA;EACE,WAAW;EACX,OAAO;EACP,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,sBAAsB;EACtB,aAAa;AACf;AACA;EACE,YAAY;EACZ,WAAW;EACX,oEAAiE;AACnE;AACA;EACE,qBAAqB;AACvB","sourcesContent":["@import url(\"https://fonts.googleapis.com/css2?family=Cabin&display=swap\");\nhtml {\n  height: 100%;\n}\nbody {\n  height: 100%;\n  margin: 0;\n\n  display: flex;\n  flex-direction: column;\n}\n* {\n  box-sizing: border-box;\n  font-family: \"Cabin\", sans-serif;\n}\nheader {\n  width: 100%;\n  height: 44px;\n  background: #7b2cbf;\n\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 0 20px 0 20px;\n}\nbutton {\n  width: 20px;\n  height: auto;\n  padding: 0;\n  background-color: transparent;\n  border: none;\n}\n.part1,\n.part2 {\n  display: flex;\n  gap: 15px;\n}\n.profile {\n  width: 25px;\n  height: 25px;\n  border-radius: 50px;\n  background: url(\"https://avatars.githubusercontent.com/u/98334884?v=4\");\n  background-size: contain;\n}\nheader > h1 {\n  color: white;\n  margin: 0;\n}\n\n.sidebar {\n  width: 250px;\n  flex: 1;\n  background-color: rgba(128, 128, 128, 0.103);\n\n  display: flex;\n  flex-direction: column;\n  transition: 0.6s;\n\n  height: 100%;\n  position: fixed;\n  z-index: 1;\n  top: 20;\n  left: 20;\n  padding-top: 20px;\n  overflow-x: hidden;\n}\n.sidebar.inactive {\n  width: 0px;\n}\n.sidebar-btn {\n  transition: 0.6s;\n  fill: white;\n}\n.sidebar-btn.inactive {\n  transform: rotate(90deg);\n}\n.sidebar > div {\n  padding-left: 16px;\n  padding-right: 16px;\n}\n.due {\n  flex: 1;\n\n  display: flex;\n  flex-direction: column;\n  padding-top: 30px;\n}\n.projects {\n  flex: 8;\n}\n.sidebar > div > button {\n  font-size: 14px;\n  width: 220px;\n  border-radius: 4px;\n  padding: 7px;\n\n  display: flex;\n  gap: 8px;\n  align-items: center;\n}\n.sidebar > div > button:hover {\n  background-color: rgba(128, 128, 128, 0.116);\n  cursor: pointer;\n}\n.today-icon,\n.upcoming-icon {\n  width: 17px;\n}\n.today-icon {\n  filter: invert(36%) sepia(14%) saturate(4743%) hue-rotate(130deg)\n    brightness(91%) contrast(101%);\n}\n.upcoming-icon {\n  filter: invert(65%) sepia(63%) saturate(6667%) hue-rotate(202deg)\n    brightness(100%) contrast(102%);\n}\n.projects > h4 {\n  font-size: 15px;\n  margin-top: 0;\n  margin-bottom: 17px;\n  padding: 7px;\n  padding-left: 0;\n\n  display: flex;\n  justify-content: space-between;\n  border-bottom: black solid 1px;\n}\n.add-project {\n  justify-content: center;\n}\n.add-project > img {\n  width: 17px;\n}\n.add-project:hover {\n  cursor: pointer;\n}\nlabel {\n  display: flex;\n  flex-direction: column;\n}\ninput {\n  border-radius: 4px;\n  border: solid rgba(128, 128, 128, 0.555) 1px;\n  padding: 4px;\n  transition: 0.3s;\n}\ninput:focus {\n  outline: none;\n  border: solid black 1px;\n}\n.popup {\n  position: fixed;\n  top: 25%;\n  left: 50%;\n  transform: translate(-50%, -50%) scale(0);\n  opacity: 0;\n  transition: opacity 300ms ease-in-out;\n  border-radius: 7px;\n  height: 180px;\n  z-index: 10;\n  min-width: 25%;\n  padding: 0 15px 0 15px;\n  background: white;\n\n  display: flex;\n  flex-direction: column;\n}\n.overlay {\n  position: fixed;\n  opacity: 0;\n  transition: 200ms ease-in-out;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: rgba(0, 0, 0, 0.5);\n  pointer-events: none;\n}\n.popup.active {\n  transform: translate(-50%, -50%) scale(1);\n  opacity: 1;\n}\n.overlay.active {\n  opacity: 1;\n  pointer-events: all;\n}\n.popup form {\n  display: flex;\n  flex-direction: column;\n  gap: 5px;\n}\n.buttons {\n  display: flex;\n  gap: 10px;\n  justify-content: flex-end;\n  margin-top: 30px;\n}\n.buttons > button {\n  width: 65px;\n  padding: 7px;\n  border-radius: 4px;\n}\n.buttons > .add {\n  background-color: #7b2cbf;\n  color: white;\n}\n.buttons > .cancel {\n  background-color: rgba(128, 128, 128, 0.116);\n}\nbutton:hover {\n  cursor: pointer;\n}\n.projects-container {\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n}\n.project {\n  padding: 7px;\n  border-radius: 4px;\n  font-size: 14px;\n  width: 100%;\n  display: flex;\n  justify-content: space-between;\n}\n.project:hover {\n  background-color: rgba(128, 128, 128, 0.116);\n}\n.todo-popup,\n.edit-popup {\n  position: fixed;\n  top: 25%;\n  left: 50%;\n  transform: translate(-50%, -50%) scale(0);\n  opacity: 0;\n  transition: opacity 300ms ease-in-out;\n  border-radius: 7px;\n  height: 180px;\n  z-index: 10;\n  min-width: 30%;\n  padding: 5px 15px 5px 15px;\n  background: white;\n\n  display: flex;\n  flex-direction: column;\n\n  border: solid black 1px;\n}\n.todo-popup.active,\n.edit-popup.active {\n  transform: translate(-50%, -50%) scale(1);\n  opacity: 1;\n}\n.todo-popup form,\n.edit-popup form {\n  display: flex;\n  flex-direction: column;\n\n  height: 100%;\n  width: 100%;\n}\n.todo-popup #todo-title,\n.edit-popup #edit-title {\n  font-size: 20px;\n  border: none;\n}\n.todo-popup #desc,\n.edit-popup #edit-desc {\n  border: none;\n}\n.todo-popup .buttons,\n.edit-popup .buttons {\n  justify-content: space-between;\n}\n.leftBtns,\n.rightBtns {\n  display: flex;\n  gap: 5px;\n  justify-content: flex-end;\n}\n.leftBtns {\n  justify-content: start;\n}\n.buttons div button {\n  width: 65px;\n  padding: 7px;\n  border-radius: 4px;\n}\n.rightBtns .add {\n  background-color: #7b2cbf;\n  color: white;\n}\n.rightBtns button,\n.leftBtns button {\n  height: 30px;\n  background-color: rgba(128, 128, 128, 0.116);\n}\n.rightBtns .edit-confirm {\n  background-color: #7b2cbf;\n  color: white;\n}\n.leftBtns .date {\n  width: 70px;\n}\n#date,\n#edit-date {\n  background-color: rgba(128, 128, 128, 0.116);\n  border: none;\n  width: 108px;\n}\n.dropdowns,\n.edit-dropdowns {\n  display: flex;\n  padding: 10px 0 10px 0;\n}\n.priority,\n#projectSelect,\n.edit-priority,\n#edit-projectSelect {\n  border: #7b2cbf 1px solid;\n  border-radius: 4px;\n  background: none;\n}\n.priority:focus,\n#projectSelect:focus,\n.edit-priority:focus,\n#edit-projectSelect:focus {\n  outline: none;\n}\n#projectSelect,\n#edit-projectSelect {\n  padding: 4px;\n}\n.content-wrapper {\n  display: flex;\n  height: 100vh;\n}\n.content {\n  flex: 5;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding: 20px;\n  margin-left: 250px;\n  transition: 0.6s;\n}\n.todo {\n  border-bottom: solid rgba(189, 189, 189, 0.555) 1px;\n  width: 60%;\n  height: 60px;\n  display: flex;\n  flex-direction: row-reverse;\n}\n.title-box {\n  flex: 1;\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n.other-info {\n  flex: 1;\n  display: flex;\n  gap: 20px;\n  align-items: center;\n  justify-content: center;\n}\n.title-wrapper > p {\n  margin: 0;\n}\n.desc {\n  font-size: 12px;\n}\n.edit {\n  width: 18px;\n  height: 18px;\n}\n.edit:hover {\n  cursor: pointer;\n}\n.trash {\n  width: 18px;\n  height: 18px;\n}\n.trash:hover {\n  cursor: pointer;\n}\n.todo-date,\n.todo-priority {\n  font-size: 15px;\n}\n.content > div {\n  display: none;\n}\n.Default.active {\n  width: 100%;\n  flex: 5;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding: 20px;\n}\n.content > div.active {\n  width: 100%;\n  flex: 5;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: start;\n  padding: 20px;\n}\n.remove {\n  height: 14px;\n  width: 14px;\n  background: center / contain url(\"./visual-assets/trash-bin.png\");\n}\n.checkbox {\n  accent-color: #7b2cbf;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/add-project.js":
/*!****************************!*\
  !*** ./src/add-project.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addProject: () => (/* binding */ addProject),
/* harmony export */   projectList: () => (/* binding */ projectList)
/* harmony export */ });
/* harmony import */ var _project_ui__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./project-ui */ "./src/project-ui.js");

// import { projectList } from ".";

let projectList = [
  // projects made will be stored here
];

// variable that will represent stored projectList in local storage
let storedProjs;

const addProject = () => {
  class Project {
    constructor(name) {
      this.name = name;
    }
  }
  const projectName = document.querySelector("#project-title").value;

  const project = new Project(projectName);
  project.name = projectName;
  console.log(project);

  projectList.push(project);
  (0,_project_ui__WEBPACK_IMPORTED_MODULE_0__.makeProject)(project);

  // Retrieve the projList in local storage
  // Update it with the new project that is created

  storedProjs = JSON.parse(localStorage.getItem("projList"));
  storedProjs.push(project);
  localStorage.setItem("projList", JSON.stringify(storedProjs));
  console.log(storedProjs.length);

  console.log(projectList);
};

// add projList to localStorage if it doesnt exist
if (!localStorage.getItem("projList")) {
  localStorage.setItem("projList", JSON.stringify(projectList));
}




// Project name will be taken from popup input


/***/ }),

/***/ "./src/add-todo.js":
/*!*************************!*\
  !*** ./src/add-todo.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addTodo: () => (/* binding */ addTodo),
/* harmony export */   storedList: () => (/* binding */ storedList),
/* harmony export */   todoList: () => (/* binding */ todoList)
/* harmony export */ });
/* harmony import */ var _todo_ui__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todo-ui */ "./src/todo-ui.js");

const todoList = [
  // Todos made will be stored in here
];
// variable that will represent the stored todoList in local storage
let storedList;

const addTodo = () => {
  class Todo {
    constructor(title, desc, priority, date, project) {
      this.title = title;
      this.desc = desc;
      this.priority = priority;
      this.project = project;
      this.date = date;
    }
  }

  const title = document.querySelector("#todo-title").value;
  const desc = document.querySelector("#desc").value;
  const priority = document.querySelector(".priority").value;
  const date = document.querySelector("#date").value;
  const project = document.querySelector("#projectSelect").value;

  const todo1 = new Todo(title, desc, priority, date, project);
  console.log(todo1);

  todoList.push(todo1);
  console.log(todoList);

  (0,_todo_ui__WEBPACK_IMPORTED_MODULE_0__.makeTodo)(todo1);

  // Retrieve the todoList in local storage
  // Update it with the new todo that is created
  storedList = JSON.parse(localStorage.getItem("todoList"));
  storedList.push(todo1);
  localStorage.setItem("todoList", JSON.stringify(storedList));
  console.log(storedList.length);
};

// add todoList array to localStorage if it doesnt have it already

if (!localStorage.getItem("todoList")) {
  localStorage.setItem("todoList", JSON.stringify(todoList));
}






/***/ }),

/***/ "./src/edit-popup.js":
/*!***************************!*\
  !*** ./src/edit-popup.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   editPopup: () => (/* binding */ editPopup)
/* harmony export */ });
/* harmony import */ var _edit_todo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./edit-todo */ "./src/edit-todo.js");
/* harmony import */ var _add_todo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./add-todo */ "./src/add-todo.js");
/* harmony import */ var _todo_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./todo-ui */ "./src/todo-ui.js");




const editPopup = () => {
  // const edit = document.querySelector(".edit");
  const body = document.querySelector("body");
  const popup = document.createElement("div");
  popup.className = "edit-popup";

  const form = document.createElement("form");
  form.setAttribute("method", "post");
  popup.appendChild(form);

  // Create variable to access the properties of the todo object being edited
  const selectedTodo = _add_todo__WEBPACK_IMPORTED_MODULE_1__.todoList[_todo_ui__WEBPACK_IMPORTED_MODULE_2__.index];

  const editName = document.createElement("input");
  editName.setAttribute("type", "text");
  editName.setAttribute("id", "edit-title");
  editName.setAttribute("name", "edit-title");
  editName.setAttribute("placeholder", "Task name");
  editName.setAttribute("value", `${selectedTodo.title}`);
  form.appendChild(editName);

  const editDesc = document.createElement("input");
  editDesc.setAttribute("type", "text");
  editDesc.setAttribute("id", "edit-desc");
  editDesc.setAttribute("name", "edit-desc");
  editDesc.setAttribute("placeholder", "Description");
  editDesc.setAttribute("value", `${selectedTodo.desc}`);
  form.appendChild(editDesc);

  const overlay = document.querySelector(".overlay");

  const buttons = document.createElement("div");
  buttons.className = "buttons";
  form.appendChild(buttons);

  const leftBtns = document.createElement("div");
  leftBtns.className = "leftBtns";
  buttons.appendChild(leftBtns);

  const rightBtns = document.createElement("div");
  rightBtns.className = "rightBtns";
  buttons.appendChild(rightBtns);

  const editDate = document.createElement("input");
  editDate.setAttribute("type", "date");
  editDate.setAttribute("id", "edit-date");
  editDate.setAttribute("name", "edit-date");
  editDate.setAttribute("value", `${selectedTodo.date}`);
  leftBtns.appendChild(editDate);

  const editPriority = document.createElement("select");
  editPriority.textContent = "editPriority";
  const high = document.createElement("option");
  const medium = document.createElement("option");
  const low = document.createElement("option");
  high.textContent = "high";
  medium.textContent = "medium";
  low.textContent = "low";
  editPriority.className = "edit-priority";
  editPriority.appendChild(high);
  editPriority.appendChild(medium);
  editPriority.appendChild(low);
  leftBtns.appendChild(editPriority);

  const cancel = document.createElement("button");
  cancel.textContent = "Cancel";
  cancel.className = "edit-cancel";
  rightBtns.appendChild(cancel);

  const confirm = document.createElement("button");
  confirm.textContent = "edit";
  confirm.className = "edit-confirm";
  rightBtns.appendChild(confirm);

  const dropdowns = document.createElement("div");
  dropdowns.className = "edit-dropdowns";
  buttons.insertAdjacentElement("afterend", dropdowns);

  const projectSelect = document.createElement("select");
  dropdowns.appendChild(projectSelect);
  projectSelect.setAttribute("name", "projectSelect");
  projectSelect.setAttribute("value", `${selectedTodo.project}`);
  projectSelect.id = "edit-projectSelect";

  // Activate popup

  popup.classList.add("active");
  overlay.classList.add("active");
  projectSelect.replaceChildren();
  const projectContainer = document.querySelector(".projects-container");
  const projectArr = projectContainer.querySelectorAll(".project");
  for (let i = 0; i < projectArr.length; i++) {
    const option = document.createElement("option");
    option.textContent = projectArr[i].textContent;
    projectSelect.appendChild(option);
  }

  cancel.addEventListener("click", () => {
    event.preventDefault();
    popup.classList.remove("active");
    overlay.classList.remove("active");
    projectSelect.replaceChildren();
    body.removeChild(popup);
  });

  confirm.addEventListener("click", () => {
    event.preventDefault();
    popup.classList.remove("active");
    overlay.classList.remove("active");

    (0,_edit_todo__WEBPACK_IMPORTED_MODULE_0__.editTodo)();
    body.removeChild(popup);
  });

  editPriority.addEventListener("click", () => {
    event.preventDefault();
  });

  body.appendChild(popup);
};



/***/ }),

/***/ "./src/edit-todo.js":
/*!**************************!*\
  !*** ./src/edit-todo.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   editTodo: () => (/* binding */ editTodo)
/* harmony export */ });
/* harmony import */ var _add_todo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./add-todo */ "./src/add-todo.js");
/* harmony import */ var _todo_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./todo-ui */ "./src/todo-ui.js");


const editTodo = () => {
  console.log(_add_todo__WEBPACK_IMPORTED_MODULE_0__.todoList[_todo_ui__WEBPACK_IMPORTED_MODULE_1__.index]);
  const title = document.querySelector("#edit-title").value;
  const desc = document.querySelector("#edit-desc").value;
  const date = document.querySelector("#edit-date").value;
  const priority = document.querySelector(".edit-priority").value;
  const project = document.querySelector("#edit-projectSelect").value;
  // console.log({ title, desc, date, priority, project });

  const selectedTodo = _add_todo__WEBPACK_IMPORTED_MODULE_0__.todoList[_todo_ui__WEBPACK_IMPORTED_MODULE_1__.index];
  selectedTodo.title = title;
  selectedTodo.desc = desc;
  selectedTodo.date = date;
  selectedTodo.priority = priority;
  console.log(selectedTodo);

  const todo = document.querySelector(`.todo[data-index="${_todo_ui__WEBPACK_IMPORTED_MODULE_1__.index}"]`);
  console.log(todo);

  if (selectedTodo.project !== project) {
    selectedTodo.project = project;
    const projectDisplay = document.querySelector(
      `.${project}`.replace(/\s/g, "")
    );
    projectDisplay.appendChild(todo);
  }

  const editTitle = todo.querySelector(".todo-title");
  const editDesc = todo.querySelector(".desc");
  const editDate = todo.querySelector(".todo-date");
  const editPriority = todo.querySelector(".todo-priority");
  console.log(editTitle, editDesc, editDate, editPriority);

  editTitle.textContent = title;
  editDesc.textContent = desc;
  editDate.textContent = date;
  editPriority.textContent = priority;

  const storedList = JSON.parse(localStorage.getItem("todoList"));
  storedList[_todo_ui__WEBPACK_IMPORTED_MODULE_1__.index].title = title;
  storedList[_todo_ui__WEBPACK_IMPORTED_MODULE_1__.index].desc = desc;
  storedList[_todo_ui__WEBPACK_IMPORTED_MODULE_1__.index].date = date;
  storedList[_todo_ui__WEBPACK_IMPORTED_MODULE_1__.index].priority = priority;
  storedList[_todo_ui__WEBPACK_IMPORTED_MODULE_1__.index].project = project;
  localStorage.setItem("todoList", JSON.stringify(storedList));
};



/***/ }),

/***/ "./src/project-popup.js":
/*!******************************!*\
  !*** ./src/project-popup.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   projectPopup: () => (/* binding */ projectPopup)
/* harmony export */ });
/* harmony import */ var _add_project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./add-project */ "./src/add-project.js");

const projectPopup = () => {
  const add = document.querySelector(".add-project");
  const body = document.querySelector("body");
  const popup = document.createElement("div");
  popup.className = "popup";

  const form = document.createElement("form");
  form.setAttribute("method", "post");
  popup.appendChild(form);

  const label = document.createElement("label");
  label.setAttribute("for", "project-title");
  label.textContent = "Name";
  form.appendChild(label);

  const projectName = document.createElement("input");
  projectName.setAttribute("type", "text");
  projectName.setAttribute("id", "project-title");
  projectName.setAttribute("name", "project-title");
  projectName.setAttribute("maxlength", "30");
  form.appendChild(projectName);

  const overlay = document.createElement("div");
  overlay.className = "overlay";

  const title = document.createElement("h3");
  title.textContent = "Add project";
  popup.insertBefore(title, form);

  const buttons = document.createElement("div");
  buttons.className = "buttons";
  form.appendChild(buttons);

  const cancel = document.createElement("button");
  cancel.textContent = "Cancel";
  cancel.className = "cancel";
  buttons.appendChild(cancel);

  const confirm = document.createElement("button");
  confirm.textContent = "Add";
  confirm.className = "add";
  buttons.appendChild(confirm);
  body.appendChild(popup);
  body.appendChild(overlay);

  add.addEventListener("click", () => {
    popup.classList.add("active");
    overlay.classList.add("active");
  });

  cancel.addEventListener("click", () => {
    event.preventDefault();
    popup.classList.remove("active");
    overlay.classList.remove("active");
  });

  confirm.addEventListener("click", () => {
    event.preventDefault();
    if (projectName.value == "") {
      alert("Please enter a name for your project");
    } else {
      popup.classList.remove("active");
      overlay.classList.remove("active");
      (0,_add_project__WEBPACK_IMPORTED_MODULE_0__.addProject)();
    }
  });

  projectName.addEventListener("keydown", (e) => {
    if (!/^[A-Za-z]*$/.test(e.key)) e.preventDefault();
  });
};



/***/ }),

/***/ "./src/project-ui.js":
/*!***************************!*\
  !*** ./src/project-ui.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   makeProject: () => (/* binding */ makeProject)
/* harmony export */ });
/* harmony import */ var _add_project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./add-project */ "./src/add-project.js");
/* harmony import */ var _add_todo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./add-todo */ "./src/add-todo.js");


const makeProject = (project) => {
  let projectbtn = document.createElement("button");
  projectbtn.className = "project";
  projectbtn.dataset.index = _add_project__WEBPACK_IMPORTED_MODULE_0__.projectList.indexOf(project);

  const projectContainer = document.querySelector(".projects-container");
  projectContainer.appendChild(projectbtn);

  projectbtn.textContent = project.name;
  console.log(projectbtn);

  // Create div for each project to display its respective todos in
  const pDisplay = document.createElement("div");
  // remove whitespace from textcontent to use as class name
  pDisplay.className = project.name.replace(/\s/g, "");
  pDisplay.dataset.index = _add_project__WEBPACK_IMPORTED_MODULE_0__.projectList.indexOf(project);

  const content = document.querySelector(".content");
  content.appendChild(pDisplay);
  console.log(pDisplay);

  // const defaultProject = document.querySelector(".Default");
  // defaultProject.classList.add("active");
  // console.log(defaultProject);

  projectbtn.addEventListener("click", (e) => {
    // remove whitespace from textContent to use as selector
    const name = project.name.replace(/\s/g, "");
    const pDisplay = document.querySelector(`.${name}`);

    // Select all poject display divs and remove active class for all
    const otherDisplays = content.querySelectorAll("div");
    otherDisplays.forEach((d) => {
      d.classList.remove("active");
    });
    // assign active class to clicked project's div
    pDisplay.classList.add("active");
  });

  // Create and append remove button to project
  const remove = document.createElement("button");
  remove.className = "remove";
  projectbtn.appendChild(remove);

  remove.addEventListener("click", (e) => {
    let name = e.target.parentNode.textContent.replace(/\s/g, "");
    let display = document.querySelector(`.${name}`);
    let children = display.childNodes;
    let childrenArr = Array.from(children);
    console.log(childrenArr);

    for (let i = 0; i < childrenArr.length; i++) {
      console.log(childrenArr[i]);
      let index = childrenArr[i].dataset.index;
      _add_todo__WEBPACK_IMPORTED_MODULE_1__.todoList[index].project = "Default";
      console.log(_add_todo__WEBPACK_IMPORTED_MODULE_1__.todoList[index]);
      localStorage.setItem("todoList", JSON.stringify(_add_todo__WEBPACK_IMPORTED_MODULE_1__.todoList));
      let defaultp = document.querySelector(".Default");
      defaultp.appendChild(childrenArr[i]);
      console.log(childrenArr);
    }

    display.remove();
    e.target.parentNode.remove();
    e.stopPropagation();

    let index = e.target.parentNode.dataset.index;
    console.log(index);
    _add_project__WEBPACK_IMPORTED_MODULE_0__.projectList.splice(index, 1);
    console.log(_add_project__WEBPACK_IMPORTED_MODULE_0__.projectList);

    // delete project from local storage
    const list = JSON.parse(localStorage.getItem("projList"));
    list.splice(index, 1);
    localStorage.setItem("projList", JSON.stringify(list));

    // correct data index of project buttons
    let defaultp = projectContainer.querySelector(".project");
    defaultp.classList.add("defaultProject");
    console.log(defaultp);
    let projs = document.querySelectorAll(".project:not(.defaultProject)");
    console.log(projs);
    let n = 0;
    projs.forEach((btn) => {
      btn.dataset.index = n;
      n++;
    });
  });

  console.log(_add_project__WEBPACK_IMPORTED_MODULE_0__.projectList);
};

// Create button for default project
let project = document.createElement("button");
project.className = "project";
// project.dataset.index = projectList.indexOf(projectList[i]);
const projectContainer = document.querySelector(".projects-container");
projectContainer.appendChild(project);

project.textContent = "Default";
console.log(project);

// Create display div for default project
const pDisplay = document.createElement("div");
pDisplay.className = "Default";
// pDisplay.dataset.index = projectList.indexOf(projectList[i]);

const content = document.querySelector(".content");
content.appendChild(pDisplay);

const defaultProject = document.querySelector(".Default");
defaultProject.classList.add("active");
console.log(defaultProject);

project.addEventListener("click", (e) => {
  // Select all poject display divs and remove active class for all
  const otherDisplays = content.querySelectorAll("div");
  otherDisplays.forEach((d) => {
    d.classList.remove("active");
  });
  // assign active class to clicked project's div
  pDisplay.classList.add("active");
});




/***/ }),

/***/ "./src/sidebar.js":
/*!************************!*\
  !*** ./src/sidebar.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   sidebarSlide: () => (/* binding */ sidebarSlide)
/* harmony export */ });
const sidebarSlide = () => {
  const sidebarBtn = document.querySelector(".sidebar-btn");
  const sidebar = document.querySelector(".sidebar");
  const content = document.querySelector(".content");
  sidebarBtn.addEventListener("click", () => {
    if (
      sidebar.classList.contains("inactive") &&
      sidebarBtn.classList.contains("inactive")
    ) {
      sidebar.classList.remove("inactive");
      sidebarBtn.classList.remove("inactive");
      content.style.marginLeft = "250px";
    } else {
      sidebar.classList.add("inactive");
      sidebarBtn.classList.add("inactive");
      content.style.marginLeft = "0px";
    }
  });
};



/***/ }),

/***/ "./src/todo-popup.js":
/*!***************************!*\
  !*** ./src/todo-popup.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   todoPopup: () => (/* binding */ todoPopup)
/* harmony export */ });
/* harmony import */ var _add_todo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./add-todo */ "./src/add-todo.js");
/* harmony import */ var _todo_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./todo-ui */ "./src/todo-ui.js");


const todoPopup = () => {
  const add = document.querySelector(".add-todo");
  const body = document.querySelector("body");
  const popup = document.createElement("div");
  popup.className = "todo-popup";

  const form = document.createElement("form");
  form.setAttribute("method", "post");
  popup.appendChild(form);

  const todoName = document.createElement("input");
  todoName.setAttribute("type", "text");
  todoName.setAttribute("id", "todo-title");
  todoName.setAttribute("name", "todo-title");
  todoName.setAttribute("placeholder", "Task name");
  form.appendChild(todoName);

  const todoDesc = document.createElement("input");
  todoDesc.setAttribute("type", "text");
  todoDesc.setAttribute("id", "desc");
  todoDesc.setAttribute("name", "desc");
  todoDesc.setAttribute("placeholder", "Description");
  form.appendChild(todoDesc);

  const overlay = document.querySelector(".overlay");

  const buttons = document.createElement("div");
  buttons.className = "buttons";
  form.appendChild(buttons);

  const leftBtns = document.createElement("div");
  leftBtns.className = "leftBtns";
  buttons.appendChild(leftBtns);

  const rightBtns = document.createElement("div");
  rightBtns.className = "rightBtns";
  buttons.appendChild(rightBtns);

  const date = document.createElement("input");
  date.setAttribute("type", "date");
  date.setAttribute("id", "date");
  date.setAttribute("name", "date");
  leftBtns.appendChild(date);

  const priority = document.createElement("select");
  priority.textContent = "Priority";
  const high = document.createElement("option");
  const medium = document.createElement("option");
  const low = document.createElement("option");
  high.textContent = "high";
  medium.textContent = "medium";
  low.textContent = "low";
  priority.className = "priority";
  priority.appendChild(high);
  priority.appendChild(medium);
  priority.appendChild(low);
  leftBtns.appendChild(priority);

  const cancel = document.createElement("button");
  cancel.textContent = "Cancel";
  cancel.className = "cancel";
  rightBtns.appendChild(cancel);

  const confirm = document.createElement("button");
  confirm.textContent = "Add";
  confirm.className = "add";
  rightBtns.appendChild(confirm);

  const dropdowns = document.createElement("div");
  dropdowns.className = "dropdowns";
  buttons.insertAdjacentElement("afterend", dropdowns);

  const projectSelect = document.createElement("select");
  dropdowns.appendChild(projectSelect);
  projectSelect.setAttribute("name", "projectSelect");
  projectSelect.id = "projectSelect";

  add.addEventListener("click", () => {
    popup.classList.add("active");
    overlay.classList.add("active");
    projectSelect.replaceChildren();
    const projectContainer = document.querySelector(".projects-container");
    const projectArr = projectContainer.querySelectorAll(".project");
    for (let i = 0; i < projectArr.length; i++) {
      const option = document.createElement("option");
      option.textContent = projectArr[i].textContent;
      projectSelect.appendChild(option);
    }
  });

  cancel.addEventListener("click", () => {
    event.preventDefault();
    popup.classList.remove("active");
    overlay.classList.remove("active");
    projectSelect.replaceChildren();
  });

  confirm.addEventListener("click", () => {
    event.preventDefault();
    popup.classList.remove("active");
    overlay.classList.remove("active");

    // makeTodo();
    (0,_add_todo__WEBPACK_IMPORTED_MODULE_0__.addTodo)();
  });

  priority.addEventListener("click", () => {
    event.preventDefault();
  });

  body.appendChild(popup);
};



/***/ }),

/***/ "./src/todo-ui.js":
/*!************************!*\
  !*** ./src/todo-ui.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   index: () => (/* binding */ index),
/* harmony export */   makeTodo: () => (/* binding */ makeTodo)
/* harmony export */ });
/* harmony import */ var _add_todo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./add-todo */ "./src/add-todo.js");
/* harmony import */ var _edit_popup__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./edit-popup */ "./src/edit-popup.js");
/* harmony import */ var _visual_assets_editing_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./visual-assets/editing.png */ "./src/visual-assets/editing.png");
/* harmony import */ var _visual_assets_trash_bin_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./visual-assets/trash-bin.png */ "./src/visual-assets/trash-bin.png");




let index;
const makeTodo = (todoInfo) => {
  console.log({ todoInfo });

  const todo = document.createElement("div");
  todo.className = "todo";
  const projectDisplay = document.querySelector(
    `.${todoInfo.project}`.replace(/\s/g, "")
  );
  console.log(projectDisplay);
  projectDisplay.appendChild(todo);
  todo.dataset.index = _add_todo__WEBPACK_IMPORTED_MODULE_0__.todoList.indexOf(todoInfo);

  const otherInfo = document.createElement("div");
  todo.appendChild(otherInfo);
  otherInfo.className = "other-info";

  const titleBox = document.createElement("div");
  todo.appendChild(titleBox);
  titleBox.className = "title-box";

  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.className = "checkbox";
  titleBox.appendChild(checkbox);

  const titleWrapper = document.createElement("div");
  titleWrapper.className = "title-wrapper";
  titleBox.appendChild(titleWrapper);

  const todoTitle = document.createElement("p");
  todoTitle.className = "todo-title";
  todoTitle.textContent = todoInfo.title;
  titleWrapper.appendChild(todoTitle);

  const todoDesc = document.createElement("p");
  todoDesc.className = "desc";
  todoDesc.textContent = todoInfo.desc;
  titleWrapper.appendChild(todoDesc);

  const todoDate = document.createElement("p");
  todoDate.className = "todo-date";
  todoDate.textContent = todoInfo.date;
  otherInfo.appendChild(todoDate);

  const todoPriority = document.createElement("p");
  todoPriority.className = "todo-priority";
  todoPriority.textContent = todoInfo.priority;
  otherInfo.appendChild(todoPriority);

  const edit = document.createElement("img");
  edit.className = "edit";
  edit.src = _visual_assets_editing_png__WEBPACK_IMPORTED_MODULE_2__;
  otherInfo.appendChild(edit);

  const trash = document.createElement("img");
  trash.className = "trash";
  trash.src = _visual_assets_trash_bin_png__WEBPACK_IMPORTED_MODULE_3__;
  otherInfo.appendChild(trash);

  trash.addEventListener("click", (e) => {
    e.target.parentNode.parentNode.parentNode.removeChild(
      e.target.parentNode.parentNode
    );
    let index = e.target.parentNode.parentNode.dataset.index;
    _add_todo__WEBPACK_IMPORTED_MODULE_0__.todoList.splice(index, 1);
    console.log(_add_todo__WEBPACK_IMPORTED_MODULE_0__.todoList);

    // Update data-index of todos
    let todos = document.querySelectorAll(".todo");
    console.log(todos);
    let n = 0;
    todos.forEach((todo) => {
      todo.dataset.index = n;
      n++;
    });

    const list = JSON.parse(localStorage.getItem("todoList"));
    list.splice(index, 1);
    localStorage.setItem("todoList", JSON.stringify(list));
  });

  edit.addEventListener("click", (e) => {
    let indexValue = e.target.parentNode.parentNode.dataset.index;
    index = indexValue;
    console.log(index);
    console.log("edit listener triggered");
    (0,_edit_popup__WEBPACK_IMPORTED_MODULE_1__.editPopup)();
  });
  checkbox.addEventListener("click", () => {
    if (checkbox.checked == true) {
      todoTitle.style.textDecoration = "line-through";
      todoDesc.style.textDecoration = "line-through";

      todoTitle.style.color = "grey";
      todoDesc.style.color = "grey";

      todoTitle.style.textDecorationThickness = "3px";
      todoDesc.style.textDecorationThickness = "3px";

      todoTitle.style.textDecorationColor = "#7b2cbf";
      todoDesc.style.textDecorationColor = "#7b2cbf";
    } else {
      todoTitle.style.textDecoration = "none";
      todoDesc.style.textDecoration = "none";

      todoTitle.style.color = "black";
      todoDesc.style.color = "black";
    }
  });
};




/***/ }),

/***/ "./src/visual-assets/editing.png":
/*!***************************************!*\
  !*** ./src/visual-assets/editing.png ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "e42c3c63c6b97a10746d.png";

/***/ }),

/***/ "./src/visual-assets/trash-bin.png":
/*!*****************************************!*\
  !*** ./src/visual-assets/trash-bin.png ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "a35f031b7f0135bef6db.png";

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
/******/ 			id: moduleId,
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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 			if (document.currentScript && document.currentScript.tagName.toUpperCase() === 'SCRIPT')
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
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
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.css */ "./src/styles.css");
/* harmony import */ var _sidebar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sidebar */ "./src/sidebar.js");
/* harmony import */ var _project_popup__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./project-popup */ "./src/project-popup.js");
/* harmony import */ var _todo_popup__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./todo-popup */ "./src/todo-popup.js");
/* harmony import */ var _todo_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./todo-ui */ "./src/todo-ui.js");
/* harmony import */ var _add_todo__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./add-todo */ "./src/add-todo.js");
/* harmony import */ var _project_ui__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./project-ui */ "./src/project-ui.js");
/* harmony import */ var _add_project__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./add-project */ "./src/add-project.js");









(0,_sidebar__WEBPACK_IMPORTED_MODULE_1__.sidebarSlide)();
(0,_project_popup__WEBPACK_IMPORTED_MODULE_2__.projectPopup)();
(0,_todo_popup__WEBPACK_IMPORTED_MODULE_3__.todoPopup)();

// Retrieve stored projects and create them

const storedProjs = JSON.parse(localStorage.getItem("projList"));
if (storedProjs.length !== 0) {
  storedProjs.forEach((proj) => {
    _add_project__WEBPACK_IMPORTED_MODULE_7__.projectList.push(proj);
    console.log(_add_project__WEBPACK_IMPORTED_MODULE_7__.projectList);
    (0,_project_ui__WEBPACK_IMPORTED_MODULE_6__.makeProject)(proj);
  });
}

// Retrieve stored todos and create them
const storedList = JSON.parse(localStorage.getItem("todoList"));
console.log(storedList);
if (storedList.length !== 0) {
  storedList.forEach((todo) => {
    _add_todo__WEBPACK_IMPORTED_MODULE_5__.todoList.push(todo);
    (0,_todo_ui__WEBPACK_IMPORTED_MODULE_4__.makeTodo)(todo);
  });
}

})();

/******/ })()
;
//# sourceMappingURL=main.js.map