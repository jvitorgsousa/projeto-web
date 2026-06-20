import express from 'express';
import jogoRoutes from './routes/jogos.js';
import jogadorRoutes from './routes/jogadores.js';
import bibliotecaRoutes from './routes/bibliotecas.js';

const app = express();

// Middlewares
app.use(express.json()); 

// Rotas
app.use('/jogos', jogoRoutes);
app.use('/jogadores', jogadorRoutes);
app.use('/bibliotecas', bibliotecaRoutes);

app.get('/', (req, res) => {
  res.status(200).json({ message: "API de Catálogo de Jogos online com SQLite" });
});

app.use((req, res) => {
  res.status(404).json({ error: "Rota não encontrada." });
});

export default app;