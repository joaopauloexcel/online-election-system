import React from 'react';
import { Box } from '@mui/material';

import { CardCandidatoProps } from './cardCandidato.type';
import { TypographyCardTitle } from '@/presentation/components/Typography';
import { BoxWidth, BoxFlexCenter, CardDefaultCustom, BoxBlock } from './cardCandidato.styles';
import { getBackGroundCandidato, getSituacaoFinalCandidato } from '../../helpers';

const CardCandidato: React.FC<CardCandidatoProps> = ({
    candidato,
    vagas,
    statusEleicao,
    isEmpateCritico,
}) => {
    const isEleito = !!(candidato?.posicao && candidato.posicao <= (vagas ?? 0));

    const getLabelSituacao = () => {
        return <>
            <b>Situação:</b> {getSituacaoFinalCandidato(
                candidato.invalido,
                isEleito,
                isEmpateCritico
            )}
        </>
    }

    const getBackground = () => {
        return getBackGroundCandidato(isEleito, isEmpateCritico)
    }

    return (
        <CardDefaultCustom customSX={{ background: getBackground() }}>
            <BoxBlock sx={{ opacity: isEleito ? 1 : 0.7 }}>
                <BoxFlexCenter>
                    <BoxWidth>Votado:</BoxWidth>
                    <TypographyCardTitle typeColor='primary'>
                        {candidato.nomeCandidato?.toUpperCase() || ''}
                    </TypographyCardTitle>
                </BoxFlexCenter>
                <BoxFlexCenter gap={4} justifyContent='space-between'>
                    <BoxFlexCenter>
                        <BoxWidth>Posição:</BoxWidth>
                        <TypographyCardTitle typeColor='primary'>
                            {candidato?.posicao || ''}º
                        </TypographyCardTitle>
                    </BoxFlexCenter>
                    <BoxFlexCenter>
                        <BoxWidth>Votos:</BoxWidth>
                        <TypographyCardTitle typeColor='primary'>
                            {candidato.votos}
                        </TypographyCardTitle>
                    </BoxFlexCenter>
                </BoxFlexCenter>
                {statusEleicao === 'finalizada' && (
                    <Box>{getLabelSituacao()}</Box>
                )}
            </BoxBlock>
        </CardDefaultCustom>
    );
};

export default CardCandidato;