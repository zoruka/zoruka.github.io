(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[160],{3254:function(e,t,n){Promise.resolve().then(n.bind(n,9358))},9358:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return k}});var r=n(7437);n(2265);var o=n(8591),a=n(7972),i=n.n(a);let l=e=>{let{children:t,className:n,theme:o="dark",...a}=e;return(0,r.jsx)("main",{className:s({theme:o,className:n}),...a,children:(0,r.jsx)("div",{className:i().content,children:t})})},s=(0,o.j)(i().container,{variants:{theme:{light:i().container_light,dark:i().container_dark}}});var c=n(7168);n(8311),n(3916),n(2395);var _=n(1396),u=n.n(_),d=n(3943),h=n.n(d),k=()=>(0,r.jsxs)(l,{theme:"dark",children:[(0,r.jsx)(c.SectionHeading,{theme:"dark",children:"\uD83D\uDE22 Game Over \uD83D\uDE22"}),(0,r.jsxs)("p",{className:h().message,children:["Curiouser and curiouser",(0,r.jsx)("br",{}),"This page could not be found"]}),(0,r.jsx)(u(),{href:"/",className:h().home_link,children:"come back"})]})},3916:function(e,t,n){"use strict";n.r(t),n.d(t,{FathomAnalytics:function(){return l}});var r=n(7437),o=n(4033),a=n(2265),i=n(9407);let l=e=>(0,r.jsx)(a.Suspense,{fallback:null,children:(0,r.jsx)(s,{...e})}),s=e=>{let{trackingCode:t,includedDomains:n}=e,r=(0,o.usePathname)(),l=(0,o.useSearchParams)();return(0,a.useEffect)(()=>{i.zD(t,{includedDomains:n})},[]),(0,a.useEffect)(()=>{i.D_({url:r+l.toString(),referrer:document.referrer})},[r,l]),null}},2395:function(e,t,n){"use strict";n.r(t),n.d(t,{Pager:function(){return d}});var r=n(7437),o=n(8591),a=n(2957),i=n.n(a),l=n(2265),s=n(4033),c=n(5950),_=n(1396),u=n.n(_);let d=e=>{let{children:t,tabs:n}=e,[o,a]=(0,l.useState)(!1),_=(0,l.useRef)(null),u=(0,l.useRef)(null),d=(0,s.usePathname)();(0,l.useEffect)(()=>{var e;"/"!==d&&a(!0);let t=e=>{_.current&&!_.current.contains(e.target)&&a(!1)};return document.addEventListener("click",t),null===(e=u.current)||void 0===e||e.scrollTo(0,0),()=>{document.removeEventListener("click",t)}},[d]),(0,l.useEffect)(()=>{if(u.current){if(o){u.current.focus();let e=e=>{var t;e.deltaY<-30&&(null===(t=u.current)||void 0===t?void 0:t.scrollTop)===0&&a(!1)},t={y:0},n=e=>{t.y=e.touches[0].clientY},r=e=>{u.current&&(console.log(u.current.scrollTop,t.y,e.changedTouches[0].clientY),e.changedTouches[0].clientY>t.y&&u.current.scrollTop<=0&&a(!1))};return u.current.addEventListener("wheel",e),window.addEventListener("touchstart",n),window.addEventListener("touchend",r),()=>{var t;null===(t=u.current)||void 0===t||t.removeEventListener("wheel",e),window.removeEventListener("touchstart",n),window.removeEventListener("touchend",r)}}{let e=e=>{e.deltaY>30&&0===window.scrollY&&a(!0)},t={y:0},n=e=>{t.y=e.touches[0].clientY},r=e=>{e.changedTouches[0].clientY<t.y&&a(!0)};return window.addEventListener("wheel",e),window.addEventListener("touchstart",n),window.addEventListener("touchend",r),()=>{window.removeEventListener("wheel",e),window.removeEventListener("touchstart",n),window.removeEventListener("touchend",r)}}}},[o,u]);let v=e=>{if((0,c.M)(e,d)){a(e=>!e);return}o||a(!0)};return(0,r.jsxs)("div",{className:h({open:o}),ref:_,children:[(0,r.jsx)("div",{className:i().tabs,children:n.map(e=>(0,r.jsx)(k,{route:e.route,onTabSwitch:v,active:(0,c.M)(e.route,d),children:e.label},e.route))}),(0,r.jsx)("div",{className:i().content_wrapper,ref:u,children:(0,r.jsx)("section",{className:i().content,children:t})})]})},h=(0,o.j)(i().container,{variants:{open:{true:i().container_open,false:i().container_close}}}),k=e=>{let{children:t,route:n,active:o,onTabSwitch:a}=e;return(0,r.jsx)(u(),{href:n,className:v({active:o}),onClick:()=>{a(n)},children:t})},v=(0,o.j)(i().tab,{variants:{active:{true:i().tab_active}}})},7168:function(e,t,n){"use strict";n.r(t),n.d(t,{SectionHeading:function(){return l}});var r=n(7437);n(2265);var o=n(7405),a=n.n(o),i=n(8591);let l=e=>{let{children:t,className:n,theme:o="light",...a}=e;return(0,r.jsx)("h1",{className:s({className:n,theme:o}),...a,children:t})},s=(0,i.j)(a().heading,{variants:{theme:{light:a().heading_light,dark:a().heading_dark}}})},8311:function(e,t,n){"use strict";n.r(t),n.d(t,{TalkBalloon:function(){return c}});var r=n(7437),o=n(2265),a=n(5962),i=n.n(a),l=n(8591),s=n(5950);let c=e=>{let{children:t}=e,[n,a]=(0,o.useState)("");return(0,o.useEffect)(()=>{let e=setTimeout(()=>{n.length<t.length&&a(t.slice(0,n.length+1))},0===n.length?500:250-210*Math.random());return()=>clearTimeout(e)},[n]),(0,r.jsxs)("span",{className:i().container,children:[n.length===t.length?(0,r.jsxs)(r.Fragment,{children:[n.slice(0,-1),(0,r.jsx)("span",{className:i().blinking,children:n.slice(-1)})]}):n,(0,r.jsx)(_,{})]})},_=()=>(0,r.jsxs)("div",{className:i().stroke_container,children:[(0,r.jsx)("div",{className:u({orientation:"horizontal-top"})}),(0,r.jsx)("div",{className:u({orientation:"horizontal-bottom"})}),(0,r.jsx)("div",{className:u({orientation:"vertical-right"})}),(0,r.jsx)("div",{className:u({orientation:"vertical-left"})})]}),u=(0,l.j)(i().stroke_line,{variants:{orientation:{"horizontal-top":(0,s.cn)(i().stroke_line_horizontal,i().stroke_line_top),"horizontal-bottom":(0,s.cn)(i().stroke_line_horizontal,i().stroke_line_bottom),"vertical-right":(0,s.cn)(i().stroke_line_vertical,i().stroke_line_right),"vertical-left":(0,s.cn)(i().stroke_line_vertical,i().stroke_line_left)}}})},5950:function(e,t,n){"use strict";n.d(t,{M:function(){return o},cn:function(){return r}});let r=function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return t.filter(Boolean).join(" ")},o=(e,t)=>"/"===e?"/"===t:t.startsWith(e)},3943:function(e){e.exports={message:"not-found_message__TkITm",home_link:"not-found_home_link__GCJtm"}},7972:function(e){e.exports={container:"layout_container__Yj4mF",container_light:"layout_container_light__H7Vxd",container_dark:"layout_container_dark__hgJhw",content:"layout_content__lv8DC"}},2957:function(e){e.exports={container:"pager_container__40ok_",container_open:"pager_container_open__yfy8z",container_close:"pager_container_close__JFuxy",content_wrapper:"pager_content_wrapper__P7O0N",content:"pager_content__r_SRJ",tabs:"pager_tabs__GqYeI",tab:"pager_tab__26oo6",tab_active:"pager_tab_active__a6zyt"}},7405:function(e){e.exports={heading:"section-heading_heading__nNAQl","move-dashes-left":"section-heading_move-dashes-left__B_m0Z","move-dashes-right":"section-heading_move-dashes-right__ePN7A",heading_light:"section-heading_heading_light__se3TX",heading_dark:"section-heading_heading_dark__oqnp5"}},5962:function(e){e.exports={container:"talk-balloon_container__OSYO0",appear:"talk-balloon_appear__abuSY",blinking:"talk-balloon_blinking__FX_Ng",blink:"talk-balloon_blink__r14b6",stroke_container:"talk-balloon_stroke_container__Eqa_U",stroke_line:"talk-balloon_stroke_line__36U87",stroke_line_horizontal:"talk-balloon_stroke_line_horizontal__ooU9g",stroke_line_vertical:"talk-balloon_stroke_line_vertical__GkRAH",stroke_line_top:"talk-balloon_stroke_line_top__NAyu2","stroke-top-transition":"talk-balloon_stroke-top-transition__fhZda",stroke_line_bottom:"talk-balloon_stroke_line_bottom__l2g8T","stroke-bottom-transition":"talk-balloon_stroke-bottom-transition__iEtVv",stroke_line_left:"talk-balloon_stroke_line_left__pInP6","stroke-left-transition":"talk-balloon_stroke-left-transition__qC72W",stroke_line_right:"talk-balloon_stroke_line_right__cmtwb","stroke-right-transition":"talk-balloon_stroke-right-transition__UkZ5U"}}},function(e){e.O(0,[945,971,938,744],function(){return e(e.s=3254)}),_N_E=e.O()}]);