(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{373:function(n,t,e){"use strict";e.r(t);e(308);var u={name:"input-demos",components:{"g-input":e(309).Input},data:function(){return{message:"1",content:'\n            <g-input value="张三"></g-input>\n            <g-input value="张三"></g-input>\n            <g-input value="李四" disabled></g-input>\n            <g-input value="王五" readonly></g-input>\n            <g-input value="赵六" error="姓名不能少于2个字"></g-input>\n            <g-input value="赵六" @change="inputChange"></g-input>\n            <g-input v-model="message"></g-input>\n      '}},methods:{inputChange:function(n){alert(n)}}},a=e(43),i=Object(a.a)(u,(function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("div",[e("g-input",{attrs:{value:"张三"}}),n._v(" "),e("g-input",{attrs:{value:"张三"}}),n._v(" "),e("g-input",{attrs:{value:"李四",disabled:""}}),n._v(" "),e("g-input",{attrs:{value:"王五",readonly:""}}),n._v(" "),e("p"),n._v(" "),e("g-input",{attrs:{value:"赵六",error:"姓名不能少于2个字"}}),n._v(" "),e("p"),n._v(" "),e("g-input",{attrs:{value:"赵六"},on:{change:n.inputChange}}),n._v(" "),e("p"),n._v(" "),e("g-input",{model:{value:n.message,callback:function(t){n.message=t},expression:"message"}}),n._v(" "),e("span",[n._v(n._s(n.message))]),n._v(" "),e("button",{on:{click:function(t){n.message+=1}}},[n._v("按钮")]),n._v(" "),e("pre",[n._v("    "),e("code",[n._v(n._s(n.content))]),n._v("\n  ")])],1)}),[],!1,null,null,null);t.default=i.exports}}]);