// Simple SW registration
export function registerServiceWorker() {
  if (typeof window === 'undefined') return;
  if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      navigator.serviceWorker.register('/service-worker.js').catch((err) => {
        console.log('SW registration failed', err);
      });
    });
  }
}
