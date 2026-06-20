import { open } from 'sqlite';
import sqlite3 from 'sqlite3';

const dbPromise = open({
  filename: './database.db',
  driver: sqlite3.Database
});

(async () => {
  const db = await dbPromise;
  await db.exec(`
    CREATE TABLE IF NOT EXISTS jogos (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      titulo TEXT NOT NULL,
      genero TEXT NOT NULL,
      plataforma TEXT NOT NULL,
      desenvolvedora TEXT NOT NULL,
      capa_url TEXT,
      status TEXT DEFAULT 'Ativo'
    )
  `);
})();

export default dbPromise;