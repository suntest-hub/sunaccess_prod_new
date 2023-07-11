"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_declaration-details_declaration-details_module_ts"],{

/***/ 3295:
/*!*********************************************************************************!*\
  !*** ./src/app/pages/declaration-details/declaration-details-routing.module.ts ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DeclarationDetailsPageRoutingModule": () => (/* binding */ DeclarationDetailsPageRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _declaration_details_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./declaration-details.page */ 25552);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);




const routes = [{
  path: '',
  component: _declaration_details_page__WEBPACK_IMPORTED_MODULE_0__.DeclarationDetailsPage
}];
class DeclarationDetailsPageRoutingModule {}
DeclarationDetailsPageRoutingModule.ɵfac = function DeclarationDetailsPageRoutingModule_Factory(t) {
  return new (t || DeclarationDetailsPageRoutingModule)();
};
DeclarationDetailsPageRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
  type: DeclarationDetailsPageRoutingModule
});
DeclarationDetailsPageRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](DeclarationDetailsPageRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
})();

/***/ }),

/***/ 16246:
/*!*************************************************************************!*\
  !*** ./src/app/pages/declaration-details/declaration-details.module.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DeclarationDetailsPageModule": () => (/* binding */ DeclarationDetailsPageModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _declaration_details_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./declaration-details-routing.module */ 3295);
/* harmony import */ var _declaration_details_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./declaration-details.page */ 25552);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);






class DeclarationDetailsPageModule {}
DeclarationDetailsPageModule.ɵfac = function DeclarationDetailsPageModule_Factory(t) {
  return new (t || DeclarationDetailsPageModule)();
};
DeclarationDetailsPageModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
  type: DeclarationDetailsPageModule
});
DeclarationDetailsPageModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule, _declaration_details_routing_module__WEBPACK_IMPORTED_MODULE_0__.DeclarationDetailsPageRoutingModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](DeclarationDetailsPageModule, {
    declarations: [_declaration_details_page__WEBPACK_IMPORTED_MODULE_1__.DeclarationDetailsPage],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule, _declaration_details_routing_module__WEBPACK_IMPORTED_MODULE_0__.DeclarationDetailsPageRoutingModule]
  });
})();

/***/ })

}]);
//# sourceMappingURL=src_app_pages_declaration-details_declaration-details_module_ts.js.map