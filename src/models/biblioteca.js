import { open } from 'sqlite';
import sqlite3 from 'sqlite3';

const dbPromise = open({
  filename: './database.db',
  driver: sqlite3.Database
});

(async () => {
  const db = await dbPromise;
  await db.exec(`
    CREATE TABLE IF NOT EXISTS biblioteca (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      jogador_id INTEGER NOT NULL,
      jogo_id INTEGER NOT NULL,
      horas_jogadas REAL DEFAULT 0,
      FOREIGN KEY (jogador_id) REFERENCES jogadores (id) ON DELETE CASCADE,
      FOREIGN KEY (jogo_id) REFERENCES jogos (id) ON DELETE CASCADE
    )
  `);
})();

export default dbPromise;