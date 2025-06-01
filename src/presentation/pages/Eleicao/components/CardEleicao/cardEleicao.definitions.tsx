import { Box } from "@mui/material";

import { EleicaoItem } from "@/presentation/store/eleicao/eleicao.types";

export const renderStatus = (eleicao?: EleicaoItem) => {
  switch (eleicao?.status) {
    case 'em-andamento':
      return 'Em andamento'
    case 'finalizada':
      return 'Finalizada'
    case 'cancelada':
      return 'Cancelada'
    default:
      break;
  }
  if (eleicao?.status === '') return <Box>Em andamento...</Box>
}