import { Box } from '@mui/material';

import { TypographyCardTitle, TypographyTitleDisabled } from '@/presentation/components/Typography';

const VotacaoHeader: React.FC = () => (
    <Box>
        <TypographyCardTitle typeColor="primary">Registro de Voto</TypographyCardTitle>
        <TypographyTitleDisabled sx={{ opacity: 0.5 }}>
            <i>Para votar, selecione o candidato, pressione <b>enter</b> ou clique em <b>confirmar</b></i>
        </TypographyTitleDisabled>
    </Box>
);

export default VotacaoHeader;
