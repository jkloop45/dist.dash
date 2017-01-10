webpackJsonp([3,1],{0:function(e,t,o){e.exports=o(41)},23:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(e){return function(t){o.e(0,function(o){var n=[o(625)(e)];t.apply(null,n)}.bind(this))}},a={"/dashboard":{icon:"dashboard",name:"dashboard",label:"控制台",hide:!1,component:n("./components/page/Dashboard.vue")},"/ide":{icon:"connectdevelop",label:"集成开发环境",name:"ide",hide:!1,component:n("./components/page/ide/Renew.vue")},"/apps":{icon:"laptop",label:"应用管理",isShowSubMenu:!1,hide:!1,component:{template:"<router-view></router-view>"},subRoutes:{"/new":{name:"newapp",label:"快速部署",hide:!1,component:n("./components/page/apps/NewApp.vue")},"/list":{name:"applist",label:"我的应用",hide:!1,component:n("./components/page/apps/Applist.vue")},"/new/:imageId":{name:"newappwithimageid",label:"创建应用",hide:!0,component:n("./components/page/apps/NewApp.vue")},"/detail/:containerId":{name:"appdetail",label:"应用详情",hide:!0,component:n("./components/page/apps/Details.vue")},"/detail":{name:"appdetail_without_id",label:"应用详情",hide:!0,component:n("./components/page/apps/Details.vue")},"/volumes":{name:"volumes",label:"我的数据卷",hide:!1,component:n("./components/page/services/Volumes.vue")},"/volumes/:volumeId":{name:"volumesdetails",label:"数据卷详情",hide:!0,component:n("./components/page/services/volumes/VolumesDetails.vue")}}},"/services":{icon:"briefcase",label:"镜像服务",isShowSubMenu:!1,hide:!1,component:{template:"<router-view></router-view>"},subRoutes:{"/list":{name:"serviceslist",label:"镜像列表",hide:!1,component:n("./components/page/services/ServicesList.vue")},"/volumes/new":{name:"newvolumes",label:"创建数据卷",hide:!0,component:n("./components/page/services/NewVolumes.vue")}}},"/accounts":{name:"accounts",label:"用户中心",icon:"cog",isShowSubMenu:!1,hide:!1,component:{template:"<router-view></router-view>"},subRoutes:{"/account":{name:"account",label:"账户信息",hide:!0,component:n("./components/page/accounts/Account.vue")},"/profile":{name:"profile",label:"个人信息",hide:!1,component:n("./components/page/accounts/Profile.vue")},"/orders":{name:"orders",label:"交易记录",hide:!1,component:n("./components/page/accounts/Orders.vue")},"/messages":{name:"messages",label:"我的消息",hide:!1,component:n("./components/page/accounts/Messages.vue")},"/teams":{name:"teams",label:"我的组织",hide:!0,component:n("./components/page/accounts/Team.vue")},"/oauth":{name:"oauth",label:"登录授权",hide:!0,component:n("./components/page/accounts/Oauth.vue")},"/login":{name:"login",label:"登录",hide:!0,component:n("./components/page/accounts/Login.vue")},"/signup":{name:"signup",label:"注册",hide:!0,component:n("./components/page/accounts/Signup.vue")},"/register":{name:"signupa",label:"注册",hide:!0,component:n("./components/page/accounts/Register.vue")}}},"/components":{icon:"laptop",label:"组件",isShowSubMenu:!1,hide:!0,component:{template:"<router-view></router-view>"},subRoutes:{"/buttons":{name:"Buttons",label:"Buttons",hide:!1,component:n("./components/page/components/Buttons.vue")},"/icons":{name:"Icons",label:"Icons",hide:!1,component:n("./components/page/components/Icons.vue")},"/content":{name:"content",label:"Content",hide:!1,component:n("./components/page/components/Content.vue")},"/form":{name:"form",label:"Form",hide:!1,component:n("./components/page/components/Form.vue")},"/file-input":{name:"file-input",label:"File input",hide:!1,component:n("./components/page/components/FileInput.vue")},"/tab":{name:"tab",label:"Tab",hide:!1,component:n("./components/page/components/Tabs.vue")},"/modal":{name:"modal",label:"Modal",hide:!1,component:n("./components/page/components/Modals.vue")}}},"/grid":{isShowSubMenu:!1,icon:"table",name:"grid",label:"布局",hide:!0,component:{template:"<router-view></router-view>"},subRoutes:{"/columns":{name:"columns",label:"Columns",hide:!1,component:n("./components/page/grids/Columns.vue")},"/tile":{name:"tile",label:"Tile",hide:!1,component:n("./components/page/grids/Tile.vue")},"/table":{name:"table",label:"Table",hide:!1,component:n("./components/page/grids/Table.vue")},"/flex":{name:"flex",label:"Flex",hide:!1,component:n("./components/page/grids/Flex.vue")}}},"/charts":{label:"图表",icon:"bar-chart",name:"charts",isShowSubMenu:!1,hide:!0,component:{template:"<router-view></router-view>"},subRoutes:{"/pie":{label:"Pie",name:"pie",hide:!1,component:n("./components/page/charts/Pie.vue")},"/bar":{label:"Bar",name:"bar",hide:!1,component:n("./components/page/charts/Bar.vue")},"/line":{label:"Line",name:"line",hide:!1,component:n("./components/page/charts/Line.vue")},"/radar":{label:"Radar",name:"radar",hide:!1,component:n("./components/page/charts/Radar.vue")},"/doughnut":{label:"Doughnut",name:"doughnut",hide:!1,component:n("./components/page/charts/Doughnut.vue")},"/polar":{label:"Polar Area",name:"polar",hide:!1,component:n("./components/page/charts/PolarArea.vue")}}}};t.menu=a},27:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t["default"]={alert:function(e,t){window.noty=window.noty||[];var o=window.noty.length-1;t=t||"success";var n=Date.parse(new Date),a=document.body,i=document.createElement("div");i.className="notification noty animated bounceIn is-"+t,i.id="noty-"+n,i.innerHTML="<button onclick='javascript:var noty=document.getElementById(\"noty-"+n+'");noty.className="notification noty animated bounceOut is-'+t+' ";window.noty.splice('+o+", 1);setTimeout(function() {noty.parentNode.removeChild(noty)}, 2000)' class='delete'></button>"+e,window.noty.push(i),a.appendChild(i),setTimeout(function(){i.className="notification noty animated bounceOut is-"+t,window.noty.splice(o,1),setTimeout(function(){i.parentNode.removeChild(i)},3e3)},3e3)},error:function(e){this.alert(e,"danger")}}},28:function(e,t){"use strict";function o(e,t){return"undefined"==typeof t?e:e+"="+encodeURIComponent(null===t?"":String(t))}function n(e){var t=[];for(var n in e){n=encodeURIComponent(n);var a=e[n];if(a&&a.constructor==Array){for(var i,s=[],r=0,l=a.length;r<l;r++)i=a[r],s.push(o(n,i));t=t.concat(s)}else t.push(o(n,a))}return t.join("&")}e.exports={toParam:n}},30:function(e,t){"use strict";e.exports={init:function(e,t){var o=e,n=t;return{info:function(e){return o.$http.get(n+"users/volume/"+e.user)}}}}},40:function(e,t,o){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}var a=o(90),i=n(a);e.exports={vue:void 0,init:function(e){this.vue=e,this.vue.filter("dockerNamefilter",function(e){if(e)return e.replace("/","")}),this.vue.filter("hostConfig",function(e){if(e&&"object"==("undefined"==typeof e?"undefined":(0,i["default"])(e))&&e.length>0)return e[0].HostPort}),this.vue.filter("memory",function(e){if(e){var t=parseInt(e)/parseInt(1048576);return t>1024?t=t/1024+"GB":t+="MB",t}}),this.vue.filter("dockerStatus",function(e){if(e)return 1==e?"运行中":"已停止"}),this.vue.filter("appDBInfo",function(e){return""==e?"无数据库信息":e}),this.vue.filter("dateFormat",function(e,t){if(e){e=new Date(e);var o={"M+":e.getMonth()+1,"d+":e.getDate(),"h+":e.getHours(),"m+":e.getMinutes(),"s+":e.getSeconds(),"q+":Math.floor((e.getMonth()+3)/3),S:e.getMilliseconds()};/(y+)/.test(t)&&(t=t.replace(RegExp.$1,(e.getFullYear()+"").substr(4-RegExp.$1.length)));for(var n in o)new RegExp("("+n+")").test(t)&&(t=t.replace(RegExp.$1,1==RegExp.$1.length?o[n]:("00"+o[n]).substr((""+o[n]).length)));return t}})},get:function(e){return this.vue.filter(e)}}},41:function(e,t,o){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}function a(e){if(document.cookie.length>0){var t=document.cookie.indexOf(e+"=");if(t!=-1){t=t+e.length+1;var o=document.cookie.indexOf(";",t);return o==-1&&(o=document.cookie.length),unescape(document.cookie.substring(t,o))}}return""}var i=o(4),s=n(i),r=o(604),l=n(r),c=o(63),u=n(c),d=o(23),p=o(47),m=n(p),f=o(27),v=n(f),h=o(40),g=n(h);o(411);var b=o(66),w=n(b);s["default"].component("loading",w["default"]),"localhost"!=document.domain&&(document.domain="gospely.com"),document.title="控制面板 - Gospel 容器云",window.notification=v["default"],window.baseUrl="http://"+window.location.host,s["default"].use(o(603)),s["default"].http.options.root="http://api.gospely.com/",s["default"].http.headers["x-gospely"]="moha",s["default"].http.headers.withCredentials=!0,""!=a("token")&&void 0!=a("token")&&(s["default"].http.headers.common.Authorization=a("token")),s["default"].use(l["default"]);var x=new l["default"]({hashbang:!0,history:!1,saveScrollPosition:!0,transitionOnLoad:!0,linkActiveClass:"active"});window.router=x,window.currentUser=localStorage.getItem("user"),window.currentUserName=localStorage.getItem("userName"),x.map(d.menu),x.redirect({"*":"/dashboard"}),x.start(u["default"],"app"),x.beforeEach(function(e){document.title=e.to.label+" | 控制面板 - Gospel 容器云";e.from;"appdetail"==e.from.name&&clearInterval(window.monitorInterval),e.next()}),x.afterEach(function(){var e="http://"+window.location.host,t=e+"/#!/accounts/login",o=e+"/#!/accounts/register";window.location.href==t||window.location.href==o||window.location.href==t+"?where=fromIde"?""!=a("token")&&null!=a("token")&&void 0!=a&&(window.location.href=e):""!=a("token")&&null!=a("token")&&void 0!=a||(window.location.href=t)}),g["default"].init(s["default"]),new s["default"]({el:"title",data:{title:"Gospel - 控制台"},ready:function(){var e=m["default"].init(this);window.services=e}}),window.Vue=s["default"]},42:function(e,t,o){"use strict";var n=o(28),a=o(43);e.exports={init:function(e,t){var o=a.init(e,t);return{create:function(e){return o.post(e)},list:function(e){var t=n.toParam(e.param);e.url;return null!=t&&void 0!=t&&""!=t&&(e.url=e.url+"?"+t),console.log(t),o.get(e)},"delete":function(e){e.url=e.url+"/"+e.param.id,o["delete"](e)},getOne:function(e){e.url=e.url+"/"+e.param.id,o.get(e)},update:function(e){o.put(e)},count:function(e){var t=n.toParam(e.param);e.url;null!=t&&void 0!=t&&""!=t&&(e.url=e.url+"/number?"+t),console.log(t),o.get(e)},containerOperate:function(e){e.url=e.url+"/"+e.param.containerName,o.get(e)},validator:function(e){var t=n.toParam(e.param);e.url;return null!=t&&void 0!=t&&""!=t&&(e.url=e.url+"/validator?"+t),console.log(t),o.get(e)}}}}},43:function(e,t,o){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}var a=o(243),i=n(a),s=o(245),r=n(s),l=o(244),c=n(l),u=o(27)["default"];e.exports={init:function(e,t){function o(e){switch(e.method){case"post":return a.$http.post(s+e.url,e.param);case"get":return a.$http.get(s+e.url);case"delete":return a.$http["delete"](s+e.url);case"put":return a.$http.put(s+e.url,e.param)}}function n(e){function t(e){return"[object Array]"===Object.prototype.toString.call(e)}var n=document.getElementById("global-loader"),a=0;n.style.display="block";var s=setInterval(function(){a+=10,n.setAttribute("value",a),a>=60&&clearInterval(s)},200);null!=e.cb&&void 0!=e.cb?o(e).then(function(t){var o=t.data;200==t.status&&(o.code==-100&&(u.error(o.message),window.location.href=window.baseUrl+"/#!/accounts/login"),o.code==-101&&u.error(o.message)),e.cb(t)},function(e){u.alert("服务器异常","danger"),n.setAttribute("value",100),n.style.display="none"}):o(e).then(function(o){if(n.setAttribute("value",100),n.style.display="none",200===o.status){var a=o.data;if(1==a.code&&"Done!"!=a)if(void 0!=a.message&&u.alert(a.message),t(a.fields))null==e.ctx[e.target]||void 0==e.ctx[e.target]?(e.ctx.$data.all=a.all,e.ctx.fields=a.fields):(console.log("target"+e.target),void 0!=e.ctx.$data[e.all]&&(e.ctx.$data[e.all]=a.all),e.ctx[e.target]=a.fields);else for(var s in a.fields)"password"!=s&&"all"!=s&&"cur"!=s&&(0,c["default"])(e.ctx.$data,s)&&(0,r["default"])(e.ctx.$data,s,(0,i["default"])(a.fields,s));a.code===-100&&(u.alert(a.message,"danger"),setTimeout(function(){localStorage.removeItem("token"),document.cookie="token=; expires=Thu, 01 Jan 1970 00:00:00 GMT",document.cookie="user=; expires=Thu, 01 Jan 1970 00:00:00 GMT",window.location.href=window.baseUrl+"/#!/accounts/login"},1e3)),null!=e.msg&&void 0!=e.msg&&u.alert(e.msg.success),e.reload&&e.reload(e.ctx.$data.cur),500===e.code&&u.alert(a.message,"danger"),a.code===-1&&u.alert(a.message,"danger")}else null!=e.msg&&void 0!=e.msg&&u.alert(e.msg.failed,"danger"),u.alert("服务器繁忙，请重试"),e.reload&&(console.log("reload"),console.log("data cur"+e.ctx.$data.cur),console.log("data"+a.cur),e.reload(e.ctx.$data.cur))},function(t){e.reload&&(console.log("reload"),void 0!=e.ctx.$data.cur?e.reload(e.ctx.$data.cur):e.reload(),e.reload(e.ctx.$data.cur)),u.alert("服务器异常","danger")})}var a=e,s=t;return{get:function(e){e.method="get",n(e)},post:function(e){e.method="post",n(e)},"delete":function(e){e.method="delete",n(e)},put:function(e){e.method="put",n(e)}}}}},44:function(e,t,o){"use strict";var n=o(28);e.exports={init:function(e,t){var o=e,a=t;return{order:function(e){return o.$http.post(a+"orders/order",e)},getOne:function(e){return o.$http.get(a+"orders",{creator:e})},list:function(e){return console.log(e.status),console.log(n.toParam(e)),o.$http.get(a+"orders?"+n.toParam(e))},"delete":function(e){}}}}},45:function(e,t){"use strict";e.exports={init:function(e,t){var o=e,n=t;return{create:function(e){return o.$http.post(n+"teams",e)},list:function(e){return console.log(e),o.$http.get(n+"teams",{creator:e})},"delete":function(e){return console.log(e),o.$http["delete"](n+"teams/"+e)}}}}},46:function(e,t){"use strict";e.exports={init:function(e,t){var o=e,n=t;return{userInfo:function(e){return console.log(e),o.$http.get(n+"users/"+e)},updatePwd:function(e){return console.log(e),o.$http.put(n+"users",e)},uploadHead:function(e){return o.$http.post(n+"users/photo",e)},register:function(e){return o.$http.post(n+"users/register",e)},login:function(e){return o.$http.post(n+"users/login",e)},getCode:function(e){return o.$http.get(n+"users/code")},sendEmailCode:function(e){return o.$http.get(n+"users/email/code?email="+e.email)},confirmVerifyEmail:function(e){return o.$http.post(n+"users/verifyemailcode",e)},sendPhoneCode:function(e){return o.$http.get(n+"users/phone/code?phone="+e.phone)},confirmVerifyPhone:function(e){return o.$http.post(n+"users/verifyphonecode",e)}}}}},47:function(e,t,o){"use strict";var n=o(46),a=o(45),i=o(30),s=o(30),s=o(44),r=o(42),l={instance:void 0,baseUrl:"http://api.gospely.com/"};e.exports={init:function(e){l.instance=e;l.instance.$http.get;return{UserService:n.init(l.instance,l.baseUrl),TeamService:a.init(l.instance,l.baseUrl),VolumeService:i.init(l.instance,l.baseUrl),OrderService:s.init(l.instance,l.baseUrl),Common:r.init(l.instance,l.baseUrl)}}}},63:function(e,t,o){var n,a;o(418),n=o(163),a=o(522),e.exports=n||{},e.exports.__esModule&&(e.exports=e.exports["default"]),a&&(("function"==typeof e.exports?e.exports.options||(e.exports.options={}):e.exports).template=a)},64:function(e,t,o){var n,a;o(424),n=o(165),a=o(524),e.exports=n||{},e.exports.__esModule&&(e.exports=e.exports["default"]),a&&(("function"==typeof e.exports?e.exports.options||(e.exports.options={}):e.exports).template=a)},65:function(e,t,o){var n,a;o(419),n=o(166),a=o(525),e.exports=n||{},e.exports.__esModule&&(e.exports=e.exports["default"]),a&&(("function"==typeof e.exports?e.exports.options||(e.exports.options={}):e.exports).template=a)},66:function(e,t,o){var n,a;a=o(536),e.exports=n||{},e.exports.__esModule&&(e.exports=e.exports["default"]),a&&(("function"==typeof e.exports?e.exports.options||(e.exports.options={}):e.exports).template=a)},78:function(e,t,o){var n,a;o(422),n=o(231),a=o(586),e.exports=n||{},e.exports.__esModule&&(e.exports=e.exports["default"]),a&&(("function"==typeof e.exports?e.exports.options||(e.exports.options={}):e.exports).template=a)},163:function(e,t,o){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var a=o(65),i=n(a),s=o(64),r=n(s);t["default"]={data:function(){return{collapsed:!1,hiddened:!1,loaderProgress:0,isValidator:localStorage.getItem("isActive")}},ready:function(){this.appMainBody=this.$el.getElementsByClassName("app-main-body")[0]},watch:{"$route.name":{handler:function(e,t){console.log("older: %s,new: %s",e,t)}}},methods:{validationEmail:function(){this.$router.replace("/accounts/profile")}},components:{HeaderBar:r["default"],"side-navi":i["default"]}}},165:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t["default"]={props:{hiddened:{required:!0,type:Boolean},collapsed:{required:!0,type:Boolean}},data:function(){return{iconHiddened:!0}},methods:{signOut:function(){localStorage.removeItem("token"),document.cookie="token=; expires=Thu, 01 Jan 1970 00:00:00 GMT",document.cookie="user=; expires=Thu, 01 Jan 1970 00:00:00 GMT",this.$router.go("/accounts/login")},toggleMenu:function(){this.hiddened=!this.hiddened}},ready:function(){}}},166:function(e,t,o){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var a=o(23),i=o(78),s=n(i);t["default"]={props:{collapsed:{required:!0,type:Boolean}},data:function(){return{menu:a.menu}},methods:{signOut:function(){localStorage.removeItem("token"),document.cookie="token=; expires=Thu, 01 Jan 1970 00:00:00 GMT",document.cookie="user=; expires=Thu, 01 Jan 1970 00:00:00 GMT",this.$router.go("/accounts/login")},toggleCollapse:function(){this.collapsed=!this.collapsed}},components:{navi:s["default"]}}},231:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t["default"]={name:"navi",props:{model:{type:Object,required:!0,"default":function(){return{}}},collapsed:{type:Boolean,required:!0}},data:function(){return{}},methods:{toggleShowSubMenu:function(e,t){e.subRoutes&&(e.isShowSubMenu=!e.isShowSubMenu,this.collapsed=!this.collapsed,t.preventDefault(),t.stopPropagation()),e.subRoutes&&this.collapsed&&(this.collapsed=!this.collapsed)}}}},411:function(e,t){},418:function(e,t){},419:function(e,t){},422:function(e,t){},424:function(e,t){},496:function(e,t,o){e.exports=o.p+"fonts/fontawesome-webfont.25a3241.eot"},497:function(e,t,o){e.exports=o.p+"fonts/fontawesome-webfont.25a3241.eot"},498:function(e,t,o){e.exports=o.p+"fonts/fontawesome-webfont.1dc35d2.ttf"},499:function(e,t,o){e.exports=o.p+"fonts/fontawesome-webfont.e6cf7c6.woff2"},500:function(e,t,o){e.exports=o.p+"fonts/fontawesome-webfont.c8ddf1e.woff"},511:function(e,t,o){e.exports=o.p+"static/img/fontawesome-webfont.d7c6390.svg"},522:function(e,t){e.exports=' <div id=app :class="{\'collapsed\':collapsed}"> <div class=validation-email @click=validationEmail v-show=isValidator> <p>请尽快验证邮箱! 点击重新发送验证邮件</p> </div> <side-navi :collapsed.sync=collapsed :class="{\'hiddened\':hiddened}"></side-navi> <progress id=global-loader v-show=false class="progress is-info" style="position: fixed!important;left: 0px;z-index: 65555;width: 100%;height: 4px" value={{loaderProgress}} max=100></progress> <section :class="[\'app-main\',{\'body-hiddened\':hiddened}]"> <div class=app-main-header> <header-bar :hiddened.sync=hiddened :collapsed.sync=collapsed></header-bar> </div> <div class=app-main-body> <div class=container> <router-view></router-view> </div> </div> </section> </div> '},524:function(e,t){e.exports=" <nav class=\"my-nav header-bar\"> <div class=my-nav-left> <i v-bind:class=\"['fa','fa-angle-right',{'isOpen':hiddened},{'iconHiddened':collapsed}]\" @click=toggleMenu></i> </div> <div class=my-nav-center> <a class=my-nav-item href=https://github.com/Gospely> <span class=icon> <i class=\"fa fa-wechat\"></i> </span> </a> <a class=my-nav-item href=https://github.com/Gospely> <span class=icon> <i class=\"fa fa-weibo\"></i> </span> </a> </div> <div id=nav-menu class=my-nav-right> <a class=my-nav-item @click=signOut()> 退出 </a> </div> </nav> "},525:function(e,t){e.exports=' <div :class="[\'side-bar\']"> <div class=header-logo> <i class="fa fa-connectdevelop"></i> </div> <navi :model=menu :collapsed.sync=collapsed class=menu></navi> <div class=sign-out title=退出登录 @click=signOut()> <a href=#> <i class="fa fa-sign-out icon"></i><span class=label>退出</span> </a> </div> <div class=user-info-link> <a href=#></a> </div> <div class=collapse-nav @click=toggleCollapse()> <i class="fa fa-angle-left"></i> </div> </div> '},536:function(e,t){e.exports=" <div class=spinner> <div class=bounce1></div> <div class=bounce2></div> <div class=bounce3></div> </div> "},586:function(e,t){e.exports=" <ul> <template v-for=\"(key,item) in model\"> <li v-show=!item.hide> <a v-link=\"{name: item.name, exact: true }\" :title=item.label @click=toggleShowSubMenu(item,$event)> <i :class=\"['icon','fa','fa-' + item.icon]\" v-if=item.icon> </i><span class=label>{{item.label}}</span> <i :class=\"['collapse','fa', 'fa-angle-left','f-right',{'expanded':item.isShowSubMenu}]\" v-if=item.subRoutes></i> </a> </li> <template v-if=item.subRoutes> <li class=sub-menu v-show=item.isShowSubMenu transition=slide> <navi :model=item.subRoutes :collapsed.sync=collapsed></navi> </li> </template> </template> </ul> "}});