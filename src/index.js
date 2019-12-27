///Users/alireza/Applications/MongoDB/bin/mongod --dbpath=/Users/alireza/Applications/MongoDB-Data

const app = require('./app')
const port = process.env.PORT

app.listen(port, () => {
    console.log(`Server is Up on port ${port}`)
})

