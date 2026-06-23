import express from 'express';
import cors from 'cors'
import { db } from './db.js';

import jogoRoutes from './routes/jogos.js';
import jogadorRoutes from './routes/jogadores.js';
import bibliotecaRoutes from './routes/bibliotecas.js';

const app = express();

// Middlewares
app.use(express.json()); 
app.use(cors());

// Rotas
app.use('/jogos', jogoRoutes);
app.use('/jogadores', jogadorRoutes);
app.use('/bibliotecas', bibliotecaRoutes);

app.get('/', (req, res) => {
  res.status(200).json({ message: "API de Catálogo de Jogos online com SQLite \n rotas: /jogos, /jogadores/, /bibliotecas"});
});

app.use((req, res) => {
  res.status(404).json({ error: "Rota não encontrada." });
});

export default app;