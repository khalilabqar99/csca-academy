const CACHE_NAME = "csca-academy-v1";
const CORE_ASSETS = ["./index.html", "./manifest.json", "./icon-192.png", "./icon-512.png"];

self.addEventListener("install", function(event) {
  self.skipWaiting();
  event.waitUntil(
    caches.open(CACHE_NAME).then(function(cache) {
      return cache.addAll(CORE_ASSETS).catch(function(){ /* ignore individual failures */ });
    })
  );
});

self.addEventListener("activate", function(event) {
  event.waitUntil(
    caches.keys().then(function(keys) {
      return Promise.all(
        keys.filter(function(k) { return k !== CACHE_NAME; }).map(function(k) { return caches.delete(k); })
      );
    })
  );
  self.clients.claim();
});

// Network-first for navigation/API calls, falling back to cache when offline.
self.addEventListener("fetch", function(event) {
  if (event.request.method !== "GET") return;
  event.respondWith(
    fetch(event.request)
      .then(function(response) {
        const copy = response.clone();
        caches.open(CACHE_NAME).then(function(cache) { cache.put(event.request, copy); });
        return response;
      })
      .catch(function() {
        return caches.match(event.request).then(function(cached) {
          return cached || caches.match("./index.html");
        });
      })
  );
});
