"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_fund-allocation_fund-allocation_module_ts"],{

/***/ 68307:
/*!*************************************************************************!*\
  !*** ./src/app/pages/fund-allocation/fund-allocation-routing.module.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FundAllocationPageRoutingModule": () => (/* binding */ FundAllocationPageRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _fund_allocation_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fund-allocation.page */ 81931);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);




const routes = [{
  path: '',
  component: _fund_allocation_page__WEBPACK_IMPORTED_MODULE_0__.FundAllocationPage
}];
class FundAllocationPageRoutingModule {}
FundAllocationPageRoutingModule.ɵfac = function FundAllocationPageRoutingModule_Factory(t) {
  return new (t || FundAllocationPageRoutingModule)();
};
FundAllocationPageRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
  type: FundAllocationPageRoutingModule
});
FundAllocationPageRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](FundAllocationPageRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
})();

/***/ }),

/***/ 91841:
/*!*****************************************************************!*\
  !*** ./src/app/pages/fund-allocation/fund-allocation.module.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FundAllocationPageModule": () => (/* binding */ FundAllocationPageModule)
/* harmony export */ });
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ 38699);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _fund_allocation_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fund-allocation-routing.module */ 68307);
/* harmony import */ var _fund_allocation_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./fund-allocation.page */ 81931);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);







class FundAllocationPageModule {}
FundAllocationPageModule.ɵfac = function FundAllocationPageModule_Factory(t) {
  return new (t || FundAllocationPageModule)();
};
FundAllocationPageModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
  type: FundAllocationPageModule
});
FundAllocationPageModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__.TranslateModule, _fund_allocation_routing_module__WEBPACK_IMPORTED_MODULE_0__.FundAllocationPageRoutingModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](FundAllocationPageModule, {
    declarations: [_fund_allocation_page__WEBPACK_IMPORTED_MODULE_1__.FundAllocationPage],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__.TranslateModule, _fund_allocation_routing_module__WEBPACK_IMPORTED_MODULE_0__.FundAllocationPageRoutingModule]
  });
})();

/***/ }),

/***/ 81931:
/*!***************************************************************!*\
  !*** ./src/app/pages/fund-allocation/fund-allocation.page.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FundAllocationPage": () => (/* binding */ FundAllocationPage)
/* harmony export */ });
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var src_app_services_translate_config_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/translate-config.service */ 45340);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ 38699);
/* harmony import */ var src_providers_logger_service_logger_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/providers/logger-service/logger-service */ 9999);
/* harmony import */ var src_providers_utils_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/providers/utils/config */ 43485);
/* harmony import */ var src_providers_utils_utils_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/providers/utils/utils.service */ 30423);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 94666);










function FundAllocationPage_section_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "section", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "ion-spinner", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r0.errorMsg);
  }
}
function FundAllocationPage_div_13_p_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "p", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r2.fundAllocationsList.name);
  }
}
function FundAllocationPage_div_13_p_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "p", 26);
  }
}
function FundAllocationPage_div_13_p_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "p", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("RM", ctx_r4.fundAllocationsList.price, "");
  }
}
function FundAllocationPage_div_13_p_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "p", 26);
  }
}
function FundAllocationPage_div_13_p_23_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "p", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r6.fundAllocationsList.units);
  }
}
function FundAllocationPage_div_13_p_24_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "p", 26);
  }
}
function FundAllocationPage_div_13_p_30_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "p", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("RM", ctx_r8.fundAllocationsList.value, "");
  }
}
function FundAllocationPage_div_13_p_31_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "p", 26);
  }
}
function FundAllocationPage_div_13_ion_label_45_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "ion-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "ion-label", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function FundAllocationPage_div_13_ion_label_45_Template_ion_label_click_3_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r13);
      const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r12.expand());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](2, 2, "fund_allocations.disclaimer_txt"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](5, 4, "fund_allocations.show_more"));
  }
}
function FundAllocationPage_div_13_span_46_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "span", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function FundAllocationPage_div_13_span_46_Template_span_click_3_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r15);
      const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r14.expand());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](2, 2, "fund_allocations.disclaimer_txt_more"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](5, 4, "fund_allocations.show_less"));
  }
}
function FundAllocationPage_div_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 13)(1, "ion-list", 14)(2, "ion-row", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function FundAllocationPage_div_13_Template_ion_row_click_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r17);
      const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r16.navigateToFundDetails(ctx_r16.fundAllocationsList));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "ion-col", 16)(4, "ion-label", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](6, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](7, FundAllocationPage_div_13_p_7_Template, 2, 1, "p", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](8, FundAllocationPage_div_13_p_8_Template, 1, 0, "p", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "ion-col", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](10, "i", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "ion-row")(12, "div", 21)(13, "p", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](15, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](16, FundAllocationPage_div_13_p_16_Template, 2, 1, "p", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](17, FundAllocationPage_div_13_p_17_Template, 1, 0, "p", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](18, "ion-row")(19, "div", 21)(20, "p", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](22, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](23, FundAllocationPage_div_13_p_23_Template, 2, 1, "p", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](24, FundAllocationPage_div_13_p_24_Template, 1, 0, "p", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](25, "ion-row")(26, "div", 21)(27, "p", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](28);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](29, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](30, FundAllocationPage_div_13_p_30_Template, 2, 1, "p", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](31, FundAllocationPage_div_13_p_31_Template, 1, 0, "p", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](32, "section", 22)(33, "ion-label", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](34);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](35, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](36, "ion-label", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](37);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](38, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](39, "ion-label", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](40);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](41, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](42, "ion-label", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](43);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](44, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](45, FundAllocationPage_div_13_ion_label_45_Template, 6, 6, "ion-label", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](46, FundAllocationPage_div_13_span_46_Template, 6, 6, "span", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](6, 18, "fund_allocations.fund_name"));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r1.fundAllocationsList.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx_r1.fundAllocationsList.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](15, 20, "fund_allocations.fund_price"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r1.fundAllocationsList.price);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx_r1.fundAllocationsList.price);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](22, 22, "fund_allocations.no_of_units"));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r1.fundAllocationsList.units);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx_r1.fundAllocationsList.units);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](29, 24, "fund_allocations.total_units_value"));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r1.fundAllocationsList.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx_r1.fundAllocationsList.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](35, 26, "fund_allocations.notes"));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](38, 28, "fund_allocations.fund_price_hint"));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](41, 30, "fund_allocations.total_units_value_hint"));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](44, 32, "fund_allocations.disclaimer"));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx_r1.isExpanded);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r1.isExpanded);
  }
}
const _c0 = function (a0, a1) {
  return {
    "bg-conventional": a0,
    "bg-takaful": a1
  };
};
class FundAllocationPage {
  constructor(translateConfigService, translate, logger, config, utils, router) {
    this.translateConfigService = translateConfigService;
    this.translate = translate;
    this.logger = logger;
    this.config = config;
    this.utils = utils;
    this.router = router;
    this.canTryAgain = false;
    this.isExpanded = false;
    this.selectedLanguage = this.translateConfigService.getDefaultLanguage();
    this.translateConfigService.setLanguage('en');
    this.isShowingLoader = true;
    this.selectedPolicyData = history.state.selectedPolicy;
    this.fundAllocationsList = history.state.fundData;
    this.selectedPlanType = this.selectedPolicyData['planType'];
    this.encryptedPolicyNo = this.selectedPolicyData['encryptedPolicyNo'];
    this.config.currentPage.pageName = "FundAllocationPage";
    this.utils.analytics("fundAllocation");
  }
  ngOnInit() {
    console.log('fire fund allocation');
    // this.expand();
    //300ms animation speed
    //console.log('ionViewDidEnter ChatPage');
  }

  ionViewWillEnter() {
    //this.scrollToBottom();
  }
  navigateToFundDetails(fund) {
    this.router.navigate(['fund-details'], {
      state: {
        selectedPolicy: this.selectedPolicyData,
        fundData: fund
      }
    });
    //this.navCtrl.push(FundDetailsPage,{selectedPolicy:this.selectedPolicyData,fundData:fund});
  }

  expand() {
    if (!this.isExpanded) {
      this.isExpanded = true;
      setTimeout(() => {
        if (this.content.scrollToBottom) {
          this.content.scrollToBottom(500);
        }
      }, 500);
    } else {
      this.isExpanded = false;
    }
  }
}
FundAllocationPage.ɵfac = function FundAllocationPage_Factory(t) {
  return new (t || FundAllocationPage)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_services_translate_config_service__WEBPACK_IMPORTED_MODULE_0__.TranslateConfigService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__.TranslateService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_providers_logger_service_logger_service__WEBPACK_IMPORTED_MODULE_1__.LoggerServiceProvider), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_providers_utils_config__WEBPACK_IMPORTED_MODULE_2__.ConfigProvider), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_providers_utils_utils_service__WEBPACK_IMPORTED_MODULE_3__.UtilService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.Router));
};
FundAllocationPage.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
  type: FundAllocationPage,
  selectors: [["app-fund-allocation"]],
  viewQuery: function FundAllocationPage_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](_ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonContent, 5);
    }
    if (rf & 2) {
      let _t;
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx.content = _t.first);
    }
  },
  decls: 14,
  vars: 10,
  consts: [["mode", "ios"], ["color", "primary", 2, "border-bottom", "3px solid white"], ["slot", "start"], ["text", "", "icon", "chevron-back-outline", 2, "padding-left", "15px", "font-size", "0.7rem"], [1, "bold-font"], ["color", "primary", 1, "tabs"], [2, "margin-bottom", "5px", 3, "ngClass"], [1, "sub-header"], [1, "app_bg2", "ion-padding"], ["class", "spinnersection ion-text-center", 4, "ngIf"], ["class", "white_container_border_radius text_color_base", 4, "ngIf"], [1, "spinnersection", "ion-text-center"], ["name", "lines-sharp-small", 2, "height", "98%"], [1, "white_container_border_radius", "text_color_base"], [2, "background-color", "rgba(255, 255, 255, 0.7) !important", "border-radius", "10px", "background", "none"], [1, "margin_top_bottom_auto", "div-padding", 3, "click"], ["size", "11", 2, "padding", "0px"], [1, "lbl-header"], ["class", "lbl-content", 4, "ngIf"], ["size", "1", 1, "margin_top_bottom_auto", "ion-text-center"], [1, "fas", "fa-angle-right", "font_size_20"], [1, "margin_top_bottom_auto", "div-padding"], [1, "section-padding", "white_container_border_radius"], [1, "heading"], [1, "disclaimer_txt"], [4, "ngIf"], [1, "lbl-content"], [1, "bold", 3, "click"]],
  template: function FundAllocationPage_Template(rf, ctx) {
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
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](12, FundAllocationPage_section_12_Template, 4, 1, "section", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](13, FundAllocationPage_div_13_Template, 47, 34, "div", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx.selectedPolicyData["policyNumber"], "");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction2"](7, _c0, ctx.selectedPlanType === "Conventional", ctx.selectedPlanType !== "Conventional"));
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](10, 5, "fund_allocations.title"));
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx.fundAllocationsList);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.fundAllocationsList);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgIf, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonBackButton, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonButtons, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonCol, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonContent, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonHeader, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonLabel, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonList, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonRow, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonSpinner, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonTitle, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonToolbar, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonBackButtonDelegate, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__.TranslatePipe],
  styles: [".app_bg2[_ngcontent-%COMP%] {\n  --background: url('app_bg_2.jpg') no-repeat center center / cover;\n  background-size: cover;\n  background-repeat: no-repeat;\n  height: 100%;\n  background-position: bottom;\n}\n\n.sub-header[_ngcontent-%COMP%] {\n  color: #ffffff;\n  padding: 10px 25px !important;\n  margin: 0px !important;\n  font-size: 1.1rem !important;\n  font-family: Agenda-Regular;\n}\n\n.tabs[_ngcontent-%COMP%] {\n  border-top: 3px solid color white;\n  --padding-top: -4px;\n  --padding-start: -4px;\n  --padding-end: -4px;\n  --min-height: 44px;\n}\n\n.white_container_border_radius[_ngcontent-%COMP%] {\n  background-color: rgba(255, 255, 255, 0.7) !important;\n  border-radius: 15px !important;\n}\n\nion-label[_ngcontent-%COMP%] {\n  margin: 0px;\n  font-size: 1rem;\n  font-weight: 400;\n  font-family: Agenda-Regular;\n  color: #002d3d;\n  width: 100%;\n}\n\nion-list[_ngcontent-%COMP%] {\n  padding: 0px 20px;\n  margin: 0px !important;\n}\n\nion-row[_ngcontent-%COMP%] {\n  border-bottom: 1px solid rgba(0, 45, 61, 0.3);\n}\n\nion-row[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n}\n\n.scroll-content[_ngcontent-%COMP%] {\n  padding: 15px !important;\n}\n\n.div-padding[_ngcontent-%COMP%] {\n  padding: 5px 0px;\n}\n\n.section-padding[_ngcontent-%COMP%] {\n  padding: 10px 20px;\n}\n\n.section-padding[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%] {\n  margin: 0px;\n}\n\n.lbl-header[_ngcontent-%COMP%] {\n  padding: 0px;\n  font-family: Agenda-Semibold !important;\n  color: #002d3d;\n  font-size: 1rem !important;\n  line-height: 1.42857143;\n  margin: 0px;\n}\n\n.lbl-header[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%] {\n  white-space: unset !important;\n  width: 80% !important;\n  display: inline-flex;\n}\n\n.lbl-content[_ngcontent-%COMP%] {\n  padding: 0px;\n  font-family: Agenda-Regular;\n  color: #002d3d;\n  font-size: 1rem;\n  line-height: 24px;\n  margin: 0px;\n}\n\n.disclaimer_txt_expand[_ngcontent-%COMP%] {\n  text-overflow: ellipsis;\n  white-space: unset;\n}\n\n.disclaimer_txt[_ngcontent-%COMP%] {\n  text-overflow: ellipsis;\n  white-space: unset;\n}\n\n.bold[_ngcontent-%COMP%] {\n  font-family: Agenda-Semibold;\n  margin-bottom: 10px !important;\n}\n\n.margin_top_bottom_auto[_ngcontent-%COMP%] {\n  margin-top: 5px;\n  margin-bottom: 5px;\n}\n\n.font_size_20[_ngcontent-%COMP%] {\n  font-size: 1rem !important;\n}\n\n.heading[_ngcontent-%COMP%] {\n  font-family: Agenda-SemiBold !important;\n  display: block;\n}\n\n.spinnersection[_ngcontent-%COMP%] {\n  display: block;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  font-size: 1.3rem;\n  height: 98%;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcGFnZXMvZnVuZC1hbGxvY2F0aW9uL2Z1bmQtYWxsb2NhdGlvbi5wYWdlLnNjc3MiLCJ3ZWJwYWNrOi8vLi8uLi8uLi8uLi9BbGwlMjBQcm9qZWN0cy9NYWxheXNpYV9DbGllbnRBcHBfUmV2YW1wL1N1bkFjY2Vzc19Jb25pYzZfUmV2YW1wL3NyYy9hcHAvcGFnZXMvZnVuZC1hbGxvY2F0aW9uL2Z1bmQtYWxsb2NhdGlvbi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxpRUFBQTtFQUNBLHNCQUFBO0VBQ0EsNEJBQUE7RUFDQSxZQUFBO0VBQ0EsMkJBQUE7QUNDRjs7QURDQTtFQUNFLGNBQUE7RUFFQSw2QkFBQTtFQUNBLHNCQUFBO0VBQ0EsNEJBQUE7RUFDQSwyQkFBQTtBQ0NGOztBREVBO0VBQ0UsaUNBQUE7RUFDRSxtQkFBQTtFQUNBLHFCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBQ0NKOztBRENBO0VBQ0UscURBQUE7RUFDQSw4QkFBQTtBQ0VGOztBREVDO0VBQ0MsV0FBQTtFQUNBLGVBQUE7RUFFQSxnQkFBQTtFQUNBLDJCQUFBO0VBQ0EsY0FBQTtFQUNBLFdBQUE7QUNBRjs7QURLQTtFQUNHLGlCQUFBO0VBQ0Esc0JBQUE7QUNGSDs7QURLQTtFQUNFLDZDQUFBO0FDRkY7O0FEUUE7RUFDRSxtQkFBQTtBQ0xGOztBRE9BO0VBQ0Usd0JBQUE7QUNKRjs7QURNQTtFQUNDLGdCQUFBO0FDSEQ7O0FES0E7RUFDRyxrQkFBQTtBQ0ZIOztBREtBO0VBQ0UsV0FBQTtBQ0ZGOztBRElBO0VBQ0MsWUFBQTtFQUNBLHVDQUFBO0VBQ0EsY0FBQTtFQUNBLDBCQUFBO0VBQ0EsdUJBQUE7RUFDQSxXQUFBO0FDREQ7O0FESUE7RUFDRSw2QkFBQTtFQUNBLHFCQUFBO0VBQ0Esb0JBQUE7QUNERjs7QURHQTtFQUNFLFlBQUE7RUFDQSwyQkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxXQUFBO0FDQUY7O0FER0E7RUFDRSx1QkFBQTtFQUNBLGtCQUFBO0FDQUY7O0FER0E7RUFDRSx1QkFBQTtFQUNBLGtCQUFBO0FDQUY7O0FERUE7RUFDRSw0QkFBQTtFQUNBLDhCQUFBO0FDQ0Y7O0FEQ0E7RUFDRSxlQUFBO0VBQ0Esa0JBQUE7QUNFRjs7QURBQTtFQUNFLDBCQUFBO0FDR0Y7O0FEQUE7RUFDRSx1Q0FBQTtFQUNBLGNBQUE7QUNHRjs7QUREQTtFQUNFLGNBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLFdBQUE7QUNJRiIsInNvdXJjZXNDb250ZW50IjpbIi5hcHBfYmcyIHtcclxuICAtLWJhY2tncm91bmQ6IHVybCguLi8uLi8uLi9hc3NldHMvaW1ncy9hcHBfYmdfMi5qcGcpIG5vLXJlcGVhdCBjZW50ZXIgY2VudGVyIC8gY292ZXI7XHJcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBib3R0b207XHJcbn1cclxuLnN1Yi1oZWFkZXIge1xyXG4gIGNvbG9yOiAjZmZmZmZmO1xyXG5cclxuICBwYWRkaW5nOiAxMHB4IDI1cHggIWltcG9ydGFudDtcclxuICBtYXJnaW46IDBweCAhaW1wb3J0YW50O1xyXG4gIGZvbnQtc2l6ZTogMS4xcmVtICFpbXBvcnRhbnQ7XHJcbiAgZm9udC1mYW1pbHk6IEFnZW5kYS1SZWd1bGFyO1xyXG4gIC8vbGluZS1oZWlnaHQ6IDI0cHg7O1xyXG59XHJcbi50YWJze1xyXG4gIGJvcmRlci10b3A6IDNweCBzb2xpZCBjb2xvciB3aGl0ZTtcclxuICAgIC0tcGFkZGluZy10b3A6IC00cHg7XHJcbiAgICAtLXBhZGRpbmctc3RhcnQ6IC00cHg7XHJcbiAgICAtLXBhZGRpbmctZW5kOiAtNHB4O1xyXG4gICAgLS1taW4taGVpZ2h0OiA0NHB4O1xyXG59XHJcbi53aGl0ZV9jb250YWluZXJfYm9yZGVyX3JhZGl1c3tcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNykgIWltcG9ydGFudDtcclxuICBib3JkZXItcmFkaXVzOiAxNXB4ICFpbXBvcnRhbnQ7XHJcblxyXG59XHJcblxyXG4gaW9uLWxhYmVse1xyXG4gIG1hcmdpbjowcHg7XHJcbiAgZm9udC1zaXplOiAxcmVtO1xyXG4gIC8vbGluZS1oZWlnaHQ6IDI0cHg7XHJcbiAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICBmb250LWZhbWlseTogQWdlbmRhLVJlZ3VsYXI7XHJcbiAgY29sb3I6IzAwMmQzZDtcclxuICB3aWR0aDoxMDAlO1xyXG4gIC8vd2hpdGUtc3BhY2U6IHByZS1saW5lO1xyXG5cclxufVxyXG5cclxuaW9uLWxpc3R7XHJcbiAgIHBhZGRpbmc6IDBweCAyMHB4O1xyXG4gICBtYXJnaW46IDBweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG5pb24tcm93IHtcclxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiYSgwLCA0NSwgNjEsIC4zKTtcclxuICAvL21hcmdpbjo1cHg7XHJcbiAgLy9wYWRkaW5nOjBweDtcclxuXHJcbn1cclxuXHJcbmlvbi1yb3c6bGFzdC1jaGlsZCB7XHJcbiAgYm9yZGVyLWJvdHRvbTogbm9uZTtcclxufVxyXG4uc2Nyb2xsLWNvbnRlbnQge1xyXG4gIHBhZGRpbmc6IDE1cHggIWltcG9ydGFudDtcclxufVxyXG4uZGl2LXBhZGRpbmd7XHJcbiBwYWRkaW5nOiA1cHggMHB4O1xyXG59XHJcbi5zZWN0aW9uLXBhZGRpbmd7XHJcbiAgIHBhZGRpbmc6IDEwcHggMjBweDtcclxufVxyXG5cclxuLnNlY3Rpb24tcGFkZGluZyAubGFiZWx7XHJcbiAgbWFyZ2luOiAwcHggO1xyXG59XHJcbi5sYmwtaGVhZGVye1xyXG4gcGFkZGluZzogMHB4O1xyXG4gZm9udC1mYW1pbHk6IEFnZW5kYS1TZW1pYm9sZCAhaW1wb3J0YW50O1xyXG4gY29sb3I6ICMwMDJkM2Q7XHJcbiBmb250LXNpemU6IDEuMHJlbSAhaW1wb3J0YW50O1xyXG4gbGluZS1oZWlnaHQ6IDEuNDI4NTcxNDM7XHJcbiBtYXJnaW46IDBweDtcclxufVxyXG5cclxuLmxibC1oZWFkZXIgLmxhYmVse1xyXG4gIHdoaXRlLXNwYWNlOiB1bnNldCAhaW1wb3J0YW50O1xyXG4gIHdpZHRoOiA4MCUgIWltcG9ydGFudDtcclxuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcclxufVxyXG4ubGJsLWNvbnRlbnR7XHJcbiAgcGFkZGluZzogMHB4O1xyXG4gIGZvbnQtZmFtaWx5OiBBZ2VuZGEtUmVndWxhcjtcclxuICBjb2xvcjogIzAwMmQzZDtcclxuICBmb250LXNpemU6IDEuMHJlbTtcclxuICBsaW5lLWhlaWdodDogMjRweDtcclxuICBtYXJnaW46IDBweDtcclxufVxyXG5cclxuLmRpc2NsYWltZXJfdHh0X2V4cGFuZHtcclxuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcclxuICB3aGl0ZS1zcGFjZTogdW5zZXQ7XHJcbn1cclxuXHJcbi5kaXNjbGFpbWVyX3R4dHtcclxuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcclxuICB3aGl0ZS1zcGFjZTogdW5zZXQ7XHJcbn1cclxuLmJvbGR7XHJcbiAgZm9udC1mYW1pbHk6IEFnZW5kYS1TZW1pYm9sZDtcclxuICBtYXJnaW4tYm90dG9tOiAxMHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuLm1hcmdpbl90b3BfYm90dG9tX2F1dG8ge1xyXG4gIG1hcmdpbi10b3A6IDVweDtcclxuICBtYXJnaW4tYm90dG9tOiA1cHg7XHJcbn1cclxuLmZvbnRfc2l6ZV8yMCB7XHJcbiAgZm9udC1zaXplOiAxcmVtICFpbXBvcnRhbnQ7XHJcblxyXG59XHJcbi5oZWFkaW5nIHtcclxuICBmb250LWZhbWlseTogQWdlbmRhLVNlbWlCb2xkICFpbXBvcnRhbnQ7XHJcbiAgZGlzcGxheTpibG9jaztcclxufVxyXG4uc3Bpbm5lcnNlY3Rpb24ge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBmb250LXNpemU6IDEuM3JlbTtcclxuICBoZWlnaHQ6IDk4JTtcclxufVxyXG4iLCIuYXBwX2JnMiB7XG4gIC0tYmFja2dyb3VuZDogdXJsKC4uLy4uLy4uL2Fzc2V0cy9pbWdzL2FwcF9iZ18yLmpwZykgbm8tcmVwZWF0IGNlbnRlciBjZW50ZXIgLyBjb3ZlcjtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgaGVpZ2h0OiAxMDAlO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBib3R0b207XG59XG5cbi5zdWItaGVhZGVyIHtcbiAgY29sb3I6ICNmZmZmZmY7XG4gIHBhZGRpbmc6IDEwcHggMjVweCAhaW1wb3J0YW50O1xuICBtYXJnaW46IDBweCAhaW1wb3J0YW50O1xuICBmb250LXNpemU6IDEuMXJlbSAhaW1wb3J0YW50O1xuICBmb250LWZhbWlseTogQWdlbmRhLVJlZ3VsYXI7XG59XG5cbi50YWJzIHtcbiAgYm9yZGVyLXRvcDogM3B4IHNvbGlkIGNvbG9yIHdoaXRlO1xuICAtLXBhZGRpbmctdG9wOiAtNHB4O1xuICAtLXBhZGRpbmctc3RhcnQ6IC00cHg7XG4gIC0tcGFkZGluZy1lbmQ6IC00cHg7XG4gIC0tbWluLWhlaWdodDogNDRweDtcbn1cblxuLndoaXRlX2NvbnRhaW5lcl9ib3JkZXJfcmFkaXVzIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjcpICFpbXBvcnRhbnQ7XG4gIGJvcmRlci1yYWRpdXM6IDE1cHggIWltcG9ydGFudDtcbn1cblxuaW9uLWxhYmVsIHtcbiAgbWFyZ2luOiAwcHg7XG4gIGZvbnQtc2l6ZTogMXJlbTtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgZm9udC1mYW1pbHk6IEFnZW5kYS1SZWd1bGFyO1xuICBjb2xvcjogIzAwMmQzZDtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbmlvbi1saXN0IHtcbiAgcGFkZGluZzogMHB4IDIwcHg7XG4gIG1hcmdpbjogMHB4ICFpbXBvcnRhbnQ7XG59XG5cbmlvbi1yb3cge1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiYSgwLCA0NSwgNjEsIDAuMyk7XG59XG5cbmlvbi1yb3c6bGFzdC1jaGlsZCB7XG4gIGJvcmRlci1ib3R0b206IG5vbmU7XG59XG5cbi5zY3JvbGwtY29udGVudCB7XG4gIHBhZGRpbmc6IDE1cHggIWltcG9ydGFudDtcbn1cblxuLmRpdi1wYWRkaW5nIHtcbiAgcGFkZGluZzogNXB4IDBweDtcbn1cblxuLnNlY3Rpb24tcGFkZGluZyB7XG4gIHBhZGRpbmc6IDEwcHggMjBweDtcbn1cblxuLnNlY3Rpb24tcGFkZGluZyAubGFiZWwge1xuICBtYXJnaW46IDBweDtcbn1cblxuLmxibC1oZWFkZXIge1xuICBwYWRkaW5nOiAwcHg7XG4gIGZvbnQtZmFtaWx5OiBBZ2VuZGEtU2VtaWJvbGQgIWltcG9ydGFudDtcbiAgY29sb3I6ICMwMDJkM2Q7XG4gIGZvbnQtc2l6ZTogMXJlbSAhaW1wb3J0YW50O1xuICBsaW5lLWhlaWdodDogMS40Mjg1NzE0MztcbiAgbWFyZ2luOiAwcHg7XG59XG5cbi5sYmwtaGVhZGVyIC5sYWJlbCB7XG4gIHdoaXRlLXNwYWNlOiB1bnNldCAhaW1wb3J0YW50O1xuICB3aWR0aDogODAlICFpbXBvcnRhbnQ7XG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xufVxuXG4ubGJsLWNvbnRlbnQge1xuICBwYWRkaW5nOiAwcHg7XG4gIGZvbnQtZmFtaWx5OiBBZ2VuZGEtUmVndWxhcjtcbiAgY29sb3I6ICMwMDJkM2Q7XG4gIGZvbnQtc2l6ZTogMXJlbTtcbiAgbGluZS1oZWlnaHQ6IDI0cHg7XG4gIG1hcmdpbjogMHB4O1xufVxuXG4uZGlzY2xhaW1lcl90eHRfZXhwYW5kIHtcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gIHdoaXRlLXNwYWNlOiB1bnNldDtcbn1cblxuLmRpc2NsYWltZXJfdHh0IHtcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gIHdoaXRlLXNwYWNlOiB1bnNldDtcbn1cblxuLmJvbGQge1xuICBmb250LWZhbWlseTogQWdlbmRhLVNlbWlib2xkO1xuICBtYXJnaW4tYm90dG9tOiAxMHB4ICFpbXBvcnRhbnQ7XG59XG5cbi5tYXJnaW5fdG9wX2JvdHRvbV9hdXRvIHtcbiAgbWFyZ2luLXRvcDogNXB4O1xuICBtYXJnaW4tYm90dG9tOiA1cHg7XG59XG5cbi5mb250X3NpemVfMjAge1xuICBmb250LXNpemU6IDFyZW0gIWltcG9ydGFudDtcbn1cblxuLmhlYWRpbmcge1xuICBmb250LWZhbWlseTogQWdlbmRhLVNlbWlCb2xkICFpbXBvcnRhbnQ7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4uc3Bpbm5lcnNlY3Rpb24ge1xuICBkaXNwbGF5OiBibG9jaztcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMS4zcmVtO1xuICBoZWlnaHQ6IDk4JTtcbn0iXSwic291cmNlUm9vdCI6IiJ9 */"]
});

/***/ })

}]);
//# sourceMappingURL=src_app_pages_fund-allocation_fund-allocation_module_ts.js.map