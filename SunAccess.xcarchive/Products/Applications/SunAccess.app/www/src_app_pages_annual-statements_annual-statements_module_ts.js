"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_annual-statements_annual-statements_module_ts"],{

/***/ 87432:
/*!*****************************************************************************!*\
  !*** ./src/app/pages/annual-statements/annual-statements-routing.module.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AnnualStatementsPageRoutingModule": () => (/* binding */ AnnualStatementsPageRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _annual_statements_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./annual-statements.page */ 20326);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);




const routes = [{
  path: '',
  component: _annual_statements_page__WEBPACK_IMPORTED_MODULE_0__.AnnualStatementsPage
}];
class AnnualStatementsPageRoutingModule {}
AnnualStatementsPageRoutingModule.ɵfac = function AnnualStatementsPageRoutingModule_Factory(t) {
  return new (t || AnnualStatementsPageRoutingModule)();
};
AnnualStatementsPageRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
  type: AnnualStatementsPageRoutingModule
});
AnnualStatementsPageRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AnnualStatementsPageRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
})();

/***/ }),

/***/ 95289:
/*!*********************************************************************!*\
  !*** ./src/app/pages/annual-statements/annual-statements.module.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AnnualStatementsPageModule": () => (/* binding */ AnnualStatementsPageModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _annual_statements_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./annual-statements-routing.module */ 87432);
/* harmony import */ var _annual_statements_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./annual-statements.page */ 20326);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ 38699);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);







class AnnualStatementsPageModule {}
AnnualStatementsPageModule.ɵfac = function AnnualStatementsPageModule_Factory(t) {
  return new (t || AnnualStatementsPageModule)();
};
AnnualStatementsPageModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
  type: AnnualStatementsPageModule
});
AnnualStatementsPageModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule, _annual_statements_routing_module__WEBPACK_IMPORTED_MODULE_0__.AnnualStatementsPageRoutingModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__.TranslateModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](AnnualStatementsPageModule, {
    declarations: [_annual_statements_page__WEBPACK_IMPORTED_MODULE_1__.AnnualStatementsPage],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule, _annual_statements_routing_module__WEBPACK_IMPORTED_MODULE_0__.AnnualStatementsPageRoutingModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__.TranslateModule]
  });
})();

/***/ }),

/***/ 20326:
/*!*******************************************************************!*\
  !*** ./src/app/pages/annual-statements/annual-statements.page.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AnnualStatementsPage": () => (/* binding */ AnnualStatementsPage)
/* harmony export */ });
/* harmony import */ var src_app_app_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/app.component */ 55041);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var src_providers_utils_utils_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/providers/utils/utils.service */ 30423);
/* harmony import */ var _annualStatementsService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./annualStatementsService */ 35577);
/* harmony import */ var src_providers_download_pdf_download_pdf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/providers/download-pdf/download-pdf */ 58339);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ 38699);
/* harmony import */ var src_providers_logger_service_logger_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/providers/logger-service/logger-service */ 9999);
/* harmony import */ var src_providers_utils_config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/providers/utils/config */ 43485);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/angular */ 93819);










function AnnualStatementsPage_ion_col_20_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "ion-col", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "i", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function AnnualStatementsPage_ion_col_21_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "ion-col", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "i", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function AnnualStatementsPage_div_22_section_1_button_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r31 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function AnnualStatementsPage_div_22_section_1_button_3_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r31);
      const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r30.getPremiumStatments());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](2, 1, "generic_msgs.try_again"));
  }
}
function AnnualStatementsPage_div_22_section_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "section", 22)(1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](3, AnnualStatementsPage_div_22_section_1_button_3_Template, 3, 3, "button", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r27.errorMsg);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r27.canTryAgain);
  }
}
function AnnualStatementsPage_div_22_section_2_ion_row_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r35 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "ion-row")(1, "ion-col", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "ion-col", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function AnnualStatementsPage_div_22_section_2_ion_row_11_Template_ion_col_click_3_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r35);
      const statement_r33 = restoredCtx.$implicit;
      const ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r34.downloadAndOpenPdf(statement_r33));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const statement_r33 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", statement_r33.policyNumber, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", statement_r33.statementYear, " ");
  }
}
function AnnualStatementsPage_div_22_section_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "section")(1, "div")(2, "ion-row", 24)(3, "ion-col", 25)(4, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](6, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "ion-col", 25)(8, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](10, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](11, AnnualStatementsPage_div_22_section_2_ion_row_11_Template, 5, 2, "ion-row", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](6, 3, "premium_stmts.policy_no"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](10, 5, "premium_stmts.stmt_year"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx_r28.premiumStatementsList);
  }
}
const _c0 = function (a0) {
  return {
    "statementsContent": a0
  };
};
function AnnualStatementsPage_div_22_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, AnnualStatementsPage_div_22_section_1_Template, 4, 2, "section", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](2, AnnualStatementsPage_div_22_section_2_Template, 12, 7, "section", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction1"](3, _c0, ctx_r2.premiumStatementsList.length > 3));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !ctx_r2.premiumStatementsList.length > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r2.premiumStatementsList.length > 0);
  }
}
function AnnualStatementsPage_ion_col_29_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "ion-col", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "i", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function AnnualStatementsPage_ion_col_30_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "ion-col", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "i", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function AnnualStatementsPage_div_31_section_1_button_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r40 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function AnnualStatementsPage_div_31_section_1_button_3_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r40);
      const ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r39.getUnitStatmentsList());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](2, 1, "generic_msgs.try_again"));
  }
}
function AnnualStatementsPage_div_31_section_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "section", 22)(1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](3, AnnualStatementsPage_div_31_section_1_button_3_Template, 3, 3, "button", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r36.errorMsg);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r36.canTryAgain);
  }
}
function AnnualStatementsPage_div_31_section_2_ion_row_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r44 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "ion-row")(1, "ion-col", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "ion-col", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function AnnualStatementsPage_div_31_section_2_ion_row_11_Template_ion_col_click_3_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r44);
      const statement_r42 = restoredCtx.$implicit;
      const ctx_r43 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r43.downloadAndOpenPdf(statement_r42));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const statement_r42 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", statement_r42.policyNumber, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", statement_r42.statementYear, " ");
  }
}
function AnnualStatementsPage_div_31_section_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "section")(1, "div")(2, "ion-row", 24)(3, "ion-col", 25)(4, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](6, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "ion-col", 25)(8, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](10, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](11, AnnualStatementsPage_div_31_section_2_ion_row_11_Template, 5, 2, "ion-row", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](6, 3, "premium_stmts.policy_no"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](10, 5, "premium_stmts.stmt_year"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx_r37.unitStatementsList);
  }
}
function AnnualStatementsPage_div_31_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, AnnualStatementsPage_div_31_section_1_Template, 4, 2, "section", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](2, AnnualStatementsPage_div_31_section_2_Template, 12, 7, "section", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction1"](3, _c0, ctx_r5.unitStatementsList.length > 3));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !ctx_r5.unitStatementsList.length > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r5.unitStatementsList.length > 0);
  }
}
function AnnualStatementsPage_ion_col_38_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "ion-col", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "i", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function AnnualStatementsPage_ion_col_39_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "ion-col", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "i", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function AnnualStatementsPage_div_40_section_1_button_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r49 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function AnnualStatementsPage_div_40_section_1_button_3_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r49);
      const ctx_r48 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r48.getPAStatments());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](2, 1, "generic_msgs.try_again"));
  }
}
function AnnualStatementsPage_div_40_section_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "section", 22)(1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](3, AnnualStatementsPage_div_40_section_1_button_3_Template, 3, 3, "button", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r45.errorMsg);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r45.canTryAgain);
  }
}
function AnnualStatementsPage_div_40_section_2_ion_row_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r53 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "ion-row")(1, "ion-col", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "ion-col", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function AnnualStatementsPage_div_40_section_2_ion_row_11_Template_ion_col_click_3_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r53);
      const statement_r51 = restoredCtx.$implicit;
      const ctx_r52 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r52.downloadAndOpenPdf(statement_r51));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const statement_r51 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", statement_r51.policyNumber, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", statement_r51.statementYear, " ");
  }
}
function AnnualStatementsPage_div_40_section_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "section")(1, "div")(2, "ion-row", 24)(3, "ion-col", 25)(4, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](6, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "ion-col", 25)(8, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](10, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](11, AnnualStatementsPage_div_40_section_2_ion_row_11_Template, 5, 2, "ion-row", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r46 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](6, 3, "premium_stmts.policy_no"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](10, 5, "premium_stmts.stmt_year"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx_r46.paStatementsList);
  }
}
function AnnualStatementsPage_div_40_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, AnnualStatementsPage_div_40_section_1_Template, 4, 2, "section", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](2, AnnualStatementsPage_div_40_section_2_Template, 12, 7, "section", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction1"](3, _c0, ctx_r8.paStatementsList.length > 3));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !ctx_r8.paStatementsList.length > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r8.paStatementsList.length > 0);
  }
}
function AnnualStatementsPage_ion_col_47_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "ion-col", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "i", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function AnnualStatementsPage_ion_col_48_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "ion-col", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "i", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function AnnualStatementsPage_div_49_section_1_button_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r58 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function AnnualStatementsPage_div_49_section_1_button_3_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r58);
      const ctx_r57 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r57.getUAStatments());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](2, 1, "generic_msgs.try_again"));
  }
}
function AnnualStatementsPage_div_49_section_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "section", 22)(1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](3, AnnualStatementsPage_div_49_section_1_button_3_Template, 3, 3, "button", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r54 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r54.errorMsg);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r54.canTryAgain);
  }
}
function AnnualStatementsPage_div_49_section_2_ion_row_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r62 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "ion-row")(1, "ion-col", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "ion-col", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function AnnualStatementsPage_div_49_section_2_ion_row_11_Template_ion_col_click_3_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r62);
      const statement_r60 = restoredCtx.$implicit;
      const ctx_r61 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r61.downloadAndOpenPdf(statement_r60));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const statement_r60 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", statement_r60.policyNumber, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", statement_r60.statementYear, " ");
  }
}
function AnnualStatementsPage_div_49_section_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "section")(1, "div")(2, "ion-row", 24)(3, "ion-col", 25)(4, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](6, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "ion-col", 25)(8, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](10, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](11, AnnualStatementsPage_div_49_section_2_ion_row_11_Template, 5, 2, "ion-row", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r55 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](6, 3, "premium_stmts.policy_no"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](10, 5, "premium_stmts.stmt_year"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx_r55.uaStatementsList);
  }
}
function AnnualStatementsPage_div_49_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, AnnualStatementsPage_div_49_section_1_Template, 4, 2, "section", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](2, AnnualStatementsPage_div_49_section_2_Template, 12, 7, "section", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction1"](3, _c0, ctx_r11.uaStatementsList.length > 3));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !ctx_r11.uaStatementsList.length > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r11.uaStatementsList.length > 0);
  }
}
function AnnualStatementsPage_ion_col_56_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "ion-col", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "i", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function AnnualStatementsPage_ion_col_57_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "ion-col", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "i", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function AnnualStatementsPage_div_58_section_1_button_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r67 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function AnnualStatementsPage_div_58_section_1_button_3_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r67);
      const ctx_r66 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r66.GetAppfStatements());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](2, 1, "generic_msgs.try_again"));
  }
}
function AnnualStatementsPage_div_58_section_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "section", 22)(1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](3, AnnualStatementsPage_div_58_section_1_button_3_Template, 3, 3, "button", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r63 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r63.errorMsg);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r63.canTryAgain);
  }
}
function AnnualStatementsPage_div_58_section_2_ion_row_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r71 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "ion-row")(1, "ion-col", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "ion-col", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function AnnualStatementsPage_div_58_section_2_ion_row_11_Template_ion_col_click_3_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r71);
      const statement_r69 = restoredCtx.$implicit;
      const ctx_r70 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r70.downloadAndOpenPdf(statement_r69));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const statement_r69 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", statement_r69.policyNumber, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", statement_r69.statementYear, " ");
  }
}
function AnnualStatementsPage_div_58_section_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "section")(1, "div")(2, "ion-row", 24)(3, "ion-col", 25)(4, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](6, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "ion-col", 25)(8, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](10, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](11, AnnualStatementsPage_div_58_section_2_ion_row_11_Template, 5, 2, "ion-row", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r64 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](6, 3, "premium_stmts.policy_no"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](10, 5, "premium_stmts.stmt_year"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx_r64.appfStatementsList);
  }
}
function AnnualStatementsPage_div_58_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, AnnualStatementsPage_div_58_section_1_Template, 4, 2, "section", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](2, AnnualStatementsPage_div_58_section_2_Template, 12, 7, "section", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction1"](3, _c0, ctx_r14.appfStatementsList.length > 3));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !ctx_r14.appfStatementsList.length > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r14.appfStatementsList.length > 0);
  }
}
function AnnualStatementsPage_ion_col_65_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "ion-col", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "i", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function AnnualStatementsPage_ion_col_66_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "ion-col", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "i", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function AnnualStatementsPage_div_67_section_1_button_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r76 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function AnnualStatementsPage_div_67_section_1_button_3_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r76);
      const ctx_r75 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r75.GetUniversalLifeStatement());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](2, 1, "generic_msgs.try_again"));
  }
}
function AnnualStatementsPage_div_67_section_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "section", 22)(1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](3, AnnualStatementsPage_div_67_section_1_button_3_Template, 3, 3, "button", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r72 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r72.errorMsg);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r72.canTryAgain);
  }
}
function AnnualStatementsPage_div_67_section_2_ion_row_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r80 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "ion-row")(1, "ion-col", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "ion-col", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function AnnualStatementsPage_div_67_section_2_ion_row_11_Template_ion_col_click_3_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r80);
      const statement_r78 = restoredCtx.$implicit;
      const ctx_r79 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r79.downloadAndOpenPdf(statement_r78));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const statement_r78 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", statement_r78.policyNumber, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", statement_r78.statementYear, " ");
  }
}
function AnnualStatementsPage_div_67_section_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "section")(1, "div")(2, "ion-row", 24)(3, "ion-col", 25)(4, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](6, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "ion-col", 25)(8, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](10, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](11, AnnualStatementsPage_div_67_section_2_ion_row_11_Template, 5, 2, "ion-row", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r73 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](6, 3, "premium_stmts.policy_no"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](10, 5, "premium_stmts.stmt_year"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx_r73.universalStatementsList);
  }
}
function AnnualStatementsPage_div_67_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, AnnualStatementsPage_div_67_section_1_Template, 4, 2, "section", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](2, AnnualStatementsPage_div_67_section_2_Template, 12, 7, "section", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction1"](3, _c0, ctx_r17.universalStatementsList.length > 3));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !ctx_r17.universalStatementsList.length > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r17.universalStatementsList.length > 0);
  }
}
function AnnualStatementsPage_ion_col_74_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "ion-col", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "i", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function AnnualStatementsPage_ion_col_75_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "ion-col", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "i", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function AnnualStatementsPage_div_76_section_1_button_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r85 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function AnnualStatementsPage_div_76_section_1_button_3_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r85);
      const ctx_r84 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r84.GetBonusStatements());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](2, 1, "generic_msgs.try_again"));
  }
}
function AnnualStatementsPage_div_76_section_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "section", 22)(1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](3, AnnualStatementsPage_div_76_section_1_button_3_Template, 3, 3, "button", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r81 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r81.errorMsg);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r81.canTryAgain);
  }
}
function AnnualStatementsPage_div_76_section_2_ion_row_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r89 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "ion-row")(1, "ion-col", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "ion-col", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function AnnualStatementsPage_div_76_section_2_ion_row_11_Template_ion_col_click_3_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r89);
      const statement_r87 = restoredCtx.$implicit;
      const ctx_r88 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r88.downloadAndOpenPdf(statement_r87));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const statement_r87 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", statement_r87.policyNumber, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", statement_r87.statementYear, " ");
  }
}
function AnnualStatementsPage_div_76_section_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "section")(1, "div")(2, "ion-row", 24)(3, "ion-col", 25)(4, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](6, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "ion-col", 25)(8, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](10, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](11, AnnualStatementsPage_div_76_section_2_ion_row_11_Template, 5, 2, "ion-row", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r82 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](6, 3, "premium_stmts.policy_no"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](10, 5, "premium_stmts.stmt_year"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx_r82.bonusStatementsList);
  }
}
function AnnualStatementsPage_div_76_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, AnnualStatementsPage_div_76_section_1_Template, 4, 2, "section", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](2, AnnualStatementsPage_div_76_section_2_Template, 12, 7, "section", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction1"](3, _c0, ctx_r20.bonusStatementsList.length > 3));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !ctx_r20.bonusStatementsList.length > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r20.bonusStatementsList.length > 0);
  }
}
function AnnualStatementsPage_ion_col_83_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "ion-col", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "i", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function AnnualStatementsPage_ion_col_84_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "ion-col", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "i", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function AnnualStatementsPage_div_85_section_1_button_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r94 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function AnnualStatementsPage_div_85_section_1_button_3_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r94);
      const ctx_r93 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r93.GetMAFStatement());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](2, 1, "generic_msgs.try_again"));
  }
}
function AnnualStatementsPage_div_85_section_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "section", 22)(1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](3, AnnualStatementsPage_div_85_section_1_button_3_Template, 3, 3, "button", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r90 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r90.errorMsg);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r90.canTryAgain);
  }
}
function AnnualStatementsPage_div_85_section_2_ion_row_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r98 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "ion-row")(1, "ion-col", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "ion-col", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function AnnualStatementsPage_div_85_section_2_ion_row_11_Template_ion_col_click_3_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r98);
      const statement_r96 = restoredCtx.$implicit;
      const ctx_r97 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r97.downloadAndOpenPdf(statement_r96));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const statement_r96 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", statement_r96.policyNumber, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", statement_r96.statementYear, " ");
  }
}
function AnnualStatementsPage_div_85_section_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "section")(1, "div")(2, "ion-row", 24)(3, "ion-col", 25)(4, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](6, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "ion-col", 25)(8, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](10, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](11, AnnualStatementsPage_div_85_section_2_ion_row_11_Template, 5, 2, "ion-row", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r91 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](6, 3, "premium_stmts.policy_no"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](10, 5, "premium_stmts.stmt_year"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx_r91.MAFStatementsList);
  }
}
function AnnualStatementsPage_div_85_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, AnnualStatementsPage_div_85_section_1_Template, 4, 2, "section", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](2, AnnualStatementsPage_div_85_section_2_Template, 12, 7, "section", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction1"](3, _c0, ctx_r23.MAFStatementsList.length > 3));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !ctx_r23.MAFStatementsList.length > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r23.MAFStatementsList.length > 0);
  }
}
function AnnualStatementsPage_ion_col_92_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "ion-col", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "i", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function AnnualStatementsPage_ion_col_93_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "ion-col", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "i", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function AnnualStatementsPage_div_94_section_1_button_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r103 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function AnnualStatementsPage_div_94_section_1_button_3_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r103);
      const ctx_r102 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r102.GetEducationBoosterFundStatement());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](2, 1, "generic_msgs.try_again"));
  }
}
function AnnualStatementsPage_div_94_section_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "section", 22)(1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](3, AnnualStatementsPage_div_94_section_1_button_3_Template, 3, 3, "button", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r99 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r99.errorMsg);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r99.canTryAgain);
  }
}
function AnnualStatementsPage_div_94_section_2_ion_row_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r107 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "ion-row")(1, "ion-col", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "ion-col", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function AnnualStatementsPage_div_94_section_2_ion_row_11_Template_ion_col_click_3_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r107);
      const statement_r105 = restoredCtx.$implicit;
      const ctx_r106 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r106.downloadAndOpenPdf(statement_r105));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const statement_r105 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", statement_r105.policyNumber, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", statement_r105.statementYear, " ");
  }
}
function AnnualStatementsPage_div_94_section_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "section")(1, "div")(2, "ion-row", 24)(3, "ion-col", 25)(4, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](6, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "ion-col", 25)(8, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](10, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](11, AnnualStatementsPage_div_94_section_2_ion_row_11_Template, 5, 2, "ion-row", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r100 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](6, 3, "premium_stmts.policy_no"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](10, 5, "premium_stmts.stmt_year"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx_r100.EducationBoosterFundStatementsList);
  }
}
function AnnualStatementsPage_div_94_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, AnnualStatementsPage_div_94_section_1_Template, 4, 2, "section", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](2, AnnualStatementsPage_div_94_section_2_Template, 12, 7, "section", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction1"](3, _c0, ctx_r26.EducationBoosterFundStatementsList.length > 3));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !ctx_r26.EducationBoosterFundStatementsList.length > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r26.EducationBoosterFundStatementsList.length > 0);
  }
}
class AnnualStatementsPage {
  constructor(utilServices, getStatementsService, downloadFile, translate, logger, config) {
    this.utilServices = utilServices;
    this.getStatementsService = getStatementsService;
    this.downloadFile = downloadFile;
    this.translate = translate;
    this.logger = logger;
    this.config = config;
    this.PassedValue = 'hello you have used input decorator!!!';
    this.canTryAgain = false;
    this.errorMsg = "";
    this.isAccordian = {
      PremiumStatements: false,
      UnitStatements: false,
      PaStatements: false,
      UaStatements: false,
      AppfStatements: false,
      UniversalStatements: false,
      BonusStatements: false,
      MAFStatements: false,
      EduStatements: false
    };
    this.premiumStatementsList = [];
    this.unitStatementsList = [];
    this.paStatementsList = [];
    this.uaStatementsList = [];
    this.appfStatementsList = [];
    this.universalStatementsList = [];
    this.bonusStatementsList = [];
    this.MAFStatementsList = [];
    this.EducationBoosterFundStatementsList = [];
    this.utilServices.analytics("annualStatements");
    this.config.currentPage.pageName = "AnnualStatementsPage";
  }
  ngOnInit() {}
  ionViewWillEnter() {
    this.utilServices.component.emit(src_app_app_component__WEBPACK_IMPORTED_MODULE_0__.MenuOptions.ANNUAL_STATEMENTS);
  }
  downloadAndOpenPdf(statement) {
    console.log('statement', statement);
    this.downloadFile.downloadStatementFile(statement.link, statement.policyNumber);
  }
  /**
   * This method is used to PremiumStatements Page
   */
  navToPremiumStmts() {
    if (!(this.premiumStatementsList.length > 0) && !this.isAccordian['PremiumStatements']) this.getPremiumStatments();
    this.toggleSection('PremiumStatements');
  }
  /**
  * This method is used to UnitStatements Page
  */
  navToUnitStmts() {
    if (!(this.unitStatementsList.length > 0) && !this.isAccordian['UnitStatements']) this.getUnitStatmentsList();
    this.toggleSection('UnitStatements');
  }
  /**
  * This method is used to PA Statements Page
  */
  navToPAStmts() {
    if (!(this.paStatementsList.length > 0) && !this.isAccordian['PaStatements']) this.getPAStatments();
    this.toggleSection('PaStatements');
  }
  /**
   * This method is used to UA Statements Page.
   */
  navToUAStmts() {
    if (!(this.uaStatementsList.length > 0) && !this.isAccordian['UaStatements']) this.getUAStatments();
    this.toggleSection('UaStatements');
  }
  /**
   * This method is used to Appf Statements Page.
   */
  navToAppfStmts() {
    if (!(this.appfStatementsList.length > 0) && !this.isAccordian['AppfStatements']) this.GetAppfStatements();
    this.toggleSection('AppfStatements');
  }
  /**
   * This method is used to Universal Statements Page.
   */
  navToUniversalStmts() {
    if (!(this.universalStatementsList.length > 0) && !this.isAccordian['UniversalStatements']) this.GetUniversalLifeStatement();
    this.toggleSection('UniversalStatements');
  }
  /**
  * This method is used to Bonus Statements Page.
  */
  navToBonusStmts() {
    if (!(this.bonusStatementsList.length > 0) && !this.isAccordian['BonusStatements']) this.GetBonusStatements();
    this.toggleSection('BonusStatements');
  }
  /**
  * This method is used to MAF Statements Page.
  */
  navToMAFStmts() {
    if (!(this.MAFStatementsList.length > 0) && !this.isAccordian['MAFStatements']) this.GetMAFStatement();
    this.toggleSection('MAFStatements');
  }
  /**
  * This method is used to Education Statements Page.
  */
  navToEducationStmts() {
    if (!(this.EducationBoosterFundStatementsList.length > 0) && !this.isAccordian['EduStatements']) this.GetEducationBoosterFundStatement();
    this.toggleSection('EduStatements');
  }
  /**
   * This method is used to get list of Premium statements
   */
  getPremiumStatments() {
    if (this.utilServices.isDeviceOnLine()) {
      this.canTryAgain = false;
      this.utilServices.showProgressLoader();
      this.errorMsg = "";
      this.logger.trace("get UA Statements--start");
      this.getStatementsService.getPremiumStatements().then(result => {
        try {
          this.utilServices.dissmisProgressLoader();
          console.log(result);
          this.premiumStatementsList = result['responseJSON']['array'];
          console.log('premiumStatementsList', this.premiumStatementsList);
          if (!(this.premiumStatementsList.length > 0)) {
            this.canTryAgain = false;
            this.errorMsg = this.translate.instant('generic_msgs.no_data');
          }
        } catch (e) {
          this.canTryAgain = true;
          var msg = this.translate.instant('generic_msgs.server_err');
          this.errorMsg = msg;
        }
      }, err => {
        this.canTryAgain = true;
        this.showError(err);
      });
    } else {
      this.canTryAgain = true;
      var msg = this.translate.instant('generic_msgs.network_err');
      this.errorMsg = msg;
    }
  }
  /**
  * This method is used to get list of unit Statements
  */
  getUnitStatmentsList() {
    if (this.utilServices.isDeviceOnLine()) {
      this.canTryAgain = false;
      this.utilServices.showProgressLoader();
      this.errorMsg = "";
      this.logger.trace("get Unit Statements--start");
      this.getStatementsService.getUnitStatements().then(result => {
        this.utilServices.dissmisProgressLoader();
        this.unitStatementsList = result['responseJSON']['array'];
        console.log('unitStatementsList', this.unitStatementsList);
        if (!(this.unitStatementsList.length > 0)) {
          this.canTryAgain = false;
          this.errorMsg = this.translate.instant('generic_msgs.no_data');
        }
      }, err => {
        this.canTryAgain = true;
        this.showError(err);
      });
    } else {
      this.canTryAgain = true;
      this.errorMsg = this.translate.instant('generic_msgs.network_err');
    }
  }
  /**
   * This is method is used to get list of PA Statements
   */
  getPAStatments() {
    if (this.utilServices.isDeviceOnLine()) {
      this.canTryAgain = false;
      this.utilServices.showProgressLoader();
      this.errorMsg = "";
      this.logger.trace("get PA Statements--start");
      this.getStatementsService.getPAStatements().then(result => {
        this.utilServices.dissmisProgressLoader();
        this.paStatementsList = result['responseJSON']['array'];
        console.log('this.paStatementsList', this.paStatementsList);
        if (!(this.paStatementsList.length > 0)) {
          this.canTryAgain = false;
          this.errorMsg = this.translate.instant('generic_msgs.no_data');
        }
      }, err => {
        this.canTryAgain = true;
        this.showError(err);
      });
    } else {
      this.canTryAgain = true;
      this.errorMsg = this.translate.instant('generic_msgs.network_err');
    }
  }
  /**
  * This method is used to get list of UA Statements
  */
  getUAStatments() {
    if (this.utilServices.isDeviceOnLine()) {
      this.canTryAgain = false;
      this.utilServices.showProgressLoader();
      this.errorMsg = "";
      this.logger.trace("get UA Statements--start");
      this.getStatementsService.getUAStatements().then(result => {
        this.utilServices.dissmisProgressLoader();
        this.uaStatementsList = result['responseJSON']['array'];
        console.log('this.uaStatementsList', this.uaStatementsList);
        if (!(this.uaStatementsList.length > 0)) {
          this.canTryAgain = false;
          this.errorMsg = this.translate.instant('generic_msgs.no_data');
        }
      }, err => {
        this.canTryAgain = true;
        this.showError(err);
      });
    } else {
      this.canTryAgain = true;
      this.errorMsg = this.translate.instant('generic_msgs.network_err');
    }
  }
  /**
  * This method is used to get list of Appf Statements
  */
  GetAppfStatements() {
    if (this.utilServices.isDeviceOnLine()) {
      this.canTryAgain = false;
      this.utilServices.showProgressLoader();
      this.errorMsg = "";
      this.logger.trace("get Appf Statements--start");
      this.getStatementsService.getAppfStatements().then(result => {
        this.utilServices.dissmisProgressLoader();
        this.appfStatementsList = result['responseJSON']['array'];
        console.log('this.appfStatementsList', this.appfStatementsList);
        if (!(this.appfStatementsList.length > 0)) {
          this.canTryAgain = false;
          this.errorMsg = this.translate.instant('generic_msgs.no_data');
        }
      }, err => {
        this.canTryAgain = true;
        this.showError(err);
      });
    } else {
      this.canTryAgain = true;
      this.errorMsg = this.translate.instant('generic_msgs.network_err');
    }
  }
  /**
   * This method is used to get list of Appf Statements
   */
  GetUniversalLifeStatement() {
    if (this.utilServices.isDeviceOnLine()) {
      this.canTryAgain = false;
      this.utilServices.showProgressLoader();
      this.errorMsg = "";
      this.logger.trace("get Appf Statements--start");
      this.getStatementsService.getUniversalLifeStatement().then(result => {
        this.utilServices.dissmisProgressLoader();
        this.universalStatementsList = result['responseJSON']['array'];
        console.log('this.universalStatementsList', this.universalStatementsList);
        if (!(this.universalStatementsList.length > 0)) {
          this.canTryAgain = false;
          this.errorMsg = this.translate.instant('generic_msgs.no_data');
        }
      }, err => {
        this.canTryAgain = true;
        this.showError(err);
      });
    } else {
      this.canTryAgain = true;
      this.errorMsg = this.translate.instant('generic_msgs.network_err');
    }
  }
  /**
    * This method is used to get list of Bonus Statements
    */
  GetBonusStatements() {
    if (this.utilServices.isDeviceOnLine()) {
      this.canTryAgain = false;
      this.utilServices.showProgressLoader();
      this.errorMsg = "";
      this.logger.trace("get Appf Statements--start");
      this.getStatementsService.getBonusStatements().then(result => {
        this.utilServices.dissmisProgressLoader();
        this.bonusStatementsList = result['responseJSON']['array'];
        console.log('this.bonusStatementsList', this.bonusStatementsList);
        if (!(this.bonusStatementsList.length > 0)) {
          this.canTryAgain = false;
          this.errorMsg = this.translate.instant('generic_msgs.no_data');
        }
      }, err => {
        this.canTryAgain = true;
        this.showError(err);
      });
    } else {
      this.canTryAgain = true;
      this.errorMsg = this.translate.instant('generic_msgs.network_err');
    }
  }
  /**
  * This method is used to get list of MAF Statements
  */
  GetMAFStatement() {
    if (this.utilServices.isDeviceOnLine()) {
      this.canTryAgain = false;
      this.utilServices.showProgressLoader();
      this.errorMsg = "";
      this.logger.trace("get MAF Statements--start");
      this.getStatementsService.getMAFStatement().then(result => {
        this.utilServices.dissmisProgressLoader();
        this.MAFStatementsList = result['responseJSON']['array'];
        console.log('this.MAFStatementsList', this.MAFStatementsList);
        if (!(this.MAFStatementsList.length > 0)) {
          this.canTryAgain = false;
          this.errorMsg = this.translate.instant('generic_msgs.no_data');
        }
      }, err => {
        this.canTryAgain = true;
        this.showError(err);
      });
    } else {
      this.canTryAgain = true;
      this.errorMsg = this.translate.instant('generic_msgs.network_err');
    }
  }
  /**
  * This method is used to get list of Education Booster Statements
  */
  GetEducationBoosterFundStatement() {
    if (this.utilServices.isDeviceOnLine()) {
      this.canTryAgain = false;
      this.utilServices.showProgressLoader();
      this.errorMsg = "";
      this.logger.trace("get Appf Statements--start");
      this.getStatementsService.getEducationBoosterFundStatement().then(result => {
        this.utilServices.dissmisProgressLoader();
        this.EducationBoosterFundStatementsList = result['responseJSON']['array'];
        console.log('this.EducationBoosterFundStatementsList', this.EducationBoosterFundStatementsList);
        if (!(this.EducationBoosterFundStatementsList.length > 0)) {
          this.canTryAgain = false;
          this.errorMsg = this.translate.instant('generic_msgs.no_data');
        }
      }, err => {
        this.canTryAgain = true;
        this.showError(err);
      });
    } else {
      this.canTryAgain = true;
      this.errorMsg = this.translate.instant('generic_msgs.network_err');
    }
  }
  showError(err) {
    this.utilServices.dissmisProgressLoader();
    this.errorMsg = this.utilServices.handleServiceException(err);
  }
  /**toggle */
  toggleSection(toggleOption) {
    for (var key in this.isAccordian) {
      if (key == toggleOption) {
        this.isAccordian[key] = !this.isAccordian[key];
      } else {
        this.isAccordian[key] = false;
      }
    }
  }
}
AnnualStatementsPage.ɵfac = function AnnualStatementsPage_Factory(t) {
  return new (t || AnnualStatementsPage)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_providers_utils_utils_service__WEBPACK_IMPORTED_MODULE_1__.UtilService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_annualStatementsService__WEBPACK_IMPORTED_MODULE_2__.GetAnnualStatementsService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_providers_download_pdf_download_pdf__WEBPACK_IMPORTED_MODULE_3__.DownloadPdfProvider), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__.TranslateService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_providers_logger_service_logger_service__WEBPACK_IMPORTED_MODULE_4__.LoggerServiceProvider), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_providers_utils_config__WEBPACK_IMPORTED_MODULE_5__.ConfigProvider));
};
AnnualStatementsPage.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({
  type: AnnualStatementsPage,
  selectors: [["app-annual-statements"]],
  decls: 95,
  vars: 60,
  consts: [["mode", "ios"], ["color", "primary"], ["slot", "start"], ["text", "", "icon", "chevron-back-outline", 2, "padding-left", "15px", "font-size", "0.7rem"], [1, "bold-font"], [1, "sub_title", "ion-no-padding"], [1, "subheader_bg"], [1, "sub-header"], ["padding", "", "no-bounce", "", 1, "app_bg2", "text_color_base", "padding_015"], [1, "white_container_border_radius", "text_color_base", "padding_15"], [1, "listrow"], [3, "click"], ["size", "10", 1, "margin_top_bottom_auto"], [1, "listLabel"], ["size", "2", "class", "ion-text-center", "class", "margin_top_bottom_auto", 4, "ngIf"], [3, "ngClass", 4, "ngIf"], ["size", "2", 1, "margin_top_bottom_auto"], [1, "fas", "fa-angle-right", "font_size_20"], [1, "fas", "fa-angle-down", "font_size_20"], [3, "ngClass"], ["class", "errorMsgSection", 4, "ngIf"], [4, "ngIf"], [1, "errorMsgSection"], [3, "click", 4, "ngIf"], [1, "heading", "contentMargin"], [1, "ion-text-center"], [4, "ngFor", "ngForOf"], [1, "ion-text-center", "year", 3, "click"]],
  template: function AnnualStatementsPage_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "ion-header", 0)(1, "ion-toolbar", 1)(2, "ion-buttons", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](3, "ion-back-button", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "ion-title", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](6, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "ion-toolbar", 5)(8, "ion-row", 6)(9, "ion-label", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](10);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](11, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](12, "ion-content", 8)(13, "div", 9)(14, "div", 10)(15, "ion-row", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function AnnualStatementsPage_Template_ion_row_click_15_listener() {
        return ctx.navToPremiumStmts();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](16, "ion-col", 12)(17, "ion-label", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](18);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](19, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](20, AnnualStatementsPage_ion_col_20_Template, 2, 0, "ion-col", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](21, AnnualStatementsPage_ion_col_21_Template, 2, 0, "ion-col", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](22, AnnualStatementsPage_div_22_Template, 3, 5, "div", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](23, "div", 10)(24, "ion-row", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function AnnualStatementsPage_Template_ion_row_click_24_listener() {
        return ctx.navToUnitStmts();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](25, "ion-col", 12)(26, "ion-label", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](27);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](28, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](29, AnnualStatementsPage_ion_col_29_Template, 2, 0, "ion-col", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](30, AnnualStatementsPage_ion_col_30_Template, 2, 0, "ion-col", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](31, AnnualStatementsPage_div_31_Template, 3, 5, "div", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](32, "div", 10)(33, "ion-row", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function AnnualStatementsPage_Template_ion_row_click_33_listener() {
        return ctx.navToPAStmts();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](34, "ion-col", 12)(35, "ion-label", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](36);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](37, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](38, AnnualStatementsPage_ion_col_38_Template, 2, 0, "ion-col", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](39, AnnualStatementsPage_ion_col_39_Template, 2, 0, "ion-col", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](40, AnnualStatementsPage_div_40_Template, 3, 5, "div", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](41, "div", 10)(42, "ion-row", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function AnnualStatementsPage_Template_ion_row_click_42_listener() {
        return ctx.navToUAStmts();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](43, "ion-col", 12)(44, "ion-label", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](45);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](46, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](47, AnnualStatementsPage_ion_col_47_Template, 2, 0, "ion-col", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](48, AnnualStatementsPage_ion_col_48_Template, 2, 0, "ion-col", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](49, AnnualStatementsPage_div_49_Template, 3, 5, "div", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](50, "div", 10)(51, "ion-row", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function AnnualStatementsPage_Template_ion_row_click_51_listener() {
        return ctx.navToAppfStmts();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](52, "ion-col", 12)(53, "ion-label", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](54);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](55, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](56, AnnualStatementsPage_ion_col_56_Template, 2, 0, "ion-col", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](57, AnnualStatementsPage_ion_col_57_Template, 2, 0, "ion-col", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](58, AnnualStatementsPage_div_58_Template, 3, 5, "div", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](59, "div", 10)(60, "ion-row", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function AnnualStatementsPage_Template_ion_row_click_60_listener() {
        return ctx.navToUniversalStmts();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](61, "ion-col", 12)(62, "ion-label", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](63);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](64, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](65, AnnualStatementsPage_ion_col_65_Template, 2, 0, "ion-col", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](66, AnnualStatementsPage_ion_col_66_Template, 2, 0, "ion-col", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](67, AnnualStatementsPage_div_67_Template, 3, 5, "div", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](68, "div", 10)(69, "ion-row", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function AnnualStatementsPage_Template_ion_row_click_69_listener() {
        return ctx.navToBonusStmts();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](70, "ion-col", 12)(71, "ion-label", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](72);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](73, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](74, AnnualStatementsPage_ion_col_74_Template, 2, 0, "ion-col", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](75, AnnualStatementsPage_ion_col_75_Template, 2, 0, "ion-col", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](76, AnnualStatementsPage_div_76_Template, 3, 5, "div", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](77, "div", 10)(78, "ion-row", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function AnnualStatementsPage_Template_ion_row_click_78_listener() {
        return ctx.navToMAFStmts();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](79, "ion-col", 12)(80, "ion-label", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](81);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](82, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](83, AnnualStatementsPage_ion_col_83_Template, 2, 0, "ion-col", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](84, AnnualStatementsPage_ion_col_84_Template, 2, 0, "ion-col", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](85, AnnualStatementsPage_div_85_Template, 3, 5, "div", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](86, "div")(87, "ion-row", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function AnnualStatementsPage_Template_ion_row_click_87_listener() {
        return ctx.navToEducationStmts();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](88, "ion-col", 12)(89, "ion-label", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](90);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](91, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](92, AnnualStatementsPage_ion_col_92_Template, 2, 0, "ion-col", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](93, AnnualStatementsPage_ion_col_93_Template, 2, 0, "ion-col", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](94, AnnualStatementsPage_div_94_Template, 3, 5, "div", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](6, 38, "downloads.download"));
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](11, 40, "annual_stmts.title"));
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](8);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](19, 42, "annual_stmts.premium_stmts"));
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !ctx.isAccordian.PremiumStatements);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.isAccordian.PremiumStatements);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.isAccordian.PremiumStatements);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](28, 44, "annual_stmts.unit_stmts"));
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !ctx.isAccordian.UnitStatements);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.isAccordian.UnitStatements);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.isAccordian.UnitStatements);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](37, 46, "annual_stmts.pa_stmts"));
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !ctx.isAccordian.PaStatements);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.isAccordian.PaStatements);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.isAccordian.PaStatements);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](46, 48, "annual_stmts.ua_stmts"));
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !ctx.isAccordian.UaStatements);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.isAccordian.UaStatements);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.isAccordian.UaStatements);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](55, 50, "annual_stmts.appf_stmts"));
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !ctx.isAccordian.AppfStatements);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.isAccordian.AppfStatements);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.isAccordian.AppfStatements);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](64, 52, "annual_stmts.universal_stmts"));
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !ctx.isAccordian.UniversalStatements);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.isAccordian.UniversalStatements);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.isAccordian.UniversalStatements);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](73, 54, "annual_stmts.bonus_stmts"));
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !ctx.isAccordian.BonusStatements);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.isAccordian.BonusStatements);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.isAccordian.BonusStatements);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](82, 56, "annual_stmts.maf_stmts"));
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !ctx.isAccordian.MAFStatements);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.isAccordian.MAFStatements);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.isAccordian.MAFStatements);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](91, 58, "annual_stmts.education_stmts"));
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !ctx.isAccordian.EduStatements);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.isAccordian.EduStatements);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.isAccordian.EduStatements);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgIf, _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.IonBackButton, _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.IonButtons, _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.IonCol, _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.IonContent, _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.IonHeader, _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.IonLabel, _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.IonRow, _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.IonTitle, _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.IonToolbar, _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.IonBackButtonDelegate, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__.TranslatePipe],
  styles: [".sub_title[_ngcontent-%COMP%] {\n  margin-top: 3px !important;\n}\n\nion-row[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n}\n\n.scroll-content[_ngcontent-%COMP%] {\n  padding: 30px 15px 15px !important;\n}\n\n.padding_15[_ngcontent-%COMP%] {\n  padding: 0px 15px;\n}\n\n.sub-header[_ngcontent-%COMP%] {\n  font-size: 1.7rem !important;\n}\n\n.listLabel[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  line-height: 40px;\n  font-family: Agenda-Regular;\n  font-weight: 400;\n  margin: 10px 8px 10px 0px;\n}\n\n.listrow[_ngcontent-%COMP%] {\n  border-bottom: 1px solid #002d3d;\n}\n\n.contentMargin[_ngcontent-%COMP%] {\n  margin-bottom: 10px;\n}\n\n.polNo[_ngcontent-%COMP%] {\n  font-family: Agenda-Regular !important;\n  line-height: 16px;\n  font-size: 14px;\n  color: #002d3d;\n}\n\n.year[_ngcontent-%COMP%] {\n  font-family: Agenda-Regular !important;\n  line-height: 16px;\n  font-size: 14px;\n  color: #6095c9;\n}\n\n.display[_ngcontent-%COMP%] {\n  display: flex;\n}\n\n.statementsContent[_ngcontent-%COMP%] {\n  max-height: 200px;\n  overflow: hiden;\n  overflow-y: scroll;\n}\n\n@media screen and (min-height: 600px) and (max-height: 700px) {\n  .statementsContent[_ngcontent-%COMP%] {\n    max-height: 200px;\n    overflow: hiden;\n    overflow-y: scroll;\n  }\n}\n@media screen and (min-height: 320px) and (max-height: 500px) {\n  .statementsContent[_ngcontent-%COMP%] {\n    max-height: 150px;\n    overflow: hiden;\n    overflow-y: scroll;\n  }\n}\n.statementsContent[_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 0.2em;\n}\n\n.statementsContent[_ngcontent-%COMP%]::-webkit-scrollbar-track {\n  -webkit-box-shadow: inset 0 0 2px rgba(0, 0, 0, 0.3);\n}\n\n.statementsContent[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  background-color: darkgrey;\n  outline: 1px solid slategrey;\n}\n\n.errorMsgSection[_ngcontent-%COMP%] {\n  min-height: 100px;\n}\n\n.heading[_ngcontent-%COMP%]   .col[_ngcontent-%COMP%] {\n  color: #333333;\n}\n\n.sub-header[_ngcontent-%COMP%] {\n  color: #ffffff;\n  padding: 10px 25px !important;\n  margin: 0px !important;\n  font-size: 1rem !important;\n  font-family: Agenda-Regular;\n}\n\n.font_size_20[_ngcontent-%COMP%] {\n  font-size: 1rem !important;\n}\n\n.white_container_border_radius[_ngcontent-%COMP%] {\n  background-color: rgba(255, 255, 255, 0.7) !important;\n  border-radius: 15px !important;\n  margin: 15px;\n  padding: 15px;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcGFnZXMvYW5udWFsLXN0YXRlbWVudHMvYW5udWFsLXN0YXRlbWVudHMucGFnZS5zY3NzIiwid2VicGFjazovLy4vLi4vLi4vLi4vQWxsJTIwUHJvamVjdHMvTWFsYXlzaWFfQ2xpZW50QXBwX1JldmFtcC9TdW5BY2Nlc3NfSW9uaWM2X1JldmFtcC9zcmMvYXBwL3BhZ2VzL2FubnVhbC1zdGF0ZW1lbnRzL2FubnVhbC1zdGF0ZW1lbnRzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDSTtFQUNJLDBCQUFBO0FDQVI7O0FER0s7RUFDSSxtQkFBQTtBQ0FUOztBREdLO0VBQ0ksa0NBQUE7QUNBVDs7QURHSztFQUNJLGlCQUFBO0FDQVQ7O0FER0s7RUFDSSw0QkFBQTtBQ0FUOztBREdLO0VBQ0ksZUFBQTtFQUNBLGlCQUFBO0VBQ0EsMkJBQUE7RUFDQSxnQkFBQTtFQUNBLHlCQUFBO0FDQVQ7O0FER0s7RUFDSSxnQ0FBQTtBQ0FUOztBREdLO0VBQ0ksbUJBQUE7QUNBVDs7QURHSztFQUNJLHNDQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtBQ0FUOztBREdLO0VBQ0ksc0NBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0FDQVQ7O0FER0s7RUFDRyxhQUFBO0FDQVI7O0FER0s7RUFDSSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtBQ0FUOztBRElLO0VBQ0k7SUFDSSxpQkFBQTtJQUNBLGVBQUE7SUFDQSxrQkFBQTtFQ0RYO0FBQ0Y7QURJSztFQUNJO0lBQ0ksaUJBQUE7SUFDQSxlQUFBO0lBQ0Esa0JBQUE7RUNGWDtBQUNGO0FES0s7RUFDSSxZQUFBO0FDSFQ7O0FETUs7RUFDSSxvREFBQTtBQ0hUOztBRE1LO0VBQ0UsMEJBQUE7RUFDQSw0QkFBQTtBQ0hQOztBRE1LO0VBQ0ksaUJBQUE7QUNIVDs7QURNSztFQUNJLGNBQUE7QUNIVDs7QURLSztFQUNHLGNBQUE7RUFDQSw2QkFBQTtFQUNBLHNCQUFBO0VBQ0EsMEJBQUE7RUFDQSwyQkFBQTtBQ0ZSOztBREtNO0VBQ0UsMEJBQUE7QUNGUjs7QURJSTtFQUNJLHFEQUFBO0VBQ0EsOEJBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtBQ0RSIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbiAgICAuc3ViX3RpdGxle1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDNweCAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG4gXHJcbiAgICAgaW9uLXJvdzpsYXN0LWNoaWxke1xyXG4gICAgICAgICBib3JkZXItYm90dG9tOiBub25lO1xyXG4gICAgIH1cclxuIFxyXG4gICAgIC5zY3JvbGwtY29udGVudCB7XHJcbiAgICAgICAgIHBhZGRpbmc6IDMwcHggMTVweCAxNXB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgfVxyXG4gXHJcbiAgICAgLnBhZGRpbmdfMTV7XHJcbiAgICAgICAgIHBhZGRpbmc6IDBweCAxNXB4O1xyXG4gICAgIH1cclxuIFxyXG4gICAgIC5zdWItaGVhZGVye1xyXG4gICAgICAgICBmb250LXNpemU6IDEuN3JlbSAhaW1wb3J0YW50O1xyXG4gICAgIH1cclxuIFxyXG4gICAgIC5saXN0TGFiZWx7XHJcbiAgICAgICAgIGZvbnQtc2l6ZTogMS4wcmVtO1xyXG4gICAgICAgICBsaW5lLWhlaWdodDogNDBweDtcclxuICAgICAgICAgZm9udC1mYW1pbHk6IEFnZW5kYS1SZWd1bGFyO1xyXG4gICAgICAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgICAgICBtYXJnaW46IDEwcHggOHB4IDEwcHggMHB4O1xyXG4gICAgIH1cclxuIFxyXG4gICAgIC5saXN0cm93e1xyXG4gICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzAwMmQzZDtcclxuICAgICB9XHJcbiBcclxuICAgICAuY29udGVudE1hcmdpbntcclxuICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICAgICB9XHJcbiBcclxuICAgICAucG9sTm97XHJcbiAgICAgICAgIGZvbnQtZmFtaWx5OiBBZ2VuZGEtUmVndWxhciAhaW1wb3J0YW50O1xyXG4gICAgICAgICBsaW5lLWhlaWdodDogMTZweDtcclxuICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgICBjb2xvcjogIzAwMmQzZDtcclxuICAgICB9XHJcbiBcclxuICAgICAueWVhcntcclxuICAgICAgICAgZm9udC1mYW1pbHk6IEFnZW5kYS1SZWd1bGFyICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgIGxpbmUtaGVpZ2h0OiAxNnB4O1xyXG4gICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgIGNvbG9yOiAjNjA5NWM5O1xyXG4gICAgICAgICAvL2Rpc3BsYXk6IGZsZXg7XHJcbiAgICAgfVxyXG4gICAgIC5kaXNwbGF5e1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgfVxyXG4gXHJcbiAgICAgLnN0YXRlbWVudHNDb250ZW50e1xyXG4gICAgICAgICBtYXgtaGVpZ2h0OiAyMDBweDtcclxuICAgICAgICAgb3ZlcmZsb3c6IGhpZGVuO1xyXG4gICAgICAgICBvdmVyZmxvdy15OiBzY3JvbGw7XHJcbiAgICAgfVxyXG4gXHJcbiBcclxuICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLWhlaWdodCA6IDYwMHB4KSBhbmQgKG1heC1oZWlnaHQgOiA3MDBweCkge1xyXG4gICAgICAgICAuc3RhdGVtZW50c0NvbnRlbnR7XHJcbiAgICAgICAgICAgICBtYXgtaGVpZ2h0OiAyMDBweDtcclxuICAgICAgICAgICAgIG92ZXJmbG93OiBoaWRlbjtcclxuICAgICAgICAgICAgIG92ZXJmbG93LXk6IHNjcm9sbDtcclxuICAgICAgICAgfVxyXG4gICAgIH1cclxuIFxyXG4gICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4taGVpZ2h0IDogMzIwcHgpIGFuZCAobWF4LWhlaWdodCA6IDUwMHB4KSB7XHJcbiAgICAgICAgIC5zdGF0ZW1lbnRzQ29udGVudHtcclxuICAgICAgICAgICAgIG1heC1oZWlnaHQ6IDE1MHB4O1xyXG4gICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGVuO1xyXG4gICAgICAgICAgICAgb3ZlcmZsb3cteTogc2Nyb2xsO1xyXG4gICAgICAgICB9XHJcbiAgICAgfVxyXG4gXHJcbiAgICAgLnN0YXRlbWVudHNDb250ZW50Ojotd2Via2l0LXNjcm9sbGJhciB7XHJcbiAgICAgICAgIHdpZHRoOiAuMmVtO1xyXG4gICAgIH1cclxuICAgICAgXHJcbiAgICAgLnN0YXRlbWVudHNDb250ZW50Ojotd2Via2l0LXNjcm9sbGJhci10cmFjayB7XHJcbiAgICAgICAgIC13ZWJraXQtYm94LXNoYWRvdzogaW5zZXQgMCAwIDJweCByZ2JhKDAsMCwwLDAuMyk7XHJcbiAgICAgfVxyXG4gICAgICBcclxuICAgICAuc3RhdGVtZW50c0NvbnRlbnQ6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcclxuICAgICAgIGJhY2tncm91bmQtY29sb3I6IGRhcmtncmV5O1xyXG4gICAgICAgb3V0bGluZTogMXB4IHNvbGlkIHNsYXRlZ3JleTtcclxuICAgICB9XHJcbiBcclxuICAgICAuZXJyb3JNc2dTZWN0aW9ue1xyXG4gICAgICAgICBtaW4taGVpZ2h0OiAxMDBweDtcclxuICAgICB9XHJcbiBcclxuICAgICAuaGVhZGluZyAuY29se1xyXG4gICAgICAgICBjb2xvcjogIzMzMzMzMztcclxuICAgICB9XHJcbiAgICAgLnN1Yi1oZWFkZXIge1xyXG4gICAgICAgIGNvbG9yOiAjZmZmZmZmO1xyXG4gICAgICAgIHBhZGRpbmc6IDEwcHggMjVweCAhaW1wb3J0YW50O1xyXG4gICAgICAgIG1hcmdpbjogMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgZm9udC1zaXplOiAxLjByZW0gIWltcG9ydGFudDtcclxuICAgICAgICBmb250LWZhbWlseTogQWdlbmRhLVJlZ3VsYXI7XHJcbiAgICAgICAgLy9saW5lLWhlaWdodDogMjRweDs7XHJcbiAgICAgIH1cclxuICAgICAgLmZvbnRfc2l6ZV8yMCB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxcmVtICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbiAgICAud2hpdGVfY29udGFpbmVyX2JvcmRlcl9yYWRpdXMge1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC43KSAhaW1wb3J0YW50O1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDE1cHggIWltcG9ydGFudDtcclxuICAgICAgICBtYXJnaW46IDE1cHg7XHJcbiAgICAgICAgcGFkZGluZzogMTVweDtcclxuICAgIH0iLCIuc3ViX3RpdGxlIHtcbiAgbWFyZ2luLXRvcDogM3B4ICFpbXBvcnRhbnQ7XG59XG5cbmlvbi1yb3c6bGFzdC1jaGlsZCB7XG4gIGJvcmRlci1ib3R0b206IG5vbmU7XG59XG5cbi5zY3JvbGwtY29udGVudCB7XG4gIHBhZGRpbmc6IDMwcHggMTVweCAxNXB4ICFpbXBvcnRhbnQ7XG59XG5cbi5wYWRkaW5nXzE1IHtcbiAgcGFkZGluZzogMHB4IDE1cHg7XG59XG5cbi5zdWItaGVhZGVyIHtcbiAgZm9udC1zaXplOiAxLjdyZW0gIWltcG9ydGFudDtcbn1cblxuLmxpc3RMYWJlbCB7XG4gIGZvbnQtc2l6ZTogMXJlbTtcbiAgbGluZS1oZWlnaHQ6IDQwcHg7XG4gIGZvbnQtZmFtaWx5OiBBZ2VuZGEtUmVndWxhcjtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgbWFyZ2luOiAxMHB4IDhweCAxMHB4IDBweDtcbn1cblxuLmxpc3Ryb3cge1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzAwMmQzZDtcbn1cblxuLmNvbnRlbnRNYXJnaW4ge1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufVxuXG4ucG9sTm8ge1xuICBmb250LWZhbWlseTogQWdlbmRhLVJlZ3VsYXIgIWltcG9ydGFudDtcbiAgbGluZS1oZWlnaHQ6IDE2cHg7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgY29sb3I6ICMwMDJkM2Q7XG59XG5cbi55ZWFyIHtcbiAgZm9udC1mYW1pbHk6IEFnZW5kYS1SZWd1bGFyICFpbXBvcnRhbnQ7XG4gIGxpbmUtaGVpZ2h0OiAxNnB4O1xuICBmb250LXNpemU6IDE0cHg7XG4gIGNvbG9yOiAjNjA5NWM5O1xufVxuXG4uZGlzcGxheSB7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG5cbi5zdGF0ZW1lbnRzQ29udGVudCB7XG4gIG1heC1oZWlnaHQ6IDIwMHB4O1xuICBvdmVyZmxvdzogaGlkZW47XG4gIG92ZXJmbG93LXk6IHNjcm9sbDtcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi1oZWlnaHQ6IDYwMHB4KSBhbmQgKG1heC1oZWlnaHQ6IDcwMHB4KSB7XG4gIC5zdGF0ZW1lbnRzQ29udGVudCB7XG4gICAgbWF4LWhlaWdodDogMjAwcHg7XG4gICAgb3ZlcmZsb3c6IGhpZGVuO1xuICAgIG92ZXJmbG93LXk6IHNjcm9sbDtcbiAgfVxufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi1oZWlnaHQ6IDMyMHB4KSBhbmQgKG1heC1oZWlnaHQ6IDUwMHB4KSB7XG4gIC5zdGF0ZW1lbnRzQ29udGVudCB7XG4gICAgbWF4LWhlaWdodDogMTUwcHg7XG4gICAgb3ZlcmZsb3c6IGhpZGVuO1xuICAgIG92ZXJmbG93LXk6IHNjcm9sbDtcbiAgfVxufVxuLnN0YXRlbWVudHNDb250ZW50Ojotd2Via2l0LXNjcm9sbGJhciB7XG4gIHdpZHRoOiAwLjJlbTtcbn1cblxuLnN0YXRlbWVudHNDb250ZW50Ojotd2Via2l0LXNjcm9sbGJhci10cmFjayB7XG4gIC13ZWJraXQtYm94LXNoYWRvdzogaW5zZXQgMCAwIDJweCByZ2JhKDAsIDAsIDAsIDAuMyk7XG59XG5cbi5zdGF0ZW1lbnRzQ29udGVudDo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBkYXJrZ3JleTtcbiAgb3V0bGluZTogMXB4IHNvbGlkIHNsYXRlZ3JleTtcbn1cblxuLmVycm9yTXNnU2VjdGlvbiB7XG4gIG1pbi1oZWlnaHQ6IDEwMHB4O1xufVxuXG4uaGVhZGluZyAuY29sIHtcbiAgY29sb3I6ICMzMzMzMzM7XG59XG5cbi5zdWItaGVhZGVyIHtcbiAgY29sb3I6ICNmZmZmZmY7XG4gIHBhZGRpbmc6IDEwcHggMjVweCAhaW1wb3J0YW50O1xuICBtYXJnaW46IDBweCAhaW1wb3J0YW50O1xuICBmb250LXNpemU6IDFyZW0gIWltcG9ydGFudDtcbiAgZm9udC1mYW1pbHk6IEFnZW5kYS1SZWd1bGFyO1xufVxuXG4uZm9udF9zaXplXzIwIHtcbiAgZm9udC1zaXplOiAxcmVtICFpbXBvcnRhbnQ7XG59XG5cbi53aGl0ZV9jb250YWluZXJfYm9yZGVyX3JhZGl1cyB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC43KSAhaW1wb3J0YW50O1xuICBib3JkZXItcmFkaXVzOiAxNXB4ICFpbXBvcnRhbnQ7XG4gIG1hcmdpbjogMTVweDtcbiAgcGFkZGluZzogMTVweDtcbn0iXSwic291cmNlUm9vdCI6IiJ9 */"]
});

/***/ })

}]);
//# sourceMappingURL=src_app_pages_annual-statements_annual-statements_module_ts.js.map