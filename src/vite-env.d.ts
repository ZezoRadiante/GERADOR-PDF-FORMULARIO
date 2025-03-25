
/// <reference types="vite/client" />

// Extend Window interface to include the deferredPrompt property
interface BeforeInstallPromptEvent extends Event {
  readonly platforms: string[];
  prompt(): Promise<{
    outcome: 'accepted' | 'dismissed';
  }>;
  userChoice: Promise<{
    outcome: 'accepted' | 'dismissed';
  }>;
}

interface Window {
  deferredPrompt: BeforeInstallPromptEvent | null;
}
