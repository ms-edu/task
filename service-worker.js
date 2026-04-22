self.addEventListener('install', e => {
  self.skipWaiting();
});

self.addEventListener('fetch', e => {
  // passthrough (tidak cache dulu)
});
