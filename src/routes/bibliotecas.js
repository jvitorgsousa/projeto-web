import { Router } from 'express';
import { vincularJogo, obterJogosDoJogador } from '../controllers/bibliotecaController.js';

const router = Router();

router.post('/', vincularJogo);
router.get('/:jogadorId', obterJogosDoJogador);

export default router;