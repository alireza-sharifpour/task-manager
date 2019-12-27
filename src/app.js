///Users/alireza/Applications/MongoDB/bin/mongod --dbpath=/Users/alireza/Applications/MongoDB-Data

const express = require('express');
require('./db/mongoose')
const userRouter = require('./routers/user')
const taskRouter = require('./routers/task')

const app = express();

app.use(express.json());
app.use(userRouter);
app.use(taskRouter)

module.exports = app