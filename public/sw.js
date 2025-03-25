
// Service worker for offline functionality
const CACHE_NAME = 'sci-form-cache-v1';
const urlsToCache = [
  '/',
  '/index.html',
  '/src/main.tsx',
  '/src/index.css',
  '/src/App.css',
  '/favicon.ico',
  '/lovable-uploads/cd7d2eec-9685-4c6c-9bd8-f0b444b0b886.png',
  'https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js',
  'https://cdnjs.cloudflare.com/ajax/libs/html2canvas/1.4.1/html2canvas.min.js'
];

// Install event - cache important files
self.addEventListener('install', event => {
  console.log('Service Worker instalado');
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('Cache aberto');
        return cache.addAll(urlsToCache);
      })
      .catch(error => {
        console.error('Erro ao cachear recursos:', error);
      })
  );
  // Ativar o service worker imediatamente
  self.skipWaiting();
});

// Activate event - clean up old caches and take control immediately
self.addEventListener('activate', event => {
  console.log('Service Worker ativado');
  const cacheWhitelist = [CACHE_NAME];
  
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheWhitelist.indexOf(cacheName) === -1) {
            console.log('Removendo cache antigo:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    })
    .then(() => {
      console.log('Service Worker agora controla todas as páginas');
      return self.clients.claim();
    })
  );
});

// Fetch event - serve cached content when offline
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        // Cache hit - return the response from cache
        if (response) {
          console.log('Servindo da cache:', event.request.url);
          return response;
        }
        
        console.log('Recurso não encontrado em cache, buscando da rede:', event.request.url);
        
        // Clone the request because it's a one-time use stream
        const fetchRequest = event.request.clone();
        
        return fetch(fetchRequest)
          .then(response => {
            // Check if we received a valid response
            if (!response || response.status !== 200 || response.type !== 'basic') {
              console.log('Não armazenando em cache:', event.request.url);
              return response;
            }
            
            // Clone the response because it's a one-time use stream
            const responseToCache = response.clone();
            
            caches.open(CACHE_NAME)
              .then(cache => {
                // Don't cache API requests or external resources that aren't already in urlsToCache
                if (event.request.url.includes('/api/') || 
                    (!event.request.url.startsWith(self.location.origin) && 
                     !urlsToCache.includes(event.request.url))) {
                  return;
                }
                console.log('Armazenando em cache:', event.request.url);
                cache.put(event.request, responseToCache);
              });
              
            return response;
          })
          .catch(error => {
            console.log('Erro na rede, tentando servir a página inicial:', error);
            // If fetch fails (offline), try to return a cached version of index.html
            return caches.match('/index.html');
          });
      })
  );
});

// Listen for messages from clients
self.addEventListener('message', event => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});
