"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[3531],{13531:(M,c,a)=>{a.r(c),a.d(c,{PlanTrusteesPageModule:()=>y});var l=a(54463),r=a(36895),u=a(24006),i=a(48058),g=a(64228),t=a(98274),d=a(45340),f=a(53025),m=a(43485);function h(e,o){if(1&e&&(t.TgZ(0,"section",11)(1,"span"),t._uU(2),t.qZA()()),2&e){const n=t.oxw();t.xp6(2),t.Oqu(n.errorMsg)}}function x(e,o){if(1&e&&(t.TgZ(0,"ion-label",19),t._uU(1),t.qZA()),2&e){const n=t.oxw().$implicit;t.xp6(1),t.Oqu(n.name)}}function P(e,o){1&e&&t._UZ(0,"ion-label")}const p=function(e,o){return{"bg-conventional":e,"bg-takaful":o}};function b(e,o){if(1&e&&(t.TgZ(0,"section",14)(1,"ion-row")(2,"div",15)(3,"ion-label",16),t._uU(4),t.ALo(5,"translate"),t.qZA()(),t.TgZ(6,"div",17),t.YNc(7,x,2,1,"ion-label",18),t.YNc(8,P,1,0,"ion-label",10),t.qZA()()()),2&e){const n=o.$implicit,s=t.oxw(2);t.xp6(2),t.Q6J("ngClass",t.WLB(6,p,"Conventional"===s.planType,"Conventional"!==s.planType)),t.xp6(2),t.Oqu(t.lcZ(5,4,"trustees.name")),t.xp6(3),t.Q6J("ngIf",n.name),t.xp6(1),t.Q6J("ngIf",!n.name)}}function _(e,o){if(1&e&&(t.TgZ(0,"div")(1,"ion-list",12),t.YNc(2,b,9,9,"section",13),t.qZA()()),2&e){const n=t.oxw();t.xp6(2),t.Q6J("ngForOf",n.trusteesData)}}const T=[{path:"",component:(()=>{class e{constructor(n,s,C,Z){this.translateConfigService=n,this.translate=s,this.utils=C,this.config=Z,this.policyData=[],this.trusteesData=[],this.selectedLanguage=this.translateConfigService.getDefaultLanguage(),this.translateConfigService.setLanguage("en"),this.policyData=history.state.policyDetailsData,this.trusteesData=this.policyData.trustees,this.planType=history.state.planType,this.policyNo=history.state.policyNo,this.planName=this.policyData.planDescription.plan,this.errorMsg=this.translate.instant("generic_msgs.no_data")}}return e.\u0275fac=function(n){return new(n||e)(t.Y36(d.w),t.Y36(l.sK),t.Y36(f.f),t.Y36(m.i))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-plan-trustees"]],decls:14,vars:10,consts:[["mode","ios"],["color","primary",2,"border-bottom","3px solid white"],["slot","start"],["text","","icon","chevron-back-outline",2,"padding-left","15px","font-size","0.7rem"],[1,"bold-font"],["color","primary",1,"tabs"],[2,"margin-bottom","5px",3,"ngClass"],[1,"sub-header"],[1,"app_bg2"],["class","errorMsgSection white_container_border_radius",4,"ngIf"],[4,"ngIf"],[1,"errorMsgSection","white_container_border_radius"],[1,"white_container_border_radius","ion-padding"],["class","margin_top_bottom_auto",4,"ngFor","ngForOf"],[1,"margin_top_bottom_auto"],[1,"header_txt",3,"ngClass"],[1,"label"],[1,"text_color_base"],["style","padding-left:15px;",4,"ngIf"],[2,"padding-left","15px"]],template:function(n,s){1&n&&(t.TgZ(0,"ion-header",0)(1,"ion-toolbar",1)(2,"ion-buttons",2),t._UZ(3,"ion-back-button",3),t.qZA(),t.TgZ(4,"ion-title",4),t._uU(5),t.qZA()(),t.TgZ(6,"ion-toolbar",5)(7,"ion-row",6)(8,"ion-label",7),t._uU(9),t.ALo(10,"translate"),t.qZA()()()(),t.TgZ(11,"ion-content",8),t.YNc(12,h,3,1,"section",9),t.YNc(13,_,3,1,"div",10),t.qZA()),2&n&&(t.xp6(5),t.hij(" ",s.policyNo,""),t.xp6(2),t.Q6J("ngClass",t.WLB(7,p,"Conventional"===s.planType,"Conventional"!==s.planType)),t.xp6(2),t.Oqu(t.lcZ(10,5,"trustees.title")),t.xp6(3),t.Q6J("ngIf",!(s.trusteesData.length>0)),t.xp6(1),t.Q6J("ngIf",s.trusteesData.length>0))},dependencies:[r.mk,r.sg,r.O5,i.oU,i.Sm,i.W2,i.Gu,i.Q$,i.q_,i.Nd,i.wd,i.sr,i.cs,l.X$],styles:[".app_bg2[_ngcontent-%COMP%]{--background: url(app_bg_2.54dc544248702eeb.jpg) no-repeat center center / cover;background-size:cover;background-repeat:no-repeat;height:100%;background-position:bottom}.sub-header[_ngcontent-%COMP%]{color:#fff;padding:10px 25px!important;margin:0!important;font-size:1.1rem!important;font-family:Agenda-Regular}.tabs[_ngcontent-%COMP%]{border-top:3px solid color white;--padding-top: -4px;--padding-start: -4px;--padding-end: -4px;--min-height: 44px}.white_container_border_radius[_ngcontent-%COMP%]{background-color:rgba(255,255,255,.7)!important;border-radius:15px!important;margin:15px;padding:15px}.header_txt[_ngcontent-%COMP%]{color:#fff!important;font-family:var(--ion-font-Agenda-Semibold);width:100%}.label[_ngcontent-%COMP%]{margin:0;font-size:1rem;line-height:40px;font-weight:400;padding:10px 0 10px 15px;width:100%;font-family:Agenda-Regular}.errorMsgSection[_ngcontent-%COMP%]{display:flex;flex-direction:column;justify-content:center;align-items:center;height:98%;font-size:.8rem;color:#494747!important;padding:0 15px}.text_color_base[_ngcontent-%COMP%]{margin-top:5px}"]}),e})()}];let v=(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[g.Bz.forChild(T),g.Bz]}),e})(),y=(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[r.ez,u.u5,i.Pc,l.aw,v]}),e})()}}]);