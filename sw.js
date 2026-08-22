/* VISOR service worker — cache-first for app shell, network-first for APIs. */
const CACHE_NAME = 'visor-v2';
const APP_SHELL = [
    './',
    './index.html',
    './site.webmanifest',
    './favicon.ico',
    './favicon-16x16.png',
    './favicon-32x32.png',
    './apple-touch-icon.png',
    './android-chrome-192x192.png',
    './android-chrome-512x512.png',
    'https://cdn.jsdelivr.net/npm/chart.js@4.4.3/dist/chart.umd.min.js'
];

self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME).then((cache) => cache.addAll(APP_SHELL))
            .then(() => self.skipWaiting())
    );
});

self.addEventListener('activate', (event) => {
    event.waitUntil(
        caches.keys().then((keys) =>
            Promise.all(keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k)))
        ).then(() => self.clients.claim())
    );
});

self.addEventListener('fetch', (event) => {
    const url = new URL(event.request.url);

    // Live data (weather / geocoding / Overpass): network-first with cache fallback,
    // so the dashboard still renders offline from the last successful response.
    if (url.hostname.includes('open-meteo.com') || url.hostname.includes('overpass-api.de')) {
        event.respondWith(
            fetch(event.request)
                .then((response) => {
                    const copy = response.clone();
                    caches.open(CACHE_NAME).then((cache) => cache.put(event.request, copy));
                    return response;
                })
                .catch(() => caches.match(event.request))
        );
        return;
    }

    // App shell: cache-first, revalidate in background.
    event.respondWith(
        caches.match(event.request).then((cached) => {
            const refresh = fetch(event.request).then((response) => {
                const copy = response.clone();
                caches.open(CACHE_NAME).then((cache) => cache.put(event.request, copy));
                return response;
            }).catch(() => cached);
            return cached || refresh;
        })
    );
});
