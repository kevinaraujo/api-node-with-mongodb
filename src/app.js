import express from 'express';
import connectToDb from './config/db.js';
import routes from "./routes/index.js"

const connection = await connectToDb();

connection.on("error", (err) => {
    console.log("Mongo connection error => ", err);
});

connection.once("open", () => {
    console.log("Mongo connection done!")
});

const app = express();
routes(app)

app.get('/books/:id', (req, res) => {
    console.log('id =>',req.params.id);
    const index = findBooks(req.params.id);

    res.status(200).json(books[index]);
});

app.put('/books/:id', (req, res) => {
    const index = findBooks(req.params.id);
    
    books[index].title = req.body.title;

    res.status(200).json(books)
});

app.delete('/books/:id', (req, res) => {
    const index = findBooks(req.params.id);
    
    books.splice(index, 1);

    res.status(200).json({
        'message': `item ${req.params.id} deleted`
    })
});



export default app;
