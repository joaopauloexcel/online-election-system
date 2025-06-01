import { Box, Button } from '@mui/material';

import { primary, warning } from '@/presentation/theme';
import { VotacvaApuracaoProps } from './votacaoApuracao.types';
import { BoxWrapper } from '../../cardVotacao.styles';
import { BoxFlexApuracao } from './votacaoApuracao.styles';

const VotacaoApuracao: React.FC<VotacvaApuracaoProps> = ({ apuracao, toggleInvalido }) => {
    const getColorButton = (isInvalido: boolean) => {
        return isInvalido ? warning[500] : primary[500]
    }
    const getLabelVotos = (index: number, nome: string, votos: number) => {
        return <>{index + 1}º {nome} | votos: {votos}</>
    }
    const getLabelAcao = (isInvalido: boolean) => {
        return isInvalido ? 'Revalidar' : 'Invalidar'
    }
    return (
        <BoxWrapper>
            {apuracao.map((a, i) => (
                <BoxFlexApuracao
                    key={a.idCandidato}
                    color={getColorButton(a.isInvalido)}
                >
                    <Box> {getLabelVotos(i, a.nome, a.votos)}</Box>
                    <Button
                        onClick={() => toggleInvalido(a.idCandidato)}
                        sx={{ color: getColorButton(a.isInvalido) }}
                    >
                        {getLabelAcao(a.isInvalido)}
                    </Button>
                </BoxFlexApuracao>
            ))}
        </BoxWrapper>
    )
};

export default VotacaoApuracao