import { Router } from 'express';
import { cadastrarJogador, listarJogadores, deletarJogador} from '../controllers/jogadorController.js';

const router = Router();

router.post('/', cadastrarJogador);
router.get('/', listarJogadores);
router.delete('/:id', deletarJogador);

export default router;