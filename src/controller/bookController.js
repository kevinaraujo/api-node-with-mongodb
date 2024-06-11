import { author } from '../models/Author.js';
import book from '../models/Book.js';

class BookController {
    static async listBooks (req, res) {
        try {
            const data = await book.find({}).populate("author").exec();
            res.status(200).json(data)
        } catch (err) {
            res.status(500).json({ error: `${err.message} - failed to list book` })
        }
    }

    static async listBookById(req, res) {
        try {
            const { id } = req.params
            const data = await book.find({ _id: id })

            res.status(200).json(data)
        } catch (err) {
            res.status(500).json({ error: `${err.message} - failed to list book by id` })
        }
    }

    static async registerBook (req, res) {
        try {

            const newBook = await book.create(req.body)

            res.status(201).json({
                "message": "success",
                book: newBook
            })
        } catch (err) {
            res.status(500).json({ error: `${err.message} - failed to register book` })
        }
    }

    static async updateBook (req, res) {
        try {
            const { id } = req.params

            await book.findByIdAndUpdate(id, req.body)
            res.status(200).json({ message: "Book updated" })
        } catch (err) {
            res.status(500).json({ error: `${err.message} - failed to update book` })
        }
    }

    static async deleteBook (req, res) {
        try {
            const { id } = req.params

            await book.findByIdAndDelete(id)
            res.status(200).json({ message: "Book deleted"})
        } catch (err) {
            res.status(500).json({ error: `${err.message} - failed to delete book` })
        }
    }

    static async listBooksByEditor(req, res) {
        try {
            const { editor } = req.query;

            const books = await book.find({ editor });

            res.status(200).json({ books })
        } catch (err) {
            res.status(500).json({
                error: `${err.message} - failed to search book`
            })
        }
    }
}

export default BookController