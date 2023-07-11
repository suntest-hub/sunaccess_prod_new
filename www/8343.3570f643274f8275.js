"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[8343],{38343:(v,p,s)=>{s.r(p),s.d(p,{PhotoGalleryPageModule:()=>C});var c=s(36895),u=s(24006),i=s(48058),g=s(64228),h=s(43485),t=s(98274),f=s(71952),m=s(53025),d=s(54463);function P(o,r){1&o&&(t.TgZ(0,"section",11),t._UZ(1,"ion-spinner",12),t.qZA())}function x(o,r){if(1&o){const e=t.EpF();t.TgZ(0,"ion-button",15),t.NdJ("click",function(){t.CHM(e);const a=t.oxw(2);return t.KtG(a.getPhotoGalleryList(void 0))}),t._uU(1),t.ALo(2,"translate"),t.qZA()}2&o&&(t.xp6(1),t.Oqu(t.lcZ(2,1,"generic_msgs.try_again")))}function y(o,r){if(1&o&&(t.TgZ(0,"section",13)(1,"span"),t._uU(2),t.qZA(),t.YNc(3,x,3,3,"ion-button",14),t.qZA()),2&o){const e=t.oxw();t.xp6(2),t.Oqu(e.errorMsg),t.xp6(1),t.Q6J("ngIf",e.canTryAgain)}}function b(o,r){if(1&o){const e=t.EpF();t.TgZ(0,"div",22)(1,"ion-row",23)(2,"ion-col",24)(3,"ion-label"),t._uU(4),t.qZA()(),t.TgZ(5,"ion-col",25),t.NdJ("click",function(){const l=t.CHM(e).$implicit,_=t.oxw(2);return t.KtG(_.navToDetails(l.id))}),t.TgZ(6,"ion-label",26),t._uU(7),t.ALo(8,"translate"),t.qZA()()(),t.TgZ(9,"ion-label",27),t._uU(10),t.qZA(),t.TgZ(11,"ion-row",28),t.NdJ("click",function(){const l=t.CHM(e).$implicit,_=t.oxw(2);return t.KtG(_.navToDetails(l.id))}),t.TgZ(12,"img",29),t.NdJ("load",function(){t.CHM(e);const a=t.oxw(2);return t.KtG(a.loaded=!1)}),t.qZA(),t.TgZ(13,"img",30),t.NdJ("load",function(){t.CHM(e);const a=t.oxw(2);return t.KtG(a.loaded=!0)}),t.qZA()()()}if(2&o){const e=r.$implicit,n=t.oxw(2);t.xp6(4),t.hij(" ",e.date," "),t.xp6(3),t.hij(" ",t.lcZ(8,5,"photo_gallery.seeAll")," "),t.xp6(3),t.hij(" ",e.title," "),t.xp6(2),t.Q6J("hidden",n.loaded),t.xp6(1),t.Q6J("src",n.replaceURL(e._teaserImage),t.LSH)}}function Z(o,r){if(1&o){const e=t.EpF();t.TgZ(0,"ion-infinite-scroll",31),t.NdJ("ionInfinite",function(a){t.CHM(e);const l=t.oxw(2);return t.KtG(l.getMorePhotos(a))}),t._UZ(1,"ion-infinite-scroll-content",32),t.qZA()}}function G(o,r){if(1&o&&(t.TgZ(0,"section")(1,"ion-row",16)(2,"ion-col",17)(3,"ion-label",18),t._uU(4),t.ALo(5,"translate"),t.qZA()()(),t.TgZ(6,"div",19),t.YNc(7,b,14,7,"div",20),t.qZA(),t.YNc(8,Z,2,0,"ion-infinite-scroll",21),t.qZA()),2&o){const e=t.oxw();t.xp6(4),t.Oqu(t.lcZ(5,3,"photo_gallery.sub_title")),t.xp6(3),t.Q6J("ngForOf",e.photosList),t.xp6(1),t.Q6J("ngIf",!e.isLastPageReached)}}const M=[{path:"",component:(()=>{class o{constructor(e,n,a,l){this.router=e,this.getPhotoGalleryService=n,this.utils=a,this.translate=l,this.loaded=!1,this.pageNum=1,this.isLastPageReached=!1,this.photosList=[],this.isShowingLoader=!0}ngOnInit(){this.getPhotoGalleryList(void 0)}replaceURL(e){return e}navToDetails(e){this.router.navigate(["/photo-gallery-details"],{state:{photoID:e}})}getPhotoGalleryList(e){this.getPhotoGalleryService.getPhotoGallery(this.pageNum).then(n=>{try{this.isShowingLoader=!1,this.photosList.length>0?this.photosList=this.photosList.concat(n.responseJSON.array):(this.photosList=n.responseJSON.array,h.i.PAGE_SIZE=n.responseJSON.pageSize),n.responseJSON.array.length<h.i.PAGE_SIZE||0===n.responseJSON.array.length?this.isLastPageReached=!0:this.pageNum++}catch(a){this.isShowingLoader=!1,this.errorMsg=this.translate.instant("generic_msgs.server_err")}},n=>{this.isShowingLoader=!1,this.errorMsg=this.utils.handleServiceException(n)})}getMorePhotos(e){this.getPhotoGalleryList(e)}}return o.\u0275fac=function(e){return new(e||o)(t.Y36(g.F0),t.Y36(f.I),t.Y36(m.f),t.Y36(d.sK))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-photo-gallery"]],decls:16,vars:9,consts:[["mode","ios"],["color","primary"],["slot","start"],["text","","icon","chevron-back-outline",2,"padding-left","15px","font-size","0.7rem"],[1,"bold-font"],[1,"sub_title","ion-no-padding"],[1,"subheader_bg"],[1,"sub-header"],["class","spinnersection ion-text-center",4,"ngIf"],["class","errorMsgSection",4,"ngIf"],[4,"ngIf"],[1,"spinnersection","ion-text-center"],["name","lines-sharp-small",2,"height","98%"],[1,"errorMsgSection"],["style","--background:var(--ion-color-white);",3,"click",4,"ngIf"],[2,"--background","var(--ion-color-white)",3,"click"],[1,"margin","height"],["size","6",1,"title_tile"],[1,"sub_header_title"],[1,"white_container_border_radius","text_color_base","padding_015","margin",2,"font-size","1.1rem !important"],["class","list_item",4,"ngFor","ngForOf"],["threshold","0",3,"ionInfinite",4,"ngIf"],[1,"list_item"],[2,"padding-bottom","5px"],["size","6"],["size","6",3,"click"],[1,"seeAll","font_size_18","flex"],[1,"link","font_size_18"],[3,"click"],["src","assets/imgs/placeholder-image.png","onError","this.src='assets/imgs/placeholder-image.png';","alt","...",1,"img",3,"hidden","load"],["onError","this.src='assets/imgs/placeholder-image.png';","alt","...",1,"img",3,"src","load"],["threshold","0",3,"ionInfinite"],["loadingSpinner","bubbles"]],template:function(e,n){1&e&&(t.TgZ(0,"ion-header",0)(1,"ion-toolbar",1)(2,"ion-buttons",2),t._UZ(3,"ion-back-button",3),t.qZA(),t.TgZ(4,"ion-title",4),t._uU(5),t.ALo(6,"translate"),t.qZA()(),t.TgZ(7,"ion-toolbar",5)(8,"ion-row",6)(9,"ion-label",7),t._uU(10),t.ALo(11,"translate"),t.qZA()()()(),t.TgZ(12,"ion-content"),t.YNc(13,P,2,0,"section",8),t.YNc(14,y,4,2,"section",9),t.YNc(15,G,9,5,"section",10),t.qZA()),2&e&&(t.xp6(5),t.Oqu(t.lcZ(6,5,"aboutus")),t.xp6(5),t.Oqu(t.lcZ(11,7,"newsroom_page.title")),t.xp6(3),t.Q6J("ngIf",n.isShowingLoader),t.xp6(1),t.Q6J("ngIf",!(n.photosList.length>0||n.isShowingLoader)),t.xp6(1),t.Q6J("ngIf",n.photosList.length>0))},dependencies:[c.sg,c.O5,i.oU,i.YG,i.Sm,i.wI,i.W2,i.Gu,i.ju,i.MB,i.Q$,i.Nd,i.PQ,i.wd,i.sr,i.cs,d.X$],styles:["ion-content[_ngcontent-%COMP%]{--background: url(/../assets/imgs/app_bg.jpg) no-repeat center center / cover}ion-content[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%]{text-align:center}.sub_header_title[_ngcontent-%COMP%]{padding:10px!important;margin:0;font-size:1.2rem!important;font-family:Agenda-Regular;line-height:24px;text-align:center;margin-top:5px!important}.list_item[_ngcontent-%COMP%]{border-bottom:1px solid #002d3d}.title_tile[_ngcontent-%COMP%]{font-size:2rem;padding:10px;background:#002d3d;color:#fff;text-align:center}.white_container_border_radius[_ngcontent-%COMP%]{background-color:rgba(255,255,255,.7)!important;border-radius:15px!important}.text_color_base[_ngcontent-%COMP%]{color:#002d3d}.margin[_ngcontent-%COMP%]{margin:10px 15px;border-bottom:1px solid #002d3d}.height[_ngcontent-%COMP%]{height:65px}.list_item[_ngcontent-%COMP%]:last-child{border-bottom:none!important}.img[_ngcontent-%COMP%]{height:40vh;width:100%!important;padding:5px;margin-bottom:5px}.seeAll[_ngcontent-%COMP%]{color:#6095c9;text-align:end}.padding_015[_ngcontent-%COMP%]{padding:0 15px}.link[_ngcontent-%COMP%]{color:#6095c9;text-decoration:none;word-wrap:unset!important}.flex[_ngcontent-%COMP%]{display:flex;justify-content:end}.toolbar-color[_ngcontent-%COMP%]{background-color:#febe10}.header-bg[_ngcontent-%COMP%]{--background: #febe10}.header-bg[_ngcontent-%COMP%]   ion-title[_ngcontent-%COMP%]{padding:0}.center[_ngcontent-%COMP%]{margin-left:100px}.font_size_18[_ngcontent-%COMP%]{font-size:1.1rem!important}"]}),o})()}];let O=(()=>{class o{}return o.\u0275fac=function(e){return new(e||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[g.Bz.forChild(M),g.Bz]}),o})(),C=(()=>{class o{}return o.\u0275fac=function(e){return new(e||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[c.ez,u.u5,i.Pc,d.aw,O]}),o})()}}]);