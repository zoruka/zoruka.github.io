(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[404,931,895],{9407:function(t,e,n){"use strict";n.d(e,{D_:function(){return l},zD:function(){return a}});var o=t=>{window.__fathomClientQueue=window.__fathomClientQueue||[],window.__fathomClientQueue.push(t)},r=()=>{window.__fathomIsLoading=!1,window.__fathomClientQueue=window.__fathomClientQueue||[],window.__fathomClientQueue.forEach(t=>{switch(t.type){case"trackPageview":l(t.opts);return;case"trackGoal":s(t.code,t.cents);return;case"trackEvent":c(t.eventName,t.opts);return;case"enableTrackingForMe":u();return;case"blockTrackingForMe":_();return;case"setSite":d(t.id);return}}),window.__fathomClientQueue=[]},i=t=>{let e=/(https?)(?=:|\/|$)/;t.forEach(t=>{null!==e.exec(t)&&console.warn(`The include domain ${t} might fail to work as intended as it begins with a transfer protocol (http://, https://). Consider removing the protocol portion of the string.`)})},a=(t,e)=>{if(window.__fathomIsLoading||window.fathom)return;window.__fathomIsLoading=!0;let n=document.createElement("script"),o=document.getElementsByTagName("script")[0]||document.querySelector("body");n.id="fathom-script",n.async=!0,n.setAttribute("data-site",t),n.src=e&&e.url?e.url:"https://cdn.usefathom.com/script.js",e&&(void 0!==e.auto&&n.setAttribute("data-auto",`${e.auto}`),void 0!==e.honorDNT&&n.setAttribute("data-honor-dnt",`${e.honorDNT}`),void 0!==e.canonical&&n.setAttribute("data-canonical",`${e.canonical}`),e.includedDomains&&(i(e.includedDomains),n.setAttribute("data-included-domains",e.includedDomains.join(","))),e.excludedDomains&&(i(e.excludedDomains),n.setAttribute("data-excluded-domains",e.excludedDomains.join(","))),e.spa&&n.setAttribute("data-spa",e.spa)),n.onload=r,o.parentNode.insertBefore(n,o)},l=t=>{window.fathom?t?window.fathom.trackPageview(t):window.fathom.trackPageview():o({type:"trackPageview",opts:t})},s=(t,e)=>{window.fathom?window.fathom.trackGoal(t,e):o({type:"trackGoal",code:t,cents:e})},c=(t,e)=>{window.fathom?window.fathom.trackEvent(t,e):o({type:"trackEvent",eventName:t,opts:e})},_=()=>{window.fathom?window.fathom.blockTrackingForMe():o({type:"blockTrackingForMe"})},u=()=>{window.fathom?window.fathom.enableTrackingForMe():o({type:"enableTrackingForMe"})},d=t=>{window.fathom?window.fathom.setSite(t):o({type:"setSite",id:t})}},4606:function(t,e,n){Promise.resolve().then(n.bind(n,3916)),Promise.resolve().then(n.bind(n,7168)),Promise.resolve().then(n.bind(n,8311))},3916:function(t,e,n){"use strict";n.r(e),n.d(e,{FathomAnalytics:function(){return l}});var o=n(7437),r=n(4033),i=n(2265),a=n(9407);let l=t=>(0,o.jsx)(i.Suspense,{fallback:null,children:(0,o.jsx)(s,{...t})}),s=t=>{let{trackingCode:e,includedDomains:n}=t,o=(0,r.usePathname)(),l=(0,r.useSearchParams)();return(0,i.useEffect)(()=>{a.zD(e,{includedDomains:n})},[]),(0,i.useEffect)(()=>{a.D_({url:o+l.toString(),referrer:document.referrer})},[o,l]),null}},7168:function(t,e,n){"use strict";n.r(e),n.d(e,{SectionHeading:function(){return l}});var o=n(7437);n(2265);var r=n(7405),i=n.n(r),a=n(8591);let l=t=>{let{children:e,className:n,theme:r="light",...i}=t;return(0,o.jsx)("h1",{className:s({className:n,theme:r}),...i,children:e})},s=(0,a.j)(i().heading,{variants:{theme:{light:i().heading_light,dark:i().heading_dark}}})},8311:function(t,e,n){"use strict";n.r(e),n.d(e,{TalkBalloon:function(){return c}});var o=n(7437),r=n(2265),i=n(5962),a=n.n(i),l=n(8591),s=n(5950);let c=t=>{let{children:e}=t,[n,i]=(0,r.useState)("");return(0,r.useEffect)(()=>{let t=setTimeout(()=>{n.length<e.length&&i(e.slice(0,n.length+1))},0===n.length?500:250-210*Math.random());return()=>clearTimeout(t)},[n]),(0,o.jsxs)("span",{className:a().container,children:[n.length===e.length?(0,o.jsxs)(o.Fragment,{children:[n.slice(0,-1),(0,o.jsx)("span",{className:a().blinking,children:n.slice(-1)})]}):n,(0,o.jsx)(_,{})]})},_=()=>(0,o.jsxs)("div",{className:a().stroke_container,children:[(0,o.jsx)("div",{className:u({orientation:"horizontal-top"})}),(0,o.jsx)("div",{className:u({orientation:"horizontal-bottom"})}),(0,o.jsx)("div",{className:u({orientation:"vertical-right"})}),(0,o.jsx)("div",{className:u({orientation:"vertical-left"})})]}),u=(0,l.j)(a().stroke_line,{variants:{orientation:{"horizontal-top":(0,s.cn)(a().stroke_line_horizontal,a().stroke_line_top),"horizontal-bottom":(0,s.cn)(a().stroke_line_horizontal,a().stroke_line_bottom),"vertical-right":(0,s.cn)(a().stroke_line_vertical,a().stroke_line_right),"vertical-left":(0,s.cn)(a().stroke_line_vertical,a().stroke_line_left)}}})},5950:function(t,e,n){"use strict";n.d(e,{M:function(){return r},cn:function(){return o}});let o=function(){for(var t=arguments.length,e=Array(t),n=0;n<t;n++)e[n]=arguments[n];return e.filter(Boolean).join(" ")},r=(t,e)=>"/"===t?"/"===e:e.startsWith(t)},7405:function(t){t.exports={heading:"section-heading_heading__nNAQl","move-dashes-left":"section-heading_move-dashes-left__B_m0Z","move-dashes-right":"section-heading_move-dashes-right__ePN7A",heading_light:"section-heading_heading_light__se3TX",heading_dark:"section-heading_heading_dark__oqnp5"}},5962:function(t){t.exports={container:"talk-balloon_container__OSYO0",appear:"talk-balloon_appear__abuSY",blinking:"talk-balloon_blinking__FX_Ng",blink:"talk-balloon_blink__r14b6",stroke_container:"talk-balloon_stroke_container__Eqa_U",stroke_line:"talk-balloon_stroke_line__36U87",stroke_line_horizontal:"talk-balloon_stroke_line_horizontal__ooU9g",stroke_line_vertical:"talk-balloon_stroke_line_vertical__GkRAH",stroke_line_top:"talk-balloon_stroke_line_top__NAyu2","stroke-top-transition":"talk-balloon_stroke-top-transition__fhZda",stroke_line_bottom:"talk-balloon_stroke_line_bottom__l2g8T","stroke-bottom-transition":"talk-balloon_stroke-bottom-transition__iEtVv",stroke_line_left:"talk-balloon_stroke_line_left__pInP6","stroke-left-transition":"talk-balloon_stroke-left-transition__qC72W",stroke_line_right:"talk-balloon_stroke_line_right__cmtwb","stroke-right-transition":"talk-balloon_stroke-right-transition__UkZ5U"}},622:function(t,e,n){"use strict";var o=n(2265),r=Symbol.for("react.element"),i=Symbol.for("react.fragment"),a=Object.prototype.hasOwnProperty,l=o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,s={key:!0,ref:!0,__self:!0,__source:!0};function c(t,e,n){var o,i={},c=null,_=null;for(o in void 0!==n&&(c=""+n),void 0!==e.key&&(c=""+e.key),void 0!==e.ref&&(_=e.ref),e)a.call(e,o)&&!s.hasOwnProperty(o)&&(i[o]=e[o]);if(t&&t.defaultProps)for(o in e=t.defaultProps)void 0===i[o]&&(i[o]=e[o]);return{$$typeof:r,type:t,key:c,ref:_,props:i,_owner:l.current}}e.Fragment=i,e.jsx=c,e.jsxs=c},7437:function(t,e,n){"use strict";t.exports=n(622)},4033:function(t,e,n){t.exports=n(5313)},8591:function(t,e,n){"use strict";n.d(e,{j:function(){return i}});let o=t=>"boolean"==typeof t?"".concat(t):0===t?"0":t,r=function(){for(var t,e,n=0,o="";n<arguments.length;)(t=arguments[n++])&&(e=function t(e){var n,o,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e){if(Array.isArray(e))for(n=0;n<e.length;n++)e[n]&&(o=t(e[n]))&&(r&&(r+=" "),r+=o);else for(n in e)e[n]&&(r&&(r+=" "),r+=n)}return r}(t))&&(o&&(o+=" "),o+=e);return o},i=(t,e)=>n=>{var i;if((null==e?void 0:e.variants)==null)return r(t,null==n?void 0:n.class,null==n?void 0:n.className);let{variants:a,defaultVariants:l}=e,s=Object.keys(a).map(t=>{let e=null==n?void 0:n[t],r=null==l?void 0:l[t];if(null===e)return null;let i=o(e)||o(r);return a[t][i]}),c=n&&Object.entries(n).reduce((t,e)=>{let[n,o]=e;return void 0===o||(t[n]=o),t},{});return r(t,s,null==e?void 0:null===(i=e.compoundVariants)||void 0===i?void 0:i.reduce((t,e)=>{let{class:n,className:o,...r}=e;return Object.entries(r).every(t=>{let[e,n]=t;return Array.isArray(n)?n.includes({...l,...c}[e]):({...l,...c})[e]===n})?[...t,n,o]:t},[]),null==n?void 0:n.class,null==n?void 0:n.className)}}},function(t){t.O(0,[971,938,744],function(){return t(t.s=4606)}),_N_E=t.O()}]);