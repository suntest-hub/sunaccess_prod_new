"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_payment-acknowledgement_payment-acknowledgement_module_ts"],{

/***/ 87759:
/*!*****************************************************************************************!*\
  !*** ./src/app/pages/payment-acknowledgement/payment-acknowledgement-routing.module.ts ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PaymentAcknowledgementPageRoutingModule": () => (/* binding */ PaymentAcknowledgementPageRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _payment_acknowledgement_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./payment-acknowledgement.page */ 93556);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);




const routes = [{
  path: '',
  component: _payment_acknowledgement_page__WEBPACK_IMPORTED_MODULE_0__.PaymentAcknowledgementPage
}];
class PaymentAcknowledgementPageRoutingModule {}
PaymentAcknowledgementPageRoutingModule.ɵfac = function PaymentAcknowledgementPageRoutingModule_Factory(t) {
  return new (t || PaymentAcknowledgementPageRoutingModule)();
};
PaymentAcknowledgementPageRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
  type: PaymentAcknowledgementPageRoutingModule
});
PaymentAcknowledgementPageRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](PaymentAcknowledgementPageRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
})();

/***/ }),

/***/ 77746:
/*!*********************************************************************************!*\
  !*** ./src/app/pages/payment-acknowledgement/payment-acknowledgement.module.ts ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PaymentAcknowledgementPageModule": () => (/* binding */ PaymentAcknowledgementPageModule)
/* harmony export */ });
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ 38699);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _payment_acknowledgement_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./payment-acknowledgement-routing.module */ 87759);
/* harmony import */ var _payment_acknowledgement_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./payment-acknowledgement.page */ 93556);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);







class PaymentAcknowledgementPageModule {}
PaymentAcknowledgementPageModule.ɵfac = function PaymentAcknowledgementPageModule_Factory(t) {
  return new (t || PaymentAcknowledgementPageModule)();
};
PaymentAcknowledgementPageModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
  type: PaymentAcknowledgementPageModule
});
PaymentAcknowledgementPageModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__.TranslateModule, _payment_acknowledgement_routing_module__WEBPACK_IMPORTED_MODULE_0__.PaymentAcknowledgementPageRoutingModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](PaymentAcknowledgementPageModule, {
    declarations: [_payment_acknowledgement_page__WEBPACK_IMPORTED_MODULE_1__.PaymentAcknowledgementPage],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__.TranslateModule, _payment_acknowledgement_routing_module__WEBPACK_IMPORTED_MODULE_0__.PaymentAcknowledgementPageRoutingModule]
  });
})();

/***/ }),

/***/ 93556:
/*!*******************************************************************************!*\
  !*** ./src/app/pages/payment-acknowledgement/payment-acknowledgement.page.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PaymentAcknowledgementPage": () => (/* binding */ PaymentAcknowledgementPage)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var src_app_services_translate_config_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/translate-config.service */ 45340);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ 38699);
/* harmony import */ var src_providers_logger_service_logger_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/providers/logger-service/logger-service */ 9999);
/* harmony import */ var src_providers_utils_utils_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/providers/utils/utils.service */ 30423);
/* harmony import */ var src_providers_utils_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/providers/utils/config */ 43485);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 93819);









function PaymentAcknowledgementPage_section_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "section", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "ion-spinner", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
function PaymentAcknowledgementPage_div_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 13)(1, "ion-label", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](4, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "ion-label", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](7, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "ion-label", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](10, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "div")(12, "ion-list")(13, "ion-row")(14, "div", 17)(15, "ion-label", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](17, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](18, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](20, "ion-row")(21, "div", 17)(22, "ion-label", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](23);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](24, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](25, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](26);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](27, "ion-row")(28, "div", 17)(29, "ion-label", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](30);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](31, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](32, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](33);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](34, "ion-row")(35, "div", 17)(36, "ion-label", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](37);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](38, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](39, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](40);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](41, "ion-row")(42, "div", 17)(43, "ion-label", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](44);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](45, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](46, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](47);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](48, "ion-row")(49, "div", 17)(50, "ion-label", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](51);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](52, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](53, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](54);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](55, "ion-row")(56, "div", 17)(57, "ion-label", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](58);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](59, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](60, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](61);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](62, "ion-row")(63, "div", 17)(64, "ion-label", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](65);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](66, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](67, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](68);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](69, "ion-row")(70, "div", 17)(71, "ion-label", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](72);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](73, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](74, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](75);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](76, "section")(77, "ion-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](78);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](79, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](80, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](81, "ion-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](82);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](83, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](84, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](85, "ion-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](86);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](87, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](88, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](89, "ion-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](90);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](91, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate2"]("", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](3, 26, "payment_acknowledgement.dear"), " ", ctx_r1.name, ",");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](7, 28, "payment_acknowledgement.refer"));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](10, 30, "payment_acknowledgement.transaction_acknowledgement"));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](17, 32, "payment_acknowledgement.policyno"));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r1.policyno);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](24, 34, "payment_acknowledgement.transaction_id"));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r1.transactionId);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](31, 36, "payment_acknowledgement.premium_amount"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r1.premiumAmount);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](38, 38, "payment_acknowledgement.issuing_bank"));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r1.issuingBank);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](45, 40, "payment_acknowledgement.transaction_message"));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r1.transactionMessage);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](52, 42, "payment_acknowledgement.payment_id"));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r1.paymentId);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](59, 44, "payment_acknowledgement.transaction_status"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r1.transactionStatus);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](66, 46, "payment_acknowledgement.currency_code"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r1.currencyCode);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](73, 48, "payment_acknowledgement.auth_code"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r1.authCode);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](79, 50, "payment_acknowledgement.note1"));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](83, 52, "payment_acknowledgement.kindly"));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](87, 54, "payment_acknowledgement.note2"));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](91, 56, "payment_acknowledgement.note3"));
  }
}
class PaymentAcknowledgementPage {
  constructor(translateConfigService, translate, logger, utils, config, router) {
    this.translateConfigService = translateConfigService;
    this.translate = translate;
    this.logger = logger;
    this.utils = utils;
    this.config = config;
    this.router = router;
    this.isShowingLoader = false;
    this.canTryAgain = false;
    this.selectedLanguage = this.translateConfigService.getDefaultLanguage();
    this.translateConfigService.setLanguage('en');
    this.name = this.utils.getName();
    this.paymentSuccessData = history.state.successdata;
    this.policyno = history.state.policyNo;
    this.transactionId = this.paymentSuccessData.txnID;
    this.premiumAmount = this.paymentSuccessData.premiumAmount;
    this.issuingBank = this.paymentSuccessData.issuingBank;
    this.transactionMessage = this.paymentSuccessData.txnMessage;
    this.paymentId = this.paymentSuccessData.paymentID;
    this.transactionStatus = this.paymentSuccessData.txnStatus;
    if (this.transactionStatus == '0') {
      // alert("61");
      this.transactionStatus = "SUCCESS";
    } else {
      // alert("66");
      this.transactionStatus = "FAILURE";
    }
    this.currencyCode = this.paymentSuccessData.currencyCode;
    this.authCode = this.paymentSuccessData.authCode;
    this.utils.analytics("paymentAcknowledgement");
  }
  ionViewDidEnter() {
    this.config.currentPage.pageName = "PaymentAcknowledgementPage";
  }
  // This method is used to navigate to planlisting page after success or failure by clicking back button in header
  navPolicyListing() {
    this.router.navigate(['plan-listing'], {
      state: {
        animate: true,
        direction: 'forward'
      }
    });
    //this.navCtrl.setRoot(PlanListingPage, { animate: true, direction: 'forward' });
  }
}

PaymentAcknowledgementPage.ɵfac = function PaymentAcknowledgementPage_Factory(t) {
  return new (t || PaymentAcknowledgementPage)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_services_translate_config_service__WEBPACK_IMPORTED_MODULE_0__.TranslateConfigService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__.TranslateService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_providers_logger_service_logger_service__WEBPACK_IMPORTED_MODULE_1__.LoggerServiceProvider), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_providers_utils_utils_service__WEBPACK_IMPORTED_MODULE_2__.UtilService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_providers_utils_config__WEBPACK_IMPORTED_MODULE_3__.ConfigProvider), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.Router));
};
PaymentAcknowledgementPage.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
  type: PaymentAcknowledgementPage,
  selectors: [["app-payment-acknowledgement"]],
  decls: 14,
  vars: 5,
  consts: [["mode", "ios"], ["color", "primary", 2, "border-bottom", "3px solid white"], ["slot", "start"], ["text", "", "icon", "chevron-back-outline", 2, "padding-left", "15px", "font-size", "0.7rem", 3, "click"], [1, "bold-font"], ["color", "primary", 1, "tabs"], [2, "background", "#002d3d", "margin-bottom", "5px"], [1, "sub-header"], ["no-bounce", "", 1, "app_bg2", "ion-padding"], ["class", "spinnersection ion-text-center", 4, "ngIf"], ["class", "white_container_border_radius text_color_base padding_15", 4, "ngIf"], [1, "spinnersection", "ion-text-center"], ["name", "lines-sharp-small", 2, "height", "98%"], [1, "white_container_border_radius", "text_color_base", "padding_15"], [1, "heading"], [1, "heading", "padding_bottom"], [1, "sub-header-black"], [1, "margin_top_bottom_auto", "div-padding"], ["stacked", "", 1, "lbl-header"]],
  template: function PaymentAcknowledgementPage_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "ion-header", 0)(1, "ion-toolbar", 1)(2, "ion-buttons", 2)(3, "ion-back-button", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function PaymentAcknowledgementPage_Template_ion_back_button_click_3_listener() {
        return ctx.navPolicyListing();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "ion-title", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5, "policy no");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "ion-toolbar", 5)(7, "ion-row", 6)(8, "ion-label", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](9);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](10, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "ion-content", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](12, PaymentAcknowledgementPage_section_12_Template, 2, 0, "section", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](13, PaymentAcknowledgementPage_div_13_Template, 92, 58, "div", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](9);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](10, 3, "payment_records.title"));
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.isShowingLoader);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx.canTryAgain && !ctx.isShowingLoader);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonBackButton, _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonButtons, _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonContent, _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonHeader, _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonLabel, _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonList, _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonRow, _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonSpinner, _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonTitle, _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonToolbar, _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonBackButtonDelegate, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__.TranslatePipe],
  styles: [".app_bg2[_ngcontent-%COMP%] {\n  --background: url('app_bg_2.jpg') no-repeat center center / cover;\n  background-size: cover;\n  background-repeat: no-repeat;\n  height: 100%;\n  background-position: bottom;\n}\n\n.sub-header[_ngcontent-%COMP%] {\n  color: #ffffff;\n  padding: 10px 25px !important;\n  margin: 0px !important;\n  font-size: 1.1rem !important;\n  font-family: Agenda-Regular;\n}\n\n.tabs[_ngcontent-%COMP%] {\n  border-top: 3px solid color white;\n  --padding-top: -4px;\n  --padding-start: -4px;\n  --padding-end: -4px;\n  --min-height: 44px;\n}\n\n.white_container_border_radius[_ngcontent-%COMP%] {\n  background-color: rgba(255, 255, 255, 0.7) !important;\n  border-radius: 15px !important;\n}\n\n.spinnersection[_ngcontent-%COMP%] {\n  display: block;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  font-size: 1.3rem;\n  height: 98%;\n}\n\n.padding_015[_ngcontent-%COMP%] {\n  padding: 0px 15px;\n}\n\n.list-md[_ngcontent-%COMP%] {\n  background: none;\n}\n\n.item[_ngcontent-%COMP%] {\n  padding-left: 0px;\n  background: transparent;\n}\n\n.item[_ngcontent-%COMP%]   .item-input.ng-valid.item-input-has-value[_ngcontent-%COMP%]:not(.input-has-focus):not(.item-input-has-focus)   .item-inner[_ngcontent-%COMP%], .item.item-input.ng-valid.input-has-value[_ngcontent-%COMP%]:not(.input-has-focus):not(.item-input-has-focus)   .item-inner[_ngcontent-%COMP%] {\n  border-bottom-color: none !important;\n  box-shadow: none !important;\n}\n\n.item-inner[_ngcontent-%COMP%] {\n  padding-right: 0px !important;\n  border-bottom: none !important;\n}\n\n.input[_ngcontent-%COMP%] {\n  border: 1px solid #eee;\n  padding: 3px 15px;\n  background: white;\n  font-size: 1.4rem;\n  color: --ion-color-secondary;\n}\n\n.label[_ngcontent-%COMP%] {\n  font-size: 1.5rem !important;\n  font-weight: 400;\n  margin: 0px !important;\n  white-space: unset !important;\n}\n\n.heading[_ngcontent-%COMP%] {\n  font-family: Agenda-Regular !important;\n  color: --ion-color-primary !important;\n  font-size: 1.4rem;\n}\n\n.sub-header-black[_ngcontent-%COMP%] {\n  background: var(--ion-color-secondary);\n  padding: 10px 30px;\n  margin: 0px;\n  font-size: 1.4rem !important;\n  font-family: Agenda-Regular;\n  line-height: 24px;\n  color: white;\n}\n\n.header[_ngcontent-%COMP%] {\n  font-family: Agenda-Semibold;\n  width: 100%;\n}\n\nion-list[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%] {\n  margin: 0px;\n  font-size: 1.8rem;\n  \n  font-weight: 400;\n  font-family: agenda-semibold;\n  color: #002d3d;\n  \n  width: 100%;\n  margin-bottom: 5px;\n  line-height: 1.42857143;\n}\n\nion-list[_ngcontent-%COMP%]   ion-row[_ngcontent-%COMP%] {\n  padding: 0;\n  border-bottom: 1px solid #002d3d;\n  margin-top: 10px;\n}\n\nion-list[_ngcontent-%COMP%]   ion-row[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n}\n\n.scroll-content[_ngcontent-%COMP%] {\n  padding: 15px !important;\n}\n\n.lbl-header[_ngcontent-%COMP%] {\n  padding: 0;\n  font-family: agenda-semibold;\n  color: --ion-color-secondary;\n  font-size: 14px;\n  line-height: 24px;\n  margin: 0;\n  font-weight: 400;\n}\n\n.lbl-content[_ngcontent-%COMP%] {\n  padding: 0;\n  font-family: Agenda-Regular;\n  color: --ion-color-secondary;\n  font-size: 14px;\n  line-height: 24px;\n  margin: 0;\n  font-weight: 400;\n}\n\ndiv[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin-bottom: 8px;\n  margin-top: 10px;\n  line-height: 1.42857143;\n}\n\nsection[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%] {\n  font-size: 0.95rem !important;\n  margin: 0px;\n  \n  font-family: agenda-semibold;\n  color: #002d3d;\n  \n  width: 100%;\n  margin-bottom: 5px;\n  line-height: 1.42857143;\n}\n\n.padding_bottom[_ngcontent-%COMP%] {\n  padding-bottom: 10px !important;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcGFnZXMvcGF5bWVudC1hY2tub3dsZWRnZW1lbnQvcGF5bWVudC1hY2tub3dsZWRnZW1lbnQucGFnZS5zY3NzIiwid2VicGFjazovLy4vLi4vLi4vLi4vQWxsJTIwUHJvamVjdHMvTWFsYXlzaWFfQ2xpZW50QXBwX1JldmFtcC9TdW5BY2Nlc3NfSW9uaWM2X1JldmFtcC9zcmMvYXBwL3BhZ2VzL3BheW1lbnQtYWNrbm93bGVkZ2VtZW50L3BheW1lbnQtYWNrbm93bGVkZ2VtZW50LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGlFQUFBO0VBQ0Esc0JBQUE7RUFDQSw0QkFBQTtFQUNBLFlBQUE7RUFDQSwyQkFBQTtBQ0NGOztBRENBO0VBQ0UsY0FBQTtFQUNBLDZCQUFBO0VBQ0Esc0JBQUE7RUFDQSw0QkFBQTtFQUNBLDJCQUFBO0FDRUY7O0FEQ0E7RUFDRSxpQ0FBQTtFQUNFLG1CQUFBO0VBQ0EscUJBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FDRUo7O0FEQUE7RUFDRSxxREFBQTtFQUNBLDhCQUFBO0FDR0Y7O0FEREE7RUFDRSxjQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxXQUFBO0FDSUY7O0FERkE7RUFDRSxpQkFBQTtBQ0tGOztBREhBO0VBQ0ksZ0JBQUE7QUNNSjs7QURDQTtFQUNFLGlCQUFBO0VBQ0EsdUJBQUE7QUNFRjs7QURDQTtFQUNFLG9DQUFBO0VBRUEsMkJBQUE7QUNFRjs7QURFQTtFQUNDLDZCQUFBO0VBQ0EsOEJBQUE7QUNDRDs7QURFQTtFQUNFLHNCQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0EsNEJBQUE7QUNDRjs7QURDQTtFQUNFLDRCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxzQkFBQTtFQUNBLDZCQUFBO0FDRUY7O0FEQ0E7RUFDRSxzQ0FBQTtFQUNBLHFDQUFBO0VBQ0EsaUJBQUE7QUNFRjs7QURDQTtFQUNBLHNDQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsNEJBQUE7RUFDQSwyQkFBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtBQ0VBOztBREFBO0VBQ0UsNEJBQUE7RUFDQSxXQUFBO0FDR0Y7O0FEQUE7RUFDRSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSx1QkFBQTtFQUNBLGdCQUFBO0VBQ0EsNEJBQUE7RUFDQSxjQUFBO0VBQ0EsdUJBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSx1QkFBQTtBQ0dGOztBRENBO0VBQ0csVUFBQTtFQUNBLGdDQUFBO0VBQ0EsZ0JBQUE7QUNFSDs7QURDQTtFQUNHLG1CQUFBO0FDRUg7O0FEQUE7RUFDRSx3QkFBQTtBQ0dGOztBREFBO0VBQ0MsVUFBQTtFQUNBLDRCQUFBO0VBQ0EsNEJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxTQUFBO0VBQ0EsZ0JBQUE7QUNHRDs7QURBQTtFQUNFLFVBQUE7RUFDQSwyQkFBQTtFQUNBLDRCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsU0FBQTtFQUNBLGdCQUFBO0FDR0Y7O0FEQUE7RUFDQyxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsdUJBQUE7QUNHRDs7QURBQTtFQUNBLDZCQUFBO0VBQ0UsV0FBQTtFQUVBLHVCQUFBO0VBRUEsNEJBQUE7RUFDQSxjQUFBO0VBQ0EsdUJBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSx1QkFBQTtBQ0NGOztBREVBO0VBQ0EsK0JBQUE7QUNDQSIsInNvdXJjZXNDb250ZW50IjpbIi5hcHBfYmcyIHtcclxuICAtLWJhY2tncm91bmQ6IHVybCguLi8uLi8uLi9hc3NldHMvaW1ncy9hcHBfYmdfMi5qcGcpIG5vLXJlcGVhdCBjZW50ZXIgY2VudGVyIC8gY292ZXI7XHJcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBib3R0b207XHJcbn1cclxuLnN1Yi1oZWFkZXIge1xyXG4gIGNvbG9yOiAjZmZmZmZmO1xyXG4gIHBhZGRpbmc6IDEwcHggMjVweCAhaW1wb3J0YW50O1xyXG4gIG1hcmdpbjogMHB4ICFpbXBvcnRhbnQ7XHJcbiAgZm9udC1zaXplOiAxLjFyZW0gIWltcG9ydGFudDtcclxuICBmb250LWZhbWlseTogQWdlbmRhLVJlZ3VsYXI7XHJcbiAgLy9saW5lLWhlaWdodDogMjRweDs7XHJcbn1cclxuLnRhYnN7XHJcbiAgYm9yZGVyLXRvcDogM3B4IHNvbGlkIGNvbG9yIHdoaXRlO1xyXG4gICAgLS1wYWRkaW5nLXRvcDogLTRweDtcclxuICAgIC0tcGFkZGluZy1zdGFydDogLTRweDtcclxuICAgIC0tcGFkZGluZy1lbmQ6IC00cHg7XHJcbiAgICAtLW1pbi1oZWlnaHQ6IDQ0cHg7XHJcbn1cclxuLndoaXRlX2NvbnRhaW5lcl9ib3JkZXJfcmFkaXVzIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOnJnYmEoMjU1LCAyNTUsIDI1NSwgMC43KSAhaW1wb3J0YW50O1xyXG4gIGJvcmRlci1yYWRpdXM6IDE1cHggIWltcG9ydGFudDtcclxufVxyXG4uc3Bpbm5lcnNlY3Rpb24ge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBmb250LXNpemU6IDEuM3JlbTtcclxuICBoZWlnaHQ6IDk4JTtcclxufVxyXG4ucGFkZGluZ18wMTUge1xyXG4gIHBhZGRpbmc6IDBweCAxNXB4O1xyXG59XHJcbi5saXN0LW1kIHtcclxuICAgIGJhY2tncm91bmQ6IG5vbmU7XHJcbn1cclxuLy8gLmhlYWRpbmd7XHJcbi8vICAgZm9udC1mYW1pbHk6IEFnZW5kYS1TZW1pQm9sZCAhaW1wb3J0YW50O1xyXG4vLyAgIGNvbG9yOiAjMDAyZDNkICAhaW1wb3J0YW50O1xyXG4vLyAgIGZvbnQtc2l6ZTogMS41cmVtICFpbXBvcnRhbnQ7XHJcbi8vIH1cclxuLml0ZW17XHJcbiAgcGFkZGluZy1sZWZ0OiAwcHg7XHJcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbn1cclxuXHJcbi5pdGVtIC5pdGVtLWlucHV0Lm5nLXZhbGlkLml0ZW0taW5wdXQtaGFzLXZhbHVlOm5vdCguaW5wdXQtaGFzLWZvY3VzKTpub3QoLml0ZW0taW5wdXQtaGFzLWZvY3VzKSAuaXRlbS1pbm5lciwgLml0ZW0uaXRlbS1pbnB1dC5uZy12YWxpZC5pbnB1dC1oYXMtdmFsdWU6bm90KC5pbnB1dC1oYXMtZm9jdXMpOm5vdCguaXRlbS1pbnB1dC1oYXMtZm9jdXMpIC5pdGVtLWlubmVye1xyXG4gIGJvcmRlci1ib3R0b20tY29sb3I6IG5vbmUgIWltcG9ydGFudDtcclxuICAtd2Via2l0LWJveC1zaGFkb3cgOiBub25lICFpbXBvcnRhbnQ7XHJcbiAgYm94LXNoYWRvdyA6IG5vbmUgIWltcG9ydGFudDtcclxuXHJcbn1cclxuXHJcbi5pdGVtLWlubmVye1xyXG4gcGFkZGluZy1yaWdodDogMHB4ICFpbXBvcnRhbnQ7XHJcbiBib3JkZXItYm90dG9tOiBub25lICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5pbnB1dHtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjZWVlO1xyXG4gIHBhZGRpbmc6IDNweCAxNXB4O1xyXG4gIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gIGZvbnQtc2l6ZTogMS40cmVtO1xyXG4gIGNvbG9yOiAtLWlvbi1jb2xvci1zZWNvbmRhcnk7XHJcbn1cclxuLmxhYmVse1xyXG4gIGZvbnQtc2l6ZTogMS41cmVtICFpbXBvcnRhbnQ7XHJcbiAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICBtYXJnaW46IDBweCAhaW1wb3J0YW50O1xyXG4gIHdoaXRlLXNwYWNlOiB1bnNldCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uaGVhZGluZ3tcclxuICBmb250LWZhbWlseTogQWdlbmRhLVJlZ3VsYXIgIWltcG9ydGFudDtcclxuICBjb2xvcjogLS1pb24tY29sb3ItcHJpbWFyeSAhaW1wb3J0YW50O1xyXG4gIGZvbnQtc2l6ZToxLjRyZW07XHJcbn1cclxuXHJcbi5zdWItaGVhZGVyLWJsYWNre1xyXG5iYWNrZ3JvdW5kOnZhcigtLWlvbi1jb2xvci1zZWNvbmRhcnkpO1xyXG5wYWRkaW5nOjEwcHggMzBweDtcclxubWFyZ2luOjBweDtcclxuZm9udC1zaXplOiAxLjRyZW0gIWltcG9ydGFudDtcclxuZm9udC1mYW1pbHk6IEFnZW5kYS1SZWd1bGFyO1xyXG5saW5lLWhlaWdodDogMjRweDtcclxuY29sb3I6IHdoaXRlO1xyXG59XHJcbi5oZWFkZXJ7XHJcbiAgZm9udC1mYW1pbHk6IEFnZW5kYS1TZW1pYm9sZDtcclxuICB3aWR0aDogMTAwJVxyXG59XHJcblxyXG5pb24tbGlzdCAubGFiZWx7XHJcbiAgbWFyZ2luOiAwcHg7XHJcbiAgZm9udC1zaXplOiAxLjhyZW07XHJcbiAgLyogbGluZS1oZWlnaHQ6IDI0cHg7ICovXHJcbiAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICBmb250LWZhbWlseTogYWdlbmRhLXNlbWlib2xkO1xyXG4gIGNvbG9yOiAjMDAyZDNkO1xyXG4gIC8qIHBhZGRpbmc6IDEwcHggMHB4OyAqL1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIG1hcmdpbi1ib3R0b206IDVweDtcclxuICBsaW5lLWhlaWdodDogMS40Mjg1NzE0MztcclxuXHJcbn1cclxuXHJcbmlvbi1saXN0IGlvbi1yb3d7XHJcbiAgIHBhZGRpbmc6IDA7XHJcbiAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjMDAyZDNkO1xyXG4gICBtYXJnaW4tdG9wOiAxMHB4O1xyXG59XHJcblxyXG5pb24tbGlzdCBpb24tcm93Omxhc3QtY2hpbGR7XHJcbiAgIGJvcmRlci1ib3R0b206IG5vbmU7XHJcbn1cclxuLnNjcm9sbC1jb250ZW50IHtcclxuICBwYWRkaW5nOiAxNXB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5sYmwtaGVhZGVye1xyXG4gcGFkZGluZzogMDtcclxuIGZvbnQtZmFtaWx5OiBhZ2VuZGEtc2VtaWJvbGQ7XHJcbiBjb2xvcjogLS1pb24tY29sb3Itc2Vjb25kYXJ5O1xyXG4gZm9udC1zaXplOiAxNHB4O1xyXG4gbGluZS1oZWlnaHQ6IDI0cHg7XHJcbiBtYXJnaW46IDA7XHJcbiBmb250LXdlaWdodDogNDAwO1xyXG59XHJcblxyXG4ubGJsLWNvbnRlbnR7XHJcbiAgcGFkZGluZzogMDtcclxuICBmb250LWZhbWlseTogQWdlbmRhLVJlZ3VsYXI7XHJcbiAgY29sb3I6IC0taW9uLWNvbG9yLXNlY29uZGFyeTtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbiAgbGluZS1oZWlnaHQ6IDI0cHg7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbn1cclxuXHJcbmRpdiBwe1xyXG4gbWFyZ2luLWJvdHRvbTogOHB4O1xyXG4gbWFyZ2luLXRvcDogMTBweDtcclxuIGxpbmUtaGVpZ2h0OiAxLjQyODU3MTQzO1xyXG59XHJcblxyXG5zZWN0aW9uIC5sYWJlbHtcclxuZm9udC1zaXplOiAwLjk1cmVtICFpbXBvcnRhbnQ7XHJcbiAgbWFyZ2luOiAwcHg7XHJcblxyXG4gIC8qIGxpbmUtaGVpZ2h0OiAyNHB4OyAqL1xyXG5cclxuICBmb250LWZhbWlseTogYWdlbmRhLXNlbWlib2xkO1xyXG4gIGNvbG9yOiAjMDAyZDNkO1xyXG4gIC8qIHBhZGRpbmc6IDEwcHggMHB4OyAqL1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIG1hcmdpbi1ib3R0b206IDVweDtcclxuICBsaW5lLWhlaWdodDogMS40Mjg1NzE0MztcclxufVxyXG5cclxuLnBhZGRpbmdfYm90dG9te1xyXG5wYWRkaW5nLWJvdHRvbSA6IDEwcHggIWltcG9ydGFudDtcclxufSIsIi5hcHBfYmcyIHtcbiAgLS1iYWNrZ3JvdW5kOiB1cmwoLi4vLi4vLi4vYXNzZXRzL2ltZ3MvYXBwX2JnXzIuanBnKSBuby1yZXBlYXQgY2VudGVyIGNlbnRlciAvIGNvdmVyO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGJvdHRvbTtcbn1cblxuLnN1Yi1oZWFkZXIge1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgcGFkZGluZzogMTBweCAyNXB4ICFpbXBvcnRhbnQ7XG4gIG1hcmdpbjogMHB4ICFpbXBvcnRhbnQ7XG4gIGZvbnQtc2l6ZTogMS4xcmVtICFpbXBvcnRhbnQ7XG4gIGZvbnQtZmFtaWx5OiBBZ2VuZGEtUmVndWxhcjtcbn1cblxuLnRhYnMge1xuICBib3JkZXItdG9wOiAzcHggc29saWQgY29sb3Igd2hpdGU7XG4gIC0tcGFkZGluZy10b3A6IC00cHg7XG4gIC0tcGFkZGluZy1zdGFydDogLTRweDtcbiAgLS1wYWRkaW5nLWVuZDogLTRweDtcbiAgLS1taW4taGVpZ2h0OiA0NHB4O1xufVxuXG4ud2hpdGVfY29udGFpbmVyX2JvcmRlcl9yYWRpdXMge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNykgIWltcG9ydGFudDtcbiAgYm9yZGVyLXJhZGl1czogMTVweCAhaW1wb3J0YW50O1xufVxuXG4uc3Bpbm5lcnNlY3Rpb24ge1xuICBkaXNwbGF5OiBibG9jaztcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMS4zcmVtO1xuICBoZWlnaHQ6IDk4JTtcbn1cblxuLnBhZGRpbmdfMDE1IHtcbiAgcGFkZGluZzogMHB4IDE1cHg7XG59XG5cbi5saXN0LW1kIHtcbiAgYmFja2dyb3VuZDogbm9uZTtcbn1cblxuLml0ZW0ge1xuICBwYWRkaW5nLWxlZnQ6IDBweDtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG59XG5cbi5pdGVtIC5pdGVtLWlucHV0Lm5nLXZhbGlkLml0ZW0taW5wdXQtaGFzLXZhbHVlOm5vdCguaW5wdXQtaGFzLWZvY3VzKTpub3QoLml0ZW0taW5wdXQtaGFzLWZvY3VzKSAuaXRlbS1pbm5lciwgLml0ZW0uaXRlbS1pbnB1dC5uZy12YWxpZC5pbnB1dC1oYXMtdmFsdWU6bm90KC5pbnB1dC1oYXMtZm9jdXMpOm5vdCguaXRlbS1pbnB1dC1oYXMtZm9jdXMpIC5pdGVtLWlubmVyIHtcbiAgYm9yZGVyLWJvdHRvbS1jb2xvcjogbm9uZSAhaW1wb3J0YW50O1xuICAtd2Via2l0LWJveC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudDtcbiAgYm94LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50O1xufVxuXG4uaXRlbS1pbm5lciB7XG4gIHBhZGRpbmctcmlnaHQ6IDBweCAhaW1wb3J0YW50O1xuICBib3JkZXItYm90dG9tOiBub25lICFpbXBvcnRhbnQ7XG59XG5cbi5pbnB1dCB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNlZWU7XG4gIHBhZGRpbmc6IDNweCAxNXB4O1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgZm9udC1zaXplOiAxLjRyZW07XG4gIGNvbG9yOiAtLWlvbi1jb2xvci1zZWNvbmRhcnk7XG59XG5cbi5sYWJlbCB7XG4gIGZvbnQtc2l6ZTogMS41cmVtICFpbXBvcnRhbnQ7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIG1hcmdpbjogMHB4ICFpbXBvcnRhbnQ7XG4gIHdoaXRlLXNwYWNlOiB1bnNldCAhaW1wb3J0YW50O1xufVxuXG4uaGVhZGluZyB7XG4gIGZvbnQtZmFtaWx5OiBBZ2VuZGEtUmVndWxhciAhaW1wb3J0YW50O1xuICBjb2xvcjogLS1pb24tY29sb3ItcHJpbWFyeSAhaW1wb3J0YW50O1xuICBmb250LXNpemU6IDEuNHJlbTtcbn1cblxuLnN1Yi1oZWFkZXItYmxhY2sge1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5KTtcbiAgcGFkZGluZzogMTBweCAzMHB4O1xuICBtYXJnaW46IDBweDtcbiAgZm9udC1zaXplOiAxLjRyZW0gIWltcG9ydGFudDtcbiAgZm9udC1mYW1pbHk6IEFnZW5kYS1SZWd1bGFyO1xuICBsaW5lLWhlaWdodDogMjRweDtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4uaGVhZGVyIHtcbiAgZm9udC1mYW1pbHk6IEFnZW5kYS1TZW1pYm9sZDtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbmlvbi1saXN0IC5sYWJlbCB7XG4gIG1hcmdpbjogMHB4O1xuICBmb250LXNpemU6IDEuOHJlbTtcbiAgLyogbGluZS1oZWlnaHQ6IDI0cHg7ICovXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGZvbnQtZmFtaWx5OiBhZ2VuZGEtc2VtaWJvbGQ7XG4gIGNvbG9yOiAjMDAyZDNkO1xuICAvKiBwYWRkaW5nOiAxMHB4IDBweDsgKi9cbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbi1ib3R0b206IDVweDtcbiAgbGluZS1oZWlnaHQ6IDEuNDI4NTcxNDM7XG59XG5cbmlvbi1saXN0IGlvbi1yb3cge1xuICBwYWRkaW5nOiAwO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzAwMmQzZDtcbiAgbWFyZ2luLXRvcDogMTBweDtcbn1cblxuaW9uLWxpc3QgaW9uLXJvdzpsYXN0LWNoaWxkIHtcbiAgYm9yZGVyLWJvdHRvbTogbm9uZTtcbn1cblxuLnNjcm9sbC1jb250ZW50IHtcbiAgcGFkZGluZzogMTVweCAhaW1wb3J0YW50O1xufVxuXG4ubGJsLWhlYWRlciB7XG4gIHBhZGRpbmc6IDA7XG4gIGZvbnQtZmFtaWx5OiBhZ2VuZGEtc2VtaWJvbGQ7XG4gIGNvbG9yOiAtLWlvbi1jb2xvci1zZWNvbmRhcnk7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgbGluZS1oZWlnaHQ6IDI0cHg7XG4gIG1hcmdpbjogMDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbn1cblxuLmxibC1jb250ZW50IHtcbiAgcGFkZGluZzogMDtcbiAgZm9udC1mYW1pbHk6IEFnZW5kYS1SZWd1bGFyO1xuICBjb2xvcjogLS1pb24tY29sb3Itc2Vjb25kYXJ5O1xuICBmb250LXNpemU6IDE0cHg7XG4gIGxpbmUtaGVpZ2h0OiAyNHB4O1xuICBtYXJnaW46IDA7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG59XG5cbmRpdiBwIHtcbiAgbWFyZ2luLWJvdHRvbTogOHB4O1xuICBtYXJnaW4tdG9wOiAxMHB4O1xuICBsaW5lLWhlaWdodDogMS40Mjg1NzE0Mztcbn1cblxuc2VjdGlvbiAubGFiZWwge1xuICBmb250LXNpemU6IDAuOTVyZW0gIWltcG9ydGFudDtcbiAgbWFyZ2luOiAwcHg7XG4gIC8qIGxpbmUtaGVpZ2h0OiAyNHB4OyAqL1xuICBmb250LWZhbWlseTogYWdlbmRhLXNlbWlib2xkO1xuICBjb2xvcjogIzAwMmQzZDtcbiAgLyogcGFkZGluZzogMTBweCAwcHg7ICovXG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW4tYm90dG9tOiA1cHg7XG4gIGxpbmUtaGVpZ2h0OiAxLjQyODU3MTQzO1xufVxuXG4ucGFkZGluZ19ib3R0b20ge1xuICBwYWRkaW5nLWJvdHRvbTogMTBweCAhaW1wb3J0YW50O1xufSJdLCJzb3VyY2VSb290IjoiIn0= */"]
});

/***/ })

}]);
//# sourceMappingURL=src_app_pages_payment-acknowledgement_payment-acknowledgement_module_ts.js.map