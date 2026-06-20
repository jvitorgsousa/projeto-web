import { Router } from 'express';
import { cadastrarJogo, listarJogos } from '../controllers/jogoController.js';

const router = Router();

router.post('/', cadastrarJogo);
router.get('/', listarJogos);

export default router;