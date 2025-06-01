import { Button } from '@mui/material';
import React, { useState } from 'react';

import { useEleicaoStore } from '@/presentation/store/eleicao/eleicao';
import { CardDefault, MaskedTextField } from '@/presentation/components';
import { TypographyCardTitle } from '@/presentation/components/Typography';
import { renderStatus } from './cardEleicao.definitions';
import { BoxCardEleicao, BoxCardFlex, ButtonCustom, TypographyDisabledCustom } from './cardEleicao.styles';

const CardEleicao: React.FC = () => {
  const { eleicao, iniciarEleicao, resetarEleicao, } = useEleicaoStore();

  const [titulo, setTitulo] = useState('');
  const [vagas, setVagas] = useState(1);

  const handleIniciar = () => {
    if (titulo.trim() && vagas > 0) {
      iniciarEleicao(titulo.trim(), vagas);
      setTitulo('');
      setVagas(1);
    }
  };

  const getLabelStatus = () => {
    return <> <b>Status</b>: {renderStatus(eleicao)}</>
  }

  const getLabelTitle = () => {
    return <><b>Título</b>: {eleicao?.tituloEleicao || ''}</>
  }
  const getLabelVagas = () => {
    return <><b>Vagas</b>: {eleicao?.vagas || ''}</>
  }

  return (
    <>
      <CardDefault>
        <TypographyCardTitle typeColor="primary">Minha Eleição</TypographyCardTitle>
        {!eleicao ? (
          <BoxCardFlex>
            <MaskedTextField
              label='Título da eleição'
              value={titulo}
              onChange={(e) => setTitulo(e.target.value)}
              sx={{ flex: 1 }}
            />
            <MaskedTextField
              label='Número de vagas'
              maskType='number'
              value={`${vagas}`}
              sx={{ flex: 1 }}
              onChange={(e) => setVagas(e.target.value ? Number(e.target.value) : 0)}
            />
            <Button
              sx={{ flex: 1 }}
              onClick={handleIniciar}
              size="small"
              variant='contained'
              disabled={!vagas || !titulo}>
              Iniciar Eleição
            </Button>
          </BoxCardFlex>
        ) : (
          <BoxCardEleicao>
            <BoxCardFlex>
              <TypographyDisabledCustom>{getLabelTitle()}</TypographyDisabledCustom>
              <TypographyDisabledCustom>{getLabelVagas()}</TypographyDisabledCustom>
              <TypographyDisabledCustom>{getLabelStatus()}</TypographyDisabledCustom>
            </BoxCardFlex>
            <BoxCardFlex>
              <ButtonCustom
                onClick={resetarEleicao}
                color='error'
                variant='contained'
              >
                Cancelar / Resetar
              </ButtonCustom>
            </BoxCardFlex>
          </BoxCardEleicao>
        )}
      </CardDefault>
    </>
  );
}

export default CardEleicao
