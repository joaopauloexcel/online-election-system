import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, vi } from 'vitest';

import VotacaoAcoes from './VotacaoAcoes';

describe('VotacaoAcoes component', () => {
  it('should render all action buttons', () => {
    render(
      <VotacaoAcoes
        addVoto={() => { }}
        desfazerVoto={() => { }}
        finalizarEleicao={() => { }}
        toggleMostrarInvalidos={() => { }}
        mostrarInvalidos={true}
      />
    );

    expect(screen.getByText('CONFIRMAR')).toBeInTheDocument();
    expect(screen.getByText('Desfazer último')).toBeInTheDocument();
    expect(screen.getByText('Finalizar')).toBeInTheDocument();
    expect(screen.getByText('Ocultar inválidos')).toBeInTheDocument();
  });

  it('should call addVoto when CONFIRMAR button is clicked', () => {
    const addVotoMock = vi.fn();

    render(
      <VotacaoAcoes
        addVoto={addVotoMock}
        desfazerVoto={() => { }}
        finalizarEleicao={() => { }}
        toggleMostrarInvalidos={() => { }}
        mostrarInvalidos={true}
      />
    );

    fireEvent.click(screen.getByText('CONFIRMAR'));
    expect(addVotoMock).toHaveBeenCalledTimes(1);
  });

  it('should display correct label for invalid toggle button', () => {
    const { rerender } = render(
      <VotacaoAcoes
        addVoto={() => { }}
        desfazerVoto={() => { }}
        finalizarEleicao={() => { }}
        toggleMostrarInvalidos={() => { }}
        mostrarInvalidos={false}
      />
    );

    expect(screen.getByText('Mostrar inválidos')).toBeInTheDocument();

    rerender(
      <VotacaoAcoes
        addVoto={() => { }}
        desfazerVoto={() => { }}
        finalizarEleicao={() => { }}
        toggleMostrarInvalidos={() => { }}
        mostrarInvalidos={true}
      />
    );

    expect(screen.getByText('Ocultar inválidos')).toBeInTheDocument();
  });
});
