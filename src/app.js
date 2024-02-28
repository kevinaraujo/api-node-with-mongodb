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

const app = express();

app.get('/', (req, res) => {
    res.status(200).send({
        success: 'ok'
    });
});

app.get('/books', (req, res) => {
    res.status(200).json(books);
});

export default app;

