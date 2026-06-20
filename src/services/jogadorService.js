import dbPromise from '../models/jogador.js';

export const createJogador = async (dados) => {
  const db = await dbPromise;
  const { nome, email, senha } = dados;
  
  const resultado = await db.run(
    `INSERT INTO jogadores (nome, email, senha) VALUES (?, ?, ?)`,
    [nome, email, senha]
  );
  
  return { id: resultado.lastID, nome, email };
};

export const getAllJogadores = async () => {
  const db = await dbPromise;
  return await db.all('SELECT id, nome, email, data_cadastro FROM jogadores');
};