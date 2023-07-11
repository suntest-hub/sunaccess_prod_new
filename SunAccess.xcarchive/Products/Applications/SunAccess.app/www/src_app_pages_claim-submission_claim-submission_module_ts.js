"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_claim-submission_claim-submission_module_ts"],{

/***/ 7928:
/*!***************************************************************************!*\
  !*** ./src/app/pages/claim-submission/claim-submission-routing.module.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ClaimSubmissionPageRoutingModule": () => (/* binding */ ClaimSubmissionPageRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _claim_submission_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./claim-submission.page */ 59105);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);




const routes = [{
  path: '',
  component: _claim_submission_page__WEBPACK_IMPORTED_MODULE_0__.ClaimSubmissionPage
}];
class ClaimSubmissionPageRoutingModule {}
ClaimSubmissionPageRoutingModule.ɵfac = function ClaimSubmissionPageRoutingModule_Factory(t) {
  return new (t || ClaimSubmissionPageRoutingModule)();
};
ClaimSubmissionPageRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
  type: ClaimSubmissionPageRoutingModule
});
ClaimSubmissionPageRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](ClaimSubmissionPageRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
})();

/***/ }),

/***/ 38445:
/*!*******************************************************************!*\
  !*** ./src/app/pages/claim-submission/claim-submission.module.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ClaimSubmissionPageModule": () => (/* binding */ ClaimSubmissionPageModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _claim_submission_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./claim-submission-routing.module */ 7928);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _claim_submission_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./claim-submission.page */ 59105);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ 38699);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);







class ClaimSubmissionPageModule {}
ClaimSubmissionPageModule.ɵfac = function ClaimSubmissionPageModule_Factory(t) {
  return new (t || ClaimSubmissionPageModule)();
};
ClaimSubmissionPageModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
  type: ClaimSubmissionPageModule
});
ClaimSubmissionPageModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule, _claim_submission_routing_module__WEBPACK_IMPORTED_MODULE_0__.ClaimSubmissionPageRoutingModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.ReactiveFormsModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__.TranslateModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](ClaimSubmissionPageModule, {
    declarations: [_claim_submission_page__WEBPACK_IMPORTED_MODULE_1__.ClaimSubmissionPage],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule, _claim_submission_routing_module__WEBPACK_IMPORTED_MODULE_0__.ClaimSubmissionPageRoutingModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.ReactiveFormsModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__.TranslateModule]
  });
})();

/***/ }),

/***/ 59105:
/*!*****************************************************************!*\
  !*** ./src/app/pages/claim-submission/claim-submission.page.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ClaimSubmissionPage": () => (/* binding */ ClaimSubmissionPage)
/* harmony export */ });
/* harmony import */ var src_providers_utils_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/providers/utils/config */ 43485);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var http_status_codes__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! http-status-codes */ 92788);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! date-fns */ 86712);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! date-fns */ 86527);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/platform-browser */ 34497);
/* harmony import */ var src_providers_utils_utils_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/providers/utils/utils.service */ 30423);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _awesome_cordova_plugins_camera_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @awesome-cordova-plugins/camera/ngx */ 82543);
/* harmony import */ var _ionic_native_base64_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/base64/ngx */ 89604);
/* harmony import */ var _claimSubmissionservice__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./claimSubmissionservice */ 28391);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @ngx-translate/core */ 38699);
/* harmony import */ var _ionic_native_file_path_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/file-path/ngx */ 74375);
/* harmony import */ var _ionic_native_file_chooser_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/file-chooser/ngx */ 86786);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _awesome_cordova_plugins_document_picker_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @awesome-cordova-plugins/document-picker/ngx */ 46992);
/* harmony import */ var _awesome_cordova_plugins_device_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @awesome-cordova-plugins/device/ngx */ 74701);
/* harmony import */ var _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic-native/file/ngx */ 12358);
/* harmony import */ var _awesome_cordova_plugins_chooser_ngx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @awesome-cordova-plugins/chooser/ngx */ 82576);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/common */ 94666);






















const _c0 = ["canvas"];
const _c1 = ["captchInput"];
function ClaimSubmissionPage_form_14_ion_select_option_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "ion-select-option", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const plan_r54 = ctx.$implicit;
    const i_r55 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("value", plan_r54)("selected", i_r55 === 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](plan_r54);
  }
}
function ClaimSubmissionPage_form_14_div_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 70)(1, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](3, 1, "clms_submison_house.err_policyNoReq"));
  }
}
function ClaimSubmissionPage_form_14_div_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 70)(1, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](3, 1, "clms_submison_house.policyNoLength_req"));
  }
}
function ClaimSubmissionPage_form_14_div_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 70)(1, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](3, 1, "clms_submison_house.policyNoPattern_req"));
  }
}
function ClaimSubmissionPage_form_14_div_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 70)(1, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](3, 1, "clms_submison_house.policyNoMaxLength_req"));
  }
}
function ClaimSubmissionPage_form_14_div_27_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 70)(1, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](3, 1, "clms_submison_house.err_lifeAssuredReq"));
  }
}
function ClaimSubmissionPage_form_14_div_28_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 70)(1, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](3, 1, "clms_submison_house.lifeAssuredLength_req"));
  }
}
function ClaimSubmissionPage_form_14_div_29_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 70)(1, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](3, 1, "clms_submison_house.lifeAssuredPattern_req"));
  }
}
function ClaimSubmissionPage_form_14_div_30_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 70)(1, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](3, 1, "clms_submison_house.lifeAssuredMaxLength_req"));
  }
}
function ClaimSubmissionPage_form_14_div_39_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 70)(1, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](3, 1, "clms_submison_house.err_NRICNoReq"));
  }
}
function ClaimSubmissionPage_form_14_div_40_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 70)(1, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](3, 1, "clms_submison_house.err_NRICNoLength_req"));
  }
}
function ClaimSubmissionPage_form_14_div_41_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 70)(1, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](3, 1, "clms_submison_house.err_NRICNoPattern_req"));
  }
}
function ClaimSubmissionPage_form_14_div_42_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 70)(1, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](3, 1, "clms_submison_house.err_NRICNoMaxLength_req"));
  }
}
function ClaimSubmissionPage_form_14_div_51_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 70)(1, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](3, 1, "clms_submison_house.err_addressReq"));
  }
}
function ClaimSubmissionPage_form_14_div_52_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 70)(1, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](3, 1, "clms_submison_house.err_addressLength_req"));
  }
}
function ClaimSubmissionPage_form_14_div_53_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 70)(1, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](3, 1, "clms_submison_house.err_addressMaxLength_req"));
  }
}
function ClaimSubmissionPage_form_14_div_62_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 70)(1, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](3, 1, "clms_submison_house.err_postalCodeReq"));
  }
}
function ClaimSubmissionPage_form_14_div_63_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 70)(1, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](3, 1, "clms_submison_house.err_postalCodeLength_req"));
  }
}
function ClaimSubmissionPage_form_14_div_64_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 70)(1, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](3, 1, "clms_submison_house.err_postalCodePattern_req"));
  }
}
function ClaimSubmissionPage_form_14_div_65_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 70)(1, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](3, 1, "clms_submison_house.err_postalCodeMaxLength_req"));
  }
}
function ClaimSubmissionPage_form_14_ion_select_option_73_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "ion-select-option", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const state_r56 = ctx.$implicit;
    const i_r57 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("value", state_r56)("selected", i_r57 === 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](state_r56);
  }
}
function ClaimSubmissionPage_form_14_div_88_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 70)(1, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](3, 1, "clms_submison_house.err_mobileNoReq"));
  }
}
function ClaimSubmissionPage_form_14_div_89_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 70)(1, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](3, 1, "clms_submison_house.err_invalidMno"));
  }
}
function ClaimSubmissionPage_form_14_div_90_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 70)(1, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](3, 1, "clms_submison_house.err_mobileNoLength_req"));
  }
}
function ClaimSubmissionPage_form_14_div_91_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 70)(1, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](3, 1, "clms_submison_house.err_mobileNoLength_req"));
  }
}
function ClaimSubmissionPage_form_14_div_92_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 70)(1, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](3, 1, "clms_submison_house.err_mobileNoLength_req"));
  }
}
function ClaimSubmissionPage_form_14_div_101_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 70)(1, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](3, 1, "clms_submison_house.err_emailReq"));
  }
}
function ClaimSubmissionPage_form_14_div_102_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 70)(1, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](3, 1, "clms_submison_house.err_emailValid"));
  }
}
function ClaimSubmissionPage_form_14_ion_datetime_112_Template(rf, ctx) {
  if (rf & 1) {
    const _r60 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "ion-datetime", 71, 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("ionChange", function ClaimSubmissionPage_form_14_ion_datetime_112_Template_ion_datetime_ionChange_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r60);
      const _r58 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵreference"](1);
      const ctx_r59 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r59.dateChanged(_r58.value));
    })("ionCancel", function ClaimSubmissionPage_form_14_ion_datetime_112_Template_ion_datetime_ionCancel_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r60);
      const ctx_r61 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r61.showPicker = false);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](2, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpropertyInterpolate"]("min", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind2"](2, 3, ctx_r35.today, "yyyy-MM-dd"));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](3, 6, "clms_submison_house.plcHldr_dateOfLoss"));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("value", ctx_r35.dateValue);
  }
}
function ClaimSubmissionPage_form_14_ion_select_option_118_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "ion-select-option", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const type_r62 = ctx.$implicit;
    const i_r63 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("value", type_r62)("selected", i_r63 === 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](type_r62);
  }
}
function ClaimSubmissionPage_form_14_div_127_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 70)(1, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](3, 1, "clms_submison_house.err_locationOfRiskReq"));
  }
}
function ClaimSubmissionPage_form_14_ion_select_option_133_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "ion-select-option", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const value_r64 = ctx.$implicit;
    const i_r65 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("value", value_r64)("selected", i_r65 === 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](value_r64);
  }
}
function ClaimSubmissionPage_form_14_div_140_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 70)(1, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](3, 1, "clms_submison_house.err_ClmAmountPattern_req"));
  }
}
function ClaimSubmissionPage_form_14_div_141_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 70)(1, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](3, 1, "clms_submison_house.err_ClmAmountMax_req"));
  }
}
function ClaimSubmissionPage_form_14_ion_select_option_147_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "ion-select-option", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const bank_r66 = ctx.$implicit;
    const i_r67 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("value", bank_r66)("selected", i_r67 === 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](bank_r66);
  }
}
function ClaimSubmissionPage_form_14_div_154_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 70)(1, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](3, 1, "clms_submison_house.err_ClmAccountNamePattern_req"));
  }
}
function ClaimSubmissionPage_form_14_div_155_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 70)(1, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](3, 1, "clms_submison_house.err_ClmAccountNamePattern_req"));
  }
}
function ClaimSubmissionPage_form_14_div_162_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 70)(1, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](3, 1, "clms_submison_house.err_ClmAccountNoPattern_req"));
  }
}
function ClaimSubmissionPage_form_14_div_163_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 70)(1, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](3, 1, "clms_submison_house.err_ClmAccountNoPattern_req"));
  }
}
function ClaimSubmissionPage_form_14_div_170_Template(rf, ctx) {
  if (rf & 1) {
    const _r71 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 73)(1, "ion-row", 74)(2, "ion-col", 75)(3, "ion-item", 13)(4, "ion-input", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function ClaimSubmissionPage_form_14_div_170_Template_ion_input_click_4_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r71);
      const i_r69 = restoredCtx.index;
      const ctx_r70 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r70.chooseCameraOptions(i_r69, "houseOwnerClaimForm"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](6, "ion-icon", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function ClaimSubmissionPage_form_14_div_170_Template_ion_icon_click_6_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r71);
      const i_r69 = restoredCtx.index;
      const ctx_r72 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r72.chooseCameraOptions(i_r69, "houseOwnerClaimForm"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](7, "ion-icon", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function ClaimSubmissionPage_form_14_div_170_Template_ion_icon_click_7_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r71);
      const i_r69 = restoredCtx.index;
      const ctx_r73 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r73.removeAttachmentField(i_r69, "houseOwnerClaimForm"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()()()();
  }
  if (rf & 2) {
    const i_r69 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("formGroupName", i_r69);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](5, 2, "clms_submison_house.plcHldr_uploadDoc"));
  }
}
function ClaimSubmissionPage_form_14_div_171_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 79)(1, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](3, 1, "clms_submison_house.err_uploadDocReq"));
  }
}
function ClaimSubmissionPage_form_14_ion_button_174_Template(rf, ctx) {
  if (rf & 1) {
    const _r75 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "ion-button", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function ClaimSubmissionPage_form_14_ion_button_174_Template_ion_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r75);
      const ctx_r74 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r74.addNewAttachmentField("houseOwnerClaimForm"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1, " Add More");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r48 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("disabled", ctx_r48.houseOwnerClaimForm.controls.attachments.controls[ctx_r48.houseOwnerClaimForm.controls.attachments.length - 1].controls.filename.hasError("required"));
  }
}
function ClaimSubmissionPage_form_14_div_205_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div")(1, "span", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](3, 1, "clms_submison_house.claim_disclaimer_req"));
  }
}
function ClaimSubmissionPage_form_14_p_212_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "p", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](2, 1, "whyweneedAgentDetailinClaim"));
  }
}
function ClaimSubmissionPage_form_14_div_249_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 70)(1, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](3, 1, "captcha_req"));
  }
}
const _c2 = function () {
  return {
    "cssClass": "mycomponent-wider-popover"
  };
};
function ClaimSubmissionPage_form_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r77 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "form", 11)(1, "p", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](4, "div", 13)(5, "ion-select", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](6, ClaimSubmissionPage_form_14_ion_select_option_6_Template, 2, 3, "ion-select-option", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](7, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](9, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](10, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](11, " *");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](12, "ion-item", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](13, "ion-input", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](14, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](15, ClaimSubmissionPage_form_14_div_15_Template, 4, 3, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](16, ClaimSubmissionPage_form_14_div_16_Template, 4, 3, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](17, ClaimSubmissionPage_form_14_div_17_Template, 4, 3, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](18, ClaimSubmissionPage_form_14_div_18_Template, 4, 3, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](19, "p", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](21, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](22, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](23, " *");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](24, "ion-item", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](25, "ion-input", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](26, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](27, ClaimSubmissionPage_form_14_div_27_Template, 4, 3, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](28, ClaimSubmissionPage_form_14_div_28_Template, 4, 3, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](29, ClaimSubmissionPage_form_14_div_29_Template, 4, 3, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](30, ClaimSubmissionPage_form_14_div_30_Template, 4, 3, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](31, "p", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](32);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](33, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](34, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](35, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](36, "ion-item", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](37, "ion-input", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](38, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](39, ClaimSubmissionPage_form_14_div_39_Template, 4, 3, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](40, ClaimSubmissionPage_form_14_div_40_Template, 4, 3, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](41, ClaimSubmissionPage_form_14_div_41_Template, 4, 3, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](42, ClaimSubmissionPage_form_14_div_42_Template, 4, 3, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](43, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](44);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](45, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](46, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](47, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](48, "ion-item", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](49, "ion-input", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](50, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](51, ClaimSubmissionPage_form_14_div_51_Template, 4, 3, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](52, ClaimSubmissionPage_form_14_div_52_Template, 4, 3, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](53, ClaimSubmissionPage_form_14_div_53_Template, 4, 3, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](54, "p", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](55);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](56, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](57, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](58, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](59, "ion-item", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](60, "ion-input", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](61, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](62, ClaimSubmissionPage_form_14_div_62_Template, 4, 3, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](63, ClaimSubmissionPage_form_14_div_63_Template, 4, 3, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](64, ClaimSubmissionPage_form_14_div_64_Template, 4, 3, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](65, ClaimSubmissionPage_form_14_div_65_Template, 4, 3, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](66, "p", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](67);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](68, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](69, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](70, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](71, "div", 13)(72, "ion-select", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](73, ClaimSubmissionPage_form_14_ion_select_option_73_Template, 2, 3, "ion-select-option", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](74, "p", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](75);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](76, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](77, "ion-item", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](78, "ion-input", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](79, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](80, "p", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](81);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](82, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](83, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](84, " *");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](85, "ion-item", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](86, "ion-input", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](87, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](88, ClaimSubmissionPage_form_14_div_88_Template, 4, 3, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](89, ClaimSubmissionPage_form_14_div_89_Template, 4, 3, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](90, ClaimSubmissionPage_form_14_div_90_Template, 4, 3, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](91, ClaimSubmissionPage_form_14_div_91_Template, 4, 3, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](92, ClaimSubmissionPage_form_14_div_92_Template, 4, 3, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](93, "p", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](94);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](95, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](96, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](97, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](98, "ion-item", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](99, "ion-input", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](100, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](101, ClaimSubmissionPage_form_14_div_101_Template, 4, 3, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](102, ClaimSubmissionPage_form_14_div_102_Template, 4, 3, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](103, "p", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](104);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](105, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](106, "ion-item", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function ClaimSubmissionPage_form_14_Template_ion_item_click_106_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r77);
      const ctx_r76 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r76.showPicker = !ctx_r76.showPicker);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](107, "ion-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](108);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](109, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](110, "ion-text", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](111);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](112, ClaimSubmissionPage_form_14_ion_datetime_112_Template, 4, 8, "ion-datetime", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](113, "p", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](114);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](115, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](116, "div", 13)(117, "ion-select", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](118, ClaimSubmissionPage_form_14_ion_select_option_118_Template, 2, 3, "ion-select-option", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](119, "p", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](120);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](121, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](122, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](123, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](124, "ion-item", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](125, "ion-input", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](126, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](127, ClaimSubmissionPage_form_14_div_127_Template, 4, 3, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](128, "p", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](129);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](130, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](131, "div", 13)(132, "ion-select", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](133, ClaimSubmissionPage_form_14_ion_select_option_133_Template, 2, 3, "ion-select-option", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](134, "p", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](135);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](136, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](137, "ion-item", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](138, "ion-input", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](139, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](140, ClaimSubmissionPage_form_14_div_140_Template, 4, 3, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](141, ClaimSubmissionPage_form_14_div_141_Template, 4, 3, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](142, "p", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](143);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](144, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](145, "div", 13)(146, "ion-select", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](147, ClaimSubmissionPage_form_14_ion_select_option_147_Template, 2, 3, "ion-select-option", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](148, "p", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](149);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](150, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](151, "ion-item", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](152, "ion-input", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](153, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](154, ClaimSubmissionPage_form_14_div_154_Template, 4, 3, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](155, ClaimSubmissionPage_form_14_div_155_Template, 4, 3, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](156, "p", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](157);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](158, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](159, "ion-item", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](160, "ion-input", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](161, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](162, ClaimSubmissionPage_form_14_div_162_Template, 4, 3, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](163, ClaimSubmissionPage_form_14_div_163_Template, 4, 3, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](164, "div", 38)(165, "p", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](166);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](167, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](168, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](169, " *");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](170, ClaimSubmissionPage_form_14_div_170_Template, 8, 4, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](171, ClaimSubmissionPage_form_14_div_171_Template, 4, 3, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](172, "ion-row")(173, "ion-col", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](174, ClaimSubmissionPage_form_14_ion_button_174_Template, 2, 1, "ion-button", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](175, "p", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](176);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](177, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](178, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](179, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](180, "ion-item", 43)(181, "div")(182, "a", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](183);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](184, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](185, "p", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](186);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](187, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](188, "a", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](189);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](190, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](191, "p", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](192);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](193, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](194, "a", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](195);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](196, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](197, "p", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](198);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](199, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](200, "ion-row", 46)(201, "ion-checkbox", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("ionChange", function ClaimSubmissionPage_form_14_Template_ion_checkbox_ionChange_201_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r77);
      const ctx_r78 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r78.checkboxChange($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](202, "span", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](203);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](204, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](205, ClaimSubmissionPage_form_14_div_205_Template, 4, 3, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](206, "p", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](207);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](208, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](209, "ion-item", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](210, "ion-input", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](211, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](212, ClaimSubmissionPage_form_14_p_212_Template, 3, 3, "p", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](213, "p", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](214);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](215, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](216, "ion-item", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](217, "ion-input", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](218, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](219, "p", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](220);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](221, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](222, "ion-item", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](223, "ion-input", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](224, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](225, "p", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](226);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](227, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](228, "ion-item", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](229, "ion-input", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](230, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](231, "p", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](232);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](233, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](234, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](235, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](236, "ion-row")(237, "ion-item", 56)(238, "ion-col", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](239, "canvas", 58, 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](241, "ion-col", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](242, "ion-col", 61)(243, "div", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function ClaimSubmissionPage_form_14_Template_div_click_243_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r77);
      const ctx_r79 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r79.refreshCaptcha(ctx_r79.houseOwnerClaimForm));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](244, "i", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](245, "ion-item", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](246, "ion-input", 64, 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](248, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](249, ClaimSubmissionPage_form_14_div_249_Template, 4, 3, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](250, "p", 66)(251, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](252, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](253);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](254, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](255, "ion-row")(256, "ion-col", 67)(257, "ion-button", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function ClaimSubmissionPage_form_14_Template_ion_button_click_257_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r77);
      const ctx_r80 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r80.submitHouseOwnerClaim(ctx_r80.houseOwnerClaimForm));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](258);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](259, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("formGroup", ctx_r0.houseOwnerClaimForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](3, 106, "clms_submison_house.planType"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("interfaceOptions", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpureFunction0"](210, _c2));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngForOf", ctx_r0.typeOfPlans1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](9, 108, "clms_submison_house.policyNo"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](14, 110, "clms_submison_house.policyNo"));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r0.houseOwnerClaimForm.get("contract_no").hasError("required") && ctx_r0.houseOwnerClaimForm.get("contract_no").touched);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r0.houseOwnerClaimForm.get("contract_no").hasError("minlength") && ctx_r0.houseOwnerClaimForm.get("contract_no").touched);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r0.houseOwnerClaimForm.get("contract_no").hasError("pattern") && ctx_r0.houseOwnerClaimForm.get("contract_no").touched && !ctx_r0.houseOwnerClaimForm.get("contract_no").hasError("minlength"));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r0.houseOwnerClaimForm.get("contract_no").hasError("maxlength") && ctx_r0.houseOwnerClaimForm.get("contract_no").touched && !ctx_r0.houseOwnerClaimForm.get("contract_no").hasError("pattern"));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](21, 112, "clms_submison_house.lifeAssured"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](26, 114, "clms_submison_house.lifeAssured"));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r0.houseOwnerClaimForm.get("insuarance_pername_name").hasError("required") && ctx_r0.houseOwnerClaimForm.get("insuarance_pername_name").touched);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r0.houseOwnerClaimForm.get("insuarance_pername_name").hasError("minlength") && ctx_r0.houseOwnerClaimForm.get("insuarance_pername_name").touched);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r0.houseOwnerClaimForm.get("insuarance_pername_name").hasError("pattern") && ctx_r0.houseOwnerClaimForm.get("insuarance_pername_name").touched && !ctx_r0.houseOwnerClaimForm.get("insuarance_pername_name").hasError("minlength"));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r0.houseOwnerClaimForm.get("insuarance_pername_name").hasError("maxlength") && ctx_r0.houseOwnerClaimForm.get("insuarance_pername_name").touched && !ctx_r0.houseOwnerClaimForm.get("insuarance_pername_name").hasError("pattern"));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](33, 116, "clms_submison_house.NRICNo"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](38, 118, "clms_submison_house.NRICNo"));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r0.houseOwnerClaimForm.get("nric_no").hasError("required") && ctx_r0.houseOwnerClaimForm.get("nric_no").touched);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r0.houseOwnerClaimForm.get("nric_no").hasError("minlength") && ctx_r0.houseOwnerClaimForm.get("nric_no").touched);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r0.houseOwnerClaimForm.get("nric_no").hasError("pattern") && ctx_r0.houseOwnerClaimForm.get("nric_no").touched && !ctx_r0.houseOwnerClaimForm.get("nric_no").hasError("minlength"));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r0.houseOwnerClaimForm.get("nric_no").hasError("maxlength") && ctx_r0.houseOwnerClaimForm.get("nric_no").touched && !ctx_r0.houseOwnerClaimForm.get("nric_no").hasError("pattern"));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](45, 120, "clms_submison_house.addess"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](50, 122, "clms_submison_house.addess"));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r0.houseOwnerClaimForm.get("address").hasError("required") && ctx_r0.houseOwnerClaimForm.get("address").touched);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r0.houseOwnerClaimForm.get("address").hasError("minlength") && ctx_r0.houseOwnerClaimForm.get("address").touched);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r0.houseOwnerClaimForm.get("address").hasError("maxlength") && ctx_r0.houseOwnerClaimForm.get("address").touched);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](56, 124, "clms_submison_house.postalCode"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](61, 126, "clms_submison_house.postalCode"));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r0.houseOwnerClaimForm.get("postcode").hasError("required") && ctx_r0.houseOwnerClaimForm.get("postcode").touched);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r0.houseOwnerClaimForm.get("postcode").hasError("minlength") && ctx_r0.houseOwnerClaimForm.get("postcode").touched);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r0.houseOwnerClaimForm.get("postcode").hasError("pattern") && ctx_r0.houseOwnerClaimForm.get("postcode").touched && !ctx_r0.houseOwnerClaimForm.get("postcode").hasError("minlength"));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r0.houseOwnerClaimForm.get("postcode").hasError("maxlength") && ctx_r0.houseOwnerClaimForm.get("postcode").touched && !ctx_r0.houseOwnerClaimForm.get("postcode").hasError("pattern"));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](68, 128, "clms_submison_house.state"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("interfaceOptions", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpureFunction0"](211, _c2));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngForOf", ctx_r0.claimantsStates);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](76, 130, "clms_submison_house.telephoneNo"));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](79, 132, "clms_submison_house.telephoneNo"));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](82, 134, "clms_submison_house.mobileNo"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](87, 136, "clms_submison_house.mobileNo"));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r0.houseOwnerClaimForm.get("mobile").hasError("required") && ctx_r0.houseOwnerClaimForm.get("mobile").touched);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r0.houseOwnerClaimForm.get("mobile").hasError("validateNonZeroVal"));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r0.houseOwnerClaimForm.get("mobile").hasError("minlength"));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r0.houseOwnerClaimForm.get("mobile").hasError("pattern") && !ctx_r0.houseOwnerClaimForm.get("mobile").hasError("minlength"));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r0.houseOwnerClaimForm.get("mobile").hasError("maxlength") && !ctx_r0.houseOwnerClaimForm.get("mobile").hasError("pattern"));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](95, 138, "clms_submison_house.email"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](100, 140, "clms_submison_house.email"));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r0.houseOwnerClaimForm.get("email").hasError("required") && ctx_r0.houseOwnerClaimForm.get("email").touched);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", !ctx_r0.houseOwnerClaimForm.get("email").hasError("required") && ctx_r0.houseOwnerClaimForm.get("email").hasError("pattern"));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](105, 142, "clms_submison_house.dateOfLoss"));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](109, 144, "clms_submison_illDeathClm.deathDate"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](ctx_r0.formattdString);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r0.showPicker);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](115, 146, "clms_submison_house.natureOfLoss"));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("interfaceOptions", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpureFunction0"](212, _c2));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngForOf", ctx_r0.typesOfLoss);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](121, 148, "clms_submison_house.locationOfRisk"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](126, 150, "clms_submison_house.locationOfRisk"));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r0.houseOwnerClaimForm.get("location_at_risk").hasError("required") && ctx_r0.houseOwnerClaimForm.get("location_at_risk").touched);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](130, 152, "clms_submison_house.otherClmInsurance"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("interfaceOptions", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpureFunction0"](213, _c2));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngForOf", ctx_r0.radioValues);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](136, 154, "clms_submison_house.estClmAmt"));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](139, 156, "clms_submison_house.estClmAmt"));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r0.houseOwnerClaimForm.get("estimate_claim_amount").hasError("pattern"));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r0.houseOwnerClaimForm.get("estimate_claim_amount").hasError("maxlength") && !ctx_r0.houseOwnerClaimForm.get("estimate_claim_amount").hasError("pattern"));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](144, 158, "clms_submison_house.bankName"));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("interfaceOptions", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpureFunction0"](214, _c2));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngForOf", ctx_r0.claimantsBanks);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](150, 160, "clms_submison_house.bankAccName"));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](153, 162, "clms_submison_house.bankAccName"));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r0.houseOwnerClaimForm.get("claimants_act_name").hasError("pattern"));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r0.houseOwnerClaimForm.get("claimants_act_name").hasError("maxlength"));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](158, 164, "clms_submison_house.bankAccNo"));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](161, 166, "clms_submison_house.bankAccNo"));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r0.houseOwnerClaimForm.get("claimants_act_no").hasError("pattern"));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r0.houseOwnerClaimForm.get("claimants_act_no").hasError("maxlength"));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](167, 168, "clms_submison_house.uploadFile"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngForOf", ctx_r0.houseOwnerClaimForm.controls.attachments.controls);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r0.houseOwnerClaimForm.controls.attachments.controls[ctx_r0.houseOwnerClaimForm.controls.attachments.length - 1].controls.filename.hasError("required") && ctx_r0.houseOwnerClaimForm.controls.attachments.controls[ctx_r0.houseOwnerClaimForm.controls.attachments.length - 1].controls.filename.touched);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", !ctx_r0.houseOwnerClaimForm.controls.attachments.controls[0].controls.filename.hasError("required"));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](177, 170, "clms_submison_house.claim_disclaimer"));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](184, 172, "clms_submison_house.Disclaimer_title1"));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](187, 174, "clms_submison_house.claim_disclaimer_text1"));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](190, 176, "clms_submison_house.Disclaimer_title2"));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](193, 178, "clms_submison_house.claim_disclaimer_text2"));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](196, 180, "clms_submison_house.Disclaimer_title3"));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](199, 182, "clms_submison_house.claim_disclaimer_text3"));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("checked", ctx_r0.disclaimer_terms);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](204, 184, "clms_submison_house.agree"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r0.houseOwnerClaimForm.controls.disclaimer.value === false && ctx_r0.houseOwnerClaimForm.get("disclaimer").touched);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](208, 186, "clms_submison_house.remark"));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](211, 188, "clms_submison_house.remark"));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r0.isValidUser);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](215, 190, "clms_submison_house.agent_Name"));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](218, 192, "clms_submison_house.agent_Name"));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](221, 194, "clms_submison_house.agent_No"));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](224, 196, "clms_submison_house.agent_No"));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](227, 198, "clms_submison_house.agent_Mobile"));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](230, 200, "clms_submison_house.agent_Mobile"));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](233, 202, "enterthetext"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](248, 204, "entertextintheaboveimage"));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r0.houseOwnerClaimForm.get("captcha").hasError("required") && ctx_r0.houseOwnerClaimForm.get("captcha").touched && !ctx_r0.isValidUser);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](254, 206, "allfieldsarecompulsory"));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("disabled", !ctx_r0.houseOwnerClaimForm.valid || !ctx_r0.disclaimer_terms);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](259, 208, "clms_submison_house.sbtClms"), "");
  }
}
function ClaimSubmissionPage_form_15_ion_select_option_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "ion-select-option", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const plan_r122 = ctx.$implicit;
    const i_r123 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("value", plan_r122)("selected", i_r123 === 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](plan_r122);
  }
}
function ClaimSubmissionPage_form_15_div_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 70)(1, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](3, 1, "clms_submison_criticalIll.err_policyNoReq"));
  }
}
function ClaimSubmissionPage_form_15_div_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 70)(1, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](3, 1, "clms_submison_criticalIll.policyNoLength_req"));
  }
}
function ClaimSubmissionPage_form_15_div_19_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 70)(1, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](3, 1, "clms_submison_criticalIll.policyNoPattern_req"));
  }
}
function ClaimSubmissionPage_form_15_div_20_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 70)(1, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](3, 1, "clms_submison_criticalIll.policyNoMax_req"));
  }
}
function ClaimSubmissionPage_form_15_div_29_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 70)(1, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](3, 1, "clms_submison_criticalIll.err_lifeAssuredReq"));
  }
}
function ClaimSubmissionPage_form_15_div_30_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 70)(1, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](3, 1, "clms_submison_criticalIll.lifeAssuredLength_req"));
  }
}
function ClaimSubmissionPage_form_15_div_31_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 70)(1, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](3, 1, "clms_submison_criticalIll.lifeAssuredPattern_req"));
  }
}
function ClaimSubmissionPage_form_15_div_32_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 70)(1, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](3, 1, "clms_submison_criticalIll.lifeAssuredMax_req"));
  }
}
function ClaimSubmissionPage_form_15_div_41_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 70)(1, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](3, 1, "clms_submison_criticalIll.err_NRICNoReq"));
  }
}
function ClaimSubmissionPage_form_15_div_42_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 70)(1, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](3, 1, "clms_submison_criticalIll.err_NRICNoLength_req"));
  }
}
function ClaimSubmissionPage_form_15_div_43_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 70)(1, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](3, 1, "clms_submison_criticalIll.err_NRICNoPattern_req"));
  }
}
function ClaimSubmissionPage_form_15_div_44_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 70)(1, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](3, 1, "clms_submison_criticalIll.err_NRICNoMax_req"));
  }
}
function ClaimSubmissionPage_form_15_div_53_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 70)(1, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](3, 1, "clms_submison_criticalIll.err_addressReq"));
  }
}
function ClaimSubmissionPage_form_15_div_54_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 70)(1, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](3, 1, "clms_submison_criticalIll.err_addressLength_req"));
  }
}
function ClaimSubmissionPage_form_15_div_55_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 70)(1, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](3, 1, "clms_submison_criticalIll.err_addressMaxLength_req"));
  }
}
function ClaimSubmissionPage_form_15_div_64_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 70)(1, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](3, 1, "clms_submison_criticalIll.err_postalCodeReq"));
  }
}
function ClaimSubmissionPage_form_15_div_65_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 70)(1, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](3, 1, "clms_submison_criticalIll.err_postalCodeLength_req"));
  }
}
function ClaimSubmissionPage_form_15_div_66_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 70)(1, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](3, 1, "clms_submison_criticalIll.err_postalCodePattern_req"));
  }
}
function ClaimSubmissionPage_form_15_div_67_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 70)(1, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](3, 1, "clms_submison_criticalIll.err_postalCodePattern_req"));
  }
}
function ClaimSubmissionPage_form_15_ion_select_option_75_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "ion-select-option", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const state_r124 = ctx.$implicit;
    const i_r125 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("value", state_r124)("selected", i_r125 === 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](state_r124);
  }
}
function ClaimSubmissionPage_form_15_div_90_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 70)(1, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](3, 1, "clms_submison_criticalIll.err_mobileNoReq"));
  }
}
function ClaimSubmissionPage_form_15_div_91_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 70)(1, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](3, 1, "clms_submison_criticalIll.err_invalidMno"));
  }
}
function ClaimSubmissionPage_form_15_div_92_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 70)(1, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](3, 1, "clms_submison_criticalIll.err_mobileNoLength_req"));
  }
}
function ClaimSubmissionPage_form_15_div_93_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 70)(1, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](3, 1, "clms_submison_criticalIll.err_mobileNoLength_req"));
  }
}
function ClaimSubmissionPage_form_15_div_94_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 70)(1, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](3, 1, "clms_submison_criticalIll.err_mobileNoLength_req"));
  }
}
function ClaimSubmissionPage_form_15_div_103_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 70)(1, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](3, 1, "clms_submison_criticalIll.err_emailReq"));
  }
}
function ClaimSubmissionPage_form_15_div_104_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 70)(1, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](3, 1, "clms_submison_criticalIll.err_emailValid"));
  }
}
function ClaimSubmissionPage_form_15_ion_select_option_110_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "ion-select-option", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const bank_r126 = ctx.$implicit;
    const i_r127 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("value", bank_r126)("selected", i_r127 === 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](bank_r126);
  }
}
function ClaimSubmissionPage_form_15_div_117_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 70)(1, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](3, 1, "clms_submison_criticalIll.err_ClmAccountNamePattern_req"));
  }
}
function ClaimSubmissionPage_form_15_div_118_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 70)(1, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](3, 1, "clms_submison_criticalIll.err_ClmAccountNamePattern_req"));
  }
}
function ClaimSubmissionPage_form_15_div_125_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 70)(1, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](3, 1, "clms_submison_criticalIll.err_ClmAccountNoPattern_req"));
  }
}
function ClaimSubmissionPage_form_15_div_126_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 70)(1, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](3, 1, "clms_submison_criticalIll.err_ClmAccountNoPattern_req"));
  }
}
function ClaimSubmissionPage_form_15_ion_select_option_134_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "ion-select-option", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const type_r128 = ctx.$implicit;
    const i_r129 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("value", type_r128)("selected", i_r129 === 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](type_r128);
  }
}
function ClaimSubmissionPage_form_15_ion_grid_147_Template(rf, ctx) {
  if (rf & 1) {
    const _r133 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "ion-grid", 73)(1, "ion-row", 74)(2, "ion-col", 75)(3, "ion-item", 13)(4, "ion-input", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function ClaimSubmissionPage_form_15_ion_grid_147_Template_ion_input_click_4_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r133);
      const i_r131 = restoredCtx.index;
      const ctx_r132 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r132.chooseCameraOptions(i_r131, "criticalIllnessClaimForm"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](6, "ion-icon", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function ClaimSubmissionPage_form_15_ion_grid_147_Template_ion_icon_click_6_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r133);
      const i_r131 = restoredCtx.index;
      const ctx_r134 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r134.chooseCameraOptions(i_r131, "criticalIllnessClaimForm"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](7, "ion-icon", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function ClaimSubmissionPage_form_15_ion_grid_147_Template_ion_icon_click_7_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r133);
      const i_r131 = restoredCtx.index;
      const ctx_r135 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r135.removeAttachmentField(i_r131, "criticalIllnessClaimForm"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()()()();
  }
  if (rf & 2) {
    const i_r131 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("formGroupName", i_r131);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](5, 2, "clms_submison_house.plcHldr_uploadDoc"));
  }
}
function ClaimSubmissionPage_form_15_div_148_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 94)(1, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](3, 1, "clms_submison_criticalIll.err_uploadDocReq"));
  }
}
function ClaimSubmissionPage_form_15_ion_button_151_Template(rf, ctx) {
  if (rf & 1) {
    const _r137 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "ion-button", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function ClaimSubmissionPage_form_15_ion_button_151_Template_ion_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r137);
      const ctx_r136 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r136.addNewAttachmentField("criticalIllnessClaimForm"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1, " Add More");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r117 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("disabled", ctx_r117.criticalIllnessClaimForm.controls.attachments.controls[ctx_r117.criticalIllnessClaimForm.controls.attachments.length - 1].controls.filename.hasError("required"));
  }
}
function ClaimSubmissionPage_form_15_div_182_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div")(1, "span", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](3, 1, "clms_submison_criticalIll.claim_disclaimer_req"));
  }
}
function ClaimSubmissionPage_form_15_div_225_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 70)(1, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](3, 1, "captcha_req"));
  }
}
function ClaimSubmissionPage_form_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r139 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "form", 11)(1, "p", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](4, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](5, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](6, "div", 13)(7, "ion-select", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](8, ClaimSubmissionPage_form_15_ion_select_option_8_Template, 2, 3, "ion-select-option", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](9, "p", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](11, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](12, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](13, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](14, "ion-item", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](15, "ion-input", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](16, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](17, ClaimSubmissionPage_form_15_div_17_Template, 4, 3, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](18, ClaimSubmissionPage_form_15_div_18_Template, 4, 3, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](19, ClaimSubmissionPage_form_15_div_19_Template, 4, 3, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](20, ClaimSubmissionPage_form_15_div_20_Template, 4, 3, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](21, "p", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](23, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](24, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](25, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](26, "ion-item", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](27, "ion-input", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](28, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](29, ClaimSubmissionPage_form_15_div_29_Template, 4, 3, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](30, ClaimSubmissionPage_form_15_div_30_Template, 4, 3, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](31, ClaimSubmissionPage_form_15_div_31_Template, 4, 3, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](32, ClaimSubmissionPage_form_15_div_32_Template, 4, 3, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](33, "p", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](34);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](35, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](36, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](37, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](38, "ion-item", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](39, "ion-input", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](40, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](41, ClaimSubmissionPage_form_15_div_41_Template, 4, 3, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](42, ClaimSubmissionPage_form_15_div_42_Template, 4, 3, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](43, ClaimSubmissionPage_form_15_div_43_Template, 4, 3, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](44, ClaimSubmissionPage_form_15_div_44_Template, 4, 3, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](45, "p", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](46);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](47, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](48, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](49, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](50, "ion-item", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](51, "ion-input", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](52, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](53, ClaimSubmissionPage_form_15_div_53_Template, 4, 3, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](54, ClaimSubmissionPage_form_15_div_54_Template, 4, 3, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](55, ClaimSubmissionPage_form_15_div_55_Template, 4, 3, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](56, "p", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](57);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](58, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](59, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](60, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](61, "ion-item", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](62, "ion-input", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](63, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](64, ClaimSubmissionPage_form_15_div_64_Template, 4, 3, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](65, ClaimSubmissionPage_form_15_div_65_Template, 4, 3, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](66, ClaimSubmissionPage_form_15_div_66_Template, 4, 3, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](67, ClaimSubmissionPage_form_15_div_67_Template, 4, 3, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](68, "p", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](69);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](70, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](71, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](72, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](73, "div", 13)(74, "ion-select", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](75, ClaimSubmissionPage_form_15_ion_select_option_75_Template, 2, 3, "ion-select-option", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](76, "p", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](77);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](78, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](79, "ion-item", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](80, "ion-input", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](81, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](82, "p", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](83);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](84, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](85, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](86, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](87, "ion-item", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](88, "ion-input", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](89, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](90, ClaimSubmissionPage_form_15_div_90_Template, 4, 3, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](91, ClaimSubmissionPage_form_15_div_91_Template, 4, 3, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](92, ClaimSubmissionPage_form_15_div_92_Template, 4, 3, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](93, ClaimSubmissionPage_form_15_div_93_Template, 4, 3, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](94, ClaimSubmissionPage_form_15_div_94_Template, 4, 3, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](95, "p", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](96);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](97, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](98, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](99, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](100, "ion-item", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](101, "ion-input", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](102, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](103, ClaimSubmissionPage_form_15_div_103_Template, 4, 3, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](104, ClaimSubmissionPage_form_15_div_104_Template, 4, 3, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](105, "p", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](106);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](107, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](108, "div", 13)(109, "ion-select", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](110, ClaimSubmissionPage_form_15_ion_select_option_110_Template, 2, 3, "ion-select-option", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](111, "p", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](112);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](113, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](114, "ion-item", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](115, "ion-input", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](116, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](117, ClaimSubmissionPage_form_15_div_117_Template, 4, 3, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](118, ClaimSubmissionPage_form_15_div_118_Template, 4, 3, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](119, "p", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](120);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](121, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](122, "ion-item", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](123, "ion-input", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](124, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](125, ClaimSubmissionPage_form_15_div_125_Template, 4, 3, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](126, ClaimSubmissionPage_form_15_div_126_Template, 4, 3, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](127, "p", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](128);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](129, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](130, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](131, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](132, "div", 13)(133, "ion-select", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](134, ClaimSubmissionPage_form_15_ion_select_option_134_Template, 2, 3, "ion-select-option", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](135, "p", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](136);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](137, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](138, "ion-item", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](139, "ion-input", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](140, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](141, "p", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](142);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](143, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](144, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](145, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](146, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](147, ClaimSubmissionPage_form_15_ion_grid_147_Template, 8, 4, "ion-grid", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](148, ClaimSubmissionPage_form_15_div_148_Template, 4, 3, "div", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](149, "ion-row")(150, "ion-col", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](151, ClaimSubmissionPage_form_15_ion_button_151_Template, 2, 1, "ion-button", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](152, "p", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](153);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](154, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](155, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](156, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](157, "ion-item", 43)(158, "div")(159, "a", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](160);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](161, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](162, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](163);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](164, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](165, "a", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](166);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](167, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](168, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](169);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](170, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](171, "a", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](172);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](173, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](174, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](175);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](176, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](177, "ion-row", 46)(178, "ion-checkbox", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("ionChange", function ClaimSubmissionPage_form_15_Template_ion_checkbox_ionChange_178_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r139);
      const ctx_r138 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r138.checkboxChange($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](179, "span", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](180);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](181, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](182, ClaimSubmissionPage_form_15_div_182_Template, 4, 3, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](183, "p", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](184);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](185, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](186, "ion-item", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](187, "ion-input", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](188, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](189, "p", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](190);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](191, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](192, "ion-item", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](193, "ion-input", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](194, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](195, "p", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](196);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](197, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](198, "ion-item", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](199, "ion-input", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](200, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](201, "p", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](202);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](203, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](204, "ion-item", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](205, "ion-input", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](206, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](207, "p", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](208);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](209, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](210, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](211, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](212, "ion-row")(213, "ion-item", 92)(214, "ion-col", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](215, "canvas", 58, 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](217, "ion-col", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](218, "ion-col", 61)(219, "div", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function ClaimSubmissionPage_form_15_Template_div_click_219_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r139);
      const ctx_r140 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r140.refreshCaptcha(ctx_r140.criticalIllnessClaimForm));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](220, "i", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](221, "ion-item", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](222, "ion-input", 64, 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](224, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](225, ClaimSubmissionPage_form_15_div_225_Template, 4, 3, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](226, "p", 66)(227, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](228, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](229);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](230, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](231, "ion-row")(232, "ion-col", 67)(233, "ion-button", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function ClaimSubmissionPage_form_15_Template_ion_button_click_233_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r139);
      const ctx_r141 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r141.submitCriticalClaimForm(ctx_r141.criticalIllnessClaimForm));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](234);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](235, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("formGroup", ctx_r1.criticalIllnessClaimForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](3, 93, "clms_submison_criticalIll.planType"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("interfaceOptions", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpureFunction0"](187, _c2));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngForOf", ctx_r1.typeOfPlans);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](11, 95, "clms_submison_criticalIll.policyNo"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](16, 97, "clms_submison_criticalIll.policyNo"));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r1.criticalIllnessClaimForm.get("contract_no").hasError("required") && ctx_r1.criticalIllnessClaimForm.get("contract_no").touched);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r1.criticalIllnessClaimForm.get("contract_no").hasError("minlength") && ctx_r1.criticalIllnessClaimForm.get("contract_no").touched);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r1.criticalIllnessClaimForm.get("contract_no").hasError("pattern") && ctx_r1.criticalIllnessClaimForm.get("contract_no").touched && !ctx_r1.criticalIllnessClaimForm.get("contract_no").hasError("minlength"));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r1.criticalIllnessClaimForm.get("contract_no").hasError("maxlength") && ctx_r1.criticalIllnessClaimForm.get("contract_no").touched && !ctx_r1.criticalIllnessClaimForm.get("contract_no").hasError("pattern"));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](23, 99, "clms_submison_criticalIll.lifeAssured"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](28, 101, "clms_submison_criticalIll.lifeAssured"));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r1.criticalIllnessClaimForm.get("insuarance_pername_name").hasError("required") && ctx_r1.criticalIllnessClaimForm.get("insuarance_pername_name").touched);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r1.criticalIllnessClaimForm.get("insuarance_pername_name").hasError("minlength") && ctx_r1.criticalIllnessClaimForm.get("insuarance_pername_name").touched);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r1.criticalIllnessClaimForm.get("insuarance_pername_name").hasError("pattern") && ctx_r1.criticalIllnessClaimForm.get("insuarance_pername_name").touched && !ctx_r1.criticalIllnessClaimForm.get("insuarance_pername_name").hasError("minlength"));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r1.criticalIllnessClaimForm.get("insuarance_pername_name").hasError("maxlength") && ctx_r1.criticalIllnessClaimForm.get("insuarance_pername_name").touched && !ctx_r1.criticalIllnessClaimForm.get("insuarance_pername_name").hasError("pattern"));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](35, 103, "clms_submison_criticalIll.NRICNo"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](40, 105, "clms_submison_criticalIll.NRICNo"));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r1.criticalIllnessClaimForm.get("nric_no").hasError("required") && ctx_r1.criticalIllnessClaimForm.get("nric_no").touched);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r1.criticalIllnessClaimForm.get("nric_no").hasError("minlength") && ctx_r1.criticalIllnessClaimForm.get("nric_no").touched);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r1.criticalIllnessClaimForm.get("nric_no").hasError("pattern") && ctx_r1.criticalIllnessClaimForm.get("nric_no").touched && !ctx_r1.criticalIllnessClaimForm.get("nric_no").hasError("minlength"));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r1.criticalIllnessClaimForm.get("nric_no").hasError("maxlength") && ctx_r1.criticalIllnessClaimForm.get("nric_no").touched && !ctx_r1.criticalIllnessClaimForm.get("nric_no").hasError("pattern"));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](47, 107, "clms_submison_criticalIll.address"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](52, 109, "clms_submison_criticalIll.address"));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r1.criticalIllnessClaimForm.get("address").hasError("required") && ctx_r1.criticalIllnessClaimForm.get("address").touched);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r1.criticalIllnessClaimForm.get("address").hasError("minlength") && ctx_r1.criticalIllnessClaimForm.get("address").touched);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r1.criticalIllnessClaimForm.get("address").hasError("maxlength") && ctx_r1.criticalIllnessClaimForm.get("address").touched);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](58, 111, "clms_submison_criticalIll.postCode"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](63, 113, "clms_submison_criticalIll.postCode"));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r1.criticalIllnessClaimForm.get("postcode").hasError("required") && ctx_r1.criticalIllnessClaimForm.get("postcode").touched);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r1.criticalIllnessClaimForm.get("postcode").hasError("minlength") && ctx_r1.criticalIllnessClaimForm.get("postcode").touched);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r1.criticalIllnessClaimForm.get("postcode").hasError("pattern") && ctx_r1.criticalIllnessClaimForm.get("postcode").touched && !ctx_r1.criticalIllnessClaimForm.get("postcode").hasError("minlength"));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r1.criticalIllnessClaimForm.get("postcode").hasError("maxlength") && ctx_r1.criticalIllnessClaimForm.get("postcode").touched && !ctx_r1.criticalIllnessClaimForm.get("postcode").hasError("pattern"));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](70, 115, "clms_submison_criticalIll.state"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("interfaceOptions", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpureFunction0"](188, _c2));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngForOf", ctx_r1.claimantsStates);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](78, 117, "clms_submison_criticalIll.telephoneNo"));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](81, 119, "clms_submison_criticalIll.telephoneNo"));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](84, 121, "clms_submison_criticalIll.mobileNo"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](89, 123, "clms_submison_criticalIll.mobileNo"));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r1.criticalIllnessClaimForm.get("mobile").hasError("required") && ctx_r1.criticalIllnessClaimForm.get("mobile").touched);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r1.criticalIllnessClaimForm.get("mobile").hasError("validateNonZeroVal"));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r1.criticalIllnessClaimForm.get("mobile").hasError("minlength"));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r1.criticalIllnessClaimForm.get("mobile").hasError("pattern") && ctx_r1.criticalIllnessClaimForm.get("mobile").touched && !ctx_r1.criticalIllnessClaimForm.get("mobile").hasError("minlength"));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r1.criticalIllnessClaimForm.get("mobile").hasError("maxlength") && ctx_r1.criticalIllnessClaimForm.get("mobile").touched && !ctx_r1.criticalIllnessClaimForm.get("mobile").hasError("pattern"));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](97, 125, "clms_submison_criticalIll.email"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](102, 127, "clms_submison_criticalIll.email"));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r1.criticalIllnessClaimForm.get("email").hasError("required") && ctx_r1.criticalIllnessClaimForm.get("email").touched);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", !ctx_r1.criticalIllnessClaimForm.get("email").hasError("required") && ctx_r1.criticalIllnessClaimForm.get("email").hasError("pattern"));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](107, 129, "clms_submison_criticalIll.bankName"));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("interfaceOptions", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpureFunction0"](189, _c2));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngForOf", ctx_r1.claimantsBanks);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](113, 131, "clms_submison_criticalIll.bankAccName"));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](116, 133, "clms_submison_criticalIll.bankAccName"));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r1.criticalIllnessClaimForm.get("claimants_act_name").hasError("pattern"));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r1.criticalIllnessClaimForm.get("claimants_act_name").hasError("maxlength") && !ctx_r1.criticalIllnessClaimForm.get("claimants_act_name").hasError("pattern"));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](121, 135, "clms_submison_criticalIll.bankAccNo"));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](124, 137, "clms_submison_criticalIll.bankAccNo"));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r1.criticalIllnessClaimForm.get("claimants_act_no").hasError("pattern"));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r1.criticalIllnessClaimForm.get("claimants_act_no").hasError("maxlength") && !ctx_r1.criticalIllnessClaimForm.get("claimants_act_no").hasError("pattern"));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](129, 139, "clms_submison_criticalIll.criticalIllType"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("interfaceOptions", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpureFunction0"](190, _c2));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngForOf", ctx_r1.typesOfIllness);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](137, 141, "clms_submison_criticalIll.docNameAddress"));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](140, 143, "clms_submison_criticalIll.plcHldr_docNameAddress"));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](143, 145, "clms_submison_criticalIll.uploadFile"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngForOf", ctx_r1.criticalIllnessClaimForm.controls.attachments.controls);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r1.criticalIllnessClaimForm.controls.attachments.controls[ctx_r1.criticalIllnessClaimForm.controls.attachments.length - 1].controls.filename.hasError("required") && ctx_r1.criticalIllnessClaimForm.controls.attachments.controls[ctx_r1.criticalIllnessClaimForm.controls.attachments.length - 1].controls.filename.touched);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", !ctx_r1.criticalIllnessClaimForm.controls.attachments.controls[0].controls.filename.hasError("required"));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](154, 147, "clms_submison_criticalIll.claim_disclaimer"));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](161, 149, "clms_submison_criticalIll.Disclaimer_title1"));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](164, 151, "clms_submison_criticalIll.claim_disclaimer_text1"));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](167, 153, "clms_submison_criticalIll.Disclaimer_title2"));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](170, 155, "clms_submison_criticalIll.claim_disclaimer_text2"));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](173, 157, "clms_submison_criticalIll.Disclaimer_title3"));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](176, 159, "clms_submison_criticalIll.claim_disclaimer_text3"));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("checked", ctx_r1.disclaimer_terms);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](181, 161, "clms_submison_criticalIll.agree"));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r1.criticalIllnessClaimForm.controls.disclaimer.value === false && ctx_r1.criticalIllnessClaimForm.get("disclaimer").touched);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](185, 163, "clms_submison_criticalIll.remark"));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](188, 165, "clms_submison_criticalIll.remark"));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](191, 167, "clms_submison_criticalIll.agent_Name"));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](194, 169, "clms_submison_criticalIll.agent_Name"));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](197, 171, "clms_submison_criticalIll.agent_No"));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](200, 173, "clms_submison_criticalIll.agent_No"));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](203, 175, "clms_submison_criticalIll.agent_Mobile"));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](206, 177, "clms_submison_criticalIll.agent_Mobile"));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](209, 179, "enterthetext"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](224, 181, "entertextintheaboveimage"));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r1.criticalIllnessClaimForm.get("captcha").hasError("required") && ctx_r1.criticalIllnessClaimForm.get("captcha").touched && !ctx_r1.isValidUser);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](230, 183, "allfieldsarecompulsory"));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("disabled", !ctx_r1.criticalIllnessClaimForm.valid || !ctx_r1.disclaimer_terms);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](235, 185, "clms_submison_criticalIll.sbtClms"));
  }
}
function ClaimSubmissionPage_form_16_ion_select_option_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "ion-select-option", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const plan_r183 = ctx.$implicit;
    const i_r184 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("value", plan_r183)("selected", i_r184 === 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](plan_r183);
  }
}
function ClaimSubmissionPage_form_16_div_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 70)(1, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](3, 1, "clms_submison_permntDisablty.policyNoLength_req"));
  }
}
function ClaimSubmissionPage_form_16_div_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 70)(1, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](3, 1, "clms_submison_permntDisablty.err_policyNoReq"));
  }
}
function ClaimSubmissionPage_form_16_div_19_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 70)(1, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](3, 1, "clms_submison_permntDisablty.policyNoPattern_req"));
  }
}
function ClaimSubmissionPage_form_16_div_20_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 70)(1, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](3, 1, "clms_submison_permntDisablty.policyNoMax_req"));
  }
}
function ClaimSubmissionPage_form_16_div_29_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 70)(1, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](3, 1, "clms_submison_permntDisablty.err_lifeAssuredReq"));
  }
}
function ClaimSubmissionPage_form_16_div_30_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 70)(1, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](3, 1, "clms_submison_permntDisablty.lifeAssuredLength_req"));
  }
}
function ClaimSubmissionPage_form_16_div_31_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 70)(1, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](3, 1, "clms_submison_permntDisablty.lifeAssuredPattern_req"));
  }
}
function ClaimSubmissionPage_form_16_div_32_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 70)(1, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](3, 1, "clms_submison_permntDisablty.lifeAssuredMax_req"));
  }
}
function ClaimSubmissionPage_form_16_div_41_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 70)(1, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](3, 1, "clms_submison_permntDisablty.err_NRICNoReq"));
  }
}
function ClaimSubmissionPage_form_16_div_42_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 70)(1, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](3, 1, "clms_submison_permntDisablty.err_NRICNoLength_req"));
  }
}
function ClaimSubmissionPage_form_16_div_43_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 70)(1, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](3, 1, "clms_submison_permntDisablty.err_NRICNoPattern_req"));
  }
}
function ClaimSubmissionPage_form_16_div_44_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 70)(1, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](3, 1, "clms_submison_permntDisablty.err_NRICNoPattern_req"));
  }
}
function ClaimSubmissionPage_form_16_div_53_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 70)(1, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](3, 1, "clms_submison_permntDisablty.err_addressReq"));
  }
}
function ClaimSubmissionPage_form_16_div_54_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 70)(1, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](3, 1, "clms_submison_permntDisablty.err_addressLength_req"));
  }
}
function ClaimSubmissionPage_form_16_div_55_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 70)(1, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](3, 1, "clms_submison_permntDisablty.err_addressMaxLength_req"));
  }
}
function ClaimSubmissionPage_form_16_div_64_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 70)(1, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](3, 1, "clms_submison_permntDisablty.err_postalCodeReq"));
  }
}
function ClaimSubmissionPage_form_16_div_65_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 70)(1, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](3, 1, "clms_submison_permntDisablty.err_postalCodeLength_req"));
  }
}
function ClaimSubmissionPage_form_16_div_66_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 70)(1, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](3, 1, "clms_submison_permntDisablty.err_postalCodePattern_req"));
  }
}
function ClaimSubmissionPage_form_16_div_67_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 70)(1, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](3, 1, "clms_submison_permntDisablty.err_postalCodePattern_req"));
  }
}
function ClaimSubmissionPage_form_16_ion_select_option_75_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "ion-select-option", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const state_r185 = ctx.$implicit;
    const i_r186 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("value", state_r185)("selected", i_r186 === 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](state_r185);
  }
}
function ClaimSubmissionPage_form_16_div_90_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 70)(1, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](3, 1, "clms_submison_permntDisablty.err_mobileNoReq"));
  }
}
function ClaimSubmissionPage_form_16_div_91_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 70)(1, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](3, 1, "clms_submison_permntDisablty.err_invalidMno"));
  }
}
function ClaimSubmissionPage_form_16_div_92_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 70)(1, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](3, 1, "clms_submison_permntDisablty.err_mobileNoLength_req"));
  }
}
function ClaimSubmissionPage_form_16_div_93_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 70)(1, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](3, 1, "clms_submison_permntDisablty.err_mobileNoLength_req"));
  }
}
function ClaimSubmissionPage_form_16_div_94_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 70)(1, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](3, 1, "clms_submison_permntDisablty.err_mobileNoLength_req"));
  }
}
function ClaimSubmissionPage_form_16_div_103_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 70)(1, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](3, 1, "clms_submison_permntDisablty.err_emailReq"));
  }
}
function ClaimSubmissionPage_form_16_div_104_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 70)(1, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](3, 1, "clms_submison_permntDisablty.err_emailValid"));
  }
}
function ClaimSubmissionPage_form_16_ion_select_option_116_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "ion-select-option", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const value_r187 = ctx.$implicit;
    const i_r188 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("value", value_r187)("selected", i_r188 === 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](value_r187);
  }
}
function ClaimSubmissionPage_form_16_ion_select_option_122_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "ion-select-option", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const bank_r189 = ctx.$implicit;
    const i_r190 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("value", bank_r189)("selected", i_r190 === 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](bank_r189);
  }
}
function ClaimSubmissionPage_form_16_div_129_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 70)(1, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](3, 1, "clms_submison_permntDisablty.err_ClmAccountNamePattern_req"));
  }
}
function ClaimSubmissionPage_form_16_div_130_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 70)(1, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](3, 1, "clms_submison_permntDisablty.err_ClmAccountNamePattern_req"));
  }
}
function ClaimSubmissionPage_form_16_div_137_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 70)(1, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](3, 1, "clms_submison_permntDisablty.err_ClmAccountNoPattern_req"));
  }
}
function ClaimSubmissionPage_form_16_div_138_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 70)(1, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](3, 1, "clms_submison_permntDisablty.err_ClmAccountNoPattern_req"));
  }
}
function ClaimSubmissionPage_form_16_ion_grid_145_Template(rf, ctx) {
  if (rf & 1) {
    const _r194 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "ion-grid", 73)(1, "ion-row", 74)(2, "ion-col", 75)(3, "ion-item", 13)(4, "ion-input", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function ClaimSubmissionPage_form_16_ion_grid_145_Template_ion_input_click_4_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r194);
      const i_r192 = restoredCtx.index;
      const ctx_r193 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r193.chooseCameraOptions(i_r192, "totalDisabilityClaimForm"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](6, "ion-icon", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function ClaimSubmissionPage_form_16_ion_grid_145_Template_ion_icon_click_6_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r194);
      const i_r192 = restoredCtx.index;
      const ctx_r195 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r195.chooseCameraOptions(i_r192, "totalDisabilityClaimForm"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](7, "ion-icon", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function ClaimSubmissionPage_form_16_ion_grid_145_Template_ion_icon_click_7_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r194);
      const i_r192 = restoredCtx.index;
      const ctx_r196 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r196.removeAttachmentField(i_r192, "totalDisabilityClaimForm"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()()()();
  }
  if (rf & 2) {
    const i_r192 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("formGroupName", i_r192);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](5, 2, "clms_submison_house.plcHldr_uploadDoc"));
  }
}
function ClaimSubmissionPage_form_16_div_146_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 94)(1, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](3, 1, "clms_submison_permntDisablty.err_uploadDocReq"));
  }
}
function ClaimSubmissionPage_form_16_ion_button_149_Template(rf, ctx) {
  if (rf & 1) {
    const _r198 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "ion-button", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function ClaimSubmissionPage_form_16_ion_button_149_Template_ion_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r198);
      const ctx_r197 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r197.addNewAttachmentField("totalDisabilityClaimForm"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1, " Add More");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r178 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("disabled", ctx_r178.totalDisabilityClaimForm.controls.attachments.controls[ctx_r178.totalDisabilityClaimForm.controls.attachments.length - 1].controls.filename.hasError("required"));
  }
}
function ClaimSubmissionPage_form_16_div_180_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div")(1, "span", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](3, 1, "clms_submison_permntDisablty.claim_disclaimer_req"));
  }
}
function ClaimSubmissionPage_form_16_div_223_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 70)(1, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](3, 1, "captcha_req"));
  }
}
function ClaimSubmissionPage_form_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r200 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "form", 11)(1, "p", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](4, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](5, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](6, "div", 13)(7, "ion-select", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](8, ClaimSubmissionPage_form_16_ion_select_option_8_Template, 2, 3, "ion-select-option", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](9, "p", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](11, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](12, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](13, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](14, "ion-item", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](15, "ion-input", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](16, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](17, ClaimSubmissionPage_form_16_div_17_Template, 4, 3, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](18, ClaimSubmissionPage_form_16_div_18_Template, 4, 3, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](19, ClaimSubmissionPage_form_16_div_19_Template, 4, 3, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](20, ClaimSubmissionPage_form_16_div_20_Template, 4, 3, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](21, "p", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](23, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](24, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](25, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](26, "ion-item", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](27, "ion-input", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](28, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](29, ClaimSubmissionPage_form_16_div_29_Template, 4, 3, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](30, ClaimSubmissionPage_form_16_div_30_Template, 4, 3, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](31, ClaimSubmissionPage_form_16_div_31_Template, 4, 3, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](32, ClaimSubmissionPage_form_16_div_32_Template, 4, 3, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](33, "p", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](34);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](35, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](36, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](37, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](38, "ion-item", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](39, "ion-input", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](40, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](41, ClaimSubmissionPage_form_16_div_41_Template, 4, 3, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](42, ClaimSubmissionPage_form_16_div_42_Template, 4, 3, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](43, ClaimSubmissionPage_form_16_div_43_Template, 4, 3, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](44, ClaimSubmissionPage_form_16_div_44_Template, 4, 3, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](45, "p", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](46);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](47, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](48, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](49, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](50, "ion-item", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](51, "ion-input", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](52, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](53, ClaimSubmissionPage_form_16_div_53_Template, 4, 3, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](54, ClaimSubmissionPage_form_16_div_54_Template, 4, 3, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](55, ClaimSubmissionPage_form_16_div_55_Template, 4, 3, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](56, "p", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](57);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](58, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](59, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](60, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](61, "ion-item", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](62, "ion-input", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](63, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](64, ClaimSubmissionPage_form_16_div_64_Template, 4, 3, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](65, ClaimSubmissionPage_form_16_div_65_Template, 4, 3, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](66, ClaimSubmissionPage_form_16_div_66_Template, 4, 3, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](67, ClaimSubmissionPage_form_16_div_67_Template, 4, 3, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](68, "p", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](69);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](70, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](71, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](72, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](73, "div", 13)(74, "ion-select", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](75, ClaimSubmissionPage_form_16_ion_select_option_75_Template, 2, 3, "ion-select-option", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](76, "p", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](77);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](78, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](79, "ion-item", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](80, "ion-input", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](81, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](82, "p", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](83);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](84, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](85, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](86, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](87, "ion-item", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](88, "ion-input", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](89, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](90, ClaimSubmissionPage_form_16_div_90_Template, 4, 3, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](91, ClaimSubmissionPage_form_16_div_91_Template, 4, 3, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](92, ClaimSubmissionPage_form_16_div_92_Template, 4, 3, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](93, ClaimSubmissionPage_form_16_div_93_Template, 4, 3, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](94, ClaimSubmissionPage_form_16_div_94_Template, 4, 3, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](95, "p", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](96);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](97, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](98, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](99, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](100, "ion-item", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](101, "ion-input", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](102, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](103, ClaimSubmissionPage_form_16_div_103_Template, 4, 3, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](104, ClaimSubmissionPage_form_16_div_104_Template, 4, 3, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](105, "p", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](106);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](107, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](108, "ion-item", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](109, "ion-input", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](110, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](111, "p", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](112);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](113, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](114, "div", 13)(115, "ion-select", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](116, ClaimSubmissionPage_form_16_ion_select_option_116_Template, 2, 3, "ion-select-option", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](117, "p", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](118);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](119, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](120, "div", 13)(121, "ion-select", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](122, ClaimSubmissionPage_form_16_ion_select_option_122_Template, 2, 3, "ion-select-option", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](123, "p", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](124);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](125, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](126, "ion-item", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](127, "ion-input", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](128, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](129, ClaimSubmissionPage_form_16_div_129_Template, 4, 3, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](130, ClaimSubmissionPage_form_16_div_130_Template, 4, 3, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](131, "p", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](132);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](133, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](134, "ion-item", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](135, "ion-input", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](136, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](137, ClaimSubmissionPage_form_16_div_137_Template, 4, 3, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](138, ClaimSubmissionPage_form_16_div_138_Template, 4, 3, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](139, "p", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](140);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](141, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](142, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](143, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](144, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](145, ClaimSubmissionPage_form_16_ion_grid_145_Template, 8, 4, "ion-grid", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](146, ClaimSubmissionPage_form_16_div_146_Template, 4, 3, "div", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](147, "ion-row")(148, "ion-col", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](149, ClaimSubmissionPage_form_16_ion_button_149_Template, 2, 1, "ion-button", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](150, "p", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](151);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](152, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](153, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](154, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](155, "ion-item", 43)(156, "div")(157, "a", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](158);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](159, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](160, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](161);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](162, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](163, "a", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](164);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](165, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](166, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](167);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](168, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](169, "a", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](170);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](171, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](172, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](173);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](174, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](175, "ion-row", 46)(176, "ion-checkbox", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("ionChange", function ClaimSubmissionPage_form_16_Template_ion_checkbox_ionChange_176_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r200);
      const ctx_r199 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r199.checkboxChange($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](177, "span", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](178);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](179, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](180, ClaimSubmissionPage_form_16_div_180_Template, 4, 3, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](181, "p", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](182);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](183, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](184, "ion-item", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](185, "ion-input", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](186, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](187, "p", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](188);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](189, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](190, "ion-item", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](191, "ion-input", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](192, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](193, "p", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](194);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](195, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](196, "ion-item", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](197, "ion-input", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](198, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](199, "p", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](200);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](201, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](202, "ion-item", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](203, "ion-input", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](204, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](205, "p", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](206);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](207, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](208, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](209, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](210, "ion-row")(211, "ion-item", 92)(212, "ion-col", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](213, "canvas", 58, 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](215, "ion-col", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](216, "ion-col", 61)(217, "div", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function ClaimSubmissionPage_form_16_Template_div_click_217_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r200);
      const ctx_r201 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r201.refreshCaptcha(ctx_r201.totalDisabilityClaimForm));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](218, "i", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](219, "ion-item", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](220, "ion-input", 64, 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](222, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](223, ClaimSubmissionPage_form_16_div_223_Template, 4, 3, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](224, "p", 66)(225, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](226, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](227);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](228, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](229, "ion-row")(230, "ion-col", 67)(231, "ion-button", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function ClaimSubmissionPage_form_16_Template_ion_button_click_231_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r200);
      const ctx_r202 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r202.submitTotalClaimForm(ctx_r202.totalDisabilityClaimForm));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](232);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](233, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("formGroup", ctx_r2.totalDisabilityClaimForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](3, 93, "clms_submison_permntDisablty.planType"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("interfaceOptions", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpureFunction0"](187, _c2));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngForOf", ctx_r2.typeOfPlans);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](11, 95, "clms_submison_permntDisablty.policyNo"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](16, 97, "clms_submison_permntDisablty.policyNo"));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r2.totalDisabilityClaimForm.get("contract_no").hasError("minlength") && ctx_r2.totalDisabilityClaimForm.get("contract_no").touched);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r2.totalDisabilityClaimForm.get("contract_no").hasError("required") && ctx_r2.totalDisabilityClaimForm.get("contract_no").touched);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r2.totalDisabilityClaimForm.get("contract_no").hasError("pattern") && ctx_r2.totalDisabilityClaimForm.get("contract_no").touched && !ctx_r2.totalDisabilityClaimForm.get("contract_no").hasError("minlength"));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r2.totalDisabilityClaimForm.get("contract_no").hasError("maxlength") && ctx_r2.totalDisabilityClaimForm.get("contract_no").touched && !ctx_r2.totalDisabilityClaimForm.get("contract_no").hasError("pattern"));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](23, 99, "clms_submison_permntDisablty.lifeAssured"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](28, 101, "clms_submison_permntDisablty.lifeAssured"));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r2.totalDisabilityClaimForm.get("insuarance_pername_name").hasError("required") && ctx_r2.totalDisabilityClaimForm.get("insuarance_pername_name").touched);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r2.totalDisabilityClaimForm.get("insuarance_pername_name").hasError("minlength") && ctx_r2.totalDisabilityClaimForm.get("insuarance_pername_name").touched);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r2.totalDisabilityClaimForm.get("insuarance_pername_name").hasError("pattern") && ctx_r2.totalDisabilityClaimForm.get("insuarance_pername_name").touched && !ctx_r2.totalDisabilityClaimForm.get("insuarance_pername_name").hasError("minlength"));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r2.totalDisabilityClaimForm.get("insuarance_pername_name").hasError("maxlength") && ctx_r2.totalDisabilityClaimForm.get("insuarance_pername_name").touched && !ctx_r2.totalDisabilityClaimForm.get("insuarance_pername_name").hasError("pattern"));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](35, 103, "clms_submison_permntDisablty.NRICNo"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](40, 105, "clms_submison_permntDisablty.NRICNo"));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r2.totalDisabilityClaimForm.get("nric_no").hasError("required") && ctx_r2.totalDisabilityClaimForm.get("nric_no").touched);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r2.totalDisabilityClaimForm.get("nric_no").hasError("minlength") && ctx_r2.totalDisabilityClaimForm.get("nric_no").touched);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r2.totalDisabilityClaimForm.get("nric_no").hasError("pattern") && ctx_r2.totalDisabilityClaimForm.get("nric_no").touched && !ctx_r2.totalDisabilityClaimForm.get("nric_no").hasError("minlength"));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r2.totalDisabilityClaimForm.get("nric_no").hasError("maxlength") && ctx_r2.totalDisabilityClaimForm.get("nric_no").touched && !ctx_r2.totalDisabilityClaimForm.get("nric_no").hasError("pattern"));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](47, 107, "clms_submison_permntDisablty.address"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](52, 109, "clms_submison_permntDisablty.address"));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r2.totalDisabilityClaimForm.get("address").hasError("required") && ctx_r2.totalDisabilityClaimForm.get("address").touched);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r2.totalDisabilityClaimForm.get("address").hasError("minlength") && ctx_r2.totalDisabilityClaimForm.get("address").touched);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r2.totalDisabilityClaimForm.get("address").hasError("pattern") && ctx_r2.totalDisabilityClaimForm.get("address").touched);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](58, 111, "clms_submison_permntDisablty.postCode"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](63, 113, "clms_submison_permntDisablty.postCode"));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r2.totalDisabilityClaimForm.get("postcode").hasError("required") && ctx_r2.totalDisabilityClaimForm.get("postcode").touched);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r2.totalDisabilityClaimForm.get("postcode").hasError("minlength") && ctx_r2.totalDisabilityClaimForm.get("postcode").touched);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r2.totalDisabilityClaimForm.get("postcode").hasError("pattern") && ctx_r2.totalDisabilityClaimForm.get("postcode").touched && !ctx_r2.totalDisabilityClaimForm.get("postcode").hasError("minlength"));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r2.totalDisabilityClaimForm.get("postcode").hasError("maxlength") && ctx_r2.totalDisabilityClaimForm.get("postcode").touched && !ctx_r2.totalDisabilityClaimForm.get("postcode").hasError("pattern"));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](70, 115, "clms_submison_permntDisablty.state"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("interfaceOptions", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpureFunction0"](188, _c2));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngForOf", ctx_r2.claimantsStates);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](78, 117, "clms_submison_permntDisablty.telephoneNo"));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](81, 119, "clms_submison_permntDisablty.telephoneNo"));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](84, 121, "clms_submison_permntDisablty.mobileNo"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](89, 123, "clms_submison_permntDisablty.mobileNo"));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r2.totalDisabilityClaimForm.get("mobile").hasError("required") && ctx_r2.totalDisabilityClaimForm.get("mobile").touched);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r2.totalDisabilityClaimForm.get("mobile").hasError("validateNonZeroVal"));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r2.totalDisabilityClaimForm.get("mobile").hasError("minlength"));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r2.totalDisabilityClaimForm.get("mobile").hasError("pattern") && !ctx_r2.totalDisabilityClaimForm.get("mobile").hasError("minlength"));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r2.totalDisabilityClaimForm.get("mobile").hasError("maxlength") && !ctx_r2.totalDisabilityClaimForm.get("mobile").hasError("pattern"));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](97, 125, "clms_submison_permntDisablty.email"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](102, 127, "clms_submison_permntDisablty.email"));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r2.totalDisabilityClaimForm.get("email").hasError("required") && ctx_r2.totalDisabilityClaimForm.get("email").touched);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", !ctx_r2.totalDisabilityClaimForm.get("email").hasError("required") && ctx_r2.totalDisabilityClaimForm.get("email").hasError("pattern"));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](107, 129, "clms_submison_permntDisablty.occupationPrirDisabilty"));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](110, 131, "clms_submison_permntDisablty.plcHldr_occupationPrirDisabilty"));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](113, 133, "clms_submison_permntDisablty.employd"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("interfaceOptions", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpureFunction0"](189, _c2));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngForOf", ctx_r2.radioValues);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](119, 135, "clms_submison_permntDisablty.bankName"));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("interfaceOptions", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpureFunction0"](190, _c2));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngForOf", ctx_r2.claimantsBanks);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](125, 137, "clms_submison_permntDisablty.bankAccName"));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](128, 139, "clms_submison_permntDisablty.bankAccName"));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r2.totalDisabilityClaimForm.get("claimants_act_name").hasError("pattern"));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r2.totalDisabilityClaimForm.get("claimants_act_name").hasError("maxlength") && !ctx_r2.totalDisabilityClaimForm.get("claimants_act_name").hasError("pattern"));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](133, 141, "clms_submison_permntDisablty.bankAccNo"));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](136, 143, "clms_submison_permntDisablty.bankAccNo"));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r2.totalDisabilityClaimForm.get("claimants_act_no").hasError("pattern"));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r2.totalDisabilityClaimForm.get("claimants_act_no").hasError("maxlength") && !ctx_r2.totalDisabilityClaimForm.get("claimants_act_no").hasError("pattern"));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](141, 145, "clms_submison_permntDisablty.uploadFile"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngForOf", ctx_r2.totalDisabilityClaimForm.controls.attachments.controls);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r2.totalDisabilityClaimForm.controls.attachments.controls[ctx_r2.totalDisabilityClaimForm.controls.attachments.length - 1].controls.filename.touched && ctx_r2.totalDisabilityClaimForm.controls.attachments.controls[ctx_r2.totalDisabilityClaimForm.controls.attachments.length - 1].controls.filename.hasError("required"));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", !ctx_r2.totalDisabilityClaimForm.controls.attachments.controls[0].controls.filename.hasError("required"));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](152, 147, "clms_submison_permntDisablty.claim_disclaimer"));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](159, 149, "clms_submison_permntDisablty.Disclaimer_title1"));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](162, 151, "clms_submison_permntDisablty.claim_disclaimer_text1"));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](165, 153, "clms_submison_permntDisablty.Disclaimer_title2"));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](168, 155, "clms_submison_permntDisablty.claim_disclaimer_text2"));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](171, 157, "clms_submison_permntDisablty.Disclaimer_title3"));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](174, 159, "clms_submison_permntDisablty.claim_disclaimer_text3"));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("checked", ctx_r2.disclaimer_terms);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](179, 161, "clms_submison_permntDisablty.agree"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r2.totalDisabilityClaimForm.controls.disclaimer.value === false && ctx_r2.totalDisabilityClaimForm.get("disclaimer").touched);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](183, 163, "clms_submison_permntDisablty.remark"));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](186, 165, "clms_submison_permntDisablty.remark"));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](189, 167, "clms_submison_permntDisablty.agent_Name"));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](192, 169, "clms_submison_permntDisablty.agent_Name"));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](195, 171, "clms_submison_permntDisablty.agent_No"));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](198, 173, "clms_submison_permntDisablty.agent_No"));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](201, 175, "clms_submison_permntDisablty.agent_Mobile"));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](204, 177, "clms_submison_permntDisablty.agent_Mobile"));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](207, 179, "enterthetext"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](222, 181, "entertextintheaboveimage"));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r2.totalDisabilityClaimForm.get("captcha").hasError("required") && ctx_r2.totalDisabilityClaimForm.get("captcha").touched && !ctx_r2.isValidUser);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](228, 183, "allfieldsarecompulsory"));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("disabled", !ctx_r2.totalDisabilityClaimForm.valid || !ctx_r2.disclaimer_terms);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](233, 185, "clms_submison_permntDisablty.sbtClms"));
  }
}
function ClaimSubmissionPage_form_17_ion_select_option_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "ion-select-option", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const plan_r245 = ctx.$implicit;
    const i_r246 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("value", plan_r245)("selected", i_r246 === 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](plan_r245);
  }
}
function ClaimSubmissionPage_form_17_div_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 70)(1, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](3, 1, "clms_submison_hsptlClm.err_planTypeReq"));
  }
}
function ClaimSubmissionPage_form_17_div_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 70)(1, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](3, 1, "clms_submison_hsptlClm.err_policyNoReq"));
  }
}
function ClaimSubmissionPage_form_17_div_19_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 70)(1, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](3, 1, "clms_submison_hsptlClm.policyNoLength_req"));
  }
}
function ClaimSubmissionPage_form_17_div_20_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 70)(1, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](3, 1, "clms_submison_hsptlClm.policyNoPattern_req"));
  }
}
function ClaimSubmissionPage_form_17_div_21_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 70)(1, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](3, 1, "clms_submison_hsptlClm.policyNoPattern_req"));
  }
}
function ClaimSubmissionPage_form_17_div_30_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 70)(1, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](3, 1, "clms_submison_hsptlClm.err_lifeAssuredReq"));
  }
}
function ClaimSubmissionPage_form_17_div_31_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 70)(1, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](3, 1, "clms_submison_hsptlClm.lifeAssuredLength_req"));
  }
}
function ClaimSubmissionPage_form_17_div_32_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 70)(1, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](3, 1, "clms_submison_hsptlClm.lifeAssuredPattern_req"));
  }
}
function ClaimSubmissionPage_form_17_div_33_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 70)(1, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](3, 1, "clms_submison_hsptlClm.lifeAssuredPattern_req"));
  }
}
function ClaimSubmissionPage_form_17_div_42_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 70)(1, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](3, 1, "clms_submison_hsptlClm.err_NRICNoReq"));
  }
}
function ClaimSubmissionPage_form_17_div_43_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 70)(1, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](3, 1, "clms_submison_hsptlClm.err_NRICNoLength_req"));
  }
}
function ClaimSubmissionPage_form_17_div_44_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 70)(1, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](3, 1, "clms_submison_hsptlClm.err_NRICNoPattern_req"));
  }
}
function ClaimSubmissionPage_form_17_div_45_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 70)(1, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](3, 1, "clms_submison_hsptlClm.err_NRICNoPattern_req"));
  }
}
function ClaimSubmissionPage_form_17_div_54_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 70)(1, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](3, 1, "clms_submison_hsptlClm.err_addressReq"));
  }
}
function ClaimSubmissionPage_form_17_div_55_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 70)(1, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](3, 1, "clms_submison_hsptlClm.err_addressLength_req"));
  }
}
function ClaimSubmissionPage_form_17_div_56_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 70)(1, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](3, 1, "clms_submison_hsptlClm.err_addressLength_req"));
  }
}
function ClaimSubmissionPage_form_17_div_65_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 70)(1, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](3, 1, "clms_submison_hsptlClm.err_postalCodeReq"));
  }
}
function ClaimSubmissionPage_form_17_div_66_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 70)(1, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](3, 1, "clms_submison_hsptlClm.err_postalCodeLength_req"));
  }
}
function ClaimSubmissionPage_form_17_div_67_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 70)(1, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](3, 1, "clms_submison_hsptlClm.err_postalCodePattern_req"));
  }
}
function ClaimSubmissionPage_form_17_div_68_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 70)(1, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](3, 1, "clms_submison_hsptlClm.err_postalCodePattern_req"));
  }
}
function ClaimSubmissionPage_form_17_ion_select_option_76_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "ion-select-option", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const state_r247 = ctx.$implicit;
    const i_r248 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("value", state_r247)("selected", i_r248 === 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](state_r247);
  }
}
function ClaimSubmissionPage_form_17_div_77_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 70)(1, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](3, 1, "clms_submison_hsptlClm.err_stateReq"));
  }
}
function ClaimSubmissionPage_form_17_div_92_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 70)(1, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](3, 1, "clms_submison_hsptlClm.err_mobileNoReq"));
  }
}
function ClaimSubmissionPage_form_17_div_93_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 70)(1, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](3, 1, "clms_submison_hsptlClm.err_invalidMno"));
  }
}
function ClaimSubmissionPage_form_17_div_94_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 70)(1, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](3, 1, "clms_submison_hsptlClm.err_mobileNoLength_req"));
  }
}
function ClaimSubmissionPage_form_17_div_95_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 70)(1, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](3, 1, "clms_submison_hsptlClm.err_mobileNoLength_req"));
  }
}
function ClaimSubmissionPage_form_17_div_96_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 70)(1, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](3, 1, "clms_submison_hsptlClm.err_mobileNoLength_req"));
  }
}
function ClaimSubmissionPage_form_17_div_105_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 70)(1, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](3, 1, "clms_submison_hsptlClm.err_emailReq"));
  }
}
function ClaimSubmissionPage_form_17_div_106_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 70)(1, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](3, 1, "clms_submison_hsptlClm.err_emailValid"));
  }
}
function ClaimSubmissionPage_form_17_ion_select_option_112_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "ion-select-option", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const bank_r249 = ctx.$implicit;
    const i_r250 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("value", bank_r249)("selected", i_r250 === 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](bank_r249);
  }
}
function ClaimSubmissionPage_form_17_div_119_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 70)(1, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](3, 1, "clms_submison_hsptlClm.err_ClmAccountNamePattern_req"));
  }
}
function ClaimSubmissionPage_form_17_div_120_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 70)(1, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](3, 1, "clms_submison_hsptlClm.err_ClmAccountNamePattern_req"));
  }
}
function ClaimSubmissionPage_form_17_div_127_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 70)(1, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](3, 1, "clms_submison_hsptlClm.err_ClmAccountNoPattern_req"));
  }
}
function ClaimSubmissionPage_form_17_div_128_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 70)(1, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](3, 1, "clms_submison_hsptlClm.err_ClmAccountNoPattern_req"));
  }
}
function ClaimSubmissionPage_form_17_ion_grid_135_Template(rf, ctx) {
  if (rf & 1) {
    const _r254 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "ion-grid", 73)(1, "ion-row", 74)(2, "ion-col", 75)(3, "ion-item", 13)(4, "ion-input", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function ClaimSubmissionPage_form_17_ion_grid_135_Template_ion_input_click_4_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r254);
      const i_r252 = restoredCtx.index;
      const ctx_r253 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r253.chooseCameraOptions(i_r252, "hospitalClaimForm"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](6, "ion-icon", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function ClaimSubmissionPage_form_17_ion_grid_135_Template_ion_icon_click_6_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r254);
      const i_r252 = restoredCtx.index;
      const ctx_r255 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r255.chooseCameraOptions(i_r252, "hospitalClaimForm"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](7, "ion-icon", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function ClaimSubmissionPage_form_17_ion_grid_135_Template_ion_icon_click_7_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r254);
      const i_r252 = restoredCtx.index;
      const ctx_r256 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r256.removeAttachmentField(i_r252, "hospitalClaimForm"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()()()();
  }
  if (rf & 2) {
    const i_r252 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("formGroupName", i_r252);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](5, 2, "clms_submison_house.plcHldr_uploadDoc"));
  }
}
function ClaimSubmissionPage_form_17_div_136_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 94)(1, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](3, 1, "clms_submison_hsptlClm.err_uploadDocReq"));
  }
}
function ClaimSubmissionPage_form_17_ion_button_139_Template(rf, ctx) {
  if (rf & 1) {
    const _r258 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "ion-button", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function ClaimSubmissionPage_form_17_ion_button_139_Template_ion_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r258);
      const ctx_r257 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r257.addNewAttachmentField("hospitalClaimForm"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1, " Add More");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r240 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("disabled", ctx_r240.hospitalClaimForm.controls.attachments.controls[ctx_r240.hospitalClaimForm.controls.attachments.length - 1].controls.filename.hasError("required"));
  }
}
function ClaimSubmissionPage_form_17_div_170_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div")(1, "span", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](3, 1, "clms_submison_hsptlClm.claim_disclaimer_req"));
  }
}
function ClaimSubmissionPage_form_17_div_213_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 70)(1, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](3, 1, "captcha_req"));
  }
}
function ClaimSubmissionPage_form_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r260 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "form", 11)(1, "p", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](4, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](5, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](6, "div", 13)(7, "ion-select", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](8, ClaimSubmissionPage_form_17_ion_select_option_8_Template, 2, 3, "ion-select-option", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](9, ClaimSubmissionPage_form_17_div_9_Template, 4, 3, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](10, "p", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](12, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](13, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](14, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](15, "ion-item", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](16, "ion-input", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](17, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](18, ClaimSubmissionPage_form_17_div_18_Template, 4, 3, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](19, ClaimSubmissionPage_form_17_div_19_Template, 4, 3, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](20, ClaimSubmissionPage_form_17_div_20_Template, 4, 3, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](21, ClaimSubmissionPage_form_17_div_21_Template, 4, 3, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](22, "p", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](23);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](24, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](25, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](26, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](27, "ion-item", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](28, "ion-input", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](29, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](30, ClaimSubmissionPage_form_17_div_30_Template, 4, 3, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](31, ClaimSubmissionPage_form_17_div_31_Template, 4, 3, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](32, ClaimSubmissionPage_form_17_div_32_Template, 4, 3, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](33, ClaimSubmissionPage_form_17_div_33_Template, 4, 3, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](34, "p", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](35);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](36, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](37, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](38, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](39, "ion-item", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](40, "ion-input", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](41, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](42, ClaimSubmissionPage_form_17_div_42_Template, 4, 3, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](43, ClaimSubmissionPage_form_17_div_43_Template, 4, 3, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](44, ClaimSubmissionPage_form_17_div_44_Template, 4, 3, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](45, ClaimSubmissionPage_form_17_div_45_Template, 4, 3, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](46, "p", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](47);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](48, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](49, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](50, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](51, "ion-item", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](52, "ion-input", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](53, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](54, ClaimSubmissionPage_form_17_div_54_Template, 4, 3, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](55, ClaimSubmissionPage_form_17_div_55_Template, 4, 3, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](56, ClaimSubmissionPage_form_17_div_56_Template, 4, 3, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](57, "p", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](58);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](59, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](60, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](61, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](62, "ion-item", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](63, "ion-input", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](64, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](65, ClaimSubmissionPage_form_17_div_65_Template, 4, 3, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](66, ClaimSubmissionPage_form_17_div_66_Template, 4, 3, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](67, ClaimSubmissionPage_form_17_div_67_Template, 4, 3, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](68, ClaimSubmissionPage_form_17_div_68_Template, 4, 3, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](69, "p", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](70);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](71, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](72, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](73, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](74, "div", 13)(75, "ion-select", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](76, ClaimSubmissionPage_form_17_ion_select_option_76_Template, 2, 3, "ion-select-option", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](77, ClaimSubmissionPage_form_17_div_77_Template, 4, 3, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](78, "p", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](79);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](80, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](81, "ion-item", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](82, "ion-input", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](83, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](84, "p", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](85);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](86, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](87, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](88, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](89, "ion-item", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](90, "ion-input", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](91, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](92, ClaimSubmissionPage_form_17_div_92_Template, 4, 3, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](93, ClaimSubmissionPage_form_17_div_93_Template, 4, 3, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](94, ClaimSubmissionPage_form_17_div_94_Template, 4, 3, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](95, ClaimSubmissionPage_form_17_div_95_Template, 4, 3, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](96, ClaimSubmissionPage_form_17_div_96_Template, 4, 3, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](97, "p", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](98);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](99, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](100, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](101, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](102, "ion-item", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](103, "ion-input", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](104, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](105, ClaimSubmissionPage_form_17_div_105_Template, 4, 3, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](106, ClaimSubmissionPage_form_17_div_106_Template, 4, 3, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](107, "p", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](108);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](109, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](110, "div", 13)(111, "ion-select", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](112, ClaimSubmissionPage_form_17_ion_select_option_112_Template, 2, 3, "ion-select-option", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](113, "p", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](114);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](115, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](116, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](117, "ion-input", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](118, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](119, ClaimSubmissionPage_form_17_div_119_Template, 4, 3, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](120, ClaimSubmissionPage_form_17_div_120_Template, 4, 3, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](121, "p", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](122);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](123, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](124, "ion-item", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](125, "ion-input", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](126, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](127, ClaimSubmissionPage_form_17_div_127_Template, 4, 3, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](128, ClaimSubmissionPage_form_17_div_128_Template, 4, 3, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](129, "p", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](130);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](131, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](132, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](133, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](134, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](135, ClaimSubmissionPage_form_17_ion_grid_135_Template, 8, 4, "ion-grid", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](136, ClaimSubmissionPage_form_17_div_136_Template, 4, 3, "div", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](137, "ion-row")(138, "ion-col", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](139, ClaimSubmissionPage_form_17_ion_button_139_Template, 2, 1, "ion-button", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](140, "p", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](141);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](142, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](143, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](144, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](145, "ion-item", 43)(146, "div")(147, "a", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](148);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](149, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](150, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](151);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](152, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](153, "a", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](154);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](155, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](156, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](157);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](158, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](159, "a", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](160);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](161, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](162, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](163);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](164, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](165, "ion-row", 46)(166, "ion-checkbox", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("ionChange", function ClaimSubmissionPage_form_17_Template_ion_checkbox_ionChange_166_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r260);
      const ctx_r259 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r259.checkboxChange($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](167, "span", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](168);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](169, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](170, ClaimSubmissionPage_form_17_div_170_Template, 4, 3, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](171, "p", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](172);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](173, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](174, "ion-item", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](175, "ion-input", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](176, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](177, "p", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](178);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](179, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](180, "ion-item", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](181, "ion-input", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](182, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](183, "p", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](184);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](185, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](186, "ion-item", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](187, "ion-input", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](188, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](189, "p", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](190);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](191, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](192, "ion-item", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](193, "ion-input", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](194, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](195, "p", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](196);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](197, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](198, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](199, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](200, "ion-row")(201, "ion-item", 92)(202, "ion-col", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](203, "canvas", 58, 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](205, "ion-col", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](206, "ion-col", 61)(207, "div", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function ClaimSubmissionPage_form_17_Template_div_click_207_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r260);
      const ctx_r261 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r261.refreshCaptcha(ctx_r261.hospitalClaimForm));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](208, "i", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](209, "ion-item", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](210, "ion-input", 64, 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](212, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](213, ClaimSubmissionPage_form_17_div_213_Template, 4, 3, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](214, "p", 66)(215, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](216, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](217);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](218, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](219, "ion-row")(220, "ion-col", 67)(221, "ion-button", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function ClaimSubmissionPage_form_17_Template_ion_button_click_221_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r260);
      const ctx_r262 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r262.submitHospitalClaimForm(ctx_r262.hospitalClaimForm));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](222);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](223, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("formGroup", ctx_r3.hospitalClaimForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](3, 90, "clms_submison_hsptlClm.planType"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("interfaceOptions", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpureFunction0"](178, _c2));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngForOf", ctx_r3.typeOfPlans);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r3.hospitalClaimForm.get("typeOfPlan").hasError("required") && ctx_r3.hospitalClaimForm.get("typeOfPlan").touched);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](12, 92, "clms_submison_hsptlClm.policyNo"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](17, 94, "clms_submison_hsptlClm.policyNo"));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r3.hospitalClaimForm.get("contract_no").hasError("required") && ctx_r3.hospitalClaimForm.get("contract_no").touched);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r3.hospitalClaimForm.get("contract_no").hasError("minlength") && ctx_r3.hospitalClaimForm.get("contract_no").touched);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r3.hospitalClaimForm.get("contract_no").hasError("pattern") && ctx_r3.hospitalClaimForm.get("contract_no").touched && !ctx_r3.hospitalClaimForm.get("contract_no").hasError("minlength"));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r3.hospitalClaimForm.get("contract_no").hasError("maxlength") && ctx_r3.hospitalClaimForm.get("contract_no").touched && !ctx_r3.hospitalClaimForm.get("contract_no").hasError("pattern"));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](24, 96, "clms_submison_hsptlClm.lifeAssured"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](29, 98, "clms_submison_hsptlClm.lifeAssured"));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r3.hospitalClaimForm.get("insuarance_pername_name").hasError("required") && ctx_r3.hospitalClaimForm.get("insuarance_pername_name").touched);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r3.hospitalClaimForm.get("insuarance_pername_name").hasError("minlength") && ctx_r3.hospitalClaimForm.get("insuarance_pername_name").touched);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r3.hospitalClaimForm.get("insuarance_pername_name").hasError("pattern") && ctx_r3.hospitalClaimForm.get("insuarance_pername_name").touched && !ctx_r3.hospitalClaimForm.get("insuarance_pername_name").hasError("minlength"));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r3.hospitalClaimForm.get("insuarance_pername_name").hasError("maxlength") && ctx_r3.hospitalClaimForm.get("insuarance_pername_name").touched && !ctx_r3.hospitalClaimForm.get("insuarance_pername_name").hasError("pattrn"));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](36, 100, "clms_submison_hsptlClm.NRICNo"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](41, 102, "clms_submison_hsptlClm.NRICNo"));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r3.hospitalClaimForm.get("nric_no").hasError("required") && ctx_r3.hospitalClaimForm.get("nric_no").touched);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r3.hospitalClaimForm.get("nric_no").hasError("minlength") && ctx_r3.hospitalClaimForm.get("nric_no").touched);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r3.hospitalClaimForm.get("nric_no").hasError("pattern") && ctx_r3.hospitalClaimForm.get("nric_no").touched && !ctx_r3.hospitalClaimForm.get("nric_no").hasError("minlength"));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r3.hospitalClaimForm.get("nric_no").hasError("maxlength") && ctx_r3.hospitalClaimForm.get("nric_no").touched && !ctx_r3.hospitalClaimForm.get("nric_no").hasError("pattern"));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](48, 104, "clms_submison_hsptlClm.address"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](53, 106, "clms_submison_hsptlClm.address"));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r3.hospitalClaimForm.get("address").hasError("required") && ctx_r3.hospitalClaimForm.get("address").touched);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r3.hospitalClaimForm.get("address").hasError("minlength") && ctx_r3.hospitalClaimForm.get("address").touched);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r3.hospitalClaimForm.get("address").hasError("maxlength") && ctx_r3.hospitalClaimForm.get("address").touched);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](59, 108, "clms_submison_hsptlClm.postCode"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](64, 110, "clms_submison_hsptlClm.postCode"));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r3.hospitalClaimForm.get("postcode").hasError("required") && ctx_r3.hospitalClaimForm.get("postcode").touched);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r3.hospitalClaimForm.get("postcode").hasError("minlength") && ctx_r3.hospitalClaimForm.get("postcode").touched);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r3.hospitalClaimForm.get("postcode").hasError("pattern") && ctx_r3.hospitalClaimForm.get("postcode").touched && !ctx_r3.hospitalClaimForm.get("postcode").hasError("minlength"));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r3.hospitalClaimForm.get("postcode").hasError("maxlength") && ctx_r3.hospitalClaimForm.get("postcode").touched && !ctx_r3.hospitalClaimForm.get("postcode").hasError("pattern"));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](71, 112, "clms_submison_hsptlClm.state"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("interfaceOptions", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpureFunction0"](179, _c2));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngForOf", ctx_r3.claimantsStates);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r3.hospitalClaimForm.get("state").hasError("required") && ctx_r3.hospitalClaimForm.get("state").touched);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](80, 114, "clms_submison_hsptlClm.telephoneNo"));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](83, 116, "clms_submison_hsptlClm.telephoneNo"));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](86, 118, "clms_submison_hsptlClm.mobileNo"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](91, 120, "clms_submison_hsptlClm.mobileNo"));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r3.hospitalClaimForm.get("mobile").hasError("required") && ctx_r3.hospitalClaimForm.get("mobile").touched);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r3.hospitalClaimForm.get("mobile").hasError("validateNonZeroVal"));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r3.hospitalClaimForm.get("mobile").hasError("minlength"));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r3.hospitalClaimForm.get("mobile").hasError("pattern") && !ctx_r3.hospitalClaimForm.get("mobile").hasError("minlength"));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r3.hospitalClaimForm.get("mobile").hasError("maxlength") && !ctx_r3.hospitalClaimForm.get("mobile").hasError("pattern"));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](99, 122, "clms_submison_hsptlClm.email"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](104, 124, "clms_submison_hsptlClm.email"));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r3.hospitalClaimForm.get("email").hasError("required") && ctx_r3.hospitalClaimForm.get("email").touched);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", !ctx_r3.hospitalClaimForm.get("email").hasError("required") && ctx_r3.hospitalClaimForm.get("email").hasError("pattern"));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](109, 126, "clms_submison_hsptlClm.bankName"));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("interfaceOptions", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpureFunction0"](180, _c2));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngForOf", ctx_r3.claimantsBanks);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](115, 128, "clms_submison_hsptlClm.bankAccName"));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](118, 130, "clms_submison_hsptlClm.bankAccName"));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r3.hospitalClaimForm.get("claimants_act_name").hasError("pattern"));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r3.hospitalClaimForm.get("claimants_act_name").hasError("maxlength") && !ctx_r3.hospitalClaimForm.get("claimants_act_name").hasError("pattern"));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](123, 132, "clms_submison_hsptlClm.bankAccNo"));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](126, 134, "clms_submison_hsptlClm.bankAccNo"));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r3.hospitalClaimForm.get("claimants_act_no").hasError("pattern"));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r3.hospitalClaimForm.get("claimants_act_no").hasError("maxlength") && !ctx_r3.hospitalClaimForm.get("claimants_act_no").hasError("pattern"));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](131, 136, "clms_submison_hsptlClm.uploadFile"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngForOf", ctx_r3.hospitalClaimForm.controls.attachments.controls);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r3.hospitalClaimForm.controls.attachments.controls[ctx_r3.hospitalClaimForm.controls.attachments.length - 1].controls.filename.touched && ctx_r3.hospitalClaimForm.controls.attachments.controls[ctx_r3.hospitalClaimForm.controls.attachments.length - 1].controls.filename.hasError("required"));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", !ctx_r3.hospitalClaimForm.controls.attachments.controls[0].controls.filename.hasError("required"));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](142, 138, "clms_submison_hsptlClm.claim_disclaimer"));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](149, 140, "clms_submison_hsptlClm.Disclaimer_title1"));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](152, 142, "clms_submison_hsptlClm.claim_disclaimer_text1"));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](155, 144, "clms_submison_hsptlClm.Disclaimer_title2"));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](158, 146, "clms_submison_hsptlClm.claim_disclaimer_text2"));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](161, 148, "clms_submison_hsptlClm.Disclaimer_title3"));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](164, 150, "clms_submison_hsptlClm.claim_disclaimer_text3"));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("checked", ctx_r3.disclaimer_terms);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](169, 152, "clms_submison_hsptlClm.agree"));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r3.hospitalClaimForm.controls.disclaimer.value === false && ctx_r3.hospitalClaimForm.get("disclaimer").touched);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](173, 154, "clms_submison_hsptlClm.remark"));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](176, 156, "clms_submison_hsptlClm.remark"));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](179, 158, "clms_submison_hsptlClm.agent_Name"));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](182, 160, "clms_submison_hsptlClm.agent_Name"));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](185, 162, "clms_submison_hsptlClm.agent_No"));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](188, 164, "clms_submison_hsptlClm.agent_No"));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](191, 166, "clms_submison_hsptlClm.agent_Mobile"));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](194, 168, "clms_submison_hsptlClm.agent_Mobile"));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](197, 170, "enterthetext"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](212, 172, "entertextintheaboveimage"));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r3.hospitalClaimForm.get("captcha").hasError("required") && ctx_r3.hospitalClaimForm.get("captcha").touched && !ctx_r3.isValidUser);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](218, 174, "allfieldsarecompulsory"));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("disabled", !ctx_r3.hospitalClaimForm.valid || !ctx_r3.disclaimer_terms);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](223, 176, "clms_submison_hsptlClm.sbtClms"));
  }
}
function ClaimSubmissionPage_form_18_ion_select_option_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "ion-select-option", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const plan_r308 = ctx.$implicit;
    const i_r309 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("value", plan_r308)("selected", i_r309 === 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](plan_r308);
  }
}
function ClaimSubmissionPage_form_18_div_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 70)(1, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](3, 1, "clms_submison_accidentalClm.err_planTypeReq"));
  }
}
function ClaimSubmissionPage_form_18_div_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 70)(1, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](3, 1, "clms_submison_accidentalClm.err_policyNoReq"));
  }
}
function ClaimSubmissionPage_form_18_div_19_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 70)(1, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](3, 1, "clms_submison_accidentalClm.policyNoLength_req"));
  }
}
function ClaimSubmissionPage_form_18_div_20_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 70)(1, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](3, 1, "clms_submison_accidentalClm.policyNoPattern_req"));
  }
}
function ClaimSubmissionPage_form_18_div_21_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 70)(1, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](3, 1, "clms_submison_accidentalClm.policyNoPattern_req"));
  }
}
function ClaimSubmissionPage_form_18_div_30_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 70)(1, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](3, 1, "clms_submison_accidentalClm.err_lifeAssuredReq"));
  }
}
function ClaimSubmissionPage_form_18_div_31_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 70)(1, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](3, 1, "clms_submison_accidentalClm.lifeAssuredLength_req"));
  }
}
function ClaimSubmissionPage_form_18_div_32_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 70)(1, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](3, 1, "clms_submison_accidentalClm.lifeAssuredPattern_req"));
  }
}
function ClaimSubmissionPage_form_18_div_33_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 70)(1, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](3, 1, "clms_submison_accidentalClm.lifeAssuredPattern_req"));
  }
}
function ClaimSubmissionPage_form_18_div_42_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 70)(1, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](3, 1, "clms_submison_accidentalClm.err_NRICNoReq"));
  }
}
function ClaimSubmissionPage_form_18_div_43_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 70)(1, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](3, 1, "clms_submison_accidentalClm.err_NRICNoLength_req"));
  }
}
function ClaimSubmissionPage_form_18_div_44_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 70)(1, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](3, 1, "clms_submison_accidentalClm.err_NRICNoPattern_req"));
  }
}
function ClaimSubmissionPage_form_18_div_45_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 70)(1, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](3, 1, "clms_submison_accidentalClm.err_NRICNoPattern_req"));
  }
}
function ClaimSubmissionPage_form_18_div_54_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 70)(1, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](3, 1, "clms_submison_accidentalClm.err_addressReq"));
  }
}
function ClaimSubmissionPage_form_18_div_55_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 70)(1, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](3, 1, "clms_submison_accidentalClm.err_addressLength_req"));
  }
}
function ClaimSubmissionPage_form_18_div_56_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 70)(1, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](3, 1, "clms_submison_accidentalClm.err_addressMaxLength_req"));
  }
}
function ClaimSubmissionPage_form_18_div_65_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 70)(1, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](3, 1, "clms_submison_accidentalClm.err_postalCodeReq"));
  }
}
function ClaimSubmissionPage_form_18_div_66_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 70)(1, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](3, 1, "clms_submison_accidentalClm.err_postalCodeLength_req"));
  }
}
function ClaimSubmissionPage_form_18_div_67_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 70)(1, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](3, 1, "clms_submison_accidentalClm.err_postalCodePattern_req"));
  }
}
function ClaimSubmissionPage_form_18_div_68_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 70)(1, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](3, 1, "clms_submison_accidentalClm.err_postalCodePattern_req"));
  }
}
function ClaimSubmissionPage_form_18_ion_select_option_76_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "ion-select-option", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const state_r310 = ctx.$implicit;
    const i_r311 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("value", state_r310)("selected", i_r311 === 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](state_r310);
  }
}
function ClaimSubmissionPage_form_18_div_77_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 70)(1, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](3, 1, "clms_submison_accidentalClm.err_stateReq"));
  }
}
function ClaimSubmissionPage_form_18_div_92_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 70)(1, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](3, 1, "clms_submison_accidentalClm.err_mobileNoReq"));
  }
}
function ClaimSubmissionPage_form_18_div_93_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 70)(1, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](3, 1, "clms_submison_accidentalClm.err_invalidMno"));
  }
}
function ClaimSubmissionPage_form_18_div_94_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 70)(1, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](3, 1, "clms_submison_accidentalClm.err_mobileNoLength_req"));
  }
}
function ClaimSubmissionPage_form_18_div_95_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 70)(1, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](3, 1, "clms_submison_accidentalClm.err_mobileNoLength_req"));
  }
}
function ClaimSubmissionPage_form_18_div_96_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 70)(1, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](3, 1, "clms_submison_accidentalClm.err_mobileNoLength_req"));
  }
}
function ClaimSubmissionPage_form_18_div_105_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 70)(1, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](3, 1, "clms_submison_accidentalClm.err_emailReq"));
  }
}
function ClaimSubmissionPage_form_18_div_106_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 70)(1, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](3, 1, "clms_submison_accidentalClm.err_emailValid"));
  }
}
function ClaimSubmissionPage_form_18_ion_datetime_116_Template(rf, ctx) {
  if (rf & 1) {
    const _r314 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "ion-datetime", 103, 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("ionChange", function ClaimSubmissionPage_form_18_ion_datetime_116_Template_ion_datetime_ionChange_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r314);
      const _r312 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵreference"](1);
      const ctx_r313 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r313.dateChanged_dateofAccident(_r312.value));
    })("ionCancel", function ClaimSubmissionPage_form_18_ion_datetime_116_Template_ion_datetime_ionCancel_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r314);
      const ctx_r315 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r315.showPicker = false);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](2, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r293 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpropertyInterpolate"]("max", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind2"](2, 2, ctx_r293.today, "yyyy-MM-dd"));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("value", ctx_r293.dateValue);
  }
}
function ClaimSubmissionPage_form_18_ion_datetime_126_Template(rf, ctx) {
  if (rf & 1) {
    const _r318 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "ion-datetime", 104, 105);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("ionChange", function ClaimSubmissionPage_form_18_ion_datetime_126_Template_ion_datetime_ionChange_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r318);
      const _r316 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵreference"](1);
      const ctx_r317 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r317.timeChanged(_r316.value));
    })("ionCancel", function ClaimSubmissionPage_form_18_ion_datetime_126_Template_ion_datetime_ionCancel_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r318);
      const ctx_r319 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r319.showTimePicker = false);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r294 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("value", ctx_r294.timeValue);
  }
}
function ClaimSubmissionPage_form_18_ion_select_option_138_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "ion-select-option", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const value_r320 = ctx.$implicit;
    const i_r321 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("value", value_r320)("selected", i_r321 === 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](value_r320);
  }
}
function ClaimSubmissionPage_form_18_ion_select_option_144_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "ion-select-option", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const bank_r322 = ctx.$implicit;
    const i_r323 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("value", bank_r322)("selected", i_r323 === 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](bank_r322);
  }
}
function ClaimSubmissionPage_form_18_div_151_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 70)(1, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](3, 1, "clms_submison_accidentalClm.err_ClmAccountNamePattern_req"));
  }
}
function ClaimSubmissionPage_form_18_div_152_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 70)(1, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](3, 1, "clms_submison_accidentalClm.err_ClmAccountNamePattern_req"));
  }
}
function ClaimSubmissionPage_form_18_div_159_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 70)(1, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](3, 1, "clms_submison_accidentalClm.err_ClmAccountNoPattern_req"));
  }
}
function ClaimSubmissionPage_form_18_div_160_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 70)(1, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](3, 1, "clms_submison_accidentalClm.err_ClmAccountNoPattern_req"));
  }
}
function ClaimSubmissionPage_form_18_ion_grid_167_Template(rf, ctx) {
  if (rf & 1) {
    const _r327 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "ion-grid", 73)(1, "ion-row", 74)(2, "ion-col", 75)(3, "ion-item", 13)(4, "ion-input", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function ClaimSubmissionPage_form_18_ion_grid_167_Template_ion_input_click_4_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r327);
      const i_r325 = restoredCtx.index;
      const ctx_r326 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r326.chooseCameraOptions(i_r325, "accidentClaimForm"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](6, "ion-icon", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function ClaimSubmissionPage_form_18_ion_grid_167_Template_ion_icon_click_6_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r327);
      const i_r325 = restoredCtx.index;
      const ctx_r328 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r328.chooseCameraOptions(i_r325, "accidentClaimForm"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](7, "ion-icon", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function ClaimSubmissionPage_form_18_ion_grid_167_Template_ion_icon_click_7_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r327);
      const i_r325 = restoredCtx.index;
      const ctx_r329 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r329.removeAttachmentField(i_r325, "accidentClaimForm"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()()()();
  }
  if (rf & 2) {
    const i_r325 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("formGroupName", i_r325);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](5, 2, "clms_submison_house.plcHldr_uploadDoc"));
  }
}
function ClaimSubmissionPage_form_18_div_168_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 94)(1, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](3, 1, "clms_submison_accidentalClm.err_uploadDocReq"));
  }
}
function ClaimSubmissionPage_form_18_ion_button_171_Template(rf, ctx) {
  if (rf & 1) {
    const _r331 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "ion-button", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function ClaimSubmissionPage_form_18_ion_button_171_Template_ion_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r331);
      const ctx_r330 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r330.addNewAttachmentField("accidentClaimForm"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1, " Add More");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r303 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("disabled", ctx_r303.accidentClaimForm.controls.attachments.controls[ctx_r303.accidentClaimForm.controls.attachments.length - 1].controls.filename.hasError("required"));
  }
}
function ClaimSubmissionPage_form_18_div_202_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div")(1, "span", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](3, 1, "clms_submison_accidentalClm.claim_disclaimer_req"));
  }
}
function ClaimSubmissionPage_form_18_div_245_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 70)(1, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](3, 1, "captcha_req"));
  }
}
function ClaimSubmissionPage_form_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r333 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "form", 11)(1, "p", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](4, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](5, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](6, "div", 13)(7, "ion-select", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](8, ClaimSubmissionPage_form_18_ion_select_option_8_Template, 2, 3, "ion-select-option", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](9, ClaimSubmissionPage_form_18_div_9_Template, 4, 3, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](10, "p", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](12, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](13, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](14, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](15, "ion-item", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](16, "ion-input", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](17, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](18, ClaimSubmissionPage_form_18_div_18_Template, 4, 3, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](19, ClaimSubmissionPage_form_18_div_19_Template, 4, 3, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](20, ClaimSubmissionPage_form_18_div_20_Template, 4, 3, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](21, ClaimSubmissionPage_form_18_div_21_Template, 4, 3, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](22, "p", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](23);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](24, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](25, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](26, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](27, "ion-item", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](28, "ion-input", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](29, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](30, ClaimSubmissionPage_form_18_div_30_Template, 4, 3, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](31, ClaimSubmissionPage_form_18_div_31_Template, 4, 3, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](32, ClaimSubmissionPage_form_18_div_32_Template, 4, 3, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](33, ClaimSubmissionPage_form_18_div_33_Template, 4, 3, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](34, "p", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](35);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](36, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](37, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](38, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](39, "ion-item", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](40, "ion-input", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](41, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](42, ClaimSubmissionPage_form_18_div_42_Template, 4, 3, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](43, ClaimSubmissionPage_form_18_div_43_Template, 4, 3, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](44, ClaimSubmissionPage_form_18_div_44_Template, 4, 3, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](45, ClaimSubmissionPage_form_18_div_45_Template, 4, 3, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](46, "p", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](47);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](48, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](49, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](50, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](51, "ion-item", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](52, "ion-input", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](53, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](54, ClaimSubmissionPage_form_18_div_54_Template, 4, 3, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](55, ClaimSubmissionPage_form_18_div_55_Template, 4, 3, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](56, ClaimSubmissionPage_form_18_div_56_Template, 4, 3, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](57, "p", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](58);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](59, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](60, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](61, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](62, "ion-item", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](63, "ion-input", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](64, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](65, ClaimSubmissionPage_form_18_div_65_Template, 4, 3, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](66, ClaimSubmissionPage_form_18_div_66_Template, 4, 3, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](67, ClaimSubmissionPage_form_18_div_67_Template, 4, 3, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](68, ClaimSubmissionPage_form_18_div_68_Template, 4, 3, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](69, "p", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](70);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](71, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](72, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](73, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](74, "div", 13)(75, "ion-select", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](76, ClaimSubmissionPage_form_18_ion_select_option_76_Template, 2, 3, "ion-select-option", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](77, ClaimSubmissionPage_form_18_div_77_Template, 4, 3, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](78, "p", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](79);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](80, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](81, "ion-item", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](82, "ion-input", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](83, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](84, "p", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](85);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](86, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](87, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](88, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](89, "ion-item", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](90, "ion-input", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](91, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](92, ClaimSubmissionPage_form_18_div_92_Template, 4, 3, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](93, ClaimSubmissionPage_form_18_div_93_Template, 4, 3, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](94, ClaimSubmissionPage_form_18_div_94_Template, 4, 3, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](95, ClaimSubmissionPage_form_18_div_95_Template, 4, 3, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](96, ClaimSubmissionPage_form_18_div_96_Template, 4, 3, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](97, "p", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](98);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](99, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](100, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](101, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](102, "ion-item", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](103, "ion-input", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](104, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](105, ClaimSubmissionPage_form_18_div_105_Template, 4, 3, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](106, ClaimSubmissionPage_form_18_div_106_Template, 4, 3, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](107, "p", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](108);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](109, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](110, "ion-item", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function ClaimSubmissionPage_form_18_Template_ion_item_click_110_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r333);
      const ctx_r332 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r332.showPicker = !ctx_r332.showPicker);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](111, "ion-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](112);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](113, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](114, "ion-text", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](115);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](116, ClaimSubmissionPage_form_18_ion_datetime_116_Template, 3, 5, "ion-datetime", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](117, "p", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](118);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](119, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](120, "ion-item", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function ClaimSubmissionPage_form_18_Template_ion_item_click_120_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r333);
      const ctx_r334 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r334.showTimePicker = !ctx_r334.showTimePicker);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](121, "ion-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](122);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](123, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](124, "ion-text", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](125);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](126, ClaimSubmissionPage_form_18_ion_datetime_126_Template, 2, 1, "ion-datetime", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](127, "p", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](128);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](129, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](130, "ion-item", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](131, "ion-input", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](132, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](133, "p", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](134);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](135, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](136, "div", 13)(137, "ion-select", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](138, ClaimSubmissionPage_form_18_ion_select_option_138_Template, 2, 3, "ion-select-option", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](139, "p", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](140);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](141, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](142, "div", 13)(143, "ion-select", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](144, ClaimSubmissionPage_form_18_ion_select_option_144_Template, 2, 3, "ion-select-option", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](145, "p", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](146);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](147, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](148, "ion-item", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](149, "ion-input", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](150, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](151, ClaimSubmissionPage_form_18_div_151_Template, 4, 3, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](152, ClaimSubmissionPage_form_18_div_152_Template, 4, 3, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](153, "p", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](154);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](155, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](156, "ion-item", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](157, "ion-input", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](158, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](159, ClaimSubmissionPage_form_18_div_159_Template, 4, 3, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](160, ClaimSubmissionPage_form_18_div_160_Template, 4, 3, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](161, "p", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](162);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](163, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](164, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](165, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](166, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](167, ClaimSubmissionPage_form_18_ion_grid_167_Template, 8, 4, "ion-grid", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](168, ClaimSubmissionPage_form_18_div_168_Template, 4, 3, "div", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](169, "ion-row")(170, "ion-col", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](171, ClaimSubmissionPage_form_18_ion_button_171_Template, 2, 1, "ion-button", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](172, "p", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](173);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](174, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](175, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](176, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](177, "ion-item", 43)(178, "div")(179, "a", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](180);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](181, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](182, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](183);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](184, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](185, "a", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](186);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](187, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](188, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](189);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](190, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](191, "a", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](192);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](193, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](194, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](195);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](196, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](197, "ion-row", 46)(198, "ion-checkbox", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("ionChange", function ClaimSubmissionPage_form_18_Template_ion_checkbox_ionChange_198_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r333);
      const ctx_r335 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r335.checkboxChange($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](199, "span", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](200);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](201, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](202, ClaimSubmissionPage_form_18_div_202_Template, 4, 3, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](203, "p", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](204);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](205, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](206, "ion-item", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](207, "ion-input", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](208, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](209, "p", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](210);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](211, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](212, "ion-item", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](213, "ion-input", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](214, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](215, "p", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](216);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](217, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](218, "ion-item", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](219, "ion-input", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](220, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](221, "p", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](222);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](223, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](224, "ion-item", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](225, "ion-input", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](226, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](227, "p", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](228);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](229, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](230, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](231, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](232, "ion-row")(233, "ion-item", 92)(234, "ion-col", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](235, "canvas", 58, 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](237, "ion-col", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](238, "ion-col", 61)(239, "div", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function ClaimSubmissionPage_form_18_Template_div_click_239_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r333);
      const ctx_r336 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r336.refreshCaptcha(ctx_r336.accidentClaimForm));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](240, "i", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](241, "ion-item", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](242, "ion-input", 64, 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](244, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](245, ClaimSubmissionPage_form_18_div_245_Template, 4, 3, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](246, "p", 66)(247, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](248, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](249);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](250, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](251, "ion-row")(252, "ion-col", 67)(253, "ion-button", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function ClaimSubmissionPage_form_18_Template_ion_button_click_253_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r333);
      const ctx_r337 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r337.submitAccidenetClaimForm(ctx_r337.accidentClaimForm));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](254);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](255, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("formGroup", ctx_r4.accidentClaimForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](3, 103, "clms_submison_accidentalClm.planType"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("interfaceOptions", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpureFunction0"](205, _c2));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngForOf", ctx_r4.typeOfPlans);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r4.accidentClaimForm.get("typeOfPlan").hasError("required") && ctx_r4.accidentClaimForm.get("typeOfPlan").touched);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](12, 105, "clms_submison_accidentalClm.policyNo"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](17, 107, "clms_submison_accidentalClm.policyNo"));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r4.accidentClaimForm.get("contract_no").hasError("required") && ctx_r4.accidentClaimForm.get("contract_no").touched);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r4.accidentClaimForm.get("contract_no").hasError("minlength") && ctx_r4.accidentClaimForm.get("contract_no").touched);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r4.accidentClaimForm.get("contract_no").hasError("pattern") && ctx_r4.accidentClaimForm.get("contract_no").touched && !ctx_r4.accidentClaimForm.get("contract_no").hasError("minlength"));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r4.accidentClaimForm.get("contract_no").hasError("maxlength") && ctx_r4.accidentClaimForm.get("contract_no").touched && !ctx_r4.accidentClaimForm.get("contract_no").hasError("pattern"));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](24, 109, "clms_submison_accidentalClm.lifeAssured"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](29, 111, "clms_submison_accidentalClm.lifeAssured"));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r4.accidentClaimForm.get("insuarance_pername_name").hasError("required") && ctx_r4.accidentClaimForm.get("insuarance_pername_name").touched);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r4.accidentClaimForm.get("insuarance_pername_name").hasError("minlength") && ctx_r4.accidentClaimForm.get("insuarance_pername_name").touched);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r4.accidentClaimForm.get("insuarance_pername_name").hasError("pattern") && ctx_r4.accidentClaimForm.get("insuarance_pername_name").touched && !ctx_r4.accidentClaimForm.get("insuarance_pername_name").hasError("minlength"));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r4.accidentClaimForm.get("insuarance_pername_name").hasError("maxlength") && ctx_r4.accidentClaimForm.get("insuarance_pername_name").touched && !ctx_r4.accidentClaimForm.get("insuarance_pername_name").hasError("pattern"));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](36, 113, "clms_submison_accidentalClm.NRICNo"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](41, 115, "clms_submison_accidentalClm.NRICNo"));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r4.accidentClaimForm.get("nric_no").hasError("required") && ctx_r4.accidentClaimForm.get("nric_no").touched);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r4.accidentClaimForm.get("nric_no").hasError("minlength") && ctx_r4.accidentClaimForm.get("nric_no").touched);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r4.accidentClaimForm.get("nric_no").hasError("pattern") && ctx_r4.accidentClaimForm.get("nric_no").touched && !ctx_r4.accidentClaimForm.get("nric_no").hasError("minlength"));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r4.accidentClaimForm.get("nric_no").hasError("maxlength") && ctx_r4.accidentClaimForm.get("nric_no").touched && !ctx_r4.accidentClaimForm.get("nric_no").hasError("pattern"));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](48, 117, "clms_submison_accidentalClm.address"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](53, 119, "clms_submison_accidentalClm.address"));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r4.accidentClaimForm.get("address").hasError("required") && ctx_r4.accidentClaimForm.get("address").touched);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r4.accidentClaimForm.get("address").hasError("minlength") && ctx_r4.accidentClaimForm.get("address").touched);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r4.accidentClaimForm.get("address").hasError("maxlength") && ctx_r4.accidentClaimForm.get("address").touched);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](59, 121, "clms_submison_accidentalClm.postCode"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](64, 123, "clms_submison_accidentalClm.postCode"));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r4.accidentClaimForm.get("postcode").hasError("required") && ctx_r4.accidentClaimForm.get("postcode").touched);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r4.accidentClaimForm.get("postcode").hasError("minlength") && ctx_r4.accidentClaimForm.get("postcode").touched);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r4.accidentClaimForm.get("postcode").hasError("pattern") && ctx_r4.accidentClaimForm.get("postcode").touched && !ctx_r4.accidentClaimForm.get("postcode").hasError("minlength"));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r4.accidentClaimForm.get("postcode").hasError("maxlength") && ctx_r4.accidentClaimForm.get("postcode").touched && !ctx_r4.accidentClaimForm.get("postcode").hasError("pattern"));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](71, 125, "clms_submison_accidentalClm.state"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("interfaceOptions", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpureFunction0"](206, _c2));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngForOf", ctx_r4.claimantsStates);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r4.accidentClaimForm.get("state").hasError("required") && ctx_r4.accidentClaimForm.get("state").touched);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](80, 127, "clms_submison_accidentalClm.telephoneNo"));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](83, 129, "clms_submison_accidentalClm.telephoneNo"));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](86, 131, "clms_submison_accidentalClm.mobileNo"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](91, 133, "clms_submison_accidentalClm.mobileNo"));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r4.accidentClaimForm.get("mobile").hasError("required") && ctx_r4.accidentClaimForm.get("mobile").touched);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r4.accidentClaimForm.get("mobile").hasError("validateNonZeroVal"));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r4.accidentClaimForm.get("mobile").hasError("minlength"));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r4.accidentClaimForm.get("mobile").hasError("pattern") && !ctx_r4.accidentClaimForm.get("mobile").hasError("minlength"));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r4.accidentClaimForm.get("mobile").hasError("maxlength") && !ctx_r4.accidentClaimForm.get("mobile").hasError("pattern"));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](99, 135, "clms_submison_accidentalClm.email"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](104, 137, "clms_submison_accidentalClm.email"));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r4.accidentClaimForm.get("email").hasError("required") && ctx_r4.accidentClaimForm.get("email").touched);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", !ctx_r4.accidentClaimForm.get("email").hasError("required") && ctx_r4.accidentClaimForm.get("email").hasError("pattern"));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](109, 139, "clms_submison_accidentalClm.accidentDate"));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](113, 141, "clms_submison_accidentalClm.accidentDate"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](ctx_r4.formattdString);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r4.showPicker);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](119, 143, "clms_submison_accidentalClm.accidentTime"));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](123, 145, "clms_submison_accidentalClm.accidentTime"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](ctx_r4.formatedTimeString);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r4.showTimePicker);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](129, 147, "clms_submison_accidentalClm.howAccidentHappen"));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](132, 149, "clms_submison_accidentalClm.howAccidentHappen"));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](135, 151, "clms_submison_accidentalClm.reportedToPolice"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("interfaceOptions", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpureFunction0"](207, _c2));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngForOf", ctx_r4.radioValues);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](141, 153, "clms_submison_accidentalClm.bankName"));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("interfaceOptions", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpureFunction0"](208, _c2));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngForOf", ctx_r4.claimantsBanks);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](147, 155, "clms_submison_accidentalClm.bankAccName"));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](150, 157, "clms_submison_accidentalClm.bankAccName"));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r4.accidentClaimForm.get("claimants_act_name").hasError("pattern"));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r4.accidentClaimForm.get("claimants_act_name").hasError("maxlength") && !ctx_r4.accidentClaimForm.get("claimants_act_name").hasError("maxlength"));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](155, 159, "clms_submison_accidentalClm.bankAccNo"));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](158, 161, "clms_submison_accidentalClm.bankAccNo"));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r4.accidentClaimForm.get("claimants_act_no").hasError("pattern"));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r4.accidentClaimForm.get("claimants_act_no").hasError("maxlength") && !ctx_r4.accidentClaimForm.get("claimants_act_no").hasError("maxlength"));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](163, 163, "clms_submison_accidentalClm.uploadFile"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngForOf", ctx_r4.accidentClaimForm.controls.attachments.controls);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r4.accidentClaimForm.controls.attachments.controls[ctx_r4.accidentClaimForm.controls.attachments.length - 1].controls.filename.touched && ctx_r4.accidentClaimForm.controls.attachments.controls[ctx_r4.accidentClaimForm.controls.attachments.length - 1].controls.filename.hasError("required"));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", !ctx_r4.accidentClaimForm.controls.attachments.controls[0].controls.filename.hasError("required"));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](174, 165, "clms_submison_accidentalClm.claim_disclaimer"));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](181, 167, "clms_submison_accidentalClm.Disclaimer_title1"));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](184, 169, "clms_submison_accidentalClm.claim_disclaimer_text1"));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](187, 171, "clms_submison_accidentalClm.Disclaimer_title2"));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](190, 173, "clms_submison_accidentalClm.claim_disclaimer_text2"));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](193, 175, "clms_submison_accidentalClm.Disclaimer_title3"));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](196, 177, "clms_submison_accidentalClm.claim_disclaimer_text3"));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("checked", ctx_r4.disclaimer_terms);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](201, 179, "clms_submison_accidentalClm.agree"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r4.accidentClaimForm.controls.disclaimer.value === false && ctx_r4.accidentClaimForm.get("disclaimer").touched);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](205, 181, "clms_submison_accidentalClm.remark"));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](208, 183, "clms_submison_accidentalClm.remark"));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](211, 185, "clms_submison_accidentalClm.agent_Name"));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](214, 187, "clms_submison_accidentalClm.agent_Name"));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](217, 189, "clms_submison_accidentalClm.agent_No"));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](220, 191, "clms_submison_accidentalClm.agent_No"));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](223, 193, "clms_submison_accidentalClm.agent_Mobile"));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](226, 195, "clms_submison_accidentalClm.agent_Mobile"));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](229, 197, "enterthetext"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](244, 199, "entertextintheaboveimage"));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r4.accidentClaimForm.get("captcha").hasError("required") && ctx_r4.accidentClaimForm.get("captcha").touched && !ctx_r4.isValidUser);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](250, 201, "allfieldsarecompulsory"));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("disabled", !ctx_r4.accidentClaimForm.valid || !ctx_r4.disclaimer_terms);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](255, 203, "clms_submison_accidentalClm.sbtClms"));
  }
}
function ClaimSubmissionPage_form_19_ion_select_option_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "ion-select-option", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const plan_r388 = ctx.$implicit;
    const i_r389 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("value", plan_r388)("selected", i_r389 === 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](plan_r388);
  }
}
function ClaimSubmissionPage_form_19_div_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 70)(1, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](3, 1, "clms_submison_illDeathClm.err_planTypeReq"));
  }
}
function ClaimSubmissionPage_form_19_div_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 70)(1, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](3, 1, "clms_submison_illDeathClm.err_policyNoReq"));
  }
}
function ClaimSubmissionPage_form_19_div_19_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 70)(1, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](3, 1, "clms_submison_illDeathClm.policyNoLength_req"));
  }
}
function ClaimSubmissionPage_form_19_div_20_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 70)(1, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](3, 1, "clms_submison_illDeathClm.policyNoPattern_req"));
  }
}
function ClaimSubmissionPage_form_19_div_21_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 70)(1, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](3, 1, "clms_submison_illDeathClm.policyNoPattern_req"));
  }
}
function ClaimSubmissionPage_form_19_div_30_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 70)(1, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](3, 1, "clms_submison_illDeathClm.err_lifeAssuredReq"));
  }
}
function ClaimSubmissionPage_form_19_div_31_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 70)(1, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](3, 1, "clms_submison_illDeathClm.lifeAssuredLength_req"));
  }
}
function ClaimSubmissionPage_form_19_div_32_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 70)(1, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](3, 1, "clms_submison_illDeathClm.lifeAssuredPattern_req"));
  }
}
function ClaimSubmissionPage_form_19_div_33_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 70)(1, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](3, 1, "clms_submison_illDeathClm.lifeAssuredPattern_req"));
  }
}
function ClaimSubmissionPage_form_19_div_42_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 70)(1, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](3, 1, "clms_submison_illDeathClm.err_NRICNoReq"));
  }
}
function ClaimSubmissionPage_form_19_div_43_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 70)(1, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](3, 1, "clms_submison_illDeathClm.err_NRICNoLength_req"));
  }
}
function ClaimSubmissionPage_form_19_div_44_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 70)(1, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](3, 1, "clms_submison_illDeathClm.err_NRICNoPattern_req"));
  }
}
function ClaimSubmissionPage_form_19_div_45_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 70)(1, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](3, 1, "clms_submison_illDeathClm.err_NRICNoPattern_req"));
  }
}
function ClaimSubmissionPage_form_19_ion_datetime_55_Template(rf, ctx) {
  if (rf & 1) {
    const _r392 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "ion-datetime", 120, 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("ionChange", function ClaimSubmissionPage_form_19_ion_datetime_55_Template_ion_datetime_ionChange_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r392);
      const ctx_r391 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r391.setFirstDiagnoseDate("illnessDeathClaimForm"));
    })("ionCancel", function ClaimSubmissionPage_form_19_ion_datetime_55_Template_ion_datetime_ionCancel_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r392);
      const ctx_r393 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r393.showPicker = false);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](2, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r352 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpropertyInterpolate"]("max", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind2"](2, 2, ctx_r352.today, "yyyy-MM-dd"));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("value", ctx_r352.dateValue);
  }
}
function ClaimSubmissionPage_form_19_ion_datetime_65_Template(rf, ctx) {
  if (rf & 1) {
    const _r396 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "ion-datetime", 121, 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("ionChange", function ClaimSubmissionPage_form_19_ion_datetime_65_Template_ion_datetime_ionChange_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r396);
      const _r394 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵreference"](1);
      const ctx_r395 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r395.Diagnosedate_of_death(_r394.value));
    })("ionCancel", function ClaimSubmissionPage_form_19_ion_datetime_65_Template_ion_datetime_ionCancel_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r396);
      const ctx_r397 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r397.showPickerDiagnose = false);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](2, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](3, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r353 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpropertyInterpolate"]("min", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind2"](2, 3, ctx_r353.deathMinDate, "yyyy-MM-dd"));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpropertyInterpolate"]("max", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind2"](3, 6, ctx_r353.today, "yyyy-MM-dd"));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("value", ctx_r353.dateValuedeath);
  }
}
function ClaimSubmissionPage_form_19_div_66_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 70)(1, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainerStart"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r354 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](3, 2, "clms_submison_illDeathClm.err_reqFirstDiagnosedDt"));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](ctx_r354.illnessDeathClaimForm.get("date_of_death").setValue(""));
  }
}
function ClaimSubmissionPage_form_19_ion_select_option_72_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "ion-select-option", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const reason_r398 = ctx.$implicit;
    const i_r399 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("value", reason_r398)("selected", i_r399 === 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](reason_r398);
  }
}
function ClaimSubmissionPage_form_19_div_90_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 70)(1, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](3, 1, "clms_submison_illDeathClm.err_claimantNameReq"));
  }
}
function ClaimSubmissionPage_form_19_div_91_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 70)(1, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](3, 1, "clms_submison_illDeathClm.err_claimantNameLength_req"));
  }
}
function ClaimSubmissionPage_form_19_div_92_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 70)(1, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](3, 1, "clms_submison_illDeathClm.err_claimantPattern_req"));
  }
}
function ClaimSubmissionPage_form_19_div_93_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 70)(1, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](3, 1, "clms_submison_illDeathClm.err_claimantPattern_req"));
  }
}
function ClaimSubmissionPage_form_19_div_108_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 70)(1, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](3, 1, "clms_submison_illDeathClm.err_addressReq"));
  }
}
function ClaimSubmissionPage_form_19_div_109_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 70)(1, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](3, 1, "clms_submison_illDeathClm.err_addressLength_req"));
  }
}
function ClaimSubmissionPage_form_19_div_110_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 70)(1, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](3, 1, "clms_submison_illDeathClm.err_addressMaxLength_req"));
  }
}
function ClaimSubmissionPage_form_19_div_119_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 70)(1, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](3, 1, "clms_submison_illDeathClm.err_postalCodeReq"));
  }
}
function ClaimSubmissionPage_form_19_div_120_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 70)(1, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](3, 1, "clms_submison_illDeathClm.err_postalCodeLength_req"));
  }
}
function ClaimSubmissionPage_form_19_div_121_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 70)(1, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](3, 1, "clms_submison_illDeathClm.err_postalCodePattern_req"));
  }
}
function ClaimSubmissionPage_form_19_div_122_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 70)(1, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](3, 1, "clms_submison_illDeathClm.err_postalCodePattern_req"));
  }
}
function ClaimSubmissionPage_form_19_ion_select_option_130_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "ion-select-option", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const state_r400 = ctx.$implicit;
    const i_r401 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("value", state_r400)("selected", i_r401 === 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](state_r400);
  }
}
function ClaimSubmissionPage_form_19_div_131_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 70)(1, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](3, 1, "clms_submison_illDeathClm.err_stateReq"));
  }
}
function ClaimSubmissionPage_form_19_div_146_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 70)(1, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](3, 1, "clms_submison_illDeathClm.err_mobileNoReq"));
  }
}
function ClaimSubmissionPage_form_19_div_147_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 70)(1, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](3, 1, "clms_submison_illDeathClm.err_invalidMno"));
  }
}
function ClaimSubmissionPage_form_19_div_148_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 70)(1, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](3, 1, "clms_submison_illDeathClm.err_mobileNoLength_req"));
  }
}
function ClaimSubmissionPage_form_19_div_149_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 70)(1, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](3, 1, "clms_submison_illDeathClm.err_mobileNoMaxLength_req"));
  }
}
function ClaimSubmissionPage_form_19_div_150_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 70)(1, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](3, 1, "clms_submison_illDeathClm.err_mobileNoMaxLength_req"));
  }
}
function ClaimSubmissionPage_form_19_div_159_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 70)(1, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](3, 1, "clms_submison_illDeathClm.err_emailReq"));
  }
}
function ClaimSubmissionPage_form_19_div_160_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 70)(1, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](3, 1, "clms_submison_illDeathClm.err_emailValid"));
  }
}
function ClaimSubmissionPage_form_19_ion_select_option_172_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "ion-select-option", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const bank_r402 = ctx.$implicit;
    const i_r403 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("value", bank_r402)("selected", i_r403 === 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](bank_r402);
  }
}
function ClaimSubmissionPage_form_19_div_179_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 70)(1, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](3, 1, "clms_submison_illDeathClm.err_ClmAccountNamePattern_req"));
  }
}
function ClaimSubmissionPage_form_19_div_180_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 70)(1, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](3, 1, "clms_submison_illDeathClm.err_ClmAccountNamePattern_req"));
  }
}
function ClaimSubmissionPage_form_19_div_187_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 70)(1, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](3, 1, "clms_submison_illDeathClm.err_ClmAccountNoPattern_req"));
  }
}
function ClaimSubmissionPage_form_19_div_188_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 70)(1, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](3, 1, "clms_submison_illDeathClm.err_ClmAccountNoPattern_req"));
  }
}
function ClaimSubmissionPage_form_19_ion_grid_195_Template(rf, ctx) {
  if (rf & 1) {
    const _r407 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "ion-grid", 73)(1, "ion-row", 74)(2, "ion-col", 75)(3, "ion-item", 13)(4, "ion-input", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function ClaimSubmissionPage_form_19_ion_grid_195_Template_ion_input_click_4_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r407);
      const i_r405 = restoredCtx.index;
      const ctx_r406 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r406.chooseCameraOptions(i_r405, "illnessDeathClaimForm"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](6, "ion-icon", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function ClaimSubmissionPage_form_19_ion_grid_195_Template_ion_icon_click_6_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r407);
      const i_r405 = restoredCtx.index;
      const ctx_r408 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r408.chooseCameraOptions(i_r405, "illnessDeathClaimForm"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](7, "ion-icon", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function ClaimSubmissionPage_form_19_ion_grid_195_Template_ion_icon_click_7_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r407);
      const i_r405 = restoredCtx.index;
      const ctx_r409 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r409.removeAttachmentField(i_r405, "illnessDeathClaimForm"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()()()();
  }
  if (rf & 2) {
    const i_r405 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("formGroupName", i_r405);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](5, 2, "clms_submison_house.plcHldr_uploadDoc"));
  }
}
function ClaimSubmissionPage_form_19_div_196_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 94)(1, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](3, 1, "clms_submison_illDeathClm.err_uploadDocReq"));
  }
}
function ClaimSubmissionPage_form_19_ion_button_199_Template(rf, ctx) {
  if (rf & 1) {
    const _r411 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "ion-button", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function ClaimSubmissionPage_form_19_ion_button_199_Template_ion_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r411);
      const ctx_r410 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r410.addNewAttachmentField("illnessDeathClaimForm"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1, " Add More");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r383 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("disabled", ctx_r383.illnessDeathClaimForm.controls.attachments.controls[ctx_r383.illnessDeathClaimForm.controls.attachments.length - 1].controls.filename.hasError("required"));
  }
}
function ClaimSubmissionPage_form_19_div_230_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div")(1, "span", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](3, 1, "clms_submison_illDeathClm.claim_disclaimer_req"));
  }
}
function ClaimSubmissionPage_form_19_div_273_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 70)(1, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](3, 1, "captcha_req"));
  }
}
function ClaimSubmissionPage_form_19_Template(rf, ctx) {
  if (rf & 1) {
    const _r413 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "form", 11)(1, "p", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](4, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](5, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](6, "div", 13)(7, "ion-select", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](8, ClaimSubmissionPage_form_19_ion_select_option_8_Template, 2, 3, "ion-select-option", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](9, ClaimSubmissionPage_form_19_div_9_Template, 4, 3, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](10, "p", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](12, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](13, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](14, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](15, "ion-item", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](16, "ion-input", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](17, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](18, ClaimSubmissionPage_form_19_div_18_Template, 4, 3, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](19, ClaimSubmissionPage_form_19_div_19_Template, 4, 3, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](20, ClaimSubmissionPage_form_19_div_20_Template, 4, 3, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](21, ClaimSubmissionPage_form_19_div_21_Template, 4, 3, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](22, "p", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](23);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](24, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](25, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](26, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](27, "ion-item", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](28, "ion-input", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](29, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](30, ClaimSubmissionPage_form_19_div_30_Template, 4, 3, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](31, ClaimSubmissionPage_form_19_div_31_Template, 4, 3, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](32, ClaimSubmissionPage_form_19_div_32_Template, 4, 3, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](33, ClaimSubmissionPage_form_19_div_33_Template, 4, 3, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](34, "p", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](35);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](36, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](37, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](38, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](39, "ion-item", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](40, "ion-input", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](41, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](42, ClaimSubmissionPage_form_19_div_42_Template, 4, 3, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](43, ClaimSubmissionPage_form_19_div_43_Template, 4, 3, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](44, ClaimSubmissionPage_form_19_div_44_Template, 4, 3, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](45, ClaimSubmissionPage_form_19_div_45_Template, 4, 3, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](46, "p", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](47);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](48, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](49, "ion-item", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function ClaimSubmissionPage_form_19_Template_ion_item_click_49_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r413);
      const ctx_r412 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r412.showPicker = !ctx_r412.showPicker);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](50, "ion-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](51);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](52, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](53, "ion-text", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](54);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](55, ClaimSubmissionPage_form_19_ion_datetime_55_Template, 3, 5, "ion-datetime", 106);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](56, "p", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](57);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](58, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](59, "ion-item", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function ClaimSubmissionPage_form_19_Template_ion_item_click_59_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r413);
      const ctx_r414 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r414.showPickerDiagnose = !ctx_r414.showPickerDiagnose);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](60, "ion-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](61);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](62, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](63, "ion-text", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](64);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](65, ClaimSubmissionPage_form_19_ion_datetime_65_Template, 4, 9, "ion-datetime", 107);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](66, ClaimSubmissionPage_form_19_div_66_Template, 6, 4, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](67, "p", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](68);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](69, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](70, "div", 13)(71, "ion-select", 108);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](72, ClaimSubmissionPage_form_19_ion_select_option_72_Template, 2, 3, "ion-select-option", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](73, "p", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](74);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](75, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](76, "ion-item", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](77, "ion-input", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](78, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](79, "p", 109);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](80);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](81, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](82, "p", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](83);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](84, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](85, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](86, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](87, "ion-item", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](88, "ion-input", 110);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](89, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](90, ClaimSubmissionPage_form_19_div_90_Template, 4, 3, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](91, ClaimSubmissionPage_form_19_div_91_Template, 4, 3, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](92, ClaimSubmissionPage_form_19_div_92_Template, 4, 3, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](93, ClaimSubmissionPage_form_19_div_93_Template, 4, 3, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](94, "p", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](95);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](96, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](97, "ion-item", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](98, "ion-input", 111);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](99, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](100, "p", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](101);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](102, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](103, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](104, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](105, "ion-item", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](106, "ion-input", 112);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](107, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](108, ClaimSubmissionPage_form_19_div_108_Template, 4, 3, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](109, ClaimSubmissionPage_form_19_div_109_Template, 4, 3, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](110, ClaimSubmissionPage_form_19_div_110_Template, 4, 3, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](111, "p", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](112);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](113, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](114, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](115, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](116, "ion-item", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](117, "ion-input", 113);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](118, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](119, ClaimSubmissionPage_form_19_div_119_Template, 4, 3, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](120, ClaimSubmissionPage_form_19_div_120_Template, 4, 3, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](121, ClaimSubmissionPage_form_19_div_121_Template, 4, 3, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](122, ClaimSubmissionPage_form_19_div_122_Template, 4, 3, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](123, "p", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](124);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](125, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](126, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](127, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](128, "div", 13)(129, "ion-select", 114);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](130, ClaimSubmissionPage_form_19_ion_select_option_130_Template, 2, 3, "ion-select-option", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](131, ClaimSubmissionPage_form_19_div_131_Template, 4, 3, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](132, "p", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](133);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](134, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](135, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](136, "ion-input", 115);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](137, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](138, "p", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](139);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](140, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](141, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](142, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](143, "ion-item", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](144, "ion-input", 116);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](145, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](146, ClaimSubmissionPage_form_19_div_146_Template, 4, 3, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](147, ClaimSubmissionPage_form_19_div_147_Template, 4, 3, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](148, ClaimSubmissionPage_form_19_div_148_Template, 4, 3, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](149, ClaimSubmissionPage_form_19_div_149_Template, 4, 3, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](150, ClaimSubmissionPage_form_19_div_150_Template, 4, 3, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](151, "p", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](152);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](153, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](154, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](155, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](156, "ion-item", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](157, "ion-input", 117);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](158, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](159, ClaimSubmissionPage_form_19_div_159_Template, 4, 3, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](160, ClaimSubmissionPage_form_19_div_160_Template, 4, 3, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](161, "p", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](162);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](163, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](164, "ion-item", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](165, "ion-input", 118);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](166, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](167, "p", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](168);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](169, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](170, "div", 13)(171, "ion-select", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](172, ClaimSubmissionPage_form_19_ion_select_option_172_Template, 2, 3, "ion-select-option", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](173, "p", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](174);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](175, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](176, "ion-item", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](177, "ion-input", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](178, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](179, ClaimSubmissionPage_form_19_div_179_Template, 4, 3, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](180, ClaimSubmissionPage_form_19_div_180_Template, 4, 3, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](181, "p", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](182);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](183, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](184, "ion-item", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](185, "ion-input", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](186, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](187, ClaimSubmissionPage_form_19_div_187_Template, 4, 3, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](188, ClaimSubmissionPage_form_19_div_188_Template, 4, 3, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](189, "p", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](190);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](191, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](192, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](193, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](194, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](195, ClaimSubmissionPage_form_19_ion_grid_195_Template, 8, 4, "ion-grid", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](196, ClaimSubmissionPage_form_19_div_196_Template, 4, 3, "div", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](197, "ion-row")(198, "ion-col", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](199, ClaimSubmissionPage_form_19_ion_button_199_Template, 2, 1, "ion-button", 119);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](200, "p", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](201);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](202, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](203, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](204, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](205, "ion-item", 43)(206, "div")(207, "a", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](208);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](209, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](210, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](211);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](212, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](213, "a", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](214);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](215, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](216, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](217);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](218, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](219, "a", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](220);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](221, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](222, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](223);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](224, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](225, "ion-row", 46)(226, "ion-checkbox", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("ionChange", function ClaimSubmissionPage_form_19_Template_ion_checkbox_ionChange_226_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r413);
      const ctx_r415 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r415.checkboxChange($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](227, "span", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](228);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](229, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](230, ClaimSubmissionPage_form_19_div_230_Template, 4, 3, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](231, "p", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](232);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](233, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](234, "ion-item", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](235, "ion-input", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](236, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](237, "p", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](238);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](239, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](240, "ion-item", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](241, "ion-input", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](242, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](243, "p", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](244);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](245, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](246, "ion-item", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](247, "ion-input", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](248, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](249, "p", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](250);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](251, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](252, "ion-item", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](253, "ion-input", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](254, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](255, "p", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](256);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](257, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](258, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](259, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](260, "ion-row")(261, "ion-item", 92)(262, "ion-col", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](263, "canvas", 58, 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](265, "ion-col", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](266, "ion-col", 61)(267, "div", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function ClaimSubmissionPage_form_19_Template_div_click_267_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r413);
      const ctx_r416 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r416.refreshCaptcha(ctx_r416.illnessDeathClaimForm));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](268, "i", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](269, "ion-item", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](270, "ion-input", 64, 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](272, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](273, ClaimSubmissionPage_form_19_div_273_Template, 4, 3, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](274, "p", 66)(275, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](276, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](277);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](278, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](279, "ion-row")(280, "ion-col", 67)(281, "ion-button", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function ClaimSubmissionPage_form_19_Template_ion_button_click_281_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r413);
      const ctx_r417 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r417.submitIllnessDeathClaim(ctx_r417.illnessDeathClaimForm));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](282);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](283, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("formGroup", ctx_r5.illnessDeathClaimForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](3, 116, "clms_submison_illDeathClm.planType"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("interfaceOptions", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpureFunction0"](232, _c2));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngForOf", ctx_r5.typeOfPlans);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r5.illnessDeathClaimForm.get("typeOfPlan").hasError("required") && ctx_r5.illnessDeathClaimForm.get("typeOfPlan").touched);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](12, 118, "clms_submison_illDeathClm.policyNo"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](17, 120, "clms_submison_illDeathClm.policyNo"));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r5.illnessDeathClaimForm.get("contract_no").hasError("required") && ctx_r5.illnessDeathClaimForm.get("contract_no").touched);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r5.illnessDeathClaimForm.get("contract_no").hasError("minlength") && ctx_r5.illnessDeathClaimForm.get("contract_no").touched);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r5.illnessDeathClaimForm.get("contract_no").hasError("pattern") && ctx_r5.illnessDeathClaimForm.get("contract_no").touched && !ctx_r5.illnessDeathClaimForm.get("contract_no").hasError("minlength"));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r5.illnessDeathClaimForm.get("contract_no").hasError("maxlength") && ctx_r5.illnessDeathClaimForm.get("contract_no").touched && !ctx_r5.illnessDeathClaimForm.get("contract_no").hasError("pattern"));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](24, 122, "clms_submison_illDeathClm.lifeAssured"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](29, 124, "clms_submison_illDeathClm.lifeAssured"));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r5.illnessDeathClaimForm.get("insuarance_pername_name").hasError("required") && ctx_r5.illnessDeathClaimForm.get("insuarance_pername_name").touched);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r5.illnessDeathClaimForm.get("insuarance_pername_name").hasError("minlength") && ctx_r5.illnessDeathClaimForm.get("insuarance_pername_name").touched);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r5.illnessDeathClaimForm.get("insuarance_pername_name").hasError("pattern") && ctx_r5.illnessDeathClaimForm.get("insuarance_pername_name").touched && !ctx_r5.illnessDeathClaimForm.get("insuarance_pername_name").hasError("minlength"));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r5.illnessDeathClaimForm.get("insuarance_pername_name").hasError("maxlength") && ctx_r5.illnessDeathClaimForm.get("insuarance_pername_name").touched && !ctx_r5.illnessDeathClaimForm.get("insuarance_pername_name").hasError("pattern"));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](36, 126, "clms_submison_illDeathClm.NRICNo"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](41, 128, "clms_submison_illDeathClm.NRICNo"));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r5.illnessDeathClaimForm.get("nric_no").hasError("required") && ctx_r5.illnessDeathClaimForm.get("nric_no").touched);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r5.illnessDeathClaimForm.get("nric_no").hasError("minlength") && ctx_r5.illnessDeathClaimForm.get("nric_no").touched);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r5.illnessDeathClaimForm.get("nric_no").hasError("pattern") && ctx_r5.illnessDeathClaimForm.get("nric_no").touched && !ctx_r5.illnessDeathClaimForm.get("nric_no").hasError("minlength"));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r5.illnessDeathClaimForm.get("nric_no").hasError("maxlength") && ctx_r5.illnessDeathClaimForm.get("nric_no").touched && !ctx_r5.illnessDeathClaimForm.get("nric_no").hasError("pattern"));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](48, 130, "clms_submison_illDeathClm.firstDiagnose"));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](52, 132, "clms_submison_illDeathClm.firstDiagnose"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](ctx_r5.DiagnoseDate);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r5.showPicker);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](58, 134, "clms_submison_illDeathClm.deathDate"));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](62, 136, "clms_submison_illDeathClm.deathDate"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](ctx_r5.formattdString);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r5.showPickerDiagnose);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r5.illnessDeathClaimForm.get("date_of_death").dirty && (ctx_r5.illnessDeathClaimForm.get("first_diagnosed").value.trim() === "" || ctx_r5.illnessDeathClaimForm.get("first_diagnosed").value.trim() === undefined));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](69, 138, "clms_submison_illDeathClm.deathCause"));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("interfaceOptions", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpureFunction0"](233, _c2))("disabled", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngForOf", ctx_r5.deathReasons);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](75, 140, "clms_submison_illDeathClm.docNameAddress"));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](78, 142, "clms_submison_illDeathClm.plcHldr_docNameAddress"));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](81, 144, "clms_submison_illDeathClm.claimantsParticulars"));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](84, 146, "clms_submison_illDeathClm.claimantName"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](89, 148, "clms_submison_illDeathClm.claimantName"));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r5.illnessDeathClaimForm.get("claimants_name").hasError("required") && ctx_r5.illnessDeathClaimForm.get("claimants_name").touched);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r5.illnessDeathClaimForm.get("claimants_name").hasError("minlength") && ctx_r5.illnessDeathClaimForm.get("claimants_name").touched);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r5.illnessDeathClaimForm.get("claimants_name").hasError("pattern") && ctx_r5.illnessDeathClaimForm.get("claimants_name").touched && !ctx_r5.illnessDeathClaimForm.get("claimants_name").hasError("minlength"));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r5.illnessDeathClaimForm.get("claimants_name").hasError("maxlength") && ctx_r5.illnessDeathClaimForm.get("claimants_name").touched && !ctx_r5.illnessDeathClaimForm.get("claimants_name").hasError("pattern"));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](96, 150, "clms_submison_illDeathClm.NRICNo"));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](99, 152, "clms_submison_illDeathClm.NRICNo"));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](102, 154, "clms_submison_illDeathClm.address"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](107, 156, "clms_submison_illDeathClm.address"));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r5.illnessDeathClaimForm.get("claimants_address").hasError("required") && ctx_r5.illnessDeathClaimForm.get("claimants_address").touched);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r5.illnessDeathClaimForm.get("claimants_address").hasError("minlength") && ctx_r5.illnessDeathClaimForm.get("claimants_address").touched);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r5.illnessDeathClaimForm.get("claimants_address").hasError("maxlength") && ctx_r5.illnessDeathClaimForm.get("claimants_address").touched && !ctx_r5.illnessDeathClaimForm.get("claimants_address").hasError("minlength"));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](113, 158, "clms_submison_illDeathClm.postCode"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](118, 160, "clms_submison_illDeathClm.postCode"));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r5.illnessDeathClaimForm.get("claimants_postcode").hasError("required") && ctx_r5.illnessDeathClaimForm.get("claimants_postcode").touched);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r5.illnessDeathClaimForm.get("claimants_postcode").hasError("minlength") && ctx_r5.illnessDeathClaimForm.get("claimants_postcode").touched);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r5.illnessDeathClaimForm.get("claimants_postcode").hasError("pattern") && ctx_r5.illnessDeathClaimForm.get("claimants_postcode").touched && !ctx_r5.illnessDeathClaimForm.get("claimants_postcode").hasError("minlength"));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r5.illnessDeathClaimForm.get("claimants_postcode").hasError("maxlength") && ctx_r5.illnessDeathClaimForm.get("claimants_postcode").touched && !ctx_r5.illnessDeathClaimForm.get("claimants_postcode").hasError("pattern"));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](125, 162, "clms_submison_illDeathClm.state"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("interfaceOptions", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpureFunction0"](234, _c2));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngForOf", ctx_r5.claimantsStates);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r5.illnessDeathClaimForm.get("claimants_state").hasError("required") && ctx_r5.illnessDeathClaimForm.get("claimants_state").touched);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](134, 164, "clms_submison_illDeathClm.telephoneNo"));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](137, 166, "clms_submison_illDeathClm.telephoneNo"));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](140, 168, "clms_submison_illDeathClm.mobileNo"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](145, 170, "clms_submison_illDeathClm.mobileNo"));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r5.illnessDeathClaimForm.get("claimants_mobile").hasError("required") && ctx_r5.illnessDeathClaimForm.get("claimants_mobile").touched);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r5.illnessDeathClaimForm.get("claimants_mobile").hasError("validateNonZeroVal"));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r5.illnessDeathClaimForm.get("claimants_mobile").hasError("minlength"));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r5.illnessDeathClaimForm.get("claimants_mobile").hasError("pattern") && !ctx_r5.illnessDeathClaimForm.get("claimants_mobile").hasError("minlength"));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r5.illnessDeathClaimForm.get("claimants_mobile").hasError("maxlength") && !ctx_r5.illnessDeathClaimForm.get("claimants_mobile").hasError("pattern"));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](153, 172, "clms_submison_illDeathClm.email"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](158, 174, "clms_submison_illDeathClm.email"));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r5.illnessDeathClaimForm.get("claimants_email").hasError("required") && ctx_r5.illnessDeathClaimForm.get("claimants_email").touched);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", !ctx_r5.illnessDeathClaimForm.get("claimants_email").hasError("required") && ctx_r5.illnessDeathClaimForm.get("claimants_email").hasError("pattern"));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](163, 176, "clms_submison_illDeathClm.relation"));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](166, 178, "clms_submison_illDeathClm.relation"));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](169, 180, "clms_submison_illDeathClm.bankName"));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("interfaceOptions", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpureFunction0"](235, _c2));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngForOf", ctx_r5.claimantsBanks);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](175, 182, "clms_submison_illDeathClm.bankAccName"));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](178, 184, "clms_submison_illDeathClm.bankAccName"));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r5.illnessDeathClaimForm.get("claimants_act_name").hasError("pattern"));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r5.illnessDeathClaimForm.get("claimants_act_name").hasError("maxlength") && !ctx_r5.llnessDeathClaimForm.get("claimants_act_name").hasError("pattern"));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](183, 186, "clms_submison_illDeathClm.bankAccNo"));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](186, 188, "clms_submison_illDeathClm.bankAccNo"));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r5.illnessDeathClaimForm.get("claimants_act_no").hasError("pattern"));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r5.illnessDeathClaimForm.get("claimants_act_no").hasError("maxlength") && !ctx_r5.illnessDeathClaimForm.get("claimants_act_no").hasError("pattern"));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](191, 190, "clms_submison_illDeathClm.uploadFile"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngForOf", ctx_r5.illnessDeathClaimForm.controls.attachments.controls);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r5.illnessDeathClaimForm.controls.attachments.controls[ctx_r5.illnessDeathClaimForm.controls.attachments.length - 1].controls.filename.touched && ctx_r5.illnessDeathClaimForm.controls.attachments.controls[ctx_r5.illnessDeathClaimForm.controls.attachments.length - 1].controls.filename.hasError("required"));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", !ctx_r5.illnessDeathClaimForm.controls.attachments.controls[0].controls.filename.hasError("required"));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](202, 192, "clms_submison_illDeathClm.claim_disclaimer"));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](209, 194, "clms_submison_illDeathClm.Disclaimer_title1"));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](212, 196, "clms_submison_illDeathClm.claim_disclaimer_text1"));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](215, 198, "clms_submison_illDeathClm.Disclaimer_title2"));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](218, 200, "clms_submison_illDeathClm.claim_disclaimer_text2"));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](221, 202, "clms_submison_illDeathClm.Disclaimer_title3"));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](224, 204, "clms_submison_illDeathClm.claim_disclaimer_text3"));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("checked", ctx_r5.disclaimer_terms);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](229, 206, "clms_submison_illDeathClm.agree"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r5.illnessDeathClaimForm.controls.disclaimer.value === false && ctx_r5.illnessDeathClaimForm.get("disclaimer").touched);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](233, 208, "clms_submison_illDeathClm.remark"));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](236, 210, "clms_submison_illDeathClm.remark"));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](239, 212, "clms_submison_illDeathClm.agent_Name"));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](242, 214, "clms_submison_illDeathClm.agent_Name"));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](245, 216, "clms_submison_illDeathClm.agent_No"));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](248, 218, "clms_submison_illDeathClm.agent_No"));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](251, 220, "clms_submison_illDeathClm.agent_Mobile"));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](254, 222, "clms_submison_illDeathClm.agent_Mobile"));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](257, 224, "enterthetext"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](272, 226, "entertextintheaboveimage"));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r5.illnessDeathClaimForm.get("captcha").hasError("required") && ctx_r5.illnessDeathClaimForm.get("captcha").touched && !ctx_r5.isValidUser);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](278, 228, "allfieldsarecompulsory"));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("disabled", !ctx_r5.illnessDeathClaimForm.valid || !ctx_r5.disclaimer_terms);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](283, 230, "clms_submison_illDeathClm.sbtClms"));
  }
}
function ClaimSubmissionPage_form_20_ion_select_option_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "ion-select-option", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const plan_r469 = ctx.$implicit;
    const i_r470 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("value", plan_r469)("selected", i_r470 === 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](plan_r469);
  }
}
function ClaimSubmissionPage_form_20_div_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 70)(1, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](3, 1, "clms_submison_accedentDeathClm.err_planTypeReq"));
  }
}
function ClaimSubmissionPage_form_20_div_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 70)(1, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](3, 1, "clms_submison_accedentDeathClm.err_policyNoReq"));
  }
}
function ClaimSubmissionPage_form_20_div_19_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 70)(1, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](3, 1, "clms_submison_accedentDeathClm.policyNoLength_req"));
  }
}
function ClaimSubmissionPage_form_20_div_20_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 70)(1, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](3, 1, "clms_submison_accedentDeathClm.policyNoPattern_req"));
  }
}
function ClaimSubmissionPage_form_20_div_21_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 70)(1, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](3, 1, "clms_submison_accedentDeathClm.policyNoPattern_req"));
  }
}
function ClaimSubmissionPage_form_20_div_30_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 70)(1, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](3, 1, "clms_submison_accedentDeathClm.err_lifeAssuredReq"));
  }
}
function ClaimSubmissionPage_form_20_div_31_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 70)(1, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](3, 1, "clms_submison_accedentDeathClm.lifeAssuredLength_req"));
  }
}
function ClaimSubmissionPage_form_20_div_32_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 70)(1, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](3, 1, "clms_submison_accedentDeathClm.lifeAssuredPattern_req"));
  }
}
function ClaimSubmissionPage_form_20_div_33_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 70)(1, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](3, 1, "clms_submison_accedentDeathClm.lifeAssuredPattern_req"));
  }
}
function ClaimSubmissionPage_form_20_div_42_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 70)(1, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](3, 1, "clms_submison_accedentDeathClm.err_NRICNoReq"));
  }
}
function ClaimSubmissionPage_form_20_div_43_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 70)(1, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](3, 1, "clms_submison_accedentDeathClm.err_NRICNoLength_req"));
  }
}
function ClaimSubmissionPage_form_20_div_44_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 70)(1, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](3, 1, "clms_submison_accedentDeathClm.err_NRICNoPattern_req"));
  }
}
function ClaimSubmissionPage_form_20_div_45_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 70)(1, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](3, 1, "clms_submison_accedentDeathClm.err_NRICNoPattern_req"));
  }
}
function ClaimSubmissionPage_form_20_ion_datetime_55_Template(rf, ctx) {
  if (rf & 1) {
    const _r473 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "ion-datetime", 126, 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("ionChange", function ClaimSubmissionPage_form_20_ion_datetime_55_Template_ion_datetime_ionChange_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r473);
      const _r471 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵreference"](1);
      const ctx_r472 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r472.dateChanged(_r471.value));
    })("ionCancel", function ClaimSubmissionPage_form_20_ion_datetime_55_Template_ion_datetime_ionCancel_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r473);
      const ctx_r474 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r474.showPicker = false);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](2, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r432 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpropertyInterpolate"]("max", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind2"](2, 2, ctx_r432.today, "yyyy-MM-dd"));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("value", ctx_r432.dateValue);
  }
}
function ClaimSubmissionPage_form_20_ion_select_option_61_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "ion-select-option", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const reason_r475 = ctx.$implicit;
    const i_r476 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("value", reason_r475)("selected", i_r476 === 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](reason_r475);
  }
}
function ClaimSubmissionPage_form_20_ion_select_option_67_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "ion-select-option", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const activity_r477 = ctx.$implicit;
    const i_r478 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("value", activity_r477)("selected", i_r478 === 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](activity_r477);
  }
}
function ClaimSubmissionPage_form_20_ion_select_option_73_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "ion-select-option", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const value_r479 = ctx.$implicit;
    const i_r480 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("value", value_r479)("selected", i_r480 === 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](value_r479);
  }
}
function ClaimSubmissionPage_form_20_ion_select_option_79_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "ion-select-option", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const value_r481 = ctx.$implicit;
    const i_r482 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("value", value_r481)("selected", i_r482 === 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](value_r481);
  }
}
function ClaimSubmissionPage_form_20_div_91_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 70)(1, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](3, 1, "clms_submison_accedentDeathClm.err_claimantNameReq"));
  }
}
function ClaimSubmissionPage_form_20_div_92_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 70)(1, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](3, 1, "clms_submison_accedentDeathClm.err_claimantNameLength_req"));
  }
}
function ClaimSubmissionPage_form_20_div_93_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 70)(1, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](3, 1, "clms_submison_accedentDeathClm.err_claimantNameLength_req"));
  }
}
function ClaimSubmissionPage_form_20_div_94_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 70)(1, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](3, 1, "clms_submison_accedentDeathClm.err_claimantNameLength_req"));
  }
}
function ClaimSubmissionPage_form_20_div_109_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 70)(1, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](3, 1, "clms_submison_accedentDeathClm.err_addressReq"));
  }
}
function ClaimSubmissionPage_form_20_div_110_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 70)(1, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](3, 1, "clms_submison_accedentDeathClm.err_addressLength_req"));
  }
}
function ClaimSubmissionPage_form_20_div_111_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 70)(1, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](3, 1, "clms_submison_accedentDeathClm.err_addressMaxLength_req"));
  }
}
function ClaimSubmissionPage_form_20_div_120_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 70)(1, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](3, 1, "clms_submison_accedentDeathClm.err_postalCodeReq"));
  }
}
function ClaimSubmissionPage_form_20_div_121_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 70)(1, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](3, 1, "clms_submison_accedentDeathClm.err_postalCodeLength_req"));
  }
}
function ClaimSubmissionPage_form_20_div_122_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 70)(1, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](3, 1, "clms_submison_accedentDeathClm.err_postalCodeMaxLength_req"));
  }
}
function ClaimSubmissionPage_form_20_div_123_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 70)(1, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](3, 1, "clms_submison_accedentDeathClm.err_postalCodePattern_req"));
  }
}
function ClaimSubmissionPage_form_20_ion_select_option_131_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "ion-select-option", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const state_r483 = ctx.$implicit;
    const i_r484 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("value", state_r483)("selected", i_r484 === 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](state_r483);
  }
}
function ClaimSubmissionPage_form_20_div_132_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 70)(1, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](3, 1, "clms_submison_accedentDeathClm.err_stateReq"));
  }
}
function ClaimSubmissionPage_form_20_div_147_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 70)(1, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](3, 1, "clms_submison_accedentDeathClm.err_mobileNoReq"));
  }
}
function ClaimSubmissionPage_form_20_div_148_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 70)(1, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](3, 1, "clms_submison_accedentDeathClm.err_invalidMno"));
  }
}
function ClaimSubmissionPage_form_20_div_149_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 70)(1, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](3, 1, "clms_submison_accedentDeathClm.err_mobileNoLength_req"));
  }
}
function ClaimSubmissionPage_form_20_div_150_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 70)(1, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](3, 1, "clms_submison_accedentDeathClm.err_mobileNoLength_req"));
  }
}
function ClaimSubmissionPage_form_20_div_151_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 70)(1, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](3, 1, "clms_submison_accedentDeathClm.err_mobileNoLength_req"));
  }
}
function ClaimSubmissionPage_form_20_div_160_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 70)(1, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](3, 1, "clms_submison_accedentDeathClm.err_emailReq"));
  }
}
function ClaimSubmissionPage_form_20_div_161_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 70)(1, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](3, 1, "clms_submison_accedentDeathClm.err_emailValid"));
  }
}
function ClaimSubmissionPage_form_20_ion_select_option_173_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "ion-select-option", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const bank_r485 = ctx.$implicit;
    const i_r486 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("value", bank_r485)("selected", i_r486 === 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](bank_r485);
  }
}
function ClaimSubmissionPage_form_20_div_180_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 70)(1, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](3, 1, "cclms_submison_accedentDeathClm.err_ClmAccountNamePattern_req"));
  }
}
function ClaimSubmissionPage_form_20_div_181_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 70)(1, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](3, 1, "cclms_submison_accedentDeathClm.err_ClmAccountNamePattern_req"));
  }
}
function ClaimSubmissionPage_form_20_div_188_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 70)(1, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](3, 1, "clms_submison_accedentDeathClm.err_ClmAccountNoPattern_req"));
  }
}
function ClaimSubmissionPage_form_20_div_189_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 70)(1, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](3, 1, "clms_submison_accedentDeathClm.err_ClmAccountNoPattern_req"));
  }
}
function ClaimSubmissionPage_form_20_ion_grid_196_Template(rf, ctx) {
  if (rf & 1) {
    const _r490 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "ion-grid", 73)(1, "ion-row", 74)(2, "ion-col", 75)(3, "ion-item", 13)(4, "ion-input", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function ClaimSubmissionPage_form_20_ion_grid_196_Template_ion_input_click_4_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r490);
      const i_r488 = restoredCtx.index;
      const ctx_r489 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r489.chooseCameraOptions(i_r488, "accidentDeathClaimForm"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](6, "ion-icon", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function ClaimSubmissionPage_form_20_ion_grid_196_Template_ion_icon_click_6_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r490);
      const i_r488 = restoredCtx.index;
      const ctx_r491 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r491.chooseCameraOptions(i_r488, "accidentDeathClaimForm"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](7, "ion-icon", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function ClaimSubmissionPage_form_20_ion_grid_196_Template_ion_icon_click_7_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r490);
      const i_r488 = restoredCtx.index;
      const ctx_r492 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r492.removeAttachmentField(i_r488, "accidentDeathClaimForm"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()()()();
  }
  if (rf & 2) {
    const i_r488 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("formGroupName", i_r488);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](5, 2, "clms_submison_house.plcHldr_uploadDoc"));
  }
}
function ClaimSubmissionPage_form_20_div_197_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 94)(1, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](3, 1, "clms_submison_accedentDeathClm.err_uploadDocReq"));
  }
}
function ClaimSubmissionPage_form_20_ion_button_200_Template(rf, ctx) {
  if (rf & 1) {
    const _r494 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "ion-button", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function ClaimSubmissionPage_form_20_ion_button_200_Template_ion_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r494);
      const ctx_r493 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r493.addNewAttachmentField("accidentDeathClaimForm"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1, " Add More");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r464 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("disabled", ctx_r464.accidentDeathClaimForm.controls.attachments.controls[ctx_r464.accidentDeathClaimForm.controls.attachments.length - 1].controls.filename.hasError("required"));
  }
}
function ClaimSubmissionPage_form_20_div_231_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div")(1, "span", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](3, 1, "clms_submison_accedentDeathClm.claim_disclaimer_req"));
  }
}
function ClaimSubmissionPage_form_20_div_274_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 70)(1, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](3, 1, "captcha_req"));
  }
}
function ClaimSubmissionPage_form_20_Template(rf, ctx) {
  if (rf & 1) {
    const _r496 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "form", 11)(1, "p", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](4, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](5, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](6, "div", 13)(7, "ion-select", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](8, ClaimSubmissionPage_form_20_ion_select_option_8_Template, 2, 3, "ion-select-option", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](9, ClaimSubmissionPage_form_20_div_9_Template, 4, 3, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](10, "p", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](12, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](13, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](14, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](15, "ion-item", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](16, "ion-input", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](17, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](18, ClaimSubmissionPage_form_20_div_18_Template, 4, 3, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](19, ClaimSubmissionPage_form_20_div_19_Template, 4, 3, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](20, ClaimSubmissionPage_form_20_div_20_Template, 4, 3, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](21, ClaimSubmissionPage_form_20_div_21_Template, 4, 3, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](22, "p", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](23);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](24, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](25, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](26, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](27, "ion-item", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](28, "ion-input", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](29, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](30, ClaimSubmissionPage_form_20_div_30_Template, 4, 3, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](31, ClaimSubmissionPage_form_20_div_31_Template, 4, 3, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](32, ClaimSubmissionPage_form_20_div_32_Template, 4, 3, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](33, ClaimSubmissionPage_form_20_div_33_Template, 4, 3, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](34, "p", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](35);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](36, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](37, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](38, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](39, "ion-item", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](40, "ion-input", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](41, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](42, ClaimSubmissionPage_form_20_div_42_Template, 4, 3, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](43, ClaimSubmissionPage_form_20_div_43_Template, 4, 3, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](44, ClaimSubmissionPage_form_20_div_44_Template, 4, 3, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](45, ClaimSubmissionPage_form_20_div_45_Template, 4, 3, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](46, "p", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](47);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](48, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](49, "ion-item", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function ClaimSubmissionPage_form_20_Template_ion_item_click_49_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r496);
      const ctx_r495 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r495.showPicker = !ctx_r495.showPicker);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](50, "ion-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](51);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](52, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](53, "ion-text", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](54);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](55, ClaimSubmissionPage_form_20_ion_datetime_55_Template, 3, 5, "ion-datetime", 122);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](56, "p", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](57);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](58, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](59, "div", 13)(60, "ion-select", 108);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](61, ClaimSubmissionPage_form_20_ion_select_option_61_Template, 2, 3, "ion-select-option", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](62, "p", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](63);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](64, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](65, "div", 13)(66, "ion-select", 123);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](67, ClaimSubmissionPage_form_20_ion_select_option_67_Template, 2, 3, "ion-select-option", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](68, "p", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](69);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](70, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](71, "div", 13)(72, "ion-select", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](73, ClaimSubmissionPage_form_20_ion_select_option_73_Template, 2, 3, "ion-select-option", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](74, "p", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](75);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](76, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](77, "div", 13)(78, "ion-select", 124);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](79, ClaimSubmissionPage_form_20_ion_select_option_79_Template, 2, 3, "ion-select-option", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](80, "p", 109);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](81);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](82, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](83, "p", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](84);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](85, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](86, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](87, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](88, "ion-item", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](89, "ion-input", 110);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](90, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](91, ClaimSubmissionPage_form_20_div_91_Template, 4, 3, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](92, ClaimSubmissionPage_form_20_div_92_Template, 4, 3, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](93, ClaimSubmissionPage_form_20_div_93_Template, 4, 3, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](94, ClaimSubmissionPage_form_20_div_94_Template, 4, 3, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](95, "p", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](96);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](97, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](98, "ion-item", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](99, "ion-input", 111);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](100, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](101, "p", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](102);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](103, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](104, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](105, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](106, "ion-item", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](107, "ion-input", 112);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](108, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](109, ClaimSubmissionPage_form_20_div_109_Template, 4, 3, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](110, ClaimSubmissionPage_form_20_div_110_Template, 4, 3, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](111, ClaimSubmissionPage_form_20_div_111_Template, 4, 3, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](112, "p", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](113);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](114, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](115, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](116, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](117, "ion-item", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](118, "ion-input", 113);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](119, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](120, ClaimSubmissionPage_form_20_div_120_Template, 4, 3, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](121, ClaimSubmissionPage_form_20_div_121_Template, 4, 3, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](122, ClaimSubmissionPage_form_20_div_122_Template, 4, 3, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](123, ClaimSubmissionPage_form_20_div_123_Template, 4, 3, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](124, "p", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](125);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](126, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](127, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](128, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](129, "div", 13)(130, "ion-select", 114);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](131, ClaimSubmissionPage_form_20_ion_select_option_131_Template, 2, 3, "ion-select-option", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](132, ClaimSubmissionPage_form_20_div_132_Template, 4, 3, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](133, "p", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](134);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](135, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](136, "ion-item", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](137, "ion-input", 115);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](138, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](139, "p", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](140);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](141, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](142, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](143, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](144, "ion-item", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](145, "ion-input", 116);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](146, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](147, ClaimSubmissionPage_form_20_div_147_Template, 4, 3, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](148, ClaimSubmissionPage_form_20_div_148_Template, 4, 3, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](149, ClaimSubmissionPage_form_20_div_149_Template, 4, 3, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](150, ClaimSubmissionPage_form_20_div_150_Template, 4, 3, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](151, ClaimSubmissionPage_form_20_div_151_Template, 4, 3, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](152, "p", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](153);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](154, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](155, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](156, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](157, "ion-item", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](158, "ion-input", 117);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](159, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](160, ClaimSubmissionPage_form_20_div_160_Template, 4, 3, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](161, ClaimSubmissionPage_form_20_div_161_Template, 4, 3, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](162, "p", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](163);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](164, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](165, "ion-item", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](166, "ion-input", 118);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](167, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](168, "p", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](169);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](170, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](171, "div", 13)(172, "ion-select", 125);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](173, ClaimSubmissionPage_form_20_ion_select_option_173_Template, 2, 3, "ion-select-option", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](174, "p", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](175);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](176, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](177, "ion-item", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](178, "ion-input", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](179, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](180, ClaimSubmissionPage_form_20_div_180_Template, 4, 3, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](181, ClaimSubmissionPage_form_20_div_181_Template, 4, 3, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](182, "p", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](183);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](184, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](185, "ion-item", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](186, "ion-input", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](187, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](188, ClaimSubmissionPage_form_20_div_188_Template, 4, 3, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](189, ClaimSubmissionPage_form_20_div_189_Template, 4, 3, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](190, "div", 38)(191, "p", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](192);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](193, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](194, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](195, " *");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](196, ClaimSubmissionPage_form_20_ion_grid_196_Template, 8, 4, "ion-grid", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](197, ClaimSubmissionPage_form_20_div_197_Template, 4, 3, "div", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](198, "ion-row")(199, "ion-col", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](200, ClaimSubmissionPage_form_20_ion_button_200_Template, 2, 1, "ion-button", 119);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](201, "p", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](202);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](203, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](204, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](205, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](206, "ion-item", 43)(207, "div")(208, "a", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](209);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](210, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](211, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](212);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](213, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](214, "a", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](215);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](216, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](217, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](218);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](219, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](220, "a", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](221);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](222, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](223, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](224);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](225, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](226, "ion-row", 46)(227, "ion-checkbox", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("ionChange", function ClaimSubmissionPage_form_20_Template_ion_checkbox_ionChange_227_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r496);
      const ctx_r497 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r497.checkboxChange($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](228, "span", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](229);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](230, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](231, ClaimSubmissionPage_form_20_div_231_Template, 4, 3, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](232, "p", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](233);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](234, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](235, "ion-item", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](236, "ion-input", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](237, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](238, "p", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](239);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](240, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](241, "ion-item", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](242, "ion-input", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](243, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](244, "p", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](245);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](246, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](247, "ion-item", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](248, "ion-input", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](249, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](250, "p", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](251);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](252, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](253, "ion-item", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](254, "ion-input", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](255, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](256, "p", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](257);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](258, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](259, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](260, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](261, "ion-row")(262, "ion-item", 92)(263, "ion-col", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](264, "canvas", 58, 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](266, "ion-col", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](267, "ion-col", 61)(268, "div", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function ClaimSubmissionPage_form_20_Template_div_click_268_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r496);
      const ctx_r498 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r498.refreshCaptcha(ctx_r498.accidentDeathClaimForm));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](269, "i", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](270, "ion-item", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](271, "ion-input", 64, 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](273, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](274, ClaimSubmissionPage_form_20_div_274_Template, 4, 3, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](275, "p", 66)(276, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](277, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](278);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](279, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](280, "ion-row")(281, "ion-col", 67)(282, "ion-button", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function ClaimSubmissionPage_form_20_Template_ion_button_click_282_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r496);
      const ctx_r499 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r499.submitAccidentDeathClaim(ctx_r499.accidentDeathClaimForm));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](283);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](284, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("formGroup", ctx_r6.accidentDeathClaimForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](3, 117, "clms_submison_accedentDeathClm.planType"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("interfaceOptions", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpureFunction0"](231, _c2));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngForOf", ctx_r6.typeOfPlans);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r6.accidentDeathClaimForm.get("typeOfPlan").hasError("required") && ctx_r6.accidentDeathClaimForm.get("typeOfPlan").touched);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](12, 119, "clms_submison_accedentDeathClm.policyNo"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](17, 121, "clms_submison_accedentDeathClm.policyNo"));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r6.accidentDeathClaimForm.get("contract_no").hasError("required") && ctx_r6.accidentDeathClaimForm.get("contract_no").touched);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r6.accidentDeathClaimForm.get("contract_no").hasError("minlength") && ctx_r6.accidentDeathClaimForm.get("contract_no").touched);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r6.accidentDeathClaimForm.get("contract_no").hasError("pattern") && ctx_r6.accidentDeathClaimForm.get("contract_no").touched && !ctx_r6.accidentDeathClaimForm.get("contract_no").hasError("minlength"));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r6.accidentDeathClaimForm.get("contract_no").hasError("maxlength") && ctx_r6.accidentDeathClaimForm.get("contract_no").touched && !ctx_r6.accidentDeathClaimForm.get("contract_no").hasError("pattern"));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](24, 123, "clms_submison_accedentDeathClm.lifeAssured"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](29, 125, "clms_submison_accedentDeathClm.lifeAssured"));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r6.accidentDeathClaimForm.get("insuarance_pername_name").hasError("required") && ctx_r6.accidentDeathClaimForm.get("insuarance_pername_name").touched);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r6.accidentDeathClaimForm.get("insuarance_pername_name").hasError("minlength") && ctx_r6.accidentDeathClaimForm.get("insuarance_pername_name").touched);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r6.accidentDeathClaimForm.get("insuarance_pername_name").hasError("pattern") && ctx_r6.accidentDeathClaimForm.get("insuarance_pername_name").touched && !ctx_r6.accidentDeathClaimForm.get("insuarance_pername_name").hasError("minlength"));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r6.accidentDeathClaimForm.get("insuarance_pername_name").hasError("maxlength") && ctx_r6.accidentDeathClaimForm.get("insuarance_pername_name").touched && !ctx_r6.accidentDeathClaimForm.get("insuarance_pername_name").hasError("pattern"));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](36, 127, "clms_submison_accedentDeathClm.NRICNo"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](41, 129, "clms_submison_accedentDeathClm.NRICNo"));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r6.accidentDeathClaimForm.get("nric_no").hasError("required") && ctx_r6.accidentDeathClaimForm.get("nric_no").touched);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r6.accidentDeathClaimForm.get("nric_no").hasError("minlength") && ctx_r6.accidentDeathClaimForm.get("nric_no").touched);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r6.accidentDeathClaimForm.get("nric_no").hasError("pattern") && ctx_r6.accidentDeathClaimForm.get("nric_no").touched && !ctx_r6.accidentDeathClaimForm.get("nric_no").hasError("minlength"));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r6.accidentDeathClaimForm.get("nric_no").hasError("maxlength") && ctx_r6.accidentDeathClaimForm.get("nric_no").touched && !ctx_r6.accidentDeathClaimForm.get("nric_no").hasError("pattern"));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](48, 131, "clms_submison_accedentDeathClm.deathDate"));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](52, 133, "clms_submison_accedentDeathClm.deathDate"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](ctx_r6.formattdString);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r6.showPicker);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](58, 135, "clms_submison_accedentDeathClm.deathCause"));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("interfaceOptions", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpureFunction0"](232, _c2))("disabled", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngForOf", ctx_r6.deathReasons);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](64, 137, "clms_submison_accedentDeathClm.accidentType"));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("interfaceOptions", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpureFunction0"](233, _c2));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngForOf", ctx_r6.accitivityAtTheTimeOfAccidents);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](70, 139, "clms_submison_accedentDeathClm.reportedToPolice"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("interfaceOptions", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpureFunction0"](234, _c2));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngForOf", ctx_r6.radioValues);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](76, 141, "clms_submison_accedentDeathClm.anyPostMortem"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("interfaceOptions", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpureFunction0"](235, _c2));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngForOf", ctx_r6.radioValues);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](82, 143, "clms_submison_accedentDeathClm.claimantsParticulars"));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](85, 145, "clms_submison_accedentDeathClm.claimantName"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](90, 147, "clms_submison_accedentDeathClm.claimantName"));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r6.accidentDeathClaimForm.get("claimants_name").hasError("required") && ctx_r6.accidentDeathClaimForm.get("claimants_name").touched);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r6.accidentDeathClaimForm.get("claimants_name").hasError("minlength") && ctx_r6.accidentDeathClaimForm.get("claimants_name").touched);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r6.accidentDeathClaimForm.get("claimants_name").hasError("pattern") && ctx_r6.accidentDeathClaimForm.get("claimants_name").touched && !ctx_r6.accidentDeathClaimForm.get("claimants_name").hasError("minlength"));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r6.accidentDeathClaimForm.get("claimants_name").hasError("maxlength") && ctx_r6.accidentDeathClaimForm.get("claimants_name").touched && !ctx_r6.accidentDeathClaimForm.get("claimants_name").hasError("pattern"));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](97, 149, "clms_submison_accedentDeathClm.NRICNo"));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](100, 151, "clms_submison_accedentDeathClm.NRICNo"));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](103, 153, "clms_submison_accedentDeathClm.address"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](108, 155, "clms_submison_accedentDeathClm.address"));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r6.accidentDeathClaimForm.get("claimants_address").hasError("required") && ctx_r6.accidentDeathClaimForm.get("claimants_address").touched);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r6.accidentDeathClaimForm.get("claimants_address").hasError("minlength") && ctx_r6.accidentDeathClaimForm.get("claimants_address").touched);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r6.accidentDeathClaimForm.get("claimants_address").hasError("maxlength") && ctx_r6.accidentDeathClaimForm.get("claimants_address").touched && !ctx_r6.accidentDeathClaimForm.get("claimants_address").hasError("minlength"));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](114, 157, "clms_submison_accedentDeathClm.postCode"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](119, 159, "clms_submison_accedentDeathClm.postCode"));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r6.accidentDeathClaimForm.get("claimants_postcode").hasError("required") && ctx_r6.accidentDeathClaimForm.get("claimants_postcode").touched);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r6.accidentDeathClaimForm.get("claimants_postcode").hasError("minlength") && ctx_r6.accidentDeathClaimForm.get("claimants_postcode").touched);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r6.accidentDeathClaimForm.get("claimants_postcode").hasError("pattern") && ctx_r6.accidentDeathClaimForm.get("claimants_postcode").touched && !ctx_r6.accidentDeathClaimForm.get("claimants_postcode").hasError("minlength"));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r6.accidentDeathClaimForm.get("claimants_postcode").hasError("maxlength") && ctx_r6.accidentDeathClaimForm.get("claimants_postcode").touched && !ctx_r6.accidentDeathClaimForm.get("claimants_postcode").hasError("pattern"));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](126, 161, "clms_submison_accedentDeathClm.state"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("interfaceOptions", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpureFunction0"](236, _c2));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngForOf", ctx_r6.claimantsStates);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r6.accidentDeathClaimForm.get("claimants_state").hasError("required") && ctx_r6.accidentDeathClaimForm.get("claimants_state").touched);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](135, 163, "clms_submison_accedentDeathClm.telephoneNo"));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](138, 165, "clms_submison_accedentDeathClm.telephoneNo"));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](141, 167, "clms_submison_accedentDeathClm.mobileNo"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](146, 169, "clms_submison_accedentDeathClm.mobileNo"));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r6.accidentDeathClaimForm.get("claimants_mobile").hasError("required") && ctx_r6.accidentDeathClaimForm.get("claimants_mobile").touched);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r6.accidentDeathClaimForm.get("claimants_mobile").hasError("validateNonZeroVal"));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r6.accidentDeathClaimForm.get("claimants_mobile").hasError("minlength"));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r6.accidentDeathClaimForm.get("claimants_mobile").hasError("pattern") && !ctx_r6.accidentDeathClaimForm.get("claimants_mobile").hasError("minlength"));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r6.accidentDeathClaimForm.get("claimants_mobile").hasError("maxlength") && !ctx_r6.accidentDeathClaimForm.get("claimants_mobile").hasError("pattern"));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](154, 171, "clms_submison_accedentDeathClm.email"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](159, 173, "clms_submison_accedentDeathClm.email"));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r6.accidentDeathClaimForm.get("claimants_email").hasError("required") && ctx_r6.accidentDeathClaimForm.get("claimants_email").touched);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", !ctx_r6.accidentDeathClaimForm.get("claimants_email").hasError("required") && ctx_r6.accidentDeathClaimForm.get("claimants_email").hasError("pattern"));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](164, 175, "clms_submison_accedentDeathClm.relation"));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](167, 177, "clms_submison_accedentDeathClm.relation"));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](170, 179, "clms_submison_accedentDeathClm.bankName"));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngForOf", ctx_r6.claimantsBanks);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](176, 181, "clms_submison_accedentDeathClm.bankAccName"));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](179, 183, "clms_submison_accedentDeathClm.bankAccName"));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r6.accidentDeathClaimForm.get("claimants_act_name").hasError("pattern"));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r6.accidentDeathClaimForm.get("claimants_act_name").hasError("maxlength") && !ctx_r6.accidentDeathClaimForm.get("claimants_act_name").hasError("pattern"));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](184, 185, "clms_submison_accedentDeathClm.bankAccNo"));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](187, 187, "clms_submison_accedentDeathClm.bankAccNo"));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r6.accidentDeathClaimForm.get("claimants_act_no").hasError("pattern"));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r6.accidentDeathClaimForm.get("claimants_act_no").hasError("maxlength") && !ctx_r6.accidentDeathClaimForm.get("claimants_act_no").hasError("pattern"));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](193, 189, "clms_submison_house.uploadFile"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngForOf", ctx_r6.accidentDeathClaimForm.controls.attachments.controls);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r6.accidentDeathClaimForm.controls.attachments.controls[ctx_r6.accidentDeathClaimForm.controls.attachments.length - 1].controls.filename.touched && ctx_r6.accidentDeathClaimForm.controls.attachments.controls[ctx_r6.accidentDeathClaimForm.controls.attachments.length - 1].controls.filename.hasError("required"));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", !ctx_r6.accidentDeathClaimForm.controls.attachments.controls[0].controls.filename.hasError("required"));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](203, 191, "clms_submison_accedentDeathClm.claim_disclaimer"));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](210, 193, "clms_submison_accedentDeathClm.Disclaimer_title1"));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](213, 195, "clms_submison_accedentDeathClm.claim_disclaimer_text1"));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](216, 197, "clms_submison_accedentDeathClm.Disclaimer_title2"));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](219, 199, "clms_submison_accedentDeathClm.claim_disclaimer_text2"));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](222, 201, "clms_submison_accedentDeathClm.Disclaimer_title3"));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](225, 203, "clms_submison_accedentDeathClm.claim_disclaimer_text3"));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("checked", ctx_r6.disclaimer_terms);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](230, 205, "clms_submison_accedentDeathClm.agree"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r6.accidentDeathClaimForm.controls.disclaimer.value === false && ctx_r6.accidentDeathClaimForm.get("disclaimer").touched);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](234, 207, "clms_submison_accedentDeathClm.remark"));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](237, 209, "clms_submison_accedentDeathClm.remark"));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](240, 211, "clms_submison_accedentDeathClm.agent_Name"));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](243, 213, "clms_submison_accedentDeathClm.agent_Name"));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](246, 215, "clms_submison_accedentDeathClm.agent_No"));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](249, 217, "clms_submison_accedentDeathClm.agent_No"));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](252, 219, "clms_submison_accedentDeathClm.agent_Mobile"));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](255, 221, "clms_submison_accedentDeathClm.agent_Mobile"));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](258, 223, "enterthetext"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](273, 225, "entertextintheaboveimage"));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r6.accidentDeathClaimForm.get("captcha").hasError("required") && ctx_r6.accidentDeathClaimForm.get("captcha").touched && !ctx_r6.isValidUser);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](279, 227, "allfieldsarecompulsory"));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("disabled", !ctx_r6.accidentDeathClaimForm.valid || !ctx_r6.disclaimer_terms);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](284, 229, "clms_submison_accedentDeathClm.sbtClms"));
  }
}
class ClaimSubmissionPage {
  constructor(
  //public navParams: NavParams,
  _DomSanitizer, utils, fb, actionSheetCtrl, camera, base64, submitService, alertCtrl, translate, config, filePath, fileChooser, router, docPicker, device, file, chooser) {
    this._DomSanitizer = _DomSanitizer;
    this.utils = utils;
    this.fb = fb;
    this.actionSheetCtrl = actionSheetCtrl;
    this.camera = camera;
    this.base64 = base64;
    this.submitService = submitService;
    this.alertCtrl = alertCtrl;
    this.translate = translate;
    this.config = config;
    this.filePath = filePath;
    this.fileChooser = fileChooser;
    this.router = router;
    this.docPicker = docPicker;
    this.device = device;
    this.file = file;
    this.chooser = chooser;
    this.showCanvas = false;
    this.typeofClaimList = [];
    this.showPicker = false;
    this.showTimePicker = false;
    this.showPickerDiagnose = false;
    this.formattdString = '';
    this.formatedTimeString = '';
    this.dateValue = (0,date_fns__WEBPACK_IMPORTED_MODULE_12__["default"])(new Date(), 'yyyy-MM-dd');
    this.dateValuedeath = (0,date_fns__WEBPACK_IMPORTED_MODULE_12__["default"])(new Date(), 'yyyy-MM-dd');
    this.isDeathAccident = false;
    /**
     * Types of Claims
     */
    this.typeOfClaims = [];
    /**
     * Types of Plans
     */
    this.typeOfPlans = [];
    this.typeOfPlans1 = [];
    /**
     * Types of deathsReasons
     */
    this.deathReasons = [];
    /**
     * Types of Activities at the time of Accident
     */
    this.accitivityAtTheTimeOfAccidents = [];
    /**
     * List of States
     */
    this.claimantsStates = [];
    /**
     * List of Banks
     */
    this.claimantsBanks = [];
    /**
     * Types of Nature of Loss
     */
    this.typesOfLoss = [];
    /**
     * Types of Illness
     */
    this.typesOfIllness = [];
    /**
     * Model Object for forms
     */
    this.claimFormModel = {};
    /**to restrict date picker to current date */
    this.today = Date.now();
    /**To set deathDate by default today date */
    this.deathMinDate = Date.now();
    /**Radio values */
    this.radioValues = [];
    this.disclaimer_terms = true;
    this.mimeTypes = {
      jpg: 'image/jpeg',
      jpeg: 'image/jpeg',
      png: 'image/png',
      pdf: 'application/pdf',
      zip: 'application/zip'
    };
    this.alphaNum = '[A-Za-z0-9]*';
    this.alphaNumWspace = '[A-Za-z0-9 ]*';
    this.alphaValWspace = '[A-Za-z ]*';
    /**
     * Method to initiate Critical Illness Claim form
     */
    this.loadCriticalIllnessForm = function () {
      this.criticalIllnessClaimForm = this.fb.group({
        typeOfClaims: [''],
        typeOfPlan: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.required],
        contract_no: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.minLength(3), _angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.maxLength(40), _angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.pattern(this.alphaNum)]],
        insuarance_pername_name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.minLength(3), _angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.maxLength(100), _angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.pattern(this.alphaValWspace)]],
        nric_no: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.minLength(4), _angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.maxLength(40), _angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.pattern(this.alphaNumWspace)]],
        address: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.minLength(4), _angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.maxLength(200)]],
        postcode: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.minLength(1), _angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.maxLength(10), _angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.pattern(this.alphaNum)]],
        state: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.required],
        telephone: [],
        mobile: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.required, this.utils.validateNonZeroVal, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.minLength(8), _angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.maxLength(20), _angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.pattern('[0-9]*')]],
        email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.pattern(this.EMAIL_PATTERN)]],
        claimants_bank: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.required],
        claimants_act_name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.maxLength(100), _angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.pattern(this.alphaNumWspace)]],
        claimants_act_no: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.maxLength(50), _angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.pattern(this.alphaNumWspace)]],
        type_of_illness: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.required],
        doctors_address: [],
        remarks: [],
        agent_name: [],
        agent_number: [],
        agent_mobile_number: [],
        disclaimer: [{
          value: true,
          disabled: false
        }],
        captcha: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.required],
        attachments: this.fb.array([this.initAttchmentFields()])
      });
      this.criticalIllnessClaimForm.controls['typeOfClaims'].setValue(this.type);
      this.criticalIllnessClaimForm.controls['typeOfPlan'].setValue(this.typeOfPlans1[0], {
        onlySelf: true
      });
      this.criticalIllnessClaimForm.controls['type_of_illness'].setValue(this.typesOfIllness[0], {
        onlySelf: true
      });
      this.criticalIllnessClaimForm.controls['state'].setValue(this.claimantsStates[0], {
        onlySelf: true
      });
      this.criticalIllnessClaimForm.controls['claimants_bank'].setValue(this.claimantsBanks[0], {
        onlySelf: true
      });
    };
    /**
     * Method to initiate Total and Permanent Disablity Claim form
     */
    this.loadTotalDisabilityForm = function () {
      this.totalDisabilityClaimForm = this.fb.group({
        typeOfClaims: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.required],
        typeOfPlan: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.required],
        contract_no: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.minLength(3), _angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.maxLength(40), _angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.pattern(this.alphaNum)]],
        insuarance_pername_name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.minLength(3), _angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.maxLength(100), _angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.pattern(this.alphaValWspace)]],
        nric_no: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.minLength(4), _angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.maxLength(40), _angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.pattern(this.alphaNumWspace)]],
        address: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.minLength(4), _angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.maxLength(200)]],
        postcode: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.minLength(1), _angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.maxLength(10), _angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.pattern(this.alphaNum)]],
        state: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.required],
        telephone: [],
        mobile: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.required, this.utils.validateNonZeroVal, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.minLength(8), _angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.maxLength(20), _angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.pattern('[0-9]*')]],
        email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.pattern(this.EMAIL_PATTERN)]],
        occupation_prior: [],
        currentEmpStatus: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.required],
        claimants_bank: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.required],
        claimants_act_name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.maxLength(100), _angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.pattern(this.alphaNumWspace)]],
        claimants_act_no: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.maxLength(50), _angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.pattern(this.alphaNumWspace)]],
        remarks: [],
        agent_name: [],
        agent_number: [],
        agent_mobile_number: [],
        disclaimer: [{
          value: true,
          disabled: false
        }],
        captcha: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.required],
        attachments: this.fb.array([this.initAttchmentFields()])
      });
      this.totalDisabilityClaimForm.controls['currentEmpStatus'].setValue(this.radioValues[0], {
        onlySelf: true
      });
      this.totalDisabilityClaimForm.controls['typeOfClaims'].setValue(this.typeOfClaims[3], {
        onlySelf: true
      });
      this.totalDisabilityClaimForm.controls['typeOfPlan'].setValue(this.typeOfPlans[0], {
        onlySelf: true
      });
      this.totalDisabilityClaimForm.controls['state'].setValue(this.claimantsStates[0], {
        onlySelf: true
      });
      this.totalDisabilityClaimForm.controls['claimants_bank'].setValue(this.claimantsBanks[0], {
        onlySelf: true
      });
    };
    /**
     * Method to initiate Hospital and Surgical Claim form
     */
    this.loadHospitalClaimForm = function () {
      this.hospitalClaimForm = this.fb.group({
        typeOfClaims: [''],
        typeOfPlan: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.required],
        contract_no: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.minLength(3), _angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.maxLength(40), _angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.pattern(this.alphaNum)]],
        insuarance_pername_name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.minLength(3), _angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.maxLength(100), _angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.pattern(this.alphaValWspace)]],
        nric_no: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.minLength(4), _angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.maxLength(40), _angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.pattern(this.alphaNumWspace)]],
        address: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.minLength(4), _angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.maxLength(200), _angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.maxLength(200)]],
        postcode: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.minLength(1), _angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.maxLength(10), _angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.pattern(this.alphaNum)]],
        state: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.required],
        telephone: [],
        mobile: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.required, this.utils.validateNonZeroVal, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.minLength(8), _angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.maxLength(20), _angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.pattern('[0-9]*')]],
        email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.pattern(this.EMAIL_PATTERN)]],
        claimants_bank: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.required],
        claimants_act_name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.pattern(this.alphaNumWspace), _angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.maxLength(100)]],
        claimants_act_no: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.pattern(this.alphaNumWspace), _angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.maxLength(50)]],
        remarks: [],
        agent_name: [],
        agent_number: [],
        agent_mobile_number: [],
        disclaimer: [{
          value: true,
          disabled: false
        }],
        captcha: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.required],
        attachments: this.fb.array([this.initAttchmentFields()])
      });
      this.hospitalClaimForm.controls['typeOfClaims'].setValue(this.type);
      this.hospitalClaimForm.controls['typeOfPlan'].setValue(this.typeOfPlans[0], {
        onlySelf: true
      });
      this.hospitalClaimForm.controls['state'].setValue(this.claimantsStates[0], {
        onlySelf: true
      });
      this.hospitalClaimForm.controls['claimants_bank'].setValue(this.claimantsBanks[0], {
        onlySelf: true
      });
    };
    /**
     * Method to initiate Comprehensive Accident Benefits Claim form
     */
    this.loadAccidenthsClaimForm = function () {
      this.accidentClaimForm = this.fb.group({
        typeOfClaims: [''],
        typeOfPlan: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.required],
        contract_no: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.minLength(3), _angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.maxLength(40), _angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.pattern(this.alphaNum)]],
        insuarance_pername_name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.minLength(3), _angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.maxLength(100), _angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.pattern(this.alphaValWspace)]],
        nric_no: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.minLength(4), _angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.maxLength(40), _angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.pattern(this.alphaNumWspace)]],
        address: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.minLength(4), _angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.maxLength(200)]],
        postcode: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.minLength(1), _angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.maxLength(10), _angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.pattern(this.alphaNum)]],
        state: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.required],
        telephone: [],
        mobile: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.required, this.utils.validateNonZeroVal, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.minLength(8), _angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.maxLength(20), _angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.pattern('[0-9]*')]],
        email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.pattern(this.EMAIL_PATTERN)]],
        dateofAccident: [''],
        timeOfAccident: [''],
        howAccidentHappened: [''],
        reportedPolice: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.required],
        claimants_bank: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.required],
        claimants_act_name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.pattern(this.alphaNumWspace), _angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.maxLength(100)]],
        claimants_act_no: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.pattern(this.alphaNumWspace), _angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.maxLength(50)]],
        remarks: [],
        agent_name: [],
        agent_number: [],
        agent_mobile_number: [],
        disclaimer: [{
          value: true,
          disabled: false
        }],
        captcha: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.required],
        attachments: this.fb.array([this.initAttchmentFields()])
      });
      this.accidentClaimForm.controls['typeOfClaims'].setValue(this.type);
      this.accidentClaimForm.controls['reportedPolice'].setValue(this.radioValues[1], {
        onlySelf: true
      });
      this.accidentClaimForm.controls['typeOfPlan'].setValue(this.typeOfPlans[0], {
        onlySelf: true
      });
      this.accidentClaimForm.controls['state'].setValue(this.claimantsStates[0], {
        onlySelf: true
      });
      this.accidentClaimForm.controls['claimants_bank'].setValue(this.claimantsBanks[0], {
        onlySelf: true
      });
    };
    /**
    * Method to initiate Illness Death Claim form
    */
    this.loadIllnessDeathClaimForm = function () {
      this.illnessDeathClaimForm = this.fb.group({
        typeOfClaims: [''],
        typeOfPlan: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.required],
        contract_no: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.minLength(3), _angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.maxLength(40), _angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.pattern(this.alphaNum)]],
        insuarance_pername_name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.minLength(3), _angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.maxLength(100), _angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.pattern(this.alphaValWspace)]],
        nric_no: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.minLength(4), _angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.maxLength(40), _angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.pattern(this.alphaNumWspace)]],
        date_of_death: [''],
        deathreason: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.required],
        accitivityAtTheTimeOfAccident: [''],
        first_diagnosed: [''],
        doctors_address: [''],
        claimants_name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.minLength(3), _angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.maxLength(100), _angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.pattern(this.alphaValWspace)]],
        claimants_nric_no: [''],
        claimants_address: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.minLength(4), _angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.maxLength(200), _angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.maxLength(200)]],
        claimants_postcode: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.minLength(1), _angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.maxLength(10), _angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.pattern(this.alphaNum)]],
        claimants_state: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.required],
        claimants_telephone: [''],
        claimants_mobile: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.required, this.utils.validateNonZeroVal, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.minLength(8), _angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.maxLength(20), _angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.pattern('[0-9]*')]],
        claimants_email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.pattern(this.EMAIL_PATTERN)]],
        claimants_relationship: [''],
        claimants_bank: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.required],
        claimants_act_name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.pattern(this.alphaNumWspace), _angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.maxLength(100)]],
        claimants_act_no: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.pattern(this.alphaNumWspace), _angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.maxLength(50)]],
        remarks: [],
        agent_name: [],
        agent_number: [],
        agent_mobile_number: [],
        disclaimer: [{
          value: true,
          disabled: false
        }],
        captcha: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.required],
        attachments: this.fb.array([this.initAttchmentFields()])
      });
      this.illnessDeathClaimForm.controls['typeOfClaims'].setValue(this.type);
      this.illnessDeathClaimForm.controls['typeOfPlan'].setValue(this.typeOfPlans[0], {
        onlySelf: true
      });
      this.illnessDeathClaimForm.controls['deathreason'].setValue(this.deathReasons[0], {
        onlySelf: true
      });
      this.illnessDeathClaimForm.controls['claimants_state'].setValue(this.claimantsStates[0], {
        onlySelf: true
      });
      this.illnessDeathClaimForm.controls['claimants_bank'].setValue(this.claimantsBanks[0], {
        onlySelf: true
      });
    };
    /**
     * Method to Accident Death Claim form
     */
    this.loadAccidentDeathClaimForm = function () {
      this.accidentDeathClaimForm = this.fb.group({
        typeOfClaims: [''],
        typeOfPlan: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.required],
        contract_no: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.minLength(3), _angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.maxLength(40), _angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.pattern(this.alphaNum)]],
        insuarance_pername_name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.minLength(3), _angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.maxLength(100), _angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.pattern(this.alphaValWspace)]],
        nric_no: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.minLength(4), _angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.maxLength(40), _angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.pattern(this.alphaNumWspace)]],
        date_of_death: [''],
        deathreason: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.required],
        accitivityAtTheTimeOfAccident: [''],
        reportedPolice: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.required],
        anyPostMorten: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.required],
        claimants_name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.minLength(3), _angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.maxLength(100), _angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.pattern(this.alphaValWspace)]],
        claimants_nric_no: [''],
        claimants_address: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.minLength(4), _angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.maxLength(200)]],
        claimants_postcode: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.minLength(1), _angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.maxLength(10), _angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.pattern(this.alphaNum)]],
        claimants_state: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.required],
        claimants_telephone: [''],
        claimants_mobile: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.required, this.utils.validateNonZeroVal, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.minLength(8), _angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.maxLength(20), _angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.pattern('[0-9]*')]],
        claimants_email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.pattern(this.EMAIL_PATTERN)]],
        claimants_relationship: [''],
        claimants_bank: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.required],
        claimants_act_name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.pattern(this.alphaNumWspace), _angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.maxLength(100)]],
        claimants_act_no: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.pattern(this.alphaNumWspace), _angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.maxLength(50)]],
        remarks: [],
        agent_name: [],
        agent_number: [],
        agent_mobile_number: [],
        disclaimer: [{
          value: true,
          disabled: false
        }],
        captcha: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.required],
        attachments: this.fb.array([this.initAttchmentFields()])
      });
      this.accidentDeathClaimForm.controls['typeOfClaims'].setValue(this.type);
      this.accidentDeathClaimForm.controls['reportedPolice'].setValue(this.radioValues[1], {
        onlySelf: true
      });
      this.accidentDeathClaimForm.controls['anyPostMorten'].setValue(this.radioValues[1], {
        onlySelf: true
      });
      this.accidentDeathClaimForm.controls['typeOfPlan'].setValue(this.typeOfPlans[0], {
        onlySelf: true
      });
      this.accidentDeathClaimForm.controls['deathreason'].setValue(this.deathReasons[1], {
        onlySelf: true
      });
      this.accidentDeathClaimForm.controls['accitivityAtTheTimeOfAccident'].setValue(this.accitivityAtTheTimeOfAccidents[2], {
        onlySelf: true
      });
      this.accidentDeathClaimForm.controls['claimants_state'].setValue(this.claimantsStates[0], {
        onlySelf: true
      });
      this.accidentDeathClaimForm.controls['claimants_bank'].setValue(this.claimantsBanks[0], {
        onlySelf: true
      });
    };
    /**
     * Method to submit Critical Illness Claim Form
     */
    this.submitCriticalClaimForm = function (formName) {
      if (this.mainCaptcha.trim() != formName['controls']['captcha'].value.trim()) {
        this.captchIn['_isFocus'] = false;
        formName['controls']['captcha'].reset();
        formName['controls']['captcha'].markAsUntouched();
        formName['controls']['captcha'].markAsPristine();
        formName['controls']['captcha'].updateValueAndValidity();
        this.setupCanvas();
        this.utils.showAlert("", this.translate.instant('Signup.captcha_error'));
        return;
      }
      this.claimFormModel.typeOfClaim = this.type;
      this.claimFormModel.typeOfPlan = this.criticalIllnessClaimForm.controls.typeOfPlan.value || '';
      this.claimFormModel.policyNo = this.criticalIllnessClaimForm.controls.contract_no.value || '';
      this.claimFormModel.lifeAssured = this.criticalIllnessClaimForm.controls.insuarance_pername_name.value || '';
      this.claimFormModel.nricNo = this.criticalIllnessClaimForm.controls.nric_no.value || '';
      this.claimFormModel.address = this.criticalIllnessClaimForm.controls.address.value || '';
      this.claimFormModel.postCode = this.criticalIllnessClaimForm.controls.postcode.value || '';
      this.claimFormModel.state = this.criticalIllnessClaimForm.controls.state.value || '';
      this.claimFormModel.telephoneNo = this.criticalIllnessClaimForm.controls.telephone.value || '';
      this.claimFormModel.mobileNo = this.criticalIllnessClaimForm.controls.mobile.value || '';
      this.claimFormModel.email = this.criticalIllnessClaimForm.controls.email.value || '';
      this.claimFormModel.bankName = this.criticalIllnessClaimForm.controls.claimants_bank.value || '';
      this.claimFormModel.bankAcName = this.criticalIllnessClaimForm.controls.claimants_act_name.value || '';
      this.claimFormModel.bankAcNo = this.criticalIllnessClaimForm.controls.claimants_act_no.value || '';
      this.claimFormModel.criticalIllnessType = this.criticalIllnessClaimForm.controls.type_of_illness.value || '';
      this.claimFormModel.nameAndAddressOfDoctor = this.criticalIllnessClaimForm.controls.doctors_address.value || '';
      this.claimFormModel.remark = this.criticalIllnessClaimForm.controls.remarks.value || '';
      this.claimFormModel.agentName = this.criticalIllnessClaimForm.controls.agent_name.value || '';
      this.claimFormModel.agentNo = this.criticalIllnessClaimForm.controls.agent_number.value || '';
      this.claimFormModel.agentMobileNo = this.criticalIllnessClaimForm.controls.agent_mobile_number.value || '';
      this.submitForm();
    };
    /**
     * Method to submit Total & Permanent Disablity Claim Form
     */
    this.submitTotalClaimForm = function (formName) {
      if (this.mainCaptcha.trim() != formName['controls']['captcha'].value.trim()) {
        this.captchIn['_isFocus'] = false;
        formName['controls']['captcha'].reset();
        formName['controls']['captcha'].markAsUntouched();
        formName['controls']['captcha'].markAsPristine();
        formName['controls']['captcha'].updateValueAndValidity();
        this.setupCanvas();
        this.utils.showAlert("", this.translate.instant('Signup.captcha_error'));
        return;
      }
      this.claimFormModel.typeOfClaim = this.type;
      this.claimFormModel.typeOfPlan = this.totalDisabilityClaimForm.controls.typeOfPlan.value || '';
      this.claimFormModel.policyNo = this.totalDisabilityClaimForm.controls.contract_no.value || '';
      this.claimFormModel.lifeAssured = this.totalDisabilityClaimForm.controls.insuarance_pername_name.value || '';
      this.claimFormModel.nricNo = this.totalDisabilityClaimForm.controls.nric_no.value || '';
      this.claimFormModel.address = this.totalDisabilityClaimForm.controls.address.value || '';
      this.claimFormModel.postCode = this.totalDisabilityClaimForm.controls.postcode.value || '';
      this.claimFormModel.state = this.totalDisabilityClaimForm.controls.state.value || '';
      this.claimFormModel.telephoneNo = this.totalDisabilityClaimForm.controls.telephone.value || '';
      this.claimFormModel.mobileNo = this.totalDisabilityClaimForm.controls.mobile.value || '';
      this.claimFormModel.occupation = this.totalDisabilityClaimForm.controls.occupation_prior.value || '';
      this.claimFormModel.currentlyEmployed = this.totalDisabilityClaimForm.controls.currentEmpStatus.value || '';
      this.claimFormModel.email = this.totalDisabilityClaimForm.controls.email.value || '';
      this.claimFormModel.bankName = this.totalDisabilityClaimForm.controls.claimants_bank.value || '';
      this.claimFormModel.bankAcName = this.totalDisabilityClaimForm.controls.claimants_act_name.value || '';
      this.claimFormModel.bankAcNo = this.totalDisabilityClaimForm.controls.claimants_act_no.value || '';
      this.claimFormModel.remark = this.totalDisabilityClaimForm.controls.remarks.value || '';
      this.claimFormModel.agentName = this.totalDisabilityClaimForm.controls.agent_name.value || '';
      this.claimFormModel.agentNo = this.totalDisabilityClaimForm.controls.agent_number.value || '';
      this.claimFormModel.agentMobileNo = this.totalDisabilityClaimForm.controls.agent_mobile_number.value || '';
      this.submitForm();
    };
    /**
     * Method to submit Hospital & Surgical Claim Form
     */
    this.submitHospitalClaimForm = function (formName) {
      if (this.mainCaptcha.trim() != formName['controls']['captcha'].value.trim()) {
        this.captchIn['_isFocus'] = false;
        formName['controls']['captcha'].reset();
        formName['controls']['captcha'].markAsUntouched();
        formName['controls']['captcha'].markAsPristine();
        formName['controls']['captcha'].updateValueAndValidity();
        this.setupCanvas();
        this.utils.showAlert("", this.translate.instant('Signup.captcha_error'));
        return;
      }
      this.claimFormModel.typeOfClaim = this.type;
      this.claimFormModel.typeOfPlan = this.hospitalClaimForm.controls.typeOfPlan.value || '';
      this.claimFormModel.policyNo = this.hospitalClaimForm.controls.contract_no.value || '';
      this.claimFormModel.lifeAssured = this.hospitalClaimForm.controls.insuarance_pername_name.value || '';
      this.claimFormModel.nricNo = this.hospitalClaimForm.controls.nric_no.value || '';
      this.claimFormModel.address = this.hospitalClaimForm.controls.address.value || '';
      this.claimFormModel.postCode = this.hospitalClaimForm.controls.postcode.value || '';
      this.claimFormModel.state = this.hospitalClaimForm.controls.state.value || '';
      this.claimFormModel.telephoneNo = this.hospitalClaimForm.controls.telephone.value || '';
      this.claimFormModel.mobileNo = this.hospitalClaimForm.controls.mobile.value || '';
      this.claimFormModel.email = this.hospitalClaimForm.controls.email.value || '';
      this.claimFormModel.bankName = this.hospitalClaimForm.controls.claimants_bank.value || '';
      this.claimFormModel.bankAcName = this.hospitalClaimForm.controls.claimants_act_name.value || '';
      this.claimFormModel.bankAcNo = this.hospitalClaimForm.controls.claimants_act_no.value || '';
      this.claimFormModel.remark = this.hospitalClaimForm.controls.remarks.value || '';
      this.claimFormModel.agentName = this.hospitalClaimForm.controls.agent_name.value || '';
      this.claimFormModel.agentNo = this.hospitalClaimForm.controls.agent_number.value || '';
      this.claimFormModel.agentMobileNo = this.hospitalClaimForm.controls.agent_mobile_number.value || '';
      this.submitForm();
    };
    /**
     * Method to submit  Comprehensive Accident Benefits Claim Form
     */
    this.submitAccidenetClaimForm = function (formName) {
      if (this.mainCaptcha.trim() != formName['controls']['captcha'].value.trim()) {
        this.captchIn['_isFocus'] = false;
        formName['controls']['captcha'].reset();
        formName['controls']['captcha'].markAsUntouched();
        formName['controls']['captcha'].markAsPristine();
        formName['controls']['captcha'].updateValueAndValidity();
        this.setupCanvas();
        this.utils.showAlert("", this.translate.instant('Signup.captcha_error'));
        return;
      }
      this.claimFormModel.typeOfClaim = this.type;
      this.claimFormModel.typeOfPlan = this.accidentClaimForm.controls.typeOfPlan.value || '';
      this.claimFormModel.policyNo = this.accidentClaimForm.controls.contract_no.value || '';
      this.claimFormModel.lifeAssured = this.accidentClaimForm.controls.insuarance_pername_name.value || '';
      this.claimFormModel.nricNo = this.accidentClaimForm.controls.nric_no.value || '';
      this.claimFormModel.address = this.accidentClaimForm.controls.address.value || '';
      this.claimFormModel.postCode = this.accidentClaimForm.controls.postcode.value || '';
      this.claimFormModel.state = this.accidentClaimForm.controls.state.value || '';
      this.claimFormModel.telephoneNo = this.accidentClaimForm.controls.telephone.value || '';
      this.claimFormModel.mobileNo = this.accidentClaimForm.controls.mobile.value || '';
      this.claimFormModel.email = this.accidentClaimForm.controls.email.value || '';
      this.claimFormModel.accidentDate = this.accidentClaimForm.controls.dateofAccident.value || '';
      let timeFormat = this.accidentClaimForm.controls.timeOfAccident.value || '';
      this.claimFormModel.accidentTime = (0,date_fns__WEBPACK_IMPORTED_MODULE_12__["default"])(new Date(timeFormat), 'HH:mm');
      this.claimFormModel.howAccidentHappen = this.accidentClaimForm.controls.howAccidentHappened.value || '';
      this.claimFormModel.accidentReportedToPolice = this.accidentClaimForm.controls.reportedPolice.value || '';
      this.claimFormModel.bankName = this.accidentClaimForm.controls.claimants_bank.value || '';
      this.claimFormModel.bankAcName = this.accidentClaimForm.controls.claimants_act_name.value || '';
      this.claimFormModel.bankAcNo = this.accidentClaimForm.controls.claimants_act_no.value || '';
      this.claimFormModel.remark = this.accidentClaimForm.controls.remarks.value || '';
      this.claimFormModel.agentName = this.accidentClaimForm.controls.agent_name.value || '';
      this.claimFormModel.agentNo = this.accidentClaimForm.controls.agent_number.value || '';
      this.claimFormModel.agentMobileNo = this.accidentClaimForm.controls.agent_mobile_number.value || '';
      this.submitForm();
    };
    /**
     * Method to submit Illness Death Claim Form
     */
    this.submitIllnessDeathClaim = function (formName) {
      if (this.mainCaptcha.trim() != formName['controls']['captcha'].value.trim()) {
        this.captchIn['_isFocus'] = false;
        formName['controls']['captcha'].reset();
        formName['controls']['captcha'].markAsUntouched();
        formName['controls']['captcha'].markAsPristine();
        formName['controls']['captcha'].updateValueAndValidity();
        this.setupCanvas();
        this.utils.showAlert("", this.translate.instant('Signup.captcha_error'));
        return;
      }
      this.claimFormModel.typeOfClaim = this.type;
      this.claimFormModel.typeOfPlan = this.illnessDeathClaimForm.controls.typeOfPlan.value || '';
      this.claimFormModel.policyNo = this.illnessDeathClaimForm.controls.contract_no.value || '';
      this.claimFormModel.lifeAssured = this.illnessDeathClaimForm.controls.insuarance_pername_name.value || '';
      this.claimFormModel.nricNo = this.illnessDeathClaimForm.controls.nric_no.value || '';
      let illnessDeathClaimDeathFormat = this.illnessDeathClaimForm.controls.date_of_death.value || '';
      this.claimFormModel.deathDate = (0,date_fns__WEBPACK_IMPORTED_MODULE_12__["default"])(new Date(illnessDeathClaimDeathFormat), 'yyyy-MM-dd');
      this.claimFormModel.causeOfDeath = this.illnessDeathClaimForm.controls.deathreason.value || '';
      let firstDaigoniseDateFormat = this.illnessDeathClaimForm.controls.first_diagnosed.value || '';
      this.claimFormModel.DATE_Of_ILLNESS_DIAGNOSED = (0,date_fns__WEBPACK_IMPORTED_MODULE_12__["default"])(new Date(firstDaigoniseDateFormat), 'yyyy-MM-dd');
      this.claimFormModel.nameAndAddressOfDoctor = this.illnessDeathClaimForm.controls.doctors_address.value || '';
      this.claimFormModel.claimantName = this.illnessDeathClaimForm.controls.claimants_name.value || '';
      this.claimFormModel.claimantNricNo = this.illnessDeathClaimForm.controls.claimants_nric_no.value || '';
      this.claimFormModel.claimantAddress = this.illnessDeathClaimForm.controls.claimants_address.value || '';
      this.claimFormModel.claimantPostCode = this.illnessDeathClaimForm.controls.claimants_postcode.value || '';
      this.claimFormModel.claimantState = this.illnessDeathClaimForm.controls.claimants_state.value || '';
      this.claimFormModel.claimantTelephoneNo = this.illnessDeathClaimForm.controls.claimants_telephone.value || '';
      this.claimFormModel.claimantMobileNo = this.illnessDeathClaimForm.controls.claimants_mobile.value || '';
      this.claimFormModel.claimantEmail = this.illnessDeathClaimForm.controls.claimants_email.value || '';
      this.claimFormModel.relationWithDeceased = this.illnessDeathClaimForm.controls.claimants_relationship.value || '';
      this.claimFormModel.bankName = this.illnessDeathClaimForm.controls.claimants_bank.value || '';
      this.claimFormModel.bankAcName = this.illnessDeathClaimForm.controls.claimants_act_name.value || '';
      this.claimFormModel.bankAcNo = this.illnessDeathClaimForm.controls.claimants_act_no.value || '';
      this.claimFormModel.remark = this.illnessDeathClaimForm.controls.remarks.value || '';
      this.claimFormModel.agentName = this.illnessDeathClaimForm.controls.agent_name.value || '';
      this.claimFormModel.agentNo = this.illnessDeathClaimForm.controls.agent_number.value || '';
      this.claimFormModel.agentMobileNo = this.illnessDeathClaimForm.controls.agent_mobile_number.value || '';
      this.submitForm();
    };
    /**
     * Method to submit Accident Death Claim Form
     */
    this.submitAccidentDeathClaim = function (formName) {
      if (this.mainCaptcha.trim() != formName['controls']['captcha'].value.trim()) {
        this.captchIn['_isFocus'] = false;
        formName['controls']['captcha'].reset();
        formName['controls']['captcha'].markAsUntouched();
        formName['controls']['captcha'].markAsPristine();
        formName['controls']['captcha'].updateValueAndValidity();
        this.setupCanvas();
        this.utils.showAlert("", this.translate.instant('Signup.captcha_error'));
        return;
      }
      this.claimFormModel.typeOfClaim = this.type;
      this.claimFormModel.typeOfPlan = this.accidentDeathClaimForm.controls.typeOfPlan.value || '';
      this.claimFormModel.policyNo = this.accidentDeathClaimForm.controls.contract_no.value || '';
      this.claimFormModel.lifeAssured = this.accidentDeathClaimForm.controls.insuarance_pername_name.value || '';
      this.claimFormModel.nricNo = this.accidentDeathClaimForm.controls.nric_no.value || '';
      let formatDeathAccidentClaim = this.accidentDeathClaimForm.controls.date_of_death.value || '';
      this.claimFormModel.deathDate = (0,date_fns__WEBPACK_IMPORTED_MODULE_12__["default"])(new Date(formatDeathAccidentClaim), 'yyyy-MM-dd');
      this.claimFormModel.causeOfDeath = this.accidentDeathClaimForm.controls.deathreason.value || '';
      this.claimFormModel.activityAtTimeOfAccident = this.accidentDeathClaimForm.controls.accitivityAtTheTimeOfAccident.value || '';
      this.claimFormModel.accidentReportedToPolice = this.accidentDeathClaimForm.controls.reportedPolice.value || '';
      this.claimFormModel.postmortemOrAutopsy = this.accidentDeathClaimForm.controls.anyPostMorten.value || '';
      this.claimFormModel.claimantName = this.accidentDeathClaimForm.controls.claimants_name.value || '';
      this.claimFormModel.claimantNricNo = this.accidentDeathClaimForm.controls.claimants_nric_no.value || '';
      this.claimFormModel.claimantAddress = this.accidentDeathClaimForm.controls.claimants_address.value || '';
      this.claimFormModel.claimantPostCode = this.accidentDeathClaimForm.controls.claimants_postcode.value || '';
      this.claimFormModel.claimantState = this.accidentDeathClaimForm.controls.claimants_state.value || '';
      this.claimFormModel.claimantTelephoneNo = this.accidentDeathClaimForm.controls.claimants_telephone.value || '';
      this.claimFormModel.claimantMobileNo = this.accidentDeathClaimForm.controls.claimants_mobile.value || '';
      this.claimFormModel.claimantEmail = this.accidentDeathClaimForm.controls.claimants_email.value || '';
      this.claimFormModel.relationWithDeceased = this.accidentDeathClaimForm.controls.claimants_relationship.value || '';
      this.claimFormModel.bankName = this.accidentDeathClaimForm.controls.claimants_bank.value || '';
      this.claimFormModel.bankAcName = this.accidentDeathClaimForm.controls.claimants_act_name.value || '';
      this.claimFormModel.bankAcNo = this.accidentDeathClaimForm.controls.claimants_act_no.value || '';
      this.claimFormModel.remark = this.accidentDeathClaimForm.controls.remarks.value || '';
      this.claimFormModel.agentName = this.accidentDeathClaimForm.controls.agent_name.value || '';
      this.claimFormModel.agentNo = this.accidentDeathClaimForm.controls.agent_number.value || '';
      this.claimFormModel.agentMobileNo = this.accidentDeathClaimForm.controls.agent_mobile_number.value || '';
      this.submitForm();
    };
    /**
     * This method is used to submit the Claim Form to server.
     */
    this.submitForm = function () {
      if (this.utils.isDeviceOnLine()) {
        this.utils.showProgressLoader();
        this.submitService.claimSubmit(this.claimFormModel).then(response => {
          console.log('this.claimFormModel', this.claimFormModel);
          console.log('response', response);
          try {
            this.config.clear();
            this.utils.dissmisProgressLoader();
            let message;
            if (response['responseJSON'] && (response['responseJSON']['statusCode'] == http_status_codes__WEBPACK_IMPORTED_MODULE_14__.OK || response['responseJSON']['statusCode'] == http_status_codes__WEBPACK_IMPORTED_MODULE_14__.ACCEPTED)) {
              message = response['responseJSON']['userMessage'];
            } else {
              message = response['responseJSON']['userMessage'] || this.translate.instant('generic_msgs.server_err');
            }
            this.showDialog('', message);
          } catch (e) {
            this.utils.dissmisProgressLoader();
            var msg = this.translate.instant('generic_msgs.server_err');
            this.utils.showAlert('', msg);
          }
        }, error => {
          this.config.clear();
          this.utils.dissmisProgressLoader();
          let errorMsg = this.utils.handleServiceException(error);
          this.utils.showAlert("", errorMsg);
        });
      } else {
        var msg = this.translate.instant('generic_msgs.network_err');
        this.utils.showAlert('', msg);
      }
    };
    this.utils.analytics("claimSubmission");
    this.config.currentPage.pageName = "ClaimSubmissionPage";
    this.EMAIL_PATTERN = src_providers_utils_config__WEBPACK_IMPORTED_MODULE_0__.ConfigProvider.EMAIL_PATTERN;
    console.log('history.state.type', history.state.type);
    this.type = history.state.type; //this.navParams.get('type');
    this.typeofClaimList = history.state.typeOfClaims;
    this.typeOfClaims = this.config.claims.typeOfClaims;
    this.typeOfPlans = this.config.claims.typeOfPlans;
    this.typeOfPlans1 = this.config.claims.typeOfPlans1;
    console.log('this.typeOfPlans1', this.typeOfPlans1);
    this.deathReasons = this.config.claims.deathReasons;
    this.accitivityAtTheTimeOfAccidents = this.config.claims.accitivityAtTheTimeOfAccidents;
    this.claimantsStates = this.config.claims.states;
    this.claimantsBanks = this.config.claims.banks;
    this.typesOfLoss = this.config.claims.typesOfLoss;
    this.typesOfIllness = this.config.claims.types_of_illness;
    this.claimFormModel = this.config.claimsSubmitModel;
    this.radioValues = this.config.claims.radio_value;
    /**
     * Here on type of claim submission we are loading the respective Form
     */
    console.log('this.typeOfClaims--in switch --case-->>', this.typeOfClaims);
    switch (this.type) {
      case this.typeOfClaims[0]:
        this.loadHouseOwnerClaimForm();
        this.isHouseOwnerClaim = true;
        break;
      case this.typeOfClaims[1]:
        this.isCriticalIllnessClaim = true;
        this.loadCriticalIllnessForm();
        break;
      case this.typeOfClaims[2]:
        this.isTotalDisabilityClaim = true;
        this.loadTotalDisabilityForm();
        break;
      case this.typeOfClaims[3]:
        this.isHospitalClaim = true;
        this.loadHospitalClaimForm();
        break;
      case this.typeOfClaims[4]:
        this.isAccidentCalim = true;
        this.loadAccidenthsClaimForm();
        break;
      case this.typeOfClaims[5]:
        this.isIllnessDeathClaim = true;
        this.loadIllnessDeathClaimForm();
        break;
      case this.typeOfClaims[6]:
        this.isAccidentDeathClaim = true;
        this.loadAccidentDeathClaimForm();
        break;
    }
  }
  ngOnInit() {
    console.log('ngOnInit-Fire-->>claim-Submission');
    // this._CANVAS = this.canvasEl.nativeElement;
    //  this._CANVAS.height = 40;
    //  this.initialiseCanvas(); //TO generate captcha
  }

  dateFormat(value) {
    let dateString = value.split('-');
    let yy = dateString[0];
    let mm = dateString[1];
    let dd = dateString[2];
    return dd + '/' + mm + '/' + yy;
  }
  dateChanged(event) {
    console.log(event);
    this.showPicker = false;
    let formattdString = (0,date_fns__WEBPACK_IMPORTED_MODULE_12__["default"])((0,date_fns__WEBPACK_IMPORTED_MODULE_15__["default"])(event), 'd MMM yyyy');
    let dString = formattdString.split('T')[0];
    this.dateValue = (0,date_fns__WEBPACK_IMPORTED_MODULE_12__["default"])(new Date(dString), 'yyyy-MM-dd');
    this.formattdString = this.dateFormat(this.dateValue);
    this.houseOwnerClaimForm.controls.date_of_loss.value = this.dateValue;
    console.log('date_of_loss.value2', this.houseOwnerClaimForm.controls.date_of_loss.value);
  }
  dateChanged_dateofAccident(event) {
    this.showPicker = false;
    let formattdString = (0,date_fns__WEBPACK_IMPORTED_MODULE_12__["default"])((0,date_fns__WEBPACK_IMPORTED_MODULE_15__["default"])(event), 'd MMM yyyy');
    let dString = formattdString.split('T')[0];
    this.dateValue = (0,date_fns__WEBPACK_IMPORTED_MODULE_12__["default"])(new Date(dString), 'yyyy-MM-dd');
    this.formattdString = this.dateFormat(this.dateValue);
    this.accidentClaimForm.controls.dateofAccident.value = this.dateValue;
  }
  dateChanged_dateof_DeathAccident(event) {
    this.showPicker = false;
    let formattdString = (0,date_fns__WEBPACK_IMPORTED_MODULE_12__["default"])((0,date_fns__WEBPACK_IMPORTED_MODULE_15__["default"])(event), 'd MMM yyyy');
    let dString = formattdString.split('T')[0];
    this.dateValue = (0,date_fns__WEBPACK_IMPORTED_MODULE_12__["default"])(new Date(dString), 'yyyy-MM-dd');
    this.formattdString = this.dateFormat(this.dateValue);
  }
  dateChangeddateofdeath() {}
  dateChangeddate_of_loss() {}
  timeChanged(event) {
    console.log(event);
    this.showTimePicker = false;
    this.formatedTimeString = (0,date_fns__WEBPACK_IMPORTED_MODULE_12__["default"])(new Date(event), 'HH:mm');
  }
  ngAfterViewInit() {
    console.log('ngAfterViewInit-Fire-->>claim-Submission');
    this._CANVAS = this.canvasEl.nativeElement;
    this._CANVAS.height = 48;
    this._CANVAS.width = 200;
    this.initialiseCanvas(); //TO generate captcha
  }

  initialiseCanvas() {
    if (this._CANVAS.getContext) {
      this.setupCanvas();
    }
  }
  /**generate captcha and set to signup page */
  setupCanvas() {
    var alpha = new Array('A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'J', 'K', 'M', 'N', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'j', 'k', 'm', 'n', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z');
    var i;
    var code = "";
    for (i = 0; i < 6; i++) {
      code = code + alpha[this.utils.getRandomInt()] + "";
    }
    this.mainCaptcha = code;
    this._CONTEXT = this._CANVAS.getContext('2d');
    console.log(this._CONTEXT);
    this._CONTEXT.fillStyle = "white";
    this._CONTEXT.clearRect(0, 0, this._CANVAS.width, this._CANVAS.height);
    this._CONTEXT.font = "15px Arial";
    this._CONTEXT.textAlign = "center";
    this._CONTEXT.style;
    this._CONTEXT.fillText(code, 100, 30);
  }
  /**on click of refresh in signup page -  to re-generate new captcha */
  refreshCaptcha(formName) {
    this.captchIn['_isFocus'] = false;
    formName['controls']['captcha'].reset();
    formName['controls']['captcha'].markAsUntouched();
    formName['controls']['captcha'].markAsPristine();
    formName['controls']['captcha'].updateValueAndValidity();
    this.setupCanvas();
  }
  /**To remove enterd captcha in text filed if not alpha */
  keyUpChecker(event) {
    const newValue = event.target.value;
    const regExp = new RegExp('[A-Za-z]');
    if (!regExp.test(newValue)) {
      event.target.value = newValue.slice(0, -1);
    }
  }
  /**
   * Method to initiate House Owner Claim form
   */
  loadHouseOwnerClaimForm() {
    this.houseOwnerClaimForm = this.fb.group({
      typeOfClaims: [''],
      typeOfPlan: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.required],
      contract_no: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.minLength(3), _angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.maxLength(40), _angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.pattern(this.alphaNum)]],
      insuarance_pername_name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.minLength(3), _angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.maxLength(100), _angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.pattern(this.alphaValWspace)]],
      nric_no: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.minLength(4), _angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.maxLength(40), _angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.pattern(this.alphaNumWspace)]],
      address: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.minLength(4), _angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.maxLength(200)]],
      postcode: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.maxLength(10), _angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.pattern(this.alphaNum)]],
      state: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.required],
      telephone: [],
      mobile: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.required, this.utils.validateNonZeroVal, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.minLength(8), _angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.maxLength(20), _angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.pattern('[0-9]*')]],
      email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.pattern(this.EMAIL_PATTERN)]],
      date_of_loss: [],
      nature_of_loss: [],
      location_at_risk: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.required],
      claim_with_other_insurance: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.required],
      estimate_claim_amount: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.maxLength(16), _angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.pattern('[0-9\.]*')]],
      claimants_bank: [],
      claimants_act_name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.maxLength(100), _angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.pattern(this.alphaNumWspace)]],
      claimants_act_no: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.maxLength(50), _angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.pattern(this.alphaNumWspace)]],
      remarks: [],
      agent_name: [],
      agent_number: [],
      agent_mobile_number: [],
      filename: [{
        value: '',
        disabled: true
      }],
      disclaimer: [{
        value: true,
        disabled: false
      }],
      captcha: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.required],
      attachments: this.fb.array([this.initAttchmentFields()])
    });
    this.houseOwnerClaimForm.controls['typeOfClaims'].setValue(this.type);
    this.houseOwnerClaimForm.controls['claim_with_other_insurance'].setValue(this.radioValues[0], {
      onlySelf: true
    });
    this.houseOwnerClaimForm.controls['typeOfPlan'].setValue(this.typeOfPlans1[0], {
      onlySelf: true
    });
    this.houseOwnerClaimForm.controls['nature_of_loss'].setValue(this.typesOfLoss[0], {
      onlySelf: true
    });
    this.houseOwnerClaimForm.controls['state'].setValue(this.claimantsStates[0], {
      onlySelf: true
    });
    this.houseOwnerClaimForm.controls['claimants_bank'].setValue(this.claimantsBanks[0], {
      onlySelf: true
    });
  }
  /**
   * Method to submit House Owner Claim
   */
  submitHouseOwnerClaim(formName) {
    if (this.mainCaptcha.trim() != formName['controls']['captcha'].value.trim()) {
      this.captchIn['_isFocus'] = false;
      formName['controls']['captcha'].reset();
      formName['controls']['captcha'].markAsUntouched();
      formName['controls']['captcha'].markAsPristine();
      formName['controls']['captcha'].updateValueAndValidity();
      this.setupCanvas();
      this.utils.showAlert("", this.translate.instant('Signup.captcha_error'));
      return;
    }
    this.claimFormModel.typeOfClaim = this.type;
    this.claimFormModel.typeOfPlan = this.houseOwnerClaimForm.controls.typeOfPlan.value || '';
    this.claimFormModel.policyNo = this.houseOwnerClaimForm.controls.contract_no.value || '';
    this.claimFormModel.lifeAssured = this.houseOwnerClaimForm.controls.insuarance_pername_name.value || '';
    this.claimFormModel.nricNo = this.houseOwnerClaimForm.controls.nric_no.value || '';
    this.claimFormModel.address = this.houseOwnerClaimForm.controls.address.value || '';
    this.claimFormModel.postCode = this.houseOwnerClaimForm.controls.postcode.value || '';
    this.claimFormModel.state = this.houseOwnerClaimForm.controls.state.value || '';
    this.claimFormModel.telephoneNo = this.houseOwnerClaimForm.controls.telephone.value || '';
    this.claimFormModel.mobileNo = this.houseOwnerClaimForm.controls.mobile.value || '';
    this.claimFormModel.email = this.houseOwnerClaimForm.controls.email.value || '';
    this.claimFormModel.dateOfLoss = this.houseOwnerClaimForm.controls.date_of_loss.value || '';
    this.claimFormModel.natureOfLoss = this.houseOwnerClaimForm.controls.nature_of_loss.value || '';
    this.claimFormModel.locationOfRisk = this.houseOwnerClaimForm.controls.location_at_risk.value || '';
    this.claimFormModel.claimWithOtherInsurance = this.houseOwnerClaimForm.controls.claim_with_other_insurance.value || '';
    this.claimFormModel.claimAmount = this.houseOwnerClaimForm.controls.estimate_claim_amount.value || '';
    this.claimFormModel.bankName = this.houseOwnerClaimForm.controls.claimants_bank.value || '';
    this.claimFormModel.bankAcName = this.houseOwnerClaimForm.controls.claimants_act_name.value || '';
    this.claimFormModel.bankAcNo = this.houseOwnerClaimForm.controls.claimants_act_no.value || '';
    this.claimFormModel.remark = this.houseOwnerClaimForm.controls.remarks.value || '';
    this.claimFormModel.agentName = this.houseOwnerClaimForm.controls.agent_name.value || '';
    this.claimFormModel.agentNo = this.houseOwnerClaimForm.controls.agent_number.value || '';
    this.claimFormModel.agentMobileNo = this.houseOwnerClaimForm.controls.agent_mobile_number.value || '';
    this.submitForm();
  }
  /**
   * This method is used to provide options to user to select either camera or gallery to upload files.
   */
  chooseCameraOptions(i, formName) {
    //  alert(1)
    var title = this.translate.instant('claim_submission.select_any_file');
    var open_cam = this.translate.instant('claim_submission.open_camera');
    var open_gallery = this.translate.instant('claim_submission.open_gallery');
    var select_pdf = this.translate.instant('claim_submission.select_pdf');
    var cancel = this.translate.instant('claim_submission.cancel');
    this.fileIndex = i;
    this.selectedFormName = formName;
    let modalSelectionButtons;
    if (this.utils.getPlatform() == 'ios') {
      var osVersion = parseInt(this.device.version);
      if (osVersion < 11) {
        modalSelectionButtons = [{
          text: open_cam,
          handler: () => {
            // this.openCameraGallery(this.camera.PictureSourceType.CAMERA, 0);
            this.openCamera_ios(this.camera.PictureSourceType.CAMERA, 0, 1);
          }
        }, {
          text: open_gallery,
          handler: () => {
            // this.openCameraGallery(this.camera.PictureSourceType.PHOTOLIBRARY, 0);
            this.openCamera_ios(this.camera.PictureSourceType.PHOTOLIBRARY, 0, 2);
          }
        }, {
          text: cancel,
          role: 'cancel',
          handler: () => {
            this[this.selectedFormName].controls.attachments.controls[this.fileIndex].controls['filename'].markAsTouched();
          }
        }];
      } else {
        modalSelectionButtons = [{
          text: open_cam,
          handler: () => {
            this.openCamera_ios(this.camera.PictureSourceType.CAMERA, 0, 1);
          }
        }, {
          text: open_gallery,
          handler: () => {
            this.openCamera_ios(this.camera.PictureSourceType.PHOTOLIBRARY, 0, 2);
          }
        }, {
          text: select_pdf,
          handler: () => {
            // this.openCamera_ios(this.camera.PictureSourceType.PHOTOLIBRARY, 0, 3);
            this.openCameraGallery_ios();
          }
        }, {
          text: cancel,
          role: 'cancel',
          handler: () => {
            this[this.selectedFormName].controls.attachments.controls[this.fileIndex].controls['filename'].markAsTouched();
          }
        }];
      }
    } else {
      modalSelectionButtons = [{
        text: open_cam,
        handler: () => {
          this.openCameraGallery(this.camera.PictureSourceType.CAMERA, 0);
        }
      }, {
        text: open_gallery,
        handler: () => {
          this.openCameraGallery(this.camera.PictureSourceType.PHOTOLIBRARY, 2);
          // this.openFilechooser(0);
        }
      }, {
        text: select_pdf,
        handler: () => {
          this.openFilechooser(1);
        }
      }, {
        text: cancel,
        role: 'cancel',
        handler: () => {
          this[this.selectedFormName].controls.attachments.controls[this.fileIndex].controls['filename'].markAsTouched();
        }
      }];
    }
    const actionSheet = this.actionSheetCtrl.create({
      header: title,
      buttons: modalSelectionButtons
    }).then(actionSheet => actionSheet.present());
  }
  openCamera_ios(source, acceptpdf, data) {
    const options = {
      destinationType: this.camera.DestinationType.DATA_URL,
      mediaType: this.camera.MediaType.PICTURE,
      encodingType: this.camera.EncodingType.JPEG,
      sourceType: source,
      correctOrientation: true
    };
    this.camera.getPicture(options).then(imageData => {
      if (data == 1) {
        var filename = 'sunaccesDatajpg001.jpg';
        var fileext = 'jpg';
      } else if (data == 2) {
        var filename = 'sunaccesDatajpeg002.jpeg';
        var fileext = 'jpeg';
      } else {
        var filename = 'sunaccesDatapdf003.pdf';
        var fileext = 'pdf';
      }
      if (this.checkFileExt(fileext, acceptpdf)) {
        for (var key in this[this.selectedFormName].controls.attachments.value) {
          let ExistingFilename = this[this.selectedFormName].controls.attachments.controls[key].controls['filename'].value;
          if (ExistingFilename == filename) {
            this.utils.presentToast(this.translate.instant('claim_submission.err_duplicateFile'));
            this[this.selectedFormName].controls.attachments.controls[this.fileIndex].controls['filename'].markAsTouched();
            break;
          } else if (key == this.fileIndex) {
            if (data == 1) {
              imageData = this._DomSanitizer.bypassSecurityTrustUrl("data:image/jpeg;base64," + imageData);
              console.log('CameraimageData', imageData);
              this.addAttachment(filename, imageData);
              ;
            } else if (data == 2) {
              imageData = this._DomSanitizer.bypassSecurityTrustUrl("data:image/jpeg;base64," + imageData);
              console.log('GalleryimageData', imageData);
              this.addAttachment(filename, imageData);
            } else {
              imageData = this._DomSanitizer.bypassSecurityTrustUrl("data:image/jpeg;base64," + imageData);
              console.log('Pdf', imageData);
              this.addAttachment(filename, imageData);
            }
          }
        }
      } else {
        var msg;
        if (fileext == 'png' || fileext == 'jpeg' || fileext == 'jpg' || fileext == 'pdf') {
          if (acceptpdf == 1) {
            msg = this.translate.instant('claim_submission.select_only_pdf');
          } else {
            msg = this.translate.instant('claim_submission.select_only_imgs');
          }
          this.utils.showAlert('', msg, false);
        } else {
          if (acceptpdf == 0) {
            msg = this.translate.instant('claim_submission.select_only_imgs');
          } else {
            msg = this.translate.instant('claim_submission.select_only_pdf');
          }
          this.utils.showAlert('', msg, false);
        }
      }
    }, err => {
      let errMsg;
      if (acceptpdf == 0) {
        errMsg = this.translate.instant('claim_submission.err_cam');
      } else {
        errMsg = this.translate.instant('claim_submission.err_pdf');
      }
      this.utils.showAlert('', errMsg, false);
    });
  }
  /**
    * This method is called when we try to
      open Camera / Gallery for ios
      and Camera for Android only.
    */
  openCameraGallery(source, acceptpdf) {
    const options = {
      destinationType: this.camera.DestinationType.FILE_URI,
      mediaType: this.camera.MediaType.PICTURE,
      encodingType: this.camera.EncodingType.JPEG,
      sourceType: source,
      correctOrientation: true
      //  destinationType : this.camera.DestinationType.DATA_URL
    };

    this.camera.getPicture(options).then(imageData => {
      if (this.utils.getPlatform() == 'ios') {
        imageData = window.Ionic.normalizeURL(imageData);
        //imageData =imageData.replace("file://","http://localhost:8080");
      }
      //if source ==1 camera has been selected , source =0 gallery has been selected
      // console.log('dom--Sanitize',this._DomSanitizer.bypassSecurityTrustUrl("data:image/jpeg;base64," + imageData));
      console.log('imageData', imageData);
      var filenamewihtExt = imageData.split('/').pop();
      var filename = filenamewihtExt.split('?')[0];
      console.log('filename', filename);
      var fileext = imageData.split('.').pop().toLowerCase();
      console.log('fileext', fileext);
      fileext = fileext.split('?')[0];
      console.log('fileext-after?', fileext);
      if (this.checkFileExt(fileext, acceptpdf)) {
        for (var key in this[this.selectedFormName].controls.attachments.value) {
          let ExistingFilename = this[this.selectedFormName].controls.attachments.controls[key].controls['filename'].value;
          if (ExistingFilename == filename) {
            this.utils.presentToast(this.translate.instant('claim_submission.err_duplicateFile'));
            this[this.selectedFormName].controls.attachments.controls[this.fileIndex].controls['filename'].markAsTouched();
            break;
          } else if (key == this.fileIndex) {
            //  this.getBase64StringFromFilePath(imageData, filename); // uncomment later on
            if (acceptpdf == 2) {
              //   this.base64Data = imageData;
              //  imageData = this._DomSanitizer.bypassSecurityTrustUrl("data:image/jpeg;base64," + imageData);
              console.log('GalleryimageData', imageData);
              // this.addAttachment(filename, imageData);
              this.getBase64StringFromFilePath(imageData, filename);
            } else {
              console.log('CameraimageData', imageData);
              // this.addAttachment(filename, imageData);
              this.getBase64StringFromFilePath(imageData, filename);
            }
          }
        }
      } else {
        var msg;
        if (fileext == 'png' || fileext == 'jpeg' || fileext == 'jpg' || fileext == 'pdf') {
          if (acceptpdf == 1) {
            msg = this.translate.instant('claim_submission.select_only_pdf');
          } else {
            msg = this.translate.instant('claim_submission.select_only_imgs');
          }
          this.utils.showAlert('', msg, false);
        } else {
          if (acceptpdf == 0) {
            msg = this.translate.instant('claim_submission.select_only_imgs');
          } else {
            msg = this.translate.instant('claim_submission.select_only_pdf');
          }
          this.utils.showAlert('', msg, false);
        }
      }
    }, err => {
      let errMsg;
      if (acceptpdf == 0) {
        errMsg = this.translate.instant('claim_submission.err_cam');
      } else {
        errMsg = this.translate.instant('claim_submission.err_pdf');
      }
      this.utils.showAlert('', errMsg, false);
    });
  }
  checkFileExt(fileext, acceptpdf) {
    if (acceptpdf == 0 || acceptpdf == 2) {
      if (fileext == 'png' || fileext == 'jpeg' || fileext == 'jpg') {
        return true;
      } else {
        return false;
      }
    } else {
      if (fileext == 'pdf') {
        return true;
      } else {
        return false;
      }
    }
  }
  /**
     * This method is used to attach PDF in ios ONLY
     */
  openCameraGallery_ios() {
    this.docPicker.getFile('all').then(uri => {
      if (this.utils.getPlatform() == 'ios') {
        uri = window.Ionic.normalizeURL(uri);
        //uri = uri.replace("file://","http://localhost:8080");
      }

      var filename = uri.split('/').pop();
      var fileext = uri.split('.').pop().toLowerCase();
      if (fileext == 'pdf') {
        this.getBase64StringFromFilePath(uri, filename);
      } else {
        var msg = this.translate.instant('claim_submission.select_only_pdf');
        this.utils.showAlert('', msg, false);
      }
    }).catch(err => {
      let errMsg = this.translate.instant('claim_submission.err_pdf');
      this.utils.showAlert('', errMsg, false);
    });
  }
  /**
     * This method is used to attach image and PDF in ANDROID ONLY
     */
  openFilechooser(acceptpdf) {
    console.log('acceptpdf-infilechoose', acceptpdf);
    if (acceptpdf == 1) {
      this.chooser.getFile().then(file => {
        console.log('file-------->>>>', file);
        //  const filUri = file.dataURI;
        let fileext = file.name.split('.').pop().toLowerCase();
        console.log('fileext--file', fileext);
        if (fileext == 'pdf') {
          for (var key in this[this.selectedFormName].controls.attachments.getRawValue()) {
            let ExistingFilename = this[this.selectedFormName].controls.attachments.controls[key].controls['filename'].value;
            if (ExistingFilename == file.name) {
              this.utils.presentToast(this.translate.instant('claim_submission.err_duplicateFile'));
              this[this.selectedFormName].controls.attachments.controls[this.fileIndex].controls['filename'].markAsTouched();
              break;
            } else if (key == this.fileIndex) {
              console.log('fileext--file--path--file.path', file.path);
              this.checkBase64Size(file, file.name);
            }
          }
        } else {
          var msg = this.translate.instant('claim_submission.select_only_pdf');
          this.utils.showAlert('', msg, false);
        }
        console.log(file ? file.name : 'canceled');
      }).catch(err => {
        let errMsg = this.translate.instant('claim_submission.err_pdf');
        this.utils.showAlert('', errMsg, false);
      });
    } else {
      this.fileChooser.open().then(uri => {
        this.file.resolveLocalFilesystemUrl(uri).then(res => {
          console.log('entered file chooser');
          let url = res['nativeURL'];
          this.filePath.resolveNativePath(url).then(FilepathUrl => {
            console.log('entered file chooser1');
            if (FilepathUrl.indexOf('file://') === -1) {
              FilepathUrl = "file://" + FilepathUrl;
            }
            FilepathUrl = FilepathUrl.split("?")[0];
            var filename = FilepathUrl.split('/').pop();
            var fileext = FilepathUrl.split('.').pop().toLowerCase();
            if (fileext == 'png' || fileext == 'jpeg' || fileext == 'jpg') {
              for (var key in this[this.selectedFormName].controls.attachments.getRawValue()) {
                let ExistingFilename = this[this.selectedFormName].controls.attachments.controls[key].controls['filename'].value;
                if (ExistingFilename == filename) {
                  this.utils.presentToast(this.translate.instant('claim_submission.err_duplicateFile'));
                  this[this.selectedFormName].controls.attachments.controls[this.fileIndex].controls['filename'].markAsTouched();
                  break;
                } else if (key == this.fileIndex) {
                  console.log('filename', filename);
                  // this.getBase64StringFromFilePath(FilepathUrl, filename);
                  console.log('entered file chooser2');
                  this.checkBase64Size(FilepathUrl, filename);
                }
              }
            } else {
              let msg = this.translate.instant('claim_submission.select_only_imgs');
              this.utils.showAlert('', msg, false);
            }
          }, err => {
            let errMsg = this.translate.instant('claim_submission.err_gallery');
            this.utils.showAlert('', errMsg, false);
          });
        }, error => {
          var msg = this.translate.instant('claim_submission.err_gallery');
          this.utils.showAlert('', msg, false);
        });
      }, error => {
        var msg = this.translate.instant('claim_submission.err_gallery');
        this.utils.showAlert('', msg, false);
      });
    }
  }
  checkBase64Size(base64File, filename) {
    this.utils.showProgressLoader();
    let fileext = filename.split('.').pop().toLowerCase();
    console.log('base64File', base64File.dataURI);
    console.log('fileextWhileChooseFile', fileext);
    let orginalBase64 = base64File.dataURI.split(',');
    if (orginalBase64.length > 0) orginalBase64 = orginalBase64[1];else orginalBase64 = orginalBase64[0];
    try {
      let numberofEquals = (orginalBase64.match(/(=*)$/) || [])[1].length;
      let base64SizeinBytes = orginalBase64.length * (3 / 4) - numberofEquals;
      let sizeInMB = base64SizeinBytes / 1000000;
      if (sizeInMB < 5) {
        let sanitizeBase64;
        if (fileext == 'pdf') {
          sanitizeBase64 = this.utils.sanitizeBase64string(orginalBase64);
        } else {
          sanitizeBase64 = orginalBase64.replace(/(\r\n|\r|\n)/g, '');
        }
        this.addAttachment(filename, sanitizeBase64);
      } else if (fileext == 'pdf') {
        this.utils.dissmisProgressLoader();
        this.utils.showAlert('', this.translate.instant('claim_submission.err_sizeLimit'), false);
      } else {
        this.utils.FileCompresser(base64File.dataURI, this.mimeTypes[fileext]).then(base64 => {
          base64 = base64.split(',');
          if (base64.length > 0) base64 = base64[1];else base64 = base64[0];
          let numberofEquals = (base64.match(/(=*)$/) || [])[1].length;
          let base64SizeinBytes = base64.length * (3 / 4) - numberofEquals;
          let sizeInMB = base64SizeinBytes / 1000000;
          if (sizeInMB < 5) {
            let santizedBase64String = base64.replace(/(\r\n|\r|\n)/g, '');
            console.log('santizedBase64String', santizedBase64String);
            this.addAttachment(filename, santizedBase64String);
          } else {
            this.utils.dissmisProgressLoader();
            this.utils.showAlert('', this.translate.instant('claim_submission.err_sizeLimit'), false);
          }
        }, err => {
          this.utils.dissmisProgressLoader();
          this.utils.showAlert('', this.translate.instant('generic_msgs.server_err'), false);
        });
      }
    } catch (e) {
      this.utils.dissmisProgressLoader();
      this.utils.showAlert('', this.translate.instant('generic_msgs.server_err'), false);
    }
  }
  checkBase64SizeImage(base64File, filename) {
    this.utils.showProgressLoader();
    let fileext = filename.split('.').pop().toLowerCase();
    console.log('base64File', base64File);
    console.log('fileextWhileChooseFile', fileext);
    let orginalBase64 = base64File.split(',');
    if (orginalBase64.length > 0) orginalBase64 = orginalBase64[1];else orginalBase64 = orginalBase64[0];
    try {
      let numberofEquals = (orginalBase64.match(/(=*)$/) || [])[1].length;
      let base64SizeinBytes = orginalBase64.length * (3 / 4) - numberofEquals;
      let sizeInMB = base64SizeinBytes / 1000000;
      if (sizeInMB < 5) {
        let sanitizeBase64;
        if (fileext == 'pdf') {
          sanitizeBase64 = this.utils.sanitizeBase64string(orginalBase64);
        } else {
          sanitizeBase64 = orginalBase64.replace(/(\r\n|\r|\n)/g, '');
        }
        this.addAttachment(filename, sanitizeBase64);
      } else if (fileext == 'pdf') {
        this.utils.dissmisProgressLoader();
        this.utils.showAlert('', this.translate.instant('claim_submission.err_sizeLimit'), false);
      } else {
        this.utils.FileCompresser(base64File, this.mimeTypes[fileext]).then(base64 => {
          base64 = base64.split(',');
          if (base64.length > 0) base64 = base64[1];else base64 = base64[0];
          let numberofEquals = (base64.match(/(=*)$/) || [])[1].length;
          let base64SizeinBytes = base64.length * (3 / 4) - numberofEquals;
          let sizeInMB = base64SizeinBytes / 1000000;
          if (sizeInMB < 5) {
            let santizedBase64String = base64.replace(/(\r\n|\r|\n)/g, '');
            console.log('santizedBase64String', santizedBase64String);
            this.addAttachment(filename, santizedBase64String);
          } else {
            this.utils.dissmisProgressLoader();
            console.log('size-iisue');
            this.utils.showAlert('', this.translate.instant('claim_submission.err_sizeLimit'), false);
          }
        }, err => {
          this.utils.dissmisProgressLoader();
          console.log('file-compressor--issue');
          this.utils.showAlert('', this.translate.instant('generic_msgs.server_err'), false);
        });
      }
    } catch (e) {
      this.utils.dissmisProgressLoader();
      this.utils.showAlert('', this.translate.instant('generic_msgs.server_err'), false);
    }
  }
  /**
   * This method is used to get base64 string from file url
   */
  getBase64StringFromFilePath(filePath, filename) {
    console.log('filePath', filePath);
    this.base64.encodeFile(filePath).then(base64File => {
      this.checkBase64SizeImage(base64File, filename);
    }, err => {
      this.utils.dissmisProgressLoader();
      var msg = this.translate.instant('claim_submission.err_bas64');
      this.utils.showAlert("", msg);
    });
  }
  /**
   * This method is used to attach the file to request Object and the make then visible of the UI
   * @param fileName - Name of the file selected
   * @param Base64String - base64 String of the file selected
   */
  addAttachment(fileName, Base64String) {
    console.log('aatachment--fileName', fileName);
    var filedata = {};
    if (this.utils.getPlatform() == 'ios') {
      fileName = fileName.split('.').pop().toLowerCase();
      fileName = new Date().getTime() + '.' + fileName;
    }
    filedata['Name'] = fileName;
    filedata['Base64String'] = Base64String;
    if (this.claimFormModel['files'][this.fileIndex]) {
      this.claimFormModel['files'].splice(this.fileIndex, 1, filedata);
    } else {
      this.claimFormModel['files'].push(filedata);
    }
    this[this.selectedFormName].controls.attachments.controls[this.fileIndex].controls['filename'].setValue(fileName);
    this.utils.dissmisProgressLoader();
  }
  /**
   *
   * @param title - Title of the Alert
   * @param message  - The message that need to shown
   */
  showDialog(title, message) {
    var ok = this.translate.instant('claim_submission.ok');
    let buttons = [{
      text: ok,
      handler: () => {
        // this.navCtrl.pop();
        this.router.navigate(['/claim-submission-type'], {
          state: {
            'typeOfClaims': this.typeofClaimList
          }
        });
      }
    }];
    let alert = this.alertCtrl.create({
      header: title,
      message: message,
      buttons: buttons,
      backdropDismiss: false
    }).then(alert => alert.present());
    ;
  }
  /** intialize file attchment ui  */
  initAttchmentFields() {
    return this.fb.group({
      filename: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.required]
    });
  }
  /**to add new attchment text field to the form */
  addNewAttachmentField(formName) {
    const control = this[formName].controls.attachments;
    control.push(this.initAttchmentFields());
    setTimeout(() => {
      let offSetNoti = document.getElementById("AttachemnetDiv").offsetTop;
      //  this.content.scrollTo(0, offSetNoti);
    }, 500);
  }
  /**to remove selected attchment from the form */
  removeAttachmentField(i, formName) {
    if (this[formName].controls.attachments.length - 1 == 0) {
      this[formName].controls.attachments.controls[i].controls['filename'].setValue("");
      this[this.selectedFormName].controls.attachments.controls[i].controls['filename'].markAsTouched();
    } else {
      const control = this[formName].controls.attachments;
      control.removeAt(i);
    }
    if (this.claimFormModel['files'].length > 0) {
      if (i > -1) {
        this.claimFormModel['files'].splice(i, 1);
      }
    }
  }
  Diagnosedate_of_death(event) {
    this.showPickerDiagnose = false;
    console.log('event', event);
    let formattdString = (0,date_fns__WEBPACK_IMPORTED_MODULE_12__["default"])((0,date_fns__WEBPACK_IMPORTED_MODULE_15__["default"])(event), 'd MMM yyyy');
    console.log('formattdString', formattdString);
    let dString = formattdString.split('T')[0];
    console.log('dString', dString);
    this.dateValuedeath = (0,date_fns__WEBPACK_IMPORTED_MODULE_12__["default"])(new Date(event), 'yyyy-MM-dd');
    this.formattdString = this.dateFormat(this.dateValuedeath);
    console.log('this.formattdString', this.formattdString);
  }
  /**this method is used to set death min date based on first dignosed date */
  setFirstDiagnoseDate(formCtrl) {
    console.log(formCtrl);
    let firstDiagnoseDate = this[formCtrl].get('first_diagnosed').value.trim();
    this.deathMinDate = Date.parse(new Date(firstDiagnoseDate).toISOString());
    // event perform
    this.showPicker = false;
    let formattdString = (0,date_fns__WEBPACK_IMPORTED_MODULE_12__["default"])((0,date_fns__WEBPACK_IMPORTED_MODULE_15__["default"])(firstDiagnoseDate), 'd MMM yyyy');
    let dString = formattdString.split('T')[0];
    this.dateValue = (0,date_fns__WEBPACK_IMPORTED_MODULE_12__["default"])(new Date(dString), 'yyyy-MM-dd');
    this.DiagnoseDate = this.dateFormat(this.dateValue);
    // event perform end here
    let deathDate = this[formCtrl].get('date_of_death').value.trim();
    if (deathDate != "" && deathDate != undefined) {
      if (Date.parse(new Date(deathDate).toISOString()) < Date.parse(new Date(firstDiagnoseDate).toISOString())) {
        this[formCtrl].get('date_of_death').setValue('');
      }
    }
  }
  /** on click of checkbox this method will call*/
  checkboxChange(checked) {
    if (checked) {
      this.disclaimer_terms = true;
    } else {
      this.disclaimer_terms = false;
    }
  }
}
ClaimSubmissionPage.ɵfac = function ClaimSubmissionPage_Factory(t) {
  return new (t || ClaimSubmissionPage)(_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_16__.DomSanitizer), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](src_providers_utils_utils_service__WEBPACK_IMPORTED_MODULE_1__.UtilService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_17__.ActionSheetController), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_awesome_cordova_plugins_camera_ngx__WEBPACK_IMPORTED_MODULE_2__.Camera), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_ionic_native_base64_ngx__WEBPACK_IMPORTED_MODULE_3__.Base64), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_claimSubmissionservice__WEBPACK_IMPORTED_MODULE_4__.ClaimSubmissionService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_17__.AlertController), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_18__.TranslateService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](src_providers_utils_config__WEBPACK_IMPORTED_MODULE_0__.ConfigProvider), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_ionic_native_file_path_ngx__WEBPACK_IMPORTED_MODULE_5__.FilePath), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_ionic_native_file_chooser_ngx__WEBPACK_IMPORTED_MODULE_6__.FileChooser), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_19__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_awesome_cordova_plugins_document_picker_ngx__WEBPACK_IMPORTED_MODULE_7__.DocumentPicker), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_awesome_cordova_plugins_device_ngx__WEBPACK_IMPORTED_MODULE_8__.Device), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_9__.File), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_awesome_cordova_plugins_chooser_ngx__WEBPACK_IMPORTED_MODULE_10__.Chooser));
};
ClaimSubmissionPage.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineComponent"]({
  type: ClaimSubmissionPage,
  selectors: [["app-claim-submission"]],
  viewQuery: function ClaimSubmissionPage_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵviewQuery"](_c0, 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵviewQuery"](_c1, 5);
    }
    if (rf & 2) {
      let _t;
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵloadQuery"]()) && (ctx.canvasEl = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵloadQuery"]()) && (ctx.captchIn = _t.first);
    }
  },
  decls: 21,
  vars: 11,
  consts: [["mode", "ios"], ["color", "primary"], ["slot", "start"], ["text", "", "icon", "chevron-back-outline", 2, "padding-left", "15px", "font-size", "0.7rem"], [1, "bold-font"], [1, "sub_title", "ion-no-padding"], [1, "subheader_bg"], [1, "sub-header"], ["no-bounce", "", 1, "app_bg1", "text_color_base"], [1, "white_container_border_radius", "margin", "padding_015"], ["class", "padding_015", 3, "formGroup", 4, "ngIf"], [1, "padding_015", 3, "formGroup"], [2, "margin-top", "15px"], ["lines", "none", 1, "border"], ["select-option", "", "interface", "popover", "mode", "ios", "formControlName", "typeOfPlan", 3, "interfaceOptions"], [3, "value", "selected", 4, "ngFor", "ngForOf"], [1, "mandatory_star"], ["restrict-input", "", "restrictInput", "alphanumeric", "formControlName", "contract_no", 3, "placeholder"], ["class", "errPosition", 4, "ngIf"], ["stacked", ""], ["restrict-input", "", "restrictInput", "nameOnly", "formControlName", "insuarance_pername_name", "type", "text", "restrict-input", "", "restrictInput", "nameOnly", 3, "placeholder"], ["restrict-input", "", "restrictInput", "alphanumericwithspace", "formControlName", "nric_no", "type", "text", 3, "placeholder"], ["formControlName", "address", "type", "text", "restrict-input", "", "restrictInput", "address", 3, "placeholder"], ["restrict-input", "", "restrictInput", "alphanumeric", "formControlName", "postcode", "type", "text", 3, "placeholder"], ["select-option", "", "interface", "popover", "mode", "ios", "formControlName", "state", 3, "interfaceOptions"], ["restrict-input", "", "restrictInput", "number", "formControlName", "telephone", "type", "tel", 3, "placeholder"], ["autocomplete", "none", "autocorrect", "none", "restrict-input", "", "restrictInput", "number", "formControlName", "mobile", "type", "tel", 3, "placeholder"], ["restrict-input", "", "restrictInput", "username", "formControlName", "email", "type", "email", 3, "placeholder"], ["lines", "none", 1, "border", 3, "click"], ["slot", "end"], ["size", "cover", "presentation", "date", "showDefaultButtons", "true", "formControlName", "date_of_loss", 3, "value", "min", "placeholder", "ionChange", "ionCancel", 4, "ngIf"], ["select-option", "", "interface", "popover", "mode", "ios", "formControlName", "nature_of_loss", 3, "interfaceOptions"], ["formControlName", "location_at_risk", "type", "text", "restrict-input", "", "restrictInput", "address", 3, "placeholder"], ["select-option", "", "interface", "popover", "mode", "ios", "formControlName", "claim_with_other_insurance", 3, "interfaceOptions"], ["formControlName", "estimate_claim_amount", "type", "text", 3, "placeholder"], ["select-option", "", "interface", "popover", "mode", "ios", "formControlName", "claimants_bank", 3, "interfaceOptions"], ["restrict-input", "", "restrictInput", "alphanumericwithspace", "formControlName", "claimants_act_name", "type", "text", 3, "placeholder"], ["restrict-input", "", "restrictInput", "alphanumericwithspace", "formControlName", "claimants_act_no", "type", "text", 3, "placeholder"], ["formArrayName", "attachments", "id", "AttachemnetDiv", 1, "margin_bottom"], ["class", "margin_bottom", 3, "formGroupName", 4, "ngFor", "ngForOf"], ["class", "errPosition", "id", "AddMorebtn", 4, "ngIf"], ["ion-text-center", ""], ["id", "AttachemnetDiv", "class", "btn_center", 3, "disabled", "click", 4, "ngIf"], ["lines", "none", 1, "disclaimerItem", "margin_bottom", "scrollDivDisclaimer"], [1, "disclaimertitle"], [2, "font-family", "agenda-semi"], [1, "terms_conditions"], ["mode", "md", "size", "1", "formControlName", "disclaimer", 3, "checked", "ionChange"], ["size", "11"], [4, "ngIf"], ["restrict-input", "", "restrictInput", "alphanumericwithspace", "formControlName", "remarks", "type", "text", 3, "placeholder"], ["class", "italic_font", 4, "ngIf"], ["formControlName", "agent_name", "type", "text", "restrict-input", "", "restrictInput", "agentName", 3, "placeholder"], ["restrict-input", "", "restrictInput", "number", "type", "tel", "formControlName", "agent_number", 3, "placeholder"], ["restrict-input", "", "restrictInput", "number", "type", "tel", "formControlName", "agent_mobile_number", 3, "placeholder"], ["stacked", "", 1, "label"], ["lines", "none", 2, "--background", "transparent !important"], ["size", "9", 2, "height", "48px !important", "align-items", "center", "text-align", "center"], [1, "canvas_background"], ["canvas", ""], ["size", "1"], ["size", "2", 2, "height", "48px !important", "align-items", "center", "text-align", "center"], [1, "canvas_background", "padding_15", 3, "click"], [1, "fas", "fa-redo-alt", "refreshiconsize"], ["restrict-input", "", "restrictInput", "alphanumeric", "formControlName", "captcha", 3, "placeholder"], ["captchInput", ""], [1, "mandatoryText"], ["text-center", ""], ["color", "secondary", "expand", "block", 3, "disabled", "click"], [3, "value", "selected"], [1, "errPosition"], ["size", "cover", "presentation", "date", "showDefaultButtons", "true", "formControlName", "date_of_loss", 3, "value", "min", "placeholder", "ionChange", "ionCancel"], ["datetime", ""], [1, "margin_bottom", 3, "formGroupName"], [1, "row_file"], ["size", "12"], ["disabled", "true", "formControlName", "filename", "type", "text", 1, "fileInput", 2, "background", "none !important", 3, "placeholder", "click"], ["name", "attach", 3, "click"], ["name", "close", 3, "click"], ["id", "AddMorebtn", 1, "errPosition"], ["id", "AttachemnetDiv", 1, "btn_center", 3, "disabled", "click"], [1, "fail", "padding_015"], [1, "italic_font"], ["stacked", "", 2, "margin-top", "15px"], ["restrict-input", "", "restrictInput", "alphanumeric", "formControlName", "contract_no", "type", "text", 3, "placeholder"], ["restrict-input", "", "restrictInput", "nameOnly", "formControlName", "insuarance_pername_name", "type", "text", 3, "placeholder"], ["restrict-input", "", "restrictInput", "alphanumeric", "formControlName", "nric_no", "type", "text", 3, "placeholder"], ["select-option", "", "interface", "popover", "mode", "ios", "formControlName", "type_of_illness", 3, "interfaceOptions"], ["formControlName", "doctors_address", "type", "text", "restrict-input", "", "restrictInput", "NameAddressofdoctor", 3, "placeholder"], ["class", "errPosition margintop", 4, "ngIf"], ["color", "secondary", "expand", "block", 3, "disabled", "click", 4, "ngIf"], ["mode", "md", "size", "1", "formControlName", "disclaimer", 1, "margin_top_bottom_auto", 3, "checked", "ionChange"], ["lines", "none", 2, "background", "none !important"], ["disabled", "true", "formControlName", "filename", "type", "text", 1, "fileInput", 3, "placeholder", "click"], [1, "errPosition", "margintop"], ["restrict-input", "", "restrictInput", "alphanumericwithspace", "formControlName", "occupation_prior", "type", "text", 3, "placeholder"], ["select-option", "", "interface", "popover", "mode", "ios", "formControlName", "currentEmpStatus", 3, "interfaceOptions"], ["mode", "ios", "size", "1", "formControlName", "disclaimer", 1, "margin_top_bottom_auto", 3, "checked", "ionChange"], ["size", "cover", "presentation", "date", "min", "2000-01-01", "showDefaultButtons", "true", "formControlName", "dateofAccident", 3, "value", "max", "ionChange", "ionCancel", 4, "ngIf"], ["size", "cover", "presentation", "time", "locale", "es-ES", "showDefaultButtons", "true", "formControlName", "timeOfAccident", 3, "value", "ionChange", "ionCancel", 4, "ngIf"], ["formControlName", "howAccidentHappened", "type", "text", "restrict-input", "", "restrictInput", "address", 3, "placeholder"], ["select-option", "", "interface", "popover", "mode", "ios", "formControlName", "reportedPolice", 3, "interfaceOptions"], [1, "btn_center", 3, "disabled", "click"], ["size", "cover", "presentation", "date", "min", "2000-01-01", "showDefaultButtons", "true", "formControlName", "dateofAccident", 3, "value", "max", "ionChange", "ionCancel"], ["size", "cover", "presentation", "time", "locale", "es-ES", "showDefaultButtons", "true", "formControlName", "timeOfAccident", 3, "value", "ionChange", "ionCancel"], ["time", ""], ["size", "cover", "presentation", "date", "min", "2000-01-01", "showDefaultButtons", "true", "formControlName", "first_diagnosed", 3, "value", "max", "ionChange", "ionCancel", 4, "ngIf"], ["size", "cover", "presentation", "date", "showDefaultButtons", "true", "formControlName", "date_of_death", 3, "value", "min", "max", "ionChange", "ionCancel", 4, "ngIf"], ["select-option", "", "interface", "popover", "formControlName", "deathreason", 3, "interfaceOptions", "disabled"], [1, "heading"], ["restrict-input", "", "restrictInput", "nameOnly", "formControlName", "claimants_name", "type", "text", 3, "placeholder"], ["restrict-input", "", "restrictInput", "alphanumericwithspace", "formControlName", "claimants_nric_no", "type", "text", 3, "placeholder"], ["formControlName", "claimants_address", "type", "text", "restrict-input", "", "restrictInput", "address", 3, "placeholder"], ["restrict-input", "", "restrictInput", "alphanumeric", "formControlName", "claimants_postcode", "type", "text", 3, "placeholder"], ["select-option", "", "interface", "popover", "mode", "ios", "formControlName", "claimants_state", 3, "interfaceOptions"], ["restrict-input", "", "restrictInput", "number", "formControlName", "claimants_telephone", "type", "tel", 3, "placeholder"], ["autocomplete", "none", "autocorrect", "none", "restrict-input", "", "restrictInput", "number", "formControlName", "claimants_mobile", "type", "tel", 3, "placeholder"], ["restrict-input", "", "restrictInput", "username", "formControlName", "claimants_email", "type", "email", 3, "placeholder"], ["restrict-input", "", "restrictInput", "nameOnly", "formControlName", "claimants_relationship", "type", "text", 3, "placeholder"], ["class", "btn_center", 3, "disabled", "click", 4, "ngIf"], ["size", "cover", "presentation", "date", "min", "2000-01-01", "showDefaultButtons", "true", "formControlName", "first_diagnosed", 3, "value", "max", "ionChange", "ionCancel"], ["size", "cover", "presentation", "date", "showDefaultButtons", "true", "formControlName", "date_of_death", 3, "value", "min", "max", "ionChange", "ionCancel"], ["size", "cover", "presentation", "date", "min", "2000-01-01", "showDefaultButtons", "true", "formControlName", "date_of_death", 3, "value", "max", "ionChange", "ionCancel", 4, "ngIf"], ["select-option", "", "interface", "popover", "mode", "ios", "formControlName", "accitivityAtTheTimeOfAccident", 3, "interfaceOptions"], ["select-option", "", "interface", "popover", "mode", "ios", "formControlName", "anyPostMorten", 3, "interfaceOptions"], ["select-option", "", "interface", "popover", "mode", "ios", "formControlName", "claimants_bank"], ["size", "cover", "presentation", "date", "min", "2000-01-01", "showDefaultButtons", "true", "formControlName", "date_of_death", 3, "value", "max", "ionChange", "ionCancel"]],
  template: function ClaimSubmissionPage_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "ion-header", 0)(1, "ion-toolbar", 1)(2, "ion-buttons", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](3, "ion-back-button", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](4, "ion-title", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](6, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](7, "ion-toolbar", 5)(8, "ion-row", 6)(9, "ion-label", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](10);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](11, "ion-content", 8)(12, "div")(13, "div", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](14, ClaimSubmissionPage_form_14_Template, 260, 215, "form", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](15, ClaimSubmissionPage_form_15_Template, 236, 191, "form", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](16, ClaimSubmissionPage_form_16_Template, 234, 191, "form", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](17, ClaimSubmissionPage_form_17_Template, 224, 181, "form", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](18, ClaimSubmissionPage_form_18_Template, 256, 209, "form", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](19, ClaimSubmissionPage_form_19_Template, 284, 236, "form", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](20, ClaimSubmissionPage_form_20_Template, 285, 237, "form", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](6, 9, "claim_submission.title"));
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](ctx.type);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx.isHouseOwnerClaim);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx.isCriticalIllnessClaim);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx.isTotalDisabilityClaim);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx.isHospitalClaim);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx.isAccidentCalim);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx.isIllnessDeathClaim);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx.isAccidentDeathClaim);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_20__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_20__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_13__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_13__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.NgControlStatusGroup, _ionic_angular__WEBPACK_IMPORTED_MODULE_17__.IonBackButton, _ionic_angular__WEBPACK_IMPORTED_MODULE_17__.IonButton, _ionic_angular__WEBPACK_IMPORTED_MODULE_17__.IonButtons, _ionic_angular__WEBPACK_IMPORTED_MODULE_17__.IonCheckbox, _ionic_angular__WEBPACK_IMPORTED_MODULE_17__.IonCol, _ionic_angular__WEBPACK_IMPORTED_MODULE_17__.IonContent, _ionic_angular__WEBPACK_IMPORTED_MODULE_17__.IonDatetime, _ionic_angular__WEBPACK_IMPORTED_MODULE_17__.IonGrid, _ionic_angular__WEBPACK_IMPORTED_MODULE_17__.IonHeader, _ionic_angular__WEBPACK_IMPORTED_MODULE_17__.IonIcon, _ionic_angular__WEBPACK_IMPORTED_MODULE_17__.IonInput, _ionic_angular__WEBPACK_IMPORTED_MODULE_17__.IonItem, _ionic_angular__WEBPACK_IMPORTED_MODULE_17__.IonLabel, _ionic_angular__WEBPACK_IMPORTED_MODULE_17__.IonRow, _ionic_angular__WEBPACK_IMPORTED_MODULE_17__.IonSelect, _ionic_angular__WEBPACK_IMPORTED_MODULE_17__.IonSelectOption, _ionic_angular__WEBPACK_IMPORTED_MODULE_17__.IonText, _ionic_angular__WEBPACK_IMPORTED_MODULE_17__.IonTitle, _ionic_angular__WEBPACK_IMPORTED_MODULE_17__.IonToolbar, _ionic_angular__WEBPACK_IMPORTED_MODULE_17__.BooleanValueAccessor, _ionic_angular__WEBPACK_IMPORTED_MODULE_17__.SelectValueAccessor, _ionic_angular__WEBPACK_IMPORTED_MODULE_17__.TextValueAccessor, _ionic_angular__WEBPACK_IMPORTED_MODULE_17__.IonBackButtonDelegate, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormControlName, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormGroupName, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormArrayName, _angular_common__WEBPACK_IMPORTED_MODULE_20__.DatePipe, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_18__.TranslatePipe],
  styles: ["_center[_ngcontent-%COMP%]   .list-header[_ngcontent-%COMP%] {\n  margin-bottom: 0px !important;\n}\n\n.item[_ngcontent-%COMP%] {\n  padding-left: 0px;\n  background: transparent;\n}\n\n.item[_ngcontent-%COMP%]   .item-input.ng-valid.item-input-has-value[_ngcontent-%COMP%]:not(.input-has-focus):not(.item-input-has-focus)   .item-inner[_ngcontent-%COMP%], .item.item-input.ng-valid.input-has-value[_ngcontent-%COMP%]:not(.input-has-focus):not(.item-input-has-focus)   .item-inner[_ngcontent-%COMP%] {\n  border-bottom-color: none !important;\n  box-shadow: none !important;\n}\n\n.item-inner[_ngcontent-%COMP%] {\n  padding-right: 0px !important;\n  border-bottom: none !important;\n}\n\nion-input[_ngcontent-%COMP%] {\n  padding: 3px 15px;\n  background: white;\n}\n\np[_ngcontent-%COMP%] {\n  color: var(--ion-color-secondary) !important;\n  white-space: pre-line;\n  font-family: agenda-semibold;\n}\n\n.date_tile[_ngcontent-%COMP%] {\n  background: var(--ion-color-secondary) !important;\n  color: white !important;\n  min-height: 0px;\n}\n\nsection[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  height: 100%;\n}\n\nsection[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin-bottom: 25px;\n  padding: 0px 10px;\n  font-size: 1.5 rem;\n}\n\n.item[_ngcontent-%COMP%]   .checkbox[_ngcontent-%COMP%] {\n  margin: 0px 10px 0px 0px !important;\n}\n\n.checkbox-icon[_ngcontent-%COMP%] {\n  border-color: var(--ion-color-secondary) !important;\n  border-radius: 5px !important;\n}\n\n.checkbox-checked[_ngcontent-%COMP%] {\n  border-color: var(--ion-color-secondary) !important;\n  background-color: var(--ion-color-secondary) !important;\n}\n\n.checkbox-inner[_ngcontent-%COMP%] {\n  border-color: white !important;\n}\n\n.select-text[_ngcontent-%COMP%] {\n  padding: 3px 15px;\n}\n\n.select-icon[_ngcontent-%COMP%] {\n  display: none;\n}\n\n.date_tile[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%] {\n  color: #eee !important;\n  font-size: 1.8rem;\n  margin: 0px;\n  line-height: 24px;\n}\n\n.datetime[_ngcontent-%COMP%] {\n  border: 1px solid #eee;\n  background: white;\n  font-size: 1.4rem;\n}\n\nion-icon[_ngcontent-%COMP%] {\n  display: inline-block;\n  font-size: 2rem;\n  padding: 12px 9px;\n}\n\n.fileInput[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: 100%;\n}\n\n.text-input[disabled][_ngcontent-%COMP%] {\n  opacity: 1;\n}\n\n.col[_ngcontent-%COMP%] {\n  align-items: center !important;\n}\n\n.row_file[_ngcontent-%COMP%] {\n  height: 40px !important;\n}\n\n.mandatoryText[_ngcontent-%COMP%] {\n  color: var(--ion-color-secondary);\n  font-size: 13px;\n  margin-bottom: 10px;\n  margin-top: 10px;\n  line-height: 24px;\n}\n\n@media only screen and (max-width: 374px) {\n  .date_tile[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%] {\n    font-size: 1.4rem !important;\n  }\n}\n.item-radio[_ngcontent-%COMP%]   .button-effect[_ngcontent-%COMP%] {\n  transform: none !important;\n  transition: 0ms !important;\n}\n\n.list-header[_ngcontent-%COMP%] {\n  border: 0px;\n}\n\n.disabled-dropdown[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%] {\n  opacity: 1;\n}\n\n.disabled-dropdown[_ngcontent-%COMP%]   .select[_ngcontent-%COMP%] {\n  opacity: 1;\n  background: #ffffff;\n}\n\n.row_file[_ngcontent-%COMP%]   .col[_ngcontent-%COMP%]:last-child {\n  padding: 0px;\n}\n\n.sub_title[_ngcontent-%COMP%] {\n  margin-top: 3px !important;\n}\n\n.row_file[_ngcontent-%COMP%]   .fileInput[_ngcontent-%COMP%] {\n  padding: 0px 15px;\n}\n\n.row_file[_ngcontent-%COMP%]   .ion-input[_ngcontent-%COMP%] {\n  margin: 11px 0px;\n}\n\n.list-ios[_ngcontent-%COMP%]    > .item-block[_ngcontent-%COMP%]:last-child, .list-ios[_ngcontent-%COMP%]    > .item-wrapper[_ngcontent-%COMP%]:last-child   .item-block[_ngcontent-%COMP%] {\n  border-bottom: none !important;\n}\n\n.list-ios[_ngcontent-%COMP%], .list-ios[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%] {\n  margin: 0px !important;\n}\n\n.list-header-ios[_ngcontent-%COMP%] {\n  text-transform: none;\n}\n\n.datetime-text[_ngcontent-%COMP%] {\n  padding-left: 15px;\n}\n\n.row_file[_ngcontent-%COMP%]   .col[_ngcontent-%COMP%] {\n  padding-left: 0px !important;\n}\n\n.terms[_ngcontent-%COMP%] {\n  text-decoration: underline;\n  white-space: unset !important;\n  text-transform: lowercase;\n}\n\n.terms_conditions[_ngcontent-%COMP%] {\n  margin-top: -20px;\n}\n\n.terms_conditions[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 1.4rem !important;\n}\n\n.disclaimerItem[_ngcontent-%COMP%] {\n  margin-top: -40px;\n}\n\n.scrollDivDisclaimer[_ngcontent-%COMP%] {\n  height: 150px;\n  overflow-y: scroll;\n  border: 1px solid #eee;\n  padding: 3px 15px;\n  background: #ffffff;\n  font-size: 1rem;\n}\n\n.margin_bottom[_ngcontent-%COMP%] {\n  margin-bottom: 10%;\n}\n\n.fail[_ngcontent-%COMP%] {\n  text-align: start !important;\n  color: #f00 !important;\n}\n\n.padding_015[_ngcontent-%COMP%] {\n  padding: 0px 15px;\n}\n\n.disclaimertitle[_ngcontent-%COMP%] {\n  font-size: 1rem !important;\n  color: #002d3d !important;\n  margin-top: 10px !important;\n}\n\n.canvasrow[_ngcontent-%COMP%] {\n  margin-top: 5px;\n}\n\n.captcha[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%] {\n  margin-right: 0px !important;\n}\n\n.refreshiconsize[_ngcontent-%COMP%] {\n  font-size: 0.85em !important;\n}\n\n.canvas_background[_ngcontent-%COMP%] {\n  text-align: center;\n  background-color: var(--ion-color-secondary);\n  color: white;\n}\n\n.canvas_background1[_ngcontent-%COMP%] {\n  text-align: center;\n  background-color: var(--ion-color-secondary);\n  color: white;\n  font-size: 36px;\n}\n\n.subheader_bg[_ngcontent-%COMP%] {\n  background-color: var(--ion-color-secondary);\n  font-family: Agenda-Regular;\n  font-size: 1.8rem;\n  color: --ion-color-white !important;\n}\n\n.sub_title[_ngcontent-%COMP%] {\n  padding: 0px !important;\n}\n\n.sub-header[_ngcontent-%COMP%] {\n  color: #ffffff;\n  padding: 10px 25px !important;\n  margin: 0px !important;\n  font-size: 1.1rem !important;\n  font-family: Agenda-Regular;\n}\n\n.app_bg1[_ngcontent-%COMP%] {\n  --background: url(/../assets/imgs/register_bg.jpg) no-repeat center center / cover;\n}\n\n.text_color_base[_ngcontent-%COMP%] {\n  color: var(--ion-color-secondary) !important;\n}\n\n.white_container_border_radius[_ngcontent-%COMP%] {\n  background-color: rgba(255, 255, 255, 0.7) !important;\n  border-radius: 15px !important;\n  margin: 15px;\n  padding: 15px;\n}\n\n.label-margin[_ngcontent-%COMP%] {\n  margin-top: 12px;\n  margin-bottom: 9px;\n  font-weight: bold;\n  color: var(--ion-color-secondary) !important;\n}\n\n.iconmanage[_ngcontent-%COMP%] {\n  margin: 0%;\n}\n\n.marginSpan[_ngcontent-%COMP%] {\n  margin-top: 2px;\n}\n\n.btn_center[_ngcontent-%COMP%] {\n  text-transform: capitalize;\n  --background: #002d3d !important;\n  color: white;\n  margin-top: 15px;\n  --border-radius: 10px !important;\n  min-width: 200px;\n  min-height: 45px;\n  width: 100% !important;\n  font-family: Agenda-Regular !important;\n}\n\n.margintop[_ngcontent-%COMP%] {\n  margin-top: 20px;\n}\n\n.lablemanage[_ngcontent-%COMP%] {\n  display: inline-flex;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcGFnZXMvY2xhaW0tc3VibWlzc2lvbi9jbGFpbS1zdWJtaXNzaW9uLnBhZ2Uuc2NzcyIsIndlYnBhY2s6Ly8uLy4uLy4uLy4uL0FsbCUyMFByb2plY3RzL01hbGF5c2lhX0NsaWVudEFwcF9SZXZhbXAvU3VuQWNjZXNzX0lvbmljNl9SZXZhbXAvc3JjL2FwcC9wYWdlcy9jbGFpbS1zdWJtaXNzaW9uL2NsYWltLXN1Ym1pc3Npb24ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBRVEsNkJBQUE7QUNEUjs7QURJSTtFQUNJLGlCQUFBO0VBQ0EsdUJBQUE7QUNEUjs7QURJSTtFQUNJLG9DQUFBO0VBRUEsMkJBQUE7QUNEUjs7QURLRztFQUNJLDZCQUFBO0VBQ0EsOEJBQUE7QUNGUDs7QURLRztFQUVLLGlCQUFBO0VBQ0EsaUJBQUE7QUNIUjs7QURPRztFQUVLLDRDQUFBO0VBRUEscUJBQUE7RUFDQSw0QkFBQTtBQ05SOztBRFNHO0VBQ0ssaURBQUE7RUFDQSx1QkFBQTtFQUNBLGVBQUE7QUNOUjs7QURTSTtFQUNJLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0FDTlI7O0FEUUk7RUFDSSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUNMUjs7QURTSTtFQUNJLG1DQUFBO0FDTlI7O0FEUUk7RUFDSSxtREFBQTtFQUNBLDZCQUFBO0FDTFI7O0FET0k7RUFDSSxtREFBQTtFQUNBLHVEQUFBO0FDSlI7O0FET0k7RUFDSSw4QkFBQTtBQ0pSOztBRE9JO0VBQ1EsaUJBQUE7QUNKWjs7QURRSTtFQUNJLGFBQUE7QUNMUjs7QURRSTtFQUNJLHNCQUFBO0VBQ0EsaUJBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7QUNMUjs7QURRSTtFQUNJLHNCQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtBQ0xSOztBRFFJO0VBQ0kscUJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7QUNMUjs7QURRSTtFQUNJLHFCQUFBO0VBQ0EsV0FBQTtBQ0xSOztBRE9JO0VBQ0ksVUFBQTtBQ0pSOztBRE1JO0VBRUksOEJBQUE7QUNKUjs7QURPSTtFQUNJLHVCQUFBO0FDSlI7O0FEUUk7RUFDSSxpQ0FBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7QUNMUjs7QURRSTtFQUNJO0lBQ0ksNEJBQUE7RUNMVjtBQUNGO0FEUUk7RUFDSSwwQkFBQTtFQUNBLDBCQUFBO0FDTlI7O0FEU0k7RUFDSSxXQUFBO0FDTlI7O0FEU0k7RUFDSSxVQUFBO0FDTlI7O0FEU0k7RUFDSSxVQUFBO0VBQ0EsbUJBQUE7QUNOUjs7QURTSTtFQUNJLFlBQUE7QUNOUjs7QURTSTtFQUNJLDBCQUFBO0FDTlI7O0FEU0k7RUFDSSxpQkFBQTtBQ05SOztBRFFJO0VBQ0ksZ0JBQUE7QUNMUjs7QURPSTtFQUNJLDhCQUFBO0FDSlI7O0FETUk7RUFDSyxzQkFBQTtBQ0hUOztBRE1JO0VBQ0ksb0JBQUE7QUNIUjs7QURNSTtFQUNJLGtCQUFBO0FDSFI7O0FETUk7RUFDSSw0QkFBQTtBQ0hSOztBREtNO0VBQ0UsMEJBQUE7RUFDQSw2QkFBQTtFQUNBLHlCQUFBO0FDRlI7O0FESUE7RUFDTSxpQkFBQTtBQ0ROOztBREdJO0VBQ0ksNEJBQUE7QUNBUjs7QURJSTtFQUNJLGlCQUFBO0FDRFI7O0FER0k7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxzQkFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0FDQUo7O0FEYU07RUFDQyxrQkFBQTtBQ1ZQOztBRGFJO0VBQ0ksNEJBQUE7RUFDQSxzQkFBQTtBQ1ZSOztBRGFJO0VBQ0ksaUJBQUE7QUNWUjs7QURZQTtFQUNFLDBCQUFBO0VBQ0UseUJBQUE7RUFDRCwyQkFBQTtBQ1RIOztBRFdDO0VBQ0csZUFBQTtBQ1JKOztBRFVDO0VBQ0UsNEJBQUE7QUNQSDs7QURTQztFQUNHLDRCQUFBO0FDTko7O0FEUUk7RUFDSSxrQkFBQTtFQUNBLDRDQUFBO0VBQ0EsWUFBQTtBQ0xSOztBRFNNO0VBQ0Usa0JBQUE7RUFFQSw0Q0FBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0FDUFI7O0FEWUk7RUFDSSw0Q0FBQTtFQUNBLDJCQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQ0FBQTtBQ1RSOztBRFlNO0VBQ0UsdUJBQUE7QUNUUjs7QURhTTtFQUNFLGNBQUE7RUFDQSw2QkFBQTtFQUNBLHNCQUFBO0VBQ0EsNEJBQUE7RUFDQSwyQkFBQTtBQ1ZSOztBRGFNO0VBQ0Usa0ZBQUE7QUNWUjs7QURZSTtFQUNJLDRDQUFBO0FDVFI7O0FEV0k7RUFDSSxxREFBQTtFQUNBLDhCQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7QUNSUjs7QURVSTtFQUNJLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLDRDQUFBO0FDUFI7O0FEVUk7RUFDSSxVQUFBO0FDUFI7O0FEU0k7RUFDSSxlQUFBO0FDTlI7O0FEUUk7RUFDSSwwQkFBQTtFQUNBLGdDQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0NBQUE7RUFDQSxnQkFBQTtFQUdBLGdCQUFBO0VBQ0Esc0JBQUE7RUFDQSxzQ0FBQTtBQ1BSOztBRFNNO0VBQ0UsZ0JBQUE7QUNOUjs7QURRTTtFQUNFLG9CQUFBO0FDTFIiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBhcHAtY2xhaW0tc3VibWlzc2lvbiB7XHJcbl9jZW50ZXJcclxuICAgIC5saXN0LWhlYWRlcntcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAwcHggIWltcG9ydGFudDtcclxuICAgIH1cclxuXHJcbiAgICAuaXRlbXtcclxuICAgICAgICBwYWRkaW5nLWxlZnQ6IDBweDtcclxuICAgICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICAgIH1cclxuXHJcbiAgICAuaXRlbSAuaXRlbS1pbnB1dC5uZy12YWxpZC5pdGVtLWlucHV0LWhhcy12YWx1ZTpub3QoLmlucHV0LWhhcy1mb2N1cyk6bm90KC5pdGVtLWlucHV0LWhhcy1mb2N1cykgLml0ZW0taW5uZXIsIC5pdGVtLml0ZW0taW5wdXQubmctdmFsaWQuaW5wdXQtaGFzLXZhbHVlOm5vdCguaW5wdXQtaGFzLWZvY3VzKTpub3QoLml0ZW0taW5wdXQtaGFzLWZvY3VzKSAuaXRlbS1pbm5lcntcclxuICAgICAgICBib3JkZXItYm90dG9tLWNvbG9yOiBub25lICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgLXdlYmtpdC1ib3gtc2hhZG93IDogbm9uZSAhaW1wb3J0YW50O1xyXG4gICAgICAgIGJveC1zaGFkb3cgOiBub25lICFpbXBvcnRhbnQ7XHJcblxyXG4gICAgfVxyXG5cclxuICAgLml0ZW0taW5uZXJ7XHJcbiAgICAgICBwYWRkaW5nLXJpZ2h0OiAwcHggIWltcG9ydGFudDtcclxuICAgICAgIGJvcmRlci1ib3R0b206IG5vbmUgIWltcG9ydGFudDtcclxuICAgfVxyXG5cclxuICAgaW9uLWlucHV0e1xyXG4gICAgICAgIC8vIGJvcmRlcjogMXB4IHNvbGlkICNlZWU7XHJcbiAgICAgICAgcGFkZGluZzogM3B4IDE1cHg7XHJcbiAgICAgICAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgICAgICAgLy8gZm9udC1zaXplOiAxLjRyZW07XHJcbiAgIH1cclxuXHJcbiAgIHB7XHJcbiAgICAgICAgLy8gZm9udC1zaXplOiAxLjhyZW0gIWltcG9ydGFudDtcclxuICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXNlY29uZGFyeSkgIWltcG9ydGFudDtcclxuICAgICAgICAvL2ZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICAgICAgd2hpdGUtc3BhY2U6IHByZS1saW5lO1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiBhZ2VuZGEtc2VtaWJvbGQ7XHJcbiAgIH1cclxuXHJcbiAgIC5kYXRlX3RpbGV7XHJcbiAgICAgICAgYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXNlY29uZGFyeSkgICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgbWluLWhlaWdodDogMHB4O1xyXG4gICAgfVxyXG5cclxuICAgIHNlY3Rpb24ge1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgIH1cclxuICAgIHNlY3Rpb24gcHtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOjI1cHg7XHJcbiAgICAgICAgcGFkZGluZzogMHB4IDEwcHg7XHJcbiAgICAgICAgZm9udC1zaXplOiAxLjUgcmVtO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICAuaXRlbSAuY2hlY2tib3h7XHJcbiAgICAgICAgbWFyZ2luOiAwcHggMTBweCAwcHggMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbiAgICAuY2hlY2tib3gtaWNvbntcclxuICAgICAgICBib3JkZXItY29sb3I6IHZhcigtLWlvbi1jb2xvci1zZWNvbmRhcnkpICAhaW1wb3J0YW50O1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDVweCAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG4gICAgLmNoZWNrYm94LWNoZWNrZWR7XHJcbiAgICAgICAgYm9yZGVyLWNvbG9yOiB2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5KSAgIWltcG9ydGFudDtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5KSAgIWltcG9ydGFudDtcclxuICAgIH1cclxuXHJcbiAgICAuY2hlY2tib3gtaW5uZXJ7XHJcbiAgICAgICAgYm9yZGVyLWNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG5cclxuICAgIC5zZWxlY3QtdGV4dCB7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDNweCAxNXB4O1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICAuc2VsZWN0LWljb24ge1xyXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICB9XHJcblxyXG4gICAgLmRhdGVfdGlsZSAubGFiZWx7XHJcbiAgICAgICAgY29sb3I6ICNlZWUgIWltcG9ydGFudDtcclxuICAgICAgICBmb250LXNpemU6IDEuOHJlbTtcclxuICAgICAgICBtYXJnaW46MHB4O1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAyNHB4O1xyXG4gICAgfVxyXG5cclxuICAgIC5kYXRldGltZSB7XHJcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2VlZTtcclxuICAgICAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICAgICAgICBmb250LXNpemU6IDEuNHJlbTtcclxuICAgIH1cclxuXHJcbiAgICBpb24taWNvbiB7XHJcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMi4wcmVtO1xyXG4gICAgICAgIHBhZGRpbmc6IDEycHggOXB4O1xyXG4gICAgfVxyXG5cclxuICAgIC5maWxlSW5wdXR7XHJcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgfVxyXG4gICAgLnRleHQtaW5wdXRbZGlzYWJsZWRdIHtcclxuICAgICAgICBvcGFjaXR5OiAxO1xyXG4gICAgfVxyXG4gICAgLmNvbHtcclxuICAgICAgICAvLyB0ZXh0LWFsaWduOiBjZW50ZXIgIWltcG9ydGFudDtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcblxyXG4gICAgLnJvd19maWxle1xyXG4gICAgICAgIGhlaWdodDogNDBweCAhaW1wb3J0YW50O1xyXG5cclxuICAgIH1cclxuXHJcbiAgICAubWFuZGF0b3J5VGV4dHtcclxuICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXNlY29uZGFyeSkgO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOjEwcHg7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgICAgICBsaW5lLWhlaWdodDogMjRweDtcclxuICAgICB9XHJcblxyXG4gICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAzNzRweCkge1xyXG4gICAgICAgIC5kYXRlX3RpbGUgLmxhYmVsIHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxLjRyZW0gIWltcG9ydGFudDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLml0ZW0tcmFkaW8gLmJ1dHRvbi1lZmZlY3R7XHJcbiAgICAgICAgdHJhbnNmb3JtOiBub25lICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgdHJhbnNpdGlvbjogMG1zICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcblxyXG4gICAgLmxpc3QtaGVhZGVye1xyXG4gICAgICAgIGJvcmRlcjowcHg7XHJcbiAgICB9XHJcblxyXG4gICAgLmRpc2FibGVkLWRyb3Bkb3duIC5sYWJlbCB7XHJcbiAgICAgICAgb3BhY2l0eTogMTtcclxuICAgIH1cclxuXHJcbiAgICAuZGlzYWJsZWQtZHJvcGRvd24gLnNlbGVjdHtcclxuICAgICAgICBvcGFjaXR5OiAxO1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICNmZmZmZmY7XHJcbiAgICB9XHJcblxyXG4gICAgLnJvd19maWxlIC5jb2w6bGFzdC1jaGlsZHtcclxuICAgICAgICBwYWRkaW5nOiAwcHg7XHJcbiAgICAgICAgLy8gbWFyZ2luLXRvcDogN3B4O1xyXG4gICAgfVxyXG4gICAgLnN1Yl90aXRsZXtcclxuICAgICAgICBtYXJnaW4tdG9wOiAzcHggIWltcG9ydGFudDtcclxuICAgIH1cclxuXHJcbiAgICAucm93X2ZpbGUgLmZpbGVJbnB1dHtcclxuICAgICAgICBwYWRkaW5nOiAwcHggMTVweDtcclxuICAgIH1cclxuICAgIC5yb3dfZmlsZSAuaW9uLWlucHV0e1xyXG4gICAgICAgIG1hcmdpbjogMTFweCAwcHg7XHJcbiAgICB9XHJcbiAgICAubGlzdC1pb3MgPiAuaXRlbS1ibG9jazpsYXN0LWNoaWxkLCAubGlzdC1pb3MgPiAuaXRlbS13cmFwcGVyOmxhc3QtY2hpbGQgLml0ZW0tYmxvY2t7XHJcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogbm9uZSAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG4gICAgLmxpc3QtaW9zLCAubGlzdC1pb3MgLmxhYmVsIHtcclxuICAgICAgICAgbWFyZ2luOiAwcHggIWltcG9ydGFudDtcclxuICAgIH1cclxuXHJcbiAgICAubGlzdC1oZWFkZXItaW9ze1xyXG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiBub25lO1xyXG4gICAgfVxyXG5cclxuICAgIC5kYXRldGltZS10ZXh0e1xyXG4gICAgICAgIHBhZGRpbmctbGVmdDogMTVweDtcclxuICAgIH1cclxuXHJcbiAgICAucm93X2ZpbGUgLmNvbHtcclxuICAgICAgICBwYWRkaW5nLWxlZnQ6IDBweCAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG4gICAgICAudGVybXN7XHJcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XHJcbiAgICAgICAgd2hpdGUtc3BhY2U6IHVuc2V0ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IGxvd2VyY2FzZTtcclxuICAgIH1cclxuLnRlcm1zX2NvbmRpdGlvbnN7XHJcbiAgICAgIG1hcmdpbi10b3A6IC0yMHB4O1xyXG59XHJcbiAgICAudGVybXNfY29uZGl0aW9ucyBzcGFue1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMS40cmVtICFpbXBvcnRhbnQ7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIC5kaXNjbGFpbWVySXRlbXtcclxuICAgICAgICBtYXJnaW4tdG9wOiAtNDBweDtcclxuICAgIH1cclxuICAgIC5zY3JvbGxEaXZEaXNjbGFpbWVye1xyXG4gICAgaGVpZ2h0OiAxNTBweDtcclxuICAgIG92ZXJmbG93LXk6IHNjcm9sbDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNlZWU7XHJcbiAgICBwYWRkaW5nOiAzcHggMTVweDtcclxuICAgIGJhY2tncm91bmQ6ICNmZmZmZmY7XHJcbiAgICBmb250LXNpemU6IDEuMHJlbTtcclxuICAgIH1cclxuICAgIC8vIC5kaXNjbGFpbWVySXRlbXtcclxuICAgIC8vICAgICBtYXJnaW4tdG9wOiAtNDBweDtcclxuICAgIC8vIH1cclxuICAgIC8vIC5zY3JvbGxEaXZEaXNjbGFpbWVye1xyXG4gICAgLy8gaGVpZ2h0OiAxNTBweDtcclxuICAgIC8vIG92ZXJmbG93LXk6IHNjcm9sbDtcclxuICAgIC8vIGJvcmRlcjogMXB4IHNvbGlkICNlZWU7XHJcbiAgICAvLyBwYWRkaW5nOiAzcHggMTVweDtcclxuICAgIC8vIGJhY2tncm91bmQ6ICNmZmZmZmY7XHJcbiAgICAvLyBmb250LXNpemU6IDFyZW07XHJcbiAgICAvLyB9XHJcbiAgICAgIC5tYXJnaW5fYm90dG9te1xyXG4gICAgICAgbWFyZ2luLWJvdHRvbTogMTAlO1xyXG4gICB9XHJcblxyXG4gICAgLmZhaWx7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogc3RhcnQgIWltcG9ydGFudDtcclxuICAgICAgICBjb2xvciA6ICNmMDAgIWltcG9ydGFudDtcclxuICAgIH1cclxuXHJcbiAgICAucGFkZGluZ18wMTV7XHJcbiAgICAgICAgcGFkZGluZyA6IDBweCAxNXB4O1xyXG4gICAgfVxyXG4uZGlzY2xhaW1lcnRpdGxle1xyXG4gIGZvbnQtc2l6ZTogMS4wcmVtICFpbXBvcnRhbnQ7XHJcbiAgICBjb2xvcjogIzAwMmQzZCAhaW1wb3J0YW50O1xyXG4gICBtYXJnaW4tdG9wOiAxMHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuIC5jYW52YXNyb3d7XHJcbiAgICBtYXJnaW4tdG9wOiA1cHg7XHJcbiB9XHJcbiAuY2FwdGNoYSBpb24tbGFiZWx7XHJcbiAgIG1hcmdpbi1yaWdodDogMHB4ICFpbXBvcnRhbnQ7XHJcbiB9XHJcbiAucmVmcmVzaGljb25zaXple1xyXG4gICAgZm9udC1zaXplOiAwLjg1ZW0gIWltcG9ydGFudDtcclxuIH1cclxuICAgIC5jYW52YXNfYmFja2dyb3VuZHtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXNlY29uZGFyeSkgO1xyXG4gICAgICAgIGNvbG9yOndoaXRlO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICAgIC5jYW52YXNfYmFja2dyb3VuZDEge1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXNlY29uZGFyeSk7XHJcbiAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMzZweDtcclxuICAgICAgfVxyXG4gICAgLy8gICAucmVmcmVzaGljb25zaXple1xyXG4gICAgLy8gICAgIGZvbnQtc2l6ZTogMC43MGVtICFpbXBvcnRhbnQ7XHJcbiAgICAvLyAgfVxyXG4gICAgLnN1YmhlYWRlcl9iZyB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXNlY29uZGFyeSk7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6IEFnZW5kYS1SZWd1bGFyO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMS44cmVtO1xyXG4gICAgICAgIGNvbG9yOiAtLWlvbi1jb2xvci13aGl0ZSAhaW1wb3J0YW50O1xyXG4gICAgICB9XHJcblxyXG4gICAgICAuc3ViX3RpdGxlIHtcclxuICAgICAgICBwYWRkaW5nOiAwcHggIWltcG9ydGFudDtcclxuICAgICAgICAvL21pbi1oZWlnaHQ6IDEwMCUgIWltcG9ydGFudDtcclxuICAgICAgfVxyXG5cclxuICAgICAgLnN1Yi1oZWFkZXIge1xyXG4gICAgICAgIGNvbG9yOiAjZmZmZmZmO1xyXG4gICAgICAgIHBhZGRpbmc6IDEwcHggMjVweCAhaW1wb3J0YW50O1xyXG4gICAgICAgIG1hcmdpbjogMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgZm9udC1zaXplOiAxLjFyZW0gIWltcG9ydGFudDtcclxuICAgICAgICBmb250LWZhbWlseTogQWdlbmRhLVJlZ3VsYXI7XHJcbiAgICAgICAgLy9saW5lLWhlaWdodDogMjRweDs7XHJcbiAgICAgIH1cclxuICAgICAgLmFwcF9iZzEge1xyXG4gICAgICAgIC0tYmFja2dyb3VuZDogdXJsKC8uLi9hc3NldHMvaW1ncy9yZWdpc3Rlcl9iZy5qcGcpIG5vLXJlcGVhdCBjZW50ZXIgY2VudGVyIC8gY292ZXI7XHJcbiAgICB9XHJcbiAgICAudGV4dF9jb2xvcl9iYXNlIHtcclxuICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXNlY29uZGFyeSkgIWltcG9ydGFudDtcclxuICAgIH1cclxuICAgIC53aGl0ZV9jb250YWluZXJfYm9yZGVyX3JhZGl1cyB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjcpICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTVweCAhaW1wb3J0YW50O1xyXG4gICAgICAgIG1hcmdpbjogMTVweDtcclxuICAgICAgICBwYWRkaW5nOiAxNXB4O1xyXG4gICAgfVxyXG4gICAgLmxhYmVsLW1hcmdpbntcclxuICAgICAgICBtYXJnaW4tdG9wOiAxMnB4O1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDlweDtcclxuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXNlY29uZGFyeSkgIWltcG9ydGFudDtcclxuICAgIH1cclxuXHJcbiAgICAuaWNvbm1hbmFnZXtcclxuICAgICAgICBtYXJnaW46IDAlO1xyXG4gICAgfVxyXG4gICAgLm1hcmdpblNwYW57XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMnB4O1xyXG4gICAgfVxyXG4gICAgLmJ0bl9jZW50ZXIge1xyXG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xyXG4gICAgICAgIC0tYmFja2dyb3VuZDogIzAwMmQzZCAhaW1wb3J0YW50O1xyXG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICBtYXJnaW4tdG9wOiAxNXB4O1xyXG4gICAgICAgIC0tYm9yZGVyLXJhZGl1czogMTBweCAhaW1wb3J0YW50O1xyXG4gICAgICAgIG1pbi13aWR0aDogMjAwcHg7XHJcbiAgICAgICAgLy8gbWFyZ2luLWxlZnQ6IC0zMXB4O1xyXG4gICAgICAgIC8vZm9udC1zaXplOiAxLjdyZW07XHJcbiAgICAgICAgbWluLWhlaWdodDogNDVweDtcclxuICAgICAgICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiBBZ2VuZGEtUmVndWxhciAhaW1wb3J0YW50O1xyXG4gICAgICB9XHJcbiAgICAgIC5tYXJnaW50b3B7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMjBweFxyXG4gICAgICB9XHJcbiAgICAgIC5sYWJsZW1hbmFnZXtcclxuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcclxuICAgICAgfVxyXG5cclxuLy8gfVxyXG5cclxuIiwiX2NlbnRlciAubGlzdC1oZWFkZXIge1xuICBtYXJnaW4tYm90dG9tOiAwcHggIWltcG9ydGFudDtcbn1cblxuLml0ZW0ge1xuICBwYWRkaW5nLWxlZnQ6IDBweDtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG59XG5cbi5pdGVtIC5pdGVtLWlucHV0Lm5nLXZhbGlkLml0ZW0taW5wdXQtaGFzLXZhbHVlOm5vdCguaW5wdXQtaGFzLWZvY3VzKTpub3QoLml0ZW0taW5wdXQtaGFzLWZvY3VzKSAuaXRlbS1pbm5lciwgLml0ZW0uaXRlbS1pbnB1dC5uZy12YWxpZC5pbnB1dC1oYXMtdmFsdWU6bm90KC5pbnB1dC1oYXMtZm9jdXMpOm5vdCguaXRlbS1pbnB1dC1oYXMtZm9jdXMpIC5pdGVtLWlubmVyIHtcbiAgYm9yZGVyLWJvdHRvbS1jb2xvcjogbm9uZSAhaW1wb3J0YW50O1xuICAtd2Via2l0LWJveC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudDtcbiAgYm94LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50O1xufVxuXG4uaXRlbS1pbm5lciB7XG4gIHBhZGRpbmctcmlnaHQ6IDBweCAhaW1wb3J0YW50O1xuICBib3JkZXItYm90dG9tOiBub25lICFpbXBvcnRhbnQ7XG59XG5cbmlvbi1pbnB1dCB7XG4gIHBhZGRpbmc6IDNweCAxNXB4O1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbn1cblxucCB7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5KSAhaW1wb3J0YW50O1xuICB3aGl0ZS1zcGFjZTogcHJlLWxpbmU7XG4gIGZvbnQtZmFtaWx5OiBhZ2VuZGEtc2VtaWJvbGQ7XG59XG5cbi5kYXRlX3RpbGUge1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5KSAhaW1wb3J0YW50O1xuICBjb2xvcjogd2hpdGUgIWltcG9ydGFudDtcbiAgbWluLWhlaWdodDogMHB4O1xufVxuXG5zZWN0aW9uIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuc2VjdGlvbiBwIHtcbiAgbWFyZ2luLWJvdHRvbTogMjVweDtcbiAgcGFkZGluZzogMHB4IDEwcHg7XG4gIGZvbnQtc2l6ZTogMS41IHJlbTtcbn1cblxuLml0ZW0gLmNoZWNrYm94IHtcbiAgbWFyZ2luOiAwcHggMTBweCAwcHggMHB4ICFpbXBvcnRhbnQ7XG59XG5cbi5jaGVja2JveC1pY29uIHtcbiAgYm9yZGVyLWNvbG9yOiB2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5KSAhaW1wb3J0YW50O1xuICBib3JkZXItcmFkaXVzOiA1cHggIWltcG9ydGFudDtcbn1cblxuLmNoZWNrYm94LWNoZWNrZWQge1xuICBib3JkZXItY29sb3I6IHZhcigtLWlvbi1jb2xvci1zZWNvbmRhcnkpICFpbXBvcnRhbnQ7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWlvbi1jb2xvci1zZWNvbmRhcnkpICFpbXBvcnRhbnQ7XG59XG5cbi5jaGVja2JveC1pbm5lciB7XG4gIGJvcmRlci1jb2xvcjogd2hpdGUgIWltcG9ydGFudDtcbn1cblxuLnNlbGVjdC10ZXh0IHtcbiAgcGFkZGluZzogM3B4IDE1cHg7XG59XG5cbi5zZWxlY3QtaWNvbiB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbi5kYXRlX3RpbGUgLmxhYmVsIHtcbiAgY29sb3I6ICNlZWUgIWltcG9ydGFudDtcbiAgZm9udC1zaXplOiAxLjhyZW07XG4gIG1hcmdpbjogMHB4O1xuICBsaW5lLWhlaWdodDogMjRweDtcbn1cblxuLmRhdGV0aW1lIHtcbiAgYm9yZGVyOiAxcHggc29saWQgI2VlZTtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIGZvbnQtc2l6ZTogMS40cmVtO1xufVxuXG5pb24taWNvbiB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgZm9udC1zaXplOiAycmVtO1xuICBwYWRkaW5nOiAxMnB4IDlweDtcbn1cblxuLmZpbGVJbnB1dCB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi50ZXh0LWlucHV0W2Rpc2FibGVkXSB7XG4gIG9wYWNpdHk6IDE7XG59XG5cbi5jb2wge1xuICBhbGlnbi1pdGVtczogY2VudGVyICFpbXBvcnRhbnQ7XG59XG5cbi5yb3dfZmlsZSB7XG4gIGhlaWdodDogNDBweCAhaW1wb3J0YW50O1xufVxuXG4ubWFuZGF0b3J5VGV4dCB7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5KTtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICBtYXJnaW4tdG9wOiAxMHB4O1xuICBsaW5lLWhlaWdodDogMjRweDtcbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAzNzRweCkge1xuICAuZGF0ZV90aWxlIC5sYWJlbCB7XG4gICAgZm9udC1zaXplOiAxLjRyZW0gIWltcG9ydGFudDtcbiAgfVxufVxuLml0ZW0tcmFkaW8gLmJ1dHRvbi1lZmZlY3Qge1xuICB0cmFuc2Zvcm06IG5vbmUgIWltcG9ydGFudDtcbiAgdHJhbnNpdGlvbjogMG1zICFpbXBvcnRhbnQ7XG59XG5cbi5saXN0LWhlYWRlciB7XG4gIGJvcmRlcjogMHB4O1xufVxuXG4uZGlzYWJsZWQtZHJvcGRvd24gLmxhYmVsIHtcbiAgb3BhY2l0eTogMTtcbn1cblxuLmRpc2FibGVkLWRyb3Bkb3duIC5zZWxlY3Qge1xuICBvcGFjaXR5OiAxO1xuICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xufVxuXG4ucm93X2ZpbGUgLmNvbDpsYXN0LWNoaWxkIHtcbiAgcGFkZGluZzogMHB4O1xufVxuXG4uc3ViX3RpdGxlIHtcbiAgbWFyZ2luLXRvcDogM3B4ICFpbXBvcnRhbnQ7XG59XG5cbi5yb3dfZmlsZSAuZmlsZUlucHV0IHtcbiAgcGFkZGluZzogMHB4IDE1cHg7XG59XG5cbi5yb3dfZmlsZSAuaW9uLWlucHV0IHtcbiAgbWFyZ2luOiAxMXB4IDBweDtcbn1cblxuLmxpc3QtaW9zID4gLml0ZW0tYmxvY2s6bGFzdC1jaGlsZCwgLmxpc3QtaW9zID4gLml0ZW0td3JhcHBlcjpsYXN0LWNoaWxkIC5pdGVtLWJsb2NrIHtcbiAgYm9yZGVyLWJvdHRvbTogbm9uZSAhaW1wb3J0YW50O1xufVxuXG4ubGlzdC1pb3MsIC5saXN0LWlvcyAubGFiZWwge1xuICBtYXJnaW46IDBweCAhaW1wb3J0YW50O1xufVxuXG4ubGlzdC1oZWFkZXItaW9zIHtcbiAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XG59XG5cbi5kYXRldGltZS10ZXh0IHtcbiAgcGFkZGluZy1sZWZ0OiAxNXB4O1xufVxuXG4ucm93X2ZpbGUgLmNvbCB7XG4gIHBhZGRpbmctbGVmdDogMHB4ICFpbXBvcnRhbnQ7XG59XG5cbi50ZXJtcyB7XG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xuICB3aGl0ZS1zcGFjZTogdW5zZXQgIWltcG9ydGFudDtcbiAgdGV4dC10cmFuc2Zvcm06IGxvd2VyY2FzZTtcbn1cblxuLnRlcm1zX2NvbmRpdGlvbnMge1xuICBtYXJnaW4tdG9wOiAtMjBweDtcbn1cblxuLnRlcm1zX2NvbmRpdGlvbnMgc3BhbiB7XG4gIGZvbnQtc2l6ZTogMS40cmVtICFpbXBvcnRhbnQ7XG59XG5cbi5kaXNjbGFpbWVySXRlbSB7XG4gIG1hcmdpbi10b3A6IC00MHB4O1xufVxuXG4uc2Nyb2xsRGl2RGlzY2xhaW1lciB7XG4gIGhlaWdodDogMTUwcHg7XG4gIG92ZXJmbG93LXk6IHNjcm9sbDtcbiAgYm9yZGVyOiAxcHggc29saWQgI2VlZTtcbiAgcGFkZGluZzogM3B4IDE1cHg7XG4gIGJhY2tncm91bmQ6ICNmZmZmZmY7XG4gIGZvbnQtc2l6ZTogMXJlbTtcbn1cblxuLm1hcmdpbl9ib3R0b20ge1xuICBtYXJnaW4tYm90dG9tOiAxMCU7XG59XG5cbi5mYWlsIHtcbiAgdGV4dC1hbGlnbjogc3RhcnQgIWltcG9ydGFudDtcbiAgY29sb3I6ICNmMDAgIWltcG9ydGFudDtcbn1cblxuLnBhZGRpbmdfMDE1IHtcbiAgcGFkZGluZzogMHB4IDE1cHg7XG59XG5cbi5kaXNjbGFpbWVydGl0bGUge1xuICBmb250LXNpemU6IDFyZW0gIWltcG9ydGFudDtcbiAgY29sb3I6ICMwMDJkM2QgIWltcG9ydGFudDtcbiAgbWFyZ2luLXRvcDogMTBweCAhaW1wb3J0YW50O1xufVxuXG4uY2FudmFzcm93IHtcbiAgbWFyZ2luLXRvcDogNXB4O1xufVxuXG4uY2FwdGNoYSBpb24tbGFiZWwge1xuICBtYXJnaW4tcmlnaHQ6IDBweCAhaW1wb3J0YW50O1xufVxuXG4ucmVmcmVzaGljb25zaXplIHtcbiAgZm9udC1zaXplOiAwLjg1ZW0gIWltcG9ydGFudDtcbn1cblxuLmNhbnZhc19iYWNrZ3JvdW5kIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5KTtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4uY2FudmFzX2JhY2tncm91bmQxIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5KTtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LXNpemU6IDM2cHg7XG59XG5cbi5zdWJoZWFkZXJfYmcge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5KTtcbiAgZm9udC1mYW1pbHk6IEFnZW5kYS1SZWd1bGFyO1xuICBmb250LXNpemU6IDEuOHJlbTtcbiAgY29sb3I6IC0taW9uLWNvbG9yLXdoaXRlICFpbXBvcnRhbnQ7XG59XG5cbi5zdWJfdGl0bGUge1xuICBwYWRkaW5nOiAwcHggIWltcG9ydGFudDtcbn1cblxuLnN1Yi1oZWFkZXIge1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgcGFkZGluZzogMTBweCAyNXB4ICFpbXBvcnRhbnQ7XG4gIG1hcmdpbjogMHB4ICFpbXBvcnRhbnQ7XG4gIGZvbnQtc2l6ZTogMS4xcmVtICFpbXBvcnRhbnQ7XG4gIGZvbnQtZmFtaWx5OiBBZ2VuZGEtUmVndWxhcjtcbn1cblxuLmFwcF9iZzEge1xuICAtLWJhY2tncm91bmQ6IHVybCgvLi4vYXNzZXRzL2ltZ3MvcmVnaXN0ZXJfYmcuanBnKSBuby1yZXBlYXQgY2VudGVyIGNlbnRlciAvIGNvdmVyO1xufVxuXG4udGV4dF9jb2xvcl9iYXNlIHtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1zZWNvbmRhcnkpICFpbXBvcnRhbnQ7XG59XG5cbi53aGl0ZV9jb250YWluZXJfYm9yZGVyX3JhZGl1cyB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC43KSAhaW1wb3J0YW50O1xuICBib3JkZXItcmFkaXVzOiAxNXB4ICFpbXBvcnRhbnQ7XG4gIG1hcmdpbjogMTVweDtcbiAgcGFkZGluZzogMTVweDtcbn1cblxuLmxhYmVsLW1hcmdpbiB7XG4gIG1hcmdpbi10b3A6IDEycHg7XG4gIG1hcmdpbi1ib3R0b206IDlweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5KSAhaW1wb3J0YW50O1xufVxuXG4uaWNvbm1hbmFnZSB7XG4gIG1hcmdpbjogMCU7XG59XG5cbi5tYXJnaW5TcGFuIHtcbiAgbWFyZ2luLXRvcDogMnB4O1xufVxuXG4uYnRuX2NlbnRlciB7XG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xuICAtLWJhY2tncm91bmQ6ICMwMDJkM2QgIWltcG9ydGFudDtcbiAgY29sb3I6IHdoaXRlO1xuICBtYXJnaW4tdG9wOiAxNXB4O1xuICAtLWJvcmRlci1yYWRpdXM6IDEwcHggIWltcG9ydGFudDtcbiAgbWluLXdpZHRoOiAyMDBweDtcbiAgbWluLWhlaWdodDogNDVweDtcbiAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcbiAgZm9udC1mYW1pbHk6IEFnZW5kYS1SZWd1bGFyICFpbXBvcnRhbnQ7XG59XG5cbi5tYXJnaW50b3Age1xuICBtYXJnaW4tdG9wOiAyMHB4O1xufVxuXG4ubGFibGVtYW5hZ2Uge1xuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbn0iXSwic291cmNlUm9vdCI6IiJ9 */"]
});

/***/ })

}]);
//# sourceMappingURL=src_app_pages_claim-submission_claim-submission_module_ts.js.map