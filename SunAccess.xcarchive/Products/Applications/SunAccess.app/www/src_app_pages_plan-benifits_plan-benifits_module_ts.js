"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_plan-benifits_plan-benifits_module_ts"],{

/***/ 62301:
/*!*********************************************************************!*\
  !*** ./src/app/pages/plan-benifits/plan-benifits-routing.module.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PlanBenifitsPageRoutingModule": () => (/* binding */ PlanBenifitsPageRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _plan_benifits_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./plan-benifits.page */ 7977);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);




const routes = [{
  path: '',
  component: _plan_benifits_page__WEBPACK_IMPORTED_MODULE_0__.PlanBenifitsPage
}];
class PlanBenifitsPageRoutingModule {}
PlanBenifitsPageRoutingModule.ɵfac = function PlanBenifitsPageRoutingModule_Factory(t) {
  return new (t || PlanBenifitsPageRoutingModule)();
};
PlanBenifitsPageRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
  type: PlanBenifitsPageRoutingModule
});
PlanBenifitsPageRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](PlanBenifitsPageRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
})();

/***/ }),

/***/ 63114:
/*!*************************************************************!*\
  !*** ./src/app/pages/plan-benifits/plan-benifits.module.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PlanBenifitsPageModule": () => (/* binding */ PlanBenifitsPageModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _plan_benifits_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./plan-benifits-routing.module */ 62301);
/* harmony import */ var _plan_benifits_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./plan-benifits.page */ 7977);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ 38699);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);







class PlanBenifitsPageModule {}
PlanBenifitsPageModule.ɵfac = function PlanBenifitsPageModule_Factory(t) {
  return new (t || PlanBenifitsPageModule)();
};
PlanBenifitsPageModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
  type: PlanBenifitsPageModule
});
PlanBenifitsPageModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__.TranslateModule, _plan_benifits_routing_module__WEBPACK_IMPORTED_MODULE_0__.PlanBenifitsPageRoutingModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](PlanBenifitsPageModule, {
    declarations: [_plan_benifits_page__WEBPACK_IMPORTED_MODULE_1__.PlanBenifitsPage],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__.TranslateModule, _plan_benifits_routing_module__WEBPACK_IMPORTED_MODULE_0__.PlanBenifitsPageRoutingModule]
  });
})();

/***/ }),

/***/ 7977:
/*!***********************************************************!*\
  !*** ./src/app/pages/plan-benifits/plan-benifits.page.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PlanBenifitsPage": () => (/* binding */ PlanBenifitsPage)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var src_app_services_translate_config_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/translate-config.service */ 45340);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ 38699);
/* harmony import */ var src_providers_utils_utils_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/providers/utils/utils.service */ 30423);
/* harmony import */ var src_providers_utils_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/providers/utils/config */ 43485);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 93819);







function PlanBenifitsPage_section_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "section", 11)(1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r0.errorMsg);
  }
}
function PlanBenifitsPage_div_13_ion_row_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "ion-row", 14)(1, "ion-col", 15)(2, "p", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "ion-row", 17)(6, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "ion-col", 15)(9, "p", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](11, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "p", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "p", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](16, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "p", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](19, "p", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](21, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](22, "p", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](23);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](24, "p", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](25);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](26, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](27, "p", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](28);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const data_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](4, 10, "plan_benefits.coverage"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](data_r3.plan);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](11, 12, "plan_benefits.lifeassured"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](data_r3.lifeAssured);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](16, 14, "plan_benefits.Sumassuerd"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](data_r3.sumAssured);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](21, 16, "plan_benefits.date"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](data_r3.commencementDate);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](26, 18, "plan_benefits.Status"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](data_r3.status);
  }
}
function PlanBenifitsPage_div_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div")(1, "ion-list", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, PlanBenifitsPage_div_13_ion_row_2_Template, 29, 20, "ion-row", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r1.benefitsData);
  }
}
const _c0 = function (a0, a1) {
  return {
    "bg-conventional": a0,
    "bg-takaful": a1
  };
};
class PlanBenifitsPage {
  constructor(translateConfigService, translate, utils, config) {
    this.translateConfigService = translateConfigService;
    this.translate = translate;
    this.utils = utils;
    this.config = config;
    this.selectedLanguage = this.translateConfigService.getDefaultLanguage();
    this.translateConfigService.setLanguage('en');
    this.policyData = history.state.policyDetailsData;
    this.benefitsData = this.policyData['benefits'];
    this.planType = history.state.planType;
    this.policyNo = history.state.policyNo;
    this.planName = this.policyData.planDescription.plan;
    this.utils.analytics("planBenifits");
    this.errorMsg = this.translate.instant('generic_msgs.no_data');
    this.config.currentPage.pageName = "PlanBenifitsPage";
  }
}
PlanBenifitsPage.ɵfac = function PlanBenifitsPage_Factory(t) {
  return new (t || PlanBenifitsPage)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_services_translate_config_service__WEBPACK_IMPORTED_MODULE_0__.TranslateConfigService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__.TranslateService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_providers_utils_utils_service__WEBPACK_IMPORTED_MODULE_1__.UtilService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_providers_utils_config__WEBPACK_IMPORTED_MODULE_2__.ConfigProvider));
};
PlanBenifitsPage.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
  type: PlanBenifitsPage,
  selectors: [["app-plan-benifits"]],
  decls: 14,
  vars: 10,
  consts: [["mode", "ios"], ["color", "primary", 2, "border-bottom", "3px solid white"], ["slot", "start"], ["text", "", "icon", "chevron-back-outline", 2, "padding-left", "15px", "font-size", "0.7rem"], [1, "bold-font"], ["color", "primary", 1, "tabs"], [2, "margin-bottom", "5px", 3, "ngClass"], [1, "sub-header"], [1, "app_bg2", "ion-padding"], ["class", "errorMsgSection white_container_border_radius", 4, "ngIf"], [4, "ngIf"], [1, "errorMsgSection", "white_container_border_radius"], [1, "white_container_border_radius", "text_color_base"], ["class", "margin_top_bottom_auto ion-padding", 4, "ngFor", "ngForOf"], [1, "margin_top_bottom_auto", "ion-padding"], ["size", "6"], [1, "lbl-header"], [1, "lbl-content"]],
  template: function PlanBenifitsPage_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "ion-header", 0)(1, "ion-toolbar", 1)(2, "ion-buttons", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "ion-back-button", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "ion-title", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "ion-toolbar", 5)(7, "ion-row", 6)(8, "ion-label", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](10, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "ion-content", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](12, PlanBenifitsPage_section_12_Template, 3, 1, "section", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](13, PlanBenifitsPage_div_13_Template, 3, 1, "div", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx.policyNo);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction2"](7, _c0, ctx.planType === "Conventional", ctx.planType !== "Conventional"));
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](10, 5, "plan_benefits.title"));
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !(ctx.benefitsData.length > 0));
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.benefitsData.length > 0);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonBackButton, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonButtons, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonCol, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonContent, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonHeader, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonLabel, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonList, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonRow, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonTitle, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonToolbar, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonBackButtonDelegate, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__.TranslatePipe],
  styles: [".app_bg2[_ngcontent-%COMP%] {\n  --background: url('app_bg_2.jpg') no-repeat center center / cover;\n  background-size: cover;\n  background-repeat: no-repeat;\n  height: 100%;\n  background-position: bottom;\n}\n\n.sub-header[_ngcontent-%COMP%] {\n  color: #ffffff;\n  padding: 10px 25px !important;\n  margin: 0px !important;\n  font-size: 1.1rem !important;\n  font-family: Agenda-Regular;\n}\n\n.tabs[_ngcontent-%COMP%] {\n  border-top: 3px solid color white;\n  --padding-top: -4px;\n  --padding-start: -4px;\n  --padding-end: -4px;\n  --min-height: 44px;\n}\n\n.white_container_border_radius[_ngcontent-%COMP%] {\n  border-radius: 15px !important;\n  padding: 15px;\n}\n\nion-row[_ngcontent-%COMP%] {\n  padding: 0;\n  border-bottom: 1px solid rgba(0, 45, 61, 0.3);\n}\n\nion-list[_ngcontent-%COMP%]   ion-row[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n}\n\np[_ngcontent-%COMP%] {\n  margin-top: 5px;\n  margin-bottom: 2px;\n}\n\n.div-padding[_ngcontent-%COMP%] {\n  padding: 15px 0;\n}\n\n.lbl-header[_ngcontent-%COMP%] {\n  padding: 0;\n  font-family: agenda-semibold;\n  color: --ion-color-secondary;\n  font-size: 1.1rem;\n  line-height: 24px;\n  margin: 0;\n  font-weight: 400;\n}\n\n.lbl-content[_ngcontent-%COMP%] {\n  padding: 0;\n  font-family: Agenda-Regular;\n  color: --ion-color-secondary;\n  font-size: 17px;\n  line-height: 24px;\n  margin: 0;\n  font-weight: 400;\n}\n\n@media only screen and (max-width: 374px) {\n  .lbl-header[_ngcontent-%COMP%], .lbl-content[_ngcontent-%COMP%] {\n    font-size: 1.4rem !important;\n  }\n}\n.col[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  width: 60% !important;\n}\n\n.col[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%] {\n  border-bottom: none !important;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcGFnZXMvcGxhbi1iZW5pZml0cy9wbGFuLWJlbmlmaXRzLnBhZ2Uuc2NzcyIsIndlYnBhY2s6Ly8uLy4uLy4uLy4uL0FsbCUyMFByb2plY3RzL01hbGF5c2lhX0NsaWVudEFwcF9SZXZhbXAvU3VuQWNjZXNzX0lvbmljNl9SZXZhbXAvc3JjL2FwcC9wYWdlcy9wbGFuLWJlbmlmaXRzL3BsYW4tYmVuaWZpdHMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsaUVBQUE7RUFDQSxzQkFBQTtFQUNBLDRCQUFBO0VBQ0EsWUFBQTtFQUNBLDJCQUFBO0FDQ0Y7O0FEQ0E7RUFDRSxjQUFBO0VBRUEsNkJBQUE7RUFDQSxzQkFBQTtFQUNBLDRCQUFBO0VBQ0EsMkJBQUE7QUNDRjs7QURFQTtFQUNFLGlDQUFBO0VBQ0UsbUJBQUE7RUFDQSxxQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUNDSjs7QURDQTtFQUNFLDhCQUFBO0VBQ0EsYUFBQTtBQ0VGOztBRENBO0VBQ0UsVUFBQTtFQUNBLDZDQUFBO0FDRUY7O0FER0E7RUFDRSxtQkFBQTtBQ0FGOztBREVBO0VBQ0ksZUFBQTtFQUNBLGtCQUFBO0FDQ0o7O0FEQ0E7RUFDRSxlQUFBO0FDRUY7O0FEQUE7RUFDRSxVQUFBO0VBQ0EsNEJBQUE7RUFDQSw0QkFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxTQUFBO0VBQ0EsZ0JBQUE7QUNHRjs7QURBQTtFQUNHLFVBQUE7RUFDQSwyQkFBQTtFQUNBLDRCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsU0FBQTtFQUNBLGdCQUFBO0FDR0g7O0FEREE7RUFDRTtJQUNJLDRCQUFBO0VDSUo7QUFDRjtBRERBO0VBQ0UscUJBQUE7QUNHRjs7QURBQTtFQUNFLDhCQUFBO0FDR0YiLCJzb3VyY2VzQ29udGVudCI6WyIuYXBwX2JnMiB7XHJcbiAgLS1iYWNrZ3JvdW5kOiB1cmwoLi4vLi4vLi4vYXNzZXRzL2ltZ3MvYXBwX2JnXzIuanBnKSBuby1yZXBlYXQgY2VudGVyIGNlbnRlciAvIGNvdmVyO1xyXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogYm90dG9tO1xyXG59XHJcbi5zdWItaGVhZGVyIHtcclxuICBjb2xvcjogI2ZmZmZmZjtcclxuXHJcbiAgcGFkZGluZzogMTBweCAyNXB4ICFpbXBvcnRhbnQ7XHJcbiAgbWFyZ2luOiAwcHggIWltcG9ydGFudDtcclxuICBmb250LXNpemU6IDEuMXJlbSAhaW1wb3J0YW50O1xyXG4gIGZvbnQtZmFtaWx5OiBBZ2VuZGEtUmVndWxhcjtcclxuICAvL2xpbmUtaGVpZ2h0OiAyNHB4OztcclxufVxyXG4udGFic3tcclxuICBib3JkZXItdG9wOiAzcHggc29saWQgY29sb3Igd2hpdGU7XHJcbiAgICAtLXBhZGRpbmctdG9wOiAtNHB4O1xyXG4gICAgLS1wYWRkaW5nLXN0YXJ0OiAtNHB4O1xyXG4gICAgLS1wYWRkaW5nLWVuZDogLTRweDtcclxuICAgIC0tbWluLWhlaWdodDogNDRweDtcclxufVxyXG4ud2hpdGVfY29udGFpbmVyX2JvcmRlcl9yYWRpdXN7XHJcbiAgYm9yZGVyLXJhZGl1czogMTVweCAhaW1wb3J0YW50O1xyXG4gIHBhZGRpbmc6IDE1cHg7XHJcbiAgLy9wYWRkaW5nLWxlZnQ6IDI1cHg7XHJcbn1cclxuaW9uLXJvdyB7XHJcbiAgcGFkZGluZzogMDtcclxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiYSgwLCA0NSwgNjEsIC4zKTtcclxuICAvL21hcmdpbi10b3A6IDVweDtcclxuXHJcbn1cclxuXHJcbmlvbi1saXN0IGlvbi1yb3c6bGFzdC1jaGlsZHtcclxuICBib3JkZXItYm90dG9tOiBub25lO1xyXG59XHJcbnB7XHJcbiAgICBtYXJnaW4tdG9wOiA1cHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAycHg7XHJcbn1cclxuLmRpdi1wYWRkaW5ne1xyXG4gIHBhZGRpbmc6IDE1cHggMDtcclxufVxyXG4ubGJsLWhlYWRlcntcclxuICBwYWRkaW5nOiAwO1xyXG4gIGZvbnQtZmFtaWx5OiBhZ2VuZGEtc2VtaWJvbGQ7XHJcbiAgY29sb3I6IC0taW9uLWNvbG9yLXNlY29uZGFyeTtcclxuICBmb250LXNpemU6IDEuMXJlbTtcclxuICBsaW5lLWhlaWdodDogMjRweDtcclxuICBtYXJnaW46IDA7XHJcbiAgZm9udC13ZWlnaHQ6IDQwMDtcclxufVxyXG5cclxuLmxibC1jb250ZW50e1xyXG4gICBwYWRkaW5nOiAwO1xyXG4gICBmb250LWZhbWlseTogQWdlbmRhLVJlZ3VsYXI7XHJcbiAgIGNvbG9yOiAtLWlvbi1jb2xvci1zZWNvbmRhcnk7XHJcbiAgIGZvbnQtc2l6ZTogMTdweDtcclxuICAgbGluZS1oZWlnaHQ6IDI0cHg7XHJcbiAgIG1hcmdpbjogMDtcclxuICAgZm9udC13ZWlnaHQ6IDQwMDtcclxufVxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDM3NHB4KSB7XHJcbiAgLmxibC1oZWFkZXIsIC5sYmwtY29udGVudHtcclxuICAgICAgZm9udC1zaXplOiAxLjRyZW0gIWltcG9ydGFudDtcclxuICB9XHJcbn1cclxuXHJcbi5jb2wgLnJvdyBwe1xyXG4gIHdpZHRoOiA2MCUgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmNvbCAucm93e1xyXG4gIGJvcmRlci1ib3R0b206bm9uZSAhaW1wb3J0YW50O1xyXG59XHJcbiIsIi5hcHBfYmcyIHtcbiAgLS1iYWNrZ3JvdW5kOiB1cmwoLi4vLi4vLi4vYXNzZXRzL2ltZ3MvYXBwX2JnXzIuanBnKSBuby1yZXBlYXQgY2VudGVyIGNlbnRlciAvIGNvdmVyO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGJvdHRvbTtcbn1cblxuLnN1Yi1oZWFkZXIge1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgcGFkZGluZzogMTBweCAyNXB4ICFpbXBvcnRhbnQ7XG4gIG1hcmdpbjogMHB4ICFpbXBvcnRhbnQ7XG4gIGZvbnQtc2l6ZTogMS4xcmVtICFpbXBvcnRhbnQ7XG4gIGZvbnQtZmFtaWx5OiBBZ2VuZGEtUmVndWxhcjtcbn1cblxuLnRhYnMge1xuICBib3JkZXItdG9wOiAzcHggc29saWQgY29sb3Igd2hpdGU7XG4gIC0tcGFkZGluZy10b3A6IC00cHg7XG4gIC0tcGFkZGluZy1zdGFydDogLTRweDtcbiAgLS1wYWRkaW5nLWVuZDogLTRweDtcbiAgLS1taW4taGVpZ2h0OiA0NHB4O1xufVxuXG4ud2hpdGVfY29udGFpbmVyX2JvcmRlcl9yYWRpdXMge1xuICBib3JkZXItcmFkaXVzOiAxNXB4ICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmc6IDE1cHg7XG59XG5cbmlvbi1yb3cge1xuICBwYWRkaW5nOiAwO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiYSgwLCA0NSwgNjEsIDAuMyk7XG59XG5cbmlvbi1saXN0IGlvbi1yb3c6bGFzdC1jaGlsZCB7XG4gIGJvcmRlci1ib3R0b206IG5vbmU7XG59XG5cbnAge1xuICBtYXJnaW4tdG9wOiA1cHg7XG4gIG1hcmdpbi1ib3R0b206IDJweDtcbn1cblxuLmRpdi1wYWRkaW5nIHtcbiAgcGFkZGluZzogMTVweCAwO1xufVxuXG4ubGJsLWhlYWRlciB7XG4gIHBhZGRpbmc6IDA7XG4gIGZvbnQtZmFtaWx5OiBhZ2VuZGEtc2VtaWJvbGQ7XG4gIGNvbG9yOiAtLWlvbi1jb2xvci1zZWNvbmRhcnk7XG4gIGZvbnQtc2l6ZTogMS4xcmVtO1xuICBsaW5lLWhlaWdodDogMjRweDtcbiAgbWFyZ2luOiAwO1xuICBmb250LXdlaWdodDogNDAwO1xufVxuXG4ubGJsLWNvbnRlbnQge1xuICBwYWRkaW5nOiAwO1xuICBmb250LWZhbWlseTogQWdlbmRhLVJlZ3VsYXI7XG4gIGNvbG9yOiAtLWlvbi1jb2xvci1zZWNvbmRhcnk7XG4gIGZvbnQtc2l6ZTogMTdweDtcbiAgbGluZS1oZWlnaHQ6IDI0cHg7XG4gIG1hcmdpbjogMDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAzNzRweCkge1xuICAubGJsLWhlYWRlciwgLmxibC1jb250ZW50IHtcbiAgICBmb250LXNpemU6IDEuNHJlbSAhaW1wb3J0YW50O1xuICB9XG59XG4uY29sIC5yb3cgcCB7XG4gIHdpZHRoOiA2MCUgIWltcG9ydGFudDtcbn1cblxuLmNvbCAucm93IHtcbiAgYm9yZGVyLWJvdHRvbTogbm9uZSAhaW1wb3J0YW50O1xufSJdLCJzb3VyY2VSb290IjoiIn0= */"]
});

/***/ })

}]);
//# sourceMappingURL=src_app_pages_plan-benifits_plan-benifits_module_ts.js.map