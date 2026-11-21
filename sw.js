// Lưu sẵn app để mở được khi không có mạng
const CACHE="so-thu-chi-v1";
const CORE=["./","./index.html","./manifest.json","./icon-192.png","./icon-512.png",
  "https://cdnjs.cloudflare.com/ajax/libs/xlsx/0.18.5/xlsx.full.min.js"];
self.addEventListener("install",e=>{e.waitUntil(caches.open(CACHE).then(c=>c.addAll(CORE)).then(()=>self.skipWaiting()))});
self.addEventListener("activate",e=>{e.waitUntil(caches.keys().then(ks=>Promise.all(ks.filter(k=>k!==CACHE).map(k=>caches.delete(k)))).then(()=>self.clients.claim()))});
self.addEventListener("fetch",e=>{
  if(e.request.method!=="GET")return;
  e.respondWith(caches.match(e.request).then(hit=>{
    const net=fetch(e.request).then(r=>{if(r.ok||r.type==="opaque"){const cp=r.clone();caches.open(CACHE).then(c=>c.put(e.request,cp))}return r}).catch(()=>hit);
    return hit||net;
  }));
});
