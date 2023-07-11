"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[5024],{17343:(E,P,s)=>{s.d(P,{K:()=>b});var u=s(36895),f=s(48058),l=s(24006),g=s(54463),_=s(98274);let b=(()=>{class t{}return t.\u0275fac=function(C){return new(C||t)},t.\u0275mod=_.oAB({type:t}),t.\u0275inj=_.cJS({imports:[u.ez,f.Pc,g.aw,l.UX]}),t})()},41729:(E,P,s)=>{s.d(P,{O:()=>S});var u=s(22727),f=s(50727);class l extends f.w0{constructor(i,e){super()}schedule(i,e=0){return this}}const g={setInterval(o,i,...e){const{delegate:n}=g;return null!=n&&n.setInterval?n.setInterval(o,i,...e):setInterval(o,i,...e)},clearInterval(o){const{delegate:i}=g;return((null==i?void 0:i.clearInterval)||clearInterval)(o)},delegate:void 0};var _=s(38737),t=s(26063);class m{constructor(i,e=m.now){this.schedulerActionCtor=i,this.now=e}schedule(i,e=0,n){return new this.schedulerActionCtor(this,i).schedule(n,e)}}m.now=t.l.now;const M=new class C extends m{constructor(i,e=m.now){super(i,e),this.actions=[],this._active=!1}flush(i){const{actions:e}=this;if(this._active)return void e.push(i);let n;this._active=!0;do{if(n=i.execute(i.state,i.delay))break}while(i=e.shift());if(this._active=!1,n){for(;i=e.shift();)i.unsubscribe();throw n}}}(class b extends l{constructor(i,e){super(i,e),this.scheduler=i,this.work=e,this.pending=!1}schedule(i,e=0){var n;if(this.closed)return this;this.state=i;const r=this.id,c=this.scheduler;return null!=r&&(this.id=this.recycleAsyncId(c,r,e)),this.pending=!0,this.delay=e,this.id=null!==(n=this.id)&&void 0!==n?n:this.requestAsyncId(c,this.id,e),this}requestAsyncId(i,e,n=0){return g.setInterval(i.flush.bind(i,this),n)}recycleAsyncId(i,e,n=0){if(null!=n&&this.delay===n&&!1===this.pending)return e;null!=e&&g.clearInterval(e)}execute(i,e){if(this.closed)return new Error("executing a cancelled action");this.pending=!1;const n=this._execute(i,e);if(n)return n;!1===this.pending&&null!=this.id&&(this.id=this.recycleAsyncId(this.scheduler,this.id,null))}_execute(i,e){let r,n=!1;try{this.work(i)}catch(c){n=!0,r=c||new Error("Scheduled action threw falsy error")}if(n)return this.unsubscribe(),r}unsubscribe(){if(!this.closed){const{id:i,scheduler:e}=this,{actions:n}=e;this.work=this.state=this.scheduler=null,this.pending=!1,(0,_.P)(n,this),null!=i&&(this.id=this.recycleAsyncId(e,i,null)),this.delay=null,super.unsubscribe()}}}),O=M;var v=s(69751),x=s(93532);var p=s(24006),a=s(98274),d=s(48058),U=s(53025),Z=s(91903),w=s(54463),F=s(43485),N=s(26475),D=s(36895);function I(o,i){if(1&o&&(a.TgZ(0,"div",14),a._uU(1),a.qZA()),2&o){const e=a.oxw();a.xp6(1),a.hij("",3-e.sendOtpCount," Attempt Left")}}let S=(()=>{class o{constructor(e,n,r,c,h,k,J,Y,L,z){this.modalCtrl=e,this.utils=n,this.actionSheetCtrl=r,this.base64=c,this.alertCtrl=h,this.translate=k,this.config=J,this.UpdatePersonalService=Y,this.formbuilder=L,this.modalController=z,this.tmerVAl="(60 Sec)",this.enableResend=!1,this.sendOtpCount=0,this.invalidAttemptCount=0,this.OTPSubmitForm=this.formbuilder.group({otpCode:["",[p.kI.required,p.kI.minLength(6)]]}),this.config.currentPage.pageName="TACPopupPage",this.phoneNumber=this.config.userInfo.contactNumber,this.maskedPhoneNumber=this.config.userInfo.maskedContactNumber}ngOnInit(){console.log("ionViewDidLoad TacPopupPage"),this.sendOTP()}verifyTAC(){if(this.OTPSubmitForm.valid)if(this.utils.isDeviceOnLine())this.utils.showProgressLoader(),this.UpdatePersonalService.verifyTAC(this.OTPSubmitForm.controls.otpCode.value).then(n=>{try{if(n.responseJSON)if(n.responseJSON.statusCode==u.yI||n.responseJSON.statusCode==u.OK)this.utils.dissmisProgressLoader(),this.modalController.dismiss({TACVarified:!0});else if(this.utils.dissmisProgressLoader(),n.responseJSON&&n.responseJSON.statusCode==u.xe)this.utils.showAlert("",n.responseJSON.userMessage),this.OTPSubmitForm.controls.otpCode.markAsDirty(),this.OTPSubmitForm.controls.otpCode.setValue("");else{let r=n.responseJSON.message||this.translate.instant("generic_msgs.server_err");this.utils.showAlert("",r)}}catch(r){this.utils.dissmisProgressLoader();let c=this.translate.instant("generic_msgs.server_err");this.utils.showAlert("",c)}},n=>{this.utils.dissmisProgressLoader();let r=this.utils.handleServiceException(n);this.utils.showAlert("",r)});else{let e=this.translate.instant("generic_msgs.network_err");this.utils.showAlert("",e)}}sendOTP(){if(this.utils.isDeviceOnLine()){this.utils.showProgressLoader();let e="AOS";"ios"==this.utils.getPlatform()&&(e="IOS"),this.UpdatePersonalService.sendTAC(e).then(n=>{try{if(n.responseJSON)if(n.responseJSON&&n.responseJSON.statusCode==u.OK)this.enableResend=!1,this.sendOtpCount++,this.sendOtpCount<3&&(this.tmerVAl="(60 Sec)",this.startTimer()),this.utils.dissmisProgressLoader();else{this.utils.dissmisProgressLoader();let r=n.responseJSON.message||this.translate.instant("generic_msgs.server_err");this.utils.showAlert("",r)}}catch(r){this.utils.dissmisProgressLoader();let c=this.translate.instant("generic_msgs.server_err");this.utils.showAlert("",c)}},n=>{this.utils.dissmisProgressLoader();let r=this.utils.handleServiceException(n);this.utils.showAlert("",r)})}else{let e=this.translate.instant("generic_msgs.network_err");this.utils.showAlert("",e)}}startTimer(){var n,e=60;this.OTPTimerSubs=function A(o=0,i=M){return o<0&&(o=0),function y(o=0,i,e=O){let n=-1;return null!=i&&((0,x.K)(i)?e=i:n=i),new v.y(r=>{let c=function T(o){return o instanceof Date&&!isNaN(o)}(o)?+o-e.now():o;c<0&&(c=0);let h=0;return e.schedule(function(){r.closed||(r.next(h++),0<=n?this.schedule(void 0,n):r.complete())},c)})}(o,o,i)}(1e3).subscribe(r=>{n=Math.floor(e),this.tmerVAl="("+(n=n<10?"0"+n:n)+" sec)",e>=1&&--e,0==e&&(this.enableResend=!0,this.tmerVAl="",this.OTPTimerSubs.unsubscribe())})}showDialog(e,n){this.alertCtrl.create({header:e,message:n,buttons:[{text:"Ok",handler:()=>{this.modalController.dismiss({TACVarified:!0})}}],backdropDismiss:!1}).then(h=>h.present())}closeModal(){this.modalController.dismiss()}}return o.\u0275fac=function(e){return new(e||o)(a.Y36(d.IN),a.Y36(U.f),a.Y36(d.BX),a.Y36(Z.D),a.Y36(d.Br),a.Y36(w.sK),a.Y36(F.i),a.Y36(N.Y),a.Y36(p.qu),a.Y36(d.IN))},o.\u0275cmp=a.Xpm({type:o,selectors:[["app-tac-popup"]],decls:22,vars:6,consts:[["mode","ios"],["color","primary",2,"text-align","center","padding-top","0px !important"],[1,"bold-font"],[1,"padding"],[1,"margin_bottom",3,"formGroup"],[1,"enter-otp-container"],[1,"border"],["type","text","restrict-input","","restrictInput","nricDigit","maxlength","6","formControlName","otpCode","placeholder","Enter OTP Number"],[1,"timer-container"],["ion-button","",1,"btn_center",3,"disabled","click"],["class","attempts-left",4,"ngIf"],["text-center","",1,"buttons-container"],["ion-button","",1,"btn_center1",3,"disabled","click"],["ion-button","",1,"btn_center",3,"click"],[1,"attempts-left"]],template:function(e,n){1&e&&(a.TgZ(0,"ion-header",0)(1,"ion-toolbar",1)(2,"ion-label",2),a._uU(3,"Enter OTP "),a.qZA()()(),a.TgZ(4,"ion-content")(5,"div",3)(6,"p"),a._uU(7),a.qZA(),a.TgZ(8,"form",4)(9,"div",5)(10,"ion-item",6),a._UZ(11,"ion-input",7),a.qZA(),a.TgZ(12,"div",8)(13,"ion-button",9),a.NdJ("click",function(){return n.sendOTP()}),a._uU(14),a.qZA(),a.YNc(15,I,2,1,"div",10),a.qZA()()()()(),a.TgZ(16,"ion-footer")(17,"div",11)(18,"ion-button",12),a.NdJ("click",function(){return n.verifyTAC()}),a._uU(19,"Submit "),a.qZA(),a.TgZ(20,"ion-button",13),a.NdJ("click",function(){return n.closeModal()}),a._uU(21,"Cancel "),a.qZA()()()),2&e&&(a.xp6(7),a.hij("A 6-digit one-time-pin (OTP) has been sent to your mobile phone number (",n.maskedPhoneNumber,") "),a.xp6(1),a.Q6J("formGroup",n.OTPSubmitForm),a.xp6(5),a.Q6J("disabled",!n.enableResend),a.xp6(1),a.hij("Resend ",n.tmerVAl," "),a.xp6(1),a.Q6J("ngIf",n.sendOtpCount>1),a.xp6(3),a.Q6J("disabled",!n.OTPSubmitForm.controls.otpCode.valid))},dependencies:[D.O5,p._Y,p.JJ,p.JL,p.nD,d.YG,d.W2,d.fr,d.Gu,d.pK,d.Ie,d.Q$,d.sr,d.j9,p.sg,p.u],styles:["page-tac-popup[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:1.6rem}page-tac-popup[_ngcontent-%COMP%]   .attempts-left[_ngcontent-%COMP%]{font:12px/16px var(--ion-font-family);margin-top:8px}page-tac-popup[_ngcontent-%COMP%]   .enter-otp-container[_ngcontent-%COMP%]{margin-bottom:16px}page-tac-popup[_ngcontent-%COMP%]   .enter-otp-container[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]{padding-left:0}page-tac-popup[_ngcontent-%COMP%]   .enter-otp-container[_ngcontent-%COMP%]   .item-inner[_ngcontent-%COMP%]{border-bottom:0!important;padding-right:0!important}page-tac-popup[_ngcontent-%COMP%]   .enter-otp-container[_ngcontent-%COMP%]   ion-input[_ngcontent-%COMP%]{border:1px solid #c8c7cc;padding:0 16px}page-tac-popup[_ngcontent-%COMP%]   .enter-otp-container[_ngcontent-%COMP%]   .timer-container[_ngcontent-%COMP%]{margin-top:16px}p[_ngcontent-%COMP%]{margin-top:25px;margin-bottom:1.1rem;font-size:1rem;font-family:Agenda-Regular}.btn_center[_ngcontent-%COMP%]{text-transform:capitalize;--background: #002d3d !important;color:#fff;margin-top:15px;--border-radius: 10px !important;min-width:200px;min-height:40px;width:100%!important;font-family:Agenda-Regular!important;font-size:1.05rem}.btn_center1[_ngcontent-%COMP%]{text-transform:capitalize;--background: #002d3d !important;color:#fff;margin-top:15px;--border-radius: 10px !important;min-width:200px;min-height:40px;width:100%!important;font-family:Agenda-Regular!important;margin-bottom:-5px;font-size:1.05rem}.bold-font[_ngcontent-%COMP%]{font-size:1rem;font-family:Agenda-Bold!important;text-align:center}.buttons-container[_ngcontent-%COMP%], .padding[_ngcontent-%COMP%]{padding:10px}.bold-font[_ngcontent-%COMP%]{font-family:var(--ion-font-agenda-semibold);text-align:center!important;font-size:1.3rem!important;color:#002d3d;text-overflow:unset;white-space:unset;font-weight:400!important}"]}),o})()},5024:(E,P,s)=>{s.r(P),s.d(P,{UpdatePersonalDetailsPageModule:()=>S});var u=s(36895),f=s(24006),l=s(48058),g=s(64228),_=s(15861),b=s(41729),t=s(98274),m=s(53025),C=s(43485),M=s(9999),O=s(54463),v=s(45340),x=s(26475),T=s(37434);function y(o,i){1&o&&(t.TgZ(0,"div")(1,"p",11),t._uU(2,"To complete your service request, a 6-digit one-time-pin (OTP) is required. To update your mobile number please contact us at "),t.TgZ(3,"a",12),t._uU(4,"1300-88-5055"),t.qZA(),t._uU(5," or follow the steps below to submit physical form."),t.qZA()())}function A(o,i){if(1&o&&(t.TgZ(0,"div")(1,"p",11),t._uU(2,"To complete your service request, a 6-digit one-time-pin (OTP) is required and will be sent to your mobile phone number "),t.TgZ(3,"strong"),t._uU(4),t.qZA(),t._uU(5,"."),t.qZA()()),2&o){const e=t.oxw(2);t.xp6(4),t.Oqu(e.maskedPhoneNumber)}}function p(o,i){1&o&&(t.TgZ(0,"div")(1,"p",11),t._uU(2,"To "),t.TgZ(3,"strong"),t._uU(4,"Update Mobile Number"),t.qZA(),t._uU(5," please contact us at "),t.TgZ(6,"a",12),t._uU(7,"1300-88-5055"),t.qZA(),t._uU(8," or follow the steps below to submit a physical form."),t.qZA()())}function a(o,i){if(1&o){const e=t.EpF();t.TgZ(0,"div")(1,"ion-item",13)(2,"ion-avatar",14),t._UZ(3,"i",15),t.qZA(),t.TgZ(4,"ion-list",16)(5,"ion-label",17),t._uU(6,"Download (Click "),t.TgZ(7,"span",18)(8,"u",19),t.NdJ("click",function(){t.CHM(e);const r=t.oxw(2);return t.KtG(r.downloadAlterationForm())}),t._uU(9,"here "),t.qZA()(),t._uU(10,")"),t.qZA(),t.TgZ(11,"ion-label",20),t._uU(12," Print and fill in the form "),t.qZA()()(),t.TgZ(13,"ion-item",13)(14,"ion-avatar",14),t._UZ(15,"i",21),t.qZA(),t.TgZ(16,"ion-list",16)(17,"ion-label",17),t._uU(18,"Scan/Snap"),t.qZA(),t.TgZ(19,"ion-label",20),t._uU(20," An image of the completed form "),t.qZA()()(),t.TgZ(21,"ion-item",13)(22,"ion-avatar",14),t._UZ(23,"i",22),t.qZA(),t.TgZ(24,"ion-list",16)(25,"ion-label",17),t._uU(26,"Email"),t.qZA(),t.TgZ(27,"ion-label",20)(28,"a",23)(29,"u"),t._uU(30,"policy.admin@sunlifemalaysia.com"),t.qZA()()()()()()}}function d(o,i){if(1&o){const e=t.EpF();t.TgZ(0,"ion-col")(1,"ion-button",24),t.NdJ("click",function(){t.CHM(e);const r=t.oxw(2);return t.KtG(r.updateNumber())}),t._uU(2,"Not My Number"),t.qZA(),t.TgZ(3,"ion-button",25),t.NdJ("click",function(){t.CHM(e);const r=t.oxw(2);return t.KtG(r.continueToUpdate())}),t._uU(4,"Continue"),t.qZA()()}}function U(o,i){if(1&o){const e=t.EpF();t.TgZ(0,"ion-col")(1,"ion-button",25),t.NdJ("click",function(){t.CHM(e);const r=t.oxw(2);return t.KtG(r.cancel())}),t._uU(2,"Close"),t.qZA()()}}function Z(o,i){if(1&o&&(t.TgZ(0,"section",8),t.YNc(1,y,6,0,"div",9),t.YNc(2,A,6,1,"div",9),t.YNc(3,p,9,0,"div",9),t.YNc(4,a,31,0,"div",9),t.TgZ(5,"ion-row",10),t.YNc(6,d,5,0,"ion-col",9),t.YNc(7,U,3,0,"ion-col",9),t.qZA()()),2&o){const e=t.oxw();t.xp6(1),t.Q6J("ngIf",!e.phoneNumber),t.xp6(1),t.Q6J("ngIf",e.phoneNumber&&!e.notMyNumber),t.xp6(1),t.Q6J("ngIf",e.notMyNumber),t.xp6(1),t.Q6J("ngIf",e.notMyNumber||!e.phoneNumber),t.xp6(2),t.Q6J("ngIf",e.phoneNumber&&!e.notMyNumber),t.xp6(1),t.Q6J("ngIf",!e.phoneNumber||e.notMyNumber)}}function w(o,i){1&o&&(t.TgZ(0,"section",26),t._UZ(1,"app-edit-personal-data",27),t.qZA()),2&o&&(t.xp6(1),t.Q6J("comingFromCDD",!0)("isEditable",!0))}const N=[{path:"",component:(()=>{class o{constructor(e,n,r,c,h,k,J,Y,L,z){this.utils=e,this.config=n,this.alertCtrl=r,this.logger=c,this.translate=h,this.router=k,this.translateConfigService=J,this.fb=Y,this.modalController=L,this.UpdatePersonalService=z,this.isShowingLoader=!1,this.isSuccessful=!1,this.verifyPhoneNumberPage=!0,this.notMyNumber=!1,this.selectedLanguage=this.translateConfigService.getDefaultLanguage(),this.translateConfigService.setLanguage("en"),this.phoneNumber=this.config.userInfo.contactNumber,this.maskedPhoneNumber=this.config.userInfo.maskedContactNumber,this.config.currentPage.pageName="UpdatePersonalDetailPage",this.utils.analytics("UpdatePersonalDetailPage"),this.selectOptions={cssClass:"selectPopover-updateAddress"}}ionViewDidLoad(){this.logger.log("ionViewDidLoad UpdatePersonalDetailPage")}downloadAlterationForm(){this.utils.openLink(this.config.alterationRequestFormLink)}emailCompose(){this.utils.emailCompose(this.config.contact_us.emailId)}emailComposewithSubject(e){this.utils.emailComposewithSubject(this.config.contact_us.emailId,e)}continueToUpdate(){this.tacPopupModal()}updateNumber(){this.notMyNumber=!0}cancel(){this.router.navigate(["/service"])}back(){this.router.navigate(["/service"])}tacPopupModal(){var e=this;return(0,_.Z)(function*(){const n=yield e.modalController.create({component:b.O,cssClass:"custom-modal",backdropDismiss:!1});return n.onDidDismiss().then(r=>{console.log(r),r&&r.data.TACVarified&&(e.TACVarified=!0,e.verifyPhoneNumberPage=!1)}),yield n.present()})()}}return o.\u0275fac=function(e){return new(e||o)(t.Y36(m.f),t.Y36(C.i),t.Y36(l.Br),t.Y36(M.U),t.Y36(O.sK),t.Y36(g.F0),t.Y36(v.w),t.Y36(f.qu),t.Y36(l.IN),t.Y36(x.Y))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-update-personal-details"]],decls:10,vars:5,consts:[["mode","ios"],["color","primary",1,"toolbar"],["slot","start"],["name","chevron-back-outline",2,"padding-left","15px","font-size","1.5rem",3,"click"],[1,"bold-font"],["no-bounce","",1,"app_bg2","text_color_base"],["class","white_container_border_radius padding_15",4,"ngIf"],["class","update-details-form","style","margin-top: 15px !important;",4,"ngIf"],[1,"white_container_border_radius","padding_15"],[4,"ngIf"],["text-center","","align-items-center",""],[2,"font-size","1.0rem"],["href","tel:1300-88-5055","target","_blank"],["lines","none",2,"--background","none"],["slot","start",1,"profile-pic-container"],["id","avtar-icon",1,"fas","fa-download"],[2,"background","none"],[1,"font-label1"],[2,"color","#6095c9"],[3,"click"],[1,"font-label"],["id","avtar-icon",1,"fas","fa-print"],["id","avtar-icon",1,"fas","fa-envelope-open"],["href","mailto:policy.admin@sunlifemalaysia.com"],[1,"btn_center1",3,"click"],[1,"btn_center",3,"click"],[1,"update-details-form",2,"margin-top","15px !important"],[3,"comingFromCDD","isEditable"]],template:function(e,n){1&e&&(t.TgZ(0,"ion-header",0)(1,"ion-toolbar",1)(2,"ion-buttons",2)(3,"ion-icon",3),t.NdJ("click",function(){return n.back()}),t.qZA()(),t.TgZ(4,"ion-title",4),t._uU(5),t.ALo(6,"translate"),t.qZA()()(),t.TgZ(7,"ion-content",5),t.YNc(8,Z,8,6,"section",6),t.YNc(9,w,2,2,"section",7),t.qZA()),2&e&&(t.xp6(5),t.hij("",t.lcZ(6,3,"policy_servicing.update_personal_details")," "),t.xp6(3),t.Q6J("ngIf",n.verifyPhoneNumberPage),t.xp6(1),t.Q6J("ngIf",!n.verifyPhoneNumberPage&&n.TACVarified))},dependencies:[u.O5,l.BJ,l.YG,l.Sm,l.wI,l.W2,l.Gu,l.gu,l.Ie,l.Q$,l.q_,l.Nd,l.wd,l.sr,T.z,O.X$],styles:[".white_container_border_radius[_ngcontent-%COMP%]{background-color:rgba(255,255,255,.7)!important;border-radius:15px!important;margin:15px;padding:15px}.padding_15[_ngcontent-%COMP%]{padding:15px!important}.btn_center[_ngcontent-%COMP%]{text-transform:capitalize;--background: #002d3d !important;color:#fff;margin-top:15px;--border-radius: 10px;min-height:40px;width:100%!important;font-family:Agenda-Regular!important;font-size:1.05rem}.btn_center1[_ngcontent-%COMP%]{text-transform:capitalize;--background: #002d3d !important;color:#fff;margin-top:15px;--border-radius: 10px !important;min-width:200px;min-height:40px;width:100%!important;font-family:Agenda-Regular!important;margin-bottom:-5px;font-size:1.05rem}.label[_ngcontent-%COMP%]{color:#002d3d!important;font-family:var(--ion-font-agenda-semibold);font-size:1.6rem!important;white-space:normal}.sublabel[_ngcontent-%COMP%]{color:#002d3d!important;font-family:var(--ion-font-agenda-semibold);font-size:1.6rem!important;margin-bottom:4px;white-space:normal}.sublabel[_ngcontent-%COMP%]:last-child{margin-bottom:0}p[_ngcontent-%COMP%]{font-size:1.1rem;padding-left:10px}.col[_ngcontent-%COMP%]{padding:0!important}.checkbox-icon[_ngcontent-%COMP%]{border-width:1px!important;height:27px!important;width:27px!important}.checkbox-icon.checkbox-checked[_ngcontent-%COMP%]   .checkbox-inner[_ngcontent-%COMP%]{height:13px!important;left:9px!important;top:4px!important;width:8px!important}.checkbox-checked[_ngcontent-%COMP%]{border-color:#002d3d!important;background-color:color white!important}ion-avatar[_ngcontent-%COMP%]{align-items:center;background:#002d3d;border-radius:50%;display:flex;justify-content:center}ion-avatar[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{color:#fff}ion-item[_ngcontent-%COMP%]{background:transparent!important;padding:0!important}ion-item[_ngcontent-%COMP%]   .item-inner[_ngcontent-%COMP%]{border-bottom:0!important}ion-item[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-weight:700!important;margin-top:0!important}ion-item[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]   u[_ngcontent-%COMP%]{font-weight:700!important}a[_ngcontent-%COMP%]{color:#337ab7}.form-field[_ngcontent-%COMP%]{margin:16px 0;position:relative}.form-field[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%]{display:inline-flex;font-size:1.8rem!important;margin-bottom:8px;width:calc(100% - 40px)}.form-field[_ngcontent-%COMP%]   .editable-field[_ngcontent-%COMP%]{font-size:1.6rem;width:100%;word-break:break-word}.form-field[_ngcontent-%COMP%]   .edit-icon[_ngcontent-%COMP%]{display:inline-flex;justify-content:space-around;width:26px}.form-field[_ngcontent-%COMP%]   .address-field-container[_ngcontent-%COMP%]{padding-left:16px}.form-field[_ngcontent-%COMP%]   .address-field-container[_ngcontent-%COMP%]   .address-field[_ngcontent-%COMP%]{margin-bottom:8px}.fatca-crs-container[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%]{font-family:Agenda-Regular!important;color:#002d3d}.fatca-crs-container[_ngcontent-%COMP%]   .label-md[_ngcontent-%COMP%], .fatca-crs-container[_ngcontent-%COMP%]   .label-ios[_ngcontent-%COMP%]{margin:0 8px 13px 0!important}.fatca-crs-container[_ngcontent-%COMP%]   .checkbox[_ngcontent-%COMP%]{margin-right:16px!important}.fatca-crs-container[_ngcontent-%COMP%]   ion-list[_ngcontent-%COMP%]{margin-bottom:0;padding-left:0}.fatca-crs-container[_ngcontent-%COMP%]   ion-list[_ngcontent-%COMP%]   ion-radio[_ngcontent-%COMP%]{margin-right:16px!important}.fatca-crs-container[_ngcontent-%COMP%]   ion-list[_ngcontent-%COMP%]   ion-radio[_ngcontent-%COMP%]   .radio-icon[_ngcontent-%COMP%]{height:27px;width:27px}.fatca-crs-container[_ngcontent-%COMP%]   ion-list[_ngcontent-%COMP%]   ion-radio[_ngcontent-%COMP%]   .radio-icon[_ngcontent-%COMP%]   .radio-inner[_ngcontent-%COMP%]{height:13px;left:5px;top:5px;width:13px}.fatca-crs-container[_ngcontent-%COMP%]   hr[_ngcontent-%COMP%]{height:2px;margin-bottom:24px}.list-ios[_ngcontent-%COMP%] > .item-block[_ngcontent-%COMP%]:last-child, .list-ios[_ngcontent-%COMP%] > .item-wrapper[_ngcontent-%COMP%]:last-child   .item-block[_ngcontent-%COMP%]{border-bottom:0!important}.profile-pic-container[_ngcontent-%COMP%]{position:relative;height:40px;width:40px;background-color:var(--ion-color-secondary)!important;display:inline-grid}.font-label1[_ngcontent-%COMP%]{font-size:1rem!important}.font-label[_ngcontent-%COMP%]{font-size:.9rem!important}.tab-container[_ngcontent-%COMP%]{border-bottom:5px solid #febe10;display:flex;margin-bottom:16px}.tab-container[_ngcontent-%COMP%]   .tab1[_ngcontent-%COMP%], .tab-container[_ngcontent-%COMP%]   .tab4[_ngcontent-%COMP%], .tab-container[_ngcontent-%COMP%]   .tab3[_ngcontent-%COMP%], .tab-container[_ngcontent-%COMP%]   .tab2[_ngcontent-%COMP%]{align-items:center;background:#002d3d;border-right:1px solid white;color:#fff;display:inline-flex;font-family:var(--ion-font-agenda-semibold);font-size:1.23rem;justify-content:center;padding:8px;text-align:center;width:33.2%}.tab-container[_ngcontent-%COMP%]   .tab1.tab-selected[_ngcontent-%COMP%], .tab-container[_ngcontent-%COMP%]   .tab-selected.tab4[_ngcontent-%COMP%], .tab-container[_ngcontent-%COMP%]   .tab-selected.tab3[_ngcontent-%COMP%], .tab-container[_ngcontent-%COMP%]   .tab-selected.tab2[_ngcontent-%COMP%]{background:#febe10;color:#002d3d}.tab-container[_ngcontent-%COMP%]   .tab1[_ngcontent-%COMP%]:last-child, .tab-container[_ngcontent-%COMP%]   .tab4[_ngcontent-%COMP%]:last-child, .tab-container[_ngcontent-%COMP%]   .tab3[_ngcontent-%COMP%]:last-child, .tab-container[_ngcontent-%COMP%]   .tab2[_ngcontent-%COMP%]:last-child{border-right:0}.bold-font[_ngcontent-%COMP%]{font-family:var(--ion-font-agenda-semibold);text-align:center!important;font-size:1.3rem!important;color:#002d3d;text-overflow:unset;white-space:unset;font-weight:400!important;display:contents}"]}),o})()}];let D=(()=>{class o{}return o.\u0275fac=function(e){return new(e||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[g.Bz.forChild(N),g.Bz]}),o})();var I=s(17343);let S=(()=>{class o{}return o.\u0275fac=function(e){return new(e||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[u.ez,f.u5,l.Pc,O.aw,f.UX,D,I.K]}),o})()}}]);