"use strict";(self["webpackChunkjcrew"]=self["webpackChunkjcrew"]||[]).push([[413],{1893:function(t,a,s){s.d(a,{Z:function(){return u}});var e=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"message-alert"},t._l(t.messages,(function(a,e){return s("div",{key:e,staticClass:"alert alert-dismissible",class:"alert-"+a.status},[t._v(" "+t._s(a.message)+" "),s("button",{staticClass:"close",attrs:{type:"button","aria-label":"Close"},on:{click:function(a){return t.removeMessageWithTiming(e)}}},[s("span",{attrs:{"aria-hidden":"true"}},[t._v("×")])])])})),0)},n=[],l=s(629),i={name:"Alert",data(){return{}},computed:{...(0,l.Se)("alertMessageModules",["messages"])},methods:{updateMessage(t,a){this.$store.dispatch("alertMessageModules/updateMessage",{message:t,status:a})},...(0,l.nv)("alertMessageModules",["removeMessageWithTiming"])}},r=i,c=s(1001),o=(0,c.Z)(r,e,n,!1,null,null,null),u=o.exports},413:function(t,a,s){s.r(a),s.d(a,{default:function(){return k}});var e=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",[s("my-loading",{attrs:{active:t.isLoading},on:{"update:active":function(a){t.isLoading=a}}}),s("Navbar"),s("Alert"),s("div",{staticClass:"container-fluid"},[s("div",{staticClass:"row"},[s("Sidebar"),s("main",{staticClass:"col-md-9 ml-sm-auto col-lg-10 px-4",attrs:{role:"main"}},[s("router-view")],1)],1)])],1)},n=[],l=s(629),i=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"navbar-wrap"},[s("nav",{staticClass:"navbar navbar-dark bg-dark flex-md-nowrap p-0 shadow"},[s("a",{staticClass:"navbar-brand col-sm-3 col-md-2 mr-0",attrs:{href:"#"}},[t._v("J.CREW Company")]),s("ul",{staticClass:"navbar-nav px-3"},[s("li",{staticClass:"nav-item text-nowrap"},[s("a",{staticClass:"nav-link",attrs:{href:"#"},on:{click:function(a){return a.preventDefault(),t.signout.apply(null,arguments)}}},[t._v("登出")])])])])])},r=[],c={name:"Navbar",data(){return{}},methods:{signout(){const t="https://vue-course-api.hexschool.io/logout",a=this;a.$http.post(t).then((t=>{t.data.success&&(a.$router.push("/login"),alert(t.data.message))}))}}},o=c,u=s(1001),d=(0,u.Z)(o,i,r,!1,null,null,null),m=d.exports,v=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("nav",{staticClass:"col-md-2 d-none d-md-block bg-light sidebar"},[s("div",{staticClass:"sidebar-sticky"},[t._m(0),s("ul",{staticClass:"nav flex-column mb-2"},[s("li",{staticClass:"nav-item"},[s("router-link",{staticClass:"nav-link",attrs:{to:"/admin/productsmanage"}},[s("i",{staticClass:"fas fa-shopping-cart"}),t._v(" 產品列表 ")])],1),s("li",{staticClass:"nav-item"},[s("router-link",{staticClass:"nav-link",attrs:{to:"/admin/ordersmanage"}},[s("i",{staticClass:"far fa-list-alt"}),t._v(" 訂單列表 ")])],1),s("li",{staticClass:"nav-item"},[s("router-link",{staticClass:"nav-link",attrs:{to:"/admin/couponsmanage"}},[s("i",{staticClass:"fas fa-money-bill"}),t._v(" 優惠卷 ")])],1)]),t._m(1),s("ul",{staticClass:"nav flex-column mb-2"},[s("li",{staticClass:"nav-item"},[s("router-link",{staticClass:"nav-link",attrs:{to:"/"}},[s("i",{staticClass:"fas fa-shopping-cart"}),t._v(" J.CREW ")])],1)])])])},f=[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("h6",{staticClass:"sidebar-heading d-flex justify-content-between align-items-center\n    px-3 mt-4 mb-1 text-muted font-weight-bold"},[s("span",[t._v("管理員")]),s("a",{staticClass:"d-flex align-items-center text-muted",attrs:{href:"#"}},[s("span",{attrs:{"data-feather":"plus-circle"}})])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("h6",{staticClass:"sidebar-heading d-flex justify-content-between align-items-center\n    px-3 mt-4 mb-1 text-muted font-weight-bold"},[s("span",[t._v("購物頁")]),s("a",{staticClass:"d-flex align-items-center text-muted",attrs:{href:"#"}},[s("span",{attrs:{"data-feather":"plus-circle"}})])])}],p={},g=(0,u.Z)(p,v,f,!1,null,null,null),h=g.exports,C=s(1893),b={computed:{...(0,l.Se)(["isLoading"]),...(0,l.Se)("alertMessageModules",["messages"])},components:{Navbar:m,Sidebar:h,Alert:C.Z}},_=b,x=(0,u.Z)(_,e,n,!1,null,null,null),k=x.exports}}]);
//# sourceMappingURL=413.43768c8c.js.map