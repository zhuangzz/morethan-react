"use strict";function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}var precacheConfig=[["/morethan-react/index.html","19051ed6c440d21f2500384c82f31927"],["/morethan-react/static/css/main.4cce8452.css","2ce05593faf5ad0457a454ee0549f96b"],["/morethan-react/static/js/main.25b8ee61.js","254d4ef691efe50fa77e6f9165baffd2"],["/morethan-react/static/media/aboutus.50ac3d30.svg","50ac3d305f62bf4e8d1a9a619291be18"],["/morethan-react/static/media/banner1_18.e4f4b088.jpg","e4f4b0889e8f8642e73cae70701f05e0"],["/morethan-react/static/media/banner2_20.b85af368.jpg","b85af3682a8f649cbc70818b57a9aecd"],["/morethan-react/static/media/banner3_22.dd27e498.jpg","dd27e4985a883813475db34ba3c87968"],["/morethan-react/static/media/bgbg_03.cb298ae4.jpg","cb298ae480ffab22199c63aaa2fd1d63"],["/morethan-react/static/media/blog.f79b73f8.svg","f79b73f81811b80b347b92c77c42ce7c"],["/morethan-react/static/media/carbig.ccefb68f.svg","ccefb68f64b0a9b886c43b24a4aa65a7"],["/morethan-react/static/media/fot1_03.11e9a30e.jpg","11e9a30eca47f40b06428bb8617b48d0"],["/morethan-react/static/media/fot2_05.981f47dd.jpg","981f47dd69c9d1209300ec248ec160b5"],["/morethan-react/static/media/friendshipa.4d488c76.svg","4d488c7668c18039289c8d1192b6d88d"],["/morethan-react/static/media/item.4351f893.svg","4351f893b74fcfe9534e62d19275b4e6"],["/morethan-react/static/media/lines.1948c016.svg","1948c016b2a2f853b7145a9a46ec5237"],["/morethan-react/static/media/mainleft_09.27dbf925.png","27dbf92545ad8c1fb208394e4c502751"],["/morethan-react/static/media/neirong_07.d2926f35.jpg","d2926f359bbdd3e97fa5b6f0b64042eb"],["/morethan-react/static/media/newatom.56deb5be.svg","56deb5bea0a6a38df912f10fab422a96"],["/morethan-react/static/media/pay.1caec0e1.svg","1caec0e167cdfe4525d22a411bcd321b"],["/morethan-react/static/media/phone.f3c87830.svg","f3c878303cf5ee54e08e335761202c5e"],["/morethan-react/static/media/question.bd628510.svg","bd628510bc59eb8a5740e750a8c4eeaf"],["/morethan-react/static/media/search.fd183ac8.svg","fd183ac896cabaffbbc13e78b347452d"],["/morethan-react/static/media/shopbag.461cdd29.svg","461cdd296cdab015ac2c4301e888d032"],["/morethan-react/static/media/slick.b7c9e1e4.woff","b7c9e1e479de3b53f1e4e30ebac2403a"],["/morethan-react/static/media/slick.ced611da.eot","ced611daf7709cc778da928fec876475"],["/morethan-react/static/media/slick.d41f55a7.ttf","d41f55a78e6f49a5512878df1737e58a"],["/morethan-react/static/media/slick.f97e3bbf.svg","f97e3bbf73254b0112091d0192f17aec"],["/morethan-react/static/media/taobao.67df2795.svg","67df2795ac71f0e335d2d1b5496af694"],["/morethan-react/static/media/wechat-oc.7efcf5a6.svg","7efcf5a61531328957d255fb95fbe846"],["/morethan-react/static/media/wechatsmall.f1549ce2.svg","f1549ce24b42a714b73d3cbb3e008bd9"],["/morethan-react/static/media/yu_17.733177ef.jpg","733177ef462c576deb7a53c2b2c4b2e5"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,a){var t=new URL(e);return"/"===t.pathname.slice(-1)&&(t.pathname+=a),t.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then(function(a){return new Response(a,{headers:e.headers,status:e.status,statusText:e.statusText})}):Promise.resolve(e)},createCacheKey=function(e,a,t,c){var r=new URL(e);return c&&r.pathname.match(c)||(r.search+=(r.search?"&":"")+encodeURIComponent(a)+"="+encodeURIComponent(t)),r.toString()},isPathWhitelisted=function(e,a){if(0===e.length)return!0;var t=new URL(a).pathname;return e.some(function(e){return t.match(e)})},stripIgnoredUrlParameters=function(e,a){var t=new URL(e);return t.hash="",t.search=t.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return a.every(function(a){return!a.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),t.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var a=e[0],t=e[1],c=new URL(a,self.location),r=createCacheKey(c,hashParamName,t,/\.\w{8}\./);return[c.toString(),r]}));self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(a){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(t){if(!a.has(t)){var c=new Request(t,{credentials:"same-origin"});return fetch(c).then(function(a){if(!a.ok)throw new Error("Request for "+t+" returned a response with status "+a.status);return cleanResponse(a).then(function(a){return e.put(t,a)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var a=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(t){return Promise.all(t.map(function(t){if(!a.has(t.url))return e.delete(t)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var a,t=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching);(a=urlsToCacheKeys.has(t))||(t=addDirectoryIndex(t,"index.html"),a=urlsToCacheKeys.has(t));!a&&"navigate"===e.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],e.request.url)&&(t=new URL("/morethan-react/index.html",self.location).toString(),a=urlsToCacheKeys.has(t)),a&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(t)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(a){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,a),fetch(e.request)}))}});