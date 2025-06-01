import { useState, useRef, useEffect } from 'react';

import { CardDefault } from '@/presentation/components';
import { useEleicaoStore } from '@/presentation/store/eleicao/eleicao';
import { useApuracao, useOpcoesCandidato } from './hooks';
import { VotacaoHeader } from './components/VotacaoHeader';
import { VotacaoForm } from './components/VotacaoForm';
import { VotacaoAcoes } from './components/VotacaoAcoes';
import { VotacaoApuracao } from './components/VotacaoApuracao';
import { toastSync } from './helpers';
import toast from 'react-hot-toast';
import { Box, Button, Divider } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { urlRouters } from '@/presentation/router/router.definitions';

const CardVotacao = () => {
    const navigate = useNavigate()
    const inputRef = useRef<HTMLInputElement>(null);
    const [termo, setTermo] = useState('');
    const [mostrarInvalidos, setMostrarInvalidos] = useState(true);
    const [popupOpen, setPopupOpen] = useState(false);
    const [enableAddCandidato, setEnableAddCandidato] = useState(false);
    const {
        eleicao,
        votar,
        desfazerVoto,
        finalizarEleicao,
        toggleInvalido,
        addCandidato
    } = useEleicaoStore();
    const apuracao = useApuracao(mostrarInvalidos);
    const opcoes = useOpcoesCandidato(termo);

    const addVoto = () => {
        if (opcoes.length > 0 && termo) {
            const index = opcoes.findIndex(e => e.nomeCandidato.toLowerCase() === termo.toLowerCase());
            votar(opcoes[index].id);
            toastSync('success', `Voto registrado: ${opcoes[index].nomeCandidato}`);
            setTermo('');
            setTimeout(() => inputRef.current?.focus(), 100);
        }
    };

    const handleKeyDown = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter' && !popupOpen) {
            e.preventDefault();
            addVoto();
        }
    };

    const handleAddCandidato = () => {
        if (termo) {
            addCandidato(termo);
            toast.success(`Candidato: ${termo} cadastrado!`);
            setEnableAddCandidato(false);
        }
    };

    const redirectApuracao = () => navigate(urlRouters.apuracao)

    useEffect(() => {
        if (opcoes.length === 0 && termo && !enableAddCandidato) {
            setEnableAddCandidato(true);
        } else if (!termo && enableAddCandidato) {
            setEnableAddCandidato(false);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [termo, opcoes]);

    if (!eleicao || eleicao.status !== 'em-andamento') {
        return <CardDefault customSX={{ marginTop: '16px' }}>
            {eleicao?.status === 'finalizada'
                ? (
                    <Box>
                        <Button
                            onClick={redirectApuracao}
                            variant='contained'
                        >
                            Ir para Apuração
                        </Button>
                    </Box>
                )
                : <Box>Nenhuma eleição em andamento.</Box>
            }
        </CardDefault>;
    }

    return (
        <CardDefault customSX={{ marginTop: '16px' }}>
            <VotacaoHeader />
            <VotacaoForm
                termo={termo}
                setTermo={setTermo}
                popupOpen={popupOpen}
                setPopupOpen={setPopupOpen}
                opcoes={opcoes}
                enableAddCandidato={enableAddCandidato}
                handleAddCandidato={handleAddCandidato}
                handleKeyDown={handleKeyDown}
            />
            <VotacaoAcoes
                addVoto={addVoto}
                desfazerVoto={desfazerVoto}
                finalizarEleicao={finalizarEleicao}
                toggleMostrarInvalidos={() => setMostrarInvalidos(!mostrarInvalidos)}
                mostrarInvalidos={mostrarInvalidos}
            />
            <Divider />
            <VotacaoApuracao apuracao={apuracao} toggleInvalido={toggleInvalido} />
        </CardDefault>
    );
};

export default CardVotacao;
