import { S3 } from 'aws-sdk'

type S3ConfigCredential = {
  accessKeyId: string
  secretAccessKey: string
  region: string
  bucket: string
}

export class S3Service {
  private readonly client: S3
  private readonly bucket: string
  constructor(s3ConfigCredentials: S3ConfigCredential) {
    const { accessKeyId, secretAccessKey, region, bucket } = s3ConfigCredentials
    this.bucket = bucket
    this.client = new S3({
      accessKeyId,
      secretAccessKey,
      region,
    })
  }

  async upload(key: string, data: unknown) {
    const params = { Bucket: this.bucket, Key: key, Body: data }
    await this.client.putObject(params).promise()
  }

  async download(key: string) {
    const params = { Bucket: this.bucket, Key: key }
    const response = this.client.getObject(params).promise()
    return response
  }

  async delete(key: string) {
    const params = { Bucket: this.bucket, Key: key }
    await this.client.deleteObject(params).promise()
  }
}
