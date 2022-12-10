import mongoose from 'mongoose'

export const User = mongoose.model('User', new mongoose.Schema({
    username: {
      type: String,
      require: true,
    },
    email: {
      type: String,
      require: true,
      unique: true,
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
  })
)
