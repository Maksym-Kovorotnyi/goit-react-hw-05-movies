"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[76],{76:function(t,e,n){n.r(e),n.d(e,{default:function(){return d}});var r=n(861),a=n(439),c=n(757),u=n.n(c),s=n(529),o=n(791),i=n(689),p="Cast_list__GlWio",f="Cast_item__a0CDL",v="Cast_img__-isbW",l="Cast_character__tKDlA",h="Cast_name__6UbFm",m=n(184),d=function(){var t=(0,o.useState)(null),e=(0,a.Z)(t,2),n=e[0],c=e[1],d=(0,i.UO)().movieId;return(0,o.useEffect)((function(){var t=function(){var t=(0,r.Z)(u().mark((function t(){var e;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,(0,s.IQ)(d);case 3:e=t.sent,c(e),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),console.log("error");case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(){return t.apply(this,arguments)}}();t()}),[d]),(0,m.jsx)(m.Fragment,{children:n&&(0,m.jsx)("ul",{className:p,children:n.map((function(t){var e=t.id,n=t.profile_path,r=t.character,a=t.name;return(0,m.jsxs)("li",{className:f,children:[(0,m.jsx)("img",{className:v,src:n?"https://image.tmdb.org/t/p/w500".concat(n):"https://vaksi.by/design/verona/images/no_image.png",alt:"name",width:"100"}),(0,m.jsx)("p",{className:l,children:r}),(0,m.jsx)("p",{className:h,children:a})]},e)}))})})}},529:function(t,e,n){n.d(e,{Hg:function(){return i},IQ:function(){return v},Jh:function(){return l},Jn:function(){return f},zp:function(){return p}});var r=n(861),a=n(757),c=n.n(a),u=n(243),s=n(596),o="5d690f0bfcc9395ff58e80bfc32ac0d9";u.Z.defaults.baseURL="https://api.themoviedb.org/3/";var i=function(){var t=(0,r.Z)(c().mark((function t(){var e;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,u.Z.get("trending/movie/day?api_key=".concat(o));case 3:return e=t.sent,t.abrupt("return",e.data.results);case 7:t.prev=7,t.t0=t.catch(0),(0,s.Am)("Movies not found");case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(){return t.apply(this,arguments)}}(),p=function(){var t=(0,r.Z)(c().mark((function t(e){var n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,u.Z.get("search/keyword?api_key=".concat(o,"&query=").concat(e,"&page=1"));case 3:return n=t.sent,t.abrupt("return",n.data.results);case 7:t.prev=7,t.t0=t.catch(0),(0,s.Am)("Movies not found");case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(e){return t.apply(this,arguments)}}(),f=function(){var t=(0,r.Z)(c().mark((function t(e){var n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,u.Z.get("movie/".concat(e,"?api_key=").concat(o));case 3:return n=t.sent,t.abrupt("return",n.data);case 7:t.prev=7,t.t0=t.catch(0),(0,s.Am)("Movies not found");case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(e){return t.apply(this,arguments)}}(),v=function(){var t=(0,r.Z)(c().mark((function t(e){var n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,u.Z.get("/movie/".concat(e,"/credits?api_key=").concat(o));case 3:return n=t.sent,t.abrupt("return",n.data.cast);case 7:t.prev=7,t.t0=t.catch(0);case 9:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(e){return t.apply(this,arguments)}}(),l=function(){var t=(0,r.Z)(c().mark((function t(e){var n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,u.Z.get("/movie/".concat(e,"/reviews?api_key=").concat(o));case 3:return n=t.sent,t.abrupt("return",n.data.results);case 7:t.prev=7,t.t0=t.catch(0),(0,s.Am)("Movies not found");case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(e){return t.apply(this,arguments)}}()}}]);
//# sourceMappingURL=76.5dc5222b.chunk.js.map