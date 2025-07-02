const Book = require('../models/book.model');

const createBook = async (req, res) => {
    try {
        const { title, author, genre, price } = req.body;

        if (!title || !author || !genre || !price) {
            return res.status(400).json({ message: 'All fields are required' });
        }

        const bookRef = db.collection('books').doc();
        await bookRef.set({
            title,
            author,
            genre,
            price,
            createdAt: new Date()
        });

        return res.status(201).json({ message: 'Book created successfully', id: bookRef.id });
    } catch (error) {
        console.error('Error creating book:', error);
        return res.status(500).json({ message: 'Error creating book' });
    }
};

const getBooks = async (req, res) => {
    try {
        const booksSnapshot = await db.collection('books').get();
        const books = booksSnapshot.docs.map(doc => ({
            id: doc.id,
            ...doc.data()
        }));

        return res.status(200).json(books);
    } catch (error) {
        console.error('Error fetching books:', error);
        return res.status(500).json({ message: 'Error fetching books' });
    }
};

module.exports = { createBook, getBooks };
