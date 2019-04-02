//Client Name
const { MongoClient } = require('mongodb');

// Connection URL
const url = 'mongodb://localhost:27017';

// Database Name
const dbName = 'books';

class bookController {
    static create(req, res) {
        let client = new MongoClient(url, { useNewUrlParser: true })
        const { isbn, title, author, category, stock } = req.body
        // Use connect method to connect to the server
        client
            .connect()
            .then(() => {
                console.log("Connected successfully to server")

                //Collection Name
                const db = client.db(dbName);
                let Book = db.collection('books')

                return Book.insertOne({ isbn, title, author, category, stock })
            })
            .then((createdBook) => {
                res.status(201).json(createdBook)
                client.close();
            })
            .catch((err) => { res.status(400).json(err.message) })
    }

    static findAll(req, res) {
        let client = new MongoClient(url, { useNewUrlParser: true })
        // Use connect method to connect to the server
        client
            .connect()
            .then(() => {
                console.log("Connected successfully to server")

                // Collection Name
                const db = client.db(dbName);
                let Book = db.collection('books')

                return Book.find({}).toArray()
            })
            .then((allBooks) => {
                res.status(200).json(allBooks)
                client.close();
            })
            .catch((err) => { res.status(400).json(err.message) })
    }

    static findOne(req, res) {
        let client = new MongoClient(url, { useNewUrlParser: true })
        // Use connect method to connect to the server
        client
            .connect()
            .then(() => {
                console.log("Connected successfully to server")

                // Collection Name
                const db = client.db(dbName);
                let Book = db.collection('books')

                return Book.findOne({ isbn: req.params.isbn })
            })
            .then((findOneBook) => {
                if (!findOneBook) res.status(404).json({ message: 'Book does not exist!' })
                else res.status(200).json(findOneBook)
                client.close();
            })
            .catch((err) => { res.status(400).json(err.message) })
    }

    static update(req, res) {
        let client = new MongoClient(url, { useNewUrlParser: true })
        const { isbn, title, author, category, stock } = req.body
        // Use connect method to connect to the server
        client
            .connect()
            .then(() => {
                console.log("Connected successfully to server")

                // Collection Name
                const db = client.db(dbName);
                let Book = db.collection('books')

                return Book.updateOne({ isbn: req.params.isbn }, { $set: { isbn, title, author, category, stock } })
            })
            .then((updatedBook) => {
                res.status(200).json({ message: 'Successfully updated', updatedBook })
                client.close();
            })
            .catch((err) => { res.status(400).json(err.message) })
    }

    static patch(req, res) {
        let client = new MongoClient(url, { useNewUrlParser: true })
        const { title } = req.body
        // Use connect method to connect to the server
        client
            .connect()
            .then(() => {
                console.log("Connected successfully to server")

                // Collection Name
                const db = client.db(dbName);
                let Book = db.collection('books')

                return Book.update({ isbn: req.params.isbn }, { $set: { title } })
            })
            .then((updatedBook) => {
                res.status(200).json({ message: 'Successfully patched', updatedBook })
                client.close();
            })
            .catch((err) => { res.status(400).json(err.message) })
    }

    static delete(req, res) {
        let client = new MongoClient(url, { useNewUrlParser: true })
        // Use connect method to connect to the server
        client
            .connect()
            .then(() => {
                console.log("Connected successfully to server")

                // Collection Name
                const db = client.db(dbName);
                let Book = db.collection('books')

                return Book.deleteOne({ isbn: req.params.isbn })
            })
            .then((deletedBook) => {
                res.status(200).json({ message: 'Successfully deleted', deletedBook })
                client.close();
            })
            .catch((err) => { res.status(400).json(err.message) })
    }
}

module.exports = bookController