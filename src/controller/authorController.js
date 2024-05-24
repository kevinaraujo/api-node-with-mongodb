import { author } from '../models/Author.js';

class AuthorController {
    static async listAuthors (req, res) {
        try {
            const data = await author.find({})
            res.status(200).json(data)
        } catch (err) {
            res.status(500).json({ error: `${err.message} - failed to list author` })
        }
    }

    static async listAuthorById(req, res) {
        try {
            const { id } = req.params
            const data = await author.find({ _id: id })

            res.status(200).json(data)
        } catch (err) {
            res.status(500).json({ error: `${err.message} - failed to list author by id` })
        }
    }

    static async registerAuthor (req, res) {
        try {
            const newAuthor = await author.create(req.body)

            res.status(201).json({
                "message": "success",
                author: newAuthor
            })
        } catch (err) {
            res.status(500).json({ error: `${err.message} - failed to register author` })
        }
    }

    static async updateAuthor (req, res) {
        try {
            const { id } = req.params

            await author.findByIdAndUpdate(id, req.body)
            res.status(200).json({ message: "Author updated" })
        } catch (err) {
            res.status(500).json({ error: `${err.message} - failed to update author` })
        }
    }

    static async deleteAuthor (req, res) {
        try {
            const { id } = req.params

            await author.findByIdAndDelete(id)
            res.status(200).json({ message: "Author deleted"})
        } catch (err) {
            res.status(500).json({ error: `${err.message} - failed to delete author` })
        }
    }
}

export default AuthorController