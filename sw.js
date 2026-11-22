// Pages: network-first so updates show immediately. Static assets: cache-first.
const CACHE = 'shr-v2';
const ASSETS = [
  '/',
  '/index.html',
  '/assets/banner.png',
  '/assets/banner-480.webp',
  '/assets/banner-800.webp',
  '/assets/banner-1200.webp',
  '/assets/banner-1920.webp',
  '/assets/banner-480.avif',
  '/assets/banner-800.avif',
  '/assets/banner-1200.avif',
  '/assets/banner-1920.avif',
  '/assets/banner-1200.png'
];

self.addEventListener('install', (e) => {
  e.waitUntil(caches.open(CACHE).then((c) => c.addAll(ASSETS)).catch(() => {}));
  self.skipWaiting();
});

self.addEventListener('activate', (e) => {
  e.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys.filter((k) => k !== CACHE).map((k) => caches.delete(k)))
    ).then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (e) => {
  const req = e.request;
  if (req.method !== 'GET') return;
  if (new URL(req.url).origin !== self.location.origin) return;

  // HTML/navigation: try network first, fall back to cached page offline.
  if (req.mode === 'navigate' || (req.headers.get('accept') || '').includes('text/html')) {
    e.respondWith(
      fetch(req).then((res) => {
        if (res && res.status === 200) {
          const clone = res.clone();
          caches.open(CACHE).then((c) => c.put(req, clone));
        }
        return res;
      }).catch(() => caches.match(req).then((cached) => cached || caches.match('/index.html')))
    );
    return;
  }

  // Static assets: cache-first.
  e.respondWith(
    caches.match(req).then((cached) => {
      const fetchPromise = fetch(req).then((res) => {
        if (res && res.status === 200) {
          const clone = res.clone();
          caches.open(CACHE).then((c) => c.put(req, clone));
        }
        return res;
      }).catch(() => cached || new Response('', { status: 504 }));
      return cached || fetchPromise;
    })
  );
});
