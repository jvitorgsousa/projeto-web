const form = document.querySelector('#form-jogador');
const lista = document.querySelector('#lista-jogadores');

export const jogadorView = {
  // 🎯 ADICIONADO: 'aoRemover' agora é recebido como parâmetro aqui
  renderLista(jogadores, aoRemover) {
    lista.innerHTML = '';
    
    if (jogadores.length === 0) {
      lista.innerHTML = '<li class="list-group-item text-muted">Nenhum jogador registrado.</li>';
      return;
    }
    
    jogadores.forEach(j => {
      const li = document.createElement('li');
      li.className = 'list-group-item d-flex justify-content-between align-items-center';
      li.innerHTML = `
        <span>#${j.id} — ${j.nome}</span>
        <button class="btn btn-sm btn-outline-danger btn-del" data-id="${j.id}">Remover</button>
      `;
      
      // 🎯 SEGURANÇA: Só adiciona o evento se a função 'aoRemover' de fato foi passada
      const btnDel = li.querySelector('.btn-del');
      if (aoRemover) {
        btnDel.addEventListener('click', (e) => {
          e.preventDefault();
          if (confirm(`Deseja mesmo remover o jogador ${j.nome}?`)) {
            aoRemover(j.id);
          }
        });
      }

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