"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7550],{7550:function(t,e,n){let r,a,l,o,i,s,u,d,c,f;n.r(e);let g=(r={},o=0,i=!0,s=!0,u=!1,d=!1,f={duration:600,interval:-.7,percentage:.75,enable:!0,docSlider:!1,pageChangeReset:!1},r={setEvents:function(t){let e=function(){i&&(requestAnimationFrame(function(){i=!0,s&&(r.setQuery(),r.runQuery())}),i=!1)};if(s&&!t&&window.addEventListener("load",r.runQuery),window.addEventListener("scroll",e),u){let t=docSlider.getElements().pages;for(let n=0;n<t.length;n++)t[n].addEventListener("scroll",function(t){if(docSlider.getCurrentIndex()+""!==t.target.getAttribute("data-ds-index"))return!1;docSlider._getWheelEnable()&&e()})}window.addEventListener("resize",function(){o>0&&clearTimeout(o),o=setTimeout(function(){s&&(r.searchElements(),r.setQuery(),r.runQuery())},200)})},setOptions:function(t,e){let n={};if(void 0!==t)return Object.keys(t).forEach(function(a){"[object Object]"===Object.prototype.toString.call(t[a])?n[a]=r.setOptions(t[a],e[a]):(n[a]=t[a],void 0!==e&&void 0!==e[a]&&(n[a]=e[a]))}),n},searchElements:function(){let t,e;a=[],t=document.querySelectorAll("[data-cues]:not([data-disabled])");for(let e=0;e<t.length;e++){let n=t[e];for(let t=0;t<n.children.length;t++){let e=n.children[t];r.setAttrPtoC(e,"data-cue",n,"data-cues",""),r.setAttrPtoC(e,"data-duration",n,"data-duration",!1),r.setAttrPtoC(e,"data-interval",n,"data-interval",!1),r.setAttrPtoC(e,"data-sort",n,"data-sort",!1),r.setAttrPtoC(e,"data-addClass",n,"data-addClass",!1),r.setAttrPtoC(e,"data-group",n,"data-group",!1),r.setAttrPtoC(e,"data-delay",n,"data-delay",!1)}n.setAttribute("data-disabled","true")}e=document.querySelectorAll('[data-cue]:not([data-show="true"])');for(let t=0;t<e.length;t++){let n=e[t];a.push({elm:n,cue:r.getAttr(n,"data-cue","fadeIn"),duration:Number(r.getAttr(n,"data-duration",c.duration)),interval:Number(r.getAttr(n,"data-interval",c.interval)),order:r.getOrderNumber(n),sort:r.getAttr(n,"data-sort",null),addClass:r.getAttr(n,"data-addClass",null),group:r.getAttr(n,"data-group",null),delay:Number(r.getAttr(n,"data-delay",0))})}if(u){let t=docSlider.getElements().pages.length;for(let e=0;e<t;e++){let t=document.querySelectorAll('[data-ds-index="'+e+'"] [data-cue]:not([data-scpage])');for(let n=0;n<t.length;n++)t[n].setAttribute("data-scpage",e)}}},sortElements:function(){let t=arguments[0],e=[].slice.call(arguments).slice(1);for(let n=0;n<e.length;n++)t.sort(function(t,r){let a=void 0===e[n][1]||e[n][1],l=e[n][0];return t[l]>r[l]?a?1:-1:t[l]<r[l]?a?-1:1:0})},randElements:function(t){for(let e=t.length-1;e>0;e--){let n=Math.floor(Math.random()*(e+1)),r=t[e];t[e]=t[n],t[n]=r}return t},setDurationValue:function(t,e,n){if(void 0===e)return t;let r=t,a=e.duration;return(r=-1!==(n+"").indexOf(".")?r+a+a*n:r+a+n)<0?0:r},getOrderNumber:function(t){if(!t.hasAttribute("data-order"))return 0xfffffffffffff;{let e=Number(t.getAttribute("data-order"));return e>=0?e:9007199254740991+e}},setAttrPtoC:function(t,e,n,r,a){n.hasAttribute(r)?t.hasAttribute(e)||t.setAttribute(e,n.getAttribute(r)):!1!==a&&t.setAttribute(e,a)},getAttr:function(t,e,n){return t.hasAttribute(e)?t.getAttribute(e):n},getOffsetTop:function(t){let e=t.getBoundingClientRect(),n=window.pageYOffset||document.documentElement.scrollTop;return e.top+n},setClassNames:function(t,e){if(!e)return;let n=e.split(" ");for(let e=0;e<n.length;e++)t.classList.add(n[e])},setQuery:function(){l={};for(let t=0;t<a.length;t++){let e=a[t],n=e.group?e.group:"$"+r.getOffsetTop(e.elm);if(!e.elm.hasAttribute("data-show")){if(u){let t=e.elm.getAttribute("data-scpage");if(t!==docSlider.getCurrentIndex()+""&&null!==t)continue}void 0===l[n]&&(l[n]=[]),l[n].push(e)}}},runQuery:function(){let t=Object.keys(l);for(let n=0;n<t.length;n++){let a=l[t[n]];if(r.isElementIn(a[0].elm)){"reverse"===a[0].sort?a.reverse():"random"===a[0].sort&&r.randElements(a),r.sortElements(a,["order"]);let o=0;for(let t=0;t<a.length;t++){var e;a[e=t].elm.setAttribute("data-show","true"),r.setClassNames(a[e].elm,a[e].addClass),o=r.setDurationValue(o,a[e-1],a[e].interval),a[e].elm.style.animationName=a[e].cue,a[e].elm.style.animationDuration=a[e].duration+"ms",a[e].elm.style.animationTimingFunction="ease",a[e].elm.style.animationDelay=o+a[e].delay+"ms",a[e].elm.style.animationDirection="normal",a[e].elm.style.animationFillMode="both"}delete l[t[n]]}}},isElementIn:function(t){let e=t.hasAttribute("data-scpage")?r.isScrollEndWithDocSlider:r.isScrollEnd;return window.pageYOffset>r.getOffsetTop(t)-window.innerHeight*c.percentage||e()},isScrollEnd:function(){let t=window.document.body,e=window.document.documentElement;return(t.scrollTop||e.scrollTop)>=e.scrollHeight-e.clientHeight},isScrollEndWithDocSlider:function(){let t=docSlider.getCurrentPage();return t.scrollTop>=t.scrollHeight-t.clientHeight}},{init:function(t){s=(c=r.setOptions(f,t)).enable,u=c.docSlider,d=c.pageChangeReset,u||(r.setEvents(),r.searchElements(),r.setQuery())},update:function(){s&&(r.searchElements(),r.setQuery(),r.runQuery())},enable:function(t){s=void 0===t?!s:t,g.update()},_hasDocSlider:function(){return u},_hasPageChangeReset:function(){return d},_initWithDocSlider:function(t){r.setEvents(t),r.searchElements(),r.setQuery()},_updateWithDocSlider:function(){s&&(r.setQuery(),r.runQuery())},_searchElements:function(){r.searchElements()}});e.default=g}}]);