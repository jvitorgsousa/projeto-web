const form = document.querySelector('#form-jogo');
const lista = document.querySelector('#lista-jogos');

export const jogoView = {
  renderLista(jogos) {
    lista.innerHTML = '';
    if (jogos.length === 0) {
      lista.innerHTML = '<li class="list-group-item text-muted">Nenhum jogo no catálogo.</li>';
      return;
    }
    jogos.forEach(j => {
      const li = document.createElement('li');
      li.className = 'list-group-item d-flex align-items-center gap-3';
      
      if (j.capa_url) {
        const img = document.createElement('img');
        img.src = j.capa_url;
        img.className = 'capa-mini';
        li.appendChild(img);
      }

      const info = document.createElement('div');
      info.innerHTML = `<strong>${j.titulo}</strong> <br> <small class="text-muted">${j.genero} • ${j.plataforma}</small>`;
      li.appendChild(info);
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