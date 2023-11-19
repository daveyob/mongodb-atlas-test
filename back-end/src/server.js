import express from 'express';
const app = express();
import 'dotenv/config';
import { db, connectToDb } from './db.js';

app.get('/api/hello', (req, res) => {
    res.send('<p>Hello there how are you today!</p>');
});

app.get('/api/users', async (req, res) => {
    //return all user documents from the users collection
    const users = await db.collection('users').find();

    if (users) {
        res.json(users);
    } else {
        res.sendStatus(404);
    }

 

});

app.post('/api/adduser', async (req, res) => {
    // Create a document to insert
    const doc = {
        userName: "user07",
        FirstName: "IWas",
        LastName: "Added",
        State: "VIC"
    }
 
      // Insert the defined document into the "haiku" collection
      const result = await db.collection('users').insertOne(doc);

 

});

connectToDb(() => {
    console.log('Successfully connected to ATLAS database!');
    app.listen(8000, () => {
        console.log('Server is listening on port 8000');
    });
})
