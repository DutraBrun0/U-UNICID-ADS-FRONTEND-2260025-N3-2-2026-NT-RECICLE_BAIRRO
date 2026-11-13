/* =========================================================
   Reciclê Bairro · script.js
   Um único arquivo para as 10 páginas. Funções:
   1. Modo daltônico (salvo no localStorage)
   2. Menu do celular (abre e fecha pelo botão "Menu")
   3. Validação dos formulários (preventDefault + mensagens)
   4. Rascunho do formulário de contato (localStorage)
   ========================================================= */

/* ---------- 1a. Aplica o modo salvo antes da página aparecer ----------
   Este trecho roda no <head>, então a página já abre na cor escolhida
   e não "pisca" na cor original. */
(function aplicarModoSalvo() {
  try {
    const modoSalvo = localStorage.getItem('modo-daltonismo');
    if (modoSalvo && modoSalvo !== 'normal') {
      document.documentElement.classList.add('daltonismo-' + modoSalvo);
    }
  } catch (erro) {
    // Navegador sem localStorage: o site funciona normalmente, só não lembra a escolha
  }
})();

document.addEventListener('DOMContentLoaded', () => {
  iniciarModoDaltonico();
  iniciarMenuCelular();
  document.querySelectorAll('form[data-validar]').forEach(iniciarValidacao);
  iniciarRascunho();
});

/* ---------- 1b. Modo daltônico ---------- */
const MODOS = ['protanopia', 'deuteranopia', 'tritanopia', 'alto-contraste'];

function iniciarModoDaltonico() {
  const botao = document.getElementById('btn-daltonismo');
  const painel = document.getElementById('modal-daltonismo');
  const opcoes = document.querySelectorAll('.btn-opcao');
  if (!botao || !painel) return;

  // Abre e fecha o painel
  function abrirPainel(abrir) {
    botao.setAttribute('aria-expanded', String(abrir));
    painel.hidden = !abrir;
    if (abrir) painel.querySelector('.btn-opcao.active, .btn-opcao').focus();
  }

  botao.addEventListener('click', () => {
    abrirPainel(botao.getAttribute('aria-expanded') !== 'true');
  });

  // Fecha ao clicar fora
  document.addEventListener('click', (evento) => {
    if (!botao.contains(evento.target) && !painel.contains(evento.target)) {
      painel.hidden = true;
      botao.setAttribute('aria-expanded', 'false');
    }
  });

  // Fecha com Esc e devolve o foco ao botão (acessibilidade por teclado)
  painel.addEventListener('keydown', (evento) => {
    if (evento.key === 'Escape') {
      abrirPainel(false);
      botao.focus();
    }
  });

  // Troca a classe no <html> e guarda a escolha
  function aplicarModo(modo) {
    MODOS.forEach((m) => document.documentElement.classList.remove('daltonismo-' + m));
    if (modo !== 'normal') document.documentElement.classList.add('daltonismo-' + modo);

    opcoes.forEach((opcao) => {
      const ativo = opcao.dataset.modo === modo;
      opcao.classList.toggle('active', ativo);
      opcao.setAttribute('aria-pressed', String(ativo));
    });

    try {
      localStorage.setItem('modo-daltonismo', modo);
    } catch (erro) { /* sem localStorage: aplica só nesta página */ }
  }

  opcoes.forEach((opcao) => {
    opcao.addEventListener('click', () => {
      aplicarModo(opcao.dataset.modo);
      abrirPainel(false);
      botao.focus();
    });
  });

  // Marca o botão certo quando a pessoa chega de outra página
  let modoSalvo = 'normal';
  try { modoSalvo = localStorage.getItem('modo-daltonismo') || 'normal'; } catch (erro) {}
  opcoes.forEach((opcao) => {
    const ativo = opcao.dataset.modo === modoSalvo;
    opcao.classList.toggle('active', ativo);
    opcao.setAttribute('aria-pressed', String(ativo));
  });
}

/* ---------- 2. Menu do celular ---------- */
function iniciarMenuCelular() {
  const botao = document.getElementById('menu-toggle');
  const menu = document.getElementById('menu-principal');
  if (!botao || !menu) return;

  botao.addEventListener('click', () => {
    const aberto = botao.getAttribute('aria-expanded') === 'true';
    botao.setAttribute('aria-expanded', String(!aberto));
    menu.classList.toggle('aberto', !aberto);
  });

  // Esc fecha o menu
  menu.addEventListener('keydown', (evento) => {
    if (evento.key === 'Escape') {
      botao.setAttribute('aria-expanded', 'false');
      menu.classList.remove('aberto');
      botao.focus();
    }
  });
}

/* ---------- 3. Validação de formulários ----------
   Qualquer <form data-validar> é validado aqui.
   Cada campo precisa de um <p class="erro" id="erro-ID"> logo abaixo. */
function mensagemDeErro(campo) {
  const valor = campo.value.trim();
  const nome = campo.dataset.nome || 'obrigatório';

  if (campo.required && valor === '') {
    return campo.tagName === 'SELECT' ? 'Escolha uma opção.' : 'Preencha o campo ' + nome + '.';
  }
  if (campo.type === 'email' && valor !== '' && !/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(valor)) {
    return 'Digite um e-mail válido, como nome@exemplo.com.';
  }
  if (campo.minLength > 0 && valor !== '' && valor.length < campo.minLength) {
    return 'O campo ' + nome + ' precisa ter pelo menos ' + campo.minLength + ' caracteres.';
  }
  return '';
}

function mostrarErro(campo, mensagem) {
  const caixa = document.getElementById('erro-' + campo.id);
  campo.classList.toggle('campo-invalido', mensagem !== '');
  campo.setAttribute('aria-invalid', mensagem !== '' ? 'true' : 'false');
  if (caixa) caixa.textContent = mensagem;
}

function iniciarValidacao(form) {
  const campos = form.querySelectorAll('input, select, textarea');
  const status = form.querySelector('.form-status');

  // Ao sair do campo, valida só aquele campo
  campos.forEach((campo) => {
    campo.addEventListener('blur', () => mostrarErro(campo, mensagemDeErro(campo)));
    campo.addEventListener('input', () => {
      if (campo.classList.contains('campo-invalido')) mostrarErro(campo, mensagemDeErro(campo));
    });
  });

  form.addEventListener('submit', (evento) => {
    evento.preventDefault(); // não recarrega a página: o JS decide o que acontece

    let primeiroErro = null;
    campos.forEach((campo) => {
      const mensagem = mensagemDeErro(campo);
      mostrarErro(campo, mensagem);
      if (mensagem && !primeiroErro) primeiroErro = campo;
    });

    if (primeiroErro) {
      status.textContent = 'Corrija os campos destacados para enviar.';
      status.className = 'form-status erro-geral';
      primeiroErro.focus(); // leva o foco (e o leitor de tela) ao primeiro erro
      return;
    }

    // Projeto acadêmico: não há servidor, então só confirmamos na tela
    status.textContent = form.dataset.sucesso || 'Enviado com sucesso. Obrigado!';
    status.className = 'form-status sucesso';
    form.reset();
    if (form.id === 'form-contato') apagarRascunho();
  });
}

/* ---------- 4. Rascunho do contato no localStorage ----------
   O que a pessoa digita fica salvo. Se ela recarregar ou voltar
   depois, o texto continua lá. */
const CHAVE_RASCUNHO = 'rascunho-contato';

function iniciarRascunho() {
  const form = document.getElementById('form-contato');
  if (!form) return;
  const aviso = document.getElementById('aviso-rascunho');

  // Restaura o rascunho salvo
  try {
    const salvo = JSON.parse(localStorage.getItem(CHAVE_RASCUNHO) || 'null');
    if (salvo) {
      Object.keys(salvo).forEach((nome) => {
        if (form.elements[nome]) form.elements[nome].value = salvo[nome];
      });
      if (aviso) aviso.hidden = false;
    }
  } catch (erro) {}

  // Salva a cada tecla
  form.addEventListener('input', () => {
    const dados = {};
    ['nome', 'email', 'assunto', 'mensagem'].forEach((nome) => {
      if (form.elements[nome]) dados[nome] = form.elements[nome].value;
    });
    try { localStorage.setItem(CHAVE_RASCUNHO, JSON.stringify(dados)); } catch (erro) {}
  });

  // Botão "Limpar rascunho"
  const limpar = document.getElementById('limpar-rascunho');
  if (limpar) {
    limpar.addEventListener('click', () => {
      form.reset();
      apagarRascunho();
      form.querySelectorAll('input, select, textarea').forEach((c) => mostrarErro(c, ''));
    });
  }
}

function apagarRascunho() {
  try { localStorage.removeItem(CHAVE_RASCUNHO); } catch (erro) {}
  const aviso = document.getElementById('aviso-rascunho');
  if (aviso) aviso.hidden = true;
}
