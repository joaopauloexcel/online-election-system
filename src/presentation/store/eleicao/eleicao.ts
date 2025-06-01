import { create } from 'zustand';
import { persist } from 'zustand/middleware';

import { EleicaoStore } from './eleicao.types';

export const useEleicaoStore = create<EleicaoStore>()(
    persist(
        (set, get) => ({
            candidatos: [],
            votoLog: [],
            addCandidato: (nome) =>
                set((state) => ({
                    candidatos: [...state.candidatos, { id: crypto.randomUUID(), nomeCandidato: nome }],
                })),
            editarCandidato: (id, nome) =>
                set((state) => ({
                    candidatos: state.candidatos.map((c) =>
                        c.id === id ? { ...c, nomeCandidato: nome } : c
                    ),
                })),
            excluirCandidato: (id) =>
                set((state) => ({
                    candidatos: state.candidatos.filter((c) => c.id !== id),
                })),
            iniciarEleicao: (titulo, vagas) =>
                set({
                    eleicao: {
                        id: crypto.randomUUID(),
                        tituloEleicao: titulo,
                        vagas,
                        apuracao: [],
                        status: 'em-andamento',
                    },
                    votoLog: [],
                }),
            votar: (id) => {
                const eleicao = get().eleicao;
                if (!eleicao || eleicao.status !== 'em-andamento') return;
                const index = eleicao.apuracao.findIndex((a) => a.idCandidato === id);
                if (index !== -1) eleicao.apuracao[index].votos++;
                else eleicao.apuracao.push({ idCandidato: id, votos: 1, isInvalido: false });

                const novoLog = [...get().votoLog, id].slice(-1000); // guarda só os últimos 1000
                set({ eleicao: { ...eleicao }, votoLog: novoLog });
            },
            desfazerVoto: () => {
                const id = get().votoLog.pop();
                const eleicao = get().eleicao;
                if (!id || !eleicao) return;
                const apuracao = eleicao.apuracao.map((a) =>
                    a.idCandidato === id ? { ...a, votos: a.votos - 1 } : a
                );
                set({ eleicao: { ...eleicao, apuracao }, votoLog: [...get().votoLog] });
            },
            finalizarEleicao: () => {
                const eleicao = get().eleicao;
                if (eleicao) set({ eleicao: { ...eleicao, status: 'finalizada' } });
            },
            toggleInvalido: (id) => {
                const eleicao = get().eleicao;
                if (!eleicao) return;
                const apuracao = eleicao.apuracao.map((a) =>
                    a.idCandidato === id ? { ...a, isInvalido: !a.isInvalido } : a
                );
                set({ eleicao: { ...eleicao, apuracao } });
            },
            resetarEleicao: () => set({ eleicao: undefined, votoLog: [] }),
            carregarEleicao: () => {
                const data = localStorage.getItem('eleicao-store');
                if (data) {
                    const parsed = JSON.parse(data).state;
                    set({
                        eleicao: parsed.eleicao,
                        candidatos: parsed.candidatos,
                    });
                }
            }
        }),
        {
            name: 'eleicao-store',
            partialize: (state) => {
                const { votoLog, ...rest } = state;
                return rest;
            },
        }

    )
);