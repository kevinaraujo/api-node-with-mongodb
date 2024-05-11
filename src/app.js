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

export default app;
