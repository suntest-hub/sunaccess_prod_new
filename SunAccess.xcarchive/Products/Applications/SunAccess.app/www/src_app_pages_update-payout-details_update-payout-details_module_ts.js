"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_update-payout-details_update-payout-details_module_ts"],{

/***/ 71278:
/*!*************************************************************************************!*\
  !*** ./src/app/pages/update-payout-details/update-payout-details-routing.module.ts ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UpdatePayoutDetailsPageRoutingModule": () => (/* binding */ UpdatePayoutDetailsPageRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _update_payout_details_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./update-payout-details.page */ 95071);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);




const routes = [{
  path: '',
  component: _update_payout_details_page__WEBPACK_IMPORTED_MODULE_0__.UpdatePayoutDetailsPage
}];
class UpdatePayoutDetailsPageRoutingModule {}
UpdatePayoutDetailsPageRoutingModule.ɵfac = function UpdatePayoutDetailsPageRoutingModule_Factory(t) {
  return new (t || UpdatePayoutDetailsPageRoutingModule)();
};
UpdatePayoutDetailsPageRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
  type: UpdatePayoutDetailsPageRoutingModule
});
UpdatePayoutDetailsPageRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](UpdatePayoutDetailsPageRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
})();

/***/ }),

/***/ 37198:
/*!*****************************************************************************!*\
  !*** ./src/app/pages/update-payout-details/update-payout-details.module.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UpdatePayoutDetailsPageModule": () => (/* binding */ UpdatePayoutDetailsPageModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _update_payout_details_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./update-payout-details-routing.module */ 71278);
/* harmony import */ var _update_payout_details_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./update-payout-details.page */ 95071);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ 38699);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);







class UpdatePayoutDetailsPageModule {}
UpdatePayoutDetailsPageModule.ɵfac = function UpdatePayoutDetailsPageModule_Factory(t) {
  return new (t || UpdatePayoutDetailsPageModule)();
};
UpdatePayoutDetailsPageModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
  type: UpdatePayoutDetailsPageModule
});
UpdatePayoutDetailsPageModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__.TranslateModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.ReactiveFormsModule, _update_payout_details_routing_module__WEBPACK_IMPORTED_MODULE_0__.UpdatePayoutDetailsPageRoutingModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](UpdatePayoutDetailsPageModule, {
    declarations: [_update_payout_details_page__WEBPACK_IMPORTED_MODULE_1__.UpdatePayoutDetailsPage],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__.TranslateModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.ReactiveFormsModule, _update_payout_details_routing_module__WEBPACK_IMPORTED_MODULE_0__.UpdatePayoutDetailsPageRoutingModule]
  });
})();

/***/ }),

/***/ 95071:
/*!***************************************************************************!*\
  !*** ./src/app/pages/update-payout-details/update-payout-details.page.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UpdatePayoutDetailsPage": () => (/* binding */ UpdatePayoutDetailsPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var http_status_codes__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! http-status-codes */ 92788);
/* harmony import */ var _success_popup_success_popup_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../success-popup/success-popup.page */ 75024);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _awesome_cordova_plugins_document_picker_ngx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @awesome-cordova-plugins/document-picker/ngx */ 46992);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _awesome_cordova_plugins_camera_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @awesome-cordova-plugins/camera/ngx */ 82543);
/* harmony import */ var _ionic_native_base64_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/base64/ngx */ 89604);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/platform-browser */ 34497);
/* harmony import */ var _awesome_cordova_plugins_device_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @awesome-cordova-plugins/device/ngx */ 74701);
/* harmony import */ var _ionic_native_file_path_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/file-path/ngx */ 74375);
/* harmony import */ var _ionic_native_file_chooser_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/file-chooser/ngx */ 86786);
/* harmony import */ var _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic-native/file/ngx */ 12358);
/* harmony import */ var src_providers_utils_utils_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/providers/utils/utils.service */ 30423);
/* harmony import */ var src_providers_logger_service_logger_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/providers/logger-service/logger-service */ 9999);
/* harmony import */ var _plan_listing_getPolicyListService__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../plan-listing/getPolicyListService */ 78785);
/* harmony import */ var _updatePayoutDetailsService__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./updatePayoutDetailsService */ 50441);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @ngx-translate/core */ 38699);
/* harmony import */ var src_providers_utils_config__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/providers/utils/config */ 43485);
/* harmony import */ var _awesome_cordova_plugins_chooser_ngx__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @awesome-cordova-plugins/chooser/ngx */ 82576);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/common */ 94666);
























function UpdatePayoutDetailsPage_section_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "section", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](1, "ion-spinner", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }
}
function UpdatePayoutDetailsPage_section_9_ion_button_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "ion-button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function UpdatePayoutDetailsPage_section_9_ion_button_3_Template_ion_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r5);
      const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r4.getPolicyList());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](2, 1, "generic_msgs.try_again"));
  }
}
function UpdatePayoutDetailsPage_section_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "section", 11)(1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](3, UpdatePayoutDetailsPage_section_9_ion_button_3_Template, 3, 3, "ion-button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate"](ctx_r1.errorMsg);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx_r1.canTryAgain);
  }
}
function UpdatePayoutDetailsPage_div_10_div_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div")(1, "span", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](3, 1, "update_payout_details.err_accountholdernameReq"));
  }
}
function UpdatePayoutDetailsPage_div_10_div_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div")(1, "span", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](3, 1, "update_payout_details.err_accountholdernameLengthReq"));
  }
}
function UpdatePayoutDetailsPage_div_10_div_20_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div")(1, "span", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](3, 1, "update_payout_details.err_account_holder_icReq"));
  }
}
function UpdatePayoutDetailsPage_div_10_ion_select_option_29_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "ion-select-option", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const bankList_r13 = ctx.$implicit;
    const i_r14 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("value", bankList_r13.code)("selected", i_r14 === 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate"](bankList_r13.name);
  }
}
function UpdatePayoutDetailsPage_div_10_div_38_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div")(1, "span", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](3, 1, "update_payout_details.err_bankAccountNumberReq"));
  }
}
function UpdatePayoutDetailsPage_div_10_div_59_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div")(1, "span", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](3, 1, "update_payout_details.err_selectPlan"));
  }
}
function UpdatePayoutDetailsPage_div_10_div_60_ion_row_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "ion-row")(1, "ion-col", 40)(2, "ion-label", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](4, "ion-col", 40)(5, "ion-label", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](7, "ion-col", 44)(8, "ion-checkbox", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("ionChange", function UpdatePayoutDetailsPage_div_10_div_60_ion_row_11_Template_ion_checkbox_ionChange_8_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r18);
      const policy_r16 = restoredCtx.$implicit;
      const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r17.onChange(policy_r16.policyNumber, $event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const policy_r16 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate"](policy_r16.policyNumber);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate"](policy_r16.planName);
  }
}
function UpdatePayoutDetailsPage_div_10_div_60_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div", 39)(1, "ion-row")(2, "ion-col", 40)(3, "ion-label", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](6, "ion-col", 40)(7, "ion-label", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](9, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](10, "ion-col", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](11, UpdatePayoutDetailsPage_div_10_div_60_ion_row_11_Template, 9, 2, "ion-row", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](5, 3, "update_payout_details.policyNumber"));
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](9, 5, "update_payout_details.planName"));
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngForOf", ctx_r12.policyList);
  }
}
const _c0 = function () {
  return {
    "cssClass": "mycomponent-wider-popover"
  };
};
function UpdatePayoutDetailsPage_div_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div", 14)(1, "form", 15)(2, "p", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](5, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](6, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](7, "ion-item", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](8, "ion-input", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](9, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](10, UpdatePayoutDetailsPage_div_10_div_10_Template, 4, 3, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](11, UpdatePayoutDetailsPage_div_10_div_11_Template, 4, 3, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](12, "p", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](14, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](15, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](16, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](17, "ion-item", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](18, "ion-input", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](19, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](20, UpdatePayoutDetailsPage_div_10_div_20_Template, 4, 3, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](21, "p", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](23, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](24, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](25, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](26, "div", 18)(27, "ion-select", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("ionChange", function UpdatePayoutDetailsPage_div_10_Template_ion_select_ionChange_27_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r20);
      const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r19.resetAccountNumberAndValidation($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](28, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](29, UpdatePayoutDetailsPage_div_10_ion_select_option_29_Template, 2, 3, "ion-select-option", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](30, "p", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](31);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](32, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](33, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](34, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](35, "ion-item", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](36, "ion-input", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](37, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](38, UpdatePayoutDetailsPage_div_10_div_38_Template, 4, 3, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](39, "p", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](40, "Upload documents");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](41, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](42, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](43, "div", 25)(44, "div", 26)(45, "ion-col", 27)(46, "ion-item", 18)(47, "ion-input", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function UpdatePayoutDetailsPage_div_10_Template_ion_input_click_47_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r20);
      const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r21.chooseCameraOptions("nricUpload"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](48, "ion-icon", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function UpdatePayoutDetailsPage_div_10_Template_ion_icon_click_48_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r20);
      const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r22.chooseCameraOptions("nricUpload"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](49, "div", 30)(50, "ion-col", 27)(51, "ion-item", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](52, "ion-input", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](53, "ion-icon", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function UpdatePayoutDetailsPage_div_10_Template_ion_icon_click_53_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r20);
      const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r23.chooseCameraOptions("passbookUpload"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](54, "ion-label", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](55);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](56, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](57, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](58, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](59, UpdatePayoutDetailsPage_div_10_div_59_Template, 4, 3, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](60, UpdatePayoutDetailsPage_div_10_div_60_Template, 12, 7, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](61, "ion-row", 34)(62, "ion-col")(63, "ion-button", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function UpdatePayoutDetailsPage_div_10_Template_ion_button_click_63_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r20);
      const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r24.updatePayoutDetails());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](64);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](65, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](66, "ion-label", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](67);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](68, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](69, "ul", 36)(70, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](71);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](72, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](73, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](74);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](75, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](76, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](77);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](78, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](79, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](80);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](81, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("formGroup", ctx_r2.updatePayoutDetailForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](4, 26, "update_payout_details.accountholdername"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](9, 28, "update_payout_details.accountholdername"));
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx_r2.updatePayoutDetailForm.get("accountHolder").hasError("required") && ctx_r2.updatePayoutDetailForm.get("accountHolder").touched);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx_r2.updatePayoutDetailForm.get("accountHolder").hasError("minlength") && ctx_r2.updatePayoutDetailForm.get("accountHolder").touched);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](14, 30, "update_payout_details.account_holder_ic"));
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](19, 32, "update_payout_details.account_holder_ic"));
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx_r2.updatePayoutDetailForm.get("accountHolderIc").hasError("required") && ctx_r2.updatePayoutDetailForm.get("accountHolderIc").touched);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](23, 34, "update_payout_details.bankbranch"));
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](28, 36, "update_card_details.selectBank"));
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("interfaceOptions", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpureFunction0"](56, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngForOf", ctx_r2.BanksBranch);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](32, 38, "update_payout_details.bankAccountNumber"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](37, 40, "update_payout_details.bankAccountNumber"));
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngModel", ctx_r2.bankAccountNumberVal);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx_r2.updatePayoutDetailForm.get("bankAccountNumber").hasError("required") && ctx_r2.updatePayoutDetailForm.get("bankAccountNumber").touched);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](56, 42, "update_payout_details.selectPlan"));
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx_r2.updatePayoutDetailForm.get("policyNumber").length <= 0 && ctx_r2.updatePayoutDetailForm.valid);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx_r2.policyList.length > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("disabled", !(ctx_r2.updatePayoutDetailForm.valid && !ctx_r2.updatePayoutDetailForm.get("policyNumber").length <= 0));
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](65, 44, "update_payout_details.update"));
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](68, 46, "update_payout_details.importantNote_txt_title"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](72, 48, "update_payout_details.importantNote_txt_line1"));
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](75, 50, "update_payout_details.importantNote_txt_line2"));
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](78, 52, "update_payout_details.importantNote_txt_line3"));
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](81, 54, "update_payout_details.importantNote_txt_line4"));
  }
}
class UpdatePayoutDetailsPage {
  constructor(docPicker, actionSheetCtrl, camera, base64, _DomSanitizer, device, filePath, fileChooser, file, utils, logger, policyListSrvc, putPayoutDetails, modalController, alertCtrl, translate, config, chooser, fb, router) {
    this.docPicker = docPicker;
    this.actionSheetCtrl = actionSheetCtrl;
    this.camera = camera;
    this.base64 = base64;
    this._DomSanitizer = _DomSanitizer;
    this.device = device;
    this.filePath = filePath;
    this.fileChooser = fileChooser;
    this.file = file;
    this.utils = utils;
    this.logger = logger;
    this.policyListSrvc = policyListSrvc;
    this.putPayoutDetails = putPayoutDetails;
    this.modalController = modalController;
    this.alertCtrl = alertCtrl;
    this.translate = translate;
    this.config = config;
    this.chooser = chooser;
    this.fb = fb;
    this.router = router;
    this.isShowingLoader = false;
    this.canTryAgain = false;
    this.isSuccessful = false;
    this.today = Date.now();
    this.BanksBranch = [];
    this.policyList = [];
    this.mimeTypes = {
      jpg: 'image/jpeg',
      jpeg: 'image/jpeg',
      png: 'image/png',
      pdf: 'application/pdf',
      zip: 'application/zip'
    };
    this.chooseCameraOptions = function (controlName) {
      this.crntCntrlName = controlName;
      var title = this.translate.instant('claim_submission.select_any_file');
      var open_cam = this.translate.instant('claim_submission.open_camera');
      var open_gallery = this.translate.instant('claim_submission.open_gallery');
      var select_pdf = this.translate.instant('claim_submission.select_pdf');
      var cancel = this.translate.instant('claim_submission.cancel');
      // this.fileIndex = i;
      //this.selectedFormName = formName;
      let modalSelectionButtons;
      if (this.utils.getPlatform() == 'ios') {
        var osVersion = parseInt(this.device.version);
        if (osVersion < 11) {
          modalSelectionButtons = [{
            text: open_cam,
            handler: () => {
              //this.openCameraGallery(this.camera.PictureSourceType.CAMERA, 0,controlName);
              this.openCamera_ios(this.camera.PictureSourceType.CAMERA, 0, 'camera', controlName);
            }
          }, {
            text: open_gallery,
            handler: () => {
              //  this.openCameraGallery(this.camera.PictureSourceType.PHOTOLIBRARY, 2,controlName);
              this.openCamera_ios(this.camera.PictureSourceType.PHOTOLIBRARY, 0, 'gallary', controlName);
            }
          }, {
            text: cancel,
            role: 'cancel',
            handler: () => {
              this.updatePayoutDetailForm.controls[this.crntCntrlName].controls['name'].markAsTouched();
            }
          }];
        } else {
          modalSelectionButtons = [{
            text: open_cam,
            handler: () => {
              // this.openCameraGallery(this.camera.PictureSourceType.CAMERA, 0,controlName);
              this.openCamera_ios(this.camera.PictureSourceType.CAMERA, 0, 'camera', controlName);
            }
          }, {
            text: open_gallery,
            handler: () => {
              this.openCamera_ios(this.camera.PictureSourceType.PHOTOLIBRARY, 0, 'gallary', controlName);
              // this.openCameraGallery(this.camera.PictureSourceType.PHOTOLIBRARY, 0,controlName);
            }
          }, {
            text: select_pdf,
            handler: () => {
              this.openCameraGallery_ios(controlName);
            }
          }, {
            text: cancel,
            role: 'cancel',
            handler: () => {
              this.updatePayoutDetailForm.controls[this.crntCntrlName].controls['name'].markAsTouched();
            }
          }];
        }
      } else {
        modalSelectionButtons = [{
          text: open_cam,
          handler: () => {
            this.openCameraGallery(this.camera.PictureSourceType.CAMERA, 0, controlName);
            //  this.openCamera_ios(this.camera.PictureSourceType.CAMERA, 0 ,'camera',controlName);
          }
        }, {
          text: open_gallery,
          handler: () => {
            // this.openFilechooser(0,controlName);
            this.openCameraGallery(this.camera.PictureSourceType.PHOTOLIBRARY, 2, controlName);
            // this.openCamera_ios(this.camera.PictureSourceType.PHOTOLIBRARY, 0, 'gallary',controlName);
          }
        }, {
          text: select_pdf,
          handler: () => {
            this.openFilechooser(1, controlName);
          }
        }, {
          text: cancel,
          role: 'cancel',
          handler: () => {
            this.updatePayoutDetailForm.controls[this.crntCntrlName].controls['name'].markAsTouched();
          }
        }];
      }
      const actionSheet = this.actionSheetCtrl.create({
        header: title,
        buttons: modalSelectionButtons
      }).then(actionSheet => actionSheet.present());
    };
    this.dummycamera = function (crntCntrlName) {
      // this.fileIndex = i;
      // this.selectedFormName = formName;
      var filedataObj = {};
      filedataObj['name'] = "Attachment.jpg";
      filedataObj['base64string'] = "AttachmentBase64";
      this.updatePayoutDetailForm.get(crntCntrlName)['controls']['name'].markAsDirty();
      this.updatePayoutDetailForm.get(crntCntrlName)['controls']['base64string'].markAsDirty();
      this.updatePayoutDetailForm.get(crntCntrlName)['controls']['name'].setValue("fileName");
      this.updatePayoutDetailForm.get(crntCntrlName)['controls']['base64string'].setValue("Base64String");
      // this[this.selectedFormName].controls.attachments.controls[this.fileIndex].controls['name'].markAsDirty();
      // this[this.selectedFormName].controls.attachments.controls[this.fileIndex].controls['base64string'].markAsDirty();
      // this[this.selectedFormName].controls.attachments.controls[this.fileIndex].controls['name'].setValue("Attachment.jpg");
      // this[this.selectedFormName].controls.attachments.controls[this.fileIndex].controls['base64string'].setValue("AttachmentBase64");
    };

    this.utils.analytics("updatePayoutDetails");
    this.config.currentPage.pageName = "UpdatePayoutDetailsPage";
    this.updatePayoutDetailForm = fb.group({
      accountHolder: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.minLength(2), _angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.maxLength(200)]],
      accountHolderIc: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.required]],
      bankBranchCode: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.required]],
      bankAccountNumber: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.required]],
      nricUpload: this.fb.group({
        name: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.required]],
        base64string: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.required]]
      }),
      passbookUpload: this.fb.group({
        name: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.required]],
        base64string: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.required]]
      }),
      policyNumber: this.fb.array([])
    });
    this.selectOptions = {
      cssClass: "selectPopover-updatePayoutDetails"
    };
  }
  ngOnInit() {
    console.log('ionViewDidLoad updatePayoutDetails');
    this.getAccountholdernameandICNumber();
  }
  onChange(policyNo, isChecked) {
    const policyFormArray = this.updatePayoutDetailForm.controls.policyNumber;
    if (isChecked.detail.checked) {
      policyFormArray.push(new _angular_forms__WEBPACK_IMPORTED_MODULE_15__.FormControl(policyNo)); //incase of checkbox select
    } else {
      let index = policyFormArray.controls.findIndex(x => x.value == policyNo);
      policyFormArray.removeAt(index); //incase of checkbox unselect
    }
  }

  openCamera_ios(source, acceptpdf, data, controlName) {
    const options = {
      destinationType: this.camera.DestinationType.DATA_URL,
      mediaType: this.camera.MediaType.PICTURE,
      encodingType: this.camera.EncodingType.JPEG,
      sourceType: source,
      correctOrientation: true
    };
    this.camera.getPicture(options).then(imageData => {
      if (data == 'camera') {
        var filename = 'sunaccesDatajpg001.jpg';
        var fileext = 'jpg';
      } else if (data == 'gallary') {
        var filename = 'sunaccesDatajpeg002.jpeg';
        var fileext = 'jpeg';
      } else {
        var filename = 'sunaccesDatapdf003.pdf';
        var fileext = 'pdf';
      }
      if (this.checkFileExt(fileext, acceptpdf)) {
        console.log('acceptpdf_ios', acceptpdf);
        console.log('fileext_ios', fileext);
        if (data == 'camera') {
          imageData = this._DomSanitizer.bypassSecurityTrustUrl("data:image/jpeg;base64," + imageData);
          console.log('CameraimageData', imageData);
          this.addAttachment(filename, imageData, controlName);
          ;
        } else if (data == 'gallary') {
          imageData = this._DomSanitizer.bypassSecurityTrustUrl("data:image/jpeg;base64," + imageData);
          console.log('GalleryimageData', imageData);
          this.addAttachment(filename, imageData, controlName);
        } else {
          imageData = this._DomSanitizer.bypassSecurityTrustUrl("data:image/jpeg;base64," + imageData);
          console.log('Pdf', imageData);
          this.addAttachment(filename, imageData, controlName);
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
     * This method is used to attach image and PDF in ANDROID ONLY
     */
  openFilechooser(acceptpdf, controlName) {
    if (acceptpdf == 1) {
      this.chooser.getFile().then(file => {
        let fileext = file.name.split('.').pop().toLowerCase();
        if (fileext == 'pdf') {
          this.checkBase64SizeWithPdf(file, file.name, controlName);
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
          let url = res['nativeURL'];
          this.filePath.resolveNativePath(url).then(FilepathUrl => {
            if (FilepathUrl.indexOf('file://') === -1) {
              FilepathUrl = "file://" + FilepathUrl;
            }
            FilepathUrl = FilepathUrl.split("?")[0];
            var filename = FilepathUrl.split('/').pop();
            var fileext = FilepathUrl.split('.').pop().toLowerCase();
            if (fileext == 'png' || fileext == 'jpeg' || fileext == 'jpg') {
              this.getBase64StringFromFilePath(FilepathUrl, filename, controlName);
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
  checkBase64SizeWithPdf(base64File, filename, controlName) {
    this.utils.showProgressLoader();
    let fileext = filename.split('.').pop().toLowerCase();
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
        this.addAttachment(filename, sanitizeBase64, controlName);
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
            this.addAttachment(filename, santizedBase64String, controlName);
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
  checkBase64Size(base64File, filename, controlName) {
    this.utils.showProgressLoader();
    let fileext = filename.split('.').pop().toLowerCase();
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
        this.addAttachment(filename, sanitizeBase64, controlName);
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
            this.addAttachment(filename, santizedBase64String, controlName);
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
  /**
   * This method is used to get base64 string from file url
   */
  getBase64StringFromFilePath(filePath, filename, controlName) {
    this.base64.encodeFile(filePath).then(base64File => {
      this.checkBase64Size(base64File, filename, controlName);
    }, err => {
      this.utils.dissmisProgressLoader();
      var msg = this.translate.instant('claim_submission.err_bas64');
      this.utils.showAlert("", msg);
    });
  }
  openCameraGallery(source, acceptpdf, controlName) {
    const options = {
      destinationType: this.camera.DestinationType.FILE_URI,
      mediaType: this.camera.MediaType.PICTURE,
      encodingType: this.camera.EncodingType.JPEG,
      sourceType: source,
      correctOrientation: true
    };
    this.camera.getPicture(options).then(imageData => {
      if (this.utils.getPlatform() == 'ios') {
        imageData = window.Ionic.normalizeURL(imageData);
        //imageData =imageData.replace("file://","http://localhost:8080");
      }
      //if source ==1 camera has been selected , source =0 gallery has been selected
      // var filename = imageData.split('/').pop();
      // var fileext = imageData.split('.').pop().toLowerCase();
      console.log('imageData', imageData);
      var filenamewihtExt = imageData.split('/').pop();
      var filename = filenamewihtExt.split('?')[0];
      console.log('filename', filename);
      var fileext = imageData.split('.').pop().toLowerCase();
      console.log('fileext', fileext);
      fileext = fileext.split('?')[0];
      console.log('fileext-after?', fileext);
      if (this.checkFileExt(fileext, acceptpdf)) {
        // this.getBase64StringFromFilePath(imageData, filename,controlName);
        if (acceptpdf == 2) {
          console.log('GalleryimageData', imageData);
          this.getBase64StringFromFilePath(imageData, filename, controlName);
        } else {
          console.log('CameraimageData', imageData);
          this.getBase64StringFromFilePath(imageData, filename, controlName);
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
  openCameraGallery_ios(controlName) {
    this.docPicker.getFile('all').then(uri => {
      if (this.utils.getPlatform() == 'ios') {
        uri = window.Ionic.normalizeURL(uri);
        //uri = uri.replace("file://","http://localhost:8080");
      }

      var filename = uri.split('/').pop();
      var fileext = uri.split('.').pop().toLowerCase();
      if (fileext == 'pdf') {
        this.getBase64StringFromFilePath(uri, filename, controlName);
      } else {
        var msg = this.translate.instant('claim_submission.select_only_pdf');
        this.utils.showAlert('', msg, false);
      }
    }).catch(err => {
      let errMsg = this.translate.instant('claim_submission.err_pdf');
      this.utils.showAlert('', errMsg, false);
    });
  }
  addAttachment(fileName, Base64String, controlName) {
    if (this.utils.getPlatform() == 'ios') {
      fileName = fileName.split('.').pop().toLowerCase();
      fileName = new Date().getTime() + '.' + fileName;
    }
    let crntCntrlName = controlName;
    var filedataObj = {};
    filedataObj['name'] = fileName;
    filedataObj['base64string'] = Base64String;
    if (this.updatePayoutDetailForm.controls.passbookUpload['controls']['name'].value == fileName || this.updatePayoutDetailForm.controls.nricUpload['controls']['name'].value == fileName) {
      this.utils.dissmisProgressLoader();
      this.utils.showAlert("Error", "Same file is already uploaded");
    } else {
      this.updatePayoutDetailForm.get(crntCntrlName)['controls']['name'].markAsDirty();
      this.updatePayoutDetailForm.get(crntCntrlName)['controls']['base64string'].markAsDirty();
      this.updatePayoutDetailForm.get(crntCntrlName)['controls']['name'].setValue(fileName);
      this.updatePayoutDetailForm.get(crntCntrlName)['controls']['base64string'].setValue(Base64String);
      this.utils.dissmisProgressLoader();
    }
  }
  /**
     * this method for submitting update address detaisl for the policies
     */
  updatePayoutDetails() {
    if (this.updatePayoutDetailForm.valid) {
      let formData = JSON.parse(JSON.stringify(this.updatePayoutDetailForm.value));
      if (formData.bankAccountNumber.length === this.LengthVal || formData.bankAccountNumber.length === this.optionalLengthVal) {
        if (this.utils.isDeviceOnLine()) {
          this.utils.showProgressLoader();
          this.putPayoutDetails.updatePayoutData(formData).then(res => {
            try {
              this.utils.dissmisProgressLoader();
              if (res['responseJSON']) {
                if (res['responseJSON']['statusCode'] == http_status_codes__WEBPACK_IMPORTED_MODULE_16__.ACCEPTED || res['responseJSON']['statusCode'] == http_status_codes__WEBPACK_IMPORTED_MODULE_16__.OK) {
                  let successMsg = res['responseJSON']['userMessage'] || this.translate.instant('generic_msgs.server_err');
                  this.successDialog("Success", successMsg);
                } else {
                  let errorMsg = res['responseJSON']['message'] || res['responseJSON']['userMessage'] || this.translate.instant('generic_msgs.server_err');
                  this.showDialog("", errorMsg);
                }
              } else {
                let errorMsg = res['responseJSON']['message'] || res['responseJSON']['userMessage'] || this.translate.instant('generic_msgs.server_err');
                this.showDialog("", errorMsg);
              }
            } catch (e) {
              this.logger.error("loginSuccess catch eror : " + JSON.stringify(e));
              this.utils.dissmisProgressLoader();
              let errorMessage = this.translate.instant('generic_msgs.server_err');
              this.utils.showAlert("", errorMessage);
            }
          }, err => {
            let errorMessage;
            this.utils.dissmisProgressLoader();
            errorMessage = this.utils.handleServiceException(err);
            this.utils.showAlert("", errorMessage);
          });
        } else {
          this.utils.dissmisProgressLoader();
          let errorMessage = this.translate.instant('generic_msgs.network_err');
          this.utils.showAlert("", errorMessage);
        }
      } else {
        if (this.optionalLengthVal) {
          this.showPrompt("", "Please enter " + this.LengthVal + " / " + this.optionalLengthVal + " digits valid bank account number.");
        } else {
          this.showPrompt("", "Please enter " + this.LengthVal + " digits valid bank account number.");
        }
      }
    }
  }
  successDialog(title, message) {
    return (0,tslib__WEBPACK_IMPORTED_MODULE_17__.__awaiter)(this, void 0, void 0, function* () {
      const modal = yield this.modalController.create({
        component: _success_popup_success_popup_page__WEBPACK_IMPORTED_MODULE_0__.SuccessPopupPage,
        cssClass: 'success-msg',
        backdropDismiss: false,
        componentProps: {
          redirectionMsg: message,
          title: title
        }
      });
      console.log(message);
      modal.onDidDismiss().then(data => {
        console.log(data);
        if (data.data.pageName == "servicePage") {
          //this.navCtrl.push(ServicePage);
          this.router.navigate(['/services']);
        } else if (data.data.pageName == "serviceHistoryPage") {
          // this.navCtrl.push(ServiceHistoryPage);
          this.router.navigate(['service-history']);
        }
      });
      return yield modal.present();
    });
  }
  /**
  * to get the policy list
  *
  */
  getAccountholdernameandICNumber() {
    if (this.utils.isDeviceOnLine()) {
      this.isShowingLoader = true;
      this.canTryAgain = false;
      this.putPayoutDetails.getAccounHolderInfo().then(res => {
        try {
          if (res['responseJSON'] && res['responseJSON']['statusCode'] == http_status_codes__WEBPACK_IMPORTED_MODULE_16__.OK) {
            this.updatePayoutDetailForm.patchValue({
              accountHolder: res['responseJSON']['name'],
              accountHolderIc: res['responseJSON']['identityNo']
            });
            this.getPolicyList();
          } else {
            let errorMsg = res['responseJSON']['message'] || res['responseJSON']['userMessage'] || this.translate.instant('generic_msgs.server_err');
            this.showDialog("", errorMsg);
          }
        } catch (e) {
          this.isShowingLoader = false;
          this.canTryAgain = true;
          this.logger.error("getAccountholdernameandICNumber catch eror : " + JSON.stringify(e));
          this.getPolicyList();
          //this.errorMsg = this.translate.instant('generic_msgs.server_err');
        }
      }, err => {
        this.isShowingLoader = false;
        this.canTryAgain = true;
        this.getPolicyList();
        ///this.errorMsg= this.translate.instant('generic_msgs.server_err');
      });
    } else {
      this.isShowingLoader = false;
      this.canTryAgain = true;
      this.errorMsg = this.translate.instant('generic_msgs.network_err');
    }
  }
  /**
  * to get the policy list
  *
  */
  getPolicyList() {
    if (!(this.policyList.length > 0)) {
      this.isShowingLoader = true;
      if (this.utils.isDeviceOnLine()) {
        this.canTryAgain = false;
        this.policyListSrvc.getPolicyList(this.utils.getUserIdentity()).then(res => {
          try {
            if (res['responseJSON'] && res['responseJSON']['statusCode'] == http_status_codes__WEBPACK_IMPORTED_MODULE_16__.OK) {
              this.policyList = res['responseJSON']['array'];
              this.getBankStaticdata();
            } else {
              this.isShowingLoader = false;
              this.canTryAgain = true;
              this.errorMsg = res['responseJSON']['message'] || res['responseJSON']['userMessage'] || this.translate.instant('generic_msgs.server_err');
            }
          } catch (e) {
            this.isShowingLoader = false;
            this.canTryAgain = true;
            this.logger.error("loginSuccess catch eror : " + JSON.stringify(e));
            this.errorMsg = this.translate.instant('generic_msgs.server_err');
          }
        }, err => {
          this.isShowingLoader = false;
          this.canTryAgain = true;
          this.errorMsg = this.translate.instant('generic_msgs.server_err');
        });
      } else {
        this.isShowingLoader = false;
        this.canTryAgain = true;
        this.errorMsg = this.translate.instant('generic_msgs.network_err');
      }
    } else {
      this.isShowingLoader = false;
      this.canTryAgain = false;
    }
  }
  /**
   * This method is used to get list of BanksBranch
   */
  getBankStaticdata() {
    if (this.utils.isDeviceOnLine()) {
      this.isShowingLoader = true;
      this.putPayoutDetails.getStaticdata().then(res => {
        try {
          if (res['responseJSON'] && res['status'] == 200) {
            this.BanksBranch = res['responseJSON']['CardandPayoutData'].BankBranchData;
            this.isShowingLoader = false;
          } else {
            this.isShowingLoader = false;
            this.logger.error("GET BanksBranch list: " + JSON.stringify(res));
            this.errorMsg = this.translate.instant('generic_msgs.server_err');
          }
        } catch (e) {
          this.isShowingLoader = false;
          this.canTryAgain = true;
          this.logger.error("get BanksBranch catch eror : " + JSON.stringify(e));
          this.errorMsg = this.translate.instant('generic_msgs.server_err');
        }
      }, err => {
        this.isShowingLoader = false;
        this.errorMsg = this.utils.handleServiceException(err);
      });
    } else {
      this.isShowingLoader = false;
      this.canTryAgain = true;
      this.logger.error("Get BanksBranch generic_msgs.network_err");
      this.errorMsg = this.translate.instant('generic_msgs.network_err');
    }
  }
  resetAccountNumberAndValidation(bankbranchCode) {
    //let formData = this.updatePayoutDetailForm.controls;
    //formData.bankAccountNumber.value="";
    // alert(bankbranchCode);
    // alert(this.BanksBranch.length);
    this.bankAccountNumberVal = "";
    if (this.BanksBranch.length > 0) {
      for (let i = 0; i < this.BanksBranch.length; i++) {
        if (this.BanksBranch[i].code == bankbranchCode.detail.value) {
          this.LengthVal = this.BanksBranch[i].length;
          if (this.BanksBranch[i].optionalLength) {
            this.optionalLengthVal = this.BanksBranch[i].optionalLength;
          } else {
            this.optionalLengthVal = "";
          }
        }
      }
    }
  }
  /**
   *
   * @param title - this is the title of the alert
   * @param message  - message that need to display on the alert.
   */
  showDialog(title, message) {
    var ok = this.translate.instant('claim_submission.ok');
    let buttons = [{
      text: ok,
      handler: () => {
        // this.navCtrl.pop();
        //  this.router.navigate(['/claim-submission-type'],{state:{'typeOfClaims': this.typeofClaimList }});
      }
    }];
    let alert = this.alertCtrl.create({
      header: title,
      message: message,
      buttons: buttons,
      backdropDismiss: false
    }).then(alert => alert.present());
  }
  showPrompt(title, message) {
    let buttons = [{
      text: 'Ok',
      handler: () => {
        //this.navCtrl.pop();
      }
    }];
    let alert = this.alertCtrl.create({
      header: title,
      message: message,
      buttons: buttons
      // enableBackdropDismiss: false,
    }).then(alert => alert.present());
  }
}
UpdatePayoutDetailsPage.ɵfac = function UpdatePayoutDetailsPage_Factory(t) {
  return new (t || UpdatePayoutDetailsPage)(_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](_awesome_cordova_plugins_document_picker_ngx__WEBPACK_IMPORTED_MODULE_1__.DocumentPicker), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_18__.ActionSheetController), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](_awesome_cordova_plugins_camera_ngx__WEBPACK_IMPORTED_MODULE_2__.Camera), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](_ionic_native_base64_ngx__WEBPACK_IMPORTED_MODULE_3__.Base64), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_19__.DomSanitizer), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](_awesome_cordova_plugins_device_ngx__WEBPACK_IMPORTED_MODULE_4__.Device), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](_ionic_native_file_path_ngx__WEBPACK_IMPORTED_MODULE_5__.FilePath), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](_ionic_native_file_chooser_ngx__WEBPACK_IMPORTED_MODULE_6__.FileChooser), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](_ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_7__.File), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](src_providers_utils_utils_service__WEBPACK_IMPORTED_MODULE_8__.UtilService), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](src_providers_logger_service_logger_service__WEBPACK_IMPORTED_MODULE_9__.LoggerServiceProvider), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](_plan_listing_getPolicyListService__WEBPACK_IMPORTED_MODULE_10__.GetPolicyListService), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](_updatePayoutDetailsService__WEBPACK_IMPORTED_MODULE_11__.UpdatePayoutDetailsService), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_18__.ModalController), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_18__.AlertController), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_20__.TranslateService), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](src_providers_utils_config__WEBPACK_IMPORTED_MODULE_12__.ConfigProvider), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](_awesome_cordova_plugins_chooser_ngx__WEBPACK_IMPORTED_MODULE_13__.Chooser), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_15__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_21__.Router));
};
UpdatePayoutDetailsPage.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdefineComponent"]({
  type: UpdatePayoutDetailsPage,
  selectors: [["app-update-payout-details"]],
  decls: 11,
  vars: 6,
  consts: [["mode", "ios"], ["color", "primary", 1, "toolbar"], ["slot", "start"], ["text", "", "icon", "chevron-back-outline", 2, "padding-left", "15px", "font-size", "0.7rem"], [1, "bold-font"], ["no-bounce", "", 1, "app_bg2", "text_color_base", "ion-padding"], ["class", "spinnersection ion-text-center", 4, "ngIf"], ["class", "errorMsgSection", 4, "ngIf"], ["class", "white_container_border_radius ion-padding", 4, "ngIf"], [1, "spinnersection", "ion-text-center"], ["name", "lines-sharp-small", 2, "height", "98%"], [1, "errorMsgSection"], ["style", "--background:var(--ion-color-white);", 3, "click", 4, "ngIf"], [2, "--background", "var(--ion-color-white)", 3, "click"], [1, "white_container_border_radius", "ion-padding"], [3, "formGroup"], ["stacked", ""], [1, "mandatory_star"], ["lines", "none", 2, "border", "1px solid #e0e0e0", "background", "white"], ["type", "text", "formControlName", "accountHolder", 3, "placeholder"], [4, "ngIf"], ["restrict-input", "", "restrictInput", "number", "type", "tel", "formControlName", "accountHolderIc", 3, "placeholder"], ["select-option", "", "interface", "popover", "mode", "ios", "formControlName", "bankBranchCode", 3, "interfaceOptions", "placeholder", "ionChange"], [3, "value", "selected", 4, "ngFor", "ngForOf"], ["restrict-input", "", "restrictInput", "number", "type", "tel", "formControlName", "bankAccountNumber", 3, "placeholder", "ngModel"], [1, "documents-upload"], ["formGroupName", "nricUpload", 1, "upload-doc"], ["size", "12"], ["placeholder", "Upload NRIC", "disabled", "true", "formControlName", "name", "type", "text", 1, "fileInput", 3, "click"], ["name", "attach", 3, "click"], ["formGroupName", "passbookUpload", 1, "upload-doc"], ["disabled", "true", "placeholder", "Upload Passbook / Statement", "formControlName", "name", "type", "text", 1, "fileInput"], [1, "font_family"], ["style", "margin-top:10px;", 4, "ngIf"], ["text-center", "", "align-items-center", ""], [1, "btn_center", 3, "disabled", "click"], ["type", "1"], [1, "fail"], [3, "value", "selected"], [2, "margin-top", "10px"], ["size", "5"], [1, "lbl", "font_family"], ["size", "2"], [4, "ngFor", "ngForOf"], ["size", "2", "text-wrap", "", 1, "checkBox"], ["mode", "md", "value", "false", 3, "ionChange"]],
  template: function UpdatePayoutDetailsPage_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "ion-header", 0)(1, "ion-toolbar", 1)(2, "ion-buttons", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](3, "ion-back-button", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](4, "ion-title", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](6, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](7, "ion-content", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](8, UpdatePayoutDetailsPage_section_8_Template, 2, 0, "section", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](9, UpdatePayoutDetailsPage_section_9_Template, 4, 2, "section", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](10, UpdatePayoutDetailsPage_div_10_Template, 82, 57, "div", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](6, 4, "policy_servicing.update_payout_details"), " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx.isShowingLoader);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", !ctx.isShowingLoader && ctx.errorMsg);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", !ctx.isShowingLoader && !ctx.errorMsg);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_22__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_22__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_15__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_15__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_15__.NgControlStatusGroup, _ionic_angular__WEBPACK_IMPORTED_MODULE_18__.IonBackButton, _ionic_angular__WEBPACK_IMPORTED_MODULE_18__.IonButton, _ionic_angular__WEBPACK_IMPORTED_MODULE_18__.IonButtons, _ionic_angular__WEBPACK_IMPORTED_MODULE_18__.IonCheckbox, _ionic_angular__WEBPACK_IMPORTED_MODULE_18__.IonCol, _ionic_angular__WEBPACK_IMPORTED_MODULE_18__.IonContent, _ionic_angular__WEBPACK_IMPORTED_MODULE_18__.IonHeader, _ionic_angular__WEBPACK_IMPORTED_MODULE_18__.IonIcon, _ionic_angular__WEBPACK_IMPORTED_MODULE_18__.IonInput, _ionic_angular__WEBPACK_IMPORTED_MODULE_18__.IonItem, _ionic_angular__WEBPACK_IMPORTED_MODULE_18__.IonLabel, _ionic_angular__WEBPACK_IMPORTED_MODULE_18__.IonRow, _ionic_angular__WEBPACK_IMPORTED_MODULE_18__.IonSelect, _ionic_angular__WEBPACK_IMPORTED_MODULE_18__.IonSelectOption, _ionic_angular__WEBPACK_IMPORTED_MODULE_18__.IonSpinner, _ionic_angular__WEBPACK_IMPORTED_MODULE_18__.IonTitle, _ionic_angular__WEBPACK_IMPORTED_MODULE_18__.IonToolbar, _ionic_angular__WEBPACK_IMPORTED_MODULE_18__.BooleanValueAccessor, _ionic_angular__WEBPACK_IMPORTED_MODULE_18__.SelectValueAccessor, _ionic_angular__WEBPACK_IMPORTED_MODULE_18__.TextValueAccessor, _ionic_angular__WEBPACK_IMPORTED_MODULE_18__.IonBackButtonDelegate, _angular_forms__WEBPACK_IMPORTED_MODULE_15__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_15__.FormControlName, _angular_forms__WEBPACK_IMPORTED_MODULE_15__.FormGroupName, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_20__.TranslatePipe],
  styles: [".white_container_border_radius[_ngcontent-%COMP%] {\n  background-color: rgba(255, 255, 255, 0.7) !important;\n  border-radius: 15px !important;\n}\n\n.item[_ngcontent-%COMP%]   .item-input.ng-valid.item-input-has-value[_ngcontent-%COMP%]:not(.input-has-focus):not(.item-input-has-focus)   .item-inner[_ngcontent-%COMP%], .item.item-input.ng-valid.input-has-value[_ngcontent-%COMP%]:not(.input-has-focus):not(.item-input-has-focus)   .item-inner[_ngcontent-%COMP%] {\n  border-bottom-color: none !important;\n  box-shadow: none !important;\n}\n\n.item-inner[_ngcontent-%COMP%] {\n  padding-right: 0px !important;\n  border-bottom: none !important;\n}\n\n.input[_ngcontent-%COMP%] {\n  border: 1px solid #eee;\n  padding: 3px 15px;\n  background: white;\n  font-size: 1.4rem;\n}\n\n.label[_ngcontent-%COMP%] {\n  font-size: 1.7rem !important;\n  color: var(--ion-color-secondary) !important;\n  font-weight: 400;\n}\n\np[_ngcontent-%COMP%] {\n  font-size: 1.3rem;\n  margin-bottom: 2px;\n  font-family: \"Agenda-SemiBold\";\n}\n\n.italic_font[_ngcontent-%COMP%] {\n  font-style: italic;\n  margin: 7px 0px;\n}\n\n.mandatory_star[_ngcontent-%COMP%] {\n  color: #f00;\n}\n\n.padding_40[_ngcontent-%COMP%] {\n  padding: 40px;\n}\n\n@media only screen and (max-width: 374px) {\n  select[_ngcontent-%COMP%] {\n    border: 0 !important;\n    -webkit-appearance: none;\n    -moz-appearance: none;\n    background: #ffffff url('arrow-down.png') no-repeat 95% center;\n    width: 100%;\n    text-indent: 0.01px;\n    text-overflow: \"\";\n    padding: 10px;\n    font-size: 1.6rem !important;\n    color: #222;\n    position: relative;\n    height: 42px;\n  }\n}\nselect[_ngcontent-%COMP%] {\n  border: 0 !important;\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  background: #ffffff url('arrow-down.png') no-repeat 95% center;\n  width: 100%;\n  text-indent: 0.01px;\n  text-overflow: \"\";\n  padding: 10px;\n  font-size: 1.6rem !important;\n  color: #222 !important;\n  position: relative;\n  height: 42px;\n}\n\n.select-icon[_ngcontent-%COMP%] {\n  display: none;\n}\n\n.fail[_ngcontent-%COMP%] {\n  text-align: start !important;\n  color: #f00 !important;\n}\n\n.col[_ngcontent-%COMP%] {\n  padding: 0px !important;\n}\n\n\n.checkBox[_ngcontent-%COMP%] {\n  padding-top: 10px !important;\n  padding-left: 10px !important;\n  background: transparent;\n}\n\n.checkBox[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%] {\n  padding: 0;\n  font-size: 1.4rem !important;\n  padding-top: 3px;\n  margin: 0px;\n}\n\n.checkbox-icon[_ngcontent-%COMP%] {\n  border-width: 1px !important;\n}\n\n.checkbox-checked[_ngcontent-%COMP%] {\n  border-color: var(--ion-color-secondary) !important;\n  background-color: white !important;\n}\n\n.lbl[_ngcontent-%COMP%] {\n  color: #222 !important;\n}\n\n.list-header[_ngcontent-%COMP%] {\n  margin-bottom: 0px !important;\n}\n\n.item[_ngcontent-%COMP%]   .item-input.ng-valid.item-input-has-value[_ngcontent-%COMP%]:not(.input-has-focus):not(.item-input-has-focus)   .item-inner[_ngcontent-%COMP%], .item.item-input.ng-valid.input-has-value[_ngcontent-%COMP%]:not(.input-has-focus):not(.item-input-has-focus)   .item-inner[_ngcontent-%COMP%] {\n  border-bottom-color: none !important;\n  box-shadow: none !important;\n}\n\n.item-inner[_ngcontent-%COMP%] {\n  padding-right: 0px !important;\n  border-bottom: none !important;\n}\n\n.input[_ngcontent-%COMP%] {\n  border: 1px solid #eee;\n  padding: 3px 15px;\n  background: white;\n  font-size: 1.4rem;\n}\n\n.label[_ngcontent-%COMP%] {\n  font-size: 1.8rem !important;\n  color: var(--ion-color-secondary) !important;\n  white-space: pre-line;\n  font-family: agenda-semibold;\n}\n\n.date_tile[_ngcontent-%COMP%] {\n  background: var(--ion-color-secondary) !important;\n  color: white !important;\n  min-height: 0px;\n}\n\nsection[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  height: 100%;\n}\n\nsection[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin-bottom: 25px;\n  padding: 0px 10px;\n  font-size: 1.5 rem;\n}\n\n.item[_ngcontent-%COMP%]   .checkbox[_ngcontent-%COMP%] {\n  margin: 0px 10px 0px 0px !important;\n}\n\n.ion-checkbox-icon[_ngcontent-%COMP%] {\n  border-color: var(--ion-color-secondary) !important;\n  border-radius: 5px !important;\n}\n\n.ion-checkbox-checked[_ngcontent-%COMP%] {\n  border-color: var(--ion-color-secondary) !important;\n}\n\n.checkbox-inner[_ngcontent-%COMP%] {\n  border-color: white !important;\n}\n\n.select-text[_ngcontent-%COMP%] {\n  padding: 3px 15px;\n}\n\n.select-icon[_ngcontent-%COMP%] {\n  display: none;\n}\n\n.date_tile[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%] {\n  color: #eee !important;\n  font-size: 1.8rem;\n  margin: 0px;\n  line-height: 24px;\n}\n\n.datetime[_ngcontent-%COMP%] {\n  border: 1px solid #eee;\n  background: white;\n  font-size: 1.4rem;\n}\n\nion-icon[_ngcontent-%COMP%] {\n  display: inline-block;\n  font-size: 1.5rem;\n}\n\n.fileInput[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: 100%;\n}\n\n.text-input[disabled][_ngcontent-%COMP%] {\n  opacity: 1;\n}\n\n.col[_ngcontent-%COMP%] {\n  text-align: center !important;\n}\n\n.row_file[_ngcontent-%COMP%] {\n  height: 40px !important;\n}\n\n.mandatoryText[_ngcontent-%COMP%] {\n  color: var(--ion-color-secondary);\n  font-size: 13px;\n  margin-bottom: 10px;\n  margin-top: 10px;\n  line-height: 24px;\n}\n\n@media only screen and (max-width: 374px) {\n  .date_tile[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%] {\n    font-size: 1.4rem !important;\n  }\n}\n.item-radio[_ngcontent-%COMP%]   .button-effect[_ngcontent-%COMP%] {\n  transform: none !important;\n  transition: 0ms !important;\n}\n\n.list-header[_ngcontent-%COMP%] {\n  border: 0px;\n}\n\n.disabled-dropdown[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%] {\n  opacity: 1;\n}\n\n.disabled-dropdown[_ngcontent-%COMP%]   .select[_ngcontent-%COMP%] {\n  opacity: 1;\n  background: #ffffff;\n}\n\n.row_file[_ngcontent-%COMP%]   .col[_ngcontent-%COMP%]:last-child {\n  padding: 0px;\n  margin-top: 7px;\n}\n\n.sub_title[_ngcontent-%COMP%] {\n  margin-top: 3px !important;\n}\n\n.row_file[_ngcontent-%COMP%]   .fileInput[_ngcontent-%COMP%] {\n  padding: 0px 15px;\n}\n\n.row_file[_ngcontent-%COMP%]   .text-input[_ngcontent-%COMP%] {\n  margin: 11px 0px;\n}\n\n.list-ios[_ngcontent-%COMP%]    > .item-block[_ngcontent-%COMP%]:last-child, .list-ios[_ngcontent-%COMP%]    > .item-wrapper[_ngcontent-%COMP%]:last-child   .item-block[_ngcontent-%COMP%] {\n  border-bottom: none !important;\n}\n\n.list-ios[_ngcontent-%COMP%], .list-ios[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%] {\n  margin: 0px !important;\n}\n\n.list-header-ios[_ngcontent-%COMP%] {\n  text-transform: none;\n}\n\n.datetime-text[_ngcontent-%COMP%] {\n  padding-left: 15px;\n}\n\n.row_file[_ngcontent-%COMP%]   .col[_ngcontent-%COMP%] {\n  padding-left: 0px !important;\n}\n\nion-label[_ngcontent-%COMP%] {\n  margin-bottom: 8px;\n  white-space: normal;\n}\n\n.upload-doc[_ngcontent-%COMP%] {\n  align-items: center;\n  display: flex;\n  justify-content: center;\n  margin-bottom: 8px !important;\n  position: relative;\n}\n.upload-doc[_ngcontent-%COMP%]   ion-input[_ngcontent-%COMP%] {\n  display: inline-flex;\n  padding-left: 15px;\n  padding-right: 40px;\n}\n.upload-doc[_ngcontent-%COMP%]   ion-input[disabled][_ngcontent-%COMP%] {\n  opacity: 0.6;\n}\n.upload-doc[_ngcontent-%COMP%]   ion-input[_ngcontent-%COMP%]   .text-input[_ngcontent-%COMP%] {\n  margin-left: 0;\n}\n.upload-doc[_ngcontent-%COMP%]   ion-input[_ngcontent-%COMP%]   .text-input[disabled][_ngcontent-%COMP%] {\n  opacity: 1;\n}\n.upload-doc[_ngcontent-%COMP%]   .icon-container[_ngcontent-%COMP%] {\n  align-items: center;\n  cursor: pointer;\n  display: inline-flex;\n  height: 100%;\n  justify-content: center;\n  position: absolute;\n  right: 10px;\n  width: 24px;\n  z-index: 9;\n}\n\n.btn_center[_ngcontent-%COMP%] {\n  text-transform: capitalize;\n  --background: #002d3d !important;\n  color: var(--ion-color-secondary-contrast);\n  font-size: 1.4rem;\n  border-radius: 10px;\n  min-height: 34px;\n  min-width: 130px !important;\n  font-family: Agenda-Regular !important;\n}\n\n.font_family[_ngcontent-%COMP%] {\n  font-family: \"Agenda-SemiBold\";\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcGFnZXMvdXBkYXRlLXBheW91dC1kZXRhaWxzL3VwZGF0ZS1wYXlvdXQtZGV0YWlscy5wYWdlLnNjc3MiLCJ3ZWJwYWNrOi8vLi8uLi8uLi8uLi9BbGwlMjBQcm9qZWN0cy9NYWxheXNpYV9DbGllbnRBcHBfUmV2YW1wL1N1bkFjY2Vzc19Jb25pYzZfUmV2YW1wL3NyYy9hcHAvcGFnZXMvdXBkYXRlLXBheW91dC1kZXRhaWxzL3VwZGF0ZS1wYXlvdXQtZGV0YWlscy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxxREFBQTtFQUNBLDhCQUFBO0FDQ0Y7O0FETUU7O0VBRUksb0NBQUE7RUFFQSwyQkFBQTtBQ0hOOztBRE1FO0VBQ0ksNkJBQUE7RUFDQSw4QkFBQTtBQ0hOOztBRE1FO0VBQ0ksc0JBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7QUNITjs7QURNRTtFQUNJLDRCQUFBO0VBQ0EsNENBQUE7RUFDQSxnQkFBQTtBQ0hOOztBREtFO0VBQ0ksaUJBQUE7RUFDQSxrQkFBQTtFQUNBLDhCQUFBO0FDRk47O0FES0U7RUFDSSxrQkFBQTtFQUNBLGVBQUE7QUNGTjs7QURJRTtFQUNJLFdBQUE7QUNETjs7QURJRTtFQUNJLGFBQUE7QUNETjs7QURHRTtFQUVJO0lBQ0ksb0JBQUE7SUFDQSx3QkFBQTtJQUNBLHFCQUFBO0lBQ0EsOERBQUE7SUFDQSxXQUFBO0lBQ0EsbUJBQUE7SUFDQSxpQkFBQTtJQUNBLGFBQUE7SUFDQSw0QkFBQTtJQUNBLFdBQUE7SUFDQSxrQkFBQTtJQUNBLFlBQUE7RUNEUjtBQUNGO0FETUU7RUFDSSxvQkFBQTtFQUNBLHdCQUFBO0VBQ0EscUJBQUE7RUFDQSw4REFBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0EsYUFBQTtFQUNBLDRCQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7QUNKTjs7QURzQ0U7RUFDSSxhQUFBO0FDbkNOOztBRHFDRTtFQUNJLDRCQUFBO0VBQ0Esc0JBQUE7QUNsQ047O0FEb0NFO0VBQ0ksdUJBQUE7QUNqQ047O0FEbUNFOzs7R0FBQTtBQUtBO0VBQ0ksNEJBQUE7RUFDQSw2QkFBQTtFQUNBLHVCQUFBO0FDakNOOztBRG9DRTtFQUNJLFVBQUE7RUFDQSw0QkFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtBQ2pDTjs7QURvQ0U7RUFDSSw0QkFBQTtBQ2pDTjs7QURtQ0U7RUFDSSxtREFBQTtFQUNBLGtDQUFBO0FDaENOOztBRG1DRTtFQUNJLHNCQUFBO0FDaENOOztBRG1DRTtFQUNJLDZCQUFBO0FDaENOOztBRHdDRTs7RUFFSSxvQ0FBQTtFQUVBLDJCQUFBO0FDckNOOztBRHdDRTtFQUNJLDZCQUFBO0VBQ0EsOEJBQUE7QUNyQ047O0FEd0NFO0VBQ0ksc0JBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7QUNyQ047O0FEd0NFO0VBQ0ksNEJBQUE7RUFDQSw0Q0FBQTtFQUVBLHFCQUFBO0VBQ0EsNEJBQUE7QUN0Q047O0FEeUNFO0VBQ0ksaURBQUE7RUFDQSx1QkFBQTtFQUNBLGVBQUE7QUN0Q047O0FEeUNFO0VBQ0ksYUFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7QUN0Q047O0FEd0NFO0VBQ0ksbUJBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FDckNOOztBRHdDRTtFQUNJLG1DQUFBO0FDckNOOztBRHVDRTtFQUNJLG1EQUFBO0VBQ0EsNkJBQUE7QUNwQ047O0FEc0NFO0VBQ0ksbURBQUE7QUNuQ047O0FEdUNFO0VBQ0ksOEJBQUE7QUNwQ047O0FEdUNFO0VBQ0ksaUJBQUE7QUNwQ047O0FEdUNFO0VBQ0ksYUFBQTtBQ3BDTjs7QUR1Q0U7RUFDSSxzQkFBQTtFQUNBLGlCQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0FDcENOOztBRHVDRTtFQUNJLHNCQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtBQ3BDTjs7QUR1Q0U7RUFDSSxxQkFBQTtFQUNBLGlCQUFBO0FDcENOOztBRHdDRTtFQUNJLHFCQUFBO0VBQ0EsV0FBQTtBQ3JDTjs7QUR1Q0U7RUFDSSxVQUFBO0FDcENOOztBRHNDRTtFQUNJLDZCQUFBO0FDbkNOOztBRHNDRTtFQUNJLHVCQUFBO0FDbkNOOztBRHNDRTtFQUNJLGlDQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtBQ25DTjs7QURzQ0U7RUFDSTtJQUNJLDRCQUFBO0VDbkNSO0FBQ0Y7QURzQ0U7RUFDSSwwQkFBQTtFQUNBLDBCQUFBO0FDcENOOztBRHVDRTtFQUNJLFdBQUE7QUNwQ047O0FEdUNFO0VBQ0ksVUFBQTtBQ3BDTjs7QUR1Q0U7RUFDSSxVQUFBO0VBQ0EsbUJBQUE7QUNwQ047O0FEdUNFO0VBQ0ksWUFBQTtFQUNBLGVBQUE7QUNwQ047O0FEc0NFO0VBQ0ksMEJBQUE7QUNuQ047O0FEc0NFO0VBQ0ksaUJBQUE7QUNuQ047O0FEcUNFO0VBQ0ksZ0JBQUE7QUNsQ047O0FEb0NFOztFQUVJLDhCQUFBO0FDakNOOztBRG1DRTs7RUFFSSxzQkFBQTtBQ2hDTjs7QURtQ0U7RUFDSSxvQkFBQTtBQ2hDTjs7QURtQ0U7RUFDSSxrQkFBQTtBQ2hDTjs7QURtQ0U7RUFDSSw0QkFBQTtBQ2hDTjs7QURrQ0U7RUFDSSxrQkFBQTtFQUNBLG1CQUFBO0FDL0JOOztBRGlDRTtFQUNJLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsNkJBQUE7RUFFQSxrQkFBQTtBQy9CTjtBRGdDTTtFQUdJLG9CQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtBQ2hDVjtBRGlDVTtFQUNJLFlBQUE7QUMvQmQ7QURpQ1U7RUFDSSxjQUFBO0FDL0JkO0FEZ0NjO0VBQ0ksVUFBQTtBQzlCbEI7QURrQ007RUFDSSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxvQkFBQTtFQUNBLFlBQUE7RUFDQSx1QkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxVQUFBO0FDaENWOztBRG1DRTtFQUNFLDBCQUFBO0VBQ0EsZ0NBQUE7RUFDQSwwQ0FBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLDJCQUFBO0VBQ0Esc0NBQUE7QUNoQ0o7O0FEa0NFO0VBQ0UsOEJBQUE7QUMvQkoiLCJzb3VyY2VzQ29udGVudCI6WyIud2hpdGVfY29udGFpbmVyX2JvcmRlcl9yYWRpdXMge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC43KSAhaW1wb3J0YW50O1xyXG4gIGJvcmRlci1yYWRpdXM6IDE1cHggIWltcG9ydGFudDtcclxufVxyXG4vLyAuaXRlbSB7XHJcbi8vICAgICAgIHBhZGRpbmctbGVmdDogMHB4O1xyXG4vLyAgICAgICAvL2JhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4vLyAgIH1cclxuXHJcbiAgLml0ZW0gLml0ZW0taW5wdXQubmctdmFsaWQuaXRlbS1pbnB1dC1oYXMtdmFsdWU6bm90KC5pbnB1dC1oYXMtZm9jdXMpOm5vdCguaXRlbS1pbnB1dC1oYXMtZm9jdXMpIC5pdGVtLWlubmVyLFxyXG4gIC5pdGVtLml0ZW0taW5wdXQubmctdmFsaWQuaW5wdXQtaGFzLXZhbHVlOm5vdCguaW5wdXQtaGFzLWZvY3VzKTpub3QoLml0ZW0taW5wdXQtaGFzLWZvY3VzKSAuaXRlbS1pbm5lciB7XHJcbiAgICAgIGJvcmRlci1ib3R0b20tY29sb3I6IG5vbmUgIWltcG9ydGFudDtcclxuICAgICAgLXdlYmtpdC1ib3gtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7XHJcbiAgICAgIGJveC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudDtcclxuICB9XHJcblxyXG4gIC5pdGVtLWlubmVyIHtcclxuICAgICAgcGFkZGluZy1yaWdodDogMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgIGJvcmRlci1ib3R0b206IG5vbmUgIWltcG9ydGFudDtcclxuICB9XHJcblxyXG4gIC5pbnB1dCB7XHJcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNlZWU7XHJcbiAgICAgIHBhZGRpbmc6IDNweCAxNXB4O1xyXG4gICAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICAgICAgZm9udC1zaXplOiAxLjRyZW07XHJcbiAgfVxyXG5cclxuICAubGFiZWwge1xyXG4gICAgICBmb250LXNpemU6IDEuN3JlbSAhaW1wb3J0YW50O1xyXG4gICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXNlY29uZGFyeSkgIWltcG9ydGFudDtcclxuICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICB9XHJcbiAgcCB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMS4zcmVtO1xyXG4gICAgICBtYXJnaW4tYm90dG9tOjJweDtcclxuICAgICAgZm9udC1mYW1pbHk6ICdBZ2VuZGEtU2VtaUJvbGQnO1xyXG4gIH1cclxuXHJcbiAgLml0YWxpY19mb250IHtcclxuICAgICAgZm9udC1zdHlsZTogaXRhbGljO1xyXG4gICAgICBtYXJnaW46IDdweCAwcHg7XHJcbiAgfVxyXG4gIC5tYW5kYXRvcnlfc3RhciB7XHJcbiAgICAgIGNvbG9yOiAjZjAwO1xyXG4gIH1cclxuXHJcbiAgLnBhZGRpbmdfNDAge1xyXG4gICAgICBwYWRkaW5nOiA0MHB4O1xyXG4gIH1cclxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDM3NHB4KSB7XHJcblxyXG4gICAgICBzZWxlY3Qge1xyXG4gICAgICAgICAgYm9yZGVyOiAwICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XHJcbiAgICAgICAgICAtbW96LWFwcGVhcmFuY2U6IG5vbmU7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmZmZmIHVybCguLi8uLi8uLi9hc3NldHMvaW1ncy9hcnJvdy1kb3duLnBuZykgbm8tcmVwZWF0IDk1JSBjZW50ZXI7XHJcbiAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgIHRleHQtaW5kZW50OiAwLjAxcHg7XHJcbiAgICAgICAgICB0ZXh0LW92ZXJmbG93OiBcIlwiO1xyXG4gICAgICAgICAgcGFkZGluZzogMTBweDtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMS42cmVtICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICBjb2xvcjojMjIyO1xyXG4gICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgaGVpZ2h0OiA0MnB4O1xyXG4gICAgICB9XHJcblxyXG5cclxuICB9XHJcblxyXG4gIHNlbGVjdCB7XHJcbiAgICAgIGJvcmRlcjogMCAhaW1wb3J0YW50O1xyXG4gICAgICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XHJcbiAgICAgIC1tb3otYXBwZWFyYW5jZTogbm9uZTtcclxuICAgICAgYmFja2dyb3VuZDogI2ZmZmZmZiB1cmwoLi4vLi4vLi4vYXNzZXRzL2ltZ3MvYXJyb3ctZG93bi5wbmcpIG5vLXJlcGVhdCA5NSUgY2VudGVyO1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgdGV4dC1pbmRlbnQ6IDAuMDFweDtcclxuICAgICAgdGV4dC1vdmVyZmxvdzogXCJcIjtcclxuICAgICAgcGFkZGluZzogMTBweDtcclxuICAgICAgZm9udC1zaXplOiAgMS42cmVtICFpbXBvcnRhbnQ7XHJcbiAgICAgIGNvbG9yOiMyMjIhaW1wb3J0YW50O1xyXG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgIGhlaWdodDogNDJweDtcclxuICB9XHJcbiAgLy8gQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAzNzRweCkge1xyXG4gIC8vICAgICBzZWxlY3Qge1xyXG4gIC8vICAgICAgICAgYm9yZGVyOiAwICFpbXBvcnRhbnQ7XHJcbiAgLy8gICAgICAgICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XHJcbiAgLy8gICAgICAgICAtbW96LWFwcGVhcmFuY2U6IG5vbmU7XHJcbiAgLy8gICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmZmZmIHVybCguLi9hc3NldHMvaW1ncy9hcnJvdy1kb3duLnBuZykgbm8tcmVwZWF0IDk1JSBjZW50ZXI7XHJcbiAgLy8gICAgICAgICB3aWR0aDogMTAwJTtcclxuICAvLyAgICAgICAgIHRleHQtaW5kZW50OiAwLjAxcHg7XHJcbiAgLy8gICAgICAgICB0ZXh0LW92ZXJmbG93OiBcIlwiO1xyXG4gIC8vICAgICAgICAgcGFkZGluZzogMTBweDtcclxuICAvLyAgICAgICAgIGZvbnQtc2l6ZTogMS42cmVtICFpbXBvcnRhbnQ7XHJcbiAgLy8gICAgICAgICBjb2xvcjogY29sb3IoJGNvbG9ycywgZGFyayk7XHJcbiAgLy8gICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgLy8gICAgICAgICBoZWlnaHQ6IDQycHg7XHJcbiAgLy8gICAgIH1cclxuICAvLyB9XHJcblxyXG4gIC8vIHNlbGVjdCB7XHJcbiAgLy8gICAgIGJvcmRlcjogMCAhaW1wb3J0YW50O1xyXG4gIC8vICAgICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XHJcbiAgLy8gICAgIC1tb3otYXBwZWFyYW5jZTogbm9uZTtcclxuICAvLyAgICAgYmFja2dyb3VuZDogI2ZmZmZmZiB1cmwoLi4vYXNzZXRzL2ltZ3MvYXJyb3ctZG93bi5wbmcpIG5vLXJlcGVhdCA5NSUgY2VudGVyO1xyXG4gIC8vICAgICB3aWR0aDogMTAwJTtcclxuICAvLyAgICAgdGV4dC1pbmRlbnQ6IDAuMDFweDtcclxuICAvLyAgICAgdGV4dC1vdmVyZmxvdzogXCJcIjtcclxuICAvLyAgICAgcGFkZGluZzogMTBweDtcclxuICAvLyAgICAgZm9udC1zaXplOiAxLjZyZW0gIWltcG9ydGFudDtcclxuICAvLyAgICAgY29sb3I6IGNvbG9yKCRjb2xvcnMsIGRhcmspICFpbXBvcnRhbnQ7XHJcbiAgLy8gICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAvLyAgICAgaGVpZ2h0OiA0MnB4O1xyXG4gIC8vIH1cclxuXHJcbiAgLnNlbGVjdC1pY29uIHtcclxuICAgICAgZGlzcGxheTogbm9uZTtcclxuICB9XHJcbiAgLmZhaWwge1xyXG4gICAgICB0ZXh0LWFsaWduOiBzdGFydCAhaW1wb3J0YW50O1xyXG4gICAgICBjb2xvcjogI2YwMCAhaW1wb3J0YW50O1xyXG4gIH1cclxuICAuY29sIHtcclxuICAgICAgcGFkZGluZzogMHB4ICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gIC8qIC5jaGVja2JveHtcclxuICBwYWRkaW5nLXRvcDogNXB4ICFpbXBvcnRhbnQ7XHJcbiAgcGFkZGluZy1sZWZ0OiAxMHB4ICFpbXBvcnRhbnQ7XHJcbn0gKi9cclxuXHJcbiAgLmNoZWNrQm94IHtcclxuICAgICAgcGFkZGluZy10b3A6IDEwcHggIWltcG9ydGFudDtcclxuICAgICAgcGFkZGluZy1sZWZ0OiAxMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gIH1cclxuXHJcbiAgLmNoZWNrQm94IC5sYWJlbCB7XHJcbiAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgIGZvbnQtc2l6ZTogMS40cmVtICFpbXBvcnRhbnQ7XHJcbiAgICAgIHBhZGRpbmctdG9wOiAzcHg7XHJcbiAgICAgIG1hcmdpbjogMHB4O1xyXG4gIH1cclxuXHJcbiAgLmNoZWNrYm94LWljb24ge1xyXG4gICAgICBib3JkZXItd2lkdGg6IDFweCAhaW1wb3J0YW50O1xyXG4gIH1cclxuICAuY2hlY2tib3gtY2hlY2tlZCB7XHJcbiAgICAgIGJvcmRlci1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXNlY29uZGFyeSkgIWltcG9ydGFudDtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGUgIWltcG9ydGFudDtcclxuICB9XHJcblxyXG4gIC5sYmwge1xyXG4gICAgICBjb2xvcjogIzIyMiAhaW1wb3J0YW50O1xyXG4gIH1cclxuXHJcbiAgLmxpc3QtaGVhZGVyIHtcclxuICAgICAgbWFyZ2luLWJvdHRvbTogMHB4ICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG5cclxuICAvLyAuaXRlbSB7XHJcbiAgLy8gICAgIHBhZGRpbmctbGVmdDogMHB4O1xyXG4gIC8vICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICAvLyB9XHJcblxyXG4gIC5pdGVtIC5pdGVtLWlucHV0Lm5nLXZhbGlkLml0ZW0taW5wdXQtaGFzLXZhbHVlOm5vdCguaW5wdXQtaGFzLWZvY3VzKTpub3QoLml0ZW0taW5wdXQtaGFzLWZvY3VzKSAuaXRlbS1pbm5lcixcclxuICAuaXRlbS5pdGVtLWlucHV0Lm5nLXZhbGlkLmlucHV0LWhhcy12YWx1ZTpub3QoLmlucHV0LWhhcy1mb2N1cyk6bm90KC5pdGVtLWlucHV0LWhhcy1mb2N1cykgLml0ZW0taW5uZXIge1xyXG4gICAgICBib3JkZXItYm90dG9tLWNvbG9yOiBub25lICFpbXBvcnRhbnQ7XHJcbiAgICAgIC13ZWJraXQtYm94LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50O1xyXG4gICAgICBib3gtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG5cclxuICAuaXRlbS1pbm5lciB7XHJcbiAgICAgIHBhZGRpbmctcmlnaHQ6IDBweCAhaW1wb3J0YW50O1xyXG4gICAgICBib3JkZXItYm90dG9tOiBub25lICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG5cclxuICAuaW5wdXQge1xyXG4gICAgICBib3JkZXI6IDFweCBzb2xpZCAjZWVlO1xyXG4gICAgICBwYWRkaW5nOiAzcHggMTVweDtcclxuICAgICAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgICAgIGZvbnQtc2l6ZTogMS40cmVtO1xyXG4gIH1cclxuXHJcbiAgLmxhYmVsIHtcclxuICAgICAgZm9udC1zaXplOiAxLjhyZW0gIWltcG9ydGFudDtcclxuICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1zZWNvbmRhcnkpICFpbXBvcnRhbnQ7XHJcbiAgICAgIC8vZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgICAgd2hpdGUtc3BhY2U6IHByZS1saW5lO1xyXG4gICAgICBmb250LWZhbWlseTogYWdlbmRhLXNlbWlib2xkO1xyXG4gIH1cclxuXHJcbiAgLmRhdGVfdGlsZSB7XHJcbiAgICAgIGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1zZWNvbmRhcnkpICFpbXBvcnRhbnQ7XHJcbiAgICAgIGNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xyXG4gICAgICBtaW4taGVpZ2h0OiAwcHg7XHJcbiAgfVxyXG5cclxuICBzZWN0aW9uIHtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgIGhlaWdodDogMTAwJTtcclxuICB9XHJcbiAgc2VjdGlvbiBwIHtcclxuICAgICAgbWFyZ2luLWJvdHRvbTogMjVweDtcclxuICAgICAgcGFkZGluZzogMHB4IDEwcHg7XHJcbiAgICAgIGZvbnQtc2l6ZTogMS41IHJlbTtcclxuICB9XHJcblxyXG4gIC5pdGVtIC5jaGVja2JveCB7XHJcbiAgICAgIG1hcmdpbjogMHB4IDEwcHggMHB4IDBweCAhaW1wb3J0YW50O1xyXG4gIH1cclxuICAuaW9uLWNoZWNrYm94LWljb24ge1xyXG4gICAgICBib3JkZXItY29sb3I6IHZhcigtLWlvbi1jb2xvci1zZWNvbmRhcnkpICFpbXBvcnRhbnQ7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDVweCAhaW1wb3J0YW50O1xyXG4gIH1cclxuICAuaW9uLWNoZWNrYm94LWNoZWNrZWQge1xyXG4gICAgICBib3JkZXItY29sb3I6IHZhcigtLWlvbi1jb2xvci1zZWNvbmRhcnkpICFpbXBvcnRhbnQ7XHJcbiAgICAgIC8vYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXNlY29uZGFyeSkgIWltcG9ydGFudDtcclxuICB9XHJcblxyXG4gIC5jaGVja2JveC1pbm5lciB7XHJcbiAgICAgIGJvcmRlci1jb2xvcjogd2hpdGUgIWltcG9ydGFudDtcclxuICB9XHJcblxyXG4gIC5zZWxlY3QtdGV4dCB7XHJcbiAgICAgIHBhZGRpbmc6IDNweCAxNXB4O1xyXG4gIH1cclxuXHJcbiAgLnNlbGVjdC1pY29uIHtcclxuICAgICAgZGlzcGxheTogbm9uZTtcclxuICB9XHJcblxyXG4gIC5kYXRlX3RpbGUgLmxhYmVsIHtcclxuICAgICAgY29sb3I6ICNlZWUgIWltcG9ydGFudDtcclxuICAgICAgZm9udC1zaXplOiAxLjhyZW07XHJcbiAgICAgIG1hcmdpbjogMHB4O1xyXG4gICAgICBsaW5lLWhlaWdodDogMjRweDtcclxuICB9XHJcblxyXG4gIC5kYXRldGltZSB7XHJcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNlZWU7XHJcbiAgICAgIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gICAgICBmb250LXNpemU6IDEuNHJlbTtcclxuICB9XHJcblxyXG4gIGlvbi1pY29uIHtcclxuICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICBmb250LXNpemU6IDEuNXJlbTtcclxuICAgICAgLy9wYWRkaW5nOiAxMnB4IDlweDtcclxuICB9XHJcblxyXG4gIC5maWxlSW5wdXQge1xyXG4gICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxuICAudGV4dC1pbnB1dFtkaXNhYmxlZF0ge1xyXG4gICAgICBvcGFjaXR5OiAxO1xyXG4gIH1cclxuICAuY29sIHtcclxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG5cclxuICAucm93X2ZpbGUge1xyXG4gICAgICBoZWlnaHQ6IDQwcHggIWltcG9ydGFudDtcclxuICB9XHJcblxyXG4gIC5tYW5kYXRvcnlUZXh0IHtcclxuICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1zZWNvbmRhcnkpO1xyXG4gICAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICAgIGxpbmUtaGVpZ2h0OiAyNHB4O1xyXG4gIH1cclxuXHJcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAzNzRweCkge1xyXG4gICAgICAuZGF0ZV90aWxlIC5sYWJlbCB7XHJcbiAgICAgICAgICBmb250LXNpemU6IDEuNHJlbSAhaW1wb3J0YW50O1xyXG4gICAgICB9XHJcbiAgfVxyXG5cclxuICAuaXRlbS1yYWRpbyAuYnV0dG9uLWVmZmVjdCB7XHJcbiAgICAgIHRyYW5zZm9ybTogbm9uZSAhaW1wb3J0YW50O1xyXG4gICAgICB0cmFuc2l0aW9uOiAwbXMgIWltcG9ydGFudDtcclxuICB9XHJcblxyXG4gIC5saXN0LWhlYWRlciB7XHJcbiAgICAgIGJvcmRlcjogMHB4O1xyXG4gIH1cclxuXHJcbiAgLmRpc2FibGVkLWRyb3Bkb3duIC5sYWJlbCB7XHJcbiAgICAgIG9wYWNpdHk6IDE7XHJcbiAgfVxyXG5cclxuICAuZGlzYWJsZWQtZHJvcGRvd24gLnNlbGVjdCB7XHJcbiAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICAgIGJhY2tncm91bmQ6ICNmZmZmZmY7XHJcbiAgfVxyXG5cclxuICAucm93X2ZpbGUgLmNvbDpsYXN0LWNoaWxkIHtcclxuICAgICAgcGFkZGluZzogMHB4O1xyXG4gICAgICBtYXJnaW4tdG9wOiA3cHg7XHJcbiAgfVxyXG4gIC5zdWJfdGl0bGUge1xyXG4gICAgICBtYXJnaW4tdG9wOiAzcHggIWltcG9ydGFudDtcclxuICB9XHJcblxyXG4gIC5yb3dfZmlsZSAuZmlsZUlucHV0IHtcclxuICAgICAgcGFkZGluZzogMHB4IDE1cHg7XHJcbiAgfVxyXG4gIC5yb3dfZmlsZSAudGV4dC1pbnB1dCB7XHJcbiAgICAgIG1hcmdpbjogMTFweCAwcHg7XHJcbiAgfVxyXG4gIC5saXN0LWlvcyA+IC5pdGVtLWJsb2NrOmxhc3QtY2hpbGQsXHJcbiAgLmxpc3QtaW9zID4gLml0ZW0td3JhcHBlcjpsYXN0LWNoaWxkIC5pdGVtLWJsb2NrIHtcclxuICAgICAgYm9yZGVyLWJvdHRvbTogbm9uZSAhaW1wb3J0YW50O1xyXG4gIH1cclxuICAubGlzdC1pb3MsXHJcbiAgLmxpc3QtaW9zIC5sYWJlbCB7XHJcbiAgICAgIG1hcmdpbjogMHB4ICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG5cclxuICAubGlzdC1oZWFkZXItaW9zIHtcclxuICAgICAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XHJcbiAgfVxyXG5cclxuICAuZGF0ZXRpbWUtdGV4dCB7XHJcbiAgICAgIHBhZGRpbmctbGVmdDogMTVweDtcclxuICB9XHJcblxyXG4gIC5yb3dfZmlsZSAuY29sIHtcclxuICAgICAgcGFkZGluZy1sZWZ0OiAwcHggIWltcG9ydGFudDtcclxuICB9XHJcbiAgaW9uLWxhYmVsIHtcclxuICAgICAgbWFyZ2luLWJvdHRvbTogOHB4O1xyXG4gICAgICB3aGl0ZS1zcGFjZTogbm9ybWFsO1xyXG4gIH1cclxuICAudXBsb2FkLWRvYyB7XHJcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICBtYXJnaW4tYm90dG9tOiA4cHggIWltcG9ydGFudDtcclxuICAgICAgLy9wYWRkaW5nLXJpZ2h0OiA4cHg7XHJcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgaW9uLWlucHV0IHtcclxuICAgICAgICAgIC8vYmFja2dyb3VuZDogI2ZmZjtcclxuICAgICAgICAgLy8gYm9yZGVyOiAxcHggc29saWQgI2MzYzFjMTtcclxuICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xyXG4gICAgICAgICAgcGFkZGluZy1sZWZ0OiAxNXB4O1xyXG4gICAgICAgICAgcGFkZGluZy1yaWdodDogNDBweDtcclxuICAgICAgICAgICZbZGlzYWJsZWRdIHtcclxuICAgICAgICAgICAgICBvcGFjaXR5OiAwLjY7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAudGV4dC1pbnB1dCB7XHJcbiAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDA7XHJcbiAgICAgICAgICAgICAgJltkaXNhYmxlZF0ge1xyXG4gICAgICAgICAgICAgICAgICBvcGFjaXR5OiAxO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICAuaWNvbi1jb250YWluZXIge1xyXG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xyXG4gICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICByaWdodDogMTBweDtcclxuICAgICAgICAgIHdpZHRoOiAyNHB4O1xyXG4gICAgICAgICAgei1pbmRleDogOTtcclxuICAgICAgfVxyXG4gIH1cclxuICAuYnRuX2NlbnRlciB7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcclxuICAgIC0tYmFja2dyb3VuZDogIzAwMmQzZCAhaW1wb3J0YW50O1xyXG4gICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1zZWNvbmRhcnktY29udHJhc3QpO1xyXG4gICAgZm9udC1zaXplOiAxLjRyZW07XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgbWluLWhlaWdodDogMzRweDtcclxuICAgIG1pbi13aWR0aDogMTMwcHggIWltcG9ydGFudDtcclxuICAgIGZvbnQtZmFtaWx5OiBBZ2VuZGEtUmVndWxhciAhaW1wb3J0YW50O1xyXG4gIH1cclxuICAuZm9udF9mYW1pbHl7XHJcbiAgICBmb250LWZhbWlseTogJ0FnZW5kYS1TZW1pQm9sZCc7XHJcbiAgfVxyXG5cclxuXHJcblxyXG4iLCIud2hpdGVfY29udGFpbmVyX2JvcmRlcl9yYWRpdXMge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNykgIWltcG9ydGFudDtcbiAgYm9yZGVyLXJhZGl1czogMTVweCAhaW1wb3J0YW50O1xufVxuXG4uaXRlbSAuaXRlbS1pbnB1dC5uZy12YWxpZC5pdGVtLWlucHV0LWhhcy12YWx1ZTpub3QoLmlucHV0LWhhcy1mb2N1cyk6bm90KC5pdGVtLWlucHV0LWhhcy1mb2N1cykgLml0ZW0taW5uZXIsXG4uaXRlbS5pdGVtLWlucHV0Lm5nLXZhbGlkLmlucHV0LWhhcy12YWx1ZTpub3QoLmlucHV0LWhhcy1mb2N1cyk6bm90KC5pdGVtLWlucHV0LWhhcy1mb2N1cykgLml0ZW0taW5uZXIge1xuICBib3JkZXItYm90dG9tLWNvbG9yOiBub25lICFpbXBvcnRhbnQ7XG4gIC13ZWJraXQtYm94LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50O1xuICBib3gtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7XG59XG5cbi5pdGVtLWlubmVyIHtcbiAgcGFkZGluZy1yaWdodDogMHB4ICFpbXBvcnRhbnQ7XG4gIGJvcmRlci1ib3R0b206IG5vbmUgIWltcG9ydGFudDtcbn1cblxuLmlucHV0IHtcbiAgYm9yZGVyOiAxcHggc29saWQgI2VlZTtcbiAgcGFkZGluZzogM3B4IDE1cHg7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICBmb250LXNpemU6IDEuNHJlbTtcbn1cblxuLmxhYmVsIHtcbiAgZm9udC1zaXplOiAxLjdyZW0gIWltcG9ydGFudDtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1zZWNvbmRhcnkpICFpbXBvcnRhbnQ7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG59XG5cbnAge1xuICBmb250LXNpemU6IDEuM3JlbTtcbiAgbWFyZ2luLWJvdHRvbTogMnB4O1xuICBmb250LWZhbWlseTogXCJBZ2VuZGEtU2VtaUJvbGRcIjtcbn1cblxuLml0YWxpY19mb250IHtcbiAgZm9udC1zdHlsZTogaXRhbGljO1xuICBtYXJnaW46IDdweCAwcHg7XG59XG5cbi5tYW5kYXRvcnlfc3RhciB7XG4gIGNvbG9yOiAjZjAwO1xufVxuXG4ucGFkZGluZ180MCB7XG4gIHBhZGRpbmc6IDQwcHg7XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMzc0cHgpIHtcbiAgc2VsZWN0IHtcbiAgICBib3JkZXI6IDAgIWltcG9ydGFudDtcbiAgICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XG4gICAgLW1vei1hcHBlYXJhbmNlOiBub25lO1xuICAgIGJhY2tncm91bmQ6ICNmZmZmZmYgdXJsKC4uLy4uLy4uL2Fzc2V0cy9pbWdzL2Fycm93LWRvd24ucG5nKSBuby1yZXBlYXQgOTUlIGNlbnRlcjtcbiAgICB3aWR0aDogMTAwJTtcbiAgICB0ZXh0LWluZGVudDogMC4wMXB4O1xuICAgIHRleHQtb3ZlcmZsb3c6IFwiXCI7XG4gICAgcGFkZGluZzogMTBweDtcbiAgICBmb250LXNpemU6IDEuNnJlbSAhaW1wb3J0YW50O1xuICAgIGNvbG9yOiAjMjIyO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBoZWlnaHQ6IDQycHg7XG4gIH1cbn1cbnNlbGVjdCB7XG4gIGJvcmRlcjogMCAhaW1wb3J0YW50O1xuICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XG4gIC1tb3otYXBwZWFyYW5jZTogbm9uZTtcbiAgYmFja2dyb3VuZDogI2ZmZmZmZiB1cmwoLi4vLi4vLi4vYXNzZXRzL2ltZ3MvYXJyb3ctZG93bi5wbmcpIG5vLXJlcGVhdCA5NSUgY2VudGVyO1xuICB3aWR0aDogMTAwJTtcbiAgdGV4dC1pbmRlbnQ6IDAuMDFweDtcbiAgdGV4dC1vdmVyZmxvdzogXCJcIjtcbiAgcGFkZGluZzogMTBweDtcbiAgZm9udC1zaXplOiAxLjZyZW0gIWltcG9ydGFudDtcbiAgY29sb3I6ICMyMjIgIWltcG9ydGFudDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBoZWlnaHQ6IDQycHg7XG59XG5cbi5zZWxlY3QtaWNvbiB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbi5mYWlsIHtcbiAgdGV4dC1hbGlnbjogc3RhcnQgIWltcG9ydGFudDtcbiAgY29sb3I6ICNmMDAgIWltcG9ydGFudDtcbn1cblxuLmNvbCB7XG4gIHBhZGRpbmc6IDBweCAhaW1wb3J0YW50O1xufVxuXG4vKiAuY2hlY2tib3h7XG4gIHBhZGRpbmctdG9wOiA1cHggIWltcG9ydGFudDtcbiAgcGFkZGluZy1sZWZ0OiAxMHB4ICFpbXBvcnRhbnQ7XG59ICovXG4uY2hlY2tCb3gge1xuICBwYWRkaW5nLXRvcDogMTBweCAhaW1wb3J0YW50O1xuICBwYWRkaW5nLWxlZnQ6IDEwcHggIWltcG9ydGFudDtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG59XG5cbi5jaGVja0JveCAubGFiZWwge1xuICBwYWRkaW5nOiAwO1xuICBmb250LXNpemU6IDEuNHJlbSAhaW1wb3J0YW50O1xuICBwYWRkaW5nLXRvcDogM3B4O1xuICBtYXJnaW46IDBweDtcbn1cblxuLmNoZWNrYm94LWljb24ge1xuICBib3JkZXItd2lkdGg6IDFweCAhaW1wb3J0YW50O1xufVxuXG4uY2hlY2tib3gtY2hlY2tlZCB7XG4gIGJvcmRlci1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXNlY29uZGFyeSkgIWltcG9ydGFudDtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGUgIWltcG9ydGFudDtcbn1cblxuLmxibCB7XG4gIGNvbG9yOiAjMjIyICFpbXBvcnRhbnQ7XG59XG5cbi5saXN0LWhlYWRlciB7XG4gIG1hcmdpbi1ib3R0b206IDBweCAhaW1wb3J0YW50O1xufVxuXG4uaXRlbSAuaXRlbS1pbnB1dC5uZy12YWxpZC5pdGVtLWlucHV0LWhhcy12YWx1ZTpub3QoLmlucHV0LWhhcy1mb2N1cyk6bm90KC5pdGVtLWlucHV0LWhhcy1mb2N1cykgLml0ZW0taW5uZXIsXG4uaXRlbS5pdGVtLWlucHV0Lm5nLXZhbGlkLmlucHV0LWhhcy12YWx1ZTpub3QoLmlucHV0LWhhcy1mb2N1cyk6bm90KC5pdGVtLWlucHV0LWhhcy1mb2N1cykgLml0ZW0taW5uZXIge1xuICBib3JkZXItYm90dG9tLWNvbG9yOiBub25lICFpbXBvcnRhbnQ7XG4gIC13ZWJraXQtYm94LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50O1xuICBib3gtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7XG59XG5cbi5pdGVtLWlubmVyIHtcbiAgcGFkZGluZy1yaWdodDogMHB4ICFpbXBvcnRhbnQ7XG4gIGJvcmRlci1ib3R0b206IG5vbmUgIWltcG9ydGFudDtcbn1cblxuLmlucHV0IHtcbiAgYm9yZGVyOiAxcHggc29saWQgI2VlZTtcbiAgcGFkZGluZzogM3B4IDE1cHg7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICBmb250LXNpemU6IDEuNHJlbTtcbn1cblxuLmxhYmVsIHtcbiAgZm9udC1zaXplOiAxLjhyZW0gIWltcG9ydGFudDtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1zZWNvbmRhcnkpICFpbXBvcnRhbnQ7XG4gIHdoaXRlLXNwYWNlOiBwcmUtbGluZTtcbiAgZm9udC1mYW1pbHk6IGFnZW5kYS1zZW1pYm9sZDtcbn1cblxuLmRhdGVfdGlsZSB7XG4gIGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1zZWNvbmRhcnkpICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xuICBtaW4taGVpZ2h0OiAwcHg7XG59XG5cbnNlY3Rpb24ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG5zZWN0aW9uIHAge1xuICBtYXJnaW4tYm90dG9tOiAyNXB4O1xuICBwYWRkaW5nOiAwcHggMTBweDtcbiAgZm9udC1zaXplOiAxLjUgcmVtO1xufVxuXG4uaXRlbSAuY2hlY2tib3gge1xuICBtYXJnaW46IDBweCAxMHB4IDBweCAwcHggIWltcG9ydGFudDtcbn1cblxuLmlvbi1jaGVja2JveC1pY29uIHtcbiAgYm9yZGVyLWNvbG9yOiB2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5KSAhaW1wb3J0YW50O1xuICBib3JkZXItcmFkaXVzOiA1cHggIWltcG9ydGFudDtcbn1cblxuLmlvbi1jaGVja2JveC1jaGVja2VkIHtcbiAgYm9yZGVyLWNvbG9yOiB2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5KSAhaW1wb3J0YW50O1xufVxuXG4uY2hlY2tib3gtaW5uZXIge1xuICBib3JkZXItY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XG59XG5cbi5zZWxlY3QtdGV4dCB7XG4gIHBhZGRpbmc6IDNweCAxNXB4O1xufVxuXG4uc2VsZWN0LWljb24ge1xuICBkaXNwbGF5OiBub25lO1xufVxuXG4uZGF0ZV90aWxlIC5sYWJlbCB7XG4gIGNvbG9yOiAjZWVlICFpbXBvcnRhbnQ7XG4gIGZvbnQtc2l6ZTogMS44cmVtO1xuICBtYXJnaW46IDBweDtcbiAgbGluZS1oZWlnaHQ6IDI0cHg7XG59XG5cbi5kYXRldGltZSB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNlZWU7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICBmb250LXNpemU6IDEuNHJlbTtcbn1cblxuaW9uLWljb24ge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGZvbnQtc2l6ZTogMS41cmVtO1xufVxuXG4uZmlsZUlucHV0IHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB3aWR0aDogMTAwJTtcbn1cblxuLnRleHQtaW5wdXRbZGlzYWJsZWRdIHtcbiAgb3BhY2l0eTogMTtcbn1cblxuLmNvbCB7XG4gIHRleHQtYWxpZ246IGNlbnRlciAhaW1wb3J0YW50O1xufVxuXG4ucm93X2ZpbGUge1xuICBoZWlnaHQ6IDQwcHggIWltcG9ydGFudDtcbn1cblxuLm1hbmRhdG9yeVRleHQge1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXNlY29uZGFyeSk7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgbWFyZ2luLXRvcDogMTBweDtcbiAgbGluZS1oZWlnaHQ6IDI0cHg7XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMzc0cHgpIHtcbiAgLmRhdGVfdGlsZSAubGFiZWwge1xuICAgIGZvbnQtc2l6ZTogMS40cmVtICFpbXBvcnRhbnQ7XG4gIH1cbn1cbi5pdGVtLXJhZGlvIC5idXR0b24tZWZmZWN0IHtcbiAgdHJhbnNmb3JtOiBub25lICFpbXBvcnRhbnQ7XG4gIHRyYW5zaXRpb246IDBtcyAhaW1wb3J0YW50O1xufVxuXG4ubGlzdC1oZWFkZXIge1xuICBib3JkZXI6IDBweDtcbn1cblxuLmRpc2FibGVkLWRyb3Bkb3duIC5sYWJlbCB7XG4gIG9wYWNpdHk6IDE7XG59XG5cbi5kaXNhYmxlZC1kcm9wZG93biAuc2VsZWN0IHtcbiAgb3BhY2l0eTogMTtcbiAgYmFja2dyb3VuZDogI2ZmZmZmZjtcbn1cblxuLnJvd19maWxlIC5jb2w6bGFzdC1jaGlsZCB7XG4gIHBhZGRpbmc6IDBweDtcbiAgbWFyZ2luLXRvcDogN3B4O1xufVxuXG4uc3ViX3RpdGxlIHtcbiAgbWFyZ2luLXRvcDogM3B4ICFpbXBvcnRhbnQ7XG59XG5cbi5yb3dfZmlsZSAuZmlsZUlucHV0IHtcbiAgcGFkZGluZzogMHB4IDE1cHg7XG59XG5cbi5yb3dfZmlsZSAudGV4dC1pbnB1dCB7XG4gIG1hcmdpbjogMTFweCAwcHg7XG59XG5cbi5saXN0LWlvcyA+IC5pdGVtLWJsb2NrOmxhc3QtY2hpbGQsXG4ubGlzdC1pb3MgPiAuaXRlbS13cmFwcGVyOmxhc3QtY2hpbGQgLml0ZW0tYmxvY2sge1xuICBib3JkZXItYm90dG9tOiBub25lICFpbXBvcnRhbnQ7XG59XG5cbi5saXN0LWlvcyxcbi5saXN0LWlvcyAubGFiZWwge1xuICBtYXJnaW46IDBweCAhaW1wb3J0YW50O1xufVxuXG4ubGlzdC1oZWFkZXItaW9zIHtcbiAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XG59XG5cbi5kYXRldGltZS10ZXh0IHtcbiAgcGFkZGluZy1sZWZ0OiAxNXB4O1xufVxuXG4ucm93X2ZpbGUgLmNvbCB7XG4gIHBhZGRpbmctbGVmdDogMHB4ICFpbXBvcnRhbnQ7XG59XG5cbmlvbi1sYWJlbCB7XG4gIG1hcmdpbi1ib3R0b206IDhweDtcbiAgd2hpdGUtc3BhY2U6IG5vcm1hbDtcbn1cblxuLnVwbG9hZC1kb2Mge1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgbWFyZ2luLWJvdHRvbTogOHB4ICFpbXBvcnRhbnQ7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi51cGxvYWQtZG9jIGlvbi1pbnB1dCB7XG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICBwYWRkaW5nLWxlZnQ6IDE1cHg7XG4gIHBhZGRpbmctcmlnaHQ6IDQwcHg7XG59XG4udXBsb2FkLWRvYyBpb24taW5wdXRbZGlzYWJsZWRdIHtcbiAgb3BhY2l0eTogMC42O1xufVxuLnVwbG9hZC1kb2MgaW9uLWlucHV0IC50ZXh0LWlucHV0IHtcbiAgbWFyZ2luLWxlZnQ6IDA7XG59XG4udXBsb2FkLWRvYyBpb24taW5wdXQgLnRleHQtaW5wdXRbZGlzYWJsZWRdIHtcbiAgb3BhY2l0eTogMTtcbn1cbi51cGxvYWQtZG9jIC5pY29uLWNvbnRhaW5lciB7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gIGhlaWdodDogMTAwJTtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDEwcHg7XG4gIHdpZHRoOiAyNHB4O1xuICB6LWluZGV4OiA5O1xufVxuXG4uYnRuX2NlbnRlciB7XG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xuICAtLWJhY2tncm91bmQ6ICMwMDJkM2QgIWltcG9ydGFudDtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1zZWNvbmRhcnktY29udHJhc3QpO1xuICBmb250LXNpemU6IDEuNHJlbTtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgbWluLWhlaWdodDogMzRweDtcbiAgbWluLXdpZHRoOiAxMzBweCAhaW1wb3J0YW50O1xuICBmb250LWZhbWlseTogQWdlbmRhLVJlZ3VsYXIgIWltcG9ydGFudDtcbn1cblxuLmZvbnRfZmFtaWx5IHtcbiAgZm9udC1mYW1pbHk6IFwiQWdlbmRhLVNlbWlCb2xkXCI7XG59Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ })

}]);
//# sourceMappingURL=src_app_pages_update-payout-details_update-payout-details_module_ts.js.map