"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[3562],{83562:(O,r,t)=>{t.r(r),t.d(r,{ContactUsPageModule:()=>b});var g=t(36895),_=t(24006),e=t(48058),u=t(64228),f=t(65414),n=t(98274),l=t(54463),p=t(53025),m=t(45340),d=t(43485);const h=[{path:"",component:(()=>{class o{constructor(i,a,c,C,P,A,U){this.navCtrl=i,this.translate=a,this.utilServices=c,this.menuControl=C,this.translateConfigService=P,this.config=A,this.platfrom=U,this.openFacebook=function(){this.utilServices.launchExternalApp(this.config.contact_us.fb_ios,this.config.contact_us.fb_android,this.config.contact_us.fb_app_url,this.config.contact_us.fb_browser_url)},this.openInstagram=function(){this.utilServices.launchExternalApp(this.config.contact_us.insta_ios,this.config.contact_us.insta_android,this.config.contact_us.insta_app_url,this.config.contact_us.insta_browser_url)},this.openYoutube=function(){this.utilServices.launchExternalApp(this.config.contact_us.youtube_ios,this.config.contact_us.youtube_android,this.config.contact_us.youtube_app_url,this.config.contact_us.youtube_browser_url)},this.openMaps=function(){this.utilServices.launchExternalApp(this.config.contact_us.maps_ios,this.config.contact_us.maps_android,this.config.contact_us.maps_app_url,this.config.contact_us.maps_browser_url)},this.browser=function(){this.utilServices.launchExternalApp("","","",this.config.contact_us.sunlife_browser)},this.config.currentPage.pageName="ContactUsPage",this.selectedLanguage=this.translateConfigService.getDefaultLanguage(),this.translateConfigService.setLanguage("en")}callJoin(){this.utilServices.callJoin(this.config.contact_us.contact_no)}emailCompose(){}ionViewDidEnter(){null!=this.config.userDetails.name?(this.menuControl.enable(!0,"custom"),this.menuControl.enable(!1,"first")):(this.menuControl.enable(!0,"first"),this.menuControl.enable(!1,"custom")),this.utilServices.component.emit(f.c.CONTACT_US)}}return o.\u0275fac=function(i){return new(i||o)(n.Y36(e.SH),n.Y36(l.sK),n.Y36(p.f),n.Y36(e._q),n.Y36(m.w),n.Y36(d.i),n.Y36(e.t4))},o.\u0275cmp=n.Xpm({type:o,selectors:[["app-contact-us"]],decls:80,vars:35,consts:[["mode","ios"],["color","primary",1,"toolbar"],["slot","start","auto-hide","false","color","secondary"],[1,"bold-font"],[1,"app_bg","ion-padding","text_color_base"],[1,"white_container_border_radius","text_color_base","ion-padding"],["size","2",1,"ion-text-end"],[1,"fas","fa-comments","font_size_22"],["size","10"],[1,"heading"],[1,"font_size_14",2,"font-family","Agenda-light","display","block"],[2,"margin-top","10px",3,"click"],[1,"font_size_14","font_color","dispaly:block;"],[1,"font_size_14","font_color"],[1,"fas","fa-phone","font_size_22"],[1,"font_size_14","font_color",3,"click"],[1,"fas","fa-fax","font_size_22"],[1,"font_size_14"],[1,"fas","fa-at","font_size_22"],["href","mailto:policy.admin@sunlifemalaysia.com",1,"font_size_14","font_color"],[1,"fas","fa-clock","font_size_22"],[1,"font_size_14",2,"display","block"],[1,"bottom_row"],[1,"ion-text-center",3,"click"],[1,"fas","fa-globe","bowser"],[1,"fab","fa-facebook-square","facebook"],[1,"fab","fa-instagram","instagram"],[1,"fab","fa-youtube","youtube"]],template:function(i,a){1&i&&(n.TgZ(0,"ion-header",0)(1,"ion-toolbar",1),n._UZ(2,"ion-menu-button",2),n.TgZ(3,"ion-title",3),n._uU(4),n.ALo(5,"translate"),n.qZA()()(),n.TgZ(6,"ion-content",4)(7,"div",5)(8,"ion-row")(9,"ion-col",6),n._UZ(10,"i",7),n.qZA(),n.TgZ(11,"ion-col",8)(12,"ion-label",9),n._uU(13),n.ALo(14,"translate"),n.qZA(),n.TgZ(15,"ion-label",10),n._uU(16),n.ALo(17,"translate"),n.qZA(),n.TgZ(18,"ion-label",10),n._uU(19),n.ALo(20,"translate"),n.qZA(),n.TgZ(21,"div",11),n.NdJ("click",function(){return a.openMaps()}),n.TgZ(22,"ion-label",12)(23,"u"),n._uU(24),n.ALo(25,"translate"),n.qZA()(),n.TgZ(26,"ion-label",13)(27,"u"),n._uU(28),n.ALo(29,"translate"),n.qZA()()()()(),n.TgZ(30,"ion-row")(31,"ion-col",6),n._UZ(32,"i",14),n.qZA(),n.TgZ(33,"ion-col",8)(34,"ion-label",9),n._uU(35),n.ALo(36,"translate"),n.qZA(),n.TgZ(37,"ion-label",15),n.NdJ("click",function(){return a.callJoin()}),n.TgZ(38,"u"),n._uU(39),n.qZA()()()(),n.TgZ(40,"ion-row")(41,"ion-col",6),n._UZ(42,"i",16),n.qZA(),n.TgZ(43,"ion-col",8)(44,"ion-label",9),n._uU(45),n.ALo(46,"translate"),n.qZA(),n.TgZ(47,"ion-label",17),n._uU(48,"603-2614 3550"),n.qZA()()(),n.TgZ(49,"ion-row")(50,"ion-col",6),n._UZ(51,"i",18),n.qZA(),n.TgZ(52,"ion-col",8)(53,"ion-label",9),n._uU(54),n.ALo(55,"translate"),n.qZA(),n.TgZ(56,"a",19)(57,"u"),n._uU(58),n.qZA()()()(),n.TgZ(59,"ion-row")(60,"ion-col",6),n._UZ(61,"i",20),n.qZA(),n.TgZ(62,"ion-col",8)(63,"ion-label",9),n._uU(64),n.ALo(65,"translate"),n.qZA(),n.TgZ(66,"ion-label",21),n._uU(67),n.ALo(68,"translate"),n.qZA(),n.TgZ(69,"ion-label",21),n._uU(70,"8.30 am \u2013 5.30 pm"),n.qZA()()(),n.TgZ(71,"ion-row",22)(72,"ion-col",23),n.NdJ("click",function(){return a.browser()}),n._UZ(73,"i",24),n.qZA(),n.TgZ(74,"ion-col",23),n.NdJ("click",function(){return a.openFacebook()}),n._UZ(75,"i",25),n.qZA(),n.TgZ(76,"ion-col",23),n.NdJ("click",function(){return a.openInstagram()}),n._UZ(77,"i",26),n.qZA(),n.TgZ(78,"ion-col",23),n.NdJ("click",function(){return a.openYoutube()}),n._UZ(79,"i",27),n.qZA()()()()),2&i&&(n.xp6(4),n.hij(" ",n.lcZ(5,13,"contactus")," "),n.xp6(9),n.Oqu(n.lcZ(14,15,"customerservice")),n.xp6(3),n.Oqu(n.lcZ(17,17,"sunlifeaberhad")),n.xp6(3),n.Oqu(n.lcZ(20,19,"sunlifetberhad")),n.xp6(5),n.hij("",n.lcZ(25,21,"address1")," "),n.xp6(4),n.hij("",n.lcZ(29,23,"address2")," "),n.xp6(7),n.Oqu(n.lcZ(36,25,"customercareline")),n.xp6(4),n.Oqu(a.config.contact_us.contact_no),n.xp6(6),n.Oqu(n.lcZ(46,27,"fax")),n.xp6(9),n.Oqu(n.lcZ(55,29,"email")),n.xp6(4),n.Oqu(a.config.contact_us.emailId),n.xp6(6),n.Oqu(n.lcZ(65,31,"businesshours")),n.xp6(3),n.Oqu(n.lcZ(68,33,"mondaytofriday")))},dependencies:[e.wI,e.W2,e.Gu,e.Q$,e.fG,e.Nd,e.wd,e.sr,l.X$],styles:["ion-content[_ngcontent-%COMP%]{--background: url(/../assets/imgs/app_bg.jpg) no-repeat center center / cover}ion-content[_ngcontent-%COMP%]   ion-title[_ngcontent-%COMP%]{font-weight:700!important;color:--ion-color-secondary!important}ion-content[_ngcontent-%COMP%]   .white_container_border_radius[_ngcontent-%COMP%]{background-color:rgba(255,255,255,.7)!important;border-radius:15px!important}ion-content[_ngcontent-%COMP%]   .heading[_ngcontent-%COMP%]{font-family:var(--ion-font-agenda-semibold);font-size:1.1rem!important;line-height:16px;display:block}ion-content[_ngcontent-%COMP%]   .font_size_14[_ngcontent-%COMP%]{font-family:Agenda-light;font-size:.8rem!important}ion-content[_ngcontent-%COMP%]   .font_color[_ngcontent-%COMP%]{color:#6095c9}ion-content[_ngcontent-%COMP%]   .heading[_ngcontent-%COMP%]{font-family:var(--ion-font-agenda-semibold)}ion-content[_ngcontent-%COMP%]   ion-row[_ngcontent-%COMP%]{margin:10px!important}ion-content[_ngcontent-%COMP%]   .facebook[_ngcontent-%COMP%]{font-size:2.2rem;color:--ion-color-secondary;border-radius:0!important}ion-content[_ngcontent-%COMP%]   .instagram[_ngcontent-%COMP%]{font-size:2.2rem;color:--ion-color-secondary}ion-content[_ngcontent-%COMP%]   .youtube[_ngcontent-%COMP%]{font-size:2.2rem;color:--ion-color-secondary}ion-content[_ngcontent-%COMP%]   .bowser[_ngcontent-%COMP%]{font-size:2.2rem;color:--ion-color-secondary}ion-content[_ngcontent-%COMP%]   .font_size_22[_ngcontent-%COMP%]{font-size:1.2rem!important}ion-content[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%]{margin:0!important;display:block;font-family:Agenda-light}"]}),o})()}];let Z=(()=>{class o{}return o.\u0275fac=function(i){return new(i||o)},o.\u0275mod=n.oAB({type:o}),o.\u0275inj=n.cJS({imports:[u.Bz.forChild(h),u.Bz]}),o})(),b=(()=>{class o{}return o.\u0275fac=function(i){return new(i||o)},o.\u0275mod=n.oAB({type:o}),o.\u0275inj=n.cJS({imports:[g.ez,_.u5,e.Pc,l.aw,Z]}),o})()}}]);