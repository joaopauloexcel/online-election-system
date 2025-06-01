/* eslint-disable @typescript-eslint/no-explicit-any */
import { describe, it, vi } from 'vitest';
import { render, screen } from '@testing-library/react';

import CardCandidato from './CardCandidato';

vi.mock('../../helpers', () => ({
    getSituacaoFinalCandidato: (invalido: boolean, isEleito: boolean, isEmpate: boolean) =>
        invalido ? 'Inválido' : isEleito ? 'Eleito' : isEmpate ? 'Empate' : 'Não eleito',
    getBackGroundCandidato: (isEleito: boolean, isEmpateCritico: boolean) =>
        isEleito ? 'green' : isEmpateCritico ? 'yellow' : 'gray',
}));

vi.mock('@/presentation/components/Typography', () => ({
    TypographyCardTitle: ({ children }: any) => <span>{children}</span>,
}));

vi.mock('./cardCandidato.styles', () => ({
    CardDefaultCustom: ({ children, customSX }: any) => <div style={customSX}>{children}</div>,
    BoxFlexCenter: ({ children }: any) => <div>{children}</div>,
    BoxWidth: ({ children }: any) => <div>{children}</div>,
    BoxBlock: ({ children, sx }: any) => <div style={sx}>{children}</div>,
}));

describe('CardCandidato component', () => {
    const baseProps = {
        candidato: {
            id: '5',
            nomeCandidato: 'João Silva',
            posicao: 1,
            votos: 100,
            invalido: false,
        },
        vagas: 2,
        statusEleicao: 'finalizada' as "finalizada" | "apurando",
        isEmpateCritico: false,
    };

    it('renders candidate name in uppercase', () => {
        render(<CardCandidato {...baseProps} />);
        expect(screen.getByText('JOÃO SILVA')).toBeInTheDocument();
    });

    it('renders correct position and votes', () => {
        render(<CardCandidato {...baseProps} />);
        expect(screen.getByText('1º')).toBeInTheDocument();
        expect(screen.getByText('100')).toBeInTheDocument();
    });

    it('displays final status when election is finalized', () => {
        render(<CardCandidato {...baseProps} />);
        expect(screen.getByText(/Situação:/)).toBeInTheDocument();
        expect(screen.getByText(/Eleito/)).toBeInTheDocument();
    });
});
