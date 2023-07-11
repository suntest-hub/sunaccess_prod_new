"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_e-medical-card_e-medical-card_module_ts"],{

/***/ 54686:
/*!***********************************************************************!*\
  !*** ./src/app/pages/e-medical-card/e-medical-card-routing.module.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EMedicalCardPageRoutingModule": () => (/* binding */ EMedicalCardPageRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _e_medical_card_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./e-medical-card.page */ 3064);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);




const routes = [{
  path: '',
  component: _e_medical_card_page__WEBPACK_IMPORTED_MODULE_0__.EMedicalCardPage
}];
class EMedicalCardPageRoutingModule {}
EMedicalCardPageRoutingModule.ɵfac = function EMedicalCardPageRoutingModule_Factory(t) {
  return new (t || EMedicalCardPageRoutingModule)();
};
EMedicalCardPageRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
  type: EMedicalCardPageRoutingModule
});
EMedicalCardPageRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](EMedicalCardPageRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
})();

/***/ }),

/***/ 7683:
/*!***************************************************************!*\
  !*** ./src/app/pages/e-medical-card/e-medical-card.module.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EMedicalCardPageModule": () => (/* binding */ EMedicalCardPageModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _e_medical_card_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./e-medical-card-routing.module */ 54686);
/* harmony import */ var _e_medical_card_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./e-medical-card.page */ 3064);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);






class EMedicalCardPageModule {}
EMedicalCardPageModule.ɵfac = function EMedicalCardPageModule_Factory(t) {
  return new (t || EMedicalCardPageModule)();
};
EMedicalCardPageModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
  type: EMedicalCardPageModule
});
EMedicalCardPageModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule, _e_medical_card_routing_module__WEBPACK_IMPORTED_MODULE_0__.EMedicalCardPageRoutingModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](EMedicalCardPageModule, {
    declarations: [_e_medical_card_page__WEBPACK_IMPORTED_MODULE_1__.EMedicalCardPage],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule, _e_medical_card_routing_module__WEBPACK_IMPORTED_MODULE_0__.EMedicalCardPageRoutingModule]
  });
})();

/***/ }),

/***/ 3064:
/*!*************************************************************!*\
  !*** ./src/app/pages/e-medical-card/e-medical-card.page.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EMedicalCardPage": () => (/* binding */ EMedicalCardPage)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var src_providers_utils_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/providers/utils/config */ 43485);
/* harmony import */ var _eMedicalCardService__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./eMedicalCardService */ 27323);
/* harmony import */ var src_providers_utils_utils_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/providers/utils/utils.service */ 30423);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var src_providers_logger_service_logger_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/providers/logger-service/logger-service */ 9999);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ 38699);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 94666);









function EMedicalCardPage_ion_row_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "ion-row", 13)(1, "ion-item", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](2, "ion-radio", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "ion-label", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "ion-col", 17)(6, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const policy_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("value", policy_r1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](policy_r1.policyNo);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("", policy_r1.insuredName, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](policy_r1.basePlanName);
  }
}
class EMedicalCardPage {
  constructor(config, eMedicalCardSrvc, utils, alertCtrl, logger, translate, router) {
    this.config = config;
    this.eMedicalCardSrvc = eMedicalCardSrvc;
    this.utils = utils;
    this.alertCtrl = alertCtrl;
    this.logger = logger;
    this.translate = translate;
    this.router = router;
    // @ViewChild(Nav) nav: Nav;
    this.policyList = [];
    this.isFlipped = false;
    this.enableButton = false;
    this.policyDetails = {};
  }
  ngOnInit() {
    this.policyList = history.state.policylist['array'];
    console.log('this.policyList', this.policyList);
  }
  submitPolicy() {
    this.utils.showProgressLoader();
    this.eMedicalCardSrvc.getMedicalCardDetails(this.selectedPolicyNo).then(res => {
      try {
        this.utils.dissmisProgressLoader();
        if (res['responseJSON']['array'].length) {
          console.log('resp', res['responseJSON']['array']);
          this.policyDetails = res['responseJSON']['array'][0];
          this.policyDetails['encryptedPolicyNo'] = this.selectedPolicyNo;
          console.log('this.policyDetails', this.policyDetails['encryptedPolicyNo']);
          if (this.policyDetails['medicalCardStatus'] === 'VALID') {
            this.router.navigate(['/download-medicard'], {
              state: {
                policyDetails: this.policyDetails
              }
            });
            //this.navCtrl.push(DownloadMedicardPage, this.policyDetails);
          } else if (this.policyDetails['medicalCardStatus'] === 'NOTINFORCE') {
            this.showDialog('not-active', this.policyDetails, "Medical card may not be active", "Medical card may not work as intended if the Policy / Medical Rider is not in-force. Do you still want to proceed with E-Medical card download? <p>For further info, please contact our Client Careline at " + '<u><a href="tel:1300-88-5055">1300-88-5055</a></u>' + " or email us at " + '<u><a href="mailto:wecare@sunlifemalaysia.com" target="_blank">wecare@sunlifemalaysia.com</a></u>' + ".</p>");
          }
        } else {
          this.showDialog('not-linked', '', "Medical card not applicable", "E-Medical card cannot be generated as Medical Rider is not linked to this policy. Please purchase a rider to enjoy medical benefits. <p>For further info, please contact our Client Careline at " + '<u><a href="tel:1300-88-5055">1300-88-5055</a></u>' + " or email us at " + '<u><span style="color:#007bff;"><a href="mailto:wecare@sunlifemalaysia.com" target="_blank">wecare@sunlifemalaysia.com</a></span></u>' + ".</p>");
        }
      } catch (e) {
        this.utils.dissmisProgressLoader();
        this.logger.error("loginSuccess catch eror : " + JSON.stringify(e));
        this.errorMsg = this.translate.instant('generic_msgs.server_err');
      }
    }, err => {
      this.utils.dissmisProgressLoader();
      this.errorMsg = this.utils.handleServiceException(err);
    });
  }
  showDialog(className, data, title, message) {
    let buttons = [{
      cssClass: 'proceed-btn',
      text: "Proceed",
      handler: () => {
        if (this.policyDetails['medicalCardStatus'] === 'NOTINFORCE') {
          //this.navCtrl.push(DownloadMedicardPage, data);
          this.router.navigate(['/download-medicard'], {
            state: {
              policyDetails: data
            }
          });
        }
      }
    }, {
      text: "OK",
      cssClass: "ok-btn",
      handler: () => {}
    }, {
      cssClass: 'cancel-btn',
      text: "Cancel",
      handler: () => {}
    }];
    const alert = this.alertCtrl.create({
      header: title,
      cssClass: className,
      message: message,
      buttons: buttons,
      backdropDismiss: false
    }).then(alert => alert.present());
  }
  onSelectPolicy(policy) {
    console.log('policy', policy);
    this.selectedPolicyNo = policy.encryptedPolicyNo;
    console.log('encryptedPolicyNo', this.selectedPolicyNo);
    this.enableButton = true;
  }
}
EMedicalCardPage.ɵfac = function EMedicalCardPage_Factory(t) {
  return new (t || EMedicalCardPage)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_providers_utils_config__WEBPACK_IMPORTED_MODULE_0__.ConfigProvider), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_eMedicalCardService__WEBPACK_IMPORTED_MODULE_1__.EMedicalCardService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_providers_utils_utils_service__WEBPACK_IMPORTED_MODULE_2__.UtilService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_5__.AlertController), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_providers_logger_service_logger_service__WEBPACK_IMPORTED_MODULE_3__.LoggerServiceProvider), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__.TranslateService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__.Router));
};
EMedicalCardPage.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
  type: EMedicalCardPage,
  selectors: [["app-e-medical-card"]],
  decls: 22,
  vars: 2,
  consts: [["mode", "ios"], ["color", "primary", 1, "toolbar"], ["slot", "start", "auto-hide", "false", "color", "secondary"], ["padding", "", "no-bounce", "", 1, "app_bg2", "text_color_base"], [1, "white_container_border_radius", "padding_15"], ["id", "selectpolicySection", 1, "radio-container"], [1, "heading"], [1, "select-plan"], [3, "ionChange"], ["class", "policy-container", 4, "ngFor", "ngForOf"], [1, "note"], ["text-center", "", "align-items-center", ""], [1, "btn_center", 3, "disabled", "click"], [1, "policy-container"], ["lines", "none", "size", "12", "lines", "none"], ["slot", "start", "mode", "md", 3, "value"], [2, "color", "white"], ["size", "12", 1, "plan-container"], [1, "user-name"]],
  template: function EMedicalCardPage_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "ion-header", 0)(1, "ion-toolbar", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](2, "ion-menu-button", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "ion-title");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4, " E-Medical Card ");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "ion-content", 3)(6, "section", 4)(7, "div", 5)(8, "ion-label", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](9, "Select Policy");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "div", 7)(11, "div")(12, "ion-radio-group", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ionChange", function EMedicalCardPage_Template_ion_radio_group_ionChange_12_listener($event) {
        return ctx.onSelectPolicy($event.detail.value);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](13, EMedicalCardPage_ion_row_13_Template, 10, 4, "ion-row", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "p", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](15, "* Life Assured / Person covered");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](16, "p", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](17, "- Plans eligible for Medical cards are shown here");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](18, "ion-row", 11)(19, "ion-col")(20, "ion-button", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function EMedicalCardPage_Template_ion_button_click_20_listener() {
        return ctx.submitPolicy();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](21, "Submit");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](13);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.policyList);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("disabled", !ctx.enableButton);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.NgForOf, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonButton, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonCol, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonContent, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonHeader, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonItem, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonLabel, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonMenuButton, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonRadio, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonRadioGroup, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonRow, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonTitle, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonToolbar, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.RadioValueAccessor, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.SelectValueAccessor],
  styles: [".policy-container[_ngcontent-%COMP%] {\n  border: 1px solid var(--ion-color-secondary);\n  margin-bottom: 12px;\n}\n.policy-container[_ngcontent-%COMP%]   .radio-container[_ngcontent-%COMP%] {\n  background: var(--ion-color-secondary);\n  margin-bottom: 0;\n  padding: 8px;\n}\n.policy-container[_ngcontent-%COMP%]   .radio-container[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%] {\n  color: white !important;\n}\n.policy-container[_ngcontent-%COMP%]   .radio-container[_ngcontent-%COMP%]   .radio-checked[_ngcontent-%COMP%] {\n  border-color: #fff;\n}\n.policy-container[_ngcontent-%COMP%]   .radio-container[_ngcontent-%COMP%]   .radio-checked[_ngcontent-%COMP%]   .radio-inner[_ngcontent-%COMP%] {\n  background-color: #fff;\n}\n.policy-container[_ngcontent-%COMP%]   .radio-container[_ngcontent-%COMP%]   .radio-icon[_ngcontent-%COMP%] {\n  border-color: #fff;\n}\n.policy-container[_ngcontent-%COMP%]   .plan-container[_ngcontent-%COMP%] {\n  display: block;\n  padding: 8px;\n}\n.policy-container[_ngcontent-%COMP%]   .plan-container[_ngcontent-%COMP%]   .user-name[_ngcontent-%COMP%] {\n  font-weight: bold;\n  margin-bottom: 4px;\n}\n\n.text_color_base[_ngcontent-%COMP%] {\n  color: var(--ion-color-secondary) !important;\n}\n\n.white_container_border_radius[_ngcontent-%COMP%] {\n  background-color: rgba(255, 255, 255, 0.7) !important;\n  border-radius: 15px !important;\n  margin: 15px;\n  padding: 15px;\n}\n\n.btn_center[_ngcontent-%COMP%] {\n  text-transform: capitalize;\n  --background: #002d3d !important;\n  color: white;\n  margin-top: 15px;\n  --border-radius: 10px !important;\n  min-width: 200px;\n  min-height: 45px;\n  width: 100% !important;\n  font-family: Agenda-Regular !important;\n}\n\nion-item[_ngcontent-%COMP%] {\n  padding: -8px;\n  --background: #002d3d;\n  width: 100%;\n}\n\n.item[_ngcontent-%COMP%]   .sc-ion-label-md-h[_ngcontent-%COMP%] {\n  --color: initial;\n  display: block;\n  color: white;\n  font-family: Agenda-Regular !important;\n  font-size: inherit;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  overflow: hidden;\n  box-sizing: border-box;\n}\n\n.radio-icon[_ngcontent-%COMP%] {\n  margin: 0px;\n  border-radius: var(--border-radius);\n  border-width: var(--border-width);\n  border-style: var(--border-style);\n  border-color: white;\n}\n\nion-radio[_ngcontent-%COMP%] {\n  --color-checked: white !important;\n}\n\nion-label.item-radio-checked[_ngcontent-%COMP%] {\n  --color: white;\n}\n\na[_ngcontent-%COMP%] {\n  background-color: transparent;\n  color: #007bff;\n}\n\n.alert-wrapper[_ngcontent-%COMP%]   .alert-head[_ngcontent-%COMP%]   .alert-title[_ngcontent-%COMP%] {\n  margin-top: 0;\n  padding: 16px 16px 0;\n  font-size: 18px;\n}\n\n.alert-wrapper[_ngcontent-%COMP%]   .alert-message[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n  min-height: 80px;\n  padding: 16px !important;\n  text-align: left;\n}\n\n.alert-wrapper[_ngcontent-%COMP%]   .alert-button-group[_ngcontent-%COMP%] {\n  border-top: 1px solid #9a9a9a;\n  padding: 16px 24px;\n  display: block;\n}\n\n.alert-wrapper[_ngcontent-%COMP%]   .alert-button-group[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  background: #febe10;\n  border-radius: 4px;\n  color: #002d3d;\n  font-weight: bold;\n  flex: inherit;\n  min-width: 225px;\n  padding: 8px;\n  text-transform: capitalize;\n  margin-bottom: 5px;\n  \n  align-items: center;\n}\n\n.proceed-btn[_ngcontent-%COMP%] {\n  display: none;\n}\n\n.cancel-btn[_ngcontent-%COMP%] {\n  display: block;\n}\n\n.heading[_ngcontent-%COMP%] {\n  font-size: large;\n}\n\n.note[_ngcontent-%COMP%] {\n  margin-top: 0;\n  margin-bottom: 0em;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcGFnZXMvZS1tZWRpY2FsLWNhcmQvZS1tZWRpY2FsLWNhcmQucGFnZS5zY3NzIiwid2VicGFjazovLy4vLi4vLi4vLi4vQWxsJTIwUHJvamVjdHMvTWFsYXlzaWFfQ2xpZW50QXBwX1JldmFtcC9TdW5BY2Nlc3NfSW9uaWM2X1JldmFtcC9zcmMvYXBwL3BhZ2VzL2UtbWVkaWNhbC1jYXJkL2UtbWVkaWNhbC1jYXJkLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLDRDQUFBO0VBQ0EsbUJBQUE7QUNDSjtBREFJO0VBQ0ksc0NBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7QUNFUjtBRERRO0VBQ0ksdUJBQUE7QUNHWjtBRERRO0VBQ0ksa0JBQUE7QUNHWjtBREZZO0VBQ0ksc0JBQUE7QUNJaEI7QUREUTtFQUNJLGtCQUFBO0FDR1o7QURBSTtFQUNJLGNBQUE7RUFDQSxZQUFBO0FDRVI7QUREUTtFQUNJLGlCQUFBO0VBQ0Esa0JBQUE7QUNHWjs7QURDQTtFQUNJLDRDQUFBO0FDRUo7O0FEQUE7RUFDSSxxREFBQTtFQUNBLDhCQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7QUNHSjs7QUREQTtFQUNJLDBCQUFBO0VBQ0EsZ0NBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQ0FBQTtFQUNBLGdCQUFBO0VBR0EsZ0JBQUE7RUFDQSxzQkFBQTtFQUNBLHNDQUFBO0FDRUo7O0FEQUU7RUFDRSxhQUFBO0VBQ0EscUJBQUE7RUFFSSxXQUFBO0FDRVI7O0FEQ0E7RUFDSSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxZQUFBO0VBQ0Esc0NBQUE7RUFDQSxrQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUVBLHNCQUFBO0FDRUo7O0FEQUE7RUFDSSxXQUFBO0VBQ0EsbUNBQUE7RUFDQSxpQ0FBQTtFQUNBLGlDQUFBO0VBQ0EsbUJBQUE7QUNHSjs7QURBQTtFQUNJLGlDQUFBO0FDR0o7O0FEQUU7RUFDRSxjQUFBO0FDR0o7O0FESUE7RUFDSSw2QkFBQTtFQUNBLGNBQUE7QUNESjs7QURHRTtFQUNFLGFBQUE7RUFDQSxvQkFBQTtFQUNBLGVBQUE7QUNBSjs7QURFRTtFQUNFLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSx3QkFBQTtFQUNBLGdCQUFBO0FDQ0o7O0FEQ0U7RUFDRSw2QkFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtBQ0VKOztBREFBO0VBQ0ksbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtFQUNBLGFBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSwwQkFBQTtFQUNBLGtCQUFBO0VBQ0Esd0JBQUE7RUFDQSxtQkFBQTtBQ0dKOztBRERBO0VBQ0ksYUFBQTtBQ0lKOztBREZBO0VBQ0ksY0FBQTtBQ0tKOztBREhBO0VBQ0ksZ0JBQUE7QUNNSjs7QURKQTtFQUNRLGFBQUE7RUFDQSxrQkFBQTtBQ09SIiwic291cmNlc0NvbnRlbnQiOlsiLnBvbGljeS1jb250YWluZXIge1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0taW9uLWNvbG9yLXNlY29uZGFyeSk7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMnB4O1xyXG4gICAgLnJhZGlvLWNvbnRhaW5lciB7XHJcbiAgICAgICAgYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXNlY29uZGFyeSk7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMDtcclxuICAgICAgICBwYWRkaW5nOiA4cHg7XHJcbiAgICAgICAgaW9uLWxhYmVsIHtcclxuICAgICAgICAgICAgY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7IFxyXG4gICAgICAgIH1cclxuICAgICAgICAucmFkaW8tY2hlY2tlZCB7XHJcbiAgICAgICAgICAgIGJvcmRlci1jb2xvcjogI2ZmZjtcclxuICAgICAgICAgICAgLnJhZGlvLWlubmVyIHtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLnJhZGlvLWljb24ge1xyXG4gICAgICAgICAgICBib3JkZXItY29sb3I6ICNmZmY7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLnBsYW4tY29udGFpbmVyIHtcclxuICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICBwYWRkaW5nOiA4cHg7XHJcbiAgICAgICAgLnVzZXItbmFtZSB7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiA0cHg7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbi50ZXh0X2NvbG9yX2Jhc2Uge1xyXG4gICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1zZWNvbmRhcnkpICFpbXBvcnRhbnQ7XHJcbn1cclxuLndoaXRlX2NvbnRhaW5lcl9ib3JkZXJfcmFkaXVzIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC43KSAhaW1wb3J0YW50O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTVweCAhaW1wb3J0YW50O1xyXG4gICAgbWFyZ2luOiAxNXB4O1xyXG4gICAgcGFkZGluZzogMTVweDtcclxufVxyXG4uYnRuX2NlbnRlciB7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcclxuICAgIC0tYmFja2dyb3VuZDogIzAwMmQzZCAhaW1wb3J0YW50O1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgbWFyZ2luLXRvcDogMTVweDtcclxuICAgIC0tYm9yZGVyLXJhZGl1czogMTBweCAhaW1wb3J0YW50O1xyXG4gICAgbWluLXdpZHRoOiAyMDBweDtcclxuICAgIC8vIG1hcmdpbi1sZWZ0OiAtMzFweDtcclxuICAgIC8vZm9udC1zaXplOiAxLjdyZW07XHJcbiAgICBtaW4taGVpZ2h0OiA0NXB4O1xyXG4gICAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcclxuICAgIGZvbnQtZmFtaWx5OiBBZ2VuZGEtUmVndWxhciAhaW1wb3J0YW50O1xyXG4gIH1cclxuICBpb24taXRlbSB7XHJcbiAgICBwYWRkaW5nOiAtOHB4O1xyXG4gICAgLS1iYWNrZ3JvdW5kOiAjMDAyZDNkO1xyXG4gIFxyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gXHJcbn1cclxuLml0ZW0gLnNjLWlvbi1sYWJlbC1tZC1oIHtcclxuICAgIC0tY29sb3I6IGluaXRpYWw7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGZvbnQtZmFtaWx5OiBBZ2VuZGEtUmVndWxhciAhaW1wb3J0YW50O1xyXG4gICAgZm9udC1zaXplOiBpbmhlcml0O1xyXG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XHJcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIC13ZWJraXQtYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbn1cclxuLnJhZGlvLWljb24ge1xyXG4gICAgbWFyZ2luOiAwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiB2YXIoLS1ib3JkZXItcmFkaXVzKTtcclxuICAgIGJvcmRlci13aWR0aDogdmFyKC0tYm9yZGVyLXdpZHRoKTtcclxuICAgIGJvcmRlci1zdHlsZTogdmFyKC0tYm9yZGVyLXN0eWxlKTtcclxuICAgIGJvcmRlci1jb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbmlvbi1yYWRpb3tcclxuICAgIC0tY29sb3ItY2hlY2tlZDogd2hpdGUgIWltcG9ydGFudDtcclxuICB9XHJcbiAgXHJcbiAgaW9uLWxhYmVsLml0ZW0tcmFkaW8tY2hlY2tlZCB7XHJcbiAgICAtLWNvbG9yOiB3aGl0ZTtcclxuICB9XHJcbiAgXHJcbi8vICAgLml0ZW0tcmFkaW8tY2hlY2tlZCBpb24tbGFiZWwge1xyXG4vLyAgICAgLS1jb2xvcjogd2hpdGUhaW1wb3J0YW50O1xyXG4vLyAgIH1cclxuXHJcbmEge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICBjb2xvcjogIzAwN2JmZjtcclxuICB9XHJcbiAgLmFsZXJ0LXdyYXBwZXIgLmFsZXJ0LWhlYWQgLmFsZXJ0LXRpdGxlIHtcclxuICAgIG1hcmdpbi10b3A6IDA7XHJcbiAgICBwYWRkaW5nOiAxNnB4IDE2cHggMDtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuICB9XHJcbiAgLmFsZXJ0LXdyYXBwZXIgLmFsZXJ0LW1lc3NhZ2Uge1xyXG4gICAgZm9udC1zaXplOiAwLjhyZW07XHJcbiAgICBtaW4taGVpZ2h0OiA4MHB4O1xyXG4gICAgcGFkZGluZzogMTZweCAhaW1wb3J0YW50O1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICB9XHJcbiAgLmFsZXJ0LXdyYXBwZXIgLmFsZXJ0LWJ1dHRvbi1ncm91cCB7XHJcbiAgICBib3JkZXItdG9wOiAxcHggc29saWQgIzlhOWE5YTtcclxuICAgIHBhZGRpbmc6IDE2cHggMjRweDtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG59XHJcbi5hbGVydC13cmFwcGVyIC5hbGVydC1idXR0b24tZ3JvdXAgYnV0dG9uIHtcclxuICAgIGJhY2tncm91bmQ6ICNmZWJlMTA7XHJcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICBjb2xvcjogIzAwMmQzZDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgZmxleDogaW5oZXJpdDtcclxuICAgIG1pbi13aWR0aDogMjI1cHg7XHJcbiAgICBwYWRkaW5nOiA4cHg7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcclxuICAgIG1hcmdpbi1ib3R0b206IDVweDtcclxuICAgIC8qIHRleHQtYWxpZ246IGNlbnRlcjsgKi9cclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuLnByb2NlZWQtYnRue1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxufVxyXG4uY2FuY2VsLWJ0bntcclxuICAgIGRpc3BsYXk6IGJsb2NrOyBcclxufVxyXG4uaGVhZGluZ3tcclxuICAgIGZvbnQtc2l6ZTogbGFyZ2U7XHJcbn1cclxuLm5vdGV7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMDtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAwZW07XHJcbn0iLCIucG9saWN5LWNvbnRhaW5lciB7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWlvbi1jb2xvci1zZWNvbmRhcnkpO1xuICBtYXJnaW4tYm90dG9tOiAxMnB4O1xufVxuLnBvbGljeS1jb250YWluZXIgLnJhZGlvLWNvbnRhaW5lciB7XG4gIGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1zZWNvbmRhcnkpO1xuICBtYXJnaW4tYm90dG9tOiAwO1xuICBwYWRkaW5nOiA4cHg7XG59XG4ucG9saWN5LWNvbnRhaW5lciAucmFkaW8tY29udGFpbmVyIGlvbi1sYWJlbCB7XG4gIGNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xufVxuLnBvbGljeS1jb250YWluZXIgLnJhZGlvLWNvbnRhaW5lciAucmFkaW8tY2hlY2tlZCB7XG4gIGJvcmRlci1jb2xvcjogI2ZmZjtcbn1cbi5wb2xpY3ktY29udGFpbmVyIC5yYWRpby1jb250YWluZXIgLnJhZGlvLWNoZWNrZWQgLnJhZGlvLWlubmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbn1cbi5wb2xpY3ktY29udGFpbmVyIC5yYWRpby1jb250YWluZXIgLnJhZGlvLWljb24ge1xuICBib3JkZXItY29sb3I6ICNmZmY7XG59XG4ucG9saWN5LWNvbnRhaW5lciAucGxhbi1jb250YWluZXIge1xuICBkaXNwbGF5OiBibG9jaztcbiAgcGFkZGluZzogOHB4O1xufVxuLnBvbGljeS1jb250YWluZXIgLnBsYW4tY29udGFpbmVyIC51c2VyLW5hbWUge1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgbWFyZ2luLWJvdHRvbTogNHB4O1xufVxuXG4udGV4dF9jb2xvcl9iYXNlIHtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1zZWNvbmRhcnkpICFpbXBvcnRhbnQ7XG59XG5cbi53aGl0ZV9jb250YWluZXJfYm9yZGVyX3JhZGl1cyB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC43KSAhaW1wb3J0YW50O1xuICBib3JkZXItcmFkaXVzOiAxNXB4ICFpbXBvcnRhbnQ7XG4gIG1hcmdpbjogMTVweDtcbiAgcGFkZGluZzogMTVweDtcbn1cblxuLmJ0bl9jZW50ZXIge1xuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbiAgLS1iYWNrZ3JvdW5kOiAjMDAyZDNkICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgbWFyZ2luLXRvcDogMTVweDtcbiAgLS1ib3JkZXItcmFkaXVzOiAxMHB4ICFpbXBvcnRhbnQ7XG4gIG1pbi13aWR0aDogMjAwcHg7XG4gIG1pbi1oZWlnaHQ6IDQ1cHg7XG4gIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XG4gIGZvbnQtZmFtaWx5OiBBZ2VuZGEtUmVndWxhciAhaW1wb3J0YW50O1xufVxuXG5pb24taXRlbSB7XG4gIHBhZGRpbmc6IC04cHg7XG4gIC0tYmFja2dyb3VuZDogIzAwMmQzZDtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5pdGVtIC5zYy1pb24tbGFiZWwtbWQtaCB7XG4gIC0tY29sb3I6IGluaXRpYWw7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtZmFtaWx5OiBBZ2VuZGEtUmVndWxhciAhaW1wb3J0YW50O1xuICBmb250LXNpemU6IGluaGVyaXQ7XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICAtd2Via2l0LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG5cbi5yYWRpby1pY29uIHtcbiAgbWFyZ2luOiAwcHg7XG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLWJvcmRlci1yYWRpdXMpO1xuICBib3JkZXItd2lkdGg6IHZhcigtLWJvcmRlci13aWR0aCk7XG4gIGJvcmRlci1zdHlsZTogdmFyKC0tYm9yZGVyLXN0eWxlKTtcbiAgYm9yZGVyLWNvbG9yOiB3aGl0ZTtcbn1cblxuaW9uLXJhZGlvIHtcbiAgLS1jb2xvci1jaGVja2VkOiB3aGl0ZSAhaW1wb3J0YW50O1xufVxuXG5pb24tbGFiZWwuaXRlbS1yYWRpby1jaGVja2VkIHtcbiAgLS1jb2xvcjogd2hpdGU7XG59XG5cbmEge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgY29sb3I6ICMwMDdiZmY7XG59XG5cbi5hbGVydC13cmFwcGVyIC5hbGVydC1oZWFkIC5hbGVydC10aXRsZSB7XG4gIG1hcmdpbi10b3A6IDA7XG4gIHBhZGRpbmc6IDE2cHggMTZweCAwO1xuICBmb250LXNpemU6IDE4cHg7XG59XG5cbi5hbGVydC13cmFwcGVyIC5hbGVydC1tZXNzYWdlIHtcbiAgZm9udC1zaXplOiAwLjhyZW07XG4gIG1pbi1oZWlnaHQ6IDgwcHg7XG4gIHBhZGRpbmc6IDE2cHggIWltcG9ydGFudDtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbn1cblxuLmFsZXJ0LXdyYXBwZXIgLmFsZXJ0LWJ1dHRvbi1ncm91cCB7XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAjOWE5YTlhO1xuICBwYWRkaW5nOiAxNnB4IDI0cHg7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4uYWxlcnQtd3JhcHBlciAuYWxlcnQtYnV0dG9uLWdyb3VwIGJ1dHRvbiB7XG4gIGJhY2tncm91bmQ6ICNmZWJlMTA7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgY29sb3I6ICMwMDJkM2Q7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmbGV4OiBpbmhlcml0O1xuICBtaW4td2lkdGg6IDIyNXB4O1xuICBwYWRkaW5nOiA4cHg7XG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xuICBtYXJnaW4tYm90dG9tOiA1cHg7XG4gIC8qIHRleHQtYWxpZ246IGNlbnRlcjsgKi9cbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLnByb2NlZWQtYnRuIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuLmNhbmNlbC1idG4ge1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuLmhlYWRpbmcge1xuICBmb250LXNpemU6IGxhcmdlO1xufVxuXG4ubm90ZSB7XG4gIG1hcmdpbi10b3A6IDA7XG4gIG1hcmdpbi1ib3R0b206IDBlbTtcbn0iXSwic291cmNlUm9vdCI6IiJ9 */"]
});

/***/ })

}]);
//# sourceMappingURL=src_app_pages_e-medical-card_e-medical-card_module_ts.js.map