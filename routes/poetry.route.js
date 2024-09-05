import express from 'express'
import { createPoetry, deletePoetry, filterPoetry, getAllPoetry, updatePoetry } from '../controllers/poetry.controller.js'
export const poetryRoute = express.Router()

poetryRoute.post('/create', createPoetry)
poetryRoute.get('/fetch', getAllPoetry)
poetryRoute.get('/filter', filterPoetry)
poetryRoute.put('/update/:id', updatePoetry)
poetryRoute.delete('/delete/:id', deletePoetry)