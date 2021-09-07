(this["webpackJsonpevelyn-anais-portfolio"]=this["webpackJsonpevelyn-anais-portfolio"]||[]).push([[0],[,,,,,,,,,,,,,,function(e,t,a){},function(e,t,a){},,function(e,t,a){},function(e,t,a){},,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var c=a(1),n=a.n(c),s=a(9),r=a.n(s),i=(a(14),a(15),a(0));function l(){return Object(i.jsxs)("header",{children:[Object(i.jsx)("hr",{className:"hr"}),Object(i.jsx)("hr",{className:"hr-black"})]})}function o(){return Object(i.jsx)("footer",{children:Object(i.jsx)("h6",{className:"text-center",children:"\xa9 2021 Evelyn Ploughman"})})}var d=a(3),j=a.p+"static/media/learningJS.f6864b97.jpg",h=a.p+"static/media/outside.fe7106e9.jpg",u=a.p+"static/media/rightBefore.2743be0a.jpg",b=a.p+"static/media/withHat.ab0af8da.jpg",m=["marvelous","delightful","dreamy","wicked","brilliant","smashing","fine","galactic","grand"];var f=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];a(17);function x(){var e,t=Object(c.useState)("great"),a=Object(d.a)(t,2),n=a[0],s=a[1];return function(e,t){var a=Object(c.useRef)();Object(c.useEffect)((function(){a.current=e}),[e]),Object(c.useEffect)((function(){if(null!==t){var e=setInterval((function(){a.current()}),t);return function(){return clearInterval(e)}}}),[t])}((function(){var e;s((e=m)[Math.floor(Math.random()*e.length)])}),3e3),Object(i.jsxs)("section",{children:[Object(i.jsx)("div",{className:"tri-three2"}),Object(i.jsxs)("div",{className:"container mt-5",children:[Object(i.jsxs)("div",{className:"row",children:[Object(i.jsx)("div",{className:"col-sm",children:Object(i.jsx)("img",{src:j,className:"rounded img-thumbnail",alt:"..."})}),Object(i.jsx)("div",{className:"col-sm",children:Object(i.jsx)("img",{src:h,className:"rounded img-thumbnail",alt:"..."})}),Object(i.jsx)("div",{className:"col-sm",children:Object(i.jsx)("img",{src:u,className:"rounded img-thumbnail",alt:"..."})}),Object(i.jsx)("div",{className:"col-sm",children:Object(i.jsx)("img",{src:b,className:"rounded img-thumbnail",alt:"..."})})]}),Object(i.jsxs)("div",{className:"mt-5 mb-5",children:[Object(i.jsx)("h2",{children:"Who Am I?"}),Object(i.jsx)("p",{children:'I believe that the only consistent thing in life is change and I love that about the tech world. It is constantly changing! Learning is the other thing that is consistent in life! In the tech world there is always something new to learn. Basically tech and I get along! Even if at times we have our differences with margins on a "div" or an "s" missing somewhere and I get a 500 server error.'}),Object(i.jsx)("p",{children:"I like simplicity and efficiency, I like data! I love to learn! I have liked tech for a very long time! I remember the first computers and phones that I owned. I liked messing with the settings and I still do. I was the person who read the manuals and I am still the person who will read a gym contract. I suppose I like to be well informed. Tell me what I can and can't do!"}),Object(i.jsx)("p",{children:'The best part about software is that "tell me what I can and can\'t do" goes out the window. Yes, we all follow guidelines to help each other understand, which is fantastic. But, what you can do with software is only limited to your imagination! Well, imagination and how much you are willing to learn!'}),Object(i.jsx)("p",{children:"I am a tech nerd, I am about living as sustainably as I can, and I am someone who will always push my understanding. Also, I love spread sheets and now that I can make RESTful APIs, I want to make everything into an API!"}),Object(i.jsxs)("h4",{children:["Thanks for reading! Have a ",Object(i.jsx)("span",{className:"synonym",children:n})," ",(e=f,e[(new Date).getDay()]),"!"]})]})]})]})}a(18);function O(){return Object(i.jsxs)("section",{className:"text-center my-4",children:[Object(i.jsx)("a",{className:"a-contact",href:"https://github.com/evelynAnais",target:"_blank",rel:"noreferrer",children:Object(i.jsx)("i",{className:"fab fa-github fa-2x"})}),Object(i.jsx)("a",{className:"a-contact",href:"https://twitter.com/evelynAnais44",target:"_blank",rel:"noreferrer",children:Object(i.jsx)("i",{className:"fab fa-twitter fa-2x"})}),Object(i.jsx)("a",{className:"a-contact",href:"https://www.linkedin.com/in/evelyn-ploughman/",target:"_blank",rel:"noreferrer",children:Object(i.jsx)("i",{className:"fab fa-linkedin-in fa-2x"})}),Object(i.jsx)("a",{className:"a-contact",href:"mailto:evelyn.a.n.d.30@gmail.com",target:"_blank",rel:"noreferrer",children:Object(i.jsx)("i",{className:"fas fa-envelope fa-2x"})}),Object(i.jsx)("hr",{className:"hr"}),Object(i.jsx)("hr",{className:"hr-black"})]})}var p=a(8),v=a(2),g=a.n(v),N=a(5),y="https://evelyn-portfolio-backend.herokuapp.com/jokes",w="https://evelyn-portfolio-backend.herokuapp.com/quotes",k="https://evelyn-portfolio-backend.herokuapp.com/projects";function I(e,t,a){return _.apply(this,arguments)}function _(){return(_=Object(N.a)(g.a.mark((function e(t,a,c){var n;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch(t,a);case 3:if(!((n=e.sent).status<200||n.status>399)){e.next=6;break}throw new Error("".concat(n.status," - ").concat(n.statusText));case 6:if(204!==n.status){e.next=8;break}return e.abrupt("return",null);case 8:return e.next=10,n.json();case 10:return e.abrupt("return",e.sent);case 13:if(e.prev=13,e.t0=e.catch(0),"AbortError"===e.t0.name){e.next=18;break}throw console.error(e.t0.stack),e.t0;case 18:return e.abrupt("return",Promise.resolve(c));case 19:case"end":return e.stop()}}),e,null,[[0,13]])})))).apply(this,arguments)}function S(){return E.apply(this,arguments)}function E(){return(E=Object(N.a)(g.a.mark((function e(){var t;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t="".concat(y),e.next=3,I(t,{});case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function T(){return M.apply(this,arguments)}function M(){return(M=Object(N.a)(g.a.mark((function e(){var t;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t="".concat(w),e.next=3,I(t,{});case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function P(){return(P=Object(N.a)(g.a.mark((function e(){var t;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t="".concat(k),e.next=3,I(t,{});case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}(new Headers).append("Content-Type","application/json");a(20);function q(e){var t,a,c,n,s=e.sayings;return s.length&&(n=s[Math.floor(Math.random()*s.length)]),Object(i.jsx)("div",{className:"card border-0 bg-transparent note",children:Object(i.jsxs)("div",{className:"card-body px-0 py-0",children:[Object(i.jsx)("hr",{}),Object(i.jsxs)("blockquote",{className:"blockquote",children:[Object(i.jsx)("p",{children:(null===(t=n)||void 0===t?void 0:t.joke)||(null===(a=n)||void 0===a?void 0:a.quote)}),Object(i.jsx)("footer",{className:"blockquote-footer",children:Object(i.jsx)("cite",{title:"Source Title",children:null===(c=n)||void 0===c?void 0:c.who_said})})]})]})})}a(21);function A(){var e=Object(c.useState)([]),t=Object(d.a)(e,2),a=t[0],n=t[1];return Object(c.useEffect)((function(){Promise.all([S(),T()]).then((function(e){var t=Object(d.a)(e,2),a=t[0],c=t[1];n([].concat(Object(p.a)(a.data),Object(p.a)(c.data)))}))}),[]),Object(i.jsxs)("section",{className:"view",children:[Object(i.jsx)("div",{className:"arrowSliding",children:Object(i.jsx)("div",{className:"tri-one"})}),Object(i.jsx)("div",{className:"arrowSliding4",children:Object(i.jsx)("div",{className:"tri-two"})}),Object(i.jsx)("div",{className:"tri-three"}),Object(i.jsx)("div",{className:"arrowSliding2 absolute",children:Object(i.jsx)("div",{className:"tri-four"})}),Object(i.jsxs)("div",{className:"absolute-intro",children:[Object(i.jsx)("h1",{children:"Hello, I'm Evelyn!"}),Object(i.jsx)("h4",{children:"I'm a full stack Software Engineer"}),Object(i.jsx)(q,{sayings:a})]})]})}a(22);var B=a.p+"static/media/circle.4ad6f260.svg";function C(){return Object(i.jsxs)("div",{className:"d-flex flex-column justify-content-center align-items-center py-4",children:[Object(i.jsx)("img",{className:"size rotate",src:B}),Object(i.jsx)("h4",{children:"Waking up my lazy API, once it gives me my projects I'll shuffle them around!"}),Object(i.jsx)("p",{children:"...refresh and projects will reshuffle"})]})}a(23);function H(e){var t=e.item,a=t.code_url&&Object(i.jsx)("a",{href:null===t||void 0===t?void 0:t.code_url,className:"card-link links",target:"_blank",rel:"noreferrer",children:"Frontend Code"}),c=t.api_code_url&&Object(i.jsx)("a",{href:null===t||void 0===t?void 0:t.api_code_url,className:"card-link links",target:"_blank",rel:"noreferrer",children:"Backend Code"});return Object(i.jsx)("div",{className:"container mt-2",children:Object(i.jsx)("div",{className:"row d-flex justify-content-around task",children:Object(i.jsxs)("div",{className:"card border-1 borderColor",children:[Object(i.jsx)("a",{href:null===t||void 0===t?void 0:t.live_url,target:"_blank",rel:"noreferrer",children:Object(i.jsx)("img",{src:null===t||void 0===t?void 0:t.color_img,className:"card-img-top grayscale abstract",alt:"..."})}),Object(i.jsx)("div",{className:"details",children:Object(i.jsxs)("div",{className:"details__inner",children:[Object(i.jsxs)("div",{className:"card-body",children:[Object(i.jsx)("h5",{className:"card-title",children:null===t||void 0===t?void 0:t.title}),Object(i.jsx)("p",{className:"card-text",children:null===t||void 0===t?void 0:t.comment})]}),Object(i.jsx)("hr",{}),Object(i.jsx)("ul",{className:"list-group list-group-flush",children:Object(i.jsx)("li",{className:"list-group-item",children:null===t||void 0===t?void 0:t.tech_stack})}),Object(i.jsx)("hr",{}),Object(i.jsxs)("div",{className:"card-body",children:[Object(i.jsx)("a",{href:null===t||void 0===t?void 0:t.live_url,className:"card-link links",target:"_blank",rel:"noreferrer",children:"Live"}),Object(i.jsx)("span",{children:" || "}),a&&c?Object(i.jsxs)(i.Fragment,{children:[a,Object(i.jsx)("span",{children:" || "}),c]}):a||c]})]})})]})})})}function J(e){var t=function(e){for(var t,a,c=e.length;c;)a=Math.floor(Math.random()*c--),t=e[c],e[c]=e[a],e[a]=t;return e}(e.project.filter((function(e){return e.display})).map((function(e,t){return Object(i.jsx)(H,{item:e},t)})));return Object(i.jsxs)("div",{className:"container",children:[Object(i.jsxs)("div",{className:"row",children:[Object(i.jsx)("div",{className:"col",children:t.slice(0,t.length/2)}),Object(i.jsx)("div",{className:"col",children:t.slice(t.length/2)})]}),Object(i.jsx)("div",{className:"row d-flex justify-content-around"})]})}a(24);function L(){var e=Object(c.useState)([]),t=Object(d.a)(e,2),a=t[0],n=t[1],s=Object(c.useState)(!1),r=Object(d.a)(s,2),l=r[0],o=r[1];return Object(c.useEffect)((function(){o(!0),function(){return P.apply(this,arguments)}().then((function(e){n(e.data),o(!1)}))}),[]),Object(i.jsxs)("section",{children:[Object(i.jsx)("div",{className:"container",children:Object(i.jsxs)("div",{className:"row d-flex",children:[Object(i.jsx)("hr",{className:"hr"}),Object(i.jsx)("hr",{className:"hr-black"}),Object(i.jsx)("h2",{className:"mb-4",children:"Projects"})]})}),Object(i.jsx)(J,{project:a}),l&&Object(i.jsx)(C,{}),Object(i.jsx)("div",{className:"d-flex flex-column justify-content-center align-items-center py-4",children:Object(i.jsx)("div",{className:"card border-0 bg-transparent projectSize",children:Object(i.jsx)("div",{className:"card-body px-0 py-0",children:Object(i.jsxs)("blockquote",{className:"blockquote",children:[Object(i.jsx)("hr",{}),Object(i.jsxs)("footer",{className:"blockquote-footer",children:["Portfolio Tech Stack",Object(i.jsxs)("cite",{title:"Source Title",children:[" ",Object(i.jsx)("br",{}),"Javascript, Express, PostgreSQL, Node.js, Knex, React, HTML5, CSS3, Bootstrap"]}),Object(i.jsx)("hr",{})]})]})})})})]})}a(25);function W(){return Object(i.jsxs)("main",{className:"container-fluid",children:[Object(i.jsx)(l,{}),Object(i.jsx)(A,{}),Object(i.jsx)(x,{}),Object(i.jsx)(L,{}),Object(i.jsx)(O,{}),Object(i.jsx)(o,{})]})}r.a.render(Object(i.jsx)(n.a.StrictMode,{children:Object(i.jsx)(W,{})}),document.getElementById("root"))}],[[26,1,2]]]);
//# sourceMappingURL=main.c447d6b7.chunk.js.map