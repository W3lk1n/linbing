(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6515ae30"],{2479:function(e,t,n){},"333d":function(e,t,n){"use strict";var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"pagination-container",class:{hidden:e.hidden}},[n("el-pagination",e._b({staticStyle:{"margin-left":"30%"},attrs:{background:e.background,"current-page":e.currentPage,"page-size":e.pageSize,layout:e.layout,"page-sizes":e.pageSizes,total:e.total},on:{"update:currentPage":function(t){e.currentPage=t},"update:current-page":function(t){e.currentPage=t},"update:pageSize":function(t){e.pageSize=t},"update:page-size":function(t){e.pageSize=t},"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange}},"el-pagination",e.$attrs,!1))],1)},i=[];n("a9e3");Math.easeInOutQuad=function(e,t,n,a){return e/=a/2,e<1?n/2*e*e+t:(e--,-n/2*(e*(e-2)-1)+t)};var o=function(){return window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||function(e){window.setTimeout(e,1e3/60)}}();function r(e){document.documentElement.scrollTop=e,document.body.parentNode.scrollTop=e,document.body.scrollTop=e}function s(){return document.documentElement.scrollTop||document.body.parentNode.scrollTop||document.body.scrollTop}function l(e,t,n){var a=s(),i=e-a,l=20,u=0;t="undefined"===typeof t?500:t;var c=function e(){u+=l;var s=Math.easeInOutQuad(u,a,i,t);r(s),u<t?o(e):n&&"function"===typeof n&&n()};c()}var u={name:"Pagination",props:{total:{required:!0,type:Number},page:{type:Number,default:1},limit:{type:Number,default:20},pageSizes:{type:Array,default:function(){return[10,20,30,50]}},layout:{type:String,default:"total, sizes, prev, pager, next, jumper"},background:{type:Boolean,default:!0},autoScroll:{type:Boolean,default:!0},hidden:{type:Boolean,default:!1}},computed:{currentPage:{get:function(){return this.page},set:function(e){this.$emit("update:page",e)}},pageSize:{get:function(){return this.limit},set:function(e){this.$emit("update:limit",e)}}},methods:{handleSizeChange:function(e){this.$emit("pagination",{page:this.currentPage,limit:e}),this.autoScroll&&l(0,800)},handleCurrentChange:function(e){this.$emit("pagination",{page:e,limit:this.pageSize}),this.autoScroll&&l(0,800)}}},c=u,d=(n("df5e"),n("2877")),p=Object(d["a"])(c,a,i,!1,null,"083f6c27",null);t["a"]=p.exports},"5ccb":function(e,t,n){"use strict";n.d(t,"e",(function(){return i})),n.d(t,"a",(function(){return o})),n.d(t,"d",(function(){return r})),n.d(t,"f",(function(){return s})),n.d(t,"c",(function(){return l})),n.d(t,"b",(function(){return u}));var a=n("b775");function i(e){return Object(a["a"])({url:"/api/xss/log",method:"post",data:e})}function o(e){return Object(a["a"])({url:"/api/xss/auth",method:"post",data:e})}function r(e){return Object(a["a"])({url:"/api/generate/auth",method:"post",data:e})}function s(e){return Object(a["a"])({url:"/api/update/auth",method:"post",data:e})}function l(e){return Object(a["a"])({url:"/api/delete/log",method:"post",data:e})}function u(e){return Object(a["a"])({url:"/api/delete/auth",method:"post",data:e})}},6724:function(e,t,n){"use strict";n("8d41");var a="@@wavesContext";function i(e,t){function n(n){var a=Object.assign({},t.value),i=Object.assign({ele:e,type:"hit",color:"rgba(0, 0, 0, 0.15)"},a),o=i.ele;if(o){o.style.position="relative",o.style.overflow="hidden";var r=o.getBoundingClientRect(),s=o.querySelector(".waves-ripple");switch(s?s.className="waves-ripple":(s=document.createElement("span"),s.className="waves-ripple",s.style.height=s.style.width=Math.max(r.width,r.height)+"px",o.appendChild(s)),i.type){case"center":s.style.top=r.height/2-s.offsetHeight/2+"px",s.style.left=r.width/2-s.offsetWidth/2+"px";break;default:s.style.top=(n.pageY-r.top-s.offsetHeight/2-document.documentElement.scrollTop||document.body.scrollTop)+"px",s.style.left=(n.pageX-r.left-s.offsetWidth/2-document.documentElement.scrollLeft||document.body.scrollLeft)+"px"}return s.style.backgroundColor=i.color,s.className="waves-ripple z-active",!1}}return e[a]?e[a].removeHandle=n:e[a]={removeHandle:n},n}var o={bind:function(e,t){e.addEventListener("click",i(e,t),!1)},update:function(e,t){e.removeEventListener("click",e[a].removeHandle,!1),e.addEventListener("click",i(e,t),!1)},unbind:function(e){e.removeEventListener("click",e[a].removeHandle,!1),e[a]=null,delete e[a]}},r=function(e){e.directive("waves",o)};window.Vue&&(window.waves=o,Vue.use(r)),o.install=r;t["a"]=o},"8d41":function(e,t,n){},c087:function(e,t,n){"use strict";n("e134")},d56a:function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"app-container"},[n("div",{staticClass:"filter-container"},[n("el-input",{staticClass:"header",attrs:{placeholder:"token关键字"},nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.handleFilter(t)}},model:{value:e.listQuery.token,callback:function(t){e.$set(e.listQuery,"token",t)},expression:"listQuery.token"}}),n("el-input",{staticClass:"header",attrs:{placeholder:"url关键字"},nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.handleFilter(t)}},model:{value:e.listQuery.url,callback:function(t){e.$set(e.listQuery,"url",t)},expression:"listQuery.url"}}),n("el-select",{staticClass:"header",attrs:{placeholder:"扫描状态",clearable:""},model:{value:e.listQuery.token_status,callback:function(t){e.$set(e.listQuery,"token_status",t)},expression:"listQuery.token_status"}},e._l(e.statusOptions,(function(e){return n("el-option",{key:e,attrs:{label:e,value:e}})})),1),n("el-button",{directives:[{name:"waves",rawName:"v-waves"}],staticClass:"button",attrs:{type:"primary",icon:"el-icon-search"},on:{click:e.handleFilter}},[e._v(" 搜索 ")]),n("el-button",{staticClass:"button",attrs:{type:"primary",icon:"el-icon-edit"},on:{click:e.handleCreate}},[e._v(" 生成token ")])],1),n("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.listLoading,expression:"listLoading"}],key:e.tableKey,staticStyle:{width:"100%"},attrs:{data:e.list,border:"",fit:"","highlight-current-row":""}},[n("el-table-column",{attrs:{label:"ID",sortable:"",align:"center",prop:"id",width:"100"},scopedSlots:e._u([{key:"default",fn:function(t){var a=t.row;return[n("span",[e._v(e._s(a.id))])]}}])}),n("el-table-column",{attrs:{label:"token",sortable:"",prop:"token",width:"200px",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){var a=t.row;return[n("span",[e._v(e._s(a.token))])]}}])}),n("el-table-column",{attrs:{label:"url",sortable:"",prop:"url",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){var a=t.row;return[n("span",[e._v(e._s(a.url))])]}}])}),n("el-table-column",{attrs:{label:"状态",sortable:"",prop:"token_status","class-name":"status-col"},scopedSlots:e._u([{key:"default",fn:function(t){var a=t.row;return[n("el-tag",{attrs:{effect:"dark",type:e._f("statusFilter")(a.token_status)}},[e._v(" "+e._s(a.token_status)+" ")])]}}])}),n("el-table-column",{attrs:{label:"操作",align:"center",width:"300","class-name":"small-padding fixed-width"},scopedSlots:e._u([{key:"default",fn:function(t){var a=t.row;return[n("el-button",{attrs:{size:"mini",type:"warning",icon:"el-icon-warning"},on:{click:function(t){return e.handleUpdate(a,"失效")}}},[e._v(" 弃用 ")]),n("el-button",{attrs:{size:"mini",type:"success",icon:"el-icon-success"},on:{click:function(t){return e.handleUpdate(a,"生效")}}},[e._v(" 恢复 ")]),n("el-button",{attrs:{size:"mini",type:"danger",icon:"el-icon-error"},on:{click:function(t){return e.handleDelete(a)}}},[e._v(" 删除 ")])]}}])})],1),n("pagination",{directives:[{name:"show",rawName:"v-show",value:e.page.total>=0,expression:"page.total>=0"}],attrs:{total:e.page.total,page:e.page.pageNum,limit:e.page.pageSize},on:{"update:page":function(t){return e.$set(e.page,"pageNum",t)},"update:limit":function(t){return e.$set(e.page,"pageSize",t)},pagination:e.getList}})],1)},i=[],o=n("5ccb"),r=n("5258"),s=n("5f87"),l=n("6724"),u=n("333d"),c={name:"XssAuth",components:{Pagination:u["a"]},directives:{waves:l["a"]},filters:{statusFilter:function(e){var t={"生效":"success","失效":"danger"};return t[e]}},data:function(){return{tableKey:0,list:null,total:0,query:!1,listLoading:!0,page:{pageNum:1,pageSize:10,total:10},listQuery:{token:"",url:"",token_status:""},statusOptions:["生效","失效"]}},created:function(){this.getList()},methods:{getList:function(){var e=this;this.listLoading=!0;var t={pagenum:this.page.pageNum,pagesize:this.page.pageSize,token:Object(s["a"])(),listQuery:JSON.stringify(this.listQuery)};t=JSON.stringify(t);var n={data:Object(r["a"])(t)};Object(o["a"])(n).then((function(t){""===t.data?(e.list=[],e.page.total=0):(e.list=t.data.result,e.page.total=t.data.total),setTimeout((function(){e.listLoading=!1}),500)}))},handleFilter:function(){this.page.pageNum=1,this.getList()},handleCreate:function(){var e=this;this.listLoading=!0;var t={token:Object(s["a"])()};t=JSON.stringify(t);var n={data:Object(r["a"])(t)};Object(o["d"])(n).then((function(t){e.getList()}))},handleUpdate:function(e,t){var n=this,a={xss_token:e.token,token_status:t,token:Object(s["a"])()};a=JSON.stringify(a);var i={data:Object(r["a"])(a)};Object(o["f"])(i).then((function(){n.getList(),n.$notify({message:"token弃用成功,token已失效!",type:"success",center:!0,duration:3e3})}))},handleDelete:function(e){var t=this,n={xss_token:e.token,token:Object(s["a"])()};n=JSON.stringify(n);var a={data:Object(r["a"])(n)};Object(o["b"])(a).then((function(){t.getList(),t.$notify({message:"token删除成功!",type:"success",center:!0,duration:3e3})}))}}},d=c,p=(n("c087"),n("2877")),f=Object(p["a"])(d,a,i,!1,null,"7e0ce178",null);t["default"]=f.exports},df5e:function(e,t,n){"use strict";n("2479")},e134:function(e,t,n){}}]);