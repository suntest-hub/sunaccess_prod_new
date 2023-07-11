"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_claim-enquiry-list_claim-enquiry-list_module_ts"],{

/***/ 15064:
/*!*******************************************************************************!*\
  !*** ./src/app/pages/claim-enquiry-list/claim-enquiry-list-routing.module.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ClaimEnquiryListPageRoutingModule": () => (/* binding */ ClaimEnquiryListPageRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _claim_enquiry_list_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./claim-enquiry-list.page */ 11296);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);




const routes = [{
  path: '',
  component: _claim_enquiry_list_page__WEBPACK_IMPORTED_MODULE_0__.ClaimEnquiryListPage
}];
class ClaimEnquiryListPageRoutingModule {}
ClaimEnquiryListPageRoutingModule.ɵfac = function ClaimEnquiryListPageRoutingModule_Factory(t) {
  return new (t || ClaimEnquiryListPageRoutingModule)();
};
ClaimEnquiryListPageRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
  type: ClaimEnquiryListPageRoutingModule
});
ClaimEnquiryListPageRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](ClaimEnquiryListPageRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
})();

/***/ }),

/***/ 67201:
/*!***********************************************************************!*\
  !*** ./src/app/pages/claim-enquiry-list/claim-enquiry-list.module.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ClaimEnquiryListPageModule": () => (/* binding */ ClaimEnquiryListPageModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _claim_enquiry_list_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./claim-enquiry-list-routing.module */ 15064);
/* harmony import */ var _claim_enquiry_list_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./claim-enquiry-list.page */ 11296);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ 38699);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);







class ClaimEnquiryListPageModule {}
ClaimEnquiryListPageModule.ɵfac = function ClaimEnquiryListPageModule_Factory(t) {
  return new (t || ClaimEnquiryListPageModule)();
};
ClaimEnquiryListPageModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
  type: ClaimEnquiryListPageModule
});
ClaimEnquiryListPageModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule, _claim_enquiry_list_routing_module__WEBPACK_IMPORTED_MODULE_0__.ClaimEnquiryListPageRoutingModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__.TranslateModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](ClaimEnquiryListPageModule, {
    declarations: [_claim_enquiry_list_page__WEBPACK_IMPORTED_MODULE_1__.ClaimEnquiryListPage],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule, _claim_enquiry_list_routing_module__WEBPACK_IMPORTED_MODULE_0__.ClaimEnquiryListPageRoutingModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__.TranslateModule]
  });
})();

/***/ }),

/***/ 11296:
/*!*********************************************************************!*\
  !*** ./src/app/pages/claim-enquiry-list/claim-enquiry-list.page.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ClaimEnquiryListPage": () => (/* binding */ ClaimEnquiryListPage)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var src_providers_utils_utils_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/providers/utils/utils.service */ 30423);
/* harmony import */ var _claimEnquiryService__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./claimEnquiryService */ 28915);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ 38699);
/* harmony import */ var src_providers_logger_service_logger_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/providers/logger-service/logger-service */ 9999);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 93819);








function ClaimEnquiryListPage_section_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "section", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "ion-spinner", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function ClaimEnquiryListPage_section_9_button_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ClaimEnquiryListPage_section_9_button_3_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r5);
      const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r4.claimEnquiry());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](2, 1, "generic_msgs.try_again"));
  }
}
function ClaimEnquiryListPage_section_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "section", 11)(1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, ClaimEnquiryListPage_section_9_button_3_Template, 3, 3, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r1.errorMsg);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r1.canTryAgain);
  }
}
function ClaimEnquiryListPage_section_10_ion_card_1_ion_label_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "ion-label", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const data_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](data_r7.lifeAssured);
  }
}
function ClaimEnquiryListPage_section_10_ion_card_1_ion_label_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "ion-label", 21);
  }
}
function ClaimEnquiryListPage_section_10_ion_card_1_ion_label_22_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "ion-label", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const data_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](data_r7.typeOfPlan);
  }
}
function ClaimEnquiryListPage_section_10_ion_card_1_ion_label_23_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "ion-label", 21);
  }
}
function ClaimEnquiryListPage_section_10_ion_card_1_ion_label_32_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "ion-label", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const data_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](data_r7.typeOfClaim);
  }
}
function ClaimEnquiryListPage_section_10_ion_card_1_ion_label_33_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "ion-label", 21);
  }
}
function ClaimEnquiryListPage_section_10_ion_card_1_ion_label_40_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "ion-label", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const data_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](data_r7.submissionDate);
  }
}
function ClaimEnquiryListPage_section_10_ion_card_1_ion_label_41_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "ion-label", 21);
  }
}
function ClaimEnquiryListPage_section_10_ion_card_1_div_43_Template(rf, ctx) {
  if (rf & 1) {
    const _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 22)(1, "button", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ClaimEnquiryListPage_section_10_ion_card_1_div_43_Template_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r24);
      const data_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
      const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r22.navToDetails(data_r7));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](3, 1, "claim_enquiry_page.details"));
  }
}
const _c0 = function (a0, a1) {
  return {
    "header-conventional": a0,
    "header-takaful": a1
  };
};
function ClaimEnquiryListPage_section_10_ion_card_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "ion-card")(1, "ion-card-header", 15)(2, "ion-label", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "ion-card-content", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](6, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "ion-row")(8, "ion-col", 18)(9, "ion-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](11, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](12, "br")(13, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](14, ClaimEnquiryListPage_section_10_ion_card_1_ion_label_14_Template, 2, 1, "ion-label", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](15, ClaimEnquiryListPage_section_10_ion_card_1_ion_label_15_Template, 1, 0, "ion-label", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "ion-col", 18)(17, "ion-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](19, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](20, "br")(21, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](22, ClaimEnquiryListPage_section_10_ion_card_1_ion_label_22_Template, 2, 1, "ion-label", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](23, ClaimEnquiryListPage_section_10_ion_card_1_ion_label_23_Template, 1, 0, "ion-label", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](24, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](25, "ion-row")(26, "ion-col", 18)(27, "ion-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](28);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](29, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](30, "br")(31, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](32, ClaimEnquiryListPage_section_10_ion_card_1_ion_label_32_Template, 2, 1, "ion-label", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](33, ClaimEnquiryListPage_section_10_ion_card_1_ion_label_33_Template, 1, 0, "ion-label", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](34, "ion-col", 18)(35, "ion-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](36);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](37, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](38, "br")(39, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](40, ClaimEnquiryListPage_section_10_ion_card_1_ion_label_40_Template, 2, 1, "ion-label", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](41, ClaimEnquiryListPage_section_10_ion_card_1_ion_label_41_Template, 1, 0, "ion-label", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](42, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](43, ClaimEnquiryListPage_section_10_ion_card_1_div_43_Template, 4, 3, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const data_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction2"](26, _c0, data_r7.typeOfPlan == "Insurance", data_r7.typeOfPlan == "Takaful"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate2"]("", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](4, 16, "claim_enquiry_page.policy_no"), " : ", data_r7.policyNumber, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](11, 18, "claim_enquiry_page.life_assured"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", data_r7.lifeAssured);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !data_r7.lifeAssured);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](19, 20, "claim_enquiry_page.type_of_plan"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", data_r7.typeOfPlan);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !data_r7.typeOfPlan);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](29, 22, "claim_enquiry_page.type_of_claim"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", data_r7.typeOfClaim);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !data_r7.typeOfClaim);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](37, 24, "claim_enquiry_page.submission_date"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", data_r7.submissionDate);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !data_r7.submissionDate);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", data_r7.encryptedEClaimSequence);
  }
}
function ClaimEnquiryListPage_section_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "section");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, ClaimEnquiryListPage_section_10_ion_card_1_Template, 44, 29, "ion-card", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r2.claimsList);
  }
}
class ClaimEnquiryListPage {
  constructor(router, utils, claimEnquiryService, translate, logger) {
    this.router = router;
    this.utils = utils;
    this.claimEnquiryService = claimEnquiryService;
    this.translate = translate;
    this.logger = logger;
    this.isShowingLoader = false;
    this.claimsList = [];
    /**
     * This method is called when the page is loaded and here we will do Service calls.
     */
    //  ionViewDidLoad() {
    //   this.logger.log('ionViewDidLoad ClaimsEnquiryListPage');
    //   this.claimEnquiry();
    // }
    /**
     * This method is used to get the Claim Enquiry List from server
     */
    this.claimEnquiry = function () {
      this.isShowingLoader = true;
      this.claimEnquiryService.claimEnquiry(this.policyNo, this.subDate).then(res => {
        try {
          this.isShowingLoader = false;
          this.claimsList = res.responseJSON.array;
          console.log('this.claimsList', this.claimsList);
          if (!(this.claimsList.length > 0)) {
            this.canTryAgain = false;
            this.errorMsg = this.translate.instant('generic_msgs.no_data');
          }
        } catch (e) {
          this.isShowingLoader = false;
          this.canTryAgain = true;
          this.logger.error("claimEnquiry catch eror : " + JSON.stringify(e));
          this.errorMsg = this.translate.instant('generic_msgs.server_err');
        }
      }, err => {
        this.isShowingLoader = false;
        this.canTryAgain = true;
        this.errorMsg = this.utils.handleServiceException(err);
      });
    };
    /**
     * Method to navigate to Claim Details Page
     */
    this.navToDetails = function (claim) {
      this.router.navigate(['/claim-details'], {
        state: {
          policyNo: claim.encryptedEClaimSequence
        }
      });
      // this.navCtrl.push(ClaimDetailsPage , {policyNo : claim.encryptedEClaimSequence});
    };

    this.utils.analytics("claimEnquiryList");
    this.policyNo = history.state.policyNumber; //this.navParams.get('policyNumber');
    this.subDate = history.state.submissionDate; //this.navParams.get('submissionDate');
  }

  ngOnInit() {
    this.logger.log('ionViewDidLoad ClaimsEnquiryListPage');
    this.claimEnquiry();
  }
}
ClaimEnquiryListPage.ɵfac = function ClaimEnquiryListPage_Factory(t) {
  return new (t || ClaimEnquiryListPage)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_providers_utils_utils_service__WEBPACK_IMPORTED_MODULE_0__.UtilService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_claimEnquiryService__WEBPACK_IMPORTED_MODULE_1__.ClaimEnquiryService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__.TranslateService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_providers_logger_service_logger_service__WEBPACK_IMPORTED_MODULE_2__.LoggerServiceProvider));
};
ClaimEnquiryListPage.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
  type: ClaimEnquiryListPage,
  selectors: [["app-claim-enquiry-list"]],
  decls: 11,
  vars: 6,
  consts: [["mode", "ios"], ["color", "primary"], ["slot", "start"], ["text", "", "icon", "chevron-back-outline", 2, "padding-left", "15px", "font-size", "0.7rem"], [1, "bold-font"], ["no-bounce", "", "padding", ""], ["class", "spinnersection", 4, "ngIf"], ["class", "errorMsgSection", 4, "ngIf"], [4, "ngIf"], [1, "spinnersection"], ["name", "ios-small"], [1, "errorMsgSection"], [3, "click", 4, "ngIf"], [3, "click"], [4, "ngFor", "ngForOf"], [1, "cardheader", 3, "ngClass"], [1, "font_size_17"], ["detail-none", "", "text-wrap", "", "no-lines", ""], [1, "ion-data"], ["class", "ion-data-content", 4, "ngIf"], ["class", "btn-algn", 4, "ngIf"], [1, "ion-data-content"], [1, "btn-algn"], ["color", "secondary", "expand", "block", 3, "click"]],
  template: function ClaimEnquiryListPage_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "ion-header", 0)(1, "ion-toolbar", 1)(2, "ion-buttons", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "ion-back-button", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "ion-title", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](6, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "ion-content", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](8, ClaimEnquiryListPage_section_8_Template, 2, 0, "section", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](9, ClaimEnquiryListPage_section_9_Template, 4, 2, "section", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](10, ClaimEnquiryListPage_section_10_Template, 2, 1, "section", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](6, 4, "claim_enquiry_page.title"), "");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.isShowingLoader);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !(ctx.claimsList.length > 0) && !ctx.isShowingLoader);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.claimsList.length > 0);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonBackButton, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonButtons, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonCard, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonCardContent, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonCardHeader, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonCol, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonContent, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonHeader, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonLabel, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonRow, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonSpinner, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonTitle, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonToolbar, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonBackButtonDelegate, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__.TranslatePipe],
  styles: [".cardheader[_ngcontent-%COMP%] {\n  padding: 0px 15px;\n}\n\n.label[_ngcontent-%COMP%] {\n  text-overflow: ellipsis;\n  white-space: pre-line;\n}\n\n.col[_ngcontent-%COMP%] {\n  width: 50%;\n  text-align: left;\n}\n\n.header-conventional[_ngcontent-%COMP%] {\n  background: var(--ion-color-secondary) !important;\n  font-family: Agenda-Regular;\n  font-size: 1.4rem;\n  color: var(--ion-color-secondary-contrast) !important;\n}\n\n.header-takaful[_ngcontent-%COMP%] {\n  background-color: #539542;\n  font-family: Agenda-Regular;\n  font-size: 1.4rem;\n  color: var(--ion-color-secondary-contrast) !important;\n}\n\n.scroll-content[_ngcontent-%COMP%] {\n  padding: 8px !important;\n}\n\n.ion-data[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%]:first-child {\n  font-family: Agenda-Regular !important;\n  font-size: 1.5rem !important;\n  color: var(--ion-color-secondary) !important;\n  font-weight: 600 !important;\n  white-space: pre-wrap !important;\n}\n\n.ion-data-content[_ngcontent-%COMP%] {\n  font-family: Agenda-Regular !important;\n  font-weight: 500;\n  font-size: 1.4rem;\n  color: #3a3a3a;\n  white-space: pre-wrap !important;\n}\n\n.card-content[_ngcontent-%COMP%] {\n  padding: 13px 8px 5px;\n}\n\n.section[_ngcontent-%COMP%] {\n  background: #aebdc3;\n  margin-bottom: 4px;\n  color: #222;\n}\n\n.card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 2px 10px 2px;\n}\n\n.btn-algn[_ngcontent-%COMP%] {\n  text-align: center;\n}\n\n.btn_center[_ngcontent-%COMP%] {\n  text-transform: capitalize;\n  background: var(--ion-color-secondary) !important;\n  color: var(--ion-color-secondary-contrast);\n  font-size: 1.4rem;\n  border-radius: 10px;\n  min-height: 34px;\n  min-width: 130px !important;\n  font-family: Agenda-Regular !important;\n}\n\n.card-md[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: var(--ion-color-secondary-contrast) !important;\n}\n\n.card-ios[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: var(--ion-color-secondary-contrast) !important;\n}\n\n.font_size_17[_ngcontent-%COMP%] {\n  font-size: 0.9rem !important;\n}\n\n.ion-data[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%]:first-child {\n  font-family: Agenda-Regular !important;\n  font-size: 0.9rem !important;\n  color: var(--ion-color-secondary) !important;\n  font-weight: 600 !important;\n  white-space: pre-wrap !important;\n}\n\n.ion-data-content[_ngcontent-%COMP%] {\n  font-family: Agenda-Regular !important;\n  font-weight: 500;\n  font-size: 0.9rem;\n  color: #3a3a3a;\n  white-space: pre-wrap !important;\n}\n\n.btn_center[_ngcontent-%COMP%] {\n  text-transform: capitalize;\n  background: var(--ion-color-secondary) !important;\n  color: var(--ion-color-secondary-contrast);\n  font-size: 0.9rem;\n  border-radius: 10px;\n  min-height: 34px;\n  min-width: 130px !important;\n  font-family: Agenda-Regular !important;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcGFnZXMvY2xhaW0tZW5xdWlyeS1saXN0L2NsYWltLWVucXVpcnktbGlzdC5wYWdlLnNjc3MiLCJ3ZWJwYWNrOi8vLi8uLi8uLi8uLi9BbGwlMjBQcm9qZWN0cy9NYWxheXNpYV9DbGllbnRBcHBfUmV2YW1wL1N1bkFjY2Vzc19Jb25pYzZfUmV2YW1wL3NyYy9hcHAvcGFnZXMvY2xhaW0tZW5xdWlyeS1saXN0L2NsYWltLWVucXVpcnktbGlzdC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0k7RUFDSSxpQkFBQTtBQ0FSOztBREVJO0VBQ0ksdUJBQUE7RUFDQSxxQkFBQTtBQ0NSOztBREVJO0VBQ0ksVUFBQTtFQUNBLGdCQUFBO0FDQ1I7O0FERUk7RUFDSyxpREFBQTtFQUNBLDJCQUFBO0VBQ0EsaUJBQUE7RUFDQSxxREFBQTtBQ0NUOztBREVJO0VBQ0kseUJBQUE7RUFDQSwyQkFBQTtFQUNBLGlCQUFBO0VBQ0EscURBQUE7QUNDUjs7QURFSTtFQUNHLHVCQUFBO0FDQ1A7O0FER0k7RUFDSSxzQ0FBQTtFQUNBLDRCQUFBO0VBQ0EsNENBQUE7RUFDQSwyQkFBQTtFQUNBLGdDQUFBO0FDQVI7O0FERUk7RUFDUSxzQ0FBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0VBQ0EsZ0NBQUE7QUNDWjs7QURDSTtFQUNJLHFCQUFBO0FDRVI7O0FEQ0k7RUFDSSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtBQ0VSOztBRENJO0VBQ0ksb0JBQUE7QUNFUjs7QURDSTtFQUNJLGtCQUFBO0FDRVI7O0FEQ0k7RUFDSSwwQkFBQTtFQUNBLGlEQUFBO0VBQ0EsMENBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSwyQkFBQTtFQUNBLHNDQUFBO0FDRVI7O0FEQ0k7RUFDSSxxREFBQTtBQ0VSOztBRENJO0VBQ0kscURBQUE7QUNFUjs7QURBQTtFQUNJLDRCQUFBO0FDR0o7O0FEREE7RUFDSSxzQ0FBQTtFQUNBLDRCQUFBO0VBQ0EsNENBQUE7RUFDQSwyQkFBQTtFQUNBLGdDQUFBO0FDSUo7O0FERkc7RUFDQyxzQ0FBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0VBQ0EsZ0NBQUE7QUNLSjs7QURIQTtFQUNJLDBCQUFBO0VBQ0EsaURBQUE7RUFDQSwwQ0FBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLDJCQUFBO0VBQ0Esc0NBQUE7QUNNSiIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4gICAgLmNhcmRoZWFkZXJ7XHJcbiAgICAgICAgcGFkZGluZzogMHB4IDE1cHg7IFxyXG4gICAgfVxyXG4gICAgLmxhYmVsIHtcclxuICAgICAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcclxuICAgICAgICB3aGl0ZS1zcGFjZTogcHJlLWxpbmU7ICBcclxuICAgIH1cclxuICAgICBcclxuICAgIC5jb2x7XHJcbiAgICAgICAgd2lkdGg6IDUwJTtcclxuICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgfSAgXHJcblxyXG4gICAgLmhlYWRlci1jb252ZW50aW9uYWx7XHJcbiAgICAgICAgIGJhY2tncm91bmQ6dmFyKC0taW9uLWNvbG9yLXNlY29uZGFyeSkgIWltcG9ydGFudDtcclxuICAgICAgICAgZm9udC1mYW1pbHk6IEFnZW5kYS1SZWd1bGFyO1xyXG4gICAgICAgICBmb250LXNpemU6IDEuNHJlbTtcclxuICAgICAgICAgY29sb3I6dmFyKC0taW9uLWNvbG9yLXNlY29uZGFyeS1jb250cmFzdCkgIWltcG9ydGFudDtcclxuICAgIH1cclxuXHJcbiAgICAuaGVhZGVyLXRha2FmdWx7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogICM1Mzk1NDI7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6IEFnZW5kYS1SZWd1bGFyO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMS40cmVtO1xyXG4gICAgICAgIGNvbG9yOnZhcigtLWlvbi1jb2xvci1zZWNvbmRhcnktY29udHJhc3QpICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC5zY3JvbGwtY29udGVudHtcclxuICAgICAgIHBhZGRpbmc6OHB4ICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC5pb24tZGF0YSBpb24tbGFiZWw6Zmlyc3QtY2hpbGR7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6IEFnZW5kYS1SZWd1bGFyICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgZm9udC1zaXplOiAxLjVyZW0gIWltcG9ydGFudDtcclxuICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXNlY29uZGFyeSkgIWltcG9ydGFudDtcclxuICAgICAgICBmb250LXdlaWdodDogNjAwICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgd2hpdGUtc3BhY2U6cHJlLXdyYXAgIWltcG9ydGFudDtcclxuICAgICAgIH1cclxuICAgIC5pb24tZGF0YS1jb250ZW50e1xyXG4gICAgICAgICAgICBmb250LWZhbWlseTogQWdlbmRhLVJlZ3VsYXIgIWltcG9ydGFudDtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxLjRyZW07XHJcbiAgICAgICAgICAgIGNvbG9yOiMzYTNhM2E7XHJcbiAgICAgICAgICAgIHdoaXRlLXNwYWNlOnByZS13cmFwICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbiAgICAuY2FyZC1jb250ZW50IHtcclxuICAgICAgICBwYWRkaW5nOiAxM3B4IDhweCA1cHg7XHJcbiAgICB9XHJcblxyXG4gICAgLnNlY3Rpb24ge1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICNhZWJkYzM7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogNHB4O1xyXG4gICAgICAgIGNvbG9yOiAgIzIyMixcclxuICAgIH1cclxuXHJcbiAgICAuY2FyZCBwIHtcclxuICAgICAgICBtYXJnaW46IDJweCAxMHB4IDJweDtcclxuICAgIH1cclxuXHJcbiAgICAuYnRuLWFsZ257XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgfVxyXG5cclxuICAgIC5idG5fY2VudGVyIHtcclxuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcclxuICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5KSAhaW1wb3J0YW50O1xyXG4gICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5LWNvbnRyYXN0KTtcclxuICAgICAgICBmb250LXNpemU6IDEuNHJlbTtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgICAgIG1pbi1oZWlnaHQ6IDM0cHg7XHJcbiAgICAgICAgbWluLXdpZHRoOiAxMzBweCAhaW1wb3J0YW50O1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiBBZ2VuZGEtUmVndWxhciAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG5cclxuICAgIC5jYXJkLW1kIHAge1xyXG4gICAgICAgIGNvbG9yOnZhcigtLWlvbi1jb2xvci1zZWNvbmRhcnktY29udHJhc3QpICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcblxyXG4gICAgLmNhcmQtaW9zIHAge1xyXG4gICAgICAgIGNvbG9yOnZhcigtLWlvbi1jb2xvci1zZWNvbmRhcnktY29udHJhc3QpICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbi5mb250X3NpemVfMTcge1xyXG4gICAgZm9udC1zaXplOiAwLjlyZW0gIWltcG9ydGFudDtcclxufVxyXG4uaW9uLWRhdGEgaW9uLWxhYmVsOmZpcnN0LWNoaWxke1xyXG4gICAgZm9udC1mYW1pbHk6IEFnZW5kYS1SZWd1bGFyICFpbXBvcnRhbnQ7XHJcbiAgICBmb250LXNpemU6IDAuOXJlbSAhaW1wb3J0YW50O1xyXG4gICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1zZWNvbmRhcnkpICFpbXBvcnRhbnQ7XHJcbiAgICBmb250LXdlaWdodDogNjAwICFpbXBvcnRhbnQ7XHJcbiAgICB3aGl0ZS1zcGFjZTpwcmUtd3JhcCAhaW1wb3J0YW50O1xyXG4gICB9XHJcbiAgIC5pb24tZGF0YS1jb250ZW50e1xyXG4gICAgZm9udC1mYW1pbHk6IEFnZW5kYS1SZWd1bGFyICFpbXBvcnRhbnQ7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgZm9udC1zaXplOiAwLjlyZW07XHJcbiAgICBjb2xvcjojM2EzYTNhO1xyXG4gICAgd2hpdGUtc3BhY2U6cHJlLXdyYXAgIWltcG9ydGFudDtcclxufVxyXG4uYnRuX2NlbnRlciB7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcclxuICAgIGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1zZWNvbmRhcnkpICFpbXBvcnRhbnQ7XHJcbiAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXNlY29uZGFyeS1jb250cmFzdCk7XHJcbiAgICBmb250LXNpemU6IDAuOXJlbTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICBtaW4taGVpZ2h0OiAzNHB4O1xyXG4gICAgbWluLXdpZHRoOiAxMzBweCAhaW1wb3J0YW50O1xyXG4gICAgZm9udC1mYW1pbHk6IEFnZW5kYS1SZWd1bGFyICFpbXBvcnRhbnQ7XHJcbn0iLCIuY2FyZGhlYWRlciB7XG4gIHBhZGRpbmc6IDBweCAxNXB4O1xufVxuXG4ubGFiZWwge1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgd2hpdGUtc3BhY2U6IHByZS1saW5lO1xufVxuXG4uY29sIHtcbiAgd2lkdGg6IDUwJTtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbn1cblxuLmhlYWRlci1jb252ZW50aW9uYWwge1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5KSAhaW1wb3J0YW50O1xuICBmb250LWZhbWlseTogQWdlbmRhLVJlZ3VsYXI7XG4gIGZvbnQtc2l6ZTogMS40cmVtO1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXNlY29uZGFyeS1jb250cmFzdCkgIWltcG9ydGFudDtcbn1cblxuLmhlYWRlci10YWthZnVsIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzUzOTU0MjtcbiAgZm9udC1mYW1pbHk6IEFnZW5kYS1SZWd1bGFyO1xuICBmb250LXNpemU6IDEuNHJlbTtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1zZWNvbmRhcnktY29udHJhc3QpICFpbXBvcnRhbnQ7XG59XG5cbi5zY3JvbGwtY29udGVudCB7XG4gIHBhZGRpbmc6IDhweCAhaW1wb3J0YW50O1xufVxuXG4uaW9uLWRhdGEgaW9uLWxhYmVsOmZpcnN0LWNoaWxkIHtcbiAgZm9udC1mYW1pbHk6IEFnZW5kYS1SZWd1bGFyICFpbXBvcnRhbnQ7XG4gIGZvbnQtc2l6ZTogMS41cmVtICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5KSAhaW1wb3J0YW50O1xuICBmb250LXdlaWdodDogNjAwICFpbXBvcnRhbnQ7XG4gIHdoaXRlLXNwYWNlOiBwcmUtd3JhcCAhaW1wb3J0YW50O1xufVxuXG4uaW9uLWRhdGEtY29udGVudCB7XG4gIGZvbnQtZmFtaWx5OiBBZ2VuZGEtUmVndWxhciAhaW1wb3J0YW50O1xuICBmb250LXdlaWdodDogNTAwO1xuICBmb250LXNpemU6IDEuNHJlbTtcbiAgY29sb3I6ICMzYTNhM2E7XG4gIHdoaXRlLXNwYWNlOiBwcmUtd3JhcCAhaW1wb3J0YW50O1xufVxuXG4uY2FyZC1jb250ZW50IHtcbiAgcGFkZGluZzogMTNweCA4cHggNXB4O1xufVxuXG4uc2VjdGlvbiB7XG4gIGJhY2tncm91bmQ6ICNhZWJkYzM7XG4gIG1hcmdpbi1ib3R0b206IDRweDtcbiAgY29sb3I6ICMyMjI7XG59XG5cbi5jYXJkIHAge1xuICBtYXJnaW46IDJweCAxMHB4IDJweDtcbn1cblxuLmJ0bi1hbGduIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uYnRuX2NlbnRlciB7XG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5KSAhaW1wb3J0YW50O1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXNlY29uZGFyeS1jb250cmFzdCk7XG4gIGZvbnQtc2l6ZTogMS40cmVtO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBtaW4taGVpZ2h0OiAzNHB4O1xuICBtaW4td2lkdGg6IDEzMHB4ICFpbXBvcnRhbnQ7XG4gIGZvbnQtZmFtaWx5OiBBZ2VuZGEtUmVndWxhciAhaW1wb3J0YW50O1xufVxuXG4uY2FyZC1tZCBwIHtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1zZWNvbmRhcnktY29udHJhc3QpICFpbXBvcnRhbnQ7XG59XG5cbi5jYXJkLWlvcyBwIHtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1zZWNvbmRhcnktY29udHJhc3QpICFpbXBvcnRhbnQ7XG59XG5cbi5mb250X3NpemVfMTcge1xuICBmb250LXNpemU6IDAuOXJlbSAhaW1wb3J0YW50O1xufVxuXG4uaW9uLWRhdGEgaW9uLWxhYmVsOmZpcnN0LWNoaWxkIHtcbiAgZm9udC1mYW1pbHk6IEFnZW5kYS1SZWd1bGFyICFpbXBvcnRhbnQ7XG4gIGZvbnQtc2l6ZTogMC45cmVtICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5KSAhaW1wb3J0YW50O1xuICBmb250LXdlaWdodDogNjAwICFpbXBvcnRhbnQ7XG4gIHdoaXRlLXNwYWNlOiBwcmUtd3JhcCAhaW1wb3J0YW50O1xufVxuXG4uaW9uLWRhdGEtY29udGVudCB7XG4gIGZvbnQtZmFtaWx5OiBBZ2VuZGEtUmVndWxhciAhaW1wb3J0YW50O1xuICBmb250LXdlaWdodDogNTAwO1xuICBmb250LXNpemU6IDAuOXJlbTtcbiAgY29sb3I6ICMzYTNhM2E7XG4gIHdoaXRlLXNwYWNlOiBwcmUtd3JhcCAhaW1wb3J0YW50O1xufVxuXG4uYnRuX2NlbnRlciB7XG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5KSAhaW1wb3J0YW50O1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXNlY29uZGFyeS1jb250cmFzdCk7XG4gIGZvbnQtc2l6ZTogMC45cmVtO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBtaW4taGVpZ2h0OiAzNHB4O1xuICBtaW4td2lkdGg6IDEzMHB4ICFpbXBvcnRhbnQ7XG4gIGZvbnQtZmFtaWx5OiBBZ2VuZGEtUmVndWxhciAhaW1wb3J0YW50O1xufSJdLCJzb3VyY2VSb290IjoiIn0= */"]
});

/***/ })

}]);
//# sourceMappingURL=src_app_pages_claim-enquiry-list_claim-enquiry-list_module_ts.js.map