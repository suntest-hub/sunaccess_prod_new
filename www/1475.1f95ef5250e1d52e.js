"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[1475],{41475:(x,d,n)=>{n.r(d),n.d(d,{ShowGalleryPhotoPageModule:()=>G});var h=n(36895),p=n(24006),s=n(48058),g=n(64228),P=n(15861),t=n(98274),f=n(53025),m=n(8994),y=n(31111),r=n(54463);const v=["mySlider"];function w(o,i){if(1&o&&(t.TgZ(0,"ion-slide"),t._UZ(1,"img",11),t.qZA()),2&o){const e=i.$implicit;t.xp6(1),t.s9C("src",e._link,t.LSH)}}const S=[{path:"",component:(()=>{class o{constructor(e,a,l,c){this.utils=e,this.photoLibrary=a,this.file=l,this.translate=c,this.index=0,this.dirName="SunAccess",this.slideOpts={initialSlide:1,slidesPerView:1,speed:400,effect:"slide",paginationType:"bullets",loop:!0,autoplay:{delay:3e3,disableOnInteraction:!1}},this.index=history.state.index,this.photoslist=history.state.list}ngOnInit(){}replaceURL(e){return e}savePhoto(){var e=this;return(0,P.Z)(function*(){let a=(yield e.slider.getActiveIndex())-1,l=e.photoslist[a]._link;e.utils.showProgressLoader(),e.photoLibrary.requestAuthorization({read:!0,write:!0}).then(c=>{alert("65"),e.photoLibrary.saveImage(l+"&ext=.jpg",e.dirName).then(u=>{alert("67"),e.utils.dissmisProgressLoader(),e.utils.presentToast(e.translate.instant("save-photo.image_success_download")),alert("save-photo.image_success_download")},u=>{e.utils.dissmisProgressLoader(),"retrieved asset is nil"==u.toLowerCase()?(alert("save-photo.image_success_download"),e.utils.presentToast(e.translate.instant("save-photo.image_success_download"))):(alert("save-photo.file_save_fail"),e.utils.presentToast(e.translate.instant("save-photo.file_save_fail")))})},c=>{e.utils.dissmisProgressLoader(),alert("save-photo.file_permission_rejected")})})()}}return o.\u0275fac=function(e){return new(e||o)(t.Y36(f.f),t.Y36(m.y),t.Y36(y.$),t.Y36(r.sK))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-show-gallery-photo"]],viewQuery:function(e,a){if(1&e&&t.Gf(v,5),2&e){let l;t.iGM(l=t.CRH())&&(a.slider=l.first)}},decls:15,vars:5,consts:[[1,"header-bg"],["slot","start"],["defaultHref","#","text","","mode","md","icon","chevron-back-outline"],[1,"bold-font","center"],["slot","end"],["ion-button","",1,"button-align",3,"click"],[1,"fas","fa-download"],[1,"image_position"],[1,"banner-slider",3,"options"],["mySlider",""],[4,"ngFor","ngForOf"],[3,"src"]],template:function(e,a){1&e&&(t.TgZ(0,"ion-header")(1,"ion-toolbar",0)(2,"ion-buttons",1),t._UZ(3,"ion-back-button",2),t.qZA(),t.TgZ(4,"ion-title",3),t._uU(5),t.ALo(6,"translate"),t.qZA(),t.TgZ(7,"ion-buttons",4)(8,"button",5),t.NdJ("click",function(){return a.savePhoto()}),t._UZ(9,"i",6),t.qZA()()()(),t.TgZ(10,"ion-content")(11,"section",7)(12,"ion-slides",8,9),t.YNc(14,w,2,1,"ion-slide",10),t.qZA()()()),2&e&&(t.xp6(5),t.hij("",t.lcZ(6,3,"photo_gallery.title")," "),t.xp6(7),t.Q6J("options",a.slideOpts),t.xp6(2),t.Q6J("ngForOf",a.photoslist))},dependencies:[h.sg,s.oU,s.Sm,s.W2,s.Gu,s.A$,s.Hr,s.wd,s.sr,s.cs,r.X$],styles:[".img[_ngcontent-%COMP%]{height:auto;width:100%!important;padding:5px;margin-bottom:5px}.image_position[_ngcontent-%COMP%]{display:flex;flex-direction:column;justify-content:center;align-items:center;height:100%}.content[_ngcontent-%COMP%]{background:#ecebeb}ion-slide[_ngcontent-%COMP%]{width:100%!important}ion-slides[_ngcontent-%COMP%]{width:90%}.header-bg[_ngcontent-%COMP%]{--background: #febe10}.header-bg[_ngcontent-%COMP%]   ion-title[_ngcontent-%COMP%]{padding:0}.center[_ngcontent-%COMP%]{text-align:center}.button-align[_ngcontent-%COMP%]{background:transparent;font-size:20px;margin-right:20px}"]}),o})()}];let b=(()=>{class o{}return o.\u0275fac=function(e){return new(e||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[g.Bz.forChild(S),g.Bz]}),o})(),G=(()=>{class o{}return o.\u0275fac=function(e){return new(e||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[h.ez,p.u5,s.Pc,r.aw,b]}),o})()}}]);