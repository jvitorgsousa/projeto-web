import dbPromise from '../models/jogo.js';

export const createJogo = async (dados) => {
  const db = await dbPromise;
  const { titulo, genero, plataforma, desenvolvedora, capa_url, status } = dados;
  
  const resultado = await db.run(
    `INSERT INTO jogos (titulo, genero, plataforma, desenvolvedora, capa_url, status) 
     VALUES (?, ?, ?, ?, ?, ?)`,
    [titulo, genero, plataforma, desenvolvedora, capa_url, status || 'Ativo']
  );
  
  return { id: resultado.lastID, ...dados };
};

export const getAllJogos = async () => {
  const db = await dbPromise;
  return await db.all('SELECT * FROM jogos');
};