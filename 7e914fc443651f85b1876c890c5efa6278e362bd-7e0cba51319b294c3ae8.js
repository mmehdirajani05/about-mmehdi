"use strict";(self.webpackChunkgatsby_starter_portfolio_minimal_theme=self.webpackChunkgatsby_starter_portfolio_minimal_theme||[]).push([[927],{72:function(e){var t=function(e,t){if("string"!=typeof e&&!Array.isArray(e))throw new TypeError("Expected the input to be `string | string[]`");t=Object.assign({pascalCase:!1},t);var r;return e=Array.isArray(e)?e.map((function(e){return e.trim()})).filter((function(e){return e.length})).join("-"):e.trim(),0===e.length?"":1===e.length?t.pascalCase?e.toUpperCase():e.toLowerCase():(e!==e.toLowerCase()&&(e=function(e){for(var t=!1,r=!1,a=!1,n=0;n<e.length;n++){var i=e[n];t&&/[a-zA-Z]/.test(i)&&i.toUpperCase()===i?(e=e.slice(0,n)+"-"+e.slice(n),t=!1,a=r,r=!0,n++):r&&a&&/[a-zA-Z]/.test(i)&&i.toLowerCase()===i?(e=e.slice(0,n-1)+"-"+e.slice(n-1),a=r,r=!1,t=!0):(t=i.toLowerCase()===i&&i.toUpperCase()!==i,a=r,r=i.toUpperCase()===i&&i.toLowerCase()!==i)}return e}(e)),e=e.replace(/^[_.\- ]+/,"").toLowerCase().replace(/[_.\- ]+(\w|$)/g,(function(e,t){return t.toUpperCase()})).replace(/\d+(\w|$)/g,(function(e){return e.toUpperCase()})),r=e,t.pascalCase?r.charAt(0).toUpperCase()+r.slice(1):r)};e.exports=t,e.exports.default=t},3723:function(e,t,r){r.d(t,{G:function(){return I},L:function(){return m},M:function(){return E},P:function(){return b},_:function(){return o},a:function(){return s},b:function(){return c},g:function(){return u},h:function(){return l}});var a=r(7294),n=(r(72),r(5697)),i=r.n(n);function s(){return s=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e},s.apply(this,arguments)}function o(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)t.indexOf(r=i[a])>=0||(n[r]=e[r]);return n}var l=function(){return"undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype};function c(e,t,r,a,n){return void 0===n&&(n={}),s({},r,{loading:a,shouldLoad:e,"data-main-image":"",style:s({},n,{opacity:t?1:0})})}function u(e,t,r,a,n,i,o,l){var c={};i&&(c.backgroundColor=i,"fixed"===r?(c.width=a,c.height=n,c.backgroundColor=i,c.position="relative"):("constrained"===r||"fullWidth"===r)&&(c.position="absolute",c.top=0,c.left=0,c.bottom=0,c.right=0)),o&&(c.objectFit=o),l&&(c.objectPosition=l);var u=s({},e,{"aria-hidden":!0,"data-placeholder-image":"",style:s({opacity:t?0:1,transition:"opacity 500ms linear"},c)});return u}var d,p=["children"],g=function(e){var t=e.layout,r=e.width,n=e.height;return"fullWidth"===t?a.createElement("div",{"aria-hidden":!0,style:{paddingTop:n/r*100+"%"}}):"constrained"===t?a.createElement("div",{style:{maxWidth:r,display:"block"}},a.createElement("img",{alt:"",role:"presentation","aria-hidden":"true",src:"data:image/svg+xml;charset=utf-8,%3Csvg height='"+n+"' width='"+r+"' xmlns='http://www.w3.org/2000/svg' version='1.1'%3E%3C/svg%3E",style:{maxWidth:"100%",display:"block",position:"static"}})):null},m=function(e){var t=e.children,r=o(e,p);return a.createElement(a.Fragment,null,a.createElement(g,s({},r)),t,null)},h=["src","srcSet","loading","alt","shouldLoad"],f=["fallback","sources","shouldLoad"],y=function(e){var t=e.src,r=e.srcSet,n=e.loading,i=e.alt,l=void 0===i?"":i,c=e.shouldLoad,u=o(e,h);return a.createElement("img",s({},u,{decoding:"async",loading:n,src:c?t:void 0,"data-src":c?void 0:t,srcSet:c?r:void 0,"data-srcset":c?void 0:r,alt:l}))},v=function(e){var t=e.fallback,r=e.sources,n=void 0===r?[]:r,i=e.shouldLoad,l=void 0===i||i,c=o(e,f),u=c.sizes||(null==t?void 0:t.sizes),d=a.createElement(y,s({},c,t,{sizes:u,shouldLoad:l}));return n.length?a.createElement("picture",null,n.map((function(e){var t=e.media,r=e.srcSet,n=e.type;return a.createElement("source",{key:t+"-"+n+"-"+r,type:n,media:t,srcSet:l?r:void 0,"data-srcset":l?void 0:r,sizes:u})})),d):d};y.propTypes={src:n.string.isRequired,alt:n.string.isRequired,sizes:n.string,srcSet:n.string,shouldLoad:n.bool},v.displayName="Picture",v.propTypes={alt:n.string.isRequired,shouldLoad:n.bool,fallback:n.exact({src:n.string.isRequired,srcSet:n.string,sizes:n.string}),sources:n.arrayOf(n.oneOfType([n.exact({media:n.string.isRequired,type:n.string,sizes:n.string,srcSet:n.string.isRequired}),n.exact({media:n.string,type:n.string.isRequired,sizes:n.string,srcSet:n.string.isRequired})]))};var w=["fallback"],b=function(e){var t=e.fallback,r=o(e,w);return t?a.createElement(v,s({},r,{fallback:{src:t},"aria-hidden":!0,alt:""})):a.createElement("div",s({},r))};b.displayName="Placeholder",b.propTypes={fallback:n.string,sources:null==(d=v.propTypes)?void 0:d.sources,alt:function(e,t,r){return e[t]?new Error("Invalid prop `"+t+"` supplied to `"+r+"`. Validation failed."):null}};var E=function(e){return a.createElement(a.Fragment,null,a.createElement(v,s({},e)),a.createElement("noscript",null,a.createElement(v,s({},e,{shouldLoad:!0}))))};E.displayName="MainImage",E.propTypes=v.propTypes;var C,L,k=function(e,t,r){for(var a=arguments.length,n=new Array(a>3?a-3:0),s=3;s<a;s++)n[s-3]=arguments[s];return e.alt||""===e.alt?i().string.apply(i(),[e,t,r].concat(n)):new Error('The "alt" prop is required in '+r+'. If the image is purely presentational then pass an empty string: e.g. alt="". Learn more: https://a11y-style-guide.com/style-guide/section-media.html')},T={image:i().object.isRequired,alt:k},x=["as","image","style","backgroundColor","className","class","onStartLoad","onLoad","onError"],S=["style","className"],_=new Set,O=function(e){var t=e.as,n=void 0===t?"div":t,i=e.image,c=e.style,u=e.backgroundColor,d=e.className,p=e.class,g=e.onStartLoad,m=e.onLoad,h=e.onError,f=o(e,x),y=i.width,v=i.height,w=i.layout,b=function(e,t,r){var a={},n="gatsby-image-wrapper";return"fixed"===r?(a.width=e,a.height=t):"constrained"===r&&(n="gatsby-image-wrapper gatsby-image-wrapper-constrained"),{className:n,"data-gatsby-image-wrapper":"",style:a}}(y,v,w),E=b.style,k=b.className,T=o(b,S),O=(0,a.useRef)(),I=(0,a.useMemo)((function(){return JSON.stringify(i.images)}),[i.images]);p&&(d=p);var q=function(e,t,r){var a="";return"fullWidth"===e&&(a='<div aria-hidden="true" style="padding-top: '+r/t*100+'%;"></div>'),"constrained"===e&&(a='<div style="max-width: '+t+'px; display: block;"><img alt="" role="presentation" aria-hidden="true" src="data:image/svg+xml;charset=utf-8,%3Csvg height=\''+r+"' width='"+t+"' xmlns='http://www.w3.org/2000/svg' version='1.1'%3E%3C/svg%3E\" style=\"max-width: 100%; display: block; position: static;\"></div>"),a}(w,y,v);return(0,a.useEffect)((function(){C||(C=Promise.all([r.e(774),r.e(217)]).then(r.bind(r,9217)).then((function(e){var t=e.renderImageToString,r=e.swapPlaceholderImage;return L=t,{renderImageToString:t,swapPlaceholderImage:r}})));var e,t,a=O.current.querySelector("[data-gatsby-image-ssr]");return a&&l()?(a.complete?(null==g||g({wasCached:!0}),null==m||m({wasCached:!0}),setTimeout((function(){a.removeAttribute("data-gatsby-image-ssr")}),0)):(null==g||g({wasCached:!0}),a.addEventListener("load",(function e(){a.removeEventListener("load",e),null==m||m({wasCached:!0}),setTimeout((function(){a.removeAttribute("data-gatsby-image-ssr")}),0)}))),void _.add(I)):L&&_.has(I)?void 0:(C.then((function(r){var a=r.renderImageToString,n=r.swapPlaceholderImage;O.current&&(O.current.innerHTML=a(s({isLoading:!0,isLoaded:_.has(I),image:i},f)),_.has(I)||(e=requestAnimationFrame((function(){O.current&&(t=n(O.current,I,_,c,g,m,h))}))))})),function(){e&&cancelAnimationFrame(e),t&&t()})}),[i]),(0,a.useLayoutEffect)((function(){_.has(I)&&L&&(O.current.innerHTML=L(s({isLoading:_.has(I),isLoaded:_.has(I),image:i},f)),null==g||g({wasCached:!0}),null==m||m({wasCached:!0}))}),[i]),(0,a.createElement)(n,s({},T,{style:s({},E,c,{backgroundColor:u}),className:k+(d?" "+d:""),ref:O,dangerouslySetInnerHTML:{__html:q},suppressHydrationWarning:!0}))},I=(0,a.memo)((function(e){return e.image?(0,a.createElement)(O,e):null}));I.propTypes=T,I.displayName="GatsbyImage";var q,A=["src","__imageData","__error","width","height","aspectRatio","tracedSVGOptions","placeholder","formats","quality","transformOptions","jpgOptions","pngOptions","webpOptions","avifOptions","blurredOptions","breakpoints","outputPixelDensities"],N=function(e,t){for(var r=arguments.length,a=new Array(r>2?r-2:0),n=2;n<r;n++)a[n-2]=arguments[n];return"fullWidth"!==e.layout||"width"!==t&&"height"!==t||!e[t]?i().number.apply(i(),[e,t].concat(a)):new Error('"'+t+'" '+e[t]+" may not be passed when layout is fullWidth.")},R=new Set(["fixed","fullWidth","constrained"]),z={src:i().string.isRequired,alt:k,width:N,height:N,sizes:i().string,layout:function(e){if(void 0!==e.layout&&!R.has(e.layout))return new Error("Invalid value "+e.layout+'" provided for prop "layout". Defaulting to "constrained". Valid values are "fixed", "fullWidth" or "constrained".')}},j=(q=I,function(e){var t=e.src,r=e.__imageData,n=e.__error,i=o(e,A);return n&&console.warn(n),r?a.createElement(q,s({image:r},i)):(console.warn("Image not loaded",t),null)});j.displayName="StaticImage",j.propTypes=z}}]);
//# sourceMappingURL=7e914fc443651f85b1876c890c5efa6278e362bd-7e0cba51319b294c3ae8.js.map