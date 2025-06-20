importScripts('./uv.bundle.js');
self.addEventListener('fetch', e => {
  e.respondWith(UV.handler.handleRequest(e.request));
});

