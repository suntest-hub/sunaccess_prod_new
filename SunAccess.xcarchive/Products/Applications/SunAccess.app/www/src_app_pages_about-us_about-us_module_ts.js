"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_about-us_about-us_module_ts"],{

/***/ 5790:
/*!***********************************************************!*\
  !*** ./src/app/pages/about-us/about-us-routing.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AboutUsPageRoutingModule": () => (/* binding */ AboutUsPageRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _about_us_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./about-us.page */ 92794);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);




const routes = [{
  path: '',
  component: _about_us_page__WEBPACK_IMPORTED_MODULE_0__.AboutUsPage
}];
class AboutUsPageRoutingModule {}
AboutUsPageRoutingModule.ɵfac = function AboutUsPageRoutingModule_Factory(t) {
  return new (t || AboutUsPageRoutingModule)();
};
AboutUsPageRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
  type: AboutUsPageRoutingModule
});
AboutUsPageRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AboutUsPageRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
})();

/***/ }),

/***/ 99902:
/*!***************************************************!*\
  !*** ./src/app/pages/about-us/about-us.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AboutUsPageModule": () => (/* binding */ AboutUsPageModule)
/* harmony export */ });
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ 38699);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _about_us_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./about-us-routing.module */ 5790);
/* harmony import */ var _about_us_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./about-us.page */ 92794);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);







class AboutUsPageModule {}
AboutUsPageModule.ɵfac = function AboutUsPageModule_Factory(t) {
  return new (t || AboutUsPageModule)();
};
AboutUsPageModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
  type: AboutUsPageModule
});
AboutUsPageModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__.TranslateModule, _about_us_routing_module__WEBPACK_IMPORTED_MODULE_0__.AboutUsPageRoutingModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](AboutUsPageModule, {
    declarations: [_about_us_page__WEBPACK_IMPORTED_MODULE_1__.AboutUsPage],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__.TranslateModule, _about_us_routing_module__WEBPACK_IMPORTED_MODULE_0__.AboutUsPageRoutingModule]
  });
})();

/***/ }),

/***/ 92794:
/*!*************************************************!*\
  !*** ./src/app/pages/about-us/about-us.page.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AboutUsPage": () => (/* binding */ AboutUsPage)
/* harmony export */ });
/* harmony import */ var src_app_app_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/app.component */ 55041);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var src_providers_utils_utils_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/providers/utils/utils.service */ 30423);
/* harmony import */ var _services_translate_config_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/translate-config.service */ 45340);
/* harmony import */ var src_providers_utils_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/providers/utils/config */ 43485);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ 38699);








class AboutUsPage {
  constructor(router, menuControl, utils, translateConfigService, config) {
    this.router = router;
    this.menuControl = menuControl;
    this.utils = utils;
    this.translateConfigService = translateConfigService;
    this.config = config;
    this.selectedLanguage = this.translateConfigService.getDefaultLanguage();
    this.translateConfigService.setLanguage('en');
  }
  /**
  * In this method we are updating the side Menu title
  */
  ionViewDidEnter() {
    //this.utils.component.emit(MenuOptions.ABOUT_US);
    if (this.config.userDetails.name != null) {
      this.menuControl.enable(true, 'custom');
      this.menuControl.enable(false, 'first');
    } else {
      this.menuControl.enable(true, 'first');
      this.menuControl.enable(false, 'custom');
    }
    this.utils.component.emit(src_app_app_component__WEBPACK_IMPORTED_MODULE_0__.MenuOptions.ABOUT_US);
  }
  /**
   * This method is used to navigate to Sunlife Malaysia Page
   */
  aboutSunLifeMDetails() {
    this.router.navigate(['/sun-life-malaysia']);
    //this.navCtrl.push(SunLifeMalaysiaPage);
  }
  /**
   * This method is used to navigate to NewsRoom Page
   */
  newsRoom() {
    this.router.navigate(['/newsroom']);
  }
  openMenu() {
    this.menuControl.open();
  }
}
AboutUsPage.ɵfac = function AboutUsPage_Factory(t) {
  return new (t || AboutUsPage)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_6__.MenuController), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_providers_utils_utils_service__WEBPACK_IMPORTED_MODULE_1__.UtilService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_services_translate_config_service__WEBPACK_IMPORTED_MODULE_2__.TranslateConfigService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_providers_utils_config__WEBPACK_IMPORTED_MODULE_3__.ConfigProvider));
};
AboutUsPage.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
  type: AboutUsPage,
  selectors: [["app-about-us"]],
  decls: 26,
  vars: 9,
  consts: [["mode", "ios"], ["color", "primary", 1, "toolbar"], ["slot", "start", "auto-hide", "false", "color", "secondary"], [1, "bold-font"], [1, "ion-padding"], [1, "white_container_border_radius", "text_color_base"], [3, "click"], ["size", "3", 1, "ion-text-center"], [1, "fas", "fa-info", "font_size_34"], ["size", "7", 1, "margin_top_bottom_auto"], ["size", "2", 1, "margin_top_bottom_auto"], [1, "fas", "fa-angle-right", "font_size_20", 2, "padding", "5px"], [1, "fas", "fa-newspaper", "font_size_34"]],
  template: function AboutUsPage_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "ion-header", 0)(1, "ion-toolbar", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](2, "ion-menu-button", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "ion-title", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](5, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "ion-content", 4)(7, "ion-list", 5)(8, "ion-row", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function AboutUsPage_Template_ion_row_click_8_listener() {
        return ctx.aboutSunLifeMDetails();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "ion-col", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](10, "i", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "ion-col", 9)(12, "ion-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](13);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](14, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](15, "ion-col", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](16, "i", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](17, "ion-row", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function AboutUsPage_Template_ion_row_click_17_listener() {
        return ctx.newsRoom();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](18, "ion-col", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](19, "i", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](20, "ion-col", 9)(21, "ion-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](22);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](23, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](24, "ion-col", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](25, "i", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](5, 3, "aboutus"), " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](9);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](14, 5, "aboutsunlife"));
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](9);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](23, 7, "newsroom"));
    }
  },
  dependencies: [_ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonCol, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonContent, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonHeader, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonLabel, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonList, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonMenuButton, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonRow, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonTitle, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonToolbar, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__.TranslatePipe],
  styles: ["ion-content[_ngcontent-%COMP%] {\n  --background: url(/../assets/imgs/app_bg.jpg) no-repeat center center / cover;\n}\nion-content[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%] {\n  text-align: center;\n  font-size: 16px;\n}\n\nion-title[_ngcontent-%COMP%] {\n  font-weight: bold;\n  font-size: 1.2rem;\n  color: --ion-color-secondary;\n}\n\n.label[_ngcontent-%COMP%] {\n  font-size: 1.8rem;\n  margin: 0px;\n}\n\n.list[_ngcontent-%COMP%] {\n  padding: 0px 15px;\n}\n\nion-row[_ngcontent-%COMP%] {\n  border-bottom: 1px solid rgba(0, 45, 61, 0.3);\n  padding: 10px 0px 15px 0px;\n  margin-bottom: 5px;\n  margin-left: 15px;\n  margin-right: 15px;\n}\n\nion-row[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n}\n\n.col[_ngcontent-%COMP%] {\n  padding: 20px 0px;\n}\n\n.white_container_border_radius[_ngcontent-%COMP%] {\n  background-color: rgba(255, 255, 255, 0.7) !important;\n  border-radius: 15px !important;\n}\n\n.text_color_base[_ngcontent-%COMP%] {\n  color: #002d3d;\n}\n\n.margin_top_bottom_auto[_ngcontent-%COMP%] {\n  margin-top: auto;\n  margin-bottom: auto;\n}\n\n.font_size_20[_ngcontent-%COMP%] {\n  font-size: 1.5rem !important;\n}\n\n.font_size_34[_ngcontent-%COMP%] {\n  font-size: 2rem !important;\n}\n\n.font[_ngcontent-%COMP%] {\n  padding: 15px;\n  font-size: 18px;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcGFnZXMvYWJvdXQtdXMvYWJvdXQtdXMucGFnZS5zY3NzIiwid2VicGFjazovLy4vLi4vLi4vLi4vQWxsJTIwUHJvamVjdHMvTWFsYXlzaWFfQ2xpZW50QXBwX1JldmFtcC9TdW5BY2Nlc3NfSW9uaWM2X1JldmFtcC9zcmMvYXBwL3BhZ2VzL2Fib3V0LXVzL2Fib3V0LXVzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLDZFQUFBO0FDQ0o7QURDSTtFQUNJLGtCQUFBO0VBQ0EsZUFBQTtBQ0NSOztBREdBO0VBQ0ksaUJBQUE7RUFDQSxpQkFBQTtFQUNBLDRCQUFBO0FDQUo7O0FER0E7RUFDSSxpQkFBQTtFQUNBLFdBQUE7QUNBSjs7QURJQTtFQUNJLGlCQUFBO0FDREo7O0FESUE7RUFDSSw2Q0FBQTtFQUNBLDBCQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FDREo7O0FESUE7RUFDSSxtQkFBQTtBQ0RKOztBRElBO0VBQ0ksaUJBQUE7QUNESjs7QURXQTtFQUNJLHFEQUFBO0VBQ0EsOEJBQUE7QUNSSjs7QURXQTtFQUNJLGNBQUE7QUNSSjs7QURXQTtFQUNJLGdCQUFBO0VBQ0EsbUJBQUE7QUNSSjs7QURXQTtFQUNJLDRCQUFBO0FDUko7O0FEV0E7RUFDSSwwQkFBQTtBQ1JKOztBRFdBO0VBQ0ksYUFBQTtFQUNBLGVBQUE7QUNSSiIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jb250ZW50IHtcclxuICAgIC0tYmFja2dyb3VuZDogdXJsKC8uLi9hc3NldHMvaW1ncy9hcHBfYmcuanBnKSBuby1yZXBlYXQgY2VudGVyIGNlbnRlciAvIGNvdmVyO1xyXG5cclxuICAgIGlvbi1sYWJlbCB7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIH1cclxufVxyXG5cclxuaW9uLXRpdGxlIHtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgZm9udC1zaXplOiAxLjJyZW07XHJcbiAgICBjb2xvcjogLS1pb24tY29sb3Itc2Vjb25kYXJ5O1xyXG59XHJcblxyXG4ubGFiZWwge1xyXG4gICAgZm9udC1zaXplOiAxLjhyZW07XHJcbiAgICBtYXJnaW46IDBweDtcclxuXHJcbn1cclxuXHJcbi5saXN0IHtcclxuICAgIHBhZGRpbmc6IDBweCAxNXB4O1xyXG59XHJcblxyXG5pb24tcm93IHtcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKDAsIDQ1LCA2MSwgLjMpO1xyXG4gICAgcGFkZGluZzogMTBweCAwcHggMTVweCAwcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA1cHg7XHJcbiAgICBtYXJnaW4tbGVmdDogMTVweDtcclxuICAgIG1hcmdpbi1yaWdodDogMTVweDtcclxufVxyXG5cclxuaW9uLXJvdzpsYXN0LWNoaWxkIHtcclxuICAgIGJvcmRlci1ib3R0b206IG5vbmU7XHJcbn1cclxuXHJcbi5jb2wge1xyXG4gICAgcGFkZGluZzogMjBweCAwcHg7XHJcbn1cclxuXHJcbi8vIC5hcHBfYmcge1xyXG4vLyAgICAgYmFja2dyb3VuZDogdXJsKC8uLi9hc3NldHMvaW1ncy9hcHBfYmcuanBnKTtcclxuLy8gICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbi8vICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4vLyAgICAgaGVpZ2h0OiAxMDAlO1xyXG4vLyAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogYm90dG9tO1xyXG4vLyB9XHJcbi53aGl0ZV9jb250YWluZXJfYm9yZGVyX3JhZGl1cyB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNykgIWltcG9ydGFudDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDE1cHggIWltcG9ydGFudDtcclxufVxyXG5cclxuLnRleHRfY29sb3JfYmFzZSB7XHJcbiAgICBjb2xvcjogIzAwMmQzZDtcclxufVxyXG5cclxuLm1hcmdpbl90b3BfYm90dG9tX2F1dG8ge1xyXG4gICAgbWFyZ2luLXRvcDogYXV0bztcclxuICAgIG1hcmdpbi1ib3R0b206IGF1dG87XHJcbn1cclxuXHJcbi5mb250X3NpemVfMjAge1xyXG4gICAgZm9udC1zaXplOiAxLjVyZW0gIWltcG9ydGFudDtcclxufVxyXG5cclxuLmZvbnRfc2l6ZV8zNCB7XHJcbiAgICBmb250LXNpemU6IDJyZW0gIWltcG9ydGFudDtcclxufVxyXG5cclxuLmZvbnQge1xyXG4gICAgcGFkZGluZzogMTVweDtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxufVxyXG5cclxuLy8gLnRvb2xiYXIge1xyXG4vLyAgICAgaGVpZ2h0OiA1MHB4O1xyXG4vLyAgICAgZGlzcGxheTogZmxleDtcclxuLy8gICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbi8vIH1cclxuIiwiaW9uLWNvbnRlbnQge1xuICAtLWJhY2tncm91bmQ6IHVybCgvLi4vYXNzZXRzL2ltZ3MvYXBwX2JnLmpwZykgbm8tcmVwZWF0IGNlbnRlciBjZW50ZXIgLyBjb3Zlcjtcbn1cbmlvbi1jb250ZW50IGlvbi1sYWJlbCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiAxNnB4O1xufVxuXG5pb24tdGl0bGUge1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1zaXplOiAxLjJyZW07XG4gIGNvbG9yOiAtLWlvbi1jb2xvci1zZWNvbmRhcnk7XG59XG5cbi5sYWJlbCB7XG4gIGZvbnQtc2l6ZTogMS44cmVtO1xuICBtYXJnaW46IDBweDtcbn1cblxuLmxpc3Qge1xuICBwYWRkaW5nOiAwcHggMTVweDtcbn1cblxuaW9uLXJvdyB7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKDAsIDQ1LCA2MSwgMC4zKTtcbiAgcGFkZGluZzogMTBweCAwcHggMTVweCAwcHg7XG4gIG1hcmdpbi1ib3R0b206IDVweDtcbiAgbWFyZ2luLWxlZnQ6IDE1cHg7XG4gIG1hcmdpbi1yaWdodDogMTVweDtcbn1cblxuaW9uLXJvdzpsYXN0LWNoaWxkIHtcbiAgYm9yZGVyLWJvdHRvbTogbm9uZTtcbn1cblxuLmNvbCB7XG4gIHBhZGRpbmc6IDIwcHggMHB4O1xufVxuXG4ud2hpdGVfY29udGFpbmVyX2JvcmRlcl9yYWRpdXMge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNykgIWltcG9ydGFudDtcbiAgYm9yZGVyLXJhZGl1czogMTVweCAhaW1wb3J0YW50O1xufVxuXG4udGV4dF9jb2xvcl9iYXNlIHtcbiAgY29sb3I6ICMwMDJkM2Q7XG59XG5cbi5tYXJnaW5fdG9wX2JvdHRvbV9hdXRvIHtcbiAgbWFyZ2luLXRvcDogYXV0bztcbiAgbWFyZ2luLWJvdHRvbTogYXV0bztcbn1cblxuLmZvbnRfc2l6ZV8yMCB7XG4gIGZvbnQtc2l6ZTogMS41cmVtICFpbXBvcnRhbnQ7XG59XG5cbi5mb250X3NpemVfMzQge1xuICBmb250LXNpemU6IDJyZW0gIWltcG9ydGFudDtcbn1cblxuLmZvbnQge1xuICBwYWRkaW5nOiAxNXB4O1xuICBmb250LXNpemU6IDE4cHg7XG59Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ })

}]);
//# sourceMappingURL=src_app_pages_about-us_about-us_module_ts.js.map