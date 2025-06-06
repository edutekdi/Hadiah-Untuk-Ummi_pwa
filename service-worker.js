const cacheName = 'Hadiah Untuk Ummi-pw'; // nama cache – boleh ubah jika ada versi baru
const assetsToCache = [
  './',
  './index.html',
  './style.css',
  './script.js',
  './manifest.json',
  './audio/audio1.mp3',
  './audio/audio2.mp3',
  './audio/audio4.mp3',
  './audio/audio5.mp3',
  './audio/audio6.mp3',
  './audio/audio7.mp3',
  './audio/audio8.mp3',
  './audio/audio8.mp3',
  './audio/audio9.mp3',
  './audio/audio10.mp3',
  './audio/audio11(1).mp3',
  './audio/audio12.mp3',
  './audio/audio13.mp3',
  './audio/audio14.mp3',
  './audio/betul.mp3',
  './audio/salah.mp3',
  './images/coverdepan.png',
  './images/judul.png',
  './images/halaman3.png',
  './images/halaman4.png',
  './images/halaman5.png',
  './images/halaman6.png',
  './images/halaman7.png',
  './images/halaman8.png',
  './images/halaman9.png',
  './images/halaman10.png',
  './images/halaman11.png',
  './images/halaman12.png',
  './images/halaman13.png',
  './images/halaman14.png',
  './images/halaman15.png',
  './images/halaman16.png',
  './images/coverbelakang.png',
  './images/icon192.png',
  './images/icon512.png'
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
