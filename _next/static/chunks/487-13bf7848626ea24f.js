(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[487],{1713:function(e,t,n){"use strict";n.r(t),n.d(t,{FathomAnalytics:function(){return v}});var o=n(7437),r=n(4033),a=n(2265),i=e=>{window.__fathomClientQueue=window.__fathomClientQueue||[],window.__fathomClientQueue.push(e)},l=()=>{window.__fathomIsLoading=!1,window.__fathomClientQueue=window.__fathomClientQueue||[],window.__fathomClientQueue.forEach(e=>{switch(e.type){case"trackPageview":u(e.opts);return;case"trackGoal":_(e.code,e.cents);return;case"trackEvent":d(e.eventName,e.opts);return;case"enableTrackingForMe":f();return;case"blockTrackingForMe":h();return;case"setSite":m(e.id);return}}),window.__fathomClientQueue=[]},s=e=>{let t=/(https?)(?=:|\/|$)/;e.forEach(e=>{null!==t.exec(e)&&console.warn(`The include domain ${e} might fail to work as intended as it begins with a transfer protocol (http://, https://). Consider removing the protocol portion of the string.`)})},c=(e,t)=>{if(window.__fathomIsLoading||window.fathom)return;window.__fathomIsLoading=!0;let n=document.createElement("script"),o=document.getElementsByTagName("script")[0]||document.querySelector("body");n.id="fathom-script",n.async=!0,n.setAttribute("data-site",e),n.src=t&&t.url?t.url:"https://cdn.usefathom.com/script.js",t&&(void 0!==t.auto&&n.setAttribute("data-auto",`${t.auto}`),void 0!==t.honorDNT&&n.setAttribute("data-honor-dnt",`${t.honorDNT}`),void 0!==t.canonical&&n.setAttribute("data-canonical",`${t.canonical}`),t.includedDomains&&(s(t.includedDomains),n.setAttribute("data-included-domains",t.includedDomains.join(","))),t.excludedDomains&&(s(t.excludedDomains),n.setAttribute("data-excluded-domains",t.excludedDomains.join(","))),t.spa&&n.setAttribute("data-spa",t.spa)),n.onload=l,o.parentNode.insertBefore(n,o)},u=e=>{window.fathom?e?window.fathom.trackPageview(e):window.fathom.trackPageview():i({type:"trackPageview",opts:e})},_=(e,t)=>{window.fathom?window.fathom.trackGoal(e,t):i({type:"trackGoal",code:e,cents:t})},d=(e,t)=>{window.fathom?window.fathom.trackEvent(e,t):i({type:"trackEvent",eventName:e,opts:t})},h=()=>{window.fathom?window.fathom.blockTrackingForMe():i({type:"blockTrackingForMe"})},f=()=>{window.fathom?window.fathom.enableTrackingForMe():i({type:"enableTrackingForMe"})},m=e=>{window.fathom?window.fathom.setSite(e):i({type:"setSite",id:e})};let v=e=>(0,o.jsx)(a.Suspense,{fallback:null,children:(0,o.jsx)(k,{...e})}),k=e=>{let{trackingCode:t,includedDomains:n}=e,o=(0,r.usePathname)(),i=(0,r.useSearchParams)();return(0,a.useEffect)(()=>{c(t,{includedDomains:n})},[]),(0,a.useEffect)(()=>{u({url:o+i.toString(),referrer:document.referrer})},[o,i]),null}},2302:function(e,t,n){"use strict";n.r(t),n.d(t,{Pager:function(){return d}});var o=n(7437),r=n(8591),a=n(2957),i=n.n(a),l=n(2265),s=n(4033),c=n(5950),u=n(1396),_=n.n(u);let d=e=>{let{children:t,tabs:n}=e,[r,a]=(0,l.useState)(!1),u=(0,l.useRef)(null),_=(0,l.useRef)(null),d=(0,s.usePathname)();(0,l.useEffect)(()=>{var e;"/"!==d&&a(!0);let t=e=>{u.current&&!u.current.contains(e.target)&&a(!1)};return document.addEventListener("click",t),null===(e=_.current)||void 0===e||e.scrollTo(0,0),()=>{document.removeEventListener("click",t)}},[d]),(0,l.useEffect)(()=>{if(_.current){if(r){_.current.focus();let e=e=>{var t;e.deltaY<-30&&(null===(t=_.current)||void 0===t?void 0:t.scrollTop)===0&&a(!1)},t={y:0},n=e=>{t.y=e.touches[0].clientY},o=e=>{_.current&&(console.log(_.current.scrollTop,t.y,e.changedTouches[0].clientY),e.changedTouches[0].clientY>t.y&&_.current.scrollTop<=0&&a(!1))};return _.current.addEventListener("wheel",e),window.addEventListener("touchstart",n),window.addEventListener("touchend",o),()=>{var t;null===(t=_.current)||void 0===t||t.removeEventListener("wheel",e),window.removeEventListener("touchstart",n),window.removeEventListener("touchend",o)}}{let e=e=>{e.deltaY>30&&0===window.scrollY&&a(!0)},t={y:0},n=e=>{t.y=e.touches[0].clientY},o=e=>{e.changedTouches[0].clientY<t.y&&a(!0)};return window.addEventListener("wheel",e),window.addEventListener("touchstart",n),window.addEventListener("touchend",o),()=>{window.removeEventListener("wheel",e),window.removeEventListener("touchstart",n),window.removeEventListener("touchend",o)}}}},[r,_]);let m=e=>{if((0,c.M)(e,d)){a(e=>!e);return}r||a(!0)};return(0,o.jsxs)("div",{className:h({open:r}),ref:u,children:[(0,o.jsx)("div",{className:i().tabs,children:n.map(e=>(0,o.jsx)(f,{route:e.route,onTabSwitch:m,active:(0,c.M)(e.route,d),children:e.label},e.route))}),(0,o.jsx)("div",{className:i().content_wrapper,ref:_,children:(0,o.jsx)("section",{className:i().content,children:t})})]})},h=(0,r.j)(i().container,{variants:{open:{true:i().container_open,false:i().container_close}}}),f=e=>{let{children:t,route:n,active:r,onTabSwitch:a}=e;return(0,o.jsx)(_(),{href:n,className:m({active:r}),onClick:()=>{a(n)},children:t})},m=(0,r.j)(i().tab,{variants:{active:{true:i().tab_active}}})},7168:function(e,t,n){"use strict";n.r(t),n.d(t,{SectionHeading:function(){return l}});var o=n(7437);n(2265);var r=n(7405),a=n.n(r),i=n(8591);let l=e=>{let{children:t,className:n,theme:r="light",...a}=e;return(0,o.jsx)("h1",{className:s({className:n,theme:r}),...a,children:t})},s=(0,i.j)(a().heading,{variants:{theme:{light:a().heading_light,dark:a().heading_dark}}})},8311:function(e,t,n){"use strict";n.r(t),n.d(t,{TalkBalloon:function(){return c}});var o=n(7437),r=n(2265),a=n(5962),i=n.n(a),l=n(8591),s=n(5950);let c=e=>{let{children:t}=e,[n,a]=(0,r.useState)("");return(0,r.useEffect)(()=>{let e=setTimeout(()=>{n.length<t.length&&a(t.slice(0,n.length+1))},0===n.length?500:250-210*Math.random());return()=>clearTimeout(e)},[n]),(0,o.jsxs)("span",{className:i().container,children:[n.length===t.length?(0,o.jsxs)(o.Fragment,{children:[n.slice(0,-1),(0,o.jsx)("span",{className:i().blinking,children:n.slice(-1)})]}):n,(0,o.jsx)(u,{})]})},u=()=>(0,o.jsxs)("div",{className:i().stroke_container,children:[(0,o.jsx)("div",{className:_({orientation:"horizontal-top"})}),(0,o.jsx)("div",{className:_({orientation:"horizontal-bottom"})}),(0,o.jsx)("div",{className:_({orientation:"vertical-right"})}),(0,o.jsx)("div",{className:_({orientation:"vertical-left"})})]}),_=(0,l.j)(i().stroke_line,{variants:{orientation:{"horizontal-top":(0,s.cn)(i().stroke_line_horizontal,i().stroke_line_top),"horizontal-bottom":(0,s.cn)(i().stroke_line_horizontal,i().stroke_line_bottom),"vertical-right":(0,s.cn)(i().stroke_line_vertical,i().stroke_line_right),"vertical-left":(0,s.cn)(i().stroke_line_vertical,i().stroke_line_left)}}})},5950:function(e,t,n){"use strict";n.d(t,{M:function(){return r},cn:function(){return o}});let o=function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return t.filter(Boolean).join(" ")},r=(e,t)=>"/"===e?"/"===t:t.startsWith(e)},2957:function(e){e.exports={container:"pager_container__40ok_",container_open:"pager_container_open__yfy8z",container_close:"pager_container_close__JFuxy",content_wrapper:"pager_content_wrapper__P7O0N",content:"pager_content__r_SRJ",tabs:"pager_tabs__GqYeI",tab:"pager_tab__26oo6",tab_active:"pager_tab_active__a6zyt"}},7405:function(e){e.exports={heading:"section-heading_heading__nNAQl","move-dashes-left":"section-heading_move-dashes-left__B_m0Z","move-dashes-right":"section-heading_move-dashes-right__ePN7A",heading_light:"section-heading_heading_light__se3TX",heading_dark:"section-heading_heading_dark__oqnp5"}},5962:function(e){e.exports={container:"talk-balloon_container__OSYO0",appear:"talk-balloon_appear__abuSY",blinking:"talk-balloon_blinking__FX_Ng",blink:"talk-balloon_blink__r14b6",stroke_container:"talk-balloon_stroke_container__Eqa_U",stroke_line:"talk-balloon_stroke_line__36U87",stroke_line_horizontal:"talk-balloon_stroke_line_horizontal__ooU9g",stroke_line_vertical:"talk-balloon_stroke_line_vertical__GkRAH",stroke_line_top:"talk-balloon_stroke_line_top__NAyu2","stroke-top-transition":"talk-balloon_stroke-top-transition__fhZda",stroke_line_bottom:"talk-balloon_stroke_line_bottom__l2g8T","stroke-bottom-transition":"talk-balloon_stroke-bottom-transition__iEtVv",stroke_line_left:"talk-balloon_stroke_line_left__pInP6","stroke-left-transition":"talk-balloon_stroke-left-transition__qC72W",stroke_line_right:"talk-balloon_stroke_line_right__cmtwb","stroke-right-transition":"talk-balloon_stroke-right-transition__UkZ5U"}},622:function(e,t,n){"use strict";var o=n(2265),r=Symbol.for("react.element"),a=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,l=o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,s={key:!0,ref:!0,__self:!0,__source:!0};function c(e,t,n){var o,a={},c=null,u=null;for(o in void 0!==n&&(c=""+n),void 0!==t.key&&(c=""+t.key),void 0!==t.ref&&(u=t.ref),t)i.call(t,o)&&!s.hasOwnProperty(o)&&(a[o]=t[o]);if(e&&e.defaultProps)for(o in t=e.defaultProps)void 0===a[o]&&(a[o]=t[o]);return{$$typeof:r,type:e,key:c,ref:u,props:a,_owner:l.current}}t.Fragment=a,t.jsx=c,t.jsxs=c},7437:function(e,t,n){"use strict";e.exports=n(622)},1396:function(e,t,n){e.exports=n(5250)},4033:function(e,t,n){e.exports=n(5313)},8591:function(e,t,n){"use strict";n.d(t,{j:function(){return a}});let o=e=>"boolean"==typeof e?"".concat(e):0===e?"0":e,r=function(){for(var e,t,n=0,o="";n<arguments.length;)(e=arguments[n++])&&(t=function e(t){var n,o,r="";if("string"==typeof t||"number"==typeof t)r+=t;else if("object"==typeof t){if(Array.isArray(t))for(n=0;n<t.length;n++)t[n]&&(o=e(t[n]))&&(r&&(r+=" "),r+=o);else for(n in t)t[n]&&(r&&(r+=" "),r+=n)}return r}(e))&&(o&&(o+=" "),o+=t);return o},a=(e,t)=>n=>{var a;if((null==t?void 0:t.variants)==null)return r(e,null==n?void 0:n.class,null==n?void 0:n.className);let{variants:i,defaultVariants:l}=t,s=Object.keys(i).map(e=>{let t=null==n?void 0:n[e],r=null==l?void 0:l[e];if(null===t)return null;let a=o(t)||o(r);return i[e][a]}),c=n&&Object.entries(n).reduce((e,t)=>{let[n,o]=t;return void 0===o||(e[n]=o),e},{});return r(e,s,null==t?void 0:null===(a=t.compoundVariants)||void 0===a?void 0:a.reduce((e,t)=>{let{class:n,className:o,...r}=t;return Object.entries(r).every(e=>{let[t,n]=e;return Array.isArray(n)?n.includes({...l,...c}[t]):({...l,...c})[t]===n})?[...e,n,o]:e},[]),null==n?void 0:n.class,null==n?void 0:n.className)}}}]);