"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[119],{119:function(t,n,e){e.r(n),e.d(n,{default:function(){return h}});var r=e(861),a=e(439),c=e(757),u=e.n(c),s=e(529),o=e(791),i=e(87),f=e(689),p="TrendingList_list__7xRuf",v="TrendingList_item__mbDYf",l=e(184),d=function(){var t=(0,f.TH)(),n=(0,o.useState)([]),e=(0,a.Z)(n,2),c=e[0],d=e[1];return(0,o.useEffect)((function(){var t=function(){var t=(0,r.Z)(u().mark((function t(){var n;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,(0,s.Hg)();case 2:n=t.sent,d(n);case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();t()}),[]),(0,l.jsx)(l.Fragment,{children:(0,l.jsx)("ul",{className:p,children:c.map((function(n){return(0,l.jsx)("li",{className:v,children:(0,l.jsx)(i.rU,{to:"/movies/".concat(n.id.toString()),state:{from:t},children:n.title})},n.id)}))})})},h=function(){return(0,l.jsx)(l.Fragment,{children:(0,l.jsx)(d,{})})}},529:function(t,n,e){e.d(n,{Hg:function(){return i},IQ:function(){return v},Jh:function(){return l},Jn:function(){return p},zp:function(){return f}});var r=e(861),a=e(757),c=e.n(a),u=e(243),s=e(596),o="5d690f0bfcc9395ff58e80bfc32ac0d9";u.Z.defaults.baseURL="https://api.themoviedb.org/3/";var i=function(){var t=(0,r.Z)(c().mark((function t(){var n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,u.Z.get("trending/movie/day?api_key=".concat(o));case 3:return n=t.sent,t.abrupt("return",n.data.results);case 7:t.prev=7,t.t0=t.catch(0),(0,s.Am)("Movies not found");case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(){return t.apply(this,arguments)}}(),f=function(){var t=(0,r.Z)(c().mark((function t(n){var e;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,u.Z.get("search/keyword?api_key=".concat(o,"&query=").concat(n,"&page=1"));case 3:return e=t.sent,t.abrupt("return",e.data.results);case 7:t.prev=7,t.t0=t.catch(0),(0,s.Am)("Movies not found");case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(n){return t.apply(this,arguments)}}(),p=function(){var t=(0,r.Z)(c().mark((function t(n){var e;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,u.Z.get("movie/".concat(n,"?api_key=").concat(o));case 3:return e=t.sent,t.abrupt("return",e.data);case 7:t.prev=7,t.t0=t.catch(0),(0,s.Am)("Movies not found");case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(n){return t.apply(this,arguments)}}(),v=function(){var t=(0,r.Z)(c().mark((function t(n){var e;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,u.Z.get("/movie/".concat(n,"/credits?api_key=").concat(o));case 3:return e=t.sent,t.abrupt("return",e.data.cast);case 7:t.prev=7,t.t0=t.catch(0);case 9:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(n){return t.apply(this,arguments)}}(),l=function(){var t=(0,r.Z)(c().mark((function t(n){var e;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,u.Z.get("/movie/".concat(n,"/reviews?api_key=").concat(o));case 3:return e=t.sent,t.abrupt("return",e.data.results);case 7:t.prev=7,t.t0=t.catch(0),(0,s.Am)("Movies not found");case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(n){return t.apply(this,arguments)}}()}}]);
//# sourceMappingURL=119.a208e915.chunk.js.map