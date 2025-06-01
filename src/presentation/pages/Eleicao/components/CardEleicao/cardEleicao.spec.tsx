/* eslint-disable @typescript-eslint/no-explicit-any */
import { describe, it, vi, beforeEach } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import CardEleicao from './CardEleicao';

const mockIniciarEleicao = vi.fn();
const mockResetarEleicao = vi.fn();

vi.mock('@/presentation/store/eleicao/eleicao', () => ({
  useEleicaoStore: () => ({
    eleicao: null,
    iniciarEleicao: mockIniciarEleicao,
    resetarEleicao: mockResetarEleicao,
  }),
}));

vi.mock('@/presentation/components', () => ({
  CardDefault: ({ children }: any) => <div>{children}</div>,
  MaskedTextField: ({ value, onChange, label }: any) => (
    <input
      aria-label={label}
      value={value}
      onChange={onChange}
    />
  ),
}));

vi.mock('@/presentation/components/Typography', () => ({
  TypographyCardTitle: ({ children }: any) => <h2>{children}</h2>,
}));

vi.mock('./cardEleicao.styles', () => ({
  BoxCardEleicao: ({ children }: any) => <div>{children}</div>,
  BoxCardFlex: ({ children }: any) => <div>{children}</div>,
  ButtonCustom: (props: any) => <button {...props}>{props.children}</button>,
  TypographyDisabledCustom: ({ children }: any) => <p>{children}</p>,
}));

vi.mock('./cardEleicao.definitions', () => ({
  renderStatus: () => 'Em andamento',
}));

describe('CardEleicao component', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('renders initial election form correctly', () => {
    render(<CardEleicao />);
    expect(screen.getByText('Minha Eleição')).toBeInTheDocument();
    expect(screen.getByLabelText('Título da eleição')).toBeInTheDocument();
    expect(screen.getByLabelText('Número de vagas')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Iniciar Eleição' })).toBeDisabled();
  });

  it('starts election when valid data is entered', async () => {
    const user = userEvent.setup();
    render(<CardEleicao />);

    const tituloInput = screen.getByLabelText('Título da eleição');
    const vagasInput = screen.getByLabelText('Número de vagas');
    const startButton = screen.getByRole('button', { name: 'Iniciar Eleição' });

    await user.type(tituloInput, 'Eleição Teste');
    await user.clear(vagasInput);
    await user.type(vagasInput, '3');

    expect(startButton).toBeEnabled();
    await user.click(startButton);

    expect(mockIniciarEleicao).toHaveBeenCalledWith('Eleição Teste', 3);
  });

});
