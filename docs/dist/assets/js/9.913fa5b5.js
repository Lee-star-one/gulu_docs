(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{363:function(n,o,e){n.exports=e.p+"assets/img/favicon.b79e8911.png"},377:function(n,o,e){"use strict";e.r(o);e(308);var t=e(362),a=e(309),r={name:"marker-demos",components:{"g-container":a.Container,"g-marker":a.Marker},data:function(){return{icon:new t.Icon({iconUrl:e(363),iconSize:[40,40]}),content:'\n        <g-container>\n            <g-marker :lat-lng="[37, 107]" icon="icon"></g-marker>\n        </g-container>\n        '}},methods:{zoomUpdated:function(n){this.zoom=n,console.log(n)},centerUpdated:function(n){this.center=n,console.log(n)},boundsUpdated:function(n){this.bounds=n,console.log(n)}}},c=e(43),i=Object(c.a)(r,(function(){var n=this,o=n.$createElement,e=n._self._c||o;return e("div",[e("g-container",{attrs:{zoom:10,center:[37,107],adapter:"GaoDe.Normal.Map",minZoom:5,width:"100%"},on:{"update:zoom":n.zoomUpdated,"update:center":n.centerUpdated,"update:bounds":n.boundsUpdated}},[e("g-marker",{attrs:{"lat-lng":[37,107],icon:n.icon}})],1),n._v(" "),e("pre",[n._v("    "),e("code",[n._v(n._s(n.content))]),n._v("\n  ")])],1)}),[],!1,null,null,null);o.default=i.exports}}]);