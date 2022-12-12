export class InvalidImageFileExtensionError extends Error {
  constructor(filename: string) {
    const fileExtension = filename.split('.')[1]
    super(`The extension '.${fileExtension}' is not a valid image file extension`)
    this.name = 'InvalidImageFileExtensionError'
  }
}
