import express from 'express';
import connectToDb from '../config/db.js';
import routes from "./index.js"

const connection = await connectToDb();

connection.on("error", (err) => {
    console.log("Mongo connection error => ", err);
});

connection.once("open", () => {
    console.log("Mongo connection done!")
});

const app = express();
routes(app)

app.delete('/books/:id', (req, res) => {
    const index = findBooks(req.params.id);
    
    books.splice(index, 1);

    res.status(200).json({
        'message': `item ${req.params.id} deleted`
    })
});



export default app;
