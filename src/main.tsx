
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

// Register the service worker for offline functionality
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/sw.js')
      .then(registration => {
        console.log('Service Worker registrado com sucesso:', registration.scope);
        
        // Check for updates
        registration.addEventListener('updatefound', () => {
          const newWorker = registration.installing;
          console.log('Novo Service Worker encontrado!', newWorker);
          
          // Notify user of update if needed
          if (newWorker) {
            newWorker.addEventListener('statechange', () => {
              if (newWorker.state === 'installed' && navigator.serviceWorker.controller) {
                console.log('Nova versão disponível!');
                // You could show a notification here
              }
            });
          }
        });
      })
      .catch(error => {
        console.error('Falha no registro do Service Worker:', error);
      });
    
    // Handle offline/online status changes
    window.addEventListener('online', () => {
      console.log('Aplicação está online');
    });
    
    window.addEventListener('offline', () => {
      console.log('Aplicação está offline');
    });
  });
}

createRoot(document.getElementById("root")!).render(<App />);
