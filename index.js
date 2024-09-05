import express from 'express'
import dotenv from 'dotenv'
import { mongoDb } from './utils/mongoDb.js';
import { poetryRoute } from './routes/poetry.route.js';

const app = express();
dotenv.config();
app.use(express.json())

const PORT = process.env.PORT

mongoDb()



app.get('/', (req, res) => {
    res.send('hello')
})

app.listen(PORT, () => {
    console.log(`App is running on port ${PORT}`)
})

app.use('/api/poetry', poetryRoute)