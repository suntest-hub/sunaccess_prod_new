"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_policy-details_policy-details_module_ts"],{

/***/ 66604:
/*!***********************************************************************!*\
  !*** ./src/app/pages/policy-details/policy-details-routing.module.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PolicyDetailsPageRoutingModule": () => (/* binding */ PolicyDetailsPageRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _policy_details_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./policy-details.page */ 80370);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);




const routes = [{
  path: '',
  component: _policy_details_page__WEBPACK_IMPORTED_MODULE_0__.PolicyDetailsPage
}];
class PolicyDetailsPageRoutingModule {}
PolicyDetailsPageRoutingModule.ɵfac = function PolicyDetailsPageRoutingModule_Factory(t) {
  return new (t || PolicyDetailsPageRoutingModule)();
};
PolicyDetailsPageRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
  type: PolicyDetailsPageRoutingModule
});
PolicyDetailsPageRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](PolicyDetailsPageRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
})();

/***/ }),

/***/ 96636:
/*!***************************************************************!*\
  !*** ./src/app/pages/policy-details/policy-details.module.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PolicyDetailsPageModule": () => (/* binding */ PolicyDetailsPageModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ 38699);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _policy_details_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./policy-details-routing.module */ 66604);
/* harmony import */ var _policy_details_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./policy-details.page */ 80370);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);







class PolicyDetailsPageModule {}
PolicyDetailsPageModule.ɵfac = function PolicyDetailsPageModule_Factory(t) {
  return new (t || PolicyDetailsPageModule)();
};
PolicyDetailsPageModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
  type: PolicyDetailsPageModule
});
PolicyDetailsPageModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__.TranslateModule, _policy_details_routing_module__WEBPACK_IMPORTED_MODULE_0__.PolicyDetailsPageRoutingModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](PolicyDetailsPageModule, {
    declarations: [_policy_details_page__WEBPACK_IMPORTED_MODULE_1__.PolicyDetailsPage],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__.TranslateModule, _policy_details_routing_module__WEBPACK_IMPORTED_MODULE_0__.PolicyDetailsPageRoutingModule]
  });
})();

/***/ }),

/***/ 80370:
/*!*************************************************************!*\
  !*** ./src/app/pages/policy-details/policy-details.page.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PolicyDetailsPage": () => (/* binding */ PolicyDetailsPage)
/* harmony export */ });
/* harmony import */ var http_status_codes__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! http-status-codes */ 92788);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _services_translate_config_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/translate-config.service */ 45340);
/* harmony import */ var src_providers_logger_service_logger_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/providers/logger-service/logger-service */ 9999);
/* harmony import */ var _getPolicyDetailsService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./getPolicyDetailsService */ 10293);
/* harmony import */ var src_providers_utils_utils_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/providers/utils/utils.service */ 30423);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/core */ 38699);
/* harmony import */ var src_providers_utils_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/providers/utils/config */ 43485);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic/angular */ 93819);











function PolicyDetailsPage_section_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "section", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "ion-spinner", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function PolicyDetailsPage_section_13_ion_button_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ion-button", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function PolicyDetailsPage_section_13_ion_button_3_Template_ion_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r5);
      const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r4.getPolicyDetails());
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
function PolicyDetailsPage_section_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "section", 19)(1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](3, PolicyDetailsPage_section_13_ion_button_3_Template, 3, 3, "ion-button", 20);
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
function PolicyDetailsPage_section_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "section");
  }
}
const _c0 = function (a0, a1) {
  return {
    "bg-conventional": a0,
    "bg-takaful": a1
  };
};
class PolicyDetailsPage {
  constructor(router, translateConfigService, logger, policyDetailsServcie, utils, translate, config) {
    this.router = router;
    this.translateConfigService = translateConfigService;
    this.logger = logger;
    this.policyDetailsServcie = policyDetailsServcie;
    this.utils = utils;
    this.translate = translate;
    this.config = config;
    this.isShowingLoader = true;
    this.isServiceSuccess = false;
    this.canTryAgain = false;
    this.getPolicyDetailsResponse = {};
    this.selectedLanguage = this.translateConfigService.getDefaultLanguage();
    this.translateConfigService.setLanguage('en');
    this.config.currentPage.pageName = "PolicyDetailsPage";
    this.selectedPolicyData = history.state.policyData;
    this.selectedPlanType = this.selectedPolicyData['planType'];
    this.selectedPolicyNo = this.selectedPolicyData['policyNumber'];
    this.utils.analytics("policyDetails");
  }
  ionViewDidLoad() {
    this.logger.log('ionViewDidLoad PolicyDetailsPage');
  }
  /**
   * Here we are checking if service is success or not. if not success then we are calling service.
   */
  ionViewDidEnter() {
    if (!this.isServiceSuccess) {
      this.isShowingLoader = true;
      this.getPolicyDetails();
    }
  }
  /*navigate to plan descriptions page */
  navToPlanDescriptionPage() {
    if (this.isServiceSuccess) {
      this.router.navigate(['plan-descriptions'], {
        state: {
          policyDetailsData: this.getPolicyDetailsResponse,
          planType: this.selectedPlanType,
          policyNo: this.selectedPolicyNo
        }
      });
      //this.router.navigate(State{policyDetailsData : this.getPolicyDetailsResponse,planType:this.selectedPlanType,policyNo:this.selectedPolicyNo});
    }
  }
  /*navigate to benefits page page */
  navToPlanBenefitsPage() {
    if (this.isServiceSuccess) {
      this.router.navigate(['plan-benifits'], {
        state: {
          policyDetailsData: this.getPolicyDetailsResponse,
          planType: this.selectedPlanType,
          policyNo: this.selectedPolicyNo
        }
      });
      //this.navCtrl.push(PlanBenifitsPage,{policyDetailsData : this.getPolicyDetailsResponse,planType:this.selectedPlanType,policyNo:this.selectedPolicyNo});
    }
  }
  /*navigate to benefits page page */
  navToPlanContactDetailsPage() {
    if (this.isServiceSuccess) {
      this.router.navigate(['contact-details'], {
        state: {
          policyDetailsData: this.getPolicyDetailsResponse,
          planType: this.selectedPlanType,
          policyNo: this.selectedPolicyNo
        }
      });
      //this.navCtrl.push(ContactDetailsPage,{policyDetailsData : this.getPolicyDetailsResponse,planType:this.selectedPlanType,policyNo:this.selectedPolicyNo});
    }
  }
  /*navigate to benefits page page */
  navToPlanAgentDetailsPage() {
    if (this.isServiceSuccess) {
      this.router.navigate(['plan-agent-details'], {
        state: {
          policyDetailsData: this.getPolicyDetailsResponse,
          planType: this.selectedPlanType,
          policyNo: this.selectedPolicyNo
        }
      });
      //this.navCtrl.push(PlanAgentDetailsPage,{policyDetailsData : this.getPolicyDetailsResponse,planType:this.selectedPlanType,policyNo:this.selectedPolicyNo});
    }
  }
  /*navigate to nominations  page */
  navToPlanNominationsPage() {
    if (this.isServiceSuccess) {
      this.router.navigate(['nominations'], {
        state: {
          policyDetailsData: this.getPolicyDetailsResponse,
          planType: this.selectedPlanType,
          policyNo: this.selectedPolicyNo
        }
      });
      //this.navCtrl.push(NominationsPage,{policyDetailsData : this.getPolicyDetailsResponse,planType:this.selectedPlanType,policyNo:this.selectedPolicyNo});
    }
  }
  /*navigate to nominations  page */
  navToPlanEpaymentInfoPage() {
    if (this.isServiceSuccess) {
      this.router.navigate(['plan-epayment-info'], {
        state: {
          policyDetailsData: this.getPolicyDetailsResponse,
          planType: this.selectedPlanType,
          policyNo: this.selectedPolicyNo
        }
      });
      //this.navCtrl.push(PlanEpaymentInfoPage,{policyDetailsData : this.getPolicyDetailsResponse,planType:this.selectedPlanType,policyNo:this.selectedPolicyNo});
    }
  }
  /*navigate to nominations  page */
  navToPlanAssigneesPage() {
    if (this.isServiceSuccess) {
      this.router.navigate(['plan-assignees'], {
        state: {
          policyDetailsData: this.getPolicyDetailsResponse,
          planType: this.selectedPlanType,
          policyNo: this.selectedPolicyNo
        }
      });
      //this.navCtrl.push(PlanAssigneesPage,{policyDetailsData : this.getPolicyDetailsResponse,planType:this.selectedPlanType,policyNo:this.selectedPolicyNo});
    }
  }
  /*navigate to nominations  page */
  navToPlanTrusteesPage() {
    if (this.isServiceSuccess) {
      this.router.navigate(['plan-trustees'], {
        state: {
          policyDetailsData: this.getPolicyDetailsResponse,
          planType: this.selectedPlanType,
          policyNo: this.selectedPolicyNo
        }
      });
      //this.navCtrl.push(PlanTrusteesPage,{policyDetailsData : this.getPolicyDetailsResponse,planType:this.selectedPlanType,policyNo:this.selectedPolicyNo});
    }
  }
  /*Adapter call to Get policy descriptions*/
  getPolicyDetails() {
    if (this.utils.isDeviceOnLine()) {
      this.policyDetailsServcie.getPolicyDetails(this.selectedPolicyData['encryptedPolicyNo']).then(res => {
        this.logger.debug("getPolicyDetails service result : " + JSON.stringify(res));
        try {
          this.isShowingLoader = false;
          if (res['responseJSON'] && res['responseJSON']['statusCode'] == http_status_codes__WEBPACK_IMPORTED_MODULE_6__.OK) {
            this.isServiceSuccess = true;
            this.getPolicyDetailsResponse = res['responseJSON'];
          } else {
            this.isServiceSuccess = false;
            this.canTryAgain = true;
            this.errorMsg = res['responseJSON']['error_description'];
          }
        } catch (e) {
          this.isServiceSuccess = false;
          this.isShowingLoader = false;
          this.canTryAgain = true;
          this.errorMsg = this.translate.instant('generic_msgs.server_err');
          this.logger.error("getPolicyDetails catch eror : " + JSON.stringify(e));
        }
      }, err => {
        this.logger.error("getPolicyDetails catch eror : " + JSON.stringify(err));
        this.isServiceSuccess = false;
        this.isShowingLoader = false;
        this.canTryAgain = true;
        this.errorMsg = this.utils.handleServiceException(err);
      });
    } else {
      this.isServiceSuccess = false;
      this.isShowingLoader = false;
      this.canTryAgain = true;
      this.errorMsg = this.translate.instant('generic_msgs.network_err');
    }
  }
}
PolicyDetailsPage.ɵfac = function PolicyDetailsPage_Factory(t) {
  return new (t || PolicyDetailsPage)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_services_translate_config_service__WEBPACK_IMPORTED_MODULE_0__.TranslateConfigService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_providers_logger_service_logger_service__WEBPACK_IMPORTED_MODULE_1__.LoggerServiceProvider), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_getPolicyDetailsService__WEBPACK_IMPORTED_MODULE_2__.GetPolicyDetailsService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_providers_utils_utils_service__WEBPACK_IMPORTED_MODULE_3__.UtilService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__.TranslateService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_providers_utils_config__WEBPACK_IMPORTED_MODULE_4__.ConfigProvider));
};
PolicyDetailsPage.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
  type: PolicyDetailsPage,
  selectors: [["app-policy-details"]],
  decls: 65,
  vars: 32,
  consts: [["mode", "ios"], ["color", "primary", 2, "border-bottom", "3px solid white"], ["slot", "start"], ["text", "", "icon", "chevron-back-outline", 2, "padding-left", "15px", "font-size", "0.7rem"], [1, "bold-font"], ["color", "primary", 1, "tabs"], [2, "margin-bottom", "5px", 3, "ngClass"], [1, "sub-header"], ["padding", "", "no-bounce", "", 1, "app_bg", "text_color_base"], ["class", "spinnersection ion-text-center", 4, "ngIf"], ["class", "errorMsgSection white_container_border_radius", 4, "ngIf"], [4, "ngIf"], [1, "white_container_border_radius", "text_color_base", "margin", "ion-padding"], [1, "font", 3, "click"], ["size", "10", 1, "margin_top_bottom_auto", "font-size_20"], ["size", "2", 1, "margin_top_bottom_auto", "ion-text-center"], [1, "fas", "fa-angle-right", "font_size_20"], [1, "spinnersection", "ion-text-center"], ["name", "lines-sharp-small", 2, "height", "98%"], [1, "errorMsgSection", "white_container_border_radius"], [3, "click", 4, "ngIf"], [3, "click"]],
  template: function PolicyDetailsPage_Template(rf, ctx) {
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
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](12, PolicyDetailsPage_section_12_Template, 2, 0, "section", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](13, PolicyDetailsPage_section_13_Template, 4, 2, "section", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](14, PolicyDetailsPage_section_14_Template, 1, 0, "section", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](15, "ion-list", 12)(16, "ion-row", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function PolicyDetailsPage_Template_ion_row_click_16_listener() {
        return ctx.navToPlanDescriptionPage();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](17, "ion-col", 14)(18, "ion-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](19);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](20, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](21, "ion-col", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](22, "i", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](23, "ion-row", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function PolicyDetailsPage_Template_ion_row_click_23_listener() {
        return ctx.navToPlanBenefitsPage();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](24, "ion-col", 14)(25, "ion-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](26);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](27, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](28, "ion-col", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](29, "i", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](30, "ion-row", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function PolicyDetailsPage_Template_ion_row_click_30_listener() {
        return ctx.navToPlanContactDetailsPage();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](31, "ion-col", 14)(32, "ion-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](33);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](34, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](35, "ion-col", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](36, "i", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](37, "ion-row", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function PolicyDetailsPage_Template_ion_row_click_37_listener() {
        return ctx.navToPlanNominationsPage();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](38, "ion-col", 14)(39, "ion-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](40);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](41, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](42, "ion-col", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](43, "i", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](44, "ion-row", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function PolicyDetailsPage_Template_ion_row_click_44_listener() {
        return ctx.navToPlanAssigneesPage();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](45, "ion-col", 14)(46, "ion-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](47);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](48, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](49, "ion-col", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](50, "i", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](51, "ion-row", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function PolicyDetailsPage_Template_ion_row_click_51_listener() {
        return ctx.navToPlanTrusteesPage();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](52, "ion-col", 14)(53, "ion-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](54);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](55, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](56, "ion-col", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](57, "i", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](58, "ion-row", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function PolicyDetailsPage_Template_ion_row_click_58_listener() {
        return ctx.navToPlanAgentDetailsPage();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](59, "ion-col", 14)(60, "ion-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](61);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](62, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](63, "ion-col", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](64, "i", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", ctx.selectedPolicyData["policyNumber"], "");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction2"](29, _c0, ctx.selectedPlanType === "Conventional", ctx.selectedPlanType !== "Conventional"));
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](10, 13, "plan_details_page.sub_title"));
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.isShowingLoader);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx.getPolicyDetailsResponse && !ctx.isShowingLoader);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.getPolicyDetailsResponse && !ctx.isShowingLoader);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](20, 15, "plan_details_page.plan_descriptions"));
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](27, 17, "plan_details_page.benefits"));
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](34, 19, "plan_details_page.cantact_details"));
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](41, 21, "plan_details_page.nominations"));
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](48, 23, "plan_details_page.assignees"));
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](55, 25, "plan_details_page.trustees"));
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](62, 27, "plan_details_page.agent_info"));
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgIf, _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.IonBackButton, _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.IonButton, _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.IonButtons, _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.IonCol, _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.IonContent, _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.IonHeader, _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.IonLabel, _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.IonList, _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.IonRow, _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.IonSpinner, _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.IonTitle, _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.IonToolbar, _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.IonBackButtonDelegate, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__.TranslatePipe],
  styles: ["ion-content[_ngcontent-%COMP%] {\n  --background: url('app_bg_2.jpg') no-repeat center center / cover;\n}\nion-content[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%] {\n  text-align: center;\n}\n\n.white_container_border_radius[_ngcontent-%COMP%] {\n  background-color: rgba(255, 255, 255, 0.7) !important;\n  border-radius: 15px !important;\n}\n\n.tabs[_ngcontent-%COMP%] {\n  border-top: 3px solid color white;\n  --padding-top: -4px;\n  --padding-start: -4px;\n  --padding-end: -4px;\n  --min-height: 44px;\n}\n\n.sub-header[_ngcontent-%COMP%] {\n  color: #ffffff;\n  padding: 10px 25px !important;\n  margin: 0px !important;\n  font-size: 1.1rem !important;\n  font-family: Agenda-Regular;\n}\n\n.text_color_base[_ngcontent-%COMP%] {\n  color: #002d3d;\n}\n\n.margin_top_bottom_auto[_ngcontent-%COMP%] {\n  margin-top: auto;\n  margin-bottom: auto;\n}\n\n.font_size_20[_ngcontent-%COMP%] {\n  font-size: 1.5rem !important;\n}\n\nion-row[_ngcontent-%COMP%] {\n  border-bottom: 2px solid rgba(0, 45, 61, 0.3);\n}\n\nion-row[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n}\n\n.margin[_ngcontent-%COMP%] {\n  padding: 5px;\n  margin: 15px;\n}\n\n.bold-font[_ngcontent-%COMP%] {\n  margin-top: 2px;\n  font-size: 20px;\n  font-weight: bold;\n  color: #002d3d;\n}\n\n.font[_ngcontent-%COMP%] {\n  padding: 10px;\n  font-size: 15px;\n}\n\n.spinnersection[_ngcontent-%COMP%] {\n  display: block;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  font-size: 1.3rem;\n  height: 98%;\n}\n\n.errorMsgSection[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  height: 98%;\n  font-size: 0.8rem;\n  color: #494747 !important;\n  padding: 0px 15px;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcGFnZXMvcG9saWN5LWRldGFpbHMvcG9saWN5LWRldGFpbHMucGFnZS5zY3NzIiwid2VicGFjazovLy4vLi4vLi4vLi4vQWxsJTIwUHJvamVjdHMvTWFsYXlzaWFfQ2xpZW50QXBwX1JldmFtcC9TdW5BY2Nlc3NfSW9uaWM2X1JldmFtcC9zcmMvYXBwL3BhZ2VzL3BvbGljeS1kZXRhaWxzL3BvbGljeS1kZXRhaWxzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGlFQUFBO0FDQ0Y7QURDRTtFQUNJLGtCQUFBO0FDQ047O0FER0E7RUFDRSxxREFBQTtFQUNBLDhCQUFBO0FDQUY7O0FERUE7RUFDRSxpQ0FBQTtFQUNFLG1CQUFBO0VBQ0EscUJBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FDQ0o7O0FEQ0E7RUFDRSxjQUFBO0VBRUEsNkJBQUE7RUFDQSxzQkFBQTtFQUNBLDRCQUFBO0VBQ0EsMkJBQUE7QUNDRjs7QURFQTtFQUNFLGNBQUE7QUNDRjs7QURFQTtFQUNFLGdCQUFBO0VBQ0EsbUJBQUE7QUNDRjs7QURFQTtFQUNFLDRCQUFBO0FDQ0Y7O0FER0E7RUFDRSw2Q0FBQTtBQ0FGOztBRElBO0VBQ0UsbUJBQUE7QUNERjs7QURRQTtFQUNFLFlBQUE7RUFDQSxZQUFBO0FDTEY7O0FET0E7RUFDRSxlQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtBQ0pGOztBRFFBO0VBQ0UsYUFBQTtFQUNBLGVBQUE7QUNMRjs7QURPQTtFQUNFLGNBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLFdBQUE7QUNKRjs7QURPQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSx5QkFBQTtFQUNBLGlCQUFBO0FDSkYiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY29udGVudCB7XHJcbiAgLS1iYWNrZ3JvdW5kOiB1cmwoLi4vLi4vLi4vYXNzZXRzL2ltZ3MvYXBwX2JnXzIuanBnKSBuby1yZXBlYXQgY2VudGVyIGNlbnRlciAvIGNvdmVyO1xyXG5cclxuICBpb24tbGFiZWwge1xyXG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgfVxyXG59XHJcblxyXG4ud2hpdGVfY29udGFpbmVyX2JvcmRlcl9yYWRpdXMge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC43KSAhaW1wb3J0YW50O1xyXG4gIGJvcmRlci1yYWRpdXM6IDE1cHggIWltcG9ydGFudDtcclxufVxyXG4udGFic3tcclxuICBib3JkZXItdG9wOiAzcHggc29saWQgY29sb3Igd2hpdGU7XHJcbiAgICAtLXBhZGRpbmctdG9wOiAtNHB4O1xyXG4gICAgLS1wYWRkaW5nLXN0YXJ0OiAtNHB4O1xyXG4gICAgLS1wYWRkaW5nLWVuZDogLTRweDtcclxuICAgIC0tbWluLWhlaWdodDogNDRweDtcclxufVxyXG4uc3ViLWhlYWRlciB7XHJcbiAgY29sb3I6ICNmZmZmZmY7XHJcblxyXG4gIHBhZGRpbmc6IDEwcHggMjVweCAhaW1wb3J0YW50O1xyXG4gIG1hcmdpbjogMHB4ICFpbXBvcnRhbnQ7XHJcbiAgZm9udC1zaXplOiAxLjFyZW0gIWltcG9ydGFudDtcclxuICBmb250LWZhbWlseTogQWdlbmRhLVJlZ3VsYXI7XHJcbiAgLy9saW5lLWhlaWdodDogMjRweDs7XHJcbn1cclxuLnRleHRfY29sb3JfYmFzZSB7XHJcbiAgY29sb3I6ICMwMDJkM2Q7XHJcbn1cclxuXHJcbi5tYXJnaW5fdG9wX2JvdHRvbV9hdXRvIHtcclxuICBtYXJnaW4tdG9wOiBhdXRvO1xyXG4gIG1hcmdpbi1ib3R0b206IGF1dG87XHJcbn1cclxuXHJcbi5mb250X3NpemVfMjAge1xyXG4gIGZvbnQtc2l6ZTogMS41cmVtICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcblxyXG5pb24tcm93IHtcclxuICBib3JkZXItYm90dG9tOiAycHggc29saWQgcmdiYSgwLCA0NSwgNjEsIC4zKTtcclxuICAvL21hcmdpbi10b3A6IDVweDtcclxufVxyXG5cclxuaW9uLXJvdzpsYXN0LWNoaWxkIHtcclxuICBib3JkZXItYm90dG9tOiBub25lO1xyXG59XHJcblxyXG4vLyBpb24tbGFiZWx7XHJcbi8vICAgICBmb250LXNpemU6IDEuOHJlbSAhaW1wb3J0YW50O1xyXG4vLyB9XHJcblxyXG4ubWFyZ2luIHtcclxuICBwYWRkaW5nOiA1cHg7XHJcbiAgbWFyZ2luOiAxNXB4O1xyXG59XHJcbi5ib2xkLWZvbnQge1xyXG4gIG1hcmdpbi10b3A6IDJweDtcclxuICBmb250LXNpemU6IDIwcHg7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgY29sb3I6ICMwMDJkM2Q7XHJcbn1cclxuXHJcblxyXG4uZm9udCB7XHJcbiAgcGFkZGluZzogMTBweDtcclxuICBmb250LXNpemU6IDE1cHg7XHJcbn1cclxuLnNwaW5uZXJzZWN0aW9uIHtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgZm9udC1zaXplOiAxLjNyZW07XHJcbiAgaGVpZ2h0OiA5OCU7XHJcbn1cclxuXHJcbi5lcnJvck1zZ1NlY3Rpb24ge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGhlaWdodDogOTglO1xyXG4gIGZvbnQtc2l6ZTogMC44cmVtO1xyXG4gIGNvbG9yOiAjNDk0NzQ3ICFpbXBvcnRhbnQ7XHJcbiAgcGFkZGluZzogMHB4IDE1cHg7XHJcbn1cclxuXHJcblxyXG4iLCJpb24tY29udGVudCB7XG4gIC0tYmFja2dyb3VuZDogdXJsKC4uLy4uLy4uL2Fzc2V0cy9pbWdzL2FwcF9iZ18yLmpwZykgbm8tcmVwZWF0IGNlbnRlciBjZW50ZXIgLyBjb3Zlcjtcbn1cbmlvbi1jb250ZW50IGlvbi1sYWJlbCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLndoaXRlX2NvbnRhaW5lcl9ib3JkZXJfcmFkaXVzIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjcpICFpbXBvcnRhbnQ7XG4gIGJvcmRlci1yYWRpdXM6IDE1cHggIWltcG9ydGFudDtcbn1cblxuLnRhYnMge1xuICBib3JkZXItdG9wOiAzcHggc29saWQgY29sb3Igd2hpdGU7XG4gIC0tcGFkZGluZy10b3A6IC00cHg7XG4gIC0tcGFkZGluZy1zdGFydDogLTRweDtcbiAgLS1wYWRkaW5nLWVuZDogLTRweDtcbiAgLS1taW4taGVpZ2h0OiA0NHB4O1xufVxuXG4uc3ViLWhlYWRlciB7XG4gIGNvbG9yOiAjZmZmZmZmO1xuICBwYWRkaW5nOiAxMHB4IDI1cHggIWltcG9ydGFudDtcbiAgbWFyZ2luOiAwcHggIWltcG9ydGFudDtcbiAgZm9udC1zaXplOiAxLjFyZW0gIWltcG9ydGFudDtcbiAgZm9udC1mYW1pbHk6IEFnZW5kYS1SZWd1bGFyO1xufVxuXG4udGV4dF9jb2xvcl9iYXNlIHtcbiAgY29sb3I6ICMwMDJkM2Q7XG59XG5cbi5tYXJnaW5fdG9wX2JvdHRvbV9hdXRvIHtcbiAgbWFyZ2luLXRvcDogYXV0bztcbiAgbWFyZ2luLWJvdHRvbTogYXV0bztcbn1cblxuLmZvbnRfc2l6ZV8yMCB7XG4gIGZvbnQtc2l6ZTogMS41cmVtICFpbXBvcnRhbnQ7XG59XG5cbmlvbi1yb3cge1xuICBib3JkZXItYm90dG9tOiAycHggc29saWQgcmdiYSgwLCA0NSwgNjEsIDAuMyk7XG59XG5cbmlvbi1yb3c6bGFzdC1jaGlsZCB7XG4gIGJvcmRlci1ib3R0b206IG5vbmU7XG59XG5cbi5tYXJnaW4ge1xuICBwYWRkaW5nOiA1cHg7XG4gIG1hcmdpbjogMTVweDtcbn1cblxuLmJvbGQtZm9udCB7XG4gIG1hcmdpbi10b3A6IDJweDtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgY29sb3I6ICMwMDJkM2Q7XG59XG5cbi5mb250IHtcbiAgcGFkZGluZzogMTBweDtcbiAgZm9udC1zaXplOiAxNXB4O1xufVxuXG4uc3Bpbm5lcnNlY3Rpb24ge1xuICBkaXNwbGF5OiBibG9jaztcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMS4zcmVtO1xuICBoZWlnaHQ6IDk4JTtcbn1cblxuLmVycm9yTXNnU2VjdGlvbiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBoZWlnaHQ6IDk4JTtcbiAgZm9udC1zaXplOiAwLjhyZW07XG4gIGNvbG9yOiAjNDk0NzQ3ICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmc6IDBweCAxNXB4O1xufSJdLCJzb3VyY2VSb290IjoiIn0= */"]
});

/***/ })

}]);
//# sourceMappingURL=src_app_pages_policy-details_policy-details_module_ts.js.map