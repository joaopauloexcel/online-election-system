import { useEffect } from 'react';
import { toast } from 'react-hot-toast';
import { useLocation } from 'react-router-dom';

type ToastType = 'success' | 'error' | 'default';

export const sendToastToOtherTabs = (type: ToastType, message: string) => {
  const toastData = { type, message, timestamp: Date.now() };
  localStorage.setItem('cross-tab-toast', JSON.stringify(toastData));
};

const useToastSync = () => {
  const location = useLocation();

  useEffect(() => {
    const handler = (e: StorageEvent) => {
      if (e.key === 'cross-tab-toast' && e.newValue) {
        const { type, message }: { type: ToastType; message: string } = JSON.parse(e.newValue);

        if (['/apuracao'].includes(location.pathname)) {
          const toastMap: Record<ToastType, (msg: string) => void> = {
            success: toast.success,
            error: toast.error,
            default: toast,
          };

          toastMap[type](message);
        }
      }
    };

    window.addEventListener('storage', handler);
    return () => window.removeEventListener('storage', handler);
  }, [location.pathname]);
};

export default useToastSync;