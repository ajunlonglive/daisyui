import{s as R,E as D,A as V,O as C,a as y,c as w,i as m,d,f as h,g as x,w as M,j as b,v as T,l as A,h as E,m as H,u as L,W as Y,U as P}from"../chunks/scheduler.4207298b.js";import{S as q,i as F,b as p,d as u,m as $,a as _,t as v,e as g}from"../chunks/index.04247e75.js";import{g as O,a as j}from"../chunks/spread.8a54911c.js";import{M as U,p as W,C as G,a as z,r as B}from"../chunks/ClassTable.4043908d.js";import{B as J}from"../chunks/BrowserSupport.812193dd.js";function K(c){let e,n='<div class="diff-item-1"><img alt="daisy" src="/images/stock/photo-1560717789-0ac7c58ac90a.jpg"/></div> <div class="diff-item-2"><img alt="daisy" src="/images/stock/photo-1560717789-0ac7c58ac90a-blur.jpg"/></div> <div class="diff-resizer"></div>';return{c(){e=h("div"),e.innerHTML=n,this.h()},l(t){e=x(t,"DIV",{class:!0,"data-svelte-h":!0}),M(e)!=="svelte-1n0ynmf"&&(e.innerHTML=n),this.h()},h(){b(e,"class","diff rounded-btn aspect-[16/9]")},m(t,l){m(t,e,l)},p:T,d(t){t&&d(e)}}}function N(c){let e,n=`<div class="$$diff aspect-[16/9]">
  <div class="$$diff-item-1">
    <img alt="daisy" src="/images/stock/photo-1560717789-0ac7c58ac90a.jpg" />
  </div>
  <div class="$$diff-item-2">
    <img alt="daisy" src="/images/stock/photo-1560717789-0ac7c58ac90a-bw.jpg" />
  </div>
  <div class="$$diff-resizer"></div>
</div>`,t,l,a,r;return{c(){e=h("pre"),t=A(n),this.h()},l(i){e=x(i,"PRE",{slot:!0});var o=E(e);t=H(o,n),o.forEach(d),this.h()},h(){b(e,"slot","html")},m(i,o){m(i,e,o),L(e,t),a||(r=Y(l=B.call(null,e,{to:c[0]})),a=!0)},p(i,o){l&&P(l.update)&&o&1&&l.update.call(null,{to:i[0]})},d(i){i&&d(e),a=!1,r()}}}function Q(c){let e,n='<div class="diff-item-1"><div class="bg-primary text-primary-content text-4xl lg:text-9xl font-black grid place-content-center">DAISY</div></div> <div class="diff-item-2"><div class="bg-base-200 text-4xl lg:text-9xl font-black grid place-content-center">DAISY</div></div> <div class="diff-resizer"></div>';return{c(){e=h("div"),e.innerHTML=n,this.h()},l(t){e=x(t,"DIV",{class:!0,"data-svelte-h":!0}),M(e)!=="svelte-kmb8ll"&&(e.innerHTML=n),this.h()},h(){b(e,"class","diff rounded-btn aspect-[16/9]")},m(t,l){m(t,e,l)},p:T,d(t){t&&d(e)}}}function X(c){let e,n=`<div class="$$diff aspect-[16/9]">
  <div class="$$diff-item-1">
    <div class="bg-primary text-primary-content text-9xl font-black grid place-content-center">DAISY</div>
  </div>
  <div class="$$diff-item-2">
    <div class="bg-base-200 text-9xl font-black grid place-content-center">DAISY</div>
  </div>
  <div class="$$diff-resizer"></div>
</div>`,t,l,a,r;return{c(){e=h("pre"),t=A(n),this.h()},l(i){e=x(i,"PRE",{slot:!0});var o=E(e);t=H(o,n),o.forEach(d),this.h()},h(){b(e,"slot","html")},m(i,o){m(i,e,o),L(e,t),a||(r=Y(l=B.call(null,e,{to:c[0]})),a=!0)},p(i,o){l&&P(l.update)&&o&1&&l.update.call(null,{to:i[0]})},d(i){i&&d(e),a=!1,r()}}}function Z(c){let e,n,t,l,a,r,i,o;return e=new J({props:{data:{chrome:105,firefox:110,safari:16,iossafari:null}}}),t=new G({props:{data:[{type:"component",class:"diff",desc:"Container element"},{type:"component",class:"diff-item-1",desc:"First item"},{type:"component",class:"diff-item-2",desc:"Second item"},{type:"component",class:"diff-resizer",desc:"The resizer control"}]}}),a=new z({props:{title:"Diff",$$slots:{html:[N],default:[K]},$$scope:{ctx:c}}}),i=new z({props:{title:"Diff text",$$slots:{html:[X],default:[Q]},$$scope:{ctx:c}}}),{c(){p(e.$$.fragment),n=y(),p(t.$$.fragment),l=y(),p(a.$$.fragment),r=y(),p(i.$$.fragment)},l(s){u(e.$$.fragment,s),n=w(s),u(t.$$.fragment,s),l=w(s),u(a.$$.fragment,s),r=w(s),u(i.$$.fragment,s)},m(s,f){$(e,s,f),m(s,n,f),$(t,s,f),m(s,l,f),$(a,s,f),m(s,r,f),$(i,s,f),o=!0},p(s,f){const k={};f&5&&(k.$$scope={dirty:f,ctx:s}),a.$set(k);const S={};f&5&&(S.$$scope={dirty:f,ctx:s}),i.$set(S)},i(s){o||(_(e.$$.fragment,s),_(t.$$.fragment,s),_(a.$$.fragment,s),_(i.$$.fragment,s),o=!0)},o(s){v(e.$$.fragment,s),v(t.$$.fragment,s),v(a.$$.fragment,s),v(i.$$.fragment,s),o=!1},d(s){s&&(d(n),d(l),d(r)),g(e,s),g(t,s),g(a,s),g(i,s)}}}function ee(c){let e,n;const t=[c[1],I];let l={$$slots:{default:[Z]},$$scope:{ctx:c}};for(let a=0;a<t.length;a+=1)l=D(l,t[a]);return e=new U({props:l}),{c(){p(e.$$.fragment)},l(a){u(e.$$.fragment,a)},m(a,r){$(e,a,r),n=!0},p(a,[r]){const i=r&2?O(t,[r&2&&j(a[1]),r&0&&j(I)]):{};r&5&&(i.$$scope={dirty:r,ctx:a}),e.$set(i)},i(a){n||(_(e.$$.fragment,a),n=!0)},o(a){v(e.$$.fragment,a),n=!1},d(a){g(e,a)}}}const I={title:"Diff",desc:"Diff component shows a side-by-side comparison of two items.",published:!0,layout:"components"};function te(c,e,n){let t;return V(c,W,l=>n(0,t=l)),c.$$set=l=>{n(1,e=D(D({},e),C(l)))},e=C(e),[t,e]}class re extends q{constructor(e){super(),F(this,e,te,ee,R,{})}}export{re as component};
