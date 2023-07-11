"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_dashboard-before-login_dashboard-before-login_module_ts"],{

/***/ 54874:
/*!***************************************************************************************!*\
  !*** ./src/app/pages/dashboard-before-login/dashboard-before-login-routing.module.ts ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DashboardBeforeLoginPageRoutingModule": () => (/* binding */ DashboardBeforeLoginPageRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _dashboard_before_login_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dashboard-before-login.page */ 96684);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);




const routes = [{
  path: '',
  component: _dashboard_before_login_page__WEBPACK_IMPORTED_MODULE_0__.DashboardBeforeLoginPage
}];
class DashboardBeforeLoginPageRoutingModule {}
DashboardBeforeLoginPageRoutingModule.ɵfac = function DashboardBeforeLoginPageRoutingModule_Factory(t) {
  return new (t || DashboardBeforeLoginPageRoutingModule)();
};
DashboardBeforeLoginPageRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
  type: DashboardBeforeLoginPageRoutingModule
});
DashboardBeforeLoginPageRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](DashboardBeforeLoginPageRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
})();

/***/ }),

/***/ 76621:
/*!*******************************************************************************!*\
  !*** ./src/app/pages/dashboard-before-login/dashboard-before-login.module.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DashboardBeforeLoginPageModule": () => (/* binding */ DashboardBeforeLoginPageModule)
/* harmony export */ });
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ 38699);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _dashboard_before_login_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dashboard-before-login-routing.module */ 54874);
/* harmony import */ var _dashboard_before_login_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dashboard-before-login.page */ 96684);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);







class DashboardBeforeLoginPageModule {}
DashboardBeforeLoginPageModule.ɵfac = function DashboardBeforeLoginPageModule_Factory(t) {
  return new (t || DashboardBeforeLoginPageModule)();
};
DashboardBeforeLoginPageModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
  type: DashboardBeforeLoginPageModule
});
DashboardBeforeLoginPageModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__.TranslateModule, _dashboard_before_login_routing_module__WEBPACK_IMPORTED_MODULE_0__.DashboardBeforeLoginPageRoutingModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](DashboardBeforeLoginPageModule, {
    declarations: [_dashboard_before_login_page__WEBPACK_IMPORTED_MODULE_1__.DashboardBeforeLoginPage],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__.TranslateModule, _dashboard_before_login_routing_module__WEBPACK_IMPORTED_MODULE_0__.DashboardBeforeLoginPageRoutingModule]
  });
})();

/***/ }),

/***/ 96684:
/*!*****************************************************************************!*\
  !*** ./src/app/pages/dashboard-before-login/dashboard-before-login.page.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DashboardBeforeLoginPage": () => (/* binding */ DashboardBeforeLoginPage)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _services_translate_config_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/translate-config.service */ 45340);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var src_providers_utils_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/providers/utils/config */ 43485);
/* harmony import */ var src_providers_utils_utils_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/providers/utils/utils.service */ 30423);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ 38699);







class DashboardBeforeLoginPage {
  constructor(activatedRoute, translateConfigService, menuControl, router, config, utils) {
    this.activatedRoute = activatedRoute;
    this.translateConfigService = translateConfigService;
    this.menuControl = menuControl;
    this.router = router;
    this.config = config;
    this.utils = utils;
    /**
     * This method is used to navigate to Login Page
     */
    this.login = function () {
      var _a;
      if ((_a = this.config.passCodeInfo) === null || _a === void 0 ? void 0 : _a.hasPasscodeAuth) {
        let showFingerData = {
          showFingerPrint: 'true'
        };
        this.router.navigate(['/login-first'], {
          state: {
            showFingerData: showFingerData
          }
        });
      } else {
        this.router.navigate(["login-first"]);
      }
    };
    this.selectedLanguage = this.translateConfigService.getDefaultLanguage();
    this.translateConfigService.setLanguage('en');
  }
  ionViewWillEnter() {
    // this.utils.component.emit(MenuOptions.MY_HOME_PAGE);
  }
  ionViewDidEnter() {
    // this.menuControl.swipeGesture(false);
    // this.menuControl.enable(true, 'first');
    // this.menuControl.enable(false);
    this.config.currentPage.pageName = "DashboardBeforeLoginPage";
  }
  contactUs() {
    this.router.navigate(['/contact-us'], {
      replaceUrl: true
    });
  }
  aboutUs() {
    // this.menuControl.open();
    this.router.navigate(['/about-us'], {
      replaceUrl: true
    });
  }
  unitPrice() {
    this.router.navigate(['/unit-price'], {
      replaceUrl: true
    });
  }
  showOpenPdf() {
    var UserGuideLink = "https://www.sunlifemalaysia.com/getmedia/939a7f39-52fd-441a-9b85-64c810208b48/SunAccess-UserGuide.aspx";
    this.utils.openLink(UserGuideLink);
  }
  register() {
    this.router.navigate(['/sign-up']);
  }
}
DashboardBeforeLoginPage.ɵfac = function DashboardBeforeLoginPage_Factory(t) {
  return new (t || DashboardBeforeLoginPage)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_translate_config_service__WEBPACK_IMPORTED_MODULE_0__.TranslateConfigService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_5__.MenuController), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_providers_utils_config__WEBPACK_IMPORTED_MODULE_1__.ConfigProvider), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_providers_utils_utils_service__WEBPACK_IMPORTED_MODULE_2__.UtilService));
};
DashboardBeforeLoginPage.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
  type: DashboardBeforeLoginPage,
  selectors: [["app-dashboard-before-login"]],
  decls: 55,
  vars: 24,
  consts: [[1, "ion-padding"], [1, "ion-justify-content-center", "ion-align-items-center"], ["src", "assets/imgs/SL_CLR_PMS.png", "alt", "...", 1, "sunlifelogo"], [1, "welcome_txt"], [1, "text_color_base", "white_container_border_radius", "white_container_border_shadow", "padding_1", 3, "click"], ["size", "3", 1, "ion-text-center"], [1, "fas", "fa-dollar-sign", "font_2"], [1, "margin_auto", "colLabel"], [1, "fas", "fa-info", "font_2"], [1, "fas", "fa-comments", "font_2"], [1, "paddingTop"], [1, "login_tile_bg"], [1, "padding_2"], ["size", "5", 1, "ion-text-center", 3, "click"], [1, "fas", "fa-sign-in-alt", "text_color_white", "font_size_18", "padding_3"], [1, "text_color_white", "font_1"], [1, "ion-align-self-center"], [1, "ion-text-center", "separator"], [1, "fas", "fa-user-plus", "text_color_white", "font_size_18", "padding_3"], [1, "link", 3, "click"], [2, "height", "5% !important"]],
  template: function DashboardBeforeLoginPage_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "ion-content", 0)(1, "section")(2, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "img", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 3)(5, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](7, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](10, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "ion-row", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function DashboardBeforeLoginPage_Template_ion_row_click_11_listener() {
        return ctx.unitPrice();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "ion-col", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](13, "i", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "ion-col", 7)(15, "ion-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](16);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](17, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "ion-row", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function DashboardBeforeLoginPage_Template_ion_row_click_18_listener() {
        return ctx.aboutUs();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](19, "ion-col", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](20, "i", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](21, "ion-col", 7)(22, "ion-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](23);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](24, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](25, "ion-row", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function DashboardBeforeLoginPage_Template_ion_row_click_25_listener() {
        return ctx.contactUs();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](26, "ion-col", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](27, "i", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](28, "ion-col", 7)(29, "ion-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](30);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](31, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](32, "div", 10)(33, "section", 11)(34, "ion-row", 12)(35, "ion-col", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function DashboardBeforeLoginPage_Template_ion_col_click_35_listener() {
        return ctx.login();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](36, "i", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](37, "ion-text", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](38);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](39, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](40, "ion-col", 16)(41, "p", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](42, "|");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](43, "ion-col", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function DashboardBeforeLoginPage_Template_ion_col_click_43_listener() {
        return ctx.register();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](44, "i", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](45, "ion-text", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](46);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](47, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](48, "ion-row")(49, "ion-label", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function DashboardBeforeLoginPage_Template_ion_label_click_49_listener() {
        return ctx.showOpenPdf();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](50);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](51, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](52, "ion-row", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](53, "br")(54, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](7, 8, "welcome"));
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](10, 10, "sunacces"));
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](17, 12, "unitprice"));
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](24, 14, "aboutus"));
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](31, 16, "contactus"));
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](8);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](39, 18, "login"), " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](8);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](47, 20, "newuser"), " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](51, 22, "userRegistrationGuidetitle"), " ");
    }
  },
  dependencies: [_ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonCol, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonContent, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonLabel, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonRow, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonText, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__.TranslatePipe],
  styles: ["ion-content[_ngcontent-%COMP%] {\n  --background: url(/../assets/imgs/app_bg.jpg) no-repeat center center / cover;\n}\nion-content[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%] {\n  text-align: center;\n}\nion-content[_ngcontent-%COMP%]   .sunlifelogo[_ngcontent-%COMP%] {\n  margin-top: 10%;\n  margin-bottom: 10%;\n  width: 50%;\n  height: 50%;\n  display: block;\n  margin-left: auto;\n  margin-right: auto;\n}\nion-content[_ngcontent-%COMP%]   .item-inner[_ngcontent-%COMP%] {\n  border-bottom: none !important;\n}\nion-content[_ngcontent-%COMP%]   .text_color_white[_ngcontent-%COMP%] {\n  color: #ffffff !important;\n}\nion-content[_ngcontent-%COMP%]   .text_color_base[_ngcontent-%COMP%] {\n  color: var(--ion-color-secondary);\n}\nion-content[_ngcontent-%COMP%]   ion-col[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%] {\n  font-weight: normal !important;\n}\nion-content[_ngcontent-%COMP%]   .padding_1[_ngcontent-%COMP%] {\n  padding: 10px !important;\n  margin-bottom: 10px;\n}\nion-content[_ngcontent-%COMP%]   .padding_2[_ngcontent-%COMP%] {\n  padding: 5px !important;\n  margin-bottom: 20px;\n}\nion-content[_ngcontent-%COMP%]   .padding_3[_ngcontent-%COMP%] {\n  padding: 5px 0px 5px 0px !important;\n}\nion-content[_ngcontent-%COMP%]   .welcome_txt[_ngcontent-%COMP%] {\n  text-align: center;\n  color: var(--ion-color-secondary);\n  font-size: 1.6rem !important;\n  margin: 40px 0 0;\n  line-height: 35px;\n  margin-bottom: 30px;\n}\nion-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 5px;\n}\nion-content[_ngcontent-%COMP%]   .separator[_ngcontent-%COMP%] {\n  color: #ffffff !important;\n}\nion-content[_ngcontent-%COMP%]   .login_tile_bg[_ngcontent-%COMP%] {\n  background-color: var(--ion-color-secondary);\n  border-radius: 15px !important;\n}\nion-content[_ngcontent-%COMP%]   .white_container_border_shadow[_ngcontent-%COMP%] {\n  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);\n}\nion-content[_ngcontent-%COMP%]   .white_container_border_radius[_ngcontent-%COMP%] {\n  background-color: rgba(255, 255, 255, 0.7) !important;\n  border-radius: 15px !important;\n}\nion-content[_ngcontent-%COMP%]   .colLabel[_ngcontent-%COMP%] {\n  padding: 15px !important;\n}\nion-content[_ngcontent-%COMP%]   .margin_auto[_ngcontent-%COMP%] {\n  margin-top: auto;\n  margin-bottom: auto;\n}\nion-content[_ngcontent-%COMP%]   .font_size_18[_ngcontent-%COMP%] {\n  font-size: 1.6rem !important;\n}\nion-content[_ngcontent-%COMP%]   .font_size_25[_ngcontent-%COMP%] {\n  font-size: 2rem !important;\n}\nion-content[_ngcontent-%COMP%]   .col[_ngcontent-%COMP%] {\n  padding: 0px !important;\n}\nion-content[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%] {\n  font-family: Agenda-SemiBold;\n  font-size: 1rem;\n  margin-top: -10px;\n  line-height: 20px;\n}\nion-content[_ngcontent-%COMP%]   .separator[_ngcontent-%COMP%] {\n  color: white;\n}\nion-content[_ngcontent-%COMP%]   .margin_auto[_ngcontent-%COMP%] {\n  margin-top: auto;\n  margin-bottom: auto;\n}\nion-content[_ngcontent-%COMP%]   .scroll-content[_ngcontent-%COMP%] {\n  padding: 15px !important;\n}\nion-content[_ngcontent-%COMP%]   .paddingTop[_ngcontent-%COMP%] {\n  padding-top: 7px;\n}\nion-content[_ngcontent-%COMP%]   .link[_ngcontent-%COMP%] {\n  color: var(--ion-color-secondary);\n  text-decoration: underline;\n  white-space: unset;\n  text-align: center;\n  width: 100%;\n  font-weight: normal !important;\n}\nion-content[_ngcontent-%COMP%]   .font_1[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n  font-family: Agenda-Regular;\n}\nion-content[_ngcontent-%COMP%]   .font_2[_ngcontent-%COMP%] {\n  font-size: 2.2rem;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcGFnZXMvZGFzaGJvYXJkLWJlZm9yZS1sb2dpbi9kYXNoYm9hcmQtYmVmb3JlLWxvZ2luLnBhZ2Uuc2NzcyIsIndlYnBhY2s6Ly8uLy4uLy4uLy4uL0FsbCUyMFByb2plY3RzL01hbGF5c2lhX0NsaWVudEFwcF9SZXZhbXAvU3VuQWNjZXNzX0lvbmljNl9SZXZhbXAvc3JjL2FwcC9wYWdlcy9kYXNoYm9hcmQtYmVmb3JlLWxvZ2luL2Rhc2hib2FyZC1iZWZvcmUtbG9naW4ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsNkVBQUE7QUNDRjtBREFFO0VBQ0Usa0JBQUE7QUNFSjtBREVBO0VBQ0UsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQ0FGO0FERUE7RUFDRSw4QkFBQTtBQ0FGO0FERUE7RUFDRSx5QkFBQTtBQ0FGO0FERUE7RUFDRSxpQ0FBQTtBQ0FGO0FESUU7RUFDRSw4QkFBQTtBQ0ZKO0FES0E7RUFDRSx3QkFBQTtFQUNBLG1CQUFBO0FDSEY7QURNQTtFQUNFLHVCQUFBO0VBQ0EsbUJBQUE7QUNKRjtBRE1BO0VBQ0UsbUNBQUE7QUNKRjtBRE9BO0VBRUUsa0JBQUE7RUFDQSxpQ0FBQTtFQUNBLDRCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0FDTkY7QURRQTtFQUNFLFdBQUE7QUNORjtBRFFBO0VBQ0UseUJBQUE7QUNORjtBRFFBO0VBRUUsNENBQUE7RUFDQSw4QkFBQTtBQ1BGO0FEWUE7RUFDRSwwQ0FBQTtBQ1ZGO0FEYUE7RUFDRSxxREFBQTtFQUNBLDhCQUFBO0FDWEY7QURjQTtFQUNFLHdCQUFBO0FDWkY7QURjQTtFQUNFLGdCQUFBO0VBQ0EsbUJBQUE7QUNaRjtBRGNBO0VBQ0UsNEJBQUE7QUNaRjtBRGNBO0VBQ0UsMEJBQUE7QUNaRjtBRGVBO0VBQ0UsdUJBQUE7QUNiRjtBRGdCRTtFQUNFLDRCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7QUNkSjtBRHdCQTtFQUNFLFlBQUE7QUN0QkY7QUR3QkE7RUFDRSxnQkFBQTtFQUNBLG1CQUFBO0FDdEJGO0FEeUJBO0VBQ0Usd0JBQUE7QUN2QkY7QUQwQkE7RUFDRSxnQkFBQTtBQ3hCRjtBRDRCQTtFQUNFLGlDQUFBO0VBQ0EsMEJBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBRUEsV0FBQTtFQUNDLDhCQUFBO0FDM0JIO0FENkJFO0VBQ0UsaUJBQUE7RUFDQSwyQkFBQTtBQzNCSjtBRDZCRTtFQUNFLGlCQUFBO0FDM0JKIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNvbnRlbnQge1xyXG4gIC0tYmFja2dyb3VuZDogdXJsKC8uLi9hc3NldHMvaW1ncy9hcHBfYmcuanBnKSBuby1yZXBlYXQgY2VudGVyIGNlbnRlciAvIGNvdmVyO1xyXG4gIGlvbi1sYWJlbCB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgfVxyXG5cclxuXHJcbi5zdW5saWZlbG9nbyB7XHJcbiAgbWFyZ2luLXRvcDogMTAlO1xyXG4gIG1hcmdpbi1ib3R0b206IDEwJTtcclxuICB3aWR0aDogNTAlO1xyXG4gIGhlaWdodDogNTAlO1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gIG1hcmdpbi1yaWdodDogYXV0bztcclxufVxyXG4uaXRlbS1pbm5lciB7XHJcbiAgYm9yZGVyLWJvdHRvbTogbm9uZSAhaW1wb3J0YW50O1xyXG59XHJcbi50ZXh0X2NvbG9yX3doaXRlIHtcclxuICBjb2xvcjogI2ZmZmZmZiAhaW1wb3J0YW50O1xyXG59XHJcbi50ZXh0X2NvbG9yX2Jhc2Uge1xyXG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5KTtcclxufVxyXG5cclxuaW9uLWNvbCB7XHJcbiAgaW9uLWxhYmVsIHtcclxuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWwgIWltcG9ydGFudDtcclxuICB9XHJcbn1cclxuLnBhZGRpbmdfMXtcclxuICBwYWRkaW5nOiAxMHB4ICFpbXBvcnRhbnQ7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuXHJcbn1cclxuLnBhZGRpbmdfMntcclxuICBwYWRkaW5nOiA1cHggIWltcG9ydGFudDtcclxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG59XHJcbi5wYWRkaW5nXzN7XHJcbiAgcGFkZGluZzogNXB4IDBweCA1cHggMHB4IWltcG9ydGFudDtcclxufVxyXG5cclxuLndlbGNvbWVfdHh0IHtcclxuXHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5KTtcclxuICBmb250LXNpemU6IDEuNnJlbSAhaW1wb3J0YW50O1xyXG4gIG1hcmdpbjogNDBweCAwIDA7XHJcbiAgbGluZS1oZWlnaHQ6IDM1cHg7XHJcbiAgbWFyZ2luLWJvdHRvbTozMHB4Oy8vMTUlO1xyXG59XHJcbnB7XHJcbiAgbWFyZ2luOiA1cHg7XHJcbn1cclxuLnNlcGFyYXRvciB7XHJcbiAgY29sb3I6ICNmZmZmZmYgIWltcG9ydGFudDtcclxufVxyXG4ubG9naW5fdGlsZV9iZyB7XHJcbiAgLy8gYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5KTtcclxuICBib3JkZXItcmFkaXVzOiAxNXB4ICFpbXBvcnRhbnQ7XHJcbiAgLy8gcGFkZGluZzoxNXB4Oy8vMTBweDtcclxufVxyXG5cclxuXHJcbi53aGl0ZV9jb250YWluZXJfYm9yZGVyX3NoYWRvdyB7XHJcbiAgYm94LXNoYWRvdzogMCAxMHB4IDMwcHggcmdiYSgwLCAwLCAwLCAwLjEpO1xyXG59XHJcblxyXG4ud2hpdGVfY29udGFpbmVyX2JvcmRlcl9yYWRpdXMge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC43KSAhaW1wb3J0YW50O1xyXG4gIGJvcmRlci1yYWRpdXM6IDE1cHggIWltcG9ydGFudDtcclxufVxyXG5cclxuLmNvbExhYmVsIHtcclxuICBwYWRkaW5nOiAxNXB4ICAhaW1wb3J0YW50O1xyXG59XHJcbi5tYXJnaW5fYXV0byB7XHJcbiAgbWFyZ2luLXRvcDogYXV0bztcclxuICBtYXJnaW4tYm90dG9tOiBhdXRvO1xyXG59XHJcbi5mb250X3NpemVfMTgge1xyXG4gIGZvbnQtc2l6ZTogMS42cmVtICFpbXBvcnRhbnQ7XHJcbn1cclxuLmZvbnRfc2l6ZV8yNSB7XHJcbiAgZm9udC1zaXplOiAyLjByZW0gIWltcG9ydGFudDtcclxufVxyXG5cclxuLmNvbHtcclxuICBwYWRkaW5nOjBweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4gIGlvbi1sYWJlbHtcclxuICAgIGZvbnQtZmFtaWx5OiBBZ2VuZGEtU2VtaUJvbGQ7XHJcbiAgICBmb250LXNpemU6IDEuMHJlbTtcclxuICAgIG1hcmdpbi10b3A6IC0xMHB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDIwcHg7XHJcbiAgfVxyXG5cclxuLy8gc3BhbntcclxuLy8gICBmb250LWZhbWlseTogQWdlbmRhLVNlbWlCb2xkO1xyXG4vLyAgIGZvbnQtc2l6ZTogMS40cmVtO1xyXG4vLyAgIG1hcmdpbi10b3A6IC0xMHB4O1xyXG4vLyAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xyXG4vLyB9XHJcblxyXG4uc2VwYXJhdG9ye1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxufVxyXG4ubWFyZ2luX2F1dG97XHJcbiAgbWFyZ2luLXRvcDogYXV0bztcclxuICBtYXJnaW4tYm90dG9tOiBhdXRvO1xyXG59XHJcblxyXG4uc2Nyb2xsLWNvbnRlbnQge1xyXG4gIHBhZGRpbmc6IDE1cHggIWltcG9ydGFudDtcclxufVxyXG5cclxuLnBhZGRpbmdUb3B7XHJcbiAgcGFkZGluZy10b3A6IDdweDtcclxufVxyXG5cclxuXHJcbi5saW5rIHtcclxuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXNlY29uZGFyeSk7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XHJcbiAgd2hpdGUtc3BhY2U6IHVuc2V0O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAvLyBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gICBmb250LXdlaWdodDogbm9ybWFsICFpbXBvcnRhbnQ7XHJcbn1cclxuICAuZm9udF8xe1xyXG4gICAgZm9udC1zaXplOjAuOXJlbTtcclxuICAgIGZvbnQtZmFtaWx5OiBBZ2VuZGEtUmVndWxhcjtcclxuICB9XHJcbiAgLmZvbnRfMntcclxuICAgIGZvbnQtc2l6ZTogMi4ycmVtO1xyXG4gICAgLy8gZm9udC1mYW1pbHk6IEFnZW5kYS1SZWd1bGFyO1xyXG4gIH0gXHJcblxyXG59XHJcbiIsImlvbi1jb250ZW50IHtcbiAgLS1iYWNrZ3JvdW5kOiB1cmwoLy4uL2Fzc2V0cy9pbWdzL2FwcF9iZy5qcGcpIG5vLXJlcGVhdCBjZW50ZXIgY2VudGVyIC8gY292ZXI7XG59XG5pb24tY29udGVudCBpb24tbGFiZWwge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5pb24tY29udGVudCAuc3VubGlmZWxvZ28ge1xuICBtYXJnaW4tdG9wOiAxMCU7XG4gIG1hcmdpbi1ib3R0b206IDEwJTtcbiAgd2lkdGg6IDUwJTtcbiAgaGVpZ2h0OiA1MCU7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW4tbGVmdDogYXV0bztcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xufVxuaW9uLWNvbnRlbnQgLml0ZW0taW5uZXIge1xuICBib3JkZXItYm90dG9tOiBub25lICFpbXBvcnRhbnQ7XG59XG5pb24tY29udGVudCAudGV4dF9jb2xvcl93aGl0ZSB7XG4gIGNvbG9yOiAjZmZmZmZmICFpbXBvcnRhbnQ7XG59XG5pb24tY29udGVudCAudGV4dF9jb2xvcl9iYXNlIHtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1zZWNvbmRhcnkpO1xufVxuaW9uLWNvbnRlbnQgaW9uLWNvbCBpb24tbGFiZWwge1xuICBmb250LXdlaWdodDogbm9ybWFsICFpbXBvcnRhbnQ7XG59XG5pb24tY29udGVudCAucGFkZGluZ18xIHtcbiAgcGFkZGluZzogMTBweCAhaW1wb3J0YW50O1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufVxuaW9uLWNvbnRlbnQgLnBhZGRpbmdfMiB7XG4gIHBhZGRpbmc6IDVweCAhaW1wb3J0YW50O1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xufVxuaW9uLWNvbnRlbnQgLnBhZGRpbmdfMyB7XG4gIHBhZGRpbmc6IDVweCAwcHggNXB4IDBweCAhaW1wb3J0YW50O1xufVxuaW9uLWNvbnRlbnQgLndlbGNvbWVfdHh0IHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXNlY29uZGFyeSk7XG4gIGZvbnQtc2l6ZTogMS42cmVtICFpbXBvcnRhbnQ7XG4gIG1hcmdpbjogNDBweCAwIDA7XG4gIGxpbmUtaGVpZ2h0OiAzNXB4O1xuICBtYXJnaW4tYm90dG9tOiAzMHB4O1xufVxuaW9uLWNvbnRlbnQgcCB7XG4gIG1hcmdpbjogNXB4O1xufVxuaW9uLWNvbnRlbnQgLnNlcGFyYXRvciB7XG4gIGNvbG9yOiAjZmZmZmZmICFpbXBvcnRhbnQ7XG59XG5pb24tY29udGVudCAubG9naW5fdGlsZV9iZyB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWlvbi1jb2xvci1zZWNvbmRhcnkpO1xuICBib3JkZXItcmFkaXVzOiAxNXB4ICFpbXBvcnRhbnQ7XG59XG5pb24tY29udGVudCAud2hpdGVfY29udGFpbmVyX2JvcmRlcl9zaGFkb3cge1xuICBib3gtc2hhZG93OiAwIDEwcHggMzBweCByZ2JhKDAsIDAsIDAsIDAuMSk7XG59XG5pb24tY29udGVudCAud2hpdGVfY29udGFpbmVyX2JvcmRlcl9yYWRpdXMge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNykgIWltcG9ydGFudDtcbiAgYm9yZGVyLXJhZGl1czogMTVweCAhaW1wb3J0YW50O1xufVxuaW9uLWNvbnRlbnQgLmNvbExhYmVsIHtcbiAgcGFkZGluZzogMTVweCAhaW1wb3J0YW50O1xufVxuaW9uLWNvbnRlbnQgLm1hcmdpbl9hdXRvIHtcbiAgbWFyZ2luLXRvcDogYXV0bztcbiAgbWFyZ2luLWJvdHRvbTogYXV0bztcbn1cbmlvbi1jb250ZW50IC5mb250X3NpemVfMTgge1xuICBmb250LXNpemU6IDEuNnJlbSAhaW1wb3J0YW50O1xufVxuaW9uLWNvbnRlbnQgLmZvbnRfc2l6ZV8yNSB7XG4gIGZvbnQtc2l6ZTogMnJlbSAhaW1wb3J0YW50O1xufVxuaW9uLWNvbnRlbnQgLmNvbCB7XG4gIHBhZGRpbmc6IDBweCAhaW1wb3J0YW50O1xufVxuaW9uLWNvbnRlbnQgaW9uLWxhYmVsIHtcbiAgZm9udC1mYW1pbHk6IEFnZW5kYS1TZW1pQm9sZDtcbiAgZm9udC1zaXplOiAxcmVtO1xuICBtYXJnaW4tdG9wOiAtMTBweDtcbiAgbGluZS1oZWlnaHQ6IDIwcHg7XG59XG5pb24tY29udGVudCAuc2VwYXJhdG9yIHtcbiAgY29sb3I6IHdoaXRlO1xufVxuaW9uLWNvbnRlbnQgLm1hcmdpbl9hdXRvIHtcbiAgbWFyZ2luLXRvcDogYXV0bztcbiAgbWFyZ2luLWJvdHRvbTogYXV0bztcbn1cbmlvbi1jb250ZW50IC5zY3JvbGwtY29udGVudCB7XG4gIHBhZGRpbmc6IDE1cHggIWltcG9ydGFudDtcbn1cbmlvbi1jb250ZW50IC5wYWRkaW5nVG9wIHtcbiAgcGFkZGluZy10b3A6IDdweDtcbn1cbmlvbi1jb250ZW50IC5saW5rIHtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1zZWNvbmRhcnkpO1xuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbiAgd2hpdGUtc3BhY2U6IHVuc2V0O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHdpZHRoOiAxMDAlO1xuICBmb250LXdlaWdodDogbm9ybWFsICFpbXBvcnRhbnQ7XG59XG5pb24tY29udGVudCAuZm9udF8xIHtcbiAgZm9udC1zaXplOiAwLjlyZW07XG4gIGZvbnQtZmFtaWx5OiBBZ2VuZGEtUmVndWxhcjtcbn1cbmlvbi1jb250ZW50IC5mb250XzIge1xuICBmb250LXNpemU6IDIuMnJlbTtcbn0iXSwic291cmNlUm9vdCI6IiJ9 */"]
});

/***/ })

}]);
//# sourceMappingURL=src_app_pages_dashboard-before-login_dashboard-before-login_module_ts.js.map