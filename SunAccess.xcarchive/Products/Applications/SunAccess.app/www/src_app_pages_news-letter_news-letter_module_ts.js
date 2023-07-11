"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_news-letter_news-letter_module_ts"],{

/***/ 10427:
/*!*****************************************************************!*\
  !*** ./src/app/pages/news-letter/news-letter-routing.module.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NewsLetterPageRoutingModule": () => (/* binding */ NewsLetterPageRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _news_letter_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./news-letter.page */ 97650);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);




const routes = [{
  path: '',
  component: _news_letter_page__WEBPACK_IMPORTED_MODULE_0__.NewsLetterPage
}];
class NewsLetterPageRoutingModule {}
NewsLetterPageRoutingModule.ɵfac = function NewsLetterPageRoutingModule_Factory(t) {
  return new (t || NewsLetterPageRoutingModule)();
};
NewsLetterPageRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
  type: NewsLetterPageRoutingModule
});
NewsLetterPageRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](NewsLetterPageRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
})();

/***/ }),

/***/ 39153:
/*!*********************************************************!*\
  !*** ./src/app/pages/news-letter/news-letter.module.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NewsLetterPageModule": () => (/* binding */ NewsLetterPageModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _news_letter_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./news-letter-routing.module */ 10427);
/* harmony import */ var _news_letter_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./news-letter.page */ 97650);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ 38699);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);







class NewsLetterPageModule {}
NewsLetterPageModule.ɵfac = function NewsLetterPageModule_Factory(t) {
  return new (t || NewsLetterPageModule)();
};
NewsLetterPageModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
  type: NewsLetterPageModule
});
NewsLetterPageModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule, _news_letter_routing_module__WEBPACK_IMPORTED_MODULE_0__.NewsLetterPageRoutingModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__.TranslateModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](NewsLetterPageModule, {
    declarations: [_news_letter_page__WEBPACK_IMPORTED_MODULE_1__.NewsLetterPage],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule, _news_letter_routing_module__WEBPACK_IMPORTED_MODULE_0__.NewsLetterPageRoutingModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__.TranslateModule]
  });
})();

/***/ }),

/***/ 97650:
/*!*******************************************************!*\
  !*** ./src/app/pages/news-letter/news-letter.page.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NewsLetterPage": () => (/* binding */ NewsLetterPage)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var src_providers_utils_utils_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/providers/utils/utils.service */ 30423);
/* harmony import */ var src_providers_logger_service_logger_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/providers/logger-service/logger-service */ 9999);
/* harmony import */ var _newsLetterService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./newsLetterService */ 40761);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var src_providers_download_pdf_download_pdf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/providers/download-pdf/download-pdf */ 58339);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ 38699);
/* harmony import */ var src_providers_utils_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/providers/utils/config */ 43485);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 94666);









const _c0 = ["Content"];
function NewsLetterPage_section_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "section", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "ion-spinner", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function NewsLetterPage_section_14_button_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "button", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function NewsLetterPage_section_14_button_3_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r5);
      const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r4.getNewsLetter(undefined));
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
function NewsLetterPage_section_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "section", 14)(1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](3, NewsLetterPage_section_14_button_3_Template, 3, 3, "button", 15);
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
function NewsLetterPage_section_15_ion_row_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ion-row", 20)(1, "ion-label", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function NewsLetterPage_section_15_ion_row_2_Template_ion_label_click_1_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r10);
      const news_r8 = restoredCtx.$implicit;
      const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r9.downloadAndOpenPdf(news_r8));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const news_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", news_r8.name, " ");
  }
}
function NewsLetterPage_section_15_ion_infinite_scroll_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ion-infinite-scroll", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ionInfinite", function NewsLetterPage_section_15_ion_infinite_scroll_3_Template_ion_infinite_scroll_ionInfinite_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r12);
      const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r11.getMoreNews($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "ion-infinite-scroll-content");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function NewsLetterPage_section_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "section")(1, "ion-list", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](2, NewsLetterPage_section_15_ion_row_2_Template, 3, 1, "ion-row", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](3, NewsLetterPage_section_15_ion_infinite_scroll_3_Template, 2, 0, "ion-infinite-scroll", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx_r2.newsLetterList);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx_r2.isLastPageReached);
  }
}
class NewsLetterPage {
  constructor(utils, publiclogger, getNewsLetterService, logger, platform, downloadFile, translate, config) {
    this.utils = utils;
    this.getNewsLetterService = getNewsLetterService;
    this.logger = logger;
    this.platform = platform;
    this.downloadFile = downloadFile;
    this.translate = translate;
    this.config = config;
    this.errorMsg = "";
    this.newsLetterList = [];
    this.isShowingLoader = true;
    this.canTryAgain = false;
    this.isServiceCallInProgress = false;
    this.isLastPageReached = false;
    this.hasRecords = true;
    this.pageNum = 1;
    // ionViewDidLoad() {
    //     this.logger.log('ionViewDidLoad NewsLetterPage');
    //     this.getNewsLetter(undefined);
    // }
    /**
     * This is method is used to download and open the pdf file from a link
     */
    this.downloadAndOpenPdf = function (news) {
      if (news.fileType === 'PDF') {
        this.downloadFile.downloadFile(news._link);
      } else {
        this.utils.openLink(news._link);
      }
    };
    this.utils.analytics("newsLetter");
    this.config.currentPage.pageName = "NewsLetterPage";
  }
  ngOnInit() {
    this.logger.log('ionViewDidLoad NewsLetterPage');
    this.getNewsLetter(undefined);
  }
  /**
   * This method is used to get the list Of NewsLetters from Server
   */
  getNewsLetter(infinite) {
    if (this.utils.isDeviceOnLine()) {
      if (this.pageNum <= this.lastPageIndex) {
        return;
      }
      this.lastPageIndex = this.pageNum;
      this.isServiceCallInProgress = true;
      this.hasRecords = true;
      if (infinite === undefined) {
        this.canTryAgain = false;
        this.isShowingLoader = true;
        this.errorMsg = "";
      }
      this.logger.trace("get NewsLetter--start");
      this.getNewsLetterService.getNewsLettersList(this.pageNum).then(result => {
        try {
          if (this.newsLetterList.length > 0) {
            this.newsLetterList = this.newsLetterList.concat(result['responseJSON']['array']);
          } else {
            this.newsLetterList = result['responseJSON']['array'];
            this.config.PAGE_SIZE_NewsLetter = result['responseJSON']['pageSize'];
          }
          if (this.pageNum === 1) {
            var contentHeight = this.content.getContentDimensions().contentHeight;
            var pageHeight = this.platform.height();
            if (contentHeight < pageHeight) {
              this.pageNum++;
              this.getNewsLetter(undefined);
            }
          }
          this.isServiceCallInProgress = false;
          if (this.newsLetterList.length <= 0) {
            if (infinite === undefined) {
              this.canTryAgain = false;
              this.errorMsg = this.translate.instant('generic_msgs.no_data');
            }
            if (result['responseJSON']['array'].length < this.config.PAGE_SIZE_NewsLetter) {
              this.isLastPageReached = true;
              if (infinite) {
                infinite.enable(false);
              }
            } else {
              this.pageNum++;
            }
          } else {
            if (result['responseJSON']['array'].length < this.config.PAGE_SIZE_NewsLetter) {
              this.isLastPageReached = true;
              if (infinite) {
                infinite.enable(false);
              }
            } else {
              this.pageNum++;
            }
          }
          if (infinite !== undefined) {
            infinite.complete();
          } else {
            this.isShowingLoader = false;
          }
        } catch (e) {
          this.isServiceCallInProgress = false;
          if (infinite === undefined) {
            this.isShowingLoader = false;
            this.canTryAgain = true;
            this.errorMsg = this.translate.instant('generic_msgs.error_err');
          } else {
            infinite.complete();
          }
        }
      }, err => {
        this.isServiceCallInProgress = false;
        if (infinite === undefined) {
          this.isShowingLoader = false;
          this.canTryAgain = true;
          this.errorMsg = this.utils.handleServiceException(err);
        } else {
          infinite.complete();
        }
      });
    } else {
      this.isServiceCallInProgress = false;
      if (infinite === undefined) {
        this.isShowingLoader = false;
        this.canTryAgain = true;
        this.errorMsg = this.translate.instant('generic_msgs.network_err');
      } else {
        infinite.complete();
      }
    }
  }
  /**
  *
  * @param infinite  - this is the event callback from Infinite scroll.
  * Here we perform request for pagination.
  */
  getMoreNews(infinite) {
    // This is required to handle multiple triggers from Ionic load more
    if (this.loadMoreTimer) {
      clearTimeout(this.loadMoreTimer);
    }
    this.loadMoreTimer = setTimeout(() => {
      this.logger.trace("NewsLetterPage --getMoreNews--start--infinite : " + infinite);
      if (!this.isServiceCallInProgress) {
        this.getNewsLetter(infinite);
      }
      this.logger.trace("NewsLetterPage--getMoreNews--end");
      this.loadMoreTimer = null;
    }, 800);
  }
}
NewsLetterPage.ɵfac = function NewsLetterPage_Factory(t) {
  return new (t || NewsLetterPage)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_providers_utils_utils_service__WEBPACK_IMPORTED_MODULE_0__.UtilService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_providers_logger_service_logger_service__WEBPACK_IMPORTED_MODULE_1__.LoggerServiceProvider), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_newsLetterService__WEBPACK_IMPORTED_MODULE_2__.NewsLetterService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_providers_logger_service_logger_service__WEBPACK_IMPORTED_MODULE_1__.LoggerServiceProvider), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_6__.Platform), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_providers_download_pdf_download_pdf__WEBPACK_IMPORTED_MODULE_3__.DownloadPdfProvider), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__.TranslateService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_providers_utils_config__WEBPACK_IMPORTED_MODULE_4__.ConfigProvider));
};
NewsLetterPage.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
  type: NewsLetterPage,
  selectors: [["app-news-letter"]],
  viewQuery: function NewsLetterPage_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵviewQuery"](_c0, 5);
    }
    if (rf & 2) {
      let _t;
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx.content = _t.first);
    }
  },
  decls: 16,
  vars: 9,
  consts: [["mode", "ios"], ["color", "primary"], ["slot", "start"], ["text", "", "icon", "chevron-back-outline", 2, "padding-left", "15px", "font-size", "0.7rem"], [1, "bold-font"], [1, "sub_title", "ion-no-padding"], [1, "subheader_bg"], [1, "sub-header"], ["padding", "", "no-bounce", "", 1, "app_bg2", "padding_015"], ["class", "spinnersection", 4, "ngIf"], ["class", "errorMsgSection", 4, "ngIf"], [4, "ngIf"], [1, "spinnersection"], ["name", "lines-sharp-small", 2, "height", "98%"], [1, "errorMsgSection"], [3, "click", 4, "ngIf"], [3, "click"], [1, "white_container_border_radius", "text_color_base", "font_size_18"], ["class", "list_item", 4, "ngFor", "ngForOf"], [3, "ionInfinite", 4, "ngIf"], [1, "list_item"], [1, "link", 3, "click"], [3, "ionInfinite"]],
  template: function NewsLetterPage_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ion-header", 0)(1, "ion-toolbar", 1)(2, "ion-buttons", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](3, "ion-back-button", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "ion-title", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](6, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "ion-toolbar", 5)(8, "ion-row", 6)(9, "ion-label", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](10);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](11, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](12, "ion-content", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](13, NewsLetterPage_section_13_Template, 2, 0, "section", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](14, NewsLetterPage_section_14_Template, 4, 2, "section", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](15, NewsLetterPage_section_15_Template, 4, 2, "section", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](6, 5, "downloads.download"));
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](11, 7, "newsLetter.title"));
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.isShowingLoader);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !(ctx.newsLetterList.length > 0) && !ctx.isShowingLoader);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.newsLetterList.length > 0);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgIf, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonBackButton, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonButtons, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonContent, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonHeader, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonInfiniteScroll, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonInfiniteScrollContent, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonLabel, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonList, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonRow, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonSpinner, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonTitle, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonToolbar, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonBackButtonDelegate, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__.TranslatePipe],
  styles: [".link[_ngcontent-%COMP%] {\n  color: #007bff;\n  text-decoration: underline;\n  white-space: unset !important;\n  font-size: large;\n}\n\n.label[_ngcontent-%COMP%] {\n  margin: 0px !important;\n  padding: 10px;\n  white-space: unset !important;\n}\n\n.list_item[_ngcontent-%COMP%] {\n  border-bottom: 1px solid rgba(0, 45, 61, 0.3);\n  margin-top: 15px;\n  justify-content: center;\n}\n\n.list_item[_ngcontent-%COMP%]:last-child {\n  border-bottom: none !important;\n}\n\n.sub_title[_ngcontent-%COMP%] {\n  margin-top: 3px !important;\n}\n\n.sub-header[_ngcontent-%COMP%] {\n  color: #ffffff;\n  padding: 10px 25px !important;\n  margin: 0px !important;\n  font-size: 1rem !important;\n  font-family: Agenda-Regular;\n}\n\n.padding_015[_ngcontent-%COMP%] {\n  padding: 0px 15px;\n}\n\n.white_container_border_radius[_ngcontent-%COMP%] {\n  background-color: rgba(255, 255, 255, 0.7) !important;\n  border-radius: 15px !important;\n  margin: 15px;\n  padding: 15px;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcGFnZXMvbmV3cy1sZXR0ZXIvbmV3cy1sZXR0ZXIucGFnZS5zY3NzIiwid2VicGFjazovLy4vLi4vLi4vLi4vQWxsJTIwUHJvamVjdHMvTWFsYXlzaWFfQ2xpZW50QXBwX1JldmFtcC9TdW5BY2Nlc3NfSW9uaWM2X1JldmFtcC9zcmMvYXBwL3BhZ2VzL25ld3MtbGV0dGVyL25ld3MtbGV0dGVyLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDSTtFQUNJLGNBQUE7RUFDQSwwQkFBQTtFQUNBLDZCQUFBO0VBQ0EsZ0JBQUE7QUNBUjs7QURFSTtFQUNJLHNCQUFBO0VBQ0EsYUFBQTtFQUNBLDZCQUFBO0FDQ1I7O0FERUk7RUFDSSw2Q0FBQTtFQUNBLGdCQUFBO0VBQ0EsdUJBQUE7QUNDUjs7QURFSTtFQUNJLDhCQUFBO0FDQ1I7O0FEQ0k7RUFDSSwwQkFBQTtBQ0VSOztBREFJO0VBQ0ksY0FBQTtFQUNBLDZCQUFBO0VBQ0Esc0JBQUE7RUFDQSwwQkFBQTtFQUNBLDJCQUFBO0FDR1I7O0FEQ007RUFDRSxpQkFBQTtBQ0VSOztBREFJO0VBQ0kscURBQUE7RUFDQSw4QkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0FDR1IiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuICAgIC5saW5re1xyXG4gICAgICAgIGNvbG9yOiAjMDA3YmZmO1xyXG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xyXG4gICAgICAgIHdoaXRlLXNwYWNlOiB1bnNldCAhaW1wb3J0YW50O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogbGFyZ2U7XHJcbiAgICB9XHJcbiAgICAubGFiZWx7XHJcbiAgICAgICAgbWFyZ2luOiAwcHggIWltcG9ydGFudDtcclxuICAgICAgICBwYWRkaW5nOiAxMHB4IDtcclxuICAgICAgICB3aGl0ZS1zcGFjZTogdW5zZXQgIWltcG9ydGFudDtcclxuICAgIH1cclxuXHJcbiAgICAubGlzdF9pdGVte1xyXG4gICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKDAsIDQ1LCA2MSwgLjMpO1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDE1cHg7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICB9XHJcblxyXG4gICAgLmxpc3RfaXRlbTpsYXN0LWNoaWxke1xyXG4gICAgICAgIGJvcmRlci1ib3R0b206IG5vbmUgIWltcG9ydGFudDtcclxuICAgIH1cclxuICAgIC5zdWJfdGl0bGV7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogM3B4ICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbiAgICAuc3ViLWhlYWRlciB7XHJcbiAgICAgICAgY29sb3I6ICNmZmZmZmY7XHJcbiAgICAgICAgcGFkZGluZzogMTBweCAyNXB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgbWFyZ2luOiAwcHggIWltcG9ydGFudDtcclxuICAgICAgICBmb250LXNpemU6IDEuMHJlbSAhaW1wb3J0YW50O1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiBBZ2VuZGEtUmVndWxhcjtcclxuICAgICAgICAvL2xpbmUtaGVpZ2h0OiAyNHB4OztcclxuICAgICAgfVxyXG5cclxuICAgICAgLnBhZGRpbmdfMDE1e1xyXG4gICAgICAgIHBhZGRpbmcgOiAwcHggMTVweDtcclxuICAgIH1cclxuICAgIC53aGl0ZV9jb250YWluZXJfYm9yZGVyX3JhZGl1cyB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjcpICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTVweCAhaW1wb3J0YW50O1xyXG4gICAgICAgIG1hcmdpbjogMTVweDtcclxuICAgICAgICBwYWRkaW5nOiAxNXB4O1xyXG4gICAgfSIsIi5saW5rIHtcbiAgY29sb3I6ICMwMDdiZmY7XG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xuICB3aGl0ZS1zcGFjZTogdW5zZXQgIWltcG9ydGFudDtcbiAgZm9udC1zaXplOiBsYXJnZTtcbn1cblxuLmxhYmVsIHtcbiAgbWFyZ2luOiAwcHggIWltcG9ydGFudDtcbiAgcGFkZGluZzogMTBweDtcbiAgd2hpdGUtc3BhY2U6IHVuc2V0ICFpbXBvcnRhbnQ7XG59XG5cbi5saXN0X2l0ZW0ge1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiYSgwLCA0NSwgNjEsIDAuMyk7XG4gIG1hcmdpbi10b3A6IDE1cHg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4ubGlzdF9pdGVtOmxhc3QtY2hpbGQge1xuICBib3JkZXItYm90dG9tOiBub25lICFpbXBvcnRhbnQ7XG59XG5cbi5zdWJfdGl0bGUge1xuICBtYXJnaW4tdG9wOiAzcHggIWltcG9ydGFudDtcbn1cblxuLnN1Yi1oZWFkZXIge1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgcGFkZGluZzogMTBweCAyNXB4ICFpbXBvcnRhbnQ7XG4gIG1hcmdpbjogMHB4ICFpbXBvcnRhbnQ7XG4gIGZvbnQtc2l6ZTogMXJlbSAhaW1wb3J0YW50O1xuICBmb250LWZhbWlseTogQWdlbmRhLVJlZ3VsYXI7XG59XG5cbi5wYWRkaW5nXzAxNSB7XG4gIHBhZGRpbmc6IDBweCAxNXB4O1xufVxuXG4ud2hpdGVfY29udGFpbmVyX2JvcmRlcl9yYWRpdXMge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNykgIWltcG9ydGFudDtcbiAgYm9yZGVyLXJhZGl1czogMTVweCAhaW1wb3J0YW50O1xuICBtYXJnaW46IDE1cHg7XG4gIHBhZGRpbmc6IDE1cHg7XG59Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ })

}]);
//# sourceMappingURL=src_app_pages_news-letter_news-letter_module_ts.js.map