/* eslint-disable @typescript-eslint/no-explicit-any */
import { describe, it, vi, beforeEach } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import Candidato from './Candidato';

// mocks
vi.mock('@/presentation/store/eleicao/eleicao', () => {
    return {
        useEleicaoStore: () => ({
            candidatos: [
                { id: '1', nomeCandidato: 'João Silva' },
                { id: '2', nomeCandidato: 'Maria Souza' },
            ],
            addCandidato: vi.fn(),
            editarCandidato: vi.fn(),
            excluirCandidato: vi.fn(),
        }),
    };
});

vi.mock('@/presentation/components', () => ({
    CardDefault: ({ children }: any) => <div>{children}</div>,
    DataGrid: ({ rows }: any) => (
        <div>
            {rows.map((row: any) => (
                <div key={row.id}>{row.nomeCandidato}</div>
            ))}
        </div>
    ),
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
    TypographyTitleDisabled: ({ children }: any) => <p>{children}</p>,
}));

vi.mock('./candidatos.definitions', () => ({
    getColumns: () => [],
}));

vi.mock('./candidatos.styles', () => ({
    FormContainer: ({ children, onSubmit }: any) => <form onSubmit={onSubmit}>{children}</form>,
    InputContainer: ({ children }: any) => <div>{children}</div>,
    SubmitButton: ({ children, ...props }: any) => <button {...props}>{children}</button>,
}));

describe('Candidato component', () => {
    beforeEach(() => {
        vi.clearAllMocks();
    });

    it('renders title and candidate list', () => {
        render(<Candidato />);
        expect(screen.getByText('Cadastro de Candidatos')).toBeInTheDocument();
        expect(screen.getByText('João Silva')).toBeInTheDocument();
        expect(screen.getByText('Maria Souza')).toBeInTheDocument();
    });

    it('adds a new candidate when form is submitted', async () => {
        const user = userEvent.setup();
        render(<Candidato />);
        const input = screen.getByLabelText('Nome do candidato');
        const button = screen.getByRole('button');

        await user.clear(input);
        await user.type(input, 'Carlos Lima');
        await user.click(button);

        expect(input).toHaveValue('');
    });

    it('does not submit when input is empty or whitespace', async () => {
        const user = userEvent.setup();
        render(<Candidato />);
        const input = screen.getByLabelText('Nome do candidato');
        const button = screen.getByRole('button');

        await user.clear(input);
        await user.type(input, '   ');
        await user.click(button);

        expect(input).toHaveValue('   ');
    });
});
