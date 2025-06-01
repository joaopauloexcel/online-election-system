import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, vi } from 'vitest';
import VotacaoApuracao from './VotacaoApuracao';

const mockApuracao = [
  { idCandidato: '1', nome: 'Alice', votos: 3, isInvalido: false },
  { idCandidato: '2', nome: 'Bob', votos: 2, isInvalido: true },
];

describe('VotacaoApuracao component', () => {
  it('should render all candidates with correct vote labels', () => {
    render(<VotacaoApuracao apuracao={mockApuracao} toggleInvalido={() => { }} />);

    expect(screen.getByText('1º Alice | votos: 3')).toBeInTheDocument();
    expect(screen.getByText('2º Bob | votos: 2')).toBeInTheDocument();
  });

  it('should render correct button labels based on invalid status', () => {
    render(<VotacaoApuracao apuracao={mockApuracao} toggleInvalido={() => { }} />);

    expect(screen.getByText('Invalidar')).toBeInTheDocument();
    expect(screen.getByText('Revalidar')).toBeInTheDocument();
  });

  it('should call toggleInvalido with candidate id when button is clicked', () => {
    const toggleMock = vi.fn();
    render(<VotacaoApuracao apuracao={mockApuracao} toggleInvalido={toggleMock} />);

    fireEvent.click(screen.getByText('Invalidar'));
    expect(toggleMock).toHaveBeenCalledWith('1');

    fireEvent.click(screen.getByText('Revalidar'));
    expect(toggleMock).toHaveBeenCalledWith('2');
  });
});
