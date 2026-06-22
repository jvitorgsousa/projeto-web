import { API_URL } from './config.js';

async function request(caminho, opcoes = {}) {
  const resp = await fetch(`${API_URL}${caminho}`, {
    headers: { 'Content-Type': 'application/json' },
    ...opcoes,
  });

  if (!resp.ok) {
    let msg = `Erro ${resp.status}`;
    try {
      const corpo = await resp.json();
      if (corpo && corpo.error) msg = corpo.error;
    } catch (_) {}
    throw new Error(msg);
  }

  if (resp.status === 204) return null;
  return resp.json();
}

export const api = {
  // Jogadores
  getJogadores() { return request('/jogadores'); },
  criarJogador(dados) { return request('/jogadores', { method: 'POST', body: JSON.stringify(dados) }); },

  // Jogos
  getJogos() { return request('/jogos'); },
  criarJogo(dados) { return request('/jogos', { method: 'POST', body: JSON.stringify(dados) }); },

  // Biblioteca
  getBiblioteca(jogadorId) { return request(`/bibliotecas/${jogadorId}`); },
  vincularJogo(dados) { return request('/bibliotecas', { method: 'POST', body: JSON.stringify(dados) }); }
};