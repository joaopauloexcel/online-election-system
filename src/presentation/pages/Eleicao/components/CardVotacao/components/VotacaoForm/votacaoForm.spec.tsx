import { describe, it, vi, expect } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import VotacaoForm from './VotacaoForm';

const defaultProps = {
  termo: '',
  setTermo: vi.fn(),
  popupOpen: false,
  setPopupOpen: vi.fn(),
  opcoes: [{ nomeCandidato: 'Alice' }, { nomeCandidato: 'Bob' }],
  enableAddCandidato: true,
  handleAddCandidato: vi.fn(),
  handleKeyDown: vi.fn(),
};

describe('VotacaoForm component', () => {
  it('should render input and candidate options', () => {
    render(<VotacaoForm {...defaultProps} />);

    const input = screen.getByLabelText('Digite e selecione o nome do candidato');
    expect(input).toBeInTheDocument();
  });

  it('should call setTermo on input change', () => {
    render(<VotacaoForm {...defaultProps} />);

    const input = screen.getByLabelText('Digite e selecione o nome do candidato');
    fireEvent.change(input, { target: { value: 'Carlos' } });

    expect(defaultProps.setTermo).toHaveBeenCalledWith('Carlos');
  });

  it('should show button to add candidate if enabled and call handler on click', () => {
    render(<VotacaoForm {...defaultProps} />);

    const button = screen.getByText('Cadastrar esse Candidato e votar');
    expect(button).toBeInTheDocument();

    fireEvent.click(button);
    expect(defaultProps.handleAddCandidato).toHaveBeenCalled();
  });
});
