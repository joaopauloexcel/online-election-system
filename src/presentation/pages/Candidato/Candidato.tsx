import React, { useState } from 'react';
import { Box } from '@mui/material';
import { GridRenderCellParams } from '@mui/x-data-grid';
import { Add } from '@mui/icons-material';

import { useEleicaoStore } from '@/presentation/store/eleicao/eleicao';
import { CardDefault, DataGrid, MaskedTextField } from '@/presentation/components';
import { TypographyTitleDisabled, TypographyCardTitle } from '@/presentation/components/Typography';
import { getColumns } from './candidato.definitions';
import { FormContainer, InputContainer, SubmitButton } from './candidato.styles';

const Candidato: React.FC = () => {
  const { candidatos, addCandidato, editarCandidato, excluirCandidato } = useEleicaoStore();
  const [nome, setNome] = useState('');
  const [editandoId, setEditandoId] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const nomeTrimado = nome.trim();
    if (!nomeTrimado) return;

    if (editandoId) {
      editarCandidato(editandoId, nomeTrimado);
      setEditandoId(null);
    } else {
      addCandidato(nomeTrimado);
    }
    setNome('');
  };

  const iniciarEdicao = (id: string, nomeAtual: string) => {
    setEditandoId(id);
    setNome(nomeAtual);
  };

  const actionGridHandler = (
    params: GridRenderCellParams | null,
    type: 'edit' | 'delete'
  ) => {
    if (type === 'edit' && params?.row) iniciarEdicao(params.row.id, params.row.nomeCandidato);
    if (type === 'delete') excluirCandidato(params?.row?.id);
  };

  return (
    <CardDefault>
      <Box>
        <TypographyCardTitle typeColor="primary">
          Cadastro de Candidatos
        </TypographyCardTitle>
        <TypographyTitleDisabled sx={{ opacity: 0.5 }}>
          <i> Pressione <b>enter</b> ou clique em <b>(+)</b></i>
        </TypographyTitleDisabled>
      </Box>
      <FormContainer onSubmit={handleSubmit}>
        <InputContainer>
          <MaskedTextField
            label="Nome do candidato"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            fullWidth
          />
        </InputContainer>
        <InputContainer>
          <SubmitButton type="submit" size="small">
            <Add />
          </SubmitButton>
        </InputContainer>
      </FormContainer>
      <DataGrid
        paperHeight="fit-content"
        getRowId={(row) => row.id}
        columns={getColumns(actionGridHandler)}
        rows={candidatos}
      />
    </CardDefault>
  );
};

export default Candidato;
