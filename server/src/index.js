import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';

import config from './config/config';
import router from './router/router';

const app = express();

mongoose.connect(config.mongoUrl, () => {
  console.log("Database is now connected");
});

// app.use(express.json());
app.use(express.urlencoded({extended : true}));
app.use(cors());
app.use('/contactList', router);

app.listen(config.port,() => {
  console.log("The app is listening on the port 8080");
});
