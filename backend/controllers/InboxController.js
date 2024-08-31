import Message from '../models/InboxModel.js';

// Get all Todos
export const getInbox = async (req, res) => {
    try {
      const inbox = await Message.find();
      res.json(inbox);
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  };