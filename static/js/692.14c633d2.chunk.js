"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[692],{713:function(t,e,n){n.d(e,{CD:function(){return l},Df:function(){return i},R_:function(){return d},Rg:function(){return p},tx:function(){return m}});var r=n(861),a=n(757),u=n.n(a),c=n(243),s="acf0af182bd80fd1b8fe4238ec11e366";function i(){return o.apply(this,arguments)}function o(){return(o=(0,r.Z)(u().mark((function t(){var e,n;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e="trending/movie/day?api_key=".concat(s),t.next=3,c.Z.get(e);case 3:return n=t.sent,t.abrupt("return",n.data.results);case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function p(t){return f.apply(this,arguments)}function f(){return(f=(0,r.Z)(u().mark((function t(e){var n,r;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n="movie/".concat(e,"?api_key=").concat(s,"&language=en-US"),t.next=3,c.Z.get(n);case 3:return r=t.sent,t.abrupt("return",r.data);case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function l(t){return h.apply(this,arguments)}function h(){return(h=(0,r.Z)(u().mark((function t(e){var n,r;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n="search/movie?api_key=".concat(s,"&language=en-US&query=").concat(e,"&page=1&include_adult=false"),t.next=3,c.Z.get(n);case 3:return r=t.sent,t.abrupt("return",r.data.results);case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function d(t){return g.apply(this,arguments)}function g(){return(g=(0,r.Z)(u().mark((function t(e){var n,r;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n="movie/".concat(e,"/credits?api_key=").concat(s,"&language=en-US"),t.next=3,c.Z.get(n);case 3:if(0!==(r=t.sent).data.cast.length){t.next=6;break}return t.abrupt("return",!1);case 6:return t.abrupt("return",r.data.cast);case 7:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function m(t){return v.apply(this,arguments)}function v(){return(v=(0,r.Z)(u().mark((function t(e){var n,r;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n="movie/".concat(e,"/reviews?api_key=").concat(s,"&language=en-US&page=1"),t.next=3,c.Z.get(n);case 3:if(0!==(r=t.sent).data.total_results){t.next=6;break}return t.abrupt("return",!1);case 6:return t.abrupt("return",r.data.results);case 7:case"end":return t.stop()}}),t)})))).apply(this,arguments)}c.Z.defaults.baseURL="https://api.themoviedb.org/3/"},692:function(t,e,n){n.r(e),n.d(e,{default:function(){return p}});var r=n(439),a=n(791),u=n(87),c=n(713),s=n(689),i=n(184);function o(t){var e=t.searchMovies,n=(0,s.TH)();return e&&0!==e.length?(0,i.jsx)("ul",{children:e.map((function(t){return(0,i.jsx)("li",{children:(0,i.jsxs)(u.rU,{to:"/movie/".concat(t.id),state:{from:n},children:[(0,i.jsx)("img",{src:t.poster_path?"https://image.tmdb.org/t/p/w500".concat(t.poster_path):"https://placeholder-url.com/placeholder-image.jpg",alt:t.title,height:"446px"}),(0,i.jsx)("p",{children:t.title})]})},t.id)}))}):(0,i.jsx)("p",{children:"No movies found."})}function p(){var t,e=(0,a.useState)(""),n=(0,r.Z)(e,2),s=n[0],p=n[1],f=(0,a.useState)([]),l=(0,r.Z)(f,2),h=l[0],d=l[1],g=(0,u.lr)(),m=(0,r.Z)(g,2),v=m[0],x=m[1],y=(null!==(t=v.get("query"))&&void 0!==t?t:"").trim();return(0,a.useEffect)((function(){p(y),""!==y&&(0,c.CD)(v.get("query")).then((function(t){d(t)}))}),[y,v]),(0,i.jsxs)("section",{children:[(0,i.jsxs)("form",{onSubmit:function(t){t.preventDefault(),""!==s.trim()&&x({query:s.trim()}),t.target.reset()},children:[(0,i.jsxs)("label",{children:["Provide a search term"," ",(0,i.jsx)("input",{value:s,onChange:function(t){p(t.target.value)}})]}),(0,i.jsx)("button",{type:"submit",children:"Search"})]}),(0,i.jsx)(o,{searchMovies:h})]})}}}]);
//# sourceMappingURL=692.14c633d2.chunk.js.map