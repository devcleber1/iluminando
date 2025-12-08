// Service Worker para Iluminando o Futuro
const CACHE_NAME = 'iluminando-v1';
const ASSETS_TO_CACHE = [
  '/',
  '/index.html',
  '/iluminando.png',
  '/manifest.json',
];

// Instalar Service Worker
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(ASSETS_TO_CACHE);
    })
  );
  self.skipWaiting();
});

// Ativar Service Worker
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
  self.clients.claim();
});

// Fetch - Cache First, Network Fallback
self.addEventListener('fetch', (event) => {
  const { request } = event;
  const url = new URL(request.url);

  // Ignorar requisições de API externas e non-GET
  if (request.method !== 'GET') {
    return;
  }

  // Estratégia diferente para documentos HTML
  if (request.headers.get('accept')?.includes('text/html')) {
    event.respondWith(
      fetch(request)
        .then((response) => {
          // Clone e cache a resposta
          const responseToCache = response.clone();
          caches.open(CACHE_NAME).then((cache) => {
            cache.put(request, responseToCache);
          });
          return response;
        })
        .catch(() => {
          // Fallback para cache em caso de erro
          return caches.match(request).then((cached) => {
            return cached || caches.match('/index.html');
          });
        })
    );
  } else {
    // Estratégia Cache First para assets
    event.respondWith(
      caches.match(request).then((cached) => {
        if (cached) {
          return cached;
        }
        return fetch(request)
          .then((response) => {
            // Cache assets
            if (
              response.status === 200 &&
              (request.url.match(/\.(js|css|png|jpg|jpeg|webp|woff|woff2|ttf|otf|svg)$/i) ||
                url.pathname.includes('/public/'))
            ) {
              const responseToCache = response.clone();
              caches.open(CACHE_NAME).then((cache) => {
                cache.put(request, responseToCache);
              });
            }
            return response;
          })
          .catch(() => {
            // Placeholder para imagens que não carregaram
            if (request.destination === 'image') {
              return new Response(
                '<svg xmlns="http://www.w3.org/2000/svg" width="200" height="200"><rect fill="#ddd" width="200" height="200"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" font-size="12" fill="#999">Offline</text></svg>',
                { headers: { 'Content-Type': 'image/svg+xml' } }
              );
            }
          });
      })
    );
  }
});

// Background Sync (sincronizar quando voltar online)
self.addEventListener('sync', (event) => {
  if (event.tag === 'sync-data') {
    event.waitUntil(syncData());
  }
});

async function syncData() {
  try {
    // Sincronizar dados quando voltar online
    console.log('Sincronizando dados...');
  } catch (error) {
    console.error('Erro ao sincronizar:', error);
  }
}

// Push notifications
self.addEventListener('push', (event) => {
  const data = event.data?.json() ?? {};
  const title = data.title || 'Iluminando o Futuro';
  const options = {
    body: data.body || 'Temos novidades para você',
    icon: '/iluminando.png',
    badge: '/iluminando.png',
    tag: 'iluminando-notification',
    requireInteraction: false,
  };

  event.waitUntil(self.registration.showNotification(title, options));
});

// Clique em notificação
self.addEventListener('notificationclick', (event) => {
  event.notification.close();
  event.waitUntil(
    clients.matchAll({ type: 'window', includeUncontrolled: true }).then((clientList) => {
      for (let i = 0; i < clientList.length; i++) {
        const client = clientList[i];
        if (client.url === '/' && 'focus' in client) {
          return client.focus();
        }
      }
      if (clients.openWindow) {
        return clients.openWindow('/');
      }
    })
  );
});
