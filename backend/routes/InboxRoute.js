import express from 'express';
const router = express.Router();
import { getInbox } from '../controllers/InboxController.js';

// Get all Todos
router.get('/get', getInbox);

export default router;