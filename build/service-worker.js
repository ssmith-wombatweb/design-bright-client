"use strict";var precacheConfig=[["/index.html","257ad148f0d1ea9d5b7470628febd3ae"],["/static/css/main.653da357.css","521def3ae35e5b12d25e0300c45174f2"],["/static/js/0.3f8897d5.chunk.js","c8e8cd51805c6c09dd98bae0f811f7a5"],["/static/js/1.29de7642.chunk.js","4215acc6f8eaf03cd3f831a6cd64e82d"],["/static/js/10.bb4c8c39.chunk.js","561cf5c1235d57442cd350a3ed2c6735"],["/static/js/11.edc0e336.chunk.js","19d9d35e611f725cae344a25ff13a874"],["/static/js/2.0a9f4a94.chunk.js","c5bc780262a49ef23c37ed855f61aa45"],["/static/js/3.a39f635c.chunk.js","772f9d6593d10eb56bfa513d881016ef"],["/static/js/4.9ce4ce10.chunk.js","4a07be327da0bdee7764de3086a055b8"],["/static/js/5.e0c94c3e.chunk.js","6773089c2d28463e15af31e9f38e577f"],["/static/js/6.1c1a1f33.chunk.js","a0b2362a99f4cd4cda2938657228166d"],["/static/js/7.8310ea11.chunk.js","a61327c8379a916d46d964d8125bd963"],["/static/js/8.571d78ec.chunk.js","e0202a4301d7214c5d3f8567c13b113c"],["/static/js/9.1571011f.chunk.js","1dd71a4aa6a52c8a000fa3763700f1b6"],["/static/js/main.63d869b2.js","68a225f172420c68b9a04dc74c0a8526"],["/static/media/bird.379a7a4e.jpg","379a7a4e7537c34f3ae6eec077bccf63"],["/static/media/blue-brush-btn.5636e544.png","5636e54469ca48e60ecd416fa4cb0d55"],["/static/media/blue-brush.02499a4f.png","02499a4fd62035bfee89406e293f8bca"],["/static/media/flag-home.1b265a75.jpg","1b265a75f86e8fd245b451acfd37f3f4"],["/static/media/grey-brush.516368e9.png","516368e96818c004d318194de4bf15cd"],["/static/media/logo-large.500049ef.png","500049efcebf45e27ab138ccdce9169d"],["/static/media/logo-retina.9d99c53d.png","9d99c53d0c2817c163a4a755a98c21ae"],["/static/media/orange-brush-btn.856bc5a7.png","856bc5a7d5c42dc54c01faa432b9f83c"],["/static/media/orange-brush1.8b2abd28.png","8b2abd2885202fc576f13c21aca8982d"],["/static/media/paper-bg.6ff58212.png","6ff58212329ed47c37a68537974f603a"],["/static/media/red-brush.f8ffb539.png","f8ffb539794ed441fe62ff415e171fe9"],["/static/media/select-chevron.50e75c1d.svg","50e75c1d5646a205edd6b3b78e6e66cd"],["/static/media/stalks.aa9056db.jpg","aa9056db0c18e6a6d6ea129fd5069ef8"],["/static/media/sunset-marsh.7ef80766.jpg","7ef80766424590bdfad58bcb1afeaee1"],["/static/media/veteran.9b230979.jpg","9b230979dce281df79ca8cfbaf50ce57"],["/static/media/yellow-brush2.ce13b28e.png","ce13b28eb0248c9e2f300cd2bb9525dc"],["/static/media/yellow-brush5.025bcc94.png","025bcc94bf4faae4a5aee3d5b9a44f20"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,a){var t=new URL(e);return"/"===t.pathname.slice(-1)&&(t.pathname+=a),t.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then(function(a){return new Response(a,{headers:e.headers,status:e.status,statusText:e.statusText})}):Promise.resolve(e)},createCacheKey=function(e,a,t,c){var n=new URL(e);return c&&n.pathname.match(c)||(n.search+=(n.search?"&":"")+encodeURIComponent(a)+"="+encodeURIComponent(t)),n.toString()},isPathWhitelisted=function(e,a){if(0===e.length)return!0;var t=new URL(a).pathname;return e.some(function(e){return t.match(e)})},stripIgnoredUrlParameters=function(e,a){var t=new URL(e);return t.hash="",t.search=t.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return a.every(function(a){return!a.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),t.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var a=e[0],t=e[1],c=new URL(a,self.location),n=createCacheKey(c,hashParamName,t,/\.\w{8}\./);return[c.toString(),n]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(a){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(t){if(!a.has(t)){var c=new Request(t,{credentials:"same-origin"});return fetch(c).then(function(a){if(!a.ok)throw new Error("Request for "+t+" returned a response with status "+a.status);return cleanResponse(a).then(function(a){return e.put(t,a)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var a=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(t){return Promise.all(t.map(function(t){if(!a.has(t.url))return e.delete(t)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var a,t=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching),c="index.html";(a=urlsToCacheKeys.has(t))||(t=addDirectoryIndex(t,c),a=urlsToCacheKeys.has(t));var n="/index.html";!a&&"navigate"===e.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],e.request.url)&&(t=new URL(n,self.location).toString(),a=urlsToCacheKeys.has(t)),a&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(t)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(a){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,a),fetch(e.request)}))}});