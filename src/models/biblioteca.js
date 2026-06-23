import { db } from '../db.js';

// Traduz o snake_case do SQL para o camelCase do JavaScript da sua API
function paraApi(row) {
  if (!row) return null;
  return {
    id: row.id,
    jogadorId: row.jogador_id,
    jogoId: row.jogo_id,
    horasJogadas: row.horas_jogadas,
    titulo: row.titulo,            // campos vindos do JOIN
    plataforma: row.plataforma,
    capaUrl: row.capa_url
  };
}

export const bibliotecaModel = {
  inserir({ jogador_id, jogo_id, horas_jogadas }) {
    const r = db.prepare(
      'INSERT INTO biblioteca (jogador_id, jogo_id, horas_jogadas) VALUES (?, ?, ?)'
    ).run(Number(jogador_id), Number(jogo_id), Number(horas_jogadas) || 0);
    
    return db.prepare('SELECT * FROM biblioteca WHERE id = ?').get(r.lastInsertRowid);
  },

  listarPorJogador(jogadorId) {
    const rows = db.prepare(`
      SELECT b.*, j.titulo, j.plataforma, j.capa_url 
      FROM biblioteca b
      INNER JOIN jogos j ON b.jogo_id = j.id
      WHERE b.jogador_id = ?
    `).all(Number(jogadorId));
    
    return rows.map(paraApi);
  },

  removerPorJogo(jogoId) {
    return db.prepare('DELETE FROM biblioteca WHERE jogo_id = ?').run(Number(jogoId)).changes;
  }
};