"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[7888],{87888:(b,l,i)=>{i.r(l),i.d(l,{WelcomeTourPageModule:()=>Z});var u=i(36895),m=i(24006),c=i(48058),a=i(64228),d=i(22727),e=i(98274),T=i(9999),p=i(53025),v=i(34088),S=i(54463),N=i(49756),P=i(43485);function _(o,n){if(1&o){const t=e.EpF();e.TgZ(0,"div",2),e._UZ(1,"img",3),e.TgZ(2,"h2"),e._uU(3,"Welcome!"),e.qZA(),e.TgZ(4,"p"),e._uU(5,"Take a quick tour."),e._UZ(6,"br"),e._uU(7," Find out about key features in SunAccess."),e.qZA(),e.TgZ(8,"ion-button",4),e.NdJ("click",function(){e.CHM(t);const r=e.oxw();return e.KtG(r.goToNextScreen("One","yes"))}),e._uU(9," Great, let's go! "),e.qZA(),e.TgZ(10,"div",5),e.NdJ("click",function(){e.CHM(t);const r=e.oxw();return e.KtG(r.goToNextScreen("One","no"))}),e._uU(11,"No thanks"),e.qZA()()}}function M(o,n){if(1&o){const t=e.EpF();e.TgZ(0,"div",2),e._UZ(1,"img",6),e.TgZ(2,"p"),e._uU(3,"Get notified when there is an important update."),e.qZA(),e.TgZ(4,"ion-button",7),e.NdJ("click",function(){e.CHM(t);const r=e.oxw();return e.KtG(r.goToNextScreen("Two","yes"))}),e._uU(5," Yes"),e.qZA(),e.TgZ(6,"div",5),e.NdJ("click",function(){e.CHM(t);const r=e.oxw();return e.KtG(r.goToNextScreen("Two","no"))}),e._uU(7,"Not now"),e.qZA()()}}function O(o,n){if(1&o){const t=e.EpF();e.TgZ(0,"div",2),e._UZ(1,"img",8),e.TgZ(2,"p"),e._uU(3,"Congratulations!"),e._UZ(4,"br"),e._uU(5," Now you've got the basics."),e.qZA(),e.TgZ(6,"div",5),e.NdJ("click",function(){e.CHM(t);const r=e.oxw();return e.KtG(r.goToNextScreen("Three",""))}),e._uU(7," Let\u2019s Get Started!"),e.qZA()()}}const x=[{path:"",component:(()=>{class o{constructor(t,s,r,h,g,W,y,w,C,F){this.menuCtrl=t,this.logger=s,this.utils=r,this.router=h,this.activatedRoute=g,this.NotificationSettingservice=W,this.alertCtrl=y,this.translate=w,this.pushNotiService=C,this.config=F,this.comingfromSettings=history.state.comingfromSettings,this.comingFromLogin=history.state.comingFromLogin,this.tourEnd=history.state.tourEnd,this.activatedRoute.params.subscribe(f=>{console.log(f),this.comingfromSettings&&0==this.config.userInfo.isNotificationRegistered&&(this.showNotificationScreen=!0),f.tourEnd?(this.screenOne=!1,this.screenThree=!0):this.screenOne=!0})}ionViewDidLoad(){console.log("ionViewDidLoad WelcomeTourPage")}goToNextScreen(t,s){"One"==t?"yes"==s?(this.screenOne=!1,this.showNotificationScreen?this.screenTwo=!0:this.gotoDashboardTour()):this.skipTourGotoDashboard():"Two"==t?"yes"==s?this.notificationPermission():(this.screenTwo=!1,this.gotoDashboardTour()):this.router.navigate(["/dashboard-after-login"],{state:{animate:!0,direction:"forward"}})}skipTourGotoDashboard(){localStorage.setItem("welomeTour","true"),this.router.navigate(["/dashboard-after-login"],{state:{animate:!0,direction:"forward",comingFromLoginFlag:{comingFromLogin:!0}}})}gotoDashboardTour(){localStorage.setItem("welomeTour","true");let t={comingFromLogin:!0,comingfromWelcomeTour:!0};this.router.navigate(["/dashboard-after-login",t],{state:{animate:!0,direction:"forward",comingFromLoginFlag:t}})}notificationPermission(){this.utils.showProgressLoader(),this.pushNotiService.registerDevice().then(t=>{this.sendUpdateNotiSettingstoServer(),this.utils.dissmisProgressLoader(),this.screenTwo=!1,this.gotoDashboardTour()},t=>{this.utils.dissmisProgressLoader(),this.screenTwo=!1,this.gotoDashboardTour()})}sendUpdateNotiSettingstoServer(){this.utils.isDeviceOnLine()?this.NotificationSettingservice.updatePushNotificationsetting(!0).then(t=>{try{this.utils.dissmisProgressLoader(),t.responseJSON&&t.responseJSON.statusCode==d.OK?(this.errorMsg=t.responseJSON.userMessage,this.isSuccess=!0,this.config.userInfo.isNotificationRegistered=!0):t.responseJSON&&t.responseJSON.statusCode==d.yI?(this.errorMsg=t.responseJSON.userMessage,this.config.userInfo.isNotificationRegistered=!1):(this.logger.error("PUT USER Notification Settings Update : "+JSON.stringify(t)),this.errorMsg=this.translate.instant("generic_msgs.server_err"),this.isSuccess=!1,this.config.userInfo.isNotificationRegistered=!1)}catch(s){this.utils.dissmisProgressLoader(),this.isSuccess=!1,this.logger.error("PUT USER Notification Settings Update : "+JSON.stringify(s)),this.errorMsg=this.translate.instant("generic_msgs.server_err"),this.config.userInfo.isNotificationRegistered=!1}},t=>{this.utils.dissmisProgressLoader(),this.isSuccess=!1,this.logger.error("PUT USER Notification Settings Update : "+JSON.stringify(t)),this.errorMsg=this.utils.handleServiceException(t),this.config.userInfo.isNotificationRegistered=!1}):(this.isShowingLoader=!1,this.isSuccess=!1,this.errorMsg=this.translate.instant("generic_msgs.network_err"),this.config.userInfo.isNotificationRegistered=!1)}showDialog(t,s){this.alertCtrl.create({header:t,message:s,buttons:[{text:"Ok",handler:()=>{}}],backdropDismiss:!1}).then(g=>g.present())}}return o.\u0275fac=function(t){return new(t||o)(e.Y36(c._q),e.Y36(T.U),e.Y36(p.f),e.Y36(a.F0),e.Y36(a.gz),e.Y36(v.K),e.Y36(c.Br),e.Y36(S.sK),e.Y36(N._),e.Y36(P.i))},o.\u0275cmp=e.Xpm({type:o,selectors:[["app-welcome-tour"]],decls:4,vars:3,consts:[["padding","",1,"ion-text-center"],["class","tour-screens",4,"ngIf"],[1,"tour-screens"],["src","./assets/imgs/tour/screen-1.png","alt","Welcome Tour"],["button","",1,"btn_center",3,"click"],[1,"secondary-btn",3,"click"],["src","./assets/imgs/tour/screen-3.png","alt","Welcome Tour"],[1,"btn_center",3,"click"],["src","./assets/imgs/tour/screen-5.png","alt","Welcome Tour"]],template:function(t,s){1&t&&(e.TgZ(0,"ion-content",0),e.YNc(1,_,12,0,"div",1),e.YNc(2,M,8,0,"div",1),e.YNc(3,O,8,0,"div",1),e.qZA()),2&t&&(e.xp6(1),e.Q6J("ngIf",s.screenOne),e.xp6(1),e.Q6J("ngIf",s.screenTwo&&s.showNotificationScreen),e.xp6(1),e.Q6J("ngIf",s.screenThree))},dependencies:[u.O5,c.YG,c.W2],styles:[".tour-screens[_ngcontent-%COMP%]{align-items:center;display:flex;flex-direction:column;height:100%;justify-content:center}.tour-screens[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{padding:0 60px;text-align:center}.tour-screens[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{margin-bottom:0}.tour-screens[_ngcontent-%COMP%]   .secondary-btn[_ngcontent-%COMP%]{color:#002d3d;font-weight:700;margin-top:16px}.tour-screens[_ngcontent-%COMP%]   .btn_center[_ngcontent-%COMP%]{--border-radius: 10px;width:90%!important}"]}),o})()}];let U=(()=>{class o{}return o.\u0275fac=function(t){return new(t||o)},o.\u0275mod=e.oAB({type:o}),o.\u0275inj=e.cJS({imports:[a.Bz.forChild(x),a.Bz]}),o})(),Z=(()=>{class o{}return o.\u0275fac=function(t){return new(t||o)},o.\u0275mod=e.oAB({type:o}),o.\u0275inj=e.cJS({imports:[u.ez,m.u5,c.Pc,U]}),o})()}}]);