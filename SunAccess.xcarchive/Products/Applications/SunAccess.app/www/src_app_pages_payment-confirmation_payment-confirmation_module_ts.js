"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_payment-confirmation_payment-confirmation_module_ts"],{

/***/ 16630:
/*!***********************************************************************************!*\
  !*** ./src/app/pages/payment-confirmation/payment-confirmation-routing.module.ts ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PaymentConfirmationPageRoutingModule": () => (/* binding */ PaymentConfirmationPageRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _payment_confirmation_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./payment-confirmation.page */ 78863);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);




const routes = [{
  path: '',
  component: _payment_confirmation_page__WEBPACK_IMPORTED_MODULE_0__.PaymentConfirmationPage
}];
class PaymentConfirmationPageRoutingModule {}
PaymentConfirmationPageRoutingModule.ɵfac = function PaymentConfirmationPageRoutingModule_Factory(t) {
  return new (t || PaymentConfirmationPageRoutingModule)();
};
PaymentConfirmationPageRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
  type: PaymentConfirmationPageRoutingModule
});
PaymentConfirmationPageRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](PaymentConfirmationPageRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
})();

/***/ }),

/***/ 87450:
/*!***************************************************************************!*\
  !*** ./src/app/pages/payment-confirmation/payment-confirmation.module.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PaymentConfirmationPageModule": () => (/* binding */ PaymentConfirmationPageModule)
/* harmony export */ });
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ 38699);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _payment_confirmation_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./payment-confirmation-routing.module */ 16630);
/* harmony import */ var _payment_confirmation_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./payment-confirmation.page */ 78863);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);







class PaymentConfirmationPageModule {}
PaymentConfirmationPageModule.ɵfac = function PaymentConfirmationPageModule_Factory(t) {
  return new (t || PaymentConfirmationPageModule)();
};
PaymentConfirmationPageModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
  type: PaymentConfirmationPageModule
});
PaymentConfirmationPageModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__.TranslateModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.ReactiveFormsModule, _payment_confirmation_routing_module__WEBPACK_IMPORTED_MODULE_0__.PaymentConfirmationPageRoutingModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](PaymentConfirmationPageModule, {
    declarations: [_payment_confirmation_page__WEBPACK_IMPORTED_MODULE_1__.PaymentConfirmationPage],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__.TranslateModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.ReactiveFormsModule, _payment_confirmation_routing_module__WEBPACK_IMPORTED_MODULE_0__.PaymentConfirmationPageRoutingModule]
  });
})();

/***/ }),

/***/ 78863:
/*!*************************************************************************!*\
  !*** ./src/app/pages/payment-confirmation/payment-confirmation.page.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PaymentConfirmationPage": () => (/* binding */ PaymentConfirmationPage)
/* harmony export */ });
/* harmony import */ var http_status_codes__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! http-status-codes */ 92788);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _merchantInfoService__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./merchantInfoService */ 68579);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ 38699);
/* harmony import */ var src_providers_logger_service_logger_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/providers/logger-service/logger-service */ 9999);
/* harmony import */ var src_providers_utils_utils_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/providers/utils/utils.service */ 30423);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var src_providers_utils_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/providers/utils/config */ 43485);
/* harmony import */ var _make_payment_paymentSuccessService__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../make-payment/paymentSuccessService */ 33038);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ 2508);












const _c0 = function (a0, a1) {
  return {
    "sucess": a0,
    "fail": a1
  };
};
function PaymentConfirmationPage_section_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "section", 12)(1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction2"](2, _c0, ctx_r0.isSuccess, !ctx_r0.isSuccess));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r0.errorMsg);
  }
}
function PaymentConfirmationPage_section_14_ion_button_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ion-button", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function PaymentConfirmationPage_section_14_ion_button_3_Template_ion_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r5);
      const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r4.tryAgain());
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
function PaymentConfirmationPage_section_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "section", 13)(1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](3, PaymentConfirmationPage_section_14_ion_button_3_Template, 3, 3, "ion-button", 14);
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
function PaymentConfirmationPage_div_15_ion_label_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ion-label", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("", ctx_r6.paymentData.paymentid, " ");
  }
}
function PaymentConfirmationPage_div_15_ion_label_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ion-label", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " - ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function PaymentConfirmationPage_div_15_ion_label_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ion-label", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("", ctx_r8.paymentData.planName, " ");
  }
}
function PaymentConfirmationPage_div_15_ion_label_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ion-label", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " - ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function PaymentConfirmationPage_div_15_ion_label_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ion-label", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("", ctx_r10.paymentData.policyNumber, " ");
  }
}
function PaymentConfirmationPage_div_15_ion_label_19_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ion-label", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " - ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function PaymentConfirmationPage_div_15_ion_label_24_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ion-label", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("", ctx_r12.paymentData.policyOwner, " ");
  }
}
function PaymentConfirmationPage_div_15_ion_label_25_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ion-label", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " - ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function PaymentConfirmationPage_div_15_ion_label_30_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ion-label", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("", ctx_r14.paymentData.email, " ");
  }
}
function PaymentConfirmationPage_div_15_ion_label_31_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ion-label", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " - ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function PaymentConfirmationPage_div_15_ion_label_36_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ion-label", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("", ctx_r16.paymentData.contactNumber, " ");
  }
}
function PaymentConfirmationPage_div_15_ion_label_37_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ion-label", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " - ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function PaymentConfirmationPage_div_15_ion_label_42_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ion-label", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("", ctx_r18.paymentData.premium, " ");
  }
}
function PaymentConfirmationPage_div_15_ion_label_43_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ion-label", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " - ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function PaymentConfirmationPage_div_15_div_50_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div")(1, "span", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](3, 1, "payment.Confirm_terms_accept_req"));
  }
}
function PaymentConfirmationPage_div_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 16)(1, "form")(2, "ion-item", 17)(3, "ion-label", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](6, PaymentConfirmationPage_div_15_ion_label_6_Template, 2, 1, "ion-label", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](7, PaymentConfirmationPage_div_15_ion_label_7_Template, 2, 0, "ion-label", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "ion-item", 17)(9, "ion-label", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](11, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](12, PaymentConfirmationPage_div_15_ion_label_12_Template, 2, 1, "ion-label", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](13, PaymentConfirmationPage_div_15_ion_label_13_Template, 2, 0, "ion-label", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](14, "ion-item", 17)(15, "ion-label", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](17, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](18, PaymentConfirmationPage_div_15_ion_label_18_Template, 2, 1, "ion-label", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](19, PaymentConfirmationPage_div_15_ion_label_19_Template, 2, 0, "ion-label", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](20, "ion-item", 17)(21, "ion-label", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](23, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](24, PaymentConfirmationPage_div_15_ion_label_24_Template, 2, 1, "ion-label", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](25, PaymentConfirmationPage_div_15_ion_label_25_Template, 2, 0, "ion-label", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](26, "ion-item", 17)(27, "ion-label", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](28);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](29, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](30, PaymentConfirmationPage_div_15_ion_label_30_Template, 2, 1, "ion-label", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](31, PaymentConfirmationPage_div_15_ion_label_31_Template, 2, 0, "ion-label", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](32, "ion-item", 17)(33, "ion-label", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](34);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](35, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](36, PaymentConfirmationPage_div_15_ion_label_36_Template, 2, 1, "ion-label", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](37, PaymentConfirmationPage_div_15_ion_label_37_Template, 2, 0, "ion-label", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](38, "ion-item", 17)(39, "ion-label", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](40);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](41, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](42, PaymentConfirmationPage_div_15_ion_label_42_Template, 2, 1, "ion-label", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](43, PaymentConfirmationPage_div_15_ion_label_43_Template, 2, 0, "ion-label", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](44, "ion-row", 20)(45, "ion-checkbox", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ionChange", function PaymentConfirmationPage_div_15_Template_ion_checkbox_ionChange_45_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r22);
      const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r21.checkboxChange($event));
    })("ionChange", function PaymentConfirmationPage_div_15_Template_ion_checkbox_ionChange_45_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r22);
      const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r23.userChecked());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](46, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](47);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](48, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](49, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](50, PaymentConfirmationPage_div_15_div_50_Template, 4, 3, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](51, "ion-row", 24)(52, "ion-col")(53, "ion-button", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function PaymentConfirmationPage_div_15_Template_ion_button_click_53_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r22);
      const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r24.getMerchantInfo());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](54);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](55, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](5, 28, "payment.payment_id"));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r2.paymentData.paymentid);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx_r2.paymentData.paymentid);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](11, 30, "payment.plan_name"));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r2.paymentData.planName);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx_r2.paymentData.planName);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](17, 32, "payment.policy_number"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r2.paymentData.policyNumber);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx_r2.paymentData.policyNumber);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](23, 34, "payment.policy_holder"));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r2.paymentData.policyOwner);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx_r2.paymentData.policyOwner);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](29, 36, "payment.email"));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r2.paymentData.email);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx_r2.paymentData.email);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](35, 38, "payment.contact_number"));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r2.paymentData.contactNumber);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx_r2.paymentData.contactNumber);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](41, 40, "payment.premium_amt"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r2.paymentData.premium);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx_r2.paymentData.premium);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("checked", ctx_r2.PaymentConfirm_terms);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate3"]("", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](48, 42, "payment.Confirm_terms_accept1"), "", ctx_r2.username, "", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](49, 44, "payment.Confirm_terms_accept2"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx_r2.PaymentConfirm_terms && ctx_r2.userHasChanged);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("disabled", !ctx_r2.PaymentConfirm_terms);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](55, 46, "payment.submit"));
  }
}
const _c1 = function (a0, a1) {
  return {
    "bg-conventional": a0,
    "bg-takaful": a1
  };
};
class PaymentConfirmationPage {
  constructor(merchantInfoService, translate, logger, utils, alertCtrl, config, putPaymentResults, router) {
    this.merchantInfoService = merchantInfoService;
    this.translate = translate;
    this.logger = logger;
    this.utils = utils;
    this.alertCtrl = alertCtrl;
    this.config = config;
    this.putPaymentResults = putPaymentResults;
    this.router = router;
    this.isShowingLoader = false;
    this.canTryAgain = false;
    this.isSuccess = false;
    this.userHasChanged = false;
    /**buttons to passs to alert popup when transaction failed */
    this.alertButtons = [{
      text: this.translate.instant('make_payment.okBtn'),
      handler: () => {
        // alert("48");
        this.router.navigate(['payment-acknowledgement'], {
          state: {
            successdata: this.paymentSuccessResp,
            policyNo: this.paymentData.policyNumber,
            animate: true,
            direction: 'forward'
          }
        });
        //this.navCtrl.push(PaymentAcknowledgementPage, { "successdata": this.paymentSuccessResp, "policyNo": this.paymentData.policyNumber, animate: true, direction: 'forward' });
      }
    }];

    this.isUATBuild = true;
    this.PaymentConfirm_terms = false;
    this.paymentData = {
      "encryptedPlNo": null,
      "planType": null,
      "policyNumber": null,
      "policyOwner": null,
      "contactNumber": null,
      "planName": null,
      "email": null,
      "premium": null,
      "paysno": null,
      "paymentid": null
    };
    console.log('history.state', history.state);
    this.config.currentPage.pageName = "PaymentConfirmationPage";
    //this.paymentUserData = <FormGroup>history.state.data;
    this.paymentData.encryptedPlNo = history.state.encryptedPlNo;
    this.encryptedPolicyNo = history.state.encryptedPlNo;
    this.paymentData.planType = history.state.planType;
    this.paymentData.policyNumber = history.state.policyNumberd;
    this.paymentData.policyOwner = history.state.policyOwnerd;
    this.paymentData.contactNumber = history.state.contactNumberd;
    this.paymentData.planName = history.state.planNamed;
    this.paymentData.email = history.state.emaild;
    this.premiumAmount = history.state.premiumd;
    let amount = parseFloat(this.premiumAmount);
    this.paymentData.premium = amount.toFixed(2);
    this.paymentSeqNo = history.state.paysno;
    this.paymentData.paymentid = this.paymentSeqNo;
    this.username = this.utils.getName();
    this.utils.analytics("paymentConfirmation");
  }
  ngOnInit() {
    this.logger.trace('ionViewDidLoad PaymentConfirmationPage');
  }
  userChecked() {
    this.userHasChanged = true;
  }
  checkboxChange(checked) {
    // this.PaymentConfirm_terms = !this.PaymentConfirm_terms ;
    if (checked.detail.checked) {
      this.PaymentConfirm_terms = true;
    } else {
      this.PaymentConfirm_terms = false;
    }
  }
  //This method is used to get Merchaninfo inroder pass the details to payment gateway
  getMerchantInfo() {
    if (this.paymentData) {
      this.logger.trace("Get merchant infor --start");
      this.utils.showProgressLoader();
      if (this.utils.isDeviceOnLine()) {
        this.isShowingLoader = true;
        this.merchantInfoService.getMerchantInfo(this.encryptedPolicyNo).then(res => {
          try {
            this.utils.dissmisProgressLoader();
            this.isShowingLoader = false;
            if (res['responseJSON'] && res['responseJSON']['statusCode'] == http_status_codes__WEBPACK_IMPORTED_MODULE_6__.OK) {
              this.isGetMerchantInfoServiceSuccess = true;
              this.merchantURL = res['responseJSON']['merchantUrl'];
              this.merchantReturnURL = res['responseJSON']['merchantReturnUrl'];
              this.id = res['responseJSON']['id'];
              this.password = res['responseJSON']['pwd'];
              this.merchantName = res['responseJSON']['mercName'];
              this.isSuccess = true;
              this.sendMerchantInfo();
            } else {
              this.canTryAgain = true;
              this.isGetMerchantInfoServiceSuccess = false;
              this.logger.error("GET Merchant Info Service : " + JSON.stringify(res));
              this.errorMsg = this.translate.instant('generic_msgs.server_err');
              this.isSuccess = false;
            }
          } catch (e) {
            this.canTryAgain = true;
            this.isGetMerchantInfoServiceSuccess = false;
            this.utils.dissmisProgressLoader();
            this.isShowingLoader = false;
            this.isSuccess = false;
            this.logger.error("GET Merchant Info Service : " + JSON.stringify(e));
            this.errorMsg = this.translate.instant('generic_msgs.server_err');
            console.log("abhay" + JSON.stringify(e));
          }
        }, err => {
          this.utils.dissmisProgressLoader();
          this.isShowingLoader = false;
          this.canTryAgain = true;
          this.isSuccess = false;
          this.isGetMerchantInfoServiceSuccess = false;
          this.logger.error("GET Merchant Info Services : " + JSON.stringify(err));
          this.errorMsg = this.utils.handleServiceException(err);
        });
      } else {
        this.canTryAgain = true;
        this.isShowingLoader = false;
        this.isSuccess = false;
        this.isGetMerchantInfoServiceSuccess = false;
        this.errorMsg = this.translate.instant('generic_msgs.network_err');
      }
    } else {
      this.isShowingLoader = false;
      this.canTryAgain = false;
    }
  }
  /** this method will send the Merchaninfo to submit detials to payment gateway
     */
  sendMerchantInfo() {
    if (this.isUATBuild) {
      // alert("disconnect VPN")
      this.makePay(); //For malaysian country - to check
    } else {
      this.router.navigate(['make-payment'], {
        state: {
          paymentdata: this.paymentData,
          mURL: this.merchantURL,
          mreturnURL: this.merchantReturnURL,
          ID: this.id,
          passwd: this.password,
          mname: this.merchantName
        }
      });
      //this.navCtrl.push(MakePaymentPage, { "paymentdata": this.paymentData, "mURL": this.merchantURL, "mreturnURL": this.merchantReturnURL, "ID": ID, "passwd": this.password, "mname": this.merchantName });
      //for non-malaysian countries - to check
    }
  }

  tryAgain() {
    if (!this.isGetMerchantInfoServiceSuccess) {
      this.getMerchantInfo();
    }
  }
  //function to show pop up
  showDialog(title, message) {
    let buttons = [{
      text: "Ok",
      cssClass: 'alertbutton'
      // handler: () => {
      //    this.navCtrl.pop();
      // }
    }];

    const alert = this.alertCtrl.create({
      header: title,
      message: message,
      buttons: buttons
    }).then(alert => alert.present());
  }
  //onlly for malayisannn users - UAT testing
  makePay() {
    var orderId = window.crypto.getRandomValues(new Uint16Array(1))[0] + 10000;
    var orderId1 = orderId.toString();
    // if (this.utils.getPlatform() == 'ios') {
    //   this.paymentSeqNo = this.paymentData.paymentid.replace("MPAYIOS", "");
    // } else if (this.utils.getPlatform() == 'android') {
    //   this.paymentSeqNo = this.paymentData.paymentid.replace("MPAYAOS", "");
    // }
    const data = {
      /*
      * Mandatory payment parameters list:
      * transactionType, paymentMethod, serviceId, paymentId, orderNumber, paymentDesc,
      * merchantReturnUrl, amount, currencyCode, custIp, custName, custEmail, custPhone
      * Check the eGHL documentation for parameter names.
      * [All Field are defined as String], Except paymentTimeout and sdkTimeout.
      * NOTE: Parameter names and spelling follow iOS, wherever the Android and iOS
      * names differ!
      */
      // List of accepted params and some value detail (refer docs for more detail):
      CurrencyCode: 'MYR',
      PymtMethod: 'ANY',
      TransactionType: 'SALE',
      PaymentGateway: this.merchantURL,
      ServiceID: this.id,
      Password: this.password,
      PaymentID: this.paymentData.paymentid,
      OrderNumber: orderId1,
      PaymentDesc: 'Premium payment',
      MerchantReturnURL: this.merchantReturnURL,
      Amount: this.paymentData.premium,
      // Invalid format: 1,000.00 or 1000
      CustIP: '172.17.68.38',
      CustName: this.paymentData.policyOwner,
      CustEmail: this.paymentData.email,
      CustPhone: this.paymentData.contactNumber,
      MerchantName: this.merchantName,
      LanguageCode: 'EN',
      PageTimeout: '780',
      PaymentTimeout: '-1',
      sdkTimeout: '780',
      _finaliseMessage: 'Optional message for Finalising Payment (iOS Only)',
      _cancelMessage: 'Optional message for Cancelling Payment (iOS Only)'
    };
    // const data ={
    //   Amount: "11.00",
    //   CurrencyCode: "MYR",
    //   CustEmail: "a@gmail.com",
    //   CustIP: "172.17.68.38",
    //   CustName: "P RQMQSQMY A/L P PERUMAL",
    //   CustPhone: "60137556496",
    //   LanguageCode: "EN",
    //   MerchantName: "Sun Life Malaysia Assurance Berhad",
    //   MerchantReturnURL: "https://bpp1.sunlifemalaysia.com/portal-ui/CUSTOMER/payment-transaction",
    //   OrderNumber: "38495",
    //   PageTimeout: "780",
    //   Password: "slm12345",
    //   PaymentDesc: "Premium payment",
    //   PaymentGateway: "https://pay.e-ghl.com/IPGSG/Payment.aspx",
    //   PaymentID: this.paymentData.paymentid,
    //   PaymentTimeout: "-1",
    //   PymtMethod: "ANY",
    //   ServiceID: "SLM",
    //   TransactionType: "SALE",
    //   sdkTimeout: "780",
    //   _finaliseMessage: 'Optional message for Finalising Payment (iOS Only)',
    //   _cancelMessage: 'Optional message for Cancelling Payment (iOS Only)',
    // };
    /**this method is to call eGHL plugin with given payment data */
    //this.utils.dissmisProgressLoader();
    eGHL.makePayment(data, resp => {
      // alert("connect VPN");
      // if (this.utils.getPlatform() == 'android') {
      //   resp = JSON.parse(resp);
      // }
      /**When payment successs */
      if (resp.TxnStatus == 0) {
        let inputData = {
          transactionType: resp.TransactionType || "",
          pymtMethod: resp.PymtMethod || "",
          serviceID: resp.ServiceID || "",
          paymentID: resp.PaymentID || "",
          currencyCode: resp.CurrencyCode || "",
          txnID: resp.TxnID || "",
          issuingBank: resp.IssuingBank || "",
          txnStatus: resp.TxnStatus || "",
          authCode: resp.AuthCode || "",
          cardHolder: resp.CardHolder || "",
          cardNoMask: resp.CardNoMask || "",
          cardExp: resp.CardExp || "",
          cardType: resp.CardType || "",
          premiumAmount: resp.Amount || "",
          txnMessage: resp.TxnMessage || ""
        };
        this.paymentSuccessResp = inputData;
        //send data to sunaccess server
        this.paymentSuccess();
        /**When payment failed */
      } else if (resp.TxnStatus == 1) {
        // this.isPaymentSuccess = true;
        let inputData = {
          transactionType: resp.TransactionType || "",
          pymtMethod: resp.PymtMethod || "",
          serviceID: resp.ServiceID || "",
          paymentID: resp.PaymentID || "",
          currencyCode: resp.CurrencyCode || "",
          txnID: resp.TxnID || "",
          issuingBank: resp.IssuingBank || "",
          txnStatus: resp.TxnStatus || "",
          authCode: resp.AuthCode || "",
          cardHolder: resp.CardHolder || "",
          cardNoMask: resp.CardNoMask || "",
          cardExp: resp.CardExp || "",
          cardType: resp.CardType || "",
          premiumAmount: resp.Amount || "",
          txnMessage: resp.TxnMessage || ""
        };
        this.paymentSuccessResp = inputData;
        this.paymentSuccess();
        this.utils.showAlert(this.translate.instant('make_payment.paymentFailed'), this.translate.instant('make_payment.transactionFailed'), false, this.alertButtons);
      } else {
        this.utils.showAlert(this.translate.instant('make_payment.paymentFailed'), this.translate.instant('make_payment.transactionFailed'), false, this.alertButtons);
      }
    }, /**When payment failed */
    err => {
      this.utils.showAlert(this.translate.instant('make_payment.paymentFailed'), this.translate.instant('make_payment.transactionFailed'), false, this.alertButtons);
    });
  }
  /**this sis tempraroy : to send payment successful daat to Sunaccess server*/
  paymentSuccess() {
    if (this.utils.isDeviceOnLine()) {
      this.utils.showProgressLoader();
      this.putPaymentResults.putPaymentSuccessDetails(this.paymentSuccessResp, this.paymentSeqNo).then(res => {
        try {
          this.utils.dissmisProgressLoader();
          if (res['responseJSON']) {
            if (res['responseJSON']['statusCode'] == http_status_codes__WEBPACK_IMPORTED_MODULE_6__.ACCEPTED || res['responseJSON']['statusCode'] == http_status_codes__WEBPACK_IMPORTED_MODULE_6__.OK) {
              let message = res['responseJSON']['userMessage'] || this.translate.instant('make_payment.paymentSuccessService');
              this.utils.showAlert("", message, false, this.alertButtons);
            } else {
              let message = res['responseJSON']['Message'] || this.translate.instant('make_payment.paymentSuccessService');
              this.utils.showAlert("", message, false, this.alertButtons);
            }
          }
        } catch (e) {
          this.utils.dissmisProgressLoader();
          this.logger.error("loginSuccess catch eror : " + JSON.stringify(e));
          let errorMessage = this.translate.instant('make_payment.tryAgain');
          this.utils.showAlert("", errorMessage, false, this.alertButtons);
        }
      }, err => {
        let errorMessage;
        this.utils.dissmisProgressLoader();
        errorMessage = this.utils.handleServiceException(err);
        this.utils.showAlert("", errorMessage, false, this.alertButtons);
      });
    } else {
      this.utils.dissmisProgressLoader();
      let errorMessage = this.translate.instant('generic_msgs.network_err');
      this.utils.showAlert("", errorMessage, false, this.alertButtons);
    }
  }
}
PaymentConfirmationPage.ɵfac = function PaymentConfirmationPage_Factory(t) {
  return new (t || PaymentConfirmationPage)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_merchantInfoService__WEBPACK_IMPORTED_MODULE_0__.GetMerchantInfoService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__.TranslateService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_providers_logger_service_logger_service__WEBPACK_IMPORTED_MODULE_1__.LoggerServiceProvider), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_providers_utils_utils_service__WEBPACK_IMPORTED_MODULE_2__.UtilService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_8__.AlertController), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_providers_utils_config__WEBPACK_IMPORTED_MODULE_3__.ConfigProvider), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_make_payment_paymentSuccessService__WEBPACK_IMPORTED_MODULE_4__.PaymentSuccessService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_9__.Router));
};
PaymentConfirmationPage.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
  type: PaymentConfirmationPage,
  selectors: [["app-payment-confirmation"]],
  decls: 16,
  vars: 13,
  consts: [["mode", "ios"], ["color", "primary", 2, "border-bottom", "3px solid white"], ["slot", "start"], ["text", "", "icon", "chevron-back-outline", 2, "padding-left", "15px", "font-size", "0.7rem"], [1, "bold-font"], ["color", "primary", 1, "tabs"], [2, "background", "#539542", "margin-bottom", "5px", 3, "ngClass"], [1, "sub-header"], [1, "app_bg1", "text_color_base", "ion-padding"], [3, "ngClass", 4, "ngIf"], ["class", "errorMsgSection", 4, "ngIf"], ["class", "white_container_border_radius", 4, "ngIf"], [3, "ngClass"], [1, "errorMsgSection"], [3, "click", 4, "ngIf"], [3, "click"], [1, "white_container_border_radius"], ["lines", "none", "lines", "none"], ["position", "stacked", 1, "heading"], ["position", "stacked", "class", "content font_size_17", 4, "ngIf"], [1, "terms_conditions", 2, "padding", "15px"], ["mode", "md", "size", "1", 1, "margin_top_bottom_auto", 3, "checked", "ionChange"], ["size", "11"], [4, "ngIf"], ["align-items-center", "", 1, "ion-text-center"], ["ion-button", "", 1, "btn_center", 3, "disabled", "click"], ["position", "stacked", 1, "content", "font_size_17"], [1, "fail", "padding_015"]],
  template: function PaymentConfirmationPage_Template(rf, ctx) {
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
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](13, PaymentConfirmationPage_section_13_Template, 3, 5, "section", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](14, PaymentConfirmationPage_section_14_Template, 4, 2, "section", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](15, PaymentConfirmationPage_div_15_Template, 56, 48, "div", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](6, 6, "payment.title"));
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction2"](10, _c1, ctx.selectedPlanType === "Conventional", ctx.selectedPlanType !== "Conventional"));
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](11, 8, "payment.payment_confirmation"));
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.errorMsg && !ctx.canTryAgain && !ctx.isShowingLoader);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.canTryAgain && !ctx.isShowingLoader);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx.canTryAgain && !ctx.isShowingLoader);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_10__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_11__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.NgForm, _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonBackButton, _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonButton, _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonButtons, _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonCheckbox, _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonCol, _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonContent, _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonHeader, _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonItem, _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonLabel, _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonRow, _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonTitle, _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonToolbar, _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.BooleanValueAccessor, _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonBackButtonDelegate, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__.TranslatePipe],
  styles: [".app_bg1[_ngcontent-%COMP%] {\n  --background: url('register_bg.jpg') no-repeat center center / cover;\n  background-size: cover;\n  background-repeat: no-repeat;\n  height: 100%;\n  background-position: bottom;\n}\n\n.sub-header[_ngcontent-%COMP%] {\n  color: #ffffff;\n  padding: 10px 25px !important;\n  margin: 0px !important;\n  font-size: 1.1rem !important;\n  font-family: Agenda-Regular;\n}\n\n.tabs[_ngcontent-%COMP%] {\n  border-top: 3px solid color white;\n  --padding-top: -4px;\n  --padding-start: -4px;\n  --padding-end: -4px;\n  --min-height: 44px;\n}\n\n.white_container_border_radius[_ngcontent-%COMP%] {\n  background-color: rgba(255, 255, 255, 0.7) !important;\n  border-radius: 15px !important;\n}\n\nion-item[_ngcontent-%COMP%] {\n  padding-left: 0px;\n  background: transparent;\n}\n\n.item[_ngcontent-%COMP%]   .item-input.ng-valid.item-input-has-value[_ngcontent-%COMP%]:not(.input-has-focus):not(.item-input-has-focus)   .item-inner[_ngcontent-%COMP%], .item.item-input.ng-valid.input-has-value[_ngcontent-%COMP%]:not(.input-has-focus):not(.item-input-has-focus)   .item-inner[_ngcontent-%COMP%] {\n  border-bottom-color: none !important;\n  box-shadow: none !important;\n}\n\n.item-inner[_ngcontent-%COMP%] {\n  padding-right: 0px !important;\n  border-bottom: none !important;\n  display: block !important;\n}\n\n.input-wrapper[_ngcontent-%COMP%] {\n  display: block !important;\n}\n\nion-item[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%] {\n  display: block !important;\n}\n\n.content[_ngcontent-%COMP%] {\n  font-family: Agenda-Regular;\n  color: #58595b !important;\n}\n\n.input[_ngcontent-%COMP%] {\n  border: 1px solid #eee;\n  padding: 3px 15px;\n  background: white;\n  font-size: 1.4rem;\n  color: #002d3d;\n}\n\n.label[_ngcontent-%COMP%] {\n  font-size: 1.2rem !important;\n  font-weight: 400;\n  margin-bottom: 5px !important;\n}\n\n.heading[_ngcontent-%COMP%] {\n  font-family: Agenda-SemiBold !important;\n  color: #002d3d !important;\n  font-size: 1.5rem !important;\n}\n\n.terms[_ngcontent-%COMP%] {\n  text-decoration: underline;\n  white-space: unset !important;\n  text-transform: lowercase;\n}\n\n.terms_conditions[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 1rem !important;\n  margin-top: 5px;\n}\n\n.terms_conditions[_ngcontent-%COMP%] {\n  font-size: 1rem !important;\n  margin-top: 5px;\n}\n.terms_conditions[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%] {\n  color: #002d3d !important;\n  margin: 0 8px 13px 0;\n  white-space: normal;\n}\n\n.fail[_ngcontent-%COMP%] {\n  text-align: start !important;\n  color: #f00 !important;\n}\n\n.checkbox[_ngcontent-%COMP%] {\n  margin-right: 16px !important;\n}\n\n.checkbox-icon[_ngcontent-%COMP%] {\n  border-width: 1px !important;\n  height: 27px !important;\n  width: 27px !important;\n}\n.checkbox-icon.checkbox-checked[_ngcontent-%COMP%]   .checkbox-inner[_ngcontent-%COMP%] {\n  height: 13px !important;\n  left: 9px !important;\n  top: 4px !important;\n  width: 8px !important;\n}\n\n.checkbox-checked[_ngcontent-%COMP%] {\n  border-color: #002d3d !important;\n  background-color: white !important;\n}\n\n.font_size_17[_ngcontent-%COMP%] {\n  font-size: 1.5rem !important;\n}\n\n.btn_center[_ngcontent-%COMP%] {\n  text-transform: capitalize;\n  --background: #002d3d !important;\n  color: white;\n  margin-top: 15px;\n  --border-radius: 10px !important;\n  min-width: 200px;\n  min-height: 35px;\n  width: 95% !important;\n  font-family: Agenda-Regular !important;\n}\n\nion-item[_ngcontent-%COMP%] {\n  margin: 0px !important;\n  display: block;\n  white-space: unset;\n  font-family: Agenda-light;\n}\n\n.margin_top_bottom_auto[_ngcontent-%COMP%] {\n  margin-top: 5px;\n  margin-bottom: 5px;\n}\n\n.padding_015[_ngcontent-%COMP%] {\n  padding: 0px 15px;\n}\n\nion-checkbox[_ngcontent-%COMP%] {\n  --background-checked: none !important;\n  --border-color-checked: none !important;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcGFnZXMvcGF5bWVudC1jb25maXJtYXRpb24vcGF5bWVudC1jb25maXJtYXRpb24ucGFnZS5zY3NzIiwid2VicGFjazovLy4vLi4vLi4vLi4vQWxsJTIwUHJvamVjdHMvTWFsYXlzaWFfQ2xpZW50QXBwX1JldmFtcC9TdW5BY2Nlc3NfSW9uaWM2X1JldmFtcC9zcmMvYXBwL3BhZ2VzL3BheW1lbnQtY29uZmlybWF0aW9uL3BheW1lbnQtY29uZmlybWF0aW9uLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG9FQUFBO0VBQ0Esc0JBQUE7RUFDQSw0QkFBQTtFQUNBLFlBQUE7RUFDQSwyQkFBQTtBQ0NGOztBRENBO0VBQ0UsY0FBQTtFQUNBLDZCQUFBO0VBQ0Esc0JBQUE7RUFDQSw0QkFBQTtFQUNBLDJCQUFBO0FDRUY7O0FEQ0E7RUFDRSxpQ0FBQTtFQUNFLG1CQUFBO0VBQ0EscUJBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FDRUo7O0FEQUE7RUFDRSxxREFBQTtFQUNBLDhCQUFBO0FDR0Y7O0FEQUE7RUFDRSxpQkFBQTtFQUNBLHVCQUFBO0FDR0Y7O0FEQUE7RUFDRSxvQ0FBQTtFQUVBLDJCQUFBO0FDR0Y7O0FEQ0E7RUFDQyw2QkFBQTtFQUNBLDhCQUFBO0VBQ0EseUJBQUE7QUNFRDs7QURBQTtFQUNFLHlCQUFBO0FDR0Y7O0FEREE7RUFDRSx5QkFBQTtBQ0lGOztBREZBO0VBQ0UsMkJBQUE7RUFDQSx5QkFBQTtBQ0tGOztBREhBO0VBQ0Usc0JBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0FDTUY7O0FESkE7RUFDRSw0QkFBQTtFQUNBLGdCQUFBO0VBQ0EsNkJBQUE7QUNPRjs7QURKQTtFQUNFLHVDQUFBO0VBQ0EseUJBQUE7RUFDQSw0QkFBQTtBQ09GOztBREpDO0VBQ0MsMEJBQUE7RUFDQSw2QkFBQTtFQUNBLHlCQUFBO0FDT0Y7O0FESkE7RUFDRSwwQkFBQTtFQUNBLGVBQUE7QUNPRjs7QURMQTtFQUNFLDBCQUFBO0VBQ0EsZUFBQTtBQ1FGO0FEUEU7RUFDSSx5QkFBQTtFQUVBLG9CQUFBO0VBQ0EsbUJBQUE7QUNRTjs7QURKQTtFQUNFLDRCQUFBO0VBQ0Esc0JBQUE7QUNPRjs7QURKQTtFQUNFLDZCQUFBO0FDT0Y7O0FETEE7RUFDRSw0QkFBQTtFQUNBLHVCQUFBO0VBQ0Esc0JBQUE7QUNRRjtBRE5NO0VBQ0ksdUJBQUE7RUFDQSxvQkFBQTtFQUNBLG1CQUFBO0VBQ0EscUJBQUE7QUNRVjs7QURKQTtFQUNFLGdDQUFBO0VBQ0Esa0NBQUE7QUNPRjs7QURMQTtFQUNFLDRCQUFBO0FDUUY7O0FETkE7RUFDRSwwQkFBQTtFQUNBLGdDQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0NBQUE7RUFDQSxnQkFBQTtFQUdBLGdCQUFBO0VBQ0EscUJBQUE7RUFDQSxzQ0FBQTtBQ09GOztBRExBO0VBQ0Usc0JBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtBQ1FGOztBRE5BO0VBQ0UsZUFBQTtFQUNBLGtCQUFBO0FDU0Y7O0FEUEE7RUFDRSxpQkFBQTtBQ1VGOztBRFJBO0VBQ0kscUNBQUE7RUFDQSx1Q0FBQTtBQ1dKIiwic291cmNlc0NvbnRlbnQiOlsiLmFwcF9iZzEge1xyXG4gIC0tYmFja2dyb3VuZDogdXJsKC4uLy4uLy4uL2Fzc2V0cy9pbWdzL3JlZ2lzdGVyX2JnLmpwZykgbm8tcmVwZWF0IGNlbnRlciBjZW50ZXIgLyBjb3ZlcjtcclxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGJvdHRvbTtcclxufVxyXG4uc3ViLWhlYWRlciB7XHJcbiAgY29sb3I6ICNmZmZmZmY7XHJcbiAgcGFkZGluZzogMTBweCAyNXB4ICFpbXBvcnRhbnQ7XHJcbiAgbWFyZ2luOiAwcHggIWltcG9ydGFudDtcclxuICBmb250LXNpemU6IDEuMXJlbSAhaW1wb3J0YW50O1xyXG4gIGZvbnQtZmFtaWx5OiBBZ2VuZGEtUmVndWxhcjtcclxuICAvL2xpbmUtaGVpZ2h0OiAyNHB4OztcclxufVxyXG4udGFic3tcclxuICBib3JkZXItdG9wOiAzcHggc29saWQgY29sb3Igd2hpdGU7XHJcbiAgICAtLXBhZGRpbmctdG9wOiAtNHB4O1xyXG4gICAgLS1wYWRkaW5nLXN0YXJ0OiAtNHB4O1xyXG4gICAgLS1wYWRkaW5nLWVuZDogLTRweDtcclxuICAgIC0tbWluLWhlaWdodDogNDRweDtcclxufVxyXG4ud2hpdGVfY29udGFpbmVyX2JvcmRlcl9yYWRpdXMge1xyXG4gIGJhY2tncm91bmQtY29sb3I6cmdiYSgyNTUsIDI1NSwgMjU1LCAwLjcpICFpbXBvcnRhbnQ7XHJcbiAgYm9yZGVyLXJhZGl1czogMTVweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG5pb24taXRlbXtcclxuICBwYWRkaW5nLWxlZnQ6IDBweDtcclxuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxufVxyXG5cclxuLml0ZW0gLml0ZW0taW5wdXQubmctdmFsaWQuaXRlbS1pbnB1dC1oYXMtdmFsdWU6bm90KC5pbnB1dC1oYXMtZm9jdXMpOm5vdCguaXRlbS1pbnB1dC1oYXMtZm9jdXMpIC5pdGVtLWlubmVyLCAuaXRlbS5pdGVtLWlucHV0Lm5nLXZhbGlkLmlucHV0LWhhcy12YWx1ZTpub3QoLmlucHV0LWhhcy1mb2N1cyk6bm90KC5pdGVtLWlucHV0LWhhcy1mb2N1cykgLml0ZW0taW5uZXJ7XHJcbiAgYm9yZGVyLWJvdHRvbS1jb2xvcjogbm9uZSAhaW1wb3J0YW50O1xyXG4gIC13ZWJraXQtYm94LXNoYWRvdyA6IG5vbmUgIWltcG9ydGFudDtcclxuICBib3gtc2hhZG93IDogbm9uZSAhaW1wb3J0YW50O1xyXG5cclxufVxyXG5cclxuLml0ZW0taW5uZXJ7XHJcbiBwYWRkaW5nLXJpZ2h0OiAwcHggIWltcG9ydGFudDtcclxuIGJvcmRlci1ib3R0b206IG5vbmUgIWltcG9ydGFudDtcclxuIGRpc3BsYXk6IGJsb2NrICFpbXBvcnRhbnQ7XHJcbn1cclxuLmlucHV0LXdyYXBwZXJ7XHJcbiAgZGlzcGxheTogYmxvY2sgIWltcG9ydGFudDtcclxufVxyXG5pb24taXRlbSBpb24tbGFiZWx7XHJcbiAgZGlzcGxheTogYmxvY2sgIWltcG9ydGFudDtcclxufVxyXG4uY29udGVudHtcclxuICBmb250LWZhbWlseTogQWdlbmRhLVJlZ3VsYXI7XHJcbiAgY29sb3I6ICM1ODU5NWIgIWltcG9ydGFudDtcclxufVxyXG4uaW5wdXR7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI2VlZTtcclxuICBwYWRkaW5nOiAzcHggMTVweDtcclxuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICBmb250LXNpemU6IDEuNHJlbTtcclxuICBjb2xvcjogIzAwMmQzZCA7XHJcbn1cclxuLmxhYmVse1xyXG4gIGZvbnQtc2l6ZTogMS4ycmVtICFpbXBvcnRhbnQ7XHJcbiAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICBtYXJnaW4tYm90dG9tOiA1cHggIWltcG9ydGFudDtcclxufVxyXG5cclxuLmhlYWRpbmd7XHJcbiAgZm9udC1mYW1pbHk6IEFnZW5kYS1TZW1pQm9sZCAhaW1wb3J0YW50O1xyXG4gIGNvbG9yOiAjMDAyZDNkICAhaW1wb3J0YW50O1xyXG4gIGZvbnQtc2l6ZTogMS41cmVtICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbiAudGVybXN7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XHJcbiAgd2hpdGUtc3BhY2U6IHVuc2V0ICFpbXBvcnRhbnQ7XHJcbiAgdGV4dC10cmFuc2Zvcm06IGxvd2VyY2FzZTtcclxufVxyXG5cclxuLnRlcm1zX2NvbmRpdGlvbnMgc3BhbntcclxuICBmb250LXNpemU6IDEuMHJlbSAhaW1wb3J0YW50O1xyXG4gIG1hcmdpbi10b3A6IDVweDtcclxufVxyXG4udGVybXNfY29uZGl0aW9ucyB7XHJcbiAgZm9udC1zaXplOiAxLjByZW0gIWltcG9ydGFudDtcclxuICBtYXJnaW4tdG9wOiA1cHg7XHJcbiAgLmxhYmVsIHtcclxuICAgICAgY29sb3I6ICMwMDJkM2QgIWltcG9ydGFudDtcclxuICAgICAgLy8gZm9udC1zaXplOiAxLjhyZW0gIWltcG9ydGFudDtcclxuICAgICAgbWFyZ2luOiAwIDhweCAxM3B4IDA7XHJcbiAgICAgIHdoaXRlLXNwYWNlOiBub3JtYWw7XHJcbiAgfVxyXG59XHJcblxyXG4uZmFpbHtcclxuICB0ZXh0LWFsaWduOiBzdGFydCAhaW1wb3J0YW50O1xyXG4gIGNvbG9yIDogI2YwMCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uY2hlY2tib3gge1xyXG4gIG1hcmdpbi1yaWdodDogMTZweCAhaW1wb3J0YW50O1xyXG59XHJcbi5jaGVja2JveC1pY29uIHtcclxuICBib3JkZXItd2lkdGg6IDFweCAhaW1wb3J0YW50O1xyXG4gIGhlaWdodDogMjdweCAhaW1wb3J0YW50O1xyXG4gIHdpZHRoOiAyN3B4ICFpbXBvcnRhbnQ7XHJcbiAgJi5jaGVja2JveC1jaGVja2VkIHtcclxuICAgICAgLmNoZWNrYm94LWlubmVyIHtcclxuICAgICAgICAgIGhlaWdodDogMTNweCAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgbGVmdDogOXB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICB0b3A6IDRweCAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgd2lkdGg6IDhweCAhaW1wb3J0YW50O1xyXG4gICAgICB9XHJcbiAgfVxyXG59XHJcbi5jaGVja2JveC1jaGVja2VkIHtcclxuICBib3JkZXItY29sb3I6ICMwMDJkM2QgICFpbXBvcnRhbnQ7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjp3aGl0ZSFpbXBvcnRhbnQ7XHJcbn1cclxuLmZvbnRfc2l6ZV8xNyB7XHJcbiAgZm9udC1zaXplOiAxLjVyZW0gIWltcG9ydGFudDtcclxufVxyXG4uYnRuX2NlbnRlciB7XHJcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XHJcbiAgLS1iYWNrZ3JvdW5kOiAjMDAyZDNkICFpbXBvcnRhbnQ7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIG1hcmdpbi10b3A6IDE1cHg7XHJcbiAgLS1ib3JkZXItcmFkaXVzOiAxMHB4ICFpbXBvcnRhbnQ7XHJcbiAgbWluLXdpZHRoOiAyMDBweDtcclxuICAvLyBtYXJnaW4tbGVmdDogLTMxcHg7XHJcbiAgLy9mb250LXNpemU6IDEuN3JlbTtcclxuICBtaW4taGVpZ2h0OiAzNXB4O1xyXG4gIHdpZHRoOiA5NSUgIWltcG9ydGFudDtcclxuICBmb250LWZhbWlseTogQWdlbmRhLVJlZ3VsYXIgIWltcG9ydGFudDtcclxufVxyXG5pb24taXRlbXtcclxuICBtYXJnaW46IDBweCAhaW1wb3J0YW50O1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIHdoaXRlLXNwYWNlOiB1bnNldDtcclxuICBmb250LWZhbWlseTogQWdlbmRhLWxpZ2h0O1xyXG59XHJcbi5tYXJnaW5fdG9wX2JvdHRvbV9hdXRvIHtcclxuICBtYXJnaW4tdG9wOiA1cHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xyXG59XHJcbi5wYWRkaW5nXzAxNSB7XHJcbiAgcGFkZGluZzogMHB4IDE1cHg7XHJcbn1cclxuaW9uLWNoZWNrYm94e1xyXG4gICAgLS1iYWNrZ3JvdW5kLWNoZWNrZWQ6IG5vbmUgIWltcG9ydGFudDtcclxuICAgIC0tYm9yZGVyLWNvbG9yLWNoZWNrZWQ6IG5vbmUgIWltcG9ydGFudDtcclxufVxyXG4iLCIuYXBwX2JnMSB7XG4gIC0tYmFja2dyb3VuZDogdXJsKC4uLy4uLy4uL2Fzc2V0cy9pbWdzL3JlZ2lzdGVyX2JnLmpwZykgbm8tcmVwZWF0IGNlbnRlciBjZW50ZXIgLyBjb3ZlcjtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgaGVpZ2h0OiAxMDAlO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBib3R0b207XG59XG5cbi5zdWItaGVhZGVyIHtcbiAgY29sb3I6ICNmZmZmZmY7XG4gIHBhZGRpbmc6IDEwcHggMjVweCAhaW1wb3J0YW50O1xuICBtYXJnaW46IDBweCAhaW1wb3J0YW50O1xuICBmb250LXNpemU6IDEuMXJlbSAhaW1wb3J0YW50O1xuICBmb250LWZhbWlseTogQWdlbmRhLVJlZ3VsYXI7XG59XG5cbi50YWJzIHtcbiAgYm9yZGVyLXRvcDogM3B4IHNvbGlkIGNvbG9yIHdoaXRlO1xuICAtLXBhZGRpbmctdG9wOiAtNHB4O1xuICAtLXBhZGRpbmctc3RhcnQ6IC00cHg7XG4gIC0tcGFkZGluZy1lbmQ6IC00cHg7XG4gIC0tbWluLWhlaWdodDogNDRweDtcbn1cblxuLndoaXRlX2NvbnRhaW5lcl9ib3JkZXJfcmFkaXVzIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjcpICFpbXBvcnRhbnQ7XG4gIGJvcmRlci1yYWRpdXM6IDE1cHggIWltcG9ydGFudDtcbn1cblxuaW9uLWl0ZW0ge1xuICBwYWRkaW5nLWxlZnQ6IDBweDtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG59XG5cbi5pdGVtIC5pdGVtLWlucHV0Lm5nLXZhbGlkLml0ZW0taW5wdXQtaGFzLXZhbHVlOm5vdCguaW5wdXQtaGFzLWZvY3VzKTpub3QoLml0ZW0taW5wdXQtaGFzLWZvY3VzKSAuaXRlbS1pbm5lciwgLml0ZW0uaXRlbS1pbnB1dC5uZy12YWxpZC5pbnB1dC1oYXMtdmFsdWU6bm90KC5pbnB1dC1oYXMtZm9jdXMpOm5vdCguaXRlbS1pbnB1dC1oYXMtZm9jdXMpIC5pdGVtLWlubmVyIHtcbiAgYm9yZGVyLWJvdHRvbS1jb2xvcjogbm9uZSAhaW1wb3J0YW50O1xuICAtd2Via2l0LWJveC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudDtcbiAgYm94LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50O1xufVxuXG4uaXRlbS1pbm5lciB7XG4gIHBhZGRpbmctcmlnaHQ6IDBweCAhaW1wb3J0YW50O1xuICBib3JkZXItYm90dG9tOiBub25lICFpbXBvcnRhbnQ7XG4gIGRpc3BsYXk6IGJsb2NrICFpbXBvcnRhbnQ7XG59XG5cbi5pbnB1dC13cmFwcGVyIHtcbiAgZGlzcGxheTogYmxvY2sgIWltcG9ydGFudDtcbn1cblxuaW9uLWl0ZW0gaW9uLWxhYmVsIHtcbiAgZGlzcGxheTogYmxvY2sgIWltcG9ydGFudDtcbn1cblxuLmNvbnRlbnQge1xuICBmb250LWZhbWlseTogQWdlbmRhLVJlZ3VsYXI7XG4gIGNvbG9yOiAjNTg1OTViICFpbXBvcnRhbnQ7XG59XG5cbi5pbnB1dCB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNlZWU7XG4gIHBhZGRpbmc6IDNweCAxNXB4O1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgZm9udC1zaXplOiAxLjRyZW07XG4gIGNvbG9yOiAjMDAyZDNkO1xufVxuXG4ubGFiZWwge1xuICBmb250LXNpemU6IDEuMnJlbSAhaW1wb3J0YW50O1xuICBmb250LXdlaWdodDogNDAwO1xuICBtYXJnaW4tYm90dG9tOiA1cHggIWltcG9ydGFudDtcbn1cblxuLmhlYWRpbmcge1xuICBmb250LWZhbWlseTogQWdlbmRhLVNlbWlCb2xkICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiAjMDAyZDNkICFpbXBvcnRhbnQ7XG4gIGZvbnQtc2l6ZTogMS41cmVtICFpbXBvcnRhbnQ7XG59XG5cbi50ZXJtcyB7XG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xuICB3aGl0ZS1zcGFjZTogdW5zZXQgIWltcG9ydGFudDtcbiAgdGV4dC10cmFuc2Zvcm06IGxvd2VyY2FzZTtcbn1cblxuLnRlcm1zX2NvbmRpdGlvbnMgc3BhbiB7XG4gIGZvbnQtc2l6ZTogMXJlbSAhaW1wb3J0YW50O1xuICBtYXJnaW4tdG9wOiA1cHg7XG59XG5cbi50ZXJtc19jb25kaXRpb25zIHtcbiAgZm9udC1zaXplOiAxcmVtICFpbXBvcnRhbnQ7XG4gIG1hcmdpbi10b3A6IDVweDtcbn1cbi50ZXJtc19jb25kaXRpb25zIC5sYWJlbCB7XG4gIGNvbG9yOiAjMDAyZDNkICFpbXBvcnRhbnQ7XG4gIG1hcmdpbjogMCA4cHggMTNweCAwO1xuICB3aGl0ZS1zcGFjZTogbm9ybWFsO1xufVxuXG4uZmFpbCB7XG4gIHRleHQtYWxpZ246IHN0YXJ0ICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiAjZjAwICFpbXBvcnRhbnQ7XG59XG5cbi5jaGVja2JveCB7XG4gIG1hcmdpbi1yaWdodDogMTZweCAhaW1wb3J0YW50O1xufVxuXG4uY2hlY2tib3gtaWNvbiB7XG4gIGJvcmRlci13aWR0aDogMXB4ICFpbXBvcnRhbnQ7XG4gIGhlaWdodDogMjdweCAhaW1wb3J0YW50O1xuICB3aWR0aDogMjdweCAhaW1wb3J0YW50O1xufVxuLmNoZWNrYm94LWljb24uY2hlY2tib3gtY2hlY2tlZCAuY2hlY2tib3gtaW5uZXIge1xuICBoZWlnaHQ6IDEzcHggIWltcG9ydGFudDtcbiAgbGVmdDogOXB4ICFpbXBvcnRhbnQ7XG4gIHRvcDogNHB4ICFpbXBvcnRhbnQ7XG4gIHdpZHRoOiA4cHggIWltcG9ydGFudDtcbn1cblxuLmNoZWNrYm94LWNoZWNrZWQge1xuICBib3JkZXItY29sb3I6ICMwMDJkM2QgIWltcG9ydGFudDtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGUgIWltcG9ydGFudDtcbn1cblxuLmZvbnRfc2l6ZV8xNyB7XG4gIGZvbnQtc2l6ZTogMS41cmVtICFpbXBvcnRhbnQ7XG59XG5cbi5idG5fY2VudGVyIHtcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG4gIC0tYmFja2dyb3VuZDogIzAwMmQzZCAhaW1wb3J0YW50O1xuICBjb2xvcjogd2hpdGU7XG4gIG1hcmdpbi10b3A6IDE1cHg7XG4gIC0tYm9yZGVyLXJhZGl1czogMTBweCAhaW1wb3J0YW50O1xuICBtaW4td2lkdGg6IDIwMHB4O1xuICBtaW4taGVpZ2h0OiAzNXB4O1xuICB3aWR0aDogOTUlICFpbXBvcnRhbnQ7XG4gIGZvbnQtZmFtaWx5OiBBZ2VuZGEtUmVndWxhciAhaW1wb3J0YW50O1xufVxuXG5pb24taXRlbSB7XG4gIG1hcmdpbjogMHB4ICFpbXBvcnRhbnQ7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB3aGl0ZS1zcGFjZTogdW5zZXQ7XG4gIGZvbnQtZmFtaWx5OiBBZ2VuZGEtbGlnaHQ7XG59XG5cbi5tYXJnaW5fdG9wX2JvdHRvbV9hdXRvIHtcbiAgbWFyZ2luLXRvcDogNXB4O1xuICBtYXJnaW4tYm90dG9tOiA1cHg7XG59XG5cbi5wYWRkaW5nXzAxNSB7XG4gIHBhZGRpbmc6IDBweCAxNXB4O1xufVxuXG5pb24tY2hlY2tib3gge1xuICAtLWJhY2tncm91bmQtY2hlY2tlZDogbm9uZSAhaW1wb3J0YW50O1xuICAtLWJvcmRlci1jb2xvci1jaGVja2VkOiBub25lICFpbXBvcnRhbnQ7XG59Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ })

}]);
//# sourceMappingURL=src_app_pages_payment-confirmation_payment-confirmation_module_ts.js.map