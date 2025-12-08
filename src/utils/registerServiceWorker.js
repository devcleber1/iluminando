// Service Worker Register
// Este arquivo registra o Service Worker quando a página carrega

export function registerServiceWorker() {
  if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      navigator.serviceWorker
        .register('/sw.js', { scope: '/' })
        .then((registration) => {
          console.log('Service Worker registrado com sucesso:', registration);
          
          // Verificar updates periodicamente
          setInterval(() => {
            registration.update();
          }, 60000); // A cada 60 segundos
        })
        .catch((error) => {
          console.warn('Erro ao registrar Service Worker:', error);
        });
    });

    // Avisar usuário sobre atualizações
    navigator.serviceWorker.addEventListener('controllerchange', () => {
      console.log('Service Worker atualizado');
      // Aqui você pode avisar o usuário sobre uma nova versão disponível
    });
  }
}

// Função para forçar atualização do Service Worker
export function forceUpdateServiceWorker() {
  if ('serviceWorker' in navigator && navigator.serviceWorker.controller) {
    navigator.serviceWorker.controller.postMessage({ type: 'SKIP_WAITING' });
    window.location.reload();
  }
}

// Função para limpar cache manualmente
export function clearCache() {
  if ('caches' in window) {
    caches.keys().then((cacheNames) => {
      cacheNames.forEach((cacheName) => {
        caches.delete(cacheName);
      });
    });
  }
}
