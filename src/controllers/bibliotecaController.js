import * as bibliotecaService from '../services/bibliotecaService.js';

export const vincularJogo = async (req, res) => {
  try {
    const vinculo = await bibliotecaService.adicionarJogoNaBiblioteca(req.body);
    res.status(201).json(vinculo);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export const obterJogosDoJogador = async (req, res) => {
  try {
    const { jogadorId } = req.params;
    const biblioteca = await bibliotecaService.getBibliotecaDoJogador(jogadorId);
    res.status(200).json(biblioteca);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};