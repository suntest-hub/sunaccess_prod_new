"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_notification-settings_notification-settings_module_ts"],{

/***/ 57285:
/*!*************************************************************************************!*\
  !*** ./src/app/pages/notification-settings/notification-settings-routing.module.ts ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NotificationSettingsPageRoutingModule": () => (/* binding */ NotificationSettingsPageRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _notification_settings_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./notification-settings.page */ 44285);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);




const routes = [{
  path: '',
  component: _notification_settings_page__WEBPACK_IMPORTED_MODULE_0__.NotificationSettingsPage
}];
class NotificationSettingsPageRoutingModule {}
NotificationSettingsPageRoutingModule.ɵfac = function NotificationSettingsPageRoutingModule_Factory(t) {
  return new (t || NotificationSettingsPageRoutingModule)();
};
NotificationSettingsPageRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
  type: NotificationSettingsPageRoutingModule
});
NotificationSettingsPageRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](NotificationSettingsPageRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
})();

/***/ }),

/***/ 31151:
/*!*****************************************************************************!*\
  !*** ./src/app/pages/notification-settings/notification-settings.module.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NotificationSettingsPageModule": () => (/* binding */ NotificationSettingsPageModule)
/* harmony export */ });
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ 38699);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _notification_settings_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./notification-settings-routing.module */ 57285);
/* harmony import */ var _notification_settings_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./notification-settings.page */ 44285);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);







class NotificationSettingsPageModule {}
NotificationSettingsPageModule.ɵfac = function NotificationSettingsPageModule_Factory(t) {
  return new (t || NotificationSettingsPageModule)();
};
NotificationSettingsPageModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
  type: NotificationSettingsPageModule
});
NotificationSettingsPageModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__.TranslateModule, _notification_settings_routing_module__WEBPACK_IMPORTED_MODULE_0__.NotificationSettingsPageRoutingModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](NotificationSettingsPageModule, {
    declarations: [_notification_settings_page__WEBPACK_IMPORTED_MODULE_1__.NotificationSettingsPage],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__.TranslateModule, _notification_settings_routing_module__WEBPACK_IMPORTED_MODULE_0__.NotificationSettingsPageRoutingModule]
  });
})();

/***/ }),

/***/ 44285:
/*!***************************************************************************!*\
  !*** ./src/app/pages/notification-settings/notification-settings.page.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NotificationSettingsPage": () => (/* binding */ NotificationSettingsPage)
/* harmony export */ });
/* harmony import */ var http_status_codes__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! http-status-codes */ 92788);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var src_app_services_translate_config_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/translate-config.service */ 45340);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngx-translate/core */ 38699);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var src_providers_utils_utils_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/providers/utils/utils.service */ 30423);
/* harmony import */ var src_providers_utils_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/providers/utils/config */ 43485);
/* harmony import */ var _login_loginService__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../login/loginService */ 61390);
/* harmony import */ var src_providers_logger_service_logger_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/providers/logger-service/logger-service */ 9999);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _notificationSettingsService__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./notificationSettingsService */ 34088);
/* harmony import */ var src_providers_push_service_push_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/providers/push-service/push-service */ 49756);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/forms */ 2508);













class NotificationSettingsPage {
  constructor(translateConfigService, translate, router, utils, config, loginService, logger, menuCtrl, menu, NotificationSettingservice, alertCtrl, pushNotiService) {
    this.translateConfigService = translateConfigService;
    this.translate = translate;
    this.router = router;
    this.utils = utils;
    this.config = config;
    this.loginService = loginService;
    this.logger = logger;
    this.menuCtrl = menuCtrl;
    this.menu = menu;
    this.NotificationSettingservice = NotificationSettingservice;
    this.alertCtrl = alertCtrl;
    this.pushNotiService = pushNotiService;
    this.isShowingLoader = false;
    this.canTryAgain = false;
    this.isSuccess = false;
    this.selectedLanguage = this.translateConfigService.getDefaultLanguage();
    this.translateConfigService.setLanguage('en');
  }
  ngOnInit() {
    this.pushNotificationFlagVal = this.config.userInfo.isNotificationRegistered;
  }
  updatePushNotificationSettings(pushNotiFlagVal) {
    setTimeout(() => {
      this.utils.showProgressLoader();
      if (pushNotiFlagVal) {
        this.pushNotiService.registerDevice().then(result => {
          this.sendUpdateNotiSettingstoServer(pushNotiFlagVal);
        }, err => {
          this.utils.dissmisProgressLoader();
          this.showDialog("", err['message']);
          this.pushNotificationFlagVal = !pushNotiFlagVal;
          this.config.userInfo.isNotificationRegistered = false;
        });
      } else {
        this.pushNotiService.unregisterDevice().then(result => {
          this.sendUpdateNotiSettingstoServer(pushNotiFlagVal);
        }, err => {
          this.showDialog("", err['message']);
          this.utils.dissmisProgressLoader();
          this.pushNotificationFlagVal = !pushNotiFlagVal;
        });
      }
    }, 100);
  }
  sendUpdateNotiSettingstoServer(pushNotiFlagValue) {
    if (this.utils.isDeviceOnLine()) {
      this.NotificationSettingservice.updatePushNotificationsetting(pushNotiFlagValue).then(res => {
        try {
          this.utils.dissmisProgressLoader();
          if (res['responseJSON'] && res['responseJSON']['statusCode'] == http_status_codes__WEBPACK_IMPORTED_MODULE_7__.OK) {
            this.errorMsg = res['responseJSON']['userMessage'];
            this.isSuccess = true;
            this.showDialog("", this.errorMsg);
            this.config.userInfo.isNotificationRegistered = pushNotiFlagValue;
          } else if (res['responseJSON'] && res['responseJSON']['statusCode'] == http_status_codes__WEBPACK_IMPORTED_MODULE_7__.ACCEPTED) {
            this.errorMsg = res['responseJSON']['userMessage'];
            this.showDialog("", this.errorMsg);
            this.config.userInfo.isNotificationRegistered = pushNotiFlagValue;
          } else {
            this.logger.error("PUT USER Notification Settings Update : " + JSON.stringify(res));
            this.errorMsg = this.translate.instant('generic_msgs.server_err');
            this.isSuccess = false;
            this.pushNotificationFlagVal = !pushNotiFlagValue;
            this.config.userInfo.isNotificationRegistered = !pushNotiFlagValue;
          }
        } catch (e) {
          this.utils.dissmisProgressLoader();
          this.isSuccess = false;
          this.logger.error("PUT USER Notification Settings Update : " + JSON.stringify(e));
          this.errorMsg = this.translate.instant('generic_msgs.server_err');
          this.pushNotificationFlagVal = !pushNotiFlagValue;
          this.config.userInfo.isNotificationRegistered = !pushNotiFlagValue;
        }
      }, err => {
        this.utils.dissmisProgressLoader();
        this.isSuccess = false;
        this.logger.error("PUT USER Notification Settings Update : " + JSON.stringify(err));
        this.errorMsg = this.utils.handleServiceException(err);
        this.pushNotificationFlagVal = !pushNotiFlagValue;
        this.config.userInfo.isNotificationRegistered = !pushNotiFlagValue;
      });
    } else {
      this.isShowingLoader = false;
      this.isSuccess = false;
      this.errorMsg = this.translate.instant('generic_msgs.network_err');
      this.pushNotificationFlagVal = !pushNotiFlagValue;
      this.config.userInfo.isNotificationRegistered = !pushNotiFlagValue;
    }
  }
  /**
  *
  * @param title - this is the title of the alert
  * @param message  - message that need to display on the alert.
  */
  showDialog(title, message) {
    let buttons = [{
      text: 'Ok'
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
}
NotificationSettingsPage.ɵfac = function NotificationSettingsPage_Factory(t) {
  return new (t || NotificationSettingsPage)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](src_app_services_translate_config_service__WEBPACK_IMPORTED_MODULE_0__.TranslateConfigService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__.TranslateService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_10__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](src_providers_utils_utils_service__WEBPACK_IMPORTED_MODULE_1__.UtilService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](src_providers_utils_config__WEBPACK_IMPORTED_MODULE_2__.ConfigProvider), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_login_loginService__WEBPACK_IMPORTED_MODULE_3__.LoginService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](src_providers_logger_service_logger_service__WEBPACK_IMPORTED_MODULE_4__.LoggerServiceProvider), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_11__.MenuController), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_11__.MenuController), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_notificationSettingsService__WEBPACK_IMPORTED_MODULE_5__.notificationSettingservice), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_11__.AlertController), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](src_providers_push_service_push_service__WEBPACK_IMPORTED_MODULE_6__.PushService));
};
NotificationSettingsPage.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineComponent"]({
  type: NotificationSettingsPage,
  selectors: [["app-notification-settings"]],
  decls: 16,
  vars: 4,
  consts: [["mode", "ios"], ["color", "primary", 1, "toolbar"], ["slot", "start", "auto-hide", "false", "color", "secondary"], [1, "bold-font"], ["no-bounce", "", 1, "app_bg1", "ion-padding"], [1, "white_container_border_radius", "text_color_base"], ["size", "10", 1, "margin_top_bottom_auto"], [1, "label-margin"], ["size", "2", "text-center", "", 1, "toggleItem"], [1, "switch"], ["type", "checkbox", 3, "ngModel", "ngModelChange", "change"], [1, "slider", "round"]],
  template: function NotificationSettingsPage_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "ion-header", 0)(1, "ion-toolbar", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](2, "ion-menu-button", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](3, "ion-title", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](5, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](6, "ion-content", 4)(7, "ion-list", 5)(8, "ion-row")(9, "ion-col", 6)(10, "ion-label", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](11, "Push Notification");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](12, "ion-col", 8)(13, "label", 9)(14, "input", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("ngModelChange", function NotificationSettingsPage_Template_input_ngModelChange_14_listener($event) {
        return ctx.pushNotificationFlagVal = $event;
      })("change", function NotificationSettingsPage_Template_input_change_14_listener() {
        return ctx.updatePushNotificationSettings(ctx.pushNotificationFlagVal);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](15, "span", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](5, 2, "notification_settings_page.title"));
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](10);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngModel", ctx.pushNotificationFlagVal);
    }
  },
  dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_12__.CheckboxControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.NgModel, _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.IonCol, _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.IonContent, _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.IonHeader, _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.IonLabel, _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.IonList, _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.IonMenuButton, _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.IonRow, _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.IonTitle, _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.IonToolbar, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__.TranslatePipe],
  styles: [".app_bg1[_ngcontent-%COMP%] {\n  --background: url('register_bg.jpg') no-repeat center center / cover;\n  background-size: cover;\n  background-repeat: no-repeat;\n  height: 100%;\n  background-position: bottom;\n}\n\n.white_container_border_radius[_ngcontent-%COMP%] {\n  background-color: rgba(255, 255, 255, 0.7) !important;\n  border-radius: 15px !important;\n}\n\n.margin_top_bottom_auto[_ngcontent-%COMP%] {\n  margin-top: auto;\n  margin-bottom: auto;\n}\n\n.label-margin[_ngcontent-%COMP%] {\n  margin-left: 13%;\n}\n\n.label[_ngcontent-%COMP%] {\n  font-size: 1.7rem;\n  margin: 0px;\n  line-height: 24px;\n}\n\n.list[_ngcontent-%COMP%] {\n  padding: 0px 15px;\n  margin-top: 15px;\n}\n\nion-row[_ngcontent-%COMP%] {\n  border-bottom: 1px solid color #002d3d;\n  margin-top: 5px;\n  padding-right: 40px;\n}\n\nion-row[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n}\n\n.col[_ngcontent-%COMP%] {\n  padding: 15px 0px;\n}\n\n.label-margin[_ngcontent-%COMP%] {\n  margin-left: 13%;\n}\n\n.subtitle_Noti[_ngcontent-%COMP%] {\n  margin-left: -3%;\n  color: #002d3d;\n}\n\nli[_ngcontent-%COMP%] {\n  list-style-type: none;\n}\n\nul[_ngcontent-%COMP%] {\n  margin-top: 1px;\n}\n\n.toggle-md[_ngcontent-%COMP%] {\n  padding: 0px;\n}\n\n.toggleItem[_ngcontent-%COMP%] {\n  margin-bottom: auto;\n}\n\n.switch[_ngcontent-%COMP%] {\n  position: relative;\n  display: inline-block;\n  width: 60px;\n  height: 34px;\n}\n\n.switch[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  opacity: 0;\n  width: 0;\n  height: 0;\n}\n\n.slider[_ngcontent-%COMP%] {\n  position: absolute;\n  cursor: pointer;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: #ccc;\n  transition: 0.4s;\n}\n\n.slider[_ngcontent-%COMP%]:before {\n  position: absolute;\n  content: \"\";\n  height: 26px;\n  width: 26px;\n  left: 4px;\n  bottom: 4px;\n  background-color: white;\n  transition: 0.4s;\n}\n\ninput[_ngcontent-%COMP%]:checked    + .slider[_ngcontent-%COMP%] {\n  background-color: #febe10;\n}\n\ninput[_ngcontent-%COMP%]:focus    + .slider[_ngcontent-%COMP%] {\n  box-shadow: 0 0 1px #febe10;\n}\n\ninput[_ngcontent-%COMP%]:checked    + .slider[_ngcontent-%COMP%]:before {\n  transform: translateX(26px);\n}\n\n\n.slider.round[_ngcontent-%COMP%] {\n  border-radius: 34px;\n}\n\n.slider.round[_ngcontent-%COMP%]:before {\n  border-radius: 50%;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcGFnZXMvbm90aWZpY2F0aW9uLXNldHRpbmdzL25vdGlmaWNhdGlvbi1zZXR0aW5ncy5wYWdlLnNjc3MiLCJ3ZWJwYWNrOi8vLi8uLi8uLi8uLi9BbGwlMjBQcm9qZWN0cy9NYWxheXNpYV9DbGllbnRBcHBfUmV2YW1wL1N1bkFjY2Vzc19Jb25pYzZfUmV2YW1wL3NyYy9hcHAvcGFnZXMvbm90aWZpY2F0aW9uLXNldHRpbmdzL25vdGlmaWNhdGlvbi1zZXR0aW5ncy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxvRUFBQTtFQUNBLHNCQUFBO0VBQ0EsNEJBQUE7RUFDQSxZQUFBO0VBQ0EsMkJBQUE7QUNDRjs7QURDQTtFQUNFLHFEQUFBO0VBQ0EsOEJBQUE7QUNFRjs7QURBQTtFQUNFLGdCQUFBO0VBQ0EsbUJBQUE7QUNHRjs7QUREQTtFQUNFLGdCQUFBO0FDSUY7O0FEREE7RUFDRSxpQkFBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtBQ0lGOztBREFBO0VBQ0csaUJBQUE7RUFDQSxnQkFBQTtBQ0dIOztBREFBO0VBQ0csc0NBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7QUNHSDs7QURBQTtFQUNHLG1CQUFBO0FDR0g7O0FEQUE7RUFDRyxpQkFBQTtBQ0dIOztBREFBO0VBQ0csZ0JBQUE7QUNHSDs7QUREQTtFQUNHLGdCQUFBO0VBQ0EsY0FBQTtBQ0lIOztBREZBO0VBQ0EscUJBQUE7QUNLQTs7QURIQTtFQUNHLGVBQUE7QUNNSDs7QURKQTtFQUNBLFlBQUE7QUNPQTs7QURMQTtFQUNBLG1CQUFBO0FDUUE7O0FETkE7RUFDQSxrQkFBQTtFQUNBLHFCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUNTQTs7QUROQTtFQUNBLFVBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtBQ1NBOztBRE5BO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLHNCQUFBO0VBRUEsZ0JBQUE7QUNTQTs7QUROQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7RUFDQSx1QkFBQTtFQUVBLGdCQUFBO0FDU0E7O0FETkE7RUFDQSx5QkFBQTtBQ1NBOztBRE5BO0VBQ0EsMkJBQUE7QUNTQTs7QUROQTtFQUdBLDJCQUFBO0FDU0E7O0FETkEsb0JBQUE7QUFDQTtFQUNBLG1CQUFBO0FDU0E7O0FETkE7RUFDQSxrQkFBQTtBQ1NBIiwic291cmNlc0NvbnRlbnQiOlsiLmFwcF9iZzF7XHJcbiAgLS1iYWNrZ3JvdW5kOiB1cmwoLi4vLi4vLi4vYXNzZXRzL2ltZ3MvcmVnaXN0ZXJfYmcuanBnKSBuby1yZXBlYXQgY2VudGVyIGNlbnRlciAvIGNvdmVyO1xyXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogYm90dG9tO1xyXG59XHJcbi53aGl0ZV9jb250YWluZXJfYm9yZGVyX3JhZGl1cyB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjcpICFpbXBvcnRhbnQ7XHJcbiAgYm9yZGVyLXJhZGl1czogMTVweCAhaW1wb3J0YW50O1xyXG59XHJcbi5tYXJnaW5fdG9wX2JvdHRvbV9hdXRvIHtcclxuICBtYXJnaW4tdG9wOiBhdXRvO1xyXG4gIG1hcmdpbi1ib3R0b206IGF1dG87XHJcbn1cclxuLmxhYmVsLW1hcmdpbiB7XHJcbiAgbWFyZ2luLWxlZnQ6IDEzJTtcclxufVxyXG5cclxuLmxhYmVse1xyXG4gIGZvbnQtc2l6ZTogMS43cmVtO1xyXG4gIG1hcmdpbjogMHB4O1xyXG4gIGxpbmUtaGVpZ2h0OiAyNHB4O1xyXG5cclxufVxyXG5cclxuLmxpc3R7XHJcbiAgIHBhZGRpbmc6IDBweCAxNXB4O1xyXG4gICBtYXJnaW4tdG9wOiAxNXB4O1xyXG59XHJcblxyXG5pb24tcm93e1xyXG4gICBib3JkZXItYm90dG9tOiAxcHggc29saWQgY29sb3IgIzAwMmQzZCA7XHJcbiAgIG1hcmdpbi10b3A6IDVweDtcclxuICAgcGFkZGluZy1yaWdodDogNDBweDtcclxufVxyXG5cclxuaW9uLXJvdzpsYXN0LWNoaWxke1xyXG4gICBib3JkZXItYm90dG9tOiBub25lO1xyXG59XHJcblxyXG4uY29se1xyXG4gICBwYWRkaW5nOiAxNXB4IDBweDtcclxufVxyXG5cclxuLmxhYmVsLW1hcmdpbntcclxuICAgbWFyZ2luLWxlZnQ6MTMlO1xyXG59XHJcbi5zdWJ0aXRsZV9Ob3Rpe1xyXG4gICBtYXJnaW4tbGVmdDotMyU7XHJcbiAgIGNvbG9yOiMwMDJkM2QgO1xyXG59XHJcbmxpIHtcclxubGlzdC1zdHlsZS10eXBlOiBub25lO1xyXG59XHJcbnVse1xyXG4gICBtYXJnaW4tdG9wOiAxcHg7XHJcbn1cclxuLnRvZ2dsZS1tZHtcclxucGFkZGluZzogMHB4O1xyXG59XHJcbi50b2dnbGVJdGVte1xyXG5tYXJnaW4tYm90dG9tOiBhdXRvO1xyXG59XHJcbi5zd2l0Y2gge1xyXG5wb3NpdGlvbjogcmVsYXRpdmU7XHJcbmRpc3BsYXk6IGlubGluZS1ibG9jaztcclxud2lkdGg6IDYwcHg7XHJcbmhlaWdodDogMzRweDtcclxufVxyXG5cclxuLnN3aXRjaCBpbnB1dCB7XHJcbm9wYWNpdHk6IDA7XHJcbndpZHRoOiAwO1xyXG5oZWlnaHQ6IDA7XHJcbn1cclxuXHJcbi5zbGlkZXIge1xyXG5wb3NpdGlvbjogYWJzb2x1dGU7XHJcbmN1cnNvcjogcG9pbnRlcjtcclxudG9wOiAwO1xyXG5sZWZ0OiAwO1xyXG5yaWdodDogMDtcclxuYm90dG9tOiAwO1xyXG5iYWNrZ3JvdW5kLWNvbG9yOiAjY2NjO1xyXG4td2Via2l0LXRyYW5zaXRpb246IC40cztcclxudHJhbnNpdGlvbjogLjRzO1xyXG59XHJcblxyXG4uc2xpZGVyOmJlZm9yZSB7XHJcbnBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuY29udGVudDogXCJcIjtcclxuaGVpZ2h0OiAyNnB4O1xyXG53aWR0aDogMjZweDtcclxubGVmdDogNHB4O1xyXG5ib3R0b206IDRweDtcclxuYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbi13ZWJraXQtdHJhbnNpdGlvbjogLjRzO1xyXG50cmFuc2l0aW9uOiAuNHM7XHJcbn1cclxuXHJcbmlucHV0OmNoZWNrZWQgKyAuc2xpZGVyIHtcclxuYmFja2dyb3VuZC1jb2xvcjogI2ZlYmUxMDtcclxufVxyXG5cclxuaW5wdXQ6Zm9jdXMgKyAuc2xpZGVyIHtcclxuYm94LXNoYWRvdzogMCAwIDFweCAjZmViZTEwO1xyXG59XHJcblxyXG5pbnB1dDpjaGVja2VkICsgLnNsaWRlcjpiZWZvcmUge1xyXG4td2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgyNnB4KTtcclxuLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWCgyNnB4KTtcclxudHJhbnNmb3JtOiB0cmFuc2xhdGVYKDI2cHgpO1xyXG59XHJcblxyXG4vKiBSb3VuZGVkIHNsaWRlcnMgKi9cclxuLnNsaWRlci5yb3VuZCB7XHJcbmJvcmRlci1yYWRpdXM6IDM0cHg7XHJcbn1cclxuXHJcbi5zbGlkZXIucm91bmQ6YmVmb3JlIHtcclxuYm9yZGVyLXJhZGl1czogNTAlO1xyXG59XHJcbiIsIi5hcHBfYmcxIHtcbiAgLS1iYWNrZ3JvdW5kOiB1cmwoLi4vLi4vLi4vYXNzZXRzL2ltZ3MvcmVnaXN0ZXJfYmcuanBnKSBuby1yZXBlYXQgY2VudGVyIGNlbnRlciAvIGNvdmVyO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGJvdHRvbTtcbn1cblxuLndoaXRlX2NvbnRhaW5lcl9ib3JkZXJfcmFkaXVzIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjcpICFpbXBvcnRhbnQ7XG4gIGJvcmRlci1yYWRpdXM6IDE1cHggIWltcG9ydGFudDtcbn1cblxuLm1hcmdpbl90b3BfYm90dG9tX2F1dG8ge1xuICBtYXJnaW4tdG9wOiBhdXRvO1xuICBtYXJnaW4tYm90dG9tOiBhdXRvO1xufVxuXG4ubGFiZWwtbWFyZ2luIHtcbiAgbWFyZ2luLWxlZnQ6IDEzJTtcbn1cblxuLmxhYmVsIHtcbiAgZm9udC1zaXplOiAxLjdyZW07XG4gIG1hcmdpbjogMHB4O1xuICBsaW5lLWhlaWdodDogMjRweDtcbn1cblxuLmxpc3Qge1xuICBwYWRkaW5nOiAwcHggMTVweDtcbiAgbWFyZ2luLXRvcDogMTVweDtcbn1cblxuaW9uLXJvdyB7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBjb2xvciAjMDAyZDNkO1xuICBtYXJnaW4tdG9wOiA1cHg7XG4gIHBhZGRpbmctcmlnaHQ6IDQwcHg7XG59XG5cbmlvbi1yb3c6bGFzdC1jaGlsZCB7XG4gIGJvcmRlci1ib3R0b206IG5vbmU7XG59XG5cbi5jb2wge1xuICBwYWRkaW5nOiAxNXB4IDBweDtcbn1cblxuLmxhYmVsLW1hcmdpbiB7XG4gIG1hcmdpbi1sZWZ0OiAxMyU7XG59XG5cbi5zdWJ0aXRsZV9Ob3RpIHtcbiAgbWFyZ2luLWxlZnQ6IC0zJTtcbiAgY29sb3I6ICMwMDJkM2Q7XG59XG5cbmxpIHtcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xufVxuXG51bCB7XG4gIG1hcmdpbi10b3A6IDFweDtcbn1cblxuLnRvZ2dsZS1tZCB7XG4gIHBhZGRpbmc6IDBweDtcbn1cblxuLnRvZ2dsZUl0ZW0ge1xuICBtYXJnaW4tYm90dG9tOiBhdXRvO1xufVxuXG4uc3dpdGNoIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHdpZHRoOiA2MHB4O1xuICBoZWlnaHQ6IDM0cHg7XG59XG5cbi5zd2l0Y2ggaW5wdXQge1xuICBvcGFjaXR5OiAwO1xuICB3aWR0aDogMDtcbiAgaGVpZ2h0OiAwO1xufVxuXG4uc2xpZGVyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIGJvdHRvbTogMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2NjYztcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiAwLjRzO1xuICB0cmFuc2l0aW9uOiAwLjRzO1xufVxuXG4uc2xpZGVyOmJlZm9yZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgY29udGVudDogXCJcIjtcbiAgaGVpZ2h0OiAyNnB4O1xuICB3aWR0aDogMjZweDtcbiAgbGVmdDogNHB4O1xuICBib3R0b206IDRweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogMC40cztcbiAgdHJhbnNpdGlvbjogMC40cztcbn1cblxuaW5wdXQ6Y2hlY2tlZCArIC5zbGlkZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmViZTEwO1xufVxuXG5pbnB1dDpmb2N1cyArIC5zbGlkZXIge1xuICBib3gtc2hhZG93OiAwIDAgMXB4ICNmZWJlMTA7XG59XG5cbmlucHV0OmNoZWNrZWQgKyAuc2xpZGVyOmJlZm9yZSB7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDI2cHgpO1xuICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDI2cHgpO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMjZweCk7XG59XG5cbi8qIFJvdW5kZWQgc2xpZGVycyAqL1xuLnNsaWRlci5yb3VuZCB7XG4gIGJvcmRlci1yYWRpdXM6IDM0cHg7XG59XG5cbi5zbGlkZXIucm91bmQ6YmVmb3JlIHtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xufSJdLCJzb3VyY2VSb290IjoiIn0= */"]
});

/***/ })

}]);
//# sourceMappingURL=src_app_pages_notification-settings_notification-settings_module_ts.js.map