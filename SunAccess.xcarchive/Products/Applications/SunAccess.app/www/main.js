(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["main"],{

/***/ 90158:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 22560);



const routes = [{
  path: '',
  redirectTo: '',
  pathMatch: 'full'
}, {
  path: 'dashboard-before-login',
  loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_dashboard-before-login_dashboard-before-login_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/dashboard-before-login/dashboard-before-login.module */ 76621)).then(m => m.DashboardBeforeLoginPageModule)
}, {
  path: 'about-us',
  loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_about-us_about-us_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/about-us/about-us.module */ 99902)).then(m => m.AboutUsPageModule)
}, {
  path: 'contact-us',
  loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_contact-us_contact-us_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/contact-us/contact-us.module */ 14754)).then(m => m.ContactUsPageModule)
}, {
  path: 'unit-price',
  loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_unit-price_unit-price_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/unit-price/unit-price.module */ 81186)).then(m => m.UnitPricePageModule)
}, {
  path: 'sun-life-malaysia',
  loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_sun-life-malaysia_sun-life-malaysia_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/sun-life-malaysia/sun-life-malaysia.module */ 29574)).then(m => m.SunLifeMalaysiaPageModule)
}, {
  path: 'newsroom',
  loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_newsroom_newsroom_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/newsroom/newsroom.module */ 96569)).then(m => m.NewsroomPageModule)
}, {
  path: 'photo-gallery',
  loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_photo-gallery_photo-gallery_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/photo-gallery/photo-gallery.module */ 59533)).then(m => m.PhotoGalleryPageModule)
}, {
  path: 'photo-gallery-details',
  loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_photo-gallery-details_photo-gallery-details_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/photo-gallery-details/photo-gallery-details.module */ 91460)).then(m => m.PhotoGalleryDetailsPageModule)
}, {
  path: 'show-gallery-photo',
  loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_show-gallery-photo_show-gallery-photo_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/show-gallery-photo/show-gallery-photo.module */ 48650)).then(m => m.ShowGalleryPhotoPageModule)
}, {
  path: 'media-release',
  loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_media-release_media-release_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/media-release/media-release.module */ 71234)).then(m => m.MediaReleasePageModule)
}, {
  path: 'news-list',
  loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_news-list_news-list_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/news-list/news-list.module */ 43987)).then(m => m.NewsListPageModule)
}, {
  path: 'login-first',
  loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_login-first_login-first_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/login-first/login-first.module */ 76264)).then(m => m.LoginFirstPageModule)
}, {
  path: 'login',
  loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_pages_login_login_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/login/login.module */ 21053)).then(m => m.LoginPageModule)
}, {
  path: 'welcome-tour',
  loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_welcome-tour_welcome-tour_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/welcome-tour/welcome-tour.module */ 31551)).then(m => m.WelcomeTourPageModule)
}, {
  path: 'update-secure-word',
  loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_pages_update-secure-word_update-secure-word_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/update-secure-word/update-secure-word.module */ 3236)).then(m => m.UpdateSecureWordPageModule)
}, {
  path: 'profile',
  loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_pages_profile-pop-up_profile-pop-up_page_ts"), __webpack_require__.e("src_app_pages_profile_profile_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/profile/profile.module */ 88558)).then(m => m.ProfilePageModule)
}, {
  path: 'termsnconditions',
  loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_termsnconditions_termsnconditions_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/termsnconditions/termsnconditions.module */ 30595)).then(m => m.TermsnconditionsPageModule)
}, {
  path: 'popover-content',
  loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_pages_popover-content_popover-content_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/popover-content/popover-content.module */ 10747)).then(m => m.PopoverContentPageModule)
}, {
  path: 'forgot-password',
  loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_forgot-password_forgot-password_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/forgot-password/forgot-password.module */ 65638)).then(m => m.ForgotPasswordPageModule)
}, {
  path: 'reset-pwd-with-personal-details',
  loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_pages_reset-pwd-with-personal-details_reset-pwd-with-personal-details_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/reset-pwd-with-personal-details/reset-pwd-with-personal-details.module */ 38702)).then(m => m.ResetPwdWithPersonalDetailsPageModule)
}, {
  path: 'sign-up',
  loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_pages_sign-up_sign-up_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/sign-up/sign-up.module */ 54498)).then(m => m.SignUpPageModule)
}, {
  path: 'dashboard-after-login',
  loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_dashboard-after-login_dashboard-after-login_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/dashboard-after-login/dashboard-after-login.module */ 68568)).then(m => m.DashboardAfterLoginPageModule)
}, {
  path: 'profile-pop-up',
  loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_pages_profile-pop-up_profile-pop-up_page_ts"), __webpack_require__.e("src_app_pages_profile-pop-up_profile-pop-up_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/profile-pop-up/profile-pop-up.module */ 28111)).then(m => m.ProfilePopUpPageModule)
}, {
  path: 'plan-listing',
  loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_plan-listing_plan-listing_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/plan-listing/plan-listing.module */ 26373)).then(m => m.PlanListingPageModule)
}, {
  path: 'policy-details',
  loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_policy-details_policy-details_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/policy-details/policy-details.module */ 96636)).then(m => m.PolicyDetailsPageModule)
}, {
  path: 'plan-descriptions',
  loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_plan-descriptions_plan-descriptions_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/plan-descriptions/plan-descriptions.module */ 51911)).then(m => m.PlanDescriptionsPageModule)
}, {
  path: 'plan-agent-details',
  loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_plan-agent-details_plan-agent-details_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/plan-agent-details/plan-agent-details.module */ 81810)).then(m => m.PlanAgentDetailsPageModule)
}, {
  path: 'plan-benifits',
  loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_plan-benifits_plan-benifits_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/plan-benifits/plan-benifits.module */ 63114)).then(m => m.PlanBenifitsPageModule)
}, {
  path: 'contact-details',
  loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_contact-details_contact-details_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/contact-details/contact-details.module */ 55610)).then(m => m.ContactDetailsPageModule)
}, {
  path: 'nominations',
  loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_nominations_nominations_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/nominations/nominations.module */ 62442)).then(m => m.NominationsPageModule)
}, {
  path: 'plan-epayment-info',
  loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_plan-epayment-info_plan-epayment-info_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/plan-epayment-info/plan-epayment-info.module */ 652)).then(m => m.PlanEpaymentInfoPageModule)
}, {
  path: 'plan-assignees',
  loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_plan-assignees_plan-assignees_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/plan-assignees/plan-assignees.module */ 97482)).then(m => m.PlanAssigneesPageModule)
}, {
  path: 'plan-trustees',
  loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_plan-trustees_plan-trustees_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/plan-trustees/plan-trustees.module */ 24141)).then(m => m.PlanTrusteesPageModule)
}, {
  path: 'plan-details',
  loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_plan-details_plan-details_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/plan-details/plan-details.module */ 59277)).then(m => m.PlanDetailsPageModule)
}, {
  path: 'payment-records',
  loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_payment-records_payment-records_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/payment-records/payment-records.module */ 88127)).then(m => m.PaymentRecordsPageModule)
}, {
  path: 'periodic-payout',
  loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_periodic-payout_periodic-payout_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/periodic-payout/periodic-payout.module */ 58434)).then(m => m.PeriodicPayoutPageModule)
}, {
  path: 'fund-list',
  loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_fund-list_fund-list_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/fund-list/fund-list.module */ 18774)).then(m => m.FundListPageModule)
}, {
  path: 'fund-allocation',
  loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_fund-allocation_fund-allocation_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/fund-allocation/fund-allocation.module */ 91841)).then(m => m.FundAllocationPageModule)
}, {
  path: 'notifications',
  loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_notifications_notifications_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/notifications/notifications.module */ 44558)).then(m => m.NotificationsPageModule)
}, {
  path: 'notification-details',
  loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_notification-details_notification-details_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/notification-details/notification-details.module */ 90989)).then(m => m.NotificationDetailsPageModule)
}, {
  path: 'profile-pop-up',
  loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_pages_profile-pop-up_profile-pop-up_page_ts"), __webpack_require__.e("src_app_pages_profile-pop-up_profile-pop-up_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/profile-pop-up/profile-pop-up.module */ 28111)).then(m => m.ProfilePopUpPageModule)
}, {
  path: 'claims',
  loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_claims_claims_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/claims/claims.module */ 46944)).then(m => m.ClaimsPageModule)
}, {
  path: 'claim-submission',
  loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_claim-submission_claim-submission_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/claim-submission/claim-submission.module */ 38445)).then(m => m.ClaimSubmissionPageModule)
}, {
  path: 'claim-submission-type',
  loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_claim-submission-type_claim-submission-type_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/claim-submission-type/claim-submission-type.module */ 17528)).then(m => m.ClaimSubmissionTypePageModule)
}, {
  path: 'claim-enquiry',
  loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_claim-enquiry_claim-enquiry_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/claim-enquiry/claim-enquiry.module */ 67567)).then(m => m.ClaimEnquiryPageModule)
}, {
  path: 'claim-enquiry-list',
  loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_claim-enquiry-list_claim-enquiry-list_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/claim-enquiry-list/claim-enquiry-list.module */ 67201)).then(m => m.ClaimEnquiryListPageModule)
}, {
  path: 'claim-status',
  loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_claim-status_claim-status_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/claim-status/claim-status.module */ 46746)).then(m => m.ClaimStatusPageModule)
}, {
  path: 'claim-details',
  loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_claim-details_claim-details_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/claim-details/claim-details.module */ 79343)).then(m => m.ClaimDetailsPageModule)
}, {
  path: 'claim-status-list',
  loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_claim-status-list_claim-status-list_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/claim-status-list/claim-status-list.module */ 93123)).then(m => m.ClaimStatusListPageModule)
}, {
  path: 'claim-status-details',
  loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_pages_claim-status-details_claim-status-details_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/claim-status-details/claim-status-details.module */ 69417)).then(m => m.ClaimStatusDetailsPageModule)
}, {
  path: 'payment-user-details',
  loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_payment-user-details_payment-user-details_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/payment-user-details/payment-user-details.module */ 87329)).then(m => m.PaymentUserDetailsPageModule)
}, {
  path: 'payment-confirmation',
  loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_payment-confirmation_payment-confirmation_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/payment-confirmation/payment-confirmation.module */ 87450)).then(m => m.PaymentConfirmationPageModule)
}, {
  path: 'make-payment',
  loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_make-payment_make-payment_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/make-payment/make-payment.module */ 9061)).then(m => m.MakePaymentPageModule)
}, {
  path: 'fund-details',
  loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_fund-details_fund-details_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/fund-details/fund-details.module */ 5512)).then(m => m.FundDetailsPageModule)
}, {
  path: 'payment-acknowledgement',
  loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_payment-acknowledgement_payment-acknowledgement_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/payment-acknowledgement/payment-acknowledgement.module */ 77746)).then(m => m.PaymentAcknowledgementPageModule)
}, {
  path: 'update-direct-debit',
  loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_update-direct-debit_update-direct-debit_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/update-direct-debit/update-direct-debit.module */ 3044)).then(m => m.UpdateDirectDebitPageModule)
}, {
  path: 'udd-guide-lines',
  loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_udd-guide-lines_udd-guide-lines_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/udd-guide-lines/udd-guide-lines.module */ 76831)).then(m => m.UddGuideLinesPageModule)
}, {
  path: 'e-nomination',
  loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_e-nomination_e-nomination_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/e-nomination/e-nomination.module */ 29185)).then(m => m.ENominationPageModule)
}, {
  path: 'e-medical-card',
  loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_e-medical-card_e-medical-card_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/e-medical-card/e-medical-card.module */ 7683)).then(m => m.EMedicalCardPageModule)
}, {
  path: 'healthinfo',
  loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_healthinfo_healthinfo_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/healthinfo/healthinfo.module */ 21424)).then(m => m.HealthinfoPageModule)
}, {
  path: 'healthinfo-detail',
  loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_healthinfo-detail_healthinfo-detail_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/healthinfo-detail/healthinfo-detail.module */ 10717)).then(m => m.HealthinfoDetailPageModule)
}, {
  path: 'settings',
  loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_settings_settings_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/settings/settings.module */ 7850)).then(m => m.SettingsPageModule)
}, {
  path: 'change-password',
  loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_pages_change-password_change-password_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/change-password/change-password.module */ 68292)).then(m => m.ChangePasswordPageModule)
}, {
  path: 'service',
  loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_service_service_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/service/service.module */ 5349)).then(m => m.ServicePageModule)
}, {
  path: 'update-security-question',
  loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_update-security-question_update-security-question_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/update-security-question/update-security-question.module */ 31018)).then(m => m.UpdateSecurityQuestionPageModule)
}, {
  path: 'update-secure-word',
  loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_pages_update-secure-word_update-secure-word_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/update-secure-word/update-secure-word.module */ 3236)).then(m => m.UpdateSecureWordPageModule)
}, {
  path: 'notification-settings',
  loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_notification-settings_notification-settings_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/notification-settings/notification-settings.module */ 31151)).then(m => m.NotificationSettingsPageModule)
}, {
  path: 'download-medicard',
  loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_download-medicard_download-medicard_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/download-medicard/download-medicard.module */ 17100)).then(m => m.DownloadMedicardPageModule)
}, {
  path: 'downloads',
  loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_downloads_downloads_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/downloads/downloads.module */ 23629)).then(m => m.DownloadsPageModule)
}, {
  path: 'epolicy-list',
  loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_epolicy-list_epolicy-list_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/epolicy-list/epolicy-list.module */ 14245)).then(m => m.EPolicyListPageModule)
}, {
  path: 'news-letter',
  loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_news-letter_news-letter_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/news-letter/news-letter.module */ 39153)).then(m => m.NewsLetterPageModule)
}, {
  path: 'app-downloads',
  loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_app-downloads_app-downloads_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/app-downloads/app-downloads.module */ 77640)).then(m => m.AppDownloadsPageModule)
}, {
  path: 'annual-statements',
  loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_annual-statements_annual-statements_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/annual-statements/annual-statements.module */ 95289)).then(m => m.AnnualStatementsPageModule)
}, {
  path: 'statements',
  loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_statements_statements_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/statements/statements.module */ 13075)).then(m => m.StatementsPageModule)
}, {
  path: 'payment-history',
  loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_payment-history_payment-history_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/payment-history/payment-history.module */ 27181)).then(m => m.PaymentHistoryPageModule)
}, {
  path: 'update-personal-details',
  loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_pages_tac-popup_tac-popup_page_ts"), __webpack_require__.e("common"), __webpack_require__.e("src_app_pages_update-personal-details_update-personal-details_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/update-personal-details/update-personal-details.module */ 82700)).then(m => m.UpdatePersonalDetailsPageModule)
}, {
  path: 'update-card',
  loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_update-card_update-card_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/update-card/update-card.module */ 8668)).then(m => m.UpdateCardPageModule)
}, {
  path: 'update-payout-details',
  loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_update-payout-details_update-payout-details_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/update-payout-details/update-payout-details.module */ 37198)).then(m => m.UpdatePayoutDetailsPageModule)
}, {
  path: 'tac-popup',
  loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_pages_tac-popup_tac-popup_page_ts"), __webpack_require__.e("src_app_pages_tac-popup_tac-popup_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/tac-popup/tac-popup.module */ 16458)).then(m => m.TacPopupPageModule)
}, {
  path: 'success-popup',
  loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_success-popup_success-popup_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/success-popup/success-popup.module */ 11965)).then(m => m.SuccessPopupPageModule)
}, {
  path: 'service-history',
  loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_service-history_service-history_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/service-history/service-history.module */ 68003)).then(m => m.ServiceHistoryPageModule)
}, {
  path: 'service-history-detail',
  loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_service-history-detail_service-history-detail_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/service-history-detail/service-history-detail.module */ 7722)).then(m => m.ServiceHistoryDetailPageModule)
}, {
  path: 'service-filter',
  loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_service-filter_service-filter_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/service-filter/service-filter.module */ 18430)).then(m => m.ServiceFilterPageModule)
}, {
  path: 'fund-switching',
  loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_pages_tac-popup_tac-popup_page_ts"), __webpack_require__.e("default-src_app_pages_terms-and-condition_terms-and-condition_page_ts"), __webpack_require__.e("default-src_app_pages_declaration-details_declaration-details_page_ts"), __webpack_require__.e("common"), __webpack_require__.e("src_app_pages_fund-switching_fund-switching_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/fund-switching/fund-switching.module */ 61750)).then(m => m.FundSwitchingPageModule)
}, {
  path: 'update-card',
  loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_update-card_update-card_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/update-card/update-card.module */ 8668)).then(m => m.UpdateCardPageModule)
}, {
  path: 'update-payout-details',
  loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_update-payout-details_update-payout-details_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/update-payout-details/update-payout-details.module */ 37198)).then(m => m.UpdatePayoutDetailsPageModule)
}, {
  path: 'partial-withdrawl',
  loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_partial-withdrawl_partial-withdrawl_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/partial-withdrawl/partial-withdrawl.module */ 24636)).then(m => m.PartialWithdrawlPageModule)
}, {
  path: 'premium-redirection',
  loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_premium-redirection_premium-redirection_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/premium-redirection/premium-redirection.module */ 90634)).then(m => m.PremiumRedirectionPageModule)
}, {
  path: 'reinstatement',
  loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_reinstatement_reinstatement_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/reinstatement/reinstatement.module */ 57718)).then(m => m.ReinstatementPageModule)
}, {
  path: 'surrender-cancel',
  loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_surrender-cancel_surrender-cancel_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/surrender-cancel/surrender-cancel.module */ 68667)).then(m => m.SurrenderCancelPageModule)
}, {
  path: 'top-up',
  loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_top-up_top-up_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/top-up/top-up.module */ 83863)).then(m => m.TopUpPageModule)
}, {
  path: 'other-services',
  loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_other-services_other-services_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/other-services/other-services.module */ 1882)).then(m => m.OtherServicesPageModule)
}, {
  path: 'payment-history',
  loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_payment-history_payment-history_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/payment-history/payment-history.module */ 27181)).then(m => m.PaymentHistoryPageModule)
}, {
  path: 'service-history',
  loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_service-history_service-history_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/service-history/service-history.module */ 68003)).then(m => m.ServiceHistoryPageModule)
}, {
  path: 'success-popup',
  loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_success-popup_success-popup_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/success-popup/success-popup.module */ 11965)).then(m => m.SuccessPopupPageModule)
}, {
  path: 'terms-and-condition',
  loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_pages_terms-and-condition_terms-and-condition_page_ts"), __webpack_require__.e("src_app_pages_terms-and-condition_terms-and-condition_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/terms-and-condition/terms-and-condition.module */ 24590)).then(m => m.TermsAndConditionPageModule)
}, {
  path: 'tac-popup',
  loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_pages_tac-popup_tac-popup_page_ts"), __webpack_require__.e("src_app_pages_tac-popup_tac-popup_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/tac-popup/tac-popup.module */ 16458)).then(m => m.TacPopupPageModule)
}, {
  path: 'declaration-details',
  loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_pages_declaration-details_declaration-details_page_ts"), __webpack_require__.e("src_app_pages_declaration-details_declaration-details_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/declaration-details/declaration-details.module */ 16246)).then(m => m.DeclarationDetailsPageModule)
}, {
  path: 'update-details-popup',
  loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_update-details-popup_update-details-popup_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/update-details-popup/update-details-popup.module */ 66480)).then(m => m.UpdateDetailsPopupPageModule)
}];
class AppRoutingModule {}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) {
  return new (t || AppRoutingModule)();
};
AppRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
  type: AppRoutingModule
});
AppRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule.forRoot(routes, {
    preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_1__.PreloadAllModules
  }), _angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule]
  });
})();

/***/ }),

/***/ 55041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent),
/* harmony export */   "MenuOptions": () => (/* binding */ MenuOptions)
/* harmony export */ });
/* harmony import */ var intro_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! intro.js */ 49677);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ngx-translate/core */ 38699);
/* harmony import */ var src_providers_auth_handler_auth_handler__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/providers/auth-handler/auth-handler */ 38590);
/* harmony import */ var _awesome_cordova_plugins_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @awesome-cordova-plugins/splash-screen/ngx */ 10696);
/* harmony import */ var src_providers_utils_utils_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/providers/utils/utils.service */ 30423);
/* harmony import */ var src_providers_utils_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/providers/utils/config */ 43485);
/* harmony import */ var src_providers_json_store_json_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/providers/json-store/json-store */ 15342);
/* harmony import */ var src_providers_logger_service_logger_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/providers/logger-service/logger-service */ 9999);
/* harmony import */ var _ionic_native_app_version_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic-native/app-version/ngx */ 85209);












var MenuOptions;
(function (MenuOptions) {
  MenuOptions[MenuOptions["MY_HOME_PAGE"] = 1] = "MY_HOME_PAGE";
  MenuOptions[MenuOptions["UNIT_PRICE"] = 2] = "UNIT_PRICE";
  MenuOptions[MenuOptions["PAYMENT_DETAILS"] = 3] = "PAYMENT_DETAILS";
  MenuOptions[MenuOptions["ABOUT_US"] = 4] = "ABOUT_US";
  MenuOptions[MenuOptions["CONTACT_US"] = 5] = "CONTACT_US";
  MenuOptions[MenuOptions["LOGIN"] = 6] = "LOGIN";
  MenuOptions[MenuOptions["SIGN_UP"] = 7] = "SIGN_UP";
  MenuOptions[MenuOptions["FORGOT_PASSWORD"] = 8] = "FORGOT_PASSWORD";
  MenuOptions[MenuOptions["DASHBOARD"] = 9] = "DASHBOARD";
  MenuOptions[MenuOptions["NOTIFICATIONS"] = 10] = "NOTIFICATIONS";
  MenuOptions[MenuOptions["MY_POLICY"] = 11] = "MY_POLICY";
  MenuOptions[MenuOptions["CLAIMS_ENQUIRY"] = 12] = "CLAIMS_ENQUIRY";
  MenuOptions[MenuOptions["DOWNLOAD"] = 13] = "DOWNLOAD";
  MenuOptions[MenuOptions["ANNUAL_STATEMENTS"] = 14] = "ANNUAL_STATEMENTS";
  MenuOptions[MenuOptions["UPDATE_DETAILS"] = 15] = "UPDATE_DETAILS";
  MenuOptions[MenuOptions["PAYMENT_HISTORY"] = 16] = "PAYMENT_HISTORY";
  MenuOptions[MenuOptions["MY_PROFILE"] = 17] = "MY_PROFILE";
  MenuOptions[MenuOptions["SETTINGS"] = 18] = "SETTINGS";
  MenuOptions[MenuOptions["DD_HISTORY"] = 19] = "DD_HISTORY";
  MenuOptions[MenuOptions["SunActiv"] = 20] = "SunActiv";
  MenuOptions[MenuOptions["HealthInfo"] = 21] = "HealthInfo";
  MenuOptions[MenuOptions["SERVICE_DETAILS"] = 22] = "SERVICE_DETAILS";
})(MenuOptions || (MenuOptions = {}));
class AppComponent {
  constructor(menuCtrl, router, translate, render, authHandler, platform, alertCtrl, splashScreen, utils, config, jsonStore, logger, appVersion) {
    this.menuCtrl = menuCtrl;
    this.router = router;
    this.translate = translate;
    this.render = render;
    this.authHandler = authHandler;
    this.platform = platform;
    this.alertCtrl = alertCtrl;
    this.splashScreen = splashScreen;
    this.utils = utils;
    this.config = config;
    this.jsonStore = jsonStore;
    this.logger = logger;
    this.appVersion = appVersion;
    this.lastTap = Date.now();
    this.isMFPJsonLoaded = false;
    this.introJS = (0,intro_js__WEBPACK_IMPORTED_MODULE_0__["default"])();
    this.render.listen('document', 'mfpjsloaded', () => {
      this.initializeApp();
      this.authHandler.authInit();
    });
    this.translate.setDefaultLang('en');
    this.currentPageID = 1;
    this.utils.component.subscribe(componentName => {
      if (componentName) {
        this.currentPageID = componentName;
        this.changeTitleOfMenu();
      }
    });
    this.utils.getObservable().subscribe(data => {
      if (data.event === "comingFromDashBoardAppTour") {
        setTimeout(() => {
          var intro = (0,intro_js__WEBPACK_IMPORTED_MODULE_0__["default"])();
          var menu = this.menuCtrl;
          var router = this.router;
          intro.setOptions({
            doneLabel: 'Next',
            steps: [{
              element: document.querySelector('.dataStepMenu1'),
              intro: "<h4>More actions</h4> <p>Use the hamburger menu to access more features.<p/>",
              position: "top"
            }]
          });
          intro.oncomplete(function () {
            menu.close();
            router.navigate(['/service'], {
              state: {
                animate: true,
                direction: 'forward',
                comingFromAppTour: true
              }
            });
            // navigate.setRoot(ServicePage, comingFromAppTour,{ animate: true, direction: 'forward' });
          });

          intro.start();
        }, 700);
      }
      if (data.event === "comingFromServiceAppTour") {
        setTimeout(() => {
          var intro = (0,intro_js__WEBPACK_IMPORTED_MODULE_0__["default"])();
          var menu = this.menuCtrl;
          var router = this.router;
          intro.setOptions({
            doneLabel: 'Next',
            steps: [{
              element: document.querySelector('.dataStepMenu3'),
              intro: "<h4>Playback – A click away</h4> <p>Access and restart the tour at any time from Settings.<p/>"
            }]
          });
          intro.oncomplete(function () {
            menu.close();
            router.navigate(['/settings'], {
              state: {
                animate: true,
                direction: 'forward',
                comingFromAppTour: true
              }
            });
          });
          intro.start();
        }, 700);
      }
    });
  }
  changeTitleOfMenu() {
    switch (this.currentPageID) {
      case MenuOptions.MY_HOME_PAGE:
        this.menuTitle = this.translate.instant('home');
        break;
      case MenuOptions.UNIT_PRICE:
        this.menuTitle = this.translate.instant('unitprice');
        break;
      case MenuOptions.PAYMENT_DETAILS:
        this.menuTitle = this.translate.instant('paymentdetails');
        break;
      case MenuOptions.ABOUT_US:
        this.menuTitle = this.translate.instant('aboutus');
        break;
      case MenuOptions.CONTACT_US:
        this.menuTitle = this.translate.instant('contactus');
        break;
      case MenuOptions.LOGIN:
        this.menuTitle = this.translate.instant('login');
        break;
      case MenuOptions.SIGN_UP:
        this.menuTitle = this.translate.instant('newuser');
        break;
      case MenuOptions.FORGOT_PASSWORD:
        this.menuTitle = this.translate.instant('forgotpassword');
        break;
      case MenuOptions.DASHBOARD:
        this.menuTitle = this.translate.instant('dashboard');
        break;
      case MenuOptions.NOTIFICATIONS:
        this.menuTitle = this.translate.instant('notifications');
        break;
      case MenuOptions.MY_POLICY:
        this.menuTitle = this.translate.instant('mypolicycontractno');
        break;
      case MenuOptions.CLAIMS_ENQUIRY:
        this.menuTitle = this.translate.instant('claims');
        break;
      case MenuOptions.DOWNLOAD:
        this.menuTitle = this.translate.instant('download');
        break;
      case MenuOptions.ANNUAL_STATEMENTS:
        this.menuTitle = this.translate.instant('annualstatements');
        break;
      case MenuOptions.UPDATE_DETAILS:
        this.menuTitle = this.translate.instant('updatedetails');
        break;
      case MenuOptions.MY_PROFILE:
        this.menuTitle = this.translate.instant('myprofile');
        break;
      case MenuOptions.PAYMENT_HISTORY:
        this.menuTitle = this.translate.instant('online_payment_history');
        break;
      case MenuOptions.DD_HISTORY:
        this.menuTitle = this.translate.instant('direct_debit_registration_history');
        break;
      case MenuOptions.SunActiv:
        this.menuTitle = this.translate.instant('sun_activTitle');
        break;
      case MenuOptions.HealthInfo:
        this.menuTitle = this.translate.instant('health_InfoTitle');
        break;
      case MenuOptions.SETTINGS:
        this.menuTitle = this.translate.instant('settings');
        break;
      case MenuOptions.SERVICE_DETAILS:
        this.menuTitle = this.translate.instant('service');
        break;
    }
  }
  initializeApp() {
    this.platform.ready().then(() => {
      // (<any>window).plugins.preventscreenshot.enable((a) => this.successCallback(a), (b) => this.errorCallback(b));
      this.splashScreen.hide();
      this.intializeMFPJsonStore();
      // this.router.navigate(['/dashboard-before-login']);
      this.appVersion.getVersionNumber().then(response => {
        this.appVersionNumber = response;
        console.log("response", response);
      }, error => {
        console.log(error);
      });
    });
  }
  successCallback(result) {
    console.log(result); // true - enabled, false - disabled
  }

  errorCallback(error) {
    console.log(error);
  }
  CloseMenu() {
    this.menuCtrl.close();
  }
  openLoginDashboard() {
    //if (this.nav.getActive().name != "DashboardAfterLoginPage") {
    //this.nav.setRoot(DashboardAfterLoginPage, { animate: true, direction: 'forward' });
    this.menuCtrl.close();
    this.router.navigate(['dashboard-after-login']);
  }
  opneAboutUs() {
    this.menuCtrl.close();
    // if (this.router.isActive.name != "AboutUsPage") {
    this.router.navigate(['/about-us']);
    // }
  }

  openContactUs() {
    this.menuCtrl.close();
    // if (this.router.isActive.name != "ContactUsPage") {
    this.router.navigate(['/contact-us']);
    // }
  }

  openProfile() {
    this.menuCtrl.close();
    this.router.navigate(['/profile']);
  }
  openPlanListing() {
    this.menuCtrl.close();
  }
  openDownloads() {
    this.menuCtrl.close();
    this.router.navigate(['/downloads']);
  }
  openClaimsEnquiry() {
    this.menuCtrl.close();
    this.router.navigate(['/claims']);
  }
  openAnnualStatements() {
    this.menuCtrl.close();
  }
  openSettings() {
    this.menuCtrl.close();
    this.router.navigate(['/settings']);
  }
  openUnitPrice() {
    this.menuCtrl.close();
    this.router.navigate(['/unit-price']);
    // }
  }

  openDashboard() {
    this.menuCtrl.close();
  }
  goToHome() {
    this.menuCtrl.close();
    this.router.navigate(['/dashboard-before-login']);
  }
  policyServicing() {
    this.menuCtrl.close();
    this.router.navigate(['/service'], {
      state: {
        animate: true,
        direction: 'forward'
      }
    });
  }
  // openLoginDashboard = function () {
  //   if (this.nav.getActive().name != "DashboardAfterLoginPage") {
  //     this.router.navigate(['/dashboard-before-login']);
  //   }
  //   this.menuCtrl.close();
  // }
  logout() {
    this.logOutApp('', 'Are you sure want to exit?');
    this.menuCtrl.close();
  }
  logOutApp(title, message) {
    let buttons = [{
      text: "Yes",
      cssClass: 'alertbutton',
      handler: () => {
        this.logoutModal();
      }
    }, {
      text: "Cancel",
      handler: () => {}
    }];
    let alert = this.alertCtrl.create({
      header: title,
      message: message,
      buttons: buttons
      // enableBackdropDismiss: false,
    }).then(alert => alert.present());
  }
  logoutModal() {
    //this.pushNotiService.unregisterDevice();
    /**Set saved data to null */
    // this.pushNotiService.unregisterDevice().then(
    // (result)=>{
    //   console.log(result['message']);
    // },(err)=>{
    //   console.log(err['message']);
    // });
    this.config.userInfo = {};
    this.config.userDetails = {};
    this.config.passCodeInfo = {};
    /**clear session time out*/
    if (this.config.sessionTimeout != null) {
      clearTimeout(this.config.sessionTimeout);
      this.config.sessionTimeout = null;
    }
    /** clear idle time out functionality */
    if (this.config.interValID != null) {
      clearInterval(this.config.interValID);
      this.config.interValID = null;
    }
    // this.jsonStore.removeDataInJson(this.jsonStore.collectionNames.userDetails);
    // this.jsonStore.removeDataInJson(this.jsonStore.collectionNames.refreshToken);
    /**Logout from adapter service */
    this.authHandler.logout();
    //this.appCtrl.getRootNav().setRoot(DashboardBeforeLoginPage, { animate: true, direction: 'forward' });
    this.router.navigate(['dashboard-before-login']);
  }
  openHealthInfo() {
    this.menuCtrl.close();
    this.router.navigate(['/healthinfo']);
  }
  /**MFP JSON STRORE INTIALIZATION GOES HERE */
  intializeMFPJsonStore() {
    this.render.listen('document', 'mfpjsonjsloaded', () => {
      // alert(this.utils.isDevice());
      if (true) {
        this.config.passCodeInfo.deviceID = this.utils.getDeviceId();
        this.jsonStore.initilizeJsonUserDetails().then(() => {
          this.logger.log("jsonintiallize");
          console.log("jsonintiallize");
          // MfpJsonLoaded call back is called twice in Android. To avoid this.
          if (this.isMFPJsonLoaded) {
            return;
          }
          this.isMFPJsonLoaded = true;
          const secureKey = "8a65e2905ac3db54c60d52a764854061";
          const secureIV = "c815258cfc4a02f2";
          this.checkJsonStore(secureKey, secureIV);
          // this.checkRotedAndMFPJson();
        }, err => {
          if (this.utils.getPlatform() == 'ios' && err["msg"] == "PROVISION_TABLE_SEARCH_FIELDS_MISMATCH") {
            this.jsonStore.initializeOldJsonStore().then(result => {
              this.jsonStore.destroyOldJsonStore().then(result1 => {
                this.jsonStore.initializeNewJsonStore().then(result2 => {
                  this.jsonStore.addToNewJsonStore().then(result3 => {
                    const secureKey = "8a65e2905ac3db54c60d52a764854061";
                    const secureIV = "c815258cfc4a02f2";
                    this.checkJsonStore(secureKey, secureIV);
                  }, error => {
                    this.onJsonStoreInitializeFailed(err);
                  });
                }, error => {
                  this.onJsonStoreInitializeFailed(err);
                });
              }, error => {
                this.onJsonStoreInitializeFailed(err);
              });
            }, err => {
              this.onJsonStoreInitializeFailed(err);
            });
          } else {
            this.onJsonStoreInitializeFailed(err);
          }
        });
      } else {}
    });
  }
  checkJsonStore(secureKey, secureIV) {
    this.jsonStore.getJsonStoreData(this.jsonStore.collectionNames.userDetails).then((res = []) => {
      this.logger.trace("jsonintiallize json store");
      console.log("jsonintiallize json store");
      if (res[0] && res[0]['json']['id'] && res[0]['json']['token']) {
        this.config.passCodeInfo.userName = this.utils.aesDecrypt(res[0]['json']['id'], secureKey, secureIV);
        this.config.passCodeInfo.passCodeToken = res[0]['json']['token'];
        this.config.passCodeInfo.hasPasscodeAuth = true;
        this.splashScreen.hide();
        // this.nav.setRoot(LoginFirstPage, { animate: true, direction: 'forward', showFingerPrint: 'true' });
        this.router.navigate(['/login-first'], {
          replaceUrl: true,
          state: {
            animate: true,
            direction: 'forward',
            showFingerPrint: 'true'
          }
        });
      } else {
        this.splashScreen.hide();
        // this.nav.setRoot(DashboardBeforeLoginPage);
        this.router.navigate(['/dashboard-before-login'], {
          replaceUrl: true
        });
      }
    }, err => {
      this.splashScreen.hide();
      this.logger.error("MFP JSON Store error -  unable to get data from user details collection");
      console.log("MFP JSON Store error -  unable to get data from user details collection");
      // this.nav.setRoot(DashboardBeforeLoginPage);
      this.router.navigate(['/dashboard-before-login'], {
        replaceUrl: true
      });
      // this.loadLoginPage();
      this.logger.error("JSON Store userDetails getData fail:" + JSON.stringify(err));
    });
  }
  // async checkRotedAndMFPJson() {
  //   await this.jsonStore.getJsonStoreData(this.jsonStore.collectionNames.userDetails).then((res: any = []) => {
  //     this.logger.trace("jsonintiallize json store");
  //     if (this.utils.getPlatform() == 'ios') {
  //       if ((res[0]['json']['securityCheck']) == "false") {
  //         let alertButtons = [{
  //           text: this.translate.instant('Login.ok'),
  //           handler: () => {
  //             // this.platform.exitApp();
  //           }
  //         }];
  //         if (this.utils.getPlatform() == 'ios') {
  //           this.utils.showAlert("", this.translate.instant('Login.jailbreak'), false, []);
  //         } else {
  //           this.utils.showAlert("", this.translate.instant('Login.jailbreak'), false, alertButtons);
  //         }
  //       }
  //     }
  //   });
  //   if (IRoot) {
  //     await this.isRootedDevice().then((res) => {
  //       if (res) {
  //         if (this.utils.getPlatform() == 'ios') {
  //           this.jsonStore.addDataToJsonStore(this.jsonStore.collectionNames.userDetails, {
  //             securityCheck: "false",
  //           });
  //         }
  //         let alertButtons = [{
  //           text: this.translate.instant('Login.ok'),
  //           handler: () => {
  //             // this.platform.exitApp();
  //           }
  //         }];
  //         if (this.utils.getPlatform() == 'ios') {
  //           this.utils.showAlert("", this.translate.instant('Login.jailbreak'), false, []);
  //         } else {
  //           this.utils.showAlert("", this.translate.instant('Login.jailbreak'), false, alertButtons);
  //         }
  //       } else {
  //         if (this.utils.getPlatform() == 'android') {
  //           // this.isGoogleAttested();
  //         }
  //       }
  //     }, (err) => {
  //     });
  //   }
  // }
  onJsonStoreInitializeFailed(err) {
    this.logger.error("MFP JSON Store error -  Intialization issue");
    console.log("MFP JSON Store error -  unable to get data from user details collection");
    this.splashScreen.hide();
    // this.nav.setRoot(DashboardBeforeLoginPage);
    this.router.navigate(['/dashboard-before-login'], {
      replaceUrl: true
    });
    this.logger.error("JSONStore userDetails initilize fail:" + JSON.stringify(err));
    console.log("JSONStore userDetails initilize fail:" + JSON.stringify(err));
  }
}
AppComponent.ɵfac = function AppComponent_Factory(t) {
  return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_9__.MenuController), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_10__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__.TranslateService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_8__.Renderer2), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](src_providers_auth_handler_auth_handler__WEBPACK_IMPORTED_MODULE_1__.AuthHandlerProvider), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_9__.Platform), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_9__.AlertController), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_awesome_cordova_plugins_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_2__.SplashScreen), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](src_providers_utils_utils_service__WEBPACK_IMPORTED_MODULE_3__.UtilService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](src_providers_utils_config__WEBPACK_IMPORTED_MODULE_4__.ConfigProvider), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](src_providers_json_store_json_store__WEBPACK_IMPORTED_MODULE_5__.JsonStoreProvider), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](src_providers_logger_service_logger_service__WEBPACK_IMPORTED_MODULE_6__.LoggerServiceProvider), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_ionic_native_app_version_ngx__WEBPACK_IMPORTED_MODULE_7__.AppVersion));
};
AppComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineComponent"]({
  type: AppComponent,
  selectors: [["app-root"]],
  decls: 135,
  vars: 55,
  consts: [["contentId", "main-content"], ["contentId", "main-content", "menu-id", "first", "type", "push", 3, "swipeGesture"], [1, "side_menu"], ["mode", "ios", "color", "primary"], ["color", "primary"], ["slot", "start", "ion-button", "", "menuToggle", "", 3, "click"], ["name", "close-outline", "color", "secondary", 2, "font-size", "1.8rem", "margin-left", "20px !important"], ["autoHide", "false", "ion-text-center", ""], ["detail", "false", "lines", "none", 3, "click"], ["slot", "start", 1, "fas", "fa-home"], ["slot", "start", 1, "fas", "fa-dollar-sign"], ["slot", "start", 1, "fas", "fa-info"], ["slot", "start", 1, "fas", "fa-comments"], ["color", "secondary", 2, "text-align", "end"], [2, "margin", "10px"], ["contentId", "main-content", "menu-id", "custom", "type", "push", 2, "--background", "#002d3d", 3, "swipeGesture"], ["slot", "start", 1, "fas", "fa-user-circle"], ["slot", "start", 1, "fas", "fa-file-alt"], ["slot", "start", 1, "fas", "fa-download"], ["slot", "start", 1, "fas", "fa-hand-holding-usd"], ["detail", "false", "lines", "none"], ["slot", "start", 1, "fas", "fa-walking"], ["slot", "start", 1, "fas", "fa-address-book"], ["slot", "start", 1, "fas", "fa-phone"], ["autoHide", "false", "ion-text-center", "", 1, "dataStepMenu3"], ["slot", "start", 1, "fas", "fa-cogs"], ["slot", "start", 1, "fas", "fa-sign-out-alt"], ["detail-none", "", 1, "ion-text-center"], ["src", "assets/imgs/SL_WHT_CMYK.png", "alt", "SLF Logo", 1, "sideMenusunlifelogo"], ["id", "main-content", "animated", "false", 3, "swipeGesture"]],
  template: function AppComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "ion-app")(1, "ion-split-pane", 0)(2, "ion-menu", 1)(3, "ion-content", 2)(4, "ion-list")(5, "ion-header", 3)(6, "ion-toolbar", 4)(7, "ion-buttons", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function AppComponent_Template_ion_buttons_click_7_listener() {
        return ctx.CloseMenu();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](8, "ion-icon", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](9, "ion-title");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](10);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](11, "ion-menu-toggle", 7)(12, "ion-item", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function AppComponent_Template_ion_item_click_12_listener() {
        return ctx.goToHome();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](13, "ion-icon", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](14, "ion-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](15);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](16, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](17, "ion-menu-toggle", 7)(18, "ion-item", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function AppComponent_Template_ion_item_click_18_listener() {
        return ctx.openUnitPrice();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](19, "ion-icon", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](20, "ion-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](21);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](22, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](23, "ion-menu-toggle", 7)(24, "ion-item", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function AppComponent_Template_ion_item_click_24_listener() {
        return ctx.opneAboutUs();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](25, "ion-icon", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](26, "ion-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](27);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](28, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](29, "ion-menu-toggle", 7)(30, "ion-item", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function AppComponent_Template_ion_item_click_30_listener() {
        return ctx.openContactUs();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](31, "ion-icon", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](32, "ion-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](33);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](34, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](35, "ion-item", 13)(36, "ion-label", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](37, "App Date & Time: ");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](38, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](39, "13/04/2023 05:00 PM");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](40, "ion-item", 13)(41, "ion-label", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](42);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](43, "ion-menu", 15)(44, "ion-content")(45, "ion-list")(46, "ion-header", 3)(47, "ion-toolbar", 4)(48, "ion-buttons", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function AppComponent_Template_ion_buttons_click_48_listener() {
        return ctx.CloseMenu();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](49, "ion-icon", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](50, "ion-title");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](51);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](52, "ion-menu-toggle", 7)(53, "ion-item", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function AppComponent_Template_ion_item_click_53_listener() {
        return ctx.openLoginDashboard();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](54, "ion-icon", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](55, "ion-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](56);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](57, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](58, "ion-menu-toggle", 7)(59, "ion-item", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function AppComponent_Template_ion_item_click_59_listener() {
        return ctx.openProfile();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](60, "ion-icon", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](61, "ion-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](62);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](63, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](64, "ion-menu-toggle", 7)(65, "ion-item", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function AppComponent_Template_ion_item_click_65_listener() {
        return ctx.policyServicing();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](66, "ion-icon", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](67, "ion-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](68);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](69, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](70, "ion-menu-toggle", 7)(71, "ion-item", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function AppComponent_Template_ion_item_click_71_listener() {
        return ctx.openClaimsEnquiry();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](72, "ion-icon", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](73, "ion-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](74);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](75, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](76, "ion-menu-toggle", 7)(77, "ion-item", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function AppComponent_Template_ion_item_click_77_listener() {
        return ctx.openDownloads();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](78, "ion-icon", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](79, "ion-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](80);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](81, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](82, "ion-menu-toggle", 7)(83, "ion-item", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function AppComponent_Template_ion_item_click_83_listener() {
        return ctx.openUnitPrice();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](84, "ion-icon", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](85, "ion-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](86);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](87, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](88, "ion-menu-toggle", 7)(89, "ion-item", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](90, "ion-icon", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](91, "ion-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](92);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](93, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](94, "ion-menu-toggle", 7)(95, "ion-item", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function AppComponent_Template_ion_item_click_95_listener() {
        return ctx.openHealthInfo();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](96, "ion-icon", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](97, "ion-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](98);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](99, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](100, "ion-menu-toggle", 7)(101, "ion-item", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function AppComponent_Template_ion_item_click_101_listener() {
        return ctx.opneAboutUs();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](102, "ion-icon", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](103, "ion-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](104);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](105, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](106, "ion-menu-toggle", 7)(107, "ion-item", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function AppComponent_Template_ion_item_click_107_listener() {
        return ctx.openContactUs();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](108, "ion-icon", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](109, "ion-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](110);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](111, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](112, "ion-menu-toggle", 24)(113, "ion-item", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function AppComponent_Template_ion_item_click_113_listener() {
        return ctx.openSettings();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](114, "ion-icon", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](115, "ion-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](116);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](117, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](118, "ion-menu-toggle", 7)(119, "ion-item", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function AppComponent_Template_ion_item_click_119_listener() {
        return ctx.logout();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](120, "ion-icon", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](121, "ion-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](122);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](123, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](124, "div", 27);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](125, "img", 28);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](126, "ion-item", 13)(127, "ion-label", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](128, "App Date & Time: ");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](129, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](130, "13/04/2023 05:00 PM");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](131, "ion-item", 13)(132, "ion-label", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](133);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](134, "ion-router-outlet", 29);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("swipeGesture", false);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](8);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](ctx.menuTitle);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](16, 23, "home"));
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](22, 25, "unitprice"));
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](28, 27, "aboutus"));
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](34, 29, "contactus"));
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](9);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"]("Version: ", ctx.appVersionNumber, "");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("swipeGesture", false);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](8);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](ctx.menuTitle);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](57, 31, "home"));
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](63, 33, "myprofile"));
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](69, 35, "service"));
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](75, 37, "claims"));
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](81, 39, "download"));
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](87, 41, "unitprice"));
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](93, 43, "sun_activTitle"));
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](99, 45, "health_InfoTitle"));
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](105, 47, "aboutus"));
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](111, 49, "contactus"));
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](117, 51, "settings"));
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](123, 53, "exit"));
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](11);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"]("Version: ", ctx.appVersionNumber, "");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("swipeGesture", false);
    }
  },
  dependencies: [_ionic_angular__WEBPACK_IMPORTED_MODULE_9__.IonApp, _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.IonButtons, _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.IonContent, _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.IonHeader, _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.IonIcon, _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.IonItem, _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.IonLabel, _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.IonList, _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.IonMenu, _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.IonMenuToggle, _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.IonSplitPane, _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.IonTitle, _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.IonToolbar, _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.IonRouterOutlet, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__.TranslatePipe],
  styles: ["ion-menu[_ngcontent-%COMP%]   ion-content[_ngcontent-%COMP%] {\n  --background: #002d3d;\n}\n\nion-content[_ngcontent-%COMP%] {\n  --offset-bottom: auto!important;\n  --overflow: hidden;\n  overflow: auto;\n}\nion-content[_ngcontent-%COMP%]::-webkit-scrollbar {\n  display: none;\n}\n\nion-menu[_ngcontent-%COMP%]   ion-content[_ngcontent-%COMP%]   ion-list[_ngcontent-%COMP%] {\n  background: #002d3d;\n  color: #fff;\n  padding: 0;\n}\n\nion-menu[_ngcontent-%COMP%]   ion-content[_ngcontent-%COMP%]   ion-list[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%] {\n  --background: #002d3d;\n  color: #ffffff;\n  border-bottom: 2px solid white !important;\n  margin-left: 20px;\n  margin-right: 20px;\n  display: list-item;\n}\n\nion-icon[_ngcontent-%COMP%] {\n  color: #ffffff;\n  font-size: 15px;\n  padding: 5px;\n  text-align: center;\n  -webkit-margin-end: 10px;\n          margin-inline-end: 10px;\n  margin-left: -10px;\n}\n\nion-buttons[_ngcontent-%COMP%] {\n  display: contents;\n}\n\n.sideMenusunlifelogo[_ngcontent-%COMP%] {\n  margin-top: 20px;\n  width: 40%;\n  height: 40%;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwid2VicGFjazovLy4vLi4vLi4vLi4vQWxsJTIwUHJvamVjdHMvTWFsYXlzaWFfQ2xpZW50QXBwX1JldmFtcC9TdW5BY2Nlc3NfSW9uaWM2X1JldmFtcC9zcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNFLHFCQUFBO0FDREY7O0FER0E7RUFFRywrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtBQ0RIO0FERUc7RUFDRSxhQUFBO0FDQUw7O0FER0E7RUFDRSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxVQUFBO0FDQUY7O0FER0E7RUFDRSxxQkFBQTtFQUNBLGNBQUE7RUFDQSx5Q0FBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtBQ0FGOztBREVBO0VBQ0ksY0FBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSx3QkFBQTtVQUFBLHVCQUFBO0VBQ0Esa0JBQUE7QUNDSjs7QURFQTtFQUNFLGlCQUFBO0FDQ0Y7O0FEQ0E7RUFDRSxnQkFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0FDRUYiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuXHJcbmlvbi1tZW51IGlvbi1jb250ZW50IHtcclxuICAtLWJhY2tncm91bmQ6ICMwMDJkM2Q7XHJcbn1cclxuaW9uLWNvbnRlbnR7XHJcbiAgIC8vIG92ZXJ3cml0ZSBpbmxpbmUgc3R5bGVzXHJcbiAgIC0tb2Zmc2V0LWJvdHRvbTogYXV0byFpbXBvcnRhbnQ7XHJcbiAgIC0tb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgb3ZlcmZsb3c6IGF1dG87XHJcbiAgICY6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcclxuICAgICBkaXNwbGF5OiBub25lO1xyXG4gICB9XHJcbn1cclxuaW9uLW1lbnUgaW9uLWNvbnRlbnQgaW9uLWxpc3Qge1xyXG4gIGJhY2tncm91bmQ6ICMwMDJkM2Q7XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgcGFkZGluZzogMDtcclxufVxyXG5cclxuaW9uLW1lbnUgaW9uLWNvbnRlbnQgaW9uLWxpc3QgaW9uLWl0ZW0ge1xyXG4gIC0tYmFja2dyb3VuZDogIzAwMmQzZDtcclxuICBjb2xvcjogI2ZmZmZmZjtcclxuICBib3JkZXItYm90dG9tOiAycHggc29saWQgd2hpdGUgIWltcG9ydGFudDtcclxuICBtYXJnaW4tbGVmdDogMjBweDtcclxuICBtYXJnaW4tcmlnaHQ6IDIwcHg7XHJcbiAgZGlzcGxheTogbGlzdC1pdGVtO1xyXG59XHJcbmlvbi1pY29uIHtcclxuICAgIGNvbG9yOiAjZmZmZmZmO1xyXG4gICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgcGFkZGluZzogNXB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgbWFyZ2luLWlubGluZS1lbmQ6IDEwcHg7XHJcbiAgICBtYXJnaW4tbGVmdDogLTEwcHg7XHJcbiAgfVxyXG5cclxuaW9uLWJ1dHRvbnN7XHJcbiAgZGlzcGxheTogY29udGVudHM7XHJcbn1cclxuLnNpZGVNZW51c3VubGlmZWxvZ28ge1xyXG4gIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgd2lkdGg6IDQwJTtcclxuICBoZWlnaHQ6IDQwJTtcclxufVxyXG5cclxuXHJcbiIsImlvbi1tZW51IGlvbi1jb250ZW50IHtcbiAgLS1iYWNrZ3JvdW5kOiAjMDAyZDNkO1xufVxuXG5pb24tY29udGVudCB7XG4gIC0tb2Zmc2V0LWJvdHRvbTogYXV0byFpbXBvcnRhbnQ7XG4gIC0tb3ZlcmZsb3c6IGhpZGRlbjtcbiAgb3ZlcmZsb3c6IGF1dG87XG59XG5pb24tY29udGVudDo6LXdlYmtpdC1zY3JvbGxiYXIge1xuICBkaXNwbGF5OiBub25lO1xufVxuXG5pb24tbWVudSBpb24tY29udGVudCBpb24tbGlzdCB7XG4gIGJhY2tncm91bmQ6ICMwMDJkM2Q7XG4gIGNvbG9yOiAjZmZmO1xuICBwYWRkaW5nOiAwO1xufVxuXG5pb24tbWVudSBpb24tY29udGVudCBpb24tbGlzdCBpb24taXRlbSB7XG4gIC0tYmFja2dyb3VuZDogIzAwMmQzZDtcbiAgY29sb3I6ICNmZmZmZmY7XG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCB3aGl0ZSAhaW1wb3J0YW50O1xuICBtYXJnaW4tbGVmdDogMjBweDtcbiAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xuICBkaXNwbGF5OiBsaXN0LWl0ZW07XG59XG5cbmlvbi1pY29uIHtcbiAgY29sb3I6ICNmZmZmZmY7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgcGFkZGluZzogNXB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbi1pbmxpbmUtZW5kOiAxMHB4O1xuICBtYXJnaW4tbGVmdDogLTEwcHg7XG59XG5cbmlvbi1idXR0b25zIHtcbiAgZGlzcGxheTogY29udGVudHM7XG59XG5cbi5zaWRlTWVudXN1bmxpZmVsb2dvIHtcbiAgbWFyZ2luLXRvcDogMjBweDtcbiAgd2lkdGg6IDQwJTtcbiAgaGVpZ2h0OiA0MCU7XG59Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 36747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule),
/* harmony export */   "LanguageLoader": () => (/* binding */ LanguageLoader)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_75__ = __webpack_require__(/*! @angular/platform-browser */ 34497);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_73__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_74__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.component */ 55041);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app-routing.module */ 90158);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_76__ = __webpack_require__(/*! @angular/common/http */ 58987);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_77__ = __webpack_require__(/*! @ngx-translate/core */ 38699);
/* harmony import */ var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_70__ = __webpack_require__(/*! @ngx-translate/http-loader */ 58319);
/* harmony import */ var _services_translate_config_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/translate-config.service */ 45340);
/* harmony import */ var _pages_unit_price_uniPriceListService__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/unit-price/uniPriceListService */ 86916);
/* harmony import */ var src_providers_auth_handler_auth_handler__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/providers/auth-handler/auth-handler */ 38590);
/* harmony import */ var _pages_photo_gallery_photoGalleryService__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/photo-gallery/photoGalleryService */ 71952);
/* harmony import */ var _awesome_cordova_plugins_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @awesome-cordova-plugins/splash-screen/ngx */ 10696);
/* harmony import */ var src_providers_utils_utils_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/providers/utils/utils.service */ 30423);
/* harmony import */ var src_providers_utils_config__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/providers/utils/config */ 43485);
/* harmony import */ var _pages_photo_gallery_details_galleryDetailsService__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pages/photo-gallery-details/galleryDetailsService */ 87108);
/* harmony import */ var _awesome_cordova_plugins_photo_library_ngx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @awesome-cordova-plugins/photo-library/ngx */ 46761);
/* harmony import */ var _pages_media_release_mediaService__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./pages/media-release/mediaService */ 6615);
/* harmony import */ var _pages_news_list_newsListService__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./pages/news-list/newsListService */ 56431);
/* harmony import */ var _awesome_cordova_plugins_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @awesome-cordova-plugins/in-app-browser/ngx */ 67122);
/* harmony import */ var _awesome_cordova_plugins_device_ngx__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @awesome-cordova-plugins/device/ngx */ 74701);
/* harmony import */ var src_providers_json_store_json_store__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! src/providers/json-store/json-store */ 15342);
/* harmony import */ var src_providers_logger_service_logger_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! src/providers/logger-service/logger-service */ 9999);
/* harmony import */ var _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @ionic-native/file/ngx */ 12358);
/* harmony import */ var _pages_login_loginService__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./pages/login/loginService */ 61390);
/* harmony import */ var _pages_profile_getProfileDetailsService__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./pages/profile/getProfileDetailsService */ 85059);
/* harmony import */ var _ionic_native_fingerprint_aio_ngx__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @ionic-native/fingerprint-aio/ngx */ 63427);
/* harmony import */ var _ionic_native_app_version_ngx__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @ionic-native/app-version/ngx */ 85209);
/* harmony import */ var _pages_sign_up_securityQuestionsService__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./pages/sign-up/securityQuestionsService */ 71959);
/* harmony import */ var _pages_forgot_password_checkUserExistenceService__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./pages/forgot-password/checkUserExistenceService */ 32633);
/* harmony import */ var _pages_reset_pwd_with_personal_details_resetPasswordPersonalService__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./pages/reset-pwd-with-personal-details/resetPasswordPersonalService */ 81770);
/* harmony import */ var _pages_sign_up_sign_up_service__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./pages/sign-up/sign-up-service */ 25171);
/* harmony import */ var _pages_plan_listing_getPolicyListService__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./pages/plan-listing/getPolicyListService */ 78785);
/* harmony import */ var _pages_policy_details_getPolicyDetailsService__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./pages/policy-details/getPolicyDetailsService */ 10293);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_72__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _awesome_cordova_plugins_camera_ngx__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @awesome-cordova-plugins/camera/ngx */ 82543);
/* harmony import */ var _pages_payment_records_paymentRecordsService__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./pages/payment-records/paymentRecordsService */ 92126);
/* harmony import */ var _pages_fund_list_fundAllocationsService__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./pages/fund-list/fundAllocationsService */ 31250);
/* harmony import */ var _pages_claim_submission_claimSubmissionservice__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./pages/claim-submission/claimSubmissionservice */ 28391);
/* harmony import */ var _pages_notification_details_notificationDetailsService__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./pages/notification-details/notificationDetailsService */ 90589);
/* harmony import */ var _pages_notifications_notificationsService__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./pages/notifications/notificationsService */ 95536);
/* harmony import */ var _pages_payment_user_details_paymentUserDetailsService__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./pages/payment-user-details/paymentUserDetailsService */ 52991);
/* harmony import */ var _pages_periodic_payout_periodicPayoutService__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./pages/periodic-payout/periodicPayoutService */ 57791);
/* harmony import */ var _pages_payment_confirmation_merchantInfoService__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./pages/payment-confirmation/merchantInfoService */ 68579);
/* harmony import */ var _pages_fund_details_fundDetailsService__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./pages/fund-details/fundDetailsService */ 2261);
/* harmony import */ var _pages_make_payment_paymentSuccessService__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./pages/make-payment/paymentSuccessService */ 33038);
/* harmony import */ var _pages_update_direct_debit_updateDirectDebitService__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./pages/update-direct-debit/updateDirectDebitService */ 42599);
/* harmony import */ var _pages_e_nomination_eNominationService__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./pages/e-nomination/eNominationService */ 8401);
/* harmony import */ var _pages_e_medical_card_eMedicalCardService__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ./pages/e-medical-card/eMedicalCardService */ 27323);
/* harmony import */ var _pages_healthinfo_detail_healthinfoDetailService__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ./pages/healthinfo-detail/healthinfoDetailService */ 19670);
/* harmony import */ var _pages_healthinfo_healthinfoService__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ./pages/healthinfo/healthinfoService */ 33255);
/* harmony import */ var _awesome_cordova_plugins_chooser_ngx__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! @awesome-cordova-plugins/chooser/ngx */ 82576);
/* harmony import */ var _pages_claim_enquiry_list_claimEnquiryService__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! ./pages/claim-enquiry-list/claimEnquiryService */ 28915);
/* harmony import */ var _pages_claim_status_claimStatusService__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! ./pages/claim-status/claimStatusService */ 45324);
/* harmony import */ var _awesome_cordova_plugins_document_picker_ngx__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! @awesome-cordova-plugins/document-picker/ngx */ 46992);
/* harmony import */ var _ionic_native_file_path_ngx__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! @ionic-native/file-path/ngx */ 74375);
/* harmony import */ var _ionic_native_file_chooser_ngx__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(/*! @ionic-native/file-chooser/ngx */ 86786);
/* harmony import */ var _ionic_native_base64_ngx__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(/*! @ionic-native/base64/ngx */ 89604);
/* harmony import */ var src_providers_download_pdf_download_pdf__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(/*! src/providers/download-pdf/download-pdf */ 58339);
/* harmony import */ var _awesome_cordova_plugins_android_permissions_ngx__WEBPACK_IMPORTED_MODULE_52__ = __webpack_require__(/*! @awesome-cordova-plugins/android-permissions/ngx */ 4824);
/* harmony import */ var _awesome_cordova_plugins_file_opener_ngx__WEBPACK_IMPORTED_MODULE_53__ = __webpack_require__(/*! @awesome-cordova-plugins/file-opener/ngx */ 99439);
/* harmony import */ var _pages_change_password_changePasswordService__WEBPACK_IMPORTED_MODULE_54__ = __webpack_require__(/*! ./pages/change-password/changePasswordService */ 72703);
/* harmony import */ var _providers_push_service_push_service__WEBPACK_IMPORTED_MODULE_55__ = __webpack_require__(/*! ../providers/push-service/push-service */ 49756);
/* harmony import */ var _pages_update_secure_word_updateSecureWordService__WEBPACK_IMPORTED_MODULE_56__ = __webpack_require__(/*! ./pages/update-secure-word/updateSecureWordService */ 47279);
/* harmony import */ var _pages_update_security_question_updateSecurityQuestionService__WEBPACK_IMPORTED_MODULE_57__ = __webpack_require__(/*! ./pages/update-security-question/updateSecurityQuestionService */ 96251);
/* harmony import */ var _pages_notification_settings_notificationSettingsService__WEBPACK_IMPORTED_MODULE_58__ = __webpack_require__(/*! ./pages/notification-settings/notificationSettingsService */ 34088);
/* harmony import */ var _pages_epolicy_list_ePolicyListService__WEBPACK_IMPORTED_MODULE_59__ = __webpack_require__(/*! ./pages/epolicy-list/ePolicyListService */ 8307);
/* harmony import */ var _pages_news_letter_newsLetterService__WEBPACK_IMPORTED_MODULE_60__ = __webpack_require__(/*! ./pages/news-letter/newsLetterService */ 40761);
/* harmony import */ var _pages_app_downloads_getAppslistService__WEBPACK_IMPORTED_MODULE_61__ = __webpack_require__(/*! ./pages/app-downloads/getAppslistService */ 60193);
/* harmony import */ var _pages_annual_statements_annualStatementsService__WEBPACK_IMPORTED_MODULE_62__ = __webpack_require__(/*! ./pages/annual-statements/annualStatementsService */ 35577);
/* harmony import */ var _pages_payment_history_paymwntHistoryService__WEBPACK_IMPORTED_MODULE_63__ = __webpack_require__(/*! ./pages/payment-history/paymwntHistoryService */ 70131);
/* harmony import */ var _pages_service_history_serviceHistoryService__WEBPACK_IMPORTED_MODULE_64__ = __webpack_require__(/*! ./pages/service-history/serviceHistoryService */ 86976);
/* harmony import */ var _pages_update_personal_details_updatePersonalDetailservice__WEBPACK_IMPORTED_MODULE_65__ = __webpack_require__(/*! ./pages/update-personal-details/updatePersonalDetailservice */ 26475);
/* harmony import */ var _pages_update_card_updateCardService__WEBPACK_IMPORTED_MODULE_66__ = __webpack_require__(/*! ./pages/update-card/updateCardService */ 36833);
/* harmony import */ var _pages_update_payout_details_updatePayoutDetailsService__WEBPACK_IMPORTED_MODULE_67__ = __webpack_require__(/*! ./pages/update-payout-details/updatePayoutDetailsService */ 50441);
/* harmony import */ var _pages_fund_switching_fundSwitchingService__WEBPACK_IMPORTED_MODULE_68__ = __webpack_require__(/*! ./pages/fund-switching/fundSwitchingService */ 87348);
/* harmony import */ var _component_edit_personal_data_edit_personal_data_component__WEBPACK_IMPORTED_MODULE_69__ = __webpack_require__(/*! ./component/edit-personal-data/edit-personal-data.component */ 37434);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_71__ = __webpack_require__(/*! @angular/core */ 22560);






















































//import { ClaimSubmissionDetailsService } from './pages/claim-details/ClaimSubmissionDetailsService';
// import { DocumentPicker } from '@ionic-native/document-picker/ngx';


























function LanguageLoader(http) {
  return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_70__.TranslateHttpLoader(http, 'assets/i18n/', '.json');
}
class AppModule {}
AppModule.ɵfac = function AppModule_Factory(t) {
  return new (t || AppModule)();
};
AppModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_71__["ɵɵdefineNgModule"]({
  type: AppModule,
  bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent]
});
AppModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_71__["ɵɵdefineInjector"]({
  providers: [_services_translate_config_service__WEBPACK_IMPORTED_MODULE_2__.TranslateConfigService, _pages_unit_price_uniPriceListService__WEBPACK_IMPORTED_MODULE_3__.UnitPriceListService, _pages_photo_gallery_photoGalleryService__WEBPACK_IMPORTED_MODULE_5__.GetPhotoGalleryService, src_providers_auth_handler_auth_handler__WEBPACK_IMPORTED_MODULE_4__.AuthHandlerProvider, _awesome_cordova_plugins_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_6__.SplashScreen, src_providers_utils_utils_service__WEBPACK_IMPORTED_MODULE_7__.UtilService, _pages_photo_gallery_details_galleryDetailsService__WEBPACK_IMPORTED_MODULE_9__.GetPhotoGalleryDetailsService, src_providers_utils_config__WEBPACK_IMPORTED_MODULE_8__.ConfigProvider, _awesome_cordova_plugins_photo_library_ngx__WEBPACK_IMPORTED_MODULE_10__.PhotoLibrary, _pages_media_release_mediaService__WEBPACK_IMPORTED_MODULE_11__.MediaReleaseService, _pages_news_list_newsListService__WEBPACK_IMPORTED_MODULE_12__.NewsListService, _awesome_cordova_plugins_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_13__.InAppBrowser, _awesome_cordova_plugins_device_ngx__WEBPACK_IMPORTED_MODULE_14__.Device, src_providers_json_store_json_store__WEBPACK_IMPORTED_MODULE_15__.JsonStoreProvider, src_providers_logger_service_logger_service__WEBPACK_IMPORTED_MODULE_16__.LoggerServiceProvider, _pages_login_loginService__WEBPACK_IMPORTED_MODULE_18__.LoginService, _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_17__.File, _angular_common__WEBPACK_IMPORTED_MODULE_72__.DatePipe, _pages_profile_getProfileDetailsService__WEBPACK_IMPORTED_MODULE_19__.GetProfileDetailsService, _ionic_native_fingerprint_aio_ngx__WEBPACK_IMPORTED_MODULE_20__.FingerprintAIO, _ionic_native_app_version_ngx__WEBPACK_IMPORTED_MODULE_21__.AppVersion, _pages_sign_up_securityQuestionsService__WEBPACK_IMPORTED_MODULE_22__.SecurityQuestionsService, _pages_forgot_password_checkUserExistenceService__WEBPACK_IMPORTED_MODULE_23__.CheckUserExistenceService, _pages_reset_pwd_with_personal_details_resetPasswordPersonalService__WEBPACK_IMPORTED_MODULE_24__.ResetPasswordPersonalService, _pages_sign_up_sign_up_service__WEBPACK_IMPORTED_MODULE_25__.SignUpServiceProvider, _pages_plan_listing_getPolicyListService__WEBPACK_IMPORTED_MODULE_26__.GetPolicyListService, _pages_policy_details_getPolicyDetailsService__WEBPACK_IMPORTED_MODULE_27__.GetPolicyDetailsService, _pages_payment_records_paymentRecordsService__WEBPACK_IMPORTED_MODULE_29__.PaymentRecordsService, _pages_fund_list_fundAllocationsService__WEBPACK_IMPORTED_MODULE_30__.FundAllocationsService, _pages_claim_submission_claimSubmissionservice__WEBPACK_IMPORTED_MODULE_31__.ClaimSubmissionService, _pages_notification_details_notificationDetailsService__WEBPACK_IMPORTED_MODULE_32__.NotificationDetailsService, _pages_notifications_notificationsService__WEBPACK_IMPORTED_MODULE_33__.NotificationService, _pages_payment_user_details_paymentUserDetailsService__WEBPACK_IMPORTED_MODULE_34__.PaymentUserDetailsService, _pages_periodic_payout_periodicPayoutService__WEBPACK_IMPORTED_MODULE_35__.GetPeriodicPayoutService, _pages_payment_confirmation_merchantInfoService__WEBPACK_IMPORTED_MODULE_36__.GetMerchantInfoService, _pages_fund_details_fundDetailsService__WEBPACK_IMPORTED_MODULE_37__.FundDetailsService, _pages_make_payment_paymentSuccessService__WEBPACK_IMPORTED_MODULE_38__.PaymentSuccessService, _pages_update_direct_debit_updateDirectDebitService__WEBPACK_IMPORTED_MODULE_39__.UpdateDirectDebitService, _pages_e_nomination_eNominationService__WEBPACK_IMPORTED_MODULE_40__.eNominationService, _pages_e_medical_card_eMedicalCardService__WEBPACK_IMPORTED_MODULE_41__.EMedicalCardService, _pages_healthinfo_detail_healthinfoDetailService__WEBPACK_IMPORTED_MODULE_42__.HealthinfoDetailService, _pages_healthinfo_healthinfoService__WEBPACK_IMPORTED_MODULE_43__.HealthinfoService, _awesome_cordova_plugins_camera_ngx__WEBPACK_IMPORTED_MODULE_28__.Camera, _awesome_cordova_plugins_document_picker_ngx__WEBPACK_IMPORTED_MODULE_47__.DocumentPicker, _ionic_native_file_path_ngx__WEBPACK_IMPORTED_MODULE_48__.FilePath, _ionic_native_file_chooser_ngx__WEBPACK_IMPORTED_MODULE_49__.FileChooser, _ionic_native_base64_ngx__WEBPACK_IMPORTED_MODULE_50__.Base64, _awesome_cordova_plugins_chooser_ngx__WEBPACK_IMPORTED_MODULE_44__.Chooser, _pages_claim_enquiry_list_claimEnquiryService__WEBPACK_IMPORTED_MODULE_45__.ClaimEnquiryService, _pages_claim_status_claimStatusService__WEBPACK_IMPORTED_MODULE_46__.ClaimStatusService, _awesome_cordova_plugins_android_permissions_ngx__WEBPACK_IMPORTED_MODULE_52__.AndroidPermissions, _pages_change_password_changePasswordService__WEBPACK_IMPORTED_MODULE_54__.ChangePasswordService, _awesome_cordova_plugins_file_opener_ngx__WEBPACK_IMPORTED_MODULE_53__.FileOpener, _providers_push_service_push_service__WEBPACK_IMPORTED_MODULE_55__.PushService, _pages_update_secure_word_updateSecureWordService__WEBPACK_IMPORTED_MODULE_56__.UpdateSecureWordService, _pages_update_security_question_updateSecurityQuestionService__WEBPACK_IMPORTED_MODULE_57__.UpdateSecurityQuestionService, _pages_notification_settings_notificationSettingsService__WEBPACK_IMPORTED_MODULE_58__.notificationSettingservice, _pages_epolicy_list_ePolicyListService__WEBPACK_IMPORTED_MODULE_59__.EPolicyListService, src_providers_download_pdf_download_pdf__WEBPACK_IMPORTED_MODULE_51__.DownloadPdfProvider, _pages_news_letter_newsLetterService__WEBPACK_IMPORTED_MODULE_60__.NewsLetterService, _pages_app_downloads_getAppslistService__WEBPACK_IMPORTED_MODULE_61__.GetAppsListService, _pages_annual_statements_annualStatementsService__WEBPACK_IMPORTED_MODULE_62__.GetAnnualStatementsService, _pages_payment_history_paymwntHistoryService__WEBPACK_IMPORTED_MODULE_63__.PaymentHistoryService, _pages_service_history_serviceHistoryService__WEBPACK_IMPORTED_MODULE_64__.ServiceHistroyService, _pages_payment_history_paymwntHistoryService__WEBPACK_IMPORTED_MODULE_63__.PaymentHistoryService, _pages_update_personal_details_updatePersonalDetailservice__WEBPACK_IMPORTED_MODULE_65__.UpdatePersonalService, _pages_update_card_updateCardService__WEBPACK_IMPORTED_MODULE_66__.UpdateCardService, _pages_update_payout_details_updatePayoutDetailsService__WEBPACK_IMPORTED_MODULE_67__.UpdatePayoutDetailsService, _pages_fund_switching_fundSwitchingService__WEBPACK_IMPORTED_MODULE_68__.FundSwitchingService, _component_edit_personal_data_edit_personal_data_component__WEBPACK_IMPORTED_MODULE_69__.EditPersonalDataComponent, {
    provide: _angular_router__WEBPACK_IMPORTED_MODULE_73__.RouteReuseStrategy,
    useClass: _ionic_angular__WEBPACK_IMPORTED_MODULE_74__.IonicRouteStrategy
  }],
  imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_75__.BrowserModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_74__.IonicModule.forRoot({
    swipeBackEnabled: false
  }), _angular_common_http__WEBPACK_IMPORTED_MODULE_76__.HttpClientModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_77__.TranslateModule.forRoot({
    loader: {
      provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_77__.TranslateLoader,
      useFactory: LanguageLoader,
      deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_76__.HttpClient]
    }
  }), _app_routing_module__WEBPACK_IMPORTED_MODULE_1__.AppRoutingModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_71__["ɵɵsetNgModuleScope"](AppModule, {
    declarations: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent],
    imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_75__.BrowserModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_74__.IonicModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_76__.HttpClientModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_77__.TranslateModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_1__.AppRoutingModule]
  });
})();

/***/ }),

/***/ 37434:
/*!******************************************************************************!*\
  !*** ./src/app/component/edit-personal-data/edit-personal-data.component.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EditPersonalDataComponent": () => (/* binding */ EditPersonalDataComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var http_status_codes__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! http-status-codes */ 92788);
/* harmony import */ var src_app_pages_update_details_popup_update_details_popup_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/pages/update-details-popup/update-details-popup.page */ 99730);
/* harmony import */ var src_app_pages_success_popup_success_popup_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/pages/success-popup/success-popup.page */ 75024);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var src_providers_utils_utils_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/providers/utils/utils.service */ 30423);
/* harmony import */ var src_providers_logger_service_logger_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/providers/logger-service/logger-service */ 9999);
/* harmony import */ var src_app_pages_plan_listing_getPolicyListService__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/pages/plan-listing/getPolicyListService */ 78785);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var src_app_pages_update_personal_details_updatePersonalDetailservice__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/pages/update-personal-details/updatePersonalDetailservice */ 26475);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ngx-translate/core */ 38699);
/* harmony import */ var src_providers_utils_config__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/providers/utils/config */ 43485);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common */ 94666);
















function EditPersonalDataComponent_p_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "To update Name & Identity Number, please contact client services at ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "a", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3, "1300-88-5055");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](4, " or email to ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](5, "span")(6, "a", 26)(7, "u");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](8, "policy.admin@sunlifemalaysia.com");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()();
  }
}
function EditPersonalDataComponent_a_13_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 28)(1, "ion-button", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2, "Send email Request ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
  }
}
function EditPersonalDataComponent_a_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "a", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, EditPersonalDataComponent_a_13_div_1_Template, 3, 0, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r1.isEditable);
  }
}
function EditPersonalDataComponent_div_21_Template(rf, ctx) {
  if (rf & 1) {
    const _r46 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 30)(1, "i", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function EditPersonalDataComponent_div_21_Template_i_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r46);
      const ctx_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r45.updateDetailsModal("dateOfBirth", "Date of Birth"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
  }
}
function EditPersonalDataComponent_div_22_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", ctx_r3.personalData.dateOfBirth.value, "");
  }
}
function EditPersonalDataComponent_div_23_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "-");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
}
function EditPersonalDataComponent_div_30_Template(rf, ctx) {
  if (rf & 1) {
    const _r48 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 30)(1, "i", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function EditPersonalDataComponent_div_30_Template_i_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r48);
      const ctx_r47 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r47.updateDetailsModal("race", "Race"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
  }
}
function EditPersonalDataComponent_div_31_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx_r6.personalData.race.value);
  }
}
function EditPersonalDataComponent_div_32_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "-");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
}
function EditPersonalDataComponent_div_39_Template(rf, ctx) {
  if (rf & 1) {
    const _r50 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 30)(1, "i", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function EditPersonalDataComponent_div_39_Template_i_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r50);
      const ctx_r49 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r49.updateDetailsModal("nationality", "Nationality"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
  }
}
function EditPersonalDataComponent_div_40_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", ctx_r9.personalData.nationality.value, "");
  }
}
function EditPersonalDataComponent_div_41_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "-");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
}
function EditPersonalDataComponent_div_48_Template(rf, ctx) {
  if (rf & 1) {
    const _r52 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 30)(1, "i", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function EditPersonalDataComponent_div_48_Template_i_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r52);
      const ctx_r51 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r51.updateDetailsModal("occupation", "Occupation"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
  }
}
function EditPersonalDataComponent_div_49_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", ctx_r12.personalData.occupation.value, " ");
  }
}
function EditPersonalDataComponent_div_50_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "-");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
}
function EditPersonalDataComponent_div_57_Template(rf, ctx) {
  if (rf & 1) {
    const _r54 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 30)(1, "i", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function EditPersonalDataComponent_div_57_Template_i_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r54);
      const ctx_r53 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r53.updateDetailsModal("natureOfBusiness", "Nature of Business"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
  }
}
function EditPersonalDataComponent_div_58_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", ctx_r15.personalData.natureOfBusiness.value, "");
  }
}
function EditPersonalDataComponent_div_59_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "-");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
}
function EditPersonalDataComponent_div_66_Template(rf, ctx) {
  if (rf & 1) {
    const _r56 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 30)(1, "i", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function EditPersonalDataComponent_div_66_Template_i_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r56);
      const ctx_r55 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r55.updateDetailsModal("contactNumbers", "Contact Number"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
  }
}
function EditPersonalDataComponent_span_69_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx_r18.personalData.contactNumbers.value.mobileNumber);
  }
}
function EditPersonalDataComponent_span_70_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "-");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
}
function EditPersonalDataComponent_span_73_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx_r20.personalData.contactNumbers.value.officeNumber);
  }
}
function EditPersonalDataComponent_span_74_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "-");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
}
function EditPersonalDataComponent_span_77_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", ctx_r22.personalData.contactNumbers.value.homeNumber, "");
  }
}
function EditPersonalDataComponent_span_78_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "-");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
}
function EditPersonalDataComponent_span_81_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx_r24.personalData.contactNumbers.value.otherNumber);
  }
}
function EditPersonalDataComponent_span_82_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "-");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
}
function EditPersonalDataComponent_div_89_Template(rf, ctx) {
  if (rf & 1) {
    const _r58 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 30)(1, "i", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function EditPersonalDataComponent_div_89_Template_i_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r58);
      const ctx_r57 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r57.updateDetailsModal("emailAddress", "Email Address"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
  }
}
function EditPersonalDataComponent_div_90_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", ctx_r27.personalData.emailAddress.value, " ");
  }
}
function EditPersonalDataComponent_div_91_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "-");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
}
function EditPersonalDataComponent_div_98_Template(rf, ctx) {
  if (rf & 1) {
    const _r60 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 30)(1, "i", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function EditPersonalDataComponent_div_98_Template_i_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r60);
      const ctx_r59 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r59.updateDetailsModal("permanentAddress", "Permanent Address"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
  }
}
function EditPersonalDataComponent_div_100_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", ctx_r30.personalData.permanentAddress.value.addressLine1, "");
  }
}
function EditPersonalDataComponent_div_101_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", ctx_r31.personalData.permanentAddress.value.addressLine2, "");
  }
}
function EditPersonalDataComponent_div_102_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", ctx_r32.personalData.permanentAddress.value.addressLine3, "");
  }
}
function EditPersonalDataComponent_div_103_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", ctx_r33.personalData.permanentAddress.value.postCode, "");
  }
}
function EditPersonalDataComponent_div_104_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", ctx_r34.personalData.permanentAddress.value.postalCode, "");
  }
}
function EditPersonalDataComponent_div_105_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", ctx_r35.personalData.permanentAddress.value.state, "");
  }
}
function EditPersonalDataComponent_div_106_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", ctx_r36.personalData.permanentAddress.value.country, "");
  }
}
function EditPersonalDataComponent_div_113_Template(rf, ctx) {
  if (rf & 1) {
    const _r62 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 30)(1, "i", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function EditPersonalDataComponent_div_113_Template_i_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r62);
      const ctx_r61 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r61.updateDetailsModal("correspondenceAddress", "Correspondence Address"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
  }
}
function EditPersonalDataComponent_li_115_div_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const policyAddress_r63 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", policyAddress_r63.addressLine1, "");
  }
}
function EditPersonalDataComponent_li_115_div_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const policyAddress_r63 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", policyAddress_r63.addressLine2, "");
  }
}
function EditPersonalDataComponent_li_115_div_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const policyAddress_r63 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", policyAddress_r63.addressLine3, "");
  }
}
function EditPersonalDataComponent_li_115_div_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const policyAddress_r63 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](policyAddress_r63.postCode);
  }
}
function EditPersonalDataComponent_li_115_div_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const policyAddress_r63 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](policyAddress_r63.postalCode);
  }
}
function EditPersonalDataComponent_li_115_div_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const policyAddress_r63 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](policyAddress_r63.state);
  }
}
function EditPersonalDataComponent_li_115_div_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const policyAddress_r63 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](policyAddress_r63.country);
  }
}
function EditPersonalDataComponent_li_115_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "li", 38)(1, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](4, EditPersonalDataComponent_li_115_div_4_Template, 2, 1, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](5, EditPersonalDataComponent_li_115_div_5_Template, 2, 1, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](6, EditPersonalDataComponent_li_115_div_6_Template, 2, 1, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](7, EditPersonalDataComponent_li_115_div_7_Template, 2, 1, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](8, EditPersonalDataComponent_li_115_div_8_Template, 2, 1, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](9, EditPersonalDataComponent_li_115_div_9_Template, 2, 1, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](10, EditPersonalDataComponent_li_115_div_10_Template, 2, 1, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const policyAddress_r63 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](policyAddress_r63.policyNumber);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpropertyInterpolate"]("id", policyAddress_r63.policyNumber);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", policyAddress_r63.addressLine1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", policyAddress_r63.addressLine2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", policyAddress_r63.addressLine3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", policyAddress_r63.postCode);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", policyAddress_r63.postalCode);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", policyAddress_r63.state);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", policyAddress_r63.country);
  }
}
function EditPersonalDataComponent_form_116_Template(rf, ctx) {
  if (rf & 1) {
    const _r79 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "form", 41)(1, "div", 42)(2, "p")(3, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](4, "Foreign Account Tax Compliance Act (FATCA) and Common Reporting Standard (CRS) Declaration:");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](5, "ion-radio-group", 43)(6, "ion-row")(7, "ion-col", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](8, "ion-radio", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](9, "ion-col", 8)(10, "ion-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](11, "I declare that I am a U.S. citizen, a holder of a U.S. Permanent Resident Card, and/or a tax resident in any country other than Malaysia. I understand that I am required to submit the ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](12, "a", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function EditPersonalDataComponent_form_116_Template_a_click_12_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r79);
      const ctx_r78 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r78.downloadForm("https://www.sunlifemalaysia.com/getmedia/aef55903-a40e-4991-b18c-d17661ad211e/US-FATCA-AND-OECD-CRS-INDIVIDUAL-SELF-CERTIFICATION"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](13, "\"Self-Certification U.S. FATCA and OECD CRS\"");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](14, " form to the Company which may be downloaded from the Company website:");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](15, "a", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function EditPersonalDataComponent_form_116_Template_a_click_15_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r79);
      const ctx_r80 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r80.openBrowserSite());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](16, "www.sunlifemalaysia.com.");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](17, "ion-row")(18, "ion-col", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](19, "ion-radio", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](20, "ion-col", 8)(21, "ion-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](22, "I declare that I am not a U.S. citizen, a holder of a U.S. Permanent Resident Card, or a tax resident in any country other than Malaysia.");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](23, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](24, "ion-row")(25, "ion-col", 9)(26, "ion-checkbox", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("ionChange", function EditPersonalDataComponent_form_116_Template_ion_checkbox_ionChange_26_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r79);
      const ctx_r81 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r81.FATCAcheckboxChange($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](27, "ion-col", 8)(28, "ion-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](29, "I understand that I am also required to submit ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](30, "a", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function EditPersonalDataComponent_form_116_Template_a_click_30_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r79);
      const ctx_r82 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r82.downloadForm("https://www.sunlifemalaysia.com/getmedia/aef55903-a40e-4991-b18c-d17661ad211e/US-FATCA-AND-OECD-CRS-INDIVIDUAL-SELF-CERTIFICATION"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](31, "\"Self-Certification U.S. FATCA and OECD CRS\"");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](32, " form to the Company if: i) there is any change to the declaration above; or ii) I have provided any U.S. related information to the Company.");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](33, "ion-row")(34, "ion-col", 9)(35, "ion-checkbox", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("ionChange", function EditPersonalDataComponent_form_116_Template_ion_checkbox_ionChange_35_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r79);
      const ctx_r83 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r83.crsCheckboxChange($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](36, "ion-col", 8)(37, "ion-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](38, "I understand that the Company reserves the right to take the necessary actions which may include submitting the necessary reports, suspending this policy/certificate, withholding the necessary monies to be remitted, terminating this policy/certificate and returning the cash value (if any) less any indebtedness without interest if in the event that I have a U.S. Indicia and fail after request to provide such information, consent and/or assistance relating to me or my beneficiaries for the policy/certificate.");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()()();
  }
  if (rf & 2) {
    const ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("formGroup", ctx_r39.updatePersonalDetailForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](26);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("checked", ctx_r39.fatca);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("checked", ctx_r39.crs);
  }
}
function EditPersonalDataComponent_div_117_Template(rf, ctx) {
  if (rf & 1) {
    const _r85 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 48)(1, "ion-button", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function EditPersonalDataComponent_div_117_Template_ion_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r85);
      const ctx_r84 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r84.submitUpdateForm());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2, "Submit");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("disabled", ctx_r40.updatePersonalDetailForm.pristine || !ctx_r40.updatePersonalDetailForm.valid || ctx_r40.disableUpdatebtn);
  }
}
function EditPersonalDataComponent_div_118_Template(rf, ctx) {
  if (rf & 1) {
    const _r87 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 48)(1, "ion-button", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function EditPersonalDataComponent_div_118_Template_ion_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r87);
      const ctx_r86 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r86.makePageEditable());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2, "Update");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
  }
}
function EditPersonalDataComponent_div_119_Template(rf, ctx) {
  if (rf & 1) {
    const _r89 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 48)(1, "ion-button", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function EditPersonalDataComponent_div_119_Template_ion_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r89);
      const ctx_r88 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r88.backtoParentPage());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2, "Continue");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
  }
}
function EditPersonalDataComponent_div_120_Template(rf, ctx) {
  if (rf & 1) {
    const _r91 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 48)(1, "ion-button", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function EditPersonalDataComponent_div_120_Template_ion_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r91);
      const ctx_r90 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r90.saveContinue());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2, "Save & Continue");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r43 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("disabled", ctx_r43.disableUpdatebtn);
  }
}
class EditPersonalDataComponent {
  constructor(fb, modalController, utils, logger, policyListSrvc, router, UpdatePersonalService, alertCtrl, translate,
  // public events:Events,
  config) {
    this.fb = fb;
    this.modalController = modalController;
    this.utils = utils;
    this.logger = logger;
    this.policyListSrvc = policyListSrvc;
    this.router = router;
    this.UpdatePersonalService = UpdatePersonalService;
    this.alertCtrl = alertCtrl;
    this.translate = translate;
    this.config = config;
    this.isShowingLoader = false;
    this.canTryAgain = false;
    this.isSuccessful = false;
    this.Countries = [];
    this.StatesList = [];
    this.policyList = [];
    this.showMalaysianStates = true;
    this.verifyPhoneNumberPage = true;
    this.personalData = {};
    this.updateDataObj = {};
    this.disableUpdatebtn = true;
    this.phoneNumber = this.config.userInfo.maskedContactNumber;
    this.config.currentPage.pageName = "EditPersonalDetailPage";
    this.utils.analytics("EditPersonalDetailPage");
    this.updatePersonalDetailForm = fb.group({
      declaration: [0, [_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required]],
      fatca: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required]],
      crs: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required]]
    });
    this.selectOptions = {
      cssClass: "selectPopover-updateAddress"
    };
    this.updatePersonalDetailForm.controls.declaration.markAsDirty();
  }
  /**
  * This method is called when the page is loaded and here we will do Service calls.
  */
  ngOnInit() {
    console.log('personalData', this.personalData);
    this.getStaticData();
    console.log(this.preUpdatedData);
    if (this.preUpdatedData && Object.keys(this.preUpdatedData).length > 0) {
      this.updateDataObj = this.preUpdatedData;
      this.personalData = this.prePersonalData;
      setTimeout(() => {
        for (var key in this.preUpdatedData) {
          if (key == 'correspondenceAddress') {
            document.getElementById(this.selectedPolicyNumber).classList.add('edited');
          } else {
            document.getElementById(key).classList.add('edited');
          }
        }
      }, 100);
    } else {
      this.getPersonalDetails();
      // this.personalData={
      //   "name": null,
      // "identityNo": "24353546",
      // "dateOfBirth": {
      //   "value": "23-02-19",
      //   "isEditable": true
      // },
      // "race": {
      //   "value": "indian",
      //   "isEditable": true
      // },
      // "nationality": {
      //   "value": null,
      //   "isEditable": true
      // },
      // "occupation": {
      //   "value": "Engineer",
      //   "isEditable": true
      // },
      // "natureOfBusiness": {
      //   "value": "Coding",
      //   "isEditable": true
      // },
      // "contactNumbers": {
      //   "value": {
      //     "mobileNumber": "60178658123",
      //     "officeNumber": "60178658123",
      //     "homeNumber": "05738 245565",
      //     "otherNumber": "358595985"
      //   },
      //   "isEditable": true
      // },
      // "emailAddress": {
      //   "value": "deep@gmail.com",
      //   "isEditable": true
      // },
      // "permanentAddress": {
      //   "value": {
      //     "addressLine1": "RYUTYUTUTUTUTYU",
      //     "addressLine2": "wfefewffe",
      //     "addressLine3": "efefef",
      //     "postCode": "324255",
      //     "country": "MALAYSIA"
      //   },
      //   "isEditable": true
      // },
      // "correspondenceAddress": {
      //   "value": [
      //     {
      //       "policyNumber":"M7996789",
      //       "addressLine1": "RYUTYUTUTUTUTYU",
      //       "addressLine2": "wdwefefef",
      //       "addressLine3": "ececeec",
      //       "postCode": "2242425",
      //       "country": "MALAYSIA"
      //     }, {
      //       "policyNumber":"T5570763",
      //       "addressLine1": "RYUTYUTUTUTUTYU",
      //       "addressLine2": "edvv",
      //       "addressLine3": "dcdvvv",
      //       "postCode": "e22222e",
      //       "country": "MALAYSIA"
      //     }
      //   ],
      //   "isEditable": true
      // }
      // }
      if (this.selectedPolicyNumber) {
        this.getSelectedPolicyCAddress(this.selectedPolicyNumber);
      }
    }
  }
  ionViewDidLoad() {
    this.logger.log('ionViewDidLoad EditPersonalDetailPage');
  }
  downloadForm(Formlink) {
    this.utils.openLink(Formlink);
  }
  emailCompose() {
    this.utils.emailCompose(this.config.contact_us.emailId);
  }
  emailComposewithSubject(subject) {
    this.utils.emailComposewithSubject(this.config.contact_us.emailId, subject);
  }
  getStaticData() {
    //to handle adapter call failure
    let alertButtons = [{
      text: this.translate.instant('make_payment.okBtn'),
      handler: () => {
        // this.navCtrl.pop();
      }
    }];
    if (this.utils.isDeviceOnLine()) {
      this.UpdatePersonalService.getDropDownStaticData().then(response => {
        try {
          if (response['responseJSON'] && response['status'] == 200) {
            this.config.personalDataDropDown = response['responseJSON']['updatePersonalData'];
          } else {
            this.utils.dissmisProgressLoader();
            var msg = this.translate.instant('generic_msgs.server_err');
            this.utils.showAlert('', msg, false, alertButtons);
          }
        } catch (e) {
          this.utils.dissmisProgressLoader();
          var msgs = this.translate.instant('generic_msgs.server_err');
          this.utils.showAlert('', msgs, false, alertButtons);
        }
      }, error => {
        this.utils.dissmisProgressLoader();
        let errorMsg = this.utils.handleServiceException(error);
        this.utils.showAlert("", errorMsg, false, alertButtons);
      });
    } else {
      var msg = this.translate.instant('generic_msgs.network_err');
      this.utils.showAlert('', msg, false, alertButtons);
    }
  }
  getPersonalDetails() {
    this.utils.showProgressLoader();
    if (this.utils.isDeviceOnLine()) {
      this.UpdatePersonalService.getPersonalData().then(res => {
        try {
          this.utils.dissmisProgressLoader();
          if (res['responseJSON'] && res['responseJSON']['statusCode'] == http_status_codes__WEBPACK_IMPORTED_MODULE_9__.OK) {
            this.personalData = res['responseJSON'];
            if (this.selectedPolicyNumber) {
              this.getSelectedPolicyCAddress(this.selectedPolicyNumber);
            }
          } else {
            this.logger.error("get personal data  : " + JSON.stringify(res));
            this.errorMsg = this.translate.instant('generic_msgs.no_data');
          }
        } catch (e) {
          this.utils.dissmisProgressLoader();
          this.canTryAgain = true;
          this.logger.error("get personal data  catch eror : " + JSON.stringify(e));
          this.errorMsg = this.translate.instant('generic_msgs.server_err');
        }
      }, err => {
        this.utils.dissmisProgressLoader();
        this.errorMsg = this.utils.handleServiceException(err);
      });
    } else {
      this.isShowingLoader = false;
      this.canTryAgain = true;
      this.logger.error("getStates generic_msgs.network_err");
      this.errorMsg = this.translate.instant('generic_msgs.network_err');
    }
  }
  cancel() {
    //  this.navCtrl.push(ServicePage);
    this.router.navigate(['/service']);
  }
  getSelectedPolicyCAddress(selectedPolicyNumber) {
    this.personalData.correspondenceAddress.value.map(crAddresses => {
      if (crAddresses.policyNumber == selectedPolicyNumber) {
        this.personalData.correspondenceAddress.value = [];
        this.personalData.correspondenceAddress.value.push(crAddresses);
      }
    });
  }
  successDialog(title, message) {
    return (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__awaiter)(this, void 0, void 0, function* () {
      const modal = yield this.modalController.create({
        component: src_app_pages_success_popup_success_popup_page__WEBPACK_IMPORTED_MODULE_1__.SuccessPopupPage,
        cssClass: 'success-msg',
        backdropDismiss: false,
        componentProps: {
          redirectionMsg: message,
          title: title
        }
      });
      modal.onDidDismiss().then(data => {
        console.log(data);
        if (data.data.pageName == "servicePage") {
          // this.navCtrl.push(ServicePage);
          this.router.navigate(['/service']);
        } else if (data.data.pageName == "serviceHistoryPage") {
          // this.navCtrl.push(ServiceHistoryPage);
          this.router.navigate(['/service-history']);
        }
      });
      return yield modal.present();
    });
  }
  showDialog(title, message) {
    let buttons = [{
      text: 'Ok',
      handler: () => {
        // this.navCtrl.pop();
      }
    }];
    let alert = this.alertCtrl.create({
      header: title,
      message: message,
      buttons: buttons,
      backdropDismiss: false
    }).then(alert => alert.present());
  }
  // Update Details Popup
  updateDetailsModal(fieldName, popupTitle) {
    if (this.PreTACVarified) {
      this.openEditPopUp(fieldName, popupTitle);
    } else {
      if (this.personalData[fieldName]['isEditable']) {
        this.openEditPopUp(fieldName, popupTitle);
      } else {
        this.utils.showAlert("", "A request to update " + popupTitle + " is in progress. You can raise a new request after 7 days of a previous request.");
      }
    }
  }
  openEditPopUp(fieldName, popupTitle) {
    return (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__awaiter)(this, void 0, void 0, function* () {
      let propValue = "";
      if (fieldName == 'correspondenceAddress' && this.personalData['updatedCAddress']) {
        propValue = this.personalData['updatedCAddress'];
      } else {
        propValue = this.personalData[fieldName];
      }
      const modal = yield this.modalController.create({
        component: src_app_pages_update_details_popup_update_details_popup_page__WEBPACK_IMPORTED_MODULE_0__.UpdateDetailsPopupPage,
        backdropDismiss: false,
        cssClass: 'custom-modal',
        componentProps: {
          clickedfieldName: fieldName,
          fieldValue: propValue,
          popupTitle: popupTitle,
          selectedPolicyNumber: this.selectedPolicyNumber
        }
      });
      modal.onDidDismiss().then(dataDissmiss => {
        let data = dataDissmiss.data;
        console.log(data);
        if (data && data.fieldName) {
          this.disableUpdatebtn = false;
          let nameofProp = data.fieldName;
          this.personalData[nameofProp]['edited'] = true;
          if (data.fieldName == 'correspondenceAddress') {
            data[nameofProp]['selectPolicy'].forEach(alteredPolicy => {
              this.personalData[nameofProp].value.forEach(function (item, index, object) {
                if (item.policyNumber === alteredPolicy) {
                  object.splice(index, 1);
                  setTimeout(() => {
                    document.getElementById(alteredPolicy).classList.add('edited');
                  }, 100);
                }
              });
              let policyCrAddress = {};
              policyCrAddress['policyNumber'] = alteredPolicy, policyCrAddress['addressLine1'] = data[nameofProp]['addressLine1'], policyCrAddress['addressLine2'] = data[nameofProp]['addressLine2'], policyCrAddress['addressLine3'] = data[nameofProp]['addressLine3'], policyCrAddress['postCode'] = data[nameofProp]['postalCode'], policyCrAddress['country'] = data[nameofProp]['country']['Name'], policyCrAddress['state'] = this.config.personalDataDropDown['MalaysiaStates'][this.getStateIndex(this.config.personalDataDropDown['MalaysiaStates'], data[nameofProp]['state'], 'Code')].Name;
              policyCrAddress['selectPolicy'] = data[nameofProp]['selectPolicy'], policyCrAddress['countryCode'] = data[nameofProp]['country']['Code'];
              this.personalData[nameofProp].value.push(policyCrAddress);
              this.modifiedPolicy = alteredPolicy;
            });
            this.personalData['updatedCAddress'] = data[nameofProp];
            this.personalData['updatedCAddress']['edited'] = true;
            this.personalData['updatedCAddress'].countryFieldVal = data[nameofProp]['country'];
            this.updateDataObj[nameofProp] = {
              "policyNumber": data[nameofProp]['selectPolicy'],
              "addressLine1": data[nameofProp]['addressLine1'],
              "addressLine2": data[nameofProp]['addressLine2'],
              "addressLine3": data[nameofProp]['addressLine3'],
              "postCode": data[nameofProp]['postalCode'],
              "country": data[nameofProp]['country']['Code'],
              "state": data[nameofProp]['state']
            };
          } else {
            this.personalData[nameofProp].value = "-";
            setTimeout(() => {
              this.personalData[nameofProp].value = data[nameofProp];
              document.getElementById(nameofProp).classList.add('edited');
            }, 100);
          }
          if (data.fieldName == 'dateOfBirth' && data['dateOfBirthUpload']) {
            this.updateDataObj[nameofProp] = {
              "value": data[nameofProp],
              "attachments": data['dateOfBirthUpload']
            };
            this.personalData[nameofProp]['dateOfBirthUpload'] = data['dateOfBirthUpload'];
          }
          if (data.fieldName == 'race') {
            this.updateDataObj[nameofProp] = {
              "value": data['raceCode'],
              "text": data[nameofProp]
            };
            this.personalData[nameofProp]['raceCode'] = data['raceCode'];
            if (data.extraRaceText) {
              setTimeout(() => {
                this.personalData[nameofProp].value = data['extraRaceText'];
              }, 100);
              this.updateDataObj[nameofProp] = {
                "value": data['raceCode'],
                "text": data['extraRaceText']
              };
              this.personalData[nameofProp]['extraRaceText'] = data['extraRaceText'];
            }
          }
          if (data.fieldName == 'nationality' && data['nationalityUpload']) {
            this.updateDataObj[nameofProp] = {
              "value": data['nationalityCode'],
              "text": data[nameofProp],
              "attachments": data['nationalityUpload']
            };
            this.personalData[nameofProp]['nationalityCode'] = data['nationalityCode'];
            this.personalData[nameofProp]['nationalityUpload'] = data['nationalityUpload'];
            if (data.extraNationalityText) {
              setTimeout(() => {
                this.personalData[nameofProp].value = data['extraNationalityText'];
              }, 100);
              this.updateDataObj[nameofProp] = {
                "value": data['nationalityCode'],
                "text": data['extraNationalityText']
              };
              this.personalData[nameofProp]['extraNationalityText'] = data['extraNationalityText'];
            }
          }
          if (data.fieldName == 'occupation') {
            this.updateDataObj[nameofProp] = {
              "value": data['occupationCode'],
              "text": data[nameofProp]
            };
            this.personalData[nameofProp]['occupationCode'] = data['occupationCode'];
            if (data.extraOccupationText) {
              setTimeout(() => {
                this.personalData[nameofProp].value = data['extraOccupationText'];
              }, 100);
              this.updateDataObj[nameofProp] = {
                "value": data['occupationCode'],
                "text": data['extraOccupationText']
              };
              this.personalData[nameofProp]['extraOccupationText'] = data['extraOccupationText'];
            }
          }
          if (data.fieldName == 'natureOfBusiness') {
            this.updateDataObj[nameofProp] = {
              "value": data[nameofProp]
            };
          }
          if (data.fieldName == 'contactNumbers') {
            this.updateDataObj[nameofProp] = data[nameofProp];
          }
          if (data.fieldName == 'emailAddress') {
            this.updateDataObj[nameofProp] = {
              "value": data[nameofProp]
            };
          }
          if (data.fieldName == 'permanentAddress') {
            this.updateDataObj[nameofProp] = {
              "addressLine1": data[nameofProp]['addressLine1'],
              "addressLine2": data[nameofProp]['addressLine2'],
              "addressLine3": data[nameofProp]['addressLine3'],
              "postCode": data[nameofProp]['postalCode'],
              "country": data[nameofProp]['country']['Code'],
              "state": data[nameofProp]['state']
            };
            setTimeout(() => {
              this.personalData[nameofProp].value.countryFieldVal = data[nameofProp]['country'];
              this.personalData[nameofProp].value.country = data[nameofProp]['country']['Name'];
              this.personalData[nameofProp].value.state = this.config.personalDataDropDown['MalaysiaStates'][this.getStateIndex(this.config.personalDataDropDown['MalaysiaStates'], data[nameofProp]['state'], 'Code')].Name;
            }, 110);
          }
        }
      });
      return yield modal.present();
    });
  }
  // async openEditPopUp(fieldName, popupTitle){
  //     let propValue = "";
  //     if (fieldName == 'correspondenceAddress' && this.personalData['updatedCAddress']) {
  //       propValue = this.personalData['updatedCAddress']
  //     } else {
  //       propValue = this.personalData[fieldName]
  //     }
  //     const modal = await this.modalController.create(UpdateDetailsPopupPage,
  //       {
  //         clickedfieldName: fieldName,
  //         fieldValue: propValue,
  //         popupTitle: popupTitle,
  //         selectedPolicyNumber:this.selectedPolicyNumber
  //       },
  //       {
  //         enableBackdropDismiss: false
  //       }
  //     );
  //     modal.onDidDismiss((data => {
  //       if (data && data.fieldName) {
  //         this.disableUpdatebtn = false;
  //         let nameofProp = data.fieldName;
  //         this.personalData[nameofProp]['edited'] = true;
  //         if (data.fieldName == 'correspondenceAddress') {
  //         data[nameofProp]['selectPolicy'].forEach(alteredPolicy => {
  //           this.personalData[nameofProp].value.forEach(
  //             function(item, index, object) {
  //               if (item.policyNumber === alteredPolicy) {
  //                 object.splice(index, 1);
  //                 setTimeout(() => {
  //                 document.getElementById(alteredPolicy).classList.add('edited');
  //                 },100)
  //               }
  //             })
  //           let policyCrAddress={}
  //           policyCrAddress['policyNumber'] = alteredPolicy,
  //           policyCrAddress['addressLine1'] = data[nameofProp]['addressLine1'],
  //           policyCrAddress['addressLine2'] = data[nameofProp]['addressLine2'],
  //           policyCrAddress['addressLine3'] = data[nameofProp]['addressLine3'],
  //           policyCrAddress['postCode'] = data[nameofProp]['postalCode'],
  //           policyCrAddress['country'] = data[nameofProp]['country']['Name'],
  //           policyCrAddress['state'] = this.config.personalDataDropDown['MalaysiaStates'][this.getStateIndex(this.config.personalDataDropDown['MalaysiaStates'],data[nameofProp]['state'],'Code')].Name;
  //           policyCrAddress['selectPolicy'] = data[nameofProp]['selectPolicy'],
  //           policyCrAddress['countryCode'] = data[nameofProp]['country']['Code']
  //           this.personalData[nameofProp].value.push( policyCrAddress );
  //           this.modifiedPolicy = alteredPolicy;
  //           })
  //           this.personalData['updatedCAddress'] = data[nameofProp];
  //           this.personalData['updatedCAddress']['edited'] = true;
  //           this.personalData['updatedCAddress'].countryFieldVal = data[nameofProp]['country'];
  //           this.updateDataObj[nameofProp]={
  //             "policyNumber":data[nameofProp]['selectPolicy'],
  //             "addressLine1":data[nameofProp]['addressLine1'],
  //             "addressLine2": data[nameofProp]['addressLine2'],
  //             "addressLine3": data[nameofProp]['addressLine3'],
  //             "postCode":data[nameofProp]['postalCode'],
  //             "country":data[nameofProp]['country']['Code'],
  //             "state":data[nameofProp]['state']
  //           }
  //         } else {
  //           this.personalData[nameofProp].value = "-";
  //           setTimeout(() => {
  //             this.personalData[nameofProp].value = data[nameofProp];
  //             document.getElementById(nameofProp).classList.add('edited');
  //           }, 100);
  //         }
  //         if (data.fieldName == 'dateOfBirth' && data['dateOfBirthUpload']) {
  //           this.updateDataObj[nameofProp]={
  //             "value":data[nameofProp],
  //             "attachments":data['dateOfBirthUpload']
  //           }
  //           this.personalData[nameofProp]['dateOfBirthUpload'] = data['dateOfBirthUpload'];
  //         }
  //         if (data.fieldName == 'race') {
  //           this.updateDataObj[nameofProp]={
  //             "value":data['raceCode'],
  //             "text":data[nameofProp]
  //           }
  //           this.personalData[nameofProp]['raceCode'] = data['raceCode'];
  //           if (data.extraRaceText) {
  //             setTimeout(() => {
  //               this.personalData[nameofProp].value = data['extraRaceText'];
  //             }, 100);
  //             this.updateDataObj[nameofProp]={
  //               "value":data['raceCode'],
  //               "text":data['extraRaceText']
  //             }
  //             this.personalData[nameofProp]['extraRaceText'] = data['extraRaceText'];
  //           }
  //         }
  //         if (data.fieldName == 'nationality' && data['nationalityUpload']) {
  //           this.updateDataObj[nameofProp]={
  //             "value":data['nationalityCode'],
  //             "text":data[nameofProp],
  //             "attachments":data['nationalityUpload']
  //           }
  //           this.personalData[nameofProp]['nationalityCode'] = data['nationalityCode'];
  //           this.personalData[nameofProp]['nationalityUpload'] = data['nationalityUpload'];
  //           if (data.extraNationalityText) {
  //             setTimeout(() => {
  //               this.personalData[nameofProp].value = data['extraNationalityText'];
  //             }, 100);
  //             this.updateDataObj[nameofProp]={
  //               "value":data['nationalityCode'],
  //               "text":data['extraNationalityText']
  //             }
  //             this.personalData[nameofProp]['extraNationalityText'] = data['extraNationalityText'];
  //           }
  //         }
  //         if (data.fieldName == 'occupation') {
  //           this.updateDataObj[nameofProp]={
  //             "value":data['occupationCode'],
  //             "text":data[nameofProp]
  //           }
  //           this.personalData[nameofProp]['occupationCode'] = data['occupationCode'];
  //           if (data.extraOccupationText) {
  //             setTimeout(() => {
  //               this.personalData[nameofProp].value = data['extraOccupationText'];
  //             }, 100);
  //             this.updateDataObj[nameofProp]={
  //               "value":data['occupationCode'],
  //               "text":data['extraOccupationText']
  //             }
  //             this.personalData[nameofProp]['extraOccupationText'] = data['extraOccupationText'];
  //           }
  //         }
  //         if (data.fieldName == 'natureOfBusiness') {
  //           this.updateDataObj[nameofProp]={
  //             "value":data[nameofProp],
  //           }
  //         }
  //         if (data.fieldName == 'contactNumbers') {
  //           this.updateDataObj[nameofProp] =data[nameofProp]
  //         }
  //         if (data.fieldName == 'emailAddress') {
  //           this.updateDataObj[nameofProp]={
  //             "value":data[nameofProp],
  //           }
  //         }
  //         if (data.fieldName == 'permanentAddress') {
  //           this.updateDataObj[nameofProp]={
  //             "addressLine1":data[nameofProp]['addressLine1'],
  //             "addressLine2": data[nameofProp]['addressLine2'],
  //             "addressLine3": data[nameofProp]['addressLine3'],
  //             "postCode":data[nameofProp]['postalCode'],
  //             "country":data[nameofProp]['country']['Code'],
  //             "state":data[nameofProp]['state']
  //           }
  //           setTimeout(() => {
  //             this.personalData[nameofProp].value.countryFieldVal = data[nameofProp]['country'];
  //             this.personalData[nameofProp].value.country = data[nameofProp]['country']['Name'];
  //             this.personalData[nameofProp].value.state = this.config.personalDataDropDown['MalaysiaStates'][this.getStateIndex(this.config.personalDataDropDown['MalaysiaStates'],data[nameofProp]['state'],'Code')].Name;
  //           }, 110);
  //         }
  //       }
  //     })
  //     );
  //     return await modal.present();
  // }
  getStateIndex(sampleArray, value, propName) {
    const index = sampleArray.findIndex((element, index) => {
      if (element[propName] === value) {
        return true;
      }
    });
    return index;
  }
  makePageEditable() {
    console.log('this.isEditable', this.isEditable);
    this.isEditable = true;
  }
  openBrowserSite() {
    this.utils.launchExternalApp('', '', '', this.config.contact_us.sunlife_browser);
  }
  saveContinue() {
    console.log(this.updateDataObj);
    const RxjsData = [{
      'updateDateObj': this.updateDataObj,
      'personalData': this.personalData,
      'updatedorNot': true
    }];
    this.utils.publishSomeData({
      'user': 'personalDataUpdated',
      'data': RxjsData
    });
  }
  FATCAcheckboxChange(checked) {
    if (checked.detail.checked) {
      this.updatePersonalDetailForm.controls.fatca.setValue(true);
    } else {
      this.updatePersonalDetailForm.controls.fatca.setValue("");
    }
  }
  crsCheckboxChange(checked) {
    if (checked.detail.checked) {
      this.updatePersonalDetailForm.controls.crs.setValue(true);
    } else {
      this.updatePersonalDetailForm.controls.crs.setValue("");
    }
  }
  backtoParentPage() {
    const RxjsData = [{
      'updateDateObj': this.updateDataObj,
      'personalData': this.personalData,
      'updatedorNot': false
    }];
    this.utils.publishSomeData({
      'user': 'personalDataUpdated',
      'data': RxjsData
    });
  }
  submitUpdateForm() {
    if (this.updateDataObj) {
      console.log(this.updateDataObj);
      this.updateDataObj['fatca'] = this.updatePersonalDetailForm.controls.fatca.value;
      this.updateDataObj['crs'] = this.updatePersonalDetailForm.controls.crs.value;
      this.updateDataObj['declaration'] = this.updatePersonalDetailForm.controls.declaration.value;
      this.utils.showProgressLoader();
      if (this.utils.isDeviceOnLine()) {
        this.canTryAgain = false;
        this.UpdatePersonalService.updateAddress(this.updateDataObj).then(res => {
          try {
            this.utils.dissmisProgressLoader();
            if (res['responseJSON']) {
              if (res['responseJSON']['statusCode'] == http_status_codes__WEBPACK_IMPORTED_MODULE_9__.ACCEPTED || res['responseJSON']['statusCode'] == http_status_codes__WEBPACK_IMPORTED_MODULE_9__.OK) {
                let successMsg = res['responseJSON']['userMessage'] || this.translate.instant('generic_msgs.server_err');
                this.successDialog("Success", successMsg);
              } else {
                let errorMsg = res['responseJSON']['Message'] || res['responseJSON']['userMessage'] || this.translate.instant('generic_msgs.server_err');
                this.showDialog("", errorMsg);
              }
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
    }
  }
}
EditPersonalDataComponent.ɵfac = function EditPersonalDataComponent_Factory(t) {
  return new (t || EditPersonalDataComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_11__.ModalController), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_providers_utils_utils_service__WEBPACK_IMPORTED_MODULE_2__.UtilService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_providers_logger_service_logger_service__WEBPACK_IMPORTED_MODULE_3__.LoggerServiceProvider), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_app_pages_plan_listing_getPolicyListService__WEBPACK_IMPORTED_MODULE_4__.GetPolicyListService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_12__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_app_pages_update_personal_details_updatePersonalDetailservice__WEBPACK_IMPORTED_MODULE_5__.UpdatePersonalService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_11__.AlertController), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__.TranslateService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_providers_utils_config__WEBPACK_IMPORTED_MODULE_6__.ConfigProvider));
};
EditPersonalDataComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({
  type: EditPersonalDataComponent,
  selectors: [["app-edit-personal-data"]],
  inputs: {
    PreTACVarified: "PreTACVarified",
    comingFromCDD: "comingFromCDD",
    selectedPolicyNumber: "selectedPolicyNumber",
    isEditable: "isEditable",
    preUpdatedData: "preUpdatedData",
    prePersonalData: "prePersonalData"
  },
  decls: 121,
  vars: 46,
  consts: [[1, "white_container_border_radius", "padding_15"], [1, "update-name-identity"], [4, "ngIf"], [1, "form-field"], [1, "label"], [1, "editable-field"], ["href", "mailto:policy.admin@sunlifemalaysia.com?subject=Request for Change of Policy Details", 4, "ngIf"], [1, "update-other-details"], ["size", "10"], ["size", "2"], ["class", "div-margin", 4, "ngIf"], ["class", "editable-field", "id", "dateOfBirth", 4, "ngIf"], ["class", "editable-field", "id", "race", 4, "ngIf"], ["class", "editable-field", "id", "nationality", 4, "ngIf"], ["class", "editable-field", "id", "occupation", 4, "ngIf"], ["class", "editable-field", "id", "natureOfBusiness", 4, "ngIf"], ["id", "contactNumbers", 1, "form-field"], [1, "editable-field", "sublabel"], ["class", "editable-field", "id", "emailAddress", 4, "ngIf"], ["id", "permanentAddress"], ["class", "editable-field", 4, "ngIf"], [1, "address-field-container"], ["class", "address-field", 4, "ngFor", "ngForOf"], [3, "formGroup", 4, "ngIf"], ["class", "submit-btn", 4, "ngIf"], ["href", "tel:1300-88-5055"], ["href", "mailto:policy.admin@sunlifemalaysia.com?subject=Request for Change of Policy Details"], ["class", "request-btn", 4, "ngIf"], [1, "request-btn"], [1, "btn_center"], [1, "div-margin"], ["aria-hidden", "true", 1, "fa", "fa-edit", 3, "click"], ["id", "dateOfBirth", 1, "editable-field"], ["id", "race", 1, "editable-field"], ["id", "nationality", 1, "editable-field"], ["id", "occupation", 1, "editable-field"], ["id", "natureOfBusiness", 1, "editable-field"], ["id", "emailAddress", 1, "editable-field"], [1, "address-field"], [3, "id"], ["class", "editable-field ", 4, "ngIf"], [3, "formGroup"], [1, "fatca-crs-container"], ["formControlName", "declaration"], ["item-left", "", "value", "1", "mode", "md"], [3, "click"], ["item-left", "", "value", "0", "mode", "md"], ["mode", "md", 3, "checked", "ionChange"], [1, "submit-btn"], [1, "btn_center", 3, "disabled", "click"], [1, "btn_center1", 3, "click"], [1, "btn_center", 3, "click"]],
  template: function EditPersonalDataComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 0)(1, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](2, EditPersonalDataComponent_p_2_Template, 9, 0, "p", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "div", 3)(4, "div", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](5, "Name:");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](6, "div", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](8, "div", 3)(9, "div", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](10, "Identity Number:");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](11, "div", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](12);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](13, EditPersonalDataComponent_a_13_Template, 2, 1, "a", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](14, "div", 7)(15, "div", 3)(16, "ion-row")(17, "ion-col", 8)(18, "div", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](19, "Date of Birth:");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](20, "ion-col", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](21, EditPersonalDataComponent_div_21_Template, 2, 0, "div", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](22, EditPersonalDataComponent_div_22_Template, 2, 1, "div", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](23, EditPersonalDataComponent_div_23_Template, 2, 0, "div", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](24, "div", 3)(25, "ion-row")(26, "ion-col", 8)(27, "div", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](28, "Race:");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](29, "ion-col", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](30, EditPersonalDataComponent_div_30_Template, 2, 0, "div", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](31, EditPersonalDataComponent_div_31_Template, 2, 1, "div", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](32, EditPersonalDataComponent_div_32_Template, 2, 0, "div", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](33, "div", 3)(34, "ion-row")(35, "ion-col", 8)(36, "div", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](37, "Nationality:");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](38, "ion-col", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](39, EditPersonalDataComponent_div_39_Template, 2, 0, "div", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](40, EditPersonalDataComponent_div_40_Template, 2, 1, "div", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](41, EditPersonalDataComponent_div_41_Template, 2, 0, "div", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](42, "div", 3)(43, "ion-row")(44, "ion-col", 8)(45, "div", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](46, "Occupation:");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](47, "ion-col", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](48, EditPersonalDataComponent_div_48_Template, 2, 0, "div", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](49, EditPersonalDataComponent_div_49_Template, 2, 1, "div", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](50, EditPersonalDataComponent_div_50_Template, 2, 0, "div", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](51, "div", 3)(52, "ion-row")(53, "ion-col", 8)(54, "div", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](55, "Nature of Business:");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](56, "ion-col", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](57, EditPersonalDataComponent_div_57_Template, 2, 0, "div", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](58, EditPersonalDataComponent_div_58_Template, 2, 1, "div", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](59, EditPersonalDataComponent_div_59_Template, 2, 0, "div", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](60, "div", 16)(61, "ion-row")(62, "ion-col", 8)(63, "div", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](64, "Contact Number:");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](65, "ion-col", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](66, EditPersonalDataComponent_div_66_Template, 2, 0, "div", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](67, "div", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](68, "Mobile Number: ");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](69, EditPersonalDataComponent_span_69_Template, 2, 1, "span", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](70, EditPersonalDataComponent_span_70_Template, 2, 0, "span", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](71, "div", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](72, "Office Number: ");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](73, EditPersonalDataComponent_span_73_Template, 2, 1, "span", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](74, EditPersonalDataComponent_span_74_Template, 2, 0, "span", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](75, "div", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](76, "Home Number: ");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](77, EditPersonalDataComponent_span_77_Template, 2, 1, "span", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](78, EditPersonalDataComponent_span_78_Template, 2, 0, "span", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](79, "div", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](80, "Other Number: ");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](81, EditPersonalDataComponent_span_81_Template, 2, 1, "span", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](82, EditPersonalDataComponent_span_82_Template, 2, 0, "span", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](83, "div", 3)(84, "ion-row")(85, "ion-col", 8)(86, "div", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](87, "Email Address:");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](88, "ion-col", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](89, EditPersonalDataComponent_div_89_Template, 2, 0, "div", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](90, EditPersonalDataComponent_div_90_Template, 2, 1, "div", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](91, EditPersonalDataComponent_div_91_Template, 2, 0, "div", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](92, "div", 3)(93, "ion-row")(94, "ion-col", 8)(95, "div", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](96, "Permanent Address:");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](97, "ion-col", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](98, EditPersonalDataComponent_div_98_Template, 2, 0, "div", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](99, "div", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](100, EditPersonalDataComponent_div_100_Template, 2, 1, "div", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](101, EditPersonalDataComponent_div_101_Template, 2, 1, "div", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](102, EditPersonalDataComponent_div_102_Template, 2, 1, "div", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](103, EditPersonalDataComponent_div_103_Template, 2, 1, "div", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](104, EditPersonalDataComponent_div_104_Template, 2, 1, "div", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](105, EditPersonalDataComponent_div_105_Template, 2, 1, "div", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](106, EditPersonalDataComponent_div_106_Template, 2, 1, "div", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](107, "div", 3)(108, "ion-row")(109, "ion-col", 8)(110, "div", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](111, "Correspondence Address:");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](112, "ion-col", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](113, EditPersonalDataComponent_div_113_Template, 2, 0, "div", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](114, "ul", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](115, EditPersonalDataComponent_li_115_Template, 11, 9, "li", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](116, EditPersonalDataComponent_form_116_Template, 39, 3, "form", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](117, EditPersonalDataComponent_div_117_Template, 3, 1, "div", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](118, EditPersonalDataComponent_div_118_Template, 3, 0, "div", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](119, EditPersonalDataComponent_div_119_Template, 3, 0, "div", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](120, EditPersonalDataComponent_div_120_Template, 3, 1, "div", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.isEditable);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx.personalData.name);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx.personalData.identityNo);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.isEditable);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](8);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.isEditable);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.personalData.dateOfBirth.value);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", !ctx.personalData.dateOfBirth.value);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.isEditable);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.personalData.race.value);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", !ctx.personalData.race.value);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.isEditable);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.personalData.nationality.value);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", !ctx.personalData.nationality.value);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.isEditable);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.personalData.occupation.value);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", !ctx.personalData.occupation.value);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.isEditable);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.personalData.natureOfBusiness.value);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", !ctx.personalData.natureOfBusiness.value);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.isEditable);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.personalData.contactNumbers.value.mobileNumber);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", !ctx.personalData.contactNumbers.value.mobileNumber);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.personalData.contactNumbers.value.officeNumber);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", !ctx.personalData.contactNumbers.value.officeNumber);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.personalData.contactNumbers.value.homeNumber);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", !ctx.personalData.contactNumbers.value.homeNumber);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.personalData.contactNumbers.value.otherNumber);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", !ctx.personalData.contactNumbers.value.otherNumber);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.isEditable);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.personalData.emailAddress.value);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", !ctx.personalData.emailAddress.value);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.isEditable);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.personalData.permanentAddress.value.addressLine1);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.personalData.permanentAddress.value.addressLine2);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.personalData.permanentAddress.value.addressLine3);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.personalData.permanentAddress.value.postCode);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.personalData.permanentAddress.value.postalCode);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.personalData.permanentAddress.value.state);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.personalData.permanentAddress.value.country);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.isEditable);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx.personalData.correspondenceAddress.value);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.comingFromCDD);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.comingFromCDD);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", !ctx.comingFromCDD && !ctx.isEditable);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", !ctx.comingFromCDD && !ctx.isEditable);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", !ctx.comingFromCDD && ctx.isEditable);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_14__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_14__.NgIf, _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.IonButton, _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.IonCheckbox, _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.IonCol, _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.IonLabel, _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.IonRadio, _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.IonRadioGroup, _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.IonRow, _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.BooleanValueAccessor, _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.RadioValueAccessor, _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.SelectValueAccessor],
  styles: [".label[_ngcontent-%COMP%] {\n  color: #002d3d !important;\n  font-size: 1.1rem !important;\n  font-family: agenda-semibold;\n  white-space: normal;\n  margin-top: 5%;\n  margin-bottom: 5%;\n}\n\n.editable-field[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  margin-left: 1%;\n}\n\n.edited[_ngcontent-%COMP%] {\n  font-weight: bold;\n}\n.edited[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-weight: bold;\n}\n.edited[_ngcontent-%COMP%]   .editable-field[_ngcontent-%COMP%] {\n  font-weight: bold;\n}\n\n.edit-icon[_ngcontent-%COMP%] {\n  display: inline-flex;\n  justify-content: space-around;\n  width: 26px;\n}\n\n.white_container_border_radius[_ngcontent-%COMP%] {\n  background-color: rgba(255, 255, 255, 0.7) !important;\n  border-radius: 15px !important;\n  margin: 15px;\n  padding: 15px;\n}\n\n.padding_15[_ngcontent-%COMP%] {\n  padding: 15px !important;\n}\n\n.btn_center[_ngcontent-%COMP%] {\n  text-transform: capitalize;\n  --background: #002d3d !important;\n  color: white;\n  margin-top: 15px;\n  --border-radius: 10px !important;\n  min-width: 200px;\n  min-height: 45px;\n  width: 100% !important;\n  font-family: Agenda-Regular !important;\n}\n\n.btn_center1[_ngcontent-%COMP%] {\n  text-transform: capitalize;\n  --background: #002d3d !important;\n  color: white;\n  margin-top: 15px;\n  --border-radius: 10px !important;\n  min-width: 200px;\n  min-height: 45px;\n  width: 100% !important;\n  font-family: Agenda-Regular !important;\n  margin-bottom: -5px;\n}\n\n.submit-btn[_ngcontent-%COMP%] {\n  padding: 2%;\n}\n\n.div-margin[_ngcontent-%COMP%] {\n  margin-top: 30%;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50L2VkaXQtcGVyc29uYWwtZGF0YS9lZGl0LXBlcnNvbmFsLWRhdGEuY29tcG9uZW50LnNjc3MiLCJ3ZWJwYWNrOi8vLi8uLi8uLi8uLi9BbGwlMjBQcm9qZWN0cy9NYWxheXNpYV9DbGllbnRBcHBfUmV2YW1wL1N1bkFjY2Vzc19Jb25pYzZfUmV2YW1wL3NyYy9hcHAvY29tcG9uZW50L2VkaXQtcGVyc29uYWwtZGF0YS9lZGl0LXBlcnNvbmFsLWRhdGEuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0k7RUFDSSx5QkFBQTtFQUNBLDRCQUFBO0VBQ0EsNEJBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtBQ0FSOztBREVJO0VBQ0ksZUFBQTtFQUNBLGVBQUE7QUNDUjs7QURDSTtFQUNJLGlCQUFBO0FDRVI7QUREUTtFQUNJLGlCQUFBO0FDR1o7QUREUTtFQUNJLGlCQUFBO0FDR1o7O0FEQUk7RUFDSSxvQkFBQTtFQUNBLDZCQUFBO0VBQ0EsV0FBQTtBQ0dSOztBREFBO0VBQ0kscURBQUE7RUFDQSw4QkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0FDR0o7O0FEREE7RUFDSSx3QkFBQTtBQ0lKOztBREZBO0VBQ0ksMEJBQUE7RUFDQSxnQ0FBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGdDQUFBO0VBQ0EsZ0JBQUE7RUFHQSxnQkFBQTtFQUNBLHNCQUFBO0VBQ0Esc0NBQUE7QUNHSjs7QURERTtFQUNFLDBCQUFBO0VBQ0EsZ0NBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQ0FBQTtFQUNBLGdCQUFBO0VBR0EsZ0JBQUE7RUFDQSxzQkFBQTtFQUNBLHNDQUFBO0VBQ0EsbUJBQUE7QUNFSjs7QURBRTtFQUNHLFdBQUE7QUNHTDs7QURBQztFQUNHLGVBQUE7QUNHSiIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4gICAgLmxhYmVsIHtcclxuICAgICAgICBjb2xvcjogIzAwMmQzZCAhaW1wb3J0YW50O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMS4xcmVtICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6IGFnZW5kYS1zZW1pYm9sZDtcclxuICAgICAgICB3aGl0ZS1zcGFjZTogbm9ybWFsO1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDUlO1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDUlO1xyXG4gICAgfVxyXG4gICAgLmVkaXRhYmxlLWZpZWxkIHtcclxuICAgICAgICBmb250LXNpemU6IDFyZW07XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDElO1xyXG4gICAgfVxyXG4gICAgLmVkaXRlZCB7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgc3BhbiB7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgIH1cclxuICAgICAgICAuZWRpdGFibGUtZmllbGQge1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAuZWRpdC1pY29uIHtcclxuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxuICAgICAgICB3aWR0aDogMjZweDtcclxuICAgIH1cclxuICAgIFxyXG4ud2hpdGVfY29udGFpbmVyX2JvcmRlcl9yYWRpdXMge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjcpICFpbXBvcnRhbnQ7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4ICFpbXBvcnRhbnQ7XHJcbiAgICBtYXJnaW46IDE1cHg7XHJcbiAgICBwYWRkaW5nOiAxNXB4O1xyXG59XHJcbi5wYWRkaW5nXzE1IHtcclxuICAgIHBhZGRpbmc6IDE1cHggIWltcG9ydGFudDtcclxufVxyXG4uYnRuX2NlbnRlciB7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcclxuICAgIC0tYmFja2dyb3VuZDogIzAwMmQzZCAhaW1wb3J0YW50O1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgbWFyZ2luLXRvcDogMTVweDtcclxuICAgIC0tYm9yZGVyLXJhZGl1czogMTBweCAhaW1wb3J0YW50O1xyXG4gICAgbWluLXdpZHRoOiAyMDBweDtcclxuICAgIC8vIG1hcmdpbi1sZWZ0OiAtMzFweDtcclxuICAgIC8vZm9udC1zaXplOiAxLjdyZW07XHJcbiAgICBtaW4taGVpZ2h0OiA0NXB4O1xyXG4gICAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcclxuICAgIGZvbnQtZmFtaWx5OiBBZ2VuZGEtUmVndWxhciAhaW1wb3J0YW50O1xyXG4gIH1cclxuICAuYnRuX2NlbnRlcjEge1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XHJcbiAgICAtLWJhY2tncm91bmQ6ICMwMDJkM2QgIWltcG9ydGFudDtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIG1hcmdpbi10b3A6IDE1cHg7XHJcbiAgICAtLWJvcmRlci1yYWRpdXM6IDEwcHggIWltcG9ydGFudDtcclxuICAgIG1pbi13aWR0aDogMjAwcHg7XHJcbiAgICAvLyBtYXJnaW4tbGVmdDogLTMxcHg7XHJcbiAgICAvL2ZvbnQtc2l6ZTogMS43cmVtO1xyXG4gICAgbWluLWhlaWdodDogNDVweDtcclxuICAgIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XHJcbiAgICBmb250LWZhbWlseTogQWdlbmRhLVJlZ3VsYXIgIWltcG9ydGFudDtcclxuICAgIG1hcmdpbi1ib3R0b206IC01cHg7XHJcbiAgfVxyXG4gIC5zdWJtaXQtYnRue1xyXG4gICAgIHBhZGRpbmc6IDIlO1xyXG4gIH1cclxuXHJcbiAuZGl2LW1hcmdpbntcclxuICAgIG1hcmdpbi10b3A6IDMwJTtcclxuIH1cclxuXHJcbiIsIi5sYWJlbCB7XG4gIGNvbG9yOiAjMDAyZDNkICFpbXBvcnRhbnQ7XG4gIGZvbnQtc2l6ZTogMS4xcmVtICFpbXBvcnRhbnQ7XG4gIGZvbnQtZmFtaWx5OiBhZ2VuZGEtc2VtaWJvbGQ7XG4gIHdoaXRlLXNwYWNlOiBub3JtYWw7XG4gIG1hcmdpbi10b3A6IDUlO1xuICBtYXJnaW4tYm90dG9tOiA1JTtcbn1cblxuLmVkaXRhYmxlLWZpZWxkIHtcbiAgZm9udC1zaXplOiAxcmVtO1xuICBtYXJnaW4tbGVmdDogMSU7XG59XG5cbi5lZGl0ZWQge1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cbi5lZGl0ZWQgc3BhbiB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuLmVkaXRlZCAuZWRpdGFibGUtZmllbGQge1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLmVkaXQtaWNvbiB7XG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgd2lkdGg6IDI2cHg7XG59XG5cbi53aGl0ZV9jb250YWluZXJfYm9yZGVyX3JhZGl1cyB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC43KSAhaW1wb3J0YW50O1xuICBib3JkZXItcmFkaXVzOiAxNXB4ICFpbXBvcnRhbnQ7XG4gIG1hcmdpbjogMTVweDtcbiAgcGFkZGluZzogMTVweDtcbn1cblxuLnBhZGRpbmdfMTUge1xuICBwYWRkaW5nOiAxNXB4ICFpbXBvcnRhbnQ7XG59XG5cbi5idG5fY2VudGVyIHtcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG4gIC0tYmFja2dyb3VuZDogIzAwMmQzZCAhaW1wb3J0YW50O1xuICBjb2xvcjogd2hpdGU7XG4gIG1hcmdpbi10b3A6IDE1cHg7XG4gIC0tYm9yZGVyLXJhZGl1czogMTBweCAhaW1wb3J0YW50O1xuICBtaW4td2lkdGg6IDIwMHB4O1xuICBtaW4taGVpZ2h0OiA0NXB4O1xuICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xuICBmb250LWZhbWlseTogQWdlbmRhLVJlZ3VsYXIgIWltcG9ydGFudDtcbn1cblxuLmJ0bl9jZW50ZXIxIHtcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG4gIC0tYmFja2dyb3VuZDogIzAwMmQzZCAhaW1wb3J0YW50O1xuICBjb2xvcjogd2hpdGU7XG4gIG1hcmdpbi10b3A6IDE1cHg7XG4gIC0tYm9yZGVyLXJhZGl1czogMTBweCAhaW1wb3J0YW50O1xuICBtaW4td2lkdGg6IDIwMHB4O1xuICBtaW4taGVpZ2h0OiA0NXB4O1xuICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xuICBmb250LWZhbWlseTogQWdlbmRhLVJlZ3VsYXIgIWltcG9ydGFudDtcbiAgbWFyZ2luLWJvdHRvbTogLTVweDtcbn1cblxuLnN1Ym1pdC1idG4ge1xuICBwYWRkaW5nOiAyJTtcbn1cblxuLmRpdi1tYXJnaW4ge1xuICBtYXJnaW4tdG9wOiAzMCU7XG59Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 35577:
/*!********************************************************************!*\
  !*** ./src/app/pages/annual-statements/annualStatementsService.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GetAnnualStatementsService": () => (/* binding */ GetAnnualStatementsService)
/* harmony export */ });
/* harmony import */ var src_providers_utils_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/providers/utils/config */ 43485);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var src_providers_logger_service_logger_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/providers/logger-service/logger-service */ 9999);
/* harmony import */ var src_providers_utils_utils_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/providers/utils/utils.service */ 30423);




//declare var self;
/*
  Generated class for the GetAnnualStatementsService.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
class GetAnnualStatementsService {
  constructor(logger, utils) {
    this.logger = logger;
    this.utils = utils;
    this.logger.log("GetAnnualStatementsService");
  }
  /** Get PremiumStatements **/
  getPremiumStatements() {
    this.logger.trace("GetAnnualStatementsService--getPremiumStatements--start ");
    let promise = new Promise((resolve, reject) => {
      try {
        var resourceRequest = new WLResourceRequest(src_providers_utils_config__WEBPACK_IMPORTED_MODULE_0__.ConfigProvider.getPremiumStatementsAdapterPath, WLResourceRequest.GET);
        resourceRequest.setQueryParameter('params', [this.utils.getUserIdentity(), this.utils.getToken()]);
        resourceRequest.send().then(response => {
          resolve(response);
        }, error => {
          this.logger.error("GetAnnualStatementsService-- Adapter calling error:" + JSON.stringify(error));
          reject(error);
        });
      } catch (e) {
        this.logger.log("GetAnnualStatementsService caiing catch error:" + JSON.stringify(e));
        reject(e);
      }
    });
    this.logger.trace("GetAnnualStatementsService--getPremiumStatements--end");
    return promise;
  }
  /** Get PremiumStatements **/
  getUnitStatements() {
    this.logger.trace("GetAnnualStatementsService--getUnitStatements--start ");
    let promise = new Promise((resolve, reject) => {
      try {
        var resourceRequest = new WLResourceRequest(src_providers_utils_config__WEBPACK_IMPORTED_MODULE_0__.ConfigProvider.getUnitStatementsAdapterPath, WLResourceRequest.GET);
        resourceRequest.setQueryParameter('params', [this.utils.getUserIdentity(), this.utils.getToken()]);
        resourceRequest.send().then(response => {
          resolve(response);
        }, error => {
          this.logger.error("GetAnnualStatementsService-- Adapter calling error:" + JSON.stringify(error));
          reject(error);
        });
      } catch (e) {
        this.logger.log("GetAnnualStatementsService caiing catch error:" + JSON.stringify(e));
        reject(e);
      }
    });
    this.logger.trace("GetAnnualStatementsService--getUnitStatements--end");
    return promise;
  }
  /** Get UAStatements **/
  getPAStatements() {
    this.logger.trace("GetAnnualStatementsService--getPAStatements--start ");
    let promise = new Promise((resolve, reject) => {
      try {
        var resourceRequest = new WLResourceRequest(src_providers_utils_config__WEBPACK_IMPORTED_MODULE_0__.ConfigProvider.getPAStatementsAdapterPath, WLResourceRequest.GET);
        resourceRequest.setQueryParameter('params', [this.utils.getUserIdentity(), this.utils.getToken()]);
        resourceRequest.send().then(response => {
          resolve(response);
        }, error => {
          this.logger.error("GetAnnualStatementsService-- Adapter calling error:" + JSON.stringify(error));
          reject(error);
        });
      } catch (e) {
        this.logger.log("GetAnnualStatementsService caiing catch error:" + JSON.stringify(e));
        reject(e);
      }
    });
    this.logger.trace("GetAnnualStatementsService--getPAStatements--end");
    return promise;
  }
  /** Get UAStatements **/
  getUAStatements() {
    this.logger.trace("GetAnnualStatementsService--getUAStatements--start ");
    let promise = new Promise((resolve, reject) => {
      try {
        var resourceRequest = new WLResourceRequest(src_providers_utils_config__WEBPACK_IMPORTED_MODULE_0__.ConfigProvider.getUAStatementsAdapterPath, WLResourceRequest.GET);
        resourceRequest.setQueryParameter('params', [this.utils.getUserIdentity(), this.utils.getToken()]);
        resourceRequest.send().then(response => {
          resolve(response);
        }, error => {
          this.logger.error("GetAnnualStatementsService-- Adapter calling error:" + JSON.stringify(error));
          reject(error);
        });
      } catch (e) {
        this.logger.log("GetAnnualStatementsService caiing catch error:" + JSON.stringify(e));
        reject(e);
      }
    });
    this.logger.trace("GetAnnualStatementsService--getUAStatements--end");
    return promise;
  }
  /** Get AppfStatements **/
  getAppfStatements() {
    this.logger.trace("GetAnnualStatementsService--getAppfStatements--start ");
    let promise = new Promise((resolve, reject) => {
      try {
        var resourceRequest = new WLResourceRequest(src_providers_utils_config__WEBPACK_IMPORTED_MODULE_0__.ConfigProvider.getAppfStatementsAdapterPath, WLResourceRequest.GET);
        resourceRequest.setQueryParameter('params', [this.utils.getUserIdentity(), this.utils.getToken()]);
        resourceRequest.send().then(response => {
          resolve(response);
        }, error => {
          this.logger.error("GetAnnualStatementsService-- getAppfStatements Adapter calling error:" + JSON.stringify(error));
          reject(error);
        });
      } catch (e) {
        this.logger.log("GetAnnualStatementsService getAppfStatements caiing catch error:" + JSON.stringify(e));
        reject(e);
      }
    });
    this.logger.trace("GetAnnualStatementsService--getAppfStatements--end");
    return promise;
  }
  /** GetUniversalLifeStatement **/
  getUniversalLifeStatement() {
    this.logger.trace("GetAnnualStatementsService--GetUniversalLifeStatement--start ");
    let promise = new Promise((resolve, reject) => {
      try {
        var resourceRequest = new WLResourceRequest(src_providers_utils_config__WEBPACK_IMPORTED_MODULE_0__.ConfigProvider.GetUniversalLifeStatementAdapterPath, WLResourceRequest.GET);
        resourceRequest.setQueryParameter('params', [this.utils.getUserIdentity(), this.utils.getToken()]);
        resourceRequest.send().then(response => {
          resolve(response);
        }, error => {
          this.logger.error("GetAnnualStatementsService-- GetUniversalLifeStatement Adapter calling error:" + JSON.stringify(error));
          reject(error);
        });
      } catch (e) {
        this.logger.log("GetAnnualStatementsService GetUniversalLifeStatement caiing catch error:" + JSON.stringify(e));
        reject(e);
      }
    });
    this.logger.trace("GetAnnualStatementsService--GetUniversalLifeStatement--end");
    return promise;
  }
  /** Get BonusStatements **/
  getBonusStatements() {
    this.logger.trace("GetAnnualStatementsService--GetBonusStatements--start ");
    let promise = new Promise((resolve, reject) => {
      try {
        var resourceRequest = new WLResourceRequest(src_providers_utils_config__WEBPACK_IMPORTED_MODULE_0__.ConfigProvider.GetBonusStatementsAdapterPath, WLResourceRequest.GET);
        resourceRequest.setQueryParameter('params', [this.utils.getUserIdentity(), this.utils.getToken()]);
        resourceRequest.send().then(response => {
          resolve(response);
        }, error => {
          this.logger.error("GetAnnualStatementsService-- GetBonusStatements Adapter calling error:" + JSON.stringify(error));
          reject(error);
        });
      } catch (e) {
        this.logger.log("GetAnnualStatementsService GetBonusStatements caiing catch error:" + JSON.stringify(e));
        reject(e);
      }
    });
    this.logger.trace("GetAnnualStatementsService--GetBonusStatements--end");
    return promise;
  }
  /** GetMAFStatement **/
  getMAFStatement() {
    this.logger.trace("GetAnnualStatementsService--GetMAFStatement--start ");
    let promise = new Promise((resolve, reject) => {
      try {
        var resourceRequest = new WLResourceRequest(src_providers_utils_config__WEBPACK_IMPORTED_MODULE_0__.ConfigProvider.GetMAFStatementsAdapterPath, WLResourceRequest.GET);
        resourceRequest.setQueryParameter('params', [this.utils.getUserIdentity(), this.utils.getToken()]);
        resourceRequest.send().then(response => {
          resolve(response);
        }, error => {
          this.logger.error("GetAnnualStatementsService-- GetMAFStatement Adapter calling error:" + JSON.stringify(error));
          reject(error);
        });
      } catch (e) {
        this.logger.log("GetAnnualStatementsService GetMAFStatement caiing catch error:" + JSON.stringify(e));
        reject(e);
      }
    });
    this.logger.trace("GetAnnualStatementsService--GetMAFStatement--end");
    return promise;
  }
  /** GetEducationBoosterFundStatementAdapterPath **/
  getEducationBoosterFundStatement() {
    this.logger.trace("GetAnnualStatementsService--GetEducationBoosterFundStatement--start ");
    let promise = new Promise((resolve, reject) => {
      try {
        var resourceRequest = new WLResourceRequest(src_providers_utils_config__WEBPACK_IMPORTED_MODULE_0__.ConfigProvider.GetEducationBoosterFundStatementAdapterPath, WLResourceRequest.GET);
        resourceRequest.setQueryParameter('params', [this.utils.getUserIdentity(), this.utils.getToken()]);
        resourceRequest.send().then(response => {
          resolve(response);
        }, error => {
          this.logger.error("GetAnnualStatementsService-- GetEducationBoosterFundStatement Adapter calling error:" + JSON.stringify(error));
          reject(error);
        });
      } catch (e) {
        this.logger.log("GetAnnualStatementsService GetEducationBoosterFundStatement caiing catch error:" + JSON.stringify(e));
        reject(e);
      }
    });
    this.logger.trace("GetAnnualStatementsService--GetEducationBoosterFundStatement--end");
    return promise;
  }
}
GetAnnualStatementsService.ɵfac = function GetAnnualStatementsService_Factory(t) {
  return new (t || GetAnnualStatementsService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](src_providers_logger_service_logger_service__WEBPACK_IMPORTED_MODULE_1__.LoggerServiceProvider), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](src_providers_utils_utils_service__WEBPACK_IMPORTED_MODULE_2__.UtilService));
};
GetAnnualStatementsService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({
  token: GetAnnualStatementsService,
  factory: GetAnnualStatementsService.ɵfac
});

/***/ }),

/***/ 60193:
/*!***********************************************************!*\
  !*** ./src/app/pages/app-downloads/getAppslistService.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GetAppsListService": () => (/* binding */ GetAppsListService)
/* harmony export */ });
/* harmony import */ var src_providers_utils_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/providers/utils/config */ 43485);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var src_providers_utils_utils_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/providers/utils/utils.service */ 30423);
/* harmony import */ var src_providers_logger_service_logger_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/providers/logger-service/logger-service */ 9999);





/*
  Generated class for the GetAppsListService.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
class GetAppsListService {
  constructor(utils, logger, config) {
    this.utils = utils;
    this.logger = logger;
    this.config = config;
    this.logger.log("GetAppsListService");
  }
  /** Get AppsList**/
  getApplist() {
    this.logger.trace("GetAppsListService--getApplist--start");
    let promise = new Promise((resolve, reject) => {
      try {
        var resourceRequest = new WLResourceRequest(src_providers_utils_config__WEBPACK_IMPORTED_MODULE_0__.ConfigProvider.getAppsList, WLResourceRequest.GET);
        resourceRequest.setQueryParameter('params', [this.utils.getToken()]);
        resourceRequest.send().then(response => {
          resolve(response);
        }, error => {
          this.logger.error("GetAppsListService--getApplist Adapter calling error:" + JSON.stringify(error));
          reject(error);
        });
      } catch (e) {
        reject(e);
        this.logger.log("GetAppsListService--getApplist adapter calling catch error:" + JSON.stringify(e));
      }
    });
    this.logger.trace("GetAppsListService--getApplist--end");
    return promise;
  }
}
GetAppsListService.ɵfac = function GetAppsListService_Factory(t) {
  return new (t || GetAppsListService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](src_providers_utils_utils_service__WEBPACK_IMPORTED_MODULE_1__.UtilService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](src_providers_logger_service_logger_service__WEBPACK_IMPORTED_MODULE_2__.LoggerServiceProvider), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](src_providers_utils_config__WEBPACK_IMPORTED_MODULE_0__.ConfigProvider));
};
GetAppsListService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({
  token: GetAppsListService,
  factory: GetAppsListService.ɵfac
});

/***/ }),

/***/ 72703:
/*!****************************************************************!*\
  !*** ./src/app/pages/change-password/changePasswordService.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ChangePasswordService": () => (/* binding */ ChangePasswordService)
/* harmony export */ });
/* harmony import */ var src_providers_utils_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/providers/utils/config */ 43485);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var src_providers_utils_utils_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/providers/utils/utils.service */ 30423);
/* harmony import */ var src_providers_logger_service_logger_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/providers/logger-service/logger-service */ 9999);





/*
  Generated class for the ChangePasswordService .

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
class ChangePasswordService {
  constructor(utils, logger, config) {
    this.utils = utils;
    this.logger = logger;
    this.config = config;
    this.logger.log("Get Change password service");
  }
  /** Get user policies **/
  changePasswordService(OldPassword, NewPassword, ReNewPassword) {
    this.logger.trace("ChangePasswordService--changePasswordService--start");
    let promise = new Promise((resolve, reject) => {
      try {
        let encryptedUserId = this.utils.getEncryptedUserId();
        let token = this.utils.getToken();
        let params = [encryptedUserId, token, OldPassword, NewPassword, ReNewPassword];
        var resourceRequest = new WLResourceRequest(src_providers_utils_config__WEBPACK_IMPORTED_MODULE_0__.ConfigProvider.putChangePaswordAdapterPath, WLResourceRequest.POST);
        var data = {
          "params": JSON.stringify(params)
        };
        resourceRequest.sendFormParameters(data).then(response => {
          resolve(response);
        }, error => {
          this.logger.error("ChangePasswordService--changePasswordService Adapter calling error:" + JSON.stringify(error));
          reject(error);
        });
      } catch (e) {
        reject(e);
        this.logger.log("ChangePasswordService--changePasswordService adapter calling catch error:" + JSON.stringify(e));
      }
    });
    this.logger.trace("ChangePasswordService--changePasswordService--end");
    return promise;
  }
}
ChangePasswordService.ɵfac = function ChangePasswordService_Factory(t) {
  return new (t || ChangePasswordService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](src_providers_utils_utils_service__WEBPACK_IMPORTED_MODULE_1__.UtilService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](src_providers_logger_service_logger_service__WEBPACK_IMPORTED_MODULE_2__.LoggerServiceProvider), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](src_providers_utils_config__WEBPACK_IMPORTED_MODULE_0__.ConfigProvider));
};
ChangePasswordService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({
  token: ChangePasswordService,
  factory: ChangePasswordService.ɵfac
});

/***/ }),

/***/ 28915:
/*!*****************************************************************!*\
  !*** ./src/app/pages/claim-enquiry-list/claimEnquiryService.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ClaimEnquiryService": () => (/* binding */ ClaimEnquiryService)
/* harmony export */ });
/* harmony import */ var src_providers_utils_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/providers/utils/config */ 43485);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var src_providers_utils_utils_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/providers/utils/utils.service */ 30423);
/* harmony import */ var src_providers_logger_service_logger_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/providers/logger-service/logger-service */ 9999);





/*
  Generated class for the ClaimEnquiryService .

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
class ClaimEnquiryService {
  constructor(utils, logger, config) {
    this.utils = utils;
    this.logger = logger;
    this.config = config;
    this.logger.log("Claim Enquiry service");
    this.config.currentPage.pageName = "ClaimEnquiryService";
  }
  /** Claim Enquiry **/
  claimEnquiry(policyNo, SubmissionDate) {
    this.logger.trace("ClaimEnquiryService--claimEnquiry--start");
    let promise = new Promise((resolve, reject) => {
      try {
        let params = [this.utils.getEncryptedUserId(), policyNo, SubmissionDate, this.utils.getToken()];
        var resourceRequest = new WLResourceRequest(src_providers_utils_config__WEBPACK_IMPORTED_MODULE_0__.ConfigProvider.claimEnquiry, WLResourceRequest.POST);
        var data = {
          "params": JSON.stringify(params)
        };
        resourceRequest.sendFormParameters(data).then(response => {
          resolve(response);
        }, error => {
          this.logger.error("ClaimEnquiryService--claimEnquiry Adapter calling error:" + JSON.stringify(error));
          reject(error);
        });
      } catch (e) {
        reject(e);
        this.logger.log("ClaimEnquiryService--claimEnquiry adapter calling catch error:" + JSON.stringify(e));
      }
    });
    this.logger.trace("ClaimEnquiryService--claimEnquiry--end");
    return promise;
  }
}
ClaimEnquiryService.ɵfac = function ClaimEnquiryService_Factory(t) {
  return new (t || ClaimEnquiryService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](src_providers_utils_utils_service__WEBPACK_IMPORTED_MODULE_1__.UtilService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](src_providers_logger_service_logger_service__WEBPACK_IMPORTED_MODULE_2__.LoggerServiceProvider), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](src_providers_utils_config__WEBPACK_IMPORTED_MODULE_0__.ConfigProvider));
};
ClaimEnquiryService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({
  token: ClaimEnquiryService,
  factory: ClaimEnquiryService.ɵfac
});

/***/ }),

/***/ 45324:
/*!**********************************************************!*\
  !*** ./src/app/pages/claim-status/claimStatusService.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ClaimStatusService": () => (/* binding */ ClaimStatusService)
/* harmony export */ });
/* harmony import */ var src_providers_utils_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/providers/utils/config */ 43485);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var src_providers_utils_utils_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/providers/utils/utils.service */ 30423);
/* harmony import */ var src_providers_logger_service_logger_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/providers/logger-service/logger-service */ 9999);




/*
  Generated class for the ClaimStatusService .

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
class ClaimStatusService {
  constructor(utils, logger) {
    this.utils = utils;
    this.logger = logger;
    this.logger.log("Get Claim Status service");
  }
  /** Get user policies **/
  getClaimStatus(identityNo) {
    this.logger.trace("ClaimStatusService--getClaimStatus--start");
    let promise = new Promise((resolve, reject) => {
      try {
        var resourceRequest = new WLResourceRequest(src_providers_utils_config__WEBPACK_IMPORTED_MODULE_0__.ConfigProvider.getClaimStatusAdapterPath, WLResourceRequest.GET);
        resourceRequest.setQueryParameter('params', "['" + identityNo + "','" + this.utils.getToken() + "']");
        resourceRequest.send().then(response => {
          resolve(response);
        }, error => {
          this.logger.error("ClaimStatusService--getClaimStatus Adapter calling error:" + JSON.stringify(error));
          reject(error);
        });
      } catch (e) {
        reject(e);
        this.logger.log("ClaimStatusService--getClaimStatus adapter calling catch error:" + JSON.stringify(e));
      }
    });
    this.logger.trace("ClaimStatusService--getClaimStatus--end");
    return promise;
  }
  /**
   * This will fetch the Claims Summary for user with pagination
   * @param pageSize PageSize to fetch
   * @param pageNumber PageNumber to fetch
   * @returns Claims Status list for user
   */
  getClaimsSummary(pageSize, pageNumber) {
    this.logger.trace("ClaimsSummaryService--claimDetails--start");
    let promise = new Promise((resolve, reject) => {
      try {
        var resourceRequest = new WLResourceRequest(src_providers_utils_config__WEBPACK_IMPORTED_MODULE_0__.ConfigProvider.getClaimStatusSummary, WLResourceRequest.GET);
        resourceRequest.setQueryParameter('params', [this.utils.getEncryptedUserId(), pageNumber, pageSize, this.utils.getToken()]);
        resourceRequest.send().then(response => {
          resolve(response);
        }, error => {
          this.logger.error("ClaimsSummaryService--claims Adapter calling error:" + JSON.stringify(error));
          reject(error);
        });
      } catch (e) {
        reject(e);
        this.logger.log("ClaimsSummaryService--claims adapter calling catch error:" + JSON.stringify(e));
      }
    });
    this.logger.trace("ClaimsSummaryService--claims--end");
    return promise;
  }
  getClaimsDetail(encryptedPolicyNo, claimType, noOfClaim) {
    this.logger.trace("ClaimsDetailService--claimDetails--start");
    let promise = new Promise((resolve, reject) => {
      try {
        var resourceRequest = new WLResourceRequest(src_providers_utils_config__WEBPACK_IMPORTED_MODULE_0__.ConfigProvider.getClaimStatusDetail, WLResourceRequest.GET);
        resourceRequest.setQueryParameter('params', [this.utils.getEncryptedUserId(), encryptedPolicyNo, claimType, noOfClaim, this.utils.getToken()]);
        resourceRequest.send().then(response => {
          resolve(response);
        }, error => {
          this.logger.error("ClaimsDetailService--claims Adapter calling error:" + JSON.stringify(error));
          reject(error);
        });
      } catch (e) {
        reject(e);
        this.logger.log("ClaimsDetailService--claims adapter calling catch error:" + JSON.stringify(e));
      }
    });
    this.logger.trace("ClaimsDetailService--claims--end");
    return promise;
  }
}
ClaimStatusService.ɵfac = function ClaimStatusService_Factory(t) {
  return new (t || ClaimStatusService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](src_providers_utils_utils_service__WEBPACK_IMPORTED_MODULE_1__.UtilService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](src_providers_logger_service_logger_service__WEBPACK_IMPORTED_MODULE_2__.LoggerServiceProvider));
};
ClaimStatusService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({
  token: ClaimStatusService,
  factory: ClaimStatusService.ɵfac
});

/***/ }),

/***/ 28391:
/*!******************************************************************!*\
  !*** ./src/app/pages/claim-submission/claimSubmissionservice.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ClaimSubmissionService": () => (/* binding */ ClaimSubmissionService)
/* harmony export */ });
/* harmony import */ var src_providers_utils_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/providers/utils/config */ 43485);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var src_providers_utils_utils_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/providers/utils/utils.service */ 30423);
/* harmony import */ var src_providers_logger_service_logger_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/providers/logger-service/logger-service */ 9999);




/*
  Generated class for the ClaimSubmissionService .

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
class ClaimSubmissionService {
  constructor(utils, logger) {
    this.utils = utils;
    this.logger = logger;
    this.logger.log("Claim Submition service");
  }
  /** Claim Enquiry **/
  claimSubmit(formData) {
    this.logger.trace("ClaimSubmissionService--claimSubmit--start");
    let promise = new Promise((resolve, reject) => {
      try {
        var resourceRequest = new WLResourceRequest(src_providers_utils_config__WEBPACK_IMPORTED_MODULE_0__.ConfigProvider.claimSubmissionAdapterPath, WLResourceRequest.POST);
        let params = [this.utils.getEncryptedUserId(), formData, this.utils.getToken()];
        resourceRequest.setHeader("Content-Type", "application/x-www-form-urlencoded");
        var data = {
          "params": JSON.stringify(params)
        };
        resourceRequest.sendFormParameters(data).then(response => {
          resolve(response);
        }, error => {
          this.logger.error("ClaimSubmissionService--claimSubmit Adapter calling error:" + JSON.stringify(error));
          reject(error);
        });
      } catch (e) {
        reject(e);
        this.logger.log("ClaimSubmissionService--claimSubmit adapter calling catch error:" + JSON.stringify(e));
      }
    });
    this.logger.trace("ClaimSubmissionService--claimSubmit--end");
    return promise;
  }
  /**this method is used to get claims static inputs */
  getClaimsStaticData() {
    this.logger.trace("ClaimSubmissionService--getClaimsStaticData--start");
    let promise = new Promise((resolve, reject) => {
      try {
        var resourceRequest = new WLResourceRequest(src_providers_utils_config__WEBPACK_IMPORTED_MODULE_0__.ConfigProvider.claimStaticDataAdapterPath, WLResourceRequest.GET);
        resourceRequest.setQueryParameter('params', "[]");
        resourceRequest.send().then(response => {
          resolve(response);
        }, error => {
          this.logger.error("ClaimSubmissionService--getClaimsStaticData Adapter calling error:" + JSON.stringify(error));
          reject(error);
        });
      } catch (e) {
        reject(e);
        this.logger.log("ClaimSubmissionService--getClaimsStaticData adapter calling catch error:" + JSON.stringify(e));
      }
    });
    this.logger.trace("ClaimSubmissionService--getClaimsStaticData--end");
    return promise;
  }
}
ClaimSubmissionService.ɵfac = function ClaimSubmissionService_Factory(t) {
  return new (t || ClaimSubmissionService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](src_providers_utils_utils_service__WEBPACK_IMPORTED_MODULE_1__.UtilService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](src_providers_logger_service_logger_service__WEBPACK_IMPORTED_MODULE_2__.LoggerServiceProvider));
};
ClaimSubmissionService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({
  token: ClaimSubmissionService,
  factory: ClaimSubmissionService.ɵfac
});

/***/ }),

/***/ 27323:
/*!*************************************************************!*\
  !*** ./src/app/pages/e-medical-card/eMedicalCardService.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EMedicalCardService": () => (/* binding */ EMedicalCardService)
/* harmony export */ });
/* harmony import */ var src_providers_utils_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/providers/utils/config */ 43485);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var src_providers_utils_utils_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/providers/utils/utils.service */ 30423);
/* harmony import */ var src_providers_logger_service_logger_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/providers/logger-service/logger-service */ 9999);




/*
  Generated class for the EMedicalCardService.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
class EMedicalCardService {
  constructor(utils, logger) {
    this.utils = utils;
    this.logger = logger;
    this.logger.log("E-Medical card service");
  }
  /** Get user policy List for Medical Card**/
  getMedicalCardPolicyList() {
    this.logger.trace("EMedicalCardService--getMedicalCardPolicyList--start");
    let promise = new Promise((resolve, reject) => {
      try {
        var resourceRequest = new WLResourceRequest(src_providers_utils_config__WEBPACK_IMPORTED_MODULE_0__.ConfigProvider.getMedicalCardPolicyList, WLResourceRequest.GET);
        resourceRequest.setQueryParameter('params', [this.utils.getEncryptedUserId(), this.utils.getToken()]);
        resourceRequest.setHeader("Content-Type", "application/x-www-form-urlencoded");
        resourceRequest.send().then(response => {
          resolve(response);
        }, error => {
          this.logger.error("EMedicalCardService--getMedicalCardPolicyList Adapter calling error:" + JSON.stringify(error));
          reject(error);
        });
      } catch (e) {
        reject(e);
        this.logger.log("EMedicalCardService--getMedicalCardPolicyList adapter calling catch error:" + JSON.stringify(e));
      }
    });
    this.logger.trace("EMedicalCardService--getMedicalCardPolicyList--end");
    return promise;
  }
  /** Get user policies Details for Medical Card**/
  getMedicalCardDetails(policyNo) {
    this.logger.trace("EMedicalCardService--getMedicalCardDetails--start");
    let promise = new Promise((resolve, reject) => {
      try {
        var resourceRequest = new WLResourceRequest(src_providers_utils_config__WEBPACK_IMPORTED_MODULE_0__.ConfigProvider.getMedicalCardDetails, WLResourceRequest.GET);
        resourceRequest.setQueryParameter('params', [policyNo]);
        resourceRequest.setHeader("Content-Type", "application/x-www-form-urlencoded");
        resourceRequest.send().then(response => {
          resolve(response);
        }, error => {
          this.logger.error("EMedicalCardService--getMedicalCardDetails Adapter calling error:" + JSON.stringify(error));
          reject(error);
        });
      } catch (e) {
        reject(e);
        this.logger.log("EMedicalCardService--getMedicalCardDetails adapter calling catch error:" + JSON.stringify(e));
      }
    });
    this.logger.trace("EMedicalCardService--getMedicalCardDetails--end");
    return promise;
  }
  /** log download date/time for Medical Card**/
  getDownloadDetails(policyNo) {
    this.logger.trace("EMedicalCardService--getDownloadDetails--start");
    let promise = new Promise((resolve, reject) => {
      try {
        var resourceRequest = new WLResourceRequest(src_providers_utils_config__WEBPACK_IMPORTED_MODULE_0__.ConfigProvider.getDownloadDetails, WLResourceRequest.GET);
        resourceRequest.setQueryParameter('params', [this.utils.getEncryptedUserId(), this.utils.getToken(), policyNo]);
        resourceRequest.setHeader("Content-Type", "application/x-www-form-urlencoded");
        resourceRequest.send().then(response => {
          resolve(response);
        }, error => {
          this.logger.error("EMedicalCardService--getDownloadDetails Adapter calling error:" + JSON.stringify(error));
          reject(error);
        });
      } catch (e) {
        reject(e);
        this.logger.log("EMedicalCardService--getMedicalCardDetails adapter calling catch error:" + JSON.stringify(e));
      }
    });
    this.logger.trace("EMedicalCardService--getMedicalCardDetails--end");
    return promise;
  }
}
EMedicalCardService.ɵfac = function EMedicalCardService_Factory(t) {
  return new (t || EMedicalCardService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](src_providers_utils_utils_service__WEBPACK_IMPORTED_MODULE_1__.UtilService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](src_providers_logger_service_logger_service__WEBPACK_IMPORTED_MODULE_2__.LoggerServiceProvider));
};
EMedicalCardService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({
  token: EMedicalCardService,
  factory: EMedicalCardService.ɵfac
});

/***/ }),

/***/ 8401:
/*!**********************************************************!*\
  !*** ./src/app/pages/e-nomination/eNominationService.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "eNominationService": () => (/* binding */ eNominationService)
/* harmony export */ });
/* harmony import */ var src_providers_utils_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/providers/utils/config */ 43485);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var src_providers_logger_service_logger_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/providers/logger-service/logger-service */ 9999);
/* harmony import */ var src_providers_utils_utils_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/providers/utils/utils.service */ 30423);





//declare var self;
/*
  Generated class for the eNominationService.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
class eNominationService {
  constructor(logger, utils, config) {
    this.logger = logger;
    this.utils = utils;
    this.config = config;
    this.logger.log("eNominationService");
    this.config.currentPage.pageName = "eNominationService";
  }
  /** Get getEnominationlink **/
  getEnominationPath() {
    this.logger.trace("eNominationService--getEnominationlink--start ");
    let promise = new Promise((resolve, reject) => {
      try {
        var resourceRequest = new WLResourceRequest(src_providers_utils_config__WEBPACK_IMPORTED_MODULE_0__.ConfigProvider.getEnominationlinkAdapterPath, WLResourceRequest.GET);
        resourceRequest.setQueryParameter('params', [this.utils.getUserIdentity(), this.utils.getToken()]);
        resourceRequest.send().then(response => {
          resolve(response);
        }, error => {
          this.logger.error("eNominationService-- Adapter calling error:" + JSON.stringify(error));
          reject(error);
        });
      } catch (e) {
        this.logger.log("eNominationService calling catch error:" + JSON.stringify(e));
        reject(e);
      }
    });
    this.logger.trace("eNominationService--getEnominationlink--end");
    return promise;
  }
}
eNominationService.ɵfac = function eNominationService_Factory(t) {
  return new (t || eNominationService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](src_providers_logger_service_logger_service__WEBPACK_IMPORTED_MODULE_1__.LoggerServiceProvider), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](src_providers_utils_utils_service__WEBPACK_IMPORTED_MODULE_2__.UtilService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](src_providers_utils_config__WEBPACK_IMPORTED_MODULE_0__.ConfigProvider));
};
eNominationService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({
  token: eNominationService,
  factory: eNominationService.ɵfac
});

/***/ }),

/***/ 8307:
/*!**********************************************************!*\
  !*** ./src/app/pages/epolicy-list/ePolicyListService.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EPolicyListService": () => (/* binding */ EPolicyListService)
/* harmony export */ });
/* harmony import */ var src_providers_utils_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/providers/utils/config */ 43485);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var src_providers_logger_service_logger_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/providers/logger-service/logger-service */ 9999);
/* harmony import */ var src_providers_utils_utils_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/providers/utils/utils.service */ 30423);





//declare var self;
/*
  Generated class for the EPolicyListService.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
class EPolicyListService {
  constructor(logger, utils, config) {
    this.logger = logger;
    this.utils = utils;
    this.config = config;
    this.logger.log("EPolicyListService");
    this.config.currentPage.pageName = "EPolicyListService";
  }
  /** Get EPolicyList **/
  getEPolicyList() {
    this.logger.trace("EPolicyListService--getEPolicyList--start ");
    let promise = new Promise((resolve, reject) => {
      try {
        var resourceRequest = new WLResourceRequest(src_providers_utils_config__WEBPACK_IMPORTED_MODULE_0__.ConfigProvider.getEPolicyList, WLResourceRequest.GET);
        resourceRequest.setQueryParameter('params', [this.utils.getUserIdentity(), this.utils.getToken()]);
        resourceRequest.send().then(response => {
          resolve(response);
        }, error => {
          this.logger.error("EPolicyListService-- Adapter calling error:" + JSON.stringify(error));
          reject(error);
        });
      } catch (e) {
        this.logger.log("EPolicyListService calling catch error:" + JSON.stringify(e));
        reject(e);
      }
    });
    this.logger.trace("EPolicyListService--getEPolicyList--end");
    return promise;
  }
}
EPolicyListService.ɵfac = function EPolicyListService_Factory(t) {
  return new (t || EPolicyListService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](src_providers_logger_service_logger_service__WEBPACK_IMPORTED_MODULE_1__.LoggerServiceProvider), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](src_providers_utils_utils_service__WEBPACK_IMPORTED_MODULE_2__.UtilService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](src_providers_utils_config__WEBPACK_IMPORTED_MODULE_0__.ConfigProvider));
};
EPolicyListService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({
  token: EPolicyListService,
  factory: EPolicyListService.ɵfac
});

/***/ }),

/***/ 32633:
/*!********************************************************************!*\
  !*** ./src/app/pages/forgot-password/checkUserExistenceService.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CheckUserExistenceService": () => (/* binding */ CheckUserExistenceService)
/* harmony export */ });
/* harmony import */ var src_providers_utils_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/providers/utils/config */ 43485);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var src_providers_utils_utils_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/providers/utils/utils.service */ 30423);
/* harmony import */ var src_providers_logger_service_logger_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/providers/logger-service/logger-service */ 9999);




class CheckUserExistenceService {
  constructor(utils, logger) {
    this.utils = utils;
    this.logger = logger;
  }
  CheckUserExistence(userId) {
    this.logger.trace("CheckUserExistenceService--CheckUserExistence--start userID " + userId);
    let promise = new Promise((resolve, reject) => {
      try {
        let params = [userId];
        var resourceRequest = new WLResourceRequest(src_providers_utils_config__WEBPACK_IMPORTED_MODULE_0__.ConfigProvider.CheckUserExistence, WLResourceRequest.POST);
        var data = {
          "params": JSON.stringify(params)
        };
        resourceRequest.sendFormParameters(data).then(response => {
          resolve(response);
        }, error => {
          this.logger.error("CheckUserExistenceService--CheckUserExistence Adapter calling error:" + JSON.stringify(error));
          reject(error);
        });
      } catch (e) {
        this.logger.log("CheckUserExistenceService--CheckUserExistence calling catch error:" + JSON.stringify(e));
        reject(e);
      }
    });
    this.logger.trace("CheckUserExistenceService--CheckUserExistence--end");
    return promise;
  }
}
CheckUserExistenceService.ɵfac = function CheckUserExistenceService_Factory(t) {
  return new (t || CheckUserExistenceService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](src_providers_utils_utils_service__WEBPACK_IMPORTED_MODULE_1__.UtilService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](src_providers_logger_service_logger_service__WEBPACK_IMPORTED_MODULE_2__.LoggerServiceProvider));
};
CheckUserExistenceService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({
  token: CheckUserExistenceService,
  factory: CheckUserExistenceService.ɵfac
});

/***/ }),

/***/ 2261:
/*!**********************************************************!*\
  !*** ./src/app/pages/fund-details/fundDetailsService.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FundDetailsService": () => (/* binding */ FundDetailsService)
/* harmony export */ });
/* harmony import */ var src_providers_utils_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/providers/utils/config */ 43485);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var src_providers_utils_utils_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/providers/utils/utils.service */ 30423);
/* harmony import */ var src_providers_logger_service_logger_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/providers/logger-service/logger-service */ 9999);




/*
  Generated class for the FundDetailsService .

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
class FundDetailsService {
  constructor(utils, logger) {
    this.utils = utils;
    this.logger = logger;
    this.logger.log("Get Fund Details service");
  }
  /** Get user policies **/
  getFundDetails(encryptedPolicyNo, fundCode, rider) {
    this.logger.trace("FundDetailsService--getFundDetails--start");
    let promise = new Promise((resolve, reject) => {
      try {
        var resourceRequest = new WLResourceRequest(src_providers_utils_config__WEBPACK_IMPORTED_MODULE_0__.ConfigProvider.getFundDetails, WLResourceRequest.GET);
        resourceRequest.setQueryParameter('params', [encryptedPolicyNo, fundCode, rider, this.utils.getToken()]);
        resourceRequest.send().then(response => {
          resolve(response);
        }, error => {
          this.logger.error("FundDetailsService--getFundDetails Adapter calling error:" + JSON.stringify(error));
          reject(error);
        });
      } catch (e) {
        reject(e);
        this.logger.log("FundDetailsService--getFundDetails adapter calling catch error:" + JSON.stringify(e));
      }
    });
    this.logger.trace("FundDetailsService--getFundDetails--end");
    return promise;
  }
}
FundDetailsService.ɵfac = function FundDetailsService_Factory(t) {
  return new (t || FundDetailsService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](src_providers_utils_utils_service__WEBPACK_IMPORTED_MODULE_1__.UtilService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](src_providers_logger_service_logger_service__WEBPACK_IMPORTED_MODULE_2__.LoggerServiceProvider));
};
FundDetailsService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({
  token: FundDetailsService,
  factory: FundDetailsService.ɵfac
});

/***/ }),

/***/ 31250:
/*!***********************************************************!*\
  !*** ./src/app/pages/fund-list/fundAllocationsService.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FundAllocationsService": () => (/* binding */ FundAllocationsService)
/* harmony export */ });
/* harmony import */ var src_providers_utils_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/providers/utils/config */ 43485);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var src_providers_utils_utils_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/providers/utils/utils.service */ 30423);
/* harmony import */ var src_providers_logger_service_logger_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/providers/logger-service/logger-service */ 9999);




/*
  Generated class for the FundAllocationsService .

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
class FundAllocationsService {
  constructor(utils, logger) {
    this.utils = utils;
    this.logger = logger;
    this.logger.log("Get Fund Allocations service");
  }
  /** Get user policies **/
  getFundAllocations(encryptedPolicyNo) {
    this.logger.trace("FundAllocationsService--getFundAllocations--start");
    let promise = new Promise((resolve, reject) => {
      try {
        var resourceRequest = new WLResourceRequest(src_providers_utils_config__WEBPACK_IMPORTED_MODULE_0__.ConfigProvider.getFundAllocations, WLResourceRequest.GET);
        resourceRequest.setQueryParameter('params', "['" + encryptedPolicyNo + "','" + this.utils.getToken() + "']");
        resourceRequest.send().then(response => {
          resolve(response);
        }, error => {
          this.logger.error("FundAllocationsService--getFundAllocations Adapter calling error:" + JSON.stringify(error));
          reject(error);
        });
      } catch (e) {
        reject(e);
        this.logger.log("FundAllocationsService--getFundAllocations adapter calling catch error:" + JSON.stringify(e));
      }
    });
    this.logger.trace("FundAllocationsService--getFundAllocations--end");
    return promise;
  }
}
FundAllocationsService.ɵfac = function FundAllocationsService_Factory(t) {
  return new (t || FundAllocationsService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](src_providers_utils_utils_service__WEBPACK_IMPORTED_MODULE_1__.UtilService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](src_providers_logger_service_logger_service__WEBPACK_IMPORTED_MODULE_2__.LoggerServiceProvider));
};
FundAllocationsService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({
  token: FundAllocationsService,
  factory: FundAllocationsService.ɵfac
});

/***/ }),

/***/ 87348:
/*!**************************************************************!*\
  !*** ./src/app/pages/fund-switching/fundSwitchingService.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FundSwitchingService": () => (/* binding */ FundSwitchingService)
/* harmony export */ });
/* harmony import */ var src_providers_utils_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/providers/utils/config */ 43485);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var src_providers_utils_utils_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/providers/utils/utils.service */ 30423);
/* harmony import */ var src_providers_logger_service_logger_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/providers/logger-service/logger-service */ 9999);




/*
  Generated class for the UpdateAddressService .

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
class FundSwitchingService {
  constructor(utils, logger) {
    this.utils = utils;
    this.logger = logger;
    this.logger.log("SurrenderCancelService");
  }
  validateFundSwitch(selectedPolicy) {
    this.logger.trace("SurrenderCancelService--validateSurrender--start");
    let promise = new Promise((resolve, reject) => {
      try {
        var resourceRequest = new WLResourceRequest(src_providers_utils_config__WEBPACK_IMPORTED_MODULE_0__.ConfigProvider.fundSwitchAdapterPath + 'GetFundSwitchingCheck', WLResourceRequest.POST);
        let params = [this.utils.getToken(), selectedPolicy];
        resourceRequest.setHeader("Content-Type", "application/x-www-form-urlencoded");
        var data = {
          "params": JSON.stringify(params)
        };
        resourceRequest.sendFormParameters(data).then(response => {
          resolve(response);
        }, error => {
          this.logger.error("SurrenderCancelService--validateSurrender Adapter calling error:" + JSON.stringify(error));
          reject(error);
        });
      } catch (e) {
        reject(e);
        this.logger.log("SurrenderCancelService--validateSurrender adapter calling catch error:" + JSON.stringify(e));
      }
    });
    this.logger.trace("SurrenderCancelService--validateSurrender--end");
    return promise;
  }
  sunbmitFundSwitching(surrenderData) {
    this.logger.trace("SurrenderCancelService--validateSurrender--start");
    let promise = new Promise((resolve, reject) => {
      try {
        var resourceRequest = new WLResourceRequest(src_providers_utils_config__WEBPACK_IMPORTED_MODULE_0__.ConfigProvider.fundSwitchAdapterPath + 'PostFundSwitching', WLResourceRequest.POST);
        let params = [this.utils.getToken(), surrenderData];
        resourceRequest.setHeader("Content-Type", "application/x-www-form-urlencoded");
        var data = {
          "params": JSON.stringify(params)
        };
        resourceRequest.sendFormParameters(data).then(response => {
          resolve(response);
        }, error => {
          this.logger.error("SurrenderCancelService--SubmitSurrender Adapter calling error:" + JSON.stringify(error));
          reject(error);
        });
      } catch (e) {
        reject(e);
        this.logger.log("SurrenderCancelService--SubmitSurrender adapter calling catch error:" + JSON.stringify(e));
      }
    });
    this.logger.trace("SurrenderCancelService--SubmitSurrender--end");
    return promise;
  }
}
FundSwitchingService.ɵfac = function FundSwitchingService_Factory(t) {
  return new (t || FundSwitchingService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](src_providers_utils_utils_service__WEBPACK_IMPORTED_MODULE_1__.UtilService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](src_providers_logger_service_logger_service__WEBPACK_IMPORTED_MODULE_2__.LoggerServiceProvider));
};
FundSwitchingService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({
  token: FundSwitchingService,
  factory: FundSwitchingService.ɵfac
});

/***/ }),

/***/ 19670:
/*!********************************************************************!*\
  !*** ./src/app/pages/healthinfo-detail/healthinfoDetailService.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HealthinfoDetailService": () => (/* binding */ HealthinfoDetailService)
/* harmony export */ });
/* harmony import */ var src_providers_utils_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/providers/utils/config */ 43485);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var src_providers_logger_service_logger_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/providers/logger-service/logger-service */ 9999);
/* harmony import */ var src_providers_utils_utils_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/providers/utils/utils.service */ 30423);




/*
  Generated class for the getHealthInfoDetails .

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
class HealthinfoDetailService {
  constructor(logger, utils) {
    this.logger = logger;
    this.utils = utils;
    this.logger.log("HealthinfoDetailService");
  }
  /** Get HealthInfo Details  **/
  getHealthInfoDetails(id) {
    this.logger.trace("HealthinfoDetailService--getHealthInfoDetails--start ");
    let promise = new Promise((resolve, reject) => {
      try {
        var resourceRequest = new WLResourceRequest(src_providers_utils_config__WEBPACK_IMPORTED_MODULE_0__.ConfigProvider.getHealthInfoDetailsAdapterPath, WLResourceRequest.GET);
        resourceRequest.setQueryParameter('params', [id, this.utils.getToken()]);
        resourceRequest.send().then(response => {
          resolve(response);
        }, error => {
          this.logger.error("HealthinfoDetailService-- Adapter calling error:" + JSON.stringify(error));
          reject(error);
        });
      } catch (e) {
        this.logger.log("HealthinfoDetailService calling catch error:" + JSON.stringify(e));
        reject(e);
      }
    });
    this.logger.trace("HealthinfoDetailService--getHealthInfoDetails--end");
    return promise;
  }
}
HealthinfoDetailService.ɵfac = function HealthinfoDetailService_Factory(t) {
  return new (t || HealthinfoDetailService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](src_providers_logger_service_logger_service__WEBPACK_IMPORTED_MODULE_1__.LoggerServiceProvider), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](src_providers_utils_utils_service__WEBPACK_IMPORTED_MODULE_2__.UtilService));
};
HealthinfoDetailService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({
  token: HealthinfoDetailService,
  factory: HealthinfoDetailService.ɵfac
});
;

/***/ }),

/***/ 33255:
/*!*******************************************************!*\
  !*** ./src/app/pages/healthinfo/healthinfoService.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HealthinfoService": () => (/* binding */ HealthinfoService)
/* harmony export */ });
/* harmony import */ var src_providers_utils_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/providers/utils/config */ 43485);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var src_providers_logger_service_logger_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/providers/logger-service/logger-service */ 9999);
/* harmony import */ var src_providers_utils_utils_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/providers/utils/utils.service */ 30423);




/*
  Generated class for the FundAllocationsService .

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
class HealthinfoService {
  constructor(logger, utils) {
    this.logger = logger;
    this.utils = utils;
    this.logger.log("HealthinfoService");
  }
  /** Get Photo Gallery **/
  getHealthInfo(pageNo) {
    this.logger.trace("HealthinfoService--getHealthInfo--start ");
    let promise = new Promise((resolve, reject) => {
      try {
        var resourceRequest = new WLResourceRequest(src_providers_utils_config__WEBPACK_IMPORTED_MODULE_0__.ConfigProvider.getHealthInfoAdapterPath, WLResourceRequest.GET);
        resourceRequest.setQueryParameter('params', [this.utils.getToken(), pageNo]);
        resourceRequest.send().then(response => {
          resolve(response);
        }, error => {
          this.logger.error("HealthinfoService-- Adapter calling error:" + JSON.stringify(error));
          reject(error);
        });
      } catch (e) {
        this.logger.log("HealthinfoService calling catch error:" + JSON.stringify(e));
        reject(e);
      }
    });
    this.logger.trace("HealthinfoService--getHealthInfo--end");
    return promise;
  }
}
HealthinfoService.ɵfac = function HealthinfoService_Factory(t) {
  return new (t || HealthinfoService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](src_providers_logger_service_logger_service__WEBPACK_IMPORTED_MODULE_1__.LoggerServiceProvider), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](src_providers_utils_utils_service__WEBPACK_IMPORTED_MODULE_2__.UtilService));
};
HealthinfoService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({
  token: HealthinfoService,
  factory: HealthinfoService.ɵfac
});
;

/***/ }),

/***/ 61390:
/*!*********************************************!*\
  !*** ./src/app/pages/login/loginService.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginService": () => (/* binding */ LoginService)
/* harmony export */ });
/* harmony import */ var src_providers_utils_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/providers/utils/config */ 43485);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var src_providers_logger_service_logger_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/providers/logger-service/logger-service */ 9999);



/*
  Generated class for the UnitPriceListService.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
class LoginService {
  constructor(logger) {
    this.logger = logger;
  }
  getSecurePhrase(userID) {
    this.logger.trace("LoginService--getSecurePhrase--start");
    let promise = new Promise((resolve, reject) => {
      try {
        var resourceRequest = new WLResourceRequest(src_providers_utils_config__WEBPACK_IMPORTED_MODULE_0__.ConfigProvider.getSecurePhrase, WLResourceRequest.GET);
        resourceRequest.setQueryParameter('params', [userID]);
        resourceRequest.send().then(response => {
          resolve(response);
        }, error => {
          this.logger.error("LoginService--getSecurePhrase Adapter calling error:" + JSON.stringify(error));
          reject(error);
        });
      } catch (e) {
        reject(e);
        this.logger.log("LoginService--getSecurePhrase adapter calling catch error:" + JSON.stringify(e));
      }
    });
    this.logger.trace("LoginService--getSecurePhrase--end");
    return promise;
  }
  /** passcodelogin **/
  userLogin(userID, passwd, deviceUUID) {
    this.logger.trace("login--userID :" + userID + "passwd " + passwd + " deviceId: " + deviceUUID);
    let promise = new Promise((resolve, reject) => {
      try {
        let params = [userID, passwd, deviceUUID];
        var resourceRequest = new WLResourceRequest(src_providers_utils_config__WEBPACK_IMPORTED_MODULE_0__.ConfigProvider.login, WLResourceRequest.POST);
        resourceRequest.setHeader("Content-Type", "application/x-www-form-urlencoded");
        var data = {
          "params": JSON.stringify(params)
        };
        resourceRequest.sendFormParameters(data).then(response => {
          resolve(response);
        }, error => {
          this.logger.error("LoginService--userLogin Adapter calling error:" + JSON.stringify(error));
          reject(error);
        });
      } catch (e) {
        reject(e);
        this.logger.log("LoginService caiing catch error:" + JSON.stringify(e));
      }
    });
    this.logger.trace("LoginService--userLogin--end");
    return promise;
  }
}
LoginService.ɵfac = function LoginService_Factory(t) {
  return new (t || LoginService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](src_providers_logger_service_logger_service__WEBPACK_IMPORTED_MODULE_1__.LoggerServiceProvider));
};
LoginService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
  token: LoginService,
  factory: LoginService.ɵfac
});

/***/ }),

/***/ 33038:
/*!*************************************************************!*\
  !*** ./src/app/pages/make-payment/paymentSuccessService.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PaymentSuccessService": () => (/* binding */ PaymentSuccessService)
/* harmony export */ });
/* harmony import */ var src_providers_utils_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/providers/utils/config */ 43485);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var src_providers_utils_utils_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/providers/utils/utils.service */ 30423);
/* harmony import */ var src_providers_logger_service_logger_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/providers/logger-service/logger-service */ 9999);




/*
  Generated class for the PaymentSuccessService .

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
class PaymentSuccessService {
  //retryCount: number = 0;
  constructor(utils, logger) {
    this.utils = utils;
    this.logger = logger;
    this.logger.log("PUT payment success info  service");
  }
  /** get user opted security question **/
  putPaymentSuccessDetails(paymentData, paymentSeqNo) {
    this.logger.trace("PaymentSuccessService--putPaymentDetails--start");
    let promise = new Promise((resolve, reject) => {
      try {
        var resourceRequest = new WLResourceRequest(src_providers_utils_config__WEBPACK_IMPORTED_MODULE_0__.ConfigProvider.putPaymentResults, WLResourceRequest.POST);
        var data = {
          "params": JSON.stringify([paymentData, this.utils.getToken(), paymentSeqNo])
        };
        resourceRequest.sendFormParameters(data).then(response => {
          resolve(response);
        }, error => {
          this.logger.error("PaymentSuccessService--putPaymentDetails Adapter calling error:" + JSON.stringify(error));
          reject(error);
        });
      } catch (e) {
        reject(e);
        this.logger.log("PaymentSuccessService--putPaymentDetails calling catch error:" + JSON.stringify(e));
      }
    });
    this.logger.trace("PaymentSuccessService--putPaymentDetails--end");
    return promise;
  }
}
PaymentSuccessService.ɵfac = function PaymentSuccessService_Factory(t) {
  return new (t || PaymentSuccessService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](src_providers_utils_utils_service__WEBPACK_IMPORTED_MODULE_1__.UtilService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](src_providers_logger_service_logger_service__WEBPACK_IMPORTED_MODULE_2__.LoggerServiceProvider));
};
PaymentSuccessService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({
  token: PaymentSuccessService,
  factory: PaymentSuccessService.ɵfac
});

/***/ }),

/***/ 6615:
/*!*****************************************************!*\
  !*** ./src/app/pages/media-release/mediaService.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MediaReleaseService": () => (/* binding */ MediaReleaseService)
/* harmony export */ });
/* harmony import */ var src_providers_utils_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/providers/utils/config */ 43485);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var src_providers_utils_utils_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/providers/utils/utils.service */ 30423);




/*
  Generated class for the UnitPriceListService.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
class MediaReleaseService {
  constructor(config, utils) {
    this.config = config;
    this.utils = utils;
  }
  getMediaRelease(pageNo) {
    let promise = new Promise((resolve, reject) => {
      try {
        var resourceRequest = new WLResourceRequest(src_providers_utils_config__WEBPACK_IMPORTED_MODULE_0__.ConfigProvider.getMediaRelease, WLResourceRequest.GET);
        resourceRequest.setQueryParameter('params', [pageNo]);
        resourceRequest.send().then(response => {
          resolve(response);
        }, error => {
          reject(error);
        });
      } catch (e) {
        reject(e);
      }
    });
    return promise;
  }
  getProfileDetails() {
    //alert('Profile Details')
    let promise = new Promise((resolve, reject) => {
      try {
        var resourceRequest = new WLResourceRequest(src_providers_utils_config__WEBPACK_IMPORTED_MODULE_0__.ConfigProvider.getProfileDetails, WLResourceRequest.GET);
        resourceRequest.setQueryParameter('params', [this.config.userInfo.encryptedUserId, this.config.userInfo.token]);
        resourceRequest.send().then(response => {
          alert('Success');
          resolve(response);
        }, error => {
          alert('Error');
          reject(error);
        });
      } catch (e) {
        alert('Error');
        reject(e);
      }
    });
    return promise;
  }
  getAccounHolderInfo() {
    alert('getAccounHolderInfo Details');
    let promise = new Promise((resolve, reject) => {
      try {
        let encryptedUserId = this.config.userInfo.encryptedUserId;
        let token = this.config.userInfo.token;
        let params = [encryptedUserId, token];
        var resourceRequest = new WLResourceRequest(src_providers_utils_config__WEBPACK_IMPORTED_MODULE_0__.ConfigProvider.getAccountHolderDetails, WLResourceRequest.POST);
        var data = {
          "params": JSON.stringify(params)
        };
        resourceRequest.sendFormParameters(data).then(response => {
          alert('Success getAccounHolderInfo');
          resolve(response);
        }, error => {
          alert('error getAccounHolderInfo');
          reject(error);
        });
      } catch (e) {
        reject(e);
      }
    });
    return promise;
  }
}
MediaReleaseService.ɵfac = function MediaReleaseService_Factory(t) {
  return new (t || MediaReleaseService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](src_providers_utils_config__WEBPACK_IMPORTED_MODULE_0__.ConfigProvider), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](src_providers_utils_utils_service__WEBPACK_IMPORTED_MODULE_1__.UtilService));
};
MediaReleaseService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
  token: MediaReleaseService,
  factory: MediaReleaseService.ɵfac
});

/***/ }),

/***/ 40761:
/*!********************************************************!*\
  !*** ./src/app/pages/news-letter/newsLetterService.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NewsLetterService": () => (/* binding */ NewsLetterService)
/* harmony export */ });
/* harmony import */ var src_providers_utils_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/providers/utils/config */ 43485);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var src_providers_logger_service_logger_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/providers/logger-service/logger-service */ 9999);
/* harmony import */ var src_providers_utils_utils_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/providers/utils/utils.service */ 30423);




/*
  Generated class for the NewsLetterService.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
class NewsLetterService {
  constructor(logger, utils) {
    this.logger = logger;
    this.utils = utils;
    this.logger.log("NewsLetterService");
  }
  /** Get NewsLettersList **/
  getNewsLettersList(pageNo) {
    this.logger.trace("NewsLetterService--getEPolicyList--start ");
    const promise = new Promise((resolve, reject) => {
      try {
        var resourceRequest = new WLResourceRequest(src_providers_utils_config__WEBPACK_IMPORTED_MODULE_0__.ConfigProvider.getDownloadList, WLResourceRequest.GET);
        resourceRequest.setQueryParameter('params', [this.utils.getToken(), pageNo]);
        resourceRequest.send().then(response => {
          resolve(response);
        }, error => {
          this.logger.error("NewsLetterService-- Adapter calling error:" + JSON.stringify(error));
          reject(error);
        });
      } catch (e) {
        this.logger.log("NewsLetterService calling catch error:" + JSON.stringify(e));
        reject(e);
      }
    });
    this.logger.trace("NewsLetterService--getNewsLettersList--end");
    return promise;
  }
}
NewsLetterService.ɵfac = function NewsLetterService_Factory(t) {
  return new (t || NewsLetterService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](src_providers_logger_service_logger_service__WEBPACK_IMPORTED_MODULE_1__.LoggerServiceProvider), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](src_providers_utils_utils_service__WEBPACK_IMPORTED_MODULE_2__.UtilService));
};
NewsLetterService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({
  token: NewsLetterService,
  factory: NewsLetterService.ɵfac
});

/***/ }),

/***/ 56431:
/*!****************************************************!*\
  !*** ./src/app/pages/news-list/newsListService.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NewsListService": () => (/* binding */ NewsListService)
/* harmony export */ });
/* harmony import */ var src_providers_utils_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/providers/utils/config */ 43485);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);


/*
  Generated class for the UnitPriceListService.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
class NewsListService {
  constructor() {}
  getNewsList(pageNo) {
    let promise = new Promise((resolve, reject) => {
      try {
        var resourceRequest = new WLResourceRequest(src_providers_utils_config__WEBPACK_IMPORTED_MODULE_0__.ConfigProvider.getNewsList, WLResourceRequest.GET);
        resourceRequest.setQueryParameter('params', [pageNo]);
        resourceRequest.send().then(response => {
          resolve(response);
        }, error => {
          reject(error);
        });
      } catch (e) {
        reject(e);
      }
    });
    return promise;
  }
}
NewsListService.ɵfac = function NewsListService_Factory(t) {
  return new (t || NewsListService)();
};
NewsListService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
  token: NewsListService,
  factory: NewsListService.ɵfac
});

/***/ }),

/***/ 90589:
/*!**************************************************************************!*\
  !*** ./src/app/pages/notification-details/notificationDetailsService.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NotificationDetailsService": () => (/* binding */ NotificationDetailsService)
/* harmony export */ });
/* harmony import */ var src_providers_utils_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/providers/utils/config */ 43485);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var src_providers_logger_service_logger_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/providers/logger-service/logger-service */ 9999);
/* harmony import */ var src_providers_utils_utils_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/providers/utils/utils.service */ 30423);




//declare var self;
/*
  Generated class for the NotificationDetailsService .

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
class NotificationDetailsService {
  constructor(logger, utils) {
    this.logger = logger;
    this.utils = utils;
    this.logger.log("NotificationDetailsService");
  }
  /** Get Notification Details  **/
  getNotificationsDetails(id) {
    this.logger.trace("NotificationDetailsService--getNotificationsDetails--start ");
    let promise = new Promise((resolve, reject) => {
      try {
        var resourceRequest = new WLResourceRequest(src_providers_utils_config__WEBPACK_IMPORTED_MODULE_0__.ConfigProvider.getNotificationsDetails, WLResourceRequest.GET);
        resourceRequest.setQueryParameter('params', [id, this.utils.getToken()]);
        resourceRequest.send().then(response => {
          resolve(response);
        }, error => {
          this.logger.error("NotificationDetailsService-- Adapter calling error:" + JSON.stringify(error));
          reject(error);
        });
      } catch (e) {
        this.logger.log("NotificationDetailsService calling catch error:" + JSON.stringify(e));
        reject(e);
      }
    });
    this.logger.trace("NotificationDetailsService--getNotificationsDetails--end");
    return promise;
  }
  /** Get Notifications  **/
  setNotificationRead(NotifId) {
    this.logger.trace("NotificationService--updateNotificationSetRead--start ");
    let encryptedUserId = this.utils.getEncryptedUserId();
    let promise = new Promise((resolve, reject) => {
      try {
        var resourceRequest = new WLResourceRequest(src_providers_utils_config__WEBPACK_IMPORTED_MODULE_0__.ConfigProvider.updateNotificationSetRead, WLResourceRequest.GET);
        resourceRequest.setQueryParameter('params', [this.utils.getToken(), encryptedUserId, NotifId]);
        resourceRequest.send().then(response => {
          resolve(response);
        }, error => {
          this.logger.error("NotificationService-- updateNotificationSetReadAdapter calling error:" + JSON.stringify(error));
          reject(error);
        });
      } catch (e) {
        this.logger.log("NotificationService updateNotificationSetRead calling catch error:" + JSON.stringify(e));
        reject(e);
      }
    });
    this.logger.trace("NotificationService--updateNotificationSetRead--end");
    return promise;
  } /** Get Notifications  **/
  setNotificationsDelete(NotifId) {
    this.logger.trace("NotificationService--updateNotificationSetDeleted--start ");
    let encryptedUserId = this.utils.getEncryptedUserId();
    let promise = new Promise((resolve, reject) => {
      try {
        var resourceRequest = new WLResourceRequest(src_providers_utils_config__WEBPACK_IMPORTED_MODULE_0__.ConfigProvider.updateNotificationSetDeleted, WLResourceRequest.GET);
        resourceRequest.setQueryParameter('params', [this.utils.getToken(), encryptedUserId, NotifId]);
        resourceRequest.send().then(response => {
          resolve(response);
        }, error => {
          this.logger.error("NotificationService--updateNotificationSetDeleted Adapter calling error:" + JSON.stringify(error));
          reject(error);
        });
      } catch (e) {
        this.logger.log("NotificationService updateNotificationSetDeleted calling catch error:" + JSON.stringify(e));
        reject(e);
      }
    });
    this.logger.trace("NotificationService--updateNotificationSetDeleted--end");
    return promise;
  }
}
NotificationDetailsService.ɵfac = function NotificationDetailsService_Factory(t) {
  return new (t || NotificationDetailsService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](src_providers_logger_service_logger_service__WEBPACK_IMPORTED_MODULE_1__.LoggerServiceProvider), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](src_providers_utils_utils_service__WEBPACK_IMPORTED_MODULE_2__.UtilService));
};
NotificationDetailsService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({
  token: NotificationDetailsService,
  factory: NotificationDetailsService.ɵfac
});

/***/ }),

/***/ 34088:
/*!****************************************************************************!*\
  !*** ./src/app/pages/notification-settings/notificationSettingsService.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "notificationSettingservice": () => (/* binding */ notificationSettingservice)
/* harmony export */ });
/* harmony import */ var src_providers_utils_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/providers/utils/config */ 43485);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var src_providers_utils_utils_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/providers/utils/utils.service */ 30423);
/* harmony import */ var src_providers_logger_service_logger_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/providers/logger-service/logger-service */ 9999);





/*
  Generated class for the ChangePasswordService .

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
class notificationSettingservice {
  constructor(utils, logger, config) {
    this.utils = utils;
    this.logger = logger;
    this.config = config;
    this.logger.log("Get notification setting service");
  }
  /** Get user policies **/
  getNotificationSettings() {
    this.logger.trace("notificationsettingservice--getNotificationSettings--start");
    let promise = new Promise((resolve, reject) => {
      try {
        let encryptedUserId = this.utils.getEncryptedUserId();
        let token = this.utils.getToken();
        var resourceRequest = new WLResourceRequest(src_providers_utils_config__WEBPACK_IMPORTED_MODULE_0__.ConfigProvider.getNotificationSettings, WLResourceRequest.GET);
        resourceRequest.setQueryParameter('params', "['" + encryptedUserId + "', '" + token + "']");
        resourceRequest.send().then(response => {
          resolve(response);
        }, error => {
          this.logger.error("notificationsettingservice--getNotificationSettings Adapter calling error:" + JSON.stringify(error));
          reject(error);
        });
      } catch (e) {
        reject(e);
        this.logger.log("notificationsettingservice--getNotificationSettings calling catch error:" + JSON.stringify(e));
      }
    });
    this.logger.trace("notificationsettingservice--getNotificationSettings--end");
    return promise;
  }
  updatePushNotificationsetting(pushFlagVal) {
    this.logger.trace("notificationsettingservice--updatePushNotificationsetting--start");
    let promise = new Promise((resolve, reject) => {
      try {
        let encryptedUserId = this.utils.getEncryptedUserId();
        let token = this.utils.getToken();
        let params = [encryptedUserId, token, pushFlagVal];
        var resourceRequest = new WLResourceRequest(src_providers_utils_config__WEBPACK_IMPORTED_MODULE_0__.ConfigProvider.updateNotificationSettings, WLResourceRequest.POST);
        var data = {
          "params": JSON.stringify(params)
        };
        resourceRequest.sendFormParameters(data).then(response => {
          resolve(response);
        }, error => {
          this.logger.error("notificationsettingservice--updatePushNotificationsetting Adapter calling error:" + JSON.stringify(error));
          reject(error);
        });
      } catch (e) {
        reject(e);
        this.logger.log("notificationsettingservice--updatePushNotificationsetting adapter calling catch error:" + JSON.stringify(e));
      }
    });
    this.logger.trace("notificationsettingservice--updatePushNotificationsetting--end");
    return promise;
  }
  updateNotificationsetting(announcementFlagVal, policyFlagVal, marketingFlagVal) {
    this.logger.trace("notificationsettingservice--updateNotificationsetting--start");
    let promise = new Promise((resolve, reject) => {
      try {
        let encryptedUserId = this.utils.getEncryptedUserId();
        let token = this.utils.getToken();
        let params = [encryptedUserId, token, announcementFlagVal, policyFlagVal, marketingFlagVal];
        var resourceRequest = new WLResourceRequest(src_providers_utils_config__WEBPACK_IMPORTED_MODULE_0__.ConfigProvider.updateNotificationSettings, WLResourceRequest.POST);
        var data = {
          "params": JSON.stringify(params)
        };
        resourceRequest.sendFormParameters(data).then(response => {
          resolve(response);
        }, error => {
          this.logger.error("notificationsettingservice--updateNotificationsetting Adapter calling error:" + JSON.stringify(error));
          reject(error);
        });
      } catch (e) {
        reject(e);
        this.logger.log("notificationsettingservice--updateNotificationsetting adapter calling catch error:" + JSON.stringify(e));
      }
    });
    this.logger.trace("notificationsettingservice--updateNotificationsetting--end");
    return promise;
  }
}
notificationSettingservice.ɵfac = function notificationSettingservice_Factory(t) {
  return new (t || notificationSettingservice)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](src_providers_utils_utils_service__WEBPACK_IMPORTED_MODULE_1__.UtilService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](src_providers_logger_service_logger_service__WEBPACK_IMPORTED_MODULE_2__.LoggerServiceProvider), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](src_providers_utils_config__WEBPACK_IMPORTED_MODULE_0__.ConfigProvider));
};
notificationSettingservice.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({
  token: notificationSettingservice,
  factory: notificationSettingservice.ɵfac
});

/***/ }),

/***/ 95536:
/*!*************************************************************!*\
  !*** ./src/app/pages/notifications/notificationsService.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NotificationService": () => (/* binding */ NotificationService)
/* harmony export */ });
/* harmony import */ var src_providers_utils_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/providers/utils/config */ 43485);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var src_providers_logger_service_logger_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/providers/logger-service/logger-service */ 9999);
/* harmony import */ var src_providers_utils_utils_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/providers/utils/utils.service */ 30423);




//declare var self;
/*
  Generated class for the NotificationService .

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
class NotificationService {
  constructor(logger, utils) {
    this.logger = logger;
    this.utils = utils;
    this.logger.log("NotificationService");
  }
  /** Get Notifications  **/
  getNotificationsList(pageNo) {
    this.logger.trace("NotificationService--getNotificationsList--start ");
    let encryptedUserId = this.utils.getEncryptedUserId();
    let promise = new Promise((resolve, reject) => {
      try {
        var resourceRequest = new WLResourceRequest(src_providers_utils_config__WEBPACK_IMPORTED_MODULE_0__.ConfigProvider.getNotificationslist, WLResourceRequest.GET);
        resourceRequest.setQueryParameter('params', [this.utils.getToken(), encryptedUserId, pageNo]);
        resourceRequest.send().then(response => {
          resolve(response);
        }, error => {
          this.logger.error("NotificationService-- Adapter calling error:" + JSON.stringify(error));
          reject(error);
        });
      } catch (e) {
        this.logger.log("NotificationService calling catch error:" + JSON.stringify(e));
        reject(e);
      }
    });
    this.logger.trace("NotificationService--getNotificationsList--end");
    return promise;
  }
}
NotificationService.ɵfac = function NotificationService_Factory(t) {
  return new (t || NotificationService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](src_providers_logger_service_logger_service__WEBPACK_IMPORTED_MODULE_1__.LoggerServiceProvider), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](src_providers_utils_utils_service__WEBPACK_IMPORTED_MODULE_2__.UtilService));
};
NotificationService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({
  token: NotificationService,
  factory: NotificationService.ɵfac
});

/***/ }),

/***/ 68579:
/*!*******************************************************************!*\
  !*** ./src/app/pages/payment-confirmation/merchantInfoService.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GetMerchantInfoService": () => (/* binding */ GetMerchantInfoService)
/* harmony export */ });
/* harmony import */ var src_providers_utils_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/providers/utils/config */ 43485);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var src_providers_utils_utils_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/providers/utils/utils.service */ 30423);
/* harmony import */ var src_providers_logger_service_logger_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/providers/logger-service/logger-service */ 9999);




/*
  Generated class for the GetMerchantInfoService .

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
class GetMerchantInfoService {
  constructor(utils, logger) {
    this.utils = utils;
    this.logger = logger;
    this.logger.log("Get Merchant info  service");
  }
  /** get user opted security question **/
  getMerchantInfo(encryptedPolicyNo) {
    this.logger.trace("GetMerchantInfoService--getMerchantInfo--start");
    let promise = new Promise((resolve, reject) => {
      try {
        var resourceRequest = new WLResourceRequest(src_providers_utils_config__WEBPACK_IMPORTED_MODULE_0__.ConfigProvider.getMerchantInfoAdapterPath, WLResourceRequest.GET);
        let token = this.utils.getToken();
        resourceRequest.setQueryParameter('params', "['" + encryptedPolicyNo + "', '" + token + "']");
        resourceRequest.send().then(response => {
          resolve(response);
        }, error => {
          this.logger.error("GetMerchantInfoService--getMerchantInfo Adapter calling error:" + JSON.stringify(error));
          reject(error);
        });
      } catch (e) {
        reject(e);
        this.logger.log("GetMerchantInfoService--getMerchantInfo calling catch error:" + JSON.stringify(e));
      }
    });
    this.logger.trace("GetMerchantInfoService--getMerchantInfo--end");
    return promise;
  }
}
GetMerchantInfoService.ɵfac = function GetMerchantInfoService_Factory(t) {
  return new (t || GetMerchantInfoService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](src_providers_utils_utils_service__WEBPACK_IMPORTED_MODULE_1__.UtilService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](src_providers_logger_service_logger_service__WEBPACK_IMPORTED_MODULE_2__.LoggerServiceProvider));
};
GetMerchantInfoService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({
  token: GetMerchantInfoService,
  factory: GetMerchantInfoService.ɵfac
});

/***/ }),

/***/ 70131:
/*!****************************************************************!*\
  !*** ./src/app/pages/payment-history/paymwntHistoryService.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PaymentHistoryService": () => (/* binding */ PaymentHistoryService)
/* harmony export */ });
/* harmony import */ var src_providers_utils_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/providers/utils/config */ 43485);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var src_providers_utils_utils_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/providers/utils/utils.service */ 30423);
/* harmony import */ var src_providers_logger_service_logger_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/providers/logger-service/logger-service */ 9999);




/*
  Generated class for the PaymentHistoryService .

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
class PaymentHistoryService {
  constructor(utils, logger) {
    this.utils = utils;
    this.logger = logger;
    this.logger.log("Get Payment History service");
  }
  /** Get user policies **/
  getPaymentHistory(isEmandate) {
    this.logger.trace("PaymentHistoryService--getPolicyList--start");
    let promise = new Promise((resolve, reject) => {
      try {
        if (this.utils.isDeviceOnLine()) {
          var resourceRequest;
          if (isEmandate) {
            resourceRequest = new WLResourceRequest(src_providers_utils_config__WEBPACK_IMPORTED_MODULE_0__.ConfigProvider.getEMandatePaymentHistory, WLResourceRequest.GET);
          } else {
            resourceRequest = new WLResourceRequest(src_providers_utils_config__WEBPACK_IMPORTED_MODULE_0__.ConfigProvider.PaymentHistoryAdapterPath, WLResourceRequest.GET);
          }
          resourceRequest.setQueryParameter('params', "['" + this.utils.getEncryptedUserId() + "','" + this.utils.getToken() + "']");
          resourceRequest.send().then(response => {
            resolve(response);
          }, error => {
            this.logger.error("PaymentHistoryService--getPolicyList Adapter calling error:" + JSON.stringify(error));
            reject(error);
          });
        }
      } catch (e) {
        reject(e);
        this.logger.log("PaymentHistoryService--getPolicyList adapter calling catch error:" + JSON.stringify(e));
      }
    });
    this.logger.trace("PaymentHistoryService--getPolicyList--end");
    return promise;
  }
}
PaymentHistoryService.ɵfac = function PaymentHistoryService_Factory(t) {
  return new (t || PaymentHistoryService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](src_providers_utils_utils_service__WEBPACK_IMPORTED_MODULE_1__.UtilService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](src_providers_logger_service_logger_service__WEBPACK_IMPORTED_MODULE_2__.LoggerServiceProvider));
};
PaymentHistoryService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({
  token: PaymentHistoryService,
  factory: PaymentHistoryService.ɵfac
});

/***/ }),

/***/ 92126:
/*!****************************************************************!*\
  !*** ./src/app/pages/payment-records/paymentRecordsService.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PaymentRecordsService": () => (/* binding */ PaymentRecordsService)
/* harmony export */ });
/* harmony import */ var src_providers_utils_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/providers/utils/config */ 43485);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var src_providers_utils_utils_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/providers/utils/utils.service */ 30423);
/* harmony import */ var src_providers_logger_service_logger_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/providers/logger-service/logger-service */ 9999);




/*
  Generated class for the PaymentRecordsService .

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
class PaymentRecordsService {
  constructor(utils, logger) {
    this.utils = utils;
    this.logger = logger;
    this.logger.log("Get Payment Records service");
  }
  /** Get user policies **/
  getPaymentRecords(encryptedPolicyNo) {
    this.logger.trace("PaymentRecordsService--getPaymentRecords--start");
    let promise = new Promise((resolve, reject) => {
      try {
        var resourceRequest = new WLResourceRequest(src_providers_utils_config__WEBPACK_IMPORTED_MODULE_0__.ConfigProvider.getPaymentRecords, WLResourceRequest.GET);
        resourceRequest.setQueryParameter('params', "['" + encryptedPolicyNo + "','" + this.utils.getToken() + "']");
        resourceRequest.send().then(response => {
          resolve(response);
        }, error => {
          this.logger.error("PaymentRecordsService--getPaymentRecords Adapter calling error:" + JSON.stringify(error));
          reject(error);
        });
      } catch (e) {
        reject(e);
        this.logger.log("PaymentRecordsService--getPaymentRecords adapter calling catch error:" + JSON.stringify(e));
      }
    });
    this.logger.trace("PaymentRecordsService--getPaymentRecords--end");
    return promise;
  }
}
PaymentRecordsService.ɵfac = function PaymentRecordsService_Factory(t) {
  return new (t || PaymentRecordsService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](src_providers_utils_utils_service__WEBPACK_IMPORTED_MODULE_1__.UtilService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](src_providers_logger_service_logger_service__WEBPACK_IMPORTED_MODULE_2__.LoggerServiceProvider));
};
PaymentRecordsService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({
  token: PaymentRecordsService,
  factory: PaymentRecordsService.ɵfac
});

/***/ }),

/***/ 52991:
/*!*************************************************************************!*\
  !*** ./src/app/pages/payment-user-details/paymentUserDetailsService.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PaymentUserDetailsService": () => (/* binding */ PaymentUserDetailsService)
/* harmony export */ });
/* harmony import */ var src_providers_utils_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/providers/utils/config */ 43485);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var src_providers_utils_utils_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/providers/utils/utils.service */ 30423);
/* harmony import */ var src_providers_logger_service_logger_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/providers/logger-service/logger-service */ 9999);




/*
  Generated class for the getPaymentUserDetailsService.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
class PaymentUserDetailsService {
  constructor(utils, logger) {
    this.utils = utils;
    this.logger = logger;
    this.logger.log("Get Payment User Details service");
  }
  /** get details of the user whos is paying the amount **/
  getPaymentUserDetails(encryptedPolicyNo) {
    this.logger.trace("PaymentUserDetailsService--getPaymentUserDetails--start");
    let promise = new Promise((resolve, reject) => {
      try {
        var resourceRequest = new WLResourceRequest(src_providers_utils_config__WEBPACK_IMPORTED_MODULE_0__.ConfigProvider.getPaymentUserDetailsAdapterPath, WLResourceRequest.GET);
        let token = this.utils.getToken();
        resourceRequest.setQueryParameter('params', "['" + encryptedPolicyNo + "', '" + token + "']");
        resourceRequest.send().then(response => {
          resolve(response);
        }, error => {
          this.logger.error("PaymentUserDetailsService--getPaymentUserDetails Adapter calling error:" + JSON.stringify(error));
          reject(error);
        });
      } catch (e) {
        reject(e);
        this.logger.log("PaymentUserDetailsService--getPaymentUserDetails calling catch error:" + JSON.stringify(e));
      }
    });
    this.logger.trace("PaymentUserDetailsService--getPaymentUserDetails--end");
    return promise;
  }
  /** Method is used to get PaymentId.  In put areamets are ecrypted policy number, premium amount, email and phone number **/
  postPaymentUserDetails(encryptedPolicyNo, amount, email, phone) {
    this.logger.trace("PaymentUserDetailsService--postPaymentUserDetails--start");
    let os = "AOS";
    if (this.utils.getPlatform() == "ios") {
      os = "IOS";
    }
    let promise = new Promise((resolve, reject) => {
      try {
        let token = this.utils.getToken();
        let params = [encryptedPolicyNo, token, amount, email, phone, os];
        var resourceRequest = new WLResourceRequest(src_providers_utils_config__WEBPACK_IMPORTED_MODULE_0__.ConfigProvider.postPaymentUserDetailsAdapterPath, WLResourceRequest.POST);
        var data = {
          "params": JSON.stringify(params)
        };
        resourceRequest.sendFormParameters(data).then(response => {
          resolve(response);
        }, error => {
          this.logger.error("PaymentUserDetailsService--postPaymentUserDetails Adapter calling error:" + JSON.stringify(error));
          reject(error);
        });
      } catch (e) {
        reject(e);
        this.logger.log("PaymentUserDetailsService--postPaymentUserDetails calling catch error:" + JSON.stringify(e));
      }
    });
    this.logger.trace("PaymentUserDetailsService--postPaymentUserDetails--end");
    return promise;
  }
}
PaymentUserDetailsService.ɵfac = function PaymentUserDetailsService_Factory(t) {
  return new (t || PaymentUserDetailsService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](src_providers_utils_utils_service__WEBPACK_IMPORTED_MODULE_1__.UtilService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](src_providers_logger_service_logger_service__WEBPACK_IMPORTED_MODULE_2__.LoggerServiceProvider));
};
PaymentUserDetailsService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({
  token: PaymentUserDetailsService,
  factory: PaymentUserDetailsService.ɵfac
});

/***/ }),

/***/ 57791:
/*!****************************************************************!*\
  !*** ./src/app/pages/periodic-payout/periodicPayoutService.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GetPeriodicPayoutService": () => (/* binding */ GetPeriodicPayoutService)
/* harmony export */ });
/* harmony import */ var src_providers_utils_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/providers/utils/config */ 43485);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var src_providers_utils_utils_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/providers/utils/utils.service */ 30423);
/* harmony import */ var src_providers_logger_service_logger_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/providers/logger-service/logger-service */ 9999);




/*
  Generated class for the GetPeriodicPayoutService .

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
class GetPeriodicPayoutService {
  constructor(utils, logger) {
    this.utils = utils;
    this.logger = logger;
    this.logger.log("Get Periodic Payout List service");
  }
  /** Get user policies **/
  getPeriodicPayoutList(encryptedPolicyNo) {
    this.logger.trace("GetPeriodicPayoutService--getPeriodicPayoutList--start");
    let promise = new Promise((resolve, reject) => {
      try {
        var resourceRequest = new WLResourceRequest(src_providers_utils_config__WEBPACK_IMPORTED_MODULE_0__.ConfigProvider.getPeriodicPayoutlist, WLResourceRequest.GET);
        resourceRequest.setQueryParameter('params', "['" + encryptedPolicyNo + "','" + this.utils.getToken() + "']");
        resourceRequest.send().then(response => {
          resolve(response);
        }, error => {
          this.logger.error("GetPeriodicPayoutService--getPeriodicPayoutList Adapter calling error:" + JSON.stringify(error));
          reject(error);
        });
      } catch (e) {
        reject(e);
        this.logger.log("GetPeriodicPayoutService--getPeriodicPayoutList adapter calling catch error:" + JSON.stringify(e));
      }
    });
    this.logger.trace("GetPeriodicPayoutService--getPeriodicPayoutList--end");
    return promise;
  }
}
GetPeriodicPayoutService.ɵfac = function GetPeriodicPayoutService_Factory(t) {
  return new (t || GetPeriodicPayoutService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](src_providers_utils_utils_service__WEBPACK_IMPORTED_MODULE_1__.UtilService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](src_providers_logger_service_logger_service__WEBPACK_IMPORTED_MODULE_2__.LoggerServiceProvider));
};
GetPeriodicPayoutService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({
  token: GetPeriodicPayoutService,
  factory: GetPeriodicPayoutService.ɵfac
});

/***/ }),

/***/ 87108:
/*!**********************************************************************!*\
  !*** ./src/app/pages/photo-gallery-details/galleryDetailsService.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GetPhotoGalleryDetailsService": () => (/* binding */ GetPhotoGalleryDetailsService)
/* harmony export */ });
/* harmony import */ var src_providers_utils_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/providers/utils/config */ 43485);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);


/*
  Generated class for the UnitPriceListService.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
class GetPhotoGalleryDetailsService {
  constructor() {}
  /** Get Photo Gallery Details**/
  getPhotoGalleryDetails(galleryId) {
    // this.logger.trace("GetPhotoGalleryDetailsService--getPhotoGalleryDetails--start " );
    let promise = new Promise((resolve, reject) => {
      try {
        var resourceRequest = new WLResourceRequest(src_providers_utils_config__WEBPACK_IMPORTED_MODULE_0__.ConfigProvider.getPhotoGalleryDetail, WLResourceRequest.GET);
        resourceRequest.setQueryParameter('params', [galleryId]);
        resourceRequest.send().then(response => {
          resolve(response);
        }, error => {
          //   this.logger.error("GetPhotoGalleryDetailsService-- Adapter calling error:" + JSON.stringify(error));
          reject(error);
        });
      } catch (e) {
        // this.logger.log("GetPhotoGalleryDetailsService calling catch error:" + JSON.stringify(e));
        reject(e);
      }
    });
    // this.logger.trace("GetPhotoGalleryDetailsService--getPhotoGalleryDetails--end");
    return promise;
  }
}
GetPhotoGalleryDetailsService.ɵfac = function GetPhotoGalleryDetailsService_Factory(t) {
  return new (t || GetPhotoGalleryDetailsService)();
};
GetPhotoGalleryDetailsService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
  token: GetPhotoGalleryDetailsService,
  factory: GetPhotoGalleryDetailsService.ɵfac
});

/***/ }),

/***/ 71952:
/*!************************************************************!*\
  !*** ./src/app/pages/photo-gallery/photoGalleryService.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GetPhotoGalleryService": () => (/* binding */ GetPhotoGalleryService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 22560);

/*
  Generated class for the UnitPriceListService.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
class GetPhotoGalleryService {
  constructor() {}
  getPhotoGallery(pageNo) {
    let promise = new Promise((resolve, reject) => {
      try {
        var resourceRequest = new WLResourceRequest("/adapters/NewsRoom/getPhotoGalleries", WLResourceRequest.GET);
        resourceRequest.setQueryParameter('params', [pageNo]);
        resourceRequest.send().then(response => {
          resolve(response);
        }, error => {
          reject(error);
        });
      } catch (e) {
        reject(e);
      }
    });
    return promise;
  }
}
GetPhotoGalleryService.ɵfac = function GetPhotoGalleryService_Factory(t) {
  return new (t || GetPhotoGalleryService)();
};
GetPhotoGalleryService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
  token: GetPhotoGalleryService,
  factory: GetPhotoGalleryService.ɵfac
});

/***/ }),

/***/ 78785:
/*!************************************************************!*\
  !*** ./src/app/pages/plan-listing/getPolicyListService.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GetPolicyListService": () => (/* binding */ GetPolicyListService)
/* harmony export */ });
/* harmony import */ var src_providers_utils_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/providers/utils/config */ 43485);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var src_providers_utils_utils_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/providers/utils/utils.service */ 30423);
/* harmony import */ var src_providers_logger_service_logger_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/providers/logger-service/logger-service */ 9999);




/*
  Generated class for the GetPolicyListService.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
class GetPolicyListService {
  constructor(utils, logger) {
    this.utils = utils;
    this.logger = logger;
    this.logger.log("Get Plan listing service");
  }
  /** Get user policies **/
  getPolicyList(identityNo) {
    this.logger.trace("GetPolicyListService--getPolicyList--start");
    let promise = new Promise((resolve, reject) => {
      try {
        var resourceRequest = new WLResourceRequest(src_providers_utils_config__WEBPACK_IMPORTED_MODULE_0__.ConfigProvider.getPolicyList, WLResourceRequest.GET);
        resourceRequest.setQueryParameter('params', [identityNo, this.utils.getToken()]);
        resourceRequest.send().then(response => {
          resolve(response);
        }, error => {
          this.logger.error("GetPolicyListService--getPolicyList Adapter calling error:" + JSON.stringify(error));
          reject(error);
        });
      } catch (e) {
        reject(e);
        this.logger.log("GetPolicyListService--getPolicyList adapter calling catch error:" + JSON.stringify(e));
      }
    });
    this.logger.trace("GetPolicyListService--getPolicyList--end");
    return promise;
  }
}
GetPolicyListService.ɵfac = function GetPolicyListService_Factory(t) {
  return new (t || GetPolicyListService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](src_providers_utils_utils_service__WEBPACK_IMPORTED_MODULE_1__.UtilService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](src_providers_logger_service_logger_service__WEBPACK_IMPORTED_MODULE_2__.LoggerServiceProvider));
};
GetPolicyListService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({
  token: GetPolicyListService,
  factory: GetPolicyListService.ɵfac
});

/***/ }),

/***/ 10293:
/*!*****************************************************************!*\
  !*** ./src/app/pages/policy-details/getPolicyDetailsService.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GetPolicyDetailsService": () => (/* binding */ GetPolicyDetailsService)
/* harmony export */ });
/* harmony import */ var src_providers_utils_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/providers/utils/config */ 43485);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var src_providers_utils_utils_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/providers/utils/utils.service */ 30423);
/* harmony import */ var src_providers_logger_service_logger_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/providers/logger-service/logger-service */ 9999);




/*
  Generated class for the GetPolicyDetailsService .

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
class GetPolicyDetailsService {
  constructor(utils, logger) {
    this.utils = utils;
    this.logger = logger;
    this.logger.log("Get Policy Details Service ");
  }
  /** Get user policies **/
  getPolicyDetails(encryptedPolicyNo) {
    this.logger.trace("GetPolicyDetailsService--getPolicyDetails--start");
    let promise = new Promise((resolve, reject) => {
      try {
        var resourceRequest = new WLResourceRequest(src_providers_utils_config__WEBPACK_IMPORTED_MODULE_0__.ConfigProvider.getPolicyDetailsAdapterPath, WLResourceRequest.GET);
        resourceRequest.setQueryParameter('params', "['" + encryptedPolicyNo + "','" + this.utils.getToken() + "']");
        resourceRequest.send().then(response => {
          resolve(response);
        }, error => {
          this.logger.error("GetPolicyDetailsService--getPolicyDetails Adapter calling error:" + JSON.stringify(error));
          reject(error);
        });
      } catch (e) {
        reject(e);
        this.logger.log("GetPolicyDetailsService--getPolicyDetails adapter calling catch error:" + JSON.stringify(e));
      }
    });
    this.logger.trace("GetPolicyDetailsService--getPolicyDetails--end");
    return promise;
  }
}
GetPolicyDetailsService.ɵfac = function GetPolicyDetailsService_Factory(t) {
  return new (t || GetPolicyDetailsService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](src_providers_utils_utils_service__WEBPACK_IMPORTED_MODULE_1__.UtilService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](src_providers_logger_service_logger_service__WEBPACK_IMPORTED_MODULE_2__.LoggerServiceProvider));
};
GetPolicyDetailsService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({
  token: GetPolicyDetailsService,
  factory: GetPolicyDetailsService.ɵfac
});

/***/ }),

/***/ 85059:
/*!***********************************************************!*\
  !*** ./src/app/pages/profile/getProfileDetailsService.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GetProfileDetailsService": () => (/* binding */ GetProfileDetailsService)
/* harmony export */ });
/* harmony import */ var src_providers_utils_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/providers/utils/config */ 43485);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var src_providers_logger_service_logger_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/providers/logger-service/logger-service */ 9999);
/* harmony import */ var src_providers_utils_utils_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/providers/utils/utils.service */ 30423);





/*
  Generated class for the UnitPriceListService.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
class GetProfileDetailsService {
  constructor(logger, utils, config) {
    this.logger = logger;
    this.utils = utils;
    this.config = config;
  }
  /** Get user details **/
  getProfileDetails() {
    this.logger.trace("LoginService--getSecurePhrase--start");
    let promise = new Promise((resolve, reject) => {
      try {
        var resourceRequest = new WLResourceRequest(src_providers_utils_config__WEBPACK_IMPORTED_MODULE_0__.ConfigProvider.getProfileDetails, WLResourceRequest.GET);
        resourceRequest.setQueryParameter('params', [this.config.userInfo.encryptedUserId, this.config.userInfo.token]);
        resourceRequest.send().then(response => {
          resolve(response);
        }, error => {
          this.logger.error("LoginService--getSecurePhrase Adapter calling error:" + JSON.stringify(error));
          reject(error);
        });
      } catch (e) {
        reject(e);
        this.logger.log("LoginService--getSecurePhrase adapter calling catch error:" + JSON.stringify(e));
      }
    });
    this.logger.trace("LoginService--getSecurePhrase--end");
    return promise;
  }
  /**Upload Profile Picture */
  updateProfilePicture(picObj) {
    this.logger.error("GetProfileDetailsService--updateProfilePicture--start");
    let promise = new Promise((resolve, reject) => {
      try {
        var resourceRequest = new WLResourceRequest(src_providers_utils_config__WEBPACK_IMPORTED_MODULE_0__.ConfigProvider.updateProfileDetails, WLResourceRequest.POST);
        let params = [this.utils.getEncryptedUserId(), picObj, this.utils.getToken()];
        resourceRequest.setHeader("Content-Type", "application/x-www-form-urlencoded");
        var data = {
          "params": JSON.stringify(params)
        };
        resourceRequest.sendFormParameters(data).then(response => {
          resolve(response);
        }, error => {
          this.logger.error("GetProfileDetailsService--updateProfilePicture Adapter calling error:" + JSON.stringify(error));
          reject(error);
        });
      } catch (e) {
        reject(e);
        this.logger.log("GetProfileDetailsService--updateProfilePicture adapter calling catch error:" + JSON.stringify(e));
      }
    });
    this.logger.trace("GetProfileDetailsService--updateProfilePicture--end");
    return promise;
  }
  /** Unit Price LIst **/
  getUnitPriceList() {
    let promise = new Promise((resolve, reject) => {
      try {
        var resourceRequest = new WLResourceRequest("/adapters/UnitPrice/GetUnitPriceList", WLResourceRequest.GET);
        console.log(resourceRequest);
        resourceRequest.send().then(response => {
          resolve(response);
        }, error => {
          reject(error);
        });
      } catch (e) {
        reject(e);
      }
    });
    return promise;
  }
}
GetProfileDetailsService.ɵfac = function GetProfileDetailsService_Factory(t) {
  return new (t || GetProfileDetailsService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](src_providers_logger_service_logger_service__WEBPACK_IMPORTED_MODULE_1__.LoggerServiceProvider), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](src_providers_utils_utils_service__WEBPACK_IMPORTED_MODULE_2__.UtilService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](src_providers_utils_config__WEBPACK_IMPORTED_MODULE_0__.ConfigProvider));
};
GetProfileDetailsService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({
  token: GetProfileDetailsService,
  factory: GetProfileDetailsService.ɵfac
});

/***/ }),

/***/ 81770:
/*!***************************************************************************************!*\
  !*** ./src/app/pages/reset-pwd-with-personal-details/resetPasswordPersonalService.ts ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ResetPasswordPersonalService": () => (/* binding */ ResetPasswordPersonalService)
/* harmony export */ });
/* harmony import */ var src_providers_utils_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/providers/utils/config */ 43485);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var src_providers_utils_utils_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/providers/utils/utils.service */ 30423);
/* harmony import */ var src_providers_logger_service_logger_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/providers/logger-service/logger-service */ 9999);




class ResetPasswordPersonalService {
  constructor(utils, logger) {
    this.utils = utils;
    this.logger = logger;
  }
  resetPasswordPersonal(userId, identityNo, policyNo) {
    this.logger.trace(`ResetPasswordPersonalService--ResetPasswordPersonal--start
                    {userID  : ${userId}, identityNo : ${identityNo} , policyNo : ${policyNo} }`);
    let promise = new Promise((resolve, reject) => {
      try {
        var resourceRequest = new WLResourceRequest(src_providers_utils_config__WEBPACK_IMPORTED_MODULE_0__.ConfigProvider.ResetPasswordPersonal, WLResourceRequest.POST);
        var data = {
          "params": "['" + userId + "','" + identityNo + "', '" + policyNo + "']"
        };
        resourceRequest.sendFormParameters(data).then(response => {
          resolve(response);
        }, error => {
          this.logger.error("ResetPasswordPersonalService--ResetPasswordPersonal Adapter calling error:" + JSON.stringify(error));
          reject(error);
        });
      } catch (e) {
        reject(e);
        this.logger.log("ResetPasswordPersonalService--ResetPasswordPersonal calling catch error:" + JSON.stringify(e));
      }
    });
    this.logger.trace("ResetPasswordPersonalService--ResetPasswordPersonal--end");
    return promise;
  }
  /** Forgot Password Reset Password by Secret question **/
  resetPasswordSecret(userId, question, answer) {
    this.logger.trace(`ResetPasswordPersonalService--ResetPasswordSecret--start
                    {userID  : ${userId}, identityNo : ${question} , policyNo : ${answer} }`);
    let promise = new Promise((resolve, reject) => {
      try {
        var resourceRequest = new WLResourceRequest(src_providers_utils_config__WEBPACK_IMPORTED_MODULE_0__.ConfigProvider.ResetPasswordSecret, WLResourceRequest.POST);
        var data = {
          "params": "['" + userId + "','" + question + "', '" + answer + "']"
        };
        resourceRequest.sendFormParameters(data).then(response => {
          resolve(response);
        }, error => {
          this.logger.error("ResetPasswordPersonalService--ResetPasswordSecret Adapter calling error:" + JSON.stringify(error));
          reject(error);
        });
      } catch (e) {
        reject(e);
        this.logger.log("ResetPasswordPersonalService--ResetPasswordSecret calling catch error:" + JSON.stringify(e));
      }
    });
    this.logger.trace("ResetPasswordPersonalService--ResetPasswordSecret--end");
    return promise;
  }
}
ResetPasswordPersonalService.ɵfac = function ResetPasswordPersonalService_Factory(t) {
  return new (t || ResetPasswordPersonalService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](src_providers_utils_utils_service__WEBPACK_IMPORTED_MODULE_1__.UtilService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](src_providers_logger_service_logger_service__WEBPACK_IMPORTED_MODULE_2__.LoggerServiceProvider));
};
ResetPasswordPersonalService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({
  token: ResetPasswordPersonalService,
  factory: ResetPasswordPersonalService.ɵfac
});

/***/ }),

/***/ 86976:
/*!****************************************************************!*\
  !*** ./src/app/pages/service-history/serviceHistoryService.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ServiceHistroyService": () => (/* binding */ ServiceHistroyService)
/* harmony export */ });
/* harmony import */ var src_providers_utils_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/providers/utils/config */ 43485);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var src_providers_logger_service_logger_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/providers/logger-service/logger-service */ 9999);
/* harmony import */ var src_providers_utils_utils_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/providers/utils/utils.service */ 30423);




//declare var self;
/*
  Generated class for the NotificationService .

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
class ServiceHistroyService {
  constructor(logger, utils) {
    this.logger = logger;
    this.utils = utils;
    this.logger.log("NotificationService");
  }
  /** Get Notifications  **/
  getHistoryList(pageNo, policyNo, date) {
    this.logger.trace("NotificationService--getNotificationsList--start ");
    let promise = new Promise((resolve, reject) => {
      try {
        var resourceRequest = new WLResourceRequest(src_providers_utils_config__WEBPACK_IMPORTED_MODULE_0__.ConfigProvider.serviceHistoryAdapter + 'getHistoryList', WLResourceRequest.GET);
        resourceRequest.setQueryParameter('params', [this.utils.getToken(), pageNo, policyNo, date]);
        resourceRequest.send().then(response => {
          resolve(response);
        }, error => {
          this.logger.error("NotificationService-- Adapter calling error:" + JSON.stringify(error));
          reject(error);
        });
      } catch (e) {
        this.logger.log("NotificationService calling catch error:" + JSON.stringify(e));
        reject(e);
      }
    });
    this.logger.trace("NotificationService--getNotificationsList--end");
    return promise;
  }
  getHistoryDetails(id) {
    this.logger.trace("NotificationDetailsService--getNotificationsDetails--start ");
    let promise = new Promise((resolve, reject) => {
      try {
        var resourceRequest = new WLResourceRequest(src_providers_utils_config__WEBPACK_IMPORTED_MODULE_0__.ConfigProvider.serviceHistoryAdapter + 'getHistoryDetails', WLResourceRequest.GET);
        resourceRequest.setQueryParameter('params', [id, this.utils.getToken()]);
        resourceRequest.send().then(response => {
          resolve(response);
        }, error => {
          this.logger.error("NotificationDetailsService-- Adapter calling error:" + JSON.stringify(error));
          reject(error);
        });
      } catch (e) {
        this.logger.log("NotificationDetailsService calling catch error:" + JSON.stringify(e));
        reject(e);
      }
    });
    this.logger.trace("NotificationDetailsService--getNotificationsDetails--end");
    return promise;
  }
}
ServiceHistroyService.ɵfac = function ServiceHistroyService_Factory(t) {
  return new (t || ServiceHistroyService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](src_providers_logger_service_logger_service__WEBPACK_IMPORTED_MODULE_1__.LoggerServiceProvider), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](src_providers_utils_utils_service__WEBPACK_IMPORTED_MODULE_2__.UtilService));
};
ServiceHistroyService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({
  token: ServiceHistroyService,
  factory: ServiceHistroyService.ɵfac
});

/***/ }),

/***/ 71959:
/*!***********************************************************!*\
  !*** ./src/app/pages/sign-up/securityQuestionsService.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SecurityQuestionsService": () => (/* binding */ SecurityQuestionsService)
/* harmony export */ });
/* harmony import */ var src_providers_utils_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/providers/utils/config */ 43485);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var src_providers_utils_utils_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/providers/utils/utils.service */ 30423);
/* harmony import */ var src_providers_logger_service_logger_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/providers/logger-service/logger-service */ 9999);




class SecurityQuestionsService {
  //retryCount: number = 0;
  constructor(utils, logger) {
    this.utils = utils;
    this.logger = logger;
    this.logger.log("Get Security Questions service");
  }
  /** post registration check **/
  getSecurityQuestions() {
    this.logger.trace("SecurityQuestionsService--getSecurityQuestions--start");
    let promise = new Promise((resolve, reject) => {
      try {
        var resourceRequest = new WLResourceRequest(src_providers_utils_config__WEBPACK_IMPORTED_MODULE_0__.ConfigProvider.getSecurityQuestions, WLResourceRequest.GET);
        resourceRequest.send().then(response => {
          resolve(response);
        }, error => {
          this.logger.error("SecurityQuestionsService--getSecurityQuestions  Adapter calling error:" + JSON.stringify(error));
          reject(error);
        });
      } catch (e) {
        reject(e);
        this.logger.log("SecurityQuestionsService--getSecurityQuestions calling catch error:" + JSON.stringify(e));
      }
    });
    this.logger.trace("SecurityQuestionsService--getSecurityQuestions--end");
    return promise;
  }
  /** post registration check **/
  getSocialData() {
    this.logger.trace("SecurityQuestionsService--getSecurityQuestions--start");
    let promise = new Promise((resolve, reject) => {
      try {
        var resourceRequest = new WLResourceRequest(src_providers_utils_config__WEBPACK_IMPORTED_MODULE_0__.ConfigProvider.getSocialPlatfromList, WLResourceRequest.GET);
        resourceRequest.send().then(response => {
          resolve(response);
        }, error => {
          this.logger.error("SecurityQuestionsService--getSecurityQuestions  Adapter calling error:" + JSON.stringify(error));
          reject(error);
        });
      } catch (e) {
        reject(e);
        this.logger.log("SecurityQuestionsService--getSecurityQuestions calling catch error:" + JSON.stringify(e));
      }
    });
    this.logger.trace("SecurityQuestionsService--getSecurityQuestions--end");
    return promise;
  }
}
SecurityQuestionsService.ɵfac = function SecurityQuestionsService_Factory(t) {
  return new (t || SecurityQuestionsService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](src_providers_utils_utils_service__WEBPACK_IMPORTED_MODULE_1__.UtilService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](src_providers_logger_service_logger_service__WEBPACK_IMPORTED_MODULE_2__.LoggerServiceProvider));
};
SecurityQuestionsService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({
  token: SecurityQuestionsService,
  factory: SecurityQuestionsService.ɵfac
});

/***/ }),

/***/ 25171:
/*!**************************************************!*\
  !*** ./src/app/pages/sign-up/sign-up-service.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SignUpServiceProvider": () => (/* binding */ SignUpServiceProvider)
/* harmony export */ });
/* harmony import */ var src_providers_utils_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/providers/utils/config */ 43485);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var src_providers_utils_utils_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/providers/utils/utils.service */ 30423);
/* harmony import */ var src_providers_logger_service_logger_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/providers/logger-service/logger-service */ 9999);





/*
  Generated class for the SignUpServiceProvider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
class SignUpServiceProvider {
  constructor(utils, logger, config) {
    this.utils = utils;
    this.logger = logger;
    this.config = config;
  }
  /** post registration check **/
  postRegistartionCheck(IdentityNumber, PolicyNumber) {
    this.logger.trace('SignUpService--Post Registration Check--start');
    let promise = new Promise((resolve, reject) => {
      try {
        if (this.utils.isDeviceOnLine()) {
          var resourceRequest = new WLResourceRequest(src_providers_utils_config__WEBPACK_IMPORTED_MODULE_0__.ConfigProvider.postRegistrationCheck, WLResourceRequest.POST);
          var data = {
            params: "['" + IdentityNumber + "','" + PolicyNumber + "']"
          };
          resourceRequest.sendFormParameters(data).then(response => {
            resolve(response);
          }, error => {
            this.logger.error('SignUpService--Post Registration Check Adapter calling error:' + JSON.stringify(error));
            reject(error);
          });
        } else {
          this.utils.dissmisProgressLoader();
          this.utils.showAlert('Oops!!', 'Connection Failed,Please check your connection and try aagain!');
        }
      } catch (e) {
        reject(e);
        this.logger.log('SignUpService--Post Registration Check calling catch error:' + JSON.stringify(e));
      }
    });
    this.logger.trace('SignUpService--Post Registration Check--end');
    return promise;
  }
  /** post registration submit **/
  postRegistartionSubmit(IdentityNumber, PolicyNumber, Name, EmailAddress, Sourceofnews, SecurityQuestion, SecurityAnswer, SecurityWord, ReceiveENotification, TermsAndConditions) {
    let promise = new Promise((resolve, reject) => {
      try {
        if (this.utils.isDeviceOnLine()) {
          var resourceRequest = new WLResourceRequest(src_providers_utils_config__WEBPACK_IMPORTED_MODULE_0__.ConfigProvider.postRegistrationSubmit, WLResourceRequest.POST);
          var data = {
            params: "['" + IdentityNumber + "','" + PolicyNumber + "', '" + Name + "', '" + EmailAddress + "',  '" + Sourceofnews + "', '" + SecurityQuestion + "', '" + SecurityAnswer + "',  '" + SecurityWord + "','" + ReceiveENotification + "', '" + TermsAndConditions + "']"
          };
          resourceRequest.sendFormParameters(data).then(response => {
            resolve(response);
          }, error => {
            this.logger.error('SignUpService--Post Registration Submit Adapter calling error:' + JSON.stringify(error));
            reject(error);
          });
        }
      } catch (e) {
        reject(e);
        this.logger.log('SignUpService--Post Registration Submit calling catch error:' + JSON.stringify(e));
      }
    });
    // this.logger.trace('SignUpService--Post Registration Submit--end');
    return promise;
  }
  /** post ForgotPolicyNumber submit **/
  postForgotPolicyNumber(IdentityNumber, isRegisteredorNot, mobileOS) {
    this.logger.trace('ChangePasswordService--changePasswordService--start');
    let promise = new Promise((resolve, reject) => {
      try {
        var resourceRequest = new WLResourceRequest(src_providers_utils_config__WEBPACK_IMPORTED_MODULE_0__.ConfigProvider.getForgotPolicyNumberAdapterPath, WLResourceRequest.POST);
        var data = {
          params: "['" + IdentityNumber + "','" + isRegisteredorNot + "','" + mobileOS + "']"
        };
        resourceRequest.sendFormParameters(data).then(response => {
          resolve(response);
        }, error => {
          this.logger.error('ChangePasswordService--changePasswordService Adapter calling error:' + JSON.stringify(error));
          reject(error);
        });
      } catch (e) {
        reject(e);
        this.logger.log('ChangePasswordService--changePasswordService adapter calling catch error:' + JSON.stringify(e));
      }
    });
    this.logger.trace('ChangePasswordService--changePasswordService--end');
    return promise;
  }
}
SignUpServiceProvider.ɵfac = function SignUpServiceProvider_Factory(t) {
  return new (t || SignUpServiceProvider)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](src_providers_utils_utils_service__WEBPACK_IMPORTED_MODULE_1__.UtilService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](src_providers_logger_service_logger_service__WEBPACK_IMPORTED_MODULE_2__.LoggerServiceProvider), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](src_providers_utils_config__WEBPACK_IMPORTED_MODULE_0__.ConfigProvider));
};
SignUpServiceProvider.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({
  token: SignUpServiceProvider,
  factory: SignUpServiceProvider.ɵfac
});

/***/ }),

/***/ 75024:
/*!***********************************************************!*\
  !*** ./src/app/pages/success-popup/success-popup.page.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SuccessPopupPage": () => (/* binding */ SuccessPopupPage)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 94666);



function SuccessPopupPage_p_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.extraSecondLineForReinstatement);
  }
}
class SuccessPopupPage {
  constructor(navParams, modalController) {
    this.navParams = navParams;
    this.modalController = modalController;
    this.redirectionMsg = this.navParams.get('redirectionMsg');
    this.title = this.navParams.get('title');
    this.extraSecondLineForReinstatement = this.navParams.get('extraSecondLineForReinstatement');
  }
  goToHistory() {
    this.modalController.dismiss({
      pageName: "serviceHistoryPage"
    });
  }
  closeModal() {
    this.modalController.dismiss({
      pageName: "servicePage"
    });
  }
  /**
  * This method is used to dismiss the alert
  */
  dismiss() {
    this.modalController.dismiss();
  }
  ngOnInit() {
    console.log('ionViewDidLoad SuccessPopupPage');
  }
}
SuccessPopupPage.ɵfac = function SuccessPopupPage_Factory(t) {
  return new (t || SuccessPopupPage)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_1__.NavParams), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_1__.ModalController));
};
SuccessPopupPage.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: SuccessPopupPage,
  selectors: [["app-success-popup"]],
  decls: 15,
  vars: 3,
  consts: [["padding", ""], [1, "alert-title"], [4, "ngIf"], [3, "click"], ["text-right", "", 1, "buttons-container"]],
  template: function SuccessPopupPage_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ion-content", 0)(1, "h2", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, SuccessPopupPage_p_5_Template, 2, 1, "p", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Check your service request history ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SuccessPopupPage_Template_a_click_8_listener() {
        return ctx.goToHistory();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "here");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, ".");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "ion-footer")(12, "div", 4)(13, "button", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SuccessPopupPage_Template_button_click_13_listener() {
        return ctx.closeModal();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Ok");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.title);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.redirectionMsg);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.extraSecondLineForReinstatement);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, _ionic_angular__WEBPACK_IMPORTED_MODULE_1__.IonContent, _ionic_angular__WEBPACK_IMPORTED_MODULE_1__.IonFooter],
  styles: ["page-success-popup[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: rgba(0, 0, 0, 0.5);\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcGFnZXMvc3VjY2Vzcy1wb3B1cC9zdWNjZXNzLXBvcHVwLnBhZ2Uuc2NzcyIsIndlYnBhY2s6Ly8uLy4uLy4uLy4uL0FsbCUyMFByb2plY3RzL01hbGF5c2lhX0NsaWVudEFwcF9SZXZhbXAvU3VuQWNjZXNzX0lvbmljNl9SZXZhbXAvc3JjL2FwcC9wYWdlcy9zdWNjZXNzLXBvcHVwL3N1Y2Nlc3MtcG9wdXAucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNJO0VBQ0kseUJBQUE7QUNBUiIsInNvdXJjZXNDb250ZW50IjpbInBhZ2Utc3VjY2Vzcy1wb3B1cCB7XHJcbiAgICBwIHtcclxuICAgICAgICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjUpO1xyXG4gICAgfVxyXG59XHJcbiIsInBhZ2Utc3VjY2Vzcy1wb3B1cCBwIHtcbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41KTtcbn0iXSwic291cmNlUm9vdCI6IiJ9 */"]
});

/***/ }),

/***/ 86916:
/*!*********************************************************!*\
  !*** ./src/app/pages/unit-price/uniPriceListService.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UnitPriceListService": () => (/* binding */ UnitPriceListService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 22560);

/*
  Generated class for the UnitPriceListService.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
class UnitPriceListService {
  constructor() {}
  /** Unit Price LIst **/
  getUnitPriceList() {
    let promise = new Promise((resolve, reject) => {
      try {
        var resourceRequest = new WLResourceRequest("/adapters/UnitPrice/GetUnitPriceList", WLResourceRequest.GET);
        console.log(resourceRequest);
        resourceRequest.send().then(response => {
          resolve(response);
        }, error => {
          reject(error);
        });
      } catch (e) {
        reject(e);
      }
    });
    return promise;
  }
}
UnitPriceListService.ɵfac = function UnitPriceListService_Factory(t) {
  return new (t || UnitPriceListService)();
};
UnitPriceListService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
  token: UnitPriceListService,
  factory: UnitPriceListService.ɵfac
});

/***/ }),

/***/ 36833:
/*!********************************************************!*\
  !*** ./src/app/pages/update-card/updateCardService.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UpdateCardService": () => (/* binding */ UpdateCardService)
/* harmony export */ });
/* harmony import */ var src_providers_utils_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/providers/utils/config */ 43485);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var src_providers_utils_utils_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/providers/utils/utils.service */ 30423);
/* harmony import */ var src_providers_logger_service_logger_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/providers/logger-service/logger-service */ 9999);




//import { UpdateCardPage } from './update-card';
// @NgModule({
//   declarations: [
//     UpdateCardPage,
//   ],
//   imports: [
//     IonicPageModule.forChild(UpdateCardPage),
//   ],
// })
class UpdateCardService {
  constructor(utils, logger) {
    this.utils = utils;
    this.logger = logger;
    this.logger.log("updateAddressservice");
  }
  /** Adapter Call to update address **/
  updateCardDetails(data) {
    console.log("updateCardDetailsdata", data);
    this.logger.trace("updateCardDetailsService--updateCardDetails--start");
    let promise = new Promise((resolve, reject) => {
      try {
        var resourceRequest = new WLResourceRequest(src_providers_utils_config__WEBPACK_IMPORTED_MODULE_0__.ConfigProvider.updateCardAdapterPath, WLResourceRequest.GET);
        resourceRequest.setQueryParameter('params', [this.utils.getToken(), data]);
        resourceRequest.send().then(response => {
          resolve(response);
        }, error => {
          this.logger.error("updateCardDetailsService--updateCardDetails Adapter calling error:" + JSON.stringify(error));
          reject(error);
        });
      } catch (e) {
        reject(e);
        this.logger.log("updateCardDetailsService--updateCardDetails adapter calling catch error:" + JSON.stringify(e));
      }
    });
    this.logger.trace("updateCardDetailsService--updateCardDetails--end");
    return promise;
  }
  getPolicyListForcardUpdate(identityNo) {
    this.logger.trace("GetPolicyListService--getPolicyList--start");
    let cardVal = true;
    let promise = new Promise((resolve, reject) => {
      try {
        var resourceRequest = new WLResourceRequest(src_providers_utils_config__WEBPACK_IMPORTED_MODULE_0__.ConfigProvider.getPolicyList, WLResourceRequest.GET);
        resourceRequest.setQueryParameter('params', [identityNo, this.utils.getToken(), cardVal]);
        resourceRequest.send().then(response => {
          resolve(response);
        }, error => {
          this.logger.error("GetPolicyListService--getPolicyList Adapter calling error:" + JSON.stringify(error));
          reject(error);
        });
      } catch (e) {
        reject(e);
        this.logger.log("GetPolicyListService--getPolicyList adapter calling catch error:" + JSON.stringify(e));
      }
    });
    this.logger.trace("GetPolicyListService--getPolicyList--end");
    return promise;
  }
  /**Adapter call to get Staticdata  */
  getStaticdata() {
    this.logger.trace("updateCardDetailsService--getStaticdata--start");
    let promise = new Promise((resolve, reject) => {
      try {
        var resourceRequest = new WLResourceRequest(src_providers_utils_config__WEBPACK_IMPORTED_MODULE_0__.ConfigProvider.bankStaticDataAdapterPath, WLResourceRequest.GET);
        resourceRequest.setQueryParameter('params', "['" + this.utils.getToken() + "']");
        resourceRequest.send().then(response => {
          resolve(response);
        }, error => {
          this.logger.error("updateCardDetailsService--getStaticdata Adapter calling error:" + JSON.stringify(error));
          reject(error);
        });
      } catch (e) {
        reject(e);
        this.logger.log("updateCardDetailsService--getStaticdata adapter calling catch error:" + JSON.stringify(e));
      }
    });
    this.logger.trace("updateCardDetailsService--getStaticdata--end");
    return promise;
  }
}
UpdateCardService.ɵfac = function UpdateCardService_Factory(t) {
  return new (t || UpdateCardService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](src_providers_utils_utils_service__WEBPACK_IMPORTED_MODULE_1__.UtilService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](src_providers_logger_service_logger_service__WEBPACK_IMPORTED_MODULE_2__.LoggerServiceProvider));
};
UpdateCardService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({
  token: UpdateCardService,
  factory: UpdateCardService.ɵfac
});

/***/ }),

/***/ 99730:
/*!*************************************************************************!*\
  !*** ./src/app/pages/update-details-popup/update-details-popup.page.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UpdateDetailsPopupPage": () => (/* binding */ UpdateDetailsPopupPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var src_providers_utils_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/providers/utils/config */ 43485);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! date-fns */ 86712);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! date-fns */ 86527);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/platform-browser */ 34497);
/* harmony import */ var _awesome_cordova_plugins_document_picker_ngx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @awesome-cordova-plugins/document-picker/ngx */ 46992);
/* harmony import */ var src_providers_utils_utils_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/providers/utils/utils.service */ 30423);
/* harmony import */ var _awesome_cordova_plugins_camera_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @awesome-cordova-plugins/camera/ngx */ 82543);
/* harmony import */ var _ionic_native_base64_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/base64/ngx */ 89604);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @ngx-translate/core */ 38699);
/* harmony import */ var _ionic_native_file_path_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/file-path/ngx */ 74375);
/* harmony import */ var _ionic_native_file_chooser_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/file-chooser/ngx */ 86786);
/* harmony import */ var _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic-native/file/ngx */ 12358);
/* harmony import */ var _awesome_cordova_plugins_device_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @awesome-cordova-plugins/device/ngx */ 74701);
/* harmony import */ var _awesome_cordova_plugins_chooser_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @awesome-cordova-plugins/chooser/ngx */ 82576);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/common */ 94666);




















const _c0 = ["Content"];
function UpdateDetailsPopupPage_div_7_ion_datetime_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "ion-datetime", 23, 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("ionChange", function UpdateDetailsPopupPage_div_7_ion_datetime_11_Template_ion_datetime_ionChange_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r16);
      const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵreference"](1);
      const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r15.dateChanged(_r14.value));
    })("ionCancel", function UpdateDetailsPopupPage_div_7_ion_datetime_11_Template_ion_datetime_ionCancel_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r16);
      const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r17.showPicker = false);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](2, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpropertyInterpolate"]("max", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind2"](2, 2, ctx_r10.today, "yyyy-MM-dd"));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("value", ctx_r10.dateValue);
  }
}
function UpdateDetailsPopupPage_div_7_ion_grid_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "ion-grid", 25)(1, "ion-row", 26)(2, "ion-col")(3, "ion-item", 27)(4, "ion-input", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function UpdateDetailsPopupPage_div_7_ion_grid_18_Template_ion_input_click_4_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r21);
      const i_r19 = restoredCtx.index;
      const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r20.chooseCameraOptions(i_r19, "UpdatDetailPopupForm"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](6, "ion-icon", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function UpdateDetailsPopupPage_div_7_ion_grid_18_Template_ion_icon_click_6_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r21);
      const i_r19 = restoredCtx.index;
      const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r22.chooseCameraOptions(i_r19, "UpdatDetailPopupForm"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](7, "ion-icon", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function UpdateDetailsPopupPage_div_7_ion_grid_18_Template_ion_icon_click_7_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r21);
      const i_r19 = restoredCtx.index;
      const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r23.removeAttachmentField(i_r19, "UpdatDetailPopupForm"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()()()();
  }
  if (rf & 2) {
    const i_r19 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("formGroupName", i_r19);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](5, 3, "clms_submison_house.plcHldr_uploadDoc"));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("disabled", true);
  }
}
function UpdateDetailsPopupPage_div_7_div_19_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](2, 1, "clms_submison_house.err_uploadDocReq"), " ");
  }
}
function UpdateDetailsPopupPage_div_7_ion_button_21_Template(rf, ctx) {
  if (rf & 1) {
    const _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "ion-button", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function UpdateDetailsPopupPage_div_7_ion_button_21_Template_ion_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r25);
      const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r24.addNewAttachmentField("UpdatDetailPopupForm"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1, " Add More");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("disabled", ctx_r13.UpdatDetailPopupForm.controls.attachments.controls[ctx_r13.UpdatDetailPopupForm.controls.attachments.length - 1].controls.name.hasError("required") || ctx_r13.UpdatDetailPopupForm.controls.attachments.length == 5);
  }
}
function UpdateDetailsPopupPage_div_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div")(1, "ion-label", 11)(2, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](3, " Date of Birth : ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](4, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](5, " *");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](6, "ion-item", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function UpdateDetailsPopupPage_div_7_Template_ion_item_click_6_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r27);
      const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r26.showPicker = !ctx_r26.showPicker);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](7, "ion-label", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](8, " Select DoB");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](9, "ion-text", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](11, UpdateDetailsPopupPage_div_7_ion_datetime_11_Template, 3, 5, "ion-datetime", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](12, "div", 17)(13, "ion-label", 11)(14, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](15, "Upload Document:");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](16, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](17, " *");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](18, UpdateDetailsPopupPage_div_7_ion_grid_18_Template, 8, 5, "ion-grid", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](19, UpdateDetailsPopupPage_div_7_div_19_Template, 3, 3, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](20, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](21, UpdateDetailsPopupPage_div_7_ion_button_21_Template, 2, 1, "ion-button", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](22, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](23, "Note: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](24, "ul")(25, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](26, "Upload NRIC/Passport/Birth Cert/ Official Document");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](27, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](28, "Changes will be applied to all polices");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](ctx_r0.formattdString);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r0.showPicker);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngForOf", ctx_r0.UpdatDetailPopupForm.controls.attachments.controls);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r0.UpdatDetailPopupForm.controls.attachments.controls[ctx_r0.UpdatDetailPopupForm.controls.attachments.length - 1].controls.name.hasError("required") && ctx_r0.UpdatDetailPopupForm.controls.attachments.controls[ctx_r0.UpdatDetailPopupForm.controls.attachments.length - 1].controls.name.touched);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", !ctx_r0.UpdatDetailPopupForm.controls.attachments.controls[0].controls.name.hasError("required"));
  }
}
function UpdateDetailsPopupPage_div_8_ion_select_option_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "ion-select-option", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const type_r31 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("value", type_r31);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](type_r31.Text);
  }
}
function UpdateDetailsPopupPage_div_8_div_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](1, "ion-input", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
}
function UpdateDetailsPopupPage_div_8_div_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div")(1, "span", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](2, "Please Enter Race");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
  }
}
const _c1 = function () {
  return {
    "cssClass": "mycomponent-wider-popover"
  };
};
function UpdateDetailsPopupPage_div_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r34 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div")(1, "ion-label", 11)(2, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](4, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](5, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](6, "div", 33)(7, "ion-select", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("ngModelChange", function UpdateDetailsPopupPage_div_8_Template_ion_select_ngModelChange_7_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r34);
      const ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r33.raceSelect = $event);
    })("ionChange", function UpdateDetailsPopupPage_div_8_Template_ion_select_ionChange_7_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r34);
      const ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r35.onRaceChange(ctx_r35.raceSelect));
    })("open", function UpdateDetailsPopupPage_div_8_Template_ion_select_open_7_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r34);
      const ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r36.changeJunkChar("ng-option-label"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](8, UpdateDetailsPopupPage_div_8_ion_select_option_8_Template, 2, 2, "ion-select-option", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](9, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](10, UpdateDetailsPopupPage_div_8_div_10_Template, 2, 0, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](11, UpdateDetailsPopupPage_div_8_div_11_Template, 3, 0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](12, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](13, "Note: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](14, "ul")(15, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](16, "Changes will be applied to all polices");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"]("", ctx_r1.popupTitle, ": ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("interfaceOptions", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpureFunction0"](8, _c1))("searchable", false)("ngModel", ctx_r1.raceSelect)("clearable", false);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngForOf", ctx_r1.typeOfRace);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r1.raceSelect && ctx_r1.raceSelect.Code == "OTH");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r1.UpdatDetailPopupForm.get("extraRaceText").hasError("required") && ctx_r1.UpdatDetailPopupForm.get("extraRaceText").touched && ctx_r1.UpdatDetailPopupForm.value["name_of_race"].Value == "OTH");
  }
}
function UpdateDetailsPopupPage_div_9_ion_select_option_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "ion-select-option", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const type_r42 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("value", type_r42);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](type_r42.Name);
  }
}
function UpdateDetailsPopupPage_div_9_div_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](1, "ion-input", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
}
function UpdateDetailsPopupPage_div_9_ion_grid_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r47 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "ion-grid", 47)(1, "ion-row", 26)(2, "ion-col")(3, "ion-item", 27)(4, "ion-input", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function UpdateDetailsPopupPage_div_9_ion_grid_16_Template_ion_input_click_4_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r47);
      const i_r45 = restoredCtx.index;
      const ctx_r46 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r46.chooseCameraOptions(i_r45, "UpdatDetailPopupForm"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](6, "ion-icon", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function UpdateDetailsPopupPage_div_9_ion_grid_16_Template_ion_icon_click_6_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r47);
      const i_r45 = restoredCtx.index;
      const ctx_r48 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r48.chooseCameraOptions(i_r45, "UpdatDetailPopupForm"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](7, "ion-icon", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function UpdateDetailsPopupPage_div_9_ion_grid_16_Template_ion_icon_click_7_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r47);
      const i_r45 = restoredCtx.index;
      const ctx_r49 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r49.removeAttachmentField(i_r45, "UpdatDetailPopupForm"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()()()();
  }
  if (rf & 2) {
    const i_r45 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("formGroupName", i_r45);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](5, 3, "clms_submison_house.plcHldr_uploadDoc"));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("disabled", true);
  }
}
function UpdateDetailsPopupPage_div_9_div_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 48)(1, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](3, 1, "clms_submison_house.err_uploadDocReq"));
  }
}
function UpdateDetailsPopupPage_div_9_button_19_Template(rf, ctx) {
  if (rf & 1) {
    const _r51 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "button", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function UpdateDetailsPopupPage_div_9_button_19_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r51);
      const ctx_r50 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r50.addNewAttachmentField("UpdatDetailPopupForm"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1, " Add More");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("disabled", ctx_r41.UpdatDetailPopupForm.controls.attachments.controls[ctx_r41.UpdatDetailPopupForm.controls.attachments.length - 1].controls.name.hasError("required") || ctx_r41.UpdatDetailPopupForm.controls.attachments.length == 5);
  }
}
function UpdateDetailsPopupPage_div_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r53 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div")(1, "ion-label", 11)(2, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](4, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](5, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](6, "div", 33)(7, "ion-select", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("ngModelChange", function UpdateDetailsPopupPage_div_9_Template_ion_select_ngModelChange_7_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r53);
      const ctx_r52 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r52.nationalitySelect = $event);
    })("ionChange", function UpdateDetailsPopupPage_div_9_Template_ion_select_ionChange_7_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r53);
      const ctx_r54 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r54.onNationalityChange(ctx_r54.nationalitySelect));
    })("open", function UpdateDetailsPopupPage_div_9_Template_ion_select_open_7_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r53);
      const ctx_r55 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r55.changeJunkChar("ng-option-label"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](8, UpdateDetailsPopupPage_div_9_ion_select_option_8_Template, 2, 2, "ion-select-option", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](9, UpdateDetailsPopupPage_div_9_div_9_Template, 2, 0, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](10, "div", 42)(11, "ion-label", 11)(12, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](13, "Upload Document:");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](14, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](15, " *");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](16, UpdateDetailsPopupPage_div_9_ion_grid_16_Template, 8, 5, "ion-grid", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](17, UpdateDetailsPopupPage_div_9_div_17_Template, 4, 3, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](18, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](19, UpdateDetailsPopupPage_div_9_button_19_Template, 2, 1, "button", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](20, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](21, "Note: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](22, "ul")(23, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](24, "Upload NRIC/Passport/Birth Cert/ Official Document (Name the attachment with identity number)");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](25, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](26, "Changes will be applied to all polices");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"]("", ctx_r2.popupTitle, ":");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("interfaceOptions", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpureFunction0"](10, _c1))("searchable", false)("ngModel", ctx_r2.nationalitySelect)("clearable", false);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngForOf", ctx_r2.typeOfNationality);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r2.nationalitySelect && ctx_r2.nationalitySelect.Code == "OTH");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngForOf", ctx_r2.UpdatDetailPopupForm.controls.attachments.controls);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r2.UpdatDetailPopupForm.controls.attachments.controls[ctx_r2.UpdatDetailPopupForm.controls.attachments.length - 1].controls.name.hasError("required") && ctx_r2.UpdatDetailPopupForm.controls.attachments.controls[ctx_r2.UpdatDetailPopupForm.controls.attachments.length - 1].controls.name.touched);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", !ctx_r2.UpdatDetailPopupForm.controls.attachments.controls[0].controls.name.hasError("required"));
  }
}
function UpdateDetailsPopupPage_div_10_ion_select_option_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "ion-select-option", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const type_r59 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("value", type_r59);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](type_r59.Title);
  }
}
function UpdateDetailsPopupPage_div_10_ion_input_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](0, "ion-input", 51);
  }
}
function UpdateDetailsPopupPage_div_10_div_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div")(1, "span", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](2, "Please Enter Occupation");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
  }
}
function UpdateDetailsPopupPage_div_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r62 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div")(1, "ion-label", 11)(2, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](4, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](5, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](6, "div", 33)(7, "ion-select", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("ngModelChange", function UpdateDetailsPopupPage_div_10_Template_ion_select_ngModelChange_7_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r62);
      const ctx_r61 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r61.occupationSelect = $event);
    })("ionChange", function UpdateDetailsPopupPage_div_10_Template_ion_select_ionChange_7_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r62);
      const ctx_r63 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r63.onOccupationChange(ctx_r63.occupationSelect));
    })("open", function UpdateDetailsPopupPage_div_10_Template_ion_select_open_7_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r62);
      const ctx_r64 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r64.changeJunkChar("ng-option-label"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](8, UpdateDetailsPopupPage_div_10_ion_select_option_8_Template, 2, 2, "ion-select-option", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](9, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](10, UpdateDetailsPopupPage_div_10_ion_input_10_Template, 1, 0, "ion-input", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](11, UpdateDetailsPopupPage_div_10_div_11_Template, 3, 0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](12, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](13, "Note: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](14, "ul")(15, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](16, "Changes will be applied to all polices");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", ctx_r3.popupTitle, ":");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("interfaceOptions", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpureFunction0"](8, _c1))("searchable", false)("ngModel", ctx_r3.occupationSelect)("clearable", false);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngForOf", ctx_r3.typeOfOccupation);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r3.occupationSelect && ctx_r3.occupationSelect.Class == "OTH");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r3.UpdatDetailPopupForm.get("extraOccupationText").hasError("required") && ctx_r3.UpdatDetailPopupForm.get("extraOccupationText").touched && ctx_r3.UpdatDetailPopupForm.value["name_of_occupation"].Class == "OTH");
  }
}
function UpdateDetailsPopupPage_div_11_ion_select_option_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "ion-select-option", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const type_r66 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("value", type_r66);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](type_r66.Title);
  }
}
function UpdateDetailsPopupPage_div_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r69 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div")(1, "ion-label", 11)(2, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](4, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](5, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](6, "div", 33)(7, "ion-select", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("ngModelChange", function UpdateDetailsPopupPage_div_11_Template_ion_select_ngModelChange_7_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r69);
      const ctx_r68 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r68.businessSelect = $event);
    })("ionChange", function UpdateDetailsPopupPage_div_11_Template_ion_select_ionChange_7_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r69);
      const ctx_r70 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r70.onBusinessChange(ctx_r70.businessSelect));
    })("open", function UpdateDetailsPopupPage_div_11_Template_ion_select_open_7_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r69);
      const ctx_r71 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r71.changeJunkChar("ng-option-label"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](8, UpdateDetailsPopupPage_div_11_ion_select_option_8_Template, 2, 2, "ion-select-option", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](9, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](10, "Note: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](11, "ul")(12, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](13, "Changes will be applied to all polices");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"]("", ctx_r4.popupTitle, ":");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("interfaceOptions", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpureFunction0"](6, _c1))("searchable", false)("ngModel", ctx_r4.businessSelect)("clearable", false);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngForOf", ctx_r4.typeOfBusiness);
  }
}
function UpdateDetailsPopupPage_div_12_div_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 40)(1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](3, 1, "emailisrequired"));
  }
}
function UpdateDetailsPopupPage_div_12_div_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 40)(1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](3, 1, "entervaidemail"));
  }
}
function UpdateDetailsPopupPage_div_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div")(1, "ion-label", 11)(2, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](4, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](5, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](6, "ion-item", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](7, "ion-input", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](8, UpdateDetailsPopupPage_div_12_div_8_Template, 4, 3, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](9, UpdateDetailsPopupPage_div_12_div_9_Template, 4, 3, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](10, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](11, "Note: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](12, "ul")(13, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](14, "Changes will be applied to all polices");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"]("", ctx_r5.popupTitle, ":");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r5.UpdatDetailPopupForm.get("emailAddress").hasError("required") && ctx_r5.UpdatDetailPopupForm.get("emailAddress").touched);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r5.UpdatDetailPopupForm.get("emailAddress").hasError("pattern") && !ctx_r5.UpdatDetailPopupForm.get("emailAddress").hasError("required"));
  }
}
function UpdateDetailsPopupPage_div_13_div_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 59)(1, "span", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](3, 1, "update_phone.err_mobileNumberReq"));
  }
}
function UpdateDetailsPopupPage_div_13_div_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 59)(1, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](3, 1, "update_phone.err_invalidMno"));
  }
}
function UpdateDetailsPopupPage_div_13_div_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 59)(1, "span", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](3, 1, "update_phone.err_mobileNumberLengthReq"));
  }
}
function UpdateDetailsPopupPage_div_13_div_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 59)(1, "span", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](3, 1, "update_phone.err_mobileNumberLengthReq"));
  }
}
function UpdateDetailsPopupPage_div_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div")(1, "ion-label", 11)(2, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](3, "Mobile Number:");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](4, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](5, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](6, "ion-item", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](7, "ion-input", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](8, UpdateDetailsPopupPage_div_13_div_8_Template, 4, 3, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](9, UpdateDetailsPopupPage_div_13_div_9_Template, 4, 3, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](10, UpdateDetailsPopupPage_div_13_div_10_Template, 4, 3, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](11, UpdateDetailsPopupPage_div_13_div_11_Template, 4, 3, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](12, "ion-label", 11)(13, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](14, "Office Number:");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](15, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](16, "ion-item", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](17, "ion-input", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](18, "ion-label", 11)(19, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](20, "Home Number:");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](21, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](22, "ion-item", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](23, "ion-input", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](24, "ion-label", 11)(25, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](26, "Other Numbers:");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](27, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](28, "ion-item", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](29, "ion-input", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](30, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](31, "Note: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](32, "ul")(33, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](34, "Changes will be applied to all polices");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r6.UpdatDetailPopupForm.get("mobileNumber").hasError("required") && ctx_r6.UpdatDetailPopupForm.get("mobileNumber").touched);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r6.UpdatDetailPopupForm.get("mobileNumber").hasError("validateNonZeroVal"));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r6.UpdatDetailPopupForm.get("mobileNumber").hasError("minlength") && ctx_r6.UpdatDetailPopupForm.get("mobileNumber").touched);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r6.UpdatDetailPopupForm.get("mobileNumber").hasError("maxlength") && ctx_r6.UpdatDetailPopupForm.get("mobileNumber").touched);
  }
}
function UpdateDetailsPopupPage_div_14_div_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div")(1, "span", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](3, 1, "update_address.err_adrsLine1Req"));
  }
}
function UpdateDetailsPopupPage_div_14_div_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div")(1, "span", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](3, 1, "update_address.err_adrsLine1LengthReq"));
  }
}
function UpdateDetailsPopupPage_div_14_div_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div")(1, "span", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](3, 1, "update_address.err_addressReq"));
  }
}
function UpdateDetailsPopupPage_div_14_span_31_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
}
function UpdateDetailsPopupPage_div_14_div_35_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div")(1, "span", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](3, 1, "update_address.err_postalCodeReq"));
  }
}
function UpdateDetailsPopupPage_div_14_ion_select_option_44_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "ion-select-option", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const country_r87 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("value", country_r87);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](country_r87.Name);
  }
}
function UpdateDetailsPopupPage_div_14_div_45_ion_select_option_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "ion-select-option", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const state_r90 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("value", state_r90.Code);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](state_r90.Name);
  }
}
function UpdateDetailsPopupPage_div_14_div_45_Template(rf, ctx) {
  if (rf & 1) {
    const _r93 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div")(1, "ion-label", 11)(2, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](5, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](6, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](7, "div", 33)(8, "ion-select", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("ngModelChange", function UpdateDetailsPopupPage_div_14_div_45_Template_ion_select_ngModelChange_8_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r93);
      const ctx_r92 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r92.stateSelect = $event);
    })("open", function UpdateDetailsPopupPage_div_14_div_45_Template_ion_select_open_8_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r93);
      const ctx_r94 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r94.changeJunkChar("ng-option-label"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](9, UpdateDetailsPopupPage_div_14_div_45_ion_select_option_9_Template, 2, 2, "ion-select-option", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r84 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](4, 6, "update_address.state"));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("interfaceOptions", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpureFunction0"](8, _c1))("searchable", false)("ngModel", ctx_r84.stateSelect)("clearable", false);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngForOf", ctx_r84.StatesList);
  }
}
function UpdateDetailsPopupPage_div_14_ion_item_50_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "ion-item", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](1, "ion-input", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](2, 1, "update_address.state"));
  }
}
function UpdateDetailsPopupPage_div_14_div_51_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div")(1, "span", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](3, 1, "update_address.err_stateReq"));
  }
}
function UpdateDetailsPopupPage_div_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r96 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div")(1, "ion-label", 11)(2, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](5, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](6, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](7, "ion-item", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](8, "ion-input", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](9, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](10, UpdateDetailsPopupPage_div_14_div_10_Template, 4, 3, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](11, UpdateDetailsPopupPage_div_14_div_11_Template, 4, 3, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](12, UpdateDetailsPopupPage_div_14_div_12_Template, 4, 3, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](13, "ion-label", 11)(14, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](16, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](17, "ion-item", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](18, "ion-input", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](19, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](20, "ion-label", 11)(21, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](23, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](24, "ion-item", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](25, "ion-input", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](26, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](27, "ion-label", 11)(28, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](29);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](30, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](31, UpdateDetailsPopupPage_div_14_span_31_Template, 2, 0, "span", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](32, "ion-item", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](33, "ion-input", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](34, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](35, UpdateDetailsPopupPage_div_14_div_35_Template, 4, 3, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](36, "ion-label", 11)(37, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](38);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](39, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](40, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](41, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](42, "div", 33)(43, "ion-select", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("ngModelChange", function UpdateDetailsPopupPage_div_14_Template_ion_select_ngModelChange_43_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r96);
      const ctx_r95 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r95.countrySelect = $event);
    })("ionChange", function UpdateDetailsPopupPage_div_14_Template_ion_select_ionChange_43_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r96);
      const ctx_r97 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r97.onCountryChange());
    })("open", function UpdateDetailsPopupPage_div_14_Template_ion_select_open_43_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r96);
      const ctx_r98 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r98.changeJunkChar("ng-option-label"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](44, UpdateDetailsPopupPage_div_14_ion_select_option_44_Template, 2, 2, "ion-select-option", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](45, UpdateDetailsPopupPage_div_14_div_45_Template, 10, 9, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](46, "ion-label", 11)(47, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](48);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](49, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](50, UpdateDetailsPopupPage_div_14_ion_item_50_Template, 3, 3, "ion-item", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](51, UpdateDetailsPopupPage_div_14_div_51_Template, 4, 3, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](52, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](53, "Note: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](54, "ul")(55, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](56, "Changes will be applied to all polices");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](4, 23, "update_address.adrsLine1"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](9, 25, "update_address.adrsLine1"));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r7.UpdatDetailPopupForm.get("addressLine1").hasError("required") && ctx_r7.UpdatDetailPopupForm.get("addressLine1").touched);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r7.UpdatDetailPopupForm.get("addressLine1").hasError("minlength") && ctx_r7.UpdatDetailPopupForm.get("addressLine1").touched);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r7.UpdatDetailPopupForm.get("addressLine1").hasError("maxlength") && ctx_r7.UpdatDetailPopupForm.get("addressLine1").touched);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](16, 27, "update_address.adrsLine2"));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](19, 29, "update_address.adrsLine2"));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](23, 31, "update_address.adrsLine3"));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](26, 33, "update_address.adrsLine3"));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](30, 35, "update_address.postalCode"));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r7.showMalaysianStates);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](34, 37, "update_address.postalCode"));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r7.UpdatDetailPopupForm.get("postalCode").hasError("required") && ctx_r7.UpdatDetailPopupForm.get("postalCode").touched);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](39, 39, "update_address.country"));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("interfaceOptions", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpureFunction0"](43, _c1))("searchable", false)("ngModel", ctx_r7.countrySelect)("clearable", false);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngForOf", ctx_r7.countryList);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r7.showMalaysianStates);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](49, 41, "update_address.state"));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", !ctx_r7.showMalaysianStates);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r7.UpdatDetailPopupForm.get("state").hasError("required") && ctx_r7.UpdatDetailPopupForm.get("state").touched && !ctx_r7.showMalaysianStates);
  }
}
function UpdateDetailsPopupPage_div_15_div_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div")(1, "span", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](3, 1, "update_address.err_adrsLine1Req"));
  }
}
function UpdateDetailsPopupPage_div_15_div_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div")(1, "span", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](3, 1, "update_address.err_adrsLine1LengthReq"));
  }
}
function UpdateDetailsPopupPage_div_15_div_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div")(1, "span", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](3, 1, "update_address.err_addressReq"));
  }
}
function UpdateDetailsPopupPage_div_15_span_31_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
}
function UpdateDetailsPopupPage_div_15_div_35_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div")(1, "span", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](3, 1, "update_address.err_postalCodeReq"));
  }
}
function UpdateDetailsPopupPage_div_15_div_44_ion_select_option_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "ion-select-option", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const state_r111 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("value", state_r111.Code);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](state_r111.Name);
  }
}
function UpdateDetailsPopupPage_div_15_div_44_Template(rf, ctx) {
  if (rf & 1) {
    const _r114 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div")(1, "ion-label", 11)(2, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](5, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](6, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](7, "div", 33)(8, "ion-select", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("ngModelChange", function UpdateDetailsPopupPage_div_15_div_44_Template_ion_select_ngModelChange_8_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r114);
      const ctx_r113 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r113.stateSelect = $event);
    })("open", function UpdateDetailsPopupPage_div_15_div_44_Template_ion_select_open_8_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r114);
      const ctx_r115 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r115.changeJunkChar("ng-option-label"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](9, UpdateDetailsPopupPage_div_15_div_44_ion_select_option_9_Template, 2, 2, "ion-select-option", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r104 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](4, 6, "update_address.state"));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("interfaceOptions", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpureFunction0"](8, _c1))("searchable", false)("ngModel", ctx_r104.stateSelect)("clearable", false);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngForOf", ctx_r104.StatesList);
  }
}
function UpdateDetailsPopupPage_div_15_div_45_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div")(1, "span", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](3, 1, "update_address.err_stateReq"));
  }
}
function UpdateDetailsPopupPage_div_15_ion_label_46_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "ion-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](3, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](4, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](2, 1, "update_card_details.selectPlan"));
  }
}
function UpdateDetailsPopupPage_div_15_div_47_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div")(1, "span", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](3, 1, "update_card_details.err_selectPlan"));
  }
}
function UpdateDetailsPopupPage_div_15_div_48_ion_row_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r119 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "ion-row")(1, "ion-col", 71)(2, "ion-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](4, "ion-col", 71)(5, "ion-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](7, "ion-col", 75)(8, "ion-checkbox", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("ionChange", function UpdateDetailsPopupPage_div_15_div_48_ion_row_11_Template_ion_checkbox_ionChange_8_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r119);
      const policy_r117 = restoredCtx.$implicit;
      const ctx_r118 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r118.onSelectPolicy(policy_r117, false));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const policy_r117 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](policy_r117.policyNumber);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](policy_r117.planName);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("checked", policy_r117.checked);
  }
}
function UpdateDetailsPopupPage_div_15_div_48_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div")(1, "ion-row")(2, "ion-col", 71)(3, "ion-label", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](6, "ion-col", 71)(7, "ion-label", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](9, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](10, "ion-col", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](11, UpdateDetailsPopupPage_div_15_div_48_ion_row_11_Template, 9, 3, "ion-row", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r108 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](5, 3, "update_card_details.policyNumber"));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](9, 5, "update_card_details.planName"));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngForOf", ctx_r108.policyList);
  }
}
function UpdateDetailsPopupPage_div_15_div_49_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1, "Note: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](2, "ul")(3, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](4, "Changes will be applied to the selected polices");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
  }
}
function UpdateDetailsPopupPage_div_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div")(1, "ion-label", 11)(2, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](5, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](6, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](7, "ion-item", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](8, "ion-input", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](9, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](10, UpdateDetailsPopupPage_div_15_div_10_Template, 4, 3, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](11, UpdateDetailsPopupPage_div_15_div_11_Template, 4, 3, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](12, UpdateDetailsPopupPage_div_15_div_12_Template, 4, 3, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](13, "ion-label", 11)(14, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](16, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](17, "ion-item", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](18, "ion-input", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](19, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](20, "ion-label", 11)(21, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](23, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](24, "ion-item", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](25, "ion-input", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](26, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](27, "ion-label", 11)(28, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](29);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](30, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](31, UpdateDetailsPopupPage_div_15_span_31_Template, 2, 0, "span", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](32, "ion-item", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](33, "ion-input", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](34, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](35, UpdateDetailsPopupPage_div_15_div_35_Template, 4, 3, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](36, "ion-label", 11)(37, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](38);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](39, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](40, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](41, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](42, "ion-item", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](43, "ion-input", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](44, UpdateDetailsPopupPage_div_15_div_44_Template, 10, 9, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](45, UpdateDetailsPopupPage_div_15_div_45_Template, 4, 3, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](46, UpdateDetailsPopupPage_div_15_ion_label_46_Template, 5, 3, "ion-label", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](47, UpdateDetailsPopupPage_div_15_div_47_Template, 4, 3, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](48, UpdateDetailsPopupPage_div_15_div_48_Template, 12, 7, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](49, UpdateDetailsPopupPage_div_15_div_49_Template, 5, 0, "div", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](4, 20, "update_address.adrsLine1"));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](9, 22, "update_address.adrsLine1"));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r8.UpdatDetailPopupForm.get("addressLine1").hasError("required") && ctx_r8.UpdatDetailPopupForm.get("addressLine1").touched);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r8.UpdatDetailPopupForm.get("addressLine1").hasError("minlength") && ctx_r8.UpdatDetailPopupForm.get("addressLine1").touched);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r8.UpdatDetailPopupForm.get("addressLine1").hasError("maxlength") && ctx_r8.UpdatDetailPopupForm.get("addressLine1").touched);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](16, 24, "update_address.adrsLine2"));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](19, 26, "update_address.adrsLine2"));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](23, 28, "update_address.adrsLine3"));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](26, 30, "update_address.adrsLine3"));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](30, 32, "update_address.postalCode"));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r8.showMalaysianStates);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](34, 34, "update_address.postalCode"));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r8.UpdatDetailPopupForm.get("postalCode").hasError("required") && ctx_r8.UpdatDetailPopupForm.get("postalCode").touched);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](39, 36, "update_address.country"));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r8.showMalaysianStates);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r8.UpdatDetailPopupForm.get("state").hasError("required") && ctx_r8.UpdatDetailPopupForm.get("state").touched && !ctx_r8.showMalaysianStates);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r8.showSelectPolicyOption);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r8.UpdatDetailPopupForm.get("selectPolicy").length <= 0 && ctx_r8.UpdatDetailPopupForm.valid && ctx_r8.showSelectPolicyOption);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r8.policyList.length > 0 && ctx_r8.showSelectPolicyOption);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r8.policyList.length > 0 && ctx_r8.showSelectPolicyOption);
  }
}
function UpdateDetailsPopupPage_p_22_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "p", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1, "You have some unsaved Changes!");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
}
class UpdateDetailsPopupPage {
  constructor(navParams, _DomSanitizer, modalController, docPicker, utils, actionSheetCtrl, camera, base64, alertCtrl, translate, config, filePath, fileChooser, file, formbuilder, device, chooser) {
    this.navParams = navParams;
    this._DomSanitizer = _DomSanitizer;
    this.modalController = modalController;
    this.docPicker = docPicker;
    this.utils = utils;
    this.actionSheetCtrl = actionSheetCtrl;
    this.camera = camera;
    this.base64 = base64;
    this.alertCtrl = alertCtrl;
    this.translate = translate;
    this.config = config;
    this.filePath = filePath;
    this.fileChooser = fileChooser;
    this.file = file;
    this.formbuilder = formbuilder;
    this.device = device;
    this.chooser = chooser;
    this.today = Date.now();
    this.showPicker = false;
    this.dateValue = (0,date_fns__WEBPACK_IMPORTED_MODULE_11__["default"])(new Date(), 'yyyy-MM-dd');
    this.crntValue = {};
    this.typeOfRace = [];
    this.typeOfNationality = [];
    this.typeOfOccupation = [];
    this.typeOfBusiness = [];
    this.countryList = [];
    this.StatesList = [];
    this.showMalaysianStates = true;
    this.mimeTypes = {
      jpg: 'image/jpeg',
      jpeg: 'image/jpeg',
      png: 'image/png',
      pdf: 'application/pdf',
      zip: 'application/zip'
    };
    this.cAddressValid = true;
    /**
    * This method is used to provide options to user to select either camera or gallery to upload files.
    */
    this.dummycamera = function (i, formName) {
      this.fileIndex = i;
      this.selectedFormName = formName;
      var filedataObj = {};
      filedataObj['name'] = "Attachment.jpg";
      filedataObj['base64string'] = "AttachmentBase64";
      this[this.selectedFormName].controls.attachments.controls[this.fileIndex].controls['name'].markAsDirty();
      this[this.selectedFormName].controls.attachments.controls[this.fileIndex].controls['base64string'].markAsDirty();
      this[this.selectedFormName].controls.attachments.controls[this.fileIndex].controls['name'].setValue("Attachment.jpg");
      this[this.selectedFormName].controls.attachments.controls[this.fileIndex].controls['base64string'].setValue("AttachmentBase64");
    };
    // this.renderer.setElementClass(viewCtrl.pageRef().nativeElement, 'my-popup', true);
    this.typeOfRace = this.config.personalDataDropDown['Race'];
    this.typeOfNationality = this.config.personalDataDropDown['Country'];
    this.typeOfOccupation = this.config.personalDataDropDown['Occupation'];
    this.typeOfBusiness = this.config.personalDataDropDown['NatureOfBusiness'];
    this.countryList = this.config.personalDataDropDown['Country'];
    this.StatesList = this.config.personalDataDropDown['MalaysiaStates'];
    this.policyList = this.config.policyList;
  }
  ionViewWillEnter() {}
  focusInputField() {
    // document.querySelector(".ng-option").innerHTML.replace(/&amp;/g, '');
    // document.getElementsByClassName("ng-option").data.replace(/^\s\s*/, '').replace(/\s\s*$/, '');
    // for(var i=0; i<this.typeOfBusiness.length; i++ ){
    //  this.typeOfBusiness[i].Title.replace(/&amp;/g, '&');
    // }
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
    let formattdString = (0,date_fns__WEBPACK_IMPORTED_MODULE_11__["default"])((0,date_fns__WEBPACK_IMPORTED_MODULE_12__["default"])(event), 'd MMM yyyy');
    let dstring = formattdString.split('T')[0];
    this.dateValue = (0,date_fns__WEBPACK_IMPORTED_MODULE_11__["default"])(new Date(dstring), 'yyyy-MM-dd');
    this.formattdString = this.dateFormat(this.dateValue);
  }
  ngOnInit() {
    // setTimeout(() => {
    //  this.getNatureOfBusiness();
    // }, 500);
    this.currentFieldName = this.navParams.get('clickedfieldName');
    this.crntValue = this.navParams.get('fieldValue');
    this.popupTitle = this.navParams.get('popupTitle');
    this.selectedPolicyNumber = this.navParams.get('selectedPolicyNumber');
    this.UpdatDetailPopupForm = this.formbuilder.group({});
    if (this.currentFieldName === 'dateOfBirth') {
      if (this.crntValue['edited'] && this.crntValue['value'] && this.crntValue['dateOfBirthUpload'].length) {
        this.UpdatDetailPopupForm.setControl("DOBVal", new _angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormControl(this.crntValue['value'], [_angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.required]));
        this.UpdatDetailPopupForm.setControl("attachments", this.formbuilder.array([]));
        this.createExistingAttachmentObj(this.crntValue['dateOfBirthUpload']);
      } else {
        this.UpdatDetailPopupForm.setControl("DOBVal", new _angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormControl("", [_angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.required]));
        this.UpdatDetailPopupForm.setControl("attachments", this.formbuilder.array([this.initAttchmentFields()]));
      }
    }
    if (this.currentFieldName === 'race') {
      if (this.crntValue['edited'] && this.crntValue['value']) {
        let raceType = {
          "Value": this.crntValue['raceCode'],
          "Text": this.crntValue['value']
        };
        this.UpdatDetailPopupForm.setControl("name_of_race", new _angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormControl(raceType, [_angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.required]));
        this.UpdatDetailPopupForm.setControl("race_Code", new _angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormControl(this.crntValue['raceCode'], [_angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.required]));
        this.UpdatDetailPopupForm.setControl("extraRaceText", new _angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormControl(this.crntValue['extraRaceText'], []));
        this.raceSelect = raceType;
        this.onRaceChange(raceType);
      } else {
        this.UpdatDetailPopupForm.setControl("name_of_race", new _angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormControl("", [_angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.required]));
        this.UpdatDetailPopupForm.setControl("race_Code", new _angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormControl("", [_angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.required]));
        this.UpdatDetailPopupForm.setControl("extraRaceText", new _angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormControl("", []));
      }
    }
    if (this.currentFieldName === 'nationality') {
      if (this.crntValue['edited'] && this.crntValue['value'] && this.crntValue['nationalityUpload'].length) {
        let nationalityType = {
          "Code": this.crntValue['nationalityCode'],
          "Name": this.crntValue['value']
        };
        this.UpdatDetailPopupForm.setControl("name_of_nationality", new _angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormControl(nationalityType, [_angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.required]));
        this.UpdatDetailPopupForm.setControl("nationality_Code", new _angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormControl(this.crntValue['nationalityCode'], [_angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.required]));
        this.UpdatDetailPopupForm.setControl("attachments", this.formbuilder.array([]));
        this.createExistingAttachmentObj(this.crntValue['nationalityUpload']);
        this.UpdatDetailPopupForm.setControl("extraNationalityText", new _angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormControl(this.crntValue['extraNationalityText'], []));
        this.nationalitySelect = nationalityType;
        this.onNationalityChange(nationalityType);
      } else {
        this.UpdatDetailPopupForm.setControl("name_of_nationality", new _angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormControl("", [_angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.required]));
        this.UpdatDetailPopupForm.setControl("nationality_Code", new _angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormControl("", [_angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.required]));
        this.UpdatDetailPopupForm.setControl("attachments", this.formbuilder.array([this.initAttchmentFields()]));
        this.UpdatDetailPopupForm.setControl("extraNationalityText", new _angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormControl("", []));
      }
    }
    if (this.currentFieldName === 'occupation') {
      if (this.crntValue['edited'] && this.crntValue['value']) {
        let occupationType = {
          "Class": this.crntValue['occupationCode'],
          "Title": this.crntValue['value']
        };
        this.UpdatDetailPopupForm.setControl("name_of_occupation", new _angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormControl(occupationType, [_angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.required]));
        this.UpdatDetailPopupForm.setControl("occupation_Code", new _angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormControl(this.crntValue['occupationCode'], [_angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.required]));
        this.UpdatDetailPopupForm.setControl("extraOccupationText", new _angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormControl(this.crntValue['extraOccupationText'], []));
        this.occupationSelect = occupationType;
        this.onOccupationChange(occupationType);
      } else {
        this.UpdatDetailPopupForm.setControl("name_of_occupation", new _angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormControl("", [_angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.required]));
        this.UpdatDetailPopupForm.setControl("occupation_Code", new _angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormControl("", [_angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.required]));
        this.UpdatDetailPopupForm.setControl("extraOccupationText", new _angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormControl("", []));
      }
    }
    if (this.currentFieldName === 'natureOfBusiness') {
      if (this.crntValue['edited'] && this.crntValue['value']) {
        let businessType = {
          "Title": this.crntValue['value']
        };
        this.UpdatDetailPopupForm.setControl("name_of_business", new _angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormControl(businessType, [_angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.required]));
        this.businessSelect = businessType;
        this.onBusinessChange(businessType);
      } else {
        this.UpdatDetailPopupForm.setControl("name_of_business", new _angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormControl("", [_angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.required]));
      }
    }
    if (this.currentFieldName === 'emailAddress') {
      let EMAIL_PATTERN = src_providers_utils_config__WEBPACK_IMPORTED_MODULE_0__.ConfigProvider.EMAIL_PATTERN;
      if (this.crntValue['edited'] && this.crntValue['value']) {
        this.UpdatDetailPopupForm.setControl("emailAddress", new _angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormControl(this.crntValue['value'], [_angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.pattern(EMAIL_PATTERN)]));
      } else {
        this.UpdatDetailPopupForm.setControl("emailAddress", new _angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormControl("", [_angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.pattern(EMAIL_PATTERN)]));
      }
    }
    if (this.currentFieldName === 'contactNumbers') {
      if (this.crntValue['edited'] && this.crntValue['value']) {
        this.UpdatDetailPopupForm.setControl("mobileNumber", new _angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormControl(this.crntValue['value']['mobileNumber'].substring(2), [_angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.minLength(8), _angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.maxLength(20)]));
        this.UpdatDetailPopupForm.setControl("officeNumber", new _angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormControl(this.crntValue['value']['officeNumber'], []));
        this.UpdatDetailPopupForm.setControl("homeNumber", new _angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormControl(this.crntValue['value']['homeNumber'], []));
        this.UpdatDetailPopupForm.setControl("otherNumber", new _angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormControl(this.crntValue['value']['otherNumber'], []));
      } else {
        this.UpdatDetailPopupForm.setControl("mobileNumber", new _angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.required, this.utils.validateNonZeroVal, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.minLength(8), _angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.maxLength(20)]));
        this.UpdatDetailPopupForm.setControl("officeNumber", new _angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormControl('', []));
        this.UpdatDetailPopupForm.setControl("homeNumber", new _angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormControl('', []));
        this.UpdatDetailPopupForm.setControl("otherNumber", new _angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormControl('', []));
      }
    }
    if (this.currentFieldName === 'permanentAddress') {
      if (this.crntValue['edited'] && this.crntValue['value']) {
        if (!(this.crntValue['value']['countryFieldVal']['Code'] == 'MY')) {
          this.showMalaysianStates = false;
        }
        this.UpdatDetailPopupForm.setControl("addressLine1", new _angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormControl(this.crntValue['value']['addressLine1'], [_angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.minLength(4), _angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.maxLength(200)]));
        this.UpdatDetailPopupForm.setControl("addressLine2", new _angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormControl(this.crntValue['value']['addressLine2'], []));
        this.UpdatDetailPopupForm.setControl("addressLine3", new _angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormControl(this.crntValue['value']['addressLine3'], []));
        this.UpdatDetailPopupForm.setControl("postalCode", new _angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormControl('', []));
        this.UpdatDetailPopupForm.setControl("country", new _angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormControl("", [_angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.required]));
        this.UpdatDetailPopupForm.setControl("state", new _angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormControl('', []));
        this.countrySelect = this.countryList[this.getIndex(this.countryList, this.crntValue['value']['countryFieldVal'], 'Code')];
        this.UpdatDetailPopupForm.controls['country'].setValue(this.countryList[this.getIndex(this.countryList, this.crntValue['value']['countryFieldVal'], 'Code')], {
          onlySelf: true
        });
        this.onCountryChange(this.crntValue['value']['state'], this.crntValue['value']['postalCode']);
      } else {
        this.UpdatDetailPopupForm.setControl("addressLine1", new _angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.minLength(4), _angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.maxLength(200)]));
        this.UpdatDetailPopupForm.setControl("addressLine2", new _angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormControl('', []));
        this.UpdatDetailPopupForm.setControl("addressLine3", new _angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormControl('', []));
        this.UpdatDetailPopupForm.setControl("postalCode", new _angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormControl('', []));
        this.UpdatDetailPopupForm.setControl("country", new _angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.required]));
        this.UpdatDetailPopupForm.setControl("state", new _angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormControl('', []));
        let MyObj = {
          Code: "MY",
          Name: "Malaysia"
        };
        this.countrySelect = this.countryList[this.getIndex(this.countryList, MyObj, 'Code')];
        this.UpdatDetailPopupForm.controls['country'].setValue(this.countryList[this.getIndex(this.countryList, MyObj, 'Code')]);
        this.onCountryChange('', '');
      }
    }
    if (this.currentFieldName === 'correspondenceAddress') {
      if (this.selectedPolicyNumber) {
        this.showSelectPolicyOption = false;
        this.cAddressValid = true;
      } else {
        this.showSelectPolicyOption = true;
        this.cAddressValid = false;
      }
      if (this.crntValue['edited'] && this.crntValue) {
        if (!(this.crntValue['countryFieldVal']['Code'] == 'MY')) {
          this.showMalaysianStates = false;
        }
        this.UpdatDetailPopupForm.setControl("addressLine1", new _angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormControl(this.crntValue['addressLine1'], [_angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.minLength(4), _angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.maxLength(200)]));
        this.UpdatDetailPopupForm.setControl("addressLine2", new _angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormControl(this.crntValue['addressLine2'], []));
        this.UpdatDetailPopupForm.setControl("addressLine3", new _angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormControl(this.crntValue['addressLine3'], []));
        this.UpdatDetailPopupForm.setControl("postalCode", new _angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormControl('', []));
        this.UpdatDetailPopupForm.setControl("country", new _angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormControl("", [_angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.required]));
        this.UpdatDetailPopupForm.setControl("state", new _angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormControl('', []));
        this.UpdatDetailPopupForm.setControl("selectPolicy", this.formbuilder.array([]));
        this.countrySelect = this.countryList[this.getIndex(this.countryList, this.crntValue['country'], 'Code')];
        this.UpdatDetailPopupForm.controls['country'].setValue(this.countryList[this.getIndex(this.countryList, this.crntValue['country'], 'Code')], {
          onlySelf: true
        });
        this.onCountryChange(this.crntValue['state'], this.crntValue['postalCode']);
        this.crntValue['selectPolicy'].forEach(policyNumber => {
          this.policyList.forEach(prePolicy => {
            if (prePolicy.policyNumber == policyNumber) {
              prePolicy['checked'] = false;
              this.onSelectPolicy(prePolicy, true);
            }
          });
        });
      } else {
        this.UpdatDetailPopupForm.setControl("addressLine1", new _angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.minLength(4), _angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.maxLength(200)]));
        this.UpdatDetailPopupForm.setControl("addressLine2", new _angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormControl('', []));
        this.UpdatDetailPopupForm.setControl("addressLine3", new _angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormControl('', []));
        this.UpdatDetailPopupForm.setControl("postalCode", new _angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormControl('', []));
        this.UpdatDetailPopupForm.setControl("country", new _angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.required]));
        this.UpdatDetailPopupForm.setControl("state", new _angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormControl('', []));
        this.UpdatDetailPopupForm.setControl("selectPolicy", this.formbuilder.array([]));
        if (this.selectedPolicyNumber) {
          const policyFormArray = this.UpdatDetailPopupForm.controls.selectPolicy;
          policyFormArray.push(new _angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormControl(this.selectedPolicyNumber));
        }
        let MyObj = {
          Code: "MY",
          Name: "Malaysia"
        };
        this.countrySelect = this.countryList[this.getIndex(this.countryList, MyObj, 'Code')];
        this.UpdatDetailPopupForm.controls['country'].setValue(this.countryList[this.getIndex(this.countryList, MyObj, 'Code')]);
        this.onCountryChange('', '');
      }
    }
  }
  onSelectPolicy(policy, updated) {
    console.log('policy', policy);
    console.log('updated', updated);
    const policyFormArray = this.UpdatDetailPopupForm.controls.selectPolicy;
    if (policy.checked) {
      policy.checked = false;
      let index = policyFormArray.controls.findIndex(x => x.value == policy.policyNumber);
      policyFormArray.removeAt(index); //incase of checkbox unselect
      this.UpdatDetailPopupForm.controls.selectPolicy.markAsDirty();
      if (policyFormArray.length == 0) {
        this.cAddressValid = false;
      } else {
        this.cAddressValid = true;
      }
    } else {
      policy.checked = true;
      policyFormArray.push(new _angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormControl(policy.policyNumber)); //incase of checkbox select
      if (!updated) {
        this.UpdatDetailPopupForm.controls.selectPolicy.markAsDirty();
      }
      this.cAddressValid = true;
    }
  }
  createExistingAttachmentObj(attachments) {
    attachments.forEach(attachment => {
      this.UpdatDetailPopupForm.controls.attachments.push(this.formbuilder.group({
        name: [attachment.name, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.required],
        base64string: [attachment.base64string]
      }));
    });
  }
  initAttchmentFields() {
    return this.formbuilder.group({
      name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.required],
      base64string: ['']
    });
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad UpdateDetailsPopupPage');
  }
  chooseCameraOptions(i, formName) {
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
            this.openCamera_ios(this.camera.PictureSourceType.CAMERA, 0, 'camera');
          }
        }, {
          text: open_gallery,
          handler: () => {
            // this.openCameraGallery(this.camera.PictureSourceType.PHOTOLIBRARY, 0);
            this.openCamera_ios(this.camera.PictureSourceType.PHOTOLIBRARY, 0, 'gallary');
          }
        }, {
          text: cancel,
          role: 'cancel',
          handler: () => {
            this[this.selectedFormName].controls.attachments.controls[this.fileIndex].controls['name'].markAsTouched();
          }
        }];
      } else {
        modalSelectionButtons = [{
          text: open_cam,
          handler: () => {
            // this.openCameraGallery(this.camera.PictureSourceType.CAMERA, 0);
            this.openCamera_ios(this.camera.PictureSourceType.CAMERA, 0, 'camera');
          }
        }, {
          text: open_gallery,
          handler: () => {
            // this.openCameraGallery(this.camera.PictureSourceType.PHOTOLIBRARY, 0);
            this.openCamera_ios(this.camera.PictureSourceType.PHOTOLIBRARY, 0, 'gallary');
          }
        }, {
          text: select_pdf,
          handler: () => {
            this.openCameraGallery_ios();
          }
        }, {
          text: cancel,
          role: 'cancel',
          handler: () => {
            this[this.selectedFormName].controls.attachments.controls[this.fileIndex].controls['name'].markAsTouched();
          }
        }];
      }
    } else {
      modalSelectionButtons = [{
        text: open_cam,
        handler: () => {
          // this.openCameraGallery(this.camera.PictureSourceType.CAMERA, 0);
          this.openCamera_ios(this.camera.PictureSourceType.CAMERA, 0, 'camera');
        }
      }, {
        text: open_gallery,
        handler: () => {
          //  this.openCameraGallery(this.camera.PictureSourceType.PHOTOLIBRARY, 2);
          this.openCamera_ios(this.camera.PictureSourceType.PHOTOLIBRARY, 0, 'gallary');
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
          this[this.selectedFormName].controls.attachments.controls[this.fileIndex].controls['name'].markAsTouched();
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
        for (var key in this[this.selectedFormName].controls.attachments.value) {
          let ExistingFilename = this[this.selectedFormName].controls.attachments.controls[key].controls['name'].value;
          if (ExistingFilename == filename) {
            this.utils.presentToast(this.translate.instant('claim_submission.err_duplicateFile'));
            this[this.selectedFormName].controls.attachments.controls[this.fileIndex].controls['name'].markAsTouched();
            break;
          } else if (key == this.fileIndex) {
            if (data == 'camera') {
              imageData = this._DomSanitizer.bypassSecurityTrustUrl("data:image/jpeg;base64," + imageData);
              console.log('CameraimageData', imageData);
              this.addAttachment(filename, imageData);
              ;
            } else if (data == 'gallary') {
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
  openCameraGallery(source, acceptpdf) {
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
        for (var key in this[this.selectedFormName].controls.attachments.value) {
          let ExistingFilename = this[this.selectedFormName].controls.attachments.controls[key].controls['name'].value;
          if (ExistingFilename == filename) {
            this.utils.presentToast(this.translate.instant('claim_submission.err_duplicateFile'));
            this[this.selectedFormName].controls.attachments.controls[this.fileIndex].controls['name'].markAsTouched();
            break;
          } else if (key == this.fileIndex) {
            if (acceptpdf == 2) {
              console.log('GalleryimageData', imageData);
              this.getBase64StringFromFilePath(imageData, filename, '');
            } else {
              console.log('CameraimageData', imageData);
              this.getBase64StringFromFilePath(imageData, filename, '');
            }
            // this.getBase64StringFromFilePath(imageData, filename, '');
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
  openCameraGallery_ios() {
    this.docPicker.getFile('all').then(uri => {
      if (this.utils.getPlatform() == 'ios') {
        uri = window.Ionic.normalizeURL(uri);
        //uri = uri.replace("file://","http://localhost:8080");
      }

      var filename = uri.split('/').pop();
      var fileext = uri.split('.').pop().toLowerCase();
      if (fileext == 'pdf') {
        this.getBase64StringFromFilePath(uri, filename, 'pdf');
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
    if (acceptpdf == 1) {
      this.chooser.getFile().then(file => (0,tslib__WEBPACK_IMPORTED_MODULE_14__.__awaiter)(this, void 0, void 0, function* () {
        let fileext = file.name.split('.').pop().toLowerCase();
        if (fileext == 'pdf') {
          for (var key in this[this.selectedFormName].controls.attachments.getRawValue()) {
            let ExistingFilename = this[this.selectedFormName].controls.attachments.controls[key].controls['name'].value;
            if (ExistingFilename == file.name) {
              this.utils.presentToast(this.translate.instant('claim_submission.err_duplicateFile'));
              this[this.selectedFormName].controls.attachments.controls[this.fileIndex].controls['name'].markAsTouched();
              break;
            } else if (key == this.fileIndex) {
              let flattenedBase64URI = yield this.utils.flattenPDF(file, 0);
              this.checkBase64Size(flattenedBase64URI, file.name);
            }
          }
        } else {
          var msg = this.translate.instant('claim_submission.select_only_pdf');
          this.utils.showAlert('', msg, false);
        }
        console.log(file ? file.name : 'canceled');
      })).catch(err => {
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
              for (var key in this[this.selectedFormName].controls.attachments.getRawValue()) {
                let ExistingFilename = this[this.selectedFormName].controls.attachments.controls[key].controls['name'].value;
                if (ExistingFilename == filename) {
                  this.utils.presentToast(this.translate.instant('claim_submission.err_duplicateFile'));
                  this[this.selectedFormName].controls.attachments.controls[this.fileIndex].controls['name'].markAsTouched();
                  break;
                } else if (key == this.fileIndex) {
                  this.getBase64StringFromFilePath(FilepathUrl, filename, '');
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
  /**
   * This method is used to get base64 string from file url
   */
  getBase64StringFromFilePath(filePath, filename, type) {
    if (type === 'pdf') {
      this.utils.getBase64FromUrl(filePath).then(result => (0,tslib__WEBPACK_IMPORTED_MODULE_14__.__awaiter)(this, void 0, void 0, function* () {
        let pdfBase64forIos = result;
        let flattenedBase64File = yield this.utils.flattenPDF(pdfBase64forIos, 1);
        this.checkBase64Size(flattenedBase64File, filename);
      }));
    } else {
      this.base64.encodeFile(filePath).then(base64File => {
        this.checkBase64Size(base64File, filename);
      }, err => {
        this.utils.dissmisProgressLoader();
        var msg = this.translate.instant('claim_submission.err_bas64');
        this.utils.showAlert("", msg);
      });
    }
  }
  addAttachment(fileName, Base64String) {
    var filedataObj = {};
    if (this.utils.getPlatform() == 'ios') {
      fileName = fileName.split('.').pop().toLowerCase();
      fileName = new Date().getTime() + '.' + fileName;
    }
    filedataObj['name'] = fileName;
    filedataObj['base64string'] = Base64String;
    this[this.selectedFormName].controls.attachments.controls[this.fileIndex].controls['name'].markAsDirty();
    this[this.selectedFormName].controls.attachments.controls[this.fileIndex].controls['base64string'].markAsDirty();
    this[this.selectedFormName].controls.attachments.controls[this.fileIndex].controls['name'].setValue(fileName);
    this[this.selectedFormName].controls.attachments.controls[this.fileIndex].controls['base64string'].setValue(Base64String);
    this.utils.dissmisProgressLoader();
  }
  addNewAttachmentField(formName) {
    const control = this[formName].controls.attachments;
    control.push(this.initAttchmentFields());
    setTimeout(() => {
      let offSetNoti = document.getElementById("AttachemnetDiv").offsetTop;
      //  this.content.scrollTo(0, offSetNoti);
    }, 500);
  }
  removeAttachmentField(i, formName) {
    if (this[formName].controls.attachments.length - 1 == 0) {
      this[formName].controls.attachments.controls[i].controls['name'].setValue("");
      this[formName].controls.attachments.controls[i].controls['name'].markAsDirty();
    } else {
      this[formName].controls.attachments.controls[i].controls['name'].markAsDirty();
      const control = this[formName].controls.attachments;
      control.removeAt(i);
      // this.filedata.splice(i, 1);
    }
  }
  /**
    *On chnage of Drop down, manage values
    */
  onRaceChange(raceType) {
    this.valueOther = false;
    this.changeJunkChar('ng-value-label');
    this.UpdatDetailPopupForm.controls['race_Code'].setValue(raceType.Value);
    if (raceType.Value == 'OTH') {
      this.valueOther = true;
      this.UpdatDetailPopupForm.controls['name_of_race'].setValue(this.typeOfRace[this.getIndex(this.typeOfRace, raceType, 'Value')], {
        onlySelf: true
      });
      this.UpdatDetailPopupForm.get('extraRaceText').setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.required]);
      this.raceSelect = this.typeOfRace[this.getIndex(this.typeOfRace, raceType, 'Value')];
    } else {
      this.UpdatDetailPopupForm.controls['name_of_race'].setValue(this.typeOfRace[this.getIndex(this.typeOfRace, raceType, 'Text')], {
        onlySelf: true
      });
      this.UpdatDetailPopupForm.get('extraRaceText').clearValidators();
      this.UpdatDetailPopupForm.controls['extraRaceText'].setValue("");
    }
  }
  onNationalityChange(nationalityType) {
    console.log('nationalityType', nationalityType);
    this.changeJunkChar('ng-value-label');
    this.UpdatDetailPopupForm.controls['nationality_Code'].setValue(nationalityType.Code);
    if (nationalityType.Code == 'OTH') {
      this.UpdatDetailPopupForm.controls['name_of_nationality'].setValue(this.typeOfNationality[this.getIndex(this.typeOfNationality, nationalityType, 'Code')], {
        onlySelf: true
      });
      this.UpdatDetailPopupForm.get('extraNationalityText').setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.required]);
      this.nationalitySelect = this.typeOfNationality[this.getIndex(this.typeOfNationality, nationalityType, 'Code')];
    } else {
      this.UpdatDetailPopupForm.controls['name_of_nationality'].setValue(this.typeOfNationality[this.getIndex(this.typeOfNationality, nationalityType, 'Name')], {
        onlySelf: true
      });
      this.UpdatDetailPopupForm.get('extraNationalityText').clearValidators();
      this.UpdatDetailPopupForm.controls['extraNationalityText'].setValue("");
      //this.UpdatDetailPopupForm.controls['extraRaceText'].markAsDirty();
    }
  }

  onOccupationChange(occupationType) {
    this.changeJunkChar('ng-value-label');
    this.UpdatDetailPopupForm.controls['occupation_Code'].setValue(occupationType.Class);
    if (occupationType.Class == 'OTH') {
      this.UpdatDetailPopupForm.controls['name_of_occupation'].setValue(this.typeOfOccupation[this.getIndex(this.typeOfOccupation, occupationType, 'Class')], {
        onlySelf: true
      });
      this.UpdatDetailPopupForm.get('extraOccupationText').setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.required]);
      this.occupationSelect = this.typeOfOccupation[this.getIndex(this.typeOfOccupation, occupationType, 'Class')];
    } else {
      this.UpdatDetailPopupForm.controls['name_of_occupation'].setValue(this.typeOfOccupation[this.getIndex(this.typeOfOccupation, occupationType, 'Title')], {
        onlySelf: true
      });
      this.UpdatDetailPopupForm.get('extraOccupationText').clearValidators();
      this.UpdatDetailPopupForm.controls['extraOccupationText'].setValue("");
    }
  }
  onBusinessChange(businessType) {
    this.changeJunkChar('ng-value-label');
    this.UpdatDetailPopupForm.controls['name_of_business'].setValue(this.typeOfBusiness[this.getIndex(this.typeOfBusiness, businessType, 'Title')], {
      onlySelf: true
    });
  }
  /**
   * To get the index of selected drop down value
   */
  getIndex(sampleArray, obj, propName) {
    const index = sampleArray.findIndex((element, index) => {
      if (element[propName] === obj[propName]) {
        return true;
      }
    });
    return index;
  }
  getStateIndex(sampleArray, value, propName) {
    const index = sampleArray.findIndex((element, index) => {
      if (element[propName] === value) {
        return true;
      }
    });
    return index;
  }
  /**
  * this method will call when country  changes
  */
  onCountryChange(stateValue, postalCode) {
    this.changeJunkChar('ng-value-label');
    if (this.UpdatDetailPopupForm.controls.country.value.Code == 'MY') {
      this.showMalaysianStates = true;
      this.UpdatDetailPopupForm.controls.postalCode.setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.required]);
      this.UpdatDetailPopupForm.controls.state.setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.required]);
      setTimeout(() => {
        if (this.UpdatDetailPopupForm.controls['state'].value) {
          this.UpdatDetailPopupForm.controls['state'].reset();
        } else {
          if (stateValue) {
            this.UpdatDetailPopupForm.controls['state'].setValue(stateValue);
            this.stateSelect = stateValue;
          }
        }
        if (this.UpdatDetailPopupForm.controls['postalCode'].value) {
          this.UpdatDetailPopupForm.controls['postalCode'].reset();
        } else {
          if (postalCode) this.UpdatDetailPopupForm.controls['postalCode'].setValue(postalCode);
        }
      }, 100);
    } else {
      this.showMalaysianStates = false;
      this.UpdatDetailPopupForm.controls.postalCode.setValidators([]);
      this.UpdatDetailPopupForm.controls.state.clearValidators();
      setTimeout(() => {
        if (this.UpdatDetailPopupForm.controls['state'].value) {
          this.UpdatDetailPopupForm.controls['state'].reset();
        } else {
          if (stateValue) {
            this.UpdatDetailPopupForm.controls['state'].setValue(stateValue);
            this.stateSelect = stateValue;
          }
        }
        if (this.UpdatDetailPopupForm.controls['postalCode'].value) {
          this.UpdatDetailPopupForm.controls['postalCode'].reset();
        } else {
          if (postalCode) {
            this.UpdatDetailPopupForm.controls['postalCode'].setValue(postalCode);
          } else {
            this.UpdatDetailPopupForm.controls['postalCode'].reset();
          }
        }
      }, 100);
    }
  }
  /**
  * Just to close the Modal
  */
  closeModal() {
    if (!this.UpdatDetailPopupForm.pristine && !this.showConfrimMsg) {
      this.showConfrimMsg = !this.showConfrimMsg;
    } else {
      this.showConfrimMsg = false;
      this.modalController.dismiss();
    }
  }
  /**
   * To close the modal on save
   */
  applyChanges() {
    let formData = JSON.parse(JSON.stringify(this.UpdatDetailPopupForm.value));
    console.log('formData', formData);
    // console.log('formData',format(new Date(formData.DOBVal), 'yyyy-MM-dd'));
    if (this.currentFieldName == 'dateOfBirth') this.modalController.dismiss({
      dateOfBirth: (0,date_fns__WEBPACK_IMPORTED_MODULE_11__["default"])(new Date(formData.DOBVal), 'yyyy-MM-dd'),
      fieldName: 'dateOfBirth',
      dateOfBirthUpload: formData.attachments
    });
    if (this.currentFieldName == 'race') this.modalController.dismiss({
      race: formData.name_of_race.Text,
      fieldName: 'race',
      raceCode: formData.race_Code,
      extraRaceText: formData.extraRaceText
    });
    if (this.currentFieldName == 'nationality') this.modalController.dismiss({
      nationality: formData.name_of_nationality.Name,
      fieldName: 'nationality',
      nationalityCode: formData.nationality_Code,
      extraNationalityText: formData.extraNationalityText,
      nationalityUpload: formData.attachments
    });
    if (this.currentFieldName == 'occupation') this.modalController.dismiss({
      occupation: formData.name_of_occupation.Title,
      fieldName: 'occupation',
      occupationCode: formData.occupation_Code,
      extraOccupationText: formData.extraOccupationText
    });
    if (this.currentFieldName == 'natureOfBusiness') this.modalController.dismiss({
      natureOfBusiness: formData.name_of_business.Title,
      fieldName: 'natureOfBusiness'
    });
    if (this.currentFieldName == 'emailAddress') this.modalController.dismiss({
      emailAddress: formData.emailAddress,
      fieldName: 'emailAddress'
    });
    if (this.currentFieldName == 'contactNumbers') {
      if (formData['mobileNumber']) {
        formData['mobileNumber'] = "60" + formData['mobileNumber'];
      }
      this.modalController.dismiss({
        contactNumbers: formData,
        fieldName: 'contactNumbers'
      });
    }
    if (this.currentFieldName == 'permanentAddress') this.modalController.dismiss({
      permanentAddress: formData,
      fieldName: 'permanentAddress'
    });
    if (this.currentFieldName == 'correspondenceAddress') {
      this.modalController.dismiss({
        correspondenceAddress: formData,
        fieldName: 'correspondenceAddress'
      });
    }
  }
  // Change &amp; to &
  changeJunkChar(className) {
    console.log(className);
    setTimeout(() => {
      let dropDownArray = document.getElementsByClassName(className);
      for (let i = 0; i < dropDownArray.length; i++) {
        dropDownArray[i].innerHTML = dropDownArray[i].innerHTML.replace(/amp;/g, "");
      }
    }, 50);
  }
}
UpdateDetailsPopupPage.ɵfac = function UpdateDetailsPopupPage_Factory(t) {
  return new (t || UpdateDetailsPopupPage)(_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_15__.NavParams), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_16__.DomSanitizer), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_15__.ModalController), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_awesome_cordova_plugins_document_picker_ngx__WEBPACK_IMPORTED_MODULE_1__.DocumentPicker), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](src_providers_utils_utils_service__WEBPACK_IMPORTED_MODULE_2__.UtilService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_15__.ActionSheetController), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_awesome_cordova_plugins_camera_ngx__WEBPACK_IMPORTED_MODULE_3__.Camera), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_ionic_native_base64_ngx__WEBPACK_IMPORTED_MODULE_4__.Base64), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_15__.AlertController), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_17__.TranslateService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](src_providers_utils_config__WEBPACK_IMPORTED_MODULE_0__.ConfigProvider), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_ionic_native_file_path_ngx__WEBPACK_IMPORTED_MODULE_5__.FilePath), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_ionic_native_file_chooser_ngx__WEBPACK_IMPORTED_MODULE_6__.FileChooser), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_7__.File), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_awesome_cordova_plugins_device_ngx__WEBPACK_IMPORTED_MODULE_8__.Device), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_awesome_cordova_plugins_chooser_ngx__WEBPACK_IMPORTED_MODULE_9__.Chooser));
};
UpdateDetailsPopupPage.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineComponent"]({
  type: UpdateDetailsPopupPage,
  selectors: [["app-update-details-popup"]],
  viewQuery: function UpdateDetailsPopupPage_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵviewQuery"](_c0, 5);
    }
    if (rf & 2) {
      let _t;
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵloadQuery"]()) && (ctx.content = _t.first);
    }
  },
  decls: 23,
  vars: 13,
  consts: [["mode", "ios"], ["color", "primary"], [1, "bold-font"], ["padding", ""], [1, "padding_15"], [3, "formGroup"], [4, "ngIf"], ["text-center", "", 1, "buttons-container"], ["ion-button", "", 1, "btn_center1", 3, "disabled", "click"], ["ion-button", "", 1, "btn_center", 3, "click"], ["class", "fail", 4, "ngIf"], ["stacked", ""], [1, "mandatory_star"], ["lines", "none", 1, "border", 3, "click"], [2, "font-size", "1.0rem"], ["slot", "end"], ["size", "cover", "presentation", "date", "min", "1900-01-01", "showDefaultButtons", "true", "formControlName", "DOBVal", 3, "value", "max", "ionChange", "ionCancel", 4, "ngIf"], ["formArrayName", "attachments", "id", "AttachemnetDiv", 1, "margin_bottom"], ["class", "margin_bottom", 3, "formGroupName", 4, "ngFor", "ngForOf"], ["class", "errPosition", "id", "AddMorebtn", 4, "ngIf"], ["text-center", ""], ["id", "AttachemnetDiv", "ion-button", "", "class", "btn_center", 3, "disabled", "click", 4, "ngIf"], [1, "note", 2, "margin-top", "10px"], ["size", "cover", "presentation", "date", "min", "1900-01-01", "showDefaultButtons", "true", "formControlName", "DOBVal", 3, "value", "max", "ionChange", "ionCancel"], ["datetime", ""], [1, "margin_bottom", 3, "formGroupName"], [1, "row_file"], ["lines", "none", 1, "upload-doc-border"], ["formControlName", "name", "type", "text", 1, "fileInput", 3, "disabled", "placeholder", "click"], ["name", "attach", 3, "click"], ["name", "close", 3, "click"], ["id", "AddMorebtn", 1, "errPosition"], ["id", "AttachemnetDiv", "ion-button", "", 1, "btn_center", 3, "disabled", "click"], ["lines", "none", 1, "border"], ["select-option", "", "interface", "popover", "mode", "ios", "appearance", "outline", "bindLabel", "Text", "formControlName", "name_of_race", "placeholder", "Please Select Race", 3, "interfaceOptions", "searchable", "ngModel", "clearable", "ngModelChange", "ionChange", "open"], [3, "value", 4, "ngFor", "ngForOf"], ["lines", "none", "class", "border", 4, "ngIf"], [1, "note"], [3, "value"], ["placeholder", "Please Enter Race", "formControlName", "extraRaceText", "type", "text", "restrict-input", "", "restrictInput", "nameOnly"], [1, "fail"], ["select-option", "", "interface", "popover", "mode", "ios", "appearance", "outline", "bindLabel", "Name", "formControlName", "name_of_nationality", "placeholder", "Please Select Nationality", 3, "interfaceOptions", "searchable", "ngModel", "clearable", "ngModelChange", "ionChange", "open"], ["formArrayName", "attachments", "id", "AttachemnetDiv", "margin-bottom", ""], ["class", "upload-doc", 3, "formGroupName", 4, "ngFor", "ngForOf"], ["class", "errPosition", "id", "AddMorebtn", "style", "margin-top: 15px;", 4, "ngIf"], [1, "note", 2, "margin-top", "45px"], ["placeholder", "Please Enter Nationality", "formControlName", "extraNationalityText", "type", "text", "restrict-input", "", "restrictInput", "nameOnly"], [1, "upload-doc", 3, "formGroupName"], ["id", "AddMorebtn", 1, "errPosition", 2, "margin-top", "15px"], ["select-option", "", "interface", "popover", "mode", "ios", "appearance", "outline", "bindLabel", "Title", "formControlName", "name_of_occupation", "placeholder", "Please Select Occupation", 3, "interfaceOptions", "searchable", "ngModel", "clearable", "ngModelChange", "ionChange", "open"], ["placeholder", "Please Enter Occupation", "formControlName", "extraOccupationText", "type", "text", "restrict-input", "", "restrictInput", "nameOnly", 4, "ngIf"], ["placeholder", "Please Enter Occupation", "formControlName", "extraOccupationText", "type", "text", "restrict-input", "", "restrictInput", "nameOnly"], ["select-option", "", "interface", "popover", "mode", "ios", "appearance", "outline", "bindLabel", "Title", "formControlName", "name_of_business", "placeholder", "Please Select Nature of Business", 3, "interfaceOptions", "searchable", "ngModel", "clearable", "ngModelChange", "ionChange", "open"], ["placeholder", "Please Enter Email Address", "formControlName", "emailAddress", "type", "text", "restrict-input", "", "restrictInput", "username"], ["placeholder", "Please Enter Mobile Number", "formControlName", "mobileNumber", "type", "text", "restrict-input", "", "restrictInput", "number", 1, "mobile-no"], ["class", "errPosition", 4, "ngIf"], ["placeholder", "Please Enter Office Number", "formControlName", "officeNumber", "type", "text", "restrict-input", "", "restrictInput", "number"], ["placeholder", "Please Enter Home Number", "formControlName", "homeNumber", "type", "text", "restrict-input", "", "restrictInput", "number"], ["placeholder", "Please Enter Other Number", "formControlName", "otherNumber", "type", "text", "restrict-input", "", "restrictInput", "number"], [1, "errPosition"], ["type", "text", "formControlName", "addressLine1", 3, "placeholder"], ["type", "text", "formControlName", "addressLine2", 3, "placeholder"], ["type", "text", "formControlName", "addressLine3", 3, "placeholder"], ["class", "mandatory_star", 4, "ngIf"], ["type", "text", "restrict-input", "", "restrictInput", "alphanumeric", "formControlName", "postalCode", 3, "placeholder"], ["select-option", "", "interface", "popover", "mode", "ios", "appearance", "outline", "bindLabel", "Name", "formControlName", "country", 3, "interfaceOptions", "searchable", "ngModel", "clearable", "ngModelChange", "ionChange", "open"], ["select-option", "", "interface", "popover", "mode", "ios", "appearance", "outline", "formControlName", "state", "placeholder", "Please Select State", 3, "interfaceOptions", "searchable", "ngModel", "clearable", "ngModelChange", "open"], ["id", "stateField", "type", "text", "formControlName", "state", 3, "placeholder"], ["value", "Malaysia", "disabled", ""], ["class", "note", 4, "ngIf"], ["select-option", "", "interface", "popover", "mode", "ios", "appearance", "outline", "bindLabel", "Name", "formControlName", "state", "dropdownPosition", "bottom", "placeholder", "Please Select State", 3, "interfaceOptions", "searchable", "ngModel", "clearable", "ngModelChange", "open"], ["size", "5"], [1, "lbl"], ["size", "2"], [4, "ngFor", "ngForOf"], ["size", "2", "text-wrap", "", 1, "checkBox"], ["mode", "md", "value", "policy.checked", 3, "checked", "ionChange"]],
  template: function UpdateDetailsPopupPage_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "ion-header", 0)(1, "ion-toolbar", 1)(2, "ion-title", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](4, "ion-content", 3)(5, "div", 4)(6, "form", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](7, UpdateDetailsPopupPage_div_7_Template, 29, 5, "div", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](8, UpdateDetailsPopupPage_div_8_Template, 17, 9, "div", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](9, UpdateDetailsPopupPage_div_9_Template, 27, 11, "div", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](10, UpdateDetailsPopupPage_div_10_Template, 17, 9, "div", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](11, UpdateDetailsPopupPage_div_11_Template, 14, 7, "div", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](12, UpdateDetailsPopupPage_div_12_Template, 15, 3, "div", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](13, UpdateDetailsPopupPage_div_13_Template, 35, 4, "div", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](14, UpdateDetailsPopupPage_div_14_Template, 57, 44, "div", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](15, UpdateDetailsPopupPage_div_15_Template, 50, 38, "div", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](16, "ion-footer")(17, "div", 7)(18, "ion-button", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function UpdateDetailsPopupPage_Template_ion_button_click_18_listener() {
        return ctx.applyChanges();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](19, "Save ");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](20, "ion-button", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function UpdateDetailsPopupPage_Template_ion_button_click_20_listener() {
        return ctx.closeModal();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](21, "Cancel ");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](22, UpdateDetailsPopupPage_p_22_Template, 2, 0, "p", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"]("Update ", ctx.popupTitle, "");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("formGroup", ctx.UpdatDetailPopupForm);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx.currentFieldName == "dateOfBirth");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx.currentFieldName == "race");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx.currentFieldName == "nationality");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx.currentFieldName == "occupation");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx.currentFieldName == "natureOfBusiness");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx.currentFieldName == "emailAddress");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx.currentFieldName == "contactNumbers");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx.currentFieldName == "permanentAddress");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx.currentFieldName == "correspondenceAddress");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("disabled", ctx.UpdatDetailPopupForm.pristine || !ctx.UpdatDetailPopupForm.valid || !ctx.cAddressValid);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx.showConfrimMsg);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_18__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_18__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_13__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_13__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.NgControlStatusGroup, _ionic_angular__WEBPACK_IMPORTED_MODULE_15__.IonButton, _ionic_angular__WEBPACK_IMPORTED_MODULE_15__.IonCheckbox, _ionic_angular__WEBPACK_IMPORTED_MODULE_15__.IonCol, _ionic_angular__WEBPACK_IMPORTED_MODULE_15__.IonContent, _ionic_angular__WEBPACK_IMPORTED_MODULE_15__.IonDatetime, _ionic_angular__WEBPACK_IMPORTED_MODULE_15__.IonFooter, _ionic_angular__WEBPACK_IMPORTED_MODULE_15__.IonGrid, _ionic_angular__WEBPACK_IMPORTED_MODULE_15__.IonHeader, _ionic_angular__WEBPACK_IMPORTED_MODULE_15__.IonIcon, _ionic_angular__WEBPACK_IMPORTED_MODULE_15__.IonInput, _ionic_angular__WEBPACK_IMPORTED_MODULE_15__.IonItem, _ionic_angular__WEBPACK_IMPORTED_MODULE_15__.IonLabel, _ionic_angular__WEBPACK_IMPORTED_MODULE_15__.IonRow, _ionic_angular__WEBPACK_IMPORTED_MODULE_15__.IonSelect, _ionic_angular__WEBPACK_IMPORTED_MODULE_15__.IonSelectOption, _ionic_angular__WEBPACK_IMPORTED_MODULE_15__.IonText, _ionic_angular__WEBPACK_IMPORTED_MODULE_15__.IonTitle, _ionic_angular__WEBPACK_IMPORTED_MODULE_15__.IonToolbar, _ionic_angular__WEBPACK_IMPORTED_MODULE_15__.BooleanValueAccessor, _ionic_angular__WEBPACK_IMPORTED_MODULE_15__.SelectValueAccessor, _ionic_angular__WEBPACK_IMPORTED_MODULE_15__.TextValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormControlName, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormGroupName, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormArrayName, _angular_common__WEBPACK_IMPORTED_MODULE_18__.DatePipe, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_17__.TranslatePipe],
  styles: ["page-update-details-popup[_ngcontent-%COMP%] {\n  \n}\npage-update-details-popup[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  padding: 0 16px;\n  width: 100% !important;\n}\npage-update-details-popup[_ngcontent-%COMP%]   ion-content[_ngcontent-%COMP%]   .scroll-content[_ngcontent-%COMP%] {\n  border-radius: 0 !important;\n}\npage-update-details-popup[_ngcontent-%COMP%]   ion-content.content[_ngcontent-%COMP%]   div.scroll-content[_ngcontent-%COMP%] {\n  padding: 16px !important;\n}\npage-update-details-popup[_ngcontent-%COMP%]   .select[_ngcontent-%COMP%] {\n  z-index: 9999 !important;\n}\npage-update-details-popup[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%] {\n  background: transparent !important;\n  padding: 0 !important;\n}\npage-update-details-popup[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]   .item-inner[_ngcontent-%COMP%] {\n  border-bottom: 0 !important;\n  padding-right: 0 !important;\n}\npage-update-details-popup[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]   .select[_ngcontent-%COMP%] {\n  align-items: center;\n  border: 1px solid #dedede !important;\n  padding-right: 30px;\n}\npage-update-details-popup[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%] {\n  margin-bottom: 8px !important;\n  margin-right: 0;\n}\npage-update-details-popup[_ngcontent-%COMP%]   ion-input[_ngcontent-%COMP%], page-update-details-popup[_ngcontent-%COMP%]   ion-datetime[_ngcontent-%COMP%] {\n  background: #fff;\n  border: 1px solid #dedede !important;\n}\npage-update-details-popup[_ngcontent-%COMP%]   ion-datetime[_ngcontent-%COMP%] {\n  padding: 15px !important;\n}\npage-update-details-popup[_ngcontent-%COMP%]   ion-input[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  margin-left: 0 !important;\n}\npage-update-details-popup[_ngcontent-%COMP%]   .upload-doc[_ngcontent-%COMP%] {\n  align-items: center;\n  display: flex;\n  justify-content: center;\n  margin-bottom: 8px !important;\n  position: relative;\n}\npage-update-details-popup[_ngcontent-%COMP%]   .upload-doc[_ngcontent-%COMP%]   ion-input[_ngcontent-%COMP%] {\n  border-bottom: 1px solid #dedede;\n  display: inline-flex;\n  padding-right: 50px;\n}\npage-update-details-popup[_ngcontent-%COMP%]   .upload-doc[_ngcontent-%COMP%]   ion-input[_ngcontent-%COMP%]   .text-input[disabled][_ngcontent-%COMP%] {\n  opacity: 1;\n}\npage-update-details-popup[_ngcontent-%COMP%]   .upload-doc[_ngcontent-%COMP%]   .icon-container[_ngcontent-%COMP%] {\n  display: inline-flex;\n  position: absolute;\n  right: 8px;\n}\npage-update-details-popup[_ngcontent-%COMP%]   .upload-doc[_ngcontent-%COMP%]   .icon-container[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%]:first-child {\n  margin-right: 8px;\n}\npage-update-details-popup[_ngcontent-%COMP%]   .errPosition[_ngcontent-%COMP%] {\n  color: #f53d3d !important;\n  font-size: 14px;\n  margin-bottom: 8px;\n}\npage-update-details-popup[_ngcontent-%COMP%]   .note[_ngcontent-%COMP%] {\n  font-size: 14px;\n  margin-top: 8px;\n}\npage-update-details-popup[_ngcontent-%COMP%]   .note[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  margin-top: 8px;\n  padding-left: 16px;\n}\npage-update-details-popup[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%] {\n  padding-left: 0px;\n  background: transparent;\n}\npage-update-details-popup[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   .item-input.ng-valid.item-input-has-value[_ngcontent-%COMP%]:not(.input-has-focus):not(.item-input-has-focus)   .item-inner[_ngcontent-%COMP%], page-update-details-popup[_ngcontent-%COMP%]   .item.item-input.ng-valid.input-has-value[_ngcontent-%COMP%]:not(.input-has-focus):not(.item-input-has-focus)   .item-inner[_ngcontent-%COMP%] {\n  border-bottom-color: none !important;\n  box-shadow: none !important;\n}\npage-update-details-popup[_ngcontent-%COMP%]   .item-inner[_ngcontent-%COMP%] {\n  padding-right: 0px !important;\n  border-bottom: none !important;\n}\npage-update-details-popup[_ngcontent-%COMP%]   .input[_ngcontent-%COMP%] {\n  border: 1px solid #eee;\n  padding: 3px 15px;\n  background: white;\n  font-size: 1.6rem;\n}\npage-update-details-popup[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%] {\n  font-size: 1.8rem !important;\n  color: #002d3d !important;\n  font-family: agenda-semibold;\n}\npage-update-details-popup[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 1.3rem;\n}\npage-update-details-popup[_ngcontent-%COMP%]   .italic_font[_ngcontent-%COMP%] {\n  font-style: italic;\n  margin: 7px 0px;\n}\npage-update-details-popup[_ngcontent-%COMP%]   .mandatory_star[_ngcontent-%COMP%] {\n  color: #f00;\n}\npage-update-details-popup[_ngcontent-%COMP%]   .padding_40[_ngcontent-%COMP%] {\n  padding: 40px;\n}\n@media only screen and (max-width: 374px) {\n  page-update-details-popup[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\n    border: 0 !important;\n    -webkit-appearance: none;\n    -moz-appearance: none;\n    background: #ffffff url('arrow-down.png') no-repeat 95% center;\n    width: 100%;\n    text-indent: 0.01px;\n    text-overflow: \"\";\n    padding: 10px;\n    font-size: 1.6rem !important;\n    color: #222;\n    position: relative;\n    height: 42px;\n  }\n}\npage-update-details-popup[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\n  border: 0 !important;\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  background: #ffffff url('arrow-down.png') no-repeat 95% center;\n  width: 100%;\n  text-indent: 0.01px;\n  text-overflow: \"\";\n  padding: 10px;\n  font-size: 1.6rem !important;\n  color: #222 !important;\n  position: relative;\n  height: 42px;\n}\npage-update-details-popup[_ngcontent-%COMP%]   .select-icon[_ngcontent-%COMP%] {\n  display: none;\n}\npage-update-details-popup[_ngcontent-%COMP%]   .fail[_ngcontent-%COMP%] {\n  color: #f00 !important;\n  display: inline-block;\n  margin-top: 8px;\n  text-align: start !important;\n}\npage-update-details-popup[_ngcontent-%COMP%]   .col[_ngcontent-%COMP%] {\n  padding: 0px !important;\n}\npage-update-details-popup[_ngcontent-%COMP%]   .checkBox[_ngcontent-%COMP%] {\n  padding-top: 10px !important;\n  padding-left: 10px !important;\n  background: transparent;\n}\npage-update-details-popup[_ngcontent-%COMP%]   .checkBox[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%] {\n  padding: 0;\n  font-size: 1.4rem !important;\n  padding-top: 3px;\n  margin: 0px;\n}\npage-update-details-popup[_ngcontent-%COMP%]   .checkbox-icon[_ngcontent-%COMP%] {\n  border-width: 1px !important;\n}\npage-update-details-popup[_ngcontent-%COMP%]   .checkbox-checked[_ngcontent-%COMP%] {\n  border-color: #002d3d !important;\n  background-color: white !important;\n}\npage-update-details-popup[_ngcontent-%COMP%]   .lbl[_ngcontent-%COMP%] {\n  color: #222 !important;\n}\n\nion-footer[_ngcontent-%COMP%] {\n  background: #fff;\n  padding: 16px;\n}\nion-footer[_ngcontent-%COMP%]   .buttons-container[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  margin-bottom: 16px;\n}\nion-footer[_ngcontent-%COMP%]   .buttons-container[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:last-child {\n  margin-bottom: 0;\n}\nion-footer[_ngcontent-%COMP%]   .fail[_ngcontent-%COMP%] {\n  text-align: center !important;\n}\n\n.mobile-no[_ngcontent-%COMP%] {\n  padding-left: 40px !important;\n  position: relative !important;\n}\n.mobile-no[_ngcontent-%COMP%]:before {\n  content: \"60\";\n  position: absolute;\n  top: 0;\n  background: #eee;\n  left: 0;\n  height: 100%;\n  display: flex;\n  align-items: center;\n  padding: 0 8px;\n}\n\n.btn_center[_ngcontent-%COMP%] {\n  text-transform: capitalize;\n  --background: #002d3d !important;\n  color: white;\n  margin-top: 15px;\n  --border-radius: 10px !important;\n  min-width: 200px;\n  min-height: 45px;\n  width: 100% !important;\n  font-family: Agenda-Regular !important;\n}\n\n.btn_center1[_ngcontent-%COMP%] {\n  text-transform: capitalize;\n  --background: #002d3d !important;\n  color: white;\n  margin-top: 15px;\n  --border-radius: 10px !important;\n  min-width: 200px;\n  min-height: 45px;\n  width: 100% !important;\n  font-family: Agenda-Regular !important;\n  margin-bottom: -5px;\n}\n\n.margin_bottom[_ngcontent-%COMP%] {\n  margin-bottom: 15%;\n}\n\n.row_file[_ngcontent-%COMP%] {\n  height: 40px !important;\n}\n\n.border1[_ngcontent-%COMP%] {\n  border: 1px solid #e0e0e0;\n  margin-bottom: 10px;\n  margin-top: 10px;\n  background: white;\n}\n\n.upload-doc-border[_ngcontent-%COMP%] {\n  border: 1px solid #e0e0e0;\n  margin-bottom: 10px;\n  margin-top: 10px;\n  background: white;\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcGFnZXMvdXBkYXRlLWRldGFpbHMtcG9wdXAvdXBkYXRlLWRldGFpbHMtcG9wdXAucGFnZS5zY3NzIiwid2VicGFjazovLy4vLi4vLi4vLi4vQWxsJTIwUHJvamVjdHMvTWFsYXlzaWFfQ2xpZW50QXBwX1JldmFtcC9TdW5BY2Nlc3NfSW9uaWM2X1JldmFtcC9zcmMvYXBwL3BhZ2VzL3VwZGF0ZS1kZXRhaWxzLXBvcHVwL3VwZGF0ZS1kZXRhaWxzLXBvcHVwLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQWtMSTs7O0tBQUE7QUM3S0o7QURKSTtFQUNJLGVBQUE7RUFDQSxzQkFBQTtBQ01SO0FESFE7RUFDSSwyQkFBQTtBQ0taO0FERlk7RUFDSSx3QkFBQTtBQ0loQjtBREFJO0VBQ0ksd0JBQUE7QUNFUjtBREFJO0VBQ0ksa0NBQUE7RUFDQSxxQkFBQTtBQ0VSO0FERFE7RUFDSSwyQkFBQTtFQUNBLDJCQUFBO0FDR1o7QUREUTtFQUNJLG1CQUFBO0VBQ0Esb0NBQUE7RUFDQSxtQkFBQTtBQ0daO0FEQUk7RUFDSSw2QkFBQTtFQUNBLGVBQUE7QUNFUjtBREFJOztFQUVJLGdCQUFBO0VBQ0Esb0NBQUE7QUNFUjtBREFJO0VBQ0ksd0JBQUE7QUNFUjtBRENRO0VBQ0kseUJBQUE7QUNDWjtBREVJO0VBQ0ksbUJBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSw2QkFBQTtFQUNBLGtCQUFBO0FDQVI7QURDUTtFQUNJLGdDQUFBO0VBQ0Esb0JBQUE7RUFDQSxtQkFBQTtBQ0NaO0FEQ2dCO0VBQ0ksVUFBQTtBQ0NwQjtBREdRO0VBQ0ksb0JBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7QUNEWjtBREdnQjtFQUNJLGlCQUFBO0FDRHBCO0FETUk7RUFDSSx5QkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtBQ0pSO0FETUk7RUFDSSxlQUFBO0VBQ0EsZUFBQTtBQ0pSO0FES1E7RUFDSSxlQUFBO0VBQ0Esa0JBQUE7QUNIWjtBRFFJO0VBQ0ksaUJBQUE7RUFDQSx1QkFBQTtBQ05SO0FEU0k7O0VBRUksb0NBQUE7RUFFQSwyQkFBQTtBQ1BSO0FEVUk7RUFDSSw2QkFBQTtFQUNBLDhCQUFBO0FDUlI7QURXSTtFQUNJLHNCQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0FDVFI7QURXSTtFQUNJLDRCQUFBO0VBQ0EseUJBQUE7RUFDQSw0QkFBQTtBQ1RSO0FEV0k7RUFDSSxpQkFBQTtBQ1RSO0FEWUk7RUFDSSxrQkFBQTtFQUNBLGVBQUE7QUNWUjtBRFlJO0VBQ0ksV0FBQTtBQ1ZSO0FEYUk7RUFDSSxhQUFBO0FDWFI7QURjSTtFQUNJO0lBQ0ksb0JBQUE7SUFDQSx3QkFBQTtJQUNBLHFCQUFBO0lBQ0EsOERBQUE7SUFDQSxXQUFBO0lBQ0EsbUJBQUE7SUFDQSxpQkFBQTtJQUNBLGFBQUE7SUFDQSw0QkFBQTtJQUNBLFdBQUE7SUFDQSxrQkFBQTtJQUNBLFlBQUE7RUNaVjtBQUNGO0FEZUk7RUFDSSxvQkFBQTtFQUNBLHdCQUFBO0VBQ0EscUJBQUE7RUFDQSw4REFBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0EsYUFBQTtFQUNBLDRCQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7QUNiUjtBRGdCSTtFQUNJLGFBQUE7QUNkUjtBRGdCSTtFQUNJLHNCQUFBO0VBQ0EscUJBQUE7RUFDQSxlQUFBO0VBQ0EsNEJBQUE7QUNkUjtBRGdCSTtFQUNJLHVCQUFBO0FDZFI7QURxQkk7RUFDSSw0QkFBQTtFQUNBLDZCQUFBO0VBQ0EsdUJBQUE7QUNuQlI7QURzQkk7RUFDSSxVQUFBO0VBQ0EsNEJBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7QUNwQlI7QUR1Qkk7RUFDSSw0QkFBQTtBQ3JCUjtBRHVCSTtFQUNJLGdDQUFBO0VBQ0Esa0NBQUE7QUNyQlI7QUR3Qkk7RUFDSSxzQkFBQTtBQ3RCUjs7QUR5QkE7RUFDSSxnQkFBQTtFQUNBLGFBQUE7QUN0Qko7QUR3QlE7RUFDSSxtQkFBQTtBQ3RCWjtBRHVCWTtFQUNJLGdCQUFBO0FDckJoQjtBRHlCSTtFQUNJLDZCQUFBO0FDdkJSOztBRDJCQTtFQUNJLDZCQUFBO0VBQ0EsNkJBQUE7QUN4Qko7QUR5Qkk7RUFDSSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxNQUFBO0VBQ0EsZ0JBQUE7RUFDQSxPQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7QUN2QlI7O0FEMEJBO0VBQ0ksMEJBQUE7RUFDQSxnQ0FBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGdDQUFBO0VBQ0EsZ0JBQUE7RUFHQSxnQkFBQTtFQUNBLHNCQUFBO0VBQ0Esc0NBQUE7QUN6Qko7O0FEMkJFO0VBQ0UsMEJBQUE7RUFDQSxnQ0FBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGdDQUFBO0VBQ0EsZ0JBQUE7RUFHQSxnQkFBQTtFQUNBLHNCQUFBO0VBQ0Esc0NBQUE7RUFDQSxtQkFBQTtBQzFCSjs7QUQ0QkU7RUFDRSxrQkFBQTtBQ3pCSjs7QUQyQkE7RUFDSSx1QkFBQTtBQ3hCSjs7QUQyQkE7RUFDSSx5QkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtBQ3hCSjs7QUQyQkU7RUFDRSx5QkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLFdBQUE7QUN4QkoiLCJzb3VyY2VzQ29udGVudCI6WyJwYWdlLXVwZGF0ZS1kZXRhaWxzLXBvcHVwIHtcclxuICAgIC50aXRsZSB7XHJcbiAgICAgICAgcGFkZGluZzogMCAxNnB4O1xyXG4gICAgICAgIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbiAgICBpb24tY29udGVudCB7XHJcbiAgICAgICAgLnNjcm9sbC1jb250ZW50IHtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMCAhaW1wb3J0YW50O1xyXG4gICAgICAgIH1cclxuICAgICAgICAmLmNvbnRlbnQge1xyXG4gICAgICAgICAgICBkaXYuc2Nyb2xsLWNvbnRlbnQge1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZzogMTZweCAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLnNlbGVjdCB7XHJcbiAgICAgICAgei1pbmRleDogOTk5OSAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG4gICAgaW9uLWl0ZW0ge1xyXG4gICAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgcGFkZGluZzogMCAhaW1wb3J0YW50O1xyXG4gICAgICAgIC5pdGVtLWlubmVyIHtcclxuICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMCAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiAwICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5zZWxlY3Qge1xyXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjZGVkZWRlICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDMwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLmxhYmVsIHtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiA4cHggIWltcG9ydGFudDtcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDA7XHJcbiAgICB9XHJcbiAgICBpb24taW5wdXQsXHJcbiAgICBpb24tZGF0ZXRpbWUge1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2RlZGVkZSAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG4gICAgaW9uLWRhdGV0aW1lIHtcclxuICAgICAgICBwYWRkaW5nOiAxNXB4ICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbiAgICBpb24taW5wdXQge1xyXG4gICAgICAgIGlucHV0IHtcclxuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDAgIWltcG9ydGFudDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAudXBsb2FkLWRvYyB7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDhweCAhaW1wb3J0YW50O1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICBpb24taW5wdXQge1xyXG4gICAgICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2RlZGVkZTtcclxuICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWZsZXg7XHJcbiAgICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDUwcHg7XHJcbiAgICAgICAgICAgIC50ZXh0LWlucHV0IHtcclxuICAgICAgICAgICAgICAgICZbZGlzYWJsZWRdIHtcclxuICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OiAxO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5pY29uLWNvbnRhaW5lciB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgIHJpZ2h0OiA4cHg7XHJcbiAgICAgICAgICAgIGlvbi1pY29uIHtcclxuICAgICAgICAgICAgICAgICY6Zmlyc3QtY2hpbGQge1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogOHB4O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLmVyclBvc2l0aW9uIHtcclxuICAgICAgICBjb2xvcjogI2Y1M2QzZCAhaW1wb3J0YW50O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiA4cHg7XHJcbiAgICB9XHJcbiAgICAubm90ZSB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDhweDtcclxuICAgICAgICB1bCB7XHJcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDhweDtcclxuICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAxNnB4O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvL0NzcyBmb3IgVXBkYXRlIEFkZHJlc3MgZmllbGRzXHJcbiAgICAuaXRlbSB7XHJcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAwcHg7XHJcbiAgICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgICB9XHJcblxyXG4gICAgLml0ZW0gLml0ZW0taW5wdXQubmctdmFsaWQuaXRlbS1pbnB1dC1oYXMtdmFsdWU6bm90KC5pbnB1dC1oYXMtZm9jdXMpOm5vdCguaXRlbS1pbnB1dC1oYXMtZm9jdXMpIC5pdGVtLWlubmVyLFxyXG4gICAgLml0ZW0uaXRlbS1pbnB1dC5uZy12YWxpZC5pbnB1dC1oYXMtdmFsdWU6bm90KC5pbnB1dC1oYXMtZm9jdXMpOm5vdCguaXRlbS1pbnB1dC1oYXMtZm9jdXMpIC5pdGVtLWlubmVyIHtcclxuICAgICAgICBib3JkZXItYm90dG9tLWNvbG9yOiBub25lICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgLXdlYmtpdC1ib3gtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgYm94LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG5cclxuICAgIC5pdGVtLWlubmVyIHtcclxuICAgICAgICBwYWRkaW5nLXJpZ2h0OiAwcHggIWltcG9ydGFudDtcclxuICAgICAgICBib3JkZXItYm90dG9tOiBub25lICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcblxyXG4gICAgLmlucHV0IHtcclxuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjZWVlO1xyXG4gICAgICAgIHBhZGRpbmc6IDNweCAxNXB4O1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICB3aGl0ZTtcclxuICAgICAgICBmb250LXNpemU6IDEuNnJlbTtcclxuICAgIH1cclxuICAgIC5sYWJlbHtcclxuICAgICAgICBmb250LXNpemU6IDEuOHJlbSAhaW1wb3J0YW50O1xyXG4gICAgICAgIGNvbG9yOiAjMDAyZDNkICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6IGFnZW5kYS1zZW1pYm9sZDtcclxuICAgfVxyXG4gICAgcCB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxLjNyZW07XHJcbiAgICB9XHJcblxyXG4gICAgLml0YWxpY19mb250IHtcclxuICAgICAgICBmb250LXN0eWxlOiBpdGFsaWM7XHJcbiAgICAgICAgbWFyZ2luOiA3cHggMHB4O1xyXG4gICAgfVxyXG4gICAgLm1hbmRhdG9yeV9zdGFyIHtcclxuICAgICAgICBjb2xvcjogI2YwMDtcclxuICAgIH1cclxuXHJcbiAgICAucGFkZGluZ180MCB7XHJcbiAgICAgICAgcGFkZGluZzogNDBweDtcclxuICAgIH1cclxuXHJcbiAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDM3NHB4KSB7XHJcbiAgICAgICAgc2VsZWN0IHtcclxuICAgICAgICAgICAgYm9yZGVyOiAwICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcclxuICAgICAgICAgICAgLW1vei1hcHBlYXJhbmNlOiBub25lO1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmZmZmIHVybCguLi8uLi8uLi9hc3NldHMvaW1ncy9hcnJvdy1kb3duLnBuZykgbm8tcmVwZWF0IDk1JSBjZW50ZXI7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICB0ZXh0LWluZGVudDogMC4wMXB4O1xyXG4gICAgICAgICAgICB0ZXh0LW92ZXJmbG93OiBcIlwiO1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDEuNnJlbSAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICBjb2xvcjogICMyMjI7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgaGVpZ2h0OiA0MnB4O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBzZWxlY3Qge1xyXG4gICAgICAgIGJvcmRlcjogMCAhaW1wb3J0YW50O1xyXG4gICAgICAgIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcclxuICAgICAgICAtbW96LWFwcGVhcmFuY2U6IG5vbmU7XHJcbiAgICAgICAgYmFja2dyb3VuZDogI2ZmZmZmZiB1cmwoLi4vLi4vLi4vYXNzZXRzL2ltZ3MvYXJyb3ctZG93bi5wbmcpIG5vLXJlcGVhdCA5NSUgY2VudGVyO1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIHRleHQtaW5kZW50OiAwLjAxcHg7XHJcbiAgICAgICAgdGV4dC1vdmVyZmxvdzogXCJcIjtcclxuICAgICAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMS42cmVtICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgY29sb3I6ICMyMjIgIWltcG9ydGFudDtcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgaGVpZ2h0OiA0MnB4O1xyXG4gICAgfVxyXG5cclxuICAgIC5zZWxlY3QtaWNvbiB7XHJcbiAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgIH1cclxuICAgIC5mYWlsIHtcclxuICAgICAgICBjb2xvcjogI2YwMCAhaW1wb3J0YW50O1xyXG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICBtYXJnaW4tdG9wOiA4cHg7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogc3RhcnQgIWltcG9ydGFudDtcclxuICAgIH1cclxuICAgIC5jb2wge1xyXG4gICAgICAgIHBhZGRpbmc6IDBweCAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG4gICAgLyogLmNoZWNrYm94e1xyXG4gICAgcGFkZGluZy10b3A6IDVweCAhaW1wb3J0YW50O1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxMHB4ICFpbXBvcnRhbnQ7XHJcbn0gKi9cclxuXHJcbiAgICAuY2hlY2tCb3gge1xyXG4gICAgICAgIHBhZGRpbmctdG9wOiAxMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAxMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgICB9XHJcblxyXG4gICAgLmNoZWNrQm94IC5sYWJlbCB7XHJcbiAgICAgICAgcGFkZGluZzogMDtcclxuICAgICAgICBmb250LXNpemU6IDEuNHJlbSAhaW1wb3J0YW50O1xyXG4gICAgICAgIHBhZGRpbmctdG9wOiAzcHg7XHJcbiAgICAgICAgbWFyZ2luOiAwcHg7XHJcbiAgICB9XHJcblxyXG4gICAgLmNoZWNrYm94LWljb24ge1xyXG4gICAgICAgIGJvcmRlci13aWR0aDogMXB4ICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbiAgICAuY2hlY2tib3gtY2hlY2tlZCB7XHJcbiAgICAgICAgYm9yZGVyLWNvbG9yOiAjMDAyZDNkICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIHdoaXRlICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcblxyXG4gICAgLmxibCB7XHJcbiAgICAgICAgY29sb3I6ICAjMjIyICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbn1cclxuaW9uLWZvb3RlciB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gICAgcGFkZGluZzogMTZweDtcclxuICAgIC5idXR0b25zLWNvbnRhaW5lciB7XHJcbiAgICAgICAgYnV0dG9uIHtcclxuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTZweDtcclxuICAgICAgICAgICAgJjpsYXN0LWNoaWxkIHtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAuZmFpbCB7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5tb2JpbGUtbm8ge1xyXG4gICAgcGFkZGluZy1sZWZ0OiA0MHB4ICFpbXBvcnRhbnQ7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmUgIWltcG9ydGFudDtcclxuICAgICY6YmVmb3JlIHtcclxuICAgICAgICBjb250ZW50OiBcIjYwXCI7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHRvcDogMDtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAjZWVlO1xyXG4gICAgICAgIGxlZnQ6IDA7XHJcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICBwYWRkaW5nOiAwIDhweDtcclxuICAgIH1cclxufVxyXG4uYnRuX2NlbnRlciB7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcclxuICAgIC0tYmFja2dyb3VuZDogIzAwMmQzZCAhaW1wb3J0YW50O1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgbWFyZ2luLXRvcDogMTVweDtcclxuICAgIC0tYm9yZGVyLXJhZGl1czogMTBweCAhaW1wb3J0YW50O1xyXG4gICAgbWluLXdpZHRoOiAyMDBweDtcclxuICAgIC8vIG1hcmdpbi1sZWZ0OiAtMzFweDtcclxuICAgIC8vZm9udC1zaXplOiAxLjdyZW07XHJcbiAgICBtaW4taGVpZ2h0OiA0NXB4O1xyXG4gICAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcclxuICAgIGZvbnQtZmFtaWx5OiBBZ2VuZGEtUmVndWxhciAhaW1wb3J0YW50O1xyXG4gIH1cclxuICAuYnRuX2NlbnRlcjEge1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XHJcbiAgICAtLWJhY2tncm91bmQ6ICMwMDJkM2QgIWltcG9ydGFudDtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIG1hcmdpbi10b3A6IDE1cHg7XHJcbiAgICAtLWJvcmRlci1yYWRpdXM6IDEwcHggIWltcG9ydGFudDtcclxuICAgIG1pbi13aWR0aDogMjAwcHg7XHJcbiAgICAvLyBtYXJnaW4tbGVmdDogLTMxcHg7XHJcbiAgICAvL2ZvbnQtc2l6ZTogMS43cmVtO1xyXG4gICAgbWluLWhlaWdodDogNDVweDtcclxuICAgIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XHJcbiAgICBmb250LWZhbWlseTogQWdlbmRhLVJlZ3VsYXIgIWltcG9ydGFudDtcclxuICAgIG1hcmdpbi1ib3R0b206IC01cHg7XHJcbiAgfVxyXG4gIC5tYXJnaW5fYm90dG9te1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTUlO1xyXG59XHJcbi5yb3dfZmlsZXtcclxuICAgIGhlaWdodDogNDBweCAhaW1wb3J0YW50O1xyXG4gICBcclxufVxyXG4uYm9yZGVyMSB7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZTBlMGUwO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICB9XHJcbiAgXHJcbiAgLnVwbG9hZC1kb2MtYm9yZGVyIHtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNlMGUwZTA7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgfSIsInBhZ2UtdXBkYXRlLWRldGFpbHMtcG9wdXAge1xuICAvKiAuY2hlY2tib3h7XG4gICAgICBwYWRkaW5nLXRvcDogNXB4ICFpbXBvcnRhbnQ7XG4gICAgICBwYWRkaW5nLWxlZnQ6IDEwcHggIWltcG9ydGFudDtcbiAgfSAqL1xufVxucGFnZS11cGRhdGUtZGV0YWlscy1wb3B1cCAudGl0bGUge1xuICBwYWRkaW5nOiAwIDE2cHg7XG4gIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XG59XG5wYWdlLXVwZGF0ZS1kZXRhaWxzLXBvcHVwIGlvbi1jb250ZW50IC5zY3JvbGwtY29udGVudCB7XG4gIGJvcmRlci1yYWRpdXM6IDAgIWltcG9ydGFudDtcbn1cbnBhZ2UtdXBkYXRlLWRldGFpbHMtcG9wdXAgaW9uLWNvbnRlbnQuY29udGVudCBkaXYuc2Nyb2xsLWNvbnRlbnQge1xuICBwYWRkaW5nOiAxNnB4ICFpbXBvcnRhbnQ7XG59XG5wYWdlLXVwZGF0ZS1kZXRhaWxzLXBvcHVwIC5zZWxlY3Qge1xuICB6LWluZGV4OiA5OTk5ICFpbXBvcnRhbnQ7XG59XG5wYWdlLXVwZGF0ZS1kZXRhaWxzLXBvcHVwIGlvbi1pdGVtIHtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcbiAgcGFkZGluZzogMCAhaW1wb3J0YW50O1xufVxucGFnZS11cGRhdGUtZGV0YWlscy1wb3B1cCBpb24taXRlbSAuaXRlbS1pbm5lciB7XG4gIGJvcmRlci1ib3R0b206IDAgIWltcG9ydGFudDtcbiAgcGFkZGluZy1yaWdodDogMCAhaW1wb3J0YW50O1xufVxucGFnZS11cGRhdGUtZGV0YWlscy1wb3B1cCBpb24taXRlbSAuc2VsZWN0IHtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgYm9yZGVyOiAxcHggc29saWQgI2RlZGVkZSAhaW1wb3J0YW50O1xuICBwYWRkaW5nLXJpZ2h0OiAzMHB4O1xufVxucGFnZS11cGRhdGUtZGV0YWlscy1wb3B1cCAubGFiZWwge1xuICBtYXJnaW4tYm90dG9tOiA4cHggIWltcG9ydGFudDtcbiAgbWFyZ2luLXJpZ2h0OiAwO1xufVxucGFnZS11cGRhdGUtZGV0YWlscy1wb3B1cCBpb24taW5wdXQsXG5wYWdlLXVwZGF0ZS1kZXRhaWxzLXBvcHVwIGlvbi1kYXRldGltZSB7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNkZWRlZGUgIWltcG9ydGFudDtcbn1cbnBhZ2UtdXBkYXRlLWRldGFpbHMtcG9wdXAgaW9uLWRhdGV0aW1lIHtcbiAgcGFkZGluZzogMTVweCAhaW1wb3J0YW50O1xufVxucGFnZS11cGRhdGUtZGV0YWlscy1wb3B1cCBpb24taW5wdXQgaW5wdXQge1xuICBtYXJnaW4tbGVmdDogMCAhaW1wb3J0YW50O1xufVxucGFnZS11cGRhdGUtZGV0YWlscy1wb3B1cCAudXBsb2FkLWRvYyB7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBtYXJnaW4tYm90dG9tOiA4cHggIWltcG9ydGFudDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxucGFnZS11cGRhdGUtZGV0YWlscy1wb3B1cCAudXBsb2FkLWRvYyBpb24taW5wdXQge1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2RlZGVkZTtcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gIHBhZGRpbmctcmlnaHQ6IDUwcHg7XG59XG5wYWdlLXVwZGF0ZS1kZXRhaWxzLXBvcHVwIC51cGxvYWQtZG9jIGlvbi1pbnB1dCAudGV4dC1pbnB1dFtkaXNhYmxlZF0ge1xuICBvcGFjaXR5OiAxO1xufVxucGFnZS11cGRhdGUtZGV0YWlscy1wb3B1cCAudXBsb2FkLWRvYyAuaWNvbi1jb250YWluZXIge1xuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogOHB4O1xufVxucGFnZS11cGRhdGUtZGV0YWlscy1wb3B1cCAudXBsb2FkLWRvYyAuaWNvbi1jb250YWluZXIgaW9uLWljb246Zmlyc3QtY2hpbGQge1xuICBtYXJnaW4tcmlnaHQ6IDhweDtcbn1cbnBhZ2UtdXBkYXRlLWRldGFpbHMtcG9wdXAgLmVyclBvc2l0aW9uIHtcbiAgY29sb3I6ICNmNTNkM2QgIWltcG9ydGFudDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBtYXJnaW4tYm90dG9tOiA4cHg7XG59XG5wYWdlLXVwZGF0ZS1kZXRhaWxzLXBvcHVwIC5ub3RlIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBtYXJnaW4tdG9wOiA4cHg7XG59XG5wYWdlLXVwZGF0ZS1kZXRhaWxzLXBvcHVwIC5ub3RlIHVsIHtcbiAgbWFyZ2luLXRvcDogOHB4O1xuICBwYWRkaW5nLWxlZnQ6IDE2cHg7XG59XG5wYWdlLXVwZGF0ZS1kZXRhaWxzLXBvcHVwIC5pdGVtIHtcbiAgcGFkZGluZy1sZWZ0OiAwcHg7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xufVxucGFnZS11cGRhdGUtZGV0YWlscy1wb3B1cCAuaXRlbSAuaXRlbS1pbnB1dC5uZy12YWxpZC5pdGVtLWlucHV0LWhhcy12YWx1ZTpub3QoLmlucHV0LWhhcy1mb2N1cyk6bm90KC5pdGVtLWlucHV0LWhhcy1mb2N1cykgLml0ZW0taW5uZXIsXG5wYWdlLXVwZGF0ZS1kZXRhaWxzLXBvcHVwIC5pdGVtLml0ZW0taW5wdXQubmctdmFsaWQuaW5wdXQtaGFzLXZhbHVlOm5vdCguaW5wdXQtaGFzLWZvY3VzKTpub3QoLml0ZW0taW5wdXQtaGFzLWZvY3VzKSAuaXRlbS1pbm5lciB7XG4gIGJvcmRlci1ib3R0b20tY29sb3I6IG5vbmUgIWltcG9ydGFudDtcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7XG4gIGJveC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudDtcbn1cbnBhZ2UtdXBkYXRlLWRldGFpbHMtcG9wdXAgLml0ZW0taW5uZXIge1xuICBwYWRkaW5nLXJpZ2h0OiAwcHggIWltcG9ydGFudDtcbiAgYm9yZGVyLWJvdHRvbTogbm9uZSAhaW1wb3J0YW50O1xufVxucGFnZS11cGRhdGUtZGV0YWlscy1wb3B1cCAuaW5wdXQge1xuICBib3JkZXI6IDFweCBzb2xpZCAjZWVlO1xuICBwYWRkaW5nOiAzcHggMTVweDtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIGZvbnQtc2l6ZTogMS42cmVtO1xufVxucGFnZS11cGRhdGUtZGV0YWlscy1wb3B1cCAubGFiZWwge1xuICBmb250LXNpemU6IDEuOHJlbSAhaW1wb3J0YW50O1xuICBjb2xvcjogIzAwMmQzZCAhaW1wb3J0YW50O1xuICBmb250LWZhbWlseTogYWdlbmRhLXNlbWlib2xkO1xufVxucGFnZS11cGRhdGUtZGV0YWlscy1wb3B1cCBwIHtcbiAgZm9udC1zaXplOiAxLjNyZW07XG59XG5wYWdlLXVwZGF0ZS1kZXRhaWxzLXBvcHVwIC5pdGFsaWNfZm9udCB7XG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcbiAgbWFyZ2luOiA3cHggMHB4O1xufVxucGFnZS11cGRhdGUtZGV0YWlscy1wb3B1cCAubWFuZGF0b3J5X3N0YXIge1xuICBjb2xvcjogI2YwMDtcbn1cbnBhZ2UtdXBkYXRlLWRldGFpbHMtcG9wdXAgLnBhZGRpbmdfNDAge1xuICBwYWRkaW5nOiA0MHB4O1xufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAzNzRweCkge1xuICBwYWdlLXVwZGF0ZS1kZXRhaWxzLXBvcHVwIHNlbGVjdCB7XG4gICAgYm9yZGVyOiAwICFpbXBvcnRhbnQ7XG4gICAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xuICAgIC1tb3otYXBwZWFyYW5jZTogbm9uZTtcbiAgICBiYWNrZ3JvdW5kOiAjZmZmZmZmIHVybCguLi8uLi8uLi9hc3NldHMvaW1ncy9hcnJvdy1kb3duLnBuZykgbm8tcmVwZWF0IDk1JSBjZW50ZXI7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgdGV4dC1pbmRlbnQ6IDAuMDFweDtcbiAgICB0ZXh0LW92ZXJmbG93OiBcIlwiO1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgZm9udC1zaXplOiAxLjZyZW0gIWltcG9ydGFudDtcbiAgICBjb2xvcjogIzIyMjtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgaGVpZ2h0OiA0MnB4O1xuICB9XG59XG5wYWdlLXVwZGF0ZS1kZXRhaWxzLXBvcHVwIHNlbGVjdCB7XG4gIGJvcmRlcjogMCAhaW1wb3J0YW50O1xuICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XG4gIC1tb3otYXBwZWFyYW5jZTogbm9uZTtcbiAgYmFja2dyb3VuZDogI2ZmZmZmZiB1cmwoLi4vLi4vLi4vYXNzZXRzL2ltZ3MvYXJyb3ctZG93bi5wbmcpIG5vLXJlcGVhdCA5NSUgY2VudGVyO1xuICB3aWR0aDogMTAwJTtcbiAgdGV4dC1pbmRlbnQ6IDAuMDFweDtcbiAgdGV4dC1vdmVyZmxvdzogXCJcIjtcbiAgcGFkZGluZzogMTBweDtcbiAgZm9udC1zaXplOiAxLjZyZW0gIWltcG9ydGFudDtcbiAgY29sb3I6ICMyMjIgIWltcG9ydGFudDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBoZWlnaHQ6IDQycHg7XG59XG5wYWdlLXVwZGF0ZS1kZXRhaWxzLXBvcHVwIC5zZWxlY3QtaWNvbiB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5wYWdlLXVwZGF0ZS1kZXRhaWxzLXBvcHVwIC5mYWlsIHtcbiAgY29sb3I6ICNmMDAgIWltcG9ydGFudDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBtYXJnaW4tdG9wOiA4cHg7XG4gIHRleHQtYWxpZ246IHN0YXJ0ICFpbXBvcnRhbnQ7XG59XG5wYWdlLXVwZGF0ZS1kZXRhaWxzLXBvcHVwIC5jb2wge1xuICBwYWRkaW5nOiAwcHggIWltcG9ydGFudDtcbn1cbnBhZ2UtdXBkYXRlLWRldGFpbHMtcG9wdXAgLmNoZWNrQm94IHtcbiAgcGFkZGluZy10b3A6IDEwcHggIWltcG9ydGFudDtcbiAgcGFkZGluZy1sZWZ0OiAxMHB4ICFpbXBvcnRhbnQ7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xufVxucGFnZS11cGRhdGUtZGV0YWlscy1wb3B1cCAuY2hlY2tCb3ggLmxhYmVsIHtcbiAgcGFkZGluZzogMDtcbiAgZm9udC1zaXplOiAxLjRyZW0gIWltcG9ydGFudDtcbiAgcGFkZGluZy10b3A6IDNweDtcbiAgbWFyZ2luOiAwcHg7XG59XG5wYWdlLXVwZGF0ZS1kZXRhaWxzLXBvcHVwIC5jaGVja2JveC1pY29uIHtcbiAgYm9yZGVyLXdpZHRoOiAxcHggIWltcG9ydGFudDtcbn1cbnBhZ2UtdXBkYXRlLWRldGFpbHMtcG9wdXAgLmNoZWNrYm94LWNoZWNrZWQge1xuICBib3JkZXItY29sb3I6ICMwMDJkM2QgIWltcG9ydGFudDtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGUgIWltcG9ydGFudDtcbn1cbnBhZ2UtdXBkYXRlLWRldGFpbHMtcG9wdXAgLmxibCB7XG4gIGNvbG9yOiAjMjIyICFpbXBvcnRhbnQ7XG59XG5cbmlvbi1mb290ZXIge1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICBwYWRkaW5nOiAxNnB4O1xufVxuaW9uLWZvb3RlciAuYnV0dG9ucy1jb250YWluZXIgYnV0dG9uIHtcbiAgbWFyZ2luLWJvdHRvbTogMTZweDtcbn1cbmlvbi1mb290ZXIgLmJ1dHRvbnMtY29udGFpbmVyIGJ1dHRvbjpsYXN0LWNoaWxkIHtcbiAgbWFyZ2luLWJvdHRvbTogMDtcbn1cbmlvbi1mb290ZXIgLmZhaWwge1xuICB0ZXh0LWFsaWduOiBjZW50ZXIgIWltcG9ydGFudDtcbn1cblxuLm1vYmlsZS1ubyB7XG4gIHBhZGRpbmctbGVmdDogNDBweCAhaW1wb3J0YW50O1xuICBwb3NpdGlvbjogcmVsYXRpdmUgIWltcG9ydGFudDtcbn1cbi5tb2JpbGUtbm86YmVmb3JlIHtcbiAgY29udGVudDogXCI2MFwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgYmFja2dyb3VuZDogI2VlZTtcbiAgbGVmdDogMDtcbiAgaGVpZ2h0OiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwYWRkaW5nOiAwIDhweDtcbn1cblxuLmJ0bl9jZW50ZXIge1xuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbiAgLS1iYWNrZ3JvdW5kOiAjMDAyZDNkICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgbWFyZ2luLXRvcDogMTVweDtcbiAgLS1ib3JkZXItcmFkaXVzOiAxMHB4ICFpbXBvcnRhbnQ7XG4gIG1pbi13aWR0aDogMjAwcHg7XG4gIG1pbi1oZWlnaHQ6IDQ1cHg7XG4gIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XG4gIGZvbnQtZmFtaWx5OiBBZ2VuZGEtUmVndWxhciAhaW1wb3J0YW50O1xufVxuXG4uYnRuX2NlbnRlcjEge1xuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbiAgLS1iYWNrZ3JvdW5kOiAjMDAyZDNkICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgbWFyZ2luLXRvcDogMTVweDtcbiAgLS1ib3JkZXItcmFkaXVzOiAxMHB4ICFpbXBvcnRhbnQ7XG4gIG1pbi13aWR0aDogMjAwcHg7XG4gIG1pbi1oZWlnaHQ6IDQ1cHg7XG4gIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XG4gIGZvbnQtZmFtaWx5OiBBZ2VuZGEtUmVndWxhciAhaW1wb3J0YW50O1xuICBtYXJnaW4tYm90dG9tOiAtNXB4O1xufVxuXG4ubWFyZ2luX2JvdHRvbSB7XG4gIG1hcmdpbi1ib3R0b206IDE1JTtcbn1cblxuLnJvd19maWxlIHtcbiAgaGVpZ2h0OiA0MHB4ICFpbXBvcnRhbnQ7XG59XG5cbi5ib3JkZXIxIHtcbiAgYm9yZGVyOiAxcHggc29saWQgI2UwZTBlMDtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgbWFyZ2luLXRvcDogMTBweDtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG59XG5cbi51cGxvYWQtZG9jLWJvcmRlciB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNlMGUwZTA7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICB3aWR0aDogMTAwJTtcbn0iXSwic291cmNlUm9vdCI6IiJ9 */"]
});

/***/ }),

/***/ 42599:
/*!***********************************************************************!*\
  !*** ./src/app/pages/update-direct-debit/updateDirectDebitService.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UpdateDirectDebitService": () => (/* binding */ UpdateDirectDebitService)
/* harmony export */ });
/* harmony import */ var src_providers_utils_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/providers/utils/config */ 43485);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var src_providers_utils_utils_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/providers/utils/utils.service */ 30423);
/* harmony import */ var src_providers_logger_service_logger_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/providers/logger-service/logger-service */ 9999);





//import { UpdateCardPage } from './update-card';
// @NgModule({
//   declarations: [
//     UpdateCardPage,
//   ],
//   imports: [
//     IonicPageModule.forChild(UpdateCardPage),
//   ],
// })
class UpdateDirectDebitService {
  constructor(utils, logger, config) {
    this.utils = utils;
    this.logger = logger;
    this.config = config;
    this.logger.log("updateAddressservice");
  }
  getDirectDebitPolicyList(identityNo) {
    this.logger.trace("GetPolicyListService--getPolicyList--start");
    let cardVal = true;
    let promise = new Promise((resolve, reject) => {
      try {
        var resourceRequest = new WLResourceRequest(src_providers_utils_config__WEBPACK_IMPORTED_MODULE_0__.ConfigProvider.getPolicyList, WLResourceRequest.GET);
        resourceRequest.setQueryParameter('params', [identityNo, this.utils.getToken(), cardVal]);
        resourceRequest.send().then(response => {
          resolve(response);
        }, error => {
          this.logger.error("GetPolicyListService--getPolicyList Adapter calling error:" + JSON.stringify(error));
          reject(error);
        });
      } catch (e) {
        reject(e);
        this.logger.log("GetPolicyListService--getPolicyList adapter calling catch error:" + JSON.stringify(e));
      }
    });
    this.logger.trace("GetPolicyListService--getPolicyList--end");
    return promise;
  }
  getEMandateMerchantInfo(policyId) {
    this.logger.trace("GetPolicyListService--getPolicyList--start");
    let cardVal = true;
    let promise = new Promise((resolve, reject) => {
      try {
        var resourceRequest = new WLResourceRequest(src_providers_utils_config__WEBPACK_IMPORTED_MODULE_0__.ConfigProvider.getEMandateMerchantInfo, WLResourceRequest.GET);
        resourceRequest.setQueryParameter('params', [this.utils.getToken(), policyId]);
        resourceRequest.send().then(response => {
          resolve(response);
        }, error => {
          this.logger.error("GetEMandateMerchantInfo--getEMandateMerchantInfo Adapter calling error:" + JSON.stringify(error));
          reject(error);
        });
      } catch (e) {
        reject(e);
        this.logger.log("GetEMandateMerchantInfo--getEMandateMerchantInfo adapter calling catch error:" + JSON.stringify(e));
      }
    });
    this.logger.trace("GetEMandateMerchantInfo--getEMandateMerchantInfo--end");
    return promise;
  }
  postEMandateInfo(policyId) {
    this.logger.trace("postEMandateInfo--postEMandateInfo--start");
    let cardVal = true;
    var OS = "AOS";
    if (this.utils.getPlatform() == this.config.sunactiv.platform_ios) {
      OS = "IOS";
    }
    let promise = new Promise((resolve, reject) => {
      try {
        var resourceRequest = new WLResourceRequest(src_providers_utils_config__WEBPACK_IMPORTED_MODULE_0__.ConfigProvider.postEMandateInfo, WLResourceRequest.GET);
        resourceRequest.setQueryParameter('params', [this.utils.getToken(), policyId, OS]);
        resourceRequest.send().then(response => {
          resolve(response);
        }, error => {
          this.logger.error("postEMandateInfo--postEMandateInfo Adapter calling error:" + JSON.stringify(error));
          reject(error);
        });
      } catch (e) {
        reject(e);
        this.logger.log("postEMandateInfo--postEMandateInfo adapter calling catch error:" + JSON.stringify(e));
      }
    });
    this.logger.trace("postEMandateInfo--postEMandateInfo--end");
    return promise;
  }
  putEMandateResults(paymentData, paymentId) {
    this.logger.trace("putEMandateResults--putEMandateResults--start");
    let cardVal = true;
    let promise = new Promise((resolve, reject) => {
      try {
        var resourceRequest = new WLResourceRequest(src_providers_utils_config__WEBPACK_IMPORTED_MODULE_0__.ConfigProvider.putEMandateInfo, WLResourceRequest.GET);
        resourceRequest.setQueryParameter('params', [this.utils.getToken(), paymentId]);
        var data = {
          "params": JSON.stringify([paymentData])
        };
        resourceRequest.sendFormParameters(data).then(response => {
          resolve(response);
        }, error => {
          this.logger.error("putEMandateResults--putEMandateResults Adapter calling error:" + JSON.stringify(error));
          reject(error);
        });
      } catch (e) {
        reject(e);
        this.logger.log("putEMandateResults--putEMandateResults adapter calling catch error:" + JSON.stringify(e));
      }
    });
    this.logger.trace("putEMandateResults--putEMandateResults--end");
    return promise;
  }
}
UpdateDirectDebitService.ɵfac = function UpdateDirectDebitService_Factory(t) {
  return new (t || UpdateDirectDebitService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](src_providers_utils_utils_service__WEBPACK_IMPORTED_MODULE_1__.UtilService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](src_providers_logger_service_logger_service__WEBPACK_IMPORTED_MODULE_2__.LoggerServiceProvider), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](src_providers_utils_config__WEBPACK_IMPORTED_MODULE_0__.ConfigProvider));
};
UpdateDirectDebitService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({
  token: UpdateDirectDebitService,
  factory: UpdateDirectDebitService.ɵfac
});

/***/ }),

/***/ 50441:
/*!***************************************************************************!*\
  !*** ./src/app/pages/update-payout-details/updatePayoutDetailsService.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UpdatePayoutDetailsService": () => (/* binding */ UpdatePayoutDetailsService)
/* harmony export */ });
/* harmony import */ var src_providers_utils_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/providers/utils/config */ 43485);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var src_providers_utils_utils_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/providers/utils/utils.service */ 30423);
/* harmony import */ var src_providers_logger_service_logger_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/providers/logger-service/logger-service */ 9999);




class UpdatePayoutDetailsService {
  constructor(utils, logger) {
    this.utils = utils;
    this.logger = logger;
    this.logger.log("updatePayoutservice");
  }
  /** Adapter Call to update address **/
  updatePayoutData(formdata) {
    this.logger.trace("updatePayoutservice--updatePayoutservice--start");
    let promise = new Promise((resolve, reject) => {
      try {
        var resourceRequest = new WLResourceRequest(src_providers_utils_config__WEBPACK_IMPORTED_MODULE_0__.ConfigProvider.updatePayoutAdapterPath, WLResourceRequest.POST);
        let params = [this.utils.getToken(), formdata];
        resourceRequest.setHeader("Content-Type", "application/x-www-form-urlencoded");
        var data = {
          "params": JSON.stringify(params)
        };
        resourceRequest.sendFormParameters(data).then(response => {
          resolve(response);
        }, error => {
          this.logger.error("updatePayoutservice--updatePayoutservice Adapter calling error:" + JSON.stringify(error));
          reject(error);
        });
      } catch (e) {
        reject(e);
        this.logger.log("updatePayoutservice--updatePayoutservice adapter calling catch error:" + JSON.stringify(e));
      }
    });
    this.logger.trace("updatePayoutservice--updatePayoutservice--end");
    return promise;
  }
  /**Adapter call to get Staticdata  */
  getStaticdata() {
    this.logger.trace("updateCardDetailsService--getStaticdata--start");
    let promise = new Promise((resolve, reject) => {
      try {
        var resourceRequest = new WLResourceRequest(src_providers_utils_config__WEBPACK_IMPORTED_MODULE_0__.ConfigProvider.bankStaticDataAdapterPath, WLResourceRequest.GET);
        resourceRequest.setQueryParameter('params', "['" + this.utils.getToken() + "']");
        resourceRequest.send().then(response => {
          resolve(response);
        }, error => {
          this.logger.error("updateCardDetailsService--getStaticdata Adapter calling error:" + JSON.stringify(error));
          reject(error);
        });
      } catch (e) {
        reject(e);
        this.logger.log("updateCardDetailsService--getStaticdata adapter calling catch error:" + JSON.stringify(e));
      }
    });
    this.logger.trace("updateCardDetailsService--getStaticdata--end");
    return promise;
  }
  /**Adapter call to get Staticdata  */
  getAccounHolderInfo() {
    this.logger.trace("updateCardDetailsService--getAccounHolderInfo--start");
    let promise = new Promise((resolve, reject) => {
      try {
        let encryptedUserId = this.utils.getEncryptedUserId();
        let token = this.utils.getToken();
        let params = [encryptedUserId, token];
        var resourceRequest = new WLResourceRequest(src_providers_utils_config__WEBPACK_IMPORTED_MODULE_0__.ConfigProvider.getAccountHolderDetails, WLResourceRequest.POST);
        var data = {
          "params": JSON.stringify(params)
        };
        resourceRequest.sendFormParameters(data).then(response => {
          resolve(response);
        }, error => {
          this.logger.error("updateCardDetailsService--getAccounHolderInfo Adapter calling error:" + JSON.stringify(error));
          reject(error);
        });
      } catch (e) {
        reject(e);
        this.logger.log("updateCardDetailsService--getAccounHolderInfo adapter calling catch error:" + JSON.stringify(e));
      }
    });
    this.logger.trace("updateCardDetailsService--getStaticdata--end");
    return promise;
  }
}
UpdatePayoutDetailsService.ɵfac = function UpdatePayoutDetailsService_Factory(t) {
  return new (t || UpdatePayoutDetailsService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](src_providers_utils_utils_service__WEBPACK_IMPORTED_MODULE_1__.UtilService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](src_providers_logger_service_logger_service__WEBPACK_IMPORTED_MODULE_2__.LoggerServiceProvider));
};
UpdatePayoutDetailsService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({
  token: UpdatePayoutDetailsService,
  factory: UpdatePayoutDetailsService.ɵfac
});

/***/ }),

/***/ 26475:
/*!******************************************************************************!*\
  !*** ./src/app/pages/update-personal-details/updatePersonalDetailservice.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UpdatePersonalService": () => (/* binding */ UpdatePersonalService)
/* harmony export */ });
/* harmony import */ var src_providers_utils_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/providers/utils/config */ 43485);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var src_providers_utils_utils_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/providers/utils/utils.service */ 30423);
/* harmony import */ var src_providers_logger_service_logger_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/providers/logger-service/logger-service */ 9999);




/*
  Generated class for the UpdateAddressService .

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
class UpdatePersonalService {
  constructor(utils, logger) {
    this.utils = utils;
    this.logger = logger;
    this.logger.log("updateAddressservice");
  }
  /** Adapter Call to update address **/
  updateAddress(formData) {
    this.logger.trace("ClaimSubmissionService--claimSubmit--start");
    let promise = new Promise((resolve, reject) => {
      try {
        var resourceRequest = new WLResourceRequest(src_providers_utils_config__WEBPACK_IMPORTED_MODULE_0__.ConfigProvider.UpdatePersonalDetailsAdapterPath, WLResourceRequest.POST);
        let params = [this.utils.getEncryptedUserId(), formData, this.utils.getToken()];
        resourceRequest.setHeader("Content-Type", "application/x-www-form-urlencoded");
        var data = {
          "params": JSON.stringify(params)
        };
        resourceRequest.sendFormParameters(data).then(response => {
          resolve(response);
        }, error => {
          this.logger.error("ClaimSubmissionService--claimSubmit Adapter calling error:" + JSON.stringify(error));
          reject(error);
        });
      } catch (e) {
        reject(e);
        this.logger.log("ClaimSubmissionService--claimSubmit adapter calling catch error:" + JSON.stringify(e));
      }
    });
    this.logger.trace("ClaimSubmissionService--claimSubmit--end");
    return promise;
  }
  /**Adapter call to get countries list */
  getCountires() {
    this.logger.trace("CountriesServiceProvider--getCountires--start");
    let promise = new Promise((resolve, reject) => {
      try {
        var resourceRequest = new WLResourceRequest(src_providers_utils_config__WEBPACK_IMPORTED_MODULE_0__.ConfigProvider.getCountriesAdapterPath, WLResourceRequest.GET);
        resourceRequest.setQueryParameter('params', "['" + this.utils.getToken() + "']");
        resourceRequest.send().then(response => {
          resolve(response);
        }, error => {
          this.logger.error("CountriesServiceProvider--getCountires Adapter calling error:" + JSON.stringify(error));
          reject(error);
        });
      } catch (e) {
        reject(e);
        this.logger.log("CountriesServiceProvider--getCountires adapter calling catch error:" + JSON.stringify(e));
      }
    });
    this.logger.trace("CountriesServiceProvider--getCountires--end");
    return promise;
  }
  /**
   * Adapter call to get malaysian state list
   */
  getStates() {
    this.logger.trace("StatesServiceProvider--getStates--start");
    let promise = new Promise((resolve, reject) => {
      try {
        var resourceRequest = new WLResourceRequest(src_providers_utils_config__WEBPACK_IMPORTED_MODULE_0__.ConfigProvider.getStatesAdapterPath, WLResourceRequest.GET);
        resourceRequest.setQueryParameter('params', "['" + this.utils.getToken() + "']");
        resourceRequest.send().then(response => {
          resolve(response);
        }, error => {
          this.logger.error("StatesServiceProvider--getStates Adapter calling error:" + JSON.stringify(error));
          reject(error);
        });
      } catch (e) {
        reject(e);
        this.logger.log("StatesServiceProvider--getStates adapter calling catch error:" + JSON.stringify(e));
      }
    });
    this.logger.trace("StatesServiceProvider--getStates--end");
    return promise;
  }
  /**
      * New Adapter call Phase 3
      */
  getDropDownStaticData() {
    this.logger.trace("UpdateAddressService--getStates--start");
    let promise = new Promise((resolve, reject) => {
      try {
        var resourceRequest = new WLResourceRequest(src_providers_utils_config__WEBPACK_IMPORTED_MODULE_0__.ConfigProvider.updatePersonalStaticDataAdapterPath, WLResourceRequest.GET);
        resourceRequest.setQueryParameter('params', "['" + this.utils.getToken() + "']");
        resourceRequest.send().then(response => {
          resolve(response);
        }, error => {
          this.logger.error("UpdateAddressService--getDropDownStaticData Adapter calling error:" + JSON.stringify(error));
          reject(error);
        });
      } catch (e) {
        reject(e);
        this.logger.log("UpdateAddressService--getDropDownStaticData adapter calling catch error:" + JSON.stringify(e));
      }
    });
    this.logger.trace("UpdateAddressService--getDropDownStaticData--end");
    return promise;
  }
  getPersonalData() {
    this.logger.trace("UpdateAddressService--getPersonalData--start");
    let promise = new Promise((resolve, reject) => {
      try {
        var resourceRequest = new WLResourceRequest(src_providers_utils_config__WEBPACK_IMPORTED_MODULE_0__.ConfigProvider.GetPersonalDetailsAdapterPath, WLResourceRequest.GET);
        resourceRequest.setQueryParameter('params', "['" + this.utils.getToken() + "']");
        resourceRequest.send().then(response => {
          resolve(response);
        }, error => {
          this.logger.error("UpdateAddressService--getPersonalData Adapter calling error:" + JSON.stringify(error));
          reject(error);
        });
      } catch (e) {
        reject(e);
        this.logger.log("UpdateAddressService--getPersonalData adapter calling catch error:" + JSON.stringify(e));
      }
    });
    this.logger.trace("UpdateAddressService--getPersonalData--end");
    return promise;
  }
  updatePersonalDate(data) {
    this.logger.trace("UpdateAddressService--updatePersonalDate--start");
    let promise = new Promise((resolve, reject) => {
      try {
        var resourceRequest = new WLResourceRequest(src_providers_utils_config__WEBPACK_IMPORTED_MODULE_0__.ConfigProvider.UpdatePersonalDetailsAdapterPath, WLResourceRequest.GET);
        resourceRequest.setQueryParameter('params', [this.utils.getToken(), data]);
        resourceRequest.send().then(response => {
          resolve(response);
        }, error => {
          this.logger.error("UpdateAddressService--updatePersonalDate Adapter calling error:" + JSON.stringify(error));
          reject(error);
        });
      } catch (e) {
        reject(e);
        this.logger.log("UpdateAddressService--updatePersonalDate adapter calling catch error:" + JSON.stringify(e));
      }
    });
    this.logger.trace("UpdateAddressService--updatePersonalDate--end");
    return promise;
  }
  sendTAC(os) {
    this.logger.trace("UpdateAddressService--updatePersonalDate--start");
    let promise = new Promise((resolve, reject) => {
      try {
        var resourceRequest = new WLResourceRequest(src_providers_utils_config__WEBPACK_IMPORTED_MODULE_0__.ConfigProvider.SendTACAdapterPath, WLResourceRequest.GET);
        resourceRequest.setQueryParameter('params', [os, this.utils.getToken()]);
        resourceRequest.send().then(response => {
          resolve(response);
        }, error => {
          this.logger.error("UpdateAddressService--updatePersonalDate Adapter calling error:" + JSON.stringify(error));
          reject(error);
        });
      } catch (e) {
        reject(e);
        this.logger.log("UpdateAddressService--updatePersonalDate adapter calling catch error:" + JSON.stringify(e));
      }
    });
    this.logger.trace("UpdateAddressService--updatePersonalDate--end");
    return promise;
  }
  verifyTAC(tacCode) {
    this.logger.trace("UpdateAddressService--updatePersonalDate--start");
    let promise = new Promise((resolve, reject) => {
      try {
        var resourceRequest = new WLResourceRequest(src_providers_utils_config__WEBPACK_IMPORTED_MODULE_0__.ConfigProvider.VerifyTACAdapterPath, WLResourceRequest.GET);
        resourceRequest.setQueryParameter('params', [tacCode, this.utils.getToken()]);
        resourceRequest.send().then(response => {
          resolve(response);
        }, error => {
          this.logger.error("UpdateAddressService--updatePersonalDate Adapter calling error:" + JSON.stringify(error));
          reject(error);
        });
      } catch (e) {
        reject(e);
        this.logger.log("UpdateAddressService--updatePersonalDate adapter calling catch error:" + JSON.stringify(e));
      }
    });
    this.logger.trace("UpdateAddressService--updatePersonalDate--end");
    return promise;
  }
  getAlterationPDFLink() {
    this.logger.trace("getAlterationPDFLink--getAlterationPDFLink--start");
    let promise = new Promise((resolve, reject) => {
      try {
        var resourceRequest = new WLResourceRequest(src_providers_utils_config__WEBPACK_IMPORTED_MODULE_0__.ConfigProvider.GetAlterationPDFAdapterPath, WLResourceRequest.GET);
        resourceRequest.setQueryParameter('params', "['" + this.utils.getToken() + "']");
        resourceRequest.send().then(response => {
          resolve(response);
        }, error => {
          this.logger.error("getAlterationPDFLink--getAlterationPDFLink Adapter calling error:" + JSON.stringify(error));
          reject(error);
        });
      } catch (e) {
        reject(e);
        this.logger.log("getAlterationPDFLink--getAlterationPDFLink adapter calling catch error:" + JSON.stringify(e));
      }
    });
    this.logger.trace("getAlterationPDFLink--getAlterationPDFLink--end");
    return promise;
  }
}
UpdatePersonalService.ɵfac = function UpdatePersonalService_Factory(t) {
  return new (t || UpdatePersonalService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](src_providers_utils_utils_service__WEBPACK_IMPORTED_MODULE_1__.UtilService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](src_providers_logger_service_logger_service__WEBPACK_IMPORTED_MODULE_2__.LoggerServiceProvider));
};
UpdatePersonalService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({
  token: UpdatePersonalService,
  factory: UpdatePersonalService.ɵfac
});

/***/ }),

/***/ 47279:
/*!*********************************************************************!*\
  !*** ./src/app/pages/update-secure-word/updateSecureWordService.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UpdateSecureWordService": () => (/* binding */ UpdateSecureWordService)
/* harmony export */ });
/* harmony import */ var src_providers_utils_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/providers/utils/config */ 43485);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var src_providers_utils_utils_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/providers/utils/utils.service */ 30423);
/* harmony import */ var src_providers_logger_service_logger_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/providers/logger-service/logger-service */ 9999);




class UpdateSecureWordService {
  constructor(utils, logger) {
    this.utils = utils;
    this.logger = logger;
    this.logger.log("updateAddressservice");
  }
  /** Adapter Call to update secure word **/
  /** Get user policies **/
  changeSecureWordService(Newword) {
    this.logger.trace("ChangePasswordService--changePasswordService--start");
    let promise = new Promise((resolve, reject) => {
      try {
        let encryptedUserId = this.utils.getEncryptedUserId();
        let token = this.utils.getToken();
        let params = [encryptedUserId, token, Newword];
        var resourceRequest = new WLResourceRequest(src_providers_utils_config__WEBPACK_IMPORTED_MODULE_0__.ConfigProvider.putsecureWordAdapterPath, WLResourceRequest.POST);
        var data = {
          "params": JSON.stringify(params)
        };
        resourceRequest.sendFormParameters(data).then(response => {
          resolve(response);
        }, error => {
          this.logger.error("ChangePasswordService--changePasswordService Adapter calling error:" + JSON.stringify(error));
          reject(error);
        });
      } catch (e) {
        reject(e);
        this.logger.log("ChangePasswordService--changePasswordService adapter calling catch error:" + JSON.stringify(e));
      }
    });
    this.logger.trace("ChangePasswordService--changePasswordService--end");
    return promise;
  }
}
UpdateSecureWordService.ɵfac = function UpdateSecureWordService_Factory(t) {
  return new (t || UpdateSecureWordService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](src_providers_utils_utils_service__WEBPACK_IMPORTED_MODULE_1__.UtilService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](src_providers_logger_service_logger_service__WEBPACK_IMPORTED_MODULE_2__.LoggerServiceProvider));
};
UpdateSecureWordService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({
  token: UpdateSecureWordService,
  factory: UpdateSecureWordService.ɵfac
});

/***/ }),

/***/ 96251:
/*!*********************************************************************************!*\
  !*** ./src/app/pages/update-security-question/updateSecurityQuestionService.ts ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UpdateSecurityQuestionService": () => (/* binding */ UpdateSecurityQuestionService)
/* harmony export */ });
/* harmony import */ var src_providers_utils_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/providers/utils/config */ 43485);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var src_providers_utils_utils_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/providers/utils/utils.service */ 30423);
/* harmony import */ var src_providers_logger_service_logger_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/providers/logger-service/logger-service */ 9999);




/*
  Generated class for the UpdateEmailService.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
class UpdateSecurityQuestionService {
  constructor(utils, logger) {
    this.utils = utils;
    this.logger = logger;
    this.logger.log("Get User Security Questions service");
  }
  /** get user opted security question **/
  getUserSecurityQuestion() {
    this.logger.trace("UpdateSecurityQuestionService--getUserSecurityQuestion--start");
    let promise = new Promise((resolve, reject) => {
      try {
        let encryptedUserId = this.utils.getEncryptedUserId();
        let token = this.utils.getToken();
        var resourceRequest = new WLResourceRequest(src_providers_utils_config__WEBPACK_IMPORTED_MODULE_0__.ConfigProvider.getuserSecurityQuestionAdapterPath, WLResourceRequest.GET);
        resourceRequest.setQueryParameter('params', "['" + encryptedUserId + "', '" + token + "']");
        resourceRequest.send().then(response => {
          resolve(response);
        }, error => {
          this.logger.error("UpdateSecurityQuestionService--getUserSecurityQuestion Adapter calling error:" + JSON.stringify(error));
          reject(error);
        });
      } catch (e) {
        reject(e);
        this.logger.log("UpdateSecurityQuestionService--getUserSecurityQuestion calling catch error:" + JSON.stringify(e));
      }
    });
    this.logger.trace("UpdateSecurityQuestionService--getUserSecurityQuestion--end");
    return promise;
  }
  /**Adapter call to update security question */
  updateUserSecurityQuestion(QType, Answer) {
    this.logger.trace("UpdateSecurityQuestionService--updateUserSecurityQuestion--start");
    let promise = new Promise((resolve, reject) => {
      try {
        let encryptedUserId = this.utils.getEncryptedUserId();
        let token = this.utils.getToken();
        let params = [encryptedUserId, QType, Answer, token];
        var resourceRequest = new WLResourceRequest(src_providers_utils_config__WEBPACK_IMPORTED_MODULE_0__.ConfigProvider.updateSecurityQuestionAdapterPath, WLResourceRequest.POST);
        var data = {
          "params": JSON.stringify(params)
        };
        resourceRequest.sendFormParameters(data).then(response => {
          resolve(response);
        }, error => {
          this.logger.error("UpdateSecurityQuestionService--updateUserSecurityQuestion Adapter calling error:" + JSON.stringify(error));
          reject(error);
        });
      } catch (e) {
        reject(e);
        this.logger.log("UpdateSecurityQuestionService--updateUserSecurityQuestion calling catch error:" + JSON.stringify(e));
      }
    });
    this.logger.trace("UpdateSecurityQuestionService--updateUserSecurityQuestion--end");
    return promise;
  }
}
UpdateSecurityQuestionService.ɵfac = function UpdateSecurityQuestionService_Factory(t) {
  return new (t || UpdateSecurityQuestionService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](src_providers_utils_utils_service__WEBPACK_IMPORTED_MODULE_1__.UtilService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](src_providers_logger_service_logger_service__WEBPACK_IMPORTED_MODULE_2__.LoggerServiceProvider));
};
UpdateSecurityQuestionService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({
  token: UpdateSecurityQuestionService,
  factory: UpdateSecurityQuestionService.ɵfac
});

/***/ }),

/***/ 45340:
/*!******************************************************!*\
  !*** ./src/app/services/translate-config.service.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TranslateConfigService": () => (/* binding */ TranslateConfigService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngx-translate/core */ 38699);


class TranslateConfigService {
  constructor(translate) {
    this.translate = translate;
  }
  getDefaultLanguage() {
    let language = this.translate.getBrowserLang();
    this.translate.setDefaultLang(language);
    return language;
  }
  setLanguage(setLang) {
    this.translate.use(setLang);
  }
}
TranslateConfigService.ɵfac = function TranslateConfigService_Factory(t) {
  return new (t || TranslateConfigService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__.TranslateService));
};
TranslateConfigService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
  token: TranslateConfigService,
  factory: TranslateConfigService.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 92340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
  production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.

/***/ }),

/***/ 14431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 34497);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 36747);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 92340);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
  (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule).catch(err => console.log(err));

/***/ }),

/***/ 38590:
/*!****************************************************!*\
  !*** ./src/providers/auth-handler/auth-handler.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthHandlerProvider": () => (/* binding */ AuthHandlerProvider)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _utils_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/config */ 43485);
/* harmony import */ var _utils_utils_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/utils.service */ 30423);



class AuthHandlerProvider {
  constructor(config, utils) {
    this.config = config;
    this.utils = utils;
    this.securityCheckName = "userAuthentication";
    this.isChallenged = false;
    this.LOGS_SEND_INTERVAL = 1 * 60 * 1000;
  }
  /**
     * Init Security Check for authentication user
     */
  authInit() {
    this.config.clientLogger = WL.Logger.create({
      pkg: 'com.sunlife.my.sunaccess'
    });
    WL.Logger.config({
      maxFileSize: 150000
    });
    WL.Logger.updateConfigFromServer();
    /** sending logs to sever every 5min */
    if (this.utils.isDevice()) {
      WL.Logger.send();
    }
    this.authHandler = WL.Client.createSecurityCheckChallengeHandler(this.securityCheckName);
    this.authHandler.handleChallenge = response => {
      if (response == "credentialsRequired") {
        /* user need to navigate to login , once session is timeout**/
        // this.events.publish('auth:failed');
      } else {
        this.isChallenged = true;
        this.submitCredentials();
      }
    };
    this.authHandler.handleSuccess = response => {
      this.isChallenged = false;
    };
    this.authHandler.handleFailure = response => {
      this.isChallenged = false;
    };
  }
  /**
   * Submit challenge handler
   */
  submitCredentials() {
    if (this.credentials == undefined) {
      this.credentials = {
        "isValidUser": true,
        "userId": this.config.userInfo.email,
        "displayName": this.config.userInfo.name
      };
    }
    if (this.isChallenged) {
      this.authHandler.submitChallengeAnswer(this.credentials);
      return null;
    } else {
      return WLAuthorizationManager.login(this.securityCheckName, this.credentials);
    }
  }
  logout() {
    // this.config.userInfo.sessionId = this.utils.getSessionId();
    return new Promise((resolve, reject) => {
      return WLAuthorizationManager.logout(this.securityCheckName).then(() => {
        this.credentials = undefined;
        console.log("Log out");
      }, err => {
        console.log("Logout");
      });
    });
  }
}
AuthHandlerProvider.ɵfac = function AuthHandlerProvider_Factory(t) {
  return new (t || AuthHandlerProvider)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_utils_config__WEBPACK_IMPORTED_MODULE_0__.ConfigProvider), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_utils_utils_service__WEBPACK_IMPORTED_MODULE_1__.UtilService));
};
AuthHandlerProvider.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
  token: AuthHandlerProvider,
  factory: AuthHandlerProvider.ɵfac
});

/***/ }),

/***/ 58339:
/*!****************************************************!*\
  !*** ./src/providers/download-pdf/download-pdf.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DownloadPdfProvider": () => (/* binding */ DownloadPdfProvider)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var src_providers_logger_service_logger_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/providers/logger-service/logger-service */ 9999);
/* harmony import */ var src_providers_utils_utils_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/providers/utils/utils.service */ 30423);
/* harmony import */ var _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/file/ngx */ 12358);
/* harmony import */ var _awesome_cordova_plugins_file_opener_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @awesome-cordova-plugins/file-opener/ngx */ 99439);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/core */ 38699);
/* harmony import */ var _awesome_cordova_plugins_android_permissions_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @awesome-cordova-plugins/android-permissions/ngx */ 4824);









/*
  Generated class for the DownloadPdfProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
class DownloadPdfProvider {
  constructor(logger, utils, file, fileOpener, alertCtrl, toastCtrl, translate, androidPermissions) {
    this.logger = logger;
    this.utils = utils;
    this.file = file;
    this.fileOpener = fileOpener;
    this.alertCtrl = alertCtrl;
    this.toastCtrl = toastCtrl;
    this.translate = translate;
    this.androidPermissions = androidPermissions;
    this.dirName = "SunAccess";
    this.mimeTypes = {
      jpg: 'image/jpeg',
      jpeg: 'image/jpeg',
      png: 'image/png',
      pdf: 'application/pdf',
      zip: 'application/zip'
    };
    this.downloadStatementFile = function (downloadLink, policyNumber) {
      if (downloadLink == null || downloadLink.trim() == "" || downloadLink == undefined) {
        this.utils.showAlert("", this.translate.instant('generic_msgs.err_download_file'));
      } else {
        downloadLink = downloadLink.replace('bpp1.', '');
        var statementType = downloadLink.split("/")[2];
        if (statementType == "universalLife" || statementType == "life") {
          statementType = "Universal Life";
        } else if (statementType == "educationBoosterFund") {
          statementType = "Education Booster Fund";
        } else if (statementType == "universalAccount" || statementType == "ua") {
          statementType = "Universal Account";
        } else if (statementType == "annualUnit" || statementType == "unit") {
          statementType = "Annual Unit";
        }
        var fileName = statementType + " Statement_" + policyNumber + "_" + downloadLink.split("/")[3] + ".pdf";
        this.name = fileName.toUpperCase();
        if (this.utils.getPlatform() == 'android') {
          this.file.checkDir(this.file.externalDataDirectory, this.dirName).then(res => {
            this.file.checkFile(this.file.externalDataDirectory + this.dirName + '/', this.name).then(res => {
              this.utils.dissmisProgressLoader();
              this.showDialog("", this.translate.instant('generic_msgs.file_alredy_downloaded'), "application/pdf", downloadLink);
            }).catch(err => {
              this.presentToast(this.translate.instant('save-photo.downlaod_progress'));
              this.getFileBase64(downloadLink);
            });
          }).catch(err => {
            this.presentToast(this.translate.instant('save-photo.downlaod_progress'));
            this.getFileBase64(downloadLink);
          });
        } else {
          this.file.checkFile(this.file.documentsDirectory, this.name).then(res => {
            this.utils.dissmisProgressLoader();
            this.showDialogIos("", this.translate.instant('generic_msgs.file_alredy_downloaded'), downloadLink);
          }).catch(err => {
            this.presentToast(this.translate.instant('save-photo.downlaod_progress'));
            this.getFileBase64(downloadLink);
          });
        }
      }
    };
    this.downloadFile = function (downloadLink) {
      if (downloadLink == null || downloadLink.trim() == "" || downloadLink == undefined) {
        this.utils.showAlert("", this.translate.instant('generic_msgs.err_download_file'));
      } else {
        downloadLink = downloadLink.replace('bpp1.', '');
        this.presentToast(this.translate.instant('save-photo.downlaod_progress'));
        this.getFileBase64(downloadLink);
      }
    };
    this.logger.trace(' DownloadPdfProvider Provider');
  }
  getFileBase64(downloadLink) {
    this.utils.showProgressLoader();
    if (this.utils.isDeviceOnLine()) {
      this.logger.trace("get downloadAndOpenPdf--start");
      this.getBase64FileData(downloadLink).then(result => {
        let res = result['responseJSON'];
        this.openPdfFile(res);
      }, err => {
        this.utils.dissmisProgressLoader();
        this.errorMsg = this.utils.handleServiceException(err);
        this.utils.showAlert("", this.errorMsg);
      });
    } else {
      this.utils.dissmisProgressLoader();
      this.errorMsg = this.translate.instant('generic_msgs.network_err');
      this.utils.showAlert("", this.errorMsg);
    }
  }
  /** Get base64 data from link **/
  getBase64FileData(link) {
    this.logger.trace("GetBase64FileDataServiceProvider--getBase64Data--start ");
    //link = link.replace("http://mywnentwd01:10050", "");
    let promise = new Promise((resolve, reject) => {
      try {
        var resourceRequest = new WLResourceRequest("/adapters/Downloads/getBase64Data", WLResourceRequest.GET);
        resourceRequest.setQueryParameter('params', [link.trim(), this.utils.getToken()]);
        resourceRequest.send().then(response => {
          resolve(response);
        }, error => {
          this.logger.error("GetBase64FileDataServiceProvider-- Adapter calling error:" + JSON.stringify(error));
          reject(error);
        });
      } catch (e) {
        this.logger.log("GetBase64FileDataServiceProvider calling catch error:" + JSON.stringify(e));
        reject(e);
      }
    });
    this.logger.trace("GetBase64FileDataServiceProvider--getEPolicyList--end");
    return promise;
  }
  openPdfFile(res) {
    if (this.name == "" || this.name == undefined || this.name == null) {
      this.name = res.name;
    }
    if (this.name.trim() == "" || this.name == null) {
      this.utils.dissmisProgressLoader();
      this.logger.error("ePolicyList - downlaodfile - name is empty");
      this.utils.showAlert("", this.translate.instant('generic_msgs.err_download_file'));
    } else if (res.base64String.trim() == "" || res.base64String == null) {
      this.utils.dissmisProgressLoader();
      this.logger.error("ePolicyList - downlaodfile - base64 data is empty");
      this.utils.showAlert("", this.translate.instant('generic_msgs.err_download_file'));
    } else {
      let fileType = this.name.split('.');
      fileType = fileType[1].trim().toLowerCase();
      let fileMimeType = this.mimeTypes[fileType];
      if (!fileMimeType) {
        fileMimeType = 'application/pdf';
      }
      let sliceSize = 512;
      var byteCharacters = atob(res.base64String);
      var byteArrays = [];
      for (var offset = 0; offset < byteCharacters.length; offset += sliceSize) {
        var slice = byteCharacters.slice(offset, offset + sliceSize);
        var byteNumbers = new Array(slice.length);
        for (var i = 0; i < slice.length; i++) {
          byteNumbers[i] = slice.charCodeAt(i);
        }
        var byteArray = new Uint8Array(byteNumbers);
        byteArrays.push(byteArray);
      }
      var blobPdf = new Blob(byteArrays, {
        type: fileMimeType
      });
      if (this.utils.getPlatform() == 'ios') {
        this.file.writeFile(this.file.documentsDirectory, this.name, blobPdf, {
          replace: true
        }).then(res => {
          this.openFile(this.file.documentsDirectory + "/" + this.name, fileMimeType);
        }).catch(err => {
          this.utils.dissmisProgressLoader();
          this.presentToast(this.translate.instant('generic_msgs.err_download_file'));
        });
      } else if (this.utils.getPlatform() == 'android') {
        this.file.checkDir(this.file.externalDataDirectory, this.dirName).then(res => {
          this.file.checkFile(this.file.externalDataDirectory + this.dirName + '/', this.name).then(res => {
            this.utils.dissmisProgressLoader();
            if (fileMimeType != 'application/zip') {
              this.showDialog("", this.translate.instant('generic_msgs.file_alredy_downloaded'), fileMimeType);
            } else {
              this.presentToast(this.translate.instant('save-photo.file_exists') + this.file.externalDataDirectory + this.dirName);
            }
          }).catch(err => {
            this.file.writeFile(this.file.externalDataDirectory + this.dirName + '/', this.name, blobPdf, {
              replace: true
            }).then(res => {
              this.saveFile(fileMimeType, res.toInternalURL());
            }).catch(err => {
              this.utils.dissmisProgressLoader();
              this.presentToast(this.translate.instant('generic_msgs.err_download_file'));
            });
          });
        }).catch(err => {
          this.file.createDir(this.file.externalDataDirectory, this.dirName, false).then(res => {
            this.file.writeFile(this.file.externalDataDirectory + this.dirName + '/', this.name, blobPdf, {
              replace: true
            }).then(res => {
              this.saveFile(fileMimeType, res.toInternalURL());
            }).catch(err => {
              this.utils.dissmisProgressLoader();
              this.presentToast(this.translate.instant('generic_msgs.err_download_file'));
            });
          }).catch(err => {
            this.utils.dissmisProgressLoader();
            this.presentToast(this.translate.instant('generic_msgs.err_download_file'));
          });
        });
      }
    }
  }
  saveFile(fileMimeType, location) {
    this.openFile(location, fileMimeType);
  }
  showDialog(title, message, fileType, downloadLink) {
    let buttons = [{
      text: this.translate.instant('save-photo.btn_open'),
      handler: () => {
        this.logger.trace("existing " + this.file.externalDataDirectory + this.dirName + '/' + this.name);
        this.checkPermission(this.file.externalDataDirectory + this.dirName + '/' + this.name, fileType);
      }
    }, {
      text: this.translate.instant('save-photo.download_again'),
      handler: () => {
        this.file.removeFile(this.file.externalDataDirectory + this.dirName + '/', this.name).then(res => {
          this.presentToast(this.translate.instant('save-photo.downlaod_progress'));
          this.getFileBase64(downloadLink);
        }).catch(err => {
          this.presentToast(this.translate.instant('generic_msgs.err_download_file'));
        });
      }
    }, {
      text: this.translate.instant('save-photo.btn_cancel'),
      handler: () => {}
    }];
    let alert = this.alertCtrl.create({
      header: title,
      message: message,
      buttons: buttons,
      backdropDismiss: false
    }).then(alert => alert.present());
  }
  showDialogIos(title, message, downloadLink) {
    let buttons = [{
      text: this.translate.instant('save-photo.btn_open'),
      handler: () => {
        this.openFile(this.file.documentsDirectory + "/" + this.name, "application/pdf");
      }
    }, {
      text: this.translate.instant('save-photo.download_again'),
      handler: () => {
        this.file.removeFile(this.file.documentsDirectory + "/", this.name).then(res => {
          this.presentToast(this.translate.instant('save-photo.downlaod_progress'));
          this.getFileBase64(downloadLink);
        }).catch(err => {
          this.presentToast(this.translate.instant('generic_msgs.err_download_file'));
        });
      }
    }, {
      text: this.translate.instant('save-photo.btn_cancel'),
      handler: () => {}
    }];
    let alert = this.alertCtrl.create({
      header: title,
      message: message,
      buttons: buttons,
      backdropDismiss: false
    }).then(alert => alert.present());
  }
  presentToast(msg) {
    return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
      let toast = yield this.toastCtrl.create({
        message: msg,
        duration: 3000,
        position: 'bottom'
      });
      yield toast.onDidDismiss();
      toast.present();
    });
  }
  checkPermission(location, fileMimeType) {
    this.androidPermissions.hasPermission(this.androidPermissions.PERMISSION.WRITE_EXTERNAL_STORAGE).then(status => {
      if (status.hasPermission) {
        this.openFile(location, fileMimeType);
      } else {
        this.androidPermissions.requestPermissions([this.androidPermissions.PERMISSION.READ_EXTERNAL_STORAGE, this.androidPermissions.PERMISSION.WRITE_EXTERNAL_STORAGE]).then(status => {
          if (status.hasPermission) {
            this.openFile(location, fileMimeType);
          }
        });
      }
    });
  }
  openFile(location, fileMimeType) {
    this.utils.dissmisProgressLoader();
    if (fileMimeType != 'application/zip') {
      this.fileOpener.open(location, fileMimeType).then(res => {}).catch(err => {
        this.presentToast(this.translate.instant('save-photo.file_opening_failed'));
      });
    } else {
      this.presentToast(this.translate.instant('save-photo.file_saved_to_android') + this.file.externalDataDirectory + this.dirName);
    }
  }
}
DownloadPdfProvider.ɵfac = function DownloadPdfProvider_Factory(t) {
  return new (t || DownloadPdfProvider)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"](src_providers_logger_service_logger_service__WEBPACK_IMPORTED_MODULE_0__.LoggerServiceProvider), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"](src_providers_utils_utils_service__WEBPACK_IMPORTED_MODULE_1__.UtilService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"](_ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_2__.File), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"](_awesome_cordova_plugins_file_opener_ngx__WEBPACK_IMPORTED_MODULE_3__.FileOpener), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_7__.AlertController), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_7__.ToastController), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__.TranslateService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"](_awesome_cordova_plugins_android_permissions_ngx__WEBPACK_IMPORTED_MODULE_4__.AndroidPermissions));
};
DownloadPdfProvider.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjectable"]({
  token: DownloadPdfProvider,
  factory: DownloadPdfProvider.ɵfac
});

/***/ }),

/***/ 15342:
/*!************************************************!*\
  !*** ./src/providers/json-store/json-store.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "JsonStoreProvider": () => (/* binding */ JsonStoreProvider)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _logger_service_logger_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../logger-service/logger-service */ 9999);
/* harmony import */ var _utils_utils_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/utils.service */ 30423);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _utils_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/config */ 43485);





class JsonStoreProvider {
  constructor(logger, utils, platform, config) {
    this.logger = logger;
    this.utils = utils;
    this.platform = platform;
    this.config = config;
    this.collectionNames = {
      userDetails: "UserDetails",
      imageDetails: "BannerDetails",
      refreshToken: "RefreshToken"
    };
  }
  /** JSONStore initilization **/
  initilizeJsonStore(collectionName, collections, options) {
    let promise = new Promise((resolve, reject) => {
      try {
        WL.JSONStore.init(collections, options).then(collections => {
          resolve(collections);
          this.logger.log("Initilize jsonStore" + collectionName + "success");
        }).fail(error => {
          reject(error);
          this.logger.error("Initilize jsonStore" + collectionName + "fail");
        });
      } catch (e) {
        reject(e);
        this.logger.error("Initilize jsonStore" + collectionName + "catch error:" + collectionName + "fail");
      }
    });
    return promise;
  }
  /**userdetails jsonStore init */
  initilizeJsonUserDetails() {
    let collections = {};
    collections[this.collectionNames.userDetails] = {};
    if (this.utils.getPlatform() == 'ios') {
      collections[this.collectionNames.userDetails].searchFields = {
        id: "string",
        token: "string",
        securityCheck: "string"
      };
    } else {
      collections[this.collectionNames.userDetails].searchFields = {
        id: "string",
        token: "string"
      };
    }
    collections[this.collectionNames.refreshToken] = {};
    collections[this.collectionNames.refreshToken].searchFields = {
      refreshToken: "string"
    };
    /**security added for jsonStore init */
    let PasswordForPerticlaurDevice = this.utils.getDeviceId();
    var options = {};
    if (this.utils.getPlatform() == 'ios') {
      options = {
        username: "sunaccessmobileapp"
      };
    } else {
      options = {
        username: "sunaccessmobileapp",
        password: PasswordForPerticlaurDevice
      };
    }
    let promise = new Promise((resolve, reject) => {
      this.initilizeJsonStore(this.collectionNames.userDetails, collections, options).then(res => {
        this.logger.trace("initilizeJsonStore success " + JSON.stringify(res));
        resolve(res);
      }, err => {
        this.logger.trace("initilizeJsonStore error " + JSON.stringify(err));
        reject(err);
      });
      this.initilizeJsonStore(this.collectionNames.refreshToken, collections, options).then(res => {
        this.logger.trace("initilizeJsonStore success " + JSON.stringify(res));
        resolve(res);
      }, err => {
        this.logger.trace("initilizeJsonStore error " + JSON.stringify(err));
        reject(err);
      });
    });
    return promise;
  }
  // /** banner images JSONStore initilization **/
  // initializeJsonStoreBannerImages() {
  // 	let collections = {};
  // 	collections[this.collectionNames.imageDetails] = {};
  // 	collections[this.collectionNames.imageDetails].searchFields = {
  // 		bannerImges: "string",
  // 		userPic: "string",
  // 		bannerImgUdate: "string",
  // 		userPicUdate: "string"
  // 	};
  // 	let promise = new Promise((resolve, reject) => {
  // 		WL.JSONStore.init(collections).then( (collections) =>{
  // 			resolve(collections);
  // 		}).fail( (error)=> {
  // 			reject(error);
  // 		});
  // 	});
  // 	return promise;
  // }
  /***getting jsondata based on passing collection name */
  getJsonStoreData(collection) {
    return new Promise((resolve, reject) => {
      WL.JSONStore.get(collection).findAll().then(res => {
        resolve(res);
        this.logger.log("data retrieved sucess from:" + collection);
      }).fail(error => {
        reject(error);
        this.logger.log("data retrieved failed from:" + collection);
      });
    }).catch(err => {
      this.logger.error("get jsonStore" + collection + "catch error:" + JSON.stringify(err));
    });
  }
  /** adding data to jsonStore nbased on collection name  */
  addDataToJsonStore(collection, data) {
    this.getJsonStoreData(collection).then(res => {
      if (res && res.length > 0) {
        this.replaceDataInJsonstore(collection, res[0]._id, data);
      } else {
        WL.JSONStore.get(collection).add(data).then(res => {
          this.logger.log("data added successfully in Json Store :" + collection);
        }, e => {
          this.logger.log("data added fail :" + collection);
        });
      }
    }, error => {
      this.logger.error("addDataToJsonStore" + collection + "catch error" + JSON.stringify(error));
    });
  }
  /** replacing  data in jsonstore based on collection name  */
  replaceDataInJsonstore(collection, id, data) {
    try {
      let options = {
        push: true
      };
      let doc = {
        _id: id,
        json: data
      };
      WL.JSONStore.get(collection).replace(doc, options).then(numberOfDocumentsReplaced => {
        this.logger.log("data replaced successfully in:" + collection);
      }, () => {
        this.logger.log("data replaced fail in:" + collection);
      });
    } catch (e) {
      this.logger.error("replaceDataIn" + collection + "Jsonstore catch error:" + JSON.stringify(e));
    }
  }
  /** removing jsonStore data based on collection  */
  removeDataInJson(collection) {
    this.getJsonStoreData(collection).then(res => {
      if (res[0]) {
        WL.JSONStore.get(collection).remove({
          _id: res[0]._id
        }, {
          push: true
        }).then(numberOfDocsRemoved => {
          this.logger.log("data removed successfully in:" + collection);
        }).fail(error => {
          this.logger.error("data removed failed in:" + collection);
        });
      }
    }, err => {
      this.logger.log("removeDataIn" + collection + " Jsonstore catch error:" + JSON.stringify(err));
    });
  }
  initializeNewJsonStore() {
    let promise = new Promise((resolve, reject) => {
      let collections = {};
      collections["UserDetails"] = {};
      let PasswordForPerticlaurDevice = this.utils.getDeviceId();
      var options = {};
      if (this.utils.getPlatform() == 'ios') {
        options = {
          username: "sunaccessmobileapp"
        };
      } else {
        options = {
          username: "sunaccessmobileapp",
          password: PasswordForPerticlaurDevice
        };
      }
      if (this.utils.getPlatform() == 'ios') {
        collections["UserDetails"].searchFields = {
          id: "string",
          token: "string",
          securityCheck: "string"
        };
        //	alert("data in config : " + this.config.passCodeInfo.userName + " " + this.config.passCodeInfo.passCodeToken);
        WL.JSONStore.init(collections, options).then(collections => {
          //   	alert("New Json store initialize success");
          this.addDataToJsonStore(this.collectionNames.userDetails, {
            id: this.config.passCodeInfo.userName,
            token: this.config.passCodeInfo.passCodeToken
          });
          resolve(collections);
        }).fail(error => {
          //		alert("New json store initialize failed");
          //		alert(JSON.stringify(error));
          reject(error);
        });
      }
    });
    return promise;
  }
  addToNewJsonStore() {
    let promise = new Promise((resolve, reject) => {
      WL.JSONStore.get(this.collectionNames.userDetails).add({
        id: this.config.passCodeInfo.userName,
        token: this.config.passCodeInfo.passCodeToken
      }).then(res => {
        //	alert("data in config while adding : " + this.config.passCodeInfo.userName + " " + this.config.passCodeInfo.passCodeToken);
        resolve(res);
      }, e => {
        reject(e);
      });
    });
    return promise;
  }
  initializeOldJsonStore() {
    let promise = new Promise((resolve, reject) => {
      let collections = {};
      collections["UserDetails"] = {};
      let PasswordForPerticlaurDevice = this.utils.getDeviceId();
      var options = {};
      if (this.utils.getPlatform() == 'ios') {
        options = {
          username: "sunaccessmobileapp"
        };
      } else {
        options = {
          username: "sunaccessmobileapp",
          password: PasswordForPerticlaurDevice
        };
      }
      if (this.utils.getPlatform() == 'ios') {
        collections["UserDetails"].searchFields = {
          id: "string",
          token: "string"
        };
        try {
          WL.JSONStore.init(collections, options).then(collections => {
            resolve(collections);
          }).fail(error => {
            reject(error);
          });
        } catch (e) {
          reject(e);
        }
      }
    });
    return promise;
  }
  // getDataFromOldJsonStore(){
  // 	let promise = new Promise((resolve, reject) => {
  // 		try{
  // 			WL.JSONStore.get("UserDetails").findAll().then((res) => {
  // 	//		alert("get old json store success");  
  // 			if (res[0] && res[0]['json']['id'] && res[0]['json']['token']) {
  // 						this.config.passCodeInfo.userName = res[0]['json']['id'];
  // 						this.config.passCodeInfo.passCodeToken = res[0]['json']['token'];	
  // 				//		alert("data get from old : " + this.config.passCodeInfo.userName + "  " + this.config.passCodeInfo.passCodeToken);				 
  // 						}
  // 						resolve(res);
  // 			}).fail((error) => {
  // 		//		alert("get old json store failed"); 
  // 		//		alert(JSON.stringify(error)); 
  // 				reject(error);  
  // 			});
  // 			} catch(error){
  // 		//		alert("get old json store failed"); 
  // 		//		alert(JSON.stringify(error));
  // 				reject(error);   
  // 			}
  // 	});
  // 	return promise;
  // }
  destroyOldJsonStore() {
    let promise = new Promise((resolve, reject) => {
      WL.JSONStore.destroy().then(res => {
        //		alert("destroy old json store success");  
        resolve(res);
      }).fail(function (error) {
        //		alert("destroy old json store failed");  
        //		alert(JSON.stringify(error));
        reject(error);
      });
    });
    return promise;
  }
}
JsonStoreProvider.ɵfac = function JsonStoreProvider_Factory(t) {
  return new (t || JsonStoreProvider)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_logger_service_logger_service__WEBPACK_IMPORTED_MODULE_0__.LoggerServiceProvider), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_utils_utils_service__WEBPACK_IMPORTED_MODULE_1__.UtilService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_4__.Platform), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_utils_config__WEBPACK_IMPORTED_MODULE_2__.ConfigProvider));
};
JsonStoreProvider.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({
  token: JsonStoreProvider,
  factory: JsonStoreProvider.ɵfac
});

/***/ }),

/***/ 9999:
/*!********************************************************!*\
  !*** ./src/providers/logger-service/logger-service.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoggerServiceProvider": () => (/* binding */ LoggerServiceProvider)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _utils_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/config */ 43485);


class LoggerServiceProvider {
  constructor(config) {
    this.config = config;
    this.isEnabled = true;
  }
  /**TRACE: used to display method entry messages */
  trace(msg) {
    //this.config.clientLogger.trace(msg);
  }
  /**Debug: used for method result */
  debug(msg) {
    //this.config.clientLogger.debug(msg);
  }
  /**LOG: used for display class instance */
  log(msg) {
    //this.config.clientLogger.info(msg);
  }
  /**Error:display unexpected exceptions */
  error(msg) {
    //this.config.clientLogger.error(msg);
  }
  warn(msg) {
    //this.config.clientLogger.warn(msg);
  }
}
LoggerServiceProvider.ɵfac = function LoggerServiceProvider_Factory(t) {
  return new (t || LoggerServiceProvider)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_utils_config__WEBPACK_IMPORTED_MODULE_0__.ConfigProvider));
};
LoggerServiceProvider.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
  token: LoggerServiceProvider,
  factory: LoggerServiceProvider.ɵfac
});

/***/ }),

/***/ 49756:
/*!****************************************************!*\
  !*** ./src/providers/push-service/push-service.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PushService": () => (/* binding */ PushService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 22560);

class PushService {
  constructor() {
    console.log('Hello PushServiceProvider Provider');
  }
  load() {
    MFPPush.initialize(successResponse => {
      console.log("Successfully intialized" + successResponse);
      MFPPush.registerNotificationsCallback(message => {
        console.log("message recived" + message);
        console.log(message);
        let notification;
        notification.present();
      });
      MFPPush.isPushSupported(successResponse => {
        console.log("Push SupportedN: " + successResponse);
        this.CheckSubscriptionAndRegister();
      }, failureResponse => {
        console.log("Failed to get push support status" + failureResponse);
      });
    }, failureResponse => {
      console.log("Failed to initialize" + failureResponse);
    });
  }
  CheckSubscriptionAndRegister() {
    let promise = new Promise((resolve, reject) => {
      WLAuthorizationManager.obtainAccessToken("push.mobileclient").then(function (accessToken) {
        console.log("accessToken", accessToken);
        MFPPush.getSubscriptions(function (tags) {
          console.log("SubsribedTagsFrom MFP", tags);
          if (tags.length == 0) {
            let options = {};
            MFPPush.registerDevice(options, successResponse => {
              console.log("register successfully");
              resolve({
                result: "success",
                message: "Successfully registered."
              });
            }, failureResponse => {
              console.log("Failed to register" + failureResponse);
              reject({
                result: "failure",
                message: "Registration failed, please try after some time."
              });
            });
          } else {
            console.log("allready registered");
            resolve({
              result: "success",
              message: "Successfully registered."
            });
          }
        }, failureResponse => {
          console.log("Failed to get push support status" + failureResponse);
        });
      });
    });
    return promise;
  }
  registerDevice() {
    let promise = new Promise((resolve, reject) => {
      WLAuthorizationManager.obtainAccessToken("push.mobileclient").then(function (accessToken) {
        console.log("accessTokenSettings", accessToken);
        // MFPPush.getSubscriptions(function(tags) {
        //           console.log("Notificaion SetingsSubsribedTagsFrom MFP",tags);
        //           if(tags.length==0  ){
        let options = {};
        MFPPush.registerDevice(options, successResponse => {
          resolve({
            result: "success",
            message: "Successfully registered."
          });
        }, failureResponse => {
          console.log("Failed to register" + failureResponse);
          reject({
            result: "failure",
            message: "Registration failed, please try after some time."
          });
        });
        // }
        // else{
        //    resolve({result:"success",message:"Successfully registered."}) ;
        // }
        //     }, failureResponse => {
        //   console.log("Failed to get push support status" + failureResponse);
        // });
      });
    });

    return promise;
  }
  unregisterDevice() {
    let promise = new Promise((resolve, reject) => {
      WLAuthorizationManager.obtainAccessToken("push.mobileclient").then(MFPPush.getSubscriptions(function (tags) {
        console.log("SubsribedTagsFrom MFP", tags);
        if (tags.length > 0) {
          MFPPush.unregisterDevice(successResponse => {
            console.log("Unregistered successfully");
            resolve({
              result: "success",
              message: "Successfully Unregistered"
            });
          }, failureResponse => {
            console.log("Failed to unregister");
            reject({
              result: "failure",
              message: "Failed to Unregister, Please try after some time."
            });
          });
        } else {
          resolve({
            result: "success",
            message: "Successfully Unregistered"
          });
        }
      }));
    });
    return promise;
  }
}
PushService.ɵfac = function PushService_Factory(t) {
  return new (t || PushService)();
};
PushService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
  token: PushService,
  factory: PushService.ɵfac
});

/***/ }),

/***/ 43485:
/*!***************************************!*\
  !*** ./src/providers/utils/config.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ConfigProvider": () => (/* binding */ ConfigProvider)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 22560);

class ConfigProvider {
  constructor() {
    this.userInfo = {};
    this.userDetails = {};
    this.currentPage = {};
    this.clientId = "SunAccess";
    this.clientSecret = "sun_access@sunlife";
    this.sessionTimeout = null;
    this.passCodeInfo = {};
    this.interValID = null;
    this.claimsSubmitModel = {};
    this.secureWordImage = "";
    this.policyList = [
      // {
      //   "policyNumber": "M7996789",
      //   "planName": " Lapsed1 CIMB Dual Income Insurance Plan",
      //   "encryptedPolicyNumber":"1234",
      //   "ownerName":"POR POE LOON",
      //   "lifeAssuredName":"kevin",
      //   "policyStatus":"expired"
      // },
      // {
      //   "policyNumber": "T5570763",
      //   "planName": " Ex SinarLink sakinah",
      //   "encryptedPolicyNumber":"akiVX9IX6hek_fWdG_apdA",
      //   "ownerName":"Chin",
      //   "policyStatus":"expired",
      //   "lifeAssuredName":"Deepansh"
      // },
      // {
      //   "policyNumber": "T5570763",
      //   "planName": "Lapsed2 SinarLink sakinah",
      //   "encryptedPolicyNumber":"akiVX9IX6hek_fWdG_apdA",
      //   "ownerName":"Chin",
      //   "policyStatus":"expired",
      //   "lifeAssuredName":"Deepansh"
      // },
      // {
      //   "policyNumber": "T5570763",
      //   "planName": "Lapse31 SinarLink sakinah",
      //   "encryptedPolicyNumber":"akiVX9IX6hek_fWdG_apdA",
      //   "ownerName":"Chin",
      //   "policyStatus":"expired",
      //   "lifeAssuredName":"Deepansh"
      // },
      // {
      //   "policyNumber": "T5570763",
      //   "planName": "Lapsed4 SinarLink sakinah",
      //   "encryptedPolicyNumber":"akiVX9IX6hek_fWdG_apdA",
      //   "ownerName":"Chin",
      //   "policyStatus":"lapsed",
      //   "lifeAssuredName":"Deepansh"
      // },
      // {
      //   "policyNumber": "T5570763",
      //   "planName": "Lapsed5 SinarLink sakinah",
      //   "encryptedPolicyNumber":"akiVX9IX6hek_fWdG_apdA",
      //   "ownerName":"Chin",
      //   "policyStatus":"lapsed",
      //   "lifeAssuredName":"Deepansh"
      // },
      // {
      //   "policyNumber": "T5570763",
      //   "planName": "Lapsed6 SinarLink sakinah",
      //   "encryptedPolicyNumber":"akiVX9IX6hek_fWdG_apdA",
      //   "ownerName":"Chin",
      //   "policyStatus":"lapsed",
      //   "lifeAssuredName":"Deepansh"
      // },
    ];
    this.lapsedPolicy = [];
    this.personalDataDropDown = {
      Occupation: [{
        "Title": "Account Assistant",
        "Class": "CLS 1"
      }, {
        "Title": "Accountant",
        "Class": "CLS 1"
      }, {
        "Title": "Administrator",
        "Class": "CLS 1"
      }, {
        "Title": "Architect",
        "Class": "CLS 1"
      }, {
        "Title": "Arms Dealer",
        "Class": "CLS 4"
      }, {
        "Title": "Army",
        "Class": "CLS 4"
      }, {
        "Title": "Assistant Manager",
        "Class": "CLS 1"
      }, {
        "Title": "Assistant Supervisor",
        "Class": "CLS 1"
      }, {
        "Title": "Auditor",
        "Class": "CLS 1"
      }, {
        "Title": "Baby Sitter",
        "Class": "CLS 2"
      }, {
        "Title": "Baker",
        "Class": "CLS 3"
      }, {
        "Title": "Banker",
        "Class": "CLS 1"
      }, {
        "Title": "Beautician",
        "Class": "CLS 2"
      }, {
        "Title": "Businessman/Businesswoman",
        "Class": "CLS 2"
      }, {
        "Title": "Carpenter",
        "Class": "CLS 4"
      }, {
        "Title": "Cashier",
        "Class": "CLS 1"
      }, {
        "Title": "Ceo",
        "Class": "CLS 1"
      }, {
        "Title": "Chef",
        "Class": "CLS 3"
      }, {
        "Title": "Child",
        "Class": "CLS 2"
      }, {
        "Title": "Cleaner",
        "Class": "CLS 4"
      }, {
        "Title": "Clerk",
        "Class": "CLS 1"
      }, {
        "Title": "Consultant",
        "Class": "CLS 1"
      }, {
        "Title": "Contractor",
        "Class": "CLS 3"
      }, {
        "Title": "Crane Operator",
        "Class": "CLS 4"
      }, {
        "Title": "Customer Service",
        "Class": "CLS 1"
      }, {
        "Title": "Deliveryman",
        "Class": "CLS 3"
      }, {
        "Title": "Dentist",
        "Class": "CLS 1"
      }, {
        "Title": "Designer",
        "Class": "CLS 1"
      }, {
        "Title": "Director",
        "Class": "CLS 1"
      }, {
        "Title": "Doctor",
        "Class": "CLS 1"
      }, {
        "Title": "Embassador",
        "Class": "CLS 2"
      }, {
        "Title": "Engineer",
        "Class": "CLS 1"
      }, {
        "Title": "Executive",
        "Class": "CLS 1"
      }, {
        "Title": "Factory Worker",
        "Class": "CLS 4"
      }, {
        "Title": "Farmer",
        "Class": "CLS 4"
      }, {
        "Title": "Fisherman",
        "Class": "CLS 3"
      }, {
        "Title": "Freelancer",
        "Class": "CLS 2"
      }, {
        "Title": "Gardener",
        "Class": "CLS 3"
      }, {
        "Title": "General Worker",
        "Class": "CLS 1"
      }, {
        "Title": "Government Servant",
        "Class": "CLS 1"
      }, {
        "Title": "Graphic Designer",
        "Class": "CLS 1"
      }, {
        "Title": "Hair Stylist",
        "Class": "CLS 2"
      }, {
        "Title": "Hawker",
        "Class": "CLS 3"
      }, {
        "Title": "Heavy Vehicle Driver(Above 5 Tons)",
        "Class": "CLS 4"
      }, {
        "Title": "Housekeeper",
        "Class": "CLS 3"
      }, {
        "Title": "Housewife",
        "Class": "CLS 2"
      }, {
        "Title": "It Personnel",
        "Class": "CLS 1"
      }, {
        "Title": "Kitchen Helper",
        "Class": "CLS 3"
      }, {
        "Title": "Lawyer",
        "Class": "CLS 1"
      }, {
        "Title": "Lecturer",
        "Class": "CLS 1"
      }, {
        "Title": "Light Vehicle Driver(Below 5 Tons)",
        "Class": "CLS 4"
      }, {
        "Title": "Machine Operator",
        "Class": "CLS 3"
      }, {
        "Title": "Maid",
        "Class": "CLS 3"
      }, {
        "Title": "Manager",
        "Class": "CLS 1"
      }, {
        "Title": "Manufacturing Operator",
        "Class": "CLS 1"
      }, {
        "Title": "Marketing Executive",
        "Class": "CLS 1"
      }, {
        "Title": "Masseur",
        "Class": "CLS 3"
      }, {
        "Title": "Mechanic",
        "Class": "CLS 3"
      }, {
        "Title": "Medical Assistant",
        "Class": "CLS 1"
      }, {
        "Title": "Money Changer",
        "Class": "CLS 3"
      }, {
        "Title": "Money Collector",
        "Class": "CLS 3"
      }, {
        "Title": "Money Lender",
        "Class": "CLS 3"
      }, {
        "Title": "Navy",
        "Class": "CLS 3"
      }, {
        "Title": "Nurse",
        "Class": "CLS 1"
      }, {
        "Title": "Operator",
        "Class": "CLS 1"
      }, {
        "Title": "Pensioner",
        "Class": "CLS 2"
      }, {
        "Title": "Personal Assistant",
        "Class": "CLS 1"
      }, {
        "Title": "Pharmacist",
        "Class": "CLS 1"
      }, {
        "Title": "Photographer",
        "Class": "CLS 1"
      }, {
        "Title": "Pilot",
        "Class": "CLS 2"
      }, {
        "Title": "Police",
        "Class": "CLS 4"
      }, {
        "Title": "Private Investigator",
        "Class": "CLS 4"
      }, {
        "Title": "Quality Controller",
        "Class": "CLS 1"
      }, {
        "Title": "Quantity Surveyor",
        "Class": "CLS 1"
      }, {
        "Title": "Receptionist",
        "Class": "CLS 1"
      }, {
        "Title": "Retiree",
        "Class": "CLS 1"
      }, {
        "Title": "Sales Person",
        "Class": "CLS 1"
      }, {
        "Title": "Scrap Metal Dealer",
        "Class": "CLS 2"
      }, {
        "Title": "Secretary",
        "Class": "CLS 1"
      }, {
        "Title": "Security Guard(Armed)",
        "Class": "CLS 4"
      }, {
        "Title": "Security Guard(Unarmed)",
        "Class": "CLS 4"
      }, {
        "Title": "Self Employed",
        "Class": "CLS 2"
      }, {
        "Title": "Shop Assistant",
        "Class": "CLS 2"
      }, {
        "Title": "Singer",
        "Class": "CLS 2"
      }, {
        "Title": "Site Supervisor",
        "Class": "CLS 3"
      }, {
        "Title": "Sole Proprietor",
        "Class": "CLS 2"
      }, {
        "Title": "Storekeeper",
        "Class": "CLS 3"
      }, {
        "Title": "Student",
        "Class": "CLS 1"
      }, {
        "Title": "Supervisor",
        "Class": "CLS 1"
      }, {
        "Title": "Tailor",
        "Class": "CLS 2"
      }, {
        "Title": "Taxi Driver",
        "Class": "CLS 3"
      }, {
        "Title": "Teacher",
        "Class": "CLS 1"
      }, {
        "Title": "Technician",
        "Class": "CLS 4"
      }, {
        "Title": "Trainer",
        "Class": "CLS 1"
      }, {
        "Title": "Tutor",
        "Class": "CLS 1"
      }, {
        "Title": "Unemployed",
        "Class": "CLS 2"
      }, {
        "Title": "Waiter",
        "Class": "CLS 3"
      }, {
        "Title": "Waitress",
        "Class": "CLS 3"
      }, {
        "Title": "Welder",
        "Class": "CLS 3"
      }, {
        "Title": "Wireman",
        "Class": "CLS 3"
      }, {
        "Title": "Others",
        "Class": "OTH"
      }],
      NatureOfBusiness: [{
        "Title": "Accounts"
      }, {
        "Title": "Acetylene Gas Manufacturer"
      }, {
        "Title": "Advertising"
      }, {
        "Title": "Agriculture"
      }, {
        "Title": "Air-Conditioning"
      }, {
        "Title": "Airforce"
      }, {
        "Title": "Airport"
      }, {
        "Title": "Ambulance Services"
      }, {
        "Title": "Amusement Park"
      }, {
        "Title": "Architectural"
      }, {
        "Title": "Armed Forces"
      }, {
        "Title": "Automobile Industry"
      }, {
        "Title": "Baby Sitter"
      }, {
        "Title": "Bakelite & Other Non-Pyroxlin Manufacture"
      }, {
        "Title": "Bakeries(Factories + Shops)"
      }, {
        "Title": "Bank"
      }, {
        "Title": "Bar"
      }, {
        "Title": "Baths, Beaches And Pools"
      }, {
        "Title": "Beauty Parlour"
      }, {
        "Title": "Beverage And Bottling Industry"
      }, {
        "Title": "Bicycle Shop"
      }, {
        "Title": "Billiard Room"
      }, {
        "Title": "Bird's Nest Collector"
      }, {
        "Title": "Blacksmith And Tool Dresser"
      }, {
        "Title": "Boat-Builder"
      }, {
        "Title": "Boiler Manufacturer (Installation And Maintenance)"
      }, {
        "Title": "Bowling Alley"
      }, {
        "Title": "Brick Manufacturer"
      }, {
        "Title": "Bricklayer And Mason"
      }, {
        "Title": "Broom & Brush Manufacture"
      }, {
        "Title": "Building & Construction"
      }, {
        "Title": "Building Maintenance"
      }, {
        "Title": "Casino"
      }, {
        "Title": "Cement, Gypsum & Lime Manufacture"
      }, {
        "Title": "Cinema (Motion Pictures & Stage )"
      }, {
        "Title": "Circus"
      }, {
        "Title": "Clock Shop"
      }, {
        "Title": "Clothing Manufacture (Factory , Shop Or Store)"
      }, {
        "Title": "Coffee Shop/House"
      }, {
        "Title": "Cold Storage"
      }, {
        "Title": "Commercial Aviation"
      }, {
        "Title": "Compressed Gas Manufacturer"
      }, {
        "Title": "Computer Industry"
      }, {
        "Title": "Container Industries"
      }, {
        "Title": "Delivery, Express, Moving Companies"
      }, {
        "Title": "Department Store"
      }, {
        "Title": "Diving Sports"
      }, {
        "Title": "Docks"
      }, {
        "Title": "Domestic Work"
      }, {
        "Title": "Dry Batteries Manufacturer"
      }, {
        "Title": "Electricity Supply Industry"
      }, {
        "Title": "Electronic Industry"
      }, {
        "Title": "Entertainment"
      }, {
        "Title": "Explosive & Firework Manufacture"
      }, {
        "Title": "Farm"
      }, {
        "Title": "Fire Department"
      }, {
        "Title": "Fishing Industry"
      }, {
        "Title": "Fitness"
      }, {
        "Title": "Fitter"
      }, {
        "Title": "Funeral Matters"
      }, {
        "Title": "Furniture & Other Wood Working Factory"
      }, {
        "Title": "Garage, Filling & Service Station"
      }, {
        "Title": "Gas Distributor(Cooking)"
      }, {
        "Title": "Glass & Mirror Manufacturer"
      }, {
        "Title": "Government"
      }, {
        "Title": "Hospital"
      }, {
        "Title": "Hotels"
      }, {
        "Title": "Ice Industry"
      }, {
        "Title": "Insurance"
      }, {
        "Title": "Jewellery"
      }, {
        "Title": "Karaoke Lounge"
      }, {
        "Title": "Kennel"
      }, {
        "Title": "Legal"
      }, {
        "Title": "Lumber Industry"
      }, {
        "Title": "Marine Engineering"
      }, {
        "Title": "Media"
      }, {
        "Title": "Medical Shop"
      }, {
        "Title": "Merchant Marine"
      }, {
        "Title": "Metal Industry"
      }, {
        "Title": "Money Changer"
      }, {
        "Title": "Money Collector"
      }, {
        "Title": "Money Lender"
      }, {
        "Title": "Neon Light Signs"
      }, {
        "Title": "Night Club"
      }, {
        "Title": "Non Income Group"
      }, {
        "Title": "Oil And Natural Gas Industries (Exploration And Production)"
      }, {
        "Title": "Oil And Natural Industries (Oil Refining)"
      }, {
        "Title": "Optical Goods Industry"
      }, {
        "Title": "Paint, Lacquer, Varnish Manufacture"
      }, {
        "Title": "Paper & Pulp Industy"
      }, {
        "Title": "Pest Control"
      }, {
        "Title": "Photocopying Machine"
      }, {
        "Title": "Photo-Studio"
      }, {
        "Title": "Potteries (China, Earthenware, Glazed Brick, Porcelain, Tile & Terra Cotta)"
      }, {
        "Title": "Printing & Publishing"
      }, {
        "Title": "Prison Service"
      }, {
        "Title": "Private Aviation"
      }, {
        "Title": "Public Sanitation"
      }, {
        "Title": "Quarrying"
      }, {
        "Title": "Radio & Television Industry"
      }, {
        "Title": "Railroad"
      }, {
        "Title": "Real Estate"
      }, {
        "Title": "Religious"
      }, {
        "Title": "Restaurant"
      }, {
        "Title": "Retail Shop"
      }, {
        "Title": "Road Maintenance And Construction"
      }, {
        "Title": "Rubber Industry"
      }, {
        "Title": "Rubber Stamp Maker"
      }, {
        "Title": "Rug & Carpet"
      }, {
        "Title": "Ship Building"
      }, {
        "Title": "Ship Repair"
      }, {
        "Title": "Snooker Centre"
      }, {
        "Title": "Sports & Pastimes"
      }, {
        "Title": "Stockyard, Slaughter House, Abattoir, Packing House"
      }, {
        "Title": "Stone Industry"
      }, {
        "Title": "Sugar Refineries"
      }, {
        "Title": "Telephone & Telegram"
      }, {
        "Title": "Textile Industry"
      }, {
        "Title": "Tinsmith"
      }, {
        "Title": "Tobacco Industry"
      }, {
        "Title": "Travel Agency"
      }, {
        "Title": "Tunnelling"
      }, {
        "Title": "Tyre Manufacture"
      }, {
        "Title": "Veterinary"
      }, {
        "Title": "Water Supplies"
      }, {
        "Title": "Zoo"
      }, {
        "Title": "Others"
      }],
      Country: [{
        "Code": "AF",
        "Name": "Afghanistan"
      }, {
        "Code": "AL",
        "Name": "Albania"
      }, {
        "Code": "DZ",
        "Name": "Algeria"
      }, {
        "Code": "AS",
        "Name": "American Samoa"
      }, {
        "Code": "AD",
        "Name": "Andorra"
      }, {
        "Code": "AO",
        "Name": "Angola"
      }, {
        "Code": "AI",
        "Name": "Anguilla"
      }, {
        "Code": "AQ",
        "Name": "Antarctica"
      }, {
        "Code": "AG",
        "Name": "Antigua And Barbuda"
      }, {
        "Code": "AR",
        "Name": "Argentina"
      }, {
        "Code": "AM",
        "Name": "Armenia"
      }, {
        "Code": "AW",
        "Name": "Aruba"
      }, {
        "Code": "AU",
        "Name": "Australia"
      }, {
        "Code": "AT",
        "Name": "Austria"
      }, {
        "Code": "AZ",
        "Name": "Azerbaijan"
      }, {
        "Code": "BS",
        "Name": "Bahamas"
      }, {
        "Code": "BH",
        "Name": "Bahrain"
      }, {
        "Code": "BD",
        "Name": "Bangladesh"
      }, {
        "Code": "BB",
        "Name": "Barbados"
      }, {
        "Code": "BY",
        "Name": "Belarus"
      }, {
        "Code": "BE",
        "Name": "Belgium"
      }, {
        "Code": "BZ",
        "Name": "Belize"
      }, {
        "Code": "BJ",
        "Name": "Benin"
      }, {
        "Code": "BM",
        "Name": "Bermuda"
      }, {
        "Code": "BT",
        "Name": "Bhutan"
      }, {
        "Code": "BO",
        "Name": "Bolivia"
      }, {
        "Code": "BA",
        "Name": "Bosnia-Herzegovina"
      }, {
        "Code": "BW",
        "Name": "Botswana"
      }, {
        "Code": "BV",
        "Name": "Bouvet Island"
      }, {
        "Code": "BR",
        "Name": "Brazil"
      }, {
        "Code": "IO",
        "Name": "British Indian Ocean Territory"
      }, {
        "Code": "VG",
        "Name": "British Virgin Islands"
      }, {
        "Code": "BN",
        "Name": "Brunei Darussalam"
      }, {
        "Code": "BG",
        "Name": "Bulgaria"
      }, {
        "Code": "BF",
        "Name": "Burkina Faso"
      }, {
        "Code": "BI",
        "Name": "Burundi"
      }, {
        "Code": "KH",
        "Name": "Cambodia"
      }, {
        "Code": "CM",
        "Name": "Cameroon"
      }, {
        "Code": "CA",
        "Name": "Canada"
      }, {
        "Code": "CT",
        "Name": "Canton And Enderbury Islan"
      }, {
        "Code": "CV",
        "Name": "Cape Verde"
      }, {
        "Code": "KY",
        "Name": "Cayman Islands"
      }, {
        "Code": "CF",
        "Name": "Central African Republic"
      }, {
        "Code": "TD",
        "Name": "Chad"
      }, {
        "Code": "CL",
        "Name": "Chile"
      }, {
        "Code": "CN",
        "Name": "China"
      }, {
        "Code": "CX",
        "Name": "Christmas Island"
      }, {
        "Code": "CC",
        "Name": "Cocos Islands"
      }, {
        "Code": "CO",
        "Name": "Colombia"
      }, {
        "Code": "KM",
        "Name": "Comoros"
      }, {
        "Code": "CK",
        "Name": "Cook Islands"
      }, {
        "Code": "CR",
        "Name": "Costa Rica"
      }, {
        "Code": "HR",
        "Name": "Croatia"
      }, {
        "Code": "CU",
        "Name": "Cuba"
      }, {
        "Code": "CW",
        "Name": "Curacao"
      }, {
        "Code": "CY",
        "Name": "Cyprus"
      }, {
        "Code": "CZ",
        "Name": "Czech Republic"
      }, {
        "Code": "DK",
        "Name": "Denmark"
      }, {
        "Code": "DJ",
        "Name": "Djibouti"
      }, {
        "Code": "DM",
        "Name": "Dominica"
      }, {
        "Code": "DO",
        "Name": "Dominican Republic"
      }, {
        "Code": "TL",
        "Name": "East Timor"
      }, {
        "Code": "EC",
        "Name": "Ecuador"
      }, {
        "Code": "EG",
        "Name": "Egypt"
      }, {
        "Code": "SV",
        "Name": "El Salvador"
      }, {
        "Code": "GQ",
        "Name": "Equatorial Guinea"
      }, {
        "Code": "ER",
        "Name": "Eritrea"
      }, {
        "Code": "EE",
        "Name": "Estonia"
      }, {
        "Code": "ET",
        "Name": "Ethiopia"
      }, {
        "Code": "FK",
        "Name": "Falkland Islands"
      }, {
        "Code": "FO",
        "Name": "Faroe Islands"
      }, {
        "Code": "FJ",
        "Name": "Fiji"
      }, {
        "Code": "FI",
        "Name": "Finland"
      }, {
        "Code": "FR",
        "Name": "France"
      }, {
        "Code": "PF",
        "Name": "French Polynesia"
      }, {
        "Code": "GA",
        "Name": "Gabon"
      }, {
        "Code": "GM",
        "Name": "Gambia"
      }, {
        "Code": "GE",
        "Name": "Georgia"
      }, {
        "Code": "DE",
        "Name": "Germany"
      }, {
        "Code": "GH",
        "Name": "Ghana"
      }, {
        "Code": "GI",
        "Name": "Gibraltar"
      }, {
        "Code": "GR",
        "Name": "Greece"
      }, {
        "Code": "GL",
        "Name": "Greenland"
      }, {
        "Code": "GD",
        "Name": "Grenada"
      }, {
        "Code": "GP",
        "Name": "Guadeloupe"
      }, {
        "Code": "GU",
        "Name": "Guam"
      }, {
        "Code": "GT",
        "Name": "Guatemala"
      }, {
        "Code": "GG",
        "Name": "Guernsey"
      }, {
        "Code": "GN",
        "Name": "Guinea"
      }, {
        "Code": "GW",
        "Name": "Guinea Bissau"
      }, {
        "Code": "GY",
        "Name": "Guyana"
      }, {
        "Code": "HT",
        "Name": "Haiti"
      }, {
        "Code": "HN",
        "Name": "Honduras"
      }, {
        "Code": "HK",
        "Name": "Hong Kong"
      }, {
        "Code": "HU",
        "Name": "Hungary"
      }, {
        "Code": "IS",
        "Name": "Iceland"
      }, {
        "Code": "IN",
        "Name": "India"
      }, {
        "Code": "ID",
        "Name": "Indonesia"
      }, {
        "Code": "IR",
        "Name": "Iran"
      }, {
        "Code": "IQ",
        "Name": "Iraq"
      }, {
        "Code": "IE",
        "Name": "Ireland"
      }, {
        "Code": "IM",
        "Name": "Isle Of Man"
      }, {
        "Code": "IL",
        "Name": "Israel"
      }, {
        "Code": "IT",
        "Name": "Italy"
      }, {
        "Code": "CI",
        "Name": "Ivory Coast"
      }, {
        "Code": "JM",
        "Name": "Jamaica"
      }, {
        "Code": "JP",
        "Name": "Japan"
      }, {
        "Code": "JO",
        "Name": "Jordan"
      }, {
        "Code": "KZ",
        "Name": "Kazakhstan"
      }, {
        "Code": "KE",
        "Name": "Kenya"
      }, {
        "Code": "KI",
        "Name": "Kiribati"
      }, {
        "Code": "KW",
        "Name": "Kuwait"
      }, {
        "Code": "KG",
        "Name": "Kyrgyzstan"
      }, {
        "Code": "LA",
        "Name": "Laos"
      }, {
        "Code": "LV",
        "Name": "Latvia"
      }, {
        "Code": "LB",
        "Name": "Lebanon"
      }, {
        "Code": "LS",
        "Name": "Lesotho"
      }, {
        "Code": "LR",
        "Name": "Liberia"
      }, {
        "Code": "LY",
        "Name": "Libya"
      }, {
        "Code": "LI",
        "Name": "Liechtenstein"
      }, {
        "Code": "LT",
        "Name": "Lithuania"
      }, {
        "Code": "LU",
        "Name": "Luxembourg"
      }, {
        "Code": "MO",
        "Name": "Macau"
      }, {
        "Code": "MK",
        "Name": "Macedonia"
      }, {
        "Code": "MG",
        "Name": "Madagascar"
      }, {
        "Code": "MW",
        "Name": "Malawi"
      }, {
        "Code": "MY",
        "Name": "Malaysia"
      }, {
        "Code": "MV",
        "Name": "Maldives"
      }, {
        "Code": "ML",
        "Name": "Mali"
      }, {
        "Code": "MT",
        "Name": "Malta"
      }, {
        "Code": "MH",
        "Name": "Marshall Islands"
      }, {
        "Code": "MQ",
        "Name": "Martinique"
      }, {
        "Code": "MR",
        "Name": "Mauritania"
      }, {
        "Code": "MU",
        "Name": "Mauritius"
      }, {
        "Code": "YT",
        "Name": "Mayotte"
      }, {
        "Code": "MX",
        "Name": "Mexico"
      }, {
        "Code": "FM",
        "Name": "Micronesia"
      }, {
        "Code": "MD",
        "Name": "Moldova"
      }, {
        "Code": "MC",
        "Name": "Monaco"
      }, {
        "Code": "MN",
        "Name": "Mongolia"
      }, {
        "Code": "ME",
        "Name": "Montenegro"
      }, {
        "Code": "MS",
        "Name": "Montserrat"
      }, {
        "Code": "MA",
        "Name": "Morocco"
      }, {
        "Code": "MZ",
        "Name": "Mozambique"
      }, {
        "Code": "MM",
        "Name": "Myanmar"
      }, {
        "Code": "NA",
        "Name": "Namibia"
      }, {
        "Code": "NR",
        "Name": "Nauru"
      }, {
        "Code": "NP",
        "Name": "Nepal"
      }, {
        "Code": "NL",
        "Name": "Netherlands"
      }, {
        "Code": "AN",
        "Name": "Netherlands Antilles"
      }, {
        "Code": "NC",
        "Name": "New Caledonia"
      }, {
        "Code": "NZ",
        "Name": "New Zealand"
      }, {
        "Code": "NI",
        "Name": "Nicaragua"
      }, {
        "Code": "NE",
        "Name": "Niger"
      }, {
        "Code": "NG",
        "Name": "Nigeria"
      }, {
        "Code": "NU",
        "Name": "Niue"
      }, {
        "Code": "KP",
        "Name": "North Korea"
      }, {
        "Code": "MP",
        "Name": "Northern Mariana Islands"
      }, {
        "Code": "NO",
        "Name": "Norway"
      }, {
        "Code": "OM",
        "Name": "Oman"
      }, {
        "Code": "PK",
        "Name": "Pakistan"
      }, {
        "Code": "PW",
        "Name": "Palau"
      }, {
        "Code": "PS",
        "Name": "Palestine"
      }, {
        "Code": "PA",
        "Name": "Panama"
      }, {
        "Code": "PG",
        "Name": "Papua New Guinea"
      }, {
        "Code": "PY",
        "Name": "Paraguay"
      }, {
        "Code": "PE",
        "Name": "Peru"
      }, {
        "Code": "PH",
        "Name": "Philippines"
      }, {
        "Code": "PN",
        "Name": "Pitcairn"
      }, {
        "Code": "PL",
        "Name": "Poland"
      }, {
        "Code": "PT",
        "Name": "Portugal"
      }, {
        "Code": "PR",
        "Name": "Puerto Rico"
      }, {
        "Code": "QA",
        "Name": "Qatar"
      }, {
        "Code": "CG",
        "Name": "Republic Of The Congo"
      }, {
        "Code": "RE",
        "Name": "Reunion"
      }, {
        "Code": "RO",
        "Name": "Romania"
      }, {
        "Code": "RU",
        "Name": "Russia"
      }, {
        "Code": "RW",
        "Name": "Rwanda"
      }, {
        "Code": "BL",
        "Name": "Saint Barthelemy"
      }, {
        "Code": "SH",
        "Name": "Saint Helena"
      }, {
        "Code": "KN",
        "Name": "Saint Kitts And Nevis"
      }, {
        "Code": "LC",
        "Name": "Saint Lucia"
      }, {
        "Code": "MF",
        "Name": "Saint Martin"
      }, {
        "Code": "PM",
        "Name": "Saint Pierre And Miquelon"
      }, {
        "Code": "VC",
        "Name": "Saint Vincent & The Grenadines"
      }, {
        "Code": "WS",
        "Name": "Samoa"
      }, {
        "Code": "SM",
        "Name": "San Marino"
      }, {
        "Code": "ST",
        "Name": "Sao Tome And Principe"
      }, {
        "Code": "SA",
        "Name": "Saudi Arabia"
      }, {
        "Code": "SN",
        "Name": "Senegal"
      }, {
        "Code": "RS",
        "Name": "Serbia"
      }, {
        "Code": "SC",
        "Name": "Seychelles"
      }, {
        "Code": "SL",
        "Name": "Sierra Leone"
      }, {
        "Code": "SG",
        "Name": "Singapore"
      }, {
        "Code": "SX",
        "Name": "Sint Maarten"
      }, {
        "Code": "SK",
        "Name": "Slovakia"
      }, {
        "Code": "SI",
        "Name": "Slovenia"
      }, {
        "Code": "SB",
        "Name": "Solomon Islands"
      }, {
        "Code": "SO",
        "Name": "Somalia"
      }, {
        "Code": "ZA",
        "Name": "South Africa"
      }, {
        "Code": "KR",
        "Name": "South Korea"
      }, {
        "Code": "SS",
        "Name": "South Sudan"
      }, {
        "Code": "ES",
        "Name": "Spain"
      }, {
        "Code": "LK",
        "Name": "Sri Lanka"
      }, {
        "Code": "SD",
        "Name": "Sudan"
      }, {
        "Code": "SR",
        "Name": "Suriname"
      }, {
        "Code": "SJ",
        "Name": "Svalbard & Jan Mayen Islands"
      }, {
        "Code": "SZ",
        "Name": "Swaziland"
      }, {
        "Code": "SE",
        "Name": "Sweden"
      }, {
        "Code": "CH",
        "Name": "Switzerland"
      }, {
        "Code": "SY",
        "Name": "Syrian Arab Republic"
      }, {
        "Code": "TW",
        "Name": "Taiwan"
      }, {
        "Code": "TJ",
        "Name": "Tajikistan"
      }, {
        "Code": "TZ",
        "Name": "Tanzania"
      }, {
        "Code": "TH",
        "Name": "Thailand"
      }, {
        "Code": "TG",
        "Name": "Togo"
      }, {
        "Code": "TK",
        "Name": "Tokelau"
      }, {
        "Code": "TO",
        "Name": "Tonga"
      }, {
        "Code": "TT",
        "Name": "Trinidad And Tobago"
      }, {
        "Code": "TN",
        "Name": "Tunisia"
      }, {
        "Code": "TR",
        "Name": "Turkey"
      }, {
        "Code": "TM",
        "Name": "Turkmenistan"
      }, {
        "Code": "TC",
        "Name": "Turks And Caicos Islands"
      }, {
        "Code": "TV",
        "Name": "Tuvalu"
      }, {
        "Code": "VI",
        "Name": "U.S. Virgin Islands"
      }, {
        "Code": "UG",
        "Name": "Uganda"
      }, {
        "Code": "UA",
        "Name": "Ukraine"
      }, {
        "Code": "AE",
        "Name": "United Arab Emirates"
      }, {
        "Code": "GB",
        "Name": "United Kingdom"
      }, {
        "Code": "US",
        "Name": "United States"
      }, {
        "Code": "UY",
        "Name": "Uruguay"
      }, {
        "Code": "UZ",
        "Name": "Uzbekistan"
      }, {
        "Code": "VU",
        "Name": "Vanuatu"
      }, {
        "Code": "VA",
        "Name": "Vatican City Stateo"
      }, {
        "Code": "VE",
        "Name": "Venezuela"
      }, {
        "Code": "VN",
        "Name": "Vietnam"
      }, {
        "Code": "WK",
        "Name": "Wake Island"
      }, {
        "Code": "WF",
        "Name": "Wallis And Futuna Islands"
      }, {
        "Code": "EH",
        "Name": "Western Sahara"
      }, {
        "Code": "YE",
        "Name": "Yemen"
      }, {
        "Code": "YU",
        "Name": "Yugoslavia"
      }, {
        "Code": "ZM",
        "Name": "Zambia"
      }, {
        "Code": "ZW",
        "Name": "Zimbabwe"
      }, {
        "Code": "OTH",
        "Name": "Others"
      }],
      MalaysiaStates: [{
        "Code": "JOHO",
        "Name": "Johor"
      }, {
        "Code": "KEDA",
        "Name": "Kedah"
      }, {
        "Code": "KELA",
        "Name": "Kelantan"
      }, {
        "Code": "MALA",
        "Name": "Malacca"
      }, {
        "Code": "NEGE",
        "Name": "Negeri Sembilan"
      }, {
        "Code": "PAHA",
        "Name": "Pahang"
      }, {
        "Code": "PERA",
        "Name": "Perak"
      }, {
        "Code": "PERL",
        "Name": "Perlis"
      }, {
        "Code": "PENA",
        "Name": "Penang"
      }, {
        "Code": "SABA",
        "Name": "Sabah"
      }, {
        "Code": "SARA",
        "Name": "Sarawak"
      }, {
        "Code": "SELA",
        "Name": "Selangor"
      }, {
        "Code": "TERE",
        "Name": "Terengganu"
      }, {
        "Code": "KUAL",
        "Name": "WP Kuala Lumpur"
      }, {
        "Code": "LABU",
        "Name": "WP Labuan"
      }, {
        "Code": "PUTR",
        "Name": "WP Putrajaya"
      }],
      Race: [{
        "Value": "CHI",
        "Text": "Chinese"
      }, {
        "Value": "IND",
        "Text": "Indian"
      }, {
        "Value": "MAL",
        "Text": "Malay"
      }, {
        "Value": "OTH",
        "Text": "Others"
      }]
    };
    /** inteval and sesssion time */
    this.CHECK_INTERVAL = 10 * 1000; //in ms
    this.SESSION_TIME = 18; // in mints
    this.OPEN_CAMERA = 1;
    this.OPEN_GALLERY = 2;
    this.UPLOAD_PIC = 3;
    this.contact_us = {};
    this.sunactiv = {};
    this.claimsData = {
      date: "1st September, 2022"
    };
    this.PAGE_SIZE_NewsLetter = 10;
    /**static months  */
    this.months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    this.userInfo = {
      token: null,
      expiresIn: null,
      userId: null,
      name: null,
      email: '',
      identityNumber: null,
      contactNumber: null,
      role: null,
      forceChangePassword: null,
      lastLoginDate: null,
      issued: null,
      expires: null,
      encryptedUserId: null,
      sessionId: null,
      unreadNoti: null,
      notification_subs_prompt: null,
      notiicationsList: null,
      subscribedNotitags: null,
      isNotificationRegistered: null
    };
    this.userDetails = {
      name: null,
      addressField1: null,
      addressField2: null,
      addressField3: null,
      addressField4: null,
      addressField5: null,
      email: null,
      homePhone: null,
      mobilePhone: null,
      officePhone: null,
      identityNumber: null,
      profilePicture: null,
      birthDate: null,
      nationality: null,
      race: null,
      maritalStatus: null
    };
    this.currentPage = {
      pageName: null
    };
    /**To save passcode details of the JSON STORE data */
    this.passCodeInfo = {
      deviceID: null,
      userName: null,
      passCodeToken: null,
      hasPasscodeAuth: false
    };
    /**
    * Model Object for forms
    */
    this.claimsSubmitModel = {
      "typeOfClaim": "",
      "typeOfPlan": "",
      "policyNo": "",
      "lifeAssured": "",
      "nricNo": "",
      "address": "",
      "postCode": "",
      "state": "",
      "telephoneNo": "",
      "mobileNo": "",
      "email": "",
      "dateOfLoss": "",
      "natureOfLoss": "",
      "locationOfRisk": "",
      "claimWithOtherInsurance": "",
      "claimAmount": "",
      "bankName": "",
      "bankAcName": "",
      "bankAcNo": "",
      "deathDate": "",
      "causeOfDeath": "",
      "dateOfIllnessDiagnosed": "",
      "nameAndAddressOfDoctor": "",
      "activityAtTimeOfAccident": "",
      "accidentReportedToPolice": "",
      "postmortemOrAutopsy": "",
      "claimantName": "",
      "claimantNricNo": "",
      "claimantAddress": "",
      "claimantPostCode": "",
      "claimantState": "",
      "claimantTelephoneNo": "",
      "claimantMobileNo": "",
      "claimantEmail": "",
      "relationWithDeceased": "",
      "claimantBankName": "",
      "claimantBankAcName": "",
      "claimantBankAcNo": "",
      "accidentDate": "",
      "accidentTime": "",
      "howAccidentHappen": "",
      "occupation": "",
      "currentlyEmployed": "",
      "criticalIllnessType": "",
      "files": []
    };
    //Here we are placing the social media App and Bowser urls
    this.contact_us = {
      "emailId": 'policy.admin@sunlifemalaysia.com.',
      "contact_no": '1300-88-5055',
      "fb_ios": "fb://",
      "fb_android": "com.facebook.katana",
      "fb_app_url": {
        ios: "fb://page?id=531338413579950",
        android: "fb://page/531338413579950"
      },
      "fb_browser_url": "https://www.facebook.com/SunLifeMalaysia/",
      "youtube_ios": "youtube://",
      "youtube_android": "com.google.android.youtube.player",
      "youtube_app_url": {
        ios: "https://youtu.be/3JoBKBoWFGo",
        android: "https://youtu.be/3JoBKBoWFGo"
      },
      "youtube_browser_url": "https://www.youtube.com/watch?v=3JoBKBoWFGo",
      "insta_ios": "instagram://",
      "insta_android": "com.instagram.android",
      "insta_app_url": {
        ios: "instagram://user?username=sunlifemalaysia_my",
        android: "http://instagram.com/_u/sunlifemalaysia_my"
      },
      "insta_browser_url": "https://www.instagram.com/sunlifemalaysia_my/",
      "maps_ios": "comgooglemaps://",
      "maps_android": "com.google.android.gms.maps",
      "maps_app_url": {
        ios: "https://www.google.com/maps/place/Sun+Life+Malaysia/@3.1609661,101.6949777,17z/data=!3m1!4b1!4m5!3m4!1s0x31cc482f8c0ed78f:0x18085aea1c2aacb3!8m2!3d3.1609661!4d101.6971664",
        android: "https://www.google.com/maps/place/Sun+Life+Malaysia/@3.1609661,101.6949777,17z/data=!3m1!4b1!4m5!3m4!1s0x31cc482f8c0ed78f:0x18085aea1c2aacb3!8m2!3d3.1609661!4d101.6971664"
      },
      "maps_browser_url": "https://www.google.com/maps/place/Sun+Life+Malaysia/@3.1609661,101.6949777,17z/data=!3m1!4b1!4m5!3m4!1s0x31cc482f8c0ed78f:0x18085aea1c2aacb3!8m2!3d3.1609661!4d101.6971664",
      "sunlife_browser": "https://www.sunlifemalaysia.com/",
      "sunlife_fatca": "https://www.sunlifemalaysia.com/client-care/make-a-service-request/insurance/"
    };
    this.sunactiv = {
      "sumsungApp_url": "https://play.google.com/store/apps/details?id=com.sec.android.app.shealth&hl=en",
      "googleApp_url": "https://play.google.com/store/apps/details?id=com.google.android.apps.fitness&hl=en",
      "source_samsung": "Samsung Health",
      "source_apple": "Apple Health",
      "source_unsync": "Unsync",
      "source_google": "Google Fit",
      "platform_ios": "ios",
      "platform_android": "android",
      "google_fit_package_name": "com.google.android.apps.fitness",
      "samsung_health_package_name": "com.sec.android.app.shealth",
      "prompt_install_google_fit_title": "Do you want to install Google Fit?",
      "prompt_install_google_fit_desc": "In order to sync data with Google Fit, Google Fit App must be installed.",
      "prompt_install_samsung_health_title": "Do you want to install Samsung Health?",
      "prompt_install_samsung_health_desc": "In order to sync data with Samsung health, Samsung Health App must be installed.",
      "error_auth_failed": "Authorization failed",
      "ipad_health_not_available": "This feature is not available due to unavailability of Apple Health on iPad",
      "health_not_available": "This feature is not available on this device",
      "ios_read_permissions_not_available": "SunAccess doesn't have access to your steps data. You can enable access in settings application",
      "app_not_installed": " health app not intalled",
      "alert_to_unsync": "Are you sure you want to unsync with "
    };
  }
  clear() {
    this.claimsSubmitModel = {
      "TYPEOFCLAIMS": "",
      "TYPEOFPLAN": "",
      "POLICYNO": "",
      "LIFEASSURED": "",
      "NRICNO": "",
      "ADDRESS": "",
      "POSTCODE": "",
      "STATE": "",
      "TELEPHONENO": "",
      "MOBILENO": "",
      "EMAIL": "",
      "DATE_OF_LOSS": "",
      "NATURE_OF_LOSS": "",
      "LOCATION_OF_RISK": "",
      "CLAIM_WITH_OTHER_INSURANCE": "",
      "CLAIM_AMOUNT": "",
      "BANKNAME": "",
      "BANKACNAME": "",
      "BANKACNO": "",
      "DEATH_DATE": "",
      "CAUSE_OF_DEATH": "",
      "DATE_Of_ILLNESS_DIAGNOSED": "",
      "NAME_AND_ADDRESS_OF_DOCTOR": "",
      "ACTIVITY_AT_TIME_OF_ACCIDENT": "",
      "ACCIDENT_REPORTED_TO_POLICE": "",
      "POSTMORTEM_OR_AUTOSPY": "",
      "CLAIMANT_NAME": "",
      "CLAIMANT_NRIC_NO": "",
      "CLAIMANT_ADDRESS": "",
      "CLAIMANT_POSTCODE": "",
      "CLAIMANT_STATE": "",
      "CLAIMANT_TELEPHONE_NO": "",
      "CLAIMANT_MOBILE_NO": "",
      "CLAIMANT_EMAIL": "",
      "RELATION_WITH_DECEASED": "",
      "CLAIMANT_BANK_NAME": "",
      "CLAIMANT_BANK_AC_NAME": "",
      "CLAIMANT_BANK_AC_NO": "",
      "ACCIDENT_DATE": "",
      "ACCIDENT_TIME": "",
      "HOW_ACCIDENT_HAPPEN": "",
      "OCCUPATION": "",
      "CURRENTLY_EMPLOYED": "",
      "CRITICAL_ILLNESS_TYPE": "",
      "Files": []
    };
  }
}
// Config for Adapter path
ConfigProvider.getUnitPricesList = "/adapters/UnitPrice/GetUnitPriceList";
ConfigProvider.login = "/adapters/Login/login";
ConfigProvider.postRegistrationCheck = "/adapters/SignUp/PostRegistrationCheck";
ConfigProvider.postRegistrationSubmit = "/adapters/SignUp/PostRegistrationSubmit";
ConfigProvider.CheckUserExistence = "/adapters/ForgotPassword/PutCheckUserExists";
ConfigProvider.ResetPasswordPersonal = "/adapters/ForgotPassword/PutResetPasswordPersonal";
ConfigProvider.ResetPasswordSecret = "/adapters/ForgotPassword/PutResetPasswordSecurity";
ConfigProvider.getSecurityQuestions = "/adapters/SecurityQuestions/GetSecurityQuestions";
ConfigProvider.getPolicyList = "/adapters/Policy/GetPolicyList";
ConfigProvider.getPolicyListDirectDebit = "/adapters/Policy/GetPolicyListForDirectDebitUpdate";
ConfigProvider.getEMandateMerchantInfo = "/adapters/DirectDebit/GetEMandateMerchantInfo";
ConfigProvider.postEMandateInfo = "/adapters/DirectDebit/PostEMandateDetails";
ConfigProvider.putEMandateInfo = "/adapters/DirectDebit/PutEMandateResults";
ConfigProvider.getEMandatePaymentHistory = "/adapters/DirectDebit/GetEMandateTransactions";
ConfigProvider.getPaymentRecords = "/adapters/Policy/GetPolicyPaymentRecords";
ConfigProvider.getPeriodicPayoutlist = "/adapters/Policy/GetPolicyPeriodicPayouts";
ConfigProvider.getFundAllocations = "/adapters/Policy/GetFundAllocations";
ConfigProvider.getFundDetails = "/adapters/Policy/GetPolicyFundDetails";
ConfigProvider.getPolicyDetailsAdapterPath = "/adapters/Policy/GetPolicyDetails";
ConfigProvider.claimEnquiry = "/adapters/Claims/PutClaimsSubmissions";
ConfigProvider.getClaimStatusAdapterPath = "/adapters/Claims/GetClaimsStatus";
ConfigProvider.getProfileDetails = "/adapters/User/getUserProfile";
ConfigProvider.updateProfileDetails = "/adapters/User/updateProfilePicture";
ConfigProvider.putChangePaswordAdapterPath = "/adapters/User/PutPassword";
ConfigProvider.getuserSecurityQuestionAdapterPath = "/adapters/User/GetSecurityQuestion";
ConfigProvider.updateSecurityQuestionAdapterPath = "/adapters/User/PutSecurityQuestion";
ConfigProvider.getClaimDetailsAdapterPath = "/adapters/Claims/GetClaimsSubmissionDetail";
ConfigProvider.claimSubmissionAdapterPath = "/adapters/Claims/PostClaimSubmission";
ConfigProvider.getUAStatementsAdapterPath = "/adapters/AnnualStatements/GetUaStatements";
ConfigProvider.getPAStatementsAdapterPath = "/adapters/AnnualStatements/GetPaStatements";
ConfigProvider.getPremiumStatementsAdapterPath = "/adapters/AnnualStatements/GetPremiumStatements";
ConfigProvider.getUnitStatementsAdapterPath = "/adapters/AnnualStatements/GetUnitStatements";
ConfigProvider.getCountriesAdapterPath = "/adapters/Country/GetCountryList";
ConfigProvider.getStatesAdapterPath = "/adapters/States/GetMalaysianStates";
ConfigProvider.getEPolicyList = "/adapters/Downloads/getEPolicyList";
ConfigProvider.getDownloadList = "/adapters/Downloads/getDownloadsList";
ConfigProvider.updateAddressAdapterPath = "/adapters/PolicyAlteration/PutAddressAlteration";
ConfigProvider.updateEmailAdapterPath = "/adapters/PolicyAlteration/PutEmailAlteration";
ConfigProvider.updateContactAdapterPath = "/adapters/PolicyAlteration/PutPhoneAlteration";
ConfigProvider.PaymentHistoryAdapterPath = "/adapters/User/PutPaymentTransactionHistory";
ConfigProvider.getBase64Data = "/adapters/Downloads/getBase64Data";
ConfigProvider.getMerchantInfoAdapterPath = "/adapters/makePayment/GetMerchantInfo";
ConfigProvider.getPaymentUserDetailsAdapterPath = "/adapters/makePayment/GetPaymentUserDetails";
ConfigProvider.postPaymentUserDetailsAdapterPath = "/adapters/makePayment/PostPaymentUserDetails";
ConfigProvider.putPaymentResults = "/adapters/makePayment/PutPaymentResults";
ConfigProvider.loginPasscode = "/adapters/Login/login";
ConfigProvider.getNewsList = "/adapters/NewsRoom/getNews";
ConfigProvider.getPhotoGalleries = "/adapters/NewsRoom/getPhotoGalleries";
ConfigProvider.getPhotoGalleryDetail = "/adapters/NewsRoom/getPhotoGalleryDetail";
ConfigProvider.getMediaRelease = "/adapters/NewsRoom/getMediaRelease";
ConfigProvider.registerPasscode = "/adapters/UserValidate/regPasscode";
ConfigProvider.passcodeLogin = "/adapters/UserValidate/checkLoginDetails";
ConfigProvider.touchIdLogin = "/adapters/UserValidate/getLoginDetailsForTouchIdAuth";
ConfigProvider.getAppsList = "/adapters/Downloads/getApps";
ConfigProvider.claimStaticDataAdapterPath = "/adapters/StaticContentProvider/getClaimsStaticData";
ConfigProvider.getNotificationSettings = "/adapters/User/getNotificationSubscription";
ConfigProvider.updateNotificationSettings = "/adapters/User/putNotificationSubscription";
ConfigProvider.getNotificationslist = "/adapters/Notifications/getNotifications";
ConfigProvider.getNotificationsDetails = "/adapters/Notifications/getNotificationDetails";
ConfigProvider.getUnreadNotificationCount = "/adapters/Notifications/getNotificationCount";
ConfigProvider.updateNotificationSetRead = "/adapters/Notifications/putNotificationSetRead";
ConfigProvider.updateNotificationSetDeleted = "/adapters/Notifications/putNotificationSetDeleted";
ConfigProvider.getSecurePhrase = "/adapters/Login/getSecurePhrase";
ConfigProvider.getSocialPlatfromList = "/adapters/SecurityQuestions/getRegistrationStaticData";
ConfigProvider.updateCardAdapterPath = "/adapters/PolicyAlteration/PostCardAlteration";
ConfigProvider.updatePayoutAdapterPath = "/adapters/PolicyAlteration/PostPayoutAlteration";
ConfigProvider.bankStaticDataAdapterPath = "/adapters/StaticContentProvider/getBankStaticData";
ConfigProvider.putsecureWordAdapterPath = "/adapters/User/PutSecureWord";
ConfigProvider.getAccountHolderDetails = "/adapters/User/getAccountHolderDetail";
ConfigProvider.getAppfStatementsAdapterPath = "/adapters/AnnualStatements/GetAppfStatements";
ConfigProvider.GetUniversalLifeStatementAdapterPath = "/adapters/AnnualStatements/GetUniversalLifeStatement";
ConfigProvider.GetBonusStatementsAdapterPath = "/adapters/AnnualStatements/GetBonusStatements";
ConfigProvider.GetMAFStatementsAdapterPath = "/adapters/AnnualStatements/GetMAFStatement";
ConfigProvider.GetEducationBoosterFundStatementAdapterPath = "/adapters/AnnualStatements/GetEducationBoosterFundStatement";
ConfigProvider.GetSunActivUserAdapterPath = "/adapters/SunActiv/GetSunActivUser";
ConfigProvider.PostSunActivUserAdapterPath = "/adapters/SunActiv/PostSunActivUser";
ConfigProvider.PutSunActivUserAdapterPath = "/adapters/SunActiv/PutSunActivUser";
ConfigProvider.PostUserStepsAdapterPath = "/adapters/SunActiv/PostUserSteps";
ConfigProvider.getHealthInfoAdapterPath = "/adapters/HealthInfo/getHealthInfo";
ConfigProvider.getHealthInfoDetailsAdapterPath = "/adapters/HealthInfo/getHealthInfoDetails";
ConfigProvider.getEnominationlinkAdapterPath = "/adapters/Nomination/GetENomination";
ConfigProvider.getForgotPolicyNumberAdapterPath = "/adapters/User/PostForgotPolicyNumber";
ConfigProvider.GetPersonalDetailsAdapterPath = "/adapters/PolicyAlteration/GetPersonalDetails";
ConfigProvider.UpdatePersonalDetailsAdapterPath = "/adapters/PolicyAlteration/PostPersonalDetails";
ConfigProvider.updatePersonalStaticDataAdapterPath = "/adapters/StaticContentProvider/getUpdateStaticData";
ConfigProvider.SendTACAdapterPath = "/adapters/TAC/sendTAC";
ConfigProvider.VerifyTACAdapterPath = "/adapters/TAC/verifyTAC";
ConfigProvider.surrencerCancelAdapterPath = "/adapters/SurrenderCancel/";
ConfigProvider.partialWithdrawlAdapterPath = "/adapters/PartialWithdrawl/";
ConfigProvider.serviceHistoryAdapter = "/adapters/ServiceHistory/";
ConfigProvider.premiumRedirectionAdapterPath = "/adapters/PremiumRedirection/";
ConfigProvider.reinstatementAdapterPath = "/adapters/Reinstatement/";
ConfigProvider.topupAdapterPath = "/adapters/TopUp/";
ConfigProvider.fundSwitchAdapterPath = "/adapters/FundSwitching/";
ConfigProvider.GetAlterationPDFAdapterPath = "/adapters/PolicyAlteration/GetAlterationPDFLink";
ConfigProvider.getMedicalCardPolicyList = "/adapters/EMedicalCard/GetMedicalCardPolicyList";
ConfigProvider.getMedicalCardDetails = "/adapters/EMedicalCard/GetMedicalCardDetails";
ConfigProvider.getDownloadDetails = "/adapters/EMedicalCard/MedicalCardDownloadLogs";
ConfigProvider.otherServiceRequest = "/adapters/OtherServiceRequest/";
ConfigProvider.getClaimStatusSummary = "/adapters/Claims/ClaimStatusSummary";
ConfigProvider.getClaimStatusDetail = "/adapters/Claims/ClaimStatusDetails";
ConfigProvider.PAGE_SIZE = 10;
ConfigProvider.PASSWORD_PATTERN = "((?=.*\\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$!-.^]).{8,20})";
ConfigProvider.EMAIL_PATTERN = "[a-zA-Z0-9._-]{1,}@[a-zA-Z0-9._-]{2,}[.]{1}[a-zA-Z]{2,}";
ConfigProvider.RESTRICT_INPUT_PATTERN = {
  number: /[^0-9]/,
  name: /[^A-Za-zñÑ(),.'-\s]/,
  alphanumeric: /[^A-Za-z0-9]/,
  alphanumericwithspace: /[^A-Za-z0-9 ]/,
  date: /[^0-9\/]/,
  username: /[^a-zA-Z0-9-_.@#%+!\s]/,
  currency: /[^0-9\.]/,
  //currency: /[^1-9]\d*(\.\d+)?$/,
  nameOnly: /[^A-Za-z ]/,
  agentName: /[^a-zA-Z@.(),'/-]/,
  address: /[^a-zA-Z0-9#@.,;:'/-]/,
  NameAddressofdoctor: /[^a-zA-Z0-9#@.(),;:'/-]/,
  nricDigit: /[^0-9]/
};
ConfigProvider.SERVICE_REQUEST_UPLOAD_SIZE = 15;
ConfigProvider.ɵfac = function ConfigProvider_Factory(t) {
  return new (t || ConfigProvider)();
};
ConfigProvider.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
  token: ConfigProvider,
  factory: ConfigProvider.ɵfac
});

/***/ }),

/***/ 30423:
/*!**********************************************!*\
  !*** ./src/providers/utils/utils.service.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UtilService": () => (/* binding */ UtilService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var http_status_codes__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! http-status-codes */ 92788);
/* harmony import */ var crypto_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! crypto-js */ 36240);
/* harmony import */ var crypto_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(crypto_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var pdf_lib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! pdf-lib */ 45522);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 80228);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./config */ 43485);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ngx-translate/core */ 38699);
/* harmony import */ var _awesome_cordova_plugins_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @awesome-cordova-plugins/in-app-browser/ngx */ 67122);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _awesome_cordova_plugins_device_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @awesome-cordova-plugins/device/ngx */ 74701);













class UtilService {
  constructor(config, loadingCtrl, alertCtrl, translate, platform, inAppBrowser, toastCtrl, date, device) {
    this.config = config;
    this.loadingCtrl = loadingCtrl;
    this.alertCtrl = alertCtrl;
    this.translate = translate;
    this.platform = platform;
    this.inAppBrowser = inAppBrowser;
    this.toastCtrl = toastCtrl;
    this.date = date;
    this.device = device;
    this.isLoading = false;
    this.isLoaderInDisplay = false;
    this.rxjsObject = new rxjs__WEBPACK_IMPORTED_MODULE_5__.Subject();
    this.component = new _angular_core__WEBPACK_IMPORTED_MODULE_6__.EventEmitter();
  }
  callJoin(telephoneNumber) {
    document.location.href = "tel:" + telephoneNumber;
  }
  showProgressLoader() {
    return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
      if (!this.isLoading) {
        this.isLoading = true;
        yield this.loadingCtrl.create({
          spinner: 'lines-sharp',
          message: 'Loading...',
          cssClass: 'custom-loader'
        }).then(a => {
          a.present().then(() => {
            if (!this.isLoading) {
              a.dismiss().then(() => {});
            }
          });
        });
      }
    });
  }
  dissmisProgressLoader() {
    return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
      if (this.isLoading) {
        this.isLoading = false;
        yield this.loadingCtrl.dismiss().then(() => {});
      }
    });
  }
  publishSomeData(data) {
    this.rxjsObject.next(data);
  }
  getObservable() {
    return this.rxjsObject;
  }
  /**
   * This method is used to open Mailing App.
   * @param emailId - Email id that need to be populated in Mailing App
   */
  emailCompose(emailId) {
    document.location.href = "mailto:" + emailId;
  }
  emailComposewithSubject(emailId, sub) {
    document.location.href = "mailto:" + emailId + "?subject=" + sub;
  }
  /* Show alert with provided options
  *
  * @param title -- title to show, requried
  * @param message -- message to show, required
  * @param buttons -- Buttons Array as defined in the Ionic Alert Controller.
  */
  showAlert(title, message, enableBackdropDismiss, buttons) {
    if (!buttons) {
      buttons = [{
        text: 'Ok',
        handler: () => {}
      }];
    }
    const alert = this.alertCtrl.create({
      header: title,
      message: message,
      buttons: buttons,
      cssClass: 'alertbutton'
    }).then(alert => alert.present());
  }
  /** checking online or offline */
  isDeviceOnLine() {
    return true;
    //   if (this.network.type && this.network.type === 'none') {
    //         return false;
    //     } else {
    //         return true;
    //     }
  }
  /**this method is handle to servcie error response , commonly used for all service calls */
  handleServiceException(err) {
    let errorMsg;
    if (!err['responseJSON']) {
      errorMsg = this.translate.instant('generic_msgs.server_err');
    } else if (err['responseJSON'] && err['responseJSON']['statusCode'] == http_status_codes__WEBPACK_IMPORTED_MODULE_8__.BAD_REQUEST) {
      let srvrResp = err['responseJSON']['errors'];
      try {
        if (JSON.parse(srvrResp[0]).error_description) errorMsg = JSON.parse(srvrResp[0]).error_description;else if (JSON.parse(srvrResp[0]).userMessage) errorMsg = JSON.parse(srvrResp[0]).userMessage;else if (JSON.parse(srvrResp[0]).Message) errorMsg = JSON.parse(srvrResp[0]).Message;else errorMsg = this.translate.instant('generic_msgs.server_err');
      } catch (e) {
        errorMsg = srvrResp[0];
      }
    } else if (err['responseJSON'] && err['responseJSON']['statusCode'] == http_status_codes__WEBPACK_IMPORTED_MODULE_8__.UNAUTHORIZED) {
      errorMsg = err['responseJSON']['errors'][0].Message;
      this.publishSomeData({
        'session': 'expired'
      });
      // this.events.publish('session:expired');
    } else if (err['responseJSON'] && (err['responseJSON']['statusCode'] == http_status_codes__WEBPACK_IMPORTED_MODULE_8__.INTERNAL_SERVER_ERROR || err['responseJSON']['statusCode'] == http_status_codes__WEBPACK_IMPORTED_MODULE_8__.FORBIDDEN || err['responseJSON']['statusCode'] == http_status_codes__WEBPACK_IMPORTED_MODULE_8__.CONFLICT || err['responseJSON']['statusCode'] == http_status_codes__WEBPACK_IMPORTED_MODULE_8__.NOT_FOUND || err['responseJSON']['statusCode'] == http_status_codes__WEBPACK_IMPORTED_MODULE_8__.NOT_ACCEPTABLE)) {
      let srvrResp = err['responseJSON']['errors'];
      try {
        if (JSON.parse(srvrResp[0]).userMessage) errorMsg = JSON.parse(srvrResp[0]).userMessage;else if (JSON.parse(srvrResp[0]).Message) errorMsg = JSON.parse(srvrResp[0]).Message;else errorMsg = this.translate.instant('generic_msgs.server_err');
      } catch (e) {
        errorMsg = srvrResp[0];
      }
    } else if (err.errorCode = 'REQUEST_TIMEOUT') {
      errorMsg = err.errorMsg;
    } else {
      errorMsg = this.translate.instant('generic_msgs.server_err');
    }
    return errorMsg;
  }
  launchExternalApp(iosSchemaName, androidPackageName, appUrl, httpUrl) {
    if (this.platform.is('ios')) {
      this.app = iosSchemaName;
      appUrl = appUrl['ios'];
    } else if (this.platform.is('android')) {
      this.app = androidPackageName;
      appUrl = appUrl['android'];
    }
    // this.appAvailabilty.check(this.app).then(
    //   (res) => {
    //     // success callback
    this.inAppBrowser.create(appUrl, '_system');
    //   },
    //   (error) => {
    //     // error callback
    this.inAppBrowser.create(httpUrl, '_system');
    //   }
    // );
  }

  openLink(url) {
    this.inAppBrowser.create(url, '_system');
  }
  presentToast(msg) {
    return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
      let toast = yield this.toastCtrl.create({
        message: msg,
        duration: 3000,
        position: 'bottom'
      });
      yield toast.onDidDismiss();
      toast.present();
    });
  }
  /** Get Device Id */
  getDeviceId() {
    return this.device && this.device.uuid ? this.device.uuid : 'WEB';
  }
  /** isdevice**/
  isDevice() {
    return this.platform.is('cordova');
  }
  /**Get Device platform */
  getPlatform() {
    if (this.platform.is('ios')) return 'ios';else if (this.platform.is('android')) return 'android';
  }
  aesEncrypt(data, key, iv) {
    let cipher = crypto_js__WEBPACK_IMPORTED_MODULE_0___default().AES.encrypt(data, crypto_js__WEBPACK_IMPORTED_MODULE_0___default().enc.Utf8.parse(key), {
      iv: crypto_js__WEBPACK_IMPORTED_MODULE_0___default().enc.Utf8.parse(iv),
      padding: (crypto_js__WEBPACK_IMPORTED_MODULE_0___default().pad.Pkcs7),
      mode: (crypto_js__WEBPACK_IMPORTED_MODULE_0___default().mode.CBC)
    });
    return cipher.toString();
  }
  aesDecrypt(data, key, iv) {
    let cipher = crypto_js__WEBPACK_IMPORTED_MODULE_0___default().AES.decrypt(data, crypto_js__WEBPACK_IMPORTED_MODULE_0___default().enc.Utf8.parse(key), {
      iv: crypto_js__WEBPACK_IMPORTED_MODULE_0___default().enc.Utf8.parse(iv),
      padding: (crypto_js__WEBPACK_IMPORTED_MODULE_0___default().pad.Pkcs7),
      mode: (crypto_js__WEBPACK_IMPORTED_MODULE_0___default().mode.CBC)
    });
    return cipher.toString((crypto_js__WEBPACK_IMPORTED_MODULE_0___default().enc.Utf8));
  }
  /**
   * get Encrypted User Id
   */
  getEncryptedUserId() {
    return this.config.userInfo.encryptedUserId;
  }
  /**
  * get authentication token
  */
  getToken() {
    return this.config.userInfo.token;
  }
  getUserIdentity() {
    return this.config.userInfo.identityNumber;
  }
  numberWithCommasDecimal(x) {
    return Number(parseFloat(x).toFixed(2)).toLocaleString('en', {
      minimumFractionDigits: 2
    });
  }
  getRandomInt() {
    // Create byte array and fill with 1 random number
    var byteArray = new Uint8Array(1);
    window.crypto.getRandomValues(byteArray);
    var randomVal = byteArray[0] % 46;
    return randomVal;
  }
  getName() {
    return this.config.userInfo.name;
  }
  /**
    * get user lastLoginDate
    */
  getlastLoginDate() {
    return this.config.userInfo.lastLoginDate;
  }
  /**
    * get user passwordExpirationmessage
    */
  getPasswordReminderMsg() {
    return this.config.userInfo.passwordReminderMsg;
  }
  /**
   * get user passwordExpirationmessage
   */
  getshowPasswordReminderMsg() {
    return this.config.userInfo.showPasswordExpirationMsgFlag;
  }
  /** Analytics Log*/
  analytics(featureName) {
    if (this.isDevice()) {
      try {
        /* Analytics Start */
        let monthYear = this.date.transform(new Date(), "MMM-yyyy");
        let event = {
          pageName: featureName,
          UserId: this.config.userInfo ? this.config.userInfo.email : '',
          AppName: 'Sun Access',
          OSVersion: this.device.platform + "-" + this.device.version,
          sessionId: this.config.userInfo ? this.config.userInfo.sessionId : null,
          MonthYear: monthYear
        };
        WL.Analytics.log(event, featureName);
        WL.Analytics.send();
      } catch (e) {
        WL.Logger.log("Analyatics catch error:" + JSON.stringify(e));
      }
    }
  }
  //
  validateNonZeroVal(fc) {
    if (fc.value.length > 0) {
      if (parseFloat(fc.value.trim()) >= 0) {
        if (fc.value.trim() / 10 === 0) {
          return {
            validateNonZeroVal: true
          };
        } else {
          return null;
        }
      } else {
        return null;
      }
    }
  }
  sanitizeBase64string(base64String) {
    let base64Length = base64String.length;
    let remainingCharacters = base64Length % 4;
    if (remainingCharacters != 0) {
      let paddingChars = "=".repeat(4 - remainingCharacters);
      let paddedBase64String = base64String + paddingChars;
      return paddedBase64String;
    } else {
      return base64String;
    }
  }
  FileCompresser(base64Data, fileType) {
    let promise = new Promise((resolve, reject) => {
      try {
        let img = new Image();
        img.src = base64Data;
        var cvs = document.createElement('canvas');
        img.onload = function () {
          cvs.width = img.naturalWidth;
          cvs.height = img.naturalHeight;
          // Draw the downscaled image on the canvas and return the new data URL.
          let ctx = cvs.getContext("2d");
          ctx.drawImage(img, 0, 0, img.naturalWidth, img.naturalHeight);
          var newImageData = cvs.toDataURL(fileType, 0.7);
          resolve(newImageData);
        };
      } catch (e) {
        reject(e);
      }
    });
    return promise;
  }
  flattenPDF(base64Filedata, type) {
    return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
      var base64File;
      if (type == 0) {
        base64File = base64Filedata.dataURI;
      } else {
        base64File = base64Filedata;
      }
      function generateDatabaseDateTime() {
        let currentdate = new Date();
        var datetime = currentdate.getDate() + "-" + (currentdate.getMonth() + 1) + "-" + currentdate.getFullYear() + " " + currentdate.getHours() + ":" + currentdate.getMinutes();
        return datetime;
      }
      const pdfDoc = yield pdf_lib__WEBPACK_IMPORTED_MODULE_1__.PDFDocument.load(base64File.split(',')[1], {
        ignoreEncryption: true
      });
      const pages = pdfDoc.getPages();
      const firstPage = pages[0];
      for (let i = 0; i < pages.length; i++) {
        // Get the width and height of the first page
        const {
          width,
          height
        } = pages[i].getSize();
        // Draw a string of text diagonally across the first page
        pages[i].drawText(`Uploaded using SunAccess mobile App on ${generateDatabaseDateTime()}`, {
          x: 25,
          y: height / 2 + 410,
          size: 6
        });
      }
      const form = pdfDoc.getForm();
      form.flatten();
      const base64DataUri = yield pdfDoc.saveAsBase64({
        dataUri: true
      });
      const base64String = yield pdfDoc.saveAsBase64();
      return base64DataUri;
    });
  }
  getBase64FromUrl(filePath) {
    return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
      const data = yield fetch(filePath);
      const blob = yield data.blob();
      return new Promise(resolve => {
        const reader = new FileReader();
        reader.readAsDataURL(blob);
        reader.onloadend = () => {
          const base64data = reader.result;
          resolve(base64data);
        };
      });
    });
  }
}
UtilService.ɵfac = function UtilService_Factory(t) {
  return new (t || UtilService)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"](_config__WEBPACK_IMPORTED_MODULE_2__.ConfigProvider), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_9__.LoadingController), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_9__.AlertController), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__.TranslateService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_9__.Platform), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"](_awesome_cordova_plugins_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_3__.InAppBrowser), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_9__.ToastController), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_11__.DatePipe), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"](_awesome_cordova_plugins_device_ngx__WEBPACK_IMPORTED_MODULE_4__.Device));
};
UtilService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjectable"]({
  token: UtilService,
  factory: UtilService.ɵfac
});

/***/ }),

/***/ 50863:
/*!******************************************************************************************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/ lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
  \******************************************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./ion-accordion_2.entry.js": [
		70079,
		"common",
		"node_modules_ionic_core_dist_esm_ion-accordion_2_entry_js"
	],
	"./ion-action-sheet.entry.js": [
		25593,
		"common",
		"node_modules_ionic_core_dist_esm_ion-action-sheet_entry_js"
	],
	"./ion-alert.entry.js": [
		13225,
		"common",
		"node_modules_ionic_core_dist_esm_ion-alert_entry_js"
	],
	"./ion-app_8.entry.js": [
		4812,
		"common",
		"node_modules_ionic_core_dist_esm_ion-app_8_entry_js"
	],
	"./ion-avatar_3.entry.js": [
		86655,
		"node_modules_ionic_core_dist_esm_ion-avatar_3_entry_js"
	],
	"./ion-back-button.entry.js": [
		44856,
		"common",
		"node_modules_ionic_core_dist_esm_ion-back-button_entry_js"
	],
	"./ion-backdrop.entry.js": [
		13059,
		"node_modules_ionic_core_dist_esm_ion-backdrop_entry_js"
	],
	"./ion-breadcrumb_2.entry.js": [
		58648,
		"common",
		"node_modules_ionic_core_dist_esm_ion-breadcrumb_2_entry_js"
	],
	"./ion-button_2.entry.js": [
		98308,
		"node_modules_ionic_core_dist_esm_ion-button_2_entry_js"
	],
	"./ion-card_5.entry.js": [
		44690,
		"node_modules_ionic_core_dist_esm_ion-card_5_entry_js"
	],
	"./ion-checkbox.entry.js": [
		64090,
		"node_modules_ionic_core_dist_esm_ion-checkbox_entry_js"
	],
	"./ion-chip.entry.js": [
		36214,
		"node_modules_ionic_core_dist_esm_ion-chip_entry_js"
	],
	"./ion-col_3.entry.js": [
		69447,
		"node_modules_ionic_core_dist_esm_ion-col_3_entry_js"
	],
	"./ion-datetime-button.entry.js": [
		17950,
		"default-node_modules_ionic_core_dist_esm_data-cb72448c_js-node_modules_ionic_core_dist_esm_th-29e28e",
		"node_modules_ionic_core_dist_esm_ion-datetime-button_entry_js"
	],
	"./ion-datetime_3.entry.js": [
		79689,
		"default-node_modules_ionic_core_dist_esm_data-cb72448c_js-node_modules_ionic_core_dist_esm_th-29e28e",
		"common",
		"node_modules_ionic_core_dist_esm_ion-datetime_3_entry_js"
	],
	"./ion-fab_3.entry.js": [
		18840,
		"common",
		"node_modules_ionic_core_dist_esm_ion-fab_3_entry_js"
	],
	"./ion-img.entry.js": [
		40749,
		"node_modules_ionic_core_dist_esm_ion-img_entry_js"
	],
	"./ion-infinite-scroll_2.entry.js": [
		69667,
		"common",
		"node_modules_ionic_core_dist_esm_ion-infinite-scroll_2_entry_js"
	],
	"./ion-input.entry.js": [
		83288,
		"common",
		"node_modules_ionic_core_dist_esm_ion-input_entry_js"
	],
	"./ion-item-option_3.entry.js": [
		35473,
		"common",
		"node_modules_ionic_core_dist_esm_ion-item-option_3_entry_js"
	],
	"./ion-item_8.entry.js": [
		53634,
		"common",
		"node_modules_ionic_core_dist_esm_ion-item_8_entry_js"
	],
	"./ion-loading.entry.js": [
		22855,
		"node_modules_ionic_core_dist_esm_ion-loading_entry_js"
	],
	"./ion-menu_3.entry.js": [
		495,
		"common",
		"node_modules_ionic_core_dist_esm_ion-menu_3_entry_js"
	],
	"./ion-modal.entry.js": [
		58737,
		"common",
		"node_modules_ionic_core_dist_esm_ion-modal_entry_js"
	],
	"./ion-nav_2.entry.js": [
		99632,
		"common",
		"node_modules_ionic_core_dist_esm_ion-nav_2_entry_js"
	],
	"./ion-picker-column-internal.entry.js": [
		54446,
		"common",
		"node_modules_ionic_core_dist_esm_ion-picker-column-internal_entry_js"
	],
	"./ion-picker-internal.entry.js": [
		32275,
		"node_modules_ionic_core_dist_esm_ion-picker-internal_entry_js"
	],
	"./ion-popover.entry.js": [
		4047,
		"common",
		"node_modules_ionic_core_dist_esm_ion-popover_entry_js"
	],
	"./ion-progress-bar.entry.js": [
		18994,
		"node_modules_ionic_core_dist_esm_ion-progress-bar_entry_js"
	],
	"./ion-radio_2.entry.js": [
		23592,
		"node_modules_ionic_core_dist_esm_ion-radio_2_entry_js"
	],
	"./ion-range.entry.js": [
		35454,
		"common",
		"node_modules_ionic_core_dist_esm_ion-range_entry_js"
	],
	"./ion-refresher_2.entry.js": [
		290,
		"common",
		"node_modules_ionic_core_dist_esm_ion-refresher_2_entry_js"
	],
	"./ion-reorder_2.entry.js": [
		92666,
		"common",
		"node_modules_ionic_core_dist_esm_ion-reorder_2_entry_js"
	],
	"./ion-ripple-effect.entry.js": [
		64816,
		"node_modules_ionic_core_dist_esm_ion-ripple-effect_entry_js"
	],
	"./ion-route_4.entry.js": [
		45534,
		"node_modules_ionic_core_dist_esm_ion-route_4_entry_js"
	],
	"./ion-searchbar.entry.js": [
		94902,
		"common",
		"node_modules_ionic_core_dist_esm_ion-searchbar_entry_js"
	],
	"./ion-segment_2.entry.js": [
		91938,
		"common",
		"node_modules_ionic_core_dist_esm_ion-segment_2_entry_js"
	],
	"./ion-select_3.entry.js": [
		14832,
		"node_modules_ionic_core_dist_esm_ion-select_3_entry_js"
	],
	"./ion-slide_2.entry.js": [
		90668,
		"node_modules_ionic_core_dist_esm_ion-slide_2_entry_js"
	],
	"./ion-spinner.entry.js": [
		61624,
		"common",
		"node_modules_ionic_core_dist_esm_ion-spinner_entry_js"
	],
	"./ion-split-pane.entry.js": [
		19989,
		"node_modules_ionic_core_dist_esm_ion-split-pane_entry_js"
	],
	"./ion-tab-bar_2.entry.js": [
		28902,
		"common",
		"node_modules_ionic_core_dist_esm_ion-tab-bar_2_entry_js"
	],
	"./ion-tab_2.entry.js": [
		70199,
		"common",
		"node_modules_ionic_core_dist_esm_ion-tab_2_entry_js"
	],
	"./ion-text.entry.js": [
		48395,
		"node_modules_ionic_core_dist_esm_ion-text_entry_js"
	],
	"./ion-textarea.entry.js": [
		96357,
		"node_modules_ionic_core_dist_esm_ion-textarea_entry_js"
	],
	"./ion-toast.entry.js": [
		38268,
		"node_modules_ionic_core_dist_esm_ion-toast_entry_js"
	],
	"./ion-toggle.entry.js": [
		15269,
		"common",
		"node_modules_ionic_core_dist_esm_ion-toggle_entry_js"
	],
	"./ion-virtual-scroll.entry.js": [
		32875,
		"node_modules_ionic_core_dist_esm_ion-virtual-scroll_entry_js"
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(() => {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(() => {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = () => (Object.keys(map));
webpackAsyncContext.id = 50863;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 42480:
/*!************************!*\
  !*** crypto (ignored) ***!
  \************************/
/***/ (() => {

/* (ignored) */

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(14431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map