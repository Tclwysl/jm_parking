(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/mi-map/mi-map"],{"41aa":function(t,e,n){"use strict";n.r(e);var o=n("af35"),i=n.n(o);for(var a in o)"default"!==a&&function(t){n.d(e,t,(function(){return o[t]}))}(a);e["default"]=i.a},"6bb6":function(t,e,n){"use strict";var o;n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return a})),n.d(e,"a",(function(){return o}));var i=function(){var t=this,e=t.$createElement;t._self._c},a=[]},"827c":function(t,e,n){},af35:function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=i(n("a34a"));function i(t){return t&&t.__esModule?t:{default:t}}function a(t,e,n,o,i,a,s){try{var u=t[a](s),c=u.value}catch(r){return void n(r)}u.done?e(c):Promise.resolve(c).then(o,i)}function s(t){return function(){var e=this,n=arguments;return new Promise((function(o,i){var s=t.apply(e,n);function u(t){a(s,o,i,u,c,"next",t)}function c(t){a(s,o,i,u,c,"throw",t)}u(void 0)}))}}getApp();var u=n("be8a"),c=new u({key:"LXCBZ-NNIKD-UZ64F-H6AFI-UNJLH-OCFGE"}),r={props:{tipText:{type:String,default:"选择位置"},descText:{type:String,default:"使用当前定位或在地图上标记位置"},positionIcon:{type:String,default:"https://s2.ax1x.com/2020/03/10/8CvKmt.png"},myPositionIcon:{type:String,default:"https://s2.ax1x.com/2020/03/10/8CjxSJ.png"}},data:function(){return{mapH:0,mapW:0,longitude:0,latitude:0,myAddress:"",addressObj:{longitude:"",latitude:"",address:"请选择集合地点"},controlsLeft:1e3,controlsTop:1e3,controls:[]}},mounted:function(){this.getLocation(),this.initMapH(),this.initPositionIcon()},methods:{initPositionIcon:function(){var t=this;setTimeout((function(){t.controlsLeft=t.mapW/2-10,t.controlsTop=t.mapH/2}),100)},getLocation:function(){var e=this;t.getLocation({geocode:!0,success:function(t){e.initMap(t),console.log(t)},fail:function(e){t.showToast({icon:"none",title:"获取地址失败, 请检查是否开启定位权限~~"})}})},initMap:function(t){var e=this;return s(o.default.mark((function n(){return o.default.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return e.longitude=t.longitude,e.latitude=t.latitude,n.next=4,e.getAddressName(t);case 4:e.myAddress=n.sent,e.addressObj=Object.assign({},e.addressObj,{longitude:t.longitude,latitude:t.latitude,address:e.myAddress});case 6:case"end":return n.stop()}}),n)})))()},checkMap:function(t){var e=this;return s(o.default.mark((function n(){return o.default.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.t0=Object,n.t1={},n.t2=e.addressObj,n.t3=t.longitude,n.t4=t.latitude,n.next=7,e.getAddressName(t);case 7:n.t5=n.sent,n.t6={longitude:n.t3,latitude:n.t4,address:n.t5},e.addressObj=n.t0.assign.call(n.t0,n.t1,n.t2,n.t6),console.log("当前位置:"+t.latitude+"|"+t.longitude);case 11:case"end":return n.stop()}}),n)})))()},mapChange:function(e){var n=this,o=this;clearTimeout(this.timer),this.timer=setTimeout((function(){"regionchange"!=e.type&&"end"!=e.type||(o.mapCtx=t.createMapContext("map",n),o.mapCtx.getCenterLocation({success:function(t){n.checkMap(t),console.log(t)},fail:function(t){console.log(t)}}))}),200)},getAddressName:function(t){return new Promise((function(e){console.log(t,"======================"),c.reverseGeocoder({location:{latitude:t.latitude,longitude:t.longitude},get_poi:1,poi_options:"page_size=1;page_index=1",output:"jsonp",success:function(t){e(t.result.formatted_addresses.recommend)},fail:function(t){e(t)}})}))},initMapH:function(){this.mapW=t.getSystemInfoSync().windowWidth,this.mapH=t.getSystemInfoSync().windowHeight-170,this.mapW=t.getSystemInfoSync().windowWidth,this.mapH=t.getSystemInfoSync().windowHeight},toMyLocation:function(){this.getLocation()},submitAdress:function(){var t=this;this.controls=[],setTimeout((function(){t.$emit("updateAddress",t.addressObj)}),100)}}};e.default=r}).call(this,n("543d")["default"])},eb31:function(t,e,n){"use strict";var o=n("827c"),i=n.n(o);i.a},f162:function(t,e,n){"use strict";n.r(e);var o=n("6bb6"),i=n("41aa");for(var a in i)"default"!==a&&function(t){n.d(e,t,(function(){return i[t]}))}(a);n("eb31");var s,u=n("f0c5"),c=Object(u["a"])(i["default"],o["b"],o["c"],!1,null,"08cfc0b4",null,!1,o["a"],s);e["default"]=c.exports}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/mi-map/mi-map-create-component',
    {
        'components/mi-map/mi-map-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("f162"))
        })
    },
    [['components/mi-map/mi-map-create-component']]
]);
