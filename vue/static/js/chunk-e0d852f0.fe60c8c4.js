(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-e0d852f0"],{2479:function(e,t,a){},"333d":function(e,t,a){"use strict";var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"pagination-container",class:{hidden:e.hidden}},[a("el-pagination",e._b({staticStyle:{"margin-left":"30%"},attrs:{background:e.background,"current-page":e.currentPage,"page-size":e.pageSize,layout:e.layout,"page-sizes":e.pageSizes,total:e.total},on:{"update:currentPage":function(t){e.currentPage=t},"update:current-page":function(t){e.currentPage=t},"update:pageSize":function(t){e.pageSize=t},"update:page-size":function(t){e.pageSize=t},"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange}},"el-pagination",e.$attrs,!1))],1)},s=[];a("a9e3");Math.easeInOutQuad=function(e,t,a,n){return e/=n/2,e<1?a/2*e*e+t:(e--,-a/2*(e*(e-2)-1)+t)};var i=function(){return window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||function(e){window.setTimeout(e,1e3/60)}}();function o(e){document.documentElement.scrollTop=e,document.body.parentNode.scrollTop=e,document.body.scrollTop=e}function r(){return document.documentElement.scrollTop||document.body.parentNode.scrollTop||document.body.scrollTop}function c(e,t,a){var n=r(),s=e-n,c=20,l=0;t="undefined"===typeof t?500:t;var u=function e(){l+=c;var r=Math.easeInOutQuad(l,n,s,t);o(r),l<t?i(e):a&&"function"===typeof a&&a()};u()}var l={name:"Pagination",props:{total:{required:!0,type:Number},page:{type:Number,default:1},limit:{type:Number,default:20},pageSizes:{type:Array,default:function(){return[10,20,30,50]}},layout:{type:String,default:"total, sizes, prev, pager, next, jumper"},background:{type:Boolean,default:!0},autoScroll:{type:Boolean,default:!0},hidden:{type:Boolean,default:!1}},computed:{currentPage:{get:function(){return this.page},set:function(e){this.$emit("update:page",e)}},pageSize:{get:function(){return this.limit},set:function(e){this.$emit("update:limit",e)}}},methods:{handleSizeChange:function(e){this.$emit("pagination",{page:this.currentPage,limit:e}),this.autoScroll&&c(0,800)},handleCurrentChange:function(e){this.$emit("pagination",{page:e,limit:this.pageSize}),this.autoScroll&&c(0,800)}}},u=l,d=(a("df5e"),a("2877")),p=Object(d["a"])(u,n,s,!1,null,"083f6c27",null);t["a"]=p.exports},4873:function(e,t,a){"use strict";a("9ac5")},6724:function(e,t,a){"use strict";a("8d41");var n="@@wavesContext";function s(e,t){function a(a){var n=Object.assign({},t.value),s=Object.assign({ele:e,type:"hit",color:"rgba(0, 0, 0, 0.15)"},n),i=s.ele;if(i){i.style.position="relative",i.style.overflow="hidden";var o=i.getBoundingClientRect(),r=i.querySelector(".waves-ripple");switch(r?r.className="waves-ripple":(r=document.createElement("span"),r.className="waves-ripple",r.style.height=r.style.width=Math.max(o.width,o.height)+"px",i.appendChild(r)),s.type){case"center":r.style.top=o.height/2-r.offsetHeight/2+"px",r.style.left=o.width/2-r.offsetWidth/2+"px";break;default:r.style.top=(a.pageY-o.top-r.offsetHeight/2-document.documentElement.scrollTop||document.body.scrollTop)+"px",r.style.left=(a.pageX-o.left-r.offsetWidth/2-document.documentElement.scrollLeft||document.body.scrollLeft)+"px"}return r.style.backgroundColor=s.color,r.className="waves-ripple z-active",!1}}return e[n]?e[n].removeHandle=a:e[n]={removeHandle:a},a}var i={bind:function(e,t){e.addEventListener("click",s(e,t),!1)},update:function(e,t){e.removeEventListener("click",e[n].removeHandle,!1),e.addEventListener("click",s(e,t),!1)},unbind:function(e){e.removeEventListener("click",e[n].removeHandle,!1),e[n]=null,delete e[n]}},o=function(e){e.directive("waves",i)};window.Vue&&(window.waves=i,Vue.use(o)),i.install=o;t["a"]=i},"69eb":function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"app-container"},[a("div",{staticClass:"filter-container"},[a("el-input",{staticClass:"header",attrs:{placeholder:"目标关键字"},nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.handleFilter(t)}},model:{value:e.listQuery.target,callback:function(t){e.$set(e.listQuery,"target",t)},expression:"listQuery.target"}}),a("el-select",{staticClass:"header",attrs:{placeholder:"扫描状态",clearable:""},model:{value:e.listQuery.scan_status,callback:function(t){e.$set(e.listQuery,"scan_status",t)},expression:"listQuery.scan_status"}},e._l(e.statusOptions,(function(e){return a("el-option",{key:e,attrs:{label:e,value:e}})})),1),a("el-select",{staticClass:"header",attrs:{placeholder:"扫描进度",clearable:""},model:{value:e.listQuery.scan_schedule,callback:function(t){e.$set(e.listQuery,"scan_schedule",t)},expression:"listQuery.scan_schedule"}},e._l(e.scheduleOptions,(function(e){return a("el-option",{key:e,attrs:{label:e,value:e}})})),1),a("el-button",{directives:[{name:"waves",rawName:"v-waves"}],staticClass:"button",attrs:{type:"primary",icon:"el-icon-search"},on:{click:e.handleFilter}},[e._v(" 搜索 ")])],1),a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.listLoading,expression:"listLoading"}],key:e.tableKey,staticStyle:{width:"100%",overflow:"hidden"},attrs:{data:e.list,border:"",fit:"","highlight-current-row":""}},[a("el-table-column",{attrs:{label:"ID",sortable:"",align:"center",prop:"id",width:"100"},scopedSlots:e._u([{key:"default",fn:function(t){var n=t.row;return[a("span",[e._v(e._s(n.id))])]}}])}),a("el-table-column",{attrs:{label:"目标",sortable:"",prop:"target",align:"center",width:"200"},scopedSlots:e._u([{key:"default",fn:function(t){var n=t.row;return[a("span",{staticClass:"link-type",on:{click:function(t){return e.handleDetail(n)}}},[e._v(e._s(n.target))])]}}])}),a("el-table-column",{attrs:{label:"目标IP",sortable:"",prop:"target_ip",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){var n=t.row;return[a("span",[e._v(e._s(n.target_ip))])]}}])}),a("el-table-column",{attrs:{label:"扫描时间",sortable:"",prop:"scan_time",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){var n=t.row;return[a("span",[e._v(e._s(e._f("parseTime")(n.scan_time,"{y}-{m}-{d} {h}:{i}")))])]}}])}),a("el-table-column",{attrs:{label:"扫描状态",sortable:"",prop:"scan_status","class-name":"status-col"},scopedSlots:e._u([{key:"default",fn:function(t){var n=t.row;return[a("el-tag",{attrs:{effect:"dark",type:e._f("statusFilter")(n.scan_status)}},[e._v(" "+e._s(n.scan_status)+" ")])]}}])}),a("el-table-column",{attrs:{label:"扫描进度",sortable:"",prop:"scan_schedule",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){var n=t.row;return[a("el-tag",{attrs:{effect:"dark",type:e._f("statusFilter")(n.scan_schedule)}},[e._v(" "+e._s(n.scan_schedule)+" ")])]}}])}),a("el-table-column",{attrs:{label:"漏洞数量",sortable:"",prop:"vulner_number",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){var n=t.row;return[a("span",[e._v(e._s(n.vulner_number))])]}}])}),a("el-table-column",{attrs:{label:"操作",align:"center",width:"340","class-name":"small-padding fixed-width"},scopedSlots:e._u([{key:"default",fn:function(t){var n=t.row;return[a("el-button",{attrs:{type:"primary",size:"mini",icon:"el-icon-video-play"},on:{click:function(t){return e.handlePause(n)}}},[e._v(" 暂停扫描 ")]),a("el-button",{attrs:{type:"primary",size:"mini",icon:"el-icon-edit"},on:{click:function(t){return e.handleResume(n)}}},[e._v(" 恢复扫描 ")]),a("el-button",{attrs:{size:"mini",type:"danger",icon:"el-icon-error"},on:{click:function(t){return e.handleCancel(n)}}},[e._v(" 取消扫描 ")])]}}])})],1),a("pagination",{directives:[{name:"show",rawName:"v-show",value:e.page.total>=0,expression:"page.total>=0"}],attrs:{total:e.page.total,page:e.page.pageNum,limit:e.page.pageSize},on:{"update:page":function(t){return e.$set(e.page,"pageNum",t)},"update:limit":function(t){return e.$set(e.page,"pageSize",t)},pagination:e.getList}})],1)},s=[],i=(a("99af"),a("fef7")),o=a("5258"),r=a("5f87"),c=a("6724"),l=a("333d"),u={name:"ScanManager",components:{Pagination:l["a"]},directives:{waves:c["a"]},filters:{statusFilter:function(e){var t={"未开始":"info","扫描结束":"success","扫描中":"","子域名扫描中":"","端口扫描中":"","目录扫描中":"","POC扫描中":"","扫描失败":"danger"};return t[e]}},data:function(){return{tableKey:0,list:[],total:0,listLoading:!0,page:{pageNum:1,pageSize:10,total:10},listQuery:{target:"",scan_status:"",scan_schedule:""},statusOptions:["全部","未开始","扫描中","扫描结束","扫描失败"],scheduleOptions:["全部","未开始","子域名扫描中","端口扫描中","目录扫描中","POC扫描中","扫描结束","扫描失败"]}},created:function(){this.websocketclose(),this.initWebSocket(),this.getList()},destroyed:function(){this.websocketclose()},methods:{getList:function(){var e=this;this.listLoading=!0;var t={pagenum:this.page.pageNum,pagesize:this.page.pageSize,token:Object(r["a"])(),listQuery:JSON.stringify(this.listQuery)};t=JSON.stringify(t);var a={data:Object(o["a"])(t)};Object(i["d"])(a).then((function(t){""===t.data?(e.list=[],e.page.total=0):(e.list=t.data.result,e.page.total=t.data.total),setTimeout((function(){e.listLoading=!1}),500)}))},handlePause:function(e){var t=this,a={scan_id:e.scan_id,target:e.target,token:Object(r["a"])()};a=JSON.stringify(a);var n={data:Object(o["a"])(a)};Object(i["b"])(n).then((function(e){"请求正常"===e.data?t.$notify({message:"暂停扫描成功!",type:"success",center:!0,duration:3e3}):t.$notify({message:"目标不处于扫描状态,无法暂停扫描!",type:"error",center:!0,duration:3e3})}))},handleResume:function(e){var t=this,a={scan_id:e.scan_id,target:e.target,token:Object(r["a"])()};a=JSON.stringify(a);var n={data:Object(o["a"])(a)};Object(i["c"])(n).then((function(e){"请求正常"===e.data?t.$notify({message:"恢复扫描成功!",type:"success",center:!0,duration:3e3}):t.$notify({message:"目标不处于暂停扫描状态,无法恢复扫描!",type:"error",center:!0,duration:3e3})}))},handleCancel:function(e){var t=this,a={scan_id:e.scan_id,target:e.target,token:Object(r["a"])()};a=JSON.stringify(a);var n={data:Object(o["a"])(a)};Object(i["a"])(n).then((function(e){"请求正常"===e.data?t.$notify({message:"取消扫描成功!",type:"success",center:!0,duration:3e3}):t.$notify({message:"扫描已结束,无法取消扫描!",type:"error",center:!0,duration:3e3})}))},handleDetail:function(e){this.$router.push({name:"TargetDetail",query:{params:e["target"]}})},handleFilter:function(){this.page.pageNum=1,this.getList()},initWebSocket:function(){var e=location,t=e.protocol,a=e.host;this.websocket=new WebSocket("".concat("https"===t?"wss":"ws","://").concat(a,"/ws/scan/status")),this.websocket.onmessage=this.websocketonmessage,this.websocket.onopen=this.websocketonopen,this.websocket.onerror=this.websocketonerror,this.websocket.onclose=this.websocketclose},websocketonopen:function(){var e={pagenum:this.page.pageNum,pagesize:this.page.pageSize,token:Object(r["a"])(),listQuery:JSON.stringify(this.listQuery)};e=JSON.stringify(e);var t={data:Object(o["a"])(e)};this.websocketsend(JSON.stringify(t))},websocketonerror:function(){console.log("出现错误")},websocketonmessage:function(e){var t=this,a=JSON.parse(e.data);""!==a.data&&JSON.stringify(a.data.result)!==JSON.stringify(this.list)&&(this.listLoading=!0,this.list=a.data.result,""===a.data?(this.list=[],this.page.total=0):this.page.total=a.data.total,setTimeout((function(){t.listLoading=!1}),500))},websocketsend:function(e){1===this.websocket.readyState&&this.websocket.send(e)},websocketclose:function(){this.websocket&&this.websocket.close()}}},d=u,p=(a("4873"),a("2877")),f=Object(p["a"])(d,n,s,!1,null,"7dd95838",null);t["default"]=f.exports},"8d41":function(e,t,a){},"9ac5":function(e,t,a){},df5e:function(e,t,a){"use strict";a("2479")},fef7:function(e,t,a){"use strict";a.d(t,"e",(function(){return s})),a.d(t,"f",(function(){return i})),a.d(t,"b",(function(){return o})),a.d(t,"c",(function(){return r})),a.d(t,"a",(function(){return c})),a.d(t,"d",(function(){return l}));var n=a("b775");function s(e){return Object(n["a"])({url:"/api/scan/set",method:"post",data:e})}function i(e){return Object(n["a"])({url:"/api/scan/start",method:"post",data:e})}function o(e){return Object(n["a"])({url:"/api/scan/pause",method:"post",data:e})}function r(e){return Object(n["a"])({url:"/api/scan/resume",method:"post",data:e})}function c(e){return Object(n["a"])({url:"/api/scan/cancel",method:"post",data:e})}function l(e){return Object(n["a"])({url:"/api/scan/list",method:"post",data:e})}}}]);