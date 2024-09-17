import Message from '../models/InboxModel.js';

export class InboxController {
  static async getInbox(req, res) {
    try {
      const id = req.params.id;
      const inbox = await Message.find({toAddress: id});
      res.status(200).json(inbox);
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: 'Server error occurred' });
    }
  };

  static async insertInbox(req, res) {
    const { addressArr, subject, message, userFirstname, userLastname, userMail } = req.body;
    const title = `${userFirstname} ${userLastname}`;
  
    try {
      const promises = addressArr.map(async (element) => {
        const newMessage = new Message({ toAddress: element, subject, message, title, fromAddress: userMail });
        await newMessage.save();
      });
  
      await Promise.all(promises);
  
      res.status(201).json({ message: 'Message Sent Successfully' });
    } catch (err) {
      res.status(500).json({ err });
    }
  }

  static async viewInbox(req, res) {
    try {
      const id = req.params.id;
      const inbox = await Message.find({_id: id});
      res.status(200).json(inbox);
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: 'Server error occurred' });
    }
  };
  
}
