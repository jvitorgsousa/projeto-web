import { jogadorService } from './services/jogadorService.js';
import { jogoService } from './services/jogoService.js';
import { bibliotecaService } from './services/bibliotecaService.js';
import { jogadorView } from './ui/jogadorView.js';
import { jogoView } from './ui/jogoView.js';
import { bibliotecaView } from './ui/bibliotecaView.js';

const alerta = document.querySelector('#alerta');
let jogadorSelecionadoAtualmente = '';

function mostrarErro(msg) {
  alerta.textContent = msg;
  alerta.classList.remove('d-none');
}
function limparErro() {
  alerta.classList.add('d-none');
  alerta.textContent = '';
}

async function carregarDadosGlobais() {
  try {
    const jogadores = await jogadorService.listar();
    const jogos = await jogoService.listar();
    
    // 🎯 CORRIGIDO: Chamadas duplicadas removidas e parâmetros alinhados perfeitamente
    jogadorView.renderLista(jogadores, deletarJogadorEAtualizar);
    jogoView.renderLista(jogos, alterarStatusJogoEAtualizar);
    bibliotecaView.preencherDropdowns(jogadores, jogos);
    
    if (jogadorSelecionadoAtualmente) {
      await carregarBiblioteca(jogadorSelecionadoAtualmente);
    }
  } catch (err) {
    mostrarErro('Erro de conexão com a API. O seu backend SQLite em :3000 está online com CORS habilitado?');
  }
}

async function cadastrarJogador(dados) {
  limparErro();
  try {
    await jogadorService.criar(dados);
    jogadorView.limparForm();
    await carregarDadosGlobais();
  } catch (err) { mostrarErro(err.message); }
}

async function cadastrarJogo(dados) {
  limparErro();
  try {
    await jogoService.criar(dados);
    jogoView.limparForm();
    await carregarDadosGlobais();
  } catch (err) { mostrarErro(err.message); }
}

async function deletarJogadorEAtualizar(id) {
  limparErro();
  try {
    await jogadorService.remover(id);
    await carregarDadosGlobais(); // Recarrega tudo atualizado
  } catch (err) { mostrarErro(err.message); }
}

async function alterarStatusJogoEAtualizar(id, novoStatus) {
limparErro();
  try {
    await jogoService.mudarStatus(id, novoStatus);
    
    await carregarDadosGlobais();
    
    if (jogadorSelecionadoAtualmente) {
      await carregarBiblioteca(jogadorSelecionadoAtualmente);
    }
  } catch (err) { mostrarErro(err.message); }
}

async function vincularNaBiblioteca(dados) {
  limparErro();
  try {
    await bibliotecaService.vincular(dados);
    bibliotecaView.limparForm();
    jogadorSelecionadoAtualmente = dados.jogador_id;
    await carregarDadosGlobais();
  } catch (err) { mostrarErro(err.message); }
}

async function carregarBiblioteca(jogadorId) {
  limparErro();
  jogadorSelecionadoAtualmente = jogadorId;
  if (!jogadorId) {
    bibliotecaView.renderLista([]);
    return;
  }
  try {
    const registros = await bibliotecaService.listarDoJogador(jogadorId);
    bibliotecaView.renderLista(registros);
  } catch (err) { mostrarErro(err.message); }
}

// Ouvintes de Eventos da Interface
jogadorView.onSubmit(cadastrarJogador);
jogoView.onSubmit(cadastrarJogo);
bibliotecaView.onSubmit(vincularNaBiblioteca);
bibliotecaView.onFiltroAlterado(carregarBiblioteca);

// Inicialização da Aplicação
carregarDadosGlobais();