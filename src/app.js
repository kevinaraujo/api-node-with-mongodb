import express from 'express';

const books = [
    {
        id: 1,
        title: 'Book 1'
    },
    {
        id: 2,
        title: 'Book 21'
    }
];

const findBooks = (id) => {
    return books.findIndex(book => book.id === Number(id));
}

const app = express();
app.use(express.json());

app.get('/', (req, res) => {
    res.status(200).send({
        success: 'ok'
    });
});

app.get('/books', (req, res) => {
    res.status(200).json(books);
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

