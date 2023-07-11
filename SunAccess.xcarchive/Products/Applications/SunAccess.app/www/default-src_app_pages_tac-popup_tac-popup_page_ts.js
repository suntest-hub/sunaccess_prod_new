"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["default-src_app_pages_tac-popup_tac-popup_page_ts"],{

/***/ 52370:
/*!***************************************************!*\
  !*** ./src/app/pages/tac-popup/tac-popup.page.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TacPopupPage": () => (/* binding */ TacPopupPage)
/* harmony export */ });
/* harmony import */ var http_status_codes__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! http-status-codes */ 92788);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 28653);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var src_providers_utils_utils_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/providers/utils/utils.service */ 30423);
/* harmony import */ var _ionic_native_base64_ngx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic-native/base64/ngx */ 89604);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngx-translate/core */ 38699);
/* harmony import */ var src_providers_utils_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/providers/utils/config */ 43485);
/* harmony import */ var _update_personal_details_updatePersonalDetailservice__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../update-personal-details/updatePersonalDetailservice */ 26475);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 94666);












function TacPopupPage_div_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("", 3 - ctx_r0.sendOtpCount, " Attempt Left");
  }
}
class TacPopupPage {
  // invalidOTP: boolean=false;
  constructor(
  // public viewCtrl: ViewController,
  //  public renderer: Renderer,
  modalCtrl, utils, actionSheetCtrl, base64, alertCtrl, translate, config, UpdatePersonalService, formbuilder, modalController) {
    this.modalCtrl = modalCtrl;
    this.utils = utils;
    this.actionSheetCtrl = actionSheetCtrl;
    this.base64 = base64;
    this.alertCtrl = alertCtrl;
    this.translate = translate;
    this.config = config;
    this.UpdatePersonalService = UpdatePersonalService;
    this.formbuilder = formbuilder;
    this.modalController = modalController;
    this.tmerVAl = "(60 Sec)";
    this.enableResend = false;
    this.sendOtpCount = 0;
    this.invalidAttemptCount = 0;
    this.OTPSubmitForm = this.formbuilder.group({
      otpCode: ["123456", [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.minLength(6)]]
    });
    this.config.currentPage.pageName = "TACPopupPage";
    this.phoneNumber = this.config.userInfo.contactNumber;
    this.maskedPhoneNumber = this.config.userInfo.maskedContactNumber;
  }
  ngOnInit() {
    console.log('ionViewDidLoad TacPopupPage');
    //  this.sendOTP();
  }

  verifyTAC() {
    // this.viewCtrl.dismiss({ TACVarified: true });
    this.modalController.dismiss({
      TACVarified: true
    });
    // if (this.OTPSubmitForm.valid) {
    //   if (this.utils.isDeviceOnLine()) {
    //     this.utils.showProgressLoader();
    //     let otpCode = this.OTPSubmitForm.controls["otpCode"].value;
    //     this.UpdatePersonalService.verifyTAC(
    //       otpCode,
    //     ).then(
    //       (res) => {
    //         try {
    //           if (res['responseJSON']) {
    //             if (res['responseJSON']['statusCode'] == HttpStatus.ACCEPTED || res['responseJSON']['statusCode'] == HttpStatus.OK) {
    //               this.utils.dissmisProgressLoader();
    //               this.modalController.dismiss({ TACVarified: true });
    //             }
    //             else {
    //                 this.utils.dissmisProgressLoader();
    //                 if (res['responseJSON'] && res['responseJSON']['statusCode'] == HttpStatus.FORBIDDEN) {
    //                   let errorMsg = res['responseJSON']['userMessage'];
    //                   this.utils.showAlert("", errorMsg);
    //                   this.OTPSubmitForm.controls.otpCode.markAsDirty();
    //                   this.OTPSubmitForm.controls.otpCode.setValue("");
    //                 }
    //                 else{
    //                     let errorMsg = res['responseJSON']['message'] || this.translate.instant('generic_msgs.server_err');
    //                     this.utils.showAlert("", errorMsg);
    //                 }
    //             }
    //           }
    //         } catch (e) {
    //           this.utils.dissmisProgressLoader();
    //           let errorMsg = this.translate.instant('generic_msgs.server_err');
    //           this.utils.showAlert("", errorMsg);
    //         }
    //       },
    //       (err) => {
    //         this.utils.dissmisProgressLoader();
    //         let errorMsg = this.utils.handleServiceException(err);
    //         this.utils.showAlert("", errorMsg);
    //       }
    //     );
    //   }else {
    //     let errorMsg = this.translate.instant("generic_msgs.network_err");
    //     this.utils.showAlert("", errorMsg);
    //   }
    // }
  }

  sendOTP() {
    if (this.utils.isDeviceOnLine()) {
      this.utils.showProgressLoader();
      let operatingSys = "AOS";
      if (this.utils.getPlatform() == 'ios') {
        operatingSys = "IOS";
      }
      this.UpdatePersonalService.sendTAC(operatingSys).then(res => {
        try {
          if (res['responseJSON']) {
            if (res['responseJSON'] && res['responseJSON']['statusCode'] == http_status_codes__WEBPACK_IMPORTED_MODULE_6__.OK) {
              this.enableResend = false;
              this.sendOtpCount++;
              if (this.sendOtpCount < 3) {
                this.tmerVAl = "(60 Sec)";
                this.startTimer();
              }
              this.utils.dissmisProgressLoader();
            } else {
              this.utils.dissmisProgressLoader();
              let errorMsg = res['responseJSON']['message'] || this.translate.instant('generic_msgs.server_err');
              this.utils.showAlert("", errorMsg);
            }
          }
        } catch (e) {
          this.utils.dissmisProgressLoader();
          let errorMsg = this.translate.instant('generic_msgs.server_err');
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
  }
  startTimer() {
    var timer = 60;
    var seconds;
    this.OTPTimerSubs = (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.interval)(1000).subscribe(x => {
      seconds = Math.floor(timer);
      seconds = seconds < 10 ? "0" + seconds : seconds;
      this.tmerVAl = "(" + seconds + " sec)";
      if (timer >= 1) {
        --timer;
      }
      if (timer == 0) {
        this.enableResend = true;
        this.tmerVAl = "";
        this.OTPTimerSubs.unsubscribe();
      }
    });
  }
  /**
  *
  * @param title - this is the title of the alert
  * @param message  - message that need to display on the alert.
  */
  showDialog(title, message) {
    let buttons = [{
      text: 'Ok',
      handler: () => {
        this.modalController.dismiss({
          TACVarified: true
        });
      }
    }];
    let alert = this.alertCtrl.create({
      header: title,
      message: message,
      buttons: buttons,
      backdropDismiss: false
    }).then(alert => alert.present());
  }
  /**
  * Just to close the Modal
  */
  closeModal() {
    this.modalController.dismiss();
  }
}
TacPopupPage.ɵfac = function TacPopupPage_Factory(t) {
  return new (t || TacPopupPage)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_8__.ModalController), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_providers_utils_utils_service__WEBPACK_IMPORTED_MODULE_0__.UtilService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_8__.ActionSheetController), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_ionic_native_base64_ngx__WEBPACK_IMPORTED_MODULE_1__.Base64), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_8__.AlertController), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__.TranslateService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_providers_utils_config__WEBPACK_IMPORTED_MODULE_2__.ConfigProvider), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_update_personal_details_updatePersonalDetailservice__WEBPACK_IMPORTED_MODULE_3__.UpdatePersonalService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_8__.ModalController));
};
TacPopupPage.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
  type: TacPopupPage,
  selectors: [["app-tac-popup"]],
  decls: 22,
  vars: 6,
  consts: [["mode", "ios"], ["color", "primary"], [1, "bold-font"], [1, "padding"], [1, "margin_bottom", 3, "formGroup"], [1, "enter-otp-container"], [1, "border"], ["type", "text", "restrict-input", "", "restrictInput", "nricDigit", "maxlength", "6", "formControlName", "otpCode", "placeholder", "Enter OTP Number"], [1, "timer-container"], ["ion-button", "", 1, "btn_center", 3, "disabled", "click"], ["class", "attempts-left", 4, "ngIf"], ["text-center", "", 1, "buttons-container"], ["ion-button", "", 1, "btn_center1", 3, "disabled", "click"], ["ion-button", "", 1, "btn_center", 3, "click"], [1, "attempts-left"]],
  template: function TacPopupPage_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "ion-header", 0)(1, "ion-toolbar", 1)(2, "ion-title", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3, "Enter OTP");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "ion-content")(5, "div", 3)(6, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "form", 4)(9, "div", 5)(10, "ion-item", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](11, "ion-input", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "div", 8)(13, "ion-button", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function TacPopupPage_Template_ion_button_click_13_listener() {
        return ctx.sendOTP();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](14);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](15, TacPopupPage_div_15_Template, 2, 1, "div", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](16, "ion-footer")(17, "div", 11)(18, "ion-button", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function TacPopupPage_Template_ion_button_click_18_listener() {
        return ctx.verifyTAC();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](19, "Submit ");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](20, "ion-button", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function TacPopupPage_Template_ion_button_click_20_listener() {
        return ctx.closeModal();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](21, "Cancel ");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("A 6-digit one-time-pin (OTP) has been sent to your mobile phone number (", ctx.maskedPhoneNumber, ") ");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("formGroup", ctx.OTPSubmitForm);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("disabled", !ctx.enableResend);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("Resend ", ctx.tmerVAl, " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.sendOtpCount > 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("disabled", !ctx.OTPSubmitForm.controls.otpCode.valid);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_10__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.MaxLengthValidator, _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonButton, _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonContent, _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonFooter, _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonHeader, _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonInput, _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonItem, _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonTitle, _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonToolbar, _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.TextValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControlName],
  styles: ["page-tac-popup[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 1.6rem;\n}\npage-tac-popup[_ngcontent-%COMP%]   .attempts-left[_ngcontent-%COMP%] {\n  font: 12px/16px var(--ion-font-family);\n  margin-top: 8px;\n}\npage-tac-popup[_ngcontent-%COMP%]   .enter-otp-container[_ngcontent-%COMP%] {\n  margin-bottom: 16px;\n}\npage-tac-popup[_ngcontent-%COMP%]   .enter-otp-container[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%] {\n  padding-left: 0;\n}\npage-tac-popup[_ngcontent-%COMP%]   .enter-otp-container[_ngcontent-%COMP%]   .item-inner[_ngcontent-%COMP%] {\n  border-bottom: 0 !important;\n  padding-right: 0 !important;\n}\npage-tac-popup[_ngcontent-%COMP%]   .enter-otp-container[_ngcontent-%COMP%]   ion-input[_ngcontent-%COMP%] {\n  border: 1px solid #c8c7cc;\n  padding: 0 16px;\n}\npage-tac-popup[_ngcontent-%COMP%]   .enter-otp-container[_ngcontent-%COMP%]   .timer-container[_ngcontent-%COMP%] {\n  margin-top: 16px;\n}\n\np[_ngcontent-%COMP%] {\n  margin-top: 20px;\n  margin-bottom: 1rem;\n  font-weight: bold;\n}\n\n.btn_center[_ngcontent-%COMP%] {\n  text-transform: capitalize;\n  --background: #002d3d !important;\n  color: white;\n  margin-top: 15px;\n  --border-radius: 10px !important;\n  min-width: 200px;\n  min-height: 45px;\n  width: 100% !important;\n  font-family: Agenda-Regular !important;\n}\n\n.btn_center1[_ngcontent-%COMP%] {\n  text-transform: capitalize;\n  --background: #002d3d !important;\n  color: white;\n  margin-top: 15px;\n  --border-radius: 10px !important;\n  min-width: 200px;\n  min-height: 45px;\n  width: 100% !important;\n  font-family: Agenda-Regular !important;\n  margin-bottom: -5px;\n}\n\n.bold-font[_ngcontent-%COMP%] {\n  margin-top: 2px;\n  font-size: 20px;\n  font-weight: bold;\n  text-align: center;\n}\n\n.buttons-container[_ngcontent-%COMP%] {\n  padding: 10px;\n}\n\n.padding[_ngcontent-%COMP%] {\n  padding: 10px;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcGFnZXMvdGFjLXBvcHVwL3RhYy1wb3B1cC5wYWdlLnNjc3MiLCJ3ZWJwYWNrOi8vLi8uLi8uLi8uLi9BbGwlMjBQcm9qZWN0cy9NYWxheXNpYV9DbGllbnRBcHBfUmV2YW1wL1N1bkFjY2Vzc19Jb25pYzZfUmV2YW1wL3NyYy9hcHAvcGFnZXMvdGFjLXBvcHVwL3RhYy1wb3B1cC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0k7RUFDSSxpQkFBQTtBQ0FSO0FERUk7RUFDSSxzQ0FBQTtFQUNBLGVBQUE7QUNBUjtBREVJO0VBQ0ksbUJBQUE7QUNBUjtBRENRO0VBQ0ksZUFBQTtBQ0NaO0FEQ1E7RUFDSSwyQkFBQTtFQUNBLDJCQUFBO0FDQ1o7QURDUTtFQUNJLHlCQUFBO0VBQ0EsZUFBQTtBQ0NaO0FEQ1E7RUFDSSxnQkFBQTtBQ0NaOztBREdBO0VBQ0ksZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0FDQUo7O0FERUE7RUFDSSwwQkFBQTtFQUNBLGdDQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0NBQUE7RUFDQSxnQkFBQTtFQUdBLGdCQUFBO0VBQ0Esc0JBQUE7RUFDQSxzQ0FBQTtBQ0RKOztBREdFO0VBQ0UsMEJBQUE7RUFDQSxnQ0FBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGdDQUFBO0VBQ0EsZ0JBQUE7RUFHQSxnQkFBQTtFQUNBLHNCQUFBO0VBQ0Esc0NBQUE7RUFDQSxtQkFBQTtBQ0ZKOztBRElFO0VBQ0UsZUFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FDREo7O0FESUE7RUFDSSxhQUFBO0FDREo7O0FER0M7RUFDRyxhQUFBO0FDQUoiLCJzb3VyY2VzQ29udGVudCI6WyJwYWdlLXRhYy1wb3B1cCB7XHJcbiAgICBwIHtcclxuICAgICAgICBmb250LXNpemU6IDEuNnJlbTtcclxuICAgIH1cclxuICAgIC5hdHRlbXB0cy1sZWZ0IHtcclxuICAgICAgICBmb250OiAxMnB4LzE2cHggdmFyKC0taW9uLWZvbnQtZmFtaWx5KTtcclxuICAgICAgICBtYXJnaW4tdG9wOiA4cHg7XHJcbiAgICB9XHJcbiAgICAuZW50ZXItb3RwLWNvbnRhaW5lciB7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTZweDtcclxuICAgICAgICBpb24taXRlbSB7XHJcbiAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLml0ZW0taW5uZXIge1xyXG4gICAgICAgICAgICBib3JkZXItYm90dG9tOiAwICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDAgIWltcG9ydGFudDtcclxuICAgICAgICB9XHJcbiAgICAgICAgaW9uLWlucHV0IHtcclxuICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2M4YzdjYztcclxuICAgICAgICAgICAgcGFkZGluZzogMCAxNnB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICAudGltZXItY29udGFpbmVyIHtcclxuICAgICAgICAgICAgbWFyZ2luLXRvcDogMTZweDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxucCB7XHJcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcbi5idG5fY2VudGVyIHtcclxuICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xyXG4gICAgLS1iYWNrZ3JvdW5kOiAjMDAyZDNkICFpbXBvcnRhbnQ7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBtYXJnaW4tdG9wOiAxNXB4O1xyXG4gICAgLS1ib3JkZXItcmFkaXVzOiAxMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICBtaW4td2lkdGg6IDIwMHB4O1xyXG4gICAgLy8gbWFyZ2luLWxlZnQ6IC0zMXB4O1xyXG4gICAgLy9mb250LXNpemU6IDEuN3JlbTtcclxuICAgIG1pbi1oZWlnaHQ6IDQ1cHg7XHJcbiAgICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xyXG4gICAgZm9udC1mYW1pbHk6IEFnZW5kYS1SZWd1bGFyICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gIC5idG5fY2VudGVyMSB7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcclxuICAgIC0tYmFja2dyb3VuZDogIzAwMmQzZCAhaW1wb3J0YW50O1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgbWFyZ2luLXRvcDogMTVweDtcclxuICAgIC0tYm9yZGVyLXJhZGl1czogMTBweCAhaW1wb3J0YW50O1xyXG4gICAgbWluLXdpZHRoOiAyMDBweDtcclxuICAgIC8vIG1hcmdpbi1sZWZ0OiAtMzFweDtcclxuICAgIC8vZm9udC1zaXplOiAxLjdyZW07XHJcbiAgICBtaW4taGVpZ2h0OiA0NXB4O1xyXG4gICAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcclxuICAgIGZvbnQtZmFtaWx5OiBBZ2VuZGEtUmVndWxhciAhaW1wb3J0YW50O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogLTVweDtcclxuICB9XHJcbiAgLmJvbGQtZm9udCB7XHJcbiAgICBtYXJnaW4tdG9wOiAycHg7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLmJ1dHRvbnMtY29udGFpbmVyIHtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiB9XHJcbiAucGFkZGluZ3tcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgIFxyXG4gfVxyXG4iLCJwYWdlLXRhYy1wb3B1cCBwIHtcbiAgZm9udC1zaXplOiAxLjZyZW07XG59XG5wYWdlLXRhYy1wb3B1cCAuYXR0ZW1wdHMtbGVmdCB7XG4gIGZvbnQ6IDEycHgvMTZweCB2YXIoLS1pb24tZm9udC1mYW1pbHkpO1xuICBtYXJnaW4tdG9wOiA4cHg7XG59XG5wYWdlLXRhYy1wb3B1cCAuZW50ZXItb3RwLWNvbnRhaW5lciB7XG4gIG1hcmdpbi1ib3R0b206IDE2cHg7XG59XG5wYWdlLXRhYy1wb3B1cCAuZW50ZXItb3RwLWNvbnRhaW5lciBpb24taXRlbSB7XG4gIHBhZGRpbmctbGVmdDogMDtcbn1cbnBhZ2UtdGFjLXBvcHVwIC5lbnRlci1vdHAtY29udGFpbmVyIC5pdGVtLWlubmVyIHtcbiAgYm9yZGVyLWJvdHRvbTogMCAhaW1wb3J0YW50O1xuICBwYWRkaW5nLXJpZ2h0OiAwICFpbXBvcnRhbnQ7XG59XG5wYWdlLXRhYy1wb3B1cCAuZW50ZXItb3RwLWNvbnRhaW5lciBpb24taW5wdXQge1xuICBib3JkZXI6IDFweCBzb2xpZCAjYzhjN2NjO1xuICBwYWRkaW5nOiAwIDE2cHg7XG59XG5wYWdlLXRhYy1wb3B1cCAuZW50ZXItb3RwLWNvbnRhaW5lciAudGltZXItY29udGFpbmVyIHtcbiAgbWFyZ2luLXRvcDogMTZweDtcbn1cblxucCB7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG4gIG1hcmdpbi1ib3R0b206IDFyZW07XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4uYnRuX2NlbnRlciB7XG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xuICAtLWJhY2tncm91bmQ6ICMwMDJkM2QgIWltcG9ydGFudDtcbiAgY29sb3I6IHdoaXRlO1xuICBtYXJnaW4tdG9wOiAxNXB4O1xuICAtLWJvcmRlci1yYWRpdXM6IDEwcHggIWltcG9ydGFudDtcbiAgbWluLXdpZHRoOiAyMDBweDtcbiAgbWluLWhlaWdodDogNDVweDtcbiAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcbiAgZm9udC1mYW1pbHk6IEFnZW5kYS1SZWd1bGFyICFpbXBvcnRhbnQ7XG59XG5cbi5idG5fY2VudGVyMSB7XG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xuICAtLWJhY2tncm91bmQ6ICMwMDJkM2QgIWltcG9ydGFudDtcbiAgY29sb3I6IHdoaXRlO1xuICBtYXJnaW4tdG9wOiAxNXB4O1xuICAtLWJvcmRlci1yYWRpdXM6IDEwcHggIWltcG9ydGFudDtcbiAgbWluLXdpZHRoOiAyMDBweDtcbiAgbWluLWhlaWdodDogNDVweDtcbiAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcbiAgZm9udC1mYW1pbHk6IEFnZW5kYS1SZWd1bGFyICFpbXBvcnRhbnQ7XG4gIG1hcmdpbi1ib3R0b206IC01cHg7XG59XG5cbi5ib2xkLWZvbnQge1xuICBtYXJnaW4tdG9wOiAycHg7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmJ1dHRvbnMtY29udGFpbmVyIHtcbiAgcGFkZGluZzogMTBweDtcbn1cblxuLnBhZGRpbmcge1xuICBwYWRkaW5nOiAxMHB4O1xufSJdLCJzb3VyY2VSb290IjoiIn0= */"]
});

/***/ }),

/***/ 35014:
/*!**********************************************************!*\
  !*** ./node_modules/rxjs/dist/esm/internal/Scheduler.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Scheduler": () => (/* binding */ Scheduler)
/* harmony export */ });
/* harmony import */ var _scheduler_dateTimestampProvider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scheduler/dateTimestampProvider */ 67654);

class Scheduler {
  constructor(schedulerActionCtor, now = Scheduler.now) {
    this.schedulerActionCtor = schedulerActionCtor;
    this.now = now;
  }
  schedule(work, delay = 0, state) {
    return new this.schedulerActionCtor(this, work).schedule(state, delay);
  }
}
Scheduler.now = _scheduler_dateTimestampProvider__WEBPACK_IMPORTED_MODULE_0__.dateTimestampProvider.now;

/***/ }),

/***/ 28653:
/*!********************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm/internal/observable/interval.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "interval": () => (/* binding */ interval)
/* harmony export */ });
/* harmony import */ var _scheduler_async__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../scheduler/async */ 96936);
/* harmony import */ var _timer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./timer */ 78947);


function interval(period = 0, scheduler = _scheduler_async__WEBPACK_IMPORTED_MODULE_0__.asyncScheduler) {
  if (period < 0) {
    period = 0;
  }
  return (0,_timer__WEBPACK_IMPORTED_MODULE_1__.timer)(period, period, scheduler);
}

/***/ }),

/***/ 78947:
/*!*****************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm/internal/observable/timer.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "timer": () => (/* binding */ timer)
/* harmony export */ });
/* harmony import */ var _Observable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Observable */ 90833);
/* harmony import */ var _scheduler_async__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../scheduler/async */ 96936);
/* harmony import */ var _util_isScheduler__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/isScheduler */ 59867);
/* harmony import */ var _util_isDate__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../util/isDate */ 97885);




function timer(dueTime = 0, intervalOrScheduler, scheduler = _scheduler_async__WEBPACK_IMPORTED_MODULE_0__.async) {
  let intervalDuration = -1;
  if (intervalOrScheduler != null) {
    if ((0,_util_isScheduler__WEBPACK_IMPORTED_MODULE_1__.isScheduler)(intervalOrScheduler)) {
      scheduler = intervalOrScheduler;
    } else {
      intervalDuration = intervalOrScheduler;
    }
  }
  return new _Observable__WEBPACK_IMPORTED_MODULE_2__.Observable(subscriber => {
    let due = (0,_util_isDate__WEBPACK_IMPORTED_MODULE_3__.isValidDate)(dueTime) ? +dueTime - scheduler.now() : dueTime;
    if (due < 0) {
      due = 0;
    }
    let n = 0;
    return scheduler.schedule(function () {
      if (!subscriber.closed) {
        subscriber.next(n++);
        if (0 <= intervalDuration) {
          this.schedule(undefined, intervalDuration);
        } else {
          subscriber.complete();
        }
      }
    }, due);
  });
}

/***/ }),

/***/ 36733:
/*!*****************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm/internal/scheduler/Action.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Action": () => (/* binding */ Action)
/* harmony export */ });
/* harmony import */ var _Subscription__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Subscription */ 26078);

class Action extends _Subscription__WEBPACK_IMPORTED_MODULE_0__.Subscription {
  constructor(scheduler, work) {
    super();
  }
  schedule(state, delay = 0) {
    return this;
  }
}

/***/ }),

/***/ 75198:
/*!**********************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm/internal/scheduler/AsyncAction.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AsyncAction": () => (/* binding */ AsyncAction)
/* harmony export */ });
/* harmony import */ var _Action__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Action */ 36733);
/* harmony import */ var _intervalProvider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./intervalProvider */ 51103);
/* harmony import */ var _util_arrRemove__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../util/arrRemove */ 39663);



class AsyncAction extends _Action__WEBPACK_IMPORTED_MODULE_0__.Action {
  constructor(scheduler, work) {
    super(scheduler, work);
    this.scheduler = scheduler;
    this.work = work;
    this.pending = false;
  }
  schedule(state, delay = 0) {
    var _a;
    if (this.closed) {
      return this;
    }
    this.state = state;
    const id = this.id;
    const scheduler = this.scheduler;
    if (id != null) {
      this.id = this.recycleAsyncId(scheduler, id, delay);
    }
    this.pending = true;
    this.delay = delay;
    this.id = (_a = this.id) !== null && _a !== void 0 ? _a : this.requestAsyncId(scheduler, this.id, delay);
    return this;
  }
  requestAsyncId(scheduler, _id, delay = 0) {
    return _intervalProvider__WEBPACK_IMPORTED_MODULE_1__.intervalProvider.setInterval(scheduler.flush.bind(scheduler, this), delay);
  }
  recycleAsyncId(_scheduler, id, delay = 0) {
    if (delay != null && this.delay === delay && this.pending === false) {
      return id;
    }
    if (id != null) {
      _intervalProvider__WEBPACK_IMPORTED_MODULE_1__.intervalProvider.clearInterval(id);
    }
    return undefined;
  }
  execute(state, delay) {
    if (this.closed) {
      return new Error('executing a cancelled action');
    }
    this.pending = false;
    const error = this._execute(state, delay);
    if (error) {
      return error;
    } else if (this.pending === false && this.id != null) {
      this.id = this.recycleAsyncId(this.scheduler, this.id, null);
    }
  }
  _execute(state, _delay) {
    let errored = false;
    let errorValue;
    try {
      this.work(state);
    } catch (e) {
      errored = true;
      errorValue = e ? e : new Error('Scheduled action threw falsy error');
    }
    if (errored) {
      this.unsubscribe();
      return errorValue;
    }
  }
  unsubscribe() {
    if (!this.closed) {
      const {
        id,
        scheduler
      } = this;
      const {
        actions
      } = scheduler;
      this.work = this.state = this.scheduler = null;
      this.pending = false;
      (0,_util_arrRemove__WEBPACK_IMPORTED_MODULE_2__.arrRemove)(actions, this);
      if (id != null) {
        this.id = this.recycleAsyncId(scheduler, id, null);
      }
      this.delay = null;
      super.unsubscribe();
    }
  }
}

/***/ }),

/***/ 75744:
/*!*************************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm/internal/scheduler/AsyncScheduler.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AsyncScheduler": () => (/* binding */ AsyncScheduler)
/* harmony export */ });
/* harmony import */ var _Scheduler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Scheduler */ 35014);

class AsyncScheduler extends _Scheduler__WEBPACK_IMPORTED_MODULE_0__.Scheduler {
  constructor(SchedulerAction, now = _Scheduler__WEBPACK_IMPORTED_MODULE_0__.Scheduler.now) {
    super(SchedulerAction, now);
    this.actions = [];
    this._active = false;
  }
  flush(action) {
    const {
      actions
    } = this;
    if (this._active) {
      actions.push(action);
      return;
    }
    let error;
    this._active = true;
    do {
      if (error = action.execute(action.state, action.delay)) {
        break;
      }
    } while (action = actions.shift());
    this._active = false;
    if (error) {
      while (action = actions.shift()) {
        action.unsubscribe();
      }
      throw error;
    }
  }
}

/***/ }),

/***/ 96936:
/*!****************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm/internal/scheduler/async.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "async": () => (/* binding */ async),
/* harmony export */   "asyncScheduler": () => (/* binding */ asyncScheduler)
/* harmony export */ });
/* harmony import */ var _AsyncAction__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AsyncAction */ 75198);
/* harmony import */ var _AsyncScheduler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AsyncScheduler */ 75744);


const asyncScheduler = new _AsyncScheduler__WEBPACK_IMPORTED_MODULE_0__.AsyncScheduler(_AsyncAction__WEBPACK_IMPORTED_MODULE_1__.AsyncAction);
const async = asyncScheduler;

/***/ }),

/***/ 51103:
/*!***************************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm/internal/scheduler/intervalProvider.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "intervalProvider": () => (/* binding */ intervalProvider)
/* harmony export */ });
const intervalProvider = {
  setInterval(handler, timeout, ...args) {
    const {
      delegate
    } = intervalProvider;
    if (delegate === null || delegate === void 0 ? void 0 : delegate.setInterval) {
      return delegate.setInterval(handler, timeout, ...args);
    }
    return setInterval(handler, timeout, ...args);
  },
  clearInterval(handle) {
    const {
      delegate
    } = intervalProvider;
    return ((delegate === null || delegate === void 0 ? void 0 : delegate.clearInterval) || clearInterval)(handle);
  },
  delegate: undefined
};

/***/ }),

/***/ 97885:
/*!************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm/internal/util/isDate.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "isValidDate": () => (/* binding */ isValidDate)
/* harmony export */ });
function isValidDate(value) {
  return value instanceof Date && !isNaN(value);
}

/***/ })

}]);
//# sourceMappingURL=default-src_app_pages_tac-popup_tac-popup_page_ts.js.map