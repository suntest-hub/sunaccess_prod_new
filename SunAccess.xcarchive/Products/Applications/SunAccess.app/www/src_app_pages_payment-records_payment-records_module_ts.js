"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_payment-records_payment-records_module_ts"],{

/***/ 26316:
/*!*************************************************************************!*\
  !*** ./src/app/pages/payment-records/payment-records-routing.module.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PaymentRecordsPageRoutingModule": () => (/* binding */ PaymentRecordsPageRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _payment_records_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./payment-records.page */ 44122);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);




const routes = [{
  path: '',
  component: _payment_records_page__WEBPACK_IMPORTED_MODULE_0__.PaymentRecordsPage
}];
class PaymentRecordsPageRoutingModule {}
PaymentRecordsPageRoutingModule.ɵfac = function PaymentRecordsPageRoutingModule_Factory(t) {
  return new (t || PaymentRecordsPageRoutingModule)();
};
PaymentRecordsPageRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
  type: PaymentRecordsPageRoutingModule
});
PaymentRecordsPageRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](PaymentRecordsPageRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
})();

/***/ }),

/***/ 88127:
/*!*****************************************************************!*\
  !*** ./src/app/pages/payment-records/payment-records.module.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PaymentRecordsPageModule": () => (/* binding */ PaymentRecordsPageModule)
/* harmony export */ });
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ 38699);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _payment_records_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./payment-records-routing.module */ 26316);
/* harmony import */ var _payment_records_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./payment-records.page */ 44122);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);







class PaymentRecordsPageModule {}
PaymentRecordsPageModule.ɵfac = function PaymentRecordsPageModule_Factory(t) {
  return new (t || PaymentRecordsPageModule)();
};
PaymentRecordsPageModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
  type: PaymentRecordsPageModule
});
PaymentRecordsPageModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__.TranslateModule, _payment_records_routing_module__WEBPACK_IMPORTED_MODULE_0__.PaymentRecordsPageRoutingModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](PaymentRecordsPageModule, {
    declarations: [_payment_records_page__WEBPACK_IMPORTED_MODULE_1__.PaymentRecordsPage],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__.TranslateModule, _payment_records_routing_module__WEBPACK_IMPORTED_MODULE_0__.PaymentRecordsPageRoutingModule]
  });
})();

/***/ }),

/***/ 44122:
/*!***************************************************************!*\
  !*** ./src/app/pages/payment-records/payment-records.page.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PaymentRecordsPage": () => (/* binding */ PaymentRecordsPage)
/* harmony export */ });
/* harmony import */ var http_status_codes__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! http-status-codes */ 92788);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var src_app_services_translate_config_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/translate-config.service */ 45340);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ 38699);
/* harmony import */ var _paymentRecordsService__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./paymentRecordsService */ 92126);
/* harmony import */ var src_providers_logger_service_logger_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/providers/logger-service/logger-service */ 9999);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var src_providers_utils_utils_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/providers/utils/utils.service */ 30423);
/* harmony import */ var src_providers_utils_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/providers/utils/config */ 43485);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 94666);











function PaymentRecordsPage_section_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "section", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "ion-spinner", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function PaymentRecordsPage_section_13_ion_button_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ion-button", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function PaymentRecordsPage_section_13_ion_button_3_Template_ion_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r5);
      const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r4.getPaymentRecords());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](2, 1, "generic_msgs.try_again"), "");
  }
}
function PaymentRecordsPage_section_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "section", 15)(1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](3, PaymentRecordsPage_section_13_ion_button_3_Template, 3, 3, "ion-button", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r1.errorMsg);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.canTryAgain);
  }
}
function PaymentRecordsPage_ion_list_14_ion_row_11_ion_icon_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ion-icon", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("tap", function PaymentRecordsPage_ion_list_14_ion_row_11_ion_icon_7_Template_ion_icon_tap_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r13);
      const payment_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit;
      const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r11.openPopup($event, payment_r7.unsuccessfulReason));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "i", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
const _c0 = function (a0, a1) {
  return {
    odd: a0,
    even: a1
  };
};
function PaymentRecordsPage_ion_list_14_ion_row_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ion-row", 21)(1, "ion-col", 22)(2, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "ion-col", 22)(5, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](7, PaymentRecordsPage_ion_list_14_ion_row_11_ion_icon_7_Template, 2, 0, "ion-icon", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "ion-col", 22)(9, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const payment_r7 = ctx.$implicit;
    const odd_r8 = ctx.odd;
    const even_r9 = ctx.even;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction2"](5, _c0, odd_r8, even_r9));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", payment_r7.dueDate, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", payment_r7.status, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", payment_r7.unsuccessfulReason);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", payment_r7.amount, " ");
  }
}
function PaymentRecordsPage_ion_list_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ion-list")(1, "ion-row", 18)(2, "ion-col", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "ion-col", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](7, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "ion-col", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](10, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](11, PaymentRecordsPage_ion_list_14_ion_row_11_Template, 11, 8, "ion-row", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](4, 4, "payment_records.due_date"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](7, 6, "payment_records.status"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](10, 8, "payment_records.premium_amt"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx_r2.paymentRecords);
  }
}
const _c1 = function (a0, a1) {
  return {
    "bg-conventional": a0,
    "bg-takaful": a1
  };
};
class PaymentRecordsPage {
  constructor(translateConfigService, translate, paymentRecordsService, logger, popOverCtrl, router, utils, config) {
    this.translateConfigService = translateConfigService;
    this.translate = translate;
    this.paymentRecordsService = paymentRecordsService;
    this.logger = logger;
    this.popOverCtrl = popOverCtrl;
    this.router = router;
    this.utils = utils;
    this.config = config;
    this.paymentRecords = [];
    this.isShowingLoader = true;
    this.canTryAgain = false;
    this.str1 = "eight";
    this.getPaymentRecords = function () {
      if (this.utils.isDeviceOnLine()) {
        this.canTryAgain = false;
        this.paymentRecordsService.getPaymentRecords(this.encryptedPolicyNo).then(res => {
          try {
            this.isShowingLoader = false;
            if (res['responseJSON'] && res['responseJSON']['statusCode'] == http_status_codes__WEBPACK_IMPORTED_MODULE_6__.OK) {
              this.paymentRecords = res['responseJSON']['array'];
              if (!(this.paymentRecords.length > 0)) {
                this.errorMsg = this.translate.instant('generic_msgs.no_data');
              }
            } else {
              this.errorMsg = res['responseJSON']['error_description'];
            }
          } catch (e) {
            this.isShowingLoader = false;
            this.canTryAgain = true;
            this.logger.error("getPaymentRecords catch eror : " + JSON.stringify(e));
            this.errorMsg = this.translate.instant('generic_msgs.no_data');
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
    this.selectedLanguage = this.translateConfigService.getDefaultLanguage();
    this.translateConfigService.setLanguage('en');
    this.utils.analytics("paymentRecords");
    this.config.currentPage.pageName = "PaymentRecordsPage";
    this.selectedPolicyData = history.state.policyData;
    this.selectedPlanType = this.selectedPolicyData['planType'];
    this.encryptedPolicyNo = this.selectedPolicyData['encryptedPolicyNo'];
  }
  ngOnInit() {
    this.getPaymentRecords();
  }
  ionViewDidLoad() {
    this.logger.log('ionViewDidLoad PaymentRecordsPage');
    this.getPaymentRecords();
  }
  payNow() {
    this.router.navigate(['payment-user-details'], {
      state: {
        encryptedPlNo: this.encryptedPolicyNo,
        polNo: this.selectedPolicyData['policyNumber'],
        planType: this.selectedPlanType
      }
    });
  }
}
PaymentRecordsPage.ɵfac = function PaymentRecordsPage_Factory(t) {
  return new (t || PaymentRecordsPage)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_services_translate_config_service__WEBPACK_IMPORTED_MODULE_0__.TranslateConfigService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__.TranslateService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_paymentRecordsService__WEBPACK_IMPORTED_MODULE_1__.PaymentRecordsService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_providers_logger_service_logger_service__WEBPACK_IMPORTED_MODULE_2__.LoggerServiceProvider), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_8__.PopoverController), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_9__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_providers_utils_utils_service__WEBPACK_IMPORTED_MODULE_3__.UtilService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_providers_utils_config__WEBPACK_IMPORTED_MODULE_4__.ConfigProvider));
};
PaymentRecordsPage.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
  type: PaymentRecordsPage,
  selectors: [["app-payment-records"]],
  decls: 19,
  vars: 14,
  consts: [["mode", "ios"], ["color", "primary", 2, "border-bottom", "3px solid white"], ["slot", "start"], ["text", "", "icon", "chevron-back-outline", 2, "padding-left", "15px", "font-size", "0.7rem"], [1, "bold-font"], ["color", "primary", 1, "tabs"], [2, "margin-bottom", "5px", 3, "ngClass"], [1, "sub-header"], ["no-bounce", "", 1, "ion-padding"], ["class", "spinnersection ion-text-center", 4, "ngIf"], ["class", "errorMsgSection white_container_border_radius", "margin", "", 4, "ngIf"], [4, "ngIf"], ["expand", "block", 1, "btn_center1", 3, "click"], [1, "spinnersection", "ion-text-center"], ["name", "lines-sharp-small", 2, "height", "98%"], ["margin", "", 1, "errorMsgSection", "white_container_border_radius"], [3, "click", 4, "ngIf"], [3, "click"], [1, "heading", "font_size_17", "text_color_base"], ["size", "4", 1, "ion-text-center", 2, "font-family", "Agenda-semibold"], ["class", "font_size_17 content", 3, "ngClass", 4, "ngFor", "ngForOf"], [1, "font_size_17", "content", 3, "ngClass"], ["size", "4", 1, "ion-text-center"], [1, "statusDiv"], ["class", "securetooltip", 3, "tap", 4, "ngIf"], [1, "securetooltip", 3, "tap"], [1, "fas", "fa-question-circle"]],
  template: function PaymentRecordsPage_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ion-header", 0)(1, "ion-toolbar", 1)(2, "ion-buttons", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](3, "ion-back-button", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "ion-title", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "ion-toolbar", 5)(7, "ion-row", 6)(8, "ion-label", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](9);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](10, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "ion-content", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](12, PaymentRecordsPage_section_12_Template, 2, 0, "section", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](13, PaymentRecordsPage_section_13_Template, 4, 2, "section", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](14, PaymentRecordsPage_ion_list_14_Template, 12, 10, "ion-list", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](15, "div")(16, "ion-button", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function PaymentRecordsPage_Template_ion_button_click_16_listener() {
        return ctx.payNow();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](17);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](18, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx.selectedPolicyData["policyNumber"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction2"](11, _c1, ctx.selectedPlanType === "Conventional", ctx.selectedPlanType !== "Conventional"));
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](10, 7, "payment_records.title"));
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.isShowingLoader);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !(ctx.paymentRecords.length > 0) && !ctx.isShowingLoader);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.paymentRecords.length > 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](18, 9, "payment_records.pay_now"));
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_10__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgIf, _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonBackButton, _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonButton, _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonButtons, _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonCol, _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonContent, _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonHeader, _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonIcon, _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonLabel, _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonList, _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonRow, _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonSpinner, _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonTitle, _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonToolbar, _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonBackButtonDelegate, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__.TranslatePipe],
  styles: [".app_bg2[_ngcontent-%COMP%] {\n  --background: url('app_bg_2.jpg') no-repeat center center / cover;\n  background-size: cover;\n  background-repeat: no-repeat;\n  height: 100%;\n  background-position: bottom;\n}\n\n.sub-header[_ngcontent-%COMP%] {\n  color: #ffffff;\n  padding: 10px 25px !important;\n  margin: 0px !important;\n  font-size: 1.1rem !important;\n  font-family: Agenda-Regular;\n}\n\n.tabs[_ngcontent-%COMP%] {\n  border-top: 3px solid color white;\n  --padding-top: -4px;\n  --padding-start: -4px;\n  --padding-end: -4px;\n  --min-height: 44px;\n}\n\n.white_container_border_radius[_ngcontent-%COMP%] {\n  padding: 25px;\n}\n\n.even[_ngcontent-%COMP%] {\n  background: white;\n}\n\n.odd[_ngcontent-%COMP%] {\n  background: #e5eaeb;\n}\n\n.scroll-content[_ngcontent-%COMP%] {\n  padding: 0px !important;\n}\n\n.col[_ngcontent-%COMP%] {\n  padding: 7px 20px !important;\n}\n\n.grid[_ngcontent-%COMP%] {\n  padding: 0px !important;\n}\n\n.content[_ngcontent-%COMP%] {\n  color: #4e4e4e;\n}\n\n.header-md[_ngcontent-%COMP%]::after, .tabs-md[tabsPlacement=top][_ngcontent-%COMP%]    > .tabbar[_ngcontent-%COMP%]::after, .footer-md[_ngcontent-%COMP%]::before, .tabs-md[tabsPlacement=bottom][_ngcontent-%COMP%]    > .tabbar[_ngcontent-%COMP%]::before {\n  background-image: unset !important;\n}\n\n.btn_center1[_ngcontent-%COMP%] {\n  text-transform: capitalize;\n  --background: #002d3d !important;\n  color: white;\n  font-size: 1rem;\n  border-radius: 20px;\n  min-height: 45px;\n  --border-radius: 10px !important;\n  width: 95% !important;\n  margin-bottom: 10px;\n  font-family: Agenda-Regular !important;\n}\n\n.btn_center[_ngcontent-%COMP%] {\n  text-transform: capitalize;\n  --background: #002d3d !important;\n  color: white;\n  margin-top: 15px;\n  --border-radius: 10px;\n  min-height: 45px;\n  width: 100% !important;\n  font-family: Agenda-Regular !important;\n}\n\n.securetooltip[_ngcontent-%COMP%] {\n  position: absolute;\n  margin-top: -22px;\n  margin-left: 35%;\n  font-size: 15px;\n}\n\n.statusDiv[_ngcontent-%COMP%] {\n  width: 120%;\n  margin-left: -12%;\n}\n\n.heading[_ngcontent-%COMP%] {\n  font-family: Agenda-SemiBold !important;\n}\n\n.font_size_17[_ngcontent-%COMP%] {\n  font-size: 1rem !important;\n}\n\n.text_color_base[_ngcontent-%COMP%] {\n  color: #002d3d !important;\n}\n\n.download_modal[_ngcontent-%COMP%] {\n  background: rgba(0, 0, 0, 0.7) !important;\n}\n.download_modal[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\n  position: absolute !important;\n  width: 90% !important;\n  top: 20% !important;\n  max-height: 70% !important;\n  left: 5% !important;\n  background: rgba(255, 255, 255, 0.7) !important;\n  border-radius: 15px;\n}\n\n.even[_ngcontent-%COMP%] {\n  background: white;\n}\n\n.odd[_ngcontent-%COMP%] {\n  background: #e5eaeb;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcGFnZXMvcGF5bWVudC1yZWNvcmRzL3BheW1lbnQtcmVjb3Jkcy5wYWdlLnNjc3MiLCJ3ZWJwYWNrOi8vLi8uLi8uLi8uLi9BbGwlMjBQcm9qZWN0cy9NYWxheXNpYV9DbGllbnRBcHBfUmV2YW1wL1N1bkFjY2Vzc19Jb25pYzZfUmV2YW1wL3NyYy9hcHAvcGFnZXMvcGF5bWVudC1yZWNvcmRzL3BheW1lbnQtcmVjb3Jkcy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxpRUFBQTtFQUNBLHNCQUFBO0VBQ0EsNEJBQUE7RUFDQSxZQUFBO0VBQ0EsMkJBQUE7QUNDRjs7QURDQTtFQUNFLGNBQUE7RUFDQSw2QkFBQTtFQUNBLHNCQUFBO0VBQ0EsNEJBQUE7RUFDQSwyQkFBQTtBQ0VGOztBRENBO0VBQ0UsaUNBQUE7RUFDRSxtQkFBQTtFQUNBLHFCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBQ0VKOztBREFBO0VBQ0UsYUFBQTtBQ0dGOztBRERBO0VBQ0UsaUJBQUE7QUNJRjs7QURGQTtFQUNFLG1CQUFBO0FDS0Y7O0FEREE7RUFDRSx1QkFBQTtBQ0lGOztBREZBO0VBQ0UsNEJBQUE7QUNLRjs7QURIQTtFQUNFLHVCQUFBO0FDTUY7O0FESkE7RUFDRSxjQUFBO0FDT0Y7O0FETEE7RUFDRSxrQ0FBQTtBQ1FGOztBRE5BO0VBb0JFLDBCQUFBO0VBQ0EsZ0NBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQ0FBQTtFQUVBLHFCQUFBO0VBQ0EsbUJBQUE7RUFDQSxzQ0FBQTtBQ1hGOztBRGFBO0VBQ0UsMEJBQUE7RUFDQSxnQ0FBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUVBLHFCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxzQkFBQTtFQUNBLHNDQUFBO0FDWEY7O0FEbUJBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtBQ2hCQTs7QURrQkE7RUFDRSxXQUFBO0VBQ0YsaUJBQUE7QUNmQTs7QURpQkE7RUFDRSx1Q0FBQTtBQ2RGOztBRGdCQTtFQUNFLDBCQUFBO0FDYkY7O0FEZUE7RUFDRSx5QkFBQTtBQ1pGOztBRGNBO0VBQ0UseUNBQUE7QUNYRjtBRFlFO0VBQ0ksNkJBQUE7RUFDQSxxQkFBQTtFQUNBLG1CQUFBO0VBQ0EsMEJBQUE7RUFDQSxtQkFBQTtFQUNBLCtDQUFBO0VBQ0EsbUJBQUE7QUNWTjs7QURjQTtFQUNFLGlCQUFBO0FDWEY7O0FEY0E7RUFDRSxtQkFBQTtBQ1hGIiwic291cmNlc0NvbnRlbnQiOlsiLmFwcF9iZzIge1xyXG4gIC0tYmFja2dyb3VuZDogdXJsKC4uLy4uLy4uL2Fzc2V0cy9pbWdzL2FwcF9iZ18yLmpwZykgbm8tcmVwZWF0IGNlbnRlciBjZW50ZXIgLyBjb3ZlcjtcclxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGJvdHRvbTtcclxufVxyXG4uc3ViLWhlYWRlciB7XHJcbiAgY29sb3I6ICNmZmZmZmY7XHJcbiAgcGFkZGluZzogMTBweCAyNXB4ICFpbXBvcnRhbnQ7XHJcbiAgbWFyZ2luOiAwcHggIWltcG9ydGFudDtcclxuICBmb250LXNpemU6IDEuMXJlbSAhaW1wb3J0YW50O1xyXG4gIGZvbnQtZmFtaWx5OiBBZ2VuZGEtUmVndWxhcjtcclxuICAvL2xpbmUtaGVpZ2h0OiAyNHB4OztcclxufVxyXG4udGFic3tcclxuICBib3JkZXItdG9wOiAzcHggc29saWQgY29sb3Igd2hpdGU7XHJcbiAgICAtLXBhZGRpbmctdG9wOiAtNHB4O1xyXG4gICAgLS1wYWRkaW5nLXN0YXJ0OiAtNHB4O1xyXG4gICAgLS1wYWRkaW5nLWVuZDogLTRweDtcclxuICAgIC0tbWluLWhlaWdodDogNDRweDtcclxufVxyXG4ud2hpdGVfY29udGFpbmVyX2JvcmRlcl9yYWRpdXN7XHJcbiAgcGFkZGluZzogMjVweDtcclxufVxyXG4uZXZlbntcclxuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxufVxyXG4ub2Rke1xyXG4gIGJhY2tncm91bmQ6ICNlNWVhZWI7XHJcblxyXG59XHJcblxyXG4uc2Nyb2xsLWNvbnRlbnR7XHJcbiAgcGFkZGluZzogMHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuLmNvbHtcclxuICBwYWRkaW5nOiA3cHggMjBweCAhaW1wb3J0YW50O1xyXG59XHJcbi5ncmlke1xyXG4gIHBhZGRpbmc6IDBweCAhaW1wb3J0YW50O1xyXG59XHJcbi5jb250ZW50e1xyXG4gIGNvbG9yOiAjNGU0ZTRlO1xyXG59XHJcbi5oZWFkZXItbWQ6OmFmdGVyLCAudGFicy1tZFt0YWJzUGxhY2VtZW50PVwidG9wXCJdID4gLnRhYmJhcjo6YWZ0ZXIsIC5mb290ZXItbWQ6OmJlZm9yZSwgLnRhYnMtbWRbdGFic1BsYWNlbWVudD1cImJvdHRvbVwiXSA+IC50YWJiYXI6OmJlZm9yZSB7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdW5zZXQgIWltcG9ydGFudDtcclxufVxyXG4uYnRuX2NlbnRlcjF7XHJcbiAgLy8gdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XHJcbiAgLy8gLS1iYWNrZ3JvdW5kOiAjMDAyZDNkICFpbXBvcnRhbnQ7XHJcbiAgLy8gY29sb3I6IHdoaXRlO1xyXG4gIC8vIGZvbnQtc2l6ZTogMS4wcmVtO1xyXG4gIC8vIGJvcmRlci1yYWRpdXM6MTBweDtcclxuICAvLyBtaW4taGVpZ2h0OiAzMHB4O1xyXG4gIC8vIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XHJcbiAgLy8gZm9udC1mYW1pbHk6IEFnZW5kYS1TZW1pQm9sZCAhaW1wb3J0YW50O1xyXG4gIC8vIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xyXG4gIC8vIC0tYmFja2dyb3VuZDogIzAwMmQzZCAhaW1wb3J0YW50O1xyXG4gIC8vIGNvbG9yOiB3aGl0ZTtcclxuICAvLyAvL21hcmdpbi10b3A6IDE1cHg7XHJcbiAgLy8gLS1ib3JkZXItcmFkaXVzOiAxMHB4ICFpbXBvcnRhbnQ7XHJcbiAgLy8gbWluLXdpZHRoOiAzMTBweDtcclxuICAvLyAvL21hcmdpbi1sZWZ0OiAtMzFweDtcclxuICAvLyAvL2ZvbnQtc2l6ZTogMS43cmVtO1xyXG4gIC8vIG1pbi1oZWlnaHQ6IDQwcHg7XHJcbiAgLy8gd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcclxuICAvL2ZvbnQtZmFtaWx5OiBBZ2VuZGEtUmVndWxhciAhaW1wb3J0YW50O1xyXG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xyXG4gIC0tYmFja2dyb3VuZDogIzAwMmQzZCAhaW1wb3J0YW50O1xyXG4gIGNvbG9yOndoaXRlO1xyXG4gIGZvbnQtc2l6ZTogMS4wcmVtO1xyXG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgbWluLWhlaWdodDogNDVweDtcclxuICAtLWJvcmRlci1yYWRpdXM6IDEwcHggIWltcG9ydGFudDtcclxuICAvLyB3aWR0aDogMzUwcHg7XHJcbiAgd2lkdGg6IDk1JSAhaW1wb3J0YW50O1xyXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgZm9udC1mYW1pbHk6IEFnZW5kYS1SZWd1bGFyICFpbXBvcnRhbnQ7XHJcbn1cclxuLmJ0bl9jZW50ZXIge1xyXG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xyXG4gIC0tYmFja2dyb3VuZDogIzAwMmQzZCAhaW1wb3J0YW50O1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBtYXJnaW4tdG9wOiAxNXB4O1xyXG4gIC8vZm9udC1zaXplOiAxLjdyZW07XHJcbiAgLS1ib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gIG1pbi1oZWlnaHQ6IDQ1cHg7XHJcbiAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcclxuICBmb250LWZhbWlseTogQWdlbmRhLVJlZ3VsYXIgIWltcG9ydGFudDtcclxufVxyXG4vLyBpb24tcm93e1xyXG4vLyAgIGRpc3BsYXk6IGZsZXggIWltcG9ydGFudDtcclxuLy8gICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlciAhaW1wb3J0YW50O1xyXG4vLyAgIGFsaWduLWl0ZW1zOiBjZW50ZXIgIWltcG9ydGFudDtcclxuLy8gICBoZWlnaHQ6IDEwMCU7XHJcbi8vIH1cclxuLnNlY3VyZXRvb2x0aXB7XHJcbnBvc2l0aW9uOiBhYnNvbHV0ZTtcclxubWFyZ2luLXRvcDogLTIycHg7XHJcbm1hcmdpbi1sZWZ0OiAzNSU7XHJcbmZvbnQtc2l6ZTogMTVweDtcclxufVxyXG4uc3RhdHVzRGl2e1xyXG4gIHdpZHRoOiAxMjAlO1xyXG5tYXJnaW4tbGVmdDogLTEyJTtcclxufVxyXG4uaGVhZGluZyB7XHJcbiAgZm9udC1mYW1pbHk6IEFnZW5kYS1TZW1pQm9sZCAhaW1wb3J0YW50O1xyXG59XHJcbi5mb250X3NpemVfMTcge1xyXG4gIGZvbnQtc2l6ZTogMS4wcmVtICFpbXBvcnRhbnQ7XHJcbn1cclxuLnRleHRfY29sb3JfYmFzZSB7XHJcbiAgY29sb3I6ICMwMDJkM2QgIWltcG9ydGFudDtcclxufVxyXG4uZG93bmxvYWRfbW9kYWwge1xyXG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC43KSAhaW1wb3J0YW50O1xyXG4gIC5jb250ZW50IHtcclxuICAgICAgcG9zaXRpb246IGFic29sdXRlICFpbXBvcnRhbnQ7XHJcbiAgICAgIHdpZHRoOiA5MCUgIWltcG9ydGFudDtcclxuICAgICAgdG9wOiAyMCUgIWltcG9ydGFudDtcclxuICAgICAgbWF4LWhlaWdodDogNzAlICFpbXBvcnRhbnQ7XHJcbiAgICAgIGxlZnQ6IDUlICFpbXBvcnRhbnQ7XHJcbiAgICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC43KSAhaW1wb3J0YW50O1xyXG4gICAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xyXG4gIH1cclxuXHJcbn1cclxuLmV2ZW4ge1xyXG4gIGJhY2tncm91bmQ6IHdoaXRlO1xyXG59XHJcblxyXG4ub2RkIHtcclxuICBiYWNrZ3JvdW5kOiAjZTVlYWViO1xyXG59XHJcbiIsIi5hcHBfYmcyIHtcbiAgLS1iYWNrZ3JvdW5kOiB1cmwoLi4vLi4vLi4vYXNzZXRzL2ltZ3MvYXBwX2JnXzIuanBnKSBuby1yZXBlYXQgY2VudGVyIGNlbnRlciAvIGNvdmVyO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGJvdHRvbTtcbn1cblxuLnN1Yi1oZWFkZXIge1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgcGFkZGluZzogMTBweCAyNXB4ICFpbXBvcnRhbnQ7XG4gIG1hcmdpbjogMHB4ICFpbXBvcnRhbnQ7XG4gIGZvbnQtc2l6ZTogMS4xcmVtICFpbXBvcnRhbnQ7XG4gIGZvbnQtZmFtaWx5OiBBZ2VuZGEtUmVndWxhcjtcbn1cblxuLnRhYnMge1xuICBib3JkZXItdG9wOiAzcHggc29saWQgY29sb3Igd2hpdGU7XG4gIC0tcGFkZGluZy10b3A6IC00cHg7XG4gIC0tcGFkZGluZy1zdGFydDogLTRweDtcbiAgLS1wYWRkaW5nLWVuZDogLTRweDtcbiAgLS1taW4taGVpZ2h0OiA0NHB4O1xufVxuXG4ud2hpdGVfY29udGFpbmVyX2JvcmRlcl9yYWRpdXMge1xuICBwYWRkaW5nOiAyNXB4O1xufVxuXG4uZXZlbiB7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xufVxuXG4ub2RkIHtcbiAgYmFja2dyb3VuZDogI2U1ZWFlYjtcbn1cblxuLnNjcm9sbC1jb250ZW50IHtcbiAgcGFkZGluZzogMHB4ICFpbXBvcnRhbnQ7XG59XG5cbi5jb2wge1xuICBwYWRkaW5nOiA3cHggMjBweCAhaW1wb3J0YW50O1xufVxuXG4uZ3JpZCB7XG4gIHBhZGRpbmc6IDBweCAhaW1wb3J0YW50O1xufVxuXG4uY29udGVudCB7XG4gIGNvbG9yOiAjNGU0ZTRlO1xufVxuXG4uaGVhZGVyLW1kOjphZnRlciwgLnRhYnMtbWRbdGFic1BsYWNlbWVudD10b3BdID4gLnRhYmJhcjo6YWZ0ZXIsIC5mb290ZXItbWQ6OmJlZm9yZSwgLnRhYnMtbWRbdGFic1BsYWNlbWVudD1ib3R0b21dID4gLnRhYmJhcjo6YmVmb3JlIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdW5zZXQgIWltcG9ydGFudDtcbn1cblxuLmJ0bl9jZW50ZXIxIHtcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG4gIC0tYmFja2dyb3VuZDogIzAwMmQzZCAhaW1wb3J0YW50O1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtc2l6ZTogMXJlbTtcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgbWluLWhlaWdodDogNDVweDtcbiAgLS1ib3JkZXItcmFkaXVzOiAxMHB4ICFpbXBvcnRhbnQ7XG4gIHdpZHRoOiA5NSUgIWltcG9ydGFudDtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgZm9udC1mYW1pbHk6IEFnZW5kYS1SZWd1bGFyICFpbXBvcnRhbnQ7XG59XG5cbi5idG5fY2VudGVyIHtcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG4gIC0tYmFja2dyb3VuZDogIzAwMmQzZCAhaW1wb3J0YW50O1xuICBjb2xvcjogd2hpdGU7XG4gIG1hcmdpbi10b3A6IDE1cHg7XG4gIC0tYm9yZGVyLXJhZGl1czogMTBweDtcbiAgbWluLWhlaWdodDogNDVweDtcbiAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcbiAgZm9udC1mYW1pbHk6IEFnZW5kYS1SZWd1bGFyICFpbXBvcnRhbnQ7XG59XG5cbi5zZWN1cmV0b29sdGlwIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBtYXJnaW4tdG9wOiAtMjJweDtcbiAgbWFyZ2luLWxlZnQ6IDM1JTtcbiAgZm9udC1zaXplOiAxNXB4O1xufVxuXG4uc3RhdHVzRGl2IHtcbiAgd2lkdGg6IDEyMCU7XG4gIG1hcmdpbi1sZWZ0OiAtMTIlO1xufVxuXG4uaGVhZGluZyB7XG4gIGZvbnQtZmFtaWx5OiBBZ2VuZGEtU2VtaUJvbGQgIWltcG9ydGFudDtcbn1cblxuLmZvbnRfc2l6ZV8xNyB7XG4gIGZvbnQtc2l6ZTogMXJlbSAhaW1wb3J0YW50O1xufVxuXG4udGV4dF9jb2xvcl9iYXNlIHtcbiAgY29sb3I6ICMwMDJkM2QgIWltcG9ydGFudDtcbn1cblxuLmRvd25sb2FkX21vZGFsIHtcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjcpICFpbXBvcnRhbnQ7XG59XG4uZG93bmxvYWRfbW9kYWwgLmNvbnRlbnQge1xuICBwb3NpdGlvbjogYWJzb2x1dGUgIWltcG9ydGFudDtcbiAgd2lkdGg6IDkwJSAhaW1wb3J0YW50O1xuICB0b3A6IDIwJSAhaW1wb3J0YW50O1xuICBtYXgtaGVpZ2h0OiA3MCUgIWltcG9ydGFudDtcbiAgbGVmdDogNSUgIWltcG9ydGFudDtcbiAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjcpICFpbXBvcnRhbnQ7XG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XG59XG5cbi5ldmVuIHtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG59XG5cbi5vZGQge1xuICBiYWNrZ3JvdW5kOiAjZTVlYWViO1xufSJdLCJzb3VyY2VSb290IjoiIn0= */"]
});

/***/ })

}]);
//# sourceMappingURL=src_app_pages_payment-records_payment-records_module_ts.js.map