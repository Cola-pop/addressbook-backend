const mongoose = require('mongoose');
require('dotenv').config();

mongoose.set('strictQuery', true);

mongoose.connect(
  process.env.DB_STRING,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (error) => {
    if (error) {
      console.log(error);
    } else {
      console.log('Successfully connected to the database');
    }
  }
);
