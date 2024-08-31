import mongoose from 'mongoose'

const InboxSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  subject: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  date: {
    type: String,
    default: false
  }
});

export default mongoose.model('Message', InboxSchema);