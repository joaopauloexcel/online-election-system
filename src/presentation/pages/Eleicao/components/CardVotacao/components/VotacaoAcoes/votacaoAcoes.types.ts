export type VotacaoAcoesProps = {
    addVoto: () => void;
    desfazerVoto: () => void;
    finalizarEleicao: () => void;
    toggleMostrarInvalidos: () => void;
    mostrarInvalidos: boolean;
}