"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_make-payment_make-payment_module_ts"],{

/***/ 65607:
/*!*******************************************************************!*\
  !*** ./src/app/pages/make-payment/make-payment-routing.module.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MakePaymentPageRoutingModule": () => (/* binding */ MakePaymentPageRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _make_payment_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./make-payment.page */ 79310);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);




const routes = [{
  path: '',
  component: _make_payment_page__WEBPACK_IMPORTED_MODULE_0__.MakePaymentPage
}];
class MakePaymentPageRoutingModule {}
MakePaymentPageRoutingModule.ɵfac = function MakePaymentPageRoutingModule_Factory(t) {
  return new (t || MakePaymentPageRoutingModule)();
};
MakePaymentPageRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
  type: MakePaymentPageRoutingModule
});
MakePaymentPageRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](MakePaymentPageRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
})();

/***/ }),

/***/ 9061:
/*!***********************************************************!*\
  !*** ./src/app/pages/make-payment/make-payment.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MakePaymentPageModule": () => (/* binding */ MakePaymentPageModule)
/* harmony export */ });
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ 38699);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _make_payment_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./make-payment-routing.module */ 65607);
/* harmony import */ var _make_payment_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./make-payment.page */ 79310);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);







class MakePaymentPageModule {}
MakePaymentPageModule.ɵfac = function MakePaymentPageModule_Factory(t) {
  return new (t || MakePaymentPageModule)();
};
MakePaymentPageModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
  type: MakePaymentPageModule
});
MakePaymentPageModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__.TranslateModule, _make_payment_routing_module__WEBPACK_IMPORTED_MODULE_0__.MakePaymentPageRoutingModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](MakePaymentPageModule, {
    declarations: [_make_payment_page__WEBPACK_IMPORTED_MODULE_1__.MakePaymentPage],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__.TranslateModule, _make_payment_routing_module__WEBPACK_IMPORTED_MODULE_0__.MakePaymentPageRoutingModule]
  });
})();

/***/ }),

/***/ 79310:
/*!*********************************************************!*\
  !*** ./src/app/pages/make-payment/make-payment.page.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MakePaymentPage": () => (/* binding */ MakePaymentPage)
/* harmony export */ });
/* harmony import */ var http_status_codes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! http-status-codes */ 92788);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var src_providers_utils_utils_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/providers/utils/utils.service */ 30423);
/* harmony import */ var _paymentSuccessService__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./paymentSuccessService */ 33038);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ 38699);
/* harmony import */ var src_providers_utils_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/providers/utils/config */ 43485);
/* harmony import */ var src_providers_logger_service_logger_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/providers/logger-service/logger-service */ 9999);
/* harmony import */ var _update_direct_debit_updateDirectDebitService__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../update-direct-debit/updateDirectDebitService */ 42599);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/angular */ 93819);










class MakePaymentPage {
  constructor(utils, putPaymentResults, translate, config, logger, directDebitService, router) {
    this.utils = utils;
    this.putPaymentResults = putPaymentResults;
    this.translate = translate;
    this.config = config;
    this.logger = logger;
    this.directDebitService = directDebitService;
    this.router = router;
    this.transactionType = "SALE";
    this.paymentDescription = "Premium Payment";
    this.paymentGateway = "https://pay.e-ghl.com/IPGSG/Payment.aspx";
    this.isPaymentSuccess = false;
    /**buttons to passs to alert popup when transaction failed */
    this.alertButtons = [{
      text: this.translate.instant('make_payment.okBtn'),
      handler: () => {
        this.router.navigate(['payment-acknowledgement'], {
          state: {
            successdata: this.paymentSuccessResp,
            animate: true,
            direction: 'forward'
          }
        });
        //this.navCtrl.push(PaymentAcknowledgementPage,{"successdata":this.paymentSuccessResp, animate: true, direction: 'forward' });
      }
    }];

    this.config.currentPage.pageName = "MakePaymentPage";
    this.encryptedPolicyNo = history.state.encryptedPolicyNo;
    this.merchantURL = history.state.mURL;
    this.merchantReturnURL = history.state.mreturnURL;
    this.merchantID = history.state.ID;
    this.password = history.state.passwd;
    this.merchantName = history.state.mname;
    this.paymentUserData = history.state.paymentdata;
    this.isDirectDebit = history.state.isDirectDebit;
    if (this.isDirectDebit) {
      this.transactionType = "EMANDATE01";
      this.paymentDescription = "Direct Debit peyment";
      this.premiumAmount = 1.00;
      this.paymentGateway = this.merchantURL;
    } else {
      this.premiumAmount = this.paymentUserData.premium;
    }
    this.policyNo = this.paymentUserData.policyNumber;
    this.policyOwnerName = this.paymentUserData.policyOwner;
    this.phone = this.paymentUserData.contactNumber;
    this.planName = this.paymentUserData.planName;
    this.email = this.paymentUserData.email;
    this.paymentId = this.paymentUserData.paymentid;
    this.isPaymentSuccess = false;
  }
  /**payment process intilization */
  pay() {
    var orderId = window.crypto.getRandomValues(new Uint16Array(1))[0] + 10000;
    var orderId1 = orderId.toString();
    // if (this.utils.getPlatform() == 'ios') {
    //   this.paymentSeqNo = this.paymentId.replace("MPAYIOS", "");
    // } else if (this.utils.getPlatform() == 'android') {
    //   this.paymentSeqNo = this.paymentId.replace("MPAYAOS", "");
    // }
    const data = {
      /*
      * Mandatory payment parameters list:
      * transactionType, paymentMethod, serviceId, paymentId, orderNumber, paymentDesc,
      * merchantReturnUrl, amount, currencyCode, custIp, custName, custEmail, custPhone
      * Check the eGHL documentation for parameter names.
      * [All Field are defined as String], Except paymentTimeout and sdkTimeout.
      * NOTE: Parameter names and spelling follow iOS, wherever the Android and iOS
      * names differ!
      */
      // List of accepted params and some value detail (refer docs for more detail):
      CurrencyCode: 'MYR',
      PymtMethod: 'ANY',
      TransactionType: this.transactionType,
      PaymentGateway: 'https://pay.e-ghl.com/IPGSG/Payment.aspx',
      ServiceID: this.merchantID,
      Password: this.password,
      PaymentID: this.paymentId,
      OrderNumber: orderId1,
      PaymentDesc: 'Premium payment',
      MerchantReturnURL: this.merchantReturnURL,
      Amount: this.premiumAmount,
      CustIP: '172.17.68.38',
      CustName: this.policyOwnerName,
      CustEmail: this.email,
      CustPhone: this.phone,
      MerchantName: this.merchantName,
      LanguageCode: 'EN',
      PageTimeout: '780',
      PaymentTimeout: '-1',
      sdkTimeout: '780',
      _finaliseMessage: 'Optional message for Finalising Payment (iOS Only)',
      _cancelMessage: 'Optional message for Cancelling Payment (iOS Only)'
    };
    /**this method is to call eGHL plugin with given payment data */
    eGHL.makePayment(data, resp => {
      /**When payment successs */
      if (resp.TxnStatus == 0) {
        this.utils.presentToast(this.translate.instant('make_payment.paymentSuccess'));
        this.isPaymentSuccess = true;
        let inputData = {
          transactionType: resp.TransactionType || "",
          pymtMethod: resp.PymtMethod || "",
          serviceID: resp.ServiceID || "",
          paymentID: resp.PaymentID || "",
          currencyCode: resp.CurrencyCode || "",
          txnID: resp.TxnID || "",
          issuingBank: resp.IssuingBank || "",
          txnStatus: resp.TxnStatus || "",
          authCode: resp.AuthCode || "",
          cardHolder: resp.CardHolder || "",
          cardNoMask: resp.CardNoMask || "",
          cardExp: resp.CardExp || "",
          cardType: resp.CardType || "",
          premiumAmount: resp.Amount || "",
          txnMessage: resp.TxnMessage || ""
        };
        this.paymentSuccessResp = inputData;
        /**When payment failed */
      } else if (resp.TxnStatus == 1) {
        this.isPaymentSuccess = true;
        let inputData = {
          transactionType: resp.TransactionType || "",
          pymtMethod: resp.PymtMethod || "",
          serviceID: resp.ServiceID || "",
          paymentID: resp.PaymentID || "",
          currencyCode: resp.CurrencyCode || "",
          txnID: resp.TxnID || "",
          issuingBank: resp.IssuingBank || "",
          txnStatus: resp.TxnStatus || "",
          authCode: resp.AuthCode || "",
          cardHolder: resp.CardHolder || "",
          cardNoMask: resp.CardNoMask || "",
          cardExp: resp.CardExp || "",
          cardType: resp.CardType || "",
          premiumAmount: resp.Amount || "",
          txnMessage: resp.TxnMessage || ""
        };
        this.paymentSuccessResp = inputData;
        this.utils.showAlert(this.translate.instant('make_payment.paymentFailed'), this.translate.instant('make_payment.transactionFailed'), false, this.alertButtons);
      } else {
        this.utils.showAlert(this.translate.instant('make_payment.paymentFailed'), this.translate.instant('make_payment.transactionFailed'), false, this.alertButtons);
      }
    }, /**When payment failed */
    err => {
      this.utils.showAlert(this.translate.instant('make_payment.paymentFailed'), this.translate.instant('make_payment.transactionFailed'), false, this.alertButtons);
    });
  }
  /**this sis tempraroy : to send payment successful daat to Sunaccess server*/
  paymentSuccess() {
    if (this.utils.isDeviceOnLine()) {
      this.utils.showProgressLoader();
      if (this.isDirectDebit) {
        this.directDebitService.putEMandateResults(this.paymentSuccessResp, this.paymentSeqNo).then(res => {
          try {
            this.utils.dissmisProgressLoader();
            if (res['responseJSON']) {
              if (res['responseJSON']['statusCode'] == http_status_codes__WEBPACK_IMPORTED_MODULE_5__.ACCEPTED || res['responseJSON']['statusCode'] == http_status_codes__WEBPACK_IMPORTED_MODULE_5__.OK) {
                let message = res['responseJSON']['userMessage'] || this.translate.instant('make_payment.paymentSuccessService');
                this.utils.showAlert("", message, false, this.alertButtons);
              } else {
                let message = res['responseJSON']['Message'] || this.translate.instant('make_payment.paymentSuccessService');
                this.utils.showAlert("", message, false, this.alertButtons);
              }
            }
          } catch (e) {
            this.utils.dissmisProgressLoader();
            this.logger.error("loginSuccess catch eror : " + JSON.stringify(e));
            let errorMessage = this.translate.instant('make_payment.tryAgain');
            this.utils.showAlert("", errorMessage, false, this.alertButtons);
          }
        }, err => {
          let errorMessage;
          this.utils.dissmisProgressLoader();
          errorMessage = this.utils.handleServiceException(err);
          this.utils.showAlert("", errorMessage, false, this.alertButtons);
        });
      } else {
        this.putPaymentResults.putPaymentSuccessDetails(this.paymentSuccessResp, this.paymentSeqNo).then(res => {
          try {
            this.utils.dissmisProgressLoader();
            if (res['responseJSON']) {
              if (res['responseJSON']['statusCode'] == http_status_codes__WEBPACK_IMPORTED_MODULE_5__.ACCEPTED || res['responseJSON']['statusCode'] == http_status_codes__WEBPACK_IMPORTED_MODULE_5__.OK) {
                let message = res['responseJSON']['userMessage'] || this.translate.instant('make_payment.paymentSuccessService');
                this.utils.showAlert("", message, false, this.alertButtons);
              } else {
                let message = res['responseJSON']['Message'] || this.translate.instant('make_payment.paymentSuccessService');
                this.utils.showAlert("", message, false, this.alertButtons);
              }
            }
          } catch (e) {
            this.utils.dissmisProgressLoader();
            this.logger.error("loginSuccess catch eror : " + JSON.stringify(e));
            let errorMessage = this.translate.instant('make_payment.tryAgain');
            this.utils.showAlert("", errorMessage, false, this.alertButtons);
          }
        }, err => {
          let errorMessage;
          this.utils.dissmisProgressLoader();
          errorMessage = this.utils.handleServiceException(err);
          this.utils.showAlert("", errorMessage, false, this.alertButtons);
        });
      }
    } else {
      this.utils.dissmisProgressLoader();
      let errorMessage = this.translate.instant('generic_msgs.network_err');
      this.utils.showAlert("", errorMessage, false, this.alertButtons);
    }
  }
}
MakePaymentPage.ɵfac = function MakePaymentPage_Factory(t) {
  return new (t || MakePaymentPage)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_providers_utils_utils_service__WEBPACK_IMPORTED_MODULE_0__.UtilService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_paymentSuccessService__WEBPACK_IMPORTED_MODULE_1__.PaymentSuccessService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__.TranslateService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_providers_utils_config__WEBPACK_IMPORTED_MODULE_2__.ConfigProvider), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_providers_logger_service_logger_service__WEBPACK_IMPORTED_MODULE_3__.LoggerServiceProvider), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_update_direct_debit_updateDirectDebitService__WEBPACK_IMPORTED_MODULE_4__.UpdateDirectDebitService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__.Router));
};
MakePaymentPage.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({
  type: MakePaymentPage,
  selectors: [["app-make-payment"]],
  decls: 14,
  vars: 11,
  consts: [["mode", "ios"], ["color", "primary"], ["slot", "start"], ["text", "", "icon", "chevron-back-outline", 2, "padding-left", "15px", "font-size", "0.7rem"], [1, "bold-font"], ["no-bounce", "", 1, "ion-padding"], ["ion-button", "", "full", "", 3, "disabled", "click"]],
  template: function MakePaymentPage_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "ion-header", 0)(1, "ion-toolbar", 1)(2, "ion-buttons", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](3, "ion-back-button", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "ion-title", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](6, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "ion-content", 5)(8, "button", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function MakePaymentPage_Template_button_click_8_listener() {
        return ctx.pay();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](9);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](10, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](11, "button", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function MakePaymentPage_Template_button_click_11_listener() {
        return ctx.paymentSuccess();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](12);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](13, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](6, 5, "make_payment.title"));
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("disabled", ctx.isPaymentSuccess);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](10, 7, "make_payment.pay"));
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("disabled", !ctx.isPaymentSuccess);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](13, 9, "make_payment.send_data"));
    }
  },
  dependencies: [_ionic_angular__WEBPACK_IMPORTED_MODULE_9__.IonBackButton, _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.IonButtons, _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.IonContent, _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.IonHeader, _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.IonTitle, _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.IonToolbar, _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.IonBackButtonDelegate, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__.TranslatePipe],
  styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ })

}]);
//# sourceMappingURL=src_app_pages_make-payment_make-payment_module_ts.js.map