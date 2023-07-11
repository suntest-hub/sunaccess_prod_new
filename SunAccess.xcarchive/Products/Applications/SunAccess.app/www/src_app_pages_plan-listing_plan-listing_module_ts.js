"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_plan-listing_plan-listing_module_ts"],{

/***/ 51981:
/*!*******************************************************************!*\
  !*** ./src/app/pages/plan-listing/plan-listing-routing.module.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PlanListingPageRoutingModule": () => (/* binding */ PlanListingPageRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _plan_listing_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./plan-listing.page */ 45912);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);




const routes = [{
  path: '',
  component: _plan_listing_page__WEBPACK_IMPORTED_MODULE_0__.PlanListingPage
}];
class PlanListingPageRoutingModule {}
PlanListingPageRoutingModule.ɵfac = function PlanListingPageRoutingModule_Factory(t) {
  return new (t || PlanListingPageRoutingModule)();
};
PlanListingPageRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
  type: PlanListingPageRoutingModule
});
PlanListingPageRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](PlanListingPageRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
})();

/***/ }),

/***/ 26373:
/*!***********************************************************!*\
  !*** ./src/app/pages/plan-listing/plan-listing.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PlanListingPageModule": () => (/* binding */ PlanListingPageModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ 38699);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _plan_listing_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./plan-listing-routing.module */ 51981);
/* harmony import */ var _plan_listing_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./plan-listing.page */ 45912);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);







class PlanListingPageModule {}
PlanListingPageModule.ɵfac = function PlanListingPageModule_Factory(t) {
  return new (t || PlanListingPageModule)();
};
PlanListingPageModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
  type: PlanListingPageModule
});
PlanListingPageModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__.TranslateModule, _plan_listing_routing_module__WEBPACK_IMPORTED_MODULE_0__.PlanListingPageRoutingModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](PlanListingPageModule, {
    declarations: [_plan_listing_page__WEBPACK_IMPORTED_MODULE_1__.PlanListingPage],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__.TranslateModule, _plan_listing_routing_module__WEBPACK_IMPORTED_MODULE_0__.PlanListingPageRoutingModule]
  });
})();

/***/ }),

/***/ 45912:
/*!*********************************************************!*\
  !*** ./src/app/pages/plan-listing/plan-listing.page.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PlanListingPage": () => (/* binding */ PlanListingPage)
/* harmony export */ });
/* harmony import */ var src_app_app_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/app.component */ 55041);
/* harmony import */ var http_status_codes__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! http-status-codes */ 92788);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _services_translate_config_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/translate-config.service */ 45340);
/* harmony import */ var src_providers_logger_service_logger_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/providers/logger-service/logger-service */ 9999);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/core */ 38699);
/* harmony import */ var src_providers_utils_utils_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/providers/utils/utils.service */ 30423);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _getPolicyListService__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./getPolicyListService */ 78785);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var src_providers_utils_config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/providers/utils/config */ 43485);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ 94666);












function PlanListingPage_section_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "section", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "ion-spinner", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function PlanListingPage_section_18_ion_button_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "ion-button", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function PlanListingPage_section_18_ion_button_3_Template_ion_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r5);
      const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r4.getPolicyList());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](2, 1, "generic_msgs.try_again"), "");
  }
}
function PlanListingPage_section_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "section", 13)(1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](3, PlanListingPage_section_18_ion_button_3_Template, 3, 3, "ion-button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r1.errorMsg);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r1.canTryAgain);
  }
}
const _c0 = function (a0, a1) {
  return {
    "header-conventional": a0,
    "header-takaful": a1
  };
};
function PlanListingPage_ion_list_19_section_1_section_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "section")(1, "ion-row", 20)(2, "p", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "p", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const data_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction2"](3, _c0, ctx_r8.isConventional, ctx_r8.isTakaful));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](data_r7.planName);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](data_r7.policyNumber);
  }
}
function PlanListingPage_ion_list_19_section_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "section", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function PlanListingPage_ion_list_19_section_1_Template_section_click_0_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r11);
      const data_r7 = restoredCtx.$implicit;
      const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r10.navToPlanDetails(data_r7));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, PlanListingPage_ion_list_19_section_1_section_1_Template, 6, 6, "section", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const data_r7 = ctx.$implicit;
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", data_r7.planType === ctx_r6.tabSelected);
  }
}
function PlanListingPage_ion_list_19_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "ion-list", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, PlanListingPage_ion_list_19_section_1_Template, 2, 1, "section", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx_r2.policyList);
  }
}
const _c1 = function (a0, a1) {
  return {
    "tab-selected": a0,
    "tab": a1
  };
};
class PlanListingPage {
  constructor(translateConfigService, logger, translate, utils, router, policyListSrvc, menuControler, config) {
    this.translateConfigService = translateConfigService;
    this.logger = logger;
    this.translate = translate;
    this.utils = utils;
    this.router = router;
    this.policyListSrvc = policyListSrvc;
    this.menuControler = menuControler;
    this.config = config;
    this.policyList = [];
    this.isShowingLoader = true;
    this.isConventional = true;
    this.isTakaful = false;
    this.tabSelected = 'Conventional';
    this.canTryAgain = false;
    this.conventionalData = [];
    this.takafulData = [];
    this.selectedLanguage = this.translateConfigService.getDefaultLanguage();
    this.translateConfigService.setLanguage('en');
  }
  ngOnInit() {
    this.getPolicyList();
  }
  ionViewDidLoad() {
    this.logger.log('ionViewDidLoad PlanListingPage');
    this.getPolicyList();
  }
  /**
    * In this method we are updated the side menu title
    */
  ionViewDidEnter() {
    // this.menuControler.toggle();
    this.menuControler.enable(true, 'custom');
    this.utils.component.emit(src_app_app_component__WEBPACK_IMPORTED_MODULE_0__.MenuOptions.MY_POLICY);
  }
  /**
   * to get the policy list
   */
  getPolicyList() {
    if (this.utils.isDeviceOnLine()) {
      this.canTryAgain = false;
      this.policyListSrvc.getPolicyList(this.utils.getUserIdentity()).then(res => {
        try {
          this.isShowingLoader = false;
          if (res['responseJSON'] && res['responseJSON']['statusCode'] == http_status_codes__WEBPACK_IMPORTED_MODULE_7__.OK) {
            this._separateByPlanType(res['responseJSON']['array']);
          } else {
            this.errorMsg = res['responseJSON']['error_description'];
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
        this.errorMsg = this.utils.handleServiceException(err);
      });
    } else {
      this.isShowingLoader = false;
      this.canTryAgain = true;
      this.errorMsg = this.translate.instant('generic_msgs.network_err');
    }
  }
  navToPlanDetails(policyDetails) {
    //this.navCtrl.push(PlanDetailsPage , {policyData : policyDetails});
    this.router.navigate(['plan-details'], {
      state: {
        policyData: policyDetails
      }
    });
  }
  toggletab(tab) {
    this.tabSelected = tab;
    if (tab == 'Conventional') {
      this.isConventional = true;
      this.isTakaful = false;
      this.policyList = this.conventionalData;
    } else if (tab == 'Takaful') {
      this.isConventional = false;
      this.isTakaful = true;
      this.policyList = this.takafulData;
    }
  }
  _separateByPlanType(PlanListingData) {
    for (var index = 0; index < PlanListingData.length; ++index) {
      var data = PlanListingData[index];
      if (data.planType == 'Conventional') {
        this.conventionalData.push(data);
      } else if (data.planType == 'Takaful') {
        this.takafulData.push(data);
      }
      this.policyList = this.conventionalData;
      this.errorMsg = this.translate.instant('generic_msgs.no_data');
    }
  }
}
PlanListingPage.ɵfac = function PlanListingPage_Factory(t) {
  return new (t || PlanListingPage)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_services_translate_config_service__WEBPACK_IMPORTED_MODULE_1__.TranslateConfigService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_providers_logger_service_logger_service__WEBPACK_IMPORTED_MODULE_2__.LoggerServiceProvider), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__.TranslateService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_providers_utils_utils_service__WEBPACK_IMPORTED_MODULE_3__.UtilService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_9__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_getPolicyListService__WEBPACK_IMPORTED_MODULE_4__.GetPolicyListService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_10__.MenuController), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_providers_utils_config__WEBPACK_IMPORTED_MODULE_5__.ConfigProvider));
};
PlanListingPage.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({
  type: PlanListingPage,
  selectors: [["app-plan-listing"]],
  decls: 20,
  vars: 20,
  consts: [["mode", "ios"], ["color", "primary", 2, "border-bottom", "3px solid white"], ["slot", "start", "color", "secondary"], [1, "bold-font"], ["color", "primary", 1, "tabs"], [1, "tabsRow"], ["size", "6", 1, "ion-text-center", 3, "ngClass", "click"], [1, "app_bg2", "text_color_base", "ion-padding"], ["class", "spinnersection ion-text-center", 4, "ngIf"], ["class", "errorMsgSection white_container_border_radius", 4, "ngIf"], ["class", "white_container_border_radius ion-padding", 4, "ngIf"], [1, "spinnersection", "ion-text-center"], ["name", "lines-sharp-small", 2, "height", "98%"], [1, "errorMsgSection", "white_container_border_radius"], ["style", "--background:var(--ion-color-white);", 3, "click", 4, "ngIf"], [2, "--background", "var(--ion-color-white)", 3, "click"], [1, "white_container_border_radius", "ion-padding"], [3, "click", 4, "ngFor", "ngForOf"], [3, "click"], [4, "ngIf"], [1, "cardheader", "header", 3, "ngClass"], [2, "padding-left", "5px", "padding-top", "5px", "font-size", "1rem"], [2, "padding-left", "5px", "padding-bottom", "5px", "font-size", "1rem"]],
  template: function PlanListingPage_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "ion-header", 0)(1, "ion-toolbar", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](2, "ion-menu-button", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "ion-title", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](5, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "ion-toolbar", 4)(7, "ion-row", 5)(8, "ion-col", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function PlanListingPage_Template_ion_col_click_8_listener() {
        return ctx.toggletab("Conventional");
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](9, "ion-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](10);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](11, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](12, "ion-col", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function PlanListingPage_Template_ion_col_click_12_listener() {
        return ctx.toggletab("Takaful");
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](13, "ion-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](14);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](15, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](16, "ion-content", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](17, PlanListingPage_section_17_Template, 2, 0, "section", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](18, PlanListingPage_section_18_Template, 4, 2, "section", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](19, PlanListingPage_ion_list_19_Template, 2, 1, "ion-list", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](5, 8, "plan_listing.title"), " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction2"](14, _c1, ctx.isConventional, !ctx.isConventional));
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](11, 10, "plan_listing.type_conventional"));
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction2"](17, _c1, ctx.isTakaful, !ctx.isTakaful));
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](15, 12, "plan_listing.type_takaful"));
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.isShowingLoader);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !(ctx.policyList.length > 0) && !ctx.isShowingLoader);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.policyList.length > 0);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_11__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_11__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_11__.NgIf, _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.IonButton, _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.IonCol, _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.IonContent, _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.IonHeader, _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.IonLabel, _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.IonList, _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.IonMenuButton, _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.IonRow, _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.IonSpinner, _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.IonTitle, _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.IonToolbar, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__.TranslatePipe],
  styles: [".cardheader[_ngcontent-%COMP%] {\n  padding: 5px 15px;\n}\n\n.cardheader[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  margin: 0px;\n  width: 100%;\n  font-family: Agenda-Regular;\n  line-height: 20px;\n}\n\n.label[_ngcontent-%COMP%] {\n  margin: 1px 1px 1px 0;\n}\n\nion-col[_ngcontent-%COMP%] {\n  text-align: center;\n}\n\n.tabs[_ngcontent-%COMP%] {\n  --padding-top: -3px;\n  --padding-bottom: -3px;\n  --padding-start: -4px;\n  --padding-end: -4px;\n  --min-height: 35px;\n}\n\n.tab[_ngcontent-%COMP%] {\n  background-color: var(--ion-color-secondary);\n  font-family: Agenda-Semibold;\n  font-size: 1rem;\n  color: white;\n}\n\n.tab-selected[_ngcontent-%COMP%] {\n  background-color: var(--ion-color-primary);\n  font-family: Agenda-Semibold;\n  font-size: 1rem;\n  color: --ion-color-secondary;\n}\n\n.header-conventional[_ngcontent-%COMP%] {\n  background-color: var(--ion-color-secondary);\n  color: white !important;\n}\n\n.header-takaful[_ngcontent-%COMP%] {\n  background-color: var(--ion-color-success);\n  color: white !important;\n}\n\n.white_container_border_radius[_ngcontent-%COMP%] {\n  padding: 25px 15px;\n  border-radius: 15px !important;\n}\n\n.white_container_border_radius[_ngcontent-%COMP%]   section[_ngcontent-%COMP%] {\n  margin: 0px 0px 5px;\n}\n\n.tab-selected[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%], .tab[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%] {\n  font-family: Agenda-Semibold;\n  font-size: 1.6rem;\n}\n\nion-toolbar[_ngcontent-%COMP%] {\n  max-height: 44px;\n}\n\n.spinnersection[_ngcontent-%COMP%] {\n  display: block;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  font-size: 1.3rem;\n  height: 98%;\n}\n\n.errorMsgSection[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  height: 98%;\n  font-size: 0.8rem;\n  color: #494747 !important;\n  padding: 0px 15px;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcGFnZXMvcGxhbi1saXN0aW5nL3BsYW4tbGlzdGluZy5wYWdlLnNjc3MiLCJ3ZWJwYWNrOi8vLi8uLi8uLi8uLi9BbGwlMjBQcm9qZWN0cy9NYWxheXNpYV9DbGllbnRBcHBfUmV2YW1wL1N1bkFjY2Vzc19Jb25pYzZfUmV2YW1wL3NyYy9hcHAvcGFnZXMvcGxhbi1saXN0aW5nL3BsYW4tbGlzdGluZy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0U7RUFDSSxpQkFBQTtBQ0FOOztBREdFO0VBQ0ksZUFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EsMkJBQUE7RUFDQSxpQkFBQTtBQ0FOOztBREdFO0VBQ0kscUJBQUE7QUNBTjs7QURHRTtFQUVJLGtCQUFBO0FDRE47O0FEU0U7RUFDRSxtQkFBQTtFQUNBLHNCQUFBO0VBQ0EscUJBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FDTko7O0FEYUU7RUFDRSw0Q0FBQTtFQUNBLDRCQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7QUNWSjs7QURjRTtFQUNFLDBDQUFBO0VBQ0EsNEJBQUE7RUFDQSxlQUFBO0VBQ0EsNEJBQUE7QUNYSjs7QURjRTtFQUNFLDRDQUFBO0VBQ0EsdUJBQUE7QUNYSjs7QURlRTtFQUNFLDBDQUFBO0VBQ0EsdUJBQUE7QUNaSjs7QURnQkU7RUFDSSxrQkFBQTtFQUNBLDhCQUFBO0FDYk47O0FEZ0JFO0VBQ0ksbUJBQUE7QUNiTjs7QURnQkU7RUFDSSw0QkFBQTtFQUNBLGlCQUFBO0FDYk47O0FEZUE7RUFFRSxnQkFBQTtBQ2JGOztBRGVBO0VBQ0UsY0FBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0EsV0FBQTtBQ1pGOztBRGVBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtFQUNBLHlCQUFBO0VBQ0EsaUJBQUE7QUNaRiIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4gIC5jYXJkaGVhZGVye1xyXG4gICAgICBwYWRkaW5nOiA1cHggMTVweDtcclxuICB9XHJcblxyXG4gIC5jYXJkaGVhZGVyIHB7XHJcbiAgICAgIGZvbnQtc2l6ZSA6IDEuMHJlbTtcclxuICAgICAgbWFyZ2luOiAwcHg7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICBmb250LWZhbWlseTogQWdlbmRhLVJlZ3VsYXI7XHJcbiAgICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xyXG4gIH1cclxuXHJcbiAgLmxhYmVsIHtcclxuICAgICAgbWFyZ2luOiAxcHggMXB4IDFweCAwO1xyXG4gIH1cclxuXHJcbiAgaW9uLWNvbHtcclxuICAvLyAgICAgd2lkdGg6IDYwJTtcclxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIC8vICAgICBtYXJnaW4tdG9wOiBhdXRvO1xyXG4gIC8vIG1hcmdpbi1ib3R0b206IGF1dG87XHJcbiAgLy8gbWFyZ2luLXJpZ2h0OiAwcHg7XHJcbiAgLy8gYm9yZGVyOiAxcHggI2ZlYmUxMDtcclxuXHJcblxyXG4gIH1cclxuICAudGFic3tcclxuICAgIC0tcGFkZGluZy10b3A6IC0zcHg7XHJcbiAgICAtLXBhZGRpbmctYm90dG9tOiAtM3B4O1xyXG4gICAgLS1wYWRkaW5nLXN0YXJ0OiAtNHB4O1xyXG4gICAgLS1wYWRkaW5nLWVuZDogLTRweDtcclxuICAgIC0tbWluLWhlaWdodDogMzVweDtcclxuICB9XHJcblxyXG4gIC8vIC50YWJzUm93IHtcclxuICAvLyAgICAgcGFkZGluZzo5cHggIWltcG9ydGFudDtcclxuICAvLyB9XHJcblxyXG4gIC50YWIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXNlY29uZGFyeSk7XHJcbiAgICBmb250LWZhbWlseTogQWdlbmRhLVNlbWlib2xkO1xyXG4gICAgZm9udC1zaXplOiAxcmVtO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gIH1cclxuXHJcblxyXG4gIC50YWItc2VsZWN0ZWQge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xyXG4gICAgZm9udC1mYW1pbHk6IEFnZW5kYS1TZW1pYm9sZDtcclxuICAgIGZvbnQtc2l6ZTogMXJlbTtcclxuICAgIGNvbG9yOiAtLWlvbi1jb2xvci1zZWNvbmRhcnk7XHJcbiAgfVxyXG5cclxuICAuaGVhZGVyLWNvbnZlbnRpb25hbHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWlvbi1jb2xvci1zZWNvbmRhcnkpO1xyXG4gICAgY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XHJcblxyXG4gIH1cclxuXHJcbiAgLmhlYWRlci10YWthZnVse1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXN1Y2Nlc3MpO1xyXG4gICAgY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG5cclxuXHJcbiAgLndoaXRlX2NvbnRhaW5lcl9ib3JkZXJfcmFkaXVze1xyXG4gICAgICBwYWRkaW5nOiAyNXB4IDE1cHg7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDE1cHggIWltcG9ydGFudDtcclxuICB9XHJcblxyXG4gIC53aGl0ZV9jb250YWluZXJfYm9yZGVyX3JhZGl1cyBzZWN0aW9ue1xyXG4gICAgICBtYXJnaW46ICAwcHggMHB4IDVweDtcclxuICB9XHJcblxyXG4gIC50YWItc2VsZWN0ZWQgLmxhYmVsLCAudGFiIC5sYWJlbHtcclxuICAgICAgZm9udC1mYW1pbHk6IEFnZW5kYS1TZW1pYm9sZDtcclxuICAgICAgZm9udC1zaXplOiAxLjZyZW07XHJcbiAgfVxyXG5pb24tdG9vbGJhcntcclxuICAvL2JvcmRlci1ib3R0b206M3B4IHNvbGlkIHdoaXRlO1xyXG4gIG1heC1oZWlnaHQ6IDQ0cHg7XHJcbn1cclxuLnNwaW5uZXJzZWN0aW9uIHtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgZm9udC1zaXplOiAxLjNyZW07XHJcbiAgaGVpZ2h0OiA5OCU7XHJcbn1cclxuXHJcbi5lcnJvck1zZ1NlY3Rpb24ge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGhlaWdodDogOTglO1xyXG4gIGZvbnQtc2l6ZTogMC44cmVtO1xyXG4gIGNvbG9yOiAjNDk0NzQ3ICFpbXBvcnRhbnQ7XHJcbiAgcGFkZGluZzogMHB4IDE1cHg7XHJcbn1cclxuXHJcbiIsIi5jYXJkaGVhZGVyIHtcbiAgcGFkZGluZzogNXB4IDE1cHg7XG59XG5cbi5jYXJkaGVhZGVyIHAge1xuICBmb250LXNpemU6IDFyZW07XG4gIG1hcmdpbjogMHB4O1xuICB3aWR0aDogMTAwJTtcbiAgZm9udC1mYW1pbHk6IEFnZW5kYS1SZWd1bGFyO1xuICBsaW5lLWhlaWdodDogMjBweDtcbn1cblxuLmxhYmVsIHtcbiAgbWFyZ2luOiAxcHggMXB4IDFweCAwO1xufVxuXG5pb24tY29sIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4udGFicyB7XG4gIC0tcGFkZGluZy10b3A6IC0zcHg7XG4gIC0tcGFkZGluZy1ib3R0b206IC0zcHg7XG4gIC0tcGFkZGluZy1zdGFydDogLTRweDtcbiAgLS1wYWRkaW5nLWVuZDogLTRweDtcbiAgLS1taW4taGVpZ2h0OiAzNXB4O1xufVxuXG4udGFiIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXNlY29uZGFyeSk7XG4gIGZvbnQtZmFtaWx5OiBBZ2VuZGEtU2VtaWJvbGQ7XG4gIGZvbnQtc2l6ZTogMXJlbTtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4udGFiLXNlbGVjdGVkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICBmb250LWZhbWlseTogQWdlbmRhLVNlbWlib2xkO1xuICBmb250LXNpemU6IDFyZW07XG4gIGNvbG9yOiAtLWlvbi1jb2xvci1zZWNvbmRhcnk7XG59XG5cbi5oZWFkZXItY29udmVudGlvbmFsIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXNlY29uZGFyeSk7XG4gIGNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xufVxuXG4uaGVhZGVyLXRha2FmdWwge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pb24tY29sb3Itc3VjY2Vzcyk7XG4gIGNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xufVxuXG4ud2hpdGVfY29udGFpbmVyX2JvcmRlcl9yYWRpdXMge1xuICBwYWRkaW5nOiAyNXB4IDE1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDE1cHggIWltcG9ydGFudDtcbn1cblxuLndoaXRlX2NvbnRhaW5lcl9ib3JkZXJfcmFkaXVzIHNlY3Rpb24ge1xuICBtYXJnaW46IDBweCAwcHggNXB4O1xufVxuXG4udGFiLXNlbGVjdGVkIC5sYWJlbCwgLnRhYiAubGFiZWwge1xuICBmb250LWZhbWlseTogQWdlbmRhLVNlbWlib2xkO1xuICBmb250LXNpemU6IDEuNnJlbTtcbn1cblxuaW9uLXRvb2xiYXIge1xuICBtYXgtaGVpZ2h0OiA0NHB4O1xufVxuXG4uc3Bpbm5lcnNlY3Rpb24ge1xuICBkaXNwbGF5OiBibG9jaztcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMS4zcmVtO1xuICBoZWlnaHQ6IDk4JTtcbn1cblxuLmVycm9yTXNnU2VjdGlvbiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBoZWlnaHQ6IDk4JTtcbiAgZm9udC1zaXplOiAwLjhyZW07XG4gIGNvbG9yOiAjNDk0NzQ3ICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmc6IDBweCAxNXB4O1xufSJdLCJzb3VyY2VSb290IjoiIn0= */"]
});

/***/ })

}]);
//# sourceMappingURL=src_app_pages_plan-listing_plan-listing_module_ts.js.map