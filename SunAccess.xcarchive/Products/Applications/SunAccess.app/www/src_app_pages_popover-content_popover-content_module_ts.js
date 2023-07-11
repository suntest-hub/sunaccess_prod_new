"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_popover-content_popover-content_module_ts"],{

/***/ 78510:
/*!*************************************************************************!*\
  !*** ./src/app/pages/popover-content/popover-content-routing.module.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PopoverContentPageRoutingModule": () => (/* binding */ PopoverContentPageRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _popover_content_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./popover-content.page */ 97716);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);




const routes = [{
  path: '',
  component: _popover_content_page__WEBPACK_IMPORTED_MODULE_0__.PopoverContentPage
}];
class PopoverContentPageRoutingModule {}
PopoverContentPageRoutingModule.ɵfac = function PopoverContentPageRoutingModule_Factory(t) {
  return new (t || PopoverContentPageRoutingModule)();
};
PopoverContentPageRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
  type: PopoverContentPageRoutingModule
});
PopoverContentPageRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](PopoverContentPageRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
})();

/***/ }),

/***/ 10747:
/*!*****************************************************************!*\
  !*** ./src/app/pages/popover-content/popover-content.module.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PopoverContentPageModule": () => (/* binding */ PopoverContentPageModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _popover_content_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./popover-content-routing.module */ 78510);
/* harmony import */ var _popover_content_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./popover-content.page */ 97716);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);






class PopoverContentPageModule {}
PopoverContentPageModule.ɵfac = function PopoverContentPageModule_Factory(t) {
  return new (t || PopoverContentPageModule)();
};
PopoverContentPageModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
  type: PopoverContentPageModule
});
PopoverContentPageModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule, _popover_content_routing_module__WEBPACK_IMPORTED_MODULE_0__.PopoverContentPageRoutingModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](PopoverContentPageModule, {
    declarations: [_popover_content_page__WEBPACK_IMPORTED_MODULE_1__.PopoverContentPage],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule, _popover_content_routing_module__WEBPACK_IMPORTED_MODULE_0__.PopoverContentPageRoutingModule]
  });
})();

/***/ })

}]);
//# sourceMappingURL=src_app_pages_popover-content_popover-content_module_ts.js.map