!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports["video/player/invert-scroll-volume"]=t():e["video/player/invert-scroll-volume"]=t()}(globalThis,(()=>(()=>{var e,t,o={132:e=>{function t(e){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}t.keys=()=>[],t.resolve=t,t.id=132,e.exports=t},17:e=>{function t(e){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}t.keys=()=>[],t.resolve=t,t.id=17,e.exports=t},466:e=>{"use strict";e.exports="在网页全屏 / 全屏模式下, 禁止鼠标滚轮控制播放器的音量.  请注意不能和 `反转滚轮调音量` 一同使用.\n"},777:e=>{"use strict";e.exports="反转在网页全屏 / 全屏模式下使用滚轮调节音量的方向, 使其更符合使用触控板时的操作方向. 请注意不能和 `禁止滚轮调音量` 一同使用.\n\n- 手指向上推时, 增加音量\n- 手指向下推时, 减少音量\n- 可以自定义 `灵敏度`, 同样的滚动幅度下, 灵敏度越高变化的音量越多"}},n={};function r(e){var t=n[e];if(void 0!==t)return t.exports;var a=n[e]={exports:{}};return o[e](a,a.exports,r),a.exports}t=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,r.t=function(o,n){if(1&n&&(o=this(o)),8&n)return o;if("object"==typeof o&&o){if(4&n&&o.__esModule)return o;if(16&n&&"function"==typeof o.then)return o}var a=Object.create(null);r.r(a);var l={};e=e||[null,t({}),t([]),t(t)];for(var s=2&n&&o;"object"==typeof s&&!~e.indexOf(s);s=t(s))Object.getOwnPropertyNames(s).forEach((e=>l[e]=()=>o[e]));return l.default=()=>o,r.d(a,l),a},r.d=(e,t)=>{for(var o in t)r.o(t,o)&&!r.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var a={};return(()=>{"use strict";r.d(a,{component:()=>u});const e=coreApis.componentApis.define,t=coreApis.utils,o=coreApis.utils.urls;let n;const l=()=>(0,t.preventEvent)(unsafeWindow,"mousewheel",(()=>["player-mode-full","player-fullscreen-fix","player-full-win"].some((e=>document.body.classList.contains(e))))),s=((0,e.defineComponentMetadata)({name:"disableScrollVolume",displayName:"禁止滚轮调音量",tags:[componentsTags.video],entry:()=>{n?.(),n=l()},reload:()=>{n?.(),n=l()},unload:()=>{n?.()},urlInclude:o.allVideoUrls,commitHash:"81aba0ace934e5de3d34e3f6c88ace8506a9f7ab",coreVersion:"2.7.2",description:(()=>{const e=r(132);return{...Object.fromEntries(e.keys().map((t=>[t.match(/index\.(.+)\.md$/)[1],e(t)]))),"zh-CN":()=>Promise.resolve().then(r.t.bind(r,466,17)).then((e=>e.default))}})()}),coreApis.componentApis.video.playerAgent),i=coreApis.settings;let d;const c=(0,e.defineOptionsMetadata)({deltaFactor:{defaultValue:15,slider:{min:1,max:30,step:1},displayName:"灵敏度"}}),p=()=>{d?.();const e=(0,i.getComponentSettings)("invertScrollVolume"),t=t=>{["player-mode-webfullscreen","player-fullscreen-fix","player-full-win"].some((e=>document.body.classList.contains(e)))&&s.playerAgent.changeVolume(t.deltaY/((30-e.options.deltaFactor+1)/2))};unsafeWindow.addEventListener("wheel",t);const o=l();return()=>{unsafeWindow.removeEventListener("wheel",t),o()}},u=(0,e.defineComponentMetadata)({name:"invertScrollVolume",displayName:"反转滚轮调音量",tags:[componentsTags.video],options:c,entry:()=>{d?.(),d=p()},reload:()=>{d?.(),d=p()},unload:()=>d?.(),urlInclude:o.allVideoUrls,commitHash:"81aba0ace934e5de3d34e3f6c88ace8506a9f7ab",coreVersion:"2.7.2",description:(()=>{const e=r(17);return{...Object.fromEntries(e.keys().map((t=>[t.match(/index\.(.+)\.md$/)[1],e(t)]))),"zh-CN":()=>Promise.resolve().then(r.t.bind(r,777,17)).then((e=>e.default))}})()})})(),a=a.component})()));