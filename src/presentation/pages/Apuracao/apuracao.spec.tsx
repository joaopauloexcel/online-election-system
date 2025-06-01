/* eslint-disable @typescript-eslint/no-explicit-any */
import { render, screen } from '@testing-library/react';
import { describe, it, vi, beforeEach } from 'vitest';

import Apuracao from './Apuracao';

vi.mock('@/presentation/store/eleicao/eleicao', () => ({
    useEleicaoStore: () => ({
        eleicao: {
            tituloEleicao: 'Eleição Teste',
            status: 'apurando',
            vagas: 2,
        },
        candidatos: [
            { id: '1', nome: 'Candidato A', votos: 10 },
            { id: '2', nome: 'Candidato B', votos: 20 },
        ],
        carregarEleicao: vi.fn(),
    }),
}));

vi.mock('@/presentation/hooks', () => ({
    useToastSync: () => { },
}));

vi.mock('./hooks', () => ({
    useCarregarEleicao: () => { },
}));

vi.mock('./helpers', () => ({
    mapCandidatosComVotos: (candidatos: any) => candidatos,
    ranquearCandidatos: (candidatos: any) => candidatos,
    getEmpatesCriticos: () => [],
    getTitleApuracao: (titulo: string, vagas: number) => `Apuração de ${titulo} (${vagas} vagas)`,
    getTotalVotos: (candidatos: any[]) => candidatos.reduce((sum, c) => sum + c.votos, 0),
}));

vi.mock('./components', () => ({
    CardCandidato: ({ candidato }: any) => <div>{candidato.nome}</div>,
}));

vi.mock('@/presentation/components', () => ({
    CardDefault: ({ children }: any) => <div>{children}</div>,
}));

vi.mock('@/presentation/components/Typography', () => ({
    TypographyCardTitle: ({ children }: any) => <h1>{children}</h1>,
    TypographyTitleDisabled: ({ children }: any) => <p>{children}</p>,
}));

vi.mock('./apuracao.styles', () => ({
    BoxFlex: ({ children }: any) => <div>{children}</div>,
    BoxCardsCandidato: ({ children }: any) => <div>{children}</div>,
    TypographyDisabledCustom: ({ children }: any) => <p>{children}</p>,
}));

describe('Apuracao component', () => {
    beforeEach(() => {
        vi.clearAllMocks();
    });

    it('renders title with election name and number of seats', () => {
        render(<Apuracao />);
        expect(screen.getByText(/Apuração de Eleição Teste \(2 vagas\)/)).toBeInTheDocument();
    });

    it('renders total votes correctly', () => {
        render(<Apuracao />);
        expect(screen.getByText(/Total votos:/)).toBeInTheDocument();
        expect(screen.getByText(/30/)).toBeInTheDocument(); // 10 + 20
    });

    it('renders candidates names', () => {
        render(<Apuracao />);
        expect(screen.getByText('Candidato A')).toBeInTheDocument();
        expect(screen.getByText('Candidato B')).toBeInTheDocument();
    });
});
