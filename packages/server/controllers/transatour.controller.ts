import type { Request, Response } from 'express';
import { transatourService } from '../services/transatour.service';

export const transatourController = {
   getPromotions: async (req: Request, res: Response) => {
      try {
         const promotions = await transatourService.getPromotions();
         res.json(promotions);
      } catch (error) {
         res.status(500).json({ error: 'Failed to get promotions.' });
         console.error(error);
      }
   },
};
