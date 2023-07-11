"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_plan-descriptions_plan-descriptions_module_ts"],{

/***/ 41286:
/*!*****************************************************************************!*\
  !*** ./src/app/pages/plan-descriptions/plan-descriptions-routing.module.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PlanDescriptionsPageRoutingModule": () => (/* binding */ PlanDescriptionsPageRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _plan_descriptions_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./plan-descriptions.page */ 88725);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);




const routes = [{
  path: '',
  component: _plan_descriptions_page__WEBPACK_IMPORTED_MODULE_0__.PlanDescriptionsPage
}];
class PlanDescriptionsPageRoutingModule {}
PlanDescriptionsPageRoutingModule.ɵfac = function PlanDescriptionsPageRoutingModule_Factory(t) {
  return new (t || PlanDescriptionsPageRoutingModule)();
};
PlanDescriptionsPageRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
  type: PlanDescriptionsPageRoutingModule
});
PlanDescriptionsPageRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](PlanDescriptionsPageRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
})();

/***/ }),

/***/ 51911:
/*!*********************************************************************!*\
  !*** ./src/app/pages/plan-descriptions/plan-descriptions.module.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PlanDescriptionsPageModule": () => (/* binding */ PlanDescriptionsPageModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ 38699);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _plan_descriptions_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./plan-descriptions-routing.module */ 41286);
/* harmony import */ var _plan_descriptions_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./plan-descriptions.page */ 88725);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);







class PlanDescriptionsPageModule {}
PlanDescriptionsPageModule.ɵfac = function PlanDescriptionsPageModule_Factory(t) {
  return new (t || PlanDescriptionsPageModule)();
};
PlanDescriptionsPageModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
  type: PlanDescriptionsPageModule
});
PlanDescriptionsPageModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__.TranslateModule, _plan_descriptions_routing_module__WEBPACK_IMPORTED_MODULE_0__.PlanDescriptionsPageRoutingModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](PlanDescriptionsPageModule, {
    declarations: [_plan_descriptions_page__WEBPACK_IMPORTED_MODULE_1__.PlanDescriptionsPage],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__.TranslateModule, _plan_descriptions_routing_module__WEBPACK_IMPORTED_MODULE_0__.PlanDescriptionsPageRoutingModule]
  });
})();

/***/ }),

/***/ 88725:
/*!*******************************************************************!*\
  !*** ./src/app/pages/plan-descriptions/plan-descriptions.page.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PlanDescriptionsPage": () => (/* binding */ PlanDescriptionsPage)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _services_translate_config_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/translate-config.service */ 45340);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ 38699);
/* harmony import */ var src_providers_utils_utils_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/providers/utils/utils.service */ 30423);
/* harmony import */ var src_providers_logger_service_logger_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/providers/logger-service/logger-service */ 9999);
/* harmony import */ var src_providers_utils_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/providers/utils/config */ 43485);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 93819);








function PlanDescriptionsPage_section_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "section", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "ion-spinner", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
function PlanDescriptionsPage_div_13_p_23_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "p", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r2.planDescriptionData.payorName);
  }
}
function PlanDescriptionsPage_div_13_p_24_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "p", 16);
  }
}
function PlanDescriptionsPage_div_13_p_30_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "p", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx_r4.planDescriptionData.paymentDetails, "");
  }
}
function PlanDescriptionsPage_div_13_p_31_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "p", 16);
  }
}
function PlanDescriptionsPage_div_13_p_37_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "p", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r6.planDescriptionData.paidToDate);
  }
}
function PlanDescriptionsPage_div_13_p_38_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "p", 16);
  }
}
function PlanDescriptionsPage_div_13_p_44_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "p", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r8.planDescriptionData.expiryDate);
  }
}
function PlanDescriptionsPage_div_13_p_45_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "p", 16);
  }
}
function PlanDescriptionsPage_div_13_p_51_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "p", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx_r10.planDescriptionData.initialSumAssured, "");
  }
}
function PlanDescriptionsPage_div_13_p_52_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "p", 16);
  }
}
function PlanDescriptionsPage_div_13_p_58_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "p", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx_r12.planDescriptionData.currentSumAssured, "");
  }
}
function PlanDescriptionsPage_div_13_p_59_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "p", 16);
  }
}
function PlanDescriptionsPage_div_13_p_65_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "p", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r14.planDescriptionData.premium);
  }
}
function PlanDescriptionsPage_div_13_p_66_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "p", 16);
  }
}
function PlanDescriptionsPage_div_13_p_72_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "p", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("", ctx_r16.planDescriptionData.premiumType, " ");
  }
}
function PlanDescriptionsPage_div_13_p_73_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "p", 16);
  }
}
function PlanDescriptionsPage_div_13_p_79_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "p", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx_r18.planDescriptionData.paymentFrequency, "");
  }
}
function PlanDescriptionsPage_div_13_p_80_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "p", 16);
  }
}
function PlanDescriptionsPage_div_13_p_86_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "p", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx_r20.planDescriptionData.commencementDate, "");
  }
}
function PlanDescriptionsPage_div_13_p_87_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "p", 16);
  }
}
function PlanDescriptionsPage_div_13_p_93_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "p", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx_r22.planDescriptionData.surrenderDate, "");
  }
}
function PlanDescriptionsPage_div_13_p_94_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "p", 16);
  }
}
function PlanDescriptionsPage_div_13_p_100_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "p", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx_r24.planDescriptionData.cashValueEffectiveDate, "");
  }
}
function PlanDescriptionsPage_div_13_p_101_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "p", 16);
  }
}
function PlanDescriptionsPage_div_13_p_107_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "p", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r26.planDescriptionData.cashValue);
  }
}
function PlanDescriptionsPage_div_13_p_108_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "p", 16);
  }
}
function PlanDescriptionsPage_div_13_p_114_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "p", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx_r28.planDescriptionData.outstandingAutomaticPremiumLoan, "");
  }
}
function PlanDescriptionsPage_div_13_p_115_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "p", 16);
  }
}
function PlanDescriptionsPage_div_13_p_121_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "p", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx_r30.planDescriptionData.outstandingPolicyLoan, "");
  }
}
function PlanDescriptionsPage_div_13_p_122_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "p", 16);
  }
}
function PlanDescriptionsPage_div_13_p_128_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "p", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("", ctx_r32.planDescriptionData.bonusBalance, " ");
  }
}
function PlanDescriptionsPage_div_13_p_129_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "p", 16);
  }
}
function PlanDescriptionsPage_div_13_ion_row_130_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "ion-row")(1, "div", 18)(2, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3, "*Only entitled for participating plans. For the calculation or for more info, do contact us at ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "a", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5, "1300-88-5055");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6, " / ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "a", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8, "wecare@sunlifemalaysia.com");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](10, "** The indicated Cash Value is just an estimation. Actual value will be based on the effective date of surrender as updated in our system");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](12, "*** The current sum assured/covered does not include any single top up or partial withdrawal amount. The Death / TPD benefit payout of this plan is higher of Investment Account Value OR Death/TPD sum assured/covered +95% Single Top Up amount \u2013 100% of any withdrawal amount ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
  }
}
function PlanDescriptionsPage_div_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div")(1, "ion-list", 13)(2, "ion-row")(3, "div", 14)(4, "p", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](6, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "p", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](9, "p", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "ion-row")(11, "div", 14)(12, "p", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](14, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](15, "p", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](17, "p", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](18, "ion-row")(19, "div", 14)(20, "p", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](22, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](23, PlanDescriptionsPage_div_13_p_23_Template, 2, 1, "p", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](24, PlanDescriptionsPage_div_13_p_24_Template, 1, 0, "p", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](25, "ion-row")(26, "div", 14)(27, "p", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](28);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](29, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](30, PlanDescriptionsPage_div_13_p_30_Template, 2, 1, "p", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](31, PlanDescriptionsPage_div_13_p_31_Template, 1, 0, "p", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](32, "ion-row")(33, "div", 14)(34, "p", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](35);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](36, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](37, PlanDescriptionsPage_div_13_p_37_Template, 2, 1, "p", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](38, PlanDescriptionsPage_div_13_p_38_Template, 1, 0, "p", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](39, "ion-row")(40, "div", 14)(41, "p", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](42);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](43, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](44, PlanDescriptionsPage_div_13_p_44_Template, 2, 1, "p", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](45, PlanDescriptionsPage_div_13_p_45_Template, 1, 0, "p", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](46, "ion-row")(47, "div", 14)(48, "p", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](49);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](50, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](51, PlanDescriptionsPage_div_13_p_51_Template, 2, 1, "p", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](52, PlanDescriptionsPage_div_13_p_52_Template, 1, 0, "p", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](53, "ion-row")(54, "div", 14)(55, "p", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](56);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](57, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](58, PlanDescriptionsPage_div_13_p_58_Template, 2, 1, "p", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](59, PlanDescriptionsPage_div_13_p_59_Template, 1, 0, "p", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](60, "ion-row")(61, "div", 14)(62, "p", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](63);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](64, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](65, PlanDescriptionsPage_div_13_p_65_Template, 2, 1, "p", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](66, PlanDescriptionsPage_div_13_p_66_Template, 1, 0, "p", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](67, "ion-row")(68, "div", 14)(69, "p", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](70);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](71, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](72, PlanDescriptionsPage_div_13_p_72_Template, 2, 1, "p", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](73, PlanDescriptionsPage_div_13_p_73_Template, 1, 0, "p", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](74, "ion-row")(75, "div", 14)(76, "p", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](77);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](78, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](79, PlanDescriptionsPage_div_13_p_79_Template, 2, 1, "p", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](80, PlanDescriptionsPage_div_13_p_80_Template, 1, 0, "p", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](81, "ion-row")(82, "div", 14)(83, "p", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](84);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](85, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](86, PlanDescriptionsPage_div_13_p_86_Template, 2, 1, "p", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](87, PlanDescriptionsPage_div_13_p_87_Template, 1, 0, "p", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](88, "ion-row")(89, "div", 14)(90, "p", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](91);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](92, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](93, PlanDescriptionsPage_div_13_p_93_Template, 2, 1, "p", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](94, PlanDescriptionsPage_div_13_p_94_Template, 1, 0, "p", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](95, "ion-row")(96, "div", 14)(97, "p", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](98);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](99, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](100, PlanDescriptionsPage_div_13_p_100_Template, 2, 1, "p", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](101, PlanDescriptionsPage_div_13_p_101_Template, 1, 0, "p", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](102, "ion-row")(103, "div", 14)(104, "p", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](105);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](106, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](107, PlanDescriptionsPage_div_13_p_107_Template, 2, 1, "p", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](108, PlanDescriptionsPage_div_13_p_108_Template, 1, 0, "p", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](109, "ion-row")(110, "div", 14)(111, "p", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](112);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](113, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](114, PlanDescriptionsPage_div_13_p_114_Template, 2, 1, "p", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](115, PlanDescriptionsPage_div_13_p_115_Template, 1, 0, "p", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](116, "ion-row")(117, "div", 14)(118, "p", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](119);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](120, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](121, PlanDescriptionsPage_div_13_p_121_Template, 2, 1, "p", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](122, PlanDescriptionsPage_div_13_p_122_Template, 1, 0, "p", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](123, "ion-row")(124, "div", 14)(125, "p", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](126);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](127, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](128, PlanDescriptionsPage_div_13_p_128_Template, 2, 1, "p", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](129, PlanDescriptionsPage_div_13_p_129_Template, 1, 0, "p", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](130, PlanDescriptionsPage_div_13_ion_row_130_Template, 13, 0, "ion-row", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](6, 53, "plan_descriptions.policy_status"));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("", ctx_r1.planDescriptionData.policyStatus, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](14, 55, "plan_descriptions.payment_method"));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r1.planDescriptionData.paymentMethod);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](22, 57, "plan_descriptions.payor_name"));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r1.planDescriptionData.payorName);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx_r1.planDescriptionData.payorName);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](29, 59, "plan_descriptions.payment_details"));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r1.planDescriptionData.paymentDetails);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx_r1.planDescriptionData.paymentDetails);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](36, 61, "plan_descriptions.paid_to_date"));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r1.planDescriptionData.paidToDate);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx_r1.planDescriptionData.paidToDate);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](43, 63, "plan_descriptions.maturity_date"));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r1.planDescriptionData.expiryDate);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx_r1.planDescriptionData.expiryDate);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](50, 65, "plan_descriptions.initial_sum_assured"));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r1.planDescriptionData.initialSumAssured);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx_r1.planDescriptionData.initialSumAssured);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](57, 67, "plan_descriptions.current_sum_assured"));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r1.planDescriptionData.currentSumAssured);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx_r1.planDescriptionData.currentSumAssured);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](64, 69, "plan_descriptions.premium"));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r1.planDescriptionData.premium);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx_r1.planDescriptionData.premium);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](71, 71, "plan_descriptions.premium_type"));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r1.planDescriptionData.premiumType);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx_r1.planDescriptionData.premiumType);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](78, 73, "plan_descriptions.payment_frequency"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r1.planDescriptionData.paymentFrequency);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx_r1.planDescriptionData.paymentFrequency);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](85, 75, "plan_descriptions.commencement_date"));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r1.planDescriptionData.commencementDate);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx_r1.planDescriptionData.commencementDate);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](92, 77, "plan_descriptions.surrender_date"));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r1.planDescriptionData.surrenderDate);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx_r1.planDescriptionData.surrenderDate);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](99, 79, "plan_descriptions.cash_value_effective_date"));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r1.planDescriptionData.cashValueEffectiveDate);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx_r1.planDescriptionData.cashValueEffectiveDate);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](106, 81, "plan_descriptions.cash_value"));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r1.planDescriptionData.cashValue);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx_r1.planDescriptionData.cashValue);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](113, 83, "plan_descriptions.outstanding_premium_loan"));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r1.planDescriptionData.outstandingAutomaticPremiumLoan);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx_r1.planDescriptionData.outstandingAutomaticPremiumLoan);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](120, 85, "plan_descriptions.outstanding_policy_loan"));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r1.planDescriptionData.outstandingPolicyLoan);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx_r1.planDescriptionData.outstandingPolicyLoan);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](127, 87, "plan_descriptions.bonus_balance"));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r1.planDescriptionData.bonusBalance);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx_r1.planDescriptionData.bonusBalance);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r1.planName === "SunInvest" || ctx_r1.planName === "SunInvest-i");
  }
}
const _c0 = function (a0, a1) {
  return {
    "bg-conventional": a0,
    "bg-takaful": a1
  };
};
class PlanDescriptionsPage {
  constructor(translateConfigService, translate, utils, logger, config) {
    this.translateConfigService = translateConfigService;
    this.translate = translate;
    this.utils = utils;
    this.logger = logger;
    this.config = config;
    this.planDescriptionData = null;
    this.selectedLanguage = this.translateConfigService.getDefaultLanguage();
    this.translateConfigService.setLanguage('en');
    this.config.currentPage.pageName = "PlanDescriptionsPage";
    this.policyData = history.state.policyDetailsData;
    this.planDescriptionData = this.policyData['planDescription'];
    this.planName = this.policyData.planDescription.plan;
    this.planType = this.planDescriptionData['planType'];
    this.policyNo = this.planDescriptionData['policyNo'];
    this.utils.analytics("planDescriptions");
    this.errorMsg = this.translate.instant('generic_msgs.no_data');
  }
  ionViewDidLoad() {
    this.logger.log('ionViewDidLoad PlanDescriptionsPage');
  }
}
PlanDescriptionsPage.ɵfac = function PlanDescriptionsPage_Factory(t) {
  return new (t || PlanDescriptionsPage)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_services_translate_config_service__WEBPACK_IMPORTED_MODULE_0__.TranslateConfigService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__.TranslateService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_providers_utils_utils_service__WEBPACK_IMPORTED_MODULE_1__.UtilService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_providers_logger_service_logger_service__WEBPACK_IMPORTED_MODULE_2__.LoggerServiceProvider), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_providers_utils_config__WEBPACK_IMPORTED_MODULE_3__.ConfigProvider));
};
PlanDescriptionsPage.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
  type: PlanDescriptionsPage,
  selectors: [["app-plan-descriptions"]],
  decls: 14,
  vars: 10,
  consts: [["mode", "ios"], ["color", "primary", 2, "border-bottom", "3px solid white"], ["slot", "start"], ["text", "", "icon", "chevron-back-outline", 2, "padding-left", "15px", "font-size", "0.7rem"], [1, "bold-font"], ["color", "primary", 1, "tabs"], [2, "margin-bottom", "5px", 3, "ngClass"], [1, "sub-header"], [1, "app_bg2", "ion-padding"], ["class", "spinnersection ion-text-center", 4, "ngIf"], [4, "ngIf"], [1, "spinnersection", "ion-text-center"], ["name", "lines-sharp-small", 2, "height", "98%"], [1, "white_container_border_radius", "text_color_base", "ion-padding"], [1, "margin_top_bottom_auto", "div-padding"], [1, "lbl-header"], [1, "lbl-content"], ["class", "lbl-content", 4, "ngIf"], [1, "notes"], [1, "point"], ["href", "tel:1300-88-5055"], ["href", "mailto:wecare@sunlifemalaysia.com"]],
  template: function PlanDescriptionsPage_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "ion-header", 0)(1, "ion-toolbar", 1)(2, "ion-buttons", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](3, "ion-back-button", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "ion-title", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "ion-toolbar", 5)(7, "ion-row", 6)(8, "ion-label", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](9);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](10, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "ion-content", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](12, PlanDescriptionsPage_section_12_Template, 2, 0, "section", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](13, PlanDescriptionsPage_div_13_Template, 131, 89, "div", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx.planDescriptionData.policyNumber);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction2"](7, _c0, ctx.planType === "Conventional", ctx.planType !== "Conventional"));
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](10, 5, "plan_descriptions.title"));
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx.planDescriptionData);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.planDescriptionData);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonBackButton, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonButtons, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonContent, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonHeader, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonLabel, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonList, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonRow, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonSpinner, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonTitle, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonToolbar, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonBackButtonDelegate, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__.TranslatePipe],
  styles: [".app_bg2[_ngcontent-%COMP%] {\n  --background: url('app_bg_2.jpg') no-repeat center center / cover;\n  background-size: cover;\n  background-repeat: no-repeat;\n  height: 100%;\n  background-position: bottom;\n}\n\n.list[_ngcontent-%COMP%] {\n  padding: 0px 15px;\n}\n\n.row[_ngcontent-%COMP%] {\n  margin-bottom: 5px;\n}\n\nion-row[_ngcontent-%COMP%] {\n  border-bottom: 1px solid rgba(0, 45, 61, 0.3);\n}\n\nion-list[_ngcontent-%COMP%]   ion-row[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n}\n\n.scroll-content[_ngcontent-%COMP%] {\n  padding: 15px !important;\n}\n\n.div-padding[_ngcontent-%COMP%] {\n  padding: 15px 0;\n}\n\n.lbl-header[_ngcontent-%COMP%] {\n  padding: 0;\n  font-family: agenda-semibold;\n  color: --ion-color-secondary;\n  font-size: 1rem;\n  line-height: 24px;\n  margin: 0;\n  font-weight: 400;\n}\n\n.lbl-content[_ngcontent-%COMP%] {\n  padding: 0;\n  font-family: Agenda-Regular;\n  color: --ion-color-secondary;\n  font-size: 1rem;\n  line-height: 24px;\n  margin: 0;\n  font-weight: 400;\n}\n\n.notes[_ngcontent-%COMP%] {\n  font-size: 12px;\n  padding: 16px 0 24px;\n}\n.notes[_ngcontent-%COMP%]   .point[_ngcontent-%COMP%] {\n  margin-top: 8px;\n}\n\n.sub-header[_ngcontent-%COMP%] {\n  color: #ffffff;\n  padding: 10px 25px !important;\n  margin: 0px !important;\n  font-size: 1.1rem !important;\n  font-family: Agenda-Regular;\n}\n\n.tabs[_ngcontent-%COMP%] {\n  border-top: 3px solid color white;\n  --padding-top: -4px;\n  --padding-start: -4px;\n  --padding-end: -4px;\n  --min-height: 44px;\n}\n\n.white_container_border_radius[_ngcontent-%COMP%] {\n  background-color: rgba(255, 255, 255, 0.7) !important;\n  border-radius: 15px !important;\n  padding: 15px;\n}\n\n.text_color_base[_ngcontent-%COMP%] {\n  color: #002d3d !important;\n}\n\n.margin_top_bottom_auto[_ngcontent-%COMP%] {\n  margin-top: auto;\n  margin-bottom: auto;\n}\n\n.spinnersection[_ngcontent-%COMP%] {\n  display: block;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  font-size: 1.3rem;\n  height: 98%;\n}\n\np[_ngcontent-%COMP%] {\n  margin-top: 5px;\n  margin-bottom: 2px;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcGFnZXMvcGxhbi1kZXNjcmlwdGlvbnMvcGxhbi1kZXNjcmlwdGlvbnMucGFnZS5zY3NzIiwid2VicGFjazovLy4vLi4vLi4vLi4vQWxsJTIwUHJvamVjdHMvTWFsYXlzaWFfQ2xpZW50QXBwX1JldmFtcC9TdW5BY2Nlc3NfSW9uaWM2X1JldmFtcC9zcmMvYXBwL3BhZ2VzL3BsYW4tZGVzY3JpcHRpb25zL3BsYW4tZGVzY3JpcHRpb25zLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGlFQUFBO0VBQ0Esc0JBQUE7RUFDQSw0QkFBQTtFQUNBLFlBQUE7RUFDQSwyQkFBQTtBQ0NGOztBRGFHO0VBQ0ksaUJBQUE7QUNWUDs7QURrQkU7RUFFRSxrQkFBQTtBQ2hCSjs7QURrQkU7RUFDRSw2Q0FBQTtBQ2ZKOztBRG1CRTtFQUNFLG1CQUFBO0FDaEJKOztBRGtCRztFQUNHLHdCQUFBO0FDZk47O0FEaUJFO0VBQ0csZUFBQTtBQ2RMOztBRGdCRTtFQUNHLFVBQUE7RUFDQSw0QkFBQTtFQUNBLDRCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsU0FBQTtFQUNBLGdCQUFBO0FDYkw7O0FEZ0JFO0VBQ0ksVUFBQTtFQUNBLDJCQUFBO0VBQ0EsNEJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxTQUFBO0VBQ0EsZ0JBQUE7QUNiTjs7QURlRTtFQUNJLGVBQUE7RUFDQSxvQkFBQTtBQ1pOO0FEYU07RUFDSSxlQUFBO0FDWFY7O0FEY0E7RUFDRSxjQUFBO0VBRUEsNkJBQUE7RUFDQSxzQkFBQTtFQUNBLDRCQUFBO0VBQ0EsMkJBQUE7QUNaRjs7QURlQTtFQUNFLGlDQUFBO0VBQ0UsbUJBQUE7RUFDQSxxQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUNaSjs7QURjQTtFQUNFLHFEQUFBO0VBQ0EsOEJBQUE7RUFDQSxhQUFBO0FDWEY7O0FEY0E7RUFDRSx5QkFBQTtBQ1hGOztBRGFBO0VBQ0UsZ0JBQUE7RUFDQSxtQkFBQTtBQ1ZGOztBRFlBO0VBQ0UsY0FBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0EsV0FBQTtBQ1RGOztBRFdBO0VBQ0UsZUFBQTtFQUNBLGtCQUFBO0FDUkYiLCJzb3VyY2VzQ29udGVudCI6WyIuYXBwX2JnMiB7XHJcbiAgLS1iYWNrZ3JvdW5kOiB1cmwoLi4vLi4vLi4vYXNzZXRzL2ltZ3MvYXBwX2JnXzIuanBnKSBuby1yZXBlYXQgY2VudGVyIGNlbnRlciAvIGNvdmVyO1xyXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogYm90dG9tO1xyXG59XHJcbiAgLy8gaW9uLWxpc3QgLmxhYmVse1xyXG4gIC8vICAgICBtYXJnaW46MHB4O1xyXG4gIC8vICAgICBmb250LXNpemU6IDEuNHJlbTtcclxuICAvLyAgICAgbGluZS1oZWlnaHQ6IDI0cHg7XHJcbiAgLy8gICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgLy8gICAgIGZvbnQtZmFtaWx5OiBBZ2VuZGEtUmVndWxhcjtcclxuICAvLyAgICAgY29sb3I6IC0taW9uLWNvbG9yLXNlY29uZGFyeTtcclxuICAvLyAgICAgcGFkZGluZzogMTAwcHggMHB4O1xyXG4gIC8vICAgICB3aWR0aDoxMDAlO1xyXG5cclxuICAvLyAgfVxyXG5cclxuICAgLmxpc3R7XHJcbiAgICAgICBwYWRkaW5nOiAwcHggMTVweDtcclxuICAgfVxyXG5cclxuICAvLyAgaW9uLWxpc3QgaW9uLXJvd3tcclxuICAvLyAgICAgIHBhZGRpbmc6IDA7XHJcbiAgLy8gICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgY29sb3IgIzAwMmQzZDtcclxuICAvLyAgICAgIG1hcmdpbi10b3A6IDVweDtcclxuICAvLyAgfVxyXG4gIC5yb3d7XHJcbiAgICAvLyBiYWNrZ3JvdW5kOiAjMDAyZDNkO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNXB4O1xyXG4gIH1cclxuICBpb24tcm93IHtcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKDAsIDQ1LCA2MSwgLjMpO1xyXG4gICAgLy9tYXJnaW4tdG9wOiA1cHg7XHJcbiAgfVxyXG5cclxuICBpb24tbGlzdCBpb24tcm93Omxhc3QtY2hpbGR7XHJcbiAgICBib3JkZXItYm90dG9tOiBub25lO1xyXG4gIH1cclxuICAgLnNjcm9sbC1jb250ZW50IHtcclxuICAgICAgcGFkZGluZzogMTVweCAhaW1wb3J0YW50O1xyXG4gIH1cclxuICAuZGl2LXBhZGRpbmd7XHJcbiAgICAgcGFkZGluZzogMTVweCAwO1xyXG4gIH1cclxuICAubGJsLWhlYWRlcntcclxuICAgICBwYWRkaW5nOiAwO1xyXG4gICAgIGZvbnQtZmFtaWx5OiBhZ2VuZGEtc2VtaWJvbGQ7XHJcbiAgICAgY29sb3I6ICAtLWlvbi1jb2xvci1zZWNvbmRhcnk7XHJcbiAgICAgZm9udC1zaXplOiAxLjByZW07XHJcbiAgICAgbGluZS1oZWlnaHQ6IDI0cHg7XHJcbiAgICAgbWFyZ2luOiAwO1xyXG4gICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgfVxyXG5cclxuICAubGJsLWNvbnRlbnR7XHJcbiAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgIGZvbnQtZmFtaWx5OiBBZ2VuZGEtUmVndWxhcjtcclxuICAgICAgY29sb3I6ICAtLWlvbi1jb2xvci1zZWNvbmRhcnk7XHJcbiAgICAgIGZvbnQtc2l6ZTogMS4wcmVtO1xyXG4gICAgICBsaW5lLWhlaWdodDogMjRweDtcclxuICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICBmb250LXdlaWdodDogNDAwO1xyXG4gIH1cclxuICAubm90ZXMge1xyXG4gICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgIHBhZGRpbmc6IDE2cHggMCAyNHB4O1xyXG4gICAgICAucG9pbnQge1xyXG4gICAgICAgICAgbWFyZ2luLXRvcDogOHB4O1xyXG4gICAgICB9XHJcbiAgfVxyXG4uc3ViLWhlYWRlciB7XHJcbiAgY29sb3I6ICNmZmZmZmY7XHJcblxyXG4gIHBhZGRpbmc6IDEwcHggMjVweCAhaW1wb3J0YW50O1xyXG4gIG1hcmdpbjogMHB4ICFpbXBvcnRhbnQ7XHJcbiAgZm9udC1zaXplOiAxLjFyZW0gIWltcG9ydGFudDtcclxuICBmb250LWZhbWlseTogQWdlbmRhLVJlZ3VsYXI7XHJcbiAgLy9saW5lLWhlaWdodDogMjRweDs7XHJcbn1cclxuLnRhYnN7XHJcbiAgYm9yZGVyLXRvcDogM3B4IHNvbGlkIGNvbG9yIHdoaXRlO1xyXG4gICAgLS1wYWRkaW5nLXRvcDogLTRweDtcclxuICAgIC0tcGFkZGluZy1zdGFydDogLTRweDtcclxuICAgIC0tcGFkZGluZy1lbmQ6IC00cHg7XHJcbiAgICAtLW1pbi1oZWlnaHQ6IDQ0cHg7XHJcbn1cclxuLndoaXRlX2NvbnRhaW5lcl9ib3JkZXJfcmFkaXVzIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNykgIWltcG9ydGFudDtcclxuICBib3JkZXItcmFkaXVzOiAxNXB4ICFpbXBvcnRhbnQ7XHJcbiAgcGFkZGluZzogMTVweDtcclxuXHJcbn1cclxuLnRleHRfY29sb3JfYmFzZSB7XHJcbiAgY29sb3I6ICMwMDJkM2QgIWltcG9ydGFudDtcclxufVxyXG4ubWFyZ2luX3RvcF9ib3R0b21fYXV0byB7XHJcbiAgbWFyZ2luLXRvcDogYXV0bztcclxuICBtYXJnaW4tYm90dG9tOiBhdXRvO1xyXG59XHJcbi5zcGlubmVyc2VjdGlvbiB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGZvbnQtc2l6ZTogMS4zcmVtO1xyXG4gIGhlaWdodDogOTglO1xyXG59XHJcbnB7XHJcbiAgbWFyZ2luLXRvcDogNXB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDJweDtcclxufVxyXG5cclxuIiwiLmFwcF9iZzIge1xuICAtLWJhY2tncm91bmQ6IHVybCguLi8uLi8uLi9hc3NldHMvaW1ncy9hcHBfYmdfMi5qcGcpIG5vLXJlcGVhdCBjZW50ZXIgY2VudGVyIC8gY292ZXI7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGhlaWdodDogMTAwJTtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogYm90dG9tO1xufVxuXG4ubGlzdCB7XG4gIHBhZGRpbmc6IDBweCAxNXB4O1xufVxuXG4ucm93IHtcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xufVxuXG5pb24tcm93IHtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoMCwgNDUsIDYxLCAwLjMpO1xufVxuXG5pb24tbGlzdCBpb24tcm93Omxhc3QtY2hpbGQge1xuICBib3JkZXItYm90dG9tOiBub25lO1xufVxuXG4uc2Nyb2xsLWNvbnRlbnQge1xuICBwYWRkaW5nOiAxNXB4ICFpbXBvcnRhbnQ7XG59XG5cbi5kaXYtcGFkZGluZyB7XG4gIHBhZGRpbmc6IDE1cHggMDtcbn1cblxuLmxibC1oZWFkZXIge1xuICBwYWRkaW5nOiAwO1xuICBmb250LWZhbWlseTogYWdlbmRhLXNlbWlib2xkO1xuICBjb2xvcjogLS1pb24tY29sb3Itc2Vjb25kYXJ5O1xuICBmb250LXNpemU6IDFyZW07XG4gIGxpbmUtaGVpZ2h0OiAyNHB4O1xuICBtYXJnaW46IDA7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG59XG5cbi5sYmwtY29udGVudCB7XG4gIHBhZGRpbmc6IDA7XG4gIGZvbnQtZmFtaWx5OiBBZ2VuZGEtUmVndWxhcjtcbiAgY29sb3I6IC0taW9uLWNvbG9yLXNlY29uZGFyeTtcbiAgZm9udC1zaXplOiAxcmVtO1xuICBsaW5lLWhlaWdodDogMjRweDtcbiAgbWFyZ2luOiAwO1xuICBmb250LXdlaWdodDogNDAwO1xufVxuXG4ubm90ZXMge1xuICBmb250LXNpemU6IDEycHg7XG4gIHBhZGRpbmc6IDE2cHggMCAyNHB4O1xufVxuLm5vdGVzIC5wb2ludCB7XG4gIG1hcmdpbi10b3A6IDhweDtcbn1cblxuLnN1Yi1oZWFkZXIge1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgcGFkZGluZzogMTBweCAyNXB4ICFpbXBvcnRhbnQ7XG4gIG1hcmdpbjogMHB4ICFpbXBvcnRhbnQ7XG4gIGZvbnQtc2l6ZTogMS4xcmVtICFpbXBvcnRhbnQ7XG4gIGZvbnQtZmFtaWx5OiBBZ2VuZGEtUmVndWxhcjtcbn1cblxuLnRhYnMge1xuICBib3JkZXItdG9wOiAzcHggc29saWQgY29sb3Igd2hpdGU7XG4gIC0tcGFkZGluZy10b3A6IC00cHg7XG4gIC0tcGFkZGluZy1zdGFydDogLTRweDtcbiAgLS1wYWRkaW5nLWVuZDogLTRweDtcbiAgLS1taW4taGVpZ2h0OiA0NHB4O1xufVxuXG4ud2hpdGVfY29udGFpbmVyX2JvcmRlcl9yYWRpdXMge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNykgIWltcG9ydGFudDtcbiAgYm9yZGVyLXJhZGl1czogMTVweCAhaW1wb3J0YW50O1xuICBwYWRkaW5nOiAxNXB4O1xufVxuXG4udGV4dF9jb2xvcl9iYXNlIHtcbiAgY29sb3I6ICMwMDJkM2QgIWltcG9ydGFudDtcbn1cblxuLm1hcmdpbl90b3BfYm90dG9tX2F1dG8ge1xuICBtYXJnaW4tdG9wOiBhdXRvO1xuICBtYXJnaW4tYm90dG9tOiBhdXRvO1xufVxuXG4uc3Bpbm5lcnNlY3Rpb24ge1xuICBkaXNwbGF5OiBibG9jaztcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMS4zcmVtO1xuICBoZWlnaHQ6IDk4JTtcbn1cblxucCB7XG4gIG1hcmdpbi10b3A6IDVweDtcbiAgbWFyZ2luLWJvdHRvbTogMnB4O1xufSJdLCJzb3VyY2VSb290IjoiIn0= */"]
});

/***/ })

}]);
//# sourceMappingURL=src_app_pages_plan-descriptions_plan-descriptions_module_ts.js.map