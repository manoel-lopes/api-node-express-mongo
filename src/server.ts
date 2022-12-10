import 'dotenv/config'
import express from 'express'
import mongoose from 'mongoose'
import { UserController } from '@controllers/user-controller'

const PORT = process.env.PORT || 3000
const isProductionEnvironment = process.env.NODE_ENV === 'production'
const MONGO_URI = process.env.MONGO_URI as string

const app = express()
mongoose.connect(MONGO_URI)

app.use(express.json())

const userController = new UserController()
app.post('/user', userController.create)

const callback = () => {
  console.log(`The server is running on http://localhost:${PORT}`)
}

app.listen(PORT, !isProductionEnvironment && callback)
