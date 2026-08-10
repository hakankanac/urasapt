// Basit service worker — uygulamanın telefona "gerçek uygulama" olarak
// kurulabilmesi için tarayıcının istediği asgari şart bu dosyadır.
// Şimdilik özel bir çevrimdışı önbellekleme yapmıyor, sadece isteklerin
// normal şekilde ağdan geçmesine izin veriyor.
self.addEventListener('install', (e) => { self.skipWaiting(); });
self.addEventListener('activate', (e) => { self.clients.claim(); });
self.addEventListener('fetch', (e) => {
  e.respondWith(fetch(e.request).catch(() => caches.match(e.request)));
});
