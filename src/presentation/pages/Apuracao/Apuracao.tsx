import React from 'react';

import { useEleicaoStore } from '@/presentation/store/eleicao/eleicao';
import { CardDefault } from '@/presentation/components';
import { TypographyTitleDisabled, TypographyCardTitle } from '@/presentation/components/Typography';
import { useToastSync } from '@/presentation/hooks';
import { STATUS_FINALIZADA, STATUS_APURANDO } from './apuracao.definitions';
import {
    getEmpatesCriticos,
    getTitleApuracao,
    getTotalVotos,
    mapCandidatosComVotos,
    ranquearCandidatos,
} from './helpers';
import { EleicaoApuracao } from './apuracao.types';
import { useCarregarEleicao } from './hooks';
import { BoxCardsCandidato, BoxFlex, TypographyDisabledCustom } from './apuracao.styles';
import { CardCandidato } from './components';

const Apuracao: React.FC = () => {
    const { eleicao, candidatos, carregarEleicao } = useEleicaoStore();
    useToastSync();
    useCarregarEleicao(carregarEleicao)

    const candidatosComVotos = mapCandidatosComVotos(candidatos, (eleicao as EleicaoApuracao));
    const ranqueados = ranquearCandidatos(candidatosComVotos);
    const empatesCriticos = getEmpatesCriticos(ranqueados, eleicao?.vagas);

    const status = eleicao?.status === 'finalizada' ? STATUS_FINALIZADA : STATUS_APURANDO;

    const getLabelTitleApuracao = () => {
        return getTitleApuracao(eleicao?.tituloEleicao, eleicao?.vagas)
    }

    const getLabelStatus = () => {
        return <><b>Status:</b> {eleicao?.tituloEleicao ? status : 'Não iniciada'}</>
    }

    const getLabelTotalVotos = () => {
        return <><b>Total votos:</b> {getTotalVotos(ranqueados)}</>
    }

    const getStatusEleicao = () => {
        return eleicao?.status === 'finalizada'
            ? 'finalizada'
            : 'apurando'
    }

    return (
        <CardDefault>
            <TypographyCardTitle typeColor="primary">
                {getLabelTitleApuracao()}
            </TypographyCardTitle>
            <BoxFlex>
                <TypographyTitleDisabled>
                    {getLabelStatus()}
                </TypographyTitleDisabled>
                <TypographyDisabledCustom>
                    {getLabelTotalVotos()}
                </TypographyDisabledCustom>
            </BoxFlex>
            <BoxCardsCandidato sx={{ justifyContent: { md: 'center', lg: 'flex-start' } }}>
                {ranqueados.map((c) => (
                    <CardCandidato
                        key={c.id}
                        candidato={c}
                        vagas={eleicao?.vagas}
                        statusEleicao={getStatusEleicao()}
                        isEmpateCritico={empatesCriticos.includes(c)}
                    />
                ))}
            </BoxCardsCandidato>
        </CardDefault>
    );
};

export default Apuracao;