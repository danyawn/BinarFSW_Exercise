const express = require('express')
const cors = require('cors')
const postsRouter = require('./routes/posts');

const app = express()
app.use(cors())
const port = 5000

app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.use(postsRouter)

app.listen(port, () => {
	console.log(`Server Running on http://localhost:${port}`)
})