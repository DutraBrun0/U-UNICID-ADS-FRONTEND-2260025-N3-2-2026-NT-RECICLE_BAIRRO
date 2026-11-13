# Reciclê Bairro

Site institucional de uma ONG fictícia sobre reciclagem e impacto social. O site mapeia os ecopontos de Praia Grande (SP), ensina o descarte correto e aproxima moradores das cooperativas de catadores.

Projeto da disciplina **Desenvolvimento Front-End para Web**, Engenharia de Software, UNICID, 2026.2 (2ª entrega).

| | |
|---|---|
| **Site publicado** | https://u-unicid-ads-frontend-2260025-n3-2.vercel.app/ |
| **Repositório** | https://github.com/DutraBrun0/U-UNICID-ADS-FRONTEND-2260025-N3-2-2026-NT-RECICLE_BAIRRO |
| **Equipe** | Grupo Arrogantes: Bruno Dutra, Matheus Brizzi, [integrante 3], [integrante 4] |
| **ODS** | 8 (trabalho decente), 11 (cidades sustentáveis), 12 (consumo e produção responsáveis) |

## Páginas

| Página | Arquivo | Conteúdo |
|---|---|---|
| Início | `index.html` | Problema, dados da Abrema com fonte, ODS e destaque de acessibilidade |
| Sobre | `sobre.html` | História, missão, visão e valores |
| Ecopontos | `projetos.html` | Lista de ecopontos, mapa (iframe), depoimentos e formulário de avaliação |
| Impacto | `impacto.html` | Benefícios, como participar e área **Apoie** (doações e voluntariado) |
| Galeria | `galeria.html` | Registros das ações |
| Mídia | `midia.html` | Guia das cores da coleta seletiva e vídeo (iframe do YouTube) |
| Notícias | `noticias.html` | Notícia sobre descarte irregular, com fonte |
| Acessibilidade | `acessibilidade.html` | O que o site oferece para cada tipo de deficiência |
| Contato | `contato.html` | Formulário de contato e voluntariado, validado em JS e com rascunho salvo |
| Orçamento | `orcamento_hospedagem.html` | Comparativo de hospedagem e justificativa da Vercel |

## Tecnologias

- **HTML5 semântico**: header, nav, main, section, article e footer em todas as páginas.
- **CSS3** em um único `style.css`, com variáveis (`:root`), Flexbox, Grid e três tamanhos de tela (celular até 760px, tablet até 1024px e desktop).
- **JavaScript** em um único `js/script.js`, sem frameworks:
  - validação dos formulários (`preventDefault`, mensagem por campo, borda em destaque, `aria-invalid` e foco no primeiro erro);
  - `localStorage` para o modo daltônico e para o rascunho do formulário de contato;
  - eventos de DOM: menu do celular e painel do modo daltônico (fecha com Esc).

## Acessibilidade

- Link "Pular para o conteúdo" em todas as páginas
- Navegação completa por teclado, com foco visível
- `lang="pt-BR"`, títulos em ordem, `alt` nas imagens e `label` em todos os campos
- Erros de formulário anunciados pelo leitor de tela (`aria-live`) e com ícone, sem depender só da cor
- Modo daltônico (protanopia, deuteranopia, tritanopia e alto contraste)

## Como rodar

Não é preciso instalar nada. Baixe o repositório e abra `index.html` no navegador.

## Deploy

O site está na **Vercel**, que publica uma nova versão a cada push na branch `main`, com HTTPS automático. A justificativa e o comparativo de custos estão em `orcamento_hospedagem.html`.

## Estrutura

```
├── *.html              # 10 páginas
├── style.css           # estilos de todas as páginas
├── js/script.js        # comportamento de todas as páginas
├── img/                # ilustrações SVG
├── docs/               # documentação da entrega
└── .cursor/Rules/      # regras de contexto usadas com IA
```

## Documentação (`/docs`)

- [`diario.md`](docs/diario.md): diário de bordo com datas, decisões e uso de IA
- [`escopo.md`](docs/escopo.md): objetivos e critérios de aceitação
- [`melhorias-mvp.md`](docs/melhorias-mvp.md): o que mudou desde a 1ª entrega
- [`testes.md`](docs/testes.md): testes feitos e evidências
- [`uso-ia.md`](docs/uso-ia.md): ferramentas, prompts e revisões

## Observações

- Depoimentos, e-mail, telefone e chave PIX são fictícios, feitos para o projeto acadêmico.
- Os formulários são demonstrativos: validam os dados, mas não enviam nada.
- As imagens em `img/` são ilustrações provisórias.
