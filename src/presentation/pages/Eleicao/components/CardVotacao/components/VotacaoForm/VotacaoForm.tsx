import { VotacaoFormProps } from './votacaoForm.types';
import { AutocompleteForm, BoxButtonForm, BoxEmpty, BoxFlexForm, ButtonAdd, TextFieldCustom } from './votacaoForm.styles';

const VotacaoForm: React.FC<VotacaoFormProps> = ({
    termo,
    setTermo,
    popupOpen,
    setPopupOpen,
    opcoes,
    enableAddCandidato,
    handleAddCandidato,
    handleKeyDown
}) => {
    return (
        <BoxFlexForm>
            <AutocompleteForm
                freeSolo
                options={opcoes.map((c) => c.nomeCandidato)}
                inputValue={termo}
                onInputChange={(_, value) => setTermo(value)}
                open={popupOpen}
                onOpen={() => setPopupOpen(true)}
                onClose={() => setPopupOpen(false)}
                renderInput={(params) => (
                    <TextFieldCustom
                        {...params}
                        label="Digite e selecione o nome do candidato"
                        onKeyDown={handleKeyDown}
                    />
                )}
            />
            {enableAddCandidato
                ? (
                    <BoxButtonForm>
                        <ButtonAdd variant='contained' onClick={handleAddCandidato}>
                            Cadastrar esse Candidato e votar
                        </ButtonAdd>
                    </BoxButtonForm>
                )
                : (
                    <BoxEmpty />
                )}
        </BoxFlexForm>
    );
};

export default VotacaoForm