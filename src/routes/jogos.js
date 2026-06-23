import { Router } from 'express';
import { cadastrarJogo, listarJogos, atualizarStatusJogo} from '../controllers/jogoController.js';

const router = Router();

router.post('/', cadastrarJogo);
router.get('/', listarJogos);
router.put('/:id/status', atualizarStatusJogo);

export default router;