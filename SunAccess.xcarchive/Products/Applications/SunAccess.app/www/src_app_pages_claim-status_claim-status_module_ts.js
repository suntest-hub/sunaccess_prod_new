"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_claim-status_claim-status_module_ts"],{

/***/ 15648:
/*!*******************************************************************!*\
  !*** ./src/app/pages/claim-status/claim-status-routing.module.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ClaimStatusPageRoutingModule": () => (/* binding */ ClaimStatusPageRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _claim_status_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./claim-status.page */ 27173);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);




const routes = [{
  path: '',
  component: _claim_status_page__WEBPACK_IMPORTED_MODULE_0__.ClaimStatusPage
}];
class ClaimStatusPageRoutingModule {}
ClaimStatusPageRoutingModule.ɵfac = function ClaimStatusPageRoutingModule_Factory(t) {
  return new (t || ClaimStatusPageRoutingModule)();
};
ClaimStatusPageRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
  type: ClaimStatusPageRoutingModule
});
ClaimStatusPageRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](ClaimStatusPageRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
})();

/***/ }),

/***/ 46746:
/*!***********************************************************!*\
  !*** ./src/app/pages/claim-status/claim-status.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ClaimStatusPageModule": () => (/* binding */ ClaimStatusPageModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _claim_status_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./claim-status-routing.module */ 15648);
/* harmony import */ var _claim_status_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./claim-status.page */ 27173);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ 38699);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);







class ClaimStatusPageModule {}
ClaimStatusPageModule.ɵfac = function ClaimStatusPageModule_Factory(t) {
  return new (t || ClaimStatusPageModule)();
};
ClaimStatusPageModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
  type: ClaimStatusPageModule
});
ClaimStatusPageModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule, _claim_status_routing_module__WEBPACK_IMPORTED_MODULE_0__.ClaimStatusPageRoutingModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__.TranslateModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](ClaimStatusPageModule, {
    declarations: [_claim_status_page__WEBPACK_IMPORTED_MODULE_1__.ClaimStatusPage],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule, _claim_status_routing_module__WEBPACK_IMPORTED_MODULE_0__.ClaimStatusPageRoutingModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__.TranslateModule]
  });
})();

/***/ }),

/***/ 27173:
/*!*********************************************************!*\
  !*** ./src/app/pages/claim-status/claim-status.page.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ClaimStatusPage": () => (/* binding */ ClaimStatusPage)
/* harmony export */ });
/* harmony import */ var http_status_codes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! http-status-codes */ 92788);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var src_providers_logger_service_logger_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/providers/logger-service/logger-service */ 9999);
/* harmony import */ var src_providers_utils_utils_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/providers/utils/utils.service */ 30423);
/* harmony import */ var _claimStatusService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./claimStatusService */ 45324);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ 38699);
/* harmony import */ var src_providers_utils_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/providers/utils/config */ 43485);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 93819);









function ClaimStatusPage_section_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "section", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "ion-spinner", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
function ClaimStatusPage_section_9_button_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ClaimStatusPage_section_9_button_3_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r5);
      const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r4.getClaimStatus());
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
function ClaimStatusPage_section_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "section", 11)(1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](3, ClaimStatusPage_section_9_button_3_Template, 3, 3, "button", 12);
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
function ClaimStatusPage_div_10_div_1_div_7_ion_label_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "ion-label", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const data_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](data_r7.claimsType);
  }
}
function ClaimStatusPage_div_10_div_1_div_7_ion_label_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "ion-label", 23);
  }
}
function ClaimStatusPage_div_10_div_1_div_7_ion_label_22_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "ion-label", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const data_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](data_r7.personCovered);
  }
}
function ClaimStatusPage_div_10_div_1_div_7_ion_label_23_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "ion-label", 23);
  }
}
function ClaimStatusPage_div_10_div_1_div_7_ion_label_29_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "ion-label", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const data_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](data_r7.claimsStatus);
  }
}
function ClaimStatusPage_div_10_div_1_div_7_ion_label_30_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "ion-label", 23);
  }
}
function ClaimStatusPage_div_10_div_1_div_7_ion_label_37_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "ion-label", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const data_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](data_r7.amount);
  }
}
function ClaimStatusPage_div_10_div_1_div_7_ion_label_38_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "ion-label", 23);
  }
}
function ClaimStatusPage_div_10_div_1_div_7_ion_label_44_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "ion-label", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const data_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](data_r7.dateOfPayment);
  }
}
function ClaimStatusPage_div_10_div_1_div_7_ion_label_45_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "ion-label", 23);
  }
}
function ClaimStatusPage_div_10_div_1_div_7_ion_label_52_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "ion-label", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const data_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](data_r7.payee);
  }
}
function ClaimStatusPage_div_10_div_1_div_7_ion_label_53_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "ion-label", 23);
  }
}
function ClaimStatusPage_div_10_div_1_div_7_ion_label_59_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "ion-label", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const data_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](data_r7.bankDetails);
  }
}
function ClaimStatusPage_div_10_div_1_div_7_ion_label_60_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "ion-label", 23);
  }
}
function ClaimStatusPage_div_10_div_1_div_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 21)(1, "ion-row")(2, "ion-col", 22)(3, "ion-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](6, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "ion-label", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "ion-col", 22)(10, "ion-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](12, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](13, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](14, ClaimStatusPage_div_10_div_1_div_7_ion_label_14_Template, 2, 1, "ion-label", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](15, ClaimStatusPage_div_10_div_1_div_7_ion_label_15_Template, 1, 0, "ion-label", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](16, "ion-row")(17, "ion-col", 22)(18, "ion-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](20, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](21, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](22, ClaimStatusPage_div_10_div_1_div_7_ion_label_22_Template, 2, 1, "ion-label", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](23, ClaimStatusPage_div_10_div_1_div_7_ion_label_23_Template, 1, 0, "ion-label", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](24, "ion-col", 22)(25, "ion-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](26);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](27, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](28, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](29, ClaimStatusPage_div_10_div_1_div_7_ion_label_29_Template, 2, 1, "ion-label", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](30, ClaimStatusPage_div_10_div_1_div_7_ion_label_30_Template, 1, 0, "ion-label", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](31, "ion-row")(32, "ion-col", 22)(33, "ion-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](34);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](35, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](36, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](37, ClaimStatusPage_div_10_div_1_div_7_ion_label_37_Template, 2, 1, "ion-label", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](38, ClaimStatusPage_div_10_div_1_div_7_ion_label_38_Template, 1, 0, "ion-label", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](39, "ion-col", 22)(40, "ion-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](41);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](42, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](43, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](44, ClaimStatusPage_div_10_div_1_div_7_ion_label_44_Template, 2, 1, "ion-label", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](45, ClaimStatusPage_div_10_div_1_div_7_ion_label_45_Template, 1, 0, "ion-label", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](46, "ion-row")(47, "ion-col", 22)(48, "ion-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](49);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](50, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](51, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](52, ClaimStatusPage_div_10_div_1_div_7_ion_label_52_Template, 2, 1, "ion-label", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](53, ClaimStatusPage_div_10_div_1_div_7_ion_label_53_Template, 1, 0, "ion-label", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](54, "ion-col", 22)(55, "ion-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](56);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](57, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](58, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](59, ClaimStatusPage_div_10_div_1_div_7_ion_label_59_Template, 2, 1, "ion-label", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](60, ClaimStatusPage_div_10_div_1_div_7_ion_label_60_Template, 1, 0, "ion-label", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const data_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](5, 23, "claim_status.policy_No"));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](data_r7.policyNumber);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](12, 25, "claim_status.claim_type"));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", data_r7.claimsType);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !data_r7.claimsType);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](20, 27, "claim_status.person_covered"));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", data_r7.personCovered);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !data_r7.personCovered);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](27, 29, "claim_status.claim_status"));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", data_r7.claimsStatus);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !data_r7.claimsStatus);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](35, 31, "claim_status.amount_paid"));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", data_r7.amount);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !data_r7.amount);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](42, 33, "claim_status.date_of_pay"));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", data_r7.dateOfPayment);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !data_r7.dateOfPayment);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](50, 35, "claim_status.payee"));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", data_r7.payee);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !data_r7.payee);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](57, 37, "claim_status.bankDetails"));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", data_r7.bankDetails);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !data_r7.bankDetails);
  }
}
const _c0 = function (a0, a1) {
  return {
    "header-conventional": a0,
    "header-takaful": a1
  };
};
function ClaimStatusPage_div_10_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r33 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 15)(1, "ion-accordion-group", 16)(2, "ion-accordion", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ClaimStatusPage_div_10_div_1_Template_ion_accordion_click_2_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r33);
      const i_r8 = restoredCtx.index;
      const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r32.toggleSection(i_r8));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "ion-item", 18)(4, "ion-label", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](6, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](7, ClaimStatusPage_div_10_div_1_div_7_Template, 61, 39, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const data_r7 = ctx.$implicit;
    const i_r8 = ctx.index;
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction2"](6, _c0, data_r7.planType == "Conventional", data_r7.planType == "Takaful"));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate2"]("", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](6, 4, "claim_status.policy_No"), " : ", data_r7.policyNumber, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", i_r8 == ctx_r6.selectedIndex);
  }
}
function ClaimStatusPage_div_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, ClaimStatusPage_div_10_div_1_Template, 8, 9, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r2.claimStatusList);
  }
}
class ClaimStatusPage {
  constructor(logger, utils, claimStatus, translate, config) {
    this.logger = logger;
    this.utils = utils;
    this.claimStatus = claimStatus;
    this.translate = translate;
    this.config = config;
    this.claimStatusList = [];
    this.canTryAgain = false;
    this.isShowingLoader = true;
    this.utils.analytics("claimStatus");
    this.config.currentPage.pageName = "ClaimStatusPage";
  }
  ngOnInit() {
    this.logger.log('ionViewDidLoad ClaimStatusPage');
    this.getClaimStatus();
  }
  /**
   * This method is used to get list of Claim Status
   */
  getClaimStatus() {
    if (!(this.claimStatusList.length > 0)) {
      if (this.utils.isDeviceOnLine()) {
        this.canTryAgain = false;
        this.claimStatus.getClaimStatus(this.utils.getUserIdentity()).then(res => {
          try {
            this.isShowingLoader = false;
            if (res['responseJSON'] && res['responseJSON']['statusCode'] == http_status_codes__WEBPACK_IMPORTED_MODULE_5__.OK) {
              this.claimStatusList = res['responseJSON']['array'];
              if (!(this.claimStatusList.length > 0)) {
                this.errorMsg = this.translate.instant('generic_msgs.no_data');
              }
            } else {
              this.errorMsg = res['responseJSON']['error_description'];
            }
          } catch (e) {
            this.isShowingLoader = false;
            this.canTryAgain = true;
            this.logger.error("loginSuccess catch eror : " + JSON.stringify(e));
            this.errorMsg = this.translate.instant('generic_msgs.server_err');
          }
        }, err => {
          this.isShowingLoader = false;
          this.canTryAgain = true;
          this.logger.error("Claim status--search policy by policynumber servcie catch eror : " + JSON.stringify(err));
          this.errorMsg = this.utils.handleServiceException(err);
        });
      } else {
        this.isShowingLoader = false;
        this.canTryAgain = true;
        this.errorMsg = this.translate.instant('generic_msgs.network_err');
      }
    } else {
      this.isShowingLoader = false;
      this.canTryAgain = false;
    }
  }
  /**
   * This method is used to expand and collapse the item
   * @param index  - selected item index
   */
  toggleSection(index) {
    if (index == this.selectedIndex) {
      this.selectedIndex = null;
    } else this.selectedIndex = index;
  }
}
ClaimStatusPage.ɵfac = function ClaimStatusPage_Factory(t) {
  return new (t || ClaimStatusPage)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_providers_logger_service_logger_service__WEBPACK_IMPORTED_MODULE_0__.LoggerServiceProvider), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_providers_utils_utils_service__WEBPACK_IMPORTED_MODULE_1__.UtilService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_claimStatusService__WEBPACK_IMPORTED_MODULE_2__.ClaimStatusService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__.TranslateService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_providers_utils_config__WEBPACK_IMPORTED_MODULE_3__.ConfigProvider));
};
ClaimStatusPage.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
  type: ClaimStatusPage,
  selectors: [["app-claim-status"]],
  decls: 11,
  vars: 6,
  consts: [["mode", "ios"], ["color", "primary"], ["slot", "start"], ["text", "", "icon", "chevron-back-outline", 2, "padding-left", "15px", "font-size", "0.7rem"], [1, "bold-font"], ["no-bounce", "", "padding", "", 1, "app_bg2", "text_color_base"], ["class", "spinnersection", 4, "ngIf"], ["class", "errorMsgSection", 4, "ngIf"], [4, "ngIf"], [1, "spinnersection"], ["name", "ios-small"], [1, "errorMsgSection"], [3, "click", 4, "ngIf"], [3, "click"], ["style", " padding: 13px", 4, "ngFor", "ngForOf"], [2, "padding", "13px"], [3, "ngClass"], ["value", "start", 1, "ion-accordion-toggle-icon", 3, "click"], ["lines", "none", "slot", "header", 1, "item-background-color"], [1, "label-mode"], ["class", "ion-padding", "slot", "content", 4, "ngIf"], ["slot", "content", 1, "ion-padding"], [1, "ion-data"], [1, "ion-data-content"], ["class", "ion-data-content", 4, "ngIf"]],
  template: function ClaimStatusPage_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "ion-header", 0)(1, "ion-toolbar", 1)(2, "ion-buttons", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](3, "ion-back-button", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "ion-title", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](6, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "ion-content", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](8, ClaimStatusPage_section_8_Template, 2, 0, "section", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](9, ClaimStatusPage_section_9_Template, 4, 2, "section", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](10, ClaimStatusPage_div_10_Template, 2, 1, "div", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](6, 4, "claim_status.records"));
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.isShowingLoader);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !(ctx.claimStatusList.length > 0) && !ctx.isShowingLoader);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.claimStatusList.length > 0);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonAccordion, _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonAccordionGroup, _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonBackButton, _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonButtons, _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonCol, _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonContent, _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonHeader, _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonItem, _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonLabel, _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonRow, _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonSpinner, _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonTitle, _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonToolbar, _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonBackButtonDelegate, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__.TranslatePipe],
  styles: [".cardheader[_ngcontent-%COMP%] {\n  padding: 0px 0px 0px 0px;\n}\n\n.label[_ngcontent-%COMP%] {\n  margin: 1px 1px 1px 0;\n}\n\n.col[_ngcontent-%COMP%] {\n  width: 50%;\n  text-align: left;\n}\n\n.header-conventional[_ngcontent-%COMP%], .header-conventional[_ngcontent-%COMP%]   .section[_ngcontent-%COMP%] {\n  background: var(--ion-color-secondary) !important;\n}\n\n.header-takaful[_ngcontent-%COMP%], .header-takaful[_ngcontent-%COMP%]   .section[_ngcontent-%COMP%] {\n  background: #539542 !important;\n}\n\n.scroll-content[_ngcontent-%COMP%] {\n  padding: 8px !important;\n}\n\n.ion-data[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%]:first-child {\n  font-family: Agenda-Regular !important;\n  font-size: 1rem !important;\n  color: var(--ion-color-secondary) !important;\n  font-weight: 600 !important;\n  white-space: pre-wrap !important;\n}\n\n.ion-data-content[_ngcontent-%COMP%] {\n  font-family: Agenda-Regular !important;\n  font-weight: 500;\n  font-size: 0.9rem;\n  color: #3a3a3a;\n  white-space: pre-wrap !important;\n}\n\n.card-content[_ngcontent-%COMP%] {\n  padding: 13px 8px 5px;\n}\n\n.section[_ngcontent-%COMP%] {\n  color: var(--ion-color-secondary-contrast) !important;\n  transition: none !important;\n  -webkit-tap-highlight-color: none !important;\n}\n\n.section[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 1.25rem;\n  margin: 0px;\n  color: var(--ion-color-secondary-contrast) !important;\n  font-family: Agenda-Regular;\n  margin-left: 10px;\n  \n  margin-bottom: 7px;\n}\n\n.item-background-color[_ngcontent-%COMP%] {\n  --ion-item-background:var(--ion-color-secondary) !important;\n}\n\n.label-mode[_ngcontent-%COMP%] {\n  color: white;\n}\n\nion-accordion-group[_ngcontent-%COMP%]   ion-accordion[_ngcontent-%COMP%]   .ion-accordion-toggle-icon[_ngcontent-%COMP%] {\n  font-size: 50px;\n  color: white;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcGFnZXMvY2xhaW0tc3RhdHVzL2NsYWltLXN0YXR1cy5wYWdlLnNjc3MiLCJ3ZWJwYWNrOi8vLi8uLi8uLi8uLi9BbGwlMjBQcm9qZWN0cy9NYWxheXNpYV9DbGllbnRBcHBfUmV2YW1wL1N1bkFjY2Vzc19Jb25pYzZfUmV2YW1wL3NyYy9hcHAvcGFnZXMvY2xhaW0tc3RhdHVzL2NsYWltLXN0YXR1cy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFFSSx3QkFBQTtBQ0ZKOztBRE9BO0VBQ0kscUJBQUE7QUNKSjs7QURPQTtFQUNJLFVBQUE7RUFDQSxnQkFBQTtBQ0pKOztBRE9BO0VBQ0ksaURBQUE7QUNKSjs7QURPQTtFQUNJLDhCQUFBO0FDSko7O0FET0E7RUFDRyx1QkFBQTtBQ0pIOztBRFFBO0VBQ0ksc0NBQUE7RUFDQSwwQkFBQTtFQUNBLDRDQUFBO0VBQ0EsMkJBQUE7RUFDQSxnQ0FBQTtBQ0xKOztBRE9BO0VBQ1Esc0NBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLGdDQUFBO0FDSlI7O0FETUE7RUFDSSxxQkFBQTtBQ0hKOztBRE1BO0VBQ0kscURBQUE7RUFDQSwyQkFBQTtFQUNBLDRDQUFBO0FDSEo7O0FETUE7RUFLSSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxxREFBQTtFQUNBLDJCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQ0FBQTtFQUNBLGtCQUFBO0FDUEo7O0FEVUE7RUFDSSwyREFBQTtBQ1BKOztBRFdBO0VBQ0EsWUFBQTtBQ1JBOztBRGFRO0VBQ0ksZUFBQTtFQUNBLFlBQUE7QUNWWiIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5cclxuLmNhcmRoZWFkZXJ7XHJcbiAgICAgICBcclxuICAgIHBhZGRpbmc6IDBweCAwcHggMHB4IDBweDsgXHJcbn1cclxuXHJcblxyXG5cclxuLmxhYmVsIHtcclxuICAgIG1hcmdpbjogMXB4IDFweCAxcHggMDtcclxufVxyXG4gXHJcbi5jb2x7XHJcbiAgICB3aWR0aDogNTAlO1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxufSAgXHJcblxyXG4uaGVhZGVyLWNvbnZlbnRpb25hbCwgLmhlYWRlci1jb252ZW50aW9uYWwgLnNlY3Rpb257XHJcbiAgICBiYWNrZ3JvdW5kOiAgdmFyKC0taW9uLWNvbG9yLXNlY29uZGFyeSkgICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5oZWFkZXItdGFrYWZ1bCwuaGVhZGVyLXRha2FmdWwgLnNlY3Rpb257XHJcbiAgICBiYWNrZ3JvdW5kOiAjNTM5NTQyICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5zY3JvbGwtY29udGVudHtcclxuICAgcGFkZGluZzo4cHggIWltcG9ydGFudDtcclxufVxyXG5cclxuXHJcbi5pb24tZGF0YSBpb24tbGFiZWw6Zmlyc3QtY2hpbGR7XHJcbiAgICBmb250LWZhbWlseTogQWdlbmRhLVJlZ3VsYXIgIWltcG9ydGFudDtcclxuICAgIGZvbnQtc2l6ZTogMXJlbSAhaW1wb3J0YW50O1xyXG4gICAgY29sb3I6ICB2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5KSAhaW1wb3J0YW50O1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMCAhaW1wb3J0YW50O1xyXG4gICAgd2hpdGUtc3BhY2U6cHJlLXdyYXAgIWltcG9ydGFudDtcclxuICAgfVxyXG4uaW9uLWRhdGEtY29udGVudHtcclxuICAgICAgICBmb250LWZhbWlseTogQWdlbmRhLVJlZ3VsYXIgIWltcG9ydGFudDtcclxuICAgICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMC45cmVtO1xyXG4gICAgICAgIGNvbG9yOiMzYTNhM2E7XHJcbiAgICAgICAgd2hpdGUtc3BhY2U6cHJlLXdyYXAgIWltcG9ydGFudDtcclxufVxyXG4uY2FyZC1jb250ZW50IHtcclxuICAgIHBhZGRpbmc6IDEzcHggOHB4IDVweDtcclxufVxyXG5cclxuLnNlY3Rpb24ge1xyXG4gICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1zZWNvbmRhcnktY29udHJhc3QpICFpbXBvcnRhbnQ7XHJcbiAgICB0cmFuc2l0aW9uIDogbm9uZSAhaW1wb3J0YW50O1xyXG4gICAgLXdlYmtpdC10YXAtaGlnaGxpZ2h0LWNvbG9yOiBub25lICFpbXBvcnRhbnQ7XHJcbiAgIC8vIGFsaWduLWl0ZW1zOiByaWdodDtcclxufVxyXG4uc2VjdGlvbiBwe1xyXG4gICAgLy8gZm9udC1zaXplIDogMS4zcmVtO1xyXG4gICAgLy8gbWFyZ2luOiAwcHg7XHJcbiAgICAvLyBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXNlY29uZGFyeS1jb250cmFzdCkgIWltcG9ydGFudDtcclxuICAgIC8vIGZvbnQtZmFtaWx5OiBBZ2VuZGEtUmVndWxhcjtcclxuICAgIGZvbnQtc2l6ZTogMS4yNXJlbTtcclxuICAgIG1hcmdpbjogMHB4O1xyXG4gICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1zZWNvbmRhcnktY29udHJhc3QpICFpbXBvcnRhbnQ7XHJcbiAgICBmb250LWZhbWlseTogQWdlbmRhLVJlZ3VsYXI7XHJcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcclxuICAgIC8qIG1hcmdpbi1pbmxpbmUtc3RhcnQ6IGluaGVyaXQ7ICovXHJcbiAgICBtYXJnaW4tYm90dG9tOiA3cHg7XHJcbn1cclxuICAgICAgICBcclxuLml0ZW0tYmFja2dyb3VuZC1jb2xvcntcclxuICAgIC0taW9uLWl0ZW0tYmFja2dyb3VuZDp2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5KSAhaW1wb3J0YW50O1xyXG4gICAvLyBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5KSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ubGFiZWwtbW9kZXtcclxuY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG5pb24tYWNjb3JkaW9uLWdyb3Vwe1xyXG4gICAgaW9uLWFjY29yZGlvbiB7XHJcbiAgICAgICAgLmlvbi1hY2NvcmRpb24tdG9nZ2xlLWljb24ge1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDUwcHg7XHJcbiAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iLCIuY2FyZGhlYWRlciB7XG4gIHBhZGRpbmc6IDBweCAwcHggMHB4IDBweDtcbn1cblxuLmxhYmVsIHtcbiAgbWFyZ2luOiAxcHggMXB4IDFweCAwO1xufVxuXG4uY29sIHtcbiAgd2lkdGg6IDUwJTtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbn1cblxuLmhlYWRlci1jb252ZW50aW9uYWwsIC5oZWFkZXItY29udmVudGlvbmFsIC5zZWN0aW9uIHtcbiAgYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXNlY29uZGFyeSkgIWltcG9ydGFudDtcbn1cblxuLmhlYWRlci10YWthZnVsLCAuaGVhZGVyLXRha2FmdWwgLnNlY3Rpb24ge1xuICBiYWNrZ3JvdW5kOiAjNTM5NTQyICFpbXBvcnRhbnQ7XG59XG5cbi5zY3JvbGwtY29udGVudCB7XG4gIHBhZGRpbmc6IDhweCAhaW1wb3J0YW50O1xufVxuXG4uaW9uLWRhdGEgaW9uLWxhYmVsOmZpcnN0LWNoaWxkIHtcbiAgZm9udC1mYW1pbHk6IEFnZW5kYS1SZWd1bGFyICFpbXBvcnRhbnQ7XG4gIGZvbnQtc2l6ZTogMXJlbSAhaW1wb3J0YW50O1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXNlY29uZGFyeSkgIWltcG9ydGFudDtcbiAgZm9udC13ZWlnaHQ6IDYwMCAhaW1wb3J0YW50O1xuICB3aGl0ZS1zcGFjZTogcHJlLXdyYXAgIWltcG9ydGFudDtcbn1cblxuLmlvbi1kYXRhLWNvbnRlbnQge1xuICBmb250LWZhbWlseTogQWdlbmRhLVJlZ3VsYXIgIWltcG9ydGFudDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgZm9udC1zaXplOiAwLjlyZW07XG4gIGNvbG9yOiAjM2EzYTNhO1xuICB3aGl0ZS1zcGFjZTogcHJlLXdyYXAgIWltcG9ydGFudDtcbn1cblxuLmNhcmQtY29udGVudCB7XG4gIHBhZGRpbmc6IDEzcHggOHB4IDVweDtcbn1cblxuLnNlY3Rpb24ge1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXNlY29uZGFyeS1jb250cmFzdCkgIWltcG9ydGFudDtcbiAgdHJhbnNpdGlvbjogbm9uZSAhaW1wb3J0YW50O1xuICAtd2Via2l0LXRhcC1oaWdobGlnaHQtY29sb3I6IG5vbmUgIWltcG9ydGFudDtcbn1cblxuLnNlY3Rpb24gcCB7XG4gIGZvbnQtc2l6ZTogMS4yNXJlbTtcbiAgbWFyZ2luOiAwcHg7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5LWNvbnRyYXN0KSAhaW1wb3J0YW50O1xuICBmb250LWZhbWlseTogQWdlbmRhLVJlZ3VsYXI7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICAvKiBtYXJnaW4taW5saW5lLXN0YXJ0OiBpbmhlcml0OyAqL1xuICBtYXJnaW4tYm90dG9tOiA3cHg7XG59XG5cbi5pdGVtLWJhY2tncm91bmQtY29sb3Ige1xuICAtLWlvbi1pdGVtLWJhY2tncm91bmQ6dmFyKC0taW9uLWNvbG9yLXNlY29uZGFyeSkgIWltcG9ydGFudDtcbn1cblxuLmxhYmVsLW1vZGUge1xuICBjb2xvcjogd2hpdGU7XG59XG5cbmlvbi1hY2NvcmRpb24tZ3JvdXAgaW9uLWFjY29yZGlvbiAuaW9uLWFjY29yZGlvbi10b2dnbGUtaWNvbiB7XG4gIGZvbnQtc2l6ZTogNTBweDtcbiAgY29sb3I6IHdoaXRlO1xufSJdLCJzb3VyY2VSb290IjoiIn0= */"]
});

/***/ })

}]);
//# sourceMappingURL=src_app_pages_claim-status_claim-status_module_ts.js.map