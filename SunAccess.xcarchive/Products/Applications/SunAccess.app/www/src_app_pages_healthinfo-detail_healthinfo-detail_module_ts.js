"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_healthinfo-detail_healthinfo-detail_module_ts"],{

/***/ 42457:
/*!*****************************************************************************!*\
  !*** ./src/app/pages/healthinfo-detail/healthinfo-detail-routing.module.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HealthinfoDetailPageRoutingModule": () => (/* binding */ HealthinfoDetailPageRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _healthinfo_detail_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./healthinfo-detail.page */ 98415);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);




const routes = [{
  path: '',
  component: _healthinfo_detail_page__WEBPACK_IMPORTED_MODULE_0__.HealthinfoDetailPage
}];
class HealthinfoDetailPageRoutingModule {}
HealthinfoDetailPageRoutingModule.ɵfac = function HealthinfoDetailPageRoutingModule_Factory(t) {
  return new (t || HealthinfoDetailPageRoutingModule)();
};
HealthinfoDetailPageRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
  type: HealthinfoDetailPageRoutingModule
});
HealthinfoDetailPageRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](HealthinfoDetailPageRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
})();

/***/ }),

/***/ 10717:
/*!*********************************************************************!*\
  !*** ./src/app/pages/healthinfo-detail/healthinfo-detail.module.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HealthinfoDetailPageModule": () => (/* binding */ HealthinfoDetailPageModule)
/* harmony export */ });
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ 38699);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _healthinfo_detail_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./healthinfo-detail-routing.module */ 42457);
/* harmony import */ var _healthinfo_detail_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./healthinfo-detail.page */ 98415);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);







class HealthinfoDetailPageModule {}
HealthinfoDetailPageModule.ɵfac = function HealthinfoDetailPageModule_Factory(t) {
  return new (t || HealthinfoDetailPageModule)();
};
HealthinfoDetailPageModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
  type: HealthinfoDetailPageModule
});
HealthinfoDetailPageModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__.TranslateModule, _healthinfo_detail_routing_module__WEBPACK_IMPORTED_MODULE_0__.HealthinfoDetailPageRoutingModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](HealthinfoDetailPageModule, {
    declarations: [_healthinfo_detail_page__WEBPACK_IMPORTED_MODULE_1__.HealthinfoDetailPage],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__.TranslateModule, _healthinfo_detail_routing_module__WEBPACK_IMPORTED_MODULE_0__.HealthinfoDetailPageRoutingModule]
  });
})();

/***/ }),

/***/ 98415:
/*!*******************************************************************!*\
  !*** ./src/app/pages/healthinfo-detail/healthinfo-detail.page.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HealthinfoDetailPage": () => (/* binding */ HealthinfoDetailPage)
/* harmony export */ });
/* harmony import */ var http_status_codes__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! http-status-codes */ 92788);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var src_app_services_translate_config_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/translate-config.service */ 45340);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ 38699);
/* harmony import */ var src_providers_utils_utils_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/providers/utils/utils.service */ 30423);
/* harmony import */ var _healthinfoDetailService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./healthinfoDetailService */ 19670);
/* harmony import */ var src_providers_logger_service_logger_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/providers/logger-service/logger-service */ 9999);
/* harmony import */ var src_providers_utils_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/providers/utils/config */ 43485);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/angular */ 93819);










function HealthinfoDetailPage_section_8_button_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function HealthinfoDetailPage_section_8_button_3_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r3);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r2.getHealthInfoDetails());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](2, 1, "generic_msgs.try_again"));
  }
}
function HealthinfoDetailPage_section_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "section", 11)(1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](3, HealthinfoDetailPage_section_8_button_3_Template, 3, 3, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r0.errorMsg);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r0.canTryAgain);
  }
}
class HealthinfoDetailPage {
  constructor(translateConfigService, translate, utils, detailsService, logger, config, elementRef, renderer) {
    this.translateConfigService = translateConfigService;
    this.translate = translate;
    this.utils = utils;
    this.detailsService = detailsService;
    this.logger = logger;
    this.config = config;
    this.elementRef = elementRef;
    this.renderer = renderer;
    this.canTryAgain = false;
    this.isSuccess = false;
    this.getHealthInfoDetailsData = false;
    this.selectedLanguage = this.translateConfigService.getDefaultLanguage();
    this.translateConfigService.setLanguage('en');
    this.utils.analytics("HealthinfoDetail");
    this.helathInfoId = history.state.data;
    this.config.currentPage.pageName = "HealthinfoDetailPage";
  }
  ngOnInit() {
    this.getHealthInfoDetails();
    /**
    * This method is used to get details selected Notification
    */
  }

  getHealthInfoDetails() {
    if (this.utils.isDeviceOnLine()) {
      this.canTryAgain = false;
      let getHelathInfoId = this.helathInfoId;
      this.detailsService.getHealthInfoDetails(getHelathInfoId).then(response => {
        try {
          if (response['responseJSON'] && response['responseJSON']['statusCode'] == http_status_codes__WEBPACK_IMPORTED_MODULE_6__.OK) {
            this.healthInfodetails = response['responseJSON'];
            this.isShowingLoader = false;
            this.getHealthInfoDetailsData = true;
            document.getElementById("HeaderDiv").innerHTML = this.healthInfodetails.head;
            document.getElementById("bodyDiv").innerHTML = this.healthInfodetails.body;
            // setTimeout(() => {
            this.listenFunc();
            //  }, 500);
          } else {
            this.errorMsg = response['responseJSON']['error_description'];
            this.getHealthInfoDetailsData = false;
          }
        } catch (e) {
          this.utils.dissmisProgressLoader();
          this.isShowingLoader = false;
          this.canTryAgain = true;
          this.errorMsg = this.translate.instant('generic_msgs.server_err');
          this.getHealthInfoDetailsData = false;
        }
      }, error => {
        this.utils.dissmisProgressLoader();
        this.isShowingLoader = false;
        this.canTryAgain = true;
        this.errorMsg = this.utils.handleServiceException(error);
        this.getHealthInfoDetailsData = false;
      });
    } else {
      this.utils.dissmisProgressLoader();
      this.isShowingLoader = false;
      this.canTryAgain = true;
      this.errorMsg = this.translate.instant('generic_msgs.network_err');
      this.getHealthInfoDetailsData = false;
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
    //if (link != null && link != undefined) {
    // link = link.replace('bpp1.', '');
    return link;
    //}
  }

  listenFunc() {
    this.renderer.listen(this.elementRef.nativeElement, 'click', event => {
      event.preventDefault();
      if (event.target.href) {
        this.utils.showProgressLoader();
        this.utils.openLink(event.target.href);
        this.utils.dissmisProgressLoader();
      } else if (event.target.parentElement.href) {
        this.utils.showProgressLoader();
        this.utils.openLink(event.target.parentElement.href);
        this.utils.dissmisProgressLoader();
      }
    });
  }
}
HealthinfoDetailPage.ɵfac = function HealthinfoDetailPage_Factory(t) {
  return new (t || HealthinfoDetailPage)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_services_translate_config_service__WEBPACK_IMPORTED_MODULE_0__.TranslateConfigService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__.TranslateService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_providers_utils_utils_service__WEBPACK_IMPORTED_MODULE_1__.UtilService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_healthinfoDetailService__WEBPACK_IMPORTED_MODULE_2__.HealthinfoDetailService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_providers_logger_service_logger_service__WEBPACK_IMPORTED_MODULE_3__.LoggerServiceProvider), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_providers_utils_config__WEBPACK_IMPORTED_MODULE_4__.ConfigProvider), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_5__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_5__.Renderer2));
};
HealthinfoDetailPage.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
  type: HealthinfoDetailPage,
  selectors: [["app-healthinfo-detail"]],
  decls: 13,
  vars: 4,
  consts: [["mode", "ios"], ["color", "primary"], ["slot", "start"], ["text", "", "icon", "chevron-back-outline", 2, "padding-left", "15px", "font-size", "0.7rem"], [1, "bold-font"], ["no-bounce", "", 1, "app_bg2", "text_color_base", "ion-padding"], ["class", "errorMsgSection white_container_border_radius", 4, "ngIf"], [1, "font_size_16"], [1, "white_container_border_radius", "text_color_base", "padding_015"], ["id", "HeaderDiv"], ["id", "bodyDiv"], [1, "errorMsgSection", "white_container_border_radius"], [3, "click", 4, "ngIf"], [3, "click"]],
  template: function HealthinfoDetailPage_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ion-header", 0)(1, "ion-toolbar", 1)(2, "ion-buttons", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](3, "ion-back-button", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "ion-title", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](6, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "ion-content", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](8, HealthinfoDetailPage_section_8_Template, 4, 2, "section", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "section", 7)(10, "div", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](11, "ion-row", 9)(12, "ion-row", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](6, 2, "healthinfo.health_info"), "");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx.getHealthInfoDetailsData && !ctx.isShowingLoader);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.NgIf, _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.IonBackButton, _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.IonButtons, _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.IonContent, _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.IonHeader, _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.IonRow, _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.IonTitle, _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.IonToolbar, _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.IonBackButtonDelegate, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__.TranslatePipe],
  styles: [".app_bg2[_ngcontent-%COMP%] {\n  --background: url('app_bg_2.jpg') no-repeat center center / cover;\n  background-size: cover;\n  background-repeat: no-repeat;\n  height: 100%;\n  background-position: bottom;\n}\n\n.white_container_border_radius[_ngcontent-%COMP%] {\n  background-color: rgba(255, 255, 255, 0.7) !important;\n  border-radius: 15px !important;\n}\n\n.errorMsgSection[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  height: 98%;\n  font-size: 0.8rem;\n  color: #494747 !important;\n  padding: 0px 15px;\n}\n\n.font_size_16[_ngcontent-%COMP%] {\n  font-size: 1.6rem !important;\n}\n\n.padding_015[_ngcontent-%COMP%] {\n  padding: 0px 15px;\n}\n\nP[_ngcontent-%COMP%] {\n  font-size: 1rem !important;\n}\n\ndiv[_ngcontent-%COMP%] {\n  font-size: 1rem !important;\n}\n\nstrong[_ngcontent-%COMP%] {\n  color: #6095c9;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcGFnZXMvaGVhbHRoaW5mby1kZXRhaWwvaGVhbHRoaW5mby1kZXRhaWwucGFnZS5zY3NzIiwid2VicGFjazovLy4vLi4vLi4vLi4vQWxsJTIwUHJvamVjdHMvTWFsYXlzaWFfQ2xpZW50QXBwX1JldmFtcC9TdW5BY2Nlc3NfSW9uaWM2X1JldmFtcC9zcmMvYXBwL3BhZ2VzL2hlYWx0aGluZm8tZGV0YWlsL2hlYWx0aGluZm8tZGV0YWlsLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGlFQUFBO0VBQ0Esc0JBQUE7RUFDQSw0QkFBQTtFQUNBLFlBQUE7RUFDQSwyQkFBQTtBQ0NGOztBRENBO0VBQ0UscURBQUE7RUFDQSw4QkFBQTtBQ0VGOztBRENBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtFQUNBLHlCQUFBO0VBQ0EsaUJBQUE7QUNFRjs7QURBQTtFQUNFLDRCQUFBO0FDR0Y7O0FEREE7RUFDRSxpQkFBQTtBQ0lGOztBREZBO0VBQ0UsMEJBQUE7QUNLRjs7QURIQTtFQUNFLDBCQUFBO0FDTUY7O0FESkE7RUFDRSxjQUFBO0FDT0YiLCJzb3VyY2VzQ29udGVudCI6WyIuYXBwX2JnMiB7XHJcbiAgLS1iYWNrZ3JvdW5kOiB1cmwoLi4vLi4vLi4vYXNzZXRzL2ltZ3MvYXBwX2JnXzIuanBnKSBuby1yZXBlYXQgY2VudGVyIGNlbnRlciAvIGNvdmVyO1xyXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogYm90dG9tO1xyXG59XHJcbi53aGl0ZV9jb250YWluZXJfYm9yZGVyX3JhZGl1c3tcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNykgIWltcG9ydGFudDtcclxuICBib3JkZXItcmFkaXVzOiAxNXB4ICFpbXBvcnRhbnQ7XHJcblxyXG59XHJcbi5lcnJvck1zZ1NlY3Rpb24ge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGhlaWdodDogOTglO1xyXG4gIGZvbnQtc2l6ZTogMC44cmVtO1xyXG4gIGNvbG9yOiAjNDk0NzQ3ICFpbXBvcnRhbnQ7XHJcbiAgcGFkZGluZzogMHB4IDE1cHg7XHJcbn1cclxuLmZvbnRfc2l6ZV8xNiB7XHJcbiAgZm9udC1zaXplOiAxLjZyZW0gIWltcG9ydGFudDtcclxufVxyXG4ucGFkZGluZ18wMTUge1xyXG4gIHBhZGRpbmc6IDBweCAxNXB4O1xyXG59XHJcblB7XHJcbiAgZm9udC1zaXplOiAxcmVtICFpbXBvcnRhbnQ7XHJcbn1cclxuZGl2e1xyXG4gIGZvbnQtc2l6ZTogMXJlbSAhaW1wb3J0YW50O1xyXG59XHJcbnN0cm9uZ3tcclxuICBjb2xvcjojNjA5NWM5O1xyXG59XHJcbiIsIi5hcHBfYmcyIHtcbiAgLS1iYWNrZ3JvdW5kOiB1cmwoLi4vLi4vLi4vYXNzZXRzL2ltZ3MvYXBwX2JnXzIuanBnKSBuby1yZXBlYXQgY2VudGVyIGNlbnRlciAvIGNvdmVyO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGJvdHRvbTtcbn1cblxuLndoaXRlX2NvbnRhaW5lcl9ib3JkZXJfcmFkaXVzIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjcpICFpbXBvcnRhbnQ7XG4gIGJvcmRlci1yYWRpdXM6IDE1cHggIWltcG9ydGFudDtcbn1cblxuLmVycm9yTXNnU2VjdGlvbiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBoZWlnaHQ6IDk4JTtcbiAgZm9udC1zaXplOiAwLjhyZW07XG4gIGNvbG9yOiAjNDk0NzQ3ICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmc6IDBweCAxNXB4O1xufVxuXG4uZm9udF9zaXplXzE2IHtcbiAgZm9udC1zaXplOiAxLjZyZW0gIWltcG9ydGFudDtcbn1cblxuLnBhZGRpbmdfMDE1IHtcbiAgcGFkZGluZzogMHB4IDE1cHg7XG59XG5cblAge1xuICBmb250LXNpemU6IDFyZW0gIWltcG9ydGFudDtcbn1cblxuZGl2IHtcbiAgZm9udC1zaXplOiAxcmVtICFpbXBvcnRhbnQ7XG59XG5cbnN0cm9uZyB7XG4gIGNvbG9yOiAjNjA5NWM5O1xufSJdLCJzb3VyY2VSb290IjoiIn0= */"]
});

/***/ })

}]);
//# sourceMappingURL=src_app_pages_healthinfo-detail_healthinfo-detail_module_ts.js.map