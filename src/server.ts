import 'dotenv/config'
import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import { routes } from 'routes'

const PORT = process.env.PORT || 3000
const isProductionEnvironment = process.env.NODE_ENV === 'production'
const MONGO_URI = process.env.MONGO_URI as string

const app = express()
app.use(express.json())
app.use(cors())
app.use(routes)
mongoose.connect(MONGO_URI)

const callback = () => {
  console.log(`The server is running on http://localhost:${PORT}`)
}

app.listen(PORT, !isProductionEnvironment && callback)
