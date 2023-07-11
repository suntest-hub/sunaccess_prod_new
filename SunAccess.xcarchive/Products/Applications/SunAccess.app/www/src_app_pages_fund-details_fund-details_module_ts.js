"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_fund-details_fund-details_module_ts"],{

/***/ 48180:
/*!*******************************************************************!*\
  !*** ./src/app/pages/fund-details/fund-details-routing.module.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FundDetailsPageRoutingModule": () => (/* binding */ FundDetailsPageRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _fund_details_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fund-details.page */ 98228);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);




const routes = [{
  path: '',
  component: _fund_details_page__WEBPACK_IMPORTED_MODULE_0__.FundDetailsPage
}];
class FundDetailsPageRoutingModule {}
FundDetailsPageRoutingModule.ɵfac = function FundDetailsPageRoutingModule_Factory(t) {
  return new (t || FundDetailsPageRoutingModule)();
};
FundDetailsPageRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
  type: FundDetailsPageRoutingModule
});
FundDetailsPageRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](FundDetailsPageRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
})();

/***/ }),

/***/ 5512:
/*!***********************************************************!*\
  !*** ./src/app/pages/fund-details/fund-details.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FundDetailsPageModule": () => (/* binding */ FundDetailsPageModule)
/* harmony export */ });
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ 38699);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _fund_details_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fund-details-routing.module */ 48180);
/* harmony import */ var _fund_details_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./fund-details.page */ 98228);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);







class FundDetailsPageModule {}
FundDetailsPageModule.ɵfac = function FundDetailsPageModule_Factory(t) {
  return new (t || FundDetailsPageModule)();
};
FundDetailsPageModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
  type: FundDetailsPageModule
});
FundDetailsPageModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__.TranslateModule, _fund_details_routing_module__WEBPACK_IMPORTED_MODULE_0__.FundDetailsPageRoutingModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](FundDetailsPageModule, {
    declarations: [_fund_details_page__WEBPACK_IMPORTED_MODULE_1__.FundDetailsPage],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__.TranslateModule, _fund_details_routing_module__WEBPACK_IMPORTED_MODULE_0__.FundDetailsPageRoutingModule]
  });
})();

/***/ }),

/***/ 98228:
/*!*********************************************************!*\
  !*** ./src/app/pages/fund-details/fund-details.page.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FundDetailsPage": () => (/* binding */ FundDetailsPage)
/* harmony export */ });
/* harmony import */ var http_status_codes__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! http-status-codes */ 92788);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var src_app_services_translate_config_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/translate-config.service */ 45340);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ 38699);
/* harmony import */ var _fundDetailsService__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./fundDetailsService */ 2261);
/* harmony import */ var src_providers_logger_service_logger_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/providers/logger-service/logger-service */ 9999);
/* harmony import */ var src_providers_utils_utils_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/providers/utils/utils.service */ 30423);
/* harmony import */ var src_providers_utils_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/providers/utils/config */ 43485);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/angular */ 93819);










function FundDetailsPage_section_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "section", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "ion-spinner", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function FundDetailsPage_section_13_ion_button_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ion-button", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function FundDetailsPage_section_13_ion_button_3_Template_ion_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r5);
      const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r4.getPeriodicPayoutList());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](2, 1, "generic_msgs.try_again"), "");
  }
}
function FundDetailsPage_section_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "section", 14)(1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](3, FundDetailsPage_section_13_ion_button_3_Template, 3, 3, "ion-button", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r1.errorMsg);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.canTryAgain);
  }
}
function FundDetailsPage_section_14_ion_list_1_ion_icon_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "ion-icon", 24);
  }
}
function FundDetailsPage_section_14_ion_list_1_ion_icon_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "ion-icon", 25);
  }
}
function FundDetailsPage_section_14_ion_list_1_div_6_p_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "p", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const fdetails_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](fdetails_r7.alterationType);
  }
}
function FundDetailsPage_section_14_ion_list_1_div_6_p_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "p", 30);
  }
}
function FundDetailsPage_section_14_ion_list_1_div_6_p_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "p", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const fdetails_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](fdetails_r7.effectiveDate);
  }
}
function FundDetailsPage_section_14_ion_list_1_div_6_p_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "p", 30);
  }
}
function FundDetailsPage_section_14_ion_list_1_div_6_p_20_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "p", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const fdetails_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](fdetails_r7.transactionAmount);
  }
}
function FundDetailsPage_section_14_ion_list_1_div_6_p_21_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "p", 30);
  }
}
function FundDetailsPage_section_14_ion_list_1_div_6_p_27_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "p", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const fdetails_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](fdetails_r7.transactionFundPrice);
  }
}
function FundDetailsPage_section_14_ion_list_1_div_6_p_28_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "p", 30);
  }
}
function FundDetailsPage_section_14_ion_list_1_div_6_p_34_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "p", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const fdetails_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](fdetails_r7.units);
  }
}
function FundDetailsPage_section_14_ion_list_1_div_6_p_35_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "p", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "--");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function FundDetailsPage_section_14_ion_list_1_div_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 26)(1, "ion-row")(2, "div", 27)(3, "p", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](6, FundDetailsPage_section_14_ion_list_1_div_6_p_6_Template, 2, 1, "p", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](7, FundDetailsPage_section_14_ion_list_1_div_6_p_7_Template, 1, 0, "p", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "ion-row")(9, "div", 27)(10, "p", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](12, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](13, FundDetailsPage_section_14_ion_list_1_div_6_p_13_Template, 2, 1, "p", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](14, FundDetailsPage_section_14_ion_list_1_div_6_p_14_Template, 1, 0, "p", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](15, "ion-row")(16, "div", 27)(17, "p", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](19, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](20, FundDetailsPage_section_14_ion_list_1_div_6_p_20_Template, 2, 1, "p", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](21, FundDetailsPage_section_14_ion_list_1_div_6_p_21_Template, 1, 0, "p", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](22, "ion-row")(23, "div", 27)(24, "p", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](25);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](26, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](27, FundDetailsPage_section_14_ion_list_1_div_6_p_27_Template, 2, 1, "p", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](28, FundDetailsPage_section_14_ion_list_1_div_6_p_28_Template, 1, 0, "p", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](29, "ion-row")(30, "div", 27)(31, "p", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](32);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](33, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](34, FundDetailsPage_section_14_ion_list_1_div_6_p_34_Template, 2, 1, "p", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](35, FundDetailsPage_section_14_ion_list_1_div_6_p_35_Template, 2, 0, "p", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const fdetails_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](5, 15, "fund_details.alteration_type"));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", fdetails_r7.alterationType);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !fdetails_r7.alterationType);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](12, 17, "fund_details.effective_date"));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", fdetails_r7.effectiveDate);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !fdetails_r7.effectiveDate);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](19, 19, "fund_details.transaction_amt"));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", fdetails_r7.transactionAmount);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !fdetails_r7.transactionAmount);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](26, 21, "fund_details.transactiob_fund_price"));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", fdetails_r7.transactionFundPrice);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !fdetails_r7.transactionFundPrice);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](33, 23, "fund_details.units"));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", fdetails_r7.units);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !fdetails_r7.units);
  }
}
function FundDetailsPage_section_14_ion_list_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r28 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ion-list")(1, "ion-row", 19)(2, "ion-item", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function FundDetailsPage_section_14_ion_list_1_Template_ion_item_click_2_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r28);
      const fdetails_r7 = restoredCtx.$implicit;
      const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r27.expandItem(fdetails_r7));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](4, FundDetailsPage_section_14_ion_list_1_ion_icon_4_Template, 1, 0, "ion-icon", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](5, FundDetailsPage_section_14_ion_list_1_ion_icon_5_Template, 1, 0, "ion-icon", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](6, FundDetailsPage_section_14_ion_list_1_div_6_Template, 36, 25, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const fdetails_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", fdetails_r7.effectiveDate, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !fdetails_r7.expanded);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", fdetails_r7.expanded);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", fdetails_r7.expanded);
  }
}
function FundDetailsPage_section_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "section", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, FundDetailsPage_section_14_ion_list_1_Template, 7, 4, "ion-list", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx_r2.fundDetails);
  }
}
const _c0 = function (a0, a1) {
  return {
    "bg-conventional": a0,
    "bg-takaful": a1
  };
};
class FundDetailsPage {
  constructor(translateConfigService, translate, fundDetailsService, logger, utils, config) {
    this.translateConfigService = translateConfigService;
    this.translate = translate;
    this.fundDetailsService = fundDetailsService;
    this.logger = logger;
    this.utils = utils;
    this.config = config;
    this.fundDetails = [];
    this.canTryAgain = false;
    this.getFundDetails = function () {
      if (this.utils.isDeviceOnLine()) {
        this.canTryAgain = false;
        this.isShowingLoader = true;
        this.errorMsg = "";
        this.fundDetailsService.getFundDetails(this.encryptedPolicyNo, this.fundData.code, this.fundData.rider).then(res => {
          try {
            this.isShowingLoader = false;
            if (res['responseJSON'] && res['responseJSON']['statusCode'] == http_status_codes__WEBPACK_IMPORTED_MODULE_6__.OK) {
              this.fundDetails = res['responseJSON']['array'];
              if (!(this.fundDetails.length > 0)) {
                this.errorMsg = this.translate.instant('generic_msgs.no_data');
              }
            } else {
              this.errorMsg = res['responseJSON']['error_description'];
            }
          } catch (e) {
            this.isShowingLoader = false;
            this.canTryAgain = true;
            this.logger.error("getFundAllocationsList catch eror : " + JSON.stringify(e));
            this.errorMsg = this.translate.instant('generic_msgs.no_data');
          }
        }, err => {
          this.isShowingLoader = false;
          this.canTryAgain = true;
          this.errorMsg = this.utils.handleServiceException(err);
        });
      } else {
        this.isShowingLoader = false;
        this.canTryAgain = true;
        this.errorMsg = this.translate.instant('generic_msgs.server_err');
      }
    };
    this.selectedLanguage = this.translateConfigService.getDefaultLanguage();
    this.translateConfigService.setLanguage('en');
    this.selectedPolicyData = history.state.selectedPolicy;
    this.selectedPlanType = this.selectedPolicyData['planType'];
    this.encryptedPolicyNo = this.selectedPolicyData['encryptedPolicyNo'];
    this.fundData = history.state.fundData;
    this.fundName = this.fundData.name;
    this.utils.analytics("fundDetails");
    this.config.currentPage.pageName = "FundDetailsPage";
  }
  ngOnInit() {
    this.getFundDetails();
  }
  ionViewDidLoad() {
    this.logger.log('ionViewDidLoad FundDetailsPage');
    this.getFundDetails();
  }
  /**toggle */
  expandItem(item) {
    this.fundDetails.map(listItem => {
      if (item == listItem) {
        listItem.expanded = !listItem.expanded;
      } else {
        listItem.expanded = false;
      }
      return listItem;
    });
  }
}
FundDetailsPage.ɵfac = function FundDetailsPage_Factory(t) {
  return new (t || FundDetailsPage)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_services_translate_config_service__WEBPACK_IMPORTED_MODULE_0__.TranslateConfigService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__.TranslateService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_fundDetailsService__WEBPACK_IMPORTED_MODULE_1__.FundDetailsService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_providers_logger_service_logger_service__WEBPACK_IMPORTED_MODULE_2__.LoggerServiceProvider), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_providers_utils_utils_service__WEBPACK_IMPORTED_MODULE_3__.UtilService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_providers_utils_config__WEBPACK_IMPORTED_MODULE_4__.ConfigProvider));
};
FundDetailsPage.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
  type: FundDetailsPage,
  selectors: [["app-fund-details"]],
  decls: 15,
  vars: 11,
  consts: [["mode", "ios"], ["color", "primary", 2, "border-bottom", "3px solid white"], ["slot", "start"], ["text", "", "icon", "chevron-back-outline", 2, "padding-left", "15px", "font-size", "0.7rem"], [1, "bold-font"], ["color", "primary", 1, "tabs"], [2, "margin-bottom", "5px", 3, "ngClass"], [1, "sub-header"], [1, "app_bg2", "ion-padding"], ["class", "spinnersection ion-text-center", 4, "ngIf"], ["class", "errorMsgSection", 4, "ngIf"], ["class", "white_container_border_radius padding_15", 4, "ngIf"], [1, "spinnersection", "ion-text-center"], ["name", "lines-sharp-small", 2, "height", "98%"], [1, "errorMsgSection"], [3, "click", 4, "ngIf"], [3, "click"], [1, "white_container_border_radius", "padding_15"], [4, "ngFor", "ngForOf"], [2, "border-bottom", "none", "padding", "0px 10px 0px 10px", "margin", "10px"], ["lines", "none", "lines", "none", "bac", "", 1, "font_size_14", 3, "click"], ["style", "color:white", "slot", "end", "name", "chevron-forward-outline", 4, "ngIf"], ["style", "color:white", "slot", "end", "name", "chevron-down-outline", 4, "ngIf"], ["class", "accordianContent ", "style", "background: none !important;", 4, "ngIf"], ["slot", "end", "name", "chevron-forward-outline", 2, "color", "white"], ["slot", "end", "name", "chevron-down-outline", 2, "color", "white"], [1, "accordianContent", 2, "background", "none !important"], [1, "margin_top_bottom_auto", "div-padding"], [1, "lbl-header"], ["class", "lbl-content", 4, "ngIf"], [1, "lbl-content"]],
  template: function FundDetailsPage_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ion-header", 0)(1, "ion-toolbar", 1)(2, "ion-buttons", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](3, "ion-back-button", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "ion-title", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "ion-toolbar", 5)(7, "ion-row", 6)(8, "ion-label", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](9);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](10, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "ion-content", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](12, FundDetailsPage_section_12_Template, 2, 0, "section", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](13, FundDetailsPage_section_13_Template, 4, 2, "section", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](14, FundDetailsPage_section_14_Template, 2, 1, "section", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx.fundName);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction2"](8, _c0, ctx.selectedPlanType === "Conventional", ctx.selectedPlanType !== "Conventional"));
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](10, 6, "fund_details.title"));
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.isShowingLoader);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !(ctx.fundDetails.length > 0) && !ctx.isShowingLoader);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.fundDetails.length > 0);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgIf, _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.IonBackButton, _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.IonButton, _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.IonButtons, _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.IonContent, _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.IonHeader, _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.IonIcon, _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.IonItem, _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.IonLabel, _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.IonList, _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.IonRow, _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.IonSpinner, _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.IonTitle, _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.IonToolbar, _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.IonBackButtonDelegate, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__.TranslatePipe],
  styles: [".app_bg2[_ngcontent-%COMP%] {\n  --background: url('app_bg_2.jpg') no-repeat center center / cover;\n  background-size: cover;\n  background-repeat: no-repeat;\n  height: 100%;\n  background-position: bottom;\n}\n\n.sub-header[_ngcontent-%COMP%] {\n  color: #ffffff;\n  padding: 10px 25px !important;\n  margin: 0px !important;\n  font-size: 1.1rem !important;\n  font-family: Agenda-Regular;\n}\n\n.tabs[_ngcontent-%COMP%] {\n  border-top: 3px solid color white;\n  --padding-top: -4px;\n  --padding-start: -4px;\n  --padding-end: -4px;\n  --min-height: 44px;\n}\n\n.white_container_border_radius[_ngcontent-%COMP%] {\n  background-color: rgba(255, 255, 255, 0.7) !important;\n  border-radius: 15px !important;\n}\n\n.spinnersection[_ngcontent-%COMP%] {\n  display: block;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  font-size: 1.3rem;\n  height: 98%;\n}\n\n.scroll-content[_ngcontent-%COMP%] {\n  padding: 0px !important;\n}\n\n.item.item-block[_ngcontent-%COMP%]   .item-inner[_ngcontent-%COMP%] {\n  padding-right: 0px;\n  border-bottom: none !important;\n}\n\n.ion-ios-arrow-forward[_ngcontent-%COMP%]:before, .ion-ios-arrow-down[_ngcontent-%COMP%]:before {\n  font-size: 1.5rem !important;\n  font-weight: 600 !important;\n}\n\n.item[_ngcontent-%COMP%] {\n  padding: 0px 0px !important;\n  --background: --ion-color-secondary;\n  color: white;\n}\n\n.item[_ngcontent-%COMP%]   ion-icon[item-right][_ngcontent-%COMP%] {\n  margin: 0 !important;\n}\n\n.item[_ngcontent-%COMP%]    > ion-icon[_ngcontent-%COMP%], .item-inner[_ngcontent-%COMP%]    > ion-icon[_ngcontent-%COMP%] {\n  min-height: 1.8rem;\n  font-size: 1.2rem;\n  line-height: 1;\n}\n\n.accordianContent[_ngcontent-%COMP%] {\n  padding: 0px 25px;\n  color: #002d3d;\n}\n\n.div-padding[_ngcontent-%COMP%] {\n  padding: 10px 0;\n}\n\n.lbl-header[_ngcontent-%COMP%] {\n  padding: 0;\n  font-family: Agenda-Regular;\n  color: --ion-color-secondary;\n  font-size: 1rem;\n  line-height: 24px;\n  margin: 0;\n  font-weight: 600;\n}\n\n.lbl-content[_ngcontent-%COMP%] {\n  padding: 0;\n  font-family: Agenda-Regular;\n  color: --ion-color-secondary;\n  font-size: 1rem;\n  line-height: 24px;\n  margin: 0;\n  font-weight: 400;\n}\n\nion-label[_ngcontent-%COMP%] {\n  margin: 0px !important;\n}\n\nsection[_ngcontent-%COMP%]   ion-row[_ngcontent-%COMP%] {\n  border-bottom: 1px solid color #002d3d;\n  margin-top: 5px;\n}\n\nsection[_ngcontent-%COMP%]   ion-row[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n}\n\n.font_size_14[_ngcontent-%COMP%] {\n  font-size: 0.8rem !important;\n}\n\np[_ngcontent-%COMP%] {\n  margin-top: 5px;\n  margin-bottom: 2px;\n}\n\nion-row[_ngcontent-%COMP%] {\n  border-bottom: 1px solid rgba(0, 45, 61, 0.3);\n}\n\nion-list[_ngcontent-%COMP%]   ion-row[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n}\n\nion-item[_ngcontent-%COMP%] {\n  background: #002d3d;\n  color: white;\n  font-size: 10px;\n  font-weight: bold;\n  line-height: 20px;\n  width: 100%;\n  min-height: 3rem;\n  padding: 8px;\n  text-transform: capitalize;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcGFnZXMvZnVuZC1kZXRhaWxzL2Z1bmQtZGV0YWlscy5wYWdlLnNjc3MiLCJ3ZWJwYWNrOi8vLi8uLi8uLi8uLi9BbGwlMjBQcm9qZWN0cy9NYWxheXNpYV9DbGllbnRBcHBfUmV2YW1wL1N1bkFjY2Vzc19Jb25pYzZfUmV2YW1wL3NyYy9hcHAvcGFnZXMvZnVuZC1kZXRhaWxzL2Z1bmQtZGV0YWlscy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxpRUFBQTtFQUNBLHNCQUFBO0VBQ0EsNEJBQUE7RUFDQSxZQUFBO0VBQ0EsMkJBQUE7QUNDRjs7QURDQTtFQUNFLGNBQUE7RUFFQSw2QkFBQTtFQUNBLHNCQUFBO0VBQ0EsNEJBQUE7RUFDQSwyQkFBQTtBQ0NGOztBREVBO0VBQ0UsaUNBQUE7RUFDRSxtQkFBQTtFQUNBLHFCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBQ0NKOztBRENBO0VBQ0UscURBQUE7RUFDQSw4QkFBQTtBQ0VGOztBREdBO0VBQ0UsY0FBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0EsV0FBQTtBQ0FGOztBREVBO0VBQ0UsdUJBQUE7QUNDRjs7QURFQTtFQUNFLGtCQUFBO0VBQ0EsOEJBQUE7QUNDRjs7QURFQTtFQUNFLDRCQUFBO0VBQ0EsMkJBQUE7QUNDRjs7QURFQTtFQUNFLDJCQUFBO0VBQ0EsbUNBQUE7RUFDQSxZQUFBO0FDQ0Y7O0FERUE7RUFDRSxvQkFBQTtBQ0NGOztBREVBO0VBQ0Usa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7QUNDRjs7QURNQTtFQUNFLGlCQUFBO0VBQ0EsY0FBQTtBQ0hGOztBREtBO0VBQ0UsZUFBQTtBQ0ZGOztBRElBO0VBQ0UsVUFBQTtFQUNBLDJCQUFBO0VBQ0EsNEJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxTQUFBO0VBQ0EsZ0JBQUE7QUNERjs7QURJQTtFQUNHLFVBQUE7RUFDQSwyQkFBQTtFQUNBLDRCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsU0FBQTtFQUNBLGdCQUFBO0FDREg7O0FESUE7RUFDRyxzQkFBQTtBQ0RIOztBRE1BO0VBQ0Usc0NBQUE7RUFDQSxlQUFBO0FDSEY7O0FETUE7RUFDRyxtQkFBQTtBQ0hIOztBREtBO0VBQ0UsNEJBQUE7QUNGRjs7QURLQTtFQUNFLGVBQUE7RUFDQSxrQkFBQTtBQ0ZGOztBRElBO0VBQ0UsNkNBQUE7QUNERjs7QURNQTtFQUNFLG1CQUFBO0FDSEY7O0FES0E7RUFJRSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLFdBQUE7RUFJQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSwwQkFBQTtBQ1JGIiwic291cmNlc0NvbnRlbnQiOlsiLmFwcF9iZzIge1xyXG4gIC0tYmFja2dyb3VuZDogdXJsKC4uLy4uLy4uL2Fzc2V0cy9pbWdzL2FwcF9iZ18yLmpwZykgbm8tcmVwZWF0IGNlbnRlciBjZW50ZXIgLyBjb3ZlcjtcclxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGJvdHRvbTtcclxufVxyXG4uc3ViLWhlYWRlciB7XHJcbiAgY29sb3I6ICNmZmZmZmY7XHJcblxyXG4gIHBhZGRpbmc6IDEwcHggMjVweCAhaW1wb3J0YW50O1xyXG4gIG1hcmdpbjogMHB4ICFpbXBvcnRhbnQ7XHJcbiAgZm9udC1zaXplOiAxLjFyZW0gIWltcG9ydGFudDtcclxuICBmb250LWZhbWlseTogQWdlbmRhLVJlZ3VsYXI7XHJcbiAgLy9saW5lLWhlaWdodDogMjRweDs7XHJcbn1cclxuLnRhYnN7XHJcbiAgYm9yZGVyLXRvcDogM3B4IHNvbGlkIGNvbG9yIHdoaXRlO1xyXG4gICAgLS1wYWRkaW5nLXRvcDogLTRweDtcclxuICAgIC0tcGFkZGluZy1zdGFydDogLTRweDtcclxuICAgIC0tcGFkZGluZy1lbmQ6IC00cHg7XHJcbiAgICAtLW1pbi1oZWlnaHQ6IDQ0cHg7XHJcbn1cclxuLndoaXRlX2NvbnRhaW5lcl9ib3JkZXJfcmFkaXVze1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC43KSAhaW1wb3J0YW50O1xyXG4gIGJvcmRlci1yYWRpdXM6IDE1cHggIWltcG9ydGFudDtcclxuXHJcbn1cclxuXHJcblxyXG4uc3Bpbm5lcnNlY3Rpb24ge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBmb250LXNpemU6IDEuM3JlbTtcclxuICBoZWlnaHQ6IDk4JTtcclxufVxyXG4uc2Nyb2xsLWNvbnRlbnR7XHJcbiAgcGFkZGluZzogMHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5pdGVtLml0ZW0tYmxvY2sgLml0ZW0taW5uZXIge1xyXG4gIHBhZGRpbmctcmlnaHQ6IDBweDtcclxuICBib3JkZXItYm90dG9tOiBub25lICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5pb24taW9zLWFycm93LWZvcndhcmQ6YmVmb3JlLC5pb24taW9zLWFycm93LWRvd246YmVmb3Jle1xyXG4gIGZvbnQtc2l6ZTogMS41cmVtICFpbXBvcnRhbnQ7XHJcbiAgZm9udC13ZWlnaHQ6IDYwMCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uaXRlbXtcclxuICBwYWRkaW5nOiAgMHB4IDBweCAhaW1wb3J0YW50O1xyXG4gIC0tYmFja2dyb3VuZDogLS1pb24tY29sb3Itc2Vjb25kYXJ5O1xyXG4gIGNvbG9yOndoaXRlO1xyXG59XHJcblxyXG4uaXRlbSBpb24taWNvbltpdGVtLXJpZ2h0XXtcclxuICBtYXJnaW4gOiAwICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5pdGVtID4gaW9uLWljb24sIC5pdGVtLWlubmVyID4gaW9uLWljb24ge1xyXG4gIG1pbi1oZWlnaHQ6IDEuOHJlbTtcclxuICBmb250LXNpemU6IDEuMnJlbTtcclxuICBsaW5lLWhlaWdodDogMTtcclxufVxyXG5cclxuLy8gaW9uLWxpc3R7XHJcbi8vICAgbWFyZ2luOiAwcHggMCA1cHg7XHJcbi8vIH1cclxuXHJcbi5hY2NvcmRpYW5Db250ZW50e1xyXG4gIHBhZGRpbmc6IDBweCAyNXB4O1xyXG4gIGNvbG9yOiAjMDAyZDNkO1xyXG59XHJcbi5kaXYtcGFkZGluZ3tcclxuICBwYWRkaW5nOiAxMHB4IDA7XHJcbn1cclxuLmxibC1oZWFkZXJ7XHJcbiAgcGFkZGluZzogMDtcclxuICBmb250LWZhbWlseTogIEFnZW5kYS1SZWd1bGFyO1xyXG4gIGNvbG9yOiAtLWlvbi1jb2xvci1zZWNvbmRhcnk7XHJcbiAgZm9udC1zaXplOiAxLjByZW07XHJcbiAgbGluZS1oZWlnaHQ6IDI0cHg7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbn1cclxuXHJcbi5sYmwtY29udGVudHtcclxuICAgcGFkZGluZzogMDtcclxuICAgZm9udC1mYW1pbHk6IEFnZW5kYS1SZWd1bGFyO1xyXG4gICBjb2xvcjogIC0taW9uLWNvbG9yLXNlY29uZGFyeTtcclxuICAgZm9udC1zaXplOiAxLjByZW07XHJcbiAgIGxpbmUtaGVpZ2h0OiAyNHB4O1xyXG4gICBtYXJnaW46IDA7XHJcbiAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbn1cclxuXHJcbmlvbi1sYWJlbCB7XHJcbiAgIG1hcmdpbjogMHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcblxyXG5cclxuc2VjdGlvbiBpb24tcm93e1xyXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBjb2xvciAjMDAyZDNkIDtcclxuICBtYXJnaW4tdG9wOiA1cHg7XHJcbn1cclxuXHJcbnNlY3Rpb24gaW9uLXJvdzpsYXN0LWNoaWxke1xyXG4gICBib3JkZXItYm90dG9tOiBub25lO1xyXG59XHJcbi5mb250X3NpemVfMTQge1xyXG4gIGZvbnQtc2l6ZTogMC44cmVtICFpbXBvcnRhbnQ7XHJcblxyXG59XHJcbnB7XHJcbiAgbWFyZ2luLXRvcDogNXB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDJweDtcclxufVxyXG5pb24tcm93IHtcclxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiYSgwLCA0NSwgNjEsIC4zKTtcclxuICAvL21hcmdpbi10b3A6IDVweDtcclxufVxyXG5cclxuXHJcbmlvbi1saXN0IGlvbi1yb3c6bGFzdC1jaGlsZHtcclxuICBib3JkZXItYm90dG9tOiBub25lO1xyXG59XHJcbmlvbi1pdGVtIHtcclxuICAvL2JhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gIC8vYm9yZGVyOiAycHggc29saWQ7XHJcbiAgLy9ib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgYmFja2dyb3VuZDogIzAwMmQzZDtcclxuICBjb2xvcjp3aGl0ZTtcclxuICBmb250LXNpemU6IDEwcHg7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgbGluZS1oZWlnaHQ6IDIwcHg7XHJcbiAgd2lkdGg6MTAwJTtcclxuXHJcbiAgLy9tYXJnaW46IDAgMCAwIDE2cHg7XHJcbiAgLy9taW4td2lkdGg6IDM1MHB4O1xyXG4gIG1pbi1oZWlnaHQ6IDNyZW07XHJcbiAgcGFkZGluZzogOHB4O1xyXG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xyXG4vLyAgIC5idXR0b24taW5uZXIge1xyXG4vLyAgICAgZm9udC1zaXplOiAyNXB4O1xyXG4vLyAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbi8vICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHN0YXJ0ICFpbXBvcnRhbnQ7XHJcbi8vIH1cclxuXHJcbn1cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuIiwiLmFwcF9iZzIge1xuICAtLWJhY2tncm91bmQ6IHVybCguLi8uLi8uLi9hc3NldHMvaW1ncy9hcHBfYmdfMi5qcGcpIG5vLXJlcGVhdCBjZW50ZXIgY2VudGVyIC8gY292ZXI7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGhlaWdodDogMTAwJTtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogYm90dG9tO1xufVxuXG4uc3ViLWhlYWRlciB7XG4gIGNvbG9yOiAjZmZmZmZmO1xuICBwYWRkaW5nOiAxMHB4IDI1cHggIWltcG9ydGFudDtcbiAgbWFyZ2luOiAwcHggIWltcG9ydGFudDtcbiAgZm9udC1zaXplOiAxLjFyZW0gIWltcG9ydGFudDtcbiAgZm9udC1mYW1pbHk6IEFnZW5kYS1SZWd1bGFyO1xufVxuXG4udGFicyB7XG4gIGJvcmRlci10b3A6IDNweCBzb2xpZCBjb2xvciB3aGl0ZTtcbiAgLS1wYWRkaW5nLXRvcDogLTRweDtcbiAgLS1wYWRkaW5nLXN0YXJ0OiAtNHB4O1xuICAtLXBhZGRpbmctZW5kOiAtNHB4O1xuICAtLW1pbi1oZWlnaHQ6IDQ0cHg7XG59XG5cbi53aGl0ZV9jb250YWluZXJfYm9yZGVyX3JhZGl1cyB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC43KSAhaW1wb3J0YW50O1xuICBib3JkZXItcmFkaXVzOiAxNXB4ICFpbXBvcnRhbnQ7XG59XG5cbi5zcGlubmVyc2VjdGlvbiB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZm9udC1zaXplOiAxLjNyZW07XG4gIGhlaWdodDogOTglO1xufVxuXG4uc2Nyb2xsLWNvbnRlbnQge1xuICBwYWRkaW5nOiAwcHggIWltcG9ydGFudDtcbn1cblxuLml0ZW0uaXRlbS1ibG9jayAuaXRlbS1pbm5lciB7XG4gIHBhZGRpbmctcmlnaHQ6IDBweDtcbiAgYm9yZGVyLWJvdHRvbTogbm9uZSAhaW1wb3J0YW50O1xufVxuXG4uaW9uLWlvcy1hcnJvdy1mb3J3YXJkOmJlZm9yZSwgLmlvbi1pb3MtYXJyb3ctZG93bjpiZWZvcmUge1xuICBmb250LXNpemU6IDEuNXJlbSAhaW1wb3J0YW50O1xuICBmb250LXdlaWdodDogNjAwICFpbXBvcnRhbnQ7XG59XG5cbi5pdGVtIHtcbiAgcGFkZGluZzogMHB4IDBweCAhaW1wb3J0YW50O1xuICAtLWJhY2tncm91bmQ6IC0taW9uLWNvbG9yLXNlY29uZGFyeTtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4uaXRlbSBpb24taWNvbltpdGVtLXJpZ2h0XSB7XG4gIG1hcmdpbjogMCAhaW1wb3J0YW50O1xufVxuXG4uaXRlbSA+IGlvbi1pY29uLCAuaXRlbS1pbm5lciA+IGlvbi1pY29uIHtcbiAgbWluLWhlaWdodDogMS44cmVtO1xuICBmb250LXNpemU6IDEuMnJlbTtcbiAgbGluZS1oZWlnaHQ6IDE7XG59XG5cbi5hY2NvcmRpYW5Db250ZW50IHtcbiAgcGFkZGluZzogMHB4IDI1cHg7XG4gIGNvbG9yOiAjMDAyZDNkO1xufVxuXG4uZGl2LXBhZGRpbmcge1xuICBwYWRkaW5nOiAxMHB4IDA7XG59XG5cbi5sYmwtaGVhZGVyIHtcbiAgcGFkZGluZzogMDtcbiAgZm9udC1mYW1pbHk6IEFnZW5kYS1SZWd1bGFyO1xuICBjb2xvcjogLS1pb24tY29sb3Itc2Vjb25kYXJ5O1xuICBmb250LXNpemU6IDFyZW07XG4gIGxpbmUtaGVpZ2h0OiAyNHB4O1xuICBtYXJnaW46IDA7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG5cbi5sYmwtY29udGVudCB7XG4gIHBhZGRpbmc6IDA7XG4gIGZvbnQtZmFtaWx5OiBBZ2VuZGEtUmVndWxhcjtcbiAgY29sb3I6IC0taW9uLWNvbG9yLXNlY29uZGFyeTtcbiAgZm9udC1zaXplOiAxcmVtO1xuICBsaW5lLWhlaWdodDogMjRweDtcbiAgbWFyZ2luOiAwO1xuICBmb250LXdlaWdodDogNDAwO1xufVxuXG5pb24tbGFiZWwge1xuICBtYXJnaW46IDBweCAhaW1wb3J0YW50O1xufVxuXG5zZWN0aW9uIGlvbi1yb3cge1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgY29sb3IgIzAwMmQzZDtcbiAgbWFyZ2luLXRvcDogNXB4O1xufVxuXG5zZWN0aW9uIGlvbi1yb3c6bGFzdC1jaGlsZCB7XG4gIGJvcmRlci1ib3R0b206IG5vbmU7XG59XG5cbi5mb250X3NpemVfMTQge1xuICBmb250LXNpemU6IDAuOHJlbSAhaW1wb3J0YW50O1xufVxuXG5wIHtcbiAgbWFyZ2luLXRvcDogNXB4O1xuICBtYXJnaW4tYm90dG9tOiAycHg7XG59XG5cbmlvbi1yb3cge1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiYSgwLCA0NSwgNjEsIDAuMyk7XG59XG5cbmlvbi1saXN0IGlvbi1yb3c6bGFzdC1jaGlsZCB7XG4gIGJvcmRlci1ib3R0b206IG5vbmU7XG59XG5cbmlvbi1pdGVtIHtcbiAgYmFja2dyb3VuZDogIzAwMmQzZDtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LXNpemU6IDEwcHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBsaW5lLWhlaWdodDogMjBweDtcbiAgd2lkdGg6IDEwMCU7XG4gIG1pbi1oZWlnaHQ6IDNyZW07XG4gIHBhZGRpbmc6IDhweDtcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG59Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ })

}]);
//# sourceMappingURL=src_app_pages_fund-details_fund-details_module_ts.js.map