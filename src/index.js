import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';

import users from './routes/usersRouter.js';
import collections from './routes/collectionsRouter.js';
import checkAuthentication from './middleware/checkAuthentication.js';

const app = express();
const PORT = process.env.PORT || '3601';

app
  .use(cors())
  .use(bodyParser.json())
  .use(checkAuthentication)
  .use('/users', users)
  .use('/collections', collections);

const main = async () => {
  console.info('⏳ Starting the Winery API...');
  
  try {
    console.info('⏳ Connecting to MongoDB...');
    await mongoose.connect(process.env.DB_URI);
    console.info('✅ Connected to MongoDB!');
  } catch(err) {
    throw(err);
  }

  app.listen(PORT, () => {
    console.info(`🍇 Winery API listening on port ${PORT}`);
  });

}

main()
  .catch(e => {
    console.error(e);
  });
