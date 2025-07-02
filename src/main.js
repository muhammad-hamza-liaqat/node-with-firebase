require("dotenv").config();

const express = require("express")
const app = express()
const db = require("./config/firebase")

const requestLogger = require("./middleware/requestLogger")
const notFoundHandler = require("./middleware/notFoundHandler")

const PORT = process.env.PORT || 8001
app.use(requestLogger);

app.use(express.json());

app.get("/", (req, res) => {
    res.end("Welcome to express server");
});


app.use(notFoundHandler);

app.listen(PORT, () => {
    console.log(`Server is running on port http://127.0.0.1:${PORT}/`)
})