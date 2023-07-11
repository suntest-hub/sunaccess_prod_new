"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_media-release_media-release_module_ts"],{

/***/ 66176:
/*!*********************************************************************!*\
  !*** ./src/app/pages/media-release/media-release-routing.module.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MediaReleasePageRoutingModule": () => (/* binding */ MediaReleasePageRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _media_release_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./media-release.page */ 84645);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);




const routes = [{
  path: '',
  component: _media_release_page__WEBPACK_IMPORTED_MODULE_0__.MediaReleasePage
}];
class MediaReleasePageRoutingModule {}
MediaReleasePageRoutingModule.ɵfac = function MediaReleasePageRoutingModule_Factory(t) {
  return new (t || MediaReleasePageRoutingModule)();
};
MediaReleasePageRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
  type: MediaReleasePageRoutingModule
});
MediaReleasePageRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](MediaReleasePageRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
})();

/***/ }),

/***/ 71234:
/*!*************************************************************!*\
  !*** ./src/app/pages/media-release/media-release.module.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MediaReleasePageModule": () => (/* binding */ MediaReleasePageModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _media_release_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./media-release-routing.module */ 66176);
/* harmony import */ var _media_release_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./media-release.page */ 84645);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ 38699);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);







class MediaReleasePageModule {}
MediaReleasePageModule.ɵfac = function MediaReleasePageModule_Factory(t) {
  return new (t || MediaReleasePageModule)();
};
MediaReleasePageModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
  type: MediaReleasePageModule
});
MediaReleasePageModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__.TranslateModule, _media_release_routing_module__WEBPACK_IMPORTED_MODULE_0__.MediaReleasePageRoutingModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](MediaReleasePageModule, {
    declarations: [_media_release_page__WEBPACK_IMPORTED_MODULE_1__.MediaReleasePage],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__.TranslateModule, _media_release_routing_module__WEBPACK_IMPORTED_MODULE_0__.MediaReleasePageRoutingModule]
  });
})();

/***/ }),

/***/ 84645:
/*!***********************************************************!*\
  !*** ./src/app/pages/media-release/media-release.page.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MediaReleasePage": () => (/* binding */ MediaReleasePage)
/* harmony export */ });
/* harmony import */ var src_providers_utils_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/providers/utils/config */ 43485);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _mediaService__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mediaService */ 6615);
/* harmony import */ var src_providers_utils_utils_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/providers/utils/utils.service */ 30423);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ 38699);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 93819);







function MediaReleasePage_section_13_div_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 15)(1, "ion-row")(2, "ion-col", 16)(3, "ion-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "ion-label", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function MediaReleasePage_section_13_div_7_Template_ion_label_click_5_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r5);
      const media_r3 = restoredCtx.$implicit;
      const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r4.openLink(media_r3._link));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "u");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const media_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", media_r3.date, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", media_r3.title, " ");
  }
}
function MediaReleasePage_section_13_ion_infinite_scroll_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "ion-infinite-scroll", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ionInfinite", function MediaReleasePage_section_13_ion_infinite_scroll_8_Template_ion_infinite_scroll_ionInfinite_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r7);
      const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r6.getMoreMedia($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "ion-infinite-scroll-content", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function MediaReleasePage_section_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "section")(1, "ion-row", 9)(2, "ion-col", 10)(3, "ion-label", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](7, MediaReleasePage_section_13_div_7_Template, 8, 2, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](8, MediaReleasePage_section_13_ion_infinite_scroll_8_Template, 2, 0, "ion-infinite-scroll", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](5, 3, "media_release.title"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r0.medialist);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx_r0.isLastPageReached);
  }
}
class MediaReleasePage {
  constructor(mediaReleaseService, utils, translate) {
    this.mediaReleaseService = mediaReleaseService;
    this.utils = utils;
    this.translate = translate;
    this.medialist = [];
    this.isServiceCallInProgress = false;
    this.isLastPageReached = false;
    this.hasRecords = true;
    this.pageNum = 1;
  }
  ngOnInit() {
    this.getMediaList(undefined);
  }
  getMediaList(event) {
    // this.isLastPageReached = false;
    this.utils.showProgressLoader();
    this.mediaReleaseService.getMediaRelease(this.pageNum).then(result => {
      try {
        this.utils.dissmisProgressLoader();
        if (this.medialist.length > 0) {
          this.medialist = this.medialist.concat(result['responseJSON']['array']);
        } else {
          this.medialist = result['responseJSON']['array'];
          src_providers_utils_config__WEBPACK_IMPORTED_MODULE_0__.ConfigProvider.PAGE_SIZE = result['responseJSON']['pageSize'];
        }
        if (!(this.medialist.length > 0)) {
          if (result['responseJSON']['array'].length < src_providers_utils_config__WEBPACK_IMPORTED_MODULE_0__.ConfigProvider.PAGE_SIZE) {
            this.isLastPageReached = true;
          } else {
            this.pageNum++;
          }
        } else {
          if (result['responseJSON']['array'].length < src_providers_utils_config__WEBPACK_IMPORTED_MODULE_0__.ConfigProvider.PAGE_SIZE) {
            this.isLastPageReached = true;
          } else {
            this.pageNum++;
          }
        }
      } catch (e) {
        this.utils.dissmisProgressLoader();
        this.errorMsg = this.translate.instant('generic_msgs.server_err');
      }
    }, err => {
      this.utils.dissmisProgressLoader();
      this.errorMsg = this.utils.handleServiceException(err);
    });
  }
  openLink(link) {
    if (link != null && link != undefined) {
      // link = link.replace('bpp1.', '');
      this.utils.openLink(link);
    } else {
      this.utils.presentToast(this.translate.instant('generic_msgs.network_err'));
    }
  }
  getMoreMedia(event) {
    this.getMediaList(event);
  }
}
MediaReleasePage.ɵfac = function MediaReleasePage_Factory(t) {
  return new (t || MediaReleasePage)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_mediaService__WEBPACK_IMPORTED_MODULE_1__.MediaReleaseService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_providers_utils_utils_service__WEBPACK_IMPORTED_MODULE_2__.UtilService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__.TranslateService));
};
MediaReleasePage.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
  type: MediaReleasePage,
  selectors: [["app-media-release"]],
  decls: 14,
  vars: 7,
  consts: [["mode", "ios"], ["color", "primary"], ["slot", "start"], ["text", "", "icon", "chevron-back-outline", 2, "padding-left", "15px", "font-size", "0.7rem"], [1, "bold-font"], [1, "sub_title", "ion-no-padding"], [1, "subheader_bg"], [1, "sub-header"], [4, "ngIf"], [1, "margin", "height"], ["size", "6", 1, "title_tile"], [1, "sub_header_title"], [1, "white_container_border_radius", "text_color_base", "padding_015", "margin"], ["class", "list_item", 4, "ngFor", "ngForOf"], ["threshold", "100px", 3, "ionInfinite", 4, "ngIf"], [1, "list_item"], ["size", "6"], [1, "link", "font_size_18", 3, "click"], ["threshold", "100px", 3, "ionInfinite"], ["loadingSpinner", "bubbles"]],
  template: function MediaReleasePage_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "ion-header", 0)(1, "ion-toolbar", 1)(2, "ion-buttons", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "ion-back-button", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "ion-title", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](6, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "ion-toolbar", 5)(8, "ion-row", 6)(9, "ion-label", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](11, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "ion-content");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](13, MediaReleasePage_section_13_Template, 9, 5, "section", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](6, 3, "aboutus"));
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](11, 5, "newsroom_page.title"));
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.medialist.length > 0);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonBackButton, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonButtons, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonCol, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonContent, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonHeader, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonInfiniteScroll, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonInfiniteScrollContent, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonLabel, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonRow, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonTitle, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonToolbar, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonBackButtonDelegate, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__.TranslatePipe],
  styles: ["ion-content[_ngcontent-%COMP%] {\n  --background: url(/../assets/imgs/app_bg.jpg) no-repeat center center / cover;\n}\nion-content[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%] {\n  text-align: center;\n}\n\n.sub_header_title[_ngcontent-%COMP%] {\n  padding: 10px !important;\n  margin: 0px;\n  font-size: 1.2rem !important;\n  font-family: Agenda-Regular;\n  line-height: 24px;\n  text-align: center;\n  margin-top: 5px !important;\n}\n\n.list_item[_ngcontent-%COMP%] {\n  border-bottom: 1px solid rgba(0, 45, 61, 0.3);\n}\n\n.list_item[_ngcontent-%COMP%]:last-child {\n  border-bottom: none !important;\n}\n\n.title_tile[_ngcontent-%COMP%] {\n  font-size: 2rem;\n  padding: 10px;\n  background: #002d3d;\n  color: white;\n  text-align: center;\n}\n\n.white_container_border_radius[_ngcontent-%COMP%] {\n  background-color: rgba(255, 255, 255, 0.7) !important;\n  border-radius: 15px !important;\n}\n\n.text_color_base[_ngcontent-%COMP%] {\n  color: #002d3d;\n}\n\n.margin[_ngcontent-%COMP%] {\n  margin: 10px 15px;\n  border-bottom: 1px solid rgba(0, 45, 61, 0.3);\n}\n\n.height[_ngcontent-%COMP%] {\n  height: 65px;\n}\n\n.list_item[_ngcontent-%COMP%]:last-child {\n  border-bottom: none !important;\n}\n\n.img[_ngcontent-%COMP%] {\n  height: 40vh;\n  width: 100% !important;\n  padding: 5px;\n  margin-bottom: 5px;\n}\n\n.seeAll[_ngcontent-%COMP%] {\n  color: #6095c9;\n  text-align: end;\n}\n\n.padding_015[_ngcontent-%COMP%] {\n  padding: 0px 15px;\n}\n\n.link[_ngcontent-%COMP%] {\n  color: #6095c9;\n  text-decoration: none;\n  word-wrap: unset !important;\n}\n\n.flex[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: end;\n}\n\n.toolbar-color[_ngcontent-%COMP%] {\n  background-color: #febe10;\n}\n\n.header-bg[_ngcontent-%COMP%] {\n  --background: #febe10;\n}\n.header-bg[_ngcontent-%COMP%]   ion-title[_ngcontent-%COMP%] {\n  padding: 0;\n}\n\n.center[_ngcontent-%COMP%] {\n  margin-left: 100px;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcGFnZXMvbWVkaWEtcmVsZWFzZS9tZWRpYS1yZWxlYXNlLnBhZ2Uuc2NzcyIsIndlYnBhY2s6Ly8uLy4uLy4uLy4uL0FsbCUyMFByb2plY3RzL01hbGF5c2lhX0NsaWVudEFwcF9SZXZhbXAvU3VuQWNjZXNzX0lvbmljNl9SZXZhbXAvc3JjL2FwcC9wYWdlcy9tZWRpYS1yZWxlYXNlL21lZGlhLXJlbGVhc2UucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksNkVBQUE7QUNDSjtBRENJO0VBQ0ksa0JBQUE7QUNDUjs7QURHQTtFQUNJLHdCQUFBO0VBQ0EsV0FBQTtFQUNBLDRCQUFBO0VBQ0EsMkJBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsMEJBQUE7QUNBSjs7QURHQTtFQUNJLDZDQUFBO0FDQUo7O0FER0E7RUFDSSw4QkFBQTtBQ0FKOztBREdBO0VBQ0ksZUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtBQ0FKOztBREtBO0VBQ0kscURBQUE7RUFDQSw4QkFBQTtBQ0ZKOztBREtBO0VBQ0ksY0FBQTtBQ0ZKOztBREtBO0VBQ0ksaUJBQUE7RUFDQSw2Q0FBQTtBQ0ZKOztBREtBO0VBQ0ksWUFBQTtBQ0ZKOztBREtBO0VBQ0ksOEJBQUE7QUNGSjs7QURLQTtFQUNJLFlBQUE7RUFDQSxzQkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtBQ0ZKOztBREtBO0VBQ0ksY0FBQTtFQUNBLGVBQUE7QUNGSjs7QURLQTtFQUNJLGlCQUFBO0FDRko7O0FES0E7RUFDSSxjQUFBO0VBQ0EscUJBQUE7RUFDQSwyQkFBQTtBQ0ZKOztBREtBO0VBQ0ksYUFBQTtFQUNBLG9CQUFBO0FDRko7O0FES0E7RUFDSSx5QkFBQTtBQ0ZKOztBREtBO0VBQ0kscUJBQUE7QUNGSjtBREdJO0VBQ0ksVUFBQTtBQ0RSOztBREtBO0VBQ0ksa0JBQUE7QUNGSiIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jb250ZW50IHtcclxuICAgIC0tYmFja2dyb3VuZDogdXJsKC8uLi9hc3NldHMvaW1ncy9hcHBfYmcuanBnKSBuby1yZXBlYXQgY2VudGVyIGNlbnRlciAvIGNvdmVyO1xyXG5cclxuICAgIGlvbi1sYWJlbCB7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgfVxyXG59XHJcblxyXG4uc3ViX2hlYWRlcl90aXRsZSB7XHJcbiAgICBwYWRkaW5nOiAxMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICBtYXJnaW46IDBweDtcclxuICAgIGZvbnQtc2l6ZTogMS4ycmVtICFpbXBvcnRhbnQ7XHJcbiAgICBmb250LWZhbWlseTogQWdlbmRhLVJlZ3VsYXI7XHJcbiAgICBsaW5lLWhlaWdodDogMjRweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIG1hcmdpbi10b3A6IDVweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ubGlzdF9pdGVtIHtcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKDAsIDQ1LCA2MSwgLjMpO1xyXG59XHJcblxyXG4ubGlzdF9pdGVtOmxhc3QtY2hpbGQge1xyXG4gICAgYm9yZGVyLWJvdHRvbTogbm9uZSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4udGl0bGVfdGlsZSB7XHJcbiAgICBmb250LXNpemU6IDJyZW07XHJcbiAgICBwYWRkaW5nOiAgMTBweDtcclxuICAgIGJhY2tncm91bmQ6ICMwMDJkM2Q7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgIFxyXG4gICBcclxufVxyXG5cclxuLndoaXRlX2NvbnRhaW5lcl9ib3JkZXJfcmFkaXVzIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC43KSAhaW1wb3J0YW50O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTVweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4udGV4dF9jb2xvcl9iYXNlIHtcclxuICAgIGNvbG9yOiAjMDAyZDNkO1xyXG59XHJcblxyXG4ubWFyZ2luIHtcclxuICAgIG1hcmdpbjogMTBweCAxNXB4O1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoMCwgNDUsIDYxLCAuMyk7XHJcbn1cclxuXHJcbi5oZWlnaHQge1xyXG4gICAgaGVpZ2h0OiA2NXB4O1xyXG59XHJcblxyXG4ubGlzdF9pdGVtOmxhc3QtY2hpbGQge1xyXG4gICAgYm9yZGVyLWJvdHRvbTogbm9uZSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uaW1nIHtcclxuICAgIGhlaWdodDogNDB2aDtcclxuICAgIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XHJcbiAgICBwYWRkaW5nOiA1cHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA1cHg7XHJcbn1cclxuXHJcbi5zZWVBbGwge1xyXG4gICAgY29sb3I6ICM2MDk1Yzk7XHJcbiAgICB0ZXh0LWFsaWduOiBlbmQ7XHJcbn1cclxuXHJcbi5wYWRkaW5nXzAxNSB7XHJcbiAgICBwYWRkaW5nOiAwcHggMTVweDtcclxufVxyXG5cclxuLmxpbmt7XHJcbiAgICBjb2xvcjogIzYwOTVjOTtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIHdvcmQtd3JhcDogdW5zZXQgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmZsZXgge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogZW5kO1xyXG59XHJcblxyXG4udG9vbGJhci1jb2xvciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmViZTEwO1xyXG59XHJcblxyXG4uaGVhZGVyLWJnIHtcclxuICAgIC0tYmFja2dyb3VuZDogI2ZlYmUxMDtcclxuICAgIGlvbi10aXRsZSB7XHJcbiAgICAgICAgcGFkZGluZzogMDtcclxuICAgIH1cclxufVxyXG5cclxuLmNlbnRlciB7XHJcbiAgICBtYXJnaW4tbGVmdDogMTAwcHg7XHJcbn1cclxuIiwiaW9uLWNvbnRlbnQge1xuICAtLWJhY2tncm91bmQ6IHVybCgvLi4vYXNzZXRzL2ltZ3MvYXBwX2JnLmpwZykgbm8tcmVwZWF0IGNlbnRlciBjZW50ZXIgLyBjb3Zlcjtcbn1cbmlvbi1jb250ZW50IGlvbi1sYWJlbCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLnN1Yl9oZWFkZXJfdGl0bGUge1xuICBwYWRkaW5nOiAxMHB4ICFpbXBvcnRhbnQ7XG4gIG1hcmdpbjogMHB4O1xuICBmb250LXNpemU6IDEuMnJlbSAhaW1wb3J0YW50O1xuICBmb250LWZhbWlseTogQWdlbmRhLVJlZ3VsYXI7XG4gIGxpbmUtaGVpZ2h0OiAyNHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbi10b3A6IDVweCAhaW1wb3J0YW50O1xufVxuXG4ubGlzdF9pdGVtIHtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoMCwgNDUsIDYxLCAwLjMpO1xufVxuXG4ubGlzdF9pdGVtOmxhc3QtY2hpbGQge1xuICBib3JkZXItYm90dG9tOiBub25lICFpbXBvcnRhbnQ7XG59XG5cbi50aXRsZV90aWxlIHtcbiAgZm9udC1zaXplOiAycmVtO1xuICBwYWRkaW5nOiAxMHB4O1xuICBiYWNrZ3JvdW5kOiAjMDAyZDNkO1xuICBjb2xvcjogd2hpdGU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLndoaXRlX2NvbnRhaW5lcl9ib3JkZXJfcmFkaXVzIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjcpICFpbXBvcnRhbnQ7XG4gIGJvcmRlci1yYWRpdXM6IDE1cHggIWltcG9ydGFudDtcbn1cblxuLnRleHRfY29sb3JfYmFzZSB7XG4gIGNvbG9yOiAjMDAyZDNkO1xufVxuXG4ubWFyZ2luIHtcbiAgbWFyZ2luOiAxMHB4IDE1cHg7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKDAsIDQ1LCA2MSwgMC4zKTtcbn1cblxuLmhlaWdodCB7XG4gIGhlaWdodDogNjVweDtcbn1cblxuLmxpc3RfaXRlbTpsYXN0LWNoaWxkIHtcbiAgYm9yZGVyLWJvdHRvbTogbm9uZSAhaW1wb3J0YW50O1xufVxuXG4uaW1nIHtcbiAgaGVpZ2h0OiA0MHZoO1xuICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xuICBwYWRkaW5nOiA1cHg7XG4gIG1hcmdpbi1ib3R0b206IDVweDtcbn1cblxuLnNlZUFsbCB7XG4gIGNvbG9yOiAjNjA5NWM5O1xuICB0ZXh0LWFsaWduOiBlbmQ7XG59XG5cbi5wYWRkaW5nXzAxNSB7XG4gIHBhZGRpbmc6IDBweCAxNXB4O1xufVxuXG4ubGluayB7XG4gIGNvbG9yOiAjNjA5NWM5O1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIHdvcmQtd3JhcDogdW5zZXQgIWltcG9ydGFudDtcbn1cblxuLmZsZXgge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGVuZDtcbn1cblxuLnRvb2xiYXItY29sb3Ige1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmViZTEwO1xufVxuXG4uaGVhZGVyLWJnIHtcbiAgLS1iYWNrZ3JvdW5kOiAjZmViZTEwO1xufVxuLmhlYWRlci1iZyBpb24tdGl0bGUge1xuICBwYWRkaW5nOiAwO1xufVxuXG4uY2VudGVyIHtcbiAgbWFyZ2luLWxlZnQ6IDEwMHB4O1xufSJdLCJzb3VyY2VSb290IjoiIn0= */"]
});

/***/ })

}]);
//# sourceMappingURL=src_app_pages_media-release_media-release_module_ts.js.map