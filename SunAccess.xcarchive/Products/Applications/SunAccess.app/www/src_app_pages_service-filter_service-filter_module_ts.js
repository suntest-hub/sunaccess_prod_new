"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_service-filter_service-filter_module_ts"],{

/***/ 20855:
/*!***********************************************************************!*\
  !*** ./src/app/pages/service-filter/service-filter-routing.module.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ServiceFilterPageRoutingModule": () => (/* binding */ ServiceFilterPageRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _service_filter_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./service-filter.page */ 86358);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);




const routes = [{
  path: '',
  component: _service_filter_page__WEBPACK_IMPORTED_MODULE_0__.ServiceFilterPage
}];
class ServiceFilterPageRoutingModule {}
ServiceFilterPageRoutingModule.ɵfac = function ServiceFilterPageRoutingModule_Factory(t) {
  return new (t || ServiceFilterPageRoutingModule)();
};
ServiceFilterPageRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
  type: ServiceFilterPageRoutingModule
});
ServiceFilterPageRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](ServiceFilterPageRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
})();

/***/ }),

/***/ 18430:
/*!***************************************************************!*\
  !*** ./src/app/pages/service-filter/service-filter.module.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ServiceFilterPageModule": () => (/* binding */ ServiceFilterPageModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _service_filter_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./service-filter-routing.module */ 20855);
/* harmony import */ var _service_filter_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./service-filter.page */ 86358);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ 38699);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);







class ServiceFilterPageModule {}
ServiceFilterPageModule.ɵfac = function ServiceFilterPageModule_Factory(t) {
  return new (t || ServiceFilterPageModule)();
};
ServiceFilterPageModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
  type: ServiceFilterPageModule
});
ServiceFilterPageModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__.TranslateModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.ReactiveFormsModule, _service_filter_routing_module__WEBPACK_IMPORTED_MODULE_0__.ServiceFilterPageRoutingModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](ServiceFilterPageModule, {
    declarations: [_service_filter_page__WEBPACK_IMPORTED_MODULE_1__.ServiceFilterPage],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__.TranslateModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.ReactiveFormsModule, _service_filter_routing_module__WEBPACK_IMPORTED_MODULE_0__.ServiceFilterPageRoutingModule]
  });
})();

/***/ }),

/***/ 86358:
/*!*************************************************************!*\
  !*** ./src/app/pages/service-filter/service-filter.page.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ServiceFilterPage": () => (/* binding */ ServiceFilterPage)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 22560);

class ServiceFilterPage {}
ServiceFilterPage.ɵfac = function ServiceFilterPage_Factory(t) {
  return new (t || ServiceFilterPage)();
};
ServiceFilterPage.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: ServiceFilterPage,
  selectors: [["app-service-filter"]],
  decls: 0,
  vars: 0,
  template: function ServiceFilterPage_Template(rf, ctx) {},
  styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ })

}]);
//# sourceMappingURL=src_app_pages_service-filter_service-filter_module_ts.js.map