import Sent from '../models/SentModel.js';

export class SentController {
  static async getSent(req, res) {
    try {
      const id = req.params.id;
      const sent = await Sent.find({fromAddress: id});
      res.status(200).json(sent);
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: 'Server error occurred' });
    }
  };
  
}