var B=Object.defineProperty;var G=(t,e,n)=>e in t?B(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var f=(t,e,n)=>(G(t,typeof e!="symbol"?e+"":e,n),n);function I(){}function z(t,e){for(const n in e)t[n]=e[n];return t}function F(t){return t()}function ct(){return Object.create(null)}function R(t){t.forEach(F)}function rt(t){return typeof t=="function"}function st(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}let m;function ot(t,e){return t===e?!0:(m||(m=document.createElement("a")),m.href=e,t===m.href)}function ut(t){return Object.keys(t).length===0}function U(t,...e){if(t==null){for(const i of e)i(void 0);return I}const n=t.subscribe(...e);return n.unsubscribe?()=>n.unsubscribe():n}function at(t,e,n){t.$$.on_destroy.push(U(e,n))}function ft(t,e,n,i){if(t){const l=j(t,e,n,i);return t[0](l)}}function j(t,e,n,i){return t[1]&&i?z(n.ctx.slice(),t[1](i(e))):n.ctx}function _t(t,e,n,i){if(t[2]&&i){const l=t[2](i(n));if(e.dirty===void 0)return l;if(typeof l=="object"){const s=[],c=Math.max(e.dirty.length,l.length);for(let o=0;o<c;o+=1)s[o]=e.dirty[o]|l[o];return s}return e.dirty|l}return e.dirty}function ht(t,e,n,i,l,s){if(l){const c=j(e,n,i,s);t.p(c,l)}}function dt(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let i=0;i<n;i++)e[i]=-1;return e}return-1}function mt(t){const e={};for(const n in t)n[0]!=="$"&&(e[n]=t[n]);return e}let y=!1;function pt(){y=!0}function yt(){y=!1}function W(t,e,n,i){for(;t<e;){const l=t+(e-t>>1);n(l)<=i?t=l+1:e=l}return t}function J(t){if(t.hydrate_init)return;t.hydrate_init=!0;let e=t.childNodes;if(t.nodeName==="HEAD"){const r=[];for(let u=0;u<e.length;u++){const a=e[u];a.claim_order!==void 0&&r.push(a)}e=r}const n=new Int32Array(e.length+1),i=new Int32Array(e.length);n[0]=-1;let l=0;for(let r=0;r<e.length;r++){const u=e[r].claim_order,a=(l>0&&e[n[l]].claim_order<=u?l+1:W(1,l,q=>e[n[q]].claim_order,u))-1;i[r]=n[a]+1;const N=a+1;n[N]=r,l=Math.max(N,l)}const s=[],c=[];let o=e.length-1;for(let r=n[l]+1;r!=0;r=i[r-1]){for(s.push(e[r-1]);o>=r;o--)c.push(e[o]);o--}for(;o>=0;o--)c.push(e[o]);s.reverse(),c.sort((r,u)=>r.claim_order-u.claim_order);for(let r=0,u=0;r<c.length;r++){for(;u<s.length&&c[r].claim_order>=s[u].claim_order;)u++;const a=u<s.length?s[u]:null;t.insertBefore(c[r],a)}}function K(t,e){if(y){for(J(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentNode!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;e!==t.actual_end_child?(e.claim_order!==void 0||e.parentNode!==t)&&t.insertBefore(e,t.actual_end_child):t.actual_end_child=e.nextSibling}else(e.parentNode!==t||e.nextSibling!==null)&&t.appendChild(e)}function Q(t,e,n){t.insertBefore(e,n||null)}function V(t,e,n){y&&!n?K(t,e):(e.parentNode!==t||e.nextSibling!=n)&&t.insertBefore(e,n||null)}function w(t){t.parentNode&&t.parentNode.removeChild(t)}function gt(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function H(t){return document.createElement(t)}function P(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function T(t){return document.createTextNode(t)}function bt(){return T(" ")}function xt(){return T("")}function S(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}const X=["width","height"];function vt(t,e){const n=Object.getOwnPropertyDescriptors(t.__proto__);for(const i in e)e[i]==null?t.removeAttribute(i):i==="style"?t.style.cssText=e[i]:i==="__value"?t.value=t[i]=e[i]:n[i]&&n[i].set&&X.indexOf(i)===-1?t[i]=e[i]:S(t,i,e[i])}function wt(t,e){for(const n in e)S(t,n,e[n])}function Et(t){return t.dataset.svelteH}function Tt(t){return Array.from(t.childNodes)}function L(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function O(t,e,n,i,l=!1){L(t);const s=(()=>{for(let c=t.claim_info.last_index;c<t.length;c++){const o=t[c];if(e(o)){const r=n(o);return r===void 0?t.splice(c,1):t[c]=r,l||(t.claim_info.last_index=c),o}}for(let c=t.claim_info.last_index-1;c>=0;c--){const o=t[c];if(e(o)){const r=n(o);return r===void 0?t.splice(c,1):t[c]=r,l?r===void 0&&t.claim_info.last_index--:t.claim_info.last_index=c,o}}return i()})();return s.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,s}function C(t,e,n,i){return O(t,l=>l.nodeName===e,l=>{const s=[];for(let c=0;c<l.attributes.length;c++){const o=l.attributes[c];n[o.name]||s.push(o.name)}s.forEach(c=>l.removeAttribute(c))},()=>i(e))}function Nt(t,e,n){return C(t,e,n,H)}function At(t,e,n){return C(t,e,n,P)}function Y(t,e){return O(t,n=>n.nodeType===3,n=>{const i=""+e;if(n.data.startsWith(i)){if(n.data.length!==i.length)return n.splitText(i.length)}else n.data=i},()=>T(e),!0)}function kt(t){return Y(t," ")}function A(t,e,n){for(let i=n;i<t.length;i+=1){const l=t[i];if(l.nodeType===8&&l.textContent.trim()===e)return i}return-1}function Mt(t,e){const n=A(t,"HTML_TAG_START",0),i=A(t,"HTML_TAG_END",n+1);if(n===-1||i===-1)return new b(e);L(t);const l=t.splice(n,i-n+1);w(l[0]),w(l[l.length-1]);const s=l.slice(1,l.length-1);if(s.length===0)return new b(e);for(const c of s)c.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1;return new b(e,s)}function jt(t,e){e=""+e,t.data!==e&&(t.data=e)}function Ht(t,e,n,i){n==null?t.style.removeProperty(e):t.style.setProperty(e,n,"")}function Z(t,e,{bubbles:n=!1,cancelable:i=!1}={}){return new CustomEvent(t,{detail:e,bubbles:n,cancelable:i})}class ${constructor(e=!1){f(this,"is_svg",!1);f(this,"e");f(this,"n");f(this,"t");f(this,"a");this.is_svg=e,this.e=this.n=null}c(e){this.h(e)}m(e,n,i=null){this.e||(this.is_svg?this.e=P(n.nodeName):this.e=H(n.nodeType===11?"TEMPLATE":n.nodeName),this.t=n.tagName!=="TEMPLATE"?n:n.content,this.c(e)),this.i(i)}h(e){this.e.innerHTML=e,this.n=Array.from(this.e.nodeName==="TEMPLATE"?this.e.content.childNodes:this.e.childNodes)}i(e){for(let n=0;n<this.n.length;n+=1)Q(this.t,this.n[n],e)}p(e){this.d(),this.h(e),this.i(this.a)}d(){this.n.forEach(w)}}class b extends ${constructor(n=!1,i){super(n);f(this,"l");this.e=this.n=null,this.l=i}c(n){this.l?this.n=this.l:super.c(n)}i(n){for(let i=0;i<this.n.length;i+=1)V(this.t,this.n[i],n)}}function Pt(t,e){return new t(e)}let p;function x(t){p=t}function g(){if(!p)throw new Error("Function called outside component initialization");return p}function St(t){g().$$.on_mount.push(t)}function Lt(t){g().$$.after_update.push(t)}function Ot(t){g().$$.on_destroy.push(t)}function Ct(){const t=g();return(e,n,{cancelable:i=!1}={})=>{const l=t.$$.callbacks[e];if(l){const s=Z(e,n,{cancelable:i});return l.slice().forEach(c=>{c.call(t,s)}),!s.defaultPrevented}return!0}}const d=[],k=[];let h=[];const M=[],D=Promise.resolve();let E=!1;function tt(){E||(E=!0,D.then(nt))}function Dt(){return tt(),D}function et(t){h.push(t)}const v=new Set;let _=0;function nt(){if(_!==0)return;const t=p;do{try{for(;_<d.length;){const e=d[_];_++,x(e),it(e.$$)}}catch(e){throw d.length=0,_=0,e}for(x(null),d.length=0,_=0;k.length;)k.pop()();for(let e=0;e<h.length;e+=1){const n=h[e];v.has(n)||(v.add(n),n())}h.length=0}while(d.length);for(;M.length;)M.pop()();E=!1,v.clear(),x(t)}function it(t){if(t.fragment!==null){t.update(),R(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(et)}}function qt(t){const e=[],n=[];h.forEach(i=>t.indexOf(i)===-1?e.push(i):n.push(i)),n.forEach(i=>i()),h=e}export{dt as A,_t as B,Ot as C,z as D,mt as E,vt as F,P as G,b as H,At as I,Mt as J,wt as K,Ct as L,R as M,ct as N,nt as O,rt as P,ut as Q,et as R,qt as S,p as T,x as U,F as V,d as W,tt as X,pt as Y,yt as Z,gt as _,bt as a,kt as b,Nt as c,w as d,H as e,Tt as f,Et as g,Y as h,V as i,K as j,jt as k,at as l,xt as m,I as n,Lt as o,St as p,S as q,Ht as r,st as s,T as t,k as u,Pt as v,Dt as w,ot as x,ft as y,ht as z};
