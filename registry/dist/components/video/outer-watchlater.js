!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports["video/outer-watchlater"]=e():t["video/outer-watchlater"]=e()}(globalThis,(()=>(()=>{var t,e,n={921:(t,e,n)=>{var o=n(355)((function(t){return t[1]}));o.push([t.id,".video-toolbar-left .watchlater,\n.video-toolbar .ops .watchlater,\n.video-toolbar-v1 .toolbar-left .watchlater {\n  font-size: 14px;\n  margin-right: 28px !important;\n  position: relative;\n  width: auto !important;\n}\n@media screen and (max-width: 1340px), (max-height: 750px) {\n.video-toolbar-left .watchlater,\n.video-toolbar .ops .watchlater,\n.video-toolbar-v1 .toolbar-left .watchlater {\n    margin-right: max(min(11vw, 11vh) - 117.2px, 6px) !important;\n}\n.video-toolbar-left .watchlater .text,\n.video-toolbar .ops .watchlater .text,\n.video-toolbar-v1 .toolbar-left .watchlater .text {\n    display: none;\n}\n}\n.video-toolbar-left .watchlater .tip,\n.video-toolbar .ops .watchlater .tip,\n.video-toolbar-v1 .toolbar-left .watchlater .tip {\n  position: absolute;\n  top: calc(100% + 8px);\n  left: 50%;\n  transform: translateX(-50%);\n  z-index: 1000;\n  background: rgba(0, 0, 0, 0.8666666667);\n  padding: 4px 8px;\n  border-radius: 4px;\n  color: #eee;\n  transition: all 0.2s ease-out;\n  opacity: 0;\n  pointer-events: none;\n}\n.video-toolbar-left .watchlater .tip.show,\n.video-toolbar .ops .watchlater .tip.show,\n.video-toolbar-v1 .toolbar-left .watchlater .tip.show {\n  opacity: 1;\n  pointer-events: initial;\n}\n.video-toolbar-left .watchlater .be-icon,\n.video-toolbar .ops .watchlater .be-icon,\n.video-toolbar-v1 .toolbar-left .watchlater .be-icon {\n  display: inline-flex;\n}\n@media (min-width: 1681px) {\n.video-toolbar-left .watchlater .be-icon,\n.video-toolbar .ops .watchlater .be-icon,\n.video-toolbar-v1 .toolbar-left .watchlater .be-icon {\n    --size: 36px !important;\n}\n}\n.video-toolbar-left .watchlater .be-icon {\n  transform: translateY(1px);\n  margin-right: 8px;\n}\n.video-toolbar-v1 .watchlater .be-icon {\n  transform: translateY(1px);\n}\n.more-ops-list > ul > li:nth-child(2),\n.van-popover .more_dropdown > li:nth-child(2) {\n  display: none !important;\n}\n.video-tool-more-dropdown .video-watchlater.dropdown-item {\n  display: none !important;\n}",""]),t.exports=o},355:t=>{"use strict";
// eslint-disable-next-line func-names
t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var n=t(e);return e[2]?"@media ".concat(e[2]," {").concat(n,"}"):n})).join("")},
// eslint-disable-next-line func-names
e.i=function(t,n,o){"string"==typeof t&&(
// eslint-disable-next-line no-param-reassign
t=[[null,t,""]]);var a={};if(o)for(var r=0;r<this.length;r++){
// eslint-disable-next-line prefer-destructuring
var i=this[r][0];null!=i&&(a[i]=!0)}for(var s=0;s<t.length;s++){var l=[].concat(t[s]);o&&a[l[0]]||(n&&(l[2]?l[2]="".concat(n," and ").concat(l[2]):l[2]=n),e.push(l))}},e}},648:(t,e,n)=>{"use strict";var o,a=function(){return void 0===o&&(
// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
// @see https://github.com/webpack-contrib/style-loader/issues/177
o=Boolean(window&&document&&document.all&&!window.atob)),o},r=function(){var t={};return function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(t){n=null}t[e]=n}return t[e]}}(),i=[];function s(t){for(var e=-1,n=0;n<i.length;n++)if(i[n].identifier===t){e=n;break}return e}function l(t,e){for(var n={},o=[],a=0;a<t.length;a++){var r=t[a],l=e.base?r[0]+e.base:r[0],c=n[l]||0,d="".concat(l," ").concat(c);n[l]=c+1;var p=s(d),u={css:r[1],media:r[2],sourceMap:r[3]};-1!==p?(i[p].references++,i[p].updater(u)):i.push({identifier:d,updater:m(u,e),references:1}),o.push(d)}return o}function c(t){var e=document.createElement("style"),o=t.attributes||{};if(void 0===o.nonce){var a=n.nc;a&&(o.nonce=a)}if(Object.keys(o).forEach((function(t){e.setAttribute(t,o[t])})),"function"==typeof t.insert)t.insert(e);else{var i=r(t.insert||"head");if(!i)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");i.appendChild(e)}return e}var d,p=(d=[],function(t,e){return d[t]=e,d.filter(Boolean).join("\n")});function u(t,e,n,o){var a=n?"":o.media?"@media ".concat(o.media," {").concat(o.css,"}"):o.css;if(t.styleSheet)t.styleSheet.cssText=p(e,a);else{var r=document.createTextNode(a),i=t.childNodes;i[e]&&t.removeChild(i[e]),i.length?t.insertBefore(r,i[e]):t.appendChild(r)}}function f(t,e,n){var o=n.css,a=n.media,r=n.sourceMap;if(a?t.setAttribute("media",a):t.removeAttribute("media"),r&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(r))))," */")),t.styleSheet)t.styleSheet.cssText=o;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(o))}}var h=null,v=0;function m(t,e){var n,o,a;if(e.singleton){var r=v++;n=h||(h=c(e)),o=u.bind(null,n,r,!1),a=u.bind(null,n,r,!0)}else n=c(e),o=f.bind(null,n,e),a=function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(n)};return o(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap)return;o(t=e)}else a()}}t.exports=function(t,e){(e=e||{}).singleton||"boolean"==typeof e.singleton||(e.singleton=a());var n=l(t=t||[],e);return function(t){if(t=t||[],"[object Array]"===Object.prototype.toString.call(t)){for(var o=0;o<n.length;o++){var a=s(n[o]);i[a].references--}for(var r=l(t,e),c=0;c<n.length;c++){var d=s(n[c]);0===i[d].references&&(i[d].updater(),i.splice(d,1))}n=r}}}},650:(t,e,n)=>{"use strict";n.r(e),n.d(e,{default:()=>f});var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("span",{staticClass:"watchlater be-outer-watchlater video-toolbar-left-item",class:{on:t.on},attrs:{title:"稍后再看"},on:{click:function(e){return t.toggle()}}},[n("VIcon",{staticClass:"icon",attrs:{size:28,icon:"mdi-timetable"}}),t._v(" "),n("span",{staticClass:"text"},[t._v("稍后再看")]),t._v(" "),n("div",{staticClass:"tip",class:{show:t.tipShowing}},[t._v(t._s(t.tipText))])],1)};o._withStripped=!0;const a=coreApis.ui,r=coreApis.componentApis.video.watchlater,i=Vue.extend({components:{VIcon:a.VIcon},data:()=>({watchlaterList:r.watchlaterList,aid:unsafeWindow.aid,tipText:"",tipShowing:!1,tipHandle:0}),computed:{on(){return console.log(this.watchlaterList,this.aid,this.watchlaterList.includes(parseInt(this.aid))),this.watchlaterList.includes(parseInt(this.aid))}},methods:{showTip(t){this.tipText=t,this.tipShowing=!0,this.tipHandle&&clearTimeout(this.tipHandle),this.tipHandle=setTimeout((()=>{this.tipShowing=!1}),2e3)},async toggle(){await(0,r.toggleWatchlater)(this.aid),this.showTip(this.on?"已添加至稍后再看":"已从稍后再看移除")}}});var s=n(648),l=n.n(s),c=n(921),d=n.n(c),p={insert:"head",singleton:!1};l()(d(),p);d().locals;var u=function(t,e,n,o,a,r,i,s){var l,c="function"==typeof t?t.options:t;if(e&&(c.render=e,c.staticRenderFns=n,c._compiled=!0),o&&(c.functional=!0),r&&(c._scopeId="data-v-"+r),i?(l=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),a&&a.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(i)},c._ssrRegister=l):a&&(l=s?function(){a.call(this,(c.functional?this.parent:this).$root.$options.shadowRoot)}:a),l)if(c.functional){c._injectStyles=l;var d=c.render;c.render=function(t,e){return l.call(e),d(t,e)}}else{var p=c.beforeCreate;c.beforeCreate=p?[].concat(p,l):[l]}return{exports:t,options:c}}(i,o,[],!1,null,null,null);u.options.__file="registry/lib/components/video/outer-watchlater/OuterWatchlater.vue";const f=u.exports},391:t=>{"use strict";t.exports=coreApis.observer}},o={};function a(t){var e=o[t];if(void 0!==e)return e.exports;var r=o[t]={id:t,exports:{}};return n[t](r,r.exports,a),r.exports}a.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return a.d(e,{a:e}),e},e=Object.getPrototypeOf?t=>Object.getPrototypeOf(t):t=>t.__proto__,a.t=function(n,o){if(1&o&&(n=this(n)),8&o)return n;if("object"==typeof n&&n){if(4&o&&n.__esModule)return n;if(16&o&&"function"==typeof n.then)return n}var r=Object.create(null);a.r(r);var i={};t=t||[null,e({}),e([]),e(e)];for(var s=2&o&&n;"object"==typeof s&&!~t.indexOf(s);s=e(s))Object.getOwnPropertyNames(s).forEach((t=>i[t]=()=>n[t]));return i.default=()=>n,a.d(r,i),r},a.d=(t,e)=>{for(var n in e)a.o(e,n)&&!a.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})},a.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),a.r=t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})};var r={};return(()=>{"use strict";a.d(r,{component:()=>s});const t=coreApis.componentApis.define,e=coreApis.utils,n=coreApis.utils.urls,o=coreApis.componentApis.video.videoActions,i=(0,t.defineOptionsMetadata)({showInWatchlaterPages:{defaultValue:!1,displayName:"在稍后再看页面中仍然显示"}}),s=(0,t.defineComponentMetadata)({name:"outerWatchlater",displayName:"外置稍后再看",entry:async t=>{let{settings:r}=t;if(n.watchlaterUrls.some(e.matchUrlPattern)&&!r.options.showInWatchlaterPages)return;if(!(0,e.getUID)())return;const i=await Promise.resolve().then(a.bind(a,650)),s=(0,e.mountVueComponent)(i);if(await(0,o.addVideoActionButton)((()=>s.$el))){const{videoChange:t}=await Promise.resolve().then(a.t.bind(a,391,23));t((t=>{let{aid:e}=t;console.log("videoChange",unsafeWindow.aid,e),s.aid=unsafeWindow.aid}))}},tags:[componentsTags.video],description:{"zh-CN":"将视频页面菜单里的 `稍后再看` 移到外面. 请注意如果在稍后再看页面中仍然显示, 是不会实时同步右侧的播放列表的."},urlInclude:n.videoUrls,options:i,reload:()=>{dqa(".be-outer-watchlater").forEach((t=>{t.style.display=""}))},unload:()=>{dqa(".be-outer-watchlater").forEach((t=>{t.style.display="none"}))},plugin:{displayName:"稍后再看 - 快捷键支持",setup:t=>{let{addData:e}=t;e("keymap.actions",(t=>{t.watchlater={displayName:"稍后再看",run:t=>{const{clickElement:e}=t;return e(".be-outer-watchlater",t)}}})),e("keymap.presets",(t=>{t.watchlater="shift w"}))}},commitHash:"81aba0ace934e5de3d34e3f6c88ace8506a9f7ab",coreVersion:"2.7.2"})})(),r=r.component})()));