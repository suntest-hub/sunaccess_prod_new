"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["default-src_app_pages_profile-pop-up_profile-pop-up_page_ts"],{

/***/ 74995:
/*!*************************************************************!*\
  !*** ./src/app/pages/profile-pop-up/profile-pop-up.page.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProfilePopUpPage": () => (/* binding */ ProfilePopUpPage)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var src_providers_utils_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/providers/utils/config */ 43485);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ 38699);





function ProfilePopUpPage_section_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "section", 5)(1, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ProfilePopUpPage_section_6_Template_div_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r3);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r2.openCamera());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "ion-row", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "i", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "ion-row", 7)(5, "ion-label", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](7, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ProfilePopUpPage_section_6_Template_div_click_8_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r3);
      const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r4.openGallery());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "ion-row", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](10, "i", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "ion-row", 7)(12, "ion-label", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](14, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ProfilePopUpPage_section_6_Template_div_click_15_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r3);
      const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r5.dismiss());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "ion-row")(17, "ion-label", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](19, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](7, 3, "profile.open_camera"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](14, 5, "profile.open_gallery"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](19, 7, "profile.cancel"), " ");
  }
}
function ProfilePopUpPage_section_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "section", 12)(1, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "img", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "ion-row", 15)(4, "ion-col", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ProfilePopUpPage_section_7_Template_ion_col_click_4_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r7);
      const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r6.uploadPic());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "ion-label", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](7, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "ion-col", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ProfilePopUpPage_section_7_Template_ion_col_click_8_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r7);
      const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r8.dismiss());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "ion-label", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](11, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", ctx_r1.data, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](7, 3, "profile.accept"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](11, 5, "profile.cancel"), " ");
  }
}
class ProfilePopUpPage {
  constructor(navParams, config, modalController) {
    this.navParams = navParams;
    this.config = config;
    this.modalController = modalController;
    this.isPicAvailable = false;
    this.data = this.navParams.get('imageData');
    this.config.currentPage.pageName = "ProfilePopUpPage";
    if (this.data != null) {
      this.isPicAvailable = true;
    }
  }
  ngOnInit() {}
  /**
   * This method is used to open Gallery
   */
  openGallery() {
    this.modalController.dismiss(this.config.OPEN_GALLERY);
  }
  /**
   * This method is used to open Camera
   */
  openCamera() {
    this.modalController.dismiss(this.config.OPEN_CAMERA);
  }
  /**
   * This is used is upload the selected image to server by dismissing  the alert we are uploading to server
   */
  uploadPic() {
    this.modalController.dismiss(this.data);
  }
  /**
   * This method is used to dismiss the alert
   */
  dismiss() {
    this.modalController.dismiss();
  }
}
ProfilePopUpPage.ɵfac = function ProfilePopUpPage_Factory(t) {
  return new (t || ProfilePopUpPage)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_2__.NavParams), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_providers_utils_config__WEBPACK_IMPORTED_MODULE_0__.ConfigProvider), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_2__.ModalController));
};
ProfilePopUpPage.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: ProfilePopUpPage,
  selectors: [["app-profile-pop-up"]],
  decls: 8,
  vars: 5,
  consts: [[1, "text_color_base"], ["text-center", "", 1, "heading", "margin_auto", "flex"], [1, "font_size_17", "bold"], ["class", "choosesection", 4, "ngIf"], ["class", "pic_section font_size_18", 4, "ngIf"], [1, "choosesection"], ["text-center", "", 1, "margin_auto", 3, "click"], [1, "flex-row"], [1, "fas", "fa-camera", "font_size_36", "icon-font"], [1, "font_size_17"], [1, "fas", "fa-image", "font_size_36", "icon-font"], ["text-center", "", 1, "margin_auto", "textalign", "bold", "flex-row", 3, "click"], [1, "pic_section", "font_size_18"], ["text-center", "", 1, "flex-row"], ["alt", "...", 3, "src"], ["text-center", "", 1, "textalign", "flex-row"], ["size", "6", "text-center", "", 1, "flex-row", 3, "click"], [1, "bold"]],
  template: function ProfilePopUpPage_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-content", 0)(1, "section")(2, "div", 1)(3, "ion-label", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](5, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, ProfilePopUpPage_section_6_Template, 20, 9, "section", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, ProfilePopUpPage_section_7_Template, 12, 7, "section", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](5, 3, "profile.change_profile_pic"), " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.isPicAvailable);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isPicAvailable);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.IonCol, _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.IonContent, _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.IonLabel, _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.IonRow, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__.TranslatePipe],
  styles: ["ion-backdrop[_ngcontent-%COMP%] {\n  background: rgba(0, 0, 0, 0.7) !important;\n}\n\n.label[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\nsection[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  border-bottom: 1px solid rgba(34, 34, 34, 0.2705882353);\n}\n\nsection[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:last-child {\n  border-bottom: none !important;\n}\n\n.label[_ngcontent-%COMP%] {\n  margin: 0px !important;\n  font-family: Agenda-Regular;\n}\n\n.bold[_ngcontent-%COMP%] {\n  font-family: agenda-semibold !important;\n}\n\nsection[_ngcontent-%COMP%] {\n  height: 100% !important;\n}\n\n.heading[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%] {\n  padding-top: 17px;\n}\n\n.heading[_ngcontent-%COMP%] {\n  height: 24% !important;\n}\n\n.choosesection[_ngcontent-%COMP%] {\n  height: 76% !important;\n}\n\n.choosesection[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  padding-top: 10px;\n}\n\n.choosesection[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:last-child {\n  height: 20% !important;\n}\n\n.footer[_ngcontent-%COMP%] {\n  visibility: hidden;\n}\n\n.margin_auto[_ngcontent-%COMP%] {\n  margin-top: auto;\n  margin-bottom: auto;\n}\n\n.pic_section[_ngcontent-%COMP%] {\n  height: 76% !important;\n}\n\n.pic_section[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  height: 70% !important;\n}\n\n.row[_ngcontent-%COMP%] {\n  height: 20% !important;\n}\n\nimg[_ngcontent-%COMP%] {\n  height: 100px !important;\n  width: 100px !important;\n}\n\n.col[_ngcontent-%COMP%]:first-child {\n  border-right: 1px solid rgba(34, 34, 34, 0.2705882353);\n}\n\nimg[_ngcontent-%COMP%] {\n  margin: 15px;\n}\n\n.textalign[_ngcontent-%COMP%] {\n  align-items: center;\n  display: flex;\n}\n\n.scroll-content[_ngcontent-%COMP%] {\n  padding: 0px !important;\n}\n\n.flex[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-size: 18px;\n}\n\n.icon-font[_ngcontent-%COMP%] {\n  font-size: 35px;\n}\n\n.flex-row[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.font_size_17[_ngcontent-%COMP%] {\n  font-size: 1rem !important;\n}\n\n.font_size_36[_ngcontent-%COMP%] {\n  font-size: 2.3rem !important;\n}\n\nion-content[_ngcontent-%COMP%] {\n  --overflow: hidden;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcGFnZXMvcHJvZmlsZS1wb3AtdXAvcHJvZmlsZS1wb3AtdXAucGFnZS5zY3NzIiwid2VicGFjazovLy4vLi4vLi4vLi4vQWxsJTIwUHJvamVjdHMvTWFsYXlzaWFfQ2xpZW50QXBwX1JldmFtcC9TdW5BY2Nlc3NfSW9uaWM2X1JldmFtcC9zcmMvYXBwL3BhZ2VzL3Byb2ZpbGUtcG9wLXVwL3Byb2ZpbGUtcG9wLXVwLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHlDQUFBO0FDQ0o7O0FERUE7RUFDSSxXQUFBO0FDQ0o7O0FERUE7RUFDSSx1REFBQTtBQ0NKOztBREVBO0VBQ0ksOEJBQUE7QUNDSjs7QURFQTtFQUNJLHNCQUFBO0VBQ0EsMkJBQUE7QUNDSjs7QURFQTtFQUNJLHVDQUFBO0FDQ0o7O0FERUE7RUFDSSx1QkFBQTtBQ0NKOztBREVBO0VBQ0ksaUJBQUE7QUNDSjs7QURFQTtFQUNJLHNCQUFBO0FDQ0o7O0FERUE7RUFDSSxzQkFBQTtBQ0NKOztBREVBO0VBRUksaUJBQUE7QUNBSjs7QURHQTtFQUNJLHNCQUFBO0FDQUo7O0FER0E7RUFDSSxrQkFBQTtBQ0FKOztBREdBO0VBQ0ksZ0JBQUE7RUFDQSxtQkFBQTtBQ0FKOztBREdBO0VBQ0ksc0JBQUE7QUNBSjs7QURHQTtFQUNJLHNCQUFBO0FDQUo7O0FER0E7RUFDSSxzQkFBQTtBQ0FKOztBREdBO0VBQ0ksd0JBQUE7RUFDQSx1QkFBQTtBQ0FKOztBREdBO0VBQ0ksc0RBQUE7QUNBSjs7QURHQTtFQUNJLFlBQUE7QUNBSjs7QURHQTtFQUNJLG1CQUFBO0VBQ0EsYUFBQTtBQ0FKOztBREdBO0VBQ0ksdUJBQUE7QUNBSjs7QURHQTtFQUNJLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtBQ0FKOztBREdBO0VBQ0ksZUFBQTtBQ0FKOztBREdBO0VBQ0ksYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUNBSjs7QURFQTtFQUNJLDBCQUFBO0FDQ0o7O0FEQ0U7RUFDRSw0QkFBQTtBQ0VKOztBREFFO0VBQ0Usa0JBQUE7QUNHSiIsInNvdXJjZXNDb250ZW50IjpbImlvbi1iYWNrZHJvcCB7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNykgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmxhYmVsIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG5zZWN0aW9uIGRpdiB7XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiYSgzNCwgMzQsIDM0LCAwLjI3MDU4ODIzNTI5NDExNzYzKTtcclxufVxyXG5cclxuc2VjdGlvbiBkaXY6bGFzdC1jaGlsZCB7XHJcbiAgICBib3JkZXItYm90dG9tOiBub25lICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5sYWJlbCB7XHJcbiAgICBtYXJnaW46IDBweCAhaW1wb3J0YW50O1xyXG4gICAgZm9udC1mYW1pbHk6IEFnZW5kYS1SZWd1bGFyO1xyXG59XHJcblxyXG4uYm9sZCB7XHJcbiAgICBmb250LWZhbWlseTogYWdlbmRhLXNlbWlib2xkICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbnNlY3Rpb24ge1xyXG4gICAgaGVpZ2h0OiAxMDAlICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5oZWFkaW5nIC5sYWJlbCB7XHJcbiAgICBwYWRkaW5nLXRvcDogMTdweDtcclxufVxyXG5cclxuLmhlYWRpbmcge1xyXG4gICAgaGVpZ2h0OiAyNCUgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmNob29zZXNlY3Rpb24ge1xyXG4gICAgaGVpZ2h0OiA3NiUgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmNob29zZXNlY3Rpb24gZGl2IHtcclxuICAgIC8vIGhlaWdodDogNDAlICFpbXBvcnRhbnQ7XHJcbiAgICBwYWRkaW5nLXRvcDogMTBweDtcclxufVxyXG5cclxuLmNob29zZXNlY3Rpb24gZGl2Omxhc3QtY2hpbGQge1xyXG4gICAgaGVpZ2h0OiAyMCUgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmZvb3RlciB7XHJcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XHJcbn1cclxuXHJcbi5tYXJnaW5fYXV0byB7XHJcbiAgICBtYXJnaW4tdG9wOiBhdXRvO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogYXV0bztcclxufVxyXG5cclxuLnBpY19zZWN0aW9uIHtcclxuICAgIGhlaWdodDogNzYlICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5waWNfc2VjdGlvbiBkaXYge1xyXG4gICAgaGVpZ2h0OiA3MCUgIWltcG9ydGFudDtcclxufVxyXG5cclxuLnJvdyB7XHJcbiAgICBoZWlnaHQ6IDIwJSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG5pbWcge1xyXG4gICAgaGVpZ2h0OiAxMDBweCAhaW1wb3J0YW50O1xyXG4gICAgd2lkdGg6IDEwMHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5jb2w6Zmlyc3QtY2hpbGQge1xyXG4gICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgcmdiYSgzNCwgMzQsIDM0LCAwLjI3MDU4ODIzNTI5NDExNzYzKTtcclxufVxyXG5cclxuaW1nIHtcclxuICAgIG1hcmdpbjogMTVweDtcclxufVxyXG5cclxuLnRleHRhbGlnbiB7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxufVxyXG5cclxuLnNjcm9sbC1jb250ZW50IHtcclxuICAgIHBhZGRpbmc6IDBweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uZmxleCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG59XHJcblxyXG4uaWNvbi1mb250IHtcclxuICAgIGZvbnQtc2l6ZTogMzVweDtcclxufVxyXG5cclxuLmZsZXgtcm93IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuLmZvbnRfc2l6ZV8xNyB7XHJcbiAgICBmb250LXNpemU6IDEuMHJlbSAhaW1wb3J0YW50O1xyXG4gIH1cclxuICAuZm9udF9zaXplXzM2IHtcclxuICAgIGZvbnQtc2l6ZTogMi4zcmVtICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gIGlvbi1jb250ZW50IHtcclxuICAgIC0tb3ZlcmZsb3c6IGhpZGRlbjtcclxufSIsImlvbi1iYWNrZHJvcCB7XG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC43KSAhaW1wb3J0YW50O1xufVxuXG4ubGFiZWwge1xuICB3aWR0aDogMTAwJTtcbn1cblxuc2VjdGlvbiBkaXYge1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiYSgzNCwgMzQsIDM0LCAwLjI3MDU4ODIzNTMpO1xufVxuXG5zZWN0aW9uIGRpdjpsYXN0LWNoaWxkIHtcbiAgYm9yZGVyLWJvdHRvbTogbm9uZSAhaW1wb3J0YW50O1xufVxuXG4ubGFiZWwge1xuICBtYXJnaW46IDBweCAhaW1wb3J0YW50O1xuICBmb250LWZhbWlseTogQWdlbmRhLVJlZ3VsYXI7XG59XG5cbi5ib2xkIHtcbiAgZm9udC1mYW1pbHk6IGFnZW5kYS1zZW1pYm9sZCAhaW1wb3J0YW50O1xufVxuXG5zZWN0aW9uIHtcbiAgaGVpZ2h0OiAxMDAlICFpbXBvcnRhbnQ7XG59XG5cbi5oZWFkaW5nIC5sYWJlbCB7XG4gIHBhZGRpbmctdG9wOiAxN3B4O1xufVxuXG4uaGVhZGluZyB7XG4gIGhlaWdodDogMjQlICFpbXBvcnRhbnQ7XG59XG5cbi5jaG9vc2VzZWN0aW9uIHtcbiAgaGVpZ2h0OiA3NiUgIWltcG9ydGFudDtcbn1cblxuLmNob29zZXNlY3Rpb24gZGl2IHtcbiAgcGFkZGluZy10b3A6IDEwcHg7XG59XG5cbi5jaG9vc2VzZWN0aW9uIGRpdjpsYXN0LWNoaWxkIHtcbiAgaGVpZ2h0OiAyMCUgIWltcG9ydGFudDtcbn1cblxuLmZvb3RlciB7XG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcbn1cblxuLm1hcmdpbl9hdXRvIHtcbiAgbWFyZ2luLXRvcDogYXV0bztcbiAgbWFyZ2luLWJvdHRvbTogYXV0bztcbn1cblxuLnBpY19zZWN0aW9uIHtcbiAgaGVpZ2h0OiA3NiUgIWltcG9ydGFudDtcbn1cblxuLnBpY19zZWN0aW9uIGRpdiB7XG4gIGhlaWdodDogNzAlICFpbXBvcnRhbnQ7XG59XG5cbi5yb3cge1xuICBoZWlnaHQ6IDIwJSAhaW1wb3J0YW50O1xufVxuXG5pbWcge1xuICBoZWlnaHQ6IDEwMHB4ICFpbXBvcnRhbnQ7XG4gIHdpZHRoOiAxMDBweCAhaW1wb3J0YW50O1xufVxuXG4uY29sOmZpcnN0LWNoaWxkIHtcbiAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgcmdiYSgzNCwgMzQsIDM0LCAwLjI3MDU4ODIzNTMpO1xufVxuXG5pbWcge1xuICBtYXJnaW46IDE1cHg7XG59XG5cbi50ZXh0YWxpZ24ge1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBkaXNwbGF5OiBmbGV4O1xufVxuXG4uc2Nyb2xsLWNvbnRlbnQge1xuICBwYWRkaW5nOiAwcHggIWltcG9ydGFudDtcbn1cblxuLmZsZXgge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZm9udC1zaXplOiAxOHB4O1xufVxuXG4uaWNvbi1mb250IHtcbiAgZm9udC1zaXplOiAzNXB4O1xufVxuXG4uZmxleC1yb3cge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLmZvbnRfc2l6ZV8xNyB7XG4gIGZvbnQtc2l6ZTogMXJlbSAhaW1wb3J0YW50O1xufVxuXG4uZm9udF9zaXplXzM2IHtcbiAgZm9udC1zaXplOiAyLjNyZW0gIWltcG9ydGFudDtcbn1cblxuaW9uLWNvbnRlbnQge1xuICAtLW92ZXJmbG93OiBoaWRkZW47XG59Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ })

}]);
//# sourceMappingURL=default-src_app_pages_profile-pop-up_profile-pop-up_page_ts.js.map