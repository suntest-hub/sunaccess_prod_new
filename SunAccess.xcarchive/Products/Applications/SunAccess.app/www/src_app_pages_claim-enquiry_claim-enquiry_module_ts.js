"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_claim-enquiry_claim-enquiry_module_ts"],{

/***/ 76932:
/*!*********************************************************************!*\
  !*** ./src/app/pages/claim-enquiry/claim-enquiry-routing.module.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ClaimEnquiryPageRoutingModule": () => (/* binding */ ClaimEnquiryPageRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _claim_enquiry_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./claim-enquiry.page */ 20881);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);




const routes = [{
  path: '',
  component: _claim_enquiry_page__WEBPACK_IMPORTED_MODULE_0__.ClaimEnquiryPage
}];
class ClaimEnquiryPageRoutingModule {}
ClaimEnquiryPageRoutingModule.ɵfac = function ClaimEnquiryPageRoutingModule_Factory(t) {
  return new (t || ClaimEnquiryPageRoutingModule)();
};
ClaimEnquiryPageRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
  type: ClaimEnquiryPageRoutingModule
});
ClaimEnquiryPageRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](ClaimEnquiryPageRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
})();

/***/ }),

/***/ 67567:
/*!*************************************************************!*\
  !*** ./src/app/pages/claim-enquiry/claim-enquiry.module.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ClaimEnquiryPageModule": () => (/* binding */ ClaimEnquiryPageModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _claim_enquiry_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./claim-enquiry-routing.module */ 76932);
/* harmony import */ var _claim_enquiry_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./claim-enquiry.page */ 20881);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ 38699);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);







class ClaimEnquiryPageModule {}
ClaimEnquiryPageModule.ɵfac = function ClaimEnquiryPageModule_Factory(t) {
  return new (t || ClaimEnquiryPageModule)();
};
ClaimEnquiryPageModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
  type: ClaimEnquiryPageModule
});
ClaimEnquiryPageModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule, _claim_enquiry_routing_module__WEBPACK_IMPORTED_MODULE_0__.ClaimEnquiryPageRoutingModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__.TranslateModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.ReactiveFormsModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](ClaimEnquiryPageModule, {
    declarations: [_claim_enquiry_page__WEBPACK_IMPORTED_MODULE_1__.ClaimEnquiryPage],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule, _claim_enquiry_routing_module__WEBPACK_IMPORTED_MODULE_0__.ClaimEnquiryPageRoutingModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__.TranslateModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.ReactiveFormsModule]
  });
})();

/***/ }),

/***/ 20881:
/*!***********************************************************!*\
  !*** ./src/app/pages/claim-enquiry/claim-enquiry.page.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ClaimEnquiryPage": () => (/* binding */ ClaimEnquiryPage)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! date-fns */ 86712);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! date-fns */ 86527);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var src_providers_utils_utils_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/providers/utils/utils.service */ 30423);
/* harmony import */ var src_providers_utils_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/providers/utils/config */ 43485);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngx-translate/core */ 38699);










function ClaimEnquiryPage_div_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 18)(1, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](3, 1, "claim_enquiry.policyNoLength_req"));
  }
}
function ClaimEnquiryPage_div_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 18)(1, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](3, 1, "claim_enquiry.policyNoLength"));
  }
}
function ClaimEnquiryPage_ion_datetime_27_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "ion-datetime", 20, 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ionChange", function ClaimEnquiryPage_ion_datetime_27_Template_ion_datetime_ionChange_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r6);
      const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](1);
      const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r5.dateChanged(_r4.value));
    })("ionCancel", function ClaimEnquiryPage_ion_datetime_27_Template_ion_datetime_ionCancel_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r6);
      const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r7.showPicker = false);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](2, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("max", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](2, 2, ctx_r2.today, "yyyy-MM-dd"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", ctx_r2.dateValue);
  }
}
function ClaimEnquiryPage_div_28_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 18)(1, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](3, 1, "claim_enquiry.err_oneisRequired"));
  }
}
class ClaimEnquiryPage {
  constructor(router, fb, utils, config) {
    this.router = router;
    this.fb = fb;
    this.utils = utils;
    this.config = config;
    this.showPicker = false;
    this.dateValue = (0,date_fns__WEBPACK_IMPORTED_MODULE_3__["default"])(new Date(), 'yyyy-MM-dd');
    this.showTimePicker = false;
    this.today = Date.now();
    // customPickerOption = {
    //   buttons: [{
    //     text: 'Clear',
    //     handler: () => this.claimEnquiryForm.controls['submissionDate'].setValue(null)
    //   }]
    // }
    this.policyNumberValidations = [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.minLength(3), _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.maxLength(40)];
    this.submissionDateValidations = [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required];
    /**This method is for to get the claims based on user inputs, Anyone filed is required to call this method
     * Here we are passing this form values to ClaimsEnquiryListPage.
     */
    this.navToClaimsList = function () {
      let policyNo = this.claimEnquiryForm.controls.policyNumber.value;
      let subDate = this.claimEnquiryForm.controls.submissionDate.value;
      console.log('subDate--navtoList', subDate);
      this.router.navigate(['/claim-enquiry-list'], {
        state: {
          policyNumber: policyNo,
          submissionDate: subDate
        }
      });
      // this.navCtrl.push(ClaimsEnquiryListPage, { policyNumber: policyNo, submissionDate: subDate });
    };
    /** Form validations */
    this.claimEnquiryForm = fb.group({
      policyNumber: ['', this.policyNumberValidations],
      submissionDate: ['', this.submissionDateValidations]
    });
    /**This is for to collect client side logs */
    this.utils.analytics("claimEnquiry");
    this.config.currentPage.pageName = "ClaimEnquiryPage";
  }
  ngOnInit() {
    console.log('claimEnquiryPage!!');
  }
  ionViewWillEnter() {}
  onChangePolicyNumber(val) {
    let value = val['_value'];
    if (value.trim().length > 0) {
      this.claimEnquiryForm.controls['submissionDate'].setValidators(null);
      this.claimEnquiryForm.controls['submissionDate'].updateValueAndValidity();
    } else {
      this.claimEnquiryForm.controls['submissionDate'].setValidators(this.submissionDateValidations);
      this.claimEnquiryForm.controls['submissionDate'].updateValueAndValidity();
    }
  }
  onChangeDate() {
    let value = this.claimEnquiryForm.controls['submissionDate'].value;
    if (value && value.trim().length > 0) {
      this.claimEnquiryForm.controls['policyNumber'].setValidators(null);
      this.claimEnquiryForm.controls['policyNumber'].updateValueAndValidity();
    } else {
      this.claimEnquiryForm.controls['policyNumber'].setValidators(this.policyNumberValidations);
      this.claimEnquiryForm.controls['policyNumber'].updateValueAndValidity();
    }
  }
  dateChanged(event) {
    console.log(event);
    this.showPicker = false;
    let formattdString = (0,date_fns__WEBPACK_IMPORTED_MODULE_3__["default"])((0,date_fns__WEBPACK_IMPORTED_MODULE_5__["default"])(event), 'd MMM yyyy');
    this.formattdString = formattdString.split('T');
    console.log('this.formattdString', this.formattdString);
    this.dateValue = (0,date_fns__WEBPACK_IMPORTED_MODULE_3__["default"])(new Date(formattdString), 'yyyy-MM-dd');
    this.claimEnquiryForm.controls['submissionDate'].value = this.dateValue;
    let value = this.claimEnquiryForm.controls['submissionDate'].value;
    console.log('this.formattdString', this.formattdString);
    if (value && value.trim().length > 0) {
      this.claimEnquiryForm.controls['policyNumber'].setValidators(null);
      this.claimEnquiryForm.controls['policyNumber'].updateValueAndValidity();
    } else {
      this.claimEnquiryForm.controls['policyNumber'].setValidators(this.policyNumberValidations);
      this.claimEnquiryForm.controls['policyNumber'].updateValueAndValidity();
    }
  }
}
ClaimEnquiryPage.ɵfac = function ClaimEnquiryPage_Factory(t) {
  return new (t || ClaimEnquiryPage)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_providers_utils_utils_service__WEBPACK_IMPORTED_MODULE_0__.UtilService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_providers_utils_config__WEBPACK_IMPORTED_MODULE_1__.ConfigProvider));
};
ClaimEnquiryPage.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: ClaimEnquiryPage,
  selectors: [["app-claim-enquiry"]],
  decls: 34,
  vars: 22,
  consts: [["mode", "ios"], ["color", "primary"], ["slot", "start"], ["text", "", "icon", "chevron-back-outline", 2, "padding-left", "15px", "font-size", "0.7rem"], [1, "bold-font"], ["no-bounce", "", "padding", "", 1, "app_bg1", "text_color_base", "padding_15"], ["padding", "", 1, "white_container_border_radius"], [3, "formGroup"], [2, "font-size", "1.0rem"], ["lines", "none", 1, "border"], ["type", "text", "restrict-input", "", "restrictInput", "alphanumeric", "amaxlength", "40", "formControlName", "policyNumber", 3, "placeholder", "ionChange"], ["class", "errPosition", 4, "ngIf"], ["lines", "none", 1, "border", 3, "click"], ["slot", "end"], ["size", "cover", "presentation", "date", "min", "2000-01-01", "showDefaultButtons", "true", "formControlName", "submissionDate", 3, "value", "max", "ionChange", "ionCancel", 4, "ngIf"], [2, "margin-top", "7px"], [1, "ion-text-center"], [1, "btn_center", 3, "disabled", "click"], [1, "errPosition"], [1, "mandatory_star"], ["size", "cover", "presentation", "date", "min", "2000-01-01", "showDefaultButtons", "true", "formControlName", "submissionDate", 3, "value", "max", "ionChange", "ionCancel"], ["datetime", ""]],
  template: function ClaimEnquiryPage_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "ion-header", 0)(1, "ion-toolbar", 1)(2, "ion-buttons", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "ion-back-button", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "ion-title", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](6, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "ion-content", 5)(8, "div", 6)(9, "form", 7)(10, "ion-label", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](12, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "ion-item", 9)(14, "ion-input", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ionChange", function ClaimEnquiryPage_Template_ion_input_ionChange_14_listener($event) {
        return ctx.onChangePolicyNumber($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](15, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](16, ClaimEnquiryPage_div_16_Template, 4, 3, "div", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](17, ClaimEnquiryPage_div_17_Template, 4, 3, "div", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](18, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "ion-label", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](20);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](21, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "ion-item", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ClaimEnquiryPage_Template_ion_item_click_22_listener() {
        return ctx.showPicker = !ctx.showPicker;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "ion-label", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](24, " Submission date");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "ion-text", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](26);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](27, ClaimEnquiryPage_ion_datetime_27_Template, 3, 5, "ion-datetime", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](28, ClaimEnquiryPage_div_28_Template, 4, 3, "div", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](29, "ion-row", 15)(30, "ion-col", 16)(31, "ion-button", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ClaimEnquiryPage_Template_ion_button_click_31_listener() {
        return ctx.navToClaimsList();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](32);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](33, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](6, 12, "claim_enquiry.title"));
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx.claimEnquiryForm);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](12, 14, "claim_enquiry.policy_number"), "");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](15, 16, "claim_enquiry.policy_number"));
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.claimEnquiryForm.get("policyNumber").hasError("minlength") && ctx.claimEnquiryForm.get("policyNumber").dirty);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.claimEnquiryForm.get("policyNumber").hasError("maxlength") && ctx.claimEnquiryForm.get("policyNumber").dirty);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](21, 18, "claim_enquiry.submission_date"), "");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.formattdString);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.showPicker);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.claimEnquiryForm.get("policyNumber").hasError("required") && ctx.claimEnquiryForm.get("submissionDate").hasError("required") && (ctx.claimEnquiryForm.get("submissionDate").touched || ctx.claimEnquiryForm.get("policyNumber").touched));
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", !ctx.claimEnquiryForm.valid);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](33, 20, "claim_enquiry.btn_getClaims"));
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatusGroup, _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonBackButton, _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonButton, _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonButtons, _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonCol, _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonContent, _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonDatetime, _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonHeader, _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonInput, _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonItem, _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonLabel, _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonRow, _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonText, _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonTitle, _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonToolbar, _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.SelectValueAccessor, _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.TextValueAccessor, _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonBackButtonDelegate, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControlName, _angular_common__WEBPACK_IMPORTED_MODULE_7__.DatePipe, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__.TranslatePipe],
  styles: [".item[_ngcontent-%COMP%] {\n  padding-left: 0px;\n  background: transparent;\n}\n\n.item[_ngcontent-%COMP%]   .item-input.ng-valid.item-input-has-value[_ngcontent-%COMP%]:not(.input-has-focus):not(.item-input-has-focus)   .item-inner[_ngcontent-%COMP%], .item.item-input.ng-valid.input-has-value[_ngcontent-%COMP%]:not(.input-has-focus):not(.item-input-has-focus)   .item-inner[_ngcontent-%COMP%] {\n  border-bottom-color: none !important;\n  box-shadow: none !important;\n}\n\n.item[_ngcontent-%COMP%]   .item-datetime.ng-valid.item-datetime-has-value[_ngcontent-%COMP%]:not(.input-has-focus):not(.item-datetime-has-focus)   .item-inner[_ngcontent-%COMP%], .item.item-datetime.ng-valid.input-has-value[_ngcontent-%COMP%]:not(.input-has-focus):not(.item-datetime-has-focus)   .item-inner[_ngcontent-%COMP%] {\n  border-bottom-color: none !important;\n  box-shadow: none !important;\n}\n\n.item-inner[_ngcontent-%COMP%] {\n  padding-right: 0px !important;\n  border-bottom: none !important;\n}\n\n.ion-input[_ngcontent-%COMP%] {\n  border: 1px solid #eee;\n  padding: 3px 15px;\n  background: var(--ion-color-secondary) !important;\n  font-size: 1.4rem;\n}\n\n.ion-label[_ngcontent-%COMP%] {\n  font-size: 1.5rem !important;\n  color: var(--ion-color-secondary) !important;\n  font-weight: 400;\n  margin-bottom: 5px !important;\n}\n\np[_ngcontent-%COMP%] {\n  font-size: 1.3rem;\n}\n\n.italic_font[_ngcontent-%COMP%] {\n  font-style: italic;\n  margin: 7px 0px;\n}\n\n.datetime[_ngcontent-%COMP%] {\n  border: 1px solid #eee;\n  padding: 11px 15px;\n  background: var(--ion-color-secondary-contrast) !important;\n  font-size: 1.4rem;\n}\n\n.errPosition[_ngcontent-%COMP%] {\n  margin-top: 4px !important;\n}\n\n.padding_15[_ngcontent-%COMP%] {\n  padding: 35px !important;\n}\n\n.padding_sie_15[_ngcontent-%COMP%] {\n  padding-left: 15px !important;\n  padding-right: 15px !important;\n}\n\n.app_bg1[_ngcontent-%COMP%] {\n  --background: url(/../assets/imgs/register_bg.jpg) no-repeat center center / cover;\n}\n\nion-datetime[_ngcontent-%COMP%] {\n  border-bottom: 1px solid var(--slf-input-border);\n  outline: none;\n  padding: 8px 0;\n}\n\n.white_container_border_radius[_ngcontent-%COMP%] {\n  background-color: rgba(255, 255, 255, 0.7) !important;\n  border-radius: 15px !important;\n  margin: 15px;\n  padding: 15px;\n}\n\n.btn_center[_ngcontent-%COMP%] {\n  text-transform: capitalize;\n  --background: #002d3d !important;\n  color: white;\n  margin-top: 15px;\n  --border-radius: 10px !important;\n  min-width: 200px;\n  min-height: 45px;\n  width: 100% !important;\n  font-family: Agenda-Regular !important;\n}\n\n.text-input[_ngcontent-%COMP%]::-moz-placeholder {\n  font-size: 1rem;\n}\n\n.text-input[_ngcontent-%COMP%]:-ms-input-placeholder {\n  font-size: 1rem;\n}\n\n.text-input[_ngcontent-%COMP%]::-webkit-input-placeholder {\n  font-size: 1rem;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcGFnZXMvY2xhaW0tZW5xdWlyeS9jbGFpbS1lbnF1aXJ5LnBhZ2Uuc2NzcyIsIndlYnBhY2s6Ly8uLy4uLy4uLy4uL0FsbCUyMFByb2plY3RzL01hbGF5c2lhX0NsaWVudEFwcF9SZXZhbXAvU3VuQWNjZXNzX0lvbmljNl9SZXZhbXAvc3JjL2FwcC9wYWdlcy9jbGFpbS1lbnF1aXJ5L2NsYWltLWVucXVpcnkucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNJO0VBQ0ksaUJBQUE7RUFDQSx1QkFBQTtBQ0FSOztBREdJO0VBQ0ksb0NBQUE7RUFFQSwyQkFBQTtBQ0FSOztBREdJO0VBQ0ksb0NBQUE7RUFFQSwyQkFBQTtBQ0FSOztBRElHO0VBQ0ksNkJBQUE7RUFDQSw4QkFBQTtBQ0RQOztBRElHO0VBQ0ssc0JBQUE7RUFDQSxpQkFBQTtFQUNBLGlEQUFBO0VBQ0EsaUJBQUE7QUNEUjs7QURJRztFQUNLLDRCQUFBO0VBQ0EsNENBQUE7RUFDQSxnQkFBQTtFQUNBLDZCQUFBO0FDRFI7O0FER0c7RUFDSSxpQkFBQTtBQ0FQOztBREdHO0VBQ0ksa0JBQUE7RUFDQSxlQUFBO0FDQVA7O0FER0c7RUFDQyxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EsMERBQUE7RUFDQSxpQkFBQTtBQ0FKOztBREVJO0VBQ0ksMEJBQUE7QUNDUjs7QURFSTtFQUNJLHdCQUFBO0FDQ1I7O0FEQ007RUFDRSw2QkFBQTtFQUNBLDhCQUFBO0FDRVI7O0FEQU07RUFDRSxrRkFBQTtBQ0dSOztBRERJO0VBQ0ksZ0RBQUE7RUFDQSxhQUFBO0VBQ0EsY0FBQTtBQ0lSOztBREZJO0VBQ0kscURBQUE7RUFDQSw4QkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0FDS1I7O0FESEk7RUFDSSwwQkFBQTtFQUNBLGdDQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0NBQUE7RUFDQSxnQkFBQTtFQUdBLGdCQUFBO0VBQ0Esc0JBQUE7RUFDQSxzQ0FBQTtBQ0lSOztBREVRO0VBQ0ksZUFBQTtBQ0NaOztBREVVO0VBQ0UsZUFBQTtBQ0NaOztBREVVO0VBQ0UsZUFBQTtBQ0NaIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbiAgICAuaXRlbXtcclxuICAgICAgICBwYWRkaW5nLWxlZnQ6IDBweDtcclxuICAgICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICAgIH1cclxuXHJcbiAgICAuaXRlbSAuaXRlbS1pbnB1dC5uZy12YWxpZC5pdGVtLWlucHV0LWhhcy12YWx1ZTpub3QoLmlucHV0LWhhcy1mb2N1cyk6bm90KC5pdGVtLWlucHV0LWhhcy1mb2N1cykgLml0ZW0taW5uZXIsIC5pdGVtLml0ZW0taW5wdXQubmctdmFsaWQuaW5wdXQtaGFzLXZhbHVlOm5vdCguaW5wdXQtaGFzLWZvY3VzKTpub3QoLml0ZW0taW5wdXQtaGFzLWZvY3VzKSAuaXRlbS1pbm5lcntcclxuICAgICAgICBib3JkZXItYm90dG9tLWNvbG9yOiBub25lICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgLXdlYmtpdC1ib3gtc2hhZG93IDogbm9uZSAhaW1wb3J0YW50O1xyXG4gICAgICAgIGJveC1zaGFkb3cgOiBub25lICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgXHJcbiAgICB9XHJcbiAgICAuaXRlbSAuaXRlbS1kYXRldGltZS5uZy12YWxpZC5pdGVtLWRhdGV0aW1lLWhhcy12YWx1ZTpub3QoLmlucHV0LWhhcy1mb2N1cyk6bm90KC5pdGVtLWRhdGV0aW1lLWhhcy1mb2N1cykgLml0ZW0taW5uZXIsIC5pdGVtLml0ZW0tZGF0ZXRpbWUubmctdmFsaWQuaW5wdXQtaGFzLXZhbHVlOm5vdCguaW5wdXQtaGFzLWZvY3VzKTpub3QoLml0ZW0tZGF0ZXRpbWUtaGFzLWZvY3VzKSAuaXRlbS1pbm5lcntcclxuICAgICAgICBib3JkZXItYm90dG9tLWNvbG9yOiBub25lICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgLXdlYmtpdC1ib3gtc2hhZG93IDogbm9uZSAhaW1wb3J0YW50O1xyXG4gICAgICAgIGJveC1zaGFkb3cgOiBub25lICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgXHJcbiAgICB9IFxyXG4gICBcclxuICAgLml0ZW0taW5uZXJ7XHJcbiAgICAgICBwYWRkaW5nLXJpZ2h0OiAwcHggIWltcG9ydGFudDtcclxuICAgICAgIGJvcmRlci1ib3R0b206IG5vbmUgIWltcG9ydGFudDtcclxuICAgfVxyXG5cclxuICAgLmlvbi1pbnB1dHtcclxuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjZWVlO1xyXG4gICAgICAgIHBhZGRpbmc6IDNweCAxNXB4O1xyXG4gICAgICAgIGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1zZWNvbmRhcnkpICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgZm9udC1zaXplOiAxLjRyZW07XHJcbiAgIH1cclxuXHJcbiAgIC5pb24tbGFiZWx7XHJcbiAgICAgICAgZm9udC1zaXplOiAxLjVyZW0gIWltcG9ydGFudDtcclxuICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXNlY29uZGFyeSkgIWltcG9ydGFudDtcclxuICAgICAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDVweCAhaW1wb3J0YW50O1xyXG4gICB9XHJcbiAgIHB7XHJcbiAgICAgICBmb250LXNpemU6IDEuM3JlbTtcclxuICAgfVxyXG5cclxuICAgLml0YWxpY19mb250e1xyXG4gICAgICAgZm9udC1zdHlsZTogaXRhbGljO1xyXG4gICAgICAgbWFyZ2luOiA3cHggMHB4O1xyXG4gICB9XHJcblxyXG4gICAuZGF0ZXRpbWUge1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2VlZTtcclxuICAgIHBhZGRpbmc6IDExcHggMTVweDtcclxuICAgIGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1zZWNvbmRhcnktY29udHJhc3QpICFpbXBvcnRhbnQ7XHJcbiAgICBmb250LXNpemU6IDEuNHJlbTtcclxuICAgIH1cclxuICAgIC5lcnJQb3NpdGlvbiB7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogNHB4ICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcblxyXG4gICAgLnBhZGRpbmdfMTUge1xyXG4gICAgICAgIHBhZGRpbmc6IDM1cHggIWltcG9ydGFudDtcclxuICAgICAgfVxyXG4gICAgICAucGFkZGluZ19zaWVfMTV7XHJcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAxNXB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgcGFkZGluZy1yaWdodDogMTVweCAhaW1wb3J0YW50O1xyXG4gICAgICB9XHJcbiAgICAgIC5hcHBfYmcxIHtcclxuICAgICAgICAtLWJhY2tncm91bmQ6IHVybCgvLi4vYXNzZXRzL2ltZ3MvcmVnaXN0ZXJfYmcuanBnKSBuby1yZXBlYXQgY2VudGVyIGNlbnRlciAvIGNvdmVyO1xyXG4gICAgfVxyXG4gICAgaW9uLWRhdGV0aW1lIHtcclxuICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0tc2xmLWlucHV0LWJvcmRlcik7XHJcbiAgICAgICAgb3V0bGluZTogbm9uZTtcclxuICAgICAgICBwYWRkaW5nOiA4cHggMDtcclxuICAgIH1cclxuICAgIC53aGl0ZV9jb250YWluZXJfYm9yZGVyX3JhZGl1cyB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjcpICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTVweCAhaW1wb3J0YW50O1xyXG4gICAgICAgIG1hcmdpbjogMTVweDtcclxuICAgICAgICBwYWRkaW5nOiAxNXB4O1xyXG4gICAgfVxyXG4gICAgLmJ0bl9jZW50ZXIge1xyXG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xyXG4gICAgICAgIC0tYmFja2dyb3VuZDogIzAwMmQzZCAhaW1wb3J0YW50O1xyXG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICBtYXJnaW4tdG9wOiAxNXB4O1xyXG4gICAgICAgIC0tYm9yZGVyLXJhZGl1czogMTBweCAhaW1wb3J0YW50O1xyXG4gICAgICAgIG1pbi13aWR0aDogMjAwcHg7XHJcbiAgICAgICAgLy8gbWFyZ2luLWxlZnQ6IC0zMXB4O1xyXG4gICAgICAgIC8vZm9udC1zaXplOiAxLjdyZW07XHJcbiAgICAgICAgbWluLWhlaWdodDogNDVweDtcclxuICAgICAgICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiBBZ2VuZGEtUmVndWxhciAhaW1wb3J0YW50O1xyXG4gICAgICB9XHJcbiAgICAgIGlvbi1pdGVtIHtcclxuICAgICAgICAvLyBoZWlnaHQ6IDM1cHggIWltcG9ydGFudDtcclxuICAgICAgICBcclxuICAgICAgICB9XHJcbiAgICAgICAgLnRleHQtaW5wdXQ6Oi1tb3otcGxhY2Vob2xkZXIge1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDEuMHJlbTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIFxyXG4gICAgICAgICAgLnRleHQtaW5wdXQ6LW1zLWlucHV0LXBsYWNlaG9sZGVyIHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxLjByZW07XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBcclxuICAgICAgICAgIC50ZXh0LWlucHV0Ojotd2Via2l0LWlucHV0LXBsYWNlaG9sZGVyIHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxLjByZW07XHJcbiAgICAgICAgICB9IiwiLml0ZW0ge1xuICBwYWRkaW5nLWxlZnQ6IDBweDtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG59XG5cbi5pdGVtIC5pdGVtLWlucHV0Lm5nLXZhbGlkLml0ZW0taW5wdXQtaGFzLXZhbHVlOm5vdCguaW5wdXQtaGFzLWZvY3VzKTpub3QoLml0ZW0taW5wdXQtaGFzLWZvY3VzKSAuaXRlbS1pbm5lciwgLml0ZW0uaXRlbS1pbnB1dC5uZy12YWxpZC5pbnB1dC1oYXMtdmFsdWU6bm90KC5pbnB1dC1oYXMtZm9jdXMpOm5vdCguaXRlbS1pbnB1dC1oYXMtZm9jdXMpIC5pdGVtLWlubmVyIHtcbiAgYm9yZGVyLWJvdHRvbS1jb2xvcjogbm9uZSAhaW1wb3J0YW50O1xuICAtd2Via2l0LWJveC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudDtcbiAgYm94LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50O1xufVxuXG4uaXRlbSAuaXRlbS1kYXRldGltZS5uZy12YWxpZC5pdGVtLWRhdGV0aW1lLWhhcy12YWx1ZTpub3QoLmlucHV0LWhhcy1mb2N1cyk6bm90KC5pdGVtLWRhdGV0aW1lLWhhcy1mb2N1cykgLml0ZW0taW5uZXIsIC5pdGVtLml0ZW0tZGF0ZXRpbWUubmctdmFsaWQuaW5wdXQtaGFzLXZhbHVlOm5vdCguaW5wdXQtaGFzLWZvY3VzKTpub3QoLml0ZW0tZGF0ZXRpbWUtaGFzLWZvY3VzKSAuaXRlbS1pbm5lciB7XG4gIGJvcmRlci1ib3R0b20tY29sb3I6IG5vbmUgIWltcG9ydGFudDtcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7XG4gIGJveC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudDtcbn1cblxuLml0ZW0taW5uZXIge1xuICBwYWRkaW5nLXJpZ2h0OiAwcHggIWltcG9ydGFudDtcbiAgYm9yZGVyLWJvdHRvbTogbm9uZSAhaW1wb3J0YW50O1xufVxuXG4uaW9uLWlucHV0IHtcbiAgYm9yZGVyOiAxcHggc29saWQgI2VlZTtcbiAgcGFkZGluZzogM3B4IDE1cHg7XG4gIGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1zZWNvbmRhcnkpICFpbXBvcnRhbnQ7XG4gIGZvbnQtc2l6ZTogMS40cmVtO1xufVxuXG4uaW9uLWxhYmVsIHtcbiAgZm9udC1zaXplOiAxLjVyZW0gIWltcG9ydGFudDtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1zZWNvbmRhcnkpICFpbXBvcnRhbnQ7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIG1hcmdpbi1ib3R0b206IDVweCAhaW1wb3J0YW50O1xufVxuXG5wIHtcbiAgZm9udC1zaXplOiAxLjNyZW07XG59XG5cbi5pdGFsaWNfZm9udCB7XG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcbiAgbWFyZ2luOiA3cHggMHB4O1xufVxuXG4uZGF0ZXRpbWUge1xuICBib3JkZXI6IDFweCBzb2xpZCAjZWVlO1xuICBwYWRkaW5nOiAxMXB4IDE1cHg7XG4gIGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1zZWNvbmRhcnktY29udHJhc3QpICFpbXBvcnRhbnQ7XG4gIGZvbnQtc2l6ZTogMS40cmVtO1xufVxuXG4uZXJyUG9zaXRpb24ge1xuICBtYXJnaW4tdG9wOiA0cHggIWltcG9ydGFudDtcbn1cblxuLnBhZGRpbmdfMTUge1xuICBwYWRkaW5nOiAzNXB4ICFpbXBvcnRhbnQ7XG59XG5cbi5wYWRkaW5nX3NpZV8xNSB7XG4gIHBhZGRpbmctbGVmdDogMTVweCAhaW1wb3J0YW50O1xuICBwYWRkaW5nLXJpZ2h0OiAxNXB4ICFpbXBvcnRhbnQ7XG59XG5cbi5hcHBfYmcxIHtcbiAgLS1iYWNrZ3JvdW5kOiB1cmwoLy4uL2Fzc2V0cy9pbWdzL3JlZ2lzdGVyX2JnLmpwZykgbm8tcmVwZWF0IGNlbnRlciBjZW50ZXIgLyBjb3Zlcjtcbn1cblxuaW9uLWRhdGV0aW1lIHtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLXNsZi1pbnB1dC1ib3JkZXIpO1xuICBvdXRsaW5lOiBub25lO1xuICBwYWRkaW5nOiA4cHggMDtcbn1cblxuLndoaXRlX2NvbnRhaW5lcl9ib3JkZXJfcmFkaXVzIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjcpICFpbXBvcnRhbnQ7XG4gIGJvcmRlci1yYWRpdXM6IDE1cHggIWltcG9ydGFudDtcbiAgbWFyZ2luOiAxNXB4O1xuICBwYWRkaW5nOiAxNXB4O1xufVxuXG4uYnRuX2NlbnRlciB7XG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xuICAtLWJhY2tncm91bmQ6ICMwMDJkM2QgIWltcG9ydGFudDtcbiAgY29sb3I6IHdoaXRlO1xuICBtYXJnaW4tdG9wOiAxNXB4O1xuICAtLWJvcmRlci1yYWRpdXM6IDEwcHggIWltcG9ydGFudDtcbiAgbWluLXdpZHRoOiAyMDBweDtcbiAgbWluLWhlaWdodDogNDVweDtcbiAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcbiAgZm9udC1mYW1pbHk6IEFnZW5kYS1SZWd1bGFyICFpbXBvcnRhbnQ7XG59XG5cbi50ZXh0LWlucHV0OjotbW96LXBsYWNlaG9sZGVyIHtcbiAgZm9udC1zaXplOiAxcmVtO1xufVxuXG4udGV4dC1pbnB1dDotbXMtaW5wdXQtcGxhY2Vob2xkZXIge1xuICBmb250LXNpemU6IDFyZW07XG59XG5cbi50ZXh0LWlucHV0Ojotd2Via2l0LWlucHV0LXBsYWNlaG9sZGVyIHtcbiAgZm9udC1zaXplOiAxcmVtO1xufSJdLCJzb3VyY2VSb290IjoiIn0= */"]
});

/***/ })

}]);
//# sourceMappingURL=src_app_pages_claim-enquiry_claim-enquiry_module_ts.js.map