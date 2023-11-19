import { MongoClient } from 'mongodb';

let db;

async function connectToDb(cb) {
    const client = new MongoClient(`mongodb+srv://${process.env.MONGO_USERNAME}:${process.env.MONGO_PASSWORD}@cluster0.xuc1u3b.mongodb.net/?retryWrites=true&w=majority`);
    await client.connect();
    // db = client.db('react-blog-db');
    db = client.db('simple-mongo-test01');
    cb();
}

export {
    db,
    connectToDb,
};
