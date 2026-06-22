import { api } from '../api.js';

export const bibliotecaService = {
  listarDoJogador(jogadorId) {
    if (!jogadorId) return [];
    return api.getBiblioteca(jogadorId);
  },
  async vincular({ jogador_id, jogo_id, horas_jogadas }) {
    if (!jogador_id) throw new Error('Selecione um jogador');
    if (!jogo_id) throw new Error('Selecione um jogo');
    return api.vincularJogo({
      jogador_id: Number(jogador_id),
      jogo_id: Number(jogo_id),
      horas_jogadas: Number(horas_jogadas) || 0
    });
  }
};