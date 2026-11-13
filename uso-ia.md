# Uso de IA · Reciclê Bairro

## Ferramentas

- **Cursor**, com regras de contexto em `.cursor/Rules/regra.mdc` (idioma, HTML semântico, acessibilidade obrigatória, nada de dados inventados).
- **Claude**: diagnóstico do repositório contra a rubrica da 2ª entrega e primeira versão do `js/script.js`.
- [Outras ferramentas usadas pela equipe]

## Regras de contexto

O arquivo `.cursor/Rules/regra.mdc` foi criado em 16/10 e atualizado para a 2ª entrega: antes proibia JavaScript; agora pede JS em um único arquivo externo, comentado em português.

## Prompts que funcionaram

| Data | Prompt | O que aceitamos | O que corrigimos |
|---|---|---|---|
| 13/11 | "Valide o repositório contra a rubrica da 2ª entrega e corrija o código" | Validação dos formulários, rascunho no localStorage, menu do celular, restauração da página de acessibilidade | Mensagem "Mensagem é obrigatório" (concordância errada) virou "Preencha o campo Mensagem." |
| [data] | [prompt] | [o que aceitaram] | [o que mudaram] |

## Sugestões recusadas

- [Exemplo real da equipe: o que a IA sugeriu, por que vocês não usaram]

## A equipe sabe explicar

Cada integrante deve conseguir explicar, linha a linha, a parte do `js/script.js` que apresentar: `aplicarModo`, `mensagemDeErro`, `iniciarValidacao` e `iniciarRascunho`.
