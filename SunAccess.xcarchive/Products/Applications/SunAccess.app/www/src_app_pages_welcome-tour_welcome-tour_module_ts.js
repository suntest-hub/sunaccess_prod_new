"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_welcome-tour_welcome-tour_module_ts"],{

/***/ 10373:
/*!*******************************************************************!*\
  !*** ./src/app/pages/welcome-tour/welcome-tour-routing.module.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WelcomeTourPageRoutingModule": () => (/* binding */ WelcomeTourPageRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _welcome_tour_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./welcome-tour.page */ 79319);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);




const routes = [{
  path: '',
  component: _welcome_tour_page__WEBPACK_IMPORTED_MODULE_0__.WelcomeTourPage
}];
class WelcomeTourPageRoutingModule {}
WelcomeTourPageRoutingModule.ɵfac = function WelcomeTourPageRoutingModule_Factory(t) {
  return new (t || WelcomeTourPageRoutingModule)();
};
WelcomeTourPageRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
  type: WelcomeTourPageRoutingModule
});
WelcomeTourPageRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](WelcomeTourPageRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
})();

/***/ }),

/***/ 31551:
/*!***********************************************************!*\
  !*** ./src/app/pages/welcome-tour/welcome-tour.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WelcomeTourPageModule": () => (/* binding */ WelcomeTourPageModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _welcome_tour_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./welcome-tour-routing.module */ 10373);
/* harmony import */ var _welcome_tour_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./welcome-tour.page */ 79319);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);






class WelcomeTourPageModule {}
WelcomeTourPageModule.ɵfac = function WelcomeTourPageModule_Factory(t) {
  return new (t || WelcomeTourPageModule)();
};
WelcomeTourPageModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
  type: WelcomeTourPageModule
});
WelcomeTourPageModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule, _welcome_tour_routing_module__WEBPACK_IMPORTED_MODULE_0__.WelcomeTourPageRoutingModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](WelcomeTourPageModule, {
    declarations: [_welcome_tour_page__WEBPACK_IMPORTED_MODULE_1__.WelcomeTourPage],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule, _welcome_tour_routing_module__WEBPACK_IMPORTED_MODULE_0__.WelcomeTourPageRoutingModule]
  });
})();

/***/ }),

/***/ 79319:
/*!*********************************************************!*\
  !*** ./src/app/pages/welcome-tour/welcome-tour.page.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WelcomeTourPage": () => (/* binding */ WelcomeTourPage)
/* harmony export */ });
/* harmony import */ var http_status_codes__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! http-status-codes */ 92788);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var src_providers_logger_service_logger_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/providers/logger-service/logger-service */ 9999);
/* harmony import */ var src_providers_utils_utils_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/providers/utils/utils.service */ 30423);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _notification_settings_notificationSettingsService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../notification-settings/notificationSettingsService */ 34088);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngx-translate/core */ 38699);
/* harmony import */ var src_providers_push_service_push_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/providers/push-service/push-service */ 49756);
/* harmony import */ var src_providers_utils_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/providers/utils/config */ 43485);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 94666);











function WelcomeTourPage_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "img", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, "Welcome!");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5, "Take a quick tour.");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](6, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](7, " Find out about key features in SunAccess.");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "ion-button", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function WelcomeTourPage_div_1_Template_ion_button_click_8_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r4);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r3.goToNextScreen("One", "yes"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](9, " Great, let's go! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function WelcomeTourPage_div_1_Template_div_click_10_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r4);
      const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r5.goToNextScreen("One", "no"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](11, "No thanks");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
}
function WelcomeTourPage_div_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "img", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, "Get notified when there is an important update.");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "ion-button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function WelcomeTourPage_div_2_Template_ion_button_click_4_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r7);
      const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r6.goToNextScreen("Two", "yes"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5, " Yes");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function WelcomeTourPage_div_2_Template_div_click_6_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r7);
      const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r8.goToNextScreen("Two", "no"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](7, "Not now");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
}
function WelcomeTourPage_div_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "img", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, "Congratulations!");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](4, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5, " Now you've got the basics.");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function WelcomeTourPage_div_3_Template_div_click_6_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r10);
      const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r9.goToNextScreen("Three", ""));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](7, " Let\u2019s Get Started!");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
}
class WelcomeTourPage {
  constructor(menuCtrl, logger, utils, router, NotificationSettingservice, alertCtrl, translate, pushNotiService, config) {
    this.menuCtrl = menuCtrl;
    this.logger = logger;
    this.utils = utils;
    this.router = router;
    this.NotificationSettingservice = NotificationSettingservice;
    this.alertCtrl = alertCtrl;
    this.translate = translate;
    this.pushNotiService = pushNotiService;
    this.config = config;
    this.comingfromSettings = history.state.comingfromSettings;
    this.comingFromLogin = history.state.comingFromLogin;
    this.tourEnd = history.state.tourEnd;
    if (this.comingfromSettings && this.config.userInfo.isNotificationRegistered == false) this.showNotificationScreen = true;
    if (this.tourEnd) {
      this.screenOne = false;
      this.screenThree = true;
    } else {
      this.screenOne = true;
    }
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad WelcomeTourPage');
  }
  goToNextScreen(currentScreen, button) {
    if (currentScreen == "One") {
      if (button == 'yes') {
        this.screenOne = false;
        if (this.showNotificationScreen) this.screenTwo = true;else this.gotoDashboardTour();
      } else {
        this.skipTourGotoDashboard();
      }
    } else if (currentScreen == "Two") {
      if (button == 'yes') {
        this.notificationPermission();
      } else {
        this.screenTwo = false;
        this.gotoDashboardTour();
      }
    } else {
      this.router.navigate(['/dashboard-after-login'], {
        state: {
          animate: true,
          direction: 'forward'
        }
      });
      //this.navCtrl.setRoot(DashboardAfterLoginPage, { animate: true, direction: 'forward' });
    }
  }

  skipTourGotoDashboard() {
    localStorage.setItem("welomeTour", 'true');
    let comingFromLoginFlag = {
      comingFromLogin: true
    };
    this.router.navigate(['/dashboard-after-login'], {
      state: {
        animate: true,
        direction: 'forward',
        comingFromLoginFlag: comingFromLoginFlag
      }
    });
    //this.navCtrl.setRoot(DashboardAfterLoginPage, comingFromLoginFlag, { animate: true, direction: 'forward' });
    // this.menuCtrl.open();
    // this.events.publish('user:comingFromServiceAppTour',true);
  }

  gotoDashboardTour() {
    localStorage.setItem("welomeTour", 'true');
    let comingFromLoginFlag = {
      comingFromLogin: true,
      comingfromWelcomeTour: true
    };
    this.router.navigate(['/dashboard-after-login'], {
      state: {
        animate: true,
        direction: 'forward',
        comingFromLoginFlag: comingFromLoginFlag
      }
    });
    //this.navCtrl.setRoot(DashboardAfterLoginPage, comingFromLoginFlag, { animate: true, direction: 'forward' });
  }

  notificationPermission() {
    this.utils.showProgressLoader();
    this.pushNotiService.registerDevice().then(result => {
      this.sendUpdateNotiSettingstoServer();
      this.utils.dissmisProgressLoader();
      this.screenTwo = false;
      this.gotoDashboardTour();
    }, err => {
      this.utils.dissmisProgressLoader();
      this.screenTwo = false;
      this.gotoDashboardTour();
    });
  }
  sendUpdateNotiSettingstoServer() {
    if (this.utils.isDeviceOnLine()) {
      this.NotificationSettingservice.updatePushNotificationsetting(true).then(res => {
        try {
          this.utils.dissmisProgressLoader();
          if (res['responseJSON'] && res['responseJSON']['statusCode'] == http_status_codes__WEBPACK_IMPORTED_MODULE_6__.OK) {
            this.errorMsg = res['responseJSON']['userMessage'];
            this.isSuccess = true;
            //this.showDialog("", this.errorMsg);
            this.config.userInfo.isNotificationRegistered = true;
          } else if (res['responseJSON'] && res['responseJSON']['statusCode'] == http_status_codes__WEBPACK_IMPORTED_MODULE_6__.ACCEPTED) {
            this.errorMsg = res['responseJSON']['userMessage'];
            //this.showDialog("", this.errorMsg);
            this.config.userInfo.isNotificationRegistered = false;
          } else {
            this.logger.error("PUT USER Notification Settings Update : " + JSON.stringify(res));
            this.errorMsg = this.translate.instant('generic_msgs.server_err');
            this.isSuccess = false;
            this.config.userInfo.isNotificationRegistered = false;
          }
        } catch (e) {
          this.utils.dissmisProgressLoader();
          this.isSuccess = false;
          this.logger.error("PUT USER Notification Settings Update : " + JSON.stringify(e));
          this.errorMsg = this.translate.instant('generic_msgs.server_err');
          this.config.userInfo.isNotificationRegistered = false;
        }
      }, err => {
        this.utils.dissmisProgressLoader();
        this.isSuccess = false;
        this.logger.error("PUT USER Notification Settings Update : " + JSON.stringify(err));
        this.errorMsg = this.utils.handleServiceException(err);
        this.config.userInfo.isNotificationRegistered = false;
      });
    } else {
      this.isShowingLoader = false;
      this.isSuccess = false;
      this.errorMsg = this.translate.instant('generic_msgs.network_err');
      this.config.userInfo.isNotificationRegistered = false;
    }
  }
  showDialog(title, message) {
    let buttons = [{
      text: 'Ok',
      handler: () => {
        // this.navCtrl.pop();
      }
    }];
    let alert = this.alertCtrl.create({
      header: title,
      message: message,
      buttons: buttons,
      backdropDismiss: false
    }).then(alert => alert.present());
  }
}
WelcomeTourPage.ɵfac = function WelcomeTourPage_Factory(t) {
  return new (t || WelcomeTourPage)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_7__.MenuController), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_providers_logger_service_logger_service__WEBPACK_IMPORTED_MODULE_0__.LoggerServiceProvider), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_providers_utils_utils_service__WEBPACK_IMPORTED_MODULE_1__.UtilService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_notification_settings_notificationSettingsService__WEBPACK_IMPORTED_MODULE_2__.notificationSettingservice), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_7__.AlertController), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__.TranslateService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_providers_push_service_push_service__WEBPACK_IMPORTED_MODULE_3__.PushService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_providers_utils_config__WEBPACK_IMPORTED_MODULE_4__.ConfigProvider));
};
WelcomeTourPage.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
  type: WelcomeTourPage,
  selectors: [["app-welcome-tour"]],
  decls: 4,
  vars: 3,
  consts: [["padding", "", 1, "ion-text-center"], ["class", "tour-screens", 4, "ngIf"], [1, "tour-screens"], ["src", "./assets/imgs/tour/screen-1.png", "alt", "Welcome Tour"], ["button", "", 1, "btn_center", 3, "click"], [1, "secondary-btn", 3, "click"], ["src", "./assets/imgs/tour/screen-3.png", "alt", "Welcome Tour"], [1, "btn_center", 3, "click"], ["src", "./assets/imgs/tour/screen-5.png", "alt", "Welcome Tour"]],
  template: function WelcomeTourPage_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ion-content", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, WelcomeTourPage_div_1_Template, 12, 0, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](2, WelcomeTourPage_div_2_Template, 8, 0, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](3, WelcomeTourPage_div_3_Template, 8, 0, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.screenOne);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.screenTwo && ctx.showNotificationScreen);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.screenThree);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_10__.NgIf, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonButton, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonContent],
  styles: [".tour-screens[_ngcontent-%COMP%] {\n  align-items: center;\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  justify-content: center;\n}\n.tour-screens[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  padding: 0 60px;\n  text-align: center;\n}\n.tour-screens[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin-bottom: 0;\n}\n.tour-screens[_ngcontent-%COMP%]   .secondary-btn[_ngcontent-%COMP%] {\n  color: #002d3d;\n  font-weight: bold;\n  margin-top: 16px;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcGFnZXMvd2VsY29tZS10b3VyL3dlbGNvbWUtdG91ci5wYWdlLnNjc3MiLCJ3ZWJwYWNrOi8vLi8uLi8uLi8uLi9BbGwlMjBQcm9qZWN0cy9NYWxheXNpYV9DbGllbnRBcHBfUmV2YW1wL1N1bkFjY2Vzc19Jb25pYzZfUmV2YW1wL3NyYy9hcHAvcGFnZXMvd2VsY29tZS10b3VyL3dlbGNvbWUtdG91ci5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUM7RUFDSyxtQkFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLFlBQUE7RUFDQSx1QkFBQTtBQ0NOO0FEQU07RUFDSSxlQUFBO0VBQ0Esa0JBQUE7QUNFVjtBREFNO0VBQ0ksZ0JBQUE7QUNFVjtBREFNO0VBQ0ksY0FBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7QUNFViIsInNvdXJjZXNDb250ZW50IjpbIiAudG91ci1zY3JlZW5zIHtcclxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgcCB7XHJcbiAgICAgICAgICBwYWRkaW5nOiAwIDYwcHg7XHJcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgIH1cclxuICAgICAgaDIge1xyXG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogMDtcclxuICAgICAgfVxyXG4gICAgICAuc2Vjb25kYXJ5LWJ0biB7XHJcbiAgICAgICAgICBjb2xvcjogIzAwMmQzZDtcclxuICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgICAgbWFyZ2luLXRvcDogMTZweDtcclxuICAgICAgfVxyXG4gIH1cclxuIiwiLnRvdXItc2NyZWVucyB7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGhlaWdodDogMTAwJTtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG4udG91ci1zY3JlZW5zIHAge1xuICBwYWRkaW5nOiAwIDYwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi50b3VyLXNjcmVlbnMgaDIge1xuICBtYXJnaW4tYm90dG9tOiAwO1xufVxuLnRvdXItc2NyZWVucyAuc2Vjb25kYXJ5LWJ0biB7XG4gIGNvbG9yOiAjMDAyZDNkO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgbWFyZ2luLXRvcDogMTZweDtcbn0iXSwic291cmNlUm9vdCI6IiJ9 */"]
});

/***/ })

}]);
//# sourceMappingURL=src_app_pages_welcome-tour_welcome-tour_module_ts.js.map