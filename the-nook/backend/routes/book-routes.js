import express from 'express';
import Book from '../models/book.js';
const router = express.Router();


// CREATE: Add a new Book
router.post('/', async (req, res) => {

    try {
        const book = new Book(req.body);
        await book.save();
        res.status(201).json(book);

    } catch (err) {
        res.status(400).json({error: err.message});
    }

});


// RETRIEVE: Get ALL Books
router.get('/', async (req, res) => {

    try {
        const books = await Book.find();
        res.status(200).json(books);
    } catch (err) {
        res.status(500).json({error: err.message});
    }

});


// RETRIEVE: Get ONE book by ID
router.get('/:id', async (req, res) => {

    try {
        const book = await Book.findById(req.params.id);
        if (!book) return res.status(404).json({error: 'Book not found.'});
        res.status(200).json(book);
    } catch {
        res.status(500).json({error: err.message});
    }

});


// UPDATE: Update ONE book by ID
router.put('/:id', async (req, res) => {

    try {
        const book = await Book.findByIdAndUpdate(req.params.id, req.body, {new: true, runValidators: true});
        if (!book) return res.status(404).json({error: 'Book not found.'});
        res.status(200).json(book);
    } catch (err) {
        res.status(400).json({error: err.message});
    }

});


// DELETE: Remove ONE book by ID
router.delete('/:id', async (req, res) => {

    try {
        const book = await Book.findByIdAndDelete(req.params.id);
        if (!book) return res.status(404).json({ error: 'Book not found' });
        res.status(200).json({ message: 'Book deleted successfully' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }

});


/**
 * Follow ES6 syntax.
 */
export default router;