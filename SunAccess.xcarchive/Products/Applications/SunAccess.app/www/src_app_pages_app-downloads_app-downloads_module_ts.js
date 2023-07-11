"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_app-downloads_app-downloads_module_ts"],{

/***/ 28606:
/*!*********************************************************************!*\
  !*** ./src/app/pages/app-downloads/app-downloads-routing.module.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppDownloadsPageRoutingModule": () => (/* binding */ AppDownloadsPageRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _app_downloads_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-downloads.page */ 27501);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);




const routes = [{
  path: '',
  component: _app_downloads_page__WEBPACK_IMPORTED_MODULE_0__.AppDownloadsPage
}];
class AppDownloadsPageRoutingModule {}
AppDownloadsPageRoutingModule.ɵfac = function AppDownloadsPageRoutingModule_Factory(t) {
  return new (t || AppDownloadsPageRoutingModule)();
};
AppDownloadsPageRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
  type: AppDownloadsPageRoutingModule
});
AppDownloadsPageRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppDownloadsPageRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
})();

/***/ }),

/***/ 77640:
/*!*************************************************************!*\
  !*** ./src/app/pages/app-downloads/app-downloads.module.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppDownloadsPageModule": () => (/* binding */ AppDownloadsPageModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _app_downloads_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-downloads-routing.module */ 28606);
/* harmony import */ var _app_downloads_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app-downloads.page */ 27501);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ 38699);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);







class AppDownloadsPageModule {}
AppDownloadsPageModule.ɵfac = function AppDownloadsPageModule_Factory(t) {
  return new (t || AppDownloadsPageModule)();
};
AppDownloadsPageModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
  type: AppDownloadsPageModule
});
AppDownloadsPageModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule, _app_downloads_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppDownloadsPageRoutingModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__.TranslateModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](AppDownloadsPageModule, {
    declarations: [_app_downloads_page__WEBPACK_IMPORTED_MODULE_1__.AppDownloadsPage],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule, _app_downloads_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppDownloadsPageRoutingModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__.TranslateModule]
  });
})();

/***/ }),

/***/ 27501:
/*!***********************************************************!*\
  !*** ./src/app/pages/app-downloads/app-downloads.page.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppDownloadsPage": () => (/* binding */ AppDownloadsPage)
/* harmony export */ });
/* harmony import */ var http_status_codes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! http-status-codes */ 92788);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _getAppslistService__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getAppslistService */ 60193);
/* harmony import */ var src_providers_utils_utils_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/providers/utils/utils.service */ 30423);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ 38699);
/* harmony import */ var src_providers_logger_service_logger_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/providers/logger-service/logger-service */ 9999);
/* harmony import */ var src_providers_utils_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/providers/utils/config */ 43485);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 94666);









function AppDownloadsPage_section_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "section", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "ion-spinner", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
function AppDownloadsPage_section_14_button_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "button", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function AppDownloadsPage_section_14_button_3_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r5);
      const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r4.getAppsList());
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
function AppDownloadsPage_section_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "section", 14)(1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](3, AppDownloadsPage_section_14_button_3_Template, 3, 3, "button", 15);
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
function AppDownloadsPage_div_15_ion_col_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "ion-col", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function AppDownloadsPage_div_15_ion_col_4_Template_ion_col_click_0_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r9);
      const appData_r7 = restoredCtx.$implicit;
      const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r8.showDownload(appData_r7));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "img", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "ion-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const appData_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate1"]("src", "data:image/png;base64,", appData_r7.icon, "", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", appData_r7.name, " ");
  }
}
function AppDownloadsPage_div_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 17)(1, "section", 18)(2, "ion-grid")(3, "ion-row");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](4, AppDownloadsPage_div_15_ion_col_4_Template, 4, 2, "ion-col", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r2.downloads);
  }
}
class AppDownloadsPage {
  constructor(modalCtrl, getAppsService, utils, translate, logger, config) {
    this.modalCtrl = modalCtrl;
    this.getAppsService = getAppsService;
    this.utils = utils;
    this.translate = translate;
    this.logger = logger;
    this.config = config;
    this.downloads = [];
    this.isShowingLoader = true;
    this.canTryAgain = false;
    this.utils.analytics("appDownloads");
    this.config.currentPage.pageName = "AppDownloadsPage";
  }
  ngOnInit() {
    this.logger.log('ionViewDidLoad AppDownloadsPage');
    this.getAppsList();
  }
  getAppsList() {
    if (this.utils.isDeviceOnLine()) {
      this.canTryAgain = false;
      this.getAppsService.getApplist().then(response => {
        try {
          this.isShowingLoader = false;
          if (response['responseJSON'] && response['responseJSON']['statusCode'] == http_status_codes__WEBPACK_IMPORTED_MODULE_5__.OK) {
            this.downloads = response['responseJSON']['array'];
            if (!(this.downloads.length > 0)) {
              this.errorMsg = this.translate.instant('generic_msgs.no_data');
            }
          } else {
            this.errorMsg = response['responseJSON']['error_description'];
          }
        } catch (e) {
          this.isShowingLoader = false;
          this.canTryAgain = true;
          this.errorMsg = this.translate.instant('generic_msgs.server_err');
        }
      }, error => {
        this.isShowingLoader = false;
        this.canTryAgain = true;
        this.errorMsg = this.utils.handleServiceException(error);
      });
    } else {
      this.isShowingLoader = false;
      this.canTryAgain = true;
      this.errorMsg = this.translate.instant('generic_msgs.network_err');
    }
  }
  /**
   * @param appData - Selected App Data.
   */
  showDownload(appData) {
    // let modal = this.modalCtrl.create(AppDownloadPopUpPage, {appData});
    // modal.present();
    // this.disableContentScroll(modal);
    // return modal;
  }
}
AppDownloadsPage.ɵfac = function AppDownloadsPage_Factory(t) {
  return new (t || AppDownloadsPage)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_6__.ModalController), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_getAppslistService__WEBPACK_IMPORTED_MODULE_0__.GetAppsListService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_providers_utils_utils_service__WEBPACK_IMPORTED_MODULE_1__.UtilService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__.TranslateService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_providers_logger_service_logger_service__WEBPACK_IMPORTED_MODULE_2__.LoggerServiceProvider), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_providers_utils_config__WEBPACK_IMPORTED_MODULE_3__.ConfigProvider));
};
AppDownloadsPage.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
  type: AppDownloadsPage,
  selectors: [["app-app-downloads"]],
  decls: 16,
  vars: 9,
  consts: [["mode", "ios"], ["color", "primary"], ["slot", "start"], ["text", "", "icon", "chevron-back-outline", 2, "padding-left", "15px", "font-size", "0.7rem"], [1, "bold-font"], [1, "sub_title", "ion-no-padding"], [1, "subheader_bg"], [1, "sub-header"], ["padding", "", "no-bounce", "", 1, "app_bg2"], ["class", "spinnersection", 4, "ngIf"], ["class", "errorMsgSection white_container_border_radius", 4, "ngIf"], ["class", "text_color_base", 4, "ngIf"], [1, "spinnersection"], ["name", "ios-small"], [1, "errorMsgSection", "white_container_border_radius"], [3, "click", 4, "ngIf"], [3, "click"], [1, "text_color_base"], [1, "white_container_border_radius"], ["size", "6", "text-center", "", "class", "heading", 3, "click", 4, "ngFor", "ngForOf"], ["size", "6", "text-center", "", 1, "heading", 3, "click"], ["alt", "...", 3, "src"]],
  template: function AppDownloadsPage_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "ion-header", 0)(1, "ion-toolbar", 1)(2, "ion-buttons", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](3, "ion-back-button", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "ion-title", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](6, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "ion-toolbar", 5)(8, "ion-row", 6)(9, "ion-label", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](10);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](11, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "ion-content", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](13, AppDownloadsPage_section_13_Template, 2, 0, "section", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](14, AppDownloadsPage_section_14_Template, 4, 2, "section", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](15, AppDownloadsPage_div_15_Template, 5, 1, "div", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](6, 5, "downloads.download"));
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](11, 7, "downloads.sunlife_apps"));
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.isShowingLoader);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !(ctx.downloads.length > 0) && !ctx.isShowingLoader);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.downloads.length > 0);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgIf, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonBackButton, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonButtons, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonCol, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonContent, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonGrid, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonHeader, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonLabel, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonRow, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonSpinner, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonTitle, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonToolbar, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonBackButtonDelegate, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__.TranslatePipe],
  styles: [".sub-header[_ngcontent-%COMP%] {\n  color: #ffffff;\n  padding: 10px 25px !important;\n  margin: 0px !important;\n  font-size: 1rem !important;\n  font-family: Agenda-Regular;\n}\n\nimg[_ngcontent-%COMP%] {\n  width: 15vh;\n  height: 15vh;\n}\n\n.label[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.sub_title[_ngcontent-%COMP%] {\n  margin-top: 3px !important;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcGFnZXMvYXBwLWRvd25sb2Fkcy9hcHAtZG93bmxvYWRzLnBhZ2Uuc2NzcyIsIndlYnBhY2s6Ly8uLy4uLy4uLy4uL0FsbCUyMFByb2plY3RzL01hbGF5c2lhX0NsaWVudEFwcF9SZXZhbXAvU3VuQWNjZXNzX0lvbmljNl9SZXZhbXAvc3JjL2FwcC9wYWdlcy9hcHAtZG93bmxvYWRzL2FwcC1kb3dubG9hZHMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksY0FBQTtFQUNBLDZCQUFBO0VBQ0Esc0JBQUE7RUFDQSwwQkFBQTtFQUNBLDJCQUFBO0FDQ0o7O0FERUU7RUFDRSxXQUFBO0VBQ0EsWUFBQTtBQ0NKOztBREVBO0VBQ0ksV0FBQTtBQ0NKOztBREVBO0VBQ0ksMEJBQUE7QUNDSiIsInNvdXJjZXNDb250ZW50IjpbIi5zdWItaGVhZGVyIHtcclxuICAgIGNvbG9yOiAjZmZmZmZmO1xyXG4gICAgcGFkZGluZzogMTBweCAyNXB4ICFpbXBvcnRhbnQ7XHJcbiAgICBtYXJnaW46IDBweCAhaW1wb3J0YW50O1xyXG4gICAgZm9udC1zaXplOiAxLjByZW0gIWltcG9ydGFudDtcclxuICAgIGZvbnQtZmFtaWx5OiBBZ2VuZGEtUmVndWxhcjtcclxuICAgIC8vbGluZS1oZWlnaHQ6IDI0cHg7O1xyXG4gIH1cclxuICBpbWd7XHJcbiAgICB3aWR0aDogMTV2aDtcclxuICAgIGhlaWdodDogMTV2aDtcclxufVxyXG5cclxuLmxhYmVse1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5zdWJfdGl0bGV7XHJcbiAgICBtYXJnaW4tdG9wOiAzcHggIWltcG9ydGFudDtcclxufSIsIi5zdWItaGVhZGVyIHtcbiAgY29sb3I6ICNmZmZmZmY7XG4gIHBhZGRpbmc6IDEwcHggMjVweCAhaW1wb3J0YW50O1xuICBtYXJnaW46IDBweCAhaW1wb3J0YW50O1xuICBmb250LXNpemU6IDFyZW0gIWltcG9ydGFudDtcbiAgZm9udC1mYW1pbHk6IEFnZW5kYS1SZWd1bGFyO1xufVxuXG5pbWcge1xuICB3aWR0aDogMTV2aDtcbiAgaGVpZ2h0OiAxNXZoO1xufVxuXG4ubGFiZWwge1xuICB3aWR0aDogMTAwJTtcbn1cblxuLnN1Yl90aXRsZSB7XG4gIG1hcmdpbi10b3A6IDNweCAhaW1wb3J0YW50O1xufSJdLCJzb3VyY2VSb290IjoiIn0= */"]
});

/***/ })

}]);
//# sourceMappingURL=src_app_pages_app-downloads_app-downloads_module_ts.js.map