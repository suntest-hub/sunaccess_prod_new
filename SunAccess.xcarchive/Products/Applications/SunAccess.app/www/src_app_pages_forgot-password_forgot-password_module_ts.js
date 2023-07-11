"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_forgot-password_forgot-password_module_ts"],{

/***/ 6177:
/*!*************************************************************************!*\
  !*** ./src/app/pages/forgot-password/forgot-password-routing.module.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ForgotPasswordPageRoutingModule": () => (/* binding */ ForgotPasswordPageRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _forgot_password_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./forgot-password.page */ 22032);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);




const routes = [{
  path: '',
  component: _forgot_password_page__WEBPACK_IMPORTED_MODULE_0__.ForgotPasswordPage
}];
class ForgotPasswordPageRoutingModule {}
ForgotPasswordPageRoutingModule.ɵfac = function ForgotPasswordPageRoutingModule_Factory(t) {
  return new (t || ForgotPasswordPageRoutingModule)();
};
ForgotPasswordPageRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
  type: ForgotPasswordPageRoutingModule
});
ForgotPasswordPageRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](ForgotPasswordPageRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
})();

/***/ }),

/***/ 65638:
/*!*****************************************************************!*\
  !*** ./src/app/pages/forgot-password/forgot-password.module.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ForgotPasswordPageModule": () => (/* binding */ ForgotPasswordPageModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ 38699);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _forgot_password_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./forgot-password-routing.module */ 6177);
/* harmony import */ var _forgot_password_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./forgot-password.page */ 22032);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);







class ForgotPasswordPageModule {}
ForgotPasswordPageModule.ɵfac = function ForgotPasswordPageModule_Factory(t) {
  return new (t || ForgotPasswordPageModule)();
};
ForgotPasswordPageModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
  type: ForgotPasswordPageModule
});
ForgotPasswordPageModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__.TranslateModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.ReactiveFormsModule, _forgot_password_routing_module__WEBPACK_IMPORTED_MODULE_0__.ForgotPasswordPageRoutingModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](ForgotPasswordPageModule, {
    declarations: [_forgot_password_page__WEBPACK_IMPORTED_MODULE_1__.ForgotPasswordPage],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__.TranslateModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.ReactiveFormsModule, _forgot_password_routing_module__WEBPACK_IMPORTED_MODULE_0__.ForgotPasswordPageRoutingModule]
  });
})();

/***/ }),

/***/ 22032:
/*!***************************************************************!*\
  !*** ./src/app/pages/forgot-password/forgot-password.page.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ForgotPasswordPage": () => (/* binding */ ForgotPasswordPage)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var src_app_app_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/app.component */ 55041);
/* harmony import */ var http_status_codes__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! http-status-codes */ 92788);
/* harmony import */ var src_providers_utils_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/providers/utils/config */ 43485);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/core */ 38699);
/* harmony import */ var src_providers_utils_utils_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/providers/utils/utils.service */ 30423);
/* harmony import */ var _checkUserExistenceService__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./checkUserExistenceService */ 32633);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _services_translate_config_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/translate-config.service */ 45340);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ 94666);














function ForgotPasswordPage_form_7_div_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 11)(1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](3, 1, "emailisrequired"));
  }
}
function ForgotPasswordPage_form_7_div_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 11)(1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](3, 1, "entervaidemail"));
  }
}
function ForgotPasswordPage_form_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "form", 6)(1, "ion-item", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](2, "ion-input", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](4, ForgotPasswordPage_form_7_div_4_Template, 4, 3, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](5, ForgotPasswordPage_form_7_div_5_Template, 4, 3, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "ion-button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ForgotPasswordPage_form_7_Template_ion_button_click_6_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r5);
      const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r4.emailCheck());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](8, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("formGroup", ctx_r0.forgotpaswordForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](3, 6, "forgot_pwd.enterloginid"));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r0.forgotpaswordForm.get("email").hasError("required") && ctx_r0.forgotpaswordForm.get("email").touched);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r0.forgotpaswordForm.get("email").hasError("pattern") && !ctx_r0.forgotpaswordForm.get("email").hasError("required"));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("disabled", !ctx_r0.forgotpaswordForm.valid);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](8, 8, "submit"), " ");
  }
}
function ForgotPasswordPage_section_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "section", 12)(1, "ion-button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ForgotPasswordPage_section_8_Template_ion_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r7);
      const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r6.navigateToPersonDetails());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "ion-button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ForgotPasswordPage_section_8_Template_ion_button_click_4_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r7);
      const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r8.navigateToSecretQuestion());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](6, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](3, 2, "enteryourpersonaldetails"));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](6, 4, "answertosecretquestion"));
  }
}
class ForgotPasswordPage {
  constructor(translate, utils, checkuserExistenceService, router, config, translateConfigService, menuControl, navCtrl) {
    this.translate = translate;
    this.utils = utils;
    this.checkuserExistenceService = checkuserExistenceService;
    this.router = router;
    this.config = config;
    this.translateConfigService = translateConfigService;
    this.menuControl = menuControl;
    this.navCtrl = navCtrl;
    this.navigateToPersonDetails = function () {
      this.router.navigate(['./reset-pwd-with-personal-details'], {
        state: {
          email: this.userIdFromfirstLogin,
          isSecret: false
        }
      });
      //this.navCtrl.push(ResetPwdWithPersonalDetailsPage,{"email":this.userIdFromfirstLogin,"isSecret":false});
    };

    this.navigateToSecretQuestion = function () {
      //this.navCtrl.push(ResetPwdWithPersonalDetailsPage,{"email":this.userIdFromfirstLogin,"isSecret":true});
      this.router.navigate(['./reset-pwd-with-personal-details'], {
        state: {
          email: this.userIdFromfirstLogin,
          isSecret: true
        }
      });
    };
    this.isValidUser = true;
    this.selectedLanguage = this.translateConfigService.getDefaultLanguage();
    this.translateConfigService.setLanguage('en');
    this.userIdFromfirstLogin = history.state.usernameId;
    //this.config.currentPage.pageName = "ForgotPasswordPage";
  }

  ngOnInit() {
    let EMAIL_PATTERN = src_providers_utils_config__WEBPACK_IMPORTED_MODULE_1__.ConfigProvider.EMAIL_PATTERN;
    this.forgotpaswordForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormGroup({
      email: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.pattern(EMAIL_PATTERN)])
    });
  }
  ionViewWillEnter() {
    this.menuControl.enable(true);
    this.utils.component.emit(src_app_app_component__WEBPACK_IMPORTED_MODULE_0__.MenuOptions.FORGOT_PASSWORD);
  }
  emailCheck() {
    if (this.forgotpaswordForm.valid) {
      if (this.utils.isDeviceOnLine()) {
        var username = this.forgotpaswordForm.controls.email.value;
        this.utils.showProgressLoader();
        this.checkuserExistenceService.CheckUserExistence(username).then(res => {
          try {
            this.utils.dissmisProgressLoader();
            this.isValidUser = true;
          } catch (e) {
            let errorMsg = this.translate.instant('generic_msgs.server_err');
            this.isValidUser = false;
            this.utils.showAlert("", errorMsg);
          }
        }, err => {
          this.utils.dissmisProgressLoader();
          if (err['responseJSON'] && err['responseJSON']['statusCode'] == http_status_codes__WEBPACK_IMPORTED_MODULE_7__.NOT_FOUND) {
            this.utils.showAlert("", this.translate.instant('forgot_pwd_page.invalid_username'));
          } else if (err['responseJSON'] && err['responseJSON']['statusCode'] == http_status_codes__WEBPACK_IMPORTED_MODULE_7__.BAD_REQUEST) {
            this.utils.showAlert("", this.translate.instant('forgot_pwd_page.err_missing_fields'));
          } else if (err['responseJSON'] && err['responseJSON']['statusCode'] == http_status_codes__WEBPACK_IMPORTED_MODULE_7__.UNAUTHORIZED) {
            //this.navCtrl.setRoot(LoginFirstPage, { animate: true, direction: 'forward' });
          } else if (err.errorCode = "REQUEST_TIMEOUT") {
            this.utils.showAlert("", err.errorMsg);
          } else {
            this.utils.showAlert("", this.translate.instant('generic_msgs.server_err'));
          }
        });
      } else {
        let errorMsg = this.translate.instant('generic_msgs.network_err');
        this.utils.showAlert("", errorMsg);
      }
    }
  }
}
ForgotPasswordPage.ɵfac = function ForgotPasswordPage_Factory(t) {
  return new (t || ForgotPasswordPage)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__.TranslateService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_providers_utils_utils_service__WEBPACK_IMPORTED_MODULE_2__.UtilService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_checkUserExistenceService__WEBPACK_IMPORTED_MODULE_3__.CheckUserExistenceService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_9__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_providers_utils_config__WEBPACK_IMPORTED_MODULE_1__.ConfigProvider), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_services_translate_config_service__WEBPACK_IMPORTED_MODULE_4__.TranslateConfigService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_10__.MenuController), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_10__.NavController));
};
ForgotPasswordPage.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
  type: ForgotPasswordPage,
  selectors: [["app-forgot-password"]],
  decls: 9,
  vars: 5,
  consts: [["mode", "ios"], ["color", "primary", 1, "toolbar"], ["slot", "start", "auto-hide", "false", "color", "secondary"], [1, "ion-padding", "ion-no-bounce", "text_color_base"], ["class", "white_container_border_radius ion-padding", 3, "formGroup", 4, "ngIf"], ["class", "white_container_border_radius ion-padding", 4, "ngIf"], [1, "white_container_border_radius", "ion-padding", 3, "formGroup"], ["lines", "none", 1, "border"], ["type", "email", "restrict-input", "", "restrictInput", "username", "formControlName", "email", 3, "placeholder"], ["class", "error", 4, "ngIf"], ["color", "secondary", "expand", "block", 3, "disabled", "click"], [1, "error"], [1, "white_container_border_radius", "ion-padding"], ["color", "secondary", "expand", "block", 2, "margin-bottom", "5px", 3, "click"], ["color", "secondary", "expand", "block", 2, "margin-top", "5px", 3, "click"]],
  template: function ForgotPasswordPage_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ion-header", 0)(1, "ion-toolbar", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](2, "ion-menu-button", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "ion-title");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](5, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "ion-content", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](7, ForgotPasswordPage_form_7_Template, 9, 10, "form", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](8, ForgotPasswordPage_section_8_Template, 7, 6, "section", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](5, 3, "forgot_pwd.title"));
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx.isValidUser);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.isValidUser);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_11__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatusGroup, _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.IonButton, _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.IonContent, _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.IonHeader, _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.IonInput, _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.IonItem, _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.IonMenuButton, _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.IonTitle, _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.IonToolbar, _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.TextValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControlName, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__.TranslatePipe],
  styles: ["ion-content[_ngcontent-%COMP%] {\n  --background: url(/../assets/imgs/register_bg.jpg) no-repeat center center / cover;\n}\nion-content[_ngcontent-%COMP%]   .btn_center[_ngcontent-%COMP%] {\n  text-transform: capitalize;\n  background: #002d3d !important;\n  color: white;\n  font-size: 1.2rem;\n  border-radius: 10px;\n  min-height: 40px;\n  width: 100% !important;\n  font-family: Agenda-Regular !important;\n}\nion-content[_ngcontent-%COMP%]   .text_color_base[_ngcontent-%COMP%] {\n  color: --ion-color-secondary !important;\n}\nion-content[_ngcontent-%COMP%]   .white_container_border_radius[_ngcontent-%COMP%] {\n  background-color: rgba(255, 255, 255, 0.7) !important;\n  border-radius: 15px !important;\n}\nion-content[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%] {\n  padding-left: 0px;\n  background: transparent;\n}\nion-content[_ngcontent-%COMP%]   .item-inner[_ngcontent-%COMP%] {\n  padding-right: 0px !important;\n  border-bottom: none !important;\n}\nion-content[_ngcontent-%COMP%]   .input[_ngcontent-%COMP%] {\n  border: 1px solid #eee;\n  padding: 3px 15px;\n  background: white;\n  font-size: 1.4rem !important;\n}\nion-content[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%] {\n  font-size: 1.7rem !important;\n  color: --ion-color-secondary !important;\n  margin-bottom: 5px !important;\n}\nion-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 1.3rem;\n  color: red !important;\n}\nion-content[_ngcontent-%COMP%]   ion-row[_ngcontent-%COMP%] {\n  margin: 15px;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcGFnZXMvZm9yZ290LXBhc3N3b3JkL2ZvcmdvdC1wYXNzd29yZC5wYWdlLnNjc3MiLCJ3ZWJwYWNrOi8vLi8uLi8uLi8uLi9BbGwlMjBQcm9qZWN0cy9NYWxheXNpYV9DbGllbnRBcHBfUmV2YW1wL1N1bkFjY2Vzc19Jb25pYzZfUmV2YW1wL3NyYy9hcHAvcGFnZXMvZm9yZ290LXBhc3N3b3JkL2ZvcmdvdC1wYXNzd29yZC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrRkFBQTtBQ0NGO0FEQ0E7RUFDRSwwQkFBQTtFQUNBLDhCQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLHNCQUFBO0VBQ0Esc0NBQUE7QUNDRjtBRENBO0VBQ0UsdUNBQUE7QUNDRjtBRENBO0VBQ0UscURBQUE7RUFDQSw4QkFBQTtBQ0NGO0FEMkJBO0VBQ0UsaUJBQUE7RUFDQSx1QkFBQTtBQ3pCRjtBRDRCQTtFQUNDLDZCQUFBO0VBQ0EsOEJBQUE7QUMxQkQ7QUQ2QkE7RUFDRSxzQkFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSw0QkFBQTtBQzNCRjtBRDhCQTtFQUNFLDRCQUFBO0VBQ0EsdUNBQUE7RUFDQSw2QkFBQTtBQzVCRjtBRCtCQTtFQUNBLGlCQUFBO0VBQ0EscUJBQUE7QUM3QkE7QURnQ0E7RUFDRSxZQUFBO0FDOUJGIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNvbnRlbnQge1xyXG4gIC0tYmFja2dyb3VuZDogdXJsKC8uLi9hc3NldHMvaW1ncy9yZWdpc3Rlcl9iZy5qcGcpIG5vLXJlcGVhdCBjZW50ZXIgY2VudGVyIC8gY292ZXI7XHJcblxyXG4uYnRuX2NlbnRlciB7XHJcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XHJcbiAgYmFja2dyb3VuZDogIzAwMmQzZCAhaW1wb3J0YW50O1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBmb250LXNpemU6IDEuMnJlbTtcclxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gIG1pbi1oZWlnaHQ6IDQwcHg7XHJcbiAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcclxuICBmb250LWZhbWlseTogQWdlbmRhLVJlZ3VsYXIgIWltcG9ydGFudDtcclxufVxyXG4udGV4dF9jb2xvcl9iYXNlIHtcclxuICBjb2xvcjogLS1pb24tY29sb3Itc2Vjb25kYXJ5ICFpbXBvcnRhbnQ7XHJcbn1cclxuLndoaXRlX2NvbnRhaW5lcl9ib3JkZXJfcmFkaXVzIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNykgIWltcG9ydGFudDtcclxuICBib3JkZXItcmFkaXVzOiAxNXB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuLy8gLml0ZW17XHJcbi8vICAgcGFkZGluZy1sZWZ0OiAwcHg7XHJcbi8vICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbi8vIH1cclxuLy8gaW9uLWl0ZW0taW5uZXJ7XHJcbi8vICAgcGFkZGluZy1yaWdodDogMHB4ICFpbXBvcnRhbnQ7XHJcbi8vICAgYm9yZGVyLWJvdHRvbTogbm9uZSAhaW1wb3J0YW50O1xyXG4vLyB9XHJcbi8vIGlvbi1pbnB1dHtcclxuLy8gICBib3JkZXI6IDFweCBzb2xpZCAjZWVlO1xyXG4vLyAgIHBhZGRpbmc6IDNweCAxNXB4O1xyXG4vLyAgIGJhY2tncm91bmQ6d2hpdGU7XHJcbi8vICAgZm9udC1zaXplOiAxLjRyZW0gIWltcG9ydGFudDtcclxuLy8gfVxyXG4vLyBpb24tbGFiZWx7XHJcbi8vICAgZm9udC1zaXplOiAxLjdyZW0gIWltcG9ydGFudDtcclxuLy8gICBjb2xvcjogLS1pb24tY29sb3Itc2Vjb25kYXJ5ICFpbXBvcnRhbnQ7XHJcbi8vICAgbWFyZ2luLWJvdHRvbTogNXB4ICFpbXBvcnRhbnQ7XHJcbi8vIH1cclxuLy8gcHtcclxuLy8gICBmb250LXNpemU6IDEuM3JlbTtcclxuLy8gICAgIGNvbG9yOiByZWQgIWltcG9ydGFudDtcclxuLy8gfVxyXG4vLyBpb24tcm93e1xyXG4vLyAgIG1hcmdpbjogMTVweDtcclxuLy8gfVxyXG4uaXRlbXtcclxuICBwYWRkaW5nLWxlZnQ6IDBweDtcclxuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxufVxyXG5cclxuLml0ZW0taW5uZXJ7XHJcbiBwYWRkaW5nLXJpZ2h0OiAwcHggIWltcG9ydGFudDtcclxuIGJvcmRlci1ib3R0b206IG5vbmUgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmlucHV0e1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNlZWU7XHJcbiAgcGFkZGluZzogM3B4IDE1cHg7XHJcbiAgYmFja2dyb3VuZDp3aGl0ZTtcclxuICBmb250LXNpemU6IDEuNHJlbSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ubGFiZWx7XHJcbiAgZm9udC1zaXplOiAxLjdyZW0gIWltcG9ydGFudDtcclxuICBjb2xvcjotLWlvbi1jb2xvci1zZWNvbmRhcnkgIWltcG9ydGFudDtcclxuICBtYXJnaW4tYm90dG9tOiA1cHggIWltcG9ydGFudDtcclxufVxyXG5cclxucHtcclxuZm9udC1zaXplOiAxLjNyZW07XHJcbmNvbG9yOiByZWQgIWltcG9ydGFudDtcclxufVxyXG5cclxuaW9uLXJvd3tcclxuICBtYXJnaW46IDE1cHg7XHJcbn1cclxuXHJcbn1cclxuIiwiaW9uLWNvbnRlbnQge1xuICAtLWJhY2tncm91bmQ6IHVybCgvLi4vYXNzZXRzL2ltZ3MvcmVnaXN0ZXJfYmcuanBnKSBuby1yZXBlYXQgY2VudGVyIGNlbnRlciAvIGNvdmVyO1xufVxuaW9uLWNvbnRlbnQgLmJ0bl9jZW50ZXIge1xuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbiAgYmFja2dyb3VuZDogIzAwMmQzZCAhaW1wb3J0YW50O1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBtaW4taGVpZ2h0OiA0MHB4O1xuICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xuICBmb250LWZhbWlseTogQWdlbmRhLVJlZ3VsYXIgIWltcG9ydGFudDtcbn1cbmlvbi1jb250ZW50IC50ZXh0X2NvbG9yX2Jhc2Uge1xuICBjb2xvcjogLS1pb24tY29sb3Itc2Vjb25kYXJ5ICFpbXBvcnRhbnQ7XG59XG5pb24tY29udGVudCAud2hpdGVfY29udGFpbmVyX2JvcmRlcl9yYWRpdXMge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNykgIWltcG9ydGFudDtcbiAgYm9yZGVyLXJhZGl1czogMTVweCAhaW1wb3J0YW50O1xufVxuaW9uLWNvbnRlbnQgLml0ZW0ge1xuICBwYWRkaW5nLWxlZnQ6IDBweDtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG59XG5pb24tY29udGVudCAuaXRlbS1pbm5lciB7XG4gIHBhZGRpbmctcmlnaHQ6IDBweCAhaW1wb3J0YW50O1xuICBib3JkZXItYm90dG9tOiBub25lICFpbXBvcnRhbnQ7XG59XG5pb24tY29udGVudCAuaW5wdXQge1xuICBib3JkZXI6IDFweCBzb2xpZCAjZWVlO1xuICBwYWRkaW5nOiAzcHggMTVweDtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIGZvbnQtc2l6ZTogMS40cmVtICFpbXBvcnRhbnQ7XG59XG5pb24tY29udGVudCAubGFiZWwge1xuICBmb250LXNpemU6IDEuN3JlbSAhaW1wb3J0YW50O1xuICBjb2xvcjogLS1pb24tY29sb3Itc2Vjb25kYXJ5ICFpbXBvcnRhbnQ7XG4gIG1hcmdpbi1ib3R0b206IDVweCAhaW1wb3J0YW50O1xufVxuaW9uLWNvbnRlbnQgcCB7XG4gIGZvbnQtc2l6ZTogMS4zcmVtO1xuICBjb2xvcjogcmVkICFpbXBvcnRhbnQ7XG59XG5pb24tY29udGVudCBpb24tcm93IHtcbiAgbWFyZ2luOiAxNXB4O1xufSJdLCJzb3VyY2VSb290IjoiIn0= */"]
});

/***/ })

}]);
//# sourceMappingURL=src_app_pages_forgot-password_forgot-password_module_ts.js.map