"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[88],{713:function(e,t,n){n.d(t,{CD:function(){return v},Df:function(){return c},R_:function(){return m},Rg:function(){return f},tx:function(){return h}});var r=n(861),a=n(757),u=n.n(a),i=n(243),s="acf0af182bd80fd1b8fe4238ec11e366";function c(){return o.apply(this,arguments)}function o(){return(o=(0,r.Z)(u().mark((function e(){var t,n;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t="trending/movie/day?api_key=".concat(s),e.next=3,i.Z.get(t);case 3:return n=e.sent,e.abrupt("return",n.data.results);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function f(e){return l.apply(this,arguments)}function l(){return(l=(0,r.Z)(u().mark((function e(t){var n,r;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="movie/".concat(t,"?api_key=").concat(s,"&language=en-US"),e.next=3,i.Z.get(n);case 3:return r=e.sent,e.abrupt("return",r.data);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function v(e){return p.apply(this,arguments)}function p(){return(p=(0,r.Z)(u().mark((function e(t){var n,r;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="search/movie?api_key=".concat(s,"&language=en-US&query=").concat(t,"&page=1&include_adult=false"),e.next=3,i.Z.get(n);case 3:return r=e.sent,e.abrupt("return",r.data.results);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function m(e){return b.apply(this,arguments)}function b(){return(b=(0,r.Z)(u().mark((function e(t){var n,r;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="movie/".concat(t,"/credits?api_key=").concat(s,"&language=en-US"),e.next=3,i.Z.get(n);case 3:if(0!==(r=e.sent).data.cast.length){e.next=6;break}return e.abrupt("return",!1);case 6:return e.abrupt("return",r.data.cast);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function h(e){return x.apply(this,arguments)}function x(){return(x=(0,r.Z)(u().mark((function e(t){var n,r;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="movie/".concat(t,"/reviews?api_key=").concat(s,"&language=en-US&page=1"),e.next=3,i.Z.get(n);case 3:if(0!==(r=e.sent).data.total_results){e.next=6;break}return e.abrupt("return",!1);case 6:return e.abrupt("return",r.data.results);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}i.Z.defaults.baseURL="https://api.themoviedb.org/3/"},88:function(e,t,n){n.r(t),n.d(t,{default:function(){return N}});var r=n(439),a=n(791),u=n(87),i=n(713),s=n(689),c=n(955),o="MoviesList_movieList__8BnEE",f="MoviesList_movieItem__p4FQU",l="MoviesList_movieLink__QlD4H",v="MoviesList_movieImage__xaeaC",p="MoviesList_movieTitle__CxO8p",m=n(184);function b(e){var t=e.searchMovies,n=(0,s.TH)();return t&&0!==t.length||!n.search?(0,m.jsx)("ul",{className:o,children:t.map((function(e){return(0,m.jsx)("li",{className:f,children:(0,m.jsxs)(u.rU,{className:l,to:"/movies/".concat(e.id),state:{from:n},children:[(0,m.jsx)("img",{src:e.poster_path?"https://image.tmdb.org/t/p/w500".concat(e.poster_path):"".concat(c),alt:e.title,height:"446px",className:v}),(0,m.jsx)("p",{className:p,children:e.title})]})},e.id)}))}):(0,m.jsx)("p",{children:"No movies found."})}var h="Movies_moviesSection__o4M2J",x="Movies_moviesForm__Yo2Oo",d="Movies_moviesLabel__2EtTn",A="Movies_moviesInput__UOzRX",g="Movies_moviesButton__HvNMv";function N(){var e,t=(0,a.useState)(""),n=(0,r.Z)(t,2),s=n[0],c=n[1],o=(0,a.useState)([]),f=(0,r.Z)(o,2),l=f[0],v=f[1],p=(0,u.lr)(),N=(0,r.Z)(p,2),E=N[0],w=N[1],y=(null!==(e=E.get("query"))&&void 0!==e?e:"").trim();return(0,a.useEffect)((function(){c(y),""!==y&&(0,i.CD)(E.get("query")).then((function(e){v(e)}))}),[y,E]),(0,m.jsxs)("section",{className:h,children:[(0,m.jsxs)("form",{className:x,onSubmit:function(e){e.preventDefault(),""!==s.trim()&&w({query:s.trim()}),e.target.reset()},children:[(0,m.jsxs)("label",{className:d,children:["Input a search query \u2193"," ",(0,m.jsx)("input",{className:A,value:s,onChange:function(e){c(e.target.value)}})]}),(0,m.jsx)("button",{className:g,type:"submit",children:"Search"})]}),(0,m.jsx)(b,{searchMovies:l})]})}},955:function(e){e.exports="data:image/png;base64,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"}}]);
//# sourceMappingURL=88.12c34779.chunk.js.map