"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_profile-pop-up_profile-pop-up_module_ts"],{

/***/ 37460:
/*!***********************************************************************!*\
  !*** ./src/app/pages/profile-pop-up/profile-pop-up-routing.module.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProfilePopUpPageRoutingModule": () => (/* binding */ ProfilePopUpPageRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _profile_pop_up_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./profile-pop-up.page */ 74995);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);




const routes = [{
  path: '',
  component: _profile_pop_up_page__WEBPACK_IMPORTED_MODULE_0__.ProfilePopUpPage
}];
class ProfilePopUpPageRoutingModule {}
ProfilePopUpPageRoutingModule.ɵfac = function ProfilePopUpPageRoutingModule_Factory(t) {
  return new (t || ProfilePopUpPageRoutingModule)();
};
ProfilePopUpPageRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
  type: ProfilePopUpPageRoutingModule
});
ProfilePopUpPageRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](ProfilePopUpPageRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
})();

/***/ }),

/***/ 28111:
/*!***************************************************************!*\
  !*** ./src/app/pages/profile-pop-up/profile-pop-up.module.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProfilePopUpPageModule": () => (/* binding */ ProfilePopUpPageModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _profile_pop_up_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./profile-pop-up-routing.module */ 37460);
/* harmony import */ var _profile_pop_up_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./profile-pop-up.page */ 74995);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ 38699);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);







class ProfilePopUpPageModule {}
ProfilePopUpPageModule.ɵfac = function ProfilePopUpPageModule_Factory(t) {
  return new (t || ProfilePopUpPageModule)();
};
ProfilePopUpPageModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
  type: ProfilePopUpPageModule
});
ProfilePopUpPageModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule, _profile_pop_up_routing_module__WEBPACK_IMPORTED_MODULE_0__.ProfilePopUpPageRoutingModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__.TranslateModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](ProfilePopUpPageModule, {
    declarations: [_profile_pop_up_page__WEBPACK_IMPORTED_MODULE_1__.ProfilePopUpPage],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule, _profile_pop_up_routing_module__WEBPACK_IMPORTED_MODULE_0__.ProfilePopUpPageRoutingModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__.TranslateModule]
  });
})();

/***/ })

}]);
//# sourceMappingURL=src_app_pages_profile-pop-up_profile-pop-up_module_ts.js.map