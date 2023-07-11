"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[4500],{74500:(D,f,a)=>{a.r(f),a.d(f,{PlanListingPageModule:()=>w});var r=a(36895),h=a(24006),c=a(54463),s=a(48058),g=a(64228),_=a(65414),m=a(22727),n=a(98274),P=a(45340),y=a(9999),L=a(53025),v=a(78785),x=a(43485);function C(t,o){1&t&&(n.TgZ(0,"section",12),n._UZ(1,"ion-spinner",13),n.qZA())}function T(t,o){if(1&t){const i=n.EpF();n.TgZ(0,"ion-button",16),n.NdJ("click",function(){n.CHM(i);const l=n.oxw(2);return n.KtG(l.getPolicyList())}),n._uU(1),n.ALo(2,"translate"),n.qZA()}2&t&&(n.xp6(1),n.hij(" ",n.lcZ(2,1,"generic_msgs.try_again"),""))}function b(t,o){if(1&t&&(n.TgZ(0,"section",14)(1,"span"),n._uU(2),n.qZA(),n.YNc(3,T,3,3,"ion-button",15),n.qZA()),2&t){const i=n.oxw();n.xp6(2),n.Oqu(i.errorMsg),n.xp6(1),n.Q6J("ngIf",i.canTryAgain)}}const M=function(t,o){return{"header-conventional":t,"header-takaful":o}};function O(t,o){if(1&t&&(n.TgZ(0,"section")(1,"ion-row",21)(2,"p",22),n._uU(3),n.qZA(),n.TgZ(4,"p",23),n._uU(5),n.qZA()()()),2&t){const i=n.oxw().$implicit,e=n.oxw(2);n.xp6(1),n.Q6J("ngClass",n.WLB(3,M,e.isConventional,e.isTakaful)),n.xp6(2),n.Oqu(i.planName),n.xp6(2),n.Oqu(i.policyNumber)}}function S(t,o){if(1&t){const i=n.EpF();n.TgZ(0,"section",19),n.NdJ("click",function(){const p=n.CHM(i).$implicit,d=n.oxw(2);return n.KtG(d.navToPlanDetails(p))}),n.YNc(1,O,6,6,"section",20),n.qZA()}if(2&t){const i=o.$implicit,e=n.oxw(2);n.xp6(1),n.Q6J("ngIf",i.planType===e.tabSelected)}}function Z(t,o){if(1&t&&(n.TgZ(0,"ion-list",17),n.YNc(1,S,2,1,"section",18),n.qZA()),2&t){const i=n.oxw();n.xp6(1),n.Q6J("ngForOf",i.policyList)}}const u=function(t,o){return{"tab-selected":t,tab:o}},A=[{path:"",component:(()=>{class t{constructor(i,e,l,p,d,J,N,Y){this.translateConfigService=i,this.logger=e,this.translate=l,this.utils=p,this.router=d,this.policyListSrvc=J,this.menuControler=N,this.config=Y,this.policyList=[],this.isShowingLoader=!0,this.isConventional=!0,this.isTakaful=!1,this.tabSelected="Conventional",this.canTryAgain=!1,this.conventionalData=[],this.takafulData=[],this.selectedLanguage=this.translateConfigService.getDefaultLanguage(),this.translateConfigService.setLanguage("en")}ngOnInit(){this.getPolicyList()}ionViewDidLoad(){this.logger.log("ionViewDidLoad PlanListingPage"),this.getPolicyList()}ionViewDidEnter(){this.menuControler.enable(!0,"custom"),this.utils.component.emit(_.c.MY_POLICY)}getPolicyList(){this.utils.isDeviceOnLine()?(this.canTryAgain=!1,this.policyListSrvc.getPolicyList(this.utils.getUserIdentity()).then(i=>{try{this.isShowingLoader=!1,i.responseJSON&&i.responseJSON.statusCode==m.OK?this._separateByPlanType(i.responseJSON.array):this.errorMsg=i.responseJSON.error_description}catch(e){this.isShowingLoader=!1,this.canTryAgain=!0,this.logger.error("loginSuccess catch eror : "+JSON.stringify(e)),this.errorMsg=this.translate.instant("generic_msgs.server_err")}},i=>{this.isShowingLoader=!1,this.canTryAgain=!0,this.errorMsg=this.utils.handleServiceException(i)})):(this.isShowingLoader=!1,this.canTryAgain=!0,this.errorMsg=this.translate.instant("generic_msgs.network_err"))}navToPlanDetails(i){this.router.navigate(["plan-details"],{state:{policyData:i}})}toggletab(i){this.tabSelected=i,"Conventional"==i?(this.isConventional=!0,this.isTakaful=!1,this.policyList=this.conventionalData):"Takaful"==i&&(this.isConventional=!1,this.isTakaful=!0,this.policyList=this.takafulData)}_separateByPlanType(i){for(var e=0;e<i.length;++e){var l=i[e];"Conventional"==l.planType?this.conventionalData.push(l):"Takaful"==l.planType&&this.takafulData.push(l),this.policyList=this.conventionalData,this.errorMsg=this.translate.instant("generic_msgs.no_data")}}}return t.\u0275fac=function(i){return new(i||t)(n.Y36(P.w),n.Y36(y.U),n.Y36(c.sK),n.Y36(L.f),n.Y36(g.F0),n.Y36(v.r),n.Y36(s._q),n.Y36(x.i))},t.\u0275cmp=n.Xpm({type:t,selectors:[["app-plan-listing"]],decls:20,vars:20,consts:[["mode","ios"],["color","primary",2,"border-bottom","3px solid white"],["slot","start","color","secondary"],[1,"bold-font"],["color","primary",1,"tabs"],[1,"tabsRow"],["size","6",1,"ion-text-center",2,"padding-top","8px",3,"ngClass","click"],[2,"font-family","Agenda-Semibold"],[1,"app_bg2","text_color_base","ion-padding"],["class","spinnersection ion-text-center",4,"ngIf"],["class","errorMsgSection white_container_border_radius",4,"ngIf"],["class","white_container_border_radius ion-padding",4,"ngIf"],[1,"spinnersection","ion-text-center"],["name","lines-sharp-small",2,"height","98%"],[1,"errorMsgSection","white_container_border_radius"],["style","--background:var(--ion-color-white);",3,"click",4,"ngIf"],[2,"--background","var(--ion-color-white)",3,"click"],[1,"white_container_border_radius","ion-padding"],[3,"click",4,"ngFor","ngForOf"],[3,"click"],[4,"ngIf"],[1,"cardheader","header",3,"ngClass"],[2,"padding-left","5px","padding-top","5px","font-size","0.9rem"],[2,"padding-left","5px","padding-bottom","5px","font-size","0.9rem"]],template:function(i,e){1&i&&(n.TgZ(0,"ion-header",0)(1,"ion-toolbar",1),n._UZ(2,"ion-menu-button",2),n.TgZ(3,"ion-title",3),n._uU(4),n.ALo(5,"translate"),n.qZA()(),n.TgZ(6,"ion-toolbar",4)(7,"ion-row",5)(8,"ion-col",6),n.NdJ("click",function(){return e.toggletab("Conventional")}),n.TgZ(9,"ion-label",7),n._uU(10),n.ALo(11,"translate"),n.qZA()(),n.TgZ(12,"ion-col",6),n.NdJ("click",function(){return e.toggletab("Takaful")}),n.TgZ(13,"ion-label",7),n._uU(14),n.ALo(15,"translate"),n.qZA()()()()(),n.TgZ(16,"ion-content",8),n.YNc(17,C,2,0,"section",9),n.YNc(18,b,4,2,"section",10),n.YNc(19,Z,2,1,"ion-list",11),n.qZA()),2&i&&(n.xp6(4),n.hij(" ",n.lcZ(5,8,"plan_listing.title")," "),n.xp6(4),n.Q6J("ngClass",n.WLB(14,u,e.isConventional,!e.isConventional)),n.xp6(2),n.Oqu(n.lcZ(11,10,"plan_listing.type_conventional")),n.xp6(2),n.Q6J("ngClass",n.WLB(17,u,e.isTakaful,!e.isTakaful)),n.xp6(2),n.Oqu(n.lcZ(15,12,"plan_listing.type_takaful")),n.xp6(3),n.Q6J("ngIf",e.isShowingLoader),n.xp6(1),n.Q6J("ngIf",!(e.policyList.length>0||e.isShowingLoader)),n.xp6(1),n.Q6J("ngIf",e.policyList.length>0))},dependencies:[r.mk,r.sg,r.O5,s.YG,s.wI,s.W2,s.Gu,s.Q$,s.q_,s.fG,s.Nd,s.PQ,s.wd,s.sr,c.X$],styles:[".cardheader[_ngcontent-%COMP%]{padding:5px 15px}.cardheader[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:1rem;margin:0;width:100%;font-family:Agenda-Regular;line-height:20px}.label[_ngcontent-%COMP%]{margin:1px 1px 1px 0}ion-col[_ngcontent-%COMP%]{text-align:center}.tabs[_ngcontent-%COMP%]{--padding-top: -3px;--padding-bottom: -3px;--padding-start: -4px;--padding-end: -4px;--min-height: 35px}.tabsRow[_ngcontent-%COMP%]{height:40px}.tab[_ngcontent-%COMP%]{background-color:var(--ion-color-secondary);font-family:var(--ion-font-Agenda-Semibold);font-size:1rem;color:#fff}.tab-selected[_ngcontent-%COMP%]{background-color:var(--ion-color-primary);font-family:var(--ion-font-Agenda-Semibold);font-size:1rem;color:--ion-color-secondary}.header-conventional[_ngcontent-%COMP%]{background-color:var(--ion-color-secondary);color:#fff!important}.header-takaful[_ngcontent-%COMP%]{background-color:var(--ion-color-success);color:#fff!important}.white_container_border_radius[_ngcontent-%COMP%]{padding:25px 15px;border-radius:15px!important}.white_container_border_radius[_ngcontent-%COMP%]   section[_ngcontent-%COMP%]{margin:0 0 5px}.tab-selected[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%], .tab[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%]{font-family:var(--ion-font-Agenda-Semibold);font-size:1.6rem}.spinnersection[_ngcontent-%COMP%]{display:block;flex-direction:column;justify-content:center;align-items:center;font-size:1.3rem;height:98%}.errorMsgSection[_ngcontent-%COMP%]{display:flex;flex-direction:column;justify-content:center;align-items:center;height:98%;font-size:.8rem;color:#494747!important;padding:0 15px}"]}),t})()}];let k=(()=>{class t{}return t.\u0275fac=function(i){return new(i||t)},t.\u0275mod=n.oAB({type:t}),t.\u0275inj=n.cJS({imports:[g.Bz.forChild(A),g.Bz]}),t})(),w=(()=>{class t{}return t.\u0275fac=function(i){return new(i||t)},t.\u0275mod=n.oAB({type:t}),t.\u0275inj=n.cJS({imports:[r.ez,h.u5,s.Pc,c.aw,k]}),t})()}}]);