import{s as J,f as _,a as T,g as b,w as B,c as j,h as w,d as v,j as i,i as I,u as m,v as H,z as K,l as L,m as P,X as S,n as Z}from"../chunks/scheduler.4207298b.js";import{e as F}from"../chunks/each.e59479a4.js";import{S as N,i as O}from"../chunks/index.04247e75.js";import{a as V}from"../chunks/util.5d82e9dd.js";function R(r,e,d){const l=r.slice();return l[1]=e[d],l}function X(r){let e,d=`Coming soon…
      `;return{c(){e=_("div"),e.textContent=d,this.h()},l(l){e=b(l,"DIV",{class:!0,"data-svelte-h":!0}),B(e)!=="svelte-u8mhn6"&&(e.textContent=d),this.h()},h(){i(e,"class","lg:col-span-2 flex justify-center items-center font-bold text-base-content/20")},m(l,o){I(l,e,o)},p:H,d(l){l&&v(e)}}}function Y(r){let e,d,l,o,h,p,n,a,t,u,s=r[1].snippet.title+"",g,z,x,y=r[1].snippet.channelTitle+"",k,A,E,$,C;return{c(){e=_("a"),d=_("figure"),l=_("img"),n=T(),a=_("div"),t=_("div"),u=_("h2"),g=L(s),z=T(),x=_("p"),k=L(y),A=T(),this.h()},l(c){e=b(c,"A",{class:!0,href:!0,target:!0,rel:!0});var f=w(e);d=b(f,"FIGURE",{class:!0});var M=w(d);l=b(M,"IMG",{src:!0,alt:!0,class:!0,style:!0}),M.forEach(v),n=j(f),a=b(f,"DIV",{class:!0});var U=w(a);t=b(U,"DIV",{class:!0});var D=w(t);u=b(D,"H2",{class:!0});var q=w(u);g=P(q,s),q.forEach(v),z=j(D),x=b(D,"P",{class:!0});var G=w(x);k=P(G,y),G.forEach(v),D.forEach(v),U.forEach(v),A=j(f),f.forEach(v),this.h()},h(){S(l.src,o=r[1].snippet.thumbnails.high.url)||i(l,"src",o),i(l,"alt",h=r[1].snippet.title),i(l,"class","w-full"),i(l,"style",p=`view-transition-name: ${r[1].id.replace(/[^a-zA-Z]/g,"")}-img`),i(d,"class","rounded-btn grid aspect-video place-content-center overflow-hidden shadow-sm transition-all duration-300 group-hover:scale-[1.02] group-hover:shadow-lg"),i(u,"class","font-bold"),i(x,"class","text-base-content/70 text-xs italic"),i(t,"class","grow"),i(a,"class","flex items-center justify-between gap-4"),i(e,"class","rounded-box group relative flex flex-col gap-6 overflow-hidden p-4"),i(e,"href",E=r[1].status.embeddable==!0?`/resources/videos/${V(r[1].snippet.title)}-${V(r[1].id)}`:`https://www.youtube.com/watch?v=${r[1].id}`),i(e,"target",$=r[1].status.embeddable==!1?"_blank":null),i(e,"rel",C=r[1].status.embeddable==!1?"noopener noreferrer":null)},m(c,f){I(c,e,f),m(e,d),m(d,l),m(e,n),m(e,a),m(a,t),m(t,u),m(u,g),m(t,z),m(t,x),m(x,k),m(e,A)},p(c,f){f&1&&!S(l.src,o=c[1].snippet.thumbnails.high.url)&&i(l,"src",o),f&1&&h!==(h=c[1].snippet.title)&&i(l,"alt",h),f&1&&p!==(p=`view-transition-name: ${c[1].id.replace(/[^a-zA-Z]/g,"")}-img`)&&i(l,"style",p),f&1&&s!==(s=c[1].snippet.title+"")&&Z(g,s),f&1&&y!==(y=c[1].snippet.channelTitle+"")&&Z(k,y),f&1&&E!==(E=c[1].status.embeddable==!0?`/resources/videos/${V(c[1].snippet.title)}-${V(c[1].id)}`:`https://www.youtube.com/watch?v=${c[1].id}`)&&i(e,"href",E),f&1&&$!==($=c[1].status.embeddable==!1?"_blank":null)&&i(e,"target",$),f&1&&C!==(C=c[1].status.embeddable==!1?"noopener noreferrer":null)&&i(e,"rel",C)},d(c){c&&v(e)}}}function Q(r){let e,d=`<h1 class="font-title text-base-content text-3xl font-extrabold lg:text-4xl xl:text-6xl"><span style="view-transition-name: resources-heading">daisyUI community</span>
    videos</h1> <p class="text-base-content/60 text-xs italic">If you have a YouTube video about daisyUI, <a href="https://github.com/saadeghi/daisyui/blob/master/src/docs/src/lib/data/youtube.js" target="_blank" rel="noopener, noreferrer" class="link">add it here</a></p>`,l,o,h,p=F(r[0].videos),n=[];for(let t=0;t<p.length;t+=1)n[t]=Y(R(r,p,t));let a=null;return p.length||(a=X()),{c(){e=_("div"),e.innerHTML=d,l=T(),o=_("div"),h=_("div");for(let t=0;t<n.length;t+=1)n[t].c();a&&a.c(),this.h()},l(t){e=b(t,"DIV",{class:!0,"data-svelte-h":!0}),B(e)!=="svelte-p5xky"&&(e.innerHTML=d),l=j(t),o=b(t,"DIV",{class:!0});var u=w(o);h=b(u,"DIV",{class:!0});var s=w(h);for(let g=0;g<n.length;g+=1)n[g].l(s);a&&a.l(s),s.forEach(v),u.forEach(v),this.h()},h(){i(e,"class","flex flex-col items-center gap-6"),i(h,"class","grid gap-x-4 gap-y-10 md:grid-cols-2 lg:grid-cols-3"),i(o,"class","py-20")},m(t,u){I(t,e,u),I(t,l,u),I(t,o,u),m(o,h);for(let s=0;s<n.length;s+=1)n[s]&&n[s].m(h,null);a&&a.m(h,null)},p(t,[u]){if(u&1){p=F(t[0].videos);let s;for(s=0;s<p.length;s+=1){const g=R(t,p,s);n[s]?n[s].p(g,u):(n[s]=Y(g),n[s].c(),n[s].m(h,null))}for(;s<n.length;s+=1)n[s].d(1);n.length=p.length,!p.length&&a?a.p(t,u):p.length?a&&(a.d(1),a=null):(a=X(),a.c(),a.m(h,null))}},i:H,o:H,d(t){t&&(v(e),v(l),v(o)),K(n,t),a&&a.d()}}}function W(r,e,d){let{data:l}=e;return r.$$set=o=>{"data"in o&&d(0,l=o.data)},[l]}class ae extends N{constructor(e){super(),O(this,e,W,Q,J,{data:0})}}export{ae as component};
