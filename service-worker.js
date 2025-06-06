const cacheName = 'Hadiah Untuk Ummi-pw'; // nama cache – boleh ubah jika ada versi baru
const assetsToCache = [
  './',
  './index.html',
  './style.css',
  './script.js',
  './manifest.json',
  './audio/audio1.mp3',
  './images/ilustrasi1.png',
  './images/icon-192.png',
  './images/icon-512.png'
];

// Simpan fail semasa pemasangan awal
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(cacheName).then(cache => {
      return cache.addAll(assetsToCache);
    })
  );
});

// Aktifkan service worker dan buang cache lama jika ada
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys => {
      return Promise.all(
        keys.filter(key => key !== cacheName).map(key => caches.delete(key))
      );
    })
  );
});

// Baca dari cache jika offline
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});
