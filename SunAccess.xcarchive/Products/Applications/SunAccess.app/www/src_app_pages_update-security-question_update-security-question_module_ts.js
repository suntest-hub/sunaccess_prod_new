"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_update-security-question_update-security-question_module_ts"],{

/***/ 45834:
/*!*******************************************************************************************!*\
  !*** ./src/app/pages/update-security-question/update-security-question-routing.module.ts ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UpdateSecurityQuestionPageRoutingModule": () => (/* binding */ UpdateSecurityQuestionPageRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _update_security_question_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./update-security-question.page */ 60123);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);




const routes = [{
  path: '',
  component: _update_security_question_page__WEBPACK_IMPORTED_MODULE_0__.UpdateSecurityQuestionPage
}];
class UpdateSecurityQuestionPageRoutingModule {}
UpdateSecurityQuestionPageRoutingModule.ɵfac = function UpdateSecurityQuestionPageRoutingModule_Factory(t) {
  return new (t || UpdateSecurityQuestionPageRoutingModule)();
};
UpdateSecurityQuestionPageRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
  type: UpdateSecurityQuestionPageRoutingModule
});
UpdateSecurityQuestionPageRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](UpdateSecurityQuestionPageRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
})();

/***/ }),

/***/ 31018:
/*!***********************************************************************************!*\
  !*** ./src/app/pages/update-security-question/update-security-question.module.ts ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UpdateSecurityQuestionPageModule": () => (/* binding */ UpdateSecurityQuestionPageModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _update_security_question_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./update-security-question-routing.module */ 45834);
/* harmony import */ var _update_security_question_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./update-security-question.page */ 60123);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ 38699);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);







class UpdateSecurityQuestionPageModule {}
UpdateSecurityQuestionPageModule.ɵfac = function UpdateSecurityQuestionPageModule_Factory(t) {
  return new (t || UpdateSecurityQuestionPageModule)();
};
UpdateSecurityQuestionPageModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
  type: UpdateSecurityQuestionPageModule
});
UpdateSecurityQuestionPageModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__.TranslateModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.ReactiveFormsModule, _update_security_question_routing_module__WEBPACK_IMPORTED_MODULE_0__.UpdateSecurityQuestionPageRoutingModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](UpdateSecurityQuestionPageModule, {
    declarations: [_update_security_question_page__WEBPACK_IMPORTED_MODULE_1__.UpdateSecurityQuestionPage],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__.TranslateModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.ReactiveFormsModule, _update_security_question_routing_module__WEBPACK_IMPORTED_MODULE_0__.UpdateSecurityQuestionPageRoutingModule]
  });
})();

/***/ }),

/***/ 60123:
/*!*********************************************************************************!*\
  !*** ./src/app/pages/update-security-question/update-security-question.page.ts ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UpdateSecurityQuestionPage": () => (/* binding */ UpdateSecurityQuestionPage)
/* harmony export */ });
/* harmony import */ var http_status_codes__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! http-status-codes */ 92788);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var src_providers_utils_utils_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/providers/utils/utils.service */ 30423);
/* harmony import */ var src_providers_utils_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/providers/utils/config */ 43485);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var src_providers_auth_handler_auth_handler__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/providers/auth-handler/auth-handler */ 38590);
/* harmony import */ var src_providers_json_store_json_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/providers/json-store/json-store */ 15342);
/* harmony import */ var src_providers_logger_service_logger_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/providers/logger-service/logger-service */ 9999);
/* harmony import */ var _login_loginService__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../login/loginService */ 61390);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ngx-translate/core */ 38699);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var src_app_services_translate_config_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/translate-config.service */ 45340);
/* harmony import */ var _sign_up_securityQuestionsService__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../sign-up/securityQuestionsService */ 71959);
/* harmony import */ var _updateSecurityQuestionService__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./updateSecurityQuestionService */ 96251);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/common */ 94666);

















function UpdateSecurityQuestionPage_section_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "section", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](1, "ion-spinner", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
}
const _c0 = function (a0, a1) {
  return {
    "sucess": a0,
    "fail": a1
  };
};
function UpdateSecurityQuestionPage_section_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "section", 12)(1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction2"](2, _c0, ctx_r1.isSuccess, !ctx_r1.isSuccess));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](ctx_r1.errorMsg);
  }
}
function UpdateSecurityQuestionPage_section_10_button_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "button", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function UpdateSecurityQuestionPage_section_10_button_3_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r6);
      const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r5.tryAgain());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](2, 1, "generic_msgs.try_again"));
  }
}
function UpdateSecurityQuestionPage_section_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "section", 13)(1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](3, UpdateSecurityQuestionPage_section_10_button_3_Template, 3, 3, "button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](ctx_r2.errorMsg);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r2.canTryAgain);
  }
}
function UpdateSecurityQuestionPage_div_11_ion_select_option_21_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "ion-select-option", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const question_r10 = ctx.$implicit;
    const i_r11 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("value", question_r10.type)("selected", i_r11 === 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](question_r10.question);
  }
}
function UpdateSecurityQuestionPage_div_11_div_30_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 31)(1, "span", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](3, 1, "update_security_ques.err_new_security_ques"));
  }
}
function UpdateSecurityQuestionPage_div_11_div_31_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 31)(1, "span", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](3, 1, "update_security_ques.err_securityLength_req"));
  }
}
function UpdateSecurityQuestionPage_div_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 16)(1, "form", 17)(2, "p", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](5, "ion-item", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](6, "ion-input", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](7, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](8, "p", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](10, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](11, "ion-item", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](12, "ion-input", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](13, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](14, "p", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](16, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](17, "span", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](18, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](19, "ion-item", 19)(20, "ion-select", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](21, UpdateSecurityQuestionPage_div_11_ion_select_option_21_Template, 2, 3, "ion-select-option", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](22, "p", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](23);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](24, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](25, "span", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](26, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](27, "ion-item", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](28, "ion-input", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](29, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](30, UpdateSecurityQuestionPage_div_11_div_30_Template, 4, 3, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](31, UpdateSecurityQuestionPage_div_11_div_31_Template, 4, 3, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](32, "ion-row", 28)(33, "ion-col")(34, "ion-button", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function UpdateSecurityQuestionPage_div_11_Template_ion_button_click_34_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r13);
      const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r12.updateSecurityQuestion());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](35);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](36, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()()();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("formGroup", ctx_r3.updateSecurityQuestionForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](4, 14, "update_security_ques.old_security_ques"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](7, 16, "update_security_ques.old_security_ques"));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](10, 18, "update_security_ques.old_security_ans"));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](13, 20, "update_security_ques.old_security_ans"));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("value", ctx_r3.Cricket);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](16, 22, "update_security_ques.new_security_ques"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngForOf", ctx_r3.questions);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](24, 24, "update_security_ques.new_security_ans"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](29, 26, "update_security_ques.new_security_ans_plc"));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r3.updateSecurityQuestionForm.get("newSecurityAnswer").hasError("required") && ctx_r3.updateSecurityQuestionForm.get("newSecurityAnswer").touched);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r3.updateSecurityQuestionForm.get("newSecurityAnswer").hasError("minlength") && ctx_r3.updateSecurityQuestionForm.get("newSecurityAnswer").touched);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("disabled", !ctx_r3.updateSecurityQuestionForm.valid);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](36, 28, "update_security_ques.reset"));
  }
}
class UpdateSecurityQuestionPage {
  constructor(utils, config, alertCtrl, authHandler, jsonStore, logger, loginService, popOverCtrl, translate, router, translateConfigService, getSecurityQuestionsListService, updateSecurityQuestionService) {
    this.utils = utils;
    this.config = config;
    this.alertCtrl = alertCtrl;
    this.authHandler = authHandler;
    this.jsonStore = jsonStore;
    this.logger = logger;
    this.loginService = loginService;
    this.popOverCtrl = popOverCtrl;
    this.translate = translate;
    this.router = router;
    this.translateConfigService = translateConfigService;
    this.getSecurityQuestionsListService = getSecurityQuestionsListService;
    this.updateSecurityQuestionService = updateSecurityQuestionService;
    this.isShowingLoader = false;
    this.questions = [];
    this.canTryAgain = false;
    this.isSuccess = false;
    this.selectedLanguage = this.translateConfigService.getDefaultLanguage();
    this.translateConfigService.setLanguage('en');
  }
  ngOnInit() {
    this.getSecurityQuestions();
    this.updateSecurityQuestionForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormGroup({
      oldSecurityQuestion: new _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormControl({
        value: '',
        disabled: true
      }),
      oldSecurityAnswer: new _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormControl({
        value: '',
        disabled: true
      }),
      newSecurityQuestion: new _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required]),
      newSecurityAnswer: new _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.minLength(1)])
    });
  }
  updateSecurityQuestion() {
    if (this.updateSecurityQuestionForm.valid) {
      this.logger.trace("POST USER Security Question Update--start");
      this.utils.showProgressLoader();
      let newSecurityQuestion = this.updateSecurityQuestionForm.controls.newSecurityQuestion.value;
      let newSecurityAnswer = this.updateSecurityQuestionForm.controls.newSecurityAnswer.value;
      if (this.utils.isDeviceOnLine()) {
        this.updateSecurityQuestionService.updateUserSecurityQuestion(newSecurityQuestion, newSecurityAnswer).then(res => {
          try {
            this.utils.dissmisProgressLoader();
            if (res['responseJSON'] && res['responseJSON']['statusCode'] == http_status_codes__WEBPACK_IMPORTED_MODULE_11__.OK) {
              this.errorMsg = res['responseJSON']['userMessage'];
              this.isSuccess = true;
              this.showDialog("", this.errorMsg);
            } else if (res['responseJSON'] && res['responseJSON']['statusCode'] == http_status_codes__WEBPACK_IMPORTED_MODULE_11__.ACCEPTED) {
              this.errorMsg = res['responseJSON']['userMessage'];
              this.showDialog("", this.errorMsg);
            } else {
              this.logger.error("POST USER Security Question Update : " + JSON.stringify(res));
              this.errorMsg = this.translate.instant('generic_msgs.server_err');
              this.isSuccess = false;
            }
          } catch (e) {
            this.utils.dissmisProgressLoader();
            this.isSuccess = false;
            this.logger.error("POST USER Security Question Update : " + JSON.stringify(e));
            this.errorMsg = this.translate.instant('generic_msgs.server_err');
          }
        }, err => {
          this.utils.dissmisProgressLoader();
          this.isSuccess = false;
          this.logger.error("POST USER Security Question Update : " + JSON.stringify(err));
          this.errorMsg = this.utils.handleServiceException(err);
        });
      } else {
        this.isShowingLoader = false;
        this.isSuccess = false;
        this.errorMsg = this.translate.instant('generic_msgs.network_err');
      }
    }
  }
  /* service call to get security questions drop down */
  getSecurityQuestions() {
    if (!(this.questions.length > 0)) {
      if (this.utils.isDeviceOnLine()) {
        this.isShowingLoader = true;
        this.logger.trace("Security Questions--get security questions list--start");
        this.getSecurityQuestionsListService.getSecurityQuestions().then(result => {
          try {
            this.isShowingLoader = false;
            if (result['responseJSON'] && result['responseJSON']['statusCode'] == http_status_codes__WEBPACK_IMPORTED_MODULE_11__.OK) {
              this.isGetSecurityQuestionsListServiceSuccess = true;
              this.questions = result['responseJSON']['array'];
              this.updateSecurityQuestionForm.controls['newSecurityQuestion'].setValue(this.questions[0]['Type'], {
                onlySelf: true
              });
              this.getUserOptedSecurityQuestion();
              if (!(this.questions.length > 0)) {
                this.canTryAgain = true;
                this.isGetSecurityQuestionsListServiceSuccess = false;
                this.errorMsg = this.translate.instant('update_security_ques.err_security_question');
                this.logger.error("No Security Questions Found: Security Questions--Get Security Questions List " + JSON.stringify(result));
              }
            } else {
              this.canTryAgain = true;
              this.isGetSecurityQuestionsListServiceSuccess = false;
              this.errorMsg = this.translate.instant('generic_msgs.server_err');
              this.logger.error("error occured: Security Questions--Get Security Questions List " + JSON.stringify(result));
            }
          } catch (e) {
            this.isShowingLoader = false;
            this.canTryAgain = true;
            this.isGetSecurityQuestionsListServiceSuccess = false;
            this.logger.error("error occured: Security Questions--Get Security Questions List: " + JSON.stringify(e));
            this.errorMsg = this.translate.instant('generic_msgs.server_err');
          }
        }, err => {
          this.canTryAgain = true;
          this.isShowingLoader = false;
          this.isGetSecurityQuestionsListServiceSuccess = false;
          this.logger.error("error occured: Security Questions--Get Security Questions List : " + JSON.stringify(err));
          this.errorMsg = this.utils.handleServiceException(err);
        });
      } else {
        this.isShowingLoader = false;
        this.canTryAgain = true;
        this.isGetSecurityQuestionsListServiceSuccess = true;
        this.errorMsg = this.translate.instant('generic_msgs.network_err');
      }
    }
  }
  getUserOptedSecurityQuestion() {
    if (this.utils.isDeviceOnLine()) {
      this.isShowingLoader = true;
      this.logger.trace("Security Questions--getUserOptedSecurityQuestion--start");
      this.updateSecurityQuestionService.getUserSecurityQuestion().then(result => {
        try {
          this.isShowingLoader = false;
          if (result['responseJSON'] && result['responseJSON']['statusCode'] == http_status_codes__WEBPACK_IMPORTED_MODULE_11__.OK) {
            this.isGetUsrOptdSecurityQuestionServiceSuccess = true;
            this.updateSecurityQuestionForm.controls['oldSecurityQuestion'].setValue(result['responseJSON']['question']);
            this.updateSecurityQuestionForm.controls.oldSecurityAnswer.setValue(result['responseJSON']['answer']);
          } else {
            this.canTryAgain = true;
            this.isGetUsrOptdSecurityQuestionServiceSuccess = false;
            this.errorMsg = this.translate.instant('generic_msgs.server_err');
            this.logger.error("error occured: Security Questions--getUserOptedSecurityQuestion " + JSON.stringify(result));
          }
        } catch (e) {
          this.isShowingLoader = false;
          this.canTryAgain = true;
          this.isGetUsrOptdSecurityQuestionServiceSuccess = false;
          this.logger.error("Security Questions--getUserOptedSecurityQuestion  catch eror : " + JSON.stringify(e));
          this.errorMsg = this.translate.instant('generic_msgs.server_err');
        }
      }, err => {
        this.isShowingLoader = false;
        this.canTryAgain = true;
        this.isGetUsrOptdSecurityQuestionServiceSuccess = false;
        this.logger.error("Security Questions--getUserOptedSecurityQuestion  catch eror : " + JSON.stringify(err));
        this.errorMsg = this.utils.handleServiceException(err);
      });
    } else {
      this.isShowingLoader = false;
      this.canTryAgain = true;
      this.isGetUsrOptdSecurityQuestionServiceSuccess = false;
      this.errorMsg = this.translate.instant('generic_msgs.network_err');
    }
  }
  /** this metho will call when user clicks on tryAgain button
   * scenario : when getScurityQuestionsList or getUserOptdSecurityQuestion services failed
   */
  tryAgain() {
    if (this.isGetSecurityQuestionsListServiceSuccess && !this.isGetUsrOptdSecurityQuestionServiceSuccess) {
      this.getSecurityQuestions();
    } else if (!this.isGetSecurityQuestionsListServiceSuccess && this.isGetUsrOptdSecurityQuestionServiceSuccess) {
      this.getUserOptedSecurityQuestion();
    } else {
      this.getSecurityQuestions();
      this.getUserOptedSecurityQuestion();
    }
  }
  showDialog(title, message) {
    let buttons = [{
      text: 'Ok',
      handler: () => {
        //this.navCtrl.pop();
      }
    }];
    const alert = this.alertCtrl.create({
      header: title,
      message: message,
      buttons: buttons
    }).then(alert => alert.present());
  }
}
UpdateSecurityQuestionPage.ɵfac = function UpdateSecurityQuestionPage_Factory(t) {
  return new (t || UpdateSecurityQuestionPage)(_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](src_providers_utils_utils_service__WEBPACK_IMPORTED_MODULE_0__.UtilService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](src_providers_utils_config__WEBPACK_IMPORTED_MODULE_1__.ConfigProvider), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_12__.AlertController), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](src_providers_auth_handler_auth_handler__WEBPACK_IMPORTED_MODULE_2__.AuthHandlerProvider), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](src_providers_json_store_json_store__WEBPACK_IMPORTED_MODULE_3__.JsonStoreProvider), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](src_providers_logger_service_logger_service__WEBPACK_IMPORTED_MODULE_4__.LoggerServiceProvider), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_login_loginService__WEBPACK_IMPORTED_MODULE_5__.LoginService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_12__.PopoverController), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__.TranslateService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_14__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](src_app_services_translate_config_service__WEBPACK_IMPORTED_MODULE_6__.TranslateConfigService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_sign_up_securityQuestionsService__WEBPACK_IMPORTED_MODULE_7__.SecurityQuestionsService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_updateSecurityQuestionService__WEBPACK_IMPORTED_MODULE_8__.UpdateSecurityQuestionService));
};
UpdateSecurityQuestionPage.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineComponent"]({
  type: UpdateSecurityQuestionPage,
  selectors: [["app-update-security-question"]],
  decls: 12,
  vars: 7,
  consts: [["mode", "ios"], ["color", "primary", 1, "toolbar"], ["slot", "start"], ["text", "", "icon", "chevron-back-outline", 2, "padding-left", "15px", "font-size", "0.7rem"], [1, "bold-font"], ["no-bounce", "", 1, "app_bg1", "text_color_base", "ion-padding"], ["class", "spinnersection ion-text-center", 4, "ngIf"], [3, "ngClass", 4, "ngIf"], ["class", "errorMsgSection", 4, "ngIf"], ["class", "white_container_border_radius", 4, "ngIf"], [1, "spinnersection", "ion-text-center"], ["name", "lines-sharp-small", 2, "height", "98%"], [3, "ngClass"], [1, "errorMsgSection"], [3, "click", 4, "ngIf"], [3, "click"], [1, "white_container_border_radius"], ["margin", "", 3, "formGroup"], ["position", "stacked", 2, "padding-top", "10px"], ["lines", "none", 1, "border"], ["disabled", "true", "formControlName", "oldSecurityQuestion", 3, "placeholder"], ["position", "stacked"], ["disabled", "true", "formControlName", "oldSecurityAnswer", 3, "placeholder", "value"], [1, "mandatory_star"], ["interface", "popover", "mode", "md", "formControlName", "newSecurityQuestion"], [3, "value", "selected", 4, "ngFor", "ngForOf"], ["restrict-input", "", "restrictInput", "alphanumericwithspace", "amaxlength", "50", "formControlName", "newSecurityAnswer", 3, "placeholder"], ["class", "errPosition", 4, "ngIf"], ["text-center", "", "align-items-center", ""], [1, "btn_center", 3, "disabled", "click"], [3, "value", "selected"], [1, "errPosition"]],
  template: function UpdateSecurityQuestionPage_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "ion-header", 0)(1, "ion-toolbar", 1)(2, "ion-buttons", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](3, "ion-back-button", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](4, "ion-title", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](6, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](7, "ion-content", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](8, UpdateSecurityQuestionPage_section_8_Template, 2, 0, "section", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](9, UpdateSecurityQuestionPage_section_9_Template, 3, 5, "section", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](10, UpdateSecurityQuestionPage_section_10_Template, 4, 2, "section", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](11, UpdateSecurityQuestionPage_div_11_Template, 37, 30, "div", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](6, 5, "update_security_ques.title"), " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx.isShowingLoader);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx.errorMsg && !ctx.canTryAgain && !ctx.isShowingLoader);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx.canTryAgain && !ctx.isShowingLoader);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", !ctx.canTryAgain && !ctx.isShowingLoader);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_15__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_15__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_15__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.NgControlStatusGroup, _ionic_angular__WEBPACK_IMPORTED_MODULE_12__.IonBackButton, _ionic_angular__WEBPACK_IMPORTED_MODULE_12__.IonButton, _ionic_angular__WEBPACK_IMPORTED_MODULE_12__.IonButtons, _ionic_angular__WEBPACK_IMPORTED_MODULE_12__.IonCol, _ionic_angular__WEBPACK_IMPORTED_MODULE_12__.IonContent, _ionic_angular__WEBPACK_IMPORTED_MODULE_12__.IonHeader, _ionic_angular__WEBPACK_IMPORTED_MODULE_12__.IonInput, _ionic_angular__WEBPACK_IMPORTED_MODULE_12__.IonItem, _ionic_angular__WEBPACK_IMPORTED_MODULE_12__.IonRow, _ionic_angular__WEBPACK_IMPORTED_MODULE_12__.IonSelect, _ionic_angular__WEBPACK_IMPORTED_MODULE_12__.IonSelectOption, _ionic_angular__WEBPACK_IMPORTED_MODULE_12__.IonSpinner, _ionic_angular__WEBPACK_IMPORTED_MODULE_12__.IonTitle, _ionic_angular__WEBPACK_IMPORTED_MODULE_12__.IonToolbar, _ionic_angular__WEBPACK_IMPORTED_MODULE_12__.SelectValueAccessor, _ionic_angular__WEBPACK_IMPORTED_MODULE_12__.TextValueAccessor, _ionic_angular__WEBPACK_IMPORTED_MODULE_12__.IonBackButtonDelegate, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormControlName, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__.TranslatePipe],
  styles: [".app_bg1[_ngcontent-%COMP%] {\n  --background: url('register_bg.jpg') no-repeat center center / cover;\n  background-size: cover;\n  background-repeat: no-repeat;\n  height: 100%;\n  background-position: bottom;\n}\n\n.white_container_border_radius[_ngcontent-%COMP%] {\n  background-color: rgba(255, 255, 255, 0.7) !important;\n  border-radius: 15px !important;\n}\n\n.spinnersection[_ngcontent-%COMP%] {\n  display: block;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  font-size: 1.3rem;\n  height: 98%;\n}\n\n.errorMsgSection[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  height: 98%;\n  font-size: 0.8rem;\n  color: #494747 !important;\n  padding: 0px 15px;\n}\n\n.mandatory_star[_ngcontent-%COMP%] {\n  color: #f00;\n}\n\n.btn_center[_ngcontent-%COMP%] {\n  text-transform: capitalize;\n  --background: #002d3d !important;\n  color: white;\n  margin-top: 15px;\n  --border-radius: 10px;\n  min-height: 40px;\n  width: 100% !important;\n  font-family: Agenda-Regular !important;\n}\n\n.item[_ngcontent-%COMP%] {\n  padding-left: 0px;\n  background: transparent;\n}\n\n.item[_ngcontent-%COMP%]   .item-input.ng-valid.item-input-has-value[_ngcontent-%COMP%]:not(.input-has-focus):not(.item-input-has-focus)   .item-inner[_ngcontent-%COMP%], .item.item-input.ng-valid.input-has-value[_ngcontent-%COMP%]:not(.input-has-focus):not(.item-input-has-focus)   .item-inner[_ngcontent-%COMP%] {\n  border-bottom-color: none !important;\n  box-shadow: none !important;\n}\n\n.item-inner[_ngcontent-%COMP%] {\n  padding-right: 0px !important;\n  border-bottom: none !important;\n}\n\n.input[_ngcontent-%COMP%] {\n  border: 1px solid #eee;\n  padding: 3px 15px;\n  background: white;\n  font-size: 1.4rem;\n}\n\n.label[_ngcontent-%COMP%] {\n  margin-bottom: 5px !important;\n  font-size: 1.8rem !important;\n  color: #002d3d !important;\n  font-weight: 400;\n}\n\np[_ngcontent-%COMP%] {\n  font-size: 1.2rem !important;\n  margin: 10px 0px 5px 0px;\n}\n\n.italic_font[_ngcontent-%COMP%] {\n  font-style: italic;\n  margin: 7px 0px;\n}\n\n.mandatory_star[_ngcontent-%COMP%] {\n  color: #f00;\n}\n\n.sucess[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: #002d3d !important;\n}\n\n.fail[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: #f00 !important;\n}\n\n.sucess[_ngcontent-%COMP%] {\n  text-align: center !important;\n}\n\n.fail[_ngcontent-%COMP%] {\n  text-align: center !important;\n}\n\n.select[_ngcontent-%COMP%] {\n  --webkit-appearance: none;\n  --moz-appearance: none;\n  background: #ffffff url('arrow-down.png') no-repeat 95% center;\n  width: 100%;\n  text-indent: 0.01px;\n  text-overflow: \"\";\n  padding: 10px;\n  font-size: 1.6rem !important;\n  max-width: 100% !important;\n  color: #222 !important;\n  border: 1px solid #eee !important;\n  position: relative;\n  height: 42px;\n}\n\n.select-icon[_ngcontent-%COMP%] {\n  display: none;\n}\n\n.select-text[_ngcontent-%COMP%] {\n  padding-left: 15px;\n}\n\nform[_ngcontent-%COMP%] {\n  padding: 0px 15px !important;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcGFnZXMvdXBkYXRlLXNlY3VyaXR5LXF1ZXN0aW9uL3VwZGF0ZS1zZWN1cml0eS1xdWVzdGlvbi5wYWdlLnNjc3MiLCJ3ZWJwYWNrOi8vLi8uLi8uLi8uLi9BbGwlMjBQcm9qZWN0cy9NYWxheXNpYV9DbGllbnRBcHBfUmV2YW1wL1N1bkFjY2Vzc19Jb25pYzZfUmV2YW1wL3NyYy9hcHAvcGFnZXMvdXBkYXRlLXNlY3VyaXR5LXF1ZXN0aW9uL3VwZGF0ZS1zZWN1cml0eS1xdWVzdGlvbi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxvRUFBQTtFQUNBLHNCQUFBO0VBQ0EsNEJBQUE7RUFDQSxZQUFBO0VBQ0EsMkJBQUE7QUNDRjs7QURDQTtFQUNFLHFEQUFBO0VBQ0EsOEJBQUE7QUNFRjs7QURBQTtFQUNFLGNBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLFdBQUE7QUNHRjs7QUREQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSx5QkFBQTtFQUNBLGlCQUFBO0FDSUY7O0FEREE7RUFDRSxXQUFBO0FDSUY7O0FEREE7RUFDRSwwQkFBQTtFQUNBLGdDQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBRUEscUJBQUE7RUFDQSxnQkFBQTtFQUNBLHNCQUFBO0VBQ0Esc0NBQUE7QUNHRjs7QURBQTtFQUNFLGlCQUFBO0VBQ0EsdUJBQUE7QUNHRjs7QURBQTtFQUNFLG9DQUFBO0VBRUEsMkJBQUE7QUNHRjs7QURDQTtFQUNDLDZCQUFBO0VBQ0EsOEJBQUE7QUNFRDs7QURDQTtFQUNFLHNCQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0FDRUY7O0FEQ0E7RUFDQSw2QkFBQTtFQUNBLDRCQUFBO0VBQ0EseUJBQUE7RUFDQSxnQkFBQTtBQ0VBOztBREFBO0VBQ0UsNEJBQUE7RUFDQSx3QkFBQTtBQ0dGOztBREFBO0VBQ0Msa0JBQUE7RUFDQSxlQUFBO0FDR0Q7O0FEREE7RUFDRSxXQUFBO0FDSUY7O0FEREE7RUFDQyx5QkFBQTtBQ0lEOztBREZBO0VBQ0Esc0JBQUE7QUNLQTs7QURIQTtFQUNFLDZCQUFBO0FDTUY7O0FESkE7RUFDQSw2QkFBQTtBQ09BOztBREpBO0VBQ0UseUJBQUE7RUFDQSxzQkFBQTtFQUNBLDhEQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxhQUFBO0VBQ0EsNEJBQUE7RUFDQSwwQkFBQTtFQUNBLHNCQUFBO0VBQ0EsaUNBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7QUNPRjs7QURKQTtFQUNFLGFBQUE7QUNPRjs7QURKQTtFQUNFLGtCQUFBO0FDT0Y7O0FETEE7RUFDRSw0QkFBQTtBQ1FGIiwic291cmNlc0NvbnRlbnQiOlsiLmFwcF9iZzF7XHJcbiAgLS1iYWNrZ3JvdW5kOiB1cmwoLi4vLi4vLi4vYXNzZXRzL2ltZ3MvcmVnaXN0ZXJfYmcuanBnKSBuby1yZXBlYXQgY2VudGVyIGNlbnRlciAvIGNvdmVyO1xyXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogYm90dG9tO1xyXG59XHJcbi53aGl0ZV9jb250YWluZXJfYm9yZGVyX3JhZGl1cyB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjcpICFpbXBvcnRhbnQ7XHJcbiAgYm9yZGVyLXJhZGl1czogMTVweCAhaW1wb3J0YW50O1xyXG59XHJcbi5zcGlubmVyc2VjdGlvbiB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGZvbnQtc2l6ZTogMS4zcmVtO1xyXG4gIGhlaWdodDogOTglO1xyXG59XHJcbi5lcnJvck1zZ1NlY3Rpb24ge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGhlaWdodDogOTglO1xyXG4gIGZvbnQtc2l6ZTogMC44cmVtO1xyXG4gIGNvbG9yOiAjNDk0NzQ3ICFpbXBvcnRhbnQ7XHJcbiAgcGFkZGluZzogMHB4IDE1cHg7XHJcbn1cclxuXHJcbi5tYW5kYXRvcnlfc3RhciB7XHJcbiAgY29sb3I6ICNmMDA7XHJcbn1cclxuXHJcbi5idG5fY2VudGVyIHtcclxuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcclxuICAtLWJhY2tncm91bmQ6ICMwMDJkM2QgIWltcG9ydGFudDtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgbWFyZ2luLXRvcDogMTVweDtcclxuICAvL2ZvbnQtc2l6ZTogMS43cmVtO1xyXG4gIC0tYm9yZGVyLXJhZGl1czogMTBweDtcclxuICBtaW4taGVpZ2h0OiA0MHB4O1xyXG4gIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XHJcbiAgZm9udC1mYW1pbHk6IEFnZW5kYS1SZWd1bGFyICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5pdGVte1xyXG4gIHBhZGRpbmctbGVmdDogMHB4O1xyXG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG59XHJcblxyXG4uaXRlbSAuaXRlbS1pbnB1dC5uZy12YWxpZC5pdGVtLWlucHV0LWhhcy12YWx1ZTpub3QoLmlucHV0LWhhcy1mb2N1cyk6bm90KC5pdGVtLWlucHV0LWhhcy1mb2N1cykgLml0ZW0taW5uZXIsIC5pdGVtLml0ZW0taW5wdXQubmctdmFsaWQuaW5wdXQtaGFzLXZhbHVlOm5vdCguaW5wdXQtaGFzLWZvY3VzKTpub3QoLml0ZW0taW5wdXQtaGFzLWZvY3VzKSAuaXRlbS1pbm5lcntcclxuICBib3JkZXItYm90dG9tLWNvbG9yOiBub25lICFpbXBvcnRhbnQ7XHJcbiAgLXdlYmtpdC1ib3gtc2hhZG93IDogbm9uZSAhaW1wb3J0YW50O1xyXG4gIGJveC1zaGFkb3cgOiBub25lICFpbXBvcnRhbnQ7XHJcblxyXG59XHJcblxyXG4uaXRlbS1pbm5lcntcclxuIHBhZGRpbmctcmlnaHQ6IDBweCAhaW1wb3J0YW50O1xyXG4gYm9yZGVyLWJvdHRvbTogbm9uZSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uaW5wdXR7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI2VlZTtcclxuICBwYWRkaW5nOiAzcHggMTVweDtcclxuICBiYWNrZ3JvdW5kOndoaXRlO1xyXG4gIGZvbnQtc2l6ZTogMS40cmVtO1xyXG59XHJcblxyXG4ubGFiZWx7XHJcbm1hcmdpbi1ib3R0b206NXB4ICFpbXBvcnRhbnQ7XHJcbmZvbnQtc2l6ZTogMS44cmVtICFpbXBvcnRhbnQ7XHJcbmNvbG9yOiMwMDJkM2QhaW1wb3J0YW50O1xyXG5mb250LXdlaWdodDogNDAwO1xyXG59XHJcbnB7XHJcbiAgZm9udC1zaXplOiAgMS4ycmVtICFpbXBvcnRhbnQ7XHJcbiAgbWFyZ2luOiAxMHB4IDBweCA1cHggMHB4O1xyXG4gfVxyXG5cclxuLml0YWxpY19mb250e1xyXG4gZm9udC1zdHlsZTogaXRhbGljO1xyXG4gbWFyZ2luOiA3cHggMHB4O1xyXG59XHJcbi5tYW5kYXRvcnlfc3RhcntcclxuICBjb2xvcjogI2YwMDtcclxufVxyXG5cclxuLnN1Y2VzcyBzcGFue1xyXG4gY29sb3IgOiAgIzAwMmQzZCAhaW1wb3J0YW50O1xyXG59XHJcbi5mYWlsIHNwYW57XHJcbmNvbG9yIDogI2YwMCAhaW1wb3J0YW50O1xyXG59XHJcbi5zdWNlc3N7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyICFpbXBvcnRhbnQ7XHJcbn1cclxuLmZhaWx7XHJcbnRleHQtYWxpZ246IGNlbnRlciAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uc2VsZWN0IHtcclxuICAtLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xyXG4gIC0tbW96LWFwcGVhcmFuY2U6IG5vbmU7XHJcbiAgYmFja2dyb3VuZDogI2ZmZmZmZiB1cmwoLi4vLi4vLi4vYXNzZXRzL2ltZ3MvYXJyb3ctZG93bi5wbmcpIG5vLXJlcGVhdCA5NSUgY2VudGVyO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHRleHQtaW5kZW50OiAwLjAxcHg7XHJcbiAgdGV4dC1vdmVyZmxvdzogXCJcIjtcclxuICBwYWRkaW5nOiAxMHB4O1xyXG4gIGZvbnQtc2l6ZTogIDEuNnJlbSAhaW1wb3J0YW50O1xyXG4gIG1heC13aWR0aDogMTAwJSAhaW1wb3J0YW50O1xyXG4gIGNvbG9yOiMyMjIgIWltcG9ydGFudDtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjZWVlICFpbXBvcnRhbnQ7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGhlaWdodDogNDJweDtcclxufVxyXG5cclxuLnNlbGVjdC1pY29uIHtcclxuICBkaXNwbGF5OiBub25lO1xyXG59XHJcblxyXG4uc2VsZWN0LXRleHR7XHJcbiAgcGFkZGluZy1sZWZ0OiAxNXB4O1xyXG59XHJcbmZvcm0ge1xyXG4gIHBhZGRpbmc6IDBweCAxNXB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbiIsIi5hcHBfYmcxIHtcbiAgLS1iYWNrZ3JvdW5kOiB1cmwoLi4vLi4vLi4vYXNzZXRzL2ltZ3MvcmVnaXN0ZXJfYmcuanBnKSBuby1yZXBlYXQgY2VudGVyIGNlbnRlciAvIGNvdmVyO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGJvdHRvbTtcbn1cblxuLndoaXRlX2NvbnRhaW5lcl9ib3JkZXJfcmFkaXVzIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjcpICFpbXBvcnRhbnQ7XG4gIGJvcmRlci1yYWRpdXM6IDE1cHggIWltcG9ydGFudDtcbn1cblxuLnNwaW5uZXJzZWN0aW9uIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBmb250LXNpemU6IDEuM3JlbTtcbiAgaGVpZ2h0OiA5OCU7XG59XG5cbi5lcnJvck1zZ1NlY3Rpb24ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgaGVpZ2h0OiA5OCU7XG4gIGZvbnQtc2l6ZTogMC44cmVtO1xuICBjb2xvcjogIzQ5NDc0NyAhaW1wb3J0YW50O1xuICBwYWRkaW5nOiAwcHggMTVweDtcbn1cblxuLm1hbmRhdG9yeV9zdGFyIHtcbiAgY29sb3I6ICNmMDA7XG59XG5cbi5idG5fY2VudGVyIHtcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG4gIC0tYmFja2dyb3VuZDogIzAwMmQzZCAhaW1wb3J0YW50O1xuICBjb2xvcjogd2hpdGU7XG4gIG1hcmdpbi10b3A6IDE1cHg7XG4gIC0tYm9yZGVyLXJhZGl1czogMTBweDtcbiAgbWluLWhlaWdodDogNDBweDtcbiAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcbiAgZm9udC1mYW1pbHk6IEFnZW5kYS1SZWd1bGFyICFpbXBvcnRhbnQ7XG59XG5cbi5pdGVtIHtcbiAgcGFkZGluZy1sZWZ0OiAwcHg7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xufVxuXG4uaXRlbSAuaXRlbS1pbnB1dC5uZy12YWxpZC5pdGVtLWlucHV0LWhhcy12YWx1ZTpub3QoLmlucHV0LWhhcy1mb2N1cyk6bm90KC5pdGVtLWlucHV0LWhhcy1mb2N1cykgLml0ZW0taW5uZXIsIC5pdGVtLml0ZW0taW5wdXQubmctdmFsaWQuaW5wdXQtaGFzLXZhbHVlOm5vdCguaW5wdXQtaGFzLWZvY3VzKTpub3QoLml0ZW0taW5wdXQtaGFzLWZvY3VzKSAuaXRlbS1pbm5lciB7XG4gIGJvcmRlci1ib3R0b20tY29sb3I6IG5vbmUgIWltcG9ydGFudDtcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7XG4gIGJveC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudDtcbn1cblxuLml0ZW0taW5uZXIge1xuICBwYWRkaW5nLXJpZ2h0OiAwcHggIWltcG9ydGFudDtcbiAgYm9yZGVyLWJvdHRvbTogbm9uZSAhaW1wb3J0YW50O1xufVxuXG4uaW5wdXQge1xuICBib3JkZXI6IDFweCBzb2xpZCAjZWVlO1xuICBwYWRkaW5nOiAzcHggMTVweDtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIGZvbnQtc2l6ZTogMS40cmVtO1xufVxuXG4ubGFiZWwge1xuICBtYXJnaW4tYm90dG9tOiA1cHggIWltcG9ydGFudDtcbiAgZm9udC1zaXplOiAxLjhyZW0gIWltcG9ydGFudDtcbiAgY29sb3I6ICMwMDJkM2QgIWltcG9ydGFudDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbn1cblxucCB7XG4gIGZvbnQtc2l6ZTogMS4ycmVtICFpbXBvcnRhbnQ7XG4gIG1hcmdpbjogMTBweCAwcHggNXB4IDBweDtcbn1cblxuLml0YWxpY19mb250IHtcbiAgZm9udC1zdHlsZTogaXRhbGljO1xuICBtYXJnaW46IDdweCAwcHg7XG59XG5cbi5tYW5kYXRvcnlfc3RhciB7XG4gIGNvbG9yOiAjZjAwO1xufVxuXG4uc3VjZXNzIHNwYW4ge1xuICBjb2xvcjogIzAwMmQzZCAhaW1wb3J0YW50O1xufVxuXG4uZmFpbCBzcGFuIHtcbiAgY29sb3I6ICNmMDAgIWltcG9ydGFudDtcbn1cblxuLnN1Y2VzcyB7XG4gIHRleHQtYWxpZ246IGNlbnRlciAhaW1wb3J0YW50O1xufVxuXG4uZmFpbCB7XG4gIHRleHQtYWxpZ246IGNlbnRlciAhaW1wb3J0YW50O1xufVxuXG4uc2VsZWN0IHtcbiAgLS13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcbiAgLS1tb3otYXBwZWFyYW5jZTogbm9uZTtcbiAgYmFja2dyb3VuZDogI2ZmZmZmZiB1cmwoLi4vLi4vLi4vYXNzZXRzL2ltZ3MvYXJyb3ctZG93bi5wbmcpIG5vLXJlcGVhdCA5NSUgY2VudGVyO1xuICB3aWR0aDogMTAwJTtcbiAgdGV4dC1pbmRlbnQ6IDAuMDFweDtcbiAgdGV4dC1vdmVyZmxvdzogXCJcIjtcbiAgcGFkZGluZzogMTBweDtcbiAgZm9udC1zaXplOiAxLjZyZW0gIWltcG9ydGFudDtcbiAgbWF4LXdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiAjMjIyICFpbXBvcnRhbnQ7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNlZWUgIWltcG9ydGFudDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBoZWlnaHQ6IDQycHg7XG59XG5cbi5zZWxlY3QtaWNvbiB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbi5zZWxlY3QtdGV4dCB7XG4gIHBhZGRpbmctbGVmdDogMTVweDtcbn1cblxuZm9ybSB7XG4gIHBhZGRpbmc6IDBweCAxNXB4ICFpbXBvcnRhbnQ7XG59Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ })

}]);
//# sourceMappingURL=src_app_pages_update-security-question_update-security-question_module_ts.js.map