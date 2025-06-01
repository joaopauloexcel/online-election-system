import { useEffect } from 'react';

import { useEleicaoStore } from '@/presentation/store';

const useEleicaoSync = () => {
  useEffect(() => {
    const syncStore = (e: StorageEvent) => {
      if (e.key === 'eleicao-store' && e.newValue) {
        const { state } = JSON.parse(e.newValue);
        useEleicaoStore.setState({
          candidatos: state.candidatos,
          eleicao: state.eleicao
        });
      }
    };

    window.addEventListener('storage', syncStore);
    return () => window.removeEventListener('storage', syncStore);
  }, []);
}

export default useEleicaoSync;
