"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_profile_profile_module_ts"],{

/***/ 41474:
/*!*********************************************************!*\
  !*** ./src/app/pages/profile/profile-routing.module.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProfilePageRoutingModule": () => (/* binding */ ProfilePageRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _profile_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./profile.page */ 64629);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);




const routes = [{
  path: '',
  component: _profile_page__WEBPACK_IMPORTED_MODULE_0__.ProfilePage
}];
class ProfilePageRoutingModule {}
ProfilePageRoutingModule.ɵfac = function ProfilePageRoutingModule_Factory(t) {
  return new (t || ProfilePageRoutingModule)();
};
ProfilePageRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
  type: ProfilePageRoutingModule
});
ProfilePageRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](ProfilePageRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
})();

/***/ }),

/***/ 88558:
/*!*************************************************!*\
  !*** ./src/app/pages/profile/profile.module.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProfilePageModule": () => (/* binding */ ProfilePageModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _profile_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./profile-routing.module */ 41474);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ 38699);
/* harmony import */ var _profile_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./profile.page */ 64629);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);







class ProfilePageModule {}
ProfilePageModule.ɵfac = function ProfilePageModule_Factory(t) {
  return new (t || ProfilePageModule)();
};
ProfilePageModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
  type: ProfilePageModule
});
ProfilePageModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule, _profile_routing_module__WEBPACK_IMPORTED_MODULE_0__.ProfilePageRoutingModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__.TranslateModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](ProfilePageModule, {
    declarations: [_profile_page__WEBPACK_IMPORTED_MODULE_1__.ProfilePage],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule, _profile_routing_module__WEBPACK_IMPORTED_MODULE_0__.ProfilePageRoutingModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__.TranslateModule]
  });
})();

/***/ }),

/***/ 64629:
/*!***********************************************!*\
  !*** ./src/app/pages/profile/profile.page.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProfilePage": () => (/* binding */ ProfilePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../app.component */ 55041);
/* harmony import */ var http_status_codes__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! http-status-codes */ 92788);
/* harmony import */ var _profile_pop_up_profile_pop_up_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../profile-pop-up/profile-pop-up.page */ 74995);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var src_providers_utils_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/providers/utils/config */ 43485);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/platform-browser */ 34497);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var src_providers_utils_utils_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/providers/utils/utils.service */ 30423);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ngx-translate/core */ 38699);
/* harmony import */ var _getProfileDetailsService__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./getProfileDetailsService */ 85059);
/* harmony import */ var _awesome_cordova_plugins_camera_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @awesome-cordova-plugins/camera/ngx */ 82543);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ 94666);













function ProfilePage_ion_label_21_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "ion-label", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("", ctx_r0.userDetails.name, " ");
  }
}
function ProfilePage_ion_label_23_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "ion-label", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "- ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function ProfilePage_ion_label_30_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "ion-label", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r2.userDetails.email);
  }
}
function ProfilePage_ion_label_32_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "ion-label", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "- ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function ProfilePage_ion_label_39_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "ion-label", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r4.userDetails.birthDate);
  }
}
function ProfilePage_ion_label_41_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "ion-label", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "- ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function ProfilePage_ion_label_48_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "ion-label", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("", ctx_r6.userDetails.identityNumber, " ");
  }
}
function ProfilePage_ion_label_50_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "ion-label", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "- ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function ProfilePage_ion_label_57_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "ion-label", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("", ctx_r8.userDetails.nationality, " ");
  }
}
function ProfilePage_ion_label_59_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "ion-label", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "- ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function ProfilePage_ion_label_66_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "ion-label", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("", ctx_r10.userDetails.race, " ");
  }
}
function ProfilePage_ion_label_68_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "ion-label", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "- ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function ProfilePage_ion_label_75_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "ion-label", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("", ctx_r12.userDetails.maritalStatus, " ");
  }
}
function ProfilePage_ion_label_77_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "ion-label", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "- ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function ProfilePage_ion_label_84_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "ion-label", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("", ctx_r14.userDetails.addressField1, " ");
  }
}
function ProfilePage_ion_label_86_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "ion-label", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("", ctx_r15.userDetails.addressField2, " ");
  }
}
function ProfilePage_ion_label_88_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "ion-label", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("", ctx_r16.userDetails.addressField3, " ");
  }
}
function ProfilePage_ion_label_90_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "ion-label", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("", ctx_r17.userDetails.addressField4, " ");
  }
}
function ProfilePage_ion_label_97_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "ion-label", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r18.userDetails.homePhone);
  }
}
function ProfilePage_ion_label_99_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "ion-label", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "- ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function ProfilePage_ion_label_106_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "ion-label", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("", ctx_r20.userDetails.mobilePhone, " ");
  }
}
function ProfilePage_ion_label_108_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "ion-label", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "- ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function ProfilePage_ion_label_115_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "ion-label", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("", ctx_r22.userDetails.officePhone, " ");
  }
}
function ProfilePage_ion_label_117_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "ion-label", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "- ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
class ProfilePage {
  constructor(config, _DomSanitizer, menuControl, utils, translate, modalCtrl, profileService, camera) {
    this.config = config;
    this._DomSanitizer = _DomSanitizer;
    this.menuControl = menuControl;
    this.utils = utils;
    this.translate = translate;
    this.modalCtrl = modalCtrl;
    this.profileService = profileService;
    this.camera = camera;
    this.config.currentPage.pageName = "ProfilePage";
    //Reading userdetails from Config
    this.userDetails = this.config.userDetails;
    this.profileImage = this._DomSanitizer.bypassSecurityTrustUrl(this.config.userDetails.profilePicture);
    //checking if the userdetails details coantains profile picture data
    if (this.config.userDetails.profilePicture === "data:image/jpeg;base64," || this.config.userDetails.profilePicture === null || this.config.userDetails.profilePicture === "") {
      this.userDetails.profilePicture = "assets/imgs/empty-avatar.jpg";
      this.profileImage = this.userDetails.profilePicture;
    }
  }
  ionViewWillEnter() {
    //this.utils.component.emit(MenuOptions.ABOUT_US);
    this.menuControl.enable(true);
    this.utils.component.emit(_app_component__WEBPACK_IMPORTED_MODULE_0__.MenuOptions.MY_PROFILE);
  }
  /**
     * this method is used to open camera / Gallery.
     * Camera will return a Base64 String which will be passed to uploadImageToServer() to upload to server.
     */
  chooseProfilePicture(source) {
    const options = {
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      sourceType: source,
      correctOrientation: true
      // allowEdit: true
    };

    this.camera.getPicture(options).then(imageData => {
      this.base64Data = imageData;
      imageData = this._DomSanitizer.bypassSecurityTrustUrl("data:image/jpeg;base64," + imageData);
      this.openAlert(imageData);
    }, err => {
      let errMsg;
      if (source == 1) {
        errMsg = this.translate.instant('claim_submission.err_cam');
      } else {
        errMsg = this.translate.instant('claim_submission.err_gallery');
      }
      // Error occured while getting image from Camera.
      // var errmsg = this.translate.instant('profile.err_camera');
      // this.utils.presentToast(err);
      this.utils.showAlert('', errMsg, false);
    });
  }
  /**
     * this method provides option to select either Camera or Gallery
     */
  openAlert(data) {
    return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
      const modal = yield this.modalCtrl.create({
        component: _profile_pop_up_profile_pop_up_page__WEBPACK_IMPORTED_MODULE_1__.ProfilePopUpPage,
        cssClass: 'profile_modal',
        backdropDismiss: false,
        componentProps: {
          imageData: data
        }
      });
      modal.onDidDismiss().then(data => {
        if (data.data == 1) {
          this.chooseProfilePicture(this.camera.PictureSourceType.CAMERA);
        } else if (data.data == 2) {
          this.chooseProfilePicture(this.camera.PictureSourceType.PHOTOLIBRARY);
        } else {
          if (data.data != null) {
            this.uploadImageToServer(this.base64Data);
          }
        }
      });
      return yield modal.present();
      // const dataFromModal = await modal.onDidDismiss();
      // alert(JSON.stringify(dataFromModal));
      // if (dataFromModal == 1) {
      //   this.chooseProfilePicture(this.camera.PictureSourceType.CAMERA);
      // } else if (dataFromModal == 2) {
      //   this.chooseProfilePicture(this.camera.PictureSourceType.PHOTOLIBRARY);
      // } else {
      //   if (dataFromModal != null) {
      //     this.uploadImageToServer(this.base64Data);
      //   }
      // }
    });
  }
  /**
     * This method is used to upload image data to server
     */
  uploadImageToServer(base64ImgData) {
    this.utils.showProgressLoader();
    this.profileService.updateProfilePicture(base64ImgData).then(response => {
      try {
        if (response['responseJSON'] && response['responseJSON']['statusCode'] == http_status_codes__WEBPACK_IMPORTED_MODULE_8__.OK) {
          this.utils.dissmisProgressLoader();
          this.userDetails.profilePicture = "data:image/jpeg;base64," + base64ImgData;
          this.config.userDetails.profilePicture = this.userDetails.profilePicture;
          this.profileImage = this._DomSanitizer.bypassSecurityTrustUrl(this.config.userDetails.profilePicture);
          this.utils.publishSomeData({
            'event': 'PicUpdated',
            'data': this.userDetails.profilePicture
          });
          this.utils.presentToast(response['responseJSON']['userMessage']);
        } else if (response['responseJSON'] && response['responseJSON']['statusCode'] == http_status_codes__WEBPACK_IMPORTED_MODULE_8__.ACCEPTED) {
          this.utils.dissmisProgressLoader();
          this.userDetails.profilePicture = 'data:image/jpeg;base64,' + base64ImgData;
          this.config.userDetails.profilePicture = this.userDetails.profilePicture;
          this.profileImage = this._DomSanitizer.bypassSecurityTrustUrl(this.config.userDetails.profilePicture);
          this.utils.publishSomeData({
            'event': 'PicUpdated',
            'data': this.userDetails.profilePicture
          });
          this.utils.presentToast(response['responseJSON']['userMessage']);
        } else {
          this.utils.dissmisProgressLoader();
          let errmsg = this.translate.instant('profile.err_pic_upload');
          this.utils.presentToast(errmsg);
        }
      } catch (e) {
        this.utils.dissmisProgressLoader();
        let errmsg = this.translate.instant('profile.err_pic_upload');
        this.utils.presentToast(errmsg);
      }
    }, error => {
      this.utils.dissmisProgressLoader();
      let errmsg = this.utils.handleServiceException(error);
      this.utils.presentToast(errmsg);
    });
  }
}
ProfilePage.ɵfac = function ProfilePage_Factory(t) {
  return new (t || ProfilePage)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_providers_utils_config__WEBPACK_IMPORTED_MODULE_2__.ConfigProvider), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__.DomSanitizer), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_10__.MenuController), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_providers_utils_utils_service__WEBPACK_IMPORTED_MODULE_3__.UtilService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__.TranslateService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_10__.ModalController), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_getProfileDetailsService__WEBPACK_IMPORTED_MODULE_4__.GetProfileDetailsService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_awesome_cordova_plugins_camera_ngx__WEBPACK_IMPORTED_MODULE_5__.Camera));
};
ProfilePage.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({
  type: ProfilePage,
  selectors: [["app-profile"]],
  decls: 118,
  vars: 64,
  consts: [["mode", "ios"], ["color", "primary", 1, "toolbar"], ["slot", "start", "auto-hide", "false", "color", "secondary"], [1, "bold-font"], ["text-center", "", 1, "top", "row"], ["alt", "...", 1, "profilePic", 3, "src", "click"], ["stacked", "", "text-center", "", 1, "heading", "top", "font_size_17", "link", "label", 3, "click"], [1, "white_container_border_radius", "text_color_base", "padding_015", "margin"], [1, "list_item"], [1, "margin-bottom"], ["stacked", "", 1, "heading", "font_size_17"], ["class", "content font_size_17", 4, "ngIf"], ["stacked", "", "class", "content font_size_17", 4, "ngIf"], [1, "content", "font_size_17"], ["stacked", "", 1, "content", "font_size_17"]],
  template: function ProfilePage_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "ion-header", 0)(1, "ion-toolbar", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](2, "ion-menu-button", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "ion-title", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](5, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "ion-content")(7, "div")(8, "ion-row", 4)(9, "ion-col")(10, "img", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function ProfilePage_Template_img_click_10_listener() {
        return ctx.openAlert(null);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](11, "ion-label", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function ProfilePage_Template_ion_label_click_11_listener() {
        return ctx.openAlert(null);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](12);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](13, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](14, "div", 7)(15, "div", 8)(16, "ion-row", 9)(17, "ion-label", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](18);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](19, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](20, "ion-row");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](21, ProfilePage_ion_label_21_Template, 2, 1, "ion-label", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](22, "ion-row");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](23, ProfilePage_ion_label_23_Template, 2, 0, "ion-label", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](24, "div", 8)(25, "ion-row", 9)(26, "ion-label", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](27);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](28, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](29, "ion-row");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](30, ProfilePage_ion_label_30_Template, 2, 1, "ion-label", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](31, "ion-row");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](32, ProfilePage_ion_label_32_Template, 2, 0, "ion-label", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](33, "div", 8)(34, "ion-row", 9)(35, "ion-label", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](36);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](37, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](38, "ion-row");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](39, ProfilePage_ion_label_39_Template, 2, 1, "ion-label", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](40, "ion-row");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](41, ProfilePage_ion_label_41_Template, 2, 0, "ion-label", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](42, "div", 8)(43, "ion-row", 9)(44, "ion-label", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](45);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](46, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](47, "ion-row");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](48, ProfilePage_ion_label_48_Template, 2, 1, "ion-label", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](49, "ion-row");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](50, ProfilePage_ion_label_50_Template, 2, 0, "ion-label", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](51, "div", 8)(52, "ion-row", 9)(53, "ion-label", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](54);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](55, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](56, "ion-row");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](57, ProfilePage_ion_label_57_Template, 2, 1, "ion-label", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](58, "ion-row");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](59, ProfilePage_ion_label_59_Template, 2, 0, "ion-label", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](60, "div", 8)(61, "ion-row", 9)(62, "ion-label", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](63);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](64, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](65, "ion-row");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](66, ProfilePage_ion_label_66_Template, 2, 1, "ion-label", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](67, "ion-row");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](68, ProfilePage_ion_label_68_Template, 2, 0, "ion-label", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](69, "div", 8)(70, "ion-row", 9)(71, "ion-label", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](72);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](73, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](74, "ion-row");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](75, ProfilePage_ion_label_75_Template, 2, 1, "ion-label", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](76, "ion-row");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](77, ProfilePage_ion_label_77_Template, 2, 0, "ion-label", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](78, "div", 8)(79, "ion-row", 9)(80, "ion-label", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](81);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](82, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](83, "ion-row");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](84, ProfilePage_ion_label_84_Template, 2, 1, "ion-label", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](85, "ion-row");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](86, ProfilePage_ion_label_86_Template, 2, 1, "ion-label", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](87, "ion-row");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](88, ProfilePage_ion_label_88_Template, 2, 1, "ion-label", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](89, "ion-row");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](90, ProfilePage_ion_label_90_Template, 2, 1, "ion-label", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](91, "div", 8)(92, "ion-row", 9)(93, "ion-label", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](94);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](95, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](96, "ion-row");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](97, ProfilePage_ion_label_97_Template, 2, 1, "ion-label", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](98, "ion-row");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](99, ProfilePage_ion_label_99_Template, 2, 0, "ion-label", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](100, "div", 8)(101, "ion-row", 9)(102, "ion-label", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](103);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](104, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](105, "ion-row");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](106, ProfilePage_ion_label_106_Template, 2, 1, "ion-label", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](107, "ion-row");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](108, ProfilePage_ion_label_108_Template, 2, 0, "ion-label", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](109, "div", 8)(110, "ion-row", 9)(111, "ion-label", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](112);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](113, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](114, "ion-row");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](115, ProfilePage_ion_label_115_Template, 2, 1, "ion-label", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](116, "ion-row");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](117, ProfilePage_ion_label_117_Template, 2, 0, "ion-label", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](5, 38, "profile.title"), " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("src", ctx.profileImage, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsanitizeUrl"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](13, 40, "profile.change_profile_pic"), " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](19, 42, "profile.name"), " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.userDetails.name);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !ctx.userDetails.name);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](28, 44, "profile.email"), " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.userDetails.email);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !ctx.userDetails.email);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](37, 46, "profile.birth_date"), " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.userDetails.birthDate);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !ctx.userDetails.birthDate);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](46, 48, "profile.identityNumber"), " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.userDetails.identityNumber);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !ctx.userDetails.identityNumber);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](55, 50, "profile.nationality"), " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.userDetails.nationality);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !ctx.userDetails.nationality);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](64, 52, "profile.race"), " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.userDetails.race);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !ctx.userDetails.race);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](73, 54, "profile.marrial_status"), " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.userDetails.maritalStatus);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !ctx.userDetails.maritalStatus);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](82, 56, "profile.address"));
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.userDetails.addressField1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.userDetails.addressField2);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.userDetails.addressField3);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.userDetails.addressField4);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](95, 58, "profile.home_phone"), " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.userDetails.homePhone);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !ctx.userDetails.homePhone);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](104, 60, "profile.mobile_phone"));
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.userDetails.mobilePhone);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !ctx.userDetails.mobilePhone);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](113, 62, "profile.ofc_phone"));
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.userDetails.officePhone);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !ctx.userDetails.officePhone);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_12__.NgIf, _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.IonCol, _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.IonContent, _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.IonHeader, _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.IonLabel, _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.IonMenuButton, _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.IonRow, _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.IonTitle, _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.IonToolbar, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__.TranslatePipe],
  styles: ["ion-content[_ngcontent-%COMP%] {\n  --background: url(/../assets/imgs/app_bg.jpg) no-repeat center center / cover;\n}\n\n.white_container_border_radius[_ngcontent-%COMP%] {\n  background-color: rgba(255, 255, 255, 0.7) !important;\n  border-radius: 15px !important;\n  margin-left: 15px;\n  margin-right: 15px;\n}\n\n.list_item[_ngcontent-%COMP%] {\n  border-bottom: 1px solid rgba(0, 45, 61, 0.3);\n  margin-top: 10px;\n}\n\n.list_item[_ngcontent-%COMP%]:last-child {\n  border-bottom: none !important;\n}\n\n.text_color_base[_ngcontent-%COMP%] {\n  color: black;\n}\n\n.font_size_17[_ngcontent-%COMP%] {\n  font-size: 19px !important;\n}\n\n.padding_015[_ngcontent-%COMP%] {\n  padding: 0px 15px;\n}\n\n.profilePic[_ngcontent-%COMP%] {\n  border-radius: 30px;\n  width: 23vh;\n  height: 23vh;\n}\n\n.heading[_ngcontent-%COMP%] {\n  font-family: Agenda-SemiBold !important;\n}\n\n.heading[_ngcontent-%COMP%]   .col[_ngcontent-%COMP%] {\n  font-family: Agenda-SemiBold !important;\n  line-height: 16px;\n}\n\n.content[_ngcontent-%COMP%] {\n  font-family: Agenda-Regular;\n  color: black !important;\n}\n\n.row[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-top: 20px;\n}\n\n.label[_ngcontent-%COMP%] {\n  display: flex;\n  margin-bottom: 20px;\n  justify-content: center;\n}\n\n.link[_ngcontent-%COMP%] {\n  color: #6095c9 !important;\n  text-decoration: underline;\n  white-space: unset !important;\n  line-height: 24px;\n  margin-top: 0px;\n}\n\n.flex-row[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.margin-bottom[_ngcontent-%COMP%] {\n  margin-bottom: 10px;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcGFnZXMvcHJvZmlsZS9wcm9maWxlLnBhZ2Uuc2NzcyIsIndlYnBhY2s6Ly8uLy4uLy4uLy4uL0FsbCUyMFByb2plY3RzL01hbGF5c2lhX0NsaWVudEFwcF9SZXZhbXAvU3VuQWNjZXNzX0lvbmljNl9SZXZhbXAvc3JjL2FwcC9wYWdlcy9wcm9maWxlL3Byb2ZpbGUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksNkVBQUE7QUNDSjs7QURPQTtFQUNJLHFEQUFBO0VBQ0EsOEJBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FDSko7O0FET0E7RUFDSSw2Q0FBQTtFQUNBLGdCQUFBO0FDSko7O0FET0E7RUFDSSw4QkFBQTtBQ0pKOztBRE9BO0VBQ0ksWUFBQTtBQ0pKOztBRE9BO0VBQ0ksMEJBQUE7QUNKSjs7QURPQTtFQUNJLGlCQUFBO0FDSko7O0FET0E7RUFDSSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FDSko7O0FET0E7RUFDSSx1Q0FBQTtBQ0pKOztBRE9BO0VBQ0ksdUNBQUE7RUFDQSxpQkFBQTtBQ0pKOztBRFdBO0VBQ0ksMkJBQUE7RUFDQSx1QkFBQTtBQ1JKOztBRFlBO0VBQ0ksa0JBQUE7RUFDQSxnQkFBQTtBQ1RKOztBRFlBO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7QUNUSjs7QURZQTtFQUNJLHlCQUFBO0VBQ0EsMEJBQUE7RUFDQSw2QkFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtBQ1RKOztBRFlBO0VBQ0ksYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUNUSjs7QURZQTtFQUNJLG1CQUFBO0FDVEoiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY29udGVudCB7XHJcbiAgICAtLWJhY2tncm91bmQ6IHVybCgvLi4vYXNzZXRzL2ltZ3MvYXBwX2JnLmpwZykgbm8tcmVwZWF0IGNlbnRlciBjZW50ZXIgLyBjb3ZlcjtcclxuXHJcbiAgICAvLyBpb24tbGFiZWwge1xyXG4gICAgLy8gICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIC8vICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAvLyB9XHJcbn1cclxuXHJcbi53aGl0ZV9jb250YWluZXJfYm9yZGVyX3JhZGl1cyB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNykgIWltcG9ydGFudDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDE1cHggIWltcG9ydGFudDtcclxuICAgIG1hcmdpbi1sZWZ0OiAxNXB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xyXG59XHJcblxyXG4ubGlzdF9pdGVtIHtcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKDAsIDQ1LCA2MSwgLjMpO1xyXG4gICAgbWFyZ2luLXRvcDogMTBweDtcclxufVxyXG5cclxuLmxpc3RfaXRlbTpsYXN0LWNoaWxkIHtcclxuICAgIGJvcmRlci1ib3R0b206IG5vbmUgIWltcG9ydGFudDtcclxufVxyXG5cclxuLnRleHRfY29sb3JfYmFzZSB7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbn1cclxuXHJcbi5mb250X3NpemVfMTcge1xyXG4gICAgZm9udC1zaXplOiAxOXB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5wYWRkaW5nXzAxNSB7XHJcbiAgICBwYWRkaW5nOiAwcHggMTVweDtcclxufVxyXG5cclxuLnByb2ZpbGVQaWN7XHJcbiAgICBib3JkZXItcmFkaXVzOiAzMHB4Oy8vMjUlO1xyXG4gICAgd2lkdGg6IDIzdmg7XHJcbiAgICBoZWlnaHQ6IDIzdmg7XHJcbn1cclxuXHJcbi5oZWFkaW5nIHtcclxuICAgIGZvbnQtZmFtaWx5OiBBZ2VuZGEtU2VtaUJvbGQgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmhlYWRpbmcgLmNvbCB7XHJcbiAgICBmb250LWZhbWlseTogQWdlbmRhLVNlbWlCb2xkICFpbXBvcnRhbnQ7XHJcbiAgICBsaW5lLWhlaWdodDogMTZweDtcclxufVxyXG5cclxuLy8gLmhlYWRpbmcgLmxhYmVsIHtcclxuLy8gICAgIGNvbG9yOiBjb2xvcigkY29sb3JzLCBzZWNvbmRhcnkpO1xyXG4vLyB9XHJcblxyXG4uY29udGVudHtcclxuICAgIGZvbnQtZmFtaWx5OiBBZ2VuZGEtUmVndWxhcjtcclxuICAgIGNvbG9yOiBibGFjayAhaW1wb3J0YW50O1xyXG59XHJcblxyXG5cclxuLnJvdyB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG59XHJcblxyXG4ubGFiZWwge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG5cclxuLmxpbmt7XHJcbiAgICBjb2xvcjogIzYwOTVjOSAhaW1wb3J0YW50O1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XHJcbiAgICB3aGl0ZS1zcGFjZTogdW5zZXQgIWltcG9ydGFudDtcclxuICAgIGxpbmUtaGVpZ2h0OiAyNHB4O1xyXG4gICAgbWFyZ2luLXRvcDowcHg7XHJcbn1cclxuXHJcbi5mbGV4LXJvdyB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4ubWFyZ2luLWJvdHRvbSB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG59XHJcbiIsImlvbi1jb250ZW50IHtcbiAgLS1iYWNrZ3JvdW5kOiB1cmwoLy4uL2Fzc2V0cy9pbWdzL2FwcF9iZy5qcGcpIG5vLXJlcGVhdCBjZW50ZXIgY2VudGVyIC8gY292ZXI7XG59XG5cbi53aGl0ZV9jb250YWluZXJfYm9yZGVyX3JhZGl1cyB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC43KSAhaW1wb3J0YW50O1xuICBib3JkZXItcmFkaXVzOiAxNXB4ICFpbXBvcnRhbnQ7XG4gIG1hcmdpbi1sZWZ0OiAxNXB4O1xuICBtYXJnaW4tcmlnaHQ6IDE1cHg7XG59XG5cbi5saXN0X2l0ZW0ge1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiYSgwLCA0NSwgNjEsIDAuMyk7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG59XG5cbi5saXN0X2l0ZW06bGFzdC1jaGlsZCB7XG4gIGJvcmRlci1ib3R0b206IG5vbmUgIWltcG9ydGFudDtcbn1cblxuLnRleHRfY29sb3JfYmFzZSB7XG4gIGNvbG9yOiBibGFjaztcbn1cblxuLmZvbnRfc2l6ZV8xNyB7XG4gIGZvbnQtc2l6ZTogMTlweCAhaW1wb3J0YW50O1xufVxuXG4ucGFkZGluZ18wMTUge1xuICBwYWRkaW5nOiAwcHggMTVweDtcbn1cblxuLnByb2ZpbGVQaWMge1xuICBib3JkZXItcmFkaXVzOiAzMHB4O1xuICB3aWR0aDogMjN2aDtcbiAgaGVpZ2h0OiAyM3ZoO1xufVxuXG4uaGVhZGluZyB7XG4gIGZvbnQtZmFtaWx5OiBBZ2VuZGEtU2VtaUJvbGQgIWltcG9ydGFudDtcbn1cblxuLmhlYWRpbmcgLmNvbCB7XG4gIGZvbnQtZmFtaWx5OiBBZ2VuZGEtU2VtaUJvbGQgIWltcG9ydGFudDtcbiAgbGluZS1oZWlnaHQ6IDE2cHg7XG59XG5cbi5jb250ZW50IHtcbiAgZm9udC1mYW1pbHk6IEFnZW5kYS1SZWd1bGFyO1xuICBjb2xvcjogYmxhY2sgIWltcG9ydGFudDtcbn1cblxuLnJvdyB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luLXRvcDogMjBweDtcbn1cblxuLmxhYmVsIHtcbiAgZGlzcGxheTogZmxleDtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5saW5rIHtcbiAgY29sb3I6ICM2MDk1YzkgIWltcG9ydGFudDtcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG4gIHdoaXRlLXNwYWNlOiB1bnNldCAhaW1wb3J0YW50O1xuICBsaW5lLWhlaWdodDogMjRweDtcbiAgbWFyZ2luLXRvcDogMHB4O1xufVxuXG4uZmxleC1yb3cge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLm1hcmdpbi1ib3R0b20ge1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufSJdLCJzb3VyY2VSb290IjoiIn0= */"]
});

/***/ })

}]);
//# sourceMappingURL=src_app_pages_profile_profile_module_ts.js.map