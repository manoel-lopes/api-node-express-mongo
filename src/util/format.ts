export const formatImage = (entity: any) => {
  const { _id, url } = entity
  return {
    id: _id,
    url,
  }
}
