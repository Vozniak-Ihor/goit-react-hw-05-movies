"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[535],{705:function(t,e,r){r.r(e),r.d(e,{default:function(){return g}});var n=r(861),a=r(439),c=r(757),s=r.n(c),u=r(636),i=r(791),o=r(689),l=r(87),p="Cast_castBtn__ZnRtv",f="Cast_castList__ARoWn",m="Cast_castItem__-Jcfe",h="Cast_castImg__T4WbF",d="Cast_castImg2__d+bBA",v="Cast_castName__-i08u",x="Cast_castCharacter__Rliw1",_=r.p+"static/media/Actor.04155d096aa94c3803a9.png",b=r(184),g=function(){var t,e,r=(0,i.useState)([]),c=(0,a.Z)(r,2),g=c[0],w=c[1],Z=(0,i.useState)(null),j=(0,a.Z)(Z,2),y=j[0],I=j[1],k=(0,o.UO)().id;(0,i.useEffect)((function(){var t=function(){var t=(0,n.Z)(s().mark((function t(){var e;return s().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,(0,u.M1)(k);case 3:e=t.sent,w(e),console.log(e),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),I(t.t0);case 11:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(){return t.apply(this,arguments)}}();t()}),[k]);var N=(0,o.TH)(),C=(0,i.useRef)(null!==(t=null===(e=N.state)||void 0===e?void 0:e.from)&&void 0!==t?t:"/movies/".concat(k));return(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)(l.OL,{to:C.current,children:(0,b.jsx)("button",{className:p,children:"\ud83d\udc46roll up"})}),y&&(0,b.jsx)("b",{children:"Sorry, there are some problems. Try to come back a little later."}),g&&(0,b.jsx)("ul",{className:f,children:g.map((function(t){var e=t.id,r=t.name,n=t.character,a=t.profile_path;return(0,b.jsxs)("li",{className:m,children:[a&&(0,b.jsx)("img",{src:"https://image.tmdb.org/t/p/w300/".concat(a),alt:r,className:h}),!a&&(0,b.jsx)("img",{src:_,alt:r,className:d}),(0,b.jsx)("b",{className:v,children:r}),(0,b.jsx)("p",{className:x,children:n})]},e)}))})]})}},636:function(t,e,r){r.d(e,{Hg:function(){return i},M1:function(){return p},TP:function(){return l},V0:function(){return o},tx:function(){return f}});var n=r(861),a=r(757),c=r.n(a),s=r(243);s.Z.defaults.baseURL="https://api.themoviedb.org/3/";var u={method:"GET",headers:{accept:"application/json",Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxYjMyMzYxY2E2ZmViZTQzOGE5OGM3YmQyODU3MDk3MyIsInN1YiI6IjY0OTljZGYyYjM0NDA5MDEzOTg1NmI4NCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.noujh3925jamJn7mF9RpSygXqaaI6zmGD6p385AGBAw"}},i=function(){var t=(0,n.Z)(c().mark((function t(){var e;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.Z.get("trending/all/day?",u);case 2:return e=t.sent,t.abrupt("return",e.data.results);case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),o=function(){var t=(0,n.Z)(c().mark((function t(e){var r;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.Z.get("search/movie?query=".concat(e),u);case 2:return r=t.sent,t.abrupt("return",r.data.results);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),l=function(){var t=(0,n.Z)(c().mark((function t(e){var r;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.Z.get("movie/".concat(e,"?"),u);case 2:return r=t.sent,console.log(r.data),t.abrupt("return",r.data);case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),p=function(){var t=(0,n.Z)(c().mark((function t(e){var r;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.Z.get("movie/".concat(e,"/credits?"),u);case 2:return r=t.sent,t.abrupt("return",r.data.cast);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),f=function(){var t=(0,n.Z)(c().mark((function t(e){var r;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.Z.get("movie/".concat(e,"/reviews?"),u);case 2:return r=t.sent,t.abrupt("return",r.data.results);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}}]);
//# sourceMappingURL=535.19843d96.chunk.js.map