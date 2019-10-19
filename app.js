require('dotenv').config()

// require('./db');
const express = require('express');
const app = express();

const port = 3000;

//db

const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
  name: String,
  volume: Number,
});

const Book = mongoose.model('Book', bookSchema);

const uri = 'mongodb+srv://admin_root:hellofromme@aoy1-dd3ay.mongodb.net/book_store?retryWrites=true&w=majority'
mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection;

db.on('error', (error) => {
  console.log('error', error);
});

db.once('open', () => {
  console.log('mongo connected');
});

Book.find((err, books) => {
  if (err) return console.log('error');
  console.log('all books', books);
});

//

app.get('/', (req, res) => {
  res.send('hello');
});

// app.listen(port, () => {
//   console.log(`server run at port: ${port}`);
// });
