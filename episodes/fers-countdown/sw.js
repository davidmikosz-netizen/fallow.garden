const CACHE_NAME = 'fers-cache-v1';

// Use absolute paths starting with your subfolder name
const urlsToCache = [
  '/fers/',
  '/fers/index.html',
  '/fers/style.css',
  '/fers/script.js',
  '/fers/manifest.json'
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
