import { useMemo } from 'react';

import { useEleicaoStore } from '@/presentation/store/eleicao/eleicao';

const useOpcoesCandidato = (termo: string) => {
    const { candidatos } = useEleicaoStore();

    return useMemo(() => {
        return candidatos.filter((c) =>
            c.nomeCandidato.toLowerCase().includes(termo.toLowerCase())
        );
    }, [candidatos, termo]);
};

export default useOpcoesCandidato
