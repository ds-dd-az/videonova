export default async function getUserData() {
  const response = await fetch(
    "https://wonderful-app-lmk4d.cloud.serverless.com/user"
  )
  const users = await response.json()
  return users
}
