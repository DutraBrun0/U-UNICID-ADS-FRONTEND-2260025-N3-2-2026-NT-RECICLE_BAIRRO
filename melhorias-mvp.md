# Melhorias desde o MVP (1ª entrega)

Prints de antes estão em `docs/images/` (setembro de 2026). Prints de depois estão em `docs/prints/`.

| Ponto | Antes (MVP) | Depois (2ª entrega) |
|---|---|---|
| [Ponto apontado pelo professor 1] | [como era] | [como ficou] |
| [Ponto apontado pelo professor 2] | [como era] | [como ficou] |
| JavaScript | Não existia | `js/script.js` com validação, localStorage e menu do celular |
| Página de acessibilidade | Apagada por engano (commit e029cb9), com link quebrado na home | Restaurada, atualizada e no menu de todas as páginas |
| Menu | 8 links; Acessibilidade e Orçamento fora do menu | 10 links em todas as páginas; no celular vira botão "Menu" |
| Script repetido | Mesmo `<script>` copiado dentro de 9 páginas | Um arquivo externo para todas |
| Modo daltônico | Botão só na página inicial | Botão em todas as páginas, fecha com Esc e marca a opção com `aria-pressed` |
| Formulários | Só `required` do HTML | Mensagem por campo, borda vermelha, ícone, `aria-live` e foco no primeiro erro |
| Multimídia | Vídeo comentado e arquivo inexistente | Vídeo do YouTube na Mídia e mapa dos ecopontos (iframes) |
| Doações e voluntariado | Não existiam | Área **Apoie** em Impacto e assunto "Quero ser voluntário" no contato |
| Dados | Números da ONG sem fonte na home | Dados da Abrema com fonte; números da ONG marcados como metas ilustrativas |
| ODS | Não apareciam | ODS 8, 11 e 12 na home e no rodapé de todas as páginas |
| CSS | Sem variáveis, um breakpoint | Variáveis em `:root`, comentários por seção, breakpoints de celular e tablet |
| Hospedagem | Página recomendava GitHub Pages | `orcamento_hospedagem.html` justifica a Vercel |
| Skip link | Faltava em contato.html | Presente nas 10 páginas |
