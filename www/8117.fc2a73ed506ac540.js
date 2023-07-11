"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[8117],{88117:(S,d,s)=>{s.r(d),s.d(d,{AppDownloadsPageModule:()=>M});var l=s(36895),u=s(24006),e=s(48058),h=s(64228),f=s(22727),o=s(98274),w=s(60193),A=s(53025),c=s(54463),m=s(9999),_=s(43485);function x(n,i){1&n&&(o.TgZ(0,"section",12),o._UZ(1,"ion-spinner",13),o.qZA())}function v(n,i){if(1&n){const t=o.EpF();o.TgZ(0,"ion-button",16),o.NdJ("click",function(){o.CHM(t);const r=o.oxw(2);return o.KtG(r.getAppsList())}),o._uU(1),o.ALo(2,"translate"),o.qZA()}2&n&&(o.xp6(1),o.Oqu(o.lcZ(2,1,"generic_msgs.try_again")))}function D(n,i){if(1&n&&(o.TgZ(0,"section",14)(1,"span"),o._uU(2),o.qZA(),o.YNc(3,v,3,3,"ion-button",15),o.qZA()),2&n){const t=o.oxw();o.xp6(2),o.Oqu(t.errorMsg),o.xp6(1),o.Q6J("ngIf",t.canTryAgain)}}function P(n,i){if(1&n){const t=o.EpF();o.TgZ(0,"ion-col",20),o.NdJ("click",function(){const g=o.CHM(t).$implicit,p=o.oxw(2);return o.KtG(p.showDownload(g))}),o._UZ(1,"img",21),o.TgZ(2,"ion-label"),o._uU(3),o.qZA()()}if(2&n){const t=i.$implicit;o.xp6(1),o.MGl("src","data:image/png;base64,",t.icon,"",o.LSH),o.xp6(2),o.hij(" ",t.name," ")}}function Z(n,i){if(1&n&&(o.TgZ(0,"div",17)(1,"section",18)(2,"ion-grid")(3,"ion-row"),o.YNc(4,P,4,2,"ion-col",19),o.qZA()()()()),2&n){const t=o.oxw();o.xp6(4),o.Q6J("ngForOf",t.downloads)}}const T=[{path:"",component:(()=>{class n{constructor(t,a,r,g,p,b){this.modalCtrl=t,this.getAppsService=a,this.utils=r,this.translate=g,this.logger=p,this.config=b,this.downloads=[],this.isShowingLoader=!0,this.canTryAgain=!1,this.utils.analytics("appDownloads"),this.config.currentPage.pageName="AppDownloadsPage"}ngOnInit(){this.logger.log("ionViewDidLoad AppDownloadsPage"),this.getAppsList()}getAppsList(){this.utils.isDeviceOnLine()?(this.canTryAgain=!1,this.getAppsService.getApplist().then(t=>{try{this.isShowingLoader=!1,t.responseJSON&&t.responseJSON.statusCode==f.OK?(this.downloads=t.responseJSON.array,this.downloads.length>0||(this.errorMsg=this.translate.instant("generic_msgs.no_data"))):this.errorMsg=t.responseJSON.error_description}catch(a){this.isShowingLoader=!1,this.canTryAgain=!0,this.errorMsg=this.translate.instant("generic_msgs.server_err")}},t=>{this.isShowingLoader=!1,this.canTryAgain=!0,this.errorMsg=this.utils.handleServiceException(t)})):(this.isShowingLoader=!1,this.canTryAgain=!0,this.errorMsg=this.translate.instant("generic_msgs.network_err"))}showDownload(t){}}return n.\u0275fac=function(t){return new(t||n)(o.Y36(e.IN),o.Y36(w.y),o.Y36(A.f),o.Y36(c.sK),o.Y36(m.U),o.Y36(_.i))},n.\u0275cmp=o.Xpm({type:n,selectors:[["app-app-downloads"]],decls:16,vars:9,consts:[["mode","ios"],["color","primary"],["slot","start"],["text","","icon","chevron-back-outline",2,"padding-left","15px","font-size","0.7rem"],[1,"bold-font"],[1,"sub_title","ion-no-padding"],[1,"subheader_bg"],[1,"sub-header"],["padding","","no-bounce","",1,"app_bg2"],["class","spinnersection",4,"ngIf"],["class","errorMsgSection white_container_border_radius",4,"ngIf"],["class","text_color_base",4,"ngIf"],[1,"spinnersection"],["name","ios-small"],[1,"errorMsgSection","white_container_border_radius"],["style","--background:var(--ion-color-white);",3,"click",4,"ngIf"],[2,"--background","var(--ion-color-white)",3,"click"],[1,"text_color_base"],[1,"white_container_border_radius"],["size","6","text-center","","class","heading",3,"click",4,"ngFor","ngForOf"],["size","6","text-center","",1,"heading",3,"click"],["alt","...",3,"src"]],template:function(t,a){1&t&&(o.TgZ(0,"ion-header",0)(1,"ion-toolbar",1)(2,"ion-buttons",2),o._UZ(3,"ion-back-button",3),o.qZA(),o.TgZ(4,"ion-title",4),o._uU(5),o.ALo(6,"translate"),o.qZA()(),o.TgZ(7,"ion-toolbar",5)(8,"ion-row",6)(9,"ion-label",7),o._uU(10),o.ALo(11,"translate"),o.qZA()()()(),o.TgZ(12,"ion-content",8),o.YNc(13,x,2,0,"section",9),o.YNc(14,D,4,2,"section",10),o.YNc(15,Z,5,1,"div",11),o.qZA()),2&t&&(o.xp6(5),o.Oqu(o.lcZ(6,5,"downloads.download")),o.xp6(5),o.Oqu(o.lcZ(11,7,"downloads.sunlife_apps")),o.xp6(3),o.Q6J("ngIf",a.isShowingLoader),o.xp6(1),o.Q6J("ngIf",!(a.downloads.length>0||a.isShowingLoader)),o.xp6(1),o.Q6J("ngIf",a.downloads.length>0))},dependencies:[l.sg,l.O5,e.oU,e.YG,e.Sm,e.wI,e.W2,e.jY,e.Gu,e.Q$,e.Nd,e.PQ,e.wd,e.sr,e.cs,c.X$],styles:[".sub-header[_ngcontent-%COMP%]{color:#fff;padding:10px 25px!important;margin:0!important;font-size:1rem!important;font-family:Agenda-Regular}img[_ngcontent-%COMP%]{width:15vh;height:15vh}.label[_ngcontent-%COMP%]{width:100%}.sub_title[_ngcontent-%COMP%]{margin-top:3px!important}"]}),n})()}];let y=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=o.oAB({type:n}),n.\u0275inj=o.cJS({imports:[h.Bz.forChild(T),h.Bz]}),n})(),M=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=o.oAB({type:n}),n.\u0275inj=o.cJS({imports:[l.ez,u.u5,e.Pc,y,c.aw]}),n})()}}]);