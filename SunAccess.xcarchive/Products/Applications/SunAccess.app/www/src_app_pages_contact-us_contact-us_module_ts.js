"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_contact-us_contact-us_module_ts"],{

/***/ 55775:
/*!***************************************************************!*\
  !*** ./src/app/pages/contact-us/contact-us-routing.module.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ContactUsPageRoutingModule": () => (/* binding */ ContactUsPageRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _contact_us_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./contact-us.page */ 89314);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);




const routes = [{
  path: '',
  component: _contact_us_page__WEBPACK_IMPORTED_MODULE_0__.ContactUsPage
}];
class ContactUsPageRoutingModule {}
ContactUsPageRoutingModule.ɵfac = function ContactUsPageRoutingModule_Factory(t) {
  return new (t || ContactUsPageRoutingModule)();
};
ContactUsPageRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
  type: ContactUsPageRoutingModule
});
ContactUsPageRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](ContactUsPageRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
})();

/***/ }),

/***/ 14754:
/*!*******************************************************!*\
  !*** ./src/app/pages/contact-us/contact-us.module.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ContactUsPageModule": () => (/* binding */ ContactUsPageModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _contact_us_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./contact-us-routing.module */ 55775);
/* harmony import */ var _contact_us_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./contact-us.page */ 89314);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ 38699);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);







class ContactUsPageModule {}
ContactUsPageModule.ɵfac = function ContactUsPageModule_Factory(t) {
  return new (t || ContactUsPageModule)();
};
ContactUsPageModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
  type: ContactUsPageModule
});
ContactUsPageModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__.TranslateModule, _contact_us_routing_module__WEBPACK_IMPORTED_MODULE_0__.ContactUsPageRoutingModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](ContactUsPageModule, {
    declarations: [_contact_us_page__WEBPACK_IMPORTED_MODULE_1__.ContactUsPage],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__.TranslateModule, _contact_us_routing_module__WEBPACK_IMPORTED_MODULE_0__.ContactUsPageRoutingModule]
  });
})();

/***/ }),

/***/ 89314:
/*!*****************************************************!*\
  !*** ./src/app/pages/contact-us/contact-us.page.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ContactUsPage": () => (/* binding */ ContactUsPage)
/* harmony export */ });
/* harmony import */ var src_app_app_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/app.component */ 55041);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ 38699);
/* harmony import */ var src_providers_utils_utils_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/providers/utils/utils.service */ 30423);
/* harmony import */ var _services_translate_config_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/translate-config.service */ 45340);
/* harmony import */ var src_providers_utils_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/providers/utils/config */ 43485);







class ContactUsPage {
  constructor(navCtrl, translate, utilServices, menuControl, translateConfigService, config, platfrom) {
    this.navCtrl = navCtrl;
    this.translate = translate;
    this.utilServices = utilServices;
    this.menuControl = menuControl;
    this.translateConfigService = translateConfigService;
    this.config = config;
    this.platfrom = platfrom;
    /**
     * This method is used to open Facebook Sunlife Page
     */
    this.openFacebook = function () {
      this.utilServices.launchExternalApp(this.config.contact_us.fb_ios, this.config.contact_us.fb_android, this.config.contact_us.fb_app_url, this.config.contact_us.fb_browser_url);
    };
    /**
     * This method is used to open Instagram Sunlife pgae.
     */
    this.openInstagram = function () {
      this.utilServices.launchExternalApp(this.config.contact_us.insta_ios, this.config.contact_us.insta_android, this.config.contact_us.insta_app_url, this.config.contact_us.insta_browser_url);
    };
    /**
     * This method is used to open Youtube and open Sunlife Video
     */
    this.openYoutube = function () {
      this.utilServices.launchExternalApp(this.config.contact_us.youtube_ios, this.config.contact_us.youtube_android, this.config.contact_us.youtube_app_url, this.config.contact_us.youtube_browser_url);
    };
    /**
     * This method is used to open Maps pointing to Sunlife Malaysia .
     */
    this.openMaps = function () {
      this.utilServices.launchExternalApp(this.config.contact_us.maps_ios, this.config.contact_us.maps_android, this.config.contact_us.maps_app_url, this.config.contact_us.maps_browser_url);
    };
    /**
     * This method is used to open Browser with Sunlife Malaysia URL.
     */
    this.browser = function () {
      this.utilServices.launchExternalApp('', '', '', this.config.contact_us.sunlife_browser);
    };
    this.config.currentPage.pageName = "ContactUsPage";
    this.selectedLanguage = this.translateConfigService.getDefaultLanguage();
    //this.utilServices.analytics("contactUs");
    this.translateConfigService.setLanguage('en');
  }
  /**
  * This method is used to dial a number
  */
  callJoin() {
    this.utilServices.callJoin(this.config.contact_us.contact_no);
  }
  /**
   *
   * This method is used to open Email open with to email with the given Email
   */
  emailCompose() {
    // this.utilServices.emailCompose(this.config.contact_us.emailId);
  }
  /**
  * In this method we are updating the sidemenu title
  */
  ionViewDidEnter() {
    // this.utilServices.component.emit(MenuOptions.CONTACT_US);
    if (this.config.userDetails.name != null) {
      this.menuControl.enable(true, 'custom');
      this.menuControl.enable(false, 'first');
    } else {
      this.menuControl.enable(true, 'first');
      this.menuControl.enable(false, 'custom');
    }
    this.utilServices.component.emit(src_app_app_component__WEBPACK_IMPORTED_MODULE_0__.MenuOptions.CONTACT_US);
  }
}
ContactUsPage.ɵfac = function ContactUsPage_Factory(t) {
  return new (t || ContactUsPage)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_5__.NavController), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__.TranslateService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_providers_utils_utils_service__WEBPACK_IMPORTED_MODULE_1__.UtilService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_5__.MenuController), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_services_translate_config_service__WEBPACK_IMPORTED_MODULE_2__.TranslateConfigService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_providers_utils_config__WEBPACK_IMPORTED_MODULE_3__.ConfigProvider), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_5__.Platform));
};
ContactUsPage.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
  type: ContactUsPage,
  selectors: [["app-contact-us"]],
  decls: 80,
  vars: 35,
  consts: [["mode", "ios"], ["color", "primary", 1, "toolbar"], ["slot", "start", "auto-hide", "false", "color", "secondary"], [1, "bold-font"], [1, "app_bg", "ion-padding", "text_color_base"], [1, "white_container_border_radius", "text_color_base", "ion-padding"], ["size", "2", 1, "ion-text-end"], [1, "fas", "fa-comments", "font_size_22"], ["size", "10"], [1, "heading"], [1, "font_size_14", 2, "font-family", "Agenda-light", "display", "block"], [3, "click"], [1, "font_size_14", "font_color", "dispaly:block;"], [1, "font_size_14", "font_color"], [1, "fas", "fa-phone", "font_size_22"], [1, "font_size_14", "font_color", 3, "click"], [1, "fas", "fa-fax", "font_size_22"], [1, "font_size_14"], [1, "fas", "fa-at", "font_size_22"], ["href", "mailto:policy.admin@sunlifemalaysia.com", 1, "font_size_14", "font_color"], [1, "fas", "fa-clock", "font_size_22"], [1, "font_size_14", 2, "display", "block"], [1, "bottom_row"], [1, "ion-text-center", 3, "click"], [1, "fas", "fa-globe", "bowser"], [1, "fab", "fa-facebook-square", "facebook"], [1, "fab", "fa-instagram", "instagram"], [1, "fab", "fa-youtube", "youtube"]],
  template: function ContactUsPage_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "ion-header", 0)(1, "ion-toolbar", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](2, "ion-menu-button", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "ion-title", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](5, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "ion-content", 4)(7, "div", 5)(8, "ion-row")(9, "ion-col", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](10, "i", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "ion-col", 8)(12, "ion-label", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](13);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](14, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](15, "ion-label", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](16);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](17, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](18, "ion-label", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](19);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](20, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](21, "div", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ContactUsPage_Template_div_click_21_listener() {
        return ctx.openMaps();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](22, "ion-label", 12)(23, "u");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](24);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](25, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](26, "ion-label", 13)(27, "u");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](28);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](29, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](30, "ion-row")(31, "ion-col", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](32, "i", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](33, "ion-col", 8)(34, "ion-label", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](35);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](36, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](37, "ion-label", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ContactUsPage_Template_ion_label_click_37_listener() {
        return ctx.callJoin();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](38, "u");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](39);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](40, "ion-row")(41, "ion-col", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](42, "i", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](43, "ion-col", 8)(44, "ion-label", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](45);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](46, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](47, "ion-label", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](48, "603-2614 3550");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](49, "ion-row")(50, "ion-col", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](51, "i", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](52, "ion-col", 8)(53, "ion-label", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](54);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](55, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](56, "a", 19)(57, "u");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](58);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](59, "ion-row")(60, "ion-col", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](61, "i", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](62, "ion-col", 8)(63, "ion-label", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](64);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](65, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](66, "ion-label", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](67);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](68, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](69, "ion-label", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](70, "8.30 am \u2013 5.30 pm");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](71, "ion-row", 22)(72, "ion-col", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ContactUsPage_Template_ion_col_click_72_listener() {
        return ctx.browser();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](73, "i", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](74, "ion-col", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ContactUsPage_Template_ion_col_click_74_listener() {
        return ctx.openFacebook();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](75, "i", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](76, "ion-col", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ContactUsPage_Template_ion_col_click_76_listener() {
        return ctx.openInstagram();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](77, "i", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](78, "ion-col", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ContactUsPage_Template_ion_col_click_78_listener() {
        return ctx.openYoutube();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](79, "i", 27);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](5, 13, "contactus"), " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](9);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](14, 15, "customerservice"));
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](17, 17, "sunlifeaberhad"));
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](20, 19, "sunlifetberhad"));
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](25, 21, "address1"), " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](29, 23, "address2"), " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](36, 25, "customercareline"));
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx.config.contact_us.contact_no);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](46, 27, "fax"));
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](9);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](55, 29, "email"));
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx.config.contact_us.emailId);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](65, 31, "businesshours"));
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](68, 33, "mondaytofriday"));
    }
  },
  dependencies: [_ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonCol, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonContent, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonHeader, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonLabel, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonMenuButton, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonRow, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonTitle, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonToolbar, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__.TranslatePipe],
  styles: ["ion-content[_ngcontent-%COMP%] {\n  --background: url(/../assets/imgs/app_bg.jpg) no-repeat center center / cover;\n}\nion-content[_ngcontent-%COMP%]   ion-title[_ngcontent-%COMP%] {\n  font-weight: bold !important;\n  color: --ion-color-secondary !important;\n}\nion-content[_ngcontent-%COMP%]   .white_container_border_radius[_ngcontent-%COMP%] {\n  background-color: rgba(255, 255, 255, 0.7) !important;\n  border-radius: 15px !important;\n}\nion-content[_ngcontent-%COMP%]   .heading[_ngcontent-%COMP%] {\n  font-family: Agenda-SemiBold !important;\n  font-size: 1.1rem !important;\n  line-height: 16px;\n  display: block;\n}\nion-content[_ngcontent-%COMP%]   .font_size_14[_ngcontent-%COMP%] {\n  font-family: Agenda-light;\n  font-size: 1rem !important;\n}\nion-content[_ngcontent-%COMP%]   .font_color[_ngcontent-%COMP%] {\n  color: #6095c9;\n}\nion-content[_ngcontent-%COMP%]   .heading[_ngcontent-%COMP%] {\n  font-family: Agenda-Semibold !important;\n}\nion-content[_ngcontent-%COMP%]   .facebook[_ngcontent-%COMP%] {\n  font-size: 2.2rem;\n  color: --ion-color-secondary;\n  border-radius: 0px !important;\n}\nion-content[_ngcontent-%COMP%]   .instagram[_ngcontent-%COMP%] {\n  font-size: 2.2rem;\n  color: --ion-color-secondary;\n}\nion-content[_ngcontent-%COMP%]   .youtube[_ngcontent-%COMP%] {\n  font-size: 2.2rem;\n  color: --ion-color-secondary;\n}\nion-content[_ngcontent-%COMP%]   .bowser[_ngcontent-%COMP%] {\n  font-size: 2.2rem;\n  color: --ion-color-secondary;\n}\nion-content[_ngcontent-%COMP%]   .font_size_22[_ngcontent-%COMP%] {\n  font-size: 1.2rem !important;\n}\nion-content[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%] {\n  margin: 0px !important;\n  display: block;\n  font-family: Agenda-light;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcGFnZXMvY29udGFjdC11cy9jb250YWN0LXVzLnBhZ2Uuc2NzcyIsIndlYnBhY2s6Ly8uLy4uLy4uLy4uL0FsbCUyMFByb2plY3RzL01hbGF5c2lhX0NsaWVudEFwcF9SZXZhbXAvU3VuQWNjZXNzX0lvbmljNl9SZXZhbXAvc3JjL2FwcC9wYWdlcy9jb250YWN0LXVzL2NvbnRhY3QtdXMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsNkVBQUE7QUNDRjtBRENBO0VBQ0UsNEJBQUE7RUFDQSx1Q0FBQTtBQ0NGO0FERUU7RUFDRSxxREFBQTtFQUNBLDhCQUFBO0FDQUo7QURHRTtFQUNFLHVDQUFBO0VBQ0EsNEJBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7QUNESjtBRE1BO0VBRUUseUJBQUE7RUFDQSwwQkFBQTtBQ0xGO0FET0E7RUFDRSxjQUFBO0FDTEY7QURPQTtFQUNFLHVDQUFBO0FDTEY7QURvQkU7RUFDRSxpQkFBQTtFQUNBLDRCQUFBO0VBQ0EsNkJBQUE7QUNsQko7QURxQkU7RUFDRSxpQkFBQTtFQUNBLDRCQUFBO0FDbkJKO0FEc0JFO0VBQ0UsaUJBQUE7RUFDQSw0QkFBQTtBQ3BCSjtBRHVCRTtFQUNFLGlCQUFBO0VBQ0EsNEJBQUE7QUNyQko7QUR1QkU7RUFDRSw0QkFBQTtBQ3JCSjtBRHdCQTtFQUNFLHNCQUFBO0VBQ0EsY0FBQTtFQUVBLHlCQUFBO0FDdkJGIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNvbnRlbnQge1xyXG4gIC0tYmFja2dyb3VuZDogdXJsKC8uLi9hc3NldHMvaW1ncy9hcHBfYmcuanBnKSBuby1yZXBlYXQgY2VudGVyIGNlbnRlciAvIGNvdmVyO1xyXG5cclxuaW9uLXRpdGxle1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkICFpbXBvcnRhbnQ7XHJcbiAgY29sb3I6LS1pb24tY29sb3Itc2Vjb25kYXJ5ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbiAgLndoaXRlX2NvbnRhaW5lcl9ib3JkZXJfcmFkaXVzIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC43KSAhaW1wb3J0YW50O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTVweCAhaW1wb3J0YW50O1xyXG4gIH1cclxuXHJcbiAgLmhlYWRpbmcge1xyXG4gICAgZm9udC1mYW1pbHk6IEFnZW5kYS1TZW1pQm9sZCAhaW1wb3J0YW50O1xyXG4gICAgZm9udC1zaXplOiAxLjFyZW0gIWltcG9ydGFudDtcclxuICAgIGxpbmUtaGVpZ2h0OiAxNnB4O1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgfVxyXG4gIC8vIGlvbi1sYWJlbHtcclxuICAvLyAgIGZvbnQtZmFtaWx5OiBBZ2VuZGEtbGlnaHQgIWltcG9ydGFudDtcclxuICAvLyB9XHJcbi5mb250X3NpemVfMTQge1xyXG4gIC8vZm9udC1zaXplOiAwLjdyZW0gIWltcG9ydGFudDtcclxuICBmb250LWZhbWlseTogQWdlbmRhLWxpZ2h0O1xyXG4gIGZvbnQtc2l6ZTogMXJlbSAhaW1wb3J0YW50O1xyXG59XHJcbi5mb250X2NvbG9ye1xyXG4gIGNvbG9yOiM2MDk1Yzk7XHJcbn1cclxuLmhlYWRpbmd7XHJcbiAgZm9udC1mYW1pbHk6IEFnZW5kYS1TZW1pYm9sZCAhaW1wb3J0YW50O1xyXG4gICAgLy9saW5lLWhlaWdodDogMTZweDtcclxufVxyXG5cclxuLy8gLmhlYWRpbmcgLmxhYmVsIHtcclxuLy8gICAgIGNvbG9yOi0taW9uLWNvbG9yLXNlY29uZGFyeTtcclxuLy8gfVxyXG4gIC8vIGlvbi1yb3cge1xyXG4gIC8vICAgbWFyZ2luOiAwcHggMHB4ICFpbXBvcnRhbnQ7XHJcbiAgLy8gICBwYWRkaW5nOiAwcHggMTBweCAhaW1wb3J0YW50O1xyXG4gIC8vIH1cclxuICAvLyBpb24tcm93OmZpcnN0LWNoaWxkIHtcclxuICAvLyAgIHBhZGRpbmctdG9wOiAwcHggIWltcG9ydGFudDtcclxuICAvLyB9XHJcblxyXG4gIC5mYWNlYm9vayB7XHJcbiAgICBmb250LXNpemU6IDIuMnJlbTtcclxuICAgIGNvbG9yOiAtLWlvbi1jb2xvci1zZWNvbmRhcnk7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwcHggIWltcG9ydGFudDtcclxuICB9XHJcblxyXG4gIC5pbnN0YWdyYW0ge1xyXG4gICAgZm9udC1zaXplOiAyLjJyZW07XHJcbiAgICBjb2xvcjogLS1pb24tY29sb3Itc2Vjb25kYXJ5O1xyXG4gIH1cclxuXHJcbiAgLnlvdXR1YmUge1xyXG4gICAgZm9udC1zaXplOiAyLjJyZW07XHJcbiAgICBjb2xvcjogLS1pb24tY29sb3Itc2Vjb25kYXJ5O1xyXG4gIH1cclxuXHJcbiAgLmJvd3NlciB7XHJcbiAgICBmb250LXNpemU6IDIuMnJlbTtcclxuICAgIGNvbG9yOiAtLWlvbi1jb2xvci1zZWNvbmRhcnk7XHJcbiAgfVxyXG4gIC5mb250X3NpemVfMjIge1xyXG4gICAgZm9udC1zaXplOiAxLjJyZW0gIWltcG9ydGFudDtcclxuICAgIC8vICBwYWRkaW5nLXRvcDo1cHggIWltcG9ydGFudDtcclxufVxyXG5pb24tbGFiZWx7XHJcbiAgbWFyZ2luOiAwcHggIWltcG9ydGFudDtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICAvL3doaXRlLXNwYWNlOiB1bnNldDtcclxuICBmb250LWZhbWlseTogQWdlbmRhLWxpZ2h0O1xyXG59XHJcbn0iLCJpb24tY29udGVudCB7XG4gIC0tYmFja2dyb3VuZDogdXJsKC8uLi9hc3NldHMvaW1ncy9hcHBfYmcuanBnKSBuby1yZXBlYXQgY2VudGVyIGNlbnRlciAvIGNvdmVyO1xufVxuaW9uLWNvbnRlbnQgaW9uLXRpdGxlIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQgIWltcG9ydGFudDtcbiAgY29sb3I6IC0taW9uLWNvbG9yLXNlY29uZGFyeSAhaW1wb3J0YW50O1xufVxuaW9uLWNvbnRlbnQgLndoaXRlX2NvbnRhaW5lcl9ib3JkZXJfcmFkaXVzIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjcpICFpbXBvcnRhbnQ7XG4gIGJvcmRlci1yYWRpdXM6IDE1cHggIWltcG9ydGFudDtcbn1cbmlvbi1jb250ZW50IC5oZWFkaW5nIHtcbiAgZm9udC1mYW1pbHk6IEFnZW5kYS1TZW1pQm9sZCAhaW1wb3J0YW50O1xuICBmb250LXNpemU6IDEuMXJlbSAhaW1wb3J0YW50O1xuICBsaW5lLWhlaWdodDogMTZweDtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5pb24tY29udGVudCAuZm9udF9zaXplXzE0IHtcbiAgZm9udC1mYW1pbHk6IEFnZW5kYS1saWdodDtcbiAgZm9udC1zaXplOiAxcmVtICFpbXBvcnRhbnQ7XG59XG5pb24tY29udGVudCAuZm9udF9jb2xvciB7XG4gIGNvbG9yOiAjNjA5NWM5O1xufVxuaW9uLWNvbnRlbnQgLmhlYWRpbmcge1xuICBmb250LWZhbWlseTogQWdlbmRhLVNlbWlib2xkICFpbXBvcnRhbnQ7XG59XG5pb24tY29udGVudCAuZmFjZWJvb2sge1xuICBmb250LXNpemU6IDIuMnJlbTtcbiAgY29sb3I6IC0taW9uLWNvbG9yLXNlY29uZGFyeTtcbiAgYm9yZGVyLXJhZGl1czogMHB4ICFpbXBvcnRhbnQ7XG59XG5pb24tY29udGVudCAuaW5zdGFncmFtIHtcbiAgZm9udC1zaXplOiAyLjJyZW07XG4gIGNvbG9yOiAtLWlvbi1jb2xvci1zZWNvbmRhcnk7XG59XG5pb24tY29udGVudCAueW91dHViZSB7XG4gIGZvbnQtc2l6ZTogMi4ycmVtO1xuICBjb2xvcjogLS1pb24tY29sb3Itc2Vjb25kYXJ5O1xufVxuaW9uLWNvbnRlbnQgLmJvd3NlciB7XG4gIGZvbnQtc2l6ZTogMi4ycmVtO1xuICBjb2xvcjogLS1pb24tY29sb3Itc2Vjb25kYXJ5O1xufVxuaW9uLWNvbnRlbnQgLmZvbnRfc2l6ZV8yMiB7XG4gIGZvbnQtc2l6ZTogMS4ycmVtICFpbXBvcnRhbnQ7XG59XG5pb24tY29udGVudCBpb24tbGFiZWwge1xuICBtYXJnaW46IDBweCAhaW1wb3J0YW50O1xuICBkaXNwbGF5OiBibG9jaztcbiAgZm9udC1mYW1pbHk6IEFnZW5kYS1saWdodDtcbn0iXSwic291cmNlUm9vdCI6IiJ9 */"]
});

/***/ })

}]);
//# sourceMappingURL=src_app_pages_contact-us_contact-us_module_ts.js.map