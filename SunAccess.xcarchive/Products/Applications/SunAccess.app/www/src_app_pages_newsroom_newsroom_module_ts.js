"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_newsroom_newsroom_module_ts"],{

/***/ 14707:
/*!***********************************************************!*\
  !*** ./src/app/pages/newsroom/newsroom-routing.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NewsroomPageRoutingModule": () => (/* binding */ NewsroomPageRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _newsroom_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./newsroom.page */ 63297);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);




const routes = [{
  path: '',
  component: _newsroom_page__WEBPACK_IMPORTED_MODULE_0__.NewsroomPage
}];
class NewsroomPageRoutingModule {}
NewsroomPageRoutingModule.ɵfac = function NewsroomPageRoutingModule_Factory(t) {
  return new (t || NewsroomPageRoutingModule)();
};
NewsroomPageRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
  type: NewsroomPageRoutingModule
});
NewsroomPageRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](NewsroomPageRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
})();

/***/ }),

/***/ 96569:
/*!***************************************************!*\
  !*** ./src/app/pages/newsroom/newsroom.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NewsroomPageModule": () => (/* binding */ NewsroomPageModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _newsroom_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./newsroom-routing.module */ 14707);
/* harmony import */ var _newsroom_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./newsroom.page */ 63297);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ 38699);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);







class NewsroomPageModule {}
NewsroomPageModule.ɵfac = function NewsroomPageModule_Factory(t) {
  return new (t || NewsroomPageModule)();
};
NewsroomPageModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
  type: NewsroomPageModule
});
NewsroomPageModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__.TranslateModule, _newsroom_routing_module__WEBPACK_IMPORTED_MODULE_0__.NewsroomPageRoutingModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](NewsroomPageModule, {
    declarations: [_newsroom_page__WEBPACK_IMPORTED_MODULE_1__.NewsroomPage],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__.TranslateModule, _newsroom_routing_module__WEBPACK_IMPORTED_MODULE_0__.NewsroomPageRoutingModule]
  });
})();

/***/ }),

/***/ 63297:
/*!*************************************************!*\
  !*** ./src/app/pages/newsroom/newsroom.page.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NewsroomPage": () => (/* binding */ NewsroomPage)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _services_translate_config_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/translate-config.service */ 45340);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ 38699);





class NewsroomPage {
  constructor(translateConfigService, router) {
    this.translateConfigService = translateConfigService;
    this.router = router;
    this.selectedLanguage = this.translateConfigService.getDefaultLanguage();
    this.translateConfigService.setLanguage('en');
  }
  ngOnInit() {}
  navToNews() {
    this.router.navigate(['/news-list']);
  }
  navToMediaRelease() {
    this.router.navigate(['/media-release']);
  }
  navToPhotoGallery() {
    this.router.navigate(['/photo-gallery']);
  }
}
NewsroomPage.ɵfac = function NewsroomPage_Factory(t) {
  return new (t || NewsroomPage)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_translate_config_service__WEBPACK_IMPORTED_MODULE_0__.TranslateConfigService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router));
};
NewsroomPage.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: NewsroomPage,
  selectors: [["app-newsroom"]],
  decls: 35,
  vars: 15,
  consts: [["mode", "ios"], ["color", "primary"], ["slot", "start"], ["text", "", "icon", "chevron-back-outline", 2, "padding-left", "15px", "font-size", "0.7rem"], [1, "bold-font"], [1, "sub_title", "ion-no-padding"], [1, "subheader_bg"], [1, "sub-header"], ["padding", "", "no-bounce", "", 1, "app_bg", "text_color_base"], ["padding", "", 1, "white_container_border_radius", "text_color_base", "margin"], [1, "font", 3, "click"], ["col-10", "", 1, "margin_top_bottom_auto", "font-size_20"], ["col-2", "", "text-center", "", 1, "margin_top_bottom_auto", "text-align-end"], [1, "fas", "fa-angle-right", "font_size_20"]],
  template: function NewsroomPage_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-header", 0)(1, "ion-toolbar", 1)(2, "ion-buttons", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "ion-back-button", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "ion-title", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](6, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "ion-toolbar", 5)(8, "ion-row", 6)(9, "ion-label", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](11, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "ion-content", 8)(13, "ion-list", 9)(14, "ion-row", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function NewsroomPage_Template_ion_row_click_14_listener() {
        return ctx.navToNews();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "ion-col", 11)(16, "ion-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](18, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "ion-col", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](20, "i", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "ion-row", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function NewsroomPage_Template_ion_row_click_21_listener() {
        return ctx.navToMediaRelease();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "ion-col", 11)(23, "ion-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](25, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "ion-col", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](27, "i", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "ion-row", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function NewsroomPage_Template_ion_row_click_28_listener() {
        return ctx.navToPhotoGallery();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "ion-col", 11)(30, "ion-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](31);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](32, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "ion-col", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](34, "i", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](6, 5, "aboutus"));
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](11, 7, "newsroom_page.title"));
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](18, 9, "newsroom_page.in_the_news"));
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](25, 11, "newsroom_page.media_release"));
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](32, 13, "newsroom_page.photo_gallery"));
    }
  },
  dependencies: [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonBackButton, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonButtons, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonCol, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonContent, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonHeader, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonLabel, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonList, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonRow, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonTitle, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonToolbar, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonBackButtonDelegate, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__.TranslatePipe],
  styles: ["ion-content[_ngcontent-%COMP%] {\n  --background: url(/../assets/imgs/app_bg.jpg) no-repeat center center / cover;\n}\nion-content[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%] {\n  text-align: center;\n}\n\n.header-bg[_ngcontent-%COMP%] {\n  --background: #febe10;\n}\n.header-bg[_ngcontent-%COMP%]   ion-title[_ngcontent-%COMP%] {\n  padding: 0;\n}\n\n.label[_ngcontent-%COMP%] {\n  font-size: 1.8rem;\n  margin: 0px;\n}\n\n.list[_ngcontent-%COMP%] {\n  padding: 0px 15px;\n}\n\n.col[_ngcontent-%COMP%] {\n  padding: 20px 0px;\n}\n\n.white_container_border_radius[_ngcontent-%COMP%] {\n  background-color: rgba(255, 255, 255, 0.7) !important;\n  border-radius: 15px !important;\n}\n\n.text_color_base[_ngcontent-%COMP%] {\n  color: #002d3d;\n}\n\n.margin_top_bottom_auto[_ngcontent-%COMP%] {\n  margin-top: auto;\n  margin-bottom: auto;\n}\n\n.font_size_20[_ngcontent-%COMP%] {\n  font-size: 1.5rem !important;\n}\n\n.font_size_34[_ngcontent-%COMP%] {\n  font-size: 3rem !important;\n}\n\nion-row[_ngcontent-%COMP%] {\n  border-bottom: 1px solid rgba(0, 45, 61, 0.3);\n}\n\nion-row[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n}\n\n.margin[_ngcontent-%COMP%] {\n  padding: 15px;\n  margin: 15px;\n}\n\n.text-align-end[_ngcontent-%COMP%] {\n  text-align: end;\n}\n\n.font[_ngcontent-%COMP%] {\n  padding: 15px;\n  font-size: 18px;\n}\n\n.center[_ngcontent-%COMP%] {\n  margin-left: 100px;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcGFnZXMvbmV3c3Jvb20vbmV3c3Jvb20ucGFnZS5zY3NzIiwid2VicGFjazovLy4vLi4vLi4vLi4vQWxsJTIwUHJvamVjdHMvTWFsYXlzaWFfQ2xpZW50QXBwX1JldmFtcC9TdW5BY2Nlc3NfSW9uaWM2X1JldmFtcC9zcmMvYXBwL3BhZ2VzL25ld3Nyb29tL25ld3Nyb29tLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLDZFQUFBO0FDQ0o7QURDSTtFQUNJLGtCQUFBO0FDQ1I7O0FER0E7RUFDSSxxQkFBQTtBQ0FKO0FEQ0k7RUFDSSxVQUFBO0FDQ1I7O0FER0E7RUFDSSxpQkFBQTtFQUNBLFdBQUE7QUNBSjs7QURJQTtFQUNJLGlCQUFBO0FDREo7O0FESUE7RUFDSSxpQkFBQTtBQ0RKOztBRElBO0VBQ0kscURBQUE7RUFDQSw4QkFBQTtBQ0RKOztBRElBO0VBQ0ksY0FBQTtBQ0RKOztBRElBO0VBQ0ksZ0JBQUE7RUFDQSxtQkFBQTtBQ0RKOztBRElBO0VBQ0ksNEJBQUE7QUNESjs7QURJQTtFQUNJLDBCQUFBO0FDREo7O0FETUE7RUFDSSw2Q0FBQTtBQ0hKOztBRE1BO0VBQ0ksbUJBQUE7QUNISjs7QURVQTtFQUNJLGFBQUE7RUFDQSxZQUFBO0FDUEo7O0FEVUE7RUFDSSxlQUFBO0FDUEo7O0FEVUE7RUFDSSxhQUFBO0VBQ0EsZUFBQTtBQ1BKOztBRFVBO0VBQ0ksa0JBQUE7QUNQSiIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jb250ZW50IHtcclxuICAgIC0tYmFja2dyb3VuZDogdXJsKC8uLi9hc3NldHMvaW1ncy9hcHBfYmcuanBnKSBuby1yZXBlYXQgY2VudGVyIGNlbnRlciAvIGNvdmVyO1xyXG5cclxuICAgIGlvbi1sYWJlbCB7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgfVxyXG59XHJcblxyXG4uaGVhZGVyLWJnIHtcclxuICAgIC0tYmFja2dyb3VuZDogI2ZlYmUxMDtcclxuICAgIGlvbi10aXRsZSB7XHJcbiAgICAgICAgcGFkZGluZzogMDtcclxuICAgIH1cclxufVxyXG5cclxuLmxhYmVsIHtcclxuICAgIGZvbnQtc2l6ZTogMS44cmVtO1xyXG4gICAgbWFyZ2luOiAwcHg7XHJcblxyXG59XHJcblxyXG4ubGlzdCB7XHJcbiAgICBwYWRkaW5nOiAwcHggMTVweDtcclxufVxyXG5cclxuLmNvbCB7XHJcbiAgICBwYWRkaW5nOiAyMHB4IDBweDtcclxufVxyXG5cclxuLndoaXRlX2NvbnRhaW5lcl9ib3JkZXJfcmFkaXVzIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC43KSAhaW1wb3J0YW50O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTVweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4udGV4dF9jb2xvcl9iYXNlIHtcclxuICAgIGNvbG9yOiAjMDAyZDNkO1xyXG59XHJcblxyXG4ubWFyZ2luX3RvcF9ib3R0b21fYXV0byB7XHJcbiAgICBtYXJnaW4tdG9wOiBhdXRvO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogYXV0bztcclxufVxyXG5cclxuLmZvbnRfc2l6ZV8yMCB7XHJcbiAgICBmb250LXNpemU6IDEuNXJlbSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uZm9udF9zaXplXzM0IHtcclxuICAgIGZvbnQtc2l6ZTogM3JlbSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG5cclxuXHJcbmlvbi1yb3cge1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoMCwgNDUsIDYxLCAuMyk7XHJcbn1cclxuXHJcbmlvbi1yb3c6bGFzdC1jaGlsZCB7XHJcbiAgICBib3JkZXItYm90dG9tOiBub25lO1xyXG59XHJcblxyXG4vLyBpb24tbGFiZWx7XHJcbi8vICAgICBmb250LXNpemU6IDEuOHJlbSAhaW1wb3J0YW50O1xyXG4vLyB9XHJcblxyXG4ubWFyZ2luIHtcclxuICAgIHBhZGRpbmc6IDE1cHg7XHJcbiAgICBtYXJnaW46IDE1cHg7XHJcbn1cclxuXHJcbi50ZXh0LWFsaWduLWVuZCB7XHJcbiAgICB0ZXh0LWFsaWduOiBlbmQ7XHJcbn1cclxuXHJcbi5mb250IHtcclxuICAgIHBhZGRpbmc6IDE1cHg7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbn1cclxuXHJcbi5jZW50ZXIge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDEwMHB4O1xyXG59IiwiaW9uLWNvbnRlbnQge1xuICAtLWJhY2tncm91bmQ6IHVybCgvLi4vYXNzZXRzL2ltZ3MvYXBwX2JnLmpwZykgbm8tcmVwZWF0IGNlbnRlciBjZW50ZXIgLyBjb3Zlcjtcbn1cbmlvbi1jb250ZW50IGlvbi1sYWJlbCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmhlYWRlci1iZyB7XG4gIC0tYmFja2dyb3VuZDogI2ZlYmUxMDtcbn1cbi5oZWFkZXItYmcgaW9uLXRpdGxlIHtcbiAgcGFkZGluZzogMDtcbn1cblxuLmxhYmVsIHtcbiAgZm9udC1zaXplOiAxLjhyZW07XG4gIG1hcmdpbjogMHB4O1xufVxuXG4ubGlzdCB7XG4gIHBhZGRpbmc6IDBweCAxNXB4O1xufVxuXG4uY29sIHtcbiAgcGFkZGluZzogMjBweCAwcHg7XG59XG5cbi53aGl0ZV9jb250YWluZXJfYm9yZGVyX3JhZGl1cyB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC43KSAhaW1wb3J0YW50O1xuICBib3JkZXItcmFkaXVzOiAxNXB4ICFpbXBvcnRhbnQ7XG59XG5cbi50ZXh0X2NvbG9yX2Jhc2Uge1xuICBjb2xvcjogIzAwMmQzZDtcbn1cblxuLm1hcmdpbl90b3BfYm90dG9tX2F1dG8ge1xuICBtYXJnaW4tdG9wOiBhdXRvO1xuICBtYXJnaW4tYm90dG9tOiBhdXRvO1xufVxuXG4uZm9udF9zaXplXzIwIHtcbiAgZm9udC1zaXplOiAxLjVyZW0gIWltcG9ydGFudDtcbn1cblxuLmZvbnRfc2l6ZV8zNCB7XG4gIGZvbnQtc2l6ZTogM3JlbSAhaW1wb3J0YW50O1xufVxuXG5pb24tcm93IHtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoMCwgNDUsIDYxLCAwLjMpO1xufVxuXG5pb24tcm93Omxhc3QtY2hpbGQge1xuICBib3JkZXItYm90dG9tOiBub25lO1xufVxuXG4ubWFyZ2luIHtcbiAgcGFkZGluZzogMTVweDtcbiAgbWFyZ2luOiAxNXB4O1xufVxuXG4udGV4dC1hbGlnbi1lbmQge1xuICB0ZXh0LWFsaWduOiBlbmQ7XG59XG5cbi5mb250IHtcbiAgcGFkZGluZzogMTVweDtcbiAgZm9udC1zaXplOiAxOHB4O1xufVxuXG4uY2VudGVyIHtcbiAgbWFyZ2luLWxlZnQ6IDEwMHB4O1xufSJdLCJzb3VyY2VSb290IjoiIn0= */"]
});

/***/ })

}]);
//# sourceMappingURL=src_app_pages_newsroom_newsroom_module_ts.js.map