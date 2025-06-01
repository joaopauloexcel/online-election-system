/* eslint-disable @typescript-eslint/no-explicit-any */
import { render, screen } from '@testing-library/react';
import { describe, it, vi, beforeEach } from 'vitest';
import { BrowserRouter } from 'react-router-dom';

import CardVotacao from './CardVotacao';
import { useEleicaoStore } from '@/presentation/store/eleicao/eleicao';

// Mock hooks and components
vi.mock('@/presentation/store/eleicao/eleicao', () => ({
  useEleicaoStore: vi.fn()
}));

vi.mock('./hooks', () => ({
  useApuracao: () => [],
  useOpcoesCandidato: () => []
}));

vi.mock('./components/VotacaoHeader', () => ({
  VotacaoHeader: () => <div>VotacaoHeader</div>
}));

vi.mock('./components/VotacaoForm', () => ({
  VotacaoForm: (props: any) => (
    <div>
      VotacaoForm
      <input
        data-testid="input-termo"
        value={props.termo}
        onChange={(e) => props.setTermo(e.target.value)}
        onKeyDown={props.handleKeyDown}
      />
    </div>
  )
}));

vi.mock('./components/VotacaoAcoes', () => ({
  VotacaoAcoes: () => <div>VotacaoAcoes</div>
}));

vi.mock('./components/VotacaoApuracao', () => ({
  VotacaoApuracao: () => <div>VotacaoApuracao</div>
}));

vi.mock('./helpers', () => ({
  toastSync: vi.fn()
}));

describe('CardVotacao component', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('should display "No ongoing election" if election is not running', () => {
    (useEleicaoStore as any).mockReturnValue({
      eleicao: null
    });

    render(<CardVotacao />, { wrapper: BrowserRouter });

    expect(screen.getByText('Nenhuma eleição em andamento.')).toBeInTheDocument();
  });

  it('should render redirect button if election is finished', () => {
    (useEleicaoStore as any).mockReturnValue({
      eleicao: { status: 'finalizada' }
    });

    render(<CardVotacao />, { wrapper: BrowserRouter });

    expect(screen.getByRole('button', { name: 'Ir para Apuração' })).toBeInTheDocument();
  });

});
