"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_sign-up_sign-up_module_ts"],{

/***/ 85081:
/*!*********************************************************!*\
  !*** ./src/app/pages/sign-up/sign-up-routing.module.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SignUpPageRoutingModule": () => (/* binding */ SignUpPageRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _sign_up_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sign-up.page */ 87079);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);




const routes = [{
  path: '',
  component: _sign_up_page__WEBPACK_IMPORTED_MODULE_0__.SignUpPage
}];
class SignUpPageRoutingModule {}
SignUpPageRoutingModule.ɵfac = function SignUpPageRoutingModule_Factory(t) {
  return new (t || SignUpPageRoutingModule)();
};
SignUpPageRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
  type: SignUpPageRoutingModule
});
SignUpPageRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](SignUpPageRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
})();

/***/ }),

/***/ 54498:
/*!*************************************************!*\
  !*** ./src/app/pages/sign-up/sign-up.module.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SignUpPageModule": () => (/* binding */ SignUpPageModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ 38699);
/* harmony import */ var _sign_up_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sign-up-routing.module */ 85081);
/* harmony import */ var _sign_up_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sign-up.page */ 87079);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);







class SignUpPageModule {}
SignUpPageModule.ɵfac = function SignUpPageModule_Factory(t) {
  return new (t || SignUpPageModule)();
};
SignUpPageModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
  type: SignUpPageModule
});
SignUpPageModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule, _sign_up_routing_module__WEBPACK_IMPORTED_MODULE_0__.SignUpPageRoutingModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__.TranslateModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.ReactiveFormsModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](SignUpPageModule, {
    declarations: [_sign_up_page__WEBPACK_IMPORTED_MODULE_1__.SignUpPage],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule, _sign_up_routing_module__WEBPACK_IMPORTED_MODULE_0__.SignUpPageRoutingModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__.TranslateModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.ReactiveFormsModule]
  });
})();

/***/ }),

/***/ 87079:
/*!***********************************************!*\
  !*** ./src/app/pages/sign-up/sign-up.page.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SignUpPage": () => (/* binding */ SignUpPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var src_app_app_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/app.component */ 55041);
/* harmony import */ var _popover_content_popover_content_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../popover-content/popover-content.page */ 97716);
/* harmony import */ var src_providers_utils_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/providers/utils/config */ 43485);
/* harmony import */ var http_status_codes__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! http-status-codes */ 92788);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _securityQuestionsService__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./securityQuestionsService */ 71959);
/* harmony import */ var src_providers_utils_utils_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/providers/utils/utils.service */ 30423);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ngx-translate/core */ 38699);
/* harmony import */ var src_providers_logger_service_logger_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/providers/logger-service/logger-service */ 9999);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _sign_up_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./sign-up-service */ 25171);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common */ 94666);
















const _c0 = ["canvas"];
const _c1 = ["captchInput"];
function SignUpPage_div_7_img_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r42 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "img", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function SignUpPage_div_7_img_7_Template_img_click_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r42);
      const ctx_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r41.openPopup($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
}
function SignUpPage_div_7_div_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 28)(1, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](3, 1, "Signup.identityNo_req"));
  }
}
function SignUpPage_div_7_div_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 28)(1, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](3, 1, "Signup.identityNoLength_req"));
  }
}
function SignUpPage_div_7_img_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r44 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "img", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function SignUpPage_div_7_img_18_Template_img_click_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r44);
      const ctx_r43 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r43.openPopup1($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
}
function SignUpPage_div_7_div_22_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 28)(1, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](3, 1, "Signup.policyNo_req"));
  }
}
function SignUpPage_div_7_div_23_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 28)(1, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](3, 1, "Signup.policyNoLength_req"));
  }
}
function SignUpPage_div_7_ion_label_27_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "ion-label", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](4, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](2, 1, "enterthetext"), " ");
  }
}
function SignUpPage_div_7_ion_row_28_Template(rf, ctx) {
  if (rf & 1) {
    const _r47 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "ion-row")(1, "ion-col", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](2, "canvas", 31, 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "span", 33)(5, "ion-col", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function SignUpPage_div_7_ion_row_28_Template_ion_col_click_5_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r47);
      const ctx_r46 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r46.refreshCaptcha());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](6, "i", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
  }
}
function SignUpPage_div_7_ion_item_29_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "ion-item", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "ion-input", 36, 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](3, 1, "entertextintheaboveimage"));
  }
}
function SignUpPage_div_7_div_30_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 28)(1, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](3, 1, "Signup.captcha_req"));
  }
}
function SignUpPage_div_7_ion_label_31_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "ion-label", 38)(1, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](4, 1, "allfieldsarecompulsory"));
  }
}
function SignUpPage_div_7_ion_row_32_Template(rf, ctx) {
  if (rf & 1) {
    const _r50 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "ion-row")(1, "ion-col", 39)(2, "ion-button", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function SignUpPage_div_7_ion_row_32_Template_ion_button_click_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r50);
      const ctx_r49 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r49.checkUser());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("disabled", !ctx_r13.signUpForm.controls.identityNumber.valid || !ctx_r13.signUpForm.controls.policyNo.valid || !ctx_r13.signUpForm.controls.captcha.valid);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](4, 2, "submit"));
  }
}
function SignUpPage_div_7_ion_label_33_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "ion-label", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](4, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](2, 1, "fullname"), " ");
  }
}
function SignUpPage_div_7_ion_item_34_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "ion-item", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "ion-input", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](2, 1, "fullnamePlcHldr"));
  }
}
function SignUpPage_div_7_div_35_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 28)(1, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](3, 1, "Signup.fullName_req"));
  }
}
function SignUpPage_div_7_div_36_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 28)(1, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](3, 1, "Signup.nameLength_req"));
  }
}
function SignUpPage_div_7_ion_label_37_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "ion-label", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](4, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](2, 1, "emailaddress"), " ");
  }
}
function SignUpPage_div_7_ion_item_38_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "ion-item", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "ion-input", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](2, 1, "emailid"));
  }
}
function SignUpPage_div_7_ion_label_39_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "ion-label", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](2, 1, "Thiswillbeusedtologintosunaccess"));
  }
}
function SignUpPage_div_7_div_40_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 28)(1, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](3, 1, "Signup.email_req"));
  }
}
function SignUpPage_div_7_div_41_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 28)(1, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](3, 1, "Signup.email_valid"));
  }
}
function SignUpPage_div_7_ion_label_42_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "ion-label", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](4, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](2, 1, "Signup.sourceofInfo"), " ");
  }
}
function SignUpPage_div_7_ion_item_43_ion_select_option_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "ion-select-option", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const socialPlatform_r52 = ctx.$implicit;
    const i_r53 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("value", socialPlatform_r52.type)("selected", i_r53 === 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](socialPlatform_r52.type);
  }
}
const _c2 = function () {
  return {
    "cssClass": "mycomponent-wider-popover"
  };
};
function SignUpPage_div_7_ion_item_43_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "ion-item", 11)(1, "ion-select", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](2, SignUpPage_div_7_ion_item_43_ion_select_option_2_Template, 2, 3, "ion-select-option", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("interfaceOptions", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction0"](2, _c2));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx_r24.socialPlatforms);
  }
}
function SignUpPage_div_7_ion_label_44_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "ion-label", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](4, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](2, 1, "securityquestions"), " ");
  }
}
function SignUpPage_div_7_ion_item_45_ion_select_option_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "ion-select-option", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const question_r55 = ctx.$implicit;
    const i_r56 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("value", question_r55.type)("selected", i_r56 === 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](question_r55.question);
  }
}
function SignUpPage_div_7_ion_item_45_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "ion-item", 11)(1, "ion-select", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](2, SignUpPage_div_7_ion_item_45_ion_select_option_2_Template, 2, 3, "ion-select-option", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx_r26.questions);
  }
}
function SignUpPage_div_7_ion_label_46_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "ion-label", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](4, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](2, 1, "securityanswer"), " ");
  }
}
function SignUpPage_div_7_ion_item_47_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "ion-item", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "ion-input", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](2, 1, "securityanswerPlcHldr"));
  }
}
function SignUpPage_div_7_div_48_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 28)(1, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](3, 1, "Signup.seqAns_req"));
  }
}
function SignUpPage_div_7_div_49_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 28)(1, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](3, 1, "Signup.seqAnsLength_req"));
  }
}
function SignUpPage_div_7_p_50_Template(rf, ctx) {
  if (rf & 1) {
    const _r58 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "p", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](4, " *");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](5, "img", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function SignUpPage_div_7_p_50_Template_img_click_5_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r58);
      const ctx_r57 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r57.openPopup2($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](2, 1, "Signup.secureword"), " ");
  }
}
function SignUpPage_div_7_ion_item_51_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "ion-item", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "ion-input", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](2, 1, "Signup.secureword"));
  }
}
function SignUpPage_div_7_div_52_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 28)(1, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](3, 1, "Signup.secureword_req"));
  }
}
function SignUpPage_div_7_div_53_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 28)(1, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](3, 1, "Signup.minNewSecureWord"));
  }
}
function SignUpPage_div_7_div_54_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 28)(1, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](3, 1, "Signup.maxNewSecureWord"));
  }
}
function SignUpPage_div_7_ion_label_55_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "ion-label", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](2, 1, "Thismaybeusedforautheticationpurpose"));
  }
}
function SignUpPage_div_7_ion_label_56_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "ion-label", 52)(1, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](4, 1, "Allfieldsarecompulsory"), "");
  }
}
function SignUpPage_div_7_ion_row_57_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "ion-row", 53)(1, "ion-col", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](2, "ion-checkbox", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "ion-col", 56)(4, "ion-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](6, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](7, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](8, " *");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](6, 1, "termsandconditions"));
  }
}
function SignUpPage_div_7_div_58_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 28)(1, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](3, 1, "Signup.TandM_req"));
  }
}
function SignUpPage_div_7_ion_row_59_ion_button_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r61 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "ion-button", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function SignUpPage_div_7_ion_row_59_ion_button_1_Template_ion_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r61);
      const ctx_r60 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r60.signUpUser());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r59 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("disabled", !ctx_r59.signUpForm.controls.name.valid || !ctx_r59.signUpForm.controls.email.valid || !ctx_r59.signUpForm.controls.securityQuestion.valid || !ctx_r59.signUpForm.controls.securityAns.valid || !ctx_r59.signUpForm.controls.terms_and_conditions.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](2, 2, "submit"));
  }
}
function SignUpPage_div_7_ion_row_59_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "ion-row", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, SignUpPage_div_7_ion_row_59_ion_button_1_Template, 3, 4, "ion-button", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r40.isValidUser);
  }
}
const _c3 = function (a0) {
  return {
    "darkInputText": a0
  };
};
function SignUpPage_div_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r63 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 6)(1, "form", 7)(2, "p", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](5, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](6, " *");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](7, SignUpPage_div_7_img_7_Template, 1, 0, "img", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](8, "ion-item", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](9, "ion-input", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](10, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](11, SignUpPage_div_7_div_11_Template, 4, 3, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](12, SignUpPage_div_7_div_12_Template, 4, 3, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](13, "p", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](15, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](16, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](17, " *");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](18, SignUpPage_div_7_img_18_Template, 1, 0, "img", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](19, "ion-item", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](20, "ion-input", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](21, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](22, SignUpPage_div_7_div_22_Template, 4, 3, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](23, SignUpPage_div_7_div_23_Template, 4, 3, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](24, "ion-label", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function SignUpPage_div_7_Template_ion_label_click_24_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r63);
      const ctx_r62 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r62.forgotPolicyNumber());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](25);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](26, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](27, SignUpPage_div_7_ion_label_27_Template, 5, 3, "ion-label", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](28, SignUpPage_div_7_ion_row_28_Template, 7, 0, "ion-row", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](29, SignUpPage_div_7_ion_item_29_Template, 4, 3, "ion-item", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](30, SignUpPage_div_7_div_30_Template, 4, 3, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](31, SignUpPage_div_7_ion_label_31_Template, 5, 3, "ion-label", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](32, SignUpPage_div_7_ion_row_32_Template, 5, 4, "ion-row", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](33, SignUpPage_div_7_ion_label_33_Template, 5, 3, "ion-label", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](34, SignUpPage_div_7_ion_item_34_Template, 3, 3, "ion-item", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](35, SignUpPage_div_7_div_35_Template, 4, 3, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](36, SignUpPage_div_7_div_36_Template, 4, 3, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](37, SignUpPage_div_7_ion_label_37_Template, 5, 3, "ion-label", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](38, SignUpPage_div_7_ion_item_38_Template, 3, 3, "ion-item", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](39, SignUpPage_div_7_ion_label_39_Template, 3, 3, "ion-label", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](40, SignUpPage_div_7_div_40_Template, 4, 3, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](41, SignUpPage_div_7_div_41_Template, 4, 3, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](42, SignUpPage_div_7_ion_label_42_Template, 5, 3, "ion-label", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](43, SignUpPage_div_7_ion_item_43_Template, 3, 3, "ion-item", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](44, SignUpPage_div_7_ion_label_44_Template, 5, 3, "ion-label", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](45, SignUpPage_div_7_ion_item_45_Template, 3, 1, "ion-item", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](46, SignUpPage_div_7_ion_label_46_Template, 5, 3, "ion-label", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](47, SignUpPage_div_7_ion_item_47_Template, 3, 3, "ion-item", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](48, SignUpPage_div_7_div_48_Template, 4, 3, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](49, SignUpPage_div_7_div_49_Template, 4, 3, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](50, SignUpPage_div_7_p_50_Template, 6, 3, "p", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](51, SignUpPage_div_7_ion_item_51_Template, 3, 3, "ion-item", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](52, SignUpPage_div_7_div_52_Template, 4, 3, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](53, SignUpPage_div_7_div_53_Template, 4, 3, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](54, SignUpPage_div_7_div_54_Template, 4, 3, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](55, SignUpPage_div_7_ion_label_55_Template, 3, 3, "ion-label", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](56, SignUpPage_div_7_ion_label_56_Template, 5, 3, "ion-label", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](57, SignUpPage_div_7_ion_row_57_Template, 9, 3, "ion-row", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](58, SignUpPage_div_7_div_58_Template, 4, 3, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](59, SignUpPage_div_7_ion_row_59_Template, 2, 1, "ion-row", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("formGroup", ctx_r0.signUpForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](4, 49, "identitynumber"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", !ctx_r0.isValidUser);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpropertyInterpolate"]("disabled", ctx_r0.isValidUser);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](10, 51, "newnricotheridentification"));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction1"](59, _c3, ctx_r0.isValidUser));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r0.signUpForm.get("identityNumber").hasError("required") && ctx_r0.signUpForm.get("identityNumber").touched);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r0.signUpForm.get("identityNumber").hasError("minlength") && ctx_r0.signUpForm.get("identityNumber").touched);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](15, 53, "policycontractnumber"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", !ctx_r0.isValidUser);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpropertyInterpolate"]("disabled", ctx_r0.isValidUser);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](21, 55, "policycontractcertificatenumber"));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction1"](61, _c3, ctx_r0.isValidUser));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r0.signUpForm.get("policyNo").hasError("required") && ctx_r0.signUpForm.get("policyNo").touched);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r0.signUpForm.get("policyNo").hasError("minlength") && ctx_r0.signUpForm.get("policyNo").touched);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](26, 57, "Signup.forgot_policy_text"));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", !ctx_r0.isValidUser);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", !ctx_r0.isValidUser);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", !ctx_r0.isValidUser);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r0.signUpForm.get("captcha").hasError("required") && ctx_r0.signUpForm.get("captcha").touched && !ctx_r0.isValidUser);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", !ctx_r0.isValidUser);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", !ctx_r0.isValidUser);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r0.isValidUser);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r0.isValidUser);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r0.signUpForm.get("name").hasError("required") && ctx_r0.signUpForm.get("name").touched);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r0.signUpForm.get("name").hasError("minlength") && ctx_r0.signUpForm.get("name").touched);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r0.isValidUser);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r0.isValidUser);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r0.isValidUser);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r0.signUpForm.get("email").hasError("required") && ctx_r0.signUpForm.get("email").touched);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", !ctx_r0.signUpForm.get("email").hasError("required") && ctx_r0.signUpForm.get("email").hasError("pattern") && ctx_r0.signUpForm.get("email").touched);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r0.isValidUser);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r0.isValidUser);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r0.isValidUser);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r0.isValidUser);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r0.isValidUser);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r0.isValidUser);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r0.signUpForm.get("securityAns").hasError("required") && ctx_r0.signUpForm.get("securityAns").touched);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r0.signUpForm.get("securityAns").hasError("minlength") && ctx_r0.signUpForm.get("securityAns").touched);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r0.isValidUser);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r0.isValidUser);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r0.signUpForm.get("secureword").hasError("required") && ctx_r0.signUpForm.get("secureword").touched);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r0.signUpForm.get("secureword").hasError("minlength") && ctx_r0.signUpForm.get("secureword").touched);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r0.signUpForm.get("secureword").hasError("maxlength") && ctx_r0.signUpForm.get("secureword").touched);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r0.isValidUser);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r0.isValidUser);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r0.isValidUser);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r0.signUpForm.controls.terms_and_conditions.value === false && ctx_r0.signUpForm.get("terms_and_conditions").touched);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r0.isValidUser);
  }
}
function SignUpPage_section_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r65 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "section", 60)(1, "div", 61)(2, "div", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](3, "i", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "ion-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](6, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](7, "ion-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](9, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](10, "ion-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](12, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](13, "ion-row", 64)(14, "ion-button", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function SignUpPage_section_8_Template_ion_button_click_14_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r65);
      const ctx_r64 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r64.navigateToLogin());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](16, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](6, 4, "thankyou1"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](9, 6, "thankyou2"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](12, 8, "thankyou3"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](16, 10, "clickheretologin"));
  }
}
class SignUpPage {
  constructor(formBuilder, securityQuesService, utils, translate, logger, popOverCtrl, signUpService, changeRef, alertCtrl, router, menuControl) {
    this.formBuilder = formBuilder;
    this.securityQuesService = securityQuesService;
    this.utils = utils;
    this.translate = translate;
    this.logger = logger;
    this.popOverCtrl = popOverCtrl;
    this.signUpService = signUpService;
    this.changeRef = changeRef;
    this.alertCtrl = alertCtrl;
    this.router = router;
    this.menuControl = menuControl;
    this.isValidUser = false;
    this.isShowingLoader = false;
    this.canTryAgain = false;
    this.ShowIdentityReqError = false;
    this.ShowIdentityLengthError = false;
    this.str1 = "one";
    this.str2 = "two";
    this.str3 = "seven";
    /** this method is to get security questions -  adapter call */
    this.requestForSecurityQuestions = function () {
      this.logger.trace("Security Questions--SignUp--start");
      if (this.utils.isDeviceOnLine()) {
        this.securityQuesService.getSecurityQuestions().then(result => {
          try {
            this.questions = result.responseJSON.array;
            this.signUpForm.controls["securityQuestion"].setValue(this.questions[0]["Type"], {
              onlySelf: true
            });
            this.getSocialPlatformlist();
          } catch (e) {
            this.utils.dissmisProgressLoader();
            let errorMsg = this.translate.instant("generic_msgs.server_err");
            this.utils.showAlert("", errorMsg);
          }
        }, err => {
          this.utils.dissmisProgressLoader();
          let errorMsg = this.utils.handleServiceException(err);
          this.utils.showAlert("", errorMsg);
        });
      } else {
        let errorMsg = this.translate.instant("generic_msgs.network_err");
        this.utils.showAlert("", errorMsg);
      }
    };
    /** this method is to signup the user after valid check */
    this.signUpUser = function () {
      if (this.signUpForm.controls.name.valid && this.signUpForm.controls.email.valid && this.signUpForm.controls.securityAns.valid && this.signUpForm.controls.terms_and_conditions.value && this.signUpForm.controls.sourceofInfo.value && this.signUpForm.controls.secureword.valid) {
        if (this.utils.isDeviceOnLine()) {
          this.logger.trace("Post Registration Submit--SignUp--start");
          this.utils.showProgressLoader();
          var identityNo = this.signUpForm.controls.identityNumber.value;
          var policyNo = this.signUpForm.controls.policyNo.value;
          var name = this.signUpForm.controls.name.value;
          var email = this.signUpForm.controls.email.value;
          var sourceofInfo = this.signUpForm.controls.sourceofInfo.value;
          var securityQuestion = this.signUpForm.controls.securityQuestion.value;
          var securityAns = this.signUpForm.controls.securityAns.value;
          var secureword = this.signUpForm.controls.secureword.value;
          var receiveNotifications = "No";
          var terms_and_conditions = this.signUpForm.controls.terms_and_conditions.value ? "Yes" : "No";
          this.signUpService.postRegistartionSubmit(identityNo, policyNo, name, email, sourceofInfo, securityQuestion, securityAns, secureword, receiveNotifications, terms_and_conditions).then(res => {
            try {
              this.utils.dissmisProgressLoader();
              this.isRegistered = true;
              if (res["responseJSON"] && res["responseJSON"]["statusCode"] == http_status_codes__WEBPACK_IMPORTED_MODULE_8__.OK) {
                this.errorMsg = res["responseJSON"]["userMessage"] || this.translate.instant("Signup.reg_success");
                this.isSuccess = true;
                this.showDialog("", this.errorMsg);
              } else if (res["responseJSON"] && res["responseJSON"]["statusCode"] == http_status_codes__WEBPACK_IMPORTED_MODULE_8__.ACCEPTED) {
                this.errorMsg = res["responseJSON"]["userMessage"] || this.translate.instant("Signup.reg_success");
                this.showDialog("", this.errorMsg);
              }
            } catch (e) {
              this.utils.dissmisProgressLoader();
              this.isRegistered = false;
              let errorMsg = this.translate.instant("generic_msgs.server_err");
              this.utils.showAlert("", errorMsg);
            }
          }, err => {
            this.utils.dissmisProgressLoader();
            this.isRegistered = false;
            let errorMsg = this.utils.handleServiceException(err);
            this.utils.showAlert("", errorMsg);
          });
        } else {
          let errorMsg = this.translate.instant("generic_msgs.network_err");
          this.utils.showAlert("", errorMsg);
        }
      }
    };
    this.checkUser = function () {
      // this.isValidUser = true;
      // this.requestForSecurityQuestions();
      if (this.signUpForm.controls.identityNumber.valid && this.signUpForm.controls.policyNo.valid && this.signUpForm.controls.captcha.valid) {
        /**Check enetered captcha and generated are same or not */
        if (this.mainCaptcha.trim() != this.signUpForm.controls.captcha.value.trim()) {
          this.refreshCaptcha();
          this.utils.showAlert("", this.translate.instant("Signup.captcha_error"));
          return;
        }
        this.logger.trace("Validate User--SignUp--start");
        if (this.utils.isDeviceOnLine()) {
          this.utils.showProgressLoader();
          var identityNo = this.signUpForm.controls.identityNumber.value.trim();
          var policyNo = this.signUpForm.controls.policyNo.value.trim();
          this.signUpService.postRegistartionCheck(identityNo, policyNo).then(res => {
            try {
              if (res["responseJSON"]) {
                if (res["responseJSON"]["statusCode"] == http_status_codes__WEBPACK_IMPORTED_MODULE_8__.ACCEPTED || res["responseJSON"]["statusCode"] == http_status_codes__WEBPACK_IMPORTED_MODULE_8__.OK) {
                  this.isValidUser = true;
                  this.requestForSecurityQuestions();
                } else {
                  this.refreshCaptcha();
                  this.utils.dissmisProgressLoader();
                  this.isValidUser = false;
                  let errorMsg = res["responseJSON"]["message"] || res["responseJSON"]["userMessage"] || this.translate.instant("generic_msgs.server_err");
                  this.utils.showAlert("", errorMsg);
                }
              } else {
                this.refreshCaptcha();
                this.utils.dissmisProgressLoader();
                this.isValidUser = false;
                let errorMsg = res["responseJSON"]["message"] || res["responseJSON"]["userMessage"] || this.translate.instant("generic_msgs.server_err");
                this.utils.showAlert("", errorMsg);
              }
            } catch (e) {
              this.refreshCaptcha();
              this.utils.dissmisProgressLoader();
              this.isValidUser = false;
              let errorMsg = res["responseJSON"]["message"] || res["responseJSON"]["userMessage"] || this.translate.instant("generic_msgs.server_err");
              this.utils.showAlert("", errorMsg);
            }
          }, err => {
            //if any service error, or already existed user
            this.refreshCaptcha();
            this.utils.dissmisProgressLoader();
            this.isValidUser = false;
            let errorMsg = this.utils.handleServiceException(err); // adapter exception handler
            this.utils.showAlert("", errorMsg);
          });
        } else {
          let errorMsg = this.translate.instant("generic_msgs.network_err");
          this.utils.showAlert("", errorMsg);
        }
      }
    };
    let EMAIL_PATTERN = src_providers_utils_config__WEBPACK_IMPORTED_MODULE_2__.ConfigProvider.EMAIL_PATTERN;
    this.signUpForm = this.formBuilder.group({
      identityNumber: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.minLength(3)]],
      policyNo: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.minLength(3)]],
      captcha: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required],
      name: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.minLength(3)]],
      email: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.pattern(EMAIL_PATTERN)]],
      sourceofInfo: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required],
      securityQuestion: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required],
      securityAns: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.minLength(1)]],
      secureword: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.minLength(4), _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.maxLength(10)]],
      terms_and_conditions: [{
        value: true,
        disabled: false
      }]
    });
    this.isValidUser = false;
    this.isRegistered = false;
  }
  ngOnInit() {
    console.log("1");
    // this.initialiseCanvas()
    //this.initializeForm();
  }

  ionViewDidEnter() {
    this.menuControl.enable(true, 'first');
    this.utils.component.emit(src_app_app_component__WEBPACK_IMPORTED_MODULE_0__.MenuOptions.SIGN_UP);
  }
  getSocialPlatformlist() {
    if (this.utils.isDeviceOnLine()) {
      this.securityQuesService.getSocialData().then(res => {
        try {
          if (res["responseJSON"] && res["status"] == 200) {
            this.socialPlatforms = res["responseJSON"]["registrationData"].socialPlatforms;
            this.signUpForm.controls["sourceofInfo"].setValue(this.socialPlatforms[0]["type"], {
              onlySelf: true
            });
            this.utils.dissmisProgressLoader();
          } else {
            this.utils.dissmisProgressLoader();
            this.logger.error("GET Banks list: " + JSON.stringify(res));
            this.errorMsg = this.translate.instant("generic_msgs.server_err");
          }
        } catch (e) {
          this.isShowingLoader = false;
          this.canTryAgain = true;
          this.logger.error("get banks catch eror : " + JSON.stringify(e));
          this.errorMsg = this.translate.instant("generic_msgs.server_err");
        }
      }, err => {
        this.isShowingLoader = false;
        this.errorMsg = this.utils.handleServiceException(err);
      });
    } else {
      this.isShowingLoader = false;
      this.canTryAgain = true;
      this.logger.error("Get Banks generic_msgs.network_err");
      this.errorMsg = this.translate.instant("generic_msgs.network_err");
    }
  }
  /**navigate to login page */
  navigateToLogin() {
    this.router.navigate(['/login-first']);
    //this.navCtrl.setRoot(LoginFirstPage, { direction: "forward" });
  }

  /** ON LOAD OF PAGE THIS METHOD WILL CALL */
  // eslint-disable-next-line @angular-eslint/use-lifecycle-interface
  ngAfterViewInit() {
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
    var alpha = new Array("A", "B", "C", "D", "E", "F", "G", "H", "J", "K", "M", "N", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "j", "k", "m", "n", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z");
    var i;
    var code = "";
    for (i = 0; i < 6; i++) {
      code = code + alpha[this.utils.getRandomInt()] + "";
    }
    this.mainCaptcha = code;
    this._CONTEXT = this._CANVAS.getContext("2d");
    // console.log(this._CONTEXT);
    this._CONTEXT.fillStyle = "white";
    this._CONTEXT.clearRect(0, 0, this._CANVAS.width, this._CANVAS.height);
    this._CONTEXT.font = "15px Arial";
    this._CONTEXT.textAlign = "center";
    this._CONTEXT.style;
    this._CONTEXT.fillText(code, 100, 30);
  }
  /**on click of refresh in signup page -  to re-generate new captcha */
  refreshCaptcha() {
    this.captchIn["_isFocus"] = false;
    this.signUpForm["controls"]["captcha"].reset();
    this.signUpForm["controls"]["captcha"].markAsUntouched();
    this.signUpForm["controls"]["captcha"].markAsPristine();
    this.signUpForm["controls"]["captcha"].updateValueAndValidity();
    this.setupCanvas();
  }
  /**To remove enterd captcha in text filed if not alpha */
  keyUpChecker(event) {
    let newValue = event.target.value;
    let regExp = new RegExp("[A-Za-z]");
    if (!regExp.test(newValue)) {
      event.target.value = newValue.slice(0, -1);
    }
  }
  // async openPopup(e: Event) {
  //   const popover = await this.popOverCtrl.create({
  //     component: PopoverContentPage,
  //     event: e,
  //     componentProps: { msg: this.str1 },
  //     cssClass: 'custom-popover'
  //   });
  //   await popover.present();
  // }
  openPopup(e) {
    return (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__awaiter)(this, void 0, void 0, function* () {
      const popover = yield this.popOverCtrl.create({
        component: _popover_content_popover_content_page__WEBPACK_IMPORTED_MODULE_1__.PopoverContentPage,
        showBackdrop: false,
        event: e,
        componentProps: {
          msg: this.str1
        },
        cssClass: 'custom-popover'
      });
      yield popover.present();
    });
  }
  openPopup1(e) {
    return (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__awaiter)(this, void 0, void 0, function* () {
      const popover = yield this.popOverCtrl.create({
        component: _popover_content_popover_content_page__WEBPACK_IMPORTED_MODULE_1__.PopoverContentPage,
        showBackdrop: false,
        event: e,
        componentProps: {
          msg: this.str2
        },
        cssClass: 'custom-popover'
      });
      yield popover.present();
    });
  }
  openPopup2(e) {
    return (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__awaiter)(this, void 0, void 0, function* () {
      const popover = yield this.popOverCtrl.create({
        component: _popover_content_popover_content_page__WEBPACK_IMPORTED_MODULE_1__.PopoverContentPage,
        showBackdrop: false,
        event: e,
        componentProps: {
          msg: this.str3
        },
        cssClass: 'custom-popover'
      });
      yield popover.present();
    });
  }
  //This Methode will call when user will click on the Forgot Policy Number
  forgotPolicyNumber() {
    var identityNo = this.signUpForm.controls.identityNumber.value;
    if (!identityNo) {
      this.errorMsg = this.translate.instant("Signup.identityNo_req");
      this.showDialog("", this.errorMsg);
    } else {
      if (identityNo.length > 2) {
        //this.showDialog("", "Identity No should be greater than 2 characters");
        this.utils.showProgressLoader();
        var userRegistered = false; //User is not registered as of now so this field will be false.
        var mobileOs = "AOS";
        if (this.utils.getPlatform() == "ios") {
          mobileOs = "IOS";
        }
        this.signUpService.postForgotPolicyNumber(identityNo, userRegistered, mobileOs).then(res => {
          try {
            if (res["responseJSON"] && res["responseJSON"]["statusCode"] == http_status_codes__WEBPACK_IMPORTED_MODULE_8__.ACCEPTED) {
              this.errorMsg = res["responseJSON"]["userMessage"];
              this.utils.dissmisProgressLoader();
              this.showDialog("", this.errorMsg);
            }
          } catch (e) {
            this.utils.dissmisProgressLoader();
            this.isRegistered = false;
            let errorMsg = this.translate.instant("generic_msgs.server_err");
            this.presentAlert("", errorMsg);
          }
        }, err => {
          this.utils.dissmisProgressLoader();
          this.isRegistered = false;
          let errorMsg = this.utils.handleServiceException(err);
          this.presentAlert("", errorMsg);
        });
      }
    }
  }
  /**
   *
   * @param title - this is the title of the alert
   * @param message  - message that need to display on the alert.
   */
  showDialog(title, message) {
    let buttons = [{
      text: "Ok",
      cssClass: 'alertbutton'
      // handler: () => {
      //    this.navCtrl.pop();
      // }
    }];
    // let alert = this.alertCtrl.create({
    //   title: title,
    //   message: message,
    //   buttons: buttons,
    //   enableBackdropDismiss: false,
    // });
    // return alert.present();
    const alert = this.alertCtrl.create({
      header: title,
      message: message,
      buttons: buttons
    }).then(alert => alert.present());
  }
  presentAlert(title, message, enableBackdropDismiss, buttons) {
    return (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__awaiter)(this, void 0, void 0, function* () {
      let alert = this.alertCtrl.create({
        message: title,
        buttons: ['ok']
      });
      (yield alert).present();
    });
  }
}
SignUpPage.ɵfac = function SignUpPage_Factory(t) {
  return new (t || SignUpPage)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_securityQuestionsService__WEBPACK_IMPORTED_MODULE_3__.SecurityQuestionsService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_providers_utils_utils_service__WEBPACK_IMPORTED_MODULE_4__.UtilService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__.TranslateService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_providers_logger_service_logger_service__WEBPACK_IMPORTED_MODULE_5__.LoggerServiceProvider), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_12__.PopoverController), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_sign_up_service__WEBPACK_IMPORTED_MODULE_6__.SignUpServiceProvider), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_7__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_12__.AlertController), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_13__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_12__.MenuController));
};
SignUpPage.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({
  type: SignUpPage,
  selectors: [["app-sign-up"]],
  viewQuery: function SignUpPage_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵviewQuery"](_c0, 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵviewQuery"](_c1, 5);
    }
    if (rf & 2) {
      let _t;
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵloadQuery"]()) && (ctx.canvasEl = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵloadQuery"]()) && (ctx.captchIn = _t.first);
    }
  },
  decls: 9,
  vars: 5,
  consts: [["mode", "ios"], ["color", "primary", 1, "toolbar"], ["slot", "start", "auto-hide", "false", "color", "secondary"], [1, "text_color_base", "padding_15", "ion-padding"], ["class", "white_container_border_radius padding_15", 4, "ngIf"], ["class", "ion-padding", 4, "ngIf"], [1, "white_container_border_radius", "padding_15"], [1, "padding_15", 3, "formGroup"], ["stacked", "", "clear", ""], [1, "mandatory_star"], ["src", "../../../assets/imgs/circle-question-solid.svg", "alt", "...", "style", "width: 15px; float: right;", 3, "click", 4, "ngIf"], ["lines", "none", 1, "border"], ["restrict-input", "", "restrictInput", "alphanumeric", "amaxlength", "40", "type", "text", "formControlName", "identityNumber", 3, "disabled", "placeholder", "ngClass"], ["class", "errPosition", 4, "ngIf"], ["stacked", ""], ["restrict-input", "", "restrictInput", "alphanumeric", "amaxlength", "40", "formControlName", "policyNo", 3, "disabled", "placeholder", "ngClass"], [1, "forgotPolicyLink", 3, "click"], ["stacked", "", "class", "label", 4, "ngIf"], [4, "ngIf"], ["lines", "none", "class", "border", 4, "ngIf"], ["class", "mandatoryText", 4, "ngIf"], ["stacked", "", 4, "ngIf"], ["class", "italic_font", 4, "ngIf"], ["stacked", "", "class", "longtextLable", 4, "ngIf"], ["style", "font-size:15px;", "class", "italic_font", 4, "ngIf"], ["class", "terms_conditions flex", 4, "ngIf"], ["ion-text-center", "", 4, "ngIf"], ["src", "../../../assets/imgs/circle-question-solid.svg", "alt", "...", 2, "width", "15px", "float", "right", 3, "click"], [1, "errPosition"], ["stacked", "", 1, "label"], ["size", "10"], [1, "canvas_background"], ["canvas", ""], [2, "margin-top", "17px"], ["size", "2", 1, "canvas_background", "padding_15", 3, "click"], [1, "fas", "fa-redo-alt", "refreshiconsize"], ["restrict-input", "", "restrictInput", "alphanumeric", "formControlName", "captcha", 3, "placeholder"], ["captchInput", ""], [1, "mandatoryText"], ["size", "6", "ion-text-center", "", "offset", "3", 1, "subBtn"], [1, "btn_center1", 3, "disabled", "click"], ["restrict-input", "", "restrictInput", "name", "amaxlength", "100", "formControlName", "name", 3, "placeholder"], ["type", "email", "restrict-input", "", "restrictInput", "username", "formControlName", "email", 3, "placeholder"], [1, "italic_font"], ["stacked", "", 1, "longtextLable"], ["slot", "start", "select-option", "", "interface", "popover", "mode", "md", "formControlName", "sourceofInfo", 3, "interfaceOptions"], [3, "value", "selected", 4, "ngFor", "ngForOf"], [3, "value", "selected"], ["select-option", "", "placeholder", "Enter The Security Questions", "interface", "popover", "mode", "md", "formControlName", "securityQuestion"], ["restrict-input", "", "restrictInput", "alphanumericwithspace", "amaxlength", "50", "formControlName", "securityAns", 3, "placeholder"], ["src", "../../../assets/imgs/circle-question-solid.svg", "alt", "...", 2, "width", "20px", "float", "right", 3, "click"], ["restrict-input", "", "restrictInput", "alphanumericwithspace", "amaxlength", "10", "type", "text", "formControlName", "secureword", 3, "placeholder"], [1, "italic_font", 2, "font-size", "15px"], [1, "terms_conditions", "flex"], ["size", "1", 2, "padding-top", "15px"], ["mode", "md", "formControlName", "terms_and_conditions"], ["size", "11"], ["ion-text-center", ""], ["ion-button", "", "class", "btn_center", 3, "disabled", "click", 4, "ngIf"], ["ion-button", "", 1, "btn_center", 3, "disabled", "click"], [1, "ion-padding"], ["ion-text-center", "", 1, "white_container_border_radius", "ion-padding"], ["ion-text-center", "", 1, "tick_icon"], [1, "fas", "fa-check-circle"], ["text-center", ""], ["ion-button", "", 1, "btn_center", 3, "click"]],
  template: function SignUpPage_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "ion-header", 0)(1, "ion-toolbar", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](2, "ion-menu-button", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "ion-title");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](5, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](6, "ion-content", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](7, SignUpPage_div_7_Template, 60, 63, "div", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](8, SignUpPage_section_8_Template, 17, 12, "section", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](5, 3, "newuser"), " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", !ctx.isRegistered);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.isRegistered);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_14__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_14__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_14__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NgControlStatusGroup, _ionic_angular__WEBPACK_IMPORTED_MODULE_12__.IonButton, _ionic_angular__WEBPACK_IMPORTED_MODULE_12__.IonCheckbox, _ionic_angular__WEBPACK_IMPORTED_MODULE_12__.IonCol, _ionic_angular__WEBPACK_IMPORTED_MODULE_12__.IonContent, _ionic_angular__WEBPACK_IMPORTED_MODULE_12__.IonHeader, _ionic_angular__WEBPACK_IMPORTED_MODULE_12__.IonInput, _ionic_angular__WEBPACK_IMPORTED_MODULE_12__.IonItem, _ionic_angular__WEBPACK_IMPORTED_MODULE_12__.IonLabel, _ionic_angular__WEBPACK_IMPORTED_MODULE_12__.IonMenuButton, _ionic_angular__WEBPACK_IMPORTED_MODULE_12__.IonRow, _ionic_angular__WEBPACK_IMPORTED_MODULE_12__.IonSelect, _ionic_angular__WEBPACK_IMPORTED_MODULE_12__.IonSelectOption, _ionic_angular__WEBPACK_IMPORTED_MODULE_12__.IonTitle, _ionic_angular__WEBPACK_IMPORTED_MODULE_12__.IonToolbar, _ionic_angular__WEBPACK_IMPORTED_MODULE_12__.BooleanValueAccessor, _ionic_angular__WEBPACK_IMPORTED_MODULE_12__.SelectValueAccessor, _ionic_angular__WEBPACK_IMPORTED_MODULE_12__.TextValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormControlName, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__.TranslatePipe],
  styles: ["ion-content[_ngcontent-%COMP%] {\n  --background: url(/../assets/imgs/register_bg.jpg) no-repeat center center /\n    cover;\n}\nion-content[_ngcontent-%COMP%]   .white_container_border_radius[_ngcontent-%COMP%] {\n  background-color: rgba(255, 255, 255, 0.7) !important;\n  border-radius: 15px !important;\n}\nion-content[_ngcontent-%COMP%]   .text_color_base[_ngcontent-%COMP%] {\n  color: --ion-color-secondary !important;\n}\nion-content[_ngcontent-%COMP%]   .padding_15[_ngcontent-%COMP%] {\n  padding: 15px !important;\n}\nion-content[_ngcontent-%COMP%]   .mandatory_star[_ngcontent-%COMP%] {\n  color: #f00;\n}\nion-content[_ngcontent-%COMP%]   .errPosition[_ngcontent-%COMP%] {\n  margin-top: 4px;\n}\nion-content[_ngcontent-%COMP%]   .btn_center[_ngcontent-%COMP%] {\n  text-transform: capitalize;\n  --background: #002d3d !important;\n  color: white;\n  margin-top: 15px;\n  --border-radius: 10px !important;\n  min-width: 200px;\n  min-height: 45px;\n  width: 100% !important;\n  font-family: Agenda-Regular !important;\n}\nion-content[_ngcontent-%COMP%]   .btn_center1[_ngcontent-%COMP%] {\n  text-transform: capitalize;\n  --background: #002d3d !important;\n  color: white;\n  margin-top: 15px;\n  --border-radius: 10px !important;\n  min-width: 200px;\n  margin-left: -31px;\n  min-height: 45px;\n  width: 100% !important;\n  font-family: Agenda-Regular !important;\n}\nion-content[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%] {\n  padding-left: 0px;\n  background: transparent;\n}\nion-content[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   .item-input.ng-valid.item-input-has-value[_ngcontent-%COMP%]:not(.input-has-focus):not(.item-input-has-focus)   .item-inner[_ngcontent-%COMP%], ion-content[_ngcontent-%COMP%]   .item.item-input.ng-valid.input-has-value[_ngcontent-%COMP%]:not(.input-has-focus):not(.item-input-has-focus)   .item-inner[_ngcontent-%COMP%] {\n  border-bottom-color: none !important;\n  box-shadow: none !important;\n}\nion-content[_ngcontent-%COMP%]   .item-inner[_ngcontent-%COMP%] {\n  padding-right: 0px !important;\n  border-bottom: none !important;\n}\nion-content[_ngcontent-%COMP%]   .input[_ngcontent-%COMP%] {\n  border: 1px solid #eee;\n  padding-right: 0px;\n  background: white;\n}\nion-content[_ngcontent-%COMP%]   .border[_ngcontent-%COMP%] {\n  border: 1px solid #e0e0e0;\n  margin-bottom: 10px;\n}\nion-content[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%] {\n  font-size: 1.2rem !important;\n  color: --ion-color-secondary !important;\n  font-weight: 400;\n}\nion-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 1.3rem;\n}\nion-content[_ngcontent-%COMP%]   .italic_font[_ngcontent-%COMP%] {\n  font-style: italic;\n  font-family: \"Open Sans\", sans-serif;\n  color: --ion-color-secondary !important;\n  font-size: 5px;\n  margin-bottom: 10px;\n  margin-top: 10px;\n  line-height: 24px;\n}\nion-content[_ngcontent-%COMP%]   section[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  height: 100%;\n}\nion-content[_ngcontent-%COMP%]   section[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin-bottom: 25px;\n  padding: 0px 10px;\n  font-size: 1.5 rem;\n}\nion-content[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   .checkbox[_ngcontent-%COMP%] {\n  margin: 0px 10px 0px 0px !important;\n}\nion-content[_ngcontent-%COMP%]   .checkbox-icon[_ngcontent-%COMP%] {\n  border-width: 1px !important;\n}\nion-content[_ngcontent-%COMP%]   .checkbox-checked[_ngcontent-%COMP%] {\n  border-color: var(--ion-color-secondary) !important;\n  background-color: white !important;\n}\nion-content[_ngcontent-%COMP%]   .tick_icon[_ngcontent-%COMP%] {\n  font-size: 5rem;\n  margin-top: -60px !important;\n  color: --ion-color-secondary;\n  padding: 15px;\n}\nion-content[_ngcontent-%COMP%]   .padding_40[_ngcontent-%COMP%] {\n  padding: 40px;\n}\nion-content[_ngcontent-%COMP%]   .popover[_ngcontent-%COMP%]   .radio[_ngcontent-%COMP%]   .radio-icon[_ngcontent-%COMP%] {\n  display: none !important;\n}\nion-content[_ngcontent-%COMP%]   .canvas_background[_ngcontent-%COMP%] {\n  text-align: center;\n  background-color: var(--ion-color-secondary);\n  color: white;\n}\nion-content[_ngcontent-%COMP%]   .item-cover[_ngcontent-%COMP%] {\n  display: none;\n}\nion-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  float: right !important;\n  pointer-events: auto;\n  padding: 5px;\n}\nion-content[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-family: Agenda-Regular;\n  color: --ion-color-secondary;\n  font-size: 17px;\n  margin-bottom: 5px;\n  margin-top: 10px;\n  line-height: 1.42857143;\n}\nion-content[_ngcontent-%COMP%]   .mandatoryText[_ngcontent-%COMP%] {\n  font-family: \"Open Sans\", sans-serif;\n  color: --ion-color-secondary;\n  font-size: 13px;\n  margin-bottom: 10px;\n  margin-top: 10px;\n  line-height: 24px;\n}\nion-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  font-size: 0.85em;\n}\nion-content[_ngcontent-%COMP%]   .text-input-md[_ngcontent-%COMP%] {\n  padding: 0;\n  width: calc(100% - 8px - 8px);\n  min-height: 45px;\n  margin: 0px !important;\n}\nion-content[_ngcontent-%COMP%]   .canvasrow[_ngcontent-%COMP%] {\n  margin-top: 5px;\n}\nion-content[_ngcontent-%COMP%]   .captcha[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%] {\n  margin-right: 0px !important;\n}\nion-content[_ngcontent-%COMP%]   .refreshiconsize[_ngcontent-%COMP%] {\n  font-size: 0.85em !important;\n}\nion-content[_ngcontent-%COMP%]   .longtextLable[_ngcontent-%COMP%] {\n  white-space: normal !important;\n}\nion-content[_ngcontent-%COMP%]   .darkInputText[_ngcontent-%COMP%] {\n  color: Black;\n  font-weight: Bold;\n}\nion-content[_ngcontent-%COMP%]   .forgotPolicyLink[_ngcontent-%COMP%] {\n  font-size: 1rem !important;\n  margin-top: 5px;\n  margin-bottom: 20px;\n  display: block;\n  text-decoration: underline;\n  white-space: unset;\n}\n@media only screen and (max-width: 374px) {\n  ion-content[_ngcontent-%COMP%]   .subBtn[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n    font-size: 15px !important;\n    height: 45px;\n    letter-spacing: 1px;\n    line-height: 45px;\n    padding: 0 10px;\n    text-transform: capitalize;\n    width: 100%;\n    border-radius: 10px;\n    font-family: Agenda-Regular;\n  }\n}\nion-content[_ngcontent-%COMP%]   .coll[_ngcontent-%COMP%] {\n  background-color: #002d3d;\n  color: #fff;\n  text-align: center;\n}\nion-content[_ngcontent-%COMP%]   .width-height[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 55%;\n}\nion-content[_ngcontent-%COMP%]   .flex[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\nion-content[_ngcontent-%COMP%]   ion-checkbox[_ngcontent-%COMP%] {\n  --background-checked:none !important;\n  --border-color-checked:none !important;\n}\nion-content[_ngcontent-%COMP%]     .mycomponent-wider-popover {\n  --width: 95%;\n  --max-width: 400px;\n}\nion-content[_ngcontent-%COMP%]   .alertbutton[_ngcontent-%COMP%] {\n  justify-content: center !important;\n  text-align: center;\n  align-items: center;\n}\nion-content[_ngcontent-%COMP%]   .alert-button-inner.sc-ion-alert-md[_ngcontent-%COMP%] {\n  justify-content: center !important;\n}\nion-content[_ngcontent-%COMP%]   .my-custom-class[_ngcontent-%COMP%]   .alert-wrapper[_ngcontent-%COMP%] {\n  justify-content: center !important;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcGFnZXMvc2lnbi11cC9zaWduLXVwLnBhZ2Uuc2NzcyIsIndlYnBhY2s6Ly8uLy4uLy4uLy4uL0FsbCUyMFByb2plY3RzL01hbGF5c2lhX0NsaWVudEFwcF9SZXZhbXAvU3VuQWNjZXNzX0lvbmljNl9SZXZhbXAvc3JjL2FwcC9wYWdlcy9zaWduLXVwL3NpZ24tdXAucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0U7U0FBQTtBQ0VGO0FEQ0U7RUFDRSxxREFBQTtFQUNBLDhCQUFBO0FDQ0o7QURDRTtFQUNFLHVDQUFBO0FDQ0o7QURFRTtFQUNFLHdCQUFBO0FDQUo7QURFRTtFQUNFLFdBQUE7QUNBSjtBREVFO0VBQ0UsZUFBQTtBQ0FKO0FERUU7RUFDRSwwQkFBQTtFQUNBLGdDQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0NBQUE7RUFDQSxnQkFBQTtFQUdBLGdCQUFBO0VBQ0Esc0JBQUE7RUFDQSxzQ0FBQTtBQ0ZKO0FESUU7RUFDRSwwQkFBQTtFQUNBLGdDQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0NBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBRUEsZ0JBQUE7RUFDQSxzQkFBQTtFQUNBLHNDQUFBO0FDSEo7QURnQkU7RUFDRSxpQkFBQTtFQUNBLHVCQUFBO0FDZEo7QURpQkU7O0VBU0Usb0NBQUE7RUFFQSwyQkFBQTtBQ3RCSjtBRHlCRTtFQUNFLDZCQUFBO0VBQ0EsOEJBQUE7QUN2Qko7QUQwQkU7RUFDRSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7QUN4Qko7QUQwQkU7RUFDRSx5QkFBQTtFQUNBLG1CQUFBO0FDeEJKO0FEMEJFO0VBQ0UsNEJBQUE7RUFDQSx1Q0FBQTtFQUNBLGdCQUFBO0FDeEJKO0FEMkJFO0VBQ0UsaUJBQUE7QUN6Qko7QUQ0QkU7RUFDRSxrQkFBQTtFQUNBLG9DQUFBO0VBQ0EsdUNBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0FDMUJKO0FENkJFO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7QUMzQko7QUQ2QkU7RUFDRSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUMzQko7QUQ4QkU7RUFDRSxtQ0FBQTtBQzVCSjtBRDhCRTtFQUNFLDRCQUFBO0FDNUJKO0FEOEJFO0VBQ0UsbURBQUE7RUFDQSxrQ0FBQTtBQzVCSjtBRCtCRTtFQUNFLGVBQUE7RUFDQSw0QkFBQTtFQUNBLDRCQUFBO0VBQ0EsYUFBQTtBQzdCSjtBRGdDRTtFQUNFLGFBQUE7QUM5Qko7QURpQ0U7RUFDRSx3QkFBQTtBQy9CSjtBRGtDRTtFQUNFLGtCQUFBO0VBRUEsNENBQUE7RUFDQSxZQUFBO0FDakNKO0FENkNFO0VBQ0UsYUFBQTtBQzNDSjtBRDhDRTtFQUNFLHVCQUFBO0VBQ0Esb0JBQUE7RUFDQSxZQUFBO0FDNUNKO0FEOERFO0VBQ0UsMkJBQUE7RUFDQSw0QkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsdUJBQUE7QUM1REo7QUQrREU7RUFDRSxvQ0FBQTtFQUNBLDRCQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtBQzdESjtBRGdFRTtFQUNFLGlCQUFBO0FDOURKO0FEaUVFO0VBQ0UsVUFBQTtFQUNBLDZCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxzQkFBQTtBQy9ESjtBRGtFRTtFQUNFLGVBQUE7QUNoRUo7QURrRUU7RUFDRSw0QkFBQTtBQ2hFSjtBRGtFRTtFQUNFLDRCQUFBO0FDaEVKO0FEbUVFO0VBQ0UsOEJBQUE7QUNqRUo7QURtRUU7RUFDRSxZQUFBO0VBQ0EsaUJBQUE7QUNqRUo7QURtRUU7RUFDRSwwQkFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7RUFDQSwwQkFBQTtFQUNBLGtCQUFBO0FDakVKO0FEbUVFO0VBQ0U7SUFDRSwwQkFBQTtJQUNBLFlBQUE7SUFDQSxtQkFBQTtJQUNBLGlCQUFBO0lBQ0EsZUFBQTtJQUNBLDBCQUFBO0lBQ0EsV0FBQTtJQUNBLG1CQUFBO0lBQ0EsMkJBQUE7RUNqRUo7QUFDRjtBRG1FRTtFQUNFLHlCQUFBO0VBRUEsV0FBQTtFQUNBLGtCQUFBO0FDbEVKO0FEcUVFO0VBQ0UsV0FBQTtFQUNBLFdBQUE7QUNuRUo7QURxRUU7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7QUNuRUo7QURzRUE7RUFDRSxvQ0FBQTtFQUNBLHNDQUFBO0FDcEVGO0FEc0VBO0VBRUUsWUFBQTtFQUNBLGtCQUFBO0FDckVGO0FEdUVBO0VBQ0Usa0NBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0FDckVGO0FEdUVBO0VBRUUsa0NBQUE7QUNyRUY7QUR1RUE7RUFDRSxrQ0FBQTtBQ3JFRiIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jb250ZW50IHtcclxuICAtLWJhY2tncm91bmQ6IHVybCgvLi4vYXNzZXRzL2ltZ3MvcmVnaXN0ZXJfYmcuanBnKSBuby1yZXBlYXQgY2VudGVyIGNlbnRlciAvXHJcbiAgICBjb3ZlcjtcclxuXHJcbiAgLndoaXRlX2NvbnRhaW5lcl9ib3JkZXJfcmFkaXVzIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC43KSAhaW1wb3J0YW50O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTVweCAhaW1wb3J0YW50O1xyXG4gIH1cclxuICAudGV4dF9jb2xvcl9iYXNlIHtcclxuICAgIGNvbG9yOiAtLWlvbi1jb2xvci1zZWNvbmRhcnkgIWltcG9ydGFudDtcclxuICB9XHJcblxyXG4gIC5wYWRkaW5nXzE1IHtcclxuICAgIHBhZGRpbmc6IDE1cHggIWltcG9ydGFudDtcclxuICB9XHJcbiAgLm1hbmRhdG9yeV9zdGFyIHtcclxuICAgIGNvbG9yOiAjZjAwO1xyXG4gIH1cclxuICAuZXJyUG9zaXRpb24ge1xyXG4gICAgbWFyZ2luLXRvcDogNHB4O1xyXG4gIH1cclxuICAuYnRuX2NlbnRlciB7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcclxuICAgIC0tYmFja2dyb3VuZDogIzAwMmQzZCAhaW1wb3J0YW50O1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgbWFyZ2luLXRvcDogMTVweDtcclxuICAgIC0tYm9yZGVyLXJhZGl1czogMTBweCAhaW1wb3J0YW50O1xyXG4gICAgbWluLXdpZHRoOiAyMDBweDtcclxuICAgIC8vIG1hcmdpbi1sZWZ0OiAtMzFweDtcclxuICAgIC8vZm9udC1zaXplOiAxLjdyZW07XHJcbiAgICBtaW4taGVpZ2h0OiA0NXB4O1xyXG4gICAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcclxuICAgIGZvbnQtZmFtaWx5OiBBZ2VuZGEtUmVndWxhciAhaW1wb3J0YW50O1xyXG4gIH1cclxuICAuYnRuX2NlbnRlcjEge1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XHJcbiAgICAtLWJhY2tncm91bmQ6ICMwMDJkM2QgIWltcG9ydGFudDtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIG1hcmdpbi10b3A6IDE1cHg7XHJcbiAgICAtLWJvcmRlci1yYWRpdXM6IDEwcHggIWltcG9ydGFudDtcclxuICAgIG1pbi13aWR0aDogMjAwcHg7XHJcbiAgICBtYXJnaW4tbGVmdDogLTMxcHg7XHJcbiAgICAvL2ZvbnQtc2l6ZTogMS43cmVtO1xyXG4gICAgbWluLWhlaWdodDogNDVweDtcclxuICAgIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XHJcbiAgICBmb250LWZhbWlseTogQWdlbmRhLVJlZ3VsYXIgIWltcG9ydGFudDtcclxuICB9XHJcbiAgLy8gLnN1YkJ0biBidXR0b257XHJcbiAgLy8gICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgLy8gICB3aWR0aDogMjAwcHggIWltcG9ydGFudDtcclxuICAvLyAgIG1hcmdpbi1sZWZ0OiAtMzFweDtcclxuICAvLyAgIGZvbnQtc2l6ZTogMTdweCAhaW1wb3J0YW50O1xyXG4gIC8vICAgaGVpZ2h0OiA0NXB4O1xyXG4gIC8vICAgbGV0dGVyLXNwYWNpbmc6IDFweDtcclxuICAvLyAgIGxpbmUtaGVpZ2h0OiA0NXB4O1xyXG4gIC8vICAgcGFkZGluZzogMCAxMHB4O1xyXG4gIC8vICAgfVxyXG5cclxuICAuaXRlbSB7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDBweDtcclxuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gIH1cclxuXHJcbiAgLml0ZW1cclxuICAgIC5pdGVtLWlucHV0Lm5nLXZhbGlkLml0ZW0taW5wdXQtaGFzLXZhbHVlOm5vdCguaW5wdXQtaGFzLWZvY3VzKTpub3QoXHJcbiAgICAgIC5pdGVtLWlucHV0LWhhcy1mb2N1c1xyXG4gICAgKVxyXG4gICAgLml0ZW0taW5uZXIsXHJcbiAgLml0ZW0uaXRlbS1pbnB1dC5uZy12YWxpZC5pbnB1dC1oYXMtdmFsdWU6bm90KC5pbnB1dC1oYXMtZm9jdXMpOm5vdChcclxuICAgICAgLml0ZW0taW5wdXQtaGFzLWZvY3VzXHJcbiAgICApXHJcbiAgICAuaXRlbS1pbm5lciB7XHJcbiAgICBib3JkZXItYm90dG9tLWNvbG9yOiBub25lICFpbXBvcnRhbnQ7XHJcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudDtcclxuICAgIGJveC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudDtcclxuICB9XHJcblxyXG4gIC5pdGVtLWlubmVyIHtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDBweCAhaW1wb3J0YW50O1xyXG4gICAgYm9yZGVyLWJvdHRvbTogbm9uZSAhaW1wb3J0YW50O1xyXG4gIH1cclxuXHJcbiAgLmlucHV0IHtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNlZWU7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAwcHg7XHJcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICB9XHJcbiAgLmJvcmRlciB7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZTBlMGUwO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxufVxyXG4gIC5sYWJlbCB7XHJcbiAgICBmb250LXNpemU6IDEuMnJlbSAhaW1wb3J0YW50O1xyXG4gICAgY29sb3I6IC0taW9uLWNvbG9yLXNlY29uZGFyeSAhaW1wb3J0YW50O1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgIC8vIG1hcmdpbi1ib3R0b206IDVweCAhaW1wb3J0YW50O1xyXG4gIH1cclxuICBwIHtcclxuICAgIGZvbnQtc2l6ZTogMS4zcmVtO1xyXG4gIH1cclxuXHJcbiAgLml0YWxpY19mb250IHtcclxuICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcclxuICAgIGZvbnQtZmFtaWx5OiBcIk9wZW4gU2Fuc1wiLCBzYW5zLXNlcmlmO1xyXG4gICAgY29sb3I6IC0taW9uLWNvbG9yLXNlY29uZGFyeSAhaW1wb3J0YW50O1xyXG4gICAgZm9udC1zaXplOiA1cHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAyNHB4O1xyXG4gIH1cclxuXHJcbiAgc2VjdGlvbiB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICB9XHJcbiAgc2VjdGlvbiBwIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDI1cHg7XHJcbiAgICBwYWRkaW5nOiAwcHggMTBweDtcclxuICAgIGZvbnQtc2l6ZTogMS41IHJlbTtcclxuICB9XHJcblxyXG4gIC5pdGVtIC5jaGVja2JveCB7XHJcbiAgICBtYXJnaW46IDBweCAxMHB4IDBweCAwcHggIWltcG9ydGFudDtcclxuICB9XHJcbiAgLmNoZWNrYm94LWljb24ge1xyXG4gICAgYm9yZGVyLXdpZHRoOiAxcHggIWltcG9ydGFudDtcclxuICB9XHJcbiAgLmNoZWNrYm94LWNoZWNrZWQge1xyXG4gICAgYm9yZGVyLWNvbG9yOiB2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5KSAhaW1wb3J0YW50O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGUgIWltcG9ydGFudDtcclxuICB9XHJcblxyXG4gIC50aWNrX2ljb24ge1xyXG4gICAgZm9udC1zaXplOiA1cmVtO1xyXG4gICAgbWFyZ2luLXRvcDogLTYwcHggIWltcG9ydGFudDtcclxuICAgIGNvbG9yOiAtLWlvbi1jb2xvci1zZWNvbmRhcnk7XHJcbiAgICBwYWRkaW5nOiAxNXB4O1xyXG4gIH1cclxuXHJcbiAgLnBhZGRpbmdfNDAge1xyXG4gICAgcGFkZGluZzogNDBweDtcclxuICB9XHJcblxyXG4gIC5wb3BvdmVyIC5yYWRpbyAucmFkaW8taWNvbiB7XHJcbiAgICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG5cclxuICAuY2FudmFzX2JhY2tncm91bmQge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG5cclxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWlvbi1jb2xvci1zZWNvbmRhcnkpO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gIH1cclxuXHJcbiAgJHJhZGlvLW1kLWljb24td2lkdGg6IDA7XHJcbiAgJHJhZGlvLW1kLWljb24taGVpZ2h0OiAwO1xyXG4gICRyYWRpby1tZC1pY29uLWJvcmRlci13aWR0aDogMDtcclxuICAkcmFkaW8tbWQtaWNvbi1ib3JkZXItcmFkaXVzOiAwO1xyXG5cclxuICAvLyAuaXRlbS1pbnB1dCBpb24tbGFiZWwge1xyXG4gIC8vICAgLy9pb25pICAgcG9pbnRlci1ldmVudHM6YWxsIWltcG9ydGFudDtcclxuICAvLyB9XHJcblxyXG4gIC5pdGVtLWNvdmVyIHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgfVxyXG5cclxuICBwIGlvbi1pY29uIHtcclxuICAgIGZsb2F0OiByaWdodCAhaW1wb3J0YW50O1xyXG4gICAgcG9pbnRlci1ldmVudHM6IGF1dG87XHJcbiAgICBwYWRkaW5nOiA1cHg7XHJcbiAgfVxyXG5cclxuICAvLyAucG9wb3Zlci1jb250ZW50IHtcclxuICAvLyAgIHdpZHRoOiA4MCUgIWltcG9ydGFudDtcclxuICAvLyAgIG1hcmdpbi1sZWZ0OiAtMTVweCAhaW1wb3J0YW50O1xyXG5cclxuICAvLyAgIC5yYWRpbyxcclxuICAvLyAgIC5yYWRpby1pbm5lcixcclxuICAvLyAgIC5yYWRpby1pY29uIHtcclxuICAvLyAgICAgd2lkdGg6IDBweCAhaW1wb3J0YW50O1xyXG4gIC8vICAgICBoZWlnaHQ6IDBweCAhaW1wb3J0YW50O1xyXG4gIC8vICAgfVxyXG5cclxuICAvLyAgIC5yYWRpby1pY29uIHtcclxuICAvLyAgICAgYm9yZGVyOiAwcHggIWltcG9ydGFudDtcclxuICAvLyAgIH1cclxuICAvLyB9XHJcbiAgZGl2IHAge1xyXG4gICAgZm9udC1mYW1pbHk6IEFnZW5kYS1SZWd1bGFyO1xyXG4gICAgY29sb3I6IC0taW9uLWNvbG9yLXNlY29uZGFyeTtcclxuICAgIGZvbnQtc2l6ZTogMTdweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDVweDtcclxuICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICBsaW5lLWhlaWdodDogMS40Mjg1NzE0MztcclxuICB9XHJcblxyXG4gIC5tYW5kYXRvcnlUZXh0IHtcclxuICAgIGZvbnQtZmFtaWx5OiBcIk9wZW4gU2Fuc1wiLCBzYW5zLXNlcmlmO1xyXG4gICAgY29sb3I6IC0taW9uLWNvbG9yLXNlY29uZGFyeTtcclxuICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDI0cHg7XHJcbiAgfVxyXG5cclxuICBwIGlvbi1pY29uIHtcclxuICAgIGZvbnQtc2l6ZTogMC44NWVtO1xyXG4gIH1cclxuXHJcbiAgLnRleHQtaW5wdXQtbWQge1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIHdpZHRoOiBjYWxjKDEwMCUgLSA4cHggLSA4cHgpO1xyXG4gICAgbWluLWhlaWdodDogNDVweDtcclxuICAgIG1hcmdpbjogMHB4ICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG5cclxuICAuY2FudmFzcm93IHtcclxuICAgIG1hcmdpbi10b3A6IDVweDtcclxuICB9XHJcbiAgLmNhcHRjaGEgaW9uLWxhYmVsIHtcclxuICAgIG1hcmdpbi1yaWdodDogMHB4ICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gIC5yZWZyZXNoaWNvbnNpemUge1xyXG4gICAgZm9udC1zaXplOiAwLjg1ZW0gIWltcG9ydGFudDtcclxuICB9XHJcblxyXG4gIC5sb25ndGV4dExhYmxlIHtcclxuICAgIHdoaXRlLXNwYWNlOiBub3JtYWwgIWltcG9ydGFudDtcclxuICB9XHJcbiAgLmRhcmtJbnB1dFRleHQge1xyXG4gICAgY29sb3I6IEJsYWNrO1xyXG4gICAgZm9udC13ZWlnaHQ6IEJvbGQ7XHJcbiAgfVxyXG4gIC5mb3Jnb3RQb2xpY3lMaW5rIHtcclxuICAgIGZvbnQtc2l6ZTogMXJlbSAhaW1wb3J0YW50O1xyXG4gICAgbWFyZ2luLXRvcDogNXB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XHJcbiAgICB3aGl0ZS1zcGFjZTogdW5zZXQgO1xyXG4gIH1cclxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDM3NHB4KSB7XHJcbiAgICAuc3ViQnRuIGJ1dHRvbiB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTVweCAhaW1wb3J0YW50O1xyXG4gICAgICBoZWlnaHQ6IDQ1cHg7XHJcbiAgICAgIGxldHRlci1zcGFjaW5nOiAxcHg7XHJcbiAgICAgIGxpbmUtaGVpZ2h0OiA0NXB4O1xyXG4gICAgICBwYWRkaW5nOiAwIDEwcHg7XHJcbiAgICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgICAgZm9udC1mYW1pbHk6IEFnZW5kYS1SZWd1bGFyO1xyXG4gICAgfVxyXG4gIH1cclxuICAuY29sbCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAyZDNkO1xyXG4gICAgLy8gYm9yZGVyOiBzb2xpZCAxcHggI2ZmZjtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIH1cclxuXHJcbiAgLndpZHRoLWhlaWdodCB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogNTUlO1xyXG4gIH1cclxuICAuZmxleCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuaW9uLWNoZWNrYm94e1xyXG4gIC0tYmFja2dyb3VuZC1jaGVja2VkOm5vbmUgIWltcG9ydGFudDtcclxuICAtLWJvcmRlci1jb2xvci1jaGVja2VkOm5vbmUgIWltcG9ydGFudDtcclxufVxyXG46Om5nLWRlZXAgLm15Y29tcG9uZW50LXdpZGVyLXBvcG92ZXJcclxue1xyXG4gIC0td2lkdGg6IDk1JTtcclxuICAtLW1heC13aWR0aDogNDAwcHg7XHJcbn1cclxuLmFsZXJ0YnV0dG9ue1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyICFpbXBvcnRhbnQ7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuLmFsZXJ0LWJ1dHRvbi1pbm5lci5zYy1pb24tYWxlcnQtbWQge1xyXG4gIC1tcy1mbGV4LXBhY2s6IGVuZDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlciAhaW1wb3J0YW50O1xyXG59XHJcbi5teS1jdXN0b20tY2xhc3MgLmFsZXJ0LXdyYXBwZXIge1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcblxyXG59XHJcbiIsImlvbi1jb250ZW50IHtcbiAgLS1iYWNrZ3JvdW5kOiB1cmwoLy4uL2Fzc2V0cy9pbWdzL3JlZ2lzdGVyX2JnLmpwZykgbm8tcmVwZWF0IGNlbnRlciBjZW50ZXIgL1xuICAgIGNvdmVyO1xufVxuaW9uLWNvbnRlbnQgLndoaXRlX2NvbnRhaW5lcl9ib3JkZXJfcmFkaXVzIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjcpICFpbXBvcnRhbnQ7XG4gIGJvcmRlci1yYWRpdXM6IDE1cHggIWltcG9ydGFudDtcbn1cbmlvbi1jb250ZW50IC50ZXh0X2NvbG9yX2Jhc2Uge1xuICBjb2xvcjogLS1pb24tY29sb3Itc2Vjb25kYXJ5ICFpbXBvcnRhbnQ7XG59XG5pb24tY29udGVudCAucGFkZGluZ18xNSB7XG4gIHBhZGRpbmc6IDE1cHggIWltcG9ydGFudDtcbn1cbmlvbi1jb250ZW50IC5tYW5kYXRvcnlfc3RhciB7XG4gIGNvbG9yOiAjZjAwO1xufVxuaW9uLWNvbnRlbnQgLmVyclBvc2l0aW9uIHtcbiAgbWFyZ2luLXRvcDogNHB4O1xufVxuaW9uLWNvbnRlbnQgLmJ0bl9jZW50ZXIge1xuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbiAgLS1iYWNrZ3JvdW5kOiAjMDAyZDNkICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgbWFyZ2luLXRvcDogMTVweDtcbiAgLS1ib3JkZXItcmFkaXVzOiAxMHB4ICFpbXBvcnRhbnQ7XG4gIG1pbi13aWR0aDogMjAwcHg7XG4gIG1pbi1oZWlnaHQ6IDQ1cHg7XG4gIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XG4gIGZvbnQtZmFtaWx5OiBBZ2VuZGEtUmVndWxhciAhaW1wb3J0YW50O1xufVxuaW9uLWNvbnRlbnQgLmJ0bl9jZW50ZXIxIHtcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG4gIC0tYmFja2dyb3VuZDogIzAwMmQzZCAhaW1wb3J0YW50O1xuICBjb2xvcjogd2hpdGU7XG4gIG1hcmdpbi10b3A6IDE1cHg7XG4gIC0tYm9yZGVyLXJhZGl1czogMTBweCAhaW1wb3J0YW50O1xuICBtaW4td2lkdGg6IDIwMHB4O1xuICBtYXJnaW4tbGVmdDogLTMxcHg7XG4gIG1pbi1oZWlnaHQ6IDQ1cHg7XG4gIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XG4gIGZvbnQtZmFtaWx5OiBBZ2VuZGEtUmVndWxhciAhaW1wb3J0YW50O1xufVxuaW9uLWNvbnRlbnQgLml0ZW0ge1xuICBwYWRkaW5nLWxlZnQ6IDBweDtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG59XG5pb24tY29udGVudCAuaXRlbSAuaXRlbS1pbnB1dC5uZy12YWxpZC5pdGVtLWlucHV0LWhhcy12YWx1ZTpub3QoLmlucHV0LWhhcy1mb2N1cyk6bm90KC5pdGVtLWlucHV0LWhhcy1mb2N1cykgLml0ZW0taW5uZXIsXG5pb24tY29udGVudCAuaXRlbS5pdGVtLWlucHV0Lm5nLXZhbGlkLmlucHV0LWhhcy12YWx1ZTpub3QoLmlucHV0LWhhcy1mb2N1cyk6bm90KC5pdGVtLWlucHV0LWhhcy1mb2N1cykgLml0ZW0taW5uZXIge1xuICBib3JkZXItYm90dG9tLWNvbG9yOiBub25lICFpbXBvcnRhbnQ7XG4gIC13ZWJraXQtYm94LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50O1xuICBib3gtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7XG59XG5pb24tY29udGVudCAuaXRlbS1pbm5lciB7XG4gIHBhZGRpbmctcmlnaHQ6IDBweCAhaW1wb3J0YW50O1xuICBib3JkZXItYm90dG9tOiBub25lICFpbXBvcnRhbnQ7XG59XG5pb24tY29udGVudCAuaW5wdXQge1xuICBib3JkZXI6IDFweCBzb2xpZCAjZWVlO1xuICBwYWRkaW5nLXJpZ2h0OiAwcHg7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xufVxuaW9uLWNvbnRlbnQgLmJvcmRlciB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNlMGUwZTA7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG5pb24tY29udGVudCAubGFiZWwge1xuICBmb250LXNpemU6IDEuMnJlbSAhaW1wb3J0YW50O1xuICBjb2xvcjogLS1pb24tY29sb3Itc2Vjb25kYXJ5ICFpbXBvcnRhbnQ7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG59XG5pb24tY29udGVudCBwIHtcbiAgZm9udC1zaXplOiAxLjNyZW07XG59XG5pb24tY29udGVudCAuaXRhbGljX2ZvbnQge1xuICBmb250LXN0eWxlOiBpdGFsaWM7XG4gIGZvbnQtZmFtaWx5OiBcIk9wZW4gU2Fuc1wiLCBzYW5zLXNlcmlmO1xuICBjb2xvcjogLS1pb24tY29sb3Itc2Vjb25kYXJ5ICFpbXBvcnRhbnQ7XG4gIGZvbnQtc2l6ZTogNXB4O1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICBtYXJnaW4tdG9wOiAxMHB4O1xuICBsaW5lLWhlaWdodDogMjRweDtcbn1cbmlvbi1jb250ZW50IHNlY3Rpb24ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuaW9uLWNvbnRlbnQgc2VjdGlvbiBwIHtcbiAgbWFyZ2luLWJvdHRvbTogMjVweDtcbiAgcGFkZGluZzogMHB4IDEwcHg7XG4gIGZvbnQtc2l6ZTogMS41IHJlbTtcbn1cbmlvbi1jb250ZW50IC5pdGVtIC5jaGVja2JveCB7XG4gIG1hcmdpbjogMHB4IDEwcHggMHB4IDBweCAhaW1wb3J0YW50O1xufVxuaW9uLWNvbnRlbnQgLmNoZWNrYm94LWljb24ge1xuICBib3JkZXItd2lkdGg6IDFweCAhaW1wb3J0YW50O1xufVxuaW9uLWNvbnRlbnQgLmNoZWNrYm94LWNoZWNrZWQge1xuICBib3JkZXItY29sb3I6IHZhcigtLWlvbi1jb2xvci1zZWNvbmRhcnkpICFpbXBvcnRhbnQ7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XG59XG5pb24tY29udGVudCAudGlja19pY29uIHtcbiAgZm9udC1zaXplOiA1cmVtO1xuICBtYXJnaW4tdG9wOiAtNjBweCAhaW1wb3J0YW50O1xuICBjb2xvcjogLS1pb24tY29sb3Itc2Vjb25kYXJ5O1xuICBwYWRkaW5nOiAxNXB4O1xufVxuaW9uLWNvbnRlbnQgLnBhZGRpbmdfNDAge1xuICBwYWRkaW5nOiA0MHB4O1xufVxuaW9uLWNvbnRlbnQgLnBvcG92ZXIgLnJhZGlvIC5yYWRpby1pY29uIHtcbiAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xufVxuaW9uLWNvbnRlbnQgLmNhbnZhc19iYWNrZ3JvdW5kIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5KTtcbiAgY29sb3I6IHdoaXRlO1xufVxuaW9uLWNvbnRlbnQgLml0ZW0tY292ZXIge1xuICBkaXNwbGF5OiBub25lO1xufVxuaW9uLWNvbnRlbnQgcCBpb24taWNvbiB7XG4gIGZsb2F0OiByaWdodCAhaW1wb3J0YW50O1xuICBwb2ludGVyLWV2ZW50czogYXV0bztcbiAgcGFkZGluZzogNXB4O1xufVxuaW9uLWNvbnRlbnQgZGl2IHAge1xuICBmb250LWZhbWlseTogQWdlbmRhLVJlZ3VsYXI7XG4gIGNvbG9yOiAtLWlvbi1jb2xvci1zZWNvbmRhcnk7XG4gIGZvbnQtc2l6ZTogMTdweDtcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xuICBtYXJnaW4tdG9wOiAxMHB4O1xuICBsaW5lLWhlaWdodDogMS40Mjg1NzE0Mztcbn1cbmlvbi1jb250ZW50IC5tYW5kYXRvcnlUZXh0IHtcbiAgZm9udC1mYW1pbHk6IFwiT3BlbiBTYW5zXCIsIHNhbnMtc2VyaWY7XG4gIGNvbG9yOiAtLWlvbi1jb2xvci1zZWNvbmRhcnk7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgbWFyZ2luLXRvcDogMTBweDtcbiAgbGluZS1oZWlnaHQ6IDI0cHg7XG59XG5pb24tY29udGVudCBwIGlvbi1pY29uIHtcbiAgZm9udC1zaXplOiAwLjg1ZW07XG59XG5pb24tY29udGVudCAudGV4dC1pbnB1dC1tZCB7XG4gIHBhZGRpbmc6IDA7XG4gIHdpZHRoOiBjYWxjKDEwMCUgLSA4cHggLSA4cHgpO1xuICBtaW4taGVpZ2h0OiA0NXB4O1xuICBtYXJnaW46IDBweCAhaW1wb3J0YW50O1xufVxuaW9uLWNvbnRlbnQgLmNhbnZhc3JvdyB7XG4gIG1hcmdpbi10b3A6IDVweDtcbn1cbmlvbi1jb250ZW50IC5jYXB0Y2hhIGlvbi1sYWJlbCB7XG4gIG1hcmdpbi1yaWdodDogMHB4ICFpbXBvcnRhbnQ7XG59XG5pb24tY29udGVudCAucmVmcmVzaGljb25zaXplIHtcbiAgZm9udC1zaXplOiAwLjg1ZW0gIWltcG9ydGFudDtcbn1cbmlvbi1jb250ZW50IC5sb25ndGV4dExhYmxlIHtcbiAgd2hpdGUtc3BhY2U6IG5vcm1hbCAhaW1wb3J0YW50O1xufVxuaW9uLWNvbnRlbnQgLmRhcmtJbnB1dFRleHQge1xuICBjb2xvcjogQmxhY2s7XG4gIGZvbnQtd2VpZ2h0OiBCb2xkO1xufVxuaW9uLWNvbnRlbnQgLmZvcmdvdFBvbGljeUxpbmsge1xuICBmb250LXNpemU6IDFyZW0gIWltcG9ydGFudDtcbiAgbWFyZ2luLXRvcDogNXB4O1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICBkaXNwbGF5OiBibG9jaztcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG4gIHdoaXRlLXNwYWNlOiB1bnNldDtcbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMzc0cHgpIHtcbiAgaW9uLWNvbnRlbnQgLnN1YkJ0biBidXR0b24ge1xuICAgIGZvbnQtc2l6ZTogMTVweCAhaW1wb3J0YW50O1xuICAgIGhlaWdodDogNDVweDtcbiAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xuICAgIGxpbmUtaGVpZ2h0OiA0NXB4O1xuICAgIHBhZGRpbmc6IDAgMTBweDtcbiAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIGZvbnQtZmFtaWx5OiBBZ2VuZGEtUmVndWxhcjtcbiAgfVxufVxuaW9uLWNvbnRlbnQgLmNvbGwge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAyZDNkO1xuICBjb2xvcjogI2ZmZjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuaW9uLWNvbnRlbnQgLndpZHRoLWhlaWdodCB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDU1JTtcbn1cbmlvbi1jb250ZW50IC5mbGV4IHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbmlvbi1jb250ZW50IGlvbi1jaGVja2JveCB7XG4gIC0tYmFja2dyb3VuZC1jaGVja2VkOm5vbmUgIWltcG9ydGFudDtcbiAgLS1ib3JkZXItY29sb3ItY2hlY2tlZDpub25lICFpbXBvcnRhbnQ7XG59XG5pb24tY29udGVudCA6Om5nLWRlZXAgLm15Y29tcG9uZW50LXdpZGVyLXBvcG92ZXIge1xuICAtLXdpZHRoOiA5NSU7XG4gIC0tbWF4LXdpZHRoOiA0MDBweDtcbn1cbmlvbi1jb250ZW50IC5hbGVydGJ1dHRvbiB7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyICFpbXBvcnRhbnQ7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbmlvbi1jb250ZW50IC5hbGVydC1idXR0b24taW5uZXIuc2MtaW9uLWFsZXJ0LW1kIHtcbiAgLW1zLWZsZXgtcGFjazogZW5kO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlciAhaW1wb3J0YW50O1xufVxuaW9uLWNvbnRlbnQgLm15LWN1c3RvbS1jbGFzcyAuYWxlcnQtd3JhcHBlciB7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyICFpbXBvcnRhbnQ7XG59Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ })

}]);
//# sourceMappingURL=src_app_pages_sign-up_sign-up_module_ts.js.map