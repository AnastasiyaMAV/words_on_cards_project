(this.webpackJsonpwords_on_cards_project=this.webpackJsonpwords_on_cards_project||[]).push([[0],{234:function(e,t,n){},236:function(e,t,n){},237:function(e,t,n){},396:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n(0),r=n.n(c),s=n(34),i=n.n(s),o=(n(234),n(235),n(236),n(237),n(5)),l=n(403),d=n(71),j=n(83),b=n(25),u=n(8);var h=function(){return Object(u.jsxs)("div",{children:[Object(u.jsxs)("ul",{className:"header",children:[Object(u.jsx)(j.c,{to:"/",children:Object(u.jsx)("img",{src:"./assets/images/logo.png",alt:"logo",className:"logoImg",title:"Urheberschaft: https://www.flaticon.com/ru/"})}),Object(u.jsx)(j.c,{to:"/",className:"notActivLink",children:"Word table"}),Object(u.jsx)(j.c,{to:"/addDelWord",className:"notActivLink",children:"Add or remove"}),Object(u.jsx)(j.c,{to:"/game",className:"notActivLink",children:"Words on cards"})]}),Object(u.jsx)(b.a,{})]})},O=n(41),m=n.n(O),f=n(9),p=n(67),g=n(11),x=n(399),v=n(224),w=n(400),S=n(402),N=n(159),C=n(397);var k=function(){return Object(u.jsx)(u.Fragment,{children:Object(u.jsxs)("div",{className:"wrapperErrorServer",children:[Object(u.jsx)("img",{src:"./assets/images/sadCat.png",alt:"ErrorServer",className:"ErrorServerImg",title:"Urheberschaft: https://www.flaticon.com/ru/"}),Object(u.jsx)("div",{children:"Server Error"}),Object(u.jsx)("div",{children:"I'm sorry, please try again later..."})]})})},y=["editing","dataIndex","title","inputType","record","index","children"],I=function(e){var t=e.editing,n=e.dataIndex,c=e.title,r=(e.inputType,e.record,e.index,e.children),s=Object(g.a)(e,y);return Object(u.jsx)("td",Object(a.a)(Object(a.a)({},s),{},{children:t?Object(u.jsx)(x.a.Item,{name:n,style:{margin:0},rules:[{required:!0,message:"Please Input ".concat(c,"!")}],children:Object(u.jsx)(v.a,{})}):r}))};var T=Object(d.b)(["wordsStore"])(Object(d.c)((function(e){var t=e.wordsStore,n=x.a.useForm(),r=Object(o.a)(n,1)[0],s=Object(c.useState)(t.massWords),i=Object(o.a)(s,2),l=i[0],d=i[1],j=Object(c.useState)(""),b=Object(o.a)(j,2),h=b[0],O=b[1];Object(c.useEffect)((function(){t.massWords.length&&d(t.massWords)}),[t.massWords]),Object(c.useEffect)((function(){var e="";l.filter((function(t){return t.id===h&&(e=t),e})),h&&t.update(h,e)}),[l]);var g=function(e){return e.id===h},v=function(){O("")},y=function(){var e=Object(p.a)(m.a.mark((function e(n){var c,s,i,o;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,r.validateFields();case 3:c=e.sent,s=Object(f.a)(l),i=s.findIndex((function(e){return n===e.id})),i>-1?(o=s[i],s.splice(i,1,Object(a.a)(Object(a.a)({},o),c)),d(s),O("")):(s.push(c),d(s),O("")),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),console.log("Validate Failed:",e.t0);case 12:t.loadData();case 13:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t){return e.apply(this,arguments)}}(),T=[{title:"english",dataIndex:"english",width:"25%",editable:!0,className:"EditableTable"},{title:"transcription",dataIndex:"transcription",width:"25%",editable:!0,className:"EditableTable"},{title:"russian",dataIndex:"russian",width:"20%",editable:!0,className:"EditableTable"},{title:"operation",dataIndex:"operation",className:"EditableTable",render:function(e,t){return g(t)?Object(u.jsxs)("span",{children:[Object(u.jsx)(w.a.Link,{onClick:function(){return y(t.id)},style:{marginRight:8},children:"Save"}),Object(u.jsx)(S.a,{title:"Sure to cancel?",onConfirm:v,children:Object(u.jsx)(w.a.Link,{children:"Cancel"})})]}):Object(u.jsx)(w.a.Link,{disabled:""!==h,onClick:function(){return function(e){r.setFieldsValue(Object(a.a)({english:"",transcription:"",russian:""},e)),O(e.id)}(t)},children:"Edit"})}}].map((function(e){return e.editable?Object(a.a)(Object(a.a)({},e),{},{onCell:function(t){return{record:t,inputType:"text",dataIndex:e.dataIndex,title:e.title,editing:g(t)}}}):e}));return t.error?Object(u.jsx)(k,{}):t.isLoading?Object(u.jsx)(N.a,{tip:"Loading...",className:"spinLoading"}):Object(u.jsx)("div",{className:"containerTable",children:Object(u.jsx)(x.a,{form:r,component:!1,children:Object(u.jsx)(C.a,{components:{body:{cell:I}},bordered:!0,dataSource:l,columns:T,rowClassName:"editable-row ",pagination:{onChange:v}})})})}))),E=n(6),W=n(398),L=n(54);var D=Object(d.b)(["wordsStore"])(Object(d.c)((function(e){var t=e.wordsStore,n=Object(c.useState)(""),r=Object(o.a)(n,2),s=r[0],i=r[1],l=Object(c.useState)(""),d=Object(o.a)(l,2),j=d[0],b=d[1],h=Object(c.useState)(""),O=Object(o.a)(h,2),m=O[0],f=O[1],p=Object(c.useState)(""),g=Object(o.a)(p,2),x=g[0],w=g[1],S=Object(c.useState)({english:"",transcription:"",russian:""}),N=Object(o.a)(S,2),C=N[0],k=N[1],y=Object(c.useState)(!0),I=Object(o.a)(y,2),T=I[0],D=I[1],F=Object(c.useState)(!0),A=Object(o.a)(F,2),_=A[0],J=A[1],P=Object(c.useState)(!1),U=Object(o.a)(P,2),R=U[0],M=U[1];return Object(c.useEffect)((function(){D(!(s&&j&&m)),x||J(!0)}),[s,j,m,x]),Object(u.jsx)(u.Fragment,{children:Object(u.jsxs)("div",{className:"containerAddDel",children:[Object(u.jsxs)(W.a,{hoverable:!0,className:"cardAdd",children:[Object(u.jsx)("div",{children:"Please, enter the word you want to add to the table:"}),Object(u.jsx)(v.a,{placeholder:"english",name:"english",onChange:function(e){i(e.target.value),k(Object(a.a)(Object(a.a)({},C),{},Object(E.a)({},e.target.name,e.target.value))),M(!1)},value:s}),Object(u.jsx)(v.a,{placeholder:"transcription",name:"transcription",onChange:function(e){b(e.target.value),k(Object(a.a)(Object(a.a)({},C),{},Object(E.a)({},e.target.name,e.target.value))),M(!1)},value:j}),Object(u.jsx)(v.a,{placeholder:"russian",name:"russian",onChange:function(e){f(e.target.value),k(Object(a.a)(Object(a.a)({},C),{},Object(E.a)({},e.target.name,e.target.value))),M(!1)},value:m}),Object(u.jsx)("div",{className:R?"addOkVisible":"addOkInvisible",children:"Word in the table! Congratulations!"}),Object(u.jsx)(L.a,{disabled:T,onClick:function(){C&&(t.addWord(C),i(""),b(""),f(""),M(!0))},children:"Add"})]}),Object(u.jsxs)(W.a,{hoverable:!0,className:"cardDel",children:[Object(u.jsx)("div",{children:"If you want to delete a word, then enter it below (in English format):"}),Object(u.jsx)(v.a,{placeholder:"english",name:"delWord",onChange:function(e){w(e.target.value),J(!1)},value:x,className:"delInput"}),Object(u.jsx)(L.a,{disabled:_,onClick:function(){x&&(t.removeWord(x),w(""))},children:"Del"})]})]})})}))),F=n(221),A=n(220),_=n.n(A),J=["count"];var P,U=function(e){var t=Object(c.useState)(!1),n=Object(o.a)(t,2),r=n[0],s=n[1],i=Object(c.useState)(0),l=Object(o.a)(i,2),d=l[0],j=l[1],b=Object(c.useRef)(null),h=(e.count,Object(g.a)(e,J)),O=function(t){"mousedown"===t.type?s(!r):(setTimeout(_()((function(){return s(!r)}),1e3),1e3),j(e.count(e.idword)))};return Object(c.useEffect)((function(){b.current.focus()})),Object(c.useEffect)((function(){d&&localStorage.setItem("printCount",d)}),[d]),Object(u.jsxs)(F.Content,{className:"contentCard",children:[Object(u.jsxs)("div",{className:"circles",title:"Urheberschaft: https://github.com/scriptype",children:[Object(u.jsx)("div",{}),Object(u.jsx)("div",{}),Object(u.jsx)("div",{}),Object(u.jsx)("span",{})]}),Object(u.jsxs)(W.a,{hoverable:!0,className:"card",children:[Object(u.jsxs)("div",{className:"game",children:[Object(u.jsxs)("p",{className:"gameCount",children:["\u0412\u044b\u0443\u0447\u0435\u043d\u043e \u0441\u043b\u043e\u0432:",JSON.parse(localStorage.getItem("printCount"))?JSON.parse(localStorage.getItem("printCount")):"0"]}),Object(u.jsx)(L.a,{onClick:function(){null!=localStorage.getItem("printCount")&&(localStorage.removeItem("printCount"),j(e.count(0)))},children:"start over"})]}),Object(u.jsx)("hr",{}),Object(u.jsx)("h1",{className:"cardEnglishWord",children:e.english}),Object(u.jsx)("h2",{className:"cardTranscription",children:e.transcription}),Object(u.jsx)("hr",{}),Object(u.jsx)(L.a,Object(a.a)(Object(a.a)({},h),{},{className:"cardButton",ref:b,onMouseDown:O,onMouseUp:O,children:r?"Translation":"Check"})),Object(u.jsx)("h1",{className:r?"cardRussianhWordReverse":"cardRussianhWordInitial",children:e.russian})]})]})},R=(null===(P=window)||void 0===P?void 0:P.matchMedia("(prefers-color-scheme: dark)").matches)?"dark":"light";var M=function(){var e=function(){var e=Object(c.useState)(localStorage.getItem("theme")||R),t=Object(o.a)(e,2),n=t[0],a=t[1];return Object(c.useLayoutEffect)((function(){document.documentElement.setAttribute("data-theme",n),localStorage.setItem("theme",n)}),[n]),{theme:n,setTheme:a}}(),t=e.theme,n=e.setTheme;return Object(u.jsxs)("div",{className:"footer",children:[Object(u.jsxs)("div",{className:"btnTheme",children:[Object(u.jsx)(L.a,{onClick:function(){n("light"),console.log(t)},children:"Light"}),Object(u.jsx)(L.a,{onClick:function(){n("dark"),console.log(t)},children:"Dark"})]}),Object(u.jsxs)("div",{className:"inscription",children:[Object(u.jsx)("img",{src:"./assets/images/copyright.png",alt:"copyright",className:"copyrightImg",title:"Urheberschaft: https://www.flaticon.com/ru/"}),Object(u.jsx)("span",{children:"Anastasiya Vostrikova"})]})]})};var V=function(){return Object(u.jsx)(u.Fragment,{children:Object(u.jsx)("div",{className:"wrapper",children:Object(u.jsx)("div",{className:"typing-demo",title:"Urheberschaft: https://github.com/markodenic",children:"OOps!! 404 NotFound!!!"})})})};var B=Object(d.b)(["wordsStore"])(Object(d.c)((function(e){var t=e.wordsStore,n=Object(c.useState)([]),a=Object(o.a)(n,2),r=a[0],s=a[1],i=Object(c.useState)(0),d=Object(o.a)(i,2),O=d[0],m=d[1];Object(c.useEffect)((function(){t.loadData()}),[]);var f=function(e){var t=new Set(r);return 0!==e?(m(O+1),t.add(e),s(Array.from(t))):(t.clear(),m(0),s([])),t.size};return Object(u.jsxs)("div",{className:"containerApp",children:[Object(u.jsx)(j.a,{children:Object(u.jsx)(b.d,{children:Object(u.jsxs)(b.b,{path:"/",element:Object(u.jsx)(h,{}),children:[Object(u.jsx)(b.b,{index:!0,element:Object(u.jsx)(T,{})}),Object(u.jsx)(b.b,{path:"addDelWord",element:Object(u.jsx)(D,{})}),Object(u.jsx)(b.b,{path:"game",element:Object(u.jsx)(l.b,{pagination:{onChange:function(e){console.log(e)},pageSize:1},dataSource:t.massWords,renderItem:function(e){return Object(u.jsx)(l.b.Item,{className:"listItemStyle",children:Object(u.jsx)(U,{idword:e.id,english:e.english,transcription:e.transcription,russian:e.russian,count:f},e.id)})},className:"list"})}),Object(u.jsx)(b.b,{path:"*",element:Object(u.jsx)(V,{})})]})})}),Object(u.jsx)(M,{children:"Footer"})]})})));var z=function(){return Object(u.jsx)(B,{})},q=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,404)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,r=t.getLCP,s=t.getTTFB;n(e),a(e),c(e),r(e),s(e)}))},G=n(26),H=n(27),K=n(401),Q={wordsStore:new function e(){var t=this;Object(G.a)(this,e),this.massWords=[],this.isLoading=!1,this.error=!1,this.loadData=Object(p.a)(m.a.mark((function e(){var n;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t.isLoading){e.next=2;break}return e.abrupt("return");case 2:return t.isLoading=!0,e.next=5,fetch("/api/words").then((function(e){if(e.ok)return e.json();throw new Error("Something went wrong ...")}));case 5:n=e.sent,Object(H.o)((function(){t.massWords=n,t.isLoading=!1}));case 7:case"end":return e.stop()}}),e)}))),this.update=function(){var e=Object(p.a)(m.a.mark((function e(n,a){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/api/words/".concat(n,"/update"),{method:"POST",headers:{"Content-Type":"application/json;charset=utf-8"},body:JSON.stringify(a)}).then((function(e){if(!e.ok)throw new Error("Something went wrong ...");t.loadData()}));case 2:e.sent;case 3:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),this.addWord=function(e){fetch("/api/words/add",{method:"POST",headers:{"Content-Type":"application/json;charset=utf-8"},body:JSON.stringify(e)}).then((function(e){console.log(e),t.loadData()})).catch((function(e){console.log(e)}))},this.removeWord=function(e){var n="";t.massWords.filter((function(t){return t.english===e?n=t:null})),n?fetch("/api/words/".concat(n.id,"/delete "),{method:"POST",headers:{"Content-Type":"application/json;charset=utf-8"},body:JSON.stringify(n),mode:"cors"}).then((function(e){if(e.ok)return e.json();throw new Error("Something went wrong ...")})).then((function(n){console.log(n),t.loadData(),K.a.info({title:e,content:Object(u.jsx)("div",{children:Object(u.jsx)("p",{children:"The word has been removed from the table! Congratulations!"})}),onOk:function(){}})})).catch((function(e){console.log(e)})):K.a.info({title:e,content:Object(u.jsx)("div",{children:Object(u.jsx)("p",{children:"There is no such word in the database!"})}),onOk:function(){}})},Object(H.l)(this)}};i.a.render(Object(u.jsx)(j.b,{basename:"/words_on_cards_project",children:Object(u.jsx)(r.a.StrictMode,{children:Object(u.jsx)(d.a,Object(a.a)(Object(a.a)({},Q),{},{children:Object(u.jsx)(z,{})}))})}),document.getElementById("root")),q()}},[[396,1,2]]]);
//# sourceMappingURL=main.7e02bea5.chunk.js.map