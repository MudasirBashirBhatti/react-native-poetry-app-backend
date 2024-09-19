import express from 'express'
import dotenv from 'dotenv'
import { mongoDb } from './utils/mongoDb.js';
import { poetryRoute } from './routes/poetry.route.js';
import cors from 'cors'

const app = express();
dotenv.config();
app.use(express.json())

app.use(cors({
    origin: [process.env.CLIENT_URL, 'http://localhost:3000'],
    methods: ['PUT', 'POST', 'DELETE', 'GET']
}))

const PORT = process.env.PORT

mongoDb()



app.get('/', (req, res) => {
    res.send('hello')
})

app.listen(PORT, () => {
    console.log(`App is running on port ${PORT}`)
})

app.use('/api/poetry', poetryRoute)