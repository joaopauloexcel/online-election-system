export type VotacaoFormProps = {
    termo: string;
    setTermo: (value: string) => void;
    popupOpen: boolean;
    setPopupOpen: (value: boolean) => void;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    opcoes: any[];
    enableAddCandidato: boolean;
    handleAddCandidato: () => void;
    handleKeyDown: (e: React.KeyboardEvent) => void;
}