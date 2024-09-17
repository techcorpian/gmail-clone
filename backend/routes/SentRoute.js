import express from 'express';
import { SentController } from '../controllers/SentController.js';

const router = express.Router();

// Route to get all messages from the inbox
router.get('/get/:id', SentController.getSent);

export default router;