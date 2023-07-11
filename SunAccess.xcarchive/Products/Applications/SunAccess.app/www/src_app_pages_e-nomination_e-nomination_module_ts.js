"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_e-nomination_e-nomination_module_ts"],{

/***/ 84271:
/*!*******************************************************************!*\
  !*** ./src/app/pages/e-nomination/e-nomination-routing.module.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ENominationPageRoutingModule": () => (/* binding */ ENominationPageRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _e_nomination_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./e-nomination.page */ 60250);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);




const routes = [{
  path: '',
  component: _e_nomination_page__WEBPACK_IMPORTED_MODULE_0__.ENominationPage
}];
class ENominationPageRoutingModule {}
ENominationPageRoutingModule.ɵfac = function ENominationPageRoutingModule_Factory(t) {
  return new (t || ENominationPageRoutingModule)();
};
ENominationPageRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
  type: ENominationPageRoutingModule
});
ENominationPageRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](ENominationPageRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
})();

/***/ }),

/***/ 29185:
/*!***********************************************************!*\
  !*** ./src/app/pages/e-nomination/e-nomination.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ENominationPageModule": () => (/* binding */ ENominationPageModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _e_nomination_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./e-nomination-routing.module */ 84271);
/* harmony import */ var _e_nomination_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./e-nomination.page */ 60250);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);






class ENominationPageModule {}
ENominationPageModule.ɵfac = function ENominationPageModule_Factory(t) {
  return new (t || ENominationPageModule)();
};
ENominationPageModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
  type: ENominationPageModule
});
ENominationPageModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule, _e_nomination_routing_module__WEBPACK_IMPORTED_MODULE_0__.ENominationPageRoutingModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](ENominationPageModule, {
    declarations: [_e_nomination_page__WEBPACK_IMPORTED_MODULE_1__.ENominationPage],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule, _e_nomination_routing_module__WEBPACK_IMPORTED_MODULE_0__.ENominationPageRoutingModule]
  });
})();

/***/ }),

/***/ 60250:
/*!*********************************************************!*\
  !*** ./src/app/pages/e-nomination/e-nomination.page.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ENominationPage": () => (/* binding */ ENominationPage)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var src_providers_logger_service_logger_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/providers/logger-service/logger-service */ 9999);
/* harmony import */ var src_providers_utils_utils_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/providers/utils/utils.service */ 30423);
/* harmony import */ var _eNominationService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./eNominationService */ 8401);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ 38699);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 93819);






class ENominationPage {
  constructor(logger, utils, geteNominationService, translate) {
    this.logger = logger;
    this.utils = utils;
    this.geteNominationService = geteNominationService;
    this.translate = translate;
    this.canTryAgain = false;
    // ionViewDidLoad() {
    //   console.log('ionViewDidLoad ENominationPage');
    //    //this.getENominationlink();
    // }
    this.getENominationlink = function () {
      if (this.utils.isDeviceOnLine()) {
        this.canTryAgain = false;
        this.utils.showProgressLoader();
        this.errorMsg = "";
        this.logger.trace("get getEnominationPath--start");
        this.geteNominationService.getEnominationPath().then(result => {
          try {
            this.eNominationLink = result['responseJSON'].url;
            this.utils.openLink(this.eNominationLink);
            this.utils.dissmisProgressLoader();
          } catch (e) {
            this.utils.dissmisProgressLoader();
            this.canTryAgain = true;
            this.errorMsg = this.translate.instant('generic_msgs.server_err');
          }
        }, err => {
          this.utils.dissmisProgressLoader();
          this.canTryAgain = true;
          this.errorMsg = this.utils.handleServiceException(err);
        });
      } else {
        this.utils.dissmisProgressLoader();
        this.canTryAgain = true;
        this.errorMsg = this.translate.instant('generic_msgs.network_err');
      }
    };
    this.utils.analytics("ENominationPage");
  }
  ngOnInit() {
    this.getENominationlink();
  }
}
ENominationPage.ɵfac = function ENominationPage_Factory(t) {
  return new (t || ENominationPage)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_providers_logger_service_logger_service__WEBPACK_IMPORTED_MODULE_0__.LoggerServiceProvider), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_providers_utils_utils_service__WEBPACK_IMPORTED_MODULE_1__.UtilService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_eNominationService__WEBPACK_IMPORTED_MODULE_2__.eNominationService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__.TranslateService));
};
ENominationPage.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
  type: ENominationPage,
  selectors: [["app-e-nomination"]],
  decls: 6,
  vars: 0,
  consts: [["mode", "ios"], ["color", "primary", 1, "toolbar"], ["slot", "start", "auto-hide", "false", "color", "secondary"]],
  template: function ENominationPage_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "ion-header", 0)(1, "ion-toolbar", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "ion-menu-button", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "ion-title");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, "e-nomination ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](5, "ion-content");
    }
  },
  dependencies: [_ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonContent, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonHeader, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonMenuButton, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonTitle, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonToolbar],
  styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ })

}]);
//# sourceMappingURL=src_app_pages_e-nomination_e-nomination_module_ts.js.map