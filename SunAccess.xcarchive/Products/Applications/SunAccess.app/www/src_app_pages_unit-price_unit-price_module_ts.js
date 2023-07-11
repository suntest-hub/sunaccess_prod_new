"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_unit-price_unit-price_module_ts"],{

/***/ 56359:
/*!***************************************************************!*\
  !*** ./src/app/pages/unit-price/unit-price-routing.module.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UnitPricePageRoutingModule": () => (/* binding */ UnitPricePageRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _unit_price_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./unit-price.page */ 38073);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);




const routes = [{
  path: '',
  component: _unit_price_page__WEBPACK_IMPORTED_MODULE_0__.UnitPricePage
}];
class UnitPricePageRoutingModule {}
UnitPricePageRoutingModule.ɵfac = function UnitPricePageRoutingModule_Factory(t) {
  return new (t || UnitPricePageRoutingModule)();
};
UnitPricePageRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
  type: UnitPricePageRoutingModule
});
UnitPricePageRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](UnitPricePageRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
})();

/***/ }),

/***/ 81186:
/*!*******************************************************!*\
  !*** ./src/app/pages/unit-price/unit-price.module.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UnitPricePageModule": () => (/* binding */ UnitPricePageModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _unit_price_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./unit-price-routing.module */ 56359);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ 38699);
/* harmony import */ var _unit_price_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./unit-price.page */ 38073);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);







class UnitPricePageModule {}
UnitPricePageModule.ɵfac = function UnitPricePageModule_Factory(t) {
  return new (t || UnitPricePageModule)();
};
UnitPricePageModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
  type: UnitPricePageModule
});
UnitPricePageModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__.TranslateModule, _unit_price_routing_module__WEBPACK_IMPORTED_MODULE_0__.UnitPricePageRoutingModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](UnitPricePageModule, {
    declarations: [_unit_price_page__WEBPACK_IMPORTED_MODULE_1__.UnitPricePage],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__.TranslateModule, _unit_price_routing_module__WEBPACK_IMPORTED_MODULE_0__.UnitPricePageRoutingModule]
  });
})();

/***/ }),

/***/ 38073:
/*!*****************************************************!*\
  !*** ./src/app/pages/unit-price/unit-price.page.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UnitPricePage": () => (/* binding */ UnitPricePage)
/* harmony export */ });
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../app.component */ 55041);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ 38699);
/* harmony import */ var _services_translate_config_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/translate-config.service */ 45340);
/* harmony import */ var src_providers_utils_utils_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/providers/utils/utils.service */ 30423);
/* harmony import */ var src_providers_logger_service_logger_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/providers/logger-service/logger-service */ 9999);
/* harmony import */ var _uniPriceListService__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./uniPriceListService */ 86916);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var src_providers_utils_config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/providers/utils/config */ 43485);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 94666);










function UnitPricePage_section_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "section", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "ion-spinner", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function UnitPricePage_section_18_ion_button_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "ion-button", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function UnitPricePage_section_18_ion_button_3_Template_ion_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r5);
      const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r4.unitPrice());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](2, 1, "generic_msgs.try_again"));
  }
}
function UnitPricePage_section_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "section", 14)(1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](3, UnitPricePage_section_18_ion_button_3_Template, 3, 3, "ion-button", 15);
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
    odd: a0,
    even: a1
  };
};
function UnitPricePage_div_19_ion_list_6_ion_row_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "ion-row", 27)(1, "ion-col", 22)(2, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "ion-col", 24)(5, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const data_r8 = ctx.$implicit;
    const odd_r9 = ctx.odd;
    const even_r10 = ctx.even;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction2"](3, _c0, odd_r9, even_r10));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](data_r8.fundName);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](data_r8.nav);
  }
}
function UnitPricePage_div_19_ion_list_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "ion-list", 20)(1, "ion-row", 21)(2, "ion-col", 22)(3, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "ion-col", 24)(7, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](9, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](10, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](12, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](13, UnitPricePage_div_19_ion_list_6_ion_row_13_Template, 7, 6, "ion-row", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](5, 4, "fund"));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](9, 6, "unitprice"));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("(", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](12, 8, "rm"), ")");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx_r6.fundsData);
  }
}
const _c1 = function (a0, a1) {
  return {
    "date_tile_assurance": a0,
    "date_tile_takaful": a1
  };
};
function UnitPricePage_div_19_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div")(1, "ion-item", 17)(2, "ion-label", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](5, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](6, UnitPricePage_div_19_ion_list_6_Template, 14, 10, "ion-list", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction2"](9, _c1, ctx_r2.isAssurance, !ctx_r2.isAssurance));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate2"]("", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](4, 4, "dailyunitprice"), " (as of ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind2"](5, 6, ctx_r2.displayDate, "d MMMM y"), ")");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r2.fundsData.length > 0);
  }
}
const _c2 = function (a0, a1) {
  return {
    "tab-selected": a0,
    "tab": a1
  };
};
class UnitPricePage {
  constructor(translate, translateConfigService, utils, logger, unitPriceList, menuControl, config) {
    this.translate = translate;
    this.translateConfigService = translateConfigService;
    this.utils = utils;
    this.logger = logger;
    this.unitPriceList = unitPriceList;
    this.menuControl = menuControl;
    this.config = config;
    this.assuarnceFunds = [];
    this.takafulfunds = [];
    this.fundsData = [];
    this.isShowingLoader = true;
    this.canTryAgain = false;
    this.isAssurance = true;
    this.isTakaful = false;
    this.tabSelected = 'isAssurance';
    this.today = Date.now();
    /**
       * This method is used to get list of unit prices
       */
    this.unitPrice = function () {
      if (this.utils.isDeviceOnLine()) {
        this.canTryAgain = false;
        this.isShowingLoader = true;
        this.errorMsg = "";
        this.unitPriceList.getUnitPriceList().then(result => {
          try {
            this.isShowingLoader = false;
            this._separateByPlanType(result["responseJSON"]["array"]);
            this.utils.dissmisProgressLoader();
          } catch (e) {
            this.isShowingLoader = false;
            this.canTryAgain = true;
            this.errorMsg = this.translate.instant("generic_msgs.server_err");
            this.utils.dissmisProgressLoader();
          }
        }, err => {
          this.isShowingLoader = false;
          this.canTryAgain = true;
          this.errorMsg = this.utils.handleServiceException(err);
          this.utils.dissmisProgressLoader();
        });
      } else {
        this.isShowingLoader = false;
        this.canTryAgain = true;
        this.errorMsg = this.translate.instant("generic_msgs.network_err");
        this.utils.dissmisProgressLoader();
      }
    };
    this.selectedLanguage = this.translateConfigService.getDefaultLanguage();
    this.translateConfigService.setLanguage('en');
  }
  ngOnInit() {
    this.unitPrice();
  }
  ionViewDidEnter() {
    if (this.config.userDetails.name != null) {
      this.menuControl.enable(true, 'custom');
      this.menuControl.enable(false, 'first');
    } else {
      this.menuControl.enable(true, 'first');
      this.menuControl.enable(false, 'custom');
    }
    this.utils.component.emit(_app_component__WEBPACK_IMPORTED_MODULE_0__.MenuOptions.UNIT_PRICE);
  }
  ionViewDidLoad() {
    // this.logger.log('ionViewDidLoad UnitPricePage');
    // this.unitPrice();
  }
  /**
   * @param tab - selected tab
   * This methos is used to toggle the tabs
  
  /**
   * This method is used to filter the server response into 2 types based on PlanType.
   * @param fundData - List of Policies that we are getting from server.
   */
  _separateByPlanType(fundData) {
    for (var index = 0; index < fundData.length; ++index) {
      var data = fundData[index];
      if (data.fundType.toUpperCase() == "INSURANCE") {
        //console.log(data);
        this.assuarnceFunds.push(data);
        //console.log(  this.assuarnceFunds);
      } else if (data.fundType.toUpperCase() == "TAKAFUL") {
        this.takafulfunds.push(data);
        //console.log(  this.takafulfunds);
      }

      this.fundsData = this.assuarnceFunds;
      //console.log(  this.fundsData);
      this.errorMsg = this.translate.instant("generic_msgs.no_data");
      if (this.fundsData.length > 0) {
        this.displayDate = this.fundsData[this.fundsData.length - 1].fundDate;
      }
    }
  }
  toggletab(tab) {
    this.tabSelected = tab;
    if (tab.toUpperCase() == 'ASSURANCE') {
      this.isAssurance = true;
      this.isTakaful = false;
      this.fundsData = this.assuarnceFunds;
    } else if (tab.toUpperCase() == 'TAKAFUL') {
      this.isAssurance = false;
      this.isTakaful = true;
      this.fundsData = this.takafulfunds;
    }
    if (this.fundsData.length > 0) {
      this.displayDate = this.fundsData[this.fundsData.length - 1].fundDate;
    }
  }
}
UnitPricePage.ɵfac = function UnitPricePage_Factory(t) {
  return new (t || UnitPricePage)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__.TranslateService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_services_translate_config_service__WEBPACK_IMPORTED_MODULE_1__.TranslateConfigService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_providers_utils_utils_service__WEBPACK_IMPORTED_MODULE_2__.UtilService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_providers_logger_service_logger_service__WEBPACK_IMPORTED_MODULE_3__.LoggerServiceProvider), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_uniPriceListService__WEBPACK_IMPORTED_MODULE_4__.UnitPriceListService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_8__.MenuController), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_providers_utils_config__WEBPACK_IMPORTED_MODULE_5__.ConfigProvider));
};
UnitPricePage.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({
  type: UnitPricePage,
  selectors: [["app-unit-price"]],
  decls: 20,
  vars: 20,
  consts: [["mode", "ios"], ["color", "primary", 1, "toolbar"], ["slot", "start", "auto-hide", "false", "color", "secondary"], [1, "bold-font"], ["color", "primary", 1, "tabs"], [1, "tabsRow"], ["size", "6", 1, "ion-text-center", 3, "ngClass", "click"], [1, "font_2"], ["no-bounce", "", "forceOverscroll", "false"], ["class", "spinnersection ion-text-center", 4, "ngIf"], ["class", "errorMsgSection", 4, "ngIf"], [4, "ngIf"], [1, "spinnersection", "ion-text-center"], ["name", "lines-sharp-small", 2, "height", "98%"], [1, "errorMsgSection"], ["style", "--background:var(--ion-color-white);", 3, "click", 4, "ngIf"], [2, "--background", "var(--ion-color-white)", 3, "click"], ["lines", "none", 1, "date_tile", 3, "ngClass"], [1, "p"], ["class", "list", 4, "ngIf"], [1, "list"], [1, "header"], ["size", "9"], [1, "font_2", 2, "font-family", "Agenda-semibold"], ["size", "3"], [1, "ion-text-center", "font_2", 2, "font-family", "Agenda-semibold"], [3, "ngClass", 4, "ngFor", "ngForOf"], [3, "ngClass"], [1, "font_1"], [1, "ion-text-center", "font_1"]],
  template: function UnitPricePage_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "ion-header", 0)(1, "ion-toolbar", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](2, "ion-menu-button", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "ion-title", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](5, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "ion-toolbar", 4)(7, "ion-row", 5)(8, "ion-col", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function UnitPricePage_Template_ion_col_click_8_listener() {
        return ctx.toggletab("Assurance");
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](9, "ion-label", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](10);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](11, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](12, "ion-col", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function UnitPricePage_Template_ion_col_click_12_listener() {
        return ctx.toggletab("Takaful");
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](13, "ion-label", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](14);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](15, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](16, "ion-content", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](17, UnitPricePage_section_17_Template, 2, 0, "section", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](18, UnitPricePage_section_18_Template, 4, 2, "section", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](19, UnitPricePage_div_19_Template, 7, 12, "div", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](5, 8, "unitprice"), " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction2"](14, _c2, ctx.isAssurance, !ctx.isAssurance));
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](11, 10, "unit_price.tab_assurance"));
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction2"](17, _c2, ctx.isTakaful, !ctx.isTakaful));
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](15, 12, "unit_price.tab_takaful"));
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.isShowingLoader);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !(ctx.fundsData.length > 0) && !ctx.isShowingLoader);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.fundsData.length > 0);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgIf, _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonButton, _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonCol, _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonContent, _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonHeader, _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonItem, _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonLabel, _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonList, _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonMenuButton, _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonRow, _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonSpinner, _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonTitle, _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonToolbar, _angular_common__WEBPACK_IMPORTED_MODULE_9__.DatePipe, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__.TranslatePipe],
  styles: [".cardheader[_ngcontent-%COMP%] {\n  padding: 5px 15px;\n}\n\n.cardheader[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 1.4rem;\n  margin: 0px;\n  width: 100%;\n  font-family: Agenda-Regular;\n  line-height: 20px;\n}\n\n.label[_ngcontent-%COMP%] {\n  margin: 1px 1px 1px 0px;\n}\n\n.col[_ngcontent-%COMP%] {\n  width: 60%;\n  text-align: center;\n}\n\n.tabsRow[_ngcontent-%COMP%]   .col[_ngcontent-%COMP%] {\n  padding: 9px !important;\n}\n\n.tab[_ngcontent-%COMP%] {\n  background-color: var(--ion-color-secondary);\n  font-family: Agenda-Semibold;\n  font-size: 1rem;\n  color: white;\n}\n\n.tab-selected[_ngcontent-%COMP%] {\n  --background: #febe10;\n  font-family: Agenda-Semibold;\n  font-size: 1rem;\n  color: --ion-color-secondary;\n}\n\n.header-assurance[_ngcontent-%COMP%] {\n  background-color: var(--ion-color-success);\n  color: white !important;\n}\n\n.header-takaful[_ngcontent-%COMP%] {\n  --background:#539542;\n  color: white !important;\n}\n\n.scroll-content[_ngcontent-%COMP%] {\n  padding: 0px !important;\n}\n\n.col-2[_ngcontent-%COMP%] {\n  padding: 0px;\n}\n\nion-col[_ngcontent-%COMP%] {\n  margin-top: auto;\n  margin-bottom: auto;\n  margin-left: 0px;\n  margin-right: 0px;\n}\n\n.col-6[_ngcontent-%COMP%] {\n  padding: 0px;\n}\n\n.odd[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%], .even[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%] {\n  white-space: unset;\n  font-size: 1rem;\n  line-height: 1.42857143;\n}\n\n.even[_ngcontent-%COMP%] {\n  background-color: --ion-color-white;\n}\n\n.odd[_ngcontent-%COMP%] {\n  background: #e5eaeb;\n}\n\n.font_2[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  font-weight: 400;\n  margin: 0px;\n  line-height: 20px;\n}\n\n.font_1[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n}\n\n.header[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%] {\n  font-family: Agenda-SemiBold;\n  margin-top: 5px;\n}\n\n.date_tile[_ngcontent-%COMP%] {\n  color: white;\n  top: 0.349rem;\n  font-size: 0.8rem !important;\n  padding-top: 0px !important;\n  max-height: 35px !important;\n  --ion-item-background: #002d3d;\n}\n\n.p[_ngcontent-%COMP%] {\n  padding-bottom: 4px !important;\n}\n\n.date_tile_assurance[_ngcontent-%COMP%] {\n  background-color: --ion-color-secondary;\n}\n\n.date_tile_takaful[_ngcontent-%COMP%] {\n  --background: #539542;\n}\n\n.item-inner[_ngcontent-%COMP%] {\n  border-bottom: none !important;\n}\n\n.list[_ngcontent-%COMP%] {\n  padding: 0px 20px;\n}\n\nin-row[_ngcontent-%COMP%] {\n  padding: 0px 20px;\n  text-align: left;\n}\n\n.list[_ngcontent-%COMP%] {\n  text-align: left;\n}\n\n.spinnersection[_ngcontent-%COMP%] {\n  display: block;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  font-size: 1.3rem;\n  height: 98%;\n}\n\n.errorMsgSection[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  height: 98%;\n  font-size: 0.8rem;\n  color: #494747 !important;\n  padding: 0px 15px;\n}\n\n.tabs[_ngcontent-%COMP%] {\n  border-top: 3px solid white !important;\n  --padding-top: -3px;\n  --padding-bottom: 4px;\n  --padding-start: -4px;\n  --padding-end: -4px;\n  --min-height: 35px;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcGFnZXMvdW5pdC1wcmljZS91bml0LXByaWNlLnBhZ2Uuc2NzcyIsIndlYnBhY2s6Ly8uLy4uLy4uLy4uL0FsbCUyMFByb2plY3RzL01hbGF5c2lhX0NsaWVudEFwcF9SZXZhbXAvU3VuQWNjZXNzX0lvbmljNl9SZXZhbXAvc3JjL2FwcC9wYWdlcy91bml0LXByaWNlL3VuaXQtcHJpY2UucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsaUJBQUE7QUNDRjs7QURFQTtFQUNFLGlCQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSwyQkFBQTtFQUNBLGlCQUFBO0FDQ0Y7O0FERUE7RUFDRSx1QkFBQTtBQ0NGOztBREVBO0VBQ0UsVUFBQTtFQUNBLGtCQUFBO0FDQ0Y7O0FEWUE7RUFDRSx1QkFBQTtBQ1RGOztBRFlBO0VBQ0UsNENBQUE7RUFDQSw0QkFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0FDVEY7O0FEYUE7RUFDRSxxQkFBQTtFQUNBLDRCQUFBO0VBQ0EsZUFBQTtFQUNBLDRCQUFBO0FDVkY7O0FEYUE7RUFDRSwwQ0FBQTtFQUNBLHVCQUFBO0FDVkY7O0FEY0E7RUFDRSxvQkFBQTtFQUVBLHVCQUFBO0FDWkY7O0FEZUE7RUFDRSx1QkFBQTtBQ1pGOztBRGVBO0VBQ0UsWUFBQTtBQ1pGOztBRGVBO0VBQ0UsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7QUNaRjs7QURnQkE7RUFDRSxZQUFBO0FDYkY7O0FEZ0JBOztFQUVFLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLHVCQUFBO0FDYkY7O0FEZ0JBO0VBRUUsbUNBQUE7QUNkRjs7QURpQkE7RUFDRSxtQkFBQTtBQ2RGOztBRGlCQTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtBQ2RGOztBRGdCQTtFQUNFLGlCQUFBO0FDYkY7O0FEZ0JBO0VBQ0UsNEJBQUE7RUFDQSxlQUFBO0FDYkY7O0FEZ0JBO0VBQ0UsWUFBQTtFQUNBLGFBQUE7RUFDQSw0QkFBQTtFQUNBLDJCQUFBO0VBQ0EsMkJBQUE7RUFDQSw4QkFBQTtBQ2JGOztBRGdCQTtFQUNFLDhCQUFBO0FDYkY7O0FEZ0JBO0VBQ0UsdUNBQUE7QUNiRjs7QURnQkE7RUFDRSxxQkFBQTtBQ2JGOztBRGdCQTtFQUNFLDhCQUFBO0FDYkY7O0FEZ0JBO0VBQ0UsaUJBQUE7QUNiRjs7QURnQkE7RUFDRSxpQkFBQTtFQUNBLGdCQUFBO0FDYkY7O0FEZ0JBO0VBQ0UsZ0JBQUE7QUNiRjs7QUR1QkE7RUFDRSxjQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxXQUFBO0FDcEJGOztBRHVCQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSx5QkFBQTtFQUNBLGlCQUFBO0FDcEJGOztBRHNCQTtFQUNFLHNDQUFBO0VBQ0EsbUJBQUE7RUFDQSxxQkFBQTtFQUNBLHFCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBQ25CRiIsInNvdXJjZXNDb250ZW50IjpbIi5jYXJkaGVhZGVyIHtcclxuICBwYWRkaW5nOiA1cHggMTVweDtcclxufVxyXG5cclxuLmNhcmRoZWFkZXIgcCB7XHJcbiAgZm9udC1zaXplOiAxLjRyZW07XHJcbiAgbWFyZ2luOiAwcHg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgZm9udC1mYW1pbHk6IEFnZW5kYS1SZWd1bGFyO1xyXG4gIGxpbmUtaGVpZ2h0OiAyMHB4O1xyXG59XHJcblxyXG4ubGFiZWwge1xyXG4gIG1hcmdpbjogMXB4IDFweCAxcHggMHB4O1xyXG59XHJcblxyXG4uY29sIHtcclxuICB3aWR0aDogNjAlO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLy8gLnRhYnMge1xyXG4vLyAgIC8vcGFkZGluZzogMHB4ICFpbXBvcnRhbnQ7XHJcbi8vICAgLy9wYWRkaW5nLWxlZnQ6IC01cHggO1xyXG4vLyAgIC8vLS1tYXJnaW4tdG9wOiAtMTBweDtcclxuLy8gICAvLyAtLXBhZGRpbmctc3RhcnQ6IC00cHg7XHJcbi8vICAgLy8gLS1wYWRkaW5nLWVuZDotNHB4O1xyXG4vLyAgIC8vbWluLWhlaWdodDogMTAwJSAhaW1wb3J0YW50O1xyXG4vLyAgIC8vcGFkZGluZy1ib3R0b206IDRweCAhaW1wb3J0YW50O1xyXG4vLyB9XHJcblxyXG4udGFic1JvdyAuY29sIHtcclxuICBwYWRkaW5nOiA5cHggIWltcG9ydGFudDtcclxufVxyXG5cclxuLnRhYiB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXNlY29uZGFyeSk7XHJcbiAgZm9udC1mYW1pbHk6IEFnZW5kYS1TZW1pYm9sZDtcclxuICBmb250LXNpemU6IDFyZW07XHJcbiAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG5cclxuLnRhYi1zZWxlY3RlZCB7XHJcbiAgLS1iYWNrZ3JvdW5kOiAjZmViZTEwO1xyXG4gIGZvbnQtZmFtaWx5OiBBZ2VuZGEtU2VtaWJvbGQ7XHJcbiAgZm9udC1zaXplOiAxcmVtO1xyXG4gIGNvbG9yOiAtLWlvbi1jb2xvci1zZWNvbmRhcnk7XHJcbn1cclxuXHJcbi5oZWFkZXItYXNzdXJhbmNlIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pb24tY29sb3Itc3VjY2Vzcyk7XHJcbiAgY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XHJcblxyXG59XHJcblxyXG4uaGVhZGVyLXRha2FmdWwge1xyXG4gIC0tYmFja2dyb3VuZDojNTM5NTQyO1xyXG4gIC8vYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXN1Y2Nlc3MpO1xyXG4gIGNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uc2Nyb2xsLWNvbnRlbnQge1xyXG4gIHBhZGRpbmc6IDBweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uY29sLTIge1xyXG4gIHBhZGRpbmc6IDBweDtcclxufVxyXG5cclxuaW9uLWNvbCB7XHJcbiAgbWFyZ2luLXRvcDogYXV0bztcclxuICBtYXJnaW4tYm90dG9tOiBhdXRvO1xyXG4gIG1hcmdpbi1sZWZ0OiAwcHg7XHJcbiAgbWFyZ2luLXJpZ2h0OiAwcHg7XHJcbiAgLy9ib3JkZXI6IDFweCAjZmViZTEwO1xyXG59XHJcblxyXG4uY29sLTYge1xyXG4gIHBhZGRpbmc6IDBweDtcclxufVxyXG5cclxuLm9kZCAubGFiZWwsXHJcbi5ldmVuIC5sYWJlbCB7XHJcbiAgd2hpdGUtc3BhY2U6IHVuc2V0O1xyXG4gIGZvbnQtc2l6ZTogMS4wcmVtO1xyXG4gIGxpbmUtaGVpZ2h0OiAxLjQyODU3MTQzO1xyXG59XHJcblxyXG4uZXZlbiB7XHJcbiAgLy8gICBiYWNrZ3JvdW5kOiBjb2xvcigkY29sb3JzLHdoaXRlKTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAtLWlvbi1jb2xvci13aGl0ZTtcclxufVxyXG5cclxuLm9kZCB7XHJcbiAgYmFja2dyb3VuZDogI2U1ZWFlYjtcclxufVxyXG5cclxuLmZvbnRfMntcclxuICBmb250LXNpemU6IDFyZW07XHJcbiAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICBtYXJnaW46IDBweDtcclxuICBsaW5lLWhlaWdodDogMjBweDtcclxufVxyXG4uZm9udF8xe1xyXG4gIGZvbnQtc2l6ZTogMC44cmVtO1xyXG59XHJcblxyXG4uaGVhZGVyIC5sYWJlbCB7XHJcbiAgZm9udC1mYW1pbHk6IEFnZW5kYS1TZW1pQm9sZDtcclxuICBtYXJnaW4tdG9wOiA1cHg7XHJcbn1cclxuXHJcbi5kYXRlX3RpbGUge1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICB0b3A6IDAuMzQ5cmVtO1xyXG4gIGZvbnQtc2l6ZTogMC44cmVtICFpbXBvcnRhbnQ7XHJcbiAgcGFkZGluZy10b3A6IDBweCAhaW1wb3J0YW50O1xyXG4gIG1heC1oZWlnaHQ6IDM1cHggIWltcG9ydGFudDtcclxuICAtLWlvbi1pdGVtLWJhY2tncm91bmQ6ICMwMDJkM2Q7XHJcbn1cclxuXHJcbi5wIHtcclxuICBwYWRkaW5nLWJvdHRvbTogNHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5kYXRlX3RpbGVfYXNzdXJhbmNlIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAtLWlvbi1jb2xvci1zZWNvbmRhcnk7XHJcbn1cclxuXHJcbi5kYXRlX3RpbGVfdGFrYWZ1bCB7XHJcbiAgLS1iYWNrZ3JvdW5kOiAjNTM5NTQyO1xyXG59XHJcblxyXG4uaXRlbS1pbm5lciB7XHJcbiAgYm9yZGVyLWJvdHRvbTogbm9uZSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ubGlzdCB7XHJcbiAgcGFkZGluZzogMHB4IDIwcHg7XHJcbn1cclxuXHJcbmluLXJvdyB7XHJcbiAgcGFkZGluZzogMHB4IDIwcHg7XHJcbiAgdGV4dC1hbGlnbjogbGVmdDtcclxufVxyXG5cclxuLmxpc3Qge1xyXG4gIHRleHQtYWxpZ246IGxlZnQ7XHJcbn1cclxuXHJcbi8vIC5iZy10YWthZnVsIHtcclxuLy8gICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3Itc3VjY2Vzcyk7XHJcbi8vICAgZm9udC1mYW1pbHk6IEFnZW5kYS1SZWd1bGFyO1xyXG4vLyAgIGZvbnQtc2l6ZTogMThyZW07XHJcbi8vICAgY29sb3I6IC0taW9uLWNvbG9yLXdoaXRlO1xyXG4vLyB9XHJcblxyXG4uc3Bpbm5lcnNlY3Rpb24ge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBmb250LXNpemU6IDEuM3JlbTtcclxuICBoZWlnaHQ6IDk4JTtcclxufVxyXG5cclxuLmVycm9yTXNnU2VjdGlvbiB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgaGVpZ2h0OiA5OCU7XHJcbiAgZm9udC1zaXplOiAwLjhyZW07XHJcbiAgY29sb3I6ICM0OTQ3NDcgIWltcG9ydGFudDtcclxuICBwYWRkaW5nOiAwcHggMTVweDtcclxufVxyXG4udGFic3tcclxuICBib3JkZXItdG9wOiAzcHggc29saWQgd2hpdGUgIWltcG9ydGFudDtcclxuICAtLXBhZGRpbmctdG9wOiAtM3B4O1xyXG4gIC0tcGFkZGluZy1ib3R0b206IDRweDtcclxuICAtLXBhZGRpbmctc3RhcnQ6IC00cHg7XHJcbiAgLS1wYWRkaW5nLWVuZDogLTRweDtcclxuICAtLW1pbi1oZWlnaHQ6IDM1cHg7XHJcbn1cclxuIiwiLmNhcmRoZWFkZXIge1xuICBwYWRkaW5nOiA1cHggMTVweDtcbn1cblxuLmNhcmRoZWFkZXIgcCB7XG4gIGZvbnQtc2l6ZTogMS40cmVtO1xuICBtYXJnaW46IDBweDtcbiAgd2lkdGg6IDEwMCU7XG4gIGZvbnQtZmFtaWx5OiBBZ2VuZGEtUmVndWxhcjtcbiAgbGluZS1oZWlnaHQ6IDIwcHg7XG59XG5cbi5sYWJlbCB7XG4gIG1hcmdpbjogMXB4IDFweCAxcHggMHB4O1xufVxuXG4uY29sIHtcbiAgd2lkdGg6IDYwJTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4udGFic1JvdyAuY29sIHtcbiAgcGFkZGluZzogOXB4ICFpbXBvcnRhbnQ7XG59XG5cbi50YWIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5KTtcbiAgZm9udC1mYW1pbHk6IEFnZW5kYS1TZW1pYm9sZDtcbiAgZm9udC1zaXplOiAxcmVtO1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi50YWItc2VsZWN0ZWQge1xuICAtLWJhY2tncm91bmQ6ICNmZWJlMTA7XG4gIGZvbnQtZmFtaWx5OiBBZ2VuZGEtU2VtaWJvbGQ7XG4gIGZvbnQtc2l6ZTogMXJlbTtcbiAgY29sb3I6IC0taW9uLWNvbG9yLXNlY29uZGFyeTtcbn1cblxuLmhlYWRlci1hc3N1cmFuY2Uge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pb24tY29sb3Itc3VjY2Vzcyk7XG4gIGNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xufVxuXG4uaGVhZGVyLXRha2FmdWwge1xuICAtLWJhY2tncm91bmQ6IzUzOTU0MjtcbiAgY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XG59XG5cbi5zY3JvbGwtY29udGVudCB7XG4gIHBhZGRpbmc6IDBweCAhaW1wb3J0YW50O1xufVxuXG4uY29sLTIge1xuICBwYWRkaW5nOiAwcHg7XG59XG5cbmlvbi1jb2wge1xuICBtYXJnaW4tdG9wOiBhdXRvO1xuICBtYXJnaW4tYm90dG9tOiBhdXRvO1xuICBtYXJnaW4tbGVmdDogMHB4O1xuICBtYXJnaW4tcmlnaHQ6IDBweDtcbn1cblxuLmNvbC02IHtcbiAgcGFkZGluZzogMHB4O1xufVxuXG4ub2RkIC5sYWJlbCxcbi5ldmVuIC5sYWJlbCB7XG4gIHdoaXRlLXNwYWNlOiB1bnNldDtcbiAgZm9udC1zaXplOiAxcmVtO1xuICBsaW5lLWhlaWdodDogMS40Mjg1NzE0Mztcbn1cblxuLmV2ZW4ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAtLWlvbi1jb2xvci13aGl0ZTtcbn1cblxuLm9kZCB7XG4gIGJhY2tncm91bmQ6ICNlNWVhZWI7XG59XG5cbi5mb250XzIge1xuICBmb250LXNpemU6IDFyZW07XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIG1hcmdpbjogMHB4O1xuICBsaW5lLWhlaWdodDogMjBweDtcbn1cblxuLmZvbnRfMSB7XG4gIGZvbnQtc2l6ZTogMC44cmVtO1xufVxuXG4uaGVhZGVyIC5sYWJlbCB7XG4gIGZvbnQtZmFtaWx5OiBBZ2VuZGEtU2VtaUJvbGQ7XG4gIG1hcmdpbi10b3A6IDVweDtcbn1cblxuLmRhdGVfdGlsZSB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgdG9wOiAwLjM0OXJlbTtcbiAgZm9udC1zaXplOiAwLjhyZW0gIWltcG9ydGFudDtcbiAgcGFkZGluZy10b3A6IDBweCAhaW1wb3J0YW50O1xuICBtYXgtaGVpZ2h0OiAzNXB4ICFpbXBvcnRhbnQ7XG4gIC0taW9uLWl0ZW0tYmFja2dyb3VuZDogIzAwMmQzZDtcbn1cblxuLnAge1xuICBwYWRkaW5nLWJvdHRvbTogNHB4ICFpbXBvcnRhbnQ7XG59XG5cbi5kYXRlX3RpbGVfYXNzdXJhbmNlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogLS1pb24tY29sb3Itc2Vjb25kYXJ5O1xufVxuXG4uZGF0ZV90aWxlX3Rha2FmdWwge1xuICAtLWJhY2tncm91bmQ6ICM1Mzk1NDI7XG59XG5cbi5pdGVtLWlubmVyIHtcbiAgYm9yZGVyLWJvdHRvbTogbm9uZSAhaW1wb3J0YW50O1xufVxuXG4ubGlzdCB7XG4gIHBhZGRpbmc6IDBweCAyMHB4O1xufVxuXG5pbi1yb3cge1xuICBwYWRkaW5nOiAwcHggMjBweDtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbn1cblxuLmxpc3Qge1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xufVxuXG4uc3Bpbm5lcnNlY3Rpb24ge1xuICBkaXNwbGF5OiBibG9jaztcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMS4zcmVtO1xuICBoZWlnaHQ6IDk4JTtcbn1cblxuLmVycm9yTXNnU2VjdGlvbiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBoZWlnaHQ6IDk4JTtcbiAgZm9udC1zaXplOiAwLjhyZW07XG4gIGNvbG9yOiAjNDk0NzQ3ICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmc6IDBweCAxNXB4O1xufVxuXG4udGFicyB7XG4gIGJvcmRlci10b3A6IDNweCBzb2xpZCB3aGl0ZSAhaW1wb3J0YW50O1xuICAtLXBhZGRpbmctdG9wOiAtM3B4O1xuICAtLXBhZGRpbmctYm90dG9tOiA0cHg7XG4gIC0tcGFkZGluZy1zdGFydDogLTRweDtcbiAgLS1wYWRkaW5nLWVuZDogLTRweDtcbiAgLS1taW4taGVpZ2h0OiAzNXB4O1xufSJdLCJzb3VyY2VSb290IjoiIn0= */"]
});

/***/ })

}]);
//# sourceMappingURL=src_app_pages_unit-price_unit-price_module_ts.js.map