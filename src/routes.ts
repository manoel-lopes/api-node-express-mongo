import multer from 'multer'
import { uploadConfig } from '@config/multer-config'
import { ImageController } from '@controllers/image-controller'
import { Router } from 'express'

const upload = multer(uploadConfig)
const routes = Router()

const imageController = new ImageController()

routes.post('/image', upload.single('image'), imageController.create)
export { routes }