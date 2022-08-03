var app=function(){"use strict";function e(){}function t(e,t){for(const n in t)e[n]=t[n];return e}function n(e){return e()}function r(){return Object.create(null)}function i(e){e.forEach(n)}function s(e){return"function"==typeof e}function o(e,t){return e!=e?t==t:e!==t||e&&"object"==typeof e||"function"==typeof e}let a,c;function l(e,t){return a||(a=document.createElement("a")),a.href=t,e===a.href}function u(t,...n){if(null==t)return e;const r=t.subscribe(...n);return r.unsubscribe?()=>r.unsubscribe():r}function d(e,t,n){e.$$.on_destroy.push(u(t,n))}function h(e,t,n,r){if(e){const i=f(e,t,n,r);return e[0](i)}}function f(e,n,r,i){return e[1]&&i?t(r.ctx.slice(),e[1](i(n))):r.ctx}function p(e,t,n,r){if(e[2]&&r){const i=e[2](r(n));if(void 0===t.dirty)return i;if("object"==typeof i){const e=[],n=Math.max(t.dirty.length,i.length);for(let r=0;r<n;r+=1)e[r]=t.dirty[r]|i[r];return e}return t.dirty|i}return t.dirty}function m(e,t,n,r,i,s){if(i){const o=f(t,n,r,s);e.p(o,i)}}function g(e){if(e.ctx.length>32){const t=[],n=e.ctx.length/32;for(let e=0;e<n;e++)t[e]=-1;return t}return-1}function v(e){const t={};for(const n in e)"$"!==n[0]&&(t[n]=e[n]);return t}function y(e,t){const n={};t=new Set(t);for(const r in e)t.has(r)||"$"===r[0]||(n[r]=e[r]);return n}function b(e,t,n){return e.set(n),t}function _(e,t){e.appendChild(t)}function w(e,t,n){e.insertBefore(t,n||null)}function I(e){e.parentNode.removeChild(e)}function E(e,t){for(let n=0;n<e.length;n+=1)e[n]&&e[n].d(t)}function T(e){return document.createElement(e)}function k(e){return document.createTextNode(e)}function S(){return k(" ")}function O(){return k("")}function R(e,t,n,r){return e.addEventListener(t,n,r),()=>e.removeEventListener(t,n,r)}function C(e,t,n){null==n?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function $(e,t){const n=Object.getOwnPropertyDescriptors(e.__proto__);for(const r in t)null==t[r]?e.removeAttribute(r):"style"===r?e.style.cssText=t[r]:"__value"===r?e.value=e[r]=t[r]:n[r]&&n[r].set?e[r]=t[r]:C(e,r,t[r])}function A(e){return""===e?null:+e}function N(e,t){t=""+t,e.wholeText!==t&&(e.data=t)}function P(e,t){e.value=null==t?"":t}function L(e){c=e}function x(){if(!c)throw new Error("Function called outside component initialization");return c}function D(e){x().$$.on_mount.push(e)}function M(){const e=x();return(t,n,{cancelable:r=!1}={})=>{const i=e.$$.callbacks[t];if(i){const s=function(e,t,{bubbles:n=!1,cancelable:r=!1}={}){const i=document.createEvent("CustomEvent");return i.initCustomEvent(e,n,r,t),i}(t,n,{cancelable:r});return i.slice().forEach((t=>{t.call(e,s)})),!s.defaultPrevented}return!0}}function U(e,t){return x().$$.context.set(e,t),t}function j(e){return x().$$.context.get(e)}const B=[],F=[],H=[],z=[],V=Promise.resolve();let q=!1;function W(e){H.push(e)}const K=new Set;let G=0;function J(){const e=c;do{for(;G<B.length;){const e=B[G];G++,L(e),X(e.$$)}for(L(null),B.length=0,G=0;F.length;)F.pop()();for(let e=0;e<H.length;e+=1){const t=H[e];K.has(t)||(K.add(t),t())}H.length=0}while(B.length);for(;z.length;)z.pop()();q=!1,K.clear(),L(e)}function X(e){if(null!==e.fragment){e.update(),i(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(W)}}const Q=new Set;let Y;function Z(){Y={r:0,c:[],p:Y}}function ee(){Y.r||i(Y.c),Y=Y.p}function te(e,t){e&&e.i&&(Q.delete(e),e.i(t))}function ne(e,t,n,r){if(e&&e.o){if(Q.has(e))return;Q.add(e),Y.c.push((()=>{Q.delete(e),r&&(n&&e.d(1),r())})),e.o(t)}}function re(e,t){const n={},r={},i={$$scope:1};let s=e.length;for(;s--;){const o=e[s],a=t[s];if(a){for(const e in o)e in a||(r[e]=1);for(const e in a)i[e]||(n[e]=a[e],i[e]=1);e[s]=a}else for(const e in o)i[e]=1}for(const e in r)e in n||(n[e]=void 0);return n}function ie(e){return"object"==typeof e&&null!==e?e:{}}function se(e){e&&e.c()}function oe(e,t,r,o){const{fragment:a,on_mount:c,on_destroy:l,after_update:u}=e.$$;a&&a.m(t,r),o||W((()=>{const t=c.map(n).filter(s);l?l.push(...t):i(t),e.$$.on_mount=[]})),u.forEach(W)}function ae(e,t){const n=e.$$;null!==n.fragment&&(i(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function ce(e,t){-1===e.$$.dirty[0]&&(B.push(e),q||(q=!0,V.then(J)),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function le(t,n,s,o,a,l,u,d=[-1]){const h=c;L(t);const f=t.$$={fragment:null,ctx:null,props:l,update:e,not_equal:a,bound:r(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(n.context||(h?h.$$.context:[])),callbacks:r(),dirty:d,skip_bound:!1,root:n.target||h.$$.root};u&&u(f.root);let p=!1;if(f.ctx=s?s(t,n.props||{},((e,n,...r)=>{const i=r.length?r[0]:n;return f.ctx&&a(f.ctx[e],f.ctx[e]=i)&&(!f.skip_bound&&f.bound[e]&&f.bound[e](i),p&&ce(t,e)),n})):[],f.update(),p=!0,i(f.before_update),f.fragment=!!o&&o(f.ctx),n.target){if(n.hydrate){const e=function(e){return Array.from(e.childNodes)}(n.target);f.fragment&&f.fragment.l(e),e.forEach(I)}else f.fragment&&f.fragment.c();n.intro&&te(t.$$.fragment),oe(t,n.target,n.anchor,n.customElement),J()}L(h)}class ue{$destroy(){ae(this,1),this.$destroy=e}$on(e,t){const n=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return n.push(t),()=>{const e=n.indexOf(t);-1!==e&&n.splice(e,1)}}$set(e){var t;this.$$set&&(t=e,0!==Object.keys(t).length)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}const de=[];function he(t,n=e){let r;const i=new Set;function s(e){if(o(t,e)&&(t=e,r)){const e=!de.length;for(const e of i)e[1](),de.push(e,t);if(e){for(let e=0;e<de.length;e+=2)de[e][0](de[e+1]);de.length=0}}}return{set:s,update:function(e){s(e(t))},subscribe:function(o,a=e){const c=[o,a];return i.add(c),1===i.size&&(r=n(s)||e),o(t),()=>{i.delete(c),0===i.size&&(r(),r=null)}}}}function fe(t,n,r){const o=!Array.isArray(t),a=o?[t]:t,c=n.length<2;return l=t=>{let r=!1;const l=[];let d=0,h=e;const f=()=>{if(d)return;h();const r=n(o?l[0]:l,t);c?t(r):h=s(r)?r:e},p=a.map(((e,t)=>u(e,(e=>{l[t]=e,d&=~(1<<t),r&&f()}),(()=>{d|=1<<t}))));return r=!0,f(),function(){i(p),h()}},{subscribe:he(r,l).subscribe};var l}const pe={},me={};function ge(e){return{...e.location,state:e.history.state,key:e.history.state&&e.history.state.key||"initial"}}const ve=function(e,t){const n=[];let r=ge(e);return{get location(){return r},listen(t){n.push(t);const i=()=>{r=ge(e),t({location:r,action:"POP"})};return e.addEventListener("popstate",i),()=>{e.removeEventListener("popstate",i);const r=n.indexOf(t);n.splice(r,1)}},navigate(t,{state:i,replace:s=!1}={}){i={...i,key:Date.now()+""};try{s?e.history.replaceState(i,null,t):e.history.pushState(i,null,t)}catch(n){e.location[s?"replace":"assign"](t)}r=ge(e),n.forEach((e=>e({location:r,action:"PUSH"})))}}}(Boolean("undefined"!=typeof window&&window.document&&window.document.createElement)?window:function(e="/"){let t=0;const n=[{pathname:e,search:""}],r=[];return{get location(){return n[t]},addEventListener(e,t){},removeEventListener(e,t){},history:{get entries(){return n},get index(){return t},get state(){return r[t]},pushState(e,i,s){const[o,a=""]=s.split("?");t++,n.push({pathname:o,search:a}),r.push(e)},replaceState(e,i,s){const[o,a=""]=s.split("?");n[t]={pathname:o,search:a},r[t]=e}}}}()),{navigate:ye}=ve,be=/^:(.+)/;function _e(e,t){return e.substr(0,t.length)===t}function we(e){return"*"===e[0]}function Ie(e){return e.replace(/(^\/+|\/+$)/g,"").split("/")}function Ee(e){return e.replace(/(^\/+|\/+$)/g,"")}function Te(e,t){return{route:e,score:e.default?0:Ie(e.path).reduce(((e,t)=>(e+=4,!function(e){return""===e}(t)?!function(e){return be.test(e)}(t)?we(t)?e-=5:e+=3:e+=2:e+=1,e)),0),index:t}}function ke(e,t){let n,r;const[i]=t.split("?"),s=Ie(i),o=""===s[0],a=function(e){return e.map(Te).sort(((e,t)=>e.score<t.score?1:e.score>t.score?-1:e.index-t.index))}(e);for(let e=0,i=a.length;e<i;e++){const i=a[e].route;let c=!1;if(i.default){r={route:i,params:{},uri:t};continue}const l=Ie(i.path),u={},d=Math.max(s.length,l.length);let h=0;for(;h<d;h++){const e=l[h],t=s[h];if(void 0!==e&&we(e)){u["*"===e?"*":e.slice(1)]=s.slice(h).map(decodeURIComponent).join("/");break}if(void 0===t){c=!0;break}let n=be.exec(e);if(n&&!o){const e=decodeURIComponent(t);u[n[1]]=e}else if(e!==t){c=!0;break}}if(!c){n={route:i,params:u,uri:"/"+s.slice(0,h).join("/")};break}}return n||r||null}function Se(e,t){return e+(t?`?${t}`:"")}function Oe(e,t){return`${Ee("/"===t?e:`${Ee(e)}/${Ee(t)}`)}/`}function Re(e){let t;const n=e[9].default,r=h(n,e,e[8],null);return{c(){r&&r.c()},m(e,n){r&&r.m(e,n),t=!0},p(e,[i]){r&&r.p&&(!t||256&i)&&m(r,n,e,e[8],t?p(n,e[8],i,null):g(e[8]),null)},i(e){t||(te(r,e),t=!0)},o(e){ne(r,e),t=!1},d(e){r&&r.d(e)}}}function Ce(e,t,n){let r,i,s,{$$slots:o={},$$scope:a}=t,{basepath:c="/"}=t,{url:l=null}=t;const u=j(pe),h=j(me),f=he([]);d(e,f,(e=>n(6,i=e)));const p=he(null);let m=!1;const g=u||he(l?{pathname:l}:ve.location);d(e,g,(e=>n(5,r=e)));const v=h?h.routerBase:he({path:c,uri:c});d(e,v,(e=>n(7,s=e)));const y=fe([v,p],(([e,t])=>{if(null===t)return e;const{path:n}=e,{route:r,uri:i}=t;return{path:r.default?n:r.path.replace(/\*.*$/,""),uri:i}}));return u||(D((()=>ve.listen((e=>{g.set(e.location)})))),U(pe,g)),U(me,{activeRoute:p,base:v,routerBase:y,registerRoute:function(e){const{path:t}=s;let{path:n}=e;if(e._path=n,e.path=Oe(t,n),"undefined"==typeof window){if(m)return;const t=function(e,t){return ke([e],t)}(e,r.pathname);t&&(p.set(t),m=!0)}else f.update((t=>(t.push(e),t)))},unregisterRoute:function(e){f.update((t=>{const n=t.indexOf(e);return t.splice(n,1),t}))}}),e.$$set=e=>{"basepath"in e&&n(3,c=e.basepath),"url"in e&&n(4,l=e.url),"$$scope"in e&&n(8,a=e.$$scope)},e.$$.update=()=>{if(128&e.$$.dirty){const{path:e}=s;f.update((t=>(t.forEach((t=>t.path=Oe(e,t._path))),t)))}if(96&e.$$.dirty){const e=ke(i,r.pathname);p.set(e)}},[f,g,v,c,l,r,i,s,a,o]}class $e extends ue{constructor(e){super(),le(this,e,Ce,Re,o,{basepath:3,url:4})}}const Ae=e=>({params:4&e,location:16&e}),Ne=e=>({params:e[2],location:e[4]});function Pe(e){let t,n,r,i;const s=[xe,Le],o=[];function a(e,t){return null!==e[0]?0:1}return t=a(e),n=o[t]=s[t](e),{c(){n.c(),r=O()},m(e,n){o[t].m(e,n),w(e,r,n),i=!0},p(e,i){let c=t;t=a(e),t===c?o[t].p(e,i):(Z(),ne(o[c],1,1,(()=>{o[c]=null})),ee(),n=o[t],n?n.p(e,i):(n=o[t]=s[t](e),n.c()),te(n,1),n.m(r.parentNode,r))},i(e){i||(te(n),i=!0)},o(e){ne(n),i=!1},d(e){o[t].d(e),e&&I(r)}}}function Le(e){let t;const n=e[10].default,r=h(n,e,e[9],Ne);return{c(){r&&r.c()},m(e,n){r&&r.m(e,n),t=!0},p(e,i){r&&r.p&&(!t||532&i)&&m(r,n,e,e[9],t?p(n,e[9],i,Ae):g(e[9]),Ne)},i(e){t||(te(r,e),t=!0)},o(e){ne(r,e),t=!1},d(e){r&&r.d(e)}}}function xe(e){let n,r,i;const s=[{location:e[4]},e[2],e[3]];var o=e[0];function a(e){let n={};for(let e=0;e<s.length;e+=1)n=t(n,s[e]);return{props:n}}return o&&(n=new o(a())),{c(){n&&se(n.$$.fragment),r=O()},m(e,t){n&&oe(n,e,t),w(e,r,t),i=!0},p(e,t){const i=28&t?re(s,[16&t&&{location:e[4]},4&t&&ie(e[2]),8&t&&ie(e[3])]):{};if(o!==(o=e[0])){if(n){Z();const e=n;ne(e.$$.fragment,1,0,(()=>{ae(e,1)})),ee()}o?(n=new o(a()),se(n.$$.fragment),te(n.$$.fragment,1),oe(n,r.parentNode,r)):n=null}else o&&n.$set(i)},i(e){i||(n&&te(n.$$.fragment,e),i=!0)},o(e){n&&ne(n.$$.fragment,e),i=!1},d(e){e&&I(r),n&&ae(n,e)}}}function De(e){let t,n,r=null!==e[1]&&e[1].route===e[7]&&Pe(e);return{c(){r&&r.c(),t=O()},m(e,i){r&&r.m(e,i),w(e,t,i),n=!0},p(e,[n]){null!==e[1]&&e[1].route===e[7]?r?(r.p(e,n),2&n&&te(r,1)):(r=Pe(e),r.c(),te(r,1),r.m(t.parentNode,t)):r&&(Z(),ne(r,1,1,(()=>{r=null})),ee())},i(e){n||(te(r),n=!0)},o(e){ne(r),n=!1},d(e){r&&r.d(e),e&&I(t)}}}function Me(e,n,r){let i,s,{$$slots:o={},$$scope:a}=n,{path:c=""}=n,{component:l=null}=n;const{registerRoute:u,unregisterRoute:h,activeRoute:f}=j(me);d(e,f,(e=>r(1,i=e)));const p=j(pe);d(e,p,(e=>r(4,s=e)));const m={path:c,default:""===c};let g={},y={};var b;return u(m),"undefined"!=typeof window&&(b=()=>{h(m)},x().$$.on_destroy.push(b)),e.$$set=e=>{r(13,n=t(t({},n),v(e))),"path"in e&&r(8,c=e.path),"component"in e&&r(0,l=e.component),"$$scope"in e&&r(9,a=e.$$scope)},e.$$.update=()=>{2&e.$$.dirty&&i&&i.route===m&&r(2,g=i.params);{const{path:e,component:t,...i}=n;r(3,y=i)}},n=v(n),[l,i,g,y,s,f,p,m,c,a,o]}class Ue extends ue{constructor(e){super(),le(this,e,Me,De,o,{path:8,component:0})}}function je(e){let n,r,i,s;const o=e[16].default,a=h(o,e,e[15],null);let c=[{href:e[0]},{"aria-current":e[2]},e[1],e[6]],l={};for(let e=0;e<c.length;e+=1)l=t(l,c[e]);return{c(){n=T("a"),a&&a.c(),$(n,l)},m(t,o){w(t,n,o),a&&a.m(n,null),r=!0,i||(s=R(n,"click",e[5]),i=!0)},p(e,[t]){a&&a.p&&(!r||32768&t)&&m(a,o,e,e[15],r?p(o,e[15],t,null):g(e[15]),null),$(n,l=re(c,[(!r||1&t)&&{href:e[0]},(!r||4&t)&&{"aria-current":e[2]},2&t&&e[1],64&t&&e[6]]))},i(e){r||(te(a,e),r=!0)},o(e){ne(a,e),r=!1},d(e){e&&I(n),a&&a.d(e),i=!1,s()}}}function Be(e,n,r){let i;const s=["to","replace","state","getProps"];let o,a,c=y(n,s),{$$slots:l={},$$scope:u}=n,{to:h="#"}=n,{replace:f=!1}=n,{state:p={}}=n,{getProps:m=(()=>({}))}=n;const{base:g}=j(me);d(e,g,(e=>r(14,a=e)));const b=j(pe);d(e,b,(e=>r(13,o=e)));const _=M();let w,I,E,T;return e.$$set=e=>{n=t(t({},n),v(e)),r(6,c=y(n,s)),"to"in e&&r(7,h=e.to),"replace"in e&&r(8,f=e.replace),"state"in e&&r(9,p=e.state),"getProps"in e&&r(10,m=e.getProps),"$$scope"in e&&r(15,u=e.$$scope)},e.$$.update=()=>{16512&e.$$.dirty&&r(0,w="/"===h?a.uri:function(e,t){if(_e(e,"/"))return e;const[n,r]=e.split("?"),[i]=t.split("?"),s=Ie(n),o=Ie(i);if(""===s[0])return Se(i,r);if(!_e(s[0],"."))return Se(("/"===i?"":"/")+o.concat(s).join("/"),r);const a=o.concat(s),c=[];return a.forEach((e=>{".."===e?c.pop():"."!==e&&c.push(e)})),Se("/"+c.join("/"),r)}(h,a.uri)),8193&e.$$.dirty&&r(11,I=_e(o.pathname,w)),8193&e.$$.dirty&&r(12,E=w===o.pathname),4096&e.$$.dirty&&r(2,i=E?"page":void 0),15361&e.$$.dirty&&r(1,T=m({location:o,href:w,isPartiallyCurrent:I,isCurrent:E}))},[w,T,i,g,b,function(e){if(_("click",e),function(e){return!e.defaultPrevented&&0===e.button&&!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}(e)){e.preventDefault();const t=o.pathname===w||f;ye(w,{state:p,replace:t})}},c,h,f,p,m,I,E,o,a,u,l]}class Fe extends ue{constructor(e){super(),le(this,e,Be,je,o,{to:7,replace:8,state:9,getProps:10})}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */const He=function(e){const t=[];let n=0;for(let r=0;r<e.length;r++){let i=e.charCodeAt(r);i<128?t[n++]=i:i<2048?(t[n++]=i>>6|192,t[n++]=63&i|128):55296==(64512&i)&&r+1<e.length&&56320==(64512&e.charCodeAt(r+1))?(i=65536+((1023&i)<<10)+(1023&e.charCodeAt(++r)),t[n++]=i>>18|240,t[n++]=i>>12&63|128,t[n++]=i>>6&63|128,t[n++]=63&i|128):(t[n++]=i>>12|224,t[n++]=i>>6&63|128,t[n++]=63&i|128)}return t},ze={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"==typeof atob,encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let t=0;t<e.length;t+=3){const i=e[t],s=t+1<e.length,o=s?e[t+1]:0,a=t+2<e.length,c=a?e[t+2]:0,l=i>>2,u=(3&i)<<4|o>>4;let d=(15&o)<<2|c>>6,h=63&c;a||(h=64,s||(d=64)),r.push(n[l],n[u],n[d],n[h])}return r.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(He(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):function(e){const t=[];let n=0,r=0;for(;n<e.length;){const i=e[n++];if(i<128)t[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=e[n++];t[r++]=String.fromCharCode((31&i)<<6|63&s)}else if(i>239&&i<365){const s=((7&i)<<18|(63&e[n++])<<12|(63&e[n++])<<6|63&e[n++])-65536;t[r++]=String.fromCharCode(55296+(s>>10)),t[r++]=String.fromCharCode(56320+(1023&s))}else{const s=e[n++],o=e[n++];t[r++]=String.fromCharCode((15&i)<<12|(63&s)<<6|63&o)}}return t.join("")}(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let t=0;t<e.length;){const i=n[e.charAt(t++)],s=t<e.length?n[e.charAt(t)]:0;++t;const o=t<e.length?n[e.charAt(t)]:64;++t;const a=t<e.length?n[e.charAt(t)]:64;if(++t,null==i||null==s||null==o||null==a)throw Error();const c=i<<2|s>>4;if(r.push(c),64!==o){const e=s<<4&240|o>>2;if(r.push(e),64!==a){const e=o<<6&192|a;r.push(e)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}},Ve=function(e){return function(e){const t=He(e);return ze.encodeByteArray(t,!0)}(e).replace(/\./g,"")};
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
class qe{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}wrapCallback(e){return(t,n)=>{t?this.reject(t):this.resolve(n),"function"==typeof e&&(this.promise.catch((()=>{})),1===e.length?e(t):e(t,n))}}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */function We(){return"undefined"!=typeof navigator&&"string"==typeof navigator.userAgent?navigator.userAgent:""}class Ke extends Error{constructor(e,t,n){super(t),this.code=e,this.customData=n,this.name="FirebaseError",Object.setPrototypeOf(this,Ke.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Ge.prototype.create)}}class Ge{constructor(e,t,n){this.service=e,this.serviceName=t,this.errors=n}create(e,...t){const n=t[0]||{},r=`${this.service}/${e}`,i=this.errors[e],s=i?function(e,t){return e.replace(Je,((e,n)=>{const r=t[n];return null!=r?String(r):`<${n}?>`}))}(i,n):"Error",o=`${this.serviceName}: ${s} (${r}).`;return new Ke(r,o,n)}}const Je=/\{\$([^}]+)}/g;function Xe(e,t){if(e===t)return!0;const n=Object.keys(e),r=Object.keys(t);for(const i of n){if(!r.includes(i))return!1;const n=e[i],s=t[i];if(Qe(n)&&Qe(s)){if(!Xe(n,s))return!1}else if(n!==s)return!1}for(const e of r)if(!n.includes(e))return!1;return!0}function Qe(e){return null!==e&&"object"==typeof e}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */function Ye(e){const t=[];for(const[n,r]of Object.entries(e))Array.isArray(r)?r.forEach((e=>{t.push(encodeURIComponent(n)+"="+encodeURIComponent(e))})):t.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return t.length?"&"+t.join("&"):""}class Ze{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then((()=>{e(this)})).catch((e=>{this.error(e)}))}next(e){this.forEachObserver((t=>{t.next(e)}))}error(e){this.forEachObserver((t=>{t.error(e)})),this.close(e)}complete(){this.forEachObserver((e=>{e.complete()})),this.close()}subscribe(e,t,n){let r;if(void 0===e&&void 0===t&&void 0===n)throw new Error("Missing Observer.");r=function(e,t){if("object"!=typeof e||null===e)return!1;for(const n of t)if(n in e&&"function"==typeof e[n])return!0;return!1}(e,["next","error","complete"])?e:{next:e,error:t,complete:n},void 0===r.next&&(r.next=et),void 0===r.error&&(r.error=et),void 0===r.complete&&(r.complete=et);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then((()=>{try{this.finalError?r.error(this.finalError):r.complete()}catch(e){}})),this.observers.push(r),i}unsubscribeOne(e){void 0!==this.observers&&void 0!==this.observers[e]&&(delete this.observers[e],this.observerCount-=1,0===this.observerCount&&void 0!==this.onNoObservers&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then((()=>{if(void 0!==this.observers&&void 0!==this.observers[e])try{t(this.observers[e])}catch(e){"undefined"!=typeof console&&console.error&&console.error(e)}}))}close(e){this.finalized||(this.finalized=!0,void 0!==e&&(this.finalError=e),this.task.then((()=>{this.observers=void 0,this.onNoObservers=void 0})))}}function et(){}
/**
     * @license
     * Copyright 2021 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */function tt(e){return e&&e._delegate?e._delegate:e}class nt{constructor(e,t,n){this.name=e,this.instanceFactory=t,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */const rt="[DEFAULT]";
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class it{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const e=new qe;if(this.instancesDeferred.set(t,e),this.isInitialized(t)||this.shouldAutoInitialize())try{const n=this.getOrInitializeService({instanceIdentifier:t});n&&e.resolve(n)}catch(e){}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const n=this.normalizeInstanceIdentifier(null==e?void 0:e.identifier),r=null!==(t=null==e?void 0:e.optional)&&void 0!==t&&t;if(!this.isInitialized(n)&&!this.shouldAutoInitialize()){if(r)return null;throw Error(`Service ${this.name} is not available`)}try{return this.getOrInitializeService({instanceIdentifier:n})}catch(e){if(r)return null;throw e}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,this.shouldAutoInitialize()){if(function(e){return"EAGER"===e.instantiationMode}
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */(e))try{this.getOrInitializeService({instanceIdentifier:rt})}catch(e){}for(const[e,t]of this.instancesDeferred.entries()){const n=this.normalizeInstanceIdentifier(e);try{const e=this.getOrInitializeService({instanceIdentifier:n});t.resolve(e)}catch(e){}}}}clearInstance(e="[DEFAULT]"){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter((e=>"INTERNAL"in e)).map((e=>e.INTERNAL.delete())),...e.filter((e=>"_delete"in e)).map((e=>e._delete()))])}isComponentSet(){return null!=this.component}isInitialized(e="[DEFAULT]"){return this.instances.has(e)}getOptions(e="[DEFAULT]"){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,n=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:n,options:t});for(const[e,t]of this.instancesDeferred.entries()){n===this.normalizeInstanceIdentifier(e)&&t.resolve(r)}return r}onInit(e,t){var n;const r=this.normalizeInstanceIdentifier(t),i=null!==(n=this.onInitCallbacks.get(r))&&void 0!==n?n:new Set;i.add(e),this.onInitCallbacks.set(r,i);const s=this.instances.get(r);return s&&e(s,r),()=>{i.delete(e)}}invokeOnInitCallbacks(e,t){const n=this.onInitCallbacks.get(t);if(n)for(const r of n)try{r(e,t)}catch(e){}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let n=this.instances.get(e);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:(r=e,r===rt?void 0:r),options:t}),this.instances.set(e,n),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(n,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,n)}catch(e){}var r;return n||null}normalizeInstanceIdentifier(e="[DEFAULT]"){return this.component?this.component.multipleInstances?e:rt:e}shouldAutoInitialize(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}}class st{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new it(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */var ot;!function(e){e[e.DEBUG=0]="DEBUG",e[e.VERBOSE=1]="VERBOSE",e[e.INFO=2]="INFO",e[e.WARN=3]="WARN",e[e.ERROR=4]="ERROR",e[e.SILENT=5]="SILENT"}(ot||(ot={}));const at={debug:ot.DEBUG,verbose:ot.VERBOSE,info:ot.INFO,warn:ot.WARN,error:ot.ERROR,silent:ot.SILENT},ct=ot.INFO,lt={[ot.DEBUG]:"log",[ot.VERBOSE]:"log",[ot.INFO]:"info",[ot.WARN]:"warn",[ot.ERROR]:"error"},ut=(e,t,...n)=>{if(t<e.logLevel)return;const r=(new Date).toISOString(),i=lt[t];if(!i)throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`);console[i](`[${r}]  ${e.name}:`,...n)};class dt{constructor(e){this.name=e,this._logLevel=ct,this._logHandler=ut,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ot))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel="string"==typeof e?at[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if("function"!=typeof e)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ot.DEBUG,...e),this._logHandler(this,ot.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ot.VERBOSE,...e),this._logHandler(this,ot.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ot.INFO,...e),this._logHandler(this,ot.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ot.WARN,...e),this._logHandler(this,ot.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ot.ERROR,...e),this._logHandler(this,ot.ERROR,...e)}}let ht,ft;const pt=new WeakMap,mt=new WeakMap,gt=new WeakMap,vt=new WeakMap,yt=new WeakMap;let bt={get(e,t,n){if(e instanceof IDBTransaction){if("done"===t)return mt.get(e);if("objectStoreNames"===t)return e.objectStoreNames||gt.get(e);if("store"===t)return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return It(e[t])},set:(e,t,n)=>(e[t]=n,!0),has:(e,t)=>e instanceof IDBTransaction&&("done"===t||"store"===t)||t in e};function _t(e){return e!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?(ft||(ft=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])).includes(e)?function(...t){return e.apply(Et(this),t),It(pt.get(this))}:function(...t){return It(e.apply(Et(this),t))}:function(t,...n){const r=e.call(Et(this),t,...n);return gt.set(r,t.sort?t.sort():[t]),It(r)}}function wt(e){return"function"==typeof e?_t(e):(e instanceof IDBTransaction&&function(e){if(mt.has(e))return;const t=new Promise(((t,n)=>{const r=()=>{e.removeEventListener("complete",i),e.removeEventListener("error",s),e.removeEventListener("abort",s)},i=()=>{t(),r()},s=()=>{n(e.error||new DOMException("AbortError","AbortError")),r()};e.addEventListener("complete",i),e.addEventListener("error",s),e.addEventListener("abort",s)}));mt.set(e,t)}(e),t=e,(ht||(ht=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])).some((e=>t instanceof e))?new Proxy(e,bt):e);var t}function It(e){if(e instanceof IDBRequest)return function(e){const t=new Promise(((t,n)=>{const r=()=>{e.removeEventListener("success",i),e.removeEventListener("error",s)},i=()=>{t(It(e.result)),r()},s=()=>{n(e.error),r()};e.addEventListener("success",i),e.addEventListener("error",s)}));return t.then((t=>{t instanceof IDBCursor&&pt.set(t,e)})).catch((()=>{})),yt.set(t,e),t}(e);if(vt.has(e))return vt.get(e);const t=wt(e);return t!==e&&(vt.set(e,t),yt.set(t,e)),t}const Et=e=>yt.get(e);const Tt=["get","getKey","getAll","getAllKeys","count"],kt=["put","add","delete","clear"],St=new Map;function Ot(e,t){if(!(e instanceof IDBDatabase)||t in e||"string"!=typeof t)return;if(St.get(t))return St.get(t);const n=t.replace(/FromIndex$/,""),r=t!==n,i=kt.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!i&&!Tt.includes(n))return;const s=async function(e,...t){const s=this.transaction(e,i?"readwrite":"readonly");let o=s.store;return r&&(o=o.index(t.shift())),(await Promise.all([o[n](...t),i&&s.done]))[0]};return St.set(t,s),s}bt=(e=>({...e,get:(t,n,r)=>Ot(t,n)||e.get(t,n,r),has:(t,n)=>!!Ot(t,n)||e.has(t,n)}))(bt);
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
class Rt{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map((e=>{if(function(e){const t=e.getComponent();return"VERSION"===(null==t?void 0:t.type)}(e)){const t=e.getImmediate();return`${t.library}/${t.version}`}return null})).filter((e=>e)).join(" ")}}const Ct="@firebase/app",$t="0.7.24",At=new dt("@firebase/app"),Nt="[DEFAULT]",Pt={[Ct]:"fire-core","@firebase/app-compat":"fire-core-compat","@firebase/analytics":"fire-analytics","@firebase/analytics-compat":"fire-analytics-compat","@firebase/app-check":"fire-app-check","@firebase/app-check-compat":"fire-app-check-compat","@firebase/auth":"fire-auth","@firebase/auth-compat":"fire-auth-compat","@firebase/database":"fire-rtdb","@firebase/database-compat":"fire-rtdb-compat","@firebase/functions":"fire-fn","@firebase/functions-compat":"fire-fn-compat","@firebase/installations":"fire-iid","@firebase/installations-compat":"fire-iid-compat","@firebase/messaging":"fire-fcm","@firebase/messaging-compat":"fire-fcm-compat","@firebase/performance":"fire-perf","@firebase/performance-compat":"fire-perf-compat","@firebase/remote-config":"fire-rc","@firebase/remote-config-compat":"fire-rc-compat","@firebase/storage":"fire-gcs","@firebase/storage-compat":"fire-gcs-compat","@firebase/firestore":"fire-fst","@firebase/firestore-compat":"fire-fst-compat","fire-js":"fire-js",firebase:"fire-js-all"},Lt=new Map,xt=new Map;function Dt(e,t){try{e.container.addComponent(t)}catch(n){At.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function Mt(e){const t=e.name;if(xt.has(t))return At.debug(`There were multiple attempts to register component ${t}.`),!1;xt.set(t,e);for(const t of Lt.values())Dt(t,e);return!0}function Ut(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */const jt=new Ge("app","Firebase",{"no-app":"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","storage-open":"Error thrown when opening storage. Original error: {$originalErrorMessage}.","storage-get":"Error thrown when reading from storage. Original error: {$originalErrorMessage}.","storage-set":"Error thrown when writing to storage. Original error: {$originalErrorMessage}.","storage-delete":"Error thrown when deleting from storage. Original error: {$originalErrorMessage}."});
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
class Bt{constructor(e,t,n){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new nt("app",(()=>this),"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw jt.create("app-deleted",{appName:this._name})}}
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */const Ft="9.8.1";function Ht(e,t,n){var r;let i=null!==(r=Pt[e])&&void 0!==r?r:e;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=t.match(/\s|\//);if(s||o){const e=[`Unable to register library "${i}" with version "${t}":`];return s&&e.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&e.push("and"),o&&e.push(`version name "${t}" contains illegal characters (whitespace or "/")`),void At.warn(e.join(" "))}Mt(new nt(`${i}-version`,(()=>({library:i,version:t})),"VERSION"))}
/**
     * @license
     * Copyright 2021 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */const zt="firebase-heartbeat-store";let Vt=null;function qt(){return Vt||(Vt=function(e,t,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(e,t),a=It(o);return r&&o.addEventListener("upgradeneeded",(e=>{r(It(o.result),e.oldVersion,e.newVersion,It(o.transaction))})),n&&o.addEventListener("blocked",(()=>n())),a.then((e=>{s&&e.addEventListener("close",(()=>s())),i&&e.addEventListener("versionchange",(()=>i()))})).catch((()=>{})),a}("firebase-heartbeat-database",1,{upgrade:(e,t)=>{if(0===t)e.createObjectStore(zt)}}).catch((e=>{throw jt.create("storage-open",{originalErrorMessage:e.message})}))),Vt}async function Wt(e,t){try{const n=(await qt()).transaction(zt,"readwrite"),r=n.objectStore(zt);return await r.put(t,Kt(e)),n.done}catch(e){throw jt.create("storage-set",{originalErrorMessage:e.message})}}function Kt(e){return`${e.name}!${e.options.appId}`}
/**
     * @license
     * Copyright 2021 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class Gt{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new Xt(t),this._heartbeatsCachePromise=this._storage.read().then((e=>(this._heartbeatsCache=e,e)))}async triggerHeartbeat(){const e=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),t=Jt();if(null===this._heartbeatsCache&&(this._heartbeatsCache=await this._heartbeatsCachePromise),this._heartbeatsCache.lastSentHeartbeatDate!==t&&!this._heartbeatsCache.heartbeats.some((e=>e.date===t)))return this._heartbeatsCache.heartbeats.push({date:t,agent:e}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter((e=>{const t=new Date(e.date).valueOf();return Date.now()-t<=2592e6})),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(null===this._heartbeatsCache&&await this._heartbeatsCachePromise,null===this._heartbeatsCache||0===this._heartbeatsCache.heartbeats.length)return"";const e=Jt(),{heartbeatsToSend:t,unsentEntries:n}=function(e,t=1024){const n=[];let r=e.slice();for(const i of e){const e=n.find((e=>e.agent===i.agent));if(e){if(e.dates.push(i.date),Qt(n)>t){e.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Qt(n)>t){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}(this._heartbeatsCache.heartbeats),r=Ve(JSON.stringify({version:2,heartbeats:t}));return this._heartbeatsCache.lastSentHeartbeatDate=e,n.length>0?(this._heartbeatsCache.heartbeats=n,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}}function Jt(){return(new Date).toISOString().substring(0,10)}class Xt{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return"object"==typeof indexedDB&&new Promise(((e,t)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),e(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var e;t((null===(e=i.error)||void 0===e?void 0:e.message)||"")}}catch(e){t(e)}})).then((()=>!0)).catch((()=>!1))}async read(){if(await this._canUseIndexedDBPromise){const e=await async function(e){try{return(await qt()).transaction(zt).objectStore(zt).get(Kt(e))}catch(e){throw jt.create("storage-get",{originalErrorMessage:e.message})}}(this.app);return e||{heartbeats:[]}}return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const n=await this.read();return Wt(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:n.lastSentHeartbeatDate,heartbeats:e.heartbeats})}}async add(e){var t;if(await this._canUseIndexedDBPromise){const n=await this.read();return Wt(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:n.lastSentHeartbeatDate,heartbeats:[...n.heartbeats,...e.heartbeats]})}}}function Qt(e){return Ve(JSON.stringify({version:2,heartbeats:e})).length}
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */var Yt;function Zt(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]])}return n}function en(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}Yt="",Mt(new nt("platform-logger",(e=>new Rt(e)),"PRIVATE")),Mt(new nt("heartbeat",(e=>new Gt(e)),"PRIVATE")),Ht(Ct,$t,Yt),Ht(Ct,$t,"esm2017"),Ht("fire-js","");const tn=en,nn=new Ge("auth","Firebase",{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}),rn=new dt("@firebase/auth");function sn(e,...t){rn.logLevel<=ot.ERROR&&rn.error(`Auth (9.8.1): ${e}`,...t)}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */function on(e,...t){throw ln(e,...t)}function an(e,...t){return ln(e,...t)}function cn(e,t,n){const r=Object.assign(Object.assign({},tn()),{[t]:n});return new Ge("auth","Firebase",r).create(t,{appName:e.name})}function ln(e,...t){if("string"!=typeof e){const n=t[0],r=[...t.slice(1)];return r[0]&&(r[0].appName=e.name),e._errorFactory.create(n,...r)}return nn.create(e,...t)}function un(e,t,...n){if(!e)throw ln(t,...n)}function dn(e){const t="INTERNAL ASSERTION FAILED: "+e;throw sn(t),new Error(t)}function hn(e,t){e||dn(t)}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */const fn=new Map;function pn(e){hn(e instanceof Function,"Expected a class definition");let t=fn.get(e);return t?(hn(t instanceof e,"Instance stored in cache mismatched with class"),t):(t=new e,fn.set(e,t),t)}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
function mn(){var e;return"undefined"!=typeof self&&(null===(e=self.location)||void 0===e?void 0:e.href)||""}function gn(){var e;return"undefined"!=typeof self&&(null===(e=self.location)||void 0===e?void 0:e.protocol)||null}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */function vn(){return"undefined"==typeof navigator||!navigator||!("onLine"in navigator)||"boolean"!=typeof navigator.onLine||"http:"!==gn()&&"https:"!==gn()&&!function(){const e="object"==typeof chrome?chrome.runtime:"object"==typeof browser?browser.runtime:void 0;return"object"==typeof e&&void 0!==e.id}()&&!("connection"in navigator)||navigator.onLine}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
class yn{constructor(e,t){this.shortDelay=e,this.longDelay=t,hn(t>e,"Short delay should be less than long delay!"),this.isMobile="undefined"!=typeof window&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(We())||"object"==typeof navigator&&"ReactNative"===navigator.product}get(){return vn()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */function bn(e,t){hn(e.emulator,"Emulator should always be set here");const{url:n}=e.emulator;return t?`${n}${t.startsWith("/")?t.slice(1):t}`:n}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class _n{static initialize(e,t,n){this.fetchImpl=e,t&&(this.headersImpl=t),n&&(this.responseImpl=n)}static fetch(){return this.fetchImpl?this.fetchImpl:"undefined"!=typeof self&&"fetch"in self?self.fetch:void dn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){return this.headersImpl?this.headersImpl:"undefined"!=typeof self&&"Headers"in self?self.Headers:void dn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){return this.responseImpl?this.responseImpl:"undefined"!=typeof self&&"Response"in self?self.Response:void dn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */const wn={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"},In=new yn(3e4,6e4);
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */async function En(e,t,n,r,i={}){return Tn(e,i,(async()=>{let i={},s={};r&&("GET"===t?s=r:i={body:JSON.stringify(r)});const o=Ye(Object.assign({key:e.config.apiKey},s)).slice(1),a=await e._getAdditionalHeaders();return a["Content-Type"]="application/json",e.languageCode&&(a["X-Firebase-Locale"]=e.languageCode),_n.fetch()(kn(e,e.config.apiHost,n,o),Object.assign({method:t,headers:a,referrerPolicy:"no-referrer"},i))}))}async function Tn(e,t,n){e._canInitEmulator=!1;const r=Object.assign(Object.assign({},wn),t);try{const t=new Sn(e),i=await Promise.race([n(),t.promise]);t.clearNetworkTimeout();const s=await i.json();if("needConfirmation"in s)throw On(e,"account-exists-with-different-credential",s);if(i.ok&&!("errorMessage"in s))return s;{const t=i.ok?s.errorMessage:s.error.message,[n,o]=t.split(" : ");if("FEDERATED_USER_ID_ALREADY_LINKED"===n)throw On(e,"credential-already-in-use",s);if("EMAIL_EXISTS"===n)throw On(e,"email-already-in-use",s);const a=r[n]||n.toLowerCase().replace(/[_\s]+/g,"-");if(o)throw cn(e,a,o);on(e,a)}}catch(t){if(t instanceof Ke)throw t;on(e,"network-request-failed")}}function kn(e,t,n,r){const i=`${t}${n}?${r}`;return e.config.emulator?bn(e.config,i):`${e.config.apiScheme}://${i}`}class Sn{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise(((e,t)=>{this.timer=setTimeout((()=>t(an(this.auth,"network-request-failed"))),In.get())}))}clearNetworkTimeout(){clearTimeout(this.timer)}}function On(e,t,n){const r={appName:e.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=an(e,t,r);return i.customData._tokenResponse=n,i}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
function Rn(e){if(e)try{const t=new Date(Number(e));if(!isNaN(t.getTime()))return t.toUTCString()}catch(e){}}function Cn(e){return 1e3*Number(e)}function $n(e){const[t,n,r]=e.split(".");if(void 0===t||void 0===n||void 0===r)return sn("JWT malformed, contained fewer than 3 sections"),null;try{const e=function(e){try{return ze.decodeString(e,!0)}catch(e){console.error("base64Decode failed: ",e)}return null}(n);return e?JSON.parse(e):(sn("Failed to decode base64 JWT payload"),null)}catch(e){return sn("Caught error parsing JWT payload as JSON",e),null}}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
async function An(e,t,n=!1){if(n)return t;try{return await t}catch(t){throw t instanceof Ke&&function({code:e}){return"auth/user-disabled"===e||"auth/user-token-expired"===e}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */(t)&&e.auth.currentUser===e&&await e.auth.signOut(),t}}class Nn{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,null!==this.timerId&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const e=this.errorBackoff;return this.errorBackoff=Math.min(2*this.errorBackoff,96e4),e}{this.errorBackoff=3e4;const e=(null!==(t=this.user.stsTokenManager.expirationTime)&&void 0!==t?t:0)-Date.now()-3e5;return Math.max(0,e)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout((async()=>{await this.iteration()}),t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){return void("auth/network-request-failed"===e.code&&this.schedule(!0))}this.schedule()}}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class Pn{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=Rn(this.lastLoginAt),this.creationTime=Rn(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */async function Ln(e){var t;const n=e.auth,r=await e.getIdToken(),i=await An(e,async function(e,t){return En(e,"POST","/v1/accounts:lookup",t)}(n,{idToken:r}));un(null==i?void 0:i.users.length,n,"internal-error");const s=i.users[0];e._notifyReloadListener(s);const o=(null===(t=s.providerUserInfo)||void 0===t?void 0:t.length)?s.providerUserInfo.map((e=>{var{providerId:t}=e,n=Zt(e,["providerId"]);return{providerId:t,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}})):[];const a=(c=e.providerData,l=o,[...c.filter((e=>!l.some((t=>t.providerId===e.providerId)))),...l]);var c,l;const u=e.isAnonymous,d=!(e.email&&s.passwordHash||(null==a?void 0:a.length)),h=!!u&&d,f={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new Pn(s.createdAt,s.lastLoginAt),isAnonymous:h};Object.assign(e,f)}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
class xn{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){un(e.idToken,"internal-error"),un(void 0!==e.idToken,"internal-error"),un(void 0!==e.refreshToken,"internal-error");const t="expiresIn"in e&&void 0!==e.expiresIn?Number(e.expiresIn):function(e){const t=$n(e);return un(t,"internal-error"),un(void 0!==t.exp,"internal-error"),un(void 0!==t.iat,"internal-error"),Number(t.exp)-Number(t.iat)}(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}async getToken(e,t=!1){return un(!this.accessToken||this.refreshToken,e,"user-token-expired"),t||!this.accessToken||this.isExpired?this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null:this.accessToken}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:n,refreshToken:r,expiresIn:i}=await
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
async function(e,t){const n=await Tn(e,{},(async()=>{const n=Ye({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:r,apiKey:i}=e.config,s=kn(e,r,"/v1/token",`key=${i}`),o=await e._getAdditionalHeaders();return o["Content-Type"]="application/x-www-form-urlencoded",_n.fetch()(s,{method:"POST",headers:o,body:n})}));return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}(e,t);this.updateTokensAndExpiration(n,r,Number(i))}updateTokensAndExpiration(e,t,n){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+1e3*n}static fromJSON(e,t){const{refreshToken:n,accessToken:r,expirationTime:i}=t,s=new xn;return n&&(un("string"==typeof n,"internal-error",{appName:e}),s.refreshToken=n),r&&(un("string"==typeof r,"internal-error",{appName:e}),s.accessToken=r),i&&(un("number"==typeof i,"internal-error",{appName:e}),s.expirationTime=i),s}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new xn,this.toJSON())}_performRefresh(){return dn("not implemented")}}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */function Dn(e,t){un("string"==typeof e||void 0===e,"internal-error",{appName:t})}class Mn{constructor(e){var{uid:t,auth:n,stsTokenManager:r}=e,i=Zt(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Nn(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=n,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new Pn(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const t=await An(this,this.stsTokenManager.getToken(this.auth,e));return un(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return async function(e,t=!1){const n=tt(e),r=await n.getIdToken(t),i=$n(r);un(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s="object"==typeof i.firebase?i.firebase:void 0,o=null==s?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:Rn(Cn(i.auth_time)),issuedAtTime:Rn(Cn(i.iat)),expirationTime:Rn(Cn(i.exp)),signInProvider:o||null,signInSecondFactor:(null==s?void 0:s.sign_in_second_factor)||null}}(this,e)}reload(){return async function(e){const t=tt(e);await Ln(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}(this)}_assign(e){this!==e&&(un(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map((e=>Object.assign({},e))),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){return new Mn(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(e){un(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let n=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),n=!0),t&&await Ln(this),await this.auth._persistUserIfCurrent(this),n&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await An(this,async function(e,t){return En(e,"POST","/v1/accounts:delete",t)}(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map((e=>Object.assign({},e))),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var n,r,i,s,o,a,c,l;const u=null!==(n=t.displayName)&&void 0!==n?n:void 0,d=null!==(r=t.email)&&void 0!==r?r:void 0,h=null!==(i=t.phoneNumber)&&void 0!==i?i:void 0,f=null!==(s=t.photoURL)&&void 0!==s?s:void 0,p=null!==(o=t.tenantId)&&void 0!==o?o:void 0,m=null!==(a=t._redirectEventId)&&void 0!==a?a:void 0,g=null!==(c=t.createdAt)&&void 0!==c?c:void 0,v=null!==(l=t.lastLoginAt)&&void 0!==l?l:void 0,{uid:y,emailVerified:b,isAnonymous:_,providerData:w,stsTokenManager:I}=t;un(y&&I,e,"internal-error");const E=xn.fromJSON(this.name,I);un("string"==typeof y,e,"internal-error"),Dn(u,e.name),Dn(d,e.name),un("boolean"==typeof b,e,"internal-error"),un("boolean"==typeof _,e,"internal-error"),Dn(h,e.name),Dn(f,e.name),Dn(p,e.name),Dn(m,e.name),Dn(g,e.name),Dn(v,e.name);const T=new Mn({uid:y,auth:e,email:d,emailVerified:b,displayName:u,isAnonymous:_,photoURL:f,phoneNumber:h,tenantId:p,stsTokenManager:E,createdAt:g,lastLoginAt:v});return w&&Array.isArray(w)&&(T.providerData=w.map((e=>Object.assign({},e)))),m&&(T._redirectEventId=m),T}static async _fromIdTokenResponse(e,t,n=!1){const r=new xn;r.updateFromServerResponse(t);const i=new Mn({uid:t.localId,auth:e,stsTokenManager:r,isAnonymous:n});return await Ln(i),i}}
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class Un{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return void 0===t?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}Un.type="NONE";const jn=Un;
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */function Bn(e,t,n){return`firebase:${e}:${t}:${n}`}class Fn{constructor(e,t,n){this.persistence=e,this.auth=t,this.userKey=n;const{config:r,name:i}=this.auth;this.fullUserKey=Bn(this.userKey,r.apiKey,i),this.fullPersistenceKey=Bn("persistence",r.apiKey,i),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Mn._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();return await this.removeCurrentUser(),this.persistence=e,t?this.setCurrentUser(t):void 0}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,n="authUser"){if(!t.length)return new Fn(pn(jn),e,n);const r=(await Promise.all(t.map((async e=>{if(await e._isAvailable())return e})))).filter((e=>e));let i=r[0]||pn(jn);const s=Bn(n,e.config.apiKey,e.name);let o=null;for(const n of t)try{const t=await n._get(s);if(t){const r=Mn._fromJSON(e,t);n!==i&&(o=r),i=n;break}}catch(e){}const a=r.filter((e=>e._shouldAllowMigration));return i._shouldAllowMigration&&a.length?(i=a[0],o&&await i._set(s,o.toJSON()),await Promise.all(t.map((async e=>{if(e!==i)try{await e._remove(s)}catch(e){}}))),new Fn(i,e,n)):new Fn(i,e,n)}}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */function Hn(e){const t=e.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(Wn(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(zn(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(Gn(t))return"Blackberry";if(Jn(t))return"Webos";if(Vn(t))return"Safari";if((t.includes("chrome/")||qn(t))&&!t.includes("edge/"))return"Chrome";if(Kn(t))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,n=e.match(t);if(2===(null==n?void 0:n.length))return n[1]}return"Other"}function zn(e=We()){return/firefox\//i.test(e)}function Vn(e=We()){const t=e.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function qn(e=We()){return/crios\//i.test(e)}function Wn(e=We()){return/iemobile/i.test(e)}function Kn(e=We()){return/android/i.test(e)}function Gn(e=We()){return/blackberry/i.test(e)}function Jn(e=We()){return/webos/i.test(e)}function Xn(e=We()){return/iphone|ipad|ipod/i.test(e)}function Qn(){return function(){const e=We();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0}()&&10===document.documentMode}function Yn(e=We()){return Xn(e)||Kn(e)||Jn(e)||Gn(e)||/windows phone/i.test(e)||Wn(e)}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
function Zn(e,t=[]){let n;switch(e){case"Browser":n=Hn(We());break;case"Worker":n=`${Hn(We())}-${e}`;break;default:n=e}return`${n}/JsCore/9.8.1/${t.length?t.join(","):"FirebaseCore-web"}`}
/**
     * @license
     * Copyright 2022 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class er{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const n=t=>new Promise(((n,r)=>{try{n(e(t))}catch(e){r(e)}}));n.onAbort=t,this.queue.push(n);const r=this.queue.length-1;return()=>{this.queue[r]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const n of this.queue)await n(e),n.onAbort&&t.push(n.onAbort)}catch(e){t.reverse();for(const e of t)try{e()}catch(e){}throw this.auth._errorFactory.create("login-blocked",{originalMessage:e.message})}}}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class tr{constructor(e,t,n){this.app=e,this.heartbeatServiceProvider=t,this.config=n,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new rr(this),this.idTokenSubscription=new rr(this),this.beforeStateQueue=new er(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=nn,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=n.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=pn(t)),this._initializationPromise=this.queue((async()=>{var n,r;if(!this._deleted&&(this.persistenceManager=await Fn.create(this,e),!this._deleted)){if(null===(n=this._popupRedirectResolver)||void 0===n?void 0:n._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch(e){}await this.initializeCurrentUser(t),this.lastNotifiedUid=(null===(r=this.currentUser)||void 0===r?void 0:r.uid)||null,this._deleted||(this._isInitialized=!0)}})),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();return this.currentUser||e?this.currentUser&&e&&this.currentUser.uid===e.uid?(this._currentUser._assign(e),void await this.currentUser.getIdToken()):void await this._updateCurrentUser(e,!0):void 0}async initializeCurrentUser(e){var t;const n=await this.assertedPersistence.getCurrentUser();let r=n,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const n=null===(t=this.redirectUser)||void 0===t?void 0:t._redirectEventId,s=null==r?void 0:r._redirectEventId,o=await this.tryRedirectSignIn(e);n&&n!==s||!(null==o?void 0:o.user)||(r=o.user,i=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(r)}catch(e){r=n,this._popupRedirectResolver._overrideRedirectResult(this,(()=>Promise.reject(e)))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return un(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch(e){await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await Ln(e)}catch(e){if("auth/network-request-failed"!==e.code)return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=function(){if("undefined"==typeof navigator)return null;const e=navigator;return e.languages&&e.languages[0]||e.language||null}()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const t=e?tt(e):null;return t&&un(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&un(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue((async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()}))}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue((async()=>{await this.assertedPersistence.setPersistence(pn(e))}))}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Ge("auth","Firebase",e())}onAuthStateChanged(e,t,n){return this.registerStateListener(this.authStateSubscription,e,t,n)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,n){return this.registerStateListener(this.idTokenSubscription,e,t,n)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:null===(e=this._currentUser)||void 0===e?void 0:e.toJSON()}}async _setRedirectUser(e,t){const n=await this.getOrInitRedirectPersistenceManager(t);return null===e?n.removeCurrentUser():n.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&pn(e)||this._popupRedirectResolver;un(t,this,"argument-error"),this.redirectPersistenceManager=await Fn.create(this,[pn(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,n;return this._isInitialized&&await this.queue((async()=>{})),(null===(t=this._currentUser)||void 0===t?void 0:t._redirectEventId)===e?this._currentUser:(null===(n=this.redirectUser)||void 0===n?void 0:n._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue((async()=>this.directlySetCurrentUser(e)))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const n=null!==(t=null===(e=this.currentUser)||void 0===e?void 0:e.uid)&&void 0!==t?t:null;this.lastNotifiedUid!==n&&(this.lastNotifiedUid=n,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,n,r){if(this._deleted)return()=>{};const i="function"==typeof t?t:t.next.bind(t),s=this._isInitialized?Promise.resolve():this._initializationPromise;return un(s,this,"internal-error"),s.then((()=>i(this.currentUser))),"function"==typeof t?e.addObserver(t,n,r):e.addObserver(t)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&(this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh()),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return un(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){e&&!this.frameworks.includes(e)&&(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Zn(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const n=await(null===(e=this.heartbeatServiceProvider.getImmediate({optional:!0}))||void 0===e?void 0:e.getHeartbeatsHeader());return n&&(t["X-Firebase-Client"]=n),t}}function nr(e){return tt(e)}class rr{constructor(e){this.auth=e,this.observer=null,this.addObserver=function(e,t){const n=new Ze(e,t);return n.subscribe.bind(n)}((e=>this.observer=e))}get next(){return un(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class ir{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return dn("not implemented")}_getIdTokenResponse(e){return dn("not implemented")}_linkToIdToken(e,t){return dn("not implemented")}_getReauthenticationResolver(e){return dn("not implemented")}}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */async function sr(e,t){return async function(e,t,n,r,i={}){const s=await En(e,t,n,r,i);return"mfaPendingCredential"in s&&on(e,"multi-factor-auth-required",{_serverResponse:s}),s}(e,"POST","/v1/accounts:signInWithIdp",function(e,t){return e.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:e.tenantId}):t}(e,t))}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class or extends ir{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new or(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):on("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t="string"==typeof e?JSON.parse(e):e,{providerId:n,signInMethod:r}=t,i=Zt(t,["providerId","signInMethod"]);if(!n||!r)return null;const s=new or(n,r);return s.idToken=i.idToken||void 0,s.accessToken=i.accessToken||void 0,s.secret=i.secret,s.nonce=i.nonce,s.pendingToken=i.pendingToken||null,s}_getIdTokenResponse(e){return sr(e,this.buildRequest())}_linkToIdToken(e,t){const n=this.buildRequest();return n.idToken=t,sr(e,n)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,sr(e,t)}buildRequest(){const e={requestUri:"http://localhost",returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=Ye(t)}return e}}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class ar{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class cr extends ar{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class lr extends cr{constructor(){super("facebook.com")}static credential(e){return or._fromParams({providerId:lr.PROVIDER_ID,signInMethod:lr.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return lr.credentialFromTaggedObject(e)}static credentialFromError(e){return lr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e))return null;if(!e.oauthAccessToken)return null;try{return lr.credential(e.oauthAccessToken)}catch(e){return null}}}lr.FACEBOOK_SIGN_IN_METHOD="facebook.com",lr.PROVIDER_ID="facebook.com";
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
class ur extends cr{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return or._fromParams({providerId:ur.PROVIDER_ID,signInMethod:ur.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return ur.credentialFromTaggedObject(e)}static credentialFromError(e){return ur.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:n}=e;if(!t&&!n)return null;try{return ur.credential(t,n)}catch(e){return null}}}ur.GOOGLE_SIGN_IN_METHOD="google.com",ur.PROVIDER_ID="google.com";
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
class dr extends cr{constructor(){super("github.com")}static credential(e){return or._fromParams({providerId:dr.PROVIDER_ID,signInMethod:dr.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return dr.credentialFromTaggedObject(e)}static credentialFromError(e){return dr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e))return null;if(!e.oauthAccessToken)return null;try{return dr.credential(e.oauthAccessToken)}catch(e){return null}}}dr.GITHUB_SIGN_IN_METHOD="github.com",dr.PROVIDER_ID="github.com";
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
class hr extends cr{constructor(){super("twitter.com")}static credential(e,t){return or._fromParams({providerId:hr.PROVIDER_ID,signInMethod:hr.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return hr.credentialFromTaggedObject(e)}static credentialFromError(e){return hr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:n}=e;if(!t||!n)return null;try{return hr.credential(t,n)}catch(e){return null}}}hr.TWITTER_SIGN_IN_METHOD="twitter.com",hr.PROVIDER_ID="twitter.com";
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
class fr{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,n,r=!1){const i=await Mn._fromIdTokenResponse(e,n,r),s=pr(n);return new fr({user:i,providerId:s,_tokenResponse:n,operationType:t})}static async _forOperation(e,t,n){await e._updateTokensIfNecessary(n,!0);const r=pr(n);return new fr({user:e,providerId:r,_tokenResponse:n,operationType:t})}}function pr(e){return e.providerId?e.providerId:"phoneNumber"in e?"phone":null}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class mr extends Ke{constructor(e,t,n,r){var i;super(t.code,t.message),this.operationType=n,this.user=r,Object.setPrototypeOf(this,mr.prototype),this.customData={appName:e.name,tenantId:null!==(i=e.tenantId)&&void 0!==i?i:void 0,_serverResponse:t.customData._serverResponse,operationType:n}}static _fromErrorAndOperation(e,t,n,r){return new mr(e,t,n,r)}}function gr(e,t,n,r){return("reauthenticate"===t?n._getReauthenticationResolver(e):n._getIdTokenResponse(e)).catch((n=>{if("auth/multi-factor-auth-required"===n.code)throw mr._fromErrorAndOperation(e,n,t,r);throw n}))}const vr="__sak";
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class yr{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(vr,"1"),this.storage.removeItem(vr),Promise.resolve(!0)):Promise.resolve(!1)}catch(e){return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class br extends yr{constructor(){super((()=>window.localStorage),"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=function(){const e=We();return Vn(e)||Xn(e)}()&&function(){try{return!(!window||window===window.top)}catch(e){return!1}}(),this.fallbackToPolling=Yn(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const n=this.storage.getItem(t),r=this.localCache[t];n!==r&&e(t,r,n)}}onStorageEvent(e,t=!1){if(!e.key)return void this.forAllChangedKeys(((e,t,n)=>{this.notifyListeners(e,n)}));const n=e.key;if(t?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const r=this.storage.getItem(n);if(e.newValue!==r)null!==e.newValue?this.storage.setItem(n,e.newValue):this.storage.removeItem(n);else if(this.localCache[n]===e.newValue&&!t)return}const r=()=>{const e=this.storage.getItem(n);(t||this.localCache[n]!==e)&&this.notifyListeners(n,e)},i=this.storage.getItem(n);Qn()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(r,10):r()}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const e of Array.from(n))e(t?JSON.parse(t):t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval((()=>{this.forAllChangedKeys(((e,t,n)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:n}),!0)}))}),1e3)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){0===Object.keys(this.listeners).length&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}br.type="LOCAL";const _r=br;
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class wr extends yr{constructor(){super((()=>window.sessionStorage),"SESSION")}_addListener(e,t){}_removeListener(e,t){}}wr.type="SESSION";const Ir=wr;
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
class Er{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find((t=>t.isListeningto(e)));if(t)return t;const n=new Er(e);return this.receivers.push(n),n}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:n,eventType:r,data:i}=t.data,s=this.handlersMap[r];if(!(null==s?void 0:s.size))return;t.ports[0].postMessage({status:"ack",eventId:n,eventType:r});const o=Array.from(s).map((async e=>e(t.origin,i))),a=await function(e){return Promise.all(e.map((async e=>{try{return{fulfilled:!0,value:await e}}catch(e){return{fulfilled:!1,reason:e}}})))}(o);t.ports[0].postMessage({status:"done",eventId:n,eventType:r,response:a})}_subscribe(e,t){0===Object.keys(this.handlersMap).length&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),t&&0!==this.handlersMap[e].size||delete this.handlersMap[e],0===Object.keys(this.handlersMap).length&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
function Tr(e="",t=10){let n="";for(let e=0;e<t;e++)n+=Math.floor(10*Math.random());return e+n}
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */Er.receivers=[];class kr{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,n=50){const r="undefined"!=typeof MessageChannel?new MessageChannel:null;if(!r)throw new Error("connection_unavailable");let i,s;return new Promise(((o,a)=>{const c=Tr("",20);r.port1.start();const l=setTimeout((()=>{a(new Error("unsupported_event"))}),n);s={messageChannel:r,onMessage(e){const t=e;if(t.data.eventId===c)switch(t.data.status){case"ack":clearTimeout(l),i=setTimeout((()=>{a(new Error("timeout"))}),3e3);break;case"done":clearTimeout(i),o(t.data.response);break;default:clearTimeout(l),clearTimeout(i),a(new Error("invalid_response"))}}},this.handlers.add(s),r.port1.addEventListener("message",s.onMessage),this.target.postMessage({eventType:e,eventId:c,data:t},[r.port2])})).finally((()=>{s&&this.removeMessageHandler(s)}))}}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */function Sr(){return window}
/**
     * @license
     * Copyright 2020 Google LLC.
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
function Or(){return void 0!==Sr().WorkerGlobalScope&&"function"==typeof Sr().importScripts}
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
const Rr="firebaseLocalStorageDb",Cr="firebaseLocalStorage",$r="fbase_key";class Ar{constructor(e){this.request=e}toPromise(){return new Promise(((e,t)=>{this.request.addEventListener("success",(()=>{e(this.request.result)})),this.request.addEventListener("error",(()=>{t(this.request.error)}))}))}}function Nr(e,t){return e.transaction([Cr],t?"readwrite":"readonly").objectStore(Cr)}function Pr(){const e=indexedDB.open(Rr,1);return new Promise(((t,n)=>{e.addEventListener("error",(()=>{n(e.error)})),e.addEventListener("upgradeneeded",(()=>{const t=e.result;try{t.createObjectStore(Cr,{keyPath:$r})}catch(e){n(e)}})),e.addEventListener("success",(async()=>{const n=e.result;n.objectStoreNames.contains(Cr)?t(n):(n.close(),await function(){const e=indexedDB.deleteDatabase(Rr);return new Ar(e).toPromise()}(),t(await Pr()))}))}))}async function Lr(e,t,n){const r=Nr(e,!0).put({[$r]:t,value:n});return new Ar(r).toPromise()}function xr(e,t){const n=Nr(e,!0).delete(t);return new Ar(n).toPromise()}class Dr{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then((()=>{}),(()=>{}))}async _openDb(){return this.db||(this.db=await Pr()),this.db}async _withRetries(e){let t=0;for(;;)try{const t=await this._openDb();return await e(t)}catch(e){if(t++>3)throw e;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Or()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Er._getInstance(Or()?self:null),this.receiver._subscribe("keyChanged",(async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)}))),this.receiver._subscribe("ping",(async(e,t)=>["keyChanged"]))}async initializeSender(){var e,t;if(this.activeServiceWorker=await async function(){if(!(null===navigator||void 0===navigator?void 0:navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch(e){return null}}(),!this.activeServiceWorker)return;this.sender=new kr(this.activeServiceWorker);const n=await this.sender._send("ping",{},800);n&&(null===(e=n[0])||void 0===e?void 0:e.fulfilled)&&(null===(t=n[0])||void 0===t?void 0:t.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){var t;if(this.sender&&this.activeServiceWorker&&((null===(t=null===navigator||void 0===navigator?void 0:navigator.serviceWorker)||void 0===t?void 0:t.controller)||null)===this.activeServiceWorker)try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch(t){}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Pr();return await Lr(e,vr,"1"),await xr(e,vr),!0}catch(e){}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite((async()=>(await this._withRetries((n=>Lr(n,e,t))),this.localCache[e]=t,this.notifyServiceWorker(e))))}async _get(e){const t=await this._withRetries((t=>async function(e,t){const n=Nr(e,!1).get(t),r=await new Ar(n).toPromise();return void 0===r?null:r.value}(t,e)));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite((async()=>(await this._withRetries((t=>xr(t,e))),delete this.localCache[e],this.notifyServiceWorker(e))))}async _poll(){const e=await this._withRetries((e=>{const t=Nr(e,!1).getAll();return new Ar(t).toPromise()}));if(!e)return[];if(0!==this.pendingWrites)return[];const t=[],n=new Set;for(const{fbase_key:r,value:i}of e)n.add(r),JSON.stringify(this.localCache[r])!==JSON.stringify(i)&&(this.notifyListeners(r,i),t.push(r));for(const e of Object.keys(this.localCache))this.localCache[e]&&!n.has(e)&&(this.notifyListeners(e,null),t.push(e));return t}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const e of Array.from(n))e(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval((async()=>this._poll()),800)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){0===Object.keys(this.listeners).length&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&this.stopPolling()}}Dr.type="LOCAL";const Mr=Dr;
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */function Ur(e){return new Promise(((t,n)=>{const r=document.createElement("script");var i,s;r.setAttribute("src",e),r.onload=t,r.onerror=e=>{const t=an("internal-error");t.customData=e,n(t)},r.type="text/javascript",r.charset="UTF-8",(null!==(s=null===(i=document.getElementsByTagName("head"))||void 0===i?void 0:i[0])&&void 0!==s?s:document).appendChild(r)}))}
/**
     * @license
     * Copyright 2021 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
function jr(e,t){return t?pn(t):(un(e._popupRedirectResolver,e,"argument-error"),e._popupRedirectResolver)}
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */new yn(3e4,6e4);class Br extends ir{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return sr(e,this._buildIdpRequest())}_linkToIdToken(e,t){return sr(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return sr(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function Fr(e){
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
return async function(e,t,n=!1){const r="signIn",i=await gr(e,r,t),s=await fr._fromIdTokenResponse(e,r,i);return n||await e._updateCurrentUser(s.user),s}(e.auth,new Br(e),e.bypassAuthState)}function Hr(e){const{auth:t,user:n}=e;return un(n,t,"internal-error"),
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
async function(e,t,n=!1){const{auth:r}=e,i="reauthenticate";try{const s=await An(e,gr(r,i,t,e),n);un(s.idToken,r,"internal-error");const o=$n(s.idToken);un(o,r,"internal-error");const{sub:a}=o;return un(e.uid===a,r,"user-mismatch"),fr._forOperation(e,i,s)}catch(e){throw"auth/user-not-found"===(null==e?void 0:e.code)&&on(r,"user-mismatch"),e}}(n,new Br(e),e.bypassAuthState)}async function zr(e){const{auth:t,user:n}=e;return un(n,t,"internal-error"),async function(e,t,n=!1){const r=await An(e,t._linkToIdToken(e.auth,await e.getIdToken()),n);return fr._forOperation(e,"link",r)}(n,new Br(e),e.bypassAuthState)}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class Vr{constructor(e,t,n,r,i=!1){this.auth=e,this.resolver=n,this.user=r,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise((async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(e){this.reject(e)}}))}async onAuthEvent(e){const{urlResponse:t,sessionId:n,postBody:r,tenantId:i,error:s,type:o}=e;if(s)return void this.reject(s);const a={auth:this.auth,requestUri:t,sessionId:n,tenantId:i||void 0,postBody:r||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(o)(a))}catch(e){this.reject(e)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Fr;case"linkViaPopup":case"linkViaRedirect":return zr;case"reauthViaPopup":case"reauthViaRedirect":return Hr;default:on(this.auth,"internal-error")}}resolve(e){hn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){hn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */const qr=new yn(2e3,1e4);async function Wr(e,t,n){const r=nr(e);!function(e,t,n){if(!(t instanceof n))throw n.name!==t.constructor.name&&on(e,"argument-error"),cn(e,"argument-error",`Type of ${t.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}(e,t,ar);const i=jr(r,n);return new Kr(r,"signInViaPopup",t,i).executeNotNull()}class Kr extends Vr{constructor(e,t,n,r,i){super(e,t,r,i),this.provider=n,this.authWindow=null,this.pollId=null,Kr.currentPopupAction&&Kr.currentPopupAction.cancel(),Kr.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return un(e,this.auth,"internal-error"),e}async onExecution(){hn(1===this.filter.length,"Popup operations only handle one event");const e=Tr();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch((e=>{this.reject(e)})),this.resolver._isIframeWebStorageSupported(this.auth,(e=>{e||this.reject(an(this.auth,"web-storage-unsupported"))})),this.pollUserCancellation()}get eventId(){var e;return(null===(e=this.authWindow)||void 0===e?void 0:e.associatedEvent)||null}cancel(){this.reject(an(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Kr.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,n;(null===(n=null===(t=this.authWindow)||void 0===t?void 0:t.window)||void 0===n?void 0:n.closed)?this.pollId=window.setTimeout((()=>{this.pollId=null,this.reject(an(this.auth,"popup-closed-by-user"))}),2e3):this.pollId=window.setTimeout(e,qr.get())};e()}}Kr.currentPopupAction=null;
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
const Gr="pendingRedirect",Jr=new Map;class Xr extends Vr{constructor(e,t,n=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,n),this.eventId=null}async execute(){let e=Jr.get(this.auth._key());if(!e){try{const t=await async function(e,t){const n=function(e){return Bn(Gr,e.config.apiKey,e.name)}(t),r=function(e){return pn(e._redirectPersistence)}(e);if(!await r._isAvailable())return!1;const i="true"===await r._get(n);return await r._remove(n),i}(this.resolver,this.auth),n=t?await super.execute():null;e=()=>Promise.resolve(n)}catch(t){e=()=>Promise.reject(t)}Jr.set(this.auth._key(),e)}return this.bypassAuthState||Jr.set(this.auth._key(),(()=>Promise.resolve(null))),e()}async onAuthEvent(e){if("signInViaRedirect"===e.type)return super.onAuthEvent(e);if("unknown"!==e.type){if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}else this.resolve(null)}async onExecution(){}cleanUp(){}}function Qr(e,t){Jr.set(e._key(),t)}async function Yr(e,t,n=!1){const r=nr(e),i=jr(r,t),s=new Xr(r,i,n),o=await s.execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,t)),o}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class Zr{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach((n=>{this.isEventForConsumer(e,n)&&(t=!0,this.sendToConsumer(e,n),this.saveEventToCache(e))})),this.hasHandledPotentialRedirect||!function(e){switch(e.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return ti(e);default:return!1}}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var n;if(e.error&&!ti(e)){const r=(null===(n=e.error.code)||void 0===n?void 0:n.split("auth/")[1])||"internal-error";t.onError(an(this.auth,r))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const n=null===t.eventId||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&n}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=6e5&&this.cachedEventUids.clear(),this.cachedEventUids.has(ei(e))}saveEventToCache(e){this.cachedEventUids.add(ei(e)),this.lastProcessedEventTime=Date.now()}}function ei(e){return[e.type,e.eventId,e.sessionId,e.tenantId].filter((e=>e)).join("-")}function ti({type:e,error:t}){return"unknown"===e&&"auth/no-auth-event"===(null==t?void 0:t.code)}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
const ni=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,ri=/^https?/;async function ii(e){if(e.config.emulator)return;const{authorizedDomains:t}=await async function(e,t={}){return En(e,"GET","/v1/projects",t)}(e);for(const e of t)try{if(si(e))return}catch(e){}on(e,"unauthorized-domain")}function si(e){const t=mn(),{protocol:n,hostname:r}=new URL(t);if(e.startsWith("chrome-extension://")){const i=new URL(e);return""===i.hostname&&""===r?"chrome-extension:"===n&&e.replace("chrome-extension://","")===t.replace("chrome-extension://",""):"chrome-extension:"===n&&i.hostname===r}if(!ri.test(n))return!1;if(ni.test(e))return r===e;const i=e.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}
/**
     * @license
     * Copyright 2020 Google LLC.
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */const oi=new yn(3e4,6e4);function ai(){const e=Sr().___jsl;if(null==e?void 0:e.H)for(const t of Object.keys(e.H))if(e.H[t].r=e.H[t].r||[],e.H[t].L=e.H[t].L||[],e.H[t].r=[...e.H[t].L],e.CP)for(let t=0;t<e.CP.length;t++)e.CP[t]=null}function ci(e){return new Promise(((t,n)=>{var r,i,s;function o(){ai(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{ai(),n(an(e,"network-request-failed"))},timeout:oi.get()})}if(null===(i=null===(r=Sr().gapi)||void 0===r?void 0:r.iframes)||void 0===i?void 0:i.Iframe)t(gapi.iframes.getContext());else{if(!(null===(s=Sr().gapi)||void 0===s?void 0:s.load)){const t=`__${"iframefcb"}${Math.floor(1e6*Math.random())}`;return Sr()[t]=()=>{gapi.load?o():n(an(e,"network-request-failed"))},Ur(`https://apis.google.com/js/api.js?onload=${t}`).catch((e=>n(e)))}o()}})).catch((e=>{throw li=null,e}))}let li=null;
/**
     * @license
     * Copyright 2020 Google LLC.
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
const ui=new yn(5e3,15e3),di={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},hi=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function fi(e){const t=e.config;un(t.authDomain,e,"auth-domain-config-required");const n=t.emulator?bn(t,"emulator/auth/iframe"):`https://${e.config.authDomain}/__/auth/iframe`,r={apiKey:t.apiKey,appName:e.name,v:Ft},i=hi.get(e.config.apiHost);i&&(r.eid=i);const s=e._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${Ye(r).slice(1)}`}async function pi(e){const t=await function(e){return li=li||ci(e),li}(e),n=Sr().gapi;return un(n,e,"internal-error"),t.open({where:document.body,url:fi(e),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:di,dontclear:!0},(t=>new Promise((async(n,r)=>{await t.restyle({setHideOnLeave:!1});const i=an(e,"network-request-failed"),s=Sr().setTimeout((()=>{r(i)}),ui.get());function o(){Sr().clearTimeout(s),n(t)}t.ping(o).then(o,(()=>{r(i)}))}))))}
/**
     * @license
     * Copyright 2020 Google LLC.
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */const mi={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"};class gi{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch(e){}}}function vi(e,t,n,r=500,i=600){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const c=Object.assign(Object.assign({},mi),{width:r.toString(),height:i.toString(),top:s,left:o}),l=We().toLowerCase();n&&(a=qn(l)?"_blank":n),zn(l)&&(t=t||"http://localhost",c.scrollbars="yes");const u=Object.entries(c).reduce(((e,[t,n])=>`${e}${t}=${n},`),"");if(function(e=We()){var t;return Xn(e)&&!!(null===(t=window.navigator)||void 0===t?void 0:t.standalone)}(l)&&"_self"!==a)return function(e,t){const n=document.createElement("a");n.href=e,n.target=t;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}
/**
     * @license
     * Copyright 2021 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */(t||"",a),new gi(null);const d=window.open(t||"",a,u);un(d,e,"popup-blocked");try{d.focus()}catch(e){}return new gi(d)}const yi="__/auth/handler",bi="emulator/auth/handler";function _i(e,t,n,r,i,s){un(e.config.authDomain,e,"auth-domain-config-required"),un(e.config.apiKey,e,"invalid-api-key");const o={apiKey:e.config.apiKey,appName:e.name,authType:n,redirectUrl:r,v:Ft,eventId:i};if(t instanceof ar){t.setDefaultLanguage(e.languageCode),o.providerId=t.providerId||"",function(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}(t.getCustomParameters())||(o.customParameters=JSON.stringify(t.getCustomParameters()));for(const[e,t]of Object.entries(s||{}))o[e]=t}if(t instanceof cr){const e=t.getScopes().filter((e=>""!==e));e.length>0&&(o.scopes=e.join(","))}e.tenantId&&(o.tid=e.tenantId);const a=o;for(const e of Object.keys(a))void 0===a[e]&&delete a[e];return`${function({config:e}){if(!e.emulator)return`https://${e.authDomain}/${yi}`;return bn(e,bi)}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */(e)}?${Ye(a).slice(1)}`}const wi="webStorageSupport";const Ii=class{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Ir,this._completeRedirectFn=Yr,this._overrideRedirectResult=Qr}async _openPopup(e,t,n,r){var i;hn(null===(i=this.eventManagers[e._key()])||void 0===i?void 0:i.manager,"_initialize() not called before _openPopup()");return vi(e,_i(e,t,n,mn(),r),Tr())}async _openRedirect(e,t,n,r){var i;return await this._originValidation(e),i=_i(e,t,n,mn(),r),Sr().location.href=i,new Promise((()=>{}))}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:e,promise:n}=this.eventManagers[t];return e?Promise.resolve(e):(hn(n,"If manager is not set, promise should be"),n)}const n=this.initAndGetManager(e);return this.eventManagers[t]={promise:n},n.catch((()=>{delete this.eventManagers[t]})),n}async initAndGetManager(e){const t=await pi(e),n=new Zr(e);return t.register("authEvent",(t=>{un(null==t?void 0:t.authEvent,e,"invalid-auth-event");return{status:n.onEvent(t.authEvent)?"ACK":"ERROR"}}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:n},this.iframes[e._key()]=t,n}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(wi,{type:wi},(n=>{var r;const i=null===(r=null==n?void 0:n[0])||void 0===r?void 0:r.webStorageSupport;void 0!==i&&t(!!i),on(e,"internal-error")}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=ii(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return Yn()||Vn()||Xn()}};var Ei,Ti="@firebase/auth",ki="0.20.1";
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
class Si{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),(null===(e=this.auth.currentUser)||void 0===e?void 0:e.uid)||null}async getToken(e){if(this.assertAuthConfigured(),await this.auth._initializationPromise,!this.auth.currentUser)return null;return{accessToken:await this.auth.currentUser.getIdToken(e)}}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged((t=>{var n;e((null===(n=t)||void 0===n?void 0:n.stsTokenManager.accessToken)||null)}));this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){un(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */Ei="Browser",Mt(new nt("auth",((e,{options:t})=>{const n=e.getProvider("app").getImmediate(),r=e.getProvider("heartbeat"),{apiKey:i,authDomain:s}=n.options;return((e,n)=>{un(i&&!i.includes(":"),"invalid-api-key",{appName:e.name}),un(!(null==s?void 0:s.includes(":")),"argument-error",{appName:e.name});const r={apiKey:i,authDomain:s,clientPlatform:Ei,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Zn(Ei)},o=new tr(e,n,r);return function(e,t){const n=(null==t?void 0:t.persistence)||[],r=(Array.isArray(n)?n:[n]).map(pn);(null==t?void 0:t.errorMap)&&e._updateErrorMap(t.errorMap),e._initializeWithPersistence(r,null==t?void 0:t.popupRedirectResolver)}(o,t),o})(n,r)}),"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback(((e,t,n)=>{e.getProvider("auth-internal").initialize()}))),Mt(new nt("auth-internal",(e=>(e=>new Si(e))(nr(e.getProvider("auth").getImmediate()))),"PRIVATE").setInstantiationMode("EXPLICIT")),Ht(Ti,ki,function(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}(Ei)),Ht(Ti,ki,"esm2017");
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
Ht("firebase","9.8.1","app");const Oi=function(e,t={}){if("object"!=typeof t){t={name:t}}const n=Object.assign({name:Nt,automaticDataCollectionEnabled:!1},t),r=n.name;if("string"!=typeof r||!r)throw jt.create("bad-app-name",{appName:String(r)});const i=Lt.get(r);if(i){if(Xe(e,i.options)&&Xe(n,i.config))return i;throw jt.create("duplicate-app",{appName:r})}const s=new st(r);for(const e of xt.values())s.addComponent(e);const o=new Bt(e,n,s);return Lt.set(r,o),o}({apiKey:"AIzaSyAcH8E_V-vVMwpmGkHGV_38jC6PCqbNUD4",authDomain:"svelte-auth-1073d.firebaseapp.com",projectId:"svelte-auth-1073d",storageBucket:"svelte-auth-1073d.appspot.com",messagingSenderId:"1047237369740",appId:"1:1047237369740:web:752a60a5a387ede43d00a9"}),Ri=
/**
     * @license
     * Copyright 2021 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
function(e=function(e="[DEFAULT]"){const t=Lt.get(e);if(!t)throw jt.create("no-app",{appName:e});return t}()){const t=Ut(e,"auth");return t.isInitialized()?t.getImmediate():function(e,t){const n=Ut(e,"auth");if(n.isInitialized()){const e=n.getImmediate();if(Xe(n.getOptions(),null!=t?t:{}))return e;on(e,"already-initialized")}return n.initialize({options:t})}(e,{popupRedirectResolver:Ii,persistence:[Mr,_r,Ir]})}(Oi),Ci=he({}),$i=he(!1);let Ai=he("ingresos"),Ni=he("principal");const Pi=he("https://backend-tracker.onrender.com");let Li=he("0"),xi=he([]),Di=he([]),Mi=he("0"),Ui=he("0"),ji=he(!1),Bi=he(""),Fi=he(!1),Hi=he([]);var zi,Vi=function(e,t){return function(){for(var n=new Array(arguments.length),r=0;r<n.length;r++)n[r]=arguments[r];return e.apply(t,n)}},qi=Object.prototype.toString,Wi=(zi=Object.create(null),function(e){var t=qi.call(e);return zi[t]||(zi[t]=t.slice(8,-1).toLowerCase())});function Ki(e){return e=e.toLowerCase(),function(t){return Wi(t)===e}}function Gi(e){return Array.isArray(e)}function Ji(e){return void 0===e}var Xi=Ki("ArrayBuffer");function Qi(e){return null!==e&&"object"==typeof e}function Yi(e){if("object"!==Wi(e))return!1;var t=Object.getPrototypeOf(e);return null===t||t===Object.prototype}var Zi=Ki("Date"),es=Ki("File"),ts=Ki("Blob"),ns=Ki("FileList");function rs(e){return"[object Function]"===qi.call(e)}var is=Ki("URLSearchParams");function ss(e,t){if(null!=e)if("object"!=typeof e&&(e=[e]),Gi(e))for(var n=0,r=e.length;n<r;n++)t.call(null,e[n],n,e);else for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&t.call(null,e[i],i,e)}var os,as=(os="undefined"!=typeof Uint8Array&&Object.getPrototypeOf(Uint8Array),function(e){return os&&e instanceof os}),cs={isArray:Gi,isArrayBuffer:Xi,isBuffer:function(e){return null!==e&&!Ji(e)&&null!==e.constructor&&!Ji(e.constructor)&&"function"==typeof e.constructor.isBuffer&&e.constructor.isBuffer(e)},isFormData:function(e){var t="[object FormData]";return e&&("function"==typeof FormData&&e instanceof FormData||qi.call(e)===t||rs(e.toString)&&e.toString()===t)},isArrayBufferView:function(e){return"undefined"!=typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(e):e&&e.buffer&&Xi(e.buffer)},isString:function(e){return"string"==typeof e},isNumber:function(e){return"number"==typeof e},isObject:Qi,isPlainObject:Yi,isUndefined:Ji,isDate:Zi,isFile:es,isBlob:ts,isFunction:rs,isStream:function(e){return Qi(e)&&rs(e.pipe)},isURLSearchParams:is,isStandardBrowserEnv:function(){return("undefined"==typeof navigator||"ReactNative"!==navigator.product&&"NativeScript"!==navigator.product&&"NS"!==navigator.product)&&("undefined"!=typeof window&&"undefined"!=typeof document)},forEach:ss,merge:function e(){var t={};function n(n,r){Yi(t[r])&&Yi(n)?t[r]=e(t[r],n):Yi(n)?t[r]=e({},n):Gi(n)?t[r]=n.slice():t[r]=n}for(var r=0,i=arguments.length;r<i;r++)ss(arguments[r],n);return t},extend:function(e,t,n){return ss(t,(function(t,r){e[r]=n&&"function"==typeof t?Vi(t,n):t})),e},trim:function(e){return e.trim?e.trim():e.replace(/^\s+|\s+$/g,"")},stripBOM:function(e){return 65279===e.charCodeAt(0)&&(e=e.slice(1)),e},inherits:function(e,t,n,r){e.prototype=Object.create(t.prototype,r),e.prototype.constructor=e,n&&Object.assign(e.prototype,n)},toFlatObject:function(e,t,n){var r,i,s,o={};t=t||{};do{for(i=(r=Object.getOwnPropertyNames(e)).length;i-- >0;)o[s=r[i]]||(t[s]=e[s],o[s]=!0);e=Object.getPrototypeOf(e)}while(e&&(!n||n(e,t))&&e!==Object.prototype);return t},kindOf:Wi,kindOfTest:Ki,endsWith:function(e,t,n){e=String(e),(void 0===n||n>e.length)&&(n=e.length),n-=t.length;var r=e.indexOf(t,n);return-1!==r&&r===n},toArray:function(e){if(!e)return null;var t=e.length;if(Ji(t))return null;for(var n=new Array(t);t-- >0;)n[t]=e[t];return n},isTypedArray:as,isFileList:ns};function ls(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}var us=function(e,t,n){if(!t)return e;var r;if(n)r=n(t);else if(cs.isURLSearchParams(t))r=t.toString();else{var i=[];cs.forEach(t,(function(e,t){null!=e&&(cs.isArray(e)?t+="[]":e=[e],cs.forEach(e,(function(e){cs.isDate(e)?e=e.toISOString():cs.isObject(e)&&(e=JSON.stringify(e)),i.push(ls(t)+"="+ls(e))})))})),r=i.join("&")}if(r){var s=e.indexOf("#");-1!==s&&(e=e.slice(0,s)),e+=(-1===e.indexOf("?")?"?":"&")+r}return e};function ds(){this.handlers=[]}ds.prototype.use=function(e,t,n){return this.handlers.push({fulfilled:e,rejected:t,synchronous:!!n&&n.synchronous,runWhen:n?n.runWhen:null}),this.handlers.length-1},ds.prototype.eject=function(e){this.handlers[e]&&(this.handlers[e]=null)},ds.prototype.forEach=function(e){cs.forEach(this.handlers,(function(t){null!==t&&e(t)}))};var hs=ds,fs=function(e,t){cs.forEach(e,(function(n,r){r!==t&&r.toUpperCase()===t.toUpperCase()&&(e[t]=n,delete e[r])}))};function ps(e,t,n,r,i){Error.call(this),this.message=e,this.name="AxiosError",t&&(this.code=t),n&&(this.config=n),r&&(this.request=r),i&&(this.response=i)}cs.inherits(ps,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:this.config,code:this.code,status:this.response&&this.response.status?this.response.status:null}}});var ms=ps.prototype,gs={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED"].forEach((function(e){gs[e]={value:e}})),Object.defineProperties(ps,gs),Object.defineProperty(ms,"isAxiosError",{value:!0}),ps.from=function(e,t,n,r,i,s){var o=Object.create(ms);return cs.toFlatObject(e,o,(function(e){return e!==Error.prototype})),ps.call(o,e.message,t,n,r,i),o.name=e.name,s&&Object.assign(o,s),o};var vs=ps,ys={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1};var bs=function(e,t){t=t||new FormData;var n=[];function r(e){return null===e?"":cs.isDate(e)?e.toISOString():cs.isArrayBuffer(e)||cs.isTypedArray(e)?"function"==typeof Blob?new Blob([e]):Buffer.from(e):e}return function e(i,s){if(cs.isPlainObject(i)||cs.isArray(i)){if(-1!==n.indexOf(i))throw Error("Circular reference detected in "+s);n.push(i),cs.forEach(i,(function(n,i){if(!cs.isUndefined(n)){var o,a=s?s+"."+i:i;if(n&&!s&&"object"==typeof n)if(cs.endsWith(i,"{}"))n=JSON.stringify(n);else if(cs.endsWith(i,"[]")&&(o=cs.toArray(n)))return void o.forEach((function(e){!cs.isUndefined(e)&&t.append(a,r(e))}));e(n,a)}})),n.pop()}else t.append(s,r(i))}(e),t},_s=cs.isStandardBrowserEnv()?{write:function(e,t,n,r,i,s){var o=[];o.push(e+"="+encodeURIComponent(t)),cs.isNumber(n)&&o.push("expires="+new Date(n).toGMTString()),cs.isString(r)&&o.push("path="+r),cs.isString(i)&&o.push("domain="+i),!0===s&&o.push("secure"),document.cookie=o.join("; ")},read:function(e){var t=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove:function(e){this.write(e,"",Date.now()-864e5)}}:{write:function(){},read:function(){return null},remove:function(){}},ws=function(e,t){return e&&!/^([a-z][a-z\d+\-.]*:)?\/\//i.test(t)?function(e,t){return t?e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):e}(e,t):t},Is=["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"],Es=cs.isStandardBrowserEnv()?function(){var e,t=/(msie|trident)/i.test(navigator.userAgent),n=document.createElement("a");function r(e){var r=e;return t&&(n.setAttribute("href",r),r=n.href),n.setAttribute("href",r),{href:n.href,protocol:n.protocol?n.protocol.replace(/:$/,""):"",host:n.host,search:n.search?n.search.replace(/^\?/,""):"",hash:n.hash?n.hash.replace(/^#/,""):"",hostname:n.hostname,port:n.port,pathname:"/"===n.pathname.charAt(0)?n.pathname:"/"+n.pathname}}return e=r(window.location.href),function(t){var n=cs.isString(t)?r(t):t;return n.protocol===e.protocol&&n.host===e.host}}():function(){return!0};function Ts(e){vs.call(this,null==e?"canceled":e,vs.ERR_CANCELED),this.name="CanceledError"}cs.inherits(Ts,vs,{__CANCEL__:!0});var ks=Ts,Ss=function(e){return new Promise((function(t,n){var r,i=e.data,s=e.headers,o=e.responseType;function a(){e.cancelToken&&e.cancelToken.unsubscribe(r),e.signal&&e.signal.removeEventListener("abort",r)}cs.isFormData(i)&&cs.isStandardBrowserEnv()&&delete s["Content-Type"];var c=new XMLHttpRequest;if(e.auth){var l=e.auth.username||"",u=e.auth.password?unescape(encodeURIComponent(e.auth.password)):"";s.Authorization="Basic "+btoa(l+":"+u)}var d=ws(e.baseURL,e.url);function h(){if(c){var r,i,s,l,u,d="getAllResponseHeaders"in c?(r=c.getAllResponseHeaders(),u={},r?(cs.forEach(r.split("\n"),(function(e){if(l=e.indexOf(":"),i=cs.trim(e.substr(0,l)).toLowerCase(),s=cs.trim(e.substr(l+1)),i){if(u[i]&&Is.indexOf(i)>=0)return;u[i]="set-cookie"===i?(u[i]?u[i]:[]).concat([s]):u[i]?u[i]+", "+s:s}})),u):u):null;!function(e,t,n){var r=n.config.validateStatus;n.status&&r&&!r(n.status)?t(new vs("Request failed with status code "+n.status,[vs.ERR_BAD_REQUEST,vs.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n)):e(n)}((function(e){t(e),a()}),(function(e){n(e),a()}),{data:o&&"text"!==o&&"json"!==o?c.response:c.responseText,status:c.status,statusText:c.statusText,headers:d,config:e,request:c}),c=null}}if(c.open(e.method.toUpperCase(),us(d,e.params,e.paramsSerializer),!0),c.timeout=e.timeout,"onloadend"in c?c.onloadend=h:c.onreadystatechange=function(){c&&4===c.readyState&&(0!==c.status||c.responseURL&&0===c.responseURL.indexOf("file:"))&&setTimeout(h)},c.onabort=function(){c&&(n(new vs("Request aborted",vs.ECONNABORTED,e,c)),c=null)},c.onerror=function(){n(new vs("Network Error",vs.ERR_NETWORK,e,c,c)),c=null},c.ontimeout=function(){var t=e.timeout?"timeout of "+e.timeout+"ms exceeded":"timeout exceeded",r=e.transitional||ys;e.timeoutErrorMessage&&(t=e.timeoutErrorMessage),n(new vs(t,r.clarifyTimeoutError?vs.ETIMEDOUT:vs.ECONNABORTED,e,c)),c=null},cs.isStandardBrowserEnv()){var f=(e.withCredentials||Es(d))&&e.xsrfCookieName?_s.read(e.xsrfCookieName):void 0;f&&(s[e.xsrfHeaderName]=f)}"setRequestHeader"in c&&cs.forEach(s,(function(e,t){void 0===i&&"content-type"===t.toLowerCase()?delete s[t]:c.setRequestHeader(t,e)})),cs.isUndefined(e.withCredentials)||(c.withCredentials=!!e.withCredentials),o&&"json"!==o&&(c.responseType=e.responseType),"function"==typeof e.onDownloadProgress&&c.addEventListener("progress",e.onDownloadProgress),"function"==typeof e.onUploadProgress&&c.upload&&c.upload.addEventListener("progress",e.onUploadProgress),(e.cancelToken||e.signal)&&(r=function(e){c&&(n(!e||e&&e.type?new ks:e),c.abort(),c=null)},e.cancelToken&&e.cancelToken.subscribe(r),e.signal&&(e.signal.aborted?r():e.signal.addEventListener("abort",r))),i||(i=null);var p=function(e){var t=/^([-+\w]{1,25})(:?\/\/|:)/.exec(e);return t&&t[1]||""}(d);p&&-1===["http","https","file"].indexOf(p)?n(new vs("Unsupported protocol "+p+":",vs.ERR_BAD_REQUEST,e)):c.send(i)}))},Os={"Content-Type":"application/x-www-form-urlencoded"};function Rs(e,t){!cs.isUndefined(e)&&cs.isUndefined(e["Content-Type"])&&(e["Content-Type"]=t)}var Cs,$s={transitional:ys,adapter:(("undefined"!=typeof XMLHttpRequest||"undefined"!=typeof process&&"[object process]"===Object.prototype.toString.call(process))&&(Cs=Ss),Cs),transformRequest:[function(e,t){if(fs(t,"Accept"),fs(t,"Content-Type"),cs.isFormData(e)||cs.isArrayBuffer(e)||cs.isBuffer(e)||cs.isStream(e)||cs.isFile(e)||cs.isBlob(e))return e;if(cs.isArrayBufferView(e))return e.buffer;if(cs.isURLSearchParams(e))return Rs(t,"application/x-www-form-urlencoded;charset=utf-8"),e.toString();var n,r=cs.isObject(e),i=t&&t["Content-Type"];if((n=cs.isFileList(e))||r&&"multipart/form-data"===i){var s=this.env&&this.env.FormData;return bs(n?{"files[]":e}:e,s&&new s)}return r||"application/json"===i?(Rs(t,"application/json"),function(e,t,n){if(cs.isString(e))try{return(t||JSON.parse)(e),cs.trim(e)}catch(e){if("SyntaxError"!==e.name)throw e}return(n||JSON.stringify)(e)}(e)):e}],transformResponse:[function(e){var t=this.transitional||$s.transitional,n=t&&t.silentJSONParsing,r=t&&t.forcedJSONParsing,i=!n&&"json"===this.responseType;if(i||r&&cs.isString(e)&&e.length)try{return JSON.parse(e)}catch(e){if(i){if("SyntaxError"===e.name)throw vs.from(e,vs.ERR_BAD_RESPONSE,this,null,this.response);throw e}}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:null},validateStatus:function(e){return e>=200&&e<300},headers:{common:{Accept:"application/json, text/plain, */*"}}};cs.forEach(["delete","get","head"],(function(e){$s.headers[e]={}})),cs.forEach(["post","put","patch"],(function(e){$s.headers[e]=cs.merge(Os)}));var As=$s,Ns=function(e,t,n){var r=this||As;return cs.forEach(n,(function(n){e=n.call(r,e,t)})),e},Ps=function(e){return!(!e||!e.__CANCEL__)};function Ls(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new ks}var xs=function(e){return Ls(e),e.headers=e.headers||{},e.data=Ns.call(e,e.data,e.headers,e.transformRequest),e.headers=cs.merge(e.headers.common||{},e.headers[e.method]||{},e.headers),cs.forEach(["delete","get","head","post","put","patch","common"],(function(t){delete e.headers[t]})),(e.adapter||As.adapter)(e).then((function(t){return Ls(e),t.data=Ns.call(e,t.data,t.headers,e.transformResponse),t}),(function(t){return Ps(t)||(Ls(e),t&&t.response&&(t.response.data=Ns.call(e,t.response.data,t.response.headers,e.transformResponse))),Promise.reject(t)}))},Ds=function(e,t){t=t||{};var n={};function r(e,t){return cs.isPlainObject(e)&&cs.isPlainObject(t)?cs.merge(e,t):cs.isPlainObject(t)?cs.merge({},t):cs.isArray(t)?t.slice():t}function i(n){return cs.isUndefined(t[n])?cs.isUndefined(e[n])?void 0:r(void 0,e[n]):r(e[n],t[n])}function s(e){if(!cs.isUndefined(t[e]))return r(void 0,t[e])}function o(n){return cs.isUndefined(t[n])?cs.isUndefined(e[n])?void 0:r(void 0,e[n]):r(void 0,t[n])}function a(n){return n in t?r(e[n],t[n]):n in e?r(void 0,e[n]):void 0}var c={url:s,method:s,data:s,baseURL:o,transformRequest:o,transformResponse:o,paramsSerializer:o,timeout:o,timeoutMessage:o,withCredentials:o,adapter:o,responseType:o,xsrfCookieName:o,xsrfHeaderName:o,onUploadProgress:o,onDownloadProgress:o,decompress:o,maxContentLength:o,maxBodyLength:o,beforeRedirect:o,transport:o,httpAgent:o,httpsAgent:o,cancelToken:o,socketPath:o,responseEncoding:o,validateStatus:a};return cs.forEach(Object.keys(e).concat(Object.keys(t)),(function(e){var t=c[e]||i,r=t(e);cs.isUndefined(r)&&t!==a||(n[e]=r)})),n},Ms="0.27.2",Us=Ms,js={};["object","boolean","number","function","string","symbol"].forEach((function(e,t){js[e]=function(n){return typeof n===e||"a"+(t<1?"n ":" ")+e}}));var Bs={};js.transitional=function(e,t,n){function r(e,t){return"[Axios v"+Us+"] Transitional option '"+e+"'"+t+(n?". "+n:"")}return function(n,i,s){if(!1===e)throw new vs(r(i," has been removed"+(t?" in "+t:"")),vs.ERR_DEPRECATED);return t&&!Bs[i]&&(Bs[i]=!0,console.warn(r(i," has been deprecated since v"+t+" and will be removed in the near future"))),!e||e(n,i,s)}};var Fs={assertOptions:function(e,t,n){if("object"!=typeof e)throw new vs("options must be an object",vs.ERR_BAD_OPTION_VALUE);for(var r=Object.keys(e),i=r.length;i-- >0;){var s=r[i],o=t[s];if(o){var a=e[s],c=void 0===a||o(a,s,e);if(!0!==c)throw new vs("option "+s+" must be "+c,vs.ERR_BAD_OPTION_VALUE)}else if(!0!==n)throw new vs("Unknown option "+s,vs.ERR_BAD_OPTION)}},validators:js},Hs=Fs.validators;function zs(e){this.defaults=e,this.interceptors={request:new hs,response:new hs}}zs.prototype.request=function(e,t){"string"==typeof e?(t=t||{}).url=e:t=e||{},(t=Ds(this.defaults,t)).method?t.method=t.method.toLowerCase():this.defaults.method?t.method=this.defaults.method.toLowerCase():t.method="get";var n=t.transitional;void 0!==n&&Fs.assertOptions(n,{silentJSONParsing:Hs.transitional(Hs.boolean),forcedJSONParsing:Hs.transitional(Hs.boolean),clarifyTimeoutError:Hs.transitional(Hs.boolean)},!1);var r=[],i=!0;this.interceptors.request.forEach((function(e){"function"==typeof e.runWhen&&!1===e.runWhen(t)||(i=i&&e.synchronous,r.unshift(e.fulfilled,e.rejected))}));var s,o=[];if(this.interceptors.response.forEach((function(e){o.push(e.fulfilled,e.rejected)})),!i){var a=[xs,void 0];for(Array.prototype.unshift.apply(a,r),a=a.concat(o),s=Promise.resolve(t);a.length;)s=s.then(a.shift(),a.shift());return s}for(var c=t;r.length;){var l=r.shift(),u=r.shift();try{c=l(c)}catch(e){u(e);break}}try{s=xs(c)}catch(e){return Promise.reject(e)}for(;o.length;)s=s.then(o.shift(),o.shift());return s},zs.prototype.getUri=function(e){e=Ds(this.defaults,e);var t=ws(e.baseURL,e.url);return us(t,e.params,e.paramsSerializer)},cs.forEach(["delete","get","head","options"],(function(e){zs.prototype[e]=function(t,n){return this.request(Ds(n||{},{method:e,url:t,data:(n||{}).data}))}})),cs.forEach(["post","put","patch"],(function(e){function t(t){return function(n,r,i){return this.request(Ds(i||{},{method:e,headers:t?{"Content-Type":"multipart/form-data"}:{},url:n,data:r}))}}zs.prototype[e]=t(),zs.prototype[e+"Form"]=t(!0)}));var Vs=zs;function qs(e){if("function"!=typeof e)throw new TypeError("executor must be a function.");var t;this.promise=new Promise((function(e){t=e}));var n=this;this.promise.then((function(e){if(n._listeners){var t,r=n._listeners.length;for(t=0;t<r;t++)n._listeners[t](e);n._listeners=null}})),this.promise.then=function(e){var t,r=new Promise((function(e){n.subscribe(e),t=e})).then(e);return r.cancel=function(){n.unsubscribe(t)},r},e((function(e){n.reason||(n.reason=new ks(e),t(n.reason))}))}qs.prototype.throwIfRequested=function(){if(this.reason)throw this.reason},qs.prototype.subscribe=function(e){this.reason?e(this.reason):this._listeners?this._listeners.push(e):this._listeners=[e]},qs.prototype.unsubscribe=function(e){if(this._listeners){var t=this._listeners.indexOf(e);-1!==t&&this._listeners.splice(t,1)}},qs.source=function(){var e;return{token:new qs((function(t){e=t})),cancel:e}};var Ws=qs;var Ks=function e(t){var n=new Vs(t),r=Vi(Vs.prototype.request,n);return cs.extend(r,Vs.prototype,n),cs.extend(r,n),r.create=function(n){return e(Ds(t,n))},r}(As);Ks.Axios=Vs,Ks.CanceledError=ks,Ks.CancelToken=Ws,Ks.isCancel=Ps,Ks.VERSION=Ms,Ks.toFormData=bs,Ks.AxiosError=vs,Ks.Cancel=Ks.CanceledError,Ks.all=function(e){return Promise.all(e)},Ks.spread=function(e){return function(t){return e.apply(null,t)}},Ks.isAxiosError=function(e){return cs.isObject(e)&&!0===e.isAxiosError};var Gs=Ks,Js=Ks;Gs.default=Js;var Xs=Gs;function Qs(e,t,n){const r=e.slice();return r[7]=t[n].comentario,r[8]=t[n].dinero,r[9]=t[n].id,r}function Ys(e,t,n){const r=e.slice();return r[7]=t[n].comentario,r[8]=t[n].dinero,r[9]=t[n].id,r}function Zs(e){let t,n,r=e[7]+"";return{c(){t=T("p"),n=k(r)},m(e,r){w(e,t,r),_(t,n)},p(e,t){2&t&&r!==(r=e[7]+"")&&N(n,r)},d(e){e&&I(t)}}}function eo(t){let n;return{c(){n=T("p"),n.textContent="otro"},m(e,t){w(e,n,t)},p:e,d(e){e&&I(n)}}}function to(e){let t,n,r,i,s,o,a,c,l,u,d=e[8]+"";function h(e,t){return""==e[7]?eo:Zs}let f=h(e),p=f(e);function m(){return e[5](e[9])}return{c(){t=T("div"),n=T("i"),r=S(),p.c(),i=S(),s=T("p"),o=k("$"),a=k(d),c=S(),C(n,"class","bx bx-dollar-circle ingresos-icon svelte-y9scge"),C(t,"class","item svelte-y9scge")},m(e,d){w(e,t,d),_(t,n),_(t,r),p.m(t,null),_(t,i),_(t,s),_(s,o),_(s,a),_(t,c),l||(u=R(t,"click",m),l=!0)},p(n,r){f===(f=h(e=n))&&p?p.p(e,r):(p.d(1),p=f(e),p&&(p.c(),p.m(t,i))),2&r&&d!==(d=e[8]+"")&&N(a,d)},d(e){e&&I(t),p.d(),l=!1,u()}}}function no(e){let t,n,r=e[7]+"";return{c(){t=T("p"),n=k(r)},m(e,r){w(e,t,r),_(t,n)},p(e,t){8&t&&r!==(r=e[7]+"")&&N(n,r)},d(e){e&&I(t)}}}function ro(t){let n;return{c(){n=T("p"),n.textContent="otro"},m(e,t){w(e,n,t)},p:e,d(e){e&&I(n)}}}function io(e){let t,n,r,i,s,o,a,c,l,u,d=e[8]+"";function h(e,t){return""==e[7]?ro:no}let f=h(e),p=f(e);function m(){return e[6](e[9])}return{c(){t=T("div"),n=T("i"),r=S(),p.c(),i=S(),s=T("p"),o=k("$"),a=k(d),c=S(),C(n,"class","bx bx-dollar-circle gastos-icon svelte-y9scge"),C(t,"class","item svelte-y9scge")},m(e,d){w(e,t,d),_(t,n),_(t,r),p.m(t,null),_(t,i),_(t,s),_(s,o),_(s,a),_(t,c),l||(u=R(t,"click",m),l=!0)},p(n,r){f===(f=h(e=n))&&p?p.p(e,r):(p.d(1),p=f(e),p&&(p.c(),p.m(t,i))),8&r&&d!==(d=e[8]+"")&&N(a,d)},d(e){e&&I(t),p.d(),l=!1,u()}}}function so(t){let n,r,i,s,o,a,c,l,u,d,h,f,p,m,g=t[1],v=[];for(let e=0;e<g.length;e+=1)v[e]=to(Ys(t,g,e));let y=t[3],b=[];for(let e=0;e<y.length;e+=1)b[e]=io(Qs(t,y,e));return{c(){n=T("div"),r=T("div"),i=T("h1"),s=k("$ "),o=k(t[0]),a=S(),c=T("div");for(let e=0;e<v.length;e+=1)v[e].c();l=S(),u=T("div"),d=T("h1"),h=k("$ "),f=k(t[2]),p=S(),m=T("div");for(let e=0;e<b.length;e+=1)b[e].c();C(i,"class","svelte-y9scge"),C(c,"class","cont-list svelte-y9scge"),C(r,"class","ingresos_items"),C(d,"class","svelte-y9scge"),C(m,"class","cont-list svelte-y9scge"),C(u,"class","gastos_items dysplay-none"),C(n,"class","lista svelte-y9scge")},m(e,t){w(e,n,t),_(n,r),_(r,i),_(i,s),_(i,o),_(r,a),_(r,c);for(let e=0;e<v.length;e+=1)v[e].m(c,null);_(n,l),_(n,u),_(u,d),_(d,h),_(d,f),_(u,p),_(u,m);for(let e=0;e<b.length;e+=1)b[e].m(m,null)},p(e,[t]){if(1&t&&N(o,e[0]),18&t){let n;for(g=e[1],n=0;n<g.length;n+=1){const r=Ys(e,g,n);v[n]?v[n].p(r,t):(v[n]=to(r),v[n].c(),v[n].m(c,null))}for(;n<v.length;n+=1)v[n].d(1);v.length=g.length}if(4&t&&N(f,e[2]),24&t){let n;for(y=e[3],n=0;n<y.length;n+=1){const r=Qs(e,y,n);b[n]?b[n].p(r,t):(b[n]=io(r),b[n].c(),b[n].m(m,null))}for(;n<b.length;n+=1)b[n].d(1);b.length=y.length}},i:e,o:e,d(e){e&&I(n),E(v,e),E(b,e)}}}function oo(e,t,n){let r,i,s,o;function a(e){console.log("press item "+e),Bi.set(e),ji.set(!0)}d(e,Mi,(e=>n(0,r=e))),d(e,xi,(e=>n(1,i=e))),d(e,Ui,(e=>n(2,s=e))),d(e,Di,(e=>n(3,o=e)));return[r,i,s,o,a,e=>a(e),e=>a(e)]}class ao extends ue{constructor(e){super(),le(this,e,oo,so,o,{})}}function co(t){let n,r,i;return{c(){n=T("div"),n.innerHTML='<img src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="logo google" class="svelte-o7ocl9"/> \n    <p class="svelte-o7ocl9">Google</p>',C(n,"class","btn-google svelte-o7ocl9")},m(e,s){w(e,n,s),r||(i=R(n,"click",t[0]),r=!0)},p:e,i:e,o:e,d(e){e&&I(n),r=!1,i()}}}function lo(e,t,n){let r,i,s;d(e,Pi,(e=>n(1,r=e))),d(e,$i,(e=>n(2,i=e))),d(e,Ci,(e=>n(3,s=e)));return[async()=>{try{const t=new ur,n=await Wr(Ri,t);b(Ci,s=n.user,s),b($i,i=!0,i);var e={nombre:n.user.displayName,mail:n.user.email,foto:n.user.photoURL,uid:n.user.uid};ye("/",{replace:!0})}catch(e){console.log(e)}Xs({method:"POST",url:r+"/user/",data:e}).then((t=>{localStorage.setItem("uid",e.uid),setTimeout((()=>{location.reload()}),1e3)}))}]}class uo extends ue{constructor(e){super(),le(this,e,lo,co,o,{})}}function ho(t){let n,r,i,s,o,a;return o=new uo({}),{c(){n=T("div"),r=T("div"),i=T("h1"),i.textContent="Ingresa con tu cuenta",s=S(),se(o.$$.fragment),C(r,"class","ingresa-google svelte-f0fo3d"),C(n,"class","full svelte-f0fo3d")},m(e,t){w(e,n,t),_(n,r),_(r,i),_(r,s),oe(o,r,null),a=!0},p:e,i(e){a||(te(o.$$.fragment,e),a=!0)},o(e){ne(o.$$.fragment,e),a=!1},d(e){e&&I(n),ae(o)}}}function fo(e){let t,n,r,s,o,a,c,l,u,d,h,f,p,m,g,v,y,b,E,$,A,P,L,x,D;y=new ao({});let M=e[1]&&po(e);return{c(){t=T("h1"),n=T("i"),r=k("\n            Total $"),s=k(e[2]),o=S(),a=T("p"),c=k("("),l=k(e[0]),u=k(")"),d=S(),h=T("div"),f=T("button"),f.textContent="INGRESOS",p=S(),m=T("button"),m.textContent="GASTOS",g=S(),v=T("div"),se(y.$$.fragment),b=S(),E=T("div"),$=T("button"),$.textContent="Ver todo",A=S(),M&&M.c(),P=O(),C(n,"class","bx bxs-dollar-circle"),C(t,"class","text-center mt"),C(a,"class","text-center text-small"),C(f,"id","btningresos"),C(f,"class","btn btn-active"),C(m,"id","btngastos"),C(m,"class","btn"),C(h,"class","cont-btn"),C($,"class","btn btn-ver svelte-f0fo3d"),C(E,"class","btn-center svelte-f0fo3d"),C(v,"class","")},m(i,I){w(i,t,I),_(t,n),_(t,r),_(t,s),w(i,o,I),w(i,a,I),_(a,c),_(a,l),_(a,u),w(i,d,I),w(i,h,I),_(h,f),_(h,p),_(h,m),w(i,g,I),w(i,v,I),oe(y,v,null),_(v,b),_(v,E),_(E,$),w(i,A,I),M&&M.m(i,I),w(i,P,I),L=!0,x||(D=[R(f,"click",e[6]),R(m,"click",e[5]),R($,"click",e[8])],x=!0)},p(e,t){(!L||4&t)&&N(s,e[2]),(!L||1&t)&&N(l,e[0]),e[1]?M?M.p(e,t):(M=po(e),M.c(),M.m(P.parentNode,P)):M&&(M.d(1),M=null)},i(e){L||(te(y.$$.fragment,e),L=!0)},o(e){ne(y.$$.fragment,e),L=!1},d(e){e&&I(t),e&&I(o),e&&I(a),e&&I(d),e&&I(h),e&&I(g),e&&I(v),ae(y),e&&I(A),M&&M.d(e),e&&I(P),x=!1,i(D)}}}function po(e){let t,n,r,i,s,o=(e[3].length>0||e[4].length>0)&&mo(e);return{c(){t=T("button"),t.innerHTML='<i class="bx bx-plus-circle"></i>',n=S(),o&&o.c(),r=O(),C(t,"class","add-btn")},m(e,a){w(e,t,a),w(e,n,a),o&&o.m(e,a),w(e,r,a),i||(s=R(t,"click",vo),i=!0)},p(e,t){e[3].length>0||e[4].length>0?o?o.p(e,t):(o=mo(e),o.c(),o.m(r.parentNode,r)):o&&(o.d(1),o=null)},d(e){e&&I(t),e&&I(n),o&&o.d(e),e&&I(r),i=!1,s()}}}function mo(t){let n,r,i;return{c(){n=T("button"),n.textContent="Terminar seguimiento",C(n,"class","end-btn")},m(e,s){w(e,n,s),r||(i=R(n,"click",t[7]),r=!0)},p:e,d(e){e&&I(n),r=!1,i()}}}function go(e){let t,n,r,i;const s=[fo,ho],o=[];function a(e,t){return e[1]?0:1}return n=a(e),r=o[n]=s[n](e),{c(){t=T("div"),r.c()},m(e,r){w(e,t,r),o[n].m(t,null),i=!0},p(e,[i]){let c=n;n=a(e),n===c?o[n].p(e,i):(Z(),ne(o[c],1,1,(()=>{o[c]=null})),ee(),r=o[n],r?r.p(e,i):(r=o[n]=s[n](e),r.c()),te(r,1),r.m(t,null))},i(e){i||(te(r),i=!0)},o(e){ne(r),i=!1},d(e){e&&I(t),o[n].d()}}}function vo(){document.querySelector(".cont-modal").classList.toggle("active")}function yo(e,t,n){let r,i,s,o,a,c;return d(e,Ni,(e=>n(0,r=e))),d(e,Pi,(e=>n(9,i=e))),d(e,$i,(e=>n(1,s=e))),d(e,Li,(e=>n(2,o=e))),d(e,Di,(e=>n(3,a=e))),d(e,xi,(e=>n(4,c=e))),D((()=>{s||ye("/",{replace:!0});let e=localStorage.getItem("uid"),t=i+"/dinero/"+e+"/"+r;Xs.get(t).then((e=>{var t=e.data;Li.set(t.total),Di.set(e.data.gastos),xi.set(e.data.ingresos),Mi.set(e.data.ingreso_total),Ui.set(e.data.gasto_total)}))})),[r,s,o,a,c,function(){const e=document.querySelector("#btngastos"),t=document.querySelector("#btningresos");e.classList.add("btn-active"),t.classList.remove("btn-active");const n=document.querySelector(".ingresos_items");document.querySelector(".gastos_items").classList.remove("dysplay-none"),n.classList.add("dysplay-none"),Ai.set("gastos")},function(){const e=document.querySelector("#btngastos");document.querySelector("#btningresos").classList.add("btn-active"),e.classList.remove("btn-active"),Ai.set("ingresos");const t=document.querySelector(".ingresos_items");document.querySelector(".gastos_items").classList.add("dysplay-none"),t.classList.remove("dysplay-none")},function(){Fi.set(!0)},function(){console.log("ver mas "),ye("/test",{replace:!0})}]}class bo extends ue{constructor(e){super(),le(this,e,yo,go,o,{})}}function _o(e,t,n){const r=e.slice();return r[8]=t[n].id,r[10]=n,r}function wo(e){let t,n=e[1],r=[];for(let t=0;t<n.length;t+=1)r[t]=Io(_o(e,n,t));return{c(){t=T("div");for(let e=0;e<r.length;e+=1)r[e].c();C(t,"class","cont-items svelte-195nzm6")},m(e,n){w(e,t,n);for(let e=0;e<r.length;e+=1)r[e].m(t,null)},p(e,i){if(6&i){let s;for(n=e[1],s=0;s<n.length;s+=1){const o=_o(e,n,s);r[s]?r[s].p(o,i):(r[s]=Io(o),r[s].c(),r[s].m(t,null))}for(;s<r.length;s+=1)r[s].d(1);r.length=n.length}},d(e){e&&I(t),E(r,e)}}}function Io(e){let t,n,r,i,s,o,a,c,l,u,d,h,f,p,m,g,v,y,b=e[1][e[10]].ingresoTotal+"",E=e[1][e[10]].gastoTotal+"",O=e[1][e[10]].nombre+"";function $(){return e[3](e[10])}return{c(){t=T("div"),n=T("div"),r=T("p"),i=k("Ingresos: $"),s=k(b),o=S(),a=T("p"),c=k("Gastos: $"),l=k(E),u=S(),d=T("p"),h=k("Fecha de cierre "),f=k(O),p=S(),m=T("button"),m.innerHTML='<i class="bx bxs-trash-alt"></i>',g=S(),C(n,"class","svelte-195nzm6"),C(d,"class","fecha svelte-195nzm6"),C(m,"class","svelte-195nzm6"),C(t,"class","historial-item svelte-195nzm6")},m(e,b){w(e,t,b),_(t,n),_(n,r),_(r,i),_(r,s),_(n,o),_(n,a),_(a,c),_(a,l),_(t,u),_(t,d),_(d,h),_(d,f),_(t,p),_(t,m),_(t,g),v||(y=R(m,"click",$),v=!0)},p(t,n){e=t,2&n&&b!==(b=e[1][e[10]].ingresoTotal+"")&&N(s,b),2&n&&E!==(E=e[1][e[10]].gastoTotal+"")&&N(l,E),2&n&&O!==(O=e[1][e[10]].nombre+"")&&N(f,O)},d(e){e&&I(t),v=!1,y()}}}function Eo(t){let n,r=t[0]&&wo(t);return{c(){n=T("div"),r&&r.c(),C(n,"class","cont-historial svelte-195nzm6")},m(e,t){w(e,n,t),r&&r.m(n,null)},p(e,[t]){e[0]?r?r.p(e,t):(r=wo(e),r.c(),r.m(n,null)):r&&(r.d(1),r=null)},i:e,o:e,d(e){e&&I(n),r&&r.d()}}}function To(e,t,n){let r,i,s;var o;d(e,$i,(e=>n(0,r=e))),d(e,Pi,(e=>n(5,i=e))),d(e,Hi,(e=>n(1,s=e)));let a=localStorage.getItem("uid"),c=i+"/historial/"+a;function l(e){var t={uid:a,itemId:e};Xs.delete(c,{data:t}).then((e=>{o=e.data.data,Hi.set(o)}))}console.log(c),D((()=>{r||ye("/historial",{replace:!0}),Xs.get(c).then((e=>{o=e.data.data,Hi.set(o)}))}));return[r,s,l,e=>l(s[e].id)]}class ko extends ue{constructor(e){super(),le(this,e,To,Eo,o,{})}}function So(t){let n;return{c(){n=T("h1"),n.textContent="pura masacuata"},m(e,t){w(e,n,t)},i:e,o:e,d(e){e&&I(n)}}}function Oo(e){let t,n,r;return n=new ao({}),{c(){t=T("div"),se(n.$$.fragment),C(t,"class","")},m(e,i){w(e,t,i),oe(n,t,null),r=!0},i(e){r||(te(n.$$.fragment,e),r=!0)},o(e){ne(n.$$.fragment,e),r=!1},d(e){e&&I(t),ae(n)}}}function Ro(e){let t,n,r,i;const s=[Oo,So],o=[];function a(e,t){return e[0]?0:1}return n=a(e),r=o[n]=s[n](e),{c(){t=T("div"),r.c()},m(e,r){w(e,t,r),o[n].m(t,null),i=!0},p(e,[i]){let c=n;n=a(e),n!==c&&(Z(),ne(o[c],1,1,(()=>{o[c]=null})),ee(),r=o[n],r||(r=o[n]=s[n](e),r.c()),te(r,1),r.m(t,null))},i(e){i||(te(r),i=!0)},o(e){ne(r),i=!1},d(e){e&&I(t),o[n].d()}}}function Co(e,t,n){let r,i,s,o;return d(e,Ai,(e=>n(1,r=e))),d(e,Ni,(e=>n(2,i=e))),d(e,Pi,(e=>n(3,s=e))),d(e,$i,(e=>n(0,o=e))),D((()=>{o||ye("/",{replace:!0});let e=localStorage.getItem("uid"),t=s+"/dinero/"+e+"/"+i;if(Xs.get(t).then((e=>{var t=e.data;Li.set(t.total),Di.set(e.data.gastos),xi.set(e.data.ingresos),Mi.set(e.data.ingreso_total),Ui.set(e.data.gasto_total)})),"ingresos"==r){console.log("test ingresos");const e=document.querySelector(".ingresos_items");document.querySelector(".gastos_items").classList.add("dysplay-none"),e.classList.remove("dysplay-none")}else{console.log("test gatos");const e=document.querySelector(".ingresos_items");document.querySelector(".gastos_items").classList.remove("dysplay-none"),e.classList.add("dysplay-none")}})),[o]}class $o extends ue{constructor(e){super(),le(this,e,Co,Ro,o,{})}}function Ao(t){let n,r,i,s,o,a;return{c(){n=T("section"),r=T("h1"),r.textContent="Tracker",i=S(),s=T("button"),s.innerHTML='<i class="bx bx-menu-alt-right"></i>',C(s,"class","nav-btn"),C(n,"class","nav-bar")},m(e,t){w(e,n,t),_(n,r),_(n,i),_(n,s),o||(a=R(s,"click",No),o=!0)},p:e,i:e,o:e,d(e){e&&I(n),o=!1,a()}}}function No(){document.querySelector(".sidebar").classList.toggle("active")}class Po extends ue{constructor(e){super(),le(this,e,null,Ao,o,{})}}function Lo(t){let n,r,i,s;return{c(){n=T("img"),i=S(),s=T("h1"),s.textContent="Inicia sesión",l(n.src,r="https://imgs.search.brave.com/2SWSRD0B1BwKIwCa8TT4b3dAB62qYWx799kVx72zL0E/rs:fit:474:225:1/g:ce/aHR0cHM6Ly90c2Uz/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC42/d1hkMEg2N2l0NVlJ/OE0zNHZNNHBRSGFI/YSZwaWQ9QXBp")||C(n,"src","https://imgs.search.brave.com/2SWSRD0B1BwKIwCa8TT4b3dAB62qYWx799kVx72zL0E/rs:fit:474:225:1/g:ce/aHR0cHM6Ly90c2Uz/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC42/d1hkMEg2N2l0NVlJ/OE0zNHZNNHBRSGFI/YSZwaWQ9QXBp"),C(n,"alt","")},m(e,t){w(e,n,t),w(e,i,t),w(e,s,t)},p:e,d(e){e&&I(n),e&&I(i),e&&I(s)}}}function xo(e){let t,n,r,i,s,o=e[0].displayName+"";return{c(){t=T("img"),r=S(),i=T("h1"),s=k(o),l(t.src,n=e[0].photoURL)||C(t,"src",n),C(t,"alt","")},m(e,n){w(e,t,n),w(e,r,n),w(e,i,n),_(i,s)},p(e,r){1&r&&!l(t.src,n=e[0].photoURL)&&C(t,"src",n),1&r&&o!==(o=e[0].displayName+"")&&N(s,o)},d(e){e&&I(t),e&&I(r),e&&I(i)}}}function Do(t){let n,r,i,s,o;return r=new uo({}),{c(){n=T("div"),se(r.$$.fragment)},m(e,t){w(e,n,t),oe(r,n,null),i=!0,s||(o=R(n,"click",Ho),s=!0)},p:e,i(e){i||(te(r.$$.fragment,e),i=!0)},o(e){ne(r.$$.fragment,e),i=!1},d(e){e&&I(n),ae(r),s=!1,o()}}}function Mo(e){let t,n,r,s,o,a,c,l,u,d,h,f,p,m;return s=new Fe({props:{to:"/",$$slots:{default:[Uo]},$$scope:{ctx:e}}}),u=new Fe({props:{to:"/historial",$$slots:{default:[jo]},$$scope:{ctx:e}}}),{c(){t=T("li"),n=T("i"),r=S(),se(s.$$.fragment),o=S(),a=T("li"),c=T("i"),l=S(),se(u.$$.fragment),d=S(),h=T("li"),h.innerHTML='<i class="bx bx-log-out"></i>\n                    Cerrar sesión',C(n,"class","bx bx-home"),C(t,"class","sidebar-item"),C(c,"class","bx bx-calendar-alt"),C(a,"class","sidebar-item"),C(h,"class","sidebar-item")},m(i,g){w(i,t,g),_(t,n),_(t,r),oe(s,t,null),w(i,o,g),w(i,a,g),_(a,c),_(a,l),oe(u,a,null),w(i,d,g),w(i,h,g),f=!0,p||(m=[R(t,"click",Ho),R(a,"click",Ho),R(h,"click",Ho),R(h,"click",e[2])],p=!0)},p(e,t){const n={};8&t&&(n.$$scope={dirty:t,ctx:e}),s.$set(n);const r={};8&t&&(r.$$scope={dirty:t,ctx:e}),u.$set(r)},i(e){f||(te(s.$$.fragment,e),te(u.$$.fragment,e),f=!0)},o(e){ne(s.$$.fragment,e),ne(u.$$.fragment,e),f=!1},d(e){e&&I(t),ae(s),e&&I(o),e&&I(a),ae(u),e&&I(d),e&&I(h),p=!1,i(m)}}}function Uo(e){let t;return{c(){t=k("Inicio")},m(e,n){w(e,t,n)},d(e){e&&I(t)}}}function jo(e){let t;return{c(){t=k("Historial")},m(e,n){w(e,t,n)},d(e){e&&I(t)}}}function Bo(e){let t,n,r,i;const s=[Mo,Do],o=[];function a(e,t){return e[1]?0:1}return n=a(e),r=o[n]=s[n](e),{c(){t=T("nav"),r.c()},m(e,r){w(e,t,r),o[n].m(t,null),i=!0},p(e,i){let c=n;n=a(e),n===c?o[n].p(e,i):(Z(),ne(o[c],1,1,(()=>{o[c]=null})),ee(),r=o[n],r?r.p(e,i):(r=o[n]=s[n](e),r.c()),te(r,1),r.m(t,null))},i(e){i||(te(r),i=!0)},o(e){ne(r),i=!1},d(e){e&&I(t),o[n].d()}}}function Fo(e){let t,n,r,i;function s(e,t){return e[1]?xo:Lo}let o=s(e),a=o(e);return r=new $e({props:{$$slots:{default:[Bo]},$$scope:{ctx:e}}}),{c(){t=T("section"),a.c(),n=S(),se(r.$$.fragment),C(t,"class","sidebar active")},m(e,s){w(e,t,s),a.m(t,null),_(t,n),oe(r,t,null),i=!0},p(e,[i]){o===(o=s(e))&&a?a.p(e,i):(a.d(1),a=o(e),a&&(a.c(),a.m(t,n)));const c={};10&i&&(c.$$scope={dirty:i,ctx:e}),r.$set(c)},i(e){i||(te(r.$$.fragment,e),i=!0)},o(e){ne(r.$$.fragment,e),i=!1},d(e){e&&I(t),a.d(),ae(r)}}}function Ho(){document.querySelector(".sidebar").classList.toggle("active")}function zo(e,t,n){let r,i;d(e,Ci,(e=>n(0,r=e))),d(e,$i,(e=>n(1,i=e)));return[r,i,()=>{try{!function(e){tt(e).signOut()}(Ri),b($i,i=!1,i),b(Ci,r={},r),localStorage.clear(),ye("/",{replace:!0})}catch(e){console.log(e)}}]}class Vo extends ue{constructor(e){super(),le(this,e,zo,Fo,o,{})}}function qo(e){let t,n,r,s,o,a,c,l,u,d,h,f,p,m,g,v,y,b,E,k,O;return{c(){t=T("div"),n=T("input"),r=S(),s=T("label"),s.innerHTML='<i class="bx bx-bus"></i> \n                            <p>Trasporte</p>',o=S(),a=T("div"),c=T("input"),l=S(),u=T("label"),u.innerHTML='<i class="bx bxs-heart"></i> \n                            <p>Salud</p>',d=S(),h=T("div"),f=T("input"),p=S(),m=T("label"),m.innerHTML='<i class="bx bx-bowl-hot"></i> \n                            <p>Comida</p>',g=S(),v=T("div"),y=T("input"),b=S(),E=T("label"),E.innerHTML='<i class="bx bx-question-mark"></i> \n                            <p>Otro</p>',C(n,"id","trasporte"),n.__value="trasporte",n.value=n.__value,C(n,"type","radio"),e[5][0].push(n),C(s,"for","trasporte"),C(c,"id","salud"),c.__value="salud",c.value=c.__value,C(c,"type","radio"),e[5][0].push(c),C(u,"for","salud"),C(f,"id","comida"),f.__value="comida",f.value=f.__value,C(f,"type","radio"),e[5][0].push(f),C(m,"for","comida"),C(y,"id","otro"),y.__value="otro",y.value=y.__value,C(y,"type","radio"),e[5][0].push(y),C(E,"for","otro")},m(i,I){w(i,t,I),_(t,n),n.checked=n.__value===e[0].categoria,_(t,r),_(t,s),w(i,o,I),w(i,a,I),_(a,c),c.checked=c.__value===e[0].categoria,_(a,l),_(a,u),w(i,d,I),w(i,h,I),_(h,f),f.checked=f.__value===e[0].categoria,_(h,p),_(h,m),w(i,g,I),w(i,v,I),_(v,y),y.checked=y.__value===e[0].categoria,_(v,b),_(v,E),k||(O=[R(n,"change",e[9]),R(c,"change",e[10]),R(f,"change",e[11]),R(y,"change",e[12])],k=!0)},p(e,t){1&t&&(n.checked=n.__value===e[0].categoria),1&t&&(c.checked=c.__value===e[0].categoria),1&t&&(f.checked=f.__value===e[0].categoria),1&t&&(y.checked=y.__value===e[0].categoria)},d(r){r&&I(t),e[5][0].splice(e[5][0].indexOf(n),1),r&&I(o),r&&I(a),e[5][0].splice(e[5][0].indexOf(c),1),r&&I(d),r&&I(h),e[5][0].splice(e[5][0].indexOf(f),1),r&&I(g),r&&I(v),e[5][0].splice(e[5][0].indexOf(y),1),k=!1,i(O)}}}function Wo(e){let t,n,r,s,o,a,c,l,u,d,h,f,p,m,g,v,y,b,E,k,O;return{c(){t=T("div"),n=T("input"),r=S(),s=T("label"),s.innerHTML='<i class="bx bxs-gift"></i> \n                            <p>Regalo</p>',o=S(),a=T("div"),c=T("input"),l=S(),u=T("label"),u.innerHTML='<i class="bx bx-money-withdraw"></i> \n                            <p>Salario</p>',d=S(),h=T("div"),f=T("input"),p=S(),m=T("label"),m.innerHTML='<i class="bx bxs-bank"></i> \n                            <p>Interes</p>',g=S(),v=T("div"),y=T("input"),b=S(),E=T("label"),E.innerHTML='<i class="bx bx-question-mark"></i> \n                            <p>Otro</p>',C(n,"id","regalo"),n.__value="regalo",n.value=n.__value,C(n,"type","radio"),e[5][0].push(n),C(s,"for","regalo"),C(c,"id","salario"),c.__value="salario",c.value=c.__value,C(c,"type","radio"),e[5][0].push(c),C(u,"for","salario"),C(f,"id","interes"),f.__value="interes",f.value=f.__value,C(f,"type","radio"),e[5][0].push(f),C(m,"for","interes"),C(y,"id","otro"),y.__value="otro",y.value=y.__value,C(y,"type","radio"),e[5][0].push(y),C(E,"for","otro")},m(i,I){w(i,t,I),_(t,n),n.checked=n.__value===e[0].categoria,_(t,r),_(t,s),w(i,o,I),w(i,a,I),_(a,c),c.checked=c.__value===e[0].categoria,_(a,l),_(a,u),w(i,d,I),w(i,h,I),_(h,f),f.checked=f.__value===e[0].categoria,_(h,p),_(h,m),w(i,g,I),w(i,v,I),_(v,y),y.checked=y.__value===e[0].categoria,_(v,b),_(v,E),k||(O=[R(n,"change",e[4]),R(c,"change",e[6]),R(f,"change",e[7]),R(y,"change",e[8])],k=!0)},p(e,t){1&t&&(n.checked=n.__value===e[0].categoria),1&t&&(c.checked=c.__value===e[0].categoria),1&t&&(f.checked=f.__value===e[0].categoria),1&t&&(y.checked=y.__value===e[0].categoria)},d(r){r&&I(t),e[5][0].splice(e[5][0].indexOf(n),1),r&&I(o),r&&I(a),e[5][0].splice(e[5][0].indexOf(c),1),r&&I(d),r&&I(h),e[5][0].splice(e[5][0].indexOf(f),1),r&&I(g),r&&I(v),e[5][0].splice(e[5][0].indexOf(y),1),k=!1,i(O)}}}function Ko(t){let n,r,s,o,a,c,l,u,d,h,f,p,m,g,v,y,b,E,k,O,$,N,L,x,D,M,U,j,B,F;function H(e,t){return"ingresos"==e[1]?Wo:qo}let z=H(t),V=z(t);return{c(){n=T("div"),r=T("div"),s=T("div"),o=T("button"),o.innerHTML='<i class="bx bx-x"></i>',a=S(),c=T("div"),l=T("div"),u=T("div"),d=T("i"),h=S(),f=T("input"),p=S(),m=T("div"),g=T("p"),g.textContent="Cuenta:",v=S(),y=T("select"),b=T("option"),b.textContent="Principal",E=S(),k=T("h3"),k.textContent="Categoria",O=S(),$=T("div"),V.c(),N=S(),L=T("div"),x=T("input"),D=S(),M=T("div"),U=T("button"),U.innerHTML='<span class="text">Agregar</span> \n                    <i class="bx bx-check button-icon"></i>',C(o,"class","close-modal"),C(s,"class","cont-close"),C(d,"class","bx bx-dollar"),C(f,"type","number"),C(f,"placeholder","00"),C(u,"class","shadow just svelte-1lul8v5"),C(l,"class","cont-input "),b.__value="",b.value=b.__value,C(y,"name",""),C(y,"id",""),C(m,"class","cont-select mt"),C(k,"class","mt"),C($,"class","cont-categorias mt"),C(x,"type","text"),C(x,"placeholder","comentario"),C(L,"class","cont-input mt"),C(U,"class","button"),C(M,"class","cont-button"),C(c,"class","p1"),C(r,"class",j="modal "+t[1]+" svelte-1lul8v5"),C(n,"class","cont-modal")},m(e,i){w(e,n,i),_(n,r),_(r,s),_(s,o),_(r,a),_(r,c),_(c,l),_(l,u),_(u,d),_(u,h),_(u,f),P(f,t[0].dinero),_(c,p),_(c,m),_(m,g),_(m,v),_(m,y),_(y,b),_(c,E),_(c,k),_(c,O),_(c,$),V.m($,null),_(c,N),_(c,L),_(L,x),P(x,t[0].comentario),_(c,D),_(c,M),_(M,U),B||(F=[R(o,"click",Go),R(f,"input",t[3]),R(x,"input",t[13]),R(U,"click",t[2])],B=!0)},p(e,[t]){1&t&&A(f.value)!==e[0].dinero&&P(f,e[0].dinero),z===(z=H(e))&&V?V.p(e,t):(V.d(1),V=z(e),V&&(V.c(),V.m($,null))),1&t&&x.value!==e[0].comentario&&P(x,e[0].comentario),2&t&&j!==(j="modal "+e[1]+" svelte-1lul8v5")&&C(r,"class",j)},i:e,o:e,d(e){e&&I(n),V.d(),B=!1,i(F)}}}function Go(){document.querySelector(".cont-modal").classList.toggle("active")}function Jo(e,t,n){let r,i,s;d(e,Pi,(e=>n(14,r=e))),d(e,Ni,(e=>n(15,i=e))),d(e,Ai,(e=>n(1,s=e)));var o={tipo:"",categoria:"otro",comentario:"",dinero:"",cuenta:"",uid:localStorage.getItem("uid")};return[o,s,function(){n(0,o.tipo=s,o),n(0,o.cuenta=i,o),Xs({method:"POST",url:r+"/dinero/",data:o}).then((e=>{var t=e.data;Li.set(t.total),Di.set(e.data.gastos),xi.set(e.data.ingresos),Mi.set(e.data.ingreso_total),Ui.set(e.data.gasto_total),n(0,o={tipo:"",categoria:"otro",comentario:"",dinero:"",cuenta:"",uid:localStorage.getItem("uid")}),setTimeout((()=>{Go()}),1e3)}))},function(){o.dinero=A(this.value),n(0,o)},function(){o.categoria=this.__value,n(0,o)},[[]],function(){o.categoria=this.__value,n(0,o)},function(){o.categoria=this.__value,n(0,o)},function(){o.categoria=this.__value,n(0,o)},function(){o.categoria=this.__value,n(0,o)},function(){o.categoria=this.__value,n(0,o)},function(){o.categoria=this.__value,n(0,o)},function(){o.categoria=this.__value,n(0,o)},function(){o.comentario=this.value,n(0,o)}]}class Xo extends ue{constructor(e){super(),le(this,e,Jo,Ko,o,{})}}function Qo(t){let n,r,s,o,a,c,l,u,d,h,f,p,m,g,v,y,b,E,k,O,$;return{c(){n=T("div"),r=T("div"),s=T("div"),s.innerHTML='<i class="bx bx-x svelte-6zvav0"></i>',o=S(),a=T("div"),c=T("div"),l=T("i"),u=S(),d=T("input"),h=S(),f=T("div"),p=T("i"),m=S(),g=T("input"),v=S(),y=T("div"),b=T("button"),b.textContent="Modificar",E=S(),k=T("button"),k.textContent="Eliminar",C(s,"class","header svelte-6zvav0"),C(l,"class","bx bx-dollar"),C(d,"type","number"),C(d,"placeholder","00"),C(d,"class","svelte-6zvav0"),C(c,"class","cont-input svelte-6zvav0"),C(p,"class","bx bx-edit"),C(g,"type","text"),C(g,"placeholder","inserta una nota"),C(g,"class","svelte-6zvav0"),C(f,"class","cont-input svelte-6zvav0"),C(b,"class","btn btn-dark svelte-6zvav0"),C(k,"class","btn btn-danger svelte-6zvav0"),C(y,"class","cont-btn"),C(a,"class","body svelte-6zvav0"),C(r,"class","modal-item svelte-6zvav0"),C(n,"class","cont-modal-item svelte-6zvav0")},m(e,i){w(e,n,i),_(n,r),_(r,s),_(r,o),_(r,a),_(a,c),_(c,l),_(c,u),_(c,d),P(d,t[0].dinero),_(a,h),_(a,f),_(f,p),_(f,m),_(f,g),P(g,t[0].comentario),_(a,v),_(a,y),_(y,b),_(y,E),_(y,k),O||($=[R(s,"click",t[1]),R(d,"input",t[4]),R(g,"input",t[5]),R(b,"click",t[2]),R(k,"click",t[3])],O=!0)},p(e,[t]){1&t&&A(d.value)!==e[0].dinero&&P(d,e[0].dinero),1&t&&g.value!==e[0].comentario&&P(g,e[0].comentario)},i:e,o:e,d(e){e&&I(n),O=!1,i($)}}}function Yo(e,t,n){let r,i,s;d(e,Ni,(e=>n(6,r=e))),d(e,Pi,(e=>n(7,i=e))),d(e,Bi,(e=>n(8,s=e)));var o=localStorage.getItem("uid"),a=i+"/dinero/item/"+o+"/"+s+"/"+r,c={dinero:"200",comentario:"estos es una notishit"};return D((()=>{Xs.get(a).then((e=>{const t=e.data;n(0,c.dinero=t.dinero,c),n(0,c.comentario=t.comentario,c)}))})),[c,function(){ji.set(!1)},function(){console.log("modificar shit"),Xs.put(a,c).then((e=>{Li.set(e.data.total),Di.set(e.data.gastos),xi.set(e.data.ingresos),Mi.set(e.data.ingreso_total),Ui.set(e.data.gasto_total),ji.set(!1)}))},function(){console.log("eliminar shit"),console.log(a),Xs.delete(a).then((e=>{Li.set(e.data.total),Di.set(e.data.gastos),xi.set(e.data.ingresos),Mi.set(e.data.ingreso_total),Ui.set(e.data.gasto_total),ji.set(!1)}))},function(){c.dinero=A(this.value),n(0,c)},function(){c.comentario=this.value,n(0,c)}]}class Zo extends ue{constructor(e){super(),le(this,e,Yo,Qo,o,{})}}function ea(t){let n,r,s,o,a,c,l,u,d,h,f,p;return{c(){n=T("div"),r=T("div"),s=T("h1"),s.textContent="¿Estás seguro que deseas continuar?",o=S(),a=T("p"),a.innerHTML='Esto eliminara todos los registros, pero no te preocupes,\n            podras seguir consultandolos en <span class="svelte-osah38">historial</span>',c=S(),l=T("div"),u=T("button"),u.textContent="Aceptar",d=S(),h=T("button"),h.textContent="Cancelar",C(u,"class","btn btn-dark svelte-osah38"),C(h,"class","btn btn-danger svelte-osah38"),C(l,"class","botones svelte-osah38"),C(r,"class","confirm svelte-osah38"),C(n,"class","cont-confirm svelte-osah38")},m(e,i){w(e,n,i),_(n,r),_(r,s),_(r,o),_(r,a),_(r,c),_(r,l),_(l,u),_(l,d),_(l,h),f||(p=[R(u,"click",t[0]),R(h,"click",t[1])],f=!0)},p:e,i:e,o:e,d(e){e&&I(n),f=!1,i(p)}}}function ta(e,t,n){let r,i;d(e,Pi,(e=>n(2,r=e))),d(e,Ni,(e=>n(3,i=e)));var s=localStorage.getItem("uid");function o(){Fi.set(!1)}return[function(){console.log("terminando"),Xs({method:"POST",url:r+"/terminar/",data:{uid:s,cuenta:i}}).then((e=>{Li.set(e.data.total),Di.set(e.data.gastos),xi.set(e.data.ingresos),Mi.set(e.data.ingreso_total),Ui.set(e.data.gasto_total),o()}))},o]}class na extends ue{constructor(e){super(),le(this,e,ta,ea,o,{})}}function ra(e){let t,n;return t=new na({}),{c(){se(t.$$.fragment)},m(e,r){oe(t,e,r),n=!0},i(e){n||(te(t.$$.fragment,e),n=!0)},o(e){ne(t.$$.fragment,e),n=!1},d(e){ae(t,e)}}}function ia(e){let t,n;return t=new bo({}),{c(){se(t.$$.fragment)},m(e,r){oe(t,e,r),n=!0},i(e){n||(te(t.$$.fragment,e),n=!0)},o(e){ne(t.$$.fragment,e),n=!1},d(e){ae(t,e)}}}function sa(e){let t,n;return t=new ko({}),{c(){se(t.$$.fragment)},m(e,r){oe(t,e,r),n=!0},i(e){n||(te(t.$$.fragment,e),n=!0)},o(e){ne(t.$$.fragment,e),n=!1},d(e){ae(t,e)}}}function oa(e){let t,n;return t=new $o({}),{c(){se(t.$$.fragment)},m(e,r){oe(t,e,r),n=!0},i(e){n||(te(t.$$.fragment,e),n=!0)},o(e){ne(t.$$.fragment,e),n=!1},d(e){ae(t,e)}}}function aa(e){let t,n,r,i,s,o;return t=new Ue({props:{path:"/",$$slots:{default:[ia]},$$scope:{ctx:e}}}),r=new Ue({props:{path:"/historial",$$slots:{default:[sa]},$$scope:{ctx:e}}}),s=new Ue({props:{path:"/test",$$slots:{default:[oa]},$$scope:{ctx:e}}}),{c(){se(t.$$.fragment),n=S(),se(r.$$.fragment),i=S(),se(s.$$.fragment)},m(e,a){oe(t,e,a),w(e,n,a),oe(r,e,a),w(e,i,a),oe(s,e,a),o=!0},p(e,n){const i={};16&n&&(i.$$scope={dirty:n,ctx:e}),t.$set(i);const o={};16&n&&(o.$$scope={dirty:n,ctx:e}),r.$set(o);const a={};16&n&&(a.$$scope={dirty:n,ctx:e}),s.$set(a)},i(e){o||(te(t.$$.fragment,e),te(r.$$.fragment,e),te(s.$$.fragment,e),o=!0)},o(e){ne(t.$$.fragment,e),ne(r.$$.fragment,e),ne(s.$$.fragment,e),o=!1},d(e){ae(t,e),e&&I(n),ae(r,e),e&&I(i),ae(s,e)}}}function ca(e){let t,n;return t=new Zo({}),{c(){se(t.$$.fragment)},m(e,r){oe(t,e,r),n=!0},i(e){n||(te(t.$$.fragment,e),n=!0)},o(e){ne(t.$$.fragment,e),n=!1},d(e){ae(t,e)}}}function la(e){let t,n,r,i,s,o,a,c,l,u,d,h,f;r=new Po({}),s=new Vo({}),a=new Xo({});let p=e[0]&&ra();d=new $e({props:{$$slots:{default:[aa]},$$scope:{ctx:e}}});let m=e[1]&&ca();return{c(){t=T("main"),n=T("div"),se(r.$$.fragment),i=S(),se(s.$$.fragment),o=S(),se(a.$$.fragment),c=S(),p&&p.c(),l=S(),u=T("div"),se(d.$$.fragment),h=S(),m&&m.c(),C(u,"class","contenido"),C(n,"class","main-display")},m(e,g){w(e,t,g),_(t,n),oe(r,n,null),_(n,i),oe(s,n,null),_(n,o),oe(a,n,null),_(n,c),p&&p.m(n,null),_(n,l),_(n,u),oe(d,u,null),_(u,h),m&&m.m(u,null),f=!0},p(e,[t]){e[0]?p?1&t&&te(p,1):(p=ra(),p.c(),te(p,1),p.m(n,l)):p&&(Z(),ne(p,1,1,(()=>{p=null})),ee());const r={};16&t&&(r.$$scope={dirty:t,ctx:e}),d.$set(r),e[1]?m?2&t&&te(m,1):(m=ca(),m.c(),te(m,1),m.m(u,null)):m&&(Z(),ne(m,1,1,(()=>{m=null})),ee())},i(e){f||(te(r.$$.fragment,e),te(s.$$.fragment,e),te(a.$$.fragment,e),te(p),te(d.$$.fragment,e),te(m),f=!0)},o(e){ne(r.$$.fragment,e),ne(s.$$.fragment,e),ne(a.$$.fragment,e),ne(p),ne(d.$$.fragment,e),ne(m),f=!1},d(e){e&&I(t),ae(r),ae(s),ae(a),p&&p.d(),ae(d),m&&m.d()}}}function ua(e,t,n){let r,i,s,o;return d(e,$i,(e=>n(2,r=e))),d(e,Ci,(e=>n(3,i=e))),d(e,Fi,(e=>n(0,s=e))),d(e,ji,(e=>n(1,o=e))),D((()=>{!function(e,t,n,r){tt(e).onAuthStateChanged(t,n,r)}(Ri,(e=>{b(Ci,i=e,i),b($i,r=!!e,r)}))})),[s,o]}return new class extends ue{constructor(e){super(),le(this,e,ua,la,o,{})}}({target:document.body,props:{}})}();
//# sourceMappingURL=bundle.js.map
