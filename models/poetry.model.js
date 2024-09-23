import mongoose from "mongoose";
const { Schema } = mongoose;
const poetryScehma = new Schema({
    poetry: {
        type: [String],
        required: true
    },
    poet: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    }
}, { timestamps: true })

export const Poetry = mongoose.model('Poetry', poetryScehma)