# Testes · Reciclê Bairro

Testes feitos em 13/11/2026 no Chrome, com o site aberto localmente. Repetir no site publicado antes da apresentação.

| Teste | Como | Resultado | Evidência |
|---|---|---|---|
| Menu em todas as páginas | Abrir as 10 páginas e contar os links do menu | 10 links em todas | — |
| Links internos | Conferir todos os `href` para arquivos .html | Nenhum link quebrado | — |
| Formulário vazio | Enviar o contato sem preencher | Mensagem em cada campo, borda vermelha, foco no Nome | `prints/contato-erros.png` |
| E-mail inválido | Digitar "maria@" e enviar | "Digite um e-mail válido, como nome@exemplo.com." | — |
| Envio correto | Preencher tudo e enviar | Mensagem de sucesso e rascunho apagado | — |
| Rascunho (localStorage) | Digitar, recarregar a página | Texto volta e aparece o aviso de rascunho | — |
| Modo daltônico (localStorage) | Escolher Deuteranopia e ir para outra página | O modo continua aplicado | — |
| Teclado | Pressionar Tab ao abrir a página | O primeiro foco é "Pular para o conteúdo" | `prints/home-desktop.png` |
| Celular (390px) | Abrir a home e tocar em "Menu" | O menu abre e `aria-expanded` vira "true" | `prints/home-celular.png`, `prints/menu-celular.png` |
| Tablet (820px) | Abrir a home | Layout se ajusta sem rolagem lateral | `prints/home-tablet.png` |
| Erros no console | Navegar pelas 10 páginas | Nenhum erro de JavaScript | — |
| W3C Validator | validator.w3.org, uma página por vez | [preencher: 0 erros?] | [print] |
| Lighthouse | DevTools › Lighthouse › Acessibilidade | [preencher nota] | [print] |
| Leitor de tela | NVDA ou leitor do celular no formulário de contato | [preencher] | [print] |
