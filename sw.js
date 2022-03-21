self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open('fox-store').then((cache) => cache.addAll([
      '/foxes/',
      '/foxes/index.html',
      '/foxes/index.js',
      '/foxes/style.css',
      '/foxes/images/fox1.jpg',
      '/foxes/images/fox2.jpg',
      '/foxes/images/fox3.jpg',
      '/foxes/images/fox4.jpg',
    ])),
  );
});

self.addEventListener('fetch', (e) => {
  console.log(e.request.url);
  e.respondWith(
    caches.match(e.request).then((response) => response || fetch(e.request)),
  );
});
