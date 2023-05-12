const express = require('express')

var bodyParser = require('body-parser')

const app = express()
const port = 5000

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

const { getUsers, Register } = require("./controllers/userController");
// const { verifyToken } = require("./middleware/VerifyToken")
const prefix = "api/";

app.get('/', (req, res) => {
    res.send('Hello World!')
})

//user apis
app.get(prefix + "users", getUsers);
app.post(prefix + "register", Register);
// app.post(prefix + "login", Login);
// app.delete(prefix + "logout", Logout);

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})