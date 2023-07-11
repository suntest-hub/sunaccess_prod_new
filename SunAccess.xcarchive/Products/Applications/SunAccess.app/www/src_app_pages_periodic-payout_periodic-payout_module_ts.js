"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_periodic-payout_periodic-payout_module_ts"],{

/***/ 48113:
/*!*************************************************************************!*\
  !*** ./src/app/pages/periodic-payout/periodic-payout-routing.module.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PeriodicPayoutPageRoutingModule": () => (/* binding */ PeriodicPayoutPageRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _periodic_payout_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./periodic-payout.page */ 69786);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);




const routes = [{
  path: '',
  component: _periodic_payout_page__WEBPACK_IMPORTED_MODULE_0__.PeriodicPayoutPage
}];
class PeriodicPayoutPageRoutingModule {}
PeriodicPayoutPageRoutingModule.ɵfac = function PeriodicPayoutPageRoutingModule_Factory(t) {
  return new (t || PeriodicPayoutPageRoutingModule)();
};
PeriodicPayoutPageRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
  type: PeriodicPayoutPageRoutingModule
});
PeriodicPayoutPageRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](PeriodicPayoutPageRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
})();

/***/ }),

/***/ 58434:
/*!*****************************************************************!*\
  !*** ./src/app/pages/periodic-payout/periodic-payout.module.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PeriodicPayoutPageModule": () => (/* binding */ PeriodicPayoutPageModule)
/* harmony export */ });
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ 38699);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _periodic_payout_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./periodic-payout-routing.module */ 48113);
/* harmony import */ var _periodic_payout_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./periodic-payout.page */ 69786);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);







class PeriodicPayoutPageModule {}
PeriodicPayoutPageModule.ɵfac = function PeriodicPayoutPageModule_Factory(t) {
  return new (t || PeriodicPayoutPageModule)();
};
PeriodicPayoutPageModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
  type: PeriodicPayoutPageModule
});
PeriodicPayoutPageModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__.TranslateModule, _periodic_payout_routing_module__WEBPACK_IMPORTED_MODULE_0__.PeriodicPayoutPageRoutingModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](PeriodicPayoutPageModule, {
    declarations: [_periodic_payout_page__WEBPACK_IMPORTED_MODULE_1__.PeriodicPayoutPage],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__.TranslateModule, _periodic_payout_routing_module__WEBPACK_IMPORTED_MODULE_0__.PeriodicPayoutPageRoutingModule]
  });
})();

/***/ }),

/***/ 69786:
/*!***************************************************************!*\
  !*** ./src/app/pages/periodic-payout/periodic-payout.page.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PeriodicPayoutPage": () => (/* binding */ PeriodicPayoutPage)
/* harmony export */ });
/* harmony import */ var http_status_codes__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! http-status-codes */ 92788);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var src_app_services_translate_config_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/translate-config.service */ 45340);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ 38699);
/* harmony import */ var src_providers_logger_service_logger_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/providers/logger-service/logger-service */ 9999);
/* harmony import */ var _periodicPayoutService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./periodicPayoutService */ 57791);
/* harmony import */ var src_providers_utils_utils_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/providers/utils/utils.service */ 30423);
/* harmony import */ var src_providers_utils_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/providers/utils/config */ 43485);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/angular */ 93819);










function PeriodicPayoutPage_section_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "section", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "ion-spinner", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function PeriodicPayoutPage_section_13_ion_button_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ion-button", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function PeriodicPayoutPage_section_13_ion_button_3_Template_ion_button_click_0_listener() {
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
function PeriodicPayoutPage_section_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "section", 14)(1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](3, PeriodicPayoutPage_section_13_ion_button_3_Template, 3, 3, "ion-button", 15);
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
function PeriodicPayoutPage_section_14_ion_list_1_ion_row_1_ion_icon_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "ion-icon", 26);
  }
}
function PeriodicPayoutPage_section_14_ion_list_1_ion_row_1_ion_icon_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "ion-icon", 27);
  }
}
function PeriodicPayoutPage_section_14_ion_list_1_ion_row_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ion-row", 22)(1, "ion-item", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function PeriodicPayoutPage_section_14_ion_list_1_ion_row_1_Template_ion_item_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r15);
      const payoutList_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit;
      const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r13.expandItem(payoutList_r7));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](3, PeriodicPayoutPage_section_14_ion_list_1_ion_row_1_ion_icon_3_Template, 1, 0, "ion-icon", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](4, PeriodicPayoutPage_section_14_ion_list_1_ion_row_1_ion_icon_4_Template, 1, 0, "ion-icon", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const payoutList_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit;
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("", payoutList_r7.date, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx_r8.fdetails.expanded);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r8.fdetails.expanded);
  }
}
function PeriodicPayoutPage_section_14_ion_list_1_ion_row_2_ion_icon_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "ion-icon", 26);
  }
}
function PeriodicPayoutPage_section_14_ion_list_1_ion_row_2_ion_icon_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "ion-icon", 31);
  }
}
function PeriodicPayoutPage_section_14_ion_list_1_ion_row_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ion-row", 28)(1, "ion-item", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function PeriodicPayoutPage_section_14_ion_list_1_ion_row_2_Template_ion_item_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r21);
      const payoutList_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit;
      const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r19.expandItem(payoutList_r7));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](3, PeriodicPayoutPage_section_14_ion_list_1_ion_row_2_ion_icon_3_Template, 1, 0, "ion-icon", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](4, PeriodicPayoutPage_section_14_ion_list_1_ion_row_2_ion_icon_4_Template, 1, 0, "ion-icon", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const payoutList_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", payoutList_r7.type, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !payoutList_r7.expanded);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", payoutList_r7.expanded);
  }
}
function PeriodicPayoutPage_section_14_ion_list_1_div_3_p_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "p", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const payoutList_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](payoutList_r7.type);
  }
}
function PeriodicPayoutPage_section_14_ion_list_1_div_3_p_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "p", 36);
  }
}
function PeriodicPayoutPage_section_14_ion_list_1_div_3_p_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "p", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const payoutList_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](payoutList_r7.date);
  }
}
function PeriodicPayoutPage_section_14_ion_list_1_div_3_p_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "p", 36);
  }
}
function PeriodicPayoutPage_section_14_ion_list_1_div_3_p_20_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "p", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const payoutList_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](payoutList_r7.date);
  }
}
function PeriodicPayoutPage_section_14_ion_list_1_div_3_p_21_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "p", 36);
  }
}
function PeriodicPayoutPage_section_14_ion_list_1_div_3_p_27_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "p", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const payoutList_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](payoutList_r7.paymentMethod);
  }
}
function PeriodicPayoutPage_section_14_ion_list_1_div_3_p_28_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "p", 36);
  }
}
function PeriodicPayoutPage_section_14_ion_list_1_div_3_p_34_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "p", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const payoutList_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](payoutList_r7.remarks);
  }
}
function PeriodicPayoutPage_section_14_ion_list_1_div_3_p_35_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "p", 36);
  }
}
function PeriodicPayoutPage_section_14_ion_list_1_div_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 32)(1, "ion-row")(2, "div", 33)(3, "p", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](6, PeriodicPayoutPage_section_14_ion_list_1_div_3_p_6_Template, 2, 1, "p", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](7, PeriodicPayoutPage_section_14_ion_list_1_div_3_p_7_Template, 1, 0, "p", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "ion-row")(9, "div", 33)(10, "p", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](12, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](13, PeriodicPayoutPage_section_14_ion_list_1_div_3_p_13_Template, 2, 1, "p", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](14, PeriodicPayoutPage_section_14_ion_list_1_div_3_p_14_Template, 1, 0, "p", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](15, "ion-row")(16, "div", 33)(17, "p", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](19, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](20, PeriodicPayoutPage_section_14_ion_list_1_div_3_p_20_Template, 2, 1, "p", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](21, PeriodicPayoutPage_section_14_ion_list_1_div_3_p_21_Template, 1, 0, "p", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](22, "ion-row")(23, "div", 33)(24, "p", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](25);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](26, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](27, PeriodicPayoutPage_section_14_ion_list_1_div_3_p_27_Template, 2, 1, "p", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](28, PeriodicPayoutPage_section_14_ion_list_1_div_3_p_28_Template, 1, 0, "p", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](29, "ion-row")(30, "div", 33)(31, "p", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](32);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](33, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](34, PeriodicPayoutPage_section_14_ion_list_1_div_3_p_34_Template, 2, 1, "p", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](35, PeriodicPayoutPage_section_14_ion_list_1_div_3_p_35_Template, 1, 0, "p", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const payoutList_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](5, 15, "periodic_payouts.type"));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", payoutList_r7.type);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !payoutList_r7.type);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](12, 17, "periodic_payouts.date"));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", payoutList_r7.date);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !payoutList_r7.date);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](19, 19, "periodic_payouts.date"));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", payoutList_r7.date);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !payoutList_r7.date);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](26, 21, "periodic_payouts.payment_method"));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", payoutList_r7.paymentMethod);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !payoutList_r7.paymentMethod);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](33, 23, "periodic_payouts.remarks"));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", payoutList_r7.remarks);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !payoutList_r7.remarks);
  }
}
function PeriodicPayoutPage_section_14_ion_list_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ion-list", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, PeriodicPayoutPage_section_14_ion_list_1_ion_row_1_Template, 5, 3, "ion-row", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](2, PeriodicPayoutPage_section_14_ion_list_1_ion_row_2_Template, 5, 3, "ion-row", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](3, PeriodicPayoutPage_section_14_ion_list_1_div_3_Template, 36, 25, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const payoutList_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", payoutList_r7.Date);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !payoutList_r7.Date);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", payoutList_r7.expanded);
  }
}
function PeriodicPayoutPage_section_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "section");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, PeriodicPayoutPage_section_14_ion_list_1_Template, 4, 3, "ion-list", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx_r2.periodicPayoutlist);
  }
}
const _c0 = function (a0, a1) {
  return {
    "bg-conventional": a0,
    "bg-takaful": a1
  };
};
class PeriodicPayoutPage {
  constructor(translateConfigService, translate, logger, periodicPayoutService, utils, config) {
    this.translateConfigService = translateConfigService;
    this.translate = translate;
    this.logger = logger;
    this.periodicPayoutService = periodicPayoutService;
    this.utils = utils;
    this.config = config;
    this.isShowingLoader = true;
    this.periodicPayoutlist = [];
    this.canTryAgain = false;
    /**
     * This is method is used to get list of payment records
     */
    this.getPeriodicPayoutList = function () {
      if (this.utils.isDeviceOnLine()) {
        this.canTryAgain = false;
        this.periodicPayoutService.getPeriodicPayoutList(this.encryptedPolicyNo).then(res => {
          try {
            this.isShowingLoader = false;
            if (res['responseJSON'] && res['responseJSON']['statusCode'] == http_status_codes__WEBPACK_IMPORTED_MODULE_6__.OK) {
              this.periodicPayoutlist = res['responseJSON']['array'];
              if (!(this.periodicPayoutlist.length > 0)) {
                this.errorMsg = this.translate.instant('generic_msgs.no_data');
              }
            } else {
              this.errorMsg = res['responseJSON']['error_description'];
            }
          } catch (e) {
            this.isShowingLoader = false;
            this.canTryAgain = true;
            this.logger.error("getPaymentRecords catch eror : " + JSON.stringify(e));
            this.errorMsg = this.translate.instant('generic_msgs.server_err');
          }
        }, err => {
          this.isShowingLoader = false;
          this.canTryAgain = true;
          this.errorMsg = this.utils.handleServiceException(err);
        });
      }
    };
    this.selectedLanguage = this.translateConfigService.getDefaultLanguage();
    this.translateConfigService.setLanguage('en');
    this.utils.analytics("periodicPayout");
    this.config.currentPage.pageName = "PeriodicPayoutPage";
    this.selectedPolicyData = history.state.policyData;
    this.selectedPlanType = this.selectedPolicyData['planType'];
    this.encryptedPolicyNo = this.selectedPolicyData['encryptedPolicyNo'];
  }
  ngOnInit() {
    this.getPeriodicPayoutList();
  }
  ionViewDidLoad() {
    this.logger.log('ionViewDidLoad PeriodicPayoutPage');
    this.getPeriodicPayoutList();
  }
  /**
   * This method is used to expand or collapse and Item
   * @param item - selected itme that need to be expanded or collapsed
   */
  expandItem(item) {
    this.periodicPayoutlist.map(listItem => {
      if (item == listItem) {
        listItem.expanded = !listItem.expanded;
      } else {
        listItem.expanded = false;
      }
      return listItem;
    });
  }
}
PeriodicPayoutPage.ɵfac = function PeriodicPayoutPage_Factory(t) {
  return new (t || PeriodicPayoutPage)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_services_translate_config_service__WEBPACK_IMPORTED_MODULE_0__.TranslateConfigService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__.TranslateService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_providers_logger_service_logger_service__WEBPACK_IMPORTED_MODULE_1__.LoggerServiceProvider), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_periodicPayoutService__WEBPACK_IMPORTED_MODULE_2__.GetPeriodicPayoutService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_providers_utils_utils_service__WEBPACK_IMPORTED_MODULE_3__.UtilService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_providers_utils_config__WEBPACK_IMPORTED_MODULE_4__.ConfigProvider));
};
PeriodicPayoutPage.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
  type: PeriodicPayoutPage,
  selectors: [["app-periodic-payout"]],
  decls: 15,
  vars: 11,
  consts: [["mode", "ios"], ["color", "primary", 2, "border-bottom", "3px solid white"], ["slot", "start"], ["text", "", "icon", "chevron-back-outline", 2, "padding-left", "15px", "font-size", "0.7rem"], [1, "bold-font"], ["color", "primary", 1, "tabs"], [2, "margin-bottom", "5px", 3, "ngClass"], [1, "sub-header"], [1, "app_bg2", "ion-padding"], ["class", "spinnersection ion-text-center", 4, "ngIf"], ["class", "errorMsgSection", 4, "ngIf"], [4, "ngIf"], [1, "spinnersection", "ion-text-center"], ["name", "lines-sharp-small", 2, "height", "98%"], [1, "errorMsgSection"], [3, "click", 4, "ngIf"], [3, "click"], ["class", "white_container_border_radius padding_15", 4, "ngFor", "ngForOf"], [1, "white_container_border_radius", "padding_15"], ["style", "border-bottom:none; padding: 10px;", 4, "ngIf"], ["lines", "none", "style", "border-bottom:none;padding: 10px;", 4, "ngIf"], ["class", "accordianContent", 4, "ngIf"], [2, "border-bottom", "none", "padding", "10px"], ["lines", "none", "lines", "none", 1, "font_size_14", 3, "click"], ["style", "color:white", "slot", "end", "name", "chevron-forward-outline", 4, "ngIf"], ["slot", "end", "name", "chevron-down-outline", 4, "ngIf"], ["slot", "end", "name", "chevron-forward-outline", 2, "color", "white"], ["slot", "end", "name", "chevron-down-outline"], ["lines", "none", 2, "border-bottom", "none", "padding", "10px"], ["lines", "none", 1, "font_size_14", 3, "click"], ["style", "color:white", "slot", "end", "name", "chevron-down-outline", 4, "ngIf"], ["slot", "end", "name", "chevron-down-outline", 2, "color", "white"], [1, "accordianContent"], [1, "margin_top_bottom_auto", "div-padding"], [1, "lbl-header"], ["class", "lbl-content", 4, "ngIf"], [1, "lbl-content"]],
  template: function PeriodicPayoutPage_Template(rf, ctx) {
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
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](12, PeriodicPayoutPage_section_12_Template, 2, 0, "section", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](13, PeriodicPayoutPage_section_13_Template, 4, 2, "section", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](14, PeriodicPayoutPage_section_14_Template, 2, 1, "section", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", ctx.selectedPolicyData["policyNumber"], "");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction2"](8, _c0, ctx.selectedPlanType === "Conventional", ctx.selectedPlanType !== "Conventional"));
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](10, 6, "periodic_payouts.title"));
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.isShowingLoader);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !(ctx.periodicPayoutlist.length > 0) && !ctx.isShowingLoader);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.periodicPayoutlist.length > 0);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgIf, _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.IonBackButton, _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.IonButton, _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.IonButtons, _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.IonContent, _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.IonHeader, _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.IonIcon, _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.IonItem, _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.IonLabel, _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.IonList, _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.IonRow, _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.IonSpinner, _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.IonTitle, _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.IonToolbar, _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.IonBackButtonDelegate, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__.TranslatePipe],
  styles: [".app_bg2[_ngcontent-%COMP%] {\n  --background: url('app_bg_2.jpg') no-repeat center center / cover;\n  background-size: cover;\n  background-repeat: no-repeat;\n  height: 100%;\n  background-position: bottom;\n}\n\n.sub-header[_ngcontent-%COMP%] {\n  color: #ffffff;\n  padding: 10px 25px !important;\n  margin: 0px !important;\n  font-size: 1.1rem !important;\n  font-family: Agenda-Regular;\n}\n\n.tabs[_ngcontent-%COMP%] {\n  border-top: 3px solid color white;\n  --padding-top: -4px;\n  --padding-start: -4px;\n  --padding-end: -4px;\n  --min-height: 44px;\n}\n\n.white_container_border_radius[_ngcontent-%COMP%] {\n  background-color: rgba(255, 255, 255, 0.7) !important;\n  border-radius: 15px !important;\n}\n\n.spinnersection[_ngcontent-%COMP%] {\n  display: block;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  font-size: 1.3rem;\n  height: 98%;\n}\n\n.scroll-content[_ngcontent-%COMP%] {\n  padding: 0px !important;\n}\n\n.item.item-block[_ngcontent-%COMP%]   .item-inner[_ngcontent-%COMP%] {\n  padding-right: 0px;\n  border-bottom: none !important;\n}\n\n.ion-ios-arrow-forward[_ngcontent-%COMP%]:before, .ion-ios-arrow-down[_ngcontent-%COMP%]:before {\n  font-size: 1.5rem !important;\n  font-weight: 600 !important;\n}\n\n.item[_ngcontent-%COMP%] {\n  padding: 0px 0px !important;\n  --background: --ion-color-secondary;\n  color: white;\n}\n\n.item[_ngcontent-%COMP%]   ion-icon[item-right][_ngcontent-%COMP%] {\n  margin: 0 !important;\n}\n\n.item[_ngcontent-%COMP%]    > ion-icon[_ngcontent-%COMP%], .item-inner[_ngcontent-%COMP%]    > ion-icon[_ngcontent-%COMP%] {\n  min-height: 1.8rem;\n  font-size: 1.2rem;\n  line-height: 1;\n}\n\n.accordianContent[_ngcontent-%COMP%] {\n  padding: 0px 25px;\n  color: #002d3d;\n}\n\n.div-padding[_ngcontent-%COMP%] {\n  padding: 10px 0;\n}\n\n.lbl-header[_ngcontent-%COMP%] {\n  padding: 0;\n  font-family: Agenda-Regular;\n  color: --ion-color-secondary;\n  font-size: 1rem;\n  line-height: 24px;\n  margin: 0;\n  font-weight: 600;\n}\n\n.lbl-content[_ngcontent-%COMP%] {\n  padding: 0;\n  font-family: Agenda-Regular;\n  color: --ion-color-secondary;\n  font-size: 1rem;\n  line-height: 24px;\n  margin: 0;\n  font-weight: 400;\n}\n\nion-label[_ngcontent-%COMP%] {\n  margin: 0px !important;\n}\n\nsection[_ngcontent-%COMP%]   ion-row[_ngcontent-%COMP%] {\n  border-bottom: 1px solid color #002d3d;\n  margin-top: 5px;\n}\n\nsection[_ngcontent-%COMP%]   ion-row[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n}\n\n.font_size_14[_ngcontent-%COMP%] {\n  font-size: 0.8rem !important;\n}\n\np[_ngcontent-%COMP%] {\n  margin-top: 5px;\n  margin-bottom: 2px;\n}\n\nion-row[_ngcontent-%COMP%] {\n  border-bottom: 1px solid rgba(0, 45, 61, 0.3);\n}\n\nion-list[_ngcontent-%COMP%]   ion-row[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n}\n\nion-item[_ngcontent-%COMP%] {\n  background: #002d3d;\n  color: white;\n  font-size: 10px;\n  font-weight: bold;\n  line-height: 20px;\n  width: 100%;\n  min-height: 3rem;\n  padding: 8px;\n  text-transform: capitalize;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcGFnZXMvcGVyaW9kaWMtcGF5b3V0L3BlcmlvZGljLXBheW91dC5wYWdlLnNjc3MiLCJ3ZWJwYWNrOi8vLi8uLi8uLi8uLi9BbGwlMjBQcm9qZWN0cy9NYWxheXNpYV9DbGllbnRBcHBfUmV2YW1wL1N1bkFjY2Vzc19Jb25pYzZfUmV2YW1wL3NyYy9hcHAvcGFnZXMvcGVyaW9kaWMtcGF5b3V0L3BlcmlvZGljLXBheW91dC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxpRUFBQTtFQUNBLHNCQUFBO0VBQ0EsNEJBQUE7RUFDQSxZQUFBO0VBQ0EsMkJBQUE7QUNDRjs7QURDQTtFQUNFLGNBQUE7RUFFQSw2QkFBQTtFQUNBLHNCQUFBO0VBQ0EsNEJBQUE7RUFDQSwyQkFBQTtBQ0NGOztBREVBO0VBQ0UsaUNBQUE7RUFDRSxtQkFBQTtFQUNBLHFCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBQ0NKOztBRENBO0VBQ0UscURBQUE7RUFDQSw4QkFBQTtBQ0VGOztBREVBO0VBQ0UsY0FBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0EsV0FBQTtBQ0NGOztBRENBO0VBQ0UsdUJBQUE7QUNFRjs7QURDQTtFQUNFLGtCQUFBO0VBQ0EsOEJBQUE7QUNFRjs7QURDQTtFQUNFLDRCQUFBO0VBQ0EsMkJBQUE7QUNFRjs7QURDQTtFQUNFLDJCQUFBO0VBQ0EsbUNBQUE7RUFDQSxZQUFBO0FDRUY7O0FEQ0E7RUFDRSxvQkFBQTtBQ0VGOztBRENBO0VBQ0Usa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7QUNFRjs7QURLQTtFQUNFLGlCQUFBO0VBQ0EsY0FBQTtBQ0ZGOztBRElBO0VBQ0UsZUFBQTtBQ0RGOztBREdBO0VBQ0UsVUFBQTtFQUNBLDJCQUFBO0VBQ0EsNEJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxTQUFBO0VBQ0EsZ0JBQUE7QUNBRjs7QURHQTtFQUNHLFVBQUE7RUFDQSwyQkFBQTtFQUNBLDRCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsU0FBQTtFQUNBLGdCQUFBO0FDQUg7O0FER0E7RUFDRyxzQkFBQTtBQ0FIOztBREtBO0VBQ0Usc0NBQUE7RUFDQSxlQUFBO0FDRkY7O0FES0E7RUFDRyxtQkFBQTtBQ0ZIOztBRElBO0VBQ0UsNEJBQUE7QUNERjs7QURJQTtFQUNFLGVBQUE7RUFDQSxrQkFBQTtBQ0RGOztBREdBO0VBQ0UsNkNBQUE7QUNBRjs7QURLQTtFQUNFLG1CQUFBO0FDRkY7O0FESUE7RUFJRSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLFdBQUE7RUFJQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSwwQkFBQTtBQ1BGIiwic291cmNlc0NvbnRlbnQiOlsiLmFwcF9iZzIge1xyXG4gIC0tYmFja2dyb3VuZDogdXJsKC4uLy4uLy4uL2Fzc2V0cy9pbWdzL2FwcF9iZ18yLmpwZykgbm8tcmVwZWF0IGNlbnRlciBjZW50ZXIgLyBjb3ZlcjtcclxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGJvdHRvbTtcclxufVxyXG4uc3ViLWhlYWRlciB7XHJcbiAgY29sb3I6ICNmZmZmZmY7XHJcblxyXG4gIHBhZGRpbmc6IDEwcHggMjVweCAhaW1wb3J0YW50O1xyXG4gIG1hcmdpbjogMHB4ICFpbXBvcnRhbnQ7XHJcbiAgZm9udC1zaXplOiAxLjFyZW0gIWltcG9ydGFudDtcclxuICBmb250LWZhbWlseTogQWdlbmRhLVJlZ3VsYXI7XHJcbiAgLy9saW5lLWhlaWdodDogMjRweDs7XHJcbn1cclxuLnRhYnN7XHJcbiAgYm9yZGVyLXRvcDogM3B4IHNvbGlkIGNvbG9yIHdoaXRlO1xyXG4gICAgLS1wYWRkaW5nLXRvcDogLTRweDtcclxuICAgIC0tcGFkZGluZy1zdGFydDogLTRweDtcclxuICAgIC0tcGFkZGluZy1lbmQ6IC00cHg7XHJcbiAgICAtLW1pbi1oZWlnaHQ6IDQ0cHg7XHJcbn1cclxuLndoaXRlX2NvbnRhaW5lcl9ib3JkZXJfcmFkaXVze1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC43KSAhaW1wb3J0YW50O1xyXG4gIGJvcmRlci1yYWRpdXM6IDE1cHggIWltcG9ydGFudDtcclxuXHJcbn1cclxuXHJcbi5zcGlubmVyc2VjdGlvbiB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGZvbnQtc2l6ZTogMS4zcmVtO1xyXG4gIGhlaWdodDogOTglO1xyXG59XHJcbi5zY3JvbGwtY29udGVudHtcclxuICBwYWRkaW5nOiAwcHggIWltcG9ydGFudDtcclxufVxyXG5cclxuLml0ZW0uaXRlbS1ibG9jayAuaXRlbS1pbm5lciB7XHJcbiAgcGFkZGluZy1yaWdodDogMHB4O1xyXG4gIGJvcmRlci1ib3R0b206IG5vbmUgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmlvbi1pb3MtYXJyb3ctZm9yd2FyZDpiZWZvcmUsLmlvbi1pb3MtYXJyb3ctZG93bjpiZWZvcmV7XHJcbiAgZm9udC1zaXplOiAxLjVyZW0gIWltcG9ydGFudDtcclxuICBmb250LXdlaWdodDogNjAwICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5pdGVte1xyXG4gIHBhZGRpbmc6ICAwcHggMHB4ICFpbXBvcnRhbnQ7XHJcbiAgLS1iYWNrZ3JvdW5kOiAtLWlvbi1jb2xvci1zZWNvbmRhcnk7XHJcbiAgY29sb3I6d2hpdGU7XHJcbn1cclxuXHJcbi5pdGVtIGlvbi1pY29uW2l0ZW0tcmlnaHRde1xyXG4gIG1hcmdpbiA6IDAgIWltcG9ydGFudDtcclxufVxyXG5cclxuLml0ZW0gPiBpb24taWNvbiwgLml0ZW0taW5uZXIgPiBpb24taWNvbiB7XHJcbiAgbWluLWhlaWdodDogMS44cmVtO1xyXG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xyXG4gIGxpbmUtaGVpZ2h0OiAxO1xyXG59XHJcblxyXG4vLyBpb24tbGlzdHtcclxuLy8gICBtYXJnaW46IDBweCAwIDVweDtcclxuLy8gfVxyXG5cclxuLmFjY29yZGlhbkNvbnRlbnR7XHJcbiAgcGFkZGluZzogMHB4IDI1cHg7XHJcbiAgY29sb3I6ICMwMDJkM2Q7XHJcbn1cclxuLmRpdi1wYWRkaW5ne1xyXG4gIHBhZGRpbmc6IDEwcHggMDtcclxufVxyXG4ubGJsLWhlYWRlcntcclxuICBwYWRkaW5nOiAwO1xyXG4gIGZvbnQtZmFtaWx5OiAgQWdlbmRhLVJlZ3VsYXI7XHJcbiAgY29sb3I6IC0taW9uLWNvbG9yLXNlY29uZGFyeTtcclxuICBmb250LXNpemU6IDEuMHJlbTtcclxuICBsaW5lLWhlaWdodDogMjRweDtcclxuICBtYXJnaW46IDA7XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxufVxyXG5cclxuLmxibC1jb250ZW50e1xyXG4gICBwYWRkaW5nOiAwO1xyXG4gICBmb250LWZhbWlseTogQWdlbmRhLVJlZ3VsYXI7XHJcbiAgIGNvbG9yOiAgLS1pb24tY29sb3Itc2Vjb25kYXJ5O1xyXG4gICBmb250LXNpemU6IDEuMHJlbTtcclxuICAgbGluZS1oZWlnaHQ6IDI0cHg7XHJcbiAgIG1hcmdpbjogMDtcclxuICAgZm9udC13ZWlnaHQ6IDQwMDtcclxufVxyXG5cclxuaW9uLWxhYmVsIHtcclxuICAgbWFyZ2luOiAwcHggIWltcG9ydGFudDtcclxufVxyXG5cclxuXHJcblxyXG5zZWN0aW9uIGlvbi1yb3d7XHJcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGNvbG9yICMwMDJkM2QgO1xyXG4gIG1hcmdpbi10b3A6IDVweDtcclxufVxyXG5cclxuc2VjdGlvbiBpb24tcm93Omxhc3QtY2hpbGR7XHJcbiAgIGJvcmRlci1ib3R0b206IG5vbmU7XHJcbn1cclxuLmZvbnRfc2l6ZV8xNCB7XHJcbiAgZm9udC1zaXplOiAwLjhyZW0gIWltcG9ydGFudDtcclxuXHJcbn1cclxucHtcclxuICBtYXJnaW4tdG9wOiA1cHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMnB4O1xyXG59XHJcbmlvbi1yb3cge1xyXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKDAsIDQ1LCA2MSwgLjMpO1xyXG4gIC8vbWFyZ2luLXRvcDogNXB4O1xyXG59XHJcblxyXG5cclxuaW9uLWxpc3QgaW9uLXJvdzpsYXN0LWNoaWxke1xyXG4gIGJvcmRlci1ib3R0b206IG5vbmU7XHJcbn1cclxuaW9uLWl0ZW0ge1xyXG4gIC8vYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgLy9ib3JkZXI6IDJweCBzb2xpZDtcclxuICAvL2JvcmRlci1yYWRpdXM6IDRweDtcclxuICBiYWNrZ3JvdW5kOiAjMDAyZDNkO1xyXG4gIGNvbG9yOndoaXRlO1xyXG4gIGZvbnQtc2l6ZTogMTBweDtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBsaW5lLWhlaWdodDogMjBweDtcclxuICB3aWR0aDoxMDAlO1xyXG5cclxuICAvL21hcmdpbjogMCAwIDAgMTZweDtcclxuICAvL21pbi13aWR0aDogMzUwcHg7XHJcbiAgbWluLWhlaWdodDogM3JlbTtcclxuICBwYWRkaW5nOiA4cHg7XHJcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XHJcbi8vICAgLmJ1dHRvbi1pbm5lciB7XHJcbi8vICAgICBmb250LXNpemU6IDI1cHg7XHJcbi8vICAgICBmb250LXdlaWdodDogYm9sZDtcclxuLy8gICAgIGp1c3RpZnktY29udGVudDogc3RhcnQgIWltcG9ydGFudDtcclxuLy8gfVxyXG5cclxufVxyXG5cclxuXHJcblxyXG5cclxuXHJcbiIsIi5hcHBfYmcyIHtcbiAgLS1iYWNrZ3JvdW5kOiB1cmwoLi4vLi4vLi4vYXNzZXRzL2ltZ3MvYXBwX2JnXzIuanBnKSBuby1yZXBlYXQgY2VudGVyIGNlbnRlciAvIGNvdmVyO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGJvdHRvbTtcbn1cblxuLnN1Yi1oZWFkZXIge1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgcGFkZGluZzogMTBweCAyNXB4ICFpbXBvcnRhbnQ7XG4gIG1hcmdpbjogMHB4ICFpbXBvcnRhbnQ7XG4gIGZvbnQtc2l6ZTogMS4xcmVtICFpbXBvcnRhbnQ7XG4gIGZvbnQtZmFtaWx5OiBBZ2VuZGEtUmVndWxhcjtcbn1cblxuLnRhYnMge1xuICBib3JkZXItdG9wOiAzcHggc29saWQgY29sb3Igd2hpdGU7XG4gIC0tcGFkZGluZy10b3A6IC00cHg7XG4gIC0tcGFkZGluZy1zdGFydDogLTRweDtcbiAgLS1wYWRkaW5nLWVuZDogLTRweDtcbiAgLS1taW4taGVpZ2h0OiA0NHB4O1xufVxuXG4ud2hpdGVfY29udGFpbmVyX2JvcmRlcl9yYWRpdXMge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNykgIWltcG9ydGFudDtcbiAgYm9yZGVyLXJhZGl1czogMTVweCAhaW1wb3J0YW50O1xufVxuXG4uc3Bpbm5lcnNlY3Rpb24ge1xuICBkaXNwbGF5OiBibG9jaztcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMS4zcmVtO1xuICBoZWlnaHQ6IDk4JTtcbn1cblxuLnNjcm9sbC1jb250ZW50IHtcbiAgcGFkZGluZzogMHB4ICFpbXBvcnRhbnQ7XG59XG5cbi5pdGVtLml0ZW0tYmxvY2sgLml0ZW0taW5uZXIge1xuICBwYWRkaW5nLXJpZ2h0OiAwcHg7XG4gIGJvcmRlci1ib3R0b206IG5vbmUgIWltcG9ydGFudDtcbn1cblxuLmlvbi1pb3MtYXJyb3ctZm9yd2FyZDpiZWZvcmUsIC5pb24taW9zLWFycm93LWRvd246YmVmb3JlIHtcbiAgZm9udC1zaXplOiAxLjVyZW0gIWltcG9ydGFudDtcbiAgZm9udC13ZWlnaHQ6IDYwMCAhaW1wb3J0YW50O1xufVxuXG4uaXRlbSB7XG4gIHBhZGRpbmc6IDBweCAwcHggIWltcG9ydGFudDtcbiAgLS1iYWNrZ3JvdW5kOiAtLWlvbi1jb2xvci1zZWNvbmRhcnk7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLml0ZW0gaW9uLWljb25baXRlbS1yaWdodF0ge1xuICBtYXJnaW46IDAgIWltcG9ydGFudDtcbn1cblxuLml0ZW0gPiBpb24taWNvbiwgLml0ZW0taW5uZXIgPiBpb24taWNvbiB7XG4gIG1pbi1oZWlnaHQ6IDEuOHJlbTtcbiAgZm9udC1zaXplOiAxLjJyZW07XG4gIGxpbmUtaGVpZ2h0OiAxO1xufVxuXG4uYWNjb3JkaWFuQ29udGVudCB7XG4gIHBhZGRpbmc6IDBweCAyNXB4O1xuICBjb2xvcjogIzAwMmQzZDtcbn1cblxuLmRpdi1wYWRkaW5nIHtcbiAgcGFkZGluZzogMTBweCAwO1xufVxuXG4ubGJsLWhlYWRlciB7XG4gIHBhZGRpbmc6IDA7XG4gIGZvbnQtZmFtaWx5OiBBZ2VuZGEtUmVndWxhcjtcbiAgY29sb3I6IC0taW9uLWNvbG9yLXNlY29uZGFyeTtcbiAgZm9udC1zaXplOiAxcmVtO1xuICBsaW5lLWhlaWdodDogMjRweDtcbiAgbWFyZ2luOiAwO1xuICBmb250LXdlaWdodDogNjAwO1xufVxuXG4ubGJsLWNvbnRlbnQge1xuICBwYWRkaW5nOiAwO1xuICBmb250LWZhbWlseTogQWdlbmRhLVJlZ3VsYXI7XG4gIGNvbG9yOiAtLWlvbi1jb2xvci1zZWNvbmRhcnk7XG4gIGZvbnQtc2l6ZTogMXJlbTtcbiAgbGluZS1oZWlnaHQ6IDI0cHg7XG4gIG1hcmdpbjogMDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbn1cblxuaW9uLWxhYmVsIHtcbiAgbWFyZ2luOiAwcHggIWltcG9ydGFudDtcbn1cblxuc2VjdGlvbiBpb24tcm93IHtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGNvbG9yICMwMDJkM2Q7XG4gIG1hcmdpbi10b3A6IDVweDtcbn1cblxuc2VjdGlvbiBpb24tcm93Omxhc3QtY2hpbGQge1xuICBib3JkZXItYm90dG9tOiBub25lO1xufVxuXG4uZm9udF9zaXplXzE0IHtcbiAgZm9udC1zaXplOiAwLjhyZW0gIWltcG9ydGFudDtcbn1cblxucCB7XG4gIG1hcmdpbi10b3A6IDVweDtcbiAgbWFyZ2luLWJvdHRvbTogMnB4O1xufVxuXG5pb24tcm93IHtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoMCwgNDUsIDYxLCAwLjMpO1xufVxuXG5pb24tbGlzdCBpb24tcm93Omxhc3QtY2hpbGQge1xuICBib3JkZXItYm90dG9tOiBub25lO1xufVxuXG5pb24taXRlbSB7XG4gIGJhY2tncm91bmQ6ICMwMDJkM2Q7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC1zaXplOiAxMHB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgbGluZS1oZWlnaHQ6IDIwcHg7XG4gIHdpZHRoOiAxMDAlO1xuICBtaW4taGVpZ2h0OiAzcmVtO1xuICBwYWRkaW5nOiA4cHg7XG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xufSJdLCJzb3VyY2VSb290IjoiIn0= */"]
});

/***/ })

}]);
//# sourceMappingURL=src_app_pages_periodic-payout_periodic-payout_module_ts.js.map