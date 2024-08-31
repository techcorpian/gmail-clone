import express from 'express'; 
import mongoose from 'mongoose';
import cors from 'cors';
import * as dotenv from "dotenv";
dotenv.config();

import UserRoute from './routes/auth/AuthRoute.js'
import InboxRoutes from './routes/InboxRoute.js';


const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

// Define routes here
app.use('/inbox', InboxRoutes);
app.use('/auth', UserRoute);

// console.log('JWT_SECRET:', process.env.JWT_SECRET);
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
