import { db } from '../db.js';

export const jogoModel = {
  listarTodos() {
    return db.prepare('SELECT * FROM jogos').all();
  },

  buscarPorId(id) {
    return db.prepare('SELECT * FROM jogos WHERE id = ?').get(id) || null;
  },

    atualizarStatus(id, status) {
    db.prepare('UPDATE jogos SET status = ? WHERE id = ?').run(status, Number(id));
    return this.buscarPorId(id);
  },

  inserir({ titulo, genero, plataforma, desenvolvedora, capa_url, status }) {
    const r = db.prepare(
      `INSERT INTO jogos (titulo, genero, plataforma, desenvolvedora, capa_url, status) 
       VALUES (?, ?, ?, ?, ?, ?)`
    ).run(titulo, genero, plataforma, desenvolvedora, capa_url ?? null, status || 'Ativo');
    return this.buscarPorId(r.lastInsertRowid);
  }
};