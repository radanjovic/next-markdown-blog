import {MongoClient} from 'mongodb';

export default async function handler(req, res) {
    // Sending messages to mongodb API
    if (req.method === 'POST') {
        const {email, name, message} = req.body;

        if (!email || !email.trim().includes('@') || !name || name.trim() === '' || !message || message.trim() === '') {
            res.status(422).json({message: 'Invalid input, message was not sent'});
            return;
        }

        const newMessage = {
            email, name, message
        }

        let client;

        const URL = process.env.MONGO_URI

        try {
            client = await MongoClient.connect(URL);
        } catch {
            res.status(500).json({message: 'Could not connect to database'})
            return;
        }

        const db = client.db();

        try {
            const result = await db.collection('messages').insertOne(newMessage);
            newMessage.id = result.insertedId;
        } catch {
            client.close();
            res.status(500).json({message: 'Could not send message. Please try again later'});
            return;
        }

        client.close();
        res.status(201).json({message: 'Successfully stored message!', content: newMessage});
    } else {
        res.redirect('/contact');
    }
}