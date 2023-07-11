"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_dashboard-after-login_dashboard-after-login_module_ts"],{

/***/ 31205:
/*!*************************************************************************************!*\
  !*** ./src/app/pages/dashboard-after-login/dashboard-after-login-routing.module.ts ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DashboardAfterLoginPageRoutingModule": () => (/* binding */ DashboardAfterLoginPageRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _dashboard_after_login_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dashboard-after-login.page */ 19697);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);




const routes = [{
  path: '',
  component: _dashboard_after_login_page__WEBPACK_IMPORTED_MODULE_0__.DashboardAfterLoginPage
}];
class DashboardAfterLoginPageRoutingModule {}
DashboardAfterLoginPageRoutingModule.ɵfac = function DashboardAfterLoginPageRoutingModule_Factory(t) {
  return new (t || DashboardAfterLoginPageRoutingModule)();
};
DashboardAfterLoginPageRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
  type: DashboardAfterLoginPageRoutingModule
});
DashboardAfterLoginPageRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](DashboardAfterLoginPageRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
})();

/***/ }),

/***/ 68568:
/*!*****************************************************************************!*\
  !*** ./src/app/pages/dashboard-after-login/dashboard-after-login.module.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DashboardAfterLoginPageModule": () => (/* binding */ DashboardAfterLoginPageModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ 38699);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _dashboard_after_login_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dashboard-after-login-routing.module */ 31205);
/* harmony import */ var _dashboard_after_login_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dashboard-after-login.page */ 19697);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);







class DashboardAfterLoginPageModule {}
DashboardAfterLoginPageModule.ɵfac = function DashboardAfterLoginPageModule_Factory(t) {
  return new (t || DashboardAfterLoginPageModule)();
};
DashboardAfterLoginPageModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
  type: DashboardAfterLoginPageModule
});
DashboardAfterLoginPageModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__.TranslateModule, _dashboard_after_login_routing_module__WEBPACK_IMPORTED_MODULE_0__.DashboardAfterLoginPageRoutingModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](DashboardAfterLoginPageModule, {
    declarations: [_dashboard_after_login_page__WEBPACK_IMPORTED_MODULE_1__.DashboardAfterLoginPage],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__.TranslateModule, _dashboard_after_login_routing_module__WEBPACK_IMPORTED_MODULE_0__.DashboardAfterLoginPageRoutingModule]
  });
})();

/***/ }),

/***/ 19697:
/*!***************************************************************************!*\
  !*** ./src/app/pages/dashboard-after-login/dashboard-after-login.page.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DashboardAfterLoginPage": () => (/* binding */ DashboardAfterLoginPage)
/* harmony export */ });
/* harmony import */ var src_providers_utils_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/providers/utils/config */ 43485);
/* harmony import */ var src_app_app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/app.component */ 55041);
/* harmony import */ var intro_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! intro.js */ 49677);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var src_providers_utils_utils_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/providers/utils/utils.service */ 30423);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ngx-translate/core */ 38699);
/* harmony import */ var src_providers_logger_service_logger_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/providers/logger-service/logger-service */ 9999);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _services_translate_config_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/translate-config.service */ 45340);
/* harmony import */ var src_providers_auth_handler_auth_handler__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/providers/auth-handler/auth-handler */ 38590);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/platform-browser */ 34497);
/* harmony import */ var _awesome_cordova_plugins_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @awesome-cordova-plugins/in-app-browser/ngx */ 67122);
/* harmony import */ var _notification_settings_notificationSettingsService__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../notification-settings/notificationSettingsService */ 34088);
/* harmony import */ var _e_medical_card_eMedicalCardService__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../e-medical-card/eMedicalCardService */ 27323);
/* harmony import */ var src_providers_push_service_push_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/providers/push-service/push-service */ 49756);


















function DashboardAfterLoginPage_ion_badge_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "ion-badge", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", ctx_r0.notiBadge, "");
  }
}
function DashboardAfterLoginPage_p_27_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](ctx_r1.passwordReminderMsg);
  }
}
class DashboardAfterLoginPage {
  constructor(
  // public navCtrl: NavController,
  router, platform, utils, translate, logger, config,
  //  public events: Events,
  datePipe, translateConfig, authHandler, _DomSanitizer,
  // public ionicApp: IonicApp,
  //  private appAvailability: AppAvailability,
  iab, alertCtrl, NotificationSettingservice, menuCtrl, eMedicalCardSrvc, pushNotiService, ModalController, ToastController) {
    this.router = router;
    this.platform = platform;
    this.utils = utils;
    this.translate = translate;
    this.logger = logger;
    this.config = config;
    this.datePipe = datePipe;
    this.translateConfig = translateConfig;
    this.authHandler = authHandler;
    this._DomSanitizer = _DomSanitizer;
    this.iab = iab;
    this.alertCtrl = alertCtrl;
    this.NotificationSettingservice = NotificationSettingservice;
    this.menuCtrl = menuCtrl;
    this.eMedicalCardSrvc = eMedicalCardSrvc;
    this.pushNotiService = pushNotiService;
    this.ModalController = ModalController;
    this.ToastController = ToastController;
    // default profile image
    this.userDetails = {
      "profilePicture": "assets/imgs/empty-avatar.jpg"
    };
    this.lastLoginDate = this.utils.getlastLoginDate();
    this.passwordReminderMsg = this.utils.getPasswordReminderMsg();
    this.showPasswordExpirationMsgFlag = this.utils.getshowPasswordReminderMsg();
    this.dat = this.lastLoginDate.split("/", 3);
    this.dat1 = this.dat[1] + "/" + this.dat[0] + "/" + this.dat[2];
    this.lastTap = Date.now();
    this.introJS = (0,intro_js__WEBPACK_IMPORTED_MODULE_2__["default"])();
    /**
     * Method to Navigate to Profile Page
     */
    this.navToProfile = function () {
      this.router.navigate(['/profile']);
    };
    /**
     * This method is used to navigate to Downloads Page
     */
    this.openDownloads = function () {
      //  this.navCtrl.push(DownloadsPage);
      this.router.navigate(['/downloads']);
      //this.pushNotiService.unregisterDevice();
      //this.pushNotiService.CheckSubscription();
      //this.pushNotiService.UnSubscribePolicyTag();
    };

    this.utils.analytics("dashboardAfterLogin");
    if (this.config.userDetails.profilePicture != "data:image/jpeg;base64," && this.config.userDetails.profilePicture != undefined && this.config.userDetails.profilePicture != "unsafe:data:image/jpeg;base64,") {
      this.userDetails.profilePicture = this._DomSanitizer.bypassSecurityTrustUrl(this.config.userDetails.profilePicture);
    }
    this.notiBadge = this.config.userInfo.unreadNoti;
    this.subscribedtags = this.config.userInfo.subscribedNotitags;
    this.name = this.utils.getName();
    this.lastDate = this.transformDate(this.dat1);
    this.comingFromLoginFlagVal = history.state.comingFromLoginFlag.comingFromLogin; // changes navParam to history
    this.comingfromWelcomeTour = history.state.comingFromLoginFlag.comingfromWelcomeTour;
    document.body.addEventListener('click', () => {
      this.logger.trace("HomePage--document.body--start");
      this.logger.log("tapped");
      this.lastTap = Date.now();
      this.logger.trace("HomePage--document.body--end");
    });
    this.utils.getObservable().subscribe(data => {
      if (data.event === "PicUpdated") {
        this.userDetails.profilePicture = this._DomSanitizer.bypassSecurityTrustUrl(data.data);
      }
      if (data.event === "UnreadNotiUpdated") {
        this.notiBadge = data.data;
      }
    });
    /**startInterval */
    this.startInterval();
  }
  /**
   * This method is used to transform date to "dd MMM y h:m:s" format
   * @param lastLoginDate
   */
  transformDate(lastLoginDate) {
    return this.datePipe.transform(lastLoginDate, 'dd MMM  y h:m:s');
  }
  /**
   * This method is called when the view is loaded.
   * Here will check for passcode data in config file.
   */
  ngOnInit() {
    if (this.comingFromLoginFlagVal) {
      this.getNotificationSubscriptionStatus();
      //console.log(this.comingFromLoginFlagVal);
    }
  }

  ngAfterViewInit() {
    if (this.comingfromWelcomeTour) {
      setTimeout(() => {
        var intro = (0,intro_js__WEBPACK_IMPORTED_MODULE_2__["default"])();
        var menu = this.menuCtrl;
        var utils = this.utils;
        intro.setOptions({
          doneLabel: 'Next',
          hidePrev: true,
          steps: [{
            element: document.querySelector('.dataStep1'),
            intro: "<h4>View and edit your profile</h4> <p>Update your details to receive the latest notifications and benefits.<p/>"
          }, {
            element: document.querySelector('.dataStep2'),
            intro: "<h4>Your policy overview</h4> <p>View & access your policy details, status & payments.<p/>"
          }, {
            element: document.querySelector('.dataStep3'),
            intro: "<h4>Track your claims</h4> <p>Submit a claim and view the status of your submission.<p/>"
          }, {
            element: document.querySelector('.dataStep4'),
            intro: "<h4>Access important documents</h4> <p>Download statements and policy/contract documents.<p/>"
          }, {
            element: document.querySelector('.dataStep5'),
            intro: "<h4>Self-services</h4> <p>Access & submit service requests digitally.<p/>"
          }, {
            element: document.querySelector('.dataStep6'),
            intro: "<h4>Generate your E-Medical Card</h4> <p>Similar to your physical card, click here and have your digitalised medical card on-the-go.<p/>"
          }, {
            element: document.querySelector('.dataStep7'),
            intro: "<h4>Perform your first time nomination</h4> <p>Nominate a beneficiary to receive the death benefit of your policy.<p/>"
          }, {
            element: document.querySelector('.dataStep8'),
            intro: "<h4>Notifications</h4> <p>Check all your latest notifications here.<p/>"
          }]
        });
        intro.oncomplete(function () {
          menu.open();
          utils.publishSomeData({
            'event': 'comingFromDashBoardAppTour',
            'data': true
          });
          // events.publish('user:comingFromDashBoardAppTour',true);
        });

        intro.onexit(function () {
          if (this._currentStep == 7) {} else {
            menu.open();
            utils.publishSomeData({
              'event': 'comingFromServiceAppTour',
              'data': true
            });
            // events.publish('user:comingFromServiceAppTour',true);
          }
        });

        intro.start();
      }, 700);
    }
  }
  /**
   * Method to navigate to Plan List Page
   */
  getPolicyList() {
    this.router.navigate(['/plan-listing']);
  }
  /**
   * This method gets called as soon as we enter the page
   * Here we are disabling the sidemenu befor login and enabling sideMenu after Login
   */
  ionViewDidEnter() {
    this.menuCtrl.swipeGesture(false); // earlier it was swipeEnable
    this.menuCtrl.enable(true, 'custom');
    this.config.currentPage.pageName = "DashboardAfterLoginPage";
  }
  ionViewWillEnter() {
    this.utils.component.emit(src_app_app_component__WEBPACK_IMPORTED_MODULE_1__.MenuOptions.DASHBOARD);
  }
  /*Navigate to claim status page*/
  navToClaimStatusPage() {
    // this.navCtrl.push(ClaimsPage);
    this.router.navigate(['/claims']);
  }
  getNotificationSubscriptionStatus() {
    this.pushNotiService.load();
    this.logger.log('ionViewDidLoad DashboardAfterLoginPage');
    this.NotificationSettingservice.getNotificationSettings().then(result => {
      this.userSubscribed = result['responseJSON']['subscribed'];
      if (this.userSubscribed === true) {
        this.checkNotificationSubscription();
      } else {
        this.config.userInfo.isNotificationRegistered = false;
      }
    });
  }
  checkNotificationSubscription() {
    this.pushNotiService.CheckSubscriptionAndRegister().then(result => {
      this.config.userInfo.isNotificationRegistered = true;
    }, err => {
      this.config.userInfo.isNotificationRegistered = false;
    });
  }
  /*Navigate to sunactive page*/
  navToSunactive() {}
  //   navToSunactive() {
  //  if(this.utils.isDeviceOnLine()){
  //        this.utils.showProgressLoader();
  //        this.getSunactivUser().then(
  //           (res) => {
  //             try{
  //               this.utils.dissmisProgressLoader();
  //                 //check response code
  //                 if (res['responseJSON'] && res['responseJSON']['statusCode'] == HttpStatus.OK) {
  //                 //  console.log("Get sunactiv user response received");
  //                 //  console.log(JSON.stringify(res['responseJSON']));
  //                 //  console.log("Checking user registered");
  //                  var sunActivData = res['responseJSON'];
  //                  if (sunActivData.registered){
  //                      //console.log("User is registered. Checking device serial no");
  //                      //check the device id
  //                     //  console.log("device serial no is " + this.utils.getDeviceId());
  //                     //  console.log("received serial no is " + sunActivData.deviceId);
  //                  if(sunActivData.deviceId == this.utils.getDeviceId()){
  //                    //check if its unsync
  //                    // console.log("Same device id found , checking if user is unsynced");
  //                     if (sunActivData.source != this.config.sunactiv.source_unsync){
  //                      // console.log("User is synced with " + sunActivData.source);
  //                       if(this.utils.getPlatform() != this.config.sunactiv.platform_ios) {
  //                         //platform is android
  //                       //  console.log("Platform is android");
  //                       //   this.checkSourceAppInstalled(sunActivData.source).then((appInstalledorNot) => {
  //                       //     //check the source app is installed
  //                       //     if(appInstalledorNot){
  //                       //        //source installed
  //                       //    //   console.log("App is installed going to dashboard page");
  //                       //     //  this.navCtrl.push(SunactivDashboardPage,{registered:true,DeviceId:sunActivData.deviceId,source:sunActivData.source,status:sunActivData.status,previousMonthStatus:sunActivData.PreviousStatus,avgStepMonth:sunActivData.averageStepsThisMonth,RegDate:sunActivData.registrationDate,lastSyncDate:sunActivData.lastSyncDate});
  //                       //       this.router.navigate(['/SunactivDashboardPage'],{state:{registered:true,DeviceId:sunActivData.deviceId,source:sunActivData.source,status:sunActivData.status,previousMonthStatus:sunActivData.PreviousStatus,avgStepMonth:sunActivData.averageStepsThisMonth,RegDate:sunActivData.registrationDate,lastSyncDate:sunActivData.lastSyncDate}})
  //                       //     }else{
  //                       //          //source not installed
  //                       //       //   console.log("App not installed");
  //                       //         if(sunActivData.source == this.config.sunactiv.source_google){
  //                       //           this.promptInstallApp(this.config.sunactiv.source_google, sunActivData);
  //                       //         } else if (sunActivData.source == this.config.sunactiv.source_samsung){
  //                       //           this.promptInstallApp(this.config.sunactiv.source_samsung, sunActivData);
  //                       //         }
  //                       //     }
  //                       //  });
  //                       } else {
  //                          //platform is ios
  //                       //  console.log("Platfor is ios, going to dashboard");
  //                       //  this.navCtrl.push(SunactivDashboardPage,{registered:true,DeviceId:sunActivData.deviceId,source:sunActivData.source,status:sunActivData.status,previousMonthStatus:sunActivData.PreviousStatus,avgStepMonth:sunActivData.averageStepsThisMonth,RegDate:sunActivData.registrationDate,lastSyncDate:sunActivData.lastSyncDate});
  //                         this.router.navigate(['/SunactivDashboardPage'],{state:{registered:true,DeviceId:sunActivData.deviceId,source:sunActivData.source,status:sunActivData.status,previousMonthStatus:sunActivData.PreviousStatus,avgStepMonth:sunActivData.averageStepsThisMonth,RegDate:sunActivData.registrationDate,lastSyncDate:sunActivData.lastSyncDate}})
  //                       }
  //                       }
  //                     else{
  //                       //user currently unsynced
  //                       //   console.log("user currently unsynced");
  //                       //   this.navCtrl.push(SunactivPage,{registered:true,source:sunActivData.source, status:sunActivData.status,previousMonthStatus:sunActivData.PreviousStatus,avgStepMonth:sunActivData.averageStepsThisMonth,RegDate:sunActivData.registrationDate,lastSyncDate:sunActivData.lastSyncDate});
  //                          this.router.navigate(['/SunactivPage'],{state:{registered:true,source:sunActivData.source, status:sunActivData.status,previousMonthStatus:sunActivData.PreviousStatus,avgStepMonth:sunActivData.averageStepsThisMonth,RegDate:sunActivData.registrationDate,lastSyncDate:sunActivData.lastSyncDate}})
  //                         }
  //                   }
  //                   else{
  //                        if (sunActivData.source != this.config.sunactiv.source_unsync){
  //                         //device id is different and source is synced
  //                      //   console.log("Device id is different, user synced");
  //                         const confirm = this.alertCtrl.create({
  //                           header: "Unsync from other device",
  //                           message: "Sunactive is currently synced with other device. Do you want to unsync from other device?",
  //                           buttons: [
  //                             {
  //                               text: 'Disagree',
  //                               handler: () => {
  //                           //      console.log('Disagree clicked');
  //                               }
  //                             },
  //                             {
  //                               text: 'Agree',
  //                               handler: () => {
  //                                 console.log('Agree clicked');
  //                                 // if (this.navCtrl.getActive().name != "SunactivPage") {
  //                                 // //  this.navCtrl.push(SunactivPage,{registered:true,manualUnsync: true,source:sunActivData.source, status:sunActivData.status,previousMonthStatus:sunActivData.PreviousStatus,avgStepMonth:sunActivData.averageStepsThisMonth,RegDate:sunActivData.registrationDate,lastSyncDate:sunActivData.lastSyncDate});
  //                                 //   this.router.navigate(['/SunactivPage'],{state:{registered:true,manualUnsync: true,source:sunActivData.source, status:sunActivData.status,previousMonthStatus:sunActivData.PreviousStatus,avgStepMonth:sunActivData.averageStepsThisMonth,RegDate:sunActivData.registrationDate,lastSyncDate:sunActivData.lastSyncDate}})
  //                                 // }
  //                               }
  //                             }
  //                           ]
  //                         }).then((alert) => alert.present())
  //                         }
  //                         else{
  //                          //device id is different and source is uncynced
  //                           //  console.log("Device id is different, user unsynced");
  //                            // this.navCtrl.push(SunactivPage,{registered:true,source:sunActivData.source, status:sunActivData.status,previousMonthStatus:sunActivData.PreviousStatus,avgStepMonth:sunActivData.averageStepsThisMonth,RegDate:sunActivData.registrationDate,lastSyncDate:sunActivData.lastSyncDate});
  //                             this.router.navigate(['/SunactivPage'],{state:{registered:true,source:sunActivData.source, status:sunActivData.status,previousMonthStatus:sunActivData.PreviousStatus,avgStepMonth:sunActivData.averageStepsThisMonth,RegDate:sunActivData.registrationDate,lastSyncDate:sunActivData.lastSyncDate}})
  //                          }
  //                        }
  //                     }
  //                  else{
  //                     //user not registered
  //                 //   console.log("not registered, load sunactiv");
  //                  //  this.navCtrl.push(SunactivPage,{registered:false});
  //                    this.router.navigate(['/SunactivPage'],{state:{registered:false}});
  //                  }
  //               }
  //             }catch(e){
  //               this.utils.dissmisProgressLoader();
  //               let errorMsg = this.translate.instant('generic_msgs.server_err');
  //               this.utils.showAlert("", errorMsg);
  //             }
  //           }, (err) => { //if any service error, or already existed user
  //             this.utils.dissmisProgressLoader();
  //             let errorMsg = this.utils.handleServiceException(err); // adapter exception handler
  //             this.utils.showAlert("", errorMsg);
  //           });
  // }
  //    else {
  //           let errorMsg = this.translate.instant('generic_msgs.network_err');
  //           this.showError(errorMsg);
  //         }
  //   }
  /*Navigate to EMedicalCard page*/
  navToEMedicalCard() {
    this.utils.showProgressLoader();
    this.eMedicalCardSrvc.getMedicalCardPolicyList().then(res => {
      try {
        this.utils.dissmisProgressLoader();
        console.log('policy list', res);
        if (res['responseJSON']['array'].length) {
          const policyList = res['responseJSON'];
          //  this.navCtrl.push(EMedicalCardPage, policyList);
          this.router.navigate(['/e-medical-card'], {
            state: {
              policylist: policyList
            }
          });
        } else {
          this.showDialog("", "None of the plans are applicable for Medical Card. <p>For further info, please contact our Client Careline at " + '<a href="tel:1300-88-5055">1300-88-5055</a>' + " or email us at " + '<a href="mailto:wecare@sunlifemalaysia.com" target="_blank">wecare@sunlifemalaysia.com</a>' + ".</p>");
        }
      } catch (e) {
        this.utils.dissmisProgressLoader();
        this.logger.error("loginSuccess catch eror : " + JSON.stringify(e));
        const errorMsg = this.translate.instant('generic_msgs.server_err');
      }
    }, err => {
      this.utils.dissmisProgressLoader();
      const errorMsg = this.utils.handleServiceException(err);
    });
  }
  showDialog(title, message) {
    let buttons = [{
      text: "ok",
      handler: () => {}
    }];
    let alert = this.alertCtrl.create({
      header: title,
      message: message,
      buttons: buttons,
      backdropDismiss: false
    }).then(alert => alert.present());
    // return alert.present();
  }
  /*Navigate to ENomination page*/
  navToENomination() {
    if (this.utils.isDeviceOnLine()) {
      this.utils.showProgressLoader();
      this.getEnominationPath().then(result => {
        try {
          this.utils.openLink(result['responseJSON'].url);
          this.menuCtrl.close();
          this.utils.dissmisProgressLoader();
        } catch (e) {
          this.utils.dissmisProgressLoader();
          this.menuCtrl.close();
          let errorMsg = this.translate.instant('generic_msgs.server_err');
          this.utils.showAlert("", errorMsg);
        }
      }, err => {
        this.showServiceError(err);
      });
    } else {
      let errorMsg = this.translate.instant('generic_msgs.network_err');
      this.showError(errorMsg);
    }
  }
  getEnominationPath() {
    this.logger.trace("App.component--eNominationService--start");
    let promise = new Promise((resolve, reject) => {
      try {
        var resourceRequest = new WLResourceRequest(src_providers_utils_config__WEBPACK_IMPORTED_MODULE_0__.ConfigProvider.getEnominationlinkAdapterPath, WLResourceRequest.GET);
        resourceRequest.setQueryParameter('params', "['" + this.utils.getUserIdentity() + "','" + this.utils.getToken() + "']");
        resourceRequest.send().then(response => {
          resolve(response);
        }, error => {
          this.logger.error("App.component--eNominationService Adapter calling error:" + JSON.stringify(error));
          reject(error);
        });
      } catch (e) {
        reject(e);
        this.logger.log("App.component--eNominationService adapter calling catch error:" + JSON.stringify(e));
      }
    });
    this.logger.trace("App.component--eNominationService--end");
    return promise;
  }
  showServiceError(err) {
    this.utils.dissmisProgressLoader();
    this.menuCtrl.close();
    let errorMsg = this.utils.handleServiceException(err); // adapter exception handler
    this.utils.showAlert("", errorMsg);
  }
  openNotification() {
    this.router.navigate(['/notifications']);
  }
  navToServices() {
    this.router.navigate(['/service']);
  }
  /**Intervale */
  startInterval() {
    // alert(1)
    if (this.config.interValID != null) {
      clearInterval(this.config.interValID);
      this.config.interValID = null;
    }
    this.config.interValID = setInterval(() => {
      /** checking session  CHECK_INTERVAL minitus */
      // alert(2)
      this.checkSession();
    }, this.config.CHECK_INTERVAL);
  }
  /** checking ilde device  */
  checkSession() {
    /** checking session */
    const now = Date.now();
    const timeleft = this.lastTap + this.config.SESSION_TIME * 60 * 1000;
    const diff = timeleft - now;
    const isTimeout = diff < 0;
    clearInterval(this.config.interValID);
    /**if session expire than navigate to corresponding pages */
    if (isTimeout) {
      // alert(3)
      if (this.menuCtrl.isOpen()) {
        this.menuCtrl.close();
      }
      /**to hide busy indicator if it is showing */
      if (this.utils.isLoaderInDisplay) this.utils.dissmisProgressLoader();
      /**Logout from adapter session */
      this.authHandler.logout();
      /**Set saved data to null */
      this.config.userInfo = {};
      this.config.userDetails = {};
      /**clear session time out*/
      if (this.config.sessionTimeout != null) {
        clearTimeout(this.config.sessionTimeout);
        this.config.sessionTimeout = null;
      }
      /** clear idle time out functionality */
      if (this.config.interValID != null) {
        clearInterval(this.config.interValID);
        this.config.interValID = null;
      }
      /**Close any popup or models are showing on page */
      // let activePortal = this.ionicApp._loadingPortal.getActive() ||
      this.ModalController.dismiss();
      this.ToastController.dismiss();
      this.alertCtrl.dismiss();
      var intro = (0,intro_js__WEBPACK_IMPORTED_MODULE_2__["default"])();
      intro.exit();
      // this.ionicApp.overla.getActive();
      // if (activePortal) {
      //   activePortal.dismiss();
      //   return;
      // }
      if (this.utils.getPlatform() == 'ios' || this.utils.getPlatform() == 'android') {
        this.router.navigate(['/login-first'], {
          state: {
            animate: true,
            direction: 'forward',
            tokenExpire: true,
            loadInitialLogin: true
          }
        });
        // alert("yes")
        /**Check whether to land on Passcode or Login screen */
        // if (!this.config.passCodeInfo.hasPasscodeAuth)
        // //  this.navCtrl.setRoot(LoginFirstPage, { animate: true, direction: 'forward',tokenExpire:true,loadInitialLogin:true });
        //   this.router.navigate(['/LoginFirstPage'],{state:{ animate: true, direction: 'forward',tokenExpire:true,loadInitialLogin:true }});
        // else
        //  // this.navCtrl.setRoot(LoginFirstPage, { animate: true, direction: 'forward',tokenExpire:true, showFingerPrint:'true',loadInitialLogin:true });
        //   this.router.navigate(['/LoginFirstPage'],{state:{ animate: true, direction: 'forward',tokenExpire:true, showFingerPrint:'true',loadInitialLogin:true }});
        //   } else {
        // // this.navCtrl.setRoot(LoginFirstPage, { animate: true, direction: 'forward',loadInitialLogin:true });
        //  this.router.navigate(['/LoginFirstPage'],{state:{ animate: true, direction: 'forward',loadInitialLogin:true  }});
      }
    } else {
      // alert("no")
      /**startInterval */
      this.startInterval();
    }
  }
  //  getSunactivUser(){
  //   this.logger.trace("SunactivService--getSunactivUser--start");
  //   let promise = new Promise((resolve, reject) => {
  //     try {
  //          let encryptedUserId = this.utils.getEncryptedUserId();
  //           var resourceRequest = new WLResourceRequest(ConfigProvider.GetSunActivUserAdapterPath, WLResourceRequest.GET);
  //           resourceRequest.setQueryParameter('params',"['"+this.utils.getToken()+"','"+encryptedUserId+"']");
  //           resourceRequest.send().then((response) => {
  //             resolve(response);
  //           },
  //             (error) => {
  //               this.logger.error("SunactivService--getSunactivUser Adapter calling error:" + JSON.stringify(error));
  //               reject(error);
  //           });
  //     }catch (e) {
  //       reject(e);
  //       this.logger.log("SunactivService--getSunactivUser adapter calling catch error:" + JSON.stringify(e));
  //     }
  //   });
  //   this.logger.trace("FundAllocationsService--getFundAllocations--end");
  //   return promise;
  //  }
  // checkSourceAppInstalled(app) {
  //   let promise = new Promise((resolve, reject) => {
  //     let appName;
  //     if (app == this.config.sunactiv.source_samsung) {
  //       appName = this.config.sunactiv.samsung_health_package_name;
  //     } else {
  //       appName = this.config.sunactiv.google_fit_package_name;
  //     }
  //     this.appAvailability.check(appName)
  //       .then(
  //         (yes: boolean) => {
  //           this.isAppInstalled = true;
  //           resolve(this.isAppInstalled);
  //         },
  //         (no: boolean) => {
  //           this.isAppInstalled = false;
  //           resolve(this.isAppInstalled);
  //         }
  //       );
  //   });
  //   return promise;
  // }
  promptInstallApp(source, sunActivData) {
    var url;
    if (source == this.config.sunactiv.source_google) {
      url = this.config.sunactiv.googleApp_url;
    } else if (source == this.config.sunactiv.source_samsung) {
      url = this.config.sunactiv.sumsungApp_url;
    }
    const confirm = this.alertCtrl.create({
      header: "Install App?",
      message: "Do you want to install " + source + " Health. In order to sync data, " + source + " Health App must be installed.",
      buttons: [{
        text: 'Choose source',
        handler: () => {
          //  console.log('Disagree clicked');
          // this.navCtrl.push(SunactivPage,{registered:true,manualUnsync:true,source:sunActivData.source, status:sunActivData.status,avgStepMonth:sunActivData.averageStepsThisMonth,RegDate:sunActivData.registrationDate,lastSyncDate:sunActivData.lastSyncDate});
          this.router.navigate(['/SunactivPage'], {
            state: {
              registered: true,
              manualUnsync: true,
              source: sunActivData.source,
              status: sunActivData.status,
              avgStepMonth: sunActivData.averageStepsThisMonth,
              RegDate: sunActivData.registrationDate,
              lastSyncDate: sunActivData.lastSyncDate
            }
          });
        }
      }, {
        text: 'Agree',
        handler: () => {
          //  console.log('Agree clicked');
          const browser = this.iab.create(url, '_system');
          browser.show();
        }
      }]
    }).then(alert => alert.present());
  }
  showError(err) {
    this.utils.dissmisProgressLoader();
    this.utils.showAlert("", err);
  }
}
DashboardAfterLoginPage.ɵfac = function DashboardAfterLoginPage_Factory(t) {
  return new (t || DashboardAfterLoginPage)(_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_12__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_13__.Platform), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](src_providers_utils_utils_service__WEBPACK_IMPORTED_MODULE_3__.UtilService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_14__.TranslateService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](src_providers_logger_service_logger_service__WEBPACK_IMPORTED_MODULE_4__.LoggerServiceProvider), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](src_providers_utils_config__WEBPACK_IMPORTED_MODULE_0__.ConfigProvider), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_15__.DatePipe), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_services_translate_config_service__WEBPACK_IMPORTED_MODULE_5__.TranslateConfigService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](src_providers_auth_handler_auth_handler__WEBPACK_IMPORTED_MODULE_6__.AuthHandlerProvider), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_16__.DomSanitizer), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_awesome_cordova_plugins_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_7__.InAppBrowser), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_13__.AlertController), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_notification_settings_notificationSettingsService__WEBPACK_IMPORTED_MODULE_8__.notificationSettingservice), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_13__.MenuController), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_e_medical_card_eMedicalCardService__WEBPACK_IMPORTED_MODULE_9__.EMedicalCardService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](src_providers_push_service_push_service__WEBPACK_IMPORTED_MODULE_10__.PushService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_13__.ModalController), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_13__.ToastController));
};
DashboardAfterLoginPage.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineComponent"]({
  type: DashboardAfterLoginPage,
  selectors: [["app-dashboard-after-login"]],
  decls: 64,
  vars: 32,
  consts: [["mode", "ios"], ["color", "primary", 1, "toolbar"], ["slot", "start", "auto-hide", "false", "color", "secondary"], [1, "bold-font"], ["end", "", 1, "header-right-btn"], ["color", "primary", "fill", "solid", 1, "custom-class", "dataStep8", 3, "click"], ["aria-hidden", "true", "item-left", "", "col-1", "", "text-center", "", 1, "fas", "fa-bell"], ["color", "danger", 4, "ngIf"], ["no-bounce", "", 1, "app_bg2"], [1, "ion-text-center"], [1, "dataStep1"], [1, "profile-pic"], ["alt", "...", 1, "profilePic", 3, "src"], ["aria-hidden", "true", 1, "fas", "fa-edit", 3, "click"], [1, "welcome_txt"], [4, "ngIf"], [1, "ion-text-center", 2, "padding-left", "17px", "padding-right", "17px"], [1, "text_color_base", "my_plan_tile", "dataStep2", 3, "click"], [1, "fas", "fa-file-alt", "tile_img"], [2, "display", "block"], ["text-center", "", 1, "text_color_base", "claims_tile", "dataStep3", 3, "click"], [1, "fas", "fa-inbox", "tile_img"], ["text-center", "", 1, "text_color_base", "downloads_tile", "dataStep4", 3, "click"], [1, "fa", "fa-download", "tile_img"], ["text-center", "", 1, "text_color_base", "my_profile_tile", "dataStep5", 3, "click"], [1, "fas", "fa-clipboard-list", "tile_img"], ["text-center", "", 1, "text_color_base", "sunactiv_tile", "dataStep6", 3, "click"], [1, "fas", "fa-address-card", "tile_img"], ["text-center", "", 1, "text_color_base", "enomination_tile", "dataStep7", 3, "click"], [2, "height", "5% !important"], ["color", "danger"]],
  template: function DashboardAfterLoginPage_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "ion-header", 0)(1, "ion-toolbar", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](2, "ion-menu-button", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](3, "ion-title", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](5, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](6, "ion-buttons", 4)(7, "ion-button", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function DashboardAfterLoginPage_Template_ion_button_click_7_listener() {
        return ctx.openNotification();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](8, "i", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](9, DashboardAfterLoginPage_ion_badge_9_Template, 2, 1, "ion-badge", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](10, "ion-content", 8)(11, "section")(12, "ion-row", 9)(13, "ion-col")(14, "div", 10)(15, "div", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](16, "img", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](17, "i", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function DashboardAfterLoginPage_Template_i_click_17_listener() {
        return ctx.navToProfile();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](18, "div", 14)(19, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](20);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](21, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](22, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](23);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](24, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](25, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](26);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](27, DashboardAfterLoginPage_p_27_Template, 2, 1, "p", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](28, "ion-row", 16)(29, "ion-col", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function DashboardAfterLoginPage_Template_ion_col_click_29_listener() {
        return ctx.getPolicyList();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](30, "i", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](31, "ion-label", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](32);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](33, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](34, "ion-col", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function DashboardAfterLoginPage_Template_ion_col_click_34_listener() {
        return ctx.navToClaimStatusPage();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](35, "i", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](36, "ion-label", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](37);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](38, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](39, "ion-row", 16)(40, "ion-col", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function DashboardAfterLoginPage_Template_ion_col_click_40_listener() {
        return ctx.openDownloads();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](41, "i", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](42, "ion-label", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](43);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](44, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](45, "ion-col", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function DashboardAfterLoginPage_Template_ion_col_click_45_listener() {
        return ctx.navToServices();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](46, "i", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](47, "ion-label", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](48);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](49, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](50, "ion-row", 16)(51, "ion-col", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function DashboardAfterLoginPage_Template_ion_col_click_51_listener() {
        return ctx.navToEMedicalCard();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](52, "i", 27);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](53, "ion-label", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](54);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](55, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](56, "ion-col", 28);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function DashboardAfterLoginPage_Template_ion_col_click_56_listener() {
        return ctx.navToENomination();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](57, "i", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](58, "ion-label", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](59);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](60, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](61, "ion-row", 29);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](62, "br")(63, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](5, 14, "dashboard_after_login.title"));
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx.notiBadge > 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("src", ctx.userDetails.profilePicture, _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵsanitizeUrl"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate2"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](21, 16, "dashboard_after_login.welcome"), " ", ctx.name, "");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](24, 18, "dashboard_after_login.last_login_txt"), "");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"]("", ctx.lastDate, " SGT");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx.showPasswordExpirationMsgFlag === "1");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](33, 20, "dashboard_after_login.my_plan"));
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](38, 22, "dashboard_after_login.claim_enquiry"));
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](44, 24, "dashboard_after_login.downloads"));
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](49, 26, "dashboard_after_login.service"));
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](55, 28, "dashboard_after_login.emedicalCard"));
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](60, 30, "dashboard_after_login.eNomination"));
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_15__.NgIf, _ionic_angular__WEBPACK_IMPORTED_MODULE_13__.IonBadge, _ionic_angular__WEBPACK_IMPORTED_MODULE_13__.IonButton, _ionic_angular__WEBPACK_IMPORTED_MODULE_13__.IonButtons, _ionic_angular__WEBPACK_IMPORTED_MODULE_13__.IonCol, _ionic_angular__WEBPACK_IMPORTED_MODULE_13__.IonContent, _ionic_angular__WEBPACK_IMPORTED_MODULE_13__.IonHeader, _ionic_angular__WEBPACK_IMPORTED_MODULE_13__.IonLabel, _ionic_angular__WEBPACK_IMPORTED_MODULE_13__.IonMenuButton, _ionic_angular__WEBPACK_IMPORTED_MODULE_13__.IonRow, _ionic_angular__WEBPACK_IMPORTED_MODULE_13__.IonTitle, _ionic_angular__WEBPACK_IMPORTED_MODULE_13__.IonToolbar, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_14__.TranslatePipe],
  styles: ["ion-badge[_ngcontent-%COMP%] {\n  position: absolute;\n  font-size: 10pt;\n  right: -5px;\n  top: 5px;\n}\n\nion-button[_ngcontent-%COMP%] {\n  margin: 5px;\n  width: 40px;\n  height: 40px;\n  position: relative;\n}\n\n\nion-button.custom-class[_ngcontent-%COMP%]::part(native) {\n  overflow: visible;\n}\n\n.item-inner[_ngcontent-%COMP%] {\n  border-bottom: none !important;\n}\n\n.tile_img[_ngcontent-%COMP%] {\n  font-size: 2.5rem;\n}\n\n.my_plan_tile[_ngcontent-%COMP%] {\n  margin-right: 5px;\n  margin-bottom: 5px;\n  padding: 15px;\n  background: rgba(255, 255, 255, 0.7);\n  border-top-left-radius: 10px;\n}\n\n.claims_tile[_ngcontent-%COMP%] {\n  margin-bottom: 5px;\n  background: rgba(255, 255, 255, 0.7);\n  padding: 15px;\n  border-top-right-radius: 10px;\n}\n\n.downloads_tile[_ngcontent-%COMP%] {\n  margin-right: 5px;\n  margin-bottom: 5px;\n  background: rgba(255, 255, 255, 0.7);\n  padding: 15px;\n}\n\n.my_profile_tile[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.7);\n  padding: 15px;\n  margin-bottom: 5px;\n}\n\n.sunactiv_tile[_ngcontent-%COMP%] {\n  margin-right: 5px;\n  padding: 15px;\n  background: rgba(255, 255, 255, 0.7);\n  border-bottom-left-radius: 10px;\n}\n\n.enomination_tile[_ngcontent-%COMP%] {\n  padding: 15px;\n  background: rgba(255, 255, 255, 0.7);\n  border-bottom-right-radius: 10px;\n}\n\n.label[_ngcontent-%COMP%] {\n  font-family: Agenda-SemiBold;\n  font-size: 1.4rem;\n  margin: 5px;\n}\n\n.welcome_txt[_ngcontent-%COMP%] {\n  text-align: center;\n  color: var(--ion-color-secondary);\n  font-size: 0.8rem !important;\n  line-height: 15px;\n  margin-bottom: 10%;\n}\n\np[_ngcontent-%COMP%] {\n  margin: 5px;\n}\n\n.welcome_txt[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]:nth-child(1) {\n  font-family: Agenda-SemiBold;\n}\n\n.welcome_txt[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]:nth-child(2) {\n  margin-top: 9px;\n  font-size: 0.9rem;\n  margin-bottom: 3px;\n}\n\n.welcome_txt[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]:nth-child(3) {\n  font-size: 0.8rem;\n  margin-bottom: 3px;\n}\n\n.profile-pic[_ngcontent-%COMP%] {\n  display: inline-block;\n  position: relative;\n  text-align: center;\n}\n.profile-pic[_ngcontent-%COMP%]   .profilePic[_ngcontent-%COMP%] {\n  margin-top: 10px;\n  border-radius: 30px;\n  width: 23vh;\n  height: 23vh;\n}\n.profile-pic[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.6);\n  --border-radius: 50%;\n  bottom: -8px;\n  font-size: 18px;\n  padding: 10px;\n  position: absolute;\n  right: -10px;\n}\n\n.notiBadge[_ngcontent-%COMP%] {\n  border-radius: 38px;\n  color: #f4f4f4;\n  --ion-background-color: #e13838;\n  margin-top: -8px;\n  margin-left: -5px;\n  padding: 2px 6px;\n  text-align: center;\n  display: inline-block;\n  min-width: 10px;\n  font-weight: bold;\n  line-height: 1;\n  white-space: nowrap;\n  vertical-align: baseline;\n}\n\n.badgeIcon[_ngcontent-%COMP%] {\n  font-size: 22px;\n  font-family: bolder;\n}\n\n.NoUnread[_ngcontent-%COMP%] {\n  margin-right: 14px !important;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcGFnZXMvZGFzaGJvYXJkLWFmdGVyLWxvZ2luL2Rhc2hib2FyZC1hZnRlci1sb2dpbi5wYWdlLnNjc3MiLCJ3ZWJwYWNrOi8vLi8uLi8uLi8uLi9BbGwlMjBQcm9qZWN0cy9NYWxheXNpYV9DbGllbnRBcHBfUmV2YW1wL1N1bkFjY2Vzc19Jb25pYzZfUmV2YW1wL3NyYy9hcHAvcGFnZXMvZGFzaGJvYXJkLWFmdGVyLWxvZ2luL2Rhc2hib2FyZC1hZnRlci1sb2dpbi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBMkNJO0VBQ0ksa0JBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtFQUNBLFFBQUE7QUMxQ1I7O0FEOENJO0VBQ0ksV0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7QUMzQ1I7O0FEK0NJLDZCQUFBO0FBQ0E7RUFDSSxpQkFBQTtBQzVDUjs7QUQ4Q0k7RUFDSSw4QkFBQTtBQzNDUjs7QUQ4Q0k7RUFDSSxpQkFBQTtBQzNDUjs7QUQ2Q0k7RUFDSSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLG9DQUFBO0VBQ0EsNEJBQUE7QUMxQ1I7O0FENENJO0VBQ0ksa0JBQUE7RUFDQSxvQ0FBQTtFQUNBLGFBQUE7RUFDQSw2QkFBQTtBQ3pDUjs7QUQyQ0k7RUFDSSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0Esb0NBQUE7RUFDQSxhQUFBO0FDeENSOztBRDBDSTtFQUNJLG9DQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0FDdkNSOztBRHlDSTtFQUNJLGlCQUFBO0VBQ0EsYUFBQTtFQUNBLG9DQUFBO0VBQ0EsK0JBQUE7QUN0Q1I7O0FEd0NJO0VBQ0ksYUFBQTtFQUNBLG9DQUFBO0VBQ0EsZ0NBQUE7QUNyQ1I7O0FEdUNJO0VBQ0ksNEJBQUE7RUFDQSxpQkFBQTtFQUNBLFdBQUE7QUNwQ1I7O0FEdUNJO0VBQ0ksa0JBQUE7RUFDQSxpQ0FBQTtFQUNBLDRCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQ3BDUjs7QURzQ0k7RUFDSSxXQUFBO0FDbkNSOztBRHNDSTtFQUNJLDRCQUFBO0FDbkNSOztBRHNDSTtFQUNJLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FDbkNSOztBRHNDSTtFQUNJLGlCQUFBO0VBQ0Esa0JBQUE7QUNuQ1I7O0FEcUNJO0VBQ0kscUJBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0FDbENSO0FEbUNRO0VBQ0ksZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FDakNaO0FEbUNRO0VBQ0ksb0NBQUE7RUFDQSxvQkFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtBQ2pDWjs7QURvQ0k7RUFDSSxtQkFBQTtFQUNBLGNBQUE7RUFDQSwrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EscUJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7RUFDQSx3QkFBQTtBQ2pDUjs7QURtQ0k7RUFDSSxlQUFBO0VBQ0EsbUJBQUE7QUNoQ1I7O0FEa0NJO0VBQ0ksNkJBQUE7QUMvQlIiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBwYWdlLWRhc2hib2FyZC1hZnRlci1sb2dpbiB7XHJcbi8vICAgLmFwcF9iZzIge1xyXG4vLyAgICAgLS1iYWNrZ3JvdW5kOiB1cmwoLy4uL2Fzc2V0cy9pbWdzL2FwcF9iZ18yLmpwZykgbm8tcmVwZWF0IGNlbnRlciBjZW50ZXIgLyBjb3ZlcjtcclxuLy8gfVxyXG4vLyAuaGVhZGVyLXJpZ2h0LWJ0biB7XHJcbi8vICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4vLyAgIHJpZ2h0OiA4cHg7XHJcbi8vICAgYm90dG9tOiAwcHg7XHJcbi8vICAgJi5iYXItYnV0dG9ucy1pb3Mge1xyXG4vLyAgICAgICBib3R0b206IDhweDtcclxuLy8gICB9XHJcbi8vICAgJi5idXR0b24taW9zIHtcclxuLy8gICAgICAgYm90dG9tOiA0cHg7XHJcbi8vICAgfVxyXG4vLyAgIGkge1xyXG4vLyAgICAgICAmLmZhLWJlbGwge1xyXG4vLyAgICAgICAgICAgZm9udC1zaXplOiAyMnB4O1xyXG4vLyAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiA4cHg7XHJcbi8vICAgICAgIH1cclxuLy8gICB9XHJcbi8vIH1cclxuLy8gLnByb2ZpbGUtcGljIHtcclxuLy8gICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbi8vICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4vLyAgIC5wcm9maWxlUGljIHtcclxuLy8gICAgICAgYm9yZGVyLXJhZGl1czogMzBweDtcclxuLy8gICAgICAgd2lkdGg6IDIzdmg7XHJcbi8vICAgICAgIGhlaWdodDogMjN2aDtcclxuLy8gICB9XHJcbi8vICAgaSB7XHJcbi8vICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC42KTtcclxuLy8gICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4vLyAgICAgICBib3R0b206IC04cHg7XHJcbi8vICAgICAgIGZvbnQtc2l6ZTogMThweDtcclxuLy8gICAgICAgcGFkZGluZzogMTBweDtcclxuLy8gICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4vLyAgICAgICByaWdodDogLTEwcHg7XHJcbi8vICAgfVxyXG4vLyB9XHJcblxyXG4vLyAudGV4dF9jb2xvcl9iYXNlIHtcclxuLy8gICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXNlY29uZGFyeSkgIWltcG9ydGFudDtcclxuLy8gfVxyXG4gICAgaW9uLWJhZGdlIHtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgZm9udC1zaXplOiAxMHB0O1xyXG4gICAgICAgIHJpZ2h0OiAtNXB4O1xyXG4gICAgICAgIHRvcDogNXB4O1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBpb24tYnV0dG9uIHtcclxuICAgICAgICBtYXJnaW46IDVweDtcclxuICAgICAgICB3aWR0aDogNDBweDtcclxuICAgICAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgIC8vIG92ZXJmbG93OiB2aXNpYmxlIWltcG9ydGFudDtcclxuICAgIH1cclxuXHJcbiAgICAvKiBTZXR0aW5nIE92ZXJmbG93IFZpc2libGUgKi9cclxuICAgIGlvbi1idXR0b24uY3VzdG9tLWNsYXNzOjpwYXJ0KG5hdGl2ZSkge1xyXG4gICAgICAgIG92ZXJmbG93OiB2aXNpYmxlO1xyXG4gICAgfVxyXG4gICAgLml0ZW0taW5uZXIge1xyXG4gICAgICAgIGJvcmRlci1ib3R0b206IG5vbmUgIWltcG9ydGFudDtcclxuICAgIH1cclxuXHJcbiAgICAudGlsZV9pbWcge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMi41cmVtO1xyXG4gICAgfVxyXG4gICAgLm15X3BsYW5fdGlsZSB7XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiA1cHg7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogNXB4O1xyXG4gICAgICAgIHBhZGRpbmc6IDE1cHg7XHJcbiAgICAgICAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjcpO1xyXG4gICAgICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDEwcHg7XHJcbiAgICB9XHJcbiAgICAuY2xhaW1zX3RpbGUge1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDVweDtcclxuICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNyk7XHJcbiAgICAgICAgcGFkZGluZzogMTVweDtcclxuICAgICAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMTBweDtcclxuICAgIH1cclxuICAgIC5kb3dubG9hZHNfdGlsZSB7XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiA1cHg7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogNXB4O1xyXG4gICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC43KTtcclxuICAgICAgICBwYWRkaW5nOiAxNXB4O1xyXG4gICAgfVxyXG4gICAgLm15X3Byb2ZpbGVfdGlsZSB7XHJcbiAgICAgICAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjcpO1xyXG4gICAgICAgIHBhZGRpbmc6IDE1cHg7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogNXB4O1xyXG4gICAgfVxyXG4gICAgLnN1bmFjdGl2X3RpbGUge1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDogNXB4O1xyXG4gICAgICAgIHBhZGRpbmc6IDE1cHg7XHJcbiAgICAgICAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjcpO1xyXG4gICAgICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDEwcHg7XHJcbiAgICB9XHJcbiAgICAuZW5vbWluYXRpb25fdGlsZSB7XHJcbiAgICAgICAgcGFkZGluZzogMTVweDtcclxuICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNyk7XHJcbiAgICAgICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDEwcHg7XHJcbiAgICB9XHJcbiAgICAubGFiZWwge1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiBBZ2VuZGEtU2VtaUJvbGQ7XHJcbiAgICAgICAgZm9udC1zaXplOiAxLjRyZW07XHJcbiAgICAgICAgbWFyZ2luOiA1cHg7XHJcbiAgICB9XHJcblxyXG4gICAgLndlbGNvbWVfdHh0IHtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1zZWNvbmRhcnkpO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMC44cmVtICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDE1cHg7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTAlO1xyXG4gICAgfVxyXG4gICAgcCB7XHJcbiAgICAgICAgbWFyZ2luOiA1cHg7XHJcbiAgICB9XHJcblxyXG4gICAgLndlbGNvbWVfdHh0IHA6bnRoLWNoaWxkKDEpIHtcclxuICAgICAgICBmb250LWZhbWlseTogQWdlbmRhLVNlbWlCb2xkO1xyXG4gICAgfVxyXG5cclxuICAgIC53ZWxjb21lX3R4dCBwOm50aC1jaGlsZCgyKSB7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogOXB4O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMC45cmVtO1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDNweDtcclxuICAgIH1cclxuXHJcbiAgICAud2VsY29tZV90eHQgcDpudGgtY2hpbGQoMykge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMC44cmVtO1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDNweDtcclxuICAgIH1cclxuICAgIC5wcm9maWxlLXBpYyB7XHJcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgLnByb2ZpbGVQaWMge1xyXG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAzMHB4O1xyXG4gICAgICAgICAgICB3aWR0aDogMjN2aDtcclxuICAgICAgICAgICAgaGVpZ2h0OiAyM3ZoO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjYpO1xyXG4gICAgICAgICAgICAtLWJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgICAgICAgYm90dG9tOiAtOHB4O1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgcmlnaHQ6IC0xMHB4O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC5ub3RpQmFkZ2Uge1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDM4cHg7XHJcbiAgICAgICAgY29sb3I6ICNmNGY0ZjQ7XHJcbiAgICAgICAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjogI2UxMzgzODtcclxuICAgICAgICBtYXJnaW4tdG9wOiAtOHB4O1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAtNXB4O1xyXG4gICAgICAgIHBhZGRpbmc6IDJweCA2cHg7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICBtaW4td2lkdGg6IDEwcHg7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDE7XHJcbiAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XHJcbiAgICB9XHJcbiAgICAuYmFkZ2VJY29uIHtcclxuICAgICAgICBmb250LXNpemU6IDIycHg7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6IGJvbGRlcjtcclxuICAgIH1cclxuICAgIC5Ob1VucmVhZCB7XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAxNHB4ICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbi8vIH1cclxuIiwiaW9uLWJhZGdlIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBmb250LXNpemU6IDEwcHQ7XG4gIHJpZ2h0OiAtNXB4O1xuICB0b3A6IDVweDtcbn1cblxuaW9uLWJ1dHRvbiB7XG4gIG1hcmdpbjogNXB4O1xuICB3aWR0aDogNDBweDtcbiAgaGVpZ2h0OiA0MHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi8qIFNldHRpbmcgT3ZlcmZsb3cgVmlzaWJsZSAqL1xuaW9uLWJ1dHRvbi5jdXN0b20tY2xhc3M6OnBhcnQobmF0aXZlKSB7XG4gIG92ZXJmbG93OiB2aXNpYmxlO1xufVxuXG4uaXRlbS1pbm5lciB7XG4gIGJvcmRlci1ib3R0b206IG5vbmUgIWltcG9ydGFudDtcbn1cblxuLnRpbGVfaW1nIHtcbiAgZm9udC1zaXplOiAyLjVyZW07XG59XG5cbi5teV9wbGFuX3RpbGUge1xuICBtYXJnaW4tcmlnaHQ6IDVweDtcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xuICBwYWRkaW5nOiAxNXB4O1xuICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNyk7XG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDEwcHg7XG59XG5cbi5jbGFpbXNfdGlsZSB7XG4gIG1hcmdpbi1ib3R0b206IDVweDtcbiAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjcpO1xuICBwYWRkaW5nOiAxNXB4O1xuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMTBweDtcbn1cblxuLmRvd25sb2Fkc190aWxlIHtcbiAgbWFyZ2luLXJpZ2h0OiA1cHg7XG4gIG1hcmdpbi1ib3R0b206IDVweDtcbiAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjcpO1xuICBwYWRkaW5nOiAxNXB4O1xufVxuXG4ubXlfcHJvZmlsZV90aWxlIHtcbiAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjcpO1xuICBwYWRkaW5nOiAxNXB4O1xuICBtYXJnaW4tYm90dG9tOiA1cHg7XG59XG5cbi5zdW5hY3Rpdl90aWxlIHtcbiAgbWFyZ2luLXJpZ2h0OiA1cHg7XG4gIHBhZGRpbmc6IDE1cHg7XG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC43KTtcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMTBweDtcbn1cblxuLmVub21pbmF0aW9uX3RpbGUge1xuICBwYWRkaW5nOiAxNXB4O1xuICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNyk7XG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAxMHB4O1xufVxuXG4ubGFiZWwge1xuICBmb250LWZhbWlseTogQWdlbmRhLVNlbWlCb2xkO1xuICBmb250LXNpemU6IDEuNHJlbTtcbiAgbWFyZ2luOiA1cHg7XG59XG5cbi53ZWxjb21lX3R4dCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1zZWNvbmRhcnkpO1xuICBmb250LXNpemU6IDAuOHJlbSAhaW1wb3J0YW50O1xuICBsaW5lLWhlaWdodDogMTVweDtcbiAgbWFyZ2luLWJvdHRvbTogMTAlO1xufVxuXG5wIHtcbiAgbWFyZ2luOiA1cHg7XG59XG5cbi53ZWxjb21lX3R4dCBwOm50aC1jaGlsZCgxKSB7XG4gIGZvbnQtZmFtaWx5OiBBZ2VuZGEtU2VtaUJvbGQ7XG59XG5cbi53ZWxjb21lX3R4dCBwOm50aC1jaGlsZCgyKSB7XG4gIG1hcmdpbi10b3A6IDlweDtcbiAgZm9udC1zaXplOiAwLjlyZW07XG4gIG1hcmdpbi1ib3R0b206IDNweDtcbn1cblxuLndlbGNvbWVfdHh0IHA6bnRoLWNoaWxkKDMpIHtcbiAgZm9udC1zaXplOiAwLjhyZW07XG4gIG1hcmdpbi1ib3R0b206IDNweDtcbn1cblxuLnByb2ZpbGUtcGljIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5wcm9maWxlLXBpYyAucHJvZmlsZVBpYyB7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDMwcHg7XG4gIHdpZHRoOiAyM3ZoO1xuICBoZWlnaHQ6IDIzdmg7XG59XG4ucHJvZmlsZS1waWMgaSB7XG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC42KTtcbiAgLS1ib3JkZXItcmFkaXVzOiA1MCU7XG4gIGJvdHRvbTogLThweDtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBwYWRkaW5nOiAxMHB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAtMTBweDtcbn1cblxuLm5vdGlCYWRnZSB7XG4gIGJvcmRlci1yYWRpdXM6IDM4cHg7XG4gIGNvbG9yOiAjZjRmNGY0O1xuICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiAjZTEzODM4O1xuICBtYXJnaW4tdG9wOiAtOHB4O1xuICBtYXJnaW4tbGVmdDogLTVweDtcbiAgcGFkZGluZzogMnB4IDZweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIG1pbi13aWR0aDogMTBweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGxpbmUtaGVpZ2h0OiAxO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICB2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XG59XG5cbi5iYWRnZUljb24ge1xuICBmb250LXNpemU6IDIycHg7XG4gIGZvbnQtZmFtaWx5OiBib2xkZXI7XG59XG5cbi5Ob1VucmVhZCB7XG4gIG1hcmdpbi1yaWdodDogMTRweCAhaW1wb3J0YW50O1xufSJdLCJzb3VyY2VSb290IjoiIn0= */"]
});

/***/ })

}]);
//# sourceMappingURL=src_app_pages_dashboard-after-login_dashboard-after-login_module_ts.js.map