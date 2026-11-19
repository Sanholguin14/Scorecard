/* Los marcadores de build y de lista de archivos los reemplaza scripts/inject-sw.mjs al hacer build. */
const CACHE = 'scorecard-mwn0utge';
const PRECACHE = ["./","./apple-touch-icon.png","./icon-192.png","./icon-512.png","./icon-maskable-512.png","./index-C6nHm8kh.css","./index-CGM2zq3P.js","./index.html","./libre-caslon-display-latin-400-normal-BbfEE5V2.woff","./libre-caslon-display-latin-400-normal-n_DgBRfq.woff2","./libre-caslon-text-latin-400-italic-C1OAqZ6C.woff","./libre-caslon-text-latin-400-italic-snTzlHlN.woff2","./libre-caslon-text-latin-400-normal-CfldDPV-.woff2","./libre-caslon-text-latin-400-normal-WtjoQ5sB.woff","./libre-caslon-text-latin-700-normal-B3n-DWsl.woff","./libre-caslon-text-latin-700-normal-D1WVYPaO.woff2","./manifest.webmanifest"];

self.addEventListener('install', (e) => {
  e.waitUntil(caches.open(CACHE).then((c) => c.addAll(PRECACHE)).then(() => self.skipWaiting()));
});

self.addEventListener('activate', (e) => {
  e.waitUntil(
    caches.keys()
      .then((keys) => Promise.all(keys.filter((k) => k !== CACHE).map((k) => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

/* Red primero para HTML (si hay señal siempre agarra la última versión),
   caché primero para el resto. Sin señal todo abre igual. */
self.addEventListener('fetch', (e) => {
  const req = e.request;
  if (req.method !== 'GET' || new URL(req.url).origin !== location.origin) return;
  const isPage = req.mode === 'navigate';
  e.respondWith(
    isPage
      ? fetch(req).then((r) => { const c = r.clone(); caches.open(CACHE).then((x) => x.put(req, c)); return r; })
          .catch(() => caches.match(req).then((r) => r || caches.match('./index.html')))
      : caches.match(req).then((hit) => hit || fetch(req).then((r) => {
          const c = r.clone(); caches.open(CACHE).then((x) => x.put(req, c)); return r;
        }))
  );
});
