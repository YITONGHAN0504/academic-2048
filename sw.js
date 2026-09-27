const CACHE="academic2048-v7.0.0";
const ASSETS=["./","./index.html","./site-config.js","./site.webmanifest","./assets/logo.svg","./assets/favicon.svg","./assets/icon-192.png","./assets/icon-512.png","./assets/og-card.png"];
self.addEventListener("install",e=>e.waitUntil(caches.open(CACHE).then(c=>c.addAll(ASSETS))));
self.addEventListener("activate",e=>e.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k!==CACHE).map(k=>caches.delete(k))))));
self.addEventListener("fetch",e=>{
  if(e.request.method!=="GET")return;
  e.respondWith(caches.match(e.request).then(r=>r||fetch(e.request).then(resp=>{
    const copy=resp.clone();caches.open(CACHE).then(c=>c.put(e.request,copy));return resp;
  }).catch(()=>caches.match("./index.html"))));
});
