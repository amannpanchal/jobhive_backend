const app = require('./server/app')
require('dotenv').config();
const PORT = process.env.PORT
console.log(process.env.FRONTEND_URL)

app.listen(PORT, () => {
    console.log(`The server is running at port ${PORT}`)
})