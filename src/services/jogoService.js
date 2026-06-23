import { jogoModel } from '../models/jogo.js';
import { bibliotecaModel } from '../models/biblioteca.js';

export const createJogo = async (dados) => {
  return jogoModel.inserir(dados); // Sem await interno!
};

export const getAllJogos = async () => {
  return jogoModel.listarTodos();
};

export const updateStatusJogo = async (id, status) => {
  const jogoAtualizado = jogoModel.atualizarStatus(id, status);
  
  if (status === 'Inativo') {
    bibliotecaModel.removerPorJogo(id);
  }
  
  return jogoAtualizado;
};