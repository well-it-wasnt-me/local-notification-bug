"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[6327],{5642:(T,_,n)=>{n.d(_,{K:()=>m});var l=n(6895),o=n(2216),i=n(8274);let m=(()=>{class d{}return d.\u0275fac=function(g){return new(g||d)},d.\u0275mod=i.oAB({type:d}),d.\u0275inj=i.cJS({imports:[l.ez,o.uH]}),d})()},1360:(T,_,n)=>{n.d(_,{U:()=>i});var l=n(8274),o=n(2216);let i=(()=>{class m{constructor(){}ngOnInit(){}}return m.\u0275fac=function(e){return new(e||m)},m.\u0275cmp=l.Xpm({type:m,selectors:[["app-footerbtn"]],decls:4,vars:0,consts:[[1,"footer-menu-btn"],["icon","bars"],[1,"footer-menu-close-btn"],["icon","times"]],template:function(e,g){1&e&&(l.TgZ(0,"a",0),l._UZ(1,"fa-icon",1),l.qZA(),l.TgZ(2,"a",2),l._UZ(3,"fa-icon",3),l.qZA())},dependencies:[o.BN]}),m})()},9201:(T,_,n)=>{n.d(_,{k:()=>J});var l=n(6916),o=n(8274),i=n(7469),m=n(5014),d=n(6895),e=n(2216);const g=function(){return["/dashboard"]},p=function(){return["/mood"]},Z=function(){return["/pills"]},h=function(){return["/calendar"]},y=function(){return["/medico"]},b=function(){return["/diario"]},A=function(){return["/files"]},P=function(){return["/report"]},x=function(){return["/profile"]},D=function(){return["/impostazioni"]},S=function(){return["/aboutus"]},E=function(){return["/updates"]};let J=(()=>{class M{constructor(f,c){this.router=f,this.storageService=c,this.url1="",this.appVersion=l.N.appVersion}loginPage(){this.storageService.clear(),this.router.navigate(["/login"])}ngOnInit(){this.url1=this.router.url}}return M.\u0275fac=function(f){return new(f||M)(o.Y36(i.F0),o.Y36(m.V))},M.\u0275cmp=o.Xpm({type:M,selectors:[["app-sidebar"]],decls:73,vars:37,consts:[[1,"main-menu-box"],[1,"header"],[1,"container"],[1,"logo"],["src","../../../assets/images/logo.png",1,"w-100"],[1,"subtitle"],[1,"nav","flex-column","flex-nowrap","main-menu","overflow-hidden"],[1,"nav-item"],[1,"nav-link",3,"routerLink","ngClass"],["icon","dashboard"],[1,"nav-link",3,"ngClass","routerLink"],["icon","smile-beam"],[1,"submenu","nav-link",3,"routerLink","ngClass"],["icon","pills"],["icon","calendar"],["icon","user-doctor"],["icon","clipboard"],["icon","file"],["icon","list-numeric"],["icon","user-astronaut"],["icon","gears"],["icon","info-circle"],["icon","adjust"],[1,"singout-btn"],[3,"click"],["icon","arrow-right"]],template:function(f,c){1&f&&(o.TgZ(0,"aside",0)(1,"div",1)(2,"div",2)(3,"div",3),o._UZ(4,"img",4),o.qZA(),o.TgZ(5,"div",5),o._uU(6),o.qZA()()(),o.TgZ(7,"div",2)(8,"ul",6)(9,"li",7)(10,"a",8)(11,"span"),o._UZ(12,"fa-icon",9),o._uU(13," Dashboard"),o.qZA()()(),o.TgZ(14,"li",7)(15,"a",10)(16,"span"),o._UZ(17,"fa-icon",11),o._uU(18," Umore"),o.qZA()()(),o.TgZ(19,"li",7)(20,"a",12)(21,"span"),o._UZ(22,"fa-icon",13),o._uU(23," Farmaci "),o.qZA()()(),o.TgZ(24,"li",7)(25,"a",8)(26,"span"),o._UZ(27,"fa-icon",14),o._uU(28," Calendario"),o.qZA()()(),o.TgZ(29,"li",7)(30,"a",8)(31,"span"),o._UZ(32,"fa-icon",15),o._uU(33," Medico"),o.qZA()()(),o.TgZ(34,"li",7)(35,"a",8)(36,"span"),o._UZ(37,"fa-icon",16),o._uU(38," Diario"),o.qZA()()(),o.TgZ(39,"li",7)(40,"a",8)(41,"span"),o._UZ(42,"fa-icon",17),o._uU(43," File Condivisi"),o.qZA()()(),o.TgZ(44,"li",7)(45,"a",8)(46,"span"),o._UZ(47,"fa-icon",18),o._uU(48," Report"),o.qZA()()(),o.TgZ(49,"li",7)(50,"a",8)(51,"span"),o._UZ(52,"fa-icon",19),o._uU(53," Profilo"),o.qZA()()(),o.TgZ(54,"li",7)(55,"a",8)(56,"span"),o._UZ(57,"fa-icon",20),o._uU(58," Impostazioni"),o.qZA()()(),o.TgZ(59,"li",7)(60,"a",8)(61,"span"),o._UZ(62,"fa-icon",21),o._uU(63," Questa App"),o.qZA()()(),o.TgZ(64,"li",7)(65,"a",8)(66,"span"),o._UZ(67,"fa-icon",22),o._uU(68," Aggiornamenti APP"),o.qZA()()()()(),o.TgZ(69,"div",23)(70,"a",24),o.NdJ("click",function(){return c.loginPage()}),o._uU(71,"Log Out "),o._UZ(72,"fa-icon",25),o.qZA()()()),2&f&&(o.xp6(6),o.hij("Versione: ",c.appVersion,""),o.xp6(4),o.Q6J("routerLink",o.DdM(25,g))("ngClass","/dashboard"===c.url1?"active ":""),o.xp6(5),o.Q6J("ngClass","/mood"===c.url1?"active":"")("routerLink",o.DdM(26,p)),o.xp6(5),o.Q6J("routerLink",o.DdM(27,Z))("ngClass","/pills"===c.url1||"/pills"===c.url1?"active ":""),o.xp6(5),o.Q6J("routerLink",o.DdM(28,h))("ngClass","/calendar"===c.url1?"active":""),o.xp6(5),o.Q6J("routerLink",o.DdM(29,y))("ngClass","/medico"===c.url1?"active":""),o.xp6(5),o.Q6J("routerLink",o.DdM(30,b))("ngClass","/diario"===c.url1?"active":""),o.xp6(5),o.Q6J("routerLink",o.DdM(31,A))("ngClass","/files"===c.url1?"active":""),o.xp6(5),o.Q6J("routerLink",o.DdM(32,P))("ngClass","/report"===c.url1?"active":""),o.xp6(5),o.Q6J("routerLink",o.DdM(33,x))("ngClass","/profile"===c.url1?"active":""),o.xp6(5),o.Q6J("routerLink",o.DdM(34,D))("ngClass","/impostazioni"===c.url1?"active":""),o.xp6(5),o.Q6J("routerLink",o.DdM(35,S))("ngClass","/aboutus"===c.url1?"active":""),o.xp6(5),o.Q6J("routerLink",o.DdM(36,E))("ngClass","/updates"===c.url1?"active":""))},dependencies:[d.mk,e.BN,i.rH]}),M})()},6327:(T,_,n)=>{n.r(_),n.d(_,{MoodPageModule:()=>O});var l=n(6895),o=n(433),i=n(8058),m=n(7469),d=n(655),e=n(8274),g=n(4465),p=n(5014),Z=n(3773),h=n(6858),y=n(1360),b=n(9201),A=n(2216);function P(a,v){1&a&&(e.TgZ(0,"ion-list")(1,"ion-list-header"),e._UZ(2,"ion-skeleton-text",29),e.qZA(),e.TgZ(3,"ion-item")(4,"ion-thumbnail",30),e._UZ(5,"ion-skeleton-text",31),e.qZA(),e.TgZ(6,"ion-label")(7,"h3"),e._UZ(8,"ion-skeleton-text",32),e.qZA(),e.TgZ(9,"p"),e._UZ(10,"ion-skeleton-text",33),e.qZA(),e.TgZ(11,"p"),e._UZ(12,"ion-skeleton-text",34),e.qZA()()()()),2&a&&(e.xp6(2),e.Q6J("animated",!0),e.xp6(3),e.Q6J("animated",!0),e.xp6(3),e.Q6J("animated",!0),e.xp6(2),e.Q6J("animated",!0),e.xp6(2),e.Q6J("animated",!0))}function x(a,v){if(1&a){const t=e.EpF();e.TgZ(0,"ion-item")(1,"ion-avatar",30),e._UZ(2,"img",35),e.qZA(),e.TgZ(3,"ion-label")(4,"h2"),e._uU(5),e.qZA(),e.TgZ(6,"p"),e._uU(7),e.ALo(8,"date"),e.qZA()(),e.TgZ(9,"p")(10,"ion-button",36),e.NdJ("click",function(){const u=e.CHM(t).$implicit,U=e.oxw();return e.KtG(U.openModal(u))}),e._UZ(11,"ion-icon",37),e.qZA(),e.TgZ(12,"ion-button",38),e.NdJ("click",function(){const u=e.CHM(t).$implicit,U=e.oxw();return e.KtG(U.eliminaMood(u.trk_id))}),e._UZ(13,"ion-icon",39),e.qZA()()()}if(2&a){const t=v.$implicit;e.xp6(2),e.s9C("src",t.image,e.LSH),e.xp6(3),e.Oqu(t.value),e.xp6(2),e.Oqu(e.xi3(8,3,t.effective_datetime,"dd/MM/yyyy H:mm:ss"))}}function D(a,v){if(1&a){const t=e.EpF();e.TgZ(0,"ion-header")(1,"ion-toolbar")(2,"ion-buttons",30)(3,"ion-button",40),e.NdJ("click",function(){e.CHM(t);const r=e.oxw();return e.KtG(r.cancel())}),e._uU(4,"Annulla"),e.qZA()(),e.TgZ(5,"ion-title"),e._uU(6,"Il Mio Umore"),e.qZA()()(),e.TgZ(7,"ion-content",41)(8,"form",42,43),e.NdJ("ngSubmit",function(){e.CHM(t);const r=e.MAs(9),u=e.oxw();return e.KtG(u.onSubmit(r))}),e.TgZ(10,"div",7),e._uU(11,"Oggi il mio umore \xe8:"),e.qZA(),e.TgZ(12,"div",44)(13,"div",45)(14,"ul")(15,"li")(16,"input",46),e.NdJ("change",function(r){e.CHM(t);const u=e.oxw();return e.KtG(u.onItemChange(r.target))}),e.qZA(),e.TgZ(17,"label",47),e._uU(18,"Ottimo"),e.qZA(),e._UZ(19,"div",48),e.qZA(),e.TgZ(20,"li")(21,"input",49),e.NdJ("change",function(r){e.CHM(t);const u=e.oxw();return e.KtG(u.onItemChange(r.target))}),e.qZA(),e.TgZ(22,"label",50),e._uU(23,"Buono"),e.qZA(),e.TgZ(24,"div",48),e._UZ(25,"div",51),e.qZA()(),e.TgZ(26,"li")(27,"input",52),e.NdJ("change",function(r){e.CHM(t);const u=e.oxw();return e.KtG(u.onItemChange(r.target))}),e.qZA(),e.TgZ(28,"label",53),e._uU(29,"Stabile"),e.qZA(),e.TgZ(30,"div",48),e._UZ(31,"div",51),e.qZA()(),e.TgZ(32,"li")(33,"input",54),e.NdJ("change",function(r){e.CHM(t);const u=e.oxw();return e.KtG(u.onItemChange(r.target))}),e.qZA(),e.TgZ(34,"label",55),e._uU(35,"Basso"),e.qZA(),e.TgZ(36,"div",48),e._UZ(37,"div",51),e.qZA()(),e.TgZ(38,"li")(39,"input",56),e.NdJ("change",function(r){e.CHM(t);const u=e.oxw();return e.KtG(u.onItemChange(r.target))}),e.qZA(),e.TgZ(40,"label",57),e._uU(41,"Molto Depresso"),e.qZA(),e.TgZ(42,"div",48),e._UZ(43,"div",51),e.qZA()()()(),e.TgZ(44,"div",7),e._uU(45,"E' Successo qualcosa di rilevante ?"),e.qZA(),e.TgZ(46,"div",45),e._UZ(47,"textarea",58),e.qZA()(),e.TgZ(48,"div",59)(49,"div",60)(50,"button",61),e._uU(51,"Salva "),e._UZ(52,"fa-icon",62),e.qZA()()()()()}if(2&a){const t=e.oxw();e.xp6(16),e.Q6J("ngModel",t.mood.value)("checked",!0),e.xp6(5),e.Q6J("ngModel",t.mood.value),e.xp6(6),e.Q6J("ngModel",t.mood.value),e.xp6(6),e.Q6J("ngModel",t.mood.value),e.xp6(6),e.Q6J("ngModel",t.mood.value),e.xp6(8),e.Q6J("ngModel",t.mood.ws)}}const S=function(){return["/dashboard"]},E=function(){return["/profile"]},J=function(a){return{display:a}},C=[{path:"",component:(()=>{class a{constructor(t,s,r,u,U,L,I){this.actionSheetCtrl=t,this.toastService=s,this.loadingCtrl=r,this.storage=u,this.moodService=U,this.httpService=L,this.modalCtrl=I,this.loaded=!1,this.displayStyle="none",this.user_data={f_name:"",l_name:"",pic:""},this.mood={value:0,ws:void 0},this.selectedEv={value:"",effective_datetime:"",warning_sign:""},this.eliminaMood=q=>(0,d.mG)(this,void 0,void 0,function*(){const k=yield this.actionSheetCtrl.create({header:"Sei sicuro?",buttons:[{text:"Si",role:"confirm"},{text:"No",role:"cancel"}]});k.present();const{role:Q}=yield k.onWillDismiss();"confirm"==Q?(this.moodService.deleteMood(q),this.ngOnInit()):this.toastService.presentToast("Felice che hai cambiato idea")})}ngOnInit(){this.loaded=!1,this.storage.get("user_data").then(t=>{this.user_data.f_name=t.f_name,this.user_data.l_name=t.l_name,this.user_data.pic=t.pic}),this.moodService.retrieveMood(),this.getMoods()}getMoods(){return(0,d.mG)(this,void 0,void 0,function*(){const t=yield this.storage.get("access_token").then(r=>r);this.httpService.get("mobile/api/last_10_mood",null,t).subscribe(r=>{this.elencoMoods=r[0].length>0&&r[0]}),this.loaded=!0})}onItemChange(t){console.log(" Value is : ",t.value)}cancel(){}onWillDismiss(t){}openModal(t){this.selectedEv=t,this.displayStyle="block"}closeModal(){this.displayStyle="none"}onSubmit(t){return(0,d.mG)(this,void 0,void 0,function*(){if(this.loaded=!1,console.log(t.value.selector),console.log(t.value.comment),0===t.value.selector.length)return this.toastService.presentToast("Devi selezionare un mood"),void(this.loaded=!0);const s=yield this.loadingCtrl.create({message:"Caricamento...",spinner:"circles"});s.present();let r={mood:t.value.selector,w_sign:"",ts:Date.now()};this.storage.store("my_mood",r),this.moodService.addMood(t.value.selector,t.value.comment),s.dismiss(),this.modal.dismiss(null,"cancel"),this.ngOnInit()})}}return a.\u0275fac=function(t){return new(t||a)(e.Y36(i.BX),e.Y36(g.k),e.Y36(i.HT),e.Y36(p.V),e.Y36(Z.f),e.Y36(h.O),e.Y36(i.IN))},a.\u0275cmp=e.Xpm({type:a,selectors:[["app-mood"]],viewQuery:function(t,s){if(1&t&&e.Gf(i.ki,5),2&t){let r;e.iGM(r=e.CRH())&&(s.modal=r.first)}},decls:48,vars:16,consts:[[1,"page-background"],[1,"container"],[1,"header"],[1,"row"],[1,"col-8"],[1,"back-btn",3,"routerLink"],["icon","angle-left"],[1,"title"],[1,"col-4","text-right"],[1,"profile-pic",3,"routerLink"],[1,"width-100",3,"src"],[1,"body"],[1,"chart-container"],[1,"col-7"],[1,"col-5","text-right"],[1,"badge"],[1,"main-chart"],[4,"ngIf"],[4,"ngFor","ngForOf"],["size","small","color","success","id","add-mood","expand","block"],["tabindex","-1","role","dialog",1,"modal",3,"ngStyle"],["role","document",1,"modal-dialog"],[1,"modal-content"],[1,"modal-header"],[1,"modal-title"],[1,"modal-body"],[1,"modal-footer"],["type","button",1,"btn","btn-danger",3,"click"],["trigger","add-mood",3,"willDismiss"],[2,"width","80px",3,"animated"],["slot","start"],[3,"animated"],[2,"width","80%",3,"animated"],[2,"width","60%",3,"animated"],[2,"width","30%",3,"animated"],[3,"src"],["fill","solid","color","primary",3,"click"],["name","search-circle-outline"],["fill","solid","size","small","color","danger",3,"click"],["name","trash-outline"],[3,"click"],[1,"ion-padding","page-background"],[1,"modern",3,"ngSubmit"],["form","ngForm"],[1,"steps","steps-box"],[1,"form-group"],["type","radio","id","mood_ottimo","name","selector","value","1","checked","checked",3,"ngModel","checked","change"],["for","mood_ottimo"],[1,"check"],["type","radio","id","mood_buono","value","2","name","selector",3,"ngModel","change"],["for","mood_buono"],[1,"inside"],["type","radio","value","3","id","mood_stabile","name","selector",3,"ngModel","change"],["for","mood_stabile"],["type","radio","id","mood_basso","name","selector","value","4",3,"ngModel","change"],["for","mood_basso"],["type","radio","id","mood_depresso","name","selector","value","5",3,"ngModel","change"],["for","mood_depresso"],["placeholder","Scrivere evento qui","rows","5","id","comment","name","comment",1,"form-control",3,"ngModel"],[1,"footer","steps"],[1,"left","text-center"],["type","submit",1,"btn","btn-primary","margin-top-30"],["icon","save"]],template:function(t,s){1&t&&(e._UZ(0,"app-sidebar"),e.TgZ(1,"ion-content",0)(2,"div",1)(3,"div",2)(4,"div",3)(5,"div",4)(6,"a",5),e._UZ(7,"fa-icon",6),e.qZA(),e.TgZ(8,"span",7),e._uU(9,"Il Mio Umore"),e.qZA()(),e.TgZ(10,"div",8)(11,"div",9),e._UZ(12,"img",10),e.qZA()()()(),e.TgZ(13,"div",11)(14,"div",12)(15,"div",3)(16,"div",13)(17,"div",7),e._uU(18,"Il Mio Umore"),e.qZA()(),e.TgZ(19,"div",14)(20,"div",15),e._uU(21,"Ultime 10 registrazioni"),e.qZA()()(),e.TgZ(22,"div",16),e.YNc(23,P,13,5,"ion-list",17),e.TgZ(24,"ion-list"),e.YNc(25,x,14,6,"ion-item",18),e.qZA()(),e.TgZ(26,"ion-button",19),e._uU(27,"AGGIUNGI UMORE"),e.qZA()()()(),e.TgZ(28,"div",20)(29,"div",21)(30,"div",22)(31,"div",23)(32,"h4",24),e._uU(33,"Dettaglio Umore"),e.qZA()(),e.TgZ(34,"div",25)(35,"p"),e._uU(36),e.ALo(37,"date"),e.qZA(),e.TgZ(38,"p"),e._uU(39),e.qZA(),e.TgZ(40,"p"),e._uU(41),e.qZA()(),e.TgZ(42,"div",26)(43,"button",27),e.NdJ("click",function(){return s.closeModal()}),e._uU(44," Chiudi "),e.qZA()()()()()(),e.TgZ(45,"ion-modal",28),e.NdJ("willDismiss",function(u){return s.onWillDismiss(u)}),e.YNc(46,D,53,7,"ng-template"),e.qZA(),e._UZ(47,"app-footerbtn")),2&t&&(e.xp6(6),e.Q6J("routerLink",e.DdM(12,S)),e.xp6(5),e.Q6J("routerLink",e.DdM(13,E)),e.xp6(1),e.s9C("src",s.user_data.pic,e.LSH),e.xp6(11),e.Q6J("ngIf",!s.loaded),e.xp6(2),e.Q6J("ngForOf",s.elencoMoods),e.xp6(3),e.Q6J("ngStyle",e.VKq(14,J,s.displayStyle)),e.xp6(8),e.hij("Data: ",e.xi3(37,9,s.selectedEv.effective_datetime,"dd/MM/yyyy H:mm:ss"),""),e.xp6(3),e.hij("Umore: ",s.selectedEv.value,""),e.xp6(2),e.hij("Eventi: ",s.selectedEv.warning_sign,""))},dependencies:[l.sg,l.O5,l.PC,o._Y,o.Fj,o._,o.JJ,o.JL,o.On,o.F,i.BJ,i.YG,i.Sm,i.W2,i.Gu,i.gu,i.Ie,i.Q$,i.q_,i.yh,i.CK,i.Bs,i.wd,i.sr,i.ki,i.YI,i.Fo,m.rH,y.U,b.k,A.BN,l.uU]}),a})()}];let f=(()=>{class a{}return a.\u0275fac=function(t){return new(t||a)},a.\u0275mod=e.oAB({type:a}),a.\u0275inj=e.cJS({imports:[m.Bz.forChild(C),m.Bz]}),a})();var c=n(5642);let O=(()=>{class a{}return a.\u0275fac=function(t){return new(t||a)},a.\u0275mod=e.oAB({type:a}),a.\u0275inj=e.cJS({imports:[l.ez,o.u5,i.Pc,f,c.K,A.uH]}),a})()},5014:(T,_,n)=>{n.d(_,{V:()=>d});var l=n(655);const i=(0,n(7423).fo)("Preferences",{web:()=>n.e(8359).then(n.bind(n,8359)).then(e=>new e.PreferencesWeb)});var m=n(8274);let d=(()=>{class e{constructor(){}store(p,Z){return(0,l.mG)(this,void 0,void 0,function*(){const h=btoa(escape(JSON.stringify(Z)));yield i.set({key:p,value:h})})}get(p){return(0,l.mG)(this,void 0,void 0,function*(){const Z=yield i.get({key:p});try{return JSON.parse(unescape(atob(Z.value)))}catch(h){return!1}})}removeStorageItem(p){return(0,l.mG)(this,void 0,void 0,function*(){yield i.remove({key:p})})}clear(){return(0,l.mG)(this,void 0,void 0,function*(){yield i.clear()})}}return e.\u0275fac=function(p){return new(p||e)},e.\u0275prov=m.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})()},4465:(T,_,n)=>{n.d(_,{k:()=>m});var l=n(655),o=n(8274),i=n(8058);let m=(()=>{class d{constructor(g){this.toastController=g}presentToast(g){return(0,l.mG)(this,void 0,void 0,function*(){yield(yield this.toastController.create({message:g,duration:2e3})).present()})}}return d.\u0275fac=function(g){return new(g||d)(o.LFG(i.yF))},d.\u0275prov=o.Yz7({token:d,factory:d.\u0275fac,providedIn:"root"}),d})()}}]);