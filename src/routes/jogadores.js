import { Router } from 'express';
import { cadastrarJogador, listarJogadores } from '../controllers/jogadorController.js';

const router = Router();

router.post('/', cadastrarJogador);
router.get('/', listarJogadores);

export default router;