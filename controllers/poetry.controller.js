import { Poetry } from "../models/poetry.model.js"

// create poetry
export const createPoetry = async (req, res) => {
    try {
        const { poetry, poet, category } = req.body
        const newPoetry = new Poetry({ poetry, poet, category })
        newPoetry.save()
        return res.status(200).json(newPoetry)
    } catch (error) {
        console.log({ msg: `Failed to create poetry !!! ${error}` })
    }
}

// get all poetry
export const getAllPoetry = async (req, res) => {
    try {
        const poetry = await Poetry.find()
        return res.status(200).json(poetry)
    } catch (error) {
        return res.status(400).json({ msg: `Failed to fetch poetry !!! ${error}` })
    }
}

// filter poetries
export const filterPoetry = async (req, res) => {
    try {
        const filter = await Poetry.find(req.query)
        return res.status(200).json(filter)
    } catch (error) {
        return res.status(400).json({ msg: `Failed to filter poetry !!! ${error}` })
    }
}

//update poetries
export const updatePoetry = async (req, res) => {
    const { id } = req.params
    try {
        const findAndUpdate = await Poetry.findByIdAndUpdate(id, req.body, { new: true })
        res.status(200).json(findAndUpdate)
    } catch (error) {
        return res.status(400).json({ msg: `Failed to update poetry !!! ${error}` })
    }
}

// delete poetry
export const deletePoetry = async (req, res) => {
    const { id } = req.params
    try {
        Poetry.findByIdAndDelete(id)
        return res.status(200).json({ msg: 'Poetry delete successfully' })
    } catch (error) {
        return res.status(400).json({ msg: 'Poetry delete successfully' })
    }
}