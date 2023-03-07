"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[624],{624:function(e,t,r){r.r(t),r.d(t,{default:function(){return j}});var n=r(861),a=r(439),o=r(757),c=r.n(o),s=r(529),i=r(791),u=r(689),p="MovieCard_container__4KN1P",d="MovieCard_poster__B9RSd",l="MovieCard_infoContainer__tXrEG",f="MovieCard_title__mQEBM",v="MovieCard_releaseDate__qS1DG",x="MovieCard_userScore__9QycZ",h="MovieCard_reviewTitle__vVyam",m="MovieCard_review__nrocI",_="MovieCard_genre__k3oyu",g="MovieCard_genreList__2RqcD",w="MovieCard_genreItem__0Cgvp",b=r(184),k=function(){var e=(0,i.useState)([]),t=(0,a.Z)(e,2),r=t[0],o=t[1],k=(0,u.UO)().movieId;(0,i.useEffect)((function(){var e=function(){var e=(0,n.Z)(c().mark((function e(){var t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,s.Jn)(k);case 2:t=e.sent,o(t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}),[k]);var y=r.poster_path,j=r.title,C=r.vote_average,M=r.release_date,Z=r.overview,N=r.genres;return(0,b.jsx)(b.Fragment,{children:(0,b.jsxs)("div",{className:p,children:[(0,b.jsx)("img",{className:d,src:y&&"https://image.tmdb.org/t/p/w500".concat(y),alt:j,width:"200"}),(0,b.jsxs)("div",{className:l,children:[(0,b.jsx)("span",{className:f,children:j}),(0,b.jsx)("span",{className:v,children:M}),(0,b.jsxs)("p",{className:x,children:["User Score: ",Math.round(10*C),"%"]}),(0,b.jsx)("p",{className:h,children:"Overview"}),(0,b.jsx)("p",{className:m,children:Z}),(0,b.jsx)("p",{className:_,children:"Genres"}),(0,b.jsx)("p",{className:g,children:N&&N.map((function(e){return(0,b.jsx)("span",{className:w,children:e.name},e.id)}))})]})]})})},y=r(87),j=function(){var e,t,r,n=(0,u.TH)();return console.log(n.state.from),(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)(y.rU,{style:{textDecoration:"none",color:"#4a4a4a",fontSize:"16px",fontWeight:"600",padding:"8px 16px",borderRadius:"4px",backgroundColor:"#f7f7f7",boxShadow:"0px 1px 3px rgba(0, 0, 0, 0.1)",transition:"all 0.2s ease-in-out",marginRight:"16px",marginBottom:"16px"},to:null!==(e=n.state.from)&&void 0!==e?e:"/",children:"Go back"}),(0,b.jsx)(k,{}),(0,b.jsx)(y.rU,{style:{textDecoration:"none",color:"#0077c0",fontSize:"14px",fontWeight:"500",padding:"6px 12px",borderRadius:"4px",backgroundColor:"#f5f9ff",boxShadow:"0px 1px 3px rgba(0, 0, 0, 0.1)",transition:"all 0.2s ease-in-out",marginRight:"16px",marginBottom:"16px"},to:"cast",state:null!==(t=n.state)&&void 0!==t?t:"/",children:"Cast"}),(0,b.jsx)(y.rU,{style:{textDecoration:"none",color:"#0077c0",fontSize:"14px",fontWeight:"500",padding:"6px 12px",borderRadius:"4px",backgroundColor:"#f5f9ff",boxShadow:"0px 1px 3px rgba(0, 0, 0, 0.1)",transition:"all 0.2s ease-in-out",marginRight:"16px",marginBottom:"16px"},to:"reviews",state:null!==(r=n.state)&&void 0!==r?r:"/",children:"Reviews"}),(0,b.jsx)(u.j3,{})]})}},529:function(e,t,r){r.d(t,{Hg:function(){return u},IQ:function(){return l},Jh:function(){return f},Jn:function(){return d},zp:function(){return p}});var n=r(861),a=r(757),o=r.n(a),c=r(243),s=r(596),i="5d690f0bfcc9395ff58e80bfc32ac0d9";c.Z.defaults.baseURL="https://api.themoviedb.org/3/";var u=function(){var e=(0,n.Z)(o().mark((function e(){var t;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,c.Z.get("trending/movie/day?api_key=".concat(i));case 3:return t=e.sent,e.abrupt("return",t.data.results);case 7:e.prev=7,e.t0=e.catch(0),(0,s.Am)("Movies not found");case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}(),p=function(){var e=(0,n.Z)(o().mark((function e(t){var r;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,c.Z.get("search/keyword?api_key=".concat(i,"&query=").concat(t,"&page=1"));case 3:return r=e.sent,e.abrupt("return",r.data.results);case 7:e.prev=7,e.t0=e.catch(0),(0,s.Am)("Movies not found");case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}(),d=function(){var e=(0,n.Z)(o().mark((function e(t){var r;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,c.Z.get("movie/".concat(t,"?api_key=").concat(i));case 3:return r=e.sent,e.abrupt("return",r.data);case 7:e.prev=7,e.t0=e.catch(0),(0,s.Am)("Movies not found");case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}(),l=function(){var e=(0,n.Z)(o().mark((function e(t){var r;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,c.Z.get("/movie/".concat(t,"/credits?api_key=").concat(i));case 3:return r=e.sent,e.abrupt("return",r.data.cast);case 7:e.prev=7,e.t0=e.catch(0);case 9:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}(),f=function(){var e=(0,n.Z)(o().mark((function e(t){var r;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,c.Z.get("/movie/".concat(t,"/reviews?api_key=").concat(i));case 3:return r=e.sent,e.abrupt("return",r.data.results);case 7:e.prev=7,e.t0=e.catch(0),(0,s.Am)("Movies not found");case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}()}}]);
//# sourceMappingURL=624.8ea3e3cc.chunk.js.map