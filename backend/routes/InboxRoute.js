import express from 'express';
import { InboxController } from '../controllers/InboxController.js';

const router = express.Router();

// Route to get all messages from the inbox
router.get('/get/:id', InboxController.getInbox);
router.get('/view/:id', InboxController.viewInbox);

router.post('/send', InboxController.insertInbox);

export default router;
