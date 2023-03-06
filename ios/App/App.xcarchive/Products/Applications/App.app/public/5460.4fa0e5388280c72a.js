"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[5460],{5642:(_,u,t)=>{t.d(u,{K:()=>c});var i=t(6895),o=t(2216),r=t(8274);let c=(()=>{class n{}return n.\u0275fac=function(g){return new(g||n)},n.\u0275mod=r.oAB({type:n}),n.\u0275inj=r.cJS({imports:[i.ez,o.uH]}),n})()},1360:(_,u,t)=>{t.d(u,{U:()=>r});var i=t(8274),o=t(2216);let r=(()=>{class c{constructor(){}ngOnInit(){}}return c.\u0275fac=function(a){return new(a||c)},c.\u0275cmp=i.Xpm({type:c,selectors:[["app-footerbtn"]],decls:4,vars:0,consts:[[1,"footer-menu-btn"],["icon","bars"],[1,"footer-menu-close-btn"],["icon","times"]],template:function(a,g){1&a&&(i.TgZ(0,"a",0),i._UZ(1,"fa-icon",1),i.qZA(),i.TgZ(2,"a",2),i._UZ(3,"fa-icon",3),i.qZA())},dependencies:[o.BN]}),c})()},9201:(_,u,t)=>{t.d(u,{k:()=>U});var i=t(6916),o=t(8274),r=t(7469),c=t(5014),n=t(6895),a=t(2216);const g=function(){return["/dashboard"]},l=function(){return["/mood"]},m=function(){return["/pills"]},Z=function(){return["/calendar"]},C=function(){return["/medico"]},A=function(){return["/diario"]},T=function(){return["/files"]},P=function(){return["/report"]},M=function(){return["/profile"]},e=function(){return["/impostazioni"]},p=function(){return["/aboutus"]},d=function(){return["/updates"]};let U=(()=>{class f{constructor(v,s){this.router=v,this.storageService=s,this.url1="",this.appVersion=i.N.appVersion}loginPage(){this.storageService.clear(),this.router.navigate(["/login"])}ngOnInit(){this.url1=this.router.url}}return f.\u0275fac=function(v){return new(v||f)(o.Y36(r.F0),o.Y36(c.V))},f.\u0275cmp=o.Xpm({type:f,selectors:[["app-sidebar"]],decls:73,vars:37,consts:[[1,"main-menu-box"],[1,"header"],[1,"container"],[1,"logo"],["src","../../../assets/images/logo.png",1,"w-100"],[1,"subtitle"],[1,"nav","flex-column","flex-nowrap","main-menu","overflow-hidden"],[1,"nav-item"],[1,"nav-link",3,"routerLink","ngClass"],["icon","dashboard"],[1,"nav-link",3,"ngClass","routerLink"],["icon","smile-beam"],[1,"submenu","nav-link",3,"routerLink","ngClass"],["icon","pills"],["icon","calendar"],["icon","user-doctor"],["icon","clipboard"],["icon","file"],["icon","list-numeric"],["icon","user-astronaut"],["icon","gears"],["icon","info-circle"],["icon","adjust"],[1,"singout-btn"],[3,"click"],["icon","arrow-right"]],template:function(v,s){1&v&&(o.TgZ(0,"aside",0)(1,"div",1)(2,"div",2)(3,"div",3),o._UZ(4,"img",4),o.qZA(),o.TgZ(5,"div",5),o._uU(6),o.qZA()()(),o.TgZ(7,"div",2)(8,"ul",6)(9,"li",7)(10,"a",8)(11,"span"),o._UZ(12,"fa-icon",9),o._uU(13," Dashboard"),o.qZA()()(),o.TgZ(14,"li",7)(15,"a",10)(16,"span"),o._UZ(17,"fa-icon",11),o._uU(18," Umore"),o.qZA()()(),o.TgZ(19,"li",7)(20,"a",12)(21,"span"),o._UZ(22,"fa-icon",13),o._uU(23," Farmaci "),o.qZA()()(),o.TgZ(24,"li",7)(25,"a",8)(26,"span"),o._UZ(27,"fa-icon",14),o._uU(28," Calendario"),o.qZA()()(),o.TgZ(29,"li",7)(30,"a",8)(31,"span"),o._UZ(32,"fa-icon",15),o._uU(33," Medico"),o.qZA()()(),o.TgZ(34,"li",7)(35,"a",8)(36,"span"),o._UZ(37,"fa-icon",16),o._uU(38," Diario"),o.qZA()()(),o.TgZ(39,"li",7)(40,"a",8)(41,"span"),o._UZ(42,"fa-icon",17),o._uU(43," File Condivisi"),o.qZA()()(),o.TgZ(44,"li",7)(45,"a",8)(46,"span"),o._UZ(47,"fa-icon",18),o._uU(48," Report"),o.qZA()()(),o.TgZ(49,"li",7)(50,"a",8)(51,"span"),o._UZ(52,"fa-icon",19),o._uU(53," Profilo"),o.qZA()()(),o.TgZ(54,"li",7)(55,"a",8)(56,"span"),o._UZ(57,"fa-icon",20),o._uU(58," Impostazioni"),o.qZA()()(),o.TgZ(59,"li",7)(60,"a",8)(61,"span"),o._UZ(62,"fa-icon",21),o._uU(63," Questa App"),o.qZA()()(),o.TgZ(64,"li",7)(65,"a",8)(66,"span"),o._UZ(67,"fa-icon",22),o._uU(68," Aggiornamenti APP"),o.qZA()()()()(),o.TgZ(69,"div",23)(70,"a",24),o.NdJ("click",function(){return s.loginPage()}),o._uU(71,"Log Out "),o._UZ(72,"fa-icon",25),o.qZA()()()),2&v&&(o.xp6(6),o.hij("Versione: ",s.appVersion,""),o.xp6(4),o.Q6J("routerLink",o.DdM(25,g))("ngClass","/dashboard"===s.url1?"active ":""),o.xp6(5),o.Q6J("ngClass","/mood"===s.url1?"active":"")("routerLink",o.DdM(26,l)),o.xp6(5),o.Q6J("routerLink",o.DdM(27,m))("ngClass","/pills"===s.url1||"/pills"===s.url1?"active ":""),o.xp6(5),o.Q6J("routerLink",o.DdM(28,Z))("ngClass","/calendar"===s.url1?"active":""),o.xp6(5),o.Q6J("routerLink",o.DdM(29,C))("ngClass","/medico"===s.url1?"active":""),o.xp6(5),o.Q6J("routerLink",o.DdM(30,A))("ngClass","/diario"===s.url1?"active":""),o.xp6(5),o.Q6J("routerLink",o.DdM(31,T))("ngClass","/files"===s.url1?"active":""),o.xp6(5),o.Q6J("routerLink",o.DdM(32,P))("ngClass","/report"===s.url1?"active":""),o.xp6(5),o.Q6J("routerLink",o.DdM(33,M))("ngClass","/profile"===s.url1?"active":""),o.xp6(5),o.Q6J("routerLink",o.DdM(34,e))("ngClass","/impostazioni"===s.url1?"active":""),o.xp6(5),o.Q6J("routerLink",o.DdM(35,p))("ngClass","/aboutus"===s.url1?"active":""),o.xp6(5),o.Q6J("routerLink",o.DdM(36,d))("ngClass","/updates"===s.url1?"active":""))},dependencies:[n.mk,a.BN,r.rH]}),f})()},5460:(_,u,t)=>{t.r(u),t.d(u,{ImpostazioniPageModule:()=>M});var i=t(6895),o=t(433),r=t(8058),c=t(7469),n=t(8274),a=t(1360),g=t(9201),l=t(2216);const m=function(){return["/dashboard"]},Z=function(){return["/profile"]},A=[{path:"",component:(()=>{class e{constructor(){}ngOnInit(){}changepasswordPage(){}}return e.\u0275fac=function(d){return new(d||e)},e.\u0275cmp=n.Xpm({type:e,selectors:[["app-impostazioni"]],decls:73,vars:4,consts:[[1,"page-background"],[1,"container"],[1,"header"],[1,"row"],[1,"col-8"],[1,"back-btn",3,"routerLink"],["icon","angle-left"],[1,"title"],[1,"col-4","text-right"],[1,"profile-pic",3,"routerLink"],["src","../../../assets/images/user-profile.jpg",1,"width-100"],[1,"body"],[1,"setting-box"],[1,"label"],[1,"value"],[1,"edit-btn"],[1,"fas","fa-pencil-alt"],[1,"bigtitle"],[1,"edit-btn",3,"click"],[1,"toggle-btn","toggle-btn1"],["id","cb5","type","checkbox",1,"tgl","tgl-flip"],["data-tg-off","Dark","data-tg-on","Light","for","cb5",1,"tgl-btn"],[1,"toggle-btn","toggle-btn2"],["id","cb6","type","checkbox",1,"tgl","tgl-flip"],["data-tg-off","Off","data-tg-on","On","for","cb6",1,"tgl-btn"],[1,"delete-btn"]],template:function(d,U){1&d&&(n._UZ(0,"app-sidebar"),n.TgZ(1,"ion-content",0)(2,"div",1)(3,"div",2)(4,"div",3)(5,"div",4)(6,"a",5),n._UZ(7,"fa-icon",6),n.qZA(),n.TgZ(8,"span",7),n._uU(9,"Impostazioni"),n.qZA()(),n.TgZ(10,"div",8)(11,"div",9),n._UZ(12,"img",10),n.qZA()()()(),n.TgZ(13,"div",11)(14,"div",12)(15,"div",13),n._uU(16,"Name"),n.qZA(),n.TgZ(17,"div",14),n._uU(18,"John Doe"),n.qZA(),n.TgZ(19,"a",15),n._UZ(20,"i",16),n.qZA()(),n.TgZ(21,"div",12)(22,"div",13),n._uU(23,"Email"),n.qZA(),n.TgZ(24,"div",14),n._uU(25,"John@gmail.com"),n.qZA(),n.TgZ(26,"a",15),n._UZ(27,"i",16),n.qZA()(),n.TgZ(28,"div",12)(29,"div",13),n._uU(30,"Mobile No."),n.qZA(),n.TgZ(31,"div",14),n._uU(32,"+1 340-2555-3456 "),n.qZA(),n.TgZ(33,"a",15),n._UZ(34,"i",16),n.qZA()(),n.TgZ(35,"div",17),n._uU(36," Account Setting "),n.qZA(),n.TgZ(37,"div",12)(38,"div",13),n._uU(39,"Password"),n.qZA(),n.TgZ(40,"div",14),n._uU(41,"- - - - - -"),n.qZA(),n.TgZ(42,"a",18),n.NdJ("click",function(){return U.changepasswordPage()}),n._UZ(43,"i",16),n.qZA()(),n.TgZ(44,"div",12)(45,"div",13),n._uU(46,"Template"),n.qZA(),n.TgZ(47,"div",14),n._uU(48,"Dark"),n.qZA(),n.TgZ(49,"div",19),n._UZ(50,"input",20)(51,"label",21),n.qZA()(),n.TgZ(52,"div",17),n._uU(53," Privacy Setting "),n.qZA(),n.TgZ(54,"div",12)(55,"div",13),n._uU(56,"Push Notification"),n.qZA(),n.TgZ(57,"div",14),n._uU(58,"Off"),n.qZA(),n.TgZ(59,"div",22),n._UZ(60,"input",23)(61,"label",24),n.qZA()(),n.TgZ(62,"div",12)(63,"div",13),n._uU(64,"Access Location"),n.qZA(),n.TgZ(65,"div",14),n._uU(66,"USA"),n.qZA(),n.TgZ(67,"a",18),n.NdJ("click",function(){return U.changepasswordPage()}),n._UZ(68,"i",16),n.qZA()(),n.TgZ(69,"div",12)(70,"a",25),n._uU(71,"Delete Account"),n.qZA()()()()(),n._UZ(72,"app-footerbtn")),2&d&&(n.xp6(6),n.Q6J("routerLink",n.DdM(2,m)),n.xp6(5),n.Q6J("routerLink",n.DdM(3,Z)))},dependencies:[r.W2,r.YI,r.Fo,c.rH,a.U,g.k,l.BN]}),e})()}];let T=(()=>{class e{}return e.\u0275fac=function(d){return new(d||e)},e.\u0275mod=n.oAB({type:e}),e.\u0275inj=n.cJS({imports:[c.Bz.forChild(A),c.Bz]}),e})();var P=t(5642);let M=(()=>{class e{}return e.\u0275fac=function(d){return new(d||e)},e.\u0275mod=n.oAB({type:e}),e.\u0275inj=n.cJS({imports:[i.ez,o.u5,r.Pc,T,P.K,l.uH]}),e})()},5014:(_,u,t)=>{t.d(u,{V:()=>n});var i=t(655);const r=(0,t(7423).fo)("Preferences",{web:()=>t.e(8359).then(t.bind(t,8359)).then(a=>new a.PreferencesWeb)});var c=t(8274);let n=(()=>{class a{constructor(){}store(l,m){return(0,i.mG)(this,void 0,void 0,function*(){const Z=btoa(escape(JSON.stringify(m)));yield r.set({key:l,value:Z})})}get(l){return(0,i.mG)(this,void 0,void 0,function*(){const m=yield r.get({key:l});try{return JSON.parse(unescape(atob(m.value)))}catch(Z){return!1}})}removeStorageItem(l){return(0,i.mG)(this,void 0,void 0,function*(){yield r.remove({key:l})})}clear(){return(0,i.mG)(this,void 0,void 0,function*(){yield r.clear()})}}return a.\u0275fac=function(l){return new(l||a)},a.\u0275prov=c.Yz7({token:a,factory:a.\u0275fac,providedIn:"root"}),a})()}}]);