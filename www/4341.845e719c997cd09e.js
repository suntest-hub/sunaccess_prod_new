"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[4341],{94341:(Z,r,o)=>{o.r(r),o.d(r,{StatementsPageModule:()=>A});var m=o(36895),p=o(24006),s=o(48058),g=o(64228),t=o(98274),f=o(58339),P=o(9999),S=o(53025),h=o(43485),d=o(54463);function v(n,a){if(1&n){const e=t.EpF();t.TgZ(0,"ion-row")(1,"ion-col",1),t._uU(2),t.qZA(),t.TgZ(3,"ion-col",3),t.NdJ("click",function(){const c=t.CHM(e).$implicit,l=t.oxw();return t.KtG(l.downloadAndOpenPdf(c))}),t._uU(4),t.qZA()()}if(2&n){const e=a.$implicit;t.xp6(2),t.hij(" ",e.policyNumber," "),t.xp6(2),t.hij(" ",e.statementYear," ")}}const x=[{path:"",component:(()=>{class n{constructor(e,i,u,c){this.downloadFile=e,this.logger=i,this.utils=u,this.config=c,this.downloadAndOpenPdf=function(l){this.downloadFile.downloadStatementFile(l.link,l.policyNumber)},this.utils.analytics("Statements"),this.config.currentPage.pageName="StatementsPage"}ngOnInit(){}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(f.w),t.Y36(P.U),t.Y36(S.f),t.Y36(h.i))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-statements"]],inputs:{statementsData:"statementsData"},decls:9,vars:7,consts:[[1,"heading","contentMargin"],[1,"ion-text-center"],[4,"ngFor","ngForOf"],[1,"ion-text-center",3,"click"]],template:function(e,i){1&e&&(t.TgZ(0,"ion-list")(1,"ion-row",0)(2,"ion-col",1),t._uU(3),t.ALo(4,"translate"),t.qZA(),t.TgZ(5,"ion-col",1),t._uU(6),t.ALo(7,"translate"),t.qZA()(),t.YNc(8,v,5,2,"ion-row",2),t.qZA()),2&e&&(t.xp6(3),t.hij(" ",t.lcZ(4,3,"premium_stmts.policy_no")," "),t.xp6(3),t.hij(" ",t.lcZ(7,5,"premium_stmts.stmt_year")," "),t.xp6(2),t.Q6J("ngForOf",i.statementsData))},dependencies:[m.sg,s.wI,s.q_,s.Nd,d.X$]}),n})()}];let y=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[g.Bz.forChild(x),g.Bz]}),n})(),A=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[m.ez,p.u5,s.Pc,y,d.aw]}),n})()}}]);