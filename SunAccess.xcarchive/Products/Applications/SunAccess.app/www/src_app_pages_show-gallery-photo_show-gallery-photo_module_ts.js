"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_show-gallery-photo_show-gallery-photo_module_ts"],{

/***/ 40301:
/*!*******************************************************************************!*\
  !*** ./src/app/pages/show-gallery-photo/show-gallery-photo-routing.module.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ShowGalleryPhotoPageRoutingModule": () => (/* binding */ ShowGalleryPhotoPageRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _show_gallery_photo_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./show-gallery-photo.page */ 32561);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);




const routes = [{
  path: '',
  component: _show_gallery_photo_page__WEBPACK_IMPORTED_MODULE_0__.ShowGalleryPhotoPage
}];
class ShowGalleryPhotoPageRoutingModule {}
ShowGalleryPhotoPageRoutingModule.ɵfac = function ShowGalleryPhotoPageRoutingModule_Factory(t) {
  return new (t || ShowGalleryPhotoPageRoutingModule)();
};
ShowGalleryPhotoPageRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
  type: ShowGalleryPhotoPageRoutingModule
});
ShowGalleryPhotoPageRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](ShowGalleryPhotoPageRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
})();

/***/ }),

/***/ 48650:
/*!***********************************************************************!*\
  !*** ./src/app/pages/show-gallery-photo/show-gallery-photo.module.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ShowGalleryPhotoPageModule": () => (/* binding */ ShowGalleryPhotoPageModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _show_gallery_photo_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./show-gallery-photo-routing.module */ 40301);
/* harmony import */ var _show_gallery_photo_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./show-gallery-photo.page */ 32561);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ 38699);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);







class ShowGalleryPhotoPageModule {}
ShowGalleryPhotoPageModule.ɵfac = function ShowGalleryPhotoPageModule_Factory(t) {
  return new (t || ShowGalleryPhotoPageModule)();
};
ShowGalleryPhotoPageModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
  type: ShowGalleryPhotoPageModule
});
ShowGalleryPhotoPageModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__.TranslateModule, _show_gallery_photo_routing_module__WEBPACK_IMPORTED_MODULE_0__.ShowGalleryPhotoPageRoutingModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](ShowGalleryPhotoPageModule, {
    declarations: [_show_gallery_photo_page__WEBPACK_IMPORTED_MODULE_1__.ShowGalleryPhotoPage],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__.TranslateModule, _show_gallery_photo_routing_module__WEBPACK_IMPORTED_MODULE_0__.ShowGalleryPhotoPageRoutingModule]
  });
})();

/***/ }),

/***/ 32561:
/*!*********************************************************************!*\
  !*** ./src/app/pages/show-gallery-photo/show-gallery-photo.page.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ShowGalleryPhotoPage": () => (/* binding */ ShowGalleryPhotoPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var src_providers_utils_utils_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/providers/utils/utils.service */ 30423);
/* harmony import */ var _awesome_cordova_plugins_photo_library_ngx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @awesome-cordova-plugins/photo-library/ngx */ 46761);
/* harmony import */ var _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/file/ngx */ 12358);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ 38699);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 93819);








const _c0 = ["mySlider"];
function ShowGalleryPhotoPage_ion_slide_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "ion-slide");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "img", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const photo_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("src", photo_r2._link, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"]);
  }
}
class ShowGalleryPhotoPage {
  constructor(utils, photoLibrary, file, translate) {
    this.utils = utils;
    this.photoLibrary = photoLibrary;
    this.file = file;
    this.translate = translate;
    this.index = 0;
    this.dirName = "SunAccess";
    this.slideOpts = {
      initialSlide: 1,
      slidesPerView: 1,
      speed: 400,
      effect: "slide",
      paginationType: "bullets",
      loop: true,
      autoplay: {
        delay: 3000,
        disableOnInteraction: false
      }
    };
    this.index = history.state.index;
    this.photoslist = history.state.list;
  }
  ngOnInit() {}
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
  /**
     * This method is used to download the photo and save it in the local Storage
     */
  savePhoto() {
    return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
      let currentIndex = (yield this.slider.getActiveIndex()) - 1;
      let link = this.photoslist[currentIndex]['_link'];
      // link = link.replace("bpp1.", "");
      this.utils.showProgressLoader();
      this.photoLibrary.requestAuthorization({
        read: true,
        write: true
      }).then(res => {
        this.photoLibrary.saveImage(link + '&ext=.jpg', this.dirName).then(res => {
          this.utils.dissmisProgressLoader();
          this.utils.presentToast(this.translate.instant('save-photo.image_success_download'));
          // alert('save-photo.image_success_download');
        }, error => {
          this.utils.dissmisProgressLoader();
          if (error.toLowerCase() == 'retrieved asset is nil') {
            // alert('save-photo.image_success_download');
            this.utils.presentToast(this.translate.instant('save-photo.image_success_download'));
          } else {
            // alert('save-photo.file_save_fail');
            this.utils.presentToast(this.translate.instant('save-photo.file_save_fail'));
          }
        });
      }, err => {
        this.utils.dissmisProgressLoader();
        alert('save-photo.file_permission_rejected');
      });
    });
  }
}
ShowGalleryPhotoPage.ɵfac = function ShowGalleryPhotoPage_Factory(t) {
  return new (t || ShowGalleryPhotoPage)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_providers_utils_utils_service__WEBPACK_IMPORTED_MODULE_0__.UtilService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_awesome_cordova_plugins_photo_library_ngx__WEBPACK_IMPORTED_MODULE_1__.PhotoLibrary), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_2__.File), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__.TranslateService));
};
ShowGalleryPhotoPage.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
  type: ShowGalleryPhotoPage,
  selectors: [["app-show-gallery-photo"]],
  viewQuery: function ShowGalleryPhotoPage_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](_c0, 5);
    }
    if (rf & 2) {
      let _t;
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.slider = _t.first);
    }
  },
  decls: 15,
  vars: 5,
  consts: [[1, "header-bg"], ["slot", "start"], ["defaultHref", "#", "text", "", "mode", "md", "icon", "chevron-back-outline"], [1, "bold-font", "center"], ["slot", "end"], ["ion-button", "", 1, "button-align", 3, "click"], [1, "fas", "fa-download"], [1, "image_position"], [1, "banner-slider", 3, "options"], ["mySlider", ""], [4, "ngFor", "ngForOf"], [3, "src"]],
  template: function ShowGalleryPhotoPage_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "ion-header")(1, "ion-toolbar", 0)(2, "ion-buttons", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "ion-back-button", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "ion-title", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](6, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "ion-buttons", 4)(8, "button", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ShowGalleryPhotoPage_Template_button_click_8_listener() {
        return ctx.savePhoto();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](9, "i", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "ion-content")(11, "section", 7)(12, "ion-slides", 8, 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](14, ShowGalleryPhotoPage_ion_slide_14_Template, 2, 1, "ion-slide", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](6, 3, "photo_gallery.title"), " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("options", ctx.slideOpts);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.photoslist);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgForOf, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonBackButton, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonButtons, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonContent, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonHeader, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonSlide, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonSlides, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonTitle, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonToolbar, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonBackButtonDelegate, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__.TranslatePipe],
  styles: [".img[_ngcontent-%COMP%] {\n  height: auto;\n  width: 100% !important;\n  padding: 5px;\n  margin-bottom: 5px;\n}\n\n.image_position[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  height: 100%;\n}\n\n.content[_ngcontent-%COMP%] {\n  background: #ecebeb;\n}\n\nion-slide[_ngcontent-%COMP%] {\n  width: 100% !important;\n}\n\nion-slides[_ngcontent-%COMP%] {\n  width: 90%;\n}\n\n.header-bg[_ngcontent-%COMP%] {\n  --background: #febe10;\n}\n.header-bg[_ngcontent-%COMP%]   ion-title[_ngcontent-%COMP%] {\n  padding: 0;\n}\n\n.center[_ngcontent-%COMP%] {\n  text-align: center;\n}\n\n.button-align[_ngcontent-%COMP%] {\n  background: transparent;\n  font-size: 20px;\n  margin-right: 20px;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcGFnZXMvc2hvdy1nYWxsZXJ5LXBob3RvL3Nob3ctZ2FsbGVyeS1waG90by5wYWdlLnNjc3MiLCJ3ZWJwYWNrOi8vLi8uLi8uLi8uLi9BbGwlMjBQcm9qZWN0cy9NYWxheXNpYV9DbGllbnRBcHBfUmV2YW1wL1N1bkFjY2Vzc19Jb25pYzZfUmV2YW1wL3NyYy9hcHAvcGFnZXMvc2hvdy1nYWxsZXJ5LXBob3RvL3Nob3ctZ2FsbGVyeS1waG90by5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxZQUFBO0VBQ0Esc0JBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7QUNDSjs7QURFQTtFQUNJLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0FDQ0o7O0FERUE7RUFDSSxtQkFBQTtBQ0NKOztBREVBO0VBQ0ksc0JBQUE7QUNDSjs7QURFQTtFQUNJLFVBQUE7QUNDSjs7QURFQTtFQUNJLHFCQUFBO0FDQ0o7QURBSTtFQUNJLFVBQUE7QUNFUjs7QURFQTtFQUNJLGtCQUFBO0FDQ0o7O0FERUE7RUFDSSx1QkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtBQ0NKIiwic291cmNlc0NvbnRlbnQiOlsiLmltZyB7XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xyXG4gICAgcGFkZGluZzogNXB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNXB4O1xyXG59XHJcblxyXG4uaW1hZ2VfcG9zaXRpb24ge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuXHJcbi5jb250ZW50IHtcclxuICAgIGJhY2tncm91bmQ6ICNlY2ViZWJcclxufVxyXG5cclxuaW9uLXNsaWRlIHtcclxuICAgIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbmlvbi1zbGlkZXMge1xyXG4gICAgd2lkdGg6IDkwJTtcclxufVxyXG5cclxuLmhlYWRlci1iZyB7XHJcbiAgICAtLWJhY2tncm91bmQ6ICNmZWJlMTA7XHJcbiAgICBpb24tdGl0bGUge1xyXG4gICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5jZW50ZXIge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4uYnV0dG9uLWFsaWduIHtcclxuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xyXG59IiwiLmltZyB7XG4gIGhlaWdodDogYXV0bztcbiAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcbiAgcGFkZGluZzogNXB4O1xuICBtYXJnaW4tYm90dG9tOiA1cHg7XG59XG5cbi5pbWFnZV9wb3NpdGlvbiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbi5jb250ZW50IHtcbiAgYmFja2dyb3VuZDogI2VjZWJlYjtcbn1cblxuaW9uLXNsaWRlIHtcbiAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcbn1cblxuaW9uLXNsaWRlcyB7XG4gIHdpZHRoOiA5MCU7XG59XG5cbi5oZWFkZXItYmcge1xuICAtLWJhY2tncm91bmQ6ICNmZWJlMTA7XG59XG4uaGVhZGVyLWJnIGlvbi10aXRsZSB7XG4gIHBhZGRpbmc6IDA7XG59XG5cbi5jZW50ZXIge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5idXR0b24tYWxpZ24ge1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBtYXJnaW4tcmlnaHQ6IDIwcHg7XG59Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ })

}]);
//# sourceMappingURL=src_app_pages_show-gallery-photo_show-gallery-photo_module_ts.js.map