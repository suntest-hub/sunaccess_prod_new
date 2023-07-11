"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_premium-redirection_premium-redirection_module_ts"],{

/***/ 3571:
/*!*********************************************************************************!*\
  !*** ./src/app/pages/premium-redirection/premium-redirection-routing.module.ts ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PremiumRedirectionPageRoutingModule": () => (/* binding */ PremiumRedirectionPageRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _premium_redirection_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./premium-redirection.page */ 38100);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);




const routes = [{
  path: '',
  component: _premium_redirection_page__WEBPACK_IMPORTED_MODULE_0__.PremiumRedirectionPage
}];
class PremiumRedirectionPageRoutingModule {}
PremiumRedirectionPageRoutingModule.ɵfac = function PremiumRedirectionPageRoutingModule_Factory(t) {
  return new (t || PremiumRedirectionPageRoutingModule)();
};
PremiumRedirectionPageRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
  type: PremiumRedirectionPageRoutingModule
});
PremiumRedirectionPageRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](PremiumRedirectionPageRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
})();

/***/ }),

/***/ 90634:
/*!*************************************************************************!*\
  !*** ./src/app/pages/premium-redirection/premium-redirection.module.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PremiumRedirectionPageModule": () => (/* binding */ PremiumRedirectionPageModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _premium_redirection_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./premium-redirection-routing.module */ 3571);
/* harmony import */ var _premium_redirection_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./premium-redirection.page */ 38100);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);






class PremiumRedirectionPageModule {}
PremiumRedirectionPageModule.ɵfac = function PremiumRedirectionPageModule_Factory(t) {
  return new (t || PremiumRedirectionPageModule)();
};
PremiumRedirectionPageModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
  type: PremiumRedirectionPageModule
});
PremiumRedirectionPageModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule, _premium_redirection_routing_module__WEBPACK_IMPORTED_MODULE_0__.PremiumRedirectionPageRoutingModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](PremiumRedirectionPageModule, {
    declarations: [_premium_redirection_page__WEBPACK_IMPORTED_MODULE_1__.PremiumRedirectionPage],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule, _premium_redirection_routing_module__WEBPACK_IMPORTED_MODULE_0__.PremiumRedirectionPageRoutingModule]
  });
})();

/***/ }),

/***/ 38100:
/*!***********************************************************************!*\
  !*** ./src/app/pages/premium-redirection/premium-redirection.page.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PremiumRedirectionPage": () => (/* binding */ PremiumRedirectionPage)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ 93819);


class PremiumRedirectionPage {
  constructor() {}
  ngOnInit() {}
}
PremiumRedirectionPage.ɵfac = function PremiumRedirectionPage_Factory(t) {
  return new (t || PremiumRedirectionPage)();
};
PremiumRedirectionPage.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: PremiumRedirectionPage,
  selectors: [["app-premium-redirection"]],
  decls: 5,
  vars: 0,
  template: function PremiumRedirectionPage_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ion-header")(1, "ion-toolbar")(2, "ion-title");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "PremiumRedirection");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "ion-content");
    }
  },
  dependencies: [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__.IonContent, _ionic_angular__WEBPACK_IMPORTED_MODULE_1__.IonHeader, _ionic_angular__WEBPACK_IMPORTED_MODULE_1__.IonTitle, _ionic_angular__WEBPACK_IMPORTED_MODULE_1__.IonToolbar],
  styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ })

}]);
//# sourceMappingURL=src_app_pages_premium-redirection_premium-redirection_module_ts.js.map