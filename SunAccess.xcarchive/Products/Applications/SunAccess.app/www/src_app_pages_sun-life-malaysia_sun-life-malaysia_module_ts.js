"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_sun-life-malaysia_sun-life-malaysia_module_ts"],{

/***/ 70003:
/*!*****************************************************************************!*\
  !*** ./src/app/pages/sun-life-malaysia/sun-life-malaysia-routing.module.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SunLifeMalaysiaPageRoutingModule": () => (/* binding */ SunLifeMalaysiaPageRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _sun_life_malaysia_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sun-life-malaysia.page */ 98008);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);




const routes = [{
  path: '',
  component: _sun_life_malaysia_page__WEBPACK_IMPORTED_MODULE_0__.SunLifeMalaysiaPage
}];
class SunLifeMalaysiaPageRoutingModule {}
SunLifeMalaysiaPageRoutingModule.ɵfac = function SunLifeMalaysiaPageRoutingModule_Factory(t) {
  return new (t || SunLifeMalaysiaPageRoutingModule)();
};
SunLifeMalaysiaPageRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
  type: SunLifeMalaysiaPageRoutingModule
});
SunLifeMalaysiaPageRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](SunLifeMalaysiaPageRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
})();

/***/ }),

/***/ 29574:
/*!*********************************************************************!*\
  !*** ./src/app/pages/sun-life-malaysia/sun-life-malaysia.module.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SunLifeMalaysiaPageModule": () => (/* binding */ SunLifeMalaysiaPageModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ 38699);
/* harmony import */ var _sun_life_malaysia_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sun-life-malaysia-routing.module */ 70003);
/* harmony import */ var _sun_life_malaysia_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sun-life-malaysia.page */ 98008);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);







class SunLifeMalaysiaPageModule {}
SunLifeMalaysiaPageModule.ɵfac = function SunLifeMalaysiaPageModule_Factory(t) {
  return new (t || SunLifeMalaysiaPageModule)();
};
SunLifeMalaysiaPageModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
  type: SunLifeMalaysiaPageModule
});
SunLifeMalaysiaPageModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__.TranslateModule, _sun_life_malaysia_routing_module__WEBPACK_IMPORTED_MODULE_0__.SunLifeMalaysiaPageRoutingModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](SunLifeMalaysiaPageModule, {
    declarations: [_sun_life_malaysia_page__WEBPACK_IMPORTED_MODULE_1__.SunLifeMalaysiaPage],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__.TranslateModule, _sun_life_malaysia_routing_module__WEBPACK_IMPORTED_MODULE_0__.SunLifeMalaysiaPageRoutingModule]
  });
})();

/***/ }),

/***/ 98008:
/*!*******************************************************************!*\
  !*** ./src/app/pages/sun-life-malaysia/sun-life-malaysia.page.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SunLifeMalaysiaPage": () => (/* binding */ SunLifeMalaysiaPage)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _services_translate_config_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/translate-config.service */ 45340);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ 38699);





class SunLifeMalaysiaPage {
  constructor(activatedRoute, translateConfigService, menuControl, router) {
    this.activatedRoute = activatedRoute;
    this.translateConfigService = translateConfigService;
    this.menuControl = menuControl;
    this.router = router;
    this.selectedLanguage = this.translateConfigService.getDefaultLanguage();
    this.translateConfigService.setLanguage('en');
  }
  ngOnInit() {}
}
SunLifeMalaysiaPage.ɵfac = function SunLifeMalaysiaPage_Factory(t) {
  return new (t || SunLifeMalaysiaPage)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_translate_config_service__WEBPACK_IMPORTED_MODULE_0__.TranslateConfigService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_3__.MenuController), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router));
};
SunLifeMalaysiaPage.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: SunLifeMalaysiaPage,
  selectors: [["app-sun-life-malaysia"]],
  decls: 25,
  vars: 18,
  consts: [["mode", "ios"], ["color", "primary"], ["slot", "start"], ["text", "", "icon", "chevron-back-outline", 2, "padding-left", "15px", "font-size", "0.7rem"], [1, "bold-font"], [1, "sub_title", "ion-no-padding"], [1, "subheader_bg"], [1, "sub-header"], ["no", "", "bounce", "", 1, "ion-padding"]],
  template: function SunLifeMalaysiaPage_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-header", 0)(1, "ion-toolbar", 1)(2, "ion-buttons", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "ion-back-button", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "ion-title", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](6, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "ion-toolbar", 5)(8, "ion-row", 6)(9, "ion-label", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](11, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "ion-content", 8)(13, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](15, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](18, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](21, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](24, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](6, 6, "aboutus"));
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](11, 8, "about_sunlife"));
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](15, 10, "about-malaysia.am1"));
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](18, 12, "about-malaysia.am2"));
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](21, 14, "about-malaysia.am3"));
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](24, 16, "about-malaysia.am4"));
    }
  },
  dependencies: [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonBackButton, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonButtons, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonContent, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonHeader, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonLabel, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonRow, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonTitle, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonToolbar, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonBackButtonDelegate, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__.TranslatePipe],
  styles: [".subheader_bg[_ngcontent-%COMP%] {\n  background-color: var(--ion-color-secondary);\n  font-family: Agenda-Regular;\n  font-size: 1.8rem;\n  color: --ion-color-white !important;\n}\n\n.sub_title[_ngcontent-%COMP%] {\n  padding: 0px !important;\n}\n\n.sub-header[_ngcontent-%COMP%] {\n  color: #ffffff;\n  padding: 10px 25px !important;\n  margin: 0px !important;\n  font-size: 1.1rem !important;\n  font-family: Agenda-Regular;\n}\n\np[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcGFnZXMvc3VuLWxpZmUtbWFsYXlzaWEvc3VuLWxpZmUtbWFsYXlzaWEucGFnZS5zY3NzIiwid2VicGFjazovLy4vLi4vLi4vLi4vQWxsJTIwUHJvamVjdHMvTWFsYXlzaWFfQ2xpZW50QXBwX1JldmFtcC9TdW5BY2Nlc3NfSW9uaWM2X1JldmFtcC9zcmMvYXBwL3BhZ2VzL3N1bi1saWZlLW1hbGF5c2lhL3N1bi1saWZlLW1hbGF5c2lhLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLDRDQUFBO0VBQ0EsMkJBQUE7RUFDQSxpQkFBQTtFQUNBLG1DQUFBO0FDQ0Y7O0FERUE7RUFDRSx1QkFBQTtBQ0NGOztBREdBO0VBQ0UsY0FBQTtFQUNBLDZCQUFBO0VBQ0Esc0JBQUE7RUFDQSw0QkFBQTtFQUNBLDJCQUFBO0FDQUY7O0FESUE7RUFDRSxpQkFBQTtBQ0RGIiwic291cmNlc0NvbnRlbnQiOlsiLnN1YmhlYWRlcl9iZyB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXNlY29uZGFyeSk7XHJcbiAgZm9udC1mYW1pbHk6IEFnZW5kYS1SZWd1bGFyO1xyXG4gIGZvbnQtc2l6ZTogMS44cmVtO1xyXG4gIGNvbG9yOiAtLWlvbi1jb2xvci13aGl0ZSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uc3ViX3RpdGxlIHtcclxuICBwYWRkaW5nOiAwcHggIWltcG9ydGFudDtcclxuICAvL21pbi1oZWlnaHQ6IDEwMCUgIWltcG9ydGFudDtcclxufVxyXG5cclxuLnN1Yi1oZWFkZXIge1xyXG4gIGNvbG9yOiAjZmZmZmZmO1xyXG4gIHBhZGRpbmc6IDEwcHggMjVweCAhaW1wb3J0YW50O1xyXG4gIG1hcmdpbjogMHB4ICFpbXBvcnRhbnQ7XHJcbiAgZm9udC1zaXplOiAxLjFyZW0gIWltcG9ydGFudDtcclxuICBmb250LWZhbWlseTogQWdlbmRhLVJlZ3VsYXI7XHJcbiAgLy9saW5lLWhlaWdodDogMjRweDs7XHJcbn1cclxuXHJcbnAge1xyXG4gIGZvbnQtc2l6ZTogMC44cmVtO1xyXG59IiwiLnN1YmhlYWRlcl9iZyB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWlvbi1jb2xvci1zZWNvbmRhcnkpO1xuICBmb250LWZhbWlseTogQWdlbmRhLVJlZ3VsYXI7XG4gIGZvbnQtc2l6ZTogMS44cmVtO1xuICBjb2xvcjogLS1pb24tY29sb3Itd2hpdGUgIWltcG9ydGFudDtcbn1cblxuLnN1Yl90aXRsZSB7XG4gIHBhZGRpbmc6IDBweCAhaW1wb3J0YW50O1xufVxuXG4uc3ViLWhlYWRlciB7XG4gIGNvbG9yOiAjZmZmZmZmO1xuICBwYWRkaW5nOiAxMHB4IDI1cHggIWltcG9ydGFudDtcbiAgbWFyZ2luOiAwcHggIWltcG9ydGFudDtcbiAgZm9udC1zaXplOiAxLjFyZW0gIWltcG9ydGFudDtcbiAgZm9udC1mYW1pbHk6IEFnZW5kYS1SZWd1bGFyO1xufVxuXG5wIHtcbiAgZm9udC1zaXplOiAwLjhyZW07XG59Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ })

}]);
//# sourceMappingURL=src_app_pages_sun-life-malaysia_sun-life-malaysia_module_ts.js.map