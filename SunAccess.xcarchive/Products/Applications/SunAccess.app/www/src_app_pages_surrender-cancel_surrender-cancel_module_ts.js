"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_surrender-cancel_surrender-cancel_module_ts"],{

/***/ 72498:
/*!***************************************************************************!*\
  !*** ./src/app/pages/surrender-cancel/surrender-cancel-routing.module.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SurrenderCancelPageRoutingModule": () => (/* binding */ SurrenderCancelPageRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _surrender_cancel_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./surrender-cancel.page */ 15644);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);




const routes = [{
  path: '',
  component: _surrender_cancel_page__WEBPACK_IMPORTED_MODULE_0__.SurrenderCancelPage
}];
class SurrenderCancelPageRoutingModule {}
SurrenderCancelPageRoutingModule.ɵfac = function SurrenderCancelPageRoutingModule_Factory(t) {
  return new (t || SurrenderCancelPageRoutingModule)();
};
SurrenderCancelPageRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
  type: SurrenderCancelPageRoutingModule
});
SurrenderCancelPageRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](SurrenderCancelPageRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
})();

/***/ }),

/***/ 68667:
/*!*******************************************************************!*\
  !*** ./src/app/pages/surrender-cancel/surrender-cancel.module.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SurrenderCancelPageModule": () => (/* binding */ SurrenderCancelPageModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _surrender_cancel_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./surrender-cancel-routing.module */ 72498);
/* harmony import */ var _surrender_cancel_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./surrender-cancel.page */ 15644);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);






class SurrenderCancelPageModule {}
SurrenderCancelPageModule.ɵfac = function SurrenderCancelPageModule_Factory(t) {
  return new (t || SurrenderCancelPageModule)();
};
SurrenderCancelPageModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
  type: SurrenderCancelPageModule
});
SurrenderCancelPageModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule, _surrender_cancel_routing_module__WEBPACK_IMPORTED_MODULE_0__.SurrenderCancelPageRoutingModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](SurrenderCancelPageModule, {
    declarations: [_surrender_cancel_page__WEBPACK_IMPORTED_MODULE_1__.SurrenderCancelPage],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule, _surrender_cancel_routing_module__WEBPACK_IMPORTED_MODULE_0__.SurrenderCancelPageRoutingModule]
  });
})();

/***/ }),

/***/ 15644:
/*!*****************************************************************!*\
  !*** ./src/app/pages/surrender-cancel/surrender-cancel.page.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SurrenderCancelPage": () => (/* binding */ SurrenderCancelPage)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ 93819);


class SurrenderCancelPage {
  constructor() {}
  ngOnInit() {}
}
SurrenderCancelPage.ɵfac = function SurrenderCancelPage_Factory(t) {
  return new (t || SurrenderCancelPage)();
};
SurrenderCancelPage.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: SurrenderCancelPage,
  selectors: [["app-surrender-cancel"]],
  decls: 5,
  vars: 0,
  template: function SurrenderCancelPage_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ion-header")(1, "ion-toolbar")(2, "ion-title");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "SurrenderCancel");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "ion-content");
    }
  },
  dependencies: [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__.IonContent, _ionic_angular__WEBPACK_IMPORTED_MODULE_1__.IonHeader, _ionic_angular__WEBPACK_IMPORTED_MODULE_1__.IonTitle, _ionic_angular__WEBPACK_IMPORTED_MODULE_1__.IonToolbar],
  styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ })

}]);
//# sourceMappingURL=src_app_pages_surrender-cancel_surrender-cancel_module_ts.js.map