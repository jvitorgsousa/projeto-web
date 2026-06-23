const form = document.querySelector('#form-jogo');
const lista = document.querySelector('#lista-jogos');

export const jogoView = {
  renderLista(jogos, aoMudarStatus) {
  lista.innerHTML = '';
  if (jogos.length === 0) {
    lista.innerHTML = '<li class="list-group-item text-muted">Nenhum jogo no catálogo.</li>';
    return;
  }
  jogos.forEach(j => {
    const li = document.createElement('li');
    li.className = 'list-group-item d-flex justify-content-between align-items-center';
    li.innerHTML = `
      <div><strong>${j.titulo}</strong> <span class="badge ${j.status === 'Ativo' ? 'bg-success' : 'bg-warning'}">${j.status}</span></div>
      <button class="btn btn-sm btn-outline-secondary btn-status">${j.status === 'Ativo' ? 'Inativar' : 'Ativar'}</button>
    `;
    
    li.querySelector('.btn-status').addEventListener('click', () => {
      const novoStatus = j.status === 'Ativo' ? 'Inativo' : 'Ativo';
      aoMudarStatus(j.id, novoStatus);
    });
    lista.appendChild(li);
    });
  },
  limparForm() { form.reset(); },
  onSubmit(callback) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      callback({
        titulo: document.querySelector('#jogo-titulo').value,
        genero: document.querySelector('#jogo-genero').value,
        plataforma: document.querySelector('#jogo-plataforma').value,
        desenvolvedora: document.querySelector('#jogo-desenvolvedora').value,
        capa_url: document.querySelector('#jogo-capa').value,
      });
    });
  }
};