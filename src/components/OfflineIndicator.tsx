
import React, { useState, useEffect } from 'react';
import { Wifi, WifiOff, Download, Check } from 'lucide-react';
import { cn } from '@/lib/utils';
import { toast } from 'sonner';

export default function OfflineIndicator() {
  const [isOnline, setIsOnline] = useState(navigator.onLine);
  const [isInstalled, setIsInstalled] = useState(false);
  
  useEffect(() => {
    // Check if the app is already installed (PWA)
    window.addEventListener('appinstalled', () => {
      setIsInstalled(true);
      toast.success('Aplicativo instalado com sucesso!');
    });
    
    // Update online status when it changes
    const handleOnline = () => {
      setIsOnline(true);
      toast.success('Conectado novamente!');
    };
    
    const handleOffline = () => {
      setIsOnline(false);
      toast.warning('Você está offline. O aplicativo continuará funcionando.');
    };
    
    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);
    
    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  // Function to prompt PWA installation
  const promptInstall = () => {
    // Check if the PWA installation prompt is available
    if (window.deferredPrompt) {
      window.deferredPrompt.prompt();
      window.deferredPrompt.userChoice.then((choiceResult) => {
        if (choiceResult.outcome === 'accepted') {
          console.log('Usuário aceitou a instalação do PWA');
          setIsInstalled(true);
          toast.success('Aplicativo instalado com sucesso!');
        } else {
          console.log('Usuário recusou a instalação do PWA');
        }
        window.deferredPrompt = null;
      });
    } else {
      toast.info('Este aplicativo já pode ser usado offline através do cache. Para instalar como aplicativo, use a opção "Adicionar à tela inicial" no menu do seu navegador.');
    }
  };
  
  return (
    <div className="fixed bottom-4 right-4 flex flex-col gap-2 items-end z-50">
      {isOnline ? (
        <div className="bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-200 px-3 py-1 rounded-full text-xs flex items-center gap-1 opacity-70 transition-opacity hover:opacity-100 shadow-sm">
          <Wifi size={14} />
          <span>Online</span>
        </div>
      ) : (
        <div className="bg-amber-100 dark:bg-amber-900/30 text-amber-800 dark:text-amber-200 px-3 py-1 rounded-full text-xs flex items-center gap-1 shadow-sm">
          <WifiOff size={14} />
          <span>Offline (dados salvos localmente)</span>
        </div>
      )}
      
      {!isInstalled && (
        <button 
          onClick={promptInstall}
          className="bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-200 px-3 py-1 rounded-full text-xs flex items-center gap-1 shadow-sm hover:bg-blue-200 transition-colors"
        >
          <Download size={14} />
          <span>Instalar aplicativo</span>
        </button>
      )}
      
      {isInstalled && (
        <div className="bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-200 px-3 py-1 rounded-full text-xs flex items-center gap-1 shadow-sm">
          <Check size={14} />
          <span>Aplicativo instalado</span>
        </div>
      )}
    </div>
  );
}
