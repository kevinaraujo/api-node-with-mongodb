import express from "express"
import BookController from "../controller/bookController.js"

const routes = express.Router()

routes.get("/books", BookController.listBooks)
routes.post("/book", BookController.registerBook)

export default routes