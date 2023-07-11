"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[4216],{74216:(Z,x,o)=>{o.r(x),o.d(x,{SunactivDashboardPageModule:()=>A});var D=o(36895),S=o(24006),r=o(48058),v=o(64228),M=o(22727),t=o(98274),y=o(45340),m=o(54463),P=o(85680),T=o(77220),C=o(53025),O=o(43485);const f=function(a){return{activeStar:a}},g=function(a){return{activeDot:a}},b=[{path:"",component:(()=>{class a{constructor(n,e,s,i,u,h,d,l){if(this.translateConfigService=n,this.translate=e,this.alertCtrl=s,this.SunactivDbdService=i,this.health=u,this.utils=h,this.config=d,this.router=l,this.stepsToday=0,this.avgStepsThisMonth=0,this.isUserRegisteredToday=!1,this.isStepsUploadedTillYesterday=!1,this.todayDate=new Date,this.selectedLanguage=this.translateConfigService.getDefaultLanguage(),this.translateConfigService.setLanguage("en"),this.status=history.state.status,this.source=history.state.source,this.RegMSecDate=history.state.RegDate,this.RegDate=new Date(this.RegMSecDate),this.lastSyncMsecDate=history.state.lastSyncDate,this.lastSyncDate=new Date(this.lastSyncMsecDate),this.isRegistered=history.state.registered,this.previousMonthStatus=history.state.previousMonthStatus,history.state.avgStepMonth&&(this.avgStepsThisMonth=parseInt(this.sunActivDBDData.avgStepMonth)),this.utils.isDeviceOnLine())this.initializeDashboard();else{let c=this.translate.instant("generic_msgs.network_err");this.showError(c)}}ionViewDidEnter(){this.config.currentPage.pageName="SunactivDashboardPage"}initializeDashboard(){this.checkUserRegisteredToday(),this.checkStepsUploadedTillYesterday(),this.setCurrentDateInWords(),this.setSelectedSource(),this.isRegistered&&(this.isUserRegisteredToday||this.isStepsUploadedTillYesterday?this.fetchHistoricalData(this.todayDate,!1):this.fetchHistoricalData(this.lastSyncDate,!0))}checkUserRegisteredToday(){this.RegDate.getDate()==this.todayDate.getDate()&&this.RegDate.getMonth()==this.todayDate.getMonth()&&this.RegDate.getFullYear()==this.todayDate.getFullYear()&&(this.isUserRegisteredToday=!0)}checkStepsUploadedTillYesterday(){this.lastSyncDate.getDate()==this.todayDate.getDate()&&this.lastSyncDate.getMonth()==this.todayDate.getMonth()&&this.lastSyncDate.getFullYear()==this.todayDate.getFullYear()&&(this.isStepsUploadedTillYesterday=!0)}setCurrentDateInWords(){var e=this.todayDate.getMonth(),s=this.todayDate.getFullYear();this.currentDateInWords=["January","February","March","April","May","June","July","August","September","October","November","December"][e]+", "+s}setSelectedSource(){this.selectedSource=this.source}fetchHistoricalData(n,e){this.authorizeGoogleFit(n,e)}ionViewDidLoad(){}authorizeGoogleFit(n,e){this.health.isAvailable().then(s=>{s?this.health.requestAuthorization([{read:["steps"]}]).then(i=>{this.selectedSource==this.config.sunactiv.source_apple?this.checkReadPermission(n,e):this.loadStepsFromGoogleFit(n,e)}).catch(i=>{this.showError(this.config.sunactiv.error_auth_failed)}):this.showError(this.config.sunactiv.health_not_available)}).catch(s=>{this.showError(this.selectedSource+this.config.sunactiv.app_not_installed)})}loadStepsFromGoogleFit(n,e){this.health.queryAggregated({startDate:n,endDate:new Date,dataType:"steps",bucket:"day",filtered:!0}).then(i=>{this.calculateAverageSteps(i,e)}).catch(i=>{this.showError(i)})}calculateAverageSteps(n,e){if(n.length>0){var s=new Date(n[n.length-1].startDate),i=new Date,u=!0;if(s.getDate()==i.getDate()&&s.getMonth()==i.getMonth()&&s.getFullYear()==i.getFullYear()?this.stepsToday=Math.floor(n[n.length-1].value):u=!1,e){var h=n.length-1;u&&n.length>1&&(h=n.length-2);for(var d=[],l=0;l<=h;l++){var c;c={date:n[l].startDate.getTime(),steps:n[l].value},d.push(c)}d.length>0&&this.syncSteps(d)}else this.utils.dissmisProgressLoader()}else this.utils.dissmisProgressLoader()}unsync(){if(this.utils.isDeviceOnLine())this.alertCtrl.create({header:this.config.sunactiv.source_unsync,message:this.config.sunactiv.alert_to_unsync+this.source+" Health",buttons:[{text:"Disagree",handler:()=>{}},{text:"Agree",handler:()=>{this.checkIfGoogle()}}]}).then(e=>e.present());else{let n=this.translate.instant("generic_msgs.network_err");this.showError(n)}}checkIfGoogle(){if(this.selectedSource==this.config.sunactiv.source_google)if(this.utils.isDeviceOnLine())localStorage.setItem("selectedDataSource","notSynced"),this.manualUnsync(this.config.sunactiv.source_unsync);else{let n=this.translate.instant("generic_msgs.network_err");this.showError(n)}else this.manualUnsync(this.config.sunactiv.source_unsync)}manualUnsync(n){if(this.utils.isDeviceOnLine())this.utils.showProgressLoader(),this.SunactivDbdService.PutSunActivUser(n).then(e=>{try{e.responseJSON&&e.responseJSON.statusCode==M.OK&&(this.utils.dissmisProgressLoader(),this.router.navigate(["/sunactiv"],{state:{registered:this.isRegistered,source:n,status:this.status,previousMonthStatus:this.previousMonthStatus,avgStepMonth:this.avgStepsThisMonth,RegDate:this.RegDate.getTime(),lastSyncDate:this.lastSyncDate.getTime()}}))}catch(s){let i=this.translate.instant("generic_msgs.server_err");this.showError(i)}},e=>{let s=this.utils.handleServiceException(e);this.showError(s)});else{let e=this.translate.instant("generic_msgs.network_err");this.showError(e)}}syncSteps(n){if(this.utils.isDeviceOnLine())this.SunactivDbdService.PostUserSteps(n).then(e=>{try{e.responseJSON&&e.responseJSON.statusCode==M.OK&&(this.avgStepsThisMonth=e.responseJSON.AverageStepsThisMonth,this.lastSyncDate=this.todayDate,this.utils.dissmisProgressLoader())}catch(s){let i=this.translate.instant("generic_msgs.server_err");this.showError(i)}},e=>{let s=this.utils.handleServiceException(e);this.showError(s)});else{let e=this.translate.instant("generic_msgs.network_err");this.showError(e)}}showError(n){this.utils.dissmisProgressLoader(),this.utils.showAlert("",n)}checkReadPermission(n,e){this.health.isAvailable().then(s=>{this.health.requestAuthorization([{read:["steps"]}]).then(i=>{var h=new Date;h.setDate(h.getDate()-30),this.health.queryAggregated({startDate:h,endDate:new Date,dataType:"steps",bucket:"day",filtered:!0}).then(d=>{for(var l=0,c=0;c<d.length;c++)l+=parseInt(d[c].value);0==l?(this.utils.dissmisProgressLoader(),this.showError(this.config.sunactiv.ios_read_permissions_not_available)):this.loadStepsFromGoogleFit(n,e)})})})}checklastToLastMonth(){if(this.avgStepsThisMonth>9999&&("GOLD"==this.status||"PLATINUM"==this.status)&&("GOLD"==this.previousMonthStatus||"PLATINUM"==this.previousMonthStatus))return!0}checklastMonth(){if(this.avgStepsThisMonth>9999&&("GOLD"==this.status||"PLATINUM"==this.status))return!0}}return a.\u0275fac=function(n){return new(n||a)(t.Y36(y.w),t.Y36(m.sK),t.Y36(r.Br),t.Y36(P.X),t.Y36(T.S),t.Y36(C.f),t.Y36(O.i),t.Y36(v.F0))},a.\u0275cmp=t.Xpm({type:a,selectors:[["app-sunactiv-dashboard"]],decls:101,vars:77,consts:[["mode","ios"],["color","primary"],["slot","start","auto-hide","false","color","secondary"],[1,"bold-font"],[1,"sunactiv-dashbaord","ion-padding"],[1,"row-date"],[1,"date"],["size","6","text-center",""],[2,"height","20%"],[2,"height","33%","text-align","center","align-items","center"],[1,"text-center","leftSidePanels1"],[1,"totalStepText"],[1,"stepTodayVal"],[2,"height","8%"],[1,"text-center","leftSidePanels2"],[1,"avgStepText"],[1,"avgStepVal"],["size","6","text-center","",2,"margin-top","10px"],[1,"mainProgressBarDiv"],[1,"EachDot","premiumStarDiv"],[1,"fa","fa-star","starIcon","lastStar",3,"ngClass"],[1,"platinumText"],[1,"platinum"],[1,"EachDot","inActiveDot","nextToPlatinum",3,"ngClass"],[1,"stardiv"],[1,"fa","fa-star","starIcon","inactiveStar",3,"ngClass"],[1,"goldText"],[1,"gold"],[1,"goldVal"],[1,"EachDot","inActiveDot","nextToGold",3,"ngClass"],[1,"EachDot","inActiveDot",3,"ngClass"],[1,"silverText"],[1,"silver"],[1,"silverVal"],[1,"EachDot","inActiveDot","nextToSilver",3,"ngClass"],[1,"fa","fa-star","starIcon","inActiveStar",3,"ngClass"],[1,"bronzeText"],[1,"bronze"],[1,"bronzeVal"],[1,"EachDot","inActiveDot","nextToBronze",3,"ngClass"],[1,"col-xs-12","text-center","autoMarginDiv"],[1,"status-heading","autoMarginDiv"],[1,"fas","fa-star","star"],[1,"status"],[1,"col-xs-12","text-center"],[1,"statusDisclaimer"],[1,"col-xs-12","text-center",2,"margin-top","5px"],[1,"currently-sync-text","belowTextItem"],["src","../../assets/imgs/sync.png","alt","...",1,"currently-sync-icon"],[1,"col-xs-12","text-center",2,"margin-top","15px"],[1,"unsync-text","belowTextItem",3,"click"],[1,"disclaimer","belowTextItem"]],template:function(n,e){1&n&&(t.TgZ(0,"ion-header",0)(1,"ion-toolbar",1),t._UZ(2,"ion-menu-button",2),t.TgZ(3,"ion-title",3),t._uU(4),t.ALo(5,"translate"),t.qZA()()(),t.TgZ(6,"ion-content",4)(7,"ion-row")(8,"div",5)(9,"p",6),t._uU(10),t.qZA()()(),t.TgZ(11,"ion-row")(12,"ion-col",7),t._UZ(13,"ion-row",8),t.TgZ(14,"ion-row",9)(15,"div",10)(16,"ion-label",11),t._uU(17),t.ALo(18,"translate"),t.qZA(),t._UZ(19,"br"),t.TgZ(20,"ion-label",12),t._uU(21),t.qZA()()(),t._UZ(22,"ion-row",13),t.TgZ(23,"ion-row",9)(24,"div",14)(25,"ion-label",15),t._uU(26),t.ALo(27,"translate"),t.qZA(),t._UZ(28,"br"),t.TgZ(29,"ion-label",16),t._uU(30),t.qZA()()(),t._UZ(31,"ion-row",8),t.qZA(),t.TgZ(32,"ion-col",17)(33,"div",18)(34,"div",19),t._UZ(35,"i",20),t.qZA(),t.TgZ(36,"div",21)(37,"p",22),t._uU(38),t.ALo(39,"translate"),t.qZA()(),t._UZ(40,"div",23),t.TgZ(41,"div",24),t._UZ(42,"i",25),t.qZA(),t.TgZ(43,"div",26)(44,"p",27),t._uU(45),t.ALo(46,"translate"),t.qZA(),t.TgZ(47,"p",28),t._uU(48,"10,000"),t.qZA()(),t._UZ(49,"div",29)(50,"div",30)(51,"div",30),t.TgZ(52,"div",24),t._UZ(53,"i",25),t.qZA(),t.TgZ(54,"div",31)(55,"p",32),t._uU(56),t.ALo(57,"translate"),t.qZA(),t.TgZ(58,"p",33),t._uU(59,"6,000"),t.qZA()(),t._UZ(60,"div",34)(61,"div",30),t.TgZ(62,"div",24),t._UZ(63,"i",35),t.qZA(),t.TgZ(64,"div",36)(65,"p",37),t._uU(66),t.ALo(67,"translate"),t.qZA(),t.TgZ(68,"p",38),t._uU(69,"3,000"),t.qZA()(),t._UZ(70,"div",39)(71,"div",30),t.qZA()(),t.TgZ(72,"div",40)(73,"p",41),t._UZ(74,"i",42),t._uU(75," Status: "),t.TgZ(76,"span",43),t._uU(77),t.qZA()()(),t.TgZ(78,"div",44)(79,"p",45),t._uU(80),t.ALo(81,"translate"),t.qZA()()(),t.TgZ(82,"ion-row")(83,"div",46)(84,"p",47),t._UZ(85,"img",48),t._uU(86),t.ALo(87,"translate"),t.qZA()()(),t.TgZ(88,"ion-row")(89,"div",49)(90,"p",50),t.NdJ("click",function(){return e.unsync()}),t._uU(91),t.ALo(92,"translate"),t.qZA()()(),t.TgZ(93,"ion-row")(94,"div",44)(95,"p",51),t._uU(96),t.ALo(97,"translate"),t._UZ(98,"br"),t._uU(99),t.ALo(100,"translate"),t.qZA()()()()),2&n&&(t.xp6(4),t.Oqu(t.lcZ(5,29,"sunactivDBD.sunactivDBD_title")),t.xp6(6),t.Oqu(e.currentDateInWords),t.xp6(7),t.Oqu(t.lcZ(18,31,"sunactivDBD.totalSteptext")),t.xp6(4),t.Oqu(e.stepsToday),t.xp6(5),t.Oqu(t.lcZ(27,33,"sunactivDBD.avgDailyStep")),t.xp6(4),t.Oqu(e.avgStepsThisMonth),t.xp6(5),t.Q6J("ngClass",t.VKq(53,f,e.checklastToLastMonth())),t.xp6(3),t.Oqu(t.lcZ(39,35,"sunactivDBD.platinum")),t.xp6(2),t.Q6J("ngClass",t.VKq(55,g,e.checklastMonth())),t.xp6(2),t.Q6J("ngClass",t.VKq(57,f,e.avgStepsThisMonth>9999)),t.xp6(3),t.Oqu(t.lcZ(46,37,"sunactivDBD.gold")),t.xp6(4),t.Q6J("ngClass",t.VKq(59,g,e.avgStepsThisMonth>8999)),t.xp6(1),t.Q6J("ngClass",t.VKq(61,g,e.avgStepsThisMonth>7999)),t.xp6(1),t.Q6J("ngClass",t.VKq(63,g,e.avgStepsThisMonth>6999)),t.xp6(2),t.Q6J("ngClass",t.VKq(65,f,e.avgStepsThisMonth>5999)),t.xp6(3),t.Oqu(t.lcZ(57,39,"sunactivDBD.silver")),t.xp6(4),t.Q6J("ngClass",t.VKq(67,g,e.avgStepsThisMonth>4999)),t.xp6(1),t.Q6J("ngClass",t.VKq(69,g,e.avgStepsThisMonth>3999)),t.xp6(2),t.Q6J("ngClass",t.VKq(71,f,e.avgStepsThisMonth>2999)),t.xp6(3),t.Oqu(t.lcZ(67,41,"sunactivDBD.bronze")),t.xp6(4),t.Q6J("ngClass",t.VKq(73,g,e.avgStepsThisMonth>1999)),t.xp6(1),t.Q6J("ngClass",t.VKq(75,g,e.avgStepsThisMonth>999)),t.xp6(6),t.hij("",e.status,"*"),t.xp6(3),t.Oqu(t.lcZ(81,43,"sunactivDBD.statusDisclaimer")),t.xp6(6),t.AsE("",t.lcZ(87,45,"sunactivDBD.crntlSyncwith")," ",e.selectedSource,""),t.xp6(5),t.Oqu(t.lcZ(92,47,"sunactivDBD.unsync")),t.xp6(5),t.Oqu(t.lcZ(97,49,"sunactivDBD.disclaimer")),t.xp6(3),t.Oqu(t.lcZ(100,51,"sunactivDBD.disclaimer2")))},dependencies:[D.mk,r.wI,r.W2,r.Gu,r.Q$,r.fG,r.Nd,r.wd,r.sr,m.X$],styles:[".sunactiv-dashbaord[_ngcontent-%COMP%]{--background: url(sunactive-health.639e4fb381c1b742.jpg) no-repeat center center / cover;background-size:cover;background-repeat:no-repeat;height:100%;background-position:bottom}img[_ngcontent-%COMP%]{width:100%;height:100%}.row-date[_ngcontent-%COMP%]{width:100%;position:relative;min-height:1px;float:left;margin-top:-15px}.date[_ngcontent-%COMP%]{font-size:18px;font-family:Agenda-Bold;color:#002f3b}.step-count-heading[_ngcontent-%COMP%]{font-family:Agenda-Bold;margin-bottom:5px;color:#002f3b;font-size:16px}.step-count[_ngcontent-%COMP%]{font-family:Agenda-Bold;color:#ffcb2e;font-size:32px;letter-spacing:5px}.status-heading[_ngcontent-%COMP%]{font-family:Agenda-Bold;color:#002f3b;font-size:16px}.status[_ngcontent-%COMP%]{color:#549542;font-size:20px;font-family:Agenda-Bold}.star[_ngcontent-%COMP%]{color:#ffcb2e}p[_ngcontent-%COMP%]{line-height:0px}.col-xs-12[_ngcontent-%COMP%]{width:100%;float:left;position:relative;min-height:1px}.text-center[_ngcontent-%COMP%]{text-align:center}.col[_ngcontent-%COMP%]{padding:0}.leftSidePanels1[_ngcontent-%COMP%], .leftSidePanels2[_ngcontent-%COMP%]{background-color:rgba(255,255,255,.5);border-radius:15px;padding:15px 0;width:95%;max-height:100%}.totalStepText[_ngcontent-%COMP%]{font-family:Agenda-Bold;color:#002f3b;font-size:16px;white-space:nowrap}.stepTodayVal[_ngcontent-%COMP%]{font-family:Agenda-Bold;color:#ffcb2e;font-size:32px;letter-spacing:5px;white-space:nowrap}.avgStepText[_ngcontent-%COMP%]{font-family:Agenda-Bold;color:#002f3b;font-size:16px;white-space:nowrap}.avgStepVal[_ngcontent-%COMP%]{font-family:Agenda-Bold;color:#ffcb2e;font-size:32px;letter-spacing:5px;white-space:nowrap}.mainProgressBarDiv[_ngcontent-%COMP%]{margin-left:2px}.premiumStarDiv[_ngcontent-%COMP%]{background:Black;width:18px!important;height:18px!important;margin-left:-3px!important;margin-bottom:2px!important}.lastStar[_ngcontent-%COMP%]{color:#ff0;font-size:10px!important;padding-left:4px;padding-right:4px}.platinumText[_ngcontent-%COMP%]{margin-top:-9px;text-align:left;margin-left:20%}.platinum[_ngcontent-%COMP%]{font-family:Agenda-Bold;color:#002f3b;font-size:16px;margin:auto}.nextToPlatinum[_ngcontent-%COMP%]{margin-top:19px!important}.EachDot[_ngcontent-%COMP%]{height:12px;width:12px;border-radius:50%;margin-top:8%}.activeDot[_ngcontent-%COMP%]{background:#549542!important}.inActiveDot[_ngcontent-%COMP%]{background:#022F3B}.activeStar[_ngcontent-%COMP%]{color:#549542!important}.inActiveStar[_ngcontent-%COMP%]{color:#022f3b}.starIcon[_ngcontent-%COMP%]{font-size:15px}.stardiv[_ngcontent-%COMP%]{width:0%;margin-left:-2px;margin-bottom:9%;margin-top:7%}.goldText[_ngcontent-%COMP%]{text-align:left;margin-left:20%;margin-top:-26px}.gold[_ngcontent-%COMP%]{font-family:Agenda-Bold;color:#002f3b;font-size:16px;margin:auto}.goldVal[_ngcontent-%COMP%]{font-family:Agenda-Regular;color:#002f3b;font-size:14px}.nextToGold[_ngcontent-%COMP%]{margin-top:-10px!important}.silverText[_ngcontent-%COMP%]{text-align:left;margin-left:20%;margin-top:-24px}.silver[_ngcontent-%COMP%]{font-family:Agenda-Bold;color:#002f3b;font-size:16px;margin:auto}.silverVal[_ngcontent-%COMP%]{font-family:Agenda-Regular;color:#002f3b;font-size:14px}.nextToSilver[_ngcontent-%COMP%]{margin-top:-10px!important}.bronzeText[_ngcontent-%COMP%]{text-align:left;margin-left:20%;margin-top:-24px}.bronze[_ngcontent-%COMP%]{font-family:Agenda-Bold;color:#002f3b;font-size:16px;margin:auto}.bronzeVal[_ngcontent-%COMP%]{font-family:Agenda-Regular;color:#002f3b;font-size:14px}.nextToBronze[_ngcontent-%COMP%]{margin-top:-10px!important}.rewards[_ngcontent-%COMP%]{position:relative;min-height:1px;width:66.66666667%;font-family:Agenda-Bold;color:#fff;font-size:16px;background:#ffcb2e;padding:5px;border:3px solid #e6e7e8}.rewards-icon[_ngcontent-%COMP%]{width:15px}.text-rewards[_ngcontent-%COMP%]{padding:5px;font-family:Agenda-Bold}.autoMarginDiv[_ngcontent-%COMP%]{margin-top:10px}.currently-sync-text[_ngcontent-%COMP%]{font-family:Agenda-Light;color:#002f3b;margin:auto;font-size:14px}.currently-sync-icon[_ngcontent-%COMP%]{width:18px}.unsync-text[_ngcontent-%COMP%]{color:#002f3b;font-size:14px;font-family:Agenda-Bold}.disclaimer[_ngcontent-%COMP%]{font-family:Agenda-Light;color:#ed193a;font-size:14px;line-height:24px}.statusDisclaimer[_ngcontent-%COMP%]{font-family:Agenda-Light;color:#002f3b;font-size:14px;line-height:16px;margin-top:-10px}@media only screen and (min-height: 600px) and (min-width: 768px){.totalStepText[_ngcontent-%COMP%]{font-size:20px}.stepTodayVal[_ngcontent-%COMP%]{font-size:40px}.avgStepText[_ngcontent-%COMP%]{font-size:20px}.avgStepVal[_ngcontent-%COMP%]{font-size:40px}.leftSidePanels1[_ngcontent-%COMP%], .leftSidePanels2[_ngcontent-%COMP%]{padding:35px 0;width:85%;margin:auto}.nextToPlatinum[_ngcontent-%COMP%]{margin-top:30px!important}.nextToGold[_ngcontent-%COMP%], .nextToSilver[_ngcontent-%COMP%], .nextToBronze[_ngcontent-%COMP%]{margin-top:20px!important}.bronzeText[_ngcontent-%COMP%], .silverText[_ngcontent-%COMP%], .goldText[_ngcontent-%COMP%]{margin-top:-45px}.autoMarginDiv[_ngcontent-%COMP%]{margin-top:20px}}"]}),a})()}];let _=(()=>{class a{}return a.\u0275fac=function(n){return new(n||a)},a.\u0275mod=t.oAB({type:a}),a.\u0275inj=t.cJS({imports:[v.Bz.forChild(b),v.Bz]}),a})(),A=(()=>{class a{}return a.\u0275fac=function(n){return new(n||a)},a.\u0275mod=t.oAB({type:a}),a.\u0275inj=t.cJS({imports:[D.ez,S.u5,r.Pc,m.aw,_]}),a})()}}]);