# 🗳️ Sistema de Eleição Online

Um sistema completo e interativo para gerenciamento de eleições online, com cadastro de candidatos, votação em tempo real, e apuração dos votos — tudo direto do navegador e persistido via `localStorage`.

## 📸 Visão Geral

- Cadastro de candidatos com autocomplete
- Interface de votação simples e rápida
- Controle de votos inválidos
- Apuração automática com ranqueamento
- Armazenamento local (sem backend)
- Visual limpo com feedbacks por toast

---

## 🚀 Tecnologias Utilizadas

- **React 18+**
- **TypeScript**
- **Vite**
- **Zustand** (gerenciamento de estado)
- **styled Component** (estilização)
- **React Hot Toast** (notificações)
- **Vitest** (testes)

---

## 🧠 Funcionalidades

### 👤 Candidatos
- Adicione candidatos rapidamente pelo nome
- Evita duplicatas
- Autocomplete inteligente com edição futura

### ✅ Votação
- Vote selecionando e pressionando `Enter` ou clicando em `Confirmar`
- Opção de desfazer o último voto
- Visualização dos votos inválidos com controle de exibição

### 📊 Apuração
- Lista ranqueada por número de votos
- Identificação de candidatos inválidos
- Botões para "Invalidar" ou "Revalidar" votos

### 🗂️ Armazenamento
- Todos os dados são armazenados no `localStorage`
- Sem necessidade de backend

---

## 🧪 Testes

Rodando com `Vitest`, cobrindo:

- Fluxo de confirmação de voto
- Marcação/desmarcação de votos inválidos
- Cadastro de candidatos

Para rodar:

```bash
npm run test

---
by: João Paulo Silva