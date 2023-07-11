"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_healthinfo_healthinfo_module_ts"],{

/***/ 31204:
/*!***************************************************************!*\
  !*** ./src/app/pages/healthinfo/healthinfo-routing.module.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HealthinfoPageRoutingModule": () => (/* binding */ HealthinfoPageRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _healthinfo_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./healthinfo.page */ 29233);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);




const routes = [{
  path: '',
  component: _healthinfo_page__WEBPACK_IMPORTED_MODULE_0__.HealthinfoPage
}];
class HealthinfoPageRoutingModule {}
HealthinfoPageRoutingModule.ɵfac = function HealthinfoPageRoutingModule_Factory(t) {
  return new (t || HealthinfoPageRoutingModule)();
};
HealthinfoPageRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
  type: HealthinfoPageRoutingModule
});
HealthinfoPageRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](HealthinfoPageRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
})();

/***/ }),

/***/ 21424:
/*!*******************************************************!*\
  !*** ./src/app/pages/healthinfo/healthinfo.module.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HealthinfoPageModule": () => (/* binding */ HealthinfoPageModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _healthinfo_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./healthinfo-routing.module */ 31204);
/* harmony import */ var _healthinfo_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./healthinfo.page */ 29233);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ 38699);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);







class HealthinfoPageModule {}
HealthinfoPageModule.ɵfac = function HealthinfoPageModule_Factory(t) {
  return new (t || HealthinfoPageModule)();
};
HealthinfoPageModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
  type: HealthinfoPageModule
});
HealthinfoPageModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__.TranslateModule, _healthinfo_routing_module__WEBPACK_IMPORTED_MODULE_0__.HealthinfoPageRoutingModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](HealthinfoPageModule, {
    declarations: [_healthinfo_page__WEBPACK_IMPORTED_MODULE_1__.HealthinfoPage],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__.TranslateModule, _healthinfo_routing_module__WEBPACK_IMPORTED_MODULE_0__.HealthinfoPageRoutingModule]
  });
})();

/***/ }),

/***/ 29233:
/*!*****************************************************!*\
  !*** ./src/app/pages/healthinfo/healthinfo.page.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HealthinfoPage": () => (/* binding */ HealthinfoPage)
/* harmony export */ });
/* harmony import */ var src_providers_utils_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/providers/utils/config */ 43485);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var src_app_services_translate_config_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/translate-config.service */ 45340);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ 38699);
/* harmony import */ var src_providers_utils_utils_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/providers/utils/utils.service */ 30423);
/* harmony import */ var _healthinfoService__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./healthinfoService */ 33255);
/* harmony import */ var src_providers_logger_service_logger_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/providers/logger-service/logger-service */ 9999);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 94666);











const _c0 = ["Content"];
function HealthinfoPage_section_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "section", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "ion-spinner", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function HealthinfoPage_section_8_button_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function HealthinfoPage_section_8_button_3_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r5);
      const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r4.getHealthInfoList(undefined));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](2, 1, "generic_msgs.try_again"));
  }
}
function HealthinfoPage_section_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "section", 11)(1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](3, HealthinfoPage_section_8_button_3_Template, 3, 3, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r1.errorMsg);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.canTryAgain);
  }
}
function HealthinfoPage_div_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 14)(1, "ion-row")(2, "p", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "ion-row")(5, "p", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "ion-row")(8, "img", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("load", function HealthinfoPage_div_11_Template_img_load_8_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r8);
      const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r7.loaded = true);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "ion-row")(10, "p", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](12, "slice");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](13, "ion-row", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function HealthinfoPage_div_11_Template_ion_row_click_13_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r8);
      const healthInfo_r6 = restoredCtx.$implicit;
      const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r9.navToDetails(healthInfo_r6.id, healthInfo_r6.imagePath));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](14, "a", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](15, "Read More");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](16, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const healthInfo_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](healthInfo_r6.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](healthInfo_r6.date);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("src", healthInfo_r6.imagePath, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind3"](12, 4, healthInfo_r6.escription, 0, 200));
  }
}
class HealthinfoPage {
  constructor(translateConfigService, translate, utils, healthinfoService, logger, platform, config, router) {
    this.translateConfigService = translateConfigService;
    this.translate = translate;
    this.utils = utils;
    this.healthinfoService = healthinfoService;
    this.logger = logger;
    this.platform = platform;
    this.config = config;
    this.router = router;
    this.healthInfolist = [];
    this.isServiceCallInProgress = false;
    this.isLastPageReached = false;
    this.hasRecords = true;
    this.pageNum = 1;
    this.getHealthInfoList = function (infinite) {
      if (this.utils.isDeviceOnLine()) {
        if (this.pageNum <= this.lastPageIndex && !this.canTryAgain) {
          return;
        }
        this.lastPageIndex = this.pageNum;
        this.isServiceCallInProgress = true;
        this.hasRecords = true;
        if (infinite == undefined) {
          this.canTryAgain = false;
          this.isShowingLoader = true;
          this.errorMsg = "";
        }
        this.logger.trace("get getHealthInfoList--start");
        this.healthinfoService.getHealthInfo(this.pageNum).then(result => {
          try {
            if (this.healthInfolist.length > 0) {
              this.healthInfolist = this.healthInfolist.concat(result['responseJSON']['array']);
            } else {
              this.healthInfolist = result['responseJSON']['array'];
              src_providers_utils_config__WEBPACK_IMPORTED_MODULE_0__.ConfigProvider.PAGE_SIZE = result['responseJSON']['pageSize'];
            }
            if (this.pageNum == 1) {
              var contentHeight = this.content.getContentDimensions().contentHeight;
              var pageHeight = this.platform.height();
              if (contentHeight < pageHeight) {
                this.pageNum++;
                this.getHealthInfoList(undefined);
              }
            }
            this.isServiceCallInProgress = false;
            if (!(this.healthInfolist.length > 0)) {
              if (infinite == undefined) {
                this.canTryAgain = false;
                this.errorMsg = this.translate.instant('generic_msgs.no_data');
              }
              if (result['responseJSON']['array'] < src_providers_utils_config__WEBPACK_IMPORTED_MODULE_0__.ConfigProvider.PAGE_SIZE) {
                this.isLastPageReached = true;
                if (infinite) infinite.enable(false);
              } else {
                this.pageNum++;
              }
            } else {
              if (result['responseJSON']['array'] < src_providers_utils_config__WEBPACK_IMPORTED_MODULE_0__.ConfigProvider.PAGE_SIZE) {
                this.isLastPageReached = true;
                if (infinite) infinite.enable(false);
              } else {
                this.pageNum++;
              }
            }
            if (infinite != undefined) infinite.complete();else {
              this.isShowingLoader = false;
            }
          } catch (e) {
            this.isServiceCallInProgress = false;
            if (infinite == undefined) {
              this.isShowingLoader = false;
              this.canTryAgain = true;
              this.errorMsg = this.translate.instant('generic_msgs.server_err');
            } else {
              infinite.complete();
            }
          }
        }, err => {
          this.isServiceCallInProgress = false;
          if (infinite == undefined) {
            this.isShowingLoader = false;
            this.canTryAgain = true;
            this.errorMsg = this.utils.handleServiceException(err);
          } else {
            infinite.complete();
          }
        });
      } else {
        this.isServiceCallInProgress = false;
        if (infinite == undefined) {
          this.isShowingLoader = false;
          this.canTryAgain = true;
          this.errorMsg = this.translate.instant('generic_msgs.network_err');
        } else {
          infinite.complete();
        }
      }
    };
    this.selectedLanguage = this.translateConfigService.getDefaultLanguage();
    this.translateConfigService.setLanguage('en');
  }
  ngOnInit() {
    this.getHealthInfoList(undefined);
  }
  getMoreHealthInfo(infinite) {
    // This is required to handle multiple triggers from Ionic load more
    if (this.loadMoreTimer) {
      clearTimeout(this.loadMoreTimer);
    }
    this.loadMoreTimer = setTimeout(() => {
      this.logger.trace("HealthinfoPage --getMoreHealthInfo--start--infinite : " + infinite);
      if (!this.isServiceCallInProgress) {
        this.getHealthInfoList(infinite);
      }
      this.logger.trace("HealthinfoPage--getMoreHealthInfo--end");
      this.loadMoreTimer = null;
    }, 800);
  }
  /**
   *  This method is used to navigate to Health Info Details Page
   * @param photo - this is the item that we have selected.
   */
  navToDetails(infoID) {
    this.router.navigate(['healthinfo-detail'], {
      state: {
        data: infoID
      }
    });
    //this.navCtrl.push(HealthinfoDetailPage, infoID);
  }
  /**
   * Method used to repalce 'bpp1.' with ''
   * @param link - Image Url that need to be changed
   */
  replaceURL(link) {
    if (link != null && link != undefined) {
      link = link.replace('bpp1.', '');
      return link;
    }
  }
  openLink(link) {
    if (link != null && link != undefined) {
      link = link.replace('bpp1.', '');
      this.utils.openLink(link);
    }
  }
}
HealthinfoPage.ɵfac = function HealthinfoPage_Factory(t) {
  return new (t || HealthinfoPage)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_services_translate_config_service__WEBPACK_IMPORTED_MODULE_1__.TranslateConfigService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__.TranslateService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_providers_utils_utils_service__WEBPACK_IMPORTED_MODULE_2__.UtilService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_healthinfoService__WEBPACK_IMPORTED_MODULE_3__.HealthinfoService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_providers_logger_service_logger_service__WEBPACK_IMPORTED_MODULE_4__.LoggerServiceProvider), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_7__.Platform), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_providers_utils_config__WEBPACK_IMPORTED_MODULE_0__.ConfigProvider), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__.Router));
};
HealthinfoPage.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
  type: HealthinfoPage,
  selectors: [["app-healthinfo"]],
  viewQuery: function HealthinfoPage_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵviewQuery"](_c0, 5);
    }
    if (rf & 2) {
      let _t;
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx.content = _t.first);
    }
  },
  decls: 12,
  vars: 6,
  consts: [["mode", "ios"], ["color", "primary", 1, "toolbar"], ["slot", "start", "auto-hide", "false", "color", "secondary"], ["no-bounce", "", 1, "app_bg", "text_color_base", "ion-padding"], ["class", "spinnersection ion-text-center", 4, "ngIf"], ["class", "errorMsgSection", 4, "ngIf"], [1, "font_size_16"], [1, "white_container_border_radius", "text_color_base", "padding_015"], ["class", "list_item", 4, "ngFor", "ngForOf"], [1, "spinnersection", "ion-text-center"], ["name", "lines-sharp-small", 2, "height", "98%"], [1, "errorMsgSection"], [3, "click", 4, "ngIf"], [3, "click"], [1, "list_item"], [1, "healthInfoName"], [1, "date"], ["onError", "this.src='assets/imgs/placeholder-image.png';", "alt", "...", 1, "img", 3, "src", "load"], [1, "description"], [1, "readMore", 2, "color", "#539542"]],
  template: function HealthinfoPage_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ion-header", 0)(1, "ion-toolbar", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](2, "ion-menu-button", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "ion-title");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](5, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "ion-content", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](7, HealthinfoPage_section_7_Template, 2, 0, "section", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](8, HealthinfoPage_section_8_Template, 4, 2, "section", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "section", 6)(10, "div", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](11, HealthinfoPage_div_11_Template, 17, 8, "div", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](5, 4, "healthinfo.health_info"), " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.isShowingLoader);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !(ctx.healthInfolist.length > 0) && !ctx.isShowingLoader);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx.healthInfolist);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgIf, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonContent, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonHeader, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonMenuButton, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonRow, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonSpinner, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonTitle, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonToolbar, _angular_common__WEBPACK_IMPORTED_MODULE_9__.SlicePipe, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__.TranslatePipe],
  styles: [".app_bg[_ngcontent-%COMP%] {\n  --background: url('app_bg.jpg') no-repeat center center / cover;\n  background-size: cover;\n  background-repeat: no-repeat;\n  height: 100%;\n  background-position: bottom;\n}\n\n.healthInfoName[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-family: Agenda-Bold;\n  color: #002f3b;\n  margin-bottom: 0;\n}\n\n.date[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-family: Agenda-Light;\n  color: #002f3b;\n  margin-bottom: 0;\n}\n\n.description[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-family: Agenda-Light;\n  color: #002f3b;\n  margin-bottom: 0;\n  margin-top: 5px;\n  line-height: 18px;\n}\n\n.readMore[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-family: Agenda-Light;\n  color: #539542;\n  font-style: italic;\n}\n\n.img[_ngcontent-%COMP%] {\n  height: 40vh;\n  width: 100% !important;\n  padding: 5px;\n  margin-bottom: 5px;\n}\n\n.font_size_16[_ngcontent-%COMP%] {\n  font-size: 1.6rem !important;\n}\n\n.white_container_border_radius[_ngcontent-%COMP%] {\n  background-color: rgba(255, 255, 255, 0.7) !important;\n  border-radius: 15px !important;\n}\n\n.spinnersection[_ngcontent-%COMP%] {\n  display: block;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  font-size: 1.3rem;\n  height: 98%;\n}\n\n.errorMsgSection[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  height: 98%;\n  font-size: 0.8rem;\n  color: #494747 !important;\n  padding: 0px 15px;\n}\n\n.padding_015[_ngcontent-%COMP%] {\n  padding: 0px 15px;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcGFnZXMvaGVhbHRoaW5mby9oZWFsdGhpbmZvLnBhZ2Uuc2NzcyIsIndlYnBhY2s6Ly8uLy4uLy4uLy4uL0FsbCUyMFByb2plY3RzL01hbGF5c2lhX0NsaWVudEFwcF9SZXZhbXAvU3VuQWNjZXNzX0lvbmljNl9SZXZhbXAvc3JjL2FwcC9wYWdlcy9oZWFsdGhpbmZvL2hlYWx0aGluZm8ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsK0RBQUE7RUFDQSxzQkFBQTtFQUNBLDRCQUFBO0VBQ0EsWUFBQTtFQUNBLDJCQUFBO0FDQ0Y7O0FERUU7RUFDRSxlQUFBO0VBQWdCLHdCQUFBO0VBQXlCLGNBQUE7RUFBZSxnQkFBQTtBQ0k1RDs7QURERTtFQUNFLGVBQUE7RUFBZ0IseUJBQUE7RUFBMEIsY0FBQTtFQUFlLGdCQUFBO0FDTzdEOztBREpFO0VBQ0UsZUFBQTtFQUFnQix5QkFBQTtFQUEwQixjQUFBO0VBQWUsZ0JBQUE7RUFBaUIsZUFBQTtFQUFnQixpQkFBQTtBQ1k5Rjs7QURURTtFQUNFLGVBQUE7RUFBZ0IseUJBQUE7RUFBMEIsY0FBQTtFQUFlLGtCQUFBO0FDZTdEOztBRFpBO0VBQ0csWUFBQTtFQUNBLHNCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0FDZUg7O0FEYkU7RUFDRSw0QkFBQTtBQ2dCSjs7QURkRTtFQUNFLHFEQUFBO0VBQ0EsOEJBQUE7QUNpQko7O0FEZEU7RUFDRSxjQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxXQUFBO0FDaUJKOztBRGZFO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtFQUNBLHlCQUFBO0VBQ0EsaUJBQUE7QUNrQko7O0FEaEJFO0VBQ0UsaUJBQUE7QUNtQkoiLCJzb3VyY2VzQ29udGVudCI6WyIuYXBwX2JnIHtcclxuICAtLWJhY2tncm91bmQ6IHVybCguLi8uLi8uLi9hc3NldHMvaW1ncy9hcHBfYmcuanBnKSBuby1yZXBlYXQgY2VudGVyIGNlbnRlciAvIGNvdmVyO1xyXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogYm90dG9tO1xyXG4gIH1cclxuXHJcbiAgLmhlYWx0aEluZm9OYW1le1xyXG4gICAgZm9udC1zaXplOiAxNnB4O2ZvbnQtZmFtaWx5OiBBZ2VuZGEtQm9sZDtjb2xvcjogIzAwMmYzYjttYXJnaW4tYm90dG9tOiAwO1xyXG4gIH1cclxuXHJcbiAgLmRhdGV7XHJcbiAgICBmb250LXNpemU6IDE0cHg7Zm9udC1mYW1pbHk6IEFnZW5kYS1MaWdodDtjb2xvcjogIzAwMmYzYjttYXJnaW4tYm90dG9tOiAwO1xyXG4gIH1cclxuXHJcbiAgLmRlc2NyaXB0aW9ue1xyXG4gICAgZm9udC1zaXplOiAxNHB4O2ZvbnQtZmFtaWx5OiBBZ2VuZGEtTGlnaHQ7Y29sb3I6ICMwMDJmM2I7bWFyZ2luLWJvdHRvbTogMDttYXJnaW4tdG9wOiA1cHg7bGluZS1oZWlnaHQ6IDE4cHg7XHJcbiAgfVxyXG5cclxuICAucmVhZE1vcmV7XHJcbiAgICBmb250LXNpemU6IDE0cHg7Zm9udC1mYW1pbHk6IEFnZW5kYS1MaWdodDtjb2xvcjogIzUzOTU0Mjtmb250LXN0eWxlOiBpdGFsaWNcclxuICB9XHJcblxyXG4uaW1ne1xyXG4gICBoZWlnaHQ6IDQwdmg7XHJcbiAgIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XHJcbiAgIHBhZGRpbmc6IDVweDtcclxuICAgbWFyZ2luLWJvdHRvbTogNXB4O1xyXG4gIH1cclxuICAuZm9udF9zaXplXzE2IHtcclxuICAgIGZvbnQtc2l6ZTogMS42cmVtICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gIC53aGl0ZV9jb250YWluZXJfYm9yZGVyX3JhZGl1c3tcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC43KSAhaW1wb3J0YW50O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTVweCAhaW1wb3J0YW50O1xyXG5cclxuICB9XHJcbiAgLnNwaW5uZXJzZWN0aW9uIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGZvbnQtc2l6ZTogMS4zcmVtO1xyXG4gICAgaGVpZ2h0OiA5OCU7XHJcbiAgfVxyXG4gIC5lcnJvck1zZ1NlY3Rpb24ge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBoZWlnaHQ6IDk4JTtcclxuICAgIGZvbnQtc2l6ZTogMC44cmVtO1xyXG4gICAgY29sb3I6ICM0OTQ3NDcgIWltcG9ydGFudDtcclxuICAgIHBhZGRpbmc6IDBweCAxNXB4O1xyXG4gIH1cclxuICAucGFkZGluZ18wMTUge1xyXG4gICAgcGFkZGluZzogMHB4IDE1cHg7XHJcbn1cclxuIiwiLmFwcF9iZyB7XG4gIC0tYmFja2dyb3VuZDogdXJsKC4uLy4uLy4uL2Fzc2V0cy9pbWdzL2FwcF9iZy5qcGcpIG5vLXJlcGVhdCBjZW50ZXIgY2VudGVyIC8gY292ZXI7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGhlaWdodDogMTAwJTtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogYm90dG9tO1xufVxuXG4uaGVhbHRoSW5mb05hbWUge1xuICBmb250LXNpemU6IDE2cHg7XG4gIGZvbnQtZmFtaWx5OiBBZ2VuZGEtQm9sZDtcbiAgY29sb3I6ICMwMDJmM2I7XG4gIG1hcmdpbi1ib3R0b206IDA7XG59XG5cbi5kYXRlIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LWZhbWlseTogQWdlbmRhLUxpZ2h0O1xuICBjb2xvcjogIzAwMmYzYjtcbiAgbWFyZ2luLWJvdHRvbTogMDtcbn1cblxuLmRlc2NyaXB0aW9uIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LWZhbWlseTogQWdlbmRhLUxpZ2h0O1xuICBjb2xvcjogIzAwMmYzYjtcbiAgbWFyZ2luLWJvdHRvbTogMDtcbiAgbWFyZ2luLXRvcDogNXB4O1xuICBsaW5lLWhlaWdodDogMThweDtcbn1cblxuLnJlYWRNb3JlIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LWZhbWlseTogQWdlbmRhLUxpZ2h0O1xuICBjb2xvcjogIzUzOTU0MjtcbiAgZm9udC1zdHlsZTogaXRhbGljO1xufVxuXG4uaW1nIHtcbiAgaGVpZ2h0OiA0MHZoO1xuICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xuICBwYWRkaW5nOiA1cHg7XG4gIG1hcmdpbi1ib3R0b206IDVweDtcbn1cblxuLmZvbnRfc2l6ZV8xNiB7XG4gIGZvbnQtc2l6ZTogMS42cmVtICFpbXBvcnRhbnQ7XG59XG5cbi53aGl0ZV9jb250YWluZXJfYm9yZGVyX3JhZGl1cyB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC43KSAhaW1wb3J0YW50O1xuICBib3JkZXItcmFkaXVzOiAxNXB4ICFpbXBvcnRhbnQ7XG59XG5cbi5zcGlubmVyc2VjdGlvbiB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZm9udC1zaXplOiAxLjNyZW07XG4gIGhlaWdodDogOTglO1xufVxuXG4uZXJyb3JNc2dTZWN0aW9uIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGhlaWdodDogOTglO1xuICBmb250LXNpemU6IDAuOHJlbTtcbiAgY29sb3I6ICM0OTQ3NDcgIWltcG9ydGFudDtcbiAgcGFkZGluZzogMHB4IDE1cHg7XG59XG5cbi5wYWRkaW5nXzAxNSB7XG4gIHBhZGRpbmc6IDBweCAxNXB4O1xufSJdLCJzb3VyY2VSb290IjoiIn0= */"]
});

/***/ })

}]);
//# sourceMappingURL=src_app_pages_healthinfo_healthinfo_module_ts.js.map