"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_nominations_nominations_module_ts"],{

/***/ 74592:
/*!*****************************************************************!*\
  !*** ./src/app/pages/nominations/nominations-routing.module.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NominationsPageRoutingModule": () => (/* binding */ NominationsPageRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _nominations_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./nominations.page */ 80941);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);




const routes = [{
  path: '',
  component: _nominations_page__WEBPACK_IMPORTED_MODULE_0__.NominationsPage
}];
class NominationsPageRoutingModule {}
NominationsPageRoutingModule.ɵfac = function NominationsPageRoutingModule_Factory(t) {
  return new (t || NominationsPageRoutingModule)();
};
NominationsPageRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
  type: NominationsPageRoutingModule
});
NominationsPageRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](NominationsPageRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
})();

/***/ }),

/***/ 62442:
/*!*********************************************************!*\
  !*** ./src/app/pages/nominations/nominations.module.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NominationsPageModule": () => (/* binding */ NominationsPageModule)
/* harmony export */ });
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ 38699);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _nominations_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./nominations-routing.module */ 74592);
/* harmony import */ var _nominations_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./nominations.page */ 80941);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);







class NominationsPageModule {}
NominationsPageModule.ɵfac = function NominationsPageModule_Factory(t) {
  return new (t || NominationsPageModule)();
};
NominationsPageModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
  type: NominationsPageModule
});
NominationsPageModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__.TranslateModule, _nominations_routing_module__WEBPACK_IMPORTED_MODULE_0__.NominationsPageRoutingModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](NominationsPageModule, {
    declarations: [_nominations_page__WEBPACK_IMPORTED_MODULE_1__.NominationsPage],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__.TranslateModule, _nominations_routing_module__WEBPACK_IMPORTED_MODULE_0__.NominationsPageRoutingModule]
  });
})();

/***/ }),

/***/ 80941:
/*!*******************************************************!*\
  !*** ./src/app/pages/nominations/nominations.page.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NominationsPage": () => (/* binding */ NominationsPage)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var src_app_services_translate_config_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/translate-config.service */ 45340);
/* harmony import */ var src_providers_utils_utils_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/providers/utils/utils.service */ 30423);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ 38699);
/* harmony import */ var src_providers_utils_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/providers/utils/config */ 43485);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 93819);







function NominationsPage_section_12_Template(rf, ctx) {
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
function NominationsPage_div_13_section_2_ion_label_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "ion-label", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const data_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](data_r3.name);
  }
}
function NominationsPage_div_13_section_2_ion_label_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "ion-label");
  }
}
function NominationsPage_div_13_section_2_ion_label_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "ion-label", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const data_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](data_r3.relationship);
  }
}
function NominationsPage_div_13_section_2_ion_label_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "ion-label");
  }
}
function NominationsPage_div_13_section_2_ion_label_23_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "ion-label", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const data_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](data_r3.emailId);
  }
}
function NominationsPage_div_13_section_2_ion_label_24_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "ion-label");
  }
}
const _c0 = function (a0, a1) {
  return {
    "bg-conventional": a0,
    "bg-takaful": a1
  };
};
function NominationsPage_div_13_section_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "section", 14)(1, "ion-row")(2, "div", 15)(3, "ion-label", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](7, NominationsPage_div_13_section_2_ion_label_7_Template, 2, 1, "ion-label", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](8, NominationsPage_div_13_section_2_ion_label_8_Template, 1, 0, "ion-label", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "ion-row")(10, "div", 15)(11, "ion-label", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](13, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](15, NominationsPage_div_13_section_2_ion_label_15_Template, 2, 1, "ion-label", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](16, NominationsPage_div_13_section_2_ion_label_16_Template, 1, 0, "ion-label", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "ion-row")(18, "div", 15)(19, "ion-label", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](21, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](22, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](23, NominationsPage_div_13_section_2_ion_label_23_Template, 2, 1, "ion-label", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](24, NominationsPage_div_13_section_2_ion_label_24_Template, 1, 0, "ion-label", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const data_r3 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction2"](18, _c0, ctx_r2.planType === "Conventional", ctx_r2.planType !== "Conventional"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](5, 12, "nominations.nominee"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", data_r3.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !data_r3.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction2"](21, _c0, ctx_r2.planType === "Conventional", ctx_r2.planType !== "Conventional"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](13, 14, "nominations.relationship"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", data_r3.telephoneNumber);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !data_r3.telephoneNumber);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction2"](24, _c0, ctx_r2.planType === "Conventional", ctx_r2.planType !== "Conventional"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](21, 16, "agent_details.email"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", data_r3.emailId);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !data_r3.emailId);
  }
}
function NominationsPage_div_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div")(1, "ion-list", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, NominationsPage_div_13_section_2_Template, 25, 27, "section", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r1.nominationsData);
  }
}
class NominationsPage {
  constructor(translateConfigService, utils, translate, config) {
    this.translateConfigService = translateConfigService;
    this.utils = utils;
    this.translate = translate;
    this.config = config;
    this.policyData = [];
    this.nominationsData = [];
    this.selectedLanguage = this.translateConfigService.getDefaultLanguage();
    this.translateConfigService.setLanguage('en');
    this.config.currentPage.pageName = "NominationsPage";
    this.policyData = history.state.policyDetailsData;
    this.nominationsData = this.policyData['nominations'];
    this.planType = history.state.planType;
    this.policyNo = history.state.policyNo;
    this.planName = this.policyData.planDescription.plan;
    this.utils.analytics("Nominations");
    this.errorMsg = this.translate.instant('generic_msgs.no_data');
  }
}
NominationsPage.ɵfac = function NominationsPage_Factory(t) {
  return new (t || NominationsPage)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_services_translate_config_service__WEBPACK_IMPORTED_MODULE_0__.TranslateConfigService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_providers_utils_utils_service__WEBPACK_IMPORTED_MODULE_1__.UtilService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__.TranslateService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_providers_utils_config__WEBPACK_IMPORTED_MODULE_2__.ConfigProvider));
};
NominationsPage.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
  type: NominationsPage,
  selectors: [["app-nominations"]],
  decls: 14,
  vars: 10,
  consts: [["mode", "ios"], ["color", "primary", 2, "border-bottom", "3px solid white"], ["slot", "start"], ["text", "", "icon", "chevron-back-outline", 2, "padding-left", "15px", "font-size", "0.7rem"], [1, "bold-font"], ["color", "primary", 1, "tabs"], [2, "margin-bottom", "5px", 3, "ngClass"], [1, "sub-header"], [1, "app_bg2", "ion-padding"], ["class", "errorMsgSection white_container_border_radius", 4, "ngIf"], [4, "ngIf"], [1, "errorMsgSection", "white_container_border_radius"], [1, "white_container_border_radius", "ion-padding"], ["class", "margin_top_bottom_auto", 4, "ngFor", "ngForOf"], [1, "margin_top_bottom_auto"], [1, "header_txt", 3, "ngClass"], [1, "label"], [1, "text_color_base"], ["style", "padding-left:15px;", 4, "ngIf"], [2, "padding-left", "15px"]],
  template: function NominationsPage_Template(rf, ctx) {
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
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](12, NominationsPage_section_12_Template, 3, 1, "section", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](13, NominationsPage_div_13_Template, 3, 1, "div", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx.policyNo);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction2"](7, _c0, ctx.planType === "Conventional", ctx.planType !== "Conventional"));
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](10, 5, "nominations.title"));
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !(ctx.nominationsData.length > 0));
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.nominationsData.length > 0);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonBackButton, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonButtons, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonContent, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonHeader, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonLabel, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonList, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonRow, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonTitle, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonToolbar, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonBackButtonDelegate, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__.TranslatePipe],
  styles: [".white_container_border_radius[_ngcontent-%COMP%] {\n  padding: 15px;\n}\n\n.app_bg2[_ngcontent-%COMP%] {\n  --background: url('app_bg_2.jpg') no-repeat center center / cover;\n  background-size: cover;\n  background-repeat: no-repeat;\n  height: 100%;\n  background-position: bottom;\n}\n\n.sub-header[_ngcontent-%COMP%] {\n  color: #ffffff;\n  padding: 10px 25px !important;\n  margin: 0px !important;\n  font-size: 1.1rem !important;\n  font-family: Agenda-Regular;\n}\n\n.tabs[_ngcontent-%COMP%] {\n  border-top: 3px solid color white;\n  --padding-top: -4px;\n  --padding-start: -4px;\n  --padding-end: -4px;\n  --min-height: 44px;\n}\n\n.white_container_border_radius[_ngcontent-%COMP%] {\n  padding: 15px;\n}\n\n.header_txt[_ngcontent-%COMP%] {\n  background: #002d3d;\n  color: white !important;\n  font-family: Agenda-Semibold;\n  width: 100%;\n}\n\n.label[_ngcontent-%COMP%] {\n  margin: 0px;\n  font-size: 1rem;\n  line-height: 40px;\n  font-weight: 400;\n  padding: 10px 0px 10px 15px;\n  width: 100%;\n  font-family: Agenda-Regular;\n}\n\n.text_color_base[_ngcontent-%COMP%] {\n  margin-top: 5px;\n}\n\n.errorMsgSection[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  height: 98%;\n  font-size: 0.8rem;\n  color: #494747 !important;\n  padding: 0px 15px;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcGFnZXMvbm9taW5hdGlvbnMvbm9taW5hdGlvbnMucGFnZS5zY3NzIiwid2VicGFjazovLy4vLi4vLi4vLi4vQWxsJTIwUHJvamVjdHMvTWFsYXlzaWFfQ2xpZW50QXBwX1JldmFtcC9TdW5BY2Nlc3NfSW9uaWM2X1JldmFtcC9zcmMvYXBwL3BhZ2VzL25vbWluYXRpb25zL25vbWluYXRpb25zLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUEyQkE7RUFDRSxhQUFBO0FDMUJGOztBRDRDQTtFQUNFLGlFQUFBO0VBQ0Esc0JBQUE7RUFDQSw0QkFBQTtFQUNBLFlBQUE7RUFDQSwyQkFBQTtBQ3pDRjs7QUQyQ0E7RUFDRSxjQUFBO0VBRUEsNkJBQUE7RUFDQSxzQkFBQTtFQUNBLDRCQUFBO0VBQ0EsMkJBQUE7QUN6Q0Y7O0FENENBO0VBQ0UsaUNBQUE7RUFDRSxtQkFBQTtFQUNBLHFCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBQ3pDSjs7QUQyQ0E7RUFDRSxhQUFBO0FDeENGOztBRDBDQTtFQUNFLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSw0QkFBQTtFQUNBLFdBQUE7QUN2Q0Y7O0FEeUNBO0VBQ0UsV0FBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsMkJBQUE7RUFDQSxXQUFBO0VBQ0EsMkJBQUE7QUN0Q0Y7O0FEd0NBO0VBQ0csZUFBQTtBQ3JDSDs7QUR1Q0E7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0VBQ0EseUJBQUE7RUFDQSxpQkFBQTtBQ3BDRiIsInNvdXJjZXNDb250ZW50IjpbIi8vIC5hcHBfYmcyIHtcclxuLy8gICAtLWJhY2tncm91bmQ6IHVybCguLi8uLi8uLi9hc3NldHMvaW1ncy9hcHBfYmdfMi5qcGcpIG5vLXJlcGVhdCBjZW50ZXIgY2VudGVyIC8gY292ZXI7XHJcbi8vICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuLy8gICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4vLyAgIGhlaWdodDogMTAwJTtcclxuLy8gICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBib3R0b207XHJcbi8vIH1cclxuLy8gaW9uLXJvd3tcclxuLy8gICBiYWNrZ3JvdW5kOiAjMDAyZDNkO1xyXG4vLyAgIG1hcmdpbi1ib3R0b206IDVweDtcclxuLy8gfVxyXG4vLyAuc3ViLWhlYWRlciB7XHJcbi8vICAgY29sb3I6ICNmZmZmZmY7XHJcblxyXG4vLyAgIHBhZGRpbmc6IDEwcHggMjVweCAhaW1wb3J0YW50O1xyXG4vLyAgIG1hcmdpbjogMHB4ICFpbXBvcnRhbnQ7XHJcbi8vICAgZm9udC1zaXplOiAxLjFyZW0gIWltcG9ydGFudDtcclxuLy8gICBmb250LWZhbWlseTogQWdlbmRhLVJlZ3VsYXI7XHJcbi8vICAgLy9saW5lLWhlaWdodDogMjRweDs7XHJcbi8vIH1cclxuLy8gLnRhYnN7XHJcbi8vICAgYm9yZGVyLXRvcDogM3B4IHNvbGlkIGNvbG9yIHdoaXRlO1xyXG4vLyAgICAgLS1wYWRkaW5nLXRvcDogLTRweDtcclxuLy8gICAgIC0tcGFkZGluZy1zdGFydDogLTRweDtcclxuLy8gICAgIC0tcGFkZGluZy1lbmQ6IC00cHg7XHJcbi8vICAgICAtLW1pbi1oZWlnaHQ6IDQ0cHg7XHJcbi8vIH1cclxuLndoaXRlX2NvbnRhaW5lcl9ib3JkZXJfcmFkaXVze1xyXG4gIHBhZGRpbmc6IDE1cHg7XHJcbn1cclxuLy8gLmhlYWRlcl90eHR7XHJcbi8vICAgYmFja2dyb3VuZDojMDAyZDNkO1xyXG4vLyAgIGNvbG9yOiB3aGl0ZSFpbXBvcnRhbnQ7XHJcbi8vICAgZm9udC1mYW1pbHk6IEFnZW5kYS1TZW1pYm9sZDtcclxuLy8gICB3aWR0aDogMTAwJVxyXG4vLyB9XHJcbi8vIC5sYWJlbHtcclxuLy8gICBtYXJnaW46MHB4O1xyXG4vLyAgIGZvbnQtc2l6ZTogMS4wcmVtO1xyXG4vLyAgIC8vbGluZS1oZWlnaHQ6IDQwcHg7XHJcbi8vICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuLy8gICBwYWRkaW5nOiAxMHB4IDBweCAxMHB4IDE1cHg7XHJcbi8vICAgd2lkdGg6MTAwJTtcclxuLy8gICBmb250LWZhbWlseTogQWdlbmRhLVJlZ3VsYXI7XHJcbi8vIH1cclxuXHJcbi5hcHBfYmcyIHtcclxuICAtLWJhY2tncm91bmQ6IHVybCguLi8uLi8uLi9hc3NldHMvaW1ncy9hcHBfYmdfMi5qcGcpIG5vLXJlcGVhdCBjZW50ZXIgY2VudGVyIC8gY292ZXI7XHJcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBib3R0b207XHJcbn1cclxuLnN1Yi1oZWFkZXIge1xyXG4gIGNvbG9yOiAjZmZmZmZmO1xyXG5cclxuICBwYWRkaW5nOiAxMHB4IDI1cHggIWltcG9ydGFudDtcclxuICBtYXJnaW46IDBweCAhaW1wb3J0YW50O1xyXG4gIGZvbnQtc2l6ZTogMS4xcmVtICFpbXBvcnRhbnQ7XHJcbiAgZm9udC1mYW1pbHk6IEFnZW5kYS1SZWd1bGFyO1xyXG4gIC8vbGluZS1oZWlnaHQ6IDI0cHg7O1xyXG59XHJcbi50YWJze1xyXG4gIGJvcmRlci10b3A6IDNweCBzb2xpZCBjb2xvciB3aGl0ZTtcclxuICAgIC0tcGFkZGluZy10b3A6IC00cHg7XHJcbiAgICAtLXBhZGRpbmctc3RhcnQ6IC00cHg7XHJcbiAgICAtLXBhZGRpbmctZW5kOiAtNHB4O1xyXG4gICAgLS1taW4taGVpZ2h0OiA0NHB4O1xyXG59XHJcbi53aGl0ZV9jb250YWluZXJfYm9yZGVyX3JhZGl1c3tcclxuICBwYWRkaW5nOiAxNXB4O1xyXG59XHJcbi5oZWFkZXJfdHh0e1xyXG4gIGJhY2tncm91bmQ6IzAwMmQzZDtcclxuICBjb2xvcjogd2hpdGUhaW1wb3J0YW50O1xyXG4gIGZvbnQtZmFtaWx5OiBBZ2VuZGEtU2VtaWJvbGQ7XHJcbiAgd2lkdGg6IDEwMCVcclxufVxyXG4ubGFiZWx7XHJcbiAgbWFyZ2luOjBweDtcclxuICBmb250LXNpemU6IDEuMHJlbTtcclxuICBsaW5lLWhlaWdodDogNDBweDtcclxuICBmb250LXdlaWdodDogNDAwO1xyXG4gIHBhZGRpbmc6IDEwcHggMHB4IDEwcHggMTVweDtcclxuICB3aWR0aDoxMDAlO1xyXG4gIGZvbnQtZmFtaWx5OiBBZ2VuZGEtUmVndWxhcjtcclxufVxyXG4udGV4dF9jb2xvcl9iYXNle1xyXG4gICBtYXJnaW4tdG9wOiA1cHg7XHJcbn1cclxuLmVycm9yTXNnU2VjdGlvbiB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgaGVpZ2h0OiA5OCU7XHJcbiAgZm9udC1zaXplOiAwLjhyZW07XHJcbiAgY29sb3I6ICM0OTQ3NDcgIWltcG9ydGFudDtcclxuICBwYWRkaW5nOiAwcHggMTVweDtcclxufVxyXG5cclxuXHJcblxyXG4iLCIud2hpdGVfY29udGFpbmVyX2JvcmRlcl9yYWRpdXMge1xuICBwYWRkaW5nOiAxNXB4O1xufVxuXG4uYXBwX2JnMiB7XG4gIC0tYmFja2dyb3VuZDogdXJsKC4uLy4uLy4uL2Fzc2V0cy9pbWdzL2FwcF9iZ18yLmpwZykgbm8tcmVwZWF0IGNlbnRlciBjZW50ZXIgLyBjb3ZlcjtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgaGVpZ2h0OiAxMDAlO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBib3R0b207XG59XG5cbi5zdWItaGVhZGVyIHtcbiAgY29sb3I6ICNmZmZmZmY7XG4gIHBhZGRpbmc6IDEwcHggMjVweCAhaW1wb3J0YW50O1xuICBtYXJnaW46IDBweCAhaW1wb3J0YW50O1xuICBmb250LXNpemU6IDEuMXJlbSAhaW1wb3J0YW50O1xuICBmb250LWZhbWlseTogQWdlbmRhLVJlZ3VsYXI7XG59XG5cbi50YWJzIHtcbiAgYm9yZGVyLXRvcDogM3B4IHNvbGlkIGNvbG9yIHdoaXRlO1xuICAtLXBhZGRpbmctdG9wOiAtNHB4O1xuICAtLXBhZGRpbmctc3RhcnQ6IC00cHg7XG4gIC0tcGFkZGluZy1lbmQ6IC00cHg7XG4gIC0tbWluLWhlaWdodDogNDRweDtcbn1cblxuLndoaXRlX2NvbnRhaW5lcl9ib3JkZXJfcmFkaXVzIHtcbiAgcGFkZGluZzogMTVweDtcbn1cblxuLmhlYWRlcl90eHQge1xuICBiYWNrZ3JvdW5kOiAjMDAyZDNkO1xuICBjb2xvcjogd2hpdGUgIWltcG9ydGFudDtcbiAgZm9udC1mYW1pbHk6IEFnZW5kYS1TZW1pYm9sZDtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5sYWJlbCB7XG4gIG1hcmdpbjogMHB4O1xuICBmb250LXNpemU6IDFyZW07XG4gIGxpbmUtaGVpZ2h0OiA0MHB4O1xuICBmb250LXdlaWdodDogNDAwO1xuICBwYWRkaW5nOiAxMHB4IDBweCAxMHB4IDE1cHg7XG4gIHdpZHRoOiAxMDAlO1xuICBmb250LWZhbWlseTogQWdlbmRhLVJlZ3VsYXI7XG59XG5cbi50ZXh0X2NvbG9yX2Jhc2Uge1xuICBtYXJnaW4tdG9wOiA1cHg7XG59XG5cbi5lcnJvck1zZ1NlY3Rpb24ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgaGVpZ2h0OiA5OCU7XG4gIGZvbnQtc2l6ZTogMC44cmVtO1xuICBjb2xvcjogIzQ5NDc0NyAhaW1wb3J0YW50O1xuICBwYWRkaW5nOiAwcHggMTVweDtcbn0iXSwic291cmNlUm9vdCI6IiJ9 */"]
});

/***/ })

}]);
//# sourceMappingURL=src_app_pages_nominations_nominations_module_ts.js.map