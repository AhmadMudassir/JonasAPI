const dotenv = require('dotenv')
dotenv.config({ path: './config.env' })
const app = require('./app')
const mongoose = require('mongoose');


const DB = process.env.DATABASE.replace(
    '<PASSWORD>',
    process.env.DATABASE_PASSWORD
)

mongoose.connect(DB, {
    useNewUrlParser: true,
}).then(() => console.log('DB connection successful!'));

const port = 3000
app.listen(port, () => {
    console.log(`Server running at port ${port}`);
})
