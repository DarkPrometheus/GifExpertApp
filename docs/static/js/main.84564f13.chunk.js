(this["webpackJsonpgif-expert-app"]=this["webpackJsonpgif-expert-app"]||[]).push([[0],{17:function(e,t,n){},22:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n(1),c=n(7),i=n.n(c),s=(n(17),n(2)),u=n(10),o=function(e){var t=e.setCategories,n=Object(a.useState)(""),c=Object(s.a)(n,2),i=c[0],o=c[1];return Object(r.jsx)("form",{onSubmit:function(e){e.preventDefault(),i.trim().length>2&&(t((function(e){return[i].concat(Object(u.a)(e))})),o(""))},children:Object(r.jsx)("input",{type:"text",value:i,onChange:function(e){o(e.target.value)},placeholder:"Dame un texto y te dare un gif"})})},j=n(11),d=n(8),l=function(e){var t=e.title,n=e.url;return Object(r.jsxs)("div",{className:"card animate__animated animate__bounceInLeft",children:[Object(r.jsx)("img",{src:n,alt:t}),Object(r.jsx)("p",{children:t}),Object(r.jsx)(d.CopyToClipboard,{text:n,children:Object(r.jsx)("i",{class:"fas fa-copy"})})]})},p=n(6),b=n.n(p),f=n(9),O=function(){var e=Object(f.a)(b.a.mark((function e(t){var n,r,a,c,i;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="https://api.giphy.com/v1/gifs/search?q=".concat(encodeURI(t),"&limit=10&api_key=DXUDxJeoX1KtKQ0hmwF68r1zkmTKjOgm"),e.next=3,fetch(n);case 3:return r=e.sent,e.next=6,r.json();case 6:return a=e.sent,c=a.data,i=c.map((function(e){var t;return{id:e.id,title:e.title,url:null===(t=e.images)||void 0===t?void 0:t.downsized_medium.url}})),e.abrupt("return",i);case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),x=function(e){var t=e.category,n=function(e){var t=Object(a.useState)({data:[],loading:!0}),n=Object(s.a)(t,2),r=n[0],c=n[1];return Object(a.useEffect)((function(){O(e).then((function(e){c({data:e,loading:!1})}))}),[e]),r}(t),c=n.data,i=n.loading;return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)("h3",{className:"CategoryTitle",children:t}),i&&Object(r.jsx)("p",{children:"Cargando"}),Object(r.jsx)("div",{className:"CardGrid",children:c.map((function(e){return Object(r.jsx)(l,Object(j.a)({},e),e.id)}))})]})},h=function(){var e=Object(a.useState)([""]),t=Object(s.a)(e,2),n=t[0],c=t[1];return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)("h2",{children:"GifExpertApp"}),Object(r.jsx)(o,{setCategories:c}),Object(r.jsx)("hr",{}),Object(r.jsx)("ol",{children:n.map((function(e){return Object(r.jsx)(x,{category:e},e)}))})]})};i.a.render(Object(r.jsx)(h,{}),document.getElementById("root"))}},[[22,1,2]]]);
//# sourceMappingURL=main.84564f13.chunk.js.map