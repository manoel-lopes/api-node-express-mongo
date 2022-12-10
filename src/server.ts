import 'dotenv/config'
import express from 'express'
import mongoose from 'mongoose'
import { UserController } from './controllers/user-controller'

const PORT = process.env.PORT || 3000
const app = express()
const MONGO_URI = process.env.MONGO_URI as string
mongoose.connect(MONGO_URI)

app.use(express.json())

const userController = new UserController()
app.post('/user', userController.create)

app.listen(PORT, () => {
  console.log(`The server is running on port http://localhost:${PORT}`)
})
