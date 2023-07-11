"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_update-secure-word_update-secure-word_module_ts"],{

/***/ 66327:
/*!*******************************************************************************!*\
  !*** ./src/app/pages/update-secure-word/update-secure-word-routing.module.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UpdateSecureWordPageRoutingModule": () => (/* binding */ UpdateSecureWordPageRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _update_secure_word_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./update-secure-word.page */ 54831);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);




const routes = [{
  path: '',
  component: _update_secure_word_page__WEBPACK_IMPORTED_MODULE_0__.UpdateSecureWordPage
}];
class UpdateSecureWordPageRoutingModule {}
UpdateSecureWordPageRoutingModule.ɵfac = function UpdateSecureWordPageRoutingModule_Factory(t) {
  return new (t || UpdateSecureWordPageRoutingModule)();
};
UpdateSecureWordPageRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
  type: UpdateSecureWordPageRoutingModule
});
UpdateSecureWordPageRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](UpdateSecureWordPageRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
})();

/***/ }),

/***/ 3236:
/*!***********************************************************************!*\
  !*** ./src/app/pages/update-secure-word/update-secure-word.module.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UpdateSecureWordPageModule": () => (/* binding */ UpdateSecureWordPageModule)
/* harmony export */ });
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ 38699);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _update_secure_word_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./update-secure-word-routing.module */ 66327);
/* harmony import */ var _update_secure_word_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./update-secure-word.page */ 54831);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);







class UpdateSecureWordPageModule {}
UpdateSecureWordPageModule.ɵfac = function UpdateSecureWordPageModule_Factory(t) {
  return new (t || UpdateSecureWordPageModule)();
};
UpdateSecureWordPageModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
  type: UpdateSecureWordPageModule
});
UpdateSecureWordPageModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__.TranslateModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.ReactiveFormsModule, _update_secure_word_routing_module__WEBPACK_IMPORTED_MODULE_0__.UpdateSecureWordPageRoutingModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](UpdateSecureWordPageModule, {
    declarations: [_update_secure_word_page__WEBPACK_IMPORTED_MODULE_1__.UpdateSecureWordPage],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__.TranslateModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.ReactiveFormsModule, _update_secure_word_routing_module__WEBPACK_IMPORTED_MODULE_0__.UpdateSecureWordPageRoutingModule]
  });
})();

/***/ }),

/***/ 54831:
/*!*********************************************************************!*\
  !*** ./src/app/pages/update-secure-word/update-secure-word.page.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UpdateSecureWordPage": () => (/* binding */ UpdateSecureWordPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _popover_content_popover_content_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../popover-content/popover-content.page */ 97716);
/* harmony import */ var http_status_codes__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! http-status-codes */ 92788);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var src_providers_utils_utils_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/providers/utils/utils.service */ 30423);
/* harmony import */ var src_providers_utils_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/providers/utils/config */ 43485);
/* harmony import */ var _updateSecureWordService__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./updateSecureWordService */ 47279);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var src_providers_auth_handler_auth_handler__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/providers/auth-handler/auth-handler */ 38590);
/* harmony import */ var src_providers_json_store_json_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/providers/json-store/json-store */ 15342);
/* harmony import */ var src_providers_logger_service_logger_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/providers/logger-service/logger-service */ 9999);
/* harmony import */ var _login_loginService__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../login/loginService */ 61390);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ngx-translate/core */ 38699);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var src_app_services_translate_config_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/translate-config.service */ 45340);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/common */ 94666);


















function UpdateSecureWordPage_section_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "section", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](1, "ion-spinner", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
}
function UpdateSecureWordPage_div_9_div_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 22)(1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](3, 1, "update_secure_word.newSecureWordrequired"));
  }
}
function UpdateSecureWordPage_div_9_div_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 22)(1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](3, 1, "update_secure_word.minNewSecureWord"));
  }
}
function UpdateSecureWordPage_div_9_div_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 22)(1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](3, 1, "update_secure_word.maxNewSecureWord"));
  }
}
function UpdateSecureWordPage_div_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 10)(1, "form", 11)(2, "p", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](5, "ion-item", 13)(6, "div")(7, "img", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("load", function UpdateSecureWordPage_div_9_Template_img_load_7_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r6);
      const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r5.loaded = true);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](8, "p", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](10, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](11, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](12, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](13, "ion-item", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](14, "ion-input", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](15, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](16, UpdateSecureWordPage_div_9_div_16_Template, 4, 3, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](17, UpdateSecureWordPage_div_9_div_17_Template, 4, 3, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](18, UpdateSecureWordPage_div_9_div_18_Template, 4, 3, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](19, "ion-row", 20)(20, "ion-col")(21, "ion-button", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function UpdateSecureWordPage_div_9_Template_ion_button_click_21_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r6);
      const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r7.changeSecureWord());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](23, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("formGroup", ctx_r1.changeSecureWordForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](4, 10, "update_secure_word.existing_wrd"));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("src", ctx_r1.secureWordImage, _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](10, 12, "update_secure_word.placeholder_new_wrd"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](15, 14, "update_secure_word.placeholder_new_wrd"));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r1.changeSecureWordForm.get("newSecureWord").hasError("required") && ctx_r1.changeSecureWordForm.get("newSecureWord").touched);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r1.changeSecureWordForm.get("newSecureWord").hasError("minlength") && ctx_r1.changeSecureWordForm.get("newSecureWord").touched);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r1.changeSecureWordForm.get("newSecureWord").hasError("maxlength") && ctx_r1.changeSecureWordForm.get("newSecureWord").touched);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("disabled", !ctx_r1.changeSecureWordForm.valid);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](23, 16, "update_secure_word.reset"));
  }
}
class UpdateSecureWordPage {
  constructor(utils, config, changeSecureWordService, alertCtrl, authHandler, jsonStore, logger, loginService, popOverCtrl, translate, router, translateConfigService) {
    this.utils = utils;
    this.config = config;
    this.changeSecureWordService = changeSecureWordService;
    this.alertCtrl = alertCtrl;
    this.authHandler = authHandler;
    this.jsonStore = jsonStore;
    this.logger = logger;
    this.loginService = loginService;
    this.popOverCtrl = popOverCtrl;
    this.translate = translate;
    this.router = router;
    this.translateConfigService = translateConfigService;
    this.isShowingLoader = false;
    this.str1 = "five";
    this.gotoDashbaordAfterUpdate = false;
    this.secureWordImage = "assets/imgs/placeholder-image.png";
    this.selectedLanguage = this.translateConfigService.getDefaultLanguage();
    this.translateConfigService.setLanguage('en');
    this.utils.analytics("changeSecureWord");
    this.config.currentPage.pageName = "UpdateSecureWordPage";
    //this.gotoDashbaordAfterUpdate=history.state.gotoDashboard;
    this.secureWordImage = this.config.secureWordImage;
    this.utils.dissmisProgressLoader();
  }
  ngOnInit() {
    this.changeSecureWordForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormGroup({
      newSecureWord: new _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.minLength(4), _angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.maxLength(10)])
    });
  }
  changeSecureWord() {
    if (this.changeSecureWordForm.valid) {
      let newSecureWordVal = this.changeSecureWordForm.controls['newSecureWord'].value.trim();
      if (this.utils.isDeviceOnLine()) {
        this.utils.showProgressLoader();
        this.changeSecureWordService.changeSecureWordService(newSecureWordVal).then(res => {
          try {
            if (res['responseJSON']) {
              if (res['responseJSON']['statusCode'] == http_status_codes__WEBPACK_IMPORTED_MODULE_11__.ACCEPTED || res['responseJSON']['statusCode'] == http_status_codes__WEBPACK_IMPORTED_MODULE_11__.OK) {
                let msg = this.translate.instant('update_secure_word.change_wrd_success_txt');
                let errorMsg = res['responseJSON']['userMessage'] || msg;
                this.isSuccess = true;
                this.utils.dissmisProgressLoader();
                this.showDialog("", errorMsg);
              }
            } else {
              let errorMsg = this.translate.instant('update_secure_word.change_pwd_success_txt');
              this.isSuccess = true;
              this.utils.dissmisProgressLoader();
              this.showDialog("", errorMsg);
            }
          } catch (e) {
            this.utils.dissmisProgressLoader();
            this.isSuccess = false;
            this.logger.error("loginSuccess catch eror : " + JSON.stringify(e));
            let errorMsg = this.translate.instant('generic_msgs.server_err');
            this.utils.showAlert("", errorMsg);
          }
        }, err => {
          this.utils.dissmisProgressLoader();
          this.isSuccess = false;
          let errorMsg = this.utils.handleServiceException(err);
          this.utils.showAlert("", errorMsg);
        });
      } else {
        this.utils.dissmisProgressLoader();
        this.isSuccess = false;
        let errorMsg = this.translate.instant('generic_msgs.network_err');
        this.utils.showAlert("", errorMsg);
      }
    }
  }
  showDialog(title, message) {
    let buttons = [{
      text: 'Ok',
      handler: () => {
        if (this.gotoDashbaordAfterUpdate) {
          this.router.navigate(['/dashboard-after-login'], {
            state: {
              animate: true,
              direction: 'forward'
            }
          });
          //this.navCtrl.setRoot(DashboardAfterLoginPage, { animate: true, direction: 'forward' });
        } else {
          //this.navCtrl.pop();
        }
      }
    }];
    const alert = this.alertCtrl.create({
      header: title,
      message: message,
      buttons: buttons
    }).then(alert => alert.present());
  }
  openPopup(e) {
    return (0,tslib__WEBPACK_IMPORTED_MODULE_12__.__awaiter)(this, void 0, void 0, function* () {
      const popover = yield this.popOverCtrl.create({
        component: _popover_content_popover_content_page__WEBPACK_IMPORTED_MODULE_0__.PopoverContentPage,
        showBackdrop: false,
        event: e,
        componentProps: {
          msg: this.str1
        },
        cssClass: 'custom-popover'
      });
      yield popover.present();
    });
  }
}
UpdateSecureWordPage.ɵfac = function UpdateSecureWordPage_Factory(t) {
  return new (t || UpdateSecureWordPage)(_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](src_providers_utils_utils_service__WEBPACK_IMPORTED_MODULE_1__.UtilService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](src_providers_utils_config__WEBPACK_IMPORTED_MODULE_2__.ConfigProvider), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_updateSecureWordService__WEBPACK_IMPORTED_MODULE_3__.UpdateSecureWordService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_13__.AlertController), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](src_providers_auth_handler_auth_handler__WEBPACK_IMPORTED_MODULE_4__.AuthHandlerProvider), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](src_providers_json_store_json_store__WEBPACK_IMPORTED_MODULE_5__.JsonStoreProvider), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](src_providers_logger_service_logger_service__WEBPACK_IMPORTED_MODULE_6__.LoggerServiceProvider), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_login_loginService__WEBPACK_IMPORTED_MODULE_7__.LoginService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_13__.PopoverController), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_14__.TranslateService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_15__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](src_app_services_translate_config_service__WEBPACK_IMPORTED_MODULE_8__.TranslateConfigService));
};
UpdateSecureWordPage.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineComponent"]({
  type: UpdateSecureWordPage,
  selectors: [["app-update-secure-word"]],
  decls: 10,
  vars: 5,
  consts: [["mode", "ios"], ["color", "primary", 1, "toolbar"], ["slot", "start"], ["text", "", "icon", "chevron-back-outline", 2, "padding-left", "15px", "font-size", "0.7rem"], [1, "bold-font"], ["no-bounce", "", 1, "app_bg1", "text_color_base", "padding_15", "ion-padding"], ["class", "spinnersection ion-text-center", 4, "ngIf"], ["class", "white_container_border_radius padding_015", 4, "ngIf"], [1, "spinnersection", "ion-text-center"], ["name", "lines-sharp-small", 2, "height", "98%"], [1, "white_container_border_radius", "padding_015"], [3, "formGroup"], ["position", "stacked", 1, "SecureLabel", 2, "padding-top", "10px", "padding-bottom", "10px"], ["lines", "none", "lines", "none", 1, "SecurePhrace_div", 2, "background", "lightgrey"], ["alt", "...", 1, "SecurePhrace_Img", 3, "src", "load"], ["position", "stacked"], [1, "mandatory_star"], ["lines", "none", 1, "border"], ["restrict-input", "", "restrictInput", "alphanumericwithspace", "type", "text", "formControlName", "newSecureWord", 1, "newPassword", 3, "placeholder"], ["class", "fail", 4, "ngIf"], ["text-center", "", "align-items-center", "", 1, "padding_150"], [1, "btn_center", 3, "disabled", "click"], [1, "fail"]],
  template: function UpdateSecureWordPage_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "ion-header", 0)(1, "ion-toolbar", 1)(2, "ion-buttons", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](3, "ion-back-button", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](4, "ion-title", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](6, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](7, "ion-content", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](8, UpdateSecureWordPage_section_8_Template, 2, 0, "section", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](9, UpdateSecureWordPage_div_9_Template, 24, 18, "div", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](6, 3, "update_secure_word.title"), " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx.isShowingLoader);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", !ctx.isShowingLoader);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_16__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.NgControlStatusGroup, _ionic_angular__WEBPACK_IMPORTED_MODULE_13__.IonBackButton, _ionic_angular__WEBPACK_IMPORTED_MODULE_13__.IonButton, _ionic_angular__WEBPACK_IMPORTED_MODULE_13__.IonButtons, _ionic_angular__WEBPACK_IMPORTED_MODULE_13__.IonCol, _ionic_angular__WEBPACK_IMPORTED_MODULE_13__.IonContent, _ionic_angular__WEBPACK_IMPORTED_MODULE_13__.IonHeader, _ionic_angular__WEBPACK_IMPORTED_MODULE_13__.IonInput, _ionic_angular__WEBPACK_IMPORTED_MODULE_13__.IonItem, _ionic_angular__WEBPACK_IMPORTED_MODULE_13__.IonRow, _ionic_angular__WEBPACK_IMPORTED_MODULE_13__.IonSpinner, _ionic_angular__WEBPACK_IMPORTED_MODULE_13__.IonTitle, _ionic_angular__WEBPACK_IMPORTED_MODULE_13__.IonToolbar, _ionic_angular__WEBPACK_IMPORTED_MODULE_13__.TextValueAccessor, _ionic_angular__WEBPACK_IMPORTED_MODULE_13__.IonBackButtonDelegate, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormControlName, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_14__.TranslatePipe],
  styles: [".app_bg1[_ngcontent-%COMP%] {\n  --background: url('register_bg.jpg') no-repeat center center / cover;\n  background-size: cover;\n  background-repeat: no-repeat;\n  height: 100%;\n  background-position: bottom;\n}\n\n.white_container_border_radius[_ngcontent-%COMP%] {\n  background-color: rgba(255, 255, 255, 0.7) !important;\n  border-radius: 15px !important;\n}\n\n.spinnersection[_ngcontent-%COMP%] {\n  display: block;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  font-size: 1.3rem;\n  height: 98%;\n}\n\n.padding_015[_ngcontent-%COMP%] {\n  padding: 0px 15px;\n}\n\n.padding_15[_ngcontent-%COMP%] {\n  padding: 15px;\n}\n\n.mandatory_star[_ngcontent-%COMP%] {\n  color: #f00;\n}\n\n.padding_150[_ngcontent-%COMP%] {\n  padding: 15px 0px !important;\n}\n\n.btn_center[_ngcontent-%COMP%] {\n  text-transform: capitalize;\n  --background: #002d3d !important;\n  color: white;\n  --border-radius: 10px;\n  min-height: 40px;\n  width: 100% !important;\n  font-family: Agenda-Regular !important;\n}\n\n.item[_ngcontent-%COMP%] {\n  padding-left: 0px;\n  background: transparent;\n}\n\n.item[_ngcontent-%COMP%]   .item-input.ng-valid.item-input-has-value[_ngcontent-%COMP%]:not(.input-has-focus):not(.item-input-has-focus)   .item-inner[_ngcontent-%COMP%], .item.item-input.ng-valid.input-has-value[_ngcontent-%COMP%]:not(.input-has-focus):not(.item-input-has-focus)   .item-inner[_ngcontent-%COMP%] {\n  border-bottom-color: none !important;\n  box-shadow: none !important;\n}\n\n.item-inner[_ngcontent-%COMP%] {\n  padding-right: 0px !important;\n  border-bottom: none !important;\n}\n\n.input[_ngcontent-%COMP%] {\n  border: 1px solid #eee;\n  padding: 3px 15px;\n  background: white;\n  font-size: 1.4rem;\n}\n\n.label[_ngcontent-%COMP%] {\n  margin-bottom: 5px !important;\n  font-size: 1.8rem !important;\n  color: #002d3d !important;\n  font-weight: 400;\n}\n\np[_ngcontent-%COMP%] {\n  font-size: 1.2rem !important;\n  margin: 10px 0px 5px 0px;\n}\n\n.italic_font[_ngcontent-%COMP%] {\n  font-style: italic;\n  margin: 7px 0px;\n}\n\n.sucess[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: #002d3d !important;\n}\n\n.fail[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: #f00 !important;\n}\n\n.sucess[_ngcontent-%COMP%] {\n  text-align: start !important;\n}\n\n.fail[_ngcontent-%COMP%] {\n  text-align: start !important;\n}\n\nform[_ngcontent-%COMP%] {\n  padding: 0px 15px !important;\n}\n\n.newPassword[_ngcontent-%COMP%]   .text-input[_ngcontent-%COMP%] {\n  margin: 8px 8px 8px 0px !important;\n}\n\np[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  font-size: 0.85em;\n  float: right;\n  padding: 5px;\n}\n\ns[_ngcontent-%COMP%]   .SecurePhrace_div[_ngcontent-%COMP%] {\n  --bakground:#D3D3D3;\n  align-items: center;\n}\n\n.SecureLabel[_ngcontent-%COMP%] {\n  margin-bottom: -10px !important;\n}\n\n.SecurePhrace_Img[_ngcontent-%COMP%] {\n  margin: auto;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcGFnZXMvdXBkYXRlLXNlY3VyZS13b3JkL3VwZGF0ZS1zZWN1cmUtd29yZC5wYWdlLnNjc3MiLCJ3ZWJwYWNrOi8vLi8uLi8uLi8uLi9BbGwlMjBQcm9qZWN0cy9NYWxheXNpYV9DbGllbnRBcHBfUmV2YW1wL1N1bkFjY2Vzc19Jb25pYzZfUmV2YW1wL3NyYy9hcHAvcGFnZXMvdXBkYXRlLXNlY3VyZS13b3JkL3VwZGF0ZS1zZWN1cmUtd29yZC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxvRUFBQTtFQUNBLHNCQUFBO0VBQ0EsNEJBQUE7RUFDQSxZQUFBO0VBQ0EsMkJBQUE7QUNDRjs7QURDQTtFQUNFLHFEQUFBO0VBQ0EsOEJBQUE7QUNFRjs7QURBQTtFQUNFLGNBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLFdBQUE7QUNHRjs7QUREQTtFQUNFLGlCQUFBO0FDSUY7O0FERkE7RUFDRSxhQUFBO0FDS0Y7O0FESEE7RUFDRSxXQUFBO0FDTUY7O0FESkE7RUFDRSw0QkFBQTtBQ09GOztBRExBO0VBQ0UsMEJBQUE7RUFDQSxnQ0FBQTtFQUNBLFlBQUE7RUFHQSxxQkFBQTtFQUNBLGdCQUFBO0VBQ0Esc0JBQUE7RUFDQSxzQ0FBQTtBQ01GOztBREhBO0VBQ0UsaUJBQUE7RUFDQSx1QkFBQTtBQ01GOztBREhBO0VBQ0Usb0NBQUE7RUFFQSwyQkFBQTtBQ01GOztBREZBO0VBQ0MsNkJBQUE7RUFDQSw4QkFBQTtBQ0tEOztBREZBO0VBQ0Usc0JBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7QUNLRjs7QURGQTtFQUNFLDZCQUFBO0VBQ0EsNEJBQUE7RUFDQSx5QkFBQTtFQUNBLGdCQUFBO0FDS0Y7O0FESEE7RUFDQyw0QkFBQTtFQUNBLHdCQUFBO0FDTUQ7O0FESEE7RUFDQyxrQkFBQTtFQUNBLGVBQUE7QUNNRDs7QURIQTtFQUNDLHlCQUFBO0FDTUQ7O0FESkE7RUFDQSxzQkFBQTtBQ09BOztBRExBO0VBQ0UsNEJBQUE7QUNRRjs7QUROQTtFQUNBLDRCQUFBO0FDU0E7O0FETkE7RUFDRSw0QkFBQTtBQ1NGOztBRE5BO0VBQ0csa0NBQUE7QUNTSDs7QUROQTtFQUNFLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7QUNTRjs7QURSQztFQUdELG1CQUFBO0VBQ0EsbUJBQUE7QUNTQTs7QURQQTtFQUNBLCtCQUFBO0FDVUE7O0FEUkE7RUFDQSxZQUFBO0FDV0EiLCJzb3VyY2VzQ29udGVudCI6WyIuYXBwX2JnMXtcclxuICAtLWJhY2tncm91bmQ6IHVybCguLi8uLi8uLi9hc3NldHMvaW1ncy9yZWdpc3Rlcl9iZy5qcGcpIG5vLXJlcGVhdCBjZW50ZXIgY2VudGVyIC8gY292ZXI7XHJcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBib3R0b207XHJcbn1cclxuLndoaXRlX2NvbnRhaW5lcl9ib3JkZXJfcmFkaXVzIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNykgIWltcG9ydGFudDtcclxuICBib3JkZXItcmFkaXVzOiAxNXB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuLnNwaW5uZXJzZWN0aW9uIHtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgZm9udC1zaXplOiAxLjNyZW07XHJcbiAgaGVpZ2h0OiA5OCU7XHJcbn1cclxuLnBhZGRpbmdfMDE1IHtcclxuICBwYWRkaW5nOiAwcHggMTVweDtcclxufVxyXG4ucGFkZGluZ18xNSB7XHJcbiAgcGFkZGluZzogMTVweDtcclxufVxyXG4ubWFuZGF0b3J5X3N0YXIge1xyXG4gIGNvbG9yOiAjZjAwO1xyXG59XHJcbi5wYWRkaW5nXzE1MHtcclxuICBwYWRkaW5nOiAxNXB4IDBweCAhaW1wb3J0YW50O1xyXG59XHJcbi5idG5fY2VudGVyIHtcclxuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcclxuICAtLWJhY2tncm91bmQ6ICMwMDJkM2QgIWltcG9ydGFudDtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgLy9tYXJnaW4tdG9wOiAxNXB4O1xyXG4gIC8vZm9udC1zaXplOiAxLjdyZW07XHJcbiAgLS1ib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gIG1pbi1oZWlnaHQ6IDQwcHg7XHJcbiAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcclxuICBmb250LWZhbWlseTogQWdlbmRhLVJlZ3VsYXIgIWltcG9ydGFudDtcclxufVxyXG5cclxuLml0ZW17XHJcbiAgcGFkZGluZy1sZWZ0OiAwcHg7XHJcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbn1cclxuXHJcbi5pdGVtIC5pdGVtLWlucHV0Lm5nLXZhbGlkLml0ZW0taW5wdXQtaGFzLXZhbHVlOm5vdCguaW5wdXQtaGFzLWZvY3VzKTpub3QoLml0ZW0taW5wdXQtaGFzLWZvY3VzKSAuaXRlbS1pbm5lciwgLml0ZW0uaXRlbS1pbnB1dC5uZy12YWxpZC5pbnB1dC1oYXMtdmFsdWU6bm90KC5pbnB1dC1oYXMtZm9jdXMpOm5vdCguaXRlbS1pbnB1dC1oYXMtZm9jdXMpIC5pdGVtLWlubmVye1xyXG4gIGJvcmRlci1ib3R0b20tY29sb3I6IG5vbmUgIWltcG9ydGFudDtcclxuICAtd2Via2l0LWJveC1zaGFkb3cgOiBub25lICFpbXBvcnRhbnQ7XHJcbiAgYm94LXNoYWRvdyA6IG5vbmUgIWltcG9ydGFudDtcclxuXHJcbn1cclxuXHJcbi5pdGVtLWlubmVye1xyXG4gcGFkZGluZy1yaWdodDogMHB4ICFpbXBvcnRhbnQ7XHJcbiBib3JkZXItYm90dG9tOiBub25lICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5pbnB1dHtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjZWVlO1xyXG4gIHBhZGRpbmc6IDNweCAxNXB4O1xyXG4gIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gIGZvbnQtc2l6ZTogMS40cmVtO1xyXG59XHJcblxyXG4ubGFiZWx7XHJcbiAgbWFyZ2luLWJvdHRvbTo1cHggIWltcG9ydGFudDtcclxuICBmb250LXNpemU6IDEuOHJlbSAhaW1wb3J0YW50O1xyXG4gIGNvbG9yOiAjMDAyZDNkIWltcG9ydGFudDtcclxuICBmb250LXdlaWdodDogNDAwO1xyXG59XHJcbnB7XHJcbiBmb250LXNpemU6ICAxLjJyZW0gIWltcG9ydGFudDtcclxuIG1hcmdpbjogMTBweCAwcHggNXB4IDBweDtcclxufVxyXG5cclxuLml0YWxpY19mb250e1xyXG4gZm9udC1zdHlsZTogaXRhbGljO1xyXG4gbWFyZ2luOiA3cHggMHB4O1xyXG59XHJcblxyXG4uc3VjZXNzIHNwYW57XHJcbiBjb2xvciA6ICAjMDAyZDNkIWltcG9ydGFudDtcclxufVxyXG4uZmFpbCBzcGFue1xyXG5jb2xvciA6ICNmMDAgIWltcG9ydGFudDtcclxufVxyXG4uc3VjZXNze1xyXG4gIHRleHQtYWxpZ246IHN0YXJ0ICFpbXBvcnRhbnQ7XHJcbn1cclxuLmZhaWx7XHJcbnRleHQtYWxpZ246IHN0YXJ0ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbmZvcm0ge1xyXG4gIHBhZGRpbmc6IDBweCAxNXB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5uZXdQYXNzd29yZCAudGV4dC1pbnB1dHtcclxuICAgbWFyZ2luOiA4cHggOHB4IDhweCAwcHggIWltcG9ydGFudDtcclxufVxyXG5cclxucCBpb24taWNvbntcclxuICBmb250LXNpemU6IDAuODVlbTtcclxuICBmbG9hdDogcmlnaHQ7XHJcbiAgcGFkZGluZzogNXB4O1xyXG59c1xyXG4uU2VjdXJlUGhyYWNlX2RpdntcclxuLy9iYWNrZ3JvdW5kLWNvbG9yOiBMaWdodGdyZXk7XHJcbi0tYmFrZ3JvdW5kOiNEM0QzRDM7XHJcbmFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuLlNlY3VyZUxhYmVse1xyXG5tYXJnaW4tYm90dG9tOiAtMTBweCAhaW1wb3J0YW50O1xyXG59XHJcbi5TZWN1cmVQaHJhY2VfSW1ne1xyXG5tYXJnaW46IGF1dG87XHJcbn1cclxuXHJcbiIsIi5hcHBfYmcxIHtcbiAgLS1iYWNrZ3JvdW5kOiB1cmwoLi4vLi4vLi4vYXNzZXRzL2ltZ3MvcmVnaXN0ZXJfYmcuanBnKSBuby1yZXBlYXQgY2VudGVyIGNlbnRlciAvIGNvdmVyO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGJvdHRvbTtcbn1cblxuLndoaXRlX2NvbnRhaW5lcl9ib3JkZXJfcmFkaXVzIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjcpICFpbXBvcnRhbnQ7XG4gIGJvcmRlci1yYWRpdXM6IDE1cHggIWltcG9ydGFudDtcbn1cblxuLnNwaW5uZXJzZWN0aW9uIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBmb250LXNpemU6IDEuM3JlbTtcbiAgaGVpZ2h0OiA5OCU7XG59XG5cbi5wYWRkaW5nXzAxNSB7XG4gIHBhZGRpbmc6IDBweCAxNXB4O1xufVxuXG4ucGFkZGluZ18xNSB7XG4gIHBhZGRpbmc6IDE1cHg7XG59XG5cbi5tYW5kYXRvcnlfc3RhciB7XG4gIGNvbG9yOiAjZjAwO1xufVxuXG4ucGFkZGluZ18xNTAge1xuICBwYWRkaW5nOiAxNXB4IDBweCAhaW1wb3J0YW50O1xufVxuXG4uYnRuX2NlbnRlciB7XG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xuICAtLWJhY2tncm91bmQ6ICMwMDJkM2QgIWltcG9ydGFudDtcbiAgY29sb3I6IHdoaXRlO1xuICAtLWJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIG1pbi1oZWlnaHQ6IDQwcHg7XG4gIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XG4gIGZvbnQtZmFtaWx5OiBBZ2VuZGEtUmVndWxhciAhaW1wb3J0YW50O1xufVxuXG4uaXRlbSB7XG4gIHBhZGRpbmctbGVmdDogMHB4O1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbn1cblxuLml0ZW0gLml0ZW0taW5wdXQubmctdmFsaWQuaXRlbS1pbnB1dC1oYXMtdmFsdWU6bm90KC5pbnB1dC1oYXMtZm9jdXMpOm5vdCguaXRlbS1pbnB1dC1oYXMtZm9jdXMpIC5pdGVtLWlubmVyLCAuaXRlbS5pdGVtLWlucHV0Lm5nLXZhbGlkLmlucHV0LWhhcy12YWx1ZTpub3QoLmlucHV0LWhhcy1mb2N1cyk6bm90KC5pdGVtLWlucHV0LWhhcy1mb2N1cykgLml0ZW0taW5uZXIge1xuICBib3JkZXItYm90dG9tLWNvbG9yOiBub25lICFpbXBvcnRhbnQ7XG4gIC13ZWJraXQtYm94LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50O1xuICBib3gtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7XG59XG5cbi5pdGVtLWlubmVyIHtcbiAgcGFkZGluZy1yaWdodDogMHB4ICFpbXBvcnRhbnQ7XG4gIGJvcmRlci1ib3R0b206IG5vbmUgIWltcG9ydGFudDtcbn1cblxuLmlucHV0IHtcbiAgYm9yZGVyOiAxcHggc29saWQgI2VlZTtcbiAgcGFkZGluZzogM3B4IDE1cHg7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICBmb250LXNpemU6IDEuNHJlbTtcbn1cblxuLmxhYmVsIHtcbiAgbWFyZ2luLWJvdHRvbTogNXB4ICFpbXBvcnRhbnQ7XG4gIGZvbnQtc2l6ZTogMS44cmVtICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiAjMDAyZDNkICFpbXBvcnRhbnQ7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG59XG5cbnAge1xuICBmb250LXNpemU6IDEuMnJlbSAhaW1wb3J0YW50O1xuICBtYXJnaW46IDEwcHggMHB4IDVweCAwcHg7XG59XG5cbi5pdGFsaWNfZm9udCB7XG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcbiAgbWFyZ2luOiA3cHggMHB4O1xufVxuXG4uc3VjZXNzIHNwYW4ge1xuICBjb2xvcjogIzAwMmQzZCAhaW1wb3J0YW50O1xufVxuXG4uZmFpbCBzcGFuIHtcbiAgY29sb3I6ICNmMDAgIWltcG9ydGFudDtcbn1cblxuLnN1Y2VzcyB7XG4gIHRleHQtYWxpZ246IHN0YXJ0ICFpbXBvcnRhbnQ7XG59XG5cbi5mYWlsIHtcbiAgdGV4dC1hbGlnbjogc3RhcnQgIWltcG9ydGFudDtcbn1cblxuZm9ybSB7XG4gIHBhZGRpbmc6IDBweCAxNXB4ICFpbXBvcnRhbnQ7XG59XG5cbi5uZXdQYXNzd29yZCAudGV4dC1pbnB1dCB7XG4gIG1hcmdpbjogOHB4IDhweCA4cHggMHB4ICFpbXBvcnRhbnQ7XG59XG5cbnAgaW9uLWljb24ge1xuICBmb250LXNpemU6IDAuODVlbTtcbiAgZmxvYXQ6IHJpZ2h0O1xuICBwYWRkaW5nOiA1cHg7XG59XG5cbnMgLlNlY3VyZVBocmFjZV9kaXYge1xuICAtLWJha2dyb3VuZDojRDNEM0QzO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uU2VjdXJlTGFiZWwge1xuICBtYXJnaW4tYm90dG9tOiAtMTBweCAhaW1wb3J0YW50O1xufVxuXG4uU2VjdXJlUGhyYWNlX0ltZyB7XG4gIG1hcmdpbjogYXV0bztcbn0iXSwic291cmNlUm9vdCI6IiJ9 */"]
});

/***/ })

}]);
//# sourceMappingURL=src_app_pages_update-secure-word_update-secure-word_module_ts.js.map