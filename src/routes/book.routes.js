const express = require('express');
const { createBook, getBooks } = require('../controller/bookController');

const bookRoutes = express.Router();

bookRoutes.post('/books', createBook);
bookRoutes.get('/books', getBooks);

module.exports = { bookRoutes };
