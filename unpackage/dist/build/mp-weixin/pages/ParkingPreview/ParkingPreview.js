(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/ParkingPreview/ParkingPreview"],{"1e3a":function(t,n,a){"use strict";(function(t){a("9c0e");i(a("66fd"));var n=i(a("b09f"));function i(t){return t&&t.__esModule?t:{default:t}}t(n.default)}).call(this,a("543d")["createPage"])},4286:function(t,n,a){"use strict";(function(t){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var a={data:function(){return{vmap:!0,mapH:0,mapW:0,id:0,title:"map",carpark:["A","B","C"],freepark:["100","150","99"],freerespark:["10","12","15"],latitude:29.73670117467697,longitude:106.62840022071737,covers:[]}},mounted:function(){this.initMapH()},onLoad:function(){this.init()},methods:{initMapH:function(){this.mapW=t.getSystemInfoSync().windowWidth,this.mapH=t.getSystemInfoSync().windowHeight},init:function(){var t=this,n=[{id:0,latitude:29.737161,longitude:106.626888,iconPath:"../../static/location.png"},{id:1,latitude:29.737013,longitude:106.62997,iconPath:"../../static/location.png"},{id:2,latitude:29.734025,longitude:106.627302,iconPath:"../../static/location.png"}];t.MapData(t,n)},MapData:function(t,n){for(var a=[],i=0;i<n.length;i++)a.push({id:n[i].id,latitude:n[i].latitude,longitude:n[i].longitude,iconPath:n[i].iconPath,width:40,height:40,callout:{content:this.carpark[i]+"停车场\n\n空闲车位："+this.freepark[i]+"\n空闲预约车位："+this.freerespark[i],color:"#ffffff",padding:12,fontSize:12,borderRadius:2,bgColor:"rgba(0, 0, 0, 0.3)",display:"ALWAYS"}});t.covers=a},callouttap:function(n){console.log("===你点击了标记点气泡==="),console.log(n.detail.markerId);var a=this.carpark[n.detail.markerId]+"停车场";console.log(a),t.navigateTo({url:"./goParkingPre?carparkid="+n.detail.markerId})}}};n.default=a}).call(this,a("543d")["default"])},"64b5":function(t,n,a){"use strict";var i;a.d(n,"b",(function(){return e})),a.d(n,"c",(function(){return o})),a.d(n,"a",(function(){return i}));var e=function(){var t=this,n=t.$createElement;t._self._c},o=[]},"6a95":function(t,n,a){"use strict";a.r(n);var i=a("4286"),e=a.n(i);for(var o in i)"default"!==o&&function(t){a.d(n,t,(function(){return i[t]}))}(o);n["default"]=e.a},b09f:function(t,n,a){"use strict";a.r(n);var i=a("64b5"),e=a("6a95");for(var o in e)"default"!==o&&function(t){a.d(n,t,(function(){return e[t]}))}(o);var r,u=a("f0c5"),c=Object(u["a"])(e["default"],i["b"],i["c"],!1,null,null,null,!1,i["a"],r);n["default"]=c.exports}},[["1e3a","common/runtime","common/vendor"]]]);