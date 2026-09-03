// ===================================================
// ZAFII MEDPORTAL - SERVICE WORKER (PWA OFFLINE ENGINE)
// Caches core portal assets for instant native app loading
// ===================================================

const CACHE_NAME = 'zafii-medportal-v1';
const ASSETS_TO_CACHE = [
  './',
  './index.html',
  './standalone-offline.html',
  './css/style.css',
  './js/app.js',
  './js/quiz-data.js',
  './js/pdf-generator.js',
  './js/supabase-config.js',
  './manifest.json'
];

// Install Event - Cache Core App Shell
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log('⚡ [ServiceWorker] Caching Portal Shell Assets...');
      return cache.addAll(ASSETS_TO_CACHE);
    }).then(() => self.skipWaiting())
  );
});

// Activate Event - Clean Up Stale Caches
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cache) => {
          if (cache !== CACHE_NAME) {
            console.log('🧹 [ServiceWorker] Clearing Legacy Cache:', cache);
            return caches.delete(cache);
          }
        })
      );
    }).then(() => self.clients.claim())
  );
});

// Fetch Event - Stale-While-Revalidate Network Strategy
self.addEventListener('fetch', (event) => {
  // Ignore non-GET requests or Supabase API calls
  if (event.request.method !== 'GET' || event.request.url.includes('supabase.co')) {
    return;
  }

  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      const fetchPromise = fetch(event.request).then((networkResponse) => {
        if (networkResponse && networkResponse.status === 200) {
          const responseToCache = networkResponse.clone();
          caches.open(CACHE_NAME).then((cache) => {
            cache.put(event.request, responseToCache);
          });
        }
        return networkResponse;
      }).catch(() => cachedResponse);

      return cachedResponse || fetchPromise;
    })
  );
});
