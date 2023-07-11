"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_claim-status-details_claim-status-details_module_ts"],{

/***/ 40813:
/*!***********************************************************************************!*\
  !*** ./src/app/pages/claim-status-details/claim-status-details-routing.module.ts ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ClaimStatusDetailsPageRoutingModule": () => (/* binding */ ClaimStatusDetailsPageRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _claim_status_details_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./claim-status-details.page */ 25690);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);




const routes = [{
  path: '',
  component: _claim_status_details_page__WEBPACK_IMPORTED_MODULE_0__.ClaimStatusDetailsPage
}];
class ClaimStatusDetailsPageRoutingModule {}
ClaimStatusDetailsPageRoutingModule.ɵfac = function ClaimStatusDetailsPageRoutingModule_Factory(t) {
  return new (t || ClaimStatusDetailsPageRoutingModule)();
};
ClaimStatusDetailsPageRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
  type: ClaimStatusDetailsPageRoutingModule
});
ClaimStatusDetailsPageRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](ClaimStatusDetailsPageRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
})();

/***/ }),

/***/ 69417:
/*!***************************************************************************!*\
  !*** ./src/app/pages/claim-status-details/claim-status-details.module.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ClaimStatusDetailsPageModule": () => (/* binding */ ClaimStatusDetailsPageModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _claim_status_details_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./claim-status-details-routing.module */ 40813);
/* harmony import */ var _claim_status_details_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./claim-status-details.page */ 25690);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ 38699);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);







class ClaimStatusDetailsPageModule {}
ClaimStatusDetailsPageModule.ɵfac = function ClaimStatusDetailsPageModule_Factory(t) {
  return new (t || ClaimStatusDetailsPageModule)();
};
ClaimStatusDetailsPageModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
  type: ClaimStatusDetailsPageModule
});
ClaimStatusDetailsPageModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule, _claim_status_details_routing_module__WEBPACK_IMPORTED_MODULE_0__.ClaimStatusDetailsPageRoutingModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__.TranslateModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](ClaimStatusDetailsPageModule, {
    declarations: [_claim_status_details_page__WEBPACK_IMPORTED_MODULE_1__.ClaimStatusDetailsPage],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule, _claim_status_details_routing_module__WEBPACK_IMPORTED_MODULE_0__.ClaimStatusDetailsPageRoutingModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__.TranslateModule]
  });
})();

/***/ }),

/***/ 25690:
/*!*************************************************************************!*\
  !*** ./src/app/pages/claim-status-details/claim-status-details.page.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ClaimStatusDetailsPage": () => (/* binding */ ClaimStatusDetailsPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _popover_content_popover_content_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../popover-content/popover-content.page */ 97716);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _claim_status_claimStatusService__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../claim-status/claimStatusService */ 45324);
/* harmony import */ var src_providers_utils_utils_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/providers/utils/utils.service */ 30423);
/* harmony import */ var src_providers_logger_service_logger_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/providers/logger-service/logger-service */ 9999);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ 38699);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 94666);









function ClaimStatusDetailsPage_section_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "section", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "ion-spinner", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
function ClaimStatusDetailsPage_ion_row_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "ion-row", 12)(1, "ion-col", 13)(2, "ion-label", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3, "Policy No");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "ion-col", 15)(5, "ion-label", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6, ":");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "ion-col", 16)(8, "ion-label", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r1.policyNumber);
  }
}
function ClaimStatusDetailsPage_ion_row_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "ion-row", 12)(1, "ion-col", 13)(2, "ion-label", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3, "Life Assured");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "ion-col", 15)(5, "ion-label", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6, ":");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "ion-col", 16)(8, "ion-label", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r2.lifeAssured);
  }
}
function ClaimStatusDetailsPage_ion_row_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "ion-row", 12)(1, "ion-col", 18)(2, "ion-label", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3, "Event Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "img", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ClaimStatusDetailsPage_ion_row_11_Template_img_click_4_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r8);
      const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r7.openPopup($event, "nine"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "ion-col", 15)(6, "ion-label", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](7, ":");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "ion-col", 16)(9, "ion-label", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r3.eventDate);
  }
}
function ClaimStatusDetailsPage_ion_row_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "ion-row", 20)(1, "ion-col", 13)(2, "ion-label", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3, "Claim Type");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "ion-col", 15)(5, "ion-label", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6, ":");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "ion-col", 16)(8, "ion-label", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r4.claimType);
  }
}
function ClaimStatusDetailsPage_div_13_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "div", 26)(3, "div")(4, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const data_r10 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](data_r10.claimStatus);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](data_r10.statusDate);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("", data_r10.remarks, " ");
  }
}
function ClaimStatusDetailsPage_div_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 21)(1, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, ClaimStatusDetailsPage_div_13_div_2_Template, 10, 3, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r5.claimDetailData);
  }
}
function ClaimStatusDetailsPage_div_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 12)(1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "* Please contact us at ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "a", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4, "1300-88-5055");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5, " or email ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "a", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](7, "wecare@sunlifemalaysia.com");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8, " for further enquiries.");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
}
class ClaimStatusDetailsPage {
  constructor(claimStatusService, utils, logger, translate, popOverCtrl) {
    this.claimStatusService = claimStatusService;
    this.utils = utils;
    this.logger = logger;
    this.translate = translate;
    this.popOverCtrl = popOverCtrl;
    this.isDataLoading = true;
    this.encryptedPolicyNo = history.state.encryptedPolicyNumber; //this.navParams.get('encryptedPolicyNumber');
    this.claimType = history.state.claimType; //this.navParams.get('claimType');
    this.noOfClaim = history.state.noOfClaim; //this.navParams.get('noOfClaim');
  }

  ngOnInit() {
    console.log('ionViewDidLoad ClaimStatusDetailPage');
    this.getClaimsDetailData();
  }
  // ionViewDidLoad() {
  //   console.log('ionViewDidLoad ClaimStatusDetailPage');
  //   this.getClaimsDetailData();
  // }
  getClaimsDetailData() {
    this.getClaimsDetail("");
  }
  getClaimsDetail(event) {
    if (this.utils.isDeviceOnLine()) {
      this.claimStatusService.getClaimsDetail(this.encryptedPolicyNo, this.claimType, this.noOfClaim).then(res => {
        this.isDataLoading = false;
        this.claimDetailData = res['responseJSON']['claimStatusDetails'];
        this.policyNumber = res['responseJSON'].policyNumber;
        this.lifeAssured = res['responseJSON'].lifeAssured;
        this.eventDate = res['responseJSON'].eventDate;
        if (event != "") {
          event.complete();
        }
      }, error => {
        if (event != "") {
          event.complete();
        }
        this.isDataLoading = false;
        this.canTryAgain = true;
        this.logger.error("Claim status Details --search policy by policynumber servcie catch eror : " + JSON.stringify(error));
        this.errorMsg = this.utils.handleServiceException(error);
      });
    } else {
      if (event != "") {
        event.complete();
      }
      this.claimDetailData = [];
      this.isDataLoading = false;
      this.canTryAgain = true;
      this.errorMsg = this.translate.instant('generic_msgs.network_err');
    }
  }
  openPopup(myEvent, textVal) {
    return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
      // let popover1 = this.popOverCtrl.create(PopoverContentPage, { msg: textVal }, { cssClass: 'custom-popover' });
      // popover1.present({
      //   ev: myEvent
      // })
      const popover = yield this.popOverCtrl.create({
        component: _popover_content_popover_content_page__WEBPACK_IMPORTED_MODULE_0__.PopoverContentPage,
        componentProps: {
          msg: textVal
        },
        cssClass: 'custom-popover'
      });
      yield popover.present(myEvent);
    });
  }
}
ClaimStatusDetailsPage.ɵfac = function ClaimStatusDetailsPage_Factory(t) {
  return new (t || ClaimStatusDetailsPage)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_claim_status_claimStatusService__WEBPACK_IMPORTED_MODULE_1__.ClaimStatusService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_providers_utils_utils_service__WEBPACK_IMPORTED_MODULE_2__.UtilService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_providers_logger_service_logger_service__WEBPACK_IMPORTED_MODULE_3__.LoggerServiceProvider), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__.TranslateService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_7__.PopoverController));
};
ClaimStatusDetailsPage.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
  type: ClaimStatusDetailsPage,
  selectors: [["app-claim-status-details"]],
  decls: 15,
  vars: 10,
  consts: [["mode", "ios"], ["color", "primary"], ["slot", "start"], ["text", "", "icon", "chevron-back-outline", 2, "padding-left", "15px", "font-size", "0.7rem"], [1, "bold-font"], ["no-bounce", "", "padding", "", 1, "app_bg2_white", "text_color_base"], ["class", "spinnersection", 4, "ngIf"], ["class", "row", 4, "ngIf"], ["class", "row margin-bottom", 4, "ngIf"], ["class", "margin-top", 4, "ngIf"], [1, "spinnersection"], ["name", "ios-small"], [1, "row"], ["col-5", ""], [1, "margin-none"], ["col-1", ""], ["col-6", ""], [1, "margin-none", "ion-data-content"], ["col-5", "", 1, "display-flex"], ["src", "assets/imgs/information-circle.svg", "alt", "information-circle", 3, "click"], [1, "row", "margin-bottom"], [1, "margin-top"], [1, "progress-bar"], ["class", "flex", 4, "ngFor", "ngForOf"], [1, "flex"], ["id", "circle"], [1, "padding"], [1, "statusDate"], ["href", "tel:1300-88-5055"], ["href", "mailto:wecare@sunlifemalaysia.com"]],
  template: function ClaimStatusDetailsPage_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "ion-header", 0)(1, "ion-toolbar", 1)(2, "ion-buttons", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](3, "ion-back-button", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "ion-title", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](6, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "ion-content", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](8, ClaimStatusDetailsPage_section_8_Template, 2, 0, "section", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](9, ClaimStatusDetailsPage_ion_row_9_Template, 10, 1, "ion-row", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](10, ClaimStatusDetailsPage_ion_row_10_Template, 10, 1, "ion-row", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](11, ClaimStatusDetailsPage_ion_row_11_Template, 11, 1, "ion-row", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](12, ClaimStatusDetailsPage_ion_row_12_Template, 10, 1, "ion-row", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](13, ClaimStatusDetailsPage_div_13_Template, 3, 1, "div", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](14, ClaimStatusDetailsPage_div_14_Template, 9, 0, "div", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](6, 8, "claim_status.title"));
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.isDataLoading);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx.isDataLoading);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx.isDataLoading);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx.isDataLoading);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx.isDataLoading);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx.isDataLoading);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx.isDataLoading);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgIf, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonBackButton, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonButtons, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonCol, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonContent, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonHeader, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonLabel, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonRow, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonSpinner, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonTitle, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonToolbar, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonBackButtonDelegate, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__.TranslatePipe],
  styles: [".flex[_ngcontent-%COMP%] {\n  position: relative;\n}\n.flex[_ngcontent-%COMP%]:before {\n  position: absolute;\n  background: #999;\n  width: 1px;\n  height: 100%;\n  display: block;\n  content: \"\";\n  left: 7px;\n  z-index: 1;\n  top: 0;\n}\n.flex[_ngcontent-%COMP%]:last-child::before {\n  height: 0;\n}\n\ndiv.progress-bar[_ngcontent-%COMP%] {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  overflow: hidden;\n}\ndiv.progress-bar[_ngcontent-%COMP%]   #circle[_ngcontent-%COMP%] {\n  background: rgb(100, 177, 69);\n  border-radius: 100px;\n  width: 15px;\n  height: 15px;\n  z-index: 1;\n  position: fixed;\n}\n\n.flex[_ngcontent-%COMP%] {\n  display: flex;\n}\n\n.padding[_ngcontent-%COMP%] {\n  margin-bottom: 24px;\n  padding-left: 40px;\n}\n.padding[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 18px;\n  line-height: 1;\n  margin: 0 !important;\n  font-weight: bold;\n  color: black;\n}\n\n.statusDate[_ngcontent-%COMP%] {\n  font-size: 16px;\n  margin: 2px 0;\n}\n\n.app_bg2_white[_ngcontent-%COMP%] {\n  background-color: white;\n}\n\n.row[_ngcontent-%COMP%] {\n  font-size: 18px;\n}\n.row[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 20px;\n}\n.row[_ngcontent-%COMP%]   .display-flex[_ngcontent-%COMP%] {\n  display: flex;\n}\n\n.margin-none[_ngcontent-%COMP%] {\n  margin: 0;\n}\n\n.margin-top[_ngcontent-%COMP%] {\n  margin-top: 40px;\n}\n\n.margin-bottom[_ngcontent-%COMP%] {\n  margin-bottom: 10px;\n}\n\n.ion-data-content[_ngcontent-%COMP%] {\n  white-space: pre-wrap !important;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcGFnZXMvY2xhaW0tc3RhdHVzLWRldGFpbHMvY2xhaW0tc3RhdHVzLWRldGFpbHMucGFnZS5zY3NzIiwid2VicGFjazovLy4vLi4vLi4vLi4vQWxsJTIwUHJvamVjdHMvTWFsYXlzaWFfQ2xpZW50QXBwX1JldmFtcC9TdW5BY2Nlc3NfSW9uaWM2X1JldmFtcC9zcmMvYXBwL3BhZ2VzL2NsYWltLXN0YXR1cy1kZXRhaWxzL2NsYWltLXN0YXR1cy1kZXRhaWxzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNJLGtCQUFBO0FDQUo7QURFSTtFQUNFLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7RUFDQSxXQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7RUFDQSxNQUFBO0FDQU47QURJTTtFQUNFLFNBQUE7QUNGUjs7QURPRTtFQUNFLGdCQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLDhCQUFBO0VBQ0EsZ0JBQUE7QUNKSjtBRE1JO0VBQ0UsNkJBQUE7RUFDQSxvQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtFQUNBLGVBQUE7QUNKTjs7QURRRTtFQUNFLGFBQUE7QUNMSjs7QURRRTtFQUNFLG1CQUFBO0VBQ0Esa0JBQUE7QUNMSjtBRE1JO0VBQ0UsZUFBQTtFQUNBLGNBQUE7RUFDQSxvQkFBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtBQ0pOOztBRFVFO0VBQ0UsZUFBQTtFQUNBLGFBQUE7QUNQSjs7QURVRTtFQUNFLHVCQUFBO0FDUEo7O0FEVUU7RUFDRSxlQUFBO0FDUEo7QURTSTtFQUNFLFdBQUE7QUNQTjtBRFVJO0VBQ0UsYUFBQTtBQ1JOOztBRFlFO0VBQ0UsU0FBQTtBQ1RKOztBRFlFO0VBQ0UsZ0JBQUE7QUNUSjs7QURZRTtFQUNFLG1CQUFBO0FDVEo7O0FEWUU7RUFDRSxnQ0FBQTtBQ1RKIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbi5mbGV4IHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHJcbiAgICAmOmJlZm9yZSB7XHJcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgYmFja2dyb3VuZDogIzk5OTtcclxuICAgICAgd2lkdGg6IDFweDtcclxuICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgY29udGVudDogJyc7XHJcbiAgICAgIGxlZnQ6IDdweDtcclxuICAgICAgei1pbmRleDogMTtcclxuICAgICAgdG9wOiAwO1xyXG4gICAgfVxyXG5cclxuICAgICY6bGFzdC1jaGlsZCB7XHJcbiAgICAgICY6OmJlZm9yZSB7XHJcbiAgICAgICAgaGVpZ2h0OiAwO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBkaXYucHJvZ3Jlc3MtYmFyIHtcclxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG5cclxuICAgICNjaXJjbGUge1xyXG4gICAgICBiYWNrZ3JvdW5kOiByZ2IoMTAwLCAxNzcsIDY5KTtcclxuICAgICAgYm9yZGVyLXJhZGl1czogMTAwcHg7XHJcbiAgICAgIHdpZHRoOiAxNXB4O1xyXG4gICAgICBoZWlnaHQ6IDE1cHg7XHJcbiAgICAgIHotaW5kZXg6IDE7XHJcbiAgICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5mbGV4IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgfVxyXG5cclxuICAucGFkZGluZyB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyNHB4O1xyXG4gICAgcGFkZGluZy1sZWZ0OiA0MHB4O1xyXG4gICAgaDMge1xyXG4gICAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICAgIGxpbmUtaGVpZ2h0OiAxO1xyXG4gICAgICBtYXJnaW46IDAgIWltcG9ydGFudDtcclxuICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgIGNvbG9yOiBibGFjaztcclxuICAgIH1cclxuXHJcbiAgICBcclxuICB9XHJcblxyXG4gIC5zdGF0dXNEYXRlIHtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIG1hcmdpbjogMnB4IDA7XHJcbiAgfVxyXG5cclxuICAuYXBwX2JnMl93aGl0ZSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICB9XHJcblxyXG4gIC5yb3cge1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG5cclxuICAgIGltZyB7XHJcbiAgICAgIHdpZHRoOiAyMHB4O1xyXG4gICAgfVxyXG5cclxuICAgIC5kaXNwbGF5LWZsZXgge1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLm1hcmdpbi1ub25lIHtcclxuICAgIG1hcmdpbjogMDtcclxuICB9XHJcblxyXG4gIC5tYXJnaW4tdG9wIHtcclxuICAgIG1hcmdpbi10b3A6IDQwcHg7XHJcbiAgfVxyXG5cclxuICAubWFyZ2luLWJvdHRvbSB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gIH1cclxuXHJcbiAgLmlvbi1kYXRhLWNvbnRlbnR7XHJcbiAgICB3aGl0ZS1zcGFjZTpwcmUtd3JhcCAhaW1wb3J0YW50O1xyXG4gIH1cclxuXHJcbiIsIi5mbGV4IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLmZsZXg6YmVmb3JlIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBiYWNrZ3JvdW5kOiAjOTk5O1xuICB3aWR0aDogMXB4O1xuICBoZWlnaHQ6IDEwMCU7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBjb250ZW50OiBcIlwiO1xuICBsZWZ0OiA3cHg7XG4gIHotaW5kZXg6IDE7XG4gIHRvcDogMDtcbn1cbi5mbGV4Omxhc3QtY2hpbGQ6OmJlZm9yZSB7XG4gIGhlaWdodDogMDtcbn1cblxuZGl2LnByb2dyZXNzLWJhciB7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5kaXYucHJvZ3Jlc3MtYmFyICNjaXJjbGUge1xuICBiYWNrZ3JvdW5kOiByZ2IoMTAwLCAxNzcsIDY5KTtcbiAgYm9yZGVyLXJhZGl1czogMTAwcHg7XG4gIHdpZHRoOiAxNXB4O1xuICBoZWlnaHQ6IDE1cHg7XG4gIHotaW5kZXg6IDE7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbn1cblxuLmZsZXgge1xuICBkaXNwbGF5OiBmbGV4O1xufVxuXG4ucGFkZGluZyB7XG4gIG1hcmdpbi1ib3R0b206IDI0cHg7XG4gIHBhZGRpbmctbGVmdDogNDBweDtcbn1cbi5wYWRkaW5nIGgzIHtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBsaW5lLWhlaWdodDogMTtcbiAgbWFyZ2luOiAwICFpbXBvcnRhbnQ7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBjb2xvcjogYmxhY2s7XG59XG5cbi5zdGF0dXNEYXRlIHtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBtYXJnaW46IDJweCAwO1xufVxuXG4uYXBwX2JnMl93aGl0ZSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xufVxuXG4ucm93IHtcbiAgZm9udC1zaXplOiAxOHB4O1xufVxuLnJvdyBpbWcge1xuICB3aWR0aDogMjBweDtcbn1cbi5yb3cgLmRpc3BsYXktZmxleCB7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG5cbi5tYXJnaW4tbm9uZSB7XG4gIG1hcmdpbjogMDtcbn1cblxuLm1hcmdpbi10b3Age1xuICBtYXJnaW4tdG9wOiA0MHB4O1xufVxuXG4ubWFyZ2luLWJvdHRvbSB7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG5cbi5pb24tZGF0YS1jb250ZW50IHtcbiAgd2hpdGUtc3BhY2U6IHByZS13cmFwICFpbXBvcnRhbnQ7XG59Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ })

}]);
//# sourceMappingURL=src_app_pages_claim-status-details_claim-status-details_module_ts.js.map