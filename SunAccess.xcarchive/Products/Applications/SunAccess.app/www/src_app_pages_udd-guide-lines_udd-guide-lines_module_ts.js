"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_udd-guide-lines_udd-guide-lines_module_ts"],{

/***/ 10821:
/*!*************************************************************************!*\
  !*** ./src/app/pages/udd-guide-lines/udd-guide-lines-routing.module.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UddGuideLinesPageRoutingModule": () => (/* binding */ UddGuideLinesPageRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _udd_guide_lines_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./udd-guide-lines.page */ 14598);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);




const routes = [{
  path: '',
  component: _udd_guide_lines_page__WEBPACK_IMPORTED_MODULE_0__.UddGuideLinesPage
}];
class UddGuideLinesPageRoutingModule {}
UddGuideLinesPageRoutingModule.ɵfac = function UddGuideLinesPageRoutingModule_Factory(t) {
  return new (t || UddGuideLinesPageRoutingModule)();
};
UddGuideLinesPageRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
  type: UddGuideLinesPageRoutingModule
});
UddGuideLinesPageRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](UddGuideLinesPageRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
})();

/***/ }),

/***/ 76831:
/*!*****************************************************************!*\
  !*** ./src/app/pages/udd-guide-lines/udd-guide-lines.module.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UddGuideLinesPageModule": () => (/* binding */ UddGuideLinesPageModule)
/* harmony export */ });
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ 38699);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _udd_guide_lines_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./udd-guide-lines-routing.module */ 10821);
/* harmony import */ var _udd_guide_lines_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./udd-guide-lines.page */ 14598);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);







class UddGuideLinesPageModule {}
UddGuideLinesPageModule.ɵfac = function UddGuideLinesPageModule_Factory(t) {
  return new (t || UddGuideLinesPageModule)();
};
UddGuideLinesPageModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
  type: UddGuideLinesPageModule
});
UddGuideLinesPageModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__.TranslateModule, _udd_guide_lines_routing_module__WEBPACK_IMPORTED_MODULE_0__.UddGuideLinesPageRoutingModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](UddGuideLinesPageModule, {
    declarations: [_udd_guide_lines_page__WEBPACK_IMPORTED_MODULE_1__.UddGuideLinesPage],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__.TranslateModule, _udd_guide_lines_routing_module__WEBPACK_IMPORTED_MODULE_0__.UddGuideLinesPageRoutingModule]
  });
})();

/***/ }),

/***/ 14598:
/*!***************************************************************!*\
  !*** ./src/app/pages/udd-guide-lines/udd-guide-lines.page.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UddGuideLinesPage": () => (/* binding */ UddGuideLinesPage)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ 38699);



class UddGuideLinesPage {
  constructor() {}
  ionViewDidLoad() {
    console.log('ionViewDidLoad UddGuideLinesPage');
  }
}
UddGuideLinesPage.ɵfac = function UddGuideLinesPage_Factory(t) {
  return new (t || UddGuideLinesPage)();
};
UddGuideLinesPage.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: UddGuideLinesPage,
  selectors: [["app-udd-guide-lines"]],
  decls: 19,
  vars: 3,
  consts: [["mode", "ios"], ["color", "primary"], [1, "bold-font"], ["no-bounce", "", 1, "app_bg2", "text_color_base", "ion-padding"], [1, "white_container_border_radius", "ion-padding"]],
  template: function UddGuideLinesPage_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ion-header", 0)(1, "ion-toolbar", 1)(2, "ion-title", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "ion-content", 3)(6, "ion-list", 4)(7, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "A convenient, hassle free and cost effective interbank collection service to make recurring payments. By updating the direct debit details, your recurring premium/contribution payment will be paid automatically From your bank account. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "br")(10, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " Note: ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "ul")(13, "li");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " 1. You are authorising Sun Life Malaysia to deduct an amount equal to the premiums/contributions for this policy/contract from your bank account by submitting the direct debit details. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "li");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, " 2. 3rd party payor is not allowable. The bank account registered must belong to you, the policy/contract owner of the policy/contract. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "li");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, " 3. To ensure the bank account registered is active for the purpose of the application for direct debit service, please note that RM1.00 shall be debited from the selected bank account and will be utilize to offset against next premium due. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 1, "policy_servicing.update_direct_debit"));
    }
  },
  dependencies: [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__.IonContent, _ionic_angular__WEBPACK_IMPORTED_MODULE_1__.IonHeader, _ionic_angular__WEBPACK_IMPORTED_MODULE_1__.IonList, _ionic_angular__WEBPACK_IMPORTED_MODULE_1__.IonTitle, _ionic_angular__WEBPACK_IMPORTED_MODULE_1__.IonToolbar, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__.TranslatePipe],
  styles: [".white_container_border_radius[_ngcontent-%COMP%] {\n  padding: 25px 15px;\n  border-radius: 15px !important;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcGFnZXMvdWRkLWd1aWRlLWxpbmVzL3VkZC1ndWlkZS1saW5lcy5wYWdlLnNjc3MiLCJ3ZWJwYWNrOi8vLi8uLi8uLi8uLi9BbGwlMjBQcm9qZWN0cy9NYWxheXNpYV9DbGllbnRBcHBfUmV2YW1wL1N1bkFjY2Vzc19Jb25pYzZfUmV2YW1wL3NyYy9hcHAvcGFnZXMvdWRkLWd1aWRlLWxpbmVzL3VkZC1ndWlkZS1saW5lcy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBQTtFQUNBLDhCQUFBO0FDQ0YiLCJzb3VyY2VzQ29udGVudCI6WyIud2hpdGVfY29udGFpbmVyX2JvcmRlcl9yYWRpdXN7XHJcbiAgcGFkZGluZzogMjVweCAxNXB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDE1cHggIWltcG9ydGFudDtcclxufVxyXG4iLCIud2hpdGVfY29udGFpbmVyX2JvcmRlcl9yYWRpdXMge1xuICBwYWRkaW5nOiAyNXB4IDE1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDE1cHggIWltcG9ydGFudDtcbn0iXSwic291cmNlUm9vdCI6IiJ9 */"]
});

/***/ })

}]);
//# sourceMappingURL=src_app_pages_udd-guide-lines_udd-guide-lines_module_ts.js.map