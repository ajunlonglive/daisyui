import{s as C,a as w,f as b,c as x,g as v,h as y,d,j as f,i as $,z as D,w as H,l as U,m as j,u as g,X as M,v as R}from"../chunks/scheduler.4207298b.js";import{S as V,i as q,b as G,d as L,m as P,a as T,t as Z,e as B}from"../chunks/index.04247e75.js";import{e as z}from"../chunks/each.e59479a4.js";import{S as F}from"../chunks/SEO.b0e6afe7.js";function S(n,e,a){const s=n.slice();return s[2]=e[a],s}function O(n){let e,a='<h1 class="text-base-content/30">Coming soon</h1>';return{c(){e=b("div"),e.innerHTML=a,this.h()},l(s){e=v(s,"DIV",{class:!0,"data-svelte-h":!0}),H(e)!=="svelte-1mm80pw"&&(e.innerHTML=a),this.h()},h(){f(e,"class","border-base-content/10 rounded-box flex h-96 w-full grow flex-col items-center justify-center border")},m(s,l){$(s,e,l)},d(s){s&&d(e)}}}function X(n){let e,a,s;return{c(){e=b("figure"),a=b("img"),this.h()},l(l){e=v(l,"FIGURE",{class:!0});var o=y(e);a=v(o,"IMG",{loading:!0,src:!0,class:!0,alt:!0,style:!0}),o.forEach(d),this.h()},h(){f(a,"loading","lazy"),M(a.src,s=n[2].thumbnail)||f(a,"src",s),f(a,"class","border-base-content bg-base-300 rounded-btn border border-opacity-5"),f(a,"alt",n[2].title),f(a,"style",`view-transition-name: ${encodeURI(n[2].slug).replace(/[^a-zA-Z]/g,"")}-img`),f(e,"class","mx-auto w-full object-cover p-6 max-sm:pb-0 sm:max-w-[12rem] sm:pe-0")},m(l,o){$(l,e,o),g(e,a)},p:R,d(l){l&&d(e)}}}function A(n){let e,a,s,l,o=n[2].title+"",u,h,i,t=n[2].desc+"",c,r,m=n[2].thumbnail&&X(n);return{c(){e=b("a"),m&&m.c(),a=w(),s=b("div"),l=b("h2"),u=U(o),h=w(),i=b("p"),c=U(t),r=w(),this.h()},l(p){e=v(p,"A",{class:!0,href:!0});var _=y(e);m&&m.l(_),a=x(_),s=v(_,"DIV",{class:!0,style:!0});var I=y(s);l=v(I,"H2",{class:!0});var E=y(l);u=j(E,o),E.forEach(d),h=x(I),i=v(I,"P",{class:!0});var k=y(i);c=j(k,t),k.forEach(d),I.forEach(d),r=x(_),_.forEach(d),this.h()},h(){f(l,"class","card-title"),f(i,"class","text-xs opacity-60"),f(s,"class","card-body"),f(s,"style",`view-transition-name: ${encodeURI(n[2].slug).replace(/[^a-zA-Z]/g,"")}-text`),f(e,"class","card sm:card-side hover:bg-base-200 transition-colors sm:max-w-none"),f(e,"href",`/blog/${n[2].slug}`)},m(p,_){$(p,e,_),m&&m.m(e,null),g(e,a),g(e,s),g(s,l),g(l,u),g(s,h),g(s,i),g(i,c),g(e,r)},p(p,_){p[2].thumbnail&&m.p(p,_)},d(p){p&&d(e),m&&m.d()}}}function J(n){let e,a,s,l,o;e=new F({props:{title:"daisyUI Blog",desc:"daisyUI blog - Updates, ideas and resources",img:"/images/blog.jpg"}});let u=n[0].length===0&&O(),h=z(n[0]),i=[];for(let t=0;t<h.length;t+=1)i[t]=A(S(n,h,t));return{c(){G(e.$$.fragment),a=w(),u&&u.c(),s=w(),l=b("div");for(let t=0;t<i.length;t+=1)i[t].c();this.h()},l(t){L(e.$$.fragment,t),a=x(t),u&&u.l(t),s=x(t),l=v(t,"DIV",{class:!0});var c=y(l);for(let r=0;r<i.length;r+=1)i[r].l(c);c.forEach(d),this.h()},h(){f(l,"class","grid justify-items-stretch gap-6")},m(t,c){P(e,t,c),$(t,a,c),u&&u.m(t,c),$(t,s,c),$(t,l,c);for(let r=0;r<i.length;r+=1)i[r]&&i[r].m(l,null);o=!0},p(t,[c]){if(c&1){h=z(t[0]);let r;for(r=0;r<h.length;r+=1){const m=S(t,h,r);i[r]?i[r].p(m,c):(i[r]=A(m),i[r].c(),i[r].m(l,null))}for(;r<i.length;r+=1)i[r].d(1);i.length=h.length}},i(t){o||(T(e.$$.fragment,t),o=!0)},o(t){Z(e.$$.fragment,t),o=!1},d(t){t&&(d(a),d(s),d(l)),B(e,t),u&&u.d(t),D(i,t)}}}function K(n,e,a){let{data:s}=e,{posts:l}=s;return n.$$set=o=>{"data"in o&&a(1,s=o.data)},[l,s]}class ee extends V{constructor(e){super(),q(this,e,K,J,C,{data:1})}}export{ee as component};
