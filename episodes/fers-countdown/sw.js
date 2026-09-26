const CACHE_NAME = 'fers-cache-v1';

// Only list files that actually exist in your directory
const urlsToCache = [
  '/fers-countdown/',
  '/fers-countdown/index.html',
  '/fers-countdown/manifest.json',
  '/fers-countdown/icon-192x192.png',
  '/fers-countdown/icon-512x512.png'
];

// Install the service worker and cache the files
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        return cache.addAll(urlsToCache);
      })
  );
});

// Activate the service worker and delete old caches when the version updates
self.addEventListener('activate', event => {
  const cacheWhitelist = [CACHE_NAME];
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheWhitelist.indexOf(cacheName) === -1) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});

// Serve cached files when offline
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        return response || fetch(event.request);
      })
  );
});
