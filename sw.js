// =============================================================================
// SERVICE WORKER · JPEREZCOACH (OFFLINE PWA - NETWORK FIRST)
// =============================================================================

const CACHE_NAME = 'jperezcoach-v3';

const ASSETS_TO_CACHE = [
  './',
  './index.html',
  './styles.css?v=8',
  './app.js?v=3',
  './routine-data.js?v=3',
  './ejercicios-db.js?v=3',
  './rutinas-personalizadas.js?v=3',
  './pdf-rutina-parser.js?v=3',
  './rutina-pdf-ui.js?v=3',
  './manifest.webmanifest',
  './icon.png',
  './icon-192.png',
  './icon-512.png',
  './icon-512-maskable.png',
  './apple-touch-icon.png',
  './favicon-32.png',
  './icon.svg',
  './banner.jpg',
  './coach.png',
  './lib/pdf.min.js',
  './lib/pdf.worker.min.js'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(ASSETS_TO_CACHE).catch(err => {
        console.warn('Recursos cacheados con advertencias:', err);
      });
    }).then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys => {
      return Promise.all(
        keys.filter(key => key !== CACHE_NAME).map(key => caches.delete(key))
      );
    }).then(() => self.clients.claim())
  );
});

// Estrategia Network-First para cargar siempre la última versión y respaldar en offline
self.addEventListener('fetch', event => {
  if (event.request.method !== 'GET') return;

  const url = new URL(event.request.url);
  if (url.origin !== location.origin) {
    return; // No cachear YouTube ni recursos externos
  }

  event.respondWith(
    fetch(event.request)
      .then(networkResponse => {
        if (networkResponse && networkResponse.status === 200 && networkResponse.type === 'basic') {
          const responseToCache = networkResponse.clone();
          caches.open(CACHE_NAME).then(cache => {
            cache.put(event.request, responseToCache);
          });
        }
        return networkResponse;
      })
      .catch(() => {
        return caches.match(event.request).then(cached => {
          if (cached) return cached;
          if (event.request.destination === 'document') {
            return caches.match('./index.html');
          }
        });
      })
  );
});
