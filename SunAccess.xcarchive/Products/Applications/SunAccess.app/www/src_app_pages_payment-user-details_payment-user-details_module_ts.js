"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_payment-user-details_payment-user-details_module_ts"],{

/***/ 26066:
/*!***********************************************************************************!*\
  !*** ./src/app/pages/payment-user-details/payment-user-details-routing.module.ts ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PaymentUserDetailsPageRoutingModule": () => (/* binding */ PaymentUserDetailsPageRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _payment_user_details_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./payment-user-details.page */ 47400);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);




const routes = [{
  path: '',
  component: _payment_user_details_page__WEBPACK_IMPORTED_MODULE_0__.PaymentUserDetailsPage
}];
class PaymentUserDetailsPageRoutingModule {}
PaymentUserDetailsPageRoutingModule.ɵfac = function PaymentUserDetailsPageRoutingModule_Factory(t) {
  return new (t || PaymentUserDetailsPageRoutingModule)();
};
PaymentUserDetailsPageRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
  type: PaymentUserDetailsPageRoutingModule
});
PaymentUserDetailsPageRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](PaymentUserDetailsPageRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
})();

/***/ }),

/***/ 87329:
/*!***************************************************************************!*\
  !*** ./src/app/pages/payment-user-details/payment-user-details.module.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PaymentUserDetailsPageModule": () => (/* binding */ PaymentUserDetailsPageModule)
/* harmony export */ });
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ 38699);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _payment_user_details_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./payment-user-details-routing.module */ 26066);
/* harmony import */ var _payment_user_details_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./payment-user-details.page */ 47400);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);







class PaymentUserDetailsPageModule {}
PaymentUserDetailsPageModule.ɵfac = function PaymentUserDetailsPageModule_Factory(t) {
  return new (t || PaymentUserDetailsPageModule)();
};
PaymentUserDetailsPageModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
  type: PaymentUserDetailsPageModule
});
PaymentUserDetailsPageModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__.TranslateModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.ReactiveFormsModule, _payment_user_details_routing_module__WEBPACK_IMPORTED_MODULE_0__.PaymentUserDetailsPageRoutingModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](PaymentUserDetailsPageModule, {
    declarations: [_payment_user_details_page__WEBPACK_IMPORTED_MODULE_1__.PaymentUserDetailsPage],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__.TranslateModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.ReactiveFormsModule, _payment_user_details_routing_module__WEBPACK_IMPORTED_MODULE_0__.PaymentUserDetailsPageRoutingModule]
  });
})();

/***/ }),

/***/ 47400:
/*!*************************************************************************!*\
  !*** ./src/app/pages/payment-user-details/payment-user-details.page.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PaymentUserDetailsPage": () => (/* binding */ PaymentUserDetailsPage)
/* harmony export */ });
/* harmony import */ var src_providers_utils_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/providers/utils/config */ 43485);
/* harmony import */ var http_status_codes__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! http-status-codes */ 92788);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var src_app_services_translate_config_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/translate-config.service */ 45340);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/core */ 38699);
/* harmony import */ var src_providers_logger_service_logger_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/providers/logger-service/logger-service */ 9999);
/* harmony import */ var src_providers_utils_utils_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/providers/utils/utils.service */ 30423);
/* harmony import */ var _paymentUserDetailsService__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./paymentUserDetailsService */ 52991);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ionic/angular */ 93819);














function PaymentUserDetailsPage_section_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "section", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "ion-spinner", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
const _c0 = function (a0, a1) {
  return {
    "sucess": a0,
    "fail": a1
  };
};
function PaymentUserDetailsPage_section_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "section", 15)(1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction2"](2, _c0, ctx_r1.isSuccess, !ctx_r1.isSuccess));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r1.errorMsg);
  }
}
function PaymentUserDetailsPage_section_15_ion_button_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ion-button", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function PaymentUserDetailsPage_section_15_ion_button_3_Template_ion_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r6);
      const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r5.tryAgain());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](2, 1, "generic_msgs.try_again"));
  }
}
function PaymentUserDetailsPage_section_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "section", 16)(1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](3, PaymentUserDetailsPage_section_15_ion_button_3_Template, 3, 3, "ion-button", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r2.errorMsg);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r2.canTryAgain);
  }
}
function PaymentUserDetailsPage_div_16_div_23_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 34)(1, "span", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](3, 1, "payment_usrDetails.err_contactNumber"));
  }
}
function PaymentUserDetailsPage_div_16_div_24_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 34)(1, "span", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](3, 1, "payment_usrDetails.err_contactLength_req"));
  }
}
function PaymentUserDetailsPage_div_16_div_25_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 34)(1, "span", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](3, 1, "payment_usrDetails.err_contactLength_req"));
  }
}
function PaymentUserDetailsPage_div_16_div_26_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 34)(1, "span", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](3, 1, "payment_usrDetails.err_contactLength_req"));
  }
}
function PaymentUserDetailsPage_div_16_div_41_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 34)(1, "span", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](3, 1, "payment_usrDetails.err_emailReq"));
  }
}
function PaymentUserDetailsPage_div_16_div_42_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 34)(1, "span", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](3, 1, "payment_usrDetails.err_emailValidation"));
  }
}
function PaymentUserDetailsPage_div_16_div_51_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 34)(1, "span", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](3, 1, "payment_usrDetails.err_premiumAmtReq"));
  }
}
function PaymentUserDetailsPage_div_16_div_52_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 34)(1, "span", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](3, 1, "payment_usrDetails.err_premiumLength_req"));
  }
}
function PaymentUserDetailsPage_div_16_div_53_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 34)(1, "span", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](3, 1, "payment_usrDetails.err_premiumPattern_req"));
  }
}
function PaymentUserDetailsPage_div_16_div_54_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 34)(1, "span", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](3, 1, "payment_usrDetails.err_premiumPattern_req"));
  }
}
function PaymentUserDetailsPage_div_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 19)(1, "form", 20)(2, "p", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "ion-item", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](6, "ion-input", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](7, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "p", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](10, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "ion-item", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](12, "ion-input", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](13, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](14, "p", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](16, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](17, "span", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](18, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](19, "ion-item", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](20, "ion-input", 26, 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](22, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](23, PaymentUserDetailsPage_div_16_div_23_Template, 4, 3, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](24, PaymentUserDetailsPage_div_16_div_24_Template, 4, 3, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](25, PaymentUserDetailsPage_div_16_div_25_Template, 4, 3, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](26, PaymentUserDetailsPage_div_16_div_26_Template, 4, 3, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](27, "p", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](28);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](29, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](30, "ion-item", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](31, "ion-input", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](32, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](33, "p", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](34);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](35, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](36, "span", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](37, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](38, "ion-item", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](39, "ion-input", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](40, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](41, PaymentUserDetailsPage_div_16_div_41_Template, 4, 3, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](42, PaymentUserDetailsPage_div_16_div_42_Template, 4, 3, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](43, "p", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](44);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](45, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](46, "span", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](47, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](48, "ion-item", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](49, "ion-input", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](50, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](51, PaymentUserDetailsPage_div_16_div_51_Template, 4, 3, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](52, PaymentUserDetailsPage_div_16_div_52_Template, 4, 3, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](53, PaymentUserDetailsPage_div_16_div_53_Template, 4, 3, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](54, PaymentUserDetailsPage_div_16_div_54_Template, 4, 3, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](55, "ion-row", 32)(56, "ion-button", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function PaymentUserDetailsPage_div_16_Template_ion_button_click_56_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r19);
      const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r18.getPaymentId());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](57);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](58, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("formGroup", ctx_r3.paymentUserDetailsForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](4, 26, "payment_usrDetails.policyNumber"));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](7, 28, "payment_usrDetails.policyNumber"));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](10, 30, "payment_usrDetails.policyOwner"));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](13, 32, "payment_usrDetails.policyOwner"));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](16, 34, "payment_usrDetails.contactNumber"));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](22, 36, "payment_usrDetails.contactNumber"));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r3.paymentUserDetailsForm.get("contactNumber").hasError("required") && ctx_r3.paymentUserDetailsForm.get("contactNumber").touched);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r3.paymentUserDetailsForm.get("contactNumber").hasError("minlength") && ctx_r3.paymentUserDetailsForm.get("contactNumber").touched);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r3.paymentUserDetailsForm.get("contactNumber").hasError("validateNonZeroVal") && !ctx_r3.paymentUserDetailsForm.get("contactNumber").hasError("minlength"));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r3.paymentUserDetailsForm.get("contactNumber").hasError("pattern") && ctx_r3.paymentUserDetailsForm.get("contactNumber").touched && !ctx_r3.paymentUserDetailsForm.get("contactNumber").hasError("minlength"));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](29, 38, "payment_usrDetails.planName"));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](32, 40, "payment_usrDetails.planName"));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](35, 42, "payment_usrDetails.email"));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](40, 44, "payment_usrDetails.email"));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r3.paymentUserDetailsForm.get("email").hasError("required") && ctx_r3.paymentUserDetailsForm.get("email").touched);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx_r3.paymentUserDetailsForm.get("email").hasError("required") && ctx_r3.paymentUserDetailsForm.get("email").hasError("pattern") && ctx_r3.paymentUserDetailsForm.get("email").touched);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](45, 46, "payment_usrDetails.premiumAmount"));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](50, 48, "payment_usrDetails.premiumAmount"));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("disabled", ctx_r3.disabledPremium);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r3.paymentUserDetailsForm.get("premium").hasError("required") && ctx_r3.paymentUserDetailsForm.get("premium").touched);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r3.paymentUserDetailsForm.get("premium").hasError("minlength") && ctx_r3.paymentUserDetailsForm.get("premium").touched);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r3.paymentUserDetailsForm.get("premium").hasError("pattern") && ctx_r3.paymentUserDetailsForm.get("premium").touched && !ctx_r3.paymentUserDetailsForm.get("premium").hasError("minlength"));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r3.paymentUserDetailsForm.get("premium").hasError("maxlength") && ctx_r3.paymentUserDetailsForm.get("premium").touched && !ctx_r3.paymentUserDetailsForm.get("premium").hasError("pattern"));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("disabled", !ctx_r3.paymentUserDetailsForm.valid);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](58, 50, "submit"));
  }
}
const _c1 = function (a0, a1) {
  return {
    "bg-conventional": a0,
    "bg-takaful": a1
  };
};
class PaymentUserDetailsPage {
  // policyOwner: any;
  constructor(translateConfigService, translate, logger, utils, getPamentUsrDetails, config, router) {
    this.translateConfigService = translateConfigService;
    this.translate = translate;
    this.logger = logger;
    this.utils = utils;
    this.getPamentUsrDetails = getPamentUsrDetails;
    this.config = config;
    this.router = router;
    this.isShowingLoader = false;
    this.canTryAgain = false;
    this.isSuccess = false;
    this.selectedLanguage = this.translateConfigService.getDefaultLanguage();
    this.translateConfigService.setLanguage('en');
    this.encryptedPolicyNo = history.state.encryptedPlNo;
    this.policyNo = history.state.polNo;
    this.selectedPlanType = history.state.planType;
    this.duePayment = history.state.duePayment;
    // this.duePayment = 111;
    let amount = parseFloat(this.duePayment);
    if (this.duePayment > 1) {
      this.duePayment = amount.toFixed(2);
      this.disabledPremium = true;
    }
  }
  /* it call once when app is running */
  ngOnInit() {
    //this.getPaymentUserDetails();
    let EMAIL_PATTERN = src_providers_utils_config__WEBPACK_IMPORTED_MODULE_0__.ConfigProvider.EMAIL_PATTERN;
    this.paymentUserDetailsForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormGroup({
      contactNumber: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.minLength(8), this.utils.validateNonZeroVal, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.pattern('[0-9]*')]),
      policyNumber: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl({
        value: '',
        disabled: true
      }),
      policyOwner: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl({
        value: '',
        disabled: true
      }),
      planName: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl({
        value: '',
        disabled: true
      }),
      email: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.pattern(EMAIL_PATTERN)]),
      premium: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.minLength(1), _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.maxLength(17), _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.pattern('[0-9.]*')])
    });
    // this.logger.log('ionViewDidLoad PaymentUserDetailsPage');
    this.getPaymentUserDetails();
  }
  getPaymentUserDetails() {
    if (this.utils.isDeviceOnLine()) {
      this.isShowingLoader = true;
      this.logger.trace("USer Details--getPaymentUserDetails--start");
      this.getPamentUsrDetails.getPaymentUserDetails(this.encryptedPolicyNo).then(result => {
        try {
          this.isShowingLoader = false;
          if (result['responseJSON'] && result['responseJSON']['statusCode'] == http_status_codes__WEBPACK_IMPORTED_MODULE_7__.OK) {
            this.isGetPaymnetUserDetailsServiceSuccess = true;
            this.paymentUserDetailsForm.controls['policyNumber'].setValue(this.policyNo);
            this.paymentUserDetailsForm.controls['policyOwner'].setValue(result['responseJSON']['name']);
            this.paymentUserDetailsForm.controls['contactNumber'].setValue(result['responseJSON']['mobile']);
            this.paymentUserDetailsForm.controls['planName'].setValue(result['responseJSON']['plan']);
            this.paymentUserDetailsForm.controls['email'].setValue(result['responseJSON']['email']);
          } else {
            this.canTryAgain = true;
            this.isGetPaymnetUserDetailsServiceSuccess = false;
            this.errorMsg = this.translate.instant('generic_msgs.server_err');
            this.logger.error("error occured: User Deails--getPaymentUserDetails " + JSON.stringify(result));
          }
          this.paymentUserDetailsForm.controls['premium'].setValue(this.duePayment);
        } catch (e) {
          this.isShowingLoader = false;
          this.canTryAgain = true;
          this.isGetPaymnetUserDetailsServiceSuccess = false;
          this.logger.error("User Deails--getPaymentUserDetails  catch eror : " + JSON.stringify(e));
          this.errorMsg = this.translate.instant('generic_msgs.server_err');
        }
      }, err => {
        this.isShowingLoader = false;
        this.canTryAgain = false;
        this.isGetPaymnetUserDetailsServiceSuccess = false;
        this.logger.error("User Deails--getPaymentUserDetails  catch eror : " + JSON.stringify(err));
        this.errorMsg = this.utils.handleServiceException(err);
      });
    } else {
      this.isShowingLoader = false;
      this.canTryAgain = true;
      this.isGetPaymnetUserDetailsServiceSuccess = false;
      this.errorMsg = this.translate.instant('generic_msgs.network_err');
    }
  }
  /** This method will be called when user clicks on submit button to get the paymentId */
  getPaymentId() {
    if (this.paymentUserDetailsForm.valid) {
      this.logger.trace("POST paymnet user details --start");
      this.utils.showProgressLoader();
      let premiumAmount = this.paymentUserDetailsForm.controls['premium'].value;
      let Email = this.paymentUserDetailsForm.controls['email'].value;
      let Phone = this.paymentUserDetailsForm.controls['contactNumber'].value;
      if (this.utils.isDeviceOnLine()) {
        this.isShowingLoader = true;
        this.getPamentUsrDetails.postPaymentUserDetails(this.encryptedPolicyNo, premiumAmount, Email, Phone).then(res => {
          try {
            this.utils.dissmisProgressLoader();
            this.isShowingLoader = false;
            if (res['responseJSON']['statusCode'] == http_status_codes__WEBPACK_IMPORTED_MODULE_7__.CREATED || res['responseJSON']['statusCode'] == http_status_codes__WEBPACK_IMPORTED_MODULE_7__.OK) {
              this.paymentSeqNo = res['responseJSON']['paymentId'];
              this.isSuccess = true;
              this.paymentconfirm();
            } else {
              this.logger.error("POST USER payment details : " + JSON.stringify(res));
              this.errorMsg = this.translate.instant('generic_msgs.server_err');
              this.isSuccess = false;
            }
          } catch (e) {
            this.utils.dissmisProgressLoader();
            this.isShowingLoader = false;
            this.isSuccess = false;
            this.logger.error("POST USER payment details : " + JSON.stringify(e));
            this.errorMsg = this.translate.instant('generic_msgs.server_err');
          }
        }, err => {
          this.utils.dissmisProgressLoader();
          this.isShowingLoader = false;
          this.isSuccess = false;
          this.logger.error("POST USER payment details : " + JSON.stringify(err));
          this.errorMsg = this.utils.handleServiceException(err);
        });
      } else {
        this.isShowingLoader = false;
        this.isSuccess = false;
        this.errorMsg = this.translate.instant('generic_msgs.network_err');
      }
    }
  }
  /**
   * Method to navigate to Payment Confirmation Page
   */
  paymentconfirm() {
    let Email = this.paymentUserDetailsForm.controls['email'].value;
    let premiumAmount = this.paymentUserDetailsForm.controls['premium'].value;
    let Phone = this.paymentUserDetailsForm.controls['contactNumber'].value;
    let policyOwner = this.paymentUserDetailsForm.controls['policyOwner'].value;
    let planName = this.paymentUserDetailsForm.controls['planName'].value;
    this.router.navigate(['payment-confirmation'], {
      state: {
        planNamed: planName,
        policyOwnerd: policyOwner,
        policyNumberd: this.policyNo,
        contactNumberd: Phone,
        premiumd: premiumAmount,
        emaild: Email,
        paysno: this.paymentSeqNo,
        encryptedPlNo: this.encryptedPolicyNo,
        planType: this.selectedPlanType
      }
    });
    //this.navCtrl.push(PaymentConfirmationPage,{"data":this.paymentUserDetailsForm, "paysno":this.paymentSeqNo, "encryptedPlNo":this.encryptedPolicyNo,"planType":this.selectedPlanType});
  }
  /** this method will call when user clicks on tryAgain button
   * scenario : when getPaymentUserDetails services failed
   */
  tryAgain() {
    if (!this.isGetPaymnetUserDetailsServiceSuccess) {
      this.getPaymentUserDetails();
    }
  }
}
PaymentUserDetailsPage.ɵfac = function PaymentUserDetailsPage_Factory(t) {
  return new (t || PaymentUserDetailsPage)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_services_translate_config_service__WEBPACK_IMPORTED_MODULE_1__.TranslateConfigService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__.TranslateService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_providers_logger_service_logger_service__WEBPACK_IMPORTED_MODULE_2__.LoggerServiceProvider), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_providers_utils_utils_service__WEBPACK_IMPORTED_MODULE_3__.UtilService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_paymentUserDetailsService__WEBPACK_IMPORTED_MODULE_4__.PaymentUserDetailsService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_providers_utils_config__WEBPACK_IMPORTED_MODULE_0__.ConfigProvider), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_9__.Router));
};
PaymentUserDetailsPage.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
  type: PaymentUserDetailsPage,
  selectors: [["app-payment-user-details"]],
  decls: 17,
  vars: 14,
  consts: [["mode", "ios"], ["color", "primary", 2, "border-bottom", "3px solid white"], ["slot", "start"], ["text", "", "icon", "chevron-back-outline", 2, "padding-left", "15px", "font-size", "0.7rem"], [1, "bold-font"], ["color", "primary", 1, "tabs"], [2, "margin-bottom", "5px", 3, "ngClass"], [1, "sub-header"], ["no-bounce", "", 1, "app_bg1", "text_color_base", "padding_15", "ion-padding"], ["class", "spinnersection ion-text-center", 4, "ngIf"], [3, "ngClass", 4, "ngIf"], ["class", "errorMsgSection", 4, "ngIf"], ["class", "white_container_border_radius text_color_base padding_15", 4, "ngIf"], [1, "spinnersection", "ion-text-center"], ["name", "lines-sharp-small", 2, "height", "98%"], [3, "ngClass"], [1, "errorMsgSection"], [3, "click", 4, "ngIf"], [3, "click"], [1, "white_container_border_radius", "text_color_base", "padding_15"], [3, "formGroup"], ["position", "stacked", 1, "heading"], ["lines", "none", 1, "border"], ["disabled", "true", "formControlName", "policyNumber", 1, "darkInputText", 3, "placeholder"], ["disabled", "true", "formControlName", "policyOwner", 1, "darkInputText", 3, "placeholder"], [1, "mandatory_star"], ["formControlName", "contactNumber", "type", "tel", "restrict-input", "", "restrictInput", "number", "amaxlength", "20", 3, "placeholder"], ["contactNumberLabel", ""], ["class", "errPosition", 4, "ngIf"], ["disabled", "true", "formControlName", "planName", 1, "darkInputText", 3, "placeholder"], ["formControlName", "email", "type", "email", 3, "placeholder"], ["formControlName", "premium", "type", "text", 3, "placeholder", "disabled"], [1, "ion-text-center", 2, "margin-top", "10px"], [1, "btn_center", 3, "disabled", "click"], [1, "errPosition"]],
  template: function PaymentUserDetailsPage_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ion-header", 0)(1, "ion-toolbar", 1)(2, "ion-buttons", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](3, "ion-back-button", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "ion-title", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](6, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "ion-toolbar", 5)(8, "ion-row", 6)(9, "ion-label", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](10);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](11, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](12, "ion-content", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](13, PaymentUserDetailsPage_section_13_Template, 2, 0, "section", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](14, PaymentUserDetailsPage_section_14_Template, 3, 5, "section", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](15, PaymentUserDetailsPage_section_15_Template, 4, 2, "section", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](16, PaymentUserDetailsPage_div_16_Template, 59, 52, "div", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](6, 7, "payment_usrDetails.title"), " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction2"](11, _c1, ctx.selectedPlanType === "Conventional", ctx.selectedPlanType !== "Conventional"));
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](11, 9, "payment_usrDetails.sub_title"));
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.isShowingLoader);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.errorMsg && !ctx.canTryAgain && !ctx.isShowingLoader);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.canTryAgain && !ctx.isShowingLoader);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx.canTryAgain && !ctx.isShowingLoader);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_10__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatusGroup, _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.IonBackButton, _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.IonButton, _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.IonButtons, _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.IonContent, _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.IonHeader, _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.IonInput, _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.IonItem, _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.IonLabel, _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.IonRow, _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.IonSpinner, _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.IonTitle, _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.IonToolbar, _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.TextValueAccessor, _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.IonBackButtonDelegate, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControlName, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__.TranslatePipe],
  styles: [".app_bg1[_ngcontent-%COMP%] {\n  --background: url('register_bg.jpg') no-repeat center center / cover;\n  background-size: cover;\n  background-repeat: no-repeat;\n  height: 100%;\n  background-position: bottom;\n}\n\n.sub-header[_ngcontent-%COMP%] {\n  color: #ffffff;\n  padding: 10px 25px !important;\n  margin: 0px !important;\n  font-size: 1.1rem !important;\n  font-family: Agenda-Regular;\n}\n\n.tabs[_ngcontent-%COMP%] {\n  border-top: 3px solid color white;\n  --padding-top: -4px;\n  --padding-start: -4px;\n  --padding-end: -4px;\n  --min-height: 44px;\n}\n\n.white_container_border_radius[_ngcontent-%COMP%] {\n  background-color: rgba(255, 255, 255, 0.7) !important;\n  border-radius: 15px !important;\n}\n\n.text_color_base[_ngcontent-%COMP%] {\n  color: --ion-color-secondary !important;\n}\n\n.sucess[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: #002d3d !important;\n}\n\n.fail[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: #f00 !important;\n}\n\n.sucess[_ngcontent-%COMP%] {\n  text-align: start !important;\n}\n\n.fail[_ngcontent-%COMP%] {\n  text-align: start !important;\n}\n\n.item[_ngcontent-%COMP%] {\n  padding-left: 0px;\n  background: transparent;\n}\n\n.item[_ngcontent-%COMP%]   .item-input.ng-valid.item-input-has-value[_ngcontent-%COMP%]:not(.input-has-focus):not(.item-input-has-focus)   .item-inner[_ngcontent-%COMP%], .item.item-input.ng-valid.input-has-value[_ngcontent-%COMP%]:not(.input-has-focus):not(.item-input-has-focus)   .item-inner[_ngcontent-%COMP%] {\n  border-bottom-color: none !important;\n  box-shadow: none !important;\n}\n\n.item[_ngcontent-%COMP%]   .item-datetime.ng-valid.item-datetime-has-value[_ngcontent-%COMP%]:not(.input-has-focus):not(.item-datetime-has-focus)   .item-inner[_ngcontent-%COMP%], .item.item-datetime.ng-valid.input-has-value[_ngcontent-%COMP%]:not(.input-has-focus):not(.item-datetime-has-focus)   .item-inner[_ngcontent-%COMP%] {\n  border-bottom-color: none !important;\n  box-shadow: none !important;\n}\n\n.item-inner[_ngcontent-%COMP%] {\n  padding-right: 0px !important;\n  border-bottom: none !important;\n}\n\n.input[_ngcontent-%COMP%] {\n  border: 1px solid #eee;\n  padding: 3px 15px;\n  background: white;\n  font-size: 1.4rem;\n}\n\n.label[_ngcontent-%COMP%] {\n  font-size: 1.5rem !important;\n  font-weight: 400;\n  margin-bottom: 5px !important;\n}\n\np[_ngcontent-%COMP%] {\n  font-size: 1.3rem;\n}\n\n.italic_font[_ngcontent-%COMP%] {\n  font-style: italic;\n  margin: 7px 0px;\n}\n\n.heading[_ngcontent-%COMP%] {\n  font-family: Agenda-SemiBold !important;\n  color: #002d3d !important;\n}\n\n.darkInputText[_ngcontent-%COMP%] {\n  color: Black;\n  font-weight: Bold;\n}\n\n.btn_center[_ngcontent-%COMP%] {\n  text-transform: capitalize;\n  --background: #002d3d !important;\n  color: white;\n  font-size: 1rem;\n  border-radius: 20px;\n  min-height: 40px;\n  width: 100% !important;\n  font-family: Agenda-Regular !important;\n}\n\n.spinnersection[_ngcontent-%COMP%] {\n  display: block;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  font-size: 1.3rem;\n  height: 98%;\n}\n\n.mandatory_star[_ngcontent-%COMP%] {\n  color: #f00;\n}\n\n.padding_15[_ngcontent-%COMP%] {\n  padding: 15px !important;\n}\n\np[_ngcontent-%COMP%] {\n  margin-top: 5px;\n  margin-bottom: 5px;\n  font-size: 1rem;\n}\n\n.errPosition[_ngcontent-%COMP%] {\n  margin-top: 4px;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcGFnZXMvcGF5bWVudC11c2VyLWRldGFpbHMvcGF5bWVudC11c2VyLWRldGFpbHMucGFnZS5zY3NzIiwid2VicGFjazovLy4vLi4vLi4vLi4vQWxsJTIwUHJvamVjdHMvTWFsYXlzaWFfQ2xpZW50QXBwX1JldmFtcC9TdW5BY2Nlc3NfSW9uaWM2X1JldmFtcC9zcmMvYXBwL3BhZ2VzL3BheW1lbnQtdXNlci1kZXRhaWxzL3BheW1lbnQtdXNlci1kZXRhaWxzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG9FQUFBO0VBQ0Esc0JBQUE7RUFDQSw0QkFBQTtFQUNBLFlBQUE7RUFDQSwyQkFBQTtBQ0NGOztBRENBO0VBQ0UsY0FBQTtFQUVBLDZCQUFBO0VBQ0Esc0JBQUE7RUFDQSw0QkFBQTtFQUNBLDJCQUFBO0FDQ0Y7O0FERUE7RUFDRSxpQ0FBQTtFQUNFLG1CQUFBO0VBQ0EscUJBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FDQ0o7O0FEQ0E7RUFDRSxxREFBQTtFQUNBLDhCQUFBO0FDRUY7O0FEQUE7RUFDRSx1Q0FBQTtBQ0dGOztBREFBO0VBQ0UseUJBQUE7QUNHRjs7QUREQTtFQUNBLHNCQUFBO0FDSUE7O0FERkE7RUFDRyw0QkFBQTtBQ0tIOztBREhBO0VBQ0EsNEJBQUE7QUNNQTs7QURKQTtFQUNFLGlCQUFBO0VBQ0EsdUJBQUE7QUNPRjs7QURKQTtFQUNFLG9DQUFBO0VBRUEsMkJBQUE7QUNPRjs7QURKQTtFQUNFLG9DQUFBO0VBRUEsMkJBQUE7QUNPRjs7QURIQTtFQUNDLDZCQUFBO0VBQ0EsOEJBQUE7QUNNRDs7QURKQTtFQUNFLHNCQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0FDT0Y7O0FESkE7RUFDRSw0QkFBQTtFQUNBLGdCQUFBO0VBQ0EsNkJBQUE7QUNPRjs7QURMQTtFQUNDLGlCQUFBO0FDUUQ7O0FETEE7RUFDQyxrQkFBQTtFQUNBLGVBQUE7QUNRRDs7QURMQTtFQUNFLHVDQUFBO0VBQ0EseUJBQUE7QUNRRjs7QURMQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtBQ1FBOztBRE5BO0VBQ0UsMEJBQUE7RUFDQSxnQ0FBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLHNCQUFBO0VBQ0Esc0NBQUE7QUNTRjs7QURQQTtFQUNFLGNBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLFdBQUE7QUNVRjs7QURSQTtFQUNFLFdBQUE7QUNXRjs7QURUQTtFQUNFLHdCQUFBO0FDWUY7O0FEVkE7RUFDRSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0FDYUY7O0FEWEE7RUFDRSxlQUFBO0FDY0YiLCJzb3VyY2VzQ29udGVudCI6WyIuYXBwX2JnMSB7XHJcbiAgLS1iYWNrZ3JvdW5kOiB1cmwoLi4vLi4vLi4vYXNzZXRzL2ltZ3MvcmVnaXN0ZXJfYmcuanBnKSBuby1yZXBlYXQgY2VudGVyIGNlbnRlciAvIGNvdmVyO1xyXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogYm90dG9tO1xyXG59XHJcbi5zdWItaGVhZGVyIHtcclxuICBjb2xvcjogI2ZmZmZmZjtcclxuXHJcbiAgcGFkZGluZzogMTBweCAyNXB4ICFpbXBvcnRhbnQ7XHJcbiAgbWFyZ2luOiAwcHggIWltcG9ydGFudDtcclxuICBmb250LXNpemU6IDEuMXJlbSAhaW1wb3J0YW50O1xyXG4gIGZvbnQtZmFtaWx5OiBBZ2VuZGEtUmVndWxhcjtcclxuICAvL2xpbmUtaGVpZ2h0OiAyNHB4OztcclxufVxyXG4udGFic3tcclxuICBib3JkZXItdG9wOiAzcHggc29saWQgY29sb3Igd2hpdGU7XHJcbiAgICAtLXBhZGRpbmctdG9wOiAtNHB4O1xyXG4gICAgLS1wYWRkaW5nLXN0YXJ0OiAtNHB4O1xyXG4gICAgLS1wYWRkaW5nLWVuZDogLTRweDtcclxuICAgIC0tbWluLWhlaWdodDogNDRweDtcclxufVxyXG4ud2hpdGVfY29udGFpbmVyX2JvcmRlcl9yYWRpdXMge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC43KSAhaW1wb3J0YW50O1xyXG4gIGJvcmRlci1yYWRpdXM6IDE1cHggIWltcG9ydGFudDtcclxufVxyXG4udGV4dF9jb2xvcl9iYXNlIHtcclxuICBjb2xvcjogLS1pb24tY29sb3Itc2Vjb25kYXJ5ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5zdWNlc3Mgc3BhbntcclxuICBjb2xvciA6ICMwMDJkM2QhaW1wb3J0YW50O1xyXG59XHJcbi5mYWlsIHNwYW57XHJcbmNvbG9yIDogI2YwMCAhaW1wb3J0YW50O1xyXG59XHJcbi5zdWNlc3N7XHJcbiAgIHRleHQtYWxpZ246IHN0YXJ0ICFpbXBvcnRhbnQ7XHJcbn1cclxuLmZhaWx7XHJcbnRleHQtYWxpZ246IHN0YXJ0ICFpbXBvcnRhbnQ7XHJcbn1cclxuLml0ZW17XHJcbiAgcGFkZGluZy1sZWZ0OiAwcHg7XHJcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbn1cclxuXHJcbi5pdGVtIC5pdGVtLWlucHV0Lm5nLXZhbGlkLml0ZW0taW5wdXQtaGFzLXZhbHVlOm5vdCguaW5wdXQtaGFzLWZvY3VzKTpub3QoLml0ZW0taW5wdXQtaGFzLWZvY3VzKSAuaXRlbS1pbm5lciwgLml0ZW0uaXRlbS1pbnB1dC5uZy12YWxpZC5pbnB1dC1oYXMtdmFsdWU6bm90KC5pbnB1dC1oYXMtZm9jdXMpOm5vdCguaXRlbS1pbnB1dC1oYXMtZm9jdXMpIC5pdGVtLWlubmVye1xyXG4gIGJvcmRlci1ib3R0b20tY29sb3I6IG5vbmUgIWltcG9ydGFudDtcclxuICAtd2Via2l0LWJveC1zaGFkb3cgOiBub25lICFpbXBvcnRhbnQ7XHJcbiAgYm94LXNoYWRvdyA6IG5vbmUgIWltcG9ydGFudDtcclxuXHJcbn1cclxuLml0ZW0gLml0ZW0tZGF0ZXRpbWUubmctdmFsaWQuaXRlbS1kYXRldGltZS1oYXMtdmFsdWU6bm90KC5pbnB1dC1oYXMtZm9jdXMpOm5vdCguaXRlbS1kYXRldGltZS1oYXMtZm9jdXMpIC5pdGVtLWlubmVyLCAuaXRlbS5pdGVtLWRhdGV0aW1lLm5nLXZhbGlkLmlucHV0LWhhcy12YWx1ZTpub3QoLmlucHV0LWhhcy1mb2N1cyk6bm90KC5pdGVtLWRhdGV0aW1lLWhhcy1mb2N1cykgLml0ZW0taW5uZXJ7XHJcbiAgYm9yZGVyLWJvdHRvbS1jb2xvcjogbm9uZSAhaW1wb3J0YW50O1xyXG4gIC13ZWJraXQtYm94LXNoYWRvdyA6IG5vbmUgIWltcG9ydGFudDtcclxuICBib3gtc2hhZG93IDogbm9uZSAhaW1wb3J0YW50O1xyXG5cclxufVxyXG5cclxuLml0ZW0taW5uZXJ7XHJcbiBwYWRkaW5nLXJpZ2h0OiAwcHggIWltcG9ydGFudDtcclxuIGJvcmRlci1ib3R0b206IG5vbmUgIWltcG9ydGFudDtcclxufVxyXG4uaW5wdXR7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI2VlZTtcclxuICBwYWRkaW5nOiAzcHggMTVweDtcclxuICBiYWNrZ3JvdW5kOndoaXRlO1xyXG4gIGZvbnQtc2l6ZTogMS40cmVtO1xyXG59XHJcblxyXG4ubGFiZWx7XHJcbiAgZm9udC1zaXplOiAxLjVyZW0gIWltcG9ydGFudDtcclxuICBmb250LXdlaWdodDogNDAwO1xyXG4gIG1hcmdpbi1ib3R0b206IDVweCAhaW1wb3J0YW50O1xyXG59XHJcbnB7XHJcbiBmb250LXNpemU6IDEuM3JlbTtcclxufVxyXG5cclxuLml0YWxpY19mb250e1xyXG4gZm9udC1zdHlsZTogaXRhbGljO1xyXG4gbWFyZ2luOiA3cHggMHB4O1xyXG59XHJcblxyXG4uaGVhZGluZ3tcclxuICBmb250LWZhbWlseTogQWdlbmRhLVNlbWlCb2xkICFpbXBvcnRhbnQ7XHJcbiAgY29sb3I6ICMwMDJkM2QgIWltcG9ydGFudDtcclxuXHJcbn1cclxuLmRhcmtJbnB1dFRleHR7XHJcbmNvbG9yOiBCbGFjaztcclxuZm9udC13ZWlnaHQ6IEJvbGQ7XHJcbn1cclxuLmJ0bl9jZW50ZXIge1xyXG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xyXG4gIC0tYmFja2dyb3VuZDogIzAwMmQzZCAhaW1wb3J0YW50O1xyXG4gIGNvbG9yOndoaXRlO1xyXG4gIGZvbnQtc2l6ZTogMS4wcmVtO1xyXG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgbWluLWhlaWdodDogNDBweDtcclxuICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xyXG4gIGZvbnQtZmFtaWx5OiBBZ2VuZGEtUmVndWxhciAhaW1wb3J0YW50O1xyXG59XHJcbi5zcGlubmVyc2VjdGlvbiB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGZvbnQtc2l6ZTogMS4zcmVtO1xyXG4gIGhlaWdodDogOTglO1xyXG59XHJcbi5tYW5kYXRvcnlfc3RhciB7XHJcbiAgY29sb3I6ICNmMDA7XHJcbn1cclxuLnBhZGRpbmdfMTUge1xyXG4gIHBhZGRpbmc6IDE1cHggIWltcG9ydGFudDtcclxufVxyXG5wIHtcclxuICBtYXJnaW4tdG9wOiA1cHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xyXG4gIGZvbnQtc2l6ZTogMXJlbTtcclxufVxyXG4uZXJyUG9zaXRpb24ge1xyXG4gIG1hcmdpbi10b3A6IDRweDtcclxufVxyXG4iLCIuYXBwX2JnMSB7XG4gIC0tYmFja2dyb3VuZDogdXJsKC4uLy4uLy4uL2Fzc2V0cy9pbWdzL3JlZ2lzdGVyX2JnLmpwZykgbm8tcmVwZWF0IGNlbnRlciBjZW50ZXIgLyBjb3ZlcjtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgaGVpZ2h0OiAxMDAlO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBib3R0b207XG59XG5cbi5zdWItaGVhZGVyIHtcbiAgY29sb3I6ICNmZmZmZmY7XG4gIHBhZGRpbmc6IDEwcHggMjVweCAhaW1wb3J0YW50O1xuICBtYXJnaW46IDBweCAhaW1wb3J0YW50O1xuICBmb250LXNpemU6IDEuMXJlbSAhaW1wb3J0YW50O1xuICBmb250LWZhbWlseTogQWdlbmRhLVJlZ3VsYXI7XG59XG5cbi50YWJzIHtcbiAgYm9yZGVyLXRvcDogM3B4IHNvbGlkIGNvbG9yIHdoaXRlO1xuICAtLXBhZGRpbmctdG9wOiAtNHB4O1xuICAtLXBhZGRpbmctc3RhcnQ6IC00cHg7XG4gIC0tcGFkZGluZy1lbmQ6IC00cHg7XG4gIC0tbWluLWhlaWdodDogNDRweDtcbn1cblxuLndoaXRlX2NvbnRhaW5lcl9ib3JkZXJfcmFkaXVzIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjcpICFpbXBvcnRhbnQ7XG4gIGJvcmRlci1yYWRpdXM6IDE1cHggIWltcG9ydGFudDtcbn1cblxuLnRleHRfY29sb3JfYmFzZSB7XG4gIGNvbG9yOiAtLWlvbi1jb2xvci1zZWNvbmRhcnkgIWltcG9ydGFudDtcbn1cblxuLnN1Y2VzcyBzcGFuIHtcbiAgY29sb3I6ICMwMDJkM2QgIWltcG9ydGFudDtcbn1cblxuLmZhaWwgc3BhbiB7XG4gIGNvbG9yOiAjZjAwICFpbXBvcnRhbnQ7XG59XG5cbi5zdWNlc3Mge1xuICB0ZXh0LWFsaWduOiBzdGFydCAhaW1wb3J0YW50O1xufVxuXG4uZmFpbCB7XG4gIHRleHQtYWxpZ246IHN0YXJ0ICFpbXBvcnRhbnQ7XG59XG5cbi5pdGVtIHtcbiAgcGFkZGluZy1sZWZ0OiAwcHg7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xufVxuXG4uaXRlbSAuaXRlbS1pbnB1dC5uZy12YWxpZC5pdGVtLWlucHV0LWhhcy12YWx1ZTpub3QoLmlucHV0LWhhcy1mb2N1cyk6bm90KC5pdGVtLWlucHV0LWhhcy1mb2N1cykgLml0ZW0taW5uZXIsIC5pdGVtLml0ZW0taW5wdXQubmctdmFsaWQuaW5wdXQtaGFzLXZhbHVlOm5vdCguaW5wdXQtaGFzLWZvY3VzKTpub3QoLml0ZW0taW5wdXQtaGFzLWZvY3VzKSAuaXRlbS1pbm5lciB7XG4gIGJvcmRlci1ib3R0b20tY29sb3I6IG5vbmUgIWltcG9ydGFudDtcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7XG4gIGJveC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudDtcbn1cblxuLml0ZW0gLml0ZW0tZGF0ZXRpbWUubmctdmFsaWQuaXRlbS1kYXRldGltZS1oYXMtdmFsdWU6bm90KC5pbnB1dC1oYXMtZm9jdXMpOm5vdCguaXRlbS1kYXRldGltZS1oYXMtZm9jdXMpIC5pdGVtLWlubmVyLCAuaXRlbS5pdGVtLWRhdGV0aW1lLm5nLXZhbGlkLmlucHV0LWhhcy12YWx1ZTpub3QoLmlucHV0LWhhcy1mb2N1cyk6bm90KC5pdGVtLWRhdGV0aW1lLWhhcy1mb2N1cykgLml0ZW0taW5uZXIge1xuICBib3JkZXItYm90dG9tLWNvbG9yOiBub25lICFpbXBvcnRhbnQ7XG4gIC13ZWJraXQtYm94LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50O1xuICBib3gtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7XG59XG5cbi5pdGVtLWlubmVyIHtcbiAgcGFkZGluZy1yaWdodDogMHB4ICFpbXBvcnRhbnQ7XG4gIGJvcmRlci1ib3R0b206IG5vbmUgIWltcG9ydGFudDtcbn1cblxuLmlucHV0IHtcbiAgYm9yZGVyOiAxcHggc29saWQgI2VlZTtcbiAgcGFkZGluZzogM3B4IDE1cHg7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICBmb250LXNpemU6IDEuNHJlbTtcbn1cblxuLmxhYmVsIHtcbiAgZm9udC1zaXplOiAxLjVyZW0gIWltcG9ydGFudDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgbWFyZ2luLWJvdHRvbTogNXB4ICFpbXBvcnRhbnQ7XG59XG5cbnAge1xuICBmb250LXNpemU6IDEuM3JlbTtcbn1cblxuLml0YWxpY19mb250IHtcbiAgZm9udC1zdHlsZTogaXRhbGljO1xuICBtYXJnaW46IDdweCAwcHg7XG59XG5cbi5oZWFkaW5nIHtcbiAgZm9udC1mYW1pbHk6IEFnZW5kYS1TZW1pQm9sZCAhaW1wb3J0YW50O1xuICBjb2xvcjogIzAwMmQzZCAhaW1wb3J0YW50O1xufVxuXG4uZGFya0lucHV0VGV4dCB7XG4gIGNvbG9yOiBCbGFjaztcbiAgZm9udC13ZWlnaHQ6IEJvbGQ7XG59XG5cbi5idG5fY2VudGVyIHtcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG4gIC0tYmFja2dyb3VuZDogIzAwMmQzZCAhaW1wb3J0YW50O1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtc2l6ZTogMXJlbTtcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgbWluLWhlaWdodDogNDBweDtcbiAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcbiAgZm9udC1mYW1pbHk6IEFnZW5kYS1SZWd1bGFyICFpbXBvcnRhbnQ7XG59XG5cbi5zcGlubmVyc2VjdGlvbiB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZm9udC1zaXplOiAxLjNyZW07XG4gIGhlaWdodDogOTglO1xufVxuXG4ubWFuZGF0b3J5X3N0YXIge1xuICBjb2xvcjogI2YwMDtcbn1cblxuLnBhZGRpbmdfMTUge1xuICBwYWRkaW5nOiAxNXB4ICFpbXBvcnRhbnQ7XG59XG5cbnAge1xuICBtYXJnaW4tdG9wOiA1cHg7XG4gIG1hcmdpbi1ib3R0b206IDVweDtcbiAgZm9udC1zaXplOiAxcmVtO1xufVxuXG4uZXJyUG9zaXRpb24ge1xuICBtYXJnaW4tdG9wOiA0cHg7XG59Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ })

}]);
//# sourceMappingURL=src_app_pages_payment-user-details_payment-user-details_module_ts.js.map