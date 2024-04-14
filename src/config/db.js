import mongoose from "mongoose";

async function connectToDb() {
    mongoose.connect("mongodb+srv://kevinaraujo:admin123@cluster0.9lfmusg.mongodb.net/library?retryWrites=true&w=majority&appName=Cluster0");

    return mongoose.connection;
}

export default connectToDb;