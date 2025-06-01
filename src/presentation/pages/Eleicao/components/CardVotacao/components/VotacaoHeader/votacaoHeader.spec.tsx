import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import VotacaoHeader from './VotacaoHeader';

describe('VotacaoHeader component', () => {
  it('should render the main title', () => {
    render(<VotacaoHeader />);
    expect(screen.getByText('Registro de Voto')).toBeInTheDocument();
  });

  it('should render the instruction text', () => {
    render(<VotacaoHeader />);
    expect(screen.getByText(/Para votar, selecione o candidato/i)).toBeInTheDocument();
  });

  it('should highlight "enter" and "confirmar" in bold', () => {
    render(<VotacaoHeader />);
    const boldElements = screen.getAllByRole('generic', { hidden: true }).filter(el => el.tagName === 'B');
    const boldTexts = boldElements.map(el => el.textContent);
    expect(boldTexts).toContain('enter');
    expect(boldTexts).toContain('confirmar');
  });
});
