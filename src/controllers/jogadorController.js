import * as jogadorService from '../services/jogadorService.js';

export const cadastrarJogador = async (req, res) => {
  try {
    const novoJogador = await jogadorService.createJogador(req.body);
    res.status(201).json(novoJogador);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export const listarJogadores = async (req, res) => {
  try {
    const jogadores = await jogadorService.getAllJogadores();
    res.status(200).json(jogadores);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};