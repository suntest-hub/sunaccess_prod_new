"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[3822],{13822:(M,g,a)=>{a.r(g),a.d(g,{PlanBenifitsPageModule:()=>Z});var r=a(36895),c=a(24006),o=a(48058),p=a(64228),n=a(98274),d=a(45340),l=a(54463),u=a(53025),f=a(43485);function m(t,i){if(1&t&&(n.TgZ(0,"section",11)(1,"span"),n._uU(2),n.qZA()()),2&t){const e=n.oxw();n.xp6(2),n.Oqu(e.errorMsg)}}function h(t,i){if(1&t&&(n.TgZ(0,"ion-row",14)(1,"ion-col",15)(2,"p",16),n._uU(3),n.ALo(4,"translate"),n.qZA(),n.TgZ(5,"ion-row",17)(6,"p"),n._uU(7),n.qZA()()(),n.TgZ(8,"ion-col",15)(9,"p",16),n._uU(10),n.ALo(11,"translate"),n.qZA(),n.TgZ(12,"p",18),n._uU(13),n.qZA(),n.TgZ(14,"p",16),n._uU(15),n.ALo(16,"translate"),n.qZA(),n.TgZ(17,"p",18),n._uU(18),n.qZA(),n.TgZ(19,"p",16),n._uU(20),n.ALo(21,"translate"),n.qZA(),n.TgZ(22,"p",18),n._uU(23),n.qZA(),n.TgZ(24,"p",16),n._uU(25),n.ALo(26,"translate"),n.qZA(),n.TgZ(27,"p",18),n._uU(28),n.qZA()()()),2&t){const e=i.$implicit;n.xp6(3),n.Oqu(n.lcZ(4,10,"plan_benefits.coverage")),n.xp6(4),n.Oqu(e.plan),n.xp6(3),n.Oqu(n.lcZ(11,12,"plan_benefits.lifeassured")),n.xp6(3),n.Oqu(e.lifeAssured),n.xp6(2),n.Oqu(n.lcZ(16,14,"plan_benefits.Sumassuerd")),n.xp6(3),n.Oqu(e.sumAssured),n.xp6(2),n.Oqu(n.lcZ(21,16,"plan_benefits.date")),n.xp6(3),n.Oqu(e.commencementDate),n.xp6(2),n.Oqu(n.lcZ(26,18,"plan_benefits.Status")),n.xp6(3),n.Oqu(e.status)}}function b(t,i){if(1&t&&(n.TgZ(0,"div")(1,"ion-list",12),n.YNc(2,h,29,20,"ion-row",13),n.qZA()()),2&t){const e=n.oxw();n.xp6(2),n.Q6J("ngForOf",e.benefitsData)}}const P=function(t,i){return{"bg-conventional":t,"bg-takaful":i}},x=[{path:"",component:(()=>{class t{constructor(e,s,O,y){this.translateConfigService=e,this.translate=s,this.utils=O,this.config=y,this.selectedLanguage=this.translateConfigService.getDefaultLanguage(),this.translateConfigService.setLanguage("en"),this.policyData=history.state.policyDetailsData,this.benefitsData=this.policyData.benefits,this.planType=history.state.planType,this.policyNo=history.state.policyNo,this.planName=this.policyData.planDescription.plan,this.utils.analytics("planBenifits"),this.errorMsg=this.translate.instant("generic_msgs.no_data"),this.config.currentPage.pageName="PlanBenifitsPage"}}return t.\u0275fac=function(e){return new(e||t)(n.Y36(d.w),n.Y36(l.sK),n.Y36(u.f),n.Y36(f.i))},t.\u0275cmp=n.Xpm({type:t,selectors:[["app-plan-benifits"]],decls:14,vars:10,consts:[["mode","ios"],["color","primary",2,"border-bottom","3px solid white"],["slot","start"],["text","","icon","chevron-back-outline",2,"padding-left","15px","font-size","0.7rem"],[1,"bold-font"],["color","primary",1,"tabs"],[2,"margin-bottom","5px",3,"ngClass"],[1,"sub-header"],[1,"app_bg2","ion-padding"],["class","errorMsgSection white_container_border_radius",4,"ngIf"],[4,"ngIf"],[1,"errorMsgSection","white_container_border_radius"],[1,"white_container_border_radius","text_color_base"],["class","margin_top_bottom_auto ion-padding",4,"ngFor","ngForOf"],[1,"margin_top_bottom_auto","ion-padding"],["size","6"],[1,"lbl-header"],[1,"lbl-content",2,"width","60% !important"],[1,"lbl-content"]],template:function(e,s){1&e&&(n.TgZ(0,"ion-header",0)(1,"ion-toolbar",1)(2,"ion-buttons",2),n._UZ(3,"ion-back-button",3),n.qZA(),n.TgZ(4,"ion-title",4),n._uU(5),n.qZA()(),n.TgZ(6,"ion-toolbar",5)(7,"ion-row",6)(8,"ion-label",7),n._uU(9),n.ALo(10,"translate"),n.qZA()()()(),n.TgZ(11,"ion-content",8),n.YNc(12,m,3,1,"section",9),n.YNc(13,b,3,1,"div",10),n.qZA()),2&e&&(n.xp6(5),n.Oqu(s.policyNo),n.xp6(2),n.Q6J("ngClass",n.WLB(7,P,"Conventional"===s.planType,"Conventional"!==s.planType)),n.xp6(2),n.Oqu(n.lcZ(10,5,"plan_benefits.title")),n.xp6(3),n.Q6J("ngIf",!(s.benefitsData.length>0)),n.xp6(1),n.Q6J("ngIf",s.benefitsData.length>0))},dependencies:[r.mk,r.sg,r.O5,o.oU,o.Sm,o.wI,o.W2,o.Gu,o.Q$,o.q_,o.Nd,o.wd,o.sr,o.cs,l.X$],styles:[".app_bg2[_ngcontent-%COMP%]{--background: url(app_bg_2.54dc544248702eeb.jpg) no-repeat center center / cover;background-size:cover;background-repeat:no-repeat;height:100%;background-position:bottom}.sub-header[_ngcontent-%COMP%]{color:#fff;padding:10px 25px!important;margin:0!important;font-size:1.1rem!important;font-family:Agenda-Regular}.tabs[_ngcontent-%COMP%]{border-top:3px solid color white;--padding-top: -4px;--padding-start: -4px;--padding-end: -4px;--min-height: 44px}.white_container_border_radius[_ngcontent-%COMP%]{border-radius:15px!important;padding:15px}ion-row[_ngcontent-%COMP%]{padding:0;border-bottom:1px solid #002d3d}ion-list[_ngcontent-%COMP%]   ion-row[_ngcontent-%COMP%]:last-child{border-bottom:none}p[_ngcontent-%COMP%]{margin-top:5px;margin-bottom:2px}.div-padding[_ngcontent-%COMP%]{padding:15px 0}.lbl-header[_ngcontent-%COMP%]{padding:0;font-family:var(--ion-font-agenda-semibold);color:--ion-color-secondary;font-size:.9rem;line-height:24px;margin:0;font-weight:400}.lbl-content[_ngcontent-%COMP%]{padding:0;font-family:Agenda-Regular;color:--ion-color-secondary;font-size:.9rem;line-height:24px;margin:0;font-weight:400}@media only screen and (max-width: 374px){.lbl-header[_ngcontent-%COMP%], .lbl-content[_ngcontent-%COMP%]{font-size:.9rem!important}}.col[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{width:60%!important}.col[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]{border-bottom:none!important}"]}),t})()}];let _=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=n.oAB({type:t}),t.\u0275inj=n.cJS({imports:[p.Bz.forChild(x),p.Bz]}),t})(),Z=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=n.oAB({type:t}),t.\u0275inj=n.cJS({imports:[r.ez,c.u5,o.Pc,l.aw,_]}),t})()}}]);