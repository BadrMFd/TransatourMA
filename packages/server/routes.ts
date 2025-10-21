import express from 'express';
import { chatController } from './controllers/chat.controller';
import { transatourController } from './controllers/transatour.controller';

const router = express.Router();

router.post('/api/chat', chatController.sendMessage);

router.get('/api/promotions', transatourController.getPromotions);

export default router;
