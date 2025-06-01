import { neutral, success, warning } from '@/presentation/theme';
import { Candidato, CandidatoComVotos, EleicaoApuracao } from '../apuracao.types';

export const mapCandidatosComVotos = (candidatos: Candidato[], eleicao?: EleicaoApuracao) => {
    return candidatos.map((c) => {
        const info = eleicao?.apuracao.find((a) => a.idCandidato === c.id);
        return {
            ...c,
            votos: info?.votos || 0,
            invalido: info?.isInvalido || false,
        };
    });
};

export const ranquearCandidatos = (candidatos: CandidatoComVotos[]): CandidatoComVotos[] => {
    return [...candidatos]
        .filter((a) => !a.invalido && a.votos)
        .sort((a, b) => b.votos - a.votos)
        .map((c, i) => ({ ...c, posicao: i + 1 }));
};

export const isElegendo = (posicao: number, vagas?: number): boolean => {
    return !!(vagas && posicao <= vagas);
};

export const getEmpatesCriticos = (ranqueados: CandidatoComVotos[], vagas?: number) => {
    if (!vagas || ranqueados.length === 0) return [];

    const limite = ranqueados[vagas - 1]?.votos;
    const empatados = ranqueados.filter((c) => c.votos === limite);
    const primeiraPosicaoEmpate = ranqueados.findIndex((c) => c.votos === limite);
    const foraDasVagas = primeiraPosicaoEmpate + empatados.length > vagas;

    return foraDasVagas ? empatados : [];
};

export const getTotalVotos = (ranqueados: CandidatoComVotos[]) => {
    return ranqueados
        .filter((a) => !a.invalido && a.votos)
        .reduce((total, c) => total + c.votos, 0);
};

export const getBackGroundCandidato = (isEleito: boolean, isEmpateCritico: boolean) => {
    if (isEleito && isEmpateCritico) return warning[200]
    if (isEleito) return success[100]
    if (isEmpateCritico) return warning[200]
    return neutral[100];
}

export const getSituacaoFinalCandidato = (isInvalido: boolean, isEleito: boolean, isEmpateCritico: boolean) => {
    if (isInvalido) return 'Não Eleito'
    if (isEleito && isEmpateCritico) return '⚠️ Empate'
    if (isEleito) return '✅ Eleito'
    if (isEmpateCritico) return '⚠️ Empate'
    return '❌ Não Eleito';
}

export const getTitleApuracao = (tituloEleicao?: string, vagas?: number) => {
    return tituloEleicao && vagas
        ? `Apuração - ${tituloEleicao} (vagas: ${vagas})`
        : 'Apuração'
}

