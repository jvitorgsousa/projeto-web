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

export const deletarJogador = async (req, res) => {
  try {
    const { id } = req.params;
    const apagado = await jogadorService.deleteJogador(id);
    if (!apagado) return res.status(404).json({ error: "Jogador não encontrado." });
    res.status(204).send(); // 204 = No Content (Sucesso sem corpo)
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};