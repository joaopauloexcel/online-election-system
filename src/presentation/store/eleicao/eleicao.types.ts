type Candidato = {
    id: string;
    nomeCandidato: string;
};

export type ApuracaoItem = {
    idCandidato: string;
    votos: number;
    isInvalido: boolean;
};

export type EleicaoItem = {
    id: string;
    tituloEleicao: string;
    vagas: number;
    apuracao: ApuracaoItem[];
    status: 'em-andamento' | 'finalizada' | 'cancelada';
};

export type EleicaoStore = {
    candidatos: Candidato[];
    eleicao?: EleicaoItem;
    votoLog: string[];
    addCandidato: (nome: string) => void;
    editarCandidato: (id: string, nome: string) => void;
    excluirCandidato: (id: string) => void;
    iniciarEleicao: (titulo: string, vagas: number) => void;
    votar: (idCandidato: string) => void;
    desfazerVoto: () => void;
    finalizarEleicao: () => void;
    toggleInvalido: (idCandidato: string) => void;
    resetarEleicao: () => void;
    carregarEleicao: () => void;
};