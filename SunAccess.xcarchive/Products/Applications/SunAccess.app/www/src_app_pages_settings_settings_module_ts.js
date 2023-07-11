"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_settings_settings_module_ts"],{

/***/ 82760:
/*!***********************************************************!*\
  !*** ./src/app/pages/settings/settings-routing.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SettingsPageRoutingModule": () => (/* binding */ SettingsPageRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _settings_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./settings.page */ 41902);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);




const routes = [{
  path: '',
  component: _settings_page__WEBPACK_IMPORTED_MODULE_0__.SettingsPage
}];
class SettingsPageRoutingModule {}
SettingsPageRoutingModule.ɵfac = function SettingsPageRoutingModule_Factory(t) {
  return new (t || SettingsPageRoutingModule)();
};
SettingsPageRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
  type: SettingsPageRoutingModule
});
SettingsPageRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](SettingsPageRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
})();

/***/ }),

/***/ 7850:
/*!***************************************************!*\
  !*** ./src/app/pages/settings/settings.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SettingsPageModule": () => (/* binding */ SettingsPageModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _settings_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./settings-routing.module */ 82760);
/* harmony import */ var _settings_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./settings.page */ 41902);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ 38699);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);







class SettingsPageModule {}
SettingsPageModule.ɵfac = function SettingsPageModule_Factory(t) {
  return new (t || SettingsPageModule)();
};
SettingsPageModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
  type: SettingsPageModule
});
SettingsPageModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__.TranslateModule, _settings_routing_module__WEBPACK_IMPORTED_MODULE_0__.SettingsPageRoutingModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](SettingsPageModule, {
    declarations: [_settings_page__WEBPACK_IMPORTED_MODULE_1__.SettingsPage],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__.TranslateModule, _settings_routing_module__WEBPACK_IMPORTED_MODULE_0__.SettingsPageRoutingModule]
  });
})();

/***/ }),

/***/ 41902:
/*!*************************************************!*\
  !*** ./src/app/pages/settings/settings.page.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SettingsPage": () => (/* binding */ SettingsPage)
/* harmony export */ });
/* harmony import */ var src_app_app_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/app.component */ 55041);
/* harmony import */ var http_status_codes__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! http-status-codes */ 92788);
/* harmony import */ var intro_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! intro.js */ 49677);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var src_app_services_translate_config_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/translate-config.service */ 45340);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngx-translate/core */ 38699);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var src_providers_utils_utils_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/providers/utils/utils.service */ 30423);
/* harmony import */ var src_providers_utils_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/providers/utils/config */ 43485);
/* harmony import */ var _login_loginService__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../login/loginService */ 61390);
/* harmony import */ var src_providers_logger_service_logger_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/providers/logger-service/logger-service */ 9999);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ionic/angular */ 93819);












const _c0 = ["Nav"];
class SettingsPage {
  constructor(translateConfigService, translate, router, utils, config, loginService, logger, menuCtrl, menu) {
    this.translateConfigService = translateConfigService;
    this.translate = translate;
    this.router = router;
    this.utils = utils;
    this.config = config;
    this.loginService = loginService;
    this.logger = logger;
    this.menuCtrl = menuCtrl;
    this.menu = menu;
    this.PlatformiOS = false;
    this.selectedLanguage = this.translateConfigService.getDefaultLanguage();
    this.translateConfigService.setLanguage('en');
    this.comingFromTour = history.state.comingFromAppTour;
  }
  ngAfterViewInit() {
    if (this.comingFromTour) {
      setTimeout(() => {
        var intro = (0,intro_js__WEBPACK_IMPORTED_MODULE_1__["default"])();
        var menu = this.menuCtrl;
        var router = this.router;
        var thispage = this;
        intro.setOptions({
          doneLabel: 'Done',
          steps: [{
            element: document.querySelector('.dataStep1'),
            intro: "<h4>App tour</h4> <p>Click here to restart the tour.<p/>"
          }]
        });
        intro.onexit(function () {
          thispage.gotowelcome();
          //router.navigate(['/welcome-tour'], { state: { animate: true, direction: 'forward', comingfromSettings: true } });
          // this.router.navigate(['/welcome-tour'], { state: { animate: true, direction: 'forward', tourEnd: true } });
          // router.navigate(['/unit-price'], { state: { animate: true, direction: 'forward', tourEnd: true } });
          //navigate.setRoot(WelcomeTourPage, tourEnd, { animate: true, direction: 'forward' });
        });

        intro.start();
      }, 700);
    }
  }
  /**
   * Navigate to change password screen
   */
  changePassword() {
    this.router.navigate(['/change-password']);
    //this.navCtrl.push(ChangePasswordPage);
  }
  /* navigate to update-security-questions-screen */
  navToUpdateSecurityQueationsPage() {
    this.router.navigate(['update-security-question']);
    //this.navCtrl.push(UpdateSecurityQuestionPage);
  }
  /* navigate to manage-Notification-screen */
  navToNotificationsSttingsPage() {
    this.router.navigate(['notification-settings']);
    //this.navCtrl.push(NotificationSettingsPage);
  }
  /* navigate to manage-SecureWord-screen */
  navToUpdateSecureWord() {
    this.getSecureWordforUser();
    //this.navCtrl.push(UpdateSecureWordPage);
  }

  getSecureWordforUser() {
    this.utils.showProgressLoader();
    var username = this.config.userInfo.email;
    // if (this.utils.isDeviceOnLine()) {
    //   if (this.utils.isDevice()) {
    this.loginService.getSecurePhrase(username).then(res => {
      if (res['responseJSON'] && res['responseJSON']['statusCode'] == http_status_codes__WEBPACK_IMPORTED_MODULE_7__.OK) {
        this.config.secureWordImage = "data:image/jpeg;base64," + res['responseJSON']['image'];
        this.router.navigate(['/update-secure-word']);
        //this.navCtrl.push(UpdateSecureWordPage);
      }
    }, err => {
      this.utils.dissmisProgressLoader();
      this.logger.error("loginSuccess catch eror : " + JSON.stringify(err));
      let errorMsg = this.utils.handleServiceException(err);
      this.utils.showAlert("", errorMsg);
    });
  }
  // else {
  //   this.utils.showAlert("", this.translate.instant('Login.useMobile'));
  // }
  //}
  // else {
  //   let errorMsg = this.translate.instant('generic_msgs.network_err');
  //   this.utils.showAlert("", errorMsg);
  // }
  /**
   * In this method we are updated the side menu title
   */
  ionViewWillEnter() {
    this.utils.component.emit(src_app_app_component__WEBPACK_IMPORTED_MODULE_0__.MenuOptions.SETTINGS);
    if (this.utils.getPlatform() == 'ios') {
      this.PlatformiOS = true;
    }
  }
  gotowelcome() {
    setTimeout(() => {
      this.router.navigate(['/notification-settings']);
    }, 800);
  }
  startTour() {
    //this.router.navigate(['/welcome-tour'], { state: { animate: true, direction: 'forward', comingfromSettings: true } });
    //this.navCtrl.push(WelcomeTourPage, { comingfromSettings: true });
  }
}
SettingsPage.ɵfac = function SettingsPage_Factory(t) {
  return new (t || SettingsPage)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](src_app_services_translate_config_service__WEBPACK_IMPORTED_MODULE_2__.TranslateConfigService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__.TranslateService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_10__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](src_providers_utils_utils_service__WEBPACK_IMPORTED_MODULE_3__.UtilService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](src_providers_utils_config__WEBPACK_IMPORTED_MODULE_4__.ConfigProvider), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_login_loginService__WEBPACK_IMPORTED_MODULE_5__.LoginService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](src_providers_logger_service_logger_service__WEBPACK_IMPORTED_MODULE_6__.LoggerServiceProvider), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_11__.MenuController), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_11__.MenuController));
};
SettingsPage.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineComponent"]({
  type: SettingsPage,
  selectors: [["app-settings"]],
  viewQuery: function SettingsPage_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵviewQuery"](_c0, 5);
    }
    if (rf & 2) {
      let _t;
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵloadQuery"]()) && (ctx.nav = _t.first);
    }
  },
  decls: 52,
  vars: 15,
  consts: [["mode", "ios"], ["color", "primary", 1, "toolbar"], ["slot", "start", "auto-hide", "false", "color", "secondary"], [1, "bold-font"], [1, "app_bg1", "ion-padding"], [1, "white_container_border_radius", "text_color_base"], [3, "click"], ["size", "1", 1, "margin_top_bottom_auto", "ion-text-center"], [1, "fas", "fa-key", "font_size_20"], ["size", "9", 1, "margin_top_bottom_auto"], [1, "label-margin"], ["size", "2", 1, "margin_top_bottom_auto", "ion-text-center"], [1, "fas", "fa-angle-right", "font_size_20"], [1, "fas", "fa-lock", "font_size_20"], [1, "fas", "fa-bell", "font_size_20"], [1, "tour-settings", "dataStep1", 3, "click"], [1, "fas", "fa-play-circle", "font_size_20"]],
  template: function SettingsPage_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "ion-header", 0)(1, "ion-toolbar", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](2, "ion-menu-button", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](3, "ion-title", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](5, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](6, "ion-content", 4)(7, "ion-list", 5)(8, "ion-row", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function SettingsPage_Template_ion_row_click_8_listener() {
        return ctx.changePassword();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](9, "ion-col", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](10, "i", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](11, "ion-col", 9)(12, "ion-label", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](13);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](14, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](15, "ion-col", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](16, "i", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](17, "ion-row", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function SettingsPage_Template_ion_row_click_17_listener() {
        return ctx.navToUpdateSecurityQueationsPage();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](18, "ion-col", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](19, "i", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](20, "ion-col", 9)(21, "ion-label", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](22);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](23, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](24, "ion-col", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](25, "i", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](26, "ion-row", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function SettingsPage_Template_ion_row_click_26_listener() {
        return ctx.navToUpdateSecureWord();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](27, "ion-col", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](28, "i", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](29, "ion-col", 9)(30, "ion-label", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](31);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](32, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](33, "ion-col", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](34, "i", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](35, "ion-row", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function SettingsPage_Template_ion_row_click_35_listener() {
        return ctx.navToNotificationsSttingsPage();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](36, "ion-col", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](37, "i", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](38, "ion-col", 9)(39, "ion-label", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](40);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](41, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](42, "ion-col", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](43, "i", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](44, "ion-row", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function SettingsPage_Template_ion_row_click_44_listener() {
        return ctx.startTour();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](45, "ion-col", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](46, "i", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](47, "ion-col", 9)(48, "ion-label", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](49, "App tour");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](50, "ion-col", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](51, "i", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](5, 5, "settings_page.title"), " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](9);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](14, 7, "settings_page.change_pwd"));
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](9);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](23, 9, "settings_page.update_security_ques"));
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](9);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](32, 11, "settings_page.update_secure_word"));
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](9);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](41, 13, "settings_page.notifications_settings"));
    }
  },
  dependencies: [_ionic_angular__WEBPACK_IMPORTED_MODULE_11__.IonCol, _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.IonContent, _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.IonHeader, _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.IonLabel, _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.IonList, _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.IonMenuButton, _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.IonRow, _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.IonTitle, _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.IonToolbar, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__.TranslatePipe],
  styles: [".app_bg1[_ngcontent-%COMP%] {\n  --background: url('register_bg.jpg') no-repeat center center / cover;\n  background-size: cover;\n  background-repeat: no-repeat;\n  height: 100%;\n  background-position: bottom;\n}\n\n.white_container_border_radius[_ngcontent-%COMP%] {\n  background-color: rgba(255, 255, 255, 0.7) !important;\n  border-radius: 15px !important;\n}\n\nion-label[_ngcontent-%COMP%] {\n  font-size: 1rem;\n}\n\nion-list[_ngcontent-%COMP%] {\n  padding: 0px 15px;\n}\n\nion-row[_ngcontent-%COMP%] {\n  border-bottom: 1px solid rgba(0, 45, 61, 0.3);\n  margin: 5px;\n}\n\nion-row[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n}\n\n.margin_top_bottom_auto[_ngcontent-%COMP%] {\n  margin-top: 5px;\n  margin-bottom: 5px;\n}\n\n.label-margin[_ngcontent-%COMP%] {\n  margin-left: 10%;\n}\n\n.font_size_20[_ngcontent-%COMP%] {\n  font-size: 1rem !important;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcGFnZXMvc2V0dGluZ3Mvc2V0dGluZ3MucGFnZS5zY3NzIiwid2VicGFjazovLy4vLi4vLi4vLi4vQWxsJTIwUHJvamVjdHMvTWFsYXlzaWFfQ2xpZW50QXBwX1JldmFtcC9TdW5BY2Nlc3NfSW9uaWM2X1JldmFtcC9zcmMvYXBwL3BhZ2VzL3NldHRpbmdzL3NldHRpbmdzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG9FQUFBO0VBQ0Esc0JBQUE7RUFDQSw0QkFBQTtFQUNBLFlBQUE7RUFDQSwyQkFBQTtBQ0NGOztBREVBO0VBQ0UscURBQUE7RUFDQSw4QkFBQTtBQ0NGOztBRENBO0VBQ0UsZUFBQTtBQ0VGOztBRENBO0VBQ0csaUJBQUE7QUNFSDs7QURDQTtFQUNFLDZDQUFBO0VBQ0EsV0FBQTtBQ0VGOztBREVBO0VBQ0UsbUJBQUE7QUNDRjs7QURDQTtFQUNFLGVBQUE7RUFDQSxrQkFBQTtBQ0VGOztBREFBO0VBQ0UsZ0JBQUE7QUNHRjs7QUREQTtFQUNFLDBCQUFBO0FDSUYiLCJzb3VyY2VzQ29udGVudCI6WyIuYXBwX2JnMSB7XHJcbiAgLS1iYWNrZ3JvdW5kOiB1cmwoLi4vLi4vLi4vYXNzZXRzL2ltZ3MvcmVnaXN0ZXJfYmcuanBnKSBuby1yZXBlYXQgY2VudGVyIGNlbnRlciAvIGNvdmVyO1xyXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogYm90dG9tO1xyXG59XHJcblxyXG4ud2hpdGVfY29udGFpbmVyX2JvcmRlcl9yYWRpdXMge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC43KSAhaW1wb3J0YW50O1xyXG4gIGJvcmRlci1yYWRpdXM6IDE1cHggIWltcG9ydGFudDtcclxufVxyXG5pb24tbGFiZWx7XHJcbiAgZm9udC1zaXplOiAxLjByZW07XHJcbn1cclxuXHJcbmlvbi1saXN0e1xyXG4gICBwYWRkaW5nOiAwcHggMTVweDtcclxufVxyXG5cclxuaW9uLXJvdyB7XHJcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoMCwgNDUsIDYxLCAuMyk7XHJcbiAgbWFyZ2luOjVweDtcclxuXHJcbn1cclxuXHJcbmlvbi1yb3c6bGFzdC1jaGlsZCB7XHJcbiAgYm9yZGVyLWJvdHRvbTogbm9uZTtcclxufVxyXG4ubWFyZ2luX3RvcF9ib3R0b21fYXV0byB7XHJcbiAgbWFyZ2luLXRvcDogNXB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDVweDtcclxufVxyXG4ubGFiZWwtbWFyZ2luIHtcclxuICBtYXJnaW4tbGVmdDogMTAlO1xyXG59XHJcbi5mb250X3NpemVfMjAge1xyXG4gIGZvbnQtc2l6ZTogMXJlbSAhaW1wb3J0YW50O1xyXG5cclxufVxyXG4iLCIuYXBwX2JnMSB7XG4gIC0tYmFja2dyb3VuZDogdXJsKC4uLy4uLy4uL2Fzc2V0cy9pbWdzL3JlZ2lzdGVyX2JnLmpwZykgbm8tcmVwZWF0IGNlbnRlciBjZW50ZXIgLyBjb3ZlcjtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgaGVpZ2h0OiAxMDAlO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBib3R0b207XG59XG5cbi53aGl0ZV9jb250YWluZXJfYm9yZGVyX3JhZGl1cyB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC43KSAhaW1wb3J0YW50O1xuICBib3JkZXItcmFkaXVzOiAxNXB4ICFpbXBvcnRhbnQ7XG59XG5cbmlvbi1sYWJlbCB7XG4gIGZvbnQtc2l6ZTogMXJlbTtcbn1cblxuaW9uLWxpc3Qge1xuICBwYWRkaW5nOiAwcHggMTVweDtcbn1cblxuaW9uLXJvdyB7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKDAsIDQ1LCA2MSwgMC4zKTtcbiAgbWFyZ2luOiA1cHg7XG59XG5cbmlvbi1yb3c6bGFzdC1jaGlsZCB7XG4gIGJvcmRlci1ib3R0b206IG5vbmU7XG59XG5cbi5tYXJnaW5fdG9wX2JvdHRvbV9hdXRvIHtcbiAgbWFyZ2luLXRvcDogNXB4O1xuICBtYXJnaW4tYm90dG9tOiA1cHg7XG59XG5cbi5sYWJlbC1tYXJnaW4ge1xuICBtYXJnaW4tbGVmdDogMTAlO1xufVxuXG4uZm9udF9zaXplXzIwIHtcbiAgZm9udC1zaXplOiAxcmVtICFpbXBvcnRhbnQ7XG59Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ })

}]);
//# sourceMappingURL=src_app_pages_settings_settings_module_ts.js.map