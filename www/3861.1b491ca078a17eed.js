"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[3861],{43861:(T,u,n)=>{n.r(u),n.d(u,{EPolicyListPageModule:()=>v});var l=n(36895),f=n(24006),s=n(48058),h=n(64228),t=n(98274),P=n(9999),m=n(53025),y=n(8307),_=n(58339),g=n(54463);function L(i,e){1&i&&(t.TgZ(0,"section",12),t._UZ(1,"ion-spinner",13),t.qZA())}function x(i,e){if(1&i){const o=t.EpF();t.TgZ(0,"button",16),t.NdJ("click",function(){t.CHM(o);const c=t.oxw(2);return t.KtG(c.getEPolicyList())}),t._uU(1),t.ALo(2,"translate"),t.qZA()}2&i&&(t.xp6(1),t.Oqu(t.lcZ(2,1,"generic_msgs.try_again")))}function b(i,e){if(1&i&&(t.TgZ(0,"section",14)(1,"span"),t._uU(2),t.qZA(),t.YNc(3,x,3,3,"button",15),t.qZA()),2&i){const o=t.oxw();t.xp6(2),t.Oqu(o.errorMsg),t.xp6(1),t.Q6J("ngIf",o.canTryAgain)}}function w(i,e){if(1&i){const o=t.EpF();t.TgZ(0,"ion-row",19)(1,"ion-label",20),t.NdJ("click",function(){const d=t.CHM(o).$implicit,p=t.oxw(2);return t.KtG(p.downloadAndOpenPdf(d))}),t._uU(2),t.qZA()()}if(2&i){const o=e.$implicit;t.xp6(2),t.hij(" ",o.policyNumber," ")}}function E(i,e){if(1&i&&(t.TgZ(0,"section",17)(1,"div"),t.YNc(2,w,3,1,"ion-row",18),t.qZA()()),2&i){const o=t.oxw();t.xp6(2),t.Q6J("ngForOf",o.ePolicyList)}}const M=[{path:"",component:(()=>{class i{constructor(o,r,c,d,p){this.logger=o,this.utils=r,this.getEPolicyService=c,this.downloadFile=d,this.translate=p,this.ePolicyList=[],this.isShowingLoader=!0,this.canTryAgain=!1,this.dirName="SunAccess",this.getEPolicyList=function(){this.utils.isDeviceOnLine()?(this.canTryAgain=!1,this.isShowingLoader=!0,this.errorMsg="",this.logger.trace("get EPolicyList--start"),this.getEPolicyService.getEPolicyList().then(a=>{try{this.isShowingLoader=!1,this.ePolicyList=a.responseJSON.array,console.log("getEPolicyList",this.ePolicyList),this.ePolicyList.length>0||(this.canTryAgain=!1,this.errorMsg=this.translate.instant("generic_msgs.no_data"))}catch(O){this.isShowingLoader=!1,this.canTryAgain=!0,this.errorMsg=this.translate.instant("generic_msgs.server_err")}},a=>{this.isShowingLoader=!1,this.canTryAgain=!0,this.errorMsg=this.utils.handleServiceException(a)})):(this.isShowingLoader=!1,this.canTryAgain=!0,this.errorMsg=this.translate.instant("generic_msgs.network_err"))},this.downloadAndOpenPdf=function(a){this.downloadFile.downloadFile(a._link)},this.utils.analytics("ePoLicyList")}ngOnInit(){this.logger.log("ionViewDidLoad EPolicyListPage"),this.getEPolicyList()}}return i.\u0275fac=function(o){return new(o||i)(t.Y36(P.U),t.Y36(m.f),t.Y36(y.V),t.Y36(_.w),t.Y36(g.sK))},i.\u0275cmp=t.Xpm({type:i,selectors:[["app-epolicy-list"]],decls:16,vars:9,consts:[["mode","ios"],["color","primary"],["slot","start"],["text","","icon","chevron-back-outline",2,"padding-left","15px","font-size","0.7rem"],[1,"bold-font"],[1,"sub_title","ion-no-padding"],[1,"subheader_bg"],[1,"sub-header"],["no-bounce","",1,"app_bg2","text_color_base"],["class","spinnersection",4,"ngIf"],["class","errorMsgSection",4,"ngIf"],["class","white_container_border_radius text_color_base padding_015 font_size_18",4,"ngIf"],[1,"spinnersection"],["name","lines-sharp-small",2,"height","98%"],[1,"errorMsgSection"],["style","--background:var(--ion-color-white);",3,"click",4,"ngIf"],[2,"--background","var(--ion-color-white)",3,"click"],[1,"white_container_border_radius","text_color_base","padding_015","font_size_18"],["class","list_item",4,"ngFor","ngForOf"],[1,"list_item"],["size","2",1,"link",3,"click"]],template:function(o,r){1&o&&(t.TgZ(0,"ion-header",0)(1,"ion-toolbar",1)(2,"ion-buttons",2),t._UZ(3,"ion-back-button",3),t.qZA(),t.TgZ(4,"ion-title",4),t._uU(5),t.ALo(6,"translate"),t.qZA()(),t.TgZ(7,"ion-toolbar",5)(8,"ion-row",6)(9,"ion-label",7),t._uU(10),t.ALo(11,"translate"),t.qZA()()()(),t.TgZ(12,"ion-content",8),t.YNc(13,L,2,0,"section",9),t.YNc(14,b,4,2,"section",10),t.YNc(15,E,3,1,"section",11),t.qZA()),2&o&&(t.xp6(5),t.Oqu(t.lcZ(6,5,"downloads.download")),t.xp6(5),t.Oqu(t.lcZ(11,7,"ePolisy.title")),t.xp6(3),t.Q6J("ngIf",r.isShowingLoader),t.xp6(1),t.Q6J("ngIf",!(r.ePolicyList.length>0||r.isShowingLoader)),t.xp6(1),t.Q6J("ngIf",r.ePolicyList.length>0))},dependencies:[l.sg,l.O5,s.oU,s.Sm,s.W2,s.Gu,s.Q$,s.Nd,s.PQ,s.wd,s.sr,s.cs,g.X$],styles:[".link[_ngcontent-%COMP%]{color:#6095c9!important;text-decoration:underline;white-space:unset!important;font-size:1rem}.label[_ngcontent-%COMP%]{margin:0!important;padding:10px;white-space:unset!important}.list_item[_ngcontent-%COMP%]{border-bottom:1px solid #002d3d;margin-top:15px}.list_item[_ngcontent-%COMP%]:last-child{border-bottom:none!important}.sub_title[_ngcontent-%COMP%]{margin-top:3px!important}.sub-header[_ngcontent-%COMP%]{color:#fff;padding:10px 25px!important;margin:0!important;font-size:1.1rem!important;font-family:Agenda-Regular}.padding_015[_ngcontent-%COMP%]{padding:0 15px}.text_color_base[_ngcontent-%COMP%]{color:var(--ion-color-secondary)!important}.white_container_border_radius[_ngcontent-%COMP%]{background-color:rgba(255,255,255,.7)!important;border-radius:15px!important;margin:15px;padding:15px}.bold-font[_ngcontent-%COMP%]{font-family:var(--ion-font-agenda-semibold);text-align:center!important;font-size:1.3rem!important;color:#002d3d;text-overflow:unset;white-space:unset;font-weight:400!important}.subheader_bg[_ngcontent-%COMP%]{background:#002d3d;font-family:Agenda-Regular;font-size:1.2rem;color:#fff!important;height:45px!important;display:flex;align-items:center}"]}),i})()}];let A=(()=>{class i{}return i.\u0275fac=function(o){return new(o||i)},i.\u0275mod=t.oAB({type:i}),i.\u0275inj=t.cJS({imports:[h.Bz.forChild(M),h.Bz]}),i})(),v=(()=>{class i{}return i.\u0275fac=function(o){return new(o||i)},i.\u0275mod=t.oAB({type:i}),i.\u0275inj=t.cJS({imports:[l.ez,f.u5,s.Pc,A,g.aw]}),i})()}}]);