"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[2462],{52462:(M,p,o)=>{o.r(p),o.d(p,{ClaimStatusDetailsPageModule:()=>w});var r=o(36895),m=o(24006),s=o(48058),u=o(64228),d=o(15861),f=o(97716),t=o(98274),h=o(45324),x=o(53025),C=o(9999),g=o(54463);function D(i,n){1&i&&(t.TgZ(0,"section",10),t._UZ(1,"ion-spinner",11),t.qZA())}function Z(i,n){if(1&i&&(t.TgZ(0,"ion-row",12)(1,"ion-col",13)(2,"ion-label",14),t._uU(3,"Policy No"),t.qZA()(),t.TgZ(4,"ion-col",15)(5,"ion-label",14),t._uU(6,":"),t.qZA()(),t.TgZ(7,"ion-col",16)(8,"ion-label",14),t._uU(9),t.qZA()()()),2&i){const a=t.oxw();t.xp6(9),t.Oqu(a.policyNumber)}}function P(i,n){if(1&i&&(t.TgZ(0,"ion-row",12)(1,"ion-col",13)(2,"ion-label",14),t._uU(3,"Life Assured"),t.qZA()(),t.TgZ(4,"ion-col",15)(5,"ion-label",14),t._uU(6,":"),t.qZA()(),t.TgZ(7,"ion-col",16)(8,"ion-label",17),t._uU(9),t.qZA()()()),2&i){const a=t.oxw();t.xp6(9),t.Oqu(a.lifeAssured)}}function _(i,n){if(1&i){const a=t.EpF();t.TgZ(0,"ion-row",12)(1,"ion-col",18)(2,"ion-label",14),t._uU(3,"Event Date"),t.qZA(),t.TgZ(4,"img",19),t.NdJ("click",function(l){t.CHM(a);const c=t.oxw();return t.KtG(c.openPopup(l,"nine"))}),t.qZA()(),t.TgZ(5,"ion-col",15)(6,"ion-label",14),t._uU(7,":"),t.qZA()(),t.TgZ(8,"ion-col",16)(9,"ion-label",14),t._uU(10),t.qZA()()()}if(2&i){const a=t.oxw();t.xp6(10),t.Oqu(a.eventDate)}}function v(i,n){if(1&i&&(t.TgZ(0,"ion-row",20)(1,"ion-col",13)(2,"ion-label",14),t._uU(3,"Claim Type"),t.qZA()(),t.TgZ(4,"ion-col",15)(5,"ion-label",14),t._uU(6,":"),t.qZA()(),t.TgZ(7,"ion-col",16)(8,"ion-label",14),t._uU(9),t.qZA()()()),2&i){const a=t.oxw();t.xp6(9),t.Oqu(a.claimType)}}function y(i,n){if(1&i&&(t.TgZ(0,"div",24),t._UZ(1,"div",25),t.TgZ(2,"div",26)(3,"div")(4,"h3"),t._uU(5),t.qZA()(),t.TgZ(6,"div",27),t._uU(7),t.qZA(),t.TgZ(8,"div"),t._uU(9),t.qZA()()()),2&i){const a=n.$implicit;t.xp6(5),t.Oqu(a.claimStatus),t.xp6(2),t.Oqu(a.statusDate),t.xp6(2),t.hij("",a.remarks," ")}}function O(i,n){if(1&i&&(t.TgZ(0,"div",21)(1,"div",22),t.YNc(2,y,10,3,"div",23),t.qZA()()),2&i){const a=t.oxw();t.xp6(2),t.Q6J("ngForOf",a.claimDetailData)}}function T(i,n){1&i&&(t.TgZ(0,"div",12)(1,"p"),t._uU(2,"* Please contact us at "),t.TgZ(3,"u",28)(4,"a",29),t._uU(5,"1300-88-5055"),t.qZA()(),t._uU(6," or email "),t.TgZ(7,"u",28)(8,"a",30),t._uU(9,"wecare@sunlifemalaysia.com"),t.qZA()(),t._uU(10," for further enquiries."),t.qZA()())}const S=[{path:"",component:(()=>{class i{constructor(a,e,l,c,A){this.claimStatusService=a,this.utils=e,this.logger=l,this.translate=c,this.popOverCtrl=A,this.isDataLoading=!0,this.encryptedPolicyNo=history.state.encryptedPolicyNumber,this.claimType=history.state.claimType,this.noOfClaim=history.state.noOfClaim}ngOnInit(){console.log("ionViewDidLoad ClaimStatusDetailPage"),this.getClaimsDetailData()}getClaimsDetailData(){this.getClaimsDetail("")}getClaimsDetail(a){this.utils.isDeviceOnLine()?this.claimStatusService.getClaimsDetail(this.encryptedPolicyNo,this.claimType,this.noOfClaim).then(e=>{this.isDataLoading=!1,this.claimDetailData=e.responseJSON.claimStatusDetails,this.policyNumber=e.responseJSON.policyNumber,this.lifeAssured=e.responseJSON.lifeAssured,this.eventDate=e.responseJSON.eventDate,""!=a&&a.complete()},e=>{""!=a&&a.complete(),this.isDataLoading=!1,this.canTryAgain=!0,this.logger.error("Claim status Details --search policy by policynumber servcie catch eror : "+JSON.stringify(e)),this.errorMsg=this.utils.handleServiceException(e)}):(""!=a&&a.complete(),this.claimDetailData=[],this.isDataLoading=!1,this.canTryAgain=!0,this.errorMsg=this.translate.instant("generic_msgs.network_err"))}openPopup(a,e){var l=this;return(0,d.Z)(function*(){yield(yield l.popOverCtrl.create({component:f.j,componentProps:{msg:e},cssClass:"custom-popover"})).present(a)})()}}return i.\u0275fac=function(a){return new(a||i)(t.Y36(h.u),t.Y36(x.f),t.Y36(C.U),t.Y36(g.sK),t.Y36(s.Dh))},i.\u0275cmp=t.Xpm({type:i,selectors:[["app-claim-status-details"]],decls:15,vars:10,consts:[["mode","ios"],["color","primary"],["slot","start"],["text","","icon","chevron-back-outline",2,"padding-left","15px","font-size","0.7rem"],[1,"bold-font"],["no-bounce","",1,"app_bg2_white","text_color_base","ion-padding"],["class","spinnersection",4,"ngIf"],["class","row",4,"ngIf"],["class","row margin-bottom",4,"ngIf"],["class","margin-top",4,"ngIf"],[1,"spinnersection"],["name","ios-small"],[1,"row"],["size","5"],[1,"margin-none"],["size","1"],["size","6"],[1,"margin-none","ion-data-content"],["size","5",1,"display-flex"],["src","assets/imgs/information-circle.svg","alt","information-circle",2,"margin-left","25px",3,"click"],[1,"row","margin-bottom"],[1,"margin-top"],[1,"progress-bar"],["class","flex",4,"ngFor","ngForOf"],[1,"flex"],["id","circle"],[1,"padding"],[1,"statusDate"],[2,"color","#337ab7"],["href","tel:1300-88-5055"],["href","mailto:wecare@sunlifemalaysia.com"]],template:function(a,e){1&a&&(t.TgZ(0,"ion-header",0)(1,"ion-toolbar",1)(2,"ion-buttons",2),t._UZ(3,"ion-back-button",3),t.qZA(),t.TgZ(4,"ion-title",4),t._uU(5),t.ALo(6,"translate"),t.qZA()()(),t.TgZ(7,"ion-content",5),t.YNc(8,D,2,0,"section",6),t.YNc(9,Z,10,1,"ion-row",7),t.YNc(10,P,10,1,"ion-row",7),t.YNc(11,_,11,1,"ion-row",7),t.YNc(12,v,10,1,"ion-row",8),t.YNc(13,O,3,1,"div",9),t.YNc(14,T,11,0,"div",7),t.qZA()),2&a&&(t.xp6(5),t.Oqu(t.lcZ(6,8,"claim_status.title")),t.xp6(3),t.Q6J("ngIf",e.isDataLoading),t.xp6(1),t.Q6J("ngIf",!e.isDataLoading),t.xp6(1),t.Q6J("ngIf",!e.isDataLoading),t.xp6(1),t.Q6J("ngIf",!e.isDataLoading),t.xp6(1),t.Q6J("ngIf",!e.isDataLoading),t.xp6(1),t.Q6J("ngIf",!e.isDataLoading),t.xp6(1),t.Q6J("ngIf",!e.isDataLoading))},dependencies:[r.sg,r.O5,s.oU,s.Sm,s.wI,s.W2,s.Gu,s.Q$,s.Nd,s.PQ,s.wd,s.sr,s.cs,g.X$],styles:['.flex[_ngcontent-%COMP%]{position:relative}.flex[_ngcontent-%COMP%]:before{position:absolute;background:#999;width:1px;height:100%;display:block;content:"";left:7px;z-index:1;top:0}.flex[_ngcontent-%COMP%]:last-child:before{height:0}div.progress-bar[_ngcontent-%COMP%]{list-style:none;margin:0;padding:0;position:relative;display:flex;flex-direction:column;justify-content:space-between;overflow:hidden}div.progress-bar[_ngcontent-%COMP%]   #circle[_ngcontent-%COMP%]{background:rgb(100,177,69);border-radius:100px;width:15px;height:15px;z-index:1;position:absolute}.flex[_ngcontent-%COMP%]{display:flex}.padding[_ngcontent-%COMP%]{margin-bottom:24px;padding-left:40px}.padding[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{font-size:18px;line-height:1;margin:0!important;font-weight:700;color:#000}.statusDate[_ngcontent-%COMP%]{font-size:16px;margin:2px 0}.app_bg2_white[_ngcontent-%COMP%]{background-color:#fff}.row[_ngcontent-%COMP%]{font-size:18px}.row[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:20px}.row[_ngcontent-%COMP%]   .display-flex[_ngcontent-%COMP%]{display:flex}.margin-none[_ngcontent-%COMP%]{margin:0}.margin-top[_ngcontent-%COMP%]{margin-top:40px}.margin-bottom[_ngcontent-%COMP%]{margin-bottom:10px}.ion-data-content[_ngcontent-%COMP%]{white-space:pre-wrap!important}']}),i})()}];let b=(()=>{class i{}return i.\u0275fac=function(a){return new(a||i)},i.\u0275mod=t.oAB({type:i}),i.\u0275inj=t.cJS({imports:[u.Bz.forChild(S),u.Bz]}),i})(),w=(()=>{class i{}return i.\u0275fac=function(a){return new(a||i)},i.\u0275mod=t.oAB({type:i}),i.\u0275inj=t.cJS({imports:[r.ez,m.u5,s.Pc,b,g.aw]}),i})()}}]);