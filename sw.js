// Albert OBMEPeiro — service worker (funciona offline depois da 1ª visita)
const V = 'albert-v2';
const SHELL = ['./', './index.html', './questoes.js', './firebase-config.js', './manifest.webmanifest', './icons/owl.svg', './icons/icon-192.png', './icons/icon-512.png'];
self.addEventListener('install', e => { e.waitUntil(caches.open(V).then(c => c.addAll(SHELL)).then(() => self.skipWaiting())); });
self.addEventListener('activate', e => { e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k !== V).map(k => caches.delete(k)))).then(() => self.clients.claim())); });
self.addEventListener('fetch', e => {
  const r = e.request; if (r.method !== 'GET') return;
  const url = new URL(r.url);
  if (url.origin === location.origin && /\/pk\/y\d{4}\.js$/.test(url.pathname)) {
    // pacotes de imagens por ano: cache primeiro
    e.respondWith(caches.match(r).then(m => m || fetch(r).then(res => { const cp = res.clone(); caches.open(V).then(c => c.put(r, cp)); return res; })));
    return;
  }
  // demais arquivos: rede primeiro, cache se estiver offline
  e.respondWith(fetch(r).then(res => { if (res.ok && (url.origin === location.origin || url.host.includes('gstatic') || url.host.includes('googleapis'))) { const cp = res.clone(); caches.open(V).then(c => c.put(r, cp)); } return res; }).catch(() => caches.match(r).then(m => m || caches.match('./index.html'))));
});
