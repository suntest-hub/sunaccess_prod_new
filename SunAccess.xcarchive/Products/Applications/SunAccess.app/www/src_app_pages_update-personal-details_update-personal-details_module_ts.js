"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_update-personal-details_update-personal-details_module_ts"],{

/***/ 86388:
/*!*****************************************************************************************!*\
  !*** ./src/app/pages/update-personal-details/update-personal-details-routing.module.ts ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UpdatePersonalDetailsPageRoutingModule": () => (/* binding */ UpdatePersonalDetailsPageRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _update_personal_details_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./update-personal-details.page */ 91392);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);




const routes = [{
  path: '',
  component: _update_personal_details_page__WEBPACK_IMPORTED_MODULE_0__.UpdatePersonalDetailsPage
}];
class UpdatePersonalDetailsPageRoutingModule {}
UpdatePersonalDetailsPageRoutingModule.ɵfac = function UpdatePersonalDetailsPageRoutingModule_Factory(t) {
  return new (t || UpdatePersonalDetailsPageRoutingModule)();
};
UpdatePersonalDetailsPageRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
  type: UpdatePersonalDetailsPageRoutingModule
});
UpdatePersonalDetailsPageRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](UpdatePersonalDetailsPageRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
})();

/***/ }),

/***/ 82700:
/*!*********************************************************************************!*\
  !*** ./src/app/pages/update-personal-details/update-personal-details.module.ts ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UpdatePersonalDetailsPageModule": () => (/* binding */ UpdatePersonalDetailsPageModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _update_personal_details_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./update-personal-details-routing.module */ 86388);
/* harmony import */ var _update_personal_details_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./update-personal-details.page */ 91392);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ 38699);
/* harmony import */ var src_app_component_components_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/component/components.module */ 17343);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);






//import { EditPersonalDataComponent } from 'src/app/component/edit-personal-data/edit-personal-data.component';


class UpdatePersonalDetailsPageModule {}
UpdatePersonalDetailsPageModule.ɵfac = function UpdatePersonalDetailsPageModule_Factory(t) {
  return new (t || UpdatePersonalDetailsPageModule)();
};
UpdatePersonalDetailsPageModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({
  type: UpdatePersonalDetailsPageModule
});
UpdatePersonalDetailsPageModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__.TranslateModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule, _update_personal_details_routing_module__WEBPACK_IMPORTED_MODULE_0__.UpdatePersonalDetailsPageRoutingModule, src_app_component_components_module__WEBPACK_IMPORTED_MODULE_2__.ComponentsModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](UpdatePersonalDetailsPageModule, {
    declarations: [_update_personal_details_page__WEBPACK_IMPORTED_MODULE_1__.UpdatePersonalDetailsPage],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__.TranslateModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule, _update_personal_details_routing_module__WEBPACK_IMPORTED_MODULE_0__.UpdatePersonalDetailsPageRoutingModule, src_app_component_components_module__WEBPACK_IMPORTED_MODULE_2__.ComponentsModule]
  });
})();

/***/ }),

/***/ 91392:
/*!*******************************************************************************!*\
  !*** ./src/app/pages/update-personal-details/update-personal-details.page.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UpdatePersonalDetailsPage": () => (/* binding */ UpdatePersonalDetailsPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _tac_popup_tac_popup_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../tac-popup/tac-popup.page */ 52370);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var src_providers_utils_utils_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/providers/utils/utils.service */ 30423);
/* harmony import */ var src_providers_utils_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/providers/utils/config */ 43485);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var src_providers_logger_service_logger_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/providers/logger-service/logger-service */ 9999);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ngx-translate/core */ 38699);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var src_app_services_translate_config_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/translate-config.service */ 45340);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _updatePersonalDetailservice__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./updatePersonalDetailservice */ 26475);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _component_edit_personal_data_edit_personal_data_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../component/edit-personal-data/edit-personal-data.component */ 37434);














function UpdatePersonalDetailsPage_section_8_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div")(1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2, "To complete your service request, a 6-digit one-time-pin (OTP) is required. To update your mobile number please contact us at ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "a", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](4, "1300-88-5055");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](5, " or follow the steps below to submit physical form.");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
  }
}
function UpdatePersonalDetailsPage_section_8_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div")(1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2, "To complete your service request, a 6-digit one-time-pin (OTP) is required and will be sent to your mobile phone number ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](5, ".");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx_r3.maskedPhoneNumber);
  }
}
function UpdatePersonalDetailsPage_section_8_div_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div")(1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2, "To ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](4, "Update Mobile Number");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](5, " please contact us at ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](6, "a", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](7, "1300-88-5055");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](8, " or follow the steps below to submit a physical form.");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
  }
}
function UpdatePersonalDetailsPage_section_8_div_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div")(1, "ion-item", 12)(2, "ion-avatar", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](3, "i", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "ion-list", 15)(5, "ion-label", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](6, "Download (Click ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](7, "span", 17)(8, "u", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function UpdatePersonalDetailsPage_section_8_div_4_Template_u_click_8_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r9);
      const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r8.downloadAlterationForm());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](9, "here ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](10, ")");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](11, "ion-label", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](12, " Print and fill in the form ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](13, "ion-item", 12)(14, "ion-avatar", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](15, "i", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](16, "ion-list", 15)(17, "ion-label", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](18, "Scan/Snap");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](19, "ion-label", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](20, " An image of the completed form ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](21, "ion-item", 12)(22, "ion-avatar", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](23, "i", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](24, "ion-list", 15)(25, "ion-label", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](26, "Email");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](27, "ion-label", 19)(28, "a", 22)(29, "u");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](30, "policy.admin@sunlifemalaysia.com");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()()()();
  }
}
function UpdatePersonalDetailsPage_section_8_ion_col_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "ion-col")(1, "ion-button", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function UpdatePersonalDetailsPage_section_8_ion_col_6_Template_ion_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r11);
      const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r10.updateNumber());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2, "Not My Number");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "ion-button", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function UpdatePersonalDetailsPage_section_8_ion_col_6_Template_ion_button_click_3_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r11);
      const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r12.continueToUpdate());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](4, "Continue");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
  }
}
function UpdatePersonalDetailsPage_section_8_ion_col_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "ion-col")(1, "ion-button", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function UpdatePersonalDetailsPage_section_8_ion_col_7_Template_ion_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r14);
      const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r13.cancel());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2, "Close");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
  }
}
function UpdatePersonalDetailsPage_section_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "section", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, UpdatePersonalDetailsPage_section_8_div_1_Template, 6, 0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](2, UpdatePersonalDetailsPage_section_8_div_2_Template, 6, 1, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](3, UpdatePersonalDetailsPage_section_8_div_3_Template, 9, 0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](4, UpdatePersonalDetailsPage_section_8_div_4_Template, 31, 0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](5, "ion-row", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](6, UpdatePersonalDetailsPage_section_8_ion_col_6_Template, 5, 0, "ion-col", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](7, UpdatePersonalDetailsPage_section_8_ion_col_7_Template, 3, 0, "ion-col", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", !ctx_r0.phoneNumber);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r0.phoneNumber && !ctx_r0.notMyNumber);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r0.notMyNumber);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r0.notMyNumber || !ctx_r0.phoneNumber);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r0.phoneNumber && !ctx_r0.notMyNumber);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", !ctx_r0.phoneNumber || ctx_r0.notMyNumber);
  }
}
function UpdatePersonalDetailsPage_section_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "section", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "app-edit-personal-data", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("comingFromCDD", true)("isEditable", true);
  }
}
class UpdatePersonalDetailsPage {
  constructor(utils, config, alertCtrl, logger, translate, router, translateConfigService, fb, modalController, UpdatePersonalService) {
    this.utils = utils;
    this.config = config;
    this.alertCtrl = alertCtrl;
    this.logger = logger;
    this.translate = translate;
    this.router = router;
    this.translateConfigService = translateConfigService;
    this.fb = fb;
    this.modalController = modalController;
    this.UpdatePersonalService = UpdatePersonalService;
    this.isShowingLoader = false;
    this.isSuccessful = false;
    this.verifyPhoneNumberPage = true;
    this.notMyNumber = false;
    this.selectedLanguage = this.translateConfigService.getDefaultLanguage();
    this.translateConfigService.setLanguage('en');
    this.phoneNumber = this.config.userInfo.contactNumber;
    this.maskedPhoneNumber = this.config.userInfo.maskedContactNumber;
    this.config.currentPage.pageName = "UpdatePersonalDetailPage";
    this.utils.analytics("UpdatePersonalDetailPage");
    this.selectOptions = {
      cssClass: "selectPopover-updateAddress"
    };
  }
  ionViewDidLoad() {
    this.logger.log('ionViewDidLoad UpdatePersonalDetailPage');
  }
  downloadAlterationForm() {
    this.utils.openLink(this.config.alterationRequestFormLink);
  }
  emailCompose() {
    this.utils.emailCompose(this.config.contact_us.emailId);
  }
  emailComposewithSubject(subject) {
    this.utils.emailComposewithSubject(this.config.contact_us.emailId, subject);
  }
  continueToUpdate() {
    this.tacPopupModal();
  }
  updateNumber() {
    this.notMyNumber = true;
  }
  cancel() {
    this.router.navigate(['/service']);
    //this.navCtrl.push(ServicePage);
  }
  //  async tacPopupModal() {
  //   const modal = await this.modalController.create(TacPopupPage,
  //     {}, { enableBackdropDismiss: false }
  //   );
  //   modal.onDidDismiss((data => {
  //     if (data && data.TACVarified) {
  //       this.TACVarified = true
  //       this.verifyPhoneNumberPage = false;
  //     }
  //   })
  //   );
  //   return await modal.present();
  // }
  tacPopupModal() {
    return (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
      const modal = yield this.modalController.create({
        component: _tac_popup_tac_popup_page__WEBPACK_IMPORTED_MODULE_0__.TacPopupPage,
        cssClass: 'custom-modal',
        backdropDismiss: false
      });
      modal.onDidDismiss().then(data => {
        console.log(data);
        if (data && data.data.TACVarified) {
          this.TACVarified = true;
          this.verifyPhoneNumberPage = false;
        }
      });
      return yield modal.present();
    });
  }
}
UpdatePersonalDetailsPage.ɵfac = function UpdatePersonalDetailsPage_Factory(t) {
  return new (t || UpdatePersonalDetailsPage)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_providers_utils_utils_service__WEBPACK_IMPORTED_MODULE_1__.UtilService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_providers_utils_config__WEBPACK_IMPORTED_MODULE_2__.ConfigProvider), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_9__.AlertController), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_providers_logger_service_logger_service__WEBPACK_IMPORTED_MODULE_3__.LoggerServiceProvider), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__.TranslateService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_11__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_app_services_translate_config_service__WEBPACK_IMPORTED_MODULE_4__.TranslateConfigService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_9__.ModalController), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_updatePersonalDetailservice__WEBPACK_IMPORTED_MODULE_5__.UpdatePersonalService));
};
UpdatePersonalDetailsPage.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({
  type: UpdatePersonalDetailsPage,
  selectors: [["app-update-personal-details"]],
  decls: 10,
  vars: 5,
  consts: [["mode", "ios"], ["color", "primary", 1, "toolbar"], ["slot", "start"], ["text", "", "icon", "chevron-back-outline", 2, "padding-left", "15px", "font-size", "0.7rem"], [1, "bold-font"], ["no-bounce", "", 1, "app_bg2", "text_color_base"], ["class", "white_container_border_radius padding_15", 4, "ngIf"], ["class", "update-details-form", 4, "ngIf"], [1, "white_container_border_radius", "padding_15"], [4, "ngIf"], ["text-center", "", "align-items-center", ""], ["href", "tel:1300-88-5055", "target", "_blank"], ["lines", "none", 2, "--background", "none"], ["slot", "start", 1, "profile-pic-container"], ["id", "avtar-icon", 1, "fas", "fa-download"], [2, "background", "none"], [1, "font-label1"], [2, "color", "#007bff"], [3, "click"], [1, "font-label"], ["id", "avtar-icon", 1, "fas", "fa-print"], ["id", "avtar-icon", 1, "fas", "fa-envelope-open"], ["href", "mailto:policy.admin@sunlifemalaysia.com"], [1, "btn_center", 3, "click"], [1, "update-details-form"], [3, "comingFromCDD", "isEditable"]],
  template: function UpdatePersonalDetailsPage_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "ion-header", 0)(1, "ion-toolbar", 1)(2, "ion-buttons", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](3, "ion-back-button", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "ion-title", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](6, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](7, "ion-content", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](8, UpdatePersonalDetailsPage_section_8_Template, 8, 6, "section", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](9, UpdatePersonalDetailsPage_section_9_Template, 2, 2, "section", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](6, 3, "policy_servicing.update_personal_details"), " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.verifyPhoneNumberPage);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", !ctx.verifyPhoneNumberPage && ctx.TACVarified);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_13__.NgIf, _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.IonAvatar, _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.IonBackButton, _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.IonButton, _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.IonButtons, _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.IonCol, _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.IonContent, _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.IonHeader, _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.IonItem, _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.IonLabel, _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.IonList, _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.IonRow, _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.IonTitle, _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.IonToolbar, _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.IonBackButtonDelegate, _component_edit_personal_data_edit_personal_data_component__WEBPACK_IMPORTED_MODULE_6__.EditPersonalDataComponent, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__.TranslatePipe],
  styles: [".white_container_border_radius[_ngcontent-%COMP%] {\n  background-color: rgba(255, 255, 255, 0.7) !important;\n  border-radius: 15px !important;\n}\n\n.padding_15[_ngcontent-%COMP%] {\n  padding: 15px;\n}\n\n.btn_center[_ngcontent-%COMP%] {\n  text-transform: capitalize;\n  --background: #002d3d !important;\n  color: white;\n  margin-top: 15px;\n  --border-radius: 10px;\n  min-height: 40px;\n  width: 100% !important;\n  font-family: Agenda-Regular !important;\n}\n\n.label[_ngcontent-%COMP%] {\n  color: #002d3d !important;\n  font-family: agenda-semibold;\n  font-size: 1.6rem !important;\n  white-space: normal;\n}\n\n.sublabel[_ngcontent-%COMP%] {\n  color: #002d3d !important;\n  font-family: agenda-semibold;\n  font-size: 1.6rem !important;\n  margin-bottom: 4px;\n  white-space: normal;\n}\n.sublabel[_ngcontent-%COMP%]:last-child {\n  margin-bottom: 0;\n}\n\np[_ngcontent-%COMP%] {\n  font-size: 1.1rem;\n  padding-left: 10px;\n}\n\n.col[_ngcontent-%COMP%] {\n  padding: 0px !important;\n}\n\n.checkbox-icon[_ngcontent-%COMP%] {\n  border-width: 1px !important;\n  height: 27px !important;\n  width: 27px !important;\n}\n.checkbox-icon.checkbox-checked[_ngcontent-%COMP%]   .checkbox-inner[_ngcontent-%COMP%] {\n  height: 13px !important;\n  left: 9px !important;\n  top: 4px !important;\n  width: 8px !important;\n}\n\n.checkbox-checked[_ngcontent-%COMP%] {\n  border-color: #002d3d !important;\n  background-color: color white !important;\n}\n\nion-avatar[_ngcontent-%COMP%] {\n  align-items: center;\n  background: #002d3d;\n  border-radius: 50%;\n  display: flex;\n  justify-content: center;\n}\nion-avatar[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #fff;\n}\n\nion-item[_ngcontent-%COMP%] {\n  background: transparent !important;\n  padding: 0 !important;\n}\nion-item[_ngcontent-%COMP%]   .item-inner[_ngcontent-%COMP%] {\n  border-bottom: 0 !important;\n}\nion-item[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-weight: bold !important;\n  margin-top: 0 !important;\n}\nion-item[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]   u[_ngcontent-%COMP%] {\n  font-weight: bold !important;\n}\n\na[_ngcontent-%COMP%] {\n  color: #337ab7;\n}\n\n.form-field[_ngcontent-%COMP%] {\n  margin: 16px 0;\n  position: relative;\n}\n.form-field[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%] {\n  display: inline-flex;\n  font-size: 1.8rem !important;\n  margin-bottom: 8px;\n  width: calc(100% - 40px);\n}\n.form-field[_ngcontent-%COMP%]   .editable-field[_ngcontent-%COMP%] {\n  font-size: 1.6rem;\n  width: 100%;\n  word-break: break-word;\n}\n.form-field[_ngcontent-%COMP%]   .edit-icon[_ngcontent-%COMP%] {\n  display: inline-flex;\n  justify-content: space-around;\n  width: 26px;\n}\n.form-field[_ngcontent-%COMP%]   .address-field-container[_ngcontent-%COMP%] {\n  padding-left: 16px;\n}\n.form-field[_ngcontent-%COMP%]   .address-field-container[_ngcontent-%COMP%]   .address-field[_ngcontent-%COMP%] {\n  margin-bottom: 8px;\n}\n\n.fatca-crs-container[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%] {\n  font-family: Agenda-Regular !important;\n}\n.fatca-crs-container[_ngcontent-%COMP%]   .label-md[_ngcontent-%COMP%] {\n  margin: 0 8px 13px 0 !important;\n}\n.fatca-crs-container[_ngcontent-%COMP%]   .label-ios[_ngcontent-%COMP%] {\n  margin: 0 8px 13px 0 !important;\n}\n.fatca-crs-container[_ngcontent-%COMP%]   .checkbox[_ngcontent-%COMP%] {\n  margin-right: 16px !important;\n}\n.fatca-crs-container[_ngcontent-%COMP%]   ion-list[_ngcontent-%COMP%] {\n  margin-bottom: 0;\n  padding-left: 0;\n}\n.fatca-crs-container[_ngcontent-%COMP%]   ion-list[_ngcontent-%COMP%]   ion-radio[_ngcontent-%COMP%] {\n  margin-right: 16px !important;\n}\n.fatca-crs-container[_ngcontent-%COMP%]   ion-list[_ngcontent-%COMP%]   ion-radio[_ngcontent-%COMP%]   .radio-icon[_ngcontent-%COMP%] {\n  height: 27px;\n  width: 27px;\n}\n.fatca-crs-container[_ngcontent-%COMP%]   ion-list[_ngcontent-%COMP%]   ion-radio[_ngcontent-%COMP%]   .radio-icon[_ngcontent-%COMP%]   .radio-inner[_ngcontent-%COMP%] {\n  height: 13px;\n  left: 5px;\n  top: 5px;\n  width: 13px;\n}\n.fatca-crs-container[_ngcontent-%COMP%]   hr[_ngcontent-%COMP%] {\n  height: 2px;\n  margin-bottom: 24px;\n}\n\n.list-ios[_ngcontent-%COMP%]    > .item-block[_ngcontent-%COMP%]:last-child, .list-ios[_ngcontent-%COMP%]    > .item-wrapper[_ngcontent-%COMP%]:last-child   .item-block[_ngcontent-%COMP%] {\n  border-bottom: 0 !important;\n}\n\n.profile-pic-container[_ngcontent-%COMP%] {\n  position: relative;\n  height: 40px;\n  width: 40px;\n  background-color: var(--ion-color-secondary) !important;\n  display: inline-grid;\n}\n\n.font-label1[_ngcontent-%COMP%] {\n  font-size: 1.1rem !important;\n}\n\n.font-label[_ngcontent-%COMP%] {\n  font-size: 0.9rem !important;\n}\n\n.tab-container[_ngcontent-%COMP%] {\n  border-bottom: 5px solid #febe10;\n  display: flex;\n  margin-bottom: 16px;\n}\n.tab-container[_ngcontent-%COMP%]   .tab1[_ngcontent-%COMP%], .tab-container[_ngcontent-%COMP%]   .tab4[_ngcontent-%COMP%], .tab-container[_ngcontent-%COMP%]   .tab3[_ngcontent-%COMP%], .tab-container[_ngcontent-%COMP%]   .tab2[_ngcontent-%COMP%] {\n  align-items: center;\n  background: #002d3d;\n  border-right: 1px solid white;\n  color: white;\n  display: inline-flex;\n  font-family: agenda-semibold;\n  font-size: 1.23rem;\n  justify-content: center;\n  padding: 8px;\n  text-align: center;\n  width: 33.2%;\n}\n.tab-container[_ngcontent-%COMP%]   .tab1.tab-selected[_ngcontent-%COMP%], .tab-container[_ngcontent-%COMP%]   .tab-selected.tab4[_ngcontent-%COMP%], .tab-container[_ngcontent-%COMP%]   .tab-selected.tab3[_ngcontent-%COMP%], .tab-container[_ngcontent-%COMP%]   .tab-selected.tab2[_ngcontent-%COMP%] {\n  background: #febe10;\n  color: #002d3d;\n}\n.tab-container[_ngcontent-%COMP%]   .tab1[_ngcontent-%COMP%]:last-child, .tab-container[_ngcontent-%COMP%]   .tab4[_ngcontent-%COMP%]:last-child, .tab-container[_ngcontent-%COMP%]   .tab3[_ngcontent-%COMP%]:last-child, .tab-container[_ngcontent-%COMP%]   .tab2[_ngcontent-%COMP%]:last-child {\n  border-right: 0;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcGFnZXMvdXBkYXRlLXBlcnNvbmFsLWRldGFpbHMvdXBkYXRlLXBlcnNvbmFsLWRldGFpbHMucGFnZS5zY3NzIiwid2VicGFjazovLy4vLi4vLi4vLi4vQWxsJTIwUHJvamVjdHMvTWFsYXlzaWFfQ2xpZW50QXBwX1JldmFtcC9TdW5BY2Nlc3NfSW9uaWM2X1JldmFtcC9zcmMvYXBwL3BhZ2VzL3VwZGF0ZS1wZXJzb25hbC1kZXRhaWxzL3VwZGF0ZS1wZXJzb25hbC1kZXRhaWxzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHFEQUFBO0VBQ0EsOEJBQUE7QUNDRjs7QURDQTtFQUNFLGFBQUE7QUNFRjs7QURBQTtFQUNFLDBCQUFBO0VBQ0EsZ0NBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFFQSxxQkFBQTtFQUNBLGdCQUFBO0VBQ0Esc0JBQUE7RUFDQSxzQ0FBQTtBQ0VGOztBRENBO0VBQ0UseUJBQUE7RUFDQSw0QkFBQTtFQUNBLDRCQUFBO0VBQ0EsbUJBQUE7QUNFRjs7QURBQTtFQUNFLHlCQUFBO0VBQ0EsNEJBQUE7RUFDQSw0QkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7QUNHRjtBREZFO0VBQ0ksZ0JBQUE7QUNJTjs7QUREQTtFQUNFLGlCQUFBO0VBQ0Esa0JBQUE7QUNJRjs7QURGQTtFQUNFLHVCQUFBO0FDS0Y7O0FESEE7RUFDRSw0QkFBQTtFQUNBLHVCQUFBO0VBQ0Esc0JBQUE7QUNNRjtBREpNO0VBQ0ksdUJBQUE7RUFDQSxvQkFBQTtFQUNBLG1CQUFBO0VBQ0EscUJBQUE7QUNNVjs7QURGQTtFQUNFLGdDQUFBO0VBQ0Esd0NBQUE7QUNLRjs7QURIQTtFQUNFLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtBQ01GO0FETEU7RUFDSSxXQUFBO0FDT047O0FESkE7RUFDRSxrQ0FBQTtFQUNBLHFCQUFBO0FDT0Y7QURORTtFQUNJLDJCQUFBO0FDUU47QURORTtFQUNJLDRCQUFBO0VBQ0Esd0JBQUE7QUNRTjtBRFBNO0VBQ0ksNEJBQUE7QUNTVjs7QURFQTtFQUNBLGNBQUE7QUNDQTs7QURFQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtBQ0NBO0FEQUE7RUFDRSxvQkFBQTtFQUNBLDRCQUFBO0VBQ0Esa0JBQUE7RUFDQSx3QkFBQTtBQ0VGO0FEQUE7RUFDRSxpQkFBQTtFQUNBLFdBQUE7RUFDQSxzQkFBQTtBQ0VGO0FEQUE7RUFDRSxvQkFBQTtFQUNBLDZCQUFBO0VBQ0EsV0FBQTtBQ0VGO0FEQUE7RUFDRSxrQkFBQTtBQ0VGO0FEREU7RUFDSSxrQkFBQTtBQ0dOOztBREVBO0VBQ0Usc0NBQUE7QUNDRjtBREdBO0VBQ0UsK0JBQUE7QUNERjtBREdBO0VBQ0UsK0JBQUE7QUNERjtBREdBO0VBQ0UsNkJBQUE7QUNERjtBREdBO0VBQ0UsZ0JBQUE7RUFDQSxlQUFBO0FDREY7QURFRTtFQUNJLDZCQUFBO0FDQU47QURDTTtFQUNJLFlBQUE7RUFDQSxXQUFBO0FDQ1Y7QURBVTtFQUNJLFlBQUE7RUFDQSxTQUFBO0VBQ0EsUUFBQTtFQUNBLFdBQUE7QUNFZDtBREdBO0VBQ0UsV0FBQTtFQUNBLG1CQUFBO0FDREY7O0FES0E7O0VBRUEsMkJBQUE7QUNGQTs7QURNQTtFQUNFLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSx1REFBQTtFQUNBLG9CQUFBO0FDSEY7O0FES0E7RUFDRSw0QkFBQTtBQ0ZGOztBRElFO0VBQ0UsNEJBQUE7QUNESjs7QURHSTtFQUNJLGdDQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0FDQVI7QURDUTtFQUNJLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSw2QkFBQTtFQUNBLFlBQUE7RUFDQSxvQkFBQTtFQUNBLDRCQUFBO0VBQ0Esa0JBQUE7RUFDQSx1QkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7QUNDWjtBREFZO0VBQ0ksbUJBQUE7RUFDQSxjQUFBO0FDRWhCO0FEQVk7RUFDSSxlQUFBO0FDRWhCIiwic291cmNlc0NvbnRlbnQiOlsiLndoaXRlX2NvbnRhaW5lcl9ib3JkZXJfcmFkaXVzIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNykgIWltcG9ydGFudDtcclxuICBib3JkZXItcmFkaXVzOiAxNXB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuLnBhZGRpbmdfMTUge1xyXG4gIHBhZGRpbmc6IDE1cHg7XHJcbn1cclxuLmJ0bl9jZW50ZXIge1xyXG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xyXG4gIC0tYmFja2dyb3VuZDogIzAwMmQzZCAhaW1wb3J0YW50O1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBtYXJnaW4tdG9wOiAxNXB4O1xyXG4gIC8vZm9udC1zaXplOiAxLjdyZW07XHJcbiAgLS1ib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gIG1pbi1oZWlnaHQ6IDQwcHg7XHJcbiAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcclxuICBmb250LWZhbWlseTogQWdlbmRhLVJlZ3VsYXIgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmxhYmVsIHtcclxuICBjb2xvcjogIzAwMmQzZCAhaW1wb3J0YW50O1xyXG4gIGZvbnQtZmFtaWx5OiBhZ2VuZGEtc2VtaWJvbGQ7XHJcbiAgZm9udC1zaXplOiAxLjZyZW0gIWltcG9ydGFudDtcclxuICB3aGl0ZS1zcGFjZTogbm9ybWFsO1xyXG59XHJcbi5zdWJsYWJlbCB7XHJcbiAgY29sb3I6ICMwMDJkM2QhaW1wb3J0YW50O1xyXG4gIGZvbnQtZmFtaWx5OiBhZ2VuZGEtc2VtaWJvbGQ7XHJcbiAgZm9udC1zaXplOiAxLjZyZW0gIWltcG9ydGFudDtcclxuICBtYXJnaW4tYm90dG9tOiA0cHg7XHJcbiAgd2hpdGUtc3BhY2U6IG5vcm1hbDtcclxuICAmOmxhc3QtY2hpbGQge1xyXG4gICAgICBtYXJnaW4tYm90dG9tOiAwO1xyXG4gIH1cclxufVxyXG5wIHtcclxuICBmb250LXNpemU6IDEuMXJlbTtcclxuICBwYWRkaW5nLWxlZnQ6MTBweDtcclxufVxyXG4uY29sIHtcclxuICBwYWRkaW5nOiAwcHggIWltcG9ydGFudDtcclxufVxyXG4uY2hlY2tib3gtaWNvbiB7XHJcbiAgYm9yZGVyLXdpZHRoOiAxcHggIWltcG9ydGFudDtcclxuICBoZWlnaHQ6IDI3cHggIWltcG9ydGFudDtcclxuICB3aWR0aDogMjdweCAhaW1wb3J0YW50O1xyXG4gICYuY2hlY2tib3gtY2hlY2tlZCB7XHJcbiAgICAgIC5jaGVja2JveC1pbm5lciB7XHJcbiAgICAgICAgICBoZWlnaHQ6IDEzcHggIWltcG9ydGFudDtcclxuICAgICAgICAgIGxlZnQ6IDlweCAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgdG9wOiA0cHggIWltcG9ydGFudDtcclxuICAgICAgICAgIHdpZHRoOiA4cHggIWltcG9ydGFudDtcclxuICAgICAgfVxyXG4gIH1cclxufVxyXG4uY2hlY2tib3gtY2hlY2tlZCB7XHJcbiAgYm9yZGVyLWNvbG9yOiAjMDAyZDNkICFpbXBvcnRhbnQ7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogY29sb3Igd2hpdGUgIWltcG9ydGFudDtcclxufVxyXG5pb24tYXZhdGFyIHtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGJhY2tncm91bmQ6ICMwMDJkM2Q7XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgaSB7XHJcbiAgICAgIGNvbG9yOiAjZmZmO1xyXG4gIH1cclxufVxyXG5pb24taXRlbSB7XHJcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcclxuICBwYWRkaW5nOiAwICFpbXBvcnRhbnQ7XHJcbiAgLml0ZW0taW5uZXIge1xyXG4gICAgICBib3JkZXItYm90dG9tOiAwICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gIGgyIHtcclxuICAgICAgZm9udC13ZWlnaHQ6IGJvbGQgIWltcG9ydGFudDtcclxuICAgICAgbWFyZ2luLXRvcDogMCAhaW1wb3J0YW50O1xyXG4gICAgICB1IHtcclxuICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkICFpbXBvcnRhbnQ7XHJcbiAgICAgIH1cclxuICB9XHJcbn1cclxuXHJcblxyXG4vLyAudXBkYXRlLWRldGFpbHMtZm9ybSB7XHJcbi8vIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC43KTtcclxuLy8gYm9yZGVyLXJhZGl1czogMTVweDtcclxuLy8gcGFkZGluZzogMTVweDtcclxuLy8gfVxyXG5hIHtcclxuY29sb3I6ICMzMzdhYjc7XHJcbn1cclxuXHJcbi5mb3JtLWZpZWxkIHtcclxubWFyZ2luOiAxNnB4IDA7XHJcbnBvc2l0aW9uOiByZWxhdGl2ZTtcclxuLmxhYmVsIHtcclxuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcclxuICBmb250LXNpemU6IDEuOHJlbSAhaW1wb3J0YW50O1xyXG4gIG1hcmdpbi1ib3R0b206IDhweDtcclxuICB3aWR0aDogY2FsYygxMDAlIC0gNDBweCk7XHJcbn1cclxuLmVkaXRhYmxlLWZpZWxkIHtcclxuICBmb250LXNpemU6IDEuNnJlbTtcclxuICB3aWR0aDogMTAwJTtcclxuICB3b3JkLWJyZWFrOiBicmVhay13b3JkO1xyXG59XHJcbi5lZGl0LWljb24ge1xyXG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG4gIHdpZHRoOiAyNnB4O1xyXG59XHJcbi5hZGRyZXNzLWZpZWxkLWNvbnRhaW5lciB7XHJcbiAgcGFkZGluZy1sZWZ0OiAxNnB4O1xyXG4gIC5hZGRyZXNzLWZpZWxkIHtcclxuICAgICAgbWFyZ2luLWJvdHRvbTogOHB4O1xyXG4gIH1cclxufVxyXG59XHJcbi5mYXRjYS1jcnMtY29udGFpbmVyIHtcclxuLmxhYmVsIHtcclxuICBmb250LWZhbWlseTogQWdlbmRhLVJlZ3VsYXIgIWltcG9ydGFudDtcclxuICAvLyBwb2ludGVyLWV2ZW50czogbm9uZSAgIWltcG9ydGFudDtcclxuICAvLyBjdXJzb3I6IGRlZmF1bHQgIWltcG9ydGFudDtcclxufVxyXG4ubGFiZWwtbWQge1xyXG4gIG1hcmdpbjogMCA4cHggMTNweCAwICAhaW1wb3J0YW50O1xyXG59XHJcbi5sYWJlbC1pb3Mge1xyXG4gIG1hcmdpbjogMCA4cHggMTNweCAwICAhaW1wb3J0YW50O1xyXG59XHJcbi5jaGVja2JveCB7XHJcbiAgbWFyZ2luLXJpZ2h0OiAxNnB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuaW9uLWxpc3Qge1xyXG4gIG1hcmdpbi1ib3R0b206IDA7XHJcbiAgcGFkZGluZy1sZWZ0OiAwO1xyXG4gIGlvbi1yYWRpbyB7XHJcbiAgICAgIG1hcmdpbi1yaWdodDogMTZweCAhaW1wb3J0YW50O1xyXG4gICAgICAucmFkaW8taWNvbiB7XHJcbiAgICAgICAgICBoZWlnaHQ6IDI3cHg7XHJcbiAgICAgICAgICB3aWR0aDogMjdweDtcclxuICAgICAgICAgIC5yYWRpby1pbm5lciB7XHJcbiAgICAgICAgICAgICAgaGVpZ2h0OiAxM3B4O1xyXG4gICAgICAgICAgICAgIGxlZnQ6IDVweDtcclxuICAgICAgICAgICAgICB0b3A6IDVweDtcclxuICAgICAgICAgICAgICB3aWR0aDogMTNweDtcclxuICAgICAgICAgIH1cclxuICAgICAgfVxyXG4gIH1cclxufVxyXG5ociB7XHJcbiAgaGVpZ2h0OiAycHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMjRweDtcclxufVxyXG59XHJcblxyXG4ubGlzdC1pb3MgPiAuaXRlbS1ibG9jazpsYXN0LWNoaWxkLFxyXG4ubGlzdC1pb3MgPiAuaXRlbS13cmFwcGVyOmxhc3QtY2hpbGQgLml0ZW0tYmxvY2sge1xyXG5ib3JkZXItYm90dG9tOiAwICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcblxyXG4ucHJvZmlsZS1waWMtY29udGFpbmVyIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgaGVpZ2h0OiA0MHB4O1xyXG4gIHdpZHRoOiA0MHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWlvbi1jb2xvci1zZWNvbmRhcnkpICFpbXBvcnRhbnQ7O1xyXG4gIGRpc3BsYXk6IGlubGluZS1ncmlkO1xyXG59XHJcbi5mb250LWxhYmVsMXtcclxuICBmb250LXNpemU6IDEuMXJlbSAhaW1wb3J0YW50O1xyXG4gIH1cclxuICAuZm9udC1sYWJlbHtcclxuICAgIGZvbnQtc2l6ZTogMC45cmVtICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbiAgICAudGFiLWNvbnRhaW5lciB7XHJcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogNXB4IHNvbGlkICNmZWJlMTAsO1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTZweDtcclxuICAgICAgICAudGFiMSB7XHJcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICMwMDJkM2Q7XHJcbiAgICAgICAgICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkIHdoaXRlO1xyXG4gICAgICAgICAgICBjb2xvcjogIHdoaXRlO1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcclxuICAgICAgICAgICAgZm9udC1mYW1pbHk6IGFnZW5kYS1zZW1pYm9sZDtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxLjIzcmVtO1xyXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgICAgcGFkZGluZzogOHB4O1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIHdpZHRoOiAzMy4yJTtcclxuICAgICAgICAgICAgJi50YWItc2VsZWN0ZWQge1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogI2ZlYmUxMDtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiAjMDAyZDNkO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICY6bGFzdC1jaGlsZCB7XHJcbiAgICAgICAgICAgICAgICBib3JkZXItcmlnaHQ6IDA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLnRhYjIge1xyXG4gICAgICAgICAgICBAZXh0ZW5kIC50YWIxO1xyXG4gICAgICAgIH1cclxuICAgICAgICAudGFiMyB7XHJcbiAgICAgICAgICAgIEBleHRlbmQgLnRhYjE7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC50YWI0IHtcclxuICAgICAgICAgICAgQGV4dGVuZCAudGFiMTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICIsIi53aGl0ZV9jb250YWluZXJfYm9yZGVyX3JhZGl1cyB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC43KSAhaW1wb3J0YW50O1xuICBib3JkZXItcmFkaXVzOiAxNXB4ICFpbXBvcnRhbnQ7XG59XG5cbi5wYWRkaW5nXzE1IHtcbiAgcGFkZGluZzogMTVweDtcbn1cblxuLmJ0bl9jZW50ZXIge1xuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbiAgLS1iYWNrZ3JvdW5kOiAjMDAyZDNkICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgbWFyZ2luLXRvcDogMTVweDtcbiAgLS1ib3JkZXItcmFkaXVzOiAxMHB4O1xuICBtaW4taGVpZ2h0OiA0MHB4O1xuICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xuICBmb250LWZhbWlseTogQWdlbmRhLVJlZ3VsYXIgIWltcG9ydGFudDtcbn1cblxuLmxhYmVsIHtcbiAgY29sb3I6ICMwMDJkM2QgIWltcG9ydGFudDtcbiAgZm9udC1mYW1pbHk6IGFnZW5kYS1zZW1pYm9sZDtcbiAgZm9udC1zaXplOiAxLjZyZW0gIWltcG9ydGFudDtcbiAgd2hpdGUtc3BhY2U6IG5vcm1hbDtcbn1cblxuLnN1YmxhYmVsIHtcbiAgY29sb3I6ICMwMDJkM2QgIWltcG9ydGFudDtcbiAgZm9udC1mYW1pbHk6IGFnZW5kYS1zZW1pYm9sZDtcbiAgZm9udC1zaXplOiAxLjZyZW0gIWltcG9ydGFudDtcbiAgbWFyZ2luLWJvdHRvbTogNHB4O1xuICB3aGl0ZS1zcGFjZTogbm9ybWFsO1xufVxuLnN1YmxhYmVsOmxhc3QtY2hpbGQge1xuICBtYXJnaW4tYm90dG9tOiAwO1xufVxuXG5wIHtcbiAgZm9udC1zaXplOiAxLjFyZW07XG4gIHBhZGRpbmctbGVmdDogMTBweDtcbn1cblxuLmNvbCB7XG4gIHBhZGRpbmc6IDBweCAhaW1wb3J0YW50O1xufVxuXG4uY2hlY2tib3gtaWNvbiB7XG4gIGJvcmRlci13aWR0aDogMXB4ICFpbXBvcnRhbnQ7XG4gIGhlaWdodDogMjdweCAhaW1wb3J0YW50O1xuICB3aWR0aDogMjdweCAhaW1wb3J0YW50O1xufVxuLmNoZWNrYm94LWljb24uY2hlY2tib3gtY2hlY2tlZCAuY2hlY2tib3gtaW5uZXIge1xuICBoZWlnaHQ6IDEzcHggIWltcG9ydGFudDtcbiAgbGVmdDogOXB4ICFpbXBvcnRhbnQ7XG4gIHRvcDogNHB4ICFpbXBvcnRhbnQ7XG4gIHdpZHRoOiA4cHggIWltcG9ydGFudDtcbn1cblxuLmNoZWNrYm94LWNoZWNrZWQge1xuICBib3JkZXItY29sb3I6ICMwMDJkM2QgIWltcG9ydGFudDtcbiAgYmFja2dyb3VuZC1jb2xvcjogY29sb3Igd2hpdGUgIWltcG9ydGFudDtcbn1cblxuaW9uLWF2YXRhciB7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGJhY2tncm91bmQ6ICMwMDJkM2Q7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5pb24tYXZhdGFyIGkge1xuICBjb2xvcjogI2ZmZjtcbn1cblxuaW9uLWl0ZW0ge1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xuICBwYWRkaW5nOiAwICFpbXBvcnRhbnQ7XG59XG5pb24taXRlbSAuaXRlbS1pbm5lciB7XG4gIGJvcmRlci1ib3R0b206IDAgIWltcG9ydGFudDtcbn1cbmlvbi1pdGVtIGgyIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQgIWltcG9ydGFudDtcbiAgbWFyZ2luLXRvcDogMCAhaW1wb3J0YW50O1xufVxuaW9uLWl0ZW0gaDIgdSB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkICFpbXBvcnRhbnQ7XG59XG5cbmEge1xuICBjb2xvcjogIzMzN2FiNztcbn1cblxuLmZvcm0tZmllbGQge1xuICBtYXJnaW46IDE2cHggMDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLmZvcm0tZmllbGQgLmxhYmVsIHtcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gIGZvbnQtc2l6ZTogMS44cmVtICFpbXBvcnRhbnQ7XG4gIG1hcmdpbi1ib3R0b206IDhweDtcbiAgd2lkdGg6IGNhbGMoMTAwJSAtIDQwcHgpO1xufVxuLmZvcm0tZmllbGQgLmVkaXRhYmxlLWZpZWxkIHtcbiAgZm9udC1zaXplOiAxLjZyZW07XG4gIHdpZHRoOiAxMDAlO1xuICB3b3JkLWJyZWFrOiBicmVhay13b3JkO1xufVxuLmZvcm0tZmllbGQgLmVkaXQtaWNvbiB7XG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgd2lkdGg6IDI2cHg7XG59XG4uZm9ybS1maWVsZCAuYWRkcmVzcy1maWVsZC1jb250YWluZXIge1xuICBwYWRkaW5nLWxlZnQ6IDE2cHg7XG59XG4uZm9ybS1maWVsZCAuYWRkcmVzcy1maWVsZC1jb250YWluZXIgLmFkZHJlc3MtZmllbGQge1xuICBtYXJnaW4tYm90dG9tOiA4cHg7XG59XG5cbi5mYXRjYS1jcnMtY29udGFpbmVyIC5sYWJlbCB7XG4gIGZvbnQtZmFtaWx5OiBBZ2VuZGEtUmVndWxhciAhaW1wb3J0YW50O1xufVxuLmZhdGNhLWNycy1jb250YWluZXIgLmxhYmVsLW1kIHtcbiAgbWFyZ2luOiAwIDhweCAxM3B4IDAgIWltcG9ydGFudDtcbn1cbi5mYXRjYS1jcnMtY29udGFpbmVyIC5sYWJlbC1pb3Mge1xuICBtYXJnaW46IDAgOHB4IDEzcHggMCAhaW1wb3J0YW50O1xufVxuLmZhdGNhLWNycy1jb250YWluZXIgLmNoZWNrYm94IHtcbiAgbWFyZ2luLXJpZ2h0OiAxNnB4ICFpbXBvcnRhbnQ7XG59XG4uZmF0Y2EtY3JzLWNvbnRhaW5lciBpb24tbGlzdCB7XG4gIG1hcmdpbi1ib3R0b206IDA7XG4gIHBhZGRpbmctbGVmdDogMDtcbn1cbi5mYXRjYS1jcnMtY29udGFpbmVyIGlvbi1saXN0IGlvbi1yYWRpbyB7XG4gIG1hcmdpbi1yaWdodDogMTZweCAhaW1wb3J0YW50O1xufVxuLmZhdGNhLWNycy1jb250YWluZXIgaW9uLWxpc3QgaW9uLXJhZGlvIC5yYWRpby1pY29uIHtcbiAgaGVpZ2h0OiAyN3B4O1xuICB3aWR0aDogMjdweDtcbn1cbi5mYXRjYS1jcnMtY29udGFpbmVyIGlvbi1saXN0IGlvbi1yYWRpbyAucmFkaW8taWNvbiAucmFkaW8taW5uZXIge1xuICBoZWlnaHQ6IDEzcHg7XG4gIGxlZnQ6IDVweDtcbiAgdG9wOiA1cHg7XG4gIHdpZHRoOiAxM3B4O1xufVxuLmZhdGNhLWNycy1jb250YWluZXIgaHIge1xuICBoZWlnaHQ6IDJweDtcbiAgbWFyZ2luLWJvdHRvbTogMjRweDtcbn1cblxuLmxpc3QtaW9zID4gLml0ZW0tYmxvY2s6bGFzdC1jaGlsZCxcbi5saXN0LWlvcyA+IC5pdGVtLXdyYXBwZXI6bGFzdC1jaGlsZCAuaXRlbS1ibG9jayB7XG4gIGJvcmRlci1ib3R0b206IDAgIWltcG9ydGFudDtcbn1cblxuLnByb2ZpbGUtcGljLWNvbnRhaW5lciB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgaGVpZ2h0OiA0MHB4O1xuICB3aWR0aDogNDBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXNlY29uZGFyeSkgIWltcG9ydGFudDtcbiAgZGlzcGxheTogaW5saW5lLWdyaWQ7XG59XG5cbi5mb250LWxhYmVsMSB7XG4gIGZvbnQtc2l6ZTogMS4xcmVtICFpbXBvcnRhbnQ7XG59XG5cbi5mb250LWxhYmVsIHtcbiAgZm9udC1zaXplOiAwLjlyZW0gIWltcG9ydGFudDtcbn1cblxuLnRhYi1jb250YWluZXIge1xuICBib3JkZXItYm90dG9tOiA1cHggc29saWQgI2ZlYmUxMDtcbiAgZGlzcGxheTogZmxleDtcbiAgbWFyZ2luLWJvdHRvbTogMTZweDtcbn1cbi50YWItY29udGFpbmVyIC50YWIxLCAudGFiLWNvbnRhaW5lciAudGFiNCwgLnRhYi1jb250YWluZXIgLnRhYjMsIC50YWItY29udGFpbmVyIC50YWIyIHtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgYmFja2dyb3VuZDogIzAwMmQzZDtcbiAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgd2hpdGU7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gIGZvbnQtZmFtaWx5OiBhZ2VuZGEtc2VtaWJvbGQ7XG4gIGZvbnQtc2l6ZTogMS4yM3JlbTtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHBhZGRpbmc6IDhweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB3aWR0aDogMzMuMiU7XG59XG4udGFiLWNvbnRhaW5lciAudGFiMS50YWItc2VsZWN0ZWQsIC50YWItY29udGFpbmVyIC50YWItc2VsZWN0ZWQudGFiNCwgLnRhYi1jb250YWluZXIgLnRhYi1zZWxlY3RlZC50YWIzLCAudGFiLWNvbnRhaW5lciAudGFiLXNlbGVjdGVkLnRhYjIge1xuICBiYWNrZ3JvdW5kOiAjZmViZTEwO1xuICBjb2xvcjogIzAwMmQzZDtcbn1cbi50YWItY29udGFpbmVyIC50YWIxOmxhc3QtY2hpbGQsIC50YWItY29udGFpbmVyIC50YWI0Omxhc3QtY2hpbGQsIC50YWItY29udGFpbmVyIC50YWIzOmxhc3QtY2hpbGQsIC50YWItY29udGFpbmVyIC50YWIyOmxhc3QtY2hpbGQge1xuICBib3JkZXItcmlnaHQ6IDA7XG59Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ })

}]);
//# sourceMappingURL=src_app_pages_update-personal-details_update-personal-details_module_ts.js.map