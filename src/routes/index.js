const express = require('express');
const { bookRoutes } = require("./book.routes")

const myRoutes = express.Router();

myRoutes.use("/", bookRoutes)

module.exports = { myRoutes }