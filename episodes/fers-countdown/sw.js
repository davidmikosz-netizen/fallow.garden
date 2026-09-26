const CACHE_NAME = 'fers-cache-v1';

// Use absolute paths starting with your subfolder name
const urlsToCache = [
  '/fers-countdown/',
  '/fers-countdown/index.html',
  '/fers-coundown/style.css',
  '/fers-countdown/script.js',
  '/fers-countdown/manifest.json'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        return cache.addAll(urlsToCache);
      })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        return response || fetch(event.request);
      })
  );
});
