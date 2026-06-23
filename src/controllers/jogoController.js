import * as jogoService from '../services/jogoService.js';

export const cadastrarJogo = async (req, res) => {
  try {
    const novoJogo = await jogoService.createJogo(req.body);
    res.status(201).json(novoJogo);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export const listarJogos = async (req, res) => {
  try {
    const jogos = await jogoService.getAllJogos();
    res.status(200).json(jogos);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const atualizarStatusJogo = async (req, res) => {
  try {
    const { id } = req.params;
    const { status } = req.body;
    const jogoAtualizado = await jogoService.updateStatusJogo(id, status);
    res.status(200).json(jogoAtualizado);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};