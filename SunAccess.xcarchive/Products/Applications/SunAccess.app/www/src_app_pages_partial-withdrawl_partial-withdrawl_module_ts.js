"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_partial-withdrawl_partial-withdrawl_module_ts"],{

/***/ 93635:
/*!*****************************************************************************!*\
  !*** ./src/app/pages/partial-withdrawl/partial-withdrawl-routing.module.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PartialWithdrawlPageRoutingModule": () => (/* binding */ PartialWithdrawlPageRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _partial_withdrawl_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./partial-withdrawl.page */ 63426);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);




const routes = [{
  path: '',
  component: _partial_withdrawl_page__WEBPACK_IMPORTED_MODULE_0__.PartialWithdrawlPage
}];
class PartialWithdrawlPageRoutingModule {}
PartialWithdrawlPageRoutingModule.ɵfac = function PartialWithdrawlPageRoutingModule_Factory(t) {
  return new (t || PartialWithdrawlPageRoutingModule)();
};
PartialWithdrawlPageRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
  type: PartialWithdrawlPageRoutingModule
});
PartialWithdrawlPageRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](PartialWithdrawlPageRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
})();

/***/ }),

/***/ 24636:
/*!*********************************************************************!*\
  !*** ./src/app/pages/partial-withdrawl/partial-withdrawl.module.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PartialWithdrawlPageModule": () => (/* binding */ PartialWithdrawlPageModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _partial_withdrawl_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./partial-withdrawl-routing.module */ 93635);
/* harmony import */ var _partial_withdrawl_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./partial-withdrawl.page */ 63426);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);






class PartialWithdrawlPageModule {}
PartialWithdrawlPageModule.ɵfac = function PartialWithdrawlPageModule_Factory(t) {
  return new (t || PartialWithdrawlPageModule)();
};
PartialWithdrawlPageModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
  type: PartialWithdrawlPageModule
});
PartialWithdrawlPageModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule, _partial_withdrawl_routing_module__WEBPACK_IMPORTED_MODULE_0__.PartialWithdrawlPageRoutingModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](PartialWithdrawlPageModule, {
    declarations: [_partial_withdrawl_page__WEBPACK_IMPORTED_MODULE_1__.PartialWithdrawlPage],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule, _partial_withdrawl_routing_module__WEBPACK_IMPORTED_MODULE_0__.PartialWithdrawlPageRoutingModule]
  });
})();

/***/ }),

/***/ 63426:
/*!*******************************************************************!*\
  !*** ./src/app/pages/partial-withdrawl/partial-withdrawl.page.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PartialWithdrawlPage": () => (/* binding */ PartialWithdrawlPage)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ 93819);


class PartialWithdrawlPage {
  constructor() {}
  ngOnInit() {}
}
PartialWithdrawlPage.ɵfac = function PartialWithdrawlPage_Factory(t) {
  return new (t || PartialWithdrawlPage)();
};
PartialWithdrawlPage.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: PartialWithdrawlPage,
  selectors: [["app-partial-withdrawl"]],
  decls: 5,
  vars: 0,
  template: function PartialWithdrawlPage_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ion-header")(1, "ion-toolbar")(2, "ion-title");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "PartialWithdrawl");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "ion-content");
    }
  },
  dependencies: [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__.IonContent, _ionic_angular__WEBPACK_IMPORTED_MODULE_1__.IonHeader, _ionic_angular__WEBPACK_IMPORTED_MODULE_1__.IonTitle, _ionic_angular__WEBPACK_IMPORTED_MODULE_1__.IonToolbar],
  styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ })

}]);
//# sourceMappingURL=src_app_pages_partial-withdrawl_partial-withdrawl_module_ts.js.map