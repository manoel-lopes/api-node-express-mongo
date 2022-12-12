import { removeDiacritics } from '@helpers/remove-diacritics'
import { InvalidImageFileExtensionError } from '@errors/invalid-image-file-extension-error'

export class ImageFilename {
  private constructor(readonly value: string) {}

  static create(filename: string): ImageFilename {
    const filenameWithoutSpecialCharacters =
      this.removeSpecialCharacters(filename)
    if (!this.validate(filenameWithoutSpecialCharacters)) {
      throw new InvalidImageFileExtensionError(filenameWithoutSpecialCharacters)
    }
    return new ImageFilename(filename)
  }

  static validate(filename: string) {
    const filenameExtension = this.splitFilename(filename)[1]
    const filenameExtensionRegex = /(jpg|gif|png|jpeg)$/
    return filenameExtensionRegex.test(filenameExtension)
  }

  static removeSpecialCharacters(filename: string) {
    const [filenameWithoutExtension, filenameExtension] =
      this.splitFilename(filename)
    const specialCharactersAndBlankSpacesRegex = /[^A-Z0-9ç_-]+/gi
    const filenameWithoutExtensionAndSpecialCharacters = removeDiacritics(
      filenameWithoutExtension
    ).replace(specialCharactersAndBlankSpacesRegex, '')
    return `${filenameWithoutExtensionAndSpecialCharacters}.${filenameExtension}`
  }

  static splitFilename(filename: string) {
    const index = filename.lastIndexOf('.')
    const filenameWithoutExtension = filename.substring(0, index)
    const filenameExtension = filename.substring(index + 1)
    return [filenameWithoutExtension, filenameExtension]
  }
}
