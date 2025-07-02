const Book = {
    title: String,
    author: String,
    genre: String,
    price: Number,
    createdAt: {
        type: 'timestamp',
        default: new Date()
    }
};

module.exports = Book;
