import { DatabaseSync } from 'node:sqlite';

// Cria o arquivo fisico do banco local na raiz do projeto
export const db = new DatabaseSync('jogos.db');

// Ativa as chaves estrangeiras no SQLite de forma obrigatoria
db.exec('PRAGMA foreign_keys = ON;');

// Cria a estrutura relacional do seu sistema
db.exec(`
  CREATE TABLE IF NOT EXISTS jogadores (
    id            INTEGER PRIMARY KEY AUTOINCREMENT,
    nome          TEXT NOT NULL,
    email         TEXT NOT NULL UNIQUE,
    senha         TEXT NOT NULL,
    data_cadastro TEXT NOT NULL
  );

  CREATE TABLE IF NOT EXISTS jogos (
    id             INTEGER PRIMARY KEY AUTOINCREMENT,
    titulo         TEXT NOT NULL,
    genero         TEXT NOT NULL,
    plataforma     TEXT NOT NULL,
    desenvolvedora TEXT NOT NULL,
    capa_url       TEXT,
    status         TEXT DEFAULT 'Ativo'
  );

  CREATE TABLE IF NOT EXISTS biblioteca (
    id            INTEGER PRIMARY KEY AUTOINCREMENT,
    jogador_id    INTEGER NOT NULL,
    jogo_id       INTEGER NOT NULL,
    horas_jogadas REAL DEFAULT 0,
    FOREIGN KEY (jogador_id) REFERENCES jogadores(id) ON DELETE CASCADE,
    FOREIGN KEY (jogo_id) REFERENCES jogos(id) ON DELETE CASCADE
  );
`);