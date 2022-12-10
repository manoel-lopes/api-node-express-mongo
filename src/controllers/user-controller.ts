import { Request, Response } from 'express'
import { User } from '@models/user'
import { format } from '@util/format'

export class UserController {
  async create(req: Request, res: Response) {
    try {
      const { username, email } = req.body
      const user = await User.create({ username, email })
      return res.status(201).json(format(user))
    } catch (e) {
      console.log(e.message)
    }
  }
}
