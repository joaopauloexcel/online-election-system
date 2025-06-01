import { useMemo } from 'react';

import { useEleicaoStore } from '@/presentation/store/eleicao/eleicao';
import { ApuracaoItemProps } from '../cardVotacao.types';

const useApuracao = (mostrarInvalidos: boolean): ApuracaoItemProps[] => {
    const { eleicao, candidatos } = useEleicaoStore();

    return useMemo(() => {
        if (!eleicao) return [];
        return eleicao.apuracao
            .map((a) => {
                const candidato = candidatos.find((c) => c.id === a.idCandidato);
                return {
                    ...a,
                    nome: candidato?.nomeCandidato || 'Candidato não encontrado',
                };
            })
            .filter((a) => (mostrarInvalidos || !a.isInvalido) && a.votos)
            .sort((a, b) => b.votos - a.votos);
    }, [eleicao, candidatos, mostrarInvalidos]);
};

export default useApuracao
