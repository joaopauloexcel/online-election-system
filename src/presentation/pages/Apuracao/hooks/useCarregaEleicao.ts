import { useEffect } from 'react'

const useCarregarEleicao = (carregarEleicao: () => void) => {
    useEffect(() => {
        const handleStorageChange = (event: StorageEvent) => {
            if (event.key === 'eleicao') {
                carregarEleicao?.();
            }
        };
        window.addEventListener('storage', handleStorageChange);
        return () => window.removeEventListener('storage', handleStorageChange);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
}

export default useCarregarEleicao
