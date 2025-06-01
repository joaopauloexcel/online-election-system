import { VotacaoAcoesProps } from './votacaoAcoes.types';
import { BoxFlexAcoes, ButtonAcoes } from './votacaoAcoes.styles';

const VotacaoAcoes: React.FC<VotacaoAcoesProps> = ({
    addVoto,
    desfazerVoto,
    finalizarEleicao,
    toggleMostrarInvalidos,
    mostrarInvalidos
}) => (
    <BoxFlexAcoes>
        <ButtonAcoes
            onClick={addVoto} size="small"
            sx={{ background: '#2e7d32', color: '#fff' }}
        >
            CONFIRMAR
        </ButtonAcoes>
        <ButtonAcoes
            color="error"
            variant="contained"
            onClick={desfazerVoto}
            size="small"
        >
            Desfazer último
        </ButtonAcoes>
        <ButtonAcoes
            color="primary"
            variant="contained"
            onClick={finalizarEleicao}
            size="small"
        >
            Finalizar
        </ButtonAcoes>
        <ButtonAcoes
            color="primary"
            variant="outlined"
            onClick={toggleMostrarInvalidos}
            size="small"
        >
            {
                mostrarInvalidos
                    ? 'Ocultar inválidos'
                    : 'Mostrar inválidos'
            }
        </ButtonAcoes>
    </BoxFlexAcoes>
);

export default VotacaoAcoes