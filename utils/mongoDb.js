import mongoose from "mongoose"

export const mongoDb = () => {
    try {
        mongoose.connect(process.env.MONGO_URL)
        console.log("mongodb connected!!!")
    } catch (error) {
        console.log('failed to connect mongodb!!!')
    }
}