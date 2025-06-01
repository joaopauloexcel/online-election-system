import React from 'react';

import { useEleicaoStore } from '@/presentation/store/eleicao/eleicao';
import { CardEleicao, CardVotacao } from './components';

const Eleicao: React.FC = () => {
  const {
    eleicao,
  } = useEleicaoStore();

  return (
    <>
      <CardEleicao />
      {eleicao && <CardVotacao />}
    </>
  );
}

export default Eleicao