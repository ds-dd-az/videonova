export async function getUsers() {
  const response = await fetch(
    "https://wonderful-app-lmk4d.cloud.serverless.com/user"
  )
  return response.json()
}

// eslint-disable-next-line consistent-return
export async function postUser(userdata) {
  const response = await fetch(
    "https://wonderful-app-lmk4d.cloud.serverless.com/register",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userdata),
    }
  )
  if (response.ok) {
    console.log(response)
    return response.json()
  }
  console.log(response)
  console.log("eeeee")
}
