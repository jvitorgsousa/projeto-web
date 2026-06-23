import { jogadorModel } from '../models/jogador.js';

export const createJogador = async (dados) => {
  if (jogadorModel.existeEmail(dados.email)) {
    throw new Error('E-mail já cadastrado.'); // Regra 409
  }
  return jogadorModel.inserir(dados);
};

export const getAllJogadores = async () => {
  return jogadorModel.listarTodos();
};

export const deleteJogador = async (id) => {
  return jogadorModel.remover(id);
};