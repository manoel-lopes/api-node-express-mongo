import { Request, Response } from 'express'
import fs from 'fs/promises'
import { Image } from '@models/image'
import { S3Service } from '@services/s3-service'
import { ImageFilename } from '@entities/image-filename'
import { formatImage } from '@util/format'

const { 
  AWS_ACCESS_KEY_ID,
  AWS_SECRET_ACCESS_KEY,
  AWS_DEFAULT_REGION,
  S3_BUCKET } = process.env

export class ImageController {
  async create(req: Request, res: Response) {
    try {
      const { file } = req
      const s3Service = new S3Service({
        accessKeyId: AWS_ACCESS_KEY_ID,
        secretAccessKey: AWS_SECRET_ACCESS_KEY,
        region: AWS_DEFAULT_REGION,
        bucket: S3_BUCKET,
      })
      const fileContent = await fs.readFile(file.path)
      const filename = ImageFilename.create(file.filename).value
      await s3Service.upload(filename, fileContent)
      await fs.unlink(file.path)
      const url = `${process.env.S3_BASE_URL}/${filename}`
      const image = await Image.create({ url })
      return res.status(201).json(formatImage(image))
    } catch (e) {
      return res.status(400).json({ error: e.message })
    }
  }
}
