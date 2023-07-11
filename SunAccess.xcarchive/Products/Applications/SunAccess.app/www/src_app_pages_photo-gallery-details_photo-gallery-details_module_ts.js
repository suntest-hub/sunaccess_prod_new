"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_photo-gallery-details_photo-gallery-details_module_ts"],{

/***/ 13380:
/*!*************************************************************************************!*\
  !*** ./src/app/pages/photo-gallery-details/photo-gallery-details-routing.module.ts ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PhotoGalleryDetailsPageRoutingModule": () => (/* binding */ PhotoGalleryDetailsPageRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _photo_gallery_details_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./photo-gallery-details.page */ 4851);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);




const routes = [{
  path: '',
  component: _photo_gallery_details_page__WEBPACK_IMPORTED_MODULE_0__.PhotoGalleryDetailsPage
}];
class PhotoGalleryDetailsPageRoutingModule {}
PhotoGalleryDetailsPageRoutingModule.ɵfac = function PhotoGalleryDetailsPageRoutingModule_Factory(t) {
  return new (t || PhotoGalleryDetailsPageRoutingModule)();
};
PhotoGalleryDetailsPageRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
  type: PhotoGalleryDetailsPageRoutingModule
});
PhotoGalleryDetailsPageRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](PhotoGalleryDetailsPageRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
})();

/***/ }),

/***/ 91460:
/*!*****************************************************************************!*\
  !*** ./src/app/pages/photo-gallery-details/photo-gallery-details.module.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PhotoGalleryDetailsPageModule": () => (/* binding */ PhotoGalleryDetailsPageModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _photo_gallery_details_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./photo-gallery-details-routing.module */ 13380);
/* harmony import */ var _photo_gallery_details_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./photo-gallery-details.page */ 4851);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ 38699);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);







class PhotoGalleryDetailsPageModule {}
PhotoGalleryDetailsPageModule.ɵfac = function PhotoGalleryDetailsPageModule_Factory(t) {
  return new (t || PhotoGalleryDetailsPageModule)();
};
PhotoGalleryDetailsPageModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
  type: PhotoGalleryDetailsPageModule
});
PhotoGalleryDetailsPageModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__.TranslateModule, _photo_gallery_details_routing_module__WEBPACK_IMPORTED_MODULE_0__.PhotoGalleryDetailsPageRoutingModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](PhotoGalleryDetailsPageModule, {
    declarations: [_photo_gallery_details_page__WEBPACK_IMPORTED_MODULE_1__.PhotoGalleryDetailsPage],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__.TranslateModule, _photo_gallery_details_routing_module__WEBPACK_IMPORTED_MODULE_0__.PhotoGalleryDetailsPageRoutingModule]
  });
})();

/***/ }),

/***/ 4851:
/*!***************************************************************************!*\
  !*** ./src/app/pages/photo-gallery-details/photo-gallery-details.page.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PhotoGalleryDetailsPage": () => (/* binding */ PhotoGalleryDetailsPage)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _galleryDetailsService__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./galleryDetailsService */ 87108);
/* harmony import */ var src_providers_utils_utils_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/providers/utils/utils.service */ 30423);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ 38699);







function PhotoGalleryDetailsPage_section_13_ng_container_3_ion_col_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "ion-col", 13)(1, "img", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("load", function PhotoGalleryDetailsPage_section_13_ng_container_3_ion_col_1_Template_img_load_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r6);
      const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r5.loaded = false);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "img", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("load", function PhotoGalleryDetailsPage_section_13_ng_container_3_ion_col_1_Template_img_load_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r6);
      const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r7.loaded = true);
    })("click", function PhotoGalleryDetailsPage_section_13_ng_container_3_ion_col_1_Template_img_click_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r6);
      const i_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().index;
      const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r8.navToImagePage(i_r3));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const photo_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("hidden", ctx_r4.loaded);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", ctx_r4.replaceURL(photo_r2._link), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
  }
}
function PhotoGalleryDetailsPage_section_13_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, PhotoGalleryDetailsPage_section_13_ng_container_3_ion_col_1_Template, 3, 2, "ion-col", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const photo_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", photo_r2._link);
  }
}
function PhotoGalleryDetailsPage_section_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "section", 9)(1, "ion-grid")(2, "ion-row", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, PhotoGalleryDetailsPage_section_13_ng_container_3_Template, 2, 1, "ng-container", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r0.photosList);
  }
}
class PhotoGalleryDetailsPage {
  constructor(router, getPhotoGalleryDetailsService, utils) {
    this.router = router;
    this.getPhotoGalleryDetailsService = getPhotoGalleryDetailsService;
    this.utils = utils;
    this.loaded = false;
    this.photosList = [];
    this.selectedPhotoId = history.state.photoID;
  }
  ngOnInit() {
    this.getPhotoGalleryDetails();
  }
  /**
   * Method used to repalce 'bpp1.' with ''
   * @param link - Image Url that need to be changed
   */
  replaceURL(link) {
    // if (link != null && link != undefined) {
    //   link = link.replace('bpp1.', '');
    return link;
    // }
  }

  navToImagePage(i) {
    this.router.navigate(["/show-gallery-photo"], {
      state: {
        index: i,
        list: this.photosList
      }
    });
  }
  getPhotoGalleryDetails() {
    this.utils.showProgressLoader();
    this.getPhotoGalleryDetailsService.getPhotoGalleryDetails(this.selectedPhotoId).then(result => {
      try {
        this.utils.dissmisProgressLoader();
        this.photosList = result['responseJSON']['array'];
      } catch (e) {
        this.utils.dissmisProgressLoader();
      }
    }, err => {
      alert("error");
    });
  }
}
PhotoGalleryDetailsPage.ɵfac = function PhotoGalleryDetailsPage_Factory(t) {
  return new (t || PhotoGalleryDetailsPage)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_galleryDetailsService__WEBPACK_IMPORTED_MODULE_0__.GetPhotoGalleryDetailsService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_providers_utils_utils_service__WEBPACK_IMPORTED_MODULE_1__.UtilService));
};
PhotoGalleryDetailsPage.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: PhotoGalleryDetailsPage,
  selectors: [["app-photo-gallery-details"]],
  decls: 14,
  vars: 7,
  consts: [["mode", "ios"], ["color", "primary", 2, "border-bottom", "3px solid white"], ["slot", "start"], ["text", "", "icon", "chevron-back-outline", 2, "padding-left", "15px", "font-size", "0.7rem"], [1, "bold-font"], ["color", "primary", 1, "sub_title", "ion-no-padding"], [1, "subheader_bg", 2, "margin-bottom", "10px !important"], [1, "sub-header"], ["class", "white_container_border_radius text_color_base margin", 4, "ngIf"], [1, "white_container_border_radius", "text_color_base", "margin"], ["align-items-center", ""], [4, "ngFor", "ngForOf"], ["text-center", "", "size", "6", 4, "ngIf"], ["text-center", "", "size", "6"], ["src", "assets/imgs/placeholder-image.png", "onError", "this.src='assets/imgs/placeholder-image.png';", "alt", "...", 1, "img", 3, "hidden", "load"], ["onError", "this.src='assets/imgs/placeholder-image.png';", "alt", "...", 3, "src", "load", "click"]],
  template: function PhotoGalleryDetailsPage_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "ion-header", 0)(1, "ion-toolbar", 1)(2, "ion-buttons", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "ion-back-button", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "ion-title", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](6, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "ion-toolbar", 5)(8, "ion-row", 6)(9, "ion-label", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](11, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "ion-content");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](13, PhotoGalleryDetailsPage_section_13_Template, 4, 1, "section", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](6, 3, "newsroom_page.title"));
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](11, 5, "photo_gallery.sub_title"));
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.photosList.length > 0);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonBackButton, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonButtons, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonCol, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonContent, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonGrid, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonHeader, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonLabel, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonRow, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonTitle, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonToolbar, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonBackButtonDelegate, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__.TranslatePipe],
  styles: [".margin[_ngcontent-%COMP%] {\n  margin: 0 15px;\n}\n\nion-content[_ngcontent-%COMP%] {\n  --background: url(/../assets/imgs/app_bg.jpg) no-repeat center center / cover;\n}\nion-content[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%] {\n  text-align: center;\n}\n\n.white_container_border_radius[_ngcontent-%COMP%] {\n  background-color: rgba(255, 255, 255, 0.7) !important;\n  border-radius: 15px !important;\n}\n\n.text_color_base[_ngcontent-%COMP%] {\n  color: #002d3d;\n}\n\n.header-bg[_ngcontent-%COMP%] {\n  --background: #febe10;\n}\n.header-bg[_ngcontent-%COMP%]   ion-title[_ngcontent-%COMP%] {\n  padding: 0;\n}\n\n.center[_ngcontent-%COMP%] {\n  margin-left: 100px;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcGFnZXMvcGhvdG8tZ2FsbGVyeS1kZXRhaWxzL3Bob3RvLWdhbGxlcnktZGV0YWlscy5wYWdlLnNjc3MiLCJ3ZWJwYWNrOi8vLi8uLi8uLi8uLi9BbGwlMjBQcm9qZWN0cy9NYWxheXNpYV9DbGllbnRBcHBfUmV2YW1wL1N1bkFjY2Vzc19Jb25pYzZfUmV2YW1wL3NyYy9hcHAvcGFnZXMvcGhvdG8tZ2FsbGVyeS1kZXRhaWxzL3Bob3RvLWdhbGxlcnktZGV0YWlscy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxjQUFBO0FDQ0o7O0FERUE7RUFDSSw2RUFBQTtBQ0NKO0FEQ0k7RUFDSSxrQkFBQTtBQ0NSOztBREdBO0VBQ0kscURBQUE7RUFDQSw4QkFBQTtBQ0FKOztBREdBO0VBQ0ksY0FBQTtBQ0FKOztBREdBO0VBQ0kscUJBQUE7QUNBSjtBRENJO0VBQ0ksVUFBQTtBQ0NSOztBREdBO0VBQ0ksa0JBQUE7QUNBSiIsInNvdXJjZXNDb250ZW50IjpbIi5tYXJnaW4ge1xyXG4gICAgbWFyZ2luOiAwIDE1cHg7XHJcbn1cclxuXHJcbmlvbi1jb250ZW50IHtcclxuICAgIC0tYmFja2dyb3VuZDogdXJsKC8uLi9hc3NldHMvaW1ncy9hcHBfYmcuanBnKSBuby1yZXBlYXQgY2VudGVyIGNlbnRlciAvIGNvdmVyO1xyXG4gICAgXHJcbiAgICBpb24tbGFiZWwge1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIH1cclxufVxyXG5cclxuLndoaXRlX2NvbnRhaW5lcl9ib3JkZXJfcmFkaXVzIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC43KSAhaW1wb3J0YW50O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTVweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4udGV4dF9jb2xvcl9iYXNlIHtcclxuICAgIGNvbG9yOiAjMDAyZDNkO1xyXG59XHJcblxyXG4uaGVhZGVyLWJnIHtcclxuICAgIC0tYmFja2dyb3VuZDogI2ZlYmUxMDtcclxuICAgIGlvbi10aXRsZSB7XHJcbiAgICAgICAgcGFkZGluZzogMDtcclxuICAgIH1cclxufVxyXG5cclxuLmNlbnRlciB7XHJcbiAgICBtYXJnaW4tbGVmdDogMTAwcHg7XHJcbn0iLCIubWFyZ2luIHtcbiAgbWFyZ2luOiAwIDE1cHg7XG59XG5cbmlvbi1jb250ZW50IHtcbiAgLS1iYWNrZ3JvdW5kOiB1cmwoLy4uL2Fzc2V0cy9pbWdzL2FwcF9iZy5qcGcpIG5vLXJlcGVhdCBjZW50ZXIgY2VudGVyIC8gY292ZXI7XG59XG5pb24tY29udGVudCBpb24tbGFiZWwge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi53aGl0ZV9jb250YWluZXJfYm9yZGVyX3JhZGl1cyB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC43KSAhaW1wb3J0YW50O1xuICBib3JkZXItcmFkaXVzOiAxNXB4ICFpbXBvcnRhbnQ7XG59XG5cbi50ZXh0X2NvbG9yX2Jhc2Uge1xuICBjb2xvcjogIzAwMmQzZDtcbn1cblxuLmhlYWRlci1iZyB7XG4gIC0tYmFja2dyb3VuZDogI2ZlYmUxMDtcbn1cbi5oZWFkZXItYmcgaW9uLXRpdGxlIHtcbiAgcGFkZGluZzogMDtcbn1cblxuLmNlbnRlciB7XG4gIG1hcmdpbi1sZWZ0OiAxMDBweDtcbn0iXSwic291cmNlUm9vdCI6IiJ9 */"]
});

/***/ })

}]);
//# sourceMappingURL=src_app_pages_photo-gallery-details_photo-gallery-details_module_ts.js.map