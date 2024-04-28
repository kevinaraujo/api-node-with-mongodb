import express from 'express';
import connectToDb from './config/db.js';
import book from './models/book.js';

const connection = await connectToDb();

connection.on("error", (err) => {
    console.log("Mongo connection error => ", err);
});

connection.once("open", () => {
    console.log("Mongo connection done!")
});

const app = express();
app.use(express.json());

app.get('/', (req, res) => {
    res.status(200).send({
        success: 'ok'
    });
});

app.get('/books', async (req, res) => {
    const data = await book.find({});

    res.status(200).json(data);
});

app.post('/books', (req, res) => {
    books.push(req.body);

    res.status(201).json({
        "message": "success"
    })
});

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
