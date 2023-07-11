"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_notification-details_notification-details_module_ts"],{

/***/ 59827:
/*!***********************************************************************************!*\
  !*** ./src/app/pages/notification-details/notification-details-routing.module.ts ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NotificationDetailsPageRoutingModule": () => (/* binding */ NotificationDetailsPageRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _notification_details_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./notification-details.page */ 64691);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);




const routes = [{
  path: '',
  component: _notification_details_page__WEBPACK_IMPORTED_MODULE_0__.NotificationDetailsPage
}];
class NotificationDetailsPageRoutingModule {}
NotificationDetailsPageRoutingModule.ɵfac = function NotificationDetailsPageRoutingModule_Factory(t) {
  return new (t || NotificationDetailsPageRoutingModule)();
};
NotificationDetailsPageRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
  type: NotificationDetailsPageRoutingModule
});
NotificationDetailsPageRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](NotificationDetailsPageRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
})();

/***/ }),

/***/ 90989:
/*!***************************************************************************!*\
  !*** ./src/app/pages/notification-details/notification-details.module.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NotificationDetailsPageModule": () => (/* binding */ NotificationDetailsPageModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _notification_details_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./notification-details-routing.module */ 59827);
/* harmony import */ var _notification_details_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./notification-details.page */ 64691);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ 38699);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);







class NotificationDetailsPageModule {}
NotificationDetailsPageModule.ɵfac = function NotificationDetailsPageModule_Factory(t) {
  return new (t || NotificationDetailsPageModule)();
};
NotificationDetailsPageModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
  type: NotificationDetailsPageModule
});
NotificationDetailsPageModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule, _notification_details_routing_module__WEBPACK_IMPORTED_MODULE_0__.NotificationDetailsPageRoutingModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__.TranslateModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](NotificationDetailsPageModule, {
    declarations: [_notification_details_page__WEBPACK_IMPORTED_MODULE_1__.NotificationDetailsPage],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule, _notification_details_routing_module__WEBPACK_IMPORTED_MODULE_0__.NotificationDetailsPageRoutingModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__.TranslateModule]
  });
})();

/***/ }),

/***/ 64691:
/*!*************************************************************************!*\
  !*** ./src/app/pages/notification-details/notification-details.page.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NotificationDetailsPage": () => (/* binding */ NotificationDetailsPage)
/* harmony export */ });
/* harmony import */ var http_status_codes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! http-status-codes */ 92788);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser */ 34497);
/* harmony import */ var src_providers_utils_utils_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/providers/utils/utils.service */ 30423);
/* harmony import */ var _notificationDetailsService__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./notificationDetailsService */ 90589);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ 38699);
/* harmony import */ var src_providers_logger_service_logger_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/providers/logger-service/logger-service */ 9999);
/* harmony import */ var src_providers_utils_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/providers/utils/config */ 43485);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 94666);










function NotificationDetailsPage_section_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "section", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "ion-spinner", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
function NotificationDetailsPage_section_9_button_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function NotificationDetailsPage_section_9_button_3_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r5);
      const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r4.getNotificationdetails());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](2, 1, "generic_msgs.try_again"));
  }
}
function NotificationDetailsPage_section_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "section", 11)(1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](3, NotificationDetailsPage_section_9_button_3_Template, 3, 3, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r1.errorMsg);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r1.canTryAgain);
  }
}
function NotificationDetailsPage_div_10_ion_row_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "ion-row")(1, "img", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("load", function NotificationDetailsPage_div_10_ion_row_2_Template_img_load_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r10);
      const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r9.loaded = true);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("src", ctx_r6.replaceURL(ctx_r6.notificationsdetails.image), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeUrl"]);
  }
}
function NotificationDetailsPage_div_10_ion_row_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "ion-row")(1, "a", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r7.notificationsdetails.message);
  }
}
function NotificationDetailsPage_div_10_ion_row_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "ion-row", 18)(1, "ion-col", 19)(2, "button", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function NotificationDetailsPage_div_10_ion_row_4_Template_button_click_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r12);
      const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r11.openLink(ctx_r11.notificationsdetails._link));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r8.notificationsdetails.buttonText);
  }
}
function NotificationDetailsPage_div_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div")(1, "ion-card", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, NotificationDetailsPage_div_10_ion_row_2_Template, 2, 1, "ion-row", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](3, NotificationDetailsPage_div_10_ion_row_3_Template, 3, 1, "ion-row", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](4, NotificationDetailsPage_div_10_ion_row_4_Template, 5, 1, "ion-row", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r2.notificationsdetails.image);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r2.notificationsdetails.message);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r2.notificationsdetails.buttonText);
  }
}
class NotificationDetailsPage {
  constructor(_DomSanitizer, utils, detailsService, translate, logger, config, alertCtrl) {
    this._DomSanitizer = _DomSanitizer;
    this.utils = utils;
    this.detailsService = detailsService;
    this.translate = translate;
    this.logger = logger;
    this.config = config;
    this.alertCtrl = alertCtrl;
    // notificationType:any;
    this.canTryAgain = false;
    this.isShowingLoader = true;
    //selectedNotification :any;
    // notificationUnread:boolean;
    this.isSuccess = false;
    this.getNotficationDetailData = false;
    this.utils.analytics("notificationDetails");
    this.config.currentPage.pageName = "NotificationDetailsPage";
    // this.selectedNotification = this.navParams.data;
    this.notificationId = history.state.notification.id; //this.navParams.data;
    // this.notificationType = this.selectedNotification.type;
    // this.notificationUnread = this.selectedNotification.unread;
  }
  /**
  * This method is called when the page is loaded and here we will do Service calls.
  */
  // ionViewDidLoad() {
  // }
  ngOnInit() {
    this.logger.log('ionViewDidLoad NotificationsPage');
    this.getNotificationdetails();
  }
  /**
   * This method is used to get details selected Notification
   */
  getNotificationdetails() {
    if (this.utils.isDeviceOnLine()) {
      this.canTryAgain = false;
      let getcurrentNoti = this.notificationId;
      this.detailsService.getNotificationsDetails(getcurrentNoti).then(response => {
        try {
          this.isShowingLoader = false;
          if (response['responseJSON'] && response['responseJSON']['statusCode'] == http_status_codes__WEBPACK_IMPORTED_MODULE_5__.OK) {
            this.notificationsdetails = response['responseJSON'];
            this.getNotficationDetailData = true;
          } else {
            this.errorMsg = response['responseJSON']['error_description'];
            this.getNotficationDetailData = false;
          }
        } catch (e) {
          this.isShowingLoader = false;
          this.canTryAgain = true;
          this.errorMsg = this.translate.instant('generic_msgs.server_err');
          this.getNotficationDetailData = false;
        }
      }, error => {
        this.isShowingLoader = false;
        this.canTryAgain = true;
        this.errorMsg = this.utils.handleServiceException(error);
        this.getNotficationDetailData = false;
      });
    } else {
      this.isShowingLoader = false;
      this.canTryAgain = true;
      this.errorMsg = this.translate.instant('generic_msgs.network_err');
      this.getNotficationDetailData = false;
    }
  }
  /**
   * This method is used to set the notification as read
   */
  /** this method will call when user click on delete button on notification detail page
  * This method is used to delete the Notifications .
  */
  /**
   * Method used to repalce 'bpp1.' with ''
   * @param link - Image Url that need to be changed
   */
  replaceURL(link) {
    if (link != null && link != undefined) {
      link = link.replace('bpp1.', '');
      return link;
    }
  }
  /**
   * This method is used to open the url in bowser
   * @param link - selected Link item details Object
   */
  openLink(link) {
    if (link != null || link != undefined) {
      this.utils.openLink(link);
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
NotificationDetailsPage.ɵfac = function NotificationDetailsPage_Factory(t) {
  return new (t || NotificationDetailsPage)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__.DomSanitizer), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_providers_utils_utils_service__WEBPACK_IMPORTED_MODULE_0__.UtilService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_notificationDetailsService__WEBPACK_IMPORTED_MODULE_1__.NotificationDetailsService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__.TranslateService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_providers_logger_service_logger_service__WEBPACK_IMPORTED_MODULE_2__.LoggerServiceProvider), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_providers_utils_config__WEBPACK_IMPORTED_MODULE_3__.ConfigProvider), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_8__.AlertController));
};
NotificationDetailsPage.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
  type: NotificationDetailsPage,
  selectors: [["app-notification-details"]],
  decls: 11,
  vars: 6,
  consts: [["mode", "ios"], ["color", "primary"], ["slot", "start"], ["text", "", "icon", "chevron-back-outline", 2, "padding-left", "15px", "font-size", "0.7rem"], [1, "bold-font"], ["padding", "", "no-bounce", "", 1, "app_bg2", "text_color_base"], ["class", "spinnersection ion-text-center", 4, "ngIf"], ["class", "errorMsgSection white_container_border_radius", 4, "ngIf"], [4, "ngIf"], [1, "spinnersection", "ion-text-center"], ["name", "lines-sharp-small", 2, "height", "98%"], [1, "errorMsgSection", "white_container_border_radius"], [3, "click", 4, "ngIf"], [3, "click"], [1, "white_container_border_radius"], ["class", "lastRow", 4, "ngIf"], ["onError", "this.src='assets/imgs/placeholder-image.png';", "alt", "...", 1, "img", 3, "src", "load"], [1, "subtitle_Noti", "font_size_18", "topmargin"], [1, "lastRow"], [1, "ion-text-center"], ["ion-button", "", 1, "btn_center", "topmargin", "notiButn", 3, "click"]],
  template: function NotificationDetailsPage_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "ion-header", 0)(1, "ion-toolbar", 1)(2, "ion-buttons", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](3, "ion-back-button", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "ion-title", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](6, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "ion-content", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](8, NotificationDetailsPage_section_8_Template, 2, 0, "section", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](9, NotificationDetailsPage_section_9_Template, 4, 2, "section", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](10, NotificationDetailsPage_div_10_Template, 5, 3, "div", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](6, 4, "notifications_page.details_title"));
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.isShowingLoader);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx.getNotficationDetailData && !ctx.isShowingLoader);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.getNotficationDetailData);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.NgIf, _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonBackButton, _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonButtons, _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonCard, _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonCol, _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonContent, _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonHeader, _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonRow, _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonSpinner, _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonTitle, _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonToolbar, _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonBackButtonDelegate, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__.TranslatePipe],
  styles: [".link[_ngcontent-%COMP%] {\n  color: var(--ion-color-secondary);\n  text-decoration: underline;\n  white-space: nowrap !important;\n}\n\n.label[_ngcontent-%COMP%] {\n  width: 100% !important;\n  margin: 0px !important;\n  padding: 5px !important;\n}\n\n.spinnersection[_ngcontent-%COMP%] {\n  display: block;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  font-size: 1.3rem;\n  height: 98%;\n}\n\n.img[_ngcontent-%COMP%] {\n  height: 40vh;\n  width: 94% !important;\n  padding: 5px;\n  margin-top: 5px;\n  margin-bottom: 5px;\n  margin-left: auto;\n  margin-right: auto;\n}\n\n.subtitle_Noti[_ngcontent-%COMP%] {\n  margin-left: 5%;\n  color: #002d3d;\n}\n\n.topmargin[_ngcontent-%COMP%] {\n  margin-top: 10px;\n}\n\n.notiButn[_ngcontent-%COMP%] {\n  border-radius: 0px;\n  width: 65% !important;\n}\n\n.lastRow[_ngcontent-%COMP%] {\n  height: 100px;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcGFnZXMvbm90aWZpY2F0aW9uLWRldGFpbHMvbm90aWZpY2F0aW9uLWRldGFpbHMucGFnZS5zY3NzIiwid2VicGFjazovLy4vLi4vLi4vLi4vQWxsJTIwUHJvamVjdHMvTWFsYXlzaWFfQ2xpZW50QXBwX1JldmFtcC9TdW5BY2Nlc3NfSW9uaWM2X1JldmFtcC9zcmMvYXBwL3BhZ2VzL25vdGlmaWNhdGlvbi1kZXRhaWxzL25vdGlmaWNhdGlvbi1kZXRhaWxzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDSTtFQUNJLGlDQUFBO0VBQ0EsMEJBQUE7RUFDQSw4QkFBQTtBQ0FSOztBREdJO0VBQ0ksc0JBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0FDQVI7O0FERUk7RUFDRSxjQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxXQUFBO0FDQ047O0FEQ0s7RUFDRCxZQUFBO0VBQ0EscUJBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQ0VKOztBREFJO0VBQ0ksZUFBQTtFQUNBLGNBQUE7QUNHUjs7QURESTtFQUNJLGdCQUFBO0FDSVI7O0FERkk7RUFDSSxrQkFBQTtFQUFtQixxQkFBQTtBQ00zQjs7QURKSTtFQUNJLGFBQUE7QUNPUiIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4gICAgLmxpbmt7XHJcbiAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1zZWNvbmRhcnkpO1xyXG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xyXG4gICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXAgIWltcG9ydGFudDtcclxuICAgIH1cclxuXHJcbiAgICAubGFiZWx7XHJcbiAgICAgICAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcclxuICAgICAgICBtYXJnaW46IDBweCAhaW1wb3J0YW50O1xyXG4gICAgICAgIHBhZGRpbmc6IDVweCAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG4gICAgLnNwaW5uZXJzZWN0aW9uIHtcclxuICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICBmb250LXNpemU6IDEuM3JlbTtcclxuICAgICAgaGVpZ2h0OiA5OCU7XHJcbiAgICB9XHJcbiAgICAgLmltZ3tcclxuICAgIGhlaWdodDogNDB2aDtcclxuICAgIHdpZHRoOiA5NCUgIWltcG9ydGFudDtcclxuICAgIHBhZGRpbmc6IDVweDtcclxuICAgIG1hcmdpbi10b3A6IDVweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDVweDtcclxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG4gICAgfVxyXG4gICAgLnN1YnRpdGxlX05vdGl7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6NSU7XHJcbiAgICAgICAgY29sb3I6ICMwMDJkM2Q7XHJcbiAgICB9XHJcbiAgICAudG9wbWFyZ2lue1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICB9XHJcbiAgICAubm90aUJ1dG57XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMHB4O3dpZHRoOjY1JSAhaW1wb3J0YW50XHJcbiAgICB9XHJcbiAgICAubGFzdFJvd3tcclxuICAgICAgICBoZWlnaHQ6IDEwMHB4O1xyXG4gICAgfVxyXG5cclxuIiwiLmxpbmsge1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXNlY29uZGFyeSk7XG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwICFpbXBvcnRhbnQ7XG59XG5cbi5sYWJlbCB7XG4gIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XG4gIG1hcmdpbjogMHB4ICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmc6IDVweCAhaW1wb3J0YW50O1xufVxuXG4uc3Bpbm5lcnNlY3Rpb24ge1xuICBkaXNwbGF5OiBibG9jaztcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMS4zcmVtO1xuICBoZWlnaHQ6IDk4JTtcbn1cblxuLmltZyB7XG4gIGhlaWdodDogNDB2aDtcbiAgd2lkdGg6IDk0JSAhaW1wb3J0YW50O1xuICBwYWRkaW5nOiA1cHg7XG4gIG1hcmdpbi10b3A6IDVweDtcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xuICBtYXJnaW4tbGVmdDogYXV0bztcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xufVxuXG4uc3VidGl0bGVfTm90aSB7XG4gIG1hcmdpbi1sZWZ0OiA1JTtcbiAgY29sb3I6ICMwMDJkM2Q7XG59XG5cbi50b3BtYXJnaW4ge1xuICBtYXJnaW4tdG9wOiAxMHB4O1xufVxuXG4ubm90aUJ1dG4ge1xuICBib3JkZXItcmFkaXVzOiAwcHg7XG4gIHdpZHRoOiA2NSUgIWltcG9ydGFudDtcbn1cblxuLmxhc3RSb3cge1xuICBoZWlnaHQ6IDEwMHB4O1xufSJdLCJzb3VyY2VSb290IjoiIn0= */"]
});

/***/ })

}]);
//# sourceMappingURL=src_app_pages_notification-details_notification-details_module_ts.js.map