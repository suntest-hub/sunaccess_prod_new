"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_reset-pwd-with-personal-details_reset-pwd-with-personal-details_module_ts"],{

/***/ 55984:
/*!*********************************************************************************************************!*\
  !*** ./src/app/pages/reset-pwd-with-personal-details/reset-pwd-with-personal-details-routing.module.ts ***!
  \*********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ResetPwdWithPersonalDetailsPageRoutingModule": () => (/* binding */ ResetPwdWithPersonalDetailsPageRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _reset_pwd_with_personal_details_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./reset-pwd-with-personal-details.page */ 48161);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);




const routes = [{
  path: '',
  component: _reset_pwd_with_personal_details_page__WEBPACK_IMPORTED_MODULE_0__.ResetPwdWithPersonalDetailsPage
}];
class ResetPwdWithPersonalDetailsPageRoutingModule {}
ResetPwdWithPersonalDetailsPageRoutingModule.ɵfac = function ResetPwdWithPersonalDetailsPageRoutingModule_Factory(t) {
  return new (t || ResetPwdWithPersonalDetailsPageRoutingModule)();
};
ResetPwdWithPersonalDetailsPageRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
  type: ResetPwdWithPersonalDetailsPageRoutingModule
});
ResetPwdWithPersonalDetailsPageRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](ResetPwdWithPersonalDetailsPageRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
})();

/***/ }),

/***/ 38702:
/*!*************************************************************************************************!*\
  !*** ./src/app/pages/reset-pwd-with-personal-details/reset-pwd-with-personal-details.module.ts ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ResetPwdWithPersonalDetailsPageModule": () => (/* binding */ ResetPwdWithPersonalDetailsPageModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ 38699);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _reset_pwd_with_personal_details_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./reset-pwd-with-personal-details-routing.module */ 55984);
/* harmony import */ var _reset_pwd_with_personal_details_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./reset-pwd-with-personal-details.page */ 48161);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);







class ResetPwdWithPersonalDetailsPageModule {}
ResetPwdWithPersonalDetailsPageModule.ɵfac = function ResetPwdWithPersonalDetailsPageModule_Factory(t) {
  return new (t || ResetPwdWithPersonalDetailsPageModule)();
};
ResetPwdWithPersonalDetailsPageModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
  type: ResetPwdWithPersonalDetailsPageModule
});
ResetPwdWithPersonalDetailsPageModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__.TranslateModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.ReactiveFormsModule, _reset_pwd_with_personal_details_routing_module__WEBPACK_IMPORTED_MODULE_0__.ResetPwdWithPersonalDetailsPageRoutingModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](ResetPwdWithPersonalDetailsPageModule, {
    declarations: [_reset_pwd_with_personal_details_page__WEBPACK_IMPORTED_MODULE_1__.ResetPwdWithPersonalDetailsPage],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__.TranslateModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.ReactiveFormsModule, _reset_pwd_with_personal_details_routing_module__WEBPACK_IMPORTED_MODULE_0__.ResetPwdWithPersonalDetailsPageRoutingModule]
  });
})();

/***/ }),

/***/ 48161:
/*!***********************************************************************************************!*\
  !*** ./src/app/pages/reset-pwd-with-personal-details/reset-pwd-with-personal-details.page.ts ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ResetPwdWithPersonalDetailsPage": () => (/* binding */ ResetPwdWithPersonalDetailsPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var src_app_app_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/app.component */ 55041);
/* harmony import */ var _popover_content_popover_content_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../popover-content/popover-content.page */ 97716);
/* harmony import */ var http_status_codes__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! http-status-codes */ 92788);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ngx-translate/core */ 38699);
/* harmony import */ var _services_translate_config_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/translate-config.service */ 45340);
/* harmony import */ var src_providers_utils_utils_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/providers/utils/utils.service */ 30423);
/* harmony import */ var src_providers_logger_service_logger_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/providers/logger-service/logger-service */ 9999);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var src_providers_utils_config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/providers/utils/config */ 43485);
/* harmony import */ var _resetPasswordPersonalService__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./resetPasswordPersonalService */ 81770);
/* harmony import */ var _sign_up_securityQuestionsService__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../sign-up/securityQuestionsService */ 71959);
/* harmony import */ var _sign_up_sign_up_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../sign-up/sign-up-service */ 25171);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/common */ 94666);


















function ResetPwdWithPersonalDetailsPage_form_8_img_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "img", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function ResetPwdWithPersonalDetailsPage_form_8_img_4_Template_img_click_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r10);
      const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r9.openPopup($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
}
function ResetPwdWithPersonalDetailsPage_form_8_div_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 19)(1, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](3, 1, "identitynumberisrequired"), "");
  }
}
function ResetPwdWithPersonalDetailsPage_form_8_div_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 19)(1, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](3, 1, "Signup.identityNoLength_req"), "");
  }
}
function ResetPwdWithPersonalDetailsPage_form_8_div_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 19)(1, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](3, 1, "policynumberisrequired"), "");
  }
}
function ResetPwdWithPersonalDetailsPage_form_8_div_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 19)(1, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](3, 1, "Signup.policyNoLength_req"), "");
  }
}
function ResetPwdWithPersonalDetailsPage_form_8_ion_button_20_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "ion-button", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function ResetPwdWithPersonalDetailsPage_form_8_ion_button_20_Template_ion_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r12);
      const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r11.personalDetailscheck());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1, "Proceed");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("disabled", !ctx_r8.personalDetailsForm.controls.identityNumber.valid || !ctx_r8.personalDetailsForm.controls.policyNo.valid);
  }
}
function ResetPwdWithPersonalDetailsPage_form_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "form", 8)(1, "p", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](4, ResetPwdWithPersonalDetailsPage_form_8_img_4_Template, 1, 0, "img", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](5, "ion-item", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](6, "ion-input", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](7, ResetPwdWithPersonalDetailsPage_form_8_div_7_Template, 4, 3, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](8, ResetPwdWithPersonalDetailsPage_form_8_div_8_Template, 4, 3, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](9, "p", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](11, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](12, "ion-item", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](13, "ion-input", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](14, ResetPwdWithPersonalDetailsPage_form_8_div_14_Template, 4, 3, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](15, ResetPwdWithPersonalDetailsPage_form_8_div_15_Template, 4, 3, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](16, "ion-label", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function ResetPwdWithPersonalDetailsPage_form_8_Template_ion_label_click_16_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r14);
      const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r13.forgotPolicyNumber());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](18, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](19, "ion-row");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](20, ResetPwdWithPersonalDetailsPage_form_8_ion_button_20_Template, 2, 1, "ion-button", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("formGroup", ctx_r0.personalDetailsForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](3, 10, "identitynumber"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", !ctx_r0.isValidUser);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r0.personalDetailsForm.get("identityNumber").hasError("required") && ctx_r0.personalDetailsForm.get("identityNumber").touched);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r0.personalDetailsForm.get("identityNumber").hasError("minlength") && ctx_r0.personalDetailsForm.get("identityNumber").touched);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](11, 12, "policycontractnumber"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r0.personalDetailsForm.get("policyNo").hasError("required") && ctx_r0.personalDetailsForm.get("policyNo").touched);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r0.personalDetailsForm.get("policyNo").hasError("minlength") && ctx_r0.personalDetailsForm.get("policyNo").touched);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](18, 14, "Signup.forgot_policy_text"));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", !ctx_r0.isPersonalForm);
  }
}
function ResetPwdWithPersonalDetailsPage_section_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "section", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](1, "ion-spinner", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
}
function ResetPwdWithPersonalDetailsPage_section_10_ion_select_option_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "ion-select-option", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const question_r20 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("value", question_r20.type);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](question_r20.question);
  }
}
function ResetPwdWithPersonalDetailsPage_section_10_ion_item_9_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](2, 1, "selectsecretquestion"), " ");
  }
}
function ResetPwdWithPersonalDetailsPage_section_10_ion_item_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "ion-item", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](1, ResetPwdWithPersonalDetailsPage_section_10_ion_item_9_div_1_Template, 3, 3, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r16.SecretForm.get("securityQuestion").hasError("required") && ctx_r16.SecretForm.get("securityQuestion").touched);
  }
}
function ResetPwdWithPersonalDetailsPage_section_10_div_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 19)(1, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](3, 1, "secretquestionanswerrequired"));
  }
}
function ResetPwdWithPersonalDetailsPage_section_10_div_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 19)(1, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](3, 1, "seqAnsLength_req"));
  }
}
function ResetPwdWithPersonalDetailsPage_section_10_ion_button_19_Template(rf, ctx) {
  if (rf & 1) {
    const _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "ion-button", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function ResetPwdWithPersonalDetailsPage_section_10_ion_button_19_Template_ion_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r24);
      const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r23.secretQuestioncheck());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("disabled", !ctx_r19.SecretForm.controls.securityQuestion.valid || !ctx_r19.SecretForm.controls.answer.valid);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](2, 2, "proceed"));
  }
}
const _c0 = function () {
  return {
    "cssClass": "mycomponent-wider-popover"
  };
};
function ResetPwdWithPersonalDetailsPage_section_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "section")(1, "form", 8)(2, "p", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](5, "ion-list")(6, "ion-item", 11)(7, "ion-select", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](8, ResetPwdWithPersonalDetailsPage_section_10_ion_select_option_8_Template, 2, 2, "ion-select-option", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](9, ResetPwdWithPersonalDetailsPage_section_10_ion_item_9_Template, 2, 1, "ion-item", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](10, "p", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](12, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](13, "ion-item", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](14, "ion-input", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](15, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](16, ResetPwdWithPersonalDetailsPage_section_10_div_16_Template, 4, 3, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](17, ResetPwdWithPersonalDetailsPage_section_10_div_17_Template, 4, 3, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](18, "ion-row");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](19, ResetPwdWithPersonalDetailsPage_section_10_ion_button_19_Template, 3, 4, "ion-button", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("formGroup", ctx_r2.SecretForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](4, 11, "securityquestion"));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("interfaceOptions", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction0"](17, _c0))("selectOptions", ctx_r2.selectOptions);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngForOf", ctx_r2.questions);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r2.SecretForm.get("securityQuestion").hasError("required") && ctx_r2.SecretForm.get("securityQuestion").touched);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](12, 13, "securityanswer"));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](15, 15, "securityanswerPlcHldr"));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r2.SecretForm.get("answer").hasError("required") && ctx_r2.SecretForm.get("answer").touched);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r2.SecretForm.get("answer").hasError("minlength") && ctx_r2.SecretForm.get("answer").touched);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", !ctx_r2.isSecretForm);
  }
}
class ResetPwdWithPersonalDetailsPage {
  constructor(translate, translateConfigService, utils, logger, popOverCtrl, config, forgotpasswordService, securityQuesService, signUpService, alertCtrl, router) {
    this.translate = translate;
    this.translateConfigService = translateConfigService;
    this.utils = utils;
    this.logger = logger;
    this.popOverCtrl = popOverCtrl;
    this.config = config;
    this.forgotpasswordService = forgotpasswordService;
    this.securityQuesService = securityQuesService;
    this.signUpService = signUpService;
    this.alertCtrl = alertCtrl;
    this.router = router;
    // questions: any=[{
    //   type:"name",
    //   Question:"What is your name",
    //   Answer:"sample"
    // },
    // {
    //   type:"age",
    //   Question:"What is your age",
    //   Answer:"30"
    // }];
    this.str1 = "one";
    this.isShowingLoader = true;
    //function to get the secret questions
    this.requestForSecurityQuestions = function () {
      if (this.utils.isDeviceOnLine()) {
        this.securityQuesService.getSecurityQuestions().then(result => {
          this.questions = result.responseJSON.array;
          this.SecretForm.controls['securityQuestion'].setValue(this.questions[0]['Type'], {
            onlySelf: true
          });
          this.isShowingLoader = false;
        }, err => {
          this.isShowingLoader = false;
        });
      } else {
        let errorMsg = this.translate.instant('generic_msgs.network_err');
        this.utils.showAlert("", errorMsg);
      }
    };
    //function to check teh user policy number
    this.personalDetailscheck = function () {
      if (this.utils.isDeviceOnLine()) {
        var identityNumber = this.personalDetailsForm.controls.identityNumber.value;
        var policyNo = this.personalDetailsForm.controls.policyNo.value;
        this.utils.showProgressLoader();
        this.forgotpasswordService.resetPasswordPersonal(this.email, identityNumber, policyNo).then(result => {
          this.serviceSuccess(result);
        }, err => {
          this.serviceFailed(err);
        });
      } else {
        let errorMsg = this.translate.instant('generic_msgs.network_err');
        this.utils.showAlert("", errorMsg);
      }
    };
    //function to validate the user secret question and answer
    this.secretQuestioncheck = function () {
      if (this.utils.isDeviceOnLine()) {
        var securityQuestion = this.SecretForm.controls.securityQuestion.value;
        var answer = this.SecretForm.controls.answer.value;
        this.utils.showProgressLoader();
        this.forgotpasswordService.resetPasswordSecret(this.email, securityQuestion, answer).then(result => {
          this.serviceSuccess(result);
        }, err => {
          this.serviceFailed(err);
        });
      } else {
        let errorMsg = this.translate.instant('generic_msgs.network_err');
        this.utils.showAlert("", errorMsg);
      }
    };
    this.selectedLanguage = this.translateConfigService.getDefaultLanguage();
    this.translateConfigService.setLanguage('en');
    this.email = history.state.email;
    this.isSecret = history.state.isSecret;
    this.selectOptions = {
      cssClass: "selectPopover-forgotPassword"
    };
    console.log('this.isSecret', this.isSecret);
  }
  //  ionViewDidLoad() {
  // }
  ngOnInit() {
    this.personalDetailsForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormGroup({
      identityNumber: new _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.minLength(3)]),
      policyNo: new _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.minLength(3)])
    });
    this.SecretForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormGroup({
      securityQuestion: new _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required]),
      answer: new _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.minLength(1)])
    });
    this.logger.log('ionViewDidLoad ResetPwdWithPersonalDetailsPage');
    if (this.isSecret) {
      this.requestForSecurityQuestions();
    }
    // this.questions=[{
    //   id:1,
    //   type:"name",
    //   question:"What is your name What is your name",
    //   Answer:"sample"
    // },
    // {
    //   id:2,
    //   type:"age",
    //   question:"What is your age",
    //   Answer:"30"
    // }];
    // this.selectOptions=this.questions[0];
  }

  ionViewWillEnter() {
    this.utils.component.emit(src_app_app_component__WEBPACK_IMPORTED_MODULE_0__.MenuOptions.FORGOT_PASSWORD);
  }
  /**
   * This method is used to show Pop over
   * @param myEvent - Element that is clicked
   */
  openPopup(e) {
    return (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__awaiter)(this, void 0, void 0, function* () {
      const popover = yield this.popOverCtrl.create({
        component: _popover_content_popover_content_page__WEBPACK_IMPORTED_MODULE_1__.PopoverContentPage,
        showBackdrop: false,
        event: e,
        componentProps: {
          msg: this.str1,
          cssClass: 'custom-popover'
        },
        cssClass: 'custom-popover'
      });
      yield popover.present();
    });
  }
  serviceSuccess(result) {
    try {
      this.utils.dissmisProgressLoader();
      this.utils.showAlert("", result.responseJSON.userMessage);
      this.router.navigate(['/login-first']);
    } catch (e) {
      this.utils.dissmisProgressLoader();
      let errorMsg = this.translate.instant('generic_msgs.server_err');
      this.utils.showAlert("", errorMsg);
    }
  }
  serviceFailed(err) {
    this.utils.dissmisProgressLoader();
    let errorMsg = this.utils.handleServiceException(err); //common error handler
    this.utils.showAlert("", errorMsg);
  }
  forgotPolicyNumber() {
    var identityNo = this.personalDetailsForm.controls.identityNumber.value;
    alert(identityNo);
    if (!identityNo) {
      this.errorMsg = this.translate.instant('Signup.identityNo_req');
      this.showDialog("", this.errorMsg);
    } else {
      if (identityNo.length > 2) {
        //this.showDialog("", "Identity No should be greater than 2 characters");
        this.utils.showProgressLoader();
        var userRegistered = true;
        var mobileOs = "AOS";
        if (this.utils.getPlatform() == 'ios') {
          mobileOs = "IOS";
        }
        this.signUpService.postForgotPolicyNumber(identityNo, userRegistered, mobileOs).then(res => {
          try {
            if (res['responseJSON'] && res['responseJSON']['statusCode'] == http_status_codes__WEBPACK_IMPORTED_MODULE_12__.ACCEPTED) {
              this.errorMsg = res['responseJSON']['userMessage'];
              this.utils.dissmisProgressLoader();
              // this.showDialog("", this.errorMsg);
              this.utils.showAlert("", this.errorMsg);
            }
          } catch (e) {
            this.utils.dissmisProgressLoader();
            let errorMsg = this.translate.instant('generic_msgs.server_err');
            this.utils.showAlert("", errorMsg);
          }
        }, err => {
          this.utils.dissmisProgressLoader();
          let errorMsg = this.utils.handleServiceException(err);
          this.utils.showAlert("", errorMsg);
        });
      }
    }
  }
  /**
  *
  * @param title - this is the title of the alert
  * @param message  - message that need to display on the alert.
  */
  showDialog(title, message) {
    let buttons = [{
      text: 'Ok',
      handler: () => {
        //this.navCtrl.pop();
      }
    }];
    let alert = this.alertCtrl.create({
      //title: title,
      message: message,
      buttons: buttons
      //enableBackdropDismiss: false,
    });
    // return (alert).present();
  }
}

ResetPwdWithPersonalDetailsPage.ɵfac = function ResetPwdWithPersonalDetailsPage_Factory(t) {
  return new (t || ResetPwdWithPersonalDetailsPage)(_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__.TranslateService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_services_translate_config_service__WEBPACK_IMPORTED_MODULE_2__.TranslateConfigService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](src_providers_utils_utils_service__WEBPACK_IMPORTED_MODULE_3__.UtilService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](src_providers_logger_service_logger_service__WEBPACK_IMPORTED_MODULE_4__.LoggerServiceProvider), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_14__.PopoverController), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](src_providers_utils_config__WEBPACK_IMPORTED_MODULE_5__.ConfigProvider), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_resetPasswordPersonalService__WEBPACK_IMPORTED_MODULE_6__.ResetPasswordPersonalService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_sign_up_securityQuestionsService__WEBPACK_IMPORTED_MODULE_7__.SecurityQuestionsService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_sign_up_sign_up_service__WEBPACK_IMPORTED_MODULE_8__.SignUpServiceProvider), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_14__.AlertController), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_15__.Router));
};
ResetPwdWithPersonalDetailsPage.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineComponent"]({
  type: ResetPwdWithPersonalDetailsPage,
  selectors: [["app-reset-pwd-with-personal-details"]],
  decls: 11,
  vars: 6,
  consts: [["mode", "ios"], ["color", "primary"], ["slot", "start"], ["text", "", "icon", "chevron-back-outline", 2, "padding-left", "15px", "font-size", "0.7rem"], ["no-bounce", "", 1, "app_bg1", "text_color_base", "ion-padding"], ["class", "white_container_border_radius ion-padding", 3, "formGroup", 4, "ngIf"], ["class", "spinnersection", 4, "ngIf"], [4, "ngIf"], [1, "white_container_border_radius", "ion-padding", 3, "formGroup"], [2, "margin-bottom", "10px"], ["src", "../../../assets/imgs/circle-question-solid.svg", "alt", "...", "style", "width: 20px; float: right;;", 3, "click", 4, "ngIf"], ["lines", "none", 1, "border"], ["type", "text", "placeholder", "New NRIC/Other Identification", "restrict-input", "", "restrictInput", "alphanumeric", "amaxlength", "40", "formControlName", "identityNumber"], ["class", "errPosition", 4, "ngIf"], ["stacked", "", 2, "padding-top", "10px", "margin-bottom", "10px"], ["type", "text", "placeholder", "Policy /contract /Certificate Number", "restrict-input", "", "restrictInput", "alphanumeric", "restrict-input", "", "restrictInput", "alphanumeric", "amaxlength", "40", "formControlName", "policyNo"], [1, "forgotPolicyLink", 3, "click"], ["ion-button", "", "class", "btn_center", 3, "disabled", "click", 4, "ngIf"], ["src", "../../../assets/imgs/circle-question-solid.svg", "alt", "...", 2, "width", "20px", "float", "right", 3, "click"], [1, "errPosition"], [1, "mandatory_star"], ["ion-button", "", 1, "btn_center", 3, "disabled", "click"], [1, "spinnersection"], ["name", "ios-small"], [2, "margin-bottom", "0px"], ["placeholder", "Select The Security Question", "mode", "ios", "interface", "popover", "formControlName", "securityQuestion", "select-option", "", 3, "interfaceOptions", "selectOptions"], [3, "value", 4, "ngFor", "ngForOf"], ["lines", "none", 4, "ngIf"], ["stacked", "", 2, "margin-bottom", "10px"], ["type", "text", "restrict-input", "", "restrictInput", "alphanumericwithspace", "amaxlength", "50", "formControlName", "answer", 3, "placeholder"], [3, "value"], ["lines", "none"]],
  template: function ResetPwdWithPersonalDetailsPage_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "ion-header", 0)(1, "ion-toolbar", 1)(2, "ion-buttons", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](3, "ion-back-button", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](4, "ion-title");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](6, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](7, "ion-content", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](8, ResetPwdWithPersonalDetailsPage_form_8_Template, 21, 16, "form", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](9, ResetPwdWithPersonalDetailsPage_section_9_Template, 2, 0, "section", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](10, ResetPwdWithPersonalDetailsPage_section_10_Template, 20, 18, "section", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](6, 4, "forgotpassword"));
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", !ctx.isSecret);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx.isSecret && ctx.isShowingLoader);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx.isSecret && !ctx.isShowingLoader);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_16__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_16__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.NgControlStatusGroup, _ionic_angular__WEBPACK_IMPORTED_MODULE_14__.IonBackButton, _ionic_angular__WEBPACK_IMPORTED_MODULE_14__.IonButton, _ionic_angular__WEBPACK_IMPORTED_MODULE_14__.IonButtons, _ionic_angular__WEBPACK_IMPORTED_MODULE_14__.IonContent, _ionic_angular__WEBPACK_IMPORTED_MODULE_14__.IonHeader, _ionic_angular__WEBPACK_IMPORTED_MODULE_14__.IonInput, _ionic_angular__WEBPACK_IMPORTED_MODULE_14__.IonItem, _ionic_angular__WEBPACK_IMPORTED_MODULE_14__.IonLabel, _ionic_angular__WEBPACK_IMPORTED_MODULE_14__.IonList, _ionic_angular__WEBPACK_IMPORTED_MODULE_14__.IonRow, _ionic_angular__WEBPACK_IMPORTED_MODULE_14__.IonSelect, _ionic_angular__WEBPACK_IMPORTED_MODULE_14__.IonSelectOption, _ionic_angular__WEBPACK_IMPORTED_MODULE_14__.IonSpinner, _ionic_angular__WEBPACK_IMPORTED_MODULE_14__.IonTitle, _ionic_angular__WEBPACK_IMPORTED_MODULE_14__.IonToolbar, _ionic_angular__WEBPACK_IMPORTED_MODULE_14__.SelectValueAccessor, _ionic_angular__WEBPACK_IMPORTED_MODULE_14__.TextValueAccessor, _ionic_angular__WEBPACK_IMPORTED_MODULE_14__.IonBackButtonDelegate, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormControlName, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__.TranslatePipe],
  styles: ["ion-content[_ngcontent-%COMP%] {\n  --background: url(/../assets/imgs/register_bg.jpg) no-repeat center center / cover;\n}\nion-content[_ngcontent-%COMP%]   .text_color_base[_ngcontent-%COMP%] {\n  color: --ion-color-secondary !important;\n}\nion-content[_ngcontent-%COMP%]   .white_container_border_radius[_ngcontent-%COMP%] {\n  background-color: rgba(255, 255, 255, 0.7) !important;\n  border-radius: 15px !important;\n}\nion-content[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%] {\n  padding-left: 0px;\n  background: transparent;\n}\nion-content[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   .item-input.ng-valid.item-input-has-value[_ngcontent-%COMP%]:not(.input-has-focus):not(.item-input-has-focus)   .item-inner[_ngcontent-%COMP%], ion-content[_ngcontent-%COMP%]   .item.item-input.ng-valid.input-has-value[_ngcontent-%COMP%]:not(.input-has-focus):not(.item-input-has-focus)   .item-inner[_ngcontent-%COMP%] {\n  border-bottom-color: none !important;\n  box-shadow: none !important;\n}\nion-content[_ngcontent-%COMP%]   .item-inner[_ngcontent-%COMP%] {\n  padding-right: 0px !important;\n  border-bottom: none !important;\n}\nion-content[_ngcontent-%COMP%]   .input[_ngcontent-%COMP%] {\n  border: 1px solid #eee;\n  padding: 3px 15px;\n  background: white;\n}\nion-content[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%] {\n  font-size: 1.7rem !important;\n  color: --ion-color-secondary !important;\n  margin-bottom: 5px !important;\n}\nion-content[_ngcontent-%COMP%]   .question[_ngcontent-%COMP%] {\n  text-align: right;\n  float: right;\n  font-size: 1.3rem;\n}\nion-content[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  float: right !important;\n  padding: 5px;\n  font-size: 0.85em;\n}\nion-content[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%] {\n  margin-top: 10px;\n}\nion-content[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  font-family: Agenda-Regular;\n  color: --ion-color-secondary;\n  font-size: 17px;\n  margin-bottom: 5px;\n  margin-top: 10px;\n  line-height: 1.42857143;\n}\nion-content[_ngcontent-%COMP%]   .forgotPolicyLink[_ngcontent-%COMP%] {\n  font-size: 1rem !important;\n  margin-top: 6px !important;\n  text-decoration: underline;\n  display: block;\n  white-space: unset !important;\n}\nion-content[_ngcontent-%COMP%]   .mandatory_star[_ngcontent-%COMP%] {\n  color: #f00;\n}\nion-content[_ngcontent-%COMP%]   .errPosition[_ngcontent-%COMP%] {\n  margin-top: 4px;\n}\nion-content[_ngcontent-%COMP%]   .btn_center[_ngcontent-%COMP%] {\n  text-transform: capitalize;\n  --background: #002d3d !important;\n  color: white;\n  margin-top: 15px;\n  --border-radius: 10px;\n  min-height: 40px;\n  width: 100% !important;\n  font-family: Agenda-Regular !important;\n}\nion-content[_ngcontent-%COMP%]   ion-select[_ngcontent-%COMP%] {\n  --placeholder-capacity: 2;\n  width: 100% !important;\n  justify-content: center;\n}\nion-content[_ngcontent-%COMP%]   ion-popover[_ngcontent-%COMP%]   ion-list[_ngcontent-%COMP%] {\n  --width:400px;\n}\nion-content[_ngcontent-%COMP%]   .p[_ngcontent-%COMP%] {\n  padding-top: 10px;\n  margin-bottom: 5px;\n}\n\n.mycomponent-wider-popover[_ngcontent-%COMP%] {\n  --min-width: 340px !important;\n}\n.mycomponent-wider-popover[_ngcontent-%COMP%]   .ion-select-popover[_ngcontent-%COMP%] {\n  position: fixed;\n  width: 80%;\n}\n\n.custom-popover[_ngcontent-%COMP%]   .popover-content[_ngcontent-%COMP%] {\n  width: 200px !important;\n  border-radius: 6px;\n  border: 1px solid rgba(0, 0, 0, 0.2);\n  color: #002d3d;\n  background-color: #e5eaeb !important;\n  font-size: 13px;\n  margin-top: 1.6em;\n  text-align: center;\n  font-family: \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n  --margin-left: -15px;\n  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcGFnZXMvcmVzZXQtcHdkLXdpdGgtcGVyc29uYWwtZGV0YWlscy9yZXNldC1wd2Qtd2l0aC1wZXJzb25hbC1kZXRhaWxzLnBhZ2Uuc2NzcyIsIndlYnBhY2s6Ly8uLy4uLy4uLy4uL0FsbCUyMFByb2plY3RzL01hbGF5c2lhX0NsaWVudEFwcF9SZXZhbXAvU3VuQWNjZXNzX0lvbmljNl9SZXZhbXAvc3JjL2FwcC9wYWdlcy9yZXNldC1wd2Qtd2l0aC1wZXJzb25hbC1kZXRhaWxzL3Jlc2V0LXB3ZC13aXRoLXBlcnNvbmFsLWRldGFpbHMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0ZBQUE7QUNDRjtBRENFO0VBQ0UsdUNBQUE7QUNDSjtBRENDO0VBQ0MscURBQUE7RUFDQSw4QkFBQTtBQ0NGO0FEQ0E7RUFDRSxpQkFBQTtFQUNBLHVCQUFBO0FDQ0Y7QURFQTtFQUNFLG9DQUFBO0VBRUEsMkJBQUE7QUNBRjtBREtBO0VBQ0MsNkJBQUE7RUFDQSw4QkFBQTtBQ0hEO0FETUE7RUFDRSxzQkFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7QUNKRjtBRE9BO0VBQ0UsNEJBQUE7RUFDQSx1Q0FBQTtFQUNBLDZCQUFBO0FDTEY7QURRQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0FDTkE7QURRQztFQUNDLHVCQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0FDTkY7QURzQkE7RUFDRSxnQkFBQTtBQ3BCRjtBRHNCQTtFQUNJLDJCQUFBO0VBQ0EsNEJBQUE7RUFDRixlQUFBO0VBQ0Qsa0JBQUE7RUFDQSxnQkFBQTtFQUNBLHVCQUFBO0FDcEJEO0FEc0JBO0VBQ0EsMEJBQUE7RUFDRSwwQkFBQTtFQUNBLDBCQUFBO0VBQ0EsY0FBQTtFQUNBLDZCQUFBO0FDcEJGO0FEc0JBO0VBQ0UsV0FBQTtBQ3BCRjtBRHNCQTtFQUNJLGVBQUE7QUNwQko7QURzQkE7RUFDRSwwQkFBQTtFQUNBLGdDQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBRUEscUJBQUE7RUFDQSxnQkFBQTtFQUNBLHNCQUFBO0VBQ0Esc0NBQUE7QUNyQkY7QUR1QkE7RUFDRSx5QkFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7QUNyQkY7QUR3QkU7RUFDRSxhQUFBO0FDdEJKO0FEeUJDO0VBQ0MsaUJBQUE7RUFDQSxrQkFBQTtBQ3ZCRjs7QUQyQkE7RUFDRSw2QkFBQTtBQ3hCRjtBRHlCSTtFQUNNLGVBQUE7RUFDQSxVQUFBO0FDdkJWOztBRDRCQTtFQUNFLHVCQUFBO0VBQ0Esa0JBQUE7RUFDQSxvQ0FBQTtFQUNBLGNBQUE7RUFDQSxvQ0FBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsMkRBQUE7RUFDQSxvQkFBQTtFQUNBLHlDQUFBO0FDekJGIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNvbnRlbnQge1xyXG4gIC0tYmFja2dyb3VuZDogdXJsKC8uLi9hc3NldHMvaW1ncy9yZWdpc3Rlcl9iZy5qcGcpIG5vLXJlcGVhdCBjZW50ZXIgY2VudGVyIC8gY292ZXI7XHJcblxyXG4gIC50ZXh0X2NvbG9yX2Jhc2Uge1xyXG4gICAgY29sb3I6LS1pb24tY29sb3Itc2Vjb25kYXJ5ICFpbXBvcnRhbnQ7XHJcbiB9XHJcbiAud2hpdGVfY29udGFpbmVyX2JvcmRlcl9yYWRpdXMge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC43KSAhaW1wb3J0YW50O1xyXG4gIGJvcmRlci1yYWRpdXM6IDE1cHggIWltcG9ydGFudDtcclxufVxyXG4uaXRlbXtcclxuICBwYWRkaW5nLWxlZnQ6IDBweDtcclxuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxufVxyXG5cclxuLml0ZW0gLml0ZW0taW5wdXQubmctdmFsaWQuaXRlbS1pbnB1dC1oYXMtdmFsdWU6bm90KC5pbnB1dC1oYXMtZm9jdXMpOm5vdCguaXRlbS1pbnB1dC1oYXMtZm9jdXMpIC5pdGVtLWlubmVyLCAuaXRlbS5pdGVtLWlucHV0Lm5nLXZhbGlkLmlucHV0LWhhcy12YWx1ZTpub3QoLmlucHV0LWhhcy1mb2N1cyk6bm90KC5pdGVtLWlucHV0LWhhcy1mb2N1cykgLml0ZW0taW5uZXJ7XHJcbiAgYm9yZGVyLWJvdHRvbS1jb2xvcjogbm9uZSAhaW1wb3J0YW50O1xyXG4gIC13ZWJraXQtYm94LXNoYWRvdyA6IG5vbmUgIWltcG9ydGFudDtcclxuICBib3gtc2hhZG93IDogbm9uZSAhaW1wb3J0YW50O1xyXG5cclxufVxyXG5cclxuXHJcbi5pdGVtLWlubmVye1xyXG4gcGFkZGluZy1yaWdodDogMHB4ICFpbXBvcnRhbnQ7XHJcbiBib3JkZXItYm90dG9tOiBub25lICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5pbnB1dHtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjZWVlO1xyXG4gIHBhZGRpbmc6IDNweCAxNXB4O1xyXG4gIGJhY2tncm91bmQ6d2hpdGU7XHJcbn1cclxuXHJcbi5sYWJlbHtcclxuICBmb250LXNpemU6IDEuN3JlbSAhaW1wb3J0YW50O1xyXG4gIGNvbG9yOiAtLWlvbi1jb2xvci1zZWNvbmRhcnkgIWltcG9ydGFudDtcclxuICBtYXJnaW4tYm90dG9tOiA1cHggIWltcG9ydGFudDtcclxufVxyXG5cclxuLnF1ZXN0aW9ue1xyXG50ZXh0LWFsaWduOiByaWdodDtcclxuZmxvYXQ6IHJpZ2h0O1xyXG5mb250LXNpemU6IDEuM3JlbTtcclxufVxyXG4gaW9uLWljb257XHJcbiAgZmxvYXQ6IHJpZ2h0ICFpbXBvcnRhbnQ7XHJcbiAgcGFkZGluZzogNXB4O1xyXG4gIGZvbnQtc2l6ZTogMC44NWVtO1xyXG59XHJcblxyXG4vLyAucG9wb3Zlci1jb250ZW50e1xyXG4vLyAgIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XHJcblxyXG4vLyAgIC5yYWRpbyAsIC5yYWRpby1pbm5lciAsIC5yYWRpby1pY29ue1xyXG4vLyAgICAgICB3aWR0aDogMTAwcHggIWltcG9ydGFudDtcclxuLy8gICAgICAgaGVpZ2h0OiAwcHggIWltcG9ydGFudDtcclxuLy8gICB9XHJcblxyXG4vLyAgIC5yYWRpby1pY29ue1xyXG4vLyAgICAgICBib3JkZXI6IDBweCAhaW1wb3J0YW50O1xyXG4vLyAgIH1cclxuLy8gfVxyXG5cclxuLnJvd3tcclxuICBtYXJnaW4tdG9wOiAxMHB4O1xyXG59XHJcbmRpdiB7XHJcbiAgICBmb250LWZhbWlseTogQWdlbmRhLVJlZ3VsYXI7XHJcbiAgICBjb2xvcjogLS1pb24tY29sb3Itc2Vjb25kYXJ5O1xyXG4gIGZvbnQtc2l6ZTogMTdweDtcclxuIG1hcmdpbi1ib3R0b206NXB4O1xyXG4gbWFyZ2luLXRvcDogMTBweDtcclxuIGxpbmUtaGVpZ2h0OiAxLjQyODU3MTQzO1xyXG59XHJcbi5mb3Jnb3RQb2xpY3lMaW5re1xyXG5mb250LXNpemU6IDEuMHJlbSAhaW1wb3J0YW50O1xyXG4gIG1hcmdpbi10b3A6IDZweCAhaW1wb3J0YW50O1xyXG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIHdoaXRlLXNwYWNlOiB1bnNldCAhaW1wb3J0YW50O1xyXG59XHJcbi5tYW5kYXRvcnlfc3RhciB7XHJcbiAgY29sb3I6ICNmMDA7XHJcbn1cclxuLmVyclBvc2l0aW9uIHtcclxuICAgIG1hcmdpbi10b3A6IDRweDtcclxufVxyXG4uYnRuX2NlbnRlciB7XHJcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XHJcbiAgLS1iYWNrZ3JvdW5kOiAjMDAyZDNkICFpbXBvcnRhbnQ7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIG1hcmdpbi10b3A6IDE1cHg7XHJcbiAgLy9mb250LXNpemU6IDEuN3JlbTtcclxuICAtLWJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgbWluLWhlaWdodDogNDBweDtcclxuICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xyXG4gIGZvbnQtZmFtaWx5OiBBZ2VuZGEtUmVndWxhciAhaW1wb3J0YW50O1xyXG59XHJcbmlvbi1zZWxlY3Qge1xyXG4gIC0tcGxhY2Vob2xkZXItY2FwYWNpdHk6IDI7XHJcbiAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG4gaW9uLXBvcG92ZXJ7XHJcbiAgaW9uLWxpc3R7XHJcbiAgICAtLXdpZHRoOjQwMHB4O1xyXG4gIH1cclxuIH1cclxuIC5we1xyXG4gIHBhZGRpbmctdG9wOjEwcHg7XHJcbiAgbWFyZ2luLWJvdHRvbTo1cHhcclxuIH1cclxufVxyXG5cclxuLm15Y29tcG9uZW50LXdpZGVyLXBvcG92ZXIge1xyXG4gIC0tbWluLXdpZHRoOiAzNDBweCAhaW1wb3J0YW50O1xyXG4gICAgLmlvbi1zZWxlY3QtcG9wb3ZlcntcclxuICAgICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgICAgICAgIHdpZHRoOiA4MCU7XHJcblxyXG4gICB9XHJcbn1cclxuXHJcbi5jdXN0b20tcG9wb3ZlciAucG9wb3Zlci1jb250ZW50IHtcclxuICB3aWR0aDogMjAwcHggIWltcG9ydGFudDtcclxuICBib3JkZXItcmFkaXVzOiA2cHg7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjIpO1xyXG4gIGNvbG9yOiAjMDAyZDNkO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNlNWVhZWIgIWltcG9ydGFudDtcclxuICBmb250LXNpemU6IDEzcHg7XHJcbiAgbWFyZ2luLXRvcDogMS42ZW07XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGZvbnQtZmFtaWx5OiBcIkhlbHZldGljYSBOZXVlXCIsIEhlbHZldGljYSwgQXJpYWwsIHNhbnMtc2VyaWY7XHJcbiAgLS1tYXJnaW4tbGVmdDogLTE1cHg7XHJcbiAgYm94LXNoYWRvdzogMCA1cHggMTBweCByZ2JhKDAsIDAsIDAsIDAuMik7XHJcbn1cclxuXHJcbi8vIC5wb3BvdmVyLWNvbnRlbnR7XHJcbi8vICAgd2lkdGg6IDc5JSAhaW1wb3J0YW50OyAgXHJcbi8vICAgLS1taW4td2lkdGg6IDM0MHB4ICFpbXBvcnRhbnQ7XHJcblxyXG4vLyAgIC5yYWRpbyAsIC5yYWRpby1pbm5lciAsIC5yYWRpby1pY29ue1xyXG4vLyAgICAgICB3aWR0aDogMHB4ICFpbXBvcnRhbnQ7XHJcbi8vICAgICAgIGhlaWdodDogMHB4ICFpbXBvcnRhbnQ7XHJcbi8vICAgfVxyXG4gIFxyXG4vLyAgIC5yYWRpby1pY29ue1xyXG4vLyAgICAgICBib3JkZXI6IDBweCAhaW1wb3J0YW50O1xyXG4vLyAgIH1cclxuLy8gfSIsImlvbi1jb250ZW50IHtcbiAgLS1iYWNrZ3JvdW5kOiB1cmwoLy4uL2Fzc2V0cy9pbWdzL3JlZ2lzdGVyX2JnLmpwZykgbm8tcmVwZWF0IGNlbnRlciBjZW50ZXIgLyBjb3Zlcjtcbn1cbmlvbi1jb250ZW50IC50ZXh0X2NvbG9yX2Jhc2Uge1xuICBjb2xvcjogLS1pb24tY29sb3Itc2Vjb25kYXJ5ICFpbXBvcnRhbnQ7XG59XG5pb24tY29udGVudCAud2hpdGVfY29udGFpbmVyX2JvcmRlcl9yYWRpdXMge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNykgIWltcG9ydGFudDtcbiAgYm9yZGVyLXJhZGl1czogMTVweCAhaW1wb3J0YW50O1xufVxuaW9uLWNvbnRlbnQgLml0ZW0ge1xuICBwYWRkaW5nLWxlZnQ6IDBweDtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG59XG5pb24tY29udGVudCAuaXRlbSAuaXRlbS1pbnB1dC5uZy12YWxpZC5pdGVtLWlucHV0LWhhcy12YWx1ZTpub3QoLmlucHV0LWhhcy1mb2N1cyk6bm90KC5pdGVtLWlucHV0LWhhcy1mb2N1cykgLml0ZW0taW5uZXIsIGlvbi1jb250ZW50IC5pdGVtLml0ZW0taW5wdXQubmctdmFsaWQuaW5wdXQtaGFzLXZhbHVlOm5vdCguaW5wdXQtaGFzLWZvY3VzKTpub3QoLml0ZW0taW5wdXQtaGFzLWZvY3VzKSAuaXRlbS1pbm5lciB7XG4gIGJvcmRlci1ib3R0b20tY29sb3I6IG5vbmUgIWltcG9ydGFudDtcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7XG4gIGJveC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudDtcbn1cbmlvbi1jb250ZW50IC5pdGVtLWlubmVyIHtcbiAgcGFkZGluZy1yaWdodDogMHB4ICFpbXBvcnRhbnQ7XG4gIGJvcmRlci1ib3R0b206IG5vbmUgIWltcG9ydGFudDtcbn1cbmlvbi1jb250ZW50IC5pbnB1dCB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNlZWU7XG4gIHBhZGRpbmc6IDNweCAxNXB4O1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbn1cbmlvbi1jb250ZW50IC5sYWJlbCB7XG4gIGZvbnQtc2l6ZTogMS43cmVtICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiAtLWlvbi1jb2xvci1zZWNvbmRhcnkgIWltcG9ydGFudDtcbiAgbWFyZ2luLWJvdHRvbTogNXB4ICFpbXBvcnRhbnQ7XG59XG5pb24tY29udGVudCAucXVlc3Rpb24ge1xuICB0ZXh0LWFsaWduOiByaWdodDtcbiAgZmxvYXQ6IHJpZ2h0O1xuICBmb250LXNpemU6IDEuM3JlbTtcbn1cbmlvbi1jb250ZW50IGlvbi1pY29uIHtcbiAgZmxvYXQ6IHJpZ2h0ICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmc6IDVweDtcbiAgZm9udC1zaXplOiAwLjg1ZW07XG59XG5pb24tY29udGVudCAucm93IHtcbiAgbWFyZ2luLXRvcDogMTBweDtcbn1cbmlvbi1jb250ZW50IGRpdiB7XG4gIGZvbnQtZmFtaWx5OiBBZ2VuZGEtUmVndWxhcjtcbiAgY29sb3I6IC0taW9uLWNvbG9yLXNlY29uZGFyeTtcbiAgZm9udC1zaXplOiAxN3B4O1xuICBtYXJnaW4tYm90dG9tOiA1cHg7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG4gIGxpbmUtaGVpZ2h0OiAxLjQyODU3MTQzO1xufVxuaW9uLWNvbnRlbnQgLmZvcmdvdFBvbGljeUxpbmsge1xuICBmb250LXNpemU6IDFyZW0gIWltcG9ydGFudDtcbiAgbWFyZ2luLXRvcDogNnB4ICFpbXBvcnRhbnQ7XG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xuICBkaXNwbGF5OiBibG9jaztcbiAgd2hpdGUtc3BhY2U6IHVuc2V0ICFpbXBvcnRhbnQ7XG59XG5pb24tY29udGVudCAubWFuZGF0b3J5X3N0YXIge1xuICBjb2xvcjogI2YwMDtcbn1cbmlvbi1jb250ZW50IC5lcnJQb3NpdGlvbiB7XG4gIG1hcmdpbi10b3A6IDRweDtcbn1cbmlvbi1jb250ZW50IC5idG5fY2VudGVyIHtcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG4gIC0tYmFja2dyb3VuZDogIzAwMmQzZCAhaW1wb3J0YW50O1xuICBjb2xvcjogd2hpdGU7XG4gIG1hcmdpbi10b3A6IDE1cHg7XG4gIC0tYm9yZGVyLXJhZGl1czogMTBweDtcbiAgbWluLWhlaWdodDogNDBweDtcbiAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcbiAgZm9udC1mYW1pbHk6IEFnZW5kYS1SZWd1bGFyICFpbXBvcnRhbnQ7XG59XG5pb24tY29udGVudCBpb24tc2VsZWN0IHtcbiAgLS1wbGFjZWhvbGRlci1jYXBhY2l0eTogMjtcbiAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5pb24tY29udGVudCBpb24tcG9wb3ZlciBpb24tbGlzdCB7XG4gIC0td2lkdGg6NDAwcHg7XG59XG5pb24tY29udGVudCAucCB7XG4gIHBhZGRpbmctdG9wOiAxMHB4O1xuICBtYXJnaW4tYm90dG9tOiA1cHg7XG59XG5cbi5teWNvbXBvbmVudC13aWRlci1wb3BvdmVyIHtcbiAgLS1taW4td2lkdGg6IDM0MHB4ICFpbXBvcnRhbnQ7XG59XG4ubXljb21wb25lbnQtd2lkZXItcG9wb3ZlciAuaW9uLXNlbGVjdC1wb3BvdmVyIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB3aWR0aDogODAlO1xufVxuXG4uY3VzdG9tLXBvcG92ZXIgLnBvcG92ZXItY29udGVudCB7XG4gIHdpZHRoOiAyMDBweCAhaW1wb3J0YW50O1xuICBib3JkZXItcmFkaXVzOiA2cHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4yKTtcbiAgY29sb3I6ICMwMDJkM2Q7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlNWVhZWIgIWltcG9ydGFudDtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBtYXJnaW4tdG9wOiAxLjZlbTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LWZhbWlseTogXCJIZWx2ZXRpY2EgTmV1ZVwiLCBIZWx2ZXRpY2EsIEFyaWFsLCBzYW5zLXNlcmlmO1xuICAtLW1hcmdpbi1sZWZ0OiAtMTVweDtcbiAgYm94LXNoYWRvdzogMCA1cHggMTBweCByZ2JhKDAsIDAsIDAsIDAuMik7XG59Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ })

}]);
//# sourceMappingURL=src_app_pages_reset-pwd-with-personal-details_reset-pwd-with-personal-details_module_ts.js.map