const PORT = 8080

const express = require('express')

const app = express()

app.listen(PORT, () => console.log(' Server running on PORT ' + PORT))