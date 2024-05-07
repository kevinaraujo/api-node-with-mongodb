import Book from '../models/Book.js';

class BookController {
    static async listBooks (req, res) {
        const data = await Book.find({})

        res.status(200).json(data)
    }

    static async registerBook (req, res) {
        try {
            const newBook = await Book.create(req.body)

            res.status(201).json({
                "message": "success",
                book: newBook
            })
        } catch (err) {
            res.status(500).json({ "error": `${err.message} - failed to register book` })
        }
    }
}

export default BookController