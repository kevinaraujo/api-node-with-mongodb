import express from "express"
import BookController from "../controller/bookController.js"

const routes = express.Router()

routes.get("/books", BookController.listBooks)
routes.get("/books/:id", BookController.listBookById)
routes.post("/books", BookController.registerBook)
routes.put("/books/:id", BookController.updateBook)

export default routes