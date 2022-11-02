export async function getUsers() {
  const response = await fetch(
    "https://wonderful-app-lmk4d.cloud.serverless.com/user"
  )
  return response.json()
}

export async function postUser(data) {
  const response = await fetch(
    "https://wonderful-app-lmk4d.cloud.serverless.com/register",
    {
      method: "POST",
      body: data,
    }
  )
  return response.json()
}
