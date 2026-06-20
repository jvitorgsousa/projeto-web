import dbPromise from '../models/biblioteca.js';

export const adicionarJogoNaBiblioteca = async (dados) => {
  const db = await dbPromise;
  const { jogador_id, jogo_id, horas_jogadas } = dados;
  
  const resultado = await db.run(
    `INSERT INTO biblioteca (jogador_id, jogo_id, horas_jogadas) VALUES (?, ?, ?)`,
    [jogador_id, jogo_id, horas_jogadas || 0]
  );
  
  return { id: resultado.lastID, ...dados };
};

export const getBibliotecaDoJogador = async (jogadorId) => {
  const db = await dbPromise;
  return await db.all(
    `SELECT b.id AS biblioteca_id, b.horas_jogadas, j.* FROM biblioteca b
     INNER JOIN jogos j ON b.jogo_id = j.id
     WHERE b.jogador_id = ?`,
    [jogadorId]
  );
};