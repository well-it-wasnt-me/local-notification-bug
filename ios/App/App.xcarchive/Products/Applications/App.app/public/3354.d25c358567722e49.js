"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[3354],{5642:(T,f,a)=>{a.d(f,{K:()=>_});var c=a(6895),t=a(2216),r=a(8274);let _=(()=>{class p{}return p.\u0275fac=function(v){return new(v||p)},p.\u0275mod=r.oAB({type:p}),p.\u0275inj=r.cJS({imports:[c.ez,t.uH]}),p})()},1360:(T,f,a)=>{a.d(f,{U:()=>r});var c=a(8274),t=a(2216);let r=(()=>{class _{constructor(){}ngOnInit(){}}return _.\u0275fac=function(g){return new(g||_)},_.\u0275cmp=c.Xpm({type:_,selectors:[["app-footerbtn"]],decls:4,vars:0,consts:[[1,"footer-menu-btn"],["icon","bars"],[1,"footer-menu-close-btn"],["icon","times"]],template:function(g,v){1&g&&(c.TgZ(0,"a",0),c._UZ(1,"fa-icon",1),c.qZA(),c.TgZ(2,"a",2),c._UZ(3,"fa-icon",3),c.qZA())},dependencies:[t.BN]}),_})()},9201:(T,f,a)=>{a.d(f,{k:()=>y});var c=a(6916),t=a(8274),r=a(7469),_=a(5014),p=a(6895),g=a(2216);const v=function(){return["/dashboard"]},m=function(){return["/mood"]},P=function(){return["/pills"]},e=function(){return["/calendar"]},U=function(){return["/medico"]},x=function(){return["/diario"]},F=function(){return["/files"]},O=function(){return["/report"]},C=function(){return["/profile"]},D=function(){return["/impostazioni"]},S=function(){return["/aboutus"]},J=function(){return["/updates"]};let y=(()=>{class Z{constructor(h,u){this.router=h,this.storageService=u,this.url1="",this.appVersion=c.N.appVersion}loginPage(){this.storageService.clear(),this.router.navigate(["/login"])}ngOnInit(){this.url1=this.router.url}}return Z.\u0275fac=function(h){return new(h||Z)(t.Y36(r.F0),t.Y36(_.V))},Z.\u0275cmp=t.Xpm({type:Z,selectors:[["app-sidebar"]],decls:73,vars:37,consts:[[1,"main-menu-box"],[1,"header"],[1,"container"],[1,"logo"],["src","../../../assets/images/logo.png",1,"w-100"],[1,"subtitle"],[1,"nav","flex-column","flex-nowrap","main-menu","overflow-hidden"],[1,"nav-item"],[1,"nav-link",3,"routerLink","ngClass"],["icon","dashboard"],[1,"nav-link",3,"ngClass","routerLink"],["icon","smile-beam"],[1,"submenu","nav-link",3,"routerLink","ngClass"],["icon","pills"],["icon","calendar"],["icon","user-doctor"],["icon","clipboard"],["icon","file"],["icon","list-numeric"],["icon","user-astronaut"],["icon","gears"],["icon","info-circle"],["icon","adjust"],[1,"singout-btn"],[3,"click"],["icon","arrow-right"]],template:function(h,u){1&h&&(t.TgZ(0,"aside",0)(1,"div",1)(2,"div",2)(3,"div",3),t._UZ(4,"img",4),t.qZA(),t.TgZ(5,"div",5),t._uU(6),t.qZA()()(),t.TgZ(7,"div",2)(8,"ul",6)(9,"li",7)(10,"a",8)(11,"span"),t._UZ(12,"fa-icon",9),t._uU(13," Dashboard"),t.qZA()()(),t.TgZ(14,"li",7)(15,"a",10)(16,"span"),t._UZ(17,"fa-icon",11),t._uU(18," Umore"),t.qZA()()(),t.TgZ(19,"li",7)(20,"a",12)(21,"span"),t._UZ(22,"fa-icon",13),t._uU(23," Farmaci "),t.qZA()()(),t.TgZ(24,"li",7)(25,"a",8)(26,"span"),t._UZ(27,"fa-icon",14),t._uU(28," Calendario"),t.qZA()()(),t.TgZ(29,"li",7)(30,"a",8)(31,"span"),t._UZ(32,"fa-icon",15),t._uU(33," Medico"),t.qZA()()(),t.TgZ(34,"li",7)(35,"a",8)(36,"span"),t._UZ(37,"fa-icon",16),t._uU(38," Diario"),t.qZA()()(),t.TgZ(39,"li",7)(40,"a",8)(41,"span"),t._UZ(42,"fa-icon",17),t._uU(43," File Condivisi"),t.qZA()()(),t.TgZ(44,"li",7)(45,"a",8)(46,"span"),t._UZ(47,"fa-icon",18),t._uU(48," Report"),t.qZA()()(),t.TgZ(49,"li",7)(50,"a",8)(51,"span"),t._UZ(52,"fa-icon",19),t._uU(53," Profilo"),t.qZA()()(),t.TgZ(54,"li",7)(55,"a",8)(56,"span"),t._UZ(57,"fa-icon",20),t._uU(58," Impostazioni"),t.qZA()()(),t.TgZ(59,"li",7)(60,"a",8)(61,"span"),t._UZ(62,"fa-icon",21),t._uU(63," Questa App"),t.qZA()()(),t.TgZ(64,"li",7)(65,"a",8)(66,"span"),t._UZ(67,"fa-icon",22),t._uU(68," Aggiornamenti APP"),t.qZA()()()()(),t.TgZ(69,"div",23)(70,"a",24),t.NdJ("click",function(){return u.loginPage()}),t._uU(71,"Log Out "),t._UZ(72,"fa-icon",25),t.qZA()()()),2&h&&(t.xp6(6),t.hij("Versione: ",u.appVersion,""),t.xp6(4),t.Q6J("routerLink",t.DdM(25,v))("ngClass","/dashboard"===u.url1?"active ":""),t.xp6(5),t.Q6J("ngClass","/mood"===u.url1?"active":"")("routerLink",t.DdM(26,m)),t.xp6(5),t.Q6J("routerLink",t.DdM(27,P))("ngClass","/pills"===u.url1||"/pills"===u.url1?"active ":""),t.xp6(5),t.Q6J("routerLink",t.DdM(28,e))("ngClass","/calendar"===u.url1?"active":""),t.xp6(5),t.Q6J("routerLink",t.DdM(29,U))("ngClass","/medico"===u.url1?"active":""),t.xp6(5),t.Q6J("routerLink",t.DdM(30,x))("ngClass","/diario"===u.url1?"active":""),t.xp6(5),t.Q6J("routerLink",t.DdM(31,F))("ngClass","/files"===u.url1?"active":""),t.xp6(5),t.Q6J("routerLink",t.DdM(32,O))("ngClass","/report"===u.url1?"active":""),t.xp6(5),t.Q6J("routerLink",t.DdM(33,C))("ngClass","/profile"===u.url1?"active":""),t.xp6(5),t.Q6J("routerLink",t.DdM(34,D))("ngClass","/impostazioni"===u.url1?"active":""),t.xp6(5),t.Q6J("routerLink",t.DdM(35,S))("ngClass","/aboutus"===u.url1?"active":""),t.xp6(5),t.Q6J("routerLink",t.DdM(36,J))("ngClass","/updates"===u.url1?"active":""))},dependencies:[p.mk,g.BN,r.rH]}),Z})()},3354:(T,f,a)=>{a.r(f),a.d(f,{PillsPageModule:()=>G});var c=a(6895),t=a(433),r=a(8058),_=a(7469),p=a(655),g=a(6534),v=a(6916);const P=(0,a(7423).fo)("LocalNotifications",{web:()=>a.e(7434).then(a.bind(a,7434)).then(i=>new i.LocalNotificationsWeb)});var e=a(8274),U=a(5014),x=a(4465),F=a(1360),O=a(9201),C=a(2216),D=a(3720);function S(i,d){if(1&i&&(e.TgZ(0,"div")(1,"div",18)(2,"div",19),e._UZ(3,"img",20),e.qZA()(),e.TgZ(4,"div",21)(5,"div",7),e._uU(6),e.qZA(),e.TgZ(7,"div",22)(8,"span"),e._uU(9,"DOSAGGIO"),e.qZA(),e._uU(10," da definire"),e.qZA()(),e.TgZ(11,"div",23)(12,"a",24),e._UZ(13,"fa-icon",25),e._uU(14,"\xa0\xa0\xa0\xa0\xa0"),e.qZA()()()),2&i){const n=d.$implicit;e.xp6(6),e.Oqu(n.denom)}}function J(i,d){if(1&i&&(e.TgZ(0,"div",16),e.YNc(1,S,15,1,"div",17),e.qZA()),2&i){const n=d.$implicit;e.xp6(1),e.Q6J("ngForOf",n)}}function y(i,d){1&i&&e._UZ(0,"a",36),2&i&&e.Q6J("innerHTML",d.$implicit.denom,e.oJD)}function Z(i,d){1&i&&e._UZ(0,"div",36),2&i&&e.Q6J("innerHTML",d.$implicit,e.oJD)}function A(i,d){if(1&i){const n=e.EpF();e.TgZ(0,"div")(1,"div",37),e._uU(2,"Frequenza"),e.qZA(),e.TgZ(3,"select",38),e.NdJ("change",function(){e.CHM(n);const o=e.oxw(2);return e.KtG(o.selectedFreq())})("ngModelChange",function(o){e.CHM(n);const s=e.oxw(2);return e.KtG(s.selectedFreque=o)}),e.TgZ(4,"option",39),e._uU(5,"Una Volta al Giorno"),e.qZA(),e.TgZ(6,"option",40),e._uU(7,"Due Volte al Giorno"),e.qZA(),e.TgZ(8,"option",41),e._uU(9,"Al Bisogno"),e.qZA()()()}if(2&i){const n=e.oxw(2);e.xp6(3),e.Q6J("ngModel",n.selectedFreque)}}function h(i,d){if(1&i){const n=e.EpF();e.TgZ(0,"div")(1,"div",37),e._uU(2,"Ora 1 dose"),e.qZA(),e.TgZ(3,"input",42),e.NdJ("ngModelChange",function(o){e.CHM(n);const s=e.oxw(2);return e.KtG(s.oraPrimaDoseSingola=o)}),e.qZA()()}if(2&i){const n=e.oxw(2);e.xp6(3),e.Q6J("ngModel",n.oraPrimaDoseSingola)}}function u(i,d){if(1&i){const n=e.EpF();e.TgZ(0,"div")(1,"div",37),e._uU(2,"Ora 1 dose"),e.qZA(),e.TgZ(3,"input",42),e.NdJ("ngModelChange",function(o){e.CHM(n);const s=e.oxw(2);return e.KtG(s.oraPrimaDoseDoppia=o)}),e.qZA(),e.TgZ(4,"div",37),e._uU(5,"Quantit\xe0"),e.qZA(),e.TgZ(6,"input",43),e.NdJ("ngModelChange",function(o){e.CHM(n);const s=e.oxw(2);return e.KtG(s.qtPrimaDoseDoppia=o)}),e.qZA(),e._UZ(7,"br"),e.TgZ(8,"div",37),e._uU(9,"Ora 2 dose"),e.qZA(),e.TgZ(10,"input",42),e.NdJ("ngModelChange",function(o){e.CHM(n);const s=e.oxw(2);return e.KtG(s.oraSecondaDoseDoppia=o)}),e.qZA(),e.TgZ(11,"div",37),e._uU(12,"Quantit\xe0"),e.qZA(),e.TgZ(13,"input",43),e.NdJ("ngModelChange",function(o){e.CHM(n);const s=e.oxw(2);return e.KtG(s.qtSecondaDoseDoppia=o)}),e.qZA()()}if(2&i){const n=e.oxw(2);e.xp6(3),e.Q6J("ngModel",n.oraPrimaDoseDoppia),e.xp6(3),e.Q6J("ngModel",n.qtPrimaDoseDoppia),e.xp6(4),e.Q6J("ngModel",n.oraSecondaDoseDoppia),e.xp6(3),e.Q6J("ngModel",n.qtSecondaDoseDoppia)}}function E(i,d){1&i&&(e.TgZ(0,"div")(1,"div",37),e._uU(2,"Scorta (quantita di pillole disponibili al momento)"),e.qZA(),e._UZ(3,"input",44),e.qZA())}function N(i,d){if(1&i){const n=e.EpF();e.TgZ(0,"ion-header",0)(1,"ion-toolbar")(2,"ion-buttons",26)(3,"ion-button",27),e.NdJ("click",function(){e.CHM(n);const o=e.oxw();return e.KtG(o.cancel())}),e._uU(4,"Chiudi"),e.qZA()(),e.TgZ(5,"ion-title"),e._uU(6,"Nuova Pillola"),e.qZA()()(),e.TgZ(7,"ion-content",28),e._UZ(8,"br"),e.TgZ(9,"div",29)(10,"ng-autocomplete",30),e.NdJ("ngModelChange",function(o){e.CHM(n);const s=e.oxw();return e.KtG(s.selectedPill=o)})("selected",function(o){e.CHM(n);const s=e.oxw();return e.KtG(s.selectEvent(o))})("inputChanged",function(o){e.CHM(n);const s=e.oxw();return e.KtG(s.onChangeSearch(o))})("inputFocused",function(o){e.CHM(n);const s=e.oxw();return e.KtG(s.onFocused(o))}),e.qZA(),e.YNc(11,y,1,1,"ng-template",null,31,e.W1O),e.YNc(13,Z,1,1,"ng-template",null,32,e.W1O),e.qZA(),e.TgZ(15,"ion-button",33),e.NdJ("click",function(){e.CHM(n);const o=e.oxw();return e.KtG(o.addPill())}),e._uU(16,"CONFERMA"),e.qZA(),e.TgZ(17,"div",34),e.YNc(18,A,10,1,"div",35),e._UZ(19,"br"),e.YNc(20,h,4,1,"div",35),e.YNc(21,u,14,4,"div",35),e._UZ(22,"br")(23,"br"),e.YNc(24,E,4,0,"div",35),e.TgZ(25,"ion-button",33),e.NdJ("click",function(){e.CHM(n);const o=e.oxw();return e.KtG(o.salvaPromemoria())}),e._uU(26,"SALVA PROMEMORIA"),e.qZA()()()}if(2&i){const n=e.MAs(12),l=e.MAs(14),o=e.oxw();e.xp6(10),e.Q6J("ngModel",o.selectedPill)("data",o.data)("searchKeyword",o.keyword)("notFoundText",o.notFound)("minQueryLength",o.minQuery)("itemTemplate",n)("notFoundTemplate",l),e.xp6(8),e.Q6J("ngIf",o.hideFrequenza),e.xp6(2),e.Q6J("ngIf",o.hideOraSingola),e.xp6(1),e.Q6J("ngIf",o.hideOraDoppia),e.xp6(3),e.Q6J("ngIf",o.hideScorta)}}const Q=function(){return["/dashboard"]},q=[{path:"",component:(()=>{class i{constructor(n,l){this.storageService=n,this.toastCtrl=l,this.keyword="denom",this.data=[],this.notFound="Farmaco non trovato",this.minQuery=3,this.temp=[],this.hideFrequenza=!1,this.hideOraSingola=!1,this.hideOraDoppia=!1,this.hideScorta=!1,this.loadPills()}loadPills(){return(0,p.mG)(this,void 0,void 0,function*(){let n;yield this.storageService.get("access_token").then(o=>{n=o}),g.Z.get(v.N.apiURL+"mobile/api/drugs/list",{headers:{Authorization:`Bearer ${n}`}}).then(o=>{this.data=o.data}).catch(o=>{console.log("axios error",o)})})}onWillDismiss(n){event}cancel(){this.modal.dismiss(null,"cancel")}selectEvent(n){console.log("item",n)}onChangeSearch(n){console.log("val",n)}onFocused(n){}addPill(){this.hideFrequenza=!0}ngOnInit(){this.storageService.get("my_pills")&&this.storageService.get("my_pills").then(n=>{n&&(this.temp=n)})}setNotification(n,l,o,s){return(0,p.mG)(this,void 0,void 0,function*(){let M=Math.floor(100*Math.random());yield P.schedule({notifications:[{id:M,title:"Promemoria Pillole",body:"Ricordati di assumere "+s,schedule:{allowWhileIdle:!0,on:{hour:l,minute:o},every:n,repeats:!0}}]}).then(b=>console.log(b))})}selectedFreq(){if("once"===this.selectedFreque)this.hideOraSingola=!0,this.hideOraDoppia=!1;else{if("twice"!==this.selectedFreque)return this.hideOraSingola=!1,void(this.hideOraDoppia=!1);this.hideOraSingola=!1,this.hideOraDoppia=!0}}salvaPromemoria(){this.selectedPill.oraPrimaDoseSingola=this.oraPrimaDoseSingola,this.selectedPill.oraPrimaDoseDoppia=this.oraPrimaDoseDoppia,this.selectedPill.oraSecondaDoseDoppia=this.oraSecondaDoseDoppia,this.selectedPill.scheduled=this.selectedFreque;let n=Array.of(this.selectedPill);if(this.temp.push(n),this.storageService.store("my_pills",this.temp),"once"===this.selectedFreque){let o=this.oraPrimaDoseSingola.split(":");this.setNotification("day",o[0],o[1],this.selectedPill.denom),this.modal.dismiss(),this.toastCtrl.presentToast("Promemoria Salvato con Successo")}else if("twice"==this.selectedFreque){let o=this.oraPrimaDoseDoppia.split(":");this.setNotification("day",o[0],o[1],this.selectedPill.denom);let L=this.oraSecondaDoseDoppia.split(":");this.setNotification("day",L[0],L[1],this.selectedPill.denom),this.modal.dismiss(),this.toastCtrl.presentToast("Promemoria Salvato con Successo")}}}return i.\u0275fac=function(n){return new(n||i)(e.Y36(U.V),e.Y36(x.k))},i.\u0275cmp=e.Xpm({type:i,selectors:[["app-pills"]],viewQuery:function(n,l){if(1&n&&e.Gf(r.ki,5),2&n){let o;e.iGM(o=e.CRH())&&(l.modal=o.first)}},decls:21,vars:3,consts:[[1,"page-background"],[1,"container"],[1,"header"],[1,"row"],[1,"col-8"],[1,"back-btn",3,"routerLink"],["icon","angle-left"],[1,"title"],[1,"col-4","text-right"],[1,"edit-profile"],["id","open-modal-pill"],["size","2x","icon","plus-square"],[1,"main-subtitle"],["class","list",4,"ngFor","ngForOf"],["trigger","open-modal-pill",3,"willDismiss"],["class","page-background"],[1,"list"],[4,"ngFor","ngForOf"],[1,"width-10","float-left"],[1,"icon"],["src","../../../assets/images/pill-capsule.png",1,"w-100"],[1,"width-80","float-left"],[1,"subtitle"],[1,"width-10","float-left","text-right"],[1,"read-more-btn"],["icon","search-plus"],["slot","start"],[3,"click"],[1,"ion-padding","page-background","modern"],[1,"ng-autocomplete"],["placeholder","Scrivi nome farmaco",3,"ngModel","data","searchKeyword","notFoundText","minQueryLength","itemTemplate","notFoundTemplate","ngModelChange","selected","inputChanged","inputFocused"],["itemTemplate",""],["notFoundTemplate",""],["size","full",3,"click"],[1,"box"],[4,"ngIf"],[3,"innerHTML"],[1,"label"],[1,"form-control",3,"ngModel","change","ngModelChange"],["value","once"],["value","twice"],["value","none"],["type","time",1,"form-control",3,"ngModel","ngModelChange"],["type","number",1,"form-control",3,"ngModel","ngModelChange"],["type","number","ngModel","scorte",1,"form-control"]],template:function(n,l){1&n&&(e._UZ(0,"app-sidebar"),e.TgZ(1,"ion-content",0)(2,"div",1)(3,"div",2)(4,"div",3)(5,"div",4)(6,"a",5),e._UZ(7,"fa-icon",6),e.qZA(),e.TgZ(8,"span",7),e._uU(9,"Elenco Farmaci"),e.qZA()(),e.TgZ(10,"div",8),e._UZ(11,"br"),e.TgZ(12,"div",9)(13,"a",10),e._UZ(14,"fa-icon",11),e.qZA()()()()(),e.TgZ(15,"div",12),e._uU(16,"I Miei Farmaci"),e.qZA(),e.YNc(17,J,2,1,"div",13),e.qZA(),e.TgZ(18,"ion-modal",14),e.NdJ("willDismiss",function(s){return l.onWillDismiss(s)}),e.YNc(19,N,27,11,"ng-template",15),e.qZA()(),e._UZ(20,"app-footerbtn")),2&n&&(e.xp6(6),e.Q6J("routerLink",e.DdM(2,Q)),e.xp6(11),e.Q6J("ngForOf",l.temp))},dependencies:[c.sg,c.O5,t.YN,t.Kr,t.Fj,t.wV,t.EJ,t.JJ,t.On,r.YG,r.Sm,r.W2,r.Gu,r.wd,r.sr,r.ki,r.Fo,_.rH,F.U,O.k,C.BN,D.YR]}),i})()}];let K=(()=>{class i{}return i.\u0275fac=function(n){return new(n||i)},i.\u0275mod=e.oAB({type:i}),i.\u0275inj=e.cJS({imports:[_.Bz.forChild(q),_.Bz]}),i})();var w=a(5642);let G=(()=>{class i{}return i.\u0275fac=function(n){return new(n||i)},i.\u0275mod=e.oAB({type:i}),i.\u0275inj=e.cJS({imports:[c.ez,t.u5,r.Pc,K,w.K,C.uH,D.rP]}),i})()},5014:(T,f,a)=>{a.d(f,{V:()=>p});var c=a(655);const r=(0,a(7423).fo)("Preferences",{web:()=>a.e(8359).then(a.bind(a,8359)).then(g=>new g.PreferencesWeb)});var _=a(8274);let p=(()=>{class g{constructor(){}store(m,P){return(0,c.mG)(this,void 0,void 0,function*(){const e=btoa(escape(JSON.stringify(P)));yield r.set({key:m,value:e})})}get(m){return(0,c.mG)(this,void 0,void 0,function*(){const P=yield r.get({key:m});try{return JSON.parse(unescape(atob(P.value)))}catch(e){return!1}})}removeStorageItem(m){return(0,c.mG)(this,void 0,void 0,function*(){yield r.remove({key:m})})}clear(){return(0,c.mG)(this,void 0,void 0,function*(){yield r.clear()})}}return g.\u0275fac=function(m){return new(m||g)},g.\u0275prov=_.Yz7({token:g,factory:g.\u0275fac,providedIn:"root"}),g})()}}]);