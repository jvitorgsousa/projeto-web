const form = document.querySelector('#form-jogador');
const lista = document.querySelector('#lista-jogadores');

export const jogadorView = {
  renderLista(jogadores) {
    lista.innerHTML = '';
    if (jogadores.length === 0) {
      lista.innerHTML = '<li class="list-group-item text-muted">Nenhum jogador registrado.</li>';
      return;
    }
    jogadores.forEach(j => {
      const li = document.createElement('li');
      li.className = 'list-group-item';
      li.textContent = `#${j.id} — ${j.nome} (${j.email})`;
      lista.appendChild(li);
    });
  },
  limparForm() { form.reset(); },
  onSubmit(callback) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      callback({
        nome: document.querySelector('#jog-nome').value,
        email: document.querySelector('#jog-email').value,
        senha: document.querySelector('#jog-senha').value,
      });
    });
  }
};