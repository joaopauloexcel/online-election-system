import { CandidatoComVotos } from "../../apuracao.types";

export type CardCandidatoProps = {
    candidato: CandidatoComVotos;
    vagas?: number;
    statusEleicao: 'finalizada' | 'apurando';
    isEmpateCritico: boolean;
}
