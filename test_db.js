require('dotenv').config();
const mongoose = require('mongoose');

mongoose
  .connect(process.env.MONGO_URI, { serverSelectionTimeoutMS: 10000 })
  .then(() => {
    console.log('DB OK');
    process.exit(0);
  })
  .catch((e) => {
    console.log('DB ERROR:', e.message);
    process.exit(1);
  });