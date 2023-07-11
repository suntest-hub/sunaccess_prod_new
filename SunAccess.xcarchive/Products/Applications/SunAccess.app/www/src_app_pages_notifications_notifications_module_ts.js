"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_notifications_notifications_module_ts"],{

/***/ 24114:
/*!*********************************************************************!*\
  !*** ./src/app/pages/notifications/notifications-routing.module.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NotificationsPageRoutingModule": () => (/* binding */ NotificationsPageRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _notifications_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./notifications.page */ 44462);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);




const routes = [{
  path: '',
  component: _notifications_page__WEBPACK_IMPORTED_MODULE_0__.NotificationsPage
}];
class NotificationsPageRoutingModule {}
NotificationsPageRoutingModule.ɵfac = function NotificationsPageRoutingModule_Factory(t) {
  return new (t || NotificationsPageRoutingModule)();
};
NotificationsPageRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
  type: NotificationsPageRoutingModule
});
NotificationsPageRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](NotificationsPageRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
})();

/***/ }),

/***/ 44558:
/*!*************************************************************!*\
  !*** ./src/app/pages/notifications/notifications.module.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NotificationsPageModule": () => (/* binding */ NotificationsPageModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _notifications_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./notifications-routing.module */ 24114);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ 38699);
/* harmony import */ var _notifications_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./notifications.page */ 44462);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);







class NotificationsPageModule {}
NotificationsPageModule.ɵfac = function NotificationsPageModule_Factory(t) {
  return new (t || NotificationsPageModule)();
};
NotificationsPageModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
  type: NotificationsPageModule
});
NotificationsPageModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule, _notifications_routing_module__WEBPACK_IMPORTED_MODULE_0__.NotificationsPageRoutingModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__.TranslateModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](NotificationsPageModule, {
    declarations: [_notifications_page__WEBPACK_IMPORTED_MODULE_1__.NotificationsPage],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule, _notifications_routing_module__WEBPACK_IMPORTED_MODULE_0__.NotificationsPageRoutingModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__.TranslateModule]
  });
})();

/***/ }),

/***/ 44462:
/*!***********************************************************!*\
  !*** ./src/app/pages/notifications/notifications.page.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NotificationsPage": () => (/* binding */ NotificationsPage)
/* harmony export */ });
/* harmony import */ var src_app_app_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/app.component */ 55041);
/* harmony import */ var http_status_codes__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! http-status-codes */ 92788);
/* harmony import */ var src_providers_utils_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/providers/utils/config */ 43485);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _notification_details_notificationDetailsService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../notification-details/notificationDetailsService */ 90589);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var src_providers_utils_utils_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/providers/utils/utils.service */ 30423);
/* harmony import */ var _notificationsService__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./notificationsService */ 95536);
/* harmony import */ var _services_translate_config_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/translate-config.service */ 45340);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ngx-translate/core */ 38699);
/* harmony import */ var src_providers_logger_service_logger_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/providers/logger-service/logger-service */ 9999);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ 94666);

// import { NotificationDetailsService } from './notificationdetails';
//import { AlertController } from 'ionic-angular/components/alert/alert-controller';













function NotificationsPage_section_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "section", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "ion-spinner", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
}
function NotificationsPage_section_8_button_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function NotificationsPage_section_8_button_3_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r5);
      const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r4.getNotifications(undefined));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](2, 1, "generic_msgs.try_again"));
  }
}
function NotificationsPage_section_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "section", 10)(1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](3, NotificationsPage_section_8_button_3_Template, 3, 3, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx_r1.errorMsg);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r1.canTryAgain);
  }
}
const _c0 = function (a0, a1) {
  return {
    "customCardUnread": a0,
    "customCardRead": a1
  };
};
const _c1 = function (a0) {
  return {
    "UnreadNotification": a0
  };
};
function NotificationsPage_div_9_ion_item_sliding_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "ion-item-sliding", 14, 17)(2, "ion-item", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function NotificationsPage_div_9_ion_item_sliding_2_Template_ion_item_click_2_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r11);
      const notification_r8 = restoredCtx.$implicit;
      const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r10.navToDetails(notification_r8));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "ion-row", 19)(4, "ion-col", 20)(5, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](7, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](8, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](10, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](11, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](13, "ion-col", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](15, "ion-item-options", 23)(16, "ion-button", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function NotificationsPage_div_9_ion_item_sliding_2_Template_ion_button_click_16_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r11);
      const notification_r8 = restoredCtx.$implicit;
      const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](1);
      const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r12.askToDelete(_r9, notification_r8));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](17, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](18, "ion-icon", 25)(19, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](20, "ion-label", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](21, "DELETE");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()()();
  }
  if (rf & 2) {
    const notification_r8 = ctx.$implicit;
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction2"](6, _c0, notification_r8.unread === true, notification_r8.unread === false));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"]("", ctx_r6.setDay(notification_r8.date), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx_r6.setMonth(notification_r8.date));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx_r6.setYear(notification_r8.date));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction1"](9, _c1, notification_r8.unread === true));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", notification_r8.title, " ");
  }
}
function NotificationsPage_div_9_ion_infinite_scroll_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "ion-infinite-scroll", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("ionInfinite", function NotificationsPage_div_9_ion_infinite_scroll_3_Template_ion_infinite_scroll_ionInfinite_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r14);
      const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r13.getMoreNotifications($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "ion-infinite-scroll-content");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
}
function NotificationsPage_div_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 13)(1, "ion-list", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](2, NotificationsPage_div_9_ion_item_sliding_2_Template, 22, 11, "ion-item-sliding", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](3, NotificationsPage_div_9_ion_infinite_scroll_3_Template, 2, 0, "ion-infinite-scroll", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx_r2.notifications);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", !ctx_r2.isLastPageReached);
  }
}
class NotificationsPage {
  constructor(router, detailsService, menu, utils, config, notificationsService, translate, translateService, logger, platform, ref, alertCtrl) {
    this.router = router;
    this.detailsService = detailsService;
    this.menu = menu;
    this.utils = utils;
    this.config = config;
    this.notificationsService = notificationsService;
    this.translate = translate;
    this.translateService = translateService;
    this.logger = logger;
    this.platform = platform;
    this.ref = ref;
    this.alertCtrl = alertCtrl;
    // @ViewChild(Content) content: Content;
    this.notifications = [];
    this.isShowingLoader = true;
    this.canTryAgain = false;
    this.isServiceCallInProgress = false;
    this.isLastPageReached = false;
    this.hasRecords = true;
    this.pageNum = 1;
    this.isSuccess = false;
    this.utils.analytics("Notifications");
    this.config.currentPage.pageName = "NotificationsPage";
    console.log('notifications', this.notifications);
  }
  /**
  * This method is called when the page is loaded and here we will do Service calls.
  */
  // ionViewDidLoad() {
  // }
  ngOnInit() {
    this.logger.log('ionViewDidLoad NotificationsPage');
    this.month_names_short = this.config.months;
    this.getNotifications(undefined);
  }
  /**
   * In this method we are updating the side menu title
   */
  ionViewWillEnter() {
    this.utils.component.emit(src_app_app_component__WEBPACK_IMPORTED_MODULE_0__.MenuOptions.NOTIFICATIONS);
  }
  /**
   * This method is used to get list of Notifications from Server
   */
  getNotifications(infinite) {
    if (this.utils.isDeviceOnLine()) {
      if (this.pageNum <= this.lastPageIndex) {
        return;
      }
      this.lastPageIndex = this.pageNum;
      this.isServiceCallInProgress = true;
      this.hasRecords = true;
      if (infinite == undefined) {
        this.canTryAgain = false;
        this.isShowingLoader = true;
        this.errorMsg = "";
      }
      this.notificationsService.getNotificationsList(this.pageNum).then(response => {
        try {
          if (this.notifications.length > 0) {
            this.notifications = this.notifications.concat(response['responseJSON']['array']);
          } else {
            this.notifications = response['responseJSON']['array'];
            src_providers_utils_config__WEBPACK_IMPORTED_MODULE_1__.ConfigProvider.PAGE_SIZE = response['responseJSON']['pageSize'];
          }
          // if (this.pageNum == 1) {
          //     var contentHeight = this.content.getContentDimensions().contentHeight;
          //     var pageHeight = this.platform.height();
          //     if (contentHeight < pageHeight) {
          //         this.pageNum++;
          //         this.getNotifications(undefined);
          //     }
          // }
          this.isServiceCallInProgress = false;
          if (!(this.notifications.length > 0)) {
            if (infinite == undefined) {
              this.canTryAgain = false;
              this.errorMsg = this.translateService.instant('generic_msgs.no_data');
            }
            if (response['responseJSON']['array'].length < src_providers_utils_config__WEBPACK_IMPORTED_MODULE_1__.ConfigProvider.PAGE_SIZE) {
              this.isLastPageReached = true;
              if (infinite) infinite.enable(false);
            } else {
              this.pageNum++;
            }
          } else {
            if (response['responseJSON']['array'].length < src_providers_utils_config__WEBPACK_IMPORTED_MODULE_1__.ConfigProvider.PAGE_SIZE) {
              this.isLastPageReached = true;
              if (infinite) infinite.enable(false);
            } else {
              this.pageNum++;
            }
          }
          if (infinite != undefined) infinite.complete();else {
            this.isShowingLoader = false;
          }
        } catch (e) {
          this.isServiceCallInProgress = false;
          if (infinite == undefined) {
            this.isShowingLoader = false;
            this.canTryAgain = true;
            this.errorMsg = this.translateService.instant('generic_msgs.error_err');
          } else {
            infinite.complete();
          }
        }
      }, err => {
        this.isServiceCallInProgress = false;
        if (infinite == undefined) {
          this.isShowingLoader = false;
          this.canTryAgain = true;
          this.errorMsg = this.utils.handleServiceException(err);
        } else {
          infinite.complete();
        }
      });
    } else {
      this.isServiceCallInProgress = false;
      if (infinite == undefined) {
        this.isShowingLoader = false;
        this.canTryAgain = true;
        this.errorMsg = this.translateService.instant('generic_msgs.network_err');
      } else {
        infinite.complete();
      }
    }
  }
  /**
   * This method is used to naviagte Notification Details Page
   * @param notification  - selected Notification Data
   */
  navToDetails(notification) {
    if (notification.type === 2) {
      // this.navCtrl.push(AnnualStatementsPage);
      this.router.navigate(['/annual-statements']);
      if (notification.unread) {
        this.updateNotiAsRead(notification);
      }
    } else {
      //  this.navCtrl.push(NotificationDetailsPage, notification.id);
      this.router.navigate(['/notification-details'], {
        state: {
          notification
        }
      });
      if (notification.unread) {
        this.updateNotiAsRead(notification);
      }
    }
  }
  /**
   * This method is used to set the notification as read
   */
  updateNotiAsRead(currentNoti) {
    console.log("currentNoti.unread", currentNoti);
    currentNoti.unread = false;
    this.detailsService.setNotificationRead(currentNoti.id).then(response => {
      try {
        this.isShowingLoader = false;
        if (response['responseJSON'] && response['responseJSON']['statusCode'] == http_status_codes__WEBPACK_IMPORTED_MODULE_8__.OK) {
          this.config.userInfo.unreadNoti = this.config.userInfo.unreadNoti - 1;
          this.utils.publishSomeData({
            'event': 'UnreadNotiUpdated',
            'data': this.config.userInfo.unreadNoti
          });
        }
      } catch (e) {
        this.isShowingLoader = false;
        this.canTryAgain = true;
        this.errorMsg = this.translateService.instant('generic_msgs.server_err');
      }
    }, error => {
      this.isShowingLoader = false;
      this.canTryAgain = true;
      this.errorMsg = this.utils.handleServiceException(error);
    });
  }
  UpdatedeleteNotification(currentNoti) {
    this.logger.trace("PUT USER Notification delete--start");
    this.utils.showProgressLoader();
    let currentNotiDel = currentNoti.id;
    if (this.utils.isDeviceOnLine()) {
      this.detailsService.setNotificationsDelete(currentNotiDel).then(res => {
        try {
          this.utils.dissmisProgressLoader();
          if (res['responseJSON'] && res['responseJSON']['statusCode'] == http_status_codes__WEBPACK_IMPORTED_MODULE_8__.OK) {
            this.errorMsg = res['responseJSON']['userMessage'];
            this.isSuccess = true;
            if (currentNoti.unread) {
              this.config.userInfo.unreadNoti = this.config.userInfo.unreadNoti - 1;
              this.utils.publishSomeData({
                'event': 'UnreadNotiUpdated',
                'data': this.config.userInfo.unreadNoti
              });
            }
            const index = this.notifications.findIndex(item => item.id === currentNoti.id);
            this.notifications.splice(index, 1);
          } else if (res['responseJSON'] && res['responseJSON']['statusCode'] == http_status_codes__WEBPACK_IMPORTED_MODULE_8__.ACCEPTED) {
            this.errorMsg = res['responseJSON']['userMessage'];
          } else {
            this.logger.error("PUT USER Notification delete Update : " + JSON.stringify(res));
            this.errorMsg = this.translateService.instant('generic_msgs.server_err');
            this.isSuccess = false;
          }
        } catch (e) {
          this.utils.dissmisProgressLoader();
          this.isSuccess = false;
          this.logger.error("PUT USER Notification delete Update : " + JSON.stringify(e));
          this.errorMsg = this.translateService.instant('generic_msgs.server_err');
        }
      }, err => {
        this.utils.dissmisProgressLoader();
        this.isSuccess = false;
        this.logger.error("PUT USER Notification delete Update : " + JSON.stringify(err));
        this.errorMsg = this.utils.handleServiceException(err);
      });
    } else {
      this.isShowingLoader = false;
      this.isSuccess = false;
      this.errorMsg = this.translateService.instant('generic_msgs.network_err');
    }
  }
  /** this methos is to get Day from the date*/
  setDay(date) {
    this.sday = date.split("-", 3);
    return this.sday[0];
  }
  /** this methos is to get Month from the date*/
  setMonth(date) {
    this.smonth = date.split("-", 3);
    var month = this.smonth[1];
    return this.month_names_short[month - 1];
  }
  setYear(date) {
    this.syear = date.split("-", 3);
    return this.syear[2];
  }
  /**
   * This method is used to open the url in bowser
   * @param link - selected Link item details Object
   */
  openLink(link) {
    if (link != null && link != undefined) {
      this.utils.openLink(link);
    }
  }
  /**
  *
  * @param infinite  - this is the event callback from Infinite scroll.
  * Here we perform request for pagination.
  */
  getMoreNotifications(infinite) {
    // This is required to handle multiple triggers from Ionic load more
    if (this.loadMoreTimer) {
      clearTimeout(this.loadMoreTimer);
    }
    this.loadMoreTimer = setTimeout(() => {
      this.logger.trace("NotificationsPage --getMoreNotifications--start--infinite : " + infinite);
      if (!this.isServiceCallInProgress) {
        this.getNotifications(infinite);
      }
      this.logger.trace("NotificationsPage--getMoreNotifications--end");
      this.loadMoreTimer = null;
    }, 800);
  }
  askToDelete(slidingItem, selectedNoti) {
    let alert = this.alertCtrl.create({
      header: 'Notification',
      message: this.translateService.instant('notifications_page.deleteConfirmMsg'),
      buttons: [{
        text: 'No',
        handler: () => {
          console.log('Cancel clicked');
          slidingItem.close();
        }
      }, {
        text: 'Yes',
        handler: () => {
          this.UpdatedeleteNotification(selectedNoti);
        }
      }]
    }).then(alert => alert.present());
  }
}
NotificationsPage.ɵfac = function NotificationsPage_Factory(t) {
  return new (t || NotificationsPage)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_9__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_notification_details_notificationDetailsService__WEBPACK_IMPORTED_MODULE_2__.NotificationDetailsService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_10__.MenuController), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_providers_utils_utils_service__WEBPACK_IMPORTED_MODULE_3__.UtilService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_providers_utils_config__WEBPACK_IMPORTED_MODULE_1__.ConfigProvider), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_notificationsService__WEBPACK_IMPORTED_MODULE_4__.NotificationService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_services_translate_config_service__WEBPACK_IMPORTED_MODULE_5__.TranslateConfigService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__.TranslateService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_providers_logger_service_logger_service__WEBPACK_IMPORTED_MODULE_6__.LoggerServiceProvider), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_10__.Platform), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_7__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_10__.AlertController));
};
NotificationsPage.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({
  type: NotificationsPage,
  selectors: [["app-notifications"]],
  decls: 10,
  vars: 6,
  consts: [["mode", "ios"], ["color", "primary", 1, "toolbar"], ["slot", "start", "auto-hide", "false", "color", "secondary"], [1, "bold-font"], ["padding", "", "no-bounce", "", 1, "app_bg2"], ["class", "spinnersection ion-text-center", 4, "ngIf"], ["class", "errorMsgSection white_container_border_radius", 4, "ngIf"], ["class", "text_color_base padding_015", 4, "ngIf"], [1, "spinnersection", "ion-text-center"], ["name", "lines-sharp-small", 2, "height", "98%"], [1, "errorMsgSection", "white_container_border_radius"], [3, "click", 4, "ngIf"], [3, "click"], [1, "text_color_base", "padding_015"], [2, "background", "transparent !important"], ["style", "background: transparent !important", 4, "ngFor", "ngForOf"], [3, "ionInfinite", 4, "ngIf"], ["slidingItem", ""], ["detail", "", "lines", "none", 3, "ngClass", "click"], [1, "NotiRow"], ["size", "3", 1, "margin_top_bottom_auto", "dateBlock"], [1, "font_size_18"], ["size", "8", 1, "margin_top_bottom_auto", "font_size_18", 2, "text-align", "justify", "white-space", "initial !important", 3, "ngClass"], ["slot", "end"], [1, "deleteBtn", "danger", 3, "click"], ["name", "trash"], [2, "display", "block"], [3, "ionInfinite"]],
  template: function NotificationsPage_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "ion-header", 0)(1, "ion-toolbar", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](2, "ion-menu-button", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "ion-title", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](5, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](6, "ion-content", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](7, NotificationsPage_section_7_Template, 2, 0, "section", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](8, NotificationsPage_section_8_Template, 4, 2, "section", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](9, NotificationsPage_div_9_Template, 4, 2, "div", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](5, 4, "notifications_page.title"), " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.isShowingLoader);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", !(ctx.notifications.length > 0) && !ctx.isShowingLoader);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.notifications.length > 0);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_12__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_12__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_12__.NgIf, _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.IonButton, _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.IonCol, _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.IonContent, _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.IonHeader, _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.IonIcon, _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.IonInfiniteScroll, _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.IonInfiniteScrollContent, _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.IonItem, _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.IonItemOptions, _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.IonItemSliding, _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.IonLabel, _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.IonList, _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.IonMenuButton, _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.IonRow, _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.IonSpinner, _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.IonTitle, _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.IonToolbar, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__.TranslatePipe],
  styles: [".label[_ngcontent-%COMP%] {\n  margin: 0px !important;\n  width: 100% !important;\n  padding: 5px;\n  white-space: nowrap !important;\n}\n\n.card[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.7) !important;\n  border-radius: 15px;\n}\n\n.NotiRow[_ngcontent-%COMP%] {\n  height: 110px;\n}\n\n.dateBlock[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-family: Agenda-Regular;\n  font-size: 2.6rem !important;\n  text-align: center;\n  color: var(--ion-color-secondary);\n  margin-top: 15px;\n  line-height: 24px;\n  margin-bottom: 10px;\n}\n\n.customCardUnread[_ngcontent-%COMP%] {\n  height: 110px;\n  background: #f3f5f6 !important;\n  border-radius: 15px;\n  margin: 5px;\n  width: calc(100% - 20px);\n  font-size: 1.4rem;\n  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 1px 5px 0 rgba(0, 0, 0, 0.12);\n  display: block;\n  overflow: hidden;\n  font-family: \"Agenda-Regular\";\n  font-weight: normal;\n  margin-left: 3%;\n}\n\n.customCardRead[_ngcontent-%COMP%] {\n  height: 110px;\n  background: #ffffff !important;\n  border-radius: 15px;\n  margin: 5px;\n  width: calc(100% - 20px);\n  font-size: 1.4rem;\n  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 1px 5px 0 rgba(0, 0, 0, 0.12);\n  display: block;\n  overflow: hidden;\n  font-family: \"Agenda-Regular\";\n  font-weight: normal;\n  margin-left: 3%;\n}\n\n.list-md[_ngcontent-%COMP%]   ion-item-options[_ngcontent-%COMP%]   .button[_ngcontent-%COMP%] {\n  margin: auto;\n  border-radius: 0;\n  display: inline-flex;\n  align-items: center;\n  height: 60%;\n}\n\n.list-md[_ngcontent-%COMP%]   ion-item-options[_ngcontent-%COMP%] {\n  border-bottom: none;\n}\n\n.list-ios[_ngcontent-%COMP%]   ion-item-options[_ngcontent-%COMP%]   .button[_ngcontent-%COMP%] {\n  margin: auto;\n  --border-radius: 0px !important;\n  height: 65%;\n  min-height: 60%;\n}\n\n.spinnersection[_ngcontent-%COMP%] {\n  display: block;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  font-size: 1.3rem;\n  height: 98%;\n}\n\n.errorMsgSection[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  height: 98%;\n  font-size: 0.8rem;\n  color: #494747 !important;\n  padding: 0px 15px;\n}\n\n.UnreadNotification[_ngcontent-%COMP%] {\n  font-weight: bold;\n}\n\n.deleteBtn[_ngcontent-%COMP%] {\n  margin-right: 5% !important;\n}\n\n@media only screen and (max-width: 374px) {\n  p[_ngcontent-%COMP%], .col.font_size_18[_ngcontent-%COMP%] {\n    font-size: 17px !important;\n  }\n}\n@media only screen and (max-width: 320px) {\n  p[_ngcontent-%COMP%], .col.font_size_18[_ngcontent-%COMP%] {\n    font-size: 15px !important;\n  }\n}\n.danger[_ngcontent-%COMP%] {\n  color: var(--ion-color-secondary-contrast) !important;\n  --background: var(--ion-color-danger) !important;\n}\n\n.padding_015[_ngcontent-%COMP%] {\n  padding: 0px 18px;\n}\n\n.margin_top_bottom_auto[_ngcontent-%COMP%] {\n  margin-top: auto;\n  margin-bottom: auto;\n}\n\nion-item[_ngcontent-%COMP%] {\n  --detail-icon-color:black;\n}\n\nion-button[_ngcontent-%COMP%]   .button-inner[_ngcontent-%COMP%] {\n  flex-flow: column;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcGFnZXMvbm90aWZpY2F0aW9ucy9ub3RpZmljYXRpb25zLnBhZ2Uuc2NzcyIsIndlYnBhY2s6Ly8uLy4uLy4uLy4uL0FsbCUyMFByb2plY3RzL01hbGF5c2lhX0NsaWVudEFwcF9SZXZhbXAvU3VuQWNjZXNzX0lvbmljNl9SZXZhbXAvc3JjL2FwcC9wYWdlcy9ub3RpZmljYXRpb25zL25vdGlmaWNhdGlvbnMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksc0JBQUE7RUFDQSxzQkFBQTtFQUNBLFlBQUE7RUFDQSw4QkFBQTtBQ0NKOztBREVBO0VBQ0ksK0NBQUE7RUFDQSxtQkFBQTtBQ0NKOztBRENBO0VBQ0ksYUFBQTtBQ0VKOztBREFBO0VBUUksMkJBQUE7RUFDQSw0QkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUNBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7QUNKSjs7QURNRTtFQUNNLGFBQUE7RUFDQSw4QkFBQTtFQUNSLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLHdCQUFBO0VBQ0EsaUJBQUE7RUFFQSwrR0FBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLDZCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0FDSEE7O0FETUE7RUFDUSxhQUFBO0VBQ0EsOEJBQUE7RUFFUixtQkFBQTtFQUNBLFdBQUE7RUFDQSx3QkFBQTtFQUNBLGlCQUFBO0VBRUEsK0dBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSw2QkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtBQ0pBOztBRFFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBSUEsb0JBQUE7RUFJQSxtQkFBQTtFQUNBLFdBQUE7QUNMQTs7QURPQTtFQUNDLG1CQUFBO0FDSkQ7O0FETUE7RUFDQSxZQUFBO0VBQ0EsK0JBQUE7RUFTQSxXQUFBO0VBQ0EsZUFBQTtBQ1hBOztBRGFBO0VBQ0UsY0FBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0EsV0FBQTtBQ1ZGOztBRFlBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtFQUNBLHlCQUFBO0VBQ0EsaUJBQUE7QUNURjs7QURjQTtFQUNBLGlCQUFBO0FDWEE7O0FEYUE7RUFDQSwyQkFBQTtBQ1ZBOztBRFlBO0VBQ0k7SUFDSSwwQkFBQTtFQ1ROO0FBQ0Y7QURZQTtFQUNJO0lBQ0ksMEJBQUE7RUNWTjtBQUNGO0FEWUE7RUFDSSxxREFBQTtFQUNBLGdEQUFBO0FDVko7O0FEWUM7RUFDRyxpQkFBQTtBQ1RKOztBRFdBO0VBQ0ksZ0JBQUE7RUFDQSxtQkFBQTtBQ1JKOztBRFVBO0VBRUcseUJBQUE7QUNSSDs7QURZSTtFQUNJLGlCQUFBO0FDVFIiLCJzb3VyY2VzQ29udGVudCI6WyIubGFiZWx7XHJcbiAgICBtYXJnaW46IDBweCAhaW1wb3J0YW50O1xyXG4gICAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcclxuICAgIHBhZGRpbmc6IDVweDtcclxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXAgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmNhcmR7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNykgIWltcG9ydGFudDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XHJcbn1cclxuLk5vdGlSb3d7XHJcbiAgICBoZWlnaHQ6IDExMHB4O1xyXG59XHJcbi5kYXRlQmxvY2sgcHtcclxuICAgIC8vIGZvbnQtZmFtaWx5OiBBZ2VuZGEtUmVndWxhcjtcclxuICAgIC8vIGZvbnQtc2l6ZTogMS4zcmVtICFpbXBvcnRhbnQ7XHJcbiAgICAvLyB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAvLyBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXNlY29uZGFyeSk7XHJcbiAgICAvLyBtYXJnaW4tdG9wOiA4cHg7XHJcbiAgICAvLyBsaW5lLWhlaWdodDogMzFweDtcclxuICAgIC8vIG1hcmdpbi1ib3R0b206IDVweDtcclxuICAgIGZvbnQtZmFtaWx5OiBBZ2VuZGEtUmVndWxhcjtcclxuICAgIGZvbnQtc2l6ZTogMi42cmVtICFpbXBvcnRhbnQ7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXNlY29uZGFyeSk7XHJcbiAgICBtYXJnaW4tdG9wOiAxNXB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDI0cHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG59XHJcbiAgLmN1c3RvbUNhcmRVbnJlYWR7XHJcbiAgICAgICAgaGVpZ2h0OiAxMTBweDtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAjZjNmNWY2ICFpbXBvcnRhbnQ7XHJcbmJvcmRlci1yYWRpdXM6IDE1cHg7XHJcbm1hcmdpbjogNXB4O1xyXG53aWR0aDogY2FsYygxMDAlIC0gMjBweCk7XHJcbmZvbnQtc2l6ZTogMS40cmVtO1xyXG4td2Via2l0LWJveC1zaGFkb3c6IDAgMnB4IDJweCAwIHJnYmEoMCwgMCwgMCwgMC4xNCksIDAgM3B4IDFweCAtMnB4IHJnYmEoMCwgMCwgMCwgMC4yKSwgMCAxcHggNXB4IDAgcmdiYSgwLCAwLCAwLCAwLjEyKTtcclxuYm94LXNoYWRvdzogMCAycHggMnB4IDAgcmdiYSgwLCAwLCAwLCAwLjE0KSwgMCAzcHggMXB4IC0ycHggcmdiYSgwLCAwLCAwLCAwLjIpLCAwIDFweCA1cHggMCByZ2JhKDAsIDAsIDAsIDAuMTIpO1xyXG5kaXNwbGF5OiBibG9jaztcclxub3ZlcmZsb3c6IGhpZGRlbjtcclxuZm9udC1mYW1pbHk6IFwiQWdlbmRhLVJlZ3VsYXJcIjtcclxuZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxubWFyZ2luLWxlZnQ6IDMlO1xyXG5cclxufVxyXG4uY3VzdG9tQ2FyZFJlYWR7XHJcbiAgICAgICAgaGVpZ2h0OiAxMTBweDtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmZmZmIWltcG9ydGFudDtcclxuICAgICAgICAvL2JhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC43KSAhaW1wb3J0YW50O1xyXG5ib3JkZXItcmFkaXVzOiAxNXB4O1xyXG5tYXJnaW46IDVweDtcclxud2lkdGg6IGNhbGMoMTAwJSAtIDIwcHgpO1xyXG5mb250LXNpemU6IDEuNHJlbTtcclxuLXdlYmtpdC1ib3gtc2hhZG93OiAwIDJweCAycHggMCByZ2JhKDAsIDAsIDAsIDAuMTQpLCAwIDNweCAxcHggLTJweCByZ2JhKDAsIDAsIDAsIDAuMiksIDAgMXB4IDVweCAwIHJnYmEoMCwgMCwgMCwgMC4xMik7XHJcbmJveC1zaGFkb3c6IDAgMnB4IDJweCAwIHJnYmEoMCwgMCwgMCwgMC4xNCksIDAgM3B4IDFweCAtMnB4IHJnYmEoMCwgMCwgMCwgMC4yKSwgMCAxcHggNXB4IDAgcmdiYSgwLCAwLCAwLCAwLjEyKTtcclxuZGlzcGxheTogYmxvY2s7XHJcbm92ZXJmbG93OiBoaWRkZW47XHJcbmZvbnQtZmFtaWx5OiBcIkFnZW5kYS1SZWd1bGFyXCI7XHJcbmZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbm1hcmdpbi1sZWZ0OiAzJTtcclxuXHJcbn1cclxuXHJcbi5saXN0LW1kIGlvbi1pdGVtLW9wdGlvbnMgLmJ1dHRvbiB7XHJcbm1hcmdpbjogYXV0bztcclxuYm9yZGVyLXJhZGl1czogMDtcclxuZGlzcGxheTogLXdlYmtpdC1pbmxpbmUtYm94O1xyXG5kaXNwbGF5OiAtd2Via2l0LWlubGluZS1mbGV4O1xyXG5kaXNwbGF5OiAtbXMtaW5saW5lLWZsZXhib3g7XHJcbmRpc3BsYXk6IGlubGluZS1mbGV4O1xyXG4td2Via2l0LWJveC1hbGlnbjogY2VudGVyO1xyXG4td2Via2l0LWFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbi1tcy1mbGV4LWFsaWduOiBjZW50ZXI7XHJcbmFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbmhlaWdodDogNjAlO1xyXG59XHJcbi5saXN0LW1kIGlvbi1pdGVtLW9wdGlvbnMge1xyXG4gYm9yZGVyLWJvdHRvbTogbm9uZTtcclxufVxyXG4ubGlzdC1pb3MgaW9uLWl0ZW0tb3B0aW9ucyAuYnV0dG9uIHtcclxubWFyZ2luOiBhdXRvO1xyXG4tLWJvcmRlci1yYWRpdXM6IDBweCAhaW1wb3J0YW50O1xyXG4vLyBkaXNwbGF5OiAtd2Via2l0LWlubGluZS1ib3g7XHJcbi8vIGRpc3BsYXk6IC13ZWJraXQtaW5saW5lLWZsZXg7XHJcbi8vIGRpc3BsYXk6IC1tcy1pbmxpbmUtZmxleGJveDtcclxuLy8gZGlzcGxheTogaW5saW5lLWZsZXg7XHJcbi8vIC13ZWJraXQtYm94LWFsaWduOiBjZW50ZXI7XHJcbi8vIC13ZWJraXQtYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuLy8gLW1zLWZsZXgtYWxpZ246IGNlbnRlcjtcclxuLy8gYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuaGVpZ2h0OiA2NSU7XHJcbm1pbi1oZWlnaHQ6IDYwJTtcclxufVxyXG4uc3Bpbm5lcnNlY3Rpb24ge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBmb250LXNpemU6IDEuM3JlbTtcclxuICBoZWlnaHQ6IDk4JTtcclxufVxyXG4uZXJyb3JNc2dTZWN0aW9uIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBoZWlnaHQ6IDk4JTtcclxuICBmb250LXNpemU6IDAuOHJlbTtcclxuICBjb2xvcjogIzQ5NDc0NyAhaW1wb3J0YW50O1xyXG4gIHBhZGRpbmc6IDBweCAxNXB4O1xyXG59XHJcbi8vIC5saXN0LWlvcyBpb24taXRlbS1vcHRpb25zIHtcclxuLy8gIGJvcmRlci1ib3R0b206IG5vbmU7XHJcbi8vIH1cclxuLlVucmVhZE5vdGlmaWNhdGlvbntcclxuZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuLmRlbGV0ZUJ0bntcclxubWFyZ2luLXJpZ2h0OiA1JSAhaW1wb3J0YW50O1xyXG59XHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMzc0cHgpIHtcclxuICAgIHAsLmNvbC5mb250X3NpemVfMTgge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTdweCAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDMyMHB4KSB7XHJcbiAgICBwLC5jb2wuZm9udF9zaXplXzE4IHtcclxuICAgICAgICBmb250LXNpemU6IDE1cHggIWltcG9ydGFudDtcclxuICAgIH1cclxufVxyXG4uZGFuZ2Vye1xyXG4gICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1zZWNvbmRhcnktY29udHJhc3QpICFpbXBvcnRhbnQ7XHJcbiAgICAtLWJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1kYW5nZXIpICFpbXBvcnRhbnQ7XHJcbiB9XHJcbiAucGFkZGluZ18wMTUge1xyXG4gICAgcGFkZGluZzogMHB4IDE4cHg7XHJcbn1cclxuLm1hcmdpbl90b3BfYm90dG9tX2F1dG8ge1xyXG4gICAgbWFyZ2luLXRvcDogYXV0bztcclxuICAgIG1hcmdpbi1ib3R0b206IGF1dG87XHJcbn1cclxuaW9uLWl0ZW0ge1xyXG4gICAvLyAtLWlvbi1pdGVtLWJhY2tncm91bmQ6ICNkZGQ7XHJcbiAgIC0tZGV0YWlsLWljb24tY29sb3I6YmxhY2s7XHJcbiAvLyAgLS1ib3JkZXItY29sb3I6cmdiKDAsIDAsIDApO1xyXG4gIH1cclxuICBpb24tYnV0dG9uIHtcclxuICAgIC5idXR0b24taW5uZXIge1xyXG4gICAgICAgIGZsZXgtZmxvdzogY29sdW1uO1xyXG4gICAgICB9XHJcbiAgICB9IiwiLmxhYmVsIHtcbiAgbWFyZ2luOiAwcHggIWltcG9ydGFudDtcbiAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcbiAgcGFkZGluZzogNXB4O1xuICB3aGl0ZS1zcGFjZTogbm93cmFwICFpbXBvcnRhbnQ7XG59XG5cbi5jYXJkIHtcbiAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjcpICFpbXBvcnRhbnQ7XG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XG59XG5cbi5Ob3RpUm93IHtcbiAgaGVpZ2h0OiAxMTBweDtcbn1cblxuLmRhdGVCbG9jayBwIHtcbiAgZm9udC1mYW1pbHk6IEFnZW5kYS1SZWd1bGFyO1xuICBmb250LXNpemU6IDIuNnJlbSAhaW1wb3J0YW50O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5KTtcbiAgbWFyZ2luLXRvcDogMTVweDtcbiAgbGluZS1oZWlnaHQ6IDI0cHg7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG5cbi5jdXN0b21DYXJkVW5yZWFkIHtcbiAgaGVpZ2h0OiAxMTBweDtcbiAgYmFja2dyb3VuZDogI2YzZjVmNiAhaW1wb3J0YW50O1xuICBib3JkZXItcmFkaXVzOiAxNXB4O1xuICBtYXJnaW46IDVweDtcbiAgd2lkdGg6IGNhbGMoMTAwJSAtIDIwcHgpO1xuICBmb250LXNpemU6IDEuNHJlbTtcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDJweCAycHggMCByZ2JhKDAsIDAsIDAsIDAuMTQpLCAwIDNweCAxcHggLTJweCByZ2JhKDAsIDAsIDAsIDAuMiksIDAgMXB4IDVweCAwIHJnYmEoMCwgMCwgMCwgMC4xMik7XG4gIGJveC1zaGFkb3c6IDAgMnB4IDJweCAwIHJnYmEoMCwgMCwgMCwgMC4xNCksIDAgM3B4IDFweCAtMnB4IHJnYmEoMCwgMCwgMCwgMC4yKSwgMCAxcHggNXB4IDAgcmdiYSgwLCAwLCAwLCAwLjEyKTtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGZvbnQtZmFtaWx5OiBcIkFnZW5kYS1SZWd1bGFyXCI7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIG1hcmdpbi1sZWZ0OiAzJTtcbn1cblxuLmN1c3RvbUNhcmRSZWFkIHtcbiAgaGVpZ2h0OiAxMTBweDtcbiAgYmFja2dyb3VuZDogI2ZmZmZmZiAhaW1wb3J0YW50O1xuICBib3JkZXItcmFkaXVzOiAxNXB4O1xuICBtYXJnaW46IDVweDtcbiAgd2lkdGg6IGNhbGMoMTAwJSAtIDIwcHgpO1xuICBmb250LXNpemU6IDEuNHJlbTtcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDJweCAycHggMCByZ2JhKDAsIDAsIDAsIDAuMTQpLCAwIDNweCAxcHggLTJweCByZ2JhKDAsIDAsIDAsIDAuMiksIDAgMXB4IDVweCAwIHJnYmEoMCwgMCwgMCwgMC4xMik7XG4gIGJveC1zaGFkb3c6IDAgMnB4IDJweCAwIHJnYmEoMCwgMCwgMCwgMC4xNCksIDAgM3B4IDFweCAtMnB4IHJnYmEoMCwgMCwgMCwgMC4yKSwgMCAxcHggNXB4IDAgcmdiYSgwLCAwLCAwLCAwLjEyKTtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGZvbnQtZmFtaWx5OiBcIkFnZW5kYS1SZWd1bGFyXCI7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIG1hcmdpbi1sZWZ0OiAzJTtcbn1cblxuLmxpc3QtbWQgaW9uLWl0ZW0tb3B0aW9ucyAuYnV0dG9uIHtcbiAgbWFyZ2luOiBhdXRvO1xuICBib3JkZXItcmFkaXVzOiAwO1xuICBkaXNwbGF5OiAtd2Via2l0LWlubGluZS1ib3g7XG4gIGRpc3BsYXk6IC13ZWJraXQtaW5saW5lLWZsZXg7XG4gIGRpc3BsYXk6IC1tcy1pbmxpbmUtZmxleGJveDtcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gIC13ZWJraXQtYm94LWFsaWduOiBjZW50ZXI7XG4gIC13ZWJraXQtYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgLW1zLWZsZXgtYWxpZ246IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgaGVpZ2h0OiA2MCU7XG59XG5cbi5saXN0LW1kIGlvbi1pdGVtLW9wdGlvbnMge1xuICBib3JkZXItYm90dG9tOiBub25lO1xufVxuXG4ubGlzdC1pb3MgaW9uLWl0ZW0tb3B0aW9ucyAuYnV0dG9uIHtcbiAgbWFyZ2luOiBhdXRvO1xuICAtLWJvcmRlci1yYWRpdXM6IDBweCAhaW1wb3J0YW50O1xuICBoZWlnaHQ6IDY1JTtcbiAgbWluLWhlaWdodDogNjAlO1xufVxuXG4uc3Bpbm5lcnNlY3Rpb24ge1xuICBkaXNwbGF5OiBibG9jaztcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMS4zcmVtO1xuICBoZWlnaHQ6IDk4JTtcbn1cblxuLmVycm9yTXNnU2VjdGlvbiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBoZWlnaHQ6IDk4JTtcbiAgZm9udC1zaXplOiAwLjhyZW07XG4gIGNvbG9yOiAjNDk0NzQ3ICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmc6IDBweCAxNXB4O1xufVxuXG4uVW5yZWFkTm90aWZpY2F0aW9uIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi5kZWxldGVCdG4ge1xuICBtYXJnaW4tcmlnaHQ6IDUlICFpbXBvcnRhbnQ7XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMzc0cHgpIHtcbiAgcCwgLmNvbC5mb250X3NpemVfMTgge1xuICAgIGZvbnQtc2l6ZTogMTdweCAhaW1wb3J0YW50O1xuICB9XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDMyMHB4KSB7XG4gIHAsIC5jb2wuZm9udF9zaXplXzE4IHtcbiAgICBmb250LXNpemU6IDE1cHggIWltcG9ydGFudDtcbiAgfVxufVxuLmRhbmdlciB7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5LWNvbnRyYXN0KSAhaW1wb3J0YW50O1xuICAtLWJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1kYW5nZXIpICFpbXBvcnRhbnQ7XG59XG5cbi5wYWRkaW5nXzAxNSB7XG4gIHBhZGRpbmc6IDBweCAxOHB4O1xufVxuXG4ubWFyZ2luX3RvcF9ib3R0b21fYXV0byB7XG4gIG1hcmdpbi10b3A6IGF1dG87XG4gIG1hcmdpbi1ib3R0b206IGF1dG87XG59XG5cbmlvbi1pdGVtIHtcbiAgLS1kZXRhaWwtaWNvbi1jb2xvcjpibGFjaztcbn1cblxuaW9uLWJ1dHRvbiAuYnV0dG9uLWlubmVyIHtcbiAgZmxleC1mbG93OiBjb2x1bW47XG59Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ })

}]);
//# sourceMappingURL=src_app_pages_notifications_notifications_module_ts.js.map