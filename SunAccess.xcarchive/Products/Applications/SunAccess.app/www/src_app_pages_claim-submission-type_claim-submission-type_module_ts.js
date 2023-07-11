"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_claim-submission-type_claim-submission-type_module_ts"],{

/***/ 44145:
/*!*************************************************************************************!*\
  !*** ./src/app/pages/claim-submission-type/claim-submission-type-routing.module.ts ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ClaimSubmissionTypePageRoutingModule": () => (/* binding */ ClaimSubmissionTypePageRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _claim_submission_type_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./claim-submission-type.page */ 84488);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);




const routes = [{
  path: '',
  component: _claim_submission_type_page__WEBPACK_IMPORTED_MODULE_0__.ClaimSubmissionTypePage
}];
class ClaimSubmissionTypePageRoutingModule {}
ClaimSubmissionTypePageRoutingModule.ɵfac = function ClaimSubmissionTypePageRoutingModule_Factory(t) {
  return new (t || ClaimSubmissionTypePageRoutingModule)();
};
ClaimSubmissionTypePageRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
  type: ClaimSubmissionTypePageRoutingModule
});
ClaimSubmissionTypePageRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](ClaimSubmissionTypePageRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
})();

/***/ }),

/***/ 17528:
/*!*****************************************************************************!*\
  !*** ./src/app/pages/claim-submission-type/claim-submission-type.module.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ClaimSubmissionTypePageModule": () => (/* binding */ ClaimSubmissionTypePageModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _claim_submission_type_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./claim-submission-type-routing.module */ 44145);
/* harmony import */ var _claim_submission_type_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./claim-submission-type.page */ 84488);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ 38699);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);







class ClaimSubmissionTypePageModule {}
ClaimSubmissionTypePageModule.ɵfac = function ClaimSubmissionTypePageModule_Factory(t) {
  return new (t || ClaimSubmissionTypePageModule)();
};
ClaimSubmissionTypePageModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
  type: ClaimSubmissionTypePageModule
});
ClaimSubmissionTypePageModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule, _claim_submission_type_routing_module__WEBPACK_IMPORTED_MODULE_0__.ClaimSubmissionTypePageRoutingModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__.TranslateModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](ClaimSubmissionTypePageModule, {
    declarations: [_claim_submission_type_page__WEBPACK_IMPORTED_MODULE_1__.ClaimSubmissionTypePage],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule, _claim_submission_type_routing_module__WEBPACK_IMPORTED_MODULE_0__.ClaimSubmissionTypePageRoutingModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__.TranslateModule]
  });
})();

/***/ }),

/***/ 84488:
/*!***************************************************************************!*\
  !*** ./src/app/pages/claim-submission-type/claim-submission-type.page.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ClaimSubmissionTypePage": () => (/* binding */ ClaimSubmissionTypePage)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var src_providers_utils_utils_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/providers/utils/utils.service */ 30423);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var src_providers_utils_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/providers/utils/config */ 43485);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ 38699);
/* harmony import */ var _claim_submission_claimSubmissionservice__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../claim-submission/claimSubmissionservice */ 28391);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 93819);








function ClaimSubmissionTypePage_ion_row_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "ion-row", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ClaimSubmissionTypePage_ion_row_9_Template_ion_row_click_0_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r3);
      const type_r1 = restoredCtx.$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r2.navtoForm(type_r1));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "ion-col", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "ion-col", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](4, "i", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const type_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", type_r1, " ");
  }
}
class ClaimSubmissionTypePage {
  constructor(utils, router, config, translate, submitService) {
    this.utils = utils;
    this.router = router;
    this.config = config;
    this.translate = translate;
    this.submitService = submitService;
    this.typeOfClaims = [];
    this.utils.analytics("claimSubmissionType");
    this.config.currentPage.pageName = "ClaimSubmisssionTypePage";
  }
  /**
   * @param type - type of claim to which we need to naviagte
   */
  navtoForm(type) {
    //  this.navCtrl.push(ClaimSubmissionPage,{'type':type});
    console.log('type', type);
    // this.router.navigate(['/claim-submission'],{state:{ 'type':type }})
    this.router.navigate(['/claim-submission'], {
      state: {
        'type': type,
        'typeOfClaims': this.typeOfClaims
      }
    });
  }
  /** */
  ngOnInit() {
    console.log('history.state.typeOfClaims.typeOfClaims', history.state.typeOfClaims);
    this.typeOfClaims = history.state.typeOfClaims; //history.state.typeOfClaims.typeOfClaims //this.navParams.get('typeOfClaims');
    this.utils.dissmisProgressLoader();
  }
  //    ionViewDidLoad(){
  // }
  /**this method is used to get claims static data from adapter */
  getStaticData() {
    //to handle adapter call failure
    let alertButtons = [{
      text: this.translate.instant('make_payment.okBtn'),
      handler: () => {
        // this.navCtrl.pop();
      }
    }];
    if (this.utils.isDeviceOnLine()) {
      //this.utils.showProgressLoader();
      this.submitService.getClaimsStaticData().then(response => {
        try {
          if (response['responseJSON'] && response['status'] == 200) {
            this.config.claims = "";
            this.config.claims = response['responseJSON']['claimsData'];
            this.typeOfClaims = this.config.claims.typeOfClaims;
            this.utils.dissmisProgressLoader();
          } else {
            this.utils.dissmisProgressLoader();
            var msg = this.translate.instant('generic_msgs.server_err');
            this.utils.showAlert('', msg, false, alertButtons);
          }
        } catch (e) {
          this.utils.dissmisProgressLoader();
          var msgs = this.translate.instant('generic_msgs.server_err');
          this.utils.showAlert('', msgs, false, alertButtons);
        }
      }, error => {
        this.utils.dissmisProgressLoader();
        let errorMsg = this.utils.handleServiceException(error);
        this.utils.showAlert("", errorMsg, false, alertButtons);
      });
    } else {
      var msg = this.translate.instant('generic_msgs.network_err');
      this.utils.showAlert('', msg, false, alertButtons);
    }
  }
}
ClaimSubmissionTypePage.ɵfac = function ClaimSubmissionTypePage_Factory(t) {
  return new (t || ClaimSubmissionTypePage)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_providers_utils_utils_service__WEBPACK_IMPORTED_MODULE_0__.UtilService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_providers_utils_config__WEBPACK_IMPORTED_MODULE_1__.ConfigProvider), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__.TranslateService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_claim_submission_claimSubmissionservice__WEBPACK_IMPORTED_MODULE_2__.ClaimSubmissionService));
};
ClaimSubmissionTypePage.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
  type: ClaimSubmissionTypePage,
  selectors: [["app-claim-submission-type"]],
  decls: 10,
  vars: 4,
  consts: [["mode", "ios"], ["color", "primary"], ["slot", "start"], ["text", "", "icon", "chevron-back-outline", 2, "padding-left", "15px", "font-size", "0.7rem"], [1, "bold-font"], ["no-bounce", "", "padding", "", 1, "app_bg1", "text_color_base", "margin"], [1, "white_container_border_radius", "margin"], ["class", "font", 3, "click", 4, "ngFor", "ngForOf"], [1, "font", 3, "click"], ["size", "10"], ["size", "2", 1, "margin_top_bottom_auto", "ion-text-center"], [1, "fas", "fa-angle-right", "font_size_20"]],
  template: function ClaimSubmissionTypePage_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "ion-header", 0)(1, "ion-toolbar", 1)(2, "ion-buttons", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "ion-back-button", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "ion-title", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](6, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "ion-content", 5)(8, "ion-list", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](9, ClaimSubmissionTypePage_ion_row_9_Template, 5, 1, "ion-row", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](6, 2, "claim_submission.title"));
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.typeOfClaims);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgForOf, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonBackButton, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonButtons, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonCol, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonContent, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonHeader, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonList, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonRow, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonTitle, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonToolbar, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonBackButtonDelegate, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__.TranslatePipe],
  styles: [".item[_ngcontent-%COMP%]   .item-inner[_ngcontent-%COMP%] {\n  border-bottom: 1px solid var(--ion-color-secondary) !important;\n}\n\n.item[_ngcontent-%COMP%]:last-child   .item-inner[_ngcontent-%COMP%] {\n  border-bottom: none !important;\n}\n\n.item[_ngcontent-%COMP%] {\n  padding: 1px 15px !important;\n  color: var(--ion-color-secondary);\n}\n\n.item[_ngcontent-%COMP%]   .item-inner[_ngcontent-%COMP%] {\n  margin-top: 5px;\n  color: var(--ion-color-secondary);\n}\n\n.item[_ngcontent-%COMP%]:first-child {\n  border-radius: 15px 15px 0px 0px !important;\n}\n\n.item[_ngcontent-%COMP%]:last-child {\n  border-radius: 0px 0px 15px 15px !important;\n}\n\n.item[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%] {\n  margin: 0px;\n  padding: 15px 0px;\n  font-size: 18px;\n  line-height: 24px;\n  font-weight: 400;\n}\n\n@media only screen and (max-width: 374px) {\n  .item[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%] {\n    font-size: 17px !important;\n  }\n}\n@media only screen and (max-width: 320px) {\n  .item[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%] {\n    font-size: 15px !important;\n  }\n}\n.app_bg1[_ngcontent-%COMP%] {\n  --background: url(/../assets/imgs/register_bg.jpg) no-repeat center center / cover !important;\n}\n\n.margin[_ngcontent-%COMP%] {\n  padding: 10px;\n  margin: 10px;\n}\n\n.font[_ngcontent-%COMP%] {\n  padding: 15px;\n  font-size: 15px;\n}\n\nion-row[_ngcontent-%COMP%] {\n  border-bottom: 1px solid rgba(0, 45, 61, 0.3);\n}\n\nion-row[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n}\n\n.margin_top_bottom_auto[_ngcontent-%COMP%] {\n  margin-top: auto;\n  margin-bottom: auto;\n}\n\n.font_size_20[_ngcontent-%COMP%] {\n  font-size: 1.2rem !important;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcGFnZXMvY2xhaW0tc3VibWlzc2lvbi10eXBlL2NsYWltLXN1Ym1pc3Npb24tdHlwZS5wYWdlLnNjc3MiLCJ3ZWJwYWNrOi8vLi8uLi8uLi8uLi9BbGwlMjBQcm9qZWN0cy9NYWxheXNpYV9DbGllbnRBcHBfUmV2YW1wL1N1bkFjY2Vzc19Jb25pYzZfUmV2YW1wL3NyYy9hcHAvcGFnZXMvY2xhaW0tc3VibWlzc2lvbi10eXBlL2NsYWltLXN1Ym1pc3Npb24tdHlwZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0k7RUFDSSw4REFBQTtBQ0FSOztBREdJO0VBQ0ksOEJBQUE7QUNBUjs7QURHSTtFQUNJLDRCQUFBO0VBQ0EsaUNBQUE7QUNBUjs7QURHSTtFQUNJLGVBQUE7RUFDQSxpQ0FBQTtBQ0FSOztBREdJO0VBQ0ksMkNBQUE7QUNBUjs7QURHSTtFQUNJLDJDQUFBO0FDQVI7O0FER0k7RUFDSSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtBQ0FSOztBREdJO0VBQ0k7SUFDSSwwQkFBQTtFQ0FWO0FBQ0Y7QURHSTtFQUNJO0lBQ0ksMEJBQUE7RUNEVjtBQUNGO0FER0k7RUFDSSw2RkFBQTtBQ0RSOztBRElJO0VBQ0ksYUFBQTtFQUNBLFlBQUE7QUNEUjs7QURHTTtFQUNNLGFBQUE7RUFDQSxlQUFBO0FDQVo7O0FERU07RUFDRSw2Q0FBQTtBQ0NSOztBREdNO0VBQ0UsbUJBQUE7QUNBUjs7QURFTTtFQUNFLGdCQUFBO0VBQ0EsbUJBQUE7QUNDUjs7QURDTTtFQUNFLDRCQUFBO0FDRVIiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuICAgIC5pdGVtIC5pdGVtLWlubmVye1xyXG4gICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5KSFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcblxyXG4gICAgLml0ZW06bGFzdC1jaGlsZCAuaXRlbS1pbm5lcntcclxuICAgICAgICBib3JkZXItYm90dG9tOiBub25lICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcblxyXG4gICAgLml0ZW17XHJcbiAgICAgICAgcGFkZGluZzogMXB4IDE1cHggIWltcG9ydGFudDtcclxuICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXNlY29uZGFyeSk7XHJcbiAgICB9XHJcblxyXG4gICAgLml0ZW0gLml0ZW0taW5uZXJ7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogIDVweDtcclxuICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXNlY29uZGFyeSk7XHJcbiAgICB9XHJcblxyXG4gICAgLml0ZW06Zmlyc3QtY2hpbGR7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTVweCAxNXB4IDBweCAwcHggICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcblxyXG4gICAgLml0ZW06bGFzdC1jaGlsZHtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAwcHggMHB4IDE1cHggMTVweCAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG5cclxuICAgIC5pdGVtIC5sYWJlbHtcclxuICAgICAgICBtYXJnaW46IDBweDtcclxuICAgICAgICBwYWRkaW5nOiAxNXB4IDBweDtcclxuICAgICAgICBmb250LXNpemU6ICAxOHB4O1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAyNHB4O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICB9XHJcblxyXG4gICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAzNzRweCkge1xyXG4gICAgICAgIC5pdGVtIC5sYWJlbCB7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTdweCAhaW1wb3J0YW50O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIFxyXG4gICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAzMjBweCkge1xyXG4gICAgICAgIC5pdGVtIC5sYWJlbCB7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTVweCAhaW1wb3J0YW50O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC5hcHBfYmcxIHtcclxuICAgICAgICAtLWJhY2tncm91bmQ6IHVybCgvLi4vYXNzZXRzL2ltZ3MvcmVnaXN0ZXJfYmcuanBnKSBuby1yZXBlYXQgY2VudGVyIGNlbnRlciAvIGNvdmVyICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbiAgXHJcbiAgICAubWFyZ2lue1xyXG4gICAgICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICAgICAgbWFyZ2luOiAxMHB4O1xyXG4gICAgICB9XHJcbiAgICAgIC5mb250e1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAxNXB4O1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICAgIH1cclxuICAgICAgaW9uLXJvdyB7XHJcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoMCwgNDUsIDYxLCAuMyk7XHJcbiAgICAgICAgLy9tYXJnaW4tdG9wOiA1cHg7XHJcbiAgICAgIH1cclxuICAgICAgXHJcbiAgICAgIGlvbi1yb3c6bGFzdC1jaGlsZCB7XHJcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogbm9uZTtcclxuICAgICAgfVxyXG4gICAgICAubWFyZ2luX3RvcF9ib3R0b21fYXV0byB7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogYXV0bztcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiBhdXRvO1xyXG4gICAgICB9XHJcbiAgICAgIC5mb250X3NpemVfMjAge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMS4ycmVtICFpbXBvcnRhbnQ7XHJcbiAgICAgIH0iLCIuaXRlbSAuaXRlbS1pbm5lciB7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5KSAhaW1wb3J0YW50O1xufVxuXG4uaXRlbTpsYXN0LWNoaWxkIC5pdGVtLWlubmVyIHtcbiAgYm9yZGVyLWJvdHRvbTogbm9uZSAhaW1wb3J0YW50O1xufVxuXG4uaXRlbSB7XG4gIHBhZGRpbmc6IDFweCAxNXB4ICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5KTtcbn1cblxuLml0ZW0gLml0ZW0taW5uZXIge1xuICBtYXJnaW4tdG9wOiA1cHg7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5KTtcbn1cblxuLml0ZW06Zmlyc3QtY2hpbGQge1xuICBib3JkZXItcmFkaXVzOiAxNXB4IDE1cHggMHB4IDBweCAhaW1wb3J0YW50O1xufVxuXG4uaXRlbTpsYXN0LWNoaWxkIHtcbiAgYm9yZGVyLXJhZGl1czogMHB4IDBweCAxNXB4IDE1cHggIWltcG9ydGFudDtcbn1cblxuLml0ZW0gLmxhYmVsIHtcbiAgbWFyZ2luOiAwcHg7XG4gIHBhZGRpbmc6IDE1cHggMHB4O1xuICBmb250LXNpemU6IDE4cHg7XG4gIGxpbmUtaGVpZ2h0OiAyNHB4O1xuICBmb250LXdlaWdodDogNDAwO1xufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDM3NHB4KSB7XG4gIC5pdGVtIC5sYWJlbCB7XG4gICAgZm9udC1zaXplOiAxN3B4ICFpbXBvcnRhbnQ7XG4gIH1cbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMzIwcHgpIHtcbiAgLml0ZW0gLmxhYmVsIHtcbiAgICBmb250LXNpemU6IDE1cHggIWltcG9ydGFudDtcbiAgfVxufVxuLmFwcF9iZzEge1xuICAtLWJhY2tncm91bmQ6IHVybCgvLi4vYXNzZXRzL2ltZ3MvcmVnaXN0ZXJfYmcuanBnKSBuby1yZXBlYXQgY2VudGVyIGNlbnRlciAvIGNvdmVyICFpbXBvcnRhbnQ7XG59XG5cbi5tYXJnaW4ge1xuICBwYWRkaW5nOiAxMHB4O1xuICBtYXJnaW46IDEwcHg7XG59XG5cbi5mb250IHtcbiAgcGFkZGluZzogMTVweDtcbiAgZm9udC1zaXplOiAxNXB4O1xufVxuXG5pb24tcm93IHtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoMCwgNDUsIDYxLCAwLjMpO1xufVxuXG5pb24tcm93Omxhc3QtY2hpbGQge1xuICBib3JkZXItYm90dG9tOiBub25lO1xufVxuXG4ubWFyZ2luX3RvcF9ib3R0b21fYXV0byB7XG4gIG1hcmdpbi10b3A6IGF1dG87XG4gIG1hcmdpbi1ib3R0b206IGF1dG87XG59XG5cbi5mb250X3NpemVfMjAge1xuICBmb250LXNpemU6IDEuMnJlbSAhaW1wb3J0YW50O1xufSJdLCJzb3VyY2VSb290IjoiIn0= */"]
});

/***/ })

}]);
//# sourceMappingURL=src_app_pages_claim-submission-type_claim-submission-type_module_ts.js.map