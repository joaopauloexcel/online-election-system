import { ApuracaoItemProps } from "../../cardVotacao.types";

export type VotacvaApuracaoProps = {
    apuracao: ApuracaoItemProps[];
    toggleInvalido: (id: string) => void;
}
