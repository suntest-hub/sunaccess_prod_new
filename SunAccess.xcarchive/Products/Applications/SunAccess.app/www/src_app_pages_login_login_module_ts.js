"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_login_login_module_ts"],{

/***/ 73403:
/*!*****************************************************!*\
  !*** ./src/app/pages/login/login-routing.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginPageRoutingModule": () => (/* binding */ LoginPageRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login.page */ 3058);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);




const routes = [{
  path: '',
  component: _login_page__WEBPACK_IMPORTED_MODULE_0__.LoginPage
}];
class LoginPageRoutingModule {}
LoginPageRoutingModule.ɵfac = function LoginPageRoutingModule_Factory(t) {
  return new (t || LoginPageRoutingModule)();
};
LoginPageRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
  type: LoginPageRoutingModule
});
LoginPageRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](LoginPageRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
})();

/***/ }),

/***/ 21053:
/*!*********************************************!*\
  !*** ./src/app/pages/login/login.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginPageModule": () => (/* binding */ LoginPageModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _login_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login-routing.module */ 73403);
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login.page */ 3058);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ 38699);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);







class LoginPageModule {}
LoginPageModule.ɵfac = function LoginPageModule_Factory(t) {
  return new (t || LoginPageModule)();
};
LoginPageModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
  type: LoginPageModule
});
LoginPageModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule, _login_routing_module__WEBPACK_IMPORTED_MODULE_0__.LoginPageRoutingModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__.TranslateModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.ReactiveFormsModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](LoginPageModule, {
    declarations: [_login_page__WEBPACK_IMPORTED_MODULE_1__.LoginPage],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule, _login_routing_module__WEBPACK_IMPORTED_MODULE_0__.LoginPageRoutingModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__.TranslateModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.ReactiveFormsModule]
  });
})();

/***/ }),

/***/ 3058:
/*!*******************************************!*\
  !*** ./src/app/pages/login/login.page.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginPage": () => (/* binding */ LoginPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var http_status_codes__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! http-status-codes */ 92788);
/* harmony import */ var _popover_content_popover_content_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../popover-content/popover-content.page */ 97716);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var src_providers_auth_handler_auth_handler__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/providers/auth-handler/auth-handler */ 38590);
/* harmony import */ var src_providers_utils_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/providers/utils/config */ 43485);
/* harmony import */ var src_providers_utils_utils_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/providers/utils/utils.service */ 30423);
/* harmony import */ var src_providers_logger_service_logger_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/providers/logger-service/logger-service */ 9999);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ngx-translate/core */ 38699);
/* harmony import */ var _loginService__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./loginService */ 61390);
/* harmony import */ var src_providers_json_store_json_store__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/providers/json-store/json-store */ 15342);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _profile_getProfileDetailsService__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../profile/getProfileDetailsService */ 85059);
/* harmony import */ var _media_release_mediaService__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../media-release/mediaService */ 6615);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/common */ 94666);


















function LoginPage_div_37_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div")(1, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](3, 1, "Login.password_req"));
  }
}
function LoginPage_div_38_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div")(1, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](3, 1, "Login.passwordLength_req"));
  }
}
class LoginPage {
  constructor(router, formBuilder, authHandler, config, utils, logger, translate, loginService, jsonStore, popOverCtrl, profileService, mediaReleaseService) {
    this.router = router;
    this.formBuilder = formBuilder;
    this.authHandler = authHandler;
    this.config = config;
    this.utils = utils;
    this.logger = logger;
    this.translate = translate;
    this.loginService = loginService;
    this.jsonStore = jsonStore;
    this.popOverCtrl = popOverCtrl;
    this.profileService = profileService;
    this.mediaReleaseService = mediaReleaseService;
    this.login_terms = false;
    this.secureWordImage = "";
    this.str1 = "six";
    this.loginForm = this.formBuilder.group({
      password: ['Welcome1$', [_angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.minLength(8)]],
      secureWordCheck: [false, {
        value: false,
        disabled: false
      }]
    });
    this.userIdFromfirstLogin = history.state.usernameId.usernameFromFirstLogin;
    this.secureKey = "8a65e2905ac3db54c60d52a764854061";
    this.secureIV = "c815258cfc4a02f2";
    this.authHandler.authInit();
  }
  ngOnInit() {
    this.login_terms = false;
    this.secureWordImage = this.config.secureWordImage;
    this.loginForm.controls['password'].disable();
  }
  checkboxChange(checked) {
    // this.login_terms=!this.login_terms;
    if (checked.detail.checked) {
      this.login_terms = true;
      this.loginForm.controls['password'].enable();
    } else {
      this.login_terms = false;
      this.loginForm.controls['password'].disable();
    }
  }
  loginUser() {
    if (this.loginForm.controls.password.valid && this.loginForm.controls.secureWordCheck.value) {
      let uuid = this.utils.getDeviceId();
      var username = this.userIdFromfirstLogin;
      var pwd = this.loginForm.controls['password'].value.trim();
      var usernameUpper = username.toUpperCase();
      pwd = usernameUpper + pwd;
      var pwdHashed = this.utils.aesEncrypt(pwd, this.secureKey, this.secureIV);
      this.uNametoStore = this.utils.aesEncrypt(username, this.secureKey, this.secureIV);
      this.pwdtoStore = this.chunk(pwdHashed, 2).join('$@');
      console.log("this.pswrdtostore", this.pwdtoStore);
      this.userLoginId = username;
      /** device login authentication **/
      // if (this.utils.isDeviceOnLine()) {
      // if (this.utils.isDevice()) {
      this.utils.showProgressLoader();
      /*app has been running in mobile device*/
      this.logger.log("uuid " + uuid);
      this.loginService.userLogin(username, pwdHashed, uuid).then(res => {
        this.loginSuccess(res);
      }, err => {
        this.utils.dissmisProgressLoader();
        let errorMsg = this.utils.handleServiceException(err);
        this.utils.showAlert("", errorMsg);
      });
      //   } else {
      //     this.utils.showAlert("", this.translate.instant('Login.useMobile'));
      //   }
      // } else {
      //   let errorMsg = this.translate.instant('generic_msgs.network_err');
      //   this.utils.showAlert("", errorMsg);
      // }
    } else {
      this.logger.trace("loginPage--Form not valid--end");
    }
  }
  chunk(str, n) {
    var ret = [];
    var i;
    var len = str.length;
    for (i = 0; i < len; i += n) {
      ret.push(str.substr(i, n));
    }
    return ret;
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
          // this.events.('user:UnreadNotiUpdated', this.config.userInfo.unreadNoti);
          this.config.userInfo.notification_subs_prompt = res['responseJSON']['notification_subscription_prompt'];
          this.config.userInfo.subscribedNotitags = res['responseJSON']['notification_subscriptions'];
          this.config.userInfo.showPasswordExpirationMsgFlag = res['responseJSON']['password_change_reminder'];
          this.config.userInfo.passwordReminderMsg = res['responseJSON']['password_reminder_message'];
          this.refreshToken = res['responseJSON']['refresh_token'].trim();
          this.config.userInfo.maskedContactNumber = res['responseJSON']['contact_number'].replace(/\d(?=\d{4})/g, "*");
          this.jsonStore.addDataToJsonStore(this.jsonStore.collectionNames.userDetails, {
            id: this.uNametoStore,
            token: this.pwdtoStore
          });
          this.jsonStore.addDataToJsonStore(this.jsonStore.collectionNames.refreshToken, {
            refreshToken: this.refreshToken
          });
          /**as a work arround check and clear if already sessionTimeout has been intiated */
          /**clear session time out*/
          /**clear session time out if set*/
          if (this.config.sessionTimeout != null) {
            clearTimeout(this.config.sessionTimeout);
            this.config.sessionTimeout = null;
          }
          this.getProfileDetails();
        }
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
      try {
        //   alert(JSON.stringify(res));
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
            if (localStorage.getItem("welomeTour") == 'true') this.router.navigate(['/dashboard-after-login'], {
              state: {
                animate: true,
                direction: 'forward',
                comingFromLoginFlag: comingFromLoginFlag
              }
            });
            // this.navCtrl.setRoot(['DashboardAfterLoginPage'], comingFromLoginFlag, { animate: true, direction: 'forward' });
            else
              // this.navCtrl.setRoot(WelcomeTourPage, comingFromLoginFlag, { animate: true, direction: 'forward' });
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
      } catch (e) {
        this.utils.dissmisProgressLoader();
        this.logger.error("loginSuccess catch eror : " + JSON.stringify(e));
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
  //This mehtod is use to push the content inot the popover and display the pop over for secure word
  openPopup(e) {
    return (0,tslib__WEBPACK_IMPORTED_MODULE_12__.__awaiter)(this, void 0, void 0, function* () {
      const popover = yield this.popOverCtrl.create({
        component: _popover_content_popover_content_page__WEBPACK_IMPORTED_MODULE_0__.PopoverContentPage,
        event: e,
        componentProps: {
          msg: this.str1
        },
        cssClass: 'custom-popover'
      });
      yield popover.present();
    });
  }
  forgotPassword() {
    this.router.navigate(['/forgot-password'], {
      state: {
        usernameId: this.userIdFromfirstLogin
      }
    });
  }
}
LoginPage.ɵfac = function LoginPage_Factory(t) {
  return new (t || LoginPage)(_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_13__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](src_providers_auth_handler_auth_handler__WEBPACK_IMPORTED_MODULE_1__.AuthHandlerProvider), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](src_providers_utils_config__WEBPACK_IMPORTED_MODULE_2__.ConfigProvider), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](src_providers_utils_utils_service__WEBPACK_IMPORTED_MODULE_3__.UtilService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](src_providers_logger_service_logger_service__WEBPACK_IMPORTED_MODULE_4__.LoggerServiceProvider), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_14__.TranslateService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_loginService__WEBPACK_IMPORTED_MODULE_5__.LoginService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](src_providers_json_store_json_store__WEBPACK_IMPORTED_MODULE_6__.JsonStoreProvider), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_15__.PopoverController), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_profile_getProfileDetailsService__WEBPACK_IMPORTED_MODULE_7__.GetProfileDetailsService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_media_release_mediaService__WEBPACK_IMPORTED_MODULE_8__.MediaReleaseService));
};
LoginPage.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineComponent"]({
  type: LoginPage,
  selectors: [["app-login"]],
  decls: 46,
  vars: 27,
  consts: [["mode", "ios"], ["color", "primary"], ["slot", "start"], ["text", "", "icon", "chevron-back-outline", 2, "padding-left", "15px", "font-size", "0.7rem"], [1, "bold-font"], ["ion-padding", "", "forceOverscroll", "false", 1, "app_bg1", "text_color_base"], [1, "UserimgDiv"], [1, "welcome_txt"], [2, "margin-top", "-5%"], [1, "margin_bottom", 3, "formGroup"], [1, "white_container_border_radius", "formPadding"], [1, "marg-area", "secondLoginDiv"], ["lines", "none", 1, "margin-bottom"], [1, "row", "SecurePhrace_div"], ["onError", "this.src='assets/imgs/placeholder-image.png';", "alt", "...", 1, "SecurePhrace_Img", 3, "src"], [1, "secureTextDescr"], ["lines", "none"], [2, "width", "100%"], ["size", "1"], ["mode", "md", "formControlName", "secureWordCheck", 1, "margin_top_bottom_auto", 3, "checked", "ionChange"], ["size", "10"], ["src", "../../../assets/imgs/circle-question-solid.svg", "alt", "...", 2, "width", "15px", 3, "click"], ["lines", "none", 1, "border"], ["blockpaste", "", "formControlName", "password", "autocomplete", "off", "clearOnEdit", "false", "type", "password", 3, "placeholder"], [4, "ngIf"], ["color", "secondary", "expand", "block", 3, "disabled", "click"], [1, "login_link"], [3, "click"], [1, "fail"]],
  template: function LoginPage_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "ion-header", 0)(1, "ion-toolbar", 1)(2, "ion-buttons", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](3, "ion-back-button", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](4, "ion-title", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](5, "Login");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](6, "ion-content", 5)(7, "div", 6)(8, "p", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](9);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](10, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](11, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](12);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](13, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](14, "div", 8)(15, "form", 9)(16, "div", 10)(17, "div", 11)(18, "ion-item", 12)(19, "div", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](20, "img", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](21, "ion-label", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](22);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](23, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](24, "ion-item", 16)(25, "ion-row", 17)(26, "ion-col", 18)(27, "ion-checkbox", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("ionChange", function LoginPage_Template_ion_checkbox_ionChange_27_listener($event) {
        return ctx.checkboxChange($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](28, "ion-col", 20)(29, "ion-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](30);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](31, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](32, "ion-col", 18)(33, "img", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function LoginPage_Template_img_click_33_listener($event) {
        return ctx.openPopup($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](34, "ion-item", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](35, "ion-input", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](36, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](37, LoginPage_div_37_Template, 4, 3, "div", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](38, LoginPage_div_38_Template, 4, 3, "div", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](39, "ion-button", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function LoginPage_Template_ion_button_click_39_listener() {
        return ctx.loginUser();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](40);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](41, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](42, "div", 26)(43, "span", 27);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function LoginPage_Template_span_click_43_listener() {
        return ctx.forgotPassword();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](44);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](45, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](9);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](10, 13, "welcome"));
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](13, 15, "sunacces"));
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("formGroup", ctx.loginForm);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("src", ctx.secureWordImage, _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵsanitizeUrl"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](23, 17, "secureWord_image_description"), " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("checked", ctx.login_terms);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](31, 19, "secureWord_image_accept"));
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](36, 21, "password"));
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx.loginForm.get("password").hasError("required") && ctx.loginForm.get("password").dirty);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx.loginForm.get("password").hasError("minlength") && ctx.loginForm.get("password").dirty);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("disabled", !ctx.loginForm.valid || !ctx.login_terms);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](41, 23, "login"));
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](45, 25, "forgotpassword"), "?");
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_16__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.NgControlStatusGroup, _ionic_angular__WEBPACK_IMPORTED_MODULE_15__.IonBackButton, _ionic_angular__WEBPACK_IMPORTED_MODULE_15__.IonButton, _ionic_angular__WEBPACK_IMPORTED_MODULE_15__.IonButtons, _ionic_angular__WEBPACK_IMPORTED_MODULE_15__.IonCheckbox, _ionic_angular__WEBPACK_IMPORTED_MODULE_15__.IonCol, _ionic_angular__WEBPACK_IMPORTED_MODULE_15__.IonContent, _ionic_angular__WEBPACK_IMPORTED_MODULE_15__.IonHeader, _ionic_angular__WEBPACK_IMPORTED_MODULE_15__.IonInput, _ionic_angular__WEBPACK_IMPORTED_MODULE_15__.IonItem, _ionic_angular__WEBPACK_IMPORTED_MODULE_15__.IonLabel, _ionic_angular__WEBPACK_IMPORTED_MODULE_15__.IonRow, _ionic_angular__WEBPACK_IMPORTED_MODULE_15__.IonTitle, _ionic_angular__WEBPACK_IMPORTED_MODULE_15__.IonToolbar, _ionic_angular__WEBPACK_IMPORTED_MODULE_15__.BooleanValueAccessor, _ionic_angular__WEBPACK_IMPORTED_MODULE_15__.TextValueAccessor, _ionic_angular__WEBPACK_IMPORTED_MODULE_15__.IonBackButtonDelegate, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormControlName, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_14__.TranslatePipe],
  styles: [".app_bg1[_ngcontent-%COMP%] {\n  --background: url('register_bg.jpg') no-repeat center center / cover;\n  background-size: cover;\n  background-repeat: no-repeat;\n  height: 100%;\n  background-position: bottom;\n}\n\n.list-header[_ngcontent-%COMP%] {\n  margin-bottom: 0px !important;\n}\n\n.item[_ngcontent-%COMP%] {\n  padding-left: 0px;\n  --background: transparent;\n}\n\n.border[_ngcontent-%COMP%] {\n  --border: 1px solid #e0e0e0;\n  margin-bottom: 10px;\n}\n\n.item[_ngcontent-%COMP%]   .item-input.ng-valid.item-input-has-value[_ngcontent-%COMP%]:not(.input-has-focus):not(.item-input-has-focus)   .item-inner[_ngcontent-%COMP%], .item.item-input.ng-valid.input-has-value[_ngcontent-%COMP%]:not(.input-has-focus):not(.item-input-has-focus)   .item-inner[_ngcontent-%COMP%] {\n  border-bottom-color: none !important;\n  box-shadow: none !important;\n}\n\n.item-inner[_ngcontent-%COMP%] {\n  padding-right: 0px !important;\n  border-bottom: none !important;\n}\n\n.input[_ngcontent-%COMP%] {\n  --border: 1px solid #eee;\n  background: white;\n  font-size: 1.4rem;\n}\n\n.label[_ngcontent-%COMP%] {\n  font-size: 1.7rem !important;\n  color: #002d3d !important;\n  white-space: pre-line;\n}\n\n.welcome_txt[_ngcontent-%COMP%] {\n  text-align: center;\n  color: #002d3d;\n  font-size: 2rem !important;\n  line-height: 35px;\n  margin-top: 15% !important;\n}\n\n.item-inner[_ngcontent-%COMP%] {\n  border-bottom: none !important;\n}\n\n.input[_ngcontent-%COMP%] {\n  border: 1px solid #eee;\n  margin: 0;\n  font-size: 1.4rem !important;\n}\n\n.marg-area[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  border: medium none;\n  padding: 0 15px;\n  width: 100%;\n  border-bottom: 0px solid #e5e5e5;\n}\n\n.item-md.item-block[_ngcontent-%COMP%]   .item-inner[_ngcontent-%COMP%] {\n  padding-right: 0px;\n}\n\n.formPadding[_ngcontent-%COMP%] {\n  margin-top: -20px;\n  padding: 20px 15px;\n}\n\n.checkBox[_ngcontent-%COMP%] {\n  padding: 0px 0px 0px 20px;\n  background: transparent;\n}\n\n.checkBox[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%] {\n  padding: 0;\n  font-size: 1.4rem !important;\n  padding-top: 3px;\n  margin: 0px;\n}\n\n.login_link[_ngcontent-%COMP%] {\n  margin: 5px 0;\n  text-align: center;\n  color: #002d3d;\n}\n\n.item[_ngcontent-%COMP%]   .checkbox[_ngcontent-%COMP%] {\n  margin: 0px 10px 0px 0px !important;\n}\n\n.checkbox-icon[_ngcontent-%COMP%] {\n  border-width: 1px !important;\n}\n\n.checkbox-checked[_ngcontent-%COMP%] {\n  border-color: #002d3d !important;\n  background-color: white !important;\n  margin-right: 10px;\n}\n\n.margin_bottom[_ngcontent-%COMP%] {\n  margin-bottom: 10%;\n}\n\n.fail[_ngcontent-%COMP%] {\n  text-align: start !important;\n  color: #f00 !important;\n}\n\n.padding_015[_ngcontent-%COMP%] {\n  padding: 0px 15px;\n}\n\n.terms[_ngcontent-%COMP%] {\n  text-decoration: underline;\n  white-space: unset !important;\n  text-transform: lowercase;\n}\n\n.terms_conditions[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 1.4rem !important;\n  margin-top: 5px;\n}\n\n.canvas_background[_ngcontent-%COMP%] {\n  text-align: center;\n  background-color: #002d3d;\n  color: white;\n}\n\n.SecurePhrace_div[_ngcontent-%COMP%] {\n  margin: auto;\n}\n\n.margin-bottom[_ngcontent-%COMP%] {\n  margin-bottom: 50px;\n}\n\n.securetooltip[_ngcontent-%COMP%] {\n  position: absolute;\n  margin-top: -38px;\n  margin-left: 75%;\n}\n\n.secureTextDescr[_ngcontent-%COMP%] {\n  width: 95%;\n  text-align: justify;\n  margin: auto;\n  font-size: 18px;\n}\n\n.UserimgDiv[_ngcontent-%COMP%] {\n  margin-top: -10px;\n}\n\n.border[_ngcontent-%COMP%] {\n  border: 1px solid #e0e0e0;\n  margin-bottom: 10px;\n}\n\n.white_container_border_radius[_ngcontent-%COMP%] {\n  background-color: rgba(255, 255, 255, 0.7) !important;\n  border-radius: 15px !important;\n  margin: 15px;\n}\n\n.flex[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n\n.btn_center[_ngcontent-%COMP%] {\n  text-transform: capitalize;\n  --background: #002d3d !important;\n  color: white;\n  border-radius: 10px;\n  min-height: 40px;\n  width: 100% !important;\n  font-family: Agenda-Regular !important;\n}\n\n@media only screen and (min-height: 600px) and (min-width: 768px) {\n  .securetooltip[_ngcontent-%COMP%] {\n    position: absolute;\n    margin-top: -38px;\n    margin-left: 38%;\n  }\n  .secureDescripItem[_ngcontent-%COMP%] {\n    padding-left: 6%;\n    width: 85%;\n    margin-top: 0px;\n  }\n  .secureTextDescr[_ngcontent-%COMP%] {\n    margin-top: 0px;\n  }\n}\n.content[_ngcontent-%COMP%] {\n  display: contents;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcGFnZXMvbG9naW4vbG9naW4ucGFnZS5zY3NzIiwid2VicGFjazovLy4vLi4vLi4vLi4vQWxsJTIwUHJvamVjdHMvTWFsYXlzaWFfQ2xpZW50QXBwX1JldmFtcC9TdW5BY2Nlc3NfSW9uaWM2X1JldmFtcC9zcmMvYXBwL3BhZ2VzL2xvZ2luL2xvZ2luLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLG9FQUFBO0VBQ0Esc0JBQUE7RUFDQSw0QkFBQTtFQUNBLFlBQUE7RUFDQSwyQkFBQTtBQ0NKOztBREVBO0VBQ0ksNkJBQUE7QUNDSjs7QURFQTtFQUNJLGlCQUFBO0VBQ0EseUJBQUE7QUNDSjs7QURFQTtFQUNJLDJCQUFBO0VBQ0EsbUJBQUE7QUNDSjs7QURFQTs7RUFFSSxvQ0FBQTtFQUVBLDJCQUFBO0FDQ0o7O0FER0E7RUFDSSw2QkFBQTtFQUNBLDhCQUFBO0FDQUo7O0FER0E7RUFDSSx3QkFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7QUNBSjs7QURHQTtFQUNJLDRCQUFBO0VBQ0EseUJBQUE7RUFFQSxxQkFBQTtBQ0RKOztBRElBO0VBQ0ksa0JBQUE7RUFDQSxjQUFBO0VBQ0EsMEJBQUE7RUFFQSxpQkFBQTtFQUVBLDBCQUFBO0FDSEo7O0FET0E7RUFDSSw4QkFBQTtBQ0pKOztBRE9BO0VBQ0ksc0JBQUE7RUFDQSxTQUFBO0VBQ0EsNEJBQUE7QUNKSjs7QURPQTtFQUNJLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7RUFDQSxnQ0FBQTtBQ0pKOztBRE9BO0VBQ0ksa0JBQUE7QUNKSjs7QURPQTtFQUNJLGlCQUFBO0VBQ0Esa0JBQUE7QUNKSjs7QURPQTtFQUNJLHlCQUFBO0VBQ0EsdUJBQUE7QUNKSjs7QURPQTtFQUNJLFVBQUE7RUFDQSw0QkFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtBQ0pKOztBRFNBO0VBQ0ksYUFBQTtFQUNBLGtCQUFBO0VBRUEsY0FBQTtBQ1BKOztBRFVBO0VBQ0ksbUNBQUE7QUNQSjs7QURVQTtFQUNJLDRCQUFBO0FDUEo7O0FEVUE7RUFDSSxnQ0FBQTtFQUNBLGtDQUFBO0VBQ0Esa0JBQUE7QUNQSjs7QURXQTtFQUNJLGtCQUFBO0FDUko7O0FEV0E7RUFDSSw0QkFBQTtFQUNBLHNCQUFBO0FDUko7O0FEV0E7RUFDSSxpQkFBQTtBQ1JKOztBRFdBO0VBQ0ksMEJBQUE7RUFDQSw2QkFBQTtFQUNBLHlCQUFBO0FDUko7O0FEV0E7RUFDSSw0QkFBQTtFQUNBLGVBQUE7QUNSSjs7QURXQTtFQUNJLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSxZQUFBO0FDUko7O0FEV0E7RUFDSSxZQUFBO0FDUko7O0FEb0JBO0VBQ0ksbUJBQUE7QUNqQko7O0FEb0JBO0VBQ0ksa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0FDakJKOztBRG9CQTtFQUNJLFVBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0FDakJKOztBRHFCQTtFQUNJLGlCQUFBO0FDbEJKOztBRHdCQTtFQUNJLHlCQUFBO0VBQ0EsbUJBQUE7QUNyQko7O0FEdUJBO0VBQ0kscURBQUE7RUFDQSw4QkFBQTtFQUNBLFlBQUE7QUNwQko7O0FEdUJBO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0FDcEJKOztBRHVCQTtFQUNJLDBCQUFBO0VBQ0EsZ0NBQUE7RUFDQSxZQUFBO0VBRUEsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLHNCQUFBO0VBQ0Esc0NBQUE7QUNyQko7O0FEd0JBO0VBQ0k7SUFDSSxrQkFBQTtJQUNBLGlCQUFBO0lBQ0EsZ0JBQUE7RUNyQk47RUR3QkU7SUFDSSxnQkFBQTtJQUNBLFVBQUE7SUFDQSxlQUFBO0VDdEJOO0VEeUJFO0lBQ0ksZUFBQTtFQ3ZCTjtBQUNGO0FEMEJBO0VBQ0ksaUJBQUE7QUN4QkoiLCJzb3VyY2VzQ29udGVudCI6WyIuYXBwX2JnMSB7XHJcbiAgICAtLWJhY2tncm91bmQ6IHVybCguLi8uLi8uLi9hc3NldHMvaW1ncy9yZWdpc3Rlcl9iZy5qcGcpIG5vLXJlcGVhdCBjZW50ZXIgY2VudGVyIC8gY292ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGJvdHRvbTtcclxufVxyXG5cclxuLmxpc3QtaGVhZGVyIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDBweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uaXRlbSB7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDBweDtcclxuICAgIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbn1cclxuXHJcbi5ib3JkZXIge1xyXG4gICAgLS1ib3JkZXI6IDFweCBzb2xpZCAjZTBlMGUwO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxufVxyXG5cclxuLml0ZW0gLml0ZW0taW5wdXQubmctdmFsaWQuaXRlbS1pbnB1dC1oYXMtdmFsdWU6bm90KC5pbnB1dC1oYXMtZm9jdXMpOm5vdCguaXRlbS1pbnB1dC1oYXMtZm9jdXMpIC5pdGVtLWlubmVyLFxyXG4uaXRlbS5pdGVtLWlucHV0Lm5nLXZhbGlkLmlucHV0LWhhcy12YWx1ZTpub3QoLmlucHV0LWhhcy1mb2N1cyk6bm90KC5pdGVtLWlucHV0LWhhcy1mb2N1cykgLml0ZW0taW5uZXIge1xyXG4gICAgYm9yZGVyLWJvdHRvbS1jb2xvcjogbm9uZSAhaW1wb3J0YW50O1xyXG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7XHJcbiAgICBib3gtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7XHJcblxyXG59XHJcblxyXG4uaXRlbS1pbm5lciB7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAwcHggIWltcG9ydGFudDtcclxuICAgIGJvcmRlci1ib3R0b206IG5vbmUgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmlucHV0IHtcclxuICAgIC0tYm9yZGVyOiAxcHggc29saWQgI2VlZTtcclxuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gICAgZm9udC1zaXplOiAxLjRyZW07XHJcbn1cclxuXHJcbi5sYWJlbCB7XHJcbiAgICBmb250LXNpemU6IDEuN3JlbSAhaW1wb3J0YW50O1xyXG4gICAgY29sb3I6ICMwMDJkM2QgIWltcG9ydGFudDtcclxuICAgIC8vZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgIHdoaXRlLXNwYWNlOiBwcmUtbGluZTtcclxufVxyXG5cclxuLndlbGNvbWVfdHh0IHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGNvbG9yOiAjMDAyZDNkO1xyXG4gICAgZm9udC1zaXplOiAyLjByZW0gIWltcG9ydGFudDtcclxuICAgIC8vIG1hcmdpbjogNDBweCAwIDA7XHJcbiAgICBsaW5lLWhlaWdodDogMzVweDtcclxuICAgIC8vIG1hcmdpbi1ib3R0b206IDE1JTtcclxuICAgIG1hcmdpbi10b3A6IDE1JSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG5cclxuLml0ZW0taW5uZXIge1xyXG4gICAgYm9yZGVyLWJvdHRvbTogbm9uZSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uaW5wdXQge1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2VlZTtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIGZvbnQtc2l6ZTogMS40cmVtICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5tYXJnLWFyZWEgaW5wdXQge1xyXG4gICAgYm9yZGVyOiBtZWRpdW0gbm9uZTtcclxuICAgIHBhZGRpbmc6IDAgMTVweDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMHB4IHNvbGlkICNlNWU1ZTU7XHJcbn1cclxuXHJcbi5pdGVtLW1kLml0ZW0tYmxvY2sgLml0ZW0taW5uZXIge1xyXG4gICAgcGFkZGluZy1yaWdodDogMHB4O1xyXG59XHJcblxyXG4uZm9ybVBhZGRpbmcge1xyXG4gICAgbWFyZ2luLXRvcDogLTIwcHg7XHJcbiAgICBwYWRkaW5nOiAyMHB4IDE1cHg7XHJcbn1cclxuXHJcbi5jaGVja0JveCB7XHJcbiAgICBwYWRkaW5nOiAwcHggMHB4IDBweCAyMHB4O1xyXG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbn1cclxuXHJcbi5jaGVja0JveCAubGFiZWwge1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIGZvbnQtc2l6ZTogMS40cmVtICFpbXBvcnRhbnQ7XHJcbiAgICBwYWRkaW5nLXRvcDogM3B4O1xyXG4gICAgbWFyZ2luOiAwcHg7XHJcbn1cclxuXHJcblxyXG5cclxuLmxvZ2luX2xpbmsge1xyXG4gICAgbWFyZ2luOiA1cHggMDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIC8vIGZvbnQtc2l6ZTogMS43cmVtO1xyXG4gICAgY29sb3I6ICMwMDJkM2Q7XHJcbn1cclxuXHJcbi5pdGVtIC5jaGVja2JveCB7XHJcbiAgICBtYXJnaW46IDBweCAxMHB4IDBweCAwcHggIWltcG9ydGFudDtcclxufVxyXG5cclxuLmNoZWNrYm94LWljb24ge1xyXG4gICAgYm9yZGVyLXdpZHRoOiAxcHggIWltcG9ydGFudDtcclxufVxyXG5cclxuLmNoZWNrYm94LWNoZWNrZWQge1xyXG4gICAgYm9yZGVyLWNvbG9yOiAjMDAyZDNkICFpbXBvcnRhbnQ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG59XHJcblxyXG5cclxuLm1hcmdpbl9ib3R0b20ge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTAlO1xyXG59XHJcblxyXG4uZmFpbCB7XHJcbiAgICB0ZXh0LWFsaWduOiBzdGFydCAhaW1wb3J0YW50O1xyXG4gICAgY29sb3I6ICNmMDAgIWltcG9ydGFudDtcclxufVxyXG5cclxuLnBhZGRpbmdfMDE1IHtcclxuICAgIHBhZGRpbmc6IDBweCAxNXB4O1xyXG59XHJcblxyXG4udGVybXMge1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XHJcbiAgICB3aGl0ZS1zcGFjZTogdW5zZXQgIWltcG9ydGFudDtcclxuICAgIHRleHQtdHJhbnNmb3JtOiBsb3dlcmNhc2U7XHJcbn1cclxuXHJcbi50ZXJtc19jb25kaXRpb25zIHNwYW4ge1xyXG4gICAgZm9udC1zaXplOiAxLjRyZW0gIWltcG9ydGFudDtcclxuICAgIG1hcmdpbi10b3A6IDVweDtcclxufVxyXG5cclxuLmNhbnZhc19iYWNrZ3JvdW5kIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDJkM2Q7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbi5TZWN1cmVQaHJhY2VfZGl2IHtcclxuICAgIG1hcmdpbjogYXV0bztcclxufVxyXG5cclxuLy8gLlNlY3VyZVBocmFjZV9JbWcge1xyXG4vLyAgICAgbWFyZ2luOiBhdXRvO1xyXG4vLyAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4vLyB9XHJcblxyXG4uc2Vjb25kTG9naW5EaXYge1xyXG4gICAgLy8gbWFyZ2luLXRvcDogLTUwcHg7XHJcbn1cclxuXHJcbi5tYXJnaW4tYm90dG9tIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDUwcHg7XHJcbn1cclxuXHJcbi5zZWN1cmV0b29sdGlwIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIG1hcmdpbi10b3A6IC0zOHB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDc1JTtcclxufVxyXG5cclxuLnNlY3VyZVRleHREZXNjciB7XHJcbiAgICB3aWR0aDogOTUlO1xyXG4gICAgdGV4dC1hbGlnbjoganVzdGlmeTtcclxuICAgIG1hcmdpbjogYXV0bztcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgIC8vIG1hcmdpbi10b3A6IC0zNXB4O1xyXG59XHJcblxyXG4uVXNlcmltZ0RpdiB7XHJcbiAgICBtYXJnaW4tdG9wOiAtMTBweDtcclxufVxyXG5cclxuXHJcblxyXG5cclxuLmJvcmRlciB7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZTBlMGUwO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxufVxyXG4ud2hpdGVfY29udGFpbmVyX2JvcmRlcl9yYWRpdXMge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjcpICFpbXBvcnRhbnQ7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4ICFpbXBvcnRhbnQ7XHJcbiAgICBtYXJnaW46IDE1cHg7XHJcbn1cclxuXHJcbi5mbGV4IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4uYnRuX2NlbnRlciB7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcclxuICAgIC0tYmFja2dyb3VuZDogIzAwMmQzZCAhaW1wb3J0YW50O1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgLy8gZm9udC1zaXplOiAxLjdyZW07XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgbWluLWhlaWdodDogNDBweDtcclxuICAgIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XHJcbiAgICBmb250LWZhbWlseTogQWdlbmRhLVJlZ3VsYXIgIWltcG9ydGFudDtcclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLWhlaWdodDogNjAwcHgpIGFuZCAobWluLXdpZHRoOiA3NjhweCkge1xyXG4gICAgLnNlY3VyZXRvb2x0aXAge1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICBtYXJnaW4tdG9wOiAtMzhweDtcclxuICAgICAgICBtYXJnaW4tbGVmdDogMzglO1xyXG4gICAgfVxyXG5cclxuICAgIC5zZWN1cmVEZXNjcmlwSXRlbSB7XHJcbiAgICAgICAgcGFkZGluZy1sZWZ0OiA2JTtcclxuICAgICAgICB3aWR0aDogODUlO1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDBweDtcclxuICAgIH1cclxuXHJcbiAgICAuc2VjdXJlVGV4dERlc2NyIHtcclxuICAgICAgICBtYXJnaW4tdG9wOiAwcHg7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5jb250ZW50IHtcclxuICAgIGRpc3BsYXk6IGNvbnRlbnRzO1xyXG59XHJcbiIsIi5hcHBfYmcxIHtcbiAgLS1iYWNrZ3JvdW5kOiB1cmwoLi4vLi4vLi4vYXNzZXRzL2ltZ3MvcmVnaXN0ZXJfYmcuanBnKSBuby1yZXBlYXQgY2VudGVyIGNlbnRlciAvIGNvdmVyO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGJvdHRvbTtcbn1cblxuLmxpc3QtaGVhZGVyIHtcbiAgbWFyZ2luLWJvdHRvbTogMHB4ICFpbXBvcnRhbnQ7XG59XG5cbi5pdGVtIHtcbiAgcGFkZGluZy1sZWZ0OiAwcHg7XG4gIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG59XG5cbi5ib3JkZXIge1xuICAtLWJvcmRlcjogMXB4IHNvbGlkICNlMGUwZTA7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG5cbi5pdGVtIC5pdGVtLWlucHV0Lm5nLXZhbGlkLml0ZW0taW5wdXQtaGFzLXZhbHVlOm5vdCguaW5wdXQtaGFzLWZvY3VzKTpub3QoLml0ZW0taW5wdXQtaGFzLWZvY3VzKSAuaXRlbS1pbm5lcixcbi5pdGVtLml0ZW0taW5wdXQubmctdmFsaWQuaW5wdXQtaGFzLXZhbHVlOm5vdCguaW5wdXQtaGFzLWZvY3VzKTpub3QoLml0ZW0taW5wdXQtaGFzLWZvY3VzKSAuaXRlbS1pbm5lciB7XG4gIGJvcmRlci1ib3R0b20tY29sb3I6IG5vbmUgIWltcG9ydGFudDtcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7XG4gIGJveC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudDtcbn1cblxuLml0ZW0taW5uZXIge1xuICBwYWRkaW5nLXJpZ2h0OiAwcHggIWltcG9ydGFudDtcbiAgYm9yZGVyLWJvdHRvbTogbm9uZSAhaW1wb3J0YW50O1xufVxuXG4uaW5wdXQge1xuICAtLWJvcmRlcjogMXB4IHNvbGlkICNlZWU7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICBmb250LXNpemU6IDEuNHJlbTtcbn1cblxuLmxhYmVsIHtcbiAgZm9udC1zaXplOiAxLjdyZW0gIWltcG9ydGFudDtcbiAgY29sb3I6ICMwMDJkM2QgIWltcG9ydGFudDtcbiAgd2hpdGUtc3BhY2U6IHByZS1saW5lO1xufVxuXG4ud2VsY29tZV90eHQge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGNvbG9yOiAjMDAyZDNkO1xuICBmb250LXNpemU6IDJyZW0gIWltcG9ydGFudDtcbiAgbGluZS1oZWlnaHQ6IDM1cHg7XG4gIG1hcmdpbi10b3A6IDE1JSAhaW1wb3J0YW50O1xufVxuXG4uaXRlbS1pbm5lciB7XG4gIGJvcmRlci1ib3R0b206IG5vbmUgIWltcG9ydGFudDtcbn1cblxuLmlucHV0IHtcbiAgYm9yZGVyOiAxcHggc29saWQgI2VlZTtcbiAgbWFyZ2luOiAwO1xuICBmb250LXNpemU6IDEuNHJlbSAhaW1wb3J0YW50O1xufVxuXG4ubWFyZy1hcmVhIGlucHV0IHtcbiAgYm9yZGVyOiBtZWRpdW0gbm9uZTtcbiAgcGFkZGluZzogMCAxNXB4O1xuICB3aWR0aDogMTAwJTtcbiAgYm9yZGVyLWJvdHRvbTogMHB4IHNvbGlkICNlNWU1ZTU7XG59XG5cbi5pdGVtLW1kLml0ZW0tYmxvY2sgLml0ZW0taW5uZXIge1xuICBwYWRkaW5nLXJpZ2h0OiAwcHg7XG59XG5cbi5mb3JtUGFkZGluZyB7XG4gIG1hcmdpbi10b3A6IC0yMHB4O1xuICBwYWRkaW5nOiAyMHB4IDE1cHg7XG59XG5cbi5jaGVja0JveCB7XG4gIHBhZGRpbmc6IDBweCAwcHggMHB4IDIwcHg7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xufVxuXG4uY2hlY2tCb3ggLmxhYmVsIHtcbiAgcGFkZGluZzogMDtcbiAgZm9udC1zaXplOiAxLjRyZW0gIWltcG9ydGFudDtcbiAgcGFkZGluZy10b3A6IDNweDtcbiAgbWFyZ2luOiAwcHg7XG59XG5cbi5sb2dpbl9saW5rIHtcbiAgbWFyZ2luOiA1cHggMDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjb2xvcjogIzAwMmQzZDtcbn1cblxuLml0ZW0gLmNoZWNrYm94IHtcbiAgbWFyZ2luOiAwcHggMTBweCAwcHggMHB4ICFpbXBvcnRhbnQ7XG59XG5cbi5jaGVja2JveC1pY29uIHtcbiAgYm9yZGVyLXdpZHRoOiAxcHggIWltcG9ydGFudDtcbn1cblxuLmNoZWNrYm94LWNoZWNrZWQge1xuICBib3JkZXItY29sb3I6ICMwMDJkM2QgIWltcG9ydGFudDtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGUgIWltcG9ydGFudDtcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xufVxuXG4ubWFyZ2luX2JvdHRvbSB7XG4gIG1hcmdpbi1ib3R0b206IDEwJTtcbn1cblxuLmZhaWwge1xuICB0ZXh0LWFsaWduOiBzdGFydCAhaW1wb3J0YW50O1xuICBjb2xvcjogI2YwMCAhaW1wb3J0YW50O1xufVxuXG4ucGFkZGluZ18wMTUge1xuICBwYWRkaW5nOiAwcHggMTVweDtcbn1cblxuLnRlcm1zIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG4gIHdoaXRlLXNwYWNlOiB1bnNldCAhaW1wb3J0YW50O1xuICB0ZXh0LXRyYW5zZm9ybTogbG93ZXJjYXNlO1xufVxuXG4udGVybXNfY29uZGl0aW9ucyBzcGFuIHtcbiAgZm9udC1zaXplOiAxLjRyZW0gIWltcG9ydGFudDtcbiAgbWFyZ2luLXRvcDogNXB4O1xufVxuXG4uY2FudmFzX2JhY2tncm91bmQge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDJkM2Q7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLlNlY3VyZVBocmFjZV9kaXYge1xuICBtYXJnaW46IGF1dG87XG59XG5cbi5tYXJnaW4tYm90dG9tIHtcbiAgbWFyZ2luLWJvdHRvbTogNTBweDtcbn1cblxuLnNlY3VyZXRvb2x0aXAge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIG1hcmdpbi10b3A6IC0zOHB4O1xuICBtYXJnaW4tbGVmdDogNzUlO1xufVxuXG4uc2VjdXJlVGV4dERlc2NyIHtcbiAgd2lkdGg6IDk1JTtcbiAgdGV4dC1hbGlnbjoganVzdGlmeTtcbiAgbWFyZ2luOiBhdXRvO1xuICBmb250LXNpemU6IDE4cHg7XG59XG5cbi5Vc2VyaW1nRGl2IHtcbiAgbWFyZ2luLXRvcDogLTEwcHg7XG59XG5cbi5ib3JkZXIge1xuICBib3JkZXI6IDFweCBzb2xpZCAjZTBlMGUwO1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufVxuXG4ud2hpdGVfY29udGFpbmVyX2JvcmRlcl9yYWRpdXMge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNykgIWltcG9ydGFudDtcbiAgYm9yZGVyLXJhZGl1czogMTVweCAhaW1wb3J0YW50O1xuICBtYXJnaW46IDE1cHg7XG59XG5cbi5mbGV4IHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLmJ0bl9jZW50ZXIge1xuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbiAgLS1iYWNrZ3JvdW5kOiAjMDAyZDNkICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgbWluLWhlaWdodDogNDBweDtcbiAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcbiAgZm9udC1mYW1pbHk6IEFnZW5kYS1SZWd1bGFyICFpbXBvcnRhbnQ7XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi1oZWlnaHQ6IDYwMHB4KSBhbmQgKG1pbi13aWR0aDogNzY4cHgpIHtcbiAgLnNlY3VyZXRvb2x0aXAge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBtYXJnaW4tdG9wOiAtMzhweDtcbiAgICBtYXJnaW4tbGVmdDogMzglO1xuICB9XG4gIC5zZWN1cmVEZXNjcmlwSXRlbSB7XG4gICAgcGFkZGluZy1sZWZ0OiA2JTtcbiAgICB3aWR0aDogODUlO1xuICAgIG1hcmdpbi10b3A6IDBweDtcbiAgfVxuICAuc2VjdXJlVGV4dERlc2NyIHtcbiAgICBtYXJnaW4tdG9wOiAwcHg7XG4gIH1cbn1cbi5jb250ZW50IHtcbiAgZGlzcGxheTogY29udGVudHM7XG59Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ })

}]);
//# sourceMappingURL=src_app_pages_login_login_module_ts.js.map