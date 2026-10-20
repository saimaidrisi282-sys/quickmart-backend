require('dotenv').config();
const mongoose = require('mongoose');

console.log('Node version:', process.version);
console.log('Host:', (process.env.MONGO_URI || '').split('@')[1]);

mongoose
  .connect(process.env.MONGO_URI, { serverSelectionTimeoutMS: 15000 })
  .then(() => {
    console.log('DB OK');
    process.exit(0);
  })
  .catch((e) => {
    console.log('DB ERROR:', e.message);
    process.exit(1);
  });