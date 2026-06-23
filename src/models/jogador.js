import { db } from '../db.js';

export const jogadorModel = {
  listarTodos() {
    return db.prepare('SELECT id, nome, email, data_cadastro FROM jogadores').all();
  },

  buscarPorId(id) {
    return db.prepare('SELECT id, nome, email, data_cadastro FROM jogadores WHERE id = ?').get(id) || null;
  },

  remover(id) {
    return db.prepare('DELETE FROM jogadores WHERE id = ?').run(Number(id)).changes > 0;
  },

  existeEmail(email) {
    return db.prepare('SELECT 1 FROM jogadores WHERE email = ?').get(email) !== undefined;
  },

  inserir({ nome, email, senha }) {
    const r = db.prepare(
      'INSERT INTO jogadores (nome, email, senha, data_cadastro) VALUES (?, ?, ?, ?)'
    ).run(nome, email, senha, new Date().toISOString());
    return this.buscarPorId(r.lastInsertRowid);
  }
};