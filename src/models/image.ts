import mongoose from 'mongoose'

const ImageSchema = new mongoose.Schema({
  url: {
    type: String,
    require: true,
    unique: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
})

export const Image = mongoose.model('Image', ImageSchema, 'images')
