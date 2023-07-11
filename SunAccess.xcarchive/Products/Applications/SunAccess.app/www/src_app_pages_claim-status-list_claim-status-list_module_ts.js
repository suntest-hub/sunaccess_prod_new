"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_claim-status-list_claim-status-list_module_ts"],{

/***/ 27928:
/*!*****************************************************************************!*\
  !*** ./src/app/pages/claim-status-list/claim-status-list-routing.module.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ClaimStatusListPageRoutingModule": () => (/* binding */ ClaimStatusListPageRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _claim_status_list_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./claim-status-list.page */ 51383);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);




const routes = [{
  path: '',
  component: _claim_status_list_page__WEBPACK_IMPORTED_MODULE_0__.ClaimStatusListPage
}];
class ClaimStatusListPageRoutingModule {}
ClaimStatusListPageRoutingModule.ɵfac = function ClaimStatusListPageRoutingModule_Factory(t) {
  return new (t || ClaimStatusListPageRoutingModule)();
};
ClaimStatusListPageRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
  type: ClaimStatusListPageRoutingModule
});
ClaimStatusListPageRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](ClaimStatusListPageRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
})();

/***/ }),

/***/ 93123:
/*!*********************************************************************!*\
  !*** ./src/app/pages/claim-status-list/claim-status-list.module.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ClaimStatusListPageModule": () => (/* binding */ ClaimStatusListPageModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _claim_status_list_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./claim-status-list-routing.module */ 27928);
/* harmony import */ var _claim_status_list_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./claim-status-list.page */ 51383);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ 38699);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);







class ClaimStatusListPageModule {}
ClaimStatusListPageModule.ɵfac = function ClaimStatusListPageModule_Factory(t) {
  return new (t || ClaimStatusListPageModule)();
};
ClaimStatusListPageModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
  type: ClaimStatusListPageModule
});
ClaimStatusListPageModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule, _claim_status_list_routing_module__WEBPACK_IMPORTED_MODULE_0__.ClaimStatusListPageRoutingModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__.TranslateModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](ClaimStatusListPageModule, {
    declarations: [_claim_status_list_page__WEBPACK_IMPORTED_MODULE_1__.ClaimStatusListPage],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule, _claim_status_list_routing_module__WEBPACK_IMPORTED_MODULE_0__.ClaimStatusListPageRoutingModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__.TranslateModule]
  });
})();

/***/ }),

/***/ 51383:
/*!*******************************************************************!*\
  !*** ./src/app/pages/claim-status-list/claim-status-list.page.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ClaimStatusListPage": () => (/* binding */ ClaimStatusListPage)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var src_providers_utils_utils_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/providers/utils/utils.service */ 30423);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ 38699);
/* harmony import */ var src_providers_logger_service_logger_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/providers/logger-service/logger-service */ 9999);
/* harmony import */ var _claim_status_claimStatusService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../claim-status/claimStatusService */ 45324);
/* harmony import */ var src_providers_utils_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/providers/utils/config */ 43485);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 93819);









function ClaimStatusListPage_section_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "section", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "ion-spinner", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
function ClaimStatusListPage_section_9_button_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ClaimStatusListPage_section_9_button_3_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r5);
      const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r4.getClaimsSummaryData());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](2, 1, "generic_msgs.try_again"));
  }
}
function ClaimStatusListPage_section_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "section", 11)(1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](3, ClaimStatusListPage_section_9_button_3_Template, 3, 3, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r1.errorMsg);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r1.canTryAgain);
  }
}
function ClaimStatusListPage_div_10_ng_container_1_ion_card_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "ion-card", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ClaimStatusListPage_div_10_ng_container_1_ion_card_1_Template_ion_card_click_0_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r14);
      const claim_r12 = restoredCtx.$implicit;
      const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r13.goToClaimDetail(claim_r12.encryptedPolicyNumber, claim_r12.typeOfClaim, claim_r12.noOfClaim));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "ion-card-header", 21)(2, "ion-row", 22)(3, "ion-col", 23)(4, "ion-label", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5, "Policy Number");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "ion-col", 25)(7, "ion-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8, ":");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "ion-col", 26)(10, "ion-label", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "ion-card-content", 28)(13, "ion-row")(14, "ion-col", 29)(15, "ion-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](16, "Type Of Claim");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](17, "ion-col", 25)(18, "ion-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](19, ":");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](20, "ion-col", 26)(21, "ion-label", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](23, "ion-row")(24, "ion-col", 29)(25, "ion-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](26, "Submission Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](27, "ion-col", 25)(28, "ion-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](29, ":");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](30, "ion-col", 26)(31, "ion-label", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](32);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](33, "ion-row")(34, "ion-col", 29)(35, "ion-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](36, "Status");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](37, "ion-col", 25)(38, "ion-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](39, ":");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](40, "ion-col", 26)(41, "ion-label", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](42);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](43, "ion-row")(44, "ion-col", 29)(45, "ion-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](46, "Remarks");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](47, "ion-col", 25)(48, "ion-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](49, ":");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](50, "ion-col", 26)(51, "ion-label", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](52);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()();
  }
  if (rf & 2) {
    const claim_r12 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](claim_r12.policyNumber);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](claim_r12.typeOfClaim);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](claim_r12.submissionDate);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](claim_r12.claimStatus);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("", claim_r12.remarks, " ");
  }
}
function ClaimStatusListPage_div_10_ng_container_1_ion_infinite_scroll_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "ion-infinite-scroll", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ionInfinite", function ClaimStatusListPage_div_10_ng_container_1_ion_infinite_scroll_2_Template_ion_infinite_scroll_ionInfinite_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r16);
      const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r15.getMoreClaimsSummary($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "ion-infinite-scroll-content");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
function ClaimStatusListPage_div_10_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, ClaimStatusListPage_div_10_ng_container_1_ion_card_1_Template, 53, 5, "ion-card", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, ClaimStatusListPage_div_10_ng_container_1_ion_infinite_scroll_2_Template, 2, 0, "ion-infinite-scroll", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r6.claimsData);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r6.isMoreRecordsAvailable);
  }
}
function ClaimStatusListPage_div_10_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div")(1, "ion-row", 16)(2, "ion-label", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("* Claim status shown here are from ", ctx_r7.claimsDate, " onwards");
  }
}
function ClaimStatusListPage_div_10_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "ion-row", 16)(1, "ion-label", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "p", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4, "Please contact us at ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "a", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6, "1300-88-5055");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](7, " or email ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "a", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](9, "wecare@sunlifemalaysia.com");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](10, " for further enquiries.");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("* No claims submitted since ", ctx_r9.claimsDate, ". ");
  }
}
function ClaimStatusListPage_div_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, ClaimStatusListPage_div_10_ng_container_1_Template, 3, 2, "ng-container", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, ClaimStatusListPage_div_10_div_2_Template, 4, 1, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](3, ClaimStatusListPage_div_10_ng_template_3_Template, 11, 1, "ng-template", null, 15, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "ion-row", 16)(6, "ion-label", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "a", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ClaimStatusListPage_div_10_Template_a_click_8_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r18);
      const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r17.goToPaymentRecords());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "u")(10, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](11, "here");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()()();
  }
  if (rf & 2) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](4);
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r2.claimsData.length > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r2.claimsData.length > 0)("ngIfElse", _r8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("* To view claims submitted before ", ctx_r2.claimsDate, " please click ");
  }
}
class ClaimStatusListPage {
  constructor(router, utils, translate, logger, claimStatusService, config) {
    this.router = router;
    this.utils = utils;
    this.translate = translate;
    this.logger = logger;
    this.claimStatusService = claimStatusService;
    this.config = config;
    this.totalPage = 2;
    this.totalRecords = 0;
    this.pageNumber = 0;
    this.pageSize = 10;
    this.recordsFetched = 0;
    this.isMoreRecordsAvailable = true;
    this.isDataLoading = true;
    this.canTryAgain = false;
    // claimsData = [
    //   {
    //     policyNumber: "M3773784",
    //     typeOfClaim: "Hospitalisation",
    //     submissionDate: "12-06-2022",
    //     status: "Approved",
    //     remarks: "RM 800 will be credited in 3 to 5 working days from approval date. Please contact us at 1300 88 5055 or email wecare@sunlifemalaysia.com for further enquires."
    //   },
    //   {
    //     policyNumber: "T7488494",
    //     typeOfClaim: "Hospitalisation",
    //     submissionDate: "07-05-2022",
    //     status: "Declined",
    //     remarks: "Outpatient treatment not due to accident."
    //   },
    //   {
    //     policyNumber: "L3898292",
    //     typeOfClaim: "Hospitalisation",
    //     submissionDate: "09-04-2022",
    //     status: "Closed",
    //     remarks: "Customer not responded since 20-03-2022"
    //   }
    // ]
    this.claimsData = [];
  }
  ngOnInit() {
    console.log('ionViewDidLoad ClaimStatusListPage');
    this.claimsDate = this.config.claimsData.date;
    this.getClaimsSummaryData();
  }
  // ionViewDidLoad() {
  // }
  getClaimsSummaryData() {
    this.isDataLoading = true;
    this.pageNumber = 1;
    this.getClaimsSummary("");
  }
  /**
   * This method will redirect to Claim payments recods page
   */
  goToPaymentRecords() {
    this.router.navigate(['/claim-status']);
    // this.navCtrl.push(ClaimStatusPage);
  }
  /**
   * This method will redirect to Claim Status Detail Page
   */
  goToClaimDetail(encryptedPolicyNumber, claimType, numberOfClaim) {
    this.router.navigate(['/claim-status-details'], {
      state: {
        encryptedPolicyNumber: encryptedPolicyNumber,
        claimType: claimType,
        noOfClaim: numberOfClaim
      }
    });
    // this.navCtrl.push(ClaimStatusDetailPage, {encryptedPolicyNumber: encryptedPolicyNumber, claimType: claimType, noOfClaim: numberOfClaim});
  }
  /**
   * This method will fetch the more claims summary data for user from server
   * @param event ion-infinte-scroll event
   */
  getMoreClaimsSummary(event) {
    this.pageNumber++;
    if (this.pageNumber <= this.totalPage) {
      this.getClaimsSummary(event);
    } else {
      event.complete();
      this.isMoreRecordsAvailable = false;
    }
  }
  /**
   * This method will fetch the claims summary records for user from server
   * @param event Ion infinite scroll event
   */
  getClaimsSummary(event) {
    if (this.utils.isDeviceOnLine()) {
      this.claimStatusService.getClaimsSummary(this.pageSize, this.pageNumber).then(res => {
        if (this.pageNumber == 1) {
          this.totalRecords = res['responseJSON']['totalRecords'];
          this.totalPage = Math.ceil(this.totalRecords / this.pageSize);
        }
        let responseSummary = res['responseJSON']['summaryDetails'];
        if (responseSummary != null) {
          this.recordsFetched = this.recordsFetched + responseSummary.length;
          if (this.recordsFetched == this.totalRecords) {
            this.isMoreRecordsAvailable = false;
          }
          this.claimsData = [...this.claimsData, ...responseSummary];
        } else {
          this.isMoreRecordsAvailable = false;
        }
        this.isDataLoading = false;
        this.canTryAgain = false;
        if (event != "") {
          event.complete();
        }
      }, error => {
        if (event != "") {
          event.complete();
        }
        this.isDataLoading = false;
        this.canTryAgain = true;
        this.logger.error("Claim status--search policy by policynumber servcie catch eror : " + JSON.stringify(error));
        this.errorMsg = this.utils.handleServiceException(error);
      });
    } else {
      if (event != "") {
        event.complete();
      }
      this.claimsData = [];
      this.pageNumber = 0;
      this.isDataLoading = false;
      this.canTryAgain = true;
      this.errorMsg = this.translate.instant('generic_msgs.network_err');
    }
  }
}
ClaimStatusListPage.ɵfac = function ClaimStatusListPage_Factory(t) {
  return new (t || ClaimStatusListPage)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_providers_utils_utils_service__WEBPACK_IMPORTED_MODULE_0__.UtilService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__.TranslateService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_providers_logger_service_logger_service__WEBPACK_IMPORTED_MODULE_1__.LoggerServiceProvider), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_claim_status_claimStatusService__WEBPACK_IMPORTED_MODULE_2__.ClaimStatusService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_providers_utils_config__WEBPACK_IMPORTED_MODULE_3__.ConfigProvider));
};
ClaimStatusListPage.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
  type: ClaimStatusListPage,
  selectors: [["app-claim-status-list"]],
  decls: 11,
  vars: 6,
  consts: [["mode", "ios"], ["color", "primary"], ["slot", "start"], ["text", "", "icon", "chevron-back-outline", 2, "padding-left", "15px", "font-size", "0.7rem"], [1, "bold-font"], ["padding", ""], ["class", "spinnersection", 4, "ngIf"], ["class", "errorMsgSection", 4, "ngIf"], [4, "ngIf"], [1, "spinnersection"], ["name", "ios-small"], [1, "errorMsgSection"], [3, "click", 4, "ngIf"], [3, "click"], [4, "ngIf", "ngIfElse"], ["noClaimDataTemplate", ""], [1, "row-margin"], ["text-wrap", "", 1, "label-margin", "font_size_17"], [2, "color", "#3880ff"], [3, "click", 4, "ngFor", "ngForOf"], [3, "ionInfinite", 4, "ngIf"], [1, "cardheader", "header-conventional"], [1, "section"], ["size", "5"], [1, "section-title"], ["size", "1"], ["size", "6"], [1, "section-content"], ["detail-none", "", "text-wrap", "", "no-lines", "", 1, "light-background"], ["size", "5", 1, "ion-data"], [1, "ion-data-content"], [1, "remarks-data-content"], [3, "ionInfinite"], [1, "contact-us"], ["href", "tel:1300-88-5055"], ["href", "mailto:wecare@sunlifemalaysia.com"]],
  template: function ClaimStatusListPage_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "ion-header", 0)(1, "ion-toolbar", 1)(2, "ion-buttons", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](3, "ion-back-button", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "ion-title", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](6, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "ion-content", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](8, ClaimStatusListPage_section_8_Template, 2, 0, "section", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](9, ClaimStatusListPage_section_9_Template, 4, 2, "section", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](10, ClaimStatusListPage_div_10_Template, 12, 4, "div", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](6, 4, "claim_status.title"));
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.isDataLoading);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !(ctx.claimsData.length > 0) && !ctx.isDataLoading && ctx.canTryAgain);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx.isDataLoading);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonBackButton, _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonButtons, _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonCard, _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonCardContent, _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonCardHeader, _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonCol, _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonContent, _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonHeader, _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonInfiniteScroll, _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonInfiniteScrollContent, _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonLabel, _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonRow, _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonSpinner, _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonTitle, _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonToolbar, _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonBackButtonDelegate, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__.TranslatePipe],
  styles: [".light-background[_ngcontent-%COMP%] {\n  background-color: #f4f4f4;\n}\n\n.cardheader[_ngcontent-%COMP%] {\n  padding: 13px 8px 5px;\n}\n\n.label[_ngcontent-%COMP%] {\n  margin: 1px 1px 1px 0;\n}\n\n.col[_ngcontent-%COMP%] {\n  width: 50%;\n  text-align: left;\n}\n\n.header-conventional[_ngcontent-%COMP%], .header-conventional[_ngcontent-%COMP%]   .section[_ngcontent-%COMP%] {\n  background: var(--ion-color-secondary) !important;\n}\n\n.header-takaful[_ngcontent-%COMP%], .header-takaful[_ngcontent-%COMP%]   .section[_ngcontent-%COMP%] {\n  background: #539542 !important;\n}\n\n.scroll-content[_ngcontent-%COMP%] {\n  padding: 8px !important;\n}\n\n.ion-data[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%]:first-child {\n  font-family: Agenda-Regular !important;\n  font-size: 1.5rem !important;\n  color: var(--ion-color-secondary) !important;\n  font-weight: 600 !important;\n  white-space: pre-wrap !important;\n}\n\n.ion-data-content[_ngcontent-%COMP%] {\n  font-family: Agenda-Regular !important;\n  font-weight: 500;\n  font-size: 1.4rem;\n  color: #3a3a3a;\n  white-space: pre-wrap !important;\n}\n\n.card-content[_ngcontent-%COMP%] {\n  padding: 13px 8px 5px;\n}\n\n.remarks-data-content[_ngcontent-%COMP%] {\n  font-family: Agenda-Regular !important;\n  font-weight: 500;\n  font-size: 1.4rem;\n  color: #3a3a3a;\n}\n\n.section[_ngcontent-%COMP%] {\n  color: white;\n  transition: none !important;\n  -webkit-tap-highlight-color: none !important;\n}\n\n.section[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 1.4rem;\n  margin: 0px;\n  color: white;\n  font-family: Agenda-Regular;\n}\n\n.section[_ngcontent-%COMP%]   .section-title[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n  font-weight: 600 !important;\n  margin: 0px;\n  color: white;\n  font-family: Agenda-Regular;\n}\n.section[_ngcontent-%COMP%]   .section-content[_ngcontent-%COMP%] {\n  font-size: 1.4rem;\n  font-weight: 500 !important;\n  margin: 0px;\n  color: white;\n  font-family: Agenda-Regular;\n}\n\n.row-margin[_ngcontent-%COMP%] {\n  margin: 10px;\n}\n\n.contact-us[_ngcontent-%COMP%] {\n  margin: 0 !important;\n  display: inline;\n}\n\n.font_size_17[_ngcontent-%COMP%] {\n  font-size: 1rem !important;\n}\n\na[_ngcontent-%COMP%] {\n  background-color: transparent !important;\n  color: #3880ff !important;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcGFnZXMvY2xhaW0tc3RhdHVzLWxpc3QvY2xhaW0tc3RhdHVzLWxpc3QucGFnZS5zY3NzIiwid2VicGFjazovLy4vLi4vLi4vLi4vQWxsJTIwUHJvamVjdHMvTWFsYXlzaWFfQ2xpZW50QXBwX1JldmFtcC9TdW5BY2Nlc3NfSW9uaWM2X1JldmFtcC9zcmMvYXBwL3BhZ2VzL2NsYWltLXN0YXR1cy1saXN0L2NsYWltLXN0YXR1cy1saXN0LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFSTtFQUNJLHlCQUFBO0FDRFI7O0FESUk7RUFDSSxxQkFBQTtBQ0RSOztBRElJO0VBQ0kscUJBQUE7QUNEUjs7QURJSTtFQUNJLFVBQUE7RUFDQSxnQkFBQTtBQ0RSOztBRElJO0VBQ0ksaURBQUE7QUNEUjs7QURJSTtFQUNJLDhCQUFBO0FDRFI7O0FESUk7RUFDRyx1QkFBQTtBQ0RQOztBREtJO0VBQ0ksc0NBQUE7RUFDQSw0QkFBQTtFQUNBLDRDQUFBO0VBQ0EsMkJBQUE7RUFDQSxnQ0FBQTtBQ0ZSOztBRElJO0VBQ1Esc0NBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLGdDQUFBO0FDRFo7O0FER0k7RUFDSSxxQkFBQTtBQ0FSOztBREdJO0VBQ0ksc0NBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtBQ0FSOztBREdJO0VBQ0ksWUFBQTtFQUNBLDJCQUFBO0VBQ0EsNENBQUE7QUNBUjs7QURFSTtFQUNJLGlCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSwyQkFBQTtBQ0NSOztBREdRO0VBQ0ksaUJBQUE7RUFDQSwyQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsMkJBQUE7QUNBWjtBREdRO0VBQ0ksaUJBQUE7RUFDQSwyQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsMkJBQUE7QUNEWjs7QURNSTtFQUNJLFlBQUE7QUNIUjs7QURNSTtFQUNJLG9CQUFBO0VBQ0EsZUFBQTtBQ0hSOztBRE1JO0VBQ0ksMEJBQUE7QUNIUjs7QURLSTtFQUNJLHdDQUFBO0VBQ0EseUJBQUE7QUNGUiIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5cclxuICAgIC5saWdodC1iYWNrZ3JvdW5kIHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjRmNGY0O1xyXG4gICAgfVxyXG5cclxuICAgIC5jYXJkaGVhZGVyeyBcclxuICAgICAgICBwYWRkaW5nOiAxM3B4IDhweCA1cHg7XHJcbiAgICB9XHJcblxyXG4gICAgLmxhYmVsIHtcclxuICAgICAgICBtYXJnaW46IDFweCAxcHggMXB4IDA7XHJcbiAgICB9XHJcbiAgICAgXHJcbiAgICAuY29se1xyXG4gICAgICAgIHdpZHRoOiA1MCU7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgIH0gIFxyXG5cclxuICAgIC5oZWFkZXItY29udmVudGlvbmFsLCAuaGVhZGVyLWNvbnZlbnRpb25hbCAuc2VjdGlvbntcclxuICAgICAgICBiYWNrZ3JvdW5kOiAgdmFyKC0taW9uLWNvbG9yLXNlY29uZGFyeSkgIWltcG9ydGFudDtcclxuICAgIH1cclxuXHJcbiAgICAuaGVhZGVyLXRha2FmdWwsLmhlYWRlci10YWthZnVsIC5zZWN0aW9ue1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICAjNTM5NTQyICAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAuc2Nyb2xsLWNvbnRlbnR7XHJcbiAgICAgICBwYWRkaW5nOjhweCAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICAuaW9uLWRhdGEgaW9uLWxhYmVsOmZpcnN0LWNoaWxke1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiBBZ2VuZGEtUmVndWxhciAhaW1wb3J0YW50O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMS41cmVtICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgY29sb3I6ICB2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5KSAhaW1wb3J0YW50O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDAgIWltcG9ydGFudDtcclxuICAgICAgICB3aGl0ZS1zcGFjZTpwcmUtd3JhcCAhaW1wb3J0YW50O1xyXG4gICAgICAgfVxyXG4gICAgLmlvbi1kYXRhLWNvbnRlbnR7XHJcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBBZ2VuZGEtUmVndWxhciAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDEuNHJlbTtcclxuICAgICAgICAgICAgY29sb3I6IzNhM2EzYTtcclxuICAgICAgICAgICAgd2hpdGUtc3BhY2U6cHJlLXdyYXAgIWltcG9ydGFudDtcclxuICAgIH1cclxuICAgIC5jYXJkLWNvbnRlbnQge1xyXG4gICAgICAgIHBhZGRpbmc6IDEzcHggOHB4IDVweDtcclxuICAgIH1cclxuXHJcbiAgICAucmVtYXJrcy1kYXRhLWNvbnRlbnQge1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiBBZ2VuZGEtUmVndWxhciAhaW1wb3J0YW50O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICAgICAgZm9udC1zaXplOiAxLjRyZW07XHJcbiAgICAgICAgY29sb3I6IzNhM2EzYTtcclxuICAgIH1cclxuXHJcbiAgICAuc2VjdGlvbiB7XHJcbiAgICAgICAgY29sb3I6ICB3aGl0ZTtcclxuICAgICAgICB0cmFuc2l0aW9uIDogbm9uZSAhaW1wb3J0YW50O1xyXG4gICAgICAgIC13ZWJraXQtdGFwLWhpZ2hsaWdodC1jb2xvcjogbm9uZSAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG4gICAgLnNlY3Rpb24gcHtcclxuICAgICAgICBmb250LXNpemUgOiAxLjRyZW07XHJcbiAgICAgICAgbWFyZ2luOiAwcHg7XHJcbiAgICAgICAgY29sb3I6ICB3aGl0ZTtcclxuICAgICAgICBmb250LWZhbWlseTogQWdlbmRhLVJlZ3VsYXI7XHJcbiAgICB9XHJcblxyXG4gICAgLnNlY3Rpb24ge1xyXG4gICAgICAgIC5zZWN0aW9uLXRpdGxlIHtcclxuICAgICAgICAgICAgZm9udC1zaXplIDogMS41cmVtO1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogNjAwICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgIG1hcmdpbjogMHB4O1xyXG4gICAgICAgICAgICBjb2xvcjogIHdoaXRlO1xyXG4gICAgICAgICAgICBmb250LWZhbWlseTogQWdlbmRhLVJlZ3VsYXI7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuc2VjdGlvbi1jb250ZW50IHtcclxuICAgICAgICAgICAgZm9udC1zaXplIDogMS40cmVtO1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogNTAwICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgIG1hcmdpbjogMHB4O1xyXG4gICAgICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBBZ2VuZGEtUmVndWxhcjtcclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG5cclxuICAgIC5yb3ctbWFyZ2luIHtcclxuICAgICAgICBtYXJnaW46IDEwcHg7XHJcbiAgICB9XHJcblxyXG4gICAgLmNvbnRhY3QtdXMge1xyXG4gICAgICAgIG1hcmdpbjogMCAhaW1wb3J0YW50O1xyXG4gICAgICAgIGRpc3BsYXk6IGlubGluZTtcclxuICAgIH1cclxuXHJcbiAgICAuZm9udF9zaXplXzE3IHtcclxuICAgICAgICBmb250LXNpemU6IDFyZW0gIWltcG9ydGFudDtcclxuICAgIH1cclxuICAgIGEge1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgY29sb3I6ICMzODgwZmYgIWltcG9ydGFudDtcclxuICAgIH0iLCIubGlnaHQtYmFja2dyb3VuZCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmNGY0ZjQ7XG59XG5cbi5jYXJkaGVhZGVyIHtcbiAgcGFkZGluZzogMTNweCA4cHggNXB4O1xufVxuXG4ubGFiZWwge1xuICBtYXJnaW46IDFweCAxcHggMXB4IDA7XG59XG5cbi5jb2wge1xuICB3aWR0aDogNTAlO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xufVxuXG4uaGVhZGVyLWNvbnZlbnRpb25hbCwgLmhlYWRlci1jb252ZW50aW9uYWwgLnNlY3Rpb24ge1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5KSAhaW1wb3J0YW50O1xufVxuXG4uaGVhZGVyLXRha2FmdWwsIC5oZWFkZXItdGFrYWZ1bCAuc2VjdGlvbiB7XG4gIGJhY2tncm91bmQ6ICM1Mzk1NDIgIWltcG9ydGFudDtcbn1cblxuLnNjcm9sbC1jb250ZW50IHtcbiAgcGFkZGluZzogOHB4ICFpbXBvcnRhbnQ7XG59XG5cbi5pb24tZGF0YSBpb24tbGFiZWw6Zmlyc3QtY2hpbGQge1xuICBmb250LWZhbWlseTogQWdlbmRhLVJlZ3VsYXIgIWltcG9ydGFudDtcbiAgZm9udC1zaXplOiAxLjVyZW0gIWltcG9ydGFudDtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1zZWNvbmRhcnkpICFpbXBvcnRhbnQ7XG4gIGZvbnQtd2VpZ2h0OiA2MDAgIWltcG9ydGFudDtcbiAgd2hpdGUtc3BhY2U6IHByZS13cmFwICFpbXBvcnRhbnQ7XG59XG5cbi5pb24tZGF0YS1jb250ZW50IHtcbiAgZm9udC1mYW1pbHk6IEFnZW5kYS1SZWd1bGFyICFpbXBvcnRhbnQ7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGZvbnQtc2l6ZTogMS40cmVtO1xuICBjb2xvcjogIzNhM2EzYTtcbiAgd2hpdGUtc3BhY2U6IHByZS13cmFwICFpbXBvcnRhbnQ7XG59XG5cbi5jYXJkLWNvbnRlbnQge1xuICBwYWRkaW5nOiAxM3B4IDhweCA1cHg7XG59XG5cbi5yZW1hcmtzLWRhdGEtY29udGVudCB7XG4gIGZvbnQtZmFtaWx5OiBBZ2VuZGEtUmVndWxhciAhaW1wb3J0YW50O1xuICBmb250LXdlaWdodDogNTAwO1xuICBmb250LXNpemU6IDEuNHJlbTtcbiAgY29sb3I6ICMzYTNhM2E7XG59XG5cbi5zZWN0aW9uIHtcbiAgY29sb3I6IHdoaXRlO1xuICB0cmFuc2l0aW9uOiBub25lICFpbXBvcnRhbnQ7XG4gIC13ZWJraXQtdGFwLWhpZ2hsaWdodC1jb2xvcjogbm9uZSAhaW1wb3J0YW50O1xufVxuXG4uc2VjdGlvbiBwIHtcbiAgZm9udC1zaXplOiAxLjRyZW07XG4gIG1hcmdpbjogMHB4O1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtZmFtaWx5OiBBZ2VuZGEtUmVndWxhcjtcbn1cblxuLnNlY3Rpb24gLnNlY3Rpb24tdGl0bGUge1xuICBmb250LXNpemU6IDEuNXJlbTtcbiAgZm9udC13ZWlnaHQ6IDYwMCAhaW1wb3J0YW50O1xuICBtYXJnaW46IDBweDtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LWZhbWlseTogQWdlbmRhLVJlZ3VsYXI7XG59XG4uc2VjdGlvbiAuc2VjdGlvbi1jb250ZW50IHtcbiAgZm9udC1zaXplOiAxLjRyZW07XG4gIGZvbnQtd2VpZ2h0OiA1MDAgIWltcG9ydGFudDtcbiAgbWFyZ2luOiAwcHg7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC1mYW1pbHk6IEFnZW5kYS1SZWd1bGFyO1xufVxuXG4ucm93LW1hcmdpbiB7XG4gIG1hcmdpbjogMTBweDtcbn1cblxuLmNvbnRhY3QtdXMge1xuICBtYXJnaW46IDAgIWltcG9ydGFudDtcbiAgZGlzcGxheTogaW5saW5lO1xufVxuXG4uZm9udF9zaXplXzE3IHtcbiAgZm9udC1zaXplOiAxcmVtICFpbXBvcnRhbnQ7XG59XG5cbmEge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xuICBjb2xvcjogIzM4ODBmZiAhaW1wb3J0YW50O1xufSJdLCJzb3VyY2VSb290IjoiIn0= */"]
});

/***/ })

}]);
//# sourceMappingURL=src_app_pages_claim-status-list_claim-status-list_module_ts.js.map