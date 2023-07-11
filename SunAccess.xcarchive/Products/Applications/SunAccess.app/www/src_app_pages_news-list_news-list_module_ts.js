"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_news-list_news-list_module_ts"],{

/***/ 98177:
/*!*************************************************************!*\
  !*** ./src/app/pages/news-list/news-list-routing.module.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NewsListPageRoutingModule": () => (/* binding */ NewsListPageRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _news_list_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./news-list.page */ 36221);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);




const routes = [{
  path: '',
  component: _news_list_page__WEBPACK_IMPORTED_MODULE_0__.NewsListPage
}];
class NewsListPageRoutingModule {}
NewsListPageRoutingModule.ɵfac = function NewsListPageRoutingModule_Factory(t) {
  return new (t || NewsListPageRoutingModule)();
};
NewsListPageRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
  type: NewsListPageRoutingModule
});
NewsListPageRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](NewsListPageRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
})();

/***/ }),

/***/ 43987:
/*!*****************************************************!*\
  !*** ./src/app/pages/news-list/news-list.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NewsListPageModule": () => (/* binding */ NewsListPageModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _news_list_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./news-list-routing.module */ 98177);
/* harmony import */ var _news_list_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./news-list.page */ 36221);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ 38699);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);







class NewsListPageModule {}
NewsListPageModule.ɵfac = function NewsListPageModule_Factory(t) {
  return new (t || NewsListPageModule)();
};
NewsListPageModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
  type: NewsListPageModule
});
NewsListPageModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__.TranslateModule, _news_list_routing_module__WEBPACK_IMPORTED_MODULE_0__.NewsListPageRoutingModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](NewsListPageModule, {
    declarations: [_news_list_page__WEBPACK_IMPORTED_MODULE_1__.NewsListPage],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__.TranslateModule, _news_list_routing_module__WEBPACK_IMPORTED_MODULE_0__.NewsListPageRoutingModule]
  });
})();

/***/ }),

/***/ 36221:
/*!***************************************************!*\
  !*** ./src/app/pages/news-list/news-list.page.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NewsListPage": () => (/* binding */ NewsListPage)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var src_providers_utils_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/providers/utils/config */ 43485);
/* harmony import */ var _newsListService__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./newsListService */ 56431);
/* harmony import */ var src_providers_utils_utils_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/providers/utils/utils.service */ 30423);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ 38699);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 94666);










function NewsListPage_section_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "section", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "ion-spinner", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function NewsListPage_section_14_button_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "button", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function NewsListPage_section_14_button_3_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r5);
      const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r4.getNewsList(undefined));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](2, 1, "generic_msgs.try_again"));
  }
}
function NewsListPage_section_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "section", 14)(1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, NewsListPage_section_14_button_3_Template, 3, 3, "button", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r1.errorMsg);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r1.canTryAgain);
  }
}
function NewsListPage_section_15_div_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 23)(1, "ion-row")(2, "ion-col", 24)(3, "ion-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "ion-label", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function NewsListPage_section_15_div_7_Template_ion_label_click_5_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r10);
      const news_r8 = restoredCtx.$implicit;
      const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r9.openLink(news_r8._link));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "u");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const news_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", news_r8.publicationDate, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", news_r8.title, " ");
  }
}
function NewsListPage_section_15_ion_infinite_scroll_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "ion-infinite-scroll", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ionInfinite", function NewsListPage_section_15_ion_infinite_scroll_8_Template_ion_infinite_scroll_ionInfinite_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r12);
      const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r11.getMoreNews($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "ion-infinite-scroll-content");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function NewsListPage_section_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "section")(1, "ion-row", 17)(2, "ion-col", 18)(3, "ion-label", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](7, NewsListPage_section_15_div_7_Template, 8, 2, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](8, NewsListPage_section_15_ion_infinite_scroll_8_Template, 2, 0, "ion-infinite-scroll", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](5, 3, "in_the_news.title"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r2.newsList);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx_r2.isLastPageReached);
  }
}
class NewsListPage {
  // content: any = null;
  constructor(newsListService, utils, translate, config, platform) {
    this.newsListService = newsListService;
    this.utils = utils;
    this.translate = translate;
    this.config = config;
    this.platform = platform;
    this.newsList = [];
    this.isServiceCallInProgress = false;
    this.isLastPageReached = false;
    this.hasRecords = true;
    this.pageNum = 1;
    this.utils.analytics("newsList");
    this.config.currentPage.pageName = "NewsListPage";
  }
  ngOnInit() {
    this.getNewsList(undefined);
  }
  /**
    *
    * @param item - this is the item that we are trying to expand.
    */
  expandItem(item) {
    this.newsList.forEach(function (listItem) {
      if (item == listItem) {
        listItem.expanded = !listItem.expanded;
      } else {
        listItem.expanded = false;
      }
      return listItem;
    });
  }
  /**
   * This method is used to get list of News list
   */
  getNewsList(infinite) {
    if (this.utils.isDeviceOnLine()) {
      if (this.pageNum <= this.lastPageIndex && !this.canTryAgain) {
        // alert(64);
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
      // this.logger.trace("get NewsList--start");
      this.newsListService.getNewsList(this.pageNum).then(result => {
        try {
          if (this.newsList.length > 0) {
            // alert(72);
            this.newsList = this.newsList.concat(result['responseJSON']['array']);
            // infinite.complete();
          } else {
            // alert(75);
            this.newsList = result['responseJSON']['array'];
            src_providers_utils_config__WEBPACK_IMPORTED_MODULE_0__.ConfigProvider.PAGE_SIZE = result['responseJSON']['pageSize'];
          }
          if (this.pageNum === 1) {
            // alert(80);
            var contentHeight = this.content.nativeElement.getBoundingClientRect();
            var pageHeight = this.platform.height();
            if (contentHeight.height < pageHeight) {
              this.pageNum++;
              this.getNewsList(undefined);
            } else {
              infinite.complete();
            }
          }
          this.isServiceCallInProgress = false;
          if (!(this.newsList.length > 0)) {
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
      // this.logger.trace("ClientsListPage --getMoreClients--start--infinite : " + infinite);
      if (!this.isServiceCallInProgress) {
        this.getNewsList(infinite);
      }
      // this.logger.trace("ClientsListPage--getMoreClients--end");
      this.loadMoreTimer = null;
    }, 800);
  }
  openLink(link) {
    if (link != null && link != undefined) {
      link = link.replace('bpp1.', '');
      this.utils.openLink(link);
    } else {
      this.utils.presentToast(this.translate.instant('generic_msgs.network_err'));
    }
  }
}
NewsListPage.ɵfac = function NewsListPage_Factory(t) {
  return new (t || NewsListPage)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_newsListService__WEBPACK_IMPORTED_MODULE_1__.NewsListService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_providers_utils_utils_service__WEBPACK_IMPORTED_MODULE_2__.UtilService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__.TranslateService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_providers_utils_config__WEBPACK_IMPORTED_MODULE_0__.ConfigProvider), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_5__.Platform));
};
NewsListPage.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
  type: NewsListPage,
  selectors: [["app-news-list"]],
  viewQuery: function NewsListPage_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](_ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonContent, 5, _angular_core__WEBPACK_IMPORTED_MODULE_3__.ElementRef);
    }
    if (rf & 2) {
      let _t;
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.content = _t.first);
    }
  },
  decls: 16,
  vars: 9,
  consts: [["mode", "ios"], ["color", "primary"], ["slot", "start"], ["text", "", "icon", "chevron-back-outline", 2, "padding-left", "15px", "font-size", "0.7rem"], [1, "bold-font"], [1, "sub_title", "ion-no-padding"], [1, "subheader_bg"], [1, "sub-header"], ["forceOverscroll", "false"], ["class", "spinnersection", 4, "ngIf"], ["class", "errorMsgSection", 4, "ngIf"], [4, "ngIf"], [1, "spinnersection"], ["name", "ios-small"], [1, "errorMsgSection"], [3, "click", 4, "ngIf"], [3, "click"], [1, "margin", "height"], ["size", "6", 1, "title_tile"], [1, "sub_header_title"], [1, "white_container_border_radius", "text_color_base", "padding_015", "margin"], ["class", "list_item", 4, "ngFor", "ngForOf"], [3, "ionInfinite", 4, "ngIf"], [1, "list_item"], ["size", "6"], [1, "link", "font_size_18", 3, "click"], [3, "ionInfinite"]],
  template: function NewsListPage_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "ion-header", 0)(1, "ion-toolbar", 1)(2, "ion-buttons", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "ion-back-button", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "ion-title", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](6, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "ion-toolbar", 5)(8, "ion-row", 6)(9, "ion-label", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](11, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "ion-content", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](13, NewsListPage_section_13_Template, 2, 0, "section", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](14, NewsListPage_section_14_Template, 4, 2, "section", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](15, NewsListPage_section_15_Template, 9, 5, "section", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](6, 5, "aboutus"));
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](11, 7, "newsroom_page.title"));
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.isShowingLoader);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !(ctx.newsList.length > 0) && !ctx.isShowingLoader);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.newsList.length > 0);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonBackButton, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonButtons, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonCol, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonContent, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonHeader, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonInfiniteScroll, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonInfiniteScrollContent, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonLabel, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonRow, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonSpinner, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonTitle, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonToolbar, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonBackButtonDelegate, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__.TranslatePipe],
  styles: ["ion-content[_ngcontent-%COMP%] {\n  --background: url(/../assets/imgs/app_bg.jpg) no-repeat center center / cover;\n}\nion-content[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%] {\n  text-align: center;\n}\n\n.sub_header_title[_ngcontent-%COMP%] {\n  padding: 10px !important;\n  margin: 0px;\n  font-size: 1.2rem !important;\n  font-family: Agenda-Regular;\n  line-height: 24px;\n  text-align: center;\n  margin-top: 5px !important;\n}\n\n.list_item[_ngcontent-%COMP%] {\n  border-bottom: 1px solid rgba(0, 45, 61, 0.3);\n}\n\n.list_item[_ngcontent-%COMP%]:last-child {\n  border-bottom: none !important;\n}\n\n.title_tile[_ngcontent-%COMP%] {\n  font-size: 2rem;\n  padding: 10px;\n  background: #002d3d;\n  color: white;\n  text-align: center;\n}\n\n.white_container_border_radius[_ngcontent-%COMP%] {\n  background-color: rgba(255, 255, 255, 0.7) !important;\n  border-radius: 15px !important;\n}\n\n.text_color_base[_ngcontent-%COMP%] {\n  color: #002d3d;\n}\n\n.margin[_ngcontent-%COMP%] {\n  margin: 10px 15px;\n  border-bottom: 1px solid rgba(0, 45, 61, 0.3);\n}\n\n.height[_ngcontent-%COMP%] {\n  height: 65px;\n}\n\n.list_item[_ngcontent-%COMP%]:last-child {\n  border-bottom: none !important;\n}\n\n.img[_ngcontent-%COMP%] {\n  height: 40vh;\n  width: 100% !important;\n  padding: 5px;\n  margin-bottom: 5px;\n}\n\n.seeAll[_ngcontent-%COMP%] {\n  color: #6095c9;\n  text-align: end;\n}\n\n.padding_015[_ngcontent-%COMP%] {\n  padding: 0px 15px;\n}\n\n.link[_ngcontent-%COMP%] {\n  color: #6095c9;\n  text-decoration: none;\n  word-wrap: unset !important;\n}\n\n.flex[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: end;\n}\n\n.toolbar-color[_ngcontent-%COMP%] {\n  background-color: #febe10;\n}\n\n.header-bg[_ngcontent-%COMP%] {\n  --background: #febe10;\n}\n.header-bg[_ngcontent-%COMP%]   ion-title[_ngcontent-%COMP%] {\n  padding: 0;\n}\n\n.center[_ngcontent-%COMP%] {\n  margin-left: 100px;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcGFnZXMvbmV3cy1saXN0L25ld3MtbGlzdC5wYWdlLnNjc3MiLCJ3ZWJwYWNrOi8vLi8uLi8uLi8uLi9BbGwlMjBQcm9qZWN0cy9NYWxheXNpYV9DbGllbnRBcHBfUmV2YW1wL1N1bkFjY2Vzc19Jb25pYzZfUmV2YW1wL3NyYy9hcHAvcGFnZXMvbmV3cy1saXN0L25ld3MtbGlzdC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSw2RUFBQTtBQ0NKO0FEQ0k7RUFDSSxrQkFBQTtBQ0NSOztBREdBO0VBQ0ksd0JBQUE7RUFDQSxXQUFBO0VBQ0EsNEJBQUE7RUFDQSwyQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSwwQkFBQTtBQ0FKOztBREdBO0VBQ0ksNkNBQUE7QUNBSjs7QURHQTtFQUNJLDhCQUFBO0FDQUo7O0FER0E7RUFDSSxlQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0FDQUo7O0FES0E7RUFDSSxxREFBQTtFQUNBLDhCQUFBO0FDRko7O0FES0E7RUFDSSxjQUFBO0FDRko7O0FES0E7RUFDSSxpQkFBQTtFQUNBLDZDQUFBO0FDRko7O0FES0E7RUFDSSxZQUFBO0FDRko7O0FES0E7RUFDSSw4QkFBQTtBQ0ZKOztBREtBO0VBQ0ksWUFBQTtFQUNBLHNCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0FDRko7O0FES0E7RUFDSSxjQUFBO0VBQ0EsZUFBQTtBQ0ZKOztBREtBO0VBQ0ksaUJBQUE7QUNGSjs7QURLQTtFQUNJLGNBQUE7RUFDQSxxQkFBQTtFQUNBLDJCQUFBO0FDRko7O0FES0E7RUFDSSxhQUFBO0VBQ0Esb0JBQUE7QUNGSjs7QURLQTtFQUNJLHlCQUFBO0FDRko7O0FES0E7RUFDSSxxQkFBQTtBQ0ZKO0FER0k7RUFDSSxVQUFBO0FDRFI7O0FES0E7RUFDSSxrQkFBQTtBQ0ZKIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNvbnRlbnQge1xyXG4gICAgLS1iYWNrZ3JvdW5kOiB1cmwoLy4uL2Fzc2V0cy9pbWdzL2FwcF9iZy5qcGcpIG5vLXJlcGVhdCBjZW50ZXIgY2VudGVyIC8gY292ZXI7XHJcblxyXG4gICAgaW9uLWxhYmVsIHtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5zdWJfaGVhZGVyX3RpdGxlIHtcclxuICAgIHBhZGRpbmc6IDEwcHggIWltcG9ydGFudDtcclxuICAgIG1hcmdpbjogMHB4O1xyXG4gICAgZm9udC1zaXplOiAxLjJyZW0gIWltcG9ydGFudDtcclxuICAgIGZvbnQtZmFtaWx5OiBBZ2VuZGEtUmVndWxhcjtcclxuICAgIGxpbmUtaGVpZ2h0OiAyNHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgbWFyZ2luLXRvcDogNXB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5saXN0X2l0ZW0ge1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoMCwgNDUsIDYxLCAuMyk7XHJcbn1cclxuXHJcbi5saXN0X2l0ZW06bGFzdC1jaGlsZCB7XHJcbiAgICBib3JkZXItYm90dG9tOiBub25lICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi50aXRsZV90aWxlIHtcclxuICAgIGZvbnQtc2l6ZTogMnJlbTtcclxuICAgIHBhZGRpbmc6ICAxMHB4O1xyXG4gICAgYmFja2dyb3VuZDogIzAwMmQzZDtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgXHJcbiAgIFxyXG59XHJcblxyXG4ud2hpdGVfY29udGFpbmVyX2JvcmRlcl9yYWRpdXMge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjcpICFpbXBvcnRhbnQ7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi50ZXh0X2NvbG9yX2Jhc2Uge1xyXG4gICAgY29sb3I6ICMwMDJkM2Q7XHJcbn1cclxuXHJcbi5tYXJnaW4ge1xyXG4gICAgbWFyZ2luOiAxMHB4IDE1cHg7XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiYSgwLCA0NSwgNjEsIC4zKTtcclxufVxyXG5cclxuLmhlaWdodCB7XHJcbiAgICBoZWlnaHQ6IDY1cHg7XHJcbn1cclxuXHJcbi5saXN0X2l0ZW06bGFzdC1jaGlsZCB7XHJcbiAgICBib3JkZXItYm90dG9tOiBub25lICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5pbWcge1xyXG4gICAgaGVpZ2h0OiA0MHZoO1xyXG4gICAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcclxuICAgIHBhZGRpbmc6IDVweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDVweDtcclxufVxyXG5cclxuLnNlZUFsbCB7XHJcbiAgICBjb2xvcjogIzYwOTVjOTtcclxuICAgIHRleHQtYWxpZ246IGVuZDtcclxufVxyXG5cclxuLnBhZGRpbmdfMDE1IHtcclxuICAgIHBhZGRpbmc6IDBweCAxNXB4O1xyXG59XHJcblxyXG4ubGlua3tcclxuICAgIGNvbG9yOiAjNjA5NWM5O1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgd29yZC13cmFwOiB1bnNldCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uZmxleCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBlbmQ7XHJcbn1cclxuXHJcbi50b29sYmFyLWNvbG9yIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZWJlMTA7XHJcbn1cclxuXHJcbi5oZWFkZXItYmcge1xyXG4gICAgLS1iYWNrZ3JvdW5kOiAjZmViZTEwO1xyXG4gICAgaW9uLXRpdGxlIHtcclxuICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgfVxyXG59XHJcblxyXG4uY2VudGVyIHtcclxuICAgIG1hcmdpbi1sZWZ0OiAxMDBweDtcclxufVxyXG4iLCJpb24tY29udGVudCB7XG4gIC0tYmFja2dyb3VuZDogdXJsKC8uLi9hc3NldHMvaW1ncy9hcHBfYmcuanBnKSBuby1yZXBlYXQgY2VudGVyIGNlbnRlciAvIGNvdmVyO1xufVxuaW9uLWNvbnRlbnQgaW9uLWxhYmVsIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uc3ViX2hlYWRlcl90aXRsZSB7XG4gIHBhZGRpbmc6IDEwcHggIWltcG9ydGFudDtcbiAgbWFyZ2luOiAwcHg7XG4gIGZvbnQtc2l6ZTogMS4ycmVtICFpbXBvcnRhbnQ7XG4gIGZvbnQtZmFtaWx5OiBBZ2VuZGEtUmVndWxhcjtcbiAgbGluZS1oZWlnaHQ6IDI0cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luLXRvcDogNXB4ICFpbXBvcnRhbnQ7XG59XG5cbi5saXN0X2l0ZW0ge1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiYSgwLCA0NSwgNjEsIDAuMyk7XG59XG5cbi5saXN0X2l0ZW06bGFzdC1jaGlsZCB7XG4gIGJvcmRlci1ib3R0b206IG5vbmUgIWltcG9ydGFudDtcbn1cblxuLnRpdGxlX3RpbGUge1xuICBmb250LXNpemU6IDJyZW07XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGJhY2tncm91bmQ6ICMwMDJkM2Q7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4ud2hpdGVfY29udGFpbmVyX2JvcmRlcl9yYWRpdXMge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNykgIWltcG9ydGFudDtcbiAgYm9yZGVyLXJhZGl1czogMTVweCAhaW1wb3J0YW50O1xufVxuXG4udGV4dF9jb2xvcl9iYXNlIHtcbiAgY29sb3I6ICMwMDJkM2Q7XG59XG5cbi5tYXJnaW4ge1xuICBtYXJnaW46IDEwcHggMTVweDtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoMCwgNDUsIDYxLCAwLjMpO1xufVxuXG4uaGVpZ2h0IHtcbiAgaGVpZ2h0OiA2NXB4O1xufVxuXG4ubGlzdF9pdGVtOmxhc3QtY2hpbGQge1xuICBib3JkZXItYm90dG9tOiBub25lICFpbXBvcnRhbnQ7XG59XG5cbi5pbWcge1xuICBoZWlnaHQ6IDQwdmg7XG4gIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmc6IDVweDtcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xufVxuXG4uc2VlQWxsIHtcbiAgY29sb3I6ICM2MDk1Yzk7XG4gIHRleHQtYWxpZ246IGVuZDtcbn1cblxuLnBhZGRpbmdfMDE1IHtcbiAgcGFkZGluZzogMHB4IDE1cHg7XG59XG5cbi5saW5rIHtcbiAgY29sb3I6ICM2MDk1Yzk7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgd29yZC13cmFwOiB1bnNldCAhaW1wb3J0YW50O1xufVxuXG4uZmxleCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogZW5kO1xufVxuXG4udG9vbGJhci1jb2xvciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZWJlMTA7XG59XG5cbi5oZWFkZXItYmcge1xuICAtLWJhY2tncm91bmQ6ICNmZWJlMTA7XG59XG4uaGVhZGVyLWJnIGlvbi10aXRsZSB7XG4gIHBhZGRpbmc6IDA7XG59XG5cbi5jZW50ZXIge1xuICBtYXJnaW4tbGVmdDogMTAwcHg7XG59Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ })

}]);
//# sourceMappingURL=src_app_pages_news-list_news-list_module_ts.js.map