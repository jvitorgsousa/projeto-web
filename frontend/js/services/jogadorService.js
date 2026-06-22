import { api } from '../api.js';

export const jogadorService = {
  listar() { return api.getJogadores(); },
  async criar({ nome, email, senha }) {
    if (!nome?.trim()) throw new Error('Nome é obrigatório');
    if (!email?.trim()) throw new Error('Email é obrigatório');
    if (!senha?.trim()) throw new Error('Senha é obrigatória');
    return api.criarJogador({ nome: nome.trim(), email: email.trim(), senha });
  }
};