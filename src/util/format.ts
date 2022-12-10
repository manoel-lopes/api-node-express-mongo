export const format = (entity: any) => {
  const { _id, username, email } = entity
  return {
    id: _id,
    username,
    email,
  }
}
