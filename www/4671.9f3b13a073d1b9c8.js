"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[4671],{64671:(ee,u,n)=>{n.r(u),n.d(u,{ProfilePageModule:()=>X});var g=n(36895),_=n(24006),r=n(48058),f=n(64228),m=n(15861),d=n(65414),p=n(22727),P=n(74995),e=n(98274),h=n(43485),Z=n(11481),b=n(53025),c=n(54463),T=n(85059),x=n(30070);function A(i,l){if(1&i&&(e.TgZ(0,"ion-label",14),e._uU(1),e.qZA()),2&i){const o=e.oxw();e.xp6(1),e.hij("",o.userDetails.name," ")}}function D(i,l){1&i&&(e.TgZ(0,"ion-label",15),e._uU(1,"- "),e.qZA())}function q(i,l){if(1&i&&(e.TgZ(0,"ion-label",14),e._uU(1),e.qZA()),2&i){const o=e.oxw();e.xp6(1),e.Oqu(o.userDetails.email)}}function w(i,l){1&i&&(e.TgZ(0,"ion-label",15),e._uU(1,"- "),e.qZA())}function y(i,l){if(1&i&&(e.TgZ(0,"ion-label",15),e._uU(1),e.qZA()),2&i){const o=e.oxw();e.xp6(1),e.Oqu(o.userDetails.birthDate)}}function U(i,l){1&i&&(e.TgZ(0,"ion-label",15),e._uU(1,"- "),e.qZA())}function v(i,l){if(1&i&&(e.TgZ(0,"ion-label",14),e._uU(1),e.qZA()),2&i){const o=e.oxw();e.xp6(1),e.hij("",o.userDetails.identityNumber," ")}}function N(i,l){1&i&&(e.TgZ(0,"ion-label",15),e._uU(1,"- "),e.qZA())}function I(i,l){if(1&i&&(e.TgZ(0,"ion-label",14),e._uU(1),e.qZA()),2&i){const o=e.oxw();e.xp6(1),e.hij("",o.userDetails.nationality," ")}}function J(i,l){1&i&&(e.TgZ(0,"ion-label",15),e._uU(1,"- "),e.qZA())}function O(i,l){if(1&i&&(e.TgZ(0,"ion-label",15),e._uU(1),e.qZA()),2&i){const o=e.oxw();e.xp6(1),e.hij("",o.userDetails.race," ")}}function Y(i,l){1&i&&(e.TgZ(0,"ion-label",15),e._uU(1,"- "),e.qZA())}function j(i,l){if(1&i&&(e.TgZ(0,"ion-label",15),e._uU(1),e.qZA()),2&i){const o=e.oxw();e.xp6(1),e.hij("",o.userDetails.maritalStatus," ")}}function S(i,l){1&i&&(e.TgZ(0,"ion-label",15),e._uU(1,"- "),e.qZA())}function M(i,l){if(1&i&&(e.TgZ(0,"ion-label",15),e._uU(1),e.qZA()),2&i){const o=e.oxw();e.xp6(1),e.hij("",o.userDetails.addressField1," ")}}function C(i,l){if(1&i&&(e.TgZ(0,"ion-label",15),e._uU(1),e.qZA()),2&i){const o=e.oxw();e.xp6(1),e.hij("",o.userDetails.addressField2," ")}}function Q(i,l){if(1&i&&(e.TgZ(0,"ion-label",15),e._uU(1),e.qZA()),2&i){const o=e.oxw();e.xp6(1),e.hij("",o.userDetails.addressField3," ")}}function L(i,l){if(1&i&&(e.TgZ(0,"ion-label",15),e._uU(1),e.qZA()),2&i){const o=e.oxw();e.xp6(1),e.hij("",o.userDetails.addressField4," ")}}function z(i,l){if(1&i&&(e.TgZ(0,"ion-label",15),e._uU(1),e.qZA()),2&i){const o=e.oxw();e.xp6(1),e.Oqu(o.userDetails.homePhone)}}function F(i,l){1&i&&(e.TgZ(0,"ion-label",15),e._uU(1,"- "),e.qZA())}function R(i,l){if(1&i&&(e.TgZ(0,"ion-label",15),e._uU(1),e.qZA()),2&i){const o=e.oxw();e.xp6(1),e.hij("",o.userDetails.mobilePhone," ")}}function E(i,l){1&i&&(e.TgZ(0,"ion-label",15),e._uU(1,"- "),e.qZA())}function k(i,l){if(1&i&&(e.TgZ(0,"ion-label",16),e._uU(1),e.qZA()),2&i){const o=e.oxw();e.xp6(1),e.hij("",o.userDetails.officePhone," ")}}function B(i,l){1&i&&(e.TgZ(0,"ion-label",16),e._uU(1,"- "),e.qZA())}const G=[{path:"",component:(()=>{class i{constructor(o,t,a,s,K,V,W,$){this.config=o,this._DomSanitizer=t,this.menuControl=a,this.utils=s,this.translate=K,this.modalCtrl=V,this.profileService=W,this.camera=$,this.config.currentPage.pageName="ProfilePage",this.userDetails=this.config.userDetails,this.profileImage=this._DomSanitizer.bypassSecurityTrustUrl(this.config.userDetails.profilePicture),("data:image/jpeg;base64,"===this.config.userDetails.profilePicture||null===this.config.userDetails.profilePicture||""===this.config.userDetails.profilePicture)&&(this.userDetails.profilePicture="assets/imgs/empty-avatar.jpg",this.profileImage=this.userDetails.profilePicture)}ionViewWillEnter(){this.menuControl.enable(!0),this.utils.component.emit(d.c.MY_PROFILE)}chooseProfilePicture(o){this.camera.getPicture({destinationType:this.camera.DestinationType.DATA_URL,encodingType:this.camera.EncodingType.JPEG,mediaType:this.camera.MediaType.PICTURE,sourceType:o,correctOrientation:!0}).then(a=>{this.base64Data=a,a=this._DomSanitizer.bypassSecurityTrustUrl("data:image/jpeg;base64,"+a),this.openAlert(a)},a=>{let s;s=this.translate.instant(1==o?"claim_submission.err_cam":"claim_submission.err_gallery"),this.utils.showAlert("",s,!1)})}openAlert(o){var t=this;return(0,m.Z)(function*(){const a=yield t.modalCtrl.create({component:P.X,cssClass:"profile_modal",backdropDismiss:!1,componentProps:{imageData:o}});return a.onDidDismiss().then(s=>{1==s.data?t.chooseProfilePicture(t.camera.PictureSourceType.CAMERA):2==s.data?t.chooseProfilePicture(t.camera.PictureSourceType.PHOTOLIBRARY):null!=s.data&&t.uploadImageToServer(t.base64Data)}),yield a.present()})()}uploadImageToServer(o){this.utils.showProgressLoader(),this.profileService.updateProfilePicture(o).then(t=>{try{if(t.responseJSON&&t.responseJSON.statusCode==p.OK)this.utils.dissmisProgressLoader(),this.userDetails.profilePicture="data:image/jpeg;base64,"+o,this.config.userDetails.profilePicture=this.userDetails.profilePicture,this.profileImage=this._DomSanitizer.bypassSecurityTrustUrl(this.config.userDetails.profilePicture),this.utils.publishSomeData({event:"PicUpdated",data:this.userDetails.profilePicture}),this.utils.presentToast(t.responseJSON.userMessage);else if(t.responseJSON&&t.responseJSON.statusCode==p.yI)this.utils.dissmisProgressLoader(),this.userDetails.profilePicture="data:image/jpeg;base64,"+o,this.config.userDetails.profilePicture=this.userDetails.profilePicture,this.profileImage=this._DomSanitizer.bypassSecurityTrustUrl(this.config.userDetails.profilePicture),this.utils.publishSomeData({event:"PicUpdated",data:this.userDetails.profilePicture}),this.utils.presentToast(t.responseJSON.userMessage);else{this.utils.dissmisProgressLoader();let a=this.translate.instant("profile.err_pic_upload");this.utils.presentToast(a)}}catch(a){this.utils.dissmisProgressLoader();let s=this.translate.instant("profile.err_pic_upload");this.utils.presentToast(s)}},t=>{this.utils.dissmisProgressLoader();let a=this.utils.handleServiceException(t);this.utils.presentToast(a)})}}return i.\u0275fac=function(o){return new(o||i)(e.Y36(h.i),e.Y36(Z.H7),e.Y36(r._q),e.Y36(b.f),e.Y36(c.sK),e.Y36(r.IN),e.Y36(T.y),e.Y36(x.V1))},i.\u0275cmp=e.Xpm({type:i,selectors:[["app-profile"]],decls:118,vars:64,consts:[["mode","ios"],["color","primary",1,"toolbar"],["slot","start","auto-hide","false","color","secondary"],[1,"bold-font"],["text-center","",1,"top","row"],["alt","...",1,"profilePic",3,"src","click"],["stacked","","text-center","",1,"heading","top","font_size_17","link","label",3,"click"],[1,"white_container_border_radius","text_color_base","padding_015","margin"],[1,"list_item"],[1,"margin-bottom"],["stacked","",1,"heading","font_size_17"],["class","content font_size_17",4,"ngIf"],["stacked","","class","content font_size_17",4,"ngIf"],["stacked","","class","content font_size_17","style","margin-bottom: 60px;",4,"ngIf"],[1,"content","font_size_17"],["stacked","",1,"content","font_size_17"],["stacked","",1,"content","font_size_17",2,"margin-bottom","60px"]],template:function(o,t){1&o&&(e.TgZ(0,"ion-header",0)(1,"ion-toolbar",1),e._UZ(2,"ion-menu-button",2),e.TgZ(3,"ion-title",3),e._uU(4),e.ALo(5,"translate"),e.qZA()()(),e.TgZ(6,"ion-content")(7,"div")(8,"ion-row",4)(9,"ion-col")(10,"img",5),e.NdJ("click",function(){return t.openAlert(null)}),e.qZA()()(),e.TgZ(11,"ion-label",6),e.NdJ("click",function(){return t.openAlert(null)}),e._uU(12),e.ALo(13,"translate"),e.qZA(),e.TgZ(14,"div",7)(15,"div",8)(16,"ion-row",9)(17,"ion-label",10),e._uU(18),e.ALo(19,"translate"),e.qZA()(),e.TgZ(20,"ion-row"),e.YNc(21,A,2,1,"ion-label",11),e.qZA(),e.TgZ(22,"ion-row"),e.YNc(23,D,2,0,"ion-label",12),e.qZA()(),e.TgZ(24,"div",8)(25,"ion-row",9)(26,"ion-label",10),e._uU(27),e.ALo(28,"translate"),e.qZA()(),e.TgZ(29,"ion-row"),e.YNc(30,q,2,1,"ion-label",11),e.qZA(),e.TgZ(31,"ion-row"),e.YNc(32,w,2,0,"ion-label",12),e.qZA()(),e.TgZ(33,"div",8)(34,"ion-row",9)(35,"ion-label",10),e._uU(36),e.ALo(37,"translate"),e.qZA()(),e.TgZ(38,"ion-row"),e.YNc(39,y,2,1,"ion-label",12),e.qZA(),e.TgZ(40,"ion-row"),e.YNc(41,U,2,0,"ion-label",12),e.qZA()(),e.TgZ(42,"div",8)(43,"ion-row",9)(44,"ion-label",10),e._uU(45),e.ALo(46,"translate"),e.qZA()(),e.TgZ(47,"ion-row"),e.YNc(48,v,2,1,"ion-label",11),e.qZA(),e.TgZ(49,"ion-row"),e.YNc(50,N,2,0,"ion-label",12),e.qZA()(),e.TgZ(51,"div",8)(52,"ion-row",9)(53,"ion-label",10),e._uU(54),e.ALo(55,"translate"),e.qZA()(),e.TgZ(56,"ion-row"),e.YNc(57,I,2,1,"ion-label",11),e.qZA(),e.TgZ(58,"ion-row"),e.YNc(59,J,2,0,"ion-label",12),e.qZA()(),e.TgZ(60,"div",8)(61,"ion-row",9)(62,"ion-label",10),e._uU(63),e.ALo(64,"translate"),e.qZA()(),e.TgZ(65,"ion-row"),e.YNc(66,O,2,1,"ion-label",12),e.qZA(),e.TgZ(67,"ion-row"),e.YNc(68,Y,2,0,"ion-label",12),e.qZA()(),e.TgZ(69,"div",8)(70,"ion-row",9)(71,"ion-label",10),e._uU(72),e.ALo(73,"translate"),e.qZA()(),e.TgZ(74,"ion-row"),e.YNc(75,j,2,1,"ion-label",12),e.qZA(),e.TgZ(76,"ion-row"),e.YNc(77,S,2,0,"ion-label",12),e.qZA()(),e.TgZ(78,"div",8)(79,"ion-row",9)(80,"ion-label",10),e._uU(81),e.ALo(82,"translate"),e.qZA()(),e.TgZ(83,"ion-row"),e.YNc(84,M,2,1,"ion-label",12),e.qZA(),e.TgZ(85,"ion-row"),e.YNc(86,C,2,1,"ion-label",12),e.qZA(),e.TgZ(87,"ion-row"),e.YNc(88,Q,2,1,"ion-label",12),e.qZA(),e.TgZ(89,"ion-row"),e.YNc(90,L,2,1,"ion-label",12),e.qZA()(),e.TgZ(91,"div",8)(92,"ion-row",9)(93,"ion-label",10),e._uU(94),e.ALo(95,"translate"),e.qZA()(),e.TgZ(96,"ion-row"),e.YNc(97,z,2,1,"ion-label",12),e.qZA(),e.TgZ(98,"ion-row"),e.YNc(99,F,2,0,"ion-label",12),e.qZA()(),e.TgZ(100,"div",8)(101,"ion-row",9)(102,"ion-label",10),e._uU(103),e.ALo(104,"translate"),e.qZA()(),e.TgZ(105,"ion-row"),e.YNc(106,R,2,1,"ion-label",12),e.qZA(),e.TgZ(107,"ion-row"),e.YNc(108,E,2,0,"ion-label",12),e.qZA()(),e.TgZ(109,"div",8)(110,"ion-row",9)(111,"ion-label",10),e._uU(112),e.ALo(113,"translate"),e.qZA()(),e.TgZ(114,"ion-row"),e.YNc(115,k,2,1,"ion-label",13),e.qZA(),e.TgZ(116,"ion-row"),e.YNc(117,B,2,0,"ion-label",13),e.qZA()()()()()),2&o&&(e.xp6(4),e.hij(" ",e.lcZ(5,38,"profile.title")," "),e.xp6(6),e.Q6J("src",t.profileImage,e.LSH),e.xp6(2),e.hij("",e.lcZ(13,40,"profile.change_profile_pic")," "),e.xp6(6),e.hij("",e.lcZ(19,42,"profile.name")," "),e.xp6(3),e.Q6J("ngIf",t.userDetails.name),e.xp6(2),e.Q6J("ngIf",!t.userDetails.name),e.xp6(4),e.hij("",e.lcZ(28,44,"profile.email")," "),e.xp6(3),e.Q6J("ngIf",t.userDetails.email),e.xp6(2),e.Q6J("ngIf",!t.userDetails.email),e.xp6(4),e.hij("",e.lcZ(37,46,"profile.birth_date")," "),e.xp6(3),e.Q6J("ngIf",t.userDetails.birthDate),e.xp6(2),e.Q6J("ngIf",!t.userDetails.birthDate),e.xp6(4),e.hij("",e.lcZ(46,48,"profile.identityNumber")," "),e.xp6(3),e.Q6J("ngIf",t.userDetails.identityNumber),e.xp6(2),e.Q6J("ngIf",!t.userDetails.identityNumber),e.xp6(4),e.hij("",e.lcZ(55,50,"profile.nationality")," "),e.xp6(3),e.Q6J("ngIf",t.userDetails.nationality),e.xp6(2),e.Q6J("ngIf",!t.userDetails.nationality),e.xp6(4),e.hij("",e.lcZ(64,52,"profile.race")," "),e.xp6(3),e.Q6J("ngIf",t.userDetails.race),e.xp6(2),e.Q6J("ngIf",!t.userDetails.race),e.xp6(4),e.hij("",e.lcZ(73,54,"profile.marrial_status")," "),e.xp6(3),e.Q6J("ngIf",t.userDetails.maritalStatus),e.xp6(2),e.Q6J("ngIf",!t.userDetails.maritalStatus),e.xp6(4),e.Oqu(e.lcZ(82,56,"profile.address")),e.xp6(3),e.Q6J("ngIf",t.userDetails.addressField1),e.xp6(2),e.Q6J("ngIf",t.userDetails.addressField2),e.xp6(2),e.Q6J("ngIf",t.userDetails.addressField3),e.xp6(2),e.Q6J("ngIf",t.userDetails.addressField4),e.xp6(4),e.hij("",e.lcZ(95,58,"profile.home_phone")," "),e.xp6(3),e.Q6J("ngIf",t.userDetails.homePhone),e.xp6(2),e.Q6J("ngIf",!t.userDetails.homePhone),e.xp6(4),e.Oqu(e.lcZ(104,60,"profile.mobile_phone")),e.xp6(3),e.Q6J("ngIf",t.userDetails.mobilePhone),e.xp6(2),e.Q6J("ngIf",!t.userDetails.mobilePhone),e.xp6(4),e.Oqu(e.lcZ(113,62,"profile.ofc_phone")),e.xp6(3),e.Q6J("ngIf",t.userDetails.officePhone),e.xp6(2),e.Q6J("ngIf",!t.userDetails.officePhone))},dependencies:[g.O5,r.wI,r.W2,r.Gu,r.Q$,r.fG,r.Nd,r.wd,r.sr,c.X$],styles:["ion-content[_ngcontent-%COMP%]{--background: url(/../assets/imgs/app_bg.jpg) no-repeat center center / cover}.white_container_border_radius[_ngcontent-%COMP%]{background-color:rgba(255,255,255,.7)!important;border-radius:15px!important;margin-left:15px;margin-right:15px}.list_item[_ngcontent-%COMP%]{border-bottom:1px solid #002d3d;margin-top:15px}.list_item[_ngcontent-%COMP%]:last-child{border-bottom:none!important}.text_color_base[_ngcontent-%COMP%]{color:#000}.font_size_17[_ngcontent-%COMP%]{font-size:17px!important}.padding_015[_ngcontent-%COMP%]{padding:0 15px;margin-bottom:15px!important}.profilePic[_ngcontent-%COMP%]{border-radius:30px;width:23vh;height:23vh}.heading[_ngcontent-%COMP%]{font-family:var(--ion-font-agenda-semibold)}.heading[_ngcontent-%COMP%]   .col[_ngcontent-%COMP%]{font-family:var(--ion-font-agenda-semibold);line-height:16px}.content[_ngcontent-%COMP%]{font-family:Agenda-Regular;color:#000!important}.row[_ngcontent-%COMP%]{text-align:center;margin-top:20px}.label[_ngcontent-%COMP%]{display:flex;margin-bottom:20px;justify-content:center}.link[_ngcontent-%COMP%]{color:#6095c9!important;text-decoration:underline;white-space:unset!important;line-height:24px;margin-top:0}.flex-row[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center}.margin-bottom[_ngcontent-%COMP%]{margin-bottom:15px}"]}),i})()}];let H=(()=>{class i{}return i.\u0275fac=function(o){return new(o||i)},i.\u0275mod=e.oAB({type:i}),i.\u0275inj=e.cJS({imports:[f.Bz.forChild(G),f.Bz]}),i})(),X=(()=>{class i{}return i.\u0275fac=function(o){return new(o||i)},i.\u0275mod=e.oAB({type:i}),i.\u0275inj=e.cJS({imports:[g.ez,_.u5,r.Pc,H,c.aw]}),i})()}}]);