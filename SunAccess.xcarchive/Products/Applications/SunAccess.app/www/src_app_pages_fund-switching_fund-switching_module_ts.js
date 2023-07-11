(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_fund-switching_fund-switching_module_ts"],{

/***/ 25889:
/*!***********************************************************************!*\
  !*** ./src/app/pages/fund-switching/fund-switching-routing.module.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FundSwitchingPageRoutingModule": () => (/* binding */ FundSwitchingPageRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _fund_switching_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fund-switching.page */ 89303);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);




const routes = [{
  path: '',
  component: _fund_switching_page__WEBPACK_IMPORTED_MODULE_0__.FundSwitchingPage
}];
class FundSwitchingPageRoutingModule {}
FundSwitchingPageRoutingModule.ɵfac = function FundSwitchingPageRoutingModule_Factory(t) {
  return new (t || FundSwitchingPageRoutingModule)();
};
FundSwitchingPageRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
  type: FundSwitchingPageRoutingModule
});
FundSwitchingPageRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](FundSwitchingPageRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
})();

/***/ }),

/***/ 61750:
/*!***************************************************************!*\
  !*** ./src/app/pages/fund-switching/fund-switching.module.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FundSwitchingPageModule": () => (/* binding */ FundSwitchingPageModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _fund_switching_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fund-switching-routing.module */ 25889);
/* harmony import */ var _fund_switching_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./fund-switching.page */ 89303);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ 38699);
/* harmony import */ var src_app_component_components_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/component/components.module */ 17343);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);









//import { EditPersonalDataComponent } from 'src/app/component/edit-personal-data/edit-personal-data.component';
class FundSwitchingPageModule {}
FundSwitchingPageModule.ɵfac = function FundSwitchingPageModule_Factory(t) {
  return new (t || FundSwitchingPageModule)();
};
FundSwitchingPageModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({
  type: FundSwitchingPageModule
});
FundSwitchingPageModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, src_app_component_components_module__WEBPACK_IMPORTED_MODULE_2__.ComponentsModule, _fund_switching_routing_module__WEBPACK_IMPORTED_MODULE_0__.FundSwitchingPageRoutingModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__.TranslateModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](FundSwitchingPageModule, {
    declarations: [_fund_switching_page__WEBPACK_IMPORTED_MODULE_1__.FundSwitchingPage],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, src_app_component_components_module__WEBPACK_IMPORTED_MODULE_2__.ComponentsModule, _fund_switching_routing_module__WEBPACK_IMPORTED_MODULE_0__.FundSwitchingPageRoutingModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__.TranslateModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule]
  });
})();

/***/ }),

/***/ 89303:
/*!*************************************************************!*\
  !*** ./src/app/pages/fund-switching/fund-switching.page.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FundSwitchingPage": () => (/* binding */ FundSwitchingPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var http_status_codes__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! http-status-codes */ 92788);
/* harmony import */ var intro_js_intro_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! intro.js/intro.js */ 97958);
/* harmony import */ var intro_js_intro_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(intro_js_intro_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _success_popup_success_popup_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../success-popup/success-popup.page */ 75024);
/* harmony import */ var _terms_and_condition_terms_and_condition_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../terms-and-condition/terms-and-condition.page */ 33449);
/* harmony import */ var _tac_popup_tac_popup_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../tac-popup/tac-popup.page */ 52370);
/* harmony import */ var _declaration_details_declaration_details_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../declaration-details/declaration-details.page */ 25552);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var src_providers_utils_utils_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/providers/utils/utils.service */ 30423);
/* harmony import */ var src_providers_logger_service_logger_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/providers/logger-service/logger-service */ 9999);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @ngx-translate/core */ 38699);
/* harmony import */ var src_providers_utils_config__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/providers/utils/config */ 43485);
/* harmony import */ var _unit_price_uniPriceListService__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../unit-price/uniPriceListService */ 86916);
/* harmony import */ var _fundSwitchingService__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./fundSwitchingService */ 87348);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _component_edit_personal_data_edit_personal_data_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../component/edit-personal-data/edit-personal-data.component */ 37434);


// import { DeclarationDetailsPage } from "../declaration-details/declaration-details";
// import { ServiceHistoryPage } from "../service-history/service-history";
// import { ServicePage } from "../service/service";
// import { TacPopupPage } from "../tac-popup/tac-popup";
//import { TermsAndConditionPage } from "../terms-and-condition/terms-and-condition";


















const _c0 = ["Navbar"];
const _c1 = ["Content"];
function FundSwitchingPage_section_7_div_7_ion_row_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "ion-row")(1, "ion-col", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](2, "ion-radio", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](3, "ion-label", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](5, "ion-col", 22)(6, "ion-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const policy_r9 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("value", policy_r9);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](policy_r9.policyNumber);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](policy_r9.planName);
  }
}
function FundSwitchingPage_section_7_div_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 19)(1, "ion-row")(2, "ion-col", 20)(3, "ion-label", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](6, "ion-col", 22)(7, "ion-label", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](9, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](10, "ion-radio-group", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("ionChange", function FundSwitchingPage_section_7_div_7_Template_ion_radio_group_ionChange_10_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r11);
      const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r10.onSelectPolicy($event.detail.value));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](11, FundSwitchingPage_section_7_div_7_ion_row_11_Template, 8, 3, "ion-row", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](5, 3, "update_card_details.policyNumber"));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](9, 5, "update_card_details.planName"));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngForOf", ctx_r7.policyList);
  }
}
function FundSwitchingPage_section_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "section", 11)(1, "form", 12)(2, "div", 13)(3, "ion-label", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](4, "Select Policy");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](5, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](6, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](7, FundSwitchingPage_section_7_div_7_Template, 12, 7, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](8, "ion-row", 17)(9, "ion-col")(10, "ion-button", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function FundSwitchingPage_section_7_Template_ion_button_click_10_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r13);
      const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r12.validatePolicy());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](11, "Continue");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("formGroup", ctx_r0.validateFundSwitchingForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r0.policyList.length > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("disabled", !ctx_r0.validateFundSwitchingForm.valid);
  }
}
function FundSwitchingPage_section_8_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div")(1, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](2, "i", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](3, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](4, "Online Submission not allowed");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](5, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](7, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](8, "Please contact us at ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](9, "a", 30)(10, "u");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](11, "1300-88-5055");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](12, " or follow the steps below to submit physical form.");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](13, "div", 31)(14, "ion-item", 32)(15, "ion-avatar", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](16, "i", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](17, "ion-list", 35)(18, "ion-label", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](19, "Download (Click ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](20, "span", 37)(21, "u", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function FundSwitchingPage_section_8_div_1_Template_u_click_21_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r18);
      const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r17.downloadManualForm());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](22, "here ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](23, ")");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](24, "ion-label", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](25, " Print and fill in the form ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](26, "ion-item", 32)(27, "ion-avatar", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](28, "i", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](29, "ion-list", 35)(30, "ion-label", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](31, "Scan/Snap");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](32, "ion-label", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](33, " An image of the completed form ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](34, "ion-item", 32)(35, "ion-avatar", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](36, "i", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](37, "ion-list", 35)(38, "ion-label", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](39, "Email");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](40, "ion-label", 39)(41, "a", 42)(42, "u");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](43, "policy.admin@sunlifemalaysia.com");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](44, "ion-row", 17)(45, "ion-col")(46, "ion-button", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function FundSwitchingPage_section_8_div_1_Template_ion_button_click_46_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r18);
      const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r19.cancel());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](47, "Close");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](ctx_r14.whyNotAllowedMsg);
  }
}
function FundSwitchingPage_section_8_div_2_div_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1, "Service request is not applicable");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
}
function FundSwitchingPage_section_8_div_2_div_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1, "Service request can not be submitted");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
}
function FundSwitchingPage_section_8_div_2_p_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](ctx_r22.whyNotApplicableMsg);
  }
}
function FundSwitchingPage_section_8_div_2_p_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](ctx_r23.whyCantSubmittedMsg);
  }
}
function FundSwitchingPage_section_8_div_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div")(1, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](2, "i", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](3, FundSwitchingPage_section_8_div_2_div_3_Template, 2, 0, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](4, FundSwitchingPage_section_8_div_2_div_4_Template, 2, 0, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](5, FundSwitchingPage_section_8_div_2_p_5_Template, 2, 1, "p", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](6, FundSwitchingPage_section_8_div_2_p_6_Template, 2, 1, "p", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](7, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](8, "Please contact us at ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](9, "u")(10, "a", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](11, "1300-88-5055");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](12, " or email ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](13, "u")(14, "a", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](15, "wecare@sunlifemalaysia.com");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](16, ".");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](17, "ion-row", 17)(18, "ion-col")(19, "ion-button", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function FundSwitchingPage_section_8_div_2_Template_ion_button_click_19_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r25);
      const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r24.cancel());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](20, "Close");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r15.serviceRequestNotApplicable);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r15.canNotSubmitted);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r15.serviceRequestNotApplicable);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r15.canNotSubmitted);
  }
}
function FundSwitchingPage_section_8_div_3_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div")(1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](2, "To complete your service request, a 6-digit one-time-pin (OTP) is required.");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](3, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](4, "To update your mobile number please contact us at ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](5, "a", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](6, "1300-88-5055");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](7, " or follow the steps below to submit physical form.");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
  }
}
function FundSwitchingPage_section_8_div_3_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div")(1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](2, "To complete your service request, a 6-digit one-time-pin (OTP) is required and will be sent to your mobile number ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](3, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](5, ".");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](ctx_r27.maskedPhoneNumber);
  }
}
function FundSwitchingPage_section_8_div_3_div_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div")(1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](2, "To ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](3, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](4, "Update Mobile Number");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](5, " please contact us at ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](6, "a", 46)(7, "u");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](8, "1300-88-5055");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](9, " or follow the steps below to submit a physical form.");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
  }
}
function FundSwitchingPage_section_8_div_3_div_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r33 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div")(1, "ion-item", 32)(2, "ion-avatar", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](3, "i", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](4, "ion-list", 35)(5, "ion-label", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](6, "Download (Click ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](7, "span", 37)(8, "u", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function FundSwitchingPage_section_8_div_3_div_4_Template_u_click_8_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r33);
      const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r32.downloadAlterationForm());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](9, "here ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](10, ")");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](11, "ion-label", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](12, " Print and fill in the form ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](13, "ion-item", 32)(14, "ion-avatar", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](15, "i", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](16, "ion-list", 35)(17, "ion-label", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](18, "Scan/Snap");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](19, "ion-label", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](20, " An image of the completed form ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](21, "ion-item", 32)(22, "ion-avatar", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](23, "i", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](24, "ion-list", 35)(25, "ion-label", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](26, "Email");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](27, "ion-label", 39)(28, "a", 42)(29, "u");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](30, "policy.admin@sunlifemalaysia.com");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()()()()();
  }
}
function FundSwitchingPage_section_8_div_3_ion_col_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r35 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "ion-col")(1, "ion-button", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function FundSwitchingPage_section_8_div_3_ion_col_6_Template_ion_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r35);
      const ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r34.updateNumber());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](2, "Not My Number");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](3, "ion-button", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function FundSwitchingPage_section_8_div_3_ion_col_6_Template_ion_button_click_3_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r35);
      const ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r36.continueToUpdate());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](4, "Continue");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
  }
}
function FundSwitchingPage_section_8_div_3_ion_col_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r38 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "ion-col")(1, "ion-button", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function FundSwitchingPage_section_8_div_3_ion_col_7_Template_ion_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r38);
      const ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r37.cancel());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](2, "Close");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
  }
}
function FundSwitchingPage_section_8_div_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](1, FundSwitchingPage_section_8_div_3_div_1_Template, 8, 0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](2, FundSwitchingPage_section_8_div_3_div_2_Template, 6, 1, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](3, FundSwitchingPage_section_8_div_3_div_3_Template, 10, 0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](4, FundSwitchingPage_section_8_div_3_div_4_Template, 31, 0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](5, "ion-row", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](6, FundSwitchingPage_section_8_div_3_ion_col_6_Template, 5, 0, "ion-col", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](7, FundSwitchingPage_section_8_div_3_ion_col_7_Template, 3, 0, "ion-col", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", !ctx_r16.phoneNumber);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r16.phoneNumber && !ctx_r16.notMyNumber);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r16.notMyNumber);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r16.notMyNumber || !ctx_r16.phoneNumber);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r16.phoneNumber && !ctx_r16.notMyNumber);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", !ctx_r16.phoneNumber || ctx_r16.notMyNumber);
  }
}
function FundSwitchingPage_section_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "section", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](1, FundSwitchingPage_section_8_div_1_Template, 48, 1, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](2, FundSwitchingPage_section_8_div_2_Template, 21, 4, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](3, FundSwitchingPage_section_8_div_3_Template, 8, 6, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", !ctx_r1.onlineSubmissionAllowed && !ctx_r1.serviceRequestNotApplicable && !ctx_r1.canNotSubmitted);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", !ctx_r1.onlineSubmissionAllowed && (ctx_r1.serviceRequestNotApplicable || ctx_r1.canNotSubmitted));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r1.onlineSubmissionAllowed && ctx_r1.showTACDisclaimerPage);
  }
}
function FundSwitchingPage_section_9_div_1_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r44 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function FundSwitchingPage_section_9_div_1_div_1_Template_div_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r44);
      const ctx_r43 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r43.tabSwitch("tab1"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1, " Personal Details");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngClass", ctx_r41.selectedTab1 ? "tab-selected" : "");
  }
}
function FundSwitchingPage_section_9_div_1_div_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r46 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function FundSwitchingPage_section_9_div_1_div_6_Template_div_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r46);
      const ctx_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r45.tabSwitch("tab4"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1, " Review and Confirmation");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngClass", ctx_r42.selectedTab4 ? "tab-selected" : "");
  }
}
function FundSwitchingPage_section_9_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r48 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](1, FundSwitchingPage_section_9_div_1_div_1_Template, 2, 1, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](2, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function FundSwitchingPage_section_9_div_1_Template_div_click_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r48);
      const ctx_r47 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r47.tabSwitch("tab2"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](3, "Fund Switching Particulars");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](4, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function FundSwitchingPage_section_9_div_1_Template_div_click_4_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r48);
      const ctx_r49 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r49.tabSwitch("tab3"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](5, "Premium/ Contribution redirection Particulars");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](6, FundSwitchingPage_section_9_div_1_div_6_Template, 2, 1, "div", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", !ctx_r39.showLastTab);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngClass", ctx_r39.selectedTab2 ? "tab-selected" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngClass", ctx_r39.selectedTab3 ? "tab-selected" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r39.showLastTab);
  }
}
function FundSwitchingPage_section_9_div_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r51 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 50)(1, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function FundSwitchingPage_section_9_div_2_Template_div_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r51);
      const ctx_r50 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r50.tabSwitch("tab1"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](2, " Personal Details");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](3, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function FundSwitchingPage_section_9_div_2_Template_div_click_3_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r51);
      const ctx_r52 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r52.tabSwitch("tab2"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](4, "Fund Switching Particulars");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](5, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function FundSwitchingPage_section_9_div_2_Template_div_click_5_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r51);
      const ctx_r53 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r53.tabSwitch("tab4"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](6, " Review and Confirmation");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngClass", ctx_r40.selectedTab1 ? "tab-selected" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngClass", ctx_r40.selectedTab2 ? "tab-selected" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngClass", ctx_r40.selectedTab4 ? "tab-selected" : "");
  }
}
function FundSwitchingPage_section_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "section");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](1, FundSwitchingPage_section_9_div_1_Template, 7, 4, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](2, FundSwitchingPage_section_9_div_2_Template, 7, 3, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r2.premiumRediretionPossible && ctx_r2.showPremiumTab);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", !ctx_r2.showPremiumTab);
  }
}
function FundSwitchingPage_section_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "section", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](1, "app-edit-personal-data", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("PreTACVarified", ctx_r3.TACVarified)("comingFromCDD", false)("selectedPolicyNumber", ctx_r3.selectedPolicyNumber)("isEditable", ctx_r3.isEditable)("preUpdatedData", ctx_r3.updatedPersonalData)("prePersonalData", ctx_r3.prePersonalData);
  }
}
function FundSwitchingPage_section_11_ion_row_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "ion-row", 75)(1, "ion-col", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](3, "ion-col", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](5, "ion-col", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](7, "ion-col", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const funds_r57 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](funds_r57.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](funds_r57.price);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](funds_r57.units);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](funds_r57.value);
  }
}
function FundSwitchingPage_section_11_tr_27_ion_select_option_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "ion-select-option", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const funds_r63 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("value", funds_r63.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", funds_r63.name, " ");
  }
}
function FundSwitchingPage_section_11_tr_27_i_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r67 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "i", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function FundSwitchingPage_section_11_tr_27_i_17_Template_i_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r67);
      const i_r59 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]().index;
      const ctx_r65 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r65.removeFromRow(i_r59));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
}
function FundSwitchingPage_section_11_tr_27_Template(rf, ctx) {
  if (rf & 1) {
    const _r69 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "tr", 76)(1, "td", 77)(2, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](3, "Fund Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](4, "ion-select", 78, 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("ionChange", function FundSwitchingPage_section_11_tr_27_Template_ion_select_ionChange_4_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r69);
      const i_r59 = restoredCtx.index;
      const _r60 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵreference"](5);
      const ctx_r68 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r68.onFundFromChange(_r60, i_r59));
    })("open", function FundSwitchingPage_section_11_tr_27_Template_ion_select_open_4_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r69);
      const ctx_r70 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r70.changeJunkChar("ng-option-label"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](6, FundSwitchingPage_section_11_tr_27_ion_select_option_6_Template, 2, 2, "ion-select-option", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](7, "td", 77)(8, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](9, "Switching %");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](10, "ion-input", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("ionBlur", function FundSwitchingPage_section_11_tr_27_Template_ion_input_ionBlur_10_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r69);
      const i_r59 = restoredCtx.index;
      const ctx_r71 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r71.percentageFromChanged(i_r59));
    })("ionChange", function FundSwitchingPage_section_11_tr_27_Template_ion_input_ionChange_10_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r69);
      const i_r59 = restoredCtx.index;
      const ctx_r72 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r72.resetToTable(i_r59));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](11, "td", 77)(12, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](13, "Switching Value (RM)");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](14, "div", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](16, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](17, FundSwitchingPage_section_11_tr_27_i_17_Template, 1, 0, "i", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const fromFund_r58 = ctx.$implicit;
    const i_r59 = ctx.index;
    const ctx_r55 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("formGroupName", i_r59);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("searchable", false)("clearable", false);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngForOf", ctx_r55.presetFunds);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("formGroupName", i_r59);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("formGroupName", i_r59);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind2"](16, 8, fromFund_r58.value["value"], ".1-2"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r55.FundSwitchingParticularsForm.controls.switchFromFunds.length > 1);
  }
}
function FundSwitchingPage_section_11_tr_47_ion_select_option_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "ion-select-option", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const funds_r78 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("value", funds_r78.fundName);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", funds_r78.fundName, " ");
  }
}
function FundSwitchingPage_section_11_tr_47_i_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r82 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "i", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function FundSwitchingPage_section_11_tr_47_i_17_Template_i_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r82);
      const i_r74 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]().index;
      const ctx_r80 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r80.removeToRow(i_r74));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
}
const _c2 = function () {
  return {
    "cssClass": "mycomponent-wider-popover-small"
  };
};
function FundSwitchingPage_section_11_tr_47_Template(rf, ctx) {
  if (rf & 1) {
    const _r84 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "tr", 86)(1, "td", 77)(2, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](3, "Switch To Fund");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](4, "ion-select", 87, 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("ionChange", function FundSwitchingPage_section_11_tr_47_Template_ion_select_ionChange_4_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r84);
      const i_r74 = restoredCtx.index;
      const _r75 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵreference"](5);
      const ctx_r83 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r83.onFundToChange(_r75, i_r74));
    })("open", function FundSwitchingPage_section_11_tr_47_Template_ion_select_open_4_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r84);
      const ctx_r85 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r85.changeJunkChar("ng-option-label"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](6, FundSwitchingPage_section_11_tr_47_ion_select_option_6_Template, 2, 2, "ion-select-option", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](7, "td", 77)(8, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](9, "Switching %");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](10, "ion-input", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("ionBlur", function FundSwitchingPage_section_11_tr_47_Template_ion_input_ionBlur_10_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r84);
      const i_r74 = restoredCtx.index;
      const ctx_r86 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r86.percentageToChanged(i_r74));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](11, "td", 77)(12, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](13, "Fund Value (RM)");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](14, "div", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](16, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](17, FundSwitchingPage_section_11_tr_47_i_17_Template, 1, 0, "i", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const toFund_r73 = ctx.$implicit;
    const i_r74 = ctx.index;
    const ctx_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("formGroupName", i_r74);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("interfaceOptions", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpureFunction0"](12, _c2))("searchable", false)("clearable", false);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngForOf", ctx_r56.unitFunds);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("formGroupName", i_r74);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("formGroupName", i_r74);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind2"](16, 9, toFund_r73.value["value"], ".1-2"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r56.FundSwitchingParticularsForm.controls.switchToFunds.length > 1);
  }
}
function FundSwitchingPage_section_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r88 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "section", 59)(1, "form", 12)(2, "div", 60)(3, "ion-item", 32)(4, "ion-label", 61)(5, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](6, "Fund Allocation");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](7, "ion-grid")(8, "ion-row", 62)(9, "ion-col", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](10, "Fund Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](11, "ion-col", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](12, "Fund Price (RM)");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](13, "ion-col", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](14, "No. of Units");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](15, "ion-col", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](16, "Total Units Value (RM)");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](17, FundSwitchingPage_section_11_ion_row_17_Template, 9, 4, "ion-row", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](18, "p", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](19, "* Fund values are indicative and may vary based on market performance");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](20, "ion-item", 32)(21, "ion-label", 61)(22, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](23, "Select Funds For Switching");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](24, "div", 66)(25, "table", 67)(26, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](27, FundSwitchingPage_section_11_tr_27_Template, 18, 11, "tr", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](28, "div", 69)(29, "ion-button", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function FundSwitchingPage_section_11_Template_ion_button_click_29_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r88);
      const ctx_r87 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r87.addSwitchFromRow());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](30, "Add");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](31, "ion-item", 32)(32, "ion-label", 61)(33, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](34, "Total Fund Switching Amount");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](35, "div", 71)(36, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](37, "RM");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](38);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](39, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](40, "ion-item", 32)(41, "ion-label", 61)(42, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](43, "Fund Switching Particulars");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](44, "div", 66)(45, "table", 67)(46, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](47, FundSwitchingPage_section_11_tr_47_Template, 18, 13, "tr", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](48, "div", 69)(49, "ion-button", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function FundSwitchingPage_section_11_Template_ion_button_click_49_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r88);
      const ctx_r89 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r89.addSwitchToRow());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](50, "Add");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](51, "div", 74)(52, "ion-button", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function FundSwitchingPage_section_11_Template_ion_button_click_52_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r88);
      const ctx_r90 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r90.checkFundSwitchFormValid());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](53, "Continue");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("formGroup", ctx_r4.FundSwitchingParticularsForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngForOf", ctx_r4.presetFunds);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngForOf", ctx_r4.FundSwitchingParticularsForm.controls.switchFromFunds.controls);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind2"](39, 7, ctx_r4.totalSelectedFromSwitchingFund, ".1-2"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngForOf", ctx_r4.FundSwitchingParticularsForm.controls.switchToFunds.controls);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("disabled", ctx_r4.FundSwitchingParticularsForm.controls.switchToFunds.length == ctx_r4.unitFunds.length || ctx_r4.allocationFull);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("disabled", ctx_r4.FundSwitchingParticularsForm.pristine || !ctx_r4.FundSwitchingParticularsForm.valid || !ctx_r4.allocationFull);
  }
}
function FundSwitchingPage_section_12_tr_30_ion_select_option_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "ion-select-option", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const funds_r97 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("value", funds_r97.fundName);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", funds_r97.fundName, " ");
  }
}
function FundSwitchingPage_section_12_tr_30_i_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r101 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "i", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function FundSwitchingPage_section_12_tr_30_i_8_Template_i_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r101);
      const i_r93 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]().index;
      const ctx_r99 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r99.removeRow(i_r93));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
}
function FundSwitchingPage_section_12_tr_30_Template(rf, ctx) {
  if (rf & 1) {
    const _r103 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "tr", 94)(1, "td", 77)(2, "ion-select", 95, 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("ionChange", function FundSwitchingPage_section_12_tr_30_Template_ion_select_ionChange_2_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r103);
      const i_r93 = restoredCtx.index;
      const _r94 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵreference"](3);
      const ctx_r102 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r102.onFundChange(_r94, i_r93));
    })("open", function FundSwitchingPage_section_12_tr_30_Template_ion_select_open_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r103);
      const ctx_r104 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r104.changeJunkChar("ng-option-label"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](4, FundSwitchingPage_section_12_tr_30_ion_select_option_4_Template, 2, 2, "ion-select-option", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](5, "td", 77)(6, "div", 96)(7, "ion-input", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("ionBlur", function FundSwitchingPage_section_12_tr_30_Template_ion_input_ionBlur_7_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r103);
      const ctx_r105 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r105.amountChanged());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](8, FundSwitchingPage_section_12_tr_30_i_8_Template, 1, 0, "i", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const i_r93 = ctx.index;
    const ctx_r91 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("formGroupName", i_r93);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("interfaceOptions", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpureFunction0"](7, _c2))("searchable", false)("clearable", false);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngForOf", ctx_r91.unitFunds);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("formGroupName", i_r93);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r91.RedirectionParticularsForm.controls.fund.length > 1);
  }
}
function FundSwitchingPage_section_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r107 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "section", 59)(1, "form", 12)(2, "div", 60)(3, "ion-item", 32)(4, "ion-label")(5, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](6, "Payment Frequency");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](7, "div", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](9, "ion-item", 32)(10, "ion-label", 61)(11, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](12, "Premium Amount");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](13, "div", 71)(14, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](15, "RM");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](17, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](18, "ion-item", 89)(19, "ion-label", 61)(20, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](21, "Premium/Contribution redirection Particulars");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](22, "table", 90)(23, "thead")(24, "tr")(25, "th", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](26, "Redirect To Fund");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](27, "th", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](28, "Allocation %");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](29, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](30, FundSwitchingPage_section_12_tr_30_Template, 9, 8, "tr", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](31, "div", 69)(32, "ion-button", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function FundSwitchingPage_section_12_Template_ion_button_click_32_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r107);
      const ctx_r106 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r106.addRow());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](33, "Add");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](34, "div", 74)(35, "ion-button", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function FundSwitchingPage_section_12_Template_ion_button_click_35_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r107);
      const ctx_r108 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r108.checkFormValid());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](36, "Continue");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("formGroup", ctx_r5.RedirectionParticularsForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](ctx_r5.paymentFrequency);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind2"](17, 6, ctx_r5.premiumAmount, ".1-2"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngForOf", ctx_r5.RedirectionParticularsForm.controls.fund.controls);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("disabled", ctx_r5.RedirectionParticularsForm.controls.fund.length == ctx_r5.unitFunds.length || ctx_r5.redirectionAllocationFull);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("disabled", ctx_r5.RedirectionParticularsForm.pristine || !ctx_r5.RedirectionParticularsForm.valid);
  }
}
function FundSwitchingPage_section_13_ion_row_145_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "ion-row", 114)(1, "ion-col", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](3, "ion-col", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](5, "ion-col", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](7, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const fromFunds_r113 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](fromFunds_r113.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](fromFunds_r113.percentage);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind2"](7, 3, fromFunds_r113.value, ".1-2"));
  }
}
function FundSwitchingPage_section_13_ion_row_158_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "ion-row", 114)(1, "ion-col", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](3, "ion-col", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](5, "ion-col", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](7, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const toFunds_r115 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](toFunds_r115.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](toFunds_r115.percentage);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind2"](7, 3, toFunds_r115.value, ".1-2"));
  }
}
function FundSwitchingPage_section_13_h5_159_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1, "Premium/Contribution redirection Particulars");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
}
function FundSwitchingPage_section_13_div_160_table_16_tr_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "tr")(1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](3, "td", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const funds_r119 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", funds_r119.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", funds_r119.allocationPercentage, " ");
  }
}
function FundSwitchingPage_section_13_div_160_table_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "table", 90)(1, "thead")(2, "tr")(3, "th", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](4, "Redirect To Fund");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](5, "th", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](6, "Allocation %");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](7, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](8, FundSwitchingPage_section_13_div_160_table_16_tr_8_Template, 5, 2, "tr", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r117 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngForOf", ctx_r117.selectedFundArray);
  }
}
function FundSwitchingPage_section_13_div_160_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 99)(1, "ion-item", 32)(2, "ion-label", 61)(3, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](4, "Payment Frequency");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](5, "div", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](7, "ion-item", 32)(8, "ion-label", 61)(9, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](10, "Premium Amount");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](11, "div", 71)(12, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](13, "RM");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](15, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](16, FundSwitchingPage_section_13_div_160_table_16_Template, 9, 1, "table", 115);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r112 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](ctx_r112.paymentFrequency);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind2"](15, 3, ctx_r112.premiumAmount, ".1-2"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", !ctx_r112.nonILP);
  }
}
function FundSwitchingPage_section_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r122 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "section", 98)(1, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](2, "Policy Details");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](3, "div", 99)(4, "ion-item", 32)(5, "ion-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](6, "Policy Number ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](7, "div", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](9, "ion-item", 32)(10, "ion-label", 61)(11, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](12, "Plan");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](13, "div", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](15, "ion-item", 32)(16, "ion-label", 61)(17, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](18, "Policy Holder Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](19, "div", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](21, "ion-item", 32)(22, "ion-label", 61)(23, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](24, "Life Assured Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](25, "div", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](26);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](27, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](28, "Personal Details");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](29, "div", 99)(30, "ion-item", 32)(31, "ion-label", 61)(32, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](33, "Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](34, "div", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](35);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](36, "ion-item", 32)(37, "ion-label", 61)(38, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](39, "Identity Number");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](40, "div", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](41);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](42, "ion-item", 32)(43, "ion-label", 61)(44, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](45, "Date of Birth");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](46, "div", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](47);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](48, "ion-item", 32)(49, "ion-label", 61)(50, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](51, "Race");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](52, "div", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](53);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](54, "ion-item", 32)(55, "ion-label", 61)(56, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](57, "Nationality");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](58, "div", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](59);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](60, "ion-item", 32)(61, "ion-label", 61)(62, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](63, "Occupation");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](64, "div", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](65);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](66, "ion-item", 32)(67, "ion-label", 61)(68, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](69, "Nature of Business");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](70, "div", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](71);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](72, "ion-item", 32)(73, "ion-label", 61)(74, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](75, "Contact Number");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](76, "div", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](77);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](78, "div", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](79);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](80, "div", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](81);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](82, "div", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](83);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](84, "ion-item", 32)(85, "ion-label", 61)(86, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](87, "Email Address");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](88, "div", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](89);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](90, "ion-item", 32)(91, "ion-label", 61)(92, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](93, "Permanent Address");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](94, "div", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](95);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](96, "div", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](97);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](98, "div", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](99);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](100, "div", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](101);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](102, "div", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](103);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](104, "div", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](105);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](106, "ion-item", 32)(107, "ion-label", 61)(108, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](109, "Correspondence Address");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](110, "div", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](111);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](112, "div", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](113);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](114, "div", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](115);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](116, "div", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](117);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](118, "div", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](119);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](120, "div", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](121);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](122, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](123, "Fund Switching Particulars");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](124, "ion-item", 32)(125, "ion-label", 61)(126, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](127, "Total Fund Switching Amount");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](128, "div", 71)(129, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](130, "RM");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](131);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](132, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](133, "ion-item", 32)(134, "ion-label", 61)(135, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](136, "Selected Funds For Switching");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](137, "ion-grid")(138, "ion-row", 100)(139, "ion-col", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](140, "Fund Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](141, "ion-col", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](142, "Switching %");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](143, "ion-col", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](144, "Switching Value (RM)");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](145, FundSwitchingPage_section_13_ion_row_145_Template, 8, 6, "ion-row", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](146, "ion-item", 32)(147, "ion-label", 61)(148, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](149, "Fund Switching Particulars");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](150, "ion-grid")(151, "ion-row", 100)(152, "ion-col", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](153, "Switch To Fund");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](154, "ion-col", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](155, "Switching %");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](156, "ion-col", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](157, "Fund Value (RM)");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](158, FundSwitchingPage_section_13_ion_row_158_Template, 8, 6, "ion-row", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](159, FundSwitchingPage_section_13_h5_159_Template, 2, 0, "h5", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](160, FundSwitchingPage_section_13_div_160_Template, 17, 6, "div", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](161, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](162, "Declaration");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](163, "form", 12)(164, "div", 104)(165, "p")(166, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](167, "Foreign Account Tax Compliance Act (FATCA) and Common Reporting Standard (CRS) Declaration:");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](168, "ion-radio-group", 105)(169, "ion-row")(170, "ion-col", 106);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](171, "ion-radio", 107);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](172, "ion-col", 108)(173, "ion-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](174, "I declare that I am a U.S. citizen, a holder of a U.S. Permanent Resident Card, and/or a tax resident in any country other than Malaysia. I understand that I am required to submit the ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](175, "a", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function FundSwitchingPage_section_13_Template_a_click_175_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r122);
      const ctx_r121 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r121.downloadForm("https://www.sunlifemalaysia.com/getmedia/aef55903-a40e-4991-b18c-d17661ad211e/US-FATCA-AND-OECD-CRS-INDIVIDUAL-SELF-CERTIFICATION"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](176, "\"Self-Certification U.S. FATCA and OECD CRS\"");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](177, " form to the Company which may be downloaded from the Company website at: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](178, "a", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function FundSwitchingPage_section_13_Template_a_click_178_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r122);
      const ctx_r123 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r123.openBrowserSite());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](179, "www.sunlifemalaysia.com.");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](180, "ion-row")(181, "ion-col", 106);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](182, "ion-radio", 109);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](183, "ion-col", 108)(184, "ion-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](185, "I declare that I am not a U.S. citizen, a holder of a U.S. Permanent Resident Card, or a tax resident in any country other than Malaysia.");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](186, "hr")(187, "div", 110);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](188, "ion-row")(189, "ion-col", 106)(190, "ion-checkbox", 111);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("ionChange", function FundSwitchingPage_section_13_Template_ion_checkbox_ionChange_190_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r122);
      const ctx_r124 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r124.checkboxChange($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](191, "ion-col", 108)(192, "ion-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](193, "I (USER) hereby declare that I fully and clearly understand the ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](194, "a", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function FundSwitchingPage_section_13_Template_a_click_194_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r122);
      const ctx_r125 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r125.openDeclaration());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](195, "u");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](196, "declaration details");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](197, " and submitting this request. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](198, "div", 112)(199, "ion-button", 113);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function FundSwitchingPage_section_13_Template_ion_button_click_199_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r122);
      const ctx_r126 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r126.submiRedirectionForm());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](200, "Submit");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](ctx_r6.selectedPolicy.policyNumber);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](ctx_r6.selectedPolicy.planName);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](ctx_r6.selectedPolicy.ownerName);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](ctx_r6.selectedPolicy.lifeAssuredName);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](ctx_r6.prePersonalData.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](ctx_r6.prePersonalData.identityNo);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](ctx_r6.prePersonalData.dateOfBirth.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](ctx_r6.prePersonalData.race.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](ctx_r6.prePersonalData.nationality.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](ctx_r6.prePersonalData.occupation.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](ctx_r6.prePersonalData.natureOfBusiness.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"]("Mobile Number: ", ctx_r6.prePersonalData.contactNumbers.value.mobileNumber, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"]("Office Number: ", ctx_r6.prePersonalData.contactNumbers.value.officeNumber, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"]("Home Number: ", ctx_r6.prePersonalData.contactNumbers.value.homeNumber, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"]("Other Number: ", ctx_r6.prePersonalData.contactNumbers.value.otherNumber, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](ctx_r6.prePersonalData.emailAddress.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](ctx_r6.prePersonalData.permanentAddress.value.addressLine1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](ctx_r6.prePersonalData.permanentAddress.value.addressLine2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](ctx_r6.prePersonalData.permanentAddress.value.addressLine3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](ctx_r6.prePersonalData.permanentAddress.value.postCode);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](ctx_r6.prePersonalData.permanentAddress.value.state);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](ctx_r6.prePersonalData.permanentAddress.value.country);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](ctx_r6.prePersonalData.correspondenceAddress.value[0].addressLine1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](ctx_r6.prePersonalData.correspondenceAddress.value[0].addressLine2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](ctx_r6.prePersonalData.correspondenceAddress.value[0].addressLine3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](ctx_r6.prePersonalData.correspondenceAddress.value[0].postCode);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](ctx_r6.prePersonalData.correspondenceAddress.value[0].state);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](ctx_r6.prePersonalData.correspondenceAddress.value[0].country);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind2"](132, 37, ctx_r6.totalSelectedFromSwitchingFund, ".1-2"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngForOf", ctx_r6.selectedFromfundsArray);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngForOf", ctx_r6.selectedTofundsArray);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r6.premiumRedirectionUpdated);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r6.premiumRedirectionUpdated);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("formGroup", ctx_r6.fundSwitchingForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](27);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("disabled", ctx_r6.tnCDisabled)("checked", ctx_r6.termsCheckbox);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("disabled", ctx_r6.fundSwitchingForm.pristine || !ctx_r6.fundSwitchingForm.valid || ctx_r6.tnCDisabled || !ctx_r6.termsCheckbox);
  }
}
class FundSwitchingPage {
  constructor(fb, modalController, utils, logger,
  // public events: Events,
  alertCtrl, translate, config, unitPriceList, fundSwitchingService, router) {
    this.fb = fb;
    this.modalController = modalController;
    this.utils = utils;
    this.logger = logger;
    this.alertCtrl = alertCtrl;
    this.translate = translate;
    this.config = config;
    this.unitPriceList = unitPriceList;
    this.fundSwitchingService = fundSwitchingService;
    this.router = router;
    this.selectedTab1 = false;
    this.selectedTab2 = false;
    this.selectedTab3 = false;
    this.selectedTab4 = false;
    this.updatedPersonalData = {};
    this.tnCDisabled = true;
    this.nonILP = false;
    this.minWithdrawalAmount = 0;
    this.maxWithdrawalAmount = 0;
    this.termsCheckbox = false;
    this.allocationPercentage = 0;
    this.selectedFundArray = [];
    this.selectedfundName = [];
    this.notMyNumber = false;
    this.totalAllocationValue = 0;
    this.unitFunds = [];
    this.presetFunds = [];
    this.selectedFromfundName = [];
    this.selectedTofundName = [];
    this.totalSelectedFromSwitchingFund = 0;
    this.selectedFromfundsArray = [];
    this.selectedTofundsArray = [];
    this.introJS = intro_js_intro_js__WEBPACK_IMPORTED_MODULE_0__();
    this.config.currentPage.pageName = "FundSwitchingPage";
    //this.config.userInfo.contactNumber = "6666652575";
    this.phoneNumber = this.config.userInfo.contactNumber;
    this.maskedPhoneNumber = this.config.userInfo.maskedContactNumber;
    this.validateFundSwitchingForm = fb.group({
      policyNumber: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_12__.Validators.required]]
    });
    this.fundSwitchingForm = fb.group({
      declaration: [0, [_angular_forms__WEBPACK_IMPORTED_MODULE_12__.Validators.required]],
      termsAndConditions: [false, [_angular_forms__WEBPACK_IMPORTED_MODULE_12__.Validators.required]]
    });
    this.FundSwitchingParticularsForm = this.fb.group({
      switchFromFunds: this.fb.array([this.initAttchmentFields()]),
      switchToFunds: this.fb.array([this.initAttchmentFields()])
    });
    this.RedirectionParticularsForm = this.fb.group({
      fund: this.fb.array([this.initPremiumAttchmentFields()])
    });
    // this.unitFunds=[
    //   {
    //     "fundName": "fund name 1",
    //     "fundType": "takaful",
    //     "fundDate": "2131",
    //     "nav": "12"
    //   },{
    //     "fundName": "fund name 2",
    //     "fundType": "takaful",
    //     "fundDate": "2131",
    //     "nav": "12"
    //   },{
    //     "fundName": "fund name 3",
    //     "fundType": "takaful",
    //     "fundDate": "2131",
    //     "nav": "12"
    //   },{
    //     "fundName": "fund name 4",
    //     "fundType": "takaful",
    //     "fundDate": "2131",
    //     "nav": "12"
    //   },{
    //     "fundName": "fund name 5",
    //     "fundType": "takaful",
    //     "fundDate": "2131",
    //     "nav": "12"
    //   },{
    //     "fundName": "fund name 6",
    //     "fundType": "takaful",
    //     "fundDate": "2131",
    //     "nav": "12"
    //   }
    // ]
    // this.presetFunds=[
    //   {
    //     "name": "SLM Balanced Aggressive_01",
    //     "code": "BALA",
    //     "price": "1.00",
    //     "units": "4317.44200",
    //     "value": "4317.44",
    //     "rider": "00"
    //   },
    //   {
    //     "name": "SLM Balanced Aggressive_011",
    //     "code": "BALA",
    //     "price": "1.00",
    //     "units": "4217.44200",
    //     "value": "4217.44",
    //     "rider": "00"
    //   }, {
    //     "name": "SLM Balanced Aggressive_012",
    //     "code": "BALA",
    //     "price": "1.00",
    //     "units": "4117.44200",
    //     "value": "4117.44",
    //     "rider": "00"
    //   }, {
    //     "name": "SLM Balanced Aggressive_013",
    //     "code": "BALA",
    //     "price": "1.00",
    //     "units": "4517.44200",
    //     "value": "4517.44",
    //     "rider": "00"
    //   }, {
    //     "name": "SLM Balanced Aggressive_014",
    //     "code": "BALA",
    //     "price": "1.00",
    //     "units": "4617.44200",
    //     "value": "4617.44",
    //     "rider": "00"
    //   },
    // ]
    // this.utils.rxjsObject.subscribe(data=>{
    //   this.updatedPersonalData = data.updateDateObj;
    //     this.prePersonalData = data.personalData;
    //     this.personalDataUpdatedorNot = data.updatedorNot;
    //     setTimeout(() => {
    //       this.tabSwitch("tab2");
    //     }, 100);
    //   })
    // this.utils.rxjsObject.subscribe(
    //   (updatedPersonalData, prePersonalData, updatedorNot) => {
    //     this.updatedPersonalData = updatedPersonalData;
    //     this.prePersonalData = prePersonalData;
    //     this.personalDataUpdatedorNot = updatedorNot;
    //     setTimeout(() => {
    //       this.tabSwitch("tab2");
    //     }, 100);
    //   }
    // );
    // // this.utilServices.component.emit(MenuOptions.CONTACT_US);
    // this.utilServices.getObservable().subscribe((data) => {
    //   if (data.user === "personalDataUpdated") {
    //     // alert()
    //     console.log('data',JSON.stringify(data.data[0]['updateDateObj']))
    //     // this.updatedPersonalData = data.updateDateObj;
    //     //     this.prePersonalData = data.personalData;
    //     //     this.personalDataUpdatedorNot = data.updatedorNot;
    //     //     setTimeout(() => {
    //     //       this.tabSwitch("tab2");
    //     //     }, 100);
    //       }
    //     });
    this.utils.getObservable().subscribe(data => {
      if (data.user === "personalDataUpdated") {
        //alert(JSON.stringify(data))
        console.log('data', data);
        this.updatedPersonalData = data.data[0].updateDateObj;
        this.prePersonalData = data.data[0].personalData;
        this.personalDataUpdatedorNot = data.data[0].updatedorNot;
        setTimeout(() => {
          this.tabSwitch("tab2");
        }, 100);
      }
    });
  }
  ngOnInit() {
    console.log('fund--swtcing--policy--list', this.policyList);
    this.policyList = this.config.policyList;
  }
  ngAfterViewInit() {
    setTimeout(() => {
      this.introJS.start();
    }, 2000);
  }
  ionViewDidLoad() {
    console.log("ionViewDidLoad PartialWithdrawalPage");
    this.navBar.backButtonClick = ev => {
      if (this.onlineSubmissionAllowed) {
        this.pageLeaveDialog("Attention", "Changes are not saved. Are you sure you do not want to proceed?");
      } else {
        // this.navCtrl.push(ServicePage);
        this.router.navigate(['/service']);
      }
    };
  }
  pageLeaveDialog(title, message) {
    return (0,tslib__WEBPACK_IMPORTED_MODULE_13__.__awaiter)(this, void 0, void 0, function* () {
      return new Promise(resolve => (0,tslib__WEBPACK_IMPORTED_MODULE_13__.__awaiter)(this, void 0, void 0, function* () {
        let buttons = [{
          text: "Yes",
          handler: () => {
            // this.navCtrl.push(ServicePage);
            this.router.navigate(['/service']);
          }
        }, {
          text: "No",
          handler: () => {}
        }];
        const alert = this.alertCtrl.create({
          header: title,
          message: message,
          buttons: buttons,
          backdropDismiss: false
        }).then(alert => alert.present());
      }));
    });
  }
  validatePolicy() {
    if (this.utils.isDeviceOnLine()) {
      this.utils.showProgressLoader();
      if (this.validateFundSwitchingForm.valid) {
        let formData = JSON.parse(JSON.stringify(this.validateFundSwitchingForm.value));
        console.log('formData', formData);
        //   this.receivedPolicyvalidation=true;
        //   this.onlineSubmissionAllowed=true;
        //   this.utils.dissmisProgressLoader();
        //  // this.showTACDisclaimerPage=true;
        //   this.TACVarified = true;
        //   this.TandCVarified = true;
        //   this.isEditable = false;
        //   this.selectedTab2 = true;
        this.fundSwitchingService.validateFundSwitch(formData.policyNumber.encryptedPolicyNumber).then(res => {
          try {
            this.utils.dissmisProgressLoader();
            if (res["responseJSON"]["statusCode"] == http_status_codes__WEBPACK_IMPORTED_MODULE_14__.ACCEPTED || res["responseJSON"]["statusCode"] == http_status_codes__WEBPACK_IMPORTED_MODULE_14__.OK) {
              this.receivedPolicyvalidation = true;
              if (res["responseJSON"]["success"]) {
                this.onlineSubmissionAllowed = true;
                this.showTACDisclaimerPage = true;
                this.presetFunds = res["responseJSON"]["funds"];
                console.log('this.presetFunds', this.presetFunds);
                console.log('presetFunds', res["responseJSON"]["funds"]);
                this.getUnitFunds();
                this.premiumRediretionPossible = res["responseJSON"]["premiumRedirectionCheck"]["success"];
                if (this.premiumRediretionPossible) {
                  this.paymentFrequency = res["responseJSON"]["premiumRedirectionCheck"]["paymentFrequency"];
                  this.premiumAmount = res["responseJSON"]["premiumRedirectionCheck"]["premium"];
                }
              } else {
                if (res["responseJSON"]["reason"] === "NotApplicable") {
                  this.serviceRequestNotApplicable = true;
                  this.whyNotApplicableMsg = res["responseJSON"]["message"] || "Fund switching is not applicable for this Plan.";
                }
                if (res["responseJSON"]["reason"] === "NotAllowed") {
                  this.onlineSubmissionAllowed = false;
                  this.whyNotAllowedMsg = res["responseJSON"]["message"];
                  this.manualRequestFormLink = res["responseJSON"]["link"];
                }
                if (res["responseJSON"]["reason"] === "CannotSubmit") {
                  this.canNotSubmitted = true;
                  this.whyCantSubmittedMsg = res["responseJSON"]["message"];
                }
                if (res["responseJSON"]["reason"] === "DuplicateRequest") {
                  this.receivedPolicyvalidation = false;
                  this.successDialog("", res["responseJSON"]["message"]);
                }
              }
            } else {
              let errorMsg = res["responseJSON"]["message"] || res["responseJSON"]["userMessage"] || this.translate.instant("generic_msgs.server_err");
              this.showDialog("", errorMsg);
            }
          } catch (e) {
            this.logger.error("loginSuccess catch eror : " + JSON.stringify(e));
            this.utils.dissmisProgressLoader();
            let errorMessage = this.translate.instant("generic_msgs.server_err");
            this.utils.showAlert("", errorMessage);
          }
        }, err => {
          let errorMessage;
          this.utils.dissmisProgressLoader();
          errorMessage = this.utils.handleServiceException(err);
          this.utils.showAlert("", errorMessage);
        });
      }
    } else {
      this.utils.dissmisProgressLoader();
      let errorMessage = this.translate.instant("generic_msgs.network_err");
      this.utils.showAlert("", errorMessage);
    }
  }
  downloadForm(Formlink) {
    this.utils.openLink(Formlink);
  }
  downloadManualForm() {
    this.utils.openLink(this.manualRequestFormLink);
  }
  downloadAlterationForm() {
    this.utils.openLink(this.config.alterationRequestFormLink);
  }
  emailCompose() {
    this.utils.emailCompose(this.config.contact_us.emailId);
  }
  emailComposewithSubject(subject) {
    this.utils.emailComposewithSubject(this.config.contact_us.emailId, subject);
  }
  continueToUpdate() {
    this.openTandC();
  }
  updateNumber() {
    this.notMyNumber = true;
  }
  // async tacPopupModal() {
  //   const modal = await this.modalController.create(
  //     TacPopupPage,
  //     {},
  //     { enableBackdropDismiss: false }
  //   );
  //   modal.onDidDismiss((data) => {
  //     if (data && data.TACVarified) {
  //       this.showTACDisclaimerPage = false;
  //       this.TACVarified = true;
  //       this.TandCVarified = true;
  //       this.isEditable = false;
  //       this.selectedTab1 = true;
  //     }
  //   });
  //   return await modal.present();
  // }
  tacPopupModal() {
    return (0,tslib__WEBPACK_IMPORTED_MODULE_13__.__awaiter)(this, void 0, void 0, function* () {
      const modal = yield this.modalController.create({
        component: _tac_popup_tac_popup_page__WEBPACK_IMPORTED_MODULE_3__.TacPopupPage,
        cssClass: 'custom-modal',
        backdropDismiss: false
      });
      modal.onDidDismiss().then(data => {
        console.log(data);
        if (data && data.data.TACVarified) {
          this.showTACDisclaimerPage = false;
          this.TACVarified = true;
          this.TandCVarified = true;
          this.isEditable = false;
          this.selectedTab1 = true;
        }
      });
      return yield modal.present();
    });
  }
  // async openTandC() {
  //   let modal = this.modalController.create(
  //     TermsAndConditionPage,
  //     {
  //       pageName: "fund-switching",
  //     },
  //     { enableBackdropDismiss: false }
  //   );
  //   modal.onDidDismiss((data) => {
  //     if (data && data.termsAndConditionsChecked) {
  //       this.tacPopupModal();
  //     }
  //   });
  //   modal.present();
  // }
  openkaran() {
    return (0,tslib__WEBPACK_IMPORTED_MODULE_13__.__awaiter)(this, void 0, void 0, function* () {
      const modal = yield this.modalController.create({
        component: _terms_and_condition_terms_and_condition_page__WEBPACK_IMPORTED_MODULE_2__.TermsAndConditionPage,
        backdropDismiss: false,
        cssClass: 'custom-modal',
        componentProps: {
          pageName: "fund-switching"
        }
      });
      modal.onDidDismiss().then(data => {
        console.log(data);
        if (data && data.data.termsAndConditionsChecked) {
          this.tacPopupModal();
        }
      });
      return yield modal.present();
    });
  }
  openTandC() {
    return (0,tslib__WEBPACK_IMPORTED_MODULE_13__.__awaiter)(this, void 0, void 0, function* () {
      const modal = yield this.modalController.create({
        component: _terms_and_condition_terms_and_condition_page__WEBPACK_IMPORTED_MODULE_2__.TermsAndConditionPage,
        backdropDismiss: false,
        cssClass: 'custom-modal',
        componentProps: {
          pageName: "fund-switching"
        }
      });
      modal.onDidDismiss().then(data => {
        console.log(data);
        if (data && data.data.termsAndConditionsChecked) {
          this.tacPopupModal();
        }
      });
      return yield modal.present();
    });
  }
  onSelectPolicy(selectedPolicy) {
    console.log('selectedPolicy', selectedPolicy);
    this.selectedPolicy = selectedPolicy;
    this.selectedPolicyNumber = selectedPolicy.policyNumber;
    this.selectedEncryptedPolicy = selectedPolicy.encryptedPolicyNumber;
    this.selectedPolicyType = selectedPolicy.planType;
  }
  checkboxChange(checked) {
    console.log('checked', checked.detail.checked);
    this.termsCheckbox = checked.detail.checked;
  }
  tabSwitch(tabName) {
    console.log('tabName', tabName);
    // this.content.scrollToTop();
    console.log(this.updatedPersonalData);
    if (tabName == "tab1") {
      if (Object.keys(this.updatedPersonalData).length > 0) {
        this.isEditable = true;
      }
      this.selectedTab1 = true;
      this.selectedTab2 = false;
      this.selectedTab3 = false;
      this.selectedTab4 = false;
      this.showLastTab = false;
    } else if (tabName == "tab2") {
      if (Object.keys(this.prePersonalData).length > 0) {
        this.selectedTab2 = true;
        this.selectedTab1 = false;
        this.selectedTab3 = false;
        this.selectedTab4 = false;
        this.showLastTab = false;
      }
    } else if (tabName == "tab3") {
      if (Object.keys(this.prePersonalData).length > 0) {
        this.selectedTab3 = true;
        this.selectedTab1 = false;
        this.selectedTab2 = false;
        this.selectedTab4 = false;
        this.showLastTab = true;
      }
    } else if (tabName == "tab4") {
      if (Object.keys(this.prePersonalData).length > 0) {
        this.selectedTab4 = true;
        this.selectedTab3 = false;
        this.selectedTab1 = false;
        this.selectedTab2 = false;
        this.showLastTab = true;
      }
    }
  }
  submiRedirectionForm() {
    let fundSwitchingData = JSON.parse(JSON.stringify(this.fundSwitchingForm.value));
    fundSwitchingData["policyNumber"] = this.selectedPolicyNumber;
    fundSwitchingData["switchFromFunds"] = this.FundSwitchingParticularsForm.controls["switchFromFunds"].value;
    fundSwitchingData["switchToFunds"] = this.FundSwitchingParticularsForm.controls["switchToFunds"].value;
    if (this.premiumRediretionPossible && this.premiumRedirectionUpdated && this.RedirectionParticularsForm.controls["fund"].value.length > 0) {
      fundSwitchingData["premiumRedirectionFunds"] = this.RedirectionParticularsForm.controls["fund"].value;
    }
    if (this.personalDataUpdatedorNot && Object.keys(this.updatedPersonalData).length > 0) {
      fundSwitchingData["personalDetails"] = this.updatedPersonalData;
    }
    this.submitRedirectionRequest(fundSwitchingData);
  }
  // async openDeclaration() {
  //   this.tnCDisabled = false;
  //   let modal = this.modalController.create(DeclarationDetailsPage, {
  //     pageName: "fund-switching",
  //   });
  //   modal.onDidDismiss((data) => {
  //     console.log(data);
  //   });
  //   modal.present();
  // }
  openDeclaration() {
    return (0,tslib__WEBPACK_IMPORTED_MODULE_13__.__awaiter)(this, void 0, void 0, function* () {
      this.tnCDisabled = false;
      const modal = yield this.modalController.create({
        component: _declaration_details_declaration_details_page__WEBPACK_IMPORTED_MODULE_4__.DeclarationDetailsPage,
        cssClass: 'custom-modal',
        componentProps: {
          pageName: "fund-switching"
        }
      });
      modal.onDidDismiss().then(data => {
        console.log(data);
      });
      return yield modal.present();
    });
  }
  submitRedirectionRequest(fundSwitchingData) {
    this.successDialog("Success", "successMsg");
    // this.utils.showProgressLoader();
    // if (this.utils.isDeviceOnLine()) {
    //   this.fundSwitchingService.sunbmitFundSwitching(fundSwitchingData).then(
    //     (res) => {
    //       try {
    //         this.utils.dissmisProgressLoader();
    //         if (res["responseJSON"]) {
    //           if (
    //             res["responseJSON"]["statusCode"] == HttpStatus.ACCEPTED ||
    //             res["responseJSON"]["statusCode"] == HttpStatus.OK
    //           ) {
    //             let successMsg =
    //               res["responseJSON"]["userMessage"] ||
    //               this.translate.instant("generic_msgs.server_err");
    //             this.successDialog("Success", successMsg);
    //           } else {
    //             let errorMsg =
    //               res["responseJSON"]["Message"] ||
    //               res["responseJSON"]["userMessage"] ||
    //               this.translate.instant("generic_msgs.server_err");
    //             this.showDialog("", errorMsg);
    //           }
    //         } else {
    //           let errorMsg = this.translate.instant("generic_msgs.server_err");
    //           this.showDialog("", errorMsg);
    //         }
    //       } catch (e) {
    //         this.logger.error(
    //           "sunbmitSurrender catch eror : " + JSON.stringify(e)
    //         );
    //         this.utils.dissmisProgressLoader();
    //         let errorMessage = this.translate.instant(
    //           "generic_msgs.server_err"
    //         );
    //         this.utils.showAlert("", errorMessage);
    //       }
    //     },
    //     (err) => {
    //       let errorMessage;
    //       this.utils.dissmisProgressLoader();
    //       errorMessage = this.utils.handleServiceException(err);
    //       this.utils.showAlert("", errorMessage);
    //     }
    //   );
    // } else {
    //   this.utils.dissmisProgressLoader();
    //   let errorMessage = this.translate.instant("generic_msgs.network_err");
    //   this.utils.showAlert("", errorMessage);
    // }
  }

  openBrowserSite() {
    this.utils.launchExternalApp("", "", "", this.config.contact_us.sunlife_fatca);
  }
  showDialog(title, message) {
    let buttons = [{
      text: "ok",
      handler: () => {}
    }];
    let alert = this.alertCtrl.create({
      header: title,
      message: message,
      buttons: buttons,
      backdropDismiss: false
    }).then(alert => alert.present());
  }
  premiumContributionDialog(title, message) {
    let buttons = [{
      text: "Yes",
      handler: () => {
        this.showpremiumRedirectTandC();
      }
    }, {
      text: "No & Continue",
      handler: () => {
        this.showPremiumTab = false;
        this.premiumRedirectionUpdated = false;
        this.tabSwitch('tab4');
      }
    }];
    let alert = this.alertCtrl.create({
      header: title,
      message: message,
      buttons: buttons,
      backdropDismiss: false
    }).then(alert => alert.present());
  }
  // showpremiumRedirectTandC() {
  //   let modal = this.modalController.create(
  //     TermsAndConditionPage,
  //     {
  //       pageName: "premium-redirection",
  //     },
  //     { enableBackdropDismiss: false }
  //   );
  //   modal.onDidDismiss((data) => {
  //     if (data && data.termsAndConditionsChecked) {
  //       this.showPremiumTab=true;
  //       this.tabSwitch('tab3')
  //     }
  //   });
  //   modal.present();
  // }
  showpremiumRedirectTandC() {
    return (0,tslib__WEBPACK_IMPORTED_MODULE_13__.__awaiter)(this, void 0, void 0, function* () {
      const modal = yield this.modalController.create({
        component: _terms_and_condition_terms_and_condition_page__WEBPACK_IMPORTED_MODULE_2__.TermsAndConditionPage,
        cssClass: 'custom-modal',
        backdropDismiss: false,
        componentProps: {
          pageName: "premium-redirection"
        }
      });
      modal.onDidDismiss().then(data => {
        console.log(data);
        if (data && data.data.termsAndConditionsChecked) {
          this.showPremiumTab = true;
          this.tabSwitch('tab3');
        }
      });
      return yield modal.present();
    });
  }
  // async successDialog(title, message) {
  //   let modal = this.modalController.create(
  //     SuccessPopupPage,
  //     {
  //       redirectionMsg: message,
  //       title: title,
  //     },
  //     { cssClass: "success-msg", enableBackdropDismiss: false }
  //   );
  //   console.log(message);
  //   modal.onDidDismiss((data) => {
  //     console.log(data);
  //     if(data.pageName == "servicePage") {
  //      // this.navCtrl.push(ServicePage);
  //       this.router.navigate(['/service']);
  //     } else if(data.pageName == "serviceHistoryPage") {
  //      // this.navCtrl.push(ServiceHistoryPage);
  //       this.router.navigate(['/service-history']);
  //     }
  //   });
  //   modal.present();
  // }
  successDialog(title, message) {
    return (0,tslib__WEBPACK_IMPORTED_MODULE_13__.__awaiter)(this, void 0, void 0, function* () {
      const modal = yield this.modalController.create({
        component: _success_popup_success_popup_page__WEBPACK_IMPORTED_MODULE_1__.SuccessPopupPage,
        cssClass: 'success-msg',
        backdropDismiss: false,
        componentProps: {
          redirectionMsg: message,
          title: title
        }
      });
      modal.onDidDismiss().then(data => {
        console.log(data);
        if (data.data.pageName == "servicePage") {
          // this.navCtrl.push(ServicePage);
          this.router.navigate(['/service']);
        } else if (data.data.pageName == "serviceHistoryPage") {
          // this.navCtrl.push(ServiceHistoryPage);
          this.router.navigate(['/service-history']);
        }
      });
      return yield modal.present();
    });
  }
  cancel() {
    // this.navCtrl.push(ServicePage);
    this.router.navigate(['/service']);
  }
  goToHistory() {
    this.router.navigate(['/service-history']);
    // this.navCtrl.push(ServiceHistoryPage);
  }

  textAreaAutoHeight() {
    const tx = document.getElementsByTagName("textarea");
    for (let i = 0; i < tx.length; i++) {
      tx[i].setAttribute("style", "height:" + tx[i].scrollHeight + "px;overflow-y:hidden;");
      tx[i].addEventListener("input", OnInput, false);
    }
    function OnInput() {
      this.style.height = "auto";
      this.style.height = this.scrollHeight + "px";
    }
  }
  //Switch from fund table and methods
  onFundFromChange(fundSelect, outerindex) {
    this.FundSwitchingParticularsForm.controls.switchToFunds.reset();
    this.selectedTofundName = [];
    this.changeJunkChar('ng-value-label');
    if (this.selectedFromfundName.length) {
      if (this.selectedFromfundName.includes(fundSelect.itemsList._selected[0]["value"])) {
        this.showDialog("", "This fund is already selected");
        this.removeFromRow(outerindex);
      } else {
        this.selectedFromfundName = [];
        this.FundSwitchingParticularsForm.controls["switchFromFunds"].value.forEach(element => {
          this.selectedFromfundName.push(element.name);
        });
      }
    } else {
      this.selectedFromfundName = [];
      this.FundSwitchingParticularsForm.controls["switchFromFunds"].value.forEach(element => {
        this.selectedFromfundName.push(element.name);
      });
    }
    this.percentageFromChanged(outerindex);
  }
  resetToTable() {
    this.FundSwitchingParticularsForm.controls.switchToFunds.reset();
    this.selectedTofundName = [];
  }
  percentageFromChanged(fromFundIndex) {
    if (this.FundSwitchingParticularsForm.controls.switchFromFunds.value[fromFundIndex].percentage) {
      if (this.FundSwitchingParticularsForm.controls.switchFromFunds.value[fromFundIndex].percentage > 100) {
        this.showDialog("", "Switching percentage can not be more than 100%");
        this.FundSwitchingParticularsForm.controls.switchFromFunds["controls"][fromFundIndex]["controls"]["percentage"].setValue(null);
        this.FundSwitchingParticularsForm.controls.switchFromFunds["controls"][fromFundIndex]["controls"]["value"].setValue(null);
      } else {
        if (this.FundSwitchingParticularsForm.controls.switchFromFunds.value[fromFundIndex].percentage > 0 && this.FundSwitchingParticularsForm.controls.switchFromFunds.value[fromFundIndex].percentage % 5 === 0) {
          let selectedFromFundArray = this.FundSwitchingParticularsForm.controls.switchFromFunds.value;
          let selectedFromFundName = selectedFromFundArray[fromFundIndex].name;
          for (let i = 0; i < this.presetFunds.length; i++) {
            if (this.presetFunds[i].name == selectedFromFundName) {
              let valm = parseFloat(this.presetFunds[i].value.replace(/,/g, ''));
              let netValue = this.FundSwitchingParticularsForm.controls.switchFromFunds.value[fromFundIndex].percentage / 100 * valm;
              this.FundSwitchingParticularsForm.controls.switchFromFunds["controls"][fromFundIndex]["controls"]["value"].markAsTouched();
              this.FundSwitchingParticularsForm.controls.switchFromFunds["controls"][fromFundIndex]["controls"]["value"].setValue(netValue);
            }
          }
        } else {
          this.showDialog("", "Switching % must be multiples of 5");
          this.FundSwitchingParticularsForm.controls.switchFromFunds["controls"][fromFundIndex]["controls"]["percentage"].setValue(null);
          this.FundSwitchingParticularsForm.controls.switchFromFunds["controls"][fromFundIndex]["controls"]["value"].setValue(null);
        }
      }
      this.setTotalFromValue();
    } else {
      this.FundSwitchingParticularsForm.controls.switchFromFunds["controls"][fromFundIndex]["controls"]["value"].setValue(null);
      this.setTotalFromValue();
    }
  }
  setTotalFromValue() {
    setTimeout(() => {
      this.totalSelectedFromSwitchingFund = 0;
      for (let i = 0; i < this.FundSwitchingParticularsForm.controls.switchFromFunds.value.length; i++) {
        this.totalSelectedFromSwitchingFund = this.totalSelectedFromSwitchingFund + this.FundSwitchingParticularsForm.controls.switchFromFunds.value[i].value;
      }
    }, 100);
  }
  addSwitchFromRow() {
    const control = this.FundSwitchingParticularsForm.controls.switchFromFunds;
    control.push(this.initAttchmentFields());
  }
  removeFromRow(arrayIndex) {
    this.FundSwitchingParticularsForm.controls.switchToFunds.reset();
    this.selectedTofundName = [];
    this.FundSwitchingParticularsForm.controls["switchFromFunds"].removeAt(arrayIndex);
    this.FundSwitchingParticularsForm.controls.switchFromFunds.markAsDirty();
    this.selectedFromfundName = [];
    this.FundSwitchingParticularsForm.controls["switchFromFunds"].value.forEach(element => {
      this.selectedFromfundName.push(element.name);
    });
    this.setTotalFromValue();
  }
  initAttchmentFields() {
    return this.fb.group({
      name: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_12__.Validators.required]],
      percentage: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_12__.Validators.required]],
      value: [null]
    });
  }
  onFundToChange(fundSelect, outerindex) {
    console.log(fundSelect);
    console.log(outerindex);
    this.changeJunkChar('ng-value-label');
    if (this.selectedTofundName.length) {
      if (this.selectedTofundName.includes(fundSelect.itemsList._selected[0]["value"])) {
        this.showDialog("", "This fund is already selected");
        this.removeToRow(outerindex);
      } else {
        this.selectedTofundName = [];
        this.FundSwitchingParticularsForm.controls["switchToFunds"].value.forEach(element => {
          this.selectedTofundName.push(element.name);
        });
      }
    } else {
      this.selectedTofundName = [];
      this.FundSwitchingParticularsForm.controls["switchToFunds"].value.forEach(element => {
        this.selectedTofundName.push(element.name);
      });
    }
    this.percentageToChanged(outerindex);
  }
  removeToRow(arrayIndex) {
    this.FundSwitchingParticularsForm.controls["switchToFunds"].removeAt(arrayIndex);
    this.FundSwitchingParticularsForm.controls.switchToFunds.markAsDirty();
    this.selectedTofundName = [];
    this.FundSwitchingParticularsForm.controls["switchToFunds"].value.forEach(element => {
      this.selectedTofundName.push(element.name);
    });
    this.validateAddBtn();
  }
  percentageToChanged(fromFundIndex) {
    if (this.FundSwitchingParticularsForm.controls.switchToFunds.value[fromFundIndex].percentage) {
      if (this.FundSwitchingParticularsForm.controls.switchToFunds.value[fromFundIndex].percentage > 100) {
        this.showDialog("", "Switching percentage can not be more than 100%");
        this.FundSwitchingParticularsForm.controls.switchToFunds["controls"][fromFundIndex]["controls"]["percentage"].setValue(null);
        this.FundSwitchingParticularsForm.controls.switchToFunds["controls"][fromFundIndex]["controls"]["value"].setValue(null);
      } else {
        if (this.FundSwitchingParticularsForm.controls.switchToFunds.value[fromFundIndex].percentage > 0 && this.FundSwitchingParticularsForm.controls.switchToFunds.value[fromFundIndex].percentage % 5 === 0) {
          let selectedToFundArray = this.FundSwitchingParticularsForm.controls.switchToFunds.value;
          // let selectedFromFundName=selectedToFundArray[fromFundIndex].name;
          for (let i = 0; i < selectedToFundArray.length; i++) {
            // if(this.presetFunds[i].name==selectedFromFundName){
            //let trimmedVal= parseFloat(this.presetFunds[i].value.replace(/,/g, ''));
            let netToAmount = this.FundSwitchingParticularsForm.controls.switchToFunds.value[fromFundIndex].percentage / 100 * this.totalSelectedFromSwitchingFund;
            this.FundSwitchingParticularsForm.controls.switchToFunds["controls"][fromFundIndex]["controls"]["value"].markAsTouched();
            this.FundSwitchingParticularsForm.controls.switchToFunds["controls"][fromFundIndex]["controls"]["value"].setValue(netToAmount.toFixed(2));
            // }
          }

          this.validateAddBtn();
        } else {
          this.showDialog("", "Switching % must be multiples of 5");
          this.FundSwitchingParticularsForm.controls.switchToFunds["controls"][fromFundIndex]["controls"]["percentage"].setValue(null);
          this.FundSwitchingParticularsForm.controls.switchToFunds["controls"][fromFundIndex]["controls"]["value"].setValue(null);
        }
      }
    } else {
      this.FundSwitchingParticularsForm.controls.switchToFunds["controls"][fromFundIndex]["controls"]["value"].setValue(null);
      this.validateAddBtn();
    }
  }
  validateAddBtn() {
    this.totalAllocationValue = 0;
    for (let i = 0; i < this.FundSwitchingParticularsForm.controls.switchToFunds.value.length; i++) {
      this.totalAllocationValue = this.totalAllocationValue + Number(this.FundSwitchingParticularsForm.controls.switchToFunds.value[i].percentage);
    }
    if (this.totalAllocationValue > 100) {
      this.allocationFull = false;
      this.showDialog("", "Switch-To funds values can not be more that total Switching Amount");
    } else if (this.totalAllocationValue == 100) {
      this.allocationFull = true;
    } else {
      this.allocationFull = false;
    }
  }
  addSwitchToRow() {
    const control = this.FundSwitchingParticularsForm.controls.switchToFunds;
    control.push(this.initAttchmentFields());
  }
  onFundChange(fundSelect, outerindex) {
    this.changeJunkChar('ng-value-label');
    this.particularDetailsDone = false;
    if (this.selectedfundName.length) {
      if (this.selectedfundName.includes(fundSelect.itemsList._selected[0]["value"])) {
        this.showDialog("", "This fund is already selected");
        this.removeRow(outerindex);
      } else {
        this.selectedfundName = [];
        this.RedirectionParticularsForm.controls["fund"].value.forEach(element => {
          this.selectedfundName.push(element.name);
        });
      }
    } else {
      this.selectedfundName = [];
      this.RedirectionParticularsForm.controls["fund"].value.forEach(element => {
        this.selectedfundName.push(element.name);
      });
    }
  }
  amountChanged() {
    this.particularDetailsDone = false;
    this.totalAllocationValue = 0;
    for (let i = 0; i < this.RedirectionParticularsForm.controls.fund.value.length; i++) {
      this.totalAllocationValue = this.totalAllocationValue + Number(this.RedirectionParticularsForm.controls.fund.value[i].allocationPercentage);
    }
    if (this.totalAllocationValue >= 100) {
      this.redirectionAllocationFull = true;
    } else {
      this.redirectionAllocationFull = false;
    }
  }
  addRow() {
    const control = this.RedirectionParticularsForm.controls.fund;
    control.push(this.initPremiumAttchmentFields());
  }
  removeRow(arrayIndex) {
    this.particularDetailsDone = false;
    this.RedirectionParticularsForm.controls["fund"].removeAt(arrayIndex);
    this.RedirectionParticularsForm.controls.fund.markAsDirty();
    this.selectedfundName = [];
    this.RedirectionParticularsForm.controls["fund"].value.forEach(element => {
      this.selectedfundName.push(element.name);
    });
    this.amountChanged();
  }
  initPremiumAttchmentFields() {
    return this.fb.group({
      name: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_12__.Validators.required]],
      allocationPercentage: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_12__.Validators.required]]
    });
  }
  checkFormValid() {
    let selectedFundArray = [];
    selectedFundArray = this.RedirectionParticularsForm.controls["fund"].value;
    this.allocationPercentage = 0;
    selectedFundArray.forEach((element, index, array) => {
      if (element.allocationPercentage) {
        if (element.allocationPercentage > 0 && element.allocationPercentage % 5 === 0) {
          this.allocationPercentage = this.allocationPercentage + parseInt(element.allocationPercentage);
          if (index === array.length - 1) {
            this.checkAmount(this.allocationPercentage, selectedFundArray);
            console.log(element);
          }
        } else {
          this.showDialog("", "Allocation % must be multiples of 5");
          selectedFundArray.length = 0;
        }
      } else {
        this.showDialog("", "Enter Allocation % for each funds.");
      }
    });
  }
  checkFundSwitchFormValid() {
    this.selectedFromfundsArray = this.FundSwitchingParticularsForm.controls.switchFromFunds.value;
    this.selectedTofundsArray = this.FundSwitchingParticularsForm.controls.switchToFunds.value;
    if (this.premiumRediretionPossible) {
      this.premiumContributionDialog('Premium/Contribution redirection!', 'Fund switching allows you to transfer the existing funds only. If you want to redirect future premium as well, please proceed with Premium/Contribution redirection. <br> <br> Do you want to proceed with Premium/Contribution redirection?');
    } else {
      this.ContinueToReviewPage();
    }
  }
  checkAmount(wAmount, selectedFundArray) {
    if (wAmount == 100) {
      this.particularDetailsDone = true;
      this.selectedFundArray = selectedFundArray;
      this.premiumRedirectionUpdated = true;
      this.ContinueToReviewPage();
    } else {
      this.showDialog("", "Total Allocation % should be equal to 100%");
      return false;
    }
  }
  ContinueToReviewPage() {
    if (this.FundSwitchingParticularsForm.valid) {
      this.tabSwitch("tab4");
    }
  }
  getIndex(sampleArray, val, propName) {
    const index = sampleArray.findIndex((element, index) => {
      if (element[propName] === val) {
        return true;
      }
    });
    return index;
  }
  // Change &amp; to &
  changeJunkChar(className) {
    setTimeout(() => {
      let dropDownArray = document.getElementsByClassName(className);
      for (let i = 0; i < dropDownArray.length; i++) {
        dropDownArray[i].innerHTML = dropDownArray[i].innerHTML.replace(/amp;/g, "");
      }
    }, 50);
  }
  getUnitFunds() {
    this.unitPriceList.getUnitPriceList().then(result => {
      try {
        this.utils.dissmisProgressLoader();
        this._separateByPlanType(result['responseJSON']['array'], this.selectedPolicyType);
      } catch (e) {
        this.utils.dissmisProgressLoader();
        this.logger.error("unitPrice catch eror : " + JSON.stringify(e));
        this.errorMsg = this.translate.instant('generic_msgs.server_err');
      }
    }, err => {
      this.utils.dissmisProgressLoader();
      this.errorMsg = this.utils.handleServiceException(err);
    });
  }
  _separateByPlanType(fundData, type) {
    for (var index = 0; index < fundData.length; ++index) {
      var data = fundData[index];
      if (data.fundType == 'Insurance') {
        data.fundType = 'Conventional';
        if (data.fundType == type) {
          this.unitFunds.push(data);
        }
      } else {
        if (data.fundType == type) {
          this.unitFunds.push(data);
        }
      }
      console.log('this.unitFund', this.unitFunds);
    }
  }
}
FundSwitchingPage.ɵfac = function FundSwitchingPage_Factory(t) {
  return new (t || FundSwitchingPage)(_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_15__.ModalController), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](src_providers_utils_utils_service__WEBPACK_IMPORTED_MODULE_5__.UtilService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](src_providers_logger_service_logger_service__WEBPACK_IMPORTED_MODULE_6__.LoggerServiceProvider), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_15__.AlertController), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_16__.TranslateService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](src_providers_utils_config__WEBPACK_IMPORTED_MODULE_7__.ConfigProvider), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_unit_price_uniPriceListService__WEBPACK_IMPORTED_MODULE_8__.UnitPriceListService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_fundSwitchingService__WEBPACK_IMPORTED_MODULE_9__.FundSwitchingService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_17__.Router));
};
FundSwitchingPage.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineComponent"]({
  type: FundSwitchingPage,
  selectors: [["app-fund-switching"]],
  viewQuery: function FundSwitchingPage_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵviewQuery"](_c0, 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵviewQuery"](_c1, 5);
    }
    if (rf & 2) {
      let _t;
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵloadQuery"]()) && (ctx.navBar = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵloadQuery"]()) && (ctx.content = _t.first);
    }
  },
  decls: 14,
  vars: 7,
  consts: [["mode", "ios"], ["color", "primary"], ["slot", "start"], ["text", "", "icon", "chevron-back-outline", 2, "padding-left", "15px", "font-size", "0.7rem"], [1, "bold-font"], ["padding", "", "no-bounce", "", 1, "app_bg2", "text_color_base"], ["class", "white_container_border_radius padding_15", 4, "ngIf"], [4, "ngIf"], ["class", "update-details-form", 4, "ngIf"], ["class", "white_container_border_radius padding_15 withdrawal-particulars", 4, "ngIf"], ["class", "white_container_border_radius padding_15 review-confirm", 4, "ngIf"], [1, "white_container_border_radius", "padding_15"], [3, "formGroup"], ["id", "selectpolicySection", 1, "radio-container"], [1, "heading"], [1, "mandatory_star"], ["class", "select-plan", 4, "ngIf"], ["text-center", "", "align-items-center", ""], ["ion-button", "", 1, "btn_center", 3, "disabled", "click"], [1, "select-plan"], ["size", "7"], [1, "lbl", "heading"], ["size", "5"], ["formControlName", "policyNumber", 3, "ionChange"], [4, "ngFor", "ngForOf"], ["item-left", "", "mode", "md", 3, "value"], [1, "margin"], [1, "error-dialog"], ["aria-hidden", "true", 1, "fa", "fa-times-circle", "close-icon"], [1, "error-msg"], ["href", "tel:1300-88-5055"], [1, "item-backg"], ["lines", "none", 2, "--background", "none"], ["slot", "start", 1, "profile-pic-container"], ["id", "avtar-icon", 1, "fas", "fa-download"], [2, "background", "none"], [1, "font-label1"], [2, "color", "#007bff"], [3, "click"], [1, "font-label"], ["id", "avtar-icon", 1, "fas", "fa-print"], ["id", "avtar-icon", 1, "fas", "fa-envelope-open"], ["href", "mailto:policy.admin@sunlifemalaysia.com"], ["ion-button", "", 1, "btn_center", 3, "click"], ["class", "error-msg", 4, "ngIf"], ["href", "mailto:wecare@sunlifemalaysia.com"], ["href", "tel:1300-88-5055", "target", "_blank"], [1, "btn_center1", 3, "click"], [1, "btn_center", 3, "click"], ["class", "tab-container", 4, "ngIf"], [1, "tab-container"], ["class", "tab1", 3, "ngClass", "click", 4, "ngIf"], [1, "tab2", 3, "ngClass", "click"], [1, "tab3", 3, "ngClass", "click"], ["class", "tab4", 3, "ngClass", "click", 4, "ngIf"], [1, "tab1", 3, "ngClass", "click"], [1, "tab4", 3, "ngClass", "click"], [1, "update-details-form"], [3, "PreTACVarified", "comingFromCDD", "selectedPolicyNumber", "isEditable", "preUpdatedData", "prePersonalData"], [1, "white_container_border_radius", "padding_15", "withdrawal-particulars"], [1, "ilp"], ["stacked", ""], [1, "row-header"], ["size", "3"], ["class", "rowcontent", 4, "ngFor", "ngForOf"], [1, "notes"], [1, "fund-table-container"], ["aria-describedby", ""], ["formArrayName", "switchFromFunds", 4, "ngFor", "ngForOf"], [1, "add-row"], [1, "btn_center2", "add-row-btn", 3, "click"], [1, "form-value"], ["formArrayName", "switchToFunds", 4, "ngFor", "ngForOf"], ["ion-button", "", 1, "btn_center2", "add-row-btn", 3, "disabled", "click"], [1, "submit-btn"], [1, "rowcontent"], ["formArrayName", "switchFromFunds"], [3, "formGroupName"], ["select-option", "", "interface", "popover", "mode", "ios", "appearance", "outline", "placeholder", "Select Fund", "formControlName", "name", 1, "select-border-allocation", 3, "searchable", "clearable", "ionChange", "open"], ["select", ""], [3, "value", 4, "ngFor", "ngForOf"], ["type", "number", "min", "1", "formControlName", "percentage", "restrict-input", "", "restrictInput", "number", 3, "ionBlur", "ionChange"], [1, "amount-container"], ["class", "fa fa-times-circle", "aria-hidden", "true", 3, "click", 4, "ngIf"], [3, "value"], ["aria-hidden", "true", 1, "fa", "fa-times-circle", 3, "click"], ["formArrayName", "switchToFunds"], ["interface", "popover", "mode", "ios", "appearance", "outline", "placeholder", "Select Fund", "formControlName", "name", 1, "select-border-allocation", 3, "interfaceOptions", "searchable", "clearable", "ionChange", "open"], ["type", "number", "min", "1", "formControlName", "percentage", "restrict-input", "", "restrictInput", "number", 3, "ionBlur"], ["lines", "none", 2, "--background", "none", "display", "-webkit-inline-box"], ["aria-describedby", "", 1, "allocation-table"], ["scope", "col"], ["formArrayName", "fund", 4, "ngFor", "ngForOf"], ["ion-button", "", 1, "btn_center3", "add-row-btn", 3, "disabled", "click"], ["formArrayName", "fund"], ["select-option", "", "interface", "popover", "mode", "ios", "appearance", "outline", "placeholder", "Select Fund", "formControlName", "name", 1, "select-border-allocation", 3, "interfaceOptions", "searchable", "clearable", "ionChange", "open"], [1, "allocation-container"], ["type", "number", "min", "1", "formControlName", "allocationPercentage", "restrict-input", "", "restrictInput", "number", 3, "ionBlur"], [1, "white_container_border_radius", "padding_15", "review-confirm"], [1, "details-container"], [1, "fund-row-header"], ["size", "4"], ["class", "fund-rowcontent", 4, "ngFor", "ngForOf"], ["class", "details-container", 4, "ngIf"], [1, "fatca-crs-container"], ["radio-group", "", "formControlName", "declaration"], ["size", "2"], ["item-left", "", "value", "1", "mode", "md"], ["size", "10"], ["item-left", "", "value", "0", "mode", "md"], [1, "hr"], ["mode", "md", "formControlName", "termsAndConditions", 3, "disabled", "checked", "ionChange"], [1, "text-center"], [1, "btn_center", 3, "disabled", "click"], [1, "fund-rowcontent"], ["aria-describedby", "", "class", "allocation-table", 4, "ngIf"]],
  template: function FundSwitchingPage_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "ion-header", 0)(1, "ion-toolbar", 1)(2, "ion-buttons", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](3, "ion-back-button", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](4, "ion-title", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](5, "Fund Switching");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](6, "ion-content", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](7, FundSwitchingPage_section_7_Template, 12, 3, "section", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](8, FundSwitchingPage_section_8_Template, 4, 3, "section", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](9, FundSwitchingPage_section_9_Template, 3, 2, "section", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](10, FundSwitchingPage_section_10_Template, 2, 6, "section", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](11, FundSwitchingPage_section_11_Template, 54, 10, "section", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](12, FundSwitchingPage_section_12_Template, 37, 9, "section", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](13, FundSwitchingPage_section_13_Template, 201, 40, "section", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", !ctx.receivedPolicyvalidation);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx.receivedPolicyvalidation && !ctx.TACVarified);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx.TACVarified && ctx.TandCVarified);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx.selectedTab1);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx.selectedTab2);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx.selectedTab3);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx.selectedTab4);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_18__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_18__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_18__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_12__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_12__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.NgControlStatusGroup, _ionic_angular__WEBPACK_IMPORTED_MODULE_15__.IonAvatar, _ionic_angular__WEBPACK_IMPORTED_MODULE_15__.IonBackButton, _ionic_angular__WEBPACK_IMPORTED_MODULE_15__.IonButton, _ionic_angular__WEBPACK_IMPORTED_MODULE_15__.IonButtons, _ionic_angular__WEBPACK_IMPORTED_MODULE_15__.IonCheckbox, _ionic_angular__WEBPACK_IMPORTED_MODULE_15__.IonCol, _ionic_angular__WEBPACK_IMPORTED_MODULE_15__.IonContent, _ionic_angular__WEBPACK_IMPORTED_MODULE_15__.IonGrid, _ionic_angular__WEBPACK_IMPORTED_MODULE_15__.IonHeader, _ionic_angular__WEBPACK_IMPORTED_MODULE_15__.IonInput, _ionic_angular__WEBPACK_IMPORTED_MODULE_15__.IonItem, _ionic_angular__WEBPACK_IMPORTED_MODULE_15__.IonLabel, _ionic_angular__WEBPACK_IMPORTED_MODULE_15__.IonList, _ionic_angular__WEBPACK_IMPORTED_MODULE_15__.IonRadio, _ionic_angular__WEBPACK_IMPORTED_MODULE_15__.IonRadioGroup, _ionic_angular__WEBPACK_IMPORTED_MODULE_15__.IonRow, _ionic_angular__WEBPACK_IMPORTED_MODULE_15__.IonSelect, _ionic_angular__WEBPACK_IMPORTED_MODULE_15__.IonSelectOption, _ionic_angular__WEBPACK_IMPORTED_MODULE_15__.IonTitle, _ionic_angular__WEBPACK_IMPORTED_MODULE_15__.IonToolbar, _ionic_angular__WEBPACK_IMPORTED_MODULE_15__.BooleanValueAccessor, _ionic_angular__WEBPACK_IMPORTED_MODULE_15__.NumericValueAccessor, _ionic_angular__WEBPACK_IMPORTED_MODULE_15__.RadioValueAccessor, _ionic_angular__WEBPACK_IMPORTED_MODULE_15__.SelectValueAccessor, _ionic_angular__WEBPACK_IMPORTED_MODULE_15__.IonBackButtonDelegate, _component_edit_personal_data_edit_personal_data_component__WEBPACK_IMPORTED_MODULE_10__.EditPersonalDataComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormControlName, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormGroupName, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormArrayName, _angular_common__WEBPACK_IMPORTED_MODULE_18__.DecimalPipe, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_16__.TranslatePipe],
  styles: [".feedback[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 16px;\n  right: 16px;\n  text-align: right;\n  z-index: 9;\n}\n\n.fund-table-container[_ngcontent-%COMP%]   table[_ngcontent-%COMP%] {\n  background: transparent;\n}\n.fund-table-container[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  align-items: center;\n  display: flex;\n  text-align: left;\n  width: 100% !important;\n  border-bottom: groove;\n  padding: 8px;\n}\n.fund-table-container[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:first-child {\n  flex-basis: 50%;\n  font-weight: bold;\n}\n.fund-table-container[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  bottom: 27px;\n  position: absolute;\n  right: 12px;\n}\n.fund-table-container[_ngcontent-%COMP%]   .select-container[_ngcontent-%COMP%] {\n  width: 50%;\n}\n.fund-table-container[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\n  background: #fff;\n  display: block;\n  margin-bottom: 16px;\n  margin-top: 12px;\n  position: relative;\n}\n.fund-table-container[_ngcontent-%COMP%]   ion-input[_ngcontent-%COMP%] {\n  border-bottom: 1px solid #b5aeae !important;\n}\n.fund-table-container[_ngcontent-%COMP%]   .amount-container[_ngcontent-%COMP%], .fund-table-container[_ngcontent-%COMP%]   table.allocation-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   .allocation-container[_ngcontent-%COMP%], table.allocation-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   .fund-table-container[_ngcontent-%COMP%]   .allocation-container[_ngcontent-%COMP%] {\n  align-items: center;\n  display: inline-flex;\n  min-height: 44px;\n}\n\n.white_container_border_radius[_ngcontent-%COMP%] {\n  background-color: rgba(255, 255, 255, 0.7) !important;\n  border-radius: 15px !important;\n  margin: 15px;\n  padding: 15px;\n}\n\n.padding_15[_ngcontent-%COMP%] {\n  padding: 15px !important;\n}\n\n.heading[_ngcontent-%COMP%] {\n  font-family: Agenda-SemiBold !important;\n}\n\n.text_color_base[_ngcontent-%COMP%] {\n  color: var(--ion-color-secondary) !important;\n}\n\n.mandatory_star[_ngcontent-%COMP%] {\n  color: #f00;\n}\n\n.margin[_ngcontent-%COMP%] {\n  margin-left: 5px !important;\n}\n\n.error-dialog[_ngcontent-%COMP%] {\n  background: #f8e8ec;\n  border: 1px solid #b81f41;\n  border-left-width: 4px;\n  border-radius: 4px;\n  margin-bottom: 24px;\n  padding: 15px;\n  position: relative;\n}\n.error-dialog[_ngcontent-%COMP%]   .close-icon[_ngcontent-%COMP%] {\n  color: #b81f41;\n  position: absolute;\n  left: 13px;\n  top: 15px;\n}\n.error-dialog[_ngcontent-%COMP%]   .error-msg[_ngcontent-%COMP%] {\n  color: #000;\n  padding: 0 30px 0 20px;\n}\n.error-dialog[_ngcontent-%COMP%]   .dismiss-btn[_ngcontent-%COMP%] {\n  cursor: pointer;\n  font-size: 15px;\n  position: absolute;\n  right: 24px;\n  top: 15px;\n}\n\n.btn_center2[_ngcontent-%COMP%] {\n  text-transform: capitalize;\n  background: #002d3d !important;\n  color: white;\n  margin-top: 10px;\n  border-radius: 10px !important;\n  min-width: 125px;\n  margin-bottom: 10px;\n  min-height: 45px;\n  width: 100% !important;\n  font-family: Agenda-Regular !important;\n  margin-bottom: 10px;\n}\n\n.btn_center3[_ngcontent-%COMP%] {\n  text-transform: capitalize;\n  --background: #002d3d !important;\n  color: white;\n  margin-top: 10px;\n  border-radius: 10px !important;\n  min-width: 125px;\n  margin-bottom: 10px;\n  min-height: 45px;\n  width: 100% !important;\n  font-family: Agenda-Regular !important;\n  margin-bottom: 10px;\n}\n\n.btn_center[_ngcontent-%COMP%] {\n  text-transform: capitalize;\n  --background: #002d3d !important;\n  color: white;\n  margin-top: 15px;\n  --border-radius: 10px !important;\n  min-width: 100px;\n  min-height: 45px;\n  width: 100% !important;\n  font-family: Agenda-Regular !important;\n}\n\n.btn_center1[_ngcontent-%COMP%] {\n  text-transform: capitalize;\n  --background: #002d3d !important;\n  color: white;\n  margin-top: 15px;\n  --border-radius: 10px !important;\n  min-width: 200px;\n  min-height: 45px;\n  width: 100% !important;\n  font-family: Agenda-Regular !important;\n  margin-bottom: -5px;\n}\n\n.para2[_ngcontent-%COMP%] {\n  font-size: 1rem;\n}\n\n.para3[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n}\n\n.label-margin[_ngcontent-%COMP%] {\n  margin-left: 5px;\n}\n\n.profile-pic-container[_ngcontent-%COMP%] {\n  position: relative;\n  height: 40px;\n  width: 40px;\n  background-color: var(--ion-color-secondary) !important;\n  display: block;\n}\n\n#avtar-icon[_ngcontent-%COMP%] {\n  font-size: 17px;\n  position: absolute;\n  bottom: 12px;\n  right: 12px;\n  color: #fff;\n}\n\nion-label[_ngcontent-%COMP%] {\n  font-family: Agenda-Regular !important;\n  font-weight: normal;\n}\n\n.item-backg[_ngcontent-%COMP%] {\n  background: none;\n}\n\n.div.item-native[_ngcontent-%COMP%] {\n  background: none;\n}\n\n.font-label1[_ngcontent-%COMP%] {\n  font-size: 1.1rem !important;\n}\n\n.font-label[_ngcontent-%COMP%] {\n  font-size: 0.9rem !important;\n}\n\n.tab-container[_ngcontent-%COMP%] {\n  border-bottom: 5px solid #febe10;\n  display: flex;\n  margin-bottom: 16px;\n  margin-top: 10px;\n}\n.tab-container[_ngcontent-%COMP%]   .tab1[_ngcontent-%COMP%], .tab-container[_ngcontent-%COMP%]   .tab4[_ngcontent-%COMP%], .tab-container[_ngcontent-%COMP%]   .tab3[_ngcontent-%COMP%], .tab-container[_ngcontent-%COMP%]   .tab2[_ngcontent-%COMP%] {\n  align-items: center;\n  background: #002d3d;\n  border-right: 1px solid white;\n  color: white;\n  display: inline-flex;\n  font-family: agenda-semibold;\n  font-size: 1.1rem;\n  justify-content: center;\n  padding: 8px;\n  text-align: center;\n  width: 33.2%;\n}\n.tab-container[_ngcontent-%COMP%]   .tab1.tab-selected[_ngcontent-%COMP%], .tab-container[_ngcontent-%COMP%]   .tab-selected.tab4[_ngcontent-%COMP%], .tab-container[_ngcontent-%COMP%]   .tab-selected.tab3[_ngcontent-%COMP%], .tab-container[_ngcontent-%COMP%]   .tab-selected.tab2[_ngcontent-%COMP%] {\n  background: #febe10;\n  color: #002d3d;\n}\n.tab-container[_ngcontent-%COMP%]   .tab1[_ngcontent-%COMP%]:last-child, .tab-container[_ngcontent-%COMP%]   .tab4[_ngcontent-%COMP%]:last-child, .tab-container[_ngcontent-%COMP%]   .tab3[_ngcontent-%COMP%]:last-child, .tab-container[_ngcontent-%COMP%]   .tab2[_ngcontent-%COMP%]:last-child {\n  border-right: 0;\n}\n.thead-edit[_ngcontent-%COMP%] {\n  color: white;\n  background-color: var(--ion-color-secondary);\n}\n\n.tbody-edit[_ngcontent-%COMP%] {\n  color: black;\n  background-color: white;\n}\n\n.row-header[_ngcontent-%COMP%] {\n  color: white;\n  background-color: var(--ion-color-secondary);\n  height: auto;\n  padding: 5%;\n}\n\n.rowcontent[_ngcontent-%COMP%] {\n  color: black;\n  background-color: white;\n  height: auto;\n  padding: 5%;\n  border-bottom: groove;\n}\n\n.withdrawal-particulars[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%] {\n  color: var(--ion-color-secondary) !important;\n  font-size: 1.2rem !important;\n  font-family: agenda-semibold;\n  white-space: normal;\n}\n.withdrawal-particulars[_ngcontent-%COMP%]   .form-value[_ngcontent-%COMP%] {\n  font-size: 1.1rem !important;\n  margin-top: 8px;\n}\n.withdrawal-particulars[_ngcontent-%COMP%]   .input-box[_ngcontent-%COMP%] {\n  margin-top: 8px;\n}\n.withdrawal-particulars[_ngcontent-%COMP%]   .ilp[_ngcontent-%COMP%]   .add-row[_ngcontent-%COMP%] {\n  margin-top: 8px;\n  text-align: right;\n}\n.withdrawal-particulars[_ngcontent-%COMP%]   .ilp[_ngcontent-%COMP%]   .add-row[_ngcontent-%COMP%]   .add-row-btn[_ngcontent-%COMP%] {\n  max-width: 100px;\n}\n\n.ilp[_ngcontent-%COMP%]   .add-row[_ngcontent-%COMP%] {\n  margin-top: 8px;\n  text-align: right;\n}\n.ilp[_ngcontent-%COMP%]   .add-row[_ngcontent-%COMP%]   .add-row-btn[_ngcontent-%COMP%] {\n  max-width: 100px;\n}\n\n.item-input-disabled[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%], .item-input-disabled[_ngcontent-%COMP%]   .select-disabled[_ngcontent-%COMP%], .item-select-disabled[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%], .item-select-disabled[_ngcontent-%COMP%]   .select-disabled[_ngcontent-%COMP%] {\n  color: #999 !important;\n  opacity: 1 !important;\n}\n.item-input-disabled[_ngcontent-%COMP%]   ion-input[_ngcontent-%COMP%], .item-input-disabled[_ngcontent-%COMP%]   ion-select[_ngcontent-%COMP%], .item-select-disabled[_ngcontent-%COMP%]   ion-input[_ngcontent-%COMP%], .item-select-disabled[_ngcontent-%COMP%]   ion-select[_ngcontent-%COMP%] {\n  border: 1px solid #c3c1c1 !important;\n  padding: 0 15px;\n}\n.item-input-disabled[_ngcontent-%COMP%]   ion-select[_ngcontent-%COMP%], .item-select-disabled[_ngcontent-%COMP%]   ion-select[_ngcontent-%COMP%] {\n  background: transparent url(/../assets/imgs/arrow-down.png) no-repeat 95% center !important;\n  height: 37px !important;\n}\n\n.select-icon[_ngcontent-%COMP%] {\n  opacity: 1;\n}\n\n.submit-btn[_ngcontent-%COMP%] {\n  margin-top: 16px;\n}\n\n.review-confirm[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%], .payment-details[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\n  background: var(--ion-color-secondary);\n  color: #fff;\n  margin-bottom: 0;\n  padding: 8px;\n}\n.review-confirm[_ngcontent-%COMP%]   .details-container[_ngcontent-%COMP%], .payment-details[_ngcontent-%COMP%]   .details-container[_ngcontent-%COMP%] {\n  padding-left: 8px;\n}\n.review-confirm[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%], .payment-details[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%] {\n  color: var(--ion-color-secondary) !important;\n  font-size: 1.2rem !important;\n  font-family: agenda-semibold;\n  white-space: normal;\n}\n.review-confirm[_ngcontent-%COMP%]   .form-value[_ngcontent-%COMP%], .payment-details[_ngcontent-%COMP%]   .form-value[_ngcontent-%COMP%] {\n  font-size: 1.1rem !important;\n  margin-top: 8px;\n}\n.review-confirm[_ngcontent-%COMP%]   .fatca-crs-container[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], .payment-details[_ngcontent-%COMP%]   .fatca-crs-container[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 1.2rem;\n}\n.review-confirm[_ngcontent-%COMP%]   .fatca-crs-container[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%], .payment-details[_ngcontent-%COMP%]   .fatca-crs-container[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%] {\n  font-family: Agenda-Regular !important;\n}\n.review-confirm[_ngcontent-%COMP%]   .fatca-crs-container[_ngcontent-%COMP%]   .label-md[_ngcontent-%COMP%], .payment-details[_ngcontent-%COMP%]   .fatca-crs-container[_ngcontent-%COMP%]   .label-md[_ngcontent-%COMP%] {\n  margin: 0 8px 13px 0 !important;\n}\n.review-confirm[_ngcontent-%COMP%]   .fatca-crs-container[_ngcontent-%COMP%]   .label-ios[_ngcontent-%COMP%], .payment-details[_ngcontent-%COMP%]   .fatca-crs-container[_ngcontent-%COMP%]   .label-ios[_ngcontent-%COMP%] {\n  margin: 0 8px 13px 0 !important;\n}\n.review-confirm[_ngcontent-%COMP%]   .fatca-crs-container[_ngcontent-%COMP%]   .checkbox[_ngcontent-%COMP%], .payment-details[_ngcontent-%COMP%]   .fatca-crs-container[_ngcontent-%COMP%]   .checkbox[_ngcontent-%COMP%] {\n  margin-right: 16px !important;\n}\n.review-confirm[_ngcontent-%COMP%]   .fatca-crs-container[_ngcontent-%COMP%]   .checkbox-icon[_ngcontent-%COMP%], .payment-details[_ngcontent-%COMP%]   .fatca-crs-container[_ngcontent-%COMP%]   .checkbox-icon[_ngcontent-%COMP%] {\n  border-width: 1px !important;\n  height: 27px !important;\n  width: 27px !important;\n}\n.review-confirm[_ngcontent-%COMP%]   .fatca-crs-container[_ngcontent-%COMP%]   .checkbox-icon.checkbox-checked[_ngcontent-%COMP%]   .checkbox-inner[_ngcontent-%COMP%], .payment-details[_ngcontent-%COMP%]   .fatca-crs-container[_ngcontent-%COMP%]   .checkbox-icon.checkbox-checked[_ngcontent-%COMP%]   .checkbox-inner[_ngcontent-%COMP%] {\n  height: 13px !important;\n  left: 9px !important;\n  top: 4px !important;\n  width: 8px !important;\n}\n.review-confirm[_ngcontent-%COMP%]   .fatca-crs-container[_ngcontent-%COMP%]   .checkbox-checked[_ngcontent-%COMP%], .payment-details[_ngcontent-%COMP%]   .fatca-crs-container[_ngcontent-%COMP%]   .checkbox-checked[_ngcontent-%COMP%] {\n  border-color: var(--ion-color-secondary) !important;\n  background-color: white !important;\n}\n.review-confirm[_ngcontent-%COMP%]   .fatca-crs-container[_ngcontent-%COMP%]   ion-list[_ngcontent-%COMP%], .payment-details[_ngcontent-%COMP%]   .fatca-crs-container[_ngcontent-%COMP%]   ion-list[_ngcontent-%COMP%] {\n  margin-bottom: 0;\n  padding-left: 0;\n}\n.review-confirm[_ngcontent-%COMP%]   .fatca-crs-container[_ngcontent-%COMP%]   ion-list[_ngcontent-%COMP%]   ion-radio[_ngcontent-%COMP%], .payment-details[_ngcontent-%COMP%]   .fatca-crs-container[_ngcontent-%COMP%]   ion-list[_ngcontent-%COMP%]   ion-radio[_ngcontent-%COMP%] {\n  margin-right: 16px !important;\n}\n.review-confirm[_ngcontent-%COMP%]   .fatca-crs-container[_ngcontent-%COMP%]   ion-list[_ngcontent-%COMP%]   ion-radio[_ngcontent-%COMP%]   .radio-icon[_ngcontent-%COMP%], .payment-details[_ngcontent-%COMP%]   .fatca-crs-container[_ngcontent-%COMP%]   ion-list[_ngcontent-%COMP%]   ion-radio[_ngcontent-%COMP%]   .radio-icon[_ngcontent-%COMP%] {\n  height: 27px;\n  width: 27px;\n}\n.review-confirm[_ngcontent-%COMP%]   .fatca-crs-container[_ngcontent-%COMP%]   ion-list[_ngcontent-%COMP%]   ion-radio[_ngcontent-%COMP%]   .radio-icon[_ngcontent-%COMP%]   .radio-inner[_ngcontent-%COMP%], .payment-details[_ngcontent-%COMP%]   .fatca-crs-container[_ngcontent-%COMP%]   ion-list[_ngcontent-%COMP%]   ion-radio[_ngcontent-%COMP%]   .radio-icon[_ngcontent-%COMP%]   .radio-inner[_ngcontent-%COMP%] {\n  height: 13px;\n  left: 5px;\n  top: 5px;\n  width: 13px;\n}\n.review-confirm[_ngcontent-%COMP%]   .fatca-crs-container[_ngcontent-%COMP%]   hr[_ngcontent-%COMP%], .payment-details[_ngcontent-%COMP%]   .fatca-crs-container[_ngcontent-%COMP%]   hr[_ngcontent-%COMP%] {\n  height: 2px;\n  margin-bottom: 24px;\n}\n\np[_ngcontent-%COMP%] {\n  font-size: 1.1rem;\n}\n\nh2[_ngcontent-%COMP%] {\n  margin-top: 0 !important;\n}\n\n.radio-container[_ngcontent-%COMP%] {\n  font-size: 1.1rem;\n  margin-bottom: 16px;\n}\n.radio-container[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%] {\n  white-space: normal;\n}\n.radio-container[_ngcontent-%COMP%]   .heading[_ngcontent-%COMP%] {\n  font-weight: bold;\n}\n.radio-container[_ngcontent-%COMP%]   .label-md[_ngcontent-%COMP%] {\n  margin: 0 !important;\n}\n.radio-container[_ngcontent-%COMP%]   .label-ios[_ngcontent-%COMP%] {\n  margin: 0 !important;\n}\n.radio-container[_ngcontent-%COMP%]   ion-list[_ngcontent-%COMP%] {\n  margin-bottom: 0;\n  padding-left: 0;\n  padding-right: 0;\n}\n.radio-container[_ngcontent-%COMP%]   ion-list[_ngcontent-%COMP%]   ion-radio[_ngcontent-%COMP%] {\n  margin-right: 16px !important;\n}\n.radio-container[_ngcontent-%COMP%]   ion-list[_ngcontent-%COMP%]   ion-radio[_ngcontent-%COMP%]   .radio-icon[_ngcontent-%COMP%] {\n  height: 27px;\n  width: 27px;\n}\n.radio-container[_ngcontent-%COMP%]   ion-list[_ngcontent-%COMP%]   ion-radio[_ngcontent-%COMP%]   .radio-icon[_ngcontent-%COMP%]   .radio-inner[_ngcontent-%COMP%] {\n  height: 13px;\n  left: 5px;\n  top: 5px;\n  width: 13px;\n}\n.radio-container[_ngcontent-%COMP%]   ion-row[_ngcontent-%COMP%] {\n  align-items: center;\n}\n.radio-container[_ngcontent-%COMP%]   ion-col[_ngcontent-%COMP%] {\n  align-items: center;\n  align-self: stretch;\n  display: inline-flex;\n}\n.radio-container[_ngcontent-%COMP%]   .select-plan[_ngcontent-%COMP%] {\n  margin-top: 8px;\n}\n\n.select[_ngcontent-%COMP%] {\n  margin-left: 0px;\n}\n\n.select-border[_ngcontent-%COMP%] {\n  border: 1px solid #e0e0e0;\n  margin-bottom: 2px;\n  margin-top: 2px;\n  background: white;\n  width: 100%;\n}\n\n.select-border-allocation[_ngcontent-%COMP%] {\n  border: 1px solid var(--ion-color-primary);\n  margin-bottom: 2px;\n  margin-top: 2px;\n  background: white;\n  width: 100%;\n}\n\n.fund-row-header[_ngcontent-%COMP%] {\n  color: white;\n  background-color: var(--ion-color-secondary);\n  height: 55px;\n}\n\n.fund-rowcontent[_ngcontent-%COMP%] {\n  color: black;\n  background-color: white;\n  border-bottom: groove;\n}\n\n.allocation-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], .allocation-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  width: 65% !important;\n}\n.allocation-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:last-child, .allocation-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:last-child {\n  width: 35% !important;\n}\n\ntable[_ngcontent-%COMP%] {\n  background: #fff;\n  margin-top: 8px;\n  width: 100%;\n}\ntable[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%] {\n  background: var(--ion-color-secondary) !important;\n  color: #fff;\n}\ntable[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  border-bottom: 1px solid #d7d7d7;\n  font-size: 1rem;\n  padding: 12px;\n  text-align: center;\n  word-break: break-word;\n  width: 25%;\n}\ntable.allocation-table[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\ntable.allocation-table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\n  display: flex;\n}\ntable.allocation-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], table.allocation-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  width: 50%;\n}\ntable.allocation-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  width: 50%;\n}\ntable.allocation-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   .amount-container[_ngcontent-%COMP%], table.allocation-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   .allocation-container[_ngcontent-%COMP%] {\n  align-items: center;\n  display: flex;\n  width: 100%;\n}\ntable.allocation-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   .amount-container[_ngcontent-%COMP%]   ion-input[_ngcontent-%COMP%], table.allocation-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   .allocation-container[_ngcontent-%COMP%]   ion-input[_ngcontent-%COMP%] {\n  border-bottom: 1px solid var(--ion-color-primary);\n  display: inline-block;\n  width: auto;\n}\ntable.allocation-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   .amount-container[_ngcontent-%COMP%]   i[_ngcontent-%COMP%], table.allocation-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   .allocation-container[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  cursor: pointer;\n  font-size: 24px;\n}\ntable.allocation-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   ion-select[_ngcontent-%COMP%] {\n  border-color: var(--ion-color-primary) !important;\n}\ntable.allocation-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   ion-select[_ngcontent-%COMP%]   .ion-option[_ngcontent-%COMP%] {\n  padding: 8px 10px;\n  text-align: left;\n}\ntable.allocation-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   ion-select[_ngcontent-%COMP%]   .ion-option[_ngcontent-%COMP%]   .ng-option-label[_ngcontent-%COMP%] {\n  white-space: normal;\n}\n\n.margin-label[_ngcontent-%COMP%] {\n  margin-top: 15px;\n  font-weight: bold;\n}\n\nselect[_ngcontent-%COMP%]:focus {\n  width: auto;\n  position: relative;\n}\n\n.hr[_ngcontent-%COMP%] {\n  border-bottom: 1px solid #ccc;\n  margin: 10px 0;\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcGFnZXMvZnVuZC1zd2l0Y2hpbmcvZnVuZC1zd2l0Y2hpbmcucGFnZS5zY3NzIiwid2VicGFjazovLy4vLi4vLi4vLi4vQWxsJTIwUHJvamVjdHMvTWFsYXlzaWFfQ2xpZW50QXBwX1JldmFtcC9TdW5BY2Nlc3NfSW9uaWM2X1JldmFtcC9zcmMvYXBwL3BhZ2VzL2Z1bmQtc3dpdGNoaW5nL2Z1bmQtc3dpdGNoaW5nLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDSTtFQUNJLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtFQUNBLFVBQUE7QUNBUjs7QURJUTtFQUNJLHVCQUFBO0FDRFo7QURHUTtFQUNJLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLGdCQUFBO0VBQ0Esc0JBQUE7RUFDQSxxQkFBQTtFQUNBLFlBQUE7QUNEWjtBREVZO0VBQ0ksZUFBQTtFQUNBLGlCQUFBO0FDQWhCO0FERVk7RUFDSSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0FDQWhCO0FER1E7RUFDSSxVQUFBO0FDRFo7QURHUTtFQUNJLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQ0RaO0FEVVE7RUFDSSwyQ0FBQTtBQ1JaO0FEVVE7RUFDSSxtQkFBQTtFQUNBLG9CQUFBO0VBQ0EsZ0JBQUE7QUNSWjs7QURXSTtFQUNJLHFEQUFBO0VBQ0EsOEJBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtBQ1JSOztBRFVBO0VBQ1Esd0JBQUE7QUNQUjs7QURTQTtFQUNRLHVDQUFBO0FDTlI7O0FEU0E7RUFDSSw0Q0FBQTtBQ05KOztBRFFBO0VBQ0ksV0FBQTtBQ0xKOztBRE9BO0VBQ0ksMkJBQUE7QUNKSjs7QURNQTtFQUNJLG1CQUFBO0VBQ0EseUJBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7QUNISjtBRElJO0VBQ0ksY0FBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFNBQUE7QUNGUjtBRElJO0VBQ0ksV0FBQTtFQUNBLHNCQUFBO0FDRlI7QURJSTtFQUNJLGVBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsU0FBQTtBQ0ZSOztBRE1BO0VBQ0ksMEJBQUE7RUFDQSw4QkFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLDhCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0Esc0JBQUE7RUFDQSxzQ0FBQTtFQUNBLG1CQUFBO0FDSEo7O0FES0U7RUFDRSwwQkFBQTtFQUNBLGdDQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsOEJBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxzQkFBQTtFQUNBLHNDQUFBO0VBQ0EsbUJBQUE7QUNGSjs7QURLQTtFQUNJLDBCQUFBO0VBQ0EsZ0NBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQ0FBQTtFQUNBLGdCQUFBO0VBR0EsZ0JBQUE7RUFDQSxzQkFBQTtFQUNBLHNDQUFBO0FDSko7O0FETUU7RUFDRSwwQkFBQTtFQUNBLGdDQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0NBQUE7RUFDQSxnQkFBQTtFQUdBLGdCQUFBO0VBQ0Esc0JBQUE7RUFDQSxzQ0FBQTtFQUNBLG1CQUFBO0FDTEo7O0FET0U7RUFDRSxlQUFBO0FDSko7O0FETUE7RUFDSSxpQkFBQTtBQ0hKOztBREtBO0VBQ0EsZ0JBQUE7QUNGQTs7QURVQTtFQUNJLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSx1REFBQTtFQUNBLGNBQUE7QUNQSjs7QURjRTtFQUNFLGVBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtBQ1hKOztBRGFDO0VBQ0csc0NBQUE7RUFDQSxtQkFBQTtBQ1ZKOztBRGFBO0VBQ0ksZ0JBQUE7QUNWSjs7QURZQTtFQUNJLGdCQUFBO0FDVEo7O0FEV0E7RUFDQSw0QkFBQTtBQ1JBOztBRFVBO0VBQ0ksNEJBQUE7QUNQSjs7QURTSTtFQUNJLGdDQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7QUNOUjtBRE9RO0VBQ0ksbUJBQUE7RUFDQSxtQkFBQTtFQUNBLDZCQUFBO0VBQ0EsWUFBQTtFQUNBLG9CQUFBO0VBQ0EsNEJBQUE7RUFDQSxpQkFBQTtFQUNBLHVCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtBQ0xaO0FETVk7RUFDSSxtQkFBQTtFQUNBLGNBQUE7QUNKaEI7QURNWTtFQUNJLGVBQUE7QUNKaEI7QURrQkk7RUFDQyxZQUFBO0VBQ0EsNENBQUE7QUNoQkw7O0FEa0JJO0VBQ0ksWUFBQTtFQUNBLHVCQUFBO0FDZlI7O0FEaUJJO0VBQ0ksWUFBQTtFQUNBLDRDQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7QUNkUjs7QURnQkk7RUFDSSxZQUFBO0VBQ0EsdUJBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUVELHFCQUFBO0FDZFA7O0FEaUJRO0VBQ0ksNENBQUE7RUFDQSw0QkFBQTtFQUNBLDRCQUFBO0VBQ0EsbUJBQUE7QUNkWjtBRGdCUTtFQUNJLDRCQUFBO0VBQ0EsZUFBQTtBQ2RaO0FEZ0JRO0VBQ0ksZUFBQTtBQ2RaO0FEaUJZO0VBQ0ksZUFBQTtFQUNBLGlCQUFBO0FDZmhCO0FEZ0JnQjtFQUNJLGdCQUFBO0FDZHBCOztBRG9CUTtFQUNJLGVBQUE7RUFDQSxpQkFBQTtBQ2pCWjtBRGtCWTtFQUNJLGdCQUFBO0FDaEJoQjs7QURzQkk7Ozs7RUFFSSxzQkFBQTtFQUNBLHFCQUFBO0FDakJSO0FEbUJJOzs7O0VBRUksb0NBQUE7RUFDQSxlQUFBO0FDZlI7QURtQkk7O0VBQ0ksMkZBQUE7RUFFQSx1QkFBQTtBQ2pCUjs7QURzQkE7RUFDSSxVQUFBO0FDbkJKOztBRHFCQTtFQUNJLGdCQUFBO0FDbEJKOztBRHFCSTtFQUNJLHNDQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtBQ2xCUjtBRG9CSTtFQUNJLGlCQUFBO0FDbEJSO0FEb0JJO0VBQ0ksNENBQUE7RUFDQSw0QkFBQTtFQUNBLDRCQUFBO0VBQ0EsbUJBQUE7QUNsQlI7QURvQkk7RUFDSSw0QkFBQTtFQUNBLGVBQUE7QUNsQlI7QURzQlE7RUFDSSxpQkFBQTtBQ3BCWjtBRHNCUTtFQUNJLHNDQUFBO0FDcEJaO0FEc0JRO0VBQ0ksK0JBQUE7QUNwQlo7QURzQlE7RUFDSSwrQkFBQTtBQ3BCWjtBRHNCUTtFQUNJLDZCQUFBO0FDcEJaO0FEc0JRO0VBQ0ksNEJBQUE7RUFDQSx1QkFBQTtFQUNBLHNCQUFBO0FDcEJaO0FEc0JnQjtFQUNJLHVCQUFBO0VBQ0Esb0JBQUE7RUFDQSxtQkFBQTtFQUNBLHFCQUFBO0FDcEJwQjtBRHdCUTtFQUNJLG1EQUFBO0VBQ0Esa0NBQUE7QUN0Qlo7QUR3QlE7RUFDSSxnQkFBQTtFQUNBLGVBQUE7QUN0Qlo7QUR1Qlk7RUFDSSw2QkFBQTtBQ3JCaEI7QURzQmdCO0VBQ0ksWUFBQTtFQUNBLFdBQUE7QUNwQnBCO0FEcUJvQjtFQUNJLFlBQUE7RUFDQSxTQUFBO0VBQ0EsUUFBQTtFQUNBLFdBQUE7QUNuQnhCO0FEd0JRO0VBQ0ksV0FBQTtFQUNBLG1CQUFBO0FDdEJaOztBRDJCQTtFQUNJLGlCQUFBO0FDeEJKOztBRDBCQTtFQUNJLHdCQUFBO0FDdkJKOztBRHlCQTtFQUNJLGlCQUFBO0VBQ0EsbUJBQUE7QUN0Qko7QUR1Qkk7RUFDSSxtQkFBQTtBQ3JCUjtBRHVCSTtFQUNJLGlCQUFBO0FDckJSO0FEdUJJO0VBQ0ksb0JBQUE7QUNyQlI7QUR1Qkk7RUFDSSxvQkFBQTtBQ3JCUjtBRHVCSTtFQUNJLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FDckJSO0FEc0JRO0VBQ0ksNkJBQUE7QUNwQlo7QURxQlk7RUFDSSxZQUFBO0VBQ0EsV0FBQTtBQ25CaEI7QURvQmdCO0VBQ0ksWUFBQTtFQUNBLFNBQUE7RUFDQSxRQUFBO0VBQ0EsV0FBQTtBQ2xCcEI7QUR1Qkk7RUFDSSxtQkFBQTtBQ3JCUjtBRHVCSTtFQUNJLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxvQkFBQTtBQ3JCUjtBRHVCSTtFQUNJLGVBQUE7QUNyQlI7O0FEd0JBO0VBQ0ksZ0JBQUE7QUNyQko7O0FEdUJBO0VBQ0kseUJBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLFdBQUE7QUNwQko7O0FEc0JFO0VBQ0UsMENBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLFdBQUE7QUNuQko7O0FEcUJFO0VBQ0UsWUFBQTtFQUNBLDRDQUFBO0VBQ0EsWUFBQTtBQ2xCSjs7QURxQkU7RUFDRSxZQUFBO0VBQ0EsdUJBQUE7RUFJRCxxQkFBQTtBQ3JCSDs7QUR5Qkk7RUFDSSxxQkFBQTtBQ3RCUjtBRHVCUTtFQUNJLHFCQUFBO0FDckJaOztBRHlCQTtFQUNJLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7QUN0Qko7QUR1Qkk7RUFDSSxpREFBQTtFQUNBLFdBQUE7QUNyQlI7QUR1Qkk7RUFDSSxnQ0FBQTtFQUNBLGVBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxzQkFBQTtFQUNBLFVBQUE7QUNyQlI7QUQwQkk7RUFDSSxhQUFBO0VBQ0Esc0JBQUE7QUN4QlI7QUR5QlE7RUFDSSxhQUFBO0FDdkJaO0FEeUJRO0VBQ0ksVUFBQTtBQ3ZCWjtBRHlCUTtFQUNJLFVBQUE7QUN2Qlo7QUR3Qlk7RUFDSSxtQkFBQTtFQUNBLGFBQUE7RUFDQSxXQUFBO0FDdEJoQjtBRHVCZ0I7RUFDSSxpREFBQTtFQUNBLHFCQUFBO0VBQ0EsV0FBQTtBQ3JCcEI7QUR1QmdCO0VBQ0ksZUFBQTtFQUNBLGVBQUE7QUNyQnBCO0FEMkJZO0VBQ0ksaURBQUE7QUN6QmhCO0FEMEJnQjtFQUNJLGlCQUFBO0VBQ0EsZ0JBQUE7QUN4QnBCO0FEeUJvQjtFQUNJLG1CQUFBO0FDdkJ4Qjs7QUQ4QkE7RUFDSSxnQkFBQTtFQUNBLGlCQUFBO0FDM0JKOztBRDZCQTtFQUNJLFdBQUE7RUFDQSxrQkFBQTtBQzFCSjs7QUQ0QkE7RUFDSSw2QkFBQTtFQUNBLGNBQUE7RUFDQSxXQUFBO0FDekJKIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbiAgICAuZmVlZGJhY2sge1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICBib3R0b206IDE2cHg7XHJcbiAgICAgICAgcmlnaHQ6IDE2cHg7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgICAgICAgei1pbmRleDogOTtcclxuICAgIH1cclxuXHJcbiAgICAuZnVuZC10YWJsZS1jb250YWluZXIge1xyXG4gICAgICAgIHRhYmxlIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRkIHtcclxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcclxuICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogZ3Jvb3ZlO1xyXG4gICAgICAgICAgICBwYWRkaW5nOiA4cHg7XHJcbiAgICAgICAgICAgIGRpdjpmaXJzdC1jaGlsZCB7XHJcbiAgICAgICAgICAgICAgICBmbGV4LWJhc2lzOiA1MCU7XHJcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpIHtcclxuICAgICAgICAgICAgICAgIGJvdHRvbTogMjdweDtcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgIHJpZ2h0OiAxMnB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5zZWxlY3QtY29udGFpbmVyIHtcclxuICAgICAgICAgICAgd2lkdGg6IDUwJTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdHIge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTZweDtcclxuICAgICAgICAgICAgbWFyZ2luLXRvcDogMTJweDtcclxuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBpb24tc2VsZWN0IHtcclxuICAgICAgICAvLyAgICAgYm9yZGVyOiAxcHggc29saWQgI2I1YWVhZSAhaW1wb3J0YW50O1xyXG4gICAgICAgIC8vICAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgICAgIC8vICAgICAuaW9uLW9wdGlvbiB7XHJcbiAgICAgICAgLy8gICAgICAgICB3aGl0ZS1zcGFjZTogbm9ybWFsICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgLy8gICAgIH1cclxuICAgICAgICAvLyB9XHJcbiAgICAgICAgaW9uLWlucHV0IHtcclxuICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNiNWFlYWUgIWltcG9ydGFudDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmFtb3VudC1jb250YWluZXIge1xyXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcclxuICAgICAgICAgICAgbWluLWhlaWdodDogNDRweDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAud2hpdGVfY29udGFpbmVyX2JvcmRlcl9yYWRpdXMge1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC43KSAhaW1wb3J0YW50O1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDE1cHggIWltcG9ydGFudDtcclxuICAgICAgICBtYXJnaW46IDE1cHg7XHJcbiAgICAgICAgcGFkZGluZzogMTVweDtcclxuICAgIH1cclxuLnBhZGRpbmdfMTUge1xyXG4gICAgICAgIHBhZGRpbmc6IDE1cHggIWltcG9ydGFudDtcclxuICAgIH1cclxuLmhlYWRpbmcge1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiBBZ2VuZGEtU2VtaUJvbGQgIWltcG9ydGFudDtcclxuICAgIH1cclxuXHJcbi50ZXh0X2NvbG9yX2Jhc2Uge1xyXG4gICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1zZWNvbmRhcnkpICFpbXBvcnRhbnQ7XHJcbn1cclxuLm1hbmRhdG9yeV9zdGFyIHtcclxuICAgIGNvbG9yOiAjZjAwO1xyXG59XHJcbi5tYXJnaW57XHJcbiAgICBtYXJnaW4tbGVmdDo1cHggIWltcG9ydGFudDtcclxufVxyXG4uZXJyb3ItZGlhbG9nIHtcclxuICAgIGJhY2tncm91bmQ6ICNmOGU4ZWM7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjYjgxZjQxO1xyXG4gICAgYm9yZGVyLWxlZnQtd2lkdGg6IDRweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDI0cHg7XHJcbiAgICBwYWRkaW5nOiAxNXB4O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgLmNsb3NlLWljb24ge1xyXG4gICAgICAgIGNvbG9yOiAjYjgxZjQxO1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICBsZWZ0OiAxM3B4O1xyXG4gICAgICAgIHRvcDogMTVweDtcclxuICAgIH1cclxuICAgIC5lcnJvci1tc2cge1xyXG4gICAgICAgIGNvbG9yOiAjMDAwO1xyXG4gICAgICAgIHBhZGRpbmc6IDAgMzBweCAwIDIwcHg7XHJcbiAgICB9XHJcbiAgICAuZGlzbWlzcy1idG4ge1xyXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHJpZ2h0OiAyNHB4O1xyXG4gICAgICAgIHRvcDogMTVweDtcclxuICAgIH1cclxufVxyXG5cclxuLmJ0bl9jZW50ZXIyIHtcclxuICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xyXG4gICAgYmFja2dyb3VuZDogIzAwMmQzZCAhaW1wb3J0YW50O1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHggIWltcG9ydGFudDtcclxuICAgIG1pbi13aWR0aDogMTI1cHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gICAgbWluLWhlaWdodDogNDVweDtcclxuICAgIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XHJcbiAgICBmb250LWZhbWlseTogQWdlbmRhLVJlZ3VsYXIgIWltcG9ydGFudDtcclxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgfVxyXG4gIC5idG5fY2VudGVyMyB7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcclxuICAgIC0tYmFja2dyb3VuZDogIzAwMmQzZCAhaW1wb3J0YW50O1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHggIWltcG9ydGFudDtcclxuICAgIG1pbi13aWR0aDogMTI1cHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gICAgbWluLWhlaWdodDogNDVweDtcclxuICAgIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XHJcbiAgICBmb250LWZhbWlseTogQWdlbmRhLVJlZ3VsYXIgIWltcG9ydGFudDtcclxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgfVxyXG5cclxuLmJ0bl9jZW50ZXIge1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XHJcbiAgICAtLWJhY2tncm91bmQ6ICMwMDJkM2QgIWltcG9ydGFudDtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIG1hcmdpbi10b3A6IDE1cHg7XHJcbiAgICAtLWJvcmRlci1yYWRpdXM6IDEwcHggIWltcG9ydGFudDtcclxuICAgIG1pbi13aWR0aDogMTAwcHg7XHJcbiAgICAvLyBtYXJnaW4tbGVmdDogLTMxcHg7XHJcbiAgICAvL2ZvbnQtc2l6ZTogMS43cmVtO1xyXG4gICAgbWluLWhlaWdodDogNDVweDtcclxuICAgIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XHJcbiAgICBmb250LWZhbWlseTogQWdlbmRhLVJlZ3VsYXIgIWltcG9ydGFudDtcclxuICB9XHJcbiAgLmJ0bl9jZW50ZXIxIHtcclxuICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xyXG4gICAgLS1iYWNrZ3JvdW5kOiAjMDAyZDNkICFpbXBvcnRhbnQ7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBtYXJnaW4tdG9wOiAxNXB4O1xyXG4gICAgLS1ib3JkZXItcmFkaXVzOiAxMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICBtaW4td2lkdGg6IDIwMHB4O1xyXG4gICAgLy8gbWFyZ2luLWxlZnQ6IC0zMXB4O1xyXG4gICAgLy9mb250LXNpemU6IDEuN3JlbTtcclxuICAgIG1pbi1oZWlnaHQ6IDQ1cHg7XHJcbiAgICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xyXG4gICAgZm9udC1mYW1pbHk6IEFnZW5kYS1SZWd1bGFyICFpbXBvcnRhbnQ7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAtNXB4O1xyXG4gIH1cclxuICAucGFyYTJ7XHJcbiAgICBmb250LXNpemU6IDFyZW07XHJcbn1cclxuLnBhcmEze1xyXG4gICAgZm9udC1zaXplOiAwLjhyZW07XHJcbn1cclxuLmxhYmVsLW1hcmdpbntcclxubWFyZ2luLWxlZnQ6IDVweDtcclxufVxyXG5cclxuLy8gaW9uLW1vZGFse1xyXG4vLyAgICAgd2lkdGg6IDUwJSAhaW1wb3J0YW50O1xyXG4vLyAgICAgaGVpZ2h0OiA1MCUgIWltcG9ydGFudDtcclxuXHJcbi8vIH1cclxuLnByb2ZpbGUtcGljLWNvbnRhaW5lciB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICB3aWR0aDogNDBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWlvbi1jb2xvci1zZWNvbmRhcnkpICFpbXBvcnRhbnQ7O1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgfVxyXG4gIFxyXG4gIGlvbi1hdmF0YXIge1xyXG4gICAvLyB0ZXh0LWFsaWduOiByaWdodDtcclxuICB9XHJcbiAgXHJcbiAgI2F2dGFyLWljb24ge1xyXG4gICAgZm9udC1zaXplOiAxN3B4O1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgYm90dG9tOiAxMnB4OyAvLyB0d2VhayB0aGlzXHJcbiAgICByaWdodDogMTJweDsgLy8gdHdlYWsgdGhpc1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgfVxyXG4gaW9uLWxhYmVse1xyXG4gICAgZm9udC1mYW1pbHk6IEFnZW5kYS1SZWd1bGFyICFpbXBvcnRhbnQ7XHJcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gfVxyXG5cclxuLml0ZW0tYmFja2cge1xyXG4gICAgYmFja2dyb3VuZDogbm9uZTtcclxufVxyXG4uZGl2Lml0ZW0tbmF0aXZle1xyXG4gICAgYmFja2dyb3VuZDogbm9uZTtcclxufVxyXG4uZm9udC1sYWJlbDF7XHJcbmZvbnQtc2l6ZTogMS4xcmVtICFpbXBvcnRhbnQ7XHJcbn1cclxuLmZvbnQtbGFiZWx7XHJcbiAgICBmb250LXNpemU6IDAuOXJlbSAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG4gICAgLnRhYi1jb250YWluZXIge1xyXG4gICAgICAgIGJvcmRlci1ib3R0b206IDVweCBzb2xpZCAjZmViZTEwLDtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDE2cHg7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgICAgICAudGFiMSB7XHJcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICMwMDJkM2Q7XHJcbiAgICAgICAgICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkIHdoaXRlO1xyXG4gICAgICAgICAgICBjb2xvcjogIHdoaXRlO1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcclxuICAgICAgICAgICAgZm9udC1mYW1pbHk6IGFnZW5kYS1zZW1pYm9sZDtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxLjFyZW07XHJcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgICBwYWRkaW5nOiA4cHg7XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgd2lkdGg6IDMzLjIlO1xyXG4gICAgICAgICAgICAmLnRhYi1zZWxlY3RlZCB7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZmViZTEwO1xyXG4gICAgICAgICAgICAgICAgY29sb3I6ICMwMDJkM2Q7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgJjpsYXN0LWNoaWxkIHtcclxuICAgICAgICAgICAgICAgIGJvcmRlci1yaWdodDogMDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAudGFiMiB7XHJcbiAgICAgICAgICAgIEBleHRlbmQgLnRhYjE7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC50YWIzIHtcclxuICAgICAgICAgICAgQGV4dGVuZCAudGFiMTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLnRhYjQge1xyXG4gICAgICAgICAgICBAZXh0ZW5kIC50YWIxO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAudGhlYWQtZWRpdHsgXHJcbiAgICAgY29sb3I6d2hpdGU7XHJcbiAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXNlY29uZGFyeSk7XHJcbiAgICB9XHJcbiAgICAudGJvZHktZWRpdHtcclxuICAgICAgICBjb2xvcjogYmxhY2s7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICB9XHJcbiAgICAucm93LWhlYWRlcntcclxuICAgICAgICBjb2xvcjp3aGl0ZTtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5KTtcclxuICAgICAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICAgICAgcGFkZGluZzogNSU7XHJcbiAgICB9XHJcbiAgICAucm93Y29udGVudHtcclxuICAgICAgICBjb2xvcjogYmxhY2s7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICAgICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgICAgIHBhZGRpbmc6IDUlO1xyXG4gICAgICAgLy8gYm9yZGVyLWJvdHRvbTogMXB4ICB2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5KTtcclxuICAgICAgIGJvcmRlci1ib3R0b206IGdyb292ZTtcclxuICAgIH1cclxuICAgIC53aXRoZHJhd2FsLXBhcnRpY3VsYXJzIHtcclxuICAgICAgICAubGFiZWwge1xyXG4gICAgICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXNlY29uZGFyeSkgIWltcG9ydGFudDtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxLjJyZW0gIWltcG9ydGFudDtcclxuICAgICAgICAgICAgZm9udC1mYW1pbHk6IGFnZW5kYS1zZW1pYm9sZDtcclxuICAgICAgICAgICAgd2hpdGUtc3BhY2U6IG5vcm1hbDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmZvcm0tdmFsdWUge1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDEuMXJlbSAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICBtYXJnaW4tdG9wOiA4cHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5pbnB1dC1ib3gge1xyXG4gICAgICAgICAgICBtYXJnaW4tdG9wOiA4cHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5pbHAge1xyXG4gICAgICAgICAgICAuYWRkLXJvdyB7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiA4cHg7XHJcbiAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICAgICAgICAgICAgICAgIC5hZGQtcm93LWJ0biB7XHJcbiAgICAgICAgICAgICAgICAgICAgbWF4LXdpZHRoOiAxMDBweDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC5pbHAge1xyXG4gICAgICAgIC5hZGQtcm93IHtcclxuICAgICAgICAgICAgbWFyZ2luLXRvcDogOHB4O1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICAgICAgICAgICAgLmFkZC1yb3ctYnRuIHtcclxuICAgICAgICAgICAgICAgIG1heC13aWR0aDogMTAwcHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAuaXRlbS1pbnB1dC1kaXNhYmxlZCxcclxuLml0ZW0tc2VsZWN0LWRpc2FibGVkIHtcclxuICAgIGlvbi1sYWJlbCxcclxuICAgIC5zZWxlY3QtZGlzYWJsZWQge1xyXG4gICAgICAgIGNvbG9yOiAjOTk5ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgb3BhY2l0eTogMSAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG4gICAgaW9uLWlucHV0LFxyXG4gICAgaW9uLXNlbGVjdCB7XHJcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2MzYzFjMSAhaW1wb3J0YW50O1xyXG4gICAgICAgIHBhZGRpbmc6IDAgMTVweDtcclxuICAgICAgICAvLyBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICAgICAgICAvLyBvcGFjaXR5OiAwLjY7XHJcbiAgICB9XHJcbiAgICBpb24tc2VsZWN0IHtcclxuICAgICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudCB1cmwoLy4uL2Fzc2V0cy9pbWdzL2Fycm93LWRvd24ucG5nKSBuby1yZXBlYXQgOTUlIGNlbnRlciAhaW1wb3J0YW50O1xyXG4gICAgICAgLy8gYmFja2dyb3VuZDogdXJsKC8uLi9hc3NldHMvaW1ncy9tZWRpY2FyZC1mcm9udC5qcGcpIG5vLXJlcGVhdCBjZW50ZXIgdG9wL2NvdmVyO1xyXG4gICAgICAgIGhlaWdodDogMzdweCAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG4gICAgXHJcbn1cclxuXHJcbi5zZWxlY3QtaWNvbiB7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG59XHJcbi5zdWJtaXQtYnRuIHtcclxuICAgIG1hcmdpbi10b3A6IDE2cHg7XHJcbn1cclxuLnJldmlldy1jb25maXJtLCAucGF5bWVudC1kZXRhaWxzIHtcclxuICAgIGg1IHtcclxuICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5KTtcclxuICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAwO1xyXG4gICAgICAgIHBhZGRpbmc6IDhweDtcclxuICAgIH1cclxuICAgIC5kZXRhaWxzLWNvbnRhaW5lciB7XHJcbiAgICAgICAgcGFkZGluZy1sZWZ0OiA4cHg7XHJcbiAgICB9XHJcbiAgICAubGFiZWwge1xyXG4gICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5KSAhaW1wb3J0YW50O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMS4ycmVtICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6IGFnZW5kYS1zZW1pYm9sZDtcclxuICAgICAgICB3aGl0ZS1zcGFjZTogbm9ybWFsO1xyXG4gICAgfVxyXG4gICAgLmZvcm0tdmFsdWUge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMS4xcmVtICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogOHB4O1xyXG4gICAgfVxyXG5cclxuICAgIC5mYXRjYS1jcnMtY29udGFpbmVyIHtcclxuICAgICAgICBwIHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxLjJyZW07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5sYWJlbCB7XHJcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBBZ2VuZGEtUmVndWxhciAhaW1wb3J0YW50O1xyXG4gICAgICAgIH1cclxuICAgICAgICAubGFiZWwtbWQge1xyXG4gICAgICAgICAgICBtYXJnaW46IDAgOHB4IDEzcHggMCAhaW1wb3J0YW50O1xyXG4gICAgICAgIH1cclxuICAgICAgICAubGFiZWwtaW9zIHtcclxuICAgICAgICAgICAgbWFyZ2luOiAwIDhweCAxM3B4IDAgIWltcG9ydGFudDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmNoZWNrYm94IHtcclxuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxNnB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5jaGVja2JveC1pY29uIHtcclxuICAgICAgICAgICAgYm9yZGVyLXdpZHRoOiAxcHggIWltcG9ydGFudDtcclxuICAgICAgICAgICAgaGVpZ2h0OiAyN3B4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgIHdpZHRoOiAyN3B4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgICYuY2hlY2tib3gtY2hlY2tlZCB7XHJcbiAgICAgICAgICAgICAgICAuY2hlY2tib3gtaW5uZXIge1xyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTNweCAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAgICAgICAgIGxlZnQ6IDlweCAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAgICAgICAgIHRvcDogNHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDhweCAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5jaGVja2JveC1jaGVja2VkIHtcclxuICAgICAgICAgICAgYm9yZGVyLWNvbG9yOiB2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5KSAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAgd2hpdGUhaW1wb3J0YW50O1xyXG4gICAgICAgIH1cclxuICAgICAgICBpb24tbGlzdCB7XHJcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDA7XHJcbiAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMDtcclxuICAgICAgICAgICAgaW9uLXJhZGlvIHtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMTZweCAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAgICAgLnJhZGlvLWljb24ge1xyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMjdweDtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMjdweDtcclxuICAgICAgICAgICAgICAgICAgICAucmFkaW8taW5uZXIge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEzcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxlZnQ6IDVweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdG9wOiA1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxM3B4O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBociB7XHJcbiAgICAgICAgICAgIGhlaWdodDogMnB4O1xyXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAyNHB4O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxucCB7XHJcbiAgICBmb250LXNpemU6IDEuMXJlbTtcclxufVxyXG5oMiB7XHJcbiAgICBtYXJnaW4tdG9wOiAwICFpbXBvcnRhbnQ7XHJcbn1cclxuLnJhZGlvLWNvbnRhaW5lciB7XHJcbiAgICBmb250LXNpemU6IDEuMXJlbTtcclxuICAgIG1hcmdpbi1ib3R0b206IDE2cHg7XHJcbiAgICBpb24tbGFiZWwge1xyXG4gICAgICAgIHdoaXRlLXNwYWNlOiBub3JtYWw7XHJcbiAgICB9XHJcbiAgICAuaGVhZGluZyB7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICB9XHJcbiAgICAubGFiZWwtbWQge1xyXG4gICAgICAgIG1hcmdpbjogMCAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG4gICAgLmxhYmVsLWlvcyB7XHJcbiAgICAgICAgbWFyZ2luOiAwICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbiAgICBpb24tbGlzdCB7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMDtcclxuICAgICAgICBwYWRkaW5nLWxlZnQ6IDA7XHJcbiAgICAgICAgcGFkZGluZy1yaWdodDogMDtcclxuICAgICAgICBpb24tcmFkaW8ge1xyXG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDE2cHggIWltcG9ydGFudDtcclxuICAgICAgICAgICAgLnJhZGlvLWljb24ge1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAyN3B4O1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDI3cHg7XHJcbiAgICAgICAgICAgICAgICAucmFkaW8taW5uZXIge1xyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTNweDtcclxuICAgICAgICAgICAgICAgICAgICBsZWZ0OiA1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgdG9wOiA1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEzcHg7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBpb24tcm93IHtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgfVxyXG4gICAgaW9uLWNvbCB7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICBhbGlnbi1zZWxmOiBzdHJldGNoO1xyXG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xyXG4gICAgfVxyXG4gICAgLnNlbGVjdC1wbGFuIHtcclxuICAgICAgICBtYXJnaW4tdG9wOiA4cHg7XHJcbiAgICB9XHJcbn1cclxuLnNlbGVjdHtcclxuICAgIG1hcmdpbi1sZWZ0OiAwcHg7XHJcbn1cclxuLnNlbGVjdC1ib3JkZXIge1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2UwZTBlMDtcclxuICAgIG1hcmdpbi1ib3R0b206IDJweDtcclxuICAgIG1hcmdpbi10b3A6IDJweDtcclxuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG4gIC5zZWxlY3QtYm9yZGVyLWFsbG9jYXRpb24ge1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMnB4O1xyXG4gICAgbWFyZ2luLXRvcDogMnB4O1xyXG4gICAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICB9XHJcbiAgLmZ1bmQtcm93LWhlYWRlcntcclxuICAgIGNvbG9yOndoaXRlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXNlY29uZGFyeSk7XHJcbiAgICBoZWlnaHQ6IDU1cHg7XHJcbiAgIC8vIHBhZGRpbmc6IDUlO1xyXG4gIH1cclxuICAuZnVuZC1yb3djb250ZW50e1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgIC8vIGhlaWdodDogNTVweDtcclxuICAgLy8gcGFkZGluZzogNSU7XHJcbiAgIC8vIGJvcmRlci1ib3R0b206IDFweCAgdmFyKC0taW9uLWNvbG9yLXNlY29uZGFyeSk7XHJcbiAgIGJvcmRlci1ib3R0b206IGdyb292ZTtcclxufVxyXG5cclxuLmFsbG9jYXRpb24tdGFibGUge1xyXG4gICAgdGQsIHRoIHtcclxuICAgICAgICB3aWR0aDogNjUlICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgJjpsYXN0LWNoaWxkIHtcclxuICAgICAgICAgICAgd2lkdGg6IDM1JSAhaW1wb3J0YW50O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG50YWJsZSB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gICAgbWFyZ2luLXRvcDogOHB4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICB0aGVhZCB7XHJcbiAgICAgICAgYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXNlY29uZGFyeSkgIWltcG9ydGFudDtcclxuICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgIH1cclxuICAgIHRoIHtcclxuICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2Q3ZDdkNztcclxuICAgICAgICBmb250LXNpemU6IDEuMHJlbTtcclxuICAgICAgICBwYWRkaW5nOiAxMnB4O1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICB3b3JkLWJyZWFrOiBicmVhay13b3JkO1xyXG4gICAgICAgIHdpZHRoOiAyNSU7XHJcbiAgICB9XHJcbiAgICB0ZCB7XHJcbiAgICAgICAgQGV4dGVuZCB0aDtcclxuICAgIH1cclxuICAgICYuYWxsb2NhdGlvbi10YWJsZSB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgIHRyIHtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGgge1xyXG4gICAgICAgICAgICB3aWR0aDogNTAlO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0ZCB7XHJcbiAgICAgICAgICAgIHdpZHRoOiA1MCU7XHJcbiAgICAgICAgICAgIC5hbW91bnQtY29udGFpbmVyIHtcclxuICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICBpb24taW5wdXQge1xyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiBhdXRvO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjRweDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAuYWxsb2NhdGlvbi1jb250YWluZXIge1xyXG4gICAgICAgICAgICAgICAgQGV4dGVuZCAuYW1vdW50LWNvbnRhaW5lcjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpb24tc2VsZWN0IHtcclxuICAgICAgICAgICAgICAgIGJvcmRlci1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgICAgICAuaW9uLW9wdGlvbiB7XHJcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogOHB4IDEwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgICAgICAgICAgICAgICAgICAubmctb3B0aW9uLWxhYmVsIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2hpdGUtc3BhY2U6IG5vcm1hbDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuLm1hcmdpbi1sYWJlbHtcclxuICAgIG1hcmdpbi10b3A6IDE1cHg7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG5zZWxlY3Q6Zm9jdXMge1xyXG4gICAgd2lkdGg6IGF1dG87XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuLmhyIHtcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjY2NjO1xyXG4gICAgbWFyZ2luOiAxMHB4IDA7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICB9IiwiLmZlZWRiYWNrIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IDE2cHg7XG4gIHJpZ2h0OiAxNnB4O1xuICB0ZXh0LWFsaWduOiByaWdodDtcbiAgei1pbmRleDogOTtcbn1cblxuLmZ1bmQtdGFibGUtY29udGFpbmVyIHRhYmxlIHtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG59XG4uZnVuZC10YWJsZS1jb250YWluZXIgdGQge1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBkaXNwbGF5OiBmbGV4O1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xuICBib3JkZXItYm90dG9tOiBncm9vdmU7XG4gIHBhZGRpbmc6IDhweDtcbn1cbi5mdW5kLXRhYmxlLWNvbnRhaW5lciB0ZCBkaXY6Zmlyc3QtY2hpbGQge1xuICBmbGV4LWJhc2lzOiA1MCU7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuLmZ1bmQtdGFibGUtY29udGFpbmVyIHRkIGkge1xuICBib3R0b206IDI3cHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDEycHg7XG59XG4uZnVuZC10YWJsZS1jb250YWluZXIgLnNlbGVjdC1jb250YWluZXIge1xuICB3aWR0aDogNTAlO1xufVxuLmZ1bmQtdGFibGUtY29udGFpbmVyIHRyIHtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbi1ib3R0b206IDE2cHg7XG4gIG1hcmdpbi10b3A6IDEycHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5mdW5kLXRhYmxlLWNvbnRhaW5lciBpb24taW5wdXQge1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2I1YWVhZSAhaW1wb3J0YW50O1xufVxuLmZ1bmQtdGFibGUtY29udGFpbmVyIC5hbW91bnQtY29udGFpbmVyLCAuZnVuZC10YWJsZS1jb250YWluZXIgdGFibGUuYWxsb2NhdGlvbi10YWJsZSB0ZCAuYWxsb2NhdGlvbi1jb250YWluZXIsIHRhYmxlLmFsbG9jYXRpb24tdGFibGUgdGQgLmZ1bmQtdGFibGUtY29udGFpbmVyIC5hbGxvY2F0aW9uLWNvbnRhaW5lciB7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICBtaW4taGVpZ2h0OiA0NHB4O1xufVxuXG4ud2hpdGVfY29udGFpbmVyX2JvcmRlcl9yYWRpdXMge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNykgIWltcG9ydGFudDtcbiAgYm9yZGVyLXJhZGl1czogMTVweCAhaW1wb3J0YW50O1xuICBtYXJnaW46IDE1cHg7XG4gIHBhZGRpbmc6IDE1cHg7XG59XG5cbi5wYWRkaW5nXzE1IHtcbiAgcGFkZGluZzogMTVweCAhaW1wb3J0YW50O1xufVxuXG4uaGVhZGluZyB7XG4gIGZvbnQtZmFtaWx5OiBBZ2VuZGEtU2VtaUJvbGQgIWltcG9ydGFudDtcbn1cblxuLnRleHRfY29sb3JfYmFzZSB7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5KSAhaW1wb3J0YW50O1xufVxuXG4ubWFuZGF0b3J5X3N0YXIge1xuICBjb2xvcjogI2YwMDtcbn1cblxuLm1hcmdpbiB7XG4gIG1hcmdpbi1sZWZ0OiA1cHggIWltcG9ydGFudDtcbn1cblxuLmVycm9yLWRpYWxvZyB7XG4gIGJhY2tncm91bmQ6ICNmOGU4ZWM7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNiODFmNDE7XG4gIGJvcmRlci1sZWZ0LXdpZHRoOiA0cHg7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgbWFyZ2luLWJvdHRvbTogMjRweDtcbiAgcGFkZGluZzogMTVweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLmVycm9yLWRpYWxvZyAuY2xvc2UtaWNvbiB7XG4gIGNvbG9yOiAjYjgxZjQxO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDEzcHg7XG4gIHRvcDogMTVweDtcbn1cbi5lcnJvci1kaWFsb2cgLmVycm9yLW1zZyB7XG4gIGNvbG9yOiAjMDAwO1xuICBwYWRkaW5nOiAwIDMwcHggMCAyMHB4O1xufVxuLmVycm9yLWRpYWxvZyAuZGlzbWlzcy1idG4ge1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMjRweDtcbiAgdG9wOiAxNXB4O1xufVxuXG4uYnRuX2NlbnRlcjIge1xuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbiAgYmFja2dyb3VuZDogIzAwMmQzZCAhaW1wb3J0YW50O1xuICBjb2xvcjogd2hpdGU7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHggIWltcG9ydGFudDtcbiAgbWluLXdpZHRoOiAxMjVweDtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgbWluLWhlaWdodDogNDVweDtcbiAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcbiAgZm9udC1mYW1pbHk6IEFnZW5kYS1SZWd1bGFyICFpbXBvcnRhbnQ7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG5cbi5idG5fY2VudGVyMyB7XG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xuICAtLWJhY2tncm91bmQ6ICMwMDJkM2QgIWltcG9ydGFudDtcbiAgY29sb3I6IHdoaXRlO1xuICBtYXJnaW4tdG9wOiAxMHB4O1xuICBib3JkZXItcmFkaXVzOiAxMHB4ICFpbXBvcnRhbnQ7XG4gIG1pbi13aWR0aDogMTI1cHg7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gIG1pbi1oZWlnaHQ6IDQ1cHg7XG4gIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XG4gIGZvbnQtZmFtaWx5OiBBZ2VuZGEtUmVndWxhciAhaW1wb3J0YW50O1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufVxuXG4uYnRuX2NlbnRlciB7XG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xuICAtLWJhY2tncm91bmQ6ICMwMDJkM2QgIWltcG9ydGFudDtcbiAgY29sb3I6IHdoaXRlO1xuICBtYXJnaW4tdG9wOiAxNXB4O1xuICAtLWJvcmRlci1yYWRpdXM6IDEwcHggIWltcG9ydGFudDtcbiAgbWluLXdpZHRoOiAxMDBweDtcbiAgbWluLWhlaWdodDogNDVweDtcbiAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcbiAgZm9udC1mYW1pbHk6IEFnZW5kYS1SZWd1bGFyICFpbXBvcnRhbnQ7XG59XG5cbi5idG5fY2VudGVyMSB7XG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xuICAtLWJhY2tncm91bmQ6ICMwMDJkM2QgIWltcG9ydGFudDtcbiAgY29sb3I6IHdoaXRlO1xuICBtYXJnaW4tdG9wOiAxNXB4O1xuICAtLWJvcmRlci1yYWRpdXM6IDEwcHggIWltcG9ydGFudDtcbiAgbWluLXdpZHRoOiAyMDBweDtcbiAgbWluLWhlaWdodDogNDVweDtcbiAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcbiAgZm9udC1mYW1pbHk6IEFnZW5kYS1SZWd1bGFyICFpbXBvcnRhbnQ7XG4gIG1hcmdpbi1ib3R0b206IC01cHg7XG59XG5cbi5wYXJhMiB7XG4gIGZvbnQtc2l6ZTogMXJlbTtcbn1cblxuLnBhcmEzIHtcbiAgZm9udC1zaXplOiAwLjhyZW07XG59XG5cbi5sYWJlbC1tYXJnaW4ge1xuICBtYXJnaW4tbGVmdDogNXB4O1xufVxuXG4ucHJvZmlsZS1waWMtY29udGFpbmVyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBoZWlnaHQ6IDQwcHg7XG4gIHdpZHRoOiA0MHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5KSAhaW1wb3J0YW50O1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuI2F2dGFyLWljb24ge1xuICBmb250LXNpemU6IDE3cHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiAxMnB4O1xuICByaWdodDogMTJweDtcbiAgY29sb3I6ICNmZmY7XG59XG5cbmlvbi1sYWJlbCB7XG4gIGZvbnQtZmFtaWx5OiBBZ2VuZGEtUmVndWxhciAhaW1wb3J0YW50O1xuICBmb250LXdlaWdodDogbm9ybWFsO1xufVxuXG4uaXRlbS1iYWNrZyB7XG4gIGJhY2tncm91bmQ6IG5vbmU7XG59XG5cbi5kaXYuaXRlbS1uYXRpdmUge1xuICBiYWNrZ3JvdW5kOiBub25lO1xufVxuXG4uZm9udC1sYWJlbDEge1xuICBmb250LXNpemU6IDEuMXJlbSAhaW1wb3J0YW50O1xufVxuXG4uZm9udC1sYWJlbCB7XG4gIGZvbnQtc2l6ZTogMC45cmVtICFpbXBvcnRhbnQ7XG59XG5cbi50YWItY29udGFpbmVyIHtcbiAgYm9yZGVyLWJvdHRvbTogNXB4IHNvbGlkICNmZWJlMTA7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIG1hcmdpbi1ib3R0b206IDE2cHg7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG59XG4udGFiLWNvbnRhaW5lciAudGFiMSwgLnRhYi1jb250YWluZXIgLnRhYjQsIC50YWItY29udGFpbmVyIC50YWIzLCAudGFiLWNvbnRhaW5lciAudGFiMiB7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGJhY2tncm91bmQ6ICMwMDJkM2Q7XG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkIHdoaXRlO1xuICBjb2xvcjogd2hpdGU7XG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICBmb250LWZhbWlseTogYWdlbmRhLXNlbWlib2xkO1xuICBmb250LXNpemU6IDEuMXJlbTtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHBhZGRpbmc6IDhweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB3aWR0aDogMzMuMiU7XG59XG4udGFiLWNvbnRhaW5lciAudGFiMS50YWItc2VsZWN0ZWQsIC50YWItY29udGFpbmVyIC50YWItc2VsZWN0ZWQudGFiNCwgLnRhYi1jb250YWluZXIgLnRhYi1zZWxlY3RlZC50YWIzLCAudGFiLWNvbnRhaW5lciAudGFiLXNlbGVjdGVkLnRhYjIge1xuICBiYWNrZ3JvdW5kOiAjZmViZTEwO1xuICBjb2xvcjogIzAwMmQzZDtcbn1cbi50YWItY29udGFpbmVyIC50YWIxOmxhc3QtY2hpbGQsIC50YWItY29udGFpbmVyIC50YWI0Omxhc3QtY2hpbGQsIC50YWItY29udGFpbmVyIC50YWIzOmxhc3QtY2hpbGQsIC50YWItY29udGFpbmVyIC50YWIyOmxhc3QtY2hpbGQge1xuICBib3JkZXItcmlnaHQ6IDA7XG59XG4udGhlYWQtZWRpdCB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXNlY29uZGFyeSk7XG59XG5cbi50Ym9keS1lZGl0IHtcbiAgY29sb3I6IGJsYWNrO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbn1cblxuLnJvdy1oZWFkZXIge1xuICBjb2xvcjogd2hpdGU7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWlvbi1jb2xvci1zZWNvbmRhcnkpO1xuICBoZWlnaHQ6IGF1dG87XG4gIHBhZGRpbmc6IDUlO1xufVxuXG4ucm93Y29udGVudCB7XG4gIGNvbG9yOiBibGFjaztcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIGhlaWdodDogYXV0bztcbiAgcGFkZGluZzogNSU7XG4gIGJvcmRlci1ib3R0b206IGdyb292ZTtcbn1cblxuLndpdGhkcmF3YWwtcGFydGljdWxhcnMgLmxhYmVsIHtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1zZWNvbmRhcnkpICFpbXBvcnRhbnQ7XG4gIGZvbnQtc2l6ZTogMS4ycmVtICFpbXBvcnRhbnQ7XG4gIGZvbnQtZmFtaWx5OiBhZ2VuZGEtc2VtaWJvbGQ7XG4gIHdoaXRlLXNwYWNlOiBub3JtYWw7XG59XG4ud2l0aGRyYXdhbC1wYXJ0aWN1bGFycyAuZm9ybS12YWx1ZSB7XG4gIGZvbnQtc2l6ZTogMS4xcmVtICFpbXBvcnRhbnQ7XG4gIG1hcmdpbi10b3A6IDhweDtcbn1cbi53aXRoZHJhd2FsLXBhcnRpY3VsYXJzIC5pbnB1dC1ib3gge1xuICBtYXJnaW4tdG9wOiA4cHg7XG59XG4ud2l0aGRyYXdhbC1wYXJ0aWN1bGFycyAuaWxwIC5hZGQtcm93IHtcbiAgbWFyZ2luLXRvcDogOHB4O1xuICB0ZXh0LWFsaWduOiByaWdodDtcbn1cbi53aXRoZHJhd2FsLXBhcnRpY3VsYXJzIC5pbHAgLmFkZC1yb3cgLmFkZC1yb3ctYnRuIHtcbiAgbWF4LXdpZHRoOiAxMDBweDtcbn1cblxuLmlscCAuYWRkLXJvdyB7XG4gIG1hcmdpbi10b3A6IDhweDtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG59XG4uaWxwIC5hZGQtcm93IC5hZGQtcm93LWJ0biB7XG4gIG1heC13aWR0aDogMTAwcHg7XG59XG5cbi5pdGVtLWlucHV0LWRpc2FibGVkIGlvbi1sYWJlbCxcbi5pdGVtLWlucHV0LWRpc2FibGVkIC5zZWxlY3QtZGlzYWJsZWQsXG4uaXRlbS1zZWxlY3QtZGlzYWJsZWQgaW9uLWxhYmVsLFxuLml0ZW0tc2VsZWN0LWRpc2FibGVkIC5zZWxlY3QtZGlzYWJsZWQge1xuICBjb2xvcjogIzk5OSAhaW1wb3J0YW50O1xuICBvcGFjaXR5OiAxICFpbXBvcnRhbnQ7XG59XG4uaXRlbS1pbnB1dC1kaXNhYmxlZCBpb24taW5wdXQsXG4uaXRlbS1pbnB1dC1kaXNhYmxlZCBpb24tc2VsZWN0LFxuLml0ZW0tc2VsZWN0LWRpc2FibGVkIGlvbi1pbnB1dCxcbi5pdGVtLXNlbGVjdC1kaXNhYmxlZCBpb24tc2VsZWN0IHtcbiAgYm9yZGVyOiAxcHggc29saWQgI2MzYzFjMSAhaW1wb3J0YW50O1xuICBwYWRkaW5nOiAwIDE1cHg7XG59XG4uaXRlbS1pbnB1dC1kaXNhYmxlZCBpb24tc2VsZWN0LFxuLml0ZW0tc2VsZWN0LWRpc2FibGVkIGlvbi1zZWxlY3Qge1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudCB1cmwoLy4uL2Fzc2V0cy9pbWdzL2Fycm93LWRvd24ucG5nKSBuby1yZXBlYXQgOTUlIGNlbnRlciAhaW1wb3J0YW50O1xuICBoZWlnaHQ6IDM3cHggIWltcG9ydGFudDtcbn1cblxuLnNlbGVjdC1pY29uIHtcbiAgb3BhY2l0eTogMTtcbn1cblxuLnN1Ym1pdC1idG4ge1xuICBtYXJnaW4tdG9wOiAxNnB4O1xufVxuXG4ucmV2aWV3LWNvbmZpcm0gaDUsIC5wYXltZW50LWRldGFpbHMgaDUge1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5KTtcbiAgY29sb3I6ICNmZmY7XG4gIG1hcmdpbi1ib3R0b206IDA7XG4gIHBhZGRpbmc6IDhweDtcbn1cbi5yZXZpZXctY29uZmlybSAuZGV0YWlscy1jb250YWluZXIsIC5wYXltZW50LWRldGFpbHMgLmRldGFpbHMtY29udGFpbmVyIHtcbiAgcGFkZGluZy1sZWZ0OiA4cHg7XG59XG4ucmV2aWV3LWNvbmZpcm0gLmxhYmVsLCAucGF5bWVudC1kZXRhaWxzIC5sYWJlbCB7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5KSAhaW1wb3J0YW50O1xuICBmb250LXNpemU6IDEuMnJlbSAhaW1wb3J0YW50O1xuICBmb250LWZhbWlseTogYWdlbmRhLXNlbWlib2xkO1xuICB3aGl0ZS1zcGFjZTogbm9ybWFsO1xufVxuLnJldmlldy1jb25maXJtIC5mb3JtLXZhbHVlLCAucGF5bWVudC1kZXRhaWxzIC5mb3JtLXZhbHVlIHtcbiAgZm9udC1zaXplOiAxLjFyZW0gIWltcG9ydGFudDtcbiAgbWFyZ2luLXRvcDogOHB4O1xufVxuLnJldmlldy1jb25maXJtIC5mYXRjYS1jcnMtY29udGFpbmVyIHAsIC5wYXltZW50LWRldGFpbHMgLmZhdGNhLWNycy1jb250YWluZXIgcCB7XG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xufVxuLnJldmlldy1jb25maXJtIC5mYXRjYS1jcnMtY29udGFpbmVyIC5sYWJlbCwgLnBheW1lbnQtZGV0YWlscyAuZmF0Y2EtY3JzLWNvbnRhaW5lciAubGFiZWwge1xuICBmb250LWZhbWlseTogQWdlbmRhLVJlZ3VsYXIgIWltcG9ydGFudDtcbn1cbi5yZXZpZXctY29uZmlybSAuZmF0Y2EtY3JzLWNvbnRhaW5lciAubGFiZWwtbWQsIC5wYXltZW50LWRldGFpbHMgLmZhdGNhLWNycy1jb250YWluZXIgLmxhYmVsLW1kIHtcbiAgbWFyZ2luOiAwIDhweCAxM3B4IDAgIWltcG9ydGFudDtcbn1cbi5yZXZpZXctY29uZmlybSAuZmF0Y2EtY3JzLWNvbnRhaW5lciAubGFiZWwtaW9zLCAucGF5bWVudC1kZXRhaWxzIC5mYXRjYS1jcnMtY29udGFpbmVyIC5sYWJlbC1pb3Mge1xuICBtYXJnaW46IDAgOHB4IDEzcHggMCAhaW1wb3J0YW50O1xufVxuLnJldmlldy1jb25maXJtIC5mYXRjYS1jcnMtY29udGFpbmVyIC5jaGVja2JveCwgLnBheW1lbnQtZGV0YWlscyAuZmF0Y2EtY3JzLWNvbnRhaW5lciAuY2hlY2tib3gge1xuICBtYXJnaW4tcmlnaHQ6IDE2cHggIWltcG9ydGFudDtcbn1cbi5yZXZpZXctY29uZmlybSAuZmF0Y2EtY3JzLWNvbnRhaW5lciAuY2hlY2tib3gtaWNvbiwgLnBheW1lbnQtZGV0YWlscyAuZmF0Y2EtY3JzLWNvbnRhaW5lciAuY2hlY2tib3gtaWNvbiB7XG4gIGJvcmRlci13aWR0aDogMXB4ICFpbXBvcnRhbnQ7XG4gIGhlaWdodDogMjdweCAhaW1wb3J0YW50O1xuICB3aWR0aDogMjdweCAhaW1wb3J0YW50O1xufVxuLnJldmlldy1jb25maXJtIC5mYXRjYS1jcnMtY29udGFpbmVyIC5jaGVja2JveC1pY29uLmNoZWNrYm94LWNoZWNrZWQgLmNoZWNrYm94LWlubmVyLCAucGF5bWVudC1kZXRhaWxzIC5mYXRjYS1jcnMtY29udGFpbmVyIC5jaGVja2JveC1pY29uLmNoZWNrYm94LWNoZWNrZWQgLmNoZWNrYm94LWlubmVyIHtcbiAgaGVpZ2h0OiAxM3B4ICFpbXBvcnRhbnQ7XG4gIGxlZnQ6IDlweCAhaW1wb3J0YW50O1xuICB0b3A6IDRweCAhaW1wb3J0YW50O1xuICB3aWR0aDogOHB4ICFpbXBvcnRhbnQ7XG59XG4ucmV2aWV3LWNvbmZpcm0gLmZhdGNhLWNycy1jb250YWluZXIgLmNoZWNrYm94LWNoZWNrZWQsIC5wYXltZW50LWRldGFpbHMgLmZhdGNhLWNycy1jb250YWluZXIgLmNoZWNrYm94LWNoZWNrZWQge1xuICBib3JkZXItY29sb3I6IHZhcigtLWlvbi1jb2xvci1zZWNvbmRhcnkpICFpbXBvcnRhbnQ7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XG59XG4ucmV2aWV3LWNvbmZpcm0gLmZhdGNhLWNycy1jb250YWluZXIgaW9uLWxpc3QsIC5wYXltZW50LWRldGFpbHMgLmZhdGNhLWNycy1jb250YWluZXIgaW9uLWxpc3Qge1xuICBtYXJnaW4tYm90dG9tOiAwO1xuICBwYWRkaW5nLWxlZnQ6IDA7XG59XG4ucmV2aWV3LWNvbmZpcm0gLmZhdGNhLWNycy1jb250YWluZXIgaW9uLWxpc3QgaW9uLXJhZGlvLCAucGF5bWVudC1kZXRhaWxzIC5mYXRjYS1jcnMtY29udGFpbmVyIGlvbi1saXN0IGlvbi1yYWRpbyB7XG4gIG1hcmdpbi1yaWdodDogMTZweCAhaW1wb3J0YW50O1xufVxuLnJldmlldy1jb25maXJtIC5mYXRjYS1jcnMtY29udGFpbmVyIGlvbi1saXN0IGlvbi1yYWRpbyAucmFkaW8taWNvbiwgLnBheW1lbnQtZGV0YWlscyAuZmF0Y2EtY3JzLWNvbnRhaW5lciBpb24tbGlzdCBpb24tcmFkaW8gLnJhZGlvLWljb24ge1xuICBoZWlnaHQ6IDI3cHg7XG4gIHdpZHRoOiAyN3B4O1xufVxuLnJldmlldy1jb25maXJtIC5mYXRjYS1jcnMtY29udGFpbmVyIGlvbi1saXN0IGlvbi1yYWRpbyAucmFkaW8taWNvbiAucmFkaW8taW5uZXIsIC5wYXltZW50LWRldGFpbHMgLmZhdGNhLWNycy1jb250YWluZXIgaW9uLWxpc3QgaW9uLXJhZGlvIC5yYWRpby1pY29uIC5yYWRpby1pbm5lciB7XG4gIGhlaWdodDogMTNweDtcbiAgbGVmdDogNXB4O1xuICB0b3A6IDVweDtcbiAgd2lkdGg6IDEzcHg7XG59XG4ucmV2aWV3LWNvbmZpcm0gLmZhdGNhLWNycy1jb250YWluZXIgaHIsIC5wYXltZW50LWRldGFpbHMgLmZhdGNhLWNycy1jb250YWluZXIgaHIge1xuICBoZWlnaHQ6IDJweDtcbiAgbWFyZ2luLWJvdHRvbTogMjRweDtcbn1cblxucCB7XG4gIGZvbnQtc2l6ZTogMS4xcmVtO1xufVxuXG5oMiB7XG4gIG1hcmdpbi10b3A6IDAgIWltcG9ydGFudDtcbn1cblxuLnJhZGlvLWNvbnRhaW5lciB7XG4gIGZvbnQtc2l6ZTogMS4xcmVtO1xuICBtYXJnaW4tYm90dG9tOiAxNnB4O1xufVxuLnJhZGlvLWNvbnRhaW5lciBpb24tbGFiZWwge1xuICB3aGl0ZS1zcGFjZTogbm9ybWFsO1xufVxuLnJhZGlvLWNvbnRhaW5lciAuaGVhZGluZyB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuLnJhZGlvLWNvbnRhaW5lciAubGFiZWwtbWQge1xuICBtYXJnaW46IDAgIWltcG9ydGFudDtcbn1cbi5yYWRpby1jb250YWluZXIgLmxhYmVsLWlvcyB7XG4gIG1hcmdpbjogMCAhaW1wb3J0YW50O1xufVxuLnJhZGlvLWNvbnRhaW5lciBpb24tbGlzdCB7XG4gIG1hcmdpbi1ib3R0b206IDA7XG4gIHBhZGRpbmctbGVmdDogMDtcbiAgcGFkZGluZy1yaWdodDogMDtcbn1cbi5yYWRpby1jb250YWluZXIgaW9uLWxpc3QgaW9uLXJhZGlvIHtcbiAgbWFyZ2luLXJpZ2h0OiAxNnB4ICFpbXBvcnRhbnQ7XG59XG4ucmFkaW8tY29udGFpbmVyIGlvbi1saXN0IGlvbi1yYWRpbyAucmFkaW8taWNvbiB7XG4gIGhlaWdodDogMjdweDtcbiAgd2lkdGg6IDI3cHg7XG59XG4ucmFkaW8tY29udGFpbmVyIGlvbi1saXN0IGlvbi1yYWRpbyAucmFkaW8taWNvbiAucmFkaW8taW5uZXIge1xuICBoZWlnaHQ6IDEzcHg7XG4gIGxlZnQ6IDVweDtcbiAgdG9wOiA1cHg7XG4gIHdpZHRoOiAxM3B4O1xufVxuLnJhZGlvLWNvbnRhaW5lciBpb24tcm93IHtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi5yYWRpby1jb250YWluZXIgaW9uLWNvbCB7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGFsaWduLXNlbGY6IHN0cmV0Y2g7XG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xufVxuLnJhZGlvLWNvbnRhaW5lciAuc2VsZWN0LXBsYW4ge1xuICBtYXJnaW4tdG9wOiA4cHg7XG59XG5cbi5zZWxlY3Qge1xuICBtYXJnaW4tbGVmdDogMHB4O1xufVxuXG4uc2VsZWN0LWJvcmRlciB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNlMGUwZTA7XG4gIG1hcmdpbi1ib3R0b206IDJweDtcbiAgbWFyZ2luLXRvcDogMnB4O1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5zZWxlY3QtYm9yZGVyLWFsbG9jYXRpb24ge1xuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gIG1hcmdpbi1ib3R0b206IDJweDtcbiAgbWFyZ2luLXRvcDogMnB4O1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5mdW5kLXJvdy1oZWFkZXIge1xuICBjb2xvcjogd2hpdGU7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWlvbi1jb2xvci1zZWNvbmRhcnkpO1xuICBoZWlnaHQ6IDU1cHg7XG59XG5cbi5mdW5kLXJvd2NvbnRlbnQge1xuICBjb2xvcjogYmxhY2s7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBib3JkZXItYm90dG9tOiBncm9vdmU7XG59XG5cbi5hbGxvY2F0aW9uLXRhYmxlIHRkLCAuYWxsb2NhdGlvbi10YWJsZSB0aCB7XG4gIHdpZHRoOiA2NSUgIWltcG9ydGFudDtcbn1cbi5hbGxvY2F0aW9uLXRhYmxlIHRkOmxhc3QtY2hpbGQsIC5hbGxvY2F0aW9uLXRhYmxlIHRoOmxhc3QtY2hpbGQge1xuICB3aWR0aDogMzUlICFpbXBvcnRhbnQ7XG59XG5cbnRhYmxlIHtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgbWFyZ2luLXRvcDogOHB4O1xuICB3aWR0aDogMTAwJTtcbn1cbnRhYmxlIHRoZWFkIHtcbiAgYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXNlY29uZGFyeSkgIWltcG9ydGFudDtcbiAgY29sb3I6ICNmZmY7XG59XG50YWJsZSB0aCwgdGFibGUgdGQge1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2Q3ZDdkNztcbiAgZm9udC1zaXplOiAxcmVtO1xuICBwYWRkaW5nOiAxMnB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHdvcmQtYnJlYWs6IGJyZWFrLXdvcmQ7XG4gIHdpZHRoOiAyNSU7XG59XG50YWJsZS5hbGxvY2F0aW9uLXRhYmxlIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cbnRhYmxlLmFsbG9jYXRpb24tdGFibGUgdHIge1xuICBkaXNwbGF5OiBmbGV4O1xufVxudGFibGUuYWxsb2NhdGlvbi10YWJsZSB0aCwgdGFibGUuYWxsb2NhdGlvbi10YWJsZSB0ZCB7XG4gIHdpZHRoOiA1MCU7XG59XG50YWJsZS5hbGxvY2F0aW9uLXRhYmxlIHRkIHtcbiAgd2lkdGg6IDUwJTtcbn1cbnRhYmxlLmFsbG9jYXRpb24tdGFibGUgdGQgLmFtb3VudC1jb250YWluZXIsIHRhYmxlLmFsbG9jYXRpb24tdGFibGUgdGQgLmFsbG9jYXRpb24tY29udGFpbmVyIHtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZGlzcGxheTogZmxleDtcbiAgd2lkdGg6IDEwMCU7XG59XG50YWJsZS5hbGxvY2F0aW9uLXRhYmxlIHRkIC5hbW91bnQtY29udGFpbmVyIGlvbi1pbnB1dCwgdGFibGUuYWxsb2NhdGlvbi10YWJsZSB0ZCAuYWxsb2NhdGlvbi1jb250YWluZXIgaW9uLWlucHV0IHtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB3aWR0aDogYXV0bztcbn1cbnRhYmxlLmFsbG9jYXRpb24tdGFibGUgdGQgLmFtb3VudC1jb250YWluZXIgaSwgdGFibGUuYWxsb2NhdGlvbi10YWJsZSB0ZCAuYWxsb2NhdGlvbi1jb250YWluZXIgaSB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgZm9udC1zaXplOiAyNHB4O1xufVxudGFibGUuYWxsb2NhdGlvbi10YWJsZSB0ZCBpb24tc2VsZWN0IHtcbiAgYm9yZGVyLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSkgIWltcG9ydGFudDtcbn1cbnRhYmxlLmFsbG9jYXRpb24tdGFibGUgdGQgaW9uLXNlbGVjdCAuaW9uLW9wdGlvbiB7XG4gIHBhZGRpbmc6IDhweCAxMHB4O1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xufVxudGFibGUuYWxsb2NhdGlvbi10YWJsZSB0ZCBpb24tc2VsZWN0IC5pb24tb3B0aW9uIC5uZy1vcHRpb24tbGFiZWwge1xuICB3aGl0ZS1zcGFjZTogbm9ybWFsO1xufVxuXG4ubWFyZ2luLWxhYmVsIHtcbiAgbWFyZ2luLXRvcDogMTVweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbnNlbGVjdDpmb2N1cyB7XG4gIHdpZHRoOiBhdXRvO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5ociB7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjY2NjO1xuICBtYXJnaW46IDEwcHggMDtcbiAgd2lkdGg6IDEwMCU7XG59Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 97958:
/*!****************************************!*\
  !*** ./node_modules/intro.js/intro.js ***!
  \****************************************/
/***/ (function(module) {

/*!
 * Intro.js v6.0.0
 * https://introjs.com
 *
 * Copyright (C) 2012-2022 Afshin Mehrabani (@afshinmeh).
 * https://introjs.com
 *
 * Date: Sun, 10 Jul 2022 10:05:59 GMT
 */
!function (t, e) {
   true ? module.exports = e() : 0;
}(this, function () {
  "use strict";

  function t() {
    /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */
    t = function () {
      return e;
    };
    var e = {},
      n = Object.prototype,
      r = n.hasOwnProperty,
      o = "function" == typeof Symbol ? Symbol : {},
      i = o.iterator || "@@iterator",
      a = o.asyncIterator || "@@asyncIterator",
      s = o.toStringTag || "@@toStringTag";
    function c(t, e, n) {
      return Object.defineProperty(t, e, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }), t[e];
    }
    try {
      c({}, "");
    } catch (t) {
      c = function (t, e, n) {
        return t[e] = n;
      };
    }
    function l(t, e, n, r) {
      var o = e && e.prototype instanceof p ? e : p,
        i = Object.create(o.prototype),
        a = new S(r || []);
      return i._invoke = function (t, e, n) {
        var r = "suspendedStart";
        return function (o, i) {
          if ("executing" === r) throw new Error("Generator is already running");
          if ("completed" === r) {
            if ("throw" === o) throw i;
            return C();
          }
          for (n.method = o, n.arg = i;;) {
            var a = n.delegate;
            if (a) {
              var s = x(a, n);
              if (s) {
                if (s === h) continue;
                return s;
              }
            }
            if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) {
              if ("suspendedStart" === r) throw r = "completed", n.arg;
              n.dispatchException(n.arg);
            } else "return" === n.method && n.abrupt("return", n.arg);
            r = "executing";
            var c = u(t, e, n);
            if ("normal" === c.type) {
              if (r = n.done ? "completed" : "suspendedYield", c.arg === h) continue;
              return {
                value: c.arg,
                done: n.done
              };
            }
            "throw" === c.type && (r = "completed", n.method = "throw", n.arg = c.arg);
          }
        };
      }(t, n, a), i;
    }
    function u(t, e, n) {
      try {
        return {
          type: "normal",
          arg: t.call(e, n)
        };
      } catch (t) {
        return {
          type: "throw",
          arg: t
        };
      }
    }
    e.wrap = l;
    var h = {};
    function p() {}
    function f() {}
    function d() {}
    var b = {};
    c(b, i, function () {
      return this;
    });
    var m = Object.getPrototypeOf,
      g = m && m(m(j([])));
    g && g !== n && r.call(g, i) && (b = g);
    var v = d.prototype = p.prototype = Object.create(b);
    function y(t) {
      ["next", "throw", "return"].forEach(function (e) {
        c(t, e, function (t) {
          return this._invoke(e, t);
        });
      });
    }
    function w(t, e) {
      function n(o, i, a, s) {
        var c = u(t[o], t, i);
        if ("throw" !== c.type) {
          var l = c.arg,
            h = l.value;
          return h && "object" == typeof h && r.call(h, "__await") ? e.resolve(h.__await).then(function (t) {
            n("next", t, a, s);
          }, function (t) {
            n("throw", t, a, s);
          }) : e.resolve(h).then(function (t) {
            l.value = t, a(l);
          }, function (t) {
            return n("throw", t, a, s);
          });
        }
        s(c.arg);
      }
      var o;
      this._invoke = function (t, r) {
        function i() {
          return new e(function (e, o) {
            n(t, r, e, o);
          });
        }
        return o = o ? o.then(i, i) : i();
      };
    }
    function x(t, e) {
      var n = t.iterator[e.method];
      if (void 0 === n) {
        if (e.delegate = null, "throw" === e.method) {
          if (t.iterator.return && (e.method = "return", e.arg = void 0, x(t, e), "throw" === e.method)) return h;
          e.method = "throw", e.arg = new TypeError("The iterator does not provide a 'throw' method");
        }
        return h;
      }
      var r = u(n, t.iterator, e.arg);
      if ("throw" === r.type) return e.method = "throw", e.arg = r.arg, e.delegate = null, h;
      var o = r.arg;
      return o ? o.done ? (e[t.resultName] = o.value, e.next = t.nextLoc, "return" !== e.method && (e.method = "next", e.arg = void 0), e.delegate = null, h) : o : (e.method = "throw", e.arg = new TypeError("iterator result is not an object"), e.delegate = null, h);
    }
    function _(t) {
      var e = {
        tryLoc: t[0]
      };
      1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e);
    }
    function k(t) {
      var e = t.completion || {};
      e.type = "normal", delete e.arg, t.completion = e;
    }
    function S(t) {
      this.tryEntries = [{
        tryLoc: "root"
      }], t.forEach(_, this), this.reset(!0);
    }
    function j(t) {
      if (t) {
        var e = t[i];
        if (e) return e.call(t);
        if ("function" == typeof t.next) return t;
        if (!isNaN(t.length)) {
          var n = -1,
            o = function e() {
              for (; ++n < t.length;) if (r.call(t, n)) return e.value = t[n], e.done = !1, e;
              return e.value = void 0, e.done = !0, e;
            };
          return o.next = o;
        }
      }
      return {
        next: C
      };
    }
    function C() {
      return {
        value: void 0,
        done: !0
      };
    }
    return f.prototype = d, c(v, "constructor", d), c(d, "constructor", f), f.displayName = c(d, s, "GeneratorFunction"), e.isGeneratorFunction = function (t) {
      var e = "function" == typeof t && t.constructor;
      return !!e && (e === f || "GeneratorFunction" === (e.displayName || e.name));
    }, e.mark = function (t) {
      return Object.setPrototypeOf ? Object.setPrototypeOf(t, d) : (t.__proto__ = d, c(t, s, "GeneratorFunction")), t.prototype = Object.create(v), t;
    }, e.awrap = function (t) {
      return {
        __await: t
      };
    }, y(w.prototype), c(w.prototype, a, function () {
      return this;
    }), e.AsyncIterator = w, e.async = function (t, n, r, o, i) {
      void 0 === i && (i = Promise);
      var a = new w(l(t, n, r, o), i);
      return e.isGeneratorFunction(n) ? a : a.next().then(function (t) {
        return t.done ? t.value : a.next();
      });
    }, y(v), c(v, s, "Generator"), c(v, i, function () {
      return this;
    }), c(v, "toString", function () {
      return "[object Generator]";
    }), e.keys = function (t) {
      var e = [];
      for (var n in t) e.push(n);
      return e.reverse(), function n() {
        for (; e.length;) {
          var r = e.pop();
          if (r in t) return n.value = r, n.done = !1, n;
        }
        return n.done = !0, n;
      };
    }, e.values = j, S.prototype = {
      constructor: S,
      reset: function (t) {
        if (this.prev = 0, this.next = 0, this.sent = this._sent = void 0, this.done = !1, this.delegate = null, this.method = "next", this.arg = void 0, this.tryEntries.forEach(k), !t) for (var e in this) "t" === e.charAt(0) && r.call(this, e) && !isNaN(+e.slice(1)) && (this[e] = void 0);
      },
      stop: function () {
        this.done = !0;
        var t = this.tryEntries[0].completion;
        if ("throw" === t.type) throw t.arg;
        return this.rval;
      },
      dispatchException: function (t) {
        if (this.done) throw t;
        var e = this;
        function n(n, r) {
          return a.type = "throw", a.arg = t, e.next = n, r && (e.method = "next", e.arg = void 0), !!r;
        }
        for (var o = this.tryEntries.length - 1; o >= 0; --o) {
          var i = this.tryEntries[o],
            a = i.completion;
          if ("root" === i.tryLoc) return n("end");
          if (i.tryLoc <= this.prev) {
            var s = r.call(i, "catchLoc"),
              c = r.call(i, "finallyLoc");
            if (s && c) {
              if (this.prev < i.catchLoc) return n(i.catchLoc, !0);
              if (this.prev < i.finallyLoc) return n(i.finallyLoc);
            } else if (s) {
              if (this.prev < i.catchLoc) return n(i.catchLoc, !0);
            } else {
              if (!c) throw new Error("try statement without catch or finally");
              if (this.prev < i.finallyLoc) return n(i.finallyLoc);
            }
          }
        }
      },
      abrupt: function (t, e) {
        for (var n = this.tryEntries.length - 1; n >= 0; --n) {
          var o = this.tryEntries[n];
          if (o.tryLoc <= this.prev && r.call(o, "finallyLoc") && this.prev < o.finallyLoc) {
            var i = o;
            break;
          }
        }
        i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null);
        var a = i ? i.completion : {};
        return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, h) : this.complete(a);
      },
      complete: function (t, e) {
        if ("throw" === t.type) throw t.arg;
        return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), h;
      },
      finish: function (t) {
        for (var e = this.tryEntries.length - 1; e >= 0; --e) {
          var n = this.tryEntries[e];
          if (n.finallyLoc === t) return this.complete(n.completion, n.afterLoc), k(n), h;
        }
      },
      catch: function (t) {
        for (var e = this.tryEntries.length - 1; e >= 0; --e) {
          var n = this.tryEntries[e];
          if (n.tryLoc === t) {
            var r = n.completion;
            if ("throw" === r.type) {
              var o = r.arg;
              k(n);
            }
            return o;
          }
        }
        throw new Error("illegal catch attempt");
      },
      delegateYield: function (t, e, n) {
        return this.delegate = {
          iterator: j(t),
          resultName: e,
          nextLoc: n
        }, "next" === this.method && (this.arg = void 0), h;
      }
    }, e;
  }
  function e(t) {
    return e = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
      return typeof t;
    } : function (t) {
      return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
    }, e(t);
  }
  function n(t, e, n, r, o, i, a) {
    try {
      var s = t[i](a),
        c = s.value;
    } catch (t) {
      return void n(t);
    }
    s.done ? e(c) : Promise.resolve(c).then(r, o);
  }
  function r(t) {
    return function () {
      var e = this,
        r = arguments;
      return new Promise(function (o, i) {
        var a = t.apply(e, r);
        function s(t) {
          n(a, o, i, s, c, "next", t);
        }
        function c(t) {
          n(a, o, i, s, c, "throw", t);
        }
        s(void 0);
      });
    };
  }
  function o(t, e, n) {
    return e in t ? Object.defineProperty(t, e, {
      value: n,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }) : t[e] = n, t;
  }
  function i(t, e) {
    return function (t) {
      if (Array.isArray(t)) return t;
    }(t) || function (t, e) {
      var n = null == t ? null : "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
      if (null == n) return;
      var r,
        o,
        i = [],
        a = !0,
        s = !1;
      try {
        for (n = n.call(t); !(a = (r = n.next()).done) && (i.push(r.value), !e || i.length !== e); a = !0);
      } catch (t) {
        s = !0, o = t;
      } finally {
        try {
          a || null == n.return || n.return();
        } finally {
          if (s) throw o;
        }
      }
      return i;
    }(t, e) || function (t, e) {
      if (!t) return;
      if ("string" == typeof t) return a(t, e);
      var n = Object.prototype.toString.call(t).slice(8, -1);
      "Object" === n && t.constructor && (n = t.constructor.name);
      if ("Map" === n || "Set" === n) return Array.from(t);
      if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return a(t, e);
    }(t, e) || function () {
      throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }();
  }
  function a(t, e) {
    (null == e || e > t.length) && (e = t.length);
    for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n];
    return r;
  }
  var s = function () {
    var t = {};
    return function (e) {
      var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "introjs-stamp";
      return t[n] = t[n] || 0, void 0 === e[n] && (e[n] = t[n]++), e[n];
    };
  }();
  function c(t, e, n) {
    if (t) for (var r = 0, o = t.length; r < o; r++) e(t[r], r);
    "function" == typeof n && n();
  }
  var l = new function () {
    var t = "introjs_event";
    this._id = function (t, e, n, r) {
      return e + s(n) + (r ? "_".concat(s(r)) : "");
    }, this.on = function (e, n, r, o, i) {
      var a = this._id.apply(this, arguments),
        s = function (t) {
          return r.call(o || e, t || window.event);
        };
      "addEventListener" in e ? e.addEventListener(n, s, i) : "attachEvent" in e && e.attachEvent("on".concat(n), s), e[t] = e[t] || {}, e[t][a] = s;
    }, this.off = function (e, n, r, o, i) {
      var a = this._id.apply(this, arguments),
        s = e[t] && e[t][a];
      s && ("removeEventListener" in e ? e.removeEventListener(n, s, i) : "detachEvent" in e && e.detachEvent("on".concat(n), s), e[t][a] = null);
    };
  }();
  function u(t, e) {
    if (t instanceof SVGElement) {
      var n = t.getAttribute("class") || "";
      n.match(e) || t.setAttribute("class", "".concat(n, " ").concat(e));
    } else {
      if (void 0 !== t.classList) c(e.split(" "), function (e) {
        t.classList.add(e);
      });else t.className.match(e) || (t.className += " ".concat(e));
    }
  }
  function h(t, e) {
    var n = "";
    return t.currentStyle ? n = t.currentStyle[e] : document.defaultView && document.defaultView.getComputedStyle && (n = document.defaultView.getComputedStyle(t, null).getPropertyValue(e)), n && n.toLowerCase ? n.toLowerCase() : n;
  }
  function p(t) {
    var e = t.element;
    u(e, "introjs-showElement");
    var n = h(e, "position");
    "absolute" !== n && "relative" !== n && "sticky" !== n && "fixed" !== n && u(e, "introjs-relativePosition");
  }
  function f(t) {
    var e = t.element;
    if (this._options.scrollToElement) {
      var n = function (t) {
        var e = window.getComputedStyle(t),
          n = "absolute" === e.position,
          r = /(auto|scroll)/;
        if ("fixed" === e.position) return document.body;
        for (var o = t; o = o.parentElement;) if (e = window.getComputedStyle(o), (!n || "static" !== e.position) && r.test(e.overflow + e.overflowY + e.overflowX)) return o;
        return document.body;
      }(e);
      n !== document.body && (n.scrollTop = e.offsetTop - n.offsetTop);
    }
  }
  function d() {
    if (void 0 !== window.innerWidth) return {
      width: window.innerWidth,
      height: window.innerHeight
    };
    var t = document.documentElement;
    return {
      width: t.clientWidth,
      height: t.clientHeight
    };
  }
  function b(t, e, n) {
    var r,
      o = e.element;
    if ("off" !== t && this._options.scrollToElement && (r = "tooltip" === t ? n.getBoundingClientRect() : o.getBoundingClientRect(), !function (t) {
      var e = t.getBoundingClientRect();
      return e.top >= 0 && e.left >= 0 && e.bottom + 80 <= window.innerHeight && e.right <= window.innerWidth;
    }(o))) {
      var i = d().height;
      r.bottom - (r.bottom - r.top) < 0 || o.clientHeight > i ? window.scrollBy(0, r.top - (i / 2 - r.height / 2) - this._options.scrollPadding) : window.scrollBy(0, r.top - (i / 2 - r.height / 2) + this._options.scrollPadding);
    }
  }
  function m(t) {
    t.setAttribute("role", "button"), t.tabIndex = 0;
  }
  function g(t) {
    var e = t.parentNode;
    return !(!e || "HTML" === e.nodeName) && ("fixed" === h(t, "position") || g(e));
  }
  function v(t, e) {
    var n = document.body,
      r = document.documentElement,
      o = window.pageYOffset || r.scrollTop || n.scrollTop,
      i = window.pageXOffset || r.scrollLeft || n.scrollLeft;
    e = e || n;
    var a = t.getBoundingClientRect(),
      s = e.getBoundingClientRect(),
      c = h(e, "position"),
      l = {
        width: a.width,
        height: a.height
      };
    return "body" !== e.tagName.toLowerCase() && "relative" === c || "sticky" === c ? Object.assign(l, {
      top: a.top - s.top,
      left: a.left - s.left
    }) : g(t) ? Object.assign(l, {
      top: a.top,
      left: a.left
    }) : Object.assign(l, {
      top: a.top + o,
      left: a.left + i
    });
  }
  var y = function (t) {
      try {
        return !!t();
      } catch (t) {
        return !0;
      }
    },
    w = !y(function () {
      var t = function () {}.bind();
      return "function" != typeof t || t.hasOwnProperty("prototype");
    }),
    x = Function.prototype,
    _ = x.apply,
    k = x.call,
    S = "object" == typeof Reflect && Reflect.apply || (w ? k.bind(_) : function () {
      return k.apply(_, arguments);
    }),
    j = Function.prototype.call,
    C = w ? j.bind(j) : function () {
      return j.apply(j, arguments);
    },
    A = Function.prototype,
    E = A.bind,
    N = A.call,
    I = w && E.bind(N, N),
    L = w ? function (t) {
      return t && I(t);
    } : function (t) {
      return t && function () {
        return N.apply(t, arguments);
      };
    },
    T = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
  function O(t, e) {
    return t(e = {
      exports: {}
    }, e.exports), e.exports;
  }
  var P,
    R,
    q = function (t) {
      return t && t.Math == Math && t;
    },
    B = q("object" == typeof globalThis && globalThis) || q("object" == typeof window && window) || q("object" == typeof self && self) || q("object" == typeof T && T) || function () {
      return this;
    }() || Function("return this")(),
    M = !y(function () {
      return 7 != Object.defineProperty({}, 1, {
        get: function () {
          return 7;
        }
      })[1];
    }),
    H = {}.propertyIsEnumerable,
    F = Object.getOwnPropertyDescriptor,
    D = {
      f: F && !H.call({
        1: 2
      }, 1) ? function (t) {
        var e = F(this, t);
        return !!e && e.enumerable;
      } : H
    },
    $ = function (t, e) {
      return {
        enumerable: !(1 & t),
        configurable: !(2 & t),
        writable: !(4 & t),
        value: e
      };
    },
    G = L({}.toString),
    z = L("".slice),
    W = function (t) {
      return z(G(t), 8, -1);
    },
    V = Object,
    U = L("".split),
    Y = y(function () {
      return !V("z").propertyIsEnumerable(0);
    }) ? function (t) {
      return "String" == W(t) ? U(t, "") : V(t);
    } : V,
    K = TypeError,
    X = function (t) {
      if (null == t) throw K("Can't call method on " + t);
      return t;
    },
    Q = function (t) {
      return Y(X(t));
    },
    J = function (t) {
      return "function" == typeof t;
    },
    Z = function (t) {
      return "object" == typeof t ? null !== t : J(t);
    },
    tt = function (t) {
      return J(t) ? t : void 0;
    },
    et = function (t, e) {
      return arguments.length < 2 ? tt(B[t]) : B[t] && B[t][e];
    },
    nt = L({}.isPrototypeOf),
    rt = et("navigator", "userAgent") || "",
    ot = B.process,
    it = B.Deno,
    at = ot && ot.versions || it && it.version,
    st = at && at.v8;
  st && (R = (P = st.split("."))[0] > 0 && P[0] < 4 ? 1 : +(P[0] + P[1])), !R && rt && (!(P = rt.match(/Edge\/(\d+)/)) || P[1] >= 74) && (P = rt.match(/Chrome\/(\d+)/)) && (R = +P[1]);
  var ct = R,
    lt = !!Object.getOwnPropertySymbols && !y(function () {
      var t = Symbol();
      return !String(t) || !(Object(t) instanceof Symbol) || !Symbol.sham && ct && ct < 41;
    }),
    ut = lt && !Symbol.sham && "symbol" == typeof Symbol.iterator,
    ht = Object,
    pt = ut ? function (t) {
      return "symbol" == typeof t;
    } : function (t) {
      var e = et("Symbol");
      return J(e) && nt(e.prototype, ht(t));
    },
    ft = String,
    dt = TypeError,
    bt = function (t) {
      if (J(t)) return t;
      throw dt(function (t) {
        try {
          return ft(t);
        } catch (t) {
          return "Object";
        }
      }(t) + " is not a function");
    },
    mt = function (t, e) {
      var n = t[e];
      return null == n ? void 0 : bt(n);
    },
    gt = TypeError,
    vt = Object.defineProperty,
    yt = function (t, e) {
      try {
        vt(B, t, {
          value: e,
          configurable: !0,
          writable: !0
        });
      } catch (n) {
        B[t] = e;
      }
      return e;
    },
    wt = "__core-js_shared__",
    xt = B[wt] || yt(wt, {}),
    _t = O(function (t) {
      (t.exports = function (t, e) {
        return xt[t] || (xt[t] = void 0 !== e ? e : {});
      })("versions", []).push({
        version: "3.23.3",
        mode: "global",
        copyright: "© 2014-2022 Denis Pushkarev (zloirock.ru)",
        license: "https://github.com/zloirock/core-js/blob/v3.23.3/LICENSE",
        source: "https://github.com/zloirock/core-js"
      });
    }),
    kt = Object,
    St = function (t) {
      return kt(X(t));
    },
    jt = L({}.hasOwnProperty),
    Ct = Object.hasOwn || function (t, e) {
      return jt(St(t), e);
    },
    At = 0,
    Et = Math.random(),
    Nt = L(1..toString),
    It = function (t) {
      return "Symbol(" + (void 0 === t ? "" : t) + ")_" + Nt(++At + Et, 36);
    },
    Lt = _t("wks"),
    Tt = B.Symbol,
    Ot = Tt && Tt.for,
    Pt = ut ? Tt : Tt && Tt.withoutSetter || It,
    Rt = function (t) {
      if (!Ct(Lt, t) || !lt && "string" != typeof Lt[t]) {
        var e = "Symbol." + t;
        lt && Ct(Tt, t) ? Lt[t] = Tt[t] : Lt[t] = ut && Ot ? Ot(e) : Pt(e);
      }
      return Lt[t];
    },
    qt = TypeError,
    Bt = Rt("toPrimitive"),
    Mt = function (t, e) {
      if (!Z(t) || pt(t)) return t;
      var n,
        r = mt(t, Bt);
      if (r) {
        if (void 0 === e && (e = "default"), n = C(r, t, e), !Z(n) || pt(n)) return n;
        throw qt("Can't convert object to primitive value");
      }
      return void 0 === e && (e = "number"), function (t, e) {
        var n, r;
        if ("string" === e && J(n = t.toString) && !Z(r = C(n, t))) return r;
        if (J(n = t.valueOf) && !Z(r = C(n, t))) return r;
        if ("string" !== e && J(n = t.toString) && !Z(r = C(n, t))) return r;
        throw gt("Can't convert object to primitive value");
      }(t, e);
    },
    Ht = function (t) {
      var e = Mt(t, "string");
      return pt(e) ? e : e + "";
    },
    Ft = B.document,
    Dt = Z(Ft) && Z(Ft.createElement),
    $t = function (t) {
      return Dt ? Ft.createElement(t) : {};
    },
    Gt = !M && !y(function () {
      return 7 != Object.defineProperty($t("div"), "a", {
        get: function () {
          return 7;
        }
      }).a;
    }),
    zt = Object.getOwnPropertyDescriptor,
    Wt = {
      f: M ? zt : function (t, e) {
        if (t = Q(t), e = Ht(e), Gt) try {
          return zt(t, e);
        } catch (t) {}
        if (Ct(t, e)) return $(!C(D.f, t, e), t[e]);
      }
    },
    Vt = M && y(function () {
      return 42 != Object.defineProperty(function () {}, "prototype", {
        value: 42,
        writable: !1
      }).prototype;
    }),
    Ut = String,
    Yt = TypeError,
    Kt = function (t) {
      if (Z(t)) return t;
      throw Yt(Ut(t) + " is not an object");
    },
    Xt = TypeError,
    Qt = Object.defineProperty,
    Jt = Object.getOwnPropertyDescriptor,
    Zt = "enumerable",
    te = "configurable",
    ee = "writable",
    ne = {
      f: M ? Vt ? function (t, e, n) {
        if (Kt(t), e = Ht(e), Kt(n), "function" == typeof t && "prototype" === e && "value" in n && ee in n && !n.writable) {
          var r = Jt(t, e);
          r && r.writable && (t[e] = n.value, n = {
            configurable: te in n ? n.configurable : r.configurable,
            enumerable: Zt in n ? n.enumerable : r.enumerable,
            writable: !1
          });
        }
        return Qt(t, e, n);
      } : Qt : function (t, e, n) {
        if (Kt(t), e = Ht(e), Kt(n), Gt) try {
          return Qt(t, e, n);
        } catch (t) {}
        if ("get" in n || "set" in n) throw Xt("Accessors not supported");
        return "value" in n && (t[e] = n.value), t;
      }
    },
    re = M ? function (t, e, n) {
      return ne.f(t, e, $(1, n));
    } : function (t, e, n) {
      return t[e] = n, t;
    },
    oe = Function.prototype,
    ie = M && Object.getOwnPropertyDescriptor,
    ae = Ct(oe, "name"),
    se = {
      EXISTS: ae,
      PROPER: ae && "something" === function () {}.name,
      CONFIGURABLE: ae && (!M || M && ie(oe, "name").configurable)
    },
    ce = L(Function.toString);
  J(xt.inspectSource) || (xt.inspectSource = function (t) {
    return ce(t);
  });
  var le,
    ue,
    he,
    pe = xt.inspectSource,
    fe = B.WeakMap,
    de = J(fe) && /native code/.test(pe(fe)),
    be = _t("keys"),
    me = function (t) {
      return be[t] || (be[t] = It(t));
    },
    ge = {},
    ve = "Object already initialized",
    ye = B.TypeError,
    we = B.WeakMap;
  if (de || xt.state) {
    var xe = xt.state || (xt.state = new we()),
      _e = L(xe.get),
      ke = L(xe.has),
      Se = L(xe.set);
    le = function (t, e) {
      if (ke(xe, t)) throw new ye(ve);
      return e.facade = t, Se(xe, t, e), e;
    }, ue = function (t) {
      return _e(xe, t) || {};
    }, he = function (t) {
      return ke(xe, t);
    };
  } else {
    var je = me("state");
    ge[je] = !0, le = function (t, e) {
      if (Ct(t, je)) throw new ye(ve);
      return e.facade = t, re(t, je, e), e;
    }, ue = function (t) {
      return Ct(t, je) ? t[je] : {};
    }, he = function (t) {
      return Ct(t, je);
    };
  }
  var Ce = {
      set: le,
      get: ue,
      has: he,
      enforce: function (t) {
        return he(t) ? ue(t) : le(t, {});
      },
      getterFor: function (t) {
        return function (e) {
          var n;
          if (!Z(e) || (n = ue(e)).type !== t) throw ye("Incompatible receiver, " + t + " required");
          return n;
        };
      }
    },
    Ae = O(function (t) {
      var e = se.CONFIGURABLE,
        n = Ce.enforce,
        r = Ce.get,
        o = Object.defineProperty,
        i = M && !y(function () {
          return 8 !== o(function () {}, "length", {
            value: 8
          }).length;
        }),
        a = String(String).split("String"),
        s = t.exports = function (t, r, s) {
          "Symbol(" === String(r).slice(0, 7) && (r = "[" + String(r).replace(/^Symbol\(([^)]*)\)/, "$1") + "]"), s && s.getter && (r = "get " + r), s && s.setter && (r = "set " + r), (!Ct(t, "name") || e && t.name !== r) && (M ? o(t, "name", {
            value: r,
            configurable: !0
          }) : t.name = r), i && s && Ct(s, "arity") && t.length !== s.arity && o(t, "length", {
            value: s.arity
          });
          try {
            s && Ct(s, "constructor") && s.constructor ? M && o(t, "prototype", {
              writable: !1
            }) : t.prototype && (t.prototype = void 0);
          } catch (t) {}
          var c = n(t);
          return Ct(c, "source") || (c.source = a.join("string" == typeof r ? r : "")), t;
        };
      Function.prototype.toString = s(function () {
        return J(this) && r(this).source || pe(this);
      }, "toString");
    }),
    Ee = function (t, e, n, r) {
      r || (r = {});
      var o = r.enumerable,
        i = void 0 !== r.name ? r.name : e;
      if (J(n) && Ae(n, i, r), r.global) o ? t[e] = n : yt(e, n);else {
        try {
          r.unsafe ? t[e] && (o = !0) : delete t[e];
        } catch (t) {}
        o ? t[e] = n : ne.f(t, e, {
          value: n,
          enumerable: !1,
          configurable: !r.nonConfigurable,
          writable: !r.nonWritable
        });
      }
      return t;
    },
    Ne = Math.ceil,
    Ie = Math.floor,
    Le = Math.trunc || function (t) {
      var e = +t;
      return (e > 0 ? Ie : Ne)(e);
    },
    Te = function (t) {
      var e = +t;
      return e != e || 0 === e ? 0 : Le(e);
    },
    Oe = Math.max,
    Pe = Math.min,
    Re = Math.min,
    qe = function (t) {
      return t > 0 ? Re(Te(t), 9007199254740991) : 0;
    },
    Be = function (t) {
      return function (e, n, r) {
        var o,
          i = Q(e),
          a = qe(i.length),
          s = function (t, e) {
            var n = Te(t);
            return n < 0 ? Oe(n + e, 0) : Pe(n, e);
          }(r, a);
        if (t && n != n) {
          for (; a > s;) if ((o = i[s++]) != o) return !0;
        } else for (; a > s; s++) if ((t || s in i) && i[s] === n) return t || s || 0;
        return !t && -1;
      };
    },
    Me = {
      includes: Be(!0),
      indexOf: Be(!1)
    },
    He = Me.indexOf,
    Fe = L([].push),
    De = function (t, e) {
      var n,
        r = Q(t),
        o = 0,
        i = [];
      for (n in r) !Ct(ge, n) && Ct(r, n) && Fe(i, n);
      for (; e.length > o;) Ct(r, n = e[o++]) && (~He(i, n) || Fe(i, n));
      return i;
    },
    $e = ["constructor", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "toLocaleString", "toString", "valueOf"],
    Ge = $e.concat("length", "prototype"),
    ze = {
      f: Object.getOwnPropertyNames || function (t) {
        return De(t, Ge);
      }
    },
    We = {
      f: Object.getOwnPropertySymbols
    },
    Ve = L([].concat),
    Ue = et("Reflect", "ownKeys") || function (t) {
      var e = ze.f(Kt(t)),
        n = We.f;
      return n ? Ve(e, n(t)) : e;
    },
    Ye = function (t, e, n) {
      for (var r = Ue(e), o = ne.f, i = Wt.f, a = 0; a < r.length; a++) {
        var s = r[a];
        Ct(t, s) || n && Ct(n, s) || o(t, s, i(e, s));
      }
    },
    Ke = /#|\.prototype\./,
    Xe = function (t, e) {
      var n = Je[Qe(t)];
      return n == tn || n != Ze && (J(e) ? y(e) : !!e);
    },
    Qe = Xe.normalize = function (t) {
      return String(t).replace(Ke, ".").toLowerCase();
    },
    Je = Xe.data = {},
    Ze = Xe.NATIVE = "N",
    tn = Xe.POLYFILL = "P",
    en = Xe,
    nn = Wt.f,
    rn = function (t, e) {
      var n,
        r,
        o,
        i,
        a,
        s = t.target,
        c = t.global,
        l = t.stat;
      if (n = c ? B : l ? B[s] || yt(s, {}) : (B[s] || {}).prototype) for (r in e) {
        if (i = e[r], o = t.dontCallGetSet ? (a = nn(n, r)) && a.value : n[r], !en(c ? r : s + (l ? "." : "#") + r, t.forced) && void 0 !== o) {
          if (typeof i == typeof o) continue;
          Ye(i, o);
        }
        (t.sham || o && o.sham) && re(i, "sham", !0), Ee(n, r, i, t);
      }
    },
    on = {};
  on[Rt("toStringTag")] = "z";
  var an,
    sn = "[object z]" === String(on),
    cn = Rt("toStringTag"),
    ln = Object,
    un = "Arguments" == W(function () {
      return arguments;
    }()),
    hn = sn ? W : function (t) {
      var e, n, r;
      return void 0 === t ? "Undefined" : null === t ? "Null" : "string" == typeof (n = function (t, e) {
        try {
          return t[e];
        } catch (t) {}
      }(e = ln(t), cn)) ? n : un ? W(e) : "Object" == (r = W(e)) && J(e.callee) ? "Arguments" : r;
    },
    pn = String,
    fn = function (t) {
      if ("Symbol" === hn(t)) throw TypeError("Cannot convert a Symbol value to a string");
      return pn(t);
    },
    dn = function () {
      var t = Kt(this),
        e = "";
      return t.hasIndices && (e += "d"), t.global && (e += "g"), t.ignoreCase && (e += "i"), t.multiline && (e += "m"), t.dotAll && (e += "s"), t.unicode && (e += "u"), t.unicodeSets && (e += "v"), t.sticky && (e += "y"), e;
    },
    bn = B.RegExp,
    mn = y(function () {
      var t = bn("a", "y");
      return t.lastIndex = 2, null != t.exec("abcd");
    }),
    gn = mn || y(function () {
      return !bn("a", "y").sticky;
    }),
    vn = {
      BROKEN_CARET: mn || y(function () {
        var t = bn("^r", "gy");
        return t.lastIndex = 2, null != t.exec("str");
      }),
      MISSED_STICKY: gn,
      UNSUPPORTED_Y: mn
    },
    yn = Object.keys || function (t) {
      return De(t, $e);
    },
    wn = M && !Vt ? Object.defineProperties : function (t, e) {
      Kt(t);
      for (var n, r = Q(e), o = yn(e), i = o.length, a = 0; i > a;) ne.f(t, n = o[a++], r[n]);
      return t;
    },
    xn = {
      f: wn
    },
    _n = et("document", "documentElement"),
    kn = me("IE_PROTO"),
    Sn = function () {},
    jn = function (t) {
      return "<script>" + t + "</" + "script>";
    },
    Cn = function (t) {
      t.write(jn("")), t.close();
      var e = t.parentWindow.Object;
      return t = null, e;
    },
    An = function () {
      try {
        an = new ActiveXObject("htmlfile");
      } catch (t) {}
      var t, e;
      An = "undefined" != typeof document ? document.domain && an ? Cn(an) : ((e = $t("iframe")).style.display = "none", _n.appendChild(e), e.src = String("javascript:"), (t = e.contentWindow.document).open(), t.write(jn("document.F=Object")), t.close(), t.F) : Cn(an);
      for (var n = $e.length; n--;) delete An.prototype[$e[n]];
      return An();
    };
  ge[kn] = !0;
  var En,
    Nn,
    In = Object.create || function (t, e) {
      var n;
      return null !== t ? (Sn.prototype = Kt(t), n = new Sn(), Sn.prototype = null, n[kn] = t) : n = An(), void 0 === e ? n : xn.f(n, e);
    },
    Ln = B.RegExp,
    Tn = y(function () {
      var t = Ln(".", "s");
      return !(t.dotAll && t.exec("\n") && "s" === t.flags);
    }),
    On = B.RegExp,
    Pn = y(function () {
      var t = On("(?<a>b)", "g");
      return "b" !== t.exec("b").groups.a || "bc" !== "b".replace(t, "$<a>c");
    }),
    Rn = Ce.get,
    qn = _t("native-string-replace", String.prototype.replace),
    Bn = RegExp.prototype.exec,
    Mn = Bn,
    Hn = L("".charAt),
    Fn = L("".indexOf),
    Dn = L("".replace),
    $n = L("".slice),
    Gn = (Nn = /b*/g, C(Bn, En = /a/, "a"), C(Bn, Nn, "a"), 0 !== En.lastIndex || 0 !== Nn.lastIndex),
    zn = vn.BROKEN_CARET,
    Wn = void 0 !== /()??/.exec("")[1];
  (Gn || Wn || zn || Tn || Pn) && (Mn = function (t) {
    var e,
      n,
      r,
      o,
      i,
      a,
      s,
      c = this,
      l = Rn(c),
      u = fn(t),
      h = l.raw;
    if (h) return h.lastIndex = c.lastIndex, e = C(Mn, h, u), c.lastIndex = h.lastIndex, e;
    var p = l.groups,
      f = zn && c.sticky,
      d = C(dn, c),
      b = c.source,
      m = 0,
      g = u;
    if (f && (d = Dn(d, "y", ""), -1 === Fn(d, "g") && (d += "g"), g = $n(u, c.lastIndex), c.lastIndex > 0 && (!c.multiline || c.multiline && "\n" !== Hn(u, c.lastIndex - 1)) && (b = "(?: " + b + ")", g = " " + g, m++), n = new RegExp("^(?:" + b + ")", d)), Wn && (n = new RegExp("^" + b + "$(?!\\s)", d)), Gn && (r = c.lastIndex), o = C(Bn, f ? n : c, g), f ? o ? (o.input = $n(o.input, m), o[0] = $n(o[0], m), o.index = c.lastIndex, c.lastIndex += o[0].length) : c.lastIndex = 0 : Gn && o && (c.lastIndex = c.global ? o.index + o[0].length : r), Wn && o && o.length > 1 && C(qn, o[0], n, function () {
      for (i = 1; i < arguments.length - 2; i++) void 0 === arguments[i] && (o[i] = void 0);
    }), o && p) for (o.groups = a = In(null), i = 0; i < p.length; i++) a[(s = p[i])[0]] = o[s[1]];
    return o;
  });
  var Vn = Mn;
  rn({
    target: "RegExp",
    proto: !0,
    forced: /./.exec !== Vn
  }, {
    exec: Vn
  });
  var Un = Rt("species"),
    Yn = RegExp.prototype,
    Kn = L("".charAt),
    Xn = L("".charCodeAt),
    Qn = L("".slice),
    Jn = function (t) {
      return function (e, n) {
        var r,
          o,
          i = fn(X(e)),
          a = Te(n),
          s = i.length;
        return a < 0 || a >= s ? t ? "" : void 0 : (r = Xn(i, a)) < 55296 || r > 56319 || a + 1 === s || (o = Xn(i, a + 1)) < 56320 || o > 57343 ? t ? Kn(i, a) : r : t ? Qn(i, a, a + 2) : o - 56320 + (r - 55296 << 10) + 65536;
      };
    },
    Zn = {
      codeAt: Jn(!1),
      charAt: Jn(!0)
    }.charAt,
    tr = function (t, e, n) {
      return e + (n ? Zn(t, e).length : 1);
    },
    er = Math.floor,
    nr = L("".charAt),
    rr = L("".replace),
    or = L("".slice),
    ir = /\$([$&'`]|\d{1,2}|<[^>]*>)/g,
    ar = /\$([$&'`]|\d{1,2})/g,
    sr = function (t, e, n, r, o, i) {
      var a = n + t.length,
        s = r.length,
        c = ar;
      return void 0 !== o && (o = St(o), c = ir), rr(i, c, function (i, c) {
        var l;
        switch (nr(c, 0)) {
          case "$":
            return "$";
          case "&":
            return t;
          case "`":
            return or(e, 0, n);
          case "'":
            return or(e, a);
          case "<":
            l = o[or(c, 1, -1)];
            break;
          default:
            var u = +c;
            if (0 === u) return i;
            if (u > s) {
              var h = er(u / 10);
              return 0 === h ? i : h <= s ? void 0 === r[h - 1] ? nr(c, 1) : r[h - 1] + nr(c, 1) : i;
            }
            l = r[u - 1];
        }
        return void 0 === l ? "" : l;
      });
    },
    cr = TypeError,
    lr = function (t, e) {
      var n = t.exec;
      if (J(n)) {
        var r = C(n, t, e);
        return null !== r && Kt(r), r;
      }
      if ("RegExp" === W(t)) return C(Vn, t, e);
      throw cr("RegExp#exec called on incompatible receiver");
    },
    ur = Rt("replace"),
    hr = Math.max,
    pr = Math.min,
    fr = L([].concat),
    dr = L([].push),
    br = L("".indexOf),
    mr = L("".slice),
    gr = "$0" === "a".replace(/./, "$0"),
    vr = !!/./[ur] && "" === /./[ur]("a", "$0");
  function yr(t, e) {
    if (t instanceof SVGElement) {
      var n = t.getAttribute("class") || "";
      t.setAttribute("class", n.replace(e, "").replace(/^\s+|\s+$/g, ""));
    } else t.className = t.className.replace(e, "").replace(/^\s+|\s+$/g, "");
  }
  function wr(t, e) {
    var n = "";
    if (t.style.cssText && (n += t.style.cssText), "string" == typeof e) n += e;else for (var r in e) n += "".concat(r, ":").concat(e[r], ";");
    t.style.cssText = n;
  }
  function xr(t) {
    if (t) {
      if (!this._introItems[this._currentStep]) return;
      var e = this._introItems[this._currentStep],
        n = v(e.element, this._targetElement),
        r = this._options.helperElementPadding;
      g(e.element) ? u(t, "introjs-fixedTooltip") : yr(t, "introjs-fixedTooltip"), "floating" === e.position && (r = 0), wr(t, {
        width: "".concat(n.width + r, "px"),
        height: "".concat(n.height + r, "px"),
        top: "".concat(n.top - r / 2, "px"),
        left: "".concat(n.left - r / 2, "px")
      });
    }
  }
  !function (t, e, n, r) {
    var o = Rt(t),
      i = !y(function () {
        var e = {};
        return e[o] = function () {
          return 7;
        }, 7 != ""[t](e);
      }),
      a = i && !y(function () {
        var e = !1,
          n = /a/;
        return "split" === t && ((n = {}).constructor = {}, n.constructor[Un] = function () {
          return n;
        }, n.flags = "", n[o] = /./[o]), n.exec = function () {
          return e = !0, null;
        }, n[o](""), !e;
      });
    if (!i || !a || n) {
      var s = L(/./[o]),
        c = e(o, ""[t], function (t, e, n, r, o) {
          var a = L(t),
            c = e.exec;
          return c === Vn || c === Yn.exec ? i && !o ? {
            done: !0,
            value: s(e, n, r)
          } : {
            done: !0,
            value: a(n, e, r)
          } : {
            done: !1
          };
        });
      Ee(String.prototype, t, c[0]), Ee(Yn, o, c[1]);
    }
    r && re(Yn[o], "sham", !0);
  }("replace", function (t, e, n) {
    var r = vr ? "$" : "$0";
    return [function (t, n) {
      var r = X(this),
        o = null == t ? void 0 : mt(t, ur);
      return o ? C(o, t, r, n) : C(e, fn(r), t, n);
    }, function (t, o) {
      var i = Kt(this),
        a = fn(t);
      if ("string" == typeof o && -1 === br(o, r) && -1 === br(o, "$<")) {
        var s = n(e, i, a, o);
        if (s.done) return s.value;
      }
      var c = J(o);
      c || (o = fn(o));
      var l = i.global;
      if (l) {
        var u = i.unicode;
        i.lastIndex = 0;
      }
      for (var h = [];;) {
        var p = lr(i, a);
        if (null === p) break;
        if (dr(h, p), !l) break;
        "" === fn(p[0]) && (i.lastIndex = tr(a, qe(i.lastIndex), u));
      }
      for (var f, d = "", b = 0, m = 0; m < h.length; m++) {
        for (var g = fn((p = h[m])[0]), v = hr(pr(Te(p.index), a.length), 0), y = [], w = 1; w < p.length; w++) dr(y, void 0 === (f = p[w]) ? f : String(f));
        var x = p.groups;
        if (c) {
          var _ = fr([g], y, v, a);
          void 0 !== x && dr(_, x);
          var k = fn(S(o, void 0, _));
        } else k = sr(g, a, v, y, x, o);
        v >= b && (d += mr(a, b, v) + k, b = v + g.length);
      }
      return d + mr(a, b);
    }];
  }, !!y(function () {
    var t = /./;
    return t.exec = function () {
      var t = [];
      return t.groups = {
        a: "7"
      }, t;
    }, "7" !== "".replace(t, "$<a>");
  }) || !gr || vr);
  var _r = ne.f,
    kr = Rt("unscopables"),
    Sr = Array.prototype;
  null == Sr[kr] && _r(Sr, kr, {
    configurable: !0,
    value: In(null)
  });
  var jr,
    Cr = Me.includes;
  function Ar(t, e, n, r, o) {
    return t.left + e + n.width > r.width ? (o.style.left = "".concat(r.width - n.width - t.left, "px"), !1) : (o.style.left = "".concat(e, "px"), !0);
  }
  function Er(t, e, n, r) {
    return t.left + t.width - e - n.width < 0 ? (r.style.left = "".concat(-t.left, "px"), !1) : (r.style.right = "".concat(e, "px"), !0);
  }
  function Nr(t, e) {
    t.includes(e) && t.splice(t.indexOf(e), 1);
  }
  function Ir(t, e, n) {
    var r = this._options.positionPrecedence.slice(),
      o = d(),
      i = v(e).height + 10,
      a = v(e).width + 20,
      s = t.getBoundingClientRect(),
      c = "floating";
    s.bottom + i > o.height && Nr(r, "bottom"), s.top - i < 0 && Nr(r, "top"), s.right + a > o.width && Nr(r, "right"), s.left - a < 0 && Nr(r, "left");
    var l,
      u,
      h = -1 !== (u = (l = n || "").indexOf("-")) ? l.substr(u) : "";
    return n && (n = n.split("-")[0]), r.length && (c = r.includes(n) ? n : r[0]), ["top", "bottom"].includes(c) && (c += function (t, e, n, r) {
      var o = n.width,
        i = e / 2,
        a = Math.min(o, window.screen.width),
        s = ["-left-aligned", "-middle-aligned", "-right-aligned"];
      return a - t < e && Nr(s, "-left-aligned"), (t < i || a - t < i) && Nr(s, "-middle-aligned"), t < e && Nr(s, "-right-aligned"), s.length ? s.includes(r) ? r : s[0] : "-middle-aligned";
    }(s.left, a, o, h)), c;
  }
  function Lr(t, e, n, r) {
    var o,
      i,
      a,
      s,
      c,
      l = "";
    if (r = r || !1, e.style.top = null, e.style.right = null, e.style.bottom = null, e.style.left = null, e.style.marginLeft = null, e.style.marginTop = null, n.style.display = "inherit", this._introItems[this._currentStep]) {
      l = "string" == typeof (o = this._introItems[this._currentStep]).tooltipClass ? o.tooltipClass : this._options.tooltipClass, e.className = ["introjs-tooltip", l].filter(Boolean).join(" "), e.setAttribute("role", "dialog"), "floating" !== (c = this._introItems[this._currentStep].position) && this._options.autoPosition && (c = Ir.call(this, t, e, c)), a = v(t), i = v(e), s = d(), u(e, "introjs-".concat(c));
      var h = a.width / 2 - i.width / 2;
      switch (c) {
        case "top-right-aligned":
          n.className = "introjs-arrow bottom-right";
          var p = 0;
          Er(a, p, i, e), e.style.bottom = "".concat(a.height + 20, "px");
          break;
        case "top-middle-aligned":
          n.className = "introjs-arrow bottom-middle", r && (h += 5), Er(a, h, i, e) && (e.style.right = null, Ar(a, h, i, s, e)), e.style.bottom = "".concat(a.height + 20, "px");
          break;
        case "top-left-aligned":
        case "top":
          n.className = "introjs-arrow bottom", Ar(a, r ? 0 : 15, i, s, e), e.style.bottom = "".concat(a.height + 20, "px");
          break;
        case "right":
          e.style.left = "".concat(a.width + 20, "px"), a.top + i.height > s.height ? (n.className = "introjs-arrow left-bottom", e.style.top = "-".concat(i.height - a.height - 20, "px")) : n.className = "introjs-arrow left";
          break;
        case "left":
          r || !0 !== this._options.showStepNumbers || (e.style.top = "15px"), a.top + i.height > s.height ? (e.style.top = "-".concat(i.height - a.height - 20, "px"), n.className = "introjs-arrow right-bottom") : n.className = "introjs-arrow right", e.style.right = "".concat(a.width + 20, "px");
          break;
        case "floating":
          n.style.display = "none", e.style.left = "50%", e.style.top = "50%", e.style.marginLeft = "-".concat(i.width / 2, "px"), e.style.marginTop = "-".concat(i.height / 2, "px");
          break;
        case "bottom-right-aligned":
          n.className = "introjs-arrow top-right", Er(a, p = 0, i, e), e.style.top = "".concat(a.height + 20, "px");
          break;
        case "bottom-middle-aligned":
          n.className = "introjs-arrow top-middle", r && (h += 5), Er(a, h, i, e) && (e.style.right = null, Ar(a, h, i, s, e)), e.style.top = "".concat(a.height + 20, "px");
          break;
        default:
          n.className = "introjs-arrow top", Ar(a, 0, i, s, e), e.style.top = "".concat(a.height + 20, "px");
      }
    }
  }
  function Tr() {
    c(document.querySelectorAll(".introjs-showElement"), function (t) {
      yr(t, /introjs-[a-zA-Z]+/g);
    });
  }
  function Or(t, e) {
    var n = document.createElement(t);
    e = e || {};
    var r = /^(?:role|data-|aria-)/;
    for (var o in e) {
      var i = e[o];
      "style" === o ? wr(n, i) : o.match(r) ? n.setAttribute(o, i) : n[o] = i;
    }
    return n;
  }
  function Pr(t, e, n) {
    if (n) {
      var r = e.style.opacity || "1";
      wr(e, {
        opacity: "0"
      }), window.setTimeout(function () {
        wr(e, {
          opacity: r
        });
      }, 10);
    }
    t.appendChild(e);
  }
  function Rr() {
    return parseInt(this._currentStep + 1, 10) / this._introItems.length * 100;
  }
  function qr() {
    var t = document.querySelector(".introjs-disableInteraction");
    null === t && (t = Or("div", {
      className: "introjs-disableInteraction"
    }), this._targetElement.appendChild(t)), xr.call(this, t);
  }
  function Br(t) {
    var e = this,
      n = Or("div", {
        className: "introjs-bullets"
      });
    !1 === this._options.showBullets && (n.style.display = "none");
    var r = Or("ul");
    r.setAttribute("role", "tablist");
    var o = function () {
      e.goToStep(this.getAttribute("data-step-number"));
    };
    return c(this._introItems, function (e, n) {
      var i = e.step,
        a = Or("li"),
        s = Or("a");
      a.setAttribute("role", "presentation"), s.setAttribute("role", "tab"), s.onclick = o, n === t.step - 1 && (s.className = "active"), m(s), s.innerHTML = "&nbsp;", s.setAttribute("data-step-number", i), a.appendChild(s), r.appendChild(a);
    }), n.appendChild(r), n;
  }
  function Mr(t, e) {
    if (this._options.showBullets) {
      var n = document.querySelector(".introjs-bullets");
      n && n.parentNode.replaceChild(Br.call(this, e), n);
    }
  }
  function Hr(t, e) {
    this._options.showBullets && (t.querySelector(".introjs-bullets li > a.active").className = "", t.querySelector('.introjs-bullets li > a[data-step-number="'.concat(e.step, '"]')).className = "active");
  }
  function Fr() {
    var t = Or("div");
    t.className = "introjs-progress", !1 === this._options.showProgress && (t.style.display = "none");
    var e = Or("div", {
      className: "introjs-progressbar"
    });
    return this._options.progressBarAdditionalClass && (e.className += " " + this._options.progressBarAdditionalClass), e.setAttribute("role", "progress"), e.setAttribute("aria-valuemin", 0), e.setAttribute("aria-valuemax", 100), e.setAttribute("aria-valuenow", Rr.call(this)), e.style.cssText = "width:".concat(Rr.call(this), "%;"), t.appendChild(e), t;
  }
  function Dr(t) {
    t.querySelector(".introjs-progress .introjs-progressbar").style.cssText = "width:".concat(Rr.call(this), "%;"), t.querySelector(".introjs-progress .introjs-progressbar").setAttribute("aria-valuenow", Rr.call(this));
  }
  function $r(t) {
    return Gr.apply(this, arguments);
  }
  function Gr() {
    return (Gr = r(t().mark(function e(n) {
      var o,
        i,
        a,
        s,
        c,
        l,
        h,
        d,
        g,
        v,
        y,
        w,
        x,
        _,
        k,
        S,
        j,
        C,
        A,
        E,
        N,
        I,
        L,
        T,
        O,
        P = this;
      return t().wrap(function (e) {
        for (;;) switch (e.prev = e.next) {
          case 0:
            if (void 0 === this._introChangeCallback) {
              e.next = 3;
              break;
            }
            return e.next = 3, this._introChangeCallback.call(this, n.element);
          case 3:
            if (o = this, i = document.querySelector(".introjs-helperLayer"), a = document.querySelector(".introjs-tooltipReferenceLayer"), s = "introjs-helperLayer", "string" == typeof n.highlightClass && (s += " ".concat(n.highlightClass)), "string" == typeof this._options.highlightClass && (s += " ".concat(this._options.highlightClass)), null !== i && null !== a ? (d = a.querySelector(".introjs-helperNumberLayer"), g = a.querySelector(".introjs-tooltiptext"), v = a.querySelector(".introjs-tooltip-title"), y = a.querySelector(".introjs-arrow"), w = a.querySelector(".introjs-tooltip"), h = a.querySelector(".introjs-skipbutton"), l = a.querySelector(".introjs-prevbutton"), c = a.querySelector(".introjs-nextbutton"), i.className = s, w.style.opacity = 0, w.style.display = "none", f.call(o, n), xr.call(o, i), xr.call(o, a), Tr(), o._lastShowElementTimer && window.clearTimeout(o._lastShowElementTimer), o._lastShowElementTimer = window.setTimeout(function () {
              null !== d && (d.innerHTML = "".concat(n.step, " ").concat(P._options.stepNumbersOfLabel, " ").concat(P._introItems.length)), g.innerHTML = n.intro, v.innerHTML = n.title, w.style.display = "block", Lr.call(o, n.element, w, y), Hr.call(o, a, n), Dr.call(o, a), w.style.opacity = 1, (null != c && /introjs-donebutton/gi.test(c.className) || null != c) && c.focus(), b.call(o, n.scrollTo, n, g);
            }, 350)) : (x = Or("div", {
              className: s
            }), _ = Or("div", {
              className: "introjs-tooltipReferenceLayer"
            }), k = Or("div", {
              className: "introjs-arrow"
            }), S = Or("div", {
              className: "introjs-tooltip"
            }), j = Or("div", {
              className: "introjs-tooltiptext"
            }), C = Or("div", {
              className: "introjs-tooltip-header"
            }), A = Or("h1", {
              className: "introjs-tooltip-title"
            }), E = Or("div"), wr(x, {
              "box-shadow": "0 0 1px 2px rgba(33, 33, 33, 0.8), rgba(33, 33, 33, ".concat(o._options.overlayOpacity.toString(), ") 0 0 0 5000px")
            }), f.call(o, n), xr.call(o, x), xr.call(o, _), Pr(this._targetElement, x, !0), Pr(this._targetElement, _), j.innerHTML = n.intro, A.innerHTML = n.title, E.className = "introjs-tooltipbuttons", !1 === this._options.showButtons && (E.style.display = "none"), C.appendChild(A), S.appendChild(C), S.appendChild(j), this._options.dontShowAgain && (N = Or("div", {
              className: "introjs-dontShowAgain"
            }), (I = Or("input", {
              type: "checkbox",
              id: "introjs-dontShowAgain",
              name: "introjs-dontShowAgain"
            })).onchange = function (t) {
              P.setDontShowAgain(t.target.checked);
            }, (L = Or("label", {
              htmlFor: "introjs-dontShowAgain"
            })).innerText = this._options.dontShowAgainLabel, N.appendChild(I), N.appendChild(L), S.appendChild(N)), S.appendChild(Br.call(this, n)), S.appendChild(Fr.call(this)), T = Or("div"), !0 === this._options.showStepNumbers && (T.className = "introjs-helperNumberLayer", T.innerHTML = "".concat(n.step, " ").concat(this._options.stepNumbersOfLabel, " ").concat(this._introItems.length), S.appendChild(T)), S.appendChild(k), _.appendChild(S), (c = Or("a")).onclick = r(t().mark(function e() {
              return t().wrap(function (t) {
                for (;;) switch (t.prev = t.next) {
                  case 0:
                    if (o._introItems.length - 1 === o._currentStep) {
                      t.next = 5;
                      break;
                    }
                    return t.next = 3, Yr.call(o);
                  case 3:
                    t.next = 11;
                    break;
                  case 5:
                    if (!/introjs-donebutton/gi.test(c.className)) {
                      t.next = 11;
                      break;
                    }
                    if ("function" != typeof o._introCompleteCallback) {
                      t.next = 9;
                      break;
                    }
                    return t.next = 9, o._introCompleteCallback.call(o, o._currentStep, "done");
                  case 9:
                    return t.next = 11, Co.call(o, o._targetElement);
                  case 11:
                  case "end":
                    return t.stop();
                }
              }, e);
            })), m(c), c.innerHTML = this._options.nextLabel, (l = Or("a")).onclick = r(t().mark(function e() {
              return t().wrap(function (t) {
                for (;;) switch (t.prev = t.next) {
                  case 0:
                    if (0 === o._currentStep) {
                      t.next = 3;
                      break;
                    }
                    return t.next = 3, Xr.call(o);
                  case 3:
                  case "end":
                    return t.stop();
                }
              }, e);
            })), m(l), l.innerHTML = this._options.prevLabel, m(h = Or("a", {
              className: "introjs-skipbutton"
            })), h.innerHTML = this._options.skipLabel, h.onclick = r(t().mark(function e() {
              return t().wrap(function (t) {
                for (;;) switch (t.prev = t.next) {
                  case 0:
                    if (o._introItems.length - 1 !== o._currentStep || "function" != typeof o._introCompleteCallback) {
                      t.next = 3;
                      break;
                    }
                    return t.next = 3, o._introCompleteCallback.call(o, o._currentStep, "skip");
                  case 3:
                    if ("function" != typeof o._introSkipCallback) {
                      t.next = 6;
                      break;
                    }
                    return t.next = 6, o._introSkipCallback.call(o);
                  case 6:
                    return t.next = 8, Co.call(o, o._targetElement);
                  case 8:
                  case "end":
                    return t.stop();
                }
              }, e);
            })), C.appendChild(h), this._introItems.length > 1 && E.appendChild(l), E.appendChild(c), S.appendChild(E), Lr.call(o, n.element, S, k), b.call(this, n.scrollTo, n, S)), (O = o._targetElement.querySelector(".introjs-disableInteraction")) && O.parentNode.removeChild(O), n.disableInteraction && qr.call(o), 0 === this._currentStep && this._introItems.length > 1 ? (null != c && (c.className = "".concat(this._options.buttonClass, " introjs-nextbutton"), c.innerHTML = this._options.nextLabel), !0 === this._options.hidePrev ? (null != l && (l.className = "".concat(this._options.buttonClass, " introjs-prevbutton introjs-hidden")), null != c && u(c, "introjs-fullbutton")) : null != l && (l.className = "".concat(this._options.buttonClass, " introjs-prevbutton introjs-disabled"))) : this._introItems.length - 1 === this._currentStep || 1 === this._introItems.length ? (null != l && (l.className = "".concat(this._options.buttonClass, " introjs-prevbutton")), !0 === this._options.hideNext ? (null != c && (c.className = "".concat(this._options.buttonClass, " introjs-nextbutton introjs-hidden")), null != l && u(l, "introjs-fullbutton")) : null != c && (!0 === this._options.nextToDone ? (c.innerHTML = this._options.doneLabel, u(c, "".concat(this._options.buttonClass, " introjs-nextbutton introjs-donebutton"))) : c.className = "".concat(this._options.buttonClass, " introjs-nextbutton introjs-disabled"))) : (null != l && (l.className = "".concat(this._options.buttonClass, " introjs-prevbutton")), null != c && (c.className = "".concat(this._options.buttonClass, " introjs-nextbutton"), c.innerHTML = this._options.nextLabel)), null != l && l.setAttribute("role", "button"), null != c && c.setAttribute("role", "button"), null != h && h.setAttribute("role", "button"), null != c && c.focus(), p(n), void 0 === this._introAfterChangeCallback) {
              e.next = 22;
              break;
            }
            return e.next = 22, this._introAfterChangeCallback.call(this, n.element);
          case 22:
          case "end":
            return e.stop();
        }
      }, e, this);
    }))).apply(this, arguments);
  }
  function zr(t) {
    return Wr.apply(this, arguments);
  }
  function Wr() {
    return (Wr = r(t().mark(function e(n) {
      return t().wrap(function (t) {
        for (;;) switch (t.prev = t.next) {
          case 0:
            if (this._currentStep = n - 2, void 0 === this._introItems) {
              t.next = 4;
              break;
            }
            return t.next = 4, Yr.call(this);
          case 4:
          case "end":
            return t.stop();
        }
      }, e, this);
    }))).apply(this, arguments);
  }
  function Vr(t) {
    return Ur.apply(this, arguments);
  }
  function Ur() {
    return (Ur = r(t().mark(function e(n) {
      return t().wrap(function (t) {
        for (;;) switch (t.prev = t.next) {
          case 0:
            if (this._currentStepNumber = n, void 0 === this._introItems) {
              t.next = 4;
              break;
            }
            return t.next = 4, Yr.call(this);
          case 4:
          case "end":
            return t.stop();
        }
      }, e, this);
    }))).apply(this, arguments);
  }
  function Yr() {
    return Kr.apply(this, arguments);
  }
  function Kr() {
    return Kr = r(t().mark(function e() {
      var n,
        r,
        o = this;
      return t().wrap(function (t) {
        for (;;) switch (t.prev = t.next) {
          case 0:
            if (this._direction = "forward", void 0 !== this._currentStepNumber && c(this._introItems, function (t, e) {
              t.step === o._currentStepNumber && (o._currentStep = e - 1, o._currentStepNumber = void 0);
            }), void 0 === this._currentStep ? this._currentStep = 0 : ++this._currentStep, n = this._introItems[this._currentStep], r = !0, void 0 === this._introBeforeChangeCallback) {
              t.next = 9;
              break;
            }
            return t.next = 8, this._introBeforeChangeCallback.call(this, n && n.element);
          case 8:
            r = t.sent;
          case 9:
            if (!1 !== r) {
              t.next = 12;
              break;
            }
            return --this._currentStep, t.abrupt("return", !1);
          case 12:
            if (!(this._introItems.length <= this._currentStep)) {
              t.next = 19;
              break;
            }
            if ("function" != typeof this._introCompleteCallback) {
              t.next = 16;
              break;
            }
            return t.next = 16, this._introCompleteCallback.call(this, this._currentStep, "end");
          case 16:
            return t.next = 18, Co.call(this, this._targetElement);
          case 18:
            return t.abrupt("return");
          case 19:
            return t.next = 21, $r.call(this, n);
          case 21:
          case "end":
            return t.stop();
        }
      }, e, this);
    })), Kr.apply(this, arguments);
  }
  function Xr() {
    return Qr.apply(this, arguments);
  }
  function Qr() {
    return Qr = r(t().mark(function e() {
      var n, r;
      return t().wrap(function (t) {
        for (;;) switch (t.prev = t.next) {
          case 0:
            if (this._direction = "backward", 0 !== this._currentStep) {
              t.next = 3;
              break;
            }
            return t.abrupt("return", !1);
          case 3:
            if (--this._currentStep, n = this._introItems[this._currentStep], r = !0, void 0 === this._introBeforeChangeCallback) {
              t.next = 10;
              break;
            }
            return t.next = 9, this._introBeforeChangeCallback.call(this, n && n.element);
          case 9:
            r = t.sent;
          case 10:
            if (!1 !== r) {
              t.next = 13;
              break;
            }
            return ++this._currentStep, t.abrupt("return", !1);
          case 13:
            return t.next = 15, $r.call(this, n);
          case 15:
          case "end":
            return t.stop();
        }
      }, e, this);
    })), Qr.apply(this, arguments);
  }
  function Jr() {
    return this._currentStep;
  }
  function Zr(t) {
    return to.apply(this, arguments);
  }
  function to() {
    return (to = r(t().mark(function e(n) {
      var r, o;
      return t().wrap(function (t) {
        for (;;) switch (t.prev = t.next) {
          case 0:
            if (null === (r = void 0 === n.code ? n.which : n.code) && (r = null === n.charCode ? n.keyCode : n.charCode), "Escape" !== r && 27 !== r || !0 !== this._options.exitOnEsc) {
              t.next = 7;
              break;
            }
            return t.next = 5, Co.call(this, this._targetElement);
          case 5:
            t.next = 39;
            break;
          case 7:
            if ("ArrowLeft" !== r && 37 !== r) {
              t.next = 12;
              break;
            }
            return t.next = 10, Xr.call(this);
          case 10:
            t.next = 39;
            break;
          case 12:
            if ("ArrowRight" !== r && 39 !== r) {
              t.next = 17;
              break;
            }
            return t.next = 15, Yr.call(this);
          case 15:
            t.next = 39;
            break;
          case 17:
            if ("Enter" !== r && "NumpadEnter" !== r && 13 !== r) {
              t.next = 39;
              break;
            }
            if (!(o = n.target || n.srcElement) || !o.className.match("introjs-prevbutton")) {
              t.next = 24;
              break;
            }
            return t.next = 22, Xr.call(this);
          case 22:
            t.next = 38;
            break;
          case 24:
            if (!o || !o.className.match("introjs-skipbutton")) {
              t.next = 32;
              break;
            }
            if (this._introItems.length - 1 !== this._currentStep || "function" != typeof this._introCompleteCallback) {
              t.next = 28;
              break;
            }
            return t.next = 28, this._introCompleteCallback.call(this, this._currentStep, "skip");
          case 28:
            return t.next = 30, Co.call(this, this._targetElement);
          case 30:
            t.next = 38;
            break;
          case 32:
            if (!o || !o.getAttribute("data-step-number")) {
              t.next = 36;
              break;
            }
            o.click(), t.next = 38;
            break;
          case 36:
            return t.next = 38, Yr.call(this);
          case 38:
            n.preventDefault ? n.preventDefault() : n.returnValue = !1;
          case 39:
          case "end":
            return t.stop();
        }
      }, e, this);
    }))).apply(this, arguments);
  }
  function eo(t) {
    if (null === t || "object" !== e(t) || void 0 !== t.nodeType) return t;
    var n = {};
    for (var r in t) void 0 !== window.jQuery && t[r] instanceof window.jQuery ? n[r] = t[r] : n[r] = eo(t[r]);
    return n;
  }
  function no(t, e) {
    var n,
      r = this;
    return function () {
      for (var o = arguments.length, i = new Array(o), a = 0; a < o; a++) i[a] = arguments[a];
      clearTimeout(n), n = setTimeout(function () {
        t.apply(r, i);
      }, e);
    };
  }
  function ro(t) {
    var e = document.querySelector(".introjs-hints");
    return e ? e.querySelectorAll(t) : [];
  }
  function oo(t) {
    return io.apply(this, arguments);
  }
  function io() {
    return (io = r(t().mark(function e(n) {
      var r;
      return t().wrap(function (t) {
        for (;;) switch (t.prev = t.next) {
          case 0:
            if (r = ro('.introjs-hint[data-step="'.concat(n, '"]'))[0], vo.call(this), r && u(r, "introjs-hidehint"), void 0 === this._hintCloseCallback) {
              t.next = 6;
              break;
            }
            return t.next = 6, this._hintCloseCallback.call(this, n);
          case 6:
          case "end":
            return t.stop();
        }
      }, e, this);
    }))).apply(this, arguments);
  }
  function ao() {
    var e = this;
    c(ro(".introjs-hint"), function () {
      var n = r(t().mark(function n(r) {
        return t().wrap(function (t) {
          for (;;) switch (t.prev = t.next) {
            case 0:
              return t.next = 2, oo.call(e, r.getAttribute("data-step"));
            case 2:
            case "end":
              return t.stop();
          }
        }, n);
      }));
      return function (t) {
        return n.apply(this, arguments);
      };
    }());
  }
  function so() {
    return co.apply(this, arguments);
  }
  function co() {
    return (co = r(t().mark(function e() {
      var n,
        r = this;
      return t().wrap(function (t) {
        for (;;) switch (t.prev = t.next) {
          case 0:
            if (!(n = ro(".introjs-hint")) || !n.length) {
              t.next = 5;
              break;
            }
            c(n, function (t) {
              lo.call(r, t.getAttribute("data-step"));
            }), t.next = 7;
            break;
          case 5:
            return t.next = 7, yo.call(this, this._targetElement);
          case 7:
          case "end":
            return t.stop();
        }
      }, e, this);
    }))).apply(this, arguments);
  }
  function lo(t) {
    var e = ro('.introjs-hint[data-step="'.concat(t, '"]'))[0];
    e && yr(e, /introjs-hidehint/g);
  }
  function uo() {
    var t = this;
    c(ro(".introjs-hint"), function (e) {
      ho.call(t, e.getAttribute("data-step"));
    }), l.off(document, "click", vo, this, !1), l.off(window, "resize", xo, this, !0), this._hintsAutoRefreshFunction && l.off(window, "scroll", this._hintsAutoRefreshFunction, this, !0);
  }
  function ho(t) {
    var e = ro('.introjs-hint[data-step="'.concat(t, '"]'))[0];
    e && e.parentNode.removeChild(e);
  }
  function po() {
    return fo.apply(this, arguments);
  }
  function fo() {
    return (fo = r(t().mark(function e() {
      var n,
        r,
        o,
        i = this;
      return t().wrap(function (t) {
        for (;;) switch (t.prev = t.next) {
          case 0:
            if (n = this, null === (r = document.querySelector(".introjs-hints")) && (r = Or("div", {
              className: "introjs-hints"
            })), o = function (t) {
              return function (e) {
                var r = e || window.event;
                r.stopPropagation && r.stopPropagation(), null !== r.cancelBubble && (r.cancelBubble = !0), mo.call(n, t);
              };
            }, c(this._introItems, function (t, e) {
              if (!document.querySelector('.introjs-hint[data-step="'.concat(e, '"]'))) {
                var n = Or("a", {
                  className: "introjs-hint"
                });
                m(n), n.onclick = o(e), t.hintAnimation || u(n, "introjs-hint-no-anim"), g(t.element) && u(n, "introjs-fixedhint");
                var a = Or("div", {
                    className: "introjs-hint-dot"
                  }),
                  s = Or("div", {
                    className: "introjs-hint-pulse"
                  });
                n.appendChild(a), n.appendChild(s), n.setAttribute("data-step", e), t.targetElement = t.element, t.element = n, bo.call(i, t.hintPosition, n, t.targetElement), r.appendChild(n);
              }
            }), document.body.appendChild(r), void 0 === this._hintsAddedCallback) {
              t.next = 9;
              break;
            }
            return t.next = 9, this._hintsAddedCallback.call(this);
          case 9:
            this._options.hintAutoRefreshInterval >= 0 && (this._hintsAutoRefreshFunction = no(function () {
              return xo.call(i);
            }, this._options.hintAutoRefreshInterval), l.on(window, "scroll", this._hintsAutoRefreshFunction, this, !0));
          case 10:
          case "end":
            return t.stop();
        }
      }, e, this);
    }))).apply(this, arguments);
  }
  function bo(t, e, n) {
    var r = e.style,
      o = v.call(this, n),
      i = 20,
      a = 20;
    switch (t) {
      default:
      case "top-left":
        r.left = "".concat(o.left, "px"), r.top = "".concat(o.top, "px");
        break;
      case "top-right":
        r.left = "".concat(o.left + o.width - i, "px"), r.top = "".concat(o.top, "px");
        break;
      case "bottom-left":
        r.left = "".concat(o.left, "px"), r.top = "".concat(o.top + o.height - a, "px");
        break;
      case "bottom-right":
        r.left = "".concat(o.left + o.width - i, "px"), r.top = "".concat(o.top + o.height - a, "px");
        break;
      case "middle-left":
        r.left = "".concat(o.left, "px"), r.top = "".concat(o.top + (o.height - a) / 2, "px");
        break;
      case "middle-right":
        r.left = "".concat(o.left + o.width - i, "px"), r.top = "".concat(o.top + (o.height - a) / 2, "px");
        break;
      case "middle-middle":
        r.left = "".concat(o.left + (o.width - i) / 2, "px"), r.top = "".concat(o.top + (o.height - a) / 2, "px");
        break;
      case "bottom-middle":
        r.left = "".concat(o.left + (o.width - i) / 2, "px"), r.top = "".concat(o.top + o.height - a, "px");
        break;
      case "top-middle":
        r.left = "".concat(o.left + (o.width - i) / 2, "px"), r.top = "".concat(o.top, "px");
    }
  }
  function mo(t) {
    return go.apply(this, arguments);
  }
  function go() {
    return (go = r(t().mark(function e(n) {
      var r, o, i, a, s, c, l, u, h;
      return t().wrap(function (t) {
        for (;;) switch (t.prev = t.next) {
          case 0:
            if (r = document.querySelector('.introjs-hint[data-step="'.concat(n, '"]')), o = this._introItems[n], void 0 === this._hintClickCallback) {
              t.next = 5;
              break;
            }
            return t.next = 5, this._hintClickCallback.call(this, r, o, n);
          case 5:
            if (i = vo.call(this), parseInt(i, 10) !== n) {
              t.next = 8;
              break;
            }
            return t.abrupt("return");
          case 8:
            a = Or("div", {
              className: "introjs-tooltip"
            }), s = Or("div"), c = Or("div"), l = Or("div"), a.onclick = function (t) {
              t.stopPropagation ? t.stopPropagation() : t.cancelBubble = !0;
            }, s.className = "introjs-tooltiptext", (u = Or("p")).innerHTML = o.hint, s.appendChild(u), this._options.hintShowButton && ((h = Or("a")).className = this._options.buttonClass, h.setAttribute("role", "button"), h.innerHTML = this._options.hintButtonLabel, h.onclick = oo.bind(this, n), s.appendChild(h)), c.className = "introjs-arrow", a.appendChild(c), a.appendChild(s), this._currentStep = r.getAttribute("data-step"), l.className = "introjs-tooltipReferenceLayer introjs-hintReference", l.setAttribute("data-step", r.getAttribute("data-step")), xr.call(this, l), l.appendChild(a), document.body.appendChild(l), Lr.call(this, r, a, c, !0);
          case 28:
          case "end":
            return t.stop();
        }
      }, e, this);
    }))).apply(this, arguments);
  }
  function vo() {
    var t = document.querySelector(".introjs-hintReference");
    if (t) {
      var e = t.getAttribute("data-step");
      return t.parentNode.removeChild(t), e;
    }
  }
  function yo(t) {
    return wo.apply(this, arguments);
  }
  function wo() {
    return (wo = r(t().mark(function e(n) {
      var r,
        o = this;
      return t().wrap(function (t) {
        for (;;) switch (t.prev = t.next) {
          case 0:
            if (this._introItems = [], !this._options.hints) {
              t.next = 5;
              break;
            }
            c(this._options.hints, function (t) {
              var e = eo(t);
              "string" == typeof e.element && (e.element = document.querySelector(e.element)), e.hintPosition = e.hintPosition || o._options.hintPosition, e.hintAnimation = e.hintAnimation || o._options.hintAnimation, null !== e.element && o._introItems.push(e);
            }), t.next = 9;
            break;
          case 5:
            if ((r = n.querySelectorAll("*[data-hint]")) && r.length) {
              t.next = 8;
              break;
            }
            return t.abrupt("return", !1);
          case 8:
            c(r, function (t) {
              var e = t.getAttribute("data-hint-animation");
              e = e ? "true" === e : o._options.hintAnimation, o._introItems.push({
                element: t,
                hint: t.getAttribute("data-hint"),
                hintPosition: t.getAttribute("data-hint-position") || o._options.hintPosition,
                hintAnimation: e,
                tooltipClass: t.getAttribute("data-tooltip-class"),
                position: t.getAttribute("data-position") || o._options.tooltipPosition
              });
            });
          case 9:
            return t.next = 11, po.call(this);
          case 11:
            l.on(document, "click", vo, this, !1), l.on(window, "resize", xo, this, !0);
          case 13:
          case "end":
            return t.stop();
        }
      }, e, this);
    }))).apply(this, arguments);
  }
  function xo() {
    var t = this;
    c(this._introItems, function (e) {
      var n = e.targetElement,
        r = e.hintPosition,
        o = e.element;
      void 0 !== n && bo.call(t, r, o, n);
    });
  }
  function _o(t) {
    var e = this,
      n = t.querySelectorAll("*[data-intro]"),
      r = [];
    if (this._options.steps) c(this._options.steps, function (t) {
      var n = eo(t);
      if (n.step = r.length + 1, n.title = n.title || "", "string" == typeof n.element && (n.element = document.querySelector(n.element)), void 0 === n.element || null === n.element) {
        var o = document.querySelector(".introjsFloatingElement");
        null === o && (o = Or("div", {
          className: "introjsFloatingElement"
        }), document.body.appendChild(o)), n.element = o, n.position = "floating";
      }
      n.position = n.position || e._options.tooltipPosition, n.scrollTo = n.scrollTo || e._options.scrollTo, void 0 === n.disableInteraction && (n.disableInteraction = e._options.disableInteraction), null !== n.element && r.push(n);
    });else {
      var o;
      if (n.length < 1) return [];
      c(n, function (t) {
        if ((!e._options.group || t.getAttribute("data-intro-group") === e._options.group) && "none" !== t.style.display) {
          var n = parseInt(t.getAttribute("data-step"), 10);
          o = t.hasAttribute("data-disable-interaction") ? !!t.getAttribute("data-disable-interaction") : e._options.disableInteraction, n > 0 && (r[n - 1] = {
            element: t,
            title: t.getAttribute("data-title") || "",
            intro: t.getAttribute("data-intro"),
            step: parseInt(t.getAttribute("data-step"), 10),
            tooltipClass: t.getAttribute("data-tooltip-class"),
            highlightClass: t.getAttribute("data-highlight-class"),
            position: t.getAttribute("data-position") || e._options.tooltipPosition,
            scrollTo: t.getAttribute("data-scroll-to") || e._options.scrollTo,
            disableInteraction: o
          });
        }
      });
      var i = 0;
      c(n, function (t) {
        if ((!e._options.group || t.getAttribute("data-intro-group") === e._options.group) && null === t.getAttribute("data-step")) {
          for (; void 0 !== r[i];) i++;
          o = t.hasAttribute("data-disable-interaction") ? !!t.getAttribute("data-disable-interaction") : e._options.disableInteraction, r[i] = {
            element: t,
            title: t.getAttribute("data-title") || "",
            intro: t.getAttribute("data-intro"),
            step: i + 1,
            tooltipClass: t.getAttribute("data-tooltip-class"),
            highlightClass: t.getAttribute("data-highlight-class"),
            position: t.getAttribute("data-position") || e._options.tooltipPosition,
            scrollTo: t.getAttribute("data-scroll-to") || e._options.scrollTo,
            disableInteraction: o
          };
        }
      });
    }
    for (var a = [], s = 0; s < r.length; s++) r[s] && a.push(r[s]);
    return (r = a).sort(function (t, e) {
      return t.step - e.step;
    }), r;
  }
  function ko(t) {
    var e = document.querySelector(".introjs-tooltipReferenceLayer"),
      n = document.querySelector(".introjs-helperLayer"),
      r = document.querySelector(".introjs-disableInteraction");
    if (xr.call(this, n), xr.call(this, e), xr.call(this, r), t && (this._introItems = _o.call(this, this._targetElement), Mr.call(this, e, this._introItems[this._currentStep]), Dr.call(this, e)), void 0 !== this._currentStep && null !== this._currentStep) {
      var o = document.querySelector(".introjs-arrow"),
        i = document.querySelector(".introjs-tooltip");
      i && o && Lr.call(this, this._introItems[this._currentStep].element, i, o);
    }
    return xo.call(this), this;
  }
  function So() {
    ko.call(this);
  }
  function jo(t, e) {
    if (t && t.parentElement) {
      var n = t.parentElement;
      e ? (wr(t, {
        opacity: "0"
      }), window.setTimeout(function () {
        try {
          n.removeChild(t);
        } catch (t) {}
      }, 500)) : n.removeChild(t);
    }
  }
  function Co(t, e) {
    return Ao.apply(this, arguments);
  }
  function Ao() {
    return (Ao = r(t().mark(function e(n, r) {
      var o, i;
      return t().wrap(function (t) {
        for (;;) switch (t.prev = t.next) {
          case 0:
            if (o = !0, void 0 === this._introBeforeExitCallback) {
              t.next = 5;
              break;
            }
            return t.next = 4, this._introBeforeExitCallback.call(this);
          case 4:
            o = t.sent;
          case 5:
            if (r || !1 !== o) {
              t.next = 7;
              break;
            }
            return t.abrupt("return");
          case 7:
            if ((i = n.querySelectorAll(".introjs-overlay")) && i.length && c(i, function (t) {
              return jo(t);
            }), jo(n.querySelector(".introjs-helperLayer"), !0), jo(n.querySelector(".introjs-tooltipReferenceLayer")), jo(n.querySelector(".introjs-disableInteraction")), jo(document.querySelector(".introjsFloatingElement")), Tr(), l.off(window, "keydown", Zr, this, !0), l.off(window, "resize", So, this, !0), void 0 === this._introExitCallback) {
              t.next = 23;
              break;
            }
            return t.next = 23, this._introExitCallback.call(this);
          case 23:
            this._currentStep = void 0;
          case 24:
          case "end":
            return t.stop();
        }
      }, e, this);
    }))).apply(this, arguments);
  }
  function Eo(e) {
    var n = this,
      o = Or("div", {
        className: "introjs-overlay"
      });
    return wr(o, {
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
      position: "fixed"
    }), e.appendChild(o), !0 === this._options.exitOnOverlayClick && (wr(o, {
      cursor: "pointer"
    }), o.onclick = r(t().mark(function r() {
      return t().wrap(function (t) {
        for (;;) switch (t.prev = t.next) {
          case 0:
            return t.next = 2, Co.call(n, e);
          case 2:
          case "end":
            return t.stop();
        }
      }, r);
    }))), !0;
  }
  function No(t) {
    return Io.apply(this, arguments);
  }
  function Io() {
    return (Io = r(t().mark(function e(n) {
      var r;
      return t().wrap(function (t) {
        for (;;) switch (t.prev = t.next) {
          case 0:
            if (this.isActive()) {
              t.next = 2;
              break;
            }
            return t.abrupt("return");
          case 2:
            if (void 0 === this._introStartCallback) {
              t.next = 5;
              break;
            }
            return t.next = 5, this._introStartCallback.call(this, n);
          case 5:
            if (0 !== (r = _o.call(this, n)).length) {
              t.next = 8;
              break;
            }
            return t.abrupt("return", !1);
          case 8:
            if (this._introItems = r, !Eo.call(this, n)) {
              t.next = 14;
              break;
            }
            return t.next = 12, Yr.call(this);
          case 12:
            this._options.keyboardNavigation && l.on(window, "keydown", Zr, this, !0), l.on(window, "resize", So, this, !0);
          case 14:
            return t.abrupt("return", !1);
          case 15:
          case "end":
            return t.stop();
        }
      }, e, this);
    }))).apply(this, arguments);
  }
  function Lo(t, e, n) {
    var r,
      i = (o(r = {}, t, e), o(r, "path", "/"), r);
    if (n) {
      var a = new Date();
      a.setTime(a.getTime() + 24 * n * 60 * 60 * 1e3), i.expires = a.toUTCString();
    }
    var s = [];
    for (var c in i) s.push("".concat(c, "=").concat(i[c]));
    return document.cookie = s.join("; "), To(t);
  }
  function To(t) {
    return (e = {}, document.cookie.split(";").forEach(function (t) {
      var n = i(t.split("="), 2),
        r = n[0],
        o = n[1];
      e[r.trim()] = o;
    }), e)[t];
    var e;
  }
  rn({
    target: "Array",
    proto: !0,
    forced: y(function () {
      return !Array(1).includes();
    })
  }, {
    includes: function (t) {
      return Cr(this, t, arguments.length > 1 ? arguments[1] : void 0);
    }
  }), jr = "includes", Sr[kr][jr] = !0;
  var Oo = "true";
  function Po(t) {
    t ? Lo(this._options.dontShowAgainCookie, Oo, this._options.dontShowAgainCookieDays) : Lo(this._options.dontShowAgainCookie, "", -1);
  }
  function Ro() {
    var t = To(this._options.dontShowAgainCookie);
    return t && t === Oo;
  }
  function qo(t) {
    this._targetElement = t, this._introItems = [], this._options = {
      isActive: !0,
      nextLabel: "Next",
      prevLabel: "Back",
      skipLabel: "×",
      doneLabel: "Done",
      hidePrev: !1,
      hideNext: !1,
      nextToDone: !0,
      tooltipPosition: "bottom",
      tooltipClass: "",
      group: "",
      highlightClass: "",
      exitOnEsc: !0,
      exitOnOverlayClick: !0,
      showStepNumbers: !1,
      stepNumbersOfLabel: "of",
      keyboardNavigation: !0,
      showButtons: !0,
      showBullets: !0,
      showProgress: !1,
      scrollToElement: !0,
      scrollTo: "element",
      scrollPadding: 30,
      overlayOpacity: .5,
      autoPosition: !0,
      positionPrecedence: ["bottom", "top", "right", "left"],
      disableInteraction: !1,
      dontShowAgain: !1,
      dontShowAgainLabel: "Don't show this again",
      dontShowAgainCookie: "introjs-dontShowAgain",
      dontShowAgainCookieDays: 365,
      helperElementPadding: 10,
      hintPosition: "top-middle",
      hintButtonLabel: "Got it",
      hintShowButton: !0,
      hintAutoRefreshInterval: 10,
      hintAnimation: !0,
      buttonClass: "introjs-button",
      progressBarAdditionalClass: !1
    };
  }
  var Bo = function t(n) {
    var r;
    if ("object" === e(n)) r = new qo(n);else if ("string" == typeof n) {
      var o = document.querySelector(n);
      if (!o) throw new Error("There is no element with given selector.");
      r = new qo(o);
    } else r = new qo(document.body);
    return t.instances[s(r, "introjs-instance")] = r, r;
  };
  return Bo.version = "6.0.0", Bo.instances = {}, Bo.fn = qo.prototype = {
    isActive: function () {
      return (!this._options.dontShowAgain || !Ro.call(this)) && this._options.isActive;
    },
    clone: function () {
      return new qo(this);
    },
    setOption: function (t, e) {
      return this._options[t] = e, this;
    },
    setOptions: function (t) {
      return this._options = function (t, e) {
        var n,
          r = {};
        for (n in t) r[n] = t[n];
        for (n in e) r[n] = e[n];
        return r;
      }(this._options, t), this;
    },
    start: function () {
      var e = this;
      return r(t().mark(function n() {
        return t().wrap(function (t) {
          for (;;) switch (t.prev = t.next) {
            case 0:
              return t.next = 2, No.call(e, e._targetElement);
            case 2:
              return t.abrupt("return", e);
            case 3:
            case "end":
              return t.stop();
          }
        }, n);
      }))();
    },
    goToStep: function (e) {
      var n = this;
      return r(t().mark(function r() {
        return t().wrap(function (t) {
          for (;;) switch (t.prev = t.next) {
            case 0:
              return t.next = 2, zr.call(n, e);
            case 2:
              return t.abrupt("return", n);
            case 3:
            case "end":
              return t.stop();
          }
        }, r);
      }))();
    },
    addStep: function (t) {
      return this._options.steps || (this._options.steps = []), this._options.steps.push(t), this;
    },
    addSteps: function (t) {
      if (t.length) {
        for (var e = 0; e < t.length; e++) this.addStep(t[e]);
        return this;
      }
    },
    goToStepNumber: function (e) {
      var n = this;
      return r(t().mark(function r() {
        return t().wrap(function (t) {
          for (;;) switch (t.prev = t.next) {
            case 0:
              return t.next = 2, Vr.call(n, e);
            case 2:
              return t.abrupt("return", n);
            case 3:
            case "end":
              return t.stop();
          }
        }, r);
      }))();
    },
    nextStep: function () {
      var e = this;
      return r(t().mark(function n() {
        return t().wrap(function (t) {
          for (;;) switch (t.prev = t.next) {
            case 0:
              return t.next = 2, Yr.call(e);
            case 2:
              return t.abrupt("return", e);
            case 3:
            case "end":
              return t.stop();
          }
        }, n);
      }))();
    },
    previousStep: function () {
      var e = this;
      return r(t().mark(function n() {
        return t().wrap(function (t) {
          for (;;) switch (t.prev = t.next) {
            case 0:
              return t.next = 2, Xr.call(e);
            case 2:
              return t.abrupt("return", e);
            case 3:
            case "end":
              return t.stop();
          }
        }, n);
      }))();
    },
    currentStep: function () {
      return Jr.call(this);
    },
    exit: function (e) {
      var n = this;
      return r(t().mark(function r() {
        return t().wrap(function (t) {
          for (;;) switch (t.prev = t.next) {
            case 0:
              return t.next = 2, Co.call(n, n._targetElement, e);
            case 2:
              return t.abrupt("return", n);
            case 3:
            case "end":
              return t.stop();
          }
        }, r);
      }))();
    },
    refresh: function (t) {
      return ko.call(this, t), this;
    },
    setDontShowAgain: function (t) {
      return Po.call(this, t), this;
    },
    onbeforechange: function (t) {
      if ("function" != typeof t) throw new Error("Provided callback for onbeforechange was not a function");
      return this._introBeforeChangeCallback = t, this;
    },
    onchange: function (t) {
      if ("function" != typeof t) throw new Error("Provided callback for onchange was not a function.");
      return this._introChangeCallback = t, this;
    },
    onafterchange: function (t) {
      if ("function" != typeof t) throw new Error("Provided callback for onafterchange was not a function");
      return this._introAfterChangeCallback = t, this;
    },
    oncomplete: function (t) {
      if ("function" != typeof t) throw new Error("Provided callback for oncomplete was not a function.");
      return this._introCompleteCallback = t, this;
    },
    onhintsadded: function (t) {
      if ("function" != typeof t) throw new Error("Provided callback for onhintsadded was not a function.");
      return this._hintsAddedCallback = t, this;
    },
    onhintclick: function (t) {
      if ("function" != typeof t) throw new Error("Provided callback for onhintclick was not a function.");
      return this._hintClickCallback = t, this;
    },
    onhintclose: function (t) {
      if ("function" != typeof t) throw new Error("Provided callback for onhintclose was not a function.");
      return this._hintCloseCallback = t, this;
    },
    onstart: function (t) {
      if ("function" != typeof t) throw new Error("Provided callback for onstart was not a function.");
      return this._introStartCallback = t, this;
    },
    onexit: function (t) {
      if ("function" != typeof t) throw new Error("Provided callback for onexit was not a function.");
      return this._introExitCallback = t, this;
    },
    onskip: function (t) {
      if ("function" != typeof t) throw new Error("Provided callback for onskip was not a function.");
      return this._introSkipCallback = t, this;
    },
    onbeforeexit: function (t) {
      if ("function" != typeof t) throw new Error("Provided callback for onbeforeexit was not a function.");
      return this._introBeforeExitCallback = t, this;
    },
    addHints: function () {
      var e = this;
      return r(t().mark(function n() {
        return t().wrap(function (t) {
          for (;;) switch (t.prev = t.next) {
            case 0:
              return t.next = 2, yo.call(e, e._targetElement);
            case 2:
              return t.abrupt("return", e);
            case 3:
            case "end":
              return t.stop();
          }
        }, n);
      }))();
    },
    hideHint: function (e) {
      var n = this;
      return r(t().mark(function r() {
        return t().wrap(function (t) {
          for (;;) switch (t.prev = t.next) {
            case 0:
              return t.next = 2, oo.call(n, e);
            case 2:
              return t.abrupt("return", n);
            case 3:
            case "end":
              return t.stop();
          }
        }, r);
      }))();
    },
    hideHints: function () {
      var e = this;
      return r(t().mark(function n() {
        return t().wrap(function (t) {
          for (;;) switch (t.prev = t.next) {
            case 0:
              return t.next = 2, ao.call(e);
            case 2:
              return t.abrupt("return", e);
            case 3:
            case "end":
              return t.stop();
          }
        }, n);
      }))();
    },
    showHint: function (t) {
      return lo.call(this, t), this;
    },
    showHints: function () {
      var e = this;
      return r(t().mark(function n() {
        return t().wrap(function (t) {
          for (;;) switch (t.prev = t.next) {
            case 0:
              return t.next = 2, so.call(e);
            case 2:
              return t.abrupt("return", e);
            case 3:
            case "end":
              return t.stop();
          }
        }, n);
      }))();
    },
    removeHints: function () {
      return uo.call(this), this;
    },
    removeHint: function (t) {
      return ho().call(this, t), this;
    },
    showHintDialog: function (e) {
      var n = this;
      return r(t().mark(function r() {
        return t().wrap(function (t) {
          for (;;) switch (t.prev = t.next) {
            case 0:
              return t.next = 2, mo.call(n, e);
            case 2:
              return t.abrupt("return", n);
            case 3:
            case "end":
              return t.stop();
          }
        }, r);
      }))();
    }
  }, Bo;
});

/***/ })

}]);
//# sourceMappingURL=src_app_pages_fund-switching_fund-switching_module_ts.js.map