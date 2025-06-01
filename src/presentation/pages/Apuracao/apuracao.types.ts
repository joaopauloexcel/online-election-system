export type Candidato = {
    id: string;
    nomeCandidato: string;
}

export type CandidatoComVotos = & Candidato & {
    votos: number;
    invalido: boolean;
    posicao?: number;
}

export type ApuracaoInfo = {
    idCandidato: string;
    votos: number;
    isInvalido: boolean;
}

export type EleicaoApuracao = {
    tituloEleicao: string;
    status: 'finalizada' | 'apurando';
    vagas: number;
    apuracao: ApuracaoInfo[];
}