"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_update-direct-debit_update-direct-debit_module_ts"],{

/***/ 7308:
/*!*********************************************************************************!*\
  !*** ./src/app/pages/update-direct-debit/update-direct-debit-routing.module.ts ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UpdateDirectDebitPageRoutingModule": () => (/* binding */ UpdateDirectDebitPageRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _update_direct_debit_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./update-direct-debit.page */ 28892);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);




const routes = [{
  path: '',
  component: _update_direct_debit_page__WEBPACK_IMPORTED_MODULE_0__.UpdateDirectDebitPage
}];
class UpdateDirectDebitPageRoutingModule {}
UpdateDirectDebitPageRoutingModule.ɵfac = function UpdateDirectDebitPageRoutingModule_Factory(t) {
  return new (t || UpdateDirectDebitPageRoutingModule)();
};
UpdateDirectDebitPageRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
  type: UpdateDirectDebitPageRoutingModule
});
UpdateDirectDebitPageRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](UpdateDirectDebitPageRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
})();

/***/ }),

/***/ 3044:
/*!*************************************************************************!*\
  !*** ./src/app/pages/update-direct-debit/update-direct-debit.module.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UpdateDirectDebitPageModule": () => (/* binding */ UpdateDirectDebitPageModule)
/* harmony export */ });
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ 38699);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _update_direct_debit_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./update-direct-debit-routing.module */ 7308);
/* harmony import */ var _update_direct_debit_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./update-direct-debit.page */ 28892);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);







class UpdateDirectDebitPageModule {}
UpdateDirectDebitPageModule.ɵfac = function UpdateDirectDebitPageModule_Factory(t) {
  return new (t || UpdateDirectDebitPageModule)();
};
UpdateDirectDebitPageModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
  type: UpdateDirectDebitPageModule
});
UpdateDirectDebitPageModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__.TranslateModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.ReactiveFormsModule, _update_direct_debit_routing_module__WEBPACK_IMPORTED_MODULE_0__.UpdateDirectDebitPageRoutingModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](UpdateDirectDebitPageModule, {
    declarations: [_update_direct_debit_page__WEBPACK_IMPORTED_MODULE_1__.UpdateDirectDebitPage],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__.TranslateModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.ReactiveFormsModule, _update_direct_debit_routing_module__WEBPACK_IMPORTED_MODULE_0__.UpdateDirectDebitPageRoutingModule]
  });
})();

/***/ }),

/***/ 28892:
/*!***********************************************************************!*\
  !*** ./src/app/pages/update-direct-debit/update-direct-debit.page.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UpdateDirectDebitPage": () => (/* binding */ UpdateDirectDebitPage)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var http_status_codes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! http-status-codes */ 92788);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var src_providers_utils_utils_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/providers/utils/utils.service */ 30423);
/* harmony import */ var _updateDirectDebitService__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./updateDirectDebitService */ 42599);
/* harmony import */ var src_providers_logger_service_logger_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/providers/logger-service/logger-service */ 9999);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/core */ 38699);
/* harmony import */ var src_providers_utils_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/providers/utils/config */ 43485);
/* harmony import */ var _awesome_cordova_plugins_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @awesome-cordova-plugins/in-app-browser/ngx */ 67122);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/angular */ 93819);











class UpdateDirectDebitPage {
  constructor(fb, utils, updateDirectDebitDetail, logger, translate, config, theInAppBrowser) {
    this.fb = fb;
    this.utils = utils;
    this.updateDirectDebitDetail = updateDirectDebitDetail;
    this.logger = logger;
    this.translate = translate;
    this.config = config;
    this.theInAppBrowser = theInAppBrowser;
    this.isShowingLoader = false;
    this.canTryAgain = false;
    this.policyList = [];
    this.selectedPolicyIndex = 0;
    this.disclaimer_terms = true;
    this.merchantReturnURL = "https://bpp1.sunlifemalaysia.com/portal-ui/CUSTOMER/UpdateDirectDebitResults";
    this.isUATBuild = true;
    this.amount = "9999.00";
    this.currencyCode = "MYR";
    this.custIp = "127.0.0.0";
    this.pageTimeout = 780;
    this.alertButtons = [{
      text: this.translate.instant('make_payment.okBtn'),
      handler: () => {
        //this.navCtrl.push(PaymentAcknowledgementDDPage,{"successdata":this.paymentSuccessResp, animate: true, direction: 'forward' });
      }
    }];
    this.updateDirectDebitForm = fb.group({
      disclaimer: [{
        value: true,
        disabled: false
      }],
      selectPolicy: this.fb.array([])
    });
    this.username = this.utils.getName();
    this.getPolicyList();
  }
  // ngOnInit() {
  // }
  ionViewDidLoad() {
    console.log('ionViewDidLoad UpdateDirectDebitPage');
  }
  ionViewDidEnter() {
    this.config.currentPage.pageName = "UpdateDirectDebitPage";
  }
  checkboxChange(checked) {
    if (checked) {
      this.disclaimer_terms = true;
    } else {
      this.disclaimer_terms = false;
    }
  }
  showGuideLines() {
    //this.navCtrl.push(UddGuideLinesPage);
  }
  getPolicyList() {
    if (!(this.policyList.length > 0)) {
      this.isShowingLoader = true;
      if (this.utils.isDeviceOnLine()) {
        this.canTryAgain = false;
        this.updateDirectDebitDetail.getDirectDebitPolicyList(this.utils.getUserIdentity()).then(res => {
          try {
            if (res['responseJSON'] && res['responseJSON']['statusCode'] == http_status_codes__WEBPACK_IMPORTED_MODULE_5__.OK) {
              this.policyList = res['responseJSON']['array'];
              this.isShowingLoader = false;
            } else {
              this.isShowingLoader = false;
              this.canTryAgain = true;
              this.errorMsg = this.translate.instant('generic_msgs.server_err');
            }
          } catch (e) {
            this.isShowingLoader = false;
            this.canTryAgain = true;
            this.logger.error("loginSuccess catch eror : " + JSON.stringify(e));
            this.errorMsg = this.translate.instant('generic_msgs.server_err');
          }
        }, err => {
          this.isShowingLoader = false;
          this.canTryAgain = true;
          this.errorMsg = this.translate.instant('generic_msgs.server_err');
        });
      } else {
        this.isShowingLoader = false;
        this.canTryAgain = true;
        this.errorMsg = this.translate.instant('generic_msgs.network_err');
      }
    } else {
      this.isShowingLoader = false;
      this.canTryAgain = false;
    }
  }
  onChange(policyNo, index) {
    const policyFormArray = this.updateDirectDebitForm.controls.selectPolicy;
    policyFormArray.removeAt(0);
    policyFormArray.push(new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl(policyNo)); //incase of checkbox select
    this.selectedPolicyIndex = index;
    this.selectedEncryptedPolicyId = this.policyList[this.selectedPolicyIndex]["EncryptedPolicyNumber"];
  }
  submitDirectDebitForm() {
    this.logger.trace("POST paymnet user details --start");
    this.utils.showProgressLoader();
    if (this.utils.isDeviceOnLine()) {
      //this.isShowingLoader = true;
      this.updateDirectDebitDetail.postEMandateInfo(this.selectedEncryptedPolicyId).then(res => {
        try {
          //this.isShowingLoader = false;
          if (res['responseJSON'] && res['responseJSON']['statusCode'] == http_status_codes__WEBPACK_IMPORTED_MODULE_5__.CREATED) {
            console.log(res['responseJSON']);
            //this.paymentSeqNo = res['responseJSON']['paymentId'];
            this.MakeEGHLPayment(res['responseJSON']);
          } else {
            this.logger.error("POST USER payment details : " + JSON.stringify(res));
            this.errorMsg = this.translate.instant('generic_msgs.server_err');
          }
        } catch (e) {
          this.utils.dissmisProgressLoader();
          this.isShowingLoader = false;
          this.logger.error("POST USER payment details : " + JSON.stringify(e));
          this.errorMsg = this.translate.instant('generic_msgs.server_err');
        }
      }, err => {
        this.utils.dissmisProgressLoader();
        this.isShowingLoader = false;
        this.logger.error("POST USER payment details : " + JSON.stringify(err));
        this.errorMsg = this.utils.handleServiceException(err);
      });
    } else {
      this.isShowingLoader = false;
      this.errorMsg = this.translate.instant('generic_msgs.network_err');
    }
  }
  MakeEGHLPayment(paymentInputData) {
    let pageContentUrl;
    let options = {
      location: 'yes',
      hidden: 'no',
      clearcache: 'yes',
      clearsessioncache: 'yes',
      zoom: 'yes',
      hardwareback: 'no',
      mediaPlaybackRequiresUserAction: 'no',
      shouldPauseOnSuspend: 'no',
      closebuttoncaption: 'Close',
      disallowoverscroll: 'no',
      toolbar: 'yes',
      enableViewportScale: 'no',
      allowInlineMediaPlayback: 'no',
      presentationstyle: 'pagesheet',
      fullscreen: 'yes',
      hideurlbar: 'yes',
      hidenavigationbuttons: 'yes',
      toolbarcolor: '#f8f8f8',
      closebuttoncolor: "#003946"
    };
    let gatewayInputs = "";
    if (paymentInputData.inputs.length > 0) {
      let inputData = paymentInputData.inputs;
      for (let i = 0; i < inputData.length; i++) {
        gatewayInputs += '<input type="' + inputData[i].type + '" name="' + inputData[i].name + '" value="' + inputData[i].value + '" />';
      }
      var pageContent = '<html><head><script>function submitPayment(){document.eMandate.submit();}</script></head>' + '<body onload="submitPayment()"><form action="' + paymentInputData.submitUrl + '"  name="eMandate" method="post">' + gatewayInputs + '</form>' + '</body></html>';
      pageContentUrl = 'data:text/html;base64,' + btoa(pageContent);
      let target = "_blank";
      let browser = this.theInAppBrowser.create(pageContentUrl, target, options);
      browser.on('loadstart').subscribe(params => {
        if (params.url.includes('bpp1.sunlifemalaysia.com/')) {
          browser.close();
        }
      });
      browser.on('exit').subscribe(res => {
        console.log("response is " + JSON.stringify(res));
        this.utils.dissmisProgressLoader();
        //this.app.getRootNav().setRoot(HomePage);
      }, err => {
        this.utils.dissmisProgressLoader();
        // this.adapterSer.ErrorcustomDialog('', 'Error Occured.');
      });
    } else {
      console.log(JSON.stringify(paymentInputData));
      this.utils.dissmisProgressLoader();
      //this.adapterSer.ErrorcustomDialog('', 'Sorry, Unable to process at this moment please try after some time');
    }
  }

  paymentSuccess() {
    if (this.utils.isDeviceOnLine()) {
      this.utils.showProgressLoader();
      this.updateDirectDebitDetail.putEMandateResults(this.paymentSuccessResp, this.paymentSeqNo).then(res => {
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
      this.utils.dissmisProgressLoader();
      let errorMessage = this.translate.instant('generic_msgs.network_err');
      this.utils.showAlert("", errorMessage, false, this.alertButtons);
    }
  }
}
UpdateDirectDebitPage.ɵfac = function UpdateDirectDebitPage_Factory(t) {
  return new (t || UpdateDirectDebitPage)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_providers_utils_utils_service__WEBPACK_IMPORTED_MODULE_0__.UtilService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_updateDirectDebitService__WEBPACK_IMPORTED_MODULE_1__.UpdateDirectDebitService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_providers_logger_service_logger_service__WEBPACK_IMPORTED_MODULE_2__.LoggerServiceProvider), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__.TranslateService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_providers_utils_config__WEBPACK_IMPORTED_MODULE_3__.ConfigProvider), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_awesome_cordova_plugins_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_4__.InAppBrowser));
};
UpdateDirectDebitPage.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({
  type: UpdateDirectDebitPage,
  selectors: [["app-update-direct-debit"]],
  decls: 5,
  vars: 0,
  template: function UpdateDirectDebitPage_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "ion-header")(1, "ion-toolbar")(2, "ion-title");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3, "update-direct-debit");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](4, "ion-content");
    }
  },
  dependencies: [_ionic_angular__WEBPACK_IMPORTED_MODULE_9__.IonContent, _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.IonHeader, _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.IonTitle, _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.IonToolbar],
  styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ })

}]);
//# sourceMappingURL=src_app_pages_update-direct-debit_update-direct-debit_module_ts.js.map