"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_login-first_login-first_module_ts"],{

/***/ 78075:
/*!*****************************************************************!*\
  !*** ./src/app/pages/login-first/login-first-routing.module.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginFirstPageRoutingModule": () => (/* binding */ LoginFirstPageRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _login_first_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login-first.page */ 99618);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);




const routes = [{
  path: '',
  component: _login_first_page__WEBPACK_IMPORTED_MODULE_0__.LoginFirstPage
}];
class LoginFirstPageRoutingModule {}
LoginFirstPageRoutingModule.ɵfac = function LoginFirstPageRoutingModule_Factory(t) {
  return new (t || LoginFirstPageRoutingModule)();
};
LoginFirstPageRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
  type: LoginFirstPageRoutingModule
});
LoginFirstPageRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](LoginFirstPageRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
})();

/***/ }),

/***/ 76264:
/*!*********************************************************!*\
  !*** ./src/app/pages/login-first/login-first.module.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginFirstPageModule": () => (/* binding */ LoginFirstPageModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _login_first_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login-first-routing.module */ 78075);
/* harmony import */ var _login_first_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login-first.page */ 99618);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ 38699);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);







class LoginFirstPageModule {}
LoginFirstPageModule.ɵfac = function LoginFirstPageModule_Factory(t) {
  return new (t || LoginFirstPageModule)();
};
LoginFirstPageModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
  type: LoginFirstPageModule
});
LoginFirstPageModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__.TranslateModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.ReactiveFormsModule, _login_first_routing_module__WEBPACK_IMPORTED_MODULE_0__.LoginFirstPageRoutingModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](LoginFirstPageModule, {
    declarations: [_login_first_page__WEBPACK_IMPORTED_MODULE_1__.LoginFirstPage],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__.TranslateModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.ReactiveFormsModule, _login_first_routing_module__WEBPACK_IMPORTED_MODULE_0__.LoginFirstPageRoutingModule]
  });
})();

/***/ }),

/***/ 99618:
/*!*******************************************************!*\
  !*** ./src/app/pages/login-first/login-first.page.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginFirstPage": () => (/* binding */ LoginFirstPage)
/* harmony export */ });
/* harmony import */ var src_providers_utils_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/providers/utils/config */ 43485);
/* harmony import */ var http_status_codes__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! http-status-codes */ 92788);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var src_app_app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/app.component */ 55041);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var src_providers_logger_service_logger_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/providers/logger-service/logger-service */ 9999);
/* harmony import */ var src_providers_utils_utils_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/providers/utils/utils.service */ 30423);
/* harmony import */ var _login_loginService__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../login/loginService */ 61390);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ngx-translate/core */ 38699);
/* harmony import */ var _ionic_native_fingerprint_aio_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/fingerprint-aio/ngx */ 63427);
/* harmony import */ var src_providers_json_store_json_store__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/providers/json-store/json-store */ 15342);
/* harmony import */ var _profile_getProfileDetailsService__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../profile/getProfileDetailsService */ 85059);
/* harmony import */ var _media_release_mediaService__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../media-release/mediaService */ 6615);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/common */ 94666);


















function LoginFirstPage_div_20_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div")(1, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](3, 1, "Login.userName_req"));
  }
}
function LoginFirstPage_div_21_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div")(1, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](3, 1, "Login.email_req"));
  }
}
function LoginFirstPage_div_32_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div")(1, "span", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](3, 1, "Login.TandM_req"));
  }
}
class LoginFirstPage {
  constructor(router, formBuilder, menuControl, logger, utils, loginService, translate, config, faio, jsonStore, profileService, mediaReleaseService) {
    this.router = router;
    this.formBuilder = formBuilder;
    this.menuControl = menuControl;
    this.logger = logger;
    this.utils = utils;
    this.loginService = loginService;
    this.translate = translate;
    this.config = config;
    this.faio = faio;
    this.jsonStore = jsonStore;
    this.profileService = profileService;
    this.mediaReleaseService = mediaReleaseService;
    this.errorLogattemt = 0;
  }
  ionViewDidEnter() {
    this.menuControl.enable(true, 'first');
    this.utils.component.emit(src_app_app_component__WEBPACK_IMPORTED_MODULE_1__.MenuOptions.LOGIN);
  }
  ngOnInit() {
    this.login_terms = true;
    this.initializeForm();
    this.showFingerPrintPopup = history.state.showFingerPrint;
    if (this.showFingerPrintPopup) {
      this.showBioMetricPopup();
    }
  }
  initializeForm() {
    let EMAIL_PATTERN = src_providers_utils_config__WEBPACK_IMPORTED_MODULE_0__.ConfigProvider.EMAIL_PATTERN;
    this.loginFormFirst = this.formBuilder.group({
      username: ['deepansh.jain@sunlife.com', [_angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.pattern(EMAIL_PATTERN)]],
      loginTerms: [{
        value: true,
        disabled: false
      }]
    });
  }
  /**
  * In this method we are updating the side Menu title
  */
  showBioMetricPopup() {
    setTimeout(() => {
      this.faio.show({
        title: "SunAccess",
        subtitle: "Biometric Authentication",
        description: "Please authenticate",
        fallbackButtonTitle: "Use Backup",
        // When disableBackup is true defaults to "Cancel"
        disableBackup: true // optional | default: false
      }).then(result => {
        // touch id success
        this.touchIDValidate();
      }, error => {
        console.log("touch id not valida try again");
      }).catch(error => {
        console.log("catch error touch id " + error);
      });
    }, 500);
  }
  getSecureWordforUser(userIdLogin) {
    this.utils.showProgressLoader();
    var username = userIdLogin;
    // if (this.utils.isDeviceOnLine()) {
    // if (this.utils.isDevice()) {
    this.loginService.getSecurePhrase(username).then(res => {
      try {
        this.utils.dissmisProgressLoader();
        if (res['responseJSON'] && res['responseJSON']['statusCode'] == http_status_codes__WEBPACK_IMPORTED_MODULE_11__.OK) {
          this.config.secureWordImage = "data:image/jpeg;base64," + res['responseJSON']['image'];
          let usernameId = {
            usernameFromFirstLogin: this.loginFormFirst.controls['username'].value.trim()
          };
          // this.navCtrl.push(LoginPage, usernameId);
          this.router.navigate(['/login'], {
            state: {
              usernameId: usernameId
            }
          });
          // this.loginFormFirst.reset();
          this.loginFormFirst.controls['username'].reset();
          this.loginFormFirst.controls['username'].setValue(null);
        }
      } catch (e) {
        this.utils.dissmisProgressLoader();
        this.logger.error("loginSuccess catch eror : " + JSON.stringify(e));
      }
    }, err => {
      this.utils.dissmisProgressLoader();
      let errorMsg = this.utils.handleServiceException(err);
      this.utils.showAlert("", errorMsg);
    });
    // }
    // else {
    //   this.utils.dissmisProgressLoader();
    //   this.utils.showAlert("", this.translate.instant('Login.useMobile'));
    // }
    // } else {
    //   let errorMsg = this.translate.instant('generic_msgs.network_err');
    //   this.utils.showAlert("", errorMsg);
    // }
  }

  navigateToSecondLoginPage() {
    let Userid = this.loginFormFirst.controls['username'].value.trim();
    this.getSecureWordforUser(Userid);
  }
  /** on click of checkbox this method will call*/
  checkboxChange(checked) {
    // this.login_terms=!this.login_terms;
    if (checked.detail.checked) {
      this.login_terms = true;
    } else {
      this.login_terms = false;
    }
  }
  touchIDValidate() {
    this.logger.trace("FirstLoginPage--touchIDValidate--start");
    let userID = this.config.passCodeInfo.userName;
    let deviceID = this.utils.getDeviceId();
    // console.log("this.config.passCodeInfo.passCodeToken",this.config.passCodeInfo.passCodeToken);
    let token = this.config.passCodeInfo.passCodeToken.replace(/[$@]/g, '');
    //console.log("token",token);
    this.logger.trace("touch id before calling adapter userID : " + userID + " deviceID : " + deviceID + " token :" + token);
    if (this.utils.isDeviceOnLine()) {
      this.utils.showProgressLoader();
      this.loginService.userLogin(userID, token, deviceID).then(res => {
        this.loginSuccess(res);
      }, err => {
        this.errorLogattemt = this.errorLogattemt + 1;
        if (this.errorLogattemt == 1) {
          this.touchIDValidate();
        } else {
          this.utils.dissmisProgressLoader();
          this.utils.presentToast(this.translate.instant('passscode_page.passcode_error'));
          this.logger.error("touch id login failure error " + JSON.stringify(err));
        }
      });
    } else {
      this.utils.presentToast(this.translate.instant('generic_msgs.network_err'));
    }
    this.logger.trace("FirstLoginPage--touchIDValidate--end");
  }
  /**this method will call when login adapter call success */
  loginSuccess(res) {
    this.logger.trace("loginPage--loginSuccess--start");
    this.logger.debug("loginSuccess-" + res);
    try {
      if (res['responseJSON'] && res['responseJSON']['statusCode'] == http_status_codes__WEBPACK_IMPORTED_MODULE_11__.OK) {
        this.config.userInfo.encryptedUserId = res['responseJSON']['encrypted_user_id'];
        this.config.userInfo.token = res['responseJSON']['token_type'] + " " + res['responseJSON']['access_token'];
        if (res['responseJSON']['force_change_password'].toUpperCase() == 'YES') {
          this.config.userInfo.forceChangePassword = res['responseJSON']['force_change_password'];
          // this.navCtrl.setRoot(ChangePasswordPage, { animate: true, direction: 'forward' });
        } else {
          this.config.userInfo.expiresIn = res['responseJSON']['expires_in'];
          this.config.userInfo.userId = res['responseJSON']['userId'];
          this.config.userInfo.name = res['responseJSON']['name'];
          this.config.userInfo.email = res['responseJSON']['email'];
          this.config.userInfo.identityNumber = res['responseJSON']['identity_number'];
          this.config.userInfo.contactNumber = res['responseJSON']['contact_number'];
          this.config.userInfo.role = res['responseJSON']['role'];
          this.config.userInfo.forceChangeSecureWord = res['responseJSON']['force_secure_phrase'];
          this.config.userInfo.lastLoginDate = res['responseJSON']['last_login_date'];
          this.config.userInfo.issued = res['responseJSON']['issued'];
          this.config.userInfo.expires = res['responseJSON']['expires'];
          this.config.userInfo.unreadNoti = res['responseJSON']['unread_notifications'];
          this.utils.publishSomeData({
            'user': 'UnreadNotiUpdated',
            'data': this.config.userInfo.unreadNoti
          });
          this.config.userInfo.notification_subs_prompt = res['responseJSON']['notification_subscription_prompt'];
          this.config.userInfo.subscribedNotitags = res['responseJSON']['notification_subscriptions'];
          this.config.userInfo.showPasswordExpirationMsgFlag = res['responseJSON']['password_change_reminder'];
          this.config.userInfo.passwordReminderMsg = res['responseJSON']['password_reminder_message'];
          this.refreshToken = res['responseJSON']['refresh_token'].trim();
          this.config.userInfo.maskedContactNumber = res['responseJSON']['contact_number'].replace(/\d(?=\d{4})/g, "*");
          if (this.config.sessionTimeout != null) {
            clearTimeout(this.config.sessionTimeout);
            this.config.sessionTimeout = null;
          }
          this.jsonStore.addDataToJsonStore(this.jsonStore.collectionNames.refreshToken, {
            refreshToken: this.refreshToken
          });
          this.getProfileDetails();
        }
      } else if (res['responseJSON']['statusCode'] == http_status_codes__WEBPACK_IMPORTED_MODULE_11__.BAD_REQUEST) {
        this.utils.dissmisProgressLoader();
        this.utils.showAlert("", res['responseJSON']['error_description']);
      } else {
        this.utils.dissmisProgressLoader();
        this.utils.showAlert("", res['responseJSON']['error_description']);
      }
    } catch (e) {
      this.utils.dissmisProgressLoader();
      this.logger.error("loginSuccess catch eror : " + JSON.stringify(e));
    }
    this.logger.trace("loginPage--loginSuccess--end");
  }
  getProfileDetails() {
    this.profileService.getProfileDetails().then(res => {
      if (res['responseJSON'] && res['responseJSON']['statusCode'] == http_status_codes__WEBPACK_IMPORTED_MODULE_11__.OK) {
        this.config.userDetails.name = res['responseJSON']['name'];
        this.config.userDetails.birthDate = res['responseJSON']['birthDate'].trim();
        this.config.userDetails.nationality = res['responseJSON']['nationality'].trim();
        this.config.userDetails.race = res['responseJSON']['race'].trim();
        this.config.userDetails.maritalStatus = res['responseJSON']['maritalStatus'].trim();
        this.config.userDetails.addressField1 = res['responseJSON']['addressField1'].trim();
        this.config.userDetails.addressField2 = res['responseJSON']['addressField2'].trim();
        this.config.userDetails.addressField3 = res['responseJSON']['addressField3'].trim();
        this.config.userDetails.addressField4 = res['responseJSON']['addressField4'].trim();
        this.config.userDetails.addressField5 = res['responseJSON']['addressField5'].trim();
        this.config.userDetails.email = res['responseJSON']['email'].trim();
        this.config.userDetails.homePhone = res['responseJSON']['homePhone'].trim();
        this.config.userDetails.mobilePhone = res['responseJSON']['mobilePhone'].trim();
        this.config.userDetails.officePhone = res['responseJSON']['officePhone'].trim();
        this.config.userDetails.identityNumber = res['responseJSON']['identityNo'].trim();
        this.config.userDetails.profilePicture = 'data:image/jpeg;base64,' + res['responseJSON']['profilePicture'];
        if (this.config.userInfo.forceChangeSecureWord == 1) {
          this.utils.dissmisProgressLoader();
          // this.navCtrl.setRoot(UpdateSecureWordPage, { animate: true, direction: 'forward', gotoDashboard: 'true' });
          this.router.navigate(['/update-secure-word'], {
            state: {
              animate: true,
              direction: 'forward',
              gotoDashboard: 'true'
            }
          });
        } else {
          this.utils.dissmisProgressLoader();
          let comingFromLoginFlag = {
            comingFromLogin: true
          };
          //this.router.navigate(['/welcome-tour'], { state: { animate: true, direction: 'forward', comingFromLoginFlag: comingFromLoginFlag } });
          this.router.navigate(['/dashboard-after-login'], {
            state: {
              animate: true,
              direction: 'forward',
              comingFromLoginFlag: comingFromLoginFlag
            }
          });
        }
      }
    }, error => {
      this.utils.dissmisProgressLoader();
      let errorMsg = this.utils.handleServiceException(error);
      this.utils.presentToast(errorMsg);
      // this.navCtrl.setRoot(LoginFirstPage, { animate: true, direction: 'forward' });
      this.router.navigate(['/login-first'], {
        state: {
          animate: true,
          direction: 'forward'
        }
      });
    });
  }
  openTNC() {
    // this.navCtrl.push(TermsnconditionsPage);
    this.router.navigate(['/termsnconditions']);
  }
  register() {
    this.router.navigate(['/sign-up']);
  }
}
LoginFirstPage.ɵfac = function LoginFirstPage_Factory(t) {
  return new (t || LoginFirstPage)(_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_12__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_13__.MenuController), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](src_providers_logger_service_logger_service__WEBPACK_IMPORTED_MODULE_2__.LoggerServiceProvider), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](src_providers_utils_utils_service__WEBPACK_IMPORTED_MODULE_3__.UtilService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_login_loginService__WEBPACK_IMPORTED_MODULE_4__.LoginService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_14__.TranslateService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](src_providers_utils_config__WEBPACK_IMPORTED_MODULE_0__.ConfigProvider), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_ionic_native_fingerprint_aio_ngx__WEBPACK_IMPORTED_MODULE_5__.FingerprintAIO), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](src_providers_json_store_json_store__WEBPACK_IMPORTED_MODULE_6__.JsonStoreProvider), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_profile_getProfileDetailsService__WEBPACK_IMPORTED_MODULE_7__.GetProfileDetailsService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_media_release_mediaService__WEBPACK_IMPORTED_MODULE_8__.MediaReleaseService));
};
LoginFirstPage.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineComponent"]({
  type: LoginFirstPage,
  selectors: [["app-login-first"]],
  decls: 40,
  vars: 27,
  consts: [["mode", "ios"], ["color", "primary", 1, "toolbar"], ["slot", "start", "auto-hide", "false", "color", "secondary"], [1, "bold-font"], ["forceOverscroll", "false", 1, "app_bg1", "text_color_base"], [1, "UserimgDiv"], [1, "welcome_txt"], [2, "margin-top", "-5%"], [1, "margin_bottom", 3, "formGroup"], [1, "white_container_border_radius", "formPadding"], [1, "marg-area"], ["lines", "none", 1, "border"], ["formControlName", "username", "type", "email", 3, "placeholder"], [4, "ngIf"], [1, "terms_conditions", "flex"], ["size", "1"], ["mode", "md", "formControlName", "loginTerms", 1, "margin_top_bottom_auto", 3, "checked", "ionChange"], ["size", "11"], [1, "terms", 3, "click"], ["color", "secondary", "expand", "block", 3, "disabled", "click"], [1, "login_link"], [3, "click"], [1, "fail"], [1, "fail", "padding_015"]],
  template: function LoginFirstPage_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "ion-header", 0)(1, "ion-toolbar", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](2, "ion-menu-button", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](3, "ion-title", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](4, "Login");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](5, "ion-content", 4)(6, "div", 5)(7, "p", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](8);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](9, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](10, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](11);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](12, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](13, "div", 7)(14, "form", 8)(15, "div", 9)(16, "div", 10)(17, "ion-item", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](18, "ion-input", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](19, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](20, LoginFirstPage_div_20_Template, 4, 3, "div", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](21, LoginFirstPage_div_21_Template, 4, 3, "div", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](22, "ion-row", 14)(23, "ion-col", 15)(24, "ion-checkbox", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("ionChange", function LoginFirstPage_Template_ion_checkbox_ionChange_24_listener($event) {
        return ctx.checkboxChange($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](25, "ion-col", 17)(26, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](27);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](28, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](29, "span", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function LoginFirstPage_Template_span_click_29_listener() {
        return ctx.openTNC();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](30);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](31, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](32, LoginFirstPage_div_32_Template, 4, 3, "div", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](33, "ion-button", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function LoginFirstPage_Template_ion_button_click_33_listener() {
        return ctx.navigateToSecondLoginPage();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](34);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](35, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](36, "div", 20)(37, "span", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function LoginFirstPage_Template_span_click_37_listener() {
        return ctx.register();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](38);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](39, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](8);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](9, 13, "welcome"));
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](12, 15, "sunacces"));
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("formGroup", ctx.loginFormFirst);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](19, 17, "emailid"));
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx.loginFormFirst.get("username").hasError("required") && ctx.loginFormFirst.get("username").dirty);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", !ctx.loginFormFirst.get("username").hasError("required") && ctx.loginFormFirst.get("username").hasError("pattern") && ctx.loginFormFirst.get("username").dirty);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("checked", ctx.login_terms);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](28, 19, "terms_conditions_accept"), " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](31, 21, "terms_and_conditions"));
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx.loginFormFirst.controls.loginTerms.value === false && ctx.loginFormFirst.get("loginTerms").touched);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("disabled", !ctx.loginFormFirst.controls.username.valid || !ctx.login_terms);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](35, 23, "login"));
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](39, 25, "newuser"));
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_15__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.NgControlStatusGroup, _ionic_angular__WEBPACK_IMPORTED_MODULE_13__.IonButton, _ionic_angular__WEBPACK_IMPORTED_MODULE_13__.IonCheckbox, _ionic_angular__WEBPACK_IMPORTED_MODULE_13__.IonCol, _ionic_angular__WEBPACK_IMPORTED_MODULE_13__.IonContent, _ionic_angular__WEBPACK_IMPORTED_MODULE_13__.IonHeader, _ionic_angular__WEBPACK_IMPORTED_MODULE_13__.IonInput, _ionic_angular__WEBPACK_IMPORTED_MODULE_13__.IonItem, _ionic_angular__WEBPACK_IMPORTED_MODULE_13__.IonMenuButton, _ionic_angular__WEBPACK_IMPORTED_MODULE_13__.IonRow, _ionic_angular__WEBPACK_IMPORTED_MODULE_13__.IonTitle, _ionic_angular__WEBPACK_IMPORTED_MODULE_13__.IonToolbar, _ionic_angular__WEBPACK_IMPORTED_MODULE_13__.BooleanValueAccessor, _ionic_angular__WEBPACK_IMPORTED_MODULE_13__.TextValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormControlName, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_14__.TranslatePipe],
  styles: [".app_bg1[_ngcontent-%COMP%] {\n  --background: url('register_bg.jpg') no-repeat center center / cover;\n  background-size: cover;\n  background-repeat: no-repeat;\n  height: 100%;\n  background-position: bottom;\n}\n\n.list-header[_ngcontent-%COMP%] {\n  margin-bottom: 0px !important;\n}\n\n.item[_ngcontent-%COMP%] {\n  padding-left: 0px;\n  background: transparent;\n}\n\n.item[_ngcontent-%COMP%]   .item-input.ng-valid.item-input-has-value[_ngcontent-%COMP%]:not(.input-has-focus):not(.item-input-has-focus)   .item-inner[_ngcontent-%COMP%], .item.item-input.ng-valid.input-has-value[_ngcontent-%COMP%]:not(.input-has-focus):not(.item-input-has-focus)   .item-inner[_ngcontent-%COMP%] {\n  border-bottom-color: none !important;\n  box-shadow: none !important;\n}\n\n.item-inner[_ngcontent-%COMP%] {\n  padding-right: 0px !important;\n  border-bottom: none !important;\n}\n\n.input[_ngcontent-%COMP%] {\n  border: 1px solid #eee;\n  background: white;\n}\n\n.label[_ngcontent-%COMP%] {\n  color: #002d3d !important;\n  white-space: pre-line;\n}\n\n.welcome_txt[_ngcontent-%COMP%] {\n  text-align: center;\n  color: #002d3d;\n  font-size: 2rem !important;\n  line-height: 35px;\n  margin: 15% !important;\n}\n\n.item-inner[_ngcontent-%COMP%] {\n  border-bottom: none !important;\n}\n\n.input[_ngcontent-%COMP%] {\n  border: 1px solid #eee;\n  margin: 0;\n}\n\n.marg-area[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  border: medium none;\n  padding: 0 15px;\n  width: 100%;\n  border-bottom: 0px solid #e5e5e5;\n}\n\n.item-md.item-block[_ngcontent-%COMP%]   .item-inner[_ngcontent-%COMP%] {\n  padding-right: 0px;\n}\n\n.formPadding[_ngcontent-%COMP%] {\n  padding: 20px 15px;\n  margin: 15px;\n}\n\n.ion-checkBox[_ngcontent-%COMP%] {\n  padding: 0px 0px 0px 20px;\n  background: transparent;\n}\n\n.ion-checkBox[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%] {\n  padding: 0;\n  font-size: 1.4rem !important;\n  padding-top: 3px;\n  margin: 0px;\n}\n\n.login_link[_ngcontent-%COMP%] {\n  margin: 5px 0;\n  text-align: center;\n  color: #002d3d;\n}\n\n.margin_bottom[_ngcontent-%COMP%] {\n  margin-bottom: 10%;\n}\n\n.fail[_ngcontent-%COMP%] {\n  text-align: start !important;\n  color: #f00 !important;\n}\n\n.padding_015[_ngcontent-%COMP%] {\n  padding: 0px 15px;\n}\n\n.terms[_ngcontent-%COMP%] {\n  text-decoration: underline;\n  text-transform: lowercase;\n  font-size: 0.9rem;\n}\n\n.terms_conditions[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  margin-top: 5px;\n}\n\n.canvas_background[_ngcontent-%COMP%] {\n  text-align: center;\n  background-color: #002d3d;\n  color: white;\n}\n\n.SecurePhrace_div[_ngcontent-%COMP%] {\n  margin-bottom: -20px;\n}\n\n.SecurePhrace_Img[_ngcontent-%COMP%] {\n  margin: auto;\n}\n\n.secondLoginDiv[_ngcontent-%COMP%] {\n  margin-top: -30px;\n}\n\n.white_container_border_radius[_ngcontent-%COMP%] {\n  background-color: rgba(255, 255, 255, 0.7) !important;\n  border-radius: 15px !important;\n}\n\n.flex[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n\n.btn_center[_ngcontent-%COMP%] {\n  text-transform: capitalize;\n  --background: #002d3d !important;\n  color: white;\n  border-radius: 10px;\n  min-height: 40px;\n  width: 100% !important;\n  font-family: Agenda-Regular !important;\n}\n\n.border[_ngcontent-%COMP%] {\n  border: 1px solid #e0e0e0;\n  margin-bottom: 10px;\n}\n\n.input[_ngcontent-%COMP%] {\n  border: 1px solid #e0e0e0;\n  padding: 3px 15px;\n  background: var(--ion-color-secondary-contrast) !important;\n  font-size: 1.4rem;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcGFnZXMvbG9naW4tZmlyc3QvbG9naW4tZmlyc3QucGFnZS5zY3NzIiwid2VicGFjazovLy4vLi4vLi4vLi4vQWxsJTIwUHJvamVjdHMvTWFsYXlzaWFfQ2xpZW50QXBwX1JldmFtcC9TdW5BY2Nlc3NfSW9uaWM2X1JldmFtcC9zcmMvYXBwL3BhZ2VzL2xvZ2luLWZpcnN0L2xvZ2luLWZpcnN0LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLG9FQUFBO0VBQ0Esc0JBQUE7RUFDQSw0QkFBQTtFQUNBLFlBQUE7RUFDQSwyQkFBQTtBQ0NKOztBREVBO0VBQ0ksNkJBQUE7QUNDSjs7QURFQTtFQUNJLGlCQUFBO0VBQ0EsdUJBQUE7QUNDSjs7QURFQTs7RUFFSSxvQ0FBQTtFQUVBLDJCQUFBO0FDQ0o7O0FER0E7RUFDSSw2QkFBQTtFQUNBLDhCQUFBO0FDQUo7O0FER0E7RUFDSSxzQkFBQTtFQUNBLGlCQUFBO0FDQUo7O0FESUE7RUFFSSx5QkFBQTtFQUVBLHFCQUFBO0FDSEo7O0FETUE7RUFDSSxrQkFBQTtFQUNBLGNBQUE7RUFDQSwwQkFBQTtFQUVBLGlCQUFBO0VBRUEsc0JBQUE7QUNMSjs7QURTQTtFQUNJLDhCQUFBO0FDTko7O0FEU0E7RUFDSSxzQkFBQTtFQUNBLFNBQUE7QUNOSjs7QURVQTtFQUNJLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7RUFDQSxnQ0FBQTtBQ1BKOztBRFVBO0VBQ0ksa0JBQUE7QUNQSjs7QURVQTtFQUNJLGtCQUFBO0VBQ0EsWUFBQTtBQ1BKOztBRFVBO0VBQ0kseUJBQUE7RUFDQSx1QkFBQTtBQ1BKOztBRFVBO0VBQ0ksVUFBQTtFQUNBLDRCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0FDUEo7O0FEWUE7RUFDSSxhQUFBO0VBQ0Esa0JBQUE7RUFFQSxjQUFBO0FDVko7O0FENEJBO0VBQ0ksa0JBQUE7QUN6Qko7O0FENEJBO0VBQ0ksNEJBQUE7RUFDQSxzQkFBQTtBQ3pCSjs7QUQ0QkE7RUFDSSxpQkFBQTtBQ3pCSjs7QUQ0QkE7RUFDSSwwQkFBQTtFQUVBLHlCQUFBO0VBQ0EsaUJBQUE7QUMxQko7O0FENkJBO0VBRUksZUFBQTtBQzNCSjs7QUQ4QkE7RUFDSSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0EsWUFBQTtBQzNCSjs7QUQ4QkE7RUFDSSxvQkFBQTtBQzNCSjs7QUQ4QkE7RUFDSSxZQUFBO0FDM0JKOztBRDhCQTtFQUNJLGlCQUFBO0FDM0JKOztBRDhCQTtFQUNJLHFEQUFBO0VBQ0EsOEJBQUE7QUMzQko7O0FEOEJBO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0FDM0JKOztBRDhCQTtFQUNJLDBCQUFBO0VBQ0EsZ0NBQUE7RUFDQSxZQUFBO0VBRUEsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLHNCQUFBO0VBQ0Esc0NBQUE7QUM1Qko7O0FEK0JBO0VBQ0kseUJBQUE7RUFDQSxtQkFBQTtBQzVCSjs7QUQ4QkE7RUFFSSx5QkFBQTtFQUNBLGlCQUFBO0VBQ0EsMERBQUE7RUFDQSxpQkFBQTtBQzVCSiIsInNvdXJjZXNDb250ZW50IjpbIi5hcHBfYmcxIHtcclxuICAgIC0tYmFja2dyb3VuZDogdXJsKC4uLy4uLy4uL2Fzc2V0cy9pbWdzL3JlZ2lzdGVyX2JnLmpwZykgbm8tcmVwZWF0IGNlbnRlciBjZW50ZXIgLyBjb3ZlcjtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogYm90dG9tO1xyXG59XHJcblxyXG4ubGlzdC1oZWFkZXIge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5pdGVtIHtcclxuICAgIHBhZGRpbmctbGVmdDogMHB4O1xyXG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbn1cclxuXHJcbi5pdGVtIC5pdGVtLWlucHV0Lm5nLXZhbGlkLml0ZW0taW5wdXQtaGFzLXZhbHVlOm5vdCguaW5wdXQtaGFzLWZvY3VzKTpub3QoLml0ZW0taW5wdXQtaGFzLWZvY3VzKSAuaXRlbS1pbm5lcixcclxuLml0ZW0uaXRlbS1pbnB1dC5uZy12YWxpZC5pbnB1dC1oYXMtdmFsdWU6bm90KC5pbnB1dC1oYXMtZm9jdXMpOm5vdCguaXRlbS1pbnB1dC1oYXMtZm9jdXMpIC5pdGVtLWlubmVyIHtcclxuICAgIGJvcmRlci1ib3R0b20tY29sb3I6IG5vbmUgIWltcG9ydGFudDtcclxuICAgIC13ZWJraXQtYm94LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50O1xyXG4gICAgYm94LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50O1xyXG5cclxufVxyXG5cclxuLml0ZW0taW5uZXIge1xyXG4gICAgcGFkZGluZy1yaWdodDogMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICBib3JkZXItYm90dG9tOiBub25lICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5pbnB1dCB7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZWVlO1xyXG4gICAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgICAvLyBmb250LXNpemU6IDEuNHJlbTtcclxufVxyXG5cclxuLmxhYmVsIHtcclxuICAgIC8vIGZvbnQtc2l6ZTogMS43cmVtICFpbXBvcnRhbnQ7XHJcbiAgICBjb2xvcjogIzAwMmQzZCAhaW1wb3J0YW50O1xyXG4gICAgLy9mb250LXdlaWdodDogNDAwO1xyXG4gICAgd2hpdGUtc3BhY2U6IHByZS1saW5lO1xyXG59XHJcblxyXG4ud2VsY29tZV90eHQge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgY29sb3I6ICMwMDJkM2Q7XHJcbiAgICBmb250LXNpemU6IDIuMHJlbSAhaW1wb3J0YW50O1xyXG4gICAgLy8gbWFyZ2luOiA1NXB4IDAgMCAhaW1wb3J0YW50O1xyXG4gICAgbGluZS1oZWlnaHQ6IDM1cHg7XHJcbiAgICAvLyBtYXJnaW4tYm90dG9tOiAxNSU7XHJcbiAgICBtYXJnaW46IDE1JSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG5cclxuLml0ZW0taW5uZXIge1xyXG4gICAgYm9yZGVyLWJvdHRvbTogbm9uZSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uaW5wdXQge1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2VlZTtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIC8vIGZvbnQtc2l6ZTogMS40cmVtICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5tYXJnLWFyZWEgaW5wdXQge1xyXG4gICAgYm9yZGVyOiBtZWRpdW0gbm9uZTtcclxuICAgIHBhZGRpbmc6IDAgMTVweDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMHB4IHNvbGlkICNlNWU1ZTU7XHJcbn1cclxuXHJcbi5pdGVtLW1kLml0ZW0tYmxvY2sgLml0ZW0taW5uZXIge1xyXG4gICAgcGFkZGluZy1yaWdodDogMHB4O1xyXG59XHJcblxyXG4uZm9ybVBhZGRpbmcge1xyXG4gICAgcGFkZGluZzogMjBweCAxNXB4O1xyXG4gICAgbWFyZ2luOiAxNXB4O1xyXG59XHJcblxyXG4uaW9uLWNoZWNrQm94IHtcclxuICAgIHBhZGRpbmc6IDBweCAwcHggMHB4IDIwcHg7XHJcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxufVxyXG5cclxuLmlvbi1jaGVja0JveCAubGFiZWwge1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIGZvbnQtc2l6ZTogMS40cmVtICFpbXBvcnRhbnQ7XHJcbiAgICBwYWRkaW5nLXRvcDogM3B4O1xyXG4gICAgbWFyZ2luOiAwcHg7XHJcbn1cclxuXHJcblxyXG5cclxuLmxvZ2luX2xpbmsge1xyXG4gICAgbWFyZ2luOiA1cHggMDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIC8vIGZvbnQtc2l6ZTogMS43cmVtO1xyXG4gICAgY29sb3I6ICMwMDJkM2Q7XHJcbn1cclxuXHJcbi8vIC5pdGVtIC5jaGVja2JveCB7XHJcbi8vICAgICBtYXJnaW46IDBweCAxMHB4IDBweCAwcHggIWltcG9ydGFudDtcclxuLy8gfVxyXG5cclxuLy8gLmlvbi1jaGVja2JveC1pY29uIHtcclxuLy8gICAgIGJvcmRlci13aWR0aDogMXB4ICFpbXBvcnRhbnQ7XHJcbi8vICAgICBib3JkZXItcmFkaXVzOiAwJSAhaW1wb3J0YW50O1xyXG4vLyB9XHJcblxyXG4vLyAuaW9uLWNoZWNrYm94LWNoZWNrZWQge1xyXG4vLyAgICAgYm9yZGVyLWNvbG9yOiAjMDAyZDNkICFpbXBvcnRhbnQ7XHJcbi8vICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xyXG4vLyB9XHJcblxyXG5cclxuLm1hcmdpbl9ib3R0b20ge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTAlO1xyXG59XHJcblxyXG4uZmFpbCB7XHJcbiAgICB0ZXh0LWFsaWduOiBzdGFydCAhaW1wb3J0YW50O1xyXG4gICAgY29sb3I6ICNmMDAgIWltcG9ydGFudDtcclxufVxyXG5cclxuLnBhZGRpbmdfMDE1IHtcclxuICAgIHBhZGRpbmc6IDBweCAxNXB4O1xyXG59XHJcblxyXG4udGVybXMge1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XHJcbiAgICAvLyB3aGl0ZS1zcGFjZTogdW5zZXQgIWltcG9ydGFudDtcclxuICAgIHRleHQtdHJhbnNmb3JtOiBsb3dlcmNhc2U7XHJcbiAgICBmb250LXNpemU6IDAuOXJlbTtcclxufVxyXG5cclxuLnRlcm1zX2NvbmRpdGlvbnMgc3BhbiB7XHJcbiAgICAvLyBmb250LXNpemU6IDEuNHJlbSAhaW1wb3J0YW50O1xyXG4gICAgbWFyZ2luLXRvcDogNXB4O1xyXG59XHJcblxyXG4uY2FudmFzX2JhY2tncm91bmQge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwMmQzZDtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuLlNlY3VyZVBocmFjZV9kaXYge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogLTIwcHg7XHJcbn1cclxuXHJcbi5TZWN1cmVQaHJhY2VfSW1nIHtcclxuICAgIG1hcmdpbjogYXV0bztcclxufVxyXG5cclxuLnNlY29uZExvZ2luRGl2IHtcclxuICAgIG1hcmdpbi10b3A6IC0zMHB4O1xyXG59XHJcblxyXG4ud2hpdGVfY29udGFpbmVyX2JvcmRlcl9yYWRpdXMge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjcpICFpbXBvcnRhbnQ7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5mbGV4IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4uYnRuX2NlbnRlciB7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcclxuICAgIC0tYmFja2dyb3VuZDogIzAwMmQzZCAhaW1wb3J0YW50O1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgLy8gZm9udC1zaXplOiAxLjdyZW07XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgbWluLWhlaWdodDogNDBweDtcclxuICAgIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XHJcbiAgICBmb250LWZhbWlseTogQWdlbmRhLVJlZ3VsYXIgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmJvcmRlciB7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZTBlMGUwO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxufVxyXG4uaW5wdXR7XHJcbiAgICAvLyAtLWJvcmRlcjogMXB4IHNvbGlkICNlZWU7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZTBlMGUwO1xyXG4gICAgcGFkZGluZzogM3B4IDE1cHg7XHJcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5LWNvbnRyYXN0KSAhaW1wb3J0YW50O1xyXG4gICAgZm9udC1zaXplOiAxLjRyZW07XHJcbn1cclxuIiwiLmFwcF9iZzEge1xuICAtLWJhY2tncm91bmQ6IHVybCguLi8uLi8uLi9hc3NldHMvaW1ncy9yZWdpc3Rlcl9iZy5qcGcpIG5vLXJlcGVhdCBjZW50ZXIgY2VudGVyIC8gY292ZXI7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGhlaWdodDogMTAwJTtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogYm90dG9tO1xufVxuXG4ubGlzdC1oZWFkZXIge1xuICBtYXJnaW4tYm90dG9tOiAwcHggIWltcG9ydGFudDtcbn1cblxuLml0ZW0ge1xuICBwYWRkaW5nLWxlZnQ6IDBweDtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG59XG5cbi5pdGVtIC5pdGVtLWlucHV0Lm5nLXZhbGlkLml0ZW0taW5wdXQtaGFzLXZhbHVlOm5vdCguaW5wdXQtaGFzLWZvY3VzKTpub3QoLml0ZW0taW5wdXQtaGFzLWZvY3VzKSAuaXRlbS1pbm5lcixcbi5pdGVtLml0ZW0taW5wdXQubmctdmFsaWQuaW5wdXQtaGFzLXZhbHVlOm5vdCguaW5wdXQtaGFzLWZvY3VzKTpub3QoLml0ZW0taW5wdXQtaGFzLWZvY3VzKSAuaXRlbS1pbm5lciB7XG4gIGJvcmRlci1ib3R0b20tY29sb3I6IG5vbmUgIWltcG9ydGFudDtcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7XG4gIGJveC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudDtcbn1cblxuLml0ZW0taW5uZXIge1xuICBwYWRkaW5nLXJpZ2h0OiAwcHggIWltcG9ydGFudDtcbiAgYm9yZGVyLWJvdHRvbTogbm9uZSAhaW1wb3J0YW50O1xufVxuXG4uaW5wdXQge1xuICBib3JkZXI6IDFweCBzb2xpZCAjZWVlO1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbn1cblxuLmxhYmVsIHtcbiAgY29sb3I6ICMwMDJkM2QgIWltcG9ydGFudDtcbiAgd2hpdGUtc3BhY2U6IHByZS1saW5lO1xufVxuXG4ud2VsY29tZV90eHQge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGNvbG9yOiAjMDAyZDNkO1xuICBmb250LXNpemU6IDJyZW0gIWltcG9ydGFudDtcbiAgbGluZS1oZWlnaHQ6IDM1cHg7XG4gIG1hcmdpbjogMTUlICFpbXBvcnRhbnQ7XG59XG5cbi5pdGVtLWlubmVyIHtcbiAgYm9yZGVyLWJvdHRvbTogbm9uZSAhaW1wb3J0YW50O1xufVxuXG4uaW5wdXQge1xuICBib3JkZXI6IDFweCBzb2xpZCAjZWVlO1xuICBtYXJnaW46IDA7XG59XG5cbi5tYXJnLWFyZWEgaW5wdXQge1xuICBib3JkZXI6IG1lZGl1bSBub25lO1xuICBwYWRkaW5nOiAwIDE1cHg7XG4gIHdpZHRoOiAxMDAlO1xuICBib3JkZXItYm90dG9tOiAwcHggc29saWQgI2U1ZTVlNTtcbn1cblxuLml0ZW0tbWQuaXRlbS1ibG9jayAuaXRlbS1pbm5lciB7XG4gIHBhZGRpbmctcmlnaHQ6IDBweDtcbn1cblxuLmZvcm1QYWRkaW5nIHtcbiAgcGFkZGluZzogMjBweCAxNXB4O1xuICBtYXJnaW46IDE1cHg7XG59XG5cbi5pb24tY2hlY2tCb3gge1xuICBwYWRkaW5nOiAwcHggMHB4IDBweCAyMHB4O1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbn1cblxuLmlvbi1jaGVja0JveCAubGFiZWwge1xuICBwYWRkaW5nOiAwO1xuICBmb250LXNpemU6IDEuNHJlbSAhaW1wb3J0YW50O1xuICBwYWRkaW5nLXRvcDogM3B4O1xuICBtYXJnaW46IDBweDtcbn1cblxuLmxvZ2luX2xpbmsge1xuICBtYXJnaW46IDVweCAwO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGNvbG9yOiAjMDAyZDNkO1xufVxuXG4ubWFyZ2luX2JvdHRvbSB7XG4gIG1hcmdpbi1ib3R0b206IDEwJTtcbn1cblxuLmZhaWwge1xuICB0ZXh0LWFsaWduOiBzdGFydCAhaW1wb3J0YW50O1xuICBjb2xvcjogI2YwMCAhaW1wb3J0YW50O1xufVxuXG4ucGFkZGluZ18wMTUge1xuICBwYWRkaW5nOiAwcHggMTVweDtcbn1cblxuLnRlcm1zIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG4gIHRleHQtdHJhbnNmb3JtOiBsb3dlcmNhc2U7XG4gIGZvbnQtc2l6ZTogMC45cmVtO1xufVxuXG4udGVybXNfY29uZGl0aW9ucyBzcGFuIHtcbiAgbWFyZ2luLXRvcDogNXB4O1xufVxuXG4uY2FudmFzX2JhY2tncm91bmQge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDJkM2Q7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLlNlY3VyZVBocmFjZV9kaXYge1xuICBtYXJnaW4tYm90dG9tOiAtMjBweDtcbn1cblxuLlNlY3VyZVBocmFjZV9JbWcge1xuICBtYXJnaW46IGF1dG87XG59XG5cbi5zZWNvbmRMb2dpbkRpdiB7XG4gIG1hcmdpbi10b3A6IC0zMHB4O1xufVxuXG4ud2hpdGVfY29udGFpbmVyX2JvcmRlcl9yYWRpdXMge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNykgIWltcG9ydGFudDtcbiAgYm9yZGVyLXJhZGl1czogMTVweCAhaW1wb3J0YW50O1xufVxuXG4uZmxleCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5idG5fY2VudGVyIHtcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG4gIC0tYmFja2dyb3VuZDogIzAwMmQzZCAhaW1wb3J0YW50O1xuICBjb2xvcjogd2hpdGU7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIG1pbi1oZWlnaHQ6IDQwcHg7XG4gIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XG4gIGZvbnQtZmFtaWx5OiBBZ2VuZGEtUmVndWxhciAhaW1wb3J0YW50O1xufVxuXG4uYm9yZGVyIHtcbiAgYm9yZGVyOiAxcHggc29saWQgI2UwZTBlMDtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn1cblxuLmlucHV0IHtcbiAgYm9yZGVyOiAxcHggc29saWQgI2UwZTBlMDtcbiAgcGFkZGluZzogM3B4IDE1cHg7XG4gIGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1zZWNvbmRhcnktY29udHJhc3QpICFpbXBvcnRhbnQ7XG4gIGZvbnQtc2l6ZTogMS40cmVtO1xufSJdLCJzb3VyY2VSb290IjoiIn0= */"]
});

/***/ })

}]);
//# sourceMappingURL=src_app_pages_login-first_login-first_module_ts.js.map