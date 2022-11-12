const PORT = 8080

const express = require('express')

const { MongoClient } = require('mongodb')

const app = express()

app.get('/', (req, res) => {
    res.json("Hello")
})

app.listen(PORT, () => console.log(' Server running on PORT ' + PORT))