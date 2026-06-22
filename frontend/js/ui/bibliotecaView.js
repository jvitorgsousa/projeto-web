const form = document.querySelector('#form-biblioteca');
const selectJogador = document.querySelector('#bib-jogador');
const selectFiltro = document.querySelector('#filtro-jogador-biblioteca');
const selectJogo = document.querySelector('#bib-jogo');
const lista = document.querySelector('#lista-biblioteca');

export const bibliotecaView = {
  preencherDropdowns(jogadores, jogos) {
    // Popula dropdown de Jogadores para vínculo
    selectJogador.innerHTML = '<option value="">Selecione o Jogador...</option>';
    selectFiltro.innerHTML = '<option value="">Escolha um jogador para ver seus jogos...</option>';
    jogadores.forEach(j => {
      const opt1 = new Option(`${j.nome} (#${j.id})`, j.id);
      const opt2 = new Option(`${j.nome} (#${j.id})`, j.id);
      selectJogador.add(opt1);
      selectFiltro.add(opt2);
    });

    // Popula dropdown de Jogos
    selectJogo.innerHTML = '<option value="">Selecione o Jogo...</option>';
    jogos.forEach(j => {
      selectJogo.add(new Option(`${j.titulo} (${j.plataforma})`, j.id));
    });
  },

  renderLista(registrosBiblioteca) {
    lista.innerHTML = '';
    if (registrosBiblioteca.length === 0) {
      lista.innerHTML = '<li class="list-group-item text-muted">Nenhum jogo nesta biblioteca.</li>';
      return;
    }
    registrosBiblioteca.forEach(reg => {
      const li = document.createElement('li');
      li.className = 'list-group-item d-flex justify-content-between align-items-center';
      li.innerHTML = `<div><strong>${reg.titulo}</strong> <small class="text-muted">(${reg.plataforma})</small></div>
                      <span class="badge bg-secondary">${reg.horas_jogadas}h jogadas</span>`;
      lista.appendChild(li);
    });
  },

  limparForm() {
    document.querySelector('#bib-horas').value = '';
    selectJogo.value = '';
  },

  onFiltroAlterado(callback) {
    selectFiltro.addEventListener('change', () => callback(selectFiltro.value));
  },

  onSubmit(callback) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      callback({
        jogador_id: selectJogador.value,
        jogo_id: selectJogo.value,
        horas_jogadas: document.querySelector('#bib-horas').value
      });
    });
  }
};