"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_service_service_module_ts"],{

/***/ 49145:
/*!*********************************************************!*\
  !*** ./src/app/pages/service/service-routing.module.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ServicePageRoutingModule": () => (/* binding */ ServicePageRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _service_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./service.page */ 63883);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);




const routes = [{
  path: '',
  component: _service_page__WEBPACK_IMPORTED_MODULE_0__.ServicePage
}];
class ServicePageRoutingModule {}
ServicePageRoutingModule.ɵfac = function ServicePageRoutingModule_Factory(t) {
  return new (t || ServicePageRoutingModule)();
};
ServicePageRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
  type: ServicePageRoutingModule
});
ServicePageRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](ServicePageRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
})();

/***/ }),

/***/ 5349:
/*!*************************************************!*\
  !*** ./src/app/pages/service/service.module.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ServicePageModule": () => (/* binding */ ServicePageModule)
/* harmony export */ });
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ 38699);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _service_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./service-routing.module */ 49145);
/* harmony import */ var _service_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./service.page */ 63883);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);







class ServicePageModule {}
ServicePageModule.ɵfac = function ServicePageModule_Factory(t) {
  return new (t || ServicePageModule)();
};
ServicePageModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
  type: ServicePageModule
});
ServicePageModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__.TranslateModule, _service_routing_module__WEBPACK_IMPORTED_MODULE_0__.ServicePageRoutingModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](ServicePageModule, {
    declarations: [_service_page__WEBPACK_IMPORTED_MODULE_1__.ServicePage],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__.TranslateModule, _service_routing_module__WEBPACK_IMPORTED_MODULE_0__.ServicePageRoutingModule]
  });
})();

/***/ }),

/***/ 63883:
/*!***********************************************!*\
  !*** ./src/app/pages/service/service.page.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ServicePage": () => (/* binding */ ServicePage)
/* harmony export */ });
/* harmony import */ var src_app_app_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/app.component */ 55041);
/* harmony import */ var src_providers_utils_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/providers/utils/config */ 43485);
/* harmony import */ var http_status_codes__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! http-status-codes */ 92788);
/* harmony import */ var intro_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! intro.js */ 49677);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _plan_listing_getPolicyListService__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../plan-listing/getPolicyListService */ 78785);
/* harmony import */ var _update_personal_details_updatePersonalDetailservice__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../update-personal-details/updatePersonalDetailservice */ 26475);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var src_providers_utils_utils_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/providers/utils/utils.service */ 30423);
/* harmony import */ var src_app_services_translate_config_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/translate-config.service */ 45340);
/* harmony import */ var src_providers_logger_service_logger_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/providers/logger-service/logger-service */ 9999);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ngx-translate/core */ 38699);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/platform-browser */ 34497);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common */ 94666);
















const _c0 = ["Content"];
function ServicePage_section_6_ion_list_2_ion_icon_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](0, "ion-icon", 15);
  }
}
function ServicePage_section_6_ion_list_2_ion_icon_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](0, "ion-icon", 16);
  }
}
function ServicePage_section_6_ion_list_2_div_6_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div")(1, "ion-row", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function ServicePage_section_6_ion_list_2_div_6_div_1_Template_ion_row_click_1_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r11);
      const serviceOptSub_r9 = restoredCtx.$implicit;
      const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](4);
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r10.navToUpdateService(serviceOptSub_r9.pageName));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](2, "ion-col", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](3, "i", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](4, "ion-col", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](5, "ion-label", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](6, "ion-col", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](7, "i", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const serviceOptSub_r9 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵclassMap"](serviceOptSub_r9.iconName);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("innerHTML", serviceOptSub_r9.title, _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsanitizeHtml"]);
  }
}
function ServicePage_section_6_ion_list_2_div_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](1, ServicePage_section_6_ion_list_2_div_6_div_1_Template, 8, 3, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const serviceOpt_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", serviceOpt_r3.subItems);
  }
}
function ServicePage_section_6_ion_list_2_div_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 17)(1, "ion-row", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](2, "ion-col", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](3, "ion-col", 21)(4, "ion-label", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](5, "Please click ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](6, "a", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function ServicePage_section_6_ion_list_2_div_7_Template_a_click_6_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r14);
      const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r13.goToClaim());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](7, "u");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](8, "here");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](9, " for the claim process.");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](10, "ion-col", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](11, "i", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
  }
}
function ServicePage_section_6_ion_list_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "ion-list")(1, "ion-row", 10)(2, "ion-item", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function ServicePage_section_6_ion_list_2_Template_ion_item_click_2_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r16);
      const serviceOpt_r3 = restoredCtx.$implicit;
      const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r15.expandItem(serviceOpt_r3, $event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](4, ServicePage_section_6_ion_list_2_ion_icon_4_Template, 1, 0, "ion-icon", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](5, ServicePage_section_6_ion_list_2_ion_icon_5_Template, 1, 0, "ion-icon", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](6, ServicePage_section_6_ion_list_2_div_6_Template, 2, 1, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](7, ServicePage_section_6_ion_list_2_div_7_Template, 12, 0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const serviceOpt_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"]("", serviceOpt_r3.title, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", !serviceOpt_r3.expanded);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", serviceOpt_r3.expanded);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", serviceOpt_r3.expanded && serviceOpt_r3.title !== "Claims" && serviceOpt_r3.name !== "Can not find a service?");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", serviceOpt_r3.expanded && serviceOpt_r3.title === "Claims");
  }
}
function ServicePage_section_6_ion_list_4_ion_icon_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](0, "ion-icon", 15);
  }
}
function ServicePage_section_6_ion_list_4_ion_icon_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](0, "ion-icon", 16);
  }
}
function ServicePage_section_6_ion_list_4_div_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 17)(1, "div")(2, "ion-row", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function ServicePage_section_6_ion_list_4_div_6_Template_ion_row_click_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r24);
      const serviceOptSecond_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]().$implicit;
      const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r22.navToUpdateService(serviceOptSecond_r17.subItems[0].pageName));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](3, "ion-col", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](4, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](5, "ion-col", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](6, "ion-label", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](7, "ion-col", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](8, "i", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](9, "ion-row", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function ServicePage_section_6_ion_list_4_div_6_Template_ion_row_click_9_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r24);
      const serviceOptSecond_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]().$implicit;
      const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r25.navToUpdateService(serviceOptSecond_r17.subItems[1].pageName));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](10, "ion-col", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](11, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](12, "ion-col", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](13, "ion-label", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](14, "ion-col", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](15, "i", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const serviceOptSecond_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵclassMap"](serviceOptSecond_r17.subItems[0].iconName);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("innerHTML", serviceOptSecond_r17.subItems[0].title, _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵclassMap"](serviceOptSecond_r17.subItems[1].iconName);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("innerHTML", serviceOptSecond_r17.subItems[1].title, _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsanitizeHtml"]);
  }
}
function ServicePage_section_6_ion_list_4_div_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r29 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 17)(1, "ion-row", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](2, "ion-col", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](3, "ion-col", 21)(4, "ion-label", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](5, "Check ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](6, "span", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function ServicePage_section_6_ion_list_4_div_7_Template_span_click_6_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r29);
      const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r28.goToClientCare());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](7, "here");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](8, " for physical submission process or Call us at ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](9, "a", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](10, "1300-88-5055");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](11, " or email ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](12, "a", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](13, "wecare@sunlifemalaysia.com");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](14, ".");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](15, "ion-col", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](16, "i", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
  }
}
function ServicePage_section_6_ion_list_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r31 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "ion-list", 29)(1, "ion-row", 10)(2, "ion-item", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function ServicePage_section_6_ion_list_4_Template_ion_item_click_2_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r31);
      const serviceOptSecond_r17 = restoredCtx.$implicit;
      const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r30.expandItemSecnd(serviceOptSecond_r17));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](4, ServicePage_section_6_ion_list_4_ion_icon_4_Template, 1, 0, "ion-icon", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](5, ServicePage_section_6_ion_list_4_ion_icon_5_Template, 1, 0, "ion-icon", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](6, ServicePage_section_6_ion_list_4_div_6_Template, 16, 6, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](7, ServicePage_section_6_ion_list_4_div_7_Template, 17, 0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const serviceOptSecond_r17 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", serviceOptSecond_r17.title, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", !serviceOptSecond_r17.expanded);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", serviceOptSecond_r17.expanded);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", serviceOptSecond_r17.expanded && serviceOptSecond_r17.title === "History");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", serviceOptSecond_r17.expanded && serviceOptSecond_r17.name === "Can not find a service?");
  }
}
function ServicePage_section_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "section", 6)(1, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](2, ServicePage_section_6_ion_list_2_Template, 8, 5, "ion-list", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](3, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](4, ServicePage_section_6_ion_list_4_Template, 8, 5, "ion-list", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", ctx_r0.policyServiceOptions);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", ctx_r0.policyServiceSecond);
  }
}
class ServicePage {
  constructor(policyListSrvc, UpdatePersonalService, router, utils, translateConfigService, logger, alertCtrl, config, translate, _DomSanitizer, menuCtrl) {
    this.policyListSrvc = policyListSrvc;
    this.UpdatePersonalService = UpdatePersonalService;
    this.router = router;
    this.utils = utils;
    this.translateConfigService = translateConfigService;
    this.logger = logger;
    this.alertCtrl = alertCtrl;
    this.config = config;
    this.translate = translate;
    this._DomSanitizer = _DomSanitizer;
    this.menuCtrl = menuCtrl;
    //isShowingLoader: boolean = false;
    this.policyServiceOptions = [{
      "title": "Update/change personal details",
      "subItems": [{
        "title": "Update Personal Details",
        "pageName": '/update-personal-details',
        "iconName": "fas fa-id-card font_size_20"
      }, {
        "title": "Update Card Details",
        "pageName": '/update-card',
        "iconName": "fas fa-credit-card font_size_20"
      }, {
        "title": "Update Payout Details",
        "pageName": '/update-payout-details',
        "iconName": "fas fa-wallet font_size_20"
      }]
    }, {
      "title": "Make a service request",
      "subItems": [{
        "title": "E-Nomination",
        "pageName": '/e-nomination',
        "iconName": "fas fa-file-signature font_size_20"
      }, {
        "title": "Fund Switching",
        "pageName": '/fund-switching',
        "iconName": "fas fa-exchange-alt font_size_20"
      }, {
        "title": "Partial withdrawal",
        "pageName": '/partial-withdrawl',
        "iconName": "fas fa-credit-card font_size_20"
      }, {
        "title": "Premium/Contribution redirection",
        "pageName": '/premium-redirection',
        "iconName": "fas fa-random font_size_20"
      }, {
        "title": "Reinstatement",
        "pageName": '/reinstatement',
        "iconName": "fas fa-scroll font_size_20"
      }, {
        "title": "Surrender / Cancellation",
        "pageName": '/surrender-cancel',
        "iconName": "fas fa-hand-holding-usd font_size_20"
      }, {
        "title": "Top-up",
        "pageName": '/top-up',
        "iconName": "fas fa-level-up-alt font_size_20"
      }, {
        "title": "Other Service Requests",
        "pageName": '/other-services',
        "iconName": "fas fa-plus-circle font_size_20"
      }]
    }, {
      "title": "Claims",
      "subItems": [{
        "title": "Please click " + ' <span class="claim-link" (click)="goToClaim()">here</span>' + " for the claim process.",
        "pageName": '/claims'
      }]
    }];
    this.policyServiceSecond = [{
      "title": "History",
      "subItems": [{
        "title": "Online Transactions History",
        "pageName": "/payment-history",
        "iconName": "fas fa-file-invoice-dollar font_size_20"
      }, {
        "title": "Service Request History",
        "pageName": "/service-history",
        "iconName": "fas fa-clipboard-check font_size_20"
      }]
    }, {
      "title": "Can't find a service?",
      "name": "Can not find a service?",
      "subItems": [{
        "title": "Check " + '<span class="clientCare-link" (click)="goToClientCare()">here</span>' + " for physical submission process or Call us at " + ' <a href="tel:1300-88-5055">1300-88-5055</a> ' + " or email " + '<a href="mailto:wecare@sunlifemalaysia.com" target="_blank">wecare@sunlifemalaysia.com</a>' + "."
      }]
    }];
    this.introJS = (0,intro_js__WEBPACK_IMPORTED_MODULE_2__["default"])();
    this.selectedLanguage = this.translateConfigService.getDefaultLanguage();
    this.translateConfigService.setLanguage('en');
    // sanitize(html) {
    //   return this._DomSanitizer.bypassSecurityTrustHtml(html) ;
    // }
    this.comingFromAppTour = history.state.comingFromAppTour;
    if (this.comingFromAppTour) {
      this.expandItemSecnd(this.policyServiceSecond[0]);
      setTimeout(() => {
        var intro = (0,intro_js__WEBPACK_IMPORTED_MODULE_2__["default"])();
        var menu = this.menuCtrl;
        var utils = this.utils;
        var policyServiceSecond = this.policyServiceSecond;
        var pageScope = this;
        intro.setOptions({
          doneLabel: 'Next',
          hidePrev: true,
          steps: [{
            element: document.querySelector('.dataServiceMenu1'),
            intro: "<h4>Submit service request</h4> <p>Update and make changes to your plan remotely. Click ‘Make a service request’ to view the available services.<p/>"
          }, {
            element: document.querySelector('.dataServiceMenu2'),
            intro: "<h4>Review your previous transactions</h4> <p>Track the history of your submitted service requests.<p/>"
          }]
        });
        intro.onexit(function () {
          if (this._currentStep == 0) {
            menu.open();
            utils.publishSomeData({
              'event': 'comingFromServiceAppTour',
              'data': true
            });
            // events.publish('user:comingFromServiceAppTour',true);
          }
        });

        intro.oncomplete(function () {
          menu.open();
          utils.publishSomeData({
            'event': 'comingFromServiceAppTour',
            'data': true
          });
          // events.publish('user:comingFromServiceAppTour',true);
        });

        intro.start();
      }, 500);
    }
  }
  ngOnInit() {
    this.utils.showProgressLoader();
    this.getPolicyList();
    //this.getAlterationPDFPath();
  }

  ionViewDidLoad() {
    this.logger.log('ionViewDidLoad PolicyServicingPage');
  }
  /**
  * In this method we are updating the sidemenu title
  */
  ionViewWillEnter() {
    this.utils.component.emit(src_app_app_component__WEBPACK_IMPORTED_MODULE_0__.MenuOptions.SERVICE_DETAILS);
  }
  navToUpdateService(pageName) {
    console.log('pageName', pageName);
    if (pageName == "/surrender-cancel" || pageName == '/partial-withdrawl' || pageName == '/fund-switching' || pageName == '/top-up' || pageName == '/premium-redirection') {
      // this.router.navigate([ pageName ]);
      if (this.config.policyList.length > 0) {
        // this.navCtrl.push(pageName);
        this.router.navigate([pageName]);
      } else {
        this.showDialog("", "There are no active policies identified. Service request cannot be submitted. For more clarification, please contact Client Careline " + '<a href="tel:1300-88-5055">1300-88-5055</a>' + " or email " + '<a href="mailto:wecare@sunlifemalaysia.com">wecare@sunlifemalaysia.com</a>' + ".");
      }
    } else if (pageName == '/e-nomination') {
      this.navToENomination();
    } else if (pageName == '/claims') {
      console.log('ClaimsPage');
    } else if (pageName == '/reinstatement') {
      if (this.config.policyList.length > 0) {
        if (this.reinstatemnetPossible && this.config.lapsedPolicy.length > 0) {
          // this.navCtrl.push(pageName);
          this.router.navigate([pageName]);
        } else {
          this.showDialog("", "There are no lapsed policies. Service request cannot be submitted. For more clarification, please contact Client Careline " + '<a href="tel:1300-88-5055">1300-88-5055</a>' + " or email " + '<a href="mailto:wecare@sunlifemalaysia.com">wecare@sunlifemalaysia.com</a>' + ".");
        }
      } else {
        this.showDialog("", "There are no lapsed policies. Service request cannot be submitted. For more clarification, please contact Client Careline " + '<a href="tel:1300-88-5055">1300-88-5055</a>' + " or email " + '<a href="mailto:wecare@sunlifemalaysia.com">wecare@sunlifemalaysia.com</a>' + ".");
      }
      console.log('ClaimsPage');
    } else {
      this.router.navigate([pageName]);
      //  this.navCtrl.push(pageName);
    }
  }

  expandItem(item, e) {
    this.policyServiceOptions.map(listItem => {
      if (item == listItem) {
        setTimeout(() => {
          listItem.expanded = !listItem.expanded;
        }, 100);
      } else {
        setTimeout(() => {
          listItem.expanded = false;
        }, 150);
      }
      return listItem;
    });
  }
  expandItemSecnd(item) {
    this.policyServiceSecond.map(listItems => {
      if (item == listItems) {
        setTimeout(() => {
          listItems.expanded = !listItems.expanded;
        }, 100);
      } else {
        setTimeout(() => {
          listItems.expanded = false;
        }, 150);
      }
      return listItems;
    });
  }
  getPolicyList() {
    if (this.utils.isDeviceOnLine()) {
      // this.config.policyList=[
      //   {
      //   "policyNumber": "M7996789",
      //   "planName": " Lapsed1 CIMB Dual Income Insurance Plan",
      //   "encryptedPolicyNumber":"1234",
      //   "ownerName":"POR POE LOON",
      //   "lifeAssuredName":"kevin",
      //   "policyStatus":"expired"
      // },
      // {
      //   "policyNumber": "T5570763",
      //   "planName": " Ex SinarLink sakinah",
      //   "encryptedPolicyNumber":"akiVX9IX6hek_fWdG_apdA",
      //   "ownerName":"Chin",
      //   "policyStatus":"expired",
      //   "lifeAssuredName":"Deepansh"
      // },
      // {
      //   "policyNumber": "T5570763",
      //   "planName": "Lapsed2 SinarLink sakinah",
      //   "encryptedPolicyNumber":"akiVX9IX6hek_fWdG_apdA",
      //   "ownerName":"Chin",
      //   "policyStatus":"expired",
      //   "lifeAssuredName":"Deepansh"
      // },
      // {
      //   "policyNumber": "T5570763",
      //   "planName": "Lapse31 SinarLink sakinah",
      //   "encryptedPolicyNumber":"akiVX9IX6hek_fWdG_apdA",
      //   "ownerName":"Chin",
      //   "policyStatus":"expired",
      //   "lifeAssuredName":"Deepansh"
      // },
      // {
      //   "policyNumber": "T5570763",
      //   "planName": "Lapsed4 SinarLink sakinah",
      //   "encryptedPolicyNumber":"akiVX9IX6hek_fWdG_apdA",
      //   "ownerName":"Chin",
      //   "policyStatus":"lapsed",
      //   "lifeAssuredName":"Deepansh"
      // },
      // {
      //   "policyNumber": "T5570763",
      //   "planName": "Lapsed5 SinarLink sakinah",
      //   "encryptedPolicyNumber":"akiVX9IX6hek_fWdG_apdA",
      //   "ownerName":"Chin",
      //   "policyStatus":"lapsed",
      //   "lifeAssuredName":"Deepansh"
      // },
      // {
      //   "policyNumber": "T5570763",
      //   "planName": "Lapsed6 SinarLink sakinah",
      //   "encryptedPolicyNumber":"akiVX9IX6hek_fWdG_apdA",
      //   "ownerName":"Chin",
      //   "policyStatus":"lapsed",
      //   "lifeAssuredName":"Deepansh"
      // },
      //  ]
      // }
      // if ( this.config.policyList.length>1){
      //   for(var i=0; i<this.config.policyList.length; i++ ){
      //     if(this.config.policyList[i]["policyStatus"]=='lapsed'){
      //       this.reinstatemnetPossible=true;
      //       this.config.lapsedPolicy.push(this.config.policyList[i])
      //       console.log( this.config.lapsedPolicy);
      //     }
      //   }
      // }
      this.utils.showProgressLoader();
      this.policyListSrvc.getPolicyList(this.utils.getUserIdentity()).then(res => {
        try {
          if (res['responseJSON'] && res['responseJSON']['statusCode'] == http_status_codes__WEBPACK_IMPORTED_MODULE_9__.OK) {
            this.config.policyList = res['responseJSON']['array'];
            this.config.lapsedPolicy = [];
            if (this.config.policyList.length > 0) {
              console.log('this.config.policyList', this.config.policyList);
              for (var i = 0; i < this.config.policyList.length; i++) {
                if (this.config.policyList[i]["policyStatus"] == 'Lapsed' || this.config.policyList[i]["policyStatus"] == 'Lapse') {
                  this.reinstatemnetPossible = true;
                  this.config.lapsedPolicy.push(this.config.policyList[i]);
                  console.log(this.config.lapsedPolicy);
                }
              }
            }
            setTimeout(() => {
              this.utils.dissmisProgressLoader();
            }, 100);
          } else {
            let errorMsg = res['responseJSON']['message'] || res['responseJSON']['userMessage'] || this.translate.instant('generic_msgs.server_err');
            this.showDialog("", errorMsg);
          }
        } catch (e) {
          this.utils.dissmisProgressLoader();
          this.logger.error("loginSuccess catch eror : " + JSON.stringify(e));
          this.errorMsg = this.translate.instant('generic_msgs.server_err');
          this.showDialog('', this.errorMsg);
        }
      }, err => {
        this.utils.dissmisProgressLoader();
        this.errorMsg = this.translate.instant('generic_msgs.server_err');
        this.showDialog('', this.errorMsg);
      });
    } else {
      this.utils.dissmisProgressLoader();
      this.errorMsg = this.translate.instant('generic_msgs.network_err');
      this.showDialog('', this.errorMsg);
    }
  }
  // getAlterationPDFPath(){
  //   if (this.utils.isDeviceOnLine()) {
  //   this.utils.showProgressLoader();
  //   this.UpdatePersonalService.getAlterationPDFLink().then((res) => {
  //     try {
  //       if (res['responseJSON'] && res['responseJSON']['statusCode'] == HttpStatus.OK) {
  //         this.config.alterationRequestFormLink = res['responseJSON']['link'];
  //        }
  //     } catch (e) {
  //       this.utils.dissmisProgressLoader();
  //       this.logger.error("loginSuccess catch eror : " + JSON.stringify(e));
  //       this.errorMsg = this.translate.instant('generic_msgs.server_err');
  //       this.showDialog('', this.errorMsg);
  //     }
  //   }, (err) => {
  //     this.utils.dissmisProgressLoader();
  //     this.errorMsg = this.translate.instant('generic_msgs.server_err');
  //     this.showDialog('', this.errorMsg);
  //   });
  // } else {
  //   this.utils.dissmisProgressLoader();
  //   this.errorMsg = this.translate.instant('generic_msgs.network_err');
  //   this.showDialog('', this.errorMsg);
  // }
  //  }
  showDialog(title, message) {
    let buttons = [{
      text: "ok",
      handler: () => {}
    }];
    const alert = this.alertCtrl.create({
      header: title,
      message: message,
      buttons: buttons
    }).then(alert => alert.present());
  }
  goToClaim() {
    //this.navCtrl.push(ClaimsPage);
    this.router.navigate(['/claims']);
  }
  goToClientCare() {
    this.utils.openLink('https://www.sunlifemalaysia.com/client-care/make-a-service-request/insurance/');
  }
  /*Navigate to ENomination page*/
  navToENomination() {
    if (this.utils.isDeviceOnLine()) {
      this.utils.showProgressLoader();
      this.getEnominationPath().then(result => {
        try {
          this.utils.openLink(result['responseJSON'].url);
          this.menuCtrl.close();
          this.utils.dissmisProgressLoader();
        } catch (e) {
          this.utils.dissmisProgressLoader();
          this.menuCtrl.close();
          let errorMsg = this.translate.instant('generic_msgs.server_err');
          this.utils.showAlert("", errorMsg);
        }
      }, err => {
        this.showServiceError(err);
      });
    } else {
      let errorMsg = this.translate.instant('generic_msgs.network_err');
      this.showError(errorMsg);
    }
  }
  getEnominationPath() {
    this.logger.trace("App.component--eNominationService--start");
    let promise = new Promise((resolve, reject) => {
      try {
        var resourceRequest = new WLResourceRequest(src_providers_utils_config__WEBPACK_IMPORTED_MODULE_1__.ConfigProvider.getEnominationlinkAdapterPath, WLResourceRequest.GET);
        resourceRequest.setQueryParameter('params', [this.utils.getUserIdentity(), this.utils.getToken()]);
        resourceRequest.send().then(response => {
          resolve(response);
        }, error => {
          this.logger.error("App.component--eNominationService Adapter calling error:" + JSON.stringify(error));
          reject(error);
        });
      } catch (e) {
        reject(e);
        this.logger.log("App.component--eNominationService adapter calling catch error:" + JSON.stringify(e));
      }
    });
    this.logger.trace("App.component--eNominationService--end");
    return promise;
  }
  showServiceError(err) {
    this.utils.dissmisProgressLoader();
    this.menuCtrl.close();
    let errorMsg = this.utils.handleServiceException(err); // adapter exception handler
    this.utils.showAlert("", errorMsg);
  }
  showError(err) {
    this.utils.dissmisProgressLoader();
    this.utils.showAlert("", err);
  }
}
ServicePage.ɵfac = function ServicePage_Factory(t) {
  return new (t || ServicePage)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_plan_listing_getPolicyListService__WEBPACK_IMPORTED_MODULE_3__.GetPolicyListService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_update_personal_details_updatePersonalDetailservice__WEBPACK_IMPORTED_MODULE_4__.UpdatePersonalService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_10__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](src_providers_utils_utils_service__WEBPACK_IMPORTED_MODULE_5__.UtilService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](src_app_services_translate_config_service__WEBPACK_IMPORTED_MODULE_6__.TranslateConfigService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](src_providers_logger_service_logger_service__WEBPACK_IMPORTED_MODULE_7__.LoggerServiceProvider), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_11__.AlertController), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](src_providers_utils_config__WEBPACK_IMPORTED_MODULE_1__.ConfigProvider), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__.TranslateService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_13__.DomSanitizer), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_11__.MenuController));
};
ServicePage.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineComponent"]({
  type: ServicePage,
  selectors: [["app-service"]],
  viewQuery: function ServicePage_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵviewQuery"](_c0, 5);
    }
    if (rf & 2) {
      let _t;
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵloadQuery"]()) && (ctx.content = _t.first);
    }
  },
  decls: 7,
  vars: 1,
  consts: [["mode", "ios"], ["color", "primary", 1, "toolbar"], ["slot", "start", "auto-hide", "false", "color", "secondary"], [1, "bold-font"], ["no-bounce", "", 1, "app_bg2", "text_color_base", "ion-padding"], ["class", "white_container_border_radius padding_15 ", 4, "ngIf"], [1, "white_container_border_radius", "padding_15"], [1, "dataServiceMenu1"], [4, "ngFor", "ngForOf"], ["class", "dataServiceMenu2", 4, "ngFor", "ngForOf"], [2, "display", "block"], [1, "font_size_14", 3, "click"], ["slot", "end", "name", "chevron-forward-outline", 4, "ngIf"], ["slot", "end", "name", "chevron-down-outline", 4, "ngIf"], ["class", "accordianContent", 4, "ngIf"], ["slot", "end", "name", "chevron-forward-outline"], ["slot", "end", "name", "chevron-down-outline"], [1, "accordianContent"], [2, "padding-left", "10px", 3, "click"], ["size", "1", "text-center", "", 1, "margin_top_bottom_auto"], [2, "font-size", "1rem"], ["size", "9", 1, "margin_top_bottom_auto"], [1, "label-margin", 3, "innerHTML"], ["size", "2", "text-center", "", 1, "margin_top_bottom_auto", 2, "padding-left", "15px"], [1, "fas", "fa-angle-right", "font_size_20"], [2, "padding-left", "10px"], [1, "label-margin"], [2, "color", "#6095c9", 3, "click"], ["size", "2", "text-center", "", 1, "margin_top_bottom_auto"], [1, "dataServiceMenu2"], ["lines", "none", 1, "font_size_14", 3, "click"], ["class", "accordianContent ", 4, "ngIf"], [2, "display", "block", "padding-left", "10px"], [1, "label-margin", 2, "display", "block"], [1, "clientCare-link", 3, "click"], ["href", "tel:1300-88-5055", 2, "color", "#6095c9"], ["href", "mailto:wecare@sunlifemalaysia.com", "target", "_blank", 2, "color", "#6095c9"]],
  template: function ServicePage_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "ion-header", 0)(1, "ion-toolbar", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](2, "ion-menu-button", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](3, "ion-title", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](4, "Services ");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](5, "ion-content", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](6, ServicePage_section_6_Template, 5, 2, "section", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.policyServiceOptions.length > 0);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_14__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_14__.NgIf, _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.IonCol, _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.IonContent, _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.IonHeader, _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.IonIcon, _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.IonItem, _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.IonLabel, _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.IonList, _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.IonMenuButton, _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.IonRow, _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.IonTitle, _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.IonToolbar],
  styles: [".white_container_border_radius[_ngcontent-%COMP%] {\n  background-color: rgba(255, 255, 255, 0.7) !important;\n  border-radius: 15px !important;\n}\n\n.padding_15[_ngcontent-%COMP%] {\n  padding: 15px;\n}\n\n.margin_top_bottom_auto[_ngcontent-%COMP%] {\n  margin-top: 5px;\n  margin-bottom: 5px;\n}\n\n.font_size_14[_ngcontent-%COMP%] {\n  font-size: 1rem !important;\n}\n\n.label-margin[_ngcontent-%COMP%] {\n  margin-left: 13%;\n}\n\n.font_size_20[_ngcontent-%COMP%] {\n  font-size: 1.2rem !important;\n}\n\nion-list[_ngcontent-%COMP%] {\n  margin: 0 !important;\n  padding: 0 8px;\n}\nion-list[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  padding: 0 8px !important;\n}\nion-list[_ngcontent-%COMP%]   .item-inner[_ngcontent-%COMP%] {\n  padding-right: 0 !important;\n}\nion-list[_ngcontent-%COMP%]:last-child   .accordianContent[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%], ion-list[_ngcontent-%COMP%]:nth-child(4)   .accordianContent[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%] {\n  margin: 8px 0;\n  white-space: normal;\n}\nion-list[_ngcontent-%COMP%]:last-child   .accordianContent[_ngcontent-%COMP%]   ion-col[_ngcontent-%COMP%]:first-child, ion-list[_ngcontent-%COMP%]:nth-child(4)   .accordianContent[_ngcontent-%COMP%]   ion-col[_ngcontent-%COMP%]:first-child {\n  display: none;\n}\nion-list[_ngcontent-%COMP%]:last-child   .accordianContent[_ngcontent-%COMP%]   ion-col[_ngcontent-%COMP%]:last-child, ion-list[_ngcontent-%COMP%]:nth-child(4)   .accordianContent[_ngcontent-%COMP%]   ion-col[_ngcontent-%COMP%]:last-child {\n  display: none;\n}\nion-list[_ngcontent-%COMP%]:last-child   .accordianContent[_ngcontent-%COMP%]   ion-col[_ngcontent-%COMP%]:nth-child(2), ion-list[_ngcontent-%COMP%]:nth-child(4)   .accordianContent[_ngcontent-%COMP%]   ion-col[_ngcontent-%COMP%]:nth-child(2) {\n  flex: 100%;\n  max-width: 100%;\n  width: 100%;\n}\n\n.claim-link[_ngcontent-%COMP%] {\n  cursor: pointer;\n  color: #337ab7;\n  text-decoration: underline;\n}\n\n.clientCare-link[_ngcontent-%COMP%] {\n  cursor: pointer;\n  color: #337ab7;\n  text-decoration: underline;\n}\n\n.list-md[_ngcontent-%COMP%] {\n  background: none !important;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcGFnZXMvc2VydmljZS9zZXJ2aWNlLnBhZ2Uuc2NzcyIsIndlYnBhY2s6Ly8uLy4uLy4uLy4uL0FsbCUyMFByb2plY3RzL01hbGF5c2lhX0NsaWVudEFwcF9SZXZhbXAvU3VuQWNjZXNzX0lvbmljNl9SZXZhbXAvc3JjL2FwcC9wYWdlcy9zZXJ2aWNlL3NlcnZpY2UucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UscURBQUE7RUFDQSw4QkFBQTtBQ0NGOztBRENBO0VBQ0UsYUFBQTtBQ0VGOztBREFBO0VBQ0UsZUFBQTtFQUNBLGtCQUFBO0FDR0Y7O0FEQUE7RUFDRSwwQkFBQTtBQ0dGOztBRERBO0VBQ0UsZ0JBQUE7QUNJRjs7QURGQTtFQUNFLDRCQUFBO0FDS0Y7O0FERkE7RUFFRSxvQkFBQTtFQUNBLGNBQUE7QUNJRjtBREhFO0VBQ0kseUJBQUE7QUNLTjtBREhFO0VBQ0ksMkJBQUE7QUNLTjtBREFVO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0FDRWQ7QURDYztFQUNJLGFBQUE7QUNDbEI7QURDYztFQUNJLGFBQUE7QUNDbEI7QURDYztFQUNJLFVBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtBQ0NsQjs7QURLQTtFQUNFLGVBQUE7RUFDQSxjQUFBO0VBQ0EsMEJBQUE7QUNGRjs7QURJQTtFQUNFLGVBQUE7RUFDQSxjQUFBO0VBQ0EsMEJBQUE7QUNERjs7QURlQTtFQUNFLDJCQUFBO0FDWkYiLCJzb3VyY2VzQ29udGVudCI6WyIud2hpdGVfY29udGFpbmVyX2JvcmRlcl9yYWRpdXMge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC43KSAhaW1wb3J0YW50O1xyXG4gIGJvcmRlci1yYWRpdXM6IDE1cHggIWltcG9ydGFudDtcclxufVxyXG4ucGFkZGluZ18xNSB7XHJcbiAgcGFkZGluZzogMTVweDtcclxufVxyXG4ubWFyZ2luX3RvcF9ib3R0b21fYXV0byB7XHJcbiAgbWFyZ2luLXRvcDogNXB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDVweDtcclxufVxyXG5cclxuLmZvbnRfc2l6ZV8xNCB7XHJcbiAgZm9udC1zaXplOiAxLjByZW0gIWltcG9ydGFudDtcclxufVxyXG4ubGFiZWwtbWFyZ2luIHtcclxuICBtYXJnaW4tbGVmdDogMTMlO1xyXG59XHJcbi5mb250X3NpemVfMjAge1xyXG4gIGZvbnQtc2l6ZTogMS4ycmVtICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbmlvbi1saXN0IHtcclxuICAvLyAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOm5vbmU7XHJcbiAgbWFyZ2luOiAwICFpbXBvcnRhbnQ7XHJcbiAgcGFkZGluZzogMCA4cHg7XHJcbiAgYnV0dG9uIHtcclxuICAgICAgcGFkZGluZzogMCA4cHggIWltcG9ydGFudDtcclxuICB9XHJcbiAgLml0ZW0taW5uZXIge1xyXG4gICAgICBwYWRkaW5nLXJpZ2h0OiAwICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gICY6bGFzdC1jaGlsZCxcclxuICAmOm50aC1jaGlsZCg0KSB7XHJcbiAgICAgIC5hY2NvcmRpYW5Db250ZW50IHtcclxuICAgICAgICAgIGlvbi1sYWJlbCB7XHJcbiAgICAgICAgICAgICAgbWFyZ2luOiA4cHggMDtcclxuICAgICAgICAgICAgICB3aGl0ZS1zcGFjZTogbm9ybWFsO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgaW9uLWNvbCB7XHJcbiAgICAgICAgICAgICAgJjpmaXJzdC1jaGlsZCB7XHJcbiAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICY6bGFzdC1jaGlsZCB7XHJcbiAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICY6bnRoLWNoaWxkKDIpIHtcclxuICAgICAgICAgICAgICAgICAgZmxleDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgIH1cclxuICB9XHJcbn1cclxuLmNsYWltLWxpbmsge1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBjb2xvcjogIzMzN2FiNztcclxuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcclxufVxyXG4uY2xpZW50Q2FyZS1saW5rIHtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgY29sb3I6ICMzMzdhYjc7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XHJcbn1cclxuXHJcbi8vIGlvbi1yb3cge1xyXG4vLyAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKDAsIDQ1LCA2MSwgLjMpO1xyXG4vLyAgIHBhZGRpbmc6IDEwcHggMHB4IDE1cHggMHB4O1xyXG4vLyAgIG1hcmdpbi1ib3R0b206IDVweDtcclxuLy8gICBtYXJnaW4tbGVmdDogMTVweDtcclxuLy8gICBtYXJnaW4tcmlnaHQ6IDE1cHg7XHJcbi8vIH1cclxuXHJcbi8vIGlvbi1pdGVtOmxhc3QtY2hpbGQge1xyXG4vLyAgIGJvcmRlci1ib3R0b206IG5vbmU7XHJcbi8vIH1cclxuLmxpc3QtbWQge1xyXG4gIGJhY2tncm91bmQ6IG5vbmUgIWltcG9ydGFudDtcclxufVxyXG5cclxuIiwiLndoaXRlX2NvbnRhaW5lcl9ib3JkZXJfcmFkaXVzIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjcpICFpbXBvcnRhbnQ7XG4gIGJvcmRlci1yYWRpdXM6IDE1cHggIWltcG9ydGFudDtcbn1cblxuLnBhZGRpbmdfMTUge1xuICBwYWRkaW5nOiAxNXB4O1xufVxuXG4ubWFyZ2luX3RvcF9ib3R0b21fYXV0byB7XG4gIG1hcmdpbi10b3A6IDVweDtcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xufVxuXG4uZm9udF9zaXplXzE0IHtcbiAgZm9udC1zaXplOiAxcmVtICFpbXBvcnRhbnQ7XG59XG5cbi5sYWJlbC1tYXJnaW4ge1xuICBtYXJnaW4tbGVmdDogMTMlO1xufVxuXG4uZm9udF9zaXplXzIwIHtcbiAgZm9udC1zaXplOiAxLjJyZW0gIWltcG9ydGFudDtcbn1cblxuaW9uLWxpc3Qge1xuICBtYXJnaW46IDAgIWltcG9ydGFudDtcbiAgcGFkZGluZzogMCA4cHg7XG59XG5pb24tbGlzdCBidXR0b24ge1xuICBwYWRkaW5nOiAwIDhweCAhaW1wb3J0YW50O1xufVxuaW9uLWxpc3QgLml0ZW0taW5uZXIge1xuICBwYWRkaW5nLXJpZ2h0OiAwICFpbXBvcnRhbnQ7XG59XG5pb24tbGlzdDpsYXN0LWNoaWxkIC5hY2NvcmRpYW5Db250ZW50IGlvbi1sYWJlbCwgaW9uLWxpc3Q6bnRoLWNoaWxkKDQpIC5hY2NvcmRpYW5Db250ZW50IGlvbi1sYWJlbCB7XG4gIG1hcmdpbjogOHB4IDA7XG4gIHdoaXRlLXNwYWNlOiBub3JtYWw7XG59XG5pb24tbGlzdDpsYXN0LWNoaWxkIC5hY2NvcmRpYW5Db250ZW50IGlvbi1jb2w6Zmlyc3QtY2hpbGQsIGlvbi1saXN0Om50aC1jaGlsZCg0KSAuYWNjb3JkaWFuQ29udGVudCBpb24tY29sOmZpcnN0LWNoaWxkIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cbmlvbi1saXN0Omxhc3QtY2hpbGQgLmFjY29yZGlhbkNvbnRlbnQgaW9uLWNvbDpsYXN0LWNoaWxkLCBpb24tbGlzdDpudGgtY2hpbGQoNCkgLmFjY29yZGlhbkNvbnRlbnQgaW9uLWNvbDpsYXN0LWNoaWxkIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cbmlvbi1saXN0Omxhc3QtY2hpbGQgLmFjY29yZGlhbkNvbnRlbnQgaW9uLWNvbDpudGgtY2hpbGQoMiksIGlvbi1saXN0Om50aC1jaGlsZCg0KSAuYWNjb3JkaWFuQ29udGVudCBpb24tY29sOm50aC1jaGlsZCgyKSB7XG4gIGZsZXg6IDEwMCU7XG4gIG1heC13aWR0aDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5jbGFpbS1saW5rIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBjb2xvcjogIzMzN2FiNztcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG59XG5cbi5jbGllbnRDYXJlLWxpbmsge1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGNvbG9yOiAjMzM3YWI3O1xuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbn1cblxuLmxpc3QtbWQge1xuICBiYWNrZ3JvdW5kOiBub25lICFpbXBvcnRhbnQ7XG59Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
});
function sanitize(html) {
  throw new Error('Function not implemented.');
}

/***/ })

}]);
//# sourceMappingURL=src_app_pages_service_service_module_ts.js.map