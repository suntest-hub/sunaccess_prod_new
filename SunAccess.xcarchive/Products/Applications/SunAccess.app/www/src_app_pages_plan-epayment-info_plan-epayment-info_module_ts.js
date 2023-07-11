"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_plan-epayment-info_plan-epayment-info_module_ts"],{

/***/ 12046:
/*!*******************************************************************************!*\
  !*** ./src/app/pages/plan-epayment-info/plan-epayment-info-routing.module.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PlanEpaymentInfoPageRoutingModule": () => (/* binding */ PlanEpaymentInfoPageRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _plan_epayment_info_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./plan-epayment-info.page */ 67955);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);




const routes = [{
  path: '',
  component: _plan_epayment_info_page__WEBPACK_IMPORTED_MODULE_0__.PlanEpaymentInfoPage
}];
class PlanEpaymentInfoPageRoutingModule {}
PlanEpaymentInfoPageRoutingModule.ɵfac = function PlanEpaymentInfoPageRoutingModule_Factory(t) {
  return new (t || PlanEpaymentInfoPageRoutingModule)();
};
PlanEpaymentInfoPageRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
  type: PlanEpaymentInfoPageRoutingModule
});
PlanEpaymentInfoPageRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](PlanEpaymentInfoPageRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
})();

/***/ }),

/***/ 652:
/*!***********************************************************************!*\
  !*** ./src/app/pages/plan-epayment-info/plan-epayment-info.module.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PlanEpaymentInfoPageModule": () => (/* binding */ PlanEpaymentInfoPageModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _plan_epayment_info_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./plan-epayment-info-routing.module */ 12046);
/* harmony import */ var _plan_epayment_info_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./plan-epayment-info.page */ 67955);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);






class PlanEpaymentInfoPageModule {}
PlanEpaymentInfoPageModule.ɵfac = function PlanEpaymentInfoPageModule_Factory(t) {
  return new (t || PlanEpaymentInfoPageModule)();
};
PlanEpaymentInfoPageModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
  type: PlanEpaymentInfoPageModule
});
PlanEpaymentInfoPageModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule, _plan_epayment_info_routing_module__WEBPACK_IMPORTED_MODULE_0__.PlanEpaymentInfoPageRoutingModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](PlanEpaymentInfoPageModule, {
    declarations: [_plan_epayment_info_page__WEBPACK_IMPORTED_MODULE_1__.PlanEpaymentInfoPage],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule, _plan_epayment_info_routing_module__WEBPACK_IMPORTED_MODULE_0__.PlanEpaymentInfoPageRoutingModule]
  });
})();

/***/ }),

/***/ 67955:
/*!*********************************************************************!*\
  !*** ./src/app/pages/plan-epayment-info/plan-epayment-info.page.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PlanEpaymentInfoPage": () => (/* binding */ PlanEpaymentInfoPage)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ 93819);


class PlanEpaymentInfoPage {
  constructor() {}
  ngOnInit() {}
}
PlanEpaymentInfoPage.ɵfac = function PlanEpaymentInfoPage_Factory(t) {
  return new (t || PlanEpaymentInfoPage)();
};
PlanEpaymentInfoPage.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: PlanEpaymentInfoPage,
  selectors: [["app-plan-epayment-info"]],
  decls: 5,
  vars: 0,
  template: function PlanEpaymentInfoPage_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ion-header")(1, "ion-toolbar")(2, "ion-title");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "plan-epayment-info");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "ion-content");
    }
  },
  dependencies: [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__.IonContent, _ionic_angular__WEBPACK_IMPORTED_MODULE_1__.IonHeader, _ionic_angular__WEBPACK_IMPORTED_MODULE_1__.IonTitle, _ionic_angular__WEBPACK_IMPORTED_MODULE_1__.IonToolbar],
  styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ })

}]);
//# sourceMappingURL=src_app_pages_plan-epayment-info_plan-epayment-info_module_ts.js.map