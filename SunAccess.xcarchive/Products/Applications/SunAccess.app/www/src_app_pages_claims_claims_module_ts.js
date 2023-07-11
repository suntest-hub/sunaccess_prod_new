"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_claims_claims_module_ts"],{

/***/ 92018:
/*!*******************************************************!*\
  !*** ./src/app/pages/claims/claims-routing.module.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ClaimsPageRoutingModule": () => (/* binding */ ClaimsPageRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _claims_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./claims.page */ 49414);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);




const routes = [{
  path: '',
  component: _claims_page__WEBPACK_IMPORTED_MODULE_0__.ClaimsPage
}];
class ClaimsPageRoutingModule {}
ClaimsPageRoutingModule.ɵfac = function ClaimsPageRoutingModule_Factory(t) {
  return new (t || ClaimsPageRoutingModule)();
};
ClaimsPageRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
  type: ClaimsPageRoutingModule
});
ClaimsPageRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](ClaimsPageRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
})();

/***/ }),

/***/ 46944:
/*!***********************************************!*\
  !*** ./src/app/pages/claims/claims.module.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ClaimsPageModule": () => (/* binding */ ClaimsPageModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _claims_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./claims-routing.module */ 92018);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ 38699);
/* harmony import */ var _claims_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./claims.page */ 49414);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);







class ClaimsPageModule {}
ClaimsPageModule.ɵfac = function ClaimsPageModule_Factory(t) {
  return new (t || ClaimsPageModule)();
};
ClaimsPageModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
  type: ClaimsPageModule
});
ClaimsPageModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule, _claims_routing_module__WEBPACK_IMPORTED_MODULE_0__.ClaimsPageRoutingModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__.TranslateModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](ClaimsPageModule, {
    declarations: [_claims_page__WEBPACK_IMPORTED_MODULE_1__.ClaimsPage],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule, _claims_routing_module__WEBPACK_IMPORTED_MODULE_0__.ClaimsPageRoutingModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__.TranslateModule]
  });
})();

/***/ }),

/***/ 49414:
/*!*********************************************!*\
  !*** ./src/app/pages/claims/claims.page.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ClaimsPage": () => (/* binding */ ClaimsPage)
/* harmony export */ });
/* harmony import */ var src_app_app_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/app.component */ 55041);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var src_providers_utils_utils_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/providers/utils/utils.service */ 30423);
/* harmony import */ var src_providers_utils_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/providers/utils/config */ 43485);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ 38699);
/* harmony import */ var _claim_submission_claimSubmissionservice__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../claim-submission/claimSubmissionservice */ 28391);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 93819);








// import { ClaimStatusListPage } from '../claim-status-list/claim-status-list';
class ClaimsPage {
  constructor(router, utils, config, translate, submitService) {
    this.router = router;
    this.utils = utils;
    this.config = config;
    this.translate = translate;
    this.submitService = submitService;
    /**
     * Method to navigate to Claim Status Page
     */
    this.navToClaimstatus = function () {
      // this.navCtrl.push(ClaimStatusListPage);
      this.router.navigate(['/claim-status-list']);
    };
    /**
     * Method to navigate to Claim Enquiry Page
     */
    this.navToClaimEnquiry = function () {
      //this.navCtrl.push(ClaimEnquiryPage);
      this.router.navigate(['/claim-enquiry']);
    };
    /**
     * Methos to navigate to Claim Submission Page
     */
    this.navToClaimSubmission = function () {
      this.utils.showProgressLoader();
      console.log('this.config.claims', this.config.claims);
      if (!this.config.claims) {
        this.getStaticData();
        // alert(1)
      } else {
        let typeOfClaimsName = {
          typeOfClaims: this.config.claims.typeOfClaims
        };
        // alert(2)
        // this.navCtrl.push(ClaimSubmisssionTypePage,typeOfClaimsName);
        this.router.navigate(['/claim-submission-type'], {
          state: {
            typeOfClaims: this.config.claims.typeOfClaims
          }
        });
      }
      //this.navCtrl.push(ClaimSubmisssionTypePage);
    };

    this.utils.analytics("Claims");
    this.config.currentPage.pageName = "ClaimsPage";
  }
  cl() {
    alert(1);
  }
  /**
   * In this method we are updating the side menu title
   */
  ionViewWillEnter() {
    this.utils.component.emit(src_app_app_component__WEBPACK_IMPORTED_MODULE_0__.MenuOptions.CLAIMS_ENQUIRY);
  }
  getStaticData() {
    //to handle adapter call failure
    let alertButtons = [{
      text: this.translate.instant('make_payment.okBtn'),
      handler: () => {
        // this.navCtrl.pop();
      }
    }];
    //   const typeOfClaimsList:Array<Object> = [
    //     { text: 'House Owner Takaful'},
    //     { text: 'Critical illness'},
    //     { text: 'Total and Permanent Disability'},
    //     { text: 'Hospital and Surgical'},
    //     { text: 'Comprehensive Accident Benefits'},
    //     { text: 'Death-illness'},
    //     { text: 'Death-Accident'},
    // ];
    //            this.config.claims="";
    //          this.config.claims = typeOfClaimsList;
    // this.router.navigate(['/claim-submission-type'],{state:{ typeOfClaims: typeOfClaimsList }})
    if (this.utils.isDeviceOnLine()) {
      this.submitService.getClaimsStaticData().then(response => {
        try {
          if (response['responseJSON'] && response['status'] == 200) {
            this.config.claims = "";
            console.log('claimsData', response['responseJSON']['claimsData']);
            this.config.claims = response['responseJSON']['claimsData'];
            let typeOfClaimsList = {
              typeOfClaims: this.config.claims.typeOfClaims
            };
            //  this.navCtrl.push(ClaimSubmisssionTypePage,typeOfClaimsList);
            this.router.navigate(['/claim-submission-type'], {
              state: {
                typeOfClaims: this.config.claims.typeOfClaims
              }
            });
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
ClaimsPage.ɵfac = function ClaimsPage_Factory(t) {
  return new (t || ClaimsPage)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_providers_utils_utils_service__WEBPACK_IMPORTED_MODULE_1__.UtilService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_providers_utils_config__WEBPACK_IMPORTED_MODULE_2__.ConfigProvider), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__.TranslateService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_claim_submission_claimSubmissionservice__WEBPACK_IMPORTED_MODULE_3__.ClaimSubmissionService));
};
ClaimsPage.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
  type: ClaimsPage,
  selectors: [["app-claims"]],
  decls: 35,
  vars: 12,
  consts: [["mode", "ios"], ["color", "primary", 1, "toolbar"], ["slot", "start", "auto-hide", "false", "color", "secondary"], [1, "bold-font"], ["forceOverscroll", "false", 1, "app_bg2", "text_color_base"], [1, "white_container_border_radius", "text_color_base"], [1, "rowC", 3, "click"], ["size", "1", 1, "margin_top_bottom_auto"], [1, "fas", "fa-edit", "font_size_20"], ["size", "9", 1, "margin_top_bottom_auto"], [1, "label-margin", "font_size_17"], ["size", "2", 1, "margin_top_bottom_auto"], [1, "fas", "fa-angle-right", "font_size_20"], [1, "fas", "fa-calendar-check", "font_size_20"], [1, "fas", "fa-chalkboard-teacher", "font_size_20"]],
  template: function ClaimsPage_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "ion-header", 0)(1, "ion-toolbar", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](2, "ion-menu-button", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "ion-title", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](5, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "ion-content", 4)(7, "ion-list", 5)(8, "ion-row", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ClaimsPage_Template_ion_row_click_8_listener() {
        return ctx.navToClaimSubmission();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "ion-col", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](10, "i", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "ion-col", 9)(12, "ion-label", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](13);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](14, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](15, "ion-col", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](16, "i", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](17, "ion-row", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ClaimsPage_Template_ion_row_click_17_listener() {
        return ctx.navToClaimstatus();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](18, "ion-col", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](19, "i", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](20, "ion-col", 9)(21, "ion-label", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](22);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](23, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](24, "ion-col", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](25, "i", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](26, "ion-row", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ClaimsPage_Template_ion_row_click_26_listener() {
        return ctx.navToClaimEnquiry();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](27, "ion-col", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](28, "i", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](29, "ion-col", 9)(30, "ion-label", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](31);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](32, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](33, "ion-col", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](34, "i", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](5, 4, "claims-list.claims"), " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](9);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](14, 6, "claims-list.claimsSubmission"));
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](9);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](23, 8, "claims-list.claimsStatus"));
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](9);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](32, 10, "claims-list.claimsEnquiry"));
    }
  },
  dependencies: [_ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonCol, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonContent, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonHeader, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonLabel, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonList, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonMenuButton, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonRow, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonTitle, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonToolbar, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__.TranslatePipe],
  styles: [".row[_ngcontent-%COMP%] {\n  border-bottom: 1px solid var(--ion-color-secondary);\n}\n\n.label[_ngcontent-%COMP%] {\n  font-size: 1.7rem;\n  margin: 0px;\n  line-height: 24px;\n}\n\n.list[_ngcontent-%COMP%] {\n  margin: 15px;\n}\n\nion-row[_ngcontent-%COMP%] {\n  border-bottom: 1px solid var(--ion-color-secondary);\n  height: 45px;\n  padding: 0px;\n  margin: auto;\n}\n\nion-row[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n}\n\n.col[_ngcontent-%COMP%] {\n  padding: 15px;\n}\n\n.label-margin[_ngcontent-%COMP%] {\n  margin-left: 13%;\n}\n\n.font_size_20[_ngcontent-%COMP%] {\n  font-size: 1.2rem !important;\n}\n\n.font_size_17[_ngcontent-%COMP%] {\n  font-size: 1rem !important;\n}\n\n.margin[_ngcontent-%COMP%] {\n  padding: 10px;\n}\n\n.text_color_base[_ngcontent-%COMP%] {\n  color: var(--ion-color-secondary) !important;\n  margin-left: 10px;\n  margin-right: 10px;\n  padding-left: 10px;\n  padding-right: 10px;\n  padding-top: 10px;\n  margin-top: 10px;\n}\n\n.rowC[_ngcontent-%COMP%] {\n  padding: 5px;\n  margin-left: -5px;\n  margin-bottom: 10px;\n  margin-top: 10px;\n  align-items: center;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcGFnZXMvY2xhaW1zL2NsYWltcy5wYWdlLnNjc3MiLCJ3ZWJwYWNrOi8vLi8uLi8uLi8uLi9BbGwlMjBQcm9qZWN0cy9NYWxheXNpYV9DbGllbnRBcHBfUmV2YW1wL1N1bkFjY2Vzc19Jb25pYzZfUmV2YW1wL3NyYy9hcHAvcGFnZXMvY2xhaW1zL2NsYWltcy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0k7RUFDSSxtREFBQTtBQ0FSOztBREdJO0VBQ0csaUJBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7QUNBUDs7QURJSTtFQUVJLFlBQUE7QUNGUjs7QURLSTtFQUNJLG1EQUFBO0VBRUEsWUFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0FDSFI7O0FETUk7RUFDSSxtQkFBQTtBQ0hSOztBRE1JO0VBQ0ksYUFBQTtBQ0hSOztBRE1JO0VBQ0ksZ0JBQUE7QUNIUjs7QURNSTtFQUNJLDRCQUFBO0FDSFI7O0FES0k7RUFDSSwwQkFBQTtBQ0ZSOztBRElJO0VBQ0UsYUFBQTtBQ0ROOztBREdJO0VBQ0ksNENBQUE7RUFHQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7QUNGUjs7QURNSTtFQUNJLFlBQUE7RUFBYSxpQkFBQTtFQUFtQixtQkFBQTtFQUFvQixnQkFBQTtFQUFrQixtQkFBQTtBQ0M5RSIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4gICAgLnJvd3tcclxuICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0taW9uLWNvbG9yLXNlY29uZGFyeSk7XHJcbiAgICB9XHJcblxyXG4gICAgLmxhYmVse1xyXG4gICAgICAgZm9udC1zaXplOiAxLjdyZW07XHJcbiAgICAgICBtYXJnaW46IDBweDtcclxuICAgICAgIGxpbmUtaGVpZ2h0OiAyNHB4O1xyXG4gICAgICAgIFxyXG4gICAgfVxyXG4gICBcclxuICAgIC5saXN0e1xyXG4gICAgICAgIC8vIHBhZGRpbmc6IDBweCAxNXB4O1xyXG4gICAgICAgIG1hcmdpbjogMTVweDtcclxuICAgIH1cclxuICAgIFxyXG4gICAgaW9uLXJvd3tcclxuICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0taW9uLWNvbG9yLXNlY29uZGFyeSk7XHJcbiAgICAgICAgLy8gbWFyZ2luLXRvcDogNXB4O1xyXG4gICAgICAgIGhlaWdodDogNDVweDtcclxuICAgICAgICBwYWRkaW5nOiAwcHg7XHJcbiAgICAgICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgfVxyXG5cclxuICAgIGlvbi1yb3c6bGFzdC1jaGlsZHtcclxuICAgICAgICBib3JkZXItYm90dG9tOiBub25lO1xyXG4gICAgfVxyXG5cclxuICAgIC5jb2x7XHJcbiAgICAgICAgcGFkZGluZzogMTVweDtcclxuICAgIH1cclxuXHJcbiAgICAubGFiZWwtbWFyZ2lue1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OjEzJTtcclxuICAgICAgICBcclxuICAgIH1cclxuICAgIC5mb250X3NpemVfMjAge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMS4ycmVtICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbiAgICAuZm9udF9zaXplXzE3IHtcclxuICAgICAgICBmb250LXNpemU6IDEuMHJlbSAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG4gICAgLm1hcmdpbntcclxuICAgICAgcGFkZGluZzogMTBweDtcclxuICAgIH1cclxuICAgIC50ZXh0X2NvbG9yX2Jhc2Uge1xyXG4gICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5KSAhaW1wb3J0YW50O1xyXG4gICAgICAgIC8vIHBhZGRpbmc6IDEwcHg7XHJcbiAgICAgICAgLy8gbWFyZ2luOiAxNXB4O1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDogMTBweDtcclxuICAgICAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XHJcbiAgICAgICAgcGFkZGluZy1yaWdodDogMTBweDtcclxuICAgICAgICBwYWRkaW5nLXRvcDogMTBweDtcclxuICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgfVxyXG4gICAgXHJcbiAgIFxyXG4gICAgLnJvd0N7XHJcbiAgICAgICAgcGFkZGluZzogNXB4O21hcmdpbi1sZWZ0OiAtNXB4OyBtYXJnaW4tYm90dG9tOjEwcHg7IG1hcmdpbi10b3A6IDEwcHg7IGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICB9IiwiLnJvdyB7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5KTtcbn1cblxuLmxhYmVsIHtcbiAgZm9udC1zaXplOiAxLjdyZW07XG4gIG1hcmdpbjogMHB4O1xuICBsaW5lLWhlaWdodDogMjRweDtcbn1cblxuLmxpc3Qge1xuICBtYXJnaW46IDE1cHg7XG59XG5cbmlvbi1yb3cge1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0taW9uLWNvbG9yLXNlY29uZGFyeSk7XG4gIGhlaWdodDogNDVweDtcbiAgcGFkZGluZzogMHB4O1xuICBtYXJnaW46IGF1dG87XG59XG5cbmlvbi1yb3c6bGFzdC1jaGlsZCB7XG4gIGJvcmRlci1ib3R0b206IG5vbmU7XG59XG5cbi5jb2wge1xuICBwYWRkaW5nOiAxNXB4O1xufVxuXG4ubGFiZWwtbWFyZ2luIHtcbiAgbWFyZ2luLWxlZnQ6IDEzJTtcbn1cblxuLmZvbnRfc2l6ZV8yMCB7XG4gIGZvbnQtc2l6ZTogMS4ycmVtICFpbXBvcnRhbnQ7XG59XG5cbi5mb250X3NpemVfMTcge1xuICBmb250LXNpemU6IDFyZW0gIWltcG9ydGFudDtcbn1cblxuLm1hcmdpbiB7XG4gIHBhZGRpbmc6IDEwcHg7XG59XG5cbi50ZXh0X2NvbG9yX2Jhc2Uge1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXNlY29uZGFyeSkgIWltcG9ydGFudDtcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gIG1hcmdpbi1yaWdodDogMTBweDtcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xuICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xuICBwYWRkaW5nLXRvcDogMTBweDtcbiAgbWFyZ2luLXRvcDogMTBweDtcbn1cblxuLnJvd0Mge1xuICBwYWRkaW5nOiA1cHg7XG4gIG1hcmdpbi1sZWZ0OiAtNXB4O1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICBtYXJnaW4tdG9wOiAxMHB4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufSJdLCJzb3VyY2VSb290IjoiIn0= */"]
});

/***/ })

}]);
//# sourceMappingURL=src_app_pages_claims_claims_module_ts.js.map