"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_epolicy-list_epolicy-list_module_ts"],{

/***/ 31671:
/*!*******************************************************************!*\
  !*** ./src/app/pages/epolicy-list/epolicy-list-routing.module.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EPolicyListPageRoutingModule": () => (/* binding */ EPolicyListPageRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _epolicy_list_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./epolicy-list.page */ 82946);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);




const routes = [{
  path: '',
  component: _epolicy_list_page__WEBPACK_IMPORTED_MODULE_0__.EPolicyListPage
}];
class EPolicyListPageRoutingModule {}
EPolicyListPageRoutingModule.ɵfac = function EPolicyListPageRoutingModule_Factory(t) {
  return new (t || EPolicyListPageRoutingModule)();
};
EPolicyListPageRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
  type: EPolicyListPageRoutingModule
});
EPolicyListPageRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](EPolicyListPageRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
})();

/***/ }),

/***/ 14245:
/*!***********************************************************!*\
  !*** ./src/app/pages/epolicy-list/epolicy-list.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EPolicyListPageModule": () => (/* binding */ EPolicyListPageModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _epolicy_list_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./epolicy-list-routing.module */ 31671);
/* harmony import */ var _epolicy_list_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./epolicy-list.page */ 82946);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ 38699);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);







class EPolicyListPageModule {}
EPolicyListPageModule.ɵfac = function EPolicyListPageModule_Factory(t) {
  return new (t || EPolicyListPageModule)();
};
EPolicyListPageModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
  type: EPolicyListPageModule
});
EPolicyListPageModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule, _epolicy_list_routing_module__WEBPACK_IMPORTED_MODULE_0__.EPolicyListPageRoutingModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__.TranslateModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](EPolicyListPageModule, {
    declarations: [_epolicy_list_page__WEBPACK_IMPORTED_MODULE_1__.EPolicyListPage],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule, _epolicy_list_routing_module__WEBPACK_IMPORTED_MODULE_0__.EPolicyListPageRoutingModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__.TranslateModule]
  });
})();

/***/ }),

/***/ 82946:
/*!*********************************************************!*\
  !*** ./src/app/pages/epolicy-list/epolicy-list.page.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EPolicyListPage": () => (/* binding */ EPolicyListPage)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var src_providers_logger_service_logger_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/providers/logger-service/logger-service */ 9999);
/* harmony import */ var src_providers_utils_utils_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/providers/utils/utils.service */ 30423);
/* harmony import */ var _ePolicyListService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ePolicyListService */ 8307);
/* harmony import */ var src_providers_download_pdf_download_pdf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/providers/download-pdf/download-pdf */ 58339);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ 38699);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 93819);








function EPolicyListPage_section_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "section", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "ion-spinner", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
function EPolicyListPage_section_14_button_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "button", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function EPolicyListPage_section_14_button_3_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r5);
      const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r4.getEPolicyList());
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
function EPolicyListPage_section_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "section", 14)(1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](3, EPolicyListPage_section_14_button_3_Template, 3, 3, "button", 15);
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
function EPolicyListPage_section_15_ion_row_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "ion-row", 19)(1, "ion-label", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function EPolicyListPage_section_15_ion_row_2_Template_ion_label_click_1_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r9);
      const ePolicy_r7 = restoredCtx.$implicit;
      const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r8.downloadAndOpenPdf(ePolicy_r7));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ePolicy_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ePolicy_r7.policyNumber, " ");
  }
}
function EPolicyListPage_section_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "section", 17)(1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, EPolicyListPage_section_15_ion_row_2_Template, 3, 1, "ion-row", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r2.ePolicyList);
  }
}
class EPolicyListPage {
  constructor(logger, utils, getEPolicyService, downloadFile, translate) {
    this.logger = logger;
    this.utils = utils;
    this.getEPolicyService = getEPolicyService;
    this.downloadFile = downloadFile;
    this.translate = translate;
    this.ePolicyList = [];
    this.isShowingLoader = true;
    this.canTryAgain = false;
    this.dirName = "SunAccess";
    /**
    * This method is called when the page is loaded and here we will do Service calls.
    */
    //  ionViewDidLoad() {
    //   this.logger.log('ionViewDidLoad EPolicyListPage');
    //   this.getEPolicyList();
    // }
    /**
     * This method is used get E-Policy list from Server
     */
    this.getEPolicyList = function () {
      if (this.utils.isDeviceOnLine()) {
        this.canTryAgain = false;
        this.isShowingLoader = true;
        this.errorMsg = "";
        this.logger.trace("get EPolicyList--start");
        this.getEPolicyService.getEPolicyList().then(result => {
          try {
            this.isShowingLoader = false;
            this.ePolicyList = result['responseJSON']['array'];
            if (!(this.ePolicyList.length > 0)) {
              this.canTryAgain = false;
              this.errorMsg = this.translate.instant('generic_msgs.no_data');
            }
          } catch (e) {
            this.isShowingLoader = false;
            this.canTryAgain = true;
            this.errorMsg = this.translate.instant('generic_msgs.server_err');
          }
        }, err => {
          this.isShowingLoader = false;
          this.canTryAgain = true;
          this.errorMsg = this.utils.handleServiceException(err);
        });
      } else {
        this.isShowingLoader = false;
        this.canTryAgain = true;
        this.errorMsg = this.translate.instant('generic_msgs.network_err');
      }
    };
    /**
     * This method is used to download and open the pdf file
     */
    this.downloadAndOpenPdf = function (policy) {
      this.downloadFile.downloadFile(policy._link);
    };
    this.utils.analytics("ePoLicyList");
  }
  ngOnInit() {
    this.logger.log('ionViewDidLoad EPolicyListPage');
    this.getEPolicyList();
  }
}
EPolicyListPage.ɵfac = function EPolicyListPage_Factory(t) {
  return new (t || EPolicyListPage)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_providers_logger_service_logger_service__WEBPACK_IMPORTED_MODULE_0__.LoggerServiceProvider), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_providers_utils_utils_service__WEBPACK_IMPORTED_MODULE_1__.UtilService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_ePolicyListService__WEBPACK_IMPORTED_MODULE_2__.EPolicyListService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_providers_download_pdf_download_pdf__WEBPACK_IMPORTED_MODULE_3__.DownloadPdfProvider), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__.TranslateService));
};
EPolicyListPage.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
  type: EPolicyListPage,
  selectors: [["app-epolicy-list"]],
  decls: 16,
  vars: 9,
  consts: [["mode", "ios"], ["color", "primary"], ["slot", "start"], ["text", "", "icon", "chevron-back-outline", 2, "padding-left", "15px", "font-size", "0.7rem"], [1, "bold-font"], [1, "sub_title", "ion-no-padding"], [1, "subheader_bg"], [1, "sub-header"], ["no-bounce", "", 1, "app_bg2", "text_color_base"], ["class", "spinnersection", 4, "ngIf"], ["class", "errorMsgSection", 4, "ngIf"], ["class", "white_container_border_radius text_color_base padding_015 font_size_18", 4, "ngIf"], [1, "spinnersection"], ["name", "lines-sharp-small", 2, "height", "98%"], [1, "errorMsgSection"], [3, "click", 4, "ngIf"], [3, "click"], [1, "white_container_border_radius", "text_color_base", "padding_015", "font_size_18"], ["class", "list_item", 4, "ngFor", "ngForOf"], [1, "list_item"], ["size", "2", 1, "link", 3, "click"]],
  template: function EPolicyListPage_Template(rf, ctx) {
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
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](13, EPolicyListPage_section_13_Template, 2, 0, "section", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](14, EPolicyListPage_section_14_Template, 4, 2, "section", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](15, EPolicyListPage_section_15_Template, 3, 1, "section", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](6, 5, "downloads.download"));
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](11, 7, "ePolisy.title"));
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.isShowingLoader);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !(ctx.ePolicyList.length > 0) && !ctx.isShowingLoader);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.ePolicyList.length > 0);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonBackButton, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonButtons, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonContent, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonHeader, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonLabel, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonRow, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonSpinner, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonTitle, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonToolbar, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonBackButtonDelegate, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__.TranslatePipe],
  styles: [".link[_ngcontent-%COMP%] {\n  color: #007bff;\n  text-decoration: underline;\n  white-space: unset !important;\n  font-size: 1rem;\n}\n\n.label[_ngcontent-%COMP%] {\n  margin: 0px !important;\n  padding: 10px;\n  white-space: unset !important;\n}\n\n.list_item[_ngcontent-%COMP%] {\n  border-bottom: 1px solid rgba(0, 45, 61, 0.3);\n  margin-top: 15px;\n}\n\n.list_item[_ngcontent-%COMP%]:last-child {\n  border-bottom: none !important;\n}\n\n.sub_title[_ngcontent-%COMP%] {\n  margin-top: 3px !important;\n}\n\n.sub-header[_ngcontent-%COMP%] {\n  color: #ffffff;\n  padding: 10px 25px !important;\n  margin: 0px !important;\n  font-size: 1rem !important;\n  font-family: Agenda-Regular;\n}\n\n.padding_015[_ngcontent-%COMP%] {\n  padding: 0px 15px;\n}\n\n.text_color_base[_ngcontent-%COMP%] {\n  color: var(--ion-color-secondary) !important;\n}\n\n.white_container_border_radius[_ngcontent-%COMP%] {\n  background-color: rgba(255, 255, 255, 0.7) !important;\n  border-radius: 15px !important;\n  margin: 15px;\n  padding: 15px;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcGFnZXMvZXBvbGljeS1saXN0L2Vwb2xpY3ktbGlzdC5wYWdlLnNjc3MiLCJ3ZWJwYWNrOi8vLi8uLi8uLi8uLi9BbGwlMjBQcm9qZWN0cy9NYWxheXNpYV9DbGllbnRBcHBfUmV2YW1wL1N1bkFjY2Vzc19Jb25pYzZfUmV2YW1wL3NyYy9hcHAvcGFnZXMvZXBvbGljeS1saXN0L2Vwb2xpY3ktbGlzdC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0k7RUFDSSxjQUFBO0VBQ0EsMEJBQUE7RUFDQSw2QkFBQTtFQUNBLGVBQUE7QUNBUjs7QURFSTtFQUNJLHNCQUFBO0VBQ0EsYUFBQTtFQUNBLDZCQUFBO0FDQ1I7O0FER0k7RUFDSSw2Q0FBQTtFQUNBLGdCQUFBO0FDQVI7O0FESUk7RUFDSSw4QkFBQTtBQ0RSOztBREdJO0VBQ0ksMEJBQUE7QUNBUjs7QURFSTtFQUNJLGNBQUE7RUFDQSw2QkFBQTtFQUNBLHNCQUFBO0VBQ0EsMEJBQUE7RUFDQSwyQkFBQTtBQ0NSOztBREdNO0VBQ0UsaUJBQUE7QUNBUjs7QURFSTtFQUNJLDRDQUFBO0FDQ1I7O0FEQ0k7RUFDSSxxREFBQTtFQUNBLDhCQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7QUNFUiIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4gICAgLmxpbmt7XHJcbiAgICAgICAgY29sb3I6ICMwMDdiZmY7XHJcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XHJcbiAgICAgICAgd2hpdGUtc3BhY2U6IHVuc2V0ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgZm9udC1zaXplOiAxcmVtO1xyXG4gICAgfVxyXG4gICAgLmxhYmVse1xyXG4gICAgICAgIG1hcmdpbjogMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgcGFkZGluZzogMTBweCA7XHJcbiAgICAgICAgd2hpdGUtc3BhY2U6IHVuc2V0ICFpbXBvcnRhbnQ7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIC5saXN0X2l0ZW17XHJcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoMCwgNDUsIDYxLCAuMyk7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMTVweDtcclxuICAgICAgICBcclxuICAgIH1cclxuXHJcbiAgICAubGlzdF9pdGVtOmxhc3QtY2hpbGR7XHJcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogbm9uZSAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG4gICAgLnN1Yl90aXRsZXtcclxuICAgICAgICBtYXJnaW4tdG9wOiAzcHggIWltcG9ydGFudDtcclxuICAgIH1cclxuICAgIC5zdWItaGVhZGVyIHtcclxuICAgICAgICBjb2xvcjogI2ZmZmZmZjtcclxuICAgICAgICBwYWRkaW5nOiAxMHB4IDI1cHggIWltcG9ydGFudDtcclxuICAgICAgICBtYXJnaW46IDBweCAhaW1wb3J0YW50O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMS4wcmVtICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6IEFnZW5kYS1SZWd1bGFyO1xyXG4gICAgICAgIC8vbGluZS1oZWlnaHQ6IDI0cHg7O1xyXG4gICAgICB9XHJcblxyXG4gICAgICAucGFkZGluZ18wMTV7XHJcbiAgICAgICAgcGFkZGluZyA6IDBweCAxNXB4O1xyXG4gICAgfVxyXG4gICAgLnRleHRfY29sb3JfYmFzZSB7XHJcbiAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1zZWNvbmRhcnkpICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbiAgICAud2hpdGVfY29udGFpbmVyX2JvcmRlcl9yYWRpdXMge1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC43KSAhaW1wb3J0YW50O1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDE1cHggIWltcG9ydGFudDtcclxuICAgICAgICBtYXJnaW46IDE1cHg7XHJcbiAgICAgICAgcGFkZGluZzogMTVweDtcclxuICAgIH0iLCIubGluayB7XG4gIGNvbG9yOiAjMDA3YmZmO1xuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbiAgd2hpdGUtc3BhY2U6IHVuc2V0ICFpbXBvcnRhbnQ7XG4gIGZvbnQtc2l6ZTogMXJlbTtcbn1cblxuLmxhYmVsIHtcbiAgbWFyZ2luOiAwcHggIWltcG9ydGFudDtcbiAgcGFkZGluZzogMTBweDtcbiAgd2hpdGUtc3BhY2U6IHVuc2V0ICFpbXBvcnRhbnQ7XG59XG5cbi5saXN0X2l0ZW0ge1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiYSgwLCA0NSwgNjEsIDAuMyk7XG4gIG1hcmdpbi10b3A6IDE1cHg7XG59XG5cbi5saXN0X2l0ZW06bGFzdC1jaGlsZCB7XG4gIGJvcmRlci1ib3R0b206IG5vbmUgIWltcG9ydGFudDtcbn1cblxuLnN1Yl90aXRsZSB7XG4gIG1hcmdpbi10b3A6IDNweCAhaW1wb3J0YW50O1xufVxuXG4uc3ViLWhlYWRlciB7XG4gIGNvbG9yOiAjZmZmZmZmO1xuICBwYWRkaW5nOiAxMHB4IDI1cHggIWltcG9ydGFudDtcbiAgbWFyZ2luOiAwcHggIWltcG9ydGFudDtcbiAgZm9udC1zaXplOiAxcmVtICFpbXBvcnRhbnQ7XG4gIGZvbnQtZmFtaWx5OiBBZ2VuZGEtUmVndWxhcjtcbn1cblxuLnBhZGRpbmdfMDE1IHtcbiAgcGFkZGluZzogMHB4IDE1cHg7XG59XG5cbi50ZXh0X2NvbG9yX2Jhc2Uge1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXNlY29uZGFyeSkgIWltcG9ydGFudDtcbn1cblxuLndoaXRlX2NvbnRhaW5lcl9ib3JkZXJfcmFkaXVzIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjcpICFpbXBvcnRhbnQ7XG4gIGJvcmRlci1yYWRpdXM6IDE1cHggIWltcG9ydGFudDtcbiAgbWFyZ2luOiAxNXB4O1xuICBwYWRkaW5nOiAxNXB4O1xufSJdLCJzb3VyY2VSb290IjoiIn0= */"]
});

/***/ })

}]);
//# sourceMappingURL=src_app_pages_epolicy-list_epolicy-list_module_ts.js.map