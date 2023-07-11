"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[6333],{36333:(I,u,s)=>{s.r(u),s.d(u,{UnitPricePageModule:()=>w});var c=s(36895),h=s(24006),a=s(48058),d=s(64228),p=s(65414),n=s(98274),l=s(54463),m=s(45340),P=s(53025),_=s(9999),C=s(86916),A=s(43485);function M(t,i){1&t&&(n.TgZ(0,"section",12),n._UZ(1,"ion-spinner",13),n.qZA())}function x(t,i){if(1&t){const e=n.EpF();n.TgZ(0,"ion-button",16),n.NdJ("click",function(){n.CHM(e);const r=n.oxw(2);return n.KtG(r.unitPrice())}),n._uU(1),n.ALo(2,"translate"),n.qZA()}2&t&&(n.xp6(1),n.Oqu(n.lcZ(2,1,"generic_msgs.try_again")))}function b(t,i){if(1&t&&(n.TgZ(0,"section",14)(1,"span"),n._uU(2),n.qZA(),n.YNc(3,x,3,3,"ion-button",15),n.qZA()),2&t){const e=n.oxw();n.xp6(2),n.Oqu(e.errorMsg),n.xp6(1),n.Q6J("ngIf",e.canTryAgain)}}const v=function(t,i){return{odd:t,even:i}};function O(t,i){if(1&t&&(n.TgZ(0,"ion-row",26)(1,"ion-col",22)(2,"div",27),n._uU(3),n.qZA()(),n.TgZ(4,"ion-col",23)(5,"div",28),n._uU(6),n.qZA()()()),2&t){const e=i.$implicit;n.Q6J("ngClass",n.WLB(3,v,i.odd,i.even)),n.xp6(3),n.Oqu(e.fundName),n.xp6(3),n.Oqu(e.nav)}}function y(t,i){if(1&t&&(n.TgZ(0,"ion-list",20)(1,"ion-row",21)(2,"ion-col",22)(3,"div",7),n._uU(4),n.ALo(5,"translate"),n.qZA()(),n.TgZ(6,"ion-col",23)(7,"div",24),n._uU(8),n.ALo(9,"translate"),n.qZA(),n.TgZ(10,"div",24),n._uU(11),n.ALo(12,"translate"),n.qZA()()(),n.YNc(13,O,7,6,"ion-row",25),n.qZA()),2&t){const e=n.oxw(2);n.xp6(4),n.Oqu(n.lcZ(5,4,"fund")),n.xp6(4),n.Oqu(n.lcZ(9,6,"unitprice")),n.xp6(3),n.hij("(",n.lcZ(12,8,"rm"),")"),n.xp6(2),n.Q6J("ngForOf",e.fundsData)}}const U=function(t,i){return{date_tile_assurance:t,date_tile_takaful:i}};function T(t,i){if(1&t&&(n.TgZ(0,"div")(1,"ion-item",17)(2,"ion-label",18),n._uU(3),n.ALo(4,"translate"),n.ALo(5,"date"),n.qZA()(),n.YNc(6,y,14,10,"ion-list",19),n.qZA()),2&t){const e=n.oxw();n.xp6(1),n.Q6J("ngClass",n.WLB(9,U,e.isAssurance,!e.isAssurance)),n.xp6(2),n.AsE("",n.lcZ(4,4,"dailyunitprice")," (as of ",n.xi3(5,6,e.displayDate,"d MMMM y"),")"),n.xp6(3),n.Q6J("ngIf",e.fundsData.length>0)}}const f=function(t,i){return{"tab-selected":t,tab:i}},Z=[{path:"",component:(()=>{class t{constructor(e,o,r,S,k,D,z){this.translate=e,this.translateConfigService=o,this.utils=r,this.logger=S,this.unitPriceList=k,this.menuControl=D,this.config=z,this.assuarnceFunds=[],this.takafulfunds=[],this.fundsData=[],this.isShowingLoader=!0,this.canTryAgain=!1,this.isAssurance=!0,this.isTakaful=!1,this.tabSelected="isAssurance",this.today=Date.now(),this.unitPrice=function(){this.utils.isDeviceOnLine()?(this.canTryAgain=!1,this.isShowingLoader=!0,this.errorMsg="",this.unitPriceList.getUnitPriceList().then(g=>{try{this.isShowingLoader=!1,this._separateByPlanType(g.responseJSON.array),this.utils.dissmisProgressLoader()}catch(N){this.isShowingLoader=!1,this.canTryAgain=!0,this.errorMsg=this.translate.instant("generic_msgs.server_err"),this.utils.dissmisProgressLoader()}},g=>{this.isShowingLoader=!1,this.canTryAgain=!0,this.errorMsg=this.utils.handleServiceException(g),this.utils.dissmisProgressLoader()})):(this.isShowingLoader=!1,this.canTryAgain=!0,this.errorMsg=this.translate.instant("generic_msgs.network_err"),this.utils.dissmisProgressLoader())},this.selectedLanguage=this.translateConfigService.getDefaultLanguage(),this.translateConfigService.setLanguage("en")}ngOnInit(){this.unitPrice()}ionViewDidEnter(){null!=this.config.userDetails.name?(this.menuControl.enable(!0,"custom"),this.menuControl.enable(!1,"first")):(this.menuControl.enable(!0,"first"),this.menuControl.enable(!1,"custom")),this.utils.component.emit(p.c.UNIT_PRICE)}ionViewDidLoad(){}_separateByPlanType(e){for(var o=0;o<e.length;++o){var r=e[o];"INSURANCE"==r.fundType.toUpperCase()?this.assuarnceFunds.push(r):"TAKAFUL"==r.fundType.toUpperCase()&&this.takafulfunds.push(r),this.fundsData=this.assuarnceFunds,this.errorMsg=this.translate.instant("generic_msgs.no_data"),this.fundsData.length>0&&(this.displayDate=this.fundsData[this.fundsData.length-1].fundDate)}}toggletab(e){this.tabSelected=e,"ASSURANCE"==e.toUpperCase()?(this.isAssurance=!0,this.isTakaful=!1,this.fundsData=this.assuarnceFunds):"TAKAFUL"==e.toUpperCase()&&(this.isAssurance=!1,this.isTakaful=!0,this.fundsData=this.takafulfunds),this.fundsData.length>0&&(this.displayDate=this.fundsData[this.fundsData.length-1].fundDate)}}return t.\u0275fac=function(e){return new(e||t)(n.Y36(l.sK),n.Y36(m.w),n.Y36(P.f),n.Y36(_.U),n.Y36(C.C),n.Y36(a._q),n.Y36(A.i))},t.\u0275cmp=n.Xpm({type:t,selectors:[["app-unit-price"]],decls:20,vars:20,consts:[["mode","ios"],["color","primary",1,"toolbar"],["slot","start","auto-hide","false","color","secondary"],[1,"bold-font"],["color","primary",1,"tabs"],[1,"tabsRow"],["size","6",1,"ion-text-center",3,"ngClass","click"],[1,"font_2"],["no-bounce","","forceOverscroll","false"],["class","spinnersection ion-text-center",4,"ngIf"],["class","errorMsgSection",4,"ngIf"],[4,"ngIf"],[1,"spinnersection","ion-text-center"],["name","lines-sharp-small",2,"height","98%"],[1,"errorMsgSection"],["style","--background:var(--ion-color-white);",3,"click",4,"ngIf"],[2,"--background","var(--ion-color-white)",3,"click"],["lines","none",1,"date_tile",3,"ngClass"],[1,"font_2","lab"],["class","list",4,"ngIf"],[1,"list"],[1,"header"],["size","9"],["size","3"],[1,"ion-text-center","font_2"],[3,"ngClass",4,"ngFor","ngForOf"],[3,"ngClass"],[1,"font_1"],[1,"ion-text-center","font_1"]],template:function(e,o){1&e&&(n.TgZ(0,"ion-header",0)(1,"ion-toolbar",1),n._UZ(2,"ion-menu-button",2),n.TgZ(3,"ion-title",3),n._uU(4),n.ALo(5,"translate"),n.qZA()(),n.TgZ(6,"ion-toolbar",4)(7,"ion-row",5)(8,"ion-col",6),n.NdJ("click",function(){return o.toggletab("Assurance")}),n.TgZ(9,"ion-label",7),n._uU(10),n.ALo(11,"translate"),n.qZA()(),n.TgZ(12,"ion-col",6),n.NdJ("click",function(){return o.toggletab("Takaful")}),n.TgZ(13,"ion-label",7),n._uU(14),n.ALo(15,"translate"),n.qZA()()()()(),n.TgZ(16,"ion-content",8),n.YNc(17,M,2,0,"section",9),n.YNc(18,b,4,2,"section",10),n.YNc(19,T,7,12,"div",11),n.qZA()),2&e&&(n.xp6(4),n.hij(" ",n.lcZ(5,8,"unitprice")," "),n.xp6(4),n.Q6J("ngClass",n.WLB(14,f,o.isAssurance,!o.isAssurance)),n.xp6(2),n.Oqu(n.lcZ(11,10,"unit_price.tab_assurance")),n.xp6(2),n.Q6J("ngClass",n.WLB(17,f,o.isTakaful,!o.isTakaful)),n.xp6(2),n.Oqu(n.lcZ(15,12,"unit_price.tab_takaful")),n.xp6(3),n.Q6J("ngIf",o.isShowingLoader),n.xp6(1),n.Q6J("ngIf",!(o.fundsData.length>0||o.isShowingLoader)),n.xp6(1),n.Q6J("ngIf",o.fundsData.length>0))},dependencies:[c.mk,c.sg,c.O5,a.YG,a.wI,a.W2,a.Gu,a.Ie,a.Q$,a.q_,a.fG,a.Nd,a.PQ,a.wd,a.sr,c.uU,l.X$],styles:[".cardheader[_ngcontent-%COMP%]{padding:5px 15px}.cardheader[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:1.4rem;margin:0;width:100%;font-family:Agenda-Regular;line-height:20px}.label[_ngcontent-%COMP%]{margin:1px 1px 1px 0}.col[_ngcontent-%COMP%]{width:60%;text-align:center}.tabsRow[_ngcontent-%COMP%]   .col[_ngcontent-%COMP%]{padding:9px!important;font-size:.9 rem!important;font-family:var(--ion-font-Agenda-Semibold)}.tab[_ngcontent-%COMP%]{background-color:var(--ion-color-secondary);font-family:var(--ion-font-Agenda-Semibold);font-size:.9rem;color:#fff}.tab-selected[_ngcontent-%COMP%]{--background: #febe10;font-family:var(--ion-font-Agenda-Semibold);font-size:1rem;color:--ion-color-secondary}.header-assurance[_ngcontent-%COMP%]{background-color:var(--ion-color-success);color:#fff!important}.header-takaful[_ngcontent-%COMP%]{--background:#539542;color:#fff!important}.scroll-content[_ngcontent-%COMP%]{padding:0!important}.col-2[_ngcontent-%COMP%]{padding:0}ion-col[_ngcontent-%COMP%]{margin:auto 0}.col-6[_ngcontent-%COMP%]{padding:0}.odd[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%], .even[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%]{white-space:unset;font-size:1rem;line-height:1.42857143}.even[_ngcontent-%COMP%]{background-color:--ion-color-white}.odd[_ngcontent-%COMP%]{background:#e5eaeb}.font_2[_ngcontent-%COMP%]{font-size:.9rem;font-family:var(--ion-font-Agenda-Semibold);font-weight:500;margin:0;line-height:20px}.font_1[_ngcontent-%COMP%]{font-size:.9rem;font-family:Agenda-Light}.header[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%]{font-family:var(--ion-font-Agenda-Semibold);margin-top:5px}.date_tile[_ngcontent-%COMP%]{color:#fff;border-top:3px solid white!important;font-size:.8rem!important;padding-top:0!important;max-height:35px!important;--ion-item-background: #002d3d}.lab[_ngcontent-%COMP%]{padding-bottom:10px!important;font-size:.7rem}.date_tile_assurance[_ngcontent-%COMP%]{background-color:--ion-color-secondary}.date_tile_takaful[_ngcontent-%COMP%]{--background: #539542}.item-inner[_ngcontent-%COMP%]{border-bottom:none!important}.list[_ngcontent-%COMP%]{padding:0 10px}in-row[_ngcontent-%COMP%]{padding:0 20px;text-align:left}.list[_ngcontent-%COMP%]{text-align:left}.spinnersection[_ngcontent-%COMP%]{display:block;flex-direction:column;justify-content:center;align-items:center;font-size:1.3rem;height:98%}.errorMsgSection[_ngcontent-%COMP%]{display:flex;flex-direction:column;justify-content:center;align-items:center;height:98%;font-size:.8rem;color:#494747!important;padding:0 15px}.tabs[_ngcontent-%COMP%]{border-top:3px solid white!important;--padding-top: -3px;--padding-bottom: 4px;--padding-start: -4px;--padding-end: -4px;--min-height: 35px}"]}),t})()}];let L=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=n.oAB({type:t}),t.\u0275inj=n.cJS({imports:[d.Bz.forChild(Z),d.Bz]}),t})(),w=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=n.oAB({type:t}),t.\u0275inj=n.cJS({imports:[c.ez,h.u5,a.Pc,l.aw,L]}),t})()}}]);