"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[711],{711:function(t,e,n){n.r(e),n.d(e,{default:function(){return w}});var r=n(861),a=n(439),u=n(757),s=n.n(u),c=n(87),i=n(636),o=n(791),f=n(689),p="MoviesList_list__0Owr9",l="MoviesList_item__eePYv",v="MoviesList_link__8rTGX",h=n(184),m=function(t){var e=t.movies,n=(0,f.TH)();return(0,h.jsx)("ul",{className:p,children:e&&e.map((function(t){return(0,h.jsx)("li",{className:l,children:(0,h.jsx)(c.rU,{to:"/movies/".concat(t.id),state:{from:n},className:v,children:t.title||t.name})},t.id)}))})},d="InputMovies_input__os60j",x=function(t){var e=t.value,n=t.onChange;return(0,h.jsx)("input",{type:"text",value:e,placeholder:"Enter the film title",onChange:function(t){return n(t.target.value)},className:d})},Z="Movies_container__+-Cnt",w=function(){var t,e=(0,c.lr)(),n=(0,a.Z)(e,2),u=n[0],f=n[1],p=(0,o.useState)(""),l=(0,a.Z)(p,2),v=l[0],d=l[1],w=(0,o.useState)(!1),y=(0,a.Z)(w,2),_=y[0],j=y[1],g=null!==(t=u.get("name"))&&void 0!==t?t:"";(0,o.useEffect)((function(){if(g){j(!1),d("");var t=function(){var t=(0,r.Z)(s().mark((function t(){var e;return s().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,(0,i.V0)(g);case 2:if(0!==(e=t.sent).length){t.next=6;break}return j(!0),t.abrupt("return");case 6:d(e);case 7:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();t()}}),[g]);return(0,h.jsxs)("main",{className:Z,children:[_&&(0,h.jsx)("b",{children:"No results for your request"}),(0,h.jsx)(x,{value:g,onChange:function(t){f(""!==t?{name:t}:{})}}),(0,h.jsx)(m,{movies:v})]})}},636:function(t,e,n){n.d(e,{Hg:function(){return i},M1:function(){return p},TP:function(){return f},V0:function(){return o},tx:function(){return l}});var r=n(861),a=n(757),u=n.n(a),s=n(243);s.Z.defaults.baseURL="https://api.themoviedb.org/3/";var c={method:"GET",headers:{accept:"application/json",Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxYjMyMzYxY2E2ZmViZTQzOGE5OGM3YmQyODU3MDk3MyIsInN1YiI6IjY0OTljZGYyYjM0NDA5MDEzOTg1NmI4NCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.noujh3925jamJn7mF9RpSygXqaaI6zmGD6p385AGBAw"}},i=function(){var t=(0,r.Z)(u().mark((function t(){var e;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.Z.get("trending/all/day?",c);case 2:return e=t.sent,t.abrupt("return",e.data.results);case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),o=function(){var t=(0,r.Z)(u().mark((function t(e){var n;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.Z.get("search/movie?query=".concat(e),c);case 2:return n=t.sent,t.abrupt("return",n.data.results);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),f=function(){var t=(0,r.Z)(u().mark((function t(e){var n;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.Z.get("movie/".concat(e,"?"),c);case 2:return n=t.sent,console.log(n.data),t.abrupt("return",n.data);case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),p=function(){var t=(0,r.Z)(u().mark((function t(e){var n;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.Z.get("movie/".concat(e,"/credits?"),c);case 2:return n=t.sent,t.abrupt("return",n.data.cast);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),l=function(){var t=(0,r.Z)(u().mark((function t(e){var n;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.Z.get("movie/".concat(e,"/reviews?"),c);case 2:return n=t.sent,t.abrupt("return",n.data.results);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}}]);
//# sourceMappingURL=711.ced8ccdc.chunk.js.map