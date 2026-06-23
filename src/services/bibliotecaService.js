import { bibliotecaModel } from '../models/biblioteca.js';
import { jogadorModel } from '../models/jogador.js';
import { jogoModel } from '../models/jogo.js';

export const adicionarJogoNaBiblioteca = async (dados) => {
  // Regra de Validação 422: O jogador e o jogo existem?
  if (!jogadorModel.buscarPorId(dados.jogador_id)) throw new Error('Jogador não encontrado.');
  if (!jogoModel.buscarPorId(dados.jogo_id)) throw new Error('Jogo não encontrado.');

  return bibliotecaModel.inserir(dados);
};

export const getBibliotecaDoJogador = async (jogadorId) => {
  return bibliotecaModel.listarPorJogador(jogadorId);
};