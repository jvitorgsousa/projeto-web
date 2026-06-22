import { api } from '../api.js';

export const jogoService = {
  listar() { return api.getJogos(); },
  async criar({ titulo, genero, plataforma, desenvolvedora, capa_url }) {
    if (!titulo?.trim()) throw new Error('Título é obrigatório');
    if (!genero?.trim()) throw new Error('Gênero é obrigatório');
    if (!plataforma?.trim()) throw new Error('Plataforma é obrigatória');
    if (!desenvolvedora?.trim()) throw new Error('Desenvolvedora é obrigatória');
    return api.criarJogo({
      titulo: titulo.trim(),
      genero: genero.trim(),
      plataforma: plataforma.trim(),
      desenvolvedora: desenvolvedora.trim(),
      capa_url: capa_url?.trim() || null
    });
  }
};